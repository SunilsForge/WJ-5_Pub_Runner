# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/BIA_cluster_pub.spec.ts >>  BIA cluster Derived Export Automation  >> For OVSYN - Age - All incorrect scenario,OVANT - Age - All correct scenario,MATRCZ - Age - All incorrect scenario,VRBATN - Age - All correct scenario Complete The BIA cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/BIA_cluster_pub.spec.ts:26:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'loading-inner\']').first() to be hidden
    242 × locator resolved to visible <div class="loading-inner">…</div>

```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic [ref=e1]:
      - banner [ref=e2]:
        - generic [ref=e3]:
          - button [ref=e4]: Skip to main Content
          - link [ref=e5] [cursor=pointer]:
            - /url: /products
          - generic [ref=e6]: Riverside Insights Logo
          - generic [ref=e7]:
            - heading [level=2] [ref=e8]:
              - generic [ref=e9]: Hello
              - button [ref=e10] [cursor=pointer]: S03PwAut25AH ln
            - navigation [ref=e13]:
              - button [ref=e14] [cursor=pointer]: Contact Us
              - button [ref=e15] [cursor=pointer]: "| Subscription Details"
              - button [ref=e16] [cursor=pointer]: "| Sign Out"
      - navigation [ref=e17]:
        - menubar [ref=e19]:
          - menuitem [ref=e21] [cursor=pointer]: Dashboard
          - menuitem [ref=e23] [cursor=pointer]: Test Sets
          - menuitem [ref=e25] [cursor=pointer]: Examinees
          - menuitem [ref=e27] [cursor=pointer]: Staff
          - menuitem [ref=e29] [cursor=pointer]:
            - text: Reports
            - img [ref=e30]
          - menuitem [ref=e33] [cursor=pointer]: Resources
      - main [ref=e34]:
        - generic [ref=e35]:
          - heading [level=1] [ref=e36]: REPORT CENTER
          - navigation [ref=e37]:
            - tablist [ref=e38]:
              - tab [selected] [ref=e39] [cursor=pointer]: Report Library
              - button [ref=e40] [cursor=pointer]:
                - img [ref=e41]
          - generic [ref=e50]:
            - grid [ref=e51]:
              - generic [ref=e52]:
                - generic [ref=e55]: Report Name
                - generic [ref=e58]: Status
                - generic [ref=e61]: Date Created
                - generic [ref=e64]: Actions
              - rowgroup [ref=e65]:
                - row [ref=e66]:
                  - gridcell [ref=e68]: Derived_Score_AutoFilter_Template_N5098A11199
                  - gridcell [ref=e70]: Completed
                  - gridcell [ref=e72]: 05/01/2026 09:59 AM
                  - generic [ref=e73]:
                    - gridcell [ref=e75] [cursor=pointer]: Download/Print
                    - gridcell [ref=e77] [cursor=pointer]: Delete
                    - img [ref=e78] [cursor=pointer]
                - row [ref=e80]:
                  - gridcell [ref=e82]: Derived_Score_AutoFilter_Template_N89919A49358
                  - gridcell [ref=e84]: Completed
                  - gridcell [ref=e86]: 05/01/2026 09:53 AM
                  - generic [ref=e87]:
                    - gridcell [ref=e89] [cursor=pointer]: Download/Print
                    - gridcell [ref=e91] [cursor=pointer]: Delete
                    - img [ref=e92] [cursor=pointer]
                - row [ref=e94]:
                  - gridcell [ref=e96]: Derived_Score_AutoFilter_Template_N72489A9487
                  - gridcell [ref=e98]: Completed
                  - gridcell [ref=e100]: 05/01/2026 09:46 AM
                  - generic [ref=e101]:
                    - gridcell [ref=e103] [cursor=pointer]: Download/Print
                    - gridcell [ref=e105] [cursor=pointer]: Delete
                    - img [ref=e106] [cursor=pointer]
                - row [ref=e108]:
                  - gridcell [ref=e110]: Derived_Score_AutoFilter_Template_N81664A74464
                  - gridcell [ref=e112]: Completed
                  - gridcell [ref=e114]: 05/01/2026 09:38 AM
                  - generic [ref=e115]:
                    - gridcell [ref=e117] [cursor=pointer]: Download/Print
                    - gridcell [ref=e119] [cursor=pointer]: Delete
                    - img [ref=e120] [cursor=pointer]
                - row [ref=e122]:
                  - gridcell [ref=e124]: Derived_Score_AutoFilter_Template_N91429A68914
                  - gridcell [ref=e126]: Completed
                  - gridcell [ref=e128]: 04/29/2026 09:42 PM
                  - generic [ref=e129]:
                    - gridcell [ref=e131] [cursor=pointer]: Download/Print
                    - gridcell [ref=e133] [cursor=pointer]: Delete
                    - img [ref=e134] [cursor=pointer]
                - row [ref=e136]:
                  - gridcell [ref=e138]: Derived_Score_AutoFilter_Template_N42363A55166
                  - gridcell [ref=e140]: Completed
                  - gridcell [ref=e142]: 04/29/2026 09:34 PM
                  - generic [ref=e143]:
                    - gridcell [ref=e145] [cursor=pointer]: Download/Print
                    - gridcell [ref=e147] [cursor=pointer]: Delete
                    - img [ref=e148] [cursor=pointer]
                - row [ref=e150]:
                  - gridcell [ref=e152]: Derived_Score_AutoFilter_Template_N63426A96166
                  - gridcell [ref=e154]: Completed
                  - gridcell [ref=e156]: 04/29/2026 09:27 PM
                  - generic [ref=e157]:
                    - gridcell [ref=e159] [cursor=pointer]: Download/Print
                    - gridcell [ref=e161] [cursor=pointer]: Delete
                    - img [ref=e162] [cursor=pointer]
                - row [ref=e164]:
                  - gridcell [ref=e166]: Derived_Score_AutoFilter_Template_N57102A62309
                  - gridcell [ref=e168]: Completed
                  - gridcell [ref=e170]: 04/29/2026 09:21 PM
                  - generic [ref=e171]:
                    - gridcell [ref=e173] [cursor=pointer]: Download/Print
                    - gridcell [ref=e175] [cursor=pointer]: Delete
                    - img [ref=e176] [cursor=pointer]
                - row [ref=e178]:
                  - gridcell [ref=e180]: Derived_Score_AutoFilter_Template_N83261A5553
                  - gridcell [ref=e182]: Completed
                  - gridcell [ref=e184]: 04/29/2026 01:22 PM
                  - generic [ref=e185]:
                    - gridcell [ref=e187] [cursor=pointer]: Download/Print
                    - gridcell [ref=e189] [cursor=pointer]: Delete
                    - img [ref=e190] [cursor=pointer]
                - row [ref=e192]:
                  - gridcell [ref=e194]: Derived_Score_AutoFilter_Template_N56638A37510
                  - gridcell [ref=e196]: Completed
                  - gridcell [ref=e198]: 04/29/2026 01:14 PM
                  - generic [ref=e199]:
                    - gridcell [ref=e201] [cursor=pointer]: Download/Print
                    - gridcell [ref=e203] [cursor=pointer]: Delete
                    - img [ref=e204] [cursor=pointer]
                - row [ref=e206]:
                  - gridcell [ref=e208]: Derived_Score_AutoFilter_Template_N95736A93111
                  - gridcell [ref=e210]: Completed
                  - gridcell [ref=e212]: 04/29/2026 01:06 PM
                  - generic [ref=e213]:
                    - gridcell [ref=e215] [cursor=pointer]: Download/Print
                    - gridcell [ref=e217] [cursor=pointer]: Delete
                    - img [ref=e218] [cursor=pointer]
                - row [ref=e220]:
                  - gridcell [ref=e222]: Derived_Score_AutoFilter_Template_N32637A28286
                  - gridcell [ref=e224]: Completed
                  - gridcell [ref=e226]: 04/29/2026 12:57 PM
                  - generic [ref=e227]:
                    - gridcell [ref=e229] [cursor=pointer]: Download/Print
                    - gridcell [ref=e231] [cursor=pointer]: Delete
                    - img [ref=e232] [cursor=pointer]
                - row [ref=e234]:
                  - gridcell [ref=e236]: Derived_Score_AutoFilter_Template_N67751A54752
                  - gridcell [ref=e238]: Completed
                  - gridcell [ref=e240]: 04/29/2026 12:51 PM
                  - generic [ref=e241]:
                    - gridcell [ref=e243] [cursor=pointer]: Download/Print
                    - gridcell [ref=e245] [cursor=pointer]: Delete
                    - img [ref=e246] [cursor=pointer]
                - row [ref=e248]:
                  - gridcell [ref=e250]: Derived_Score_AutoFilter_Template_N53131A47091
                  - gridcell [ref=e252]: Completed
                  - gridcell [ref=e254]: 04/29/2026 10:32 AM
                  - generic [ref=e255]:
                    - gridcell [ref=e257] [cursor=pointer]: Download/Print
                    - gridcell [ref=e259] [cursor=pointer]: Delete
                    - img [ref=e260] [cursor=pointer]
                - row [ref=e262]:
                  - gridcell [ref=e264]: Derived_Score_AutoFilter_Template_N86197A81150
                  - gridcell [ref=e266]: Completed
                  - gridcell [ref=e268]: 04/29/2026 10:24 AM
                  - generic [ref=e269]:
                    - gridcell [ref=e271] [cursor=pointer]: Download/Print
                    - gridcell [ref=e273] [cursor=pointer]: Delete
                    - img [ref=e274] [cursor=pointer]
                - row [ref=e276]:
                  - gridcell [ref=e278]: Derived_Score_AutoFilter_Template_N85388A12483
                  - gridcell [ref=e280]: Completed
                  - gridcell [ref=e282]: 04/29/2026 10:15 AM
                  - generic [ref=e283]:
                    - gridcell [ref=e285] [cursor=pointer]: Download/Print
                    - gridcell [ref=e287] [cursor=pointer]: Delete
                    - img [ref=e288] [cursor=pointer]
                - row [ref=e290]:
                  - gridcell [ref=e292]: Derived_Score_AutoFilter_Template_N88977A52739
                  - gridcell [ref=e294]: Completed
                  - gridcell [ref=e296]: 04/29/2026 10:09 AM
                  - generic [ref=e297]:
                    - gridcell [ref=e299] [cursor=pointer]: Download/Print
                    - gridcell [ref=e301] [cursor=pointer]: Delete
                    - img [ref=e302] [cursor=pointer]
                - row [ref=e304]:
                  - gridcell [ref=e306]: Derived_Score_AutoFilter_Template_N67125A63886
                  - gridcell [ref=e308]: Completed
                  - gridcell [ref=e310]: 04/29/2026 07:06 AM
                  - generic [ref=e311]:
                    - gridcell [ref=e313] [cursor=pointer]: Download/Print
                    - gridcell [ref=e315] [cursor=pointer]: Delete
                    - img [ref=e316] [cursor=pointer]
                - row [ref=e318]:
                  - gridcell [ref=e320]: Derived_Score_AutoFilter_Template_N4683A81315
                  - gridcell [ref=e322]: Completed
                  - gridcell [ref=e324]: 04/29/2026 06:59 AM
                  - generic [ref=e325]:
                    - gridcell [ref=e327] [cursor=pointer]: Download/Print
                    - gridcell [ref=e329] [cursor=pointer]: Delete
                    - img [ref=e330] [cursor=pointer]
                - row [ref=e332]:
                  - gridcell [ref=e334]: Derived_Score_AutoFilter_Template_N46307A46577
                  - gridcell [ref=e336]: Completed
                  - gridcell [ref=e338]: 04/27/2026 11:44 AM
                  - generic [ref=e339]:
                    - gridcell [ref=e341] [cursor=pointer]: Download/Print
                    - gridcell [ref=e343] [cursor=pointer]: Delete
                    - img [ref=e344] [cursor=pointer]
                - row [ref=e346]:
                  - gridcell [ref=e348]: Derived_Score_AutoFilter_Template_N63870A83861
                  - gridcell [ref=e350]: Completed
                  - gridcell [ref=e352]: 04/27/2026 11:31 AM
                  - generic [ref=e353]:
                    - gridcell [ref=e355] [cursor=pointer]: Download/Print
                    - gridcell [ref=e357] [cursor=pointer]: Delete
                    - img [ref=e358] [cursor=pointer]
                - row [ref=e360]:
                  - gridcell [ref=e362]: Derived_Score_AutoFilter_Template_N64348A15243
                  - gridcell [ref=e364]: Completed
                  - gridcell [ref=e366]: 04/27/2026 11:22 AM
                  - generic [ref=e367]:
                    - gridcell [ref=e369] [cursor=pointer]: Download/Print
                    - gridcell [ref=e371] [cursor=pointer]: Delete
                    - img [ref=e372] [cursor=pointer]
                - row [ref=e374]:
                  - gridcell [ref=e376]: Derived_Score_AutoFilter_Template_N11024A94844
                  - gridcell [ref=e378]: Completed
                  - gridcell [ref=e380]: 04/27/2026 11:16 AM
                  - generic [ref=e381]:
                    - gridcell [ref=e383] [cursor=pointer]: Download/Print
                    - gridcell [ref=e385] [cursor=pointer]: Delete
                    - img [ref=e386] [cursor=pointer]
                - row [ref=e388]:
                  - gridcell [ref=e390]: Derived_Score_AutoFilter_Template_N2999A95288
                  - gridcell [ref=e392]: Completed
                  - gridcell [ref=e394]: 04/24/2026 07:26 AM
                  - generic [ref=e395]:
                    - gridcell [ref=e397] [cursor=pointer]: Download/Print
                    - gridcell [ref=e399] [cursor=pointer]: Delete
                    - img [ref=e400] [cursor=pointer]
                - row [ref=e402]:
                  - gridcell [ref=e404]: Derived_Score_AutoFilter_Template_N40584A74734
                  - gridcell [ref=e406]: Completed
                  - gridcell [ref=e408]: 04/24/2026 07:14 AM
                  - generic [ref=e409]:
                    - gridcell [ref=e411] [cursor=pointer]: Download/Print
                    - gridcell [ref=e413] [cursor=pointer]: Delete
                    - img [ref=e414] [cursor=pointer]
            - generic [ref=e416]:
              - button [disabled] [ref=e417]: <<
              - button [disabled] [ref=e418]: <
              - button [ref=e419] [cursor=pointer]: "1"
              - button [ref=e420] [cursor=pointer]: "2"
              - button [ref=e421] [cursor=pointer]: ">"
              - button [ref=e422] [cursor=pointer]: ">>"
    - contentinfo [ref=e423]:
      - generic [ref=e424]: Footer region,
      - link [ref=e425] [cursor=pointer]:
        - /url: https://www.riversideinsights.com/
        - img [ref=e426]
      - generic [ref=e427]:
        - link [ref=e428] [cursor=pointer]:
          - /url: https://www.facebook.com/RiversideInsights/
          - img [ref=e429]
        - link [ref=e430] [cursor=pointer]:
          - /url: https://twitter.com/1BillionLives
          - img [ref=e431]
        - link [ref=e432] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/riverside-insights/
          - img [ref=e433]
        - link [ref=e434] [cursor=pointer]:
          - /url: https://www.instagram.com/riversideinsightsassessments/
          - img [ref=e435]
      - generic [ref=e436]:
        - button [ref=e437] [cursor=pointer]: Leave Feedback
        - generic [ref=e438]: "|"
        - link [ref=e439] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/terms-of-use
          - text: Terms of Use
        - generic [ref=e440]: "|"
        - link [ref=e441] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/privacy-assessment_policy
          - text: Privacy Policy
      - generic [ref=e442]: Footer region end
  - alertdialog [active] [ref=e444]:
    - main "Expiration warning" [ref=e445]:
      - generic [ref=e446]: Session Expiring
      - generic [ref=e447]: Session will expire in 5 minutes, press continue to extend time.
    - navigation [ref=e448]:
      - button "Continue" [ref=e449] [cursor=pointer]
  - region "Chat Widget" [ref=e450]:
    - iframe [ref=e451]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e452]:
      - img [ref=e453]
```

