# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIAndReports/GIWHAT_Single_BC4.spec.ts >>  GIWHAT UI And Reports >> Age 15 to Adult - Reverse Logic SSP5 Test UI
- Location: src/tests/UIAndReports/GIWHAT_Single_BC4.spec.ts:10:13

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[@class=\'rsi-checkbox\']').first()
    - locator resolved to <button tabindex="0" class="rsi-checkbox" aria-disabled="true" aria-label="General Information–What">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    116 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [active]:
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
              - heading "Hello 51Pw Aut25AH" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "51Pw Aut25AH" [ref=e10] [cursor=pointer]
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
            - generic [ref=e40]:
              - generic [ref=e41]: NEW!
              - generic [ref=e42]: Offline Mode is here, download your assignments and get started today!
              - link "Read More" [ref=e43] [cursor=pointer]:
                - /url: /media/OfflineMode.pdf
              - button "Close" [ref=e44] [cursor=pointer]: ✕
            - generic [ref=e45]:
              - generic [ref=e46]:
                - heading "My Test Assignments" [level=1] [ref=e47]
                - button "Create New Test Assignment" [ref=e48] [cursor=pointer]
              - generic [ref=e49]:
                - generic [ref=e52]:
                  - textbox [ref=e53]:
                    - /placeholder: Search Test Assignments
                  - button "Search Test Assignments" [ref=e54] [cursor=pointer]
                - generic [ref=e55]:
                  - button "Active" [ref=e56] [cursor=pointer]
                  - button "Closed" [ref=e57] [cursor=pointer]
              - table "Available Assignments" [ref=e59]:
                - rowgroup [ref=e66]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e67]:
                    - columnheader "This is the student or individual being assessed." [ref=e68]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e69]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e70]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e71]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e72]: Actions
                - rowgroup [ref=e73]:
                  - row "Begin assignment Erick Denesik_1788428053549 for N50304A1885, Vilma Erick Denesik_1788428053549 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Erick Denesik_1788428053549 for N50304A1885, Vilma" [ref=e75]:
                      - button "Begin assignment Erick Denesik_1788428053549 for N50304A1885, Vilma" [disabled] [ref=e76]:
                        - generic [ref=e77]: N50304A1885, Vilma
                    - cell "Erick Denesik_1788428053549 More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Erick Denesik_1788428053549" [disabled] [ref=e80]:
                          - generic [ref=e81]: Erick Denesik_1788428053549
                        - button "More info" [ref=e82]
                    - cell "—" [ref=e83]:
                      - button "—" [disabled] [ref=e84]
                    - cell "● Not Started" [ref=e85]:
                      - button "● Not Started" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row "Begin assignment Laurence Nitzsche_1788427790924 for N96161A14621, Johnnie Laurence Nitzsche_1788427790924 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Laurence Nitzsche_1788427790924 for N96161A14621, Johnnie" [ref=e93]:
                      - button "Begin assignment Laurence Nitzsche_1788427790924 for N96161A14621, Johnnie" [disabled] [ref=e94]:
                        - generic [ref=e95]: N96161A14621, Johnnie
                    - cell "Laurence Nitzsche_1788427790924 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Laurence Nitzsche_1788427790924" [disabled] [ref=e98]:
                          - generic [ref=e99]: Laurence Nitzsche_1788427790924
                        - button "More info" [ref=e100]
                    - cell "90 days" [ref=e101]:
                      - button "90 days" [disabled] [ref=e102]
                    - cell "● Submitted" [ref=e103]:
                      - button "● Submitted" [disabled] [ref=e104]:
                        - generic [ref=e105]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e106]:
                      - button "Edit Assignment" [disabled] [ref=e107]
                      - button "Add Tests" [disabled] [ref=e108]
                      - button "Assignment actions" [ref=e109]
                  - row "Begin assignment Heather Kulas_1788427548120 for N95458A81486, Harry Heather Kulas_1788427548120 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Heather Kulas_1788427548120 for N95458A81486, Harry" [ref=e111]:
                      - button "Begin assignment Heather Kulas_1788427548120 for N95458A81486, Harry" [disabled] [ref=e112]:
                        - generic [ref=e113]: N95458A81486, Harry
                    - cell "Heather Kulas_1788427548120 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Heather Kulas_1788427548120" [disabled] [ref=e116]:
                          - generic [ref=e117]: Heather Kulas_1788427548120
                        - button "More info" [ref=e118]
                    - cell "90 days" [ref=e119]:
                      - button "90 days" [disabled] [ref=e120]
                    - cell "● Submitted" [ref=e121]:
                      - button "● Submitted" [disabled] [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e124]:
                      - button "Edit Assignment" [disabled] [ref=e125]
                      - button "Add Tests" [disabled] [ref=e126]
                      - button "Assignment actions" [ref=e127]
            - generic [ref=e128]:
              - generic [ref=e129]:
                - generic [ref=e131]:
                  - img [ref=e132]
                  - heading "Notifications Center" [level=2] [ref=e136]
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - generic [ref=e139]: 08/31/2026
                    - paragraph [ref=e140]:
                      - generic [ref=e141]: The RiversideScore platform will be down for maintenance on Wednesday, September 2nd, from 9:30 PM
                      - text: to 12:00 AM Central.
                      - generic [ref=e142]: During this time, access will be unavailable. If you have any questions, please contact
                      - text: "Customer Support Monday- Friday 8AM- 4PM Central at:"
                    - paragraph [ref=e143]:
                      - text: "Tel:"
                      - link "800-323-9540" [ref=e144] [cursor=pointer]:
                        - /url: tel:8003239540
                      - text: "Email:"
                      - link "Inquiry@service.riversideinsights.com" [ref=e146] [cursor=pointer]:
                        - /url: mailto:Inquiry@service.riversideinsights.com
                    - paragraph [ref=e147]: We appreciate your patience as we work to improve the experience!
                  - generic [ref=e148]:
                    - generic [ref=e149]: 08/27/2026
                    - text: Assessment Administration Notice A small number of users with limited available disk space may experience issues loading examinees, completing assessments, or capturing audio data. If you encounter these issues, switching to Firefox may allow you to continue administering assessments. Audio capture functionality may be unavailable when device storage is low. No assessment data is lost as a result of this issue, and the vast majority of users are not affected.
                  - generic [ref=e150]:
                    - generic [ref=e151]: 08/21/2026
                    - generic [ref=e152]:
                      - paragraph [ref=e153]:
                        - strong [ref=e154]: Experience Platform Improvements
                      - paragraph [ref=e155]: Smoother workflows, better reporting, and updated resources for a more reliable platform experience.
                      - paragraph [ref=e156]:
                        - link "Learn More" [ref=e158] [cursor=pointer]:
                          - /url: https://riversideinsights.com/hubfs/Release%20Notes%208_20_2026.pdf
              - generic [ref=e159]:
                - generic [ref=e161]:
                  - img [ref=e162]
                  - heading "Resources" [level=3] [ref=e166]
                - list [ref=e167]:
                  - listitem [ref=e168]:
                    - button "Riverside Learn" [ref=e169] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e170]
                      - img [ref=e172]
                  - listitem [ref=e174]:
                    - button "Onboarding Tutorial Videos" [ref=e175] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e176]
                      - img [ref=e178]
                  - listitem [ref=e180]:
                    - button "Quick Reference Guides" [ref=e181] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e182]
                      - img [ref=e184]
                - button "View All" [ref=e187] [cursor=pointer]
      - contentinfo [ref=e188]:
        - generic [ref=e189]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e190] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e191]
        - generic [ref=e192]:
          - link "Riverside Insights Facebook" [ref=e193] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e194]
          - link "Riverside Insights Twitter" [ref=e195] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e196]
          - link "Riverside Insights LinkedIn" [ref=e197] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e198]
          - link "Riverside Insights Instagram" [ref=e199] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e200]
        - generic [ref=e201]:
          - button "Leave Feedback" [ref=e202] [cursor=pointer]
          - generic [ref=e203]: "|"
          - link "Terms of Use" [ref=e204] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e205]: "|"
          - link "Privacy Policy" [ref=e206] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e207]: Footer region end
