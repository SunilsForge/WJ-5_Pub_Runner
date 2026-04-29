# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/dashboard/testAssignments_A.spec.ts >> Validate Dashboard Test Assignments functionality
- Location: src/tests/functional/dashboard/testAssignments_A.spec.ts:21:5

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//div[starts-with(@class, \'right-side-buttons\')]//button[text()=\'Update\']')
    - locator resolved to <button disabled id="update_assignment" class="blue-button-no-margin">Update</button>
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

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - generic [ref=e1]:
      - banner [ref=e2]:
        - generic [ref=e3]:
          - button [ref=e4]: Skip to main Content
          - link [ref=e5] [cursor=pointer]:
            - /url: /products
          - generic [ref=e6]: Riverside Insights Logo
          - generic [ref=e7]:
            - heading [level=2] [ref=e8]:
              - generic [ref=e9]: Hello
              - button [ref=e10] [cursor=pointer]: 09PwAut25AH ln
            - navigation [ref=e13]:
              - button [ref=e14] [cursor=pointer]: Contact Us
              - button [ref=e15] [cursor=pointer]: "| Subscription Details"
              - button [ref=e16] [cursor=pointer]: "| Sign Out"
      - navigation [ref=e17]:
        - menubar [ref=e19]:
          - menuitem [ref=e21] [cursor=pointer]: Dashboard
          - menuitem [ref=e23] [cursor=pointer]: Test Sets
          - menuitem [ref=e25] [cursor=pointer]: Examinees
          - menuitem [ref=e27] [cursor=pointer]: Staff
          - menuitem [ref=e29] [cursor=pointer]:
            - text: Reports
            - img [ref=e30]
          - menuitem [ref=e33] [cursor=pointer]: Resources
      - main [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - generic [ref=e37]:
              - heading [level=1] [ref=e38]: My Test Assignments
              - button [ref=e39] [cursor=pointer]: Create New Test Assignment
            - generic [ref=e40]:
              - generic [ref=e43]:
                - textbox [ref=e44]:
                  - /placeholder: Search Test Assignments
                  - text: N72172A22908, Tyler
                - button [ref=e45] [cursor=pointer]
              - generic [ref=e46]:
                - button [disabled] [ref=e47]: Active
                - button [disabled] [ref=e48]: Closed
            - table [ref=e50]:
              - rowgroup [ref=e57]:
                - row [ref=e58]:
                  - columnheader [ref=e59]: Examinee
                  - columnheader [ref=e60]: Test Set
                  - columnheader [ref=e61]: Days Left to Edit
                  - columnheader [ref=e62]: Status
                  - columnheader [ref=e63]: Actions
              - rowgroup [ref=e64]:
                - row [ref=e65] [cursor=pointer]:
                  - cell [ref=e66]:
                    - button [ref=e67]:
                      - generic [ref=e68]: N72172A22908, Tyler
                  - cell [ref=e69]:
                    - generic [ref=e70]:
                      - button [ref=e71]:
                        - generic [ref=e72]: General Intellectual Ability (GIA)
                      - button [ref=e73]
                  - cell [ref=e74]:
                    - button [ref=e75]: —
                  - cell [ref=e76]:
                    - button [ref=e77]:
                      - generic [ref=e78]: ●
                      - text: Not Started
                  - cell [ref=e79]:
                    - button [ref=e80]
                    - button [ref=e81]
                    - button [ref=e82]
          - generic [ref=e83]:
            - generic [ref=e86]:
              - img [ref=e87]
              - heading [level=2] [ref=e91]: Notifications Center
            - generic [ref=e92]:
              - generic [ref=e94]:
                - img [ref=e95]
                - heading [level=3] [ref=e99]: Resources
              - list [ref=e100]:
                - listitem [ref=e101]:
                  - button [ref=e102] [cursor=pointer]:
                    - heading [level=4] [ref=e103]: Riverside Learn
                    - img [ref=e105]
                - listitem [ref=e107]:
                  - button [ref=e108] [cursor=pointer]:
                    - heading [level=4] [ref=e109]: Onboarding Tutorial Videos
                    - img [ref=e111]
                - listitem [ref=e113]:
                  - button [ref=e114] [cursor=pointer]:
                    - heading [level=4] [ref=e115]: Quick Reference Guides
                    - img [ref=e117]
              - button [ref=e120] [cursor=pointer]: View All
    - contentinfo [ref=e121]:
      - generic [ref=e122]: Footer region,
      - link [ref=e123] [cursor=pointer]:
        - /url: https://www.riversideinsights.com/
        - img [ref=e124]
      - generic [ref=e125]:
        - link [ref=e126] [cursor=pointer]:
          - /url: https://www.facebook.com/RiversideInsights/
          - img [ref=e127]
        - link [ref=e128] [cursor=pointer]:
          - /url: https://twitter.com/1BillionLives
          - img [ref=e129]
        - link [ref=e130] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/riverside-insights/
          - img [ref=e131]
        - link [ref=e132] [cursor=pointer]:
          - /url: https://www.instagram.com/riversideinsightsassessments/
          - img [ref=e133]
      - generic [ref=e134]:
        - button [ref=e135] [cursor=pointer]: Leave Feedback
        - generic [ref=e136]: "|"
        - link [ref=e137] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/terms-of-use
          - text: Terms of Use
        - generic [ref=e138]: "|"
        - link [ref=e139] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/privacy-assessment_policy
          - text: Privacy Policy
      - generic [ref=e140]: Footer region end
  - region "Chat Widget" [ref=e141]:
    - iframe [ref=e142]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e143]:
      - img [ref=e144]
  - dialog [ref=e147]:
    - generic [ref=e148]:
      - heading "Edit Test Assignment" [level=1] [ref=e149]
      - generic [ref=e157]:
        - generic [ref=e158]:
          - generic [ref=e159]: Examinee
          - generic [ref=e160]: Complete
        - generic [ref=e161]:
          - generic [ref=e162]: Test Sets
          - generic [ref=e163]: In Progress
        - generic [ref=e164]:
          - generic [ref=e165]: Settings
          - generic [ref=e166]: Complete
    - generic [ref=e167]:
      - heading "Select a Test Set" [level=3] [ref=e168]
      - generic [ref=e172]:
        - generic [ref=e173]: Test Set Name
        - button "Test Set Name" [ref=e174] [cursor=pointer]:
          - generic [ref=e175]: Select Test Set
    - generic [ref=e177]:
      - button "Cancel" [ref=e178] [cursor=pointer]
      - generic [ref=e179]:
        - button "Back" [ref=e180] [cursor=pointer]
        - button "Update" [disabled] [ref=e181]
