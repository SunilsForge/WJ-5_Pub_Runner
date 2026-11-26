# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ReroutingandLeftNav/WRTSMP_Rerouting.spec.ts >>  WRTSMP Left Nav and Rerouting >> Grade 7 to Average Adult - Flag Item with Notes and Review scenario for Score Later for SSP3 Test Rerouting
- Location: src/tests/ReroutingandLeftNav/WRTSMP_Rerouting.spec.ts:10:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//button[@class=\'link-button\']').nth(1)

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
                      - button "Begin assignment Jimmy's Stuart Kreiger DDS_1795720398478 for N52229A18211, Jimmy" [disabled] [ref=e76]:
                        - generic [ref=e77]: N52229A18211, Jimmy
                    - cell [ref=e78]:
                      - generic [ref=e79]:
                        - button "Jimmy's Stuart Kreiger DDS_1795720398478" [disabled] [ref=e80]
                        - button "More info" [ref=e82]
                    - cell [ref=e83]:
                      - button "90 days" [disabled] [ref=e84]
                    - cell [ref=e85]:
                      - button "● Submitted" [disabled] [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Submitted
                    - cell [ref=e88]:
                      - button "Edit Assignment" [disabled] [ref=e89]
                      - button "Add Tests" [disabled] [ref=e90]
                      - button "Assignment actions" [ref=e91]
                  - row [ref=e92] [cursor=pointer]:
                    - cell [ref=e93]:
                      - button "Begin assignment Mittie's Angelina Pollich_1795720397212 for N9187A93537, Mittie" [disabled] [ref=e94]:
                        - generic [ref=e95]: N9187A93537, Mittie
                    - cell [ref=e96]:
                      - generic [ref=e97]:
                        - button "Mittie's Angelina Pollich_1795720397212" [disabled] [ref=e98]
                        - button "More info" [ref=e100]
                    - cell [ref=e101]:
                      - button "90 days" [disabled] [ref=e102]
                    - cell [ref=e103]:
                      - button "● In Progress ↩️ Resume Assignment" [disabled] [ref=e104]:
                        - generic [ref=e105]: ●
                        - text: In Progress↩️ Resume Assignment
                    - cell [ref=e106]:
                      - button "Edit Assignment" [disabled] [ref=e107]
                      - button "Add Tests" [disabled] [ref=e108]
                      - button "Assignment actions" [ref=e109]
                  - row [ref=e110] [cursor=pointer]:
                    - cell [ref=e111]:
                      - button "Begin assignment Andreanne's Nathan Skiles_1793355903189 for N12204A42356, Andreanne" [disabled] [ref=e112]:
                        - generic [ref=e113]: N12204A42356, Andreanne
                    - cell [ref=e114]:
                      - generic [ref=e115]:
                        - button "Andreanne's Nathan Skiles_1793355903189" [disabled] [ref=e116]
                        - button "More info" [ref=e118]
                    - cell [ref=e119]:
                      - button "63 days" [disabled] [ref=e120]
                    - cell [ref=e121]:
                      - button "● Submitted" [disabled] [ref=e122]:
                        - generic [ref=e123]: ●
                        - text: Submitted
                    - cell [ref=e124]:
                      - button "Edit Assignment" [disabled] [ref=e125]
                      - button "Add Tests" [disabled] [ref=e126]
                      - button "Assignment actions" [ref=e127]
                  - row [ref=e128] [cursor=pointer]:
                    - cell [ref=e129]:
                      - button "Begin assignment Janet's Oscar Rosenbaum_1793355644867 for N81470A85523, Janet" [disabled] [ref=e130]:
                        - generic [ref=e131]: N81470A85523, Janet
                    - cell [ref=e132]:
                      - generic [ref=e133]:
                        - button "Janet's Oscar Rosenbaum_1793355644867" [disabled] [ref=e134]
                        - button "More info" [ref=e136]
                    - cell [ref=e137]:
                      - button "63 days" [disabled] [ref=e138]
                    - cell [ref=e139]:
                      - button "● Submitted" [disabled] [ref=e140]:
                        - generic [ref=e141]: ●
                        - text: Submitted
                    - cell [ref=e142]:
                      - button "Edit Assignment" [disabled] [ref=e143]
                      - button "Add Tests" [disabled] [ref=e144]
                      - button "Assignment actions" [ref=e145]
                  - row [ref=e146] [cursor=pointer]:
                    - cell [ref=e147]:
                      - button "Begin assignment Cheyenne's Mrs. Sabrina Bergstrom_1793355162932 for N7524A63528, Cheyenne" [disabled] [ref=e148]:
                        - generic [ref=e149]: N7524A63528, Cheyenne
                    - cell [ref=e150]:
                      - generic [ref=e151]:
                        - button "Cheyenne's Mrs. Sabrina Bergstrom_1793355162932" [disabled] [ref=e152]
                        - button "More info" [ref=e154]
                    - cell [ref=e155]:
                      - button "63 days" [disabled] [ref=e156]
                    - cell [ref=e157]:
                      - button "● Submitted" [disabled] [ref=e158]:
                        - generic [ref=e159]: ●
                        - text: Submitted
                    - cell [ref=e160]:
                      - button "Edit Assignment" [disabled] [ref=e161]
                      - button "Add Tests" [disabled] [ref=e162]
                      - button "Assignment actions" [ref=e163]
                  - row [ref=e164] [cursor=pointer]:
                    - cell [ref=e165]:
                      - button "Begin assignment Collin's Miss Rochelle Farrell_1793354936358 for N4291A98065, Collin" [disabled] [ref=e166]:
                        - generic [ref=e167]: N4291A98065, Collin
                    - cell [ref=e168]:
                      - generic [ref=e169]:
                        - button "Collin's Miss Rochelle Farrell_1793354936358" [disabled] [ref=e170]
                        - button "More info" [ref=e172]
                    - cell [ref=e173]:
                      - button "63 days" [disabled] [ref=e174]
                    - cell [ref=e175]:
                      - button "● Submitted" [disabled] [ref=e176]:
                        - generic [ref=e177]: ●
                        - text: Submitted
                    - cell [ref=e178]:
                      - button "Edit Assignment" [disabled] [ref=e179]
                      - button "Add Tests" [disabled] [ref=e180]
                      - button "Assignment actions" [ref=e181]
                  - row [ref=e182] [cursor=pointer]:
                    - cell [ref=e183]:
                      - button "Begin assignment Fabian's Joanna Wehner_1790685560672 for N72339A18412, Fabian" [disabled] [ref=e184]:
                        - generic [ref=e185]: N72339A18412, Fabian
                    - cell [ref=e186]:
                      - generic [ref=e187]:
                        - button "Fabian's Joanna Wehner_1790685560672" [disabled] [ref=e188]
                        - button "More info" [ref=e190]
                    - cell [ref=e191]:
                      - button "32 days" [disabled] [ref=e192]
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
                      - button "Begin assignment Leo's Jake McCullough V_1790685039735 for N80408A83123, Leo" [disabled] [ref=e202]:
                        - generic [ref=e203]: N80408A83123, Leo
                    - cell [ref=e204]:
                      - generic [ref=e205]:
                        - button "Leo's Jake McCullough V_1790685039735" [disabled] [ref=e206]
                        - button "More info" [ref=e208]
                    - cell [ref=e209]:
                      - button "32 days" [disabled] [ref=e210]
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
                      - button "Begin assignment Michaela's Myrtle Bogisich_1790684756630 for N32615A78845, Michaela" [disabled] [ref=e220]:
                        - generic [ref=e221]: N32615A78845, Michaela
                    - cell [ref=e222]:
                      - generic [ref=e223]:
                        - button "Michaela's Myrtle Bogisich_1790684756630" [disabled] [ref=e224]
                        - button "More info" [ref=e226]
                    - cell [ref=e227]:
                      - button "32 days" [disabled] [ref=e228]
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
                      - button "Begin assignment Andres's Darryl Kuhn_1790684260914 for N69095A32066, Andres" [disabled] [ref=e238]:
                        - generic [ref=e239]: N69095A32066, Andres
                    - cell [ref=e240]:
                      - generic [ref=e241]:
                        - button "Andres's Darryl Kuhn_1790684260914" [disabled] [ref=e242]
                        - button "More info" [ref=e244]
                    - cell [ref=e245]:
                      - button "32 days" [disabled] [ref=e246]
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
                      - button "Begin assignment Roman's Franklin Murazik_1790683976711 for N44196A96746, Roman" [disabled] [ref=e256]:
                        - generic [ref=e257]: N44196A96746, Roman
                    - cell [ref=e258]:
                      - generic [ref=e259]:
                        - button "Roman's Franklin Murazik_1790683976711" [disabled] [ref=e260]
                        - button "More info" [ref=e262]
                    - cell [ref=e263]:
                      - button "32 days" [disabled] [ref=e264]
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
                      - button "Begin assignment Oleta's Kristi Gulgowski V_1790683706568 for N67404A28907, Oleta" [disabled] [ref=e274]:
                        - generic [ref=e275]: N67404A28907, Oleta
                    - cell [ref=e276]:
                      - generic [ref=e277]:
                        - button "Oleta's Kristi Gulgowski V_1790683706568" [disabled] [ref=e278]
                        - button "More info" [ref=e280]
                    - cell [ref=e281]:
                      - button "32 days" [disabled] [ref=e282]
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
                      - button "Begin assignment Magdalen's Clinton Jast_1790683307658 for N8427A56930, Magdalen" [disabled] [ref=e292]:
                        - generic [ref=e293]: N8427A56930, Magdalen
                    - cell [ref=e294]:
                      - generic [ref=e295]:
                        - button "Magdalen's Clinton Jast_1790683307658" [disabled] [ref=e296]
                        - button "More info" [ref=e298]
                    - cell [ref=e299]:
                      - button "32 days" [disabled] [ref=e300]
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
                      - button "Begin assignment Dedric's Stacey Hackett_1790682708640 for N57748A63767, Dedric" [disabled] [ref=e310]:
                        - generic [ref=e311]: N57748A63767, Dedric
                    - cell [ref=e312]:
                      - generic [ref=e313]:
                        - button "Dedric's Stacey Hackett_1790682708640" [disabled] [ref=e314]
                        - button "More info" [ref=e316]
                    - cell [ref=e317]:
                      - button "32 days" [disabled] [ref=e318]
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
                      - button "Begin assignment Kendra's Holly Cassin_1790682331771 for N96480A40622, Kendra" [disabled] [ref=e328]:
                        - generic [ref=e329]: N96480A40622, Kendra
                    - cell [ref=e330]:
                      - generic [ref=e331]:
                        - button "Kendra's Holly Cassin_1790682331771" [disabled] [ref=e332]
                        - button "More info" [ref=e334]
                    - cell [ref=e335]:
                      - button "32 days" [disabled] [ref=e336]
                    - cell [ref=e337]:
                      - button "● In Progress" [disabled] [ref=e338]:
                        - generic [ref=e339]: ●
                        - text: In Progress
                    - cell [ref=e340]:
                      - button "Edit Assignment" [disabled] [ref=e341]
                      - button "Add Tests" [disabled] [ref=e342]
                      - button "Assignment actions" [ref=e343]
                  - row [ref=e344] [cursor=pointer]:
                    - cell [ref=e345]:
                      - button "Begin assignment Oran's Fred Johns_1790678536277 for N74390A57275, Oran" [disabled] [ref=e346]:
                        - generic [ref=e347]: N74390A57275, Oran
                    - cell [ref=e348]:
                      - generic [ref=e349]:
                        - button "Oran's Fred Johns_1790678536277" [disabled] [ref=e350]
                        - button "More info" [ref=e352]
                    - cell [ref=e353]:
                      - button "32 days" [disabled] [ref=e354]
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
                      - button "Begin assignment Susana's Tyler Durgan_1790678272173 for N97696A67766, Susana" [disabled] [ref=e364]:
                        - generic [ref=e365]: N97696A67766, Susana
                    - cell [ref=e366]:
                      - generic [ref=e367]:
                        - button "Susana's Tyler Durgan_1790678272173" [disabled] [ref=e368]
                        - button "More info" [ref=e370]
                    - cell [ref=e371]:
                      - button "—" [disabled] [ref=e372]
                    - cell [ref=e373]:
                      - button "● Not Started" [disabled] [ref=e374]:
                        - generic [ref=e375]: ●
                        - text: Not Started
                    - cell [ref=e376]:
                      - button "Edit Assignment" [disabled] [ref=e377]
                      - button "Add Tests" [disabled] [ref=e378]
                      - button "Assignment actions" [ref=e379]
                  - row [ref=e380] [cursor=pointer]:
                    - cell [ref=e381]:
                      - button "Begin assignment Wilfred's Lionel Bednar_1790678139677 for N22218A51198, Wilfred" [disabled] [ref=e382]:
                        - generic [ref=e383]: N22218A51198, Wilfred
                    - cell [ref=e384]:
                      - generic [ref=e385]:
                        - button "Wilfred's Lionel Bednar_1790678139677" [disabled] [ref=e386]
                        - button "More info" [ref=e388]
                    - cell [ref=e389]:
                      - button "32 days" [disabled] [ref=e390]
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
                      - button "Begin assignment Pedro's Jean Price_1790677953469 for N72396A69034, Pedro" [disabled] [ref=e400]:
                        - generic [ref=e401]: N72396A69034, Pedro
                    - cell [ref=e402]:
                      - generic [ref=e403]:
                        - button "Pedro's Jean Price_1790677953469" [disabled] [ref=e404]
                        - button "More info" [ref=e406]
                    - cell [ref=e407]:
                      - button "32 days" [disabled] [ref=e408]
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
                      - button "Begin assignment Rowan's Darin Hamill_1790677863618 for N18146A70002, Rowan" [disabled] [ref=e418]:
                        - generic [ref=e419]: N18146A70002, Rowan
                    - cell [ref=e420]:
                      - generic [ref=e421]:
                        - button "Rowan's Darin Hamill_1790677863618" [disabled] [ref=e422]
                        - button "More info" [ref=e424]
                    - cell [ref=e425]:
                      - button "32 days" [disabled] [ref=e426]
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
            - generic [ref=e560]:
              - heading "Notifications Center" [level=2] [ref=e568]
              - generic [ref=e569]:
                - heading "Resources" [level=3] [ref=e576]
                - list [ref=e577]:
                  - listitem [ref=e578]:
                    - button [ref=e579] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e580]
                  - listitem [ref=e584]:
                    - button [ref=e585] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e586]
                  - listitem [ref=e590]:
                    - button [ref=e591] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e592]
                - button "View All" [ref=e597] [cursor=pointer]
      - contentinfo [ref=e598]:
        - generic [ref=e599]: Footer region,
        - link [ref=e600] [cursor=pointer]:
          - /url: https://www.riversideinsights.com
          - img "Riverside Insights Website" [ref=e601]
        - generic [ref=e602]:
          - link [ref=e603] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e604]
          - link [ref=e605] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e606]
          - link [ref=e607] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e608]
          - link [ref=e609] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e610]
        - generic [ref=e611]:
          - button "Leave Feedback" [ref=e612] [cursor=pointer]
          - generic [aria-hidden] [ref=e613]: "|"
          - link "Terms of Use" [ref=e614] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [aria-hidden] [ref=e615]: "|"
          - link "Privacy Policy" [ref=e616] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e617]: Footer region end
