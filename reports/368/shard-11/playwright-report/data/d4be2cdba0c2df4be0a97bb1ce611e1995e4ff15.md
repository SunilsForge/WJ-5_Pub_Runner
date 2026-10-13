# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/VOCAB_cluster_pub.spec.ts >>  VOCAB cluster Derived Export Automation  >> For PICVOC - Age - Attain Quick Basal Ceiling scenario,ACDVOC - Age - All correct scenario Complete The VOCAB cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/VOCAB_cluster_pub.spec.ts:26:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.overview-header h2')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.overview-header h2')

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
              - heading "Hello 01PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "01PwAut25AH ln" [ref=e10] [cursor=pointer]
              - navigation [ref=e13]:
                - button "Contact Us" [ref=e14] [cursor=pointer]
                - button "| WJ V Settings" [ref=e15] [cursor=pointer]
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
          - generic [ref=e34]:
            - switch "Offline Mode" [ref=e35] [cursor=pointer]: "OFF"
            - generic [ref=e36]: Offline Mode
        - main [ref=e37]:
          - generic [ref=e38]:
            - heading "REPORT CENTER" [level=1] [ref=e39]
            - navigation [ref=e40]:
              - tablist [ref=e41]:
                - tab "Report Library" [selected] [ref=e42] [cursor=pointer]
                - button "Zoom In" [ref=e43] [cursor=pointer]:
                  - img "Zoom Page In Icon" [ref=e44]
            - generic "Report Library" [ref=e53]:
              - grid [ref=e54]:
                - generic [ref=e55]:
                  - generic "Report Name" [ref=e56]:
                    - generic [ref=e58]: Report Name
                  - generic "Status" [ref=e59]:
                    - generic [ref=e61]: Status
                  - generic "Date Created" [ref=e62]:
                    - generic [ref=e64]: Date Created
                  - generic "Actions" [ref=e65]:
                    - generic [ref=e67]: Actions
                - rowgroup [ref=e68]:
                  - row "Report Name Derived_Score_AutoFilter_Template_N55335A75985 Status Completed Date Created 10/12/2026 10:39 PM Download/Print Delete View Data Export Format" [ref=e69]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N55335A75985" [ref=e71]: Derived_Score_AutoFilter_Template_N55335A75985
                    - gridcell "Status Completed" [ref=e73]: Completed
                    - gridcell "Date Created 10/12/2026 10:39 PM" [ref=e75]: 10/12/2026 10:39 PM
                    - generic [ref=e76]:
                      - gridcell "Download/Print" [active] [ref=e78] [cursor=pointer]
                      - gridcell "Delete" [ref=e80] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e81] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N96047A38352 Status Completed Date Created 10/12/2026 10:31 PM Download/Print Delete View Data Export Format" [ref=e83]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N96047A38352" [ref=e85]: Derived_Score_AutoFilter_Template_N96047A38352
                    - gridcell "Status Completed" [ref=e87]: Completed
                    - gridcell "Date Created 10/12/2026 10:31 PM" [ref=e89]: 10/12/2026 10:31 PM
                    - generic [ref=e90]:
                      - gridcell "Download/Print" [ref=e92] [cursor=pointer]
                      - gridcell "Delete" [ref=e94] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e95] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N81965A22879 Status Completed Date Created 10/12/2026 10:22 PM Download/Print Delete View Data Export Format" [ref=e97]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N81965A22879" [ref=e99]: Derived_Score_AutoFilter_Template_N81965A22879
                    - gridcell "Status Completed" [ref=e101]: Completed
                    - gridcell "Date Created 10/12/2026 10:22 PM" [ref=e103]: 10/12/2026 10:22 PM
                    - generic [ref=e104]:
                      - gridcell "Download/Print" [ref=e106] [cursor=pointer]
                      - gridcell "Delete" [ref=e108] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e109] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N33317A63361 Status Completed Date Created 10/12/2026 10:14 PM Download/Print Delete View Data Export Format" [ref=e111]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N33317A63361" [ref=e113]: Derived_Score_AutoFilter_Template_N33317A63361
                    - gridcell "Status Completed" [ref=e115]: Completed
                    - gridcell "Date Created 10/12/2026 10:14 PM" [ref=e117]: 10/12/2026 10:14 PM
                    - generic [ref=e118]:
                      - gridcell "Download/Print" [ref=e120] [cursor=pointer]
                      - gridcell "Delete" [ref=e122] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e123] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N17657A51149 Status Completed Date Created 10/01/2026 12:28 AM Download/Print Delete View Data Export Format" [ref=e125]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N17657A51149" [ref=e127]: Derived_Score_AutoFilter_Template_N17657A51149
                    - gridcell "Status Completed" [ref=e129]: Completed
                    - gridcell "Date Created 10/01/2026 12:28 AM" [ref=e131]: 10/01/2026 12:28 AM
                    - generic [ref=e132]:
                      - gridcell "Download/Print" [ref=e134] [cursor=pointer]
                      - gridcell "Delete" [ref=e136] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e137] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N8800A38404 Status Completed Date Created 10/01/2026 12:23 AM Download/Print Delete View Data Export Format" [ref=e139]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N8800A38404" [ref=e141]: Derived_Score_AutoFilter_Template_N8800A38404
                    - gridcell "Status Completed" [ref=e143]: Completed
                    - gridcell "Date Created 10/01/2026 12:23 AM" [ref=e145]: 10/01/2026 12:23 AM
                    - generic [ref=e146]:
                      - gridcell "Download/Print" [ref=e148] [cursor=pointer]
                      - gridcell "Delete" [ref=e150] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e151] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N35924A77579 Status Completed Date Created 10/01/2026 12:18 AM Download/Print Delete View Data Export Format" [ref=e153]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N35924A77579" [ref=e155]: Derived_Score_AutoFilter_Template_N35924A77579
                    - gridcell "Status Completed" [ref=e157]: Completed
                    - gridcell "Date Created 10/01/2026 12:18 AM" [ref=e159]: 10/01/2026 12:18 AM
                    - generic [ref=e160]:
                      - gridcell "Download/Print" [ref=e162] [cursor=pointer]
                      - gridcell "Delete" [ref=e164] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e165] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N32972A72191 Status Completed Date Created 10/01/2026 12:10 AM Download/Print Delete View Data Export Format" [ref=e167]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N32972A72191" [ref=e169]: Derived_Score_AutoFilter_Template_N32972A72191
                    - gridcell "Status Completed" [ref=e171]: Completed
                    - gridcell "Date Created 10/01/2026 12:10 AM" [ref=e173]: 10/01/2026 12:10 AM
                    - generic [ref=e174]:
                      - gridcell "Download/Print" [ref=e176] [cursor=pointer]
                      - gridcell "Delete" [ref=e178] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e179] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N24931A29496 Status Completed Date Created 10/01/2026 12:01 AM Download/Print Delete View Data Export Format" [ref=e181]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N24931A29496" [ref=e183]: Derived_Score_AutoFilter_Template_N24931A29496
                    - gridcell "Status Completed" [ref=e185]: Completed
                    - gridcell "Date Created 10/01/2026 12:01 AM" [ref=e187]: 10/01/2026 12:01 AM
                    - generic [ref=e188]:
                      - gridcell "Download/Print" [ref=e190] [cursor=pointer]
                      - gridcell "Delete" [ref=e192] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e193] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N63746A37574 Status Completed Date Created 09/30/2026 11:53 PM Download/Print Delete View Data Export Format" [ref=e195]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N63746A37574" [ref=e197]: Derived_Score_AutoFilter_Template_N63746A37574
                    - gridcell "Status Completed" [ref=e199]: Completed
                    - gridcell "Date Created 09/30/2026 11:53 PM" [ref=e201]: 09/30/2026 11:53 PM
                    - generic [ref=e202]:
                      - gridcell "Download/Print" [ref=e204] [cursor=pointer]
                      - gridcell "Delete" [ref=e206] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e207] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N38274A71735 Status Completed Date Created 09/30/2026 11:45 PM Download/Print Delete View Data Export Format" [ref=e209]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N38274A71735" [ref=e211]: Derived_Score_AutoFilter_Template_N38274A71735
                    - gridcell "Status Completed" [ref=e213]: Completed
                    - gridcell "Date Created 09/30/2026 11:45 PM" [ref=e215]: 09/30/2026 11:45 PM
                    - generic [ref=e216]:
                      - gridcell "Download/Print" [ref=e218] [cursor=pointer]
                      - gridcell "Delete" [ref=e220] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e221] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N75858A23378 Status Completed Date Created 09/28/2026 08:31 AM Download/Print Delete View Data Export Format" [ref=e223]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N75858A23378" [ref=e225]: Test_DataExport_AutoFilter_Template_N75858A23378
                    - gridcell "Status Completed" [ref=e227]: Completed
                    - gridcell "Date Created 09/28/2026 08:31 AM" [ref=e229]: 09/28/2026 08:31 AM
                    - generic [ref=e230]:
                      - gridcell "Download/Print" [ref=e232] [cursor=pointer]
                      - gridcell "Delete" [ref=e234] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e235] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N88674A97004 Status Completed Date Created 09/28/2026 06:34 AM Download/Print Delete View Data Export Format" [ref=e237]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N88674A97004" [ref=e239]: Test_DataExport_AutoFilter_Template_N88674A97004
                    - gridcell "Status Completed" [ref=e241]: Completed
                    - gridcell "Date Created 09/28/2026 06:34 AM" [ref=e243]: 09/28/2026 06:34 AM
                    - generic [ref=e244]:
                      - gridcell "Download/Print" [ref=e246] [cursor=pointer]
                      - gridcell "Delete" [ref=e248] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e249] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N88674A97004 Status Completed Date Created 09/28/2026 06:30 AM Download/Print Delete View Data Export Format" [ref=e251]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N88674A97004" [ref=e253]: Test_DataExport_AutoFilter_Template_N88674A97004
                    - gridcell "Status Completed" [ref=e255]: Completed
                    - gridcell "Date Created 09/28/2026 06:30 AM" [ref=e257]: 09/28/2026 06:30 AM
                    - generic [ref=e258]:
                      - gridcell "Download/Print" [ref=e260] [cursor=pointer]
                      - gridcell "Delete" [ref=e262] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e263] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N88674A97004 Status Completed Date Created 09/28/2026 06:27 AM Download/Print Delete View Data Export Format" [ref=e265]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N88674A97004" [ref=e267]: Test_DataExport_AutoFilter_Template_N88674A97004
                    - gridcell "Status Completed" [ref=e269]: Completed
                    - gridcell "Date Created 09/28/2026 06:27 AM" [ref=e271]: 09/28/2026 06:27 AM
                    - generic [ref=e272]:
                      - gridcell "Download/Print" [ref=e274] [cursor=pointer]
                      - gridcell "Delete" [ref=e276] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e277] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N3288A30849 Status Completed Date Created 09/28/2026 06:18 AM Download/Print Delete View Data Export Format" [ref=e279]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N3288A30849" [ref=e281]: Test_DataExport_AutoFilter_Template_N3288A30849
                    - gridcell "Status Completed" [ref=e283]: Completed
                    - gridcell "Date Created 09/28/2026 06:18 AM" [ref=e285]: 09/28/2026 06:18 AM
                    - generic [ref=e286]:
                      - gridcell "Download/Print" [ref=e288] [cursor=pointer]
                      - gridcell "Delete" [ref=e290] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e291] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N3288A30849 Status Completed Date Created 09/28/2026 06:15 AM Download/Print Delete View Data Export Format" [ref=e293]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N3288A30849" [ref=e295]: Test_DataExport_AutoFilter_Template_N3288A30849
                    - gridcell "Status Completed" [ref=e297]: Completed
                    - gridcell "Date Created 09/28/2026 06:15 AM" [ref=e299]: 09/28/2026 06:15 AM
                    - generic [ref=e300]:
                      - gridcell "Download/Print" [ref=e302] [cursor=pointer]
                      - gridcell "Delete" [ref=e304] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e305] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N3288A30849 Status Completed Date Created 09/28/2026 06:12 AM Download/Print Delete View Data Export Format" [ref=e307]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N3288A30849" [ref=e309]: Test_DataExport_AutoFilter_Template_N3288A30849
                    - gridcell "Status Completed" [ref=e311]: Completed
                    - gridcell "Date Created 09/28/2026 06:12 AM" [ref=e313]: 09/28/2026 06:12 AM
                    - generic [ref=e314]:
                      - gridcell "Download/Print" [ref=e316] [cursor=pointer]
                      - gridcell "Delete" [ref=e318] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e319] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N35412A17064 Status Completed Date Created 09/17/2026 12:39 AM Download/Print Delete View Data Export Format" [ref=e321]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N35412A17064" [ref=e323]: Derived_Score_AutoFilter_Template_N35412A17064
                    - gridcell "Status Completed" [ref=e325]: Completed
                    - gridcell "Date Created 09/17/2026 12:39 AM" [ref=e327]: 09/17/2026 12:39 AM
                    - generic [ref=e328]:
                      - gridcell "Download/Print" [ref=e330] [cursor=pointer]
                      - gridcell "Delete" [ref=e332] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e333] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N13485A20956 Status Completed Date Created 09/17/2026 12:34 AM Download/Print Delete View Data Export Format" [ref=e335]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N13485A20956" [ref=e337]: Derived_Score_AutoFilter_Template_N13485A20956
                    - gridcell "Status Completed" [ref=e339]: Completed
                    - gridcell "Date Created 09/17/2026 12:34 AM" [ref=e341]: 09/17/2026 12:34 AM
                    - generic [ref=e342]:
                      - gridcell "Download/Print" [ref=e344] [cursor=pointer]
                      - gridcell "Delete" [ref=e346] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e347] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N26080A89581 Status Completed Date Created 09/17/2026 12:29 AM Download/Print Delete View Data Export Format" [ref=e349]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N26080A89581" [ref=e351]: Derived_Score_AutoFilter_Template_N26080A89581
                    - gridcell "Status Completed" [ref=e353]: Completed
                    - gridcell "Date Created 09/17/2026 12:29 AM" [ref=e355]: 09/17/2026 12:29 AM
                    - generic [ref=e356]:
                      - gridcell "Download/Print" [ref=e358] [cursor=pointer]
                      - gridcell "Delete" [ref=e360] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e361] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N45531A18865 Status Completed Date Created 09/17/2026 12:21 AM Download/Print Delete View Data Export Format" [ref=e363]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N45531A18865" [ref=e365]: Derived_Score_AutoFilter_Template_N45531A18865
                    - gridcell "Status Completed" [ref=e367]: Completed
                    - gridcell "Date Created 09/17/2026 12:21 AM" [ref=e369]: 09/17/2026 12:21 AM
                    - generic [ref=e370]:
                      - gridcell "Download/Print" [ref=e372] [cursor=pointer]
                      - gridcell "Delete" [ref=e374] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e375] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N97695A45171 Status Completed Date Created 09/17/2026 12:13 AM Download/Print Delete View Data Export Format" [ref=e377]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N97695A45171" [ref=e379]: Derived_Score_AutoFilter_Template_N97695A45171
                    - gridcell "Status Completed" [ref=e381]: Completed
                    - gridcell "Date Created 09/17/2026 12:13 AM" [ref=e383]: 09/17/2026 12:13 AM
                    - generic [ref=e384]:
                      - gridcell "Download/Print" [ref=e386] [cursor=pointer]
                      - gridcell "Delete" [ref=e388] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e389] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N68757A63705 Status Completed Date Created 09/17/2026 12:05 AM Download/Print Delete View Data Export Format" [ref=e391]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N68757A63705" [ref=e393]: Derived_Score_AutoFilter_Template_N68757A63705
                    - gridcell "Status Completed" [ref=e395]: Completed
                    - gridcell "Date Created 09/17/2026 12:05 AM" [ref=e397]: 09/17/2026 12:05 AM
                    - generic [ref=e398]:
                      - gridcell "Download/Print" [ref=e400] [cursor=pointer]
                      - gridcell "Delete" [ref=e402] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e403] [cursor=pointer]
      - contentinfo [ref=e405]:
        - generic [ref=e406]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e407] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e408]
        - generic [ref=e409]:
          - link "Riverside Insights Facebook" [ref=e410] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e411]
          - link "Riverside Insights Twitter" [ref=e412] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e413]
          - link "Riverside Insights LinkedIn" [ref=e414] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e415]
          - link "Riverside Insights Instagram" [ref=e416] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e417]
        - generic [ref=e418]:
          - button "Leave Feedback" [ref=e419] [cursor=pointer]
          - generic [ref=e420]: "|"
          - link "Terms of Use" [ref=e421] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e422]: "|"
          - link "Privacy Policy" [ref=e423] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e424]: Footer region end
