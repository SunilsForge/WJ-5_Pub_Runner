#!/usr/bin/env bash
# Waits until an artifact uploaded earlier in THIS run is visible to the API.
#     bash runner-repo/.github/scripts/wait-for-artifact.sh github-pages [max-seconds]
#
# Why: actions/deploy-pages lists the run's artifacts exactly once, with no retry, and
# fails with 'No artifacts named "github-pages" were found' when the listing lags the
# upload by even a second (runs #395, #402, #403 — each queried < 1s after the upload
# finalized). Used before every deploy-pages attempt in both workflows.
#
# Never fails the job: if the artifact still isn't listed after max-seconds, it warns
# and lets the deploy attempt (and its retries) decide.
#
# Env: GH_TOKEN, GITHUB_REPOSITORY, GITHUB_RUN_ID (all set by Actions; GH_TOKEN via env:)
set -uo pipefail

NAME="${1:?usage: wait-for-artifact.sh <artifact-name> [max-seconds]}"
MAX="${2:-90}"
REPO="${GITHUB_REPOSITORY:?}"
RUN="${GITHUB_RUN_ID:?}"

waited=0
while :; do
  n=$(gh api "repos/${REPO}/actions/runs/${RUN}/artifacts?name=${NAME}" --jq '.total_count' 2>/dev/null || echo 0)
  case "$n" in ''|*[!0-9]*) n=0 ;; esac
  if [ "$n" -ge 1 ]; then
    echo "Artifact '${NAME}' is listed by the API (after ${waited}s)"
    break
  fi
  if [ "$waited" -ge "$MAX" ]; then
    echo "::warning::Artifact '${NAME}' still not listed after ${MAX}s — attempting the deploy anyway"
    break
  fi
  sleep 5
  waited=$((waited + 5))
done

# deploy-pages uses a different listing endpoint than the REST call above; give it a
# moment to catch up too.
sleep 10
exit 0
