# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/ORLVOC_comp_pub.spec.ts >>  ORLVOC cluster Derived Export Automation  >> For OVSYN - Age - All correct scenario,OVANT - Age - Attain Quick Basal Ceiling scenario Complete The ORLVOC compound & generate report
- Location: src/tests/derived_scores(compounds & clusters)/ORLVOC_comp_pub.spec.ts:27:9

# Error details

```
Error: The Examinee ID assertion failed, probable cause the Report could be empty.
```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - generic [ref=e1]:
        - banner "Clinical Products Header" [ref=e2]:
          - generic [ref=e3]:
            - button "Skip to main Content" [ref=e4]
            - link "Riverside Insights Logo" [ref=e5] [cursor=pointer]:
              - /url: /products
            - generic [ref=e6]: Riverside Insights Logo
            - generic [ref=e7]:
              - heading "Hello S09PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S09PwAut25AH ln" [ref=e10] [cursor=pointer]
              - navigation [ref=e13]:
                - button "Contact Us" [ref=e14] [cursor=pointer]
                - button "| Subscription Details" [ref=e15] [cursor=pointer]
                - button "| Sign Out" [ref=e16] [cursor=pointer]
        - navigation "Navigation toolbar" [ref=e17]:
          - menubar [ref=e19]:
            - menuitem "Dashboard" [ref=e21] [cursor=pointer]
            - menuitem "Test Sets" [ref=e23] [cursor=pointer]
            - menuitem "Examinees" [ref=e25] [cursor=pointer]
            - menuitem "Staff" [ref=e27] [cursor=pointer]
            - menuitem "Reports" [ref=e29] [cursor=pointer]:
              - text: Reports
              - img [ref=e30]
              - menu
            - menuitem "Resources" [ref=e33] [cursor=pointer]
        - main [ref=e34]:
          - generic [ref=e35]:
            - heading "REPORT CENTER" [level=1] [ref=e36]
            - navigation [ref=e37]:
              - tablist [ref=e38]:
                - tab "Report Library" [selected] [ref=e39] [cursor=pointer]
                - button "Zoom In" [ref=e40] [cursor=pointer]:
                  - img "Zoom Page In Icon" [ref=e41]
            - generic "Report Library" [ref=e50]:
              - grid [ref=e51]:
                - generic [ref=e52]:
                  - generic "Report Name" [ref=e53]:
                    - generic [ref=e55]: Report Name
                  - generic "Status" [ref=e56]:
                    - generic [ref=e58]: Status
                  - generic "Date Created" [ref=e59]:
                    - generic [ref=e61]: Date Created
                  - generic "Actions" [ref=e62]:
                    - generic [ref=e64]: Actions
                - rowgroup [ref=e65]:
                  - row "Report Name Derived_Score_AutoFilter_Template_N74701A99784 Status Completed Date Created 04/29/2026 09:30 PM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N74701A99784" [ref=e68]: Derived_Score_AutoFilter_Template_N74701A99784
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 04/29/2026 09:30 PM" [ref=e72]: 04/29/2026 09:30 PM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N88761A64921 Status Completed Date Created 04/29/2026 09:26 PM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N88761A64921" [ref=e82]: Derived_Score_AutoFilter_Template_N88761A64921
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 04/29/2026 09:26 PM" [ref=e86]: 04/29/2026 09:26 PM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N76056A3617 Status Completed Date Created 04/29/2026 09:19 PM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N76056A3617" [ref=e96]: Derived_Score_AutoFilter_Template_N76056A3617
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 04/29/2026 09:19 PM" [ref=e100]: 04/29/2026 09:19 PM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N11397A75566 Status Completed Date Created 04/29/2026 01:06 PM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N11397A75566" [ref=e110]: Derived_Score_AutoFilter_Template_N11397A75566
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 04/29/2026 01:06 PM" [ref=e114]: 04/29/2026 01:06 PM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N70894A98808 Status Completed Date Created 04/29/2026 01:01 PM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N70894A98808" [ref=e124]: Derived_Score_AutoFilter_Template_N70894A98808
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/29/2026 01:01 PM" [ref=e128]: 04/29/2026 01:01 PM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N48000A18946 Status Completed Date Created 04/29/2026 12:56 PM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N48000A18946" [ref=e138]: Derived_Score_AutoFilter_Template_N48000A18946
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/29/2026 12:56 PM" [ref=e142]: 04/29/2026 12:56 PM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N45251A9715 Status Completed Date Created 04/29/2026 12:50 PM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N45251A9715" [ref=e152]: Derived_Score_AutoFilter_Template_N45251A9715
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/29/2026 12:50 PM" [ref=e156]: 04/29/2026 12:50 PM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N89877A10645 Status Completed Date Created 04/29/2026 10:23 AM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N89877A10645" [ref=e166]: Derived_Score_AutoFilter_Template_N89877A10645
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/29/2026 10:23 AM" [ref=e170]: 04/29/2026 10:23 AM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N33061A75828 Status Completed Date Created 04/29/2026 10:19 AM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N33061A75828" [ref=e180]: Derived_Score_AutoFilter_Template_N33061A75828
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/29/2026 10:19 AM" [ref=e184]: 04/29/2026 10:19 AM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N47029A50679 Status Completed Date Created 04/29/2026 10:14 AM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N47029A50679" [ref=e194]: Derived_Score_AutoFilter_Template_N47029A50679
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/29/2026 10:14 AM" [ref=e198]: 04/29/2026 10:14 AM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N60963A16713 Status Completed Date Created 04/29/2026 10:07 AM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N60963A16713" [ref=e208]: Derived_Score_AutoFilter_Template_N60963A16713
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/29/2026 10:07 AM" [ref=e212]: 04/29/2026 10:07 AM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N34855A91858 Status Completed Date Created 04/29/2026 07:06 AM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N34855A91858" [ref=e222]: Derived_Score_AutoFilter_Template_N34855A91858
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/29/2026 07:06 AM" [ref=e226]: 04/29/2026 07:06 AM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N73700A14852 Status Completed Date Created 04/29/2026 07:01 AM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N73700A14852" [ref=e236]: Derived_Score_AutoFilter_Template_N73700A14852
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/29/2026 07:01 AM" [ref=e240]: 04/29/2026 07:01 AM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N17750A75402 Status Completed Date Created 04/27/2026 11:42 AM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N17750A75402" [ref=e250]: Derived_Score_AutoFilter_Template_N17750A75402
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/27/2026 11:42 AM" [ref=e254]: 04/27/2026 11:42 AM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N81365A65461 Status Completed Date Created 04/27/2026 11:36 AM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N81365A65461" [ref=e264]: Derived_Score_AutoFilter_Template_N81365A65461
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/27/2026 11:36 AM" [ref=e268]: 04/27/2026 11:36 AM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N42170A79956 Status Completed Date Created 04/27/2026 11:30 AM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N42170A79956" [ref=e278]: Derived_Score_AutoFilter_Template_N42170A79956
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/27/2026 11:30 AM" [ref=e282]: 04/27/2026 11:30 AM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N44579A92423 Status Completed Date Created 04/27/2026 11:20 AM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N44579A92423" [ref=e292]: Derived_Score_AutoFilter_Template_N44579A92423
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 04/27/2026 11:20 AM" [ref=e296]: 04/27/2026 11:20 AM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N27130A44756 Status Completed Date Created 04/24/2026 07:21 AM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N27130A44756" [ref=e306]: Derived_Score_AutoFilter_Template_N27130A44756
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 04/24/2026 07:21 AM" [ref=e310]: 04/24/2026 07:21 AM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N19831A330 Status Completed Date Created 04/24/2026 07:11 AM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N19831A330" [ref=e320]: Derived_Score_AutoFilter_Template_N19831A330
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 04/24/2026 07:11 AM" [ref=e324]: 04/24/2026 07:11 AM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N65912A48637 Status Completed Date Created 04/23/2026 01:31 PM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N65912A48637" [ref=e334]: Derived_Score_AutoFilter_Template_N65912A48637
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 04/23/2026 01:31 PM" [ref=e338]: 04/23/2026 01:31 PM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N76632A443 Status Completed Date Created 04/23/2026 01:16 PM Download/Print Delete View Data Export Format" [ref=e346]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N76632A443" [ref=e348]: Derived_Score_AutoFilter_Template_N76632A443
                    - gridcell "Status Completed" [ref=e350]: Completed
                    - gridcell "Date Created 04/23/2026 01:16 PM" [ref=e352]: 04/23/2026 01:16 PM
                    - generic [ref=e353]:
                      - gridcell "Download/Print" [ref=e355] [cursor=pointer]
                      - gridcell "Delete" [ref=e357] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e358] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N46380A5872 Status Completed Date Created 03/31/2026 01:28 PM Download/Print Delete View Data Export Format" [ref=e360]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N46380A5872" [ref=e362]: Derived_Score_AutoFilter_Template_N46380A5872
                    - gridcell "Status Completed" [ref=e364]: Completed
                    - gridcell "Date Created 03/31/2026 01:28 PM" [ref=e366]: 03/31/2026 01:28 PM
                    - generic [ref=e367]:
                      - gridcell "Download/Print" [ref=e369] [cursor=pointer]
                      - gridcell "Delete" [ref=e371] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e372] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N51081A36437 Status Completed Date Created 03/31/2026 01:24 PM Download/Print Delete View Data Export Format" [ref=e374]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N51081A36437" [ref=e376]: Derived_Score_AutoFilter_Template_N51081A36437
                    - gridcell "Status Completed" [ref=e378]: Completed
                    - gridcell "Date Created 03/31/2026 01:24 PM" [ref=e380]: 03/31/2026 01:24 PM
                    - generic [ref=e381]:
                      - gridcell "Download/Print" [ref=e383] [cursor=pointer]
                      - gridcell "Delete" [ref=e385] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e386] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N31573A94827 Status Completed Date Created 03/31/2026 01:20 PM Download/Print Delete View Data Export Format" [ref=e388]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N31573A94827" [ref=e390]: Derived_Score_AutoFilter_Template_N31573A94827
                    - gridcell "Status Completed" [ref=e392]: Completed
                    - gridcell "Date Created 03/31/2026 01:20 PM" [ref=e394]: 03/31/2026 01:20 PM
                    - generic [ref=e395]:
                      - gridcell "Download/Print" [ref=e397] [cursor=pointer]
                      - gridcell "Delete" [ref=e399] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e400] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N67905A90696 Status Completed Date Created 03/31/2026 01:14 PM Download/Print Delete View Data Export Format" [ref=e402]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N67905A90696" [ref=e404]: Derived_Score_AutoFilter_Template_N67905A90696
                    - gridcell "Status Completed" [ref=e406]: Completed
                    - gridcell "Date Created 03/31/2026 01:14 PM" [ref=e408]: 03/31/2026 01:14 PM
                    - generic [ref=e409]:
                      - gridcell "Download/Print" [ref=e411] [cursor=pointer]
                      - gridcell "Delete" [ref=e413] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e414] [cursor=pointer]
      - contentinfo [ref=e416]:
        - generic [ref=e417]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e418] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e419]
        - generic [ref=e420]:
          - link "Riverside Insights Facebook" [ref=e421] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e422]
          - link "Riverside Insights Twitter" [ref=e423] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e424]
          - link "Riverside Insights LinkedIn" [ref=e425] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e426]
          - link "Riverside Insights Instagram" [ref=e427] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e428]
        - generic [ref=e429]:
          - button "Leave Feedback" [ref=e430] [cursor=pointer]
          - generic [ref=e431]: "|"
          - link "Terms of Use" [ref=e432] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e433]: "|"
          - link "Privacy Policy" [ref=e434] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e435]: Footer region end
