# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/SubmittedTestAssignments.spec.ts >> I want the ability to launch into review mode for my submitted test assignments >> Validate different scenarios in submitted test assignment in review mode
- Location: src/tests/functional/SubmittedTestAssignments.spec.ts:168:9

# Error details

```
Error: Flagged for later text not visible

expect(locator).toBeVisible() failed

Locator: locator('//span[text()=\'Flagged for later\']')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Flagged for later text not visible with timeout 60000ms
  - waiting for locator('//span[text()=\'Flagged for later\']')

```

```
Error: Submit test assignment button supposed to be disabled - Scenario_7b

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

```
Error: Status not matching =Scenario_7c

expect(received).toContain(expected) // indexOf

Expected substring: "Submitted"
Received string:    "●In Progress"
```

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Generate Report\']')

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
              - heading "Hello 10PwAut25Ex_01 ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "10PwAut25Ex_01 ln" [ref=e10] [cursor=pointer]
              - navigation [ref=e13]:
                - button "Contact Us" [ref=e14] [cursor=pointer]
                - button "| Subscription Details" [ref=e15] [cursor=pointer]
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
        - main [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]:
              - generic [ref=e37]:
                - heading "My Test Assignments" [level=1] [ref=e38]
                - button "Create New Test Assignment" [ref=e39] [cursor=pointer]
              - generic [ref=e40]:
                - generic [ref=e43]:
                  - textbox [ref=e44]:
                    - /placeholder: Search Test Assignments
                    - text: N40570A3715
                  - button "Search Test Assignments" [ref=e45] [cursor=pointer]
                - generic [ref=e46]:
                  - button "Active" [disabled] [ref=e47]
                  - button "Closed" [disabled] [ref=e48]
              - table "Available Assignments" [ref=e50]:
                - rowgroup [ref=e57]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e58]:
                    - columnheader "This is the student or individual being assessed." [ref=e59]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e60]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e61]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e62]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e63]: Actions
                - rowgroup [ref=e64]:
                  - row "Begin assignment Form A (+1 more) for N40570A3715, Hudson Form A (+1 more) More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e65] [cursor=pointer]:
                    - cell "Begin assignment Form A (+1 more) for N40570A3715, Hudson" [ref=e66]:
                      - button "Begin assignment Form A (+1 more) for N40570A3715, Hudson" [ref=e67]:
                        - generic [ref=e68]: N40570A3715, Hudson
                    - cell "Form A (+1 more) More info" [ref=e69]:
                      - generic [ref=e70]:
                        - button "Form A (+1 more)" [ref=e71]:
                          - generic [ref=e72]: Form A (+1 more)
                        - button "More info" [ref=e73]
                    - cell "90 days" [ref=e74]:
                      - button "90 days" [ref=e75]
                    - cell "● In Progress" [ref=e76]:
                      - button "● In Progress" [ref=e77]:
                        - generic [ref=e78]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e79]:
                      - button "Edit Assignment" [ref=e80]
                      - button "Add Tests" [ref=e81]
                      - button "Assignment actions" [ref=e82]
                      - navigation [ref=e83]:
                        - button "Merge Assignment" [active] [ref=e84]
                        - button "Share Examinee" [ref=e85]
                        - button "Delete" [ref=e86]
            - generic [ref=e87]:
              - generic [ref=e90]:
                - img [ref=e91]
                - heading "Notifications Center" [level=2] [ref=e95]
              - generic [ref=e96]:
                - generic [ref=e98]:
                  - img [ref=e99]
                  - heading "Resources" [level=3] [ref=e103]
                - list [ref=e104]:
                  - listitem [ref=e105]:
                    - button "Riverside Learn" [ref=e106] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e107]
                      - img [ref=e109]
                  - listitem [ref=e111]:
                    - button "Onboarding Tutorial Videos" [ref=e112] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e113]
                      - img [ref=e115]
                  - listitem [ref=e117]:
                    - button "Quick Reference Guides" [ref=e118] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e119]
                      - img [ref=e121]
                - button "View All" [ref=e124] [cursor=pointer]
      - contentinfo [ref=e125]:
        - generic [ref=e126]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e127] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e128]
        - generic [ref=e129]:
          - link "Riverside Insights Facebook" [ref=e130] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e131]
          - link "Riverside Insights Twitter" [ref=e132] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e133]
          - link "Riverside Insights LinkedIn" [ref=e134] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e135]
          - link "Riverside Insights Instagram" [ref=e136] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e137]
        - generic [ref=e138]:
          - button "Leave Feedback" [ref=e139] [cursor=pointer]
          - generic [ref=e140]: "|"
          - link "Terms of Use" [ref=e141] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e142]: "|"
          - link "Privacy Policy" [ref=e143] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e144]: Footer region end
  - region "Chat Widget" [ref=e145]:
    - iframe [ref=e146]:
      - button "Open live chat" [ref=f14e5]:
        - img [ref=f14e8]
        - img [ref=f14e15]
    - generic "Drag" [ref=e147]:
      - img [ref=e148]
```

