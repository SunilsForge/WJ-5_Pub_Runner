// Fills the "Run Setup" block + pre-run notes of the main run's merged report, so the
// report page alone answers: who ran it, when, against what code, with which options.
// Invoked by the merge-reports job (before the shard-entry loop):
//     node runner-repo/.github/scripts/fill-merged-report.js
//
// Reads:  ../templates/merged-report-template.html              (via __dirname)
//         all-artifacts/run-metadata/pre-run-notes.txt           (optional, cwd-relative)
//         all-artifacts/test-status-shard-*/tested-commit.txt    (optional, WJ-5_Pub SHA)
// Writes: merged-report/index.html      (<!-- SHARD_ENTRIES --> is left for the bash loop)
//         merged-report/run-setup.json  (same facts as data; deploy-report folds key
//                                        fields into run-history for the history sidebar)
//
// All values come from env and are HTML-escaped, so quotes, |, &, <, $ in free-text
// inputs (run_reason, test_pattern, branch, environment) can't break the page or shell.
//
// Env: RUN_NUMBER, RUN_ID, RUN_ATTEMPT, RUN_STARTED_AT (YYYYMMDD_HHMMSS UTC), TRIGGERED_BY,
//      REPOSITORY, SERVER_URL, RUNNER_REF, RUNNER_SHA, TEST_REPO, BRANCH, ENVIRONMENT,
//      TEST_PATTERN, CREDENTIAL_SET, BROWSER, SHARD_COUNT, DISTRIBUTE_BY_TEST, NUM_RETRIES,
//      VIDEO_MODE, TRACE_MODE, LOG_RAW_VALUES, RERUN_FAILED, RERUN_PASSES,
//      FINAL_PASS_SLOWMO_MS, KEEP_LAST_RUNS, RUN_REASON, CURRENT_DATE
const fs = require("fs");
const path = require("path");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const env = (k, d = "") => (process.env[k] === undefined || process.env[k] === "" ? d : process.env[k]);
const on = (k) => env(k) === "true";

// ── Facts ────────────────────────────────────────────────────────────────────
function testedCommit() {
  try {
    for (const d of fs.readdirSync("all-artifacts").filter((x) => x.startsWith("test-status-shard-")).sort()) {
      const f = path.join("all-artifacts", d, "tested-commit.txt");
      if (fs.existsSync(f)) {
        const sha = fs.readFileSync(f, "utf8").trim();
        if (/^[0-9a-f]{7,40}$/i.test(sha)) return sha;
      }
    }
  } catch (e) {
    /* no artifacts dir — leave unknown */
  }
  return "";
}

function fmtStarted(ts) {
  const m = /^(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})$/.exec(ts || "");
  return m ? `${m[1]}-${m[2]}-${m[3]} ${m[4]}:${m[5]}:${m[6]} UTC` : "unknown";
}

const reason = env("RUN_REASON");
const minRun = (/min_run=(\d+)/.exec(reason) || [])[1] || "";
const passes = parseInt(env("RERUN_PASSES", "1"), 10) || 1;
const server = env("SERVER_URL", "https://github.com");
const repo = env("REPOSITORY");
const testRepo = env("TEST_REPO", "SunilsForge/WJ-5_Pub");
const commit = testedCommit();

const setup = {
  runNumber: env("RUN_NUMBER"),
  runId: env("RUN_ID"),
  runAttempt: env("RUN_ATTEMPT", "1"),
  startedAt: env("RUN_STARTED_AT"),
  triggeredBy: env("TRIGGERED_BY"),
  runnerRef: env("RUNNER_REF"),
  runnerSha: env("RUNNER_SHA"),
  branch: env("BRANCH"),
  testCommit: commit,
  environment: env("ENVIRONMENT"),
  testPattern: env("TEST_PATTERN"),
  browser: env("BROWSER"),
  credentialSet: env("CREDENTIAL_SET"),
  shardCount: env("SHARD_COUNT"),
  distributeByTest: on("DISTRIBUTE_BY_TEST"),
  numRetries: env("NUM_RETRIES"),
  videoMode: env("VIDEO_MODE"),
  traceMode: env("TRACE_MODE"),
  logRawValues: on("LOG_RAW_VALUES"),
  rerunFailed: on("RERUN_FAILED"),
  rerunPasses: passes,
  finalPassSlowmoMs: env("FINAL_PASS_SLOWMO_MS"),
  keepLastRuns: env("KEEP_LAST_RUNS"),
  minRun,
};

