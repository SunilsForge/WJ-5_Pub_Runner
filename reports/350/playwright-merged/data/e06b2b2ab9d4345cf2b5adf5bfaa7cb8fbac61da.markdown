# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/PHNAWR_cluster_pub.spec.ts >>  PHNAWR cluster Derived Export Automation  >> For SNDBLN - K12 - All correct scenario,SEGMNT - K12 - All incorrect scenario Complete The PHNAWR cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/PHNAWR_cluster_pub.spec.ts:27:9

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
              - heading "Hello S09PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S09PwAut25AH ln" [ref=e10] [cursor=pointer]
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
            - heading "REPORT CENTER" [level=1] [ref=e39]
            - navigation [ref=e40]:
              - tablist [ref=e41]:
                - tab "Report Library" [selected] [ref=e42] [cursor=pointer]
                - button "Zoom In" [ref=e43] [cursor=pointer]:
                  - img "Zoom Page In Icon" [ref=e44]
            - generic "Report Library" [ref=e53]:
              - grid [ref=e54]:
                - generic [ref=e55]:
                  - generic "Report Name" [ref=e56]:
                    - generic [ref=e58]: Report Name
                  - generic "Status" [ref=e59]:
                    - generic [ref=e61]: Status
                  - generic "Date Created" [ref=e62]:
                    - generic [ref=e64]: Date Created
                  - generic "Actions" [ref=e65]:
                    - generic [ref=e67]: Actions
                - rowgroup [ref=e68]:
                  - row "Report Name Derived_Score_AutoFilter_Template_N67874A98313 Status Completed Date Created 09/24/2026 03:16 PM Download/Print Delete View Data Export Format" [ref=e69]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N67874A98313" [ref=e71]: Derived_Score_AutoFilter_Template_N67874A98313
                    - gridcell "Status Completed" [ref=e73]: Completed
                    - gridcell "Date Created 09/24/2026 03:16 PM" [ref=e75]: 09/24/2026 03:16 PM
                    - generic [ref=e76]:
                      - gridcell "Download/Print" [active] [ref=e78] [cursor=pointer]
                      - gridcell "Delete" [ref=e80] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e81] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N31495A98666 Status Completed Date Created 09/24/2026 03:11 PM Download/Print Delete View Data Export Format" [ref=e83]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N31495A98666" [ref=e85]: Derived_Score_AutoFilter_Template_N31495A98666
                    - gridcell "Status Completed" [ref=e87]: Completed
                    - gridcell "Date Created 09/24/2026 03:11 PM" [ref=e89]: 09/24/2026 03:11 PM
                    - generic [ref=e90]:
                      - gridcell "Download/Print" [ref=e92] [cursor=pointer]
                      - gridcell "Delete" [ref=e94] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e95] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N30476A23169 Status Completed Date Created 09/24/2026 03:03 PM Download/Print Delete View Data Export Format" [ref=e97]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N30476A23169" [ref=e99]: Derived_Score_AutoFilter_Template_N30476A23169
                    - gridcell "Status Completed" [ref=e101]: Completed
                    - gridcell "Date Created 09/24/2026 03:03 PM" [ref=e103]: 09/24/2026 03:03 PM
                    - generic [ref=e104]:
                      - gridcell "Download/Print" [ref=e106] [cursor=pointer]
                      - gridcell "Delete" [ref=e108] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e109] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N12907A23912 Status Completed Date Created 09/16/2026 12:25 PM Download/Print Delete View Data Export Format" [ref=e111]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N12907A23912" [ref=e113]: Derived_Score_AutoFilter_Template_N12907A23912
                    - gridcell "Status Completed" [ref=e115]: Completed
                    - gridcell "Date Created 09/16/2026 12:25 PM" [ref=e117]: 09/16/2026 12:25 PM
                    - generic [ref=e118]:
                      - gridcell "Download/Print" [ref=e120] [cursor=pointer]
                      - gridcell "Delete" [ref=e122] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e123] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N62569A42137 Status Completed Date Created 09/16/2026 12:21 PM Download/Print Delete View Data Export Format" [ref=e125]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N62569A42137" [ref=e127]: Derived_Score_AutoFilter_Template_N62569A42137
                    - gridcell "Status Completed" [ref=e129]: Completed
                    - gridcell "Date Created 09/16/2026 12:21 PM" [ref=e131]: 09/16/2026 12:21 PM
                    - generic [ref=e132]:
                      - gridcell "Download/Print" [ref=e134] [cursor=pointer]
                      - gridcell "Delete" [ref=e136] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e137] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N49763A46517 Status Completed Date Created 09/16/2026 12:16 PM Download/Print Delete View Data Export Format" [ref=e139]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N49763A46517" [ref=e141]: Derived_Score_AutoFilter_Template_N49763A46517
                    - gridcell "Status Completed" [ref=e143]: Completed
                    - gridcell "Date Created 09/16/2026 12:16 PM" [ref=e145]: 09/16/2026 12:16 PM
                    - generic [ref=e146]:
                      - gridcell "Download/Print" [ref=e148] [cursor=pointer]
                      - gridcell "Delete" [ref=e150] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e151] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N40114A36585 Status Completed Date Created 09/16/2026 12:08 PM Download/Print Delete View Data Export Format" [ref=e153]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N40114A36585" [ref=e155]: Derived_Score_AutoFilter_Template_N40114A36585
                    - gridcell "Status Completed" [ref=e157]: Completed
                    - gridcell "Date Created 09/16/2026 12:08 PM" [ref=e159]: 09/16/2026 12:08 PM
                    - generic [ref=e160]:
                      - gridcell "Download/Print" [ref=e162] [cursor=pointer]
                      - gridcell "Delete" [ref=e164] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e165] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N4442A2363 Status Completed Date Created 08/27/2026 09:58 AM Download/Print Delete View Data Export Format" [ref=e167]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N4442A2363" [ref=e169]: Derived_Score_AutoFilter_Template_N4442A2363
                    - gridcell "Status Completed" [ref=e171]: Completed
                    - gridcell "Date Created 08/27/2026 09:58 AM" [ref=e173]: 08/27/2026 09:58 AM
                    - generic [ref=e174]:
                      - gridcell "Download/Print" [ref=e176] [cursor=pointer]
                      - gridcell "Delete" [ref=e178] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e179] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N86690A93210 Status Completed Date Created 08/27/2026 09:53 AM Download/Print Delete View Data Export Format" [ref=e181]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N86690A93210" [ref=e183]: Derived_Score_AutoFilter_Template_N86690A93210
                    - gridcell "Status Completed" [ref=e185]: Completed
                    - gridcell "Date Created 08/27/2026 09:53 AM" [ref=e187]: 08/27/2026 09:53 AM
                    - generic [ref=e188]:
                      - gridcell "Download/Print" [ref=e190] [cursor=pointer]
                      - gridcell "Delete" [ref=e192] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e193] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N95240A52204 Status Completed Date Created 08/27/2026 09:48 AM Download/Print Delete View Data Export Format" [ref=e195]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N95240A52204" [ref=e197]: Derived_Score_AutoFilter_Template_N95240A52204
                    - gridcell "Status Completed" [ref=e199]: Completed
                    - gridcell "Date Created 08/27/2026 09:48 AM" [ref=e201]: 08/27/2026 09:48 AM
                    - generic [ref=e202]:
                      - gridcell "Download/Print" [ref=e204] [cursor=pointer]
                      - gridcell "Delete" [ref=e206] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e207] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N60455A40772 Status Completed Date Created 08/27/2026 09:40 AM Download/Print Delete View Data Export Format" [ref=e209]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N60455A40772" [ref=e211]: Derived_Score_AutoFilter_Template_N60455A40772
                    - gridcell "Status Completed" [ref=e213]: Completed
                    - gridcell "Date Created 08/27/2026 09:40 AM" [ref=e215]: 08/27/2026 09:40 AM
                    - generic [ref=e216]:
                      - gridcell "Download/Print" [ref=e218] [cursor=pointer]
                      - gridcell "Delete" [ref=e220] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e221] [cursor=pointer]
      - contentinfo [ref=e223]:
        - generic [ref=e224]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e225] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e226]
        - generic [ref=e227]:
          - link "Riverside Insights Facebook" [ref=e228] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e229]
          - link "Riverside Insights Twitter" [ref=e230] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e231]
          - link "Riverside Insights LinkedIn" [ref=e232] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e233]
          - link "Riverside Insights Instagram" [ref=e234] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e235]
        - generic [ref=e236]:
          - button "Leave Feedback" [ref=e237] [cursor=pointer]
          - generic [ref=e238]: "|"
          - link "Terms of Use" [ref=e239] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e240]: "|"
          - link "Privacy Policy" [ref=e241] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e242]: Footer region end
  - region "Chat Widget" [ref=e243]:
    - iframe [ref=e244]:
      - button "Open live chat" [ref=f2e5]:
        - img [ref=f2e8]
        - img [ref=f2e15]
    - generic "Drag" [ref=e245]:
      - img [ref=e246]
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
  13  |     await this.page.waitForTimeout(10000); // Additional wait to agree terms popup,appears after login tile little late which sometimes can be seen after clicking on the WJ5 tile
  14  |   }
  15  | 
  16  |   private async safeClickWj5Tyle(
  17  |     locator: Locator,
  18  |     options = { timeout: 5000, delay: 200 },
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