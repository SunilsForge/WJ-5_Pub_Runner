# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/SubmittedTestAssignments.spec.ts >> I want the ability to launch into review mode for my submitted test assignments >> Validate different scenarios in submitted test assignment in review mode
- Location: src/tests/functional/SubmittedTestAssignments.spec.ts:168:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('.plain-button.menu-button')
    - locator resolved to <button aria-label="Main Navigation" class="plain-button menu-button">…</button>
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
- generic [active]:
  - img [ref=e2]:
    - generic [ref=e4]: Loading - 0%
  - dialog "Administration Overview for Oral Vocabulary–Synonyms" [ref=e7]:
    - banner [ref=e8]:
      - button "Main Navigation" [ref=e9] [cursor=pointer]
      - generic "Oral Vocabulary–Synonyms" [ref=e10] [cursor=pointer]:
        - generic [ref=e11]: Oral Vocabulary–Synonyms
      - 'button "N60201A66003, Annamarie Age: 5y Grade: Kindergarten" [ref=e14] [cursor=pointer]':
        - img [ref=e15]
        - generic [ref=e18]:
          - generic [ref=e19]: N60201A66003, Annamarie
          - generic [ref=e20]: "Age: 5y Grade: Kindergarten"
    - generic [ref=e22]:
      - heading "Oral Vocabulary–Synonyms" [level=2] [ref=e23]
      - generic [ref=e24]:
        - text: Read the instructions below or
        - button "begin the test." [disabled] [ref=e25]
    - generic [ref=e26]:
      - heading "Things to Know:" [level=2] [ref=e28]
      - generic [ref=e32]: This test presents items via audio recording.
      - generic [ref=e36]: This test uses voice capture.
      - button "Check Audio Settings" [ref=e37] [cursor=pointer]
    - generic [ref=e38]:
      - paragraph [ref=e39]: Administration Overview
      - generic [ref=e40]:
        - generic [ref=e41]: ✦
        - paragraph [ref=e43]: Before testing, adjust the volume to a comfortably loud level on the examinee’s headphones or tablet speaker.
      - generic [ref=e44]:
        - generic [ref=e45]: ✦
        - paragraph [ref=e47]: Look away from the examinee while an item is being presented from the audio recording. After the two beeps, look expectantly at the examinee.
      - generic [ref=e48]:
        - generic [ref=e49]: ✦
        - paragraph [ref=e51]:
          - text: "Basal: 5 consecutive lowest-numbered items administered correct or Item 1"
          - text: "Ceiling: 5 consecutive highest-numbered items administered incorrect and no higher-numbered items administered are correct, or the last item on the test"
      - generic [ref=e52]:
        - generic [ref=e53]: ✦
        - paragraph [ref=e55]:
          - text: "Unless the scoring key indicates otherwise, accept only one-word responses as correct. If the examinee gives a two-word response, say:"
          - strong [ref=e56]:
            - generic "* Tell me just one word. *"
            - generic [ref=e58]: Tell me just one word.
          - text: "Very young examinees may sometimes respond to this query by saying a word that is unrelated to the item. If that happens, redirect the examinee by saying:"
          - strong [ref=e59]:
            - generic "* Tell me just one word for [word]. *"
            - generic [ref=e61]: Tell me just one word for [word].
      - generic [ref=e62]:
        - generic [ref=e63]: ✦
        - paragraph [ref=e65]: Do not penalize the examinee for mispronunciations resulting from articulation errors, dialect variations, or regional speech patterns.
      - generic [ref=e66]:
        - generic [ref=e67]: ✦
        - paragraph [ref=e69]: The platform will administer Oral Vocabulary–Synonyms first, followed immediately by Oral Vocabulary–Antonyms.
      - generic [ref=e70]:
        - generic [ref=e71]: ✦
        - paragraph [ref=e73]: Know the exact pronunciation of each test item before administering this test.
      - generic [ref=e74]:
        - generic [ref=e75]: ✦
        - paragraph [ref=e77]: Present Sample Item A orally. Present Sample Item B and all test items from the audio recording.
      - generic [ref=e78]:
        - generic [ref=e79]: ✦
        - paragraph [ref=e81]: If the examinee demonstrates difficulty with the audio recording, you may present all items orally. If presenting items orally, say each item exactly as it is presented on the audio recording.
      - generic [ref=e82]:
        - generic [ref=e83]: ✦
        - paragraph [ref=e85]: The platform alerts you when 30 seconds have elapsed on any test item. Encourage the examinee to respond. If the examinee does not appear to be actively engaged in the item, select No Response.
      - generic [ref=e86]:
        - generic [ref=e87]: ✦
        - paragraph [ref=e89]: Score a response correct if it differs from the correct response(s) provided only in verb tense or number (singular/plural), unless the scoring key indicates otherwise.
      - generic [ref=e90]:
        - generic [ref=e91]: ✦
        - paragraph [ref=e93]: Score a response incorrect if the examinee substitutes a different part of speech, such as a noun for a verb, unless the scoring key indicates otherwise.
      - generic [ref=e94]:
        - generic [ref=e95]: ✦
        - paragraph [ref=e97]: You may repeat any item on this test if the examinee requests it.
      - generic [ref=e98]:
        - generic [ref=e99]: ✦
        - paragraph [ref=e101]: This test contains one or more Sample Items.
      - generic [ref=e102]:
        - generic [ref=e103]: ✦
        - paragraph [ref=e105]: The platform selects an appropriate starting point based on the examinee’s age or grade/education level.
      - generic [ref=e106]:
        - generic [ref=e107]: ✦
        - paragraph [ref=e109]: The test ends when the examinee has met the basal and ceiling requirements.
      - paragraph [ref=e110]: Scoring
      - generic [ref=e111]:
        - generic [ref=e112]: ✦
        - paragraph [ref=e114]: If the examinee provides a response that requires querying, click the response and follow the instructions to query for more information. Then select the response option from the scoring key that matches the examinee’s next response.
      - generic [ref=e115]:
        - generic [ref=e116]: ✦
        - paragraph [ref=e118]: The platform assigns 1 point for correct responses and 0 points for incorrect responses.
      - generic [ref=e119]:
        - generic [ref=e120]: ✦
        - paragraph [ref=e122]: The platform computes the total test score by summing the item scores for all administered items and adding 1 point for each unadministered item below the basal.
      - generic [ref=e123]:
        - generic [ref=e124]: ✦
        - paragraph [ref=e126]: For each item administered, select the response option from the scoring key that matches the examinee’s response. If the examinee provides a response that is not listed in the scoring key, use the Other option to assign it a score of 1 (correct) or 0 (incorrect).
    - generic [ref=e127]:
      - button "Letʼs Begin" [ref=e128] [cursor=pointer]
      - button "SCROLL FOR MORE ↓" [ref=e129] [cursor=pointer]:
        - text: SCROLL
        - text: FOR MORE
        - text: ↓
