// Single parser for the main run's per-shard Playwright JSON results. Replaces the
// two inline copies that used to live in merge-reports ("Extract counts…") and
// notify ("Parse results…"). Invoked by merge-reports, and by notify only as a
// fallback when the results-summary artifact is missing:
//     node runner-repo/.github/scripts/parse-results.js
//
// Reads:  $ARTIFACTS_DIR/playwright-report-shard-<i>/results.json   (cwd-relative)
// Writes: $DASHBOARD_OUT/run-counts.json         slim scalars → run-history.master.json
//         $DASHBOARD_OUT/dashboard-summary.json  failure groups + flaky names → dashboard
//         $SUMMARY_OUT                           counts + detailed failures → Slack/Step Summary
//         (DASHBOARD_OUT empty = skip the two dashboard files)
//
// The dashboard and Slack deliberately keep their own error formats (the shapes
// already stored on gh-pages must not change), so both are computed in one walk.
//
// Env: ARTIFACTS_DIR (default all-artifacts), DASHBOARD_OUT (default merged-report),
//      SUMMARY_OUT (default results-summary/results-summary.json)
const fs = require("fs");
const path = require("path");

const ARTIFACTS_DIR = process.env.ARTIFACTS_DIR || "all-artifacts";
const DASHBOARD_OUT = process.env.DASHBOARD_OUT ?? "merged-report";
const SUMMARY_OUT = process.env.SUMMARY_OUT || "results-summary/results-summary.json";

const stripAnsi = (s) => String(s || "").replace(/\u001b\[[0-9;]*m/g, "");
// Normalize an error line so grouping is stable across runs.
const normalizeError = (msg) =>
  msg
    .replace(/'[^']*'/g, "'...'")
    .replace(/"[^"]*"/g, '"..."')
    .replace(/\d+ms/g, "Nms")
    .replace(/locator\('[^']*'\)/g, "locator('...')")
    .replace(/\d+/g, "N")
    .substring(0, 150);

let shardDirs = [];
try {
  shardDirs = fs
    .readdirSync(ARTIFACTS_DIR)
    .filter((d) => d.startsWith("playwright-report-shard-"))
    .sort((a, b) => parseInt(a.split("-").pop()) - parseInt(b.split("-").pop()));
} catch (e) {
  console.warn("No artifacts directory —", e.message);
}

let totalTests = 0, totalPassed = 0, totalFailed = 0, totalSkipped = 0, totalFlaky = 0, durationMs = 0;
let shardsWithJson = 0;
const shardsMissingJson = [];
const dashFailures = [];
const slackFailures = [];
const flakyTests = [];

// Slack's detailed error: type + what it was doing (call log) + where (file:line).
function detailedError(error) {
  const msgLines = stripAnsi(error?.message || "No error message available").split("\n").map((l) => l.trim()).filter(Boolean);
  const stackLines = stripAnsi(error?.stack || "").split("\n").map((l) => l.trim()).filter(Boolean);
  const errorType = msgLines[0] || "Unknown error";
  const callLogLine = msgLines.find((l) => l.startsWith("- waiting for") || l.startsWith("- locator"));
  // Playwright puts the location in the stack, so check message and stack.
  const fileLine = [...msgLines, ...stackLines].find((l) => /^at\s+/.test(l) && /\.(page|spec|ts|js)[:\d]*/.test(l));
  let detail = errorType.substring(0, 200);
  if (callLogLine) detail += "\n" + callLogLine.substring(0, 200);
  if (fileLine) detail += "\n" + fileLine.substring(0, 200);
  return { error: detail, errorType: normalizeError(errorType) };
}

// Child suites are walked BEFORE a suite's own specs — same order as the old
// inline parsers, so failure lists and groups come out in the same order.
function walkSuites(suites) {
  for (const suite of suites || []) {
    if (suite.suites) walkSuites(suite.suites);
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        totalTests++;
        if (test.status === "expected") {
          totalPassed++;
        } else if (test.status === "unexpected") {
          totalFailed++;
          const lastError = test.results?.[test.results.length - 1]?.error;
          const firstLine = stripAnsi(lastError?.message || "Unknown error").split("\n")[0].trim().substring(0, 200);
          dashFailures.push({ title: spec.title, file: spec.file || "", errorType: normalizeError(firstLine), errorFirstLine: firstLine });
          slackFailures.push({ title: spec.title, file: spec.file || "", ...detailedError(lastError) });
        } else if (test.status === "flaky") {
          totalFlaky++;
          flakyTests.push({ title: spec.title, file: spec.file || "" });
        } else if (test.status === "skipped") {
          totalSkipped++;
        }
        // Sum of per-test durations across attempts (test work, not wall-clock).
        for (const r of test.results || []) if (typeof r.duration === "number") durationMs += r.duration;
      }
    }
  }
}

for (const dir of shardDirs) {
  const jsonPath = path.join(ARTIFACTS_DIR, dir, "results.json");
  if (!fs.existsSync(jsonPath)) {
    console.warn("Missing", jsonPath);
    shardsMissingJson.push(dir.split("-").pop());
    continue;
  }
  try {
    walkSuites(JSON.parse(fs.readFileSync(jsonPath, "utf8")).suites || []);
    shardsWithJson++;
  } catch (e) {
    console.error("Could not parse", jsonPath, "-", e.message);
    shardsMissingJson.push(dir.split("-").pop());
  }
}

const counts = { totalTests, totalPassed, totalFailed, totalSkipped, totalFlaky, durationMs };

if (DASHBOARD_OUT) {
  const groupedMap = {};
  for (const f of dashFailures) {
    if (!groupedMap[f.errorType]) groupedMap[f.errorType] = { errorType: f.errorType, count: 0, errorFirstLine: f.errorFirstLine, tests: [] };
    groupedMap[f.errorType].count++;
    groupedMap[f.errorType].tests.push({ title: f.title, file: f.file });
  }
  const failureGroups = Object.values(groupedMap).sort((a, b) => b.count - a.count);
  fs.mkdirSync(DASHBOARD_OUT, { recursive: true });
  fs.writeFileSync(path.join(DASHBOARD_OUT, "run-counts.json"), JSON.stringify(counts));
  fs.writeFileSync(
    path.join(DASHBOARD_OUT, "dashboard-summary.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), counts, failureGroups, flakyTests })
  );
  console.log("Wrote run-counts.json:", counts);
  console.log("Wrote dashboard-summary.json with", failureGroups.length, "failure groups,", flakyTests.length, "flaky tests");
}

fs.mkdirSync(path.dirname(SUMMARY_OUT), { recursive: true });
fs.writeFileSync(SUMMARY_OUT, JSON.stringify({ counts, shardsWithJson, shardsMissingJson, failures: slackFailures }));
console.log(`Wrote ${SUMMARY_OUT}: ${slackFailures.length} failure(s), ${shardsWithJson} shard JSON(s), missing: ${shardsMissingJson.join(", ") || "none"}`);
