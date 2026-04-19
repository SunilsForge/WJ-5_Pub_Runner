# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/dashboard/testAssignments_C.spec.ts >> Validate Dashboard Test Assignments functionality Part_C
- Location: src/tests/functional/dashboard/testAssignments_C.spec.ts:13:5

# Error details

```
TimeoutError: locator.textContent: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('div[class*=\'TestAssignmentModule\'] div[class$=\'rowButton\']').first().locator('button[class*=\'cell\']').first()

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
              - heading "Hello 02PwAut25Ex_01 ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "02PwAut25Ex_01 ln" [ref=e10] [cursor=pointer]
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
            - generic [ref=e36]:
              - generic [ref=e37]:
                - heading "My Test Assignments" [level=1] [ref=e38]
                - button "Create New Test Assignment" [ref=e39] [cursor=pointer]
              - generic [ref=e40]:
                - generic [ref=e43]:
                  - textbox [active] [ref=e44]:
                    - /placeholder: Search Test Assignments
                    - text: Submitted
                  - button "Search Test Assignments" [ref=e45] [cursor=pointer]
                - generic [ref=e46]:
                  - button "Active" [disabled] [ref=e47]
                  - button "Closed" [disabled] [ref=e48]
              - table "Available Assignments" [ref=e50]:
                - rowgroup [ref=e57]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e58]:
                    - columnheader "This is the student or individual being assessed." [ref=e59]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e60]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e61]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e62]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e63]: Actions
                - rowgroup [ref=e64]:
                  - row "Begin assignment Form A for N98328A16557, Alivia Form A More info 74 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e65] [cursor=pointer]:
                    - cell "Begin assignment Form A for N98328A16557, Alivia" [ref=e66]:
                      - button "Begin assignment Form A for N98328A16557, Alivia" [ref=e67]:
                        - generic [ref=e68]: N98328A16557, Alivia
                    - cell "Form A More info" [ref=e69]:
                      - generic [ref=e70]:
                        - button "Form A" [ref=e71]:
                          - generic [ref=e72]: Form A
                        - button "More info" [ref=e73]
                    - cell "74 days" [ref=e74]:
                      - button "74 days" [ref=e75]
                    - cell "● Submitted" [ref=e76]:
                      - button "● Submitted" [ref=e77]:
                        - generic [ref=e78]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e79]:
                      - button "Edit Assignment" [ref=e80]
                      - button "Add Tests" [ref=e81]
                      - button "Assignment actions" [ref=e82]
                  - row "Begin assignment Form A for N88944A40005, Casimir Form A More info 74 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e83] [cursor=pointer]:
                    - cell "Begin assignment Form A for N88944A40005, Casimir" [ref=e84]:
                      - button "Begin assignment Form A for N88944A40005, Casimir" [ref=e85]:
                        - generic [ref=e86]: N88944A40005, Casimir
                    - cell "Form A More info" [ref=e87]:
                      - generic [ref=e88]:
                        - button "Form A" [ref=e89]:
                          - generic [ref=e90]: Form A
                        - button "More info" [ref=e91]
                    - cell "74 days" [ref=e92]:
                      - button "74 days" [ref=e93]
                    - cell "● Submitted" [ref=e94]:
                      - button "● Submitted" [ref=e95]:
                        - generic [ref=e96]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e97]:
                      - button "Edit Assignment" [ref=e98]
                      - button "Add Tests" [ref=e99]
                      - button "Assignment actions" [ref=e100]
                  - row "Begin assignment Form A for N63524A32740, Kaya Form A More info 71 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e101] [cursor=pointer]:
                    - cell "Begin assignment Form A for N63524A32740, Kaya" [ref=e102]:
                      - button "Begin assignment Form A for N63524A32740, Kaya" [ref=e103]:
                        - generic [ref=e104]: N63524A32740, Kaya
                    - cell "Form A More info" [ref=e105]:
                      - generic [ref=e106]:
                        - button "Form A" [ref=e107]:
                          - generic [ref=e108]: Form A
                        - button "More info" [ref=e109]
                    - cell "71 days" [ref=e110]:
                      - button "71 days" [ref=e111]
                    - cell "● Submitted" [ref=e112]:
                      - button "● Submitted" [ref=e113]:
                        - generic [ref=e114]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e115]:
                      - button "Edit Assignment" [ref=e116]
                      - button "Add Tests" [ref=e117]
                      - button "Assignment actions" [ref=e118]
                  - row "Begin assignment Form A for N70156A65289, Jocelyn Form A More info 71 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e119] [cursor=pointer]:
                    - cell "Begin assignment Form A for N70156A65289, Jocelyn" [ref=e120]:
                      - button "Begin assignment Form A for N70156A65289, Jocelyn" [ref=e121]:
                        - generic [ref=e122]: N70156A65289, Jocelyn
                    - cell "Form A More info" [ref=e123]:
                      - generic [ref=e124]:
                        - button "Form A" [ref=e125]:
                          - generic [ref=e126]: Form A
                        - button "More info" [ref=e127]
                    - cell "71 days" [ref=e128]:
                      - button "71 days" [ref=e129]
                    - cell "● Submitted" [ref=e130]:
                      - button "● Submitted" [ref=e131]:
                        - generic [ref=e132]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e133]:
                      - button "Edit Assignment" [ref=e134]
                      - button "Add Tests" [ref=e135]
                      - button "Assignment actions" [ref=e136]
                  - row "Begin assignment Form A for N42074A92249, Terry Form A More info 71 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e137] [cursor=pointer]:
                    - cell "Begin assignment Form A for N42074A92249, Terry" [ref=e138]:
                      - button "Begin assignment Form A for N42074A92249, Terry" [ref=e139]:
                        - generic [ref=e140]: N42074A92249, Terry
                    - cell "Form A More info" [ref=e141]:
                      - generic [ref=e142]:
                        - button "Form A" [ref=e143]:
                          - generic [ref=e144]: Form A
                        - button "More info" [ref=e145]
                    - cell "71 days" [ref=e146]:
                      - button "71 days" [ref=e147]
                    - cell "● Submitted" [ref=e148]:
                      - button "● Submitted" [ref=e149]:
                        - generic [ref=e150]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e151]:
                      - button "Edit Assignment" [ref=e152]
                      - button "Add Tests" [ref=e153]
                      - button "Assignment actions" [ref=e154]
                  - row "Begin assignment Form A for N92044A96718, Brisa Form A More info 71 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e155] [cursor=pointer]:
                    - cell "Begin assignment Form A for N92044A96718, Brisa" [ref=e156]:
                      - button "Begin assignment Form A for N92044A96718, Brisa" [ref=e157]:
                        - generic [ref=e158]: N92044A96718, Brisa
                    - cell "Form A More info" [ref=e159]:
                      - generic [ref=e160]:
                        - button "Form A" [ref=e161]:
                          - generic [ref=e162]: Form A
                        - button "More info" [ref=e163]
                    - cell "71 days" [ref=e164]:
                      - button "71 days" [ref=e165]
                    - cell "● Submitted" [ref=e166]:
                      - button "● Submitted" [ref=e167]:
                        - generic [ref=e168]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e169]:
                      - button "Edit Assignment" [ref=e170]
                      - button "Add Tests" [ref=e171]
                      - button "Assignment actions" [ref=e172]
                  - row "Begin assignment Form A for N10585A19083, Lizzie Form A More info 66 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e173] [cursor=pointer]:
                    - cell "Begin assignment Form A for N10585A19083, Lizzie" [ref=e174]:
                      - button "Begin assignment Form A for N10585A19083, Lizzie" [ref=e175]:
                        - generic [ref=e176]: N10585A19083, Lizzie
                    - cell "Form A More info" [ref=e177]:
                      - generic [ref=e178]:
                        - button "Form A" [ref=e179]:
                          - generic [ref=e180]: Form A
                        - button "More info" [ref=e181]
                    - cell "66 days" [ref=e182]:
                      - button "66 days" [ref=e183]
                    - cell "● Submitted" [ref=e184]:
                      - button "● Submitted" [ref=e185]:
                        - generic [ref=e186]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e187]:
                      - button "Edit Assignment" [ref=e188]
                      - button "Add Tests" [ref=e189]
                      - button "Assignment actions" [ref=e190]
                  - row "Begin assignment Form A for N50401A68610, Emelie Form A More info 66 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e191] [cursor=pointer]:
                    - cell "Begin assignment Form A for N50401A68610, Emelie" [ref=e192]:
                      - button "Begin assignment Form A for N50401A68610, Emelie" [ref=e193]:
                        - generic [ref=e194]: N50401A68610, Emelie
                    - cell "Form A More info" [ref=e195]:
                      - generic [ref=e196]:
                        - button "Form A" [ref=e197]:
                          - generic [ref=e198]: Form A
                        - button "More info" [ref=e199]
                    - cell "66 days" [ref=e200]:
                      - button "66 days" [ref=e201]
                    - cell "● Submitted" [ref=e202]:
                      - button "● Submitted" [ref=e203]:
                        - generic [ref=e204]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e205]:
                      - button "Edit Assignment" [ref=e206]
                      - button "Add Tests" [ref=e207]
                      - button "Assignment actions" [ref=e208]
                  - row "Begin assignment Form A for N17936A84795, Dakota Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e209] [cursor=pointer]:
                    - cell "Begin assignment Form A for N17936A84795, Dakota" [ref=e210]:
                      - button "Begin assignment Form A for N17936A84795, Dakota" [ref=e211]:
                        - generic [ref=e212]: N17936A84795, Dakota
                    - cell "Form A More info" [ref=e213]:
                      - generic [ref=e214]:
                        - button "Form A" [ref=e215]:
                          - generic [ref=e216]: Form A
                        - button "More info" [ref=e217]
                    - cell "32 days" [ref=e218]:
                      - button "32 days" [ref=e219]
                    - cell "● Submitted" [ref=e220]:
                      - button "● Submitted" [ref=e221]:
                        - generic [ref=e222]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e223]:
                      - button "Edit Assignment" [ref=e224]
                      - button "Add Tests" [ref=e225]
                      - button "Assignment actions" [ref=e226]
                  - row "Begin assignment Form A for N76330A76428, Noble Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e227] [cursor=pointer]:
                    - cell "Begin assignment Form A for N76330A76428, Noble" [ref=e228]:
                      - button "Begin assignment Form A for N76330A76428, Noble" [ref=e229]:
                        - generic [ref=e230]: N76330A76428, Noble
                    - cell "Form A More info" [ref=e231]:
                      - generic [ref=e232]:
                        - button "Form A" [ref=e233]:
                          - generic [ref=e234]: Form A
                        - button "More info" [ref=e235]
                    - cell "32 days" [ref=e236]:
                      - button "32 days" [ref=e237]
                    - cell "● Submitted" [ref=e238]:
                      - button "● Submitted" [ref=e239]:
                        - generic [ref=e240]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e241]:
                      - button "Edit Assignment" [ref=e242]
                      - button "Add Tests" [ref=e243]
                      - button "Assignment actions" [ref=e244]
                  - row "Begin assignment Form A for N63378A54809, Joaquin Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e245] [cursor=pointer]:
                    - cell "Begin assignment Form A for N63378A54809, Joaquin" [ref=e246]:
                      - button "Begin assignment Form A for N63378A54809, Joaquin" [ref=e247]:
                        - generic [ref=e248]: N63378A54809, Joaquin
                    - cell "Form A More info" [ref=e249]:
                      - generic [ref=e250]:
                        - button "Form A" [ref=e251]:
                          - generic [ref=e252]: Form A
                        - button "More info" [ref=e253]
                    - cell "32 days" [ref=e254]:
                      - button "32 days" [ref=e255]
                    - cell "● Submitted" [ref=e256]:
                      - button "● Submitted" [ref=e257]:
                        - generic [ref=e258]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e259]:
                      - button "Edit Assignment" [ref=e260]
                      - button "Add Tests" [ref=e261]
                      - button "Assignment actions" [ref=e262]
                  - row "Begin assignment Form A for N5460A94444, Marlen Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e263] [cursor=pointer]:
                    - cell "Begin assignment Form A for N5460A94444, Marlen" [ref=e264]:
                      - button "Begin assignment Form A for N5460A94444, Marlen" [ref=e265]:
                        - generic [ref=e266]: N5460A94444, Marlen
                    - cell "Form A More info" [ref=e267]:
                      - generic [ref=e268]:
                        - button "Form A" [ref=e269]:
                          - generic [ref=e270]: Form A
                        - button "More info" [ref=e271]
                    - cell "32 days" [ref=e272]:
                      - button "32 days" [ref=e273]
                    - cell "● Submitted" [ref=e274]:
                      - button "● Submitted" [ref=e275]:
                        - generic [ref=e276]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e277]:
                      - button "Edit Assignment" [ref=e278]
                      - button "Add Tests" [ref=e279]
                      - button "Assignment actions" [ref=e280]
                  - row "Begin assignment Form A for N26865A12525, Amanda Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e281] [cursor=pointer]:
                    - cell "Begin assignment Form A for N26865A12525, Amanda" [ref=e282]:
                      - button "Begin assignment Form A for N26865A12525, Amanda" [ref=e283]:
                        - generic [ref=e284]: N26865A12525, Amanda
                    - cell "Form A More info" [ref=e285]:
                      - generic [ref=e286]:
                        - button "Form A" [ref=e287]:
                          - generic [ref=e288]: Form A
                        - button "More info" [ref=e289]
                    - cell "31 days" [ref=e290]:
                      - button "31 days" [ref=e291]
                    - cell "● Submitted" [ref=e292]:
                      - button "● Submitted" [ref=e293]:
                        - generic [ref=e294]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e295]:
                      - button "Edit Assignment" [ref=e296]
                      - button "Add Tests" [ref=e297]
                      - button "Assignment actions" [ref=e298]
                  - row "Begin assignment Form A for N55525A16814, Friedrich Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e299] [cursor=pointer]:
                    - cell "Begin assignment Form A for N55525A16814, Friedrich" [ref=e300]:
                      - button "Begin assignment Form A for N55525A16814, Friedrich" [ref=e301]:
                        - generic [ref=e302]: N55525A16814, Friedrich
                    - cell "Form A More info" [ref=e303]:
                      - generic [ref=e304]:
                        - button "Form A" [ref=e305]:
                          - generic [ref=e306]: Form A
                        - button "More info" [ref=e307]
                    - cell "31 days" [ref=e308]:
                      - button "31 days" [ref=e309]
                    - cell "● Submitted" [ref=e310]:
                      - button "● Submitted" [ref=e311]:
                        - generic [ref=e312]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e313]:
                      - button "Edit Assignment" [ref=e314]
                      - button "Add Tests" [ref=e315]
                      - button "Assignment actions" [ref=e316]
                  - row "Begin assignment Form A for N67832A17395, Darien Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e317] [cursor=pointer]:
                    - cell "Begin assignment Form A for N67832A17395, Darien" [ref=e318]:
                      - button "Begin assignment Form A for N67832A17395, Darien" [ref=e319]:
                        - generic [ref=e320]: N67832A17395, Darien
                    - cell "Form A More info" [ref=e321]:
                      - generic [ref=e322]:
                        - button "Form A" [ref=e323]:
                          - generic [ref=e324]: Form A
                        - button "More info" [ref=e325]
                    - cell "31 days" [ref=e326]:
                      - button "31 days" [ref=e327]
                    - cell "● Submitted" [ref=e328]:
                      - button "● Submitted" [ref=e329]:
                        - generic [ref=e330]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e331]:
                      - button "Edit Assignment" [ref=e332]
                      - button "Add Tests" [ref=e333]
                      - button "Assignment actions" [ref=e334]
                  - row "Begin assignment Form A for N6267A58945, Rocky Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e335] [cursor=pointer]:
                    - cell "Begin assignment Form A for N6267A58945, Rocky" [ref=e336]:
                      - button "Begin assignment Form A for N6267A58945, Rocky" [ref=e337]:
                        - generic [ref=e338]: N6267A58945, Rocky
                    - cell "Form A More info" [ref=e339]:
                      - generic [ref=e340]:
                        - button "Form A" [ref=e341]:
                          - generic [ref=e342]: Form A
                        - button "More info" [ref=e343]
                    - cell "31 days" [ref=e344]:
                      - button "31 days" [ref=e345]
                    - cell "● Submitted" [ref=e346]:
                      - button "● Submitted" [ref=e347]:
                        - generic [ref=e348]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e349]:
                      - button "Edit Assignment" [ref=e350]
                      - button "Add Tests" [ref=e351]
                      - button "Assignment actions" [ref=e352]
                  - row "Begin assignment Form A for N55368A92191, Wava Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e353] [cursor=pointer]:
                    - cell "Begin assignment Form A for N55368A92191, Wava" [ref=e354]:
                      - button "Begin assignment Form A for N55368A92191, Wava" [ref=e355]:
                        - generic [ref=e356]: N55368A92191, Wava
                    - cell "Form A More info" [ref=e357]:
                      - generic [ref=e358]:
                        - button "Form A" [ref=e359]:
                          - generic [ref=e360]: Form A
                        - button "More info" [ref=e361]
                    - cell "31 days" [ref=e362]:
                      - button "31 days" [ref=e363]
                    - cell "● Submitted" [ref=e364]:
                      - button "● Submitted" [ref=e365]:
                        - generic [ref=e366]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e367]:
                      - button "Edit Assignment" [ref=e368]
                      - button "Add Tests" [ref=e369]
                      - button "Assignment actions" [ref=e370]
                  - row "Begin assignment Form A for N77187A77121, Jamison Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e371] [cursor=pointer]:
                    - cell "Begin assignment Form A for N77187A77121, Jamison" [ref=e372]:
                      - button "Begin assignment Form A for N77187A77121, Jamison" [ref=e373]:
                        - generic [ref=e374]: N77187A77121, Jamison
                    - cell "Form A More info" [ref=e375]:
                      - generic [ref=e376]:
                        - button "Form A" [ref=e377]:
                          - generic [ref=e378]: Form A
                        - button "More info" [ref=e379]
                    - cell "31 days" [ref=e380]:
                      - button "31 days" [ref=e381]
                    - cell "● Submitted" [ref=e382]:
                      - button "● Submitted" [ref=e383]:
                        - generic [ref=e384]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e385]:
                      - button "Edit Assignment" [ref=e386]
                      - button "Add Tests" [ref=e387]
                      - button "Assignment actions" [ref=e388]
                  - row "Begin assignment Form A for N45372A97825, Brady Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e389] [cursor=pointer]:
                    - cell "Begin assignment Form A for N45372A97825, Brady" [ref=e390]:
                      - button "Begin assignment Form A for N45372A97825, Brady" [ref=e391]:
                        - generic [ref=e392]: N45372A97825, Brady
                    - cell "Form A More info" [ref=e393]:
                      - generic [ref=e394]:
                        - button "Form A" [ref=e395]:
                          - generic [ref=e396]: Form A
                        - button "More info" [ref=e397]
                    - cell "31 days" [ref=e398]:
                      - button "31 days" [ref=e399]
                    - cell "● Submitted" [ref=e400]:
                      - button "● Submitted" [ref=e401]:
                        - generic [ref=e402]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e403]:
                      - button "Edit Assignment" [ref=e404]
                      - button "Add Tests" [ref=e405]
                      - button "Assignment actions" [ref=e406]
                  - row "Begin assignment Form A for N10310A84367, Connor Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e407] [cursor=pointer]:
                    - cell "Begin assignment Form A for N10310A84367, Connor" [ref=e408]:
                      - button "Begin assignment Form A for N10310A84367, Connor" [ref=e409]:
                        - generic [ref=e410]: N10310A84367, Connor
                    - cell "Form A More info" [ref=e411]:
                      - generic [ref=e412]:
                        - button "Form A" [ref=e413]:
                          - generic [ref=e414]: Form A
                        - button "More info" [ref=e415]
                    - cell "31 days" [ref=e416]:
                      - button "31 days" [ref=e417]
                    - cell "● Submitted" [ref=e418]:
                      - button "● Submitted" [ref=e419]:
                        - generic [ref=e420]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e421]:
                      - button "Edit Assignment" [ref=e422]
                      - button "Add Tests" [ref=e423]
                      - button "Assignment actions" [ref=e424]
                  - row "Begin assignment Form A for N48993A56792, Karl Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e425] [cursor=pointer]:
                    - cell "Begin assignment Form A for N48993A56792, Karl" [ref=e426]:
                      - button "Begin assignment Form A for N48993A56792, Karl" [ref=e427]:
                        - generic [ref=e428]: N48993A56792, Karl
                    - cell "Form A More info" [ref=e429]:
                      - generic [ref=e430]:
                        - button "Form A" [ref=e431]:
                          - generic [ref=e432]: Form A
                        - button "More info" [ref=e433]
                    - cell "31 days" [ref=e434]:
                      - button "31 days" [ref=e435]
                    - cell "● Submitted" [ref=e436]:
                      - button "● Submitted" [ref=e437]:
                        - generic [ref=e438]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e439]:
                      - button "Edit Assignment" [ref=e440]
                      - button "Add Tests" [ref=e441]
                      - button "Assignment actions" [ref=e442]
                  - row "Begin assignment Form A for N16097A81282, Loyal Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e443] [cursor=pointer]:
                    - cell "Begin assignment Form A for N16097A81282, Loyal" [ref=e444]:
                      - button "Begin assignment Form A for N16097A81282, Loyal" [ref=e445]:
                        - generic [ref=e446]: N16097A81282, Loyal
                    - cell "Form A More info" [ref=e447]:
                      - generic [ref=e448]:
                        - button "Form A" [ref=e449]:
                          - generic [ref=e450]: Form A
                        - button "More info" [ref=e451]
                    - cell "31 days" [ref=e452]:
                      - button "31 days" [ref=e453]
                    - cell "● Submitted" [ref=e454]:
                      - button "● Submitted" [ref=e455]:
                        - generic [ref=e456]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e457]:
                      - button "Edit Assignment" [ref=e458]
                      - button "Add Tests" [ref=e459]
                      - button "Assignment actions" [ref=e460]
                  - row "Begin assignment Form A for N48594A92554, Abe Form A More info 31 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e461] [cursor=pointer]:
                    - cell "Begin assignment Form A for N48594A92554, Abe" [ref=e462]:
                      - button "Begin assignment Form A for N48594A92554, Abe" [ref=e463]:
                        - generic [ref=e464]: N48594A92554, Abe
                    - cell "Form A More info" [ref=e465]:
                      - generic [ref=e466]:
                        - button "Form A" [ref=e467]:
                          - generic [ref=e468]: Form A
                        - button "More info" [ref=e469]
                    - cell "31 days" [ref=e470]:
                      - button "31 days" [ref=e471]
                    - cell "● Submitted" [ref=e472]:
                      - button "● Submitted" [ref=e473]:
                        - generic [ref=e474]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e475]:
                      - button "Edit Assignment" [ref=e476]
                      - button "Add Tests" [ref=e477]
                      - button "Assignment actions" [ref=e478]
                  - row "Begin assignment Form A for N83081A69377, Rodolfo Form A More info 28 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e479] [cursor=pointer]:
                    - cell "Begin assignment Form A for N83081A69377, Rodolfo" [ref=e480]:
                      - button "Begin assignment Form A for N83081A69377, Rodolfo" [ref=e481]:
                        - generic [ref=e482]: N83081A69377, Rodolfo
                    - cell "Form A More info" [ref=e483]:
                      - generic [ref=e484]:
                        - button "Form A" [ref=e485]:
                          - generic [ref=e486]: Form A
                        - button "More info" [ref=e487]
                    - cell "28 days" [ref=e488]:
                      - button "28 days" [ref=e489]
                    - cell "● Submitted" [ref=e490]:
                      - button "● Submitted" [ref=e491]:
                        - generic [ref=e492]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e493]:
                      - button "Edit Assignment" [ref=e494]
                      - button "Add Tests" [ref=e495]
                      - button "Assignment actions" [ref=e496]
                  - row "Begin assignment Form A for N65900A50236, Marlene Form A More info 28 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e497] [cursor=pointer]:
                    - cell "Begin assignment Form A for N65900A50236, Marlene" [ref=e498]:
                      - button "Begin assignment Form A for N65900A50236, Marlene" [ref=e499]:
                        - generic [ref=e500]: N65900A50236, Marlene
                    - cell "Form A More info" [ref=e501]:
                      - generic [ref=e502]:
                        - button "Form A" [ref=e503]:
                          - generic [ref=e504]: Form A
                        - button "More info" [ref=e505]
                    - cell "28 days" [ref=e506]:
                      - button "28 days" [ref=e507]
                    - cell "● Submitted" [ref=e508]:
                      - button "● Submitted" [ref=e509]:
                        - generic [ref=e510]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e511]:
                      - button "Edit Assignment" [ref=e512]
                      - button "Add Tests" [ref=e513]
                      - button "Assignment actions" [ref=e514]
                  - row "Begin assignment Form A for N51387A98651, Salma Form A More info 28 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e515] [cursor=pointer]:
                    - cell "Begin assignment Form A for N51387A98651, Salma" [ref=e516]:
                      - button "Begin assignment Form A for N51387A98651, Salma" [ref=e517]:
                        - generic [ref=e518]: N51387A98651, Salma
                    - cell "Form A More info" [ref=e519]:
                      - generic [ref=e520]:
                        - button "Form A" [ref=e521]:
                          - generic [ref=e522]: Form A
                        - button "More info" [ref=e523]
                    - cell "28 days" [ref=e524]:
                      - button "28 days" [ref=e525]
                    - cell "● Submitted" [ref=e526]:
                      - button "● Submitted" [ref=e527]:
                        - generic [ref=e528]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e529]:
                      - button "Edit Assignment" [ref=e530]
                      - button "Add Tests" [ref=e531]
                      - button "Assignment actions" [ref=e532]
                  - row "Begin assignment Form A for N81065A75214, Alfonso Form A More info 28 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e533] [cursor=pointer]:
                    - cell "Begin assignment Form A for N81065A75214, Alfonso" [ref=e534]:
                      - button "Begin assignment Form A for N81065A75214, Alfonso" [ref=e535]:
                        - generic [ref=e536]: N81065A75214, Alfonso
                    - cell "Form A More info" [ref=e537]:
                      - generic [ref=e538]:
                        - button "Form A" [ref=e539]:
                          - generic [ref=e540]: Form A
                        - button "More info" [ref=e541]
                    - cell "28 days" [ref=e542]:
                      - button "28 days" [ref=e543]
                    - cell "● Submitted" [ref=e544]:
                      - button "● Submitted" [ref=e545]:
                        - generic [ref=e546]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e547]:
                      - button "Edit Assignment" [ref=e548]
                      - button "Add Tests" [ref=e549]
                      - button "Assignment actions" [ref=e550]
                  - row "Begin assignment Form A for N18349A66348, Ruth Form A More info 28 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e551] [cursor=pointer]:
                    - cell "Begin assignment Form A for N18349A66348, Ruth" [ref=e552]:
                      - button "Begin assignment Form A for N18349A66348, Ruth" [ref=e553]:
                        - generic [ref=e554]: N18349A66348, Ruth
                    - cell "Form A More info" [ref=e555]:
                      - generic [ref=e556]:
                        - button "Form A" [ref=e557]:
                          - generic [ref=e558]: Form A
                        - button "More info" [ref=e559]
                    - cell "28 days" [ref=e560]:
                      - button "28 days" [ref=e561]
                    - cell "● Submitted" [ref=e562]:
                      - button "● Submitted" [ref=e563]:
                        - generic [ref=e564]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e565]:
                      - button "Edit Assignment" [ref=e566]
                      - button "Add Tests" [ref=e567]
                      - button "Assignment actions" [ref=e568]
                  - row "Begin assignment Form A for N41515A46841, Lewis Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e569] [cursor=pointer]:
                    - cell "Begin assignment Form A for N41515A46841, Lewis" [ref=e570]:
                      - button "Begin assignment Form A for N41515A46841, Lewis" [ref=e571]:
                        - generic [ref=e572]: N41515A46841, Lewis
                    - cell "Form A More info" [ref=e573]:
                      - generic [ref=e574]:
                        - button "Form A" [ref=e575]:
                          - generic [ref=e576]: Form A
                        - button "More info" [ref=e577]
                    - cell "23 days" [ref=e578]:
                      - button "23 days" [ref=e579]
                    - cell "● Submitted" [ref=e580]:
                      - button "● Submitted" [ref=e581]:
                        - generic [ref=e582]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e583]:
                      - button "Edit Assignment" [ref=e584]
                      - button "Add Tests" [ref=e585]
                      - button "Assignment actions" [ref=e586]
                  - row "Begin assignment Form A for N18181A41372, Urban Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e587] [cursor=pointer]:
                    - cell "Begin assignment Form A for N18181A41372, Urban" [ref=e588]:
                      - button "Begin assignment Form A for N18181A41372, Urban" [ref=e589]:
                        - generic [ref=e590]: N18181A41372, Urban
                    - cell "Form A More info" [ref=e591]:
                      - generic [ref=e592]:
                        - button "Form A" [ref=e593]:
                          - generic [ref=e594]: Form A
                        - button "More info" [ref=e595]
                    - cell "23 days" [ref=e596]:
                      - button "23 days" [ref=e597]
                    - cell "● Submitted" [ref=e598]:
                      - button "● Submitted" [ref=e599]:
                        - generic [ref=e600]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e601]:
                      - button "Edit Assignment" [ref=e602]
                      - button "Add Tests" [ref=e603]
                      - button "Assignment actions" [ref=e604]
                  - row "Begin assignment Form A for N6112A28484, Osbaldo Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e605] [cursor=pointer]:
                    - cell "Begin assignment Form A for N6112A28484, Osbaldo" [ref=e606]:
                      - button "Begin assignment Form A for N6112A28484, Osbaldo" [ref=e607]:
                        - generic [ref=e608]: N6112A28484, Osbaldo
                    - cell "Form A More info" [ref=e609]:
                      - generic [ref=e610]:
                        - button "Form A" [ref=e611]:
                          - generic [ref=e612]: Form A
                        - button "More info" [ref=e613]
                    - cell "23 days" [ref=e614]:
                      - button "23 days" [ref=e615]
                    - cell "● Submitted" [ref=e616]:
                      - button "● Submitted" [ref=e617]:
                        - generic [ref=e618]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e619]:
                      - button "Edit Assignment" [ref=e620]
                      - button "Add Tests" [ref=e621]
                      - button "Assignment actions" [ref=e622]
                  - row "Begin assignment Form A for N26943A18371, Katlyn Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e623] [cursor=pointer]:
                    - cell "Begin assignment Form A for N26943A18371, Katlyn" [ref=e624]:
                      - button "Begin assignment Form A for N26943A18371, Katlyn" [ref=e625]:
                        - generic [ref=e626]: N26943A18371, Katlyn
                    - cell "Form A More info" [ref=e627]:
                      - generic [ref=e628]:
                        - button "Form A" [ref=e629]:
                          - generic [ref=e630]: Form A
                        - button "More info" [ref=e631]
                    - cell "23 days" [ref=e632]:
                      - button "23 days" [ref=e633]
                    - cell "● Submitted" [ref=e634]:
                      - button "● Submitted" [ref=e635]:
                        - generic [ref=e636]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e637]:
                      - button "Edit Assignment" [ref=e638]
                      - button "Add Tests" [ref=e639]
                      - button "Assignment actions" [ref=e640]
                  - row "Begin assignment Form A for N33692A5394, Britney Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e641] [cursor=pointer]:
                    - cell "Begin assignment Form A for N33692A5394, Britney" [ref=e642]:
                      - button "Begin assignment Form A for N33692A5394, Britney" [ref=e643]:
                        - generic [ref=e644]: N33692A5394, Britney
                    - cell "Form A More info" [ref=e645]:
                      - generic [ref=e646]:
                        - button "Form A" [ref=e647]:
                          - generic [ref=e648]: Form A
                        - button "More info" [ref=e649]
                    - cell "23 days" [ref=e650]:
                      - button "23 days" [ref=e651]
                    - cell "● Submitted" [ref=e652]:
                      - button "● Submitted" [ref=e653]:
                        - generic [ref=e654]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e655]:
                      - button "Edit Assignment" [ref=e656]
                      - button "Add Tests" [ref=e657]
                      - button "Assignment actions" [ref=e658]
                  - row "Begin assignment Form A for N1146A44218, Hayden Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e659] [cursor=pointer]:
                    - cell "Begin assignment Form A for N1146A44218, Hayden" [ref=e660]:
                      - button "Begin assignment Form A for N1146A44218, Hayden" [ref=e661]:
                        - generic [ref=e662]: N1146A44218, Hayden
                    - cell "Form A More info" [ref=e663]:
                      - generic [ref=e664]:
                        - button "Form A" [ref=e665]:
                          - generic [ref=e666]: Form A
                        - button "More info" [ref=e667]
                    - cell "23 days" [ref=e668]:
                      - button "23 days" [ref=e669]
                    - cell "● Submitted" [ref=e670]:
                      - button "● Submitted" [ref=e671]:
                        - generic [ref=e672]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e673]:
                      - button "Edit Assignment" [ref=e674]
                      - button "Add Tests" [ref=e675]
                      - button "Assignment actions" [ref=e676]
                  - row "Begin assignment Form A for N17658A99827, Tessie Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e677] [cursor=pointer]:
                    - cell "Begin assignment Form A for N17658A99827, Tessie" [ref=e678]:
                      - button "Begin assignment Form A for N17658A99827, Tessie" [ref=e679]:
                        - generic [ref=e680]: N17658A99827, Tessie
                    - cell "Form A More info" [ref=e681]:
                      - generic [ref=e682]:
                        - button "Form A" [ref=e683]:
                          - generic [ref=e684]: Form A
                        - button "More info" [ref=e685]
                    - cell "23 days" [ref=e686]:
                      - button "23 days" [ref=e687]
                    - cell "● Submitted" [ref=e688]:
                      - button "● Submitted" [ref=e689]:
                        - generic [ref=e690]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e691]:
                      - button "Edit Assignment" [ref=e692]
                      - button "Add Tests" [ref=e693]
                      - button "Assignment actions" [ref=e694]
                  - row "Begin assignment Form A for N26823A12982, Abe Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e695] [cursor=pointer]:
                    - cell "Begin assignment Form A for N26823A12982, Abe" [ref=e696]:
                      - button "Begin assignment Form A for N26823A12982, Abe" [ref=e697]:
                        - generic [ref=e698]: N26823A12982, Abe
                    - cell "Form A More info" [ref=e699]:
                      - generic [ref=e700]:
                        - button "Form A" [ref=e701]:
                          - generic [ref=e702]: Form A
                        - button "More info" [ref=e703]
                    - cell "23 days" [ref=e704]:
                      - button "23 days" [ref=e705]
                    - cell "● Submitted" [ref=e706]:
                      - button "● Submitted" [ref=e707]:
                        - generic [ref=e708]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e709]:
                      - button "Edit Assignment" [ref=e710]
                      - button "Add Tests" [ref=e711]
                      - button "Assignment actions" [ref=e712]
                  - row "Begin assignment Form A for N65374A98775, Aniyah Form A More info 2 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e713] [cursor=pointer]:
                    - cell "Begin assignment Form A for N65374A98775, Aniyah" [ref=e714]:
                      - button "Begin assignment Form A for N65374A98775, Aniyah" [ref=e715]:
                        - generic [ref=e716]: N65374A98775, Aniyah
                    - cell "Form A More info" [ref=e717]:
                      - generic [ref=e718]:
                        - button "Form A" [ref=e719]:
                          - generic [ref=e720]: Form A
                        - button "More info" [ref=e721]
                    - cell "2 days" [ref=e722]:
                      - button "2 days" [ref=e723]
                    - cell "● Submitted" [ref=e724]:
                      - button "● Submitted" [ref=e725]:
                        - generic [ref=e726]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e727]:
                      - button "Edit Assignment" [ref=e728]
                      - button "Add Tests" [ref=e729]
                      - button "Assignment actions" [ref=e730]
                  - row "Begin assignment Form A for N47536A97297, Annalise Form A More info 2 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e731] [cursor=pointer]:
                    - cell "Begin assignment Form A for N47536A97297, Annalise" [ref=e732]:
                      - button "Begin assignment Form A for N47536A97297, Annalise" [ref=e733]:
                        - generic [ref=e734]: N47536A97297, Annalise
                    - cell "Form A More info" [ref=e735]:
                      - generic [ref=e736]:
                        - button "Form A" [ref=e737]:
                          - generic [ref=e738]: Form A
                        - button "More info" [ref=e739]
                    - cell "2 days" [ref=e740]:
                      - button "2 days" [ref=e741]
                    - cell "● Submitted" [ref=e742]:
                      - button "● Submitted" [ref=e743]:
                        - generic [ref=e744]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e745]:
                      - button "Edit Assignment" [ref=e746]
                      - button "Add Tests" [ref=e747]
                      - button "Assignment actions" [ref=e748]
                  - row "Begin assignment Form A for N10821A88098, Cydney Form A More info 2 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e749] [cursor=pointer]:
                    - cell "Begin assignment Form A for N10821A88098, Cydney" [ref=e750]:
                      - button "Begin assignment Form A for N10821A88098, Cydney" [ref=e751]:
                        - generic [ref=e752]: N10821A88098, Cydney
                    - cell "Form A More info" [ref=e753]:
                      - generic [ref=e754]:
                        - button "Form A" [ref=e755]:
                          - generic [ref=e756]: Form A
                        - button "More info" [ref=e757]
                    - cell "2 days" [ref=e758]:
                      - button "2 days" [ref=e759]
                    - cell "● Submitted" [ref=e760]:
                      - button "● Submitted" [ref=e761]:
                        - generic [ref=e762]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e763]:
                      - button "Edit Assignment" [ref=e764]
                      - button "Add Tests" [ref=e765]
                      - button "Assignment actions" [ref=e766]
                  - row "Begin assignment Form A for N6461A17521, Jacinto Form A More info 2 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e767] [cursor=pointer]:
                    - cell "Begin assignment Form A for N6461A17521, Jacinto" [ref=e768]:
                      - button "Begin assignment Form A for N6461A17521, Jacinto" [ref=e769]:
                        - generic [ref=e770]: N6461A17521, Jacinto
                    - cell "Form A More info" [ref=e771]:
                      - generic [ref=e772]:
                        - button "Form A" [ref=e773]:
                          - generic [ref=e774]: Form A
                        - button "More info" [ref=e775]
                    - cell "2 days" [ref=e776]:
                      - button "2 days" [ref=e777]
                    - cell "● Submitted" [ref=e778]:
                      - button "● Submitted" [ref=e779]:
                        - generic [ref=e780]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e781]:
                      - button "Edit Assignment" [ref=e782]
                      - button "Add Tests" [ref=e783]
                      - button "Assignment actions" [ref=e784]
                  - row "Begin assignment Form A for N34899A93036, Jaqueline Form A More info 2 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e785] [cursor=pointer]:
                    - cell "Begin assignment Form A for N34899A93036, Jaqueline" [ref=e786]:
                      - button "Begin assignment Form A for N34899A93036, Jaqueline" [ref=e787]:
                        - generic [ref=e788]: N34899A93036, Jaqueline
                    - cell "Form A More info" [ref=e789]:
                      - generic [ref=e790]:
                        - button "Form A" [ref=e791]:
                          - generic [ref=e792]: Form A
                        - button "More info" [ref=e793]
                    - cell "2 days" [ref=e794]:
                      - button "2 days" [ref=e795]
                    - cell "● Submitted" [ref=e796]:
                      - button "● Submitted" [ref=e797]:
                        - generic [ref=e798]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e799]:
                      - button "Edit Assignment" [ref=e800]
                      - button "Add Tests" [ref=e801]
                      - button "Assignment actions" [ref=e802]
                  - row "Begin assignment Form A for N8496A89864, Meredith Form A More info 2 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e803] [cursor=pointer]:
                    - cell "Begin assignment Form A for N8496A89864, Meredith" [ref=e804]:
                      - button "Begin assignment Form A for N8496A89864, Meredith" [ref=e805]:
                        - generic [ref=e806]: N8496A89864, Meredith
                    - cell "Form A More info" [ref=e807]:
                      - generic [ref=e808]:
                        - button "Form A" [ref=e809]:
                          - generic [ref=e810]: Form A
                        - button "More info" [ref=e811]
                    - cell "2 days" [ref=e812]:
                      - button "2 days" [ref=e813]
                    - cell "● Submitted" [ref=e814]:
                      - button "● Submitted" [ref=e815]:
                        - generic [ref=e816]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e817]:
                      - button "Edit Assignment" [ref=e818]
                      - button "Add Tests" [ref=e819]
                      - button "Assignment actions" [ref=e820]
            - generic [ref=e821]:
              - generic [ref=e824]:
                - img [ref=e825]
                - heading "Notifications Center" [level=2] [ref=e829]
              - generic [ref=e830]:
                - generic [ref=e832]:
                  - img [ref=e833]
                  - heading "Resources" [level=3] [ref=e837]
                - list [ref=e838]:
                  - listitem [ref=e839]:
                    - button "Riverside Learn" [ref=e840] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e841]
                      - img [ref=e843]
                  - listitem [ref=e845]:
                    - button "Onboarding Tutorial Videos" [ref=e846] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e847]
                      - img [ref=e849]
                  - listitem [ref=e851]:
                    - button "Quick Reference Guides" [ref=e852] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e853]
                      - img [ref=e855]
                - button "View All" [ref=e858] [cursor=pointer]
      - contentinfo [ref=e859]:
        - generic [ref=e860]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e861] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e862]
        - generic [ref=e863]:
          - link "Riverside Insights Facebook" [ref=e864] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e865]
          - link "Riverside Insights Twitter" [ref=e866] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e867]
          - link "Riverside Insights LinkedIn" [ref=e868] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e869]
          - link "Riverside Insights Instagram" [ref=e870] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e871]
        - generic [ref=e872]:
          - button "Leave Feedback" [ref=e873] [cursor=pointer]
          - generic [ref=e874]: "|"
          - link "Terms of Use" [ref=e875] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e876]: "|"
          - link "Privacy Policy" [ref=e877] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e878]: Footer region end
```

