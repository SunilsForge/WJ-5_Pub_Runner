#!/usr/bin/env bash
# gh-pages changes for ONE main run. Run by gh-pages-push.sh inside the gh-pages
# checkout — possibly more than once (re-applied on a fresh tree after a push race),
# so everything here is copy-or-upsert, never append.
#
# Env: RUN_NUMBER       main run number (report folder + history key)
#      NEW_REPORT_DIR   absolute path to the downloaded merged-playwright-report
#      CURRENT_RUN_FILE absolute path to the run's history entry (built with jq)
#      HISTORY_TEMPLATE absolute path to history-index-template.html
set -euo pipefail

mkdir -p "reports/${RUN_NUMBER}"
# Heavy media and files > 100 MB stay in the Actions artifacts (Pages/git limits).
rsync -a --exclude="*.zip" --exclude="*.mp4" --exclude="*.webm" \
  --exclude="*.gif" --exclude="*.trace" --exclude="*.webp" --max-size=100M \
  "${NEW_REPORT_DIR}/" "reports/${RUN_NUMBER}/"

# Upsert by runNumber, newest main run first (reruns sort with their parent).
UPSERT='
  if (map(.runNumber == $newRun.runNumber) | any) then
    map(if .runNumber == $newRun.runNumber then $newRun else . end)
  else
    . + [$newRun]
  end | sort_by(.runNumber | tostring | split("-")[0] | tonumber? // 0) | reverse
'
if [ -f run-history.json ]; then
  jq --slurpfile e "$CURRENT_RUN_FILE" '$e[0] as $newRun | '"$UPSERT" run-history.json > run-history.tmp
  mv run-history.tmp run-history.json
else
  jq -c --slurpfile e "$CURRENT_RUN_FILE" -n '[$e[0]]' > run-history.json
fi
# Master = full, never-pruned copy (dashboard long-term trends). Seeded from the
# full history the first time it's created.
if [ -f run-history.master.json ]; then
  jq --slurpfile e "$CURRENT_RUN_FILE" '$e[0] as $newRun | '"$UPSERT" run-history.master.json > run-history.master.tmp
  mv run-history.master.tmp run-history.master.json
else
  cp run-history.json run-history.master.json
fi
echo "History updated with run ${RUN_NUMBER} ($(jq length run-history.json) entries)"

# Fully static history page (loads run-history.json client-side).
cp "$HISTORY_TEMPLATE" index.html
