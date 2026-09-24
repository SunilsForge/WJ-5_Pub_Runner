#!/usr/bin/env bash
# gh-pages changes for ONE rerun pass. Run by gh-pages-push.sh inside the gh-pages
# checkout — possibly more than once (re-applied on a fresh tree after a push race),
# so the history write is an upsert by runNumber, never a blind prepend.
#
# Env: RUNKEY        report key, "<origin>-retry-p<pass>"
#      REPORT_DIR    absolute path to the built rerun-report/
#      ENTRY_FILE    absolute path to the history entry (built with jq)
set -euo pipefail

mkdir -p "reports/${RUNKEY}"
cp -r "${REPORT_DIR}/." "reports/${RUNKEY}/"

# Replace an existing entry for this key, otherwise put it first (next to its parent
# once the pruned deploy view sorts by numeric prefix).
for HIST in run-history.json run-history.master.json; do
  if [ -f "$HIST" ]; then
    jq --slurpfile e "$ENTRY_FILE" '
      $e[0] as $new
      | if (map(.runNumber == $new.runNumber) | any)
        then map(if .runNumber == $new.runNumber then $new else . end)
        else [$new] + .
        end
    ' "$HIST" > "$HIST.tmp"
    mv "$HIST.tmp" "$HIST"
  else
    jq -c --slurpfile e "$ENTRY_FILE" -n '[$e[0]]' > "$HIST"
  fi
done
echo "History updated with ${RUNKEY}"
