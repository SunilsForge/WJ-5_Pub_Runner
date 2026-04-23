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
  1006 |     await this.testAssignmentSubmittedPopUp.waitFor({
  1007 |       state: "hidden",
  1008 |       timeout: 2 * 60 * 1000,
  1009 |     });
  1010 |   }
  1011 | 
  1012 |   async addNewTestToBlock() {
  1013 |     await this.addTestButton.click();
  1014 |     await this.waitForLoadingSpinnerToDisappear();
  1015 |     await this.getCheckboxLocator('unchecked')
  1016 |       .first()
  1017 |       .click();
  1018 |     await this.addTestsButton.click();
  1019 |   }
  1020 | 
  1021 |   async skipFollowingTestFromTestsList(testName: string) {
  1022 |     await this.page
  1023 |       .locator(
  1024 |         `//div[contains(@class, 'testName')][text()='${testName}']//parent::button//following-sibling::button[contains(@class,'skipTest')]`,
  1025 |       )
  1026 |       .click();
  1027 |     await this.page.waitForLoadState("domcontentloaded");
  1028 |   }
  1029 | 
  1030 |   async addTestNotedAndFlag(item: string, notes: string, flad?: boolean) {
  1031 |     await this.clickFollowingItem(item);
  1032 |     await this.addNotes("test", notes);
  1033 |     await this.verifySavedNotes("test", notes);
  1034 |     await this.page.waitForTimeout(1000);
  1035 |     await this.flagIcon.click();
  1036 |     await this.page.waitForTimeout(1000);
  1037 |     await this.verifyFlagged();
  1038 |   }
  1039 | 
  1040 |   async addNotes(level: string, notes: string) {
  1041 |     await this.openNotesIcon.click();
  1042 |     await this.selectNotesDropdown(level);
  1043 |     await this.notesText.fill(notes);
  1044 |     await this.notesSaveButton.click();
  1045 |   }
  1046 | 
  1047 |   async verifySavedNotes(level: string, notes: string) {
  1048 |     await this.openNotesIcon.click();
  1049 |     await this.selectNotesDropdown(level);
  1050 |     await this.notesText.waitFor({ state: "visible" });
  1051 |     const text = await this.notesText.textContent();
  1052 |     expect.soft(text, "Notes not saved").toBe(notes);
  1053 |   }
  1054 | 
  1055 |   async selectNotesDropdown(option: string) {
  1056 |     await this.notesDropdown.waitFor({ state: "visible" });
  1057 |     await this.notesDropdown.selectOption({ value: option });
  1058 |     const selectedValue = await this.notesDropdown.inputValue();
  1059 |     expect.soft(selectedValue, "Dropdown selection mismatch").toBe(option);
  1060 |   }
  1061 | 
  1062 |   async verifyFlagged() {
  1063 |     await expect
  1064 |       .soft(this.flaggedForLaterText, "Flagged for later text not visible")
  1065 |       .toBeVisible();
  1066 |   }
  1067 | 
  1068 |   private async clickFollowingItem(item: string) {
  1069 |     await this.page
  1070 |       .locator(`//span[@class='item-text'][text()='${item}']`)
  1071 |       .click();
  1072 |   }
  1073 |   
  1074 | 
  1075 |   async pickTheTestNeeded(
  1076 |     testName: string,
  1077 |     examinee: StudentPage,
  1078 |   ) {
  1079 |     await this.page.bringToFront();
  1080 |     await this.page.waitForTimeout(Number(2000));
  1081 |     if (
  1082 |       (await this.administrationOverviewPageTestName.isVisible()) &&
  1083 |       (await this.administrationOverviewPageTestName.textContent()).includes(
  1084 |         testName,
  1085 |       )
  1086 |     )
  1087 |       return;
  1088 |     let popUpCheck: boolean = await this.syncDevicePopUp.isVisible();
  1089 |     const popUp: boolean = await this.page
  1090 |       .locator(".popup-mid-title")
  1091 |       .isVisible();
  1092 | 
  1093 |     if (popUpCheck) {
  1094 |       examinee.clickExamineeAcceptButton();
  1095 |     }
  1096 |     const topLine: Locator = await this.page.locator(".top-line");
  1097 |     console.log(`await topLine.isVisible() : ${await topLine.isVisible()}`);
  1098 |     await this.page.waitForTimeout(2000);
  1099 |     const introText: Locator = await this.page.locator(".intro-text");
  1100 |     console.log(`await introText.isVisible() = ${await introText.isVisible()}`);
  1101 |     if (await introText.isVisible()) {
  1102 |       await this.page.locator(".plain-button.menu-button").click();
  1103 |       await this.page.locator(".main .plain-button:nth-child(3)").click();
  1104 |       await this.page
  1105 |         .getByText(testName, { exact: true })
> 1106 |         .click();
       |          ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  1107 |     } else {
  1108 |       return;
  1109 |     }
  1110 |   }
  1111 | 
  1112 |   async waitForDashboardPageToLoad() {
  1113 |     await this.waitForMyTestAssignmentsToBeVisible();
  1114 |     await this.waitForLoadingSpinnerToDisappear();
  1115 |   }
  1116 | 
  1117 |   async getScoreLaterTests(): Promise<string[]> {
  1118 |     try {
  1119 |       const scoreLaterTests = this.getReviewModeTestsWithNameByStatus('score-later');
  1120 |       await scoreLaterTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1121 |       await this.page.waitForTimeout(5000);
  1122 |       const testNames: string[] = await scoreLaterTests.allTextContents();
  1123 |       return testNames;
  1124 |     } catch (error) {
  1125 |       console.error('Error getting score later tests:', error);
  1126 |       throw error;
  1127 |     }
  1128 |   }
  1129 | 
  1130 |   async getNeedAttentionTests(): Promise<string[]> {
  1131 |     try {
  1132 |       const needAttentionTests = this.getReviewModeTestsWithNameByStatus('score-error');
  1133 |       await needAttentionTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1134 |       const testNames = await needAttentionTests.allTextContents();
  1135 |       return testNames.map(name => name.trim());
  1136 |     } catch (error) {
  1137 |       console.error('Error getting need attention tests:', error);
  1138 |       throw error;
  1139 |     }
  1140 |   }
  1141 | 
  1142 |   async getInvalidatedTests(): Promise<string[]> {
  1143 |     try {
  1144 |       const invalidatedTests = this.getReviewModeTestsByStatus('invalidated');
  1145 |       await invalidatedTests.first().waitFor({ state: 'visible', timeout: 60000 });
  1146 |       const testNames = await invalidatedTests.allTextContents();
  1147 |       return testNames.map(name => name.trim());
  1148 |     } catch (error) {
  1149 |       console.error('Error getting invalidated tests:', error);
  1150 |       throw error;
  1151 |     }
  1152 |   }
  1153 | 
  1154 |   async getFlaggedTestsWithItemData(): Promise<Record<string, Record<string, { response: string }>>> {
  1155 |     try {
  1156 |       const flaggedData: Record<string, Record<string, { response: string }>> = {};
  1157 | 
  1158 |       const testSections = this.page.locator('div.test-group h5');
  1159 |       const testNames = await testSections.allTextContents();
  1160 | 
  1161 |       for (const testName of testNames) {
  1162 |         flaggedData[testName] = {};
  1163 | 
  1164 |         const itemsSelector = "//h5[text()='" + testName + "']/following-sibling::button[not(preceding-sibling::h5[1][text()!='" + testName + "'])]";
  1165 |         const flaggedItems = await this.page.locator(itemsSelector).all();
  1166 | 
  1167 |         for (const item of flaggedItems) {
  1168 |           const itemName = await item.locator('.test-name').textContent() || '';
  1169 |           const score = await item.locator('.test-score').textContent() || '';
  1170 |           const scoreValue = score.replace('Score: ', '');
  1171 | 
  1172 |           let response: string;
  1173 | 
  1174 |           if (testName === 'Story Recall') {
  1175 |             response = `correct | ${scoreValue}`;
  1176 |           } else if (testName === 'Math Facts Fluency') {
  1177 |             response = scoreValue;
  1178 |           } else {
  1179 |             response = scoreValue === '1' ? 'correct' :
  1180 |               scoreValue === '0' ? 'incorrect' :
  1181 |                 scoreValue === '-' ? 'No Response' : scoreValue;
  1182 |           }
  1183 | 
  1184 |           flaggedData[testName][itemName] = { response };
  1185 |         }
  1186 | 
  1187 |         if (Object.keys(flaggedData[testName]).length === 0) {
  1188 |           delete flaggedData[testName];
  1189 |         }
  1190 |       }
  1191 | 
  1192 |       return flaggedData;
  1193 |     } catch (error) {
  1194 |       console.error('Error getting flagged items:', error);
  1195 |       throw error;
  1196 |     }
  1197 |   }
  1198 | 
  1199 |   async verifyFlaggedTestsWithItemData(expected: Record<string, Record<string, { response: string }>>,
  1200 |     actual: Record<string, Record<string, { response: string }>>) {
  1201 |     const mismatches: string[] = [];
  1202 | 
  1203 |     for (const testName of Object.keys(expected)) {
  1204 |       if (!actual[testName]) {
  1205 |         mismatches.push(`Test "${testName}" is missing from actual results`);
  1206 |         continue;
```