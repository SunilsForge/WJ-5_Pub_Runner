# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/MATRCZ_Rerouting.spec.ts >>  MATRCZ Rerouting and LeftNav >> Age 12 to Adult - MATRCZ Sample Items Incorrect and then Correct Scenario for SSP2 Test Rerouting
- Location: src/tests/ReroutingandLeftNav/MATRCZ_Rerouting.spec.ts:10:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Examinee completed all required test items."
Received string:    "Examinee completed all required test items"
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
              - heading "Hello 65Pw Aut25AH" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "65Pw Aut25AH" [ref=e10] [cursor=pointer]
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
                  - row "Begin assignment Amelia Halvorson_1790671266245 for N33722A77468, Trisha Amelia Halvorson_1790671266245 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Amelia Halvorson_1790671266245 for N33722A77468, Trisha" [ref=e75]:
                      - button "Begin assignment Amelia Halvorson_1790671266245 for N33722A77468, Trisha" [disabled] [ref=e76]:
                        - generic [ref=e77]: N33722A77468, Trisha
                    - cell "Amelia Halvorson_1790671266245 More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Amelia Halvorson_1790671266245" [disabled] [ref=e80]:
                          - generic [ref=e81]: Amelia Halvorson_1790671266245
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
                  - row "Begin assignment Annie Muller_1790671552115 for N43001A92725, Brianne Annie Muller_1790671552115 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Annie Muller_1790671552115 for N43001A92725, Brianne" [ref=e93]:
                      - button "Begin assignment Annie Muller_1790671552115 for N43001A92725, Brianne" [disabled] [ref=e94]:
                        - generic [ref=e95]: N43001A92725, Brianne
                    - cell "Annie Muller_1790671552115 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Annie Muller_1790671552115" [disabled] [ref=e98]:
                          - generic [ref=e99]: Annie Muller_1790671552115
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
                  - row "Begin assignment Ms. Rosalie Pagac_1790671359392 for N42797A62382, Lawrence Ms. Rosalie Pagac_1790671359392 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Ms. Rosalie Pagac_1790671359392 for N42797A62382, Lawrence" [ref=e111]:
                      - button "Begin assignment Ms. Rosalie Pagac_1790671359392 for N42797A62382, Lawrence" [disabled] [ref=e112]:
                        - generic [ref=e113]: N42797A62382, Lawrence
                    - cell "Ms. Rosalie Pagac_1790671359392 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Ms. Rosalie Pagac_1790671359392" [disabled] [ref=e116]:
                          - generic [ref=e117]: Ms. Rosalie Pagac_1790671359392
                        - button "More info" [ref=e118]
                    - cell "90 days" [ref=e119]:
                      - button "90 days" [disabled] [ref=e120]
                    - cell "● In Progress ↩️ Resume Assignment" [ref=e121]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: In Progress
                        - text: ↩️ Resume Assignment
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e124]:
                      - button "Edit Assignment" [disabled] [ref=e125]
                      - button "Add Tests" [disabled] [ref=e126]
                      - button "Assignment actions" [ref=e127]
                  - row "Begin assignment Carolyn Bailey_1790670853658 for N48052A72426, Carmel Carolyn Bailey_1790670853658 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Carolyn Bailey_1790670853658 for N48052A72426, Carmel" [ref=e129]:
                      - button "Begin assignment Carolyn Bailey_1790670853658 for N48052A72426, Carmel" [disabled] [ref=e130]:
                        - generic [ref=e131]: N48052A72426, Carmel
                    - cell "Carolyn Bailey_1790670853658 More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Carolyn Bailey_1790670853658" [disabled] [ref=e134]:
                          - generic [ref=e135]: Carolyn Bailey_1790670853658
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
                  - row "Begin assignment Ebony Casper_1790670391479 (+1 more) for N57739A54246, Janiya Ebony Casper_1790670391479 (+1 more) More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Ebony Casper_1790670391479 (+1 more) for N57739A54246, Janiya" [ref=e147]:
                      - button "Begin assignment Ebony Casper_1790670391479 (+1 more) for N57739A54246, Janiya" [disabled] [ref=e148]:
                        - generic [ref=e149]: N57739A54246, Janiya
                    - cell "Ebony Casper_1790670391479 (+1 more) More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Ebony Casper_1790670391479 (+1 more)" [disabled] [ref=e152]:
                          - generic [ref=e153]: Ebony Casper_1790670391479 (+1 more)
                        - button "More info" [ref=e154]
                    - cell "90 days" [ref=e155]:
                      - button "90 days" [disabled] [ref=e156]
                    - cell "● In Progress" [ref=e157]:
                      - button "● In Progress" [disabled] [ref=e158]:
                        - generic [ref=e159]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e160]:
                      - button "Edit Assignment" [disabled] [ref=e161]
                      - button "Add Tests" [disabled] [ref=e162]
                      - button "Assignment actions" [ref=e163]
                  - row "Begin assignment Stephanie Wuckert_1790669947879 for N19736A79104, Rahsaan Stephanie Wuckert_1790669947879 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Stephanie Wuckert_1790669947879 for N19736A79104, Rahsaan" [ref=e165]:
                      - button "Begin assignment Stephanie Wuckert_1790669947879 for N19736A79104, Rahsaan" [disabled] [ref=e166]:
                        - generic [ref=e167]: N19736A79104, Rahsaan
                    - cell "Stephanie Wuckert_1790669947879 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Stephanie Wuckert_1790669947879" [disabled] [ref=e170]:
                          - generic [ref=e171]: Stephanie Wuckert_1790669947879
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
                  - row "Begin assignment Kay Ondricka_1790669652608 for N51306A91802, Mack Kay Ondricka_1790669652608 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Kay Ondricka_1790669652608 for N51306A91802, Mack" [ref=e183]:
                      - button "Begin assignment Kay Ondricka_1790669652608 for N51306A91802, Mack" [disabled] [ref=e184]:
                        - generic [ref=e185]: N51306A91802, Mack
                    - cell "Kay Ondricka_1790669652608 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Kay Ondricka_1790669652608" [disabled] [ref=e188]:
                          - generic [ref=e189]: Kay Ondricka_1790669652608
                        - button "More info" [ref=e190]
                    - cell "90 days" [ref=e191]:
                      - button "90 days" [disabled] [ref=e192]
                    - cell "● In Progress ↩️ Resume Assignment" [ref=e193]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e194]:
                        - generic [ref=e195]: ●
                        - text: In Progress
                        - text: ↩️ Resume Assignment
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e196]:
                      - button "Edit Assignment" [disabled] [ref=e197]
                      - button "Add Tests" [disabled] [ref=e198]
                      - button "Assignment actions" [ref=e199]
                  - row "Begin assignment Katie Stroman III_1787903905661 for N54144A42617, Oda Katie Stroman III_1787903905661 More info 58 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Katie Stroman III_1787903905661 for N54144A42617, Oda" [ref=e201]:
                      - button "Begin assignment Katie Stroman III_1787903905661 for N54144A42617, Oda" [disabled] [ref=e202]:
                        - generic [ref=e203]: N54144A42617, Oda
                    - cell "Katie Stroman III_1787903905661 More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Katie Stroman III_1787903905661" [disabled] [ref=e206]:
                          - generic [ref=e207]: Katie Stroman III_1787903905661
                        - button "More info" [ref=e208]
                    - cell "58 days" [ref=e209]:
                      - button "58 days" [disabled] [ref=e210]
                    - cell "● Submitted" [ref=e211]:
                      - button "● Submitted" [disabled] [ref=e212]:
                        - generic [ref=e213]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e214]:
                      - button "Edit Assignment" [disabled] [ref=e215]
                      - button "Add Tests" [disabled] [ref=e216]
                      - button "Assignment actions" [ref=e217]
                  - row "Begin assignment Shari Hansen_1787903546192 (+1 more) for N83465A40946, Naomi Shari Hansen_1787903546192 (+1 more) More info 58 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Shari Hansen_1787903546192 (+1 more) for N83465A40946, Naomi" [ref=e219]:
                      - button "Begin assignment Shari Hansen_1787903546192 (+1 more) for N83465A40946, Naomi" [disabled] [ref=e220]:
                        - generic [ref=e221]: N83465A40946, Naomi
                    - cell "Shari Hansen_1787903546192 (+1 more) More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Shari Hansen_1787903546192 (+1 more)" [disabled] [ref=e224]:
                          - generic [ref=e225]: Shari Hansen_1787903546192 (+1 more)
                        - button "More info" [ref=e226]
                    - cell "58 days" [ref=e227]:
                      - button "58 days" [disabled] [ref=e228]
                    - cell "● In Progress" [ref=e229]:
                      - button "● In Progress" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row "Begin assignment Garrett Kris_1787903233734 for N84448A5991, Johnny Garrett Kris_1787903233734 More info 58 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Garrett Kris_1787903233734 for N84448A5991, Johnny" [ref=e237]:
                      - button "Begin assignment Garrett Kris_1787903233734 for N84448A5991, Johnny" [disabled] [ref=e238]:
                        - generic [ref=e239]: N84448A5991, Johnny
                    - cell "Garrett Kris_1787903233734 More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Garrett Kris_1787903233734" [disabled] [ref=e242]:
                          - generic [ref=e243]: Garrett Kris_1787903233734
                        - button "More info" [ref=e244]
                    - cell "58 days" [ref=e245]:
                      - button "58 days" [disabled] [ref=e246]
                    - cell "● Submitted" [ref=e247]:
                      - button "● Submitted" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row "Begin assignment Warren Kuhic_1787890206137 for N16960A79136, Katrina Warren Kuhic_1787890206137 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Warren Kuhic_1787890206137 for N16960A79136, Katrina" [ref=e255]:
                      - button "Begin assignment Warren Kuhic_1787890206137 for N16960A79136, Katrina" [disabled] [ref=e256]:
                        - generic [ref=e257]: N16960A79136, Katrina
                    - cell "Warren Kuhic_1787890206137 More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Warren Kuhic_1787890206137" [disabled] [ref=e260]:
                          - generic [ref=e261]: Warren Kuhic_1787890206137
                        - button "More info" [ref=e262]
                    - cell "57 days" [ref=e263]:
                      - button "57 days" [disabled] [ref=e264]
                    - cell "● Submitted" [ref=e265]:
                      - button "● Submitted" [disabled] [ref=e266]:
                        - generic [ref=e267]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e268]:
                      - button "Edit Assignment" [disabled] [ref=e269]
                      - button "Add Tests" [disabled] [ref=e270]
                      - button "Assignment actions" [ref=e271]
                  - row "Begin assignment Kate Reichel_1787889891311 for N1382A60617, Lilian Kate Reichel_1787889891311 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Kate Reichel_1787889891311 for N1382A60617, Lilian" [ref=e273]:
                      - button "Begin assignment Kate Reichel_1787889891311 for N1382A60617, Lilian" [disabled] [ref=e274]:
                        - generic [ref=e275]: N1382A60617, Lilian
                    - cell "Kate Reichel_1787889891311 More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Kate Reichel_1787889891311" [disabled] [ref=e278]:
                          - generic [ref=e279]: Kate Reichel_1787889891311
                        - button "More info" [ref=e280]
                    - cell "57 days" [ref=e281]:
                      - button "57 days" [disabled] [ref=e282]
                    - cell "● Submitted" [ref=e283]:
                      - button "● Submitted" [disabled] [ref=e284]:
                        - generic [ref=e285]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e286]:
                      - button "Edit Assignment" [disabled] [ref=e287]
                      - button "Add Tests" [disabled] [ref=e288]
                      - button "Assignment actions" [ref=e289]
                  - row "Begin assignment Alejandro Thiel_1787889612962 for N49231A53530, Arne Alejandro Thiel_1787889612962 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Alejandro Thiel_1787889612962 for N49231A53530, Arne" [ref=e291]:
                      - button "Begin assignment Alejandro Thiel_1787889612962 for N49231A53530, Arne" [disabled] [ref=e292]:
                        - generic [ref=e293]: N49231A53530, Arne
                    - cell "Alejandro Thiel_1787889612962 More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Alejandro Thiel_1787889612962" [disabled] [ref=e296]:
                          - generic [ref=e297]: Alejandro Thiel_1787889612962
                        - button "More info" [ref=e298]
                    - cell "57 days" [ref=e299]:
                      - button "57 days" [disabled] [ref=e300]
                    - cell "● Submitted" [ref=e301]:
                      - button "● Submitted" [disabled] [ref=e302]:
                        - generic [ref=e303]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e304]:
                      - button "Edit Assignment" [disabled] [ref=e305]
                      - button "Add Tests" [disabled] [ref=e306]
                      - button "Assignment actions" [ref=e307]
                  - row "Begin assignment Julian Koelpin_1787889302030 for N15974A62911, Beulah Julian Koelpin_1787889302030 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e308] [cursor=pointer]:
                    - cell "Begin assignment Julian Koelpin_1787889302030 for N15974A62911, Beulah" [ref=e309]:
                      - button "Begin assignment Julian Koelpin_1787889302030 for N15974A62911, Beulah" [disabled] [ref=e310]:
                        - generic [ref=e311]: N15974A62911, Beulah
                    - cell "Julian Koelpin_1787889302030 More info" [ref=e312]:
                      - generic [ref=e313]:
                        - button "Julian Koelpin_1787889302030" [disabled] [ref=e314]:
                          - generic [ref=e315]: Julian Koelpin_1787889302030
                        - button "More info" [ref=e316]
                    - cell "57 days" [ref=e317]:
                      - button "57 days" [disabled] [ref=e318]
                    - cell "● Submitted" [ref=e319]:
                      - button "● Submitted" [disabled] [ref=e320]:
                        - generic [ref=e321]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e322]:
                      - button "Edit Assignment" [disabled] [ref=e323]
                      - button "Add Tests" [disabled] [ref=e324]
                      - button "Assignment actions" [ref=e325]
                  - row "Begin assignment Terrell Cassin_1787889016594 for N48656A99413, Evans Terrell Cassin_1787889016594 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e326] [cursor=pointer]:
                    - cell "Begin assignment Terrell Cassin_1787889016594 for N48656A99413, Evans" [ref=e327]:
                      - button "Begin assignment Terrell Cassin_1787889016594 for N48656A99413, Evans" [disabled] [ref=e328]:
                        - generic [ref=e329]: N48656A99413, Evans
                    - cell "Terrell Cassin_1787889016594 More info" [ref=e330]:
                      - generic [ref=e331]:
                        - button "Terrell Cassin_1787889016594" [disabled] [ref=e332]:
                          - generic [ref=e333]: Terrell Cassin_1787889016594
                        - button "More info" [ref=e334]
                    - cell "57 days" [ref=e335]:
                      - button "57 days" [disabled] [ref=e336]
                    - cell "● Submitted" [ref=e337]:
                      - button "● Submitted" [disabled] [ref=e338]:
                        - generic [ref=e339]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e340]:
                      - button "Edit Assignment" [disabled] [ref=e341]
                      - button "Add Tests" [disabled] [ref=e342]
                      - button "Assignment actions" [ref=e343]
                  - row "Begin assignment Kathleen Paucek_1787888702931 for N52418A49380, Erling Kathleen Paucek_1787888702931 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e344] [cursor=pointer]:
                    - cell "Begin assignment Kathleen Paucek_1787888702931 for N52418A49380, Erling" [ref=e345]:
                      - button "Begin assignment Kathleen Paucek_1787888702931 for N52418A49380, Erling" [disabled] [ref=e346]:
                        - generic [ref=e347]: N52418A49380, Erling
                    - cell "Kathleen Paucek_1787888702931 More info" [ref=e348]:
                      - generic [ref=e349]:
                        - button "Kathleen Paucek_1787888702931" [disabled] [ref=e350]:
                          - generic [ref=e351]: Kathleen Paucek_1787888702931
                        - button "More info" [ref=e352]
                    - cell "57 days" [ref=e353]:
                      - button "57 days" [disabled] [ref=e354]
                    - cell "● Submitted" [ref=e355]:
                      - button "● Submitted" [disabled] [ref=e356]:
                        - generic [ref=e357]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e358]:
                      - button "Edit Assignment" [disabled] [ref=e359]
                      - button "Add Tests" [disabled] [ref=e360]
                      - button "Assignment actions" [ref=e361]
                  - row "Begin assignment Irvin Lemke_1787888405893 for N10139A80107, Junior Irvin Lemke_1787888405893 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e362] [cursor=pointer]:
                    - cell "Begin assignment Irvin Lemke_1787888405893 for N10139A80107, Junior" [ref=e363]:
                      - button "Begin assignment Irvin Lemke_1787888405893 for N10139A80107, Junior" [disabled] [ref=e364]:
                        - generic [ref=e365]: N10139A80107, Junior
                    - cell "Irvin Lemke_1787888405893 More info" [ref=e366]:
                      - generic [ref=e367]:
                        - button "Irvin Lemke_1787888405893" [disabled] [ref=e368]:
                          - generic [ref=e369]: Irvin Lemke_1787888405893
                        - button "More info" [ref=e370]
                    - cell "57 days" [ref=e371]:
                      - button "57 days" [disabled] [ref=e372]
                    - cell "● Submitted" [ref=e373]:
                      - button "● Submitted" [disabled] [ref=e374]:
                        - generic [ref=e375]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e376]:
                      - button "Edit Assignment" [disabled] [ref=e377]
                      - button "Add Tests" [disabled] [ref=e378]
                      - button "Assignment actions" [ref=e379]
                  - row "Begin assignment Ruby Crona_1787888134726 for N98400A95921, Annalise Ruby Crona_1787888134726 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e380] [cursor=pointer]:
                    - cell "Begin assignment Ruby Crona_1787888134726 for N98400A95921, Annalise" [ref=e381]:
                      - button "Begin assignment Ruby Crona_1787888134726 for N98400A95921, Annalise" [disabled] [ref=e382]:
                        - generic [ref=e383]: N98400A95921, Annalise
                    - cell "Ruby Crona_1787888134726 More info" [ref=e384]:
                      - generic [ref=e385]:
                        - button "Ruby Crona_1787888134726" [disabled] [ref=e386]:
                          - generic [ref=e387]: Ruby Crona_1787888134726
                        - button "More info" [ref=e388]
                    - cell "57 days" [ref=e389]:
                      - button "57 days" [disabled] [ref=e390]
                    - cell "● Submitted" [ref=e391]:
                      - button "● Submitted" [disabled] [ref=e392]:
                        - generic [ref=e393]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e394]:
                      - button "Edit Assignment" [disabled] [ref=e395]
                      - button "Add Tests" [disabled] [ref=e396]
                      - button "Assignment actions" [ref=e397]
                  - row "Begin assignment Alexander Trantow_1787887831397 for N46044A70046, Sandra Alexander Trantow_1787887831397 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e398] [cursor=pointer]:
                    - cell "Begin assignment Alexander Trantow_1787887831397 for N46044A70046, Sandra" [ref=e399]:
                      - button "Begin assignment Alexander Trantow_1787887831397 for N46044A70046, Sandra" [disabled] [ref=e400]:
                        - generic [ref=e401]: N46044A70046, Sandra
                    - cell "Alexander Trantow_1787887831397 More info" [ref=e402]:
                      - generic [ref=e403]:
                        - button "Alexander Trantow_1787887831397" [disabled] [ref=e404]:
                          - generic [ref=e405]: Alexander Trantow_1787887831397
                        - button "More info" [ref=e406]
                    - cell "57 days" [ref=e407]:
                      - button "57 days" [disabled] [ref=e408]
                    - cell "● Submitted" [ref=e409]:
                      - button "● Submitted" [disabled] [ref=e410]:
                        - generic [ref=e411]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e412]:
                      - button "Edit Assignment" [disabled] [ref=e413]
                      - button "Add Tests" [disabled] [ref=e414]
                      - button "Assignment actions" [ref=e415]
                  - row "Begin assignment Nadine Windler_1787887522446 for N96884A25278, Malcolm Nadine Windler_1787887522446 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e416] [cursor=pointer]:
                    - cell "Begin assignment Nadine Windler_1787887522446 for N96884A25278, Malcolm" [ref=e417]:
                      - button "Begin assignment Nadine Windler_1787887522446 for N96884A25278, Malcolm" [disabled] [ref=e418]:
                        - generic [ref=e419]: N96884A25278, Malcolm
                    - cell "Nadine Windler_1787887522446 More info" [ref=e420]:
                      - generic [ref=e421]:
                        - button "Nadine Windler_1787887522446" [disabled] [ref=e422]:
                          - generic [ref=e423]: Nadine Windler_1787887522446
                        - button "More info" [ref=e424]
                    - cell "57 days" [ref=e425]:
                      - button "57 days" [disabled] [ref=e426]
                    - cell "● Submitted" [ref=e427]:
                      - button "● Submitted" [disabled] [ref=e428]:
                        - generic [ref=e429]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e430]:
                      - button "Edit Assignment" [disabled] [ref=e431]
                      - button "Add Tests" [disabled] [ref=e432]
                      - button "Assignment actions" [ref=e433]
                  - row "Begin assignment Willie Johns_1787887228603 for N878A47492, Maritza Willie Johns_1787887228603 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e434] [cursor=pointer]:
                    - cell "Begin assignment Willie Johns_1787887228603 for N878A47492, Maritza" [ref=e435]:
                      - button "Begin assignment Willie Johns_1787887228603 for N878A47492, Maritza" [disabled] [ref=e436]:
                        - generic [ref=e437]: N878A47492, Maritza
                    - cell "Willie Johns_1787887228603 More info" [ref=e438]:
                      - generic [ref=e439]:
                        - button "Willie Johns_1787887228603" [disabled] [ref=e440]:
                          - generic [ref=e441]: Willie Johns_1787887228603
                        - button "More info" [ref=e442]
                    - cell "57 days" [ref=e443]:
                      - button "57 days" [disabled] [ref=e444]
                    - cell "● Submitted" [ref=e445]:
                      - button "● Submitted" [disabled] [ref=e446]:
                        - generic [ref=e447]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e448]:
                      - button "Edit Assignment" [disabled] [ref=e449]
                      - button "Add Tests" [disabled] [ref=e450]
                      - button "Assignment actions" [ref=e451]
                  - row "Begin assignment Dr. Johnny Johns_1787886960185 for N42982A24516, Adonis Dr. Johnny Johns_1787886960185 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e452] [cursor=pointer]:
                    - cell "Begin assignment Dr. Johnny Johns_1787886960185 for N42982A24516, Adonis" [ref=e453]:
                      - button "Begin assignment Dr. Johnny Johns_1787886960185 for N42982A24516, Adonis" [disabled] [ref=e454]:
                        - generic [ref=e455]: N42982A24516, Adonis
                    - cell "Dr. Johnny Johns_1787886960185 More info" [ref=e456]:
                      - generic [ref=e457]:
                        - button "Dr. Johnny Johns_1787886960185" [disabled] [ref=e458]:
                          - generic [ref=e459]: Dr. Johnny Johns_1787886960185
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
                  - row "Begin assignment Rochelle Gottlieb_1787886652914 for N42752A32891, Alvis Rochelle Gottlieb_1787886652914 More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e470] [cursor=pointer]:
                    - cell "Begin assignment Rochelle Gottlieb_1787886652914 for N42752A32891, Alvis" [ref=e471]:
                      - button "Begin assignment Rochelle Gottlieb_1787886652914 for N42752A32891, Alvis" [disabled] [ref=e472]:
                        - generic [ref=e473]: N42752A32891, Alvis
                    - cell "Rochelle Gottlieb_1787886652914 More info" [ref=e474]:
                      - generic [ref=e475]:
                        - button "Rochelle Gottlieb_1787886652914" [disabled] [ref=e476]:
                          - generic [ref=e477]: Rochelle Gottlieb_1787886652914
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
                  - row "Begin assignment Miranda West_1787886292307 (+1 more) for N78589A59829, Mekhi Miranda West_1787886292307 (+1 more) More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e488] [cursor=pointer]:
                    - cell "Begin assignment Miranda West_1787886292307 (+1 more) for N78589A59829, Mekhi" [ref=e489]:
                      - button "Begin assignment Miranda West_1787886292307 (+1 more) for N78589A59829, Mekhi" [disabled] [ref=e490]:
                        - generic [ref=e491]: N78589A59829, Mekhi
                    - cell "Miranda West_1787886292307 (+1 more) More info" [ref=e492]:
                      - generic [ref=e493]:
                        - button "Miranda West_1787886292307 (+1 more)" [disabled] [ref=e494]:
                          - generic [ref=e495]: Miranda West_1787886292307 (+1 more)
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
                  - row "Begin assignment Micheal Rogahn_1787885952707 (+1 more) for N13420A71717, Drake Micheal Rogahn_1787885952707 (+1 more) More info 57 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e506] [cursor=pointer]:
                    - cell "Begin assignment Micheal Rogahn_1787885952707 (+1 more) for N13420A71717, Drake" [ref=e507]:
                      - button "Begin assignment Micheal Rogahn_1787885952707 (+1 more) for N13420A71717, Drake" [disabled] [ref=e508]:
                        - generic [ref=e509]: N13420A71717, Drake
                    - cell "Micheal Rogahn_1787885952707 (+1 more) More info" [ref=e510]:
                      - generic [ref=e511]:
                        - button "Micheal Rogahn_1787885952707 (+1 more)" [disabled] [ref=e512]:
                          - generic [ref=e513]: Micheal Rogahn_1787885952707 (+1 more)
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
                  - row "Begin assignment Allan Wolff_1765804486845 (+1 more) for N81961A87569, Wilma Allan Wolff_1765804486845 (+1 more) More info 0 days ● Expired Generate Report Assignment actions" [ref=e524] [cursor=pointer]:
                    - cell "Begin assignment Allan Wolff_1765804486845 (+1 more) for N81961A87569, Wilma" [ref=e525]:
                      - button "Begin assignment Allan Wolff_1765804486845 (+1 more) for N81961A87569, Wilma" [disabled] [ref=e526]:
                        - generic [ref=e527]: N81961A87569, Wilma
                    - cell "Allan Wolff_1765804486845 (+1 more) More info" [ref=e528]:
                      - generic [ref=e529]:
                        - button "Allan Wolff_1765804486845 (+1 more)" [disabled] [ref=e530]:
                          - generic [ref=e531]: Allan Wolff_1765804486845 (+1 more)
                        - button "More info" [ref=e532]
                    - cell "0 days" [ref=e533]:
                      - button "0 days" [disabled] [ref=e534]
                    - cell "● Expired" [ref=e535]:
                      - button "● Expired" [disabled] [ref=e536]:
                        - generic [ref=e537]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e538]:
                      - button "Generate Report" [ref=e539]
                      - button "Assignment actions" [ref=e540]
                  - row "Begin assignment Martin Price DVM_1765809680421 for N51628A90016, Tabitha Martin Price DVM_1765809680421 More info 0 days ● Expired Generate Report Assignment actions" [ref=e541] [cursor=pointer]:
                    - cell "Begin assignment Martin Price DVM_1765809680421 for N51628A90016, Tabitha" [ref=e542]:
                      - button "Begin assignment Martin Price DVM_1765809680421 for N51628A90016, Tabitha" [disabled] [ref=e543]:
                        - generic [ref=e544]: N51628A90016, Tabitha
                    - cell "Martin Price DVM_1765809680421 More info" [ref=e545]:
                      - generic [ref=e546]:
                        - button "Martin Price DVM_1765809680421" [disabled] [ref=e547]:
                          - generic [ref=e548]: Martin Price DVM_1765809680421
                        - button "More info" [ref=e549]
                    - cell "0 days" [ref=e550]:
                      - button "0 days" [disabled] [ref=e551]
                    - cell "● Expired" [ref=e552]:
                      - button "● Expired" [disabled] [ref=e553]:
                        - generic [ref=e554]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e555]:
                      - button "Generate Report" [ref=e556]
                      - button "Assignment actions" [ref=e557]
                  - row "Begin assignment Leigh Stehr-Lynch_1765809386532 for N48314A81716, Anastasia Leigh Stehr-Lynch_1765809386532 More info 0 days ● Expired Generate Report Assignment actions" [ref=e558] [cursor=pointer]:
                    - cell "Begin assignment Leigh Stehr-Lynch_1765809386532 for N48314A81716, Anastasia" [ref=e559]:
                      - button "Begin assignment Leigh Stehr-Lynch_1765809386532 for N48314A81716, Anastasia" [disabled] [ref=e560]:
                        - generic [ref=e561]: N48314A81716, Anastasia
                    - cell "Leigh Stehr-Lynch_1765809386532 More info" [ref=e562]:
                      - generic [ref=e563]:
                        - button "Leigh Stehr-Lynch_1765809386532" [disabled] [ref=e564]:
                          - generic [ref=e565]: Leigh Stehr-Lynch_1765809386532
                        - button "More info" [ref=e566]
                    - cell "0 days" [ref=e567]:
                      - button "0 days" [disabled] [ref=e568]
                    - cell "● Expired" [ref=e569]:
                      - button "● Expired" [disabled] [ref=e570]:
                        - generic [ref=e571]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e572]:
                      - button "Generate Report" [ref=e573]
                      - button "Assignment actions" [ref=e574]
                  - row "Begin assignment Mr. Darrel Herman_1765809094030 for N38980A63798, Aliza Mr. Darrel Herman_1765809094030 More info 0 days ● Expired Generate Report Assignment actions" [ref=e575] [cursor=pointer]:
                    - cell "Begin assignment Mr. Darrel Herman_1765809094030 for N38980A63798, Aliza" [ref=e576]:
                      - button "Begin assignment Mr. Darrel Herman_1765809094030 for N38980A63798, Aliza" [disabled] [ref=e577]:
                        - generic [ref=e578]: N38980A63798, Aliza
                    - cell "Mr. Darrel Herman_1765809094030 More info" [ref=e579]:
                      - generic [ref=e580]:
                        - button "Mr. Darrel Herman_1765809094030" [disabled] [ref=e581]:
                          - generic [ref=e582]: Mr. Darrel Herman_1765809094030
                        - button "More info" [ref=e583]
                    - cell "0 days" [ref=e584]:
                      - button "0 days" [disabled] [ref=e585]
                    - cell "● Expired" [ref=e586]:
                      - button "● Expired" [disabled] [ref=e587]:
                        - generic [ref=e588]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e589]:
                      - button "Generate Report" [ref=e590]
                      - button "Assignment actions" [ref=e591]
                  - row "Begin assignment Allison Hudson_1765808800556 for N33751A43144, Tito Allison Hudson_1765808800556 More info 0 days ● Expired Generate Report Assignment actions" [ref=e592] [cursor=pointer]:
                    - cell "Begin assignment Allison Hudson_1765808800556 for N33751A43144, Tito" [ref=e593]:
                      - button "Begin assignment Allison Hudson_1765808800556 for N33751A43144, Tito" [disabled] [ref=e594]:
                        - generic [ref=e595]: N33751A43144, Tito
                    - cell "Allison Hudson_1765808800556 More info" [ref=e596]:
                      - generic [ref=e597]:
                        - button "Allison Hudson_1765808800556" [disabled] [ref=e598]:
                          - generic [ref=e599]: Allison Hudson_1765808800556
                        - button "More info" [ref=e600]
                    - cell "0 days" [ref=e601]:
                      - button "0 days" [disabled] [ref=e602]
                    - cell "● Expired" [ref=e603]:
                      - button "● Expired" [disabled] [ref=e604]:
                        - generic [ref=e605]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e606]:
                      - button "Generate Report" [ref=e607]
                      - button "Assignment actions" [ref=e608]
                  - row "Begin assignment Dr. Sue Hauck_1765808507894 for N28814A97115, Jovany Dr. Sue Hauck_1765808507894 More info 0 days ● Expired Generate Report Assignment actions" [ref=e609] [cursor=pointer]:
                    - cell "Begin assignment Dr. Sue Hauck_1765808507894 for N28814A97115, Jovany" [ref=e610]:
                      - button "Begin assignment Dr. Sue Hauck_1765808507894 for N28814A97115, Jovany" [disabled] [ref=e611]:
                        - generic [ref=e612]: N28814A97115, Jovany
                    - cell "Dr. Sue Hauck_1765808507894 More info" [ref=e613]:
                      - generic [ref=e614]:
                        - button "Dr. Sue Hauck_1765808507894" [disabled] [ref=e615]:
                          - generic [ref=e616]: Dr. Sue Hauck_1765808507894
                        - button "More info" [ref=e617]
                    - cell "0 days" [ref=e618]:
                      - button "0 days" [disabled] [ref=e619]
                    - cell "● Expired" [ref=e620]:
                      - button "● Expired" [disabled] [ref=e621]:
                        - generic [ref=e622]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e623]:
                      - button "Generate Report" [ref=e624]
                      - button "Assignment actions" [ref=e625]
                  - row "Begin assignment Nadine Hettinger_1765808016379 for N85367A47199, Myrl Nadine Hettinger_1765808016379 More info 0 days ● Expired Generate Report Assignment actions" [ref=e626] [cursor=pointer]:
                    - cell "Begin assignment Nadine Hettinger_1765808016379 for N85367A47199, Myrl" [ref=e627]:
                      - button "Begin assignment Nadine Hettinger_1765808016379 for N85367A47199, Myrl" [disabled] [ref=e628]:
                        - generic [ref=e629]: N85367A47199, Myrl
                    - cell "Nadine Hettinger_1765808016379 More info" [ref=e630]:
                      - generic [ref=e631]:
                        - button "Nadine Hettinger_1765808016379" [disabled] [ref=e632]:
                          - generic [ref=e633]: Nadine Hettinger_1765808016379
                        - button "More info" [ref=e634]
                    - cell "0 days" [ref=e635]:
                      - button "0 days" [disabled] [ref=e636]
                    - cell "● Expired" [ref=e637]:
                      - button "● Expired" [disabled] [ref=e638]:
                        - generic [ref=e639]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e640]:
                      - button "Generate Report" [ref=e641]
                      - button "Assignment actions" [ref=e642]
                  - row "Begin assignment Tony Mayert_1765807512088 for N67867A39040, Wilhelmine Tony Mayert_1765807512088 More info 0 days ● Expired Generate Report Assignment actions" [ref=e643] [cursor=pointer]:
                    - cell "Begin assignment Tony Mayert_1765807512088 for N67867A39040, Wilhelmine" [ref=e644]:
                      - button "Begin assignment Tony Mayert_1765807512088 for N67867A39040, Wilhelmine" [disabled] [ref=e645]:
                        - generic [ref=e646]: N67867A39040, Wilhelmine
                    - cell "Tony Mayert_1765807512088 More info" [ref=e647]:
                      - generic [ref=e648]:
                        - button "Tony Mayert_1765807512088" [disabled] [ref=e649]:
                          - generic [ref=e650]: Tony Mayert_1765807512088
                        - button "More info" [ref=e651]
                    - cell "0 days" [ref=e652]:
                      - button "0 days" [disabled] [ref=e653]
                    - cell "● Expired" [ref=e654]:
                      - button "● Expired" [disabled] [ref=e655]:
                        - generic [ref=e656]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e657]:
                      - button "Generate Report" [ref=e658]
                      - button "Assignment actions" [ref=e659]
                  - row "Begin assignment Nicolas Hilpert IV_1765807218077 for N73227A29422, Delphine Nicolas Hilpert IV_1765807218077 More info 0 days ● Expired Generate Report Assignment actions" [ref=e660] [cursor=pointer]:
                    - cell "Begin assignment Nicolas Hilpert IV_1765807218077 for N73227A29422, Delphine" [ref=e661]:
                      - button "Begin assignment Nicolas Hilpert IV_1765807218077 for N73227A29422, Delphine" [disabled] [ref=e662]:
                        - generic [ref=e663]: N73227A29422, Delphine
                    - cell "Nicolas Hilpert IV_1765807218077 More info" [ref=e664]:
                      - generic [ref=e665]:
                        - button "Nicolas Hilpert IV_1765807218077" [disabled] [ref=e666]:
                          - generic [ref=e667]: Nicolas Hilpert IV_1765807218077
                        - button "More info" [ref=e668]
                    - cell "0 days" [ref=e669]:
                      - button "0 days" [disabled] [ref=e670]
                    - cell "● Expired" [ref=e671]:
                      - button "● Expired" [disabled] [ref=e672]:
                        - generic [ref=e673]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e674]:
                      - button "Generate Report" [ref=e675]
                      - button "Assignment actions" [ref=e676]
                  - row "Begin assignment Byron Grady_1765806925744 for N23521A37636, Carolanne Byron Grady_1765806925744 More info 0 days ● Expired Generate Report Assignment actions" [ref=e677] [cursor=pointer]:
                    - cell "Begin assignment Byron Grady_1765806925744 for N23521A37636, Carolanne" [ref=e678]:
                      - button "Begin assignment Byron Grady_1765806925744 for N23521A37636, Carolanne" [disabled] [ref=e679]:
                        - generic [ref=e680]: N23521A37636, Carolanne
                    - cell "Byron Grady_1765806925744 More info" [ref=e681]:
                      - generic [ref=e682]:
                        - button "Byron Grady_1765806925744" [disabled] [ref=e683]:
                          - generic [ref=e684]: Byron Grady_1765806925744
                        - button "More info" [ref=e685]
                    - cell "0 days" [ref=e686]:
                      - button "0 days" [disabled] [ref=e687]
                    - cell "● Expired" [ref=e688]:
                      - button "● Expired" [disabled] [ref=e689]:
                        - generic [ref=e690]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e691]:
                      - button "Generate Report" [ref=e692]
                      - button "Assignment actions" [ref=e693]
                  - row "Begin assignment Marlon Graham_1765806631822 for N77275A43123, Haven Marlon Graham_1765806631822 More info 0 days ● Expired Generate Report Assignment actions" [ref=e694] [cursor=pointer]:
                    - cell "Begin assignment Marlon Graham_1765806631822 for N77275A43123, Haven" [ref=e695]:
                      - button "Begin assignment Marlon Graham_1765806631822 for N77275A43123, Haven" [disabled] [ref=e696]:
                        - generic [ref=e697]: N77275A43123, Haven
                    - cell "Marlon Graham_1765806631822 More info" [ref=e698]:
                      - generic [ref=e699]:
                        - button "Marlon Graham_1765806631822" [disabled] [ref=e700]:
                          - generic [ref=e701]: Marlon Graham_1765806631822
                        - button "More info" [ref=e702]
                    - cell "0 days" [ref=e703]:
                      - button "0 days" [disabled] [ref=e704]
                    - cell "● Expired" [ref=e705]:
                      - button "● Expired" [disabled] [ref=e706]:
                        - generic [ref=e707]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e708]:
                      - button "Generate Report" [ref=e709]
                      - button "Assignment actions" [ref=e710]
                  - row "Begin assignment Mrs. Judith Erdman_1765806338466 for N22595A19075, Sarah Mrs. Judith Erdman_1765806338466 More info 0 days ● Expired Generate Report Assignment actions" [ref=e711] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Judith Erdman_1765806338466 for N22595A19075, Sarah" [ref=e712]:
                      - button "Begin assignment Mrs. Judith Erdman_1765806338466 for N22595A19075, Sarah" [disabled] [ref=e713]:
                        - generic [ref=e714]: N22595A19075, Sarah
                    - cell "Mrs. Judith Erdman_1765806338466 More info" [ref=e715]:
                      - generic [ref=e716]:
                        - button "Mrs. Judith Erdman_1765806338466" [disabled] [ref=e717]:
                          - generic [ref=e718]: Mrs. Judith Erdman_1765806338466
                        - button "More info" [ref=e719]
                    - cell "0 days" [ref=e720]:
                      - button "0 days" [disabled] [ref=e721]
                    - cell "● Expired" [ref=e722]:
                      - button "● Expired" [disabled] [ref=e723]:
                        - generic [ref=e724]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e725]:
                      - button "Generate Report" [ref=e726]
                      - button "Assignment actions" [ref=e727]
                  - row "Begin assignment Mr. Willis Hettinger_1765806045255 for N78474A61805, Betty Mr. Willis Hettinger_1765806045255 More info 0 days ● Expired Generate Report Assignment actions" [ref=e728] [cursor=pointer]:
                    - cell "Begin assignment Mr. Willis Hettinger_1765806045255 for N78474A61805, Betty" [ref=e729]:
                      - button "Begin assignment Mr. Willis Hettinger_1765806045255 for N78474A61805, Betty" [disabled] [ref=e730]:
                        - generic [ref=e731]: N78474A61805, Betty
                    - cell "Mr. Willis Hettinger_1765806045255 More info" [ref=e732]:
                      - generic [ref=e733]:
                        - button "Mr. Willis Hettinger_1765806045255" [disabled] [ref=e734]:
                          - generic [ref=e735]: Mr. Willis Hettinger_1765806045255
                        - button "More info" [ref=e736]
                    - cell "0 days" [ref=e737]:
                      - button "0 days" [disabled] [ref=e738]
                    - cell "● Expired" [ref=e739]:
                      - button "● Expired" [disabled] [ref=e740]:
                        - generic [ref=e741]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e742]:
                      - button "Generate Report" [ref=e743]
                      - button "Assignment actions" [ref=e744]
                  - row "Begin assignment Gerald Streich_1765805751549 for N34710A25448, John Gerald Streich_1765805751549 More info 0 days ● Expired Generate Report Assignment actions" [ref=e745] [cursor=pointer]:
                    - cell "Begin assignment Gerald Streich_1765805751549 for N34710A25448, John" [ref=e746]:
                      - button "Begin assignment Gerald Streich_1765805751549 for N34710A25448, John" [disabled] [ref=e747]:
                        - generic [ref=e748]: N34710A25448, John
                    - cell "Gerald Streich_1765805751549 More info" [ref=e749]:
                      - generic [ref=e750]:
                        - button "Gerald Streich_1765805751549" [disabled] [ref=e751]:
                          - generic [ref=e752]: Gerald Streich_1765805751549
                        - button "More info" [ref=e753]
                    - cell "0 days" [ref=e754]:
                      - button "0 days" [disabled] [ref=e755]
                    - cell "● Expired" [ref=e756]:
                      - button "● Expired" [disabled] [ref=e757]:
                        - generic [ref=e758]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e759]:
                      - button "Generate Report" [ref=e760]
                      - button "Assignment actions" [ref=e761]
                  - row "Begin assignment Joey Toy_1765805457716 for N75189A74308, Alba Joey Toy_1765805457716 More info 0 days ● Expired Generate Report Assignment actions" [ref=e762] [cursor=pointer]:
                    - cell "Begin assignment Joey Toy_1765805457716 for N75189A74308, Alba" [ref=e763]:
                      - button "Begin assignment Joey Toy_1765805457716 for N75189A74308, Alba" [disabled] [ref=e764]:
                        - generic [ref=e765]: N75189A74308, Alba
                    - cell "Joey Toy_1765805457716 More info" [ref=e766]:
                      - generic [ref=e767]:
                        - button "Joey Toy_1765805457716" [disabled] [ref=e768]:
                          - generic [ref=e769]: Joey Toy_1765805457716
                        - button "More info" [ref=e770]
                    - cell "0 days" [ref=e771]:
                      - button "0 days" [disabled] [ref=e772]
                    - cell "● Expired" [ref=e773]:
                      - button "● Expired" [disabled] [ref=e774]:
                        - generic [ref=e775]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e776]:
                      - button "Generate Report" [ref=e777]
                      - button "Assignment actions" [ref=e778]
                  - row "Begin assignment Tanya Jenkins_1765805164560 for N98402A90839, Gabe Tanya Jenkins_1765805164560 More info 0 days ● Expired Generate Report Assignment actions" [ref=e779] [cursor=pointer]:
                    - cell "Begin assignment Tanya Jenkins_1765805164560 for N98402A90839, Gabe" [ref=e780]:
                      - button "Begin assignment Tanya Jenkins_1765805164560 for N98402A90839, Gabe" [disabled] [ref=e781]:
                        - generic [ref=e782]: N98402A90839, Gabe
                    - cell "Tanya Jenkins_1765805164560 More info" [ref=e783]:
                      - generic [ref=e784]:
                        - button "Tanya Jenkins_1765805164560" [disabled] [ref=e785]:
                          - generic [ref=e786]: Tanya Jenkins_1765805164560
                        - button "More info" [ref=e787]
                    - cell "0 days" [ref=e788]:
                      - button "0 days" [disabled] [ref=e789]
                    - cell "● Expired" [ref=e790]:
                      - button "● Expired" [disabled] [ref=e791]:
                        - generic [ref=e792]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e793]:
                      - button "Generate Report" [ref=e794]
                      - button "Assignment actions" [ref=e795]
                  - row "Begin assignment Sandra Orn_1765804995120 for N68382A85684, Anna Sandra Orn_1765804995120 More info 0 days ● Expired Generate Report Assignment actions" [ref=e796] [cursor=pointer]:
                    - cell "Begin assignment Sandra Orn_1765804995120 for N68382A85684, Anna" [ref=e797]:
                      - button "Begin assignment Sandra Orn_1765804995120 for N68382A85684, Anna" [disabled] [ref=e798]:
                        - generic [ref=e799]: N68382A85684, Anna
                    - cell "Sandra Orn_1765804995120 More info" [ref=e800]:
                      - generic [ref=e801]:
                        - button "Sandra Orn_1765804995120" [disabled] [ref=e802]:
                          - generic [ref=e803]: Sandra Orn_1765804995120
                        - button "More info" [ref=e804]
                    - cell "0 days" [ref=e805]:
                      - button "0 days" [disabled] [ref=e806]
                    - cell "● Expired" [ref=e807]:
                      - button "● Expired" [disabled] [ref=e808]:
                        - generic [ref=e809]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e810]:
                      - button "Generate Report" [ref=e811]
                      - button "Assignment actions" [ref=e812]
                  - row "Begin assignment Curtis Koss_1765804827004 for N16971A66282, Ernestina Curtis Koss_1765804827004 More info 0 days ● Expired Generate Report Assignment actions" [ref=e813] [cursor=pointer]:
                    - cell "Begin assignment Curtis Koss_1765804827004 for N16971A66282, Ernestina" [ref=e814]:
                      - button "Begin assignment Curtis Koss_1765804827004 for N16971A66282, Ernestina" [disabled] [ref=e815]:
                        - generic [ref=e816]: N16971A66282, Ernestina
                    - cell "Curtis Koss_1765804827004 More info" [ref=e817]:
                      - generic [ref=e818]:
                        - button "Curtis Koss_1765804827004" [disabled] [ref=e819]:
                          - generic [ref=e820]: Curtis Koss_1765804827004
                        - button "More info" [ref=e821]
                    - cell "0 days" [ref=e822]:
                      - button "0 days" [disabled] [ref=e823]
                    - cell "● Expired" [ref=e824]:
                      - button "● Expired" [disabled] [ref=e825]:
                        - generic [ref=e826]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e827]:
                      - button "Generate Report" [ref=e828]
                      - button "Assignment actions" [ref=e829]
                  - row "Begin assignment Lorene Swift_1765804656132 for N13513A37669, Camilla Lorene Swift_1765804656132 More info 0 days ● Expired Generate Report Assignment actions" [ref=e830] [cursor=pointer]:
                    - cell "Begin assignment Lorene Swift_1765804656132 for N13513A37669, Camilla" [ref=e831]:
                      - button "Begin assignment Lorene Swift_1765804656132 for N13513A37669, Camilla" [disabled] [ref=e832]:
                        - generic [ref=e833]: N13513A37669, Camilla
                    - cell "Lorene Swift_1765804656132 More info" [ref=e834]:
                      - generic [ref=e835]:
                        - button "Lorene Swift_1765804656132" [disabled] [ref=e836]:
                          - generic [ref=e837]: Lorene Swift_1765804656132
                        - button "More info" [ref=e838]
                    - cell "0 days" [ref=e839]:
                      - button "0 days" [disabled] [ref=e840]
                    - cell "● Expired" [ref=e841]:
                      - button "● Expired" [disabled] [ref=e842]:
                        - generic [ref=e843]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e844]:
                      - button "Generate Report" [ref=e845]
                      - button "Assignment actions" [ref=e846]
                  - row "Begin assignment Allan Wolff_1765804486845 for N40174A3142, Molly Allan Wolff_1765804486845 More info 0 days ● Expired Generate Report Assignment actions" [ref=e847] [cursor=pointer]:
                    - cell "Begin assignment Allan Wolff_1765804486845 for N40174A3142, Molly" [ref=e848]:
                      - button "Begin assignment Allan Wolff_1765804486845 for N40174A3142, Molly" [disabled] [ref=e849]:
                        - generic [ref=e850]: N40174A3142, Molly
                    - cell "Allan Wolff_1765804486845 More info" [ref=e851]:
                      - generic [ref=e852]:
                        - button "Allan Wolff_1765804486845" [disabled] [ref=e853]:
                          - generic [ref=e854]: Allan Wolff_1765804486845
                        - button "More info" [ref=e855]
                    - cell "0 days" [ref=e856]:
                      - button "0 days" [disabled] [ref=e857]
                    - cell "● Expired" [ref=e858]:
                      - button "● Expired" [disabled] [ref=e859]:
                        - generic [ref=e860]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e861]:
                      - button "Generate Report" [ref=e862]
                      - button "Assignment actions" [ref=e863]
                  - row "Begin assignment Lewis Gleichner_1765804317678 for N32371A95782, Martin Lewis Gleichner_1765804317678 More info 0 days ● Expired Generate Report Assignment actions" [ref=e864] [cursor=pointer]:
                    - cell "Begin assignment Lewis Gleichner_1765804317678 for N32371A95782, Martin" [ref=e865]:
                      - button "Begin assignment Lewis Gleichner_1765804317678 for N32371A95782, Martin" [disabled] [ref=e866]:
                        - generic [ref=e867]: N32371A95782, Martin
                    - cell "Lewis Gleichner_1765804317678 More info" [ref=e868]:
                      - generic [ref=e869]:
                        - button "Lewis Gleichner_1765804317678" [disabled] [ref=e870]:
                          - generic [ref=e871]: Lewis Gleichner_1765804317678
                        - button "More info" [ref=e872]
                    - cell "0 days" [ref=e873]:
                      - button "0 days" [disabled] [ref=e874]
                    - cell "● Expired" [ref=e875]:
                      - button "● Expired" [disabled] [ref=e876]:
                        - generic [ref=e877]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e878]:
                      - button "Generate Report" [ref=e879]
                      - button "Assignment actions" [ref=e880]
                  - row "Begin assignment Ms. Viola Strosin_1765804149285 for N76209A14235, Kimberly Ms. Viola Strosin_1765804149285 More info 0 days ● Expired Generate Report Assignment actions" [ref=e881] [cursor=pointer]:
                    - cell "Begin assignment Ms. Viola Strosin_1765804149285 for N76209A14235, Kimberly" [ref=e882]:
                      - button "Begin assignment Ms. Viola Strosin_1765804149285 for N76209A14235, Kimberly" [disabled] [ref=e883]:
                        - generic [ref=e884]: N76209A14235, Kimberly
                    - cell "Ms. Viola Strosin_1765804149285 More info" [ref=e885]:
                      - generic [ref=e886]:
                        - button "Ms. Viola Strosin_1765804149285" [disabled] [ref=e887]:
                          - generic [ref=e888]: Ms. Viola Strosin_1765804149285
                        - button "More info" [ref=e889]
                    - cell "0 days" [ref=e890]:
                      - button "0 days" [disabled] [ref=e891]
                    - cell "● Expired" [ref=e892]:
                      - button "● Expired" [disabled] [ref=e893]:
                        - generic [ref=e894]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e895]:
                      - button "Generate Report" [ref=e896]
                      - button "Assignment actions" [ref=e897]
                  - row "Begin assignment Jack Hegmann_1765803978745 for N46861A50434, Ruth Jack Hegmann_1765803978745 More info 0 days ● Expired Generate Report Assignment actions" [ref=e898] [cursor=pointer]:
                    - cell "Begin assignment Jack Hegmann_1765803978745 for N46861A50434, Ruth" [ref=e899]:
                      - button "Begin assignment Jack Hegmann_1765803978745 for N46861A50434, Ruth" [disabled] [ref=e900]:
                        - generic [ref=e901]: N46861A50434, Ruth
                    - cell "Jack Hegmann_1765803978745 More info" [ref=e902]:
                      - generic [ref=e903]:
                        - button "Jack Hegmann_1765803978745" [disabled] [ref=e904]:
                          - generic [ref=e905]: Jack Hegmann_1765803978745
                        - button "More info" [ref=e906]
                    - cell "0 days" [ref=e907]:
                      - button "0 days" [disabled] [ref=e908]
                    - cell "● Expired" [ref=e909]:
                      - button "● Expired" [disabled] [ref=e910]:
                        - generic [ref=e911]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e912]:
                      - button "Generate Report" [ref=e913]
                      - button "Assignment actions" [ref=e914]
                  - row "Begin assignment Edgar Macejkovic PhD_1765803807867 for N29775A3716, Connie Edgar Macejkovic PhD_1765803807867 More info 0 days ● Expired Generate Report Assignment actions" [ref=e915] [cursor=pointer]:
                    - cell "Begin assignment Edgar Macejkovic PhD_1765803807867 for N29775A3716, Connie" [ref=e916]:
                      - button "Begin assignment Edgar Macejkovic PhD_1765803807867 for N29775A3716, Connie" [disabled] [ref=e917]:
                        - generic [ref=e918]: N29775A3716, Connie
                    - cell "Edgar Macejkovic PhD_1765803807867 More info" [ref=e919]:
                      - generic [ref=e920]:
                        - button "Edgar Macejkovic PhD_1765803807867" [disabled] [ref=e921]:
                          - generic [ref=e922]: Edgar Macejkovic PhD_1765803807867
                        - button "More info" [ref=e923]
                    - cell "0 days" [ref=e924]:
                      - button "0 days" [disabled] [ref=e925]
                    - cell "● Expired" [ref=e926]:
                      - button "● Expired" [disabled] [ref=e927]:
                        - generic [ref=e928]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e929]:
                      - button "Generate Report" [ref=e930]
                      - button "Assignment actions" [ref=e931]
                  - row "Begin assignment Henry Rohan_1765803600337 for N40991A39692, Karolann Henry Rohan_1765803600337 More info 0 days ● Expired Generate Report Assignment actions" [ref=e932] [cursor=pointer]:
                    - cell "Begin assignment Henry Rohan_1765803600337 for N40991A39692, Karolann" [ref=e933]:
                      - button "Begin assignment Henry Rohan_1765803600337 for N40991A39692, Karolann" [disabled] [ref=e934]:
                        - generic [ref=e935]: N40991A39692, Karolann
                    - cell "Henry Rohan_1765803600337 More info" [ref=e936]:
                      - generic [ref=e937]:
                        - button "Henry Rohan_1765803600337" [disabled] [ref=e938]:
                          - generic [ref=e939]: Henry Rohan_1765803600337
                        - button "More info" [ref=e940]
                    - cell "0 days" [ref=e941]:
                      - button "0 days" [disabled] [ref=e942]
                    - cell "● Expired" [ref=e943]:
                      - button "● Expired" [disabled] [ref=e944]:
                        - generic [ref=e945]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e946]:
                      - button "Generate Report" [ref=e947]
                      - button "Assignment actions" [ref=e948]
            - generic [ref=e949]:
              - generic [ref=e952]:
                - img [ref=e953]
                - heading "Notifications Center" [level=2] [ref=e957]
              - generic [ref=e958]:
                - generic [ref=e960]:
                  - img [ref=e961]
                  - heading "Resources" [level=3] [ref=e965]
                - list [ref=e966]:
                  - listitem [ref=e967]:
                    - button "Riverside Learn" [ref=e968] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e969]
                      - img [ref=e971]
                  - listitem [ref=e973]:
                    - button "Onboarding Tutorial Videos" [ref=e974] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e975]
                      - img [ref=e977]
                  - listitem [ref=e979]:
                    - button "Quick Reference Guides" [ref=e980] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e981]
                      - img [ref=e983]
                - button "View All" [ref=e986] [cursor=pointer]
      - contentinfo [ref=e987]:
        - generic [ref=e988]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e989] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e990]
        - generic [ref=e991]:
          - link "Riverside Insights Facebook" [ref=e992] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e993]
          - link "Riverside Insights Twitter" [ref=e994] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e995]
          - link "Riverside Insights LinkedIn" [ref=e996] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e997]
          - link "Riverside Insights Instagram" [ref=e998] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e999]
        - generic [ref=e1000]:
          - button "Leave Feedback" [ref=e1001] [cursor=pointer]
          - generic [ref=e1002]: "|"
          - link "Terms of Use" [ref=e1003] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e1004]: "|"
          - link "Privacy Policy" [ref=e1005] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e1006]: Footer region end
