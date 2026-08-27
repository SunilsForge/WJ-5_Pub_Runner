# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/subscriptions/SubscriptionActivationNewUser.spec.ts >> Subtest High - new user activation flow
- Location: src/tests/functional/subscriptions/SubscriptionActivationNewUser.spec.ts:13:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Subtest"
Received string:    "WJ V Unlimited"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sandy SubAut27Aug26160804"
Received: "03PwAut25AH ln"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "sunil.adeptpros+SubAut27Aug26160804@gmail.com"
Received: "sunil.adeptpros+03PwAut25AH@gmail.com"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sandy SubAut27Aug26160804"
Received: "—"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "sunil.adeptpros+SubAut27Aug26160804@gmail.com"
Received: "—"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "2026-08-27"
Received string:    "2026-02-10T00:00:00"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "2027-08-26"
Received string:    "2028-02-09T00:00:00"
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 100
Received: -444
```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - generic [ref=e1]:
        - banner "Clinical Products Header" [ref=e2]:
          - generic [ref=e3]:
            - button "Skip to main Content" [ref=e4]
            - link "Riverside Insights Logo" [ref=e5] [cursor=pointer]:
              - /url: /products
            - generic [ref=e6]: Riverside Insights Logo
            - generic [ref=e7]:
              - heading "Hello Sandy SubAut27Aug26160804" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "Sandy SubAut27Aug26160804" [ref=e10] [cursor=pointer]
              - navigation [ref=e13]:
                - button "Contact Us" [ref=e14] [cursor=pointer]
                - button "| WJ V Settings" [active] [ref=e15] [cursor=pointer]
                - button "| Sign Out" [ref=e16] [cursor=pointer]
        - navigation "Navigation toolbar" [ref=e17]:
          - menubar [ref=e19]:
            - menuitem "Dashboard" [ref=e21] [cursor=pointer]
            - menuitem "Test Sets" [ref=e23] [cursor=pointer]
            - menuitem "Examinees" [ref=e25] [cursor=pointer]
            - menuitem "Staff" [ref=e27] [cursor=pointer]
            - menuitem "Reports" [ref=e29] [cursor=pointer]:
              - text: Reports
              - img [ref=e30]
              - menu
            - menuitem "Resources" [ref=e33] [cursor=pointer]
          - generic [ref=e34]:
            - switch "Offline Mode" [ref=e35] [cursor=pointer]: "OFF"
            - generic [ref=e36]: Offline Mode
        - main [ref=e37]:
          - generic [ref=e39]:
            - generic [ref=e40]:
              - generic "WJ V Settings Navigation" [ref=e41]:
                - img [ref=e43]
                - text: WJ V Settings
              - menu [ref=e45]:
                - menuitem "Subscription Management" [ref=e46] [cursor=pointer]
                - menuitem "Report Settings" [ref=e47] [cursor=pointer]
            - generic [ref=e49]:
              - heading "Subscription Management" [level=1] [ref=e50]
              - generic [ref=e51]:
                - generic [ref=e52]:
                  - generic [ref=e53]: START DATE
                  - generic [ref=e54]: 08/27/2026
                - generic [ref=e55]:
                  - generic [ref=e56]: EXPIRATION DATE
                  - generic [ref=e57]: 08/26/2027
              - generic [ref=e59]:
                - generic [ref=e60]: ACCOUNT HOLDER
                - generic [ref=e61]: Sandy SubAut27Aug26160804
                - generic [ref=e62]: sunil.adeptpros+SubAut27Aug26160804@gmail.com
              - generic [ref=e64]:
                - generic [ref=e65]: ACTIVATION CONTACT
                - generic [ref=e66]: Sandy SubAut27Aug26160804
                - generic [ref=e67]: sunil.adeptpros+SubAut27Aug26160804@gmail.com
                - button "More info" [ref=e68]
              - link "Terms and Conditions" [ref=e71] [cursor=pointer]:
                - /url: https://info.riversideinsights.com/terms-of-use
              - heading "Subtest Subscription Usage" [level=1] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - generic [ref=e75]: REMAINING SUBTESTS
                  - generic [ref=e76]: "100"
                  - button "More info" [ref=e77]
                - generic [ref=e78]:
                  - generic [ref=e79]: SUBTESTS USED
                  - generic [ref=e80]: "0"
              - generic [ref=e82]:
                - generic [ref=e83]: TOTAL ACTIVE STAFF
                - generic [ref=e84]: "1"
      - contentinfo [ref=e85]:
        - generic [ref=e86]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e87] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e88]
        - generic [ref=e89]:
          - link "Riverside Insights Facebook" [ref=e90] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e91]
          - link "Riverside Insights Twitter" [ref=e92] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e93]
          - link "Riverside Insights LinkedIn" [ref=e94] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e95]
          - link "Riverside Insights Instagram" [ref=e96] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e97]
        - generic [ref=e98]:
          - button "Leave Feedback" [ref=e99] [cursor=pointer]
          - generic [ref=e100]: "|"
          - link "Terms of Use" [ref=e101] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e102]: "|"
          - link "Privacy Policy" [ref=e103] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e104]: Footer region end
  - region "Chat Widget" [ref=e105]:
    - iframe [ref=e106]:
      - button "Open live chat" [ref=f17e5]:
        - img [ref=f17e8]
        - img [ref=f17e15]
    - generic "Drag" [ref=e107]:
      - img [ref=e108]
```

