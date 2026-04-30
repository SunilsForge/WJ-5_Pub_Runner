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
              - heading "Hello 03PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "03PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                    - text: N9227A2022
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
                  - row "Begin assignment Marlon Franey_1777515668055 for N9227A2022, Antwan Marlon Franey_1777515668055 More info 89 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e65] [cursor=pointer]:
                    - cell "Begin assignment Marlon Franey_1777515668055 for N9227A2022, Antwan" [ref=e66]:
                      - button "Begin assignment Marlon Franey_1777515668055 for N9227A2022, Antwan" [disabled] [ref=e67]:
                        - generic [ref=e68]: N9227A2022, Antwan
                    - cell "Marlon Franey_1777515668055 More info" [ref=e69]:
                      - generic [ref=e70]:
                        - button "Marlon Franey_1777515668055" [disabled] [ref=e71]:
                          - generic [ref=e72]: Marlon Franey_1777515668055
                        - button "More info" [ref=e73]
                    - cell "89 days" [ref=e74]:
                      - button "89 days" [disabled] [ref=e75]
                    - cell "● In Progress" [ref=e76]:
                      - button "● In Progress" [disabled] [ref=e77]:
                        - generic [ref=e78]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e79]:
                      - button "Edit Assignment" [disabled] [ref=e80]
                      - button "Add Tests" [disabled] [ref=e81]
                      - button "Assignment actions" [ref=e82]
                      - navigation [ref=e83]:
                        - button "Share Examinee" [active] [ref=e84]
            - generic [ref=e85]:
              - generic [ref=e88]:
                - img [ref=e89]
                - heading "Notifications Center" [level=2] [ref=e93]
              - generic [ref=e94]:
                - generic [ref=e96]:
                  - img [ref=e97]
                  - heading "Resources" [level=3] [ref=e101]
                - list [ref=e102]:
                  - listitem [ref=e103]:
                    - button "Riverside Learn" [ref=e104] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e105]
                      - img [ref=e107]
                  - listitem [ref=e109]:
                    - button "Onboarding Tutorial Videos" [ref=e110] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e111]
                      - img [ref=e113]
                  - listitem [ref=e115]:
                    - button "Quick Reference Guides" [ref=e116] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e117]
                      - img [ref=e119]
                - button "View All" [ref=e122] [cursor=pointer]
      - contentinfo [ref=e123]:
        - generic [ref=e124]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e125] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e126]
        - generic [ref=e127]:
          - link "Riverside Insights Facebook" [ref=e128] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e129]
          - link "Riverside Insights Twitter" [ref=e130] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e131]
          - link "Riverside Insights LinkedIn" [ref=e132] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e133]
          - link "Riverside Insights Instagram" [ref=e134] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e135]
        - generic [ref=e136]:
          - button "Leave Feedback" [ref=e137] [cursor=pointer]
          - generic [ref=e138]: "|"
          - link "Terms of Use" [ref=e139] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e140]: "|"
          - link "Privacy Policy" [ref=e141] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e142]: Footer region end