```

# Test source

```ts
  6504 |       "LETPAT.W5PA",
  6505 |       "RPDLET.W5PA",
  6506 |       "RPDPIC.W5PA",
  6507 |       "NUMPAT.W5PA",
  6508 |       "SRDGFL.W5PA",
  6509 |       "NUMPAT.W5PX",
  6510 |       "MAGCMP.W5PA",
  6511 |       "WRDGFL.W5PA",
  6512 |       "MAGCMP.W5PX",
  6513 |       "RPDPHO.W5PX",
  6514 |       "RPDQNT.W5PA",
  6515 |       "RPDNUM.W5PA",
  6516 |       "RPDNUM.W5PX",
  6517 |       "RPDQNT.W5PX",
  6518 |       "RPDPIC.W5PX",
  6519 |       "RPDLET.W5PX",
  6520 |       "LETPAT.W5PX",
  6521 |       "RPDPHO.W5PX",
  6522 |       "SYMBIN.W5PA",
  6523 |       "SRDGFL.W5PB",
  6524 |       "WRDGFL.W5PB",
  6525 |       "NUMPAT.W5NV",
  6526 |       ];
  6527 |     await expect.soft(this.aeValue).toHaveText(AE);
  6528 |     await expect.soft(this.geValue).toHaveText(GE);
  6529 |     expect
  6530 |       .soft(await this.endTestPopUpElements.nth(1).textContent())
  6531 |       .toContain(ScoreCheckText);
  6532 |     if (
  6533 |       testNames.includes(testStemForm) &&
  6534 |       !typeOfTest.match(/Block A Discontinue Scenario WRTSMP|Sample Items End Test Scenario/i)
  6535 |     ) {
  6536 |       expect
  6537 |         .soft(await this.endTestPopUpElements.nth(10).textContent())
  6538 |         .toContain(FlagsText);
  6539 |       expect
  6540 |         .soft(await this.endTestPopUpElements.nth(15).textContent())
  6541 |         .toContain(OutcomeMsg);
  6542 |       await this.endTestPopUpElements.nth(17).click();
  6543 |     } else if (testNames2.includes(testStemForm)) {
  6544 |       expect
  6545 |         .soft(await this.endTestPopUpElements.nth(9).textContent())
  6546 |         .toContain(FlagsText);
  6547 |       expect
  6548 |         .soft(await this.endTestPopUpElements.nth(14).textContent())
  6549 |         .toContain(OutcomeMsg);
  6550 |       await this.endTestPopUpElements.nth(18).click();
  6551 |     } else if (
  6552 |       testStemForm === "SEMRET.W5PA" || testStemForm === "PHNRET.W5PA" ||testStemForm === "SEMRET.W5PX"   ||testStemForm === "PHNRET.W5PX")
  6553 |      {
  6554 |       expect
  6555 |         .soft(await this.endTestPopUpElements.nth(9).textContent())
  6556 |         .toContain(FlagsText);
  6557 |       expect
  6558 |         .soft(await this.endTestPopUpElements.nth(14).textContent())
  6559 |         .toContain(OutcomeMsg);
  6560 |       await this.endTestPopUpElements.nth(16).click();
  6561 |     } else if 
  6562 |       (testStemForm === "MAGCMP.W5PA" || testStemForm === "MAGCMP.W5PX") {
  6563 |       expect
  6564 |         .soft(await this.endTestPopUpElements.nth(9).textContent())
  6565 |         .toContain(FlagsText);
  6566 |       expect
  6567 |         .soft(await this.endTestPopUpElements.nth(14).textContent())
  6568 |         .toContain(OutcomeMsg);
  6569 |       await this.endTestPopUpElements.nth(17).click();
  6570 |     }else if 
  6571 |       (testStemForm === "VWKMEM.W5PA") {
  6572 |       expect
  6573 |         .soft(await this.endTestPopUpElements.nth(8).textContent())
  6574 |         .toContain(FlagsText);
  6575 |       expect
  6576 |         .soft(await this.endTestPopUpElements.nth(13).textContent())
  6577 |         .toContain(OutcomeMsg);
  6578 |       await this.endTestPopUpElements.nth(17).click();
  6579 |     }else if (testNames1.includes(testStemForm)) {
  6580 |       expect
  6581 |         .soft(await this.endTestPopUpElements.nth(11).textContent())
  6582 |         .toContain(FlagsText);
  6583 |       expect
  6584 |         .soft(await this.endTestPopUpElements.nth(16).textContent())
  6585 |         .toContain(OutcomeMsg);
  6586 |       await this.endTestPopUpElements.nth(19).click();
  6587 |     } else if(testStemForm === "BLKROT.W5PA|BLKROT.W5NV" &&
  6588 |         typeOfTest.match(
  6589 |             /Answer only one sample item for SSP(1|2|3)/i
  6590 |         )) {
  6591 |         expect
  6592 |             .soft(await this.endTestPopUpElements.nth(9).textContent())
  6593 |             .toContain(FlagsText);
  6594 |         expect
  6595 |             .soft(await this.endTestPopUpElements.nth(14).textContent())
  6596 |             .toContain(OutcomeMsg);
  6597 |         await this.endTestPopUpElements.nth(17).click();
  6598 |     } else {
  6599 |       expect
  6600 |         .soft(await this.endTestPopUpElements.nth(8).textContent())
  6601 |         .toContain(FlagsText);
  6602 |       expect
  6603 |         .soft(await this.endTestPopUpElements.nth(13).textContent())
> 6604 |         .toContain(OutcomeMsg);
       |          ^ Error: expect(received).toContain(expected) // indexOf
  6605 |       if (testNames1.includes(testStemForm)) {
  6606 |         await this.endTestPopUpElements.nth(17).click();
  6607 |       } else if (testNames2.includes(testStemForm)) {
  6608 |         await this.endTestPopUpElements.nth(18).click();
  6609 |       } else if (
  6610 |         (testStemForm === "STYCMP.W5PA" &&
  6611 |           typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
  6612 |         (testStemForm === "WRDATK.W5PA" &&
  6613 |           typeOfTest.match(/Block A End Test Flow with 2 correct Scenario for SSP1|Block A End Test Flow with Samples and Items administered wrong scenario for SSP1|Sample A correct !C scenario SSP1/i)) ||
  6614 |         (testStemForm === "PSGCMP.W5PA" &&
  6615 |           typeOfTest.match(/5 Lowest incorrect items (SSP2|SSP3|SSP4|SSP5|SSP6)|Reverse Logic (SSP2|SSP3|SSP4|SSP5|SSP6)|5 correct 5 incorrect-Block B All incorrect-Block A SSP2|Score Error Scenario for (SSP2|SSP3|SSP4|SSP5|SSP6)/i)) ||
  6616 |         (testStemForm === "LWIDNT.W5PA" &&
  6617 |           typeOfTest.match(/lowest incorrect items SSP1|1 correct 1 incorrect SSP1/i)) ||
  6618 |         (testStemForm === "MPRBID.W5PA" &&
  6619 |           typeOfTest.match(
  6620 |             /Sample Items AB discontinue Scenario for SSP (1|2|3)/i
  6621 |           ))
  6622 |       ) {
  6623 |         await this.endTestPopUpElements.nth(16).click();
  6624 |       } else if 
  6625 |         (testStemForm === "MAGCMP.W5PA" || testStemForm === "MAGCMP.W5PX" || testStemForm === "VAL.W5PA" || (testStemForm === "CALC.W5PA" && typeOfTest.match(/CALC Sample End Test scenario for SSP1/i))) {
  6626 |         await this.endTestPopUpElements.nth(17).click();
  6627 |       } else {
  6628 |         await this.endTestPopUpElements.nth(15).click();
  6629 |       }
  6630 |     }
  6631 |     const rsbelements = await this.page.locator(
  6632 |       "//button[@class='rsi-checkbox']"
  6633 |     );
  6634 |     const count = await rsbelements.count();
  6635 |     // Array to store text contents
  6636 |     const responseStyleBehaviours: string[] = [];
  6637 |     // Iterate over each element and fetch text content
  6638 |     for (let i = 0; i < count; i++) {
  6639 |       const element = rsbelements.nth(i);
  6640 |       const textContent = await element.textContent();
  6641 |       responseStyleBehaviours.push(textContent?.trim() || "");
  6642 |     }
  6643 |     console.log(responseStyleBehaviours);
  6644 |     rsb.forEach((rsbehaviourText, index) => {
  6645 |       expect(responseStyleBehaviours[index]).toContain(rsbehaviourText);
  6646 |     });
  6647 |     if (testNames.includes(testStemForm)) {
  6648 |       await this.endTestPopUpElements.nth(17).click();
  6649 |     } else if (testNames2.includes(testStemForm)) {
  6650 |       await this.endTestPopUpElements.nth(18).click();
  6651 |     } else if (testNames1.includes(testStemForm)) {
  6652 |       await this.endTestPopUpElements.nth(19).click();
  6653 |     } else if (
  6654 |       (testStemForm === "STYCMP.W5PA" &&
  6655 |         typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
  6656 |       (testStemForm === "WRDATK.W5PA" &&
  6657 |         typeOfTest.match(/Block A End Test Flow with 2 correct Scenario for SSP1|Block A End Test Flow with Samples and Items administered wrong scenario for SSP1|Sample A correct !C scenario SSP1/i)) ||
  6658 |       (testStemForm === "PSGCMP.W5PA" &&
  6659 |         typeOfTest.match(/5 Lowest incorrect items (SSP2|SSP3|SSP4|SSP5|SSP6)|Reverse Logic (SSP2|SSP3|SSP4|SSP5|SSP6)|5 correct 5 incorrect-Block B All incorrect-Block A SSP2|Score Error Scenario for (SSP2|SSP3|SSP4|SPP5|SSP6)/i)) ||
  6660 |       (testStemForm === "LWIDNT.W5PA" &&
  6661 |         typeOfTest.match(/Lowest incorrect items SSP1|1 correct 1 incorrect SSP1/i)) ||
  6662 |       (testStemForm === "SEMRET.W5PA" || testStemForm === "SEMRET.W5PX" || testStemForm === "PHNRET.W5PA"  || testStemForm === "PHNRET.W5PX" ) ||
  6663 |       (testStemForm === "MPRBID.W5PA" &&
  6664 |         typeOfTest.match(
  6665 |           /Sample Items AB discontinue Scenario for SSP (1|2|3)/i
  6666 |         ))
  6667 |     ) {
  6668 |       await this.endTestPopUpElements.nth(16).click();
  6669 |     } else if 
  6670 |       (testStemForm === "MAGCMP.W5PA" || testStemForm === "MAGCMP.W5PX"|| testStemForm === "VAL.W5PA"|| (testStemForm === "CALC.W5PA" && typeOfTest.match(/CALC Sample End Test scenario for SSP1/i))) {
  6671 |       await this.endTestPopUpElements.nth(17).click();
  6672 |     } else {
  6673 |       await this.endTestPopUpElements.nth(15).click();
  6674 |     }
  6675 |     await this.page.waitForTimeout(2000);
  6676 |   }
  6677 | 
  6678 |   async completeTestSessionObservationsAndClickNext(typeOfTest?: string, testStemForm?: string) {
  6679 |     await this.page.bringToFront();
  6680 |     if (await this.levelOfProficiency.isVisible()) {
  6681 |     await this.page.waitForTimeout(1000);
  6682 |     await this.selectTheCheckbox(0, "Examinee MAsk");
  6683 |     await this.page.waitForTimeout(1000);
  6684 |     await this.selectTheCheckbox(2, "examiner MAsk");
  6685 |     await this.selectTheDropdownOption(
  6686 |       0,
  6687 |       "Advanced",
  6688 |       "Level of Conversational Proficiency"
  6689 |     );
  6690 |     await this.selectTheDropdownOption(
  6691 |       1,
  6692 |       "Was uncooperative at times",
  6693 |       "Level of Cooperation"
  6694 |     );
  6695 |     await this.selectTheDropdownOption(
  6696 |       2,
  6697 |       "Seemed lethargic",
  6698 |       "Level of Activity"
  6699 |     );
  6700 |     await this.selectTheDropdownOption(
  6701 |       3,
  6702 |       "Appeared distracted some of the time",
  6703 |       "Attention and Concentration"
  6704 |     );
```