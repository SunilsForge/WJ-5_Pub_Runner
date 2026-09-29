Re-run the still-failing tests LOCALLY
=======================================
Source: main run #354, rerun pass 2
Still-failing tests: 159

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
       npx cross-env test=stage npx playwright test --last-failed --project=chrome

     Add --headed to watch them, or --workers=1 to run them one at a time:
       npx cross-env test=stage npx playwright test --last-failed --project=chrome --headed --workers=1

FALLBACK (only if step 3 reports "no tests found")
  That means a test/file was renamed after the run, so the saved ids are stale.
  Run the affected spec files directly instead (runs the whole file):

       npx cross-env test=stage npx playwright test --project=chrome \
         "ReroutingandLeftNav/ACDFCT_Rerouting.spec.ts" \
         "ReroutingandLeftNav/ANINUM_Rerouting.spec.ts" \
         "ReroutingandLeftNav/CONFRM_Rerouting.spec.ts" \
         "ReroutingandLeftNav/GIWHAT_Rerouting.spec.ts" \
         "ReroutingandLeftNav/GIWHER_Rerouting.spec.ts" \
         "ReroutingandLeftNav/LETPAT_Backup_Rerouting.spec.ts" \
         "ReroutingandLeftNav/MATRCZ_Rerouting.spec.ts" \
         "ReroutingandLeftNav/NUMPAT_Rerouting.spec.ts" \
         "ReroutingandLeftNav/NUMSER_Rerouting.spec.ts" \
         "ReroutingandLeftNav/ORLSMP_Rerouting.spec.ts" \
         "ReroutingandLeftNav/PICVOC_Rerouting.spec.ts" \
         "ReroutingandLeftNav/RDGREC_Rerouting.spec.ts" \
         "ReroutingandLeftNav/RPDPIC_Timer_Rerouting.spec.ts" \
         "ReroutingandLeftNav/RPDQNT_Rerouting.spec.ts" \
         "ReroutingandLeftNav/SENREP_Rerouting.spec.ts" \
         "ReroutingandLeftNav/SNDREV_Rerouting.spec.ts" \
         "ReroutingandLeftNav/SPELL_Rerouting.spec.ts" \
         "UIAndReports/ACDFCT_Single_BC5.spec.ts" \
         "UIAndReports/ANINUM_Multi_BC4.spec.ts" \
         "UIAndReports/CONFRM_Multi_Block.spec.ts" \
         "UIAndReports/GIWHAT_Single_BC4.spec.ts" \
         "UIAndReports/GIWHER_Single_BC4.spec.ts" \
         "UIAndReports/LETPAT_BackUp_Single_Timer.spec.ts" \
         "UIAndReports/MATRCZ_Multi_Block.spec.ts" \
         "UIAndReports/NUMPAT_Single_Timer.spec.ts" \
         "UIAndReports/NUMSER_Single_BC4.spec.ts"

  The full list of still-failing tests is in still-failing-tests.txt.

NOTES
  - Test ids are sha1(project + file path + test titles) — nothing machine-specific,
    so they transfer to your laptop fine. Only a different branch or a renamed
    test/file breaks the match. Use the same branch/commit as the run.
  - Re-running updates test-results/.last-run.json locally, so a second
    --last-failed run will narrow to whatever still fails on your machine.
