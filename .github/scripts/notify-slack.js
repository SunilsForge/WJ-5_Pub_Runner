// Main-run Step Summary + Slack message. Invoked by the notify job:
//     node runner-repo/.github/scripts/notify-slack.js
//
// Reads:  $SUMMARY_FILE — written by parse-results.js (counts, shardsMissingJson,
//         detailed failures). Missing/unreadable → zero counts plus a warning.
// Writes: a markdown table to $GITHUB_STEP_SUMMARY, posts to $SLACK_WEBHOOK_URL.
//         No webhook → prints the payload (dry run) and exits 0.
//
// Env: SUMMARY_FILE (default results-summary/results-summary.json), SLACK_WEBHOOK_URL,
//      TEST_ENV, BROWSER, TEST_PATTERN, SHARD_COUNT, RUN_REASON, TEST_NEEDS_RESULT, PAGES_URL
const fs = require("fs");
const https = require("https");
const { URL } = require("url");

const SUMMARY_FILE = process.env.SUMMARY_FILE || "results-summary/results-summary.json";
let summaryData = { counts: {}, shardsMissingJson: [], failures: [] };
let summaryMissing = false;
try {
  summaryData = JSON.parse(fs.readFileSync(SUMMARY_FILE, "utf8"));
} catch (e) {
  summaryMissing = true;
  console.error(`Could not read ${SUMMARY_FILE}:`, e.message);
}
const { totalTests = 0, totalPassed = 0, totalFailed = 0, totalSkipped = 0, totalFlaky = 0 } = summaryData.counts || {};
const shardsMissingJson = summaryData.shardsMissingJson || [];
const failures = summaryData.failures || [];

// Slack mrkdwn treats & < > as control characters (links/mentions); escape free text.
const slackEsc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ── Determine overall status ──
const overallFailed = totalFailed > 0 || process.env.TEST_NEEDS_RESULT === "failure";
const statusText = overallFailed ? "FAILED" : "PASSED";

// ── Group failures by normalized error type (most frequent first) ──
const grouped = {};
for (const f of failures) {
  if (!grouped[f.errorType]) grouped[f.errorType] = [];
  grouped[f.errorType].push(f);
}
const groupedEntries = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);

// ── Build URLs ──
const repo = process.env.GITHUB_REPOSITORY;
const runId = process.env.GITHUB_RUN_ID;
const runNumber = process.env.GITHUB_RUN_NUMBER;
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repoName = repo.split("/")[1];
const actionsUrl = `https://github.com/${repo}/actions/runs/${runId}`;
// Use the actual deployed URL from deploy-report; fall back to convention if deploy was skipped.
const pagesUrl = process.env.PAGES_URL || `https://${owner}.github.io/${repoName}/`;

// ── Write GitHub Step Summary (markdown table in Actions UI) ──
// Escape pipes and turn newlines into <br> for markdown table cells.
const mdCell = (str) => str.replace(/\|/g, "\\|").replace(/\n/g, "<br>");
let summary = `## ${overallFailed ? "\u{1F534}" : "\u{1F7E2}"} Playwright Test Results — Run #${runNumber}\n\n`;
summary += `**Environment:** ${process.env.TEST_ENV} | **Browser:** ${process.env.BROWSER} | **Shards:** ${process.env.SHARD_COUNT}\n\n`;
if (summaryMissing) summary += `> ⚠ Results summary unavailable — counts below are incomplete.\n\n`;
summary += `| Metric | Count |\n|---|---|\n`;
summary += `| Total | ${totalTests} |\n`;
summary += `| Passed | ${totalPassed} |\n`;
summary += `| Failed | ${totalFailed} |\n`;
summary += `| Skipped | ${totalSkipped} |\n`;
summary += `| Flaky | ${totalFlaky} |\n\n`;
if (groupedEntries.length > 0) {
  // Section A: Grouped by error type
  summary += `### Failure Analysis\n\n`;
  summary += `| Sl.No | Test Cases | Count | Error Reason |\n|---|---|---|---|\n`;
  groupedEntries.forEach(([, tests], idx) => {
    const tcList = tests.map((t) => `${mdCell(t.title)} (${mdCell(t.file)})`).join(", ");
    // <br> outside backticks so the HTML renders.
    const detail = tests[0].error.split("\n").map((l) => `\`${l.replace(/\|/g, "\\|")}\``).join("<br>");
    summary += `| ${idx + 1} | ${tcList} | ${tests.length} | ${detail} |\n`;
  });
  summary += "\n";

  // Section B: Detailed per-TC failures
  summary += `### Detailed Failures\n\n`;
  summary += `| # | Test Case | File | Error |\n|---|---|---|---|\n`;
  failures.forEach((f, idx) => {
    const detail = f.error.split("\n").map((l) => `\`${l.replace(/\|/g, "\\|")}\``).join("<br>");
    summary += `| ${idx + 1} | ${mdCell(f.title)} | ${mdCell(f.file)} | ${detail} |\n`;
  });
  summary += "\n";
}
summary += `[Full Report](${pagesUrl}) | [Actions Run](${actionsUrl})\n`;

