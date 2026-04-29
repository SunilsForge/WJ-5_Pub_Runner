# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/RDGBAS_cluster_pub.spec.ts >>  RDGBAS cluster Derived Export Automation  >> For LWIDNT - Age - All correct scenario,WRDATK - Age - All correct scenario Complete The RDGBAS cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/RDGBAS_cluster_pub.spec.ts:26:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('div.defaultRow[role="row"]:has(div.detail-cell-container[aria-label="Report Name Derived_Score_AutoFilter_Template_N39397A67352"])').first().locator('button[aria-label="Download/Print"]')
    - locator resolved to <button disabled tabindex="0" role="gridcell" aria-label="Download/Print" class="link-button detail-cell-link"> Download/Print </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    116 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

```

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [active]:
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
              - heading "Hello S11PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S11PwAut25AH ln" [ref=e10] [cursor=pointer]
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
            - heading "REPORT CENTER" [level=1] [ref=e36]
            - navigation [ref=e37]:
              - tablist [ref=e38]:
                - tab "Report Library" [selected] [ref=e39] [cursor=pointer]
                - button "Zoom In" [ref=e40] [cursor=pointer]:
                  - img "Zoom Page In Icon" [ref=e41]
            - generic "Report Library" [ref=e50]:
              - grid [ref=e51]:
                - generic [ref=e52]:
                  - generic "Report Name" [ref=e53]:
                    - generic [ref=e55]: Report Name
                  - generic "Status" [ref=e56]:
                    - generic [ref=e58]: Status
                  - generic "Date Created" [ref=e59]:
                    - generic [ref=e61]: Date Created
                  - generic "Actions" [ref=e62]:
                    - generic [ref=e64]: Actions
                - rowgroup [ref=e65]:
                  - row "Report Name Derived_Score_AutoFilter_Template_N39397A67352 Status In Progress Date Created 04/29/2026 01:06 PM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N39397A67352" [ref=e68]: Derived_Score_AutoFilter_Template_N39397A67352
                    - gridcell "Status In Progress" [ref=e70]: In Progress
                    - gridcell "Date Created 04/29/2026 01:06 PM" [ref=e72]: 04/29/2026 01:06 PM
                    - generic [ref=e73]:
                      - generic:
                        - gridcell "Download/Print" [disabled]
                      - gridcell "Delete" [ref=e75] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e76] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N48324A1690 Status Completed Date Created 04/29/2026 12:55 PM Download/Print Delete View Data Export Format" [ref=e78]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N48324A1690" [ref=e80]: Derived_Score_AutoFilter_Template_N48324A1690
                    - gridcell "Status Completed" [ref=e82]: Completed
                    - gridcell "Date Created 04/29/2026 12:55 PM" [ref=e84]: 04/29/2026 12:55 PM
                    - generic [ref=e85]:
                      - gridcell "Download/Print" [ref=e87] [cursor=pointer]
                      - gridcell "Delete" [ref=e89] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e90] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N25750A37157 Status Completed Date Created 04/29/2026 10:31 AM Download/Print Delete View Data Export Format" [ref=e92]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N25750A37157" [ref=e94]: Derived_Score_AutoFilter_Template_N25750A37157
                    - gridcell "Status Completed" [ref=e96]: Completed
                    - gridcell "Date Created 04/29/2026 10:31 AM" [ref=e98]: 04/29/2026 10:31 AM
                    - generic [ref=e99]:
                      - gridcell "Download/Print" [ref=e101] [cursor=pointer]
                      - gridcell "Delete" [ref=e103] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e104] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N4929A36906 Status Completed Date Created 04/29/2026 10:25 AM Download/Print Delete View Data Export Format" [ref=e106]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N4929A36906" [ref=e108]: Derived_Score_AutoFilter_Template_N4929A36906
                    - gridcell "Status Completed" [ref=e110]: Completed
                    - gridcell "Date Created 04/29/2026 10:25 AM" [ref=e112]: 04/29/2026 10:25 AM
                    - generic [ref=e113]:
                      - gridcell "Download/Print" [ref=e115] [cursor=pointer]
                      - gridcell "Delete" [ref=e117] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e118] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N54847A47520 Status Completed Date Created 04/29/2026 10:17 AM Download/Print Delete View Data Export Format" [ref=e120]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N54847A47520" [ref=e122]: Derived_Score_AutoFilter_Template_N54847A47520
                    - gridcell "Status Completed" [ref=e124]: Completed
                    - gridcell "Date Created 04/29/2026 10:17 AM" [ref=e126]: 04/29/2026 10:17 AM
                    - generic [ref=e127]:
                      - gridcell "Download/Print" [ref=e129] [cursor=pointer]
                      - gridcell "Delete" [ref=e131] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e132] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N85719A27341 Status Completed Date Created 04/29/2026 10:13 AM Download/Print Delete View Data Export Format" [ref=e134]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N85719A27341" [ref=e136]: Derived_Score_AutoFilter_Template_N85719A27341
                    - gridcell "Status Completed" [ref=e138]: Completed
                    - gridcell "Date Created 04/29/2026 10:13 AM" [ref=e140]: 04/29/2026 10:13 AM
                    - generic [ref=e141]:
                      - gridcell "Download/Print" [ref=e143] [cursor=pointer]
                      - gridcell "Delete" [ref=e145] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e146] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N96669A65074 Status Completed Date Created 04/27/2026 11:33 AM Download/Print Delete View Data Export Format" [ref=e148]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N96669A65074" [ref=e150]: Derived_Score_AutoFilter_Template_N96669A65074
                    - gridcell "Status Completed" [ref=e152]: Completed
                    - gridcell "Date Created 04/27/2026 11:33 AM" [ref=e154]: 04/27/2026 11:33 AM
                    - generic [ref=e155]:
                      - gridcell "Download/Print" [ref=e157] [cursor=pointer]
                      - gridcell "Delete" [ref=e159] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e160] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N35461A7266 Status Completed Date Created 04/27/2026 11:26 AM Download/Print Delete View Data Export Format" [ref=e162]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N35461A7266" [ref=e164]: Derived_Score_AutoFilter_Template_N35461A7266
                    - gridcell "Status Completed" [ref=e166]: Completed
                    - gridcell "Date Created 04/27/2026 11:26 AM" [ref=e168]: 04/27/2026 11:26 AM
                    - generic [ref=e169]:
                      - gridcell "Download/Print" [ref=e171] [cursor=pointer]
                      - gridcell "Delete" [ref=e173] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e174] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N8860A79959 Status Completed Date Created 04/27/2026 11:20 AM Download/Print Delete View Data Export Format" [ref=e176]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N8860A79959" [ref=e178]: Derived_Score_AutoFilter_Template_N8860A79959
                    - gridcell "Status Completed" [ref=e180]: Completed
                    - gridcell "Date Created 04/27/2026 11:20 AM" [ref=e182]: 04/27/2026 11:20 AM
                    - generic [ref=e183]:
                      - gridcell "Download/Print" [ref=e185] [cursor=pointer]
                      - gridcell "Delete" [ref=e187] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e188] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N88805A5274 Status Completed Date Created 04/27/2026 11:15 AM Download/Print Delete View Data Export Format" [ref=e190]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N88805A5274" [ref=e192]: Derived_Score_AutoFilter_Template_N88805A5274
                    - gridcell "Status Completed" [ref=e194]: Completed
                    - gridcell "Date Created 04/27/2026 11:15 AM" [ref=e196]: 04/27/2026 11:15 AM
                    - generic [ref=e197]:
                      - gridcell "Download/Print" [ref=e199] [cursor=pointer]
                      - gridcell "Delete" [ref=e201] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e202] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N63163A62592 Status Completed Date Created 04/03/2026 01:04 AM Download/Print Delete View Data Export Format" [ref=e204]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N63163A62592" [ref=e206]: Test_DataExport_AutoFilter_Template_N63163A62592
                    - gridcell "Status Completed" [ref=e208]: Completed
                    - gridcell "Date Created 04/03/2026 01:04 AM" [ref=e210]: 04/03/2026 01:04 AM
                    - generic [ref=e211]:
                      - gridcell "Download/Print" [ref=e213] [cursor=pointer]
                      - gridcell "Delete" [ref=e215] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e216] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N85545A66834 Status Completed Date Created 04/03/2026 01:00 AM Download/Print Delete View Data Export Format" [ref=e218]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N85545A66834" [ref=e220]: Test_DataExport_AutoFilter_Template_N85545A66834
                    - gridcell "Status Completed" [ref=e222]: Completed
                    - gridcell "Date Created 04/03/2026 01:00 AM" [ref=e224]: 04/03/2026 01:00 AM
                    - generic [ref=e225]:
                      - gridcell "Download/Print" [ref=e227] [cursor=pointer]
                      - gridcell "Delete" [ref=e229] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e230] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N27115A99477 Status Completed Date Created 04/03/2026 12:55 AM Download/Print Delete View Data Export Format" [ref=e232]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N27115A99477" [ref=e234]: Test_DataExport_AutoFilter_Template_N27115A99477
                    - gridcell "Status Completed" [ref=e236]: Completed
                    - gridcell "Date Created 04/03/2026 12:55 AM" [ref=e238]: 04/03/2026 12:55 AM
                    - generic [ref=e239]:
                      - gridcell "Download/Print" [ref=e241] [cursor=pointer]
                      - gridcell "Delete" [ref=e243] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e244] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N68448A42895 Status Completed Date Created 03/31/2026 01:33 PM Download/Print Delete View Data Export Format" [ref=e246]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N68448A42895" [ref=e248]: Derived_Score_AutoFilter_Template_N68448A42895
                    - gridcell "Status Completed" [ref=e250]: Completed
                    - gridcell "Date Created 03/31/2026 01:33 PM" [ref=e252]: 03/31/2026 01:33 PM
                    - generic [ref=e253]:
                      - gridcell "Download/Print" [ref=e255] [cursor=pointer]
                      - gridcell "Delete" [ref=e257] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e258] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N88747A75900 Status Completed Date Created 03/31/2026 01:29 PM Download/Print Delete View Data Export Format" [ref=e260]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N88747A75900" [ref=e262]: Derived_Score_AutoFilter_Template_N88747A75900
                    - gridcell "Status Completed" [ref=e264]: Completed
                    - gridcell "Date Created 03/31/2026 01:29 PM" [ref=e266]: 03/31/2026 01:29 PM
                    - generic [ref=e267]:
                      - gridcell "Download/Print" [ref=e269] [cursor=pointer]
                      - gridcell "Delete" [ref=e271] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e272] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N76284A22572 Status Completed Date Created 03/31/2026 01:21 PM Download/Print Delete View Data Export Format" [ref=e274]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N76284A22572" [ref=e276]: Derived_Score_AutoFilter_Template_N76284A22572
                    - gridcell "Status Completed" [ref=e278]: Completed
                    - gridcell "Date Created 03/31/2026 01:21 PM" [ref=e280]: 03/31/2026 01:21 PM
                    - generic [ref=e281]:
                      - gridcell "Download/Print" [ref=e283] [cursor=pointer]
                      - gridcell "Delete" [ref=e285] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e286] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N55652A83673 Status Completed Date Created 03/31/2026 01:18 PM Download/Print Delete View Data Export Format" [ref=e288]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N55652A83673" [ref=e290]: Derived_Score_AutoFilter_Template_N55652A83673
                    - gridcell "Status Completed" [ref=e292]: Completed
                    - gridcell "Date Created 03/31/2026 01:18 PM" [ref=e294]: 03/31/2026 01:18 PM
                    - generic [ref=e295]:
                      - gridcell "Download/Print" [ref=e297] [cursor=pointer]
                      - gridcell "Delete" [ref=e299] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e300] [cursor=pointer]
      - contentinfo [ref=e302]:
        - generic [ref=e303]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e304] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e305]
        - generic [ref=e306]:
          - link "Riverside Insights Facebook" [ref=e307] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e308]
          - link "Riverside Insights Twitter" [ref=e309] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e310]
          - link "Riverside Insights LinkedIn" [ref=e311] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e312]
          - link "Riverside Insights Instagram" [ref=e313] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e314]
        - generic [ref=e315]:
          - button "Leave Feedback" [ref=e316] [cursor=pointer]
          - generic [ref=e317]: "|"
          - link "Terms of Use" [ref=e318] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e319]: "|"
          - link "Privacy Policy" [ref=e320] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e321]: Footer region end
  - region "Chat Widget" [ref=e322]:
    - iframe [ref=e323]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e324]:
      - img [ref=e325]
```

