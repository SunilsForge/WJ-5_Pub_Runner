# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/SubmittedTestAssignments.spec.ts >> I want the ability to launch into review mode for my submitted test assignments >> Validate different scenarios in submitted test assignment in review mode
- Location: src/tests/functional/SubmittedTestAssignments.spec.ts:165:9

# Error details

```
Error: Examinee is either not founf or too many results

expect(locator).toHaveCount(expected) failed

Locator:  locator('div[class=\'Grid_mcs_rowButton\']')
Expected: 1
Received: 0
Timeout:  60000ms

Call log:
  - Examinee is either not founf or too many results with timeout 60000ms
  - waiting for locator('div[class=\'Grid_mcs_rowButton\']')
    63 × locator resolved to 0 elements
       - unexpected value "0"

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
              - heading "Hello 03PwAut25Ex_01 ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "03PwAut25Ex_01 ln" [ref=e10] [cursor=pointer]
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
                  - textbox [active] [ref=e44]:
                    - /placeholder: Search Test Assignments
                    - text: N75252A37154
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
                  - row "Begin assignment Form A for N75252A37154, Bethany Form A More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e65] [cursor=pointer]:
                    - cell "Begin assignment Form A for N75252A37154, Bethany" [ref=e66]:
                      - button "Begin assignment Form A for N75252A37154, Bethany" [ref=e67]:
                        - generic [ref=e68]: N75252A37154, Bethany
                    - cell "Form A More info" [ref=e69]:
                      - generic [ref=e70]:
                        - button "Form A" [ref=e71]:
                          - generic [ref=e72]: Form A
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
            - generic [ref=e83]:
              - generic [ref=e86]:
                - img [ref=e87]
                - heading "Notifications Center" [level=2] [ref=e91]
              - generic [ref=e92]:
                - generic [ref=e94]:
                  - img [ref=e95]
                  - heading "Resources" [level=3] [ref=e99]
                - list [ref=e100]:
                  - listitem [ref=e101]:
                    - button "Riverside Learn" [ref=e102] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e103]
                      - img [ref=e105]
                  - listitem [ref=e107]:
                    - button "Onboarding Tutorial Videos" [ref=e108] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e109]
                      - img [ref=e111]
                  - listitem [ref=e113]:
                    - button "Quick Reference Guides" [ref=e114] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e115]
                      - img [ref=e117]
                - button "View All" [ref=e120] [cursor=pointer]
      - contentinfo [ref=e121]:
        - generic [ref=e122]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e123] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e124]
        - generic [ref=e125]:
          - link "Riverside Insights Facebook" [ref=e126] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e127]
          - link "Riverside Insights Twitter" [ref=e128] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e129]
          - link "Riverside Insights LinkedIn" [ref=e130] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e131]
          - link "Riverside Insights Instagram" [ref=e132] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e133]
        - generic [ref=e134]:
          - button "Leave Feedback" [ref=e135] [cursor=pointer]
          - generic [ref=e136]: "|"
          - link "Terms of Use" [ref=e137] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e138]: "|"
          - link "Privacy Policy" [ref=e139] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e140]: Footer region end
  - region "Chat Widget" [ref=e141]:
    - iframe [ref=e142]:
      - button "Open live chat" [ref=f9e5]:
        - img [ref=f9e8]
        - img [ref=f9e15]
    - generic "Drag" [ref=e143]:
      - img [ref=e144]
```

# Test source

