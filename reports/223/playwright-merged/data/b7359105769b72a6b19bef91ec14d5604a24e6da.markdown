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
  9149 |       await expect(this.plainNextButtonOrEndButton.first()).toBeVisible();
  9150 |       const itemNameValue: string = (await this.itemDetails.textContent())!;
  9151 |       RawValueLogger.log('itemNameValue = ', itemNameValue);
  9152 |       await expect(itemNameValue).toEqual(key);
  9153 |       const { response, notes, flag } = data.items[key];
  9154 |       RawValueLogger.log('key = ', key);
  9155 | 
  9156 |       let i = 0;
  9157 | 
  9158 |       RawValueLogger.log('response = ', response);
  9159 |       RawValueLogger.log('notes = ', notes);
  9160 |       RawValueLogger.log('flag = ', flag);
  9161 | 
  9162 |       if (key.startsWith('Introduction')) {
  9163 |         if (await this.videoPlayButton.isVisible()) {
  9164 |           await this.videoPlayButton.click();
  9165 |           await expect(this.replayButton).toBeVisible({ timeout: 70000 });
  9166 |         }
  9167 |       } else if (key.startsWith('Practice Exercise')) {
  9168 |         if (data.testStemForm.startsWith('NUMPAT')) {
  9169 |           const matchedPattern = data.testStemForm;
  9170 |           const patternConfig: Record<string, { schemaFile: string }> = {
  9171 |             'NUMPAT.W5PA': { schemaFile: 'NUMPAT.W5PA_TestSchema.xlsx' },
  9172 |             'LETPAT.W5PA': { schemaFile: 'LETPAT.W5PA_TestSchema.xlsx' },
  9173 |           };
  9174 | 
  9175 |           if (!matchedPattern || !patternConfig[matchedPattern]) {
  9176 |             throw new Error(`No configuration found for the stemForm: ${data.testStemForm}`);
  9177 |           }
  9178 | 
  9179 |           const { schemaFile } = patternConfig[matchedPattern];
  9180 | 
  9181 |           this.patternTestCorrectResponses = await this.utils.readCorrectValuesFromPatternTest(
  9182 |             matchedPattern,
  9183 |             'Heading',
  9184 |             'TabStim Resps'
  9185 |           );
  9186 | 
  9187 |           await this.answerCorrectForTimerTest(data.testStemForm, itemNameValue, this.patternTestCorrectResponses);
  9188 |           tapFluency = true;
  9189 |         } else {
  9190 |           await this.startPracticeAndStartTimerButton.click();
  9191 |           await this.stopIcon.waitFor({ state: 'visible', timeout: 25000 });
  9192 |           await this.scoreText.fill(response);
  9193 |         }
  9194 |       } else if (key.startsWith('Test Items')) {
  9195 |         await this.startTimerAndDisplayTestItems.click({ timeout: 2000 });
  9196 |         try {
  9197 |           await this.timeIsUp.waitFor({ state: 'visible', timeout: 3.2 * 60 * 1000 });
  9198 |         } catch (error) {
  9199 |           RawValueLogger.log('seems Time is up is not visible ...', error);
  9200 |         }
  9201 |       } else if (key.startsWith('Test Introduction')) {
  9202 |         await this.clickStartTimerForTestItems();
  9203 |       } else {
  9204 |         if (response.startsWith('correct')) {
  9205 |           const respSize = await response.split('|');
  9206 |           RawValueLogger.log('respSize = ', await respSize.length);
  9207 |           if ((await respSize.length) > 1) {
  9208 |             for (i = 0; i < Number(respSize[1]); i++) {
  9209 |               await this.correctOptionButton.nth(i).click();
  9210 |             }
  9211 |           } else {
  9212 |             await this.correctOptionButton.first().click();
  9213 |           }
  9214 |         } else if (response === 'incorrect') {
  9215 |           await this.incorrectOptionButton.first().click();
  9216 |         } else if (response === 'No Response') {
  9217 |           await this.noResponse.first().click();
  9218 |         } else if (response === 'Done') {
  9219 |           await this.doneButton.click();
  9220 |         } else if (response === 'next') {
  9221 |           // Do nothing as we have to click on next button below
  9222 |         } else if (response === 'START TIMER') {
  9223 |           await this.page.locator("//button[text()='START TIMER']").click();
  9224 |           continue;
  9225 |         } else {
  9226 |         }
  9227 |       }
  9228 | 
  9229 |       if (flag && !tapFluency) {
  9230 |         try {
  9231 |           await this.flagIcon.click();
  9232 | 
  9233 |           if (!this.flagData[data.testName]) {
  9234 |             this.flagData[data.testName] = {};
  9235 |           }
  9236 | 
  9237 |           this.flagData[data.testName][key] = { response: response };
  9238 |         } catch (error) {
  9239 |           console.error(`Error setting flag data for ${data.testName} - ${key}:`, error);
  9240 |         }
  9241 |       }
  9242 | 
  9243 |       if (notes) {
  9244 |         const notesText = data.testName + ' - ' + key + ' - notes added';
  9245 |         await this.dashboardPage.addNotes('item', notesText);
  9246 |       }
  9247 | 
  9248 |       if (await response.startsWith('Score Later')) {
> 9249 |         await this.scoreLaterButton.click();
       |                                     ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  9250 |         return response;
  9251 |       } else if (tapFluency) {
  9252 |         const isDoneButtonVisible: boolean = await this.doneButton.isVisible();
  9253 |         if (isDoneButtonVisible) {
  9254 |           await this.doneButton.click();
  9255 |         } else {
  9256 |           try {
  9257 |             await this.page.waitForTimeout(3000);
  9258 |             const isPopupFooterVisible = await this.page.locator("div[class='popup-footer']").isVisible();
  9259 |             if (isPopupFooterVisible) {
  9260 |               await expect(this.plainNextButtonOrEndButton.last(), "End Test button is not enabled in Time is up popup").toBeEnabled();
  9261 |               await this.plainNextButtonOrEndButton.last().click();
  9262 |             } else if (!isPopupFooterVisible) {
  9263 |               TestErrors.addError("Time is up popup is not visible ...', 'Clicking on End Test button to get it");
  9264 |               await this.plainNextButtonOrEndButton.first().click();
  9265 |               await this.page.locator("div[class='popup-footer']").waitFor({ state: 'visible', timeout: 10000 });
  9266 |               await this.plainNextButtonOrEndButton.last().click();
  9267 |             }
  9268 |           } catch (error) {
  9269 |             console.error(`Error while clicking on Next button :`, error);
  9270 |           }
  9271 |           // return response;
  9272 |         }
  9273 |       } else {
  9274 |         await this.page.waitForTimeout(1000);
  9275 |         if (
  9276 |           (await data.testStemForm.startsWith('CALC') || await data.testStemForm.startsWith('LWIDNT')) &&
  9277 |           Object.keys(data.items).indexOf(key) === Object.keys(data.items).length - 2
  9278 |         ) {
  9279 |           continue;
  9280 |         }
  9281 |         await this.plainNextButtonOrEndButton.last().click();
  9282 |       }
  9283 |     }
  9284 |   }
  9285 | 
  9286 |   async getTestStatusData() {
  9287 |     return {
  9288 |       completeTests: Array.from(this.completeTestsData),
  9289 |       needAttentionTests: Array.from(this.needAttentionTestsData),
  9290 |       inProgressTests: Array.from(this.inProgressTestsData),
  9291 |       invalidateTests: Array.from(this.invalidateTestsData),
  9292 |       scoreLaterTests: Array.from(this.scoreLaterTestsData),
  9293 |       flaggedTests: this.flagData,
  9294 |     };
  9295 |   }
  9296 | 
  9297 |   private async setFlag(flag: boolean) { }
  9298 | 
  9299 |   async selectNextTestFromMainNavigation(testName: string) {
  9300 |     await this.mainNavigation.click();
  9301 |     await this.mainNavigationTests.click();
  9302 |     const testButton = this.page.getByText(testName, { exact: true });
  9303 |     await testButton.waitFor({ state: 'visible', timeout: 10000 });
  9304 |     await testButton.click();
  9305 |     RawValueLogger.log('Selected test = ', testName);
  9306 |   }
  9307 | 
  9308 |   async clickOnLeftNavTests() {
  9309 |     await this.mainNavigation.click();
  9310 |     await this.mainNavigationTests.click();
  9311 |   }
  9312 | 
  9313 |   async selectTestFromNextTestDd(testName: string, maxAttempts = 3) {
  9314 |     RawValueLogger.log('selectTestFromNextTestDd: start', { testName, maxAttempts });
  9315 | 
  9316 |     const optionLocator = (name: string) => this.page.locator(`//span[text()="${name}"]`);
  9317 |     const selectBox = this.page.locator('.select-box');
  9318 |     const beginBtn = this.beginNextTestButton;
  9319 |     const currentValue = this.nextTestSelectValue;
  9320 |     const addTestBtn = this.addTestButton;
  9321 | 
  9322 |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  9323 |       RawValueLogger.log('attempt', { attempt });
  9324 | 
  9325 |       try {
  9326 |         const raw = await currentValue.textContent();
  9327 |         const current = (raw ?? '').trim();
  9328 |         RawValueLogger.log('current selection', { current });
  9329 | 
  9330 |         if (current && current.includes(testName)) {
  9331 |           RawValueLogger.log('already selected - clicking Begin');
  9332 |           await beginBtn.click();
  9333 |           return;
  9334 |         }
  9335 | 
  9336 |         RawValueLogger.log('opening dropdown');
  9337 |         await selectBox.click();
  9338 | 
  9339 |         const opt = optionLocator(testName);
  9340 |         await opt.waitFor({ state: 'visible', timeout: 3000 });
  9341 |         RawValueLogger.log('clicking option', { testName });
  9342 |         await opt.click();
  9343 | 
  9344 |         const newRaw = await currentValue.textContent();
  9345 |         const newValue = (newRaw ?? '').trim();
  9346 |         RawValueLogger.log('new selection', { newValue });
  9347 | 
  9348 |         if (newValue && newValue.includes(testName)) {
  9349 |           RawValueLogger.log('selection verified - clicking Begin');
```