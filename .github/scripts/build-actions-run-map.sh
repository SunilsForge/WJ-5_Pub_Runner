#!/usr/bin/env bash
# Writes {"<run_number>": <run_id>, ...} for the MAIN pipeline's runs, so the history
# page sidebar can link every run — including old ones recorded before run-history
# entries carried a runId — straight to its GitHub Actions page. Shared by the main
# pipeline (deploy-report) and the rerun pipeline (publish), since both redeploy Pages.
#
#   bash runner-repo/.github/scripts/build-actions-run-map.sh site-deploy/actions-runs.json
#
# Env: GH_TOKEN (actions:read), GITHUB_REPOSITORY,
#      WORKFLOW_FILE (default playwright-tests.yml), MAX_PAGES (default 3 → 300 newest runs)
# Non-critical: callers use continue-on-error; the page falls back to the runId stored
# in history, then to the workflow's run list.
set -euo pipefail
OUT="$1"
WF="${WORKFLOW_FILE:-playwright-tests.yml}"
MAX_PAGES="${MAX_PAGES:-3}"

pairs="$(mktemp)"
for page in $(seq 1 "$MAX_PAGES"); do
  chunk="$(gh api "repos/${GITHUB_REPOSITORY}/actions/workflows/${WF}/runs?per_page=100&page=${page}" \
    --jq '.workflow_runs[] | "\(.run_number)\t\(.id)"')"
  [ -n "$chunk" ] || break
  printf '%s\n' "$chunk" >> "$pairs"
done

mkdir -p "$(dirname "$OUT")"
jq -R -s 'split("\n") | map(select(length > 0) | split("\t") | {key: .[0], value: (.[1] | tonumber)}) | from_entries' \
  "$pairs" > "$OUT"
echo "Mapped $(jq length "$OUT") ${WF} runs -> $OUT"
