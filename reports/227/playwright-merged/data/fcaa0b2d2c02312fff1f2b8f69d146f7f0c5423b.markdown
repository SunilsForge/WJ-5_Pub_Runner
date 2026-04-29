# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/WRTBRF_cluster_pub.spec.ts >>  WRTBRF cluster Derived Export Automation  >> For SWRTAC - K12 - All incorrect scenario,WRTSMP - K12 - All correct scenario Complete The WRTBRF cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/WRTBRF_cluster_pub.spec.ts:27:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Letʼs Begin\']')
    - locator resolved to <button class="blue-button">Letʼs Begin</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="loading-overlay top-most"></div> from <div id="root" tabindex="-1" class="clean-wrapper">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="loading-overlay top-most"></div> from <div id="root" tabindex="-1" class="clean-wrapper">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    116 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="loading-overlay top-most"></div> from <div id="root" tabindex="-1" class="clean-wrapper">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

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
              - heading "Hello 02PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "02PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N78107A87222 Status Completed Date Created 04/29/2026 01:01 PM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N78107A87222" [ref=e68]: Derived_Score_AutoFilter_Template_N78107A87222
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 04/29/2026 01:01 PM" [ref=e72]: 04/29/2026 01:01 PM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N7832A71975 Status Completed Date Created 04/29/2026 12:55 PM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N7832A71975" [ref=e82]: Derived_Score_AutoFilter_Template_N7832A71975
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 04/29/2026 12:55 PM" [ref=e86]: 04/29/2026 12:55 PM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N16296A68559 Status Completed Date Created 04/29/2026 12:50 PM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N16296A68559" [ref=e96]: Derived_Score_AutoFilter_Template_N16296A68559
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 04/29/2026 12:50 PM" [ref=e100]: 04/29/2026 12:50 PM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N52581A90562 Status Completed Date Created 04/29/2026 10:24 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N52581A90562" [ref=e110]: Derived_Score_AutoFilter_Template_N52581A90562
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 04/29/2026 10:24 AM" [ref=e114]: 04/29/2026 10:24 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N94530A60616 Status Completed Date Created 04/29/2026 10:19 AM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N94530A60616" [ref=e124]: Derived_Score_AutoFilter_Template_N94530A60616
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/29/2026 10:19 AM" [ref=e128]: 04/29/2026 10:19 AM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N46443A40464 Status Completed Date Created 04/29/2026 10:13 AM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N46443A40464" [ref=e138]: Derived_Score_AutoFilter_Template_N46443A40464
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/29/2026 10:13 AM" [ref=e142]: 04/29/2026 10:13 AM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N13713A22057 Status Completed Date Created 04/29/2026 10:07 AM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N13713A22057" [ref=e152]: Derived_Score_AutoFilter_Template_N13713A22057
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/29/2026 10:07 AM" [ref=e156]: 04/29/2026 10:07 AM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N39291A90342 Status Completed Date Created 04/27/2026 12:11 PM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N39291A90342" [ref=e166]: Derived_Score_AutoFilter_Template_N39291A90342
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/27/2026 12:11 PM" [ref=e170]: 04/27/2026 12:11 PM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N97659A17205 Status Completed Date Created 04/27/2026 12:05 PM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N97659A17205" [ref=e180]: Derived_Score_AutoFilter_Template_N97659A17205
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/27/2026 12:05 PM" [ref=e184]: 04/27/2026 12:05 PM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N76001A66868 Status Completed Date Created 04/27/2026 11:59 AM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N76001A66868" [ref=e194]: Derived_Score_AutoFilter_Template_N76001A66868
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/27/2026 11:59 AM" [ref=e198]: 04/27/2026 11:59 AM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N47159A2409 Status Completed Date Created 04/27/2026 11:37 AM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N47159A2409" [ref=e208]: Derived_Score_AutoFilter_Template_N47159A2409
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/27/2026 11:37 AM" [ref=e212]: 04/27/2026 11:37 AM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N71457A85660 Status Completed Date Created 04/27/2026 11:29 AM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N71457A85660" [ref=e222]: Derived_Score_AutoFilter_Template_N71457A85660
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/27/2026 11:29 AM" [ref=e226]: 04/27/2026 11:29 AM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N68382A38189 Status Completed Date Created 04/27/2026 11:21 AM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N68382A38189" [ref=e236]: Derived_Score_AutoFilter_Template_N68382A38189
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/27/2026 11:21 AM" [ref=e240]: 04/27/2026 11:21 AM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N9111A60140 Status Completed Date Created 04/27/2026 11:15 AM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N9111A60140" [ref=e250]: Derived_Score_AutoFilter_Template_N9111A60140
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/27/2026 11:15 AM" [ref=e254]: 04/27/2026 11:15 AM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N98328A16557 Status Completed Date Created 04/03/2026 01:04 AM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N98328A16557" [ref=e264]: Test_DataExport_AutoFilter_Template_N98328A16557
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/03/2026 01:04 AM" [ref=e268]: 04/03/2026 01:04 AM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N88944A40005 Status Completed Date Created 04/03/2026 12:59 AM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N88944A40005" [ref=e278]: Test_DataExport_AutoFilter_Template_N88944A40005
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/03/2026 12:59 AM" [ref=e282]: 04/03/2026 12:59 AM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N63524A32740 Status Completed Date Created 03/31/2026 01:27 PM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N63524A32740" [ref=e292]: Derived_Score_AutoFilter_Template_N63524A32740
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 03/31/2026 01:27 PM" [ref=e296]: 03/31/2026 01:27 PM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N70156A65289 Status Completed Date Created 03/31/2026 01:23 PM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N70156A65289" [ref=e306]: Derived_Score_AutoFilter_Template_N70156A65289
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 03/31/2026 01:23 PM" [ref=e310]: 03/31/2026 01:23 PM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N42074A92249 Status Completed Date Created 03/31/2026 01:17 PM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N42074A92249" [ref=e320]: Derived_Score_AutoFilter_Template_N42074A92249
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 03/31/2026 01:17 PM" [ref=e324]: 03/31/2026 01:17 PM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N92044A96718 Status Completed Date Created 03/31/2026 01:13 PM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N92044A96718" [ref=e334]: Derived_Score_AutoFilter_Template_N92044A96718
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 03/31/2026 01:13 PM" [ref=e338]: 03/31/2026 01:13 PM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
      - contentinfo [ref=e346]:
        - generic [ref=e347]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e348] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e349]
        - generic [ref=e350]:
          - link "Riverside Insights Facebook" [ref=e351] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e352]
          - link "Riverside Insights Twitter" [ref=e353] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e354]
          - link "Riverside Insights LinkedIn" [ref=e355] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e356]
          - link "Riverside Insights Instagram" [ref=e357] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e358]
        - generic [ref=e359]:
          - button "Leave Feedback" [ref=e360] [cursor=pointer]
          - generic [ref=e361]: "|"
          - link "Terms of Use" [ref=e362] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e363]: "|"
          - link "Privacy Policy" [ref=e364] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e365]: Footer region end
  - region "Chat Widget" [ref=e366]:
    - iframe [ref=e367]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e368]:
      - img [ref=e369]
