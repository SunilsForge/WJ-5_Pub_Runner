# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/ORLANG_cluster_pub.spec.ts >>  ORLANG cluster Derived Export Automation  >> For PICVOC - Age - All correct scenario,ORLCMP - Age - All correct scenario,ORLSMP - Age - All incorrect scenario,STYCMP - Age - All correct scenario Complete The ORLANG cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/ORLANG_cluster_pub.spec.ts:26:9

# Error details

```
Error: 38 CALP_Level ->  value from the RunTime VS downloaded file is =  Level 6 <> 

expect(received).toEqual(expected) // deep equality

Expected: "Level 6"
Received: ""
```

```
Error: 104 CALP_Level ->  value from the RunTime VS downloaded file is =  Level 6 <> 

expect(received).toEqual(expected) // deep equality

Expected: "Level 6"
Received: ""
```

```
Error: 170 CALP_Level ->  value from the RunTime VS downloaded file is =  Level 2 <> 

expect(received).toEqual(expected) // deep equality

Expected: "Level 2"
Received: ""
```

```
Error: 236 CALP_Level ->  value from the RunTime VS downloaded file is =  Level 6 <> 

expect(received).toEqual(expected) // deep equality

Expected: "Level 6"
Received: ""
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
              - heading "Hello S08PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S08PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N9171A14916 Status Completed Date Created 07/15/2026 05:20 AM Download/Print Delete View Data Export Format" [ref=e69]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N9171A14916" [ref=e71]: Derived_Score_AutoFilter_Template_N9171A14916
                    - gridcell "Status Completed" [ref=e73]: Completed
                    - gridcell "Date Created 07/15/2026 05:20 AM" [ref=e75]: 07/15/2026 05:20 AM
                    - generic [ref=e76]:
                      - gridcell "Download/Print" [active] [ref=e78] [cursor=pointer]
                      - gridcell "Delete" [ref=e80] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e81] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N35688A71466 Status Completed Date Created 07/15/2026 05:09 AM Download/Print Delete View Data Export Format" [ref=e83]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N35688A71466" [ref=e85]: Derived_Score_AutoFilter_Template_N35688A71466
                    - gridcell "Status Completed" [ref=e87]: Completed
                    - gridcell "Date Created 07/15/2026 05:09 AM" [ref=e89]: 07/15/2026 05:09 AM
                    - generic [ref=e90]:
                      - gridcell "Download/Print" [ref=e92] [cursor=pointer]
                      - gridcell "Delete" [ref=e94] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e95] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N39786A61098 Status Completed Date Created 07/15/2026 05:03 AM Download/Print Delete View Data Export Format" [ref=e97]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N39786A61098" [ref=e99]: Derived_Score_AutoFilter_Template_N39786A61098
                    - gridcell "Status Completed" [ref=e101]: Completed
                    - gridcell "Date Created 07/15/2026 05:03 AM" [ref=e103]: 07/15/2026 05:03 AM
                    - generic [ref=e104]:
                      - gridcell "Download/Print" [ref=e106] [cursor=pointer]
                      - gridcell "Delete" [ref=e108] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e109] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N2434A74806 Status Completed Date Created 07/15/2026 04:57 AM Download/Print Delete View Data Export Format" [ref=e111]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N2434A74806" [ref=e113]: Derived_Score_AutoFilter_Template_N2434A74806
                    - gridcell "Status Completed" [ref=e115]: Completed
                    - gridcell "Date Created 07/15/2026 04:57 AM" [ref=e117]: 07/15/2026 04:57 AM
                    - generic [ref=e118]:
                      - gridcell "Download/Print" [ref=e120] [cursor=pointer]
                      - gridcell "Delete" [ref=e122] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e123] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N42070A14932 Status Completed Date Created 07/15/2026 04:52 AM Download/Print Delete View Data Export Format" [ref=e125]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N42070A14932" [ref=e127]: Derived_Score_AutoFilter_Template_N42070A14932
                    - gridcell "Status Completed" [ref=e129]: Completed
                    - gridcell "Date Created 07/15/2026 04:52 AM" [ref=e131]: 07/15/2026 04:52 AM
                    - generic [ref=e132]:
                      - gridcell "Download/Print" [ref=e134] [cursor=pointer]
                      - gridcell "Delete" [ref=e136] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e137] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N50887A42254 Status Completed Date Created 06/30/2026 10:47 AM Download/Print Delete View Data Export Format" [ref=e139]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N50887A42254" [ref=e141]: Derived_Score_AutoFilter_Template_N50887A42254
                    - gridcell "Status Completed" [ref=e143]: Completed
                    - gridcell "Date Created 06/30/2026 10:47 AM" [ref=e145]: 06/30/2026 10:47 AM
                    - generic [ref=e146]:
                      - gridcell "Download/Print" [ref=e148] [cursor=pointer]
                      - gridcell "Delete" [ref=e150] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e151] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N95647A79452 Status Completed Date Created 06/30/2026 10:39 AM Download/Print Delete View Data Export Format" [ref=e153]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N95647A79452" [ref=e155]: Derived_Score_AutoFilter_Template_N95647A79452
                    - gridcell "Status Completed" [ref=e157]: Completed
                    - gridcell "Date Created 06/30/2026 10:39 AM" [ref=e159]: 06/30/2026 10:39 AM
                    - generic [ref=e160]:
                      - gridcell "Download/Print" [ref=e162] [cursor=pointer]
                      - gridcell "Delete" [ref=e164] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e165] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N70739A98368 Status Completed Date Created 06/25/2026 09:51 AM Download/Print Delete View Data Export Format" [ref=e167]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N70739A98368" [ref=e169]: Derived_Score_AutoFilter_Template_N70739A98368
                    - gridcell "Status Completed" [ref=e171]: Completed
                    - gridcell "Date Created 06/25/2026 09:51 AM" [ref=e173]: 06/25/2026 09:51 AM
                    - generic [ref=e174]:
                      - gridcell "Download/Print" [ref=e176] [cursor=pointer]
                      - gridcell "Delete" [ref=e178] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e179] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N6141A39455 Status Completed Date Created 06/25/2026 09:47 AM Download/Print Delete View Data Export Format" [ref=e181]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N6141A39455" [ref=e183]: Derived_Score_AutoFilter_Template_N6141A39455
                    - gridcell "Status Completed" [ref=e185]: Completed
                    - gridcell "Date Created 06/25/2026 09:47 AM" [ref=e187]: 06/25/2026 09:47 AM
                    - generic [ref=e188]:
                      - gridcell "Download/Print" [ref=e190] [cursor=pointer]
                      - gridcell "Delete" [ref=e192] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e193] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N30762A15266 Status Completed Date Created 06/25/2026 09:42 AM Download/Print Delete View Data Export Format" [ref=e195]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N30762A15266" [ref=e197]: Derived_Score_AutoFilter_Template_N30762A15266
                    - gridcell "Status Completed" [ref=e199]: Completed
                    - gridcell "Date Created 06/25/2026 09:42 AM" [ref=e201]: 06/25/2026 09:42 AM
                    - generic [ref=e202]:
                      - gridcell "Download/Print" [ref=e204] [cursor=pointer]
                      - gridcell "Delete" [ref=e206] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e207] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N9036A59754 Status Completed Date Created 06/25/2026 09:36 AM Download/Print Delete View Data Export Format" [ref=e209]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N9036A59754" [ref=e211]: Derived_Score_AutoFilter_Template_N9036A59754
                    - gridcell "Status Completed" [ref=e213]: Completed
                    - gridcell "Date Created 06/25/2026 09:36 AM" [ref=e215]: 06/25/2026 09:36 AM
                    - generic [ref=e216]:
                      - gridcell "Download/Print" [ref=e218] [cursor=pointer]
                      - gridcell "Delete" [ref=e220] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e221] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N21172A98252 Status Completed Date Created 06/25/2026 09:31 AM Download/Print Delete View Data Export Format" [ref=e223]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N21172A98252" [ref=e225]: Derived_Score_AutoFilter_Template_N21172A98252
                    - gridcell "Status Completed" [ref=e227]: Completed
                    - gridcell "Date Created 06/25/2026 09:31 AM" [ref=e229]: 06/25/2026 09:31 AM
                    - generic [ref=e230]:
                      - gridcell "Download/Print" [ref=e232] [cursor=pointer]
                      - gridcell "Delete" [ref=e234] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e235] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N42622A90205 Status Completed Date Created 06/25/2026 09:19 AM Download/Print Delete View Data Export Format" [ref=e237]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N42622A90205" [ref=e239]: Derived_Score_AutoFilter_Template_N42622A90205
                    - gridcell "Status Completed" [ref=e241]: Completed
                    - gridcell "Date Created 06/25/2026 09:19 AM" [ref=e243]: 06/25/2026 09:19 AM
                    - generic [ref=e244]:
                      - gridcell "Download/Print" [ref=e246] [cursor=pointer]
                      - gridcell "Delete" [ref=e248] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e249] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N44158A79183 Status Completed Date Created 06/25/2026 07:52 AM Download/Print Delete View Data Export Format" [ref=e251]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N44158A79183" [ref=e253]: Derived_Score_AutoFilter_Template_N44158A79183
                    - gridcell "Status Completed" [ref=e255]: Completed
                    - gridcell "Date Created 06/25/2026 07:52 AM" [ref=e257]: 06/25/2026 07:52 AM
                    - generic [ref=e258]:
                      - gridcell "Download/Print" [ref=e260] [cursor=pointer]
                      - gridcell "Delete" [ref=e262] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e263] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N93292A88011 Status Completed Date Created 06/25/2026 07:44 AM Download/Print Delete View Data Export Format" [ref=e265]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N93292A88011" [ref=e267]: Derived_Score_AutoFilter_Template_N93292A88011
                    - gridcell "Status Completed" [ref=e269]: Completed
                    - gridcell "Date Created 06/25/2026 07:44 AM" [ref=e271]: 06/25/2026 07:44 AM
                    - generic [ref=e272]:
                      - gridcell "Download/Print" [ref=e274] [cursor=pointer]
                      - gridcell "Delete" [ref=e276] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e277] [cursor=pointer]
      - contentinfo [ref=e279]:
        - generic [ref=e280]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e281] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e282]
        - generic [ref=e283]:
          - link "Riverside Insights Facebook" [ref=e284] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e285]
          - link "Riverside Insights Twitter" [ref=e286] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e287]
          - link "Riverside Insights LinkedIn" [ref=e288] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e289]
          - link "Riverside Insights Instagram" [ref=e290] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e291]
        - generic [ref=e292]:
          - button "Leave Feedback" [ref=e293] [cursor=pointer]
          - generic [ref=e294]: "|"
          - link "Terms of Use" [ref=e295] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e296]: "|"
          - link "Privacy Policy" [ref=e297] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e298]: Footer region end
```

