# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/WRTSMP_Pub.spec.ts >> WRTSMP.W5PA Test Data Export Automation  >> For Ages 5 to 7 - All correct End Test Scenario For Block A, Block B And Block C Conduct test and validate report
- Location: src/tests/test_dataExport/WRTSMP_Pub.spec.ts:16:5

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 23
Received:    14
```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - generic [ref=f2e1]:
        - banner "Clinical Products Header" [ref=f2e2]:
          - generic [ref=f2e3]:
            - button "Skip to main Content" [ref=f2e4]
            - link "Back to product selection" [ref=f2e5] [cursor=pointer]:
              - /url: /products
            - generic [ref=f2e6]: Riverside Insights Logo
            - generic [ref=f2e7]:
              - heading "Hello 07PwAut25AH ln" [level=2] [ref=f2e8]:
                - generic [ref=f2e9]: Hello
                - button "07PwAut25AH ln" [ref=f2e10] [cursor=pointer]
              - navigation [ref=f2e13]:
                - button "Contact Us" [ref=f2e14] [cursor=pointer]
                - button "| WJ V Settings" [ref=f2e15] [cursor=pointer]
                - button "| Sign Out" [ref=f2e16] [cursor=pointer]
        - navigation "Navigation toolbar" [ref=f2e17]:
          - menubar [ref=f2e19]:
            - menuitem "Dashboard" [ref=f2e21] [cursor=pointer]
            - menuitem "Test Sets" [ref=f2e23] [cursor=pointer]
            - menuitem "Examinees" [ref=f2e25] [cursor=pointer]
            - menuitem "Staff" [ref=f2e27] [cursor=pointer]
            - menuitem "Reports" [ref=f2e29] [cursor=pointer]:
              - text: Reports
              - menu
            - menuitem "Resources" [ref=f2e33] [cursor=pointer]
          - generic [ref=f2e34]:
            - switch "Offline Mode" [ref=f2e35] [cursor=pointer]: "OFF"
            - generic [ref=f2e36]: Offline Mode
        - main [ref=f2e37]:
          - generic [ref=f2e38]:
            - heading "REPORT CENTER" [level=1] [ref=f2e39]
            - navigation [ref=f2e40]:
              - tablist [ref=f2e41]:
                - tab "Report Library" [selected] [ref=f2e42] [cursor=pointer]
                - button "Zoom In" [ref=f2e43] [cursor=pointer]:
                  - img "Zoom Page In Icon" [ref=f2e44]
            - generic "Report Library" [ref=f2e53]:
              - grid [ref=f2e54]:
                - generic [ref=f2e55]:
                  - generic "Report Name" [ref=f2e56]
                  - generic "Status" [ref=f2e59]
                  - generic "Date Created" [ref=f2e62]
                  - generic "Actions" [ref=f2e65]
                - rowgroup [ref=f2e68]:
                  - row [ref=f2e69]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N34610A11270" [ref=f2e71]: Test_DataExport_AutoFilter_Template_N34610A11270
                    - gridcell "Status Completed" [ref=f2e73]: Completed
                    - gridcell "Date Created 11/26/2026 10:39 AM" [ref=f2e75]: 11/26/2026 10:39 AM
                    - generic [ref=f2e76]:
                      - gridcell "Download/Print" [active] [ref=f2e78] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e80] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e81] [cursor=pointer]
                  - row [ref=f2e83]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N28658A64386" [ref=f2e85]: Test_DataExport_AutoFilter_Template_N28658A64386
                    - gridcell "Status Completed" [ref=f2e87]: Completed
                    - gridcell "Date Created 11/26/2026 10:34 AM" [ref=f2e89]: 11/26/2026 10:34 AM
                    - generic [ref=f2e90]:
                      - gridcell "Download/Print" [ref=f2e92] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e94] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e95] [cursor=pointer]
                  - row [ref=f2e97]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N21999A35829" [ref=f2e99]: Test_DataExport_AutoFilter_Template_N21999A35829
                    - gridcell "Status Completed" [ref=f2e101]: Completed
                    - gridcell "Date Created 11/26/2026 10:30 AM" [ref=f2e103]: 11/26/2026 10:30 AM
                    - generic [ref=f2e104]:
                      - gridcell "Download/Print" [ref=f2e106] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e108] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e109] [cursor=pointer]
                  - row [ref=f2e111]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N12269A75679" [ref=f2e113]: Test_DataExport_AutoFilter_Template_N12269A75679
                    - gridcell "Status Completed" [ref=f2e115]: Completed
                    - gridcell "Date Created 11/26/2026 06:33 AM" [ref=f2e117]: 11/26/2026 06:33 AM
                    - generic [ref=f2e118]:
                      - gridcell "Download/Print" [ref=f2e120] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e122] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e123] [cursor=pointer]
                  - row [ref=f2e125]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N357A85277" [ref=f2e127]: Test_DataExport_AutoFilter_Template_N357A85277
                    - gridcell "Status Completed" [ref=f2e129]: Completed
                    - gridcell "Date Created 11/25/2026 10:45 AM" [ref=f2e131]: 11/25/2026 10:45 AM
                    - generic [ref=f2e132]:
                      - gridcell "Download/Print" [ref=f2e134] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e136] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e137] [cursor=pointer]
                  - row [ref=f2e139]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N22781A92322" [ref=f2e141]: Test_DataExport_AutoFilter_Template_N22781A92322
                    - gridcell "Status Completed" [ref=f2e143]: Completed
                    - gridcell "Date Created 11/24/2026 09:38 AM" [ref=f2e145]: 11/24/2026 09:38 AM
                    - generic [ref=f2e146]:
                      - gridcell "Download/Print" [ref=f2e148] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e150] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e151] [cursor=pointer]
                  - row [ref=f2e153]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N52868A51892" [ref=f2e155]: Test_DataExport_AutoFilter_Template_N52868A51892
                    - gridcell "Status Completed" [ref=f2e157]: Completed
                    - gridcell "Date Created 10/30/2026 01:24 AM" [ref=f2e159]: 10/30/2026 01:24 AM
                    - generic [ref=f2e160]:
                      - gridcell "Download/Print" [ref=f2e162] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e164] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e165] [cursor=pointer]
                  - row [ref=f2e167]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N34756A99891" [ref=f2e169]: Test_DataExport_AutoFilter_Template_N34756A99891
                    - gridcell "Status Completed" [ref=f2e171]: Completed
                    - gridcell "Date Created 10/30/2026 01:14 AM" [ref=f2e173]: 10/30/2026 01:14 AM
                    - generic [ref=f2e174]:
                      - gridcell "Download/Print" [ref=f2e176] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e178] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e179] [cursor=pointer]
                  - row [ref=f2e181]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N19067A16532" [ref=f2e183]: Test_DataExport_AutoFilter_Template_N19067A16532
                    - gridcell "Status Completed" [ref=f2e185]: Completed
                    - gridcell "Date Created 10/30/2026 01:04 AM" [ref=f2e187]: 10/30/2026 01:04 AM
                    - generic [ref=f2e188]:
                      - gridcell "Download/Print" [ref=f2e190] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e192] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e193] [cursor=pointer]
                  - row [ref=f2e195]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N78960A81405" [ref=f2e197]: Test_DataExport_AutoFilter_Template_N78960A81405
                    - gridcell "Status Completed" [ref=f2e199]: Completed
                    - gridcell "Date Created 10/30/2026 12:58 AM" [ref=f2e201]: 10/30/2026 12:58 AM
                    - generic [ref=f2e202]:
                      - gridcell "Download/Print" [ref=f2e204] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e206] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e207] [cursor=pointer]
                  - row [ref=f2e209]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N65426A27642" [ref=f2e211]: Test_DataExport_AutoFilter_Template_N65426A27642
                    - gridcell "Status Completed" [ref=f2e213]: Completed
                    - gridcell "Date Created 10/30/2026 12:51 AM" [ref=f2e215]: 10/30/2026 12:51 AM
                    - generic [ref=f2e216]:
                      - gridcell "Download/Print" [ref=f2e218] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e220] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e221] [cursor=pointer]
                  - row [ref=f2e223]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N32450A34194" [ref=f2e225]: Test_DataExport_AutoFilter_Template_N32450A34194
                    - gridcell "Status Completed" [ref=f2e227]: Completed
                    - gridcell "Date Created 10/29/2026 07:16 AM" [ref=f2e229]: 10/29/2026 07:16 AM
                    - generic [ref=f2e230]:
                      - gridcell "Download/Print" [ref=f2e232] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e234] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e235] [cursor=pointer]
                  - row [ref=f2e237]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N36277A69620" [ref=f2e239]: Test_DataExport_AutoFilter_Template_N36277A69620
                    - gridcell "Status Completed" [ref=f2e241]: Completed
                    - gridcell "Date Created 10/29/2026 07:11 AM" [ref=f2e243]: 10/29/2026 07:11 AM
                    - generic [ref=f2e244]:
                      - gridcell "Download/Print" [ref=f2e246] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e248] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e249] [cursor=pointer]
                  - row [ref=f2e251]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N98717A8825" [ref=f2e253]: Test_DataExport_AutoFilter_Template_N98717A8825
                    - gridcell "Status Completed" [ref=f2e255]: Completed
                    - gridcell "Date Created 10/29/2026 07:07 AM" [ref=f2e257]: 10/29/2026 07:07 AM
                    - generic [ref=f2e258]:
                      - gridcell "Download/Print" [ref=f2e260] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e262] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e263] [cursor=pointer]
                  - row [ref=f2e265]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N7029A51203" [ref=f2e267]: Test_DataExport_AutoFilter_Template_N7029A51203
                    - gridcell "Status Completed" [ref=f2e269]: Completed
                    - gridcell "Date Created 10/29/2026 07:02 AM" [ref=f2e271]: 10/29/2026 07:02 AM
                    - generic [ref=f2e272]:
                      - gridcell "Download/Print" [ref=f2e274] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e276] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e277] [cursor=pointer]
                  - row [ref=f2e279]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N50591A55490" [ref=f2e281]: Test_DataExport_AutoFilter_Template_N50591A55490
                    - gridcell "Status Completed" [ref=f2e283]: Completed
                    - gridcell "Date Created 10/29/2026 01:48 AM" [ref=f2e285]: 10/29/2026 01:48 AM
                    - generic [ref=f2e286]:
                      - gridcell "Download/Print" [ref=f2e288] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e290] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e291] [cursor=pointer]
                  - row [ref=f2e293]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N50591A55490" [ref=f2e295]: Test_DataExport_AutoFilter_Template_N50591A55490
                    - gridcell "Status Completed" [ref=f2e297]: Completed
                    - gridcell "Date Created 10/29/2026 01:44 AM" [ref=f2e299]: 10/29/2026 01:44 AM
                    - generic [ref=f2e300]:
                      - gridcell "Download/Print" [ref=f2e302] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e304] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e305] [cursor=pointer]
                  - row [ref=f2e307]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N50591A55490" [ref=f2e309]: Test_DataExport_AutoFilter_Template_N50591A55490
                    - gridcell "Status Completed" [ref=f2e311]: Completed
                    - gridcell "Date Created 10/29/2026 01:41 AM" [ref=f2e313]: 10/29/2026 01:41 AM
                    - generic [ref=f2e314]:
                      - gridcell "Download/Print" [ref=f2e316] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e318] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e319] [cursor=pointer]
                  - row [ref=f2e321]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N44505A99366" [ref=f2e323]: Test_DataExport_AutoFilter_Template_N44505A99366
                    - gridcell "Status Completed" [ref=f2e325]: Completed
                    - gridcell "Date Created 10/29/2026 01:30 AM" [ref=f2e327]: 10/29/2026 01:30 AM
                    - generic [ref=f2e328]:
                      - gridcell "Download/Print" [ref=f2e330] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e332] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e333] [cursor=pointer]
                  - row [ref=f2e335]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N44505A99366" [ref=f2e337]: Test_DataExport_AutoFilter_Template_N44505A99366
                    - gridcell "Status Completed" [ref=f2e339]: Completed
                    - gridcell "Date Created 10/29/2026 01:27 AM" [ref=f2e341]: 10/29/2026 01:27 AM
                    - generic [ref=f2e342]:
                      - gridcell "Download/Print" [ref=f2e344] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e346] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e347] [cursor=pointer]
                  - row [ref=f2e349]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N44505A99366" [ref=f2e351]: Test_DataExport_AutoFilter_Template_N44505A99366
                    - gridcell "Status Completed" [ref=f2e353]: Completed
                    - gridcell "Date Created 10/29/2026 01:24 AM" [ref=f2e355]: 10/29/2026 01:24 AM
                    - generic [ref=f2e356]:
                      - gridcell "Download/Print" [ref=f2e358] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e360] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e361] [cursor=pointer]
                  - row [ref=f2e363]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N11416A80526" [ref=f2e365]: Test_DataExport_AutoFilter_Template_N11416A80526
                    - gridcell "Status Completed" [ref=f2e367]: Completed
                    - gridcell "Date Created 10/29/2026 01:16 AM" [ref=f2e369]: 10/29/2026 01:16 AM
                    - generic [ref=f2e370]:
                      - gridcell "Download/Print" [ref=f2e372] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e374] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e375] [cursor=pointer]
                  - row [ref=f2e377]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N11416A80526" [ref=f2e379]: Test_DataExport_AutoFilter_Template_N11416A80526
                    - gridcell "Status Completed" [ref=f2e381]: Completed
                    - gridcell "Date Created 10/29/2026 01:13 AM" [ref=f2e383]: 10/29/2026 01:13 AM
                    - generic [ref=f2e384]:
                      - gridcell "Download/Print" [ref=f2e386] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e388] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e389] [cursor=pointer]
                  - row [ref=f2e391]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N11416A80526" [ref=f2e393]: Test_DataExport_AutoFilter_Template_N11416A80526
                    - gridcell "Status Completed" [ref=f2e395]: Completed
                    - gridcell "Date Created 10/29/2026 01:10 AM" [ref=f2e397]: 10/29/2026 01:10 AM
                    - generic [ref=f2e398]:
                      - gridcell "Download/Print" [ref=f2e400] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e402] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e403] [cursor=pointer]
                  - row [ref=f2e405]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N72455A96149" [ref=f2e407]: Test_DataExport_AutoFilter_Template_N72455A96149
                    - gridcell "Status Completed" [ref=f2e409]: Completed
                    - gridcell "Date Created 10/29/2026 12:59 AM" [ref=f2e411]: 10/29/2026 12:59 AM
                    - generic [ref=f2e412]:
                      - gridcell "Download/Print" [ref=f2e414] [cursor=pointer]
                      - gridcell "Delete" [ref=f2e416] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=f2e417] [cursor=pointer]
              - navigation "Pagination" [ref=f2e419]:
                - button "First page, disabled" [disabled] [ref=f2e420]: <<
                - button "Previous page, disabled" [disabled] [ref=f2e421]: <
                - button "Page 1" [ref=f2e422] [cursor=pointer]: "1"
                - button "Page 2" [ref=f2e423] [cursor=pointer]: "2"
                - button "Next page" [ref=f2e424] [cursor=pointer]: ">"
                - button "Last page" [ref=f2e425] [cursor=pointer]: ">>"
      - contentinfo [ref=f2e426]:
        - generic [ref=f2e427]: Footer region,
        - link [ref=f2e428] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=f2e429]
        - generic [ref=f2e430]:
          - link [ref=f2e431] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=f2e432]
          - link [ref=f2e433] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=f2e434]
          - link [ref=f2e435] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=f2e436]
          - link [ref=f2e437] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=f2e438]
        - generic [ref=f2e439]:
          - button "Leave Feedback" [ref=f2e440] [cursor=pointer]
          - generic [aria-hidden] [ref=f2e441]: "|"
          - link "Terms of Use" [ref=f2e442] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [aria-hidden] [ref=f2e443]: "|"
          - link "Privacy Policy" [ref=f2e444] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=f2e445]: Footer region end
```

