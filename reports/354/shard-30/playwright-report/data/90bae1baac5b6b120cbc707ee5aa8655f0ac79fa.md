# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/SENREP_Rerouting.spec.ts >>  SENREP Rerouting and LeftNav >> Grade 2 - Score Error Scenario for SSP3 Test Rerouting
- Location: src/tests/ReroutingandLeftNav/SENREP_Rerouting.spec.ts:10:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Examinee completed all required test items."
Received string:    "Examinee completed all required test items"
```

```
Error: No matching row found where ExeeID contains "SENREP.W5PA"
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
              - heading "Hello 51Pw Aut25AH" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "51Pw Aut25AH" [ref=e10] [cursor=pointer]
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
                  - row "Begin assignment Karla Ullrich_1790672549330 (+1 more) for N99196A42749, Quentin Karla Ullrich_1790672549330 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Karla Ullrich_1790672549330 (+1 more) for N99196A42749, Quentin" [ref=e75]:
                      - button "Begin assignment Karla Ullrich_1790672549330 (+1 more) for N99196A42749, Quentin" [disabled] [ref=e76]:
                        - generic [ref=e77]: N99196A42749, Quentin
                    - cell "Karla Ullrich_1790672549330 (+1 more) More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Karla Ullrich_1790672549330 (+1 more)" [disabled] [ref=e80]:
                          - generic [ref=e81]: Karla Ullrich_1790672549330 (+1 more)
                        - button "More info" [ref=e82]
                    - cell "90 days" [ref=e83]:
                      - button "90 days" [disabled] [ref=e84]
                    - cell "● Submitted" [ref=e85]:
                      - button "● Submitted" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row "Begin assignment Katherine Murazik_1790672724384 for N3308A62758, Sherwood Katherine Murazik_1790672724384 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Katherine Murazik_1790672724384 for N3308A62758, Sherwood" [ref=e93]:
                      - button "Begin assignment Katherine Murazik_1790672724384 for N3308A62758, Sherwood" [disabled] [ref=e94]:
                        - generic [ref=e95]: N3308A62758, Sherwood
                    - cell "Katherine Murazik_1790672724384 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Katherine Murazik_1790672724384" [disabled] [ref=e98]:
                          - generic [ref=e99]: Katherine Murazik_1790672724384
                        - button "More info" [ref=e100]
                    - cell "—" [ref=e101]:
                      - button "—" [disabled] [ref=e102]
                    - cell "● Not Started" [ref=e103]:
                      - button "● Not Started" [disabled] [ref=e104]:
                        - generic [ref=e105]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e106]:
                      - button "Edit Assignment" [disabled] [ref=e107]
                      - button "Add Tests" [disabled] [ref=e108]
                      - button "Assignment actions" [ref=e109]
                  - row "Begin assignment Mr. Philip Braun_1790672612365 for N84050A15407, Genesis Mr. Philip Braun_1790672612365 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Mr. Philip Braun_1790672612365 for N84050A15407, Genesis" [ref=e111]:
                      - button "Begin assignment Mr. Philip Braun_1790672612365 for N84050A15407, Genesis" [disabled] [ref=e112]:
                        - generic [ref=e113]: N84050A15407, Genesis
                    - cell "Mr. Philip Braun_1790672612365 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Mr. Philip Braun_1790672612365" [disabled] [ref=e116]:
                          - generic [ref=e117]: Mr. Philip Braun_1790672612365
                        - button "More info" [ref=e118]
                    - cell "90 days" [ref=e119]:
                      - button "90 days" [disabled] [ref=e120]
                    - cell "● Submitted" [ref=e121]:
                      - button "● Submitted" [disabled] [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e124]:
                      - button "Edit Assignment" [disabled] [ref=e125]
                      - button "Add Tests" [disabled] [ref=e126]
                      - button "Assignment actions" [ref=e127]
                  - row "Begin assignment Glenn Towne_1790672467361 (+1 more) for N47066A34324, Yvonne Glenn Towne_1790672467361 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Glenn Towne_1790672467361 (+1 more) for N47066A34324, Yvonne" [ref=e129]:
                      - button "Begin assignment Glenn Towne_1790672467361 (+1 more) for N47066A34324, Yvonne" [disabled] [ref=e130]:
                        - generic [ref=e131]: N47066A34324, Yvonne
                    - cell "Glenn Towne_1790672467361 (+1 more) More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Glenn Towne_1790672467361 (+1 more)" [disabled] [ref=e134]:
                          - generic [ref=e135]: Glenn Towne_1790672467361 (+1 more)
                        - button "More info" [ref=e136]
                    - cell "90 days" [ref=e137]:
                      - button "90 days" [disabled] [ref=e138]
                    - cell "● Submitted" [ref=e139]:
                      - button "● Submitted" [disabled] [ref=e140]:
                        - generic [ref=e141]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e142]:
                      - button "Edit Assignment" [disabled] [ref=e143]
                      - button "Add Tests" [disabled] [ref=e144]
                      - button "Assignment actions" [ref=e145]
                  - row "Begin assignment Rosalie Ebert_1790672347327 for N73333A31254, Fae Rosalie Ebert_1790672347327 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Rosalie Ebert_1790672347327 for N73333A31254, Fae" [ref=e147]:
                      - button "Begin assignment Rosalie Ebert_1790672347327 for N73333A31254, Fae" [disabled] [ref=e148]:
                        - generic [ref=e149]: N73333A31254, Fae
                    - cell "Rosalie Ebert_1790672347327 More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Rosalie Ebert_1790672347327" [disabled] [ref=e152]:
                          - generic [ref=e153]: Rosalie Ebert_1790672347327
                        - button "More info" [ref=e154]
                    - cell "90 days" [ref=e155]:
                      - button "90 days" [disabled] [ref=e156]
                    - cell "● Submitted" [ref=e157]:
                      - button "● Submitted" [disabled] [ref=e158]:
                        - generic [ref=e159]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e160]:
                      - button "Edit Assignment" [disabled] [ref=e161]
                      - button "Add Tests" [disabled] [ref=e162]
                      - button "Assignment actions" [ref=e163]
                  - row "Begin assignment Leticia Buckridge_1790672212793 for N80609A69767, Quinton Leticia Buckridge_1790672212793 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Leticia Buckridge_1790672212793 for N80609A69767, Quinton" [ref=e165]:
                      - button "Begin assignment Leticia Buckridge_1790672212793 for N80609A69767, Quinton" [disabled] [ref=e166]:
                        - generic [ref=e167]: N80609A69767, Quinton
                    - cell "Leticia Buckridge_1790672212793 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Leticia Buckridge_1790672212793" [disabled] [ref=e170]:
                          - generic [ref=e171]: Leticia Buckridge_1790672212793
                        - button "More info" [ref=e172]
                    - cell "90 days" [ref=e173]:
                      - button "90 days" [disabled] [ref=e174]
                    - cell "● Submitted" [ref=e175]:
                      - button "● Submitted" [disabled] [ref=e176]:
                        - generic [ref=e177]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e178]:
                      - button "Edit Assignment" [disabled] [ref=e179]
                      - button "Add Tests" [disabled] [ref=e180]
                      - button "Assignment actions" [ref=e181]
                  - row "Begin assignment Natalie Morar_1790672080324 for N83442A90760, Loren Natalie Morar_1790672080324 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Natalie Morar_1790672080324 for N83442A90760, Loren" [ref=e183]:
                      - button "Begin assignment Natalie Morar_1790672080324 for N83442A90760, Loren" [disabled] [ref=e184]:
                        - generic [ref=e185]: N83442A90760, Loren
                    - cell "Natalie Morar_1790672080324 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Natalie Morar_1790672080324" [disabled] [ref=e188]:
                          - generic [ref=e189]: Natalie Morar_1790672080324
                        - button "More info" [ref=e190]
                    - cell "90 days" [ref=e191]:
                      - button "90 days" [disabled] [ref=e192]
                    - cell "● Submitted" [ref=e193]:
                      - button "● Submitted" [disabled] [ref=e194]:
                        - generic [ref=e195]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e196]:
                      - button "Edit Assignment" [disabled] [ref=e197]
                      - button "Add Tests" [disabled] [ref=e198]
                      - button "Assignment actions" [ref=e199]
                  - row "Begin assignment Penny Brakus_1790672109181 for N42779A56410, Mya Penny Brakus_1790672109181 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Penny Brakus_1790672109181 for N42779A56410, Mya" [ref=e201]:
                      - button "Begin assignment Penny Brakus_1790672109181 for N42779A56410, Mya" [disabled] [ref=e202]:
                        - generic [ref=e203]: N42779A56410, Mya
                    - cell "Penny Brakus_1790672109181 More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Penny Brakus_1790672109181" [disabled] [ref=e206]:
                          - generic [ref=e207]: Penny Brakus_1790672109181
                        - button "More info" [ref=e208]
                    - cell "90 days" [ref=e209]:
                      - button "90 days" [disabled] [ref=e210]
                    - cell "● In Progress ↩️ Resume Assignment" [ref=e211]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e212]:
                        - generic [ref=e213]: ●
                        - text: In Progress
                        - text: ↩️ Resume Assignment
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e214]:
                      - button "Edit Assignment" [disabled] [ref=e215]
                      - button "Add Tests" [disabled] [ref=e216]
                      - button "Assignment actions" [ref=e217]
                  - row "Begin assignment Jimmy Doyle_1790671985686 for N19756A17616, Joesph Jimmy Doyle_1790671985686 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Jimmy Doyle_1790671985686 for N19756A17616, Joesph" [ref=e219]:
                      - button "Begin assignment Jimmy Doyle_1790671985686 for N19756A17616, Joesph" [disabled] [ref=e220]:
                        - generic [ref=e221]: N19756A17616, Joesph
                    - cell "Jimmy Doyle_1790671985686 More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Jimmy Doyle_1790671985686" [disabled] [ref=e224]:
                          - generic [ref=e225]: Jimmy Doyle_1790671985686
                        - button "More info" [ref=e226]
                    - cell "90 days" [ref=e227]:
                      - button "90 days" [disabled] [ref=e228]
                    - cell "● In Progress ↩️ Resume Assignment" [ref=e229]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: In Progress
                        - text: ↩️ Resume Assignment
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row "Begin assignment Kelli Feest_1790671699810 for N75452A50531, Emanuel Kelli Feest_1790671699810 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Kelli Feest_1790671699810 for N75452A50531, Emanuel" [ref=e237]:
                      - button "Begin assignment Kelli Feest_1790671699810 for N75452A50531, Emanuel" [disabled] [ref=e238]:
                        - generic [ref=e239]: N75452A50531, Emanuel
                    - cell "Kelli Feest_1790671699810 More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Kelli Feest_1790671699810" [disabled] [ref=e242]:
                          - generic [ref=e243]: Kelli Feest_1790671699810
                        - button "More info" [ref=e244]
                    - cell "90 days" [ref=e245]:
                      - button "90 days" [disabled] [ref=e246]
                    - cell "● Submitted" [ref=e247]:
                      - button "● Submitted" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row "Begin assignment Irving Ruecker_1790671749883 for N81670A85504, Henriette Irving Ruecker_1790671749883 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Irving Ruecker_1790671749883 for N81670A85504, Henriette" [ref=e255]:
                      - button "Begin assignment Irving Ruecker_1790671749883 for N81670A85504, Henriette" [disabled] [ref=e256]:
                        - generic [ref=e257]: N81670A85504, Henriette
                    - cell "Irving Ruecker_1790671749883 More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Irving Ruecker_1790671749883" [disabled] [ref=e260]:
                          - generic [ref=e261]: Irving Ruecker_1790671749883
                        - button "More info" [ref=e262]
                    - cell "90 days" [ref=e263]:
                      - button "90 days" [disabled] [ref=e264]
                    - cell "● In Progress ↩️ Resume Assignment" [ref=e265]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e266]:
                        - generic [ref=e267]: ●
                        - text: In Progress
                        - text: ↩️ Resume Assignment
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e268]:
                      - button "Edit Assignment" [disabled] [ref=e269]
                      - button "Add Tests" [disabled] [ref=e270]
                      - button "Assignment actions" [ref=e271]
                  - row "Begin assignment Shirley Hane-McLaughlin_1790671462720 for N73033A56328, Matilda Shirley Hane-McLaughlin_1790671462720 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Shirley Hane-McLaughlin_1790671462720 for N73033A56328, Matilda" [ref=e273]:
                      - button "Begin assignment Shirley Hane-McLaughlin_1790671462720 for N73033A56328, Matilda" [disabled] [ref=e274]:
                        - generic [ref=e275]: N73033A56328, Matilda
                    - cell "Shirley Hane-McLaughlin_1790671462720 More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Shirley Hane-McLaughlin_1790671462720" [disabled] [ref=e278]:
                          - generic [ref=e279]: Shirley Hane-McLaughlin_1790671462720
                        - button "More info" [ref=e280]
                    - cell "90 days" [ref=e281]:
                      - button "90 days" [disabled] [ref=e282]
                    - cell "● Submitted" [ref=e283]:
                      - button "● Submitted" [disabled] [ref=e284]:
                        - generic [ref=e285]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e286]:
                      - button "Edit Assignment" [disabled] [ref=e287]
                      - button "Add Tests" [disabled] [ref=e288]
                      - button "Assignment actions" [ref=e289]
                  - row "Begin assignment Sue Metz-Pfeffer IV_1790671201244 for N65539A9320, Kellie Sue Metz-Pfeffer IV_1790671201244 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Sue Metz-Pfeffer IV_1790671201244 for N65539A9320, Kellie" [ref=e291]:
                      - button "Begin assignment Sue Metz-Pfeffer IV_1790671201244 for N65539A9320, Kellie" [disabled] [ref=e292]:
                        - generic [ref=e293]: N65539A9320, Kellie
                    - cell "Sue Metz-Pfeffer IV_1790671201244 More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Sue Metz-Pfeffer IV_1790671201244" [disabled] [ref=e296]:
                          - generic [ref=e297]: Sue Metz-Pfeffer IV_1790671201244
                        - button "More info" [ref=e298]
                    - cell "90 days" [ref=e299]:
                      - button "90 days" [disabled] [ref=e300]
                    - cell "● Submitted" [ref=e301]:
                      - button "● Submitted" [disabled] [ref=e302]:
                        - generic [ref=e303]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e304]:
                      - button "Edit Assignment" [disabled] [ref=e305]
                      - button "Add Tests" [disabled] [ref=e306]
                      - button "Assignment actions" [ref=e307]
                  - row "Begin assignment Miguel Stark_1790670679464 for N86813A32249, Trey Miguel Stark_1790670679464 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e308] [cursor=pointer]:
                    - cell "Begin assignment Miguel Stark_1790670679464 for N86813A32249, Trey" [ref=e309]:
                      - button "Begin assignment Miguel Stark_1790670679464 for N86813A32249, Trey" [disabled] [ref=e310]:
                        - generic [ref=e311]: N86813A32249, Trey
                    - cell "Miguel Stark_1790670679464 More info" [ref=e312]:
                      - generic [ref=e313]:
                        - button "Miguel Stark_1790670679464" [disabled] [ref=e314]:
                          - generic [ref=e315]: Miguel Stark_1790670679464
                        - button "More info" [ref=e316]
                    - cell "90 days" [ref=e317]:
                      - button "90 days" [disabled] [ref=e318]
                    - cell "● Submitted" [ref=e319]:
                      - button "● Submitted" [disabled] [ref=e320]:
                        - generic [ref=e321]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e322]:
                      - button "Edit Assignment" [disabled] [ref=e323]
                      - button "Add Tests" [disabled] [ref=e324]
                      - button "Assignment actions" [ref=e325]
                  - row "Begin assignment Mr. Kurt Abernathy_1790670427558 for N46649A36125, Skylar Mr. Kurt Abernathy_1790670427558 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e326] [cursor=pointer]:
                    - cell "Begin assignment Mr. Kurt Abernathy_1790670427558 for N46649A36125, Skylar" [ref=e327]:
                      - button "Begin assignment Mr. Kurt Abernathy_1790670427558 for N46649A36125, Skylar" [disabled] [ref=e328]:
                        - generic [ref=e329]: N46649A36125, Skylar
                    - cell "Mr. Kurt Abernathy_1790670427558 More info" [ref=e330]:
                      - generic [ref=e331]:
                        - button "Mr. Kurt Abernathy_1790670427558" [disabled] [ref=e332]:
                          - generic [ref=e333]: Mr. Kurt Abernathy_1790670427558
                        - button "More info" [ref=e334]
                    - cell "90 days" [ref=e335]:
                      - button "90 days" [disabled] [ref=e336]
                    - cell "● Submitted" [ref=e337]:
                      - button "● Submitted" [disabled] [ref=e338]:
                        - generic [ref=e339]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e340]:
                      - button "Edit Assignment" [disabled] [ref=e341]
                      - button "Add Tests" [disabled] [ref=e342]
                      - button "Assignment actions" [ref=e343]
                  - row "Begin assignment Kelli Sanford_1790670176869 for N16996A3932, Sabina Kelli Sanford_1790670176869 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e344] [cursor=pointer]:
                    - cell "Begin assignment Kelli Sanford_1790670176869 for N16996A3932, Sabina" [ref=e345]:
                      - button "Begin assignment Kelli Sanford_1790670176869 for N16996A3932, Sabina" [disabled] [ref=e346]:
                        - generic [ref=e347]: N16996A3932, Sabina
                    - cell "Kelli Sanford_1790670176869 More info" [ref=e348]:
                      - generic [ref=e349]:
                        - button "Kelli Sanford_1790670176869" [disabled] [ref=e350]:
                          - generic [ref=e351]: Kelli Sanford_1790670176869
                        - button "More info" [ref=e352]
                    - cell "90 days" [ref=e353]:
                      - button "90 days" [disabled] [ref=e354]
                    - cell "● Submitted" [ref=e355]:
                      - button "● Submitted" [disabled] [ref=e356]:
                        - generic [ref=e357]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e358]:
                      - button "Edit Assignment" [disabled] [ref=e359]
                      - button "Add Tests" [disabled] [ref=e360]
                      - button "Assignment actions" [ref=e361]
                  - row "Begin assignment Mary Heidenreich_1790669920926 for N44465A38843, Fae Mary Heidenreich_1790669920926 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e362] [cursor=pointer]:
                    - cell "Begin assignment Mary Heidenreich_1790669920926 for N44465A38843, Fae" [ref=e363]:
                      - button "Begin assignment Mary Heidenreich_1790669920926 for N44465A38843, Fae" [disabled] [ref=e364]:
                        - generic [ref=e365]: N44465A38843, Fae
                    - cell "Mary Heidenreich_1790669920926 More info" [ref=e366]:
                      - generic [ref=e367]:
                        - button "Mary Heidenreich_1790669920926" [disabled] [ref=e368]:
                          - generic [ref=e369]: Mary Heidenreich_1790669920926
                        - button "More info" [ref=e370]
                    - cell "90 days" [ref=e371]:
                      - button "90 days" [disabled] [ref=e372]
                    - cell "● Submitted" [ref=e373]:
                      - button "● Submitted" [disabled] [ref=e374]:
                        - generic [ref=e375]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e376]:
                      - button "Edit Assignment" [disabled] [ref=e377]
                      - button "Add Tests" [disabled] [ref=e378]
                      - button "Assignment actions" [ref=e379]
                  - row "Begin assignment Alison Bosco_1790669675236 for N9957A43887, Verla Alison Bosco_1790669675236 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e380] [cursor=pointer]:
                    - cell "Begin assignment Alison Bosco_1790669675236 for N9957A43887, Verla" [ref=e381]:
                      - button "Begin assignment Alison Bosco_1790669675236 for N9957A43887, Verla" [disabled] [ref=e382]:
                        - generic [ref=e383]: N9957A43887, Verla
                    - cell "Alison Bosco_1790669675236 More info" [ref=e384]:
                      - generic [ref=e385]:
                        - button "Alison Bosco_1790669675236" [disabled] [ref=e386]:
                          - generic [ref=e387]: Alison Bosco_1790669675236
                        - button "More info" [ref=e388]
                    - cell "90 days" [ref=e389]:
                      - button "90 days" [disabled] [ref=e390]
                    - cell "● Submitted" [ref=e391]:
                      - button "● Submitted" [disabled] [ref=e392]:
                        - generic [ref=e393]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e394]:
                      - button "Edit Assignment" [disabled] [ref=e395]
                      - button "Add Tests" [disabled] [ref=e396]
                      - button "Assignment actions" [ref=e397]
                  - row "Begin assignment Estelle Moen_1787903850533 for N28830A33271, Grayce Estelle Moen_1787903850533 More info 58 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e398] [cursor=pointer]:
                    - cell "Begin assignment Estelle Moen_1787903850533 for N28830A33271, Grayce" [ref=e399]:
                      - button "Begin assignment Estelle Moen_1787903850533 for N28830A33271, Grayce" [disabled] [ref=e400]:
                        - generic [ref=e401]: N28830A33271, Grayce
                    - cell "Estelle Moen_1787903850533 More info" [ref=e402]:
                      - generic [ref=e403]:
                        - button "Estelle Moen_1787903850533" [disabled] [ref=e404]:
                          - generic [ref=e405]: Estelle Moen_1787903850533
                        - button "More info" [ref=e406]
                    - cell "58 days" [ref=e407]:
                      - button "58 days" [disabled] [ref=e408]
                    - cell "● Submitted" [ref=e409]:
                      - button "● Submitted" [disabled] [ref=e410]:
                        - generic [ref=e411]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e412]:
                      - button "Edit Assignment" [disabled] [ref=e413]
                      - button "Add Tests" [disabled] [ref=e414]
                      - button "Assignment actions" [ref=e415]
                  - row "Begin assignment Caroline Hackett_1787903531442 for N29101A97861, Hadley Caroline Hackett_1787903531442 More info 58 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e416] [cursor=pointer]:
                    - cell "Begin assignment Caroline Hackett_1787903531442 for N29101A97861, Hadley" [ref=e417]:
                      - button "Begin assignment Caroline Hackett_1787903531442 for N29101A97861, Hadley" [disabled] [ref=e418]:
                        - generic [ref=e419]: N29101A97861, Hadley
                    - cell "Caroline Hackett_1787903531442 More info" [ref=e420]:
                      - generic [ref=e421]:
                        - button "Caroline Hackett_1787903531442" [disabled] [ref=e422]:
                          - generic [ref=e423]: Caroline Hackett_1787903531442
                        - button "More info" [ref=e424]
                    - cell "58 days" [ref=e425]:
                      - button "58 days" [disabled] [ref=e426]
                    - cell "● Submitted" [ref=e427]:
                      - button "● Submitted" [disabled] [ref=e428]:
                        - generic [ref=e429]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e430]:
                      - button "Edit Assignment" [disabled] [ref=e431]
                      - button "Add Tests" [disabled] [ref=e432]
                      - button "Assignment actions" [ref=e433]
                  - row "Begin assignment Jessie Brakus_1787903224108 for N89666A74778, Katelin Jessie Brakus_1787903224108 More info 58 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e434] [cursor=pointer]:
                    - cell "Begin assignment Jessie Brakus_1787903224108 for N89666A74778, Katelin" [ref=e435]:
                      - button "Begin assignment Jessie Brakus_1787903224108 for N89666A74778, Katelin" [disabled] [ref=e436]:
                        - generic [ref=e437]: N89666A74778, Katelin
                    - cell "Jessie Brakus_1787903224108 More info" [ref=e438]:
                      - generic [ref=e439]:
                        - button "Jessie Brakus_1787903224108" [disabled] [ref=e440]:
                          - generic [ref=e441]: Jessie Brakus_1787903224108
                        - button "More info" [ref=e442]
                    - cell "58 days" [ref=e443]:
                      - button "58 days" [disabled] [ref=e444]
                    - cell "● Submitted" [ref=e445]:
                      - button "● Submitted" [disabled] [ref=e446]:
                        - generic [ref=e447]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e448]:
                      - button "Edit Assignment" [disabled] [ref=e449]
                      - button "Add Tests" [disabled] [ref=e450]
                      - button "Assignment actions" [ref=e451]
                  - row "Begin assignment Miss Luz Price_1787890726569 for N9664A77050, Wiley Miss Luz Price_1787890726569 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e452] [cursor=pointer]:
                    - cell "Begin assignment Miss Luz Price_1787890726569 for N9664A77050, Wiley" [ref=e453]:
                      - button "Begin assignment Miss Luz Price_1787890726569 for N9664A77050, Wiley" [disabled] [ref=e454]:
                        - generic [ref=e455]: N9664A77050, Wiley
                    - cell "Miss Luz Price_1787890726569 More info" [ref=e456]:
                      - generic [ref=e457]:
                        - button "Miss Luz Price_1787890726569" [disabled] [ref=e458]:
                          - generic [ref=e459]: Miss Luz Price_1787890726569
                        - button "More info" [ref=e460]
                    - cell "57 days" [ref=e461]:
                      - button "57 days" [disabled] [ref=e462]
                    - cell "● Submitted" [ref=e463]:
                      - button "● Submitted" [disabled] [ref=e464]:
                        - generic [ref=e465]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e466]:
                      - button "Edit Assignment" [disabled] [ref=e467]
                      - button "Add Tests" [disabled] [ref=e468]
                      - button "Assignment actions" [ref=e469]
                  - row "Begin assignment Shawna Metz_1787890431162 for N97596A22127, Brain Shawna Metz_1787890431162 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e470] [cursor=pointer]:
                    - cell "Begin assignment Shawna Metz_1787890431162 for N97596A22127, Brain" [ref=e471]:
                      - button "Begin assignment Shawna Metz_1787890431162 for N97596A22127, Brain" [disabled] [ref=e472]:
                        - generic [ref=e473]: N97596A22127, Brain
                    - cell "Shawna Metz_1787890431162 More info" [ref=e474]:
                      - generic [ref=e475]:
                        - button "Shawna Metz_1787890431162" [disabled] [ref=e476]:
                          - generic [ref=e477]: Shawna Metz_1787890431162
                        - button "More info" [ref=e478]
                    - cell "57 days" [ref=e479]:
                      - button "57 days" [disabled] [ref=e480]
                    - cell "● Submitted" [ref=e481]:
                      - button "● Submitted" [disabled] [ref=e482]:
                        - generic [ref=e483]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e484]:
                      - button "Edit Assignment" [disabled] [ref=e485]
                      - button "Add Tests" [disabled] [ref=e486]
                      - button "Assignment actions" [ref=e487]
                  - row "Begin assignment Karen Denesik_1787890158466 for N60536A4185, Webster Karen Denesik_1787890158466 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e488] [cursor=pointer]:
                    - cell "Begin assignment Karen Denesik_1787890158466 for N60536A4185, Webster" [ref=e489]:
                      - button "Begin assignment Karen Denesik_1787890158466 for N60536A4185, Webster" [disabled] [ref=e490]:
                        - generic [ref=e491]: N60536A4185, Webster
                    - cell "Karen Denesik_1787890158466 More info" [ref=e492]:
                      - generic [ref=e493]:
                        - button "Karen Denesik_1787890158466" [disabled] [ref=e494]:
                          - generic [ref=e495]: Karen Denesik_1787890158466
                        - button "More info" [ref=e496]
                    - cell "57 days" [ref=e497]:
                      - button "57 days" [disabled] [ref=e498]
                    - cell "● Submitted" [ref=e499]:
                      - button "● Submitted" [disabled] [ref=e500]:
                        - generic [ref=e501]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e502]:
                      - button "Edit Assignment" [disabled] [ref=e503]
                      - button "Add Tests" [disabled] [ref=e504]
                      - button "Assignment actions" [ref=e505]
                  - row "Begin assignment Ms. Lorena Moore Jr._1787889874921 for N4742A77171, Tamara Ms. Lorena Moore Jr._1787889874921 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e506] [cursor=pointer]:
                    - cell "Begin assignment Ms. Lorena Moore Jr._1787889874921 for N4742A77171, Tamara" [ref=e507]:
                      - button "Begin assignment Ms. Lorena Moore Jr._1787889874921 for N4742A77171, Tamara" [disabled] [ref=e508]:
                        - generic [ref=e509]: N4742A77171, Tamara
                    - cell "Ms. Lorena Moore Jr._1787889874921 More info" [ref=e510]:
                      - generic [ref=e511]:
                        - button "Ms. Lorena Moore Jr._1787889874921" [disabled] [ref=e512]:
                          - generic [ref=e513]: Ms. Lorena Moore Jr._1787889874921
                        - button "More info" [ref=e514]
                    - cell "57 days" [ref=e515]:
                      - button "57 days" [disabled] [ref=e516]
                    - cell "● Submitted" [ref=e517]:
                      - button "● Submitted" [disabled] [ref=e518]:
                        - generic [ref=e519]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e520]:
                      - button "Edit Assignment" [disabled] [ref=e521]
                      - button "Add Tests" [disabled] [ref=e522]
                      - button "Assignment actions" [ref=e523]
                  - row "Begin assignment Jeannie Lesch_1787889592213 for N12309A71490, Kamille Jeannie Lesch_1787889592213 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e524] [cursor=pointer]:
                    - cell "Begin assignment Jeannie Lesch_1787889592213 for N12309A71490, Kamille" [ref=e525]:
                      - button "Begin assignment Jeannie Lesch_1787889592213 for N12309A71490, Kamille" [disabled] [ref=e526]:
                        - generic [ref=e527]: N12309A71490, Kamille
                    - cell "Jeannie Lesch_1787889592213 More info" [ref=e528]:
                      - generic [ref=e529]:
                        - button "Jeannie Lesch_1787889592213" [disabled] [ref=e530]:
                          - generic [ref=e531]: Jeannie Lesch_1787889592213
                        - button "More info" [ref=e532]
                    - cell "57 days" [ref=e533]:
                      - button "57 days" [disabled] [ref=e534]
                    - cell "● Submitted" [ref=e535]:
                      - button "● Submitted" [disabled] [ref=e536]:
                        - generic [ref=e537]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e538]:
                      - button "Edit Assignment" [disabled] [ref=e539]
                      - button "Add Tests" [disabled] [ref=e540]
                      - button "Assignment actions" [ref=e541]
                  - row "Begin assignment Adam White_1787889285661 for N59765A31297, Katrine Adam White_1787889285661 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e542] [cursor=pointer]:
                    - cell "Begin assignment Adam White_1787889285661 for N59765A31297, Katrine" [ref=e543]:
                      - button "Begin assignment Adam White_1787889285661 for N59765A31297, Katrine" [disabled] [ref=e544]:
                        - generic [ref=e545]: N59765A31297, Katrine
                    - cell "Adam White_1787889285661 More info" [ref=e546]:
                      - generic [ref=e547]:
                        - button "Adam White_1787889285661" [disabled] [ref=e548]:
                          - generic [ref=e549]: Adam White_1787889285661
                        - button "More info" [ref=e550]
                    - cell "57 days" [ref=e551]:
                      - button "57 days" [disabled] [ref=e552]
                    - cell "● Submitted" [ref=e553]:
                      - button "● Submitted" [disabled] [ref=e554]:
                        - generic [ref=e555]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e556]:
                      - button "Edit Assignment" [disabled] [ref=e557]
                      - button "Add Tests" [disabled] [ref=e558]
                      - button "Assignment actions" [ref=e559]
                  - row "Begin assignment Gretchen Heller V_1787888996908 for N53553A68645, Ronny Gretchen Heller V_1787888996908 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e560] [cursor=pointer]:
                    - cell "Begin assignment Gretchen Heller V_1787888996908 for N53553A68645, Ronny" [ref=e561]:
                      - button "Begin assignment Gretchen Heller V_1787888996908 for N53553A68645, Ronny" [disabled] [ref=e562]:
                        - generic [ref=e563]: N53553A68645, Ronny
                    - cell "Gretchen Heller V_1787888996908 More info" [ref=e564]:
                      - generic [ref=e565]:
                        - button "Gretchen Heller V_1787888996908" [disabled] [ref=e566]:
                          - generic [ref=e567]: Gretchen Heller V_1787888996908
                        - button "More info" [ref=e568]
                    - cell "57 days" [ref=e569]:
                      - button "57 days" [disabled] [ref=e570]
                    - cell "● Submitted" [ref=e571]:
                      - button "● Submitted" [disabled] [ref=e572]:
                        - generic [ref=e573]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e574]:
                      - button "Edit Assignment" [disabled] [ref=e575]
                      - button "Add Tests" [disabled] [ref=e576]
                      - button "Assignment actions" [ref=e577]
                  - row "Begin assignment Edward Weber_1787888731189 for N81312A38779, Jaquelin Edward Weber_1787888731189 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e578] [cursor=pointer]:
                    - cell "Begin assignment Edward Weber_1787888731189 for N81312A38779, Jaquelin" [ref=e579]:
                      - button "Begin assignment Edward Weber_1787888731189 for N81312A38779, Jaquelin" [disabled] [ref=e580]:
                        - generic [ref=e581]: N81312A38779, Jaquelin
                    - cell "Edward Weber_1787888731189 More info" [ref=e582]:
                      - generic [ref=e583]:
                        - button "Edward Weber_1787888731189" [disabled] [ref=e584]:
                          - generic [ref=e585]: Edward Weber_1787888731189
                        - button "More info" [ref=e586]
                    - cell "57 days" [ref=e587]:
                      - button "57 days" [disabled] [ref=e588]
                    - cell "● Submitted" [ref=e589]:
                      - button "● Submitted" [disabled] [ref=e590]:
                        - generic [ref=e591]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e592]:
                      - button "Edit Assignment" [disabled] [ref=e593]
                      - button "Add Tests" [disabled] [ref=e594]
                      - button "Assignment actions" [ref=e595]
                  - row "Begin assignment Chad Cremin Sr._1787888438323 for N83011A14170, Kenna Chad Cremin Sr._1787888438323 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e596] [cursor=pointer]:
                    - cell "Begin assignment Chad Cremin Sr._1787888438323 for N83011A14170, Kenna" [ref=e597]:
                      - button "Begin assignment Chad Cremin Sr._1787888438323 for N83011A14170, Kenna" [disabled] [ref=e598]:
                        - generic [ref=e599]: N83011A14170, Kenna
                    - cell "Chad Cremin Sr._1787888438323 More info" [ref=e600]:
                      - generic [ref=e601]:
                        - button "Chad Cremin Sr._1787888438323" [disabled] [ref=e602]:
                          - generic [ref=e603]: Chad Cremin Sr._1787888438323
                        - button "More info" [ref=e604]
                    - cell "57 days" [ref=e605]:
                      - button "57 days" [disabled] [ref=e606]
                    - cell "● Submitted" [ref=e607]:
                      - button "● Submitted" [disabled] [ref=e608]:
                        - generic [ref=e609]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e610]:
                      - button "Edit Assignment" [disabled] [ref=e611]
                      - button "Add Tests" [disabled] [ref=e612]
                      - button "Assignment actions" [ref=e613]
                  - row "Begin assignment Paul Mohr PhD_1787888135671 for N74914A27184, Addison Paul Mohr PhD_1787888135671 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e614] [cursor=pointer]:
                    - cell "Begin assignment Paul Mohr PhD_1787888135671 for N74914A27184, Addison" [ref=e615]:
                      - button "Begin assignment Paul Mohr PhD_1787888135671 for N74914A27184, Addison" [disabled] [ref=e616]:
                        - generic [ref=e617]: N74914A27184, Addison
                    - cell "Paul Mohr PhD_1787888135671 More info" [ref=e618]:
                      - generic [ref=e619]:
                        - button "Paul Mohr PhD_1787888135671" [disabled] [ref=e620]:
                          - generic [ref=e621]: Paul Mohr PhD_1787888135671
                        - button "More info" [ref=e622]
                    - cell "57 days" [ref=e623]:
                      - button "57 days" [disabled] [ref=e624]
                    - cell "● Submitted" [ref=e625]:
                      - button "● Submitted" [disabled] [ref=e626]:
                        - generic [ref=e627]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e628]:
                      - button "Edit Assignment" [disabled] [ref=e629]
                      - button "Add Tests" [disabled] [ref=e630]
                      - button "Assignment actions" [ref=e631]
                  - row "Begin assignment Rita Mayert Jr._1787887850030 for N76709A57960, Christop Rita Mayert Jr._1787887850030 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e632] [cursor=pointer]:
                    - cell "Begin assignment Rita Mayert Jr._1787887850030 for N76709A57960, Christop" [ref=e633]:
                      - button "Begin assignment Rita Mayert Jr._1787887850030 for N76709A57960, Christop" [disabled] [ref=e634]:
                        - generic [ref=e635]: N76709A57960, Christop
                    - cell "Rita Mayert Jr._1787887850030 More info" [ref=e636]:
                      - generic [ref=e637]:
                        - button "Rita Mayert Jr._1787887850030" [disabled] [ref=e638]:
                          - generic [ref=e639]: Rita Mayert Jr._1787887850030
                        - button "More info" [ref=e640]
                    - cell "57 days" [ref=e641]:
                      - button "57 days" [disabled] [ref=e642]
                    - cell "● Submitted" [ref=e643]:
                      - button "● Submitted" [disabled] [ref=e644]:
                        - generic [ref=e645]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e646]:
                      - button "Edit Assignment" [disabled] [ref=e647]
                      - button "Add Tests" [disabled] [ref=e648]
                      - button "Assignment actions" [ref=e649]
                  - row "Begin assignment Raul Pfeffer_1787887589361 for N23367A74418, Vance Raul Pfeffer_1787887589361 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e650] [cursor=pointer]:
                    - cell "Begin assignment Raul Pfeffer_1787887589361 for N23367A74418, Vance" [ref=e651]:
                      - button "Begin assignment Raul Pfeffer_1787887589361 for N23367A74418, Vance" [disabled] [ref=e652]:
                        - generic [ref=e653]: N23367A74418, Vance
                    - cell "Raul Pfeffer_1787887589361 More info" [ref=e654]:
                      - generic [ref=e655]:
                        - button "Raul Pfeffer_1787887589361" [disabled] [ref=e656]:
                          - generic [ref=e657]: Raul Pfeffer_1787887589361
                        - button "More info" [ref=e658]
                    - cell "57 days" [ref=e659]:
                      - button "57 days" [disabled] [ref=e660]
                    - cell "● Submitted" [ref=e661]:
                      - button "● Submitted" [disabled] [ref=e662]:
                        - generic [ref=e663]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e664]:
                      - button "Edit Assignment" [disabled] [ref=e665]
                      - button "Add Tests" [disabled] [ref=e666]
                      - button "Assignment actions" [ref=e667]
                  - row "Begin assignment Ronnie Koepp_1787887287735 for N69378A41608, Zackery Ronnie Koepp_1787887287735 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e668] [cursor=pointer]:
                    - cell "Begin assignment Ronnie Koepp_1787887287735 for N69378A41608, Zackery" [ref=e669]:
                      - button "Begin assignment Ronnie Koepp_1787887287735 for N69378A41608, Zackery" [disabled] [ref=e670]:
                        - generic [ref=e671]: N69378A41608, Zackery
                    - cell "Ronnie Koepp_1787887287735 More info" [ref=e672]:
                      - generic [ref=e673]:
                        - button "Ronnie Koepp_1787887287735" [disabled] [ref=e674]:
                          - generic [ref=e675]: Ronnie Koepp_1787887287735
                        - button "More info" [ref=e676]
                    - cell "57 days" [ref=e677]:
                      - button "57 days" [disabled] [ref=e678]
                    - cell "● Submitted" [ref=e679]:
                      - button "● Submitted" [disabled] [ref=e680]:
                        - generic [ref=e681]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e682]:
                      - button "Edit Assignment" [disabled] [ref=e683]
                      - button "Add Tests" [disabled] [ref=e684]
                      - button "Assignment actions" [ref=e685]
                  - row "Begin assignment Archie Gottlieb_1787886983084 for N36720A14125, Leonor Archie Gottlieb_1787886983084 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e686] [cursor=pointer]:
                    - cell "Begin assignment Archie Gottlieb_1787886983084 for N36720A14125, Leonor" [ref=e687]:
                      - button "Begin assignment Archie Gottlieb_1787886983084 for N36720A14125, Leonor" [disabled] [ref=e688]:
                        - generic [ref=e689]: N36720A14125, Leonor
                    - cell "Archie Gottlieb_1787886983084 More info" [ref=e690]:
                      - generic [ref=e691]:
                        - button "Archie Gottlieb_1787886983084" [disabled] [ref=e692]:
                          - generic [ref=e693]: Archie Gottlieb_1787886983084
                        - button "More info" [ref=e694]
                    - cell "57 days" [ref=e695]:
                      - button "57 days" [disabled] [ref=e696]
                    - cell "● Submitted" [ref=e697]:
                      - button "● Submitted" [disabled] [ref=e698]:
                        - generic [ref=e699]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e700]:
                      - button "Edit Assignment" [disabled] [ref=e701]
                      - button "Add Tests" [disabled] [ref=e702]
                      - button "Assignment actions" [ref=e703]
                  - row "Begin assignment Randall Blick_1787886664367 for N17680A94759, Enid Randall Blick_1787886664367 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e704] [cursor=pointer]:
                    - cell "Begin assignment Randall Blick_1787886664367 for N17680A94759, Enid" [ref=e705]:
                      - button "Begin assignment Randall Blick_1787886664367 for N17680A94759, Enid" [disabled] [ref=e706]:
                        - generic [ref=e707]: N17680A94759, Enid
                    - cell "Randall Blick_1787886664367 More info" [ref=e708]:
                      - generic [ref=e709]:
                        - button "Randall Blick_1787886664367" [disabled] [ref=e710]:
                          - generic [ref=e711]: Randall Blick_1787886664367
                        - button "More info" [ref=e712]
                    - cell "57 days" [ref=e713]:
                      - button "57 days" [disabled] [ref=e714]
                    - cell "● Submitted" [ref=e715]:
                      - button "● Submitted" [disabled] [ref=e716]:
                        - generic [ref=e717]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e718]:
                      - button "Edit Assignment" [disabled] [ref=e719]
                      - button "Add Tests" [disabled] [ref=e720]
                      - button "Assignment actions" [ref=e721]
                  - row "Begin assignment Mr. Jerald Heidenreich_1787886363822 for N67260A29148, Jadon Mr. Jerald Heidenreich_1787886363822 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e722] [cursor=pointer]:
                    - cell "Begin assignment Mr. Jerald Heidenreich_1787886363822 for N67260A29148, Jadon" [ref=e723]:
                      - button "Begin assignment Mr. Jerald Heidenreich_1787886363822 for N67260A29148, Jadon" [disabled] [ref=e724]:
                        - generic [ref=e725]: N67260A29148, Jadon
                    - cell "Mr. Jerald Heidenreich_1787886363822 More info" [ref=e726]:
                      - generic [ref=e727]:
                        - button "Mr. Jerald Heidenreich_1787886363822" [disabled] [ref=e728]:
                          - generic [ref=e729]: Mr. Jerald Heidenreich_1787886363822
                        - button "More info" [ref=e730]
                    - cell "57 days" [ref=e731]:
                      - button "57 days" [disabled] [ref=e732]
                    - cell "● Submitted" [ref=e733]:
                      - button "● Submitted" [disabled] [ref=e734]:
                        - generic [ref=e735]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e736]:
                      - button "Edit Assignment" [disabled] [ref=e737]
                      - button "Add Tests" [disabled] [ref=e738]
                      - button "Assignment actions" [ref=e739]
                  - row "Begin assignment Angelica Jacobson_1787886083435 for N84351A21686, Magnus Angelica Jacobson_1787886083435 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e740] [cursor=pointer]:
                    - cell "Begin assignment Angelica Jacobson_1787886083435 for N84351A21686, Magnus" [ref=e741]:
                      - button "Begin assignment Angelica Jacobson_1787886083435 for N84351A21686, Magnus" [disabled] [ref=e742]:
                        - generic [ref=e743]: N84351A21686, Magnus
                    - cell "Angelica Jacobson_1787886083435 More info" [ref=e744]:
                      - generic [ref=e745]:
                        - button "Angelica Jacobson_1787886083435" [disabled] [ref=e746]:
                          - generic [ref=e747]: Angelica Jacobson_1787886083435
                        - button "More info" [ref=e748]
                    - cell "57 days" [ref=e749]:
                      - button "57 days" [disabled] [ref=e750]
                    - cell "● Submitted" [ref=e751]:
                      - button "● Submitted" [disabled] [ref=e752]:
                        - generic [ref=e753]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e754]:
                      - button "Edit Assignment" [disabled] [ref=e755]
                      - button "Add Tests" [disabled] [ref=e756]
                      - button "Assignment actions" [ref=e757]
            - generic [ref=e758]:
              - generic [ref=e761]:
                - img [ref=e762]
                - heading "Notifications Center" [level=2] [ref=e766]
              - generic [ref=e767]:
                - generic [ref=e769]:
                  - img [ref=e770]
                  - heading "Resources" [level=3] [ref=e774]
                - list [ref=e775]:
                  - listitem [ref=e776]:
                    - button "Riverside Learn" [ref=e777] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e778]
                      - img [ref=e780]
                  - listitem [ref=e782]:
                    - button "Onboarding Tutorial Videos" [ref=e783] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e784]
                      - img [ref=e786]
                  - listitem [ref=e788]:
                    - button "Quick Reference Guides" [ref=e789] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e790]
                      - img [ref=e792]
                - button "View All" [ref=e795] [cursor=pointer]
      - contentinfo [ref=e796]:
        - generic [ref=e797]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e798] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e799]
        - generic [ref=e800]:
          - link "Riverside Insights Facebook" [ref=e801] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e802]
          - link "Riverside Insights Twitter" [ref=e803] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e804]
          - link "Riverside Insights LinkedIn" [ref=e805] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e806]
          - link "Riverside Insights Instagram" [ref=e807] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e808]
        - generic [ref=e809]:
          - button "Leave Feedback" [ref=e810] [cursor=pointer]
          - generic [ref=e811]: "|"
          - link "Terms of Use" [ref=e812] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e813]: "|"
          - link "Privacy Policy" [ref=e814] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e815]: Footer region end
