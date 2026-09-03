# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/RDGREC_Rerouting.spec.ts >>  RDGREC Rerouting and LeftNav >> Grade 9 to Adult - Flag Item with Notes and Review scenario for SSP4 Test Rerouting
- Location: src/tests/ReroutingandLeftNav/RDGREC_Rerouting.spec.ts:12:13

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "0 items"
Received string:    " 4 Items"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Examinee completed all required test items."
Received string:    "4 Items"
```

```
Error: expect(received).toContain(expected) // indexOf

Matcher error: received value must not be null nor undefined

Received has value: undefined
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
              - heading "Hello 63Pw Aut25AH" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "63Pw Aut25AH" [ref=e10] [cursor=pointer]
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
                  - row "Begin assignment Wade Pollich III_1788460910235 (+1 more) for N11106A67896, Wilfredo Wade Pollich III_1788460910235 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Wade Pollich III_1788460910235 (+1 more) for N11106A67896, Wilfredo" [ref=e75]:
                      - button "Begin assignment Wade Pollich III_1788460910235 (+1 more) for N11106A67896, Wilfredo" [disabled] [ref=e76]:
                        - generic [ref=e77]: N11106A67896, Wilfredo
                    - cell "Wade Pollich III_1788460910235 (+1 more) More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Wade Pollich III_1788460910235 (+1 more)" [disabled] [ref=e80]:
                          - generic [ref=e81]: Wade Pollich III_1788460910235 (+1 more)
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
                  - row "Begin assignment Gustavo Beahan_1788460557412 for N62750A38122, Marge Gustavo Beahan_1788460557412 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Gustavo Beahan_1788460557412 for N62750A38122, Marge" [ref=e93]:
                      - button "Begin assignment Gustavo Beahan_1788460557412 for N62750A38122, Marge" [disabled] [ref=e94]:
                        - generic [ref=e95]: N62750A38122, Marge
                    - cell "Gustavo Beahan_1788460557412 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Gustavo Beahan_1788460557412" [disabled] [ref=e98]:
                          - generic [ref=e99]: Gustavo Beahan_1788460557412
                        - button "More info" [ref=e100]
                    - cell "90 days" [ref=e101]:
                      - button "90 days" [disabled] [ref=e102]
                    - cell "● Submitted" [ref=e103]:
                      - button "● Submitted" [disabled] [ref=e104]:
                        - generic [ref=e105]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e106]:
                      - button "Edit Assignment" [disabled] [ref=e107]
                      - button "Add Tests" [disabled] [ref=e108]
                      - button "Assignment actions" [ref=e109]
                  - row "Begin assignment Devin Ullrich_1788460284606 for N65332A11385, Lorenz Devin Ullrich_1788460284606 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Devin Ullrich_1788460284606 for N65332A11385, Lorenz" [ref=e111]:
                      - button "Begin assignment Devin Ullrich_1788460284606 for N65332A11385, Lorenz" [disabled] [ref=e112]:
                        - generic [ref=e113]: N65332A11385, Lorenz
                    - cell "Devin Ullrich_1788460284606 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Devin Ullrich_1788460284606" [disabled] [ref=e116]:
                          - generic [ref=e117]: Devin Ullrich_1788460284606
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
                  - row "Begin assignment Rene Pagac_1788459953603 (+1 more) for N4042A98288, Berta Rene Pagac_1788459953603 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Rene Pagac_1788459953603 (+1 more) for N4042A98288, Berta" [ref=e129]:
                      - button "Begin assignment Rene Pagac_1788459953603 (+1 more) for N4042A98288, Berta" [disabled] [ref=e130]:
                        - generic [ref=e131]: N4042A98288, Berta
                    - cell "Rene Pagac_1788459953603 (+1 more) More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Rene Pagac_1788459953603 (+1 more)" [disabled] [ref=e134]:
                          - generic [ref=e135]: Rene Pagac_1788459953603 (+1 more)
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
                  - row "Begin assignment Sheila Torphy_1788459619533 for N48316A49359, Adalberto Sheila Torphy_1788459619533 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Sheila Torphy_1788459619533 for N48316A49359, Adalberto" [ref=e147]:
                      - button "Begin assignment Sheila Torphy_1788459619533 for N48316A49359, Adalberto" [disabled] [ref=e148]:
                        - generic [ref=e149]: N48316A49359, Adalberto
                    - cell "Sheila Torphy_1788459619533 More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Sheila Torphy_1788459619533" [disabled] [ref=e152]:
                          - generic [ref=e153]: Sheila Torphy_1788459619533
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
                  - row "Begin assignment Mr. Ronald Fahey_1788459214800 for N9694A88703, Reva Mr. Ronald Fahey_1788459214800 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Mr. Ronald Fahey_1788459214800 for N9694A88703, Reva" [ref=e165]:
                      - button "Begin assignment Mr. Ronald Fahey_1788459214800 for N9694A88703, Reva" [disabled] [ref=e166]:
                        - generic [ref=e167]: N9694A88703, Reva
                    - cell "Mr. Ronald Fahey_1788459214800 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Mr. Ronald Fahey_1788459214800" [disabled] [ref=e170]:
                          - generic [ref=e171]: Mr. Ronald Fahey_1788459214800
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
                  - row "Begin assignment Jesus Kunde_1788458963726 for N24654A56227, Dianna Jesus Kunde_1788458963726 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Jesus Kunde_1788458963726 for N24654A56227, Dianna" [ref=e183]:
                      - button "Begin assignment Jesus Kunde_1788458963726 for N24654A56227, Dianna" [disabled] [ref=e184]:
                        - generic [ref=e185]: N24654A56227, Dianna
                    - cell "Jesus Kunde_1788458963726 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Jesus Kunde_1788458963726" [disabled] [ref=e188]:
                          - generic [ref=e189]: Jesus Kunde_1788458963726
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
                  - row "Begin assignment Lee Stroman_1788458667021 for N93079A51638, Nat Lee Stroman_1788458667021 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Lee Stroman_1788458667021 for N93079A51638, Nat" [ref=e201]:
                      - button "Begin assignment Lee Stroman_1788458667021 for N93079A51638, Nat" [disabled] [ref=e202]:
                        - generic [ref=e203]: N93079A51638, Nat
                    - cell "Lee Stroman_1788458667021 More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Lee Stroman_1788458667021" [disabled] [ref=e206]:
                          - generic [ref=e207]: Lee Stroman_1788458667021
                        - button "More info" [ref=e208]
                    - cell "90 days" [ref=e209]:
                      - button "90 days" [disabled] [ref=e210]
                    - cell "● Submitted" [ref=e211]:
                      - button "● Submitted" [disabled] [ref=e212]:
                        - generic [ref=e213]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e214]:
                      - button "Edit Assignment" [disabled] [ref=e215]
                      - button "Add Tests" [disabled] [ref=e216]
                      - button "Assignment actions" [ref=e217]
                  - row "Begin assignment Noel Romaguera_1788458396516 for N9926A33960, Nicolas Noel Romaguera_1788458396516 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Noel Romaguera_1788458396516 for N9926A33960, Nicolas" [ref=e219]:
                      - button "Begin assignment Noel Romaguera_1788458396516 for N9926A33960, Nicolas" [disabled] [ref=e220]:
                        - generic [ref=e221]: N9926A33960, Nicolas
                    - cell "Noel Romaguera_1788458396516 More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Noel Romaguera_1788458396516" [disabled] [ref=e224]:
                          - generic [ref=e225]: Noel Romaguera_1788458396516
                        - button "More info" [ref=e226]
                    - cell "90 days" [ref=e227]:
                      - button "90 days" [disabled] [ref=e228]
                    - cell "● Submitted" [ref=e229]:
                      - button "● Submitted" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row "Begin assignment Benjamin Haag Jr._1788458076645 for N64944A11483, Charlie Benjamin Haag Jr._1788458076645 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Benjamin Haag Jr._1788458076645 for N64944A11483, Charlie" [ref=e237]:
                      - button "Begin assignment Benjamin Haag Jr._1788458076645 for N64944A11483, Charlie" [disabled] [ref=e238]:
                        - generic [ref=e239]: N64944A11483, Charlie
                    - cell "Benjamin Haag Jr._1788458076645 More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Benjamin Haag Jr._1788458076645" [disabled] [ref=e242]:
                          - generic [ref=e243]: Benjamin Haag Jr._1788458076645
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
                  - row "Begin assignment Morris Bailey_1788457805239 for N51722A11325, Ben Morris Bailey_1788457805239 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Morris Bailey_1788457805239 for N51722A11325, Ben" [ref=e255]:
                      - button "Begin assignment Morris Bailey_1788457805239 for N51722A11325, Ben" [disabled] [ref=e256]:
                        - generic [ref=e257]: N51722A11325, Ben
                    - cell "Morris Bailey_1788457805239 More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Morris Bailey_1788457805239" [disabled] [ref=e260]:
                          - generic [ref=e261]: Morris Bailey_1788457805239
                        - button "More info" [ref=e262]
                    - cell "90 days" [ref=e263]:
                      - button "90 days" [disabled] [ref=e264]
                    - cell "● Submitted" [ref=e265]:
                      - button "● Submitted" [disabled] [ref=e266]:
                        - generic [ref=e267]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e268]:
                      - button "Edit Assignment" [disabled] [ref=e269]
                      - button "Add Tests" [disabled] [ref=e270]
                      - button "Assignment actions" [ref=e271]
                  - row "Begin assignment Jeff Krajcik_1788457556067 for N23215A84434, Marta Jeff Krajcik_1788457556067 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Jeff Krajcik_1788457556067 for N23215A84434, Marta" [ref=e273]:
                      - button "Begin assignment Jeff Krajcik_1788457556067 for N23215A84434, Marta" [disabled] [ref=e274]:
                        - generic [ref=e275]: N23215A84434, Marta
                    - cell "Jeff Krajcik_1788457556067 More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Jeff Krajcik_1788457556067" [disabled] [ref=e278]:
                          - generic [ref=e279]: Jeff Krajcik_1788457556067
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
                  - row "Begin assignment Noah Jast_1788457252730 for N62605A95853, Reta Noah Jast_1788457252730 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Noah Jast_1788457252730 for N62605A95853, Reta" [ref=e291]:
                      - button "Begin assignment Noah Jast_1788457252730 for N62605A95853, Reta" [disabled] [ref=e292]:
                        - generic [ref=e293]: N62605A95853, Reta
                    - cell "Noah Jast_1788457252730 More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Noah Jast_1788457252730" [disabled] [ref=e296]:
                          - generic [ref=e297]: Noah Jast_1788457252730
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
                  - row "Begin assignment Geneva Marquardt_1788456989003 for N35014A85690, Jerrell Geneva Marquardt_1788456989003 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e308] [cursor=pointer]:
                    - cell "Begin assignment Geneva Marquardt_1788456989003 for N35014A85690, Jerrell" [ref=e309]:
                      - button "Begin assignment Geneva Marquardt_1788456989003 for N35014A85690, Jerrell" [disabled] [ref=e310]:
                        - generic [ref=e311]: N35014A85690, Jerrell
                    - cell "Geneva Marquardt_1788456989003 More info" [ref=e312]:
                      - generic [ref=e313]:
                        - button "Geneva Marquardt_1788456989003" [disabled] [ref=e314]:
                          - generic [ref=e315]: Geneva Marquardt_1788456989003
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
                  - row "Begin assignment Mrs. Ernestine Pagac_1788456664671 for N54355A59313, Bette Mrs. Ernestine Pagac_1788456664671 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e326] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Ernestine Pagac_1788456664671 for N54355A59313, Bette" [ref=e327]:
                      - button "Begin assignment Mrs. Ernestine Pagac_1788456664671 for N54355A59313, Bette" [disabled] [ref=e328]:
                        - generic [ref=e329]: N54355A59313, Bette
                    - cell "Mrs. Ernestine Pagac_1788456664671 More info" [ref=e330]:
                      - generic [ref=e331]:
                        - button "Mrs. Ernestine Pagac_1788456664671" [disabled] [ref=e332]:
                          - generic [ref=e333]: Mrs. Ernestine Pagac_1788456664671
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
                  - row "Begin assignment Ms. Amanda Quitzon_1788456391483 for N24989A83093, Judd Ms. Amanda Quitzon_1788456391483 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e344] [cursor=pointer]:
                    - cell "Begin assignment Ms. Amanda Quitzon_1788456391483 for N24989A83093, Judd" [ref=e345]:
                      - button "Begin assignment Ms. Amanda Quitzon_1788456391483 for N24989A83093, Judd" [disabled] [ref=e346]:
                        - generic [ref=e347]: N24989A83093, Judd
                    - cell "Ms. Amanda Quitzon_1788456391483 More info" [ref=e348]:
                      - generic [ref=e349]:
                        - button "Ms. Amanda Quitzon_1788456391483" [disabled] [ref=e350]:
                          - generic [ref=e351]: Ms. Amanda Quitzon_1788456391483
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
                  - row "Begin assignment Ms. Pearl Pouros_1788456147739 for N73394A93714, Alena Ms. Pearl Pouros_1788456147739 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e362] [cursor=pointer]:
                    - cell "Begin assignment Ms. Pearl Pouros_1788456147739 for N73394A93714, Alena" [ref=e363]:
                      - button "Begin assignment Ms. Pearl Pouros_1788456147739 for N73394A93714, Alena" [disabled] [ref=e364]:
                        - generic [ref=e365]: N73394A93714, Alena
                    - cell "Ms. Pearl Pouros_1788456147739 More info" [ref=e366]:
                      - generic [ref=e367]:
                        - button "Ms. Pearl Pouros_1788456147739" [disabled] [ref=e368]:
                          - generic [ref=e369]: Ms. Pearl Pouros_1788456147739
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
                  - row "Begin assignment Donnie DuBuque-Turcotte_1788455837836 for N81712A72561, Brielle Donnie DuBuque-Turcotte_1788455837836 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e380] [cursor=pointer]:
                    - cell "Begin assignment Donnie DuBuque-Turcotte_1788455837836 for N81712A72561, Brielle" [ref=e381]:
                      - button "Begin assignment Donnie DuBuque-Turcotte_1788455837836 for N81712A72561, Brielle" [disabled] [ref=e382]:
                        - generic [ref=e383]: N81712A72561, Brielle
                    - cell "Donnie DuBuque-Turcotte_1788455837836 More info" [ref=e384]:
                      - generic [ref=e385]:
                        - button "Donnie DuBuque-Turcotte_1788455837836" [disabled] [ref=e386]:
                          - generic [ref=e387]: Donnie DuBuque-Turcotte_1788455837836
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
                  - row "Begin assignment Tiffany Greenfelder_1788455512397 for N42087A25240, Paul Tiffany Greenfelder_1788455512397 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e398] [cursor=pointer]:
                    - cell "Begin assignment Tiffany Greenfelder_1788455512397 for N42087A25240, Paul" [ref=e399]:
                      - button "Begin assignment Tiffany Greenfelder_1788455512397 for N42087A25240, Paul" [disabled] [ref=e400]:
                        - generic [ref=e401]: N42087A25240, Paul
                    - cell "Tiffany Greenfelder_1788455512397 More info" [ref=e402]:
                      - generic [ref=e403]:
                        - button "Tiffany Greenfelder_1788455512397" [disabled] [ref=e404]:
                          - generic [ref=e405]: Tiffany Greenfelder_1788455512397
                        - button "More info" [ref=e406]
                    - cell "90 days" [ref=e407]:
                      - button "90 days" [disabled] [ref=e408]
                    - cell "● Submitted" [ref=e409]:
                      - button "● Submitted" [disabled] [ref=e410]:
                        - generic [ref=e411]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e412]:
                      - button "Edit Assignment" [disabled] [ref=e413]
                      - button "Add Tests" [disabled] [ref=e414]
                      - button "Assignment actions" [ref=e415]
                  - row "Begin assignment Betty Reinger_1788443505459 for N59561A23640, Meghan Betty Reinger_1788443505459 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e416] [cursor=pointer]:
                    - cell "Begin assignment Betty Reinger_1788443505459 for N59561A23640, Meghan" [ref=e417]:
                      - button "Begin assignment Betty Reinger_1788443505459 for N59561A23640, Meghan" [disabled] [ref=e418]:
                        - generic [ref=e419]: N59561A23640, Meghan
                    - cell "Betty Reinger_1788443505459 More info" [ref=e420]:
                      - generic [ref=e421]:
                        - button "Betty Reinger_1788443505459" [disabled] [ref=e422]:
                          - generic [ref=e423]: Betty Reinger_1788443505459
                        - button "More info" [ref=e424]
                    - cell "90 days" [ref=e425]:
                      - button "90 days" [disabled] [ref=e426]
                    - cell "● Submitted" [ref=e427]:
                      - button "● Submitted" [disabled] [ref=e428]:
                        - generic [ref=e429]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e430]:
                      - button "Edit Assignment" [disabled] [ref=e431]
                      - button "Add Tests" [disabled] [ref=e432]
                      - button "Assignment actions" [ref=e433]
                  - row "Begin assignment Duane Leannon_1788443157025 for N48825A75546, Chance Duane Leannon_1788443157025 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e434] [cursor=pointer]:
                    - cell "Begin assignment Duane Leannon_1788443157025 for N48825A75546, Chance" [ref=e435]:
                      - button "Begin assignment Duane Leannon_1788443157025 for N48825A75546, Chance" [disabled] [ref=e436]:
                        - generic [ref=e437]: N48825A75546, Chance
                    - cell "Duane Leannon_1788443157025 More info" [ref=e438]:
                      - generic [ref=e439]:
                        - button "Duane Leannon_1788443157025" [disabled] [ref=e440]:
                          - generic [ref=e441]: Duane Leannon_1788443157025
                        - button "More info" [ref=e442]
                    - cell "90 days" [ref=e443]:
                      - button "90 days" [disabled] [ref=e444]
                    - cell "● Submitted" [ref=e445]:
                      - button "● Submitted" [disabled] [ref=e446]:
                        - generic [ref=e447]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e448]:
                      - button "Edit Assignment" [disabled] [ref=e449]
                      - button "Add Tests" [disabled] [ref=e450]
                      - button "Assignment actions" [ref=e451]
                  - row "Begin assignment Lila Nader_1788442773790 for N37638A78593, Lincoln Lila Nader_1788442773790 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e452] [cursor=pointer]:
                    - cell "Begin assignment Lila Nader_1788442773790 for N37638A78593, Lincoln" [ref=e453]:
                      - button "Begin assignment Lila Nader_1788442773790 for N37638A78593, Lincoln" [disabled] [ref=e454]:
                        - generic [ref=e455]: N37638A78593, Lincoln
                    - cell "Lila Nader_1788442773790 More info" [ref=e456]:
                      - generic [ref=e457]:
                        - button "Lila Nader_1788442773790" [disabled] [ref=e458]:
                          - generic [ref=e459]: Lila Nader_1788442773790
                        - button "More info" [ref=e460]
                    - cell "90 days" [ref=e461]:
                      - button "90 days" [disabled] [ref=e462]
                    - cell "● Submitted" [ref=e463]:
                      - button "● Submitted" [disabled] [ref=e464]:
                        - generic [ref=e465]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e466]:
                      - button "Edit Assignment" [disabled] [ref=e467]
                      - button "Add Tests" [disabled] [ref=e468]
                      - button "Assignment actions" [ref=e469]
                  - row "Begin assignment Dewey Goldner_1788433367964 for N45039A90418, Dallas Dewey Goldner_1788433367964 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e470] [cursor=pointer]:
                    - cell "Begin assignment Dewey Goldner_1788433367964 for N45039A90418, Dallas" [ref=e471]:
                      - button "Begin assignment Dewey Goldner_1788433367964 for N45039A90418, Dallas" [disabled] [ref=e472]:
                        - generic [ref=e473]: N45039A90418, Dallas
                    - cell "Dewey Goldner_1788433367964 More info" [ref=e474]:
                      - generic [ref=e475]:
                        - button "Dewey Goldner_1788433367964" [disabled] [ref=e476]:
                          - generic [ref=e477]: Dewey Goldner_1788433367964
                        - button "More info" [ref=e478]
                    - cell "90 days" [ref=e479]:
                      - button "90 days" [disabled] [ref=e480]
                    - cell "● Submitted" [ref=e481]:
                      - button "● Submitted" [disabled] [ref=e482]:
                        - generic [ref=e483]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e484]:
                      - button "Edit Assignment" [disabled] [ref=e485]
                      - button "Add Tests" [disabled] [ref=e486]
                      - button "Assignment actions" [ref=e487]
                  - row "Begin assignment Sylvia Satterfield_1788433102775 for N3290A4806, Immanuel Sylvia Satterfield_1788433102775 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e488] [cursor=pointer]:
                    - cell "Begin assignment Sylvia Satterfield_1788433102775 for N3290A4806, Immanuel" [ref=e489]:
                      - button "Begin assignment Sylvia Satterfield_1788433102775 for N3290A4806, Immanuel" [disabled] [ref=e490]:
                        - generic [ref=e491]: N3290A4806, Immanuel
                    - cell "Sylvia Satterfield_1788433102775 More info" [ref=e492]:
                      - generic [ref=e493]:
                        - button "Sylvia Satterfield_1788433102775" [disabled] [ref=e494]:
                          - generic [ref=e495]: Sylvia Satterfield_1788433102775
                        - button "More info" [ref=e496]
                    - cell "90 days" [ref=e497]:
                      - button "90 days" [disabled] [ref=e498]
                    - cell "● Submitted" [ref=e499]:
                      - button "● Submitted" [disabled] [ref=e500]:
                        - generic [ref=e501]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e502]:
                      - button "Edit Assignment" [disabled] [ref=e503]
                      - button "Add Tests" [disabled] [ref=e504]
                      - button "Assignment actions" [ref=e505]
                  - row "Begin assignment Mr. Ervin Lebsack_1788432797189 for N52287A76091, Joan Mr. Ervin Lebsack_1788432797189 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e506] [cursor=pointer]:
                    - cell "Begin assignment Mr. Ervin Lebsack_1788432797189 for N52287A76091, Joan" [ref=e507]:
                      - button "Begin assignment Mr. Ervin Lebsack_1788432797189 for N52287A76091, Joan" [disabled] [ref=e508]:
                        - generic [ref=e509]: N52287A76091, Joan
                    - cell "Mr. Ervin Lebsack_1788432797189 More info" [ref=e510]:
                      - generic [ref=e511]:
                        - button "Mr. Ervin Lebsack_1788432797189" [disabled] [ref=e512]:
                          - generic [ref=e513]: Mr. Ervin Lebsack_1788432797189
                        - button "More info" [ref=e514]
                    - cell "90 days" [ref=e515]:
                      - button "90 days" [disabled] [ref=e516]
                    - cell "● Submitted" [ref=e517]:
                      - button "● Submitted" [disabled] [ref=e518]:
                        - generic [ref=e519]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e520]:
                      - button "Edit Assignment" [disabled] [ref=e521]
                      - button "Add Tests" [disabled] [ref=e522]
                      - button "Assignment actions" [ref=e523]
                  - row "Begin assignment Melanie Franecki III_1788432492084 for N21219A32190, Caesar Melanie Franecki III_1788432492084 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e524] [cursor=pointer]:
                    - cell "Begin assignment Melanie Franecki III_1788432492084 for N21219A32190, Caesar" [ref=e525]:
                      - button "Begin assignment Melanie Franecki III_1788432492084 for N21219A32190, Caesar" [disabled] [ref=e526]:
                        - generic [ref=e527]: N21219A32190, Caesar
                    - cell "Melanie Franecki III_1788432492084 More info" [ref=e528]:
                      - generic [ref=e529]:
                        - button "Melanie Franecki III_1788432492084" [disabled] [ref=e530]:
                          - generic [ref=e531]: Melanie Franecki III_1788432492084
                        - button "More info" [ref=e532]
                    - cell "90 days" [ref=e533]:
                      - button "90 days" [disabled] [ref=e534]
                    - cell "● Submitted" [ref=e535]:
                      - button "● Submitted" [disabled] [ref=e536]:
                        - generic [ref=e537]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e538]:
                      - button "Edit Assignment" [disabled] [ref=e539]
                      - button "Add Tests" [disabled] [ref=e540]
                      - button "Assignment actions" [ref=e541]
                  - row "Begin assignment Dr. Olivia Cole_1788432243128 for N94768A52119, Ernestina Dr. Olivia Cole_1788432243128 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e542] [cursor=pointer]:
                    - cell "Begin assignment Dr. Olivia Cole_1788432243128 for N94768A52119, Ernestina" [ref=e543]:
                      - button "Begin assignment Dr. Olivia Cole_1788432243128 for N94768A52119, Ernestina" [disabled] [ref=e544]:
                        - generic [ref=e545]: N94768A52119, Ernestina
                    - cell "Dr. Olivia Cole_1788432243128 More info" [ref=e546]:
                      - generic [ref=e547]:
                        - button "Dr. Olivia Cole_1788432243128" [disabled] [ref=e548]:
                          - generic [ref=e549]: Dr. Olivia Cole_1788432243128
                        - button "More info" [ref=e550]
                    - cell "90 days" [ref=e551]:
                      - button "90 days" [disabled] [ref=e552]
                    - cell "● Submitted" [ref=e553]:
                      - button "● Submitted" [disabled] [ref=e554]:
                        - generic [ref=e555]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e556]:
                      - button "Edit Assignment" [disabled] [ref=e557]
                      - button "Add Tests" [disabled] [ref=e558]
                      - button "Assignment actions" [ref=e559]
                  - row "Begin assignment Clifford Osinski_1788431987767 for N23142A84487, Pattie Clifford Osinski_1788431987767 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e560] [cursor=pointer]:
                    - cell "Begin assignment Clifford Osinski_1788431987767 for N23142A84487, Pattie" [ref=e561]:
                      - button "Begin assignment Clifford Osinski_1788431987767 for N23142A84487, Pattie" [disabled] [ref=e562]:
                        - generic [ref=e563]: N23142A84487, Pattie
                    - cell "Clifford Osinski_1788431987767 More info" [ref=e564]:
                      - generic [ref=e565]:
                        - button "Clifford Osinski_1788431987767" [disabled] [ref=e566]:
                          - generic [ref=e567]: Clifford Osinski_1788431987767
                        - button "More info" [ref=e568]
                    - cell "90 days" [ref=e569]:
                      - button "90 days" [disabled] [ref=e570]
                    - cell "● Submitted" [ref=e571]:
                      - button "● Submitted" [disabled] [ref=e572]:
                        - generic [ref=e573]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e574]:
                      - button "Edit Assignment" [disabled] [ref=e575]
                      - button "Add Tests" [disabled] [ref=e576]
                      - button "Assignment actions" [ref=e577]
                  - row "Begin assignment Rodney Borer_1788431705449 for N48452A78578, Dora Rodney Borer_1788431705449 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e578] [cursor=pointer]:
                    - cell "Begin assignment Rodney Borer_1788431705449 for N48452A78578, Dora" [ref=e579]:
                      - button "Begin assignment Rodney Borer_1788431705449 for N48452A78578, Dora" [disabled] [ref=e580]:
                        - generic [ref=e581]: N48452A78578, Dora
                    - cell "Rodney Borer_1788431705449 More info" [ref=e582]:
                      - generic [ref=e583]:
                        - button "Rodney Borer_1788431705449" [disabled] [ref=e584]:
                          - generic [ref=e585]: Rodney Borer_1788431705449
                        - button "More info" [ref=e586]
                    - cell "90 days" [ref=e587]:
                      - button "90 days" [disabled] [ref=e588]
                    - cell "● Submitted" [ref=e589]:
                      - button "● Submitted" [disabled] [ref=e590]:
                        - generic [ref=e591]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e592]:
                      - button "Edit Assignment" [disabled] [ref=e593]
                      - button "Add Tests" [disabled] [ref=e594]
                      - button "Assignment actions" [ref=e595]
                  - row "Begin assignment Garrett Boehm-Kohler_1788431386327 for N39768A23729, Braden Garrett Boehm-Kohler_1788431386327 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e596] [cursor=pointer]:
                    - cell "Begin assignment Garrett Boehm-Kohler_1788431386327 for N39768A23729, Braden" [ref=e597]:
                      - button "Begin assignment Garrett Boehm-Kohler_1788431386327 for N39768A23729, Braden" [disabled] [ref=e598]:
                        - generic [ref=e599]: N39768A23729, Braden
                    - cell "Garrett Boehm-Kohler_1788431386327 More info" [ref=e600]:
                      - generic [ref=e601]:
                        - button "Garrett Boehm-Kohler_1788431386327" [disabled] [ref=e602]:
                          - generic [ref=e603]: Garrett Boehm-Kohler_1788431386327
                        - button "More info" [ref=e604]
                    - cell "90 days" [ref=e605]:
                      - button "90 days" [disabled] [ref=e606]
                    - cell "● Submitted" [ref=e607]:
                      - button "● Submitted" [disabled] [ref=e608]:
                        - generic [ref=e609]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e610]:
                      - button "Edit Assignment" [disabled] [ref=e611]
                      - button "Add Tests" [disabled] [ref=e612]
                      - button "Assignment actions" [ref=e613]
                  - row "Begin assignment Dwight Heathcote_1788431117720 for N93265A94468, Rosalee Dwight Heathcote_1788431117720 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e614] [cursor=pointer]:
                    - cell "Begin assignment Dwight Heathcote_1788431117720 for N93265A94468, Rosalee" [ref=e615]:
                      - button "Begin assignment Dwight Heathcote_1788431117720 for N93265A94468, Rosalee" [disabled] [ref=e616]:
                        - generic [ref=e617]: N93265A94468, Rosalee
                    - cell "Dwight Heathcote_1788431117720 More info" [ref=e618]:
                      - generic [ref=e619]:
                        - button "Dwight Heathcote_1788431117720" [disabled] [ref=e620]:
                          - generic [ref=e621]: Dwight Heathcote_1788431117720
                        - button "More info" [ref=e622]
                    - cell "90 days" [ref=e623]:
                      - button "90 days" [disabled] [ref=e624]
                    - cell "● Submitted" [ref=e625]:
                      - button "● Submitted" [disabled] [ref=e626]:
                        - generic [ref=e627]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e628]:
                      - button "Edit Assignment" [disabled] [ref=e629]
                      - button "Add Tests" [disabled] [ref=e630]
                      - button "Assignment actions" [ref=e631]
                  - row "Begin assignment Homer Beier_1788430873841 for N66784A61565, Merritt Homer Beier_1788430873841 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e632] [cursor=pointer]:
                    - cell "Begin assignment Homer Beier_1788430873841 for N66784A61565, Merritt" [ref=e633]:
                      - button "Begin assignment Homer Beier_1788430873841 for N66784A61565, Merritt" [disabled] [ref=e634]:
                        - generic [ref=e635]: N66784A61565, Merritt
                    - cell "Homer Beier_1788430873841 More info" [ref=e636]:
                      - generic [ref=e637]:
                        - button "Homer Beier_1788430873841" [disabled] [ref=e638]:
                          - generic [ref=e639]: Homer Beier_1788430873841
                        - button "More info" [ref=e640]
                    - cell "90 days" [ref=e641]:
                      - button "90 days" [disabled] [ref=e642]
                    - cell "● Submitted" [ref=e643]:
                      - button "● Submitted" [disabled] [ref=e644]:
                        - generic [ref=e645]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e646]:
                      - button "Edit Assignment" [disabled] [ref=e647]
                      - button "Add Tests" [disabled] [ref=e648]
                      - button "Assignment actions" [ref=e649]
                  - row "Begin assignment Dr. Jackie Harber_1788430595373 for N99240A66477, Danial Dr. Jackie Harber_1788430595373 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e650] [cursor=pointer]:
                    - cell "Begin assignment Dr. Jackie Harber_1788430595373 for N99240A66477, Danial" [ref=e651]:
                      - button "Begin assignment Dr. Jackie Harber_1788430595373 for N99240A66477, Danial" [disabled] [ref=e652]:
                        - generic [ref=e653]: N99240A66477, Danial
                    - cell "Dr. Jackie Harber_1788430595373 More info" [ref=e654]:
                      - generic [ref=e655]:
                        - button "Dr. Jackie Harber_1788430595373" [disabled] [ref=e656]:
                          - generic [ref=e657]: Dr. Jackie Harber_1788430595373
                        - button "More info" [ref=e658]
                    - cell "90 days" [ref=e659]:
                      - button "90 days" [disabled] [ref=e660]
                    - cell "● Submitted" [ref=e661]:
                      - button "● Submitted" [disabled] [ref=e662]:
                        - generic [ref=e663]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e664]:
                      - button "Edit Assignment" [disabled] [ref=e665]
                      - button "Add Tests" [disabled] [ref=e666]
                      - button "Assignment actions" [ref=e667]
                  - row "Begin assignment Mr. Caleb Vandervort_1788430317703 for N82953A30425, Hattie Mr. Caleb Vandervort_1788430317703 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e668] [cursor=pointer]:
                    - cell "Begin assignment Mr. Caleb Vandervort_1788430317703 for N82953A30425, Hattie" [ref=e669]:
                      - button "Begin assignment Mr. Caleb Vandervort_1788430317703 for N82953A30425, Hattie" [disabled] [ref=e670]:
                        - generic [ref=e671]: N82953A30425, Hattie
                    - cell "Mr. Caleb Vandervort_1788430317703 More info" [ref=e672]:
                      - generic [ref=e673]:
                        - button "Mr. Caleb Vandervort_1788430317703" [disabled] [ref=e674]:
                          - generic [ref=e675]: Mr. Caleb Vandervort_1788430317703
                        - button "More info" [ref=e676]
                    - cell "90 days" [ref=e677]:
                      - button "90 days" [disabled] [ref=e678]
                    - cell "● Submitted" [ref=e679]:
                      - button "● Submitted" [disabled] [ref=e680]:
                        - generic [ref=e681]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e682]:
                      - button "Edit Assignment" [disabled] [ref=e683]
                      - button "Add Tests" [disabled] [ref=e684]
                      - button "Assignment actions" [ref=e685]
                  - row "Begin assignment Viola Brakus_1788430000010 for N70053A8926, Cecilia Viola Brakus_1788430000010 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e686] [cursor=pointer]:
                    - cell "Begin assignment Viola Brakus_1788430000010 for N70053A8926, Cecilia" [ref=e687]:
                      - button "Begin assignment Viola Brakus_1788430000010 for N70053A8926, Cecilia" [disabled] [ref=e688]:
                        - generic [ref=e689]: N70053A8926, Cecilia
                    - cell "Viola Brakus_1788430000010 More info" [ref=e690]:
                      - generic [ref=e691]:
                        - button "Viola Brakus_1788430000010" [disabled] [ref=e692]:
                          - generic [ref=e693]: Viola Brakus_1788430000010
                        - button "More info" [ref=e694]
                    - cell "90 days" [ref=e695]:
                      - button "90 days" [disabled] [ref=e696]
                    - cell "● Submitted" [ref=e697]:
                      - button "● Submitted" [disabled] [ref=e698]:
                        - generic [ref=e699]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e700]:
                      - button "Edit Assignment" [disabled] [ref=e701]
                      - button "Add Tests" [disabled] [ref=e702]
                      - button "Assignment actions" [ref=e703]
                  - row "Begin assignment Mona Marvin_1788429733144 for N19411A84352, Paul Mona Marvin_1788429733144 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e704] [cursor=pointer]:
                    - cell "Begin assignment Mona Marvin_1788429733144 for N19411A84352, Paul" [ref=e705]:
                      - button "Begin assignment Mona Marvin_1788429733144 for N19411A84352, Paul" [disabled] [ref=e706]:
                        - generic [ref=e707]: N19411A84352, Paul
                    - cell "Mona Marvin_1788429733144 More info" [ref=e708]:
                      - generic [ref=e709]:
                        - button "Mona Marvin_1788429733144" [disabled] [ref=e710]:
                          - generic [ref=e711]: Mona Marvin_1788429733144
                        - button "More info" [ref=e712]
                    - cell "90 days" [ref=e713]:
                      - button "90 days" [disabled] [ref=e714]
                    - cell "● Submitted" [ref=e715]:
                      - button "● Submitted" [disabled] [ref=e716]:
                        - generic [ref=e717]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e718]:
                      - button "Edit Assignment" [disabled] [ref=e719]
                      - button "Add Tests" [disabled] [ref=e720]
                      - button "Assignment actions" [ref=e721]
                  - row "Begin assignment Sylvia Hamill_1788429487236 for N48861A54084, Kale Sylvia Hamill_1788429487236 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e722] [cursor=pointer]:
                    - cell "Begin assignment Sylvia Hamill_1788429487236 for N48861A54084, Kale" [ref=e723]:
                      - button "Begin assignment Sylvia Hamill_1788429487236 for N48861A54084, Kale" [disabled] [ref=e724]:
                        - generic [ref=e725]: N48861A54084, Kale
                    - cell "Sylvia Hamill_1788429487236 More info" [ref=e726]:
                      - generic [ref=e727]:
                        - button "Sylvia Hamill_1788429487236" [disabled] [ref=e728]:
                          - generic [ref=e729]: Sylvia Hamill_1788429487236
                        - button "More info" [ref=e730]
                    - cell "90 days" [ref=e731]:
                      - button "90 days" [disabled] [ref=e732]
                    - cell "● Submitted" [ref=e733]:
                      - button "● Submitted" [disabled] [ref=e734]:
                        - generic [ref=e735]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e736]:
                      - button "Edit Assignment" [disabled] [ref=e737]
                      - button "Add Tests" [disabled] [ref=e738]
                      - button "Assignment actions" [ref=e739]
                  - row "Begin assignment Kimberly Moore_1788429200797 for N28502A28015, Sallie Kimberly Moore_1788429200797 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e740] [cursor=pointer]:
                    - cell "Begin assignment Kimberly Moore_1788429200797 for N28502A28015, Sallie" [ref=e741]:
                      - button "Begin assignment Kimberly Moore_1788429200797 for N28502A28015, Sallie" [disabled] [ref=e742]:
                        - generic [ref=e743]: N28502A28015, Sallie
                    - cell "Kimberly Moore_1788429200797 More info" [ref=e744]:
                      - generic [ref=e745]:
                        - button "Kimberly Moore_1788429200797" [disabled] [ref=e746]:
                          - generic [ref=e747]: Kimberly Moore_1788429200797
                        - button "More info" [ref=e748]
                    - cell "90 days" [ref=e749]:
                      - button "90 days" [disabled] [ref=e750]
                    - cell "● Submitted" [ref=e751]:
                      - button "● Submitted" [disabled] [ref=e752]:
                        - generic [ref=e753]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e754]:
                      - button "Edit Assignment" [disabled] [ref=e755]
                      - button "Add Tests" [disabled] [ref=e756]
                      - button "Assignment actions" [ref=e757]
                  - row "Begin assignment Jeffrey Fritsch_1788428931925 for N63297A49175, Orin Jeffrey Fritsch_1788428931925 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e758] [cursor=pointer]:
                    - cell "Begin assignment Jeffrey Fritsch_1788428931925 for N63297A49175, Orin" [ref=e759]:
                      - button "Begin assignment Jeffrey Fritsch_1788428931925 for N63297A49175, Orin" [disabled] [ref=e760]:
                        - generic [ref=e761]: N63297A49175, Orin
                    - cell "Jeffrey Fritsch_1788428931925 More info" [ref=e762]:
                      - generic [ref=e763]:
                        - button "Jeffrey Fritsch_1788428931925" [disabled] [ref=e764]:
                          - generic [ref=e765]: Jeffrey Fritsch_1788428931925
                        - button "More info" [ref=e766]
                    - cell "90 days" [ref=e767]:
                      - button "90 days" [disabled] [ref=e768]
                    - cell "● Submitted" [ref=e769]:
                      - button "● Submitted" [disabled] [ref=e770]:
                        - generic [ref=e771]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e772]:
                      - button "Edit Assignment" [disabled] [ref=e773]
                      - button "Add Tests" [disabled] [ref=e774]
                      - button "Assignment actions" [ref=e775]
                  - row "Begin assignment Lucas DuBuque_1788428612021 for N46965A19191, Devan Lucas DuBuque_1788428612021 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e776] [cursor=pointer]:
                    - cell "Begin assignment Lucas DuBuque_1788428612021 for N46965A19191, Devan" [ref=e777]:
                      - button "Begin assignment Lucas DuBuque_1788428612021 for N46965A19191, Devan" [disabled] [ref=e778]:
                        - generic [ref=e779]: N46965A19191, Devan
                    - cell "Lucas DuBuque_1788428612021 More info" [ref=e780]:
                      - generic [ref=e781]:
                        - button "Lucas DuBuque_1788428612021" [disabled] [ref=e782]:
                          - generic [ref=e783]: Lucas DuBuque_1788428612021
                        - button "More info" [ref=e784]
                    - cell "90 days" [ref=e785]:
                      - button "90 days" [disabled] [ref=e786]
                    - cell "● Submitted" [ref=e787]:
                      - button "● Submitted" [disabled] [ref=e788]:
                        - generic [ref=e789]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e790]:
                      - button "Edit Assignment" [disabled] [ref=e791]
                      - button "Add Tests" [disabled] [ref=e792]
                      - button "Assignment actions" [ref=e793]
                  - row "Begin assignment Leon Ratke_1788428343432 for N99876A42636, Shayna Leon Ratke_1788428343432 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e794] [cursor=pointer]:
                    - cell "Begin assignment Leon Ratke_1788428343432 for N99876A42636, Shayna" [ref=e795]:
                      - button "Begin assignment Leon Ratke_1788428343432 for N99876A42636, Shayna" [disabled] [ref=e796]:
                        - generic [ref=e797]: N99876A42636, Shayna
                    - cell "Leon Ratke_1788428343432 More info" [ref=e798]:
                      - generic [ref=e799]:
                        - button "Leon Ratke_1788428343432" [disabled] [ref=e800]:
                          - generic [ref=e801]: Leon Ratke_1788428343432
                        - button "More info" [ref=e802]
                    - cell "90 days" [ref=e803]:
                      - button "90 days" [disabled] [ref=e804]
                    - cell "● Submitted" [ref=e805]:
                      - button "● Submitted" [disabled] [ref=e806]:
                        - generic [ref=e807]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e808]:
                      - button "Edit Assignment" [disabled] [ref=e809]
                      - button "Add Tests" [disabled] [ref=e810]
                      - button "Assignment actions" [ref=e811]
                  - row "Begin assignment Jenny O'Keefe_1788428104026 for N40003A28895, Althea Jenny O'Keefe_1788428104026 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e812] [cursor=pointer]:
                    - cell "Begin assignment Jenny O'Keefe_1788428104026 for N40003A28895, Althea" [ref=e813]:
                      - button "Begin assignment Jenny O'Keefe_1788428104026 for N40003A28895, Althea" [disabled] [ref=e814]:
                        - generic [ref=e815]: N40003A28895, Althea
                    - cell "Jenny O'Keefe_1788428104026 More info" [ref=e816]:
                      - generic [ref=e817]:
                        - button "Jenny O'Keefe_1788428104026" [disabled] [ref=e818]:
                          - generic [ref=e819]: Jenny O'Keefe_1788428104026
                        - button "More info" [ref=e820]
                    - cell "90 days" [ref=e821]:
                      - button "90 days" [disabled] [ref=e822]
                    - cell "● Submitted" [ref=e823]:
                      - button "● Submitted" [disabled] [ref=e824]:
                        - generic [ref=e825]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e826]:
                      - button "Edit Assignment" [disabled] [ref=e827]
                      - button "Add Tests" [disabled] [ref=e828]
                      - button "Assignment actions" [ref=e829]
                  - row "Begin assignment Pedro Lang_1788427811340 for N75204A84392, Melyssa Pedro Lang_1788427811340 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e830] [cursor=pointer]:
                    - cell "Begin assignment Pedro Lang_1788427811340 for N75204A84392, Melyssa" [ref=e831]:
                      - button "Begin assignment Pedro Lang_1788427811340 for N75204A84392, Melyssa" [disabled] [ref=e832]:
                        - generic [ref=e833]: N75204A84392, Melyssa
                    - cell "Pedro Lang_1788427811340 More info" [ref=e834]:
                      - generic [ref=e835]:
                        - button "Pedro Lang_1788427811340" [disabled] [ref=e836]:
                          - generic [ref=e837]: Pedro Lang_1788427811340
                        - button "More info" [ref=e838]
                    - cell "90 days" [ref=e839]:
                      - button "90 days" [disabled] [ref=e840]
                    - cell "● Submitted" [ref=e841]:
                      - button "● Submitted" [disabled] [ref=e842]:
                        - generic [ref=e843]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e844]:
                      - button "Edit Assignment" [disabled] [ref=e845]
                      - button "Add Tests" [disabled] [ref=e846]
                      - button "Assignment actions" [ref=e847]
                  - row "Begin assignment Danny Wisozk_1788427549850 for N65572A72818, Zelma Danny Wisozk_1788427549850 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e848] [cursor=pointer]:
                    - cell "Begin assignment Danny Wisozk_1788427549850 for N65572A72818, Zelma" [ref=e849]:
                      - button "Begin assignment Danny Wisozk_1788427549850 for N65572A72818, Zelma" [disabled] [ref=e850]:
                        - generic [ref=e851]: N65572A72818, Zelma
                    - cell "Danny Wisozk_1788427549850 More info" [ref=e852]:
                      - generic [ref=e853]:
                        - button "Danny Wisozk_1788427549850" [disabled] [ref=e854]:
                          - generic [ref=e855]: Danny Wisozk_1788427549850
                        - button "More info" [ref=e856]
                    - cell "90 days" [ref=e857]:
                      - button "90 days" [disabled] [ref=e858]
                    - cell "● Submitted" [ref=e859]:
                      - button "● Submitted" [disabled] [ref=e860]:
                        - generic [ref=e861]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e862]:
                      - button "Edit Assignment" [disabled] [ref=e863]
                      - button "Add Tests" [disabled] [ref=e864]
                      - button "Assignment actions" [ref=e865]
                  - row "Begin assignment Olive Schiller_1772437762562 (+1 more) for N42678A12584, Nikki Olive Schiller_1772437762562 (+1 more) More info 0 days ● Expired Generate Report Assignment actions" [ref=e866] [cursor=pointer]:
                    - cell "Begin assignment Olive Schiller_1772437762562 (+1 more) for N42678A12584, Nikki" [ref=e867]:
                      - button "Begin assignment Olive Schiller_1772437762562 (+1 more) for N42678A12584, Nikki" [disabled] [ref=e868]:
                        - generic [ref=e869]: N42678A12584, Nikki
                    - cell "Olive Schiller_1772437762562 (+1 more) More info" [ref=e870]:
                      - generic [ref=e871]:
                        - button "Olive Schiller_1772437762562 (+1 more)" [disabled] [ref=e872]:
                          - generic [ref=e873]: Olive Schiller_1772437762562 (+1 more)
                        - button "More info" [ref=e874]
                    - cell "0 days" [ref=e875]:
                      - button "0 days" [disabled] [ref=e876]
                    - cell "● Expired" [ref=e877]:
                      - button "● Expired" [disabled] [ref=e878]:
                        - generic [ref=e879]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e880]:
                      - button "Generate Report" [ref=e881]
                      - button "Assignment actions" [ref=e882]
                  - row "Begin assignment Jan Cassin_1766727448686 (+1 more) for N89284A37977, Sonia Jan Cassin_1766727448686 (+1 more) More info 0 days ● Expired Generate Report Assignment actions" [ref=e883] [cursor=pointer]:
                    - cell "Begin assignment Jan Cassin_1766727448686 (+1 more) for N89284A37977, Sonia" [ref=e884]:
                      - button "Begin assignment Jan Cassin_1766727448686 (+1 more) for N89284A37977, Sonia" [disabled] [ref=e885]:
                        - generic [ref=e886]: N89284A37977, Sonia
                    - cell "Jan Cassin_1766727448686 (+1 more) More info" [ref=e887]:
                      - generic [ref=e888]:
                        - button "Jan Cassin_1766727448686 (+1 more)" [disabled] [ref=e889]:
                          - generic [ref=e890]: Jan Cassin_1766727448686 (+1 more)
                        - button "More info" [ref=e891]
                    - cell "0 days" [ref=e892]:
                      - button "0 days" [disabled] [ref=e893]
                    - cell "● Expired" [ref=e894]:
                      - button "● Expired" [disabled] [ref=e895]:
                        - generic [ref=e896]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e897]:
                      - button "Generate Report" [ref=e898]
                      - button "Assignment actions" [ref=e899]
                  - row "Begin assignment Faith Kutch_1765550875409 for N95448A90435, Marvin Faith Kutch_1765550875409 More info 0 days ● Expired Generate Report Assignment actions" [ref=e900] [cursor=pointer]:
                    - cell "Begin assignment Faith Kutch_1765550875409 for N95448A90435, Marvin" [ref=e901]:
                      - button "Begin assignment Faith Kutch_1765550875409 for N95448A90435, Marvin" [disabled] [ref=e902]:
                        - generic [ref=e903]: N95448A90435, Marvin
                    - cell "Faith Kutch_1765550875409 More info" [ref=e904]:
                      - generic [ref=e905]:
                        - button "Faith Kutch_1765550875409" [disabled] [ref=e906]:
                          - generic [ref=e907]: Faith Kutch_1765550875409
                        - button "More info" [ref=e908]
                    - cell "0 days" [ref=e909]:
                      - button "0 days" [disabled] [ref=e910]
                    - cell "● Expired" [ref=e911]:
                      - button "● Expired" [disabled] [ref=e912]:
                        - generic [ref=e913]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e914]:
                      - button "Generate Report" [ref=e915]
                      - button "Assignment actions" [ref=e916]
                  - row "Begin assignment Doris Pfannerstill_1765550713151 for N84120A35061, Summer Doris Pfannerstill_1765550713151 More info 0 days ● Expired Generate Report Assignment actions" [ref=e917] [cursor=pointer]:
                    - cell "Begin assignment Doris Pfannerstill_1765550713151 for N84120A35061, Summer" [ref=e918]:
                      - button "Begin assignment Doris Pfannerstill_1765550713151 for N84120A35061, Summer" [disabled] [ref=e919]:
                        - generic [ref=e920]: N84120A35061, Summer
                    - cell "Doris Pfannerstill_1765550713151 More info" [ref=e921]:
                      - generic [ref=e922]:
                        - button "Doris Pfannerstill_1765550713151" [disabled] [ref=e923]:
                          - generic [ref=e924]: Doris Pfannerstill_1765550713151
                        - button "More info" [ref=e925]
                    - cell "0 days" [ref=e926]:
                      - button "0 days" [disabled] [ref=e927]
                    - cell "● Expired" [ref=e928]:
                      - button "● Expired" [disabled] [ref=e929]:
                        - generic [ref=e930]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e931]:
                      - button "Generate Report" [ref=e932]
                      - button "Assignment actions" [ref=e933]
                  - row "Begin assignment Joel Collier-Morar_1765550550501 for N32733A67043, Elbert Joel Collier-Morar_1765550550501 More info 0 days ● Expired Generate Report Assignment actions" [ref=e934] [cursor=pointer]:
                    - cell "Begin assignment Joel Collier-Morar_1765550550501 for N32733A67043, Elbert" [ref=e935]:
                      - button "Begin assignment Joel Collier-Morar_1765550550501 for N32733A67043, Elbert" [disabled] [ref=e936]:
                        - generic [ref=e937]: N32733A67043, Elbert
                    - cell "Joel Collier-Morar_1765550550501 More info" [ref=e938]:
                      - generic [ref=e939]:
                        - button "Joel Collier-Morar_1765550550501" [disabled] [ref=e940]:
                          - generic [ref=e941]: Joel Collier-Morar_1765550550501
                        - button "More info" [ref=e942]
                    - cell "0 days" [ref=e943]:
                      - button "0 days" [disabled] [ref=e944]
                    - cell "● Expired" [ref=e945]:
                      - button "● Expired" [disabled] [ref=e946]:
                        - generic [ref=e947]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e948]:
                      - button "Generate Report" [ref=e949]
                      - button "Assignment actions" [ref=e950]
                  - row "Begin assignment Juanita Johns_1765550388023 for N81444A67117, Gerson Juanita Johns_1765550388023 More info 0 days ● Expired Generate Report Assignment actions" [ref=e951] [cursor=pointer]:
                    - cell "Begin assignment Juanita Johns_1765550388023 for N81444A67117, Gerson" [ref=e952]:
                      - button "Begin assignment Juanita Johns_1765550388023 for N81444A67117, Gerson" [disabled] [ref=e953]:
                        - generic [ref=e954]: N81444A67117, Gerson
                    - cell "Juanita Johns_1765550388023 More info" [ref=e955]:
                      - generic [ref=e956]:
                        - button "Juanita Johns_1765550388023" [disabled] [ref=e957]:
                          - generic [ref=e958]: Juanita Johns_1765550388023
                        - button "More info" [ref=e959]
                    - cell "0 days" [ref=e960]:
                      - button "0 days" [disabled] [ref=e961]
                    - cell "● Expired" [ref=e962]:
                      - button "● Expired" [disabled] [ref=e963]:
                        - generic [ref=e964]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e965]:
                      - button "Generate Report" [ref=e966]
                      - button "Assignment actions" [ref=e967]
                  - row "Begin assignment Janis Rempel_1765550226207 for N38642A26409, Emery Janis Rempel_1765550226207 More info 0 days ● Expired Generate Report Assignment actions" [ref=e968] [cursor=pointer]:
                    - cell "Begin assignment Janis Rempel_1765550226207 for N38642A26409, Emery" [ref=e969]:
                      - button "Begin assignment Janis Rempel_1765550226207 for N38642A26409, Emery" [disabled] [ref=e970]:
                        - generic [ref=e971]: N38642A26409, Emery
                    - cell "Janis Rempel_1765550226207 More info" [ref=e972]:
                      - generic [ref=e973]:
                        - button "Janis Rempel_1765550226207" [disabled] [ref=e974]:
                          - generic [ref=e975]: Janis Rempel_1765550226207
                        - button "More info" [ref=e976]
                    - cell "0 days" [ref=e977]:
                      - button "0 days" [disabled] [ref=e978]
                    - cell "● Expired" [ref=e979]:
                      - button "● Expired" [disabled] [ref=e980]:
                        - generic [ref=e981]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e982]:
                      - button "Generate Report" [ref=e983]
                      - button "Assignment actions" [ref=e984]
                  - row "Begin assignment Mr. Jean Boehm IV_1765550064052 for N20900A46782, Shane Mr. Jean Boehm IV_1765550064052 More info 0 days ● Expired Generate Report Assignment actions" [ref=e985] [cursor=pointer]:
                    - cell "Begin assignment Mr. Jean Boehm IV_1765550064052 for N20900A46782, Shane" [ref=e986]:
                      - button "Begin assignment Mr. Jean Boehm IV_1765550064052 for N20900A46782, Shane" [disabled] [ref=e987]:
                        - generic [ref=e988]: N20900A46782, Shane
                    - cell "Mr. Jean Boehm IV_1765550064052 More info" [ref=e989]:
                      - generic [ref=e990]:
                        - button "Mr. Jean Boehm IV_1765550064052" [disabled] [ref=e991]:
                          - generic [ref=e992]: Mr. Jean Boehm IV_1765550064052
                        - button "More info" [ref=e993]
                    - cell "0 days" [ref=e994]:
                      - button "0 days" [disabled] [ref=e995]
                    - cell "● Expired" [ref=e996]:
                      - button "● Expired" [disabled] [ref=e997]:
                        - generic [ref=e998]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e999]:
                      - button "Generate Report" [ref=e1000]
                      - button "Assignment actions" [ref=e1001]
                  - row "Begin assignment Yolanda Runolfsson-Hauck_1765549900463 for N77003A99440, Newton Yolanda Runolfsson-Hauck_1765549900463 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1002] [cursor=pointer]:
                    - cell "Begin assignment Yolanda Runolfsson-Hauck_1765549900463 for N77003A99440, Newton" [ref=e1003]:
                      - button "Begin assignment Yolanda Runolfsson-Hauck_1765549900463 for N77003A99440, Newton" [disabled] [ref=e1004]:
                        - generic [ref=e1005]: N77003A99440, Newton
                    - cell "Yolanda Runolfsson-Hauck_1765549900463 More info" [ref=e1006]:
                      - generic [ref=e1007]:
                        - button "Yolanda Runolfsson-Hauck_1765549900463" [disabled] [ref=e1008]:
                          - generic [ref=e1009]: Yolanda Runolfsson-Hauck_1765549900463
                        - button "More info" [ref=e1010]
                    - cell "0 days" [ref=e1011]:
                      - button "0 days" [disabled] [ref=e1012]
                    - cell "● Expired" [ref=e1013]:
                      - button "● Expired" [disabled] [ref=e1014]:
                        - generic [ref=e1015]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1016]:
                      - button "Generate Report" [ref=e1017]
                      - button "Assignment actions" [ref=e1018]
                  - row "Begin assignment Anthony Romaguera_1765549739544 for N5686A18741, Libbie Anthony Romaguera_1765549739544 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1019] [cursor=pointer]:
                    - cell "Begin assignment Anthony Romaguera_1765549739544 for N5686A18741, Libbie" [ref=e1020]:
                      - button "Begin assignment Anthony Romaguera_1765549739544 for N5686A18741, Libbie" [disabled] [ref=e1021]:
                        - generic [ref=e1022]: N5686A18741, Libbie
                    - cell "Anthony Romaguera_1765549739544 More info" [ref=e1023]:
                      - generic [ref=e1024]:
                        - button "Anthony Romaguera_1765549739544" [disabled] [ref=e1025]:
                          - generic [ref=e1026]: Anthony Romaguera_1765549739544
                        - button "More info" [ref=e1027]
                    - cell "0 days" [ref=e1028]:
                      - button "0 days" [disabled] [ref=e1029]
                    - cell "● Expired" [ref=e1030]:
                      - button "● Expired" [disabled] [ref=e1031]:
                        - generic [ref=e1032]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1033]:
                      - button "Generate Report" [ref=e1034]
                      - button "Assignment actions" [ref=e1035]
                  - row "Begin assignment Omar Kertzmann_1765549574647 for N8480A65805, Sienna Omar Kertzmann_1765549574647 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1036] [cursor=pointer]:
                    - cell "Begin assignment Omar Kertzmann_1765549574647 for N8480A65805, Sienna" [ref=e1037]:
                      - button "Begin assignment Omar Kertzmann_1765549574647 for N8480A65805, Sienna" [disabled] [ref=e1038]:
                        - generic [ref=e1039]: N8480A65805, Sienna
                    - cell "Omar Kertzmann_1765549574647 More info" [ref=e1040]:
                      - generic [ref=e1041]:
                        - button "Omar Kertzmann_1765549574647" [disabled] [ref=e1042]:
                          - generic [ref=e1043]: Omar Kertzmann_1765549574647
                        - button "More info" [ref=e1044]
                    - cell "0 days" [ref=e1045]:
                      - button "0 days" [disabled] [ref=e1046]
                    - cell "● Expired" [ref=e1047]:
                      - button "● Expired" [disabled] [ref=e1048]:
                        - generic [ref=e1049]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1050]:
                      - button "Generate Report" [ref=e1051]
                      - button "Assignment actions" [ref=e1052]
                  - row "Begin assignment Ervin Dickens_1765549405405 for N13718A55212, Brooklyn Ervin Dickens_1765549405405 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1053] [cursor=pointer]:
                    - cell "Begin assignment Ervin Dickens_1765549405405 for N13718A55212, Brooklyn" [ref=e1054]:
                      - button "Begin assignment Ervin Dickens_1765549405405 for N13718A55212, Brooklyn" [disabled] [ref=e1055]:
                        - generic [ref=e1056]: N13718A55212, Brooklyn
                    - cell "Ervin Dickens_1765549405405 More info" [ref=e1057]:
                      - generic [ref=e1058]:
                        - button "Ervin Dickens_1765549405405" [disabled] [ref=e1059]:
                          - generic [ref=e1060]: Ervin Dickens_1765549405405
                        - button "More info" [ref=e1061]
                    - cell "0 days" [ref=e1062]:
                      - button "0 days" [disabled] [ref=e1063]
                    - cell "● Expired" [ref=e1064]:
                      - button "● Expired" [disabled] [ref=e1065]:
                        - generic [ref=e1066]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1067]:
                      - button "Generate Report" [ref=e1068]
                      - button "Assignment actions" [ref=e1069]
                  - row "Begin assignment Jon Langosh_1765549241001 for N16408A79165, Judson Jon Langosh_1765549241001 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1070] [cursor=pointer]:
                    - cell "Begin assignment Jon Langosh_1765549241001 for N16408A79165, Judson" [ref=e1071]:
                      - button "Begin assignment Jon Langosh_1765549241001 for N16408A79165, Judson" [disabled] [ref=e1072]:
                        - generic [ref=e1073]: N16408A79165, Judson
                    - cell "Jon Langosh_1765549241001 More info" [ref=e1074]:
                      - generic [ref=e1075]:
                        - button "Jon Langosh_1765549241001" [disabled] [ref=e1076]:
                          - generic [ref=e1077]: Jon Langosh_1765549241001
                        - button "More info" [ref=e1078]
                    - cell "0 days" [ref=e1079]:
                      - button "0 days" [disabled] [ref=e1080]
                    - cell "● Expired" [ref=e1081]:
                      - button "● Expired" [disabled] [ref=e1082]:
                        - generic [ref=e1083]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1084]:
                      - button "Generate Report" [ref=e1085]
                      - button "Assignment actions" [ref=e1086]
                  - row "Begin assignment Mario Jaskolski_1765549077429 for N9601A67097, Harold Mario Jaskolski_1765549077429 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1087] [cursor=pointer]:
                    - cell "Begin assignment Mario Jaskolski_1765549077429 for N9601A67097, Harold" [ref=e1088]:
                      - button "Begin assignment Mario Jaskolski_1765549077429 for N9601A67097, Harold" [disabled] [ref=e1089]:
                        - generic [ref=e1090]: N9601A67097, Harold
                    - cell "Mario Jaskolski_1765549077429 More info" [ref=e1091]:
                      - generic [ref=e1092]:
                        - button "Mario Jaskolski_1765549077429" [disabled] [ref=e1093]:
                          - generic [ref=e1094]: Mario Jaskolski_1765549077429
                        - button "More info" [ref=e1095]
                    - cell "0 days" [ref=e1096]:
                      - button "0 days" [disabled] [ref=e1097]
                    - cell "● Expired" [ref=e1098]:
                      - button "● Expired" [disabled] [ref=e1099]:
                        - generic [ref=e1100]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1101]:
                      - button "Generate Report" [ref=e1102]
                      - button "Assignment actions" [ref=e1103]
                  - row "Begin assignment Jenny O'Hara_1765548916864 for N31688A29369, Jamir Jenny O'Hara_1765548916864 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1104] [cursor=pointer]:
                    - cell "Begin assignment Jenny O'Hara_1765548916864 for N31688A29369, Jamir" [ref=e1105]:
                      - button "Begin assignment Jenny O'Hara_1765548916864 for N31688A29369, Jamir" [disabled] [ref=e1106]:
                        - generic [ref=e1107]: N31688A29369, Jamir
                    - cell "Jenny O'Hara_1765548916864 More info" [ref=e1108]:
                      - generic [ref=e1109]:
                        - button "Jenny O'Hara_1765548916864" [disabled] [ref=e1110]:
                          - generic [ref=e1111]: Jenny O'Hara_1765548916864
                        - button "More info" [ref=e1112]
                    - cell "0 days" [ref=e1113]:
                      - button "0 days" [disabled] [ref=e1114]
                    - cell "● Expired" [ref=e1115]:
                      - button "● Expired" [disabled] [ref=e1116]:
                        - generic [ref=e1117]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1118]:
                      - button "Generate Report" [ref=e1119]
                      - button "Assignment actions" [ref=e1120]
                  - row "Begin assignment Stacy Lubowitz_1765548754725 for N8399A96883, Christelle Stacy Lubowitz_1765548754725 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1121] [cursor=pointer]:
                    - cell "Begin assignment Stacy Lubowitz_1765548754725 for N8399A96883, Christelle" [ref=e1122]:
                      - button "Begin assignment Stacy Lubowitz_1765548754725 for N8399A96883, Christelle" [disabled] [ref=e1123]:
                        - generic [ref=e1124]: N8399A96883, Christelle
                    - cell "Stacy Lubowitz_1765548754725 More info" [ref=e1125]:
                      - generic [ref=e1126]:
                        - button "Stacy Lubowitz_1765548754725" [disabled] [ref=e1127]:
                          - generic [ref=e1128]: Stacy Lubowitz_1765548754725
                        - button "More info" [ref=e1129]
                    - cell "0 days" [ref=e1130]:
                      - button "0 days" [disabled] [ref=e1131]
                    - cell "● Expired" [ref=e1132]:
                      - button "● Expired" [disabled] [ref=e1133]:
                        - generic [ref=e1134]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1135]:
                      - button "Generate Report" [ref=e1136]
                      - button "Assignment actions" [ref=e1137]
                  - row "Begin assignment Muriel Emard-Olson_1765548592509 for N33908A57437, Gordon Muriel Emard-Olson_1765548592509 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1138] [cursor=pointer]:
                    - cell "Begin assignment Muriel Emard-Olson_1765548592509 for N33908A57437, Gordon" [ref=e1139]:
                      - button "Begin assignment Muriel Emard-Olson_1765548592509 for N33908A57437, Gordon" [disabled] [ref=e1140]:
                        - generic [ref=e1141]: N33908A57437, Gordon
                    - cell "Muriel Emard-Olson_1765548592509 More info" [ref=e1142]:
                      - generic [ref=e1143]:
                        - button "Muriel Emard-Olson_1765548592509" [disabled] [ref=e1144]:
                          - generic [ref=e1145]: Muriel Emard-Olson_1765548592509
                        - button "More info" [ref=e1146]
                    - cell "0 days" [ref=e1147]:
                      - button "0 days" [disabled] [ref=e1148]
                    - cell "● Expired" [ref=e1149]:
                      - button "● Expired" [disabled] [ref=e1150]:
                        - generic [ref=e1151]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1152]:
                      - button "Generate Report" [ref=e1153]
                      - button "Assignment actions" [ref=e1154]
                  - row "Begin assignment Lucia Tillman_1765548430159 for N99167A58298, Ed Lucia Tillman_1765548430159 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1155] [cursor=pointer]:
                    - cell "Begin assignment Lucia Tillman_1765548430159 for N99167A58298, Ed" [ref=e1156]:
                      - button "Begin assignment Lucia Tillman_1765548430159 for N99167A58298, Ed" [disabled] [ref=e1157]:
                        - generic [ref=e1158]: N99167A58298, Ed
                    - cell "Lucia Tillman_1765548430159 More info" [ref=e1159]:
                      - generic [ref=e1160]:
                        - button "Lucia Tillman_1765548430159" [disabled] [ref=e1161]:
                          - generic [ref=e1162]: Lucia Tillman_1765548430159
                        - button "More info" [ref=e1163]
                    - cell "0 days" [ref=e1164]:
                      - button "0 days" [disabled] [ref=e1165]
                    - cell "● Expired" [ref=e1166]:
                      - button "● Expired" [disabled] [ref=e1167]:
                        - generic [ref=e1168]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1169]:
                      - button "Generate Report" [ref=e1170]
                      - button "Assignment actions" [ref=e1171]
                  - row "Begin assignment Carole Kuvalis_1765548267882 for N92005A48366, Linda Carole Kuvalis_1765548267882 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1172] [cursor=pointer]:
                    - cell "Begin assignment Carole Kuvalis_1765548267882 for N92005A48366, Linda" [ref=e1173]:
                      - button "Begin assignment Carole Kuvalis_1765548267882 for N92005A48366, Linda" [disabled] [ref=e1174]:
                        - generic [ref=e1175]: N92005A48366, Linda
                    - cell "Carole Kuvalis_1765548267882 More info" [ref=e1176]:
                      - generic [ref=e1177]:
                        - button "Carole Kuvalis_1765548267882" [disabled] [ref=e1178]:
                          - generic [ref=e1179]: Carole Kuvalis_1765548267882
                        - button "More info" [ref=e1180]
                    - cell "0 days" [ref=e1181]:
                      - button "0 days" [disabled] [ref=e1182]
                    - cell "● Expired" [ref=e1183]:
                      - button "● Expired" [disabled] [ref=e1184]:
                        - generic [ref=e1185]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1186]:
                      - button "Generate Report" [ref=e1187]
                      - button "Assignment actions" [ref=e1188]
                  - row "Begin assignment Mrs. Erica Bode_1765548105041 for N14778A42643, Francisca Mrs. Erica Bode_1765548105041 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1189] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Erica Bode_1765548105041 for N14778A42643, Francisca" [ref=e1190]:
                      - button "Begin assignment Mrs. Erica Bode_1765548105041 for N14778A42643, Francisca" [disabled] [ref=e1191]:
                        - generic [ref=e1192]: N14778A42643, Francisca
                    - cell "Mrs. Erica Bode_1765548105041 More info" [ref=e1193]:
                      - generic [ref=e1194]:
                        - button "Mrs. Erica Bode_1765548105041" [disabled] [ref=e1195]:
                          - generic [ref=e1196]: Mrs. Erica Bode_1765548105041
                        - button "More info" [ref=e1197]
                    - cell "0 days" [ref=e1198]:
                      - button "0 days" [disabled] [ref=e1199]
                    - cell "● Expired" [ref=e1200]:
                      - button "● Expired" [disabled] [ref=e1201]:
                        - generic [ref=e1202]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1203]:
                      - button "Generate Report" [ref=e1204]
                      - button "Assignment actions" [ref=e1205]
                  - row "Begin assignment Dr. Jean Parker_1765547941771 for N14247A25603, Lisette Dr. Jean Parker_1765547941771 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1206] [cursor=pointer]:
                    - cell "Begin assignment Dr. Jean Parker_1765547941771 for N14247A25603, Lisette" [ref=e1207]:
                      - button "Begin assignment Dr. Jean Parker_1765547941771 for N14247A25603, Lisette" [disabled] [ref=e1208]:
                        - generic [ref=e1209]: N14247A25603, Lisette
                    - cell "Dr. Jean Parker_1765547941771 More info" [ref=e1210]:
                      - generic [ref=e1211]:
                        - button "Dr. Jean Parker_1765547941771" [disabled] [ref=e1212]:
                          - generic [ref=e1213]: Dr. Jean Parker_1765547941771
                        - button "More info" [ref=e1214]
                    - cell "0 days" [ref=e1215]:
                      - button "0 days" [disabled] [ref=e1216]
                    - cell "● Expired" [ref=e1217]:
                      - button "● Expired" [disabled] [ref=e1218]:
                        - generic [ref=e1219]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1220]:
                      - button "Generate Report" [ref=e1221]
                      - button "Assignment actions" [ref=e1222]
                  - row "Begin assignment Billy Jast II_1765547780674 for N37349A71903, Dion Billy Jast II_1765547780674 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1223] [cursor=pointer]:
                    - cell "Begin assignment Billy Jast II_1765547780674 for N37349A71903, Dion" [ref=e1224]:
                      - button "Begin assignment Billy Jast II_1765547780674 for N37349A71903, Dion" [disabled] [ref=e1225]:
                        - generic [ref=e1226]: N37349A71903, Dion
                    - cell "Billy Jast II_1765547780674 More info" [ref=e1227]:
                      - generic [ref=e1228]:
                        - button "Billy Jast II_1765547780674" [disabled] [ref=e1229]:
                          - generic [ref=e1230]: Billy Jast II_1765547780674
                        - button "More info" [ref=e1231]
                    - cell "0 days" [ref=e1232]:
                      - button "0 days" [disabled] [ref=e1233]
                    - cell "● Expired" [ref=e1234]:
                      - button "● Expired" [disabled] [ref=e1235]:
                        - generic [ref=e1236]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1237]:
                      - button "Generate Report" [ref=e1238]
                      - button "Assignment actions" [ref=e1239]
                  - row "Begin assignment Chelsea Keebler_1765547617324 for N45332A58801, Quinten Chelsea Keebler_1765547617324 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1240] [cursor=pointer]:
                    - cell "Begin assignment Chelsea Keebler_1765547617324 for N45332A58801, Quinten" [ref=e1241]:
                      - button "Begin assignment Chelsea Keebler_1765547617324 for N45332A58801, Quinten" [disabled] [ref=e1242]:
                        - generic [ref=e1243]: N45332A58801, Quinten
                    - cell "Chelsea Keebler_1765547617324 More info" [ref=e1244]:
                      - generic [ref=e1245]:
                        - button "Chelsea Keebler_1765547617324" [disabled] [ref=e1246]:
                          - generic [ref=e1247]: Chelsea Keebler_1765547617324
                        - button "More info" [ref=e1248]
                    - cell "0 days" [ref=e1249]:
                      - button "0 days" [disabled] [ref=e1250]
                    - cell "● Expired" [ref=e1251]:
                      - button "● Expired" [disabled] [ref=e1252]:
                        - generic [ref=e1253]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1254]:
                      - button "Generate Report" [ref=e1255]
                      - button "Assignment actions" [ref=e1256]
                  - row "Begin assignment Mr. Aaron McLaughlin_1765547456885 for N94530A76181, General Mr. Aaron McLaughlin_1765547456885 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1257] [cursor=pointer]:
                    - cell "Begin assignment Mr. Aaron McLaughlin_1765547456885 for N94530A76181, General" [ref=e1258]:
                      - button "Begin assignment Mr. Aaron McLaughlin_1765547456885 for N94530A76181, General" [disabled] [ref=e1259]:
                        - generic [ref=e1260]: N94530A76181, General
                    - cell "Mr. Aaron McLaughlin_1765547456885 More info" [ref=e1261]:
                      - generic [ref=e1262]:
                        - button "Mr. Aaron McLaughlin_1765547456885" [disabled] [ref=e1263]:
                          - generic [ref=e1264]: Mr. Aaron McLaughlin_1765547456885
                        - button "More info" [ref=e1265]
                    - cell "0 days" [ref=e1266]:
                      - button "0 days" [disabled] [ref=e1267]
                    - cell "● Expired" [ref=e1268]:
                      - button "● Expired" [disabled] [ref=e1269]:
                        - generic [ref=e1270]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1271]:
                      - button "Generate Report" [ref=e1272]
                      - button "Assignment actions" [ref=e1273]
                  - row "Begin assignment Darlene Rutherford_1765547291587 for N92350A6888, June Darlene Rutherford_1765547291587 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1274] [cursor=pointer]:
                    - cell "Begin assignment Darlene Rutherford_1765547291587 for N92350A6888, June" [ref=e1275]:
                      - button "Begin assignment Darlene Rutherford_1765547291587 for N92350A6888, June" [disabled] [ref=e1276]:
                        - generic [ref=e1277]: N92350A6888, June
                    - cell "Darlene Rutherford_1765547291587 More info" [ref=e1278]:
                      - generic [ref=e1279]:
                        - button "Darlene Rutherford_1765547291587" [disabled] [ref=e1280]:
                          - generic [ref=e1281]: Darlene Rutherford_1765547291587
                        - button "More info" [ref=e1282]
                    - cell "0 days" [ref=e1283]:
                      - button "0 days" [disabled] [ref=e1284]
                    - cell "● Expired" [ref=e1285]:
                      - button "● Expired" [disabled] [ref=e1286]:
                        - generic [ref=e1287]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1288]:
                      - button "Generate Report" [ref=e1289]
                      - button "Assignment actions" [ref=e1290]
                  - row "Begin assignment Luz Dicki PhD_1765547132637 for N83067A43768, Sophia Luz Dicki PhD_1765547132637 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1291] [cursor=pointer]:
                    - cell "Begin assignment Luz Dicki PhD_1765547132637 for N83067A43768, Sophia" [ref=e1292]:
                      - button "Begin assignment Luz Dicki PhD_1765547132637 for N83067A43768, Sophia" [disabled] [ref=e1293]:
                        - generic [ref=e1294]: N83067A43768, Sophia
                    - cell "Luz Dicki PhD_1765547132637 More info" [ref=e1295]:
                      - generic [ref=e1296]:
                        - button "Luz Dicki PhD_1765547132637" [disabled] [ref=e1297]:
                          - generic [ref=e1298]: Luz Dicki PhD_1765547132637
                        - button "More info" [ref=e1299]
                    - cell "0 days" [ref=e1300]:
                      - button "0 days" [disabled] [ref=e1301]
                    - cell "● Expired" [ref=e1302]:
                      - button "● Expired" [disabled] [ref=e1303]:
                        - generic [ref=e1304]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1305]:
                      - button "Generate Report" [ref=e1306]
                      - button "Assignment actions" [ref=e1307]
                  - row "Begin assignment Alfred Gutmann_1765528965772 for N65015A56175, Petra Alfred Gutmann_1765528965772 More info 0 days ● Expired Generate Report Assignment actions" [ref=e1308] [cursor=pointer]:
                    - cell "Begin assignment Alfred Gutmann_1765528965772 for N65015A56175, Petra" [ref=e1309]:
                      - button "Begin assignment Alfred Gutmann_1765528965772 for N65015A56175, Petra" [disabled] [ref=e1310]:
                        - generic [ref=e1311]: N65015A56175, Petra
                    - cell "Alfred Gutmann_1765528965772 More info" [ref=e1312]:
                      - generic [ref=e1313]:
                        - button "Alfred Gutmann_1765528965772" [disabled] [ref=e1314]:
                          - generic [ref=e1315]: Alfred Gutmann_1765528965772
                        - button "More info" [ref=e1316]
                    - cell "0 days" [ref=e1317]:
                      - button "0 days" [disabled] [ref=e1318]
                    - cell "● Expired" [ref=e1319]:
                      - button "● Expired" [disabled] [ref=e1320]:
                        - generic [ref=e1321]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1322]:
                      - button "Generate Report" [ref=e1323]
                      - button "Assignment actions" [ref=e1324]
            - generic [ref=e1325]:
              - generic [ref=e1326]:
                - generic [ref=e1328]:
                  - img [ref=e1329]
                  - heading "Notifications Center" [level=2] [ref=e1333]
                - generic [ref=e1334]:
                  - generic [ref=e1335]:
                    - generic [ref=e1336]: 08/27/2026
                    - text: Assessment Administration Notice A small number of users with limited available disk space may experience issues loading examinees, completing assessments, or capturing audio data. If you encounter these issues, switching to Firefox may allow you to continue administering assessments. Audio capture functionality may be unavailable when device storage is low. No assessment data is lost as a result of this issue, and the vast majority of users are not affected.
                  - generic [ref=e1337]:
                    - generic [ref=e1338]: 08/21/2026
                    - generic [ref=e1339]:
                      - paragraph [ref=e1340]:
                        - strong [ref=e1341]: Experience Platform Improvements
                      - paragraph [ref=e1342]: Smoother workflows, better reporting, and updated resources for a more reliable platform experience.
                      - paragraph [ref=e1343]:
                        - link "Learn More" [ref=e1345] [cursor=pointer]:
                          - /url: https://riversideinsights.com/hubfs/Release%20Notes%208_20_2026.pdf
              - generic [ref=e1346]:
                - generic [ref=e1348]:
                  - img [ref=e1349]
                  - heading "Resources" [level=3] [ref=e1353]
                - list [ref=e1354]:
                  - listitem [ref=e1355]:
                    - button "Riverside Learn" [ref=e1356] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e1357]
                      - img [ref=e1359]
                  - listitem [ref=e1361]:
                    - button "Onboarding Tutorial Videos" [ref=e1362] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e1363]
                      - img [ref=e1365]
                  - listitem [ref=e1367]:
                    - button "Quick Reference Guides" [ref=e1368] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e1369]
                      - img [ref=e1371]
                - button "View All" [ref=e1374] [cursor=pointer]
      - contentinfo [ref=e1375]:
        - generic [ref=e1376]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e1377] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e1378]
        - generic [ref=e1379]:
          - link "Riverside Insights Facebook" [ref=e1380] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e1381]
          - link "Riverside Insights Twitter" [ref=e1382] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e1383]
          - link "Riverside Insights LinkedIn" [ref=e1384] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e1385]
          - link "Riverside Insights Instagram" [ref=e1386] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e1387]
        - generic [ref=e1388]:
          - button "Leave Feedback" [ref=e1389] [cursor=pointer]
          - generic [ref=e1390]: "|"
          - link "Terms of Use" [ref=e1391] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e1392]: "|"
          - link "Privacy Policy" [ref=e1393] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e1394]: Footer region end
  - region "Chat Widget" [ref=e1395]:
    - iframe [ref=e1396]:
      - button "Open live chat" [ref=f3e5]:
        - img [ref=f3e8]
        - img [ref=f3e15]
    - generic "Drag" [ref=e1397]:
      - img [ref=e1398]
