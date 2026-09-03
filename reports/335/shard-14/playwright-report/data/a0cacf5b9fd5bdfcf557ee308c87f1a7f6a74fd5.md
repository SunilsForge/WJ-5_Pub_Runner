# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIAndReports/GIWHAT_Single_BC4.spec.ts >>  GIWHAT UI And Reports >> Ages 9 to 11 - 4 lowest incorrect items SSP3 Test UI
- Location: src/tests/UIAndReports/GIWHAT_Single_BC4.spec.ts:10:13

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[@class=\'rsi-checkbox\']').first()
    - locator resolved to <button tabindex="0" class="rsi-checkbox" aria-disabled="true" aria-label="General Information–What">…</button>
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
                  - row "Begin assignment Melody Herzog-Torphy_1788430596259 for N5701A10651, Maudie Melody Herzog-Torphy_1788430596259 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Melody Herzog-Torphy_1788430596259 for N5701A10651, Maudie" [ref=e75]:
                      - button "Begin assignment Melody Herzog-Torphy_1788430596259 for N5701A10651, Maudie" [disabled] [ref=e76]:
                        - generic [ref=e77]: N5701A10651, Maudie
                    - cell "Melody Herzog-Torphy_1788430596259 More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Melody Herzog-Torphy_1788430596259" [disabled] [ref=e80]:
                          - generic [ref=e81]: Melody Herzog-Torphy_1788430596259
                        - button "More info" [ref=e82]
                    - cell "—" [ref=e83]:
                      - button "—" [disabled] [ref=e84]
                    - cell "● Not Started" [ref=e85]:
                      - button "● Not Started" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row "Begin assignment Rodney Nitzsche_1788430331376 for N25540A1794, Mariam Rodney Nitzsche_1788430331376 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Rodney Nitzsche_1788430331376 for N25540A1794, Mariam" [ref=e93]:
                      - button "Begin assignment Rodney Nitzsche_1788430331376 for N25540A1794, Mariam" [disabled] [ref=e94]:
                        - generic [ref=e95]: N25540A1794, Mariam
                    - cell "Rodney Nitzsche_1788430331376 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Rodney Nitzsche_1788430331376" [disabled] [ref=e98]:
                          - generic [ref=e99]: Rodney Nitzsche_1788430331376
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
                  - row "Begin assignment Victor Strosin_1788430067851 for N7704A49110, Sonny Victor Strosin_1788430067851 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Victor Strosin_1788430067851 for N7704A49110, Sonny" [ref=e111]:
                      - button "Begin assignment Victor Strosin_1788430067851 for N7704A49110, Sonny" [disabled] [ref=e112]:
                        - generic [ref=e113]: N7704A49110, Sonny
                    - cell "Victor Strosin_1788430067851 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Victor Strosin_1788430067851" [disabled] [ref=e116]:
                          - generic [ref=e117]: Victor Strosin_1788430067851
                        - button "More info" [ref=e118]
                    - cell "—" [ref=e119]:
                      - button "—" [disabled] [ref=e120]
                    - cell "● Not Started" [ref=e121]:
                      - button "● Not Started" [disabled] [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e124]:
                      - button "Edit Assignment" [disabled] [ref=e125]
                      - button "Add Tests" [disabled] [ref=e126]
                      - button "Assignment actions" [ref=e127]
                  - row "Begin assignment Miss Naomi Rice_1788429807334 for N51673A55843, Kamryn Miss Naomi Rice_1788429807334 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Miss Naomi Rice_1788429807334 for N51673A55843, Kamryn" [ref=e129]:
                      - button "Begin assignment Miss Naomi Rice_1788429807334 for N51673A55843, Kamryn" [disabled] [ref=e130]:
                        - generic [ref=e131]: N51673A55843, Kamryn
                    - cell "Miss Naomi Rice_1788429807334 More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Miss Naomi Rice_1788429807334" [disabled] [ref=e134]:
                          - generic [ref=e135]: Miss Naomi Rice_1788429807334
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
                  - row "Begin assignment Antonio Marks_1788429567122 for N73779A77207, Kyleigh Antonio Marks_1788429567122 More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Antonio Marks_1788429567122 for N73779A77207, Kyleigh" [ref=e147]:
                      - button "Begin assignment Antonio Marks_1788429567122 for N73779A77207, Kyleigh" [disabled] [ref=e148]:
                        - generic [ref=e149]: N73779A77207, Kyleigh
                    - cell "Antonio Marks_1788429567122 More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Antonio Marks_1788429567122" [disabled] [ref=e152]:
                          - generic [ref=e153]: Antonio Marks_1788429567122
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
                  - row "Begin assignment Miranda West_1788429287517 for N17535A92851, Scotty Miranda West_1788429287517 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Miranda West_1788429287517 for N17535A92851, Scotty" [ref=e165]:
                      - button "Begin assignment Miranda West_1788429287517 for N17535A92851, Scotty" [disabled] [ref=e166]:
                        - generic [ref=e167]: N17535A92851, Scotty
                    - cell "Miranda West_1788429287517 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Miranda West_1788429287517" [disabled] [ref=e170]:
                          - generic [ref=e171]: Miranda West_1788429287517
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
                  - row "Begin assignment Willis Baumbach_1788428963779 for N40278A47865, Abdul Willis Baumbach_1788428963779 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Willis Baumbach_1788428963779 for N40278A47865, Abdul" [ref=e183]:
                      - button "Begin assignment Willis Baumbach_1788428963779 for N40278A47865, Abdul" [disabled] [ref=e184]:
                        - generic [ref=e185]: N40278A47865, Abdul
                    - cell "Willis Baumbach_1788428963779 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Willis Baumbach_1788428963779" [disabled] [ref=e188]:
                          - generic [ref=e189]: Willis Baumbach_1788428963779
                        - button "More info" [ref=e190]
                    - cell "—" [ref=e191]:
                      - button "—" [disabled] [ref=e192]
                    - cell "● Not Started" [ref=e193]:
                      - button "● Not Started" [disabled] [ref=e194]:
                        - generic [ref=e195]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e196]:
                      - button "Edit Assignment" [disabled] [ref=e197]
                      - button "Add Tests" [disabled] [ref=e198]
                      - button "Assignment actions" [ref=e199]
                  - row "Begin assignment Alfredo Balistreri_1788428703725 for N31527A97846, Daniela Alfredo Balistreri_1788428703725 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Alfredo Balistreri_1788428703725 for N31527A97846, Daniela" [ref=e201]:
                      - button "Begin assignment Alfredo Balistreri_1788428703725 for N31527A97846, Daniela" [disabled] [ref=e202]:
                        - generic [ref=e203]: N31527A97846, Daniela
                    - cell "Alfredo Balistreri_1788428703725 More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Alfredo Balistreri_1788428703725" [disabled] [ref=e206]:
                          - generic [ref=e207]: Alfredo Balistreri_1788428703725
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
                  - row "Begin assignment Mrs. Claire O'Connell_1788428408151 for N22105A85402, Nia Mrs. Claire O'Connell_1788428408151 More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Claire O'Connell_1788428408151 for N22105A85402, Nia" [ref=e219]:
                      - button "Begin assignment Mrs. Claire O'Connell_1788428408151 for N22105A85402, Nia" [disabled] [ref=e220]:
                        - generic [ref=e221]: N22105A85402, Nia
                    - cell "Mrs. Claire O'Connell_1788428408151 More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Mrs. Claire O'Connell_1788428408151" [disabled] [ref=e224]:
                          - generic [ref=e225]: Mrs. Claire O'Connell_1788428408151
                        - button "More info" [ref=e226]
                    - cell "90 days" [ref=e227]:
                      - button "90 days" [disabled] [ref=e228]
                    - cell "● In Progress" [ref=e229]:
                      - button "● In Progress" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row "Begin assignment Jordan Nienow_1788428143479 for N24882A2946, Rubie Jordan Nienow_1788428143479 More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Jordan Nienow_1788428143479 for N24882A2946, Rubie" [ref=e237]:
                      - button "Begin assignment Jordan Nienow_1788428143479 for N24882A2946, Rubie" [disabled] [ref=e238]:
                        - generic [ref=e239]: N24882A2946, Rubie
                    - cell "Jordan Nienow_1788428143479 More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Jordan Nienow_1788428143479" [disabled] [ref=e242]:
                          - generic [ref=e243]: Jordan Nienow_1788428143479
                        - button "More info" [ref=e244]
                    - cell "—" [ref=e245]:
                      - button "—" [disabled] [ref=e246]
                    - cell "● Not Started" [ref=e247]:
                      - button "● Not Started" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row "Begin assignment Emilio Stark_1788427827824 (+1 more) for N36198A73906, Colton Emilio Stark_1788427827824 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Emilio Stark_1788427827824 (+1 more) for N36198A73906, Colton" [ref=e255]:
                      - button "Begin assignment Emilio Stark_1788427827824 (+1 more) for N36198A73906, Colton" [disabled] [ref=e256]:
                        - generic [ref=e257]: N36198A73906, Colton
                    - cell "Emilio Stark_1788427827824 (+1 more) More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Emilio Stark_1788427827824 (+1 more)" [disabled] [ref=e260]:
                          - generic [ref=e261]: Emilio Stark_1788427827824 (+1 more)
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
                  - row "Begin assignment Geraldine Goyette Sr._1788427533488 (+1 more) for N87910A35325, Nikolas Geraldine Goyette Sr._1788427533488 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Geraldine Goyette Sr._1788427533488 (+1 more) for N87910A35325, Nikolas" [ref=e273]:
                      - button "Begin assignment Geraldine Goyette Sr._1788427533488 (+1 more) for N87910A35325, Nikolas" [disabled] [ref=e274]:
                        - generic [ref=e275]: N87910A35325, Nikolas
                    - cell "Geraldine Goyette Sr._1788427533488 (+1 more) More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Geraldine Goyette Sr._1788427533488 (+1 more)" [disabled] [ref=e278]:
                          - generic [ref=e279]: Geraldine Goyette Sr._1788427533488 (+1 more)
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
                  - row "Begin assignment Curtis Predovic_1765548851907 (+1 more) for N13571A23028, London Curtis Predovic_1765548851907 (+1 more) More info 0 days ● Expired Generate Report Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Curtis Predovic_1765548851907 (+1 more) for N13571A23028, London" [ref=e291]:
                      - button "Begin assignment Curtis Predovic_1765548851907 (+1 more) for N13571A23028, London" [disabled] [ref=e292]:
                        - generic [ref=e293]: N13571A23028, London
                    - cell "Curtis Predovic_1765548851907 (+1 more) More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Curtis Predovic_1765548851907 (+1 more)" [disabled] [ref=e296]:
                          - generic [ref=e297]: Curtis Predovic_1765548851907 (+1 more)
                        - button "More info" [ref=e298]
                    - cell "0 days" [ref=e299]:
                      - button "0 days" [disabled] [ref=e300]
                    - cell "● Expired" [ref=e301]:
                      - button "● Expired" [disabled] [ref=e302]:
                        - generic [ref=e303]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e304]:
                      - button "Generate Report" [ref=e305]
                      - button "Assignment actions" [ref=e306]
                  - row "Begin assignment Horace Hamill_1765554183106 for N13571A23028, London Horace Hamill_1765554183106 More info 0 days ● Expired Generate Report Assignment actions" [ref=e307] [cursor=pointer]:
                    - cell "Begin assignment Horace Hamill_1765554183106 for N13571A23028, London" [ref=e308]:
                      - button "Begin assignment Horace Hamill_1765554183106 for N13571A23028, London" [disabled] [ref=e309]:
                        - generic [ref=e310]: N13571A23028, London
                    - cell "Horace Hamill_1765554183106 More info" [ref=e311]:
                      - generic [ref=e312]:
                        - button "Horace Hamill_1765554183106" [disabled] [ref=e313]:
                          - generic [ref=e314]: Horace Hamill_1765554183106
                        - button "More info" [ref=e315]
                    - cell "0 days" [ref=e316]:
                      - button "0 days" [disabled] [ref=e317]
                    - cell "● Expired" [ref=e318]:
                      - button "● Expired" [disabled] [ref=e319]:
                        - generic [ref=e320]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e321]:
                      - button "Generate Report" [ref=e322]
                      - button "Assignment actions" [ref=e323]
                  - row "Begin assignment Juan Trantow_1765553888404 for N81455A18419, Adolphus Juan Trantow_1765553888404 More info 0 days ● Expired Generate Report Assignment actions" [ref=e324] [cursor=pointer]:
                    - cell "Begin assignment Juan Trantow_1765553888404 for N81455A18419, Adolphus" [ref=e325]:
                      - button "Begin assignment Juan Trantow_1765553888404 for N81455A18419, Adolphus" [disabled] [ref=e326]:
                        - generic [ref=e327]: N81455A18419, Adolphus
                    - cell "Juan Trantow_1765553888404 More info" [ref=e328]:
                      - generic [ref=e329]:
                        - button "Juan Trantow_1765553888404" [disabled] [ref=e330]:
                          - generic [ref=e331]: Juan Trantow_1765553888404
                        - button "More info" [ref=e332]
                    - cell "0 days" [ref=e333]:
                      - button "0 days" [disabled] [ref=e334]
                    - cell "● Expired" [ref=e335]:
                      - button "● Expired" [disabled] [ref=e336]:
                        - generic [ref=e337]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e338]:
                      - button "Generate Report" [ref=e339]
                      - button "Assignment actions" [ref=e340]
                  - row "Begin assignment Dr. Gerald Erdman_1765553593774 for N56226A45863, Pink Dr. Gerald Erdman_1765553593774 More info 0 days ● Expired Generate Report Assignment actions" [ref=e341] [cursor=pointer]:
                    - cell "Begin assignment Dr. Gerald Erdman_1765553593774 for N56226A45863, Pink" [ref=e342]:
                      - button "Begin assignment Dr. Gerald Erdman_1765553593774 for N56226A45863, Pink" [disabled] [ref=e343]:
                        - generic [ref=e344]: N56226A45863, Pink
                    - cell "Dr. Gerald Erdman_1765553593774 More info" [ref=e345]:
                      - generic [ref=e346]:
                        - button "Dr. Gerald Erdman_1765553593774" [disabled] [ref=e347]:
                          - generic [ref=e348]: Dr. Gerald Erdman_1765553593774
                        - button "More info" [ref=e349]
                    - cell "0 days" [ref=e350]:
                      - button "0 days" [disabled] [ref=e351]
                    - cell "● Expired" [ref=e352]:
                      - button "● Expired" [disabled] [ref=e353]:
                        - generic [ref=e354]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e355]:
                      - button "Generate Report" [ref=e356]
                      - button "Assignment actions" [ref=e357]
                  - row "Begin assignment Darrell Stroman_1765553301106 for N30180A33657, Sandy Darrell Stroman_1765553301106 More info 0 days ● Expired Generate Report Assignment actions" [ref=e358] [cursor=pointer]:
                    - cell "Begin assignment Darrell Stroman_1765553301106 for N30180A33657, Sandy" [ref=e359]:
                      - button "Begin assignment Darrell Stroman_1765553301106 for N30180A33657, Sandy" [disabled] [ref=e360]:
                        - generic [ref=e361]: N30180A33657, Sandy
                    - cell "Darrell Stroman_1765553301106 More info" [ref=e362]:
                      - generic [ref=e363]:
                        - button "Darrell Stroman_1765553301106" [disabled] [ref=e364]:
                          - generic [ref=e365]: Darrell Stroman_1765553301106
                        - button "More info" [ref=e366]
                    - cell "0 days" [ref=e367]:
                      - button "0 days" [disabled] [ref=e368]
                    - cell "● Expired" [ref=e369]:
                      - button "● Expired" [disabled] [ref=e370]:
                        - generic [ref=e371]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e372]:
                      - button "Generate Report" [ref=e373]
                      - button "Assignment actions" [ref=e374]
                  - row "Begin assignment Javier McLaughlin_1765552985886 for N34038A57180, Darrell Javier McLaughlin_1765552985886 More info 0 days ● Expired Generate Report Assignment actions" [ref=e375] [cursor=pointer]:
                    - cell "Begin assignment Javier McLaughlin_1765552985886 for N34038A57180, Darrell" [ref=e376]:
                      - button "Begin assignment Javier McLaughlin_1765552985886 for N34038A57180, Darrell" [disabled] [ref=e377]:
                        - generic [ref=e378]: N34038A57180, Darrell
                    - cell "Javier McLaughlin_1765552985886 More info" [ref=e379]:
                      - generic [ref=e380]:
                        - button "Javier McLaughlin_1765552985886" [disabled] [ref=e381]:
                          - generic [ref=e382]: Javier McLaughlin_1765552985886
                        - button "More info" [ref=e383]
                    - cell "0 days" [ref=e384]:
                      - button "0 days" [disabled] [ref=e385]
                    - cell "● Expired" [ref=e386]:
                      - button "● Expired" [disabled] [ref=e387]:
                        - generic [ref=e388]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e389]:
                      - button "Generate Report" [ref=e390]
                      - button "Assignment actions" [ref=e391]
                  - row "Begin assignment Theresa Ortiz Jr._1765552691921 for N88543A6667, Iliana Theresa Ortiz Jr._1765552691921 More info 0 days ● Expired Generate Report Assignment actions" [ref=e392] [cursor=pointer]:
                    - cell "Begin assignment Theresa Ortiz Jr._1765552691921 for N88543A6667, Iliana" [ref=e393]:
                      - button "Begin assignment Theresa Ortiz Jr._1765552691921 for N88543A6667, Iliana" [disabled] [ref=e394]:
                        - generic [ref=e395]: N88543A6667, Iliana
                    - cell "Theresa Ortiz Jr._1765552691921 More info" [ref=e396]:
                      - generic [ref=e397]:
                        - button "Theresa Ortiz Jr._1765552691921" [disabled] [ref=e398]:
                          - generic [ref=e399]: Theresa Ortiz Jr._1765552691921
                        - button "More info" [ref=e400]
                    - cell "0 days" [ref=e401]:
                      - button "0 days" [disabled] [ref=e402]
                    - cell "● Expired" [ref=e403]:
                      - button "● Expired" [disabled] [ref=e404]:
                        - generic [ref=e405]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e406]:
                      - button "Generate Report" [ref=e407]
                      - button "Assignment actions" [ref=e408]
                  - row "Begin assignment Karl Welch_1765552399403 for N58945A23347, Niko Karl Welch_1765552399403 More info 0 days ● Expired Generate Report Assignment actions" [ref=e409] [cursor=pointer]:
                    - cell "Begin assignment Karl Welch_1765552399403 for N58945A23347, Niko" [ref=e410]:
                      - button "Begin assignment Karl Welch_1765552399403 for N58945A23347, Niko" [disabled] [ref=e411]:
                        - generic [ref=e412]: N58945A23347, Niko
                    - cell "Karl Welch_1765552399403 More info" [ref=e413]:
                      - generic [ref=e414]:
                        - button "Karl Welch_1765552399403" [disabled] [ref=e415]:
                          - generic [ref=e416]: Karl Welch_1765552399403
                        - button "More info" [ref=e417]
                    - cell "0 days" [ref=e418]:
                      - button "0 days" [disabled] [ref=e419]
                    - cell "● Expired" [ref=e420]:
                      - button "● Expired" [disabled] [ref=e421]:
                        - generic [ref=e422]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e423]:
                      - button "Generate Report" [ref=e424]
                      - button "Assignment actions" [ref=e425]
                  - row "Begin assignment Lora Reichert_1765552104899 for N66168A61469, Prince Lora Reichert_1765552104899 More info 0 days ● Expired Generate Report Assignment actions" [ref=e426] [cursor=pointer]:
                    - cell "Begin assignment Lora Reichert_1765552104899 for N66168A61469, Prince" [ref=e427]:
                      - button "Begin assignment Lora Reichert_1765552104899 for N66168A61469, Prince" [disabled] [ref=e428]:
                        - generic [ref=e429]: N66168A61469, Prince
                    - cell "Lora Reichert_1765552104899 More info" [ref=e430]:
                      - generic [ref=e431]:
                        - button "Lora Reichert_1765552104899" [disabled] [ref=e432]:
                          - generic [ref=e433]: Lora Reichert_1765552104899
                        - button "More info" [ref=e434]
                    - cell "0 days" [ref=e435]:
                      - button "0 days" [disabled] [ref=e436]
                    - cell "● Expired" [ref=e437]:
                      - button "● Expired" [disabled] [ref=e438]:
                        - generic [ref=e439]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e440]:
                      - button "Generate Report" [ref=e441]
                      - button "Assignment actions" [ref=e442]
                  - row "Begin assignment Laverne Bailey_1765551811016 for N38573A34328, Hardy Laverne Bailey_1765551811016 More info 0 days ● Expired Generate Report Assignment actions" [ref=e443] [cursor=pointer]:
                    - cell "Begin assignment Laverne Bailey_1765551811016 for N38573A34328, Hardy" [ref=e444]:
                      - button "Begin assignment Laverne Bailey_1765551811016 for N38573A34328, Hardy" [disabled] [ref=e445]:
                        - generic [ref=e446]: N38573A34328, Hardy
                    - cell "Laverne Bailey_1765551811016 More info" [ref=e447]:
                      - generic [ref=e448]:
                        - button "Laverne Bailey_1765551811016" [disabled] [ref=e449]:
                          - generic [ref=e450]: Laverne Bailey_1765551811016
                        - button "More info" [ref=e451]
                    - cell "0 days" [ref=e452]:
                      - button "0 days" [disabled] [ref=e453]
                    - cell "● Expired" [ref=e454]:
                      - button "● Expired" [disabled] [ref=e455]:
                        - generic [ref=e456]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e457]:
                      - button "Generate Report" [ref=e458]
                      - button "Assignment actions" [ref=e459]
                  - row "Begin assignment Betty Reynolds_1765551310873 for N47814A30972, Macy Betty Reynolds_1765551310873 More info 0 days ● Expired Generate Report Assignment actions" [ref=e460] [cursor=pointer]:
                    - cell "Begin assignment Betty Reynolds_1765551310873 for N47814A30972, Macy" [ref=e461]:
                      - button "Begin assignment Betty Reynolds_1765551310873 for N47814A30972, Macy" [disabled] [ref=e462]:
                        - generic [ref=e463]: N47814A30972, Macy
                    - cell "Betty Reynolds_1765551310873 More info" [ref=e464]:
                      - generic [ref=e465]:
                        - button "Betty Reynolds_1765551310873" [disabled] [ref=e466]:
                          - generic [ref=e467]: Betty Reynolds_1765551310873
                        - button "More info" [ref=e468]
                    - cell "0 days" [ref=e469]:
                      - button "0 days" [disabled] [ref=e470]
                    - cell "● Expired" [ref=e471]:
                      - button "● Expired" [disabled] [ref=e472]:
                        - generic [ref=e473]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e474]:
                      - button "Generate Report" [ref=e475]
                      - button "Assignment actions" [ref=e476]
                  - row "Begin assignment Rogelio Stehr_1765551016264 for N87069A66923, Maddison Rogelio Stehr_1765551016264 More info 0 days ● Expired Generate Report Assignment actions" [ref=e477] [cursor=pointer]:
                    - cell "Begin assignment Rogelio Stehr_1765551016264 for N87069A66923, Maddison" [ref=e478]:
                      - button "Begin assignment Rogelio Stehr_1765551016264 for N87069A66923, Maddison" [disabled] [ref=e479]:
                        - generic [ref=e480]: N87069A66923, Maddison
                    - cell "Rogelio Stehr_1765551016264 More info" [ref=e481]:
                      - generic [ref=e482]:
                        - button "Rogelio Stehr_1765551016264" [disabled] [ref=e483]:
                          - generic [ref=e484]: Rogelio Stehr_1765551016264
                        - button "More info" [ref=e485]
                    - cell "0 days" [ref=e486]:
                      - button "0 days" [disabled] [ref=e487]
                    - cell "● Expired" [ref=e488]:
                      - button "● Expired" [disabled] [ref=e489]:
                        - generic [ref=e490]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e491]:
                      - button "Generate Report" [ref=e492]
                      - button "Assignment actions" [ref=e493]
                  - row "Begin assignment Marsha Morar MD_1765550723427 for N65497A48281, Amya Marsha Morar MD_1765550723427 More info 0 days ● Expired Generate Report Assignment actions" [ref=e494] [cursor=pointer]:
                    - cell "Begin assignment Marsha Morar MD_1765550723427 for N65497A48281, Amya" [ref=e495]:
                      - button "Begin assignment Marsha Morar MD_1765550723427 for N65497A48281, Amya" [disabled] [ref=e496]:
                        - generic [ref=e497]: N65497A48281, Amya
                    - cell "Marsha Morar MD_1765550723427 More info" [ref=e498]:
                      - generic [ref=e499]:
                        - button "Marsha Morar MD_1765550723427" [disabled] [ref=e500]:
                          - generic [ref=e501]: Marsha Morar MD_1765550723427
                        - button "More info" [ref=e502]
                    - cell "0 days" [ref=e503]:
                      - button "0 days" [disabled] [ref=e504]
                    - cell "● Expired" [ref=e505]:
                      - button "● Expired" [disabled] [ref=e506]:
                        - generic [ref=e507]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e508]:
                      - button "Generate Report" [ref=e509]
                      - button "Assignment actions" [ref=e510]
                  - row "Begin assignment Tyrone Satterfield_1765550428462 for N32204A79341, Abbey Tyrone Satterfield_1765550428462 More info 0 days ● Expired Generate Report Assignment actions" [ref=e511] [cursor=pointer]:
                    - cell "Begin assignment Tyrone Satterfield_1765550428462 for N32204A79341, Abbey" [ref=e512]:
                      - button "Begin assignment Tyrone Satterfield_1765550428462 for N32204A79341, Abbey" [disabled] [ref=e513]:
                        - generic [ref=e514]: N32204A79341, Abbey
                    - cell "Tyrone Satterfield_1765550428462 More info" [ref=e515]:
                      - generic [ref=e516]:
                        - button "Tyrone Satterfield_1765550428462" [disabled] [ref=e517]:
                          - generic [ref=e518]: Tyrone Satterfield_1765550428462
                        - button "More info" [ref=e519]
                    - cell "0 days" [ref=e520]:
                      - button "0 days" [disabled] [ref=e521]
                    - cell "● Expired" [ref=e522]:
                      - button "● Expired" [disabled] [ref=e523]:
                        - generic [ref=e524]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e525]:
                      - button "Generate Report" [ref=e526]
                      - button "Assignment actions" [ref=e527]
                  - row "Begin assignment Amelia Mueller_1765550133831 for N70724A54547, Alvera Amelia Mueller_1765550133831 More info 0 days ● Expired Generate Report Assignment actions" [ref=e528] [cursor=pointer]:
                    - cell "Begin assignment Amelia Mueller_1765550133831 for N70724A54547, Alvera" [ref=e529]:
                      - button "Begin assignment Amelia Mueller_1765550133831 for N70724A54547, Alvera" [disabled] [ref=e530]:
                        - generic [ref=e531]: N70724A54547, Alvera
                    - cell "Amelia Mueller_1765550133831 More info" [ref=e532]:
                      - generic [ref=e533]:
                        - button "Amelia Mueller_1765550133831" [disabled] [ref=e534]:
                          - generic [ref=e535]: Amelia Mueller_1765550133831
                        - button "More info" [ref=e536]
                    - cell "0 days" [ref=e537]:
                      - button "0 days" [disabled] [ref=e538]
                    - cell "● Expired" [ref=e539]:
                      - button "● Expired" [disabled] [ref=e540]:
                        - generic [ref=e541]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e542]:
                      - button "Generate Report" [ref=e543]
                      - button "Assignment actions" [ref=e544]
                  - row "Begin assignment Lindsay Hagenes_1765549835934 for N10469A76673, Javonte Lindsay Hagenes_1765549835934 More info 0 days ● Expired Generate Report Assignment actions" [ref=e545] [cursor=pointer]:
                    - cell "Begin assignment Lindsay Hagenes_1765549835934 for N10469A76673, Javonte" [ref=e546]:
                      - button "Begin assignment Lindsay Hagenes_1765549835934 for N10469A76673, Javonte" [disabled] [ref=e547]:
                        - generic [ref=e548]: N10469A76673, Javonte
                    - cell "Lindsay Hagenes_1765549835934 More info" [ref=e549]:
                      - generic [ref=e550]:
                        - button "Lindsay Hagenes_1765549835934" [disabled] [ref=e551]:
                          - generic [ref=e552]: Lindsay Hagenes_1765549835934
                        - button "More info" [ref=e553]
                    - cell "0 days" [ref=e554]:
                      - button "0 days" [disabled] [ref=e555]
                    - cell "● Expired" [ref=e556]:
                      - button "● Expired" [disabled] [ref=e557]:
                        - generic [ref=e558]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e559]:
                      - button "Generate Report" [ref=e560]
                      - button "Assignment actions" [ref=e561]
                  - row "Begin assignment Lamar Abbott_1765549538672 for N57461A88426, Vance Lamar Abbott_1765549538672 More info 0 days ● Expired Generate Report Assignment actions" [ref=e562] [cursor=pointer]:
                    - cell "Begin assignment Lamar Abbott_1765549538672 for N57461A88426, Vance" [ref=e563]:
                      - button "Begin assignment Lamar Abbott_1765549538672 for N57461A88426, Vance" [disabled] [ref=e564]:
                        - generic [ref=e565]: N57461A88426, Vance
                    - cell "Lamar Abbott_1765549538672 More info" [ref=e566]:
                      - generic [ref=e567]:
                        - button "Lamar Abbott_1765549538672" [disabled] [ref=e568]:
                          - generic [ref=e569]: Lamar Abbott_1765549538672
                        - button "More info" [ref=e570]
                    - cell "0 days" [ref=e571]:
                      - button "0 days" [disabled] [ref=e572]
                    - cell "● Expired" [ref=e573]:
                      - button "● Expired" [disabled] [ref=e574]:
                        - generic [ref=e575]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e576]:
                      - button "Generate Report" [ref=e577]
                      - button "Assignment actions" [ref=e578]
                  - row "Begin assignment Sidney Keeling_1765549035172 for N35314A26869, Santino Sidney Keeling_1765549035172 More info 0 days ● Expired Generate Report Assignment actions" [ref=e579] [cursor=pointer]:
                    - cell "Begin assignment Sidney Keeling_1765549035172 for N35314A26869, Santino" [ref=e580]:
                      - button "Begin assignment Sidney Keeling_1765549035172 for N35314A26869, Santino" [disabled] [ref=e581]:
                        - generic [ref=e582]: N35314A26869, Santino
                    - cell "Sidney Keeling_1765549035172 More info" [ref=e583]:
                      - generic [ref=e584]:
                        - button "Sidney Keeling_1765549035172" [disabled] [ref=e585]:
                          - generic [ref=e586]: Sidney Keeling_1765549035172
                        - button "More info" [ref=e587]
                    - cell "0 days" [ref=e588]:
                      - button "0 days" [disabled] [ref=e589]
                    - cell "● Expired" [ref=e590]:
                      - button "● Expired" [disabled] [ref=e591]:
                        - generic [ref=e592]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e593]:
                      - button "Generate Report" [ref=e594]
                      - button "Assignment actions" [ref=e595]
                  - row "Begin assignment Curtis Predovic_1765548851907 for N12202A61115, Ezra Curtis Predovic_1765548851907 More info 0 days ● Expired Generate Report Assignment actions" [ref=e596] [cursor=pointer]:
                    - cell "Begin assignment Curtis Predovic_1765548851907 for N12202A61115, Ezra" [ref=e597]:
                      - button "Begin assignment Curtis Predovic_1765548851907 for N12202A61115, Ezra" [disabled] [ref=e598]:
                        - generic [ref=e599]: N12202A61115, Ezra
                    - cell "Curtis Predovic_1765548851907 More info" [ref=e600]:
                      - generic [ref=e601]:
                        - button "Curtis Predovic_1765548851907" [disabled] [ref=e602]:
                          - generic [ref=e603]: Curtis Predovic_1765548851907
                        - button "More info" [ref=e604]
                    - cell "0 days" [ref=e605]:
                      - button "0 days" [disabled] [ref=e606]
                    - cell "● Expired" [ref=e607]:
                      - button "● Expired" [disabled] [ref=e608]:
                        - generic [ref=e609]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e610]:
                      - button "Generate Report" [ref=e611]
                      - button "Assignment actions" [ref=e612]
                  - row "Begin assignment Leah Moore_1765548667643 for N13591A55433, Nick Leah Moore_1765548667643 More info 0 days ● Expired Generate Report Assignment actions" [ref=e613] [cursor=pointer]:
                    - cell "Begin assignment Leah Moore_1765548667643 for N13591A55433, Nick" [ref=e614]:
                      - button "Begin assignment Leah Moore_1765548667643 for N13591A55433, Nick" [disabled] [ref=e615]:
                        - generic [ref=e616]: N13591A55433, Nick
                    - cell "Leah Moore_1765548667643 More info" [ref=e617]:
                      - generic [ref=e618]:
                        - button "Leah Moore_1765548667643" [disabled] [ref=e619]:
                          - generic [ref=e620]: Leah Moore_1765548667643
                        - button "More info" [ref=e621]
                    - cell "0 days" [ref=e622]:
                      - button "0 days" [disabled] [ref=e623]
                    - cell "● Expired" [ref=e624]:
                      - button "● Expired" [disabled] [ref=e625]:
                        - generic [ref=e626]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e627]:
                      - button "Generate Report" [ref=e628]
                      - button "Assignment actions" [ref=e629]
                  - row "Begin assignment Kerry Rogahn_1765548497902 for N49071A38090, Coralie Kerry Rogahn_1765548497902 More info 0 days ● Expired Generate Report Assignment actions" [ref=e630] [cursor=pointer]:
                    - cell "Begin assignment Kerry Rogahn_1765548497902 for N49071A38090, Coralie" [ref=e631]:
                      - button "Begin assignment Kerry Rogahn_1765548497902 for N49071A38090, Coralie" [disabled] [ref=e632]:
                        - generic [ref=e633]: N49071A38090, Coralie
                    - cell "Kerry Rogahn_1765548497902 More info" [ref=e634]:
                      - generic [ref=e635]:
                        - button "Kerry Rogahn_1765548497902" [disabled] [ref=e636]:
                          - generic [ref=e637]: Kerry Rogahn_1765548497902
                        - button "More info" [ref=e638]
                    - cell "0 days" [ref=e639]:
                      - button "0 days" [disabled] [ref=e640]
                    - cell "● Expired" [ref=e641]:
                      - button "● Expired" [disabled] [ref=e642]:
                        - generic [ref=e643]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e644]:
                      - button "Generate Report" [ref=e645]
                      - button "Assignment actions" [ref=e646]
                  - row "Begin assignment Timmy Okuneva_1765548328164 for N84669A8202, Elbert Timmy Okuneva_1765548328164 More info 0 days ● Expired Generate Report Assignment actions" [ref=e647] [cursor=pointer]:
                    - cell "Begin assignment Timmy Okuneva_1765548328164 for N84669A8202, Elbert" [ref=e648]:
                      - button "Begin assignment Timmy Okuneva_1765548328164 for N84669A8202, Elbert" [disabled] [ref=e649]:
                        - generic [ref=e650]: N84669A8202, Elbert
                    - cell "Timmy Okuneva_1765548328164 More info" [ref=e651]:
                      - generic [ref=e652]:
                        - button "Timmy Okuneva_1765548328164" [disabled] [ref=e653]:
                          - generic [ref=e654]: Timmy Okuneva_1765548328164
                        - button "More info" [ref=e655]
                    - cell "0 days" [ref=e656]:
                      - button "0 days" [disabled] [ref=e657]
                    - cell "● Expired" [ref=e658]:
                      - button "● Expired" [disabled] [ref=e659]:
                        - generic [ref=e660]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e661]:
                      - button "Generate Report" [ref=e662]
                      - button "Assignment actions" [ref=e663]
                  - row "Begin assignment Florence Waelchi_1765548157939 for N65888A93546, Sid Florence Waelchi_1765548157939 More info 0 days ● Expired Generate Report Assignment actions" [ref=e664] [cursor=pointer]:
                    - cell "Begin assignment Florence Waelchi_1765548157939 for N65888A93546, Sid" [ref=e665]:
                      - button "Begin assignment Florence Waelchi_1765548157939 for N65888A93546, Sid" [disabled] [ref=e666]:
                        - generic [ref=e667]: N65888A93546, Sid
                    - cell "Florence Waelchi_1765548157939 More info" [ref=e668]:
                      - generic [ref=e669]:
                        - button "Florence Waelchi_1765548157939" [disabled] [ref=e670]:
                          - generic [ref=e671]: Florence Waelchi_1765548157939
                        - button "More info" [ref=e672]
                    - cell "0 days" [ref=e673]:
                      - button "0 days" [disabled] [ref=e674]
                    - cell "● Expired" [ref=e675]:
                      - button "● Expired" [disabled] [ref=e676]:
                        - generic [ref=e677]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e678]:
                      - button "Generate Report" [ref=e679]
                      - button "Assignment actions" [ref=e680]
                  - row "Begin assignment Hector Denesik_1765547987739 for N92863A59865, Idell Hector Denesik_1765547987739 More info 0 days ● Expired Generate Report Assignment actions" [ref=e681] [cursor=pointer]:
                    - cell "Begin assignment Hector Denesik_1765547987739 for N92863A59865, Idell" [ref=e682]:
                      - button "Begin assignment Hector Denesik_1765547987739 for N92863A59865, Idell" [disabled] [ref=e683]:
                        - generic [ref=e684]: N92863A59865, Idell
                    - cell "Hector Denesik_1765547987739 More info" [ref=e685]:
                      - generic [ref=e686]:
                        - button "Hector Denesik_1765547987739" [disabled] [ref=e687]:
                          - generic [ref=e688]: Hector Denesik_1765547987739
                        - button "More info" [ref=e689]
                    - cell "0 days" [ref=e690]:
                      - button "0 days" [disabled] [ref=e691]
                    - cell "● Expired" [ref=e692]:
                      - button "● Expired" [disabled] [ref=e693]:
                        - generic [ref=e694]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e695]:
                      - button "Generate Report" [ref=e696]
                      - button "Assignment actions" [ref=e697]
                  - row "Begin assignment Mr. Brent Metz-Mayert_1765547818098 for N59878A10186, Niko Mr. Brent Metz-Mayert_1765547818098 More info 0 days ● Expired Generate Report Assignment actions" [ref=e698] [cursor=pointer]:
                    - cell "Begin assignment Mr. Brent Metz-Mayert_1765547818098 for N59878A10186, Niko" [ref=e699]:
                      - button "Begin assignment Mr. Brent Metz-Mayert_1765547818098 for N59878A10186, Niko" [disabled] [ref=e700]:
                        - generic [ref=e701]: N59878A10186, Niko
                    - cell "Mr. Brent Metz-Mayert_1765547818098 More info" [ref=e702]:
                      - generic [ref=e703]:
                        - button "Mr. Brent Metz-Mayert_1765547818098" [disabled] [ref=e704]:
                          - generic [ref=e705]: Mr. Brent Metz-Mayert_1765547818098
                        - button "More info" [ref=e706]
                    - cell "0 days" [ref=e707]:
                      - button "0 days" [disabled] [ref=e708]
                    - cell "● Expired" [ref=e709]:
                      - button "● Expired" [disabled] [ref=e710]:
                        - generic [ref=e711]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e712]:
                      - button "Generate Report" [ref=e713]
                      - button "Assignment actions" [ref=e714]
                  - row "Begin assignment Kurt Robel_1765547647786 for N84855A42460, Percy Kurt Robel_1765547647786 More info 0 days ● Expired Generate Report Assignment actions" [ref=e715] [cursor=pointer]:
                    - cell "Begin assignment Kurt Robel_1765547647786 for N84855A42460, Percy" [ref=e716]:
                      - button "Begin assignment Kurt Robel_1765547647786 for N84855A42460, Percy" [disabled] [ref=e717]:
                        - generic [ref=e718]: N84855A42460, Percy
                    - cell "Kurt Robel_1765547647786 More info" [ref=e719]:
                      - generic [ref=e720]:
                        - button "Kurt Robel_1765547647786" [disabled] [ref=e721]:
                          - generic [ref=e722]: Kurt Robel_1765547647786
                        - button "More info" [ref=e723]
                    - cell "0 days" [ref=e724]:
                      - button "0 days" [disabled] [ref=e725]
                    - cell "● Expired" [ref=e726]:
                      - button "● Expired" [disabled] [ref=e727]:
                        - generic [ref=e728]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e729]:
                      - button "Generate Report" [ref=e730]
                      - button "Assignment actions" [ref=e731]
                  - row "Begin assignment Francisco Kulas_1765547478163 for N87786A62854, Moriah Francisco Kulas_1765547478163 More info 0 days ● Expired Generate Report Assignment actions" [ref=e732] [cursor=pointer]:
                    - cell "Begin assignment Francisco Kulas_1765547478163 for N87786A62854, Moriah" [ref=e733]:
                      - button "Begin assignment Francisco Kulas_1765547478163 for N87786A62854, Moriah" [disabled] [ref=e734]:
                        - generic [ref=e735]: N87786A62854, Moriah
                    - cell "Francisco Kulas_1765547478163 More info" [ref=e736]:
                      - generic [ref=e737]:
                        - button "Francisco Kulas_1765547478163" [disabled] [ref=e738]:
                          - generic [ref=e739]: Francisco Kulas_1765547478163
                        - button "More info" [ref=e740]
                    - cell "0 days" [ref=e741]:
                      - button "0 days" [disabled] [ref=e742]
                    - cell "● Expired" [ref=e743]:
                      - button "● Expired" [disabled] [ref=e744]:
                        - generic [ref=e745]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e746]:
                      - button "Generate Report" [ref=e747]
                      - button "Assignment actions" [ref=e748]
                  - row "Begin assignment Nancy Wuckert_1765547306428 for N76512A43842, Armand Nancy Wuckert_1765547306428 More info 0 days ● Expired Generate Report Assignment actions" [ref=e749] [cursor=pointer]:
                    - cell "Begin assignment Nancy Wuckert_1765547306428 for N76512A43842, Armand" [ref=e750]:
                      - button "Begin assignment Nancy Wuckert_1765547306428 for N76512A43842, Armand" [disabled] [ref=e751]:
                        - generic [ref=e752]: N76512A43842, Armand
                    - cell "Nancy Wuckert_1765547306428 More info" [ref=e753]:
                      - generic [ref=e754]:
                        - button "Nancy Wuckert_1765547306428" [disabled] [ref=e755]:
                          - generic [ref=e756]: Nancy Wuckert_1765547306428
                        - button "More info" [ref=e757]
                    - cell "0 days" [ref=e758]:
                      - button "0 days" [disabled] [ref=e759]
                    - cell "● Expired" [ref=e760]:
                      - button "● Expired" [disabled] [ref=e761]:
                        - generic [ref=e762]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e763]:
                      - button "Generate Report" [ref=e764]
                      - button "Assignment actions" [ref=e765]
                  - row "Begin assignment Johnny Sawayn_1765547140523 for N8270A9218, Lenny Johnny Sawayn_1765547140523 More info 0 days ● Expired Generate Report Assignment actions" [ref=e766] [cursor=pointer]:
                    - cell "Begin assignment Johnny Sawayn_1765547140523 for N8270A9218, Lenny" [ref=e767]:
                      - button "Begin assignment Johnny Sawayn_1765547140523 for N8270A9218, Lenny" [disabled] [ref=e768]:
                        - generic [ref=e769]: N8270A9218, Lenny
                    - cell "Johnny Sawayn_1765547140523 More info" [ref=e770]:
                      - generic [ref=e771]:
                        - button "Johnny Sawayn_1765547140523" [disabled] [ref=e772]:
                          - generic [ref=e773]: Johnny Sawayn_1765547140523
                        - button "More info" [ref=e774]
                    - cell "0 days" [ref=e775]:
                      - button "0 days" [disabled] [ref=e776]
                    - cell "● Expired" [ref=e777]:
                      - button "● Expired" [disabled] [ref=e778]:
                        - generic [ref=e779]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e780]:
                      - button "Generate Report" [ref=e781]
                      - button "Assignment actions" [ref=e782]
                  - row "Begin assignment Patty Reichert_1765530044784 for N64770A10075, Renee Patty Reichert_1765530044784 More info 0 days ● Expired Generate Report Assignment actions" [ref=e783] [cursor=pointer]:
                    - cell "Begin assignment Patty Reichert_1765530044784 for N64770A10075, Renee" [ref=e784]:
                      - button "Begin assignment Patty Reichert_1765530044784 for N64770A10075, Renee" [disabled] [ref=e785]:
                        - generic [ref=e786]: N64770A10075, Renee
                    - cell "Patty Reichert_1765530044784 More info" [ref=e787]:
                      - generic [ref=e788]:
                        - button "Patty Reichert_1765530044784" [disabled] [ref=e789]:
                          - generic [ref=e790]: Patty Reichert_1765530044784
                        - button "More info" [ref=e791]
                    - cell "0 days" [ref=e792]:
                      - button "0 days" [disabled] [ref=e793]
                    - cell "● Expired" [ref=e794]:
                      - button "● Expired" [disabled] [ref=e795]:
                        - generic [ref=e796]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e797]:
                      - button "Generate Report" [ref=e798]
                      - button "Assignment actions" [ref=e799]
                  - row "Begin assignment Celia Ankunding_1765527621962 for N52182A78468, Randy Celia Ankunding_1765527621962 More info 0 days ● Expired Generate Report Assignment actions" [ref=e800] [cursor=pointer]:
                    - cell "Begin assignment Celia Ankunding_1765527621962 for N52182A78468, Randy" [ref=e801]:
                      - button "Begin assignment Celia Ankunding_1765527621962 for N52182A78468, Randy" [disabled] [ref=e802]:
                        - generic [ref=e803]: N52182A78468, Randy
                    - cell "Celia Ankunding_1765527621962 More info" [ref=e804]:
                      - generic [ref=e805]:
                        - button "Celia Ankunding_1765527621962" [disabled] [ref=e806]:
                          - generic [ref=e807]: Celia Ankunding_1765527621962
                        - button "More info" [ref=e808]
                    - cell "0 days" [ref=e809]:
                      - button "0 days" [disabled] [ref=e810]
                    - cell "● Expired" [ref=e811]:
                      - button "● Expired" [disabled] [ref=e812]:
                        - generic [ref=e813]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e814]:
                      - button "Generate Report" [ref=e815]
                      - button "Assignment actions" [ref=e816]
            - generic [ref=e817]:
              - generic [ref=e818]:
                - generic [ref=e820]:
                  - img [ref=e821]
                  - heading "Notifications Center" [level=2] [ref=e825]
                - generic [ref=e826]:
                  - generic [ref=e827]:
                    - generic [ref=e828]: 08/31/2026
                    - paragraph [ref=e829]:
                      - generic [ref=e830]: The RiversideScore platform will be down for maintenance on Wednesday, September 2nd, from 9:30 PM
                      - text: to 12:00 AM Central.
                      - generic [ref=e831]: During this time, access will be unavailable. If you have any questions, please contact
                      - text: "Customer Support Monday- Friday 8AM- 4PM Central at:"
                    - paragraph [ref=e832]:
                      - text: "Tel:"
                      - link "800-323-9540" [ref=e833] [cursor=pointer]:
                        - /url: tel:8003239540
                      - text: "Email:"
                      - link "Inquiry@service.riversideinsights.com" [ref=e835] [cursor=pointer]:
                        - /url: mailto:Inquiry@service.riversideinsights.com
                    - paragraph [ref=e836]: We appreciate your patience as we work to improve the experience!
                  - generic [ref=e837]:
                    - generic [ref=e838]: 08/27/2026
                    - text: Assessment Administration Notice A small number of users with limited available disk space may experience issues loading examinees, completing assessments, or capturing audio data. If you encounter these issues, switching to Firefox may allow you to continue administering assessments. Audio capture functionality may be unavailable when device storage is low. No assessment data is lost as a result of this issue, and the vast majority of users are not affected.
                  - generic [ref=e839]:
                    - generic [ref=e840]: 08/21/2026
                    - generic [ref=e841]:
                      - paragraph [ref=e842]:
                        - strong [ref=e843]: Experience Platform Improvements
                      - paragraph [ref=e844]: Smoother workflows, better reporting, and updated resources for a more reliable platform experience.
                      - paragraph [ref=e845]:
                        - link "Learn More" [ref=e847] [cursor=pointer]:
                          - /url: https://riversideinsights.com/hubfs/Release%20Notes%208_20_2026.pdf
              - generic [ref=e848]:
                - generic [ref=e850]:
                  - img [ref=e851]
                  - heading "Resources" [level=3] [ref=e855]
                - list [ref=e856]:
                  - listitem [ref=e857]:
                    - button "Riverside Learn" [ref=e858] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e859]
                      - img [ref=e861]
                  - listitem [ref=e863]:
                    - button "Onboarding Tutorial Videos" [ref=e864] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e865]
                      - img [ref=e867]
                  - listitem [ref=e869]:
                    - button "Quick Reference Guides" [ref=e870] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e871]
                      - img [ref=e873]
                - button "View All" [ref=e876] [cursor=pointer]
      - contentinfo [ref=e877]:
        - generic [ref=e878]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e879] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e880]
        - generic [ref=e881]:
          - link "Riverside Insights Facebook" [ref=e882] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e883]
          - link "Riverside Insights Twitter" [ref=e884] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e885]
          - link "Riverside Insights LinkedIn" [ref=e886] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e887]
          - link "Riverside Insights Instagram" [ref=e888] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e889]
        - generic [ref=e890]:
          - button "Leave Feedback" [ref=e891] [cursor=pointer]
          - generic [ref=e892]: "|"
          - link "Terms of Use" [ref=e893] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e894]: "|"
          - link "Privacy Policy" [ref=e895] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e896]: Footer region end