```

# Test source

```ts
  1522 |     await this.getCheckboxLocator('enabled')
  1523 |       .first()
  1524 |       .click();
  1525 |     await this.addTestsButton.click();
  1526 |     try {
  1527 |       const responsePromise = this.page.waitForResponse(
  1528 |         (response) =>
  1529 |           response.url().includes(`/WJ5Grpc.TestBlock/GetAssignments`) &&
  1530 |           response.status() === 200,
  1531 |         { timeout: 1 * 60 * 1000 },
  1532 |       );
  1533 |       const response = await responsePromise;
  1534 |       await response.finished();
  1535 |     } catch (error) {
  1536 |       console.log(`Dashbard Page: The apis response issue ${error}`);
  1537 |     }
  1538 |     await this.page.waitForTimeout(2000);
  1539 |   }
  1540 | 
  1541 |   async verifyAllTheColumnsAreVisible(columnHeaders: string[]) {
  1542 |     const actualTexts = await this.page
  1543 |       .locator("div[class*='TestAssignmentModule'] thead th")
  1544 |       .allTextContents();
  1545 | 
  1546 |     RawValueLogger.log("Computed Value", actualTexts);
  1547 | 
  1548 |     // Verify each column header starts with the expected text (ignoring tooltip content)
  1549 |     expect.soft(actualTexts.length).toBe(columnHeaders.length);
  1550 | 
  1551 |     for (let i = 0; i < columnHeaders.length; i++) {
  1552 |       expect.soft(actualTexts[i], `Column ${i} header mismatch`).toContain(columnHeaders[i]);
  1553 |     }
  1554 |   }
  1555 | 
  1556 |   async closeTestAssignmentPopUp() {
  1557 |     await this.closeButton.waitFor({ state: "visible" });
  1558 |     await this.closeButton.click();
  1559 |   }
  1560 | 
  1561 |   async clickOnClosedTableViewButton() {
  1562 |     await this.closedTableViewButton.first().click();
  1563 |     await this.page.waitForLoadState("domcontentloaded");
  1564 |     await this.waitForLoadingSpinnerToDisappear();
  1565 |   }
  1566 | 
  1567 |   async clearSearchResults() {
  1568 |     await this.searchTestAssignmentsInput.clear();
  1569 |     await this.page.waitForLoadState("domcontentloaded");
  1570 |   }
  1571 | 
  1572 |   async clickOnActiveTableViewButton() {
  1573 |     await this.activeTableViewButton.click();
  1574 |     await this.page.waitForLoadState("domcontentloaded");
  1575 |     await this.waitForLoadingSpinnerToDisappear();
  1576 |     await this.page.waitForTimeout(2000);
  1577 |   }
  1578 | 
  1579 |   async verifyVisibleStatusesInTable(expectedStatuses: string[]) {
  1580 |     // 1. Get all elements
  1581 |     const statusElements = this.getTestAssignmentTableStatusColumn();
  1582 | 
  1583 |     // 2. Extract their data-status attribute values
  1584 |     const actualStatuses = await statusElements.evaluateAll((elements) =>
  1585 |       elements.map((el) => el.getAttribute("data-status"))
  1586 |     );
  1587 | 
  1588 |     RawValueLogger.log("Actual Statuses:", actualStatuses);
  1589 |     RawValueLogger.log("Expected Allowed Statuses:", expectedStatuses);
  1590 | 
  1591 |     // 3. Validate each actual status
  1592 |     for (const status of actualStatuses) {
  1593 |       expect.soft(
  1594 |         expectedStatuses.includes(status || ""),
  1595 |         `Unexpected status '${status}'. Expected one of: ${expectedStatuses.join(", ")}`
  1596 |       ).toBeTruthy();
  1597 |     }
  1598 | 
  1599 |     RawValueLogger.log("All visible statuses are within the expected list.");
  1600 |   }
  1601 | 
  1602 |   async verifyDaysleftToEditIsGraterThan(daysLeft: string) {
  1603 |     const daysLeftElement = this.getTestAssignmentTableColumn(3);
  1604 |     const actualDaysLeftText = await daysLeftElement.textContent();
  1605 |     RawValueLogger.log("Actual Days Left Text", actualDaysLeftText);
  1606 |     RawValueLogger.log("Expected Days Left", daysLeft);
  1607 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain("days");
  1608 | 
  1609 |     const actualDaysLeftNumber = parseInt(actualDaysLeftText?.match(/\d+/)?.[0] || "0", 10);
  1610 |     const expectedDaysLeftNumber = parseInt(daysLeft, 10);
  1611 |     RawValueLogger.log("Actual Days Left (number)", actualDaysLeftNumber);
  1612 |     RawValueLogger.log("Expected Days Left (number)", expectedDaysLeftNumber);
  1613 |     expect.soft(actualDaysLeftNumber, "Actual days left should be greater than expected").toBeGreaterThan(expectedDaysLeftNumber);
  1614 |   }
  1615 | 
  1616 |   async verifyDaysleftToEditIsEqualTo(daysLeft: string) {
  1617 |     const daysLeftElement = this.getTestAssignmentTableColumn(3);
  1618 |     const actualDaysLeftText = await daysLeftElement.first().textContent();
  1619 |     RawValueLogger.log("Actual Days Left Text", actualDaysLeftText);
  1620 |     RawValueLogger.log("Expected Days Left", daysLeft);
  1621 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain("days");
> 1622 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain(daysLeft);
       |                                                                             ^ Error: Days left text should contain 'days'
  1623 |   }
  1624 | 
  1625 |   async verifyEditedTestAssignmentIsDisplayedAtTheTopOfTheTable() {
  1626 |     const examineeList: string[] =
  1627 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1628 | 
  1629 |     const requiredExaminee = await this.utils.randomNumberGenerateBetween(0, 3);
  1630 |     let secondRequiredExaminee;
  1631 | 
  1632 |     do {
  1633 |       secondRequiredExaminee = await this.utils.randomNumberGenerateBetween(0, 3);
  1634 |     } while (secondRequiredExaminee == requiredExaminee);
  1635 | 
  1636 |     RawValueLogger.log("Required Examinee", examineeList[requiredExaminee]);
  1637 | 
  1638 |     await this.searchForExamineeAtSearchMyTestAssignments(
  1639 |       examineeList[requiredExaminee],
  1640 |     );
  1641 |     await this.editTestAssignmentButton.click();
  1642 |     await this.waitForDialogToAppear();
  1643 |     await this.editLastFirstName(examineeList[secondRequiredExaminee]);
  1644 |     const testSet: string = "General Intellectual Ability (GIA)";
  1645 |     await this.editTestSet(testSet);
  1646 |     await this.closeButton.click();
  1647 | 
  1648 |     await this.clearSearchResults();
  1649 | 
  1650 |     await this.page.waitForLoadState("domcontentloaded");
  1651 |     await this.waitForLoadingSpinnerToDisappear();
  1652 |     await this.page.waitForTimeout(3000);
  1653 | 
  1654 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  1655 | 
  1656 |     expect
  1657 |       .soft(
  1658 |         firstRowDetails.examinee,
  1659 |         "Examinee last name and first name not matching",
  1660 |       )
  1661 |       .toEqual(examineeList[secondRequiredExaminee]);
  1662 | 
  1663 |     expect
  1664 |       .soft(firstRowDetails.testSet, "Test set not matching")
  1665 |       .toContain(testSet);
  1666 | 
  1667 |   }
  1668 | 
  1669 |   async waitForDialogToAppear() {
  1670 |     await this.dialogBox.waitFor({ state: "visible", timeout: 30000 });
  1671 |     await this.waitForLoadingIconToDisappear();
  1672 |   }
  1673 | 
  1674 |   async editLastFirstName(examineeName: string) {
  1675 |     await this.changeExamineeNameInEditTestAssignmentPopUp(examineeName);
  1676 |     await this.clickUpdateButtonInEditTestAssignmentPopUp();
  1677 |   }
  1678 | 
  1679 |   async clickUpdateButtonInEditTestAssignmentPopUp() {
  1680 |     await this.updateButton.click();
  1681 |     await this.launchAssignmentButton.waitFor({
  1682 |       state: "visible",
  1683 |       timeout: 30 * 1000,
  1684 |     });
  1685 |   }
  1686 | 
  1687 |   async editTestSet(testSetName: string) {
  1688 |     await this.changeTestSetInEditTestAssignmentPopUp(testSetName);
  1689 |     await this.clickUpdateButtonInEditTestAssignmentPopUp();
  1690 |   }
  1691 | 
  1692 |   async verifyDeleteTestAssignmentFunctionality() {
  1693 |     const examineeListBeforeDelete: string[] =
  1694 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1695 |     await this.deleteFollowingTestAssignment(0);
  1696 |     const examineeListAfterDelete: string[] =
  1697 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1698 | 
  1699 |     // verify the first examinee is removed by taking the row details
  1700 |     expect
  1701 |       .soft(
  1702 |         examineeListAfterDelete[0],
  1703 |         "Examinee not deleted successfully",
  1704 |       )
  1705 |       .toEqual(examineeListBeforeDelete[1]);
  1706 | 
  1707 |   }
  1708 | 
  1709 |   async verifyDeleteTestAssignmentFunctionalityForInprogressStatus(bool: boolean) {
  1710 |     const examineeListBeforeDelete: string[] = await this.getAllExamineeDetailsFromMyTestAssignments();
  1711 |     await this.deleteFollowingInprogressTestAssignment(0, bool);
  1712 |     const examineeListAfterDelete: string[] = await this.getAllExamineeDetailsFromMyTestAssignments();
  1713 | 
  1714 |     if (bool) {
  1715 |       expect.soft(examineeListAfterDelete[0], 'Examinee not deleted successfully').toEqual(examineeListBeforeDelete[1]);
  1716 |     } else {
  1717 |       expect.soft(examineeListAfterDelete[0], 'Examinee should not be deleted').toEqual(examineeListBeforeDelete[0]);
  1718 |     }
  1719 |   }
  1720 | 
  1721 |   async verifyDeleteTestAssignmentFunctionalityForSubmittedStatus() {
  1722 |     await this.clickFollowingRowElipsisButton(0);
```