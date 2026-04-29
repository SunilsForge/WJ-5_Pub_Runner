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
  - waiting for locator('//button/b[text()=\'Score Later\']')

```

# Test source

```ts
  9152 |       await expect(this.plainNextButtonOrEndButton.first()).toBeVisible();
  9153 |       const itemNameValue: string = (await this.itemDetails.textContent())!;
  9154 |       RawValueLogger.log('itemNameValue = ', itemNameValue);
  9155 |       await expect(itemNameValue).toEqual(key);
  9156 |       const { response, notes, flag } = data.items[key];
  9157 |       RawValueLogger.log('key = ', key);
  9158 | 
  9159 |       let i = 0;
  9160 | 
  9161 |       RawValueLogger.log('response = ', response);
  9162 |       RawValueLogger.log('notes = ', notes);
  9163 |       RawValueLogger.log('flag = ', flag);
  9164 | 
  9165 |       if (key.startsWith('Introduction')) {
  9166 |         if (await this.videoPlayButton.isVisible()) {
  9167 |           await this.videoPlayButton.click();
  9168 |           await expect(this.replayButton).toBeVisible({ timeout: 70000 });
  9169 |         }
  9170 |       } else if (key.startsWith('Practice Exercise')) {
  9171 |         if (data.testStemForm.startsWith('NUMPAT')) {
  9172 |           const matchedPattern = data.testStemForm;
  9173 |           const patternConfig: Record<string, { schemaFile: string }> = {
  9174 |             'NUMPAT.W5PA': { schemaFile: 'NUMPAT.W5PA_TestSchema.xlsx' },
  9175 |             'LETPAT.W5PA': { schemaFile: 'LETPAT.W5PA_TestSchema.xlsx' },
  9176 |           };
  9177 | 
  9178 |           if (!matchedPattern || !patternConfig[matchedPattern]) {
  9179 |             throw new Error(`No configuration found for the stemForm: ${data.testStemForm}`);
  9180 |           }
  9181 | 
  9182 |           const { schemaFile } = patternConfig[matchedPattern];
  9183 | 
  9184 |           this.patternTestCorrectResponses = await this.utils.readCorrectValuesFromPatternTest(
  9185 |             matchedPattern,
  9186 |             'Heading',
  9187 |             'TabStim Resps'
  9188 |           );
  9189 | 
  9190 |           await this.answerCorrectForTimerTest(data.testStemForm, itemNameValue, this.patternTestCorrectResponses);
  9191 |           tapFluency = true;
  9192 |         } else {
  9193 |           await this.startPracticeAndStartTimerButton.click();
  9194 |           await this.stopIcon.waitFor({ state: 'visible', timeout: 25000 });
  9195 |           await this.scoreText.fill(response);
  9196 |         }
  9197 |       } else if (key.startsWith('Test Items')) {
  9198 |         await this.startTimerAndDisplayTestItems.click({ timeout: 2000 });
  9199 |         try {
  9200 |           await this.timeIsUp.waitFor({ state: 'visible', timeout: 3.2 * 60 * 1000 });
  9201 |         } catch (error) {
  9202 |           RawValueLogger.log('seems Time is up is not visible ...', error);
  9203 |         }
  9204 |       } else if (key.startsWith('Test Introduction')) {
  9205 |         await this.clickStartTimerForTestItems();
  9206 |       } else {
  9207 |         if (response.startsWith('correct')) {
  9208 |           const respSize = await response.split('|');
  9209 |           RawValueLogger.log('respSize = ', await respSize.length);
  9210 |           if ((await respSize.length) > 1) {
  9211 |             for (i = 0; i < Number(respSize[1]); i++) {
  9212 |               await this.correctOptionButton.nth(i).click();
  9213 |             }
  9214 |           } else {
  9215 |             await this.correctOptionButton.first().click();
  9216 |           }
  9217 |         } else if (response === 'incorrect') {
  9218 |           await this.incorrectOptionButton.first().click();
  9219 |         } else if (response === 'No Response') {
  9220 |           await this.noResponse.first().click();
  9221 |         } else if (response === 'Done') {
  9222 |           await this.doneButton.click();
  9223 |         } else if (response === 'next') {
  9224 |           // Do nothing as we have to click on next button below
  9225 |         } else if (response === 'START TIMER') {
  9226 |           await this.page.locator("//button[text()='START TIMER']").click();
  9227 |           continue;
  9228 |         } else {
  9229 |         }
  9230 |       }
  9231 | 
  9232 |       if (flag && !tapFluency) {
  9233 |         try {
  9234 |           await this.flagIcon.click();
  9235 | 
  9236 |           if (!this.flagData[data.testName]) {
  9237 |             this.flagData[data.testName] = {};
  9238 |           }
  9239 | 
  9240 |           this.flagData[data.testName][key] = { response: response };
  9241 |         } catch (error) {
  9242 |           console.error(`Error setting flag data for ${data.testName} - ${key}:`, error);
  9243 |         }
  9244 |       }
  9245 | 
  9246 |       if (notes) {
  9247 |         const notesText = data.testName + ' - ' + key + ' - notes added';
  9248 |         await this.dashboardPage.addNotes('item', notesText);
  9249 |       }
  9250 | 
  9251 |       if (await response.startsWith('Score Later')) {
> 9252 |         await this.scoreLaterButton.click();
       |                                     ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  9253 |         return response;
  9254 |       } else if (tapFluency) {
  9255 |         const isDoneButtonVisible: boolean = await this.doneButton.isVisible();
  9256 |         if (isDoneButtonVisible) {
  9257 |           await this.doneButton.click();
  9258 |         } else {
  9259 |           try {
  9260 |             await this.page.waitForTimeout(3000);
  9261 |             const isPopupFooterVisible = await this.page.locator("div[class='popup-footer']").isVisible();
  9262 |             if (isPopupFooterVisible) {
  9263 |               await expect(this.plainNextButtonOrEndButton.last(), "End Test button is not enabled in Time is up popup").toBeEnabled();
  9264 |               await this.plainNextButtonOrEndButton.last().click();
  9265 |             } else if (!isPopupFooterVisible) {
  9266 |               TestErrors.addError("Time is up popup is not visible ...', 'Clicking on End Test button to get it");
  9267 |               await this.plainNextButtonOrEndButton.first().click();
  9268 |               await this.page.locator("div[class='popup-footer']").waitFor({ state: 'visible', timeout: 10000 });
  9269 |               await this.plainNextButtonOrEndButton.last().click();
  9270 |             }
  9271 |           } catch (error) {
  9272 |             console.error(`Error while clicking on Next button :`, error);
  9273 |           }
  9274 |           // return response;
  9275 |         }
  9276 |       } else {
  9277 |         await this.page.waitForTimeout(1000);
  9278 |         if (
  9279 |           (await data.testStemForm.startsWith('CALC') || await data.testStemForm.startsWith('LWIDNT')) &&
  9280 |           Object.keys(data.items).indexOf(key) === Object.keys(data.items).length - 2
  9281 |         ) {
  9282 |           continue;
  9283 |         }
  9284 |         await this.plainNextButtonOrEndButton.last().click();
  9285 |       }
  9286 |     }
  9287 |   }
  9288 | 
  9289 |   async getTestStatusData() {
  9290 |     return {
  9291 |       completeTests: Array.from(this.completeTestsData),
  9292 |       needAttentionTests: Array.from(this.needAttentionTestsData),
  9293 |       inProgressTests: Array.from(this.inProgressTestsData),
  9294 |       invalidateTests: Array.from(this.invalidateTestsData),
  9295 |       scoreLaterTests: Array.from(this.scoreLaterTestsData),
  9296 |       flaggedTests: this.flagData,
  9297 |     };
  9298 |   }
  9299 | 
  9300 |   private async setFlag(flag: boolean) { }
  9301 | 
  9302 |   async selectNextTestFromMainNavigation(testName: string) {
  9303 |     await this.mainNavigation.click();
  9304 |     await this.mainNavigationTests.click();
  9305 |     const testButton = this.page.getByText(testName, { exact: true });
  9306 |     await testButton.waitFor({ state: 'visible', timeout: 10000 });
  9307 |     await testButton.click();
  9308 |     RawValueLogger.log('Selected test = ', testName);
  9309 |   }
  9310 | 
  9311 |   async clickOnLeftNavTests() {
  9312 |     await this.mainNavigation.click();
  9313 |     await this.mainNavigationTests.click();
  9314 |   }
  9315 | 
  9316 |   async selectTestFromNextTestDd(testName: string, maxAttempts = 3) {
  9317 |     RawValueLogger.log('selectTestFromNextTestDd: start', { testName, maxAttempts });
  9318 | 
  9319 |     const optionLocator = (name: string) => this.page.locator(`//span[text()="${name}"]`);
  9320 |     const selectBox = this.page.locator('.select-box');
  9321 |     const beginBtn = this.beginNextTestButton;
  9322 |     const currentValue = this.nextTestSelectValue;
  9323 |     const addTestBtn = this.addTestButton;
  9324 | 
  9325 |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  9326 |       RawValueLogger.log('attempt', { attempt });
  9327 | 
  9328 |       try {
  9329 |         const raw = await currentValue.textContent();
  9330 |         const current = (raw ?? '').trim();
  9331 |         RawValueLogger.log('current selection', { current });
  9332 | 
  9333 |         if (current && current.includes(testName)) {
  9334 |           RawValueLogger.log('already selected - clicking Begin');
  9335 |           await beginBtn.click();
  9336 |           return;
  9337 |         }
  9338 | 
  9339 |         RawValueLogger.log('opening dropdown');
  9340 |         await selectBox.click();
  9341 | 
  9342 |         const opt = optionLocator(testName);
  9343 |         await opt.waitFor({ state: 'visible', timeout: 3000 });
  9344 |         RawValueLogger.log('clicking option', { testName });
  9345 |         await opt.click();
  9346 | 
  9347 |         const newRaw = await currentValue.textContent();
  9348 |         const newValue = (newRaw ?? '').trim();
  9349 |         RawValueLogger.log('new selection', { newValue });
  9350 | 
  9351 |         if (newValue && newValue.includes(testName)) {
  9352 |           RawValueLogger.log('selection verified - clicking Begin');
```