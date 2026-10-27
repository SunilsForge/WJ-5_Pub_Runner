# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/dashboard/testAssignments_C.spec.ts >> Validate Dashboard Test Assignments functionality Part_C
- Location: src/tests/functional/dashboard/testAssignments_C.spec.ts:13:5

# Error details

```
TimeoutError: locator.isDisabled: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[@class=\'plain-button svg-icon TestList_mcs_testButton\']/descendant::div').filter({ hasText: 'Academic Vocabulary' })

```

# Page snapshot

```yaml
- generic:
  - dialog "Administration Overview for General Information–What" [ref=e2]:
    - banner [ref=e3]:
      - button "Main Navigation" [ref=e4] [cursor=pointer]
      - generic "General Information–What" [ref=e5] [cursor=pointer]:
        - generic [ref=e6]: General Information–What
      - 'button "N27787A73850, Orie Age: 9y Grade: Average Adult" [ref=e9] [cursor=pointer]':
        - img [ref=e10]
        - generic [ref=e13]:
          - generic [ref=e14]: N27787A73850, Orie
          - generic [ref=e15]: "Age: 9y Grade: Average Adult"
    - generic [ref=e17]:
      - heading "General Information–What" [level=2] [ref=e18]
      - generic [ref=e19]:
        - text: Read the instructions below or
        - button "begin the test." [disabled] [ref=e20]
    - generic [ref=e21]:
      - heading "Things to Know:" [level=2] [ref=e23]
      - generic [ref=e27]: This test uses voice capture.
      - button "Check Audio Settings" [ref=e28] [cursor=pointer]
    - generic [ref=e29]:
      - paragraph [ref=e30]: Administration Overview
      - generic [ref=e31]:
        - generic [ref=e32]: ✦
        - paragraph [ref=e34]: Do not penalize the examinee for mispronunciations resulting from articulation errors, dialect variations, or regional speech patterns.
      - generic [ref=e35]:
        - generic [ref=e36]: ✦
        - paragraph [ref=e38]: Know the exact pronunciation of each test item before administering this test.
      - generic [ref=e39]:
        - generic [ref=e40]: ✦
        - paragraph [ref=e42]: You may repeat any item on this test if the examinee requests it.
      - generic [ref=e43]:
        - generic [ref=e44]: ✦
        - paragraph [ref=e46]: The platform selects an appropriate starting point based on the examinee’s age or grade/education level.
      - generic [ref=e47]:
        - generic [ref=e48]: ✦
        - paragraph [ref=e50]: The test ends when the examinee has met the basal and ceiling requirements.
      - generic [ref=e51]:
        - generic [ref=e52]: ✦
        - paragraph [ref=e54]:
          - text: Consult the Resources tab of Riverside Score
          - superscript [ref=e55]: ®
          - text: for audio clips containing correct pronunciations.
      - generic [ref=e56]:
        - generic [ref=e57]: ✦
        - paragraph [ref=e59]:
          - text: "Basal: 4 consecutive lowest-numbered items administered correct or Item 1"
          - text: "Ceiling: 4 consecutive highest-numbered items administered incorrect and no higher-numbered items administered are correct, or the last item on the test"
      - generic [ref=e60]:
        - generic [ref=e61]: ✦
        - paragraph [ref=e63]: The platform will administer General Information–Where first, followed immediately by General Information–What.
      - generic [ref=e64]:
        - generic [ref=e65]: ✦
        - paragraph [ref=e67]:
          - text: "If the examinee responds to a “what” item with a “where” response, repeat the question using the complete sentence:"
          - strong [ref=e69]:
            - generic "* What would people usually do with ______? *"
            - text: What would people usually do with ______?
          - text: Score the item after the examinee responds. Give this reminder only once.
      - paragraph [ref=e70]: Scoring
      - generic [ref=e71]:
        - generic [ref=e72]: ✦
        - paragraph [ref=e74]: If the examinee provides a response that requires querying, click the response and follow the instructions to query for more information. Then select the response option from the scoring key that matches the examinee’s next response.
      - generic [ref=e75]:
        - generic [ref=e76]: ✦
        - paragraph [ref=e78]: The platform assigns 1 point for correct responses and 0 points for incorrect responses.
      - generic [ref=e79]:
        - generic [ref=e80]: ✦
        - paragraph [ref=e82]: The platform computes the total test score by summing the item scores for all administered items and adding 1 point for each unadministered item below the basal.
      - generic [ref=e83]:
        - generic [ref=e84]: ✦
        - paragraph [ref=e86]: For each item administered, select the response option from the scoring key that matches the examinee’s response. If the examinee provides a response that is not listed in the scoring key, use the Other option to assign it a score of 1 (correct) or 0 (incorrect).
    - generic [ref=e87]:
      - button "Letʼs Begin" [ref=e88] [cursor=pointer]
      - button "SCROLL FOR MORE ↓" [ref=e89] [cursor=pointer]:
        - text: SCROLL
        - text: FOR MORE
        - text: ↓
  - dialog "Main navigation" [ref=e91]:
    - navigation "Main navigation" [ref=e92]:
      - heading "Main navigation" [level=2] [ref=e93]
      - button "Close navigation" [ref=e94] [cursor=pointer]: ✕
      - button "Home" [ref=e95] [cursor=pointer]:
        - img [ref=e96]
      - button "Tests" [expanded] [active] [ref=e99] [cursor=pointer]:
        - img [ref=e100]
        - generic [ref=e103]: Tests
      - button "Test Assignment Defaults" [ref=e104] [cursor=pointer]:
        - img [ref=e105]
      - button "Log Out" [ref=e107] [cursor=pointer]:
        - img [ref=e108]
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]: "Filter tests by:"
        - generic [ref=e115]:
          - button "Complete" [ref=e116] [cursor=pointer]:
            - img "Complete" [ref=e117]
          - button "In Progress" [ref=e121] [cursor=pointer]:
            - img "In Progress" [ref=e122]
          - button "Not Yet Administered" [ref=e130] [cursor=pointer]:
            - img "Not Yet Administered" [ref=e131]
          - button "Complete + Score Error" [ref=e135] [cursor=pointer]:
            - img "Complete + Score Error" [ref=e136]
          - button "Score Later" [ref=e140] [cursor=pointer]:
            - img "Score Later" [ref=e141]
      - generic [ref=e146]:
        - generic [ref=e147]:
          - img [ref=e148]
          - generic [ref=e150]: Bobby Sauer_1791819224372 (+1 more)
          - button "Hide Scores" [ref=e151] [cursor=pointer]
        - generic [ref=e152]:
          - generic [ref=e154]:
            - button "Not Yet Administered General Information–Where" [ref=e155] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e156]
              - generic [ref=e160]: General Information–Where
            - button "Skip test" [ref=e161] [cursor=pointer]: ✕
          - generic [ref=e162]:
            - generic [ref=e163]:
              - button "Complete General Information–What" [disabled] [pressed] [ref=e164]:
                - img "Complete" [ref=e165]
                - generic [ref=e169]: General Information–What
              - button "Skip test" [ref=e170] [cursor=pointer]: ✕
            - generic [ref=e171]:
              - generic [ref=e172]:
                - generic [ref=e173]:
                  - generic [ref=e174]: SS
                  - generic [ref=e175]: N/A
                - generic [ref=e176]:
                  - generic [ref=e177]: PR
                  - generic [ref=e178]: N/A
              - generic [ref=e179]:
                - generic [ref=e180]:
                  - generic [ref=e181]: AE
                  - generic [ref=e182]: N/A
                - generic [ref=e183]:
                  - generic [ref=e184]: GE
                  - generic [ref=e185]: N/A
          - generic [ref=e187]:
            - button "Not Yet Administered Academic Facts" [ref=e188] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e189]
              - generic [ref=e193]: Academic Facts
            - button "Skip test" [ref=e194] [cursor=pointer]: ✕
        - button "+ Add Test" [ref=e195] [cursor=pointer]
```