# Test source

```ts
  3435 |       const itemNumber: number = parseInt(lastItemNumber.split(" ")[1]);
  3436 |       console.log(`the last item number is = ${itemNumber}`);
  3437 |       this.scoreMap.clear();
  3438 |       this.scoreMap.set(` `, "^");
  3439 |       for (let index = 1; index <= itemNumber; index++) {
  3440 |         this.scoreMap.set(`Item ${index}`, "x");
  3441 |       }
  3442 |     }
  3443 | 
  3444 |     console.log(`Type Of test ${typeOfTest} \n`);
  3445 |     while (await this.plainNextButtonOrEndButton.first().isVisible()) {
  3446 |       await this.page.waitForTimeout(3000);
  3447 |       const itemDetails: string = (await this.itemDetails.textContent())!;
  3448 |       console.log(itemDetails);
  3449 |       const correctlocator: Locator = this.corectOptionButton.first();
  3450 |       const incorrectlocator: Locator = this.incorrectOptionButton.first();
  3451 | 
  3452 |       if (itemDetails.startsWith("Introduction")) {
  3453 |       } else if (
  3454 |         typeOfTest.match(/All correct scenario/i) &&
  3455 |         /^(Practice Exercise|Test Items)/.test(itemDetails)
  3456 |       ) {
  3457 |         await this.answerCorrectForTimerTest(
  3458 |           stemForm,
  3459 |           itemDetails,
  3460 |           patternTestCorrectResponses,
  3461 |         );
  3462 |         tapFluency = true;
  3463 |       } else if (typeOfTest.match(/All correct scenario/i)) {
  3464 |         await this.clickCorrectOption(correctlocator, itemDetails);
  3465 |       } else if (
  3466 |         typeOfTest.match(/All incorrect scenario/i) &&
  3467 |         itemDetails.startsWith("Sample ")
  3468 |       ) {
  3469 |         await this.clickCorrectOption(correctlocator, itemDetails);
  3470 |       } else if (typeOfTest.match(/All incorrect scenario/i)) {
  3471 |         await this.clickInCorrectOption(incorrectlocator, itemDetails);
  3472 |         await this.sideNavLock.waitFor({ state: "detached" });
  3473 |       } else {
  3474 |         throw new Error(
  3475 |           `The ${typeOfTest} didnt match with any of the conditions provided`,
  3476 |         );
  3477 |       }
  3478 | 
  3479 | 
  3480 |       if (tapFluency) {
  3481 |         await this.page.waitForTimeout(5000);
  3482 |         if (/^(Practice Exercise)/.test(itemDetails)) {
  3483 |           if (await this.doneButton.isVisible()) {
  3484 |             await this.doneButton.click();
  3485 |           }
  3486 |         }
  3487 |       } else {
  3488 |         await this.plainNextButtonOrEndButton.last().click();
  3489 |       }
  3490 | 
  3491 |       if (
  3492 |         (await this.plainNextButtonOrEndButton.first().textContent()) ===
  3493 |         "End Test"
  3494 |       ) {
  3495 |         await this.plainNextButtonOrEndButton.first().click();
  3496 |         await this.page.waitForTimeout(1000);
  3497 |         break;
  3498 |       }
  3499 |     }
  3500 | 
  3501 |     // fetch AE and GE from endtest popup
  3502 |     const [AE, GE] = await this.get_AE_GE_FromEndTestPopup();
  3503 |     this.scoreMap.set("Breaker", "@");
  3504 |     this.scoreMap.set("AE", AE);
  3505 |     this.scoreMap.set("GE", GE);
  3506 |     console.log(this.scoreMap);
  3507 |     return this.scoreMap;
  3508 |   }
  3509 | 
  3510 |   async playAudio() {
  3511 |     if (await this.audioPlayer.isVisible()) {
  3512 |       await this.audioPlayButton.click();
  3513 |       await this.plainNextButtonOrEndButton.waitFor({
  3514 |         state: "visible",
  3515 |         timeout: 50000,
  3516 |       });
  3517 |       await this.page.waitForTimeout(3000);
  3518 |     }
  3519 |   }
  3520 | 
  3521 |   async jumpToNextTest(testName: string) {
  3522 |     let nextTestName: string = await this.nextTestSelectValue.textContent();
  3523 |     if (nextTestName.match(testName)) {
  3524 |       await this.beginNextTestButton.click();
  3525 |     } else {
  3526 |       await this.page.locator(".select-box").click();
  3527 |       await this.page.locator(`//span[text()='${testName}']`).click();
  3528 |       nextTestName = await this.nextTestSelectValue.textContent();
  3529 |       expect(nextTestName).toEqual(testName);
  3530 |       await this.beginNextTestButton.click();
  3531 |       // await this.letsBeginButton.click();
  3532 |       await this.page.waitForLoadState("domcontentloaded");
  3533 |       for (let attempt = 0; attempt < 3; attempt++) {
  3534 |         if (await this.loadingIcon.isVisible().catch(() => false)) {
> 3535 |           await this.loadingIcon.waitFor({ state: 'hidden', timeout: 2 * 60 * 1000 });
       |                                  ^ TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
  3536 |         }
  3537 |         await this.page.waitForTimeout(1000);
  3538 |       }
  3539 | 
  3540 |     }
  3541 |   }
  3542 | 
  3543 |   // MOVE THE BELOW CODE TO DIFF sheet
  3544 | 
  3545 |   async getExcelFileDate(normTableFilePath) {
  3546 |     const excelFileData = await this.utils.getExcelSheetData(normTableFilePath);
  3547 |     return excelFileData;
  3548 |   }
  3549 | 
  3550 |   async validateTheDownloadedDerivedScoresReportWithRunTimeData(
  3551 |     txtFileContent: {
  3552 |       [key: string]: {
  3553 |         [key: string]: string;
  3554 |       };
  3555 |     },
  3556 |     examineeID: string,
  3557 |     taskStem: string,
  3558 |     testStemForm: string,
  3559 |     examineeDOB: string,
  3560 |     examineeGrade: string,
  3561 |     scores,
  3562 |     ExcelFileData,
  3563 |     normBasis: string,
  3564 |     testsStemForm?: string[],
  3565 |   ) {
  3566 |     console.log(
  3567 |       `\n ==== Assertion ${testStemForm} for NormBasis as ${normBasis} ==== \n`,
  3568 |     );
  3569 |     const taskStems = await this.utils.getColumnOrValueFromExcel("TaskStem");
  3570 |     const subTests: string[] = ["OVSYN", "OVANT", "GIWHER", "GIWHAT"];
  3571 | 
  3572 |     // console.log (`\n TAsk stems from sel test table = `,taskStems);
  3573 | 
  3574 |     let Wabil: number;
  3575 |     let Semw: number;
  3576 | 
  3577 |     const testsAndSubtests = await this.utils.getTestsAndSubtestsFromSheet();
  3578 | 
  3579 |     if (
  3580 |       testsAndSubtests.includes(taskStem) &&
  3581 |       taskStem !== "ORLVOC" &&
  3582 |       taskStem !== "GENINF"
  3583 |     ) {
  3584 |       ({ Wabil, Semw } = await setWabilSemw(scores, testStemForm));
  3585 |     }
  3586 | 
  3587 |     const excelFileData = ExcelFileData;
  3588 | 
  3589 |     // const excelFileData = await this.utils.getExcelSheetData(normTableFilePath);
  3590 | 
  3591 |     const txtData = txtFileContent[testStemForm];
  3592 |     if (
  3593 |       !txtData ||
  3594 |       txtData.Examinee_ID == "" ||
  3595 |       txtData.Examinee_ID == undefined ||
  3596 |       txtData.Examinee_ID == null ||
  3597 |       txtData.Examinee_ID.includes("No examinees meet the criteria specified.")
  3598 |     ) {
  3599 |       throw new Error(
  3600 |         "The Examinee ID assertion failed, probable cause the Report could be empty.",
  3601 |       );
  3602 |     }
  3603 | 
  3604 |     softAssertPrint(examineeID, txtData.Examinee_ID, "Examinee ID");
  3605 |     softAssertPrint(taskStem, txtData.TaskStem, "Task Stem");
  3606 |     softAssertPrint(testStemForm, txtData.TaskStemForm, "TaskStemForm");
  3607 | 
  3608 |     const compoundsAndClusters: string[] =
  3609 |       await this.utils.getAllCompoundsAndClustersFromSelTestTable();
  3610 | 
  3611 |     if (compoundsAndClusters.includes(taskStem)) {
  3612 |       const reportData = txtData.ContribTaskStems.split(";").map(
  3613 |         (i) => i.split(".")[0],
  3614 |       );
  3615 |       const ContribTaskStemFromSheet =
  3616 |         await this.utils.getContribTaskStemsForCluster(taskStem);
  3617 | 
  3618 |       softAssertArray(ContribTaskStemFromSheet, reportData, "contribTaskStems");
  3619 |     } else {
  3620 |       this.contribTaskStems.push(testStemForm);
  3621 |     }
  3622 | 
  3623 |     const EDOT = await this.utils.getTheDOBYearsBack(0, "new Yark");
  3624 | 
  3625 |     try {
  3626 |       softAssertPrint(EDOT, txtData.EDOT, "EDOT");
  3627 |     } catch (error) {
  3628 |       console.info(`\nSeems like there is a date mismatch  ${error}\n`);
  3629 |     }
  3630 | 
  3631 |     try {
  3632 |       softAssertPrint(
  3633 |         await this.utils.getTheDOBYearsBack(0, "new Yark"),
  3634 |         txtData.LDOT,
  3635 |         "LDOT",
```