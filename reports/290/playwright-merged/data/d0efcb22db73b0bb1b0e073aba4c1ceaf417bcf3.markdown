# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/LWIDNT_Multi_BC6.spec.ts >>  LWIDNT UI And Reports >> Age 8 - Rerouting End Test scenario for SSP4 Test UI
- Location: src/tests/ReroutingandLeftNav/LWIDNT_Multi_BC6.spec.ts:12:13

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('button.plain-button.next-item-button, button.plain-button.nav-button')
    - locator resolved to <button disabled aria-live="polite" id="next-item-button" aria-label="Go on to " class="plain-button next-item-button">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    116 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

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
              - heading "Hello 38Pw Aut25AH" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "38Pw Aut25AH" [ref=e10] [cursor=pointer]
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
                  - row "Begin assignment Valerie Crist_1781165950704 for N77097A86502, Edythe Valerie Crist_1781165950704 More info 49 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Valerie Crist_1781165950704 for N77097A86502, Edythe" [ref=e75]:
                      - button "Begin assignment Valerie Crist_1781165950704 for N77097A86502, Edythe" [disabled] [ref=e76]:
                        - generic [ref=e77]: N77097A86502, Edythe
                    - cell "Valerie Crist_1781165950704 More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Valerie Crist_1781165950704" [disabled] [ref=e80]:
                          - generic [ref=e81]: Valerie Crist_1781165950704
                        - button "More info" [ref=e82]
                    - cell "49 days" [ref=e83]:
                      - button "49 days" [disabled] [ref=e84]
                    - cell "● Submitted" [ref=e85]:
                      - button "● Submitted" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row "Begin assignment Mrs. Eileen Sanford_1781165672502 for N60492A49304, Anahi Mrs. Eileen Sanford_1781165672502 More info 49 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Eileen Sanford_1781165672502 for N60492A49304, Anahi" [ref=e93]:
                      - button "Begin assignment Mrs. Eileen Sanford_1781165672502 for N60492A49304, Anahi" [disabled] [ref=e94]:
                        - generic [ref=e95]: N60492A49304, Anahi
                    - cell "Mrs. Eileen Sanford_1781165672502 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Mrs. Eileen Sanford_1781165672502" [disabled] [ref=e98]:
                          - generic [ref=e99]: Mrs. Eileen Sanford_1781165672502
                        - button "More info" [ref=e100]
                    - cell "49 days" [ref=e101]:
                      - button "49 days" [disabled] [ref=e102]
                    - cell "● Submitted" [ref=e103]:
                      - button "● Submitted" [disabled] [ref=e104]:
                        - generic [ref=e105]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e106]:
                      - button "Edit Assignment" [disabled] [ref=e107]
                      - button "Add Tests" [disabled] [ref=e108]
                      - button "Assignment actions" [ref=e109]
                  - row "Begin assignment Olive Kuhlman_1778839858496 (+1 more) for N27371A28620, Brenden Olive Kuhlman_1778839858496 (+1 more) More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Olive Kuhlman_1778839858496 (+1 more) for N27371A28620, Brenden" [ref=e111]:
                      - button "Begin assignment Olive Kuhlman_1778839858496 (+1 more) for N27371A28620, Brenden" [disabled] [ref=e112]:
                        - generic [ref=e113]: N27371A28620, Brenden
                    - cell "Olive Kuhlman_1778839858496 (+1 more) More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Olive Kuhlman_1778839858496 (+1 more)" [disabled] [ref=e116]:
                          - generic [ref=e117]: Olive Kuhlman_1778839858496 (+1 more)
                        - button "More info" [ref=e118]
                    - cell "22 days" [ref=e119]:
                      - button "22 days" [disabled] [ref=e120]
                    - cell "● Submitted" [ref=e121]:
                      - button "● Submitted" [disabled] [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e124]:
                      - button "Edit Assignment" [disabled] [ref=e125]
                      - button "Add Tests" [disabled] [ref=e126]
                      - button "Assignment actions" [ref=e127]
                  - row "Begin assignment Jeff Mertz_1778839567133 for N77387A12178, Forest Jeff Mertz_1778839567133 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Jeff Mertz_1778839567133 for N77387A12178, Forest" [ref=e129]:
                      - button "Begin assignment Jeff Mertz_1778839567133 for N77387A12178, Forest" [disabled] [ref=e130]:
                        - generic [ref=e131]: N77387A12178, Forest
                    - cell "Jeff Mertz_1778839567133 More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Jeff Mertz_1778839567133" [disabled] [ref=e134]:
                          - generic [ref=e135]: Jeff Mertz_1778839567133
                        - button "More info" [ref=e136]
                    - cell "22 days" [ref=e137]:
                      - button "22 days" [disabled] [ref=e138]
                    - cell "● Submitted" [ref=e139]:
                      - button "● Submitted" [disabled] [ref=e140]:
                        - generic [ref=e141]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e142]:
                      - button "Edit Assignment" [disabled] [ref=e143]
                      - button "Add Tests" [disabled] [ref=e144]
                      - button "Assignment actions" [ref=e145]
                  - row "Begin assignment Christian McLaughlin_1778839188230 for N96282A54280, Jeramy Christian McLaughlin_1778839188230 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Christian McLaughlin_1778839188230 for N96282A54280, Jeramy" [ref=e147]:
                      - button "Begin assignment Christian McLaughlin_1778839188230 for N96282A54280, Jeramy" [disabled] [ref=e148]:
                        - generic [ref=e149]: N96282A54280, Jeramy
                    - cell "Christian McLaughlin_1778839188230 More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Christian McLaughlin_1778839188230" [disabled] [ref=e152]:
                          - generic [ref=e153]: Christian McLaughlin_1778839188230
                        - button "More info" [ref=e154]
                    - cell "22 days" [ref=e155]:
                      - button "22 days" [disabled] [ref=e156]
                    - cell "● Submitted" [ref=e157]:
                      - button "● Submitted" [disabled] [ref=e158]:
                        - generic [ref=e159]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e160]:
                      - button "Edit Assignment" [disabled] [ref=e161]
                      - button "Add Tests" [disabled] [ref=e162]
                      - button "Assignment actions" [ref=e163]
                  - row "Begin assignment Kristopher Wisozk_1778838925690 for N66198A39682, Marcellus Kristopher Wisozk_1778838925690 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Kristopher Wisozk_1778838925690 for N66198A39682, Marcellus" [ref=e165]:
                      - button "Begin assignment Kristopher Wisozk_1778838925690 for N66198A39682, Marcellus" [disabled] [ref=e166]:
                        - generic [ref=e167]: N66198A39682, Marcellus
                    - cell "Kristopher Wisozk_1778838925690 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Kristopher Wisozk_1778838925690" [disabled] [ref=e170]:
                          - generic [ref=e171]: Kristopher Wisozk_1778838925690
                        - button "More info" [ref=e172]
                    - cell "22 days" [ref=e173]:
                      - button "22 days" [disabled] [ref=e174]
                    - cell "● Submitted" [ref=e175]:
                      - button "● Submitted" [disabled] [ref=e176]:
                        - generic [ref=e177]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e178]:
                      - button "Edit Assignment" [disabled] [ref=e179]
                      - button "Add Tests" [disabled] [ref=e180]
                      - button "Assignment actions" [ref=e181]
                  - row "Begin assignment Forrest Stroman_1778838735210 for N23303A32698, Suzanne Forrest Stroman_1778838735210 More info 22 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Forrest Stroman_1778838735210 for N23303A32698, Suzanne" [ref=e183]:
                      - button "Begin assignment Forrest Stroman_1778838735210 for N23303A32698, Suzanne" [disabled] [ref=e184]:
                        - generic [ref=e185]: N23303A32698, Suzanne
                    - cell "Forrest Stroman_1778838735210 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Forrest Stroman_1778838735210" [disabled] [ref=e188]:
                          - generic [ref=e189]: Forrest Stroman_1778838735210
                        - button "More info" [ref=e190]
                    - cell "22 days" [ref=e191]:
                      - button "22 days" [disabled] [ref=e192]
                    - cell "● In Progress" [ref=e193]:
                      - button "● In Progress" [disabled] [ref=e194]:
                        - generic [ref=e195]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e196]:
                      - button "Edit Assignment" [disabled] [ref=e197]
                      - button "Add Tests" [disabled] [ref=e198]
                      - button "Assignment actions" [ref=e199]
                  - row "Begin assignment Dr. Aubrey McDermott_1778838397040 (+1 more) for N86535A59633, Brenden Dr. Aubrey McDermott_1778838397040 (+1 more) More info 22 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Dr. Aubrey McDermott_1778838397040 (+1 more) for N86535A59633, Brenden" [ref=e201]:
                      - button "Begin assignment Dr. Aubrey McDermott_1778838397040 (+1 more) for N86535A59633, Brenden" [disabled] [ref=e202]:
                        - generic [ref=e203]: N86535A59633, Brenden
                    - cell "Dr. Aubrey McDermott_1778838397040 (+1 more) More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Dr. Aubrey McDermott_1778838397040 (+1 more)" [disabled] [ref=e206]:
                          - generic [ref=e207]: Dr. Aubrey McDermott_1778838397040 (+1 more)
                        - button "More info" [ref=e208]
                    - cell "22 days" [ref=e209]:
                      - button "22 days" [disabled] [ref=e210]
                    - cell "● In Progress" [ref=e211]:
                      - button "● In Progress" [disabled] [ref=e212]:
                        - generic [ref=e213]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e214]:
                      - button "Edit Assignment" [disabled] [ref=e215]
                      - button "Add Tests" [disabled] [ref=e216]
                      - button "Assignment actions" [ref=e217]
                  - row "Begin assignment Phil Will-Huel_1778838106100 for N34317A42997, Jacinto Phil Will-Huel_1778838106100 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Phil Will-Huel_1778838106100 for N34317A42997, Jacinto" [ref=e219]:
                      - button "Begin assignment Phil Will-Huel_1778838106100 for N34317A42997, Jacinto" [disabled] [ref=e220]:
                        - generic [ref=e221]: N34317A42997, Jacinto
                    - cell "Phil Will-Huel_1778838106100 More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Phil Will-Huel_1778838106100" [disabled] [ref=e224]:
                          - generic [ref=e225]: Phil Will-Huel_1778838106100
                        - button "More info" [ref=e226]
                    - cell "22 days" [ref=e227]:
                      - button "22 days" [disabled] [ref=e228]
                    - cell "● Submitted" [ref=e229]:
                      - button "● Submitted" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row "Begin assignment Irving Sporer DVM_1778837699584 for N29135A20694, Kenya Irving Sporer DVM_1778837699584 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Irving Sporer DVM_1778837699584 for N29135A20694, Kenya" [ref=e237]:
                      - button "Begin assignment Irving Sporer DVM_1778837699584 for N29135A20694, Kenya" [disabled] [ref=e238]:
                        - generic [ref=e239]: N29135A20694, Kenya
                    - cell "Irving Sporer DVM_1778837699584 More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Irving Sporer DVM_1778837699584" [disabled] [ref=e242]:
                          - generic [ref=e243]: Irving Sporer DVM_1778837699584
                        - button "More info" [ref=e244]
                    - cell "22 days" [ref=e245]:
                      - button "22 days" [disabled] [ref=e246]
                    - cell "● Submitted" [ref=e247]:
                      - button "● Submitted" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row "Begin assignment Crystal Hamill_1778837438277 for N84819A47744, Edison Crystal Hamill_1778837438277 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Crystal Hamill_1778837438277 for N84819A47744, Edison" [ref=e255]:
                      - button "Begin assignment Crystal Hamill_1778837438277 for N84819A47744, Edison" [disabled] [ref=e256]:
                        - generic [ref=e257]: N84819A47744, Edison
                    - cell "Crystal Hamill_1778837438277 More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Crystal Hamill_1778837438277" [disabled] [ref=e260]:
                          - generic [ref=e261]: Crystal Hamill_1778837438277
                        - button "More info" [ref=e262]
                    - cell "22 days" [ref=e263]:
                      - button "22 days" [disabled] [ref=e264]
                    - cell "● Submitted" [ref=e265]:
                      - button "● Submitted" [disabled] [ref=e266]:
                        - generic [ref=e267]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e268]:
                      - button "Edit Assignment" [disabled] [ref=e269]
                      - button "Add Tests" [disabled] [ref=e270]
                      - button "Assignment actions" [ref=e271]
                  - row "Begin assignment Dora Wisoky_1778837102542 (+1 more) for N79866A83207, Citlalli Dora Wisoky_1778837102542 (+1 more) More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Dora Wisoky_1778837102542 (+1 more) for N79866A83207, Citlalli" [ref=e273]:
                      - button "Begin assignment Dora Wisoky_1778837102542 (+1 more) for N79866A83207, Citlalli" [disabled] [ref=e274]:
                        - generic [ref=e275]: N79866A83207, Citlalli
                    - cell "Dora Wisoky_1778837102542 (+1 more) More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Dora Wisoky_1778837102542 (+1 more)" [disabled] [ref=e278]:
                          - generic [ref=e279]: Dora Wisoky_1778837102542 (+1 more)
                        - button "More info" [ref=e280]
                    - cell "22 days" [ref=e281]:
                      - button "22 days" [disabled] [ref=e282]
                    - cell "● Submitted" [ref=e283]:
                      - button "● Submitted" [disabled] [ref=e284]:
                        - generic [ref=e285]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e286]:
                      - button "Edit Assignment" [disabled] [ref=e287]
                      - button "Add Tests" [disabled] [ref=e288]
                      - button "Assignment actions" [ref=e289]
                  - row "Begin assignment Lydia Toy I_1778836812619 for N2683A86096, Shyanne Lydia Toy I_1778836812619 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Lydia Toy I_1778836812619 for N2683A86096, Shyanne" [ref=e291]:
                      - button "Begin assignment Lydia Toy I_1778836812619 for N2683A86096, Shyanne" [disabled] [ref=e292]:
                        - generic [ref=e293]: N2683A86096, Shyanne
                    - cell "Lydia Toy I_1778836812619 More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Lydia Toy I_1778836812619" [disabled] [ref=e296]:
                          - generic [ref=e297]: Lydia Toy I_1778836812619
                        - button "More info" [ref=e298]
                    - cell "22 days" [ref=e299]:
                      - button "22 days" [disabled] [ref=e300]
                    - cell "● Submitted" [ref=e301]:
                      - button "● Submitted" [disabled] [ref=e302]:
                        - generic [ref=e303]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e304]:
                      - button "Edit Assignment" [disabled] [ref=e305]
                      - button "Add Tests" [disabled] [ref=e306]
                      - button "Assignment actions" [ref=e307]
                  - row "Begin assignment Frederick Bosco_1778836384519 for N9919A13053, Lucy Frederick Bosco_1778836384519 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e308] [cursor=pointer]:
                    - cell "Begin assignment Frederick Bosco_1778836384519 for N9919A13053, Lucy" [ref=e309]:
                      - button "Begin assignment Frederick Bosco_1778836384519 for N9919A13053, Lucy" [disabled] [ref=e310]:
                        - generic [ref=e311]: N9919A13053, Lucy
                    - cell "Frederick Bosco_1778836384519 More info" [ref=e312]:
                      - generic [ref=e313]:
                        - button "Frederick Bosco_1778836384519" [disabled] [ref=e314]:
                          - generic [ref=e315]: Frederick Bosco_1778836384519
                        - button "More info" [ref=e316]
                    - cell "22 days" [ref=e317]:
                      - button "22 days" [disabled] [ref=e318]
                    - cell "● Submitted" [ref=e319]:
                      - button "● Submitted" [disabled] [ref=e320]:
                        - generic [ref=e321]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e322]:
                      - button "Edit Assignment" [disabled] [ref=e323]
                      - button "Add Tests" [disabled] [ref=e324]
                      - button "Assignment actions" [ref=e325]
                  - row "Begin assignment Miriam Paucek_1778836124463 for N39373A91247, Braulio Miriam Paucek_1778836124463 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e326] [cursor=pointer]:
                    - cell "Begin assignment Miriam Paucek_1778836124463 for N39373A91247, Braulio" [ref=e327]:
                      - button "Begin assignment Miriam Paucek_1778836124463 for N39373A91247, Braulio" [disabled] [ref=e328]:
                        - generic [ref=e329]: N39373A91247, Braulio
                    - cell "Miriam Paucek_1778836124463 More info" [ref=e330]:
                      - generic [ref=e331]:
                        - button "Miriam Paucek_1778836124463" [disabled] [ref=e332]:
                          - generic [ref=e333]: Miriam Paucek_1778836124463
                        - button "More info" [ref=e334]
                    - cell "22 days" [ref=e335]:
                      - button "22 days" [disabled] [ref=e336]
                    - cell "● Submitted" [ref=e337]:
                      - button "● Submitted" [disabled] [ref=e338]:
                        - generic [ref=e339]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e340]:
                      - button "Edit Assignment" [disabled] [ref=e341]
                      - button "Add Tests" [disabled] [ref=e342]
                      - button "Assignment actions" [ref=e343]
                  - row "Begin assignment Carroll Morar_1778835794294 (+1 more) for N96460A82715, Katelin Carroll Morar_1778835794294 (+1 more) More info 22 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e344] [cursor=pointer]:
                    - cell "Begin assignment Carroll Morar_1778835794294 (+1 more) for N96460A82715, Katelin" [ref=e345]:
                      - button "Begin assignment Carroll Morar_1778835794294 (+1 more) for N96460A82715, Katelin" [disabled] [ref=e346]:
                        - generic [ref=e347]: N96460A82715, Katelin
                    - cell "Carroll Morar_1778835794294 (+1 more) More info" [ref=e348]:
                      - generic [ref=e349]:
                        - button "Carroll Morar_1778835794294 (+1 more)" [disabled] [ref=e350]:
                          - generic [ref=e351]: Carroll Morar_1778835794294 (+1 more)
                        - button "More info" [ref=e352]
                    - cell "22 days" [ref=e353]:
                      - button "22 days" [disabled] [ref=e354]
                    - cell "● In Progress" [ref=e355]:
                      - button "● In Progress" [disabled] [ref=e356]:
                        - generic [ref=e357]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e358]:
                      - button "Edit Assignment" [disabled] [ref=e359]
                      - button "Add Tests" [disabled] [ref=e360]
                      - button "Assignment actions" [ref=e361]
                  - row "Begin assignment Daisy Cassin_1778835502555 for N44118A12535, Roel Daisy Cassin_1778835502555 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e362] [cursor=pointer]:
                    - cell "Begin assignment Daisy Cassin_1778835502555 for N44118A12535, Roel" [ref=e363]:
                      - button "Begin assignment Daisy Cassin_1778835502555 for N44118A12535, Roel" [disabled] [ref=e364]:
                        - generic [ref=e365]: N44118A12535, Roel
                    - cell "Daisy Cassin_1778835502555 More info" [ref=e366]:
                      - generic [ref=e367]:
                        - button "Daisy Cassin_1778835502555" [disabled] [ref=e368]:
                          - generic [ref=e369]: Daisy Cassin_1778835502555
                        - button "More info" [ref=e370]
                    - cell "22 days" [ref=e371]:
                      - button "22 days" [disabled] [ref=e372]
                    - cell "● Submitted" [ref=e373]:
                      - button "● Submitted" [disabled] [ref=e374]:
                        - generic [ref=e375]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e376]:
                      - button "Edit Assignment" [disabled] [ref=e377]
                      - button "Add Tests" [disabled] [ref=e378]
                      - button "Assignment actions" [ref=e379]
                  - row "Begin assignment Marta Mante_1778835032907 for N98993A95617, Austen Marta Mante_1778835032907 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e380] [cursor=pointer]:
                    - cell "Begin assignment Marta Mante_1778835032907 for N98993A95617, Austen" [ref=e381]:
                      - button "Begin assignment Marta Mante_1778835032907 for N98993A95617, Austen" [disabled] [ref=e382]:
                        - generic [ref=e383]: N98993A95617, Austen
                    - cell "Marta Mante_1778835032907 More info" [ref=e384]:
                      - generic [ref=e385]:
                        - button "Marta Mante_1778835032907" [disabled] [ref=e386]:
                          - generic [ref=e387]: Marta Mante_1778835032907
                        - button "More info" [ref=e388]
                    - cell "22 days" [ref=e389]:
                      - button "22 days" [disabled] [ref=e390]
                    - cell "● Submitted" [ref=e391]:
                      - button "● Submitted" [disabled] [ref=e392]:
                        - generic [ref=e393]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e394]:
                      - button "Edit Assignment" [disabled] [ref=e395]
                      - button "Add Tests" [disabled] [ref=e396]
                      - button "Assignment actions" [ref=e397]
                  - row "Begin assignment Miss Renee Abbott_1778834775639 for N55293A95362, Loyce Miss Renee Abbott_1778834775639 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e398] [cursor=pointer]:
                    - cell "Begin assignment Miss Renee Abbott_1778834775639 for N55293A95362, Loyce" [ref=e399]:
                      - button "Begin assignment Miss Renee Abbott_1778834775639 for N55293A95362, Loyce" [disabled] [ref=e400]:
                        - generic [ref=e401]: N55293A95362, Loyce
                    - cell "Miss Renee Abbott_1778834775639 More info" [ref=e402]:
                      - generic [ref=e403]:
                        - button "Miss Renee Abbott_1778834775639" [disabled] [ref=e404]:
                          - generic [ref=e405]: Miss Renee Abbott_1778834775639
                        - button "More info" [ref=e406]
                    - cell "22 days" [ref=e407]:
                      - button "22 days" [disabled] [ref=e408]
                    - cell "● Submitted" [ref=e409]:
                      - button "● Submitted" [disabled] [ref=e410]:
                        - generic [ref=e411]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e412]:
                      - button "Edit Assignment" [disabled] [ref=e413]
                      - button "Add Tests" [disabled] [ref=e414]
                      - button "Assignment actions" [ref=e415]
                  - row "Begin assignment Ms. Jill Ritchie_1778834443053 (+1 more) for N76011A69457, Jaunita Ms. Jill Ritchie_1778834443053 (+1 more) More info 22 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e416] [cursor=pointer]:
                    - cell "Begin assignment Ms. Jill Ritchie_1778834443053 (+1 more) for N76011A69457, Jaunita" [ref=e417]:
                      - button "Begin assignment Ms. Jill Ritchie_1778834443053 (+1 more) for N76011A69457, Jaunita" [disabled] [ref=e418]:
                        - generic [ref=e419]: N76011A69457, Jaunita
                    - cell "Ms. Jill Ritchie_1778834443053 (+1 more) More info" [ref=e420]:
                      - generic [ref=e421]:
                        - button "Ms. Jill Ritchie_1778834443053 (+1 more)" [disabled] [ref=e422]:
                          - generic [ref=e423]: Ms. Jill Ritchie_1778834443053 (+1 more)
                        - button "More info" [ref=e424]
                    - cell "22 days" [ref=e425]:
                      - button "22 days" [disabled] [ref=e426]
                    - cell "● In Progress" [ref=e427]:
                      - button "● In Progress" [disabled] [ref=e428]:
                        - generic [ref=e429]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e430]:
                      - button "Edit Assignment" [disabled] [ref=e431]
                      - button "Add Tests" [disabled] [ref=e432]
                      - button "Assignment actions" [ref=e433]
                  - row "Begin assignment Lena Langworth_1778834148511 for N64012A76801, Marion Lena Langworth_1778834148511 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e434] [cursor=pointer]:
                    - cell "Begin assignment Lena Langworth_1778834148511 for N64012A76801, Marion" [ref=e435]:
                      - button "Begin assignment Lena Langworth_1778834148511 for N64012A76801, Marion" [disabled] [ref=e436]:
                        - generic [ref=e437]: N64012A76801, Marion
                    - cell "Lena Langworth_1778834148511 More info" [ref=e438]:
                      - generic [ref=e439]:
                        - button "Lena Langworth_1778834148511" [disabled] [ref=e440]:
                          - generic [ref=e441]: Lena Langworth_1778834148511
                        - button "More info" [ref=e442]
                    - cell "22 days" [ref=e443]:
                      - button "22 days" [disabled] [ref=e444]
                    - cell "● Submitted" [ref=e445]:
                      - button "● Submitted" [disabled] [ref=e446]:
                        - generic [ref=e447]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e448]:
                      - button "Edit Assignment" [disabled] [ref=e449]
                      - button "Add Tests" [disabled] [ref=e450]
                      - button "Assignment actions" [ref=e451]
                  - row "Begin assignment Ethel Lind-Ryan_1778833660435 for N73027A95073, Alejandrin Ethel Lind-Ryan_1778833660435 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e452] [cursor=pointer]:
                    - cell "Begin assignment Ethel Lind-Ryan_1778833660435 for N73027A95073, Alejandrin" [ref=e453]:
                      - button "Begin assignment Ethel Lind-Ryan_1778833660435 for N73027A95073, Alejandrin" [disabled] [ref=e454]:
                        - generic [ref=e455]: N73027A95073, Alejandrin
                    - cell "Ethel Lind-Ryan_1778833660435 More info" [ref=e456]:
                      - generic [ref=e457]:
                        - button "Ethel Lind-Ryan_1778833660435" [disabled] [ref=e458]:
                          - generic [ref=e459]: Ethel Lind-Ryan_1778833660435
                        - button "More info" [ref=e460]
                    - cell "22 days" [ref=e461]:
                      - button "22 days" [disabled] [ref=e462]
                    - cell "● Submitted" [ref=e463]:
                      - button "● Submitted" [disabled] [ref=e464]:
                        - generic [ref=e465]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e466]:
                      - button "Edit Assignment" [disabled] [ref=e467]
                      - button "Add Tests" [disabled] [ref=e468]
                      - button "Assignment actions" [ref=e469]
                  - row "Begin assignment Floyd McCullough_1778833400929 for N49009A71516, Kenyon Floyd McCullough_1778833400929 More info 22 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e470] [cursor=pointer]:
                    - cell "Begin assignment Floyd McCullough_1778833400929 for N49009A71516, Kenyon" [ref=e471]:
                      - button "Begin assignment Floyd McCullough_1778833400929 for N49009A71516, Kenyon" [disabled] [ref=e472]:
                        - generic [ref=e473]: N49009A71516, Kenyon
                    - cell "Floyd McCullough_1778833400929 More info" [ref=e474]:
                      - generic [ref=e475]:
                        - button "Floyd McCullough_1778833400929" [disabled] [ref=e476]:
                          - generic [ref=e477]: Floyd McCullough_1778833400929
                        - button "More info" [ref=e478]
                    - cell "22 days" [ref=e479]:
                      - button "22 days" [disabled] [ref=e480]
                    - cell "● Submitted" [ref=e481]:
                      - button "● Submitted" [disabled] [ref=e482]:
                        - generic [ref=e483]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e484]:
                      - button "Edit Assignment" [disabled] [ref=e485]
                      - button "Add Tests" [disabled] [ref=e486]
                      - button "Assignment actions" [ref=e487]
                  - row "Begin assignment Shannon Bartell_1771568230438 for N31564A51965, Lavonne Shannon Bartell_1771568230438 More info 0 days ● Expired Generate Report Assignment actions" [ref=e488] [cursor=pointer]:
                    - cell "Begin assignment Shannon Bartell_1771568230438 for N31564A51965, Lavonne" [ref=e489]:
                      - button "Begin assignment Shannon Bartell_1771568230438 for N31564A51965, Lavonne" [disabled] [ref=e490]:
                        - generic [ref=e491]: N31564A51965, Lavonne
                    - cell "Shannon Bartell_1771568230438 More info" [ref=e492]:
                      - generic [ref=e493]:
                        - button "Shannon Bartell_1771568230438" [disabled] [ref=e494]:
                          - generic [ref=e495]: Shannon Bartell_1771568230438
                        - button "More info" [ref=e496]
                    - cell "0 days" [ref=e497]:
                      - button "0 days" [disabled] [ref=e498]
                    - cell "● Expired" [ref=e499]:
                      - button "● Expired" [disabled] [ref=e500]:
                        - generic [ref=e501]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e502]:
                      - button "Generate Report" [ref=e503]
                      - button "Assignment actions" [ref=e504]
                  - row "Begin assignment Debbie Nitzsche_1771565845676 for N50403A95349, Dudley Debbie Nitzsche_1771565845676 More info 0 days ● Expired Generate Report Assignment actions" [ref=e505] [cursor=pointer]:
                    - cell "Begin assignment Debbie Nitzsche_1771565845676 for N50403A95349, Dudley" [ref=e506]:
                      - button "Begin assignment Debbie Nitzsche_1771565845676 for N50403A95349, Dudley" [disabled] [ref=e507]:
                        - generic [ref=e508]: N50403A95349, Dudley
                    - cell "Debbie Nitzsche_1771565845676 More info" [ref=e509]:
                      - generic [ref=e510]:
                        - button "Debbie Nitzsche_1771565845676" [disabled] [ref=e511]:
                          - generic [ref=e512]: Debbie Nitzsche_1771565845676
                        - button "More info" [ref=e513]
                    - cell "0 days" [ref=e514]:
                      - button "0 days" [disabled] [ref=e515]
                    - cell "● Expired" [ref=e516]:
                      - button "● Expired" [disabled] [ref=e517]:
                        - generic [ref=e518]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e519]:
                      - button "Generate Report" [ref=e520]
                      - button "Assignment actions" [ref=e521]
                  - row "Begin assignment Mr. Evan Rowe_1771563399636 for N41848A12016, Adolph Mr. Evan Rowe_1771563399636 More info 0 days ● Expired Generate Report Assignment actions" [ref=e522] [cursor=pointer]:
                    - cell "Begin assignment Mr. Evan Rowe_1771563399636 for N41848A12016, Adolph" [ref=e523]:
                      - button "Begin assignment Mr. Evan Rowe_1771563399636 for N41848A12016, Adolph" [disabled] [ref=e524]:
                        - generic [ref=e525]: N41848A12016, Adolph
                    - cell "Mr. Evan Rowe_1771563399636 More info" [ref=e526]:
                      - generic [ref=e527]:
                        - button "Mr. Evan Rowe_1771563399636" [disabled] [ref=e528]:
                          - generic [ref=e529]: Mr. Evan Rowe_1771563399636
                        - button "More info" [ref=e530]
                    - cell "0 days" [ref=e531]:
                      - button "0 days" [disabled] [ref=e532]
                    - cell "● Expired" [ref=e533]:
                      - button "● Expired" [disabled] [ref=e534]:
                        - generic [ref=e535]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e536]:
                      - button "Generate Report" [ref=e537]
                      - button "Assignment actions" [ref=e538]
                  - row "Begin assignment Elisa Kemmer Sr._1769158091394 for N76965A34574, Max Elisa Kemmer Sr._1769158091394 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e539] [cursor=pointer]:
                    - cell "Begin assignment Elisa Kemmer Sr._1769158091394 for N76965A34574, Max" [ref=e540]:
                      - button "Begin assignment Elisa Kemmer Sr._1769158091394 for N76965A34574, Max" [disabled] [ref=e541]:
                        - generic [ref=e542]: N76965A34574, Max
                    - cell "Elisa Kemmer Sr._1769158091394 More info" [ref=e543]:
                      - generic [ref=e544]:
                        - button "Elisa Kemmer Sr._1769158091394" [disabled] [ref=e545]:
                          - generic [ref=e546]: Elisa Kemmer Sr._1769158091394
                        - button "More info" [ref=e547]
                    - cell "—" [ref=e548]:
                      - button "—" [disabled] [ref=e549]
                    - cell "● Not Started" [ref=e550]:
                      - button "● Not Started" [disabled] [ref=e551]:
                        - generic [ref=e552]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e553]:
                      - button "Edit Assignment" [disabled] [ref=e554]
                      - button "Add Tests" [disabled] [ref=e555]
                      - button "Assignment actions" [ref=e556]
            - generic [ref=e557]:
              - generic [ref=e560]:
                - img [ref=e561]
                - heading "Notifications Center" [level=2] [ref=e565]
              - generic [ref=e566]:
                - generic [ref=e568]:
                  - img [ref=e569]
                  - heading "Resources" [level=3] [ref=e573]
                - list [ref=e574]:
                  - listitem [ref=e575]:
                    - button "Riverside Learn" [ref=e576] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e577]
                      - img [ref=e579]
                  - listitem [ref=e581]:
                    - button "Onboarding Tutorial Videos" [ref=e582] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e583]
                      - img [ref=e585]
                  - listitem [ref=e587]:
                    - button "Quick Reference Guides" [ref=e588] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e589]
                      - img [ref=e591]
                - button "View All" [ref=e594] [cursor=pointer]
      - contentinfo [ref=e595]:
        - generic [ref=e596]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e597] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/?__hstc=20581799.6dce77c68cf7e94bb30ed3d09c19ec38.1784726632120.1784726632120.1784726632120.1&__hssc=20581799.1.1784726632120&__hsfp=763623d55c7195f71866c2c202af869a
          - img "Riverside Insights Website" [ref=e598]
        - generic [ref=e599]:
          - link "Riverside Insights Facebook" [ref=e600] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e601]
          - link "Riverside Insights Twitter" [ref=e602] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e603]
          - link "Riverside Insights LinkedIn" [ref=e604] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e605]
          - link "Riverside Insights Instagram" [ref=e606] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e607]
        - generic [ref=e608]:
          - button "Leave Feedback" [ref=e609] [cursor=pointer]
          - generic [ref=e610]: "|"
          - link "Terms of Use" [ref=e611] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use?__hstc=20581799.6dce77c68cf7e94bb30ed3d09c19ec38.1784726632120.1784726632120.1784726632120.1&__hssc=20581799.1.1784726632120&__hsfp=763623d55c7195f71866c2c202af869a
          - generic [ref=e612]: "|"
          - link "Privacy Policy" [ref=e613] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy?__hstc=20581799.6dce77c68cf7e94bb30ed3d09c19ec38.1784726632120.1784726632120.1784726632120.1&__hssc=20581799.1.1784726632120&__hsfp=763623d55c7195f71866c2c202af869a
        - generic [ref=e614]: Footer region end
  - region "Chat Widget" [ref=e615]:
    - iframe [ref=e616]:
      - button "Open live chat" [ref=f3e5]:
        - img [ref=f3e8]
        - img [ref=f3e15]
    - generic "Drag" [ref=e617]:
      - img [ref=e618]
