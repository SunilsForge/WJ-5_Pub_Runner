# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/InProgressTestAssignments.spec.ts >> Verify review mode for my 'In Progress' test assignments >> Administer a selective test and leave the test in diff statuses as a part of 'in progress' test assignment validation
- Location: src/tests/functional/InProgressTestAssignments.spec.ts:41:7

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for getByText('Academic Vocabulary', { exact: true })

```

# Test source

```ts
  991  |     await this.testAssignmentSubmittedPopUp.waitFor({
  992  |       state: "hidden",
  993  |       timeout: 2 * 60 * 1000,
  994  |     });
  995  |   }
  996  | 
  997  |   async addNewTestToBlock() {
  998  |     await this.addTestButton.click();
  999  |     await this.waitForLoadingSpinnerToDisappear();
  1000 |     await this.getCheckboxLocator('unchecked')
  1001 |       .first()
  1002 |       .click();
  1003 |     await this.addTestsButton.click();
  1004 |   }
  1005 | 
  1006 |   async skipFollowingTestFromTestsList(testName: string) {
  1007 |     await this.page
  1008 |       .locator(
  1009 |         `//div[contains(@class, 'testName')][text()='${testName}']//parent::button//following-sibling::button[contains(@class,'skipTest')]`,
  1010 |       )
  1011 |       .click();
  1012 |     await this.page.waitForLoadState("domcontentloaded");
  1013 |   }
  1014 | 
  1015 |   async addTestNotedAndFlag(item: string, notes: string, flad?: boolean) {
  1016 |     await this.clickFollowingItem(item);
  1017 |     await this.addNotes("test", notes);
  1018 |     await this.verifySavedNotes("test", notes);
  1019 |     await this.page.waitForTimeout(1000);
  1020 |     await this.flagIcon.click();
  1021 |     await this.page.waitForTimeout(1000);
  1022 |     await this.verifyFlagged();
  1023 |   }
  1024 | 
  1025 |   async addNotes(level: string, notes: string) {
  1026 |     await this.openNotesIcon.click();
  1027 |     await this.selectNotesDropdown(level);
  1028 |     await this.notesText.fill(notes);
  1029 |     await this.notesSaveButton.click();
  1030 |   }
  1031 | 
  1032 |   async verifySavedNotes(level: string, notes: string) {
  1033 |     await this.openNotesIcon.click();
  1034 |     await this.selectNotesDropdown(level);
  1035 |     await this.notesText.waitFor({ state: "visible" });
  1036 |     const text = await this.notesText.textContent();
  1037 |     expect.soft(text, "Notes not saved").toBe(notes);
  1038 |   }
  1039 | 
  1040 |   async selectNotesDropdown(option: string) {
  1041 |     await this.notesDropdown.waitFor({ state: "visible" });
  1042 |     await this.notesDropdown.selectOption({ value: option });
  1043 |     const selectedValue = await this.notesDropdown.inputValue();
  1044 |     expect.soft(selectedValue, "Dropdown selection mismatch").toBe(option);
  1045 |   }
  1046 | 
  1047 |   async verifyFlagged() {
  1048 |     await expect
  1049 |       .soft(this.flaggedForLaterText, "Flagged for later text not visible")
  1050 |       .toBeVisible();
  1051 |   }
  1052 | 
  1053 |   private async clickFollowingItem(item: string) {
  1054 |     await this.page
  1055 |       .locator(`//span[@class='item-text'][text()='${item}']`)
  1056 |       .click();
  1057 |   }
  1058 |   
  1059 | 
  1060 |   async pickTheTestNeeded(
  1061 |     testName: string,
  1062 |     examinee: StudentPage,
  1063 |   ) {
  1064 |     await this.page.bringToFront();
  1065 |     await this.page.waitForTimeout(Number(2000));
  1066 |     if (
  1067 |       (await this.administrationOverviewPageTestName.isVisible()) &&
  1068 |       (await this.administrationOverviewPageTestName.textContent()).includes(
  1069 |         testName,
  1070 |       )
  1071 |     )
  1072 |       return;
  1073 |     let popUpCheck: boolean = await this.syncDevicePopUp.isVisible();
  1074 |     const popUp: boolean = await this.page
  1075 |       .locator(".popup-mid-title")
  1076 |       .isVisible();
  1077 | 
  1078 |     if (popUpCheck) {
  1079 |       examinee.clickExamineeAcceptButton();
  1080 |     }
  1081 |     const topLine: Locator = await this.page.locator(".top-line");
  1082 |     console.log(`await topLine.isVisible() : ${await topLine.isVisible()}`);
  1083 |     await this.page.waitForTimeout(2000);
  1084 |     const introText: Locator = await this.page.locator(".intro-text");
  1085 |     console.log(`await introText.isVisible() = ${await introText.isVisible()}`);
  1086 |     if (await introText.isVisible()) {
  1087 |       await this.page.locator(".plain-button.menu-button").click();
  1088 |       await this.page.locator(".main .plain-button:nth-child(3)").click();
  1089 |       await this.page
  1090 |         .getByText(testName, { exact: true })
> 1091 |         .click();
       |          ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  1092 |     } else {
  1093 |       return;
  1094 |     }
  1095 |   }
  1096 | 
  1097 |   async waitForDashboardPageToLoad() {
  1098 |     await this.waitForMyTestAssignmentsToBeVisible();
  1099 |     await this.waitForLoadingSpinnerToDisappear();
  1100 |   }
  1101 | 
  1102 |   async getScoreLaterTests(): Promise<string[]> {
  1103 |     try {
  1104 |       const scoreLaterTests = this.getReviewModeTestsWithNameByStatus('score-later');
  1105 |       await scoreLaterTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1106 |       await this.page.waitForTimeout(5000);
  1107 |       const testNames: string[] = await scoreLaterTests.allTextContents();
  1108 |       return testNames;
  1109 |     } catch (error) {
  1110 |       console.error('Error getting score later tests:', error);
  1111 |       throw error;
  1112 |     }
  1113 |   }
  1114 | 
  1115 |   async getNeedAttentionTests(): Promise<string[]> {
  1116 |     try {
  1117 |       const needAttentionTests = this.getReviewModeTestsWithNameByStatus('score-error');
  1118 |       await needAttentionTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1119 |       const testNames = await needAttentionTests.allTextContents();
  1120 |       return testNames.map(name => name.trim());
  1121 |     } catch (error) {
  1122 |       console.error('Error getting need attention tests:', error);
  1123 |       throw error;
  1124 |     }
  1125 |   }
  1126 | 
  1127 |   async getInvalidatedTests(): Promise<string[]> {
  1128 |     try {
  1129 |       const invalidatedTests = this.getReviewModeTestsByStatus('invalidated');
  1130 |       await invalidatedTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1131 |       const testNames = await invalidatedTests.allTextContents();
  1132 |       return testNames.map(name => name.trim());
  1133 |     } catch (error) {
  1134 |       console.error('Error getting invalidated tests:', error);
  1135 |       throw error;
  1136 |     }
  1137 |   }
  1138 | 
  1139 |   async getFlaggedTestsWithItemData(): Promise<Record<string, Record<string, { response: string }>>> {
  1140 |     try {
  1141 |       const flaggedData: Record<string, Record<string, { response: string }>> = {};
  1142 | 
  1143 |       const testSections = this.page.locator('div.test-group h5');
  1144 |       const testNames = await testSections.allTextContents();
  1145 | 
  1146 |       for (const testName of testNames) {
  1147 |         flaggedData[testName] = {};
  1148 | 
  1149 |         const itemsSelector = "//h5[text()='" + testName + "']/following-sibling::button[not(preceding-sibling::h5[1][text()!='" + testName + "'])]";
  1150 |         const flaggedItems = await this.page.locator(itemsSelector).all();
  1151 | 
  1152 |         for (const item of flaggedItems) {
  1153 |           const itemName = await item.locator('.test-name').textContent() || '';
  1154 |           const score = await item.locator('.test-score').textContent() || '';
  1155 |           const scoreValue = score.replace('Score: ', '');
  1156 | 
  1157 |           let response: string;
  1158 | 
  1159 |           if (testName === 'Story Recall') {
  1160 |             response = `correct | ${scoreValue}`;
  1161 |           } else if (testName === 'Math Facts Fluency') {
  1162 |             response = scoreValue;
  1163 |           } else {
  1164 |             response = scoreValue === '1' ? 'correct' :
  1165 |               scoreValue === '0' ? 'incorrect' :
  1166 |                 scoreValue === '-' ? 'No Response' : scoreValue;
  1167 |           }
  1168 | 
  1169 |           flaggedData[testName][itemName] = { response };
  1170 |         }
  1171 | 
  1172 |         if (Object.keys(flaggedData[testName]).length === 0) {
  1173 |           delete flaggedData[testName];
  1174 |         }
  1175 |       }
  1176 | 
  1177 |       return flaggedData;
  1178 |     } catch (error) {
  1179 |       console.error('Error getting flagged items:', error);
  1180 |       throw error;
  1181 |     }
  1182 |   }
  1183 | 
  1184 |   async verifyFlaggedTestsWithItemData(expected: Record<string, Record<string, { response: string }>>,
  1185 |     actual: Record<string, Record<string, { response: string }>>) {
  1186 |     const mismatches: string[] = [];
  1187 | 
  1188 |     for (const testName of Object.keys(expected)) {
  1189 |       if (!actual[testName]) {
  1190 |         mismatches.push(`Test "${testName}" is missing from actual results`);
  1191 |         continue;
```