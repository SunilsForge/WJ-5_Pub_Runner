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
  1960 |       examinee: string | undefined;
  1961 |       testSet: string | undefined;
  1962 |       daysLeftToEdit: string | undefined;
  1963 |       status: string | undefined;
  1964 |     }> = [];
  1965 | 
  1966 |     // Fetch details for the first numberOfRows rows
  1967 |     for (let i = 1; i <= numberOfRows; i++) {
  1968 |       const rowDetails = await this.getTheTestAssignmentsRowDetails(i);
  1969 |       examineeDetailsArray.push({
  1970 |         examinee: rowDetails.examinee,
  1971 |         testSet: rowDetails.testSet,
  1972 |         daysLeftToEdit: rowDetails.daysLeftEdit,
  1973 |         status: rowDetails.status,
  1974 |       });
  1975 |     }
  1976 | 
  1977 |     // Log the results with RawValueLogger for debugging
  1978 |     RawValueLogger.log(
  1979 |       `Fetched details for ${numberOfRows} rows:`,
  1980 |       examineeDetailsArray,
  1981 |     );
  1982 | 
  1983 |     return examineeDetailsArray;
  1984 |   }
  1985 | 
  1986 |   async changeExamineeNameInEditTestAssignmentPopUp(examineeName: string) {
  1987 |     await this.editIcon.nth(0).click();
  1988 |     await this.dropDown.click();
  1989 |     await this.searchExamineeTestSetNameAndEducation.fill(examineeName);
  1990 |     await this.selectResultFromDropDown.click();
  1991 |   }
  1992 | 
  1993 |   async changeTestSetInEditTestAssignmentPopUp(testSetName: string) {
  1994 |     await this.editIcon.nth(1).click();
  1995 |     await this.dropDown.click();
  1996 |     await this.searchExamineeTestSetNameAndEducation.fill(testSetName);
  1997 |     await this.selectResultFromDropDown.first().click();
  1998 |   }
  1999 | 
  2000 |   async clickOnCancelButtonInEditTestAssignmentPopUp() {
  2001 |     await this.cancelButton.click();
  2002 |     await this.areYouSureYesButton.click();    
  2003 |   }
  2004 | 
  2005 |   async verifyEditIconGrayedOutForExamineeName() {
  2006 |     await expect.soft(this.editIcon.nth(0), 'Edit icon for examinee name should be disabled').toBeDisabled();
  2007 |   }
  2008 | 
  2009 |   async verifyEditIconGrayedOutForTestSet() {
  2010 |     await expect.soft(this.editIcon.nth(1), 'Edit icon for test set should be disabled').toBeDisabled();
  2011 |   }
  2012 | 
  2013 |   async verifyEducationAndVoiceCaptureSectionIsEditable() {
  2014 |     await expect.soft(this.editIcon.nth(2), 'Edit icon for education should be enabled').toBeEnabled();
  2015 |   }
  2016 | 
  2017 |   async verifyGenerateReportsIcon() {
  2018 |     return await this.generateReportIcon.isVisible();
  2019 |   }
  2020 | 
  2021 |   async verifyEditTestAssignmentIcon() {
  2022 |     return await this.editTestAssignmentButton.isVisible();
  2023 |   }
  2024 | 
  2025 |   async clickOnGenerateReportIcon() {
  2026 |     await this.generateReportIcon.click();
  2027 |     await this.page.waitForLoadState("domcontentloaded");
  2028 |   }
  2029 | 
  2030 |   async verifyTestAssignmentExpiredPopUp() {
  2031 |     await this.page.waitForLoadState("domcontentloaded");
  2032 |     await expect.soft(this.page.getByRole('heading', { name: 'Test Assignment Expired' }), 'Test Assignment Expired heading should be visible').toBeVisible();
  2033 |     await expect.soft(this.page.locator(`//p[text()='This test assignment has expired as 90 days have passed since the earliest date of testing. No further changes can be made, however, you may still submit for reporting.']`), 'Test Assignment Expired body text should be visible').toBeVisible();
  2034 |     await expect.soft(this.page.locator("//p[text()='Do you want to submit this test assignment for reporting?']"), 'Do you want to submit this test assignment for reporting? body text should be visible').toBeVisible();
  2035 |   }
  2036 | 
  2037 |   async clickNoButtonInExpiredPopUp() {
  2038 |     await this.noButton.click();
  2039 |   }
  2040 | 
  2041 |   async clickYesButtonInPopUp() {
  2042 |     await this.page.waitForTimeout(2000);
  2043 |     await this.yesButton.click();
  2044 |   }
  2045 | 
  2046 |   async verifyCreateReportPopUpIsVisible() {
  2047 |     await this.waitForLoadingInnerToDisappear();
  2048 |     await this.page.waitForLoadState("domcontentloaded");
  2049 |     await expect.soft(this.createReportHeading, 'Create a Report heading should be visible').toBeVisible();
  2050 |   }
  2051 | 
  2052 |   async clickOnSubscriptionDetails() {
  2053 |     await this.subscriptionDetails.click();
  2054 |     await this.page.waitForLoadState("domcontentloaded");
  2055 |   }
  2056 |   async verifyChatBotFunctionality() {
  2057 |     await expect.soft(this.chatBotIcon, 'Chat bot icon should be visible').toBeVisible();
  2058 |     await this.chatBotIcon.click();
  2059 |     await expect.soft(this.chatBotPopup, 'Chat bot popup should be visible').toBeVisible();
> 2060 |     await this.chatBotCloseIcon.click();
       |                                 ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Close live chat' }) resolved to 2 elements:
  2061 |     await expect.soft(this.chatBotIcon, 'Chat bot icon should be visible').toBeVisible();
  2062 |   }
  2063 | 
  2064 |   async clickOnTestSetsTab() {
  2065 |     await this.testSetButton.click();
  2066 |     await this.page.waitForLoadState("domcontentloaded");
  2067 |   }
  2068 | 
  2069 |   async clickOnExamineesTab() {
  2070 |     await this.examinees.click();
  2071 |     await this.page.waitForLoadState("domcontentloaded");
  2072 |     await this.waitForLoadingSpinnerToDisappear();
  2073 |   }
  2074 | 
  2075 |   async searchExaminee(examineeName: string) {
  2076 |     await this.searchExaminees.fill(examineeName);
  2077 |     await this.searchExaminees.press('Enter');
  2078 |     await this.page.waitForLoadState("domcontentloaded");
  2079 |     await this.waitForLoadingSpinnerToDisappear();
  2080 |   }
  2081 | 
  2082 |   async clickOnSearchedExaminee(examineeId: string) {
  2083 |     await this.page.locator(`//button[text()='${examineeId}']`).click();
  2084 |     await this.page.waitForLoadState("domcontentloaded");
  2085 |     await this.waitForLoadingSpinnerToDisappear();
  2086 |   }
  2087 | 
  2088 |   async clickResetButton() {
  2089 |     await this.resetButton.click();
  2090 |     await this.page.waitForLoadState("domcontentloaded");
  2091 |     await this.waitForLoadingSpinnerToDisappear();
  2092 |   }
  2093 | 
  2094 |   async findRowIndexInPopupByStatus(expectedStatus: string): Promise<number> {
  2095 |     await this.page.waitForLoadState("domcontentloaded");
  2096 |     await this.waitForLoadingSpinnerToDisappear();
  2097 |     await this.page.waitForTimeout(1000);
  2098 | 
  2099 |     const rows = this.page.locator("div[class='Grid_mcs_rowButton']");
  2100 |     const rowCount = await rows.count();
  2101 | 
  2102 |     for (let i = 0; i < rowCount; i++) {
  2103 |       const row = rows.nth(i);
  2104 |       const cells = row.locator("button[class*='c3'][class*='cell']>span");
  2105 |       const statusText = await cells.getAttribute('data-status');
  2106 | 
  2107 |       if (statusText?.trim() === expectedStatus) {
  2108 |         return i;
  2109 |       }
  2110 |     }
  2111 | 
  2112 |     throw new Error(`Row with status '${expectedStatus}' not found in Test Assignment History table`);
  2113 |   }
  2114 | 
  2115 |   async clickOnStaffTab() {
  2116 |     await this.staffTab.click();
  2117 |     await this.page.waitForLoadState("domcontentloaded");
  2118 |   }
  2119 | 
  2120 |   async verifyStatusAtExamineeGeneralInfoPopUp(expectedStatus: string) {
  2121 |     const statusText = await this.page.locator("div[class='Grid_mcs_rowButton'] span[class='TestAssignmentModule_mcs_marker']").getAttribute('data-status');
  2122 |     expect.soft(statusText.trim(), 'Examinee status should match').toBe(expectedStatus);
  2123 |   }
  2124 | 
  2125 |   async verifySubtestsSuccessfullyAppliedPopupContent() {
  2126 |     await expect.soft(this.page.locator("//h2[text()='Subtests Successfully Applied!']"), 'Subtests Applied heading should be visible').toBeVisible();
  2127 |     await expect.soft(this.page.locator("//p[text()='Your additional subtest(s) have been successfully added to your assignment. Only ']"), 'Subtests Applied body text A should be visible').toBeVisible();
  2128 |     await expect.soft(this.page.locator("//p[text()=' remain to administer this assignment before the 90 day norming window closes.']"), 'Subtests Applied body text B should be visible').toBeVisible();
  2129 |   }
  2130 | 
  2131 |   async verifyDeleteOptionIsNotVisible() {
  2132 |     await this.clickFollowingRowElipsisButton(0);
  2133 |     await expect.soft(this.deleteButton, 'Delete button should not be visible').toBeHidden();
  2134 |   }
  2135 | 
  2136 |   async verifyHoverTextForDaysLeftToEdit() {
  2137 |     const daysLeftElementHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Days Left to Edit']//div[contains(@class,'tool-tip')]").textContent();
  2138 |     RawValueLogger.log("Days Left to Edit Hover Text", daysLeftElementHoverText);
  2139 |     expect.soft(daysLeftElementHoverText, "Days left hover text should contain 'days'").toEqual("You can edit this assignment for up to 90 days after testing begins.");
  2140 |   }
  2141 | 
  2142 |   async verifyHoverTextForEarliestDateOfTesting() {
  2143 |     const earliestDateOfTestingHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Earliest Date of Testing']//div[contains(@class,'tool-tip')]").textContent();
  2144 |     RawValueLogger.log("Earliest Date of Testing Hover Text", earliestDateOfTestingHoverText);
  2145 |     expect.soft(earliestDateOfTestingHoverText, "Earliest date of testing hover text should contain 'earliest date of testing'").toEqual("First day of testing, marking the beginning of the 90-day window to complete all tests.");
  2146 |   }
  2147 | 
  2148 |   async verifyActiveViewColumnHeaderHoverTexts() {
  2149 |     const examineeHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Examinee']//div[contains(@class,'tool-tip')]").textContent();
  2150 |     RawValueLogger.log("Examinee Column Header Hover Text", examineeHoverText);
  2151 |     expect.soft(examineeHoverText, "Examinee hover text should match expected text").toEqual("This is the student or individual being assessed.");
  2152 | 
  2153 |     const testSetHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Test Set']//div[contains(@class,'tool-tip')]").textContent();
  2154 |     RawValueLogger.log("Test Set Column Header Hover Text", testSetHoverText);
  2155 |     expect.soft(testSetHoverText, "Test Set hover text should match expected text").toEqual("A collection of tests grouped together for assessment.");
  2156 | 
  2157 |     const statusHoverText = await this.page.locator("//div[contains(@class,'Grid')][text()='Status']//div[contains(@class,'tool-tip')]").textContent();
  2158 |     RawValueLogger.log("Status Column Header Hover Text", statusHoverText);
  2159 |     expect.soft(statusHoverText, "Status hover text should match expected text").toEqual("Status shows where the test is in the process. Statuses include Not Started, In Progress, Complete, Closed, Expired, and Offline.");
  2160 | 
```