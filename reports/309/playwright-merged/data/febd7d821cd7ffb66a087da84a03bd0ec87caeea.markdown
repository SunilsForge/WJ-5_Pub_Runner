# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/LWIDNT_Multi_BC6.spec.ts >>  LWIDNT Rerouting and LeftNav >> Age 12 to Adult - LWIDNT 6 correct 6 incorrect then go back to bLock A and check next item for SSP6 Test Rerouting
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
              - heading "Hello 39Pw Aut25AH" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "39Pw Aut25AH" [ref=e10] [cursor=pointer]
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
                  - row "Begin assignment Jessie Brakus_1785602939616 for N65596A7925, Rebeca Jessie Brakus_1785602939616 More info 90 days ● In Progress ↩️ Resume Assignment Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Jessie Brakus_1785602939616 for N65596A7925, Rebeca" [ref=e75]:
                      - button "Begin assignment Jessie Brakus_1785602939616 for N65596A7925, Rebeca" [disabled] [ref=e76]:
                        - generic [ref=e77]: N65596A7925, Rebeca
                    - cell "Jessie Brakus_1785602939616 More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Jessie Brakus_1785602939616" [disabled] [ref=e80]:
                          - generic [ref=e81]: Jessie Brakus_1785602939616
                        - button "More info" [ref=e82]
                    - cell "90 days" [ref=e83]:
                      - button "90 days" [disabled] [ref=e84]
                    - cell "● In Progress ↩️ Resume Assignment" [ref=e85]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: In Progress
                        - text: ↩️ Resume Assignment
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row "Begin assignment Terrell Lueilwitz II_1785602590214 for N1108A16999, Nathanial Terrell Lueilwitz II_1785602590214 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Terrell Lueilwitz II_1785602590214 for N1108A16999, Nathanial" [ref=e93]:
                      - button "Begin assignment Terrell Lueilwitz II_1785602590214 for N1108A16999, Nathanial" [disabled] [ref=e94]:
                        - generic [ref=e95]: N1108A16999, Nathanial
                    - cell "Terrell Lueilwitz II_1785602590214 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Terrell Lueilwitz II_1785602590214" [disabled] [ref=e98]:
                          - generic [ref=e99]: Terrell Lueilwitz II_1785602590214
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
                  - row "Begin assignment Monique Thompson_1785602225695 for N45888A15627, Imogene Monique Thompson_1785602225695 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Monique Thompson_1785602225695 for N45888A15627, Imogene" [ref=e111]:
                      - button "Begin assignment Monique Thompson_1785602225695 for N45888A15627, Imogene" [disabled] [ref=e112]:
                        - generic [ref=e113]: N45888A15627, Imogene
                    - cell "Monique Thompson_1785602225695 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Monique Thompson_1785602225695" [disabled] [ref=e116]:
                          - generic [ref=e117]: Monique Thompson_1785602225695
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
                  - row "Begin assignment Carla Welch_1785591703635 for N5713A55752, Richie Carla Welch_1785591703635 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Carla Welch_1785591703635 for N5713A55752, Richie" [ref=e129]:
                      - button "Begin assignment Carla Welch_1785591703635 for N5713A55752, Richie" [disabled] [ref=e130]:
                        - generic [ref=e131]: N5713A55752, Richie
                    - cell "Carla Welch_1785591703635 More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Carla Welch_1785591703635" [disabled] [ref=e134]:
                          - generic [ref=e135]: Carla Welch_1785591703635
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
                  - row "Begin assignment Dr. Clifford Schamberger_1785591218496 for N92768A54586, Claudie Dr. Clifford Schamberger_1785591218496 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Dr. Clifford Schamberger_1785591218496 for N92768A54586, Claudie" [ref=e147]:
                      - button "Begin assignment Dr. Clifford Schamberger_1785591218496 for N92768A54586, Claudie" [disabled] [ref=e148]:
                        - generic [ref=e149]: N92768A54586, Claudie
                    - cell "Dr. Clifford Schamberger_1785591218496 More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Dr. Clifford Schamberger_1785591218496" [disabled] [ref=e152]:
                          - generic [ref=e153]: Dr. Clifford Schamberger_1785591218496
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
                  - row "Begin assignment Kim Smitham_1785589939470 for N33264A37991, Linnie Kim Smitham_1785589939470 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Kim Smitham_1785589939470 for N33264A37991, Linnie" [ref=e165]:
                      - button "Begin assignment Kim Smitham_1785589939470 for N33264A37991, Linnie" [disabled] [ref=e166]:
                        - generic [ref=e167]: N33264A37991, Linnie
                    - cell "Kim Smitham_1785589939470 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Kim Smitham_1785589939470" [disabled] [ref=e170]:
                          - generic [ref=e171]: Kim Smitham_1785589939470
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
                  - row "Begin assignment Tom Legros_1785580584353 for N93111A40916, Raymond Tom Legros_1785580584353 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Tom Legros_1785580584353 for N93111A40916, Raymond" [ref=e183]:
                      - button "Begin assignment Tom Legros_1785580584353 for N93111A40916, Raymond" [disabled] [ref=e184]:
                        - generic [ref=e185]: N93111A40916, Raymond
                    - cell "Tom Legros_1785580584353 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Tom Legros_1785580584353" [disabled] [ref=e188]:
                          - generic [ref=e189]: Tom Legros_1785580584353
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
                  - row "Begin assignment Warren Cole_1785580044588 for N25280A83360, Sophia Warren Cole_1785580044588 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Warren Cole_1785580044588 for N25280A83360, Sophia" [ref=e201]:
                      - button "Begin assignment Warren Cole_1785580044588 for N25280A83360, Sophia" [disabled] [ref=e202]:
                        - generic [ref=e203]: N25280A83360, Sophia
                    - cell "Warren Cole_1785580044588 More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Warren Cole_1785580044588" [disabled] [ref=e206]:
                          - generic [ref=e207]: Warren Cole_1785580044588
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
                  - row "Begin assignment Mrs. Florence Witting_1785579777588 for N57050A72011, Adrien Mrs. Florence Witting_1785579777588 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Florence Witting_1785579777588 for N57050A72011, Adrien" [ref=e219]:
                      - button "Begin assignment Mrs. Florence Witting_1785579777588 for N57050A72011, Adrien" [disabled] [ref=e220]:
                        - generic [ref=e221]: N57050A72011, Adrien
                    - cell "Mrs. Florence Witting_1785579777588 More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Mrs. Florence Witting_1785579777588" [disabled] [ref=e224]:
                          - generic [ref=e225]: Mrs. Florence Witting_1785579777588
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
                  - row "Begin assignment Julia Reilly-Feeney_1785579435602 (+1 more) for N69385A56669, Lucile Julia Reilly-Feeney_1785579435602 (+1 more) More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Julia Reilly-Feeney_1785579435602 (+1 more) for N69385A56669, Lucile" [ref=e237]:
                      - button "Begin assignment Julia Reilly-Feeney_1785579435602 (+1 more) for N69385A56669, Lucile" [disabled] [ref=e238]:
                        - generic [ref=e239]: N69385A56669, Lucile
                    - cell "Julia Reilly-Feeney_1785579435602 (+1 more) More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Julia Reilly-Feeney_1785579435602 (+1 more)" [disabled] [ref=e242]:
                          - generic [ref=e243]: Julia Reilly-Feeney_1785579435602 (+1 more)
                        - button "More info" [ref=e244]
                    - cell "90 days" [ref=e245]:
                      - button "90 days" [disabled] [ref=e246]
                    - cell "● In Progress" [ref=e247]:
                      - button "● In Progress" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row "Begin assignment Felipe Smith_1785579191821 for N64303A61165, Ward Felipe Smith_1785579191821 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Felipe Smith_1785579191821 for N64303A61165, Ward" [ref=e255]:
                      - button "Begin assignment Felipe Smith_1785579191821 for N64303A61165, Ward" [disabled] [ref=e256]:
                        - generic [ref=e257]: N64303A61165, Ward
                    - cell "Felipe Smith_1785579191821 More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Felipe Smith_1785579191821" [disabled] [ref=e260]:
                          - generic [ref=e261]: Felipe Smith_1785579191821
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
                  - row "Begin assignment Vicky Schoen_1785578208038 for N6646A47452, Gino Vicky Schoen_1785578208038 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Vicky Schoen_1785578208038 for N6646A47452, Gino" [ref=e273]:
                      - button "Begin assignment Vicky Schoen_1785578208038 for N6646A47452, Gino" [disabled] [ref=e274]:
                        - generic [ref=e275]: N6646A47452, Gino
                    - cell "Vicky Schoen_1785578208038 More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Vicky Schoen_1785578208038" [disabled] [ref=e278]:
                          - generic [ref=e279]: Vicky Schoen_1785578208038
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
                  - row "Begin assignment Kurt Cassin_1785577792486 for N26635A59817, Kiel Kurt Cassin_1785577792486 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Kurt Cassin_1785577792486 for N26635A59817, Kiel" [ref=e291]:
                      - button "Begin assignment Kurt Cassin_1785577792486 for N26635A59817, Kiel" [disabled] [ref=e292]:
                        - generic [ref=e293]: N26635A59817, Kiel
                    - cell "Kurt Cassin_1785577792486 More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Kurt Cassin_1785577792486" [disabled] [ref=e296]:
                          - generic [ref=e297]: Kurt Cassin_1785577792486
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
                  - row "Begin assignment Mr. Horace Schiller_1785577518972 for N36267A67915, Nathanael Mr. Horace Schiller_1785577518972 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e308] [cursor=pointer]:
                    - cell "Begin assignment Mr. Horace Schiller_1785577518972 for N36267A67915, Nathanael" [ref=e309]:
                      - button "Begin assignment Mr. Horace Schiller_1785577518972 for N36267A67915, Nathanael" [disabled] [ref=e310]:
                        - generic [ref=e311]: N36267A67915, Nathanael
                    - cell "Mr. Horace Schiller_1785577518972 More info" [ref=e312]:
                      - generic [ref=e313]:
                        - button "Mr. Horace Schiller_1785577518972" [disabled] [ref=e314]:
                          - generic [ref=e315]: Mr. Horace Schiller_1785577518972
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
                  - row "Begin assignment Henry Littel Jr._1785577247866 for N23794A50723, Katlynn Henry Littel Jr._1785577247866 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e326] [cursor=pointer]:
                    - cell "Begin assignment Henry Littel Jr._1785577247866 for N23794A50723, Katlynn" [ref=e327]:
                      - button "Begin assignment Henry Littel Jr._1785577247866 for N23794A50723, Katlynn" [disabled] [ref=e328]:
                        - generic [ref=e329]: N23794A50723, Katlynn
                    - cell "Henry Littel Jr._1785577247866 More info" [ref=e330]:
                      - generic [ref=e331]:
                        - button "Henry Littel Jr._1785577247866" [disabled] [ref=e332]:
                          - generic [ref=e333]: Henry Littel Jr._1785577247866
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
                  - row "Begin assignment Edgar Lehner_1785573631490 for N86157A23075, Lesley Edgar Lehner_1785573631490 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e344] [cursor=pointer]:
                    - cell "Begin assignment Edgar Lehner_1785573631490 for N86157A23075, Lesley" [ref=e345]:
                      - button "Begin assignment Edgar Lehner_1785573631490 for N86157A23075, Lesley" [disabled] [ref=e346]:
                        - generic [ref=e347]: N86157A23075, Lesley
                    - cell "Edgar Lehner_1785573631490 More info" [ref=e348]:
                      - generic [ref=e349]:
                        - button "Edgar Lehner_1785573631490" [disabled] [ref=e350]:
                          - generic [ref=e351]: Edgar Lehner_1785573631490
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
                  - row "Begin assignment Sue Schmidt V_1785573356351 for N6442A8238, Brice Sue Schmidt V_1785573356351 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e362] [cursor=pointer]:
                    - cell "Begin assignment Sue Schmidt V_1785573356351 for N6442A8238, Brice" [ref=e363]:
                      - button "Begin assignment Sue Schmidt V_1785573356351 for N6442A8238, Brice" [disabled] [ref=e364]:
                        - generic [ref=e365]: N6442A8238, Brice
                    - cell "Sue Schmidt V_1785573356351 More info" [ref=e366]:
                      - generic [ref=e367]:
                        - button "Sue Schmidt V_1785573356351" [disabled] [ref=e368]:
                          - generic [ref=e369]: Sue Schmidt V_1785573356351
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
                  - row "Begin assignment Verna Heaney_1785572994257 for N93699A23147, Rowan Verna Heaney_1785572994257 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e380] [cursor=pointer]:
                    - cell "Begin assignment Verna Heaney_1785572994257 for N93699A23147, Rowan" [ref=e381]:
                      - button "Begin assignment Verna Heaney_1785572994257 for N93699A23147, Rowan" [disabled] [ref=e382]:
                        - generic [ref=e383]: N93699A23147, Rowan
                    - cell "Verna Heaney_1785572994257 More info" [ref=e384]:
                      - generic [ref=e385]:
                        - button "Verna Heaney_1785572994257" [disabled] [ref=e386]:
                          - generic [ref=e387]: Verna Heaney_1785572994257
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
                  - row "Begin assignment Hazel Legros_1785572213301 (+1 more) for N28798A86784, Sadye Hazel Legros_1785572213301 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e398] [cursor=pointer]:
                    - cell "Begin assignment Hazel Legros_1785572213301 (+1 more) for N28798A86784, Sadye" [ref=e399]:
                      - button "Begin assignment Hazel Legros_1785572213301 (+1 more) for N28798A86784, Sadye" [disabled] [ref=e400]:
                        - generic [ref=e401]: N28798A86784, Sadye
                    - cell "Hazel Legros_1785572213301 (+1 more) More info" [ref=e402]:
                      - generic [ref=e403]:
                        - button "Hazel Legros_1785572213301 (+1 more)" [disabled] [ref=e404]:
                          - generic [ref=e405]: Hazel Legros_1785572213301 (+1 more)
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
                  - row "Begin assignment Lance Rohan_1785571939358 for N50154A85722, Lesley Lance Rohan_1785571939358 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e416] [cursor=pointer]:
                    - cell "Begin assignment Lance Rohan_1785571939358 for N50154A85722, Lesley" [ref=e417]:
                      - button "Begin assignment Lance Rohan_1785571939358 for N50154A85722, Lesley" [disabled] [ref=e418]:
                        - generic [ref=e419]: N50154A85722, Lesley
                    - cell "Lance Rohan_1785571939358 More info" [ref=e420]:
                      - generic [ref=e421]:
                        - button "Lance Rohan_1785571939358" [disabled] [ref=e422]:
                          - generic [ref=e423]: Lance Rohan_1785571939358
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
                  - row "Begin assignment Gail Langworth_1785571557061 for N41891A25600, Enid Gail Langworth_1785571557061 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e434] [cursor=pointer]:
                    - cell "Begin assignment Gail Langworth_1785571557061 for N41891A25600, Enid" [ref=e435]:
                      - button "Begin assignment Gail Langworth_1785571557061 for N41891A25600, Enid" [disabled] [ref=e436]:
                        - generic [ref=e437]: N41891A25600, Enid
                    - cell "Gail Langworth_1785571557061 More info" [ref=e438]:
                      - generic [ref=e439]:
                        - button "Gail Langworth_1785571557061" [disabled] [ref=e440]:
                          - generic [ref=e441]: Gail Langworth_1785571557061
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
                  - row "Begin assignment Walter Fisher V_1785571313205 for N23137A57924, Velda Walter Fisher V_1785571313205 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e452] [cursor=pointer]:
                    - cell "Begin assignment Walter Fisher V_1785571313205 for N23137A57924, Velda" [ref=e453]:
                      - button "Begin assignment Walter Fisher V_1785571313205 for N23137A57924, Velda" [disabled] [ref=e454]:
                        - generic [ref=e455]: N23137A57924, Velda
                    - cell "Walter Fisher V_1785571313205 More info" [ref=e456]:
                      - generic [ref=e457]:
                        - button "Walter Fisher V_1785571313205" [disabled] [ref=e458]:
                          - generic [ref=e459]: Walter Fisher V_1785571313205
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
                  - row "Begin assignment Miss Alexandra Prohaska_1785570983567 (+1 more) for N31422A92897, Delta Miss Alexandra Prohaska_1785570983567 (+1 more) More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e470] [cursor=pointer]:
                    - cell "Begin assignment Miss Alexandra Prohaska_1785570983567 (+1 more) for N31422A92897, Delta" [ref=e471]:
                      - button "Begin assignment Miss Alexandra Prohaska_1785570983567 (+1 more) for N31422A92897, Delta" [disabled] [ref=e472]:
                        - generic [ref=e473]: N31422A92897, Delta
                    - cell "Miss Alexandra Prohaska_1785570983567 (+1 more) More info" [ref=e474]:
                      - generic [ref=e475]:
                        - button "Miss Alexandra Prohaska_1785570983567 (+1 more)" [disabled] [ref=e476]:
                          - generic [ref=e477]: Miss Alexandra Prohaska_1785570983567 (+1 more)
                        - button "More info" [ref=e478]
                    - cell "90 days" [ref=e479]:
                      - button "90 days" [disabled] [ref=e480]
                    - cell "● In Progress" [ref=e481]:
                      - button "● In Progress" [disabled] [ref=e482]:
                        - generic [ref=e483]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e484]:
                      - button "Edit Assignment" [disabled] [ref=e485]
                      - button "Add Tests" [disabled] [ref=e486]
                      - button "Assignment actions" [ref=e487]
                  - row "Begin assignment Leigh Douglas_1785558268240 for N69664A46786, Sarai Leigh Douglas_1785558268240 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e488] [cursor=pointer]:
                    - cell "Begin assignment Leigh Douglas_1785558268240 for N69664A46786, Sarai" [ref=e489]:
                      - button "Begin assignment Leigh Douglas_1785558268240 for N69664A46786, Sarai" [disabled] [ref=e490]:
                        - generic [ref=e491]: N69664A46786, Sarai
                    - cell "Leigh Douglas_1785558268240 More info" [ref=e492]:
                      - generic [ref=e493]:
                        - button "Leigh Douglas_1785558268240" [disabled] [ref=e494]:
                          - generic [ref=e495]: Leigh Douglas_1785558268240
                        - button "More info" [ref=e496]
                    - cell "89 days" [ref=e497]:
                      - button "89 days" [disabled] [ref=e498]
                    - cell "● Submitted" [ref=e499]:
                      - button "● Submitted" [disabled] [ref=e500]:
                        - generic [ref=e501]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e502]:
                      - button "Edit Assignment" [disabled] [ref=e503]
                      - button "Add Tests" [disabled] [ref=e504]
                      - button "Assignment actions" [ref=e505]
                  - row "Begin assignment Allen Leuschke_1785558027541 for N36794A25061, Adele Allen Leuschke_1785558027541 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e506] [cursor=pointer]:
                    - cell "Begin assignment Allen Leuschke_1785558027541 for N36794A25061, Adele" [ref=e507]:
                      - button "Begin assignment Allen Leuschke_1785558027541 for N36794A25061, Adele" [disabled] [ref=e508]:
                        - generic [ref=e509]: N36794A25061, Adele
                    - cell "Allen Leuschke_1785558027541 More info" [ref=e510]:
                      - generic [ref=e511]:
                        - button "Allen Leuschke_1785558027541" [disabled] [ref=e512]:
                          - generic [ref=e513]: Allen Leuschke_1785558027541
                        - button "More info" [ref=e514]
                    - cell "89 days" [ref=e515]:
                      - button "89 days" [disabled] [ref=e516]
                    - cell "● Submitted" [ref=e517]:
                      - button "● Submitted" [disabled] [ref=e518]:
                        - generic [ref=e519]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e520]:
                      - button "Edit Assignment" [disabled] [ref=e521]
                      - button "Add Tests" [disabled] [ref=e522]
                      - button "Assignment actions" [ref=e523]
                  - row "Begin assignment Calvin Gleason_1785557665144 for N55906A97802, Naomie Calvin Gleason_1785557665144 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e524] [cursor=pointer]:
                    - cell "Begin assignment Calvin Gleason_1785557665144 for N55906A97802, Naomie" [ref=e525]:
                      - button "Begin assignment Calvin Gleason_1785557665144 for N55906A97802, Naomie" [disabled] [ref=e526]:
                        - generic [ref=e527]: N55906A97802, Naomie
                    - cell "Calvin Gleason_1785557665144 More info" [ref=e528]:
                      - generic [ref=e529]:
                        - button "Calvin Gleason_1785557665144" [disabled] [ref=e530]:
                          - generic [ref=e531]: Calvin Gleason_1785557665144
                        - button "More info" [ref=e532]
                    - cell "89 days" [ref=e533]:
                      - button "89 days" [disabled] [ref=e534]
                    - cell "● Submitted" [ref=e535]:
                      - button "● Submitted" [disabled] [ref=e536]:
                        - generic [ref=e537]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e538]:
                      - button "Edit Assignment" [disabled] [ref=e539]
                      - button "Add Tests" [disabled] [ref=e540]
                      - button "Assignment actions" [ref=e541]
                  - row "Begin assignment Wilbert Harris_1785557397190 for N95451A65007, Margie Wilbert Harris_1785557397190 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e542] [cursor=pointer]:
                    - cell "Begin assignment Wilbert Harris_1785557397190 for N95451A65007, Margie" [ref=e543]:
                      - button "Begin assignment Wilbert Harris_1785557397190 for N95451A65007, Margie" [disabled] [ref=e544]:
                        - generic [ref=e545]: N95451A65007, Margie
                    - cell "Wilbert Harris_1785557397190 More info" [ref=e546]:
                      - generic [ref=e547]:
                        - button "Wilbert Harris_1785557397190" [disabled] [ref=e548]:
                          - generic [ref=e549]: Wilbert Harris_1785557397190
                        - button "More info" [ref=e550]
                    - cell "89 days" [ref=e551]:
                      - button "89 days" [disabled] [ref=e552]
                    - cell "● Submitted" [ref=e553]:
                      - button "● Submitted" [disabled] [ref=e554]:
                        - generic [ref=e555]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e556]:
                      - button "Edit Assignment" [disabled] [ref=e557]
                      - button "Add Tests" [disabled] [ref=e558]
                      - button "Assignment actions" [ref=e559]
                  - row "Begin assignment Mrs. Jan Jerde_1785557158680 for N97842A77591, Angie Mrs. Jan Jerde_1785557158680 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e560] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Jan Jerde_1785557158680 for N97842A77591, Angie" [ref=e561]:
                      - button "Begin assignment Mrs. Jan Jerde_1785557158680 for N97842A77591, Angie" [disabled] [ref=e562]:
                        - generic [ref=e563]: N97842A77591, Angie
                    - cell "Mrs. Jan Jerde_1785557158680 More info" [ref=e564]:
                      - generic [ref=e565]:
                        - button "Mrs. Jan Jerde_1785557158680" [disabled] [ref=e566]:
                          - generic [ref=e567]: Mrs. Jan Jerde_1785557158680
                        - button "More info" [ref=e568]
                    - cell "89 days" [ref=e569]:
                      - button "89 days" [disabled] [ref=e570]
                    - cell "● Submitted" [ref=e571]:
                      - button "● Submitted" [disabled] [ref=e572]:
                        - generic [ref=e573]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e574]:
                      - button "Edit Assignment" [disabled] [ref=e575]
                      - button "Add Tests" [disabled] [ref=e576]
                      - button "Assignment actions" [ref=e577]
                  - row "Begin assignment Jeffrey Ritchie_1785555302143 (+1 more) for N40255A76419, Julian Jeffrey Ritchie_1785555302143 (+1 more) More info 89 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e578] [cursor=pointer]:
                    - cell "Begin assignment Jeffrey Ritchie_1785555302143 (+1 more) for N40255A76419, Julian" [ref=e579]:
                      - button "Begin assignment Jeffrey Ritchie_1785555302143 (+1 more) for N40255A76419, Julian" [disabled] [ref=e580]:
                        - generic [ref=e581]: N40255A76419, Julian
                    - cell "Jeffrey Ritchie_1785555302143 (+1 more) More info" [ref=e582]:
                      - generic [ref=e583]:
                        - button "Jeffrey Ritchie_1785555302143 (+1 more)" [disabled] [ref=e584]:
                          - generic [ref=e585]: Jeffrey Ritchie_1785555302143 (+1 more)
                        - button "More info" [ref=e586]
                    - cell "89 days" [ref=e587]:
                      - button "89 days" [disabled] [ref=e588]
                    - cell "● In Progress" [ref=e589]:
                      - button "● In Progress" [disabled] [ref=e590]:
                        - generic [ref=e591]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e592]:
                      - button "Edit Assignment" [disabled] [ref=e593]
                      - button "Add Tests" [disabled] [ref=e594]
                      - button "Assignment actions" [ref=e595]
                  - row "Begin assignment Frankie Johns_1785555024605 for N87399A57466, Rahul Frankie Johns_1785555024605 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e596] [cursor=pointer]:
                    - cell "Begin assignment Frankie Johns_1785555024605 for N87399A57466, Rahul" [ref=e597]:
                      - button "Begin assignment Frankie Johns_1785555024605 for N87399A57466, Rahul" [disabled] [ref=e598]:
                        - generic [ref=e599]: N87399A57466, Rahul
                    - cell "Frankie Johns_1785555024605 More info" [ref=e600]:
                      - generic [ref=e601]:
                        - button "Frankie Johns_1785555024605" [disabled] [ref=e602]:
                          - generic [ref=e603]: Frankie Johns_1785555024605
                        - button "More info" [ref=e604]
                    - cell "89 days" [ref=e605]:
                      - button "89 days" [disabled] [ref=e606]
                    - cell "● Submitted" [ref=e607]:
                      - button "● Submitted" [disabled] [ref=e608]:
                        - generic [ref=e609]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e610]:
                      - button "Edit Assignment" [disabled] [ref=e611]
                      - button "Add Tests" [disabled] [ref=e612]
                      - button "Assignment actions" [ref=e613]
                  - row "Begin assignment Edward Prohaska Sr._1785554455193 for N25082A19099, Era Edward Prohaska Sr._1785554455193 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e614] [cursor=pointer]:
                    - cell "Begin assignment Edward Prohaska Sr._1785554455193 for N25082A19099, Era" [ref=e615]:
                      - button "Begin assignment Edward Prohaska Sr._1785554455193 for N25082A19099, Era" [disabled] [ref=e616]:
                        - generic [ref=e617]: N25082A19099, Era
                    - cell "Edward Prohaska Sr._1785554455193 More info" [ref=e618]:
                      - generic [ref=e619]:
                        - button "Edward Prohaska Sr._1785554455193" [disabled] [ref=e620]:
                          - generic [ref=e621]: Edward Prohaska Sr._1785554455193
                        - button "More info" [ref=e622]
                    - cell "89 days" [ref=e623]:
                      - button "89 days" [disabled] [ref=e624]
                    - cell "● Submitted" [ref=e625]:
                      - button "● Submitted" [disabled] [ref=e626]:
                        - generic [ref=e627]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e628]:
                      - button "Edit Assignment" [disabled] [ref=e629]
                      - button "Add Tests" [disabled] [ref=e630]
                      - button "Assignment actions" [ref=e631]
                  - row "Begin assignment Neil Abbott_1784738764418 for N98158A50794, Dereck Neil Abbott_1784738764418 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e632] [cursor=pointer]:
                    - cell "Begin assignment Neil Abbott_1784738764418 for N98158A50794, Dereck" [ref=e633]:
                      - button "Begin assignment Neil Abbott_1784738764418 for N98158A50794, Dereck" [disabled] [ref=e634]:
                        - generic [ref=e635]: N98158A50794, Dereck
                    - cell "Neil Abbott_1784738764418 More info" [ref=e636]:
                      - generic [ref=e637]:
                        - button "Neil Abbott_1784738764418" [disabled] [ref=e638]:
                          - generic [ref=e639]: Neil Abbott_1784738764418
                        - button "More info" [ref=e640]
                    - cell "80 days" [ref=e641]:
                      - button "80 days" [disabled] [ref=e642]
                    - cell "● Submitted" [ref=e643]:
                      - button "● Submitted" [disabled] [ref=e644]:
                        - generic [ref=e645]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e646]:
                      - button "Edit Assignment" [disabled] [ref=e647]
                      - button "Add Tests" [disabled] [ref=e648]
                      - button "Assignment actions" [ref=e649]
                  - row "Begin assignment Diane Bartell_1784738517862 for N89900A52069, Hosea Diane Bartell_1784738517862 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e650] [cursor=pointer]:
                    - cell "Begin assignment Diane Bartell_1784738517862 for N89900A52069, Hosea" [ref=e651]:
                      - button "Begin assignment Diane Bartell_1784738517862 for N89900A52069, Hosea" [disabled] [ref=e652]:
                        - generic [ref=e653]: N89900A52069, Hosea
                    - cell "Diane Bartell_1784738517862 More info" [ref=e654]:
                      - generic [ref=e655]:
                        - button "Diane Bartell_1784738517862" [disabled] [ref=e656]:
                          - generic [ref=e657]: Diane Bartell_1784738517862
                        - button "More info" [ref=e658]
                    - cell "80 days" [ref=e659]:
                      - button "80 days" [disabled] [ref=e660]
                    - cell "● Submitted" [ref=e661]:
                      - button "● Submitted" [disabled] [ref=e662]:
                        - generic [ref=e663]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e664]:
                      - button "Edit Assignment" [disabled] [ref=e665]
                      - button "Add Tests" [disabled] [ref=e666]
                      - button "Assignment actions" [ref=e667]
                  - row "Begin assignment Max Russel_1784738268422 for N90765A22864, Rudolph Max Russel_1784738268422 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e668] [cursor=pointer]:
                    - cell "Begin assignment Max Russel_1784738268422 for N90765A22864, Rudolph" [ref=e669]:
                      - button "Begin assignment Max Russel_1784738268422 for N90765A22864, Rudolph" [disabled] [ref=e670]:
                        - generic [ref=e671]: N90765A22864, Rudolph
                    - cell "Max Russel_1784738268422 More info" [ref=e672]:
                      - generic [ref=e673]:
                        - button "Max Russel_1784738268422" [disabled] [ref=e674]:
                          - generic [ref=e675]: Max Russel_1784738268422
                        - button "More info" [ref=e676]
                    - cell "80 days" [ref=e677]:
                      - button "80 days" [disabled] [ref=e678]
                    - cell "● Submitted" [ref=e679]:
                      - button "● Submitted" [disabled] [ref=e680]:
                        - generic [ref=e681]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e682]:
                      - button "Edit Assignment" [disabled] [ref=e683]
                      - button "Add Tests" [disabled] [ref=e684]
                      - button "Assignment actions" [ref=e685]
                  - row "Begin assignment Jody Crona_1784737955799 for N76957A59508, Jettie Jody Crona_1784737955799 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e686] [cursor=pointer]:
                    - cell "Begin assignment Jody Crona_1784737955799 for N76957A59508, Jettie" [ref=e687]:
                      - button "Begin assignment Jody Crona_1784737955799 for N76957A59508, Jettie" [disabled] [ref=e688]:
                        - generic [ref=e689]: N76957A59508, Jettie
                    - cell "Jody Crona_1784737955799 More info" [ref=e690]:
                      - generic [ref=e691]:
                        - button "Jody Crona_1784737955799" [disabled] [ref=e692]:
                          - generic [ref=e693]: Jody Crona_1784737955799
                        - button "More info" [ref=e694]
                    - cell "80 days" [ref=e695]:
                      - button "80 days" [disabled] [ref=e696]
                    - cell "● Submitted" [ref=e697]:
                      - button "● Submitted" [disabled] [ref=e698]:
                        - generic [ref=e699]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e700]:
                      - button "Edit Assignment" [disabled] [ref=e701]
                      - button "Add Tests" [disabled] [ref=e702]
                      - button "Assignment actions" [ref=e703]
                  - row "Begin assignment Paula Crooks_1784737638450 for N11141A66230, Larry Paula Crooks_1784737638450 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e704] [cursor=pointer]:
                    - cell "Begin assignment Paula Crooks_1784737638450 for N11141A66230, Larry" [ref=e705]:
                      - button "Begin assignment Paula Crooks_1784737638450 for N11141A66230, Larry" [disabled] [ref=e706]:
                        - generic [ref=e707]: N11141A66230, Larry
                    - cell "Paula Crooks_1784737638450 More info" [ref=e708]:
                      - generic [ref=e709]:
                        - button "Paula Crooks_1784737638450" [disabled] [ref=e710]:
                          - generic [ref=e711]: Paula Crooks_1784737638450
                        - button "More info" [ref=e712]
                    - cell "80 days" [ref=e713]:
                      - button "80 days" [disabled] [ref=e714]
                    - cell "● Submitted" [ref=e715]:
                      - button "● Submitted" [disabled] [ref=e716]:
                        - generic [ref=e717]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e718]:
                      - button "Edit Assignment" [disabled] [ref=e719]
                      - button "Add Tests" [disabled] [ref=e720]
                      - button "Assignment actions" [ref=e721]
                  - row "Begin assignment Antoinette Harber_1784737309127 for N77776A28734, Mark Antoinette Harber_1784737309127 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e722] [cursor=pointer]:
                    - cell "Begin assignment Antoinette Harber_1784737309127 for N77776A28734, Mark" [ref=e723]:
                      - button "Begin assignment Antoinette Harber_1784737309127 for N77776A28734, Mark" [disabled] [ref=e724]:
                        - generic [ref=e725]: N77776A28734, Mark
                    - cell "Antoinette Harber_1784737309127 More info" [ref=e726]:
                      - generic [ref=e727]:
                        - button "Antoinette Harber_1784737309127" [disabled] [ref=e728]:
                          - generic [ref=e729]: Antoinette Harber_1784737309127
                        - button "More info" [ref=e730]
                    - cell "80 days" [ref=e731]:
                      - button "80 days" [disabled] [ref=e732]
                    - cell "● Submitted" [ref=e733]:
                      - button "● Submitted" [disabled] [ref=e734]:
                        - generic [ref=e735]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e736]:
                      - button "Edit Assignment" [disabled] [ref=e737]
                      - button "Add Tests" [disabled] [ref=e738]
                      - button "Assignment actions" [ref=e739]
                  - row "Begin assignment Dolores Predovic_1784736954229 for N92074A86094, Jarod Dolores Predovic_1784736954229 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e740] [cursor=pointer]:
                    - cell "Begin assignment Dolores Predovic_1784736954229 for N92074A86094, Jarod" [ref=e741]:
                      - button "Begin assignment Dolores Predovic_1784736954229 for N92074A86094, Jarod" [disabled] [ref=e742]:
                        - generic [ref=e743]: N92074A86094, Jarod
                    - cell "Dolores Predovic_1784736954229 More info" [ref=e744]:
                      - generic [ref=e745]:
                        - button "Dolores Predovic_1784736954229" [disabled] [ref=e746]:
                          - generic [ref=e747]: Dolores Predovic_1784736954229
                        - button "More info" [ref=e748]
                    - cell "80 days" [ref=e749]:
                      - button "80 days" [disabled] [ref=e750]
                    - cell "● Submitted" [ref=e751]:
                      - button "● Submitted" [disabled] [ref=e752]:
                        - generic [ref=e753]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e754]:
                      - button "Edit Assignment" [disabled] [ref=e755]
                      - button "Add Tests" [disabled] [ref=e756]
                      - button "Assignment actions" [ref=e757]
                  - row "Begin assignment Matthew Schowalter_1784736952555 for N25054A29277, Wilhelmine Matthew Schowalter_1784736952555 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e758] [cursor=pointer]:
                    - cell "Begin assignment Matthew Schowalter_1784736952555 for N25054A29277, Wilhelmine" [ref=e759]:
                      - button "Begin assignment Matthew Schowalter_1784736952555 for N25054A29277, Wilhelmine" [disabled] [ref=e760]:
                        - generic [ref=e761]: N25054A29277, Wilhelmine
                    - cell "Matthew Schowalter_1784736952555 More info" [ref=e762]:
                      - generic [ref=e763]:
                        - button "Matthew Schowalter_1784736952555" [disabled] [ref=e764]:
                          - generic [ref=e765]: Matthew Schowalter_1784736952555
                        - button "More info" [ref=e766]
                    - cell "80 days" [ref=e767]:
                      - button "80 days" [disabled] [ref=e768]
                    - cell "● Submitted" [ref=e769]:
                      - button "● Submitted" [disabled] [ref=e770]:
                        - generic [ref=e771]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e772]:
                      - button "Edit Assignment" [disabled] [ref=e773]
                      - button "Add Tests" [disabled] [ref=e774]
                      - button "Assignment actions" [ref=e775]
                  - row "Begin assignment Katie Cummings_1784736686091 for N16223A57812, Ardella Katie Cummings_1784736686091 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e776] [cursor=pointer]:
                    - cell "Begin assignment Katie Cummings_1784736686091 for N16223A57812, Ardella" [ref=e777]:
                      - button "Begin assignment Katie Cummings_1784736686091 for N16223A57812, Ardella" [disabled] [ref=e778]:
                        - generic [ref=e779]: N16223A57812, Ardella
                    - cell "Katie Cummings_1784736686091 More info" [ref=e780]:
                      - generic [ref=e781]:
                        - button "Katie Cummings_1784736686091" [disabled] [ref=e782]:
                          - generic [ref=e783]: Katie Cummings_1784736686091
                        - button "More info" [ref=e784]
                    - cell "80 days" [ref=e785]:
                      - button "80 days" [disabled] [ref=e786]
                    - cell "● Submitted" [ref=e787]:
                      - button "● Submitted" [disabled] [ref=e788]:
                        - generic [ref=e789]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e790]:
                      - button "Edit Assignment" [disabled] [ref=e791]
                      - button "Add Tests" [disabled] [ref=e792]
                      - button "Assignment actions" [ref=e793]
                  - row "Begin assignment Tasha McDermott_1784736447915 for N96217A21933, Tate Tasha McDermott_1784736447915 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e794] [cursor=pointer]:
                    - cell "Begin assignment Tasha McDermott_1784736447915 for N96217A21933, Tate" [ref=e795]:
                      - button "Begin assignment Tasha McDermott_1784736447915 for N96217A21933, Tate" [disabled] [ref=e796]:
                        - generic [ref=e797]: N96217A21933, Tate
                    - cell "Tasha McDermott_1784736447915 More info" [ref=e798]:
                      - generic [ref=e799]:
                        - button "Tasha McDermott_1784736447915" [disabled] [ref=e800]:
                          - generic [ref=e801]: Tasha McDermott_1784736447915
                        - button "More info" [ref=e802]
                    - cell "80 days" [ref=e803]:
                      - button "80 days" [disabled] [ref=e804]
                    - cell "● Submitted" [ref=e805]:
                      - button "● Submitted" [disabled] [ref=e806]:
                        - generic [ref=e807]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e808]:
                      - button "Edit Assignment" [disabled] [ref=e809]
                      - button "Add Tests" [disabled] [ref=e810]
                      - button "Assignment actions" [ref=e811]
                  - row "Begin assignment Brett Carter_1784736025547 for N9073A5863, Fiona Brett Carter_1784736025547 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e812] [cursor=pointer]:
                    - cell "Begin assignment Brett Carter_1784736025547 for N9073A5863, Fiona" [ref=e813]:
                      - button "Begin assignment Brett Carter_1784736025547 for N9073A5863, Fiona" [disabled] [ref=e814]:
                        - generic [ref=e815]: N9073A5863, Fiona
                    - cell "Brett Carter_1784736025547 More info" [ref=e816]:
                      - generic [ref=e817]:
                        - button "Brett Carter_1784736025547" [disabled] [ref=e818]:
                          - generic [ref=e819]: Brett Carter_1784736025547
                        - button "More info" [ref=e820]
                    - cell "80 days" [ref=e821]:
                      - button "80 days" [disabled] [ref=e822]
                    - cell "● Submitted" [ref=e823]:
                      - button "● Submitted" [disabled] [ref=e824]:
                        - generic [ref=e825]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e826]:
                      - button "Edit Assignment" [disabled] [ref=e827]
                      - button "Add Tests" [disabled] [ref=e828]
                      - button "Assignment actions" [ref=e829]
                  - row "Begin assignment Maurice Vandervort_1784735720261 for N14114A82009, Kaylie Maurice Vandervort_1784735720261 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e830] [cursor=pointer]:
                    - cell "Begin assignment Maurice Vandervort_1784735720261 for N14114A82009, Kaylie" [ref=e831]:
                      - button "Begin assignment Maurice Vandervort_1784735720261 for N14114A82009, Kaylie" [disabled] [ref=e832]:
                        - generic [ref=e833]: N14114A82009, Kaylie
                    - cell "Maurice Vandervort_1784735720261 More info" [ref=e834]:
                      - generic [ref=e835]:
                        - button "Maurice Vandervort_1784735720261" [disabled] [ref=e836]:
                          - generic [ref=e837]: Maurice Vandervort_1784735720261
                        - button "More info" [ref=e838]
                    - cell "80 days" [ref=e839]:
                      - button "80 days" [disabled] [ref=e840]
                    - cell "● Submitted" [ref=e841]:
                      - button "● Submitted" [disabled] [ref=e842]:
                        - generic [ref=e843]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e844]:
                      - button "Edit Assignment" [disabled] [ref=e845]
                      - button "Add Tests" [disabled] [ref=e846]
                      - button "Assignment actions" [ref=e847]
                  - row "Begin assignment Ronnie VonRueden_1784735370690 for N59680A48263, Declan Ronnie VonRueden_1784735370690 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e848] [cursor=pointer]:
                    - cell "Begin assignment Ronnie VonRueden_1784735370690 for N59680A48263, Declan" [ref=e849]:
                      - button "Begin assignment Ronnie VonRueden_1784735370690 for N59680A48263, Declan" [disabled] [ref=e850]:
                        - generic [ref=e851]: N59680A48263, Declan
                    - cell "Ronnie VonRueden_1784735370690 More info" [ref=e852]:
                      - generic [ref=e853]:
                        - button "Ronnie VonRueden_1784735370690" [disabled] [ref=e854]:
                          - generic [ref=e855]: Ronnie VonRueden_1784735370690
                        - button "More info" [ref=e856]
                    - cell "80 days" [ref=e857]:
                      - button "80 days" [disabled] [ref=e858]
                    - cell "● Submitted" [ref=e859]:
                      - button "● Submitted" [disabled] [ref=e860]:
                        - generic [ref=e861]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e862]:
                      - button "Edit Assignment" [disabled] [ref=e863]
                      - button "Add Tests" [disabled] [ref=e864]
                      - button "Assignment actions" [ref=e865]
                  - row "Begin assignment Josefina Greenfelder_1784735092835 for N80156A97109, Florida Josefina Greenfelder_1784735092835 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e866] [cursor=pointer]:
                    - cell "Begin assignment Josefina Greenfelder_1784735092835 for N80156A97109, Florida" [ref=e867]:
                      - button "Begin assignment Josefina Greenfelder_1784735092835 for N80156A97109, Florida" [disabled] [ref=e868]:
                        - generic [ref=e869]: N80156A97109, Florida
                    - cell "Josefina Greenfelder_1784735092835 More info" [ref=e870]:
                      - generic [ref=e871]:
                        - button "Josefina Greenfelder_1784735092835" [disabled] [ref=e872]:
                          - generic [ref=e873]: Josefina Greenfelder_1784735092835
                        - button "More info" [ref=e874]
                    - cell "80 days" [ref=e875]:
                      - button "80 days" [disabled] [ref=e876]
                    - cell "● Submitted" [ref=e877]:
                      - button "● Submitted" [disabled] [ref=e878]:
                        - generic [ref=e879]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e880]:
                      - button "Edit Assignment" [disabled] [ref=e881]
                      - button "Add Tests" [disabled] [ref=e882]
                      - button "Assignment actions" [ref=e883]
                  - row "Begin assignment Candice Hamill_1784728861984 for N98089A10374, Rowland Candice Hamill_1784728861984 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e884] [cursor=pointer]:
                    - cell "Begin assignment Candice Hamill_1784728861984 for N98089A10374, Rowland" [ref=e885]:
                      - button "Begin assignment Candice Hamill_1784728861984 for N98089A10374, Rowland" [disabled] [ref=e886]:
                        - generic [ref=e887]: N98089A10374, Rowland
                    - cell "Candice Hamill_1784728861984 More info" [ref=e888]:
                      - generic [ref=e889]:
                        - button "Candice Hamill_1784728861984" [disabled] [ref=e890]:
                          - generic [ref=e891]: Candice Hamill_1784728861984
                        - button "More info" [ref=e892]
                    - cell "80 days" [ref=e893]:
                      - button "80 days" [disabled] [ref=e894]
                    - cell "● Submitted" [ref=e895]:
                      - button "● Submitted" [disabled] [ref=e896]:
                        - generic [ref=e897]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e898]:
                      - button "Edit Assignment" [disabled] [ref=e899]
                      - button "Add Tests" [disabled] [ref=e900]
                      - button "Assignment actions" [ref=e901]
                  - row "Begin assignment Mrs. Candace Howe V_1784728631118 (+1 more) for N90209A86801, Theo Mrs. Candace Howe V_1784728631118 (+1 more) More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e902] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Candace Howe V_1784728631118 (+1 more) for N90209A86801, Theo" [ref=e903]:
                      - button "Begin assignment Mrs. Candace Howe V_1784728631118 (+1 more) for N90209A86801, Theo" [disabled] [ref=e904]:
                        - generic [ref=e905]: N90209A86801, Theo
                    - cell "Mrs. Candace Howe V_1784728631118 (+1 more) More info" [ref=e906]:
                      - generic [ref=e907]:
                        - button "Mrs. Candace Howe V_1784728631118 (+1 more)" [disabled] [ref=e908]:
                          - generic [ref=e909]: Mrs. Candace Howe V_1784728631118 (+1 more)
                        - button "More info" [ref=e910]
                    - cell "80 days" [ref=e911]:
                      - button "80 days" [disabled] [ref=e912]
                    - cell "● Submitted" [ref=e913]:
                      - button "● Submitted" [disabled] [ref=e914]:
                        - generic [ref=e915]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e916]:
                      - button "Edit Assignment" [disabled] [ref=e917]
                      - button "Add Tests" [disabled] [ref=e918]
                      - button "Assignment actions" [ref=e919]
                  - row "Begin assignment Genevieve Mayert-Brekke_1784728382298 (+1 more) for N29297A74279, Reyes Genevieve Mayert-Brekke_1784728382298 (+1 more) More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e920] [cursor=pointer]:
                    - cell "Begin assignment Genevieve Mayert-Brekke_1784728382298 (+1 more) for N29297A74279, Reyes" [ref=e921]:
                      - button "Begin assignment Genevieve Mayert-Brekke_1784728382298 (+1 more) for N29297A74279, Reyes" [disabled] [ref=e922]:
                        - generic [ref=e923]: N29297A74279, Reyes
                    - cell "Genevieve Mayert-Brekke_1784728382298 (+1 more) More info" [ref=e924]:
                      - generic [ref=e925]:
                        - button "Genevieve Mayert-Brekke_1784728382298 (+1 more)" [disabled] [ref=e926]:
                          - generic [ref=e927]: Genevieve Mayert-Brekke_1784728382298 (+1 more)
                        - button "More info" [ref=e928]
                    - cell "80 days" [ref=e929]:
                      - button "80 days" [disabled] [ref=e930]
                    - cell "● Submitted" [ref=e931]:
                      - button "● Submitted" [disabled] [ref=e932]:
                        - generic [ref=e933]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e934]:
                      - button "Edit Assignment" [disabled] [ref=e935]
                      - button "Add Tests" [disabled] [ref=e936]
                      - button "Assignment actions" [ref=e937]
                  - row "Begin assignment Jessie Zulauf_1784727904254 (+1 more) for N80566A28494, Alfredo Jessie Zulauf_1784727904254 (+1 more) More info 80 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e938] [cursor=pointer]:
                    - cell "Begin assignment Jessie Zulauf_1784727904254 (+1 more) for N80566A28494, Alfredo" [ref=e939]:
                      - button "Begin assignment Jessie Zulauf_1784727904254 (+1 more) for N80566A28494, Alfredo" [disabled] [ref=e940]:
                        - generic [ref=e941]: N80566A28494, Alfredo
                    - cell "Jessie Zulauf_1784727904254 (+1 more) More info" [ref=e942]:
                      - generic [ref=e943]:
                        - button "Jessie Zulauf_1784727904254 (+1 more)" [disabled] [ref=e944]:
                          - generic [ref=e945]: Jessie Zulauf_1784727904254 (+1 more)
                        - button "More info" [ref=e946]
                    - cell "80 days" [ref=e947]:
                      - button "80 days" [disabled] [ref=e948]
                    - cell "● In Progress" [ref=e949]:
                      - button "● In Progress" [disabled] [ref=e950]:
                        - generic [ref=e951]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e952]:
                      - button "Edit Assignment" [disabled] [ref=e953]
                      - button "Add Tests" [disabled] [ref=e954]
                      - button "Assignment actions" [ref=e955]
                  - row "Begin assignment Jamie Reinger_1784727681214 for N31691A776, Regan Jamie Reinger_1784727681214 More info 80 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e956] [cursor=pointer]:
                    - cell "Begin assignment Jamie Reinger_1784727681214 for N31691A776, Regan" [ref=e957]:
                      - button "Begin assignment Jamie Reinger_1784727681214 for N31691A776, Regan" [disabled] [ref=e958]:
                        - generic [ref=e959]: N31691A776, Regan
                    - cell "Jamie Reinger_1784727681214 More info" [ref=e960]:
                      - generic [ref=e961]:
                        - button "Jamie Reinger_1784727681214" [disabled] [ref=e962]:
                          - generic [ref=e963]: Jamie Reinger_1784727681214
                        - button "More info" [ref=e964]
                    - cell "80 days" [ref=e965]:
                      - button "80 days" [disabled] [ref=e966]
                    - cell "● In Progress" [ref=e967]:
                      - button "● In Progress" [disabled] [ref=e968]:
                        - generic [ref=e969]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e970]:
                      - button "Edit Assignment" [disabled] [ref=e971]
                      - button "Add Tests" [disabled] [ref=e972]
                      - button "Assignment actions" [ref=e973]
                  - row "Begin assignment Tom Berge_1784727456292 for N55938A21100, Shanny Tom Berge_1784727456292 More info 80 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e974] [cursor=pointer]:
                    - cell "Begin assignment Tom Berge_1784727456292 for N55938A21100, Shanny" [ref=e975]:
                      - button "Begin assignment Tom Berge_1784727456292 for N55938A21100, Shanny" [disabled] [ref=e976]:
                        - generic [ref=e977]: N55938A21100, Shanny
                    - cell "Tom Berge_1784727456292 More info" [ref=e978]:
                      - generic [ref=e979]:
                        - button "Tom Berge_1784727456292" [disabled] [ref=e980]:
                          - generic [ref=e981]: Tom Berge_1784727456292
                        - button "More info" [ref=e982]
                    - cell "80 days" [ref=e983]:
                      - button "80 days" [disabled] [ref=e984]
                    - cell "● In Progress" [ref=e985]:
                      - button "● In Progress" [disabled] [ref=e986]:
                        - generic [ref=e987]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e988]:
                      - button "Edit Assignment" [disabled] [ref=e989]
                      - button "Add Tests" [disabled] [ref=e990]
                      - button "Assignment actions" [ref=e991]
                  - row "Begin assignment Marlene Collier_1784727101537 for N58597A60462, Kenna Marlene Collier_1784727101537 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e992] [cursor=pointer]:
                    - cell "Begin assignment Marlene Collier_1784727101537 for N58597A60462, Kenna" [ref=e993]:
                      - button "Begin assignment Marlene Collier_1784727101537 for N58597A60462, Kenna" [disabled] [ref=e994]:
                        - generic [ref=e995]: N58597A60462, Kenna
                    - cell "Marlene Collier_1784727101537 More info" [ref=e996]:
                      - generic [ref=e997]:
                        - button "Marlene Collier_1784727101537" [disabled] [ref=e998]:
                          - generic [ref=e999]: Marlene Collier_1784727101537
                        - button "More info" [ref=e1000]
                    - cell "80 days" [ref=e1001]:
                      - button "80 days" [disabled] [ref=e1002]
                    - cell "● Submitted" [ref=e1003]:
                      - button "● Submitted" [disabled] [ref=e1004]:
                        - generic [ref=e1005]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1006]:
                      - button "Edit Assignment" [disabled] [ref=e1007]
                      - button "Add Tests" [disabled] [ref=e1008]
                      - button "Assignment actions" [ref=e1009]
                  - row "Begin assignment Erica Heathcote_1784726725032 for N86450A58521, Paolo Erica Heathcote_1784726725032 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1010] [cursor=pointer]:
                    - cell "Begin assignment Erica Heathcote_1784726725032 for N86450A58521, Paolo" [ref=e1011]:
                      - button "Begin assignment Erica Heathcote_1784726725032 for N86450A58521, Paolo" [disabled] [ref=e1012]:
                        - generic [ref=e1013]: N86450A58521, Paolo
                    - cell "Erica Heathcote_1784726725032 More info" [ref=e1014]:
                      - generic [ref=e1015]:
                        - button "Erica Heathcote_1784726725032" [disabled] [ref=e1016]:
                          - generic [ref=e1017]: Erica Heathcote_1784726725032
                        - button "More info" [ref=e1018]
                    - cell "80 days" [ref=e1019]:
                      - button "80 days" [disabled] [ref=e1020]
                    - cell "● Submitted" [ref=e1021]:
                      - button "● Submitted" [disabled] [ref=e1022]:
                        - generic [ref=e1023]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1024]:
                      - button "Edit Assignment" [disabled] [ref=e1025]
                      - button "Add Tests" [disabled] [ref=e1026]
                      - button "Assignment actions" [ref=e1027]
            - generic [ref=e1028]:
              - generic [ref=e1031]:
                - img [ref=e1032]
                - heading "Notifications Center" [level=2] [ref=e1036]
              - generic [ref=e1037]:
                - generic [ref=e1039]:
                  - img [ref=e1040]
                  - heading "Resources" [level=3] [ref=e1044]
                - list [ref=e1045]:
                  - listitem [ref=e1046]:
                    - button "Riverside Learn" [ref=e1047] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e1048]
                      - img [ref=e1050]
                  - listitem [ref=e1052]:
                    - button "Onboarding Tutorial Videos" [ref=e1053] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e1054]
                      - img [ref=e1056]
                  - listitem [ref=e1058]:
                    - button "Quick Reference Guides" [ref=e1059] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e1060]
                      - img [ref=e1062]
                - button "View All" [ref=e1065] [cursor=pointer]
      - contentinfo [ref=e1066]:
        - generic [ref=e1067]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e1068] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e1069]
        - generic [ref=e1070]:
          - link "Riverside Insights Facebook" [ref=e1071] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e1072]
          - link "Riverside Insights Twitter" [ref=e1073] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e1074]
          - link "Riverside Insights LinkedIn" [ref=e1075] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e1076]
          - link "Riverside Insights Instagram" [ref=e1077] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e1078]
        - generic [ref=e1079]:
          - button "Leave Feedback" [ref=e1080] [cursor=pointer]
          - generic [ref=e1081]: "|"
          - link "Terms of Use" [ref=e1082] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e1083]: "|"
          - link "Privacy Policy" [ref=e1084] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e1085]: Footer region end
