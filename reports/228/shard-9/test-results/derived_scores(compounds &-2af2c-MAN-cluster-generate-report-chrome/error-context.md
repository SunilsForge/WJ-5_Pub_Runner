# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/PHNMAN_cluster_pub.spec.ts >>  PHNMAN cluster Derived Export Automation  >> For SNDDEL - Age - All correct scenario,SNDSUB - Age - All correct scenario Complete The PHNMAN cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/PHNMAN_cluster_pub.spec.ts:26:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'My Test Assignments' }) to be visible

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
              - heading "Hello S10PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S10PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N24626A61134 Status Completed Date Created 05/01/2026 09:59 AM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N24626A61134" [ref=e68]: Derived_Score_AutoFilter_Template_N24626A61134
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 05/01/2026 09:59 AM" [ref=e72]: 05/01/2026 09:59 AM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N39484A8388 Status Completed Date Created 05/01/2026 09:54 AM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N39484A8388" [ref=e82]: Derived_Score_AutoFilter_Template_N39484A8388
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 05/01/2026 09:54 AM" [ref=e86]: 05/01/2026 09:54 AM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N94355A98689 Status Completed Date Created 05/01/2026 09:48 AM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N94355A98689" [ref=e96]: Derived_Score_AutoFilter_Template_N94355A98689
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 05/01/2026 09:48 AM" [ref=e100]: 05/01/2026 09:48 AM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N95013A12665 Status Completed Date Created 05/01/2026 09:40 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N95013A12665" [ref=e110]: Derived_Score_AutoFilter_Template_N95013A12665
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 05/01/2026 09:40 AM" [ref=e114]: 05/01/2026 09:40 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N95013A12665 Status Completed Date Created 05/01/2026 09:39 AM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N95013A12665" [ref=e124]: Derived_Score_AutoFilter_Template_N95013A12665
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 05/01/2026 09:39 AM" [ref=e128]: 05/01/2026 09:39 AM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N33218A75494 Status Completed Date Created 04/29/2026 09:52 PM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N33218A75494" [ref=e138]: Derived_Score_AutoFilter_Template_N33218A75494
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/29/2026 09:52 PM" [ref=e142]: 04/29/2026 09:52 PM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N16741A99496 Status Completed Date Created 04/29/2026 09:46 PM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N16741A99496" [ref=e152]: Derived_Score_AutoFilter_Template_N16741A99496
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/29/2026 09:46 PM" [ref=e156]: 04/29/2026 09:46 PM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N31813A3962 Status Completed Date Created 04/29/2026 09:39 PM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N31813A3962" [ref=e166]: Derived_Score_AutoFilter_Template_N31813A3962
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/29/2026 09:39 PM" [ref=e170]: 04/29/2026 09:39 PM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N13875A69060 Status Completed Date Created 04/29/2026 09:35 PM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N13875A69060" [ref=e180]: Derived_Score_AutoFilter_Template_N13875A69060
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/29/2026 09:35 PM" [ref=e184]: 04/29/2026 09:35 PM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N26533A53405 Status Completed Date Created 04/29/2026 09:29 PM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N26533A53405" [ref=e194]: Derived_Score_AutoFilter_Template_N26533A53405
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/29/2026 09:29 PM" [ref=e198]: 04/29/2026 09:29 PM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N7672A28548 Status Completed Date Created 04/29/2026 09:22 PM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N7672A28548" [ref=e208]: Derived_Score_AutoFilter_Template_N7672A28548
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/29/2026 09:22 PM" [ref=e212]: 04/29/2026 09:22 PM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N6335A66843 Status Completed Date Created 04/29/2026 01:24 PM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N6335A66843" [ref=e222]: Derived_Score_AutoFilter_Template_N6335A66843
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/29/2026 01:24 PM" [ref=e226]: 04/29/2026 01:24 PM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N45470A18035 Status Completed Date Created 04/29/2026 01:18 PM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N45470A18035" [ref=e236]: Derived_Score_AutoFilter_Template_N45470A18035
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/29/2026 01:18 PM" [ref=e240]: 04/29/2026 01:18 PM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N299A66036 Status Completed Date Created 04/29/2026 01:12 PM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N299A66036" [ref=e250]: Derived_Score_AutoFilter_Template_N299A66036
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/29/2026 01:12 PM" [ref=e254]: 04/29/2026 01:12 PM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N71367A85301 Status Completed Date Created 04/29/2026 01:06 PM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N71367A85301" [ref=e264]: Derived_Score_AutoFilter_Template_N71367A85301
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/29/2026 01:06 PM" [ref=e268]: 04/29/2026 01:06 PM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N88318A50016 Status Completed Date Created 04/29/2026 01:00 PM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N88318A50016" [ref=e278]: Derived_Score_AutoFilter_Template_N88318A50016
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/29/2026 01:00 PM" [ref=e282]: 04/29/2026 01:00 PM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N91402A77807 Status Completed Date Created 04/29/2026 12:52 PM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N91402A77807" [ref=e292]: Derived_Score_AutoFilter_Template_N91402A77807
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 04/29/2026 12:52 PM" [ref=e296]: 04/29/2026 12:52 PM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N7053A70540 Status Completed Date Created 04/29/2026 10:42 AM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N7053A70540" [ref=e306]: Derived_Score_AutoFilter_Template_N7053A70540
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 04/29/2026 10:42 AM" [ref=e310]: 04/29/2026 10:42 AM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N296A42978 Status Completed Date Created 04/29/2026 10:35 AM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N296A42978" [ref=e320]: Derived_Score_AutoFilter_Template_N296A42978
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 04/29/2026 10:35 AM" [ref=e324]: 04/29/2026 10:35 AM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N45267A50204 Status Completed Date Created 04/29/2026 10:29 AM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N45267A50204" [ref=e334]: Derived_Score_AutoFilter_Template_N45267A50204
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 04/29/2026 10:29 AM" [ref=e338]: 04/29/2026 10:29 AM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N67910A1760 Status Completed Date Created 04/29/2026 10:24 AM Download/Print Delete View Data Export Format" [ref=e346]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N67910A1760" [ref=e348]: Derived_Score_AutoFilter_Template_N67910A1760
                    - gridcell "Status Completed" [ref=e350]: Completed
                    - gridcell "Date Created 04/29/2026 10:24 AM" [ref=e352]: 04/29/2026 10:24 AM
                    - generic [ref=e353]:
                      - gridcell "Download/Print" [ref=e355] [cursor=pointer]
                      - gridcell "Delete" [ref=e357] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e358] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N3403A69356 Status Completed Date Created 04/29/2026 10:18 AM Download/Print Delete View Data Export Format" [ref=e360]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N3403A69356" [ref=e362]: Derived_Score_AutoFilter_Template_N3403A69356
                    - gridcell "Status Completed" [ref=e364]: Completed
                    - gridcell "Date Created 04/29/2026 10:18 AM" [ref=e366]: 04/29/2026 10:18 AM
                    - generic [ref=e367]:
                      - gridcell "Download/Print" [ref=e369] [cursor=pointer]
                      - gridcell "Delete" [ref=e371] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e372] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N50459A10151 Status Completed Date Created 04/29/2026 10:10 AM Download/Print Delete View Data Export Format" [ref=e374]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N50459A10151" [ref=e376]: Derived_Score_AutoFilter_Template_N50459A10151
                    - gridcell "Status Completed" [ref=e378]: Completed
                    - gridcell "Date Created 04/29/2026 10:10 AM" [ref=e380]: 04/29/2026 10:10 AM
                    - generic [ref=e381]:
                      - gridcell "Download/Print" [ref=e383] [cursor=pointer]
                      - gridcell "Delete" [ref=e385] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e386] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N15160A85450 Status Completed Date Created 04/29/2026 07:09 AM Download/Print Delete View Data Export Format" [ref=e388]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N15160A85450" [ref=e390]: Derived_Score_AutoFilter_Template_N15160A85450
                    - gridcell "Status Completed" [ref=e392]: Completed
                    - gridcell "Date Created 04/29/2026 07:09 AM" [ref=e394]: 04/29/2026 07:09 AM
                    - generic [ref=e395]:
                      - gridcell "Download/Print" [ref=e397] [cursor=pointer]
                      - gridcell "Delete" [ref=e399] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e400] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N54324A2449 Status Completed Date Created 04/29/2026 07:01 AM Download/Print Delete View Data Export Format" [ref=e402]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N54324A2449" [ref=e404]: Derived_Score_AutoFilter_Template_N54324A2449
                    - gridcell "Status Completed" [ref=e406]: Completed
                    - gridcell "Date Created 04/29/2026 07:01 AM" [ref=e408]: 04/29/2026 07:01 AM
                    - generic [ref=e409]:
                      - gridcell "Download/Print" [ref=e411] [cursor=pointer]
                      - gridcell "Delete" [ref=e413] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e414] [cursor=pointer]
              - generic [ref=e416]:
                - button "<<" [disabled] [ref=e417]
                - button "<" [disabled] [ref=e418]
                - button "1" [ref=e419] [cursor=pointer]
                - button "2" [ref=e420] [cursor=pointer]
                - button ">" [ref=e421] [cursor=pointer]
                - button ">>" [ref=e422] [cursor=pointer]
      - contentinfo [ref=e423]:
        - generic [ref=e424]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e425] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e426]
        - generic [ref=e427]:
          - link "Riverside Insights Facebook" [ref=e428] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e429]
          - link "Riverside Insights Twitter" [ref=e430] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e431]
          - link "Riverside Insights LinkedIn" [ref=e432] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e433]
          - link "Riverside Insights Instagram" [ref=e434] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e435]
        - generic [ref=e436]:
          - button "Leave Feedback" [ref=e437] [cursor=pointer]
          - generic [ref=e438]: "|"
          - link "Terms of Use" [ref=e439] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e440]: "|"
          - link "Privacy Policy" [ref=e441] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e442]: Footer region end
  - region "Chat Widget" [ref=e443]:
    - iframe [ref=e444]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e445]:
      - img [ref=e446]
