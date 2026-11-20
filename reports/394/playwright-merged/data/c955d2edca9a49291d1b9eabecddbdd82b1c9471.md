# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/WRTSMP_Pub.spec.ts >> WRTSMP.W5PA Test Data Export Automation  >> For Ages 5 to 7 - All correct End Test Scenario For Block A, Block B And Block C Conduct test and validate report
- Location: src/tests/test_dataExport/WRTSMP_Pub.spec.ts:16:5

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//b[text()=\'Score Later\']')

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
            - link "Back to product selection" [ref=e5] [cursor=pointer]:
              - /url: /products
            - generic [ref=e6]: Riverside Insights Logo
            - generic [ref=e7]:
              - heading "Hello 07PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "07PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                  - row [ref=e67]:
                    - columnheader "This is the student or individual being assessed." [ref=e68]: Examinee
                    - columnheader "The name given to this test assignment." [ref=e69]: Assignment Name
                    - columnheader "Number of days remaining to edit this assignment." [ref=e70]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e71]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e72]: Actions
                - rowgroup [ref=e73]:
                  - row [ref=e74] [cursor=pointer]:
                    - cell [ref=e75]:
                      - button "Begin assignment Rogers's Broad Achievement for N74154A11658, Rogers" [ref=e76]:
                        - generic [ref=e77]: N74154A11658, Rogers
                    - cell [ref=e78]:
                      - generic [ref=e79]:
                        - button "Rogers's Broad Achievement" [ref=e80]
                        - button "More info" [ref=e82]
                    - cell [ref=e83]:
                      - button "—" [ref=e84]
                    - cell [ref=e85]:
                      - button "● Not Started" [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Not Started
                    - cell [ref=e88]:
                      - button "Edit Assignment" [ref=e89]
                      - button "Add Tests" [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row [ref=e92] [cursor=pointer]:
                    - cell [ref=e93]:
                      - button "Begin assignment Kyler's General Intellectual Ability (GIA) for N99770A73943, Kyler" [ref=e94]:
                        - generic [ref=e95]: N99770A73943, Kyler
                    - cell [ref=e96]:
                      - generic [ref=e97]:
                        - button "Kyler's General Intellectual Ability (GIA)" [ref=e98]
                        - button "More info" [ref=e100]
                    - cell [ref=e101]:
                      - button "—" [ref=e102]
                    - cell [ref=e103]:
                      - button "● Not Started" [ref=e104]:
                        - generic [ref=e105]: ●
                        - text: Not Started
                    - cell [ref=e106]:
                      - button "Edit Assignment" [ref=e107]
                      - button "Add Tests" [ref=e108]
                      - button "Assignment actions" [ref=e109]
                  - row [ref=e110] [cursor=pointer]:
                    - cell [ref=e111]:
                      - button "Begin assignment Everette's Dyslexia Test Set for N21364A49862, Everette" [ref=e112]:
                        - generic [ref=e113]: N21364A49862, Everette
                    - cell [ref=e114]:
                      - generic [ref=e115]:
                        - button "Everette's Dyslexia Test Set" [ref=e116]
                        - button "More info" [ref=e118]
                    - cell [ref=e119]:
                      - button "—" [ref=e120]
                    - cell [ref=e121]:
                      - button "● Not Started" [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: Not Started
                    - cell [ref=e124]:
                      - button "Edit Assignment" [ref=e125]
                      - button "Add Tests" [ref=e126]
                      - button "Assignment actions" [ref=e127]
                  - row [ref=e128] [cursor=pointer]:
                    - cell [ref=e129]:
                      - button "Begin assignment Olaf's Form A for N66071A3457, Olaf" [disabled] [ref=e130]:
                        - generic [ref=e131]: N66071A3457, Olaf
                    - cell [ref=e132]:
                      - generic [ref=e133]:
                        - button "Olaf's Form A" [disabled] [ref=e134]
                        - button "More info" [ref=e136]
                    - cell [ref=e137]:
                      - button "90 days" [disabled] [ref=e138]
                    - cell [ref=e139]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e140]:
                        - generic [ref=e141]: ●
                        - text: In Progress↩️ Resume Assignment
                    - cell [ref=e142]:
                      - button "Edit Assignment" [disabled] [ref=e143]
                      - button "Add Tests" [disabled] [ref=e144]
                      - button "Assignment actions" [ref=e145]
                  - row [ref=e146] [cursor=pointer]:
                    - cell [ref=e147]:
                      - button "Begin assignment Judson's Form A for N60451A21303, Judson" [disabled] [ref=e148]:
                        - generic [ref=e149]: N60451A21303, Judson
                    - cell [ref=e150]:
                      - generic [ref=e151]:
                        - button "Judson's Form A" [disabled] [ref=e152]
                        - button "More info" [ref=e154]
                    - cell [ref=e155]:
                      - button "90 days" [disabled] [ref=e156]
                    - cell [ref=e157]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e158]:
                        - generic [ref=e159]: ●
                        - text: In Progress↩️ Resume Assignment
                    - cell [ref=e160]:
                      - button "Edit Assignment" [disabled] [ref=e161]
                      - button "Add Tests" [disabled] [ref=e162]
                      - button "Assignment actions" [ref=e163]
                  - row [ref=e164] [cursor=pointer]:
                    - cell [ref=e165]:
                      - button "Begin assignment Juwan's Form A (2) for N15322A80939, Juwan" [disabled] [ref=e166]:
                        - generic [ref=e167]: N15322A80939, Juwan
                    - cell [ref=e168]:
                      - generic [ref=e169]:
                        - button "Juwan's Form A (2)" [disabled] [ref=e170]
                        - button "More info" [ref=e172]
                    - cell [ref=e173]:
                      - button "90 days" [disabled] [ref=e174]
                    - cell [ref=e175]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e176]:
                        - generic [ref=e177]: ●
                        - text: In Progress↩️ Resume Assignment
                    - cell [ref=e178]:
                      - button "Edit Assignment" [disabled] [ref=e179]
                      - button "Add Tests" [disabled] [ref=e180]
                      - button "Assignment actions" [ref=e181]
                  - row [ref=e182] [cursor=pointer]:
                    - cell [ref=e183]:
                      - button "Begin assignment Abbigail's Form A for N52868A51892, Abbigail" [disabled] [ref=e184]:
                        - generic [ref=e185]: N52868A51892, Abbigail
                    - cell [ref=e186]:
                      - generic [ref=e187]:
                        - button "Abbigail's Form A" [disabled] [ref=e188]
                        - button "More info" [ref=e190]
                    - cell [ref=e191]:
                      - button "69 days" [disabled] [ref=e192]
                    - cell [ref=e193]:
                      - button "● Submitted" [disabled] [ref=e194]:
                        - generic [ref=e195]: ●
                        - text: Submitted
                    - cell [ref=e196]:
                      - button "Edit Assignment" [disabled] [ref=e197]
                      - button "Add Tests" [disabled] [ref=e198]
                      - button "Assignment actions" [ref=e199]
                  - row [ref=e200] [cursor=pointer]:
                    - cell [ref=e201]:
                      - button "Begin assignment Maryam's Form A (1) for N34756A99891, Maryam" [disabled] [ref=e202]:
                        - generic [ref=e203]: N34756A99891, Maryam
                    - cell [ref=e204]:
                      - generic [ref=e205]:
                        - button "Maryam's Form A (1)" [disabled] [ref=e206]
                        - button "More info" [ref=e208]
                    - cell [ref=e209]:
                      - button "69 days" [disabled] [ref=e210]
                    - cell [ref=e211]:
                      - button "● Submitted" [disabled] [ref=e212]:
                        - generic [ref=e213]: ●
                        - text: Submitted
                    - cell [ref=e214]:
                      - button "Edit Assignment" [disabled] [ref=e215]
                      - button "Add Tests" [disabled] [ref=e216]
                      - button "Assignment actions" [ref=e217]
                  - row [ref=e218] [cursor=pointer]:
                    - cell [ref=e219]:
                      - button "Begin assignment Carolyn's Form A (1) for N19067A16532, Carolyn" [disabled] [ref=e220]:
                        - generic [ref=e221]: N19067A16532, Carolyn
                    - cell [ref=e222]:
                      - generic [ref=e223]:
                        - button "Carolyn's Form A (1)" [disabled] [ref=e224]
                        - button "More info" [ref=e226]
                    - cell [ref=e227]:
                      - button "69 days" [disabled] [ref=e228]
                    - cell [ref=e229]:
                      - button "● Submitted" [disabled] [ref=e230]:
                        - generic [ref=e231]: ●
                        - text: Submitted
                    - cell [ref=e232]:
                      - button "Edit Assignment" [disabled] [ref=e233]
                      - button "Add Tests" [disabled] [ref=e234]
                      - button "Assignment actions" [ref=e235]
                  - row [ref=e236] [cursor=pointer]:
                    - cell [ref=e237]:
                      - button "Begin assignment Sigmund's Form A for N78960A81405, Sigmund" [disabled] [ref=e238]:
                        - generic [ref=e239]: N78960A81405, Sigmund
                    - cell [ref=e240]:
                      - generic [ref=e241]:
                        - button "Sigmund's Form A" [disabled] [ref=e242]
                        - button "More info" [ref=e244]
                    - cell [ref=e245]:
                      - button "69 days" [disabled] [ref=e246]
                    - cell [ref=e247]:
                      - button "● Submitted" [disabled] [ref=e248]:
                        - generic [ref=e249]: ●
                        - text: Submitted
                    - cell [ref=e250]:
                      - button "Edit Assignment" [disabled] [ref=e251]
                      - button "Add Tests" [disabled] [ref=e252]
                      - button "Assignment actions" [ref=e253]
                  - row [ref=e254] [cursor=pointer]:
                    - cell [ref=e255]:
                      - button "Begin assignment Jodie's Form A for N65426A27642, Jodie" [disabled] [ref=e256]:
                        - generic [ref=e257]: N65426A27642, Jodie
                    - cell [ref=e258]:
                      - generic [ref=e259]:
                        - button "Jodie's Form A" [disabled] [ref=e260]
                        - button "More info" [ref=e262]
                    - cell [ref=e263]:
                      - button "69 days" [disabled] [ref=e264]
                    - cell [ref=e265]:
                      - button "● Submitted" [disabled] [ref=e266]:
                        - generic [ref=e267]: ●
                        - text: Submitted
                    - cell [ref=e268]:
                      - button "Edit Assignment" [disabled] [ref=e269]
                      - button "Add Tests" [disabled] [ref=e270]
                      - button "Assignment actions" [ref=e271]
                  - row [ref=e272] [cursor=pointer]:
                    - cell [ref=e273]:
                      - button "Begin assignment Nayeli's Form A for N32450A34194, Nayeli" [disabled] [ref=e274]:
                        - generic [ref=e275]: N32450A34194, Nayeli
                    - cell [ref=e276]:
                      - generic [ref=e277]:
                        - button "Nayeli's Form A" [disabled] [ref=e278]
                        - button "More info" [ref=e280]
                    - cell [ref=e281]:
                      - button "68 days" [disabled] [ref=e282]
                    - cell [ref=e283]:
                      - button "● Submitted" [disabled] [ref=e284]:
                        - generic [ref=e285]: ●
                        - text: Submitted
                    - cell [ref=e286]:
                      - button "Edit Assignment" [disabled] [ref=e287]
                      - button "Add Tests" [disabled] [ref=e288]
                      - button "Assignment actions" [ref=e289]
                  - row [ref=e290] [cursor=pointer]:
                    - cell [ref=e291]:
                      - button "Begin assignment Jonas's Form A for N36277A69620, Jonas" [disabled] [ref=e292]:
                        - generic [ref=e293]: N36277A69620, Jonas
                    - cell [ref=e294]:
                      - generic [ref=e295]:
                        - button "Jonas's Form A" [disabled] [ref=e296]
                        - button "More info" [ref=e298]
                    - cell [ref=e299]:
                      - button "68 days" [disabled] [ref=e300]
                    - cell [ref=e301]:
                      - button "● Submitted" [disabled] [ref=e302]:
                        - generic [ref=e303]: ●
                        - text: Submitted
                    - cell [ref=e304]:
                      - button "Edit Assignment" [disabled] [ref=e305]
                      - button "Add Tests" [disabled] [ref=e306]
                      - button "Assignment actions" [ref=e307]
                  - row [ref=e308] [cursor=pointer]:
                    - cell [ref=e309]:
                      - button "Begin assignment Jacynthe's Form A for N98717A8825, Jacynthe" [disabled] [ref=e310]:
                        - generic [ref=e311]: N98717A8825, Jacynthe
                    - cell [ref=e312]:
                      - generic [ref=e313]:
                        - button "Jacynthe's Form A" [disabled] [ref=e314]
                        - button "More info" [ref=e316]
                    - cell [ref=e317]:
                      - button "68 days" [disabled] [ref=e318]
                    - cell [ref=e319]:
                      - button "● Submitted" [disabled] [ref=e320]:
                        - generic [ref=e321]: ●
                        - text: Submitted
                    - cell [ref=e322]:
                      - button "Edit Assignment" [disabled] [ref=e323]
                      - button "Add Tests" [disabled] [ref=e324]
                      - button "Assignment actions" [ref=e325]
                  - row [ref=e326] [cursor=pointer]:
                    - cell [ref=e327]:
                      - button "Begin assignment Raven's Form A (1) for N7029A51203, Raven" [disabled] [ref=e328]:
                        - generic [ref=e329]: N7029A51203, Raven
                    - cell [ref=e330]:
                      - generic [ref=e331]:
                        - button "Raven's Form A (1)" [disabled] [ref=e332]
                        - button "More info" [ref=e334]
                    - cell [ref=e335]:
                      - button "68 days" [disabled] [ref=e336]
                    - cell [ref=e337]:
                      - button "● Submitted" [disabled] [ref=e338]:
                        - generic [ref=e339]: ●
                        - text: Submitted
                    - cell [ref=e340]:
                      - button "Edit Assignment" [disabled] [ref=e341]
                      - button "Add Tests" [disabled] [ref=e342]
                      - button "Assignment actions" [ref=e343]
                  - row [ref=e344] [cursor=pointer]:
                    - cell [ref=e345]:
                      - button "Begin assignment Laury's Form A for N50591A55490, Laury" [disabled] [ref=e346]:
                        - generic [ref=e347]: N50591A55490, Laury
                    - cell [ref=e348]:
                      - generic [ref=e349]:
                        - button "Laury's Form A" [disabled] [ref=e350]
                        - button "More info" [ref=e352]
                    - cell [ref=e353]:
                      - button "68 days" [disabled] [ref=e354]
                    - cell [ref=e355]:
                      - button "● Submitted" [disabled] [ref=e356]:
                        - generic [ref=e357]: ●
                        - text: Submitted
                    - cell [ref=e358]:
                      - button "Edit Assignment" [disabled] [ref=e359]
                      - button "Add Tests" [disabled] [ref=e360]
                      - button "Assignment actions" [ref=e361]
                  - row [ref=e362] [cursor=pointer]:
                    - cell [ref=e363]:
                      - button "Begin assignment Ari's Form A (1) for N44505A99366, Ari" [disabled] [ref=e364]:
                        - generic [ref=e365]: N44505A99366, Ari
                    - cell [ref=e366]:
                      - generic [ref=e367]:
                        - button "Ari's Form A (1)" [disabled] [ref=e368]
                        - button "More info" [ref=e370]
                    - cell [ref=e371]:
                      - button "68 days" [disabled] [ref=e372]
                    - cell [ref=e373]:
                      - button "● Submitted" [disabled] [ref=e374]:
                        - generic [ref=e375]: ●
                        - text: Submitted
                    - cell [ref=e376]:
                      - button "Edit Assignment" [disabled] [ref=e377]
                      - button "Add Tests" [disabled] [ref=e378]
                      - button "Assignment actions" [ref=e379]
                  - row [ref=e380] [cursor=pointer]:
                    - cell [ref=e381]:
                      - button "Begin assignment Marlene's Form A for N11416A80526, Marlene" [disabled] [ref=e382]:
                        - generic [ref=e383]: N11416A80526, Marlene
                    - cell [ref=e384]:
                      - generic [ref=e385]:
                        - button "Marlene's Form A" [disabled] [ref=e386]
                        - button "More info" [ref=e388]
                    - cell [ref=e389]:
                      - button "68 days" [disabled] [ref=e390]
                    - cell [ref=e391]:
                      - button "● Submitted" [disabled] [ref=e392]:
                        - generic [ref=e393]: ●
                        - text: Submitted
                    - cell [ref=e394]:
                      - button "Edit Assignment" [disabled] [ref=e395]
                      - button "Add Tests" [disabled] [ref=e396]
                      - button "Assignment actions" [ref=e397]
                  - row [ref=e398] [cursor=pointer]:
                    - cell [ref=e399]:
                      - button "Begin assignment Elyssa's Form A for N72455A96149, Elyssa" [disabled] [ref=e400]:
                        - generic [ref=e401]: N72455A96149, Elyssa
                    - cell [ref=e402]:
                      - generic [ref=e403]:
                        - button "Elyssa's Form A" [disabled] [ref=e404]
                        - button "More info" [ref=e406]
                    - cell [ref=e407]:
                      - button "68 days" [disabled] [ref=e408]
                    - cell [ref=e409]:
                      - button "● Submitted" [disabled] [ref=e410]:
                        - generic [ref=e411]: ●
                        - text: Submitted
                    - cell [ref=e412]:
                      - button "Edit Assignment" [disabled] [ref=e413]
                      - button "Add Tests" [disabled] [ref=e414]
                      - button "Assignment actions" [ref=e415]
                  - row [ref=e416] [cursor=pointer]:
                    - cell [ref=e417]:
                      - button "Begin assignment Antonina's Form A for N71571A4502, Antonina" [disabled] [ref=e418]:
                        - generic [ref=e419]: N71571A4502, Antonina
                    - cell [ref=e420]:
                      - generic [ref=e421]:
                        - button "Antonina's Form A" [disabled] [ref=e422]
                        - button "More info" [ref=e424]
                    - cell [ref=e425]:
                      - button "68 days" [disabled] [ref=e426]
                    - cell [ref=e427]:
                      - button "● Submitted" [disabled] [ref=e428]:
                        - generic [ref=e429]: ●
                        - text: Submitted
                    - cell [ref=e430]:
                      - button "Edit Assignment" [disabled] [ref=e431]
                      - button "Add Tests" [disabled] [ref=e432]
                      - button "Assignment actions" [ref=e433]
                  - row [aria-hidden] [ref=e434] [cursor=pointer]:
                    - cell [ref=e435]
                  - row [aria-hidden] [ref=e436] [cursor=pointer]:
                    - cell [ref=e437]
                  - row [aria-hidden] [ref=e438] [cursor=pointer]:
                    - cell [ref=e439]
                  - row [aria-hidden] [ref=e440] [cursor=pointer]:
                    - cell [ref=e441]
                  - row [aria-hidden] [ref=e442] [cursor=pointer]:
                    - cell [ref=e443]
                  - row [aria-hidden] [ref=e444] [cursor=pointer]:
                    - cell [ref=e445]
                  - row [aria-hidden] [ref=e446] [cursor=pointer]:
                    - cell [ref=e447]
                  - row [aria-hidden] [ref=e448] [cursor=pointer]:
                    - cell [ref=e449]
                  - row [aria-hidden] [ref=e450] [cursor=pointer]:
                    - cell [ref=e451]
                  - row [aria-hidden] [ref=e452] [cursor=pointer]:
                    - cell [ref=e453]
                  - row [aria-hidden] [ref=e454] [cursor=pointer]:
                    - cell [ref=e455]
                  - row [aria-hidden] [ref=e456] [cursor=pointer]:
                    - cell [ref=e457]
                  - row [aria-hidden] [ref=e458] [cursor=pointer]:
                    - cell [ref=e459]
                  - row [aria-hidden] [ref=e460] [cursor=pointer]:
                    - cell [ref=e461]
                  - row [aria-hidden] [ref=e462] [cursor=pointer]:
                    - cell [ref=e463]
                  - row [aria-hidden] [ref=e464] [cursor=pointer]:
                    - cell [ref=e465]
                  - row [aria-hidden] [ref=e466] [cursor=pointer]:
                    - cell [ref=e467]
                  - row [aria-hidden] [ref=e468] [cursor=pointer]:
                    - cell [ref=e469]
                  - row [aria-hidden] [ref=e470] [cursor=pointer]:
                    - cell [ref=e471]
                  - row [aria-hidden] [ref=e472] [cursor=pointer]:
                    - cell [ref=e473]
                  - row [aria-hidden] [ref=e474] [cursor=pointer]:
                    - cell [ref=e475]
                  - row [aria-hidden] [ref=e476] [cursor=pointer]:
                    - cell [ref=e477]
                  - row [aria-hidden] [ref=e478] [cursor=pointer]:
                    - cell [ref=e479]
                  - row [aria-hidden] [ref=e480] [cursor=pointer]:
                    - cell [ref=e481]
                  - row [aria-hidden] [ref=e482] [cursor=pointer]:
                    - cell [ref=e483]
                  - row [aria-hidden] [ref=e484] [cursor=pointer]:
                    - cell [ref=e485]
                  - row [aria-hidden] [ref=e486] [cursor=pointer]:
                    - cell [ref=e487]
                  - row [aria-hidden] [ref=e488] [cursor=pointer]:
                    - cell [ref=e489]
                  - row [aria-hidden] [ref=e490] [cursor=pointer]:
                    - cell [ref=e491]
                  - row [aria-hidden] [ref=e492] [cursor=pointer]:
                    - cell [ref=e493]
                  - row [aria-hidden] [ref=e494] [cursor=pointer]:
                    - cell [ref=e495]
                  - row [aria-hidden] [ref=e496] [cursor=pointer]:
                    - cell [ref=e497]
                  - row [aria-hidden] [ref=e498] [cursor=pointer]:
                    - cell [ref=e499]
                  - row [aria-hidden] [ref=e500] [cursor=pointer]:
                    - cell [ref=e501]
                  - row [aria-hidden] [ref=e502] [cursor=pointer]:
                    - cell [ref=e503]
                  - row [aria-hidden] [ref=e504] [cursor=pointer]:
                    - cell [ref=e505]
                  - row [aria-hidden] [ref=e506] [cursor=pointer]:
                    - cell [ref=e507]
                  - row [aria-hidden] [ref=e508] [cursor=pointer]:
                    - cell [ref=e509]
                  - row [aria-hidden] [ref=e510] [cursor=pointer]:
                    - cell [ref=e511]
                  - row [aria-hidden] [ref=e512] [cursor=pointer]:
                    - cell [ref=e513]
                  - row [aria-hidden] [ref=e514] [cursor=pointer]:
                    - cell [ref=e515]
                  - row [aria-hidden] [ref=e516] [cursor=pointer]:
                    - cell [ref=e517]
                  - row [aria-hidden] [ref=e518] [cursor=pointer]:
                    - cell [ref=e519]
                  - row [aria-hidden] [ref=e520] [cursor=pointer]:
                    - cell [ref=e521]
                  - row [aria-hidden] [ref=e522] [cursor=pointer]:
                    - cell [ref=e523]
                  - row [aria-hidden] [ref=e524] [cursor=pointer]:
                    - cell [ref=e525]
                  - row [aria-hidden] [ref=e526] [cursor=pointer]:
                    - cell [ref=e527]
                  - row [aria-hidden] [ref=e528] [cursor=pointer]:
                    - cell [ref=e529]
                  - row [aria-hidden] [ref=e530] [cursor=pointer]:
                    - cell [ref=e531]
                  - row [aria-hidden] [ref=e532] [cursor=pointer]:
                    - cell [ref=e533]
                  - row [aria-hidden] [ref=e534] [cursor=pointer]:
                    - cell [ref=e535]
                  - row [aria-hidden] [ref=e536] [cursor=pointer]:
                    - cell [ref=e537]
                  - row [aria-hidden] [ref=e538] [cursor=pointer]:
                    - cell [ref=e539]
                  - row [aria-hidden] [ref=e540] [cursor=pointer]:
                    - cell [ref=e541]
                  - row [aria-hidden] [ref=e542] [cursor=pointer]:
                    - cell [ref=e543]
                  - row [aria-hidden] [ref=e544] [cursor=pointer]:
                    - cell [ref=e545]
                  - row [aria-hidden] [ref=e546] [cursor=pointer]:
                    - cell [ref=e547]
                  - row [aria-hidden] [ref=e548] [cursor=pointer]:
                    - cell [ref=e549]
                  - row [aria-hidden] [ref=e550] [cursor=pointer]:
                    - cell [ref=e551]
                  - row [aria-hidden] [ref=e552] [cursor=pointer]:
                    - cell [ref=e553]
                  - row [aria-hidden] [ref=e554] [cursor=pointer]:
                    - cell [ref=e555]
                  - row [aria-hidden] [ref=e556] [cursor=pointer]:
                    - cell [ref=e557]
                  - row [aria-hidden] [ref=e558] [cursor=pointer]:
                    - cell [ref=e559]
                  - row [aria-hidden] [ref=e560] [cursor=pointer]:
                    - cell [ref=e561]
                  - row [aria-hidden] [ref=e562] [cursor=pointer]:
                    - cell [ref=e563]
                  - row [aria-hidden] [ref=e564] [cursor=pointer]:
                    - cell [ref=e565]
                  - row [aria-hidden] [ref=e566] [cursor=pointer]:
                    - cell [ref=e567]
                  - row [aria-hidden] [ref=e568] [cursor=pointer]:
                    - cell [ref=e569]
                  - row [aria-hidden] [ref=e570] [cursor=pointer]:
                    - cell [ref=e571]
                  - row [aria-hidden] [ref=e572] [cursor=pointer]:
                    - cell [ref=e573]
                  - row [aria-hidden] [ref=e574] [cursor=pointer]:
                    - cell [ref=e575]
                  - row [aria-hidden] [ref=e576] [cursor=pointer]:
                    - cell [ref=e577]
                  - row [aria-hidden] [ref=e578] [cursor=pointer]:
                    - cell [ref=e579]
                  - row [aria-hidden] [ref=e580] [cursor=pointer]:
                    - cell [ref=e581]
                  - row [aria-hidden] [ref=e582] [cursor=pointer]:
                    - cell [ref=e583]
                  - row [aria-hidden] [ref=e584] [cursor=pointer]:
                    - cell [ref=e585]
                  - row [aria-hidden] [ref=e586] [cursor=pointer]:
                    - cell [ref=e587]
                  - row [aria-hidden] [ref=e588] [cursor=pointer]:
                    - cell [ref=e589]
                  - row [aria-hidden] [ref=e590] [cursor=pointer]:
                    - cell [ref=e591]
                  - row [aria-hidden] [ref=e592] [cursor=pointer]:
                    - cell [ref=e593]
                  - row [aria-hidden] [ref=e594] [cursor=pointer]:
                    - cell [ref=e595]
                  - row [aria-hidden] [ref=e596] [cursor=pointer]:
                    - cell [ref=e597]
                  - row [aria-hidden] [ref=e598] [cursor=pointer]:
                    - cell [ref=e599]
                  - row [aria-hidden] [ref=e600] [cursor=pointer]:
                    - cell [ref=e601]
                  - row [aria-hidden] [ref=e602] [cursor=pointer]:
                    - cell [ref=e603]
                  - row [aria-hidden] [ref=e604] [cursor=pointer]:
                    - cell [ref=e605]
                  - row [aria-hidden] [ref=e606] [cursor=pointer]:
                    - cell [ref=e607]
                  - row [aria-hidden] [ref=e608] [cursor=pointer]:
                    - cell [ref=e609]
                  - row [aria-hidden] [ref=e610] [cursor=pointer]:
                    - cell [ref=e611]
                  - row [aria-hidden] [ref=e612] [cursor=pointer]:
                    - cell [ref=e613]
                  - row [aria-hidden] [ref=e614] [cursor=pointer]:
                    - cell [ref=e615]
                  - row [aria-hidden] [ref=e616] [cursor=pointer]:
                    - cell [ref=e617]
                  - row [aria-hidden] [ref=e618] [cursor=pointer]:
                    - cell [ref=e619]
                  - row [aria-hidden] [ref=e620] [cursor=pointer]:
                    - cell [ref=e621]
                  - row [aria-hidden] [ref=e622] [cursor=pointer]:
                    - cell [ref=e623]
                  - row [aria-hidden] [ref=e624] [cursor=pointer]:
                    - cell [ref=e625]
                  - row [aria-hidden] [ref=e626] [cursor=pointer]:
                    - cell [ref=e627]
                  - row [aria-hidden] [ref=e628] [cursor=pointer]:
                    - cell [ref=e629]
                  - row [aria-hidden] [ref=e630] [cursor=pointer]:
                    - cell [ref=e631]
                  - row [aria-hidden] [ref=e632] [cursor=pointer]:
                    - cell [ref=e633]
                  - row [aria-hidden] [ref=e634] [cursor=pointer]:
                    - cell [ref=e635]
                  - row [aria-hidden] [ref=e636] [cursor=pointer]:
                    - cell [ref=e637]
                  - row [aria-hidden] [ref=e638] [cursor=pointer]:
                    - cell [ref=e639]
                  - row [aria-hidden] [ref=e640] [cursor=pointer]:
                    - cell [ref=e641]
                  - row [aria-hidden] [ref=e642] [cursor=pointer]:
                    - cell [ref=e643]
                  - row [aria-hidden] [ref=e644] [cursor=pointer]:
                    - cell [ref=e645]
                  - row [aria-hidden] [ref=e646] [cursor=pointer]:
                    - cell [ref=e647]
                  - row [aria-hidden] [ref=e648] [cursor=pointer]:
                    - cell [ref=e649]
                  - row [aria-hidden] [ref=e650] [cursor=pointer]:
                    - cell [ref=e651]
                  - row [aria-hidden] [ref=e652] [cursor=pointer]:
                    - cell [ref=e653]
                  - row [aria-hidden] [ref=e654] [cursor=pointer]:
                    - cell [ref=e655]
                  - row [aria-hidden] [ref=e656] [cursor=pointer]:
                    - cell [ref=e657]
                  - row [aria-hidden] [ref=e658] [cursor=pointer]:
                    - cell [ref=e659]
                  - row [aria-hidden] [ref=e660] [cursor=pointer]:
                    - cell [ref=e661]
                  - row [aria-hidden] [ref=e662] [cursor=pointer]:
                    - cell [ref=e663]
                  - row [aria-hidden] [ref=e664] [cursor=pointer]:
                    - cell [ref=e665]
                  - row [aria-hidden] [ref=e666] [cursor=pointer]:
                    - cell [ref=e667]
                  - row [aria-hidden] [ref=e668] [cursor=pointer]:
                    - cell [ref=e669]
                  - row [aria-hidden] [ref=e670] [cursor=pointer]:
                    - cell [ref=e671]
                  - row [aria-hidden] [ref=e672] [cursor=pointer]:
                    - cell [ref=e673]
                  - row [aria-hidden] [ref=e674] [cursor=pointer]:
                    - cell [ref=e675]
                  - row [aria-hidden] [ref=e676] [cursor=pointer]:
                    - cell [ref=e677]
                  - row [aria-hidden] [ref=e678] [cursor=pointer]:
                    - cell [ref=e679]
                  - row [aria-hidden] [ref=e680] [cursor=pointer]:
                    - cell [ref=e681]
                  - row [aria-hidden] [ref=e682] [cursor=pointer]:
                    - cell [ref=e683]
                  - row [aria-hidden] [ref=e684] [cursor=pointer]:
                    - cell [ref=e685]
                  - row [aria-hidden] [ref=e686] [cursor=pointer]:
                    - cell [ref=e687]
                  - row [aria-hidden] [ref=e688] [cursor=pointer]:
                    - cell [ref=e689]
                  - row [aria-hidden] [ref=e690] [cursor=pointer]:
                    - cell [ref=e691]
                  - row [aria-hidden] [ref=e692] [cursor=pointer]:
                    - cell [ref=e693]
              - navigation "Pagination" [ref=e694]:
                - button "First page, disabled" [disabled] [ref=e695]: <<
                - button "Previous page, disabled" [disabled] [ref=e696]: <
                - button "Page 1" [ref=e697] [cursor=pointer]: "1"
                - button "Page 2" [ref=e698] [cursor=pointer]: "2"
                - button "Page 3" [ref=e699] [cursor=pointer]: "3"
                - button "Page 4" [ref=e700] [cursor=pointer]: "4"
                - button "Page 5" [ref=e701] [cursor=pointer]: "5"
                - button "Page 6" [ref=e702] [cursor=pointer]: "6"
                - button "Page 7" [ref=e703] [cursor=pointer]: "7"
                - button "Page 8" [ref=e704] [cursor=pointer]: "8"
                - button "Page 9" [ref=e705] [cursor=pointer]: "9"
                - button "Next page" [ref=e706] [cursor=pointer]: ">"
                - button "Last page" [ref=e707] [cursor=pointer]: ">>"
            - generic [ref=e708]:
              - heading "Notifications Center" [level=2] [ref=e716]
              - generic [ref=e717]:
                - heading "Resources" [level=3] [ref=e724]
                - list [ref=e725]:
                  - listitem [ref=e726]:
                    - button [ref=e727] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e728]
                  - listitem [ref=e732]:
                    - button [ref=e733] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e734]
                  - listitem [ref=e738]:
                    - button [ref=e739] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e740]
                - button "View All" [ref=e745] [cursor=pointer]
      - contentinfo [ref=e746]:
        - generic [ref=e747]: Footer region,
        - link [ref=e748] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e749]
        - generic [ref=e750]:
          - link [ref=e751] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e752]
          - link [ref=e753] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e754]
          - link [ref=e755] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e756]
          - link [ref=e757] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e758]
        - generic [ref=e759]:
          - button "Leave Feedback" [ref=e760] [cursor=pointer]
          - generic [aria-hidden] [ref=e761]: "|"
          - link "Terms of Use" [ref=e762] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [aria-hidden] [ref=e763]: "|"
          - link "Privacy Policy" [ref=e764] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e765]: Footer region end