```

# Test source

```ts
  802  |     });
  803  |   }
  804  | 
  805  |   async waitForMyTestAssignmentsToBeVisible() {
  806  |     await this.myTestAssignmentsText.waitFor({
  807  |       state: "visible",
  808  |       timeout: 2 * 60 * 1000,
  809  |     });
  810  |     expect(await this.myTestAssignmentsText.isVisible(), "myTestAssignmentsText is not visible").toBeTruthy();
  811  |   }
  812  | 
  813  |   async verifyTestSetStatusAtMyTestAssignmentsDashboard(
  814  |     examineeId: string,
  815  |     status: string,
  816  |     scenario: string = "Not Specified",
  817  |   ) {
  818  |     await this.page.waitForTimeout(3000);
  819  |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  820  |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  821  |     await this.page.waitForTimeout(3000);
  822  |     expect
  823  |       .soft(firstRowDetails.status, "Status not matching =" + scenario)
  824  |       .toContain(status);
  825  |   }
  826  | 
  827  |   async getTheTestAssignmentsRowDetails(rowIndex: number) {
  828  |     await this.page.waitForLoadState("domcontentloaded");
  829  |     await this.waitForLoadingSpinnerToDisappear();
  830  |     await this.page.waitForTimeout(1000);
  831  | 
  832  |     const row = this.myTestAssignmentsRow.nth(rowIndex - 1);
  833  | 
  834  |     const [examinee, testSet, daysLeftEdit, status] = await Promise.all([
  835  |       row.locator('td:nth-child(1)').textContent(),
  836  |       row.locator('td:nth-child(2)').textContent(),
  837  |       row.locator('td:nth-child(3)').textContent(),
  838  |       row.locator('td:nth-child(4)').textContent(),
  839  |     ]);
  840  | 
  841  |     return {
  842  |       examinee: examinee?.trim(),
  843  |       testSet: testSet?.trim(),
  844  |       daysLeftEdit: daysLeftEdit?.trim(),
  845  |       status: status?.trim(),
  846  |     };
  847  |   }
  848  | 
  849  |   async searchForExamineeAtSearchMyTestAssignments(examineeName: string) {
  850  |     await this.searchTestAssignments(examineeName);
  851  |     await expect(
  852  |       this.rowButton,
  853  |       "Examinee is either not founf or too many results",
  854  |     ).toHaveCount(1);
  855  |   }
  856  |   async clickOnFirstRow() {
  857  |     await this.rowButton
  858  |       .first()
  859  |       .locator("td:nth-child(1) button")
  860  |       .click({ force: true });
  861  |     await this.page.waitForTimeout(2000);
  862  |     await this.waitForLoadingSpinnerToDisappear();
  863  |   }
  864  | 
  865  |   async clickOnRowByTestSetName(testSetName: string) {
  866  |     const rowCount = await this.myTestAssignmentsRow.count();
  867  |     for (let i = 0; i < rowCount; i++) {
  868  |       const row = this.myTestAssignmentsRow.nth(i);
  869  |       const testSet = await row.locator('td:nth-child(2) button span').textContent();
  870  |       if (testSet?.trim() === testSetName) {
  871  |         await row.locator('td:nth-child(1) button').click({ force: true });
  872  |         await this.page.waitForTimeout(2000);
  873  |         await this.waitForLoadingSpinnerToDisappear();
  874  |         return;
  875  |       }
  876  |     }
  877  |     throw new Error(`No row found with test set name: "${testSetName}"`);
  878  |   }
  879  | 
  880  |   async generateReport(examineeId: string): Promise<[Page, Page]> {
  881  |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  882  |     await this.waitForLoadingSpinnerToDisappear();
  883  | 
  884  |     // await this.generateReportIcon.first().click();
  885  |     await this.getLinkButton('ellipsis').click();
  886  |     await this.page.locator("//button[text()='Generate Report']").click();
  887  | 
  888  |     await this.waitForLoadingIconToDisappear();
  889  |     await this.nextButton.click();
  890  |     await this.nextButton.click();
  891  | 
  892  |     const [newPage] = await Promise.all([
  893  |       this.page.context().waitForEvent("page"),
  894  |       this.generateReportButton.last().click(),
  895  |     ]);
  896  | 
  897  |     return [this.page, newPage] as [Page, Page];
  898  |   }
  899  | 
  900  |   async goToDashboardFromMainNavigation() {
  901  |     await this.page.bringToFront();
> 902  |     await this.mainNavigation.click();
       |                               ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  903  |     await this.mainNavigationHome.click();
  904  |     await this.areYouSureYesButton.click();
  905  |     await this.waitForLoadingSpinnerToDisappear();
  906  |   }
  907  | 
  908  |   async closeLaunchTestSessionPopUp() {
  909  |     await this.closeSessionIntroCrossIcon.click();
  910  |     await this.waitForLoadingSpinnerToDisappear();
  911  |   }
  912  | 
  913  |   async clickOnReviewMode() {
  914  |     await this.reviewModeButton.click();
  915  |   }
  916  | 
  917  |   async getStatusOfSubmitTestAssignmentButton() {
  918  |     await this.submitTestSetAndFinishAdministration.waitFor({
  919  |       state: "visible",
  920  |       timeout: 2 * 60 * 1000,
  921  |     });
  922  |     await this.page.waitForTimeout(3000);
  923  |     return await this.submitTestSetAndFinishAdministration.isDisabled();
  924  |   }
  925  | 
  926  |   async verifyReviewModeDashboardIsVisible() {
  927  |     await this.reviewModeDashboardHeader.waitFor({
  928  |       state: "visible",
  929  |       timeout: 2 * 60 * 1000,
  930  |     });
  931  |     await expect(this.reviewModeDashboardHeader).toBeVisible();
  932  |     await this.page.waitForTimeout(2000);
  933  |   }
  934  | 
  935  |   async verifyAdministrationSummaryIsVisible() {
  936  |    await this.waitForLoadingInnerToDisappear();
  937  |     await this.administrationSummaryHeader.waitFor({
  938  |       state: "visible",
  939  |       timeout: 1 * 60 * 1000,
  940  |     });
  941  |     await expect(this.administrationSummaryHeader).toBeVisible();
  942  |     await this.page.waitForTimeout(2000);
  943  |   }
  944  | 
  945  |   private async waitForLoadingInnerToDisappear() {
  946  |         try {
  947  |       await this.loadingIcon.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  948  |     } catch (error) {
  949  |       await this.page.reload();
  950  |       console.error("Loading icon did not disappear in time:", error);
  951  |     }
  952  | 
  953  |   }
  954  | 
  955  |   async exitReviewMode() {
  956  |     await this.exitReviewModeButton.click();
  957  |     await this.waitForLoadingSpinnerToDisappear();
  958  |   }
  959  | 
  960  |   async selectFollowingTestFromTestsList(testName: string) {
  961  |     await this.page
  962  |       .locator(`//div[contains(@class, 'testName')][text()='${testName}']`)
  963  |       .click();
  964  |   }
  965  | 
  966  |   async clickBackToReviewButton() {
  967  |     await this.backToReviewButton.last().click();
  968  |     await this.page.waitForLoadState("domcontentloaded");
  969  |     await this.waitForLoadingResultsToDisappear();
  970  |   }
  971  | 
  972  |   async waitForLoadingResultsToDisappear() {
  973  |     await this.loadingResults.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  974  |   }
  975  | 
  976  |   async changeResponse(
  977  |     item: string,
  978  |     initialResponse: number,
  979  |     updatedResponse: number,
  980  |   ) {
  981  |     await this.clickFollowingItem(item);
  982  |     await this.page.waitForTimeout(2000);
  983  |     await this.openNotesIcon.hover();
  984  |     await this.selectResponse(initialResponse);
  985  |     await this.page.waitForTimeout(3000);
  986  |     await this.selectResponse(updatedResponse);
  987  |     await this.page.waitForTimeout(2000);
  988  |   }
  989  | 
  990  |   private async selectResponse(response: number) {
  991  |     let button;
  992  | 
  993  |     if (response === 0) {
  994  |       button = this.incorrectOptionButton.first();
  995  |     } else if (response === 1) {
  996  |       button = this.correctOptionButton.first();
  997  |     } else {
  998  |       throw new Error(`Invalid response: ${response}`);
  999  |     }
  1000 | 
  1001 |     await expect(button).toBeEnabled({ timeout: 5000 });
  1002 |     await button.click();
```