```

# Test source

```ts
  6494 |         .soft(await this.endTestPopUpElements.nth(9).textContent())
  6495 |         .toContain(FlagsText);
  6496 |       expect
  6497 |         .soft(await this.endTestPopUpElements.nth(14).textContent())
  6498 |         .toContain(OutcomeMsg);
  6499 |       await this.endTestPopUpElements.nth(18).click();
  6500 |     } else if (
  6501 |       testStemForm === "SEMRET.W5PA" || testStemForm === "PHNRET.W5PA" ||testStemForm === "SEMRET.W5PX"   ||testStemForm === "PHNRET.W5PX")
  6502 |      {
  6503 |       expect
  6504 |         .soft(await this.endTestPopUpElements.nth(9).textContent())
  6505 |         .toContain(FlagsText);
  6506 |       expect
  6507 |         .soft(await this.endTestPopUpElements.nth(14).textContent())
  6508 |         .toContain(OutcomeMsg);
  6509 |       await this.endTestPopUpElements.nth(16).click();
  6510 |     } else if 
  6511 |       (testStemForm === "MAGCMP.W5PA" || testStemForm === "MAGCMP.W5PX") {
  6512 |       expect
  6513 |         .soft(await this.endTestPopUpElements.nth(9).textContent())
  6514 |         .toContain(FlagsText);
  6515 |       expect
  6516 |         .soft(await this.endTestPopUpElements.nth(14).textContent())
  6517 |         .toContain(OutcomeMsg);
  6518 |       await this.endTestPopUpElements.nth(17).click();
  6519 |     }else if 
  6520 |       (testStemForm === "VWKMEM.W5PA") {
  6521 |       expect
  6522 |         .soft(await this.endTestPopUpElements.nth(8).textContent())
  6523 |         .toContain(FlagsText);
  6524 |       expect
  6525 |         .soft(await this.endTestPopUpElements.nth(13).textContent())
  6526 |         .toContain(OutcomeMsg);
  6527 |       await this.endTestPopUpElements.nth(17).click();
  6528 |     }else if (testNames1.includes(testStemForm)) {
  6529 |       expect
  6530 |         .soft(await this.endTestPopUpElements.nth(11).textContent())
  6531 |         .toContain(FlagsText);
  6532 |       expect
  6533 |         .soft(await this.endTestPopUpElements.nth(16).textContent())
  6534 |         .toContain(OutcomeMsg);
  6535 |       await this.endTestPopUpElements.nth(19).click();
  6536 |     } else if(testStemForm === "BLKROT.W5PA" &&
  6537 |         typeOfTest.match(
  6538 |             /Answer only one sample item for SSP(1|2|3)/i
  6539 |         )) {
  6540 |         expect
  6541 |             .soft(await this.endTestPopUpElements.nth(9).textContent())
  6542 |             .toContain(FlagsText);
  6543 |         expect
  6544 |             .soft(await this.endTestPopUpElements.nth(14).textContent())
  6545 |             .toContain(OutcomeMsg);
  6546 |         await this.endTestPopUpElements.nth(17).click();
  6547 |     } else {
  6548 |       expect
  6549 |         .soft(await this.endTestPopUpElements.nth(8).textContent())
  6550 |         .toContain(FlagsText);
  6551 |       expect
  6552 |         .soft(await this.endTestPopUpElements.nth(13).textContent())
  6553 |         .toContain(OutcomeMsg);
  6554 |       if (testNames1.includes(testStemForm)) {
  6555 |         await this.endTestPopUpElements.nth(17).click();
  6556 |       } else if (testNames2.includes(testStemForm)) {
  6557 |         await this.endTestPopUpElements.nth(18).click();
  6558 |       } else if (
  6559 |         (testStemForm === "STYCMP.W5PA" &&
  6560 |           typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
  6561 |         (testStemForm === "WRDATK.W5PA" &&
  6562 |           typeOfTest.match(/Block A End Test Flow with 2 correct Scenario for SSP1|Block A End Test Flow with Samples and Items administered wrong scenario for SSP1|Sample A correct !C scenario SSP1/i)) ||
  6563 |         (testStemForm === "PSGCMP.W5PA" &&
  6564 |           typeOfTest.match(/5 Lowest incorrect items (SSP2|SSP3|SSP4|SSP5|SSP6)|Reverse Logic (SSP2|SSP3|SSP4|SSP5|SSP6)|5 correct 5 incorrect-Block B All incorrect-Block A SSP2|Score Error Scenario for (SSP2|SSP3|SSP4|SSP5|SSP6)/i)) ||
  6565 |         (testStemForm === "LWIDNT.W5PA" &&
  6566 |           typeOfTest.match(/lowest incorrect items SSP1|1 correct 1 incorrect SSP1/i)) ||
  6567 |         (testStemForm === "MPRBID.W5PA" &&
  6568 |           typeOfTest.match(
  6569 |             /Sample Items AB discontinue Scenario for SSP (1|2|3)/i
  6570 |           ))
  6571 |       ) {
  6572 |         await this.endTestPopUpElements.nth(16).click();
  6573 |       } else if 
  6574 |         (testStemForm === "MAGCMP.W5PA" || testStemForm === "MAGCMP.W5PX" || testStemForm === "VAL.W5PA" || (testStemForm === "CALC.W5PA" && typeOfTest.match(/CALC Sample End Test scenario for SSP1/i))) {
  6575 |         await this.endTestPopUpElements.nth(17).click();
  6576 |       } else {
  6577 |         await this.endTestPopUpElements.nth(15).click();
  6578 |       }
  6579 |     }
  6580 |     const rsbelements = await this.page.locator(
  6581 |       "//button[@class='rsi-checkbox']"
  6582 |     );
  6583 |     const count = await rsbelements.count();
  6584 |     // Array to store text contents
  6585 |     const responseStyleBehaviours: string[] = [];
  6586 |     // Iterate over each element and fetch text content
  6587 |     for (let i = 0; i < count; i++) {
  6588 |       const element = rsbelements.nth(i);
  6589 |       const textContent = await element.textContent();
  6590 |       responseStyleBehaviours.push(textContent?.trim() || "");
  6591 |     }
  6592 |     console.log(responseStyleBehaviours);
  6593 |     rsb.forEach((rsbehaviourText, index) => {
> 6594 |       expect(responseStyleBehaviours[index]).toContain(rsbehaviourText);
       |                                              ^ Error: expect(received).toContain(expected) // indexOf
  6595 |     });
  6596 |     if (testNames.includes(testStemForm)) {
  6597 |       await this.endTestPopUpElements.nth(17).click();
  6598 |     } else if (testNames2.includes(testStemForm)) {
  6599 |       await this.endTestPopUpElements.nth(18).click();
  6600 |     } else if (testNames1.includes(testStemForm)) {
  6601 |       await this.endTestPopUpElements.nth(19).click();
  6602 |     } else if (
  6603 |       (testStemForm === "STYCMP.W5PA" &&
  6604 |         typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
  6605 |       (testStemForm === "WRDATK.W5PA" &&
  6606 |         typeOfTest.match(/Block A End Test Flow with 2 correct Scenario for SSP1|Block A End Test Flow with Samples and Items administered wrong scenario for SSP1|Sample A correct !C scenario SSP1/i)) ||
  6607 |       (testStemForm === "PSGCMP.W5PA" &&
  6608 |         typeOfTest.match(/5 Lowest incorrect items (SSP2|SSP3|SSP4|SSP5|SSP6)|Reverse Logic (SSP2|SSP3|SSP4|SSP5|SSP6)|5 correct 5 incorrect-Block B All incorrect-Block A SSP2|Score Error Scenario for (SSP2|SSP3|SSP4|SPP5|SSP6)/i)) ||
  6609 |       (testStemForm === "LWIDNT.W5PA" &&
  6610 |         typeOfTest.match(/Lowest incorrect items SSP1|1 correct 1 incorrect SSP1/i)) ||
  6611 |       (testStemForm === "SEMRET.W5PA" || testStemForm === "SEMRET.W5PX" || testStemForm === "PHNRET.W5PA"  || testStemForm === "PHNRET.W5PX" ) ||
  6612 |       (testStemForm === "MPRBID.W5PA" &&
  6613 |         typeOfTest.match(
  6614 |           /Sample Items AB discontinue Scenario for SSP (1|2|3)/i
  6615 |         ))
  6616 |     ) {
  6617 |       await this.endTestPopUpElements.nth(16).click();
  6618 |     } else if 
  6619 |       (testStemForm === "MAGCMP.W5PA" || testStemForm === "MAGCMP.W5PX"|| testStemForm === "VAL.W5PA"|| (testStemForm === "CALC.W5PA" && typeOfTest.match(/CALC Sample End Test scenario for SSP1/i))) {
  6620 |       await this.endTestPopUpElements.nth(17).click();
  6621 |     } else {
  6622 |       await this.endTestPopUpElements.nth(15).click();
  6623 |     }
  6624 |     await this.page.waitForTimeout(2000);
  6625 |   }
  6626 | 
  6627 |   async completeTestSessionObservationsAndClickNext(typeOfTest?: string, testStemForm?: string) {
  6628 |     await this.page.bringToFront();
  6629 |     if (await this.levelOfProficiency.isVisible()) {
  6630 |     await this.page.waitForTimeout(1000);
  6631 |     await this.selectTheCheckbox(0, "Examinee MAsk");
  6632 |     await this.page.waitForTimeout(1000);
  6633 |     await this.selectTheCheckbox(2, "examiner MAsk");
  6634 |     await this.selectTheDropdownOption(
  6635 |       0,
  6636 |       "Advanced",
  6637 |       "Level of Conversational Proficiency"
  6638 |     );
  6639 |     await this.selectTheDropdownOption(
  6640 |       1,
  6641 |       "Was uncooperative at times",
  6642 |       "Level of Cooperation"
  6643 |     );
  6644 |     await this.selectTheDropdownOption(
  6645 |       2,
  6646 |       "Seemed lethargic",
  6647 |       "Level of Activity"
  6648 |     );
  6649 |     await this.selectTheDropdownOption(
  6650 |       3,
  6651 |       "Appeared distracted some of the time",
  6652 |       "Attention and Concentration"
  6653 |     );
  6654 |     await this.selectTheDropdownOption(
  6655 |       4,
  6656 |       "Appeared overly anxious",
  6657 |       "Self-Confidence"
  6658 |     );
  6659 |     await this.selectTheDropdownOption(
  6660 |       5,
  6661 |       "Responded impulsively and carelessly",
  6662 |       "Care in Responding"
  6663 |     );
  6664 |     await this.selectTheDropdownOption(
  6665 |       6,
  6666 |       "Made random guesses",
  6667 |       "Response to Difficult Items and Corrective Feedback"
  6668 |     );
  6669 |     await this.selectTheDropdownOption(
  6670 |       7,
  6671 |       "Was resistant to tasks",
  6672 |       "Motivation"
  6673 |     );
  6674 |     } 
  6675 |    if (typeOfTest && typeOfTest.match(/Score Error Scenario|Score Later Error Scenario|Flag Item with Notes and Review scenario for Score Later|Practice Exercise !C scenario when Score Entry Equal To 5/i) && testStemForm !== "SWRTFL.W5PA"){
  6676 |     await this.nextButton.click();
  6677 |     await this.submitTestSetAndFinishAdministration.last().click();
  6678 |    }else{
  6679 |     await this.submitTestSetAndFinishAdministration.last().click();
  6680 |   }
  6681 | }
  6682 | 
  6683 |   async endSessionWithResponseStyleAndBehaviours() {
  6684 |     await this.endSessionButton.click();
  6685 |     await this.endSessionReviewButton.waitFor({
  6686 |       state: "attached",
  6687 |       timeout: 80000,
  6688 |     });
  6689 |     await this.endSessionReviewButton.click();
  6690 |       await this.submitTestSetAndFinishAdministration.waitFor({
  6691 |           state: "attached",
  6692 |           timeout: 150000,
  6693 |       });
  6694 |       await this.submitTestSetAndFinishAdministration.click();
```