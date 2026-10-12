# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/MATRCZ_Rerouting.spec.ts >>  MATRCZ Rerouting and LeftNav >> Ages 4 to 11 - MATRCZ Sample Items Correct and then Incorrect Scenario for SSP1 Test Rerouting
- Location: src/tests/ReroutingandLeftNav/MATRCZ_Rerouting.spec.ts:10:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'select-group correct\']//button').first()
    - locator resolved to <button role="radio" aria-live="polite" aria-checked="false" class="select-option">Correct</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <button role="radio" aria-live="polite" aria-checked="true" class="select-option">Correct</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>In Progress</div> from <nav aria-label="Item navigation" class="side-nav-container expanded">…</nav> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>In Progress</div> from <nav aria-label="Item navigation" class="side-nav-container expanded">…</nav> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    116 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div>In Progress</div> from <nav aria-label="Item navigation" class="side-nav-container expanded">…</nav> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

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
              - heading "Hello 03PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "03PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - button "Search Test Assignments" [ref=e54] [cursor=pointer]
                - generic [ref=e55]:
                  - button "Active" [ref=e56] [cursor=pointer]
                  - button "Closed" [ref=e57] [cursor=pointer]
              - table "Available Assignments" [ref=e59]:
                - rowgroup [ref=e66]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e67]:
                    - columnheader "This is the student or individual being assessed." [ref=e68]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e69]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e70]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e71]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e72]: Actions
                - rowgroup [ref=e73]:
                  - row "No Test Assignments have been created." [ref=e74] [cursor=pointer]:
                    - cell "No Test Assignments have been created." [ref=e75]
            - generic [ref=e76]:
              - generic [ref=e79]:
                - img [ref=e80]
                - heading "Notifications Center" [level=2] [ref=e84]
              - generic [ref=e85]:
                - generic [ref=e87]:
                  - img [ref=e88]
                  - heading "Resources" [level=3] [ref=e92]
                - list [ref=e93]:
                  - listitem [ref=e94]:
                    - button "Riverside Learn" [ref=e95] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e96]
                      - img [ref=e98]
                  - listitem [ref=e100]:
                    - button "Onboarding Tutorial Videos" [ref=e101] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e102]
                      - img [ref=e104]
                  - listitem [ref=e106]:
                    - button "Quick Reference Guides" [ref=e107] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e108]
                      - img [ref=e110]
                - button "View All" [ref=e113] [cursor=pointer]
      - contentinfo [ref=e114]:
        - generic [ref=e115]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e116] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e117]
        - generic [ref=e118]:
          - link "Riverside Insights Facebook" [ref=e119] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e120]
          - link "Riverside Insights Twitter" [ref=e121] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e122]
          - link "Riverside Insights LinkedIn" [ref=e123] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e124]
          - link "Riverside Insights Instagram" [ref=e125] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e126]
        - generic [ref=e127]:
          - button "Leave Feedback" [ref=e128] [cursor=pointer]
          - generic [ref=e129]: "|"
          - link "Terms of Use" [ref=e130] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e131]: "|"
          - link "Privacy Policy" [ref=e132] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e133]: Footer region end