```

# Test source

```ts
  175 | 
  176 |   async pickTheTestNeeded(
  177 |     testName: string,
  178 |     ssp: string,
  179 |     examinee: wj5ExamineePage,
  180 |   ) {
  181 |     RawValueLogger.log('pickTheTestNeeded: start', { testName });
  182 | 
  183 |     await this.page.bringToFront();
  184 |     await this.page.waitForTimeout(2000);
  185 | 
  186 |     if (
  187 |       (await this.administrationOverviewPageTestName.isVisible()) &&
  188 |       (await this.administrationOverviewPageTestName.textContent()).includes(testName)
  189 |     ) {
  190 |       RawValueLogger.log('test already visible on overview page', { testName });
  191 |       return;
  192 |     }
  193 | 
  194 |     const menuButton = this.mainNavigation;
  195 |     const testListButton = this.mainNavigationTests;
  196 |     const introText = this.page.locator('.intro-text');
  197 |     const testLocator = (name: string) => this.page.locator(`//div[@class='TestList_mcs_testName' and text()='${name}']`);
  198 | 
  199 |     RawValueLogger.log('attempt', { testName });
  200 | 
  201 |     try {
  202 |       await introText.waitFor({ state: 'visible', timeout: 5000 });
  203 |       RawValueLogger.log('intro text visible - opening menu');
  204 | 
  205 |       await menuButton.click();
  206 |       await this.page.waitForTimeout(500);
  207 | 
  208 |       await testListButton.click();
  209 |       await this.page.waitForTimeout(500);
  210 | 
  211 |       const activeTestName = this.page.locator("svg[aria-disabled='true']+div[class='TestList_mcs_testName']");
  212 |       if (await activeTestName.isVisible().catch(() => false) && (await activeTestName.textContent())?.trim() === testName) {
  213 |         RawValueLogger.log('test is already active - closing nav', { testName });
  214 |         await this.page.locator("button.close-btn[aria-label='Close navigation']").click();
  215 |         return;
  216 |       }
  217 | 
  218 |       const test = testLocator(testName);
  219 |       await test.waitFor({ state: 'visible', timeout: 3000 });
  220 |       RawValueLogger.log('test found - clicking', { testName });
  221 |       await test.click();
  222 |       RawValueLogger.log('test clicked successfully', { testName });
  223 |       return;
  224 |     } catch (err: any) {
  225 |       RawValueLogger.log('test not found or click failed', {
  226 |         testName,
  227 |         message: err?.message ?? err,
  228 |       });
  229 | 
  230 |       RawValueLogger.log('test not found - attempting to add test', { testName });
  231 |       try {
  232 |         await this.addTestButton.click();
  233 |         await this._addAndRetrySelectTest(testName);
  234 |         return;
  235 |       } catch (addErr: any) {
  236 |         RawValueLogger.log('failed to add test', {
  237 |           testName,
  238 |           addError: addErr?.message ?? addErr,
  239 |         });
  240 |         throw new Error(`Failed to find or add test "${testName}"`);
  241 |       }
  242 |     }
  243 |   }
  244 | 
  245 |   private async _addAndRetrySelectTest(testName: string): Promise<void> {
  246 |     RawValueLogger.log('adding test via search', { testName });
  247 | 
  248 |     await this.searchTests.fill(testName);
  249 |     await this.searchIcon.click();
  250 |     await this.page.waitForTimeout(1000);
  251 | 
  252 |     await this.selectTests.first().click();
  253 |     await this.addTestsButton.click();
  254 | 
  255 |     RawValueLogger.log('test added - retrying selection', { testName });
  256 |     await this.page.waitForTimeout(2000);
  257 | 
  258 |     const testLocator = (name: string) => this.page.locator(`//div[@class='TestList_mcs_testName' and text()='${name}']`);
  259 | 
  260 |     const test = testLocator(testName);
  261 |     await test.waitFor({ state: 'visible', timeout: 3000 });
  262 |     await test.click();
  263 | 
  264 |     RawValueLogger.log('test selected after add', { testName });
  265 |   }
  266 | 
  267 |   async clickOnLetsBeginButtonAndStartTest(
  268 |     
  269 |     testName: string,
  270 |     ssp: string,
  271 |     i: number,
  272 |   ) {
  273 |     // Validate the test name at the Administration Overview page
  274 |     console.log("Validating test name...");
> 275 |     await expect(this.testNameAtAdminOverview).toBeVisible({ timeout: 10000 });
      |                                                ^ Error: expect(locator).toBeVisible() failed
  276 |     const textContent = await this.testNameAtAdminOverview.textContent();
  277 |     console.log(`Text content: "${textContent}"`);
  278 |     expect(textContent?.trim(), {
  279 |       message: "The test name didn't match at Administration Overview page",
  280 |     }).toContain(testName.trim());
  281 | 
  282 |     // Ensure the "Let's Begin" button is visible and enabled before clicking
  283 |     console.log("Waiting for 'Let's Begin' button...");
  284 |     await expect(this.letsBeginButton).toBeVisible({ timeout: 10000 });
  285 |     await expect(this.letsBeginButton).toBeEnabled({ timeout: 10000 });
  286 | 
  287 |     console.log("Clicking 'Let's Begin' button...");
  288 |     await this.letsBeginButton.click();
  289 | 
  290 |     // Handle the SSP selection logic and click the "Start Test" button
  291 |     if (ssp === "All Examinees") {
  292 |       console.log("Clicking 'Start Test' button...");
  293 |       await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  294 |       await this.startTestButton.click();
  295 |     } else {
  296 |       console.log(`Setting SSP to: ${ssp}`);
  297 |       await this.setTheSSPto(ssp);
  298 |       console.log("Clicking 'Start Test' button...");
  299 |       await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  300 |       await this.startTestButton.click();
  301 |     }
  302 |   }
  303 | 
  304 |   async setTheSSPto(sspOption: string) {
  305 |     await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  306 |     await this.page.waitForTimeout(Number(3000));
  307 |     if (this.loading.isVisible())
  308 |       await this.loading.waitFor({ state: "hidden", timeout: 3 * 60 * 1000 });
  309 |     await this.sspDropDown.selectOption(
  310 |       { label: sspOption },
  311 |       { timeout: 60000 },
  312 |     );
  313 |     await this.page.waitForTimeout(Number(2000));
  314 | 
  315 |     try {
  316 |       const selectedSsp = await this.page.$eval(
  317 |         ".starting-point-dropdown",
  318 |         (ele) => (ele as HTMLSelectElement).value,
  319 |       );
  320 |       console.log(`selected ssp is = ${selectedSsp}`);
  321 | 
  322 |       expect(selectedSsp).toContain(sspOption);
  323 |     } catch (error) {
  324 |       await this.sspDropDown.selectOption({ label: sspOption });
  325 |       console.error(
  326 |         `the ssp drop down didnt select the one we want at first attempt so trying one more time ... ${error}`,
  327 |       );
  328 |     }
  329 |   }
  330 | 
  331 |   async completeTheTakenTestForDerivedScoresForVRBATNTest(
  332 |     typeOfTest: string,
  333 |     stemForm: string,
  334 |     BbyC: number,
  335 |     flag: string,
  336 |   ): Promise<Map<string, string>> {
  337 |     let correctCount: number = 1;
  338 |     let inCorrectCount: number = 1;
  339 |     const itemNumber: number = Number(
  340 |       await this.page.locator(".itemnav-wrapper div span").last().textContent(),
  341 |     );
  342 | 
  343 |     this.scoreMap.set(` `, "^");
  344 |     for (let index = 1; index <= itemNumber; index++) {
  345 |       this.scoreMap.set(`Item ${index}`, "x");
  346 |     }
  347 | 
  348 |     console.log(`Type Of test ${typeOfTest} \n`);
  349 |     while (await this.plainNextButtonOrEndButton.isVisible()) {
  350 |       await this.page.waitForTimeout(2500);
  351 | 
  352 |       const itemDetails: string = (await this.itemDetails.textContent())!;
  353 |       console.log(itemDetails);
  354 |       const correctlocator: Locator = this.corectOptionButton.first();
  355 |       const incorrectlocator: Locator = this.incorrectOptionButton.first();
  356 | 
  357 |       if (
  358 |         (await this.plainNextButtonOrEndButton.isVisible()) &&
  359 |         (await this.plainNextButtonOrEndButton.isEnabled())
  360 |       ) {
  361 |         await this.plainNextButtonOrEndButton.waitFor();
  362 |         await this.plainNextButtonOrEndButton.click();
  363 |         continue;
  364 |       } else if (typeOfTest.match(/All correct scenario/i)) {
  365 |         await this.clickCorrectOption(correctlocator, itemDetails);
  366 |       } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
  367 |         if (BbyC && itemDetails.startsWith("Item ")) {
  368 |           if (correctCount <= BbyC) {
  369 |             await this.clickCorrectOption(correctlocator, itemDetails);
  370 |             correctCount++;
  371 |           } else if (inCorrectCount <= BbyC) {
  372 |             await this.clickInCorrectOption(incorrectlocator, itemDetails);
  373 |             inCorrectCount++;
  374 |           }
  375 |         } else {
```