```ts
  752 |     const fileChooser = await fileChooserPromise;
  753 |     let templatePathToUpload: string | undefined;
  754 | 
  755 |     try {
  756 |       const exportType = mapStringToExportType(type);
  757 |       templatePathToUpload = getGeneratedTemplatePath(examineeID, exportType);
  758 |       console.log(`Uploading template: ${templatePathToUpload}`);
  759 | 
  760 |       await fileChooser.setFiles(templatePathToUpload);
  761 |     } catch (error) {
  762 |       console.error(`Error preparing file for upload: ${error}`);
  763 |       throw error;
  764 |     }
  765 | 
  766 |     await expect(this.uploadButton).toBeEnabled();
  767 |     await this.uploadButton.click();
  768 |   }
  769 | 
  770 |   async selectExaminer(examinerID: string) {
  771 |     await this.page
  772 |       .getByPlaceholder("Search by Examiner Name or ID")
  773 |       .fill(examinerID);
  774 |     await this.page.locator(".item-text").getByText(examinerID).first().click();
  775 |   }
  776 | 
  777 |   async waitForLoadingSpinnerToDisappear() {
  778 |     try {
  779 |       await this.dashboardLoadingSpinnerIcon.last().waitFor({
  780 |         state: "hidden",
  781 |         timeout: 2 * 60 * 1000,
  782 |       });
  783 |       await this.page.waitForTimeout(2000);
  784 |     } catch (error) {
  785 |       this.page.reload();
  786 |       await this.dashboardLoadingSpinnerIcon.last().waitFor({
  787 |         state: "hidden",
  788 |         timeout: 2 * 60 * 1000,
  789 |       });
  790 | 
  791 |       console.error("Error waiting for loading spinner to disappear:", error);
  792 |     }
  793 |   }
  794 | 
  795 |   async waitForLoadingIconToDisappear() {
  796 |     await this.loadingIcon.last().waitFor({
  797 |       state: "hidden",
  798 |       timeout: 3 * 60 * 1000,
  799 |     });
  800 |   }
  801 | 
  802 |   async waitForMyTestAssignmentsToBeVisible() {
  803 |     await this.myTestAssignmentsText.waitFor({
  804 |       state: "visible",
  805 |       timeout: 2 * 60 * 1000,
  806 |     });
  807 |     expect(await this.myTestAssignmentsText.isVisible(), "myTestAssignmentsText is not visible").toBeTruthy();
  808 |   }
  809 | 
  810 |   async verifyTestSetStatusAtMyTestAssignmentsDashboard(
  811 |     examineeId: string,
  812 |     status: string,
  813 |     scenario: string = "Not Specified",
  814 |   ) {
  815 |     await this.page.waitForTimeout(3000);
  816 |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  817 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  818 |     await this.page.waitForTimeout(3000);
  819 |     expect
  820 |       .soft(firstRowDetails.status, "Status not matching =" + scenario)
  821 |       .toContain(status);
  822 |   }
  823 | 
  824 |   async getTheTestAssignmentsRowDetails(rowIndex: number) {
  825 |     await this.page.waitForLoadState("domcontentloaded");
  826 |     await this.waitForLoadingSpinnerToDisappear();
  827 |     await this.page.waitForTimeout(1000);
  828 | 
  829 |     const row = this.myTestAssignmentsRow.nth(rowIndex - 1);
  830 |     const cells = row.locator("button[class*='cell']");
  831 | 
  832 |     const [examinee, testSet, daysLeftEdit, status] = await Promise.all([
  833 |       cells.nth(0).textContent(),
  834 |       cells.nth(1).textContent(),
  835 |       cells.nth(2).textContent(),
  836 |       cells.nth(3).textContent(),
  837 |     ]);
  838 | 
  839 |     return {
  840 |       examinee: examinee?.trim(),
  841 |       testSet: testSet?.trim(),
  842 |       daysLeftEdit: daysLeftEdit?.trim(),
  843 |       status: status?.trim(),
  844 |     };
  845 |   }
  846 | 
  847 |   async searchForExamineeAtSearchMyTestAssignments(examineeName: string) {
  848 |     await this.searchTestAssignments(examineeName);
  849 |     await expect(
  850 |       this.rowButton,
  851 |       "Examinee is either not founf or too many results",
> 852 |     ).toHaveCount(1);
      |       ^ Error: Examinee is either not founf or too many results
  853 |   }
  854 |   async clickOnFirstRow() {
  855 |     await this.rowButton
  856 |       .first()
  857 |       .click();
  858 |     await this.page.waitForTimeout(2000);
  859 |   }
  860 | 
  861 |   async clickOnRowByTestSetName(testSetName: string) {
  862 |     const rowCount = await this.myTestAssignmentsRow.count();
  863 |     for (let i = 0; i < rowCount; i++) {
  864 |       const row = this.myTestAssignmentsRow.nth(i);
  865 |       const cells = row.locator("button[class*='cell']");
  866 |       const testSet = await cells.nth(1).textContent();
  867 |       if (testSet?.trim() === testSetName) {
  868 |         await row.click();
  869 |         await this.page.waitForTimeout(2000);
  870 |         return;
  871 |       }
  872 |     }
  873 |     throw new Error(`No row found with test set name: "${testSetName}"`);
  874 |   }
  875 | 
  876 |   async generateReport(examineeId: string): Promise<[Page, Page]> {
  877 |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  878 |     await this.waitForLoadingSpinnerToDisappear();
  879 | 
  880 |     // await this.generateReportIcon.first().click();
  881 |     await this.getLinkButton('ellipsis').click();
  882 |     await this.page.locator("//button[text()='Generate Report']").click();
  883 | 
  884 |     await this.waitForLoadingIconToDisappear();
  885 |     await this.nextButton.click();
  886 |     await this.nextButton.click();
  887 | 
  888 |     const [newPage] = await Promise.all([
  889 |       this.page.context().waitForEvent("page"),
  890 |       this.generateReportButton.last().click(),
  891 |     ]);
  892 | 
  893 |     return [this.page, newPage] as [Page, Page];
  894 |   }
  895 | 
  896 |   async goToDashboardFromMainNavigation() {
  897 |     await this.page.bringToFront();
  898 |     await this.mainNavigation.click();
  899 |     await this.mainNavigationHome.click();
  900 |     await this.areYouSureYesButton.click();
  901 |     await this.waitForLoadingSpinnerToDisappear();
  902 |   }
  903 | 
  904 |   async closeLaunchTestSessionPopUp() {
  905 |     await this.closeSessionIntroCrossIcon.click();
  906 |     await this.waitForLoadingSpinnerToDisappear();
  907 |   }
  908 | 
  909 |   async clickOnReviewMode() {
  910 |     await this.reviewModeButton.click();
  911 |   }
  912 | 
  913 |   async getStatusOfSubmitTestAssignmentButton() {
  914 |     await this.submitTestSetAndFinishAdministration.waitFor({
  915 |       state: "visible",
  916 |       timeout: 2 * 60 * 1000,
  917 |     });
  918 |     await this.page.waitForTimeout(3000);
  919 |     return await this.submitTestSetAndFinishAdministration.isDisabled();
  920 |   }
  921 | 
  922 |   async verifyReviewModeDashboardIsVisible() {
  923 |     await this.reviewModeDashboardHeader.waitFor({
  924 |       state: "visible",
  925 |       timeout: 2 * 60 * 1000,
  926 |     });
  927 |     await expect(this.reviewModeDashboardHeader).toBeVisible();
  928 |     await this.page.waitForTimeout(2000);
  929 |   }
  930 | 
  931 |   async verifyAdministrationSummaryIsVisible() {
  932 |    await this.waitForLoadingInnerToDisappear();
  933 |     await this.administrationSummaryHeader.waitFor({
  934 |       state: "visible",
  935 |       timeout: 1 * 60 * 1000,
  936 |     });
  937 |     await expect(this.administrationSummaryHeader).toBeVisible();
  938 |     await this.page.waitForTimeout(2000);
  939 |   }
  940 | 
  941 |   private async waitForLoadingInnerToDisappear() {
  942 |         try {
  943 |       await this.loadingIcon.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  944 |     } catch (error) {
  945 |       await this.page.reload();
  946 |       console.error("Loading icon did not disappear in time:", error);
  947 |     }
  948 | 
  949 |   }
  950 | 
  951 |   async exitReviewMode() {
  952 |     await this.exitReviewModeButton.click();
```