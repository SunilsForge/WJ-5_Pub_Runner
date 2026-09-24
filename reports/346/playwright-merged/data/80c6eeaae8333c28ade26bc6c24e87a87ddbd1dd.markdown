# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/subscriptions/SubscriptionActivationExistingUser.spec.ts >> Existing user (Expired subscription) redeems Subtest High code - Confirm Renewal with editable dates
- Location: src/tests/functional/subscriptions/SubscriptionActivationExistingUser.spec.ts:134:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('//label[text()=\'START DATE\']/following-sibling::div/input')
Expected: "09/24/2026"
Received: "09/21/2026"
Timeout:  60000ms

Call log:
  - Expect "soft toHaveValue" with timeout 60000ms
  - waiting for locator('//label[text()=\'START DATE\']/following-sibling::div/input')
    63 × locator resolved to <input disabled id="tbi_22" type="text" translate="yes" autocomplete="off" value="09/21/2026" aria-labelledby="tb_22" placeholder="mm/dd/yyyy" class="text-input with-icon"/>
       - unexpected value "09/21/2026"

```

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('//label[text()=\'END DATE\']/following-sibling::div/input')
Expected: "09/23/2027"
Received: "09/20/2027"
Timeout:  60000ms

Call log:
  - Expect "soft toHaveValue" with timeout 60000ms
  - waiting for locator('//label[text()=\'END DATE\']/following-sibling::div/input')
    63 × locator resolved to <input disabled id="tbi_24" type="text" placeholder="" translate="yes" autocomplete="off" value="09/20/2027" aria-labelledby="tb_24" class="text-input with-icon"/>
       - unexpected value "09/20/2027"

```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "09/23/2027"
Received: "09/20/2027"
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//div[contains(@class,\'subscription-details-container\')]//div[@class=\'sd-label\'][normalize-space()=\'EXPIRATION DATE\']/following-sibling::div[contains(@class,\'sd-value\')][1]')
Expected substring: "09/23/2027"
Received string:    "09/20/2027"
Timeout: 60000ms