```

# Test source

```ts
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
  197 |     const testLocator = (name: string) => this.page.getByText(name, { exact: true });
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
  211 |       const test = testLocator(testName);
  212 |       await test.waitFor({ state: 'visible', timeout: 3000 });
  213 |       RawValueLogger.log('test found - clicking', { testName });
  214 |       await test.click();
  215 |       RawValueLogger.log('test clicked successfully', { testName });
  216 |       return;
  217 |     } catch (err: any) {
  218 |       RawValueLogger.log('test not found or click failed', {
  219 |         testName,
  220 |         message: err?.message ?? err,
  221 |       });
  222 | 
  223 |       RawValueLogger.log('test not found - attempting to add test', { testName });
  224 |       try {
  225 |         await this.addTestButton.click();
  226 |         await this._addAndRetrySelectTest(testName);
  227 |         return;
  228 |       } catch (addErr: any) {
  229 |         RawValueLogger.log('failed to add test', {
  230 |           testName,
  231 |           addError: addErr?.message ?? addErr,
  232 |         });
  233 |         throw new Error(`Failed to find or add test "${testName}"`);
  234 |       }
  235 |     }
  236 |   }
  237 | 
  238 |   private async _addAndRetrySelectTest(testName: string): Promise<void> {
  239 |     RawValueLogger.log('adding test via search', { testName });
  240 | 
  241 |     await this.searchTests.fill(testName);
  242 |     await this.searchIcon.click();
  243 |     await this.page.waitForTimeout(1000);
  244 | 
  245 |     await this.selectTests.first().click();
  246 |     await this.addTestsButton.click();
  247 | 
  248 |     RawValueLogger.log('test added - retrying selection', { testName });
  249 |     await this.page.waitForTimeout(2000);
  250 | 
  251 |     const testLocator = (name: string) => this.page.getByText(name, { exact: true });
  252 | 
  253 |     const test = testLocator(testName);
  254 |     await test.waitFor({ state: 'visible', timeout: 3000 });
  255 |     await test.click();
  256 | 
  257 |     RawValueLogger.log('test selected after add', { testName });
  258 |   }
  259 | 
  260 |   async clickOnLetsBeginButtonAndStartTest(
  261 |     
  262 |     testName: string,
  263 |     ssp: string,
  264 |     i: number,
  265 |   ) {
  266 |     // Validate the test name at the Administration Overview page
  267 |     console.log("Validating test name...");
  268 |     await expect(this.testNameAtAdminOverview).toBeVisible({ timeout: 10000 });
  269 |     const textContent = await this.testNameAtAdminOverview.textContent();
  270 |     console.log(`Text content: "${textContent}"`);
  271 |     expect(textContent?.trim(), {
  272 |       message: "The test name didn't match at Administration Overview page",
  273 |     }).toContain(testName.trim());
  274 | 
  275 |     // Ensure the "Let's Begin" button is visible and enabled before clicking
  276 |     console.log("Waiting for 'Let's Begin' button...");
  277 |     await expect(this.letsBeginButton).toBeVisible({ timeout: 10000 });
  278 |     await expect(this.letsBeginButton).toBeEnabled({ timeout: 10000 });
  279 | 
  280 |     console.log("Clicking 'Let's Begin' button...");
> 281 |     await this.letsBeginButton.click();
      |                                ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  282 | 
  283 |     // Handle the SSP selection logic and click the "Start Test" button
  284 |     if (ssp === "All Examinees") {
  285 |       console.log("Clicking 'Start Test' button...");
  286 |       await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  287 |       await this.startTestButton.click();
  288 |     } else {
  289 |       console.log(`Setting SSP to: ${ssp}`);
  290 |       await this.setTheSSPto(ssp);
  291 |       console.log("Clicking 'Start Test' button...");
  292 |       await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  293 |       await this.startTestButton.click();
  294 |     }
  295 |   }
  296 | 
  297 |   async setTheSSPto(sspOption: string) {
  298 |     await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  299 |     await this.page.waitForTimeout(Number(3000));
  300 |     if (this.loading.isVisible())
  301 |       await this.loading.waitFor({ state: "hidden", timeout: 3 * 60 * 1000 });
  302 |     await this.sspDropDown.selectOption(
  303 |       { label: sspOption },
  304 |       { timeout: 60000 },
  305 |     );
  306 |     await this.page.waitForTimeout(Number(2000));
  307 | 
  308 |     try {
  309 |       const selectedSsp = await this.page.$eval(
  310 |         ".starting-point-dropdown",
  311 |         (ele) => (ele as HTMLSelectElement).value,
  312 |       );
  313 |       console.log(`selected ssp is = ${selectedSsp}`);
  314 | 
  315 |       expect(selectedSsp).toContain(sspOption);
  316 |     } catch (error) {
  317 |       await this.sspDropDown.selectOption({ label: sspOption });
  318 |       console.error(
  319 |         `the ssp drop down didnt select the one we want at first attempt so trying one more time ... ${error}`,
  320 |       );
  321 |     }
  322 |   }
  323 | 
  324 |   async completeTheTakenTestForDerivedScoresForVRBATNTest(
  325 |     typeOfTest: string,
  326 |     stemForm: string,
  327 |     BbyC: number,
  328 |     flag: string,
  329 |   ): Promise<Map<string, string>> {
  330 |     let correctCount: number = 1;
  331 |     let inCorrectCount: number = 1;
  332 |     const itemNumber: number = Number(
  333 |       await this.page.locator(".itemnav-wrapper div span").last().textContent(),
  334 |     );
  335 | 
  336 |     this.scoreMap.set(` `, "^");
  337 |     for (let index = 1; index <= itemNumber; index++) {
  338 |       this.scoreMap.set(`Item ${index}`, "x");
  339 |     }
  340 | 
  341 |     console.log(`Type Of test ${typeOfTest} \n`);
  342 |     while (await this.plainNextButtonOrEndButton.isVisible()) {
  343 |       await this.page.waitForTimeout(2500);
  344 | 
  345 |       const itemDetails: string = (await this.itemDetails.textContent())!;
  346 |       console.log(itemDetails);
  347 |       const correctlocator: Locator = this.corectOptionButton.first();
  348 |       const incorrectlocator: Locator = this.incorrectOptionButton.first();
  349 | 
  350 |       if (
  351 |         (await this.plainNextButtonOrEndButton.isVisible()) &&
  352 |         (await this.plainNextButtonOrEndButton.isEnabled())
  353 |       ) {
  354 |         await this.plainNextButtonOrEndButton.waitFor();
  355 |         await this.plainNextButtonOrEndButton.click();
  356 |         continue;
  357 |       } else if (typeOfTest.match(/All correct scenario/i)) {
  358 |         await this.clickCorrectOption(correctlocator, itemDetails);
  359 |       } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
  360 |         if (BbyC && itemDetails.startsWith("Item ")) {
  361 |           if (correctCount <= BbyC) {
  362 |             await this.clickCorrectOption(correctlocator, itemDetails);
  363 |             correctCount++;
  364 |           } else if (inCorrectCount <= BbyC) {
  365 |             await this.clickInCorrectOption(incorrectlocator, itemDetails);
  366 |             inCorrectCount++;
  367 |           }
  368 |         } else {
  369 |           await this.clickCorrectOption(correctlocator, itemDetails);
  370 |         }
  371 |       } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
  372 |         if (BbyC && itemDetails.startsWith("Item ")) {
  373 |           if (correctCount <= BbyC) {
  374 |             await this.clickCorrectOption(correctlocator, itemDetails);
  375 |             correctCount++;
  376 |           } else if (inCorrectCount <= BbyC) {
  377 |             await this.clickInCorrectOption(incorrectlocator, itemDetails);
  378 |             inCorrectCount++;
  379 |           }
  380 |           if (inCorrectCount === BbyC) {
  381 |             break;
```