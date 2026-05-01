# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/GFGC_cluster_pub.spec.ts >>  GFGC cluster Derived Export Automation  >> For OVSYN - K12 - All incorrect scenario,OVANT - K12 - Attain Quick Basal Ceiling scenario,MATRCZ - K12 - All incorrect scenario,VRBANL - K12 - Attain Quick Basal Ceiling scenario,ANLSYN - K12 - All correct scenario Complete The GFGC cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/GFGC_cluster_pub.spec.ts:29:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.plain-button.replay-button')
Expected: visible
Timeout: 70000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 70000ms
  - waiting for locator('.plain-button.replay-button')

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
              - button [ref=e10] [cursor=pointer]: S04PwAut25AH ln
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
                  - gridcell [ref=e68]: Derived_Score_AutoFilter_Template_N43929A89159
                  - gridcell [ref=e70]: Completed
                  - gridcell [ref=e72]: 05/01/2026 10:02 AM
                  - generic [ref=e73]:
                    - gridcell [ref=e75] [cursor=pointer]: Download/Print
                    - gridcell [ref=e77] [cursor=pointer]: Delete
                    - img [ref=e78] [cursor=pointer]
                - row [ref=e80]:
                  - gridcell [ref=e82]: Derived_Score_AutoFilter_Template_N41703A57756
                  - gridcell [ref=e84]: Completed
                  - gridcell [ref=e86]: 05/01/2026 09:51 AM
                  - generic [ref=e87]:
                    - gridcell [ref=e89] [cursor=pointer]: Download/Print
                    - gridcell [ref=e91] [cursor=pointer]: Delete
                    - img [ref=e92] [cursor=pointer]
                - row [ref=e94]:
                  - gridcell [ref=e96]: Derived_Score_AutoFilter_Template_N56912A22860
                  - gridcell [ref=e98]: Completed
                  - gridcell [ref=e100]: 05/01/2026 09:47 AM
                  - generic [ref=e101]:
                    - gridcell [ref=e103] [cursor=pointer]: Download/Print
                    - gridcell [ref=e105] [cursor=pointer]: Delete
                    - img [ref=e106] [cursor=pointer]
                - row [ref=e108]:
                  - gridcell [ref=e110]: Derived_Score_AutoFilter_Template_N56732A78906
                  - gridcell [ref=e112]: Completed
                  - gridcell [ref=e114]: 05/01/2026 09:43 AM
                  - generic [ref=e115]:
                    - gridcell [ref=e117] [cursor=pointer]: Download/Print
                    - gridcell [ref=e119] [cursor=pointer]: Delete
                    - img [ref=e120] [cursor=pointer]
                - row [ref=e122]:
                  - gridcell [ref=e124]: Derived_Score_AutoFilter_Template_N60489A47676
                  - gridcell [ref=e126]: Completed
                  - gridcell [ref=e128]: 05/01/2026 09:36 AM
                  - generic [ref=e129]:
                    - gridcell [ref=e131] [cursor=pointer]: Download/Print
                    - gridcell [ref=e133] [cursor=pointer]: Delete
                    - img [ref=e134] [cursor=pointer]
                - row [ref=e136]:
                  - gridcell [ref=e138]: Derived_Score_AutoFilter_Template_N34221A35315
                  - gridcell [ref=e140]: Completed
                  - gridcell [ref=e142]: 04/29/2026 09:54 PM
                  - generic [ref=e143]:
                    - gridcell [ref=e145] [cursor=pointer]: Download/Print
                    - gridcell [ref=e147] [cursor=pointer]: Delete
                    - img [ref=e148] [cursor=pointer]
                - row [ref=e150]:
                  - gridcell [ref=e152]: Derived_Score_AutoFilter_Template_N78338A36119
                  - gridcell [ref=e154]: Completed
                  - gridcell [ref=e156]: 04/29/2026 09:43 PM
                  - generic [ref=e157]:
                    - gridcell [ref=e159] [cursor=pointer]: Download/Print
                    - gridcell [ref=e161] [cursor=pointer]: Delete
                    - img [ref=e162] [cursor=pointer]
                - row [ref=e164]:
                  - gridcell [ref=e166]: Derived_Score_AutoFilter_Template_N9373A24683
                  - gridcell [ref=e168]: Completed
                  - gridcell [ref=e170]: 04/29/2026 09:33 PM
                  - generic [ref=e171]:
                    - gridcell [ref=e173] [cursor=pointer]: Download/Print
                    - gridcell [ref=e175] [cursor=pointer]: Delete
                    - img [ref=e176] [cursor=pointer]
                - row [ref=e178]:
                  - gridcell [ref=e180]: Derived_Score_AutoFilter_Template_N2414A75059
                  - gridcell [ref=e182]: Completed
                  - gridcell [ref=e184]: 04/29/2026 09:29 PM
                  - generic [ref=e185]:
                    - gridcell [ref=e187] [cursor=pointer]: Download/Print
                    - gridcell [ref=e189] [cursor=pointer]: Delete
                    - img [ref=e190] [cursor=pointer]
                - row [ref=e192]:
                  - gridcell [ref=e194]: Derived_Score_AutoFilter_Template_N21175A31821
                  - gridcell [ref=e196]: Completed
                  - gridcell [ref=e198]: 04/29/2026 09:25 PM
                  - generic [ref=e199]:
                    - gridcell [ref=e201] [cursor=pointer]: Download/Print
                    - gridcell [ref=e203] [cursor=pointer]: Delete
                    - img [ref=e204] [cursor=pointer]
                - row [ref=e206]:
                  - gridcell [ref=e208]: Derived_Score_AutoFilter_Template_N25285A35863
                  - gridcell [ref=e210]: Completed
                  - gridcell [ref=e212]: 04/29/2026 09:19 PM
                  - generic [ref=e213]:
                    - gridcell [ref=e215] [cursor=pointer]: Download/Print
                    - gridcell [ref=e217] [cursor=pointer]: Delete
                    - img [ref=e218] [cursor=pointer]
                - row [ref=e220]:
                  - gridcell [ref=e222]: Derived_Score_AutoFilter_Template_N41239A17394
                  - gridcell [ref=e224]: Completed
                  - gridcell [ref=e226]: 04/29/2026 01:30 PM
                  - generic [ref=e227]:
                    - gridcell [ref=e229] [cursor=pointer]: Download/Print
                    - gridcell [ref=e231] [cursor=pointer]: Delete
                    - img [ref=e232] [cursor=pointer]
                - row [ref=e234]:
                  - gridcell [ref=e236]: Derived_Score_AutoFilter_Template_N35025A92774
                  - gridcell [ref=e238]: Completed
                  - gridcell [ref=e240]: 04/29/2026 01:19 PM
                  - generic [ref=e241]:
                    - gridcell [ref=e243] [cursor=pointer]: Download/Print
                    - gridcell [ref=e245] [cursor=pointer]: Delete
                    - img [ref=e246] [cursor=pointer]
                - row [ref=e248]:
                  - gridcell [ref=e250]: Derived_Score_AutoFilter_Template_N39334A29468
                  - gridcell [ref=e252]: Completed
                  - gridcell [ref=e254]: 04/29/2026 01:09 PM
                  - generic [ref=e255]:
                    - gridcell [ref=e257] [cursor=pointer]: Download/Print
                    - gridcell [ref=e259] [cursor=pointer]: Delete
                    - img [ref=e260] [cursor=pointer]
                - row [ref=e262]:
                  - gridcell [ref=e264]: Derived_Score_AutoFilter_Template_N55160A85417
                  - gridcell [ref=e266]: Completed
                  - gridcell [ref=e268]: 04/29/2026 01:00 PM
                  - generic [ref=e269]:
                    - gridcell [ref=e271] [cursor=pointer]: Download/Print
                    - gridcell [ref=e273] [cursor=pointer]: Delete
                    - img [ref=e274] [cursor=pointer]
                - row [ref=e276]:
                  - gridcell [ref=e278]: Derived_Score_AutoFilter_Template_N55160A85417
                  - gridcell [ref=e280]: Completed
                  - gridcell [ref=e282]: 04/29/2026 01:00 PM
                  - generic [ref=e283]:
                    - gridcell [ref=e285] [cursor=pointer]: Download/Print
                    - gridcell [ref=e287] [cursor=pointer]: Delete
                    - img [ref=e288] [cursor=pointer]
                - row [ref=e290]:
                  - gridcell [ref=e292]: Derived_Score_AutoFilter_Template_N43547A35013
                  - gridcell [ref=e294]: Completed
                  - gridcell [ref=e296]: 04/29/2026 12:55 PM
                  - generic [ref=e297]:
                    - gridcell [ref=e299] [cursor=pointer]: Download/Print
                    - gridcell [ref=e301] [cursor=pointer]: Delete
                    - img [ref=e302] [cursor=pointer]
                - row [ref=e304]:
                  - gridcell [ref=e306]: Derived_Score_AutoFilter_Template_N44809A99512
                  - gridcell [ref=e308]: Completed
                  - gridcell [ref=e310]: 04/29/2026 12:50 PM
                  - generic [ref=e311]:
                    - gridcell [ref=e313] [cursor=pointer]: Download/Print
                    - gridcell [ref=e315] [cursor=pointer]: Delete
                    - img [ref=e316] [cursor=pointer]
                - row [ref=e318]:
                  - gridcell [ref=e320]: Test_DataExport_AutoFilter_Template_N15857A75060
                  - gridcell [ref=e322]: Completed
                  - gridcell [ref=e324]: 04/29/2026 12:39 PM
                  - generic [ref=e325]:
                    - gridcell [ref=e327] [cursor=pointer]: Download/Print
                    - gridcell [ref=e329] [cursor=pointer]: Delete
                    - img [ref=e330] [cursor=pointer]
                - row [ref=e332]:
                  - gridcell [ref=e334]: Derived_Score_AutoFilter_Template_N28241A90322
                  - gridcell [ref=e336]: Completed
                  - gridcell [ref=e338]: 04/29/2026 11:01 AM
                  - generic [ref=e339]:
                    - gridcell [ref=e341] [cursor=pointer]: Download/Print
                    - gridcell [ref=e343] [cursor=pointer]: Delete
                    - img [ref=e344] [cursor=pointer]
                - row [ref=e346]:
                  - gridcell [ref=e348]: Derived_Score_AutoFilter_Template_N18472A59363
                  - gridcell [ref=e350]: Completed
                  - gridcell [ref=e352]: 04/29/2026 10:43 AM
                  - generic [ref=e353]:
                    - gridcell [ref=e355] [cursor=pointer]: Download/Print
                    - gridcell [ref=e357] [cursor=pointer]: Delete
                    - img [ref=e358] [cursor=pointer]
                - row [ref=e360]:
                  - gridcell [ref=e362]: Derived_Score_AutoFilter_Template_N73820A77080
                  - gridcell [ref=e364]: Completed
                  - gridcell [ref=e366]: 04/29/2026 10:22 AM
                  - generic [ref=e367]:
                    - gridcell [ref=e369] [cursor=pointer]: Download/Print
                    - gridcell [ref=e371] [cursor=pointer]: Delete
                    - img [ref=e372] [cursor=pointer]
                - row [ref=e374]:
                  - gridcell [ref=e376]: Derived_Score_AutoFilter_Template_N1984A33006
                  - gridcell [ref=e378]: Completed
                  - gridcell [ref=e380]: 04/29/2026 10:18 AM
                  - generic [ref=e381]:
                    - gridcell [ref=e383] [cursor=pointer]: Download/Print
                    - gridcell [ref=e385] [cursor=pointer]: Delete
                    - img [ref=e386] [cursor=pointer]
                - row [ref=e388]:
                  - gridcell [ref=e390]: Derived_Score_AutoFilter_Template_N22410A78562
                  - gridcell [ref=e392]: Completed
                  - gridcell [ref=e394]: 04/29/2026 10:14 AM
                  - generic [ref=e395]:
                    - gridcell [ref=e397] [cursor=pointer]: Download/Print
                    - gridcell [ref=e399] [cursor=pointer]: Delete
                    - img [ref=e400] [cursor=pointer]
                - row [ref=e402]:
                  - gridcell [ref=e404]: Derived_Score_AutoFilter_Template_N34378A79477
                  - gridcell [ref=e406]: Completed
                  - gridcell [ref=e408]: 04/29/2026 10:07 AM
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
        - /url: https://www.riversideinsights.com/?__hstc=20581799.0dcd5a3cd0e3b27a14c7e65467102297.1777646630359.1777646630359.1777646630359.1&__hssc=20581799.2.1777646630360&__hsfp=ae83aed9a53ec42218e111e5400f5a03
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
          - /url: https://info.riversideinsights.com/terms-of-use?__hstc=20581799.0dcd5a3cd0e3b27a14c7e65467102297.1777646630359.1777646630359.1777646630359.1&__hssc=20581799.2.1777646630360&__hsfp=ae83aed9a53ec42218e111e5400f5a03
          - text: Terms of Use
        - generic [ref=e440]: "|"
        - link [ref=e441] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/privacy-assessment_policy?__hstc=20581799.0dcd5a3cd0e3b27a14c7e65467102297.1777646630359.1777646630359.1777646630359.1&__hssc=20581799.2.1777646630360&__hsfp=ae83aed9a53ec42218e111e5400f5a03
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
  824  |       .click();
  825  |     await this.page.waitForLoadState();
  826  |   }
  827  | 
  828  |   async completeTheTakenTestForDerivedScores(
  829  |     typeOfTest: string,
  830  |     stemForm: string,
  831  |     BbyC: number,
  832  |     flag: string,
  833  |   ): Promise<Map<string, string>> {
  834  |     let correctCount: number = 1;
  835  |     let inCorrectCount: number = 1;
  836  |     let timerTest = false;
  837  |     let patternTestCorrectResponses;
  838  |     let tapFluency = false;
  839  | 
  840  |     if (stemForm.includes("MATRCZ.W5PA")) {
  841  |       this.scoreMap.clear();
  842  |       this.scoreMap =
  843  |         await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
  844  |           "MATRCZ.W5PA_TestSchema.xlsx",
  845  |           "/Heading/",
  846  |         );
  847  |     } else if (stemForm.includes("SEGMNT.W5PA")) {
  848  |       this.scoreMap.clear();
  849  |       this.scoreMap =
  850  |         await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
  851  |           "SEGMNT.W5PA_TestSchema.xlsx",
  852  |           "Heading",
  853  |         );
  854  |     } else if (/^(NUMPAT|LETPAT)\.W5PA$/.test(stemForm)) {
  855  |       const matchedPattern = stemForm;
  856  |       const patternConfig: Record<string, { schemaFile: string }> = {
  857  |         "NUMPAT.W5PA": { schemaFile: "NUMPAT.W5PA_TestSchema.xlsx" },
  858  |         "LETPAT.W5PA": { schemaFile: "LETPAT.W5PA_TestSchema.xlsx" },
  859  |       };
  860  | 
  861  |       if (!matchedPattern || !patternConfig[matchedPattern]) {
  862  |         throw new Error(`No configuration found for the stemForm: ${stemForm}`);
  863  |       }
  864  | 
  865  |       const { schemaFile } = patternConfig[matchedPattern];
  866  | 
  867  |       this.scoreMap.clear();
  868  | 
  869  |       this.scoreMap =
  870  |         await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
  871  |           schemaFile,
  872  |           "Heading",
  873  |         );
  874  | 
  875  |       patternTestCorrectResponses =
  876  |         await this.utils.readCorrectValuesFromPatternTest(
  877  |           matchedPattern,
  878  |           "Heading",
  879  |           "TabStim Resps",
  880  |         );
  881  |     } else if (stemForm.includes("MTHFLU.W5PA")) {
  882  |       // compared to other fluency tests, MTHFLU.W5PA is total diff, it has to be handled diff
  883  | 
  884  |       this.scoreMap.clear();
  885  | 
  886  |       this.scoreMap.set("Practice Exercise", "");
  887  |       this.scoreMap.set("Page 4", "");
  888  |       this.scoreMap.set("Page 5", "");
  889  |     } else {
  890  |       const lastItemNumber = await this.page
  891  |         .locator(".items-container div span.item-text")
  892  |         .last()
  893  |         .textContent();
  894  |       const itemNumber: number = parseInt(lastItemNumber.split(" ")[1], 10);
  895  |       console.log(`the last item number is = ${itemNumber}`);
  896  |       this.scoreMap.clear();
  897  |       this.scoreMap.set(` `, "^");
  898  |       for (let index = 1; index <= itemNumber; index++) {
  899  |         if (stemForm.includes("STYREC.W5PA")) {
  900  |           this.scoreMap.set(`Story ${index}`, "x");
  901  |         } else {
  902  |           this.scoreMap.set(`Item ${index}`, "x");
  903  |         }
  904  |       }
  905  |     }
  906  | 
  907  |     console.log(`Type Of test ${typeOfTest} \n`);
  908  |     while (await this.plainNextButtonOrEndButton.first().isVisible()) {
  909  |       await this.page.waitForTimeout(2000);
  910  |       const itemDetails: string = (await this.itemDetails.textContent())!;
  911  |       console.log(itemDetails);
  912  |       const correctlocator: Locator = this.corectOptionButton.first();
  913  |       const incorrectlocator: Locator = this.incorrectOptionButton.first();
  914  |       const correctlocatorsAll: Promise<Locator[]> =
  915  |         this.corectOptionButton.all();
  916  |       const incorrectlocatorAll: Promise<Locator[]> =
  917  |         this.incorrectOptionButton.all();
  918  | 
  919  |       const startTimerVisable: boolean = await this.startTimer.isVisible();
  920  | 
  921  |       if (itemDetails.startsWith("Introduction")) {
  922  |         if (await this.videoPlayButton.isVisible()) {
  923  |           await this.videoPlayButton.click();
> 924  |           await expect(this.replayButton).toBeVisible({ timeout: 70000 });
       |                                           ^ Error: expect(locator).toBeVisible() failed
  925  |         }
  926  |       } else if (
  927  |         typeOfTest.match(/All correct scenario/i) &&
  928  |         stemForm.match("MTHFLU.W5PA")
  929  |       ) {
  930  |         this.scoreMap.set("Practice Exercise", "5");
  931  |         this.scoreMap.set("Page 4", "80");
  932  |         this.scoreMap.set("Page 5", "80");
  933  | 
  934  |         await this.answerMTHFLUTest(itemDetails, typeOfTest);
  935  |       } else if (
  936  |         typeOfTest.match(/All incorrect scenario/i) &&
  937  |         stemForm.match("MTHFLU.W5PA")
  938  |       ) {
  939  |         this.scoreMap.set("Practice Exercise", "0");
  940  | 
  941  |         await this.answerMTHFLUTest(itemDetails, typeOfTest);
  942  |       } else if (
  943  |         typeOfTest.match(/All correct scenario/i) &&
  944  |         /^(Story)/.test(itemDetails)
  945  |       ) {
  946  |         await this.clickAllCorrectOption(correctlocatorsAll, itemDetails);
  947  |       } else if (
  948  |         typeOfTest.match(/All correct scenario/i) &&
  949  |         startTimerVisable
  950  |       ) {
  951  |         await this.clickPlusCorrectOption(itemDetails);
  952  |         timerTest = true;
  953  |       } else if (
  954  |         typeOfTest.match(/All correct scenario/i) &&
  955  |         /^(Practice Exercise|Test Items)/.test(itemDetails)
  956  |       ) {
  957  |         await this.answerCorrectForTimerTest(
  958  |           stemForm,
  959  |           itemDetails,
  960  |           patternTestCorrectResponses,
  961  |         );
  962  |         tapFluency = true;
  963  |       } else if (typeOfTest.match(/All correct scenario/i)) {
  964  |         await this.clickCorrectOption(correctlocator, itemDetails);
  965  |       } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
  966  |         if (BbyC && itemDetails.startsWith("Item ")) {
  967  |           if (correctCount <= BbyC) {
  968  |             await this.clickCorrectOption(correctlocator, itemDetails);
  969  |             correctCount++;
  970  |           } else if (inCorrectCount <= BbyC) {
  971  |             await this.clickInCorrectOption(incorrectlocator, itemDetails);
  972  |             inCorrectCount++;
  973  |           }
  974  |         } else {
  975  |           await this.clickCorrectOption(correctlocator, itemDetails);
  976  |         }
  977  |       } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
  978  |         if (BbyC && itemDetails.startsWith("Item ")) {
  979  |           if (correctCount <= BbyC) {
  980  |             await this.clickCorrectOption(correctlocator, itemDetails);
  981  |             correctCount++;
  982  |           } else if (inCorrectCount <= BbyC) {
  983  |             await this.clickInCorrectOption(incorrectlocator, itemDetails);
  984  |             inCorrectCount++;
  985  |           }
  986  |           if (inCorrectCount === BbyC) {
  987  |             break;
  988  |           }
  989  |         } else {
  990  |           await this.clickCorrectOption(correctlocator, itemDetails);
  991  |         }
  992  |       } else if (typeOfTest.match(/SampleItems correct/i)) {
  993  |         if (itemDetails.startsWith("Item")) {
  994  |           this.scoreMap.clear();
  995  |           break;
  996  |         }
  997  |         await this.clickCorrectOption(correctlocator, itemDetails);
  998  |       } else if (typeOfTest.match(/SampleItems incorrect/i)) {
  999  |         if (itemDetails.startsWith("Item")) {
  1000 |           this.scoreMap.clear();
  1001 |           break;
  1002 |         }
  1003 |         await this.clickInCorrectOption(incorrectlocator, itemDetails);
  1004 |       } else if (
  1005 |         typeOfTest.match(/All incorrect scenario/i) &&
  1006 |         /^(Sample|.*Trial.*)/.test(itemDetails)
  1007 |       ) {
  1008 |         await this.clickCorrectOption(correctlocator, itemDetails);
  1009 |       } else if (typeOfTest.match(/All incorrect scenario/i)) {
  1010 |         await this.clickInCorrectOption(incorrectlocator, itemDetails);
  1011 |         await this.sideNavLock.waitFor({ state: "detached" });
  1012 |       } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
  1013 |         if (correctCount === BbyC) {
  1014 |           break;
  1015 |         } else if (
  1016 |           BbyC &&
  1017 |           itemDetails.startsWith("Item ") &&
  1018 |           correctCount <= BbyC
  1019 |         ) {
  1020 |           await this.clickCorrectOption(correctlocator, itemDetails);
  1021 |           correctCount++;
  1022 |         } else await this.clickCorrectOption(correctlocator, itemDetails);
  1023 |       } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
  1024 |         if (itemDetails === "Item 1") {
```