Call log:
  - Expect "soft toContainText" with timeout 60000ms
  - waiting for locator('//div[contains(@class,\'subscription-details-container\')]//div[@class=\'sd-label\'][normalize-space()=\'EXPIRATION DATE\']/following-sibling::div[contains(@class,\'sd-value\')][1]')
    63 × locator resolved to <div class="sd-value">09/20/2027</div>
       - unexpected value "09/20/2027"

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
              - heading "Hello Jovani SubAut24Sep26050741uav" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "Jovani SubAut24Sep26050741uav" [ref=e10] [cursor=pointer]
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
                  - generic [ref=e54]: 09/21/2026
                - generic [ref=e55]:
                  - generic [ref=e56]: EXPIRATION DATE
                  - generic [ref=e57]: 09/20/2027
              - generic [ref=e59]:
                - generic [ref=e60]: ACCOUNT HOLDER
                - generic [ref=e61]: Jovani SubAut24Sep26050741uav
                - generic [ref=e62]: sunil.adeptpros+SubAut24Sep26050741uav@gmail.com
              - generic [ref=e64]:
                - generic [ref=e65]: ACTIVATION CONTACT
                - generic [ref=e66]: Jovani SubAut24Sep26050741uav
                - generic [ref=e67]: sunil.adeptpros+SubAut24Sep26050741uav@gmail.com
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
          - /url: https://www.riversideinsights.com
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
```

# Test source

```ts
  734 |     } catch (error) {
  735 |       console.warn('Error while dismissing 2FA popup: ', error);
  736 |     }
  737 |   }
  738 | 
  739 |   async acceptTermsDialogIfPresent() {
  740 |     try {
  741 |       const updateTermsPopup = await this.page.getByRole('dialog').first().isVisible();
  742 |       if (updateTermsPopup) {
  743 |         await this.page.getByRole('button', { name: 'I Accept' }).click();
  744 |       }
  745 |     } catch (error) {
  746 |       console.warn('Error while accepting user terms: ', error);
  747 |     }
  748 |   }
  749 | 
  750 |   async dismissPendoGuideIfPresent() {
  751 |     try {
  752 |       await this.pendoGuideCloseButton.waitFor({ state: 'visible', timeout: 3000 });
  753 |       await this.pendoGuideCloseButton.click();
  754 |     } catch {
  755 |       /* Pendo guide didn't appear in time — proceed */
  756 |     }
  757 |   }
  758 | 
  759 |   async clickWJVTileAndVerifyDashboard(expectedHeaderName: string) {
  760 |     await expect.soft(this.userNameDisplayHeader).toHaveText(expectedHeaderName);
  761 |     await this.productDisplayCardWJV.click();
  762 |     await this.dismissPendoGuideIfPresent();
  763 |     await expect(this.myTestAssignmentsText).toBeVisible();
  764 |   }
  765 | 
  766 |   async verifyGIATestSetAccess(cognitiveAccess: boolean) {
  767 |     await this.dismissPendoGuideIfPresent();
  768 |     await this.testSetButton.click();
  769 |     try {
  770 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  771 |     } catch {}
  772 |     if (cognitiveAccess) {
  773 |       await expect.soft(this.giaTestSetNameSpan).toBeVisible();
  774 |     } else {
  775 |       await expect.soft(this.giaTestSetNameSpan).not.toBeVisible();
  776 |     }
  777 |   }
  778 | 
  779 |   async verifyEntitlementApiAfterActivation(
  780 |     formData: SubscriptionActivationFormData,
  781 |     scenario: ActivationCode,
  782 |     actualStartDate: string,
  783 |     actualEndDate: string
  784 |   ) {
  785 |     const subApi = new subscriptionApi(this.page, toApiCreds(formData));
  786 |     const [summary, extras] = await subApi.getOrgSubscriptionDetails(formData.username);
  787 | 
  788 |     const expectedFullName = `${formData.firstName} ${formData.lastName}`;
  789 |     const expectedStart = actualStartDate;
  790 |     const expectedEnd = actualEndDate;
  791 | 
  792 |     // Hard assert: a payload for a different org makes every assertion below meaningless.
  793 |     expect(
  794 |       extras.accountHolderEmail,
  795 |       `API returned the org for '${extras.accountHolderName}' (${extras.accountHolderEmail}) but the ` +
  796 |         `test asked for '${expectedFullName}' (${formData.email}). The Automation endpoints resolve the ` +
  797 |         `org from the caller's token — check the credentials this call logged in with.`
  798 |     ).toBe(formData.email);
  799 | 
  800 |     expect.soft(summary.OrganizationId, 'OrganizationId should be returned').toBeGreaterThan(0);
  801 |     expect.soft(summary.SubscriptionType).toContain(scenario.subscriptionType);
  802 |     expect.soft(summary.CognitiveTesting).toBe(scenario.cognitiveAccess);
  803 |     expect.soft(extras.accountHolderName).toBe(expectedFullName);
  804 |     expect.soft(extras.accountHolderEmail).toBe(formData.email);
  805 |     expect.soft(extras.activationContactName).toBe(expectedFullName);
  806 |     expect.soft(extras.activationContactEmail).toBe(formData.email);
  807 |     expect.soft(extras.currentStartDate).toContain(mmddyyyyToIsoPrefix(expectedStart));
  808 |     expect.soft(extras.currentEndDate).toContain(mmddyyyyToIsoPrefix(expectedEnd));
  809 | 
  810 |     if (scenario.subtestCount !== undefined) {
  811 |       expect.soft(extras.remainingSubtests).toBe(scenario.subtestCount);
  812 |     }
  813 |   }
  814 | 
  815 |   async verifyRenewalApiState(owner: ApiOrgOwner, expectedRenewalEndMMDDYYYY: string, expectedSubtestCount?: number, checkHasRenewal = true) {
  816 |     const subApi = new subscriptionApi(this.page, toApiCreds(owner));
  817 |     const [summary, extras] = await subApi.getOrgSubscriptionDetails(owner.username);
  818 |     if (checkHasRenewal) {
  819 |       expect.soft(summary.HasRenewal, 'HasRenewal').toBe('true');
  820 |     }
  821 |     if (summary.SubscriptionTo) {
  822 |       expect.soft(isoToMMDDYYYY(summary.SubscriptionTo)).toBe(expectedRenewalEndMMDDYYYY);
  823 |     }
  824 |     if (expectedSubtestCount !== undefined && extras.remainingSubtests !== undefined) {
  825 |       expect.soft(extras.remainingSubtests, 'remainingSubtests').toBeGreaterThan(0);
  826 |       expect.soft(extras.remainingSubtests, 'remainingSubtests purchased count').toBe(expectedSubtestCount);
  827 |     }
  828 |     RawValueLogger.log('S32 API snapshot', { hasRenewal: summary.HasRenewal, renewalEndDate: summary.RenewalEndDate, remainingSubtests: extras.remainingSubtests });
  829 |   }
  830 | 
  831 |   async verifySubscriptionDetailsAfterRenewal(renewalEndMMDDYYYY: string, expectedRemainingSubtests?: number) {
  832 |     await this.openSubscriptionDetailsPage();
  833 |     await this.subscriptionDetailsExpirationDateValue.waitFor({ state: 'visible', timeout: 15000 });
> 834 |     await expect.soft(this.subscriptionDetailsExpirationDateValue).toContainText(renewalEndMMDDYYYY);
      |                                                                    ^ Error: expect(locator).toContainText(expected) failed
  835 |     if (expectedRemainingSubtests !== undefined) {
  836 |       await expect.soft(this.subscriptionDetailsRemainingSubtestsValue).toHaveText(String(expectedRemainingSubtests));
  837 |     }
  838 |   }
  839 | 
  840 |   async openSubscriptionDetailsPage() {
  841 |     try {
  842 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  843 |     } catch {}
  844 |     await this.dismissPendoGuideIfPresent();
  845 |     await this.page.waitForTimeout(2000);
  846 |     await this.subscriptionDetailsButton.click();
  847 |   }
  848 | 
  849 |   async verifySubscriptionDetailsPage(
  850 |     formData: SubscriptionActivationFormData,
  851 |     scenario: ActivationCode,
  852 |     actualStartDate: string,
  853 |     actualEndDate: string
  854 |   ) {
  855 |     try {
  856 |       await this.page.waitForLoadState('load', { timeout: 30_000 });
  857 |     } catch {}
  858 |     await this.page.waitForTimeout(2000);
  859 | 
  860 |     const expectedStart = actualStartDate;
  861 |     const expectedEnd = actualEndDate;
  862 |     const expectedFullName = `${formData.firstName} ${formData.lastName}`;
  863 | 
  864 |     await expect.soft(this.subscriptionDetailsStartDateValue).toContainText(expectedStart);
  865 |     await expect.soft(this.subscriptionDetailsExpirationDateValue).toContainText(expectedEnd);
  866 |     await expect.soft(this.subscriptionDetailsAccountHolderNameValue).toContainText(expectedFullName);
  867 |     await expect.soft(this.subscriptionDetailsAccountHolderEmailValue).toContainText(formData.email);
  868 |     await expect.soft(this.subscriptionDetailsActivationContactNameValue).toContainText(expectedFullName);
  869 |     await expect.soft(this.subscriptionDetailsActivationContactEmailValue).toContainText(formData.email);
  870 | 
  871 |     await expect.soft(this.subscriptionDetailsSubscriptionUsageHeading).toContainText(scenario.subscriptionType);
  872 |     if (scenario.subtestCount !== undefined) {
  873 |       await expect.soft(this.subscriptionDetailsRemainingSubtestsValue).toHaveText(String(scenario.subtestCount));
  874 |     }
  875 |     await expect.soft(this.subscriptionDetailsSubtestsUsedValue).toHaveText('0');
  876 |     await expect.soft(this.subscriptionDetailsTotalActiveStaffValue).toHaveText('1');
  877 |     if (scenario.subtestCount === undefined) {
  878 |       await expect.soft(this.subscriptionDetailsAutoRenewalStatusValue).toContainText('ON');
  879 |     }
  880 |   }
  881 | 
  882 |   async getTotalActiveStaffCount(): Promise<number> {
  883 |     await this.subscriptionDetailsTotalActiveStaffValue.waitFor({ state: 'visible', timeout: 30_000 });
  884 |     const raw = (await this.subscriptionDetailsTotalActiveStaffValue.textContent()) ?? '';
  885 |     return Number(raw.trim());
  886 |   }
  887 | 
  888 |   async verifyTotalActiveStaff(expected: number, label: string) {
  889 |     const actual = await this.getTotalActiveStaffCount();
  890 |     RawValueLogger.log('TOTAL ACTIVE STAFF', { label, expected, actual });
  891 |     expect.soft(actual, `TOTAL ACTIVE STAFF ${label}`).toBe(expected);
  892 |   }
  893 | 
  894 |   async verifySubscriptionDetailsDates(expectedStartMMDDYYYY: string, expectedEndMMDDYYYY: string) {
  895 |     await this.subscriptionDetailsStartDateValue.waitFor({ state: 'visible', timeout: 30_000 });
  896 |     await expect.soft(this.subscriptionDetailsStartDateValue, 'START DATE').toContainText(expectedStartMMDDYYYY);
  897 |     await expect.soft(this.subscriptionDetailsExpirationDateValue, 'EXPIRATION DATE').toContainText(expectedEndMMDDYYYY);
  898 |   }
  899 | 
  900 |   // §3 — see subscriptionActivationPage.notes.md
  901 |   async reloadAndOpenSubscriptionDetails() {
  902 |     await this.page.reload({ waitUntil: 'load' });
  903 |     await this.openSubscriptionDetailsPage();
  904 |     await this.subscriptionDetailsStartDateValue.waitFor({ state: 'visible', timeout: 60_000 });
  905 |   }
  906 | 
  907 |   // §5 — see subscriptionActivationPage.notes.md
  908 |   async verifySubscriptionDatesNotResetToEpoch() {
  909 |     await this.subscriptionDetailsStartDateValue.waitFor({ state: 'visible', timeout: 30_000 });
  910 |     const start = ((await this.subscriptionDetailsStartDateValue.textContent()) ?? '').trim();
  911 |     const end = ((await this.subscriptionDetailsExpirationDateValue.textContent()) ?? '').trim();
  912 |     RawValueLogger.log('Subscription details dates', { start, end });
  913 |     expect.soft(start, 'START DATE not reset to the epoch').not.toContain('1970');
  914 |     expect.soft(end, 'EXPIRATION DATE not reset to the epoch').not.toContain('1970');
  915 |   }
  916 | 
  917 |   async logRemainingSubtestsState(): Promise<string> {
  918 |     const count = await this.subscriptionDetailsRemainingSubtestsValue.count();
  919 |     const value = count > 0 ? ((await this.subscriptionDetailsRemainingSubtestsValue.textContent()) ?? '').trim() : null;
  920 |     RawValueLogger.log('REMAINING SUBTESTS state', { rendered: count > 0, value });
  921 |     return value ?? '<row not rendered>';
  922 |   }
  923 | 
  924 |   async verifyRemainingSubtests(expected: string) {
  925 |     await this.subscriptionDetailsRemainingSubtestsValue.waitFor({ state: 'visible', timeout: 30_000 });
  926 |     const actual = (await this.subscriptionDetailsRemainingSubtestsValue.textContent()) ?? '';
  927 |     RawValueLogger.log('REMAINING SUBTESTS', { expected, actual });
  928 |     // §6 — see subscriptionActivationPage.notes.md
  929 |     expect.soft(actual.trim(), 'REMAINING SUBTESTS is not blank').not.toBe('');
  930 |     expect.soft(actual.trim(), 'REMAINING SUBTESTS').toBe(expected);
  931 |   }
  932 | 
  933 |   private tooltipIconForField(label: string) {
  934 |     return this.page.locator(
```