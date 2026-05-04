# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/dashboard/testAssignments_C.spec.ts >> Validate Dashboard Test Assignments functionality Part_C
- Location: src/tests/functional/dashboard/testAssignments_C.spec.ts:13:5

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[contains(@class,\'checkbox\')]').first()
    - locator resolved to <button tabindex="0" class="rsi-checkbox" aria-disabled="true" aria-label="Academic Facts">…</button>
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
- generic:
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
              - button [ref=e10] [cursor=pointer]: 04PwAut25Ex_01 ln
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
                  - text: N52817A29619, Colleen
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
                      - generic [ref=e68]: N52817A29619, Colleen
                  - cell [ref=e69]:
                    - generic [ref=e70]:
                      - button [ref=e71]:
                        - generic [ref=e72]: Form A (+1 more)
                      - button [ref=e73]
                  - cell [ref=e74]:
                    - button [ref=e75]: 87 days
                  - cell [ref=e76]:
                    - button [ref=e77]:
                      - generic [ref=e78]: ●
                      - text: Submitted
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
  - dialog "Add Test To Assignment" [active] [ref=e142]:
    - generic [ref=e143]: Add Supplemental Tests
    - generic [ref=e144]:
      - generic [ref=e145]:
        - heading "Form A (+1 more)" [level=2] [ref=e146]
        - generic [ref=e147]:
          - img [ref=e148]
          - text: "Time Estimate:"
          - generic [ref=e155]: 4 hr 19 min
        - generic [ref=e156]: Analysis-Synthesis
        - generic [ref=e157]: Applied Problems
        - generic [ref=e158]: Block Rotation
        - generic [ref=e159]: Letter-Pattern Matching
        - generic [ref=e160]: Calculation
        - generic [ref=e161]: Letter-Word Identification
        - generic [ref=e162]: Math Facts Fluency
        - generic [ref=e163]: Math Problem Identification
        - generic [ref=e164]: Matrices
        - generic [ref=e165]: Number-Pattern Matching
        - generic [ref=e166]: Numbers Reversed
        - generic [ref=e167]: Oral Comprehension
        - generic [ref=e168]: Oral Language Samples
        - generic [ref=e169]: Oral Vocabulary–Synonyms
        - generic [ref=e170]: Oral Vocabulary–Antonyms
        - generic [ref=e171]: Paragraph Reading Comprehension
        - generic [ref=e172]: Passage Comprehension
        - generic [ref=e173]: Phonemic Word Retrieval
        - generic [ref=e174]: Picture Vocabulary
        - generic [ref=e175]: Semantic Word Retrieval
        - generic [ref=e176]: Sentence Reading Fluency
        - generic [ref=e177]: Sentence Writing Accuracy
        - generic [ref=e178]: Sentence Writing Fluency
        - generic [ref=e179]: Spatial Relations
        - generic [ref=e180]: Spelling
        - generic [ref=e181]: Story Comprehension
        - generic [ref=e182]: Story Recall
        - generic [ref=e183]: Verbal Analogies
        - generic [ref=e184]: Verbal Attention
        - generic [ref=e185]: Word Attack
        - generic [ref=e186]: Written Language Samples
        - generic [ref=e187]: Word Reading Fluency
        - generic [ref=e188]: Academic Vocabulary
        - generic [ref=e189]: General Information–Where
        - generic [ref=e190]: General Information–What
        - generic [ref=e191]: Number Series
        - generic [ref=e192]: Memory for Words
        - generic [ref=e193]: Nonsense Word Repetition
        - generic [ref=e194]: Oral Reading
        - generic [ref=e195]: Rapid Letter Naming
        - generic [ref=e196]: Rapid Phoneme Naming
        - generic [ref=e197]: Rapid Picture Naming
        - generic [ref=e198]: Segmentation
        - generic [ref=e199]: Sentence Repetition
        - generic [ref=e200]: Sound Blending
        - generic [ref=e201]: Sound Deletion
        - generic [ref=e202]: Sound Reversal
        - generic [ref=e203]: Sound Substitution
        - generic [ref=e204]: Spelling of Sounds
        - generic [ref=e205]: Academic Facts
      - generic [ref=e206]:
        - navigation [ref=e207]:
          - tablist [ref=e208]:
            - tab "All Tests" [selected] [ref=e209] [cursor=pointer]
            - tab "Clusters" [ref=e210] [cursor=pointer]
        - generic [ref=e212]:
          - generic [ref=e213]: All Tests
          - generic [ref=e214]:
            - generic [ref=e215]: Search tests
            - generic [ref=e216]:
              - textbox "Search tests" [ref=e217]
              - button "Search tests" [ref=e218] [cursor=pointer]
          - generic [ref=e219]:
            - button "Academic Facts" [disabled] [ref=e221] [cursor=pointer]:
              - generic [ref=e222]: Academic Facts
            - button "Academic Vocabulary" [disabled] [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: Academic Vocabulary
            - button "Analysis-Synthesis" [disabled] [ref=e229] [cursor=pointer]:
              - generic [ref=e230]: Analysis-Synthesis
            - button "Animal-Number Sequencing" [ref=e233] [cursor=pointer]:
              - generic [ref=e234]: Animal-Number Sequencing
            - button "Applied Problems" [disabled] [ref=e237] [cursor=pointer]:
              - generic [ref=e238]: Applied Problems
            - button "Block Rotation" [disabled] [ref=e241] [cursor=pointer]:
              - generic [ref=e242]: Block Rotation
            - button "Calculation" [disabled] [ref=e245] [cursor=pointer]:
              - generic [ref=e246]: Calculation
            - button "Concept Formation" [ref=e249] [cursor=pointer]:
              - generic [ref=e250]: Concept Formation
            - button "General Information–Where" [disabled] [ref=e253] [cursor=pointer]:
              - generic [ref=e254]: General Information–Where
            - button "General Information–What" [disabled] [ref=e257] [cursor=pointer]:
              - generic [ref=e258]: General Information–What
            - button "Letter Writing Fluency" [ref=e261] [cursor=pointer]:
              - generic [ref=e262]: Letter Writing Fluency
            - button "Letter-Pattern Matching" [disabled] [ref=e265] [cursor=pointer]:
              - generic [ref=e266]: Letter-Pattern Matching
            - button "Letter-Word Identification" [disabled] [ref=e269] [cursor=pointer]:
              - generic [ref=e270]: Letter-Word Identification
            - button "Magnitude Comparison" [ref=e273] [cursor=pointer]:
              - generic [ref=e274]: Magnitude Comparison
            - button "Math Facts Fluency" [disabled] [ref=e277] [cursor=pointer]:
              - generic [ref=e278]: Math Facts Fluency
            - button "Math Problem Identification" [disabled] [ref=e281] [cursor=pointer]:
              - generic [ref=e282]: Math Problem Identification
            - button "Matrices" [disabled] [ref=e285] [cursor=pointer]:
              - generic [ref=e286]: Matrices
            - button "Memory for Words" [disabled] [ref=e289] [cursor=pointer]:
              - generic [ref=e290]: Memory for Words
            - button "Nonsense Word Repetition" [disabled] [ref=e293] [cursor=pointer]:
              - generic [ref=e294]: Nonsense Word Repetition
            - button "Number Sense" [ref=e297] [cursor=pointer]:
              - generic [ref=e298]: Number Sense
            - button "Number Series" [disabled] [ref=e301] [cursor=pointer]:
              - generic [ref=e302]: Number Series
            - button "Number-Pattern Matching" [disabled] [ref=e305] [cursor=pointer]:
              - generic [ref=e306]: Number-Pattern Matching
            - button "Numbers Reversed" [disabled] [ref=e309] [cursor=pointer]:
              - generic [ref=e310]: Numbers Reversed
            - button "Oral Comprehension" [disabled] [ref=e313] [cursor=pointer]:
              - generic [ref=e314]: Oral Comprehension
            - button "Oral Language Samples" [disabled] [ref=e317] [cursor=pointer]:
              - generic [ref=e318]: Oral Language Samples
            - button "Oral Reading" [disabled] [ref=e321] [cursor=pointer]:
              - generic [ref=e322]: Oral Reading
            - button "Oral Vocabulary–Synonyms" [disabled] [ref=e325] [cursor=pointer]:
              - generic [ref=e326]: Oral Vocabulary–Synonyms
            - button "Oral Vocabulary–Antonyms" [disabled] [ref=e329] [cursor=pointer]:
              - generic [ref=e330]: Oral Vocabulary–Antonyms
            - button "Paragraph Reading Comprehension" [disabled] [ref=e333] [cursor=pointer]:
              - generic [ref=e334]: Paragraph Reading Comprehension
            - button "Passage Comprehension" [disabled] [ref=e337] [cursor=pointer]:
              - generic [ref=e338]: Passage Comprehension
            - button "Phonemic Word Retrieval" [disabled] [ref=e341] [cursor=pointer]:
              - generic [ref=e342]: Phonemic Word Retrieval
            - button "Picture Vocabulary" [disabled] [ref=e345] [cursor=pointer]:
              - generic [ref=e346]: Picture Vocabulary
            - button "Rapid Letter Naming" [disabled] [ref=e349] [cursor=pointer]:
              - generic [ref=e350]: Rapid Letter Naming
            - button "Rapid Number Naming" [ref=e353] [cursor=pointer]:
              - generic [ref=e354]: Rapid Number Naming
            - button "Rapid Phoneme Naming" [disabled] [ref=e357] [cursor=pointer]:
              - generic [ref=e358]: Rapid Phoneme Naming
            - button "Rapid Picture Naming" [disabled] [ref=e361] [cursor=pointer]:
              - generic [ref=e362]: Rapid Picture Naming
            - button "Rapid Quantity Naming" [ref=e365] [cursor=pointer]:
              - generic [ref=e366]: Rapid Quantity Naming
            - button "Reading Recall" [ref=e369] [cursor=pointer]:
              - generic [ref=e370]: Reading Recall
            - button "Segmentation" [disabled] [ref=e373] [cursor=pointer]:
              - generic [ref=e374]: Segmentation
            - button "Semantic Word Retrieval" [disabled] [ref=e377] [cursor=pointer]:
              - generic [ref=e378]: Semantic Word Retrieval
            - button "Sentence Reading Fluency" [disabled] [ref=e381] [cursor=pointer]:
              - generic [ref=e382]: Sentence Reading Fluency
            - button "Sentence Repetition" [disabled] [ref=e385] [cursor=pointer]:
              - generic [ref=e386]: Sentence Repetition
            - button "Sentence Writing Accuracy" [disabled] [ref=e389] [cursor=pointer]:
              - generic [ref=e390]: Sentence Writing Accuracy
            - button "Sentence Writing Fluency" [disabled] [ref=e393] [cursor=pointer]:
              - generic [ref=e394]: Sentence Writing Fluency
            - button "Sound Blending" [disabled] [ref=e397] [cursor=pointer]:
              - generic [ref=e398]: Sound Blending
            - button "Sound Deletion" [disabled] [ref=e401] [cursor=pointer]:
              - generic [ref=e402]: Sound Deletion
            - button "Sound Reversal" [disabled] [ref=e405] [cursor=pointer]:
              - generic [ref=e406]: Sound Reversal
            - button "Sound Substitution" [disabled] [ref=e409] [cursor=pointer]:
              - generic [ref=e410]: Sound Substitution
            - button "Spatial Relations" [disabled] [ref=e413] [cursor=pointer]:
              - generic [ref=e414]: Spatial Relations
            - button "Spelling" [disabled] [ref=e417] [cursor=pointer]:
              - generic [ref=e418]: Spelling
            - button "Spelling of Sounds" [disabled] [ref=e421] [cursor=pointer]:
              - generic [ref=e422]: Spelling of Sounds
            - button "Story Comprehension" [disabled] [ref=e425] [cursor=pointer]:
              - generic [ref=e426]: Story Comprehension
            - button "Story Recall" [disabled] [ref=e429] [cursor=pointer]:
              - generic [ref=e430]: Story Recall
            - button "Symbol Inhibition" [ref=e433] [cursor=pointer]:
              - generic [ref=e434]: Symbol Inhibition
            - button "Understanding Directions" [ref=e437] [cursor=pointer]:
              - generic [ref=e438]: Understanding Directions
            - button "Verbal Analogies" [disabled] [ref=e441] [cursor=pointer]:
              - generic [ref=e442]: Verbal Analogies
            - button "Verbal Attention" [disabled] [ref=e445] [cursor=pointer]:
              - generic [ref=e446]: Verbal Attention
            - button "Visual Working Memory" [ref=e449] [cursor=pointer]:
              - generic [ref=e450]: Visual Working Memory
            - button "Visual-Auditory Learning" [ref=e453] [cursor=pointer]:
              - generic [ref=e454]: Visual-Auditory Learning
            - button "Word Attack" [disabled] [ref=e457] [cursor=pointer]:
              - generic [ref=e458]: Word Attack
            - button "Word Reading Fluency" [disabled] [ref=e461] [cursor=pointer]:
              - generic [ref=e462]: Word Reading Fluency
            - button "Written Language Samples" [disabled] [ref=e465] [cursor=pointer]:
              - generic [ref=e466]: Written Language Samples
    - generic [ref=e468]:
      - button "Cancel" [ref=e469] [cursor=pointer]
      - generic [ref=e470]:
        - text: (0 Tests Selected)
        - button "Add Tests" [disabled] [ref=e471]
```

# Test source

```ts
  1429 |   async verifyMyTestAssignmentsIsVisible() {
  1430 |     await this.waitForLoadingSpinnerToDisappear();
  1431 |     await this.waitForMyTestAssignmentsToBeVisible();
  1432 |   }
  1433 | 
  1434 |   async clickOnDashboardTab() {
  1435 |     await this.dashboardTab.click();
  1436 |     await this.page.waitForLoadState("domcontentloaded");
  1437 |     await this.waitForLoadingSpinnerToDisappear();
  1438 |     await this.page.waitForTimeout(5000);
  1439 |   }
  1440 | 
  1441 |   async verifyNewlyAddedTestAssignmentIsDisplayedAtTheTopOfTheTable(
  1442 |     fetchedExamineeDetails: Map<string, FetchedExamineeDetails>,
  1443 |     examineeCount: number,
  1444 |   ) {
  1445 |     const requiredExaminee = fetchedExamineeDetails.get(
  1446 |       "examinee" + examineeCount,
  1447 |     );
  1448 |     await this.clickOnDashboardTab();
  1449 | 
  1450 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  1451 | 
  1452 |     expect
  1453 |       .soft(
  1454 |         firstRowDetails.examinee,
  1455 |         "Examinee last name and first name not matching",
  1456 |       )
  1457 |       .toEqual(requiredExaminee.examineelastNameAndFirstName);
  1458 | 
  1459 |     expect
  1460 |       .soft(firstRowDetails.testSet, "Test set not matching")
  1461 |       .toContain(requiredExaminee.testSet);
  1462 | 
  1463 |     // expect
  1464 |     //   .soft(firstRowDetails.daysLeftEdit, "Date created not matching")
  1465 |     //   .toEqual((await this.utils.getTheDOBYearsBack(0)).toString());
  1466 | 
  1467 |         expect
  1468 |       .soft(firstRowDetails.daysLeftEdit, "Date created not matching")
  1469 |       .toEqual("—");
  1470 | 
  1471 |     expect
  1472 |       .soft(firstRowDetails.status, "Status not matching")
  1473 |       .toContain("Not Started");
  1474 |   }
  1475 | 
  1476 |   async verifyTheTableIsOrderedByTheMostlyRecentlyInteractedTestAssignmentAtTheTop() {
  1477 |     await this.waitForLoadingSpinnerToDisappear();
  1478 |     const examineeList =
  1479 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1480 | 
  1481 |     const requiredExaminee = await this.utils.randomNumberGenerateBetween(0, 3);
  1482 |     RawValueLogger.log("Required Examinee", examineeList[requiredExaminee]);
  1483 |     await this.addNewTestToTestsetFromDashboard(requiredExaminee);
  1484 | 
  1485 |     const examineeList2 =
  1486 |       await this.getAllExamineeDetailsFromMyTestAssignments();
  1487 | 
  1488 |     expect
  1489 |       .soft(
  1490 |         examineeList2[0],
  1491 |         "Examinee details not matching after adding new test",
  1492 |       )
  1493 |       .toEqual(examineeList[requiredExaminee]);
  1494 |   }
  1495 | 
  1496 |   async verifyTestSetNameIsUpdated(){
  1497 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  1498 |     expect
  1499 |       .soft(firstRowDetails.testSet, "Test set dosent contain +1 more")
  1500 |       .toContain("+1 more");
  1501 | 
  1502 |   }
  1503 | 
  1504 |   async getAllExamineeDetailsFromMyTestAssignments(): Promise<string[]> {
  1505 |     await this.page.waitForLoadState("domcontentloaded");
  1506 |     await this.waitForLoadingSpinnerToDisappear();
  1507 |     await this.page.waitForTimeout(5000);
  1508 |     const examineeList = await this.page
  1509 |       .locator(
  1510 |         "div[class*='TestAssignmentModule'] tbody > tr td:nth-child(1) button span",
  1511 |       )
  1512 |       .allTextContents();
  1513 | 
  1514 |     RawValueLogger.log("Examinee list", examineeList);
  1515 | 
  1516 |     return examineeList;
  1517 |   }
  1518 | 
  1519 |   async addNewTestToTestsetFromDashboard(index: number) {
  1520 |     await this.myTestAssignmentsRow
  1521 |       .nth(index)
  1522 |       .locator("button[aria-label='Add Tests']")
  1523 |       .click();
  1524 |     await this.page
  1525 |       .locator("div[id='AddTestToAssignmentModal']")
  1526 |       .waitFor({ state: "visible", timeout: 30000 });
  1527 |     await this.getCheckboxLocator('enabled')
  1528 |       .first()
> 1529 |       .click();
       |        ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  1530 |     await this.addTestsButton.click();
  1531 |     try {
  1532 |       const responsePromise = this.page.waitForResponse(
  1533 |         (response) =>
  1534 |           response.url().includes(`/WJ5Grpc.TestBlock/GetAssignments`) &&
  1535 |           response.status() === 200,
  1536 |         { timeout: 1 * 60 * 1000 },
  1537 |       );
  1538 |       const response = await responsePromise;
  1539 |       await response.finished();
  1540 |     } catch (error) {
  1541 |       console.log(`Dashbard Page: The apis response issue ${error}`);
  1542 |     }
  1543 |     await this.page.waitForTimeout(2000);
  1544 |   }
  1545 | 
  1546 |   async verifyAllTheColumnsAreVisible(columnHeaders: string[]) {
  1547 |     const actualTexts = await this.page
  1548 |       .locator("div[class*='TestAssignmentModule'] thead th")
  1549 |       .allTextContents();
  1550 | 
  1551 |     RawValueLogger.log("Computed Value", actualTexts);
  1552 | 
  1553 |     // Verify each column header starts with the expected text (ignoring tooltip content)
  1554 |     expect.soft(actualTexts.length).toBe(columnHeaders.length);
  1555 | 
  1556 |     for (let i = 0; i < columnHeaders.length; i++) {
  1557 |       expect.soft(actualTexts[i], `Column ${i} header mismatch`).toContain(columnHeaders[i]);
  1558 |     }
  1559 |   }
  1560 | 
  1561 |   async closeTestAssignmentPopUp() {
  1562 |     await this.closeButton.waitFor({ state: "visible" });
  1563 |     await this.closeButton.click();
  1564 |   }
  1565 | 
  1566 |   async clickOnClosedTableViewButton() {
  1567 |     await this.closedTableViewButton.first().click();
  1568 |     await this.page.waitForLoadState("domcontentloaded");
  1569 |     await this.waitForLoadingSpinnerToDisappear();
  1570 |   }
  1571 | 
  1572 |   async clearSearchResults() {
  1573 |     await this.searchTestAssignmentsInput.clear();
  1574 |     await this.page.waitForLoadState("domcontentloaded");
  1575 |   }
  1576 | 
  1577 |   async clickOnActiveTableViewButton() {
  1578 |     await this.activeTableViewButton.click();
  1579 |     await this.page.waitForLoadState("domcontentloaded");
  1580 |     await this.waitForLoadingSpinnerToDisappear();
  1581 |     await this.page.waitForTimeout(2000);
  1582 |   }
  1583 | 
  1584 |   async verifyVisibleStatusesInTable(expectedStatuses: string[]) {
  1585 |     // 1. Get all elements
  1586 |     const statusElements = this.getTestAssignmentTableStatusColumn();
  1587 | 
  1588 |     // 2. Extract their data-status attribute values
  1589 |     const actualStatuses = await statusElements.evaluateAll((elements) =>
  1590 |       elements.map((el) => el.getAttribute("data-status"))
  1591 |     );
  1592 | 
  1593 |     RawValueLogger.log("Actual Statuses:", actualStatuses);
  1594 |     RawValueLogger.log("Expected Allowed Statuses:", expectedStatuses);
  1595 | 
  1596 |     // 3. Validate each actual status
  1597 |     for (const status of actualStatuses) {
  1598 |       expect.soft(
  1599 |         expectedStatuses.includes(status || ""),
  1600 |         `Unexpected status '${status}'. Expected one of: ${expectedStatuses.join(", ")}`
  1601 |       ).toBeTruthy();
  1602 |     }
  1603 | 
  1604 |     RawValueLogger.log("All visible statuses are within the expected list.");
  1605 |   }
  1606 | 
  1607 |   async verifyDaysleftToEditIsGraterThan(daysLeft: string) {
  1608 |     const daysLeftElement = this.getTestAssignmentTableColumn(3);
  1609 |     const actualDaysLeftText = await daysLeftElement.textContent();
  1610 |     RawValueLogger.log("Actual Days Left Text", actualDaysLeftText);
  1611 |     RawValueLogger.log("Expected Days Left", daysLeft);
  1612 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain("days");
  1613 | 
  1614 |     const actualDaysLeftNumber = parseInt(actualDaysLeftText?.match(/\d+/)?.[0] || "0", 10);
  1615 |     const expectedDaysLeftNumber = parseInt(daysLeft, 10);
  1616 |     RawValueLogger.log("Actual Days Left (number)", actualDaysLeftNumber);
  1617 |     RawValueLogger.log("Expected Days Left (number)", expectedDaysLeftNumber);
  1618 |     expect.soft(actualDaysLeftNumber, "Actual days left should be greater than expected").toBeGreaterThan(expectedDaysLeftNumber);
  1619 |   }
  1620 | 
  1621 |   async verifyDaysleftToEditIsEqualTo(daysLeft: string) {
  1622 |     const daysLeftElement = this.getTestAssignmentTableColumn(3);
  1623 |     const actualDaysLeftText = await daysLeftElement.first().textContent();
  1624 |     RawValueLogger.log("Actual Days Left Text", actualDaysLeftText);
  1625 |     RawValueLogger.log("Expected Days Left", daysLeft);
  1626 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain("days");
  1627 |     expect.soft(actualDaysLeftText, "Days left text should contain 'days'").toContain(daysLeft);
  1628 |   }
  1629 | 
```