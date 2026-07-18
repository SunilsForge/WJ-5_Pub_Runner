# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/subscriptions/SubscriptionActivationSubsequentPurchaseAC3.spec.ts >> AC3 Happy path - Subtest user (rollover window, ≤4 months remaining) redeems Subtest Medium code - subtests go to rollover pool
- Location: src/tests/functional/subscriptions/SubscriptionActivationSubsequentPurchaseAC3.spec.ts:22:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//div[contains(@class,\'subscription-details-container\')]//div[@class=\'sd-label\'][contains(normalize-space(),\'CURRENT SUBTEST ROLLOVER\')]')
Expected substring: "09/16/2026"
Received string:    "CURRENT SUBTEST ROLLOVER (EXPIRES 09/05/2026)"
Timeout: 60000ms

Call log:
  - Expect "soft toContainText" with timeout 60000ms
  - waiting for locator('//div[contains(@class,\'subscription-details-container\')]//div[@class=\'sd-label\'][contains(normalize-space(),\'CURRENT SUBTEST ROLLOVER\')]')
    63 × locator resolved to <div class="sd-label">CURRENT SUBTEST ROLLOVER (EXPIRES 09/05/2026)</div>
       - unexpected value "CURRENT SUBTEST ROLLOVER (EXPIRES 09/05/2026)"

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
              - heading "Hello 02SubAutEu220626 ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "02SubAutEu220626 ln" [ref=e10] [cursor=pointer]
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
                  - generic [ref=e54]: 09/17/2025
                - generic [ref=e55]:
                  - generic [ref=e56]: EXPIRATION DATE
                  - generic [ref=e57]: 09/16/2027
              - generic [ref=e59]:
                - generic [ref=e60]: ACCOUNT HOLDER
                - generic [ref=e61]: 02SubAutEu220626 ln
                - generic [ref=e62]: sunil.adeptpros+02SubAutEu220626@gmail.com
              - generic [ref=e64]:
                - generic [ref=e65]: ACTIVATION CONTACT
                - generic [ref=e66]: 02SubAutEu220626 ln
                - generic [ref=e67]: sunil.adeptpros+02SubAutEu220626@gmail.com
                - button "More info" [ref=e68]
              - link "Terms and Conditions" [ref=e71] [cursor=pointer]:
                - /url: https://info.riversideinsights.com/terms-of-use
              - heading "Subtest Subscription Usage" [level=1] [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - generic [ref=e75]: REMAINING SUBTESTS
                  - generic [ref=e76]: "1200"
                  - button "More info" [ref=e77]
                - generic [ref=e78]:
                  - generic [ref=e79]: SUBTESTS USED
                  - generic [ref=e80]: "0"
              - generic [ref=e82]:
                - generic [ref=e83]: CURRENT SUBTEST ROLLOVER (EXPIRES 09/05/2026)
                - generic [ref=e84]: "200"
                - button "More info" [ref=e85]
              - generic [ref=e87]:
                - generic [ref=e88]: TOTAL ACTIVE STAFF
                - generic [ref=e89]: "2"
      - contentinfo [ref=e90]:
        - generic [ref=e91]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e92] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e93]
        - generic [ref=e94]:
          - link "Riverside Insights Facebook" [ref=e95] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e96]
          - link "Riverside Insights Twitter" [ref=e97] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e98]
          - link "Riverside Insights LinkedIn" [ref=e99] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e100]
          - link "Riverside Insights Instagram" [ref=e101] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e102]
        - generic [ref=e103]:
          - button "Leave Feedback" [ref=e104] [cursor=pointer]
          - generic [ref=e105]: "|"
          - link "Terms of Use" [ref=e106] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e107]: "|"
          - link "Privacy Policy" [ref=e108] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e109]: Footer region end