```

# Test source

```ts
  3484 |       if (
  3485 |         (await this.plainNextButtonOrEndButton.first().textContent()) ===
  3486 |         "End Test"
  3487 |       ) {
  3488 |         await this.plainNextButtonOrEndButton.first().click();
  3489 |         await this.page.waitForTimeout(1000);
  3490 |         break;
  3491 |       }
  3492 |     }
  3493 | 
  3494 |     // fetch AE and GE from endtest popup
  3495 |     const [AE, GE] = await this.get_AE_GE_FromEndTestPopup();
  3496 |     this.scoreMap.set("Breaker", "@");
  3497 |     this.scoreMap.set("AE", AE);
  3498 |     this.scoreMap.set("GE", GE);
  3499 |     console.log(this.scoreMap);
  3500 |     return this.scoreMap;
  3501 |   }
  3502 | 
  3503 |   async playAudio() {
  3504 |     if (await this.audioPlayer.isVisible()) {
  3505 |       await this.audioPlayButton.click();
  3506 |       await this.plainNextButtonOrEndButton.waitFor({
  3507 |         state: "visible",
  3508 |         timeout: 50000,
  3509 |       });
  3510 |       await this.page.waitForTimeout(3000);
  3511 |     }
  3512 |   }
  3513 | 
  3514 |   async jumpToNextTest(testName: string) {
  3515 |     let nextTestName: string = await this.nextTestSelectValue.textContent();
  3516 |     if (nextTestName.match(testName)) {
  3517 |       await this.beginNextTestButton.click();
  3518 |     } else {
  3519 |       await this.page.locator(".select-box").click();
  3520 |       await this.page.locator(`//span[text()='${testName}']`).click();
  3521 |       nextTestName = await this.nextTestSelectValue.textContent();
  3522 |       expect(nextTestName).toEqual(testName);
  3523 |       await this.beginNextTestButton.click();
  3524 |       // await this.letsBeginButton.click();
  3525 |     }
  3526 |   }
  3527 | 
  3528 |   // MOVE THE BELOW CODE TO DIFF sheet
  3529 | 
  3530 |   async getExcelFileDate(normTableFilePath) {
  3531 |     const excelFileData = await this.utils.getExcelSheetData(normTableFilePath);
  3532 |     return excelFileData;
  3533 |   }
  3534 | 
  3535 |   async validateTheDownloadedDerivedScoresReportWithRunTimeData(
  3536 |     txtFileContent: {
  3537 |       [key: string]: {
  3538 |         [key: string]: string;
  3539 |       };
  3540 |     },
  3541 |     examineeID: string,
  3542 |     taskStem: string,
  3543 |     testStemForm: string,
  3544 |     examineeDOB: string,
  3545 |     examineeGrade: string,
  3546 |     scores,
  3547 |     ExcelFileData,
  3548 |     normBasis: string,
  3549 |     testsStemForm?: string[],
  3550 |   ) {
  3551 |     console.log(
  3552 |       `\n ==== Assertion ${testStemForm} for NormBasis as ${normBasis} ==== \n`,
  3553 |     );
  3554 |     const taskStems = await this.utils.getColumnOrValueFromExcel("TaskStem");
  3555 |     const subTests: string[] = ["OVSYN", "OVANT", "GIWHER", "GIWHAT"];
  3556 | 
  3557 |     // console.log (`\n TAsk stems from sel test table = `,taskStems);
  3558 | 
  3559 |     let Wabil: number;
  3560 |     let Semw: number;
  3561 | 
  3562 |     const testsAndSubtests = await this.utils.getTestsAndSubtestsFromSheet();
  3563 | 
  3564 |     if (
  3565 |       testsAndSubtests.includes(taskStem) &&
  3566 |       taskStem !== "ORLVOC" &&
  3567 |       taskStem !== "GENINF"
  3568 |     ) {
  3569 |       ({ Wabil, Semw } = await setWabilSemw(scores, testStemForm));
  3570 |     }
  3571 | 
  3572 |     const excelFileData = ExcelFileData;
  3573 | 
  3574 |     // const excelFileData = await this.utils.getExcelSheetData(normTableFilePath);
  3575 | 
  3576 |     const txtData = txtFileContent[testStemForm];
  3577 |     if (
  3578 |       !txtData ||
  3579 |       txtData.Examinee_ID == "" ||
  3580 |       txtData.Examinee_ID == undefined ||
  3581 |       txtData.Examinee_ID == null ||
  3582 |       txtData.Examinee_ID.includes("No examinees meet the criteria specified.")
  3583 |     ) {
> 3584 |       throw new Error(
       |             ^ Error: The Examinee ID assertion failed, probable cause the Report could be empty.
  3585 |         "The Examinee ID assertion failed, probable cause the Report could be empty.",
  3586 |       );
  3587 |     }
  3588 | 
  3589 |     softAssertPrint(examineeID, txtData.Examinee_ID, "Examinee ID");
  3590 |     softAssertPrint(taskStem, txtData.TaskStem, "Task Stem");
  3591 |     softAssertPrint(testStemForm, txtData.TaskStemForm, "TaskStemForm");
  3592 | 
  3593 |     const compoundsAndClusters: string[] =
  3594 |       await this.utils.getAllCompoundsAndClustersFromSelTestTable();
  3595 | 
  3596 |     if (compoundsAndClusters.includes(taskStem)) {
  3597 |       const reportData = txtData.ContribTaskStems.split(";").map(
  3598 |         (i) => i.split(".")[0],
  3599 |       );
  3600 |       const ContribTaskStemFromSheet =
  3601 |         await this.utils.getContribTaskStemsForCluster(taskStem);
  3602 | 
  3603 |       softAssertArray(ContribTaskStemFromSheet, reportData, "contribTaskStems");
  3604 |     } else {
  3605 |       this.contribTaskStems.push(testStemForm);
  3606 |     }
  3607 | 
  3608 |     const EDOT = await this.utils.getTheDOBYearsBack(0, "new Yark");
  3609 | 
  3610 |     try {
  3611 |       softAssertPrint(EDOT, txtData.EDOT, "EDOT");
  3612 |     } catch (error) {
  3613 |       console.info(`\nSeems like there is a date mismatch  ${error}\n`);
  3614 |     }
  3615 | 
  3616 |     try {
  3617 |       softAssertPrint(
  3618 |         await this.utils.getTheDOBYearsBack(0, "new Yark"),
  3619 |         txtData.LDOT,
  3620 |         "LDOT",
  3621 |       );
  3622 |     } catch (error) {
  3623 |       console.info(`\nSeems like there is a date mismatch  ${error}\n`);
  3624 |     }
  3625 | 
  3626 |     softAssertPrint(
  3627 |       format(new Date(examineeDOB), "yyyy-MM-dd"),
  3628 |       txtData.DOB,
  3629 |       "DOB",
  3630 |     );
  3631 | 
  3632 |     const { camos, getCHRON } = getCAMOS(examineeDOB, EDOT);
  3633 | 
  3634 |     softAssertPrint(camos, Number(txtData.CAMOS), "CAMOS");
  3635 | 
  3636 |     const gradePlacement: string = getGradePlacement(examineeGrade, EDOT);
  3637 | 
  3638 |     softAssertPrint(gradePlacement, txtData.GradePlacement, "GradePlacement");
  3639 | 
  3640 |     let comp_clus_W_abil: number;
  3641 | 
  3642 |     if (compoundsAndClusters.includes(taskStem)) {
  3643 |       const testsListForCluster: string[] = (
  3644 |         await this.utils.getContribTaskStemsForCluster(taskStem)
  3645 |       ).map((name) => `${name}.W5PA`);
  3646 | 
  3647 |       Wabil = Number(await getCompositeW_abil(testsListForCluster, scores));
  3648 |       Semw = Number(await getCompositeSEMW(testsListForCluster, scores));
  3649 |       scores[`${taskStem}.W5PA`] = {
  3650 |         wScores: "",
  3651 |         Wabil: Wabil,
  3652 |         Semw: Semw,
  3653 |       };
  3654 | 
  3655 |       softAssertPrint(Wabil, Number(txtData.W_Abil), "Composite W_Abil");
  3656 |       softAssertPrint(Semw, Number(txtData.SEMW), "Composite SEMW");
  3657 |     } else {
  3658 |       softAssertPrint(Wabil, Number(txtData.W_Abil), "W_Abil");
  3659 |       softAssertPrint(Semw, Number(txtData.SEMW), "SEMW");
  3660 |     }
  3661 | 
  3662 |     // New;y added 6/7 Columns
  3663 |     if (!subTests.includes(taskStem)) {
  3664 |       softAssertPrint(
  3665 |         calculateWabilConfBand("W68_Low", Wabil, Semw),
  3666 |         Number(txtData.W68_Low),
  3667 |         "W68_Low",
  3668 |       );
  3669 | 
  3670 |       softAssertPrint(
  3671 |         calculateWabilConfBand("W68_High", Wabil, Semw),
  3672 |         Number(txtData.W68_High),
  3673 |         "W68_High",
  3674 |       );
  3675 | 
  3676 |       softAssertPrint(
  3677 |         calculateWabilConfBand("W90_Low", Wabil, Semw),
  3678 |         Number(txtData.W90_Low),
  3679 |         "W90_Low",
  3680 |       );
  3681 | 
  3682 |       softAssertPrint(
  3683 |         calculateWabilConfBand("W90_High", Wabil, Semw),
  3684 |         Number(txtData.W90_High),
```