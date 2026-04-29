# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/MTHBRF_cluster_pub.spec.ts >>  MTHBRF cluster Derived Export Automation  >> For CALC - K12 - Attain Quick Basal Ceiling scenario,APPROB - K12 - All incorrect scenario Complete The MTHBRF cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/MTHBRF_cluster_pub.spec.ts:26:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'Examinees\']')

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
              - heading "Hello S07PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S07PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N60296A36275 Status Completed Date Created 04/29/2026 01:03 PM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N60296A36275" [ref=e68]: Derived_Score_AutoFilter_Template_N60296A36275
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 04/29/2026 01:03 PM" [ref=e72]: 04/29/2026 01:03 PM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N99207A44218 Status Completed Date Created 04/29/2026 12:57 PM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N99207A44218" [ref=e82]: Derived_Score_AutoFilter_Template_N99207A44218
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 04/29/2026 12:57 PM" [ref=e86]: 04/29/2026 12:57 PM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N17178A43522 Status Completed Date Created 04/29/2026 12:51 PM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N17178A43522" [ref=e96]: Derived_Score_AutoFilter_Template_N17178A43522
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 04/29/2026 12:51 PM" [ref=e100]: 04/29/2026 12:51 PM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N94160A4258 Status Completed Date Created 04/29/2026 10:26 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N94160A4258" [ref=e110]: Derived_Score_AutoFilter_Template_N94160A4258
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 04/29/2026 10:26 AM" [ref=e114]: 04/29/2026 10:26 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N68611A78323 Status Completed Date Created 04/29/2026 10:21 AM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N68611A78323" [ref=e124]: Derived_Score_AutoFilter_Template_N68611A78323
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/29/2026 10:21 AM" [ref=e128]: 04/29/2026 10:21 AM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N33152A99949 Status Completed Date Created 04/29/2026 10:15 AM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N33152A99949" [ref=e138]: Derived_Score_AutoFilter_Template_N33152A99949
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/29/2026 10:15 AM" [ref=e142]: 04/29/2026 10:15 AM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N39976A19649 Status Completed Date Created 04/29/2026 10:08 AM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N39976A19649" [ref=e152]: Derived_Score_AutoFilter_Template_N39976A19649
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/29/2026 10:08 AM" [ref=e156]: 04/29/2026 10:08 AM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N91556A73472 Status Completed Date Created 04/29/2026 07:07 AM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N91556A73472" [ref=e166]: Derived_Score_AutoFilter_Template_N91556A73472
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/29/2026 07:07 AM" [ref=e170]: 04/29/2026 07:07 AM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N6980A95260 Status Completed Date Created 04/29/2026 07:02 AM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N6980A95260" [ref=e180]: Derived_Score_AutoFilter_Template_N6980A95260
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/29/2026 07:02 AM" [ref=e184]: 04/29/2026 07:02 AM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N98295A5821 Status Completed Date Created 04/27/2026 11:32 AM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N98295A5821" [ref=e194]: Derived_Score_AutoFilter_Template_N98295A5821
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/27/2026 11:32 AM" [ref=e198]: 04/27/2026 11:32 AM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N83354A95630 Status Completed Date Created 04/27/2026 11:28 AM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N83354A95630" [ref=e208]: Derived_Score_AutoFilter_Template_N83354A95630
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/27/2026 11:28 AM" [ref=e212]: 04/27/2026 11:28 AM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N17484A13702 Status Completed Date Created 04/27/2026 11:22 AM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N17484A13702" [ref=e222]: Derived_Score_AutoFilter_Template_N17484A13702
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/27/2026 11:22 AM" [ref=e226]: 04/27/2026 11:22 AM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N25149A39227 Status Completed Date Created 04/27/2026 11:15 AM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N25149A39227" [ref=e236]: Derived_Score_AutoFilter_Template_N25149A39227
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/27/2026 11:15 AM" [ref=e240]: 04/27/2026 11:15 AM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N40675A99289 Status Completed Date Created 04/24/2026 07:15 AM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N40675A99289" [ref=e250]: Derived_Score_AutoFilter_Template_N40675A99289
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/24/2026 07:15 AM" [ref=e254]: 04/24/2026 07:15 AM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N98482A46096 Status Completed Date Created 04/24/2026 07:10 AM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N98482A46096" [ref=e264]: Derived_Score_AutoFilter_Template_N98482A46096
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/24/2026 07:10 AM" [ref=e268]: 04/24/2026 07:10 AM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N36637A46614 Status Completed Date Created 04/23/2026 01:18 PM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N36637A46614" [ref=e278]: Derived_Score_AutoFilter_Template_N36637A46614
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/23/2026 01:18 PM" [ref=e282]: 04/23/2026 01:18 PM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N85410A36533 Status Completed Date Created 04/23/2026 01:13 PM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N85410A36533" [ref=e292]: Derived_Score_AutoFilter_Template_N85410A36533
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 04/23/2026 01:13 PM" [ref=e296]: 04/23/2026 01:13 PM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N94202A23091 Status Completed Date Created 04/03/2026 01:06 AM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N94202A23091" [ref=e306]: Derived_Score_AutoFilter_Template_N94202A23091
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 04/03/2026 01:06 AM" [ref=e310]: 04/03/2026 01:06 AM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N38512A92421 Status Completed Date Created 04/03/2026 12:59 AM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N38512A92421" [ref=e320]: Derived_Score_AutoFilter_Template_N38512A92421
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 04/03/2026 12:59 AM" [ref=e324]: 04/03/2026 12:59 AM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N75710A42550 Status Completed Date Created 03/31/2026 01:28 PM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N75710A42550" [ref=e334]: Derived_Score_AutoFilter_Template_N75710A42550
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 03/31/2026 01:28 PM" [ref=e338]: 03/31/2026 01:28 PM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N32314A15848 Status Completed Date Created 03/31/2026 01:25 PM Download/Print Delete View Data Export Format" [ref=e346]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N32314A15848" [ref=e348]: Derived_Score_AutoFilter_Template_N32314A15848
                    - gridcell "Status Completed" [ref=e350]: Completed
                    - gridcell "Date Created 03/31/2026 01:25 PM" [ref=e352]: 03/31/2026 01:25 PM
                    - generic [ref=e353]:
                      - gridcell "Download/Print" [ref=e355] [cursor=pointer]
                      - gridcell "Delete" [ref=e357] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e358] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N10141A96023 Status Completed Date Created 03/31/2026 01:19 PM Download/Print Delete View Data Export Format" [ref=e360]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N10141A96023" [ref=e362]: Derived_Score_AutoFilter_Template_N10141A96023
                    - gridcell "Status Completed" [ref=e364]: Completed
                    - gridcell "Date Created 03/31/2026 01:19 PM" [ref=e366]: 03/31/2026 01:19 PM
                    - generic [ref=e367]:
                      - gridcell "Download/Print" [ref=e369] [cursor=pointer]
                      - gridcell "Delete" [ref=e371] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e372] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N24581A64082 Status Completed Date Created 03/31/2026 01:13 PM Download/Print Delete View Data Export Format" [ref=e374]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N24581A64082" [ref=e376]: Derived_Score_AutoFilter_Template_N24581A64082
                    - gridcell "Status Completed" [ref=e378]: Completed
                    - gridcell "Date Created 03/31/2026 01:13 PM" [ref=e380]: 03/31/2026 01:13 PM
                    - generic [ref=e381]:
                      - gridcell "Download/Print" [ref=e383] [cursor=pointer]
                      - gridcell "Delete" [ref=e385] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e386] [cursor=pointer]
      - contentinfo [ref=e388]:
        - generic [ref=e389]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e390] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/?__hstc=20581799.8448c372ff7cc3438c06a2704224b1b4.1777485464226.1777485464226.1777485464226.1&__hssc=20581799.2.1777485464227&__hsfp=ae83aed9a53ec42218e111e5400f5a03
          - img "Riverside Insights Website" [ref=e391]
        - generic [ref=e392]:
          - link "Riverside Insights Facebook" [ref=e393] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e394]
          - link "Riverside Insights Twitter" [ref=e395] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e396]
          - link "Riverside Insights LinkedIn" [ref=e397] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e398]
          - link "Riverside Insights Instagram" [ref=e399] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e400]
        - generic [ref=e401]:
          - button "Leave Feedback" [ref=e402] [cursor=pointer]
          - generic [ref=e403]: "|"
          - link "Terms of Use" [ref=e404] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use?__hstc=20581799.8448c372ff7cc3438c06a2704224b1b4.1777485464226.1777485464226.1777485464226.1&__hssc=20581799.2.1777485464227&__hsfp=ae83aed9a53ec42218e111e5400f5a03
          - generic [ref=e405]: "|"
          - link "Privacy Policy" [ref=e406] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy?__hstc=20581799.8448c372ff7cc3438c06a2704224b1b4.1777485464226.1777485464226.1777485464226.1&__hssc=20581799.2.1777485464227&__hsfp=ae83aed9a53ec42218e111e5400f5a03
        - generic [ref=e407]: Footer region end
  - region "Chat Widget" [ref=e408]:
    - iframe [ref=e409]:
      - button "Open live chat" [ref=f6e5]:
        - img [ref=f6e8]
        - img [ref=f6e15]
    - generic "Drag" [ref=e410]:
      - img [ref=e411]