```

# Test source

```ts
  5063 |         if (/^Introduction (1|2|4)/.test(itemDetails)) {
  5064 |           await this.videoPlayButton.click();
  5065 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5066 |         } else if (itemDetails.includes("Sample")) {
  5067 |           await this.correctOptionButton.nth(0).click();
  5068 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5069 |         } else if (/^Item (?:1[0-1])\b/.test(itemDetails)){
  5070 |           await this.correctOptionButton.nth(0).click();
  5071 |         } else if (/^Item (?:[1-8]|1[2-7])\b/.test(itemDetails)) {
  5072 |           await this.incorrectOptionButton.nth(0).click();
  5073 |         } else if (itemDetails.match("Item 9")) {
  5074 |           await this.incorrectOptionButton.nth(0).click();
  5075 |           await expect.soft(this.nextAndEndTestButton).toHaveText("End Test");
  5076 |           await this.leftNavBlockContainer.nth(1).click();
  5077 |           await this.leftNavCorrectAnswerContainer.nth(8).click();
  5078 |           await this.correctOptionButton.nth(0).click();
  5079 |           await this.incorrectOptionButton.nth(0).click();
  5080 |           await expect.soft(this.nextAndEndTestButton).toHaveText("End Test");
  5081 |         }
  5082 |       } else if (typeOfTest.match(/BLKROT Sample Items Correct and then Incorrect Scenario/i)) {
  5083 |         if (/^Introduction (1|2|4)/.test(itemDetails)) {
  5084 |           await this.videoPlayButton.click();
  5085 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5086 |         } else if (itemDetails.includes("Sample")) {
  5087 |           await this.correctOptionButton.nth(0).click();
  5088 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5089 |         } else if (typeOfTest.match(/BLKROT Sample Items Correct and then Incorrect Scenario for SSP1/i)) {
  5090 |           if (/^Item [1-3]\b/.test(itemDetails)) {
  5091 |             await this.correctOptionButton.nth(0).click();
  5092 |           } else if (itemDetails.match("Item 4")) {
  5093 |             await this.leftNavAllItems.nth(1).click();
  5094 |             await this.correctOptionButton.nth(0).click();
  5095 |             await this.iDontKnowButton.click();
  5096 |             await expect.soft(this.nextText).toHaveText("Item 4");
  5097 |             await this.plainNextButtonOrEndButton.click();
  5098 |             await this.iDontKnowButton.click();
  5099 |           } else if (/^Item [5-9]\b/.test(itemDetails)) {
  5100 |             await this.iDontKnowButton.click();
  5101 |           }
  5102 |         } else if (typeOfTest.match(/BLKROT Sample Items Correct and then Incorrect Scenario for SSP2/i)) {
  5103 |           if (/^Item 1[0-4]\b/.test(itemDetails)) {
  5104 |             await this.correctOptionButton.nth(0).click();
  5105 |           } else if (itemDetails.match("Item 15")) {
  5106 |             await this.leftNavAllItems.nth(8).click();
  5107 |             await this.correctOptionButton.nth(0).click();
  5108 |             await this.iDontKnowButton.click();
  5109 |             await expect.soft(this.nextText).toHaveText("Item 15");
  5110 |             await this.plainNextButtonOrEndButton.click();
  5111 |             await this.iDontKnowButton.click();
  5112 |           } else if (/^Item (1[6-9]|20)\b/.test(itemDetails)) {
  5113 |             await this.iDontKnowButton.click();
  5114 |           }
  5115 |         }
  5116 |       } else if (typeOfTest.match(/BLKROT Sample Items Incorrect and then Correct Scenario for SSP1/i)) {
  5117 |         if (/^Introduction (1|2)/.test(itemDetails)) {
  5118 |           await this.videoPlayButton.click();
  5119 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5120 |         } else if (/^Sample Item (A, Trial [1-2]|B, Trial 1)$/.test(itemDetails)) {
  5121 |           await this.iDontKnowButton.click();
  5122 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5123 |         } else if (itemDetails.match("Sample Item B, Trial 2")) {
  5124 |           await this.correctOptionButton.nth(0).click();
  5125 |           await this.leftNavAllItems.nth(1).click();
  5126 |           await this.iDontKnowButton.click();
  5127 |           await this.correctOptionButton.nth(0).click();
  5128 |           await expect.soft(this.nextText).toHaveText("Sample Item B, Trial 2");
  5129 |           await this.plainNextButtonOrEndButton.click();
  5130 |         } else if (/^Item [1-9]\b/.test(itemDetails)) {
  5131 |           await this.iDontKnowButton.click();
  5132 |         }
  5133 |       } else if (typeOfTest.match(/BLKROT Sample Items Incorrect and then Correct Scenario for SSP2/i)) {
  5134 |         if (/^Introduction (4)/.test(itemDetails)) {
  5135 |           await this.videoPlayButton.click();
  5136 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5137 |         } else if (itemDetails.includes("Sample")) {
  5138 |           await this.incorrectOptionButton.nth(0).click();
  5139 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5140 |         } else if (itemDetails.match("Introduction 5")) {
  5141 |           await this.leftNavAllItems.nth(8).click();
  5142 |           await this.incorrectOptionButton.nth(0).click();
  5143 |           await this.correctOptionButton.nth(0).click();
  5144 |           await expect.soft(this.nextText).toHaveText("Introduction 5");
  5145 |           await this.plainNextButtonOrEndButton.click();
  5146 |         } else if (/^Item (1[0-9]|2[0-8])\b/.test(itemDetails)) {
  5147 |           await this.correctOptionButton.nth(0).click();
  5148 |         }
  5149 |       } else if (typeOfTest.match(/MATRCZ Sample Items Correct and then Incorrect Scenario/i)) {
  5150 |         if (itemDetails.startsWith("Introduction")) {
  5151 |           await this.activateTabletControlButton.click();
  5152 |           await this.videoPlayButton.click();
  5153 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5154 |         } else if (itemDetails.startsWith("Sample")) {
  5155 |           await this.correctOptionButton.nth(0).click();
  5156 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5157 |         } else if (typeOfTest.match(/MATRCZ Sample Items Correct and then Incorrect Scenario for SSP1/i) && itemDetails.match(/^(Block (A|D)), Item ([1-8]|2[5-8]|3[0-2])\b/)) {
  5158 |           await this.correctOptionButton.nth(0).click();
  5159 |         } else if (typeOfTest.match(/MATRCZ Sample Items Correct and then Incorrect Scenario for SSP2/i) && itemDetails.match(/^(Block (B|D)), Item ([9]|1[0-6]|2[5-8]|3[0-2])\b/)) {
  5160 |           await this.correctOptionButton.nth(0).click();
  5161 |         } else if (itemDetails.includes("Block D, Item 29")) {
  5162 |           await this.leftNavAllItems.nth(2).click();
> 5163 |           await this.correctOptionButton.nth(0).click();
       |                                                 ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  5164 |           await this.iDontKnowButton.click();
  5165 |           await expect.soft(this.nextText).toHaveText("Block D, Item 29");
  5166 |           await this.plainNextButtonOrEndButton.click();
  5167 |           await this.correctOptionButton.nth(0).click();
  5168 |         }
  5169 |       } else if (typeOfTest.match(/MATRCZ Sample Items Incorrect and then Correct Scenario/i)) {
  5170 |         if (itemDetails.startsWith("Introduction")) {
  5171 |           await this.activateTabletControlButton.click();
  5172 |           await this.videoPlayButton.click();
  5173 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5174 |         } else if (/^Sample Item (A, Trial [1-2]|B, Trial 1)$/.test(itemDetails)) {
  5175 |           await this.iDontKnowButton.click();
  5176 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5177 |         } else if (itemDetails.match("Sample Item B, Trial 2")) {
  5178 |           await this.correctOptionButton.nth(0).click();
  5179 |           await this.leftNavAllItems.nth(2).click();
  5180 |           await this.iDontKnowButton.click();
  5181 |           await this.correctOptionButton.nth(0).click();
  5182 |           await expect.soft(this.nextText).toHaveText("Sample Item B, Trial 2");
  5183 |           await this.plainNextButtonOrEndButton.click();
  5184 |         } else if (typeOfTest.match(/MATRCZ Sample Items Incorrect and then Correct Scenario for SSP1/i) && itemDetails.match(/^(Block (A|D)), Item ([1-8]|2[5-9]|3[0-2])\b/)) {
  5185 |           await this.correctOptionButton.nth(0).click();
  5186 |         } else if (typeOfTest.match(/MATRCZ Sample Items Incorrect and then Correct Scenario for SSP2/i) && itemDetails.match(/^(Block (B|D)), Item ([9]|1[0-6]|2[5-9]|3[0-2])\b/)) {
  5187 |           await this.correctOptionButton.nth(0).click();
  5188 |         }
  5189 |       } else if (typeOfTest.match(/MATRCZ Block B & Block A All Incorrect then Block B 1 correct Scenario for SSP2/i)) {
  5190 |         if (itemDetails.startsWith("Introduction")) {
  5191 |           await this.activateTabletControlButton.click();
  5192 |           await this.videoPlayButton.click();
  5193 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5194 |         } else if (itemDetails.startsWith("Sample")) {
  5195 |           await this.correctOptionButton.nth(0).click();
  5196 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5197 |         } else if (itemDetails.match(/^(Block [A|B]), Item ([1-7]|[9]|1[0-6])\b/)) {
  5198 |           await this.iDontKnowButton.click();
  5199 |         } else if (itemDetails.match("Block A, Item 8")) {
  5200 |           await this.iDontKnowButton.click();
  5201 |           await expect.soft(this.nextAndEndTestButton).toHaveText("End Test");
  5202 |           await this.leftNavBlockContainer.nth(1).click();
  5203 |           await this.leftNavIncorrectAnswerContainer.nth(0).click();
  5204 |           await this.iDontKnowButton.click();
  5205 |           await this.correctOptionButton.nth(0).click();
  5206 |           await expect.soft(this.nextAndEndTestButton).toHaveText("End Test");
  5207 |         }
  5208 |       } else if (typeOfTest.match(/ANLSYN Sample Items Correct and then Incorrect Scenario/i)) {
  5209 |         if (testStemForm.match(/ANLSYN.W5NV/) && /^Color Pretest\s*$/.test(itemDetails)) {
  5210 |           await this.videoPlayButton.click();
  5211 |           await this.waitTillVideoIsComplete();
  5212 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5213 |         } else if (itemDetails.includes("Color Pretest")) {
  5214 |           await this.correctOptionButton.nth(0).click();
  5215 |         } else if (itemDetails.startsWith("Introduction")) {
  5216 |           await this.videoPlayButton.click();
  5217 |           await this.waitTillVideoIsComplete();
  5218 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5219 |         } else if (itemDetails.startsWith("Sample")) {
  5220 |           await this.correctOptionButton.nth(0).click();
  5221 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5222 |         } else if (/^Item [1-5]\b/.test(itemDetails)) {
  5223 |           await this.iDontKnowButton.click();
  5224 |         } else if (itemDetails === "Item 6") {
  5225 |           await this.iDontKnowButton.click();
  5226 |           if (testStemForm.match(/ANLSYN.W5NV/)) {
  5227 |             await this.leftNavAllItems.nth(10).click();
  5228 |           } else {
  5229 |             await this.leftNavAllItems.nth(9).click();
  5230 |           }
  5231 |           await this.correctOptionButton.nth(0).click();
  5232 |           await this.iDontKnowButton.click();
  5233 |           await expect.soft(this.nextText).toHaveText("Item 7");
  5234 |           await this.plainNextButtonOrEndButton.click();
  5235 |           await this.iDontKnowButton.click();
  5236 |         }
  5237 |       } else if (typeOfTest.match(/ANLSYN Sample Items Incorrect and then Correct Scenario/i)) {
  5238 |         if (testStemForm.match(/ANLSYN.W5NV/) && /^Color Pretest\s*$/.test(itemDetails)) {
  5239 |           await this.videoPlayButton.click();
  5240 |           await this.waitTillVideoIsComplete();
  5241 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5242 |         } else if (itemDetails.includes("Color Pretest")) {
  5243 |           await this.correctOptionButton.nth(0).click();
  5244 |         } else if (itemDetails.startsWith("Introduction")) {
  5245 |           await this.videoPlayButton.click();
  5246 |           await this.waitTillVideoIsComplete();
  5247 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5248 |         } else if (/^Sample Item (A, Trial [1-2]|B, Trial 1)$/.test(itemDetails)) {
  5249 |           await this.iDontKnowButton.click();
  5250 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5251 |         } else if (itemDetails.match("Sample Item B, Trial 2")) {
  5252 |           await this.correctOptionButton.nth(0).click();
  5253 |            if (testStemForm.match(/ANLSYN.W5NV/)) {
  5254 |             await this.leftNavAllItems.nth(10).click();
  5255 |           } else {
  5256 |             await this.leftNavAllItems.nth(9).click();
  5257 |           }
  5258 |           await this.iDontKnowButton.click();
  5259 |           await this.correctOptionButton.nth(0).click();
  5260 |           await expect.soft(this.nextText).toHaveText("Item 4");
  5261 |         } else if (/^Item [1-7]\b/.test(itemDetails)) {
  5262 |           await this.iDontKnowButton.click();
  5263 |         }
```