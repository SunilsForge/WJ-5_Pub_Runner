# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/MEMWRD_Pub.spec.ts >> MEMWRD.W5PA Test Data Export Automation  >> For Ages 4 to 7 - All correct scenario Conduct test and validate report
- Location: src/tests/test_dataExport/MEMWRD_Pub.spec.ts:20:9

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username') to be visible

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
              - heading "Hello 06PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "06PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Test_DataExport_AutoFilter_Template_N78772A29595 Status Completed Date Created 04/29/2026 01:04 PM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N78772A29595" [ref=e68]: Test_DataExport_AutoFilter_Template_N78772A29595
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 04/29/2026 01:04 PM" [ref=e72]: 04/29/2026 01:04 PM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N33705A25900 Status Completed Date Created 04/29/2026 12:58 PM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N33705A25900" [ref=e82]: Test_DataExport_AutoFilter_Template_N33705A25900
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 04/29/2026 12:58 PM" [ref=e86]: 04/29/2026 12:58 PM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N34557A18263 Status Completed Date Created 04/29/2026 12:50 PM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N34557A18263" [ref=e96]: Test_DataExport_AutoFilter_Template_N34557A18263
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 04/29/2026 12:50 PM" [ref=e100]: 04/29/2026 12:50 PM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N68295A44896 Status Completed Date Created 04/29/2026 10:38 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N68295A44896" [ref=e110]: Test_DataExport_AutoFilter_Template_N68295A44896
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 04/29/2026 10:38 AM" [ref=e114]: 04/29/2026 10:38 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N8145A54304 Status Completed Date Created 04/29/2026 10:31 AM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N8145A54304" [ref=e124]: Test_DataExport_AutoFilter_Template_N8145A54304
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/29/2026 10:31 AM" [ref=e128]: 04/29/2026 10:31 AM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N74907A40957 Status Completed Date Created 04/29/2026 10:21 AM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N74907A40957" [ref=e138]: Test_DataExport_AutoFilter_Template_N74907A40957
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/29/2026 10:21 AM" [ref=e142]: 04/29/2026 10:21 AM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N30879A45737 Status Completed Date Created 04/29/2026 10:16 AM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N30879A45737" [ref=e152]: Test_DataExport_AutoFilter_Template_N30879A45737
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/29/2026 10:16 AM" [ref=e156]: 04/29/2026 10:16 AM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N56434A42617 Status Completed Date Created 04/29/2026 10:07 AM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N56434A42617" [ref=e166]: Test_DataExport_AutoFilter_Template_N56434A42617
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/29/2026 10:07 AM" [ref=e170]: 04/29/2026 10:07 AM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N76628A80268 Status Completed Date Created 04/29/2026 06:59 AM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N76628A80268" [ref=e180]: Test_DataExport_AutoFilter_Template_N76628A80268
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/29/2026 06:59 AM" [ref=e184]: 04/29/2026 06:59 AM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N69848A17044 Status Completed Date Created 04/27/2026 11:53 AM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N69848A17044" [ref=e194]: Derived_Score_AutoFilter_Template_N69848A17044
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/27/2026 11:53 AM" [ref=e198]: 04/27/2026 11:53 AM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N8487A30676 Status Completed Date Created 04/27/2026 11:45 AM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N8487A30676" [ref=e208]: Derived_Score_AutoFilter_Template_N8487A30676
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/27/2026 11:45 AM" [ref=e212]: 04/27/2026 11:45 AM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N85411A2162 Status Completed Date Created 04/27/2026 11:35 AM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N85411A2162" [ref=e222]: Test_DataExport_AutoFilter_Template_N85411A2162
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/27/2026 11:35 AM" [ref=e226]: 04/27/2026 11:35 AM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N38396A41241 Status Completed Date Created 04/27/2026 11:27 AM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N38396A41241" [ref=e236]: Test_DataExport_AutoFilter_Template_N38396A41241
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/27/2026 11:27 AM" [ref=e240]: 04/27/2026 11:27 AM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N38396A41241 Status Completed Date Created 04/27/2026 11:26 AM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N38396A41241" [ref=e250]: Test_DataExport_AutoFilter_Template_N38396A41241
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/27/2026 11:26 AM" [ref=e254]: 04/27/2026 11:26 AM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N52898A41820 Status Completed Date Created 04/27/2026 11:21 AM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N52898A41820" [ref=e264]: Test_DataExport_AutoFilter_Template_N52898A41820
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/27/2026 11:21 AM" [ref=e268]: 04/27/2026 11:21 AM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N80428A81860 Status Completed Date Created 04/27/2026 11:14 AM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N80428A81860" [ref=e278]: Test_DataExport_AutoFilter_Template_N80428A81860
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/27/2026 11:14 AM" [ref=e282]: 04/27/2026 11:14 AM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N40435A55318 Status Completed Date Created 04/24/2026 07:22 AM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N40435A55318" [ref=e292]: Test_DataExport_AutoFilter_Template_N40435A55318
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 04/24/2026 07:22 AM" [ref=e296]: 04/24/2026 07:22 AM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N931A77377 Status Completed Date Created 04/24/2026 07:16 AM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N931A77377" [ref=e306]: Test_DataExport_AutoFilter_Template_N931A77377
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 04/24/2026 07:16 AM" [ref=e310]: 04/24/2026 07:16 AM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N28520A38204 Status Completed Date Created 04/24/2026 07:10 AM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N28520A38204" [ref=e320]: Test_DataExport_AutoFilter_Template_N28520A38204
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 04/24/2026 07:10 AM" [ref=e324]: 04/24/2026 07:10 AM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N28520A38204 Status Completed Date Created 04/24/2026 07:09 AM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N28520A38204" [ref=e334]: Test_DataExport_AutoFilter_Template_N28520A38204
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 04/24/2026 07:09 AM" [ref=e338]: 04/24/2026 07:09 AM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N66212A61257 Status Completed Date Created 04/23/2026 01:27 PM Download/Print Delete View Data Export Format" [ref=e346]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N66212A61257" [ref=e348]: Test_DataExport_AutoFilter_Template_N66212A61257
                    - gridcell "Status Completed" [ref=e350]: Completed
                    - gridcell "Date Created 04/23/2026 01:27 PM" [ref=e352]: 04/23/2026 01:27 PM
                    - generic [ref=e353]:
                      - gridcell "Download/Print" [ref=e355] [cursor=pointer]
                      - gridcell "Delete" [ref=e357] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e358] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N17134A57091 Status Completed Date Created 04/23/2026 01:21 PM Download/Print Delete View Data Export Format" [ref=e360]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N17134A57091" [ref=e362]: Test_DataExport_AutoFilter_Template_N17134A57091
                    - gridcell "Status Completed" [ref=e364]: Completed
                    - gridcell "Date Created 04/23/2026 01:21 PM" [ref=e366]: 04/23/2026 01:21 PM
                    - generic [ref=e367]:
                      - gridcell "Download/Print" [ref=e369] [cursor=pointer]
                      - gridcell "Delete" [ref=e371] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e372] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N20366A30741 Status Completed Date Created 04/23/2026 01:15 PM Download/Print Delete View Data Export Format" [ref=e374]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N20366A30741" [ref=e376]: Test_DataExport_AutoFilter_Template_N20366A30741
                    - gridcell "Status Completed" [ref=e378]: Completed
                    - gridcell "Date Created 04/23/2026 01:15 PM" [ref=e380]: 04/23/2026 01:15 PM
                    - generic [ref=e381]:
                      - gridcell "Download/Print" [ref=e383] [cursor=pointer]
                      - gridcell "Delete" [ref=e385] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e386] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N14359A19284 Status Completed Date Created 03/31/2026 01:39 PM Download/Print Delete View Data Export Format" [ref=e388]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N14359A19284" [ref=e390]: Test_DataExport_AutoFilter_Template_N14359A19284
                    - gridcell "Status Completed" [ref=e392]: Completed
                    - gridcell "Date Created 03/31/2026 01:39 PM" [ref=e394]: 03/31/2026 01:39 PM
                    - generic [ref=e395]:
                      - gridcell "Download/Print" [ref=e397] [cursor=pointer]
                      - gridcell "Delete" [ref=e399] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e400] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N21039A42933 Status Completed Date Created 03/31/2026 01:31 PM Download/Print Delete View Data Export Format" [ref=e402]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N21039A42933" [ref=e404]: Test_DataExport_AutoFilter_Template_N21039A42933
                    - gridcell "Status Completed" [ref=e406]: Completed
                    - gridcell "Date Created 03/31/2026 01:31 PM" [ref=e408]: 03/31/2026 01:31 PM
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
  1   | import { Locator, Page } from "@playwright/test";
  2   | import { getSiteUrl } from "../utils/testData";
  3   | import Locators from "../utils/locators";
  4   | 
  5   | export default class Wj5LoginPage extends Locators {
  6   | 
  7   |   constructor(page: Page) {
  8   |     super(page);
  9   |   }
  10  | 
  11  |   private async waitForLoadingToDisappear(timeout = 30000) {
  12  |     await this.loadingIcon.waitFor({ state: "hidden", timeout });
  13  |     await this.page.waitForTimeout(15000); // Additional wait to agree terms popup,appears after login tile little late which sometimes can be seen after clicking on the WJ5 tile
  14  |   }
  15  | 
  16  |   private async safeClickWj5Tyle(
  17  |     locator: Locator,
  18  |     options = { timeout: 10000, delay: 200 },
  19  |   ) {
  20  |     try {
  21  |       await locator.waitFor({ state: "visible", timeout: options.timeout });
  22  |       await locator.click({ timeout: options.timeout, delay: options.delay });
  23  |       await this.page.waitForSelector('//div[@class="loading-inner"]', {
  24  |         timeout: options.timeout,
  25  |       });
  26  |     } catch {
  27  |       if (await this.pendoPopup.isVisible()) {
  28  |         await this.pendoOkayButton.click();
  29  |         await locator.click({ timeout: options.timeout, delay: options.delay });
  30  |       }
  31  |     }
  32  |   }
  33  | 
  34  |   async gotoUrl(url: string) {
  35  |     try {
  36  |       await this.page.bringToFront();
  37  |       await this.page.goto(await url, { waitUntil: "load" });
  38  |     } catch (error) {
  39  |       console.warn("Error while navigating to URL: ", error);
  40  |     }
  41  |   }
  42  | 
  43  |   async loginToRiversideScore(username: string, password: string) {
  44  |     try {
  45  |       await this.gotoUrl(getSiteUrl());
  46  |       await this.page.waitForLoadState("networkidle");
  47  |       await this.page.waitForTimeout(1000);
  48  | 
> 49  |       await this.userName.waitFor({ state: "visible", timeout: 10000 });
      |                           ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  50  |       await this.userName.clear();
  51  |       await this.passWord.clear();
  52  |       await this.userName.fill(username);
  53  |       await this.passWord.fill(password);
  54  |       await this.signInButton.click();
  55  | 
  56  |       await this.waitForLoadingToDisappear();
  57  | 
  58  |       await this.acceptUserTermsIfPresent();
  59  | 
  60  |       await this.safeClickWj5Tyle(this.wj5Tyle);
  61  |       await this.waitForLoadingToDisappear();
  62  |       await this.createTestAssignment.waitFor({
  63  |         state: "visible",
  64  |         timeout: 30000,
  65  |       });
  66  | 
  67  |       console.log(`Login successful for ${username}`);
  68  |     } catch (error) {
  69  |       console.error(`Login failed for ${username}:`, error);
  70  |       throw error;
  71  |     }
  72  |   }
  73  | 
  74  |   async acceptUserTermsIfPresent() {
  75  |     try {
  76  |       const updateTermsPopup = await this.page.getByRole('dialog').first().isVisible();
  77  |       if (updateTermsPopup) {
  78  |         await this.page.getByRole('button', { name: 'I Accept' }).click();
  79  |       }
  80  |     } catch (error) {
  81  |       console.warn("Error while accepting user terms: ", error);
  82  |     }
  83  |   }
  84  | 
  85  |   async reloginIfneeded(username: string, password: string) {
  86  |     try {
  87  |       await this.page.waitForLoadState();
  88  | 
  89  |       const isDashboardVisible = await this.myTestAssignmentsText.isVisible();
  90  |       const isExamineeVisible = await this.page
  91  |         .locator("class='examinee'")
  92  |         .isVisible();
  93  | 
  94  |       if (!isDashboardVisible && !isExamineeVisible) {
  95  |         console.log("Relogging to Riverside Score ...");
  96  |         await this.loginToRiversideScore(username, password);
  97  |       }
  98  |     } catch (error) {
  99  |       console.warn(
  100 |         `Login page possibly blank or not in dashboard. Error: ${error}`,
  101 |       );
  102 |       await this.loginToRiversideScore(username, password);
  103 |     }
  104 |   }
  105 | }
  106 | 
```