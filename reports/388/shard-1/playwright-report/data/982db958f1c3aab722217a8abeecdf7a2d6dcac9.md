# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/subscriptions/SubscriptionActivationNewUserNegative.spec.ts >> S10/S11/S17/S18/S22 - Contact + credentials inline validations and Back navigation
- Location: src/tests/functional/subscriptions/SubscriptionActivationNewUserNegative.spec.ts:45:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[contains(@class,\'redError\')][contains(.,\'Invalid email\')]')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 60000ms
  - waiting for locator('//div[contains(@class,\'redError\')][contains(.,\'Invalid email\')]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - main "Clinical Login" [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - img "Riverside Score Logo" [ref=e7]
        - text: Subscription Activation
        - generic [ref=e8]:
          - text: Tiller School-Carteret County |
          - generic [ref=e9]: WJ V Unlimited
      - generic:
        - generic [ref=e10]:
          - text: Use my Existing Login
          - list [ref=e12]:
            - listitem [ref=e13]: I would like to add this subscription to my existing Account & Location.
            - listitem [ref=e14]: Your data will be visible only to your Location.
            - listitem [ref=e15]: This subscription's data will belong to "TILLER SCHOOL-CARTERET COUNTY".
          - button "I'm ready to start using my subscription" [ref=e17] [cursor=pointer]: I'm ready to start using my subscription
          - button "Sign In" [disabled] [ref=e20]
        - generic [ref=e21]:
          - text: I Need to Create a Login
          - list [ref=e23]:
            - listitem [ref=e24]: I would like to add this subscription to a new Account & Location.
            - listitem [ref=e25]: You will create a new Location that will exists under this Organization.
            - listitem [ref=e26]: This Location and its data will not be visible to other Locations that get created under "TILLER SCHOOL-CARTERET COUNTY" on Riverside Score.
            - listitem [ref=e27]: This subscription's data will belong to "TILLER SCHOOL-CARTERET COUNTY".
          - button "I'm ready to start using my subscription" [ref=e29] [cursor=pointer]: I'm ready to start using my subscription
          - button "Create an Account" [ref=e32] [cursor=pointer]
  - contentinfo [ref=e33]:
    - generic [ref=e34]: Footer region,
    - link "Riverside Insights Website" [ref=e35] [cursor=pointer]:
      - /url: https://www.riversideinsights.com
      - img "Riverside Insights Website" [ref=e36]
    - generic [ref=e37]:
      - link "Riverside Insights Facebook" [ref=e38] [cursor=pointer]:
        - /url: https://www.facebook.com/RiversideInsights/
        - img "Riverside Insights Facebook" [ref=e39]
      - link "Riverside Insights Twitter" [ref=e40] [cursor=pointer]:
        - /url: https://twitter.com/1BillionLives
        - img "Riverside Insights Twitter" [ref=e41]
      - link "Riverside Insights LinkedIn" [ref=e42] [cursor=pointer]:
        - /url: https://www.linkedin.com/company/riverside-insights/
        - img "Riverside Insights LinkedIn" [ref=e43]
      - link "Riverside Insights Instagram" [ref=e44] [cursor=pointer]:
        - /url: https://www.instagram.com/riversideinsightsassessments/
        - img "Riverside Insights Instagram" [ref=e45]
    - generic [ref=e46]:
      - img "WJ IV Mobile Data Solution" [ref=e47]
      - button "Download Woodcock Johnson 4 Mobile App from Google Play" [ref=e48] [cursor=pointer]
      - button "Download Woodcock Johnson 4 Mobile App from App Store" [ref=e49] [cursor=pointer]
    - generic [ref=e50]:
      - img "Bdi 3 Mobile Data Solution" [ref=e51]
      - generic [ref=e52]:
        - button "Download BDI-3 Mobile App from Microsoft Store" [ref=e53] [cursor=pointer]
        - button "Download BDI-3 Mobile App from Google Play" [ref=e54] [cursor=pointer]
        - button "Download BDI-3 Mobile App from App Store" [ref=e55] [cursor=pointer]
    - generic [ref=e56]:
      - button "Leave Feedback" [ref=e57] [cursor=pointer]
      - generic [ref=e58]: "|"
      - link "Terms of Use" [ref=e59] [cursor=pointer]:
        - /url: https://info.riversideinsights.com/terms-of-use
      - generic [ref=e60]: "|"
      - link "Privacy Policy" [ref=e61] [cursor=pointer]:
        - /url: https://info.riversideinsights.com/privacy-assessment_policy
    - generic [ref=e62]: Footer region end
```

# Test source

```ts
  268 |     await expect.soft(this.confirmEndDateInput).toHaveValue(endMMDDYYYY);
  269 |   }
  270 | 
  271 |   async getConfirmDateValues(): Promise<{ startValue: string; endValue: string }> {
  272 |     return {
  273 |       startValue: await this.confirmStartDateInput.inputValue(),
  274 |       endValue: await this.confirmEndDateInput.inputValue(),
  275 |     };
  276 |   }
  277 | 
  278 |   async verifyRolloverConfirmExtras() {
  279 |     await expect.soft(this.confirmEndDateInput).toBeDisabled();
  280 |     await expect.soft(this.confirmSubtestRolloverNote).toBeVisible();
  281 |   }
  282 | 
  283 |   async verifyConfirmNotesForType(expectsRolloverNote: boolean) {
  284 |     await expect.soft(this.confirmSubtestDescriptionNote).toBeVisible();
  285 |     if (expectsRolloverNote) {
  286 |       await expect.soft(this.confirmSubtestRolloverNote).toBeVisible();
  287 |     } else {
  288 |       await expect
  289 |         .soft(this.confirmSubtestRolloverNote, 'rollover note must not show for Unlimited')
  290 |         .toHaveCount(0);
  291 |     }
  292 |   }
  293 | 
  294 |   async verifyNoConfirmPopupIsShown() {
  295 |     await expect.soft(this.confirmActivationHeading).toHaveCount(0);
  296 |     await expect.soft(this.confirmRenewalHeading).toHaveCount(0);
  297 |   }
  298 | 
  299 |   async verifyOnSignInToActivatePageWithoutRenewalPopup() {
  300 |     await expect.soft(this.signInToActivateHeading).toBeVisible();
  301 |     await expect.soft(this.confirmRenewalHeading).not.toBeVisible();
  302 |   }
  303 | 
  304 |   async verifySignInButtonIsVisible() {
  305 |     await expect(this.signInButton).toBeVisible();
  306 |   }
  307 | 
  308 |   async verifyFutureDateBannerVisible(futureStartMMDDYYYY: string) {
  309 |     await expect.soft(this.subscriptionFutureDateBanner).toBeVisible();
  310 |     await expect
  311 |       .soft(this.subscriptionFutureDateBanner)
  312 |       .toContainText(`Your subscription begins on ${futureStartMMDDYYYY}`);
  313 |   }
  314 | 
  315 |   async verifyFutureDateBannerIsAbsent() {
  316 |     await expect.soft(this.subscriptionFutureDateBanner).toHaveCount(0);
  317 |   }
  318 | 
  319 |   async verifyReportsTabEnabledState(isEnabled: boolean) {
  320 |     if (isEnabled) {
  321 |       await expect.soft(this.reportsTab).toBeEnabled();
  322 |     } else {
  323 |       await expect.soft(this.reportsTab).toBeDisabled();
  324 |     }
  325 |   }
  326 | 
  327 |   async signOutFromHeader() {
  328 |     await this.signOutButton.click();
  329 |   }
  330 | 
  331 |   async signInAs(username: string, password: string) {
  332 |     await this.userName.fill(username);
  333 |     await this.passWord.fill(password);
  334 |     await this.signInButton.click();
  335 |   }
  336 | 
  337 |   async verifyAHRetainedWithWJVOnLandingPage(formData: SubscriptionActivationFormData) {
  338 |     await expect.soft(this.productDisplayCardWJV).toBeVisible();
  339 |     await expect.soft(this.userNameDisplayHeader).toHaveText(`${formData.firstName} ${formData.lastName}`);
  340 |   }
  341 | 
  342 |   async verifyActivationCodeAlreadyUsedError(activationCode: string) {
  343 |     await this.gotoActivationUrl(activationCode);
  344 |     await this.whiteLoadingIcon.waitFor({ state: 'hidden', timeout: 90000 });
  345 |     await expect.soft(this.activationCustomerNameText).toContainText('Activation code is already activated');
  346 |   }
  347 | 
  348 |   async verifyInvalidActivationCodeError(malformedCode: string) {
  349 |     await this.gotoActivationUrl(malformedCode);
  350 |     await this.whiteLoadingIcon.waitFor({ state: 'hidden', timeout: 90000 });
  351 |     await expect.soft(this.activationCustomerNameText).toContainText('Invalid activation code');
  352 |   }
  353 | 
  354 |   async fillContactWithInvalidEmailAndPhone(
  355 |     data: SubscriptionActivationFormData,
  356 |     invalidEmail: string,
  357 |     invalidPhone: string
  358 |   ) {
  359 |     await this.contactFirstNameInput.pressSequentially(data.firstName, { delay: 50 });
  360 |     await this.contactLastNameInput.pressSequentially(data.lastName, { delay: 50 });
  361 |     await this.contactEmailInput.pressSequentially(invalidEmail, { delay: 50 });
  362 |     await this.contactEmailInput.press('Tab');
  363 |     await this.contactPhoneInput.pressSequentially(invalidPhone, { delay: 50 });
  364 |     await this.contactPhoneInput.press('Tab');
  365 |   }
  366 | 
  367 |   async assertContactInvalidEmailErrorVisible() {
> 368 |     await expect.soft(this.contactInvalidEmailError).toBeVisible();
      |                                                      ^ Error: expect(locator).toBeVisible() failed
  369 |   }
  370 | 
  371 |   async assertContactInvalidPhoneErrorVisible() {
  372 |     await expect.soft(this.contactInvalidPhoneError).toBeVisible();
  373 |   }
  374 | 
  375 |   async correctContactEmailAndPhone(validEmail: string, validPhone: string) {
  376 |     await this.contactEmailInput.click();
  377 |     await this.contactEmailInput.press('Control+A');
  378 |     await this.contactEmailInput.press('Delete');
  379 |     await this.contactEmailInput.pressSequentially(validEmail, { delay: 50 });
  380 |     await this.contactEmailInput.press('Tab');
  381 | 
  382 |     await this.contactPhoneInput.click();
  383 |     await this.contactPhoneInput.press('Control+A');
  384 |     await this.contactPhoneInput.press('Delete');
  385 |     await this.contactPhoneInput.pressSequentially(validPhone, { delay: 50 });
  386 |     await this.contactPhoneInput.press('Tab');
  387 | 
  388 |     await this.wizardNextButton.click();
  389 |   }
  390 | 
  391 |   async fillPasswordOnly(password: string) {
  392 |     await this.credentialsPasswordInput.click();
  393 |     await this.credentialsPasswordInput.press('Control+A');
  394 |     await this.credentialsPasswordInput.press('Delete');
  395 |     await this.credentialsPasswordInput.pressSequentially(password, { delay: 50 });
  396 |     await this.credentialsPasswordInput.press('Tab');
  397 |   }
  398 | 
  399 |   async assertPasswordLengthErrorVisible() {
  400 |     await expect.soft(this.passwordLengthError).toBeVisible();
  401 |   }
  402 | 
  403 |   async fillMismatchedPasswords(password: string, confirmPassword: string) {
  404 |     await this.credentialsPasswordInput.click();
  405 |     await this.credentialsPasswordInput.press('Control+A');
  406 |     await this.credentialsPasswordInput.press('Delete');
  407 |     await this.credentialsPasswordInput.pressSequentially(password, { delay: 50 });
  408 | 
  409 |     await this.credentialsConfirmPasswordInput.click();
  410 |     await this.credentialsConfirmPasswordInput.press('Control+A');
  411 |     await this.credentialsConfirmPasswordInput.press('Delete');
  412 |     await this.credentialsConfirmPasswordInput.pressSequentially(confirmPassword, { delay: 50 });
  413 |     await this.credentialsConfirmPasswordInput.press('Tab');
  414 |   }
  415 | 
  416 |   async fillValidCredentialsAndProceed(data: SubscriptionActivationFormData) {
  417 |     await this.credentialsUsernameInput.click();
  418 |     await this.credentialsUsernameInput.press('Control+A');
  419 |     await this.credentialsUsernameInput.press('Delete');
  420 |     await this.credentialsUsernameInput.pressSequentially(data.username, { delay: 50 });
  421 | 
  422 |     await this.credentialsPasswordInput.click();
  423 |     await this.credentialsPasswordInput.press('Control+A');
  424 |     await this.credentialsPasswordInput.press('Delete');
  425 |     await this.credentialsPasswordInput.pressSequentially(data.password, { delay: 50 });
  426 | 
  427 |     await this.credentialsConfirmPasswordInput.click();
  428 |     await this.credentialsConfirmPasswordInput.press('Control+A');
  429 |     await this.credentialsConfirmPasswordInput.press('Delete');
  430 |     await this.credentialsConfirmPasswordInput.pressSequentially(data.password, { delay: 50 });
  431 |     await this.credentialsConfirmPasswordInput.press('Tab');
  432 | 
  433 |     await this.wizardNextButton.click();
  434 |   }
  435 | 
  436 |   async assertPasswordMismatchErrorVisible() {
  437 |     await expect.soft(this.passwordMismatchError).toBeVisible();
  438 |   }
  439 | 
  440 |   async clickWizardBack() {
  441 |     await this.wizardBackButton.click();
  442 |   }
  443 | 
  444 |   async assertOnContactInfoPage() {
  445 |     await expect.soft(this.contactInfoPageHeading).toBeVisible();
  446 |   }
  447 | 
  448 |   async assertOnUsernameAndPasswordPage() {
  449 |     await expect.soft(this.usernamePasswordPageHeading).toBeVisible();
  450 |   }
  451 | 
  452 |   async assertOnAddLocationPage() {
  453 |     await expect.soft(this.locationNameInput).toBeVisible();
  454 |   }
  455 | 
  456 |   async assertOnActivationLandingPage() {
  457 |     await expect.soft(this.iNeedToCreateALoginSpan).toBeVisible();
  458 |   }
  459 | 
  460 |   async waitForSubscriptionToBecomeActive(owner: ApiOrgOwner) {
  461 |     const subApi = new subscriptionApi(this.page, toApiCreds(owner));
  462 |     await expect
  463 |       .poll(
  464 |         async () => {
  465 |           const [summary] = await subApi.getOrgSubscriptionDetails(owner.username);
  466 |           return summary.CurrentSubscriptionStatus;
  467 |         },
  468 |         {
```