```

# Test source

```ts
  4267 |             } else if (testStemForm.match(/ANLSYN.W5PA|CONFRM.W5PA/) && (currentItemDetails.startsWith("Introduction"))) {
  4268 |               await this.videoPlayButton.click();
  4269 |               await this.waitTillVideoIsComplete();
  4270 |               await this.plainNextButtonOrEndButton.click();
  4271 |             } else if (currentItemDetails.includes("Introduction")) {
  4272 |               await this.page.waitForTimeout(2000);
  4273 |               await this.plainNextButtonOrEndButton.click();
  4274 |               await this.page.waitForTimeout(1000);
  4275 |             } else if (currentItemDetails.startsWith("Sample")) {
  4276 |               await this.page.waitForTimeout(2000);
  4277 |               await this.correctOptionButton.nth(0).click();
  4278 |               await this.plainNextButtonOrEndButton.click();
  4279 |             } else if (currentItemDetails.includes("Item") || currentItemDetails.endsWith("Presentation") || currentItemDetails.match(new RegExp(`Block\\s+[A-Z],\\s+Item\\s+\\d+`)) || currentItemDetails.match(new RegExp(`Story\\s+\\d+,\\s+Item\\s+\\d+`))) {
  4280 |               await this.page.waitForTimeout(1000);
  4281 |               if (currentItemDetails.endsWith("Presentation")) {
  4282 |                 if (testStemForm.match('PARCMP.W5PA')) {
  4283 |                   await this.examineeCursorButton.click();
  4284 |                   await this.doneButton.click();
  4285 |                 }
  4286 |                 await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  4287 |                 await this.page.waitForTimeout(500);
  4288 |                 await this.plainNextButtonOrEndButton.click();
  4289 |               } else {
  4290 |                 await this.page.waitForTimeout(2000);
  4291 |                 await this.iDontKnowButton.click();
  4292 |                 await this.plainNextButtonOrEndButton.waitFor({ state: "visible" })
  4293 |                 await this.plainNextButtonOrEndButton.click();
  4294 |               }
  4295 |             }
  4296 |           }
  4297 |           await this.addTestFromMainNavgation("Letter-Pattern Matching");
  4298 |           await this.page.waitForTimeout(1000);
  4299 |           for (let j = 1; j <= 5; j++) {
  4300 |             let currentItemDetails = await this.itemDetails.textContent();
  4301 |             if (currentItemDetails.includes("Introduction")) {
  4302 |               await this.page.waitForTimeout(1000);
  4303 |               await this.plainNextButtonOrEndButton.click();
  4304 |               await this.page.waitForTimeout(1000);
  4305 |             } else if (currentItemDetails.startsWith("Sample")) {
  4306 |               await this.page.waitForTimeout(1000);
  4307 |               await this.iDontKnowButton.click();
  4308 |               await this.plainNextButtonOrEndButton.click();
  4309 |               await this.page.waitForTimeout(1000);
  4310 |             }
  4311 |           }
  4312 |           await this.endSessionForScoreErrorCheck(examinee_ID, browser, testName);
  4313 |           await this.iDontKnowButton.click();
  4314 |           await this.plainNextButtonOrEndButton.click();
  4315 |           return;
  4316 |         } else if (testStemForm === "VAL.W5PA") {
  4317 |           const itemWrapper = this.page.locator("//div[@class='option-wrapper']/button");
  4318 |           // Number of clicks per story
  4319 |           const storyClickCounts: Record<string, number> = {
  4320 |             "Story 1": 4,
  4321 |           };
  4322 |           const storyKey = Object.keys(storyClickCounts).find((story) =>
  4323 |             itemDetails.startsWith(story)
  4324 |           );
  4325 | 
  4326 |           if (storyKey) {
  4327 |             const count = storyClickCounts[storyKey];
  4328 | 
  4329 |             for (let i = 0; i < count; i++) {
  4330 |               await itemWrapper.nth(i).click();
  4331 |             }
  4332 |           }
  4333 |           await this.addTestFromMainNavgation("Letter-Pattern Matching");
  4334 |           await this.page.waitForTimeout(1000);
  4335 |           for (let j = 1; j <= 5; j++) {
  4336 |             let currentItemDetails = await this.itemDetails.textContent();
  4337 |             if (currentItemDetails.includes("Introduction")) {
  4338 |               await this.page.waitForTimeout(1000);
  4339 |               await this.plainNextButtonOrEndButton.click();
  4340 |               await this.page.waitForTimeout(1000);
  4341 |             } else if (currentItemDetails.startsWith("Sample")) {
  4342 |               await this.page.waitForTimeout(1000);
  4343 |               await this.iDontKnowButton.click();
  4344 |               await this.plainNextButtonOrEndButton.click();
  4345 |               await this.page.waitForTimeout(1000);
  4346 |             }
  4347 |           }
  4348 |           await this.endSessionForScoreErrorCheck(examinee_ID, browser, testName);
  4349 |           await itemWrapper.nth(4).click();
  4350 |           await this.plainNextButtonOrEndButton.click();
  4351 |           return;
  4352 |         }
  4353 |       }  else if (typeOfTest.match(/Rerouting End Test scenario/i)) {
  4354 |         if ((testStemForm.match(/BLKROT.W5PA/) && /^Introduction (1|2|4)/.test(itemDetails)) || (testStemForm.match(/MATRCZ.W5PA/) && itemDetails.startsWith("Introduction"))) {
  4355 |           await this.activateTabletControlButton.click();
  4356 |           await this.videoPlayButton.click();
  4357 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  4358 |         } else if ((testStemForm.match(/VAL.W5PA/) && itemDetails.startsWith("Introduction"))) {
  4359 |           await this.examineeContentImg.hover();
  4360 |         } else if (itemDetails.startsWith("Sample")) {
  4361 |           await this.correctOptionButton.nth(0).click();
  4362 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  4363 |         } else if (itemDetails.includes("Item")) {
  4364 |            for (let i = 1; i <= logicIndex; i++) {
  4365 |             await this.correctOptionButton.nth(0).click();
  4366 |             await this.page.waitForTimeout(2000);
> 4367 |             await this.plainNextButtonOrEndButton.click();
       |                                                   ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  4368 |           } if (testStemForm.match(/ORLSMP.W5PA/) && itemDetails.startsWith("Introduction")) {
  4369 |             await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  4370 |             await this.plainNextButtonOrEndButton.click();
  4371 |           }
  4372 |           for (let j = 1; j < logicIndex; j++) {
  4373 |             await this.iDontKnowButton.click();
  4374 |             await this.page.waitForTimeout(2000);
  4375 |             await this.plainNextButtonOrEndButton.click();
  4376 |           }
  4377 |           await this.iDontKnowButton.click();
  4378 |           await this.leftNavIncorrectAnswerContainer.nth(2).click();
  4379 |           await this.page.mouse.move(300, 800);
  4380 |           await this.iDontKnowButton.click();
  4381 |           await this.correctOptionButton.nth(0).click();
  4382 |           await expect.soft(this.itemDetails1).toHaveText("Test Routing Change");
  4383 |           await this.continueButton.click();
  4384 |           await this.plainNextButtonOrEndButton.click();
  4385 |           for (let k = 1; k < index; k++) {
  4386 |             await this.iDontKnowButton.click();
  4387 |             await this.plainNextButtonOrEndButton.click();
  4388 |           }
  4389 |           await this.iDontKnowButton.click();
  4390 |         } else if (testStemForm === "VAL.W5PA") {
  4391 |           const itemWrapper = this.page.locator("//div[@class='option-wrapper']/button");
  4392 |           // Number of clicks per story
  4393 |           const storyClickCounts: Record<string, number> = {
  4394 |             "Story 1": 4,
  4395 |             "Story 2": 4,
  4396 |           };
  4397 |           const storyKey = Object.keys(storyClickCounts).find((story) =>
  4398 |             itemDetails.startsWith(story)
  4399 |           );
  4400 | 
  4401 |           if (storyKey) {
  4402 |             const count = storyClickCounts[storyKey];
  4403 | 
  4404 |             for (let i = 0; i < count; i++) {
  4405 |               if (storyKey === "Story 2" && i === 3) {
  4406 |                 // Handling for Story 2, 4th click
  4407 |                 await itemWrapper.nth(i).click();
  4408 |                 await this.leftNavBlockContainer.nth(0).click();
  4409 |                 await this.page.mouse.move(300, 800);
  4410 |                 await this.leftNavAllItems.nth(0).click();
  4411 |                 await itemWrapper.nth(4).click();
  4412 |                 await expect.soft(this.itemDetails1).toHaveText("Test Routing Change");
  4413 |                 await this.continueButton.click();
  4414 |               } else {
  4415 |                 await itemWrapper.nth(i).click();
  4416 |               }
  4417 |             }
  4418 |           }
  4419 |         }
  4420 |       }else if (typeOfTest.match(/VWKMEM Review mode Verification scenario/i)) {
  4421 |         for (let i = 1; i <= index; i++) {
  4422 |           await this.page.waitForTimeout(5000);
  4423 |           let itemDetails = await this.itemDetails.textContent();
  4424 |           if (itemDetails.match(/Sample Item (A|B) Presentation, Trial 1/i)) {
  4425 |             await this.page.waitForTimeout(2000);
  4426 |             await this.plainNextButtonOrEndButton.click();
  4427 |           } else if (itemDetails.match(/Sample Item (A|B) Response, Trial 1/i)) {
  4428 |             await this.page.waitForTimeout(2000);
  4429 |             await this.correctOptionButton.nth(0).click();
  4430 |             await this.page.waitForTimeout(2000);
  4431 |             await this.plainNextButtonOrEndButton.click();
  4432 |           }
  4433 |         }
  4434 |         await this.breakTheLogicOut();
  4435 |         await this.page.locator(`//span[starts-with(text(),'${examinee_ID}')]/ancestor::button`).click();
  4436 |         await this.reviewModeButton.click();
  4437 |         await this.page.waitForTimeout(5000);
  4438 |         await this.page.locator(`//div[text() = '${testName}']`).nth(1).click();
  4439 |         await this.page.waitForTimeout(2000);
  4440 |         for (let j = 1; j <= incorrectIndex; j++) {
  4441 |           await this.page.waitForTimeout(5000);
  4442 |           await this.leftNavAllItems.nth(j).click();
  4443 |           await this.page.mouse.move(100, 600);
  4444 |           let currentItemDetails = await this.itemDetails.textContent();
  4445 |           if (currentItemDetails.match(/Sample Item (A|B) Presentation, Trial 1/i) || currentItemDetails.match(/Sample Item (A|B) Presentation, Trial 2/i) || currentItemDetails.match(/Sample Item C Presentation/i)) {
  4446 |             await expect(this.examineeNotConnectedText).toBeVisible();
  4447 |             expect(await this.examineeNotConnectedText.textContent()).toContain("Examinee Not Connected");
  4448 |             await expect(this.backToReviewButton).toBeVisible();
  4449 |             await expect(this.backToReviewButton).toBeEnabled();
  4450 |           } else if (currentItemDetails.match(/Sample Item (A|B) Response, Trial 1/i)) {
  4451 |             await this.page.waitForTimeout(2000);
  4452 |             await this.correctOptionButton.nth(0).click();
  4453 |             await this.page.waitForTimeout(2000);
  4454 |             await this.correctOptionButton.nth(0).isEnabled();
  4455 |             await this.incorrectOptionButton.nth(0).isEnabled();
  4456 |             await this.page.waitForTimeout(2000);
  4457 |             await this.incorrectOptionButton.nth(0).click();
  4458 |           } else if (currentItemDetails.includes("Introduction") || currentItemDetails.includes("Demonstration") || currentItemDetails.includes("Distractor") || currentItemDetails.includes("Response") || currentItemDetails.includes("Practice")) {
  4459 |             await expect(this.examineeNotConnectedText).toBeVisible();
  4460 |             await expect(this.backToReviewButton).toBeVisible();
  4461 |           }
  4462 |         }
  4463 |         break;
  4464 |       } else if (typeOfTest.match(/UNDDIR Review mode Verification scenario/i)) {
  4465 |         for (let i = 1; i <= index; i++) {
  4466 |           let itemDetails = await this.itemDetails.textContent();
  4467 |           if (itemDetails.includes("Introduction") || itemDetails.includes("Presentation")) {
```