```

# Test source

```ts
  5583 | 
  5584 |       if (testName === "SWRTFL") {
  5585 |         const index = sampleItems.indexOf(currentItemText?.trim() ?? "");
  5586 |         if (index === -1) {
  5587 |           console.log("Unrecognized sample item. Skipping...");
  5588 |           break;
  5589 |         }
  5590 | 
  5591 |         const isLastItem = index === sampleItems.length - 1;
  5592 |         const isFirstThreeSample = index < 3;
  5593 | 
  5594 |         await this.incorrectOptionButton.nth(0).click();
  5595 | 
  5596 |         if (isFirstThreeSample) {
  5597 |           await this.flagIcon.waitFor({ state: "visible", timeout: 5000 });
  5598 |           await this.flagIcon.click();
  5599 |           await this.openNotesIcon.click();
  5600 | 
  5601 |           let noteText = "";
  5602 |           if (index === 0) noteText = "Item";
  5603 |           else if (index === 1) noteText = "Test";
  5604 |           else if (index === 2) noteText = "Test Set";
  5605 | 
  5606 |           await this.notesText.waitFor({ state: "visible", timeout: 5000 });
  5607 |           await this.notesText.fill(noteText);
  5608 | 
  5609 |           await this.notesSaveButton.waitFor({ state: "visible", timeout: 5000 });
  5610 |           await this.notesSaveButton.click();
  5611 | 
  5612 |           console.log(`Flagged & added note for sample item ${sampleItems[index]}: ${noteText}`);
  5613 |         }
  5614 | 
  5615 |         if (isLastItem) {
  5616 |           console.log(`Last sample item reached. Performing final actions for SWRTFL...`);
  5617 |           await this.plainNextButtonOrEndButton.click();
  5618 |           await this.flagItemOrScoreCheckItemOrEndTestReviewLink.nth(1).click();
  5619 |           await this.page.waitForTimeout(1000);
  5620 |           await this.plainNextButtonOrEndButton.click();
  5621 | 
  5622 |           console.log("Waiting for 5 minutes before scoring...");
  5623 |           await this.timeIsUp.waitFor({ state: "visible", timeout: 330000 });
  5624 | 		      expect(await this.timeIsUp.textContent()).toContain("Time is up");
  5625 | 
  5626 |           const count = await this.listOfScores.count();
  5627 |           for (let j = 0; j < count; j++) {
  5628 |             const input = this.listOfScores.nth(j);
  5629 |             if (!(await input.isDisabled())) {
  5630 |               await input.click();
  5631 |               await input.fill(testItemsScore[0].toString());
  5632 |             }
  5633 |           }
  5634 | 
  5635 |           await this.submitButton.isEnabled();
  5636 |           await this.page.waitForTimeout(1000);
  5637 |           await this.submitButton.click();
  5638 |           await this.page.waitForTimeout(2000);
  5639 | 
  5640 |           for (let k = 0; k < 3; k++) {
  5641 |             await this.flagItemOrScoreCheckItemOrEndTestReviewLink.nth(1).click();
  5642 |             await this.flagIcon.click();
  5643 |             await this.plainNextButtonOrEndButton.click();
  5644 |             if (k === 2) return;
  5645 |           }
  5646 |         } else {
  5647 |           await this.plainNextButtonOrEndButton.click();
  5648 |           await this.page.waitForTimeout(1000);
  5649 |         }
  5650 |       } else {
  5651 |         const currentItemNumber = parseInt(currentItemText?.match(/\d+/)?.[0] ?? "-1", 10);
  5652 |         console.log(`Parsed item number: ${currentItemNumber}`);
  5653 | 
  5654 |         if (currentItemNumber === -1 || currentItemNumber > endItem) {
  5655 |           console.log(`Session complete for ${start}-${endItem}`);
  5656 |           break;
  5657 |         }
  5658 | 
  5659 |         if (currentItemNumber < start + 3) {
  5660 |           await this.flagIcon.waitFor({ state: "visible", timeout: 5000 });
  5661 |           await this.flagIcon.click();
  5662 |           await this.openNotesIcon.click();
  5663 | 
  5664 |           let noteText = "";
  5665 |           if (currentItemNumber === start) noteText = "Item";
  5666 |           else if (currentItemNumber === start + 1) noteText = "Test";
  5667 |           else if (currentItemNumber === start + 2) noteText = "Test Set";
  5668 | 
  5669 |           await this.notesText.waitFor({ state: "visible", timeout: 5000 });
  5670 |           await this.notesText.fill(noteText);
  5671 | 
  5672 |           await this.notesSaveButton.waitFor({ state: "visible", timeout: 5000 });
  5673 |           await this.notesSaveButton.click();
  5674 | 
  5675 |           console.log(`Flagged & added note for item ${currentItemNumber}: ${noteText}`);
  5676 |         }
  5677 | 
  5678 |         if (currentItemNumber === endItem) {
  5679 |           console.log(`Last item (${endItem}) reached. Ending session...`);
  5680 |           await this.plainNextButtonOrEndButton.click();
  5681 | 
  5682 |           for (let k = 0; k < 3; k++) {
> 5683 |             await this.flagItemOrScoreCheckItemOrEndTestReviewLink.nth(1).click();
       |                                                                           ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  5684 |             await this.flagIcon.click();
  5685 |             await this.plainNextButtonOrEndButton.click();
  5686 |           }
  5687 |           await this.page.waitForTimeout(1000);
  5688 |           await this.endSessionForScoreLaterCheck();
  5689 | 
  5690 |           const count = await this.listOfScores.count();
  5691 |           for (let j = 0; j < count; j++) {
  5692 |             const input = this.listOfScores.nth(j);
  5693 |             if (!(await input.isDisabled())) {
  5694 |               await input.click();
  5695 |               await input.fill(testItemsScore[0].toString());
  5696 |             }
  5697 |           }
  5698 | 
  5699 |           await this.submitButton.isEnabled();
  5700 |           await this.page.waitForTimeout(1000);
  5701 |           await this.submitButton.click();
  5702 |           await this.continueButton.click();
  5703 |           await this.page.waitForTimeout(2000);
  5704 |           return;
  5705 |         } else {
  5706 |           await this.plainNextButtonOrEndButton.click();
  5707 |           await this.page.waitForTimeout(1000);
  5708 |         }
  5709 |       }
  5710 |     }
  5711 |   }
  5712 | }
  5713 | 
  5714 |   async reroutingUsingLeftNavForScoreLaterTests(
  5715 |     typeOfTest: string,
  5716 |     totalItems: number,
  5717 |     logicIndex: number,
  5718 |     incorrectIndex: number,
  5719 |     index: number,
  5720 |     testStemForm: string,
  5721 |     correctIndex: number,
  5722 |     testItemsScore: number[],
  5723 |   ) {
  5724 |     let correctCount = 0;
  5725 |     let incorrectCount = 0;
  5726 |     let isSSP1: boolean = false;
  5727 | 
  5728 |     const notesActions = [
  5729 |       { note: "Item", selectOption: null },
  5730 |       { note: "Test", selectOption: "test" },
  5731 |       { note: "Test Set", selectOption: "testBlock" }
  5732 |     ];
  5733 | 
  5734 |     await this.page.waitForTimeout(1000);
  5735 |     while (await this.plainNextButtonOrEndButton.isVisible()) {
  5736 |       await this.page.waitForTimeout(2000);
  5737 |       const itemDetails: string = (await this.itemDetails.textContent())!;
  5738 |       console.log(itemDetails);
  5739 |       await this.page.waitForTimeout(2000);
  5740 | 
  5741 |       if (typeOfTest.match(/Flag Item with Notes and Review scenario for Score Later/i)) {
  5742 |         if (testStemForm.match(/LWRTFL.W5PA|LWRTFL.W5PX/)) {
  5743 |           for (let k = 1; k <= 2; k++) {
  5744 |             let currentItemDetails = await this.itemDetails.textContent();
  5745 | 
  5746 |             await this.page.waitForTimeout(2000);
  5747 |             if (currentItemDetails.match(/Item 1/i)) {
  5748 |               await this.startTimerButton.click();
  5749 |               await this.flagIcon.click();
  5750 |               await this.stopTimerButton.click();
  5751 |               await this.listOfScores.nth(0).click();
  5752 |               await this.listOfScores.nth(0).fill("26");
  5753 |               await this.submitButton.click();
  5754 |               await this.page.waitForTimeout(2000);
  5755 |             } else if (currentItemDetails.match(/Item 2/i)) {
  5756 |               await this.startTimerButton.click();
  5757 |               await this.flagIcon.click();
  5758 |               await this.stopTimerButton.click();
  5759 |               await this.listOfScores.nth(1).click();
  5760 |               await this.listOfScores.nth(1).fill("26");
  5761 |               await this.page.waitForTimeout(2000);
  5762 |               await this.submitButton.click();
  5763 |               await this.page.waitForTimeout(2000);
  5764 |             }
  5765 | 
  5766 |           }
  5767 |           for (let l = 1; l <= index; l++) {
  5768 |             await this.flagItemOrScoreCheckItemOrEndTestReviewLink.nth(1).click();
  5769 |             await this.flagIcon.click();
  5770 |             await expect.soft(this.plainNextButtonOrEndButton).toHaveText("End Test");
  5771 |             if (l < index) {
  5772 |               await this.plainNextButtonOrEndButton.click();
  5773 |             }
  5774 |           }
  5775 | 
  5776 | 
  5777 |         } else if (testStemForm.match(/MTHFLU.W5PA|MTHFLU.W5PB/)) {
  5778 |           if (itemDetails.startsWith("Practice")) {
  5779 |             await this.handlePracticeItemsForScoreLaterTests();
  5780 |             await this.listOfScores.nth(0).click();
  5781 |             await this.listOfScores.nth(0).fill("5");
  5782 |           } else if (itemDetails.startsWith("Test Introduction")) {
  5783 |             const testNotesAction = notesActions.find(
```