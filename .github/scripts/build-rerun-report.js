// Classifies rerun results (flaky = passed on rerun, real = failed again) and
// builds the rerun HTML report from .github/templates/rerun-report-template.html.
// Invoked by the rerun-failures `publish` job:
//     node runner-repo/.github/scripts/build-rerun-report.js
//
// Reads:  all-artifacts/rerun-report-shard-*/results.json   (cwd-relative)
//         ../templates/rerun-report-template.html            (via __dirname)
// Writes: rerun-report/index.html
//         GITHUB_OUTPUT: reran, flaky, still_failing   (consumed downstream)
//         appends to GITHUB_STEP_SUMMARY
//
// Env: SOURCE_RUN_ID, RUN_REASON, TEST_ENV, BROWSER
const fs = require("fs");
const path = require("path");

const root = "all-artifacts";
let reran = 0, flaky = 0, still = 0;
const stillList = [], flakyList = [];

function walk(suites) {
  for (const s of suites || []) {
    if (s.suites) walk(s.suites);
    for (const spec of s.specs || []) {
      for (const t of spec.tests || []) {
        reran++;
        if (t.status === "expected" || t.status === "flaky") {
          flaky++;
          flakyList.push({ title: spec.title, file: spec.file || "" });
        } else if (t.status === "unexpected") {
          still++;
          stillList.push({ title: spec.title, file: spec.file || "" });
        }
      }
    }
  }
}

let dirs = [];
try {
  dirs = fs.readdirSync(root).filter((d) => d.startsWith("rerun-report-shard-"));
} catch (e) {
  console.warn("no all-artifacts dir");
}
for (const d of dirs) {
  const f = path.join(root, d, "results.json");
  if (!fs.existsSync(f)) continue;
  try {
    walk(JSON.parse(fs.readFileSync(f, "utf8")).suites || []);
  } catch (e) {
    console.error("parse", f, e.message);
  }
}

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `reran=${reran}\nflaky=${flaky}\nstill_failing=${still}\n`);
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const rows = (arr) =>
  arr.map((t, i) => `<tr><td>${i + 1}</td><td>${esc(t.title)}</td><td class="mono">${esc(t.file)}</td></tr>`).join("") ||
  '<tr><td colspan="3" class="empty">none</td></tr>';

const tpl = fs.readFileSync(path.join(__dirname, "..", "templates", "rerun-report-template.html"), "utf8");
const html = tpl
  .split("__SOURCE_RUN__").join(esc(process.env.SOURCE_RUN_ID || ""))
  .split("__RUN_REASON__").join(esc(process.env.RUN_REASON || ""))
  .split("__ENV__").join(esc(process.env.TEST_ENV || ""))
  .split("__BROWSER__").join(esc(process.env.BROWSER || ""))
  .split("__RERAN__").join(String(reran))
  .split("__FLAKY__").join(String(flaky))
  .split("__STILL__").join(String(still))
  .split("<!-- STILL_ROWS -->").join(rows(stillList))
  .split("<!-- FLAKY_ROWS -->").join(rows(flakyList));

fs.mkdirSync("rerun-report", { recursive: true });
fs.writeFileSync("rerun-report/index.html", html);

if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `## Rerun of #${process.env.SOURCE_RUN_ID}\n\n- Re-ran: **${reran}**\n- Now passing (flaky): **${flaky}**\n- Still failing (real): **${still}**\n`
  );
}
console.log(`Reran ${reran}: ${flaky} flaky, ${still} still failing`);