```

# Test source

```ts
  633 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  634 |     } catch {
  635 |       /* ignore */
  636 |     }
  637 |     await this.page.waitForTimeout(2000);
  638 | 
  639 |     const expectedStart = actualStartDate;
  640 |     const expectedEnd = actualEndDate;
  641 |     const expectedFullName = `${formData.firstName} ${formData.lastName}`;
  642 | 
  643 |     await expect.soft(this.subscriptionDetailsStartDateValue).toContainText(expectedStart);
  644 |     await expect.soft(this.subscriptionDetailsExpirationDateValue).toContainText(expectedEnd);
  645 |     await expect.soft(this.subscriptionDetailsAccountHolderNameValue).toContainText(expectedFullName);
  646 |     await expect.soft(this.subscriptionDetailsAccountHolderEmailValue).toContainText(formData.email);
  647 |     await expect.soft(this.subscriptionDetailsActivationContactNameValue).toContainText(expectedFullName);
  648 |     await expect.soft(this.subscriptionDetailsActivationContactEmailValue).toContainText(formData.email);
  649 | 
  650 |     await expect.soft(this.subscriptionDetailsSubscriptionUsageHeading).toContainText(scenario.subscriptionType);
  651 |     if (scenario.subtestCount !== undefined) {
  652 |       await expect.soft(this.subscriptionDetailsRemainingSubtestsValue).toHaveText(String(scenario.subtestCount));
  653 |     }
  654 |     await expect.soft(this.subscriptionDetailsSubtestsUsedValue).toHaveText('0');
  655 |     await expect.soft(this.subscriptionDetailsTotalActiveStaffValue).toHaveText('1');
  656 |     if (scenario.subtestCount === undefined) {
  657 |       await expect.soft(this.subscriptionDetailsAutoRenewalStatusValue).toContainText('ON');
  658 |     }
  659 |   }
  660 | 
  661 |   async verifySubtestErrorPopup(activationCode: string) {
  662 |     await this.gotoActivationUrl(activationCode);
  663 |     await this.whiteLoadingIcon.waitFor({ state: 'hidden', timeout: 90000 });
  664 |     await expect.soft(this.activationCustomerNameText).toBeVisible();
  665 |   }
  666 | 
  667 |   async ensureSubtestWindowState(
  668 |     user: ExistingUser,
  669 |     window: 'addon' | 'rollover'
  670 |   ): Promise<{ summary: OrgSubscriptionSummary; extras: OrgSubscriptionExtras }> {
  671 |     const subApi = new subscriptionApi(this.page);
  672 |     const endDate = window === 'addon'
  673 |       ? addDaysToServerTodayMMDDYYYY(150)
  674 |       : addDaysToServerTodayMMDDYYYY(60);
  675 |     await subApi.updateSubscriptionDetails(user.username, endDate, false);
  676 |     const [summary, extras] = await subApi.getOrgSubscriptionDetails(user.username);
  677 |     return { summary, extras };
  678 |   }
  679 | 
  680 |   async verifyAddOnConfirmDetails(
  681 |     orgName: string,
  682 |     currentStartMMDDYYYY: string,
  683 |     currentEndMMDDYYYY: string,
  684 |     subtestCount: number
  685 |   ) {
  686 |     await expect.soft(this.confirmActivationHeading).toBeVisible();
  687 |     await expect.soft(this.confirmSubscriptionValueText).toContainText('Subtest Subscription');
  688 |     await expect.soft(this.confirmLocationNameValueText).toContainText(orgName);
  689 |     await expect.soft(this.confirmLocationNameValueText).toContainText(`${subtestCount} Subtests`);
  690 |     await expect.soft(this.confirmSubtestDescriptionNote).toBeVisible();
  691 |     await expect.soft(this.confirmStartDateInput).toHaveValue(currentStartMMDDYYYY);
  692 |     await expect.soft(this.confirmStartDateInput).toBeDisabled();
  693 |     await expect.soft(this.confirmEndDateInput).toHaveValue(currentEndMMDDYYYY);
  694 |     await expect.soft(this.confirmEndDateInput).toBeDisabled();
  695 |   }
  696 | 
  697 |   async verifySubtestPoolApiState(
  698 |     username: string,
  699 |     expectedRemaining: number,
  700 |     expectedRollover?: number
  701 |   ) {
  702 |     const subApi = new subscriptionApi(this.page);
  703 |     const [, extras] = await subApi.getOrgSubscriptionDetails(username);
  704 |     RawValueLogger.log('Subtest pool API state', {
  705 |       remainingSubtests: extras.remainingSubtests,
  706 |       subtestsRollover: extras.subtestsRollover,
  707 |       rolloverStartDate: extras.rolloverStartDate,
  708 |       rolloverEndDate: extras.rolloverEndDate,
  709 |     });
  710 |     expect.soft(extras.remainingSubtests, 'remainingSubtests').toBe(expectedRemaining);
  711 |     if (expectedRollover !== undefined) {
  712 |       expect.soft(extras.subtestsRollover, 'subtestsRollover').toBe(expectedRollover);
  713 |     }
  714 |   }
  715 | 
  716 |   async verifyAbandonedCodeIsAvailable(scenario: ActivationCode) {
  717 |     await this.gotoActivationUrl(scenario.activationCode);
  718 |     await this.whiteLoadingIcon.waitFor({ state: 'hidden', timeout: 90000 });
  719 |     await expect.soft(this.iNeedToCreateALoginSpan).toBeVisible();
  720 |   }
  721 | 
  722 |   async verifyRolloverSubscriptionDetailsPage(
  723 |     expirationDateMMDDYYYY: string,
  724 |     expectedRemainingSubtests: number,
  725 |     rolloverCount: number,
  726 |     rolloverExpiryMMDDYYYY: string
  727 |   ) {
  728 |     await this.openSubscriptionDetailsPage();
  729 |     await this.subscriptionDetailsExpirationDateValue.waitFor({ state: 'visible', timeout: 15000 });
  730 |     await expect.soft(this.subscriptionDetailsExpirationDateValue).toContainText(expirationDateMMDDYYYY);
  731 |     await expect.soft(this.subscriptionDetailsRemainingSubtestsValue).toHaveText(String(expectedRemainingSubtests));
  732 |     await expect.soft(this.subscriptionDetailsRolloverCountValue).toHaveText(String(rolloverCount));
> 733 |     await expect.soft(this.subscriptionDetailsRolloverLabel).toContainText(rolloverExpiryMMDDYYYY);
      |                                                              ^ Error: expect(locator).toContainText(expected) failed
  734 |   }
  735 | 
  736 |   async verifyTypeMismatchError() {
  737 |     await this.subscriptionErrorPopup.waitFor({ state: 'visible', timeout: 30000 });
  738 |     await expect.soft(this.subscriptionErrorHeading).toHaveText('SUBSCRIPTION ERROR');
  739 |     await expect.soft(this.subscriptionErrorMessage).toContainText('does not match your current subscription type');
  740 |   }
  741 | 
  742 |   async clickSubscriptionErrorLogout() {
  743 |     await this.subscriptionErrorLogoutButton.click();
  744 |     await this.whiteLoadingIcon.waitFor({ state: 'hidden', timeout: 30000 });
  745 |   }
  746 | }
  747 | 
```