```

# Test source

```ts
  420 | 
  421 |   async selectEducation(education: string = "In Kindergarten") {
  422 |     // education = await this.getEducation();
  423 |     await this.page
  424 |       .locator(".placeholder")
  425 |       .getByText("Select Education")
  426 |       .click();
  427 |     await this.searchInputBox.last().fill(education);
  428 |     await this.page.locator(".single-select-parent").last().click();
  429 |   }
  430 | 
  431 |   async selectTestAssignmentDefaults(val: string = "Age") {
  432 |     await this.page
  433 |       .locator('[class*="checkbox"]')
  434 |       .filter({ hasText: val })
  435 |       .locator(".radio-item")
  436 |       .click();
  437 |   }
  438 | 
  439 |   async clickNextButton() {
  440 |     await this.page.getByText("Next").click();
  441 |   }
  442 | 
  443 |   async clickSaveButton() {
  444 |     await this.page.getByText("Save").click();
  445 |   }
  446 | 
  447 |   private async selectExaminee(examineeID: string) {
  448 |     await this.page
  449 |       .getByPlaceholder("Search by Examinee Name or ID")
  450 |       .fill(examineeID);
  451 |     await this.page
  452 |       .locator(".item-text")
  453 |       .getByText(new RegExp(`^${examineeID}.*`))
  454 |       .first()
  455 |       .click();
  456 |   }
  457 | 
  458 |   private async selectExaminer(examinerID: string) {
  459 |     await this.page
  460 |       .getByPlaceholder("Search by Examiner Name or ID")
  461 |       .fill(examinerID);
  462 |     await this.page.locator(".item-text").getByText(examinerID).first().click();
  463 |   }
  464 | 
  465 |   private async selectTestBlock(testBlock: string) {
  466 |     await this.page.getByPlaceholder("Search by Test Block").fill(testBlock);
  467 |     await this.page
  468 |       .locator(".item-text")
  469 |       .getByText(new RegExp(`^${testBlock}.*`))
  470 |       .first()
  471 |       .click();
  472 |   }
  473 | 
  474 |   private async selectGender(value: string) {
  475 |     await this.page.locator("div[role='dialog'] button[class='select-box']").click();
  476 |     await this.page
  477 |       .locator(".item-text")
  478 |       .getByText(new RegExp(`^${value}.*`))
  479 |       .first()
  480 |       .click();
  481 |   }
  482 | 
  483 |   private async selectLocation(value?: string) {
  484 |     try {
  485 |       await this.page
  486 |         .getByText("Select examinee location")
  487 |         .click({ timeout: 5000 });
  488 |       await this.page.locator(".item-text").last().click();
  489 |     } catch (error) {
  490 |       console.error(
  491 |         "Location is already selected by default, or there was an issue selecting the location.",
  492 |       );
  493 |     }
  494 |   }
  495 | 
  496 |   private async goToTheMainMenuChildPage(mainMenuDd: string): Promise<boolean>;
  497 |   private async goToTheMainMenuChildPage(
  498 |     mainMenuDd: string,
  499 |     childDd: string,
  500 |   ): Promise<boolean>;
  501 |   private async goToTheMainMenuChildPage(
  502 |     mainMenuDd: string,
  503 |     childDd?: string,
  504 |   ): Promise<boolean> {
  505 |     this.waitForLoaderToDisappear();
  506 |     await this.page.locator(`button[role='menuitem']:text('${mainMenuDd}')`).click();
  507 |     await this.page.waitForLoadState("load");
  508 |     if (childDd) {
  509 |       const val: Locator = this.page
  510 |         .locator(`//button[text() = '${childDd}']`)
  511 |         .first();
  512 |       await val.waitFor({ state: "visible" });
  513 |       await val.click();
  514 |     }
  515 |     return true;
  516 |   }
  517 |   async welcomeTextToBeVisable() {
  518 |     await this.page.bringToFront();
  519 | 
> 520 |     await this.myTestAssignments.waitFor({
      |                                  ^ TimeoutError: locator.waitFor: Timeout 120000ms exceeded.
  521 |       state: "visible",
  522 |       timeout: 2 * 60 * 1000,
  523 |     });
  524 | 
  525 |     console.log("My Test Assignments is visible");
  526 |   }
  527 | 
  528 |   async clickOnAddExaminerPlusButton() {
  529 |     await this.addExamonerPlusButton.click();
  530 |     await expect(this.page).toHaveScreenshot();
  531 |   }
  532 | 
  533 |   async clickOnZoomPageInIcon() {
  534 |     await this.zoomPageInIcon.hover();
  535 |     await this.zoomPageInIcon.click();
  536 |   }
  537 | 
  538 |   async searchIconISVisable() {
  539 |     await expect(this.searchIcon).toBeVisible();
  540 |   }
  541 | 
  542 |   async clickOnTheRecentExamineeOnceFullyLoaded(studentID: string) {
  543 |     // const relogging = new Wj5LoginPage(this.page);
  544 |     // await relogging.reloginIfneeded(
  545 |     //   examiner.userName,
  546 |     //   examiner.passWord,
  547 |     // );
  548 |     await this.page.waitForTimeout(5000);
  549 | 
  550 |     await this.ExaminerloadingIcon.waitFor({ state: "detached" });
  551 | 
  552 |     try {
  553 |       await this.page.getByText(studentID).first().click({ trial: true });
  554 |       await this.page.getByText(studentID).first().click({ timeout: 5000 });
  555 |     } catch (error) {
  556 |       console.error(
  557 |         `Saw Examiner DashBoard Blank/Examinee Not available ... but still trying to relogin ... ${error}`,
  558 |       );
  559 |       await this.examinerRelogin(studentID);
  560 |     }
  561 |   }
  562 | 
  563 |   async examinerRelogin(studentID: string) {
  564 |     await this.page.getByText("Sign Out").first().click();
  565 |     await expect(this.page.locator(".login-riverside-logo")).toBeVisible();
  566 |     await this.page.getByPlaceholder("Username").click();
  567 |     await this.page.getByPlaceholder("Username").fill(examiner.userName);
  568 |     await this.page.getByPlaceholder("Username").fill(examiner.userName);
  569 |     await this.page.getByPlaceholder("Password").click();
  570 |     await this.page.getByPlaceholder("Password").fill(examiner.passWord);
  571 |     await this.page.getByPlaceholder("Password").fill(examiner.passWord);
  572 |     await this.page.getByPlaceholder("Password").press("Enter");
  573 |     await this.page.getByLabel("WJ 5 Researcher,").click();
  574 |     await expect(
  575 |       this.page.getByText("Welcome to the WJ V Research Portal!", {
  576 |         exact: true,
  577 |       }),
  578 |       { message: "Not able to find wj5 welcome TExt on DashBoard" },
  579 |     ).toBeVisible();
  580 | 
  581 |     await this.ExaminerloadingIcon.waitFor({ state: "hidden" });
  582 |     await this.page.getByText(studentID).first().click();
  583 |     await this.page.waitForTimeout(3000);
  584 |   }
  585 | 
  586 |   async waitUntilCinfirmButtonisvisableAndClickOnIt() {
  587 |     await this.confirmButton.click();
  588 |     await this.page.waitForTimeout(6000);
  589 |   }
  590 | 
  591 |   async ClickonlaunchTestIcon() {
  592 |     await this.launchTestIcon.click();
  593 |   }
  594 |   async ClickonStartWithOutExamineeBtn() {
  595 |     await this.startWithoutExaminee.click();
  596 |   }
  597 |   async clickOnTheStudentLink(wj5examinerUtils) {
  598 |     const childPage: Page = await wj5examinerUtils.switchtoChildPage(
  599 |       this.studentLink,
  600 |     );
  601 |     this.sessionID = await this.sessionCode.textContent();
  602 |     this.wj5examineePage = new wj5ExamineePage(childPage, this.sessionID);
  603 |     console.log(this.sessionID);
  604 |   }
  605 | 
  606 |   async getSessionID() {
  607 |     this.sessionID = await this.sessionCode.textContent();
  608 |     return this.sessionID;
  609 |   }
  610 | 
  611 |   async reloadPage() {
  612 |     await this.page.reload({ waitUntil: "load" });
  613 |   }
  614 | 
  615 |   async getExamoneepage(): Promise<wj5ExamineePage> {
  616 |     return this.wj5examineePage;
  617 |   }
  618 | 
  619 |   async clickOnTheResportToDownload(testinfo: TestInfo) {
  620 |     await this.page.waitForTimeout(5000);
```