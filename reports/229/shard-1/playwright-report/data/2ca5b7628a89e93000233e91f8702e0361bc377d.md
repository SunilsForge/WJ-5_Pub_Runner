# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content_validation/webkit/SPAREL_pub_webkit.spec.ts >>  Automating the content tests >> For Spatial Relations do content validation
- Location: src/tests/content_validation/webkit/SPAREL_pub_webkit.spec.ts:25:9

# Error details

```
Test timeout of 600000ms exceeded.
```

```
Error: locator.waitFor: Target page, context or browser has been closed
```

# Test source

```ts
  80  |     const selectorMap = {
  81  |       'ellipsis': "button[aria-label='Assignment actions']",
  82  |       'edit': "button[aria-label='Edit Assignment']",
  83  |       'no-decoration': "(//button[@class='link-button no-decoration icon']/child::*)[4]",
  84  |       'default': position ? `(//button[@class='link-button'])[${position}]` : "//button[@class='link-button']"
  85  |     };
  86  |     return this.page.locator(selectorMap[type]);
  87  |   }
  88  | 
  89  | 
  90  |   private getCheckboxLocator(state: 'unchecked' | 'enabled'): Locator {
  91  |     const selectorMap = {
  92  |       'unchecked': "//button[contains(@class,'checkbox') and not(@aria-disabled='true')]",
  93  |       'enabled': "//button[contains(@class,'checkbox')]"
  94  |     };
  95  |     return this.page.locator(selectorMap[state]);
  96  |   }
  97  | 
  98  |   // ==================== End of Helper Methods ====================
  99  | 
  100 |   static examineeID: string;
  101 | 
  102 |   async addNewExamineeAndUpdateTheTemplate(
  103 |     url: string,
  104 |     age: number,
  105 |     gender: string,
  106 |     testStemForm?: string,
  107 |     normBasis?: string,
  108 |     examineeGrade?: string,
  109 |     generateTemplate: boolean = true,
  110 |   ): Promise<{
  111 |     examinee_ID: string;
  112 |     dateOfBirth: string;
  113 |     examineelastNameAndFirstName: string;
  114 |   }> {
  115 |     console.log("Trying to add an examinee at URL:", url);
  116 |     await this.page.bringToFront();
  117 |     await this.page.waitForTimeout(3000);
  118 | 
  119 |     await this.dismissTestAssignmentDialogIfPresent();
  120 |     await this.waitForLoaderToDisappear();
  121 |     await this.examinees.click();
  122 |     await this.waitForLoaderToDisappear();
  123 | 
  124 | 
  125 | 
  126 |     await this.page.waitForTimeout(3000);
  127 |     await this.addExaminee.click();
  128 |     await this.loadingIcon.waitFor({ state: "hidden" });
  129 |     const firstName: string = faker.person.firstName();
  130 |     await this.examineeFirstName.fill(firstName);
  131 |     const dateOfBirth = (await this.utils.getTheDOBYearsBack(age)).toString();
  132 |     await this.examineeDateOfBirth.fill(dateOfBirth);
  133 |     await this.addExamineePage.selectGender(gender);
  134 |     DashBoardPage.examineeID = `N${await this.utils.randomNumberGenerateBetween(1,99999)}A${await this.utils.randomNumberGenerateBetween(1, 99999)}`;
  135 |     await this.examineeId.fill(DashBoardPage.examineeID);
  136 |     await this.examineeLastName.fill(DashBoardPage.examineeID);
  137 |     console.log("Examinee ID", DashBoardPage.examineeID);
  138 | 
  139 |     if (generateTemplate) {
  140 |     const exportType = getCurrentExportType();
  141 |     switch (exportType) {
  142 |       case "derived":
  143 |         await derivedScoreFilterTemplate_CSVfileWriter(
  144 |           DashBoardPage.examineeID,
  145 |           normBasis,
  146 |           examineeGrade,
  147 |         );
  148 |         break;
  149 |       case "wLookUp":
  150 |         await scoreDataFilterTemplate_CSVfileWriter(
  151 |           DashBoardPage.examineeID,
  152 |         );
  153 |         break;
  154 |       case "testData":
  155 |         await testDataExportFilterTemplate_CSVfileWriter(
  156 |           DashBoardPage.examineeID,
  157 |           testStemForm,
  158 |         );
  159 |     }
  160 |   }
  161 | 
  162 |     if (await this.examineeSaveButton.isEnabled({ timeout: 3000 })) {
  163 |       await this.addExamineePage.saveExaminee();
  164 |     } else {
  165 |       console.error("Save Button IS Not Enabled");
  166 |     }
  167 |     console.log(
  168 |       `Successfully added an Examinee  ID =${DashBoardPage.examineeID} FirstName=${firstName} LastName =${DashBoardPage.examineeID} Age = ${dateOfBirth}`,
  169 |     );
  170 |     return {
  171 |       examinee_ID: DashBoardPage.examineeID,
  172 |       dateOfBirth,
  173 |       examineelastNameAndFirstName: `${DashBoardPage.examineeID}, ${firstName}`,
  174 |     };
  175 |   }
  176 | 
  177 |     async waitForLoaderToDisappear() {
  178 |     await this.page
  179 |       .locator("span[class='loading-icon']")
> 180 |       .waitFor({ state: "hidden", timeout: 8 * 60 * 1000 });
      |        ^ Error: locator.waitFor: Target page, context or browser has been closed
  181 |   }
  182 | 
  183 |   async dismissTestAssignmentDialogIfPresent() {
  184 |     const dialog = this.page.locator("div[role='dialog']");
  185 |     if (await dialog.isVisible({ timeout: 3000 }).catch(() => false)) {
  186 |       const closeBtn = dialog.locator("//button[text()='Close']");
  187 |       if (await closeBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
  188 |         await closeBtn.click();
  189 |         await dialog.waitFor({ state: "hidden", timeout: 10000 });
  190 |       }
  191 |     }
  192 |   }
  193 | 
  194 |   async clickOnLaunchAssignmentButton() {
  195 |     await this.testAssignmentSuccessMessage.waitFor({ state: "visible" });
  196 |       await this.launchAssignmentButton.click({ timeout: 2 * 60 * 1000 });
  197 |   }
  198 | 
  199 |   async selectExaminee(examineeId: string) {
  200 |     try {
  201 |       await this.selectExamineeButton.click();
  202 |       await this.searchExamineeTestSetNameAndEducation.last().fill(examineeId);
  203 |       await this.page
  204 |         .locator(".item-text.single-select")
  205 |         .getByText(examineeId)
  206 |         .waitFor({ state: "attached", timeout: 90000 });
  207 |       await this.selectExamineeFromDropdown
  208 |         .getByText(new RegExp(examineeId))
  209 |         .click({ timeout: 30000 });
  210 |       await this.page
  211 |         .getByText("Selected Examinee Details")
  212 |         .waitFor({ state: "visible" });
  213 |       console.log(`Successfully selected examinee: ${examineeId}`);
  214 |     } catch (error) {
  215 |       console.error(`Failed to select examinee with ID: ${examineeId}`, error);
  216 |       throw error;
  217 |     }
  218 |   }
  219 | 
  220 |   async selectNormBasis(normBasis: string) {
  221 |     await this.page
  222 |       .locator('[class*="checkbox"]')
  223 |       .filter({ hasText: normBasis })
  224 |       .locator(".radio-item")
  225 |       .click();
  226 |   }
  227 |   async clickOnNextButton() {
  228 |     await this.page.getByText("Next").click();
  229 |   }
  230 | 
  231 |   async clickOnSaveButton() {
  232 |     await this.page.getByText("Save").click();
  233 |   }
  234 | 
  235 |   async goToTheMainMenuChildPage(
  236 |     mainMenuDd: string,
  237 |     childDd?: string,
  238 |   ): Promise<boolean> {
  239 |     await this.page.locator(`//button[text() = '${mainMenuDd}']`).click();
  240 |     await this.page.waitForLoadState("load");
  241 |     if (childDd) {
  242 |       const val: Locator = this.page
  243 |         .locator(`//button[text() = '${childDd}']`)
  244 |         .first();
  245 |       await val.waitFor({ state: "visible" });
  246 |       await this.page.waitForTimeout(3000);
  247 |       await val.click();
  248 |       await this.page.waitForLoadState("load");
  249 |     }
  250 |     return true;
  251 |   }
  252 |   async welcomeTextToBeVisable() {
  253 |     await this.page.bringToFront();
  254 |     console.log("welcomeTextToBeVisable called");
  255 |   }
  256 |   async getSessionID() {
  257 |     this.sessionID = await this.sessionCode.textContent();
  258 |     return this.sessionID;
  259 |   }
  260 | 
  261 |   async clickOnTheReportToDownload(testinfo: TestInfo) {
  262 |     await this.page.waitForTimeout(5000);
  263 |     await this.goToTheMainMenuChildPage("Reports", "Report Library");
  264 |     expect(this.page.url()).toContain("home");
  265 |     await this.greyDownloadPrint.first().waitFor({ state: "detached" });
  266 | 
  267 |     await Promise.all([
  268 |       this.page.waitForResponse(
  269 |         (response) =>
  270 |           response.url().includes("GetSavedResearchExportData") &&
  271 |           response.status() === 200,
  272 |         { timeout: 5 * 60 * 1000 },
  273 |       ),
  274 |     ]);
  275 | 
  276 |     const downloadPromise = this.page.waitForEvent("download", {
  277 |       timeout: 60000,
  278 |     });
  279 |     let reqFile: string = await getTemplateName();
  280 |     console.log(
```