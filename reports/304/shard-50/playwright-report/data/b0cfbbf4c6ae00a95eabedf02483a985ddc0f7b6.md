# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIAndReports/NUMSEN_Single_BC5.spec.ts >>  NUMSEN UI And Reports >> Grades 3 to 4 - 5 lowest incorrect items SSP3 Test UI
- Location: src/tests/UIAndReports/NUMSEN_Single_BC5.spec.ts:10:13

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//button[text()=\'OK\']') to be visible

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
                  - row "Begin assignment Hazel Legros_1785572213301 (+1 more) for N28798A86784, Sadye Hazel Legros_1785572213301 (+1 more) More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e74] [cursor=pointer]:
                    - cell "Begin assignment Hazel Legros_1785572213301 (+1 more) for N28798A86784, Sadye" [ref=e75]:
                      - button "Begin assignment Hazel Legros_1785572213301 (+1 more) for N28798A86784, Sadye" [disabled] [ref=e76]:
                        - generic [ref=e77]: N28798A86784, Sadye
                    - cell "Hazel Legros_1785572213301 (+1 more) More info" [ref=e78]:
                      - generic [ref=e79]:
                        - button "Hazel Legros_1785572213301 (+1 more)" [disabled] [ref=e80]:
                          - generic [ref=e81]: Hazel Legros_1785572213301 (+1 more)
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
                  - row "Begin assignment Lance Rohan_1785571939358 for N50154A85722, Lesley Lance Rohan_1785571939358 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e92] [cursor=pointer]:
                    - cell "Begin assignment Lance Rohan_1785571939358 for N50154A85722, Lesley" [ref=e93]:
                      - button "Begin assignment Lance Rohan_1785571939358 for N50154A85722, Lesley" [disabled] [ref=e94]:
                        - generic [ref=e95]: N50154A85722, Lesley
                    - cell "Lance Rohan_1785571939358 More info" [ref=e96]:
                      - generic [ref=e97]:
                        - button "Lance Rohan_1785571939358" [disabled] [ref=e98]:
                          - generic [ref=e99]: Lance Rohan_1785571939358
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
                  - row "Begin assignment Gail Langworth_1785571557061 for N41891A25600, Enid Gail Langworth_1785571557061 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e110] [cursor=pointer]:
                    - cell "Begin assignment Gail Langworth_1785571557061 for N41891A25600, Enid" [ref=e111]:
                      - button "Begin assignment Gail Langworth_1785571557061 for N41891A25600, Enid" [disabled] [ref=e112]:
                        - generic [ref=e113]: N41891A25600, Enid
                    - cell "Gail Langworth_1785571557061 More info" [ref=e114]:
                      - generic [ref=e115]:
                        - button "Gail Langworth_1785571557061" [disabled] [ref=e116]:
                          - generic [ref=e117]: Gail Langworth_1785571557061
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
                  - row "Begin assignment Walter Fisher V_1785571313205 for N23137A57924, Velda Walter Fisher V_1785571313205 More info 90 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e128] [cursor=pointer]:
                    - cell "Begin assignment Walter Fisher V_1785571313205 for N23137A57924, Velda" [ref=e129]:
                      - button "Begin assignment Walter Fisher V_1785571313205 for N23137A57924, Velda" [disabled] [ref=e130]:
                        - generic [ref=e131]: N23137A57924, Velda
                    - cell "Walter Fisher V_1785571313205 More info" [ref=e132]:
                      - generic [ref=e133]:
                        - button "Walter Fisher V_1785571313205" [disabled] [ref=e134]:
                          - generic [ref=e135]: Walter Fisher V_1785571313205
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
                  - row "Begin assignment Miss Alexandra Prohaska_1785570983567 (+1 more) for N31422A92897, Delta Miss Alexandra Prohaska_1785570983567 (+1 more) More info 90 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e146] [cursor=pointer]:
                    - cell "Begin assignment Miss Alexandra Prohaska_1785570983567 (+1 more) for N31422A92897, Delta" [ref=e147]:
                      - button "Begin assignment Miss Alexandra Prohaska_1785570983567 (+1 more) for N31422A92897, Delta" [disabled] [ref=e148]:
                        - generic [ref=e149]: N31422A92897, Delta
                    - cell "Miss Alexandra Prohaska_1785570983567 (+1 more) More info" [ref=e150]:
                      - generic [ref=e151]:
                        - button "Miss Alexandra Prohaska_1785570983567 (+1 more)" [disabled] [ref=e152]:
                          - generic [ref=e153]: Miss Alexandra Prohaska_1785570983567 (+1 more)
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
                  - row "Begin assignment Leigh Douglas_1785558268240 for N69664A46786, Sarai Leigh Douglas_1785558268240 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e164] [cursor=pointer]:
                    - cell "Begin assignment Leigh Douglas_1785558268240 for N69664A46786, Sarai" [ref=e165]:
                      - button "Begin assignment Leigh Douglas_1785558268240 for N69664A46786, Sarai" [disabled] [ref=e166]:
                        - generic [ref=e167]: N69664A46786, Sarai
                    - cell "Leigh Douglas_1785558268240 More info" [ref=e168]:
                      - generic [ref=e169]:
                        - button "Leigh Douglas_1785558268240" [disabled] [ref=e170]:
                          - generic [ref=e171]: Leigh Douglas_1785558268240
                        - button "More info" [ref=e172]
                    - cell "89 days" [ref=e173]:
                      - button "89 days" [disabled] [ref=e174]
                    - cell "● Submitted" [ref=e175]:
                      - button "● Submitted" [disabled] [ref=e176]:
                        - generic [ref=e177]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e178]:
                      - button "Edit Assignment" [disabled] [ref=e179]
                      - button "Add Tests" [disabled] [ref=e180]
                      - button "Assignment actions" [ref=e181]
                  - row "Begin assignment Allen Leuschke_1785558027541 for N36794A25061, Adele Allen Leuschke_1785558027541 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e182] [cursor=pointer]:
                    - cell "Begin assignment Allen Leuschke_1785558027541 for N36794A25061, Adele" [ref=e183]:
                      - button "Begin assignment Allen Leuschke_1785558027541 for N36794A25061, Adele" [disabled] [ref=e184]:
                        - generic [ref=e185]: N36794A25061, Adele
                    - cell "Allen Leuschke_1785558027541 More info" [ref=e186]:
                      - generic [ref=e187]:
                        - button "Allen Leuschke_1785558027541" [disabled] [ref=e188]:
                          - generic [ref=e189]: Allen Leuschke_1785558027541
                        - button "More info" [ref=e190]
                    - cell "89 days" [ref=e191]:
                      - button "89 days" [disabled] [ref=e192]
                    - cell "● Submitted" [ref=e193]:
                      - button "● Submitted" [disabled] [ref=e194]:
                        - generic [ref=e195]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e196]:
                      - button "Edit Assignment" [disabled] [ref=e197]
                      - button "Add Tests" [disabled] [ref=e198]
                      - button "Assignment actions" [ref=e199]
                  - row "Begin assignment Calvin Gleason_1785557665144 for N55906A97802, Naomie Calvin Gleason_1785557665144 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e200] [cursor=pointer]:
                    - cell "Begin assignment Calvin Gleason_1785557665144 for N55906A97802, Naomie" [ref=e201]:
                      - button "Begin assignment Calvin Gleason_1785557665144 for N55906A97802, Naomie" [disabled] [ref=e202]:
                        - generic [ref=e203]: N55906A97802, Naomie
                    - cell "Calvin Gleason_1785557665144 More info" [ref=e204]:
                      - generic [ref=e205]:
                        - button "Calvin Gleason_1785557665144" [disabled] [ref=e206]:
                          - generic [ref=e207]: Calvin Gleason_1785557665144
                        - button "More info" [ref=e208]
                    - cell "89 days" [ref=e209]:
                      - button "89 days" [disabled] [ref=e210]
                    - cell "● Submitted" [ref=e211]:
                      - button "● Submitted" [disabled] [ref=e212]:
                        - generic [ref=e213]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e214]:
                      - button "Edit Assignment" [disabled] [ref=e215]
                      - button "Add Tests" [disabled] [ref=e216]
                      - button "Assignment actions" [ref=e217]
                  - row "Begin assignment Wilbert Harris_1785557397190 for N95451A65007, Margie Wilbert Harris_1785557397190 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e218] [cursor=pointer]:
                    - cell "Begin assignment Wilbert Harris_1785557397190 for N95451A65007, Margie" [ref=e219]:
                      - button "Begin assignment Wilbert Harris_1785557397190 for N95451A65007, Margie" [disabled] [ref=e220]:
                        - generic [ref=e221]: N95451A65007, Margie
                    - cell "Wilbert Harris_1785557397190 More info" [ref=e222]:
                      - generic [ref=e223]:
                        - button "Wilbert Harris_1785557397190" [disabled] [ref=e224]:
                          - generic [ref=e225]: Wilbert Harris_1785557397190
                        - button "More info" [ref=e226]
                    - cell "89 days" [ref=e227]:
                      - button "89 days" [disabled] [ref=e228]
                    - cell "● Submitted" [ref=e229]:
                      - button "● Submitted" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row "Begin assignment Mrs. Jan Jerde_1785557158680 for N97842A77591, Angie Mrs. Jan Jerde_1785557158680 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e236] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Jan Jerde_1785557158680 for N97842A77591, Angie" [ref=e237]:
                      - button "Begin assignment Mrs. Jan Jerde_1785557158680 for N97842A77591, Angie" [disabled] [ref=e238]:
                        - generic [ref=e239]: N97842A77591, Angie
                    - cell "Mrs. Jan Jerde_1785557158680 More info" [ref=e240]:
                      - generic [ref=e241]:
                        - button "Mrs. Jan Jerde_1785557158680" [disabled] [ref=e242]:
                          - generic [ref=e243]: Mrs. Jan Jerde_1785557158680
                        - button "More info" [ref=e244]
                    - cell "89 days" [ref=e245]:
                      - button "89 days" [disabled] [ref=e246]
                    - cell "● Submitted" [ref=e247]:
                      - button "● Submitted" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row "Begin assignment Jeffrey Ritchie_1785555302143 (+1 more) for N40255A76419, Julian Jeffrey Ritchie_1785555302143 (+1 more) More info 89 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e254] [cursor=pointer]:
                    - cell "Begin assignment Jeffrey Ritchie_1785555302143 (+1 more) for N40255A76419, Julian" [ref=e255]:
                      - button "Begin assignment Jeffrey Ritchie_1785555302143 (+1 more) for N40255A76419, Julian" [disabled] [ref=e256]:
                        - generic [ref=e257]: N40255A76419, Julian
                    - cell "Jeffrey Ritchie_1785555302143 (+1 more) More info" [ref=e258]:
                      - generic [ref=e259]:
                        - button "Jeffrey Ritchie_1785555302143 (+1 more)" [disabled] [ref=e260]:
                          - generic [ref=e261]: Jeffrey Ritchie_1785555302143 (+1 more)
                        - button "More info" [ref=e262]
                    - cell "89 days" [ref=e263]:
                      - button "89 days" [disabled] [ref=e264]
                    - cell "● In Progress" [ref=e265]:
                      - button "● In Progress" [disabled] [ref=e266]:
                        - generic [ref=e267]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e268]:
                      - button "Edit Assignment" [disabled] [ref=e269]
                      - button "Add Tests" [disabled] [ref=e270]
                      - button "Assignment actions" [ref=e271]
                  - row "Begin assignment Frankie Johns_1785555024605 for N87399A57466, Rahul Frankie Johns_1785555024605 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e272] [cursor=pointer]:
                    - cell "Begin assignment Frankie Johns_1785555024605 for N87399A57466, Rahul" [ref=e273]:
                      - button "Begin assignment Frankie Johns_1785555024605 for N87399A57466, Rahul" [disabled] [ref=e274]:
                        - generic [ref=e275]: N87399A57466, Rahul
                    - cell "Frankie Johns_1785555024605 More info" [ref=e276]:
                      - generic [ref=e277]:
                        - button "Frankie Johns_1785555024605" [disabled] [ref=e278]:
                          - generic [ref=e279]: Frankie Johns_1785555024605
                        - button "More info" [ref=e280]
                    - cell "89 days" [ref=e281]:
                      - button "89 days" [disabled] [ref=e282]
                    - cell "● Submitted" [ref=e283]:
                      - button "● Submitted" [disabled] [ref=e284]:
                        - generic [ref=e285]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e286]:
                      - button "Edit Assignment" [disabled] [ref=e287]
                      - button "Add Tests" [disabled] [ref=e288]
                      - button "Assignment actions" [ref=e289]
                  - row "Begin assignment Edward Prohaska Sr._1785554455193 for N25082A19099, Era Edward Prohaska Sr._1785554455193 More info 89 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e290] [cursor=pointer]:
                    - cell "Begin assignment Edward Prohaska Sr._1785554455193 for N25082A19099, Era" [ref=e291]:
                      - button "Begin assignment Edward Prohaska Sr._1785554455193 for N25082A19099, Era" [disabled] [ref=e292]:
                        - generic [ref=e293]: N25082A19099, Era
                    - cell "Edward Prohaska Sr._1785554455193 More info" [ref=e294]:
                      - generic [ref=e295]:
                        - button "Edward Prohaska Sr._1785554455193" [disabled] [ref=e296]:
                          - generic [ref=e297]: Edward Prohaska Sr._1785554455193
                        - button "More info" [ref=e298]
                    - cell "89 days" [ref=e299]:
                      - button "89 days" [disabled] [ref=e300]
                    - cell "● Submitted" [ref=e301]:
                      - button "● Submitted" [disabled] [ref=e302]:
                        - generic [ref=e303]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e304]:
                      - button "Edit Assignment" [disabled] [ref=e305]
                      - button "Add Tests" [disabled] [ref=e306]
                      - button "Assignment actions" [ref=e307]
                  - row "Begin assignment Neil Abbott_1784738764418 for N98158A50794, Dereck Neil Abbott_1784738764418 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e308] [cursor=pointer]:
                    - cell "Begin assignment Neil Abbott_1784738764418 for N98158A50794, Dereck" [ref=e309]:
                      - button "Begin assignment Neil Abbott_1784738764418 for N98158A50794, Dereck" [disabled] [ref=e310]:
                        - generic [ref=e311]: N98158A50794, Dereck
                    - cell "Neil Abbott_1784738764418 More info" [ref=e312]:
                      - generic [ref=e313]:
                        - button "Neil Abbott_1784738764418" [disabled] [ref=e314]:
                          - generic [ref=e315]: Neil Abbott_1784738764418
                        - button "More info" [ref=e316]
                    - cell "80 days" [ref=e317]:
                      - button "80 days" [disabled] [ref=e318]
                    - cell "● Submitted" [ref=e319]:
                      - button "● Submitted" [disabled] [ref=e320]:
                        - generic [ref=e321]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e322]:
                      - button "Edit Assignment" [disabled] [ref=e323]
                      - button "Add Tests" [disabled] [ref=e324]
                      - button "Assignment actions" [ref=e325]
                  - row "Begin assignment Diane Bartell_1784738517862 for N89900A52069, Hosea Diane Bartell_1784738517862 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e326] [cursor=pointer]:
                    - cell "Begin assignment Diane Bartell_1784738517862 for N89900A52069, Hosea" [ref=e327]:
                      - button "Begin assignment Diane Bartell_1784738517862 for N89900A52069, Hosea" [disabled] [ref=e328]:
                        - generic [ref=e329]: N89900A52069, Hosea
                    - cell "Diane Bartell_1784738517862 More info" [ref=e330]:
                      - generic [ref=e331]:
                        - button "Diane Bartell_1784738517862" [disabled] [ref=e332]:
                          - generic [ref=e333]: Diane Bartell_1784738517862
                        - button "More info" [ref=e334]
                    - cell "80 days" [ref=e335]:
                      - button "80 days" [disabled] [ref=e336]
                    - cell "● Submitted" [ref=e337]:
                      - button "● Submitted" [disabled] [ref=e338]:
                        - generic [ref=e339]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e340]:
                      - button "Edit Assignment" [disabled] [ref=e341]
                      - button "Add Tests" [disabled] [ref=e342]
                      - button "Assignment actions" [ref=e343]
                  - row "Begin assignment Max Russel_1784738268422 for N90765A22864, Rudolph Max Russel_1784738268422 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e344] [cursor=pointer]:
                    - cell "Begin assignment Max Russel_1784738268422 for N90765A22864, Rudolph" [ref=e345]:
                      - button "Begin assignment Max Russel_1784738268422 for N90765A22864, Rudolph" [disabled] [ref=e346]:
                        - generic [ref=e347]: N90765A22864, Rudolph
                    - cell "Max Russel_1784738268422 More info" [ref=e348]:
                      - generic [ref=e349]:
                        - button "Max Russel_1784738268422" [disabled] [ref=e350]:
                          - generic [ref=e351]: Max Russel_1784738268422
                        - button "More info" [ref=e352]
                    - cell "80 days" [ref=e353]:
                      - button "80 days" [disabled] [ref=e354]
                    - cell "● Submitted" [ref=e355]:
                      - button "● Submitted" [disabled] [ref=e356]:
                        - generic [ref=e357]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e358]:
                      - button "Edit Assignment" [disabled] [ref=e359]
                      - button "Add Tests" [disabled] [ref=e360]
                      - button "Assignment actions" [ref=e361]
                  - row "Begin assignment Jody Crona_1784737955799 for N76957A59508, Jettie Jody Crona_1784737955799 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e362] [cursor=pointer]:
                    - cell "Begin assignment Jody Crona_1784737955799 for N76957A59508, Jettie" [ref=e363]:
                      - button "Begin assignment Jody Crona_1784737955799 for N76957A59508, Jettie" [disabled] [ref=e364]:
                        - generic [ref=e365]: N76957A59508, Jettie
                    - cell "Jody Crona_1784737955799 More info" [ref=e366]:
                      - generic [ref=e367]:
                        - button "Jody Crona_1784737955799" [disabled] [ref=e368]:
                          - generic [ref=e369]: Jody Crona_1784737955799
                        - button "More info" [ref=e370]
                    - cell "80 days" [ref=e371]:
                      - button "80 days" [disabled] [ref=e372]
                    - cell "● Submitted" [ref=e373]:
                      - button "● Submitted" [disabled] [ref=e374]:
                        - generic [ref=e375]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e376]:
                      - button "Edit Assignment" [disabled] [ref=e377]
                      - button "Add Tests" [disabled] [ref=e378]
                      - button "Assignment actions" [ref=e379]
                  - row "Begin assignment Paula Crooks_1784737638450 for N11141A66230, Larry Paula Crooks_1784737638450 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e380] [cursor=pointer]:
                    - cell "Begin assignment Paula Crooks_1784737638450 for N11141A66230, Larry" [ref=e381]:
                      - button "Begin assignment Paula Crooks_1784737638450 for N11141A66230, Larry" [disabled] [ref=e382]:
                        - generic [ref=e383]: N11141A66230, Larry
                    - cell "Paula Crooks_1784737638450 More info" [ref=e384]:
                      - generic [ref=e385]:
                        - button "Paula Crooks_1784737638450" [disabled] [ref=e386]:
                          - generic [ref=e387]: Paula Crooks_1784737638450
                        - button "More info" [ref=e388]
                    - cell "80 days" [ref=e389]:
                      - button "80 days" [disabled] [ref=e390]
                    - cell "● Submitted" [ref=e391]:
                      - button "● Submitted" [disabled] [ref=e392]:
                        - generic [ref=e393]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e394]:
                      - button "Edit Assignment" [disabled] [ref=e395]
                      - button "Add Tests" [disabled] [ref=e396]
                      - button "Assignment actions" [ref=e397]
                  - row "Begin assignment Antoinette Harber_1784737309127 for N77776A28734, Mark Antoinette Harber_1784737309127 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e398] [cursor=pointer]:
                    - cell "Begin assignment Antoinette Harber_1784737309127 for N77776A28734, Mark" [ref=e399]:
                      - button "Begin assignment Antoinette Harber_1784737309127 for N77776A28734, Mark" [disabled] [ref=e400]:
                        - generic [ref=e401]: N77776A28734, Mark
                    - cell "Antoinette Harber_1784737309127 More info" [ref=e402]:
                      - generic [ref=e403]:
                        - button "Antoinette Harber_1784737309127" [disabled] [ref=e404]:
                          - generic [ref=e405]: Antoinette Harber_1784737309127
                        - button "More info" [ref=e406]
                    - cell "80 days" [ref=e407]:
                      - button "80 days" [disabled] [ref=e408]
                    - cell "● Submitted" [ref=e409]:
                      - button "● Submitted" [disabled] [ref=e410]:
                        - generic [ref=e411]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e412]:
                      - button "Edit Assignment" [disabled] [ref=e413]
                      - button "Add Tests" [disabled] [ref=e414]
                      - button "Assignment actions" [ref=e415]
                  - row "Begin assignment Dolores Predovic_1784736954229 for N92074A86094, Jarod Dolores Predovic_1784736954229 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e416] [cursor=pointer]:
                    - cell "Begin assignment Dolores Predovic_1784736954229 for N92074A86094, Jarod" [ref=e417]:
                      - button "Begin assignment Dolores Predovic_1784736954229 for N92074A86094, Jarod" [disabled] [ref=e418]:
                        - generic [ref=e419]: N92074A86094, Jarod
                    - cell "Dolores Predovic_1784736954229 More info" [ref=e420]:
                      - generic [ref=e421]:
                        - button "Dolores Predovic_1784736954229" [disabled] [ref=e422]:
                          - generic [ref=e423]: Dolores Predovic_1784736954229
                        - button "More info" [ref=e424]
                    - cell "80 days" [ref=e425]:
                      - button "80 days" [disabled] [ref=e426]
                    - cell "● Submitted" [ref=e427]:
                      - button "● Submitted" [disabled] [ref=e428]:
                        - generic [ref=e429]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e430]:
                      - button "Edit Assignment" [disabled] [ref=e431]
                      - button "Add Tests" [disabled] [ref=e432]
                      - button "Assignment actions" [ref=e433]
                  - row "Begin assignment Matthew Schowalter_1784736952555 for N25054A29277, Wilhelmine Matthew Schowalter_1784736952555 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e434] [cursor=pointer]:
                    - cell "Begin assignment Matthew Schowalter_1784736952555 for N25054A29277, Wilhelmine" [ref=e435]:
                      - button "Begin assignment Matthew Schowalter_1784736952555 for N25054A29277, Wilhelmine" [disabled] [ref=e436]:
                        - generic [ref=e437]: N25054A29277, Wilhelmine
                    - cell "Matthew Schowalter_1784736952555 More info" [ref=e438]:
                      - generic [ref=e439]:
                        - button "Matthew Schowalter_1784736952555" [disabled] [ref=e440]:
                          - generic [ref=e441]: Matthew Schowalter_1784736952555
                        - button "More info" [ref=e442]
                    - cell "80 days" [ref=e443]:
                      - button "80 days" [disabled] [ref=e444]
                    - cell "● Submitted" [ref=e445]:
                      - button "● Submitted" [disabled] [ref=e446]:
                        - generic [ref=e447]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e448]:
                      - button "Edit Assignment" [disabled] [ref=e449]
                      - button "Add Tests" [disabled] [ref=e450]
                      - button "Assignment actions" [ref=e451]
                  - row "Begin assignment Katie Cummings_1784736686091 for N16223A57812, Ardella Katie Cummings_1784736686091 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e452] [cursor=pointer]:
                    - cell "Begin assignment Katie Cummings_1784736686091 for N16223A57812, Ardella" [ref=e453]:
                      - button "Begin assignment Katie Cummings_1784736686091 for N16223A57812, Ardella" [disabled] [ref=e454]:
                        - generic [ref=e455]: N16223A57812, Ardella
                    - cell "Katie Cummings_1784736686091 More info" [ref=e456]:
                      - generic [ref=e457]:
                        - button "Katie Cummings_1784736686091" [disabled] [ref=e458]:
                          - generic [ref=e459]: Katie Cummings_1784736686091
                        - button "More info" [ref=e460]
                    - cell "80 days" [ref=e461]:
                      - button "80 days" [disabled] [ref=e462]
                    - cell "● Submitted" [ref=e463]:
                      - button "● Submitted" [disabled] [ref=e464]:
                        - generic [ref=e465]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e466]:
                      - button "Edit Assignment" [disabled] [ref=e467]
                      - button "Add Tests" [disabled] [ref=e468]
                      - button "Assignment actions" [ref=e469]
                  - row "Begin assignment Tasha McDermott_1784736447915 for N96217A21933, Tate Tasha McDermott_1784736447915 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e470] [cursor=pointer]:
                    - cell "Begin assignment Tasha McDermott_1784736447915 for N96217A21933, Tate" [ref=e471]:
                      - button "Begin assignment Tasha McDermott_1784736447915 for N96217A21933, Tate" [disabled] [ref=e472]:
                        - generic [ref=e473]: N96217A21933, Tate
                    - cell "Tasha McDermott_1784736447915 More info" [ref=e474]:
                      - generic [ref=e475]:
                        - button "Tasha McDermott_1784736447915" [disabled] [ref=e476]:
                          - generic [ref=e477]: Tasha McDermott_1784736447915
                        - button "More info" [ref=e478]
                    - cell "80 days" [ref=e479]:
                      - button "80 days" [disabled] [ref=e480]
                    - cell "● Submitted" [ref=e481]:
                      - button "● Submitted" [disabled] [ref=e482]:
                        - generic [ref=e483]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e484]:
                      - button "Edit Assignment" [disabled] [ref=e485]
                      - button "Add Tests" [disabled] [ref=e486]
                      - button "Assignment actions" [ref=e487]
                  - row "Begin assignment Brett Carter_1784736025547 for N9073A5863, Fiona Brett Carter_1784736025547 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e488] [cursor=pointer]:
                    - cell "Begin assignment Brett Carter_1784736025547 for N9073A5863, Fiona" [ref=e489]:
                      - button "Begin assignment Brett Carter_1784736025547 for N9073A5863, Fiona" [disabled] [ref=e490]:
                        - generic [ref=e491]: N9073A5863, Fiona
                    - cell "Brett Carter_1784736025547 More info" [ref=e492]:
                      - generic [ref=e493]:
                        - button "Brett Carter_1784736025547" [disabled] [ref=e494]:
                          - generic [ref=e495]: Brett Carter_1784736025547
                        - button "More info" [ref=e496]
                    - cell "80 days" [ref=e497]:
                      - button "80 days" [disabled] [ref=e498]
                    - cell "● Submitted" [ref=e499]:
                      - button "● Submitted" [disabled] [ref=e500]:
                        - generic [ref=e501]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e502]:
                      - button "Edit Assignment" [disabled] [ref=e503]
                      - button "Add Tests" [disabled] [ref=e504]
                      - button "Assignment actions" [ref=e505]
                  - row "Begin assignment Maurice Vandervort_1784735720261 for N14114A82009, Kaylie Maurice Vandervort_1784735720261 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e506] [cursor=pointer]:
                    - cell "Begin assignment Maurice Vandervort_1784735720261 for N14114A82009, Kaylie" [ref=e507]:
                      - button "Begin assignment Maurice Vandervort_1784735720261 for N14114A82009, Kaylie" [disabled] [ref=e508]:
                        - generic [ref=e509]: N14114A82009, Kaylie
                    - cell "Maurice Vandervort_1784735720261 More info" [ref=e510]:
                      - generic [ref=e511]:
                        - button "Maurice Vandervort_1784735720261" [disabled] [ref=e512]:
                          - generic [ref=e513]: Maurice Vandervort_1784735720261
                        - button "More info" [ref=e514]
                    - cell "80 days" [ref=e515]:
                      - button "80 days" [disabled] [ref=e516]
                    - cell "● Submitted" [ref=e517]:
                      - button "● Submitted" [disabled] [ref=e518]:
                        - generic [ref=e519]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e520]:
                      - button "Edit Assignment" [disabled] [ref=e521]
                      - button "Add Tests" [disabled] [ref=e522]
                      - button "Assignment actions" [ref=e523]
                  - row "Begin assignment Ronnie VonRueden_1784735370690 for N59680A48263, Declan Ronnie VonRueden_1784735370690 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e524] [cursor=pointer]:
                    - cell "Begin assignment Ronnie VonRueden_1784735370690 for N59680A48263, Declan" [ref=e525]:
                      - button "Begin assignment Ronnie VonRueden_1784735370690 for N59680A48263, Declan" [disabled] [ref=e526]:
                        - generic [ref=e527]: N59680A48263, Declan
                    - cell "Ronnie VonRueden_1784735370690 More info" [ref=e528]:
                      - generic [ref=e529]:
                        - button "Ronnie VonRueden_1784735370690" [disabled] [ref=e530]:
                          - generic [ref=e531]: Ronnie VonRueden_1784735370690
                        - button "More info" [ref=e532]
                    - cell "80 days" [ref=e533]:
                      - button "80 days" [disabled] [ref=e534]
                    - cell "● Submitted" [ref=e535]:
                      - button "● Submitted" [disabled] [ref=e536]:
                        - generic [ref=e537]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e538]:
                      - button "Edit Assignment" [disabled] [ref=e539]
                      - button "Add Tests" [disabled] [ref=e540]
                      - button "Assignment actions" [ref=e541]
                  - row "Begin assignment Josefina Greenfelder_1784735092835 for N80156A97109, Florida Josefina Greenfelder_1784735092835 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e542] [cursor=pointer]:
                    - cell "Begin assignment Josefina Greenfelder_1784735092835 for N80156A97109, Florida" [ref=e543]:
                      - button "Begin assignment Josefina Greenfelder_1784735092835 for N80156A97109, Florida" [disabled] [ref=e544]:
                        - generic [ref=e545]: N80156A97109, Florida
                    - cell "Josefina Greenfelder_1784735092835 More info" [ref=e546]:
                      - generic [ref=e547]:
                        - button "Josefina Greenfelder_1784735092835" [disabled] [ref=e548]:
                          - generic [ref=e549]: Josefina Greenfelder_1784735092835
                        - button "More info" [ref=e550]
                    - cell "80 days" [ref=e551]:
                      - button "80 days" [disabled] [ref=e552]
                    - cell "● Submitted" [ref=e553]:
                      - button "● Submitted" [disabled] [ref=e554]:
                        - generic [ref=e555]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e556]:
                      - button "Edit Assignment" [disabled] [ref=e557]
                      - button "Add Tests" [disabled] [ref=e558]
                      - button "Assignment actions" [ref=e559]
                  - row "Begin assignment Candice Hamill_1784728861984 for N98089A10374, Rowland Candice Hamill_1784728861984 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e560] [cursor=pointer]:
                    - cell "Begin assignment Candice Hamill_1784728861984 for N98089A10374, Rowland" [ref=e561]:
                      - button "Begin assignment Candice Hamill_1784728861984 for N98089A10374, Rowland" [disabled] [ref=e562]:
                        - generic [ref=e563]: N98089A10374, Rowland
                    - cell "Candice Hamill_1784728861984 More info" [ref=e564]:
                      - generic [ref=e565]:
                        - button "Candice Hamill_1784728861984" [disabled] [ref=e566]:
                          - generic [ref=e567]: Candice Hamill_1784728861984
                        - button "More info" [ref=e568]
                    - cell "80 days" [ref=e569]:
                      - button "80 days" [disabled] [ref=e570]
                    - cell "● Submitted" [ref=e571]:
                      - button "● Submitted" [disabled] [ref=e572]:
                        - generic [ref=e573]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e574]:
                      - button "Edit Assignment" [disabled] [ref=e575]
                      - button "Add Tests" [disabled] [ref=e576]
                      - button "Assignment actions" [ref=e577]
                  - row "Begin assignment Mrs. Candace Howe V_1784728631118 (+1 more) for N90209A86801, Theo Mrs. Candace Howe V_1784728631118 (+1 more) More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e578] [cursor=pointer]:
                    - cell "Begin assignment Mrs. Candace Howe V_1784728631118 (+1 more) for N90209A86801, Theo" [ref=e579]:
                      - button "Begin assignment Mrs. Candace Howe V_1784728631118 (+1 more) for N90209A86801, Theo" [disabled] [ref=e580]:
                        - generic [ref=e581]: N90209A86801, Theo
                    - cell "Mrs. Candace Howe V_1784728631118 (+1 more) More info" [ref=e582]:
                      - generic [ref=e583]:
                        - button "Mrs. Candace Howe V_1784728631118 (+1 more)" [disabled] [ref=e584]:
                          - generic [ref=e585]: Mrs. Candace Howe V_1784728631118 (+1 more)
                        - button "More info" [ref=e586]
                    - cell "80 days" [ref=e587]:
                      - button "80 days" [disabled] [ref=e588]
                    - cell "● Submitted" [ref=e589]:
                      - button "● Submitted" [disabled] [ref=e590]:
                        - generic [ref=e591]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e592]:
                      - button "Edit Assignment" [disabled] [ref=e593]
                      - button "Add Tests" [disabled] [ref=e594]
                      - button "Assignment actions" [ref=e595]
                  - row "Begin assignment Genevieve Mayert-Brekke_1784728382298 (+1 more) for N29297A74279, Reyes Genevieve Mayert-Brekke_1784728382298 (+1 more) More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e596] [cursor=pointer]:
                    - cell "Begin assignment Genevieve Mayert-Brekke_1784728382298 (+1 more) for N29297A74279, Reyes" [ref=e597]:
                      - button "Begin assignment Genevieve Mayert-Brekke_1784728382298 (+1 more) for N29297A74279, Reyes" [disabled] [ref=e598]:
                        - generic [ref=e599]: N29297A74279, Reyes
                    - cell "Genevieve Mayert-Brekke_1784728382298 (+1 more) More info" [ref=e600]:
                      - generic [ref=e601]:
                        - button "Genevieve Mayert-Brekke_1784728382298 (+1 more)" [disabled] [ref=e602]:
                          - generic [ref=e603]: Genevieve Mayert-Brekke_1784728382298 (+1 more)
                        - button "More info" [ref=e604]
                    - cell "80 days" [ref=e605]:
                      - button "80 days" [disabled] [ref=e606]
                    - cell "● Submitted" [ref=e607]:
                      - button "● Submitted" [disabled] [ref=e608]:
                        - generic [ref=e609]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e610]:
                      - button "Edit Assignment" [disabled] [ref=e611]
                      - button "Add Tests" [disabled] [ref=e612]
                      - button "Assignment actions" [ref=e613]
                  - row "Begin assignment Jessie Zulauf_1784727904254 (+1 more) for N80566A28494, Alfredo Jessie Zulauf_1784727904254 (+1 more) More info 80 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e614] [cursor=pointer]:
                    - cell "Begin assignment Jessie Zulauf_1784727904254 (+1 more) for N80566A28494, Alfredo" [ref=e615]:
                      - button "Begin assignment Jessie Zulauf_1784727904254 (+1 more) for N80566A28494, Alfredo" [disabled] [ref=e616]:
                        - generic [ref=e617]: N80566A28494, Alfredo
                    - cell "Jessie Zulauf_1784727904254 (+1 more) More info" [ref=e618]:
                      - generic [ref=e619]:
                        - button "Jessie Zulauf_1784727904254 (+1 more)" [disabled] [ref=e620]:
                          - generic [ref=e621]: Jessie Zulauf_1784727904254 (+1 more)
                        - button "More info" [ref=e622]
                    - cell "80 days" [ref=e623]:
                      - button "80 days" [disabled] [ref=e624]
                    - cell "● In Progress" [ref=e625]:
                      - button "● In Progress" [disabled] [ref=e626]:
                        - generic [ref=e627]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e628]:
                      - button "Edit Assignment" [disabled] [ref=e629]
                      - button "Add Tests" [disabled] [ref=e630]
                      - button "Assignment actions" [ref=e631]
                  - row "Begin assignment Jamie Reinger_1784727681214 for N31691A776, Regan Jamie Reinger_1784727681214 More info 80 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e632] [cursor=pointer]:
                    - cell "Begin assignment Jamie Reinger_1784727681214 for N31691A776, Regan" [ref=e633]:
                      - button "Begin assignment Jamie Reinger_1784727681214 for N31691A776, Regan" [disabled] [ref=e634]:
                        - generic [ref=e635]: N31691A776, Regan
                    - cell "Jamie Reinger_1784727681214 More info" [ref=e636]:
                      - generic [ref=e637]:
                        - button "Jamie Reinger_1784727681214" [disabled] [ref=e638]:
                          - generic [ref=e639]: Jamie Reinger_1784727681214
                        - button "More info" [ref=e640]
                    - cell "80 days" [ref=e641]:
                      - button "80 days" [disabled] [ref=e642]
                    - cell "● In Progress" [ref=e643]:
                      - button "● In Progress" [disabled] [ref=e644]:
                        - generic [ref=e645]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e646]:
                      - button "Edit Assignment" [disabled] [ref=e647]
                      - button "Add Tests" [disabled] [ref=e648]
                      - button "Assignment actions" [ref=e649]
                  - row "Begin assignment Tom Berge_1784727456292 for N55938A21100, Shanny Tom Berge_1784727456292 More info 80 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e650] [cursor=pointer]:
                    - cell "Begin assignment Tom Berge_1784727456292 for N55938A21100, Shanny" [ref=e651]:
                      - button "Begin assignment Tom Berge_1784727456292 for N55938A21100, Shanny" [disabled] [ref=e652]:
                        - generic [ref=e653]: N55938A21100, Shanny
                    - cell "Tom Berge_1784727456292 More info" [ref=e654]:
                      - generic [ref=e655]:
                        - button "Tom Berge_1784727456292" [disabled] [ref=e656]:
                          - generic [ref=e657]: Tom Berge_1784727456292
                        - button "More info" [ref=e658]
                    - cell "80 days" [ref=e659]:
                      - button "80 days" [disabled] [ref=e660]
                    - cell "● In Progress" [ref=e661]:
                      - button "● In Progress" [disabled] [ref=e662]:
                        - generic [ref=e663]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e664]:
                      - button "Edit Assignment" [disabled] [ref=e665]
                      - button "Add Tests" [disabled] [ref=e666]
                      - button "Assignment actions" [ref=e667]
                  - row "Begin assignment Marlene Collier_1784727101537 for N58597A60462, Kenna Marlene Collier_1784727101537 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e668] [cursor=pointer]:
                    - cell "Begin assignment Marlene Collier_1784727101537 for N58597A60462, Kenna" [ref=e669]:
                      - button "Begin assignment Marlene Collier_1784727101537 for N58597A60462, Kenna" [disabled] [ref=e670]:
                        - generic [ref=e671]: N58597A60462, Kenna
                    - cell "Marlene Collier_1784727101537 More info" [ref=e672]:
                      - generic [ref=e673]:
                        - button "Marlene Collier_1784727101537" [disabled] [ref=e674]:
                          - generic [ref=e675]: Marlene Collier_1784727101537
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
                  - row "Begin assignment Erica Heathcote_1784726725032 for N86450A58521, Paolo Erica Heathcote_1784726725032 More info 80 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e686] [cursor=pointer]:
                    - cell "Begin assignment Erica Heathcote_1784726725032 for N86450A58521, Paolo" [ref=e687]:
                      - button "Begin assignment Erica Heathcote_1784726725032 for N86450A58521, Paolo" [disabled] [ref=e688]:
                        - generic [ref=e689]: N86450A58521, Paolo
                    - cell "Erica Heathcote_1784726725032 More info" [ref=e690]:
                      - generic [ref=e691]:
                        - button "Erica Heathcote_1784726725032" [disabled] [ref=e692]:
                          - generic [ref=e693]: Erica Heathcote_1784726725032
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
            - generic [ref=e704]:
              - generic [ref=e707]:
                - img [ref=e708]
                - heading "Notifications Center" [level=2] [ref=e712]
              - generic [ref=e713]:
                - generic [ref=e715]:
                  - img [ref=e716]
                  - heading "Resources" [level=3] [ref=e720]
                - list [ref=e721]:
                  - listitem [ref=e722]:
                    - button "Riverside Learn" [ref=e723] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e724]
                      - img [ref=e726]
                  - listitem [ref=e728]:
                    - button "Onboarding Tutorial Videos" [ref=e729] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e730]
                      - img [ref=e732]
                  - listitem [ref=e734]:
                    - button "Quick Reference Guides" [ref=e735] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e736]
                      - img [ref=e738]
                - button "View All" [ref=e741] [cursor=pointer]
      - contentinfo [ref=e742]:
        - generic [ref=e743]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e744] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e745]
        - generic [ref=e746]:
          - link "Riverside Insights Facebook" [ref=e747] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e748]
          - link "Riverside Insights Twitter" [ref=e749] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e750]
          - link "Riverside Insights LinkedIn" [ref=e751] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e752]
          - link "Riverside Insights Instagram" [ref=e753] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e754]
        - generic [ref=e755]:
          - button "Leave Feedback" [ref=e756] [cursor=pointer]
          - generic [ref=e757]: "|"
          - link "Terms of Use" [ref=e758] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e759]: "|"
          - link "Privacy Policy" [ref=e760] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e761]: Footer region end
