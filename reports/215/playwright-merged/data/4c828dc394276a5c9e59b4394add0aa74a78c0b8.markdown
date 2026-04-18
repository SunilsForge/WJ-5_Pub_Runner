# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/APPROB_Pub.spec.ts >>  APPROB.W5PA Test Data Export Automation  >> @Test_De For Age 4 - All correct scenario login as AH Conduct test as Examiner and generate reports
- Location: src/tests/test_dataExport/APPROB_Pub.spec.ts:16:9

# Error details

```
TimeoutError: locator.fill: Timeout 60000ms exceeded.
Call log:
  - waiting for getByLabel('First Name*,Required , Type in text')

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
              - heading "Hello S11PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S11PwAut25AH ln" [ref=e10] [cursor=pointer]
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
            - menuitem "Reports" [disabled] [ref=e29] [cursor=pointer]:
              - text: Reports
              - img [ref=e30]
              - menu
            - menuitem "Resources" [ref=e33] [cursor=pointer]
        - main [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e37]:
              - generic [ref=e38]: "Reminder:"
              - generic [ref=e39]: Your subscription begins on 05/16/2026 and is not yet active. Test assignments cannot be committed for reporting until activation.
              - link "Renew Now" [ref=e40] [cursor=pointer]:
                - /url: https://store.riversideinsights.com/p/woodcock-johnson-v-wj-v/
              - button "✕" [ref=e41] [cursor=pointer]
            - generic [ref=e42]:
              - generic [ref=e43]:
                - heading "My Test Assignments" [level=1] [ref=e44]
                - button "Create New Test Assignment" [ref=e45] [cursor=pointer]
              - generic [ref=e46]:
                - generic [ref=e49]:
                  - textbox [ref=e50]:
                    - /placeholder: Search Test Assignments
                  - button "Search Test Assignments" [ref=e51] [cursor=pointer]
                - generic [ref=e52]:
                  - button "Active" [ref=e53] [cursor=pointer]
                  - button "Closed" [ref=e54] [cursor=pointer]
              - table "Available Assignments" [ref=e56]:
                - rowgroup [ref=e63]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e64]:
                    - columnheader "This is the student or individual being assessed." [ref=e65]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e66]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e67]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e68]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e69]: Actions
                - rowgroup [ref=e70]:
                  - row "Begin assignment Dyslexia Test Set (+1 more) for N77753A61551, Leone Dyslexia Test Set (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e71] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set (+1 more) for N77753A61551, Leone" [ref=e72]:
                      - button "Begin assignment Dyslexia Test Set (+1 more) for N77753A61551, Leone" [ref=e73]:
                        - generic [ref=e74]: N77753A61551, Leone
                    - cell "Dyslexia Test Set (+1 more) More info" [ref=e75]:
                      - generic [ref=e76]:
                        - button "Dyslexia Test Set (+1 more)" [ref=e77]:
                          - generic [ref=e78]: Dyslexia Test Set (+1 more)
                        - button "More info" [ref=e79]
                    - cell "—" [ref=e80]:
                      - button "—" [ref=e81]
                    - cell "● Not Started" [ref=e82]:
                      - button "● Not Started" [ref=e83]:
                        - generic [ref=e84]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e85]:
                      - button "Edit Assignment" [ref=e86]
                      - button "Add Tests" [ref=e87]
                      - button "Assignment actions" [ref=e88]
                  - row "Begin assignment Rapid Automatized Naming (RAN) for N72296A82693, Kitty Rapid Automatized Naming (RAN) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e89] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) for N72296A82693, Kitty" [ref=e90]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) for N72296A82693, Kitty" [ref=e91]:
                        - generic [ref=e92]: N72296A82693, Kitty
                    - cell "Rapid Automatized Naming (RAN) More info" [ref=e93]:
                      - generic [ref=e94]:
                        - button "Rapid Automatized Naming (RAN)" [ref=e95]:
                          - generic [ref=e96]: Rapid Automatized Naming (RAN)
                        - button "More info" [ref=e97]
                    - cell "—" [ref=e98]:
                      - button "—" [ref=e99]
                    - cell "● Not Started" [ref=e100]:
                      - button "● Not Started" [ref=e101]:
                        - generic [ref=e102]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e103]:
                      - button "Edit Assignment" [ref=e104]
                      - button "Add Tests" [ref=e105]
                      - button "Assignment actions" [ref=e106]
                  - row "Begin assignment General Intellectual Ability (GIA) for N90670A96657, Ramiro General Intellectual Ability (GIA) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e107] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) for N90670A96657, Ramiro" [ref=e108]:
                      - button "Begin assignment General Intellectual Ability (GIA) for N90670A96657, Ramiro" [ref=e109]:
                        - generic [ref=e110]: N90670A96657, Ramiro
                    - cell "General Intellectual Ability (GIA) More info" [ref=e111]:
                      - generic [ref=e112]:
                        - button "General Intellectual Ability (GIA)" [ref=e113]:
                          - generic [ref=e114]: General Intellectual Ability (GIA)
                        - button "More info" [ref=e115]
                    - cell "—" [ref=e116]:
                      - button "—" [ref=e117]
                    - cell "● Not Started" [ref=e118]:
                      - button "● Not Started" [ref=e119]:
                        - generic [ref=e120]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e121]:
                      - button "Edit Assignment" [ref=e122]
                      - button "Add Tests" [ref=e123]
                      - button "Assignment actions" [ref=e124]
                  - row "Begin assignment Rapid Automatized Naming (RAN) for N83455A60195, Greyson Rapid Automatized Naming (RAN) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e125] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) for N83455A60195, Greyson" [ref=e126]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) for N83455A60195, Greyson" [ref=e127]:
                        - generic [ref=e128]: N83455A60195, Greyson
                    - cell "Rapid Automatized Naming (RAN) More info" [ref=e129]:
                      - generic [ref=e130]:
                        - button "Rapid Automatized Naming (RAN)" [ref=e131]:
                          - generic [ref=e132]: Rapid Automatized Naming (RAN)
                        - button "More info" [ref=e133]
                    - cell "—" [ref=e134]:
                      - button "—" [ref=e135]
                    - cell "● Not Started" [ref=e136]:
                      - button "● Not Started" [ref=e137]:
                        - generic [ref=e138]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e139]:
                      - button "Edit Assignment" [ref=e140]
                      - button "Add Tests" [ref=e141]
                      - button "Assignment actions" [ref=e142]
                  - row "Begin assignment Broad Achievement (+1 more) for N78379A94836, Lila Broad Achievement (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e143] [cursor=pointer]:
                    - cell "Begin assignment Broad Achievement (+1 more) for N78379A94836, Lila" [ref=e144]:
                      - button "Begin assignment Broad Achievement (+1 more) for N78379A94836, Lila" [ref=e145]:
                        - generic [ref=e146]: N78379A94836, Lila
                    - cell "Broad Achievement (+1 more) More info" [ref=e147]:
                      - generic [ref=e148]:
                        - button "Broad Achievement (+1 more)" [ref=e149]:
                          - generic [ref=e150]: Broad Achievement (+1 more)
                        - button "More info" [ref=e151]
                    - cell "—" [ref=e152]:
                      - button "—" [ref=e153]
                    - cell "● Not Started" [ref=e154]:
                      - button "● Not Started" [ref=e155]:
                        - generic [ref=e156]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e157]:
                      - button "Edit Assignment" [ref=e158]
                      - button "Add Tests" [ref=e159]
                      - button "Assignment actions" [ref=e160]
                  - row "Begin assignment General Intellectual Ability (GIA) for N80368A52903, Lucie General Intellectual Ability (GIA) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e161] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) for N80368A52903, Lucie" [ref=e162]:
                      - button "Begin assignment General Intellectual Ability (GIA) for N80368A52903, Lucie" [ref=e163]:
                        - generic [ref=e164]: N80368A52903, Lucie
                    - cell "General Intellectual Ability (GIA) More info" [ref=e165]:
                      - generic [ref=e166]:
                        - button "General Intellectual Ability (GIA)" [ref=e167]:
                          - generic [ref=e168]: General Intellectual Ability (GIA)
                        - button "More info" [ref=e169]
                    - cell "—" [ref=e170]:
                      - button "—" [ref=e171]
                    - cell "● Not Started" [ref=e172]:
                      - button "● Not Started" [ref=e173]:
                        - generic [ref=e174]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e175]:
                      - button "Edit Assignment" [ref=e176]
                      - button "Add Tests" [ref=e177]
                      - button "Assignment actions" [ref=e178]
                  - row "Begin assignment Dyslexia Test Set for N24268A80356, Ewald Dyslexia Test Set More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e179] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set for N24268A80356, Ewald" [ref=e180]:
                      - button "Begin assignment Dyslexia Test Set for N24268A80356, Ewald" [ref=e181]:
                        - generic [ref=e182]: N24268A80356, Ewald
                    - cell "Dyslexia Test Set More info" [ref=e183]:
                      - generic [ref=e184]:
                        - button "Dyslexia Test Set" [ref=e185]:
                          - generic [ref=e186]: Dyslexia Test Set
                        - button "More info" [ref=e187]
                    - cell "—" [ref=e188]:
                      - button "—" [ref=e189]
                    - cell "● Not Started" [ref=e190]:
                      - button "● Not Started" [ref=e191]:
                        - generic [ref=e192]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e193]:
                      - button "Edit Assignment" [ref=e194]
                      - button "Add Tests" [ref=e195]
                      - button "Assignment actions" [ref=e196]
                  - row "Begin assignment Rapid Automatized Naming (RAN) for N32190A94512, Loren Rapid Automatized Naming (RAN) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e197] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) for N32190A94512, Loren" [ref=e198]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) for N32190A94512, Loren" [ref=e199]:
                        - generic [ref=e200]: N32190A94512, Loren
                    - cell "Rapid Automatized Naming (RAN) More info" [ref=e201]:
                      - generic [ref=e202]:
                        - button "Rapid Automatized Naming (RAN)" [ref=e203]:
                          - generic [ref=e204]: Rapid Automatized Naming (RAN)
                        - button "More info" [ref=e205]
                    - cell "—" [ref=e206]:
                      - button "—" [ref=e207]
                    - cell "● Not Started" [ref=e208]:
                      - button "● Not Started" [ref=e209]:
                        - generic [ref=e210]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e211]:
                      - button "Edit Assignment" [ref=e212]
                      - button "Add Tests" [ref=e213]
                      - button "Assignment actions" [ref=e214]
                  - row "Begin assignment Broad Achievement (+1 more) for N21671A34759, Raphael Broad Achievement (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e215] [cursor=pointer]:
                    - cell "Begin assignment Broad Achievement (+1 more) for N21671A34759, Raphael" [ref=e216]:
                      - button "Begin assignment Broad Achievement (+1 more) for N21671A34759, Raphael" [ref=e217]:
                        - generic [ref=e218]: N21671A34759, Raphael
                    - cell "Broad Achievement (+1 more) More info" [ref=e219]:
                      - generic [ref=e220]:
                        - button "Broad Achievement (+1 more)" [ref=e221]:
                          - generic [ref=e222]: Broad Achievement (+1 more)
                        - button "More info" [ref=e223]
                    - cell "—" [ref=e224]:
                      - button "—" [ref=e225]
                    - cell "● Not Started" [ref=e226]:
                      - button "● Not Started" [ref=e227]:
                        - generic [ref=e228]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e229]:
                      - button "Edit Assignment" [ref=e230]
                      - button "Add Tests" [ref=e231]
                      - button "Assignment actions" [ref=e232]
                  - row "Begin assignment General Intellectual Ability (GIA) for N14815A72913, Rosamond General Intellectual Ability (GIA) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e233] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) for N14815A72913, Rosamond" [ref=e234]:
                      - button "Begin assignment General Intellectual Ability (GIA) for N14815A72913, Rosamond" [ref=e235]:
                        - generic [ref=e236]: N14815A72913, Rosamond
                    - cell "General Intellectual Ability (GIA) More info" [ref=e237]:
                      - generic [ref=e238]:
                        - button "General Intellectual Ability (GIA)" [ref=e239]:
                          - generic [ref=e240]: General Intellectual Ability (GIA)
                        - button "More info" [ref=e241]
                    - cell "—" [ref=e242]:
                      - button "—" [ref=e243]
                    - cell "● Not Started" [ref=e244]:
                      - button "● Not Started" [ref=e245]:
                        - generic [ref=e246]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e247]:
                      - button "Edit Assignment" [ref=e248]
                      - button "Add Tests" [ref=e249]
                      - button "Assignment actions" [ref=e250]
                  - row "Begin assignment Dyslexia Test Set for N78586A3373, Nestor Dyslexia Test Set More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e251] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set for N78586A3373, Nestor" [ref=e252]:
                      - button "Begin assignment Dyslexia Test Set for N78586A3373, Nestor" [ref=e253]:
                        - generic [ref=e254]: N78586A3373, Nestor
                    - cell "Dyslexia Test Set More info" [ref=e255]:
                      - generic [ref=e256]:
                        - button "Dyslexia Test Set" [ref=e257]:
                          - generic [ref=e258]: Dyslexia Test Set
                        - button "More info" [ref=e259]
                    - cell "—" [ref=e260]:
                      - button "—" [ref=e261]
                    - cell "● Not Started" [ref=e262]:
                      - button "● Not Started" [ref=e263]:
                        - generic [ref=e264]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e265]:
                      - button "Edit Assignment" [ref=e266]
                      - button "Add Tests" [ref=e267]
                      - button "Assignment actions" [ref=e268]
                  - row "Begin assignment Dyslexia Test Set (+1 more) for N50564A55898, Koby Dyslexia Test Set (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e269] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set (+1 more) for N50564A55898, Koby" [ref=e270]:
                      - button "Begin assignment Dyslexia Test Set (+1 more) for N50564A55898, Koby" [ref=e271]:
                        - generic [ref=e272]: N50564A55898, Koby
                    - cell "Dyslexia Test Set (+1 more) More info" [ref=e273]:
                      - generic [ref=e274]:
                        - button "Dyslexia Test Set (+1 more)" [ref=e275]:
                          - generic [ref=e276]: Dyslexia Test Set (+1 more)
                        - button "More info" [ref=e277]
                    - cell "—" [ref=e278]:
                      - button "—" [ref=e279]
                    - cell "● Not Started" [ref=e280]:
                      - button "● Not Started" [ref=e281]:
                        - generic [ref=e282]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e283]:
                      - button "Edit Assignment" [ref=e284]
                      - button "Add Tests" [ref=e285]
                      - button "Assignment actions" [ref=e286]
                  - row "Begin assignment Rapid Automatized Naming (RAN) for N63983A71140, Faye Rapid Automatized Naming (RAN) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e287] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) for N63983A71140, Faye" [ref=e288]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) for N63983A71140, Faye" [ref=e289]:
                        - generic [ref=e290]: N63983A71140, Faye
                    - cell "Rapid Automatized Naming (RAN) More info" [ref=e291]:
                      - generic [ref=e292]:
                        - button "Rapid Automatized Naming (RAN)" [ref=e293]:
                          - generic [ref=e294]: Rapid Automatized Naming (RAN)
                        - button "More info" [ref=e295]
                    - cell "—" [ref=e296]:
                      - button "—" [ref=e297]
                    - cell "● Not Started" [ref=e298]:
                      - button "● Not Started" [ref=e299]:
                        - generic [ref=e300]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e301]:
                      - button "Edit Assignment" [ref=e302]
                      - button "Add Tests" [ref=e303]
                      - button "Assignment actions" [ref=e304]
                  - row "Begin assignment Broad Achievement for N81205A46953, Otho Broad Achievement More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e305] [cursor=pointer]:
                    - cell "Begin assignment Broad Achievement for N81205A46953, Otho" [ref=e306]:
                      - button "Begin assignment Broad Achievement for N81205A46953, Otho" [ref=e307]:
                        - generic [ref=e308]: N81205A46953, Otho
                    - cell "Broad Achievement More info" [ref=e309]:
                      - generic [ref=e310]:
                        - button "Broad Achievement" [ref=e311]:
                          - generic [ref=e312]: Broad Achievement
                        - button "More info" [ref=e313]
                    - cell "—" [ref=e314]:
                      - button "—" [ref=e315]
                    - cell "● Not Started" [ref=e316]:
                      - button "● Not Started" [ref=e317]:
                        - generic [ref=e318]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e319]:
                      - button "Edit Assignment" [ref=e320]
                      - button "Add Tests" [ref=e321]
                      - button "Assignment actions" [ref=e322]
                  - row "Begin assignment General Intellectual Ability (GIA) for N81582A33902, Sandy General Intellectual Ability (GIA) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e323] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) for N81582A33902, Sandy" [ref=e324]:
                      - button "Begin assignment General Intellectual Ability (GIA) for N81582A33902, Sandy" [ref=e325]:
                        - generic [ref=e326]: N81582A33902, Sandy
                    - cell "General Intellectual Ability (GIA) More info" [ref=e327]:
                      - generic [ref=e328]:
                        - button "General Intellectual Ability (GIA)" [ref=e329]:
                          - generic [ref=e330]: General Intellectual Ability (GIA)
                        - button "More info" [ref=e331]
                    - cell "—" [ref=e332]:
                      - button "—" [ref=e333]
                    - cell "● Not Started" [ref=e334]:
                      - button "● Not Started" [ref=e335]:
                        - generic [ref=e336]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e337]:
                      - button "Edit Assignment" [ref=e338]
                      - button "Add Tests" [ref=e339]
                      - button "Assignment actions" [ref=e340]
                  - row "Begin assignment Rapid Automatized Naming (RAN) for N21967A12012, Joanny Rapid Automatized Naming (RAN) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e341] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) for N21967A12012, Joanny" [ref=e342]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) for N21967A12012, Joanny" [ref=e343]:
                        - generic [ref=e344]: N21967A12012, Joanny
                    - cell "Rapid Automatized Naming (RAN) More info" [ref=e345]:
                      - generic [ref=e346]:
                        - button "Rapid Automatized Naming (RAN)" [ref=e347]:
                          - generic [ref=e348]: Rapid Automatized Naming (RAN)
                        - button "More info" [ref=e349]
                    - cell "—" [ref=e350]:
                      - button "—" [ref=e351]
                    - cell "● Not Started" [ref=e352]:
                      - button "● Not Started" [ref=e353]:
                        - generic [ref=e354]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e355]:
                      - button "Edit Assignment" [ref=e356]
                      - button "Add Tests" [ref=e357]
                      - button "Assignment actions" [ref=e358]
                  - row "Begin assignment Broad Achievement (+1 more) for N23500A40803, Meghan Broad Achievement (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e359] [cursor=pointer]:
                    - cell "Begin assignment Broad Achievement (+1 more) for N23500A40803, Meghan" [ref=e360]:
                      - button "Begin assignment Broad Achievement (+1 more) for N23500A40803, Meghan" [ref=e361]:
                        - generic [ref=e362]: N23500A40803, Meghan
                    - cell "Broad Achievement (+1 more) More info" [ref=e363]:
                      - generic [ref=e364]:
                        - button "Broad Achievement (+1 more)" [ref=e365]:
                          - generic [ref=e366]: Broad Achievement (+1 more)
                        - button "More info" [ref=e367]
                    - cell "—" [ref=e368]:
                      - button "—" [ref=e369]
                    - cell "● Not Started" [ref=e370]:
                      - button "● Not Started" [ref=e371]:
                        - generic [ref=e372]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e373]:
                      - button "Edit Assignment" [ref=e374]
                      - button "Add Tests" [ref=e375]
                      - button "Assignment actions" [ref=e376]
                  - row "Begin assignment General Intellectual Ability (GIA) for N81498A3018, Hobart General Intellectual Ability (GIA) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e377] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) for N81498A3018, Hobart" [ref=e378]:
                      - button "Begin assignment General Intellectual Ability (GIA) for N81498A3018, Hobart" [ref=e379]:
                        - generic [ref=e380]: N81498A3018, Hobart
                    - cell "General Intellectual Ability (GIA) More info" [ref=e381]:
                      - generic [ref=e382]:
                        - button "General Intellectual Ability (GIA)" [ref=e383]:
                          - generic [ref=e384]: General Intellectual Ability (GIA)
                        - button "More info" [ref=e385]
                    - cell "—" [ref=e386]:
                      - button "—" [ref=e387]
                    - cell "● Not Started" [ref=e388]:
                      - button "● Not Started" [ref=e389]:
                        - generic [ref=e390]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e391]:
                      - button "Edit Assignment" [ref=e392]
                      - button "Add Tests" [ref=e393]
                      - button "Assignment actions" [ref=e394]
                  - row "Begin assignment Dyslexia Test Set for N8102A86183, Elisa Dyslexia Test Set More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e395] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set for N8102A86183, Elisa" [ref=e396]:
                      - button "Begin assignment Dyslexia Test Set for N8102A86183, Elisa" [ref=e397]:
                        - generic [ref=e398]: N8102A86183, Elisa
                    - cell "Dyslexia Test Set More info" [ref=e399]:
                      - generic [ref=e400]:
                        - button "Dyslexia Test Set" [ref=e401]:
                          - generic [ref=e402]: Dyslexia Test Set
                        - button "More info" [ref=e403]
                    - cell "—" [ref=e404]:
                      - button "—" [ref=e405]
                    - cell "● Not Started" [ref=e406]:
                      - button "● Not Started" [ref=e407]:
                        - generic [ref=e408]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e409]:
                      - button "Edit Assignment" [ref=e410]
                      - button "Add Tests" [ref=e411]
                      - button "Assignment actions" [ref=e412]
                  - row "Begin assignment Rapid Automatized Naming (RAN) (+1 more) for N20542A71257, Chandler Rapid Automatized Naming (RAN) (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e413] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) (+1 more) for N20542A71257, Chandler" [ref=e414]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) (+1 more) for N20542A71257, Chandler" [ref=e415]:
                        - generic [ref=e416]: N20542A71257, Chandler
                    - cell "Rapid Automatized Naming (RAN) (+1 more) More info" [ref=e417]:
                      - generic [ref=e418]:
                        - button "Rapid Automatized Naming (RAN) (+1 more)" [ref=e419]:
                          - generic [ref=e420]: Rapid Automatized Naming (RAN) (+1 more)
                        - button "More info" [ref=e421]
                    - cell "—" [ref=e422]:
                      - button "—" [ref=e423]
                    - cell "● Not Started" [ref=e424]:
                      - button "● Not Started" [ref=e425]:
                        - generic [ref=e426]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e427]:
                      - button "Edit Assignment" [ref=e428]
                      - button "Add Tests" [ref=e429]
                      - button "Assignment actions" [ref=e430]
                  - row "Begin assignment Broad Achievement for N18943A67853, Jerrold Broad Achievement More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e431] [cursor=pointer]:
                    - cell "Begin assignment Broad Achievement for N18943A67853, Jerrold" [ref=e432]:
                      - button "Begin assignment Broad Achievement for N18943A67853, Jerrold" [ref=e433]:
                        - generic [ref=e434]: N18943A67853, Jerrold
                    - cell "Broad Achievement More info" [ref=e435]:
                      - generic [ref=e436]:
                        - button "Broad Achievement" [ref=e437]:
                          - generic [ref=e438]: Broad Achievement
                        - button "More info" [ref=e439]
                    - cell "—" [ref=e440]:
                      - button "—" [ref=e441]
                    - cell "● Not Started" [ref=e442]:
                      - button "● Not Started" [ref=e443]:
                        - generic [ref=e444]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e445]:
                      - button "Edit Assignment" [ref=e446]
                      - button "Add Tests" [ref=e447]
                      - button "Assignment actions" [ref=e448]
                  - row "Begin assignment General Intellectual Ability (GIA) for N12001A43199, Madie General Intellectual Ability (GIA) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e449] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) for N12001A43199, Madie" [ref=e450]:
                      - button "Begin assignment General Intellectual Ability (GIA) for N12001A43199, Madie" [ref=e451]:
                        - generic [ref=e452]: N12001A43199, Madie
                    - cell "General Intellectual Ability (GIA) More info" [ref=e453]:
                      - generic [ref=e454]:
                        - button "General Intellectual Ability (GIA)" [ref=e455]:
                          - generic [ref=e456]: General Intellectual Ability (GIA)
                        - button "More info" [ref=e457]
                    - cell "—" [ref=e458]:
                      - button "—" [ref=e459]
                    - cell "● Not Started" [ref=e460]:
                      - button "● Not Started" [ref=e461]:
                        - generic [ref=e462]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e463]:
                      - button "Edit Assignment" [ref=e464]
                      - button "Add Tests" [ref=e465]
                      - button "Assignment actions" [ref=e466]
                  - row "Begin assignment Dyslexia Test Set for N89823A32599, Jakob Dyslexia Test Set More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e467] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set for N89823A32599, Jakob" [ref=e468]:
                      - button "Begin assignment Dyslexia Test Set for N89823A32599, Jakob" [ref=e469]:
                        - generic [ref=e470]: N89823A32599, Jakob
                    - cell "Dyslexia Test Set More info" [ref=e471]:
                      - generic [ref=e472]:
                        - button "Dyslexia Test Set" [ref=e473]:
                          - generic [ref=e474]: Dyslexia Test Set
                        - button "More info" [ref=e475]
                    - cell "—" [ref=e476]:
                      - button "—" [ref=e477]
                    - cell "● Not Started" [ref=e478]:
                      - button "● Not Started" [ref=e479]:
                        - generic [ref=e480]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e481]:
                      - button "Edit Assignment" [ref=e482]
                      - button "Add Tests" [ref=e483]
                      - button "Assignment actions" [ref=e484]
                  - row "Begin assignment General Intellectual Ability (GIA) (+1 more) for N93645A64443, Jolie General Intellectual Ability (GIA) (+1 more) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e485] [cursor=pointer]:
                    - cell "Begin assignment General Intellectual Ability (GIA) (+1 more) for N93645A64443, Jolie" [ref=e486]:
                      - button "Begin assignment General Intellectual Ability (GIA) (+1 more) for N93645A64443, Jolie" [ref=e487]:
                        - generic [ref=e488]: N93645A64443, Jolie
                    - cell "General Intellectual Ability (GIA) (+1 more) More info" [ref=e489]:
                      - generic [ref=e490]:
                        - button "General Intellectual Ability (GIA) (+1 more)" [ref=e491]:
                          - generic [ref=e492]: General Intellectual Ability (GIA) (+1 more)
                        - button "More info" [ref=e493]
                    - cell "—" [ref=e494]:
                      - button "—" [ref=e495]
                    - cell "● Not Started" [ref=e496]:
                      - button "● Not Started" [ref=e497]:
                        - generic [ref=e498]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e499]:
                      - button "Edit Assignment" [ref=e500]
                      - button "Add Tests" [ref=e501]
                      - button "Assignment actions" [ref=e502]
                  - row "Begin assignment Rapid Automatized Naming (RAN) for N63871A60368, Earl Rapid Automatized Naming (RAN) More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e503] [cursor=pointer]:
                    - cell "Begin assignment Rapid Automatized Naming (RAN) for N63871A60368, Earl" [ref=e504]:
                      - button "Begin assignment Rapid Automatized Naming (RAN) for N63871A60368, Earl" [ref=e505]:
                        - generic [ref=e506]: N63871A60368, Earl
                    - cell "Rapid Automatized Naming (RAN) More info" [ref=e507]:
                      - generic [ref=e508]:
                        - button "Rapid Automatized Naming (RAN)" [ref=e509]:
                          - generic [ref=e510]: Rapid Automatized Naming (RAN)
                        - button "More info" [ref=e511]
                    - cell "—" [ref=e512]:
                      - button "—" [ref=e513]
                    - cell "● Not Started" [ref=e514]:
                      - button "● Not Started" [ref=e515]:
                        - generic [ref=e516]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e517]:
                      - button "Edit Assignment" [ref=e518]
                      - button "Add Tests" [ref=e519]
                      - button "Assignment actions" [ref=e520]
                  - row "Begin assignment Broad Achievement for N30317A53428, Irma Broad Achievement More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e521] [cursor=pointer]:
                    - cell "Begin assignment Broad Achievement for N30317A53428, Irma" [ref=e522]:
                      - button "Begin assignment Broad Achievement for N30317A53428, Irma" [ref=e523]:
                        - generic [ref=e524]: N30317A53428, Irma
                    - cell "Broad Achievement More info" [ref=e525]:
                      - generic [ref=e526]:
                        - button "Broad Achievement" [ref=e527]:
                          - generic [ref=e528]: Broad Achievement
                        - button "More info" [ref=e529]
                    - cell "—" [ref=e530]:
                      - button "—" [ref=e531]
                    - cell "● Not Started" [ref=e532]:
                      - button "● Not Started" [ref=e533]:
                        - generic [ref=e534]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e535]:
                      - button "Edit Assignment" [ref=e536]
                      - button "Add Tests" [ref=e537]
                      - button "Assignment actions" [ref=e538]
                  - row "Begin assignment Dyslexia Test Set for N86959A30846, Lula Dyslexia Test Set More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e539] [cursor=pointer]:
                    - cell "Begin assignment Dyslexia Test Set for N86959A30846, Lula" [ref=e540]:
                      - button "Begin assignment Dyslexia Test Set for N86959A30846, Lula" [ref=e541]:
                        - generic [ref=e542]: N86959A30846, Lula
                    - cell "Dyslexia Test Set More info" [ref=e543]:
                      - generic [ref=e544]:
                        - button "Dyslexia Test Set" [ref=e545]:
                          - generic [ref=e546]: Dyslexia Test Set
                        - button "More info" [ref=e547]
                    - cell "—" [ref=e548]:
                      - button "—" [ref=e549]
                    - cell "● Not Started" [ref=e550]:
                      - button "● Not Started" [ref=e551]:
                        - generic [ref=e552]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e553]:
                      - button "Edit Assignment" [ref=e554]
                      - button "Add Tests" [ref=e555]
                      - button "Assignment actions" [ref=e556]
                  - row "Begin assignment Form A for ln, test Form A More info 0 days ● Expired Generate Report Assignment actions" [ref=e557] [cursor=pointer]:
                    - cell "Begin assignment Form A for ln, test" [ref=e558]:
                      - button "Begin assignment Form A for ln, test" [ref=e559]:
                        - generic [ref=e560]: ln, test
                    - cell "Form A More info" [ref=e561]:
                      - generic [ref=e562]:
                        - button "Form A" [ref=e563]:
                          - generic [ref=e564]: Form A
                        - button "More info" [ref=e565]
                    - cell "0 days" [ref=e566]:
                      - button "0 days" [ref=e567]
                    - cell "● Expired" [ref=e568]:
                      - button "● Expired" [ref=e569]:
                        - generic [ref=e570]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e571]:
                      - button "Generate Report" [ref=e572]
                      - button "Assignment actions" [ref=e573]
                  - row "Begin assignment Form AB for N63163A62592, Maxine Form AB More info 75 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e574] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N63163A62592, Maxine" [ref=e575]:
                      - button "Begin assignment Form AB for N63163A62592, Maxine" [disabled] [ref=e576]:
                        - generic [ref=e577]: N63163A62592, Maxine
                    - cell "Form AB More info" [ref=e578]:
                      - generic [ref=e579]:
                        - button "Form AB" [disabled] [ref=e580]:
                          - generic [ref=e581]: Form AB
                        - button "More info" [ref=e582]
                    - cell "75 days" [ref=e583]:
                      - button "75 days" [disabled] [ref=e584]
                    - cell "● Submitted" [ref=e585]:
                      - button "● Submitted" [disabled] [ref=e586]:
                        - generic [ref=e587]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e588]:
                      - button "Edit Assignment" [disabled] [ref=e589]
                      - button "Add Tests" [disabled] [ref=e590]
                      - button "Assignment actions" [ref=e591]
                  - row "Begin assignment Form AB for N85545A66834, Odell Form AB More info 75 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e592] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N85545A66834, Odell" [ref=e593]:
                      - button "Begin assignment Form AB for N85545A66834, Odell" [disabled] [ref=e594]:
                        - generic [ref=e595]: N85545A66834, Odell
                    - cell "Form AB More info" [ref=e596]:
                      - generic [ref=e597]:
                        - button "Form AB" [disabled] [ref=e598]:
                          - generic [ref=e599]: Form AB
                        - button "More info" [ref=e600]
                    - cell "75 days" [ref=e601]:
                      - button "75 days" [disabled] [ref=e602]
                    - cell "● Submitted" [ref=e603]:
                      - button "● Submitted" [disabled] [ref=e604]:
                        - generic [ref=e605]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e606]:
                      - button "Edit Assignment" [disabled] [ref=e607]
                      - button "Add Tests" [disabled] [ref=e608]
                      - button "Assignment actions" [ref=e609]
                  - row "Begin assignment Form AB for N27115A99477, Dorcas Form AB More info 75 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e610] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N27115A99477, Dorcas" [ref=e611]:
                      - button "Begin assignment Form AB for N27115A99477, Dorcas" [disabled] [ref=e612]:
                        - generic [ref=e613]: N27115A99477, Dorcas
                    - cell "Form AB More info" [ref=e614]:
                      - generic [ref=e615]:
                        - button "Form AB" [disabled] [ref=e616]:
                          - generic [ref=e617]: Form AB
                        - button "More info" [ref=e618]
                    - cell "75 days" [ref=e619]:
                      - button "75 days" [disabled] [ref=e620]
                    - cell "● Submitted" [ref=e621]:
                      - button "● Submitted" [disabled] [ref=e622]:
                        - generic [ref=e623]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e624]:
                      - button "Edit Assignment" [disabled] [ref=e625]
                      - button "Add Tests" [disabled] [ref=e626]
                      - button "Assignment actions" [ref=e627]
                  - row "Begin assignment Form AB for N68448A42895, Camilla Form AB More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e628] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N68448A42895, Camilla" [ref=e629]:
                      - button "Begin assignment Form AB for N68448A42895, Camilla" [disabled] [ref=e630]:
                        - generic [ref=e631]: N68448A42895, Camilla
                    - cell "Form AB More info" [ref=e632]:
                      - generic [ref=e633]:
                        - button "Form AB" [disabled] [ref=e634]:
                          - generic [ref=e635]: Form AB
                        - button "More info" [ref=e636]
                    - cell "72 days" [ref=e637]:
                      - button "72 days" [disabled] [ref=e638]
                    - cell "● Submitted" [ref=e639]:
                      - button "● Submitted" [disabled] [ref=e640]:
                        - generic [ref=e641]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e642]:
                      - button "Edit Assignment" [disabled] [ref=e643]
                      - button "Add Tests" [disabled] [ref=e644]
                      - button "Assignment actions" [ref=e645]
                  - row "Begin assignment Form AB for N88747A75900, Pat Form AB More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e646] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N88747A75900, Pat" [ref=e647]:
                      - button "Begin assignment Form AB for N88747A75900, Pat" [disabled] [ref=e648]:
                        - generic [ref=e649]: N88747A75900, Pat
                    - cell "Form AB More info" [ref=e650]:
                      - generic [ref=e651]:
                        - button "Form AB" [disabled] [ref=e652]:
                          - generic [ref=e653]: Form AB
                        - button "More info" [ref=e654]
                    - cell "72 days" [ref=e655]:
                      - button "72 days" [disabled] [ref=e656]
                    - cell "● Submitted" [ref=e657]:
                      - button "● Submitted" [disabled] [ref=e658]:
                        - generic [ref=e659]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e660]:
                      - button "Edit Assignment" [disabled] [ref=e661]
                      - button "Add Tests" [disabled] [ref=e662]
                      - button "Assignment actions" [ref=e663]
                  - row "Begin assignment Form AB for N76284A22572, Myrtis Form AB More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e664] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N76284A22572, Myrtis" [ref=e665]:
                      - button "Begin assignment Form AB for N76284A22572, Myrtis" [disabled] [ref=e666]:
                        - generic [ref=e667]: N76284A22572, Myrtis
                    - cell "Form AB More info" [ref=e668]:
                      - generic [ref=e669]:
                        - button "Form AB" [disabled] [ref=e670]:
                          - generic [ref=e671]: Form AB
                        - button "More info" [ref=e672]
                    - cell "72 days" [ref=e673]:
                      - button "72 days" [disabled] [ref=e674]
                    - cell "● Submitted" [ref=e675]:
                      - button "● Submitted" [disabled] [ref=e676]:
                        - generic [ref=e677]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e678]:
                      - button "Edit Assignment" [disabled] [ref=e679]
                      - button "Add Tests" [disabled] [ref=e680]
                      - button "Assignment actions" [ref=e681]
                  - row "Begin assignment Form AB for N55652A83673, Keely Form AB More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e682] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N55652A83673, Keely" [ref=e683]:
                      - button "Begin assignment Form AB for N55652A83673, Keely" [disabled] [ref=e684]:
                        - generic [ref=e685]: N55652A83673, Keely
                    - cell "Form AB More info" [ref=e686]:
                      - generic [ref=e687]:
                        - button "Form AB" [disabled] [ref=e688]:
                          - generic [ref=e689]: Form AB
                        - button "More info" [ref=e690]
                    - cell "72 days" [ref=e691]:
                      - button "72 days" [disabled] [ref=e692]
                    - cell "● Submitted" [ref=e693]:
                      - button "● Submitted" [disabled] [ref=e694]:
                        - generic [ref=e695]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e696]:
                      - button "Edit Assignment" [disabled] [ref=e697]
                      - button "Add Tests" [disabled] [ref=e698]
                      - button "Assignment actions" [ref=e699]
                  - row "Begin assignment Form AB for N16545A84263, Abdul Form AB More info 67 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e700] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N16545A84263, Abdul" [ref=e701]:
                      - button "Begin assignment Form AB for N16545A84263, Abdul" [disabled] [ref=e702]:
                        - generic [ref=e703]: N16545A84263, Abdul
                    - cell "Form AB More info" [ref=e704]:
                      - generic [ref=e705]:
                        - button "Form AB" [disabled] [ref=e706]:
                          - generic [ref=e707]: Form AB
                        - button "More info" [ref=e708]
                    - cell "67 days" [ref=e709]:
                      - button "67 days" [disabled] [ref=e710]
                    - cell "● Submitted" [ref=e711]:
                      - button "● Submitted" [disabled] [ref=e712]:
                        - generic [ref=e713]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e714]:
                      - button "Edit Assignment" [disabled] [ref=e715]
                      - button "Add Tests" [disabled] [ref=e716]
                      - button "Assignment actions" [ref=e717]
                  - row "Begin assignment Form AB for N92114A48271, Judge Form AB More info 67 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e718] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N92114A48271, Judge" [ref=e719]:
                      - button "Begin assignment Form AB for N92114A48271, Judge" [disabled] [ref=e720]:
                        - generic [ref=e721]: N92114A48271, Judge
                    - cell "Form AB More info" [ref=e722]:
                      - generic [ref=e723]:
                        - button "Form AB" [disabled] [ref=e724]:
                          - generic [ref=e725]: Form AB
                        - button "More info" [ref=e726]
                    - cell "67 days" [ref=e727]:
                      - button "67 days" [disabled] [ref=e728]
                    - cell "● In Progress" [ref=e729]:
                      - button "● In Progress" [disabled] [ref=e730]:
                        - generic [ref=e731]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e732]:
                      - button "Edit Assignment" [disabled] [ref=e733]
                      - button "Add Tests" [disabled] [ref=e734]
                      - button "Assignment actions" [ref=e735]
                  - row "Begin assignment Form AB for N12452A50963, Larue Form AB More info 67 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e736] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N12452A50963, Larue" [ref=e737]:
                      - button "Begin assignment Form AB for N12452A50963, Larue" [disabled] [ref=e738]:
                        - generic [ref=e739]: N12452A50963, Larue
                    - cell "Form AB More info" [ref=e740]:
                      - generic [ref=e741]:
                        - button "Form AB" [disabled] [ref=e742]:
                          - generic [ref=e743]: Form AB
                        - button "More info" [ref=e744]
                    - cell "67 days" [ref=e745]:
                      - button "67 days" [disabled] [ref=e746]
                    - cell "● In Progress" [ref=e747]:
                      - button "● In Progress" [disabled] [ref=e748]:
                        - generic [ref=e749]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e750]:
                      - button "Edit Assignment" [disabled] [ref=e751]
                      - button "Add Tests" [disabled] [ref=e752]
                      - button "Assignment actions" [ref=e753]
                  - row "Begin assignment Form AB (+3 more) for N47832A79320, Levi Form AB (+3 more) More info 45 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e754] [cursor=pointer]:
                    - cell "Begin assignment Form AB (+3 more) for N47832A79320, Levi" [ref=e755]:
                      - button "Begin assignment Form AB (+3 more) for N47832A79320, Levi" [disabled] [ref=e756]:
                        - generic [ref=e757]: N47832A79320, Levi
                    - cell "Form AB (+3 more) More info" [ref=e758]:
                      - generic [ref=e759]:
                        - button "Form AB (+3 more)" [disabled] [ref=e760]:
                          - generic [ref=e761]: Form AB (+3 more)
                        - button "More info" [ref=e762]
                    - cell "45 days" [ref=e763]:
                      - button "45 days" [disabled] [ref=e764]
                    - cell "● In Progress" [ref=e765]:
                      - button "● In Progress" [disabled] [ref=e766]:
                        - generic [ref=e767]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e768]:
                      - button "Edit Assignment" [disabled] [ref=e769]
                      - button "Add Tests" [disabled] [ref=e770]
                      - button "Assignment actions" [ref=e771]
                  - row "Begin assignment Form AB (+3 more) for N74277A59610, Rolando Form AB (+3 more) More info 45 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e772] [cursor=pointer]:
                    - cell "Begin assignment Form AB (+3 more) for N74277A59610, Rolando" [ref=e773]:
                      - button "Begin assignment Form AB (+3 more) for N74277A59610, Rolando" [disabled] [ref=e774]:
                        - generic [ref=e775]: N74277A59610, Rolando
                    - cell "Form AB (+3 more) More info" [ref=e776]:
                      - generic [ref=e777]:
                        - button "Form AB (+3 more)" [disabled] [ref=e778]:
                          - generic [ref=e779]: Form AB (+3 more)
                        - button "More info" [ref=e780]
                    - cell "45 days" [ref=e781]:
                      - button "45 days" [disabled] [ref=e782]
                    - cell "● In Progress" [ref=e783]:
                      - button "● In Progress" [disabled] [ref=e784]:
                        - generic [ref=e785]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e786]:
                      - button "Edit Assignment" [disabled] [ref=e787]
                      - button "Add Tests" [disabled] [ref=e788]
                      - button "Assignment actions" [ref=e789]
                  - row "Begin assignment Form AB for N67379A13741, Vaughn Form AB More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e790] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N67379A13741, Vaughn" [ref=e791]:
                      - button "Begin assignment Form AB for N67379A13741, Vaughn" [disabled] [ref=e792]:
                        - generic [ref=e793]: N67379A13741, Vaughn
                    - cell "Form AB More info" [ref=e794]:
                      - generic [ref=e795]:
                        - button "Form AB" [disabled] [ref=e796]:
                          - generic [ref=e797]: Form AB
                        - button "More info" [ref=e798]
                    - cell "33 days" [ref=e799]:
                      - button "33 days" [disabled] [ref=e800]
                    - cell "● Submitted" [ref=e801]:
                      - button "● Submitted" [disabled] [ref=e802]:
                        - generic [ref=e803]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e804]:
                      - button "Edit Assignment" [disabled] [ref=e805]
                      - button "Add Tests" [disabled] [ref=e806]
                      - button "Assignment actions" [ref=e807]
                  - row "Begin assignment Form AB for N10783A72463, Daphney Form AB More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e808] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N10783A72463, Daphney" [ref=e809]:
                      - button "Begin assignment Form AB for N10783A72463, Daphney" [disabled] [ref=e810]:
                        - generic [ref=e811]: N10783A72463, Daphney
                    - cell "Form AB More info" [ref=e812]:
                      - generic [ref=e813]:
                        - button "Form AB" [disabled] [ref=e814]:
                          - generic [ref=e815]: Form AB
                        - button "More info" [ref=e816]
                    - cell "33 days" [ref=e817]:
                      - button "33 days" [disabled] [ref=e818]
                    - cell "● Submitted" [ref=e819]:
                      - button "● Submitted" [disabled] [ref=e820]:
                        - generic [ref=e821]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e822]:
                      - button "Edit Assignment" [disabled] [ref=e823]
                      - button "Add Tests" [disabled] [ref=e824]
                      - button "Assignment actions" [ref=e825]
                  - row "Begin assignment Form AB for N57343A89950, Ward Form AB More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e826] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N57343A89950, Ward" [ref=e827]:
                      - button "Begin assignment Form AB for N57343A89950, Ward" [disabled] [ref=e828]:
                        - generic [ref=e829]: N57343A89950, Ward
                    - cell "Form AB More info" [ref=e830]:
                      - generic [ref=e831]:
                        - button "Form AB" [disabled] [ref=e832]:
                          - generic [ref=e833]: Form AB
                        - button "More info" [ref=e834]
                    - cell "33 days" [ref=e835]:
                      - button "33 days" [disabled] [ref=e836]
                    - cell "● Submitted" [ref=e837]:
                      - button "● Submitted" [disabled] [ref=e838]:
                        - generic [ref=e839]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e840]:
                      - button "Edit Assignment" [disabled] [ref=e841]
                      - button "Add Tests" [disabled] [ref=e842]
                      - button "Assignment actions" [ref=e843]
                  - row "Begin assignment Form AB for N1059A56506, Reva Form AB More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e844] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N1059A56506, Reva" [ref=e845]:
                      - button "Begin assignment Form AB for N1059A56506, Reva" [disabled] [ref=e846]:
                        - generic [ref=e847]: N1059A56506, Reva
                    - cell "Form AB More info" [ref=e848]:
                      - generic [ref=e849]:
                        - button "Form AB" [disabled] [ref=e850]:
                          - generic [ref=e851]: Form AB
                        - button "More info" [ref=e852]
                    - cell "33 days" [ref=e853]:
                      - button "33 days" [disabled] [ref=e854]
                    - cell "● Submitted" [ref=e855]:
                      - button "● Submitted" [disabled] [ref=e856]:
                        - generic [ref=e857]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e858]:
                      - button "Edit Assignment" [disabled] [ref=e859]
                      - button "Add Tests" [disabled] [ref=e860]
                      - button "Assignment actions" [ref=e861]
                  - row "Begin assignment Form AB for N35410A59632, Elinore Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e862] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N35410A59632, Elinore" [ref=e863]:
                      - button "Begin assignment Form AB for N35410A59632, Elinore" [disabled] [ref=e864]:
                        - generic [ref=e865]: N35410A59632, Elinore
                    - cell "Form AB More info" [ref=e866]:
                      - generic [ref=e867]:
                        - button "Form AB" [disabled] [ref=e868]:
                          - generic [ref=e869]: Form AB
                        - button "More info" [ref=e870]
                    - cell "32 days" [ref=e871]:
                      - button "32 days" [disabled] [ref=e872]
                    - cell "● Submitted" [ref=e873]:
                      - button "● Submitted" [disabled] [ref=e874]:
                        - generic [ref=e875]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e876]:
                      - button "Edit Assignment" [disabled] [ref=e877]
                      - button "Add Tests" [disabled] [ref=e878]
                      - button "Assignment actions" [ref=e879]
                  - row "Begin assignment Form AB for N66797A89294, Virginia Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e880] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N66797A89294, Virginia" [ref=e881]:
                      - button "Begin assignment Form AB for N66797A89294, Virginia" [disabled] [ref=e882]:
                        - generic [ref=e883]: N66797A89294, Virginia
                    - cell "Form AB More info" [ref=e884]:
                      - generic [ref=e885]:
                        - button "Form AB" [disabled] [ref=e886]:
                          - generic [ref=e887]: Form AB
                        - button "More info" [ref=e888]
                    - cell "32 days" [ref=e889]:
                      - button "32 days" [disabled] [ref=e890]
                    - cell "● Submitted" [ref=e891]:
                      - button "● Submitted" [disabled] [ref=e892]:
                        - generic [ref=e893]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e894]:
                      - button "Edit Assignment" [disabled] [ref=e895]
                      - button "Add Tests" [disabled] [ref=e896]
                      - button "Assignment actions" [ref=e897]
                  - row "Begin assignment Form AB for N15355A321, Ryann Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e898] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N15355A321, Ryann" [ref=e899]:
                      - button "Begin assignment Form AB for N15355A321, Ryann" [disabled] [ref=e900]:
                        - generic [ref=e901]: N15355A321, Ryann
                    - cell "Form AB More info" [ref=e902]:
                      - generic [ref=e903]:
                        - button "Form AB" [disabled] [ref=e904]:
                          - generic [ref=e905]: Form AB
                        - button "More info" [ref=e906]
                    - cell "32 days" [ref=e907]:
                      - button "32 days" [disabled] [ref=e908]
                    - cell "● Submitted" [ref=e909]:
                      - button "● Submitted" [disabled] [ref=e910]:
                        - generic [ref=e911]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e912]:
                      - button "Edit Assignment" [disabled] [ref=e913]
                      - button "Add Tests" [disabled] [ref=e914]
                      - button "Assignment actions" [ref=e915]
                  - row "Begin assignment Form AB for N6371A16261, Angie Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e916] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N6371A16261, Angie" [ref=e917]:
                      - button "Begin assignment Form AB for N6371A16261, Angie" [disabled] [ref=e918]:
                        - generic [ref=e919]: N6371A16261, Angie
                    - cell "Form AB More info" [ref=e920]:
                      - generic [ref=e921]:
                        - button "Form AB" [disabled] [ref=e922]:
                          - generic [ref=e923]: Form AB
                        - button "More info" [ref=e924]
                    - cell "32 days" [ref=e925]:
                      - button "32 days" [disabled] [ref=e926]
                    - cell "● Submitted" [ref=e927]:
                      - button "● Submitted" [disabled] [ref=e928]:
                        - generic [ref=e929]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e930]:
                      - button "Edit Assignment" [disabled] [ref=e931]
                      - button "Add Tests" [disabled] [ref=e932]
                      - button "Assignment actions" [ref=e933]
                  - row "Begin assignment Form AB for N86336A33581, Aracely Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e934] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N86336A33581, Aracely" [ref=e935]:
                      - button "Begin assignment Form AB for N86336A33581, Aracely" [disabled] [ref=e936]:
                        - generic [ref=e937]: N86336A33581, Aracely
                    - cell "Form AB More info" [ref=e938]:
                      - generic [ref=e939]:
                        - button "Form AB" [disabled] [ref=e940]:
                          - generic [ref=e941]: Form AB
                        - button "More info" [ref=e942]
                    - cell "32 days" [ref=e943]:
                      - button "32 days" [disabled] [ref=e944]
                    - cell "● Submitted" [ref=e945]:
                      - button "● Submitted" [disabled] [ref=e946]:
                        - generic [ref=e947]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e948]:
                      - button "Edit Assignment" [disabled] [ref=e949]
                      - button "Add Tests" [disabled] [ref=e950]
                      - button "Assignment actions" [ref=e951]
                  - row "Begin assignment Form AB for N95351A68209, Ethel Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e952] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N95351A68209, Ethel" [ref=e953]:
                      - button "Begin assignment Form AB for N95351A68209, Ethel" [disabled] [ref=e954]:
                        - generic [ref=e955]: N95351A68209, Ethel
                    - cell "Form AB More info" [ref=e956]:
                      - generic [ref=e957]:
                        - button "Form AB" [disabled] [ref=e958]:
                          - generic [ref=e959]: Form AB
                        - button "More info" [ref=e960]
                    - cell "32 days" [ref=e961]:
                      - button "32 days" [disabled] [ref=e962]
                    - cell "● Submitted" [ref=e963]:
                      - button "● Submitted" [disabled] [ref=e964]:
                        - generic [ref=e965]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e966]:
                      - button "Edit Assignment" [disabled] [ref=e967]
                      - button "Add Tests" [disabled] [ref=e968]
                      - button "Assignment actions" [ref=e969]
                  - row "Begin assignment Form AB for N81877A12788, Germaine Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e970] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N81877A12788, Germaine" [ref=e971]:
                      - button "Begin assignment Form AB for N81877A12788, Germaine" [disabled] [ref=e972]:
                        - generic [ref=e973]: N81877A12788, Germaine
                    - cell "Form AB More info" [ref=e974]:
                      - generic [ref=e975]:
                        - button "Form AB" [disabled] [ref=e976]:
                          - generic [ref=e977]: Form AB
                        - button "More info" [ref=e978]
                    - cell "32 days" [ref=e979]:
                      - button "32 days" [disabled] [ref=e980]
                    - cell "● Submitted" [ref=e981]:
                      - button "● Submitted" [disabled] [ref=e982]:
                        - generic [ref=e983]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e984]:
                      - button "Edit Assignment" [disabled] [ref=e985]
                      - button "Add Tests" [disabled] [ref=e986]
                      - button "Assignment actions" [ref=e987]
                  - row "Begin assignment Form AB for N45066A53965, Christiana Form AB More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e988] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N45066A53965, Christiana" [ref=e989]:
                      - button "Begin assignment Form AB for N45066A53965, Christiana" [disabled] [ref=e990]:
                        - generic [ref=e991]: N45066A53965, Christiana
                    - cell "Form AB More info" [ref=e992]:
                      - generic [ref=e993]:
                        - button "Form AB" [disabled] [ref=e994]:
                          - generic [ref=e995]: Form AB
                        - button "More info" [ref=e996]
                    - cell "32 days" [ref=e997]:
                      - button "32 days" [disabled] [ref=e998]
                    - cell "● Submitted" [ref=e999]:
                      - button "● Submitted" [disabled] [ref=e1000]:
                        - generic [ref=e1001]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1002]:
                      - button "Edit Assignment" [disabled] [ref=e1003]
                      - button "Add Tests" [disabled] [ref=e1004]
                      - button "Assignment actions" [ref=e1005]
                  - row "Begin assignment Form AB for N53819A14210, Jeramie Form AB More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1006] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N53819A14210, Jeramie" [ref=e1007]:
                      - button "Begin assignment Form AB for N53819A14210, Jeramie" [disabled] [ref=e1008]:
                        - generic [ref=e1009]: N53819A14210, Jeramie
                    - cell "Form AB More info" [ref=e1010]:
                      - generic [ref=e1011]:
                        - button "Form AB" [disabled] [ref=e1012]:
                          - generic [ref=e1013]: Form AB
                        - button "More info" [ref=e1014]
                    - cell "29 days" [ref=e1015]:
                      - button "29 days" [disabled] [ref=e1016]
                    - cell "● Submitted" [ref=e1017]:
                      - button "● Submitted" [disabled] [ref=e1018]:
                        - generic [ref=e1019]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1020]:
                      - button "Edit Assignment" [disabled] [ref=e1021]
                      - button "Add Tests" [disabled] [ref=e1022]
                      - button "Assignment actions" [ref=e1023]
                  - row "Begin assignment Form AB for N34196A384, Ova Form AB More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1024] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N34196A384, Ova" [ref=e1025]:
                      - button "Begin assignment Form AB for N34196A384, Ova" [disabled] [ref=e1026]:
                        - generic [ref=e1027]: N34196A384, Ova
                    - cell "Form AB More info" [ref=e1028]:
                      - generic [ref=e1029]:
                        - button "Form AB" [disabled] [ref=e1030]:
                          - generic [ref=e1031]: Form AB
                        - button "More info" [ref=e1032]
                    - cell "29 days" [ref=e1033]:
                      - button "29 days" [disabled] [ref=e1034]
                    - cell "● Submitted" [ref=e1035]:
                      - button "● Submitted" [disabled] [ref=e1036]:
                        - generic [ref=e1037]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1038]:
                      - button "Edit Assignment" [disabled] [ref=e1039]
                      - button "Add Tests" [disabled] [ref=e1040]
                      - button "Assignment actions" [ref=e1041]
                  - row "Begin assignment Form AB for N9911A17249, Gregory Form AB More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1042] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N9911A17249, Gregory" [ref=e1043]:
                      - button "Begin assignment Form AB for N9911A17249, Gregory" [disabled] [ref=e1044]:
                        - generic [ref=e1045]: N9911A17249, Gregory
                    - cell "Form AB More info" [ref=e1046]:
                      - generic [ref=e1047]:
                        - button "Form AB" [disabled] [ref=e1048]:
                          - generic [ref=e1049]: Form AB
                        - button "More info" [ref=e1050]
                    - cell "29 days" [ref=e1051]:
                      - button "29 days" [disabled] [ref=e1052]
                    - cell "● Submitted" [ref=e1053]:
                      - button "● Submitted" [disabled] [ref=e1054]:
                        - generic [ref=e1055]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1056]:
                      - button "Edit Assignment" [disabled] [ref=e1057]
                      - button "Add Tests" [disabled] [ref=e1058]
                      - button "Assignment actions" [ref=e1059]
                  - row "Begin assignment Form AB for N39736A89472, Anthony Form AB More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1060] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N39736A89472, Anthony" [ref=e1061]:
                      - button "Begin assignment Form AB for N39736A89472, Anthony" [disabled] [ref=e1062]:
                        - generic [ref=e1063]: N39736A89472, Anthony
                    - cell "Form AB More info" [ref=e1064]:
                      - generic [ref=e1065]:
                        - button "Form AB" [disabled] [ref=e1066]:
                          - generic [ref=e1067]: Form AB
                        - button "More info" [ref=e1068]
                    - cell "29 days" [ref=e1069]:
                      - button "29 days" [disabled] [ref=e1070]
                    - cell "● Submitted" [ref=e1071]:
                      - button "● Submitted" [disabled] [ref=e1072]:
                        - generic [ref=e1073]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1074]:
                      - button "Edit Assignment" [disabled] [ref=e1075]
                      - button "Add Tests" [disabled] [ref=e1076]
                      - button "Assignment actions" [ref=e1077]
                  - row "Begin assignment Form AB for N71054A60721, Geo Form AB More info 25 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1078] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N71054A60721, Geo" [ref=e1079]:
                      - button "Begin assignment Form AB for N71054A60721, Geo" [disabled] [ref=e1080]:
                        - generic [ref=e1081]: N71054A60721, Geo
                    - cell "Form AB More info" [ref=e1082]:
                      - generic [ref=e1083]:
                        - button "Form AB" [disabled] [ref=e1084]:
                          - generic [ref=e1085]: Form AB
                        - button "More info" [ref=e1086]
                    - cell "25 days" [ref=e1087]:
                      - button "25 days" [disabled] [ref=e1088]
                    - cell "● Submitted" [ref=e1089]:
                      - button "● Submitted" [disabled] [ref=e1090]:
                        - generic [ref=e1091]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1092]:
                      - button "Edit Assignment" [disabled] [ref=e1093]
                      - button "Add Tests" [disabled] [ref=e1094]
                      - button "Assignment actions" [ref=e1095]
                  - row "Begin assignment Form AB for N3222A31554, Carson Form AB More info 25 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1096] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N3222A31554, Carson" [ref=e1097]:
                      - button "Begin assignment Form AB for N3222A31554, Carson" [disabled] [ref=e1098]:
                        - generic [ref=e1099]: N3222A31554, Carson
                    - cell "Form AB More info" [ref=e1100]:
                      - generic [ref=e1101]:
                        - button "Form AB" [disabled] [ref=e1102]:
                          - generic [ref=e1103]: Form AB
                        - button "More info" [ref=e1104]
                    - cell "25 days" [ref=e1105]:
                      - button "25 days" [disabled] [ref=e1106]
                    - cell "● Submitted" [ref=e1107]:
                      - button "● Submitted" [disabled] [ref=e1108]:
                        - generic [ref=e1109]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1110]:
                      - button "Edit Assignment" [disabled] [ref=e1111]
                      - button "Add Tests" [disabled] [ref=e1112]
                      - button "Assignment actions" [ref=e1113]
                  - row "Begin assignment Form AB for N74633A54498, Icie Form AB More info 24 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1114] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N74633A54498, Icie" [ref=e1115]:
                      - button "Begin assignment Form AB for N74633A54498, Icie" [disabled] [ref=e1116]:
                        - generic [ref=e1117]: N74633A54498, Icie
                    - cell "Form AB More info" [ref=e1118]:
                      - generic [ref=e1119]:
                        - button "Form AB" [disabled] [ref=e1120]:
                          - generic [ref=e1121]: Form AB
                        - button "More info" [ref=e1122]
                    - cell "24 days" [ref=e1123]:
                      - button "24 days" [disabled] [ref=e1124]
                    - cell "● Submitted" [ref=e1125]:
                      - button "● Submitted" [disabled] [ref=e1126]:
                        - generic [ref=e1127]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1128]:
                      - button "Edit Assignment" [disabled] [ref=e1129]
                      - button "Add Tests" [disabled] [ref=e1130]
                      - button "Assignment actions" [ref=e1131]
                  - row "Begin assignment Form AB (+3 more) for N41752A39580, Zoey Form AB (+3 more) More info 23 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e1132] [cursor=pointer]:
                    - cell "Begin assignment Form AB (+3 more) for N41752A39580, Zoey" [ref=e1133]:
                      - button "Begin assignment Form AB (+3 more) for N41752A39580, Zoey" [disabled] [ref=e1134]:
                        - generic [ref=e1135]: N41752A39580, Zoey
                    - cell "Form AB (+3 more) More info" [ref=e1136]:
                      - generic [ref=e1137]:
                        - button "Form AB (+3 more)" [disabled] [ref=e1138]:
                          - generic [ref=e1139]: Form AB (+3 more)
                        - button "More info" [ref=e1140]
                    - cell "23 days" [ref=e1141]:
                      - button "23 days" [disabled] [ref=e1142]
                    - cell "● In Progress" [ref=e1143]:
                      - button "● In Progress" [disabled] [ref=e1144]:
                        - generic [ref=e1145]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1146]:
                      - button "Edit Assignment" [disabled] [ref=e1147]
                      - button "Add Tests" [disabled] [ref=e1148]
                      - button "Assignment actions" [ref=e1149]
                  - row "Begin assignment Form AB (+3 more) for N53172A90719, Ike Form AB (+3 more) More info 23 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e1150] [cursor=pointer]:
                    - cell "Begin assignment Form AB (+3 more) for N53172A90719, Ike" [ref=e1151]:
                      - button "Begin assignment Form AB (+3 more) for N53172A90719, Ike" [disabled] [ref=e1152]:
                        - generic [ref=e1153]: N53172A90719, Ike
                    - cell "Form AB (+3 more) More info" [ref=e1154]:
                      - generic [ref=e1155]:
                        - button "Form AB (+3 more)" [disabled] [ref=e1156]:
                          - generic [ref=e1157]: Form AB (+3 more)
                        - button "More info" [ref=e1158]
                    - cell "23 days" [ref=e1159]:
                      - button "23 days" [disabled] [ref=e1160]
                    - cell "● In Progress" [ref=e1161]:
                      - button "● In Progress" [disabled] [ref=e1162]:
                        - generic [ref=e1163]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1164]:
                      - button "Edit Assignment" [disabled] [ref=e1165]
                      - button "Add Tests" [disabled] [ref=e1166]
                      - button "Assignment actions" [ref=e1167]
                  - row "Begin assignment Form AB for N51744A15363, Clarabelle Form AB More info 23 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e1168] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N51744A15363, Clarabelle" [ref=e1169]:
                      - button "Begin assignment Form AB for N51744A15363, Clarabelle" [disabled] [ref=e1170]:
                        - generic [ref=e1171]: N51744A15363, Clarabelle
                    - cell "Form AB More info" [ref=e1172]:
                      - generic [ref=e1173]:
                        - button "Form AB" [disabled] [ref=e1174]:
                          - generic [ref=e1175]: Form AB
                        - button "More info" [ref=e1176]
                    - cell "23 days" [ref=e1177]:
                      - button "23 days" [disabled] [ref=e1178]
                    - cell "● In Progress" [ref=e1179]:
                      - button "● In Progress" [disabled] [ref=e1180]:
                        - generic [ref=e1181]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1182]:
                      - button "Edit Assignment" [disabled] [ref=e1183]
                      - button "Add Tests" [disabled] [ref=e1184]
                      - button "Assignment actions" [ref=e1185]
                  - row "Begin assignment Form AB for N83964A10633, Oscar Form AB More info 23 days ● In Progress Edit Assignment Add Tests Assignment actions" [ref=e1186] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N83964A10633, Oscar" [ref=e1187]:
                      - button "Begin assignment Form AB for N83964A10633, Oscar" [disabled] [ref=e1188]:
                        - generic [ref=e1189]: N83964A10633, Oscar
                    - cell "Form AB More info" [ref=e1190]:
                      - generic [ref=e1191]:
                        - button "Form AB" [disabled] [ref=e1192]:
                          - generic [ref=e1193]: Form AB
                        - button "More info" [ref=e1194]
                    - cell "23 days" [ref=e1195]:
                      - button "23 days" [disabled] [ref=e1196]
                    - cell "● In Progress" [ref=e1197]:
                      - button "● In Progress" [disabled] [ref=e1198]:
                        - generic [ref=e1199]: ●
                        - text: In Progress
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1200]:
                      - button "Edit Assignment" [disabled] [ref=e1201]
                      - button "Add Tests" [disabled] [ref=e1202]
                      - button "Assignment actions" [ref=e1203]
                  - row "Begin assignment Form AB for N90223A8951, Angus Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1204] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N90223A8951, Angus" [ref=e1205]:
                      - button "Begin assignment Form AB for N90223A8951, Angus" [disabled] [ref=e1206]:
                        - generic [ref=e1207]: N90223A8951, Angus
                    - cell "Form AB More info" [ref=e1208]:
                      - generic [ref=e1209]:
                        - button "Form AB" [disabled] [ref=e1210]:
                          - generic [ref=e1211]: Form AB
                        - button "More info" [ref=e1212]
                    - cell "—" [ref=e1213]:
                      - button "—" [disabled] [ref=e1214]
                    - cell "● Not Started" [ref=e1215]:
                      - button "● Not Started" [disabled] [ref=e1216]:
                        - generic [ref=e1217]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1218]:
                      - button "Edit Assignment" [disabled] [ref=e1219]
                      - button "Add Tests" [disabled] [ref=e1220]
                      - button "Assignment actions" [ref=e1221]
                  - row "Begin assignment Form AB for N76436A11671, Antonina Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1222] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N76436A11671, Antonina" [ref=e1223]:
                      - button "Begin assignment Form AB for N76436A11671, Antonina" [disabled] [ref=e1224]:
                        - generic [ref=e1225]: N76436A11671, Antonina
                    - cell "Form AB More info" [ref=e1226]:
                      - generic [ref=e1227]:
                        - button "Form AB" [disabled] [ref=e1228]:
                          - generic [ref=e1229]: Form AB
                        - button "More info" [ref=e1230]
                    - cell "—" [ref=e1231]:
                      - button "—" [disabled] [ref=e1232]
                    - cell "● Not Started" [ref=e1233]:
                      - button "● Not Started" [disabled] [ref=e1234]:
                        - generic [ref=e1235]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1236]:
                      - button "Edit Assignment" [disabled] [ref=e1237]
                      - button "Add Tests" [disabled] [ref=e1238]
                      - button "Assignment actions" [ref=e1239]
                  - row "Begin assignment Form AB for N51949A4715, Domenica Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1240] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N51949A4715, Domenica" [ref=e1241]:
                      - button "Begin assignment Form AB for N51949A4715, Domenica" [disabled] [ref=e1242]:
                        - generic [ref=e1243]: N51949A4715, Domenica
                    - cell "Form AB More info" [ref=e1244]:
                      - generic [ref=e1245]:
                        - button "Form AB" [disabled] [ref=e1246]:
                          - generic [ref=e1247]: Form AB
                        - button "More info" [ref=e1248]
                    - cell "—" [ref=e1249]:
                      - button "—" [disabled] [ref=e1250]
                    - cell "● Not Started" [ref=e1251]:
                      - button "● Not Started" [disabled] [ref=e1252]:
                        - generic [ref=e1253]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1254]:
                      - button "Edit Assignment" [disabled] [ref=e1255]
                      - button "Add Tests" [disabled] [ref=e1256]
                      - button "Assignment actions" [ref=e1257]
                  - row "Begin assignment Form AB for N81984A96435, Jerel Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1258] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N81984A96435, Jerel" [ref=e1259]:
                      - button "Begin assignment Form AB for N81984A96435, Jerel" [disabled] [ref=e1260]:
                        - generic [ref=e1261]: N81984A96435, Jerel
                    - cell "Form AB More info" [ref=e1262]:
                      - generic [ref=e1263]:
                        - button "Form AB" [disabled] [ref=e1264]:
                          - generic [ref=e1265]: Form AB
                        - button "More info" [ref=e1266]
                    - cell "—" [ref=e1267]:
                      - button "—" [disabled] [ref=e1268]
                    - cell "● Not Started" [ref=e1269]:
                      - button "● Not Started" [disabled] [ref=e1270]:
                        - generic [ref=e1271]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1272]:
                      - button "Edit Assignment" [disabled] [ref=e1273]
                      - button "Add Tests" [disabled] [ref=e1274]
                      - button "Assignment actions" [ref=e1275]
                  - row "Begin assignment Form AB for N55783A35198, Kamren Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1276] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N55783A35198, Kamren" [ref=e1277]:
                      - button "Begin assignment Form AB for N55783A35198, Kamren" [disabled] [ref=e1278]:
                        - generic [ref=e1279]: N55783A35198, Kamren
                    - cell "Form AB More info" [ref=e1280]:
                      - generic [ref=e1281]:
                        - button "Form AB" [disabled] [ref=e1282]:
                          - generic [ref=e1283]: Form AB
                        - button "More info" [ref=e1284]
                    - cell "—" [ref=e1285]:
                      - button "—" [disabled] [ref=e1286]
                    - cell "● Not Started" [ref=e1287]:
                      - button "● Not Started" [disabled] [ref=e1288]:
                        - generic [ref=e1289]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1290]:
                      - button "Edit Assignment" [disabled] [ref=e1291]
                      - button "Add Tests" [disabled] [ref=e1292]
                      - button "Assignment actions" [ref=e1293]
                  - row "Begin assignment Form AB for N39846A73700, Shayne Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1294] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N39846A73700, Shayne" [ref=e1295]:
                      - button "Begin assignment Form AB for N39846A73700, Shayne" [disabled] [ref=e1296]:
                        - generic [ref=e1297]: N39846A73700, Shayne
                    - cell "Form AB More info" [ref=e1298]:
                      - generic [ref=e1299]:
                        - button "Form AB" [disabled] [ref=e1300]:
                          - generic [ref=e1301]: Form AB
                        - button "More info" [ref=e1302]
                    - cell "—" [ref=e1303]:
                      - button "—" [disabled] [ref=e1304]
                    - cell "● Not Started" [ref=e1305]:
                      - button "● Not Started" [disabled] [ref=e1306]:
                        - generic [ref=e1307]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1308]:
                      - button "Edit Assignment" [disabled] [ref=e1309]
                      - button "Add Tests" [disabled] [ref=e1310]
                      - button "Assignment actions" [ref=e1311]
                  - row "Begin assignment Form AB for N41725A11446, Dimitri Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1312] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N41725A11446, Dimitri" [ref=e1313]:
                      - button "Begin assignment Form AB for N41725A11446, Dimitri" [disabled] [ref=e1314]:
                        - generic [ref=e1315]: N41725A11446, Dimitri
                    - cell "Form AB More info" [ref=e1316]:
                      - generic [ref=e1317]:
                        - button "Form AB" [disabled] [ref=e1318]:
                          - generic [ref=e1319]: Form AB
                        - button "More info" [ref=e1320]
                    - cell "—" [ref=e1321]:
                      - button "—" [disabled] [ref=e1322]
                    - cell "● Not Started" [ref=e1323]:
                      - button "● Not Started" [disabled] [ref=e1324]:
                        - generic [ref=e1325]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1326]:
                      - button "Edit Assignment" [disabled] [ref=e1327]
                      - button "Add Tests" [disabled] [ref=e1328]
                      - button "Assignment actions" [ref=e1329]
                  - row "Begin assignment Form AB for N72048A19405, Lora Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1330] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N72048A19405, Lora" [ref=e1331]:
                      - button "Begin assignment Form AB for N72048A19405, Lora" [disabled] [ref=e1332]:
                        - generic [ref=e1333]: N72048A19405, Lora
                    - cell "Form AB More info" [ref=e1334]:
                      - generic [ref=e1335]:
                        - button "Form AB" [disabled] [ref=e1336]:
                          - generic [ref=e1337]: Form AB
                        - button "More info" [ref=e1338]
                    - cell "—" [ref=e1339]:
                      - button "—" [disabled] [ref=e1340]
                    - cell "● Not Started" [ref=e1341]:
                      - button "● Not Started" [disabled] [ref=e1342]:
                        - generic [ref=e1343]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1344]:
                      - button "Edit Assignment" [disabled] [ref=e1345]
                      - button "Add Tests" [disabled] [ref=e1346]
                      - button "Assignment actions" [ref=e1347]
                  - row "Begin assignment Form AB for N18282A88310, Danyka Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1348] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N18282A88310, Danyka" [ref=e1349]:
                      - button "Begin assignment Form AB for N18282A88310, Danyka" [disabled] [ref=e1350]:
                        - generic [ref=e1351]: N18282A88310, Danyka
                    - cell "Form AB More info" [ref=e1352]:
                      - generic [ref=e1353]:
                        - button "Form AB" [disabled] [ref=e1354]:
                          - generic [ref=e1355]: Form AB
                        - button "More info" [ref=e1356]
                    - cell "—" [ref=e1357]:
                      - button "—" [disabled] [ref=e1358]
                    - cell "● Not Started" [ref=e1359]:
                      - button "● Not Started" [disabled] [ref=e1360]:
                        - generic [ref=e1361]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1362]:
                      - button "Edit Assignment" [disabled] [ref=e1363]
                      - button "Add Tests" [disabled] [ref=e1364]
                      - button "Assignment actions" [ref=e1365]
                  - row "Begin assignment Form AB for N3009A17546, Therese Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1366] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N3009A17546, Therese" [ref=e1367]:
                      - button "Begin assignment Form AB for N3009A17546, Therese" [disabled] [ref=e1368]:
                        - generic [ref=e1369]: N3009A17546, Therese
                    - cell "Form AB More info" [ref=e1370]:
                      - generic [ref=e1371]:
                        - button "Form AB" [disabled] [ref=e1372]:
                          - generic [ref=e1373]: Form AB
                        - button "More info" [ref=e1374]
                    - cell "—" [ref=e1375]:
                      - button "—" [disabled] [ref=e1376]
                    - cell "● Not Started" [ref=e1377]:
                      - button "● Not Started" [disabled] [ref=e1378]:
                        - generic [ref=e1379]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1380]:
                      - button "Edit Assignment" [disabled] [ref=e1381]
                      - button "Add Tests" [disabled] [ref=e1382]
                      - button "Assignment actions" [ref=e1383]
                  - row "Begin assignment Form AB for N97328A18866, Maida Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1384] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N97328A18866, Maida" [ref=e1385]:
                      - button "Begin assignment Form AB for N97328A18866, Maida" [disabled] [ref=e1386]:
                        - generic [ref=e1387]: N97328A18866, Maida
                    - cell "Form AB More info" [ref=e1388]:
                      - generic [ref=e1389]:
                        - button "Form AB" [disabled] [ref=e1390]:
                          - generic [ref=e1391]: Form AB
                        - button "More info" [ref=e1392]
                    - cell "—" [ref=e1393]:
                      - button "—" [disabled] [ref=e1394]
                    - cell "● Not Started" [ref=e1395]:
                      - button "● Not Started" [disabled] [ref=e1396]:
                        - generic [ref=e1397]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1398]:
                      - button "Edit Assignment" [disabled] [ref=e1399]
                      - button "Add Tests" [disabled] [ref=e1400]
                      - button "Assignment actions" [ref=e1401]
                  - row "Begin assignment Form AB for N29299A70600, Nedra Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1402] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N29299A70600, Nedra" [ref=e1403]:
                      - button "Begin assignment Form AB for N29299A70600, Nedra" [disabled] [ref=e1404]:
                        - generic [ref=e1405]: N29299A70600, Nedra
                    - cell "Form AB More info" [ref=e1406]:
                      - generic [ref=e1407]:
                        - button "Form AB" [disabled] [ref=e1408]:
                          - generic [ref=e1409]: Form AB
                        - button "More info" [ref=e1410]
                    - cell "0 days" [ref=e1411]:
                      - button "0 days" [disabled] [ref=e1412]
                    - cell "● Expired" [ref=e1413]:
                      - button "● Expired" [disabled] [ref=e1414]:
                        - generic [ref=e1415]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1416]:
                      - button "Generate Report" [ref=e1417]
                      - button "Assignment actions" [ref=e1418]
                  - row "Begin assignment Form AB for N75253A70729, Antoinette Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1419] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N75253A70729, Antoinette" [ref=e1420]:
                      - button "Begin assignment Form AB for N75253A70729, Antoinette" [disabled] [ref=e1421]:
                        - generic [ref=e1422]: N75253A70729, Antoinette
                    - cell "Form AB More info" [ref=e1423]:
                      - generic [ref=e1424]:
                        - button "Form AB" [disabled] [ref=e1425]:
                          - generic [ref=e1426]: Form AB
                        - button "More info" [ref=e1427]
                    - cell "—" [ref=e1428]:
                      - button "—" [disabled] [ref=e1429]
                    - cell "● Not Started" [ref=e1430]:
                      - button "● Not Started" [disabled] [ref=e1431]:
                        - generic [ref=e1432]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1433]:
                      - button "Edit Assignment" [disabled] [ref=e1434]
                      - button "Add Tests" [disabled] [ref=e1435]
                      - button "Assignment actions" [ref=e1436]
                  - row "Begin assignment Form AB for N71503A97880, Maxwell Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1437] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N71503A97880, Maxwell" [ref=e1438]:
                      - button "Begin assignment Form AB for N71503A97880, Maxwell" [disabled] [ref=e1439]:
                        - generic [ref=e1440]: N71503A97880, Maxwell
                    - cell "Form AB More info" [ref=e1441]:
                      - generic [ref=e1442]:
                        - button "Form AB" [disabled] [ref=e1443]:
                          - generic [ref=e1444]: Form AB
                        - button "More info" [ref=e1445]
                    - cell "0 days" [ref=e1446]:
                      - button "0 days" [disabled] [ref=e1447]
                    - cell "● Expired" [ref=e1448]:
                      - button "● Expired" [disabled] [ref=e1449]:
                        - generic [ref=e1450]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1451]:
                      - button "Generate Report" [ref=e1452]
                      - button "Assignment actions" [ref=e1453]
                  - row "Begin assignment Form AB for N88272A72017, Kaylie Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1454] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N88272A72017, Kaylie" [ref=e1455]:
                      - button "Begin assignment Form AB for N88272A72017, Kaylie" [disabled] [ref=e1456]:
                        - generic [ref=e1457]: N88272A72017, Kaylie
                    - cell "Form AB More info" [ref=e1458]:
                      - generic [ref=e1459]:
                        - button "Form AB" [disabled] [ref=e1460]:
                          - generic [ref=e1461]: Form AB
                        - button "More info" [ref=e1462]
                    - cell "0 days" [ref=e1463]:
                      - button "0 days" [disabled] [ref=e1464]
                    - cell "● Expired" [ref=e1465]:
                      - button "● Expired" [disabled] [ref=e1466]:
                        - generic [ref=e1467]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1468]:
                      - button "Generate Report" [ref=e1469]
                      - button "Assignment actions" [ref=e1470]
                  - row "Begin assignment Form AB for N1790A63078, Nicola Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1471] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N1790A63078, Nicola" [ref=e1472]:
                      - button "Begin assignment Form AB for N1790A63078, Nicola" [disabled] [ref=e1473]:
                        - generic [ref=e1474]: N1790A63078, Nicola
                    - cell "Form AB More info" [ref=e1475]:
                      - generic [ref=e1476]:
                        - button "Form AB" [disabled] [ref=e1477]:
                          - generic [ref=e1478]: Form AB
                        - button "More info" [ref=e1479]
                    - cell "0 days" [ref=e1480]:
                      - button "0 days" [disabled] [ref=e1481]
                    - cell "● Expired" [ref=e1482]:
                      - button "● Expired" [disabled] [ref=e1483]:
                        - generic [ref=e1484]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1485]:
                      - button "Generate Report" [ref=e1486]
                      - button "Assignment actions" [ref=e1487]
                  - row "Begin assignment Form AB for N3295A68756, Bethel Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1488] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N3295A68756, Bethel" [ref=e1489]:
                      - button "Begin assignment Form AB for N3295A68756, Bethel" [disabled] [ref=e1490]:
                        - generic [ref=e1491]: N3295A68756, Bethel
                    - cell "Form AB More info" [ref=e1492]:
                      - generic [ref=e1493]:
                        - button "Form AB" [disabled] [ref=e1494]:
                          - generic [ref=e1495]: Form AB
                        - button "More info" [ref=e1496]
                    - cell "0 days" [ref=e1497]:
                      - button "0 days" [disabled] [ref=e1498]
                    - cell "● Expired" [ref=e1499]:
                      - button "● Expired" [disabled] [ref=e1500]:
                        - generic [ref=e1501]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1502]:
                      - button "Generate Report" [ref=e1503]
                      - button "Assignment actions" [ref=e1504]
                  - row "Begin assignment Form AB for N10257A87359, Mollie Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1505] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N10257A87359, Mollie" [ref=e1506]:
                      - button "Begin assignment Form AB for N10257A87359, Mollie" [disabled] [ref=e1507]:
                        - generic [ref=e1508]: N10257A87359, Mollie
                    - cell "Form AB More info" [ref=e1509]:
                      - generic [ref=e1510]:
                        - button "Form AB" [disabled] [ref=e1511]:
                          - generic [ref=e1512]: Form AB
                        - button "More info" [ref=e1513]
                    - cell "0 days" [ref=e1514]:
                      - button "0 days" [disabled] [ref=e1515]
                    - cell "● Expired" [ref=e1516]:
                      - button "● Expired" [disabled] [ref=e1517]:
                        - generic [ref=e1518]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1519]:
                      - button "Generate Report" [ref=e1520]
                      - button "Assignment actions" [ref=e1521]
                  - row "Begin assignment Form AB for N93565A73084, Devan Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1522] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N93565A73084, Devan" [ref=e1523]:
                      - button "Begin assignment Form AB for N93565A73084, Devan" [disabled] [ref=e1524]:
                        - generic [ref=e1525]: N93565A73084, Devan
                    - cell "Form AB More info" [ref=e1526]:
                      - generic [ref=e1527]:
                        - button "Form AB" [disabled] [ref=e1528]:
                          - generic [ref=e1529]: Form AB
                        - button "More info" [ref=e1530]
                    - cell "0 days" [ref=e1531]:
                      - button "0 days" [disabled] [ref=e1532]
                    - cell "● Expired" [ref=e1533]:
                      - button "● Expired" [disabled] [ref=e1534]:
                        - generic [ref=e1535]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1536]:
                      - button "Generate Report" [ref=e1537]
                      - button "Assignment actions" [ref=e1538]
                  - row "Begin assignment Form AB for N33364A7104, Granville Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1539] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N33364A7104, Granville" [ref=e1540]:
                      - button "Begin assignment Form AB for N33364A7104, Granville" [disabled] [ref=e1541]:
                        - generic [ref=e1542]: N33364A7104, Granville
                    - cell "Form AB More info" [ref=e1543]:
                      - generic [ref=e1544]:
                        - button "Form AB" [disabled] [ref=e1545]:
                          - generic [ref=e1546]: Form AB
                        - button "More info" [ref=e1547]
                    - cell "—" [ref=e1548]:
                      - button "—" [disabled] [ref=e1549]
                    - cell "● Not Started" [ref=e1550]:
                      - button "● Not Started" [disabled] [ref=e1551]:
                        - generic [ref=e1552]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1553]:
                      - button "Edit Assignment" [disabled] [ref=e1554]
                      - button "Add Tests" [disabled] [ref=e1555]
                      - button "Assignment actions" [ref=e1556]
                  - row "Begin assignment Form AB for N8625A40986, Will Form AB More info — ● Not Started Edit Assignment Add Tests Assignment actions" [ref=e1557] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N8625A40986, Will" [ref=e1558]:
                      - button "Begin assignment Form AB for N8625A40986, Will" [disabled] [ref=e1559]:
                        - generic [ref=e1560]: N8625A40986, Will
                    - cell "Form AB More info" [ref=e1561]:
                      - generic [ref=e1562]:
                        - button "Form AB" [disabled] [ref=e1563]:
                          - generic [ref=e1564]: Form AB
                        - button "More info" [ref=e1565]
                    - cell "—" [ref=e1566]:
                      - button "—" [disabled] [ref=e1567]
                    - cell "● Not Started" [ref=e1568]:
                      - button "● Not Started" [disabled] [ref=e1569]:
                        - generic [ref=e1570]: ●
                        - text: Not Started
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1571]:
                      - button "Edit Assignment" [disabled] [ref=e1572]
                      - button "Add Tests" [disabled] [ref=e1573]
                      - button "Assignment actions" [ref=e1574]
                  - row "Begin assignment Form AB for N33195A99773, Althea Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1575] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N33195A99773, Althea" [ref=e1576]:
                      - button "Begin assignment Form AB for N33195A99773, Althea" [disabled] [ref=e1577]:
                        - generic [ref=e1578]: N33195A99773, Althea
                    - cell "Form AB More info" [ref=e1579]:
                      - generic [ref=e1580]:
                        - button "Form AB" [disabled] [ref=e1581]:
                          - generic [ref=e1582]: Form AB
                        - button "More info" [ref=e1583]
                    - cell "0 days" [ref=e1584]:
                      - button "0 days" [disabled] [ref=e1585]
                    - cell "● Expired" [ref=e1586]:
                      - button "● Expired" [disabled] [ref=e1587]:
                        - generic [ref=e1588]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1589]:
                      - button "Generate Report" [ref=e1590]
                      - button "Assignment actions" [ref=e1591]
                  - row "Begin assignment Form AB for N77575A97599, Garret Form AB More info 0 days ● Expired Generate Report Assignment actions" [ref=e1592] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N77575A97599, Garret" [ref=e1593]:
                      - button "Begin assignment Form AB for N77575A97599, Garret" [disabled] [ref=e1594]:
                        - generic [ref=e1595]: N77575A97599, Garret
                    - cell "Form AB More info" [ref=e1596]:
                      - generic [ref=e1597]:
                        - button "Form AB" [disabled] [ref=e1598]:
                          - generic [ref=e1599]: Form AB
                        - button "More info" [ref=e1600]
                    - cell "0 days" [ref=e1601]:
                      - button "0 days" [disabled] [ref=e1602]
                    - cell "● Expired" [ref=e1603]:
                      - button "● Expired" [disabled] [ref=e1604]:
                        - generic [ref=e1605]: ●
                        - text: Expired
                    - cell "Generate Report Assignment actions" [ref=e1606]:
                      - button "Generate Report" [ref=e1607]
                      - button "Assignment actions" [ref=e1608]
                  - row "Begin assignment Form AB for N13405A18952, Ramon Form AB More info 11 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1609] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N13405A18952, Ramon" [ref=e1610]:
                      - button "Begin assignment Form AB for N13405A18952, Ramon" [disabled] [ref=e1611]:
                        - generic [ref=e1612]: N13405A18952, Ramon
                    - cell "Form AB More info" [ref=e1613]:
                      - generic [ref=e1614]:
                        - button "Form AB" [disabled] [ref=e1615]:
                          - generic [ref=e1616]: Form AB
                        - button "More info" [ref=e1617]
                    - cell "11 days" [ref=e1618]:
                      - button "11 days" [disabled] [ref=e1619]
                    - cell "● Submitted" [ref=e1620]:
                      - button "● Submitted" [disabled] [ref=e1621]:
                        - generic [ref=e1622]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1623]:
                      - button "Edit Assignment" [disabled] [ref=e1624]
                      - button "Add Tests" [disabled] [ref=e1625]
                      - button "Assignment actions" [ref=e1626]
                  - row "Begin assignment Form AB for N2534A1040, Werner Form AB More info 11 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1627] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N2534A1040, Werner" [ref=e1628]:
                      - button "Begin assignment Form AB for N2534A1040, Werner" [disabled] [ref=e1629]:
                        - generic [ref=e1630]: N2534A1040, Werner
                    - cell "Form AB More info" [ref=e1631]:
                      - generic [ref=e1632]:
                        - button "Form AB" [disabled] [ref=e1633]:
                          - generic [ref=e1634]: Form AB
                        - button "More info" [ref=e1635]
                    - cell "11 days" [ref=e1636]:
                      - button "11 days" [disabled] [ref=e1637]
                    - cell "● Submitted" [ref=e1638]:
                      - button "● Submitted" [disabled] [ref=e1639]:
                        - generic [ref=e1640]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1641]:
                      - button "Edit Assignment" [disabled] [ref=e1642]
                      - button "Add Tests" [disabled] [ref=e1643]
                      - button "Assignment actions" [ref=e1644]
                  - row "Begin assignment Form AB for N45522A67755, Geraldine Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1645] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N45522A67755, Geraldine" [ref=e1646]:
                      - button "Begin assignment Form AB for N45522A67755, Geraldine" [disabled] [ref=e1647]:
                        - generic [ref=e1648]: N45522A67755, Geraldine
                    - cell "Form AB More info" [ref=e1649]:
                      - generic [ref=e1650]:
                        - button "Form AB" [disabled] [ref=e1651]:
                          - generic [ref=e1652]: Form AB
                        - button "More info" [ref=e1653]
                    - cell "3 days" [ref=e1654]:
                      - button "3 days" [disabled] [ref=e1655]
                    - cell "● Submitted" [ref=e1656]:
                      - button "● Submitted" [disabled] [ref=e1657]:
                        - generic [ref=e1658]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1659]:
                      - button "Edit Assignment" [disabled] [ref=e1660]
                      - button "Add Tests" [disabled] [ref=e1661]
                      - button "Assignment actions" [ref=e1662]
                  - row "Begin assignment Form AB for N96537A93073, Marianne Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1663] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N96537A93073, Marianne" [ref=e1664]:
                      - button "Begin assignment Form AB for N96537A93073, Marianne" [disabled] [ref=e1665]:
                        - generic [ref=e1666]: N96537A93073, Marianne
                    - cell "Form AB More info" [ref=e1667]:
                      - generic [ref=e1668]:
                        - button "Form AB" [disabled] [ref=e1669]:
                          - generic [ref=e1670]: Form AB
                        - button "More info" [ref=e1671]
                    - cell "3 days" [ref=e1672]:
                      - button "3 days" [disabled] [ref=e1673]
                    - cell "● Submitted" [ref=e1674]:
                      - button "● Submitted" [disabled] [ref=e1675]:
                        - generic [ref=e1676]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1677]:
                      - button "Edit Assignment" [disabled] [ref=e1678]
                      - button "Add Tests" [disabled] [ref=e1679]
                      - button "Assignment actions" [ref=e1680]
                  - row "Begin assignment Form AB for N4763A3415, Otilia Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1681] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N4763A3415, Otilia" [ref=e1682]:
                      - button "Begin assignment Form AB for N4763A3415, Otilia" [disabled] [ref=e1683]:
                        - generic [ref=e1684]: N4763A3415, Otilia
                    - cell "Form AB More info" [ref=e1685]:
                      - generic [ref=e1686]:
                        - button "Form AB" [disabled] [ref=e1687]:
                          - generic [ref=e1688]: Form AB
                        - button "More info" [ref=e1689]
                    - cell "3 days" [ref=e1690]:
                      - button "3 days" [disabled] [ref=e1691]
                    - cell "● Submitted" [ref=e1692]:
                      - button "● Submitted" [disabled] [ref=e1693]:
                        - generic [ref=e1694]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1695]:
                      - button "Edit Assignment" [disabled] [ref=e1696]
                      - button "Add Tests" [disabled] [ref=e1697]
                      - button "Assignment actions" [ref=e1698]
                  - row "Begin assignment Form AB for N66069A56888, Nat Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1699] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N66069A56888, Nat" [ref=e1700]:
                      - button "Begin assignment Form AB for N66069A56888, Nat" [disabled] [ref=e1701]:
                        - generic [ref=e1702]: N66069A56888, Nat
                    - cell "Form AB More info" [ref=e1703]:
                      - generic [ref=e1704]:
                        - button "Form AB" [disabled] [ref=e1705]:
                          - generic [ref=e1706]: Form AB
                        - button "More info" [ref=e1707]
                    - cell "3 days" [ref=e1708]:
                      - button "3 days" [disabled] [ref=e1709]
                    - cell "● Submitted" [ref=e1710]:
                      - button "● Submitted" [disabled] [ref=e1711]:
                        - generic [ref=e1712]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1713]:
                      - button "Edit Assignment" [disabled] [ref=e1714]
                      - button "Add Tests" [disabled] [ref=e1715]
                      - button "Assignment actions" [ref=e1716]
                  - row "Begin assignment Form AB for N85132A58930, Lindsey Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1717] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N85132A58930, Lindsey" [ref=e1718]:
                      - button "Begin assignment Form AB for N85132A58930, Lindsey" [disabled] [ref=e1719]:
                        - generic [ref=e1720]: N85132A58930, Lindsey
                    - cell "Form AB More info" [ref=e1721]:
                      - generic [ref=e1722]:
                        - button "Form AB" [disabled] [ref=e1723]:
                          - generic [ref=e1724]: Form AB
                        - button "More info" [ref=e1725]
                    - cell "3 days" [ref=e1726]:
                      - button "3 days" [disabled] [ref=e1727]
                    - cell "● Submitted" [ref=e1728]:
                      - button "● Submitted" [disabled] [ref=e1729]:
                        - generic [ref=e1730]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1731]:
                      - button "Edit Assignment" [disabled] [ref=e1732]
                      - button "Add Tests" [disabled] [ref=e1733]
                      - button "Assignment actions" [ref=e1734]
                  - row "Begin assignment Form AB for N95858A52515, Ignatius Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1735] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N95858A52515, Ignatius" [ref=e1736]:
                      - button "Begin assignment Form AB for N95858A52515, Ignatius" [disabled] [ref=e1737]:
                        - generic [ref=e1738]: N95858A52515, Ignatius
                    - cell "Form AB More info" [ref=e1739]:
                      - generic [ref=e1740]:
                        - button "Form AB" [disabled] [ref=e1741]:
                          - generic [ref=e1742]: Form AB
                        - button "More info" [ref=e1743]
                    - cell "3 days" [ref=e1744]:
                      - button "3 days" [disabled] [ref=e1745]
                    - cell "● Submitted" [ref=e1746]:
                      - button "● Submitted" [disabled] [ref=e1747]:
                        - generic [ref=e1748]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1749]:
                      - button "Edit Assignment" [disabled] [ref=e1750]
                      - button "Add Tests" [disabled] [ref=e1751]
                      - button "Assignment actions" [ref=e1752]
                  - row "Begin assignment Form AB for N60632A99057, Alaina Form AB More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e1753] [cursor=pointer]:
                    - cell "Begin assignment Form AB for N60632A99057, Alaina" [ref=e1754]:
                      - button "Begin assignment Form AB for N60632A99057, Alaina" [disabled] [ref=e1755]:
                        - generic [ref=e1756]: N60632A99057, Alaina
                    - cell "Form AB More info" [ref=e1757]:
                      - generic [ref=e1758]:
                        - button "Form AB" [disabled] [ref=e1759]:
                          - generic [ref=e1760]: Form AB
                        - button "More info" [ref=e1761]
                    - cell "3 days" [ref=e1762]:
                      - button "3 days" [disabled] [ref=e1763]
                    - cell "● Submitted" [ref=e1764]:
                      - button "● Submitted" [disabled] [ref=e1765]:
                        - generic [ref=e1766]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e1767]:
                      - button "Edit Assignment" [disabled] [ref=e1768]
                      - button "Add Tests" [disabled] [ref=e1769]
                      - button "Assignment actions" [ref=e1770]
            - generic [ref=e1771]:
              - generic [ref=e1774]:
                - img [ref=e1775]
                - heading "Notifications Center" [level=2] [ref=e1779]
              - generic [ref=e1780]:
                - generic [ref=e1782]:
                  - img [ref=e1783]
                  - heading "Resources" [level=3] [ref=e1787]
                - list [ref=e1788]:
                  - listitem [ref=e1789]:
                    - button "Riverside Learn" [ref=e1790] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e1791]
                      - img [ref=e1793]
                  - listitem [ref=e1795]:
                    - button "Onboarding Tutorial Videos" [ref=e1796] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e1797]
                      - img [ref=e1799]
                  - listitem [ref=e1801]:
                    - button "Quick Reference Guides" [ref=e1802] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e1803]
                      - img [ref=e1805]
                - button "View All" [ref=e1808] [cursor=pointer]
      - contentinfo [ref=e1809]:
        - generic [ref=e1810]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e1811] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e1812]
        - generic [ref=e1813]:
          - link "Riverside Insights Facebook" [ref=e1814] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e1815]
          - link "Riverside Insights Twitter" [ref=e1816] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e1817]
          - link "Riverside Insights LinkedIn" [ref=e1818] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e1819]
          - link "Riverside Insights Instagram" [ref=e1820] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e1821]
        - generic [ref=e1822]:
          - button "Leave Feedback" [ref=e1823] [cursor=pointer]
          - generic [ref=e1824]: "|"
          - link "Terms of Use" [ref=e1825] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e1826]: "|"
          - link "Privacy Policy" [ref=e1827] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e1828]: Footer region end
```

