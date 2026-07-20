// Builds the Shard Distribution Map HTML from per-shard `playwright --list`
// JSON output. Invoked by the `distribution-map` job:
//     node runner-repo/.github/scripts/build-distribution-map.js
//
// Reads:  dist-map/shard-<i>.json           (cwd-relative, one per shard)
//         ../templates/distribution-map-template.html   (resolved via __dirname)
// Writes: dist-map/index.html  and appends a table to $GITHUB_STEP_SUMMARY
//
// Env: SHARD_COUNT, TEST_ENV, BROWSER, TEST_PATTERN, DISTRIBUTE_BY_TEST
const fs = require("fs");
const path = require("path");

const DIR = "dist-map";
const N = parseInt(process.env.SHARD_COUNT || "1", 10);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function collect(suites, acc) {
  for (const s of suites || []) {
    for (const sp of s.specs || []) {
      const tags = [...new Set((sp.tags || []).map((t) => (t[0] === "@" ? t : "@" + t)))];
      acc.push({ title: sp.title, file: sp.file || "", line: sp.line || "", tags });
    }
    if (s.suites) collect(s.suites, acc);
  }
}

const shards = [];
for (let i = 1; i <= N; i++) {
  const f = path.join(DIR, `shard-${i}.json`);
  const specs = [];
  if (fs.existsSync(f)) {
    try {
      collect(JSON.parse(fs.readFileSync(f, "utf8")).suites || [], specs);
    } catch (e) {
      console.error("parse fail", f, e.message);
    }
  }
  shards.push({ shard: i, specs });
}

const totalTests = shards.reduce((a, s) => a + s.specs.length, 0);
const tagFreq = {};
for (const sh of shards) for (const sp of sh.specs) for (const t of sp.tags) tagFreq[t] = (tagFreq[t] || 0) + 1;
const tagRows = Object.entries(tagFreq).sort((a, b) => b[1] - a[1]);

const counts = shards.map((s) => s.specs.length);
const min = Math.min(...counts), max = Math.max(...counts);

const summaryRows = shards
  .map((s) => {
    const files = new Set(s.specs.map((x) => x.file)).size;
    const flag = s.specs.length === 0 ? ' class="empty"' : s.specs.length === max && max !== min ? ' class="heavy"' : "";
    return `<tr${flag}><td>${s.shard}</td><td>${s.specs.length}</td><td>${files}</td></tr>`;
  })
  .join("");

const shardSections = shards
  .map((s) => {
    const rows = s.specs
      .map((sp, idx) => {
        const chips = sp.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join(" ");
        return `<tr><td>${idx + 1}</td><td>${esc(sp.title)}</td><td class="mono">${esc(sp.file)}:${sp.line}</td><td>${chips}</td></tr>`;
      })
      .join("");
    const files = new Set(s.specs.map((x) => x.file)).size;
    return `<details${s.specs.length === 0 ? "" : " open"}>
      <summary>Shard ${s.shard} — <b>${s.specs.length}</b> tests, ${files} files</summary>
      ${s.specs.length ? `<table class="detail"><thead><tr><th>#</th><th>Test</th><th>File:Line</th><th>Tags</th></tr></thead><tbody>${rows}</tbody></table>` : '<p class="empty-note">No tests assigned to this shard.</p>'}
    </details>`;
  })
  .join("");

const tplPath = path.join(__dirname, "..", "templates", "distribution-map-template.html");
const tpl = fs.readFileSync(tplPath, "utf8");
const tagRowsHtml = tagRows.map(([t, c]) => `<tr><td>${esc(t)}</td><td>${c}</td></tr>`).join("");
const html = tpl
  .split("__ENV__").join(esc(process.env.TEST_ENV || ""))
  .split("__BROWSER__").join(esc(process.env.BROWSER || ""))
  .split("__PATTERN__").join(esc(process.env.TEST_PATTERN || ""))
  .split("__DIST__").join(process.env.DISTRIBUTE_BY_TEST === "true" ? "ON" : "OFF")
  .split("__SHARD_COUNT__").join(String(N))
  .split("__TOTAL_TESTS__").join(String(totalTests))
  .split("__MIN_MAX__").join(min + "–" + max)
  .split("<!-- SUMMARY_ROWS -->").join(summaryRows)
  .split("<!-- TAG_ROWS -->").join(tagRowsHtml)
  .split("<!-- SHARD_SECTIONS -->").join(shardSections);

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(path.join(DIR, "index.html"), html);
console.log("Wrote dist-map/index.html —", totalTests, "tests across", N, "shards");

const sp = process.env.GITHUB_STEP_SUMMARY;
if (sp) {
  let md = `## Shard Distribution Map\n\n${totalTests} tests · ${N} shards · ${min}–${max} tests/shard\n\n| Shard | Tests | Files |\n|--:|--:|--:|\n`;
  md += shards.map((s) => `| ${s.shard} | ${s.specs.length} | ${new Set(s.specs.map((x) => x.file)).size} |`).join("\n");
  fs.appendFileSync(sp, md + "\n");
}