```

# Test source

```ts
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
  1622 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain(daysLeft);
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
> 1680 |     await this.updateButton.click();
       |                             ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
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
  1723 |     await this.verifyDeleteButtonVisibility();
  1724 | 
  1725 |   }
  1726 | 
  1727 |   async verifyDeleteButtonVisibility() {
  1728 |     expect.soft(
  1729 |       await this.deleteButton.isVisible(),
  1730 |       "Delete button should not be visible for submitted test assignment",
  1731 |     ).toBeFalsy();
  1732 |   }
  1733 | 
  1734 |   async verifyElipsisButtonIsDisabled() {
  1735 |     expect.soft(
  1736 |       await this.elipsisButton.first().isEnabled(),
  1737 |       "Elipsis button should be disabled for submitted test assignment",
  1738 |     ).toBeFalsy();
  1739 |   }
  1740 | 
  1741 |   async verifyEllipseMenuOptions(expectedOptions: string[]) {
  1742 |     for (const option of expectedOptions) {
  1743 |       const buttonLocator = this.page.locator(`//button[text()='${option}']`).first();
  1744 |       await expect.soft(buttonLocator, `${option} button should be visible`).toBeVisible();
  1745 |     }
  1746 |   }
  1747 | 
  1748 |   async verifyEllipseMenuOptionsNotPresent(unexpectedOptions: string[]) {
  1749 |     for (const option of unexpectedOptions) {
  1750 |       const buttonLocator = this.page.locator(`//button[text()='${option}']`).first();
  1751 |       await expect.soft(buttonLocator, `${option} button should not be visible`).toBeHidden();
  1752 |     }
  1753 |   }
  1754 | 
  1755 |   async verifyEllipseMenuOptionsInPopup(expectedOptions: string[]) {
  1756 |     const popup = this.page.locator("div[role='dialog']");
  1757 |     for (const option of expectedOptions) {
  1758 |       const buttonLocator = popup.locator(`nav button:text-is('${option}')`).first();
  1759 |       await expect.soft(buttonLocator, `${option} button should be visible in popup`).toBeVisible();
  1760 |     }
  1761 |   }
  1762 | 
  1763 |   async verifyEllipseMenuOptionsNotPresentInPopup(unexpectedOptions: string[]) {
  1764 |     const popup = this.page.locator("div[role='dialog']");
  1765 |     for (const option of unexpectedOptions) {
  1766 |       const buttonLocator = popup.locator(`nav button:text-is('${option}')`).first();
  1767 |       await expect.soft(buttonLocator, `${option} button should not be visible in popup`).toBeHidden();
  1768 |     }
  1769 |   }
  1770 | 
  1771 |   async verifyActionIconsForRow(rowIndex: number, expectedIcons: string[]) {
  1772 |     for (const icon of expectedIcons) {
  1773 |       let locator: Locator;
  1774 |       if (icon === 'Edit Assignment') {
  1775 |         locator = this.editTestAssignmentButton.nth(rowIndex);
  1776 |       } else if (icon === 'Add tests to test set') {
  1777 |         locator = this.addTestsToTestSetButton.nth(rowIndex);
  1778 |       } else if (icon === 'Generate Report') {
  1779 |         locator = this.generateReportIcon.nth(rowIndex);
  1780 |       }
```