if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  console.log("Wrote GitHub Step Summary");
}

// ── Build Slack Block Kit message ──
const blocks = [
  {
    type: "header",
    text: { type: "plain_text", text: `${overallFailed ? "\u{1F534}" : "\u{1F7E2}"} Playwright Run #${runNumber} — ${statusText}`, emoji: true },
  },
  {
    type: "section",
    fields: [
      { type: "mrkdwn", text: `*Environment:*\n${process.env.TEST_ENV}` },
      { type: "mrkdwn", text: `*Browser:*\n${process.env.BROWSER}` },
      { type: "mrkdwn", text: `*Shards:*\n${process.env.SHARD_COUNT}` },
      { type: "mrkdwn", text: `*Reason:*\n${slackEsc(process.env.RUN_REASON || "N/A")}` },
    ],
  },
  {
    type: "section",
    fields: [
      { type: "mrkdwn", text: `*Total:* ${totalTests}` },
      { type: "mrkdwn", text: `*Passed:* ${totalPassed} :white_check_mark:` },
      { type: "mrkdwn", text: `*Failed:* ${totalFailed} :x:` },
      { type: "mrkdwn", text: `*Skipped:* ${totalSkipped} :fast_forward:  *Flaky:* ${totalFlaky} :warning:` },
    ],
  },
];

// Warn if some shards had no JSON results (or the summary itself was missing).
if (summaryMissing || shardsMissingJson.length > 0) {
  blocks.push({
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: summaryMissing
          ? ":warning: Results summary unavailable. Counts may be incomplete."
          : `:warning: JSON results missing for shard(s): ${shardsMissingJson.join(", ")}. Counts may be incomplete.`,
      },
    ],
  });
}

// Simple grouped failure summary for Slack (detailed tables are in the Step Summary).
if (groupedEntries.length > 0) {
  blocks.push({ type: "divider" });
  let failText = groupedEntries
    .slice(0, 10)
    .map(([, tests], idx) => `${idx + 1}. \`${slackEsc(tests[0].error.split("\n")[0])}\` — *${tests.length} test(s)*`)
    .join("\n");
  if (groupedEntries.length > 10) failText += `\n_...and ${groupedEntries.length - 10} more error groups_`;
  blocks.push({ type: "section", text: { type: "mrkdwn", text: `*Failed Tests (grouped by error):*\n${failText}` } });
}

// Action buttons linking to the full report and the Actions run.
blocks.push({ type: "divider" });
blocks.push({
  type: "actions",
  elements: [
    { type: "button", text: { type: "plain_text", text: "Full Report", emoji: true }, url: pagesUrl, style: "primary" },
    { type: "button", text: { type: "plain_text", text: "GitHub Actions Run", emoji: true }, url: actionsUrl },
  ],
});

// ── Send Slack webhook ──
const webhookUrl = process.env.SLACK_WEBHOOK_URL;
if (!webhookUrl) {
  console.log("SLACK_WEBHOOK_URL not set — skipping Slack notification.");
  console.log("Message payload (for dry-run verification):");
  console.log(JSON.stringify({ blocks }, null, 2));
  process.exit(0);
}

const payload = JSON.stringify({ blocks });
const parsed = new URL(webhookUrl);
const req = https.request(
  {
    hostname: parsed.hostname,
    port: 443,
    path: parsed.pathname,
    method: "POST",
    timeout: 15000, // don't hang if Slack is unresponsive
    headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) },
  },
  (res) => {
    let body = "";
    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      if (res.statusCode === 200) {
        console.log("Slack notification sent successfully");
      } else {
        console.error(`Slack webhook returned ${res.statusCode}: ${body}`);
        process.exit(1);
      }
    });
  }
);
req.on("timeout", () => {
  console.error("Slack webhook timed out after 15s");
  req.destroy();
  process.exit(1);
});
req.on("error", (e) => {
  console.error("Failed to send Slack notification:", e.message);
  process.exit(1);
});
req.write(payload);
req.end();
