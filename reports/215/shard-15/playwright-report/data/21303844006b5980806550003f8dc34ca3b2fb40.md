# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/InProgressTestAssignments.spec.ts >> Verify review mode for my 'In Progress' test assignments >> Administer a selective test and leave the test in diff statuses as a part of 'in progress' test assignment validation
- Location: src/tests/functional/InProgressTestAssignments.spec.ts:41:7

# Error details

```
Error: Waiting for sloth icon after accepting examinee

expect(received).toBeTruthy()

Received: false

Call Log:
- Timeout 60000ms exceeded while waiting on the predicate
```

# Test source

```ts
  20  |             console.log("Filling the session ID input box...");
  21  |              await this.page.waitForLoadState("networkidle", {timeout: 90000});
  22  |             //await this.page.waitForLoadState("domcontentloaded", {timeout: 60000});
  23  |             await this.sessionIdInputBox.fill(this.$sessionID, {timeout: 60000});
  24  |         } catch {
  25  |             console.log("Session ID input failed, reloading the page...");
  26  |             await this.page.reload({waitUntil: "load"});
  27  |             await this.sessionIdInputBox.fill(this.$sessionID, {timeout: 60000});
  28  |         }
  29  |         for (let attempt = 0; attempt < 5; attempt++) {
  30  |             console.log(`Attempt ${attempt + 1} to join the session.`);
  31  | 
  32  |             try {
  33  |                 await expect(this.joinSessionButton).toBeEnabled({timeout: 5000});
  34  |                 await this.joinSessionButton.click({timeout: 5000});
  35  |                 console.log("Clicked Join Session button.");
  36  |                 return;
  37  |             } catch (e) {
  38  |                 console.log(`Retry ${attempt + 1} failed: ${e}`);
  39  |             }
  40  |         }
  41  |     }
  42  | 
  43  |     async clickOnAcceptButton() {
  44  |         // First check if accept button is visible
  45  |         await this.page.waitForTimeout(50000);
  46  |         const isAcceptButtonVisible = await this.acceptButton.isVisible({ timeout: 50000 });
  47  | 
  48  |         if (!isAcceptButtonVisible) {
  49  |             // If accept button isn't visible, check for sloth icon
  50  |             if (await this.slothIcon.isVisible({ timeout: 50000 })) {
  51  |                 console.log("Accept button not found, but sloth icon is visible. Proceeding.");
  52  |                 return;
  53  |             }
  54  |             throw new Error("Neither accept button nor sloth icon appeared within timeout.");
  55  |         }
  56  | 
  57  |         let attempt = 0;
  58  |         while (attempt < 15) {
  59  |             try {
  60  |                 console.log(`Attempt ${attempt + 1}: Checking accept button readiness.`);
  61  |                 const isEnabled = await this.acceptButton.isEnabled();
  62  |                 if (!isEnabled) {
  63  |                     console.warn("Accept button is not enabled. Waiting...");
  64  |                     await this.page.waitForTimeout(30000);
  65  |                     attempt++;
  66  |                     continue;
  67  |                 }
  68  |                 console.log("Accept button is enabled. Clicking now.");
  69  |                 await this.acceptButton.click();
  70  | 
  71  |                 if (await this.slothIcon.isVisible({ timeout: 50000 })) {
  72  |                     console.log("Sloth icon detected. Accept process completed.");
  73  |                     return;
  74  |                 } else if (!(await this.acceptButton.isVisible({ timeout: 50000 }))) {
  75  |                     console.log("Accept button is no longer visible. Exiting.");
  76  |                     return;
  77  |                 }
  78  |             } catch (error) {
  79  |                 console.warn(`Attempt ${attempt + 1} failed: ${error.message}`);
  80  |             }
  81  |             attempt++;
  82  |         }
  83  | 
  84  |         // Final check after all attempts
  85  |         if (await this.slothIcon.isVisible({ timeout: 50000 })) {
  86  |             console.log("Sloth icon appeared after attempts. Proceeding.");
  87  |             return;
  88  |         }
  89  |         if (await this.acceptButton.isVisible()) {
  90  |             throw new Error("Accept button did not disappear after all retry attempts.");
  91  |         }
  92  |     }
  93  | 
  94  |     async switchToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton() {
  95  | 
  96  |         await this.page.bringToFront();
  97  |         try {
  98  |             await this.joinSessionButton.waitFor({
  99  |                 state: "attached",
  100 |                 timeout: 2 * 15 * 1000,
  101 |             });
  102 |         } catch (error) {
  103 |             console.info(
  104 |                 `Not able to see the Join Session button on Examinee Screen After Test complete , but still proceeding further and submitting the test ... ${error} `,
  105 |             );
  106 |         }
  107 |     }
  108 |     async switchToTheChildScreenAndClickCorrectOption() {  // this can be used in test DE page itself (Pending)
  109 | 
  110 |         await this.page.bringToFront();
  111 |         await this.item1CorrectAnswerLWIDNTTest.click();
  112 |         const correctOption: string = await this.item1CorrectAnswerLWIDNTTest.textContent();
  113 |         return correctOption;
  114 |     }
  115 | 
  116 | 
  117 | async clickExamineeAcceptButton(): Promise<void> {
  118 |   await this.waitForLoadingIconToDisappear();
  119 | 
> 120 |   await expect
      |   ^ Error: Waiting for sloth icon after accepting examinee
  121 |     .poll(
  122 |       async () => {
  123 |         if (await this.acceptButton.isVisible()) {
  124 |           RawValueLogger.log('Accept button visible. Clicking.');
  125 |           await this.acceptButton.click();
  126 |         }
  127 | 
  128 |         return await this.slothIcon.isVisible();
  129 |       },
  130 |       {
  131 |         message: 'Waiting for sloth icon after accepting examinee',
  132 |         timeout: 60_000,
  133 |         intervals: [500, 1000]
  134 |       }
  135 |     )
  136 |     .toBeTruthy();
  137 | 
  138 |   RawValueLogger.log('Sloth icon detected. Accept process completed.');
  139 | }
  140 | 
  141 | 
  142 |     async waitForLoadingIconToDisappear() {
  143 |         await this.loadingIcon.last().waitFor({
  144 |             state: "hidden",
  145 |             timeout: 3 * 60 * 1000,
  146 |         });
  147 |     }
  148 | }
```