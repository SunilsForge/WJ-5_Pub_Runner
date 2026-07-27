// Builds the per-test Results Table for a MAIN run (Passed/Failed/Flaky/Skipped),
// styled like the rerun table. Invoked by the merge-reports job:
//     node runner-repo/.github/scripts/build-main-results-table.js
//
// Reads:  all-artifacts/playwright-report-shard-*/results.json   (cwd-relative)
//         ../templates/main-results-table-template.html          (via __dirname)
// Writes: merged-report/results-table.html
// Env: RUN_NUMBER, TEST_ENV, BROWSER, TEST_PATTERN
const fs = require("fs");
const path = require("path");

const root = "all-artifacts";
let dirs = [];
try {
  dirs = fs.readdirSync(root).filter((d) => d.startsWith("playwright-report-shard-"));
} catch (e) {
  console.warn("no all-artifacts dir");
}

let total = 0, passed = 0, failed = 0, flaky = 0, skipped = 0;
const failedList = [], flakyList = [], skippedList = [], passedList = [];

function walk(suites) {
  for (const s of suites || []) {
    if (s.suites) walk(s.suites);
    for (const spec of s.specs || []) {
      for (const t of spec.tests || []) {
        total++;
        const row = { title: spec.title, file: spec.file || "" };
        if (t.status === "expected") { passed++; passedList.push(row); }
        else if (t.status === "unexpected") { failed++; failedList.push(row); }
        else if (t.status === "flaky") { flaky++; flakyList.push(row); }
        else if (t.status === "skipped") { skipped++; skippedList.push(row); }
      }
    }
  }
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

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const rows = (arr) =>
  arr.map((t, i) => `<tr><td>${i + 1}</td><td>${esc(t.title)}</td><td class="mono">${esc(t.file)}</td></tr>`).join("") ||
  '<tr><td colspan="3" class="empty">none</td></tr>';

const tpl = fs.readFileSync(path.join(__dirname, "..", "templates", "main-results-table-template.html"), "utf8");
const html = tpl
  .split("__RUN__").join(esc(process.env.RUN_NUMBER || ""))
  .split("__ENV__").join(esc(process.env.TEST_ENV || ""))
  .split("__BROWSER__").join(esc(process.env.BROWSER || ""))
  .split("__TEST_PATTERN__").join(esc(process.env.TEST_PATTERN || ""))
  .split("__TOTAL__").join(String(total))
  .split("__PASSED__").join(String(passed))
  .split("__FAILED__").join(String(failed))
  .split("__FLAKY__").join(String(flaky))
  .split("__SKIPPED__").join(String(skipped))
  .split("<!-- FAILED_ROWS -->").join(rows(failedList))
  .split("<!-- FLAKY_ROWS -->").join(rows(flakyList))
  .split("<!-- SKIPPED_ROWS -->").join(rows(skippedList))
  .split("<!-- PASSED_ROWS -->").join(rows(passedList));

fs.mkdirSync("merged-report", { recursive: true });
fs.writeFileSync("merged-report/results-table.html", html);
console.log(`Results table: ${total} total — ${passed} passed, ${failed} failed, ${flaky} flaky, ${skipped} skipped`);
