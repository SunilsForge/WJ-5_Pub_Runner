#!/usr/bin/env bash
# Builds the small "lite" copy of the merged report that deploy-report downloads.
# Run by merge-reports after the full merged-playwright-report artifact is uploaded:
#     bash runner-repo/.github/scripts/build-lite-report.sh merged-report merged-report-lite
#
# Why: the full report carries every trace/video from playwright-merged/data (GBs on big
# runs), but apply-main-run.sh drops all of that before it reaches gh-pages. Downloading
# GBs only to discard them made deploy-report time out (run 45426781367). This applies the
# SAME filter up front, so what reaches gh-pages is unchanged.
#
# KEEP THE FILTER IN SYNC with the rsync in apply-main-run.sh.
#
# Files > 100 MB are listed (size<TAB>relative path) in large-files-manifest.tsv at the
# lite root, so build-large-files-info.js still renders its placeholders/banner even
# though the files themselves aren't here. apply-main-run.sh excludes the manifest.
set -euo pipefail

SRC="${1:?usage: build-lite-report.sh <full-report-dir> <lite-dir>}"
DST="${2:?usage: build-lite-report.sh <full-report-dir> <lite-dir>}"
SRC="${SRC%/}"

mkdir -p "$DST"
rsync -a --exclude="*.zip" --exclude="*.mp4" --exclude="*.webm" \
  --exclude="*.gif" --exclude="*.trace" --exclude="*.webp" --max-size=100M \
  "$SRC/" "$DST/"

# -size +Nc = strictly larger than N bytes, matching build-large-files-info.js (size > 100 MiB)
# and rsync --max-size=100M (100 MiB).
find "$SRC" -type f -size +104857600c -printf '%s\t%P\n' > "$DST/large-files-manifest.tsv"

echo "Full report: $(du -sh "$SRC" | cut -f1)  ->  lite: $(du -sh "$DST" | cut -f1)"
echo "Files > 100 MB recorded in manifest: $(wc -l < "$DST/large-files-manifest.tsv")"