# Test source

```ts
  218 |         console.log("\n", itemCodeExamineePub1, "===", itemCMSIDExaminee2);
  219 |         RawValueLogger.log(`  [CMSID_Examinee]: "${key}":  "${itemCodeExamineePub1}", = "${itemCMSIDExaminee2}"`);
  220 |       } else {
  221 |         console.warn(`CMSID_Examinee '${key}' not found in the second object`);
  222 |       }
  223 |     }
  224 |   }
  225 | 
  226 |   async validateAndAssert_CMSID_Examiner(
  227 |     obj1: Record<string, any>, //txt file data
  228 |     obj2: Record<string, any>, 
  229 |   ) {
  230 | 
  231 |     console.log("---------------------Item_CMSID_Examiner-------------------");
  232 | 
  233 |     for (const key in obj1) {
  234 |       if (key in obj2) {
  235 |         const itemCodeExaminerPub1: string = String(obj1[key].Item_CMSID_Examiner || "");
  236 |         const itemCMSIDExaminer2: string = String(obj2[key].ItemCode_Examiner_PUB || "");
  237 | 
  238 |         expect
  239 |           .soft(itemCodeExaminerPub1.trim())
  240 |           .toEqual(itemCMSIDExaminer2.toString().trim());
  241 |         console.log("\n", itemCodeExaminerPub1, "===", itemCMSIDExaminer2);
  242 |         RawValueLogger.log(`  [CMSID_Examiner]: "${key}":  "${itemCodeExaminerPub1}", = "${itemCMSIDExaminer2}"`);
  243 |       } else {
  244 |         console.warn(`CMSID_Examiner '${key}' not found in the second object`);
  245 |       }
  246 |     }
  247 |   }
  248 | 
  249 |   async validateAndAssert_Master_ID(
  250 |     obj1: Record<string, any>,
  251 |     obj2: Record<string, any>,
  252 |   ) {
  253 | 
  254 |     console.log("------------------Master_ID----------------------");
  255 | 
  256 |     for (const key in obj1) {
  257 |       if (key in obj2) {
  258 |         const itemMastedIdP1: string = obj1[key].Master_ID;
  259 |         const itemMasterId2: string = obj2[key].Master_ID;
  260 | 
  261 |         expect.soft(itemMastedIdP1).toEqual(itemMasterId2.toString());
  262 |         console.log("\n", itemMastedIdP1, "===", itemMasterId2);
  263 |         RawValueLogger.log(`  [Master_ID]: "${key}":  "${itemMastedIdP1}", = "${itemMasterId2}"`);
  264 |       } else {
  265 |         console.warn(`Master id '${key}' not found in the second object`);
  266 |       }
  267 |     }
  268 |   }
  269 | 
  270 |   async validateAndAssert_RT(
  271 |     obj1: Record<string, any>, //txt file data
  272 |     obj2: Record<string, any>,
  273 |   ) {
  274 | 
  275 |     console.log("--------------RT------------------");
  276 | 
  277 |     let missingKeysCount = 0;
  278 | 
  279 |     for (const key in obj1) {
  280 |       if (key in obj2) {
  281 |         const RT1: number = Number(obj1[key].RT);
  282 |         const RT2: number = Number(obj2[key].RT);
  283 | 
  284 |         expect.soft(Math.abs(RT1 - RT2)).toBeGreaterThan(0); //CLINICAL-25333
  285 |         console.log("\n", RT1, "-", RT2, "= ", Math.abs(RT1 - RT2));
  286 |         RawValueLogger.log(`  [RT]: "${key}":  "${RT1}", = "${RT2}"`);
  287 |         
  288 |         if (RT1 < 0){
  289 |           expect.soft(RT1, "The RT should be always positive").toBeGreaterThan(0);
  290 |         }
  291 |       } else {
  292 |         missingKeysCount++;
  293 |         console.warn(`RT '${key}' not found in the second object`);
  294 |       }
  295 |     }
  296 | 
  297 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  298 | 
  299 |     if (missingKeysCount > 3) {
  300 |       console.error(`Too many missing keys in RT validation! Total: ${missingKeysCount}`);
  301 |     }
  302 |   }
  303 | 
  304 |   async validateAndAssert_DeliveryOrder(
  305 |     obj1: Record<string, any>,
  306 |     obj2: Record<string, any>,
  307 |   ) {
  308 | 
  309 |     console.log("--------------DeliveryOrder------------------");
  310 | 
  311 |     let missingKeysCount = 0;
  312 | 
  313 |     for (const key in obj1) {
  314 |       if (key in obj2) {
  315 |         const Do1: number = Number(obj1[key].Delivered_Order);
  316 |         const Do2: number = Number(obj2[key].Delivered_Order);
  317 | 
> 318 |         expect.soft(Do1).toBeGreaterThanOrEqual(Do2);
      |                          ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  319 | 
  320 |         console.log("\n", Do1, "===", Do2);
  321 |         RawValueLogger.log(`  [DeliveryOrder]: "${key}":  "${Do1}", = "${Do2}"`);
  322 |       } else {
  323 |         missingKeysCount++;
  324 |         console.warn(`Delivered_Order '${key}' not found in the second object`);
  325 |       }
  326 |     }
  327 | 
  328 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  329 | 
  330 |     if (missingKeysCount > 3) {
  331 |       console.error(`Too many missing keys in DeliveryOrder validation! Total: ${missingKeysCount}`);
  332 |     }
  333 |   }
  334 | 
  335 |   async validateAndAssert_Response(
  336 |     obj1: Record<string, any>, // Txt-file data
  337 |     obj2: Record<string, any>, // Run-time data
  338 |     testStemForm?: string, 
  339 |   ) {
  340 |     console.log("--------------Response------------------");
  341 |   
  342 |     let missingKeysCount = 0;
  343 |   
  344 |     for (const key in obj1) {
  345 |       if (key in obj2) {
  346 |         let word1: string;
  347 |         let word2: string;
  348 |         
  349 |         // WRTSMP.W5PA: Extract full acceptance criteria text
  350 |         if (testStemForm === "WRTSMP.W5PA") {
  351 |           word1 = await this.extractFullText(obj1[key].Response);
  352 |           word2 = await this.extractFullText(obj2[key].Response);
  353 |         } else {
  354 |           // All other tests: Use original extraction logic (first word only)
  355 |           word1 = await this.extractEnglishWord(obj1[key].Response);
  356 |           word2 = await this.extractEnglishWord(obj2[key].Response);
  357 |         }
  358 |   
  359 |         expect.soft(word2).toContain(word1);  
  360 |         console.log("\n", word2, "===", word1);
  361 |         RawValueLogger.log(`  [Response]: "${key}":  "${word1}", = "${word2}"`);
  362 |       } else {
  363 |         missingKeysCount++;
  364 |         console.warn(`Response '${key}' not found in the second object`);
  365 |       }
  366 |     }
  367 |   
  368 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  369 |   
  370 |     if (missingKeysCount > 3) {
  371 |       console.error(`Too many missing keys! Total: ${missingKeysCount}`);
  372 |     }
  373 |   }
  374 |   
  375 |   async extractEnglishWord(text: string): Promise<string> {
  376 |     text = cheerio.load(text).text().trim();  
  377 |     text = decode(text);  
  378 |     const match = text.match(/^[a-zA-Z]+/);
  379 |     return match ? match[0].toLowerCase() : text.toLowerCase();
  380 |   }
  381 | 
  382 |   // Special extraction for WRTSMP.W5PA only - returns full acceptance criteria text
  383 |   async extractFullText(text: string): Promise<string> {
  384 |     text = cheerio.load(text).text().trim();  
  385 |     text = decode(text);  
  386 |     return text.replace(/\s+/g, ' ').trim().toLowerCase();
  387 |   }
  388 |   async validateAndAssert_Score(
  389 |     obj1: Record<string, any>,
  390 |     obj2: Record<string, any>,
  391 |   ) {
  392 | 
  393 |     console.log("--------------Score------------------");
  394 | 
  395 |     let missingKeysCount = 0;
  396 | 
  397 |     for (const key in obj1) {
  398 |       if (key in obj2) {
  399 |         const Do1: number = Number(obj1[key].Score);
  400 |         const Do2: number = Number(obj2[key].Score);
  401 | 
  402 |         expect.soft(Do1).toEqual(Do2);
  403 | 
  404 |         console.log("\n", Do1, "===", Do2);
  405 |         RawValueLogger.log(`  [Score]: "${key}":  "${Do1}", = "${Do2}"`);
  406 |       } else {
  407 |         missingKeysCount++;
  408 |         console.warn(`Score '${key}' not found in the second object`);
  409 |       }
  410 |     }
  411 | 
  412 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  413 | 
  414 |     if (missingKeysCount > 3) {
  415 |       console.error(`Too many missing keys in Score validation! Total: ${missingKeysCount}`);
  416 |     }
  417 |   }
  418 | 
```