```

# Test source

```ts
  5147 |           await expect.soft(this.nextText).toHaveText("Sample Item B, Trial 2");
  5148 |           await this.plainNextButtonOrEndButton.click();
  5149 |         } else if (typeOfTest.match(/MATRCZ Sample Items Incorrect and then Correct Scenario for SSP1/i) && itemDetails.match(/^(Block (A|D)), Item ([1-8]|2[5-9]|3[0-2])\b/)) {
  5150 |           await this.correctOptionButton.nth(0).click();
  5151 |         } else if (typeOfTest.match(/MATRCZ Sample Items Incorrect and then Correct Scenario for SSP2/i) && itemDetails.match(/^(Block (B|D)), Item ([9]|1[0-6]|2[5-9]|3[0-2])\b/)) {
  5152 |           await this.correctOptionButton.nth(0).click();
  5153 |         }
  5154 |       } else if (typeOfTest.match(/MATRCZ Block B & Block A All Incorrect then Block B 1 correct Scenario for SSP2/i)) {
  5155 |         if (itemDetails.startsWith("Introduction")) {
  5156 |           await this.activateTabletControlButton.click();
  5157 |           await this.videoPlayButton.click();
  5158 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5159 |         } else if (itemDetails.startsWith("Sample")) {
  5160 |           await this.correctOptionButton.nth(0).click();
  5161 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5162 |         } else if (itemDetails.match(/^(Block [A|B]), Item ([1-7]|[9]|1[0-6])\b/)) {
  5163 |           await this.iDontKnowButton.click();
  5164 |         } else if (itemDetails.match("Block A, Item 8")) {
  5165 |           await this.iDontKnowButton.click();
  5166 |           await expect.soft(this.nextAndEndTestButton).toHaveText("End Test");
  5167 |           await this.leftNavBlockContainer.nth(1).click();
  5168 |           await this.leftNavIncorrectAnswerContainer.nth(0).click();
  5169 |           await this.iDontKnowButton.click();
  5170 |           await this.correctOptionButton.nth(0).click();
  5171 |           await expect.soft(this.nextAndEndTestButton).toHaveText("End Test");
  5172 |         }
  5173 |       } else if (typeOfTest.match(/ANLSYN Sample Items Correct and then Incorrect Scenario/i)) {
  5174 |         if (itemDetails.includes("Color Pretest")) {
  5175 |           await this.correctOptionButton.nth(0).click();
  5176 |         } else if (itemDetails.startsWith("Introduction")) {
  5177 |           await this.videoPlayButton.click();
  5178 |           await this.waitTillVideoIsComplete();
  5179 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5180 |         } else if (itemDetails.startsWith("Sample")) {
  5181 |           await this.correctOptionButton.nth(0).click();
  5182 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5183 |         } else if (/^Item [1-5]\b/.test(itemDetails)) {
  5184 |           await this.iDontKnowButton.click();
  5185 |         } else if (itemDetails === "Item 6") {
  5186 |           await this.iDontKnowButton.click();
  5187 |           await this.leftNavAllItems.nth(9).click();
  5188 |           await this.correctOptionButton.nth(0).click();
  5189 |           await this.iDontKnowButton.click();
  5190 |           await expect.soft(this.nextText).toHaveText("Item 7");
  5191 |           await this.plainNextButtonOrEndButton.click();
  5192 |           await this.iDontKnowButton.click();
  5193 |         }
  5194 |       } else if (typeOfTest.match(/ANLSYN Sample Items Incorrect and then Correct Scenario/i)) {
  5195 |         if (itemDetails.includes("Color Pretest")) {
  5196 |           await this.correctOptionButton.nth(0).click();
  5197 |         } else if (itemDetails.startsWith("Introduction")) {
  5198 |           await this.videoPlayButton.click();
  5199 |           await this.waitTillVideoIsComplete();
  5200 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5201 |         } else if (/^Sample Item (A, Trial [1-2]|B, Trial 1)$/.test(itemDetails)) {
  5202 |           await this.iDontKnowButton.click();
  5203 |           await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
  5204 |         } else if (itemDetails.match("Sample Item B, Trial 2")) {
  5205 |           await this.correctOptionButton.nth(0).click();
  5206 |           await this.leftNavAllItems.nth(9).click();
  5207 |           await this.iDontKnowButton.click();
  5208 |           await this.correctOptionButton.nth(0).click();
  5209 |           await expect.soft(this.nextText).toHaveText("Item 4");
  5210 |         } else if (/^Item [1-7]\b/.test(itemDetails)) {
  5211 |           await this.iDontKnowButton.click();
  5212 |         }
  5213 |         } else if (typeOfTest.match(/LWIDNT 6 correct 6 incorrect then go back to bLock A and check next item/i)) {//related to bug 27961
  5214 |         if (itemDetails.startsWith("Item")) {
  5215 |           for (let i = 1; i <= logicIndex; i++) {
  5216 |             await this.correctOptionButton.nth(0).click();
  5217 |             await this.page.waitForTimeout(1000);
  5218 |             await this.plainNextButtonOrEndButton.click();
  5219 |             await this.page.waitForTimeout(1000);
  5220 |           } for (let j = 1; j < logicIndex; j++) {
  5221 |             await this.iDontKnowButton.click();
  5222 |             await this.page.waitForTimeout(1000);
  5223 |             await this.plainNextButtonOrEndButton.click();
  5224 |             await this.page.waitForTimeout(1000);
  5225 |           }
  5226 |           await this.iDontKnowButton.click();
  5227 |           await this.leftNavCorrectAnswerContainer.nth(1).click();
  5228 | 
  5229 |           await expect.soft(this.plainNextButtonOrEndButton).toHaveText("End Test");
  5230 |           await this.correctOptionButton.nth(0).click();
  5231 |           await this.iDontKnowButton.click();
  5232 |           await expect.soft(this.itemDetails1).toHaveText("Test Routing Change");
  5233 |           await this.continueButton.click();
  5234 |           await this.plainNextButtonOrEndButton.click();
  5235 |           for (let k = 1; k <= index; k++) {
  5236 |             await this.iDontKnowButton.click();
  5237 |             await this.plainNextButtonOrEndButton.click();
  5238 |           }
  5239 |           await expect.soft(this.itemDetails).toHaveText(`Introduction 1`);
  5240 |           await expect.soft(this.nextText).toHaveText(`Item 1`);
  5241 |           await this.plainNextButtonOrEndButton.click();
  5242 |           for (let l = 1; l <= incorrectIndex; l++) {
  5243 |             if (l == 5 || l == 15) {
  5244 |               await this.plainNextButtonOrEndButton.click();
  5245 |             } else {
  5246 |               await this.iDontKnowButton.click();
> 5247 |               await this.plainNextButtonOrEndButton.click();
       |                                                     ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  5248 |             }
  5249 |           }
  5250 |           await this.iDontKnowButton.click();
  5251 |         }
  5252 |       } else if (typeOfTest.match(/LWIDNT 6 correct 6 incorrect then go back to bLock A and skip Block B through left nav go to BLock C and check next item for SSP3/i)) {//related to bug 28226
  5253 | 
  5254 |         if (itemDetails.startsWith("Introduction")) {
  5255 |         } else if (/^Item (?:[1-3]|3[0-5])\b/.test(itemDetails)) {
  5256 |           await this.correctOptionButton.nth(0).click();
  5257 |         } else if (/^Item (?:3[6-9]|4[0])\b/.test(itemDetails)) {
  5258 |           await this.iDontKnowButton.click();
  5259 |         }
  5260 |         else if (itemDetails.match("Item 41")) {
  5261 |           await this.iDontKnowButton.click();
  5262 |           await this.leftNavCorrectAnswerContainer.nth(1).click();
  5263 | 
  5264 |           await expect.soft(this.plainNextButtonOrEndButton).toHaveText("End Test");
  5265 |           await this.correctOptionButton.nth(0).click();
  5266 |           await this.iDontKnowButton.click();
  5267 |           await expect.soft(this.itemDetails1).toHaveText("Test Routing Change");
  5268 |           await this.continueButton.click();
  5269 |           await this.plainNextButtonOrEndButton.click();
  5270 |           for (let k = 1; k <= index; k++) {
  5271 |             await this.iDontKnowButton.click();
  5272 |             await this.page.waitForTimeout(1000);
  5273 |             await this.plainNextButtonOrEndButton.click();
  5274 |             await this.page.waitForTimeout(1000);
  5275 |           }
  5276 |         } else if (itemDetails.match("Item 4")) {
  5277 |           await this.correctOptionButton.nth(0).click();
  5278 |           await this.plainNextButtonOrEndButton.click();
  5279 |           await expect.soft(this.itemDetails).toHaveText(`Introduction 2`);
  5280 |           await expect.soft(this.nextText).toHaveText(`Item 5`);
  5281 |           await this.leftNavBlockContainer.nth(2).click();
  5282 |           await this.leftNavIncorrectAnswerContainer.nth(0).click();
  5283 |           await expect.soft(this.nextText).toHaveText("Introduction 2");
  5284 |           await this.plainNextButtonOrEndButton.click();
  5285 |           await this.plainNextButtonOrEndButton.click();
  5286 |           for (let k = 1; k <= incorrectIndex; k++) {
  5287 |             if (k == 10) {
  5288 |               await this.plainNextButtonOrEndButton.click();
  5289 |             } else {
  5290 |               await this.iDontKnowButton.click();
  5291 |               await this.plainNextButtonOrEndButton.click();
  5292 |             }
  5293 |           }
  5294 |           await this.iDontKnowButton.click();
  5295 |         }
  5296 |       }else if (typeOfTest.match(/VWKMEM Sample Items Correct and then Incorrect Scenario/i)) {
  5297 |         if (itemDetails.match(/^Sample Item (A|B) Presentation, Trial (1|2)$/i)) {
  5298 |           await this.page.waitForTimeout(1000);
  5299 |         } else if (itemDetails.match(/Sample Item A Response, Trial 1/i)) {
  5300 |           await this.page.waitForTimeout(2000);
  5301 |           await this.correctOptionButton.nth(0).click();
  5302 |         } else if (itemDetails.match(/Sample Item B Response, Trial 1/i)) {
  5303 |           await this.page.waitForTimeout(2000);
  5304 |           await this.correctOptionButton.nth(0).click();
  5305 |           await this.leftNavAllItems.nth(1).click();
  5306 |           await this.page.mouse.move(300, 800);
  5307 |           await this.correctOptionButton.nth(0).click();
  5308 |           await this.incorrectOptionButton.nth(0).click();
  5309 |           await expect.soft(this.nextText).toHaveText("Sample Item B Response, Trial 1");
  5310 |           await this.plainNextButtonOrEndButton.click();
  5311 |         } else if (itemDetails.startsWith("Introduction")) {
  5312 |           await this.page.waitForTimeout(1000);
  5313 |         } else if (itemDetails.match(/Demonstration 1/i)) {
  5314 |           await this.page.waitForTimeout(1000);
  5315 |           await this.demoYesButton.click();
  5316 |         } else if (itemDetails.match(/Demonstration 2/i)) {
  5317 |           await this.page.waitForTimeout(1000);
  5318 |           await this.demoNoButton.click();
  5319 |         } else if (itemDetails.match(/Practice Exercise Item (1|3|4)/i)) {
  5320 |           await this.page.waitForTimeout(1000);
  5321 |           await this.practiceExerciseNoButton.click();
  5322 |         } else if (itemDetails.match(/Practice Exercise Item 2/i)) {
  5323 |           await this.page.waitForTimeout(1000);
  5324 |           await this.practiceExerciseYesButton.click();
  5325 |         }
  5326 |       }else if (typeOfTest.match(/VWKMEM Needs Attention Scenario/i)) {
  5327 |         if (itemDetails.includes("Presentation") || itemDetails.match(/^Introduction ([1-3])$/i)) {
  5328 |           await this.page.waitForTimeout(2000);
  5329 |         } else if (itemDetails.includes("Response")) {
  5330 |           await this.page.waitForTimeout(1000);
  5331 |           await this.correctOptionButton.nth(0).click();
  5332 |         } else if (itemDetails.match(/Demonstration 1/i)) {
  5333 |           await this.page.waitForTimeout(1000);
  5334 |           await this.demoYesButton.click();
  5335 |         } else if (itemDetails.match(/Demonstration 2/i)) {
  5336 |           await this.page.waitForTimeout(1000);
  5337 |           await this.demoNoButton.click();
  5338 |         } else if (itemDetails.match(/Practice Exercise Item (1|2|3|4)/i)) {
  5339 |         await this.page.waitForTimeout(1000);
  5340 |         await this.practiceExerciseYesButton.click();
  5341 |         }else if (itemDetails.match("Introduction 4")) {
  5342 |           await this.plainNextButtonOrEndButton.click();
  5343 |           await this.page.waitForTimeout(5000);
  5344 |           await this.distractorYesButton.click();
  5345 |           await this.correctOptionButton.nth(0).click();
  5346 |         }else if (itemDetails.match("Introduction 5")) {
  5347 |           await this.plainNextButtonOrEndButton.click();
```