```

# Test source

```ts
  1350 |           delivery_order = 15;
  1351 | 
  1352 |           await this.listOfScores.nth(0).fill("10");
  1353 |         
  1354 |         } else if (isBlockBEnabled && isBlockCEnabled) {
  1355 | 
  1356 |           blockName = "Block C Total";
  1357 |           delivery_order = 17;
  1358 | 
  1359 |           await this.listOfScores.nth(1).fill("10");
  1360 | 
  1361 |           blockCHandled = true;
  1362 |         }
  1363 | 
  1364 |         this.testRunTimeData[blockName] = {
  1365 |           RT: getRT(startTimer),
  1366 |           Delivered_Order: delivery_order,
  1367 |           Response: "10",
  1368 |           Score: 10,
  1369 |         };
  1370 | 
  1371 |         await this.submitButton.click();
  1372 |         await this.scoreLaterContinue.click();
  1373 | 
  1374 |         try {
  1375 |           await this.letsBeginButton.waitFor({ state: "visible", timeout: 5000 });
  1376 |           if (await this.letsBeginButton.isVisible()) {
  1377 |             await this.letsBeginButton.click();
  1378 |             await this.page.waitForTimeout(2000);
  1379 |           }
  1380 |         } catch { }
  1381 | 
  1382 |         continue;
  1383 |       }
  1384 |  
  1385 |       if (/test complete|end of test/i.test(itemDetails)) break;
  1386 |    
  1387 |       if (itemDetails.startsWith("Introduction")) {
  1388 |         await this.page.waitForTimeout(1000);
  1389 |         this.testRunTimeData[itemDetails] = {
  1390 |           RT: getRT(startTimer),
  1391 |           Delivered_Order: delivery_order++,
  1392 |           Response: "",
  1393 |           Score: 0,
  1394 |         };
  1395 | 
  1396 |         await this.plainNextButtonOrEndButton.click();
  1397 |         await this.page.waitForLoadState("load");
  1398 |         continue;
  1399 |       }
  1400 |   
  1401 |       if (/^Item [1-5]\b/.test(itemDetails)) {
  1402 | 
  1403 |         let correctOption: string;
  1404 | 
  1405 |         if (testStemForm === 'WRTSMP.W5PA') {
  1406 |           const rawButtonText = await this.correctOptionButton.evaluate((el) => {
  1407 |             return el.textContent || '';
  1408 |           });
  1409 |           correctOption = rawButtonText.replace(/\s+/g, ' ').trim();
  1410 |           console.log('WRTSMP Response:', correctOption);
  1411 |         } else {
  1412 |           correctOption = await this.correctOptionButton.textContent() || '';
  1413 |         }
  1414 | 
  1415 |         await this.correctOptionButton.click();
  1416 | 
  1417 |         score = 1;
  1418 |         response = correctOption;
  1419 | 
  1420 |       } else if (/^Item ([6-9]|1[0-5])\b/.test(itemDetails)) {
  1421 | 
  1422 |         await this.page.waitForTimeout(1000);
  1423 |         score = 0;
  1424 |         response = "";
  1425 | 
  1426 |       } else {
  1427 |         continue;
  1428 |       }
  1429 | 
  1430 |       if (!blockCHandled && itemDetails === "Item 10") {
  1431 |         delivery_order = 12;
  1432 |       }
  1433 | 
  1434 |       if (itemDetails === "Item 11") {
  1435 |         delivery_order = 22;
  1436 |       }
  1437 |  
  1438 |       this.testRunTimeData[itemDetails] = {
  1439 |         RT: getRT(startTimer),
  1440 |         Delivered_Order: delivery_order,
  1441 |         Response: response,
  1442 |         Score: score,
  1443 |       };
  1444 | 
  1445 |       delivery_order++;
  1446 |  
  1447 |       if (itemDetails === "Item 10" || itemDetails === "Item 15") {
  1448 | 
  1449 |         await this.plainNextButtonOrEndButton.click();
> 1450 |         await this.scoreLater.click();
       |                               ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  1451 | 
  1452 |         await this.ScoreItemdetailsSWRTAC.first().waitFor({ state: "visible" });
  1453 | 
  1454 |       } else {
  1455 |         await this.plainNextButtonOrEndButton.click();
  1456 |       }
  1457 | 
  1458 |       await this.page.waitForLoadState("load");
  1459 |     }
  1460 | 
  1461 |     console.log("Final Data:", this.testRunTimeData);
  1462 |     return this.testRunTimeData;
  1463 |   }
  1464 |   async validateTheDownloadedReportWithRunTimeData(
  1465 |     absoluteFilePath: string,
  1466 |     textFileData,
  1467 |     examineeID: string,
  1468 |     examineeDOB: string,
  1469 |     runTimeData: TestRunTimeData,
  1470 |     testStemForm: string,
  1471 |     testSchemaFileName: string
  1472 |   ) {
  1473 |     let Examinee_ID: string[];
  1474 |     let Examinee_CAMOS: string[];
  1475 |     let Examiner_ID: string[];
  1476 |     let TestStemForm: string[];
  1477 |     const noTestCodeExamineePUB = [
  1478 |       'NWDREP.W5PA',
  1479 |       'SPELL.W5PA',
  1480 |       'ACDVOC.W5PA',
  1481 |       'MEMWRD.W5PA',
  1482 |       'NWDREP.W5PA',
  1483 |       'CALC.W5PA',
  1484 |       'SNDBLN.W5PA',
  1485 |       'SNDDEL.W5PA',
  1486 |       'SPLSND.W5PA',
  1487 |     ];
  1488 | 
  1489 |     const noTestCodeExaminerPUB = [];
  1490 | 
  1491 |     await this.utils
  1492 |       .parseCSV(absoluteFilePath)
  1493 |       .then(data => {
  1494 |         Examinee_ID = data['Examinee_ID'];
  1495 |         Examinee_CAMOS = data['Examinee_CAMOS'];
  1496 |         Examiner_ID = data['Examiner_ID'];
  1497 |         TestStemForm = data['TestStemForm'];
  1498 |       })
  1499 |       .catch(error => {
  1500 |         console.error('Error:', error);
  1501 |       });
  1502 | 
  1503 |     const textDataExaminee_ID: string = await this.utils.filterTheValues(Examinee_ID);
  1504 | 
  1505 |     if (
  1506 |       textDataExaminee_ID == '' ||
  1507 |       textDataExaminee_ID == undefined ||
  1508 |       textDataExaminee_ID == null ||
  1509 |       textDataExaminee_ID.includes('No examinees meet the criteria specified.')
  1510 |     ) {
  1511 |       throw new Error('The Examinee ID assertion failed, probable cause the Report could be empty.');
  1512 |     }
  1513 | 
  1514 |     softAssertPrint(examineeID, await this.utils.filterTheValues(Examinee_ID), 'Examinee ID');
  1515 | 
  1516 |     const EDOT = await this.utils.getTheDOBYearsBack(0, 'new Yark');
  1517 |     const { camos } = getCAMOS(examineeDOB, EDOT);
  1518 |     softAssertPrint(camos.toString(), await this.utils.filterTheValues(Examinee_CAMOS), 'Examinee_CAMOS');
  1519 | 
  1520 |     softAssertPrint(testStemForm, await this.utils.filterTheValues(TestStemForm), 'TestStemForm');
  1521 | 
  1522 |     const itemsData = await this.utils.readTestSchemaFile(
  1523 |       testSchemaFileName,
  1524 |       testStemForm,
  1525 |       noTestCodeExamineePUB,
  1526 |       noTestCodeExaminerPUB
  1527 |     );
  1528 | 
  1529 |     console.log(`itemsData =`, itemsData);
  1530 | 
  1531 |     await this.utils.validateAndAssert_CMSID_Examiner(textFileData, itemsData);
  1532 | 
  1533 |     if (!noTestCodeExamineePUB.includes(testStemForm)) {
  1534 |       await this.utils.validateAndAssert_CMSID_Examinee(textFileData, itemsData, testStemForm);
  1535 |     }
  1536 | 
  1537 |     await this.utils.validateAndAssert_Master_ID(textFileData, itemsData);
  1538 | 
  1539 |     // Transform runtime keys to match text file baseline for pattern tests (LETPAT/NUMPAT)
  1540 |     const transformedRunTimeData = await this.utils.remapPatternTestKeys(runTimeData, testStemForm, 'runtime');
  1541 | 
  1542 |     await this.utils.validateAndAssert_RT(textFileData, transformedRunTimeData);
  1543 | 
  1544 |     await this.utils.validateAndAssert_DeliveryOrder(textFileData, transformedRunTimeData);
  1545 | 
  1546 |     await this.utils.validateAndAssert_Response(textFileData, transformedRunTimeData, testStemForm,);
  1547 | 
  1548 |     await this.utils.validateAndAssert_Score(textFileData, transformedRunTimeData);
  1549 |   }
  1550 | }
```