```

# Test source

```ts
  352 |     }
  353 | 
  354 |     const expectedReportName = getBaseTemplateName(exportType, examineeID);
  355 | 
  356 |     const download = await downloadReportFromLibrary(
  357 |       this.page,
  358 |       expectedReportName,
  359 |     );
  360 | 
  361 |     const zipPath = getExamineeZipFilePath(exportType, examineeID);
  362 |     console.log(`Saving downloaded file to: ${zipPath}`);
  363 |     await download.saveAs(zipPath);
  364 |     await testinfo.attach("Downloaded Zip file", {
  365 |       path: zipPath,
  366 |       contentType: "application/zip",
  367 |     });
  368 |   }
  369 | 
  370 |   private requiredFile: any;
  371 |   private requiredFilePath: any;
  372 |   private txtFileContent: string;
  373 | 
  374 |   private examineeIdSet: Set<string> = new Set();
  375 |   private examinerIdSet: Set<string> = new Set();
  376 | 
  377 |   async validateTheDownloadedReportWithRunTimeDataForSingleAndMulti(
  378 |     $TestName: string,
  379 |     $SumOfItemScores: number,
  380 |     $BasalCredit: number,
  381 |     $WlookUp: number,
  382 |     $Wscore: number,
  383 |     $semW: number,
  384 |     $WlookUpAdminItems: string,
  385 |     $ScoreString: string,
  386 |     $StemForm: string,
  387 |     $LookUpModel: string,
  388 |     $totalItems: number,
  389 |     $scoreFlag: string, // pending
  390 |   ) {
  391 |     const rows: string[] = this.txtFileContent.trim().split("\n");
  392 |     const headers: string[] | undefined = rows.shift()?.split("\t");
  393 | 
  394 |     const examinerID: number | undefined = headers?.indexOf("ExerID");
  395 |     const examineeID: number | undefined = headers?.indexOf("ExeeID");
  396 |     const dateOfTest: number | undefined = headers?.indexOf("EDOT");
  397 |     const testNumber: number | undefined = headers?.indexOf("TestNum");
  398 |     const testName: number | undefined = headers?.indexOf("TestName");
  399 |     const testStemForm: number | undefined = headers?.indexOf("TestStemForm");
  400 |     const lookUpModel: number | undefined = headers?.indexOf("LookupModel");
  401 |     const sumItemScores: number | undefined = headers?.indexOf("SumItemScores");
  402 |     const baselCredit: number | undefined = headers?.indexOf("BasalCredit");
  403 |     const wLookUp: number | undefined = headers?.indexOf("WLookup");
  404 |     const WLkpAdminItems: number | undefined =
  405 |       headers?.indexOf("WLkpAdminItems");
  406 |     const wScore: number | undefined = headers?.indexOf("WScore");
  407 |     const SEMW: number | undefined = headers?.indexOf("SEMW");
  408 |     const scoreFlag: number | undefined = headers?.indexOf("ScoreFlags");
  409 |     const scoreString: number | undefined = headers?.indexOf("ScoreString");
  410 | 
  411 |     const headersArray: (number | undefined)[] = [
  412 |       examineeID,
  413 |       // examinerID, // No more used (24 Sep 2024)
  414 |       scoreString,
  415 |       testNumber,
  416 |       dateOfTest,
  417 |     ];
  418 |     for (const i of headersArray) {
  419 |       if (i === undefined || i === -1) {
  420 |         throw new Error(
  421 |           `Heading "${i}" or ItemName  not found in the extracted file`,
  422 |         );
  423 |       }
  424 |     }
  425 | 
  426 |     //let examinerid: string = "";
  427 |     let examineeid: string = "";
  428 |     let dateoftest: string = "";
  429 |     let testnumber: string = "";
  430 |     let testname: string = "";
  431 |     let teststemform: string = "";
  432 |     let lookupmodel: string = "";
  433 |     let sumitemscores: string = "";
  434 |     let baselcredit: string = "";
  435 |     let wlookup: string = "";
  436 |     let wscore: string = "";
  437 |     let semw: string = "";
  438 |     let wlkpadminitems: string = "";
  439 |     let scoreflag: string = "";
  440 |     let scorestring: string = "";
  441 | 
  442 |      const targetMatch = $StemForm; // ← Use your match value here
  443 |      const targetColumnIndex = testStemForm!;
  444 | 
  445 |      const matchedRow = rows.find((line) => {
  446 |        const columns = line.split("\t");
  447 |        const cellValue = columns[targetColumnIndex]?.trim();
  448 |        return cellValue && cellValue.includes(targetMatch);
  449 |      });
  450 | 
  451 |      if (!matchedRow) {
> 452 |        throw new Error(`No matching row found where ExeeID contains "${targetMatch}"`);
      |              ^ Error: No matching row found where ExeeID contains "SENREP.W5PA"
  453 |      }
  454 |       const columnValues: string[] = matchedRow.split("\t");
  455 | 
  456 |       //examinerid = columnValues[examinerID!];
  457 |       examineeid = columnValues[examineeID!];
  458 |       dateoftest = columnValues[dateOfTest!];
  459 |       testnumber = columnValues[testNumber!];
  460 |       testname = columnValues[testName!];
  461 |       teststemform = columnValues[testStemForm!];
  462 |       lookupmodel = columnValues[lookUpModel!];
  463 |       sumitemscores = columnValues[sumItemScores!];
  464 |       baselcredit = columnValues[baselCredit!];
  465 |       wlookup = columnValues[wLookUp!];
  466 |       wscore = columnValues[wScore!];
  467 |       semw = columnValues[SEMW!];
  468 |       wlkpadminitems = columnValues[WLkpAdminItems!];
  469 |       scoreflag = columnValues[scoreFlag!];
  470 |       scorestring = columnValues[scoreString!] ?? "";
  471 | 
  472 |       if (testname !== "" && testname !== undefined && testname !== null) {
  473 |         //this.reqWlookUpMap.set("examinerID", examinerid);
  474 |         this.reqWlookUpMap.set("examineeID", examineeid);
  475 |         this.reqWlookUpMap.set("dateOfTest", dateoftest);
  476 |         this.reqWlookUpMap.set("testName", testname);
  477 |         this.reqWlookUpMap.set("testStemForm", teststemform);
  478 |         this.reqWlookUpMap.set("lookUpModel", lookupmodel);
  479 |         this.reqWlookUpMap.set("sumItemScores", sumitemscores);
  480 |         this.reqWlookUpMap.set("baselCredit", baselcredit);
  481 |         this.reqWlookUpMap.set("wLookUp", wlookup);
  482 |         this.reqWlookUpMap.set("wScore", wscore);
  483 |         this.reqWlookUpMap.set("SEMW", semw);
  484 |         this.reqWlookUpMap.set("WlkpAdminItems", wlkpadminitems);
  485 |         this.reqWlookUpMap.set("scoreFlag", scoreflag);
  486 |         this.reqWlookUpMap.set("scoreString", scorestring);
  487 |       }
  488 | 
  489 |     const mapasJSON: string = JSON.stringify([...this.reqWlookUpMap]);
  490 |     console.log("reqWlookUpMap - - >", mapasJSON);
  491 | 
  492 |     if (
  493 |       examineeid == "" ||
  494 |       examineeid == undefined ||
  495 |       examineeid == null ||
  496 |       examineeid.includes("No examinees meet the criteria specified.")
  497 |     ) {
  498 |       throw new Error(
  499 |         "The Examinee ID assertion failed, probable cause the Report could be empty.",
  500 |       );
  501 |     }
  502 | 
  503 |     // //softAssertPrint(examinerid, examiner.examinerID, "Examiner ID");
  504 |     softAssertPrint(examineeid, DashBoardPage.examineeID, "Examinee ID");
  505 |     try {
  506 |       softAssertPrint(
  507 |         dateoftest,
  508 |         await this.utils.getTheDOBYearsBack(0, "new Yark"),
  509 |         "Date Of Test",
  510 |       );
  511 |     } catch (error) {
  512 |       console.info(`\nSeems like there is a date mismatch  ${error}\n`);
  513 |     }
  514 | 
  515 |     softAssertPrint(testname, $TestName, "Test Name");
  516 |     softAssertPrint(teststemform, $StemForm, "TEst stem form");
  517 |     softAssertPrint(lookupmodel, $LookUpModel, "Look Up Model");
  518 |     softAssertPrint(Number(sumitemscores), $SumOfItemScores, "Sum Item Scores");
  519 |     softAssertPrint(Number(baselcredit), $BasalCredit, "Basal Credit");
  520 |     softAssertPrint(Number(wlookup), $WlookUp, "wLookUp");
  521 |     softAssertPrint(wlkpadminitems, $WlookUpAdminItems, "WLkpAdminItems");
  522 | 
  523 |     softAssertPrint(scoreflag, $scoreFlag, "Score Flag");
  524 |     softAssertPrint(Number(wscore), $Wscore, "wScore");
  525 |     softAssertPrint(Number(semw), $semW, "semW");
  526 |     softAssertPrint(scorestring, $ScoreString, "Score String");
  527 |   }
  528 | 
  529 |   async getWScoreAndSemWByLookupScore(
  530 |     // no need for now, need to check later
  531 |     lookupScore: number,
  532 |     scoreFlag: string,
  533 |     typeOfTest: string,
  534 |     negation: boolean,
  535 |     testStemForm: string,
  536 |   ): Promise<{ wScore: number; semW: number } | null> {
  537 |     lookupScore = Math.abs(lookupScore);
  538 | 
  539 |     const result = getWabil_and_SEMW(`${testStemForm}`, lookupScore);
  540 | 
  541 |     if (
  542 |       scoreFlag === "[!C]" &&
  543 |       typeOfTest.match(/Answer only SampleItems (?:correct|incorrect)/i)
  544 |     ) {
  545 |       return { wScore: 0, semW: 0 };
  546 |     } else if (result && negation) {
  547 |       return { wScore: -result.W_Abil, semW: -result.SEMW };
  548 |     } else if (result) {
  549 |       return { wScore: result.W_Abil, semW: result.SEMW };
  550 |     } else {
  551 |       return null;
  552 |     }
```