```

# Test source

```ts
  67  | 
  68  | 
  69  |   private readonly examineeID: Locator;
  70  |   private readonly examineeGenderIdentity: Locator;
  71  |   private readonly ExaminerloadingIcon: Locator;
  72  |   private readonly launchAssessmentButton: Locator;
  73  |   private readonly searchInputBox: Locator;
  74  |   private readonly startWithoutExaminee: Locator;
  75  | 
  76  |   private wj5examineePage: wj5ExamineePage;
  77  | 
  78  |   constructor(page: Page) {
  79  |     super(page);
  80  |     this.utils = new Utils(this.page);
  81  |     this.reqColumnsMap = new Map();
  82  |     this.reqWlookUpMap = new Map();
  83  |     this.$WlookUp = 0;
  84  |     this.sessionID = this.sessionID;
  85  | 
  86  | 
  87  |     this.addExamonerPlusButton = this.page.getByRole("button", {
  88  |       name: "add examiner",
  89  |     });
  90  |     this.inProgressIcon = this.page.locator(
  91  |       "//div[@aria-label='In Progress Icon']",
  92  |     );
  93  |     this.zoomPageInIcon = this.page.locator(
  94  |       "//button[@aria-label='Icon Expand']",
  95  |     );
  96  |     this.recentExaminee = this.page
  97  |       .locator("//button[@class='link-button examinee-name']")
  98  |       .first();
  99  |     this.confirmButton = this.page.locator("//button[text()='Confirm']");
  100 |     this.launchTestIcon = this.page
  101 |       .locator("//button[@class='plain-button launch-test-icon']")
  102 |       .first();
  103 |     this.studentLink = this.page.locator("//a[@class='link-button']");
  104 |     this.mainMenuExamineeManagement = this.page.locator(
  105 |       "//button[@aria-label = 'Examinee Management']",
  106 |     );
  107 |     this.Location = this.page.getByText(
  108 |       "Location*,RequiredSelect examinee location",
  109 |     );
  110 |     this.addTestAssignmentBtn = this.page.getByRole("button", {
  111 |       name: "Add Test Assignment Add Test Assignment",
  112 |     });
  113 |     this.nextBtn = this.page.locator("//button[text()='Next']");
  114 |     this.ExaminerDd = this.page.getByPlaceholder("Select Examiner");
  115 |     this.ExamineeDd = this.page.getByPlaceholder(
  116 |       "Search by Examinee Name or ID",
  117 |     );
  118 |     this.testBlockDd = this.page.getByPlaceholder("Select Test Block");
  119 | 
  120 | 
  121 |     // @ts-ignore
  122 |     this.searchIcon = this.page.getByTitle("Search Icon");
  123 |     // @ts-ignore
  124 |     this.closeButton = this.page.locator("//button[text()='Close']");
  125 |     // @ts-ignore
  126 |     this.dashboardTab = this.page.locator("button[role='menuitem']:text('Dashboard')");
  127 |     // @ts-ignore
  128 |     this.myTestAssignmentsRow = this.page.locator(
  129 |       "div[class*='TestAssignmentModule'] button[class$='rowButton']",
  130 |     );
  131 |     this.myTestAssignments = this.page.getByRole("heading", {
  132 |       name: "My Test Assignments",
  133 |     });
  134 |     this.chatbotCloseIcon = this.page
  135 |       .locator('[data-test-id="chat-widget-iframe"]')
  136 |       .contentFrame()
  137 |       .locator('[data-test-id="ai-welcome-msg-close-button"]');
  138 | 
  139 | 
  140 |     this.examineeID = this.examineeId;
  141 |     this.examineeGenderIdentity = this.examineeGender;
  142 |     this.ExaminerloadingIcon = this.examinerLoadingIcon;
  143 |     this.launchAssessmentButton = this.launchAssignmentButton;
  144 |     this.searchInputBox = this.searchExamineeTestSetNameAndEducation;
  145 |     this.startWithoutExaminee = this.startWithoutExamineeButton;
  146 |   }
  147 | 
  148 |   static examineeID: string;
  149 | 
  150 |   async addNewExamineeAndUpdateTheTemplate(
  151 |     url: string,
  152 |     age: number,
  153 |     location?: string,
  154 |     testStemForm?: string,
  155 |     normBasis?: string,
  156 |     examineeGrade?: string,
  157 |   ): Promise<{
  158 |     examinee_ID: string;
  159 |     dateOfBirth: string;
  160 |   }> {
  161 |     console.log(`Trying to add an Examinee \n`);
  162 | 
  163 |     await this.page.bringToFront();
  164 |     await this.page.waitForTimeout(3000); // added more wait to tackle the examinee loading issue
  165 | 
  166 |     this.waitForLoaderToDisappear();
> 167 |     await this.examinees.click();
      |                          ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  168 |     this.waitForLoaderToDisappear();
  169 | 
  170 |     await this.page.waitForTimeout(3000); // facing issues at ad examinee even after the API check so added the time
  171 | 
  172 |     await this.addExaminee.click();
  173 |     await this.loadingIcon.waitFor({ state: "hidden" });
  174 | 
  175 |     const firstName: string = faker.person.firstName();
  176 |     await this.examineeFirstName.fill(firstName);
  177 |     const dateOfBirth = (await this.utils.getTheDOBYearsBack(age)).toString();
  178 |     await this.examineeDateOfBirth.fill(dateOfBirth);
  179 |     await this.selectGender("Male");
  180 |     Wj5DashboardPage.examineeID = `N${await this.utils.randomNumberGenerateBetween(
  181 |       1,
  182 |       99999,
  183 |     )}A${await this.utils.randomNumberGenerateBetween(1, 99999)}`;
  184 |     await this.examineeID.fill(Wj5DashboardPage.examineeID);
  185 |     await this.examineeLastName.fill(Wj5DashboardPage.examineeID);
  186 |     console.log("Examinee ID", Wj5DashboardPage.examineeID);
  187 | 
  188 |     const exportType = getCurrentExportType();
  189 |     switch (exportType) {
  190 |       case "derived":
  191 |         await derivedScoreFilterTemplate_CSVfileWriter(
  192 |           Wj5DashboardPage.examineeID,
  193 |           normBasis,
  194 |           examineeGrade,
  195 |         );
  196 |         break;
  197 |       case "wLookUp":
  198 |         await scoreDataFilterTemplate_CSVfileWriter(
  199 |           Wj5DashboardPage.examineeID,
  200 |         );
  201 |         break;
  202 |       case "testData":
  203 |         await testDataExportFilterTemplate_CSVfileWriter(
  204 |           Wj5DashboardPage.examineeID,
  205 |           testStemForm,
  206 |         );
  207 |     }
  208 | 
  209 |     await this.closeChatBot();
  210 | 
  211 |     if (await this.examineeSaveButton.isEnabled({ timeout: 3000 })) {
  212 |       await this.saveExaminee();
  213 |     } else {
  214 |       console.error("Save Button IS Not Enabled");
  215 |     }
  216 |     console.log(
  217 |       `Successfully added an Examinee  ID =${Wj5DashboardPage.examineeID} FirstName=${firstName} LastName =${Wj5DashboardPage.examineeID} Age = ${dateOfBirth}`,
  218 |     );
  219 | 
  220 |     return {
  221 |       examinee_ID: Wj5DashboardPage.examineeID,
  222 |       dateOfBirth,
  223 |     };
  224 |   }
  225 | 
  226 |   async addNewExaminee(
  227 |     url: string,
  228 |     age: number,
  229 |     gender?: string,
  230 |     examineeCount?: number,
  231 |   ): Promise<{
  232 |     examinee_ID: string;
  233 |     dateOfBirth: string;
  234 |     examineelastNameAndFirstName: string;
  235 |   }> {
  236 |     console.log(`Trying to add ${examineeCount} Examinee \n`);
  237 | 
  238 |     await this.page.bringToFront();
  239 |     await this.page.waitForTimeout(3000); // added more wait to tackle the examinee loading issue
  240 | 
  241 |     this.waitForLoaderToDisappear();
  242 |     await this.examinees.click();
  243 |     this.waitForLoaderToDisappear();
  244 | 
  245 |     await this.page.waitForTimeout(3000); // facing issues at ad examinee even after the API check so added the time
  246 | 
  247 |     await this.addExaminee.click();
  248 |     await this.loadingIcon.waitFor({ state: "hidden" });
  249 |     const firstName: string = faker.person.firstName();
  250 |     await this.examineeFirstName.fill(firstName);
  251 |     const dateOfBirth = (await this.utils.getTheDOBYearsBack(age)).toString();
  252 |     await this.examineeDateOfBirth.fill(dateOfBirth);
  253 |     if (gender) {
  254 |       await this.selectGender(gender);
  255 |     } else {
  256 |       await this.selectGender("Male");
  257 |     }
  258 |     Wj5DashboardPage.examineeID = `N${await this.utils.randomNumberGenerateBetween(
  259 |       1,
  260 |       99999,
  261 |     )}A${await this.utils.randomNumberGenerateBetween(1, 99999)}`;
  262 |     await this.examineeID.fill(Wj5DashboardPage.examineeID);
  263 |     await this.examineeLastName.fill(Wj5DashboardPage.examineeID);
  264 |     console.log("Examinee ID", Wj5DashboardPage.examineeID);
  265 | 
  266 |     await this.closeChatBot();
  267 | 
```