# Test source

```ts
  785 |       });
  786 |       await this.page.waitForTimeout(2000);
  787 |     } catch (error) {
  788 |       this.page.reload();
  789 |       await this.dashboardLoadingSpinnerIcon.last().waitFor({
  790 |         state: "hidden",
  791 |         timeout: 2 * 60 * 1000,
  792 |       });
  793 | 
  794 |       console.error("Error waiting for loading spinner to disappear:", error);
  795 |     }
  796 |   }
  797 | 
  798 |   async waitForLoadingIconToDisappear() {
  799 |     await this.loadingIcon.last().waitFor({
  800 |       state: "hidden",
  801 |       timeout: 3 * 60 * 1000,
  802 |     });
  803 |   }
  804 | 
  805 |   async waitForMyTestAssignmentsToBeVisible() {
  806 |     await this.myTestAssignmentsText.waitFor({
  807 |       state: "visible",
  808 |       timeout: 2 * 60 * 1000,
  809 |     });
  810 |     expect(await this.myTestAssignmentsText.isVisible(), "myTestAssignmentsText is not visible").toBeTruthy();
  811 |   }
  812 | 
  813 |   async verifyTestSetStatusAtMyTestAssignmentsDashboard(
  814 |     examineeId: string,
  815 |     status: string,
  816 |     scenario: string = "Not Specified",
  817 |   ) {
  818 |     await this.page.waitForTimeout(3000);
  819 |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  820 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  821 |     await this.page.waitForTimeout(3000);
  822 |     expect
  823 |       .soft(firstRowDetails.status, "Status not matching =" + scenario)
  824 |       .toContain(status);
  825 |   }
  826 | 
  827 |   async getTheTestAssignmentsRowDetails(rowIndex: number) {
  828 |     await this.page.waitForLoadState("domcontentloaded");
  829 |     await this.waitForLoadingSpinnerToDisappear();
  830 |     await this.page.waitForTimeout(1000);
  831 | 
  832 |     const row = this.myTestAssignmentsRow.nth(rowIndex - 1);
  833 | 
  834 |     const [examinee, testSet, daysLeftEdit, status] = await Promise.all([
  835 |       row.locator('td:nth-child(1)').textContent(),
  836 |       row.locator('td:nth-child(2)').textContent(),
  837 |       row.locator('td:nth-child(3)').textContent(),
  838 |       row.locator('td:nth-child(4)').textContent(),
  839 |     ]);
  840 | 
  841 |     return {
  842 |       examinee: examinee?.trim(),
  843 |       testSet: testSet?.trim(),
  844 |       daysLeftEdit: daysLeftEdit?.trim(),
  845 |       status: status?.trim(),
  846 |     };
  847 |   }
  848 | 
  849 |   async searchForExamineeAtSearchMyTestAssignments(examineeName: string) {
  850 |     await this.searchTestAssignments(examineeName);
  851 |     await expect(
  852 |       this.rowButton,
  853 |       "Examinee is either not founf or too many results",
  854 |     ).toHaveCount(1);
  855 |   }
  856 |   async clickOnFirstRow() {
  857 |     await this.rowButton
  858 |       .first()
  859 |       .locator("td:nth-child(1) button")
  860 |       .click({ force: true });
  861 |     await this.page.waitForTimeout(2000);
  862 |     await this.waitForLoadingSpinnerToDisappear();
  863 |   }
  864 | 
  865 |   async clickOnRowByTestSetName(testSetName: string) {
  866 |     const rowCount = await this.myTestAssignmentsRow.count();
  867 |     for (let i = 0; i < rowCount; i++) {
  868 |       const row = this.myTestAssignmentsRow.nth(i);
  869 |       const testSet = await row.locator('td:nth-child(2)').textContent();
  870 |       if (testSet?.trim() === testSetName) {
  871 |         await row.click();
  872 |         await this.page.waitForTimeout(2000);
  873 |         return;
  874 |       }
  875 |     }
  876 |     throw new Error(`No row found with test set name: "${testSetName}"`);
  877 |   }
  878 | 
  879 |   async generateReport(examineeId: string): Promise<[Page, Page]> {
  880 |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  881 |     await this.waitForLoadingSpinnerToDisappear();
  882 | 
  883 |     // await this.generateReportIcon.first().click();
  884 |     await this.getLinkButton('ellipsis').click();
> 885 |     await this.page.locator("//button[text()='Generate Report']").click();
      |                                                                   ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  886 | 
  887 |     await this.waitForLoadingIconToDisappear();
  888 |     await this.nextButton.click();
  889 |     await this.nextButton.click();
  890 | 
  891 |     const [newPage] = await Promise.all([
  892 |       this.page.context().waitForEvent("page"),
  893 |       this.generateReportButton.last().click(),
  894 |     ]);
  895 | 
  896 |     return [this.page, newPage] as [Page, Page];
  897 |   }
  898 | 
  899 |   async goToDashboardFromMainNavigation() {
  900 |     await this.page.bringToFront();
  901 |     await this.mainNavigation.click();
  902 |     await this.mainNavigationHome.click();
  903 |     await this.areYouSureYesButton.click();
  904 |     await this.waitForLoadingSpinnerToDisappear();
  905 |   }
  906 | 
  907 |   async closeLaunchTestSessionPopUp() {
  908 |     await this.closeSessionIntroCrossIcon.click();
  909 |     await this.waitForLoadingSpinnerToDisappear();
  910 |   }
  911 | 
  912 |   async clickOnReviewMode() {
  913 |     await this.reviewModeButton.click();
  914 |   }
  915 | 
  916 |   async getStatusOfSubmitTestAssignmentButton() {
  917 |     await this.submitTestSetAndFinishAdministration.waitFor({
  918 |       state: "visible",
  919 |       timeout: 2 * 60 * 1000,
  920 |     });
  921 |     await this.page.waitForTimeout(3000);
  922 |     return await this.submitTestSetAndFinishAdministration.isDisabled();
  923 |   }
  924 | 
  925 |   async verifyReviewModeDashboardIsVisible() {
  926 |     await this.reviewModeDashboardHeader.waitFor({
  927 |       state: "visible",
  928 |       timeout: 2 * 60 * 1000,
  929 |     });
  930 |     await expect(this.reviewModeDashboardHeader).toBeVisible();
  931 |     await this.page.waitForTimeout(2000);
  932 |   }
  933 | 
  934 |   async verifyAdministrationSummaryIsVisible() {
  935 |    await this.waitForLoadingInnerToDisappear();
  936 |     await this.administrationSummaryHeader.waitFor({
  937 |       state: "visible",
  938 |       timeout: 1 * 60 * 1000,
  939 |     });
  940 |     await expect(this.administrationSummaryHeader).toBeVisible();
  941 |     await this.page.waitForTimeout(2000);
  942 |   }
  943 | 
  944 |   private async waitForLoadingInnerToDisappear() {
  945 |         try {
  946 |       await this.loadingIcon.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  947 |     } catch (error) {
  948 |       await this.page.reload();
  949 |       console.error("Loading icon did not disappear in time:", error);
  950 |     }
  951 | 
  952 |   }
  953 | 
  954 |   async exitReviewMode() {
  955 |     await this.exitReviewModeButton.click();
  956 |     await this.waitForLoadingSpinnerToDisappear();
  957 |   }
  958 | 
  959 |   async selectFollowingTestFromTestsList(testName: string) {
  960 |     await this.page
  961 |       .locator(`//div[contains(@class, 'testName')][text()='${testName}']`)
  962 |       .click();
  963 |   }
  964 | 
  965 |   async clickBackToReviewButton() {
  966 |     await this.backToReviewButton.last().click();
  967 |     await this.page.waitForLoadState("domcontentloaded");
  968 |     await this.waitForLoadingResultsToDisappear();
  969 |   }
  970 | 
  971 |   async waitForLoadingResultsToDisappear() {
  972 |     await this.loadingResults.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  973 |   }
  974 | 
  975 |   async changeResponse(
  976 |     item: string,
  977 |     initialResponse: number,
  978 |     updatedResponse: number,
  979 |   ) {
  980 |     await this.clickFollowingItem(item);
  981 |     await this.page.waitForTimeout(2000);
  982 |     await this.openNotesIcon.hover();
  983 |     await this.selectResponse(initialResponse);
  984 |     await this.page.waitForTimeout(3000);
  985 |     await this.selectResponse(updatedResponse);
```