#!/usr/bin/env bash
# Shared per-shard test lister for the Shard Distribution Map — used by BOTH the
# main pipeline (--grep + --shard selection) and the rerun pipeline (per-slice
# --last-failed selection). Writes dist-map/shard-<i>.json via `playwright test
# --list` (no browser launch, no execution). Output is consumed by
# build-distribution-map.js.
#
# Env:
#   SHARD_COUNT  number of shards (N)                          [default 1]
#   TEST_ENV     value passed to cross-env test=...
#   PROJECT      Playwright --project (browser)
#   GREP         optional --grep pattern      (main pipeline)
#   SLICES_DIR   rerun pipeline: dir holding slices/shard-<i>.json (the
#                .last-run.json shape). Each slice is placed as .last-run.json in
#                its OWN --output dir (dist-map/out/shard-<i>) and listed with
#                --last-failed and no --shard, so slices list in parallel too.
#   CONCURRENCY  parallel lists                                 [default 4]
set -uo pipefail
N="${SHARD_COUNT:-1}"
CC="${CONCURRENCY:-4}"
mkdir -p dist-map/logs

# Prints why a list JSON is unusable (missing, unparseable, or carrying
# Playwright `errors`) and returns 1; returns 0 silently when it's clean.
# A failed list still writes a NON-empty JSON (`errors: [...]`, `suites: []`),
# so a plain `-s` check passes it and the map shows a bogus 0 (seen in run
# 40816350184: shards 1, 2, 4). Zero tests on its own is NOT a failure —
# Playwright can leave a shard empty when a big file group spans its range.
check_list() {
  node -e '
    const fs = require("fs"), f = process.argv[1];
    if (!fs.existsSync(f) || !fs.statSync(f).size) { console.log("no list output"); process.exit(1); }
    let j;
    try { j = JSON.parse(fs.readFileSync(f, "utf8")); } catch (e) { console.log("unparseable JSON: " + e.message); process.exit(1); }
    const errs = j.errors || [];
    if (!errs.length) process.exit(0);
    for (const e of errs.slice(0, 3)) console.log(String(e.message || e.value || JSON.stringify(e)).replace(/\x1b\[[0-9;]*m/g, "").slice(0, 500));
    process.exit(1);
  ' "$1"
}

list_shard() {
  local i="$1"
  # Build args as an array so patterns with spaces/special chars stay intact.
  local args=(--list --reporter=json --project="${PROJECT}")
  # Drop any earlier attempt so a retry that writes nothing can't pass on stale output.
  rm -f "dist-map/shard-${i}.json"
  if [ -n "${SLICES_DIR:-}" ]; then
    if [ ! -f "${SLICES_DIR}/shard-${i}.json" ]; then
      echo "slice file ${SLICES_DIR}/shard-${i}.json not found" > "dist-map/logs/shard-${i}.log"
      return
    fi
    # Each slice already holds only its shard's tests, so no --shard. --last-failed
    # reads .last-run.json from the --output dir, so a per-slice dir keeps parallel
    # lists from clobbering each other (and leaves test-results/ alone).
    local out="dist-map/out/shard-${i}"
    mkdir -p "$out"
    cp "${SLICES_DIR}/shard-${i}.json" "$out/.last-run.json"
    args+=(--last-failed --output="$out")
  else
    args+=(--shard="${i}/${N}")
    [ -n "${GREP:-}" ] && args+=(--grep "${GREP}")
  fi
  # Keep Playwright's output (not /dev/null) so a failed list can be explained.
  PLAYWRIGHT_JSON_OUTPUT_NAME="dist-map/shard-${i}.json" \
    npx cross-env test="${TEST_ENV}" npx playwright test "${args[@]}" > "dist-map/logs/shard-${i}.log" 2>&1
  echo "$?" > "dist-map/logs/shard-${i}.exit"
}

report_failure() {
  local i="$1"
  echo "::group::shard ${i} list output ($2, exit $(cat "dist-map/logs/shard-${i}.exit" 2>/dev/null || echo '?'))"
  check_list "dist-map/shard-${i}.json"
  tail -n 40 "dist-map/logs/shard-${i}.log" 2>/dev/null
  echo "::endgroup::"
}

# Pass 1 — bounded parallelism to keep N-shard listing fast. Shard 1 is listed
# alone first so Playwright's transform cache is warm before the parallel batch;
# several cold compiles at once is the suspected cause of the silent failures.
list_shard 1
for i in $(seq 2 "$N"); do
  list_shard "$i" &
  while [ "$(jobs -r | wc -l)" -ge "$CC" ]; do wait -n; done
done
wait

# Pass 2 — reconcile. Re-run any shard whose list failed SERIALLY (no
# contention) so the map total matches the real suite. A shard still failing
# after the retry is shown as "list failed" in the map, never as 0.
failed=()
for i in $(seq 1 "$N"); do
  why=$(check_list "dist-map/shard-${i}.json") && continue
  echo "::notice::shard ${i} list failed on pass 1 (${why%%$'\n'*}) — retrying serially"
  report_failure "$i" "pass 1"
  list_shard "$i"
  check_list "dist-map/shard-${i}.json" >/dev/null && continue
  echo "::warning::shard ${i} list still failing after retry — the map shows its count as unknown"
  report_failure "$i" "retry"
  failed+=("$i")
done
echo "Listed $((N - ${#failed[@]})) of $N shards OK$([ ${#failed[@]} -gt 0 ] && echo "; still failing: ${failed[*]}")"
