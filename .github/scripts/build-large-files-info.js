// Explains files left out of the Pages deploy for being > 100 MB (apply-main-run.sh
// skips them via rsync --max-size). Invoked by deploy-report after the pruned view
// is built:
//     node runner-repo/.github/scripts/build-large-files-info.js
//
// Reads:  every file under $NEW_REPORT_DIR (the downloaded merged report)
//         ../templates/large-files-info-template.html, large-file-placeholder-template.html
// Writes: only when a large file exists —
//         $RUN_DIR/large-files-info/{index.html, large_files_list.txt}
//         a placeholder <name>.html next to where each excluded file would have been
//         a warning banner after <body> in $RUN_DIR/index.html
//
// Env: NEW_REPORT_DIR, RUN_DIR, ACTIONS_URL
const fs = require("fs");
const path = require("path");

const NEW_REPORT_DIR = process.env.NEW_REPORT_DIR || "new-report";
const RUN_DIR = process.env.RUN_DIR;
const MAX_BYTES = 100 * 1024 * 1024;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Two decimals, truncated (matches the old `bc scale=2` output).
const toMb = (bytes) => (Math.floor((bytes / 1048576) * 100) / 100).toFixed(2);

if (!RUN_DIR) {
  console.error("RUN_DIR not set");
  process.exit(1);
}

const large = [];
(function walk(dir) {
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return;
  }
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.isFile()) {
      const size = fs.statSync(p).size;
      if (size > MAX_BYTES) large.push({ rel: path.relative(NEW_REPORT_DIR, p).split(path.sep).join("/"), sizeMb: toMb(size) });
    }
  }
})(NEW_REPORT_DIR);

console.log("Checking for large files...");
if (!large.length) {
  console.log("No files over 100 MB.");
  process.exit(0);
}
for (const f of large) console.log(`Large file detected: ${f.rel} (${f.sizeMb} MB)`);

const tplDir = path.join(__dirname, "..", "templates");
const infoDir = path.join(RUN_DIR, "large-files-info");
fs.mkdirSync(infoDir, { recursive: true });
fs.writeFileSync(path.join(infoDir, "large_files_list.txt"), large.map((f) => `Large file detected: ${f.rel} (${f.sizeMb} MB)\n`).join(""));

const rows = large.map((f) => `<tr><td>${esc(f.rel)}</td><td>${f.sizeMb} MB</td></tr>`).join("\n    ");
fs.writeFileSync(
  path.join(infoDir, "index.html"),
  fs
    .readFileSync(path.join(tplDir, "large-files-info-template.html"), "utf8")
    .split("<!-- ROWS -->").join(rows)
    .split("__ACTIONS_URL__").join(esc(process.env.ACTIONS_URL || "#"))
);

const placeholderTpl = fs.readFileSync(path.join(tplDir, "large-file-placeholder-template.html"), "utf8");
for (const f of large) {
  const dir = path.join(RUN_DIR, path.dirname(f.rel));
  fs.mkdirSync(dir, { recursive: true });
  const base = path.basename(f.rel);
  const stem = base.includes(".") ? base.slice(0, base.lastIndexOf(".")) : base;
  // Relative link from the placeholder back to large-files-info/ (correct at any depth).
  const infoLink = path.relative(dir, path.join(infoDir, "index.html")).split(path.sep).join("/");
  fs.writeFileSync(
    path.join(dir, `${stem}.html`),
    placeholderTpl.split("__FILE_NAME__").join(esc(base)).split("__SIZE_MB__").join(f.sizeMb).split("__INFO_LINK__").join(esc(infoLink))
  );
}

const runIndex = path.join(RUN_DIR, "index.html");
if (fs.existsSync(runIndex)) {
  const banner = `
<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0;">
  <h3 style="margin-top: 0;">⚠️ Some files were too large to be included in this report</h3>
  <p>Some large files from test results have been excluded from this GitHub Pages deployment due to GitHub file size limits.</p>
  <p><a href="large-files-info/index.html" style="color: #0366d6;">View information about excluded files</a></p>
</div>`;
  const html = fs.readFileSync(runIndex, "utf8");
  // First <body> only (the old sed hit every line containing <body>).
  if (html.includes("<body>")) fs.writeFileSync(runIndex, html.replace("<body>", "<body>" + banner));
}
console.log(`Documented ${large.length} large file(s) in ${infoDir}`);
