# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/InProgressTestAssignments.spec.ts >> Verify review mode for my 'In Progress' test assignments >> Administer a selective test and leave the test in diff statuses as a part of 'in progress' test assignment validation
- Location: src/tests/functional/InProgressTestAssignments.spec.ts:41:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'notes-modal\']//select') to be visible

```

# Test source

```ts
  959  |   async selectFollowingTestFromTestsList(testName: string) {
  960  |     await this.page
  961  |       .locator(`//div[contains(@class, 'testName')][text()='${testName}']`)
  962  |       .click();
  963  |   }
  964  | 
  965  |   async clickBackToReviewButton() {
  966  |     await this.backToReviewButton.last().click();
  967  |     await this.page.waitForLoadState("domcontentloaded");
  968  |     await this.waitForLoadingResultsToDisappear();
  969  |   }
  970  | 
  971  |   async waitForLoadingResultsToDisappear() {
  972  |     await this.loadingResults.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  973  |   }
  974  | 
  975  |   async changeResponse(
  976  |     item: string,
  977  |     initialResponse: number,
  978  |     updatedResponse: number,
  979  |   ) {
  980  |     await this.clickFollowingItem(item);
  981  |     await this.page.waitForTimeout(2000);
  982  |     await this.openNotesIcon.hover();
  983  |     await this.selectResponse(initialResponse);
  984  |     await this.page.waitForTimeout(3000);
  985  |     await this.selectResponse(updatedResponse);
  986  |     await this.page.waitForTimeout(2000);
  987  |   }
  988  | 
  989  |   private async selectResponse(response: number) {
  990  |     let button;
  991  | 
  992  |     if (response === 0) {
  993  |       button = this.incorrectOptionButton.first();
  994  |     } else if (response === 1) {
  995  |       button = this.correctOptionButton.first();
  996  |     } else {
  997  |       throw new Error(`Invalid response: ${response}`);
  998  |     }
  999  | 
  1000 |     await expect(button).toBeEnabled({ timeout: 5000 });
  1001 |     await button.click();
  1002 |   }
  1003 | 
  1004 |   async submitTestAssignment() {
  1005 |     await this.submitTestSetAndFinishAdministration.click();
  1006 |     await this.nextButton.click();
  1007 |     await this.submitTestSetAndFinishAdministration.last().click();
  1008 |     await this.page.waitForTimeout(2000);
  1009 |     await this.testAssignmentSubmittedPopUp.waitFor({
  1010 |       state: "hidden",
  1011 |       timeout: 2 * 60 * 1000,
  1012 |     });
  1013 |   }
  1014 | 
  1015 |   async addNewTestToBlock() {
  1016 |     await this.addTestButton.click();
  1017 |     await this.waitForLoadingSpinnerToDisappear();
  1018 |     await this.getCheckboxLocator('unchecked')
  1019 |       .first()
  1020 |       .click();
  1021 |     await this.addTestsButton.click();
  1022 |   }
  1023 | 
  1024 |   async skipFollowingTestFromTestsList(testName: string) {
  1025 |     await this.page
  1026 |       .locator(
  1027 |         `//div[contains(@class, 'testName')][text()='${testName}']//parent::button//following-sibling::button[contains(@class,'skipTest')]`,
  1028 |       )
  1029 |       .click();
  1030 |     await this.page.waitForLoadState("domcontentloaded");
  1031 |   }
  1032 | 
  1033 |   async addTestNotedAndFlag(item: string, notes: string, flad?: boolean) {
  1034 |     await this.clickFollowingItem(item);
  1035 |     await this.addNotes("test", notes);
  1036 |     await this.verifySavedNotes("test", notes);
  1037 |     await this.page.waitForTimeout(1000);
  1038 |     await this.flagIcon.click();
  1039 |     await this.page.waitForTimeout(1000);
  1040 |     await this.verifyFlagged();
  1041 |   }
  1042 | 
  1043 |   async addNotes(level: string, notes: string) {
  1044 |     await this.openNotesIcon.click();
  1045 |     await this.selectNotesDropdown(level);
  1046 |     await this.notesText.fill(notes);
  1047 |     await this.notesSaveButton.click();
  1048 |   }
  1049 | 
  1050 |   async verifySavedNotes(level: string, notes: string) {
  1051 |     await this.openNotesIcon.click();
  1052 |     await this.selectNotesDropdown(level);
  1053 |     await this.notesText.waitFor({ state: "visible" });
  1054 |     const text = await this.notesText.textContent();
  1055 |     expect.soft(text, "Notes not saved").toBe(notes);
  1056 |   }
  1057 | 
  1058 |   async selectNotesDropdown(option: string) {
> 1059 |     await this.notesDropdown.waitFor({ state: "visible" });
       |                              ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  1060 |     await this.notesDropdown.selectOption({ value: option });
  1061 |     const selectedValue = await this.notesDropdown.inputValue();
  1062 |     expect.soft(selectedValue, "Dropdown selection mismatch").toBe(option);
  1063 |   }
  1064 | 
  1065 |   async verifyFlagged() {
  1066 |     await expect
  1067 |       .soft(this.flaggedForLaterText, "Flagged for later text not visible")
  1068 |       .toBeVisible();
  1069 |   }
  1070 | 
  1071 |   private async clickFollowingItem(item: string) {
  1072 |     await this.page
  1073 |       .locator(`//span[@class='item-text'][text()='${item}']`)
  1074 |       .click();
  1075 |   }
  1076 |   
  1077 | 
  1078 |   async pickTheTestNeeded(
  1079 |     testName: string,
  1080 |     examinee: StudentPage,
  1081 |   ) {
  1082 |     await this.page.bringToFront();
  1083 |     await this.page.waitForTimeout(Number(2000));
  1084 |     if (
  1085 |       (await this.administrationOverviewPageTestName.isVisible()) &&
  1086 |       (await this.administrationOverviewPageTestName.textContent()).includes(
  1087 |         testName,
  1088 |       )
  1089 |     )
  1090 |       return;
  1091 |     let popUpCheck: boolean = await this.syncDevicePopUp.isVisible();
  1092 |     const popUp: boolean = await this.page
  1093 |       .locator(".popup-mid-title")
  1094 |       .isVisible();
  1095 | 
  1096 |     if (popUpCheck) {
  1097 |       examinee.clickExamineeAcceptButton();
  1098 |     }
  1099 |     console.log(`await administrationOverviewPageTestName.isVisible() : ${await this.administrationOverviewPageTestName.isVisible()}`);
  1100 |     await this.page.waitForTimeout(2000);
  1101 |     const introText: Locator = this.page.locator(".intro-text");
  1102 |     console.log(`await introText.isVisible() = ${await introText.isVisible()}`);
  1103 |     if (await introText.isVisible()) {
  1104 |       await this.mainNavigation.click();
  1105 |       await this.mainNavigationTests.click();
  1106 |       await this.page
  1107 |         .getByText(testName, { exact: true })
  1108 |         .click();
  1109 |     } else {
  1110 |       return;
  1111 |     }
  1112 |   }
  1113 | 
  1114 |   async waitForDashboardPageToLoad() {
  1115 |     await this.waitForMyTestAssignmentsToBeVisible();
  1116 |     await this.waitForLoadingSpinnerToDisappear();
  1117 |   }
  1118 | 
  1119 |   async getScoreLaterTests(): Promise<string[]> {
  1120 |     try {
  1121 |       const scoreLaterTests = this.getReviewModeTestsWithNameByStatus('score-later');
  1122 |       await scoreLaterTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1123 |       await this.page.waitForTimeout(5000);
  1124 |       const testNames: string[] = await scoreLaterTests.allTextContents();
  1125 |       return testNames;
  1126 |     } catch (error) {
  1127 |       console.error('Error getting score later tests:', error);
  1128 |       throw error;
  1129 |     }
  1130 |   }
  1131 | 
  1132 |   async getNeedAttentionTests(): Promise<string[]> {
  1133 |     try {
  1134 |       const needAttentionTests = this.getReviewModeTestsWithNameByStatus('score-error');
  1135 |       await needAttentionTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1136 |       const testNames = await needAttentionTests.allTextContents();
  1137 |       return testNames.map(name => name.trim());
  1138 |     } catch (error) {
  1139 |       console.error('Error getting need attention tests:', error);
  1140 |       throw error;
  1141 |     }
  1142 |   }
  1143 | 
  1144 |   async getInvalidatedTests(): Promise<string[]> {
  1145 |     try {
  1146 |       const invalidatedTests = this.getReviewModeTestsByStatus('invalidated');
  1147 |       await invalidatedTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1148 |       const testNames = await invalidatedTests.allTextContents();
  1149 |       return testNames.map(name => name.trim());
  1150 |     } catch (error) {
  1151 |       console.error('Error getting invalidated tests:', error);
  1152 |       throw error;
  1153 |     }
  1154 |   }
  1155 | 
  1156 |   async getFlaggedTestsWithItemData(): Promise<Record<string, Record<string, { response: string }>>> {
  1157 |     try {
  1158 |       const flaggedData: Record<string, Record<string, { response: string }>> = {};
  1159 | 
```