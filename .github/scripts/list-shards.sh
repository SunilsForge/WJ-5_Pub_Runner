#!/usr/bin/env bash
# Shared per-shard test lister for the Shard Distribution Map — used by BOTH the
# main pipeline (grep selection) and the rerun pipeline (--last-failed selection).
# Writes dist-map/shard-<i>.json via `playwright test --list` (no browser launch,
# no execution). Output is consumed by build-distribution-map.js.
#
# Env:
#   SHARD_COUNT  number of shards (N)                          [default 1]
#   TEST_ENV     value passed to cross-env test=...
#   PROJECT      Playwright --project (browser)
#   GREP         optional --grep pattern      (main pipeline)
#   LAST_FAILED  "true" adds --last-failed     (rerun pipeline; needs
#                test-results/.last-run.json already in place)
#   CONCURRENCY  parallel lists                                [default 4]
set -uo pipefail
N="${SHARD_COUNT:-1}"
CC="${CONCURRENCY:-4}"
mkdir -p dist-map

list_shard() {
  local i="$1"
  # Build args as an array so patterns with spaces/special chars stay intact.
  local args=(--list --reporter=json --project="${PROJECT}" --shard="${i}/${N}")
  [ -n "${GREP:-}" ] && args+=(--grep "${GREP}")
  [ "${LAST_FAILED:-}" = "true" ] && args+=(--last-failed)
  PLAYWRIGHT_JSON_OUTPUT_NAME="dist-map/shard-${i}.json" \
    npx cross-env test="${TEST_ENV}" npx playwright test "${args[@]}" >/dev/null 2>&1 || true
}

# Pass 1 — bounded parallelism to keep N-shard listing fast.
for i in $(seq 1 "$N"); do
  list_shard "$i" &
  while [ "$(jobs -r | wc -l)" -ge "$CC" ]; do wait -n; done
done
wait

# Pass 2 — reconcile. Under load, a few of the parallel `--list` compiles can
# transiently fail to write their JSON (npx/compile hiccup, non-zero exit is
# swallowed above). That silently undercounts the map (e.g. 677 vs 684). Re-run
# any shard with missing/empty output SERIALLY (no contention) so the map total
# matches the real suite. Warn only if still missing after the retry.
missing=0
for i in $(seq 1 "$N"); do
  [ -s "dist-map/shard-${i}.json" ] && continue
  echo "::notice::shard ${i} had no list output on pass 1 — retrying serially"
  list_shard "$i"
  [ -s "dist-map/shard-${i}.json" ] || { echo "::warning::no list output for shard ${i} after retry"; missing=$((missing + 1)); }
done
echo "Listed $(ls dist-map/shard-*.json 2>/dev/null | wc -l) of $N shards (${missing} still missing after retry)"
