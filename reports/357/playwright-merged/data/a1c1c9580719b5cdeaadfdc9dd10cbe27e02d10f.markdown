# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: derived_scores(compounds & clusters)/MTHPRB_cluster_pub.spec.ts >>  MTHPRB cluster Derived Export Automation  >> For APPROB - K12 - All correct scenario,MTHPRB - K12 - All incorrect scenario Complete The MTHPRB cluster & generate report
- Location: src/tests/derived_scores(compounds & clusters)/MTHPRB_cluster_pub.spec.ts:26:9

# Error details

```
Error: 595 EDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-01"
Received: "2026-09-30"
```

```
Error: 596 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-01"
Received: "2026-09-30"
```

```
Error: 661 EDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-01"
Received: "2026-09-30"
```

```
Error: 662 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-01"
Received: "2026-09-30"
```

```
Error: 728 EDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-01"
Received: "2026-09-30"
```

```
Error: 729 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30

expect(received).toEqual(expected) // deep equality

Expected: "2026-10-01"
Received: "2026-09-30"
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
              - heading "Hello S07PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S07PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Derived_Score_AutoFilter_Template_N5407A13165 Status Completed Date Created 09/30/2026 11:59 PM Download/Print Delete View Data Export Format" [ref=e69]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N5407A13165" [ref=e71]: Derived_Score_AutoFilter_Template_N5407A13165
                    - gridcell "Status Completed" [ref=e73]: Completed
                    - gridcell "Date Created 09/30/2026 11:59 PM" [ref=e75]: 09/30/2026 11:59 PM
                    - generic [ref=e76]:
                      - gridcell "Download/Print" [ref=e78] [cursor=pointer]
                      - gridcell "Delete" [ref=e80] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e81] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N97562A10503 Status Completed Date Created 09/30/2026 11:54 PM Download/Print Delete View Data Export Format" [ref=e83]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N97562A10503" [ref=e85]: Derived_Score_AutoFilter_Template_N97562A10503
                    - gridcell "Status Completed" [ref=e87]: Completed
                    - gridcell "Date Created 09/30/2026 11:54 PM" [ref=e89]: 09/30/2026 11:54 PM
                    - generic [ref=e90]:
                      - gridcell "Download/Print" [ref=e92] [cursor=pointer]
                      - gridcell "Delete" [ref=e94] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e95] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N73797A15089 Status Completed Date Created 09/30/2026 11:49 PM Download/Print Delete View Data Export Format" [ref=e97]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N73797A15089" [ref=e99]: Derived_Score_AutoFilter_Template_N73797A15089
                    - gridcell "Status Completed" [ref=e101]: Completed
                    - gridcell "Date Created 09/30/2026 11:49 PM" [ref=e103]: 09/30/2026 11:49 PM
                    - generic [ref=e104]:
                      - gridcell "Download/Print" [ref=e106] [cursor=pointer]
                      - gridcell "Delete" [ref=e108] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e109] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N6477A32608 Status Completed Date Created 09/30/2026 11:45 PM Download/Print Delete View Data Export Format" [ref=e111]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N6477A32608" [ref=e113]: Derived_Score_AutoFilter_Template_N6477A32608
                    - gridcell "Status Completed" [ref=e115]: Completed
                    - gridcell "Date Created 09/30/2026 11:45 PM" [ref=e117]: 09/30/2026 11:45 PM
                    - generic [ref=e118]:
                      - gridcell "Download/Print" [ref=e120] [cursor=pointer]
                      - gridcell "Delete" [ref=e122] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e123] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N96946A51333 Status Completed Date Created 09/28/2026 08:32 AM Download/Print Delete View Data Export Format" [ref=e125]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N96946A51333" [ref=e127]: Derived_Score_AutoFilter_Template_N96946A51333
                    - gridcell "Status Completed" [ref=e129]: Completed
                    - gridcell "Date Created 09/28/2026 08:32 AM" [ref=e131]: 09/28/2026 08:32 AM
                    - generic [ref=e132]:
                      - gridcell "Download/Print" [ref=e134] [cursor=pointer]
                      - gridcell "Delete" [ref=e136] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e137] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N66247A73992 Status Completed Date Created 09/28/2026 08:28 AM Download/Print Delete View Data Export Format" [ref=e139]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N66247A73992" [ref=e141]: Derived_Score_AutoFilter_Template_N66247A73992
                    - gridcell "Status Completed" [ref=e143]: Completed
                    - gridcell "Date Created 09/28/2026 08:28 AM" [ref=e145]: 09/28/2026 08:28 AM
                    - generic [ref=e146]:
                      - gridcell "Download/Print" [ref=e148] [cursor=pointer]
                      - gridcell "Delete" [ref=e150] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e151] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N97028A46273 Status Completed Date Created 09/28/2026 06:30 AM Download/Print Delete View Data Export Format" [ref=e153]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N97028A46273" [ref=e155]: Derived_Score_AutoFilter_Template_N97028A46273
                    - gridcell "Status Completed" [ref=e157]: Completed
                    - gridcell "Date Created 09/28/2026 06:30 AM" [ref=e159]: 09/28/2026 06:30 AM
                    - generic [ref=e160]:
                      - gridcell "Download/Print" [ref=e162] [cursor=pointer]
                      - gridcell "Delete" [ref=e164] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e165] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N4045A90256 Status Completed Date Created 09/28/2026 06:22 AM Download/Print Delete View Data Export Format" [ref=e167]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N4045A90256" [ref=e169]: Derived_Score_AutoFilter_Template_N4045A90256
                    - gridcell "Status Completed" [ref=e171]: Completed
                    - gridcell "Date Created 09/28/2026 06:22 AM" [ref=e173]: 09/28/2026 06:22 AM
                    - generic [ref=e174]:
                      - gridcell "Download/Print" [ref=e176] [cursor=pointer]
                      - gridcell "Delete" [ref=e178] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e179] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N20881A30169 Status Completed Date Created 09/28/2026 06:14 AM Download/Print Delete View Data Export Format" [ref=e181]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N20881A30169" [ref=e183]: Derived_Score_AutoFilter_Template_N20881A30169
                    - gridcell "Status Completed" [ref=e185]: Completed
                    - gridcell "Date Created 09/28/2026 06:14 AM" [ref=e187]: 09/28/2026 06:14 AM
                    - generic [ref=e188]:
                      - gridcell "Download/Print" [ref=e190] [cursor=pointer]
                      - gridcell "Delete" [ref=e192] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e193] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N63364A47189 Status Completed Date Created 09/28/2026 06:04 AM Download/Print Delete View Data Export Format" [ref=e195]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N63364A47189" [ref=e197]: Derived_Score_AutoFilter_Template_N63364A47189
                    - gridcell "Status Completed" [ref=e199]: Completed
                    - gridcell "Date Created 09/28/2026 06:04 AM" [ref=e201]: 09/28/2026 06:04 AM
                    - generic [ref=e202]:
                      - gridcell "Download/Print" [ref=e204] [cursor=pointer]
                      - gridcell "Delete" [ref=e206] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e207] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N58712A35456 Status Completed Date Created 09/17/2026 12:20 AM Download/Print Delete View Data Export Format" [ref=e209]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N58712A35456" [ref=e211]: Derived_Score_AutoFilter_Template_N58712A35456
                    - gridcell "Status Completed" [ref=e213]: Completed
                    - gridcell "Date Created 09/17/2026 12:20 AM" [ref=e215]: 09/17/2026 12:20 AM
                    - generic [ref=e216]:
                      - gridcell "Download/Print" [ref=e218] [cursor=pointer]
                      - gridcell "Delete" [ref=e220] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e221] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N53946A43461 Status Completed Date Created 09/17/2026 12:15 AM Download/Print Delete View Data Export Format" [ref=e223]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N53946A43461" [ref=e225]: Derived_Score_AutoFilter_Template_N53946A43461
                    - gridcell "Status Completed" [ref=e227]: Completed
                    - gridcell "Date Created 09/17/2026 12:15 AM" [ref=e229]: 09/17/2026 12:15 AM
                    - generic [ref=e230]:
                      - gridcell "Download/Print" [ref=e232] [cursor=pointer]
                      - gridcell "Delete" [ref=e234] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e235] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N574A29258 Status Completed Date Created 09/17/2026 12:10 AM Download/Print Delete View Data Export Format" [ref=e237]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N574A29258" [ref=e239]: Derived_Score_AutoFilter_Template_N574A29258
                    - gridcell "Status Completed" [ref=e241]: Completed
                    - gridcell "Date Created 09/17/2026 12:10 AM" [ref=e243]: 09/17/2026 12:10 AM
                    - generic [ref=e244]:
                      - gridcell "Download/Print" [ref=e246] [cursor=pointer]
                      - gridcell "Delete" [ref=e248] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e249] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N57702A29496 Status Completed Date Created 09/17/2026 12:06 AM Download/Print Delete View Data Export Format" [ref=e251]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N57702A29496" [ref=e253]: Derived_Score_AutoFilter_Template_N57702A29496
                    - gridcell "Status Completed" [ref=e255]: Completed
                    - gridcell "Date Created 09/17/2026 12:06 AM" [ref=e257]: 09/17/2026 12:06 AM
                    - generic [ref=e258]:
                      - gridcell "Download/Print" [ref=e260] [cursor=pointer]
                      - gridcell "Delete" [ref=e262] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e263] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N86408A83253 Status Completed Date Created 09/16/2026 05:20 PM Download/Print Delete View Data Export Format" [ref=e265]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N86408A83253" [ref=e267]: Derived_Score_AutoFilter_Template_N86408A83253
                    - gridcell "Status Completed" [ref=e269]: Completed
                    - gridcell "Date Created 09/16/2026 05:20 PM" [ref=e271]: 09/16/2026 05:20 PM
                    - generic [ref=e272]:
                      - gridcell "Download/Print" [ref=e274] [cursor=pointer]
                      - gridcell "Delete" [ref=e276] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e277] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N89694A93162 Status Completed Date Created 09/11/2026 12:48 AM Download/Print Delete View Data Export Format" [ref=e279]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N89694A93162" [ref=e281]: Derived_Score_AutoFilter_Template_N89694A93162
                    - gridcell "Status Completed" [ref=e283]: Completed
                    - gridcell "Date Created 09/11/2026 12:48 AM" [ref=e285]: 09/11/2026 12:48 AM
                    - generic [ref=e286]:
                      - gridcell "Download/Print" [ref=e288] [cursor=pointer]
                      - gridcell "Delete" [ref=e290] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e291] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N86408A83253 Status Completed Date Created 09/11/2026 12:38 AM Download/Print Delete View Data Export Format" [ref=e293]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N86408A83253" [ref=e295]: Derived_Score_AutoFilter_Template_N86408A83253
                    - gridcell "Status Completed" [ref=e297]: Completed
                    - gridcell "Date Created 09/11/2026 12:38 AM" [ref=e299]: 09/11/2026 12:38 AM
                    - generic [ref=e300]:
                      - gridcell "Download/Print" [ref=e302] [cursor=pointer]
                      - gridcell "Delete" [ref=e304] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e305] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N79301A55227 Status Completed Date Created 09/11/2026 12:26 AM Download/Print Delete View Data Export Format" [ref=e307]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N79301A55227" [ref=e309]: Derived_Score_AutoFilter_Template_N79301A55227
                    - gridcell "Status Completed" [ref=e311]: Completed
                    - gridcell "Date Created 09/11/2026 12:26 AM" [ref=e313]: 09/11/2026 12:26 AM
                    - generic [ref=e314]:
                      - gridcell "Download/Print" [ref=e316] [cursor=pointer]
                      - gridcell "Delete" [ref=e318] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e319] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N7601A15116 Status Completed Date Created 09/11/2026 12:14 AM Download/Print Delete View Data Export Format" [ref=e321]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N7601A15116" [ref=e323]: Derived_Score_AutoFilter_Template_N7601A15116
                    - gridcell "Status Completed" [ref=e325]: Completed
                    - gridcell "Date Created 09/11/2026 12:14 AM" [ref=e327]: 09/11/2026 12:14 AM
                    - generic [ref=e328]:
                      - gridcell "Download/Print" [ref=e330] [cursor=pointer]
                      - gridcell "Delete" [ref=e332] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e333] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N82292A60185 Status Completed Date Created 09/03/2026 01:05 AM Download/Print Delete View Data Export Format" [ref=e335]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N82292A60185" [ref=e337]: Derived_Score_AutoFilter_Template_N82292A60185
                    - gridcell "Status Completed" [ref=e339]: Completed
                    - gridcell "Date Created 09/03/2026 01:05 AM" [ref=e341]: 09/03/2026 01:05 AM
                    - generic [ref=e342]:
                      - gridcell "Download/Print" [ref=e344] [cursor=pointer]
                      - gridcell "Delete" [ref=e346] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e347] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N75660A47852 Status Completed Date Created 09/03/2026 12:59 AM Download/Print Delete View Data Export Format" [ref=e349]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N75660A47852" [ref=e351]: Derived_Score_AutoFilter_Template_N75660A47852
                    - gridcell "Status Completed" [ref=e353]: Completed
                    - gridcell "Date Created 09/03/2026 12:59 AM" [ref=e355]: 09/03/2026 12:59 AM
                    - generic [ref=e356]:
                      - gridcell "Download/Print" [ref=e358] [cursor=pointer]
                      - gridcell "Delete" [ref=e360] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e361] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N44418A89874 Status Completed Date Created 09/03/2026 12:55 AM Download/Print Delete View Data Export Format" [ref=e363]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N44418A89874" [ref=e365]: Derived_Score_AutoFilter_Template_N44418A89874
                    - gridcell "Status Completed" [ref=e367]: Completed
                    - gridcell "Date Created 09/03/2026 12:55 AM" [ref=e369]: 09/03/2026 12:55 AM
                    - generic [ref=e370]:
                      - gridcell "Download/Print" [ref=e372] [cursor=pointer]
                      - gridcell "Delete" [ref=e374] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e375] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N91074A27903 Status Completed Date Created 09/03/2026 12:50 AM Download/Print Delete View Data Export Format" [ref=e377]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N91074A27903" [ref=e379]: Derived_Score_AutoFilter_Template_N91074A27903
                    - gridcell "Status Completed" [ref=e381]: Completed
                    - gridcell "Date Created 09/03/2026 12:50 AM" [ref=e383]: 09/03/2026 12:50 AM
                    - generic [ref=e384]:
                      - gridcell "Download/Print" [ref=e386] [cursor=pointer]
                      - gridcell "Delete" [ref=e388] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e389] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N52041A27212 Status Completed Date Created 09/03/2026 12:44 AM Download/Print Delete View Data Export Format" [ref=e391]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N52041A27212" [ref=e393]: Derived_Score_AutoFilter_Template_N52041A27212
                    - gridcell "Status Completed" [ref=e395]: Completed
                    - gridcell "Date Created 09/03/2026 12:44 AM" [ref=e397]: 09/03/2026 12:44 AM
                    - generic [ref=e398]:
                      - gridcell "Download/Print" [ref=e400] [cursor=pointer]
                      - gridcell "Delete" [ref=e402] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e403] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N78918A26698 Status Completed Date Created 09/03/2026 12:40 AM Download/Print Delete View Data Export Format" [ref=e405]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N78918A26698" [ref=e407]: Derived_Score_AutoFilter_Template_N78918A26698
                    - gridcell "Status Completed" [ref=e409]: Completed
                    - gridcell "Date Created 09/03/2026 12:40 AM" [ref=e411]: 09/03/2026 12:40 AM
                    - generic [ref=e412]:
                      - gridcell "Download/Print" [ref=e414] [cursor=pointer]
                      - gridcell "Delete" [ref=e416] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e417] [cursor=pointer]
      - contentinfo [ref=e419]:
        - generic [ref=e420]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e421] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e422]
        - generic [ref=e423]:
          - link "Riverside Insights Facebook" [ref=e424] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e425]
          - link "Riverside Insights Twitter" [ref=e426] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e427]
          - link "Riverside Insights LinkedIn" [ref=e428] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e429]
          - link "Riverside Insights Instagram" [ref=e430] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e431]
        - generic [ref=e432]:
          - button "Leave Feedback" [ref=e433] [cursor=pointer]
          - generic [ref=e434]: "|"
          - link "Terms of Use" [ref=e435] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e436]: "|"
          - link "Privacy Policy" [ref=e437] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e438]: Footer region end
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
     |        ^ Error: 729 LDOT ->  value from the RunTime VS downloaded file is =  2026-10-01 <> 2026-09-30
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