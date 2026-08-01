// Builds a ready-to-use "still failing" marker so a developer can re-run exactly
// those tests LOCALLY with `playwright test --last-failed`.
//
// Each rerun shard preserves the tests it could not pass in
// test-results/last-run.json (Playwright's own --last-failed marker). This unions
// them into one file + a README with the exact local commands.
//
// Invoked by the rerun-failures `publish` job:
//     node runner-repo/.github/scripts/build-local-last-run.js
//
// Reads:  all-artifacts/rerun-report-shard-*/test-results/last-run.json
// Writes: rerun-report/last-run.json          (non-dotted so it downloads cleanly)
//         rerun-report/local-rerun-README.txt
// Env: BRANCH, TEST_ENV, BROWSER, PASS_NUMBER, ORIGIN_RUN
const fs = require("fs");
const path = require("path");

const root = "all-artifacts";
const failed = new Set();
let dirs = [];
try {
  dirs = fs.readdirSync(root).filter((d) => /^rerun-report-shard-\d+$/.test(d));
} catch (e) {
  console.warn("no all-artifacts dir");
}
for (const d of dirs) {
  const f = path.join(root, d, "test-results", "last-run.json");
  if (!fs.existsSync(f)) continue;
  try {
    const j = JSON.parse(fs.readFileSync(f, "utf8"));
    for (const id of j.failedTests || []) failed.add(id);
  } catch (e) {
    console.error("parse", f, e.message);
  }
}

const ids = [...failed];
if (ids.length === 0) {
  console.log("No still-failing tests — skipping local rerun file.");
  process.exit(0);
}

// Human-readable fallback: title + file of everything still failing, taken from
// each shard's results.json. Useful if a test was renamed after the run (its id
// would be stale) — you can then target the spec files directly.
const stillFailing = [];
function walk(suites) {
  for (const s of suites || []) {
    if (s.suites) walk(s.suites);
    for (const spec of s.specs || []) {
      for (const t of spec.tests || []) {
        if (t.status === "unexpected") stillFailing.push({ title: spec.title, file: spec.file || "" });
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
const specFiles = [...new Set(stillFailing.map((t) => t.file).filter(Boolean))].sort();

fs.mkdirSync("rerun-report", { recursive: true });
fs.writeFileSync("rerun-report/last-run.json", JSON.stringify({ status: "failed", failedTests: ids }, null, 2));

const branch = process.env.BRANCH || "main";
const env = process.env.TEST_ENV || "stage";
const browser = process.env.BROWSER || "chrome";
const readme = `Re-run the still-failing tests LOCALLY
=======================================
Source: main run #${process.env.ORIGIN_RUN || "?"}, rerun pass ${process.env.PASS_NUMBER || "?"}
Still-failing tests: ${ids.length}

These are the tests that were still failing after the final rerun pass. Playwright
can re-run exactly this set for you via --last-failed.

STEPS (run from the root of the WJ-5_Pub repo)

  1) Use the SAME code the run used, otherwise the test IDs won't match:
       git checkout ${branch}
       git pull

  2) Put this marker where Playwright looks for it:
       mkdir -p test-results
       cp last-run.json test-results/.last-run.json      # note the leading dot

  3) Re-run just those tests:
       npx cross-env test=${env} npx playwright test --last-failed --project=${browser}

     Add --headed to watch them, or --workers=1 to run them one at a time:
       npx cross-env test=${env} npx playwright test --last-failed --project=${browser} --headed --workers=1

FALLBACK (only if step 3 reports "no tests found")
  That means a test/file was renamed after the run, so the saved ids are stale.
  Run the affected spec files directly instead (runs the whole file):

       npx cross-env test=${env} npx playwright test --project=${browser} \\
         ${specFiles.map((f) => `"${f}"`).join(" \\\n         ") || "(none)"}

  The full list of still-failing tests is in still-failing-tests.txt.

NOTES
  - Test ids are sha1(project + file path + test titles) — nothing machine-specific,
    so they transfer to your laptop fine. Only a different branch or a renamed
    test/file breaks the match. Use the same branch/commit as the run.
  - Re-running updates test-results/.last-run.json locally, so a second
    --last-failed run will narrow to whatever still fails on your machine.
`;
fs.writeFileSync("rerun-report/local-rerun-README.txt", readme);

const list =
  `Still failing after rerun pass ${process.env.PASS_NUMBER || "?"} (main run #${process.env.ORIGIN_RUN || "?"}) — ${stillFailing.length} test(s)\n\n` +
  stillFailing.map((t, i) => `${i + 1}. ${t.title}\n   ${t.file}`).join("\n") +
  `\n\nAffected spec files (${specFiles.length}):\n` +
  specFiles.map((f) => `  ${f}`).join("\n") +
  "\n";
fs.writeFileSync("rerun-report/still-failing-tests.txt", list);

console.log(
  `Local rerun file written: ${ids.length} still-failing test id(s), ${stillFailing.length} listed, ${specFiles.length} spec file(s) -> rerun-report/`
);