# Test source

```ts
  530 | 
  531 |   async clickAbandonActivation() {
  532 |     await this.confirmAbandonActivationButton.click();
  533 |   }
  534 | 
  535 |   async verifyOnLoginPageAfterAbandon() {
  536 |     const baseUrl = getSiteUrl().replace(/\/+$/, '');
  537 |     await this.page.waitForURL(url => url.toString().startsWith(baseUrl), { timeout: 30_000 });
  538 |     await expect.soft(this.signInButton).toBeVisible();
  539 |   }
  540 | 
  541 |   async confirmActivation() {
  542 |     await this.confirmAcceptTermsCheckbox.click();
  543 |     await Promise.all([
  544 |       this.page.waitForResponse(response => response.url().includes('ConfirmActivation') && response.status() === 200, {
  545 |         timeout: 2 * 60 * 1000,
  546 |       }),
  547 |       this.confirmActivationButton.click(),
  548 |     ]);
  549 |   }
  550 | 
  551 |   async dismiss2FAPopupIfPresent() {
  552 |     try {
  553 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  554 |     } catch {}
  555 |     await this.page.waitForTimeout(3000);
  556 | 
  557 |     try {
  558 |       if (await this.twoFactorAuthCancelButton.isVisible()) {
  559 |         await this.twoFactorAuthCancelButton.click();
  560 |       }
  561 |     } catch (error) {
  562 |       console.warn('Error while dismissing 2FA popup: ', error);
  563 |     }
  564 |   }
  565 | 
  566 |   async acceptTermsDialogIfPresent() {
  567 |     try {
  568 |       const updateTermsPopup = await this.page.getByRole('dialog').first().isVisible();
  569 |       if (updateTermsPopup) {
  570 |         await this.page.getByRole('button', { name: 'I Accept' }).click();
  571 |       }
  572 |     } catch (error) {
  573 |       console.warn('Error while accepting user terms: ', error);
  574 |     }
  575 |   }
  576 | 
  577 |   async dismissPendoGuideIfPresent() {
  578 |     try {
  579 |       await this.pendoGuideCloseButton.waitFor({ state: 'visible', timeout: 3000 });
  580 |       await this.pendoGuideCloseButton.click();
  581 |     } catch {
  582 |       /* Pendo guide didn't appear in time — proceed */
  583 |     }
  584 |   }
  585 | 
  586 |   async clickWJVTileAndVerifyDashboard(expectedHeaderName: string) {
  587 |     await expect.soft(this.userNameDisplayHeader).toHaveText(expectedHeaderName);
  588 |     await this.productDisplayCardWJV.click();
  589 |     await this.dismissPendoGuideIfPresent();
  590 |     await expect(this.myTestAssignmentsText).toBeVisible();
  591 |   }
  592 | 
  593 |   async verifyGIATestSetAccess(cognitiveAccess: boolean) {
  594 |     await this.dismissPendoGuideIfPresent();
  595 |     await this.testSetButton.click();
  596 |     try {
  597 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  598 |     } catch {}
  599 |     if (cognitiveAccess) {
  600 |       await expect.soft(this.giaTestSetNameSpan).toBeVisible();
  601 |     } else {
  602 |       await expect.soft(this.giaTestSetNameSpan).not.toBeVisible();
  603 |     }
  604 |   }
  605 | 
  606 |   async verifyEntitlementApiAfterActivation(
  607 |     formData: SubscriptionActivationFormData,
  608 |     scenario: ActivationCode,
  609 |     actualStartDate: string,
  610 |     actualEndDate: string
  611 |   ) {
  612 |     const subApi = new subscriptionApi(this.page);
  613 |     const [summary, extras] = await subApi.getOrgSubscriptionDetails(formData.username);
  614 | 
  615 |     const expectedFullName = `${formData.firstName} ${formData.lastName}`;
  616 |     const expectedStart = actualStartDate;
  617 |     const expectedEnd = actualEndDate;
  618 | 
  619 |     expect.soft(summary.OrganizationId, 'OrganizationId should be returned').toBeGreaterThan(0);
  620 |     expect.soft(summary.SubscriptionType).toContain(scenario.subscriptionType);
  621 |     expect.soft(summary.CognitiveTesting).toBe(scenario.cognitiveAccess);
  622 |     expect.soft(extras.accountHolderName).toBe(expectedFullName);
  623 |     expect.soft(extras.accountHolderEmail).toBe(formData.email);
  624 |     expect.soft(extras.activationContactName).toBe(expectedFullName);
  625 |     expect.soft(extras.activationContactEmail).toBe(formData.email);
  626 |     expect.soft(extras.currentStartDate).toContain(mmddyyyyToIsoPrefix(expectedStart));
  627 |     expect.soft(extras.currentEndDate).toContain(mmddyyyyToIsoPrefix(expectedEnd));
  628 | 
  629 |     if (scenario.subtestCount !== undefined) {
> 630 |       expect.soft(extras.remainingSubtests).toBe(scenario.subtestCount);
      |                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  631 |     }
  632 |   }
  633 | 
  634 |   async verifyRenewalApiState(username: string, expectedRenewalEndMMDDYYYY: string, expectedSubtestCount?: number, checkHasRenewal = true) {
  635 |     const subApi = new subscriptionApi(this.page);
  636 |     const [summary, extras] = await subApi.getOrgSubscriptionDetails(username);
  637 |     if (checkHasRenewal) {
  638 |       expect.soft(summary.HasRenewal, 'HasRenewal').toBe('true');
  639 |     }
  640 |     if (summary.SubscriptionTo) {
  641 |       expect.soft(isoToMMDDYYYY(summary.SubscriptionTo)).toBe(expectedRenewalEndMMDDYYYY);
  642 |     }
  643 |     if (expectedSubtestCount !== undefined && extras.remainingSubtests !== undefined) {
  644 |       expect.soft(extras.remainingSubtests, 'remainingSubtests').toBeGreaterThan(0);
  645 |       expect.soft(extras.remainingSubtests, 'remainingSubtests purchased count').toBe(expectedSubtestCount);
  646 |     }
  647 |     RawValueLogger.log('S32 API snapshot', { hasRenewal: summary.HasRenewal, renewalEndDate: summary.RenewalEndDate, remainingSubtests: extras.remainingSubtests });
  648 |   }
  649 | 
  650 |   async verifySubscriptionDetailsAfterRenewal(renewalEndMMDDYYYY: string, expectedRemainingSubtests?: number) {
  651 |     await this.openSubscriptionDetailsPage();
  652 |     await this.subscriptionDetailsExpirationDateValue.waitFor({ state: 'visible', timeout: 15000 });
  653 |     await expect.soft(this.subscriptionDetailsExpirationDateValue).toContainText(renewalEndMMDDYYYY);
  654 |     if (expectedRemainingSubtests !== undefined) {
  655 |       await expect.soft(this.subscriptionDetailsRemainingSubtestsValue).toHaveText(String(expectedRemainingSubtests));
  656 |     }
  657 |   }
  658 | 
  659 |   async openSubscriptionDetailsPage() {
  660 |     try {
  661 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  662 |     } catch {
  663 |       /* ignore */
  664 |     }
  665 |     await this.dismissPendoGuideIfPresent();
  666 |     await this.page.waitForTimeout(2000);
  667 |     await this.subscriptionDetailsButton.click();
  668 |   }
  669 | 
  670 |   async verifySubscriptionDetailsPage(
  671 |     formData: SubscriptionActivationFormData,
  672 |     scenario: ActivationCode,
  673 |     actualStartDate: string,
  674 |     actualEndDate: string
  675 |   ) {
  676 |     try {
  677 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  678 |     } catch {
  679 |       /* ignore */
  680 |     }
  681 |     await this.page.waitForTimeout(2000);
  682 | 
  683 |     const expectedStart = actualStartDate;
  684 |     const expectedEnd = actualEndDate;
  685 |     const expectedFullName = `${formData.firstName} ${formData.lastName}`;
  686 | 
  687 |     await expect.soft(this.subscriptionDetailsStartDateValue).toContainText(expectedStart);
  688 |     await expect.soft(this.subscriptionDetailsExpirationDateValue).toContainText(expectedEnd);
  689 |     await expect.soft(this.subscriptionDetailsAccountHolderNameValue).toContainText(expectedFullName);
  690 |     await expect.soft(this.subscriptionDetailsAccountHolderEmailValue).toContainText(formData.email);
  691 |     await expect.soft(this.subscriptionDetailsActivationContactNameValue).toContainText(expectedFullName);
  692 |     await expect.soft(this.subscriptionDetailsActivationContactEmailValue).toContainText(formData.email);
  693 | 
  694 |     await expect.soft(this.subscriptionDetailsSubscriptionUsageHeading).toContainText(scenario.subscriptionType);
  695 |     if (scenario.subtestCount !== undefined) {
  696 |       await expect.soft(this.subscriptionDetailsRemainingSubtestsValue).toHaveText(String(scenario.subtestCount));
  697 |     }
  698 |     await expect.soft(this.subscriptionDetailsSubtestsUsedValue).toHaveText('0');
  699 |     await expect.soft(this.subscriptionDetailsTotalActiveStaffValue).toHaveText('1');
  700 |     if (scenario.subtestCount === undefined) {
  701 |       await expect.soft(this.subscriptionDetailsAutoRenewalStatusValue).toContainText('ON');
  702 |     }
  703 |   }
  704 | 
  705 |   async verifySubtestErrorPopup(activationCode: string) {
  706 |     await this.gotoActivationUrl(activationCode);
  707 |     await this.whiteLoadingIcon.waitFor({ state: 'hidden', timeout: 90000 });
  708 |     await expect.soft(this.activationCustomerNameText).toBeVisible();
  709 |   }
  710 | 
  711 |   async ensureSubtestWindowState(
  712 |     user: ExistingUser,
  713 |     window: 'addon' | 'rollover'
  714 |   ): Promise<{ summary: OrgSubscriptionSummary; extras: OrgSubscriptionExtras }> {
  715 |     const subApi = new subscriptionApi(this.page);
  716 |     const endDate = window === 'addon'
  717 |       ? addDaysToServerTodayMMDDYYYY(150)
  718 |       : addDaysToServerTodayMMDDYYYY(60);
  719 |     await subApi.updateSubscriptionDetails(user.username, endDate, false);
  720 |     const [summary, extras] = await subApi.getOrgSubscriptionDetails(user.username);
  721 |     return { summary, extras };
  722 |   }
  723 | 
  724 |   async createFreshOrg(
  725 |     seedScenario: ActivationCode,
  726 |     formData: SubscriptionActivationFormData,
  727 |     signOutAfter = true
  728 |   ): Promise<void> {
  729 |     await this.resetActivationStateAndLand(seedScenario);
  730 |     await this.selectCreateLoginAndProceed();
```