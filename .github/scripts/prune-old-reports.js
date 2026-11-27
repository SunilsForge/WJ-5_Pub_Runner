// Archives old report folders on gh-pages so the branch stops growing without bound.
// Called at the end of apply-main-run.sh, inside the gh-pages checkout (cwd):
//     node "$(dirname "$0")/prune-old-reports.js"
//
// Why: every deploy checks out the whole gh-pages tree. On 2026-11-27 it was >= 4 GB,
// and >= 3.1 GB of that was reports older than the 20 the live site shows (D-034).
//
// Keeps FULL report folders for the newest N MAIN runs, where
//     N = max(KEEP_REPORT_FOLDERS (default 60), keep_last_runs)
// plus every main run >= min_run when this run's reason has a min_run=<n> directive.
// Rerun folders ("<origin>-retry-p<pass>") ride with their parent main run.
//
// Every other folder is ARCHIVED, not deleted: it keeps its small JSON files (run counts,
// dashboard failure summary, run setup, run info), so run history and the dashboard stay
// complete, and its index.html becomes a short "report archived" page that links to the
// run's GitHub Actions page. Removed files remain recoverable from gh-pages git history.
//
// Safe to run more than once (gh-pages-push.sh re-applies on a push race): an already
// archived folder is rewritten to identical content, so the second run changes nothing.
// Only folders named like a run key are touched; anything else under reports/ is left alone.
//
// Env: RUN_NUMBER, KEEP_LAST_RUNS, RUN_REASON, KEEP_REPORT_FOLDERS, GITHUB_REPOSITORY,
//      PRUNE_DRY_RUN=1 (log only, change nothing)
const fs = require("fs");
const path = require("path");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const int = (v, d) => (/^\d+$/.test(String(v || "").trim()) ? parseInt(v, 10) : d);

const REPORTS = "reports";
// Small per-run files kept in an archived folder (paths relative to the folder).
const KEEP_FILES = new Set(["dashboard-summary.json", "run-counts.json", "run-setup.json", "metadata/run-info.json"]);
const RUN_KEY = /^(\d+)(-retry-p\d+)?$/;
const DRY = process.env.PRUNE_DRY_RUN === "1";

const keepLast = int(process.env.KEEP_LAST_RUNS, 20); // same fallback as the deploy view
const keepN = Math.max(int(process.env.KEEP_REPORT_FOLDERS, 60), keepLast);
const minRunMatch = String(process.env.RUN_REASON || "").match(/min_run=(\d+)/);
const minRun = minRunMatch ? parseInt(minRunMatch[1], 10) : null;
const repo = process.env.GITHUB_REPOSITORY || "";

if (!fs.existsSync(REPORTS)) {
  console.log("prune: no reports/ folder — nothing to do");
  process.exit(0);
}

const folders = fs
  .readdirSync(REPORTS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && RUN_KEY.test(d.name))
  .map((d) => ({ name: d.name, main: parseInt(d.name.match(RUN_KEY)[1], 10) }));

const mains = new Set(folders.map((f) => f.main));
const current = int(process.env.RUN_NUMBER, null);
if (current !== null) mains.add(current);
const kept = new Set([...mains].sort((a, b) => b - a).slice(0, keepN));
if (minRun !== null) for (const m of mains) if (m >= minRun) kept.add(m);

// runNumber -> Actions run id, for the archived page's link (newer entries carry runId).
const runIds = {};
for (const h of ["run-history.master.json", "run-history.json"]) {
  try {
    for (const e of JSON.parse(fs.readFileSync(h, "utf8"))) {
      if (e && e.runNumber != null && e.runId && !runIds[e.runNumber]) runIds[String(e.runNumber)] = e.runId;
    }
  } catch (e) {
    /* missing or unreadable history: fall back to the workflow's run list */
  }
}
const actionsUrl = (key) =>
  runIds[key]
    ? `https://github.com/${repo}/actions/runs/${runIds[key]}`
    : `https://github.com/${repo}/actions/workflows/${/-retry-p/.test(key) ? "rerun-failures.yml" : "playwright-tests.yml"}`;

const template = fs.readFileSync(path.join(__dirname, "..", "templates", "archived-report-template.html"), "utf8");

function walk(dir, base, out) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    const rel = path.relative(base, p).split(path.sep).join("/");
    if (ent.isDirectory()) walk(p, base, out);
    else out.push({ p, rel, size: fs.statSync(p).size });
  }
  return out;
}
function removeEmptyDirs(dir, isRoot) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) removeEmptyDirs(path.join(dir, ent.name), false);
  }
  if (!isRoot && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

let archivedNow = 0, alreadyArchived = 0, freed = 0, removedFiles = 0;
for (const f of folders) {
  if (kept.has(f.main)) continue;
  const dir = path.join(REPORTS, f.name);
  // Page content depends only on the folder name + its run id, never on the retention
  // settings, so changing keep_last_runs doesn't rewrite every archived page.
  const page = template
    .split("__RUN_KEY__").join(esc(f.name))
    .split("__ACTIONS_URL__").join(esc(actionsUrl(f.name)));
  const extra = walk(dir, dir, []).filter((x) => !KEEP_FILES.has(x.rel) && !(x.rel === "index.html" && fs.readFileSync(x.p, "utf8") === page));
  if (extra.length === 0) {
    alreadyArchived++;
    continue;
  }
  archivedNow++;
  for (const x of extra) {
    freed += x.size;
    removedFiles++;
    if (!DRY) fs.rmSync(x.p, { force: true });
  }
  if (!DRY) {
    removeEmptyDirs(dir, true);
    fs.writeFileSync(path.join(dir, "index.html"), page);
  }
}

const mb = (b) => (b / 1048576).toFixed(1) + " MB";
console.log(
  `prune${DRY ? " (DRY RUN)" : ""}: keeping full reports for ${kept.size} main run(s) (newest ${keepN}` +
    `${minRun !== null ? `, plus all >= min_run=${minRun}` : ""}); ` +
    `archived ${archivedNow} folder(s) now (${removedFiles} files, ${mb(freed)}), ${alreadyArchived} already archived`
);
