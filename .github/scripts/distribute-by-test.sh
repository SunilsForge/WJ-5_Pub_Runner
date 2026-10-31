#!/usr/bin/env bash
# distribute_by_test codemod — shared by the main `test` job and the
# `distribution-map` job so the previewed distribution always matches the run.
#
# Flips describes in the two target folders from serial (`mode: "default"`, which
# pins a whole spec file to one shard) to `mode: "parallel"`, so Playwright's
# --shard spreads their scenarios by COUNT instead of by whole file.
#
# Scope is deliberately limited to these two folders by path; nothing else is read
# or modified and the global `fullyParallel` config is untouched. Edits ONLY the
# ephemeral CI checkout — never commit this to WJ-5_Pub (AGENTS.md rule 1).
# Run from the WJ-5_Pub checkout root.
#
# Env: REQUIRE_CHANGES  "true" = exit 1 when no file was changed (test job), so a
#                       run isn't silently mis-distributed.
set -euo pipefail
echo "distribute_by_test = ON — rewriting describe mode 'default' -> 'parallel' in target folders."
total=0
for dir in "src/tests/UIAndReports" "src/tests/ReroutingandLeftNav"; do
  if [ ! -d "$dir" ]; then
    echo "::warning::target folder not found: $dir (skipping)"
    continue
  fi
  # Only files that actually contain the serial marker
  mapfile -t files < <(grep -rl 'mode: *"default"' "$dir" || true)
  for f in "${files[@]}"; do
    sed -i 's/mode: *"default"/mode: "parallel"/g' "$f"
    total=$((total + 1))
  done
  echo "  $dir: updated ${#files[@]} file(s)"
done
echo "Total spec files switched to parallel: $total"
if [ "$total" -eq 0 ] && [ "${REQUIRE_CHANGES:-}" = "true" ]; then
  echo "::error::distribute_by_test was ON but no files were changed — aborting so the run isn't silently mis-distributed."
  exit 1
fi
