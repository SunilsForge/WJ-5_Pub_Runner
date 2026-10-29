# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/GR_cluster_pub.spec.ts >>  GR cluster Derived Export Automation  >> For SEMRET - K12 - All correct scenario,PHNRET - K12 - All correct scenario Complete The GR cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/GR_cluster_pub.spec.ts:26:9

# Error details

```
Error: 1827 EDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-29"
Received: "2026-10-28"
```

```
Error: 1828 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-29"
Received: "2026-10-28"
```

```
Error: 1893 EDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-29"
Received: "2026-10-28"
```

```
Error: 1894 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-29"
Received: "2026-10-28"
```

```
Error: 1960 EDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-29"
Received: "2026-10-28"
```

```
Error: 1961 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-29"
Received: "2026-10-28"
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
              - heading "Hello S04PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S04PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N42859A90690 Status Completed Date Created 10/28/2026 11:59 PM Download/Print Delete View Data Export Format" [ref=e69]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N42859A90690" [ref=e71]: Derived_Score_AutoFilter_Template_N42859A90690
                    - gridcell "Status Completed" [ref=e73]: Completed
                    - gridcell "Date Created 10/28/2026 11:59 PM" [ref=e75]: 10/28/2026 11:59 PM
                    - generic [ref=e76]:
                      - gridcell "Download/Print" [active] [ref=e78] [cursor=pointer]
                      - gridcell "Delete" [ref=e80] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e81] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N63530A80887 Status Completed Date Created 10/28/2026 11:50 PM Download/Print Delete View Data Export Format" [ref=e83]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N63530A80887" [ref=e85]: Derived_Score_AutoFilter_Template_N63530A80887
                    - gridcell "Status Completed" [ref=e87]: Completed
                    - gridcell "Date Created 10/28/2026 11:50 PM" [ref=e89]: 10/28/2026 11:50 PM
                    - generic [ref=e90]:
                      - gridcell "Download/Print" [ref=e92] [cursor=pointer]
                      - gridcell "Delete" [ref=e94] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e95] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N11175A13395 Status Completed Date Created 10/28/2026 11:41 PM Download/Print Delete View Data Export Format" [ref=e97]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N11175A13395" [ref=e99]: Derived_Score_AutoFilter_Template_N11175A13395
                    - gridcell "Status Completed" [ref=e101]: Completed
                    - gridcell "Date Created 10/28/2026 11:41 PM" [ref=e103]: 10/28/2026 11:41 PM
                    - generic [ref=e104]:
                      - gridcell "Download/Print" [ref=e106] [cursor=pointer]
                      - gridcell "Delete" [ref=e108] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e109] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N8548A14859 Status Completed Date Created 10/28/2026 11:25 PM Download/Print Delete View Data Export Format" [ref=e111]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N8548A14859" [ref=e113]: Derived_Score_AutoFilter_Template_N8548A14859
                    - gridcell "Status Completed" [ref=e115]: Completed
                    - gridcell "Date Created 10/28/2026 11:25 PM" [ref=e117]: 10/28/2026 11:25 PM
                    - generic [ref=e118]:
                      - gridcell "Download/Print" [ref=e120] [cursor=pointer]
                      - gridcell "Delete" [ref=e122] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e123] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N84962A43566 Status Completed Date Created 10/12/2026 11:17 PM Download/Print Delete View Data Export Format" [ref=e125]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N84962A43566" [ref=e127]: Derived_Score_AutoFilter_Template_N84962A43566
                    - gridcell "Status Completed" [ref=e129]: Completed
                    - gridcell "Date Created 10/12/2026 11:17 PM" [ref=e131]: 10/12/2026 11:17 PM
                    - generic [ref=e132]:
                      - gridcell "Download/Print" [ref=e134] [cursor=pointer]
                      - gridcell "Delete" [ref=e136] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e137] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N65354A79832 Status Completed Date Created 10/12/2026 11:00 PM Download/Print Delete View Data Export Format" [ref=e139]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N65354A79832" [ref=e141]: Derived_Score_AutoFilter_Template_N65354A79832
                    - gridcell "Status Completed" [ref=e143]: Completed
                    - gridcell "Date Created 10/12/2026 11:00 PM" [ref=e145]: 10/12/2026 11:00 PM
                    - generic [ref=e146]:
                      - gridcell "Download/Print" [ref=e148] [cursor=pointer]
                      - gridcell "Delete" [ref=e150] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e151] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N1932A19095 Status Completed Date Created 10/12/2026 10:44 PM Download/Print Delete View Data Export Format" [ref=e153]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N1932A19095" [ref=e155]: Derived_Score_AutoFilter_Template_N1932A19095
                    - gridcell "Status Completed" [ref=e157]: Completed
                    - gridcell "Date Created 10/12/2026 10:44 PM" [ref=e159]: 10/12/2026 10:44 PM
                    - generic [ref=e160]:
                      - gridcell "Download/Print" [ref=e162] [cursor=pointer]
                      - gridcell "Delete" [ref=e164] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e165] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N13919A39106 Status Completed Date Created 10/12/2026 10:30 PM Download/Print Delete View Data Export Format" [ref=e167]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N13919A39106" [ref=e169]: Derived_Score_AutoFilter_Template_N13919A39106
                    - gridcell "Status Completed" [ref=e171]: Completed
                    - gridcell "Date Created 10/12/2026 10:30 PM" [ref=e173]: 10/12/2026 10:30 PM
                    - generic [ref=e174]:
                      - gridcell "Download/Print" [ref=e176] [cursor=pointer]
                      - gridcell "Delete" [ref=e178] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e179] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N73483A5312 Status Completed Date Created 10/12/2026 10:14 PM Download/Print Delete View Data Export Format" [ref=e181]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N73483A5312" [ref=e183]: Derived_Score_AutoFilter_Template_N73483A5312
                    - gridcell "Status Completed" [ref=e185]: Completed
                    - gridcell "Date Created 10/12/2026 10:14 PM" [ref=e187]: 10/12/2026 10:14 PM
                    - generic [ref=e188]:
                      - gridcell "Download/Print" [ref=e190] [cursor=pointer]
                      - gridcell "Delete" [ref=e192] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e193] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N96807A11367 Status Completed Date Created 10/12/2026 10:11 PM Download/Print Delete View Data Export Format" [ref=e195]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N96807A11367" [ref=e197]: Derived_Score_AutoFilter_Template_N96807A11367
                    - gridcell "Status Completed" [ref=e199]: Completed
                    - gridcell "Date Created 10/12/2026 10:11 PM" [ref=e201]: 10/12/2026 10:11 PM
                    - generic [ref=e202]:
                      - gridcell "Download/Print" [ref=e204] [cursor=pointer]
                      - gridcell "Delete" [ref=e206] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e207] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N72367A45300 Status Completed Date Created 10/01/2026 12:46 AM Download/Print Delete View Data Export Format" [ref=e209]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N72367A45300" [ref=e211]: Derived_Score_AutoFilter_Template_N72367A45300
                    - gridcell "Status Completed" [ref=e213]: Completed
                    - gridcell "Date Created 10/01/2026 12:46 AM" [ref=e215]: 10/01/2026 12:46 AM
                    - generic [ref=e216]:
                      - gridcell "Download/Print" [ref=e218] [cursor=pointer]
                      - gridcell "Delete" [ref=e220] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e221] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N27954A87652 Status Completed Date Created 10/01/2026 12:30 AM Download/Print Delete View Data Export Format" [ref=e223]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N27954A87652" [ref=e225]: Derived_Score_AutoFilter_Template_N27954A87652
                    - gridcell "Status Completed" [ref=e227]: Completed
                    - gridcell "Date Created 10/01/2026 12:30 AM" [ref=e229]: 10/01/2026 12:30 AM
                    - generic [ref=e230]:
                      - gridcell "Download/Print" [ref=e232] [cursor=pointer]
                      - gridcell "Delete" [ref=e234] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e235] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N44363A79583 Status Completed Date Created 10/01/2026 12:18 AM Download/Print Delete View Data Export Format" [ref=e237]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N44363A79583" [ref=e239]: Derived_Score_AutoFilter_Template_N44363A79583
                    - gridcell "Status Completed" [ref=e241]: Completed
                    - gridcell "Date Created 10/01/2026 12:18 AM" [ref=e243]: 10/01/2026 12:18 AM
                    - generic [ref=e244]:
                      - gridcell "Download/Print" [ref=e246] [cursor=pointer]
                      - gridcell "Delete" [ref=e248] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e249] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N78695A56817 Status Completed Date Created 10/01/2026 12:07 AM Download/Print Delete View Data Export Format" [ref=e251]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N78695A56817" [ref=e253]: Derived_Score_AutoFilter_Template_N78695A56817
                    - gridcell "Status Completed" [ref=e255]: Completed
                    - gridcell "Date Created 10/01/2026 12:07 AM" [ref=e257]: 10/01/2026 12:07 AM
                    - generic [ref=e258]:
                      - gridcell "Download/Print" [ref=e260] [cursor=pointer]
                      - gridcell "Delete" [ref=e262] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e263] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N16521A25159 Status Completed Date Created 09/30/2026 11:56 PM Download/Print Delete View Data Export Format" [ref=e265]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N16521A25159" [ref=e267]: Derived_Score_AutoFilter_Template_N16521A25159
                    - gridcell "Status Completed" [ref=e269]: Completed
                    - gridcell "Date Created 09/30/2026 11:56 PM" [ref=e271]: 09/30/2026 11:56 PM
                    - generic [ref=e272]:
                      - gridcell "Download/Print" [ref=e274] [cursor=pointer]
                      - gridcell "Delete" [ref=e276] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e277] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N14277A34752 Status Completed Date Created 09/30/2026 11:45 PM Download/Print Delete View Data Export Format" [ref=e279]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N14277A34752" [ref=e281]: Derived_Score_AutoFilter_Template_N14277A34752
                    - gridcell "Status Completed" [ref=e283]: Completed
                    - gridcell "Date Created 09/30/2026 11:45 PM" [ref=e285]: 09/30/2026 11:45 PM
                    - generic [ref=e286]:
                      - gridcell "Download/Print" [ref=e288] [cursor=pointer]
                      - gridcell "Delete" [ref=e290] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e291] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N96721A44967 Status Completed Date Created 09/30/2026 11:41 PM Download/Print Delete View Data Export Format" [ref=e293]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N96721A44967" [ref=e295]: Derived_Score_AutoFilter_Template_N96721A44967
                    - gridcell "Status Completed" [ref=e297]: Completed
                    - gridcell "Date Created 09/30/2026 11:41 PM" [ref=e299]: 09/30/2026 11:41 PM
                    - generic [ref=e300]:
                      - gridcell "Download/Print" [ref=e302] [cursor=pointer]
                      - gridcell "Delete" [ref=e304] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e305] [cursor=pointer]
      - contentinfo [ref=e307]:
        - generic [ref=e308]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e309] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e310]
        - generic [ref=e311]:
          - link "Riverside Insights Facebook" [ref=e312] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e313]
          - link "Riverside Insights Twitter" [ref=e314] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e315]
          - link "Riverside Insights LinkedIn" [ref=e316] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e317]
          - link "Riverside Insights Instagram" [ref=e318] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e319]
        - generic [ref=e320]:
          - button "Leave Feedback" [ref=e321] [cursor=pointer]
          - generic [ref=e322]: "|"
          - link "Terms of Use" [ref=e323] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e324]: "|"
          - link "Privacy Policy" [ref=e325] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e326]: Footer region end
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
     |        ^ Error: 1961 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-29 <> 2026-10-28
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