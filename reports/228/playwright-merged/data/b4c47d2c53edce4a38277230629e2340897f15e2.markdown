# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/GV_cluster_pub.spec.ts >>  GV cluster Derived Export Automation  >> For SPAREL - Age - Attain Quick Basal Ceiling scenario,BLKROT - Age - All correct scenario Complete The GV cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/GV_cluster_pub.spec.ts:26:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'loading-inner\']').first() to be hidden
    243 × locator resolved to visible <div class="loading-inner">…</div>

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
              - heading "Hello S06PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S06PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N40386A860 Status Completed Date Created 05/01/2026 10:02 AM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N40386A860" [ref=e68]: Derived_Score_AutoFilter_Template_N40386A860
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 05/01/2026 10:02 AM" [ref=e72]: 05/01/2026 10:02 AM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N46394A71524 Status Completed Date Created 05/01/2026 09:56 AM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N46394A71524" [ref=e82]: Derived_Score_AutoFilter_Template_N46394A71524
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 05/01/2026 09:56 AM" [ref=e86]: 05/01/2026 09:56 AM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N59851A41592 Status Completed Date Created 05/01/2026 09:50 AM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N59851A41592" [ref=e96]: Derived_Score_AutoFilter_Template_N59851A41592
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 05/01/2026 09:50 AM" [ref=e100]: 05/01/2026 09:50 AM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N6722A80325 Status Completed Date Created 05/01/2026 09:41 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N6722A80325" [ref=e110]: Derived_Score_AutoFilter_Template_N6722A80325
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 05/01/2026 09:41 AM" [ref=e114]: 05/01/2026 09:41 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N46270A58934 Status Completed Date Created 04/30/2026 02:14 AM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N46270A58934" [ref=e124]: Test_DataExport_AutoFilter_Template_N46270A58934
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/30/2026 02:14 AM" [ref=e128]: 04/30/2026 02:14 AM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N64618A41411 Status Completed Date Created 04/30/2026 01:37 AM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N64618A41411" [ref=e138]: Test_DataExport_AutoFilter_Template_N64618A41411
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/30/2026 01:37 AM" [ref=e142]: 04/30/2026 01:37 AM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N51474A29127 Status Completed Date Created 04/30/2026 12:41 AM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N51474A29127" [ref=e152]: Test_DataExport_AutoFilter_Template_N51474A29127
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/30/2026 12:41 AM" [ref=e156]: 04/30/2026 12:41 AM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N74650A53119 Status Completed Date Created 04/29/2026 09:58 PM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N74650A53119" [ref=e166]: Derived_Score_AutoFilter_Template_N74650A53119
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/29/2026 09:58 PM" [ref=e170]: 04/29/2026 09:58 PM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N34844A3375 Status Completed Date Created 04/29/2026 09:51 PM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N34844A3375" [ref=e180]: Derived_Score_AutoFilter_Template_N34844A3375
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/29/2026 09:51 PM" [ref=e184]: 04/29/2026 09:51 PM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N80087A69061 Status Completed Date Created 04/29/2026 09:44 PM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N80087A69061" [ref=e194]: Derived_Score_AutoFilter_Template_N80087A69061
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/29/2026 09:44 PM" [ref=e198]: 04/29/2026 09:44 PM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N72418A56461 Status Completed Date Created 04/29/2026 09:38 PM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N72418A56461" [ref=e208]: Derived_Score_AutoFilter_Template_N72418A56461
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/29/2026 09:38 PM" [ref=e212]: 04/29/2026 09:38 PM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N74630A98149 Status Completed Date Created 04/29/2026 09:33 PM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N74630A98149" [ref=e222]: Derived_Score_AutoFilter_Template_N74630A98149
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/29/2026 09:33 PM" [ref=e226]: 04/29/2026 09:33 PM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N59978A83348 Status Completed Date Created 04/29/2026 09:23 PM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N59978A83348" [ref=e236]: Derived_Score_AutoFilter_Template_N59978A83348
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/29/2026 09:23 PM" [ref=e240]: 04/29/2026 09:23 PM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N43420A68594 Status Completed Date Created 04/29/2026 01:31 PM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N43420A68594" [ref=e250]: Derived_Score_AutoFilter_Template_N43420A68594
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/29/2026 01:31 PM" [ref=e254]: 04/29/2026 01:31 PM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N63868A43746 Status Completed Date Created 04/29/2026 01:24 PM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N63868A43746" [ref=e264]: Derived_Score_AutoFilter_Template_N63868A43746
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/29/2026 01:24 PM" [ref=e268]: 04/29/2026 01:24 PM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N50063A75593 Status Completed Date Created 04/29/2026 01:17 PM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N50063A75593" [ref=e278]: Derived_Score_AutoFilter_Template_N50063A75593
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/29/2026 01:17 PM" [ref=e282]: 04/29/2026 01:17 PM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N20869A91070 Status Completed Date Created 04/29/2026 01:11 PM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N20869A91070" [ref=e292]: Derived_Score_AutoFilter_Template_N20869A91070
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 04/29/2026 01:11 PM" [ref=e296]: 04/29/2026 01:11 PM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N99417A97896 Status Completed Date Created 04/29/2026 01:03 PM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N99417A97896" [ref=e306]: Derived_Score_AutoFilter_Template_N99417A97896
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 04/29/2026 01:03 PM" [ref=e310]: 04/29/2026 01:03 PM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N83465A34606 Status Completed Date Created 04/29/2026 12:54 PM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N83465A34606" [ref=e320]: Derived_Score_AutoFilter_Template_N83465A34606
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 04/29/2026 12:54 PM" [ref=e324]: 04/29/2026 12:54 PM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N74671A17868 Status Completed Date Created 04/29/2026 11:08 AM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N74671A17868" [ref=e334]: Derived_Score_AutoFilter_Template_N74671A17868
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 04/29/2026 11:08 AM" [ref=e338]: 04/29/2026 11:08 AM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N78404A97518 Status Completed Date Created 04/29/2026 10:55 AM Download/Print Delete View Data Export Format" [ref=e346]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N78404A97518" [ref=e348]: Derived_Score_AutoFilter_Template_N78404A97518
                    - gridcell "Status Completed" [ref=e350]: Completed
                    - gridcell "Date Created 04/29/2026 10:55 AM" [ref=e352]: 04/29/2026 10:55 AM
                    - generic [ref=e353]:
                      - gridcell "Download/Print" [ref=e355] [cursor=pointer]
                      - gridcell "Delete" [ref=e357] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e358] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N88891A30383 Status Completed Date Created 04/29/2026 10:43 AM Download/Print Delete View Data Export Format" [ref=e360]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N88891A30383" [ref=e362]: Derived_Score_AutoFilter_Template_N88891A30383
                    - gridcell "Status Completed" [ref=e364]: Completed
                    - gridcell "Date Created 04/29/2026 10:43 AM" [ref=e366]: 04/29/2026 10:43 AM
                    - generic [ref=e367]:
                      - gridcell "Download/Print" [ref=e369] [cursor=pointer]
                      - gridcell "Delete" [ref=e371] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e372] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N41740A12476 Status Completed Date Created 04/29/2026 10:37 AM Download/Print Delete View Data Export Format" [ref=e374]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N41740A12476" [ref=e376]: Derived_Score_AutoFilter_Template_N41740A12476
                    - gridcell "Status Completed" [ref=e378]: Completed
                    - gridcell "Date Created 04/29/2026 10:37 AM" [ref=e380]: 04/29/2026 10:37 AM
                    - generic [ref=e381]:
                      - gridcell "Download/Print" [ref=e383] [cursor=pointer]
                      - gridcell "Delete" [ref=e385] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e386] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N79505A65188 Status Completed Date Created 04/29/2026 10:31 AM Download/Print Delete View Data Export Format" [ref=e388]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N79505A65188" [ref=e390]: Derived_Score_AutoFilter_Template_N79505A65188
                    - gridcell "Status Completed" [ref=e392]: Completed
                    - gridcell "Date Created 04/29/2026 10:31 AM" [ref=e394]: 04/29/2026 10:31 AM
                    - generic [ref=e395]:
                      - gridcell "Download/Print" [ref=e397] [cursor=pointer]
                      - gridcell "Delete" [ref=e399] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e400] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N54970A37098 Status Completed Date Created 04/29/2026 10:21 AM Download/Print Delete View Data Export Format" [ref=e402]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N54970A37098" [ref=e404]: Derived_Score_AutoFilter_Template_N54970A37098
                    - gridcell "Status Completed" [ref=e406]: Completed
                    - gridcell "Date Created 04/29/2026 10:21 AM" [ref=e408]: 04/29/2026 10:21 AM
                    - generic [ref=e409]:
                      - gridcell "Download/Print" [ref=e411] [cursor=pointer]
                      - gridcell "Delete" [ref=e413] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e414] [cursor=pointer]
              - generic [ref=e416]:
                - button "<<" [disabled] [ref=e417]
                - button "<" [disabled] [ref=e418]
                - button "1" [ref=e419] [cursor=pointer]
                - button "2" [ref=e420] [cursor=pointer]
                - button ">" [ref=e421] [cursor=pointer]
                - button ">>" [ref=e422] [cursor=pointer]
      - contentinfo [ref=e423]:
        - generic [ref=e424]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e425] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e426]
        - generic [ref=e427]:
          - link "Riverside Insights Facebook" [ref=e428] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e429]
          - link "Riverside Insights Twitter" [ref=e430] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e431]
          - link "Riverside Insights LinkedIn" [ref=e432] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e433]
          - link "Riverside Insights Instagram" [ref=e434] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e435]
        - generic [ref=e436]:
          - button "Leave Feedback" [ref=e437] [cursor=pointer]
          - generic [ref=e438]: "|"
          - link "Terms of Use" [ref=e439] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e440]: "|"
          - link "Privacy Policy" [ref=e441] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e442]: Footer region end
  - region "Chat Widget" [ref=e443]:
    - iframe [ref=e444]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e445]:
      - img [ref=e446]
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