# Test source

```ts
  645 |       .first()
  646 |       .click();
  647 |     const download = await downloadPromise;
  648 |     await download.saveAs(await getZipFilePath());
  649 |     await testinfo.attach("Downloaded Zip file", {
  650 |       path: await getZipFilePath(),
  651 |       contentType: "application/zip",
  652 |     });
  653 |   }
  654 | 
  655 |   async clickOnTheExamineeReportToDownload(
  656 |     testinfo: TestInfo,
  657 |     exportType: ExportType,
  658 |     examineeID: string,
  659 |   ) {
  660 |     const loadingOverlay = this.page.locator(".loading-overlay");
  661 |     if (await loadingOverlay.isVisible().catch(() => false)) {
  662 |       console.log("Loading overlay detected, waiting for it to disappear...");
  663 |       await loadingOverlay
  664 |         .waitFor({ state: "hidden", timeout: 60000 })
  665 |         .catch((e) =>
  666 |           console.log(
  667 |             "Warning: Timed out waiting for loading overlay to disappear",
  668 |           ),
  669 |         );
  670 |     }
  671 | 
  672 |     await this.page.waitForTimeout(5000);
  673 | 
  674 |     const isOnReportLibraryPage = this.page
  675 |       .url()
  676 |       .includes("/home/reports/reportcenter");
  677 |     if (!isOnReportLibraryPage) {
  678 |       console.log("Not on Report Library page, navigating there...");
  679 |       try {
  680 |         await this.goToTheMainMenuChildPage("Reports", "Report Library");
  681 |         await this.page.waitForResponse(
  682 |           (response) =>
  683 |             response.url().includes("GetSavedResearchExportData") &&
  684 |             response.status() === 200,
  685 |           { timeout: 60000 },
  686 |         );
  687 | 
  688 |         if (await loadingOverlay.isVisible().catch(() => false)) {
  689 |           await loadingOverlay
  690 |             .waitFor({ state: "hidden", timeout: 60000 })
  691 |             .catch(() => {});
  692 |         }
  693 |       } catch (error) {
  694 |         console.error("Navigation error:", error);
  695 |         const isNowOnReportLibraryPage = this.page
  696 |           .url()
  697 |           .includes("/home/reports/reportcenter");
  698 |         if (!isNowOnReportLibraryPage) {
  699 |           throw new Error(`Failed to navigate to Report Library: ${error}`);
  700 |         } else {
  701 |           console.log(
  702 |             "Navigation appeared to fail but we're on the Report Library page, continuing...",
  703 |           );
  704 |         }
  705 |       }
  706 |     } else {
  707 |       console.log("Already on Report Library page, skipping navigation.");
  708 |     }
  709 | 
  710 |     const expectedReportName = getBaseTemplateName(exportType, examineeID);
  711 | 
  712 |     const reportRowLocator = this.page.locator(
  713 |       `div.defaultRow[role="row"]:has(div.detail-cell-container[aria-label="Report Name ${expectedReportName}"])`,
  714 |     ).first();
  715 |     const downloadButtonLocator = reportRowLocator.locator(
  716 |       'button[aria-label="Download/Print"]',
  717 |     );
  718 | 
  719 |     try {
  720 |       console.log(`Looking for report row with name: ${expectedReportName}`);
  721 |       await reportRowLocator.waitFor({
  722 |         state: "attached",
  723 |         timeout: 10 * 60 * 1000,
  724 |       });
  725 |     } catch (error) {
  726 |       throw new Error(
  727 |         `Report row for ${expectedReportName} did not appear in the report library within 5 minutes.`,
  728 |       );
  729 |     }
  730 | 
  731 |     if (!(await downloadButtonLocator.isEnabled({ timeout: 15000 }))) {
  732 |       try {
  733 |         console.log(`Waiting for download button to become enabled...`);
  734 |         await downloadButtonLocator.waitFor({
  735 |           state: "visible",
  736 |           timeout: 5 * 60 * 1000,
  737 |         });
  738 |       } catch (error) {
  739 |         throw new Error(
  740 |           `Download button for ${expectedReportName} did not become enabled within 5 minutes after the row appeared.`,
  741 |         );
  742 |       }
  743 |     }
  744 | 
> 745 |     const downloadPromise = this.page.waitForEvent("download", {
      |                                       ^ Error: page.waitForEvent: Target page, context or browser has been closed
  746 |       timeout: 2 * 60 * 1000,
  747 |     });
  748 | 
  749 |     await downloadButtonLocator.click();
  750 | 
  751 |     let download;
  752 |     try {
  753 |       download = await downloadPromise;
  754 |     } catch (error) {
  755 |       throw new Error(
  756 |         `Download for ${expectedReportName} did not start within 2 minutes after clicking the button.`,
  757 |       );
  758 |     }
  759 | 
  760 |     const zipPath = getExamineeZipFilePath(exportType, examineeID);
  761 |     console.log(`Saving downloaded file to: ${zipPath}`);
  762 |     await download.saveAs(zipPath);
  763 |     await testinfo.attach("Downloaded Zip file", {
  764 |       path: zipPath,
  765 |       contentType: "application/zip",
  766 |     });
  767 |   }
  768 | 
  769 |   private requiredFile: any;
  770 |   private requiredFilePath: any;
  771 |   private txtFileContent: string;
  772 | 
  773 |   private examineeIdSet: Set<string> = new Set();
  774 |   private examinerIdSet: Set<string> = new Set();
  775 | 
  776 |   async getAllTheValuesUnderTheFollowing(heading: string) {
  777 |     const rows: string[] = this.txtFileContent.trim().split("\n");
  778 |     const headers: string[] | undefined = rows.shift()?.split("\t");
  779 |     const examineeID: number | undefined = headers?.indexOf("Examinee_ID");
  780 |     const examinerID: number | undefined = headers?.indexOf("Examiner_ID");
  781 |     const ItemName: number | undefined = headers?.indexOf("Item_Heading");
  782 |     const columnIndex: number | undefined = headers?.indexOf(heading);
  783 | 
  784 |     const headersArray: (number | undefined)[] = [
  785 |       examineeID,
  786 |       examinerID,
  787 |       ItemName,
  788 |       columnIndex,
  789 |     ];
  790 | 
  791 |     for (const i of headersArray) {
  792 |       if (i === undefined || i === -1) {
  793 |         throw new Error(
  794 |           `Heading "${i}" or ItemName  not found in the extracted file`,
  795 |         );
  796 |       }
  797 |     }
  798 | 
  799 |     rows.forEach((iLine) => {
  800 |       const columnValues: string[] = iLine.split("\t");
  801 |       const examineeid: string = columnValues[examineeID!];
  802 |       const examinerid: string = columnValues[examinerID!];
  803 |       const itemName: string = columnValues[ItemName!];
  804 |       const value: string = columnValues[columnIndex!];
  805 | 
  806 |       this.addToTheFollowingSet(examineeid, this.examineeIdSet);
  807 |       this.addToTheFollowingSet(examinerid, this.examinerIdSet);
  808 | 
  809 |       if (itemName !== "" && itemName !== undefined && itemName !== null) {
  810 |         // this.reqColumnsMap.set(itemName, value);
  811 |       }
  812 |     });
  813 | 
  814 |     const mapasJSON = JSON.stringify([...this.reqColumnsMap]);
  815 |     console.log("reqMapARray - - >" + mapasJSON);
  816 | 
  817 |     console.log(`this.examineeidArray : ${this.examineeIdSet}`);
  818 |   }
  819 | 
  820 |   private async addToTheFollowingSet(theID: string, theSet: Set<string>) {
  821 |     if (theID !== "" && theID !== undefined && theID !== null) {
  822 |       theSet.add(theID);
  823 |     }
  824 | 
  825 |     console.log(`The ${theID} set values Are : ${theSet} `);
  826 |   }
  827 | 
  828 |   async letsCompareRtAndCheckTheTimeDiffisNotMoreThan(
  829 |     wj5testpage: wj5TestPage,
  830 |     millis: number,
  831 |   ) {
  832 |     wj5testpage.itemMap.forEach((value, key) => {
  833 |       const liveTestRT: number | any = wj5testpage.itemMap
  834 |         .get(key)
  835 |         ?.get("ResponseTime");
  836 |       const downloadedRT: number | any = this.reqColumnsMap.get(key);
  837 |       // console.log(`Rt from live test ${liveTestRT} AND Rt from the downloaded file = ${downloadedRT} `);
  838 | 
  839 |       try {
  840 |         expect(Math.abs(liveTestRT - downloadedRT)).toBeLessThan(millis);
  841 |         console.log(
  842 |           `(liveTestRT-downloadedRT)<millis ${
  843 |             Math.abs(liveTestRT - downloadedRT) < millis
  844 |           }`,
  845 |         );
```