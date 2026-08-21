# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/dashboard/testAssignments_B.spec.ts >> Validate Dashboard Test Assignments functionality Part_B
- Location: src/tests/functional/dashboard/testAssignments_B.spec.ts:76:5

# Error details

```
Error: Days left text should contain 'days'

expect(received).toContain(expected) // indexOf

Expected substring: "90"
Received string:    "89 days "
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
              - heading "Hello S08PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S08PwAut25AH ln" [ref=e10] [cursor=pointer]
              - navigation [ref=e13]:
                - button "Contact Us" [ref=e14] [cursor=pointer]
                - button "| WJ V Settings" [ref=e15] [cursor=pointer]
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
          - generic [ref=e38]:
            - generic [ref=e40]:
              - generic [ref=e41]: NEW!
              - generic [ref=e42]: Offline Mode is here, download your assignments and get started today!
              - link "Read More" [ref=e43] [cursor=pointer]:
                - /url: /media/OfflineMode.pdf
              - button "Close" [ref=e44] [cursor=pointer]: ✕
            - generic [ref=e45]:
              - generic [ref=e46]:
                - heading "My Test Assignments" [level=1] [ref=e47]
                - button "Create New Test Assignment" [ref=e48] [cursor=pointer]
              - generic [ref=e49]:
                - generic [ref=e52]:
                  - textbox [ref=e53]:
                    - /placeholder: Search Test Assignments
                    - text: N92430A32073
                  - button "Search Test Assignments" [ref=e54] [cursor=pointer]
                - generic [ref=e55]:
                  - button "Active" [disabled] [ref=e56]
                  - button "Closed" [disabled] [ref=e57]
              - table "Available Assignments" [ref=e59]:
                - rowgroup [ref=e66]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e67]:
                    - columnheader "This is the student or individual being assessed." [ref=e68]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e69]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e70]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e71]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e72]: Actions
                - rowgroup [ref=e73]:
                  - row "Begin assignment Emilio Sawayn III_1787281872575 for N92430A32073, Edd Emilio Sawayn III_1787281872575 More info 89 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Emilio Sawayn III_1787281872575 for N92430A32073, Edd" [ref=e75]:
                      - button "Begin assignment Emilio Sawayn III_1787281872575 for N92430A32073, Edd" [disabled] [ref=e76]:
                        - generic [ref=e77]: N92430A32073, Edd
                    - cell "Emilio Sawayn III_1787281872575 More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Emilio Sawayn III_1787281872575" [disabled] [ref=e80]:
                          - generic [ref=e81]: Emilio Sawayn III_1787281872575
                        - button "More info" [ref=e82]
                    - cell "89 days" [ref=e83]:
                      - button "89 days" [disabled] [ref=e84]
                    - cell "● In Progress" [ref=e85]:
                      - button "● In Progress" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                      - navigation [ref=e92]:
                        - button "Share Examinee" [active] [ref=e93]
            - generic [ref=e94]:
              - generic [ref=e95]:
                - generic [ref=e97]:
                  - img [ref=e98]
                  - heading "Notifications Center" [level=2] [ref=e102]
                - generic [ref=e103]:
                  - generic [ref=e104]:
                    - generic [ref=e105]: 08/17/2026
                    - paragraph [ref=e106]:
                      - generic [ref=e107]: The RiversideScore platform will be down for maintenance on Thursday, August 20th, from 8:00 PM
                      - text: to 12:00 AM Central.
                      - generic [ref=e108]: During this time, access will be unavailable. If you have any questions, please contact
                      - text: "Customer Support Monday- Friday 8AM- 4PM Central at:"
                    - paragraph [ref=e109]:
                      - text: "Tel:"
                      - link "800-323-9540" [ref=e110] [cursor=pointer]:
                        - /url: tel:8003239540
                      - text: "Email:"
                      - link "Inquiry@service.riversideinsights.com" [ref=e112] [cursor=pointer]:
                        - /url: mailto:Inquiry@service.riversideinsights.com
                    - paragraph [ref=e113]: We appreciate your patience as we work to improve the experience!
                  - generic [ref=e114]:
                    - generic [ref=e115]: 08/12/2026
                    - generic [ref=e116]:
                      - paragraph [ref=e117]: What training would help you most with the WJ V? Tell us in a quick 3-minute survey. Your feedback will directly shape what we build next.
                      - paragraph [ref=e118]:
                        - link "Take the Survey" [ref=e119] [cursor=pointer]:
                          - /url: https://www.surveymonkey.com/r/YFVYJNG
                      - paragraph
              - generic [ref=e120]:
                - generic [ref=e122]:
                  - img [ref=e123]
                  - heading "Resources" [level=3] [ref=e127]
                - list [ref=e128]:
                  - listitem [ref=e129]:
                    - button "Riverside Learn" [ref=e130] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e131]
                      - img [ref=e133]
                  - listitem [ref=e135]:
                    - button "Onboarding Tutorial Videos" [ref=e136] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e137]
                      - img [ref=e139]
                  - listitem [ref=e141]:
                    - button "Quick Reference Guides" [ref=e142] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e143]
                      - img [ref=e145]
                - button "View All" [ref=e148] [cursor=pointer]
      - contentinfo [ref=e149]:
        - generic [ref=e150]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e151] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e152]
        - generic [ref=e153]:
          - link "Riverside Insights Facebook" [ref=e154] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e155]
          - link "Riverside Insights Twitter" [ref=e156] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e157]
          - link "Riverside Insights LinkedIn" [ref=e158] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e159]
          - link "Riverside Insights Instagram" [ref=e160] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e161]
        - generic [ref=e162]:
          - button "Leave Feedback" [ref=e163] [cursor=pointer]
          - generic [ref=e164]: "|"
          - link "Terms of Use" [ref=e165] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e166]: "|"
          - link "Privacy Policy" [ref=e167] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e168]: Footer region end
```

