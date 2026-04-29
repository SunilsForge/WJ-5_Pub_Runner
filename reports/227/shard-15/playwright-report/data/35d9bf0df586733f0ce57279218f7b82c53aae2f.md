# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/APPROB_Pub.spec.ts >>  APPROB.W5PA Test Data Export Automation  >> @Test_De For Age 4 - All correct scenario login as AH Conduct test as Examiner and generate reports
- Location: src/tests/test_dataExport/APPROB_Pub.spec.ts:16:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "35 (three fifths)"
Received string:    "(three fifths)"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "-13 (negative one third)"
Received string:    "(negative one third)"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "-23 (negative two thirds)"
Received string:    "(negative two thirds)"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "163 (sixteen times the square root of three) square inches"
Received string:    "(sixteen times the square root of three) square inches"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "0.048 inch per minute (leading zero is optional)"
Received string:    "inch"
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
              - heading "Hello 05PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "05PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row "Report Name Test_DataExport_AutoFilter_Template_N40485A95882 Status Completed Date Created 04/29/2026 12:54 PM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N40485A95882" [ref=e68]: Test_DataExport_AutoFilter_Template_N40485A95882
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 04/29/2026 12:54 PM" [ref=e72]: 04/29/2026 12:54 PM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N87196A73192 Status Completed Date Created 04/29/2026 12:49 PM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N87196A73192" [ref=e82]: Test_DataExport_AutoFilter_Template_N87196A73192
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 04/29/2026 12:49 PM" [ref=e86]: 04/29/2026 12:49 PM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N17634A13311 Status Completed Date Created 04/29/2026 10:14 AM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N17634A13311" [ref=e96]: Test_DataExport_AutoFilter_Template_N17634A13311
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 04/29/2026 10:14 AM" [ref=e100]: 04/29/2026 10:14 AM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N80176A34379 Status Completed Date Created 04/29/2026 07:08 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N80176A34379" [ref=e110]: Test_DataExport_AutoFilter_Template_N80176A34379
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 04/29/2026 07:08 AM" [ref=e114]: 04/29/2026 07:08 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N32845A5442 Status Completed Date Created 04/27/2026 12:00 PM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N32845A5442" [ref=e124]: Derived_Score_AutoFilter_Template_N32845A5442
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/27/2026 12:00 PM" [ref=e128]: 04/27/2026 12:00 PM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N26365A28038 Status Completed Date Created 04/27/2026 11:57 AM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N26365A28038" [ref=e138]: Test_DataExport_AutoFilter_Template_N26365A28038
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/27/2026 11:57 AM" [ref=e142]: 04/27/2026 11:57 AM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N97559A64580 Status Completed Date Created 04/27/2026 11:54 AM Download/Print Delete View Data Export Format" [ref=e150]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N97559A64580" [ref=e152]: Derived_Score_AutoFilter_Template_N97559A64580
                    - gridcell "Status Completed" [ref=e154]: Completed
                    - gridcell "Date Created 04/27/2026 11:54 AM" [ref=e156]: 04/27/2026 11:54 AM
                    - generic [ref=e157]:
                      - gridcell "Download/Print" [ref=e159] [cursor=pointer]
                      - gridcell "Delete" [ref=e161] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e162] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N73798A26454 Status Completed Date Created 04/27/2026 11:50 AM Download/Print Delete View Data Export Format" [ref=e164]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N73798A26454" [ref=e166]: Test_DataExport_AutoFilter_Template_N73798A26454
                    - gridcell "Status Completed" [ref=e168]: Completed
                    - gridcell "Date Created 04/27/2026 11:50 AM" [ref=e170]: 04/27/2026 11:50 AM
                    - generic [ref=e171]:
                      - gridcell "Download/Print" [ref=e173] [cursor=pointer]
                      - gridcell "Delete" [ref=e175] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e176] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N5488A88193 Status Completed Date Created 04/27/2026 11:47 AM Download/Print Delete View Data Export Format" [ref=e178]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N5488A88193" [ref=e180]: Derived_Score_AutoFilter_Template_N5488A88193
                    - gridcell "Status Completed" [ref=e182]: Completed
                    - gridcell "Date Created 04/27/2026 11:47 AM" [ref=e184]: 04/27/2026 11:47 AM
                    - generic [ref=e185]:
                      - gridcell "Download/Print" [ref=e187] [cursor=pointer]
                      - gridcell "Delete" [ref=e189] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e190] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N47323A45009 Status Completed Date Created 04/27/2026 11:44 AM Download/Print Delete View Data Export Format" [ref=e192]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N47323A45009" [ref=e194]: Test_DataExport_AutoFilter_Template_N47323A45009
                    - gridcell "Status Completed" [ref=e196]: Completed
                    - gridcell "Date Created 04/27/2026 11:44 AM" [ref=e198]: 04/27/2026 11:44 AM
                    - generic [ref=e199]:
                      - gridcell "Download/Print" [ref=e201] [cursor=pointer]
                      - gridcell "Delete" [ref=e203] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e204] [cursor=pointer]
                  - row "Report Name Derived_Score_AutoFilter_Template_N59174A28175 Status Completed Date Created 04/27/2026 11:42 AM Download/Print Delete View Data Export Format" [ref=e206]:
                    - gridcell "Report Name Derived_Score_AutoFilter_Template_N59174A28175" [ref=e208]: Derived_Score_AutoFilter_Template_N59174A28175
                    - gridcell "Status Completed" [ref=e210]: Completed
                    - gridcell "Date Created 04/27/2026 11:42 AM" [ref=e212]: 04/27/2026 11:42 AM
                    - generic [ref=e213]:
                      - gridcell "Download/Print" [ref=e215] [cursor=pointer]
                      - gridcell "Delete" [ref=e217] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e218] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N3165A68058 Status Completed Date Created 04/27/2026 11:37 AM Download/Print Delete View Data Export Format" [ref=e220]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N3165A68058" [ref=e222]: Test_DataExport_AutoFilter_Template_N3165A68058
                    - gridcell "Status Completed" [ref=e224]: Completed
                    - gridcell "Date Created 04/27/2026 11:37 AM" [ref=e226]: 04/27/2026 11:37 AM
                    - generic [ref=e227]:
                      - gridcell "Download/Print" [ref=e229] [cursor=pointer]
                      - gridcell "Delete" [ref=e231] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e232] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N19683A71749 Status Completed Date Created 04/27/2026 11:32 AM Download/Print Delete View Data Export Format" [ref=e234]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N19683A71749" [ref=e236]: Test_DataExport_AutoFilter_Template_N19683A71749
                    - gridcell "Status Completed" [ref=e238]: Completed
                    - gridcell "Date Created 04/27/2026 11:32 AM" [ref=e240]: 04/27/2026 11:32 AM
                    - generic [ref=e241]:
                      - gridcell "Download/Print" [ref=e243] [cursor=pointer]
                      - gridcell "Delete" [ref=e245] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e246] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N41876A82517 Status Completed Date Created 04/27/2026 11:27 AM Download/Print Delete View Data Export Format" [ref=e248]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N41876A82517" [ref=e250]: Test_DataExport_AutoFilter_Template_N41876A82517
                    - gridcell "Status Completed" [ref=e252]: Completed
                    - gridcell "Date Created 04/27/2026 11:27 AM" [ref=e254]: 04/27/2026 11:27 AM
                    - generic [ref=e255]:
                      - gridcell "Download/Print" [ref=e257] [cursor=pointer]
                      - gridcell "Delete" [ref=e259] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e260] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N56669A61598 Status Completed Date Created 04/27/2026 11:22 AM Download/Print Delete View Data Export Format" [ref=e262]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N56669A61598" [ref=e264]: Test_DataExport_AutoFilter_Template_N56669A61598
                    - gridcell "Status Completed" [ref=e266]: Completed
                    - gridcell "Date Created 04/27/2026 11:22 AM" [ref=e268]: 04/27/2026 11:22 AM
                    - generic [ref=e269]:
                      - gridcell "Download/Print" [ref=e271] [cursor=pointer]
                      - gridcell "Delete" [ref=e273] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e274] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N56669A61598 Status Completed Date Created 04/27/2026 11:22 AM Download/Print Delete View Data Export Format" [ref=e276]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N56669A61598" [ref=e278]: Test_DataExport_AutoFilter_Template_N56669A61598
                    - gridcell "Status Completed" [ref=e280]: Completed
                    - gridcell "Date Created 04/27/2026 11:22 AM" [ref=e282]: 04/27/2026 11:22 AM
                    - generic [ref=e283]:
                      - gridcell "Download/Print" [ref=e285] [cursor=pointer]
                      - gridcell "Delete" [ref=e287] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e288] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N17418A3606 Status Completed Date Created 04/27/2026 11:17 AM Download/Print Delete View Data Export Format" [ref=e290]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N17418A3606" [ref=e292]: Test_DataExport_AutoFilter_Template_N17418A3606
                    - gridcell "Status Completed" [ref=e294]: Completed
                    - gridcell "Date Created 04/27/2026 11:17 AM" [ref=e296]: 04/27/2026 11:17 AM
                    - generic [ref=e297]:
                      - gridcell "Download/Print" [ref=e299] [cursor=pointer]
                      - gridcell "Delete" [ref=e301] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e302] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N11256A92565 Status Completed Date Created 04/24/2026 07:19 AM Download/Print Delete View Data Export Format" [ref=e304]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N11256A92565" [ref=e306]: Test_DataExport_AutoFilter_Template_N11256A92565
                    - gridcell "Status Completed" [ref=e308]: Completed
                    - gridcell "Date Created 04/24/2026 07:19 AM" [ref=e310]: 04/24/2026 07:19 AM
                    - generic [ref=e311]:
                      - gridcell "Download/Print" [ref=e313] [cursor=pointer]
                      - gridcell "Delete" [ref=e315] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e316] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N63957A48949 Status Completed Date Created 04/24/2026 07:14 AM Download/Print Delete View Data Export Format" [ref=e318]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N63957A48949" [ref=e320]: Test_DataExport_AutoFilter_Template_N63957A48949
                    - gridcell "Status Completed" [ref=e322]: Completed
                    - gridcell "Date Created 04/24/2026 07:14 AM" [ref=e324]: 04/24/2026 07:14 AM
                    - generic [ref=e325]:
                      - gridcell "Download/Print" [ref=e327] [cursor=pointer]
                      - gridcell "Delete" [ref=e329] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e330] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N70886A20653 Status Completed Date Created 04/24/2026 07:09 AM Download/Print Delete View Data Export Format" [ref=e332]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N70886A20653" [ref=e334]: Test_DataExport_AutoFilter_Template_N70886A20653
                    - gridcell "Status Completed" [ref=e336]: Completed
                    - gridcell "Date Created 04/24/2026 07:09 AM" [ref=e338]: 04/24/2026 07:09 AM
                    - generic [ref=e339]:
                      - gridcell "Download/Print" [ref=e341] [cursor=pointer]
                      - gridcell "Delete" [ref=e343] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e344] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N85707A57398 Status Completed Date Created 04/23/2026 01:24 PM Download/Print Delete View Data Export Format" [ref=e346]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N85707A57398" [ref=e348]: Test_DataExport_AutoFilter_Template_N85707A57398
                    - gridcell "Status Completed" [ref=e350]: Completed
                    - gridcell "Date Created 04/23/2026 01:24 PM" [ref=e352]: 04/23/2026 01:24 PM
                    - generic [ref=e353]:
                      - gridcell "Download/Print" [ref=e355] [cursor=pointer]
                      - gridcell "Delete" [ref=e357] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e358] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N15354A88464 Status Completed Date Created 04/23/2026 01:18 PM Download/Print Delete View Data Export Format" [ref=e360]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N15354A88464" [ref=e362]: Test_DataExport_AutoFilter_Template_N15354A88464
                    - gridcell "Status Completed" [ref=e364]: Completed
                    - gridcell "Date Created 04/23/2026 01:18 PM" [ref=e366]: 04/23/2026 01:18 PM
                    - generic [ref=e367]:
                      - gridcell "Download/Print" [ref=e369] [cursor=pointer]
                      - gridcell "Delete" [ref=e371] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e372] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N5159A93258 Status Completed Date Created 04/23/2026 01:13 PM Download/Print Delete View Data Export Format" [ref=e374]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N5159A93258" [ref=e376]: Test_DataExport_AutoFilter_Template_N5159A93258
                    - gridcell "Status Completed" [ref=e378]: Completed
                    - gridcell "Date Created 04/23/2026 01:13 PM" [ref=e380]: 04/23/2026 01:13 PM
                    - generic [ref=e381]:
                      - gridcell "Download/Print" [ref=e383] [cursor=pointer]
                      - gridcell "Delete" [ref=e385] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e386] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N64961A54814 Status Completed Date Created 03/31/2026 01:33 PM Download/Print Delete View Data Export Format" [ref=e388]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N64961A54814" [ref=e390]: Test_DataExport_AutoFilter_Template_N64961A54814
                    - gridcell "Status Completed" [ref=e392]: Completed
                    - gridcell "Date Created 03/31/2026 01:33 PM" [ref=e394]: 03/31/2026 01:33 PM
                    - generic [ref=e395]:
                      - gridcell "Download/Print" [ref=e397] [cursor=pointer]
                      - gridcell "Delete" [ref=e399] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e400] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N64961A54814 Status Completed Date Created 03/31/2026 01:33 PM Download/Print Delete View Data Export Format" [ref=e402]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N64961A54814" [ref=e404]: Test_DataExport_AutoFilter_Template_N64961A54814
                    - gridcell "Status Completed" [ref=e406]: Completed
                    - gridcell "Date Created 03/31/2026 01:33 PM" [ref=e408]: 03/31/2026 01:33 PM
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
  242 | 
  243 |   async validateAndAssert_Master_ID(
  244 |     obj1: Record<string, any>,
  245 |     obj2: Record<string, any>,
  246 |   ) {
  247 | 
  248 |     console.log("------------------Master_ID----------------------");
  249 | 
  250 |     for (const key in obj1) {
  251 |       if (key in obj2) {
  252 |         const itemMastedIdP1: string = obj1[key].Master_ID;
  253 |         const itemMasterId2: string = obj2[key].Master_ID;
  254 | 
  255 |         expect.soft(itemMastedIdP1).toEqual(itemMasterId2.toString());
  256 |         console.log("\n", itemMastedIdP1, "===", itemMasterId2);
  257 |         RawValueLogger.log(`  [Master_ID]: "${key}":  "${itemMastedIdP1}", = "${itemMasterId2}"`);
  258 |       } else {
  259 |         console.warn(`Master id '${key}' not found in the second object`);
  260 |       }
  261 |     }
  262 |   }
  263 | 
  264 |   async validateAndAssert_RT(
  265 |     obj1: Record<string, any>, //txt file data
  266 |     obj2: Record<string, any>,
  267 |   ) {
  268 | 
  269 |     console.log("--------------RT------------------");
  270 | 
  271 |     let missingKeysCount = 0;
  272 | 
  273 |     for (const key in obj1) {
  274 |       if (key in obj2) {
  275 |         const RT1: number = Number(obj1[key].RT);
  276 |         const RT2: number = Number(obj2[key].RT);
  277 | 
  278 |         expect.soft(Math.abs(RT1 - RT2)).toBeGreaterThan(0); //CLINICAL-25333
  279 |         console.log("\n", RT1, "-", RT2, "= ", Math.abs(RT1 - RT2));
  280 |         RawValueLogger.log(`  [RT]: "${key}":  "${RT1}", = "${RT2}"`);
  281 |         
  282 |         if (RT1 < 0){
  283 |           expect.soft(RT1, "The RT should be always positive").toBeGreaterThan(0);
  284 |         }
  285 |       } else {
  286 |         missingKeysCount++;
  287 |         console.warn(`RT '${key}' not found in the second object`);
  288 |       }
  289 |     }
  290 | 
  291 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  292 | 
  293 |     if (missingKeysCount > 3) {
  294 |       console.error(`Too many missing keys in RT validation! Total: ${missingKeysCount}`);
  295 |     }
  296 |   }
  297 | 
  298 |   async validateAndAssert_DeliveryOrder(
  299 |     obj1: Record<string, any>,
  300 |     obj2: Record<string, any>,
  301 |   ) {
  302 | 
  303 |     console.log("--------------DeliveryOrder------------------");
  304 | 
  305 |     let missingKeysCount = 0;
  306 | 
  307 |     for (const key in obj1) {
  308 |       if (key in obj2) {
  309 |         const Do1: number = Number(obj1[key].Delivered_Order);
  310 |         const Do2: number = Number(obj2[key].Delivered_Order);
  311 | 
  312 |         expect.soft(Do1).toBeGreaterThanOrEqual(Do2);
  313 | 
  314 |         console.log("\n", Do1, "===", Do2);
  315 |         RawValueLogger.log(`  [DeliveryOrder]: "${key}":  "${Do1}", = "${Do2}"`);
  316 |       } else {
  317 |         missingKeysCount++;
  318 |         console.warn(`Delivered_Order '${key}' not found in the second object`);
  319 |       }
  320 |     }
  321 | 
  322 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  323 | 
  324 |     if (missingKeysCount > 3) {
  325 |       console.error(`Too many missing keys in DeliveryOrder validation! Total: ${missingKeysCount}`);
  326 |     }
  327 |   }
  328 | 
  329 |   async validateAndAssert_Response(
  330 |     obj1: Record<string, any>, // Txt-file data
  331 |     obj2: Record<string, any>, // Run-time data
  332 |   ) {
  333 |     console.log("--------------Response------------------");
  334 |   
  335 |     let missingKeysCount = 0;
  336 |   
  337 |     for (const key in obj1) {
  338 |       if (key in obj2) {
  339 |         const word1: string = await this.extractEnglishWord(obj1[key].Response);
  340 |         let word2: string = await this.extractEnglishWord(obj2[key].Response);
  341 |   
> 342 |         expect.soft(word2).toContain(word1);  
      |                            ^ Error: expect(received).toContain(expected) // indexOf
  343 |         console.log("\n", word2, "===", word1);
  344 |         RawValueLogger.log(`  [Response]: "${key}":  "${word1}", = "${word2}"`);
  345 |       } else {
  346 |         missingKeysCount++;
  347 |         console.warn(`Response '${key}' not found in the second object`);
  348 |       }
  349 |     }
  350 |   
  351 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  352 |   
  353 |     if (missingKeysCount > 3) {
  354 |       console.error(`Too many missing keys! Total: ${missingKeysCount}`);
  355 |     }
  356 |   }
  357 |   
  358 |   async extractEnglishWord(text: string): Promise<string> {
  359 |     text = cheerio.load(text).text().trim();  
  360 |     text = decode(text);  
  361 |     const match = text.match(/^[a-zA-Z]+/);
  362 |     return match ? match[0].toLowerCase() : text.toLowerCase();
  363 |   }
  364 | 
  365 |   async validateAndAssert_Score(
  366 |     obj1: Record<string, any>,
  367 |     obj2: Record<string, any>,
  368 |   ) {
  369 | 
  370 |     console.log("--------------Score------------------");
  371 | 
  372 |     let missingKeysCount = 0;
  373 | 
  374 |     for (const key in obj1) {
  375 |       if (key in obj2) {
  376 |         const Do1: number = Number(obj1[key].Score);
  377 |         const Do2: number = Number(obj2[key].Score);
  378 | 
  379 |         expect.soft(Do1).toEqual(Do2);
  380 | 
  381 |         console.log("\n", Do1, "===", Do2);
  382 |         RawValueLogger.log(`  [Score]: "${key}":  "${Do1}", = "${Do2}"`);
  383 |       } else {
  384 |         missingKeysCount++;
  385 |         console.warn(`Score '${key}' not found in the second object`);
  386 |       }
  387 |     }
  388 | 
  389 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  390 | 
  391 |     if (missingKeysCount > 3) {
  392 |       console.error(`Too many missing keys in Score validation! Total: ${missingKeysCount}`);
  393 |     }
  394 |   }
  395 | 
  396 |   async getExcelasJson(filePATH: string): Promise<Array<Record<string, any>>> {
  397 |     const filePath = path.join(__dirname, filePATH);
  398 |     const workbook = xlsx.readFile(filePath);
  399 |     const sheetName = workbook.SheetNames[0];
  400 |     const sheet = workbook.Sheets[sheetName];
  401 |     this.selTestJsonData = xlsx.utils.sheet_to_json(sheet);
  402 |     return this.selTestJsonData;
  403 |   }
  404 | 
  405 |   async getColumnOrValueFromExcel(
  406 |     columnName: string,
  407 |     columnValue?: string,
  408 |     returnColumnName?: string,
  409 |   ): Promise<string[] | undefined> {
  410 |     if (this.selTestJsonData === undefined) {
  411 |       this.selTestJsonData = await this.getExcelasJson(
  412 |         `../../dataFiles/derivedScores/WJV SelTestTable.xlsx`,
  413 |       );
  414 |     }
  415 | 
  416 |     if (columnValue === undefined && returnColumnName === undefined) {
  417 |       const values = this.selTestJsonData.map((row: any) => row[columnName]);
  418 |       return [...new Set(values)];
  419 |     } else {
  420 |       const row = this.selTestJsonData.find(
  421 |         (row: any) => row[columnName] === columnValue,
  422 |       );
  423 |       if (row) {
  424 |         return row[returnColumnName];
  425 |       } else {
  426 |         return undefined;
  427 |       }
  428 |     }
  429 |   }
  430 | 
  431 |   async getRowDataOfSpecifiedColumnFromSchemaFiles(
  432 |     fileName: string,
  433 |     columnName: string,
  434 |   ): Promise<Map<string, string>> {
  435 |     const filePath = path.join(
  436 |       __dirname,
  437 |       `../../dataFiles/test_schema_files/${fileName}`,
  438 |     );
  439 |     const workbook = xlsx.readFile(filePath);
  440 |     const sheetName = workbook.SheetNames[0];
  441 |     const sheet = workbook.Sheets[sheetName];
  442 |     const jsonData: Array<Record<string, any>> =
```