```

# Test source

```ts
  6229 |       }
  6230 |       await this.plainNextButtonOrEndButton.click();
  6231 |       if (
  6232 |         (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
  6233 |       ) {
  6234 |         break;
  6235 |       }
  6236 |     }
  6237 |   }
  6238 |     async pickTheTestNeeded(testName: string, student:StudentPage) {
  6239 |         await this.page.bringToFront();
  6240 |         await this.page.waitForTimeout(2000);
  6241 | 
  6242 |         const testSessionIntro: Locator = await this.page.locator("//b[text()='Test Session Introduction']");
  6243 |         if (await testSessionIntro.isVisible()) {
  6244 |             for (let i = 1; i <= 3; i++) {
  6245 |                 await this.page.waitForTimeout(2000);
  6246 |                 if (await this.plainNextButtonOrEndButton.isEnabled()) {
  6247 |                     if (i === 3) {
  6248 |                         await this.beginAdminButton.click();
  6249 |                     } else {
  6250 |                         await this.page.waitForTimeout(2000);
  6251 |                         await this.plainNextButtonOrEndButton.click();
  6252 |                     }
  6253 |                 } else {
  6254 |                     await this.plainNextButtonOrEndButton.waitFor({state: 'visible', timeout: 50000});
  6255 |                 }
  6256 |             }
  6257 |         }
  6258 |         if ((await this.administrationOverviewPageTestName.isVisible()) && (await this.administrationOverviewPageTestName.textContent()).includes(testName)) {
  6259 |             return;
  6260 |         } else {
  6261 |             for (let i = 0; i < 3; i++) {
  6262 |                 if (await this.mainNavigation.isEnabled()) {
  6263 |                     await this.page.waitForTimeout(1000);
  6264 |                     await this.mainNavigation.click();
  6265 |                     break;
  6266 |                 }
  6267 |                 await this.page.waitForTimeout(1000);
  6268 |             }
  6269 |             await this.mainNavigationTests.waitFor({
  6270 |                 state: "visible",
  6271 |                 timeout: 80000,
  6272 |             });
  6273 |             await this.page.waitForTimeout(1000);
  6274 |             await this.mainNavigationTests.click();
  6275 |             const testButton = this.page
  6276 |                 .locator("//div[@class='TestList_mcs_testName']")
  6277 |                 .getByText(testName, {exact: true});
  6278 |             await testButton.waitFor({state: "visible", timeout: 10000});
  6279 | 
  6280 |             const isDisabled = await testButton.isDisabled();
  6281 |             const buttonText = await testButton.textContent();
  6282 |             if (isDisabled && buttonText === testName) {
  6283 |                 console.log(
  6284 |                     `Test "${testName}" is already selected and disabled; closing menu`
  6285 |                 );
  6286 |                 const closeButton = this.page.locator(
  6287 |                     "//button[@class='plain-button close-btn']"
  6288 |                 );
  6289 |                 await closeButton.waitFor({state: "visible", timeout: 5000});
  6290 |                 await closeButton.click();
  6291 |                 return;
  6292 |             }
  6293 |             await testButton.click();
  6294 |             console.log(`Selected test "${testName}"`);
  6295 |         }
  6296 |         if (await this.syncDevicePopUp.isVisible()) {
  6297 |             await student.clickOnAcceptButton();
  6298 |             return;
  6299 |         }
  6300 |     }
  6301 | 
  6302 |   async getActualTestName() {
  6303 |     return await this.testNameAtAdminOverview.textContent();
  6304 |   }
  6305 | 
  6306 |   async clickOnLetsBeginButtonAndStartTest(testName: string, ssp: string) {
  6307 |     await this.letsBeginButton.waitFor({
  6308 |       state: "visible",
  6309 |       timeout: 5 * 60 * 1000,
  6310 |     });
  6311 | 
  6312 |     let actualTestName = await this.getActualTestName();
  6313 |     if (actualTestName != testName) {
  6314 |       await this.page.waitForTimeout(1000);
  6315 |       await this.mainNavigation.click();
  6316 |       await this.mainNavigationTests.click();
  6317 |       const testButton = this.page
  6318 |         .locator("//div[@class='TestList_mcs_testName']")
  6319 |         .getByText(testName, { exact: true });
  6320 |       try {
  6321 |         await testButton.waitFor({ state: "visible", timeout: 10000 });
  6322 |         await testButton.click();
  6323 |       } catch {
  6324 |         // Test not present in left nav — add it via "+ Add Test", then re-select.
  6325 |         await this.addPlusTestsButton.click();
  6326 |         await this.searchTests.fill(testName);
  6327 |         await this.searchIcon.click();
  6328 |         await this.page.waitForTimeout(1000);
> 6329 |         await this.selectTests.first().click();
       |                                        ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  6330 |         await this.addTestsButton.click();
  6331 |         await this.page.waitForTimeout(2000);
  6332 |         await testButton.waitFor({ state: "visible", timeout: 10000 });
  6333 |         await testButton.click();
  6334 |       }
  6335 |       await this.page.waitForLoadState("domcontentloaded");
  6336 |       await this.page.waitForTimeout(1000);
  6337 |     }
  6338 |     actualTestName = await this.getActualTestName();
  6339 |     expect(actualTestName, {
  6340 |       message: "The test name didnt match at Administration Overview page",
  6341 |     }).toContain(testName);
  6342 |     console.log(actualTestName);
  6343 |     await this.letsBeginButton.click();
  6344 |     await this.page.waitForTimeout(1000);
  6345 |     if (ssp === "All Examinees") {
  6346 |       await this.startTestButton.click();
  6347 |     } else {
  6348 |       await this.setTheSuggestedStartingPointTo(ssp);
  6349 |       await this.page.waitForTimeout(1500);
  6350 |       await this.startTestButton.click();
  6351 |     }
  6352 |   }
  6353 | 
  6354 |   async clickOnLetsBeginAndResumeInProgressTest(testName: string) {
  6355 |     if (await this.closeNavigationButton.isVisible()) {
  6356 |       await this.closeNavigationButton.click();
  6357 |     }
  6358 | 
  6359 |     await this.letsBeginButton.waitFor({
  6360 |       state: "visible",
  6361 |       timeout: 5 * 60 * 1000,
  6362 |     });
  6363 | 
  6364 |     let actualTestName = await this.getActualTestName();
  6365 |     if (actualTestName != testName) {
  6366 |       await this.page.waitForTimeout(1000);
  6367 |       await this.mainNavigation.click();
  6368 |       await this.mainNavigationTests.click();
  6369 |       const testButton = this.page
  6370 |         .locator("//div[@class='TestList_mcs_testName']")
  6371 |         .getByText(testName, { exact: true });
  6372 |       await testButton.waitFor({ state: "visible", timeout: 10000 });
  6373 |       await testButton.click();
  6374 |       await this.page.waitForLoadState("domcontentloaded");
  6375 |       await this.page.waitForTimeout(1000);
  6376 |     }
  6377 |     actualTestName = await this.getActualTestName();
  6378 |     expect(actualTestName, {
  6379 |       message: "The test name didn't match at Administration Overview page",
  6380 |     }).toContain(testName);
  6381 | 
  6382 |     await this.letsBeginButton.click();
  6383 |     await this.page.waitForLoadState();
  6384 |     await this.page.waitForTimeout(1000);
  6385 |     await this.nextItemButton.click();
  6386 |     await this.page.waitForTimeout(1000);
  6387 |   }
  6388 | 
  6389 |   async endTestAndEnterReviewMode() {
  6390 |     await this.plainNextButtonOrEndButton.last().click();
  6391 |     await this.endSessionButton.waitFor({ state: "visible", timeout: 60000 });
  6392 |     await this.endSessionButton.click();
  6393 |     await this.reviewFromConfirmButton.waitFor({ state: "visible", timeout: 60000 });
  6394 |     await this.reviewFromConfirmButton.click();
  6395 |     await this.dashboardPage.waitForLoadingSpinnerToDisappear();
  6396 |   }
  6397 | 
  6398 |   async setTheSuggestedStartingPointTo(sspOption: string) {
  6399 |     await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  6400 |     await this.page.waitForTimeout(5000);
  6401 |     if (this.loading.isVisible())
  6402 |       await this.loading.waitFor({ state: "hidden", timeout: 3 * 60 * 1000 });
  6403 |     await this.sspDropDown.selectOption({ label: sspOption }, { timeout: 60000 });
  6404 |     await this.page.waitForTimeout(2000);
  6405 | 
  6406 |     try {
  6407 |       const selectedSsp = await this.page.$eval(
  6408 |         ".starting-point-dropdown",
  6409 |         (ele) => (ele as HTMLSelectElement).value
  6410 |       );
  6411 |       console.log(`selected ssp is = ${selectedSsp}`);
  6412 | 
  6413 |       expect(selectedSsp).toContain(sspOption);
  6414 |     } catch (error) {
  6415 |       await this.sspDropDown.selectOption({ label: sspOption });
  6416 |       console.error(
  6417 |         `the ssp drop down didnt select the one we want at first attempt so trying one more time ... ${error}`
  6418 |       );
  6419 |     }
  6420 |   }
  6421 | 
  6422 |   async selectTheCheckbox(radioButton: number, info?: string) {
  6423 |     await this.multiRadioButtons.nth(radioButton).click();
  6424 |   }
  6425 | 
  6426 |   async selectTheDropdownOption(
  6427 |     dropDown: number,
  6428 |     dropDownOpt: string,
  6429 |     info?: string
```