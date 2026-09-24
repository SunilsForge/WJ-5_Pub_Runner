#!/usr/bin/env bash
# Race-safe publish to the gh-pages branch — shared by the main pipeline
# (deploy-report) and the rerun pipeline (publish).
#
#   bash runner-repo/.github/scripts/gh-pages-push.sh <apply-script> "<commit message>"
#
# Runs <apply-script> inside the gh-pages checkout, commits, pushes. If the push is
# rejected because another run (main or rerun) pushed first, it does NOT rebase —
# both sides edit run-history*.json, so a rebase would conflict. Instead it resets
# to the latest origin/gh-pages and RE-RUNS the apply script on that fresh tree, so
# the other run's entries and ours both survive. Apply scripts must therefore be
# re-runnable on a clean tree (copy + jq upsert; no appends to tracked files).
#
# Env: GH_PAGES_DIR (default gh-pages), PUSH_ATTEMPTS (default 5)
set -uo pipefail
APPLY="$1"
MSG="$2"
MAX="${PUSH_ATTEMPTS:-5}"

cd "${GH_PAGES_DIR:-gh-pages}" || { echo "::error::gh-pages checkout not found"; exit 1; }
git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

for attempt in $(seq 1 "$MAX"); do
  if ! bash "$APPLY"; then
    echo "::error::apply script failed: $APPLY"
    exit 1
  fi
  git add -A
  if git diff --cached --quiet; then
    echo "Nothing to commit on gh-pages"
    exit 0
  fi
  git commit -q -m "$MSG"
  if git push origin HEAD:gh-pages; then
    echo "Pushed to gh-pages on attempt $attempt/$MAX"
    exit 0
  fi
  echo "::warning::gh-pages push rejected (attempt $attempt/$MAX) — another run published first; re-applying on the latest gh-pages"
  sleep $(( (RANDOM % 10) + 5 ))  # jitter so two racing runs don't collide again
  if ! git fetch -q origin gh-pages; then
    echo "::error::git fetch origin gh-pages failed"
    exit 1
  fi
  git reset -q --hard origin/gh-pages
  git clean -fdq
done

echo "::error::could not push to gh-pages after $MAX attempts"
exit 1