```

# Test source

```ts
  1   | import {  Page, devices,Browser, expect } from "@playwright/test";
  2   | import Locators from "../utils/locators";
  3   | import Utils from "../utils/utils";
  4   | 
  5   | const timestamp = Date.now();
  6   | const firstName: string = `Fname${timestamp}`;
  7   | const lastName: string = `lName${timestamp}`;
  8   | const eId: string = `eI${timestamp}`;
  9   | 
  10  | 
  11  | export default class AddExamineePage extends Locators{
  12  | 
  13  |     private utils: Utils;
  14  |     constructor(public page: Page) {
  15  |         super(page);
  16  |     }
  17  | 
  18  |     async saveExaminee() {
  19  |         await this.examineeSaveButton.click();
> 20  |         await this.examineeSaveOkButton.waitFor({state: "visible",timeout: 30000});
      |                                         ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  21  |         await this.examineeSaveOkButton.click();
  22  |       }
  23  |     async saveErrorPopup() {
  24  | 
  25  |         await this.addExamineePopUpCloseIcon.click();
  26  |         await this.saveErrorPopupHeader.waitFor({ state: "visible" });
  27  |         await this.saveErrorPopupMessage.isVisible();
  28  |         await this.demoYesButton.isVisible();
  29  |         await this.demoNoButton.isVisible();
  30  |         await this.demoNoButton.click();
  31  |         await this.addExamineeTitle1.isVisible();
  32  |         await this.addExamineeTitle2.isVisible();
  33  |     }
  34  |     async selectGender(value: string) {
  35  |         await this.page.locator("div[role='dialog'] button[class='select-box']").click();
  36  |         await this.page
  37  |           .locator(".item-text")
  38  |           .getByText(new RegExp(`^${value}.*`))
  39  |           .first()
  40  |           .click();
  41  |       }
  42  |     async verifyElementsOnGeneralInformationTab(type: string) {
  43  | 
  44  |         if(type =="Add Examinee") {
  45  |             await this.page.bringToFront();
  46  |             await this.page.waitForTimeout(3000);
  47  |             await this.examinees.click({timeout: 2 * 60 * 1000});
  48  |             await this.page.waitForTimeout(3000);
  49  |             await this.addExaminee.click();
  50  |             await this.loadingIcon.waitFor({state: "hidden"});
  51  |             await this.addExamineeTitle1.isVisible();
  52  |             await this.addExamineeTitle2.isVisible();
  53  |             await this.examineeLastName.isVisible();
  54  |             await this.examineeFirstName.isVisible();
  55  |             await this.examineeDateOfBirth.isVisible();
  56  |             await this.examineeDateOfBirthInputLabel.nth(1).isVisible();
  57  |             await this.examineeDateOfBirthCalendarIcon.nth(1).isVisible();
  58  |             await this.examineeGender.isVisible();
  59  |             await this.examineeGendarInputLabel.isVisible();
  60  |             await this.examineeGendarInputLabel.click();
  61  |             const genderValues = ['Male', 'Female', 'Unspecified'];
  62  |             await this.page.waitForTimeout(1000);
  63  |             const values = await this.selectResultFromDropDown.allTextContents();
  64  |             expect(values).toEqual(genderValues);
  65  |             await this.requiredFields.isVisible();
  66  |             await this.examineeId.isVisible();
  67  |             await this.examineeSaveButton.isVisible();
  68  |             await this.examineeSaveAndAddAnotherButton.isVisible();
  69  |             await expect(this.examineeSaveButton).toHaveAttribute("disabled", "");
  70  |             await expect(this.examineeSaveAndAddAnotherButton).toHaveAttribute("disabled", "");
  71  |         } else {
  72  |             await this.loadingIcon.waitFor({ state: "hidden" });
  73  |             await this.editExamineeTitle.isVisible();
  74  |             await this.addExamineeTitle2.isVisible();
  75  |             await this.examineeLastName.isVisible();
  76  |             await expect.soft(this.examineeFirstName).toHaveValue(firstName+"Test");
  77  |             await expect.soft(this.examineeLastName).toHaveValue(lastName+"Test");
  78  |             await this.examineeFirstName.isVisible();
  79  |             await this.examineeDateOfBirth.isVisible();
  80  |             await this.examineeDateOfBirthInputLabel.nth(1).isVisible();
  81  |             await this.examineeDateOfBirthCalendarIcon.nth(1).isVisible();
  82  |             await this.examineeGender.isVisible();
  83  |             await this.examineeGendarInputLabel.isVisible();
  84  |             await this.requiredFields.isVisible();
  85  |             await this.examineeId.isVisible();
  86  |             await this.examineeSaveButton.isVisible();
  87  |             await this.examineeSaveButton.isEnabled();
  88  |         }
  89  |     }
  90  |     async verifyDropDownValues(expectedOptions: string[],index:number,value:string,index1:number)
  91  |     {
  92  |         await this.dropDown.nth(index).click();
  93  |         await this.page.waitForTimeout(2000);
  94  |         const options = this.page.locator("//label[text()='"+value+"']/following-sibling::div['"+index1+"']/descendant::ul/child::li/descendant::div");
  95  | 
  96  |         await expect(options.first()).toBeVisible();
  97  | 
  98  |         const actualOptions = (await options.allTextContents()).map(t => t.trim());
  99  | 
  100 |         expect(actualOptions).toEqual(expectedOptions);
  101 | 
  102 |     }
  103 |     async verifyElementsOnDemographicsOrProgramsTab(type:string) {
  104 | 
  105 |         await this.demographicsTab.click();
  106 |         await this.page.waitForTimeout(3000);
  107 |         await this.demographicsHeader.waitFor({ state: "visible" });
  108 |         await this.primaryLanguageHeader.isVisible();
  109 |         await this.dropDown.nth(0).click();
  110 |         await this.page.waitForTimeout(2000);
  111 |         const expectedRaceOptions = [
  112 |             'American Indian or Alaska Native',
  113 |             'Asian',
  114 |             'Black or African American',
  115 |             'Native Hawaiian or Other Pacific Islander',
  116 |             'White',
  117 |             'Other',
  118 |             'Native Hawaiian or Pacific Islander',
  119 |             'Prefer not to say',
  120 |             'Prefer to describe as',
```