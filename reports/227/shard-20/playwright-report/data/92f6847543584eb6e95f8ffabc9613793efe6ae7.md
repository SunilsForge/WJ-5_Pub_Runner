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
  - waiting for locator('//button[text()=\'Invalidate Test\']')

```

# Test source

```ts
  9384 |   async answerCorrectForTimerTest(stemForm: string, itemDetails: string, correctResp: Map<string, string[]>) {
  9385 |     const locatorPathConfig: Record<string, { path: string }> = {
  9386 |       'NUMPAT.W5PA': { path: 'NUMPAT' },
  9387 |       'LETPAT.W5PA': { path: 'LETPAT_Left' },
  9388 |     };
  9389 |     console.log(`taskStem value: ${stemForm}`);
  9390 |     if (!locatorPathConfig[stemForm]) {
  9391 |       throw new Error(`Invalid taskStem: ${stemForm}. Please check your input.`);
  9392 |     }
  9393 |     let localItemDetails = itemDetails;
  9394 |     await this.page.waitForTimeout(3000);
  9395 | 
  9396 |     if (localItemDetails.startsWith('Test Items')) {
  9397 |       localItemDetails = 'Item';
  9398 |     }
  9399 |     const isPracticeTimerVisable = await this.startPracticeAndStartTimerButton.isVisible();
  9400 |     const isStartTimerVisable = await this.startTimerButton.isVisible();
  9401 |     if (isPracticeTimerVisable) {
  9402 |       await this.startPracticeAndStartTimerButton.click();
  9403 |       await this.page.waitForTimeout(1500);
  9404 |       await this.activateTabletControlIfRequired();
  9405 |       this.index = 1;
  9406 |     } else if (isStartTimerVisable) {
  9407 |       try {
  9408 |         const isTimerRunning = await this.timerActive.isVisible();
  9409 |         if (!isTimerRunning && (await this.startTimerAndDisplayTestItems.isEnabled())) {
  9410 |           await this.startTimerAndDisplayTestItems.click({ timeout: 2000 });
  9411 |           await this.slothIcon.waitFor({
  9412 |             state: 'hidden',
  9413 |             timeout: 30000,
  9414 |           });
  9415 |           await this.activateTabletControlIfRequired();
  9416 |           this.index = 1;
  9417 |         }
  9418 |       } catch (error) {
  9419 |         console.error(`Either timer is already started or not able to start ${error}`);
  9420 |       }
  9421 |     } else {
  9422 |       throw new Error(`Not able to start the timer`);
  9423 |     }
  9424 | 
  9425 |     const locatorPath = locatorPathConfig[stemForm].path;
  9426 | 
  9427 |     let rows: Locator[];
  9428 |     if (stemForm.includes('SRDGFL.W5PA')) {
  9429 |       rows = await this.page.locator(`//div[@class="options "]`).all();
  9430 |     } else {
  9431 |       rows = await this.page.locator(`//div[@class="options ${locatorPath}"]`).all();
  9432 |     }
  9433 |     let breaker = 0;
  9434 | 
  9435 |     while (rows.length == 0 && breaker < 10) {
  9436 |       await this.page.waitForTimeout(1000);
  9437 | 
  9438 |       rows = await this.page.locator(`//div[@class="options ${locatorPath}"]`).all();
  9439 | 
  9440 |       console.log('The number of rows are', rows.length);
  9441 | 
  9442 |       breaker++;
  9443 |     }
  9444 | 
  9445 |     let updatedItemDetails;
  9446 | 
  9447 |     for (const row of rows) {
  9448 |       updatedItemDetails = `${localItemDetails} ${this.index}`;
  9449 | 
  9450 |       const correctResponse = correctResp.get(updatedItemDetails);
  9451 | 
  9452 |       if (correctResponse) {
  9453 |         if (/^(SRDGFL|WRDGFL)\.W5PA$/.test(stemForm)) {
  9454 |           if (/^(SRDGFL)\.W5PA$/.test(stemForm)) {
  9455 |             await row.locator(`//button[text() = "${correctResponse}"]`).first().click();
  9456 |           } else {
  9457 |             await row.locator(`//button[text() = "${correctResponse[0]}"]`).click();
  9458 | 
  9459 |             await row.locator(`//button[text() = "${correctResponse[1]}"]`).click();
  9460 |           }
  9461 |         } else {
  9462 |           await row.locator(`//button[text() = "${correctResponse}"]`).first().click();
  9463 | 
  9464 |           await row.locator(`//button[text() = "${correctResponse}"]`).last().click();
  9465 |         }
  9466 | 
  9467 |         this.index++;
  9468 |       }
  9469 |     }
  9470 |   }
  9471 | 
  9472 |   async activateTabletControlIfRequired() {
  9473 |     const isTabletControlActive: boolean = await this.tabletControlBanner.isVisible();
  9474 |     if (!isTabletControlActive) {
  9475 |       await this.examineeCursorButton.click();
  9476 |     }
  9477 |     await this.tabletControlBanner.waitFor({
  9478 |       state: 'visible',
  9479 |       timeout: 10000,
  9480 |     });
  9481 |   }
  9482 | 
  9483 |   async invalidateTest() {
> 9484 |     await this.invalidateTestLink.click();
       |                                   ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  9485 |     await this.invalidateTestPopup.waitFor({ state: 'visible', timeout: 50000 });
  9486 |     await this.areYouSureYesButton.click();
  9487 |     try {
  9488 |       await this.addBackUpFormLink.waitFor({
  9489 |         state: 'visible',
  9490 |         timeout: 5000
  9491 |       });
  9492 |       // await expect.soft(this.addBackUpFormLink, 'Add backup form link not visible after invalidation').toBeVisible();
  9493 |     } catch (error) {
  9494 |       TestErrors.addError('Add backup form link not visible after invalidation');
  9495 |     }
  9496 | 
  9497 |     const isVisable: boolean = await this.backUpFormAddedLabel.isVisible();
  9498 |     if (isVisable) {
  9499 |       console.log("Backup form is already added., right after invalidation.");
  9500 |     }
  9501 |   }
  9502 | 
  9503 |   async addBackupForm() {
  9504 |     await this.page.waitForLoadState('load');
  9505 |     await this.page.waitForTimeout(1000);
  9506 |     const isVisable: boolean = await this.backUpFormAddedLabel.isVisible();
  9507 |     if (!isVisable) {
  9508 |       await this.addBackUpFormLink.click();
  9509 |       await expect.soft(this.backUpFormAddedLabel, 'Add backup form link not visible after invalidation').toBeVisible();
  9510 |     }
  9511 |   }
  9512 | 
  9513 |   async closeEndTestDialogIfPresent() {
  9514 |     if (await this.endTestDialog.isVisible()) {
  9515 |       await this.endTestDialogCloseButton.click();
  9516 |     }
  9517 |   }
  9518 | 
  9519 |   async removeFlaggedDataForInvalidatedTests(
  9520 |     flaggedTests: Record<string, Record<string, { response: string }>>,
  9521 |     invalidatedTests: string[]
  9522 |   ): Promise<Record<string, Record<string, { response: string }>>> {
  9523 |     try {
  9524 |       // Create a copy of flaggedTests to avoid modifying the original
  9525 |       const updatedFlaggedTests = { ...flaggedTests };
  9526 | 
  9527 |       // Remove entries for invalidated tests
  9528 |       for (const testName of invalidatedTests) {
  9529 |         if (testName in updatedFlaggedTests) {
  9530 |           delete updatedFlaggedTests[testName];
  9531 |         }
  9532 |       }
  9533 | 
  9534 |       return updatedFlaggedTests;
  9535 |     } catch (error) {
  9536 |       console.error('Error removing flagged data for invalidated tests:', error);
  9537 |       throw error;
  9538 |     }
  9539 |   }
  9540 | 
  9541 |   async getTestStatusTitle(testName: string): Promise<string | null> {
  9542 |     const testButton = this.page.locator(`button:has(div.TestList_mcs_testName:text-is("${testName}"))`);
  9543 |     const svgLocator = testButton.locator('svg');
  9544 |     const title = await svgLocator.getAttribute('title');
  9545 |     return title;
  9546 |   }
  9547 | 
  9548 |   async verifyTestStatusesLeftNav(data: string[], status: string) {
  9549 |     for (const testName of data) {
  9550 |       const statusTitle = await this.getTestStatusTitle(testName);
  9551 |       await expect.soft(statusTitle, `Test status for ${testName} should be ${status}`).toContain(status);
  9552 |     }
  9553 | 
  9554 |   }
  9555 | 
  9556 |   async getFlaggedTestNames(
  9557 |     flaggedTests: Record<string, Record<string, { response: string }>>
  9558 |   ): Promise<string[]> {
  9559 |     try {
  9560 |       const testNames = Object.keys(flaggedTests);
  9561 | 
  9562 |       if (testNames.length === 0) {
  9563 |         console.warn('No flagged tests found in the provided object');
  9564 |       }
  9565 | 
  9566 |       return testNames;
  9567 |     } catch (error) {
  9568 |       console.error('Error getting flagged test names:', error);
  9569 |       throw error;
  9570 |     }
  9571 |   }
  9572 | 
  9573 |   async naviagteToDashboard() {
  9574 |     await this.mainNavigationHome.click();
  9575 |     await this.areYouSureYesButton.click();
  9576 |   }
  9577 | 
  9578 |   async verifyFlaggedStatus(testData: {
  9579 |     index: number,
  9580 |     testName: string,
  9581 |     items: string[]
  9582 |   }, unflag: boolean) {
  9583 |     const testName = testData.testName;
  9584 |     const items = testData.items;
```