# Test source

```ts
  6283 |       } else {
  6284 |         throw new Error(
  6285 |           `The ${typeOfTest} didnt match with any of the conditions provided`
  6286 |         );
  6287 |       }
  6288 |       await this.plainNextButtonOrEndButton.click();
  6289 |       if (
  6290 |         (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
  6291 |       ) {
  6292 |         break;
  6293 |       }
  6294 |     }
  6295 |   }
  6296 |     async pickTheTestNeeded(testName: string, student:StudentPage) {
  6297 |         await this.page.bringToFront();
  6298 |         await this.page.waitForTimeout(2000);
  6299 | 
  6300 |         const testSessionIntro: Locator = await this.page.locator("//b[text()='Test Session Introduction']");
  6301 |         if (await testSessionIntro.isVisible()) {
  6302 |             for (let i = 1; i <= 3; i++) {
  6303 |                 await this.page.waitForTimeout(2000);
  6304 |                 if (await this.plainNextButtonOrEndButton.isEnabled()) {
  6305 |                     if (i === 3) {
  6306 |                         await this.beginAdminButton.click();
  6307 |                     } else {
  6308 |                         await this.page.waitForTimeout(2000);
  6309 |                         await this.plainNextButtonOrEndButton.click();
  6310 |                     }
  6311 |                 } else {
  6312 |                     await this.plainNextButtonOrEndButton.waitFor({state: 'visible', timeout: 50000});
  6313 |                 }
  6314 |             }
  6315 |         }
  6316 |         if ((await this.administrationOverviewPageTestName.isVisible()) && (await this.administrationOverviewPageTestName.textContent()).includes(testName)) {
  6317 |             return;
  6318 |         } else {
  6319 |           for (let i = 0; i < 3; i++) {
  6320 |             if (await this.mainNavigation.isEnabled()) {
  6321 |               await this.page.waitForTimeout(1000);
  6322 |               await this.mainNavigation.click();
  6323 |               break;
  6324 |             }
  6325 |             await this.page.waitForTimeout(1000);
  6326 |           }
  6327 |           await this.mainNavigationTests.waitFor({
  6328 |             state: "visible",
  6329 |             timeout: 80000,
  6330 |           });
  6331 |           await this.page.waitForTimeout(1000);
  6332 |           await this.mainNavigationTests.click();
  6333 |           const testButton = this.page
  6334 |             .locator("//div[@class='TestList_mcs_testName']")
  6335 |             .getByText(testName, { exact: true });
  6336 |           await testButton.waitFor({ state: "visible", timeout: 10000 });
  6337 |           const selectedTestInLeftNav = this.page
  6338 |             .locator("//button[@class='plain-button svg-icon TestList_mcs_testButton']/descendant::div")
  6339 |             .getByText(testName, { exact: true });
  6340 |           const isDisabled = await selectedTestInLeftNav.isDisabled();
  6341 |           const buttonText = await testButton.textContent();
  6342 |           if (isDisabled && buttonText === testName) {
  6343 |             console.log(
  6344 |               `Test "${testName}" is already selected and disabled; closing menu`
  6345 |             );
  6346 |             const closeButton = this.page.locator(
  6347 |               "//button[@class='plain-button close-btn']"
  6348 |             );
  6349 |             await closeButton.waitFor({ state: "visible", timeout: 5000 });
  6350 |             await closeButton.click();
  6351 |           } else {
  6352 |           await testButton.click();
  6353 |           console.log(`Selected test "${testName}"`);
  6354 |         }
  6355 |         }
  6356 |         if (await this.syncDevicePopUp.isVisible()) {
  6357 |             await student.clickOnAcceptButton();
  6358 |             return;
  6359 |         }
  6360 |     }
  6361 | 
  6362 |   async getActualTestName() {
  6363 |     return await this.testNameAtAdminOverview.textContent();
  6364 |   }
  6365 | 
  6366 |   async clickOnLetsBeginButtonAndStartTest(testName: string, ssp: string) {
  6367 |     await this.letsBeginButton.waitFor({
  6368 |       state: "visible",
  6369 |       timeout: 5 * 60 * 1000,
  6370 |     });
  6371 | 
  6372 |     let actualTestName = await this.getActualTestName();
  6373 |     if (actualTestName != testName) {
  6374 |       await this.page.waitForTimeout(1000);
  6375 |       await this.mainNavigation.click();
  6376 |       await this.mainNavigationTests.click();
  6377 |       const testButton = this.page
  6378 |         .locator("//div[@class='TestList_mcs_testName']")
  6379 |         .getByText(testName, { exact: true });
  6380 |       const selectedTestInLeftNav = this.page
  6381 |         .locator("//button[@class='plain-button svg-icon TestList_mcs_testButton']/descendant::div")
  6382 |         .filter({ hasText: testName });
> 6383 |       const isDisabled = await selectedTestInLeftNav.isDisabled();
       |                                                      ^ TimeoutError: locator.isDisabled: Timeout 60000ms exceeded.
  6384 |       const buttonText = await testButton.textContent();
  6385 |       if (isDisabled && buttonText === testName) {
  6386 |         console.log(
  6387 |           `Test "${testName}" is already selected and disabled; closing menu`
  6388 |         );
  6389 |         const closeButton = this.page.locator(
  6390 |           "//button[@class='plain-button close-btn']"
  6391 |         );
  6392 |         await closeButton.waitFor({ state: "visible", timeout: 5000 });
  6393 |         await closeButton.click();
  6394 |       } else {
  6395 |         try {
  6396 |           await testButton.waitFor({ state: "visible", timeout: 10000 });
  6397 |           await testButton.click();
  6398 |         } catch {
  6399 |           // Test not present in left nav — add it via "+ Add Test", then re-select.
  6400 |           await this.addPlusTestsButton.click();
  6401 |           await this.searchTests.fill(testName);
  6402 |           await this.searchIcon.click();
  6403 |           await this.page.waitForTimeout(1000);
  6404 |           await this.selectTests.first().click();
  6405 |           await this.addTestsButton.click();
  6406 |           await this.page.waitForTimeout(2000);
  6407 |           await testButton.waitFor({ state: "visible", timeout: 10000 });
  6408 |           await testButton.click();
  6409 |         }
  6410 |       }
  6411 |       await this.page.waitForLoadState("domcontentloaded");
  6412 |       await this.page.waitForTimeout(1000);
  6413 |     }
  6414 |     actualTestName = await this.getActualTestName();
  6415 |     expect(actualTestName, {
  6416 |       message: "The test name didnt match at Administration Overview page",
  6417 |     }).toContain(testName);
  6418 |     console.log(actualTestName);
  6419 |     await this.letsBeginButton.click();
  6420 |     await this.page.waitForTimeout(1000);
  6421 |     if (ssp === "All Examinees") {
  6422 |       await this.startTestButton.click();
  6423 |     } else {
  6424 |       await this.setTheSuggestedStartingPointTo(ssp);
  6425 |       await this.page.waitForTimeout(1500);
  6426 |       await this.startTestButton.click();
  6427 |     }
  6428 |   }
  6429 | 
  6430 |   async clickOnLetsBeginAndResumeInProgressTest(testName: string) {
  6431 |     if (await this.closeNavigationButton.isVisible()) {
  6432 |       await this.closeNavigationButton.click();
  6433 |     }
  6434 | 
  6435 |     await this.letsBeginButton.waitFor({
  6436 |       state: "visible",
  6437 |       timeout: 5 * 60 * 1000,
  6438 |     });
  6439 | 
  6440 |     let actualTestName = await this.getActualTestName();
  6441 |     if (actualTestName != testName) {
  6442 |       await this.page.waitForTimeout(1000);
  6443 |       await this.mainNavigation.click();
  6444 |       await this.mainNavigationTests.click();
  6445 |       const testButton = this.page
  6446 |         .locator("//div[@class='TestList_mcs_testName']")
  6447 |         .getByText(testName, { exact: true });
  6448 |       await testButton.waitFor({ state: "visible", timeout: 10000 });
  6449 |       await testButton.click();
  6450 |       await this.page.waitForLoadState("domcontentloaded");
  6451 |       await this.page.waitForTimeout(1000);
  6452 |     }
  6453 |     actualTestName = await this.getActualTestName();
  6454 |     expect(actualTestName, {
  6455 |       message: "The test name didn't match at Administration Overview page",
  6456 |     }).toContain(testName);
  6457 | 
  6458 |     await this.letsBeginButton.click();
  6459 |     await this.page.waitForLoadState();
  6460 |     await this.page.waitForTimeout(1000);
  6461 |     await this.nextItemButton.click();
  6462 |     await this.page.waitForTimeout(1000);
  6463 |   }
  6464 | 
  6465 |   async endTestAndEnterReviewMode() {
  6466 |     await this.plainNextButtonOrEndButton.last().click();
  6467 |     await this.endSessionButton.waitFor({ state: "visible", timeout: 60000 });
  6468 |     await this.endSessionButton.click();
  6469 |     await this.reviewFromConfirmButton.waitFor({ state: "visible", timeout: 60000 });
  6470 |     await this.reviewFromConfirmButton.click();
  6471 |     await this.dashboardPage.waitForLoadingSpinnerToDisappear();
  6472 |   }
  6473 | 
  6474 |   async setTheSuggestedStartingPointTo(sspOption: string) {
  6475 |     await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  6476 |     await this.page.waitForTimeout(5000);
  6477 |     if (this.loading.isVisible())
  6478 |       await this.loading.waitFor({ state: "hidden", timeout: 3 * 60 * 1000 });
  6479 |     await this.sspDropDown.selectOption({ label: sspOption }, { timeout: 60000 });
  6480 |     await this.page.waitForTimeout(2000);
  6481 | 
  6482 |     try {
  6483 |       const selectedSsp = await this.page.$eval(
```