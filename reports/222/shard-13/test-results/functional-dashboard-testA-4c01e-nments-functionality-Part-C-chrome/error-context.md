# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/dashboard/testAssignments_C.spec.ts >> Validate Dashboard Test Assignments functionality Part_C
- Location: src/tests/functional/dashboard/testAssignments_C.spec.ts:13:5

# Error details

```
TimeoutError: locator.textContent: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('div[class*=\'TestAssignmentModule\'] div[class$=\'rowButton\']').first().locator('button[class*=\'cell\']').first()

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
                    - text: Submitted
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
                  - row "Begin assignment Form A for N601A24492, Thurman Form A More info 69 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e65] [cursor=pointer]:
                    - cell "Begin assignment Form A for N601A24492, Thurman" [ref=e66]:
                      - button "Begin assignment Form A for N601A24492, Thurman" [ref=e67]:
                        - generic [ref=e68]: N601A24492, Thurman
                    - cell "Form A More info" [ref=e69]:
                      - generic [ref=e70]:
                        - button "Form A" [ref=e71]:
                          - generic [ref=e72]: Form A
                        - button "More info" [ref=e73]
                    - cell "69 days" [ref=e74]:
                      - button "69 days" [ref=e75]
                    - cell "● Submitted" [ref=e76]:
                      - button "● Submitted" [ref=e77]:
                        - generic [ref=e78]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e79]:
                      - button "Edit Assignment" [ref=e80]
                      - button "Add Tests" [ref=e81]
                      - button "Assignment actions" [ref=e82]
                  - row "Begin assignment Form A for N70195A28900, Willy Form A More info 69 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e83] [cursor=pointer]:
                    - cell "Begin assignment Form A for N70195A28900, Willy" [ref=e84]:
                      - button "Begin assignment Form A for N70195A28900, Willy" [ref=e85]:
                        - generic [ref=e86]: N70195A28900, Willy
                    - cell "Form A More info" [ref=e87]:
                      - generic [ref=e88]:
                        - button "Form A" [ref=e89]:
                          - generic [ref=e90]: Form A
                        - button "More info" [ref=e91]
                    - cell "69 days" [ref=e92]:
                      - button "69 days" [ref=e93]
                    - cell "● Submitted" [ref=e94]:
                      - button "● Submitted" [ref=e95]:
                        - generic [ref=e96]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e97]:
                      - button "Edit Assignment" [ref=e98]
                      - button "Add Tests" [ref=e99]
                      - button "Assignment actions" [ref=e100]
                  - row "Begin assignment Priscilla Marvin_1774981717716 for N59996A7527, Philip Priscilla Marvin_1774981717716 More info 66 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e101] [cursor=pointer]:
                    - cell "Begin assignment Priscilla Marvin_1774981717716 for N59996A7527, Philip" [ref=e102]:
                      - button "Begin assignment Priscilla Marvin_1774981717716 for N59996A7527, Philip" [ref=e103]:
                        - generic [ref=e104]: N59996A7527, Philip
                    - cell "Priscilla Marvin_1774981717716 More info" [ref=e105]:
                      - generic [ref=e106]:
                        - button "Priscilla Marvin_1774981717716" [ref=e107]:
                          - generic [ref=e108]: Priscilla Marvin_1774981717716
                        - button "More info" [ref=e109]
                    - cell "66 days" [ref=e110]:
                      - button "66 days" [ref=e111]
                    - cell "● Submitted" [ref=e112]:
                      - button "● Submitted" [ref=e113]:
                        - generic [ref=e114]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e115]:
                      - button "Edit Assignment" [ref=e116]
                      - button "Add Tests" [ref=e117]
                      - button "Assignment actions" [ref=e118]
                  - row "Begin assignment Alton Boehm-O'Reilly_1774981011951 for N69519A45334, Margot Alton Boehm-O'Reilly_1774981011951 More info 66 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e119] [cursor=pointer]:
                    - cell "Begin assignment Alton Boehm-O'Reilly_1774981011951 for N69519A45334, Margot" [ref=e120]:
                      - button "Begin assignment Alton Boehm-O'Reilly_1774981011951 for N69519A45334, Margot" [ref=e121]:
                        - generic [ref=e122]: N69519A45334, Margot
                    - cell "Alton Boehm-O'Reilly_1774981011951 More info" [ref=e123]:
                      - generic [ref=e124]:
                        - button "Alton Boehm-O'Reilly_1774981011951" [ref=e125]:
                          - generic [ref=e126]: Alton Boehm-O'Reilly_1774981011951
                        - button "More info" [ref=e127]
                    - cell "66 days" [ref=e128]:
                      - button "66 days" [ref=e129]
                    - cell "● Submitted" [ref=e130]:
                      - button "● Submitted" [ref=e131]:
                        - generic [ref=e132]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e133]:
                      - button "Edit Assignment" [ref=e134]
                      - button "Add Tests" [ref=e135]
                      - button "Assignment actions" [ref=e136]
                  - row "Begin assignment Form A for N68810A85172, Joe Form A More info 61 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e137] [cursor=pointer]:
                    - cell "Begin assignment Form A for N68810A85172, Joe" [ref=e138]:
                      - button "Begin assignment Form A for N68810A85172, Joe" [ref=e139]:
                        - generic [ref=e140]: N68810A85172, Joe
                    - cell "Form A More info" [ref=e141]:
                      - generic [ref=e142]:
                        - button "Form A" [ref=e143]:
                          - generic [ref=e144]: Form A
                        - button "More info" [ref=e145]
                    - cell "61 days" [ref=e146]:
                      - button "61 days" [ref=e147]
                    - cell "● Submitted" [ref=e148]:
                      - button "● Submitted" [ref=e149]:
                        - generic [ref=e150]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e151]:
                      - button "Edit Assignment" [ref=e152]
                      - button "Add Tests" [ref=e153]
                      - button "Assignment actions" [ref=e154]
                  - row "Begin assignment Form A for N84336A53149, Lilyan Form A More info 61 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e155] [cursor=pointer]:
                    - cell "Begin assignment Form A for N84336A53149, Lilyan" [ref=e156]:
                      - button "Begin assignment Form A for N84336A53149, Lilyan" [ref=e157]:
                        - generic [ref=e158]: N84336A53149, Lilyan
                    - cell "Form A More info" [ref=e159]:
                      - generic [ref=e160]:
                        - button "Form A" [ref=e161]:
                          - generic [ref=e162]: Form A
                        - button "More info" [ref=e163]
                    - cell "61 days" [ref=e164]:
                      - button "61 days" [ref=e165]
                    - cell "● Submitted" [ref=e166]:
                      - button "● Submitted" [ref=e167]:
                        - generic [ref=e168]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e169]:
                      - button "Edit Assignment" [ref=e170]
                      - button "Add Tests" [ref=e171]
                      - button "Assignment actions" [ref=e172]
                  - row "Begin assignment Form A (+1 more) for N3264A64220, Cristian Form A (+1 more) More info 18 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e173] [cursor=pointer]:
                    - cell "Begin assignment Form A (+1 more) for N3264A64220, Cristian" [ref=e174]:
                      - button "Begin assignment Form A (+1 more) for N3264A64220, Cristian" [ref=e175]:
                        - generic [ref=e176]: N3264A64220, Cristian
                    - cell "Form A (+1 more) More info" [ref=e177]:
                      - generic [ref=e178]:
                        - button "Form A (+1 more)" [ref=e179]:
                          - generic [ref=e180]: Form A (+1 more)
                        - button "More info" [ref=e181]
                    - cell "18 days" [ref=e182]:
                      - button "18 days" [ref=e183]
                    - cell "● Submitted" [ref=e184]:
                      - button "● Submitted" [ref=e185]:
                        - generic [ref=e186]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e187]:
                      - button "Edit Assignment" [ref=e188]
                      - button "Add Tests" [ref=e189]
                      - button "Assignment actions" [ref=e190]
                  - row "Begin assignment Form A (+1 more) for N89886A57144, Malvina Form A (+1 more) More info 18 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e191] [cursor=pointer]:
                    - cell "Begin assignment Form A (+1 more) for N89886A57144, Malvina" [ref=e192]:
                      - button "Begin assignment Form A (+1 more) for N89886A57144, Malvina" [ref=e193]:
                        - generic [ref=e194]: N89886A57144, Malvina
                    - cell "Form A (+1 more) More info" [ref=e195]:
                      - generic [ref=e196]:
                        - button "Form A (+1 more)" [ref=e197]:
                          - generic [ref=e198]: Form A (+1 more)
                        - button "More info" [ref=e199]
                    - cell "18 days" [ref=e200]:
                      - button "18 days" [ref=e201]
                    - cell "● Submitted" [ref=e202]:
                      - button "● Submitted" [ref=e203]:
                        - generic [ref=e204]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e205]:
                      - button "Edit Assignment" [ref=e206]
                      - button "Add Tests" [ref=e207]
                      - button "Assignment actions" [ref=e208]
                  - row "Begin assignment Form A for N13251A99883, Alden Form A More info 18 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e209] [cursor=pointer]:
                    - cell "Begin assignment Form A for N13251A99883, Alden" [ref=e210]:
                      - button "Begin assignment Form A for N13251A99883, Alden" [ref=e211]:
                        - generic [ref=e212]: N13251A99883, Alden
                    - cell "Form A More info" [ref=e213]:
                      - generic [ref=e214]:
                        - button "Form A" [ref=e215]:
                          - generic [ref=e216]: Form A
                        - button "More info" [ref=e217]
                    - cell "18 days" [ref=e218]:
                      - button "18 days" [ref=e219]
                    - cell "● Submitted" [ref=e220]:
                      - button "● Submitted" [ref=e221]:
                        - generic [ref=e222]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e223]:
                      - button "Edit Assignment" [ref=e224]
                      - button "Add Tests" [ref=e225]
                      - button "Assignment actions" [ref=e226]
                  - row "Begin assignment Form A for N51313A25030, Omer Form A More info 5 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e227] [cursor=pointer]:
                    - cell "Begin assignment Form A for N51313A25030, Omer" [ref=e228]:
                      - button "Begin assignment Form A for N51313A25030, Omer" [ref=e229]:
                        - generic [ref=e230]: N51313A25030, Omer
                    - cell "Form A More info" [ref=e231]:
                      - generic [ref=e232]:
                        - button "Form A" [ref=e233]:
                          - generic [ref=e234]: Form A
                        - button "More info" [ref=e235]
                    - cell "5 days" [ref=e236]:
                      - button "5 days" [ref=e237]
                    - cell "● Submitted" [ref=e238]:
                      - button "● Submitted" [ref=e239]:
                        - generic [ref=e240]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e241]:
                      - button "Edit Assignment" [ref=e242]
                      - button "Add Tests" [ref=e243]
                      - button "Assignment actions" [ref=e244]
            - generic [ref=e245]:
              - generic [ref=e248]:
                - img [ref=e249]
                - heading "Notifications Center" [level=2] [ref=e253]
              - generic [ref=e254]:
                - generic [ref=e256]:
                  - img [ref=e257]
                  - heading "Resources" [level=3] [ref=e261]
                - list [ref=e262]:
                  - listitem [ref=e263]:
                    - button "Riverside Learn" [ref=e264] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e265]
                      - img [ref=e267]
                  - listitem [ref=e269]:
                    - button "Onboarding Tutorial Videos" [ref=e270] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e271]
                      - img [ref=e273]
                  - listitem [ref=e275]:
                    - button "Quick Reference Guides" [ref=e276] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e277]
                      - img [ref=e279]
                - button "View All" [ref=e282] [cursor=pointer]
      - contentinfo [ref=e283]:
        - generic [ref=e284]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e285] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e286]
        - generic [ref=e287]:
          - link "Riverside Insights Facebook" [ref=e288] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e289]
          - link "Riverside Insights Twitter" [ref=e290] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e291]
          - link "Riverside Insights LinkedIn" [ref=e292] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e293]
          - link "Riverside Insights Instagram" [ref=e294] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e295]
        - generic [ref=e296]:
          - button "Leave Feedback" [ref=e297] [cursor=pointer]
          - generic [ref=e298]: "|"
          - link "Terms of Use" [ref=e299] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e300]: "|"
          - link "Privacy Policy" [ref=e301] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e302]: Footer region end
  - region "Chat Widget" [ref=e303]:
    - iframe [ref=e304]:
      - button "Open live chat" [ref=f9e5]:
        - img [ref=f9e8]
        - img [ref=f9e15]
    - generic "Drag" [ref=e305]:
      - img [ref=e306]
```

# Test source

```ts
  733 |       const expType = exportType ?? getCurrentExportType();
  734 |       const result = await findExportDataFile({
  735 |         exportType: expType,
  736 |         examineeID,
  737 |         testStemForm,
  738 |       });
  739 |       this.txtFileContent = result.content;
  740 |       this.requiredFile = result.filePath;
  741 | 
  742 |       return result.filePath;
  743 |     } catch (error) {
  744 |       console.error(`Error in printAllThedatafromTheFileRequired: ${error}`);
  745 |       throw error;
  746 |     }
  747 |   }
  748 |   async uploadExamineeExportTemplate(type: string, examineeID: string) {
  749 |     await this.goToTheMainMenuChildPage("Reports", "Data Export");
  750 |     const fileChooserPromise = this.page.waitForEvent("filechooser");
  751 |     await this.browseButton.click();
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
> 833 |       cells.nth(0).textContent(),
      |                    ^ TimeoutError: locator.textContent: Timeout 60000ms exceeded.
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
  852 |     ).toHaveCount(1);
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
```