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
                  - text: N77594A98909, Tyra
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
                      - generic [ref=e68]: N77594A98909, Tyra
                  - cell [ref=e69]:
                    - generic [ref=e70]:
                      - button [ref=e71]:
                        - generic [ref=e72]: Form A (+1 more)
                      - button [ref=e73]
                  - cell [ref=e74]:
                    - button [ref=e75]: 88 days
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
  - region "Chat Widget" [ref=e141]:
    - iframe [ref=e142]:
      - button "Open live chat" [ref=f3e5]:
        - img [ref=f3e8]
        - img [ref=f3e15]
    - generic "Drag" [ref=e143]:
      - img [ref=e144]
  - dialog "Add Test To Assignment" [active] [ref=e147]:
    - generic [ref=e148]: Add Supplemental Tests
    - generic [ref=e149]:
      - generic [ref=e150]:
        - heading "Form A (+1 more)" [level=2] [ref=e151]
        - generic [ref=e152]:
          - img [ref=e153]
          - text: "Time Estimate:"
          - generic [ref=e160]: 4 hr 19 min
        - generic [ref=e161]: Analysis-Synthesis
        - generic [ref=e162]: Applied Problems
        - generic [ref=e163]: Block Rotation
        - generic [ref=e164]: Letter-Pattern Matching
        - generic [ref=e165]: Calculation
        - generic [ref=e166]: Letter-Word Identification
        - generic [ref=e167]: Math Facts Fluency
        - generic [ref=e168]: Math Problem Identification
        - generic [ref=e169]: Matrices
        - generic [ref=e170]: Number-Pattern Matching
        - generic [ref=e171]: Numbers Reversed
        - generic [ref=e172]: Oral Comprehension
        - generic [ref=e173]: Oral Language Samples
        - generic [ref=e174]: Oral Vocabulary–Synonyms
        - generic [ref=e175]: Oral Vocabulary–Antonyms
        - generic [ref=e176]: Paragraph Reading Comprehension
        - generic [ref=e177]: Passage Comprehension
        - generic [ref=e178]: Phonemic Word Retrieval
        - generic [ref=e179]: Picture Vocabulary
        - generic [ref=e180]: Semantic Word Retrieval
        - generic [ref=e181]: Sentence Reading Fluency
        - generic [ref=e182]: Sentence Writing Accuracy
        - generic [ref=e183]: Sentence Writing Fluency
        - generic [ref=e184]: Spatial Relations
        - generic [ref=e185]: Spelling
        - generic [ref=e186]: Story Comprehension
        - generic [ref=e187]: Story Recall
        - generic [ref=e188]: Verbal Analogies
        - generic [ref=e189]: Verbal Attention
        - generic [ref=e190]: Word Attack
        - generic [ref=e191]: Written Language Samples
        - generic [ref=e192]: Word Reading Fluency
        - generic [ref=e193]: Academic Vocabulary
        - generic [ref=e194]: General Information–Where
        - generic [ref=e195]: General Information–What
        - generic [ref=e196]: Number Series
        - generic [ref=e197]: Memory for Words
        - generic [ref=e198]: Nonsense Word Repetition
        - generic [ref=e199]: Oral Reading
        - generic [ref=e200]: Rapid Letter Naming
        - generic [ref=e201]: Rapid Phoneme Naming
        - generic [ref=e202]: Rapid Picture Naming
        - generic [ref=e203]: Segmentation
        - generic [ref=e204]: Sentence Repetition
        - generic [ref=e205]: Sound Blending
        - generic [ref=e206]: Sound Deletion
        - generic [ref=e207]: Sound Reversal
        - generic [ref=e208]: Sound Substitution
        - generic [ref=e209]: Spelling of Sounds
        - generic [ref=e210]: Academic Facts
      - generic [ref=e211]:
        - navigation [ref=e212]:
          - tablist [ref=e213]:
            - tab "All Tests" [selected] [ref=e214] [cursor=pointer]
            - tab "Clusters" [ref=e215] [cursor=pointer]
        - generic [ref=e217]:
          - generic [ref=e218]: All Tests
          - generic [ref=e219]:
            - generic [ref=e220]: Search tests
            - generic [ref=e221]:
              - textbox "Search tests" [ref=e222]
              - button "Search tests" [ref=e223] [cursor=pointer]
          - generic [ref=e224]:
            - button "Academic Facts" [disabled] [ref=e226] [cursor=pointer]:
              - generic [ref=e227]: Academic Facts
            - button "Academic Vocabulary" [disabled] [ref=e230] [cursor=pointer]:
              - generic [ref=e231]: Academic Vocabulary
            - button "Analysis-Synthesis" [disabled] [ref=e234] [cursor=pointer]:
              - generic [ref=e235]: Analysis-Synthesis
            - button "Animal-Number Sequencing" [ref=e238] [cursor=pointer]:
              - generic [ref=e239]: Animal-Number Sequencing
            - button "Applied Problems" [disabled] [ref=e242] [cursor=pointer]:
              - generic [ref=e243]: Applied Problems
            - button "Block Rotation" [disabled] [ref=e246] [cursor=pointer]:
              - generic [ref=e247]: Block Rotation
            - button "Calculation" [disabled] [ref=e250] [cursor=pointer]:
              - generic [ref=e251]: Calculation
            - button "Concept Formation" [ref=e254] [cursor=pointer]:
              - generic [ref=e255]: Concept Formation
            - button "General Information–Where" [disabled] [ref=e258] [cursor=pointer]:
              - generic [ref=e259]: General Information–Where
            - button "General Information–What" [disabled] [ref=e262] [cursor=pointer]:
              - generic [ref=e263]: General Information–What
            - button "Letter Writing Fluency" [ref=e266] [cursor=pointer]:
              - generic [ref=e267]: Letter Writing Fluency
            - button "Letter-Pattern Matching" [disabled] [ref=e270] [cursor=pointer]:
              - generic [ref=e271]: Letter-Pattern Matching
            - button "Letter-Word Identification" [disabled] [ref=e274] [cursor=pointer]:
              - generic [ref=e275]: Letter-Word Identification
            - button "Magnitude Comparison" [ref=e278] [cursor=pointer]:
              - generic [ref=e279]: Magnitude Comparison
            - button "Math Facts Fluency" [disabled] [ref=e282] [cursor=pointer]:
              - generic [ref=e283]: Math Facts Fluency
            - button "Math Problem Identification" [disabled] [ref=e286] [cursor=pointer]:
              - generic [ref=e287]: Math Problem Identification
            - button "Matrices" [disabled] [ref=e290] [cursor=pointer]:
              - generic [ref=e291]: Matrices
            - button "Memory for Words" [disabled] [ref=e294] [cursor=pointer]:
              - generic [ref=e295]: Memory for Words
            - button "Nonsense Word Repetition" [disabled] [ref=e298] [cursor=pointer]:
              - generic [ref=e299]: Nonsense Word Repetition
            - button "Number Sense" [ref=e302] [cursor=pointer]:
              - generic [ref=e303]: Number Sense
            - button "Number Series" [disabled] [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: Number Series
            - button "Number-Pattern Matching" [disabled] [ref=e310] [cursor=pointer]:
              - generic [ref=e311]: Number-Pattern Matching
            - button "Numbers Reversed" [disabled] [ref=e314] [cursor=pointer]:
              - generic [ref=e315]: Numbers Reversed
            - button "Oral Comprehension" [disabled] [ref=e318] [cursor=pointer]:
              - generic [ref=e319]: Oral Comprehension
            - button "Oral Language Samples" [disabled] [ref=e322] [cursor=pointer]:
              - generic [ref=e323]: Oral Language Samples
            - button "Oral Reading" [disabled] [ref=e326] [cursor=pointer]:
              - generic [ref=e327]: Oral Reading
            - button "Oral Vocabulary–Synonyms" [disabled] [ref=e330] [cursor=pointer]:
              - generic [ref=e331]: Oral Vocabulary–Synonyms
            - button "Oral Vocabulary–Antonyms" [disabled] [ref=e334] [cursor=pointer]:
              - generic [ref=e335]: Oral Vocabulary–Antonyms
            - button "Paragraph Reading Comprehension" [disabled] [ref=e338] [cursor=pointer]:
              - generic [ref=e339]: Paragraph Reading Comprehension
            - button "Passage Comprehension" [disabled] [ref=e342] [cursor=pointer]:
              - generic [ref=e343]: Passage Comprehension
            - button "Phonemic Word Retrieval" [disabled] [ref=e346] [cursor=pointer]:
              - generic [ref=e347]: Phonemic Word Retrieval
            - button "Picture Vocabulary" [disabled] [ref=e350] [cursor=pointer]:
              - generic [ref=e351]: Picture Vocabulary
            - button "Rapid Letter Naming" [disabled] [ref=e354] [cursor=pointer]:
              - generic [ref=e355]: Rapid Letter Naming
            - button "Rapid Number Naming" [ref=e358] [cursor=pointer]:
              - generic [ref=e359]: Rapid Number Naming
            - button "Rapid Phoneme Naming" [disabled] [ref=e362] [cursor=pointer]:
              - generic [ref=e363]: Rapid Phoneme Naming
            - button "Rapid Picture Naming" [disabled] [ref=e366] [cursor=pointer]:
              - generic [ref=e367]: Rapid Picture Naming
            - button "Rapid Quantity Naming" [ref=e370] [cursor=pointer]:
              - generic [ref=e371]: Rapid Quantity Naming
            - button "Reading Recall" [ref=e374] [cursor=pointer]:
              - generic [ref=e375]: Reading Recall
            - button "Segmentation" [disabled] [ref=e378] [cursor=pointer]:
              - generic [ref=e379]: Segmentation
            - button "Semantic Word Retrieval" [disabled] [ref=e382] [cursor=pointer]:
              - generic [ref=e383]: Semantic Word Retrieval
            - button "Sentence Reading Fluency" [disabled] [ref=e386] [cursor=pointer]:
              - generic [ref=e387]: Sentence Reading Fluency
            - button "Sentence Repetition" [disabled] [ref=e390] [cursor=pointer]:
              - generic [ref=e391]: Sentence Repetition
            - button "Sentence Writing Accuracy" [disabled] [ref=e394] [cursor=pointer]:
              - generic [ref=e395]: Sentence Writing Accuracy
            - button "Sentence Writing Fluency" [disabled] [ref=e398] [cursor=pointer]:
              - generic [ref=e399]: Sentence Writing Fluency
            - button "Sound Blending" [disabled] [ref=e402] [cursor=pointer]:
              - generic [ref=e403]: Sound Blending
            - button "Sound Deletion" [disabled] [ref=e406] [cursor=pointer]:
              - generic [ref=e407]: Sound Deletion
            - button "Sound Reversal" [disabled] [ref=e410] [cursor=pointer]:
              - generic [ref=e411]: Sound Reversal
            - button "Sound Substitution" [disabled] [ref=e414] [cursor=pointer]:
              - generic [ref=e415]: Sound Substitution
            - button "Spatial Relations" [disabled] [ref=e418] [cursor=pointer]:
              - generic [ref=e419]: Spatial Relations
            - button "Spelling" [disabled] [ref=e422] [cursor=pointer]:
              - generic [ref=e423]: Spelling
            - button "Spelling of Sounds" [disabled] [ref=e426] [cursor=pointer]:
              - generic [ref=e427]: Spelling of Sounds
            - button "Story Comprehension" [disabled] [ref=e430] [cursor=pointer]:
              - generic [ref=e431]: Story Comprehension
            - button "Story Recall" [disabled] [ref=e434] [cursor=pointer]:
              - generic [ref=e435]: Story Recall
            - button "Symbol Inhibition" [ref=e438] [cursor=pointer]:
              - generic [ref=e439]: Symbol Inhibition
            - button "Understanding Directions" [ref=e442] [cursor=pointer]:
              - generic [ref=e443]: Understanding Directions
            - button "Verbal Analogies" [disabled] [ref=e446] [cursor=pointer]:
              - generic [ref=e447]: Verbal Analogies
            - button "Verbal Attention" [disabled] [ref=e450] [cursor=pointer]:
              - generic [ref=e451]: Verbal Attention
            - button "Visual Working Memory" [ref=e454] [cursor=pointer]:
              - generic [ref=e455]: Visual Working Memory
            - button "Visual-Auditory Learning" [ref=e458] [cursor=pointer]:
              - generic [ref=e459]: Visual-Auditory Learning
            - button "Word Attack" [disabled] [ref=e462] [cursor=pointer]:
              - generic [ref=e463]: Word Attack
            - button "Word Reading Fluency" [disabled] [ref=e466] [cursor=pointer]:
              - generic [ref=e467]: Word Reading Fluency
            - button "Written Language Samples" [disabled] [ref=e470] [cursor=pointer]:
              - generic [ref=e471]: Written Language Samples
    - generic [ref=e473]:
      - button "Cancel" [ref=e474] [cursor=pointer]
      - generic [ref=e475]:
        - text: (0 Tests Selected)
        - button "Add Tests" [disabled] [ref=e476]
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