// ── HTML ─────────────────────────────────────────────────────────────────────
const link = (href, text) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text)}</a>`;
const code = (s) => `<code>${esc(s)}</code>`;
const pill = (text, kind) => `<span class="pill ${kind}">${esc(text)}</span>`;
const row = (emoji, label, valueHtml) =>
  `<div class="setup-row"><span class="setup-label">${emoji} ${esc(label)}</span><span class="setup-value">${valueHtml}</span></div>`;
const card = (title, rows) => `<div class="setup-card"><h3>${title}</h3>${rows.join("")}</div>`;
const orDash = (v) => (v ? esc(v) : "—");

const actionsUrl = repo && setup.runId ? `${server}/${repo}/actions/runs/${setup.runId}` : "";
const runRows = [
  row("🔢", "Run", `#${esc(setup.runNumber)}${setup.runAttempt !== "1" ? ` (attempt ${esc(setup.runAttempt)})` : ""}`),
  row("⚙️", "GitHub Actions", actionsUrl ? link(actionsUrl, "Open this run ↗") : "—"),
  row("👤", "Triggered by", orDash(setup.triggeredBy)),
  row("🕒", "Started", esc(fmtStarted(setup.startedAt))),
  row(
    "🛠️",
    "Runner workflow",
    `${orDash(setup.runnerRef)}${setup.runnerSha ? " @ " + (repo ? link(`${server}/${repo}/commit/${setup.runnerSha}`, setup.runnerSha.slice(0, 7)) : code(setup.runnerSha.slice(0, 7))) : ""}`
  ),
];
const testedRows = [
  row(
    "🌿",
    "Test repo branch",
    `${code(setup.branch || "—")}${commit ? " @ " + link(`${server}/${testRepo}/commit/${commit}`, commit.slice(0, 7)) : ""}`
  ),
  row("🌍", "Environment", pill(setup.environment || "—", /^prod/i.test(setup.environment) ? "warn" : "info")),
  row("🏷️", "Test pattern", code(setup.testPattern || "—")),
  row("🌐", "Browser", orDash(setup.browser)),
  row("🔐", "Credential set", orDash(setup.credentialSet)),
];
const execRows = [
  row("🧩", "Shards", orDash(setup.shardCount)),
  row("⚖️", "Distribute by test count", setup.distributeByTest ? pill("ON", "on") : pill("off", "off")),
  row("🔁", "Retries per test", orDash(setup.numRetries)),
  row("🎥", "Video", orDash(setup.videoMode)),
  row("🔍", "Trace", orDash(setup.traceMode)),
  row("📝", "Raw-value logging", setup.logRawValues ? pill("ON (verbose)", "warn") : pill("off", "off")),
];
const rerunRows = setup.rerunFailed
  ? [
      row("🔄", "Auto-rerun failures", pill("ON", "on")),
      row("🔂", "Rerun passes", esc(String(passes))),
      row(
        "🐢",
        "Final-pass slow-mo",
        passes >= 2 ? `${esc(setup.finalPassSlowmoMs || "500")} ms on pass ${passes} (2× timeout)` : "not used (needs 2+ passes)"
      ),
    ]
  : [row("🔄", "Auto-rerun failures", pill("off", "off"))];
const publishRows = [
  row(
    "📦",
    "Pages retention",
    minRun ? `runs ≥ #${esc(minRun)} (${code("min_run")} directive overrides keep_last_runs)` : `last ${orDash(setup.keepLastRuns)} main runs`
  ),
  row("🧾", "Report built", esc(env("CURRENT_DATE", "—")) + " UTC"),
];

const setupHtml = `<div class="run-setup">
      <h2>🧭 Run Setup</h2>
      <div class="setup-grid">
        ${card("🚀 Run", runRows)}
        ${card("🎯 What was tested", testedRows)}
        ${card("⚙️ Execution", execRows)}
        ${card("🔄 Failure reruns", rerunRows)}
        ${card("📦 Publishing", publishRows)}
      </div>
    </div>`;

const notesFile = path.join("all-artifacts", "run-metadata", "pre-run-notes.txt");
let notes = "";
if (fs.existsSync(notesFile)) {
  notes = `<div class='notes-section'><h3>📝 Pre-Run Notes</h3><p>${esc(fs.readFileSync(notesFile, "utf8").trim())}</p></div>`;
}

const tpl = fs.readFileSync(path.join(__dirname, "..", "templates", "merged-report-template.html"), "utf8");
const html = tpl
  .split("<!-- PRE_RUN_NOTES -->").join(notes)
  .split("<!-- RUN_SETUP -->").join(setupHtml)
  .split("__RUN_NUMBER__").join(esc(setup.runNumber))
  .split("__GITHUB_RUN_ID__").join(esc(setup.runId));

fs.mkdirSync("merged-report", { recursive: true });
fs.writeFileSync(path.join("merged-report", "index.html"), html);
fs.writeFileSync(path.join("merged-report", "run-setup.json"), JSON.stringify(setup, null, 2));
console.log(
  `Wrote merged-report/index.html + run-setup.json (run #${setup.runNumber}, ${setup.environment}, ` +
    `commit ${commit ? commit.slice(0, 7) : "unknown"}${notes ? ", pre-run notes" : ""})`
);
