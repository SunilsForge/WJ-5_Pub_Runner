Re-run the still-failing tests LOCALLY
=======================================
Source: main run #309, rerun pass 1
Still-failing tests: 43

These are the tests that were still failing after the final rerun pass. Playwright
can re-run exactly this set for you via --last-failed.

STEPS (run from the root of the WJ-5_Pub repo)

  1) Use the SAME code the run used, otherwise the test IDs won't match:
       git checkout main
       git pull

  2) Put this marker where Playwright looks for it:
       mkdir -p test-results
       cp last-run.json test-results/.last-run.json      # note the leading dot

  3) Re-run just those tests:
       npx cross-env test=prod npx playwright test --last-failed --project=chrome

     Add --headed to watch them, or --workers=1 to run them one at a time:
       npx cross-env test=prod npx playwright test --last-failed --project=chrome --headed --workers=1

FALLBACK (only if step 3 reports "no tests found")
  That means a test/file was renamed after the run, so the saved ids are stale.
  Run the affected spec files directly instead (runs the whole file):

       npx cross-env test=prod npx playwright test --project=chrome \
         "ReroutingandLeftNav/ACDVOC_Single_BC5.spec.ts" \
         "ReroutingandLeftNav/APPROB_Rerouting.spec.ts" \
         "ReroutingandLeftNav/CALC_Single_BC5.spec.ts" \
         "ReroutingandLeftNav/LWIDNT_Multi_BC6.spec.ts" \
         "ReroutingandLeftNav/MEMWRD_Single_BC4.spec.ts" \
         "ReroutingandLeftNav/RPDNUM_Backup_Rerouting.spec.ts" \
         "ReroutingandLeftNav/SRDGFL_FormB_Rerouting.spec.ts" \
         "ReroutingandLeftNav/SRDGFL_Single_Timer.spec.ts" \
         "ReroutingandLeftNav/STYREC_Multi_Block.spec.ts" \
         "ReroutingandLeftNav/SYMBIN_Rerouting.spec.ts" \
         "ReroutingandLeftNav/WRDGFL_Single_Timer.spec.ts" \
         "UIAndReports/ORLRDG_Multi_Block.spec.ts" \
         "UIAndReports/SNDBLN_Single_BC5.spec.ts" \
         "UIAndReports/SRDGFL_FormB_Single_Timer.spec.ts" \
         "UIAndReports/SYMBIN_Single_Timer.spec.ts" \
         "UIAndReports/WRDGFL_Single_Timer.spec.ts"

  The full list of still-failing tests is in still-failing-tests.txt.

NOTES
  - Test ids are sha1(project + file path + test titles) — nothing machine-specific,
    so they transfer to your laptop fine. Only a different branch or a renamed
    test/file breaks the match. Use the same branch/commit as the run.
  - Re-running updates test-results/.last-run.json locally, so a second
    --last-failed run will narrow to whatever still fails on your machine.
