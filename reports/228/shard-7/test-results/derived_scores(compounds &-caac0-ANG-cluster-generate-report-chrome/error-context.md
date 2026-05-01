# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/ORLANG_cluster_pub.spec.ts >>  ORLANG cluster Derived Export Automation  >> For PICVOC - Age - All correct scenario,ORLCMP - Age - All correct scenario,ORLSMP - Age - All incorrect scenario,STYCMP - Age - All correct scenario Complete The ORLANG cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/ORLANG_cluster_pub.spec.ts:26:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Submit Test Assignment\']').last()
    - locator resolved to <button disabled class="blue-button" id="ReviewDashboardSubmitAssignment">Submit Test Assignment</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    110 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

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
              - button [ref=e10] [cursor=pointer]: S08PwAut25AH ln
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
                  - gridcell [ref=e68]: Derived_Score_AutoFilter_Template_N2552A87902
                  - gridcell [ref=e70]: Completed
                  - gridcell [ref=e72]: 05/01/2026 09:56 AM
                  - generic [ref=e73]:
                    - gridcell [ref=e75] [cursor=pointer]: Download/Print
                    - gridcell [ref=e77] [cursor=pointer]: Delete
                    - img [ref=e78] [cursor=pointer]
                - row [ref=e80]:
                  - gridcell [ref=e82]: Derived_Score_AutoFilter_Template_N96383A62821
                  - gridcell [ref=e84]: Completed
                  - gridcell [ref=e86]: 05/01/2026 09:50 AM
                  - generic [ref=e87]:
                    - gridcell [ref=e89] [cursor=pointer]: Download/Print
                    - gridcell [ref=e91] [cursor=pointer]: Delete
                    - img [ref=e92] [cursor=pointer]
                - row [ref=e94]:
                  - gridcell [ref=e96]: Derived_Score_AutoFilter_Template_N76601A4773
                  - gridcell [ref=e98]: Completed
                  - gridcell [ref=e100]: 05/01/2026 09:45 AM
                  - generic [ref=e101]:
                    - gridcell [ref=e103] [cursor=pointer]: Download/Print
                    - gridcell [ref=e105] [cursor=pointer]: Delete
                    - img [ref=e106] [cursor=pointer]
                - row [ref=e108]:
                  - gridcell [ref=e110]: Derived_Score_AutoFilter_Template_N51322A81448
                  - gridcell [ref=e112]: Completed
                  - gridcell [ref=e114]: 05/01/2026 09:40 AM
                  - generic [ref=e115]:
                    - gridcell [ref=e117] [cursor=pointer]: Download/Print
                    - gridcell [ref=e119] [cursor=pointer]: Delete
                    - img [ref=e120] [cursor=pointer]
                - row [ref=e122]:
                  - gridcell [ref=e124]: Derived_Score_AutoFilter_Template_N59420A61325
                  - gridcell [ref=e126]: Completed
                  - gridcell [ref=e128]: 04/29/2026 09:57 PM
                  - generic [ref=e129]:
                    - gridcell [ref=e131] [cursor=pointer]: Download/Print
                    - gridcell [ref=e133] [cursor=pointer]: Delete
                    - img [ref=e134] [cursor=pointer]
                - row [ref=e136]:
                  - gridcell [ref=e138]: Derived_Score_AutoFilter_Template_N71645A76992
                  - gridcell [ref=e140]: Completed
                  - gridcell [ref=e142]: 04/29/2026 09:47 PM
                  - generic [ref=e143]:
                    - gridcell [ref=e145] [cursor=pointer]: Download/Print
                    - gridcell [ref=e147] [cursor=pointer]: Delete
                    - img [ref=e148] [cursor=pointer]
                - row [ref=e150]:
                  - gridcell [ref=e152]: Derived_Score_AutoFilter_Template_N39877A76663
                  - gridcell [ref=e154]: Completed
                  - gridcell [ref=e156]: 04/29/2026 09:37 PM
                  - generic [ref=e157]:
                    - gridcell [ref=e159] [cursor=pointer]: Download/Print
                    - gridcell [ref=e161] [cursor=pointer]: Delete
                    - img [ref=e162] [cursor=pointer]
                - row [ref=e164]:
                  - gridcell [ref=e166]: Derived_Score_AutoFilter_Template_N24247A61453
                  - gridcell [ref=e168]: Completed
                  - gridcell [ref=e170]: 04/29/2026 09:32 PM
                  - generic [ref=e171]:
                    - gridcell [ref=e173] [cursor=pointer]: Download/Print
                    - gridcell [ref=e175] [cursor=pointer]: Delete
                    - img [ref=e176] [cursor=pointer]
                - row [ref=e178]:
                  - gridcell [ref=e180]: Derived_Score_AutoFilter_Template_N35083A8530
                  - gridcell [ref=e182]: Completed
                  - gridcell [ref=e184]: 04/29/2026 09:27 PM
                  - generic [ref=e185]:
                    - gridcell [ref=e187] [cursor=pointer]: Download/Print
                    - gridcell [ref=e189] [cursor=pointer]: Delete
                    - img [ref=e190] [cursor=pointer]
                - row [ref=e192]:
                  - gridcell [ref=e194]: Derived_Score_AutoFilter_Template_N34478A63951
                  - gridcell [ref=e196]: Completed
                  - gridcell [ref=e198]: 04/29/2026 09:23 PM
                  - generic [ref=e199]:
                    - gridcell [ref=e201] [cursor=pointer]: Download/Print
                    - gridcell [ref=e203] [cursor=pointer]: Delete
                    - img [ref=e204] [cursor=pointer]
                - row [ref=e206]:
                  - gridcell [ref=e208]: Derived_Score_AutoFilter_Template_N94031A92911
                  - gridcell [ref=e210]: Completed
                  - gridcell [ref=e212]: 04/29/2026 01:32 PM
                  - generic [ref=e213]:
                    - gridcell [ref=e215] [cursor=pointer]: Download/Print
                    - gridcell [ref=e217] [cursor=pointer]: Delete
                    - img [ref=e218] [cursor=pointer]
                - row [ref=e220]:
                  - gridcell [ref=e222]: Derived_Score_AutoFilter_Template_N46972A59739
                  - gridcell [ref=e224]: Completed
                  - gridcell [ref=e226]: 04/29/2026 01:22 PM
                  - generic [ref=e227]:
                    - gridcell [ref=e229] [cursor=pointer]: Download/Print
                    - gridcell [ref=e231] [cursor=pointer]: Delete
                    - img [ref=e232] [cursor=pointer]
                - row [ref=e234]:
                  - gridcell [ref=e236]: Derived_Score_AutoFilter_Template_N72313A72195
                  - gridcell [ref=e238]: Completed
                  - gridcell [ref=e240]: 04/29/2026 01:12 PM
                  - generic [ref=e241]:
                    - gridcell [ref=e243] [cursor=pointer]: Download/Print
                    - gridcell [ref=e245] [cursor=pointer]: Delete
                    - img [ref=e246] [cursor=pointer]
                - row [ref=e248]:
                  - gridcell [ref=e250]: Derived_Score_AutoFilter_Template_N75341A45324
                  - gridcell [ref=e252]: Completed
                  - gridcell [ref=e254]: 04/29/2026 01:03 PM
                  - generic [ref=e255]:
                    - gridcell [ref=e257] [cursor=pointer]: Download/Print
                    - gridcell [ref=e259] [cursor=pointer]: Delete
                    - img [ref=e260] [cursor=pointer]
                - row [ref=e262]:
                  - gridcell [ref=e264]: Derived_Score_AutoFilter_Template_N55904A49510
                  - gridcell [ref=e266]: Completed
                  - gridcell [ref=e268]: 04/29/2026 12:57 PM
                  - generic [ref=e269]:
                    - gridcell [ref=e271] [cursor=pointer]: Download/Print
                    - gridcell [ref=e273] [cursor=pointer]: Delete
                    - img [ref=e274] [cursor=pointer]
                - row [ref=e276]:
                  - gridcell [ref=e278]: Derived_Score_AutoFilter_Template_N80745A41943
                  - gridcell [ref=e280]: Completed
                  - gridcell [ref=e282]: 04/29/2026 12:53 PM
                  - generic [ref=e283]:
                    - gridcell [ref=e285] [cursor=pointer]: Download/Print
                    - gridcell [ref=e287] [cursor=pointer]: Delete
                    - img [ref=e288] [cursor=pointer]
                - row [ref=e290]:
                  - gridcell [ref=e292]: Derived_Score_AutoFilter_Template_N43651A81285
                  - gridcell [ref=e294]: Completed
                  - gridcell [ref=e296]: 04/29/2026 10:58 AM
                  - generic [ref=e297]:
                    - gridcell [ref=e299] [cursor=pointer]: Download/Print
                    - gridcell [ref=e301] [cursor=pointer]: Delete
                    - img [ref=e302] [cursor=pointer]
                - row [ref=e304]:
                  - gridcell [ref=e306]: Derived_Score_AutoFilter_Template_N93495A53121
                  - gridcell [ref=e308]: Completed
                  - gridcell [ref=e310]: 04/29/2026 10:38 AM
                  - generic [ref=e311]:
                    - gridcell [ref=e313] [cursor=pointer]: Download/Print
                    - gridcell [ref=e315] [cursor=pointer]: Delete
                    - img [ref=e316] [cursor=pointer]
                - row [ref=e318]:
                  - gridcell [ref=e320]: Derived_Score_AutoFilter_Template_N49843A71203
                  - gridcell [ref=e322]: Completed
                  - gridcell [ref=e324]: 04/29/2026 10:27 AM
                  - generic [ref=e325]:
                    - gridcell [ref=e327] [cursor=pointer]: Download/Print
                    - gridcell [ref=e329] [cursor=pointer]: Delete
                    - img [ref=e330] [cursor=pointer]
                - row [ref=e332]:
                  - gridcell [ref=e334]: Derived_Score_AutoFilter_Template_N93506A24720
                  - gridcell [ref=e336]: Completed
                  - gridcell [ref=e338]: 04/29/2026 10:22 AM
                  - generic [ref=e339]:
                    - gridcell [ref=e341] [cursor=pointer]: Download/Print
                    - gridcell [ref=e343] [cursor=pointer]: Delete
                    - img [ref=e344] [cursor=pointer]
                - row [ref=e346]:
                  - gridcell [ref=e348]: Derived_Score_AutoFilter_Template_N63972A31104
                  - gridcell [ref=e350]: Completed
                  - gridcell [ref=e352]: 04/29/2026 10:16 AM
                  - generic [ref=e353]:
                    - gridcell [ref=e355] [cursor=pointer]: Download/Print
                    - gridcell [ref=e357] [cursor=pointer]: Delete
                    - img [ref=e358] [cursor=pointer]
                - row [ref=e360]:
                  - gridcell [ref=e362]: Derived_Score_AutoFilter_Template_N66054A14168
                  - gridcell [ref=e364]: Completed
                  - gridcell [ref=e366]: 04/29/2026 10:12 AM
                  - generic [ref=e367]:
                    - gridcell [ref=e369] [cursor=pointer]: Download/Print
                    - gridcell [ref=e371] [cursor=pointer]: Delete
                    - img [ref=e372] [cursor=pointer]
                - row [ref=e374]:
                  - gridcell [ref=e376]: Derived_Score_AutoFilter_Template_N66054A14168
                  - gridcell [ref=e378]: Completed
                  - gridcell [ref=e380]: 04/29/2026 10:11 AM
                  - generic [ref=e381]:
                    - gridcell [ref=e383] [cursor=pointer]: Download/Print
                    - gridcell [ref=e385] [cursor=pointer]: Delete
                    - img [ref=e386] [cursor=pointer]
                - row [ref=e388]:
                  - gridcell [ref=e390]: Derived_Score_AutoFilter_Template_N15206A22142
                  - gridcell [ref=e392]: Completed
                  - gridcell [ref=e394]: 04/29/2026 07:03 AM
                  - generic [ref=e395]:
                    - gridcell [ref=e397] [cursor=pointer]: Download/Print
                    - gridcell [ref=e399] [cursor=pointer]: Delete
                    - img [ref=e400] [cursor=pointer]
                - row [ref=e402]:
                  - gridcell [ref=e404]: Derived_Score_AutoFilter_Template_N33197A82821
                  - gridcell [ref=e406]: Completed
                  - gridcell [ref=e408]: 04/29/2026 06:58 AM
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
  3926 |     await this.page.waitForTimeout(1000);
  3927 |     const itemDetails: string = (await this.itemDetails.textContent())!;
  3928 |     await this.plainNextButtonOrEndButton.click();
  3929 |     await this.listOfOptionsForMagnitudeComparison.nth(0).click();
  3930 |     await this.plainNextButtonOrEndButton.click();
  3931 |     if (typeOfTest.match(/Answer only one sample item/i)) {
  3932 |       if (itemDetails.startsWith('Sample Item B, Trial 1')) {
  3933 |       }
  3934 |     } else if (typeOfTest.match(/Answer both sample items/i)) {
  3935 |       await this.page.waitForTimeout(1000);
  3936 |       await this.listOfOptionsForMagnitudeComparison.nth(0).click();
  3937 |       await this.page.waitForTimeout(1000);
  3938 |       await this.plainNextButtonOrEndButton.click();
  3939 |       await this.page.waitForTimeout(1000);
  3940 |       if (itemDetails.startsWith('Practice Exercise')) {
  3941 |         await this.page.waitForTimeout(1000);
  3942 |       }
  3943 |     } else if (typeOfTest.match(/Discontinue scenario/i)) {
  3944 |       await this.page.waitForTimeout(1000);
  3945 |       await this.listOfOptionsForMagnitudeComparison.nth(0).click();
  3946 |       await this.page.waitForTimeout(1000);
  3947 |       await this.plainNextButtonOrEndButton.click();
  3948 |       await this.startPracticeAndStartTimerButton.click();
  3949 |       await this.examineeCursorButton.click();
  3950 |       await this.listOfOptionsForMagnitudeComparison.nth(0).click();
  3951 |       await this.listOfOptionsForMagnitudeComparison.nth(2).click();
  3952 |       await this.listOfOptionsForMagnitudeComparison.nth(4).click();
  3953 |       await this.listOfOptionsForMagnitudeComparison.nth(6).click();
  3954 |       await this.listOfOptionsForMagnitudeComparison.nth(8).click();
  3955 |       await this.listOfOptionsForMagnitudeComparison.nth(11).click();
  3956 |       await this.doneOrNextButton.click();
  3957 |       await this.doneOrNextButton.click();
  3958 |       await this.page.waitForTimeout(3000);
  3959 |     } else {
  3960 |       await this.listOfOptionsForMagnitudeComparison.nth(0).click();
  3961 |       await this.plainNextButtonOrEndButton.click();
  3962 |       await this.startPracticeAndStartTimerButton.click();
  3963 |       await this.examineeCursorButton.click();
  3964 |       await this.listOfOptionsForMagnitudeComparison.nth(1).click();
  3965 |       await this.listOfOptionsForMagnitudeComparison.nth(3).click();
  3966 |       await this.listOfOptionsForMagnitudeComparison.nth(5).click();
  3967 |       await this.listOfOptionsForMagnitudeComparison.nth(7).click();
  3968 |       await this.listOfOptionsForMagnitudeComparison.nth(9).click();
  3969 |       await this.listOfOptionsForMagnitudeComparison.nth(10).click();
  3970 |       await this.doneOrNextButton.click();
  3971 |       await this.page.waitForTimeout(500);
  3972 |       await this.startTheTimerAndDisplayTheTestItemsButton.click();
  3973 |       await this.page.waitForTimeout(500);
  3974 |       await this.examineeCursorButton.click();
  3975 | 
  3976 |       if (typeOfTest.match(/All correct scenario/i)) {
  3977 |         await this.verifyCharacterLimitOnItemLevelNotes();
  3978 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '5', '6', '9', '11', '12', '14', '16', '19');
  3979 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '3', '4', '7', '8', '11', '13', '14', '17', '18');
  3980 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '2', '4', '7', '9', '10', '12', '14', '16', '19');
  3981 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '5', '6', '9', '10', '12', '14', '17', '18');
  3982 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '5', '6', '8', '11', '12', '15', '17', '18');
  3983 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '5', '6', '9', '11', '12', '14', '16','19');
  3984 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '2', '4', '6', '9', '10', '12', '14', '17', '18');
  3985 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '4', '7', '8', '11', '13', '14', '17', '19');
  3986 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '5', '7', '9', '10', '13', '14', '17', '19');
  3987 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '4', '6', '8', '11', '12', '14', '16', '19');
  3988 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '5', '7', '8', '10', '13', '14', '16', '18');
  3989 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '2', '4', '6', '8', '11', '13', '15', '17', '18');
  3990 |         await this.examineeCursorButton.click();
  3991 |       } else if (typeOfTest.match(/All incorrect scenario/i)) {
  3992 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '4', '7', '8', '10', '13', '15', '17', '18');
  3993 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '2', '5', '6', '9', '10', '12', '15', '16', '19');
  3994 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '3', '5', '6', '8', '11', '13', '15', '17', '18');
  3995 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '4', '7', '8', '11', '13', '15', '16', '19');
  3996 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '2', '4', '7', '9', '10', '13', '14', '16', '19');
  3997 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '4', '7', '8', '10', '13', '15', '17','18');
  3998 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '3', '5', '7', '8', '11', '13', '15', '16', '19');
  3999 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '5', '6', '9', '10', '12', '15', '16', '18');
  4000 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '4', '6', '8', '11', '12', '15', '16', '18');
  4001 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '5', '7', '9', '10', '13', '15', '17', '18');
  4002 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('1', '3', '4', '6', '9', '11', '12', '15', '17', '19');
  4003 |         await this.verifyScoringAllTestItemsInEachPageWithOneTapForMagnitudeComparison('0', '3', '5', '7', '9', '10', '12', '14', '16', '19');
  4004 |         await this.examineeCursorButton.click();
  4005 |       } else {
  4006 |         throw new Error(
  4007 |           `The ${typeOfTest} didnt match with any of the conditions provided`,
  4008 |         );
  4009 |       }
  4010 |     }
  4011 | 
  4012 |     if ((await this.nextAndEndTestButton.first().textContent()) === 'End Test') {
  4013 |       await this.nextAndEndTestButton.first().click();
  4014 |     }
  4015 |     console.log(this.scoreMap);
  4016 |     return this.scoreMap;
  4017 |   }
  4018 | 
  4019 |   async endSessionRSB() {
  4020 |     await this.addTestObservationsNew.click();
  4021 |     await this.checkBoxNoneOfTheAbove.click();
  4022 |     await this.endSessionButton.click();
  4023 |     await this.reviewModeButton.click();
  4024 |     await this.page.waitForTimeout(3000);
  4025 |     // await this.page.waitForResponse(response => response.url().includes('GetItemResults') && response.status() === 200);
> 4026 |     await this.submitTestAssignmentButton.click();
       |                                           ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  4027 |   }
  4028 | 
  4029 |   async validateEndTestPopUpTextContent(
  4030 |     AE: string,
  4031 |     GE: string,
  4032 |     ScoreCheckText: string,
  4033 |     FlagsText: string,
  4034 |     OutcomeMsg: string,
  4035 |     rsb: string[],
  4036 |     testStemForm: string,
  4037 |     typeOfTest: string
  4038 |   ) {
  4039 |     const testNames: string[] = ['WRTSMP.W5PA'];
  4040 |     const testNames1: string[] = ['SWRTFL.W5PA', 'MTHFLU.W5PA'];
  4041 |     const testNames2: string[] = [
  4042 |       'RPDPHO.W5PA',
  4043 |       'LETPAT.W5PA',
  4044 |       'RPDLET.W5PA',
  4045 |       'RPDPIC.W5PA',
  4046 |       'NUMPAT.W5PA',
  4047 |       'SRDGFL.W5PA',
  4048 |       'NUMPAT.W5PX',
  4049 |       'MAGCMP.W5PA',
  4050 |     ];
  4051 |     await expect.soft(this.aeValue).toHaveText(AE);
  4052 |     await expect.soft(this.geValue).toHaveText(GE);
  4053 |     expect.soft(await this.endTestPopUpElements.nth(1).textContent()).toContain(ScoreCheckText);
  4054 |     if (testNames.includes(testStemForm) && !typeOfTest.match(/Block A Discontinue Scenario WRTSMP/i)) {
  4055 |       expect.soft(await this.endTestPopUpElements.nth(10).textContent()).toContain(FlagsText);
  4056 |       expect.soft(await this.endTestPopUpElements.nth(15).textContent()).toContain(OutcomeMsg);
  4057 |       await this.endTestPopUpElements.nth(17).click();
  4058 |     } else if (testNames2.includes(testStemForm)) {
  4059 |       expect.soft(await this.endTestPopUpElements.nth(9).textContent()).toContain(FlagsText);
  4060 |       expect.soft(await this.endTestPopUpElements.nth(14).textContent()).toContain(OutcomeMsg);
  4061 |       await this.endTestPopUpElements.nth(18).click();
  4062 |     } else if (testStemForm === 'SEMRET.W5PA' && typeOfTest.match(/125 correct scenario|All incorrect scenario/i)) {
  4063 |       expect.soft(await this.endTestPopUpElements.nth(9).textContent()).toContain(FlagsText);
  4064 |       expect.soft(await this.endTestPopUpElements.nth(14).textContent()).toContain(OutcomeMsg);
  4065 |       await this.endTestPopUpElements.nth(16).click();
  4066 |     } else if (
  4067 |       (testStemForm === 'WRDGFL.W5PA' &&
  4068 |         typeOfTest.match(
  4069 |           /Sample Item EndTest Flow when RS is (0|1)|Practice Exercise All Incorrect|Test Items (All Correct|All Incorrect|6 Correct)/i
  4070 |         )) ||
  4071 |       testStemForm === 'MAGCMP.W5PA'
  4072 |     ) {
  4073 |       expect.soft(await this.endTestPopUpElements.nth(9).textContent()).toContain(FlagsText);
  4074 |       expect.soft(await this.endTestPopUpElements.nth(14).textContent()).toContain(OutcomeMsg);
  4075 |       await this.endTestPopUpElements.nth(17).click();
  4076 |     } else if (testNames1.includes(testStemForm)) {
  4077 |       expect.soft(await this.endTestPopUpElements.nth(11).textContent()).toContain(FlagsText);
  4078 |       expect.soft(await this.endTestPopUpElements.nth(16).textContent()).toContain(OutcomeMsg);
  4079 |       await this.endTestPopUpElements.nth(19).click();
  4080 |     } else {
  4081 |       expect.soft(await this.endTestPopUpElements.nth(8).textContent()).toContain(FlagsText);
  4082 |       expect.soft(await this.endTestPopUpElements.nth(13).textContent()).toContain(OutcomeMsg);
  4083 |       if (testNames1.includes(testStemForm)) {
  4084 |         await this.endTestPopUpElements.nth(17).click();
  4085 |       } else if (testNames2.includes(testStemForm)) {
  4086 |         await this.endTestPopUpElements.nth(18).click();
  4087 |       } else if (
  4088 |         (testStemForm === 'STYCMP.W5PA' && typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
  4089 |         (testStemForm === 'WRDATK.W5PA' && typeOfTest === 'Block A EndTest Flow when RS is 2') ||
  4090 |         (testStemForm === 'LWIDNT.W5PA' &&
  4091 |           typeOfTest.match(/Block A EndTest Flow when RS is 0|Block AB EndTest flow scenario when RS is 9/)) ||
  4092 |         (testStemForm === 'MPRBID.W5PA' && typeOfTest.match(/Sample Items AB discontinue Scenario for SSP (1|2|3)/i))
  4093 |       ) {
  4094 |         await this.endTestPopUpElements.nth(16).click();
  4095 |       } else if (
  4096 |         (testStemForm === 'WRDGFL.W5PA' &&
  4097 |           typeOfTest.match(
  4098 |             /Sample Item EndTest Flow when RS is (0|1)|Practice Exercise All Incorrect|Test Items (All Correct|All Incorrect|6 Correct)/i
  4099 |           )) ||
  4100 |         testStemForm === 'MAGCMP.W5PA'
  4101 |       ) {
  4102 |         await this.endTestPopUpElements.nth(17).click();
  4103 |       } else {
  4104 |         await this.endTestPopUpElements.nth(15).click();
  4105 |       }
  4106 |     }
  4107 |     const rsbelements = await this.page.locator("//button[@class='rsi-checkbox']");
  4108 |     const count = await rsbelements.count();
  4109 |     // Array to store text contents
  4110 |     const responseStyleBehaviours: string[] = [];
  4111 |     // Iterate over each element and fetch text content
  4112 |     for (let i = 0; i < count; i++) {
  4113 |       const element = rsbelements.nth(i);
  4114 |       const textContent = await element.textContent();
  4115 |       responseStyleBehaviours.push(textContent?.trim() || '');
  4116 |     }
  4117 |     console.log(responseStyleBehaviours);
  4118 |     rsb.forEach((rsbehaviourText, index) => {
  4119 |       expect(responseStyleBehaviours[index]).toContain(rsbehaviourText);
  4120 |     });
  4121 |     if (testNames.includes(testStemForm)) {
  4122 |       await this.endTestPopUpElements.nth(17).click();
  4123 |     } else if (testNames2.includes(testStemForm)) {
  4124 |       await this.endTestPopUpElements.nth(18).click();
  4125 |     } else if (testNames1.includes(testStemForm)) {
  4126 |       await this.endTestPopUpElements.nth(19).click();
```