```

# Test source

```ts
  6229 |       }
  6230 |       await this.plainNextButtonOrEndButton.click();
  6231 |       if (
  6232 |         (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
  6233 |       ) {
  6234 |         break;
  6235 |       }
  6236 |     }
  6237 |   }
  6238 |     async pickTheTestNeeded(testName: string, student:StudentPage) {
  6239 |         await this.page.bringToFront();
  6240 |         await this.page.waitForTimeout(2000);
  6241 | 
  6242 |         const testSessionIntro: Locator = await this.page.locator("//b[text()='Test Session Introduction']");
  6243 |         if (await testSessionIntro.isVisible()) {
  6244 |             for (let i = 1; i <= 3; i++) {
  6245 |                 await this.page.waitForTimeout(2000);
  6246 |                 if (await this.plainNextButtonOrEndButton.isEnabled()) {
  6247 |                     if (i === 3) {
  6248 |                         await this.beginAdminButton.click();
  6249 |                     } else {
  6250 |                         await this.page.waitForTimeout(2000);
  6251 |                         await this.plainNextButtonOrEndButton.click();
  6252 |                     }
  6253 |                 } else {
  6254 |                     await this.plainNextButtonOrEndButton.waitFor({state: 'visible', timeout: 50000});
  6255 |                 }
  6256 |             }
  6257 |         }
  6258 |         if ((await this.administrationOverviewPageTestName.isVisible()) && (await this.administrationOverviewPageTestName.textContent()).includes(testName)) {
  6259 |             return;
  6260 |         } else {
  6261 |             for (let i = 0; i < 3; i++) {
  6262 |                 if (await this.mainNavigation.isEnabled()) {
  6263 |                     await this.page.waitForTimeout(1000);
  6264 |                     await this.mainNavigation.click();
  6265 |                     break;
  6266 |                 }
  6267 |                 await this.page.waitForTimeout(1000);
  6268 |             }
  6269 |             await this.mainNavigationTests.waitFor({
  6270 |                 state: "visible",
  6271 |                 timeout: 80000,
  6272 |             });
  6273 |             await this.page.waitForTimeout(1000);
  6274 |             await this.mainNavigationTests.click();
  6275 |             const testButton = this.page
  6276 |                 .locator("//div[@class='TestList_mcs_testName']")
  6277 |                 .getByText(testName, {exact: true});
  6278 |             await testButton.waitFor({state: "visible", timeout: 10000});
  6279 | 
  6280 |             const isDisabled = await testButton.isDisabled();
  6281 |             const buttonText = await testButton.textContent();
  6282 |             if (isDisabled && buttonText === testName) {
  6283 |                 console.log(
  6284 |                     `Test "${testName}" is already selected and disabled; closing menu`
  6285 |                 );
  6286 |                 const closeButton = this.page.locator(
  6287 |                     "//button[@class='plain-button close-btn']"
  6288 |                 );
  6289 |                 await closeButton.waitFor({state: "visible", timeout: 5000});
  6290 |                 await closeButton.click();
  6291 |                 return;
  6292 |             }
  6293 |             await testButton.click();
  6294 |             console.log(`Selected test "${testName}"`);
  6295 |         }
  6296 |         if (await this.syncDevicePopUp.isVisible()) {
  6297 |             await student.clickOnAcceptButton();
  6298 |             return;
  6299 |         }
  6300 |     }
  6301 | 
  6302 |   async getActualTestName() {
  6303 |     return await this.testNameAtAdminOverview.textContent();
  6304 |   }
  6305 | 
  6306 |   async clickOnLetsBeginButtonAndStartTest(testName: string, ssp: string) {
  6307 |     await this.letsBeginButton.waitFor({
  6308 |       state: "visible",
  6309 |       timeout: 5 * 60 * 1000,
  6310 |     });
  6311 | 
  6312 |     let actualTestName = await this.getActualTestName();
  6313 |     if (actualTestName != testName) {
  6314 |       await this.page.waitForTimeout(1000);
  6315 |       await this.mainNavigation.click();
  6316 |       await this.mainNavigationTests.click();
  6317 |       const testButton = this.page
  6318 |         .locator("//div[@class='TestList_mcs_testName']")
  6319 |         .getByText(testName, { exact: true });
  6320 |       try {
  6321 |         await testButton.waitFor({ state: "visible", timeout: 10000 });
  6322 |         await testButton.click();
  6323 |       } catch {
  6324 |         // Test not present in left nav — add it via "+ Add Test", then re-select.
  6325 |         await this.addPlusTestsButton.click();
  6326 |         await this.searchTests.fill(testName);
  6327 |         await this.searchIcon.click();
  6328 |         await this.page.waitForTimeout(1000);
> 6329 |         await this.selectTests.first().click();
       |                                        ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  6330 |         await this.addTestsButton.click();
  6331 |         await this.page.waitForTimeout(2000);
  6332 |         await testButton.waitFor({ state: "visible", timeout: 10000 });
  6333 |         await testButton.click();
  6334 |       }
  6335 |       await this.page.waitForLoadState("domcontentloaded");
  6336 |       await this.page.waitForTimeout(1000);
  6337 |     }
  6338 |     actualTestName = await this.getActualTestName();
  6339 |     expect(actualTestName, {
  6340 |       message: "The test name didnt match at Administration Overview page",
  6341 |     }).toContain(testName);
  6342 |     console.log(actualTestName);
  6343 |     await this.letsBeginButton.click();
  6344 |     await this.page.waitForTimeout(1000);
  6345 |     if (ssp === "All Examinees") {
  6346 |       await this.startTestButton.click();
  6347 |     } else {
  6348 |       await this.setTheSuggestedStartingPointTo(ssp);
  6349 |       await this.page.waitForTimeout(1500);
  6350 |       await this.startTestButton.click();
  6351 |     }
  6352 |   }
  6353 | 
  6354 |   async clickOnLetsBeginAndResumeInProgressTest(testName: string) {
  6355 |     if (await this.closeNavigationButton.isVisible()) {
  6356 |       await this.closeNavigationButton.click();
  6357 |     }
  6358 | 
  6359 |     await this.letsBeginButton.waitFor({
  6360 |       state: "visible",
  6361 |       timeout: 5 * 60 * 1000,
  6362 |     });
  6363 | 
  6364 |     let actualTestName = await this.getActualTestName();
  6365 |     if (actualTestName != testName) {
  6366 |       await this.page.waitForTimeout(1000);
  6367 |       await this.mainNavigation.click();
  6368 |       await this.mainNavigationTests.click();
  6369 |       const testButton = this.page
  6370 |         .locator("//div[@class='TestList_mcs_testName']")
  6371 |         .getByText(testName, { exact: true });
  6372 |       await testButton.waitFor({ state: "visible", timeout: 10000 });
  6373 |       await testButton.click();
  6374 |       await this.page.waitForLoadState("domcontentloaded");
  6375 |       await this.page.waitForTimeout(1000);
  6376 |     }
  6377 |     actualTestName = await this.getActualTestName();
  6378 |     expect(actualTestName, {
  6379 |       message: "The test name didn't match at Administration Overview page",
  6380 |     }).toContain(testName);
  6381 | 
  6382 |     await this.letsBeginButton.click();
  6383 |     await this.page.waitForLoadState();
  6384 |     await this.page.waitForTimeout(1000);
  6385 |     await this.nextItemButton.click();
  6386 |     await this.page.waitForTimeout(1000);
  6387 |   }
  6388 | 
  6389 |   async endTestAndEnterReviewMode() {
  6390 |     await this.plainNextButtonOrEndButton.last().click();
  6391 |     await this.endSessionButton.waitFor({ state: "visible", timeout: 60000 });
  6392 |     await this.endSessionButton.click();
  6393 |     await this.reviewFromConfirmButton.waitFor({ state: "visible", timeout: 60000 });
  6394 |     await this.reviewFromConfirmButton.click();
  6395 |     await this.dashboardPage.waitForLoadingSpinnerToDisappear();
  6396 |   }
  6397 | 
  6398 |   async setTheSuggestedStartingPointTo(sspOption: string) {
  6399 |     await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
  6400 |     await this.page.waitForTimeout(5000);
  6401 |     if (this.loading.isVisible())
  6402 |       await this.loading.waitFor({ state: "hidden", timeout: 3 * 60 * 1000 });
  6403 |     await this.sspDropDown.selectOption({ label: sspOption }, { timeout: 60000 });
  6404 |     await this.page.waitForTimeout(2000);
  6405 | 
  6406 |     try {
  6407 |       const selectedSsp = await this.page.$eval(
  6408 |         ".starting-point-dropdown",
  6409 |         (ele) => (ele as HTMLSelectElement).value
  6410 |       );
  6411 |       console.log(`selected ssp is = ${selectedSsp}`);
  6412 | 
  6413 |       expect(selectedSsp).toContain(sspOption);
  6414 |     } catch (error) {
  6415 |       await this.sspDropDown.selectOption({ label: sspOption });
  6416 |       console.error(
  6417 |         `the ssp drop down didnt select the one we want at first attempt so trying one more time ... ${error}`
  6418 |       );
  6419 |     }
  6420 |   }
  6421 | 
  6422 |   async selectTheCheckbox(radioButton: number, info?: string) {
  6423 |     await this.multiRadioButtons.nth(radioButton).click();
  6424 |   }
  6425 | 
  6426 |   async selectTheDropdownOption(
  6427 |     dropDown: number,
  6428 |     dropDownOpt: string,
  6429 |     info?: string
```