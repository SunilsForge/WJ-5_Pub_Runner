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
  1031 |     const skipConfirmPopup = this.page.locator("div[role='alertdialog']");
  1032 |     if (await skipConfirmPopup.isVisible({ timeout: 3000 }).catch(() => false)) {
  1033 |       await skipConfirmPopup.locator("//button[text()='Yes, skip']").click();
  1034 |       await this.page.waitForLoadState("domcontentloaded");
  1035 |     }
  1036 |   }
  1037 | 
  1038 |   async addTestNotedAndFlag(item: string, notes: string, flad?: boolean) {
  1039 |     await this.clickFollowingItem(item);
  1040 |     await this.addNotes("test", notes);
  1041 |     await this.verifySavedNotes("test", notes);
  1042 |     await this.page.waitForTimeout(1000);
  1043 |     await this.flagIcon.click();
  1044 |     await this.page.waitForTimeout(1000);
  1045 |     await this.verifyFlagged();
  1046 |   }
  1047 | 
  1048 |   async addNotes(level: string, notes: string) {
  1049 |     await this.openNotesIcon.click();
  1050 |     await this.selectNotesDropdown(level);
  1051 |     await this.notesText.fill(notes);
  1052 |     await this.notesSaveButton.click();
  1053 |   }
  1054 | 
  1055 |   async verifySavedNotes(level: string, notes: string) {
  1056 |     await this.openNotesIcon.click();
  1057 |     await this.selectNotesDropdown(level);
  1058 |     await this.notesText.waitFor({ state: "visible" });
  1059 |     const text = await this.notesText.textContent();
  1060 |     expect.soft(text, "Notes not saved").toBe(notes);
  1061 |   }
  1062 | 
  1063 |   async selectNotesDropdown(option: string) {
> 1064 |     await this.notesDropdown.waitFor({ state: "visible" });
       |                              ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  1065 |     await this.notesDropdown.selectOption({ value: option });
  1066 |     const selectedValue = await this.notesDropdown.inputValue();
  1067 |     expect.soft(selectedValue, "Dropdown selection mismatch").toBe(option);
  1068 |   }
  1069 | 
  1070 |   async verifyFlagged() {
  1071 |     await expect
  1072 |       .soft(this.flaggedForLaterText, "Flagged for later text not visible")
  1073 |       .toBeVisible();
  1074 |   }
  1075 | 
  1076 |   private async clickFollowingItem(item: string) {
  1077 |     await this.page
  1078 |       .locator(`//span[@class='item-text'][text()='${item}']`)
  1079 |       .click();
  1080 |   }
  1081 |   
  1082 | 
  1083 |   async pickTheTestNeeded(
  1084 |     testName: string,
  1085 |     examinee: StudentPage,
  1086 |   ) {
  1087 |     await this.page.bringToFront();
  1088 |     await this.page.waitForTimeout(Number(2000));
  1089 |     if (
  1090 |       (await this.administrationOverviewPageTestName.isVisible()) &&
  1091 |       (await this.administrationOverviewPageTestName.textContent()).includes(
  1092 |         testName,
  1093 |       )
  1094 |     )
  1095 |       return;
  1096 |     let popUpCheck: boolean = await this.syncDevicePopUp.isVisible();
  1097 |     const popUp: boolean = await this.page
  1098 |       .locator(".popup-mid-title")
  1099 |       .isVisible();
  1100 | 
  1101 |     if (popUpCheck) {
  1102 |       examinee.clickExamineeAcceptButton();
  1103 |     }
  1104 |     console.log(`await administrationOverviewPageTestName.isVisible() : ${await this.administrationOverviewPageTestName.isVisible()}`);
  1105 |     await this.page.waitForTimeout(2000);
  1106 |     const introText: Locator = this.page.locator(".intro-text");
  1107 |     console.log(`await introText.isVisible() = ${await introText.isVisible()}`);
  1108 |     if (await introText.isVisible()) {
  1109 |       await this.mainNavigation.click();
  1110 |       await this.mainNavigationTests.click();
  1111 |       await this.page
  1112 |         .getByText(testName, { exact: true })
  1113 |         .click();
  1114 |     } else {
  1115 |       return;
  1116 |     }
  1117 |   }
  1118 | 
  1119 |   async waitForDashboardPageToLoad() {
  1120 |     await this.waitForMyTestAssignmentsToBeVisible();
  1121 |     await this.waitForLoadingSpinnerToDisappear();
  1122 |   }
  1123 | 
  1124 |   async getScoreLaterTests(): Promise<string[]> {
  1125 |     try {
  1126 |       const scoreLaterTests = this.getReviewModeTestsWithNameByStatus('score-later');
  1127 |       await scoreLaterTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1128 |       await this.page.waitForTimeout(5000);
  1129 |       const testNames: string[] = await scoreLaterTests.allTextContents();
  1130 |       return testNames;
  1131 |     } catch (error) {
  1132 |       console.error('Error getting score later tests:', error);
  1133 |       throw error;
  1134 |     }
  1135 |   }
  1136 | 
  1137 |   async getNeedAttentionTests(): Promise<string[]> {
  1138 |     try {
  1139 |       const needAttentionTests = this.getReviewModeTestsWithNameByStatus('score-error');
  1140 |       await needAttentionTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1141 |       const testNames = await needAttentionTests.allTextContents();
  1142 |       return testNames.map(name => name.trim());
  1143 |     } catch (error) {
  1144 |       console.error('Error getting need attention tests:', error);
  1145 |       throw error;
  1146 |     }
  1147 |   }
  1148 | 
  1149 |   async getInvalidatedTests(): Promise<string[]> {
  1150 |     try {
  1151 |       const invalidatedTests = this.getReviewModeTestsByStatus('invalidated');
  1152 |       await invalidatedTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1153 |       const testNames = await invalidatedTests.allTextContents();
  1154 |       return testNames.map(name => name.trim());
  1155 |     } catch (error) {
  1156 |       console.error('Error getting invalidated tests:', error);
  1157 |       throw error;
  1158 |     }
  1159 |   }
  1160 | 
  1161 |   async getFlaggedTestsWithItemData(): Promise<Record<string, Record<string, { response: string }>>> {
  1162 |     try {
  1163 |       const flaggedData: Record<string, Record<string, { response: string }>> = {};
  1164 | 
```