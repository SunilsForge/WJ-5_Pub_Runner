#!/usr/bin/env bash
# `gh workflow run` with retries, without starting a duplicate run.
#     bash runner-repo/.github/scripts/dispatch-with-retry.sh <workflow-file> [gh workflow run args...]
# (--repo is added here; pass --ref and the -f inputs.)
#
# Used by trigger-rerun (main -> rerun pass 1) and chain-next (rerun pass N -> N+1).
# A single API blip there used to lose the whole rerun chain.
#
# Duplicate guard: the API can return an error AFTER it accepted the dispatch. Before
# each retry we check whether a workflow_dispatch run of <workflow-file> was created
# since our first attempt; if so we treat it as dispatched. (Tradeoff: a different
# pipeline dispatching the same workflow in that same ~minute after a failed attempt
# would also count — far rarer than the blip itself, and it never doubles a chain.)
#
# Env: GH_TOKEN, GITHUB_REPOSITORY
set -uo pipefail

WF="${1:?usage: dispatch-with-retry.sh <workflow-file> [gh workflow run args...]}"
shift
REPO="${GITHUB_REPOSITORY:?}"
MAX=3
# A few seconds of slack for clock skew between the runner and GitHub.
START=$(date -u -d '-10 seconds' +%Y-%m-%dT%H:%M:%SZ)

for attempt in $(seq 1 "$MAX"); do
  if gh workflow run "$WF" --repo "$REPO" "$@"; then
    echo "Dispatched ${WF} (attempt ${attempt}/${MAX})"
    exit 0
  fi
  echo "::warning::Dispatch of ${WF} failed (attempt ${attempt}/${MAX})"
  # Check even after the last attempt — it may have gone through despite the error.
  sleep $((attempt * 15))
  created=$(gh run list --repo "$REPO" --workflow "$WF" --event workflow_dispatch \
    --created ">=${START}" --json databaseId --jq 'length' 2>/dev/null || echo 0)
  case "$created" in ''|*[!0-9]*) created=0 ;; esac
  if [ "$created" -gt 0 ]; then
    echo "::warning::A ${WF} run was created since ${START} despite the error — treating it as dispatched (not retrying, to avoid a duplicate)"
    exit 0
  fi
done

echo "::error::Could not dispatch ${WF} after ${MAX} attempts"
exit 1