# Test source

```ts
  133 |       .first();
  134 |     this.studentLink = this.page.locator("//a[@class='link-button']");
  135 |     this.startWithoutExaminee = this.page.locator(
  136 |       "//button[text()='Start Without Examinee']",
  137 |     );
  138 |     this.sessionCode = this.page.locator("//div[@class='session-code']");
  139 |     this.greyDownloadPrint = this.page.locator(".gridActionIcon.removeCursor");
  140 |     this.mainMenuExamineeManagement = this.page.locator(
  141 |       "//button[@aria-label = 'Examinee Management']",
  142 |     );
  143 |     this.examineeID = this.page.getByLabel("EXAMINEE ID");
  144 |     this.examineeLastName = this.page.getByLabel(
  145 |       "Last Name*,Required , Type in text",
  146 |     );
  147 |     this.examineeFirstName = this.page.getByLabel(
  148 |       "First Name*,Required , Type in text",
  149 |     );
  150 |     this.examineeDateOfBirth = this.page.getByLabel(
  151 |       "Date of Birth*,Required , Type in text",
  152 |     );
  153 |     this.examineeGenderIdentity = this.page.getByLabel(
  154 |       "GENDER*Select examinee gender",
  155 |     );
  156 |     this.Location = this.page.getByText(
  157 |       "Location*,RequiredSelect examinee location",
  158 |     );
  159 |     this.examineeSaveButton = this.page.locator("//button[text()='Save']");
  160 |     this.examineeSaveOkButton = this.page.locator("//button[text()='OK']");
  161 | 
  162 |     this.addTestAssignmentBtn = this.page.getByRole("button", {
  163 |       name: "Add Test Assignment Add Test Assignment",
  164 |     });
  165 |     this.nextBtn = this.page.locator("//button[text()='Next']");
  166 |     this.ExaminerDd = this.page.getByPlaceholder("Select Examiner");
  167 |     this.ExamineeDd = this.page.getByPlaceholder(
  168 |       "Search by Examinee Name or ID",
  169 |     );
  170 |     this.testBlockDd = this.page.getByPlaceholder("Select Test Block");
  171 |     this.examineeSaveButton,
  172 |       (this.testAssignmentSaveButton = this.page.getByRole("button", {
  173 |         name: "Save",
  174 |       }));
  175 |     this.ExaminerloadingIcon = this.page.getByText("Getting things ready...");
  176 |     this.myTestAssignments = this.page.getByRole("heading", {
  177 |       name: "My Test Assignments",
  178 |     });
  179 | 
  180 |     this.closeButton = this.page.locator("//button[text()='Close']");
  181 |     this.chatbotCloseIcon = this.page
  182 |       .locator('[data-test-id="chat-widget-iframe"]')
  183 |       .contentFrame()
  184 |       .locator('[data-test-id="ai-welcome-msg-close-button"]');
  185 | 
  186 |     this.dashboardTab = this.page.locator("button[aria-label='Dashboard']");
  187 | 
  188 |     this.myTestAssignmentsRow = this.page.locator(
  189 |       "div[class*='TestAssignmentModule'] button[class$='rowButton']",
  190 |     );
  191 | 
  192 |     this.searchTestAssignmentsInput = this.page.locator(
  193 |       "input[placeholder='Search Test Assignments']",
  194 |     );
  195 |     this.editIcon = this.page.locator("button[class='plain-button']");
  196 |     this.searchInputBox = this.page.locator('[placeholder="Search..."]');
  197 |     this.updateButton = this.page.locator(
  198 |       "//div[starts-with(@class, 'right-side-buttons')]//button[text()='Update']",
  199 |     );
  200 |     this.launchAssessmentButton = this.page.locator(
  201 |       "//button[text()='Launch Assignment']",
  202 |     );
  203 |   }
  204 | 
  205 |   static examineeID: string;
  206 | 
  207 |   async addNewExamineeAndUpdateTheTemplate(
  208 |     url: string,
  209 |     age: number,
  210 |     location?: string,
  211 |     testStemForm?: string,
  212 |     normBasis?: string,
  213 |     examineeGrade?: string,
  214 |   ): Promise<{
  215 |     examinee_ID: string;
  216 |     dateOfBirth: string;
  217 |   }> {
  218 |     console.log(`Trying to add an Examinee \n`);
  219 | 
  220 |     await this.page.bringToFront();
  221 |     await this.page.waitForTimeout(3000); // added more wait to tackle the examinee loading issue
  222 | 
  223 |     this.waitForLoaderToDisappear();
  224 |     await this.examinees.click();
  225 |     this.waitForLoaderToDisappear();
  226 | 
  227 |     await this.page.waitForTimeout(3000); // facing issues at ad examinee even after the API check so added the time
  228 | 
  229 |     await this.addExaminee.click();
  230 |     await this.loadingIcon.waitFor({ state: "hidden" });
  231 | 
  232 |     const firstName: string = faker.person.firstName();
> 233 |     await this.examineeFirstName.fill(firstName);
      |                                  ^ TimeoutError: locator.fill: Timeout 60000ms exceeded.
  234 |     const dateOfBirth = (await this.utils.getTheDOBYearsBack(age)).toString();
  235 |     await this.examineeDateOfBirth.fill(dateOfBirth);
  236 |     await this.selectGender("Male");
  237 |     Wj5DashboardPage.examineeID = `N${await this.utils.randomNumberGenerateBetween(
  238 |       1,
  239 |       99999,
  240 |     )}A${await this.utils.randomNumberGenerateBetween(1, 99999)}`;
  241 |     await this.examineeID.fill(Wj5DashboardPage.examineeID);
  242 |     await this.examineeLastName.fill(Wj5DashboardPage.examineeID);
  243 |     console.log("Examinee ID", Wj5DashboardPage.examineeID);
  244 | 
  245 |     const exportType = getCurrentExportType();
  246 |     switch (exportType) {
  247 |       case "derived":
  248 |         await derivedScoreFilterTemplate_CSVfileWriter(
  249 |           Wj5DashboardPage.examineeID,
  250 |           normBasis,
  251 |           examineeGrade,
  252 |         );
  253 |         break;
  254 |       case "wLookUp":
  255 |         await scoreDataFilterTemplate_CSVfileWriter(
  256 |           Wj5DashboardPage.examineeID,
  257 |         );
  258 |         break;
  259 |       case "testData":
  260 |         await testDataExportFilterTemplate_CSVfileWriter(
  261 |           Wj5DashboardPage.examineeID,
  262 |           testStemForm,
  263 |         );
  264 |     }
  265 | 
  266 |     await this.closeChatBot();
  267 | 
  268 |     if (await this.examineeSaveButton.isEnabled({ timeout: 3000 })) {
  269 |       await this.saveExaminee();
  270 |     } else {
  271 |       console.error("Save Button IS Not Enabled");
  272 |     }
  273 |     console.log(
  274 |       `Successfully added an Examinee  ID =${Wj5DashboardPage.examineeID} FirstName=${firstName} LastName =${Wj5DashboardPage.examineeID} Age = ${dateOfBirth}`,
  275 |     );
  276 | 
  277 |     return {
  278 |       examinee_ID: Wj5DashboardPage.examineeID,
  279 |       dateOfBirth,
  280 |     };
  281 |   }
  282 | 
  283 |   async addNewExaminee(
  284 |     url: string,
  285 |     age: number,
  286 |     gender?: string,
  287 |     examineeCount?: number,
  288 |   ): Promise<{
  289 |     examinee_ID: string;
  290 |     dateOfBirth: string;
  291 |     examineelastNameAndFirstName: string;
  292 |   }> {
  293 |     console.log(`Trying to add ${examineeCount} Examinee \n`);
  294 | 
  295 |     await this.page.bringToFront();
  296 |     await this.page.waitForTimeout(3000); // added more wait to tackle the examinee loading issue
  297 | 
  298 |     this.waitForLoaderToDisappear();
  299 |     await this.examinees.click();
  300 |     this.waitForLoaderToDisappear();
  301 | 
  302 |     await this.page.waitForTimeout(3000); // facing issues at ad examinee even after the API check so added the time
  303 | 
  304 |     await this.addExaminee.click();
  305 |     await this.loadingIcon.waitFor({ state: "hidden" });
  306 |     const firstName: string = faker.person.firstName();
  307 |     await this.examineeFirstName.fill(firstName);
  308 |     const dateOfBirth = (await this.utils.getTheDOBYearsBack(age)).toString();
  309 |     await this.examineeDateOfBirth.fill(dateOfBirth);
  310 |     if (gender) {
  311 |       await this.selectGender(gender);
  312 |     } else {
  313 |       await this.selectGender("Male");
  314 |     }
  315 |     Wj5DashboardPage.examineeID = `N${await this.utils.randomNumberGenerateBetween(
  316 |       1,
  317 |       99999,
  318 |     )}A${await this.utils.randomNumberGenerateBetween(1, 99999)}`;
  319 |     await this.examineeID.fill(Wj5DashboardPage.examineeID);
  320 |     await this.examineeLastName.fill(Wj5DashboardPage.examineeID);
  321 |     console.log("Examinee ID", Wj5DashboardPage.examineeID);
  322 | 
  323 |     await this.closeChatBot();
  324 | 
  325 |     if (await this.examineeSaveButton.isEnabled({ timeout: 3000 })) {
  326 |       await this.saveExaminee();
  327 |     } else {
  328 |       console.error("Save Button IS Not Enabled");
  329 |     }
  330 |     console.log(
  331 |       `Successfully added an Examinee  ID =${Wj5DashboardPage.examineeID} FirstName=${firstName} LastName =${Wj5DashboardPage.examineeID} Age = ${dateOfBirth}`,
  332 |     );
  333 | 
```