# Test source

```ts
  733 |       const expType = exportType ?? getCurrentExportType();
  734 |       const result = await findExportDataFile({
  735 |         exportType: expType,
  736 |         examineeID,
  737 |         testStemForm,
  738 |       });
  739 |       this.txtFileContent = result.content;
  740 |       this.requiredFile = result.filePath;
  741 | 
  742 |       return result.filePath;
  743 |     } catch (error) {
  744 |       console.error(`Error in printAllThedatafromTheFileRequired: ${error}`);
  745 |       throw error;
  746 |     }
  747 |   }
  748 |   async uploadExamineeExportTemplate(type: string, examineeID: string) {
  749 |     await this.goToTheMainMenuChildPage("Reports", "Data Export");
  750 |     const fileChooserPromise = this.page.waitForEvent("filechooser");
  751 |     await this.browseButton.click();
  752 |     const fileChooser = await fileChooserPromise;
  753 |     let templatePathToUpload: string | undefined;
  754 | 
  755 |     try {
  756 |       const exportType = mapStringToExportType(type);
  757 |       templatePathToUpload = getGeneratedTemplatePath(examineeID, exportType);
  758 |       console.log(`Uploading template: ${templatePathToUpload}`);
  759 | 
  760 |       await fileChooser.setFiles(templatePathToUpload);
  761 |     } catch (error) {
  762 |       console.error(`Error preparing file for upload: ${error}`);
  763 |       throw error;
  764 |     }
  765 | 
  766 |     await expect(this.uploadButton).toBeEnabled();
  767 |     await this.uploadButton.click();
  768 |   }
  769 | 
  770 |   async selectExaminer(examinerID: string) {
  771 |     await this.page
  772 |       .getByPlaceholder("Search by Examiner Name or ID")
  773 |       .fill(examinerID);
  774 |     await this.page.locator(".item-text").getByText(examinerID).first().click();
  775 |   }
  776 | 
  777 |   async waitForLoadingSpinnerToDisappear() {
  778 |     try {
  779 |       await this.dashboardLoadingSpinnerIcon.last().waitFor({
  780 |         state: "hidden",
  781 |         timeout: 2 * 60 * 1000,
  782 |       });
  783 |       await this.page.waitForTimeout(2000);
  784 |     } catch (error) {
  785 |       this.page.reload();
  786 |       await this.dashboardLoadingSpinnerIcon.last().waitFor({
  787 |         state: "hidden",
  788 |         timeout: 2 * 60 * 1000,
  789 |       });
  790 | 
  791 |       console.error("Error waiting for loading spinner to disappear:", error);
  792 |     }
  793 |   }
  794 | 
  795 |   async waitForLoadingIconToDisappear() {
  796 |     await this.loadingIcon.last().waitFor({
  797 |       state: "hidden",
  798 |       timeout: 3 * 60 * 1000,
  799 |     });
  800 |   }
  801 | 
  802 |   async waitForMyTestAssignmentsToBeVisible() {
  803 |     await this.myTestAssignmentsText.waitFor({
  804 |       state: "visible",
  805 |       timeout: 2 * 60 * 1000,
  806 |     });
  807 |     expect(await this.myTestAssignmentsText.isVisible(), "myTestAssignmentsText is not visible").toBeTruthy();
  808 |   }
  809 | 
  810 |   async verifyTestSetStatusAtMyTestAssignmentsDashboard(
  811 |     examineeId: string,
  812 |     status: string,
  813 |     scenario: string = "Not Specified",
  814 |   ) {
  815 |     await this.page.waitForTimeout(3000);
  816 |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  817 |     const firstRowDetails = await this.getTheTestAssignmentsRowDetails(1);
  818 |     await this.page.waitForTimeout(3000);
  819 |     expect
  820 |       .soft(firstRowDetails.status, "Status not matching =" + scenario)
  821 |       .toContain(status);
  822 |   }
  823 | 
  824 |   async getTheTestAssignmentsRowDetails(rowIndex: number) {
  825 |     await this.page.waitForLoadState("domcontentloaded");
  826 |     await this.waitForLoadingSpinnerToDisappear();
  827 |     await this.page.waitForTimeout(1000);
  828 | 
  829 |     const row = this.myTestAssignmentsRow.nth(rowIndex - 1);
  830 |     const cells = row.locator("button[class*='cell']");
  831 | 
  832 |     const [examinee, testSet, daysLeftEdit, status] = await Promise.all([
> 833 |       cells.nth(0).textContent(),
      |                    ^ TimeoutError: locator.textContent: Timeout 60000ms exceeded.
  834 |       cells.nth(1).textContent(),
  835 |       cells.nth(2).textContent(),
  836 |       cells.nth(3).textContent(),
  837 |     ]);
  838 | 
  839 |     return {
  840 |       examinee: examinee?.trim(),
  841 |       testSet: testSet?.trim(),
  842 |       daysLeftEdit: daysLeftEdit?.trim(),
  843 |       status: status?.trim(),
  844 |     };
  845 |   }
  846 | 
  847 |   async searchForExamineeAtSearchMyTestAssignments(examineeName: string) {
  848 |     await this.searchTestAssignments(examineeName);
  849 |     await expect(
  850 |       this.rowButton,
  851 |       "Examinee is either not founf or too many results",
  852 |     ).toHaveCount(1);
  853 |   }
  854 |   async clickOnFirstRow() {
  855 |     await this.rowButton
  856 |       .first()
  857 |       .click();
  858 |     await this.page.waitForTimeout(2000);
  859 |   }
  860 | 
  861 |   async generateReport(examineeId: string): Promise<[Page, Page]> {
  862 |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  863 |     await this.waitForLoadingSpinnerToDisappear();
  864 | 
  865 |     // await this.generateReportIcon.first().click();
  866 |     await this.getLinkButton('ellipsis').click();
  867 |     await this.page.locator("//button[text()='Generate Report']").click();
  868 | 
  869 |     await this.waitForLoadingIconToDisappear();
  870 |     await this.nextButton.click();
  871 |     await this.nextButton.click();
  872 | 
  873 |     const [newPage] = await Promise.all([
  874 |       this.page.context().waitForEvent("page"),
  875 |       this.generateReportButton.last().click(),
  876 |     ]);
  877 | 
  878 |     return [this.page, newPage] as [Page, Page];
  879 |   }
  880 | 
  881 |   async goToDashboardFromMainNavigation() {
  882 |     await this.page.bringToFront();
  883 |     await this.mainNavigation.click();
  884 |     await this.mainNavigationHome.click();
  885 |     await this.areYouSureYesButton.click();
  886 |     await this.waitForLoadingSpinnerToDisappear();
  887 |   }
  888 | 
  889 |   async closeLaunchTestSessionPopUp() {
  890 |     await this.closeSessionIntroCrossIcon.click();
  891 |     await this.waitForLoadingSpinnerToDisappear();
  892 |   }
  893 | 
  894 |   async clickOnReviewMode() {
  895 |     await this.reviewModeButton.click();
  896 |   }
  897 | 
  898 |   async getStatusOfSubmitTestAssignmentButton() {
  899 |     await this.submitTestSetAndFinishAdministration.waitFor({
  900 |       state: "visible",
  901 |       timeout: 2 * 60 * 1000,
  902 |     });
  903 |     await this.page.waitForTimeout(3000);
  904 |     return await this.submitTestSetAndFinishAdministration.isDisabled();
  905 |   }
  906 | 
  907 |   async verifyReviewModeDashboardIsVisible() {
  908 |     await this.reviewModeDashboardHeader.waitFor({
  909 |       state: "visible",
  910 |       timeout: 2 * 60 * 1000,
  911 |     });
  912 |     await expect(this.reviewModeDashboardHeader).toBeVisible();
  913 |     await this.page.waitForTimeout(2000);
  914 |   }
  915 | 
  916 |   async verifyAdministrationSummaryIsVisible() {
  917 |    await this.waitForLoadingInnerToDisappear();
  918 |     await this.administrationSummaryHeader.waitFor({
  919 |       state: "visible",
  920 |       timeout: 1 * 60 * 1000,
  921 |     });
  922 |     await expect(this.administrationSummaryHeader).toBeVisible();
  923 |     await this.page.waitForTimeout(2000);
  924 |   }
  925 | 
  926 |   private async waitForLoadingInnerToDisappear() {
  927 |         try {
  928 |       await this.loadingIcon.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  929 |     } catch (error) {
  930 |       await this.page.reload();
  931 |       console.error("Loading icon did not disappear in time:", error);
  932 |     }
  933 | 
```