# Test source

```ts
  1  | import { expect } from "../base/basePageFixtures";
  2  | 
  3  | let slNo = 1;
  4  | 
  5  | export const softAssertPrint = function (
  6  |   firstVal: string | number,
  7  |   secondVal: string | number,
  8  |   param: string,
  9  | ) {
  10 |   expect
  11 |     .soft(
  12 |         String(secondVal).trim(),
  13 |       `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <> ${secondVal}`,
  14 |     )
> 15 |       .toEqual(String(firstVal).trim());
     |        ^ Error: 236 CALP_Level ->  value from the RunTime VS downloaded file is =  Level 6 <> 
  16 |   console.log(
  17 |     `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <> ${secondVal}`,
  18 |   );
  19 |   slNo++;
  20 | };
  21 | export const softAssertAndPrint = function (
  22 |     firstVal: string | number, // runtime
  23 |     secondVal: string | number, // txt file
  24 |     param: string,
  25 | ) {
  26 |   const firstValue: number = Number(firstVal.toString().match(/\d+/g));
  27 |   const secondValue: number = Number(secondVal.toString().match(/\d+/g));
  28 |   expect
  29 |       .soft(
  30 |           Math.abs(secondValue - firstValue),
  31 |           `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <~> ${secondVal}`,
  32 |       )
  33 |       .toBeLessThanOrEqual(1);
  34 |   console.log(
  35 |       `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <~> ${secondVal}`,
  36 |   );
  37 |   slNo++;
  38 | };
  39 | 
  40 | export const softAssertArray = function (
  41 |   firstVal: string[] | number[],
  42 |   secondVal: string[] | number[],
  43 |   param: string,
  44 | ) {
  45 |   // Map elements to string, then trim and sort
  46 |   const firstArray = firstVal.map((item) => String(item).trim()).sort();
  47 |   const secondArray = secondVal.map((item) => String(item).trim()).sort();
  48 |   expect
  49 |     .soft(
  50 |       firstArray,
  51 |         `${slNo} : ${param} ->  value from the RunTime VS downloaded file is =  ${JSON.stringify(firstVal)} <> ${JSON.stringify(secondVal)}`,
  52 |     )
  53 |     .toEqual(secondArray);
  54 |   console.log(
  55 |       `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${JSON.stringify(firstVal)} <> ${JSON.stringify(secondVal)}`,
  56 |   );
  57 |   slNo++;
  58 | };
```