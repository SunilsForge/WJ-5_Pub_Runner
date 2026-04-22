# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/chatBotTest.spec.ts >> Validate Chat Bot functionality when logged in as AH user and at login page
- Location: src/tests/functional/chatBotTest.spec.ts:6:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Close live chat' }) resolved to 2 elements:
    1) <button shape="default" aria-label="Close live chat" data-test-id="header-close-button" class="VizExIconButton__AbstractVizExIconButton-gJITTG lcPsFh WidgetHeader__CloseButton-MxVIp ePYUhm m-left-2">…</button> aka locator('[data-test-id="header-close-button"]')
    2) <button aria-haspopup="dialog" aria-label="Close live chat" class="IconLauncher__BaseLauncher-fiVgfM IconLauncher__ShapedLauncher-gZzRBO hhQPTH reagan--widget-loaded">…</button> aka locator('[data-test-id="icon-launcher"]').getByRole('button', { name: 'Close live chat' })

Call log:
  - waiting for locator('[data-test-id="chat-widget-iframe"]').contentFrame().getByRole('button', { name: 'Close live chat' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - main "Clinical Login" [ref=e4]:
      - generic [ref=e5]:
        - img "Riverside Insights Logo" [ref=e6]
        - heading "Riverside Updates" [level=1] [ref=e7]
      - generic [ref=e8]:
        - img "Riverside Score Logo" [ref=e9]
        - form "Sign in details" [ref=e10]:
          - generic [ref=e11]:
            - text: USERNAME
            - textbox "USERNAME" [ref=e13]:
              - /placeholder: Username
            - generic [ref=e15]:
              - text: PASSWORD
              - textbox "PASSWORD" [ref=e17]:
                - /placeholder: Password
            - button "Sign In" [ref=e18] [cursor=pointer]
            - generic [ref=e19]:
              - button "Remember Me" [ref=e20] [cursor=pointer]:
                - generic [ref=e21]: Remember Me
              - link "Forgot my password" [ref=e24] [cursor=pointer]:
                - /url: /forgot
          - generic [ref=e25]:
            - heading "Are you looking to purchase our products?" [level=4] [ref=e26]
            - link "Click Here!" [ref=e27] [cursor=pointer]:
              - /url: https://riversideinsights.com/explore
      - generic [ref=e28]:
        - generic [ref=e29]:
          - text: For help accessing Riverside Score™, see the
          - link "online help" [ref=e30] [cursor=pointer]:
            - /url: https://onlinehelp.riversideinsights.com/Help/Riverside_Score/index.htm#t=Overview.htm
          - text: for signing in.
        - link "Check Platform Status" [ref=e32] [cursor=pointer]:
          - /url: https://riversideinsights.com/platform-status
    - contentinfo [ref=e33]:
      - generic [ref=e34]: Footer region,
      - link "w w w dot riverside insights dot com" [ref=e35] [cursor=pointer]:
        - /url: https://www.riversideinsights.com/
        - img "Riverside Insights Website" [ref=e36]
      - generic [ref=e37]:
        - link "Riverside Insights Facebook" [ref=e38] [cursor=pointer]:
          - /url: https://www.facebook.com/RiversideInsights/
          - img "Riverside Insights Facebook" [ref=e39]
        - link "Riverside Insights Twitter" [ref=e40] [cursor=pointer]:
          - /url: https://twitter.com/1BillionLives
          - img "Riverside Insights Twitter" [ref=e41]
        - link "Riverside Insights LinkedIn" [ref=e42] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/riverside-insights/
          - img "Riverside Insights LinkedIn" [ref=e43]
        - link "Riverside Insights Instagram" [ref=e44] [cursor=pointer]:
          - /url: https://www.instagram.com/riversideinsightsassessments/
          - img "Riverside Insights Instagram" [ref=e45]
      - generic [ref=e46]:
        - img "WJ IV Mobile Data Solution" [ref=e47]
        - button "Download Woodcock Johnson 4 Mobile App from Google Play" [ref=e48] [cursor=pointer]
        - button "Download Woodcock Johnson 4 Mobile App from App Store" [ref=e49] [cursor=pointer]
      - generic [ref=e50]:
        - img "Bdi 3 Mobile Data Solution" [ref=e51]
        - generic [ref=e52]:
          - button "Download BDI-3 Mobile App from Microsoft Store" [ref=e53] [cursor=pointer]
          - button "Download BDI-3 Mobile App from Google Play" [ref=e54] [cursor=pointer]
          - button "Download BDI-3 Mobile App from App Store" [ref=e55] [cursor=pointer]
      - generic [ref=e56]:
        - button "Leave Feedback" [ref=e57] [cursor=pointer]
        - generic [ref=e58]: "|"
        - link "Terms of Use" [ref=e59] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/terms-of-use
        - generic [ref=e60]: "|"
        - link "Privacy Policy" [ref=e61] [cursor=pointer]:
          - /url: https://info.riversideinsights.com/privacy-assessment_policy
      - generic [ref=e62]: Footer region end
  - region "Chat Widget" [ref=e63]:
    - iframe [active] [ref=e65]:
      - generic [ref=f9e1]:
        - dialog "Riverside Score" [ref=f9e2]:
          - generic [ref=f9e5]:
            - banner "Riverside Score" [ref=f9e6]:
              - navigation [ref=f9e7]:
                - generic [ref=f9e8]:
                  - button "View thread list, 0 unread threads" [ref=f9e10]:
                    - img [ref=f9e12]
                  - generic [ref=f9e14]:
                    - img "Avatar of Riverside Score; agent is available for chat" [ref=f9e21]
                    - heading "Riverside Score" [level=5] [ref=f9e23]:
                      - generic [ref=f9e24]: Riverside Score
                  - button "Close live chat" [ref=f9e26]:
                    - img [ref=f9e28]
            - generic [ref=f9e35]:
              - region "Message History" [ref=f9e40]:
                - generic [ref=f9e41]:
                  - generic [ref=f9e44]:
                    - img "Avatar of Riverside Score" [ref=f9e49]
                    - 'generic "Agent says: Thanks for chatting with us. Our live support hours are : Monday–Friday, 8:00 AM–4:00 PM CT" [ref=f9e55]': "Thanks for chatting with us. Our live support hours are : Monday–Friday, 8:00 AM–4:00 PM CT"
                  - generic [ref=f9e58]:
                    - generic [ref=f9e62]:
                      - 'generic "Agent says: Which assessment can we help with today?" [ref=f9e64]':
                        - paragraph [ref=f9e66]: Which assessment can we help with today?
                      - combobox [disabled] [ref=f9e69] [cursor=pointer]:
                        - option "Select one" [disabled] [selected]
                        - option "Woodcock-Johnson V (WJ V )"
                        - option "Battelle Developmental Inventory, Third Edition (BDI-3)"
                        - option "Batería IV"
                        - option "WIIIP"
                        - option "Woodcock-Muñoz Language Survey (WMLS III)"
                        - option "Early Cognitive and Academic Development (ECAD)"
                        - option "Woodcock Johnson IV (WJ IV)"
                        - option "Arabiya"
                        - option "Other"
                    - button "Done" [disabled] [ref=f9e71]:
                      - generic [ref=f9e72]: Done
              - generic [ref=f9e73]:
                - paragraph [ref=f9e76]:
                  - text: This chat service uses a cookie to interact with you and maintain your chat history. Our service provider will monitor and record this chat for quality assurance (see their
                  - link "Privacy Policy" [ref=f9e77] [cursor=pointer]:
                    - /url: https://legal.hubspot.com/privacy-policy
                  - text: ).
                - button "I agree" [ref=f9e79] [cursor=pointer]:
                  - generic [ref=f9e80]:
                    - generic [ref=f9e81]: I agree
                    - status
        - button "Close live chat" [ref=f9e87]:
          - img [ref=f9e89]
          - img [ref=f9e97]
    - generic "Drag" [ref=e66]:
      - img [ref=e67]
```

# Test source

```ts
  1945 |       examinee: string | undefined;
  1946 |       testSet: string | undefined;
  1947 |       daysLeftToEdit: string | undefined;
  1948 |       status: string | undefined;
  1949 |     }> = [];
  1950 | 
  1951 |     // Fetch details for the first numberOfRows rows
  1952 |     for (let i = 1; i <= numberOfRows; i++) {
  1953 |       const rowDetails = await this.getTheTestAssignmentsRowDetails(i);
  1954 |       examineeDetailsArray.push({
  1955 |         examinee: rowDetails.examinee,
  1956 |         testSet: rowDetails.testSet,
  1957 |         daysLeftToEdit: rowDetails.daysLeftEdit,
  1958 |         status: rowDetails.status,
  1959 |       });
  1960 |     }
  1961 | 
  1962 |     // Log the results with RawValueLogger for debugging
  1963 |     RawValueLogger.log(
  1964 |       `Fetched details for ${numberOfRows} rows:`,
  1965 |       examineeDetailsArray,
  1966 |     );
  1967 | 
  1968 |     return examineeDetailsArray;
  1969 |   }
  1970 | 
  1971 |   async changeExamineeNameInEditTestAssignmentPopUp(examineeName: string) {
  1972 |     await this.editIcon.nth(0).click();
  1973 |     await this.dropDown.click();
  1974 |     await this.searchExamineeTestSetNameAndEducation.fill(examineeName);
  1975 |     await this.selectResultFromDropDown.click();
  1976 |   }
  1977 | 
  1978 |   async changeTestSetInEditTestAssignmentPopUp(testSetName: string) {
  1979 |     await this.editIcon.nth(1).click();
  1980 |     await this.dropDown.click();
  1981 |     await this.searchExamineeTestSetNameAndEducation.fill(testSetName);
  1982 |     await this.selectResultFromDropDown.first().click();
  1983 |   }
  1984 | 
  1985 |   async clickOnCancelButtonInEditTestAssignmentPopUp() {
  1986 |     await this.cancelButton.click();
  1987 |     await this.areYouSureYesButton.click();    
  1988 |   }
  1989 | 
  1990 |   async verifyEditIconGrayedOutForExamineeName() {
  1991 |     await expect.soft(this.editIcon.nth(0), 'Edit icon for examinee name should be disabled').toBeDisabled();
  1992 |   }
  1993 | 
  1994 |   async verifyEditIconGrayedOutForTestSet() {
  1995 |     await expect.soft(this.editIcon.nth(1), 'Edit icon for test set should be disabled').toBeDisabled();
  1996 |   }
  1997 | 
  1998 |   async verifyEducationAndVoiceCaptureSectionIsEditable() {
  1999 |     await expect.soft(this.editIcon.nth(2), 'Edit icon for education should be enabled').toBeEnabled();
  2000 |   }
  2001 | 
  2002 |   async verifyGenerateReportsIcon() {
  2003 |     return await this.generateReportIcon.isVisible();
  2004 |   }
  2005 | 
  2006 |   async verifyEditTestAssignmentIcon() {
  2007 |     return await this.editTestAssignmentButton.isVisible();
  2008 |   }
  2009 | 
  2010 |   async clickOnGenerateReportIcon() {
  2011 |     await this.generateReportIcon.click();
  2012 |     await this.page.waitForLoadState("domcontentloaded");
  2013 |   }
  2014 | 
  2015 |   async verifyTestAssignmentExpiredPopUp() {
  2016 |     await this.page.waitForLoadState("domcontentloaded");
  2017 |     await expect.soft(this.page.getByRole('heading', { name: 'Test Assignment Expired' }), 'Test Assignment Expired heading should be visible').toBeVisible();
  2018 |     await expect.soft(this.page.locator(`//p[text()='This test assignment has expired as 90 days have passed since the earliest date of testing. No further changes can be made, however, you may still submit for reporting.']`), 'Test Assignment Expired body text should be visible').toBeVisible();
  2019 |     await expect.soft(this.page.locator("//p[text()='Do you want to submit this test assignment for reporting?']"), 'Do you want to submit this test assignment for reporting? body text should be visible').toBeVisible();
  2020 |   }
  2021 | 
  2022 |   async clickNoButtonInExpiredPopUp() {
  2023 |     await this.noButton.click();
  2024 |   }
  2025 | 
  2026 |   async clickYesButtonInPopUp() {
  2027 |     await this.page.waitForTimeout(2000);
  2028 |     await this.yesButton.click();
  2029 |   }
  2030 | 
  2031 |   async verifyCreateReportPopUpIsVisible() {
  2032 |     await this.waitForLoadingInnerToDisappear();
  2033 |     await this.page.waitForLoadState("domcontentloaded");
  2034 |     await expect.soft(this.createReportHeading, 'Create a Report heading should be visible').toBeVisible();
  2035 |   }
  2036 | 
  2037 |   async clickOnSubscriptionDetails() {
  2038 |     await this.subscriptionDetails.click();
  2039 |     await this.page.waitForLoadState("domcontentloaded");
  2040 |   }
  2041 |   async verifyChatBotFunctionality() {
  2042 |     await expect.soft(this.chatBotIcon, 'Chat bot icon should be visible').toBeVisible();
  2043 |     await this.chatBotIcon.click();
  2044 |     await expect.soft(this.chatBotPopup, 'Chat bot popup should be visible').toBeVisible();
> 2045 |     await this.chatBotCloseIcon.click();
       |                                 ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Close live chat' }) resolved to 2 elements:
  2046 |     await expect.soft(this.chatBotIcon, 'Chat bot icon should be visible').toBeVisible();
  2047 |   }
  2048 | 
  2049 |   async clickOnTestSetsTab() {
  2050 |     await this.testSetButton.click();
  2051 |     await this.page.waitForLoadState("domcontentloaded");
  2052 |   }
  2053 | 
  2054 |   async clickOnExamineesTab() {
  2055 |     await this.examinees.click();
  2056 |     await this.page.waitForLoadState("domcontentloaded");
  2057 |     await this.waitForLoadingSpinnerToDisappear();
  2058 |   }
  2059 | 
  2060 |   async searchExaminee(examineeName: string) {
  2061 |     await this.searchExaminees.fill(examineeName);
  2062 |     await this.searchExaminees.press('Enter');
  2063 |     await this.page.waitForLoadState("domcontentloaded");
  2064 |     await this.waitForLoadingSpinnerToDisappear();
  2065 |   }
  2066 | 
  2067 |   async clickOnSearchedExaminee(examineeId: string) {
  2068 |     await this.page.locator(`//button[text()='${examineeId}']`).click();
  2069 |     await this.page.waitForLoadState("domcontentloaded");
  2070 |     await this.waitForLoadingSpinnerToDisappear();
  2071 |   }
  2072 | 
  2073 |   async clickResetButton() {
  2074 |     await this.resetButton.click();
  2075 |     await this.page.waitForLoadState("domcontentloaded");
  2076 |     await this.waitForLoadingSpinnerToDisappear();
  2077 |   }
  2078 | 
  2079 |   async findRowIndexInPopupByStatus(expectedStatus: string): Promise<number> {
  2080 |     await this.page.waitForLoadState("domcontentloaded");
  2081 |     await this.waitForLoadingSpinnerToDisappear();
  2082 |     await this.page.waitForTimeout(1000);
  2083 | 
  2084 |     const rows = this.page.locator("div[class='Grid_mcs_rowButton']");
  2085 |     const rowCount = await rows.count();
  2086 | 
  2087 |     for (let i = 0; i < rowCount; i++) {
  2088 |       const row = rows.nth(i);
  2089 |       const cells = row.locator("button[class*='c3'][class*='cell']>span");
  2090 |       const statusText = await cells.getAttribute('data-status');
  2091 | 
  2092 |       if (statusText?.trim() === expectedStatus) {
  2093 |         return i;
  2094 |       }
  2095 |     }
  2096 | 
  2097 |     throw new Error(`Row with status '${expectedStatus}' not found in Test Assignment History table`);
  2098 |   }
  2099 | 
  2100 |   async clickOnStaffTab() {
  2101 |     await this.staffTab.click();
  2102 |     await this.page.waitForLoadState("domcontentloaded");
  2103 |   }
  2104 | 
  2105 |   async verifyStatusAtExamineeGeneralInfoPopUp(expectedStatus: string) {
  2106 |     const statusText = await this.page.locator("div[class='Grid_mcs_rowButton'] span[class='TestAssignmentModule_mcs_marker']").getAttribute('data-status');
  2107 |     expect.soft(statusText.trim(), 'Examinee status should match').toBe(expectedStatus);
  2108 |   }
  2109 | 
  2110 |   async verifySubtestsSuccessfullyAppliedPopupContent() {
  2111 |     await expect.soft(this.page.locator("//h2[text()='Subtests Successfully Applied!']"), 'Subtests Applied heading should be visible').toBeVisible();
  2112 |     await expect.soft(this.page.locator("//p[text()='Your additional subtest(s) have been successfully added to your assignment. Only ']"), 'Subtests Applied body text A should be visible').toBeVisible();
  2113 |     await expect.soft(this.page.locator("//p[text()=' remain to administer this assignment before the 90 day norming window closes.']"), 'Subtests Applied body text B should be visible').toBeVisible();
  2114 |   }
  2115 | 
  2116 |   async verifyDeleteOptionIsNotVisible() {
  2117 |     await this.clickFollowingRowElipsisButton(0);
  2118 |     await expect.soft(this.deleteButton, 'Delete button should not be visible').toBeHidden();
  2119 |   }
  2120 | 
  2121 |   async verifyHoverTextForDaysLeftToEdit() {
  2122 |     const daysLeftElementHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Days Left to Edit']//div[contains(@class,'tool-tip')]").textContent();
  2123 |     RawValueLogger.log("Days Left to Edit Hover Text", daysLeftElementHoverText);
  2124 |     expect.soft(daysLeftElementHoverText, "Days left hover text should contain 'days'").toEqual("You can edit this assignment for up to 90 days after testing begins.");
  2125 |   }
  2126 | 
  2127 |   async verifyHoverTextForEarliestDateOfTesting() {
  2128 |     const earliestDateOfTestingHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Earliest Date of Testing']//div[contains(@class,'tool-tip')]").textContent();
  2129 |     RawValueLogger.log("Earliest Date of Testing Hover Text", earliestDateOfTestingHoverText);
  2130 |     expect.soft(earliestDateOfTestingHoverText, "Earliest date of testing hover text should contain 'earliest date of testing'").toEqual("First day of testing, marking the beginning of the 90-day window to complete all tests.");
  2131 |   }
  2132 | 
  2133 |   async verifyActiveViewColumnHeaderHoverTexts() {
  2134 |     const examineeHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Examinee']//div[contains(@class,'tool-tip')]").textContent();
  2135 |     RawValueLogger.log("Examinee Column Header Hover Text", examineeHoverText);
  2136 |     expect.soft(examineeHoverText, "Examinee hover text should match expected text").toEqual("This is the student or individual being assessed.");
  2137 | 
  2138 |     const testSetHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Test Set']//div[contains(@class,'tool-tip')]").textContent();
  2139 |     RawValueLogger.log("Test Set Column Header Hover Text", testSetHoverText);
  2140 |     expect.soft(testSetHoverText, "Test Set hover text should match expected text").toEqual("A collection of tests grouped together for assessment.");
  2141 | 
  2142 |     const statusHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Status']//div[contains(@class,'tool-tip')]").textContent();
  2143 |     RawValueLogger.log("Status Column Header Hover Text", statusHoverText);
  2144 |     expect.soft(statusHoverText, "Status hover text should match expected text").toEqual("Status shows where the test is in the process. Statuses include Not Started, In Progress, Complete, Closed, Expired, and Offline.");
  2145 | 
```