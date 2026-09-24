// Fills the run-settings header + pre-run notes of the main run's merged report.
// Invoked by the merge-reports job (before the shard-entry loop):
//     node runner-repo/.github/scripts/fill-merged-report.js
//
// Reads:  ../templates/merged-report-template.html         (via __dirname)
//         all-artifacts/run-metadata/pre-run-notes.txt      (optional, cwd-relative)
// Writes: merged-report/index.html  (<!-- SHARD_ENTRIES --> is left for the bash loop)
//
// All values come from env and are HTML-escaped, so quotes, |, &, <, $ in
// free-text inputs (run_reason, test_pattern, environment) can't break the page
// or the shell — previously these were spliced in with sed/awk.
//
// Env: ENVIRONMENT, BROWSER, TEST_PATTERN, SHARD_COUNT, NUM_RETRIES, VIDEO_MODE,
//      TRACE_MODE, LOG_RAW_VALUES_LABEL, CURRENT_DATE, RUN_ID
const fs = require("fs");
const path = require("path");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const env = (k) => esc(process.env[k] || "");

const notesFile = path.join("all-artifacts", "run-metadata", "pre-run-notes.txt");
let notes = "";
if (fs.existsSync(notesFile)) {
  notes = `<div class='notes-section'><h3>Pre-Run Notes</h3><p>${esc(fs.readFileSync(notesFile, "utf8").trim())}</p></div>`;
}

const tpl = fs.readFileSync(path.join(__dirname, "..", "templates", "merged-report-template.html"), "utf8");
const html = tpl
  .split("<!-- PRE_RUN_NOTES -->").join(notes)
  .split("__ENVIRONMENT__").join(env("ENVIRONMENT"))
  .split("__BROWSER__").join(env("BROWSER"))
  .split("__TEST_PATTERN__").join(env("TEST_PATTERN"))
  .split("__SHARD_COUNT__").join(env("SHARD_COUNT"))
  .split("__NUM_RETRIES__").join(env("NUM_RETRIES"))
  .split("__VIDEO_MODE__").join(env("VIDEO_MODE"))
  .split("__TRACE_MODE__").join(env("TRACE_MODE"))
  .split("__LOG_RAW_VALUES__").join(env("LOG_RAW_VALUES_LABEL"))
  .split("__CURRENT_DATE__").join(env("CURRENT_DATE"))
  .split("__GITHUB_RUN_ID__").join(env("RUN_ID"));

fs.mkdirSync("merged-report", { recursive: true });
fs.writeFileSync(path.join("merged-report", "index.html"), html);
console.log("Wrote merged-report/index.html (settings header" + (notes ? " + pre-run notes" : "") + ")");