# Test source

```ts
  1504 |     await this.getCheckboxLocator('unchecked')
  1505 |       .first()
  1506 |       .click();
  1507 |     await this.addTestsButton.click();
  1508 |     try {
  1509 |       const responsePromise = this.page.waitForResponse(
  1510 |         (response) =>
  1511 |           response.url().includes(`/WJ5Grpc.TestBlock/GetAssignments`) &&
  1512 |           response.status() === 200,
  1513 |         { timeout: 1 * 60 * 1000 },
  1514 |       );
  1515 |       const response = await responsePromise;
  1516 |       await response.finished();
  1517 |     } catch (error) {
  1518 |       console.log(`Dashbard Page: The apis response issue ${error}`);
  1519 |     }
  1520 |     await this.page.waitForTimeout(2000);
  1521 |   }
  1522 | 
  1523 |   async verifyAllTheColumnsAreVisible(columnHeaders: string[]) {
  1524 |     const actualTexts = await this.page
  1525 |       .locator("div[class*='TestAssignmentModule'] thead th")
  1526 |       .allTextContents();
  1527 | 
  1528 |     RawValueLogger.log("Computed Value", actualTexts);
  1529 | 
  1530 |     // Verify each column header starts with the expected text (ignoring tooltip content)
  1531 |     expect.soft(actualTexts.length).toBe(columnHeaders.length);
  1532 | 
  1533 |     for (let i = 0; i < columnHeaders.length; i++) {
  1534 |       expect.soft(actualTexts[i], `Column ${i} header mismatch`).toContain(columnHeaders[i]);
  1535 |     }
  1536 |   }
  1537 | 
  1538 |   async closeTestAssignmentPopUp() {
  1539 |     await this.blueCloseButton.waitFor({ state: "visible" });
  1540 |     await this.blueCloseButton.click();
  1541 |   }
  1542 | 
  1543 |   async clickOnClosedTableViewButton() {
  1544 |     await this.closedTableViewButton.first().click();
  1545 |     await this.page.waitForLoadState("domcontentloaded");
  1546 |     await this.waitForLoadingSpinnerToDisappear();
  1547 |   }
  1548 | 
  1549 |   async clearSearchResults() {
  1550 |     await this.searchTestAssignmentsInput.clear();
  1551 |     await this.page.waitForLoadState("domcontentloaded");
  1552 |   }
  1553 | 
  1554 |   async clickOnActiveTableViewButton() {
  1555 |     await this.activeTableViewButton.click();
  1556 |     await this.page.waitForLoadState("domcontentloaded");
  1557 |     await this.waitForLoadingSpinnerToDisappear();
  1558 |     await this.page.waitForTimeout(2000);
  1559 |   }
  1560 | 
  1561 |   async verifyVisibleStatusesInTable(expectedStatuses: string[]) {
  1562 |     // 1. Get all elements
  1563 |     const statusElements = this.getTestAssignmentTableStatusColumn();
  1564 | 
  1565 |     // 2. Extract their data-status attribute values
  1566 |     const actualStatuses = await statusElements.evaluateAll((elements) =>
  1567 |       elements.map((el) => el.getAttribute("data-status"))
  1568 |     );
  1569 | 
  1570 |     RawValueLogger.log("Actual Statuses:", actualStatuses);
  1571 |     RawValueLogger.log("Expected Allowed Statuses:", expectedStatuses);
  1572 | 
  1573 |     // 3. Validate each actual status
  1574 |     for (const status of actualStatuses) {
  1575 |       expect.soft(
  1576 |         expectedStatuses.includes(status || ""),
  1577 |         `Unexpected status '${status}'. Expected one of: ${expectedStatuses.join(", ")}`
  1578 |       ).toBeTruthy();
  1579 |     }
  1580 | 
  1581 |     RawValueLogger.log("All visible statuses are within the expected list.");
  1582 |   }
  1583 | 
  1584 |   async verifyDaysleftToEditIsGraterThan(daysLeft: string) {
  1585 |     const daysLeftElement = this.getTestAssignmentTableColumn(3);
  1586 |     const actualDaysLeftText = await daysLeftElement.textContent();
  1587 |     RawValueLogger.log("Actual Days Left Text", actualDaysLeftText);
  1588 |     RawValueLogger.log("Expected Days Left", daysLeft);
  1589 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain("days");
  1590 | 
  1591 |     const actualDaysLeftNumber = parseInt(actualDaysLeftText?.match(/\d+/)?.[0] || "0", 10);
  1592 |     const expectedDaysLeftNumber = parseInt(daysLeft, 10);
  1593 |     RawValueLogger.log("Actual Days Left (number)", actualDaysLeftNumber);
  1594 |     RawValueLogger.log("Expected Days Left (number)", expectedDaysLeftNumber);
  1595 |     expect.soft(actualDaysLeftNumber, "Actual days left should be greater than expected").toBeGreaterThan(expectedDaysLeftNumber);
  1596 |   }
  1597 | 
  1598 |   async verifyDaysleftToEditIsEqualTo(daysLeft: string) {
  1599 |     const daysLeftElement = this.getTestAssignmentTableColumn(3);
  1600 |     const actualDaysLeftText = await daysLeftElement.first().textContent();
  1601 |     RawValueLogger.log("Actual Days Left Text", actualDaysLeftText);
  1602 |     RawValueLogger.log("Expected Days Left", daysLeft);
  1603 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain("days");
> 1604 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain(daysLeft);
       |                                                                             ^ Error: Days left text should contain 'days'
  1605 |   }
  1606 | 
  1607 |   async verifyEditedTestAssignmentIsDisplayedAtTheTopOfTheTable() {
  1608 |     const examineeList: string[] =
  1609 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1610 | 
  1611 |     const requiredExaminee = await this.utils.randomNumberGenerateBetween(0, 3);
  1612 |     let secondRequiredExaminee;
  1613 | 
  1614 |     do {
  1615 |       secondRequiredExaminee = await this.utils.randomNumberGenerateBetween(0, 3);
  1616 |     } while (secondRequiredExaminee == requiredExaminee);
  1617 | 
  1618 |     RawValueLogger.log("Required Examinee", examineeList[requiredExaminee]);
  1619 | 
  1620 |     await this.searchForExamineeAtSearchMyTestAssignments(
  1621 |       examineeList[requiredExaminee],
  1622 |     );
  1623 |     await this.editTestAssignmentButton.click();
  1624 |     await this.waitForDialogToAppear();
  1625 |     await this.editLastFirstName(examineeList[secondRequiredExaminee]);
  1626 |     const testSet: string = "General Intellectual Ability (GIA)";
  1627 |     await this.editTestSet(testSet);
  1628 |     await this.blueCloseButton.click();
  1629 | 
  1630 |     await this.clearSearchResults();
  1631 | 
  1632 |     await this.page.waitForLoadState("domcontentloaded");
  1633 |     await this.waitForLoadingSpinnerToDisappear();
  1634 |     await this.page.waitForTimeout(3000);
  1635 | 
  1636 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  1637 | 
  1638 |     expect
  1639 |       .soft(
  1640 |         firstRowDetails.examinee,
  1641 |         "Examinee last name and first name not matching",
  1642 |       )
  1643 |       .toEqual(examineeList[secondRequiredExaminee]);
  1644 | 
  1645 |     expect
  1646 |       .soft(firstRowDetails.testSet, "Test set not matching")
  1647 |       .toContain(testSet);
  1648 | 
  1649 |   }
  1650 | 
  1651 |   async waitForDialogToAppear() {
  1652 |     await this.dialogBox.waitFor({ state: "visible", timeout: 30000 });
  1653 |     await this.waitForLoadingIconToDisappear();
  1654 |   }
  1655 | 
  1656 |   async editLastFirstName(examineeName: string) {
  1657 |     await this.changeExamineeNameInEditTestAssignmentPopUp(examineeName);
  1658 |     await this.clickUpdateButtonInEditTestAssignmentPopUp();
  1659 |   }
  1660 | 
  1661 |   async clickUpdateButtonInEditTestAssignmentPopUp() {
  1662 |     await this.updateButton.click();
  1663 |     await this.launchAssignmentButton.waitFor({
  1664 |       state: "visible",
  1665 |       timeout: 30 * 1000,
  1666 |     });
  1667 |   }
  1668 | 
  1669 |   async editTestSet(testSetName: string) {
  1670 |     await this.changeTestSetInEditTestAssignmentPopUp(testSetName);
  1671 |     await this.clickUpdateButtonInEditTestAssignmentPopUp();
  1672 |   }
  1673 | 
  1674 |   async verifyDeleteTestAssignmentFunctionality() {
  1675 |     const examineeListBeforeDelete: string[] =
  1676 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1677 |     await this.deleteFollowingTestAssignment(0);
  1678 |     const examineeListAfterDelete: string[] =
  1679 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1680 | 
  1681 |     // verify the first examinee is removed by taking the row details
  1682 |     expect
  1683 |       .soft(
  1684 |         examineeListAfterDelete[0],
  1685 |         "Examinee not deleted successfully",
  1686 |       )
  1687 |       .toEqual(examineeListBeforeDelete[1]);
  1688 | 
  1689 |   }
  1690 | 
  1691 |   async verifyDeleteTestAssignmentFunctionalityForInprogressStatus(bool: boolean) {
  1692 |     const examineeListBeforeDelete: string[] = await this.getAllExamineeDetailsFromMyTestAssignments();
  1693 |     await this.deleteFollowingInprogressTestAssignment(0, bool);
  1694 |     const examineeListAfterDelete: string[] = await this.getAllExamineeDetailsFromMyTestAssignments();
  1695 | 
  1696 |     if (bool) {
  1697 |       expect.soft(examineeListAfterDelete[0], 'Examinee not deleted successfully').toEqual(examineeListBeforeDelete[1]);
  1698 |     } else {
  1699 |       expect.soft(examineeListAfterDelete[0], 'Examinee should not be deleted').toEqual(examineeListBeforeDelete[0]);
  1700 |     }
  1701 |   }
  1702 | 
  1703 |   async verifyDeleteTestAssignmentFunctionalityForSubmittedStatus() {
  1704 |     await this.clickFollowingRowElipsisButton(0);
```