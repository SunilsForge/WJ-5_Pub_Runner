# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/APPROB_Pub.spec.ts >>  APPROB.W5PA Test Data Export Automation  >> @TestDe For Age 4 - All correct scenario login as AH Conduct test as Examiner and generate reports
- Location: src/tests/test_dataExport/APPROB_Pub.spec.ts:16:5

# Error details

```
TimeoutError: locator.textContent: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('.items-container div span').last()

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
              - heading "Hello 02PwAut25AH ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "02PwAut25AH ln" [ref=e10] [cursor=pointer]
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
                      - button "Begin assignment Sydnie's Broad Achievement for N10015A27276, Sydnie" [ref=e76]:
                        - generic [ref=e77]: N10015A27276, Sydnie
                    - cell [ref=e78]:
                      - generic [ref=e79]:
                        - button "Sydnie's Broad Achievement" [ref=e80]
                        - button "More info" [ref=e82]
                    - cell [ref=e83]:
                      - button "0 days" [ref=e84]
                    - cell [ref=e85]:
                      - button "● Expired" [ref=e86]:
                        - generic [ref=e87]: ●
                        - text: Expired
                    - cell [ref=e88]:
                      - button "Generate Report" [ref=e89]
                      - button "Assignment actions" [ref=e90]
                  - row [ref=e91] [cursor=pointer]:
                    - cell [ref=e92]:
                      - button "Begin assignment Melyssa's Form A (3) for N51056A17466, Melyssa" [disabled] [ref=e93]:
                        - generic [ref=e94]: N51056A17466, Melyssa
                    - cell [ref=e95]:
                      - generic [ref=e96]:
                        - button "Melyssa's Form A (3)" [disabled] [ref=e97]
                        - button "More info" [ref=e99]
                    - cell [ref=e100]:
                      - button "89 days" [disabled] [ref=e101]
                    - cell [ref=e102]:
                      - button "● In Progress" [disabled] [ref=e103]:
                        - generic [ref=e104]: ●
                        - text: In Progress
                    - cell [ref=e105]:
                      - button "Edit Assignment" [disabled] [ref=e106]
                      - button "Add Tests" [disabled] [ref=e107]
                      - button "Assignment actions" [ref=e108]
                  - row [ref=e109] [cursor=pointer]:
                    - cell [ref=e110]:
                      - button "Begin assignment Jules's Form A (4) for N13171A3522, Jules" [disabled] [ref=e111]:
                        - generic [ref=e112]: N13171A3522, Jules
                    - cell [ref=e113]:
                      - generic [ref=e114]:
                        - button "Jules's Form A (4)" [disabled] [ref=e115]
                        - button "More info" [ref=e117]
                    - cell [ref=e118]:
                      - button "89 days" [disabled] [ref=e119]
                    - cell [ref=e120]:
                      - button "● In Progress" [disabled] [ref=e121]:
                        - generic [ref=e122]: ●
                        - text: In Progress
                    - cell [ref=e123]:
                      - button "Edit Assignment" [disabled] [ref=e124]
                      - button "Add Tests" [disabled] [ref=e125]
                      - button "Assignment actions" [ref=e126]
                  - row [ref=e127] [cursor=pointer]:
                    - cell [ref=e128]:
                      - button "Begin assignment Jordane's Form A for N24166A4826, Jordane" [disabled] [ref=e129]:
                        - generic [ref=e130]: N24166A4826, Jordane
                    - cell [ref=e131]:
                      - generic [ref=e132]:
                        - button "Jordane's Form A" [disabled] [ref=e133]
                        - button "More info" [ref=e135]
                    - cell [ref=e136]:
                      - button "89 days" [disabled] [ref=e137]
                    - cell [ref=e138]:
                      - button "● In Progress" [disabled] [ref=e139]:
                        - generic [ref=e140]: ●
                        - text: In Progress
                    - cell [ref=e141]:
                      - button "Edit Assignment" [disabled] [ref=e142]
                      - button "Add Tests" [disabled] [ref=e143]
                      - button "Assignment actions" [ref=e144]
                  - row [ref=e145] [cursor=pointer]:
                    - cell [ref=e146]:
                      - button "Begin assignment Johnnie's Form A (3) for N30698A26278, Johnnie" [disabled] [ref=e147]:
                        - generic [ref=e148]: N30698A26278, Johnnie
                    - cell [ref=e149]:
                      - generic [ref=e150]:
                        - button "Johnnie's Form A (3)" [disabled] [ref=e151]
                        - button "More info" [ref=e153]
                    - cell [ref=e154]:
                      - button "89 days" [disabled] [ref=e155]
                    - cell [ref=e156]:
                      - button "● In Progress" [disabled] [ref=e157]:
                        - generic [ref=e158]: ●
                        - text: In Progress
                    - cell [ref=e159]:
                      - button "Edit Assignment" [disabled] [ref=e160]
                      - button "Add Tests" [disabled] [ref=e161]
                      - button "Assignment actions" [ref=e162]
                  - row [ref=e163] [cursor=pointer]:
                    - cell [ref=e164]:
                      - button "Begin assignment Bernhard's Form A (1) for N39030A89291, Bernhard" [disabled] [ref=e165]:
                        - generic [ref=e166]: N39030A89291, Bernhard
                    - cell [ref=e167]:
                      - generic [ref=e168]:
                        - button "Bernhard's Form A (1)" [disabled] [ref=e169]
                        - button "More info" [ref=e171]
                    - cell [ref=e172]:
                      - button "89 days" [disabled] [ref=e173]
                    - cell [ref=e174]:
                      - button "● In Progress" [disabled] [ref=e175]:
                        - generic [ref=e176]: ●
                        - text: In Progress
                    - cell [ref=e177]:
                      - button "Edit Assignment" [disabled] [ref=e178]
                      - button "Add Tests" [disabled] [ref=e179]
                      - button "Assignment actions" [ref=e180]
                  - row [ref=e181] [cursor=pointer]:
                    - cell [ref=e182]:
                      - button "Begin assignment Bettie's Form A (1) for N10090A66934, Bettie" [disabled] [ref=e183]:
                        - generic [ref=e184]: N10090A66934, Bettie
                    - cell [ref=e185]:
                      - generic [ref=e186]:
                        - button "Bettie's Form A (1)" [disabled] [ref=e187]
                        - button "More info" [ref=e189]
                    - cell [ref=e190]:
                      - button "89 days" [disabled] [ref=e191]
                    - cell [ref=e192]:
                      - button "● In Progress" [disabled] [ref=e193]:
                        - generic [ref=e194]: ●
                        - text: In Progress
                    - cell [ref=e195]:
                      - button "Edit Assignment" [disabled] [ref=e196]
                      - button "Add Tests" [disabled] [ref=e197]
                      - button "Assignment actions" [ref=e198]
                  - row [ref=e199] [cursor=pointer]:
                    - cell [ref=e200]:
                      - button "Begin assignment Laney's Juana Kunde_1793340931508 for N41447A66567, Laney" [disabled] [ref=e201]:
                        - generic [ref=e202]: N41447A66567, Laney
                    - cell [ref=e203]:
                      - generic [ref=e204]:
                        - button "Laney's Juana Kunde_1793340931508" [disabled] [ref=e205]
                        - button "More info" [ref=e207]
                    - cell [ref=e208]:
                      - button "68 days" [disabled] [ref=e209]
                    - cell [ref=e210]:
                      - button "● Submitted" [disabled] [ref=e211]:
                        - generic [ref=e212]: ●
                        - text: Submitted
                    - cell [ref=e213]:
                      - button "Edit Assignment" [disabled] [ref=e214]
                      - button "Add Tests" [disabled] [ref=e215]
                      - button "Assignment actions" [ref=e216]
                  - row [ref=e217] [cursor=pointer]:
                    - cell [ref=e218]:
                      - button "Begin assignment Mckenna's Form A (1) for N33545A72345, Mckenna" [disabled] [ref=e219]:
                        - generic [ref=e220]: N33545A72345, Mckenna
                    - cell [ref=e221]:
                      - generic [ref=e222]:
                        - button "Mckenna's Form A (1)" [disabled] [ref=e223]
                        - button "More info" [ref=e225]
                    - cell [ref=e226]:
                      - button "68 days" [disabled] [ref=e227]
                    - cell [ref=e228]:
                      - button "● Submitted" [disabled] [ref=e229]:
                        - generic [ref=e230]: ●
                        - text: Submitted
                    - cell [ref=e231]:
                      - button "Edit Assignment" [disabled] [ref=e232]
                      - button "Add Tests" [disabled] [ref=e233]
                      - button "Assignment actions" [ref=e234]
                  - row [ref=e235] [cursor=pointer]:
                    - cell [ref=e236]:
                      - button "Begin assignment Tania's Form A (1) for N2002A44141, Tania" [disabled] [ref=e237]:
                        - generic [ref=e238]: N2002A44141, Tania
                    - cell [ref=e239]:
                      - generic [ref=e240]:
                        - button "Tania's Form A (1)" [disabled] [ref=e241]
                        - button "More info" [ref=e243]
                    - cell [ref=e244]:
                      - button "68 days" [disabled] [ref=e245]
                    - cell [ref=e246]:
                      - button "● In Progress" [disabled] [ref=e247]:
                        - generic [ref=e248]: ●
                        - text: In Progress
                    - cell [ref=e249]:
                      - button "Edit Assignment" [disabled] [ref=e250]
                      - button "Add Tests" [disabled] [ref=e251]
                      - button "Assignment actions" [ref=e252]
                  - row [ref=e253] [cursor=pointer]:
                    - cell [ref=e254]:
                      - button "Begin assignment Ole's Form A (3) for N73749A5415, Ole" [disabled] [ref=e255]:
                        - generic [ref=e256]: N73749A5415, Ole
                    - cell [ref=e257]:
                      - generic [ref=e258]:
                        - button "Ole's Form A (3)" [disabled] [ref=e259]
                        - button "More info" [ref=e261]
                    - cell [ref=e262]:
                      - button "68 days" [disabled] [ref=e263]
                    - cell [ref=e264]:
                      - button "● Submitted" [disabled] [ref=e265]:
                        - generic [ref=e266]: ●
                        - text: Submitted
                    - cell [ref=e267]:
                      - button "Edit Assignment" [disabled] [ref=e268]
                      - button "Add Tests" [disabled] [ref=e269]
                      - button "Assignment actions" [ref=e270]
                  - row [ref=e271] [cursor=pointer]:
                    - cell [ref=e272]:
                      - button "Begin assignment Candelario's Form A for N95037A50637, Candelario" [disabled] [ref=e273]:
                        - generic [ref=e274]: N95037A50637, Candelario
                    - cell [ref=e275]:
                      - generic [ref=e276]:
                        - button "Candelario's Form A" [disabled] [ref=e277]
                        - button "More info" [ref=e279]
                    - cell [ref=e280]:
                      - button "67 days" [disabled] [ref=e281]
                    - cell [ref=e282]:
                      - button "● Submitted" [disabled] [ref=e283]:
                        - generic [ref=e284]: ●
                        - text: Submitted
                    - cell [ref=e285]:
                      - button "Edit Assignment" [disabled] [ref=e286]
                      - button "Add Tests" [disabled] [ref=e287]
                      - button "Assignment actions" [ref=e288]
                  - row [ref=e289] [cursor=pointer]:
                    - cell [ref=e290]:
                      - button "Begin assignment Meta's Form A (2) for N80987A54200, Meta" [disabled] [ref=e291]:
                        - generic [ref=e292]: N80987A54200, Meta
                    - cell [ref=e293]:
                      - generic [ref=e294]:
                        - button "Meta's Form A (2)" [disabled] [ref=e295]
                        - button "More info" [ref=e297]
                    - cell [ref=e298]:
                      - button "67 days" [disabled] [ref=e299]
                    - cell [ref=e300]:
                      - button "● Submitted" [disabled] [ref=e301]:
                        - generic [ref=e302]: ●
                        - text: Submitted
                    - cell [ref=e303]:
                      - button "Edit Assignment" [disabled] [ref=e304]
                      - button "Add Tests" [disabled] [ref=e305]
                      - button "Assignment actions" [ref=e306]
                  - row [ref=e307] [cursor=pointer]:
                    - cell [ref=e308]:
                      - button "Begin assignment Kieran's Form A (1) for N66868A83387, Kieran" [disabled] [ref=e309]:
                        - generic [ref=e310]: N66868A83387, Kieran
                    - cell [ref=e311]:
                      - generic [ref=e312]:
                        - button "Kieran's Form A (1)" [disabled] [ref=e313]
                        - button "More info" [ref=e315]
                    - cell [ref=e316]:
                      - button "67 days" [disabled] [ref=e317]
                    - cell [ref=e318]:
                      - button "● Submitted" [disabled] [ref=e319]:
                        - generic [ref=e320]: ●
                        - text: Submitted
                    - cell [ref=e321]:
                      - button "Edit Assignment" [disabled] [ref=e322]
                      - button "Add Tests" [disabled] [ref=e323]
                      - button "Assignment actions" [ref=e324]
                  - row [ref=e325] [cursor=pointer]:
                    - cell [ref=e326]:
                      - button "Begin assignment Americo's Form A for N62877A59963, Americo" [disabled] [ref=e327]:
                        - generic [ref=e328]: N62877A59963, Americo
                    - cell [ref=e329]:
                      - generic [ref=e330]:
                        - button "Americo's Form A" [disabled] [ref=e331]
                        - button "More info" [ref=e333]
                    - cell [ref=e334]:
                      - button "67 days" [disabled] [ref=e335]
                    - cell [ref=e336]:
                      - button "● Submitted" [disabled] [ref=e337]:
                        - generic [ref=e338]: ●
                        - text: Submitted
                    - cell [ref=e339]:
                      - button "Edit Assignment" [disabled] [ref=e340]
                      - button "Add Tests" [disabled] [ref=e341]
                      - button "Assignment actions" [ref=e342]
                  - row [ref=e343] [cursor=pointer]:
                    - cell [ref=e344]:
                      - button "Begin assignment Eleazar's Form A (2) for N50407A1877, Eleazar" [disabled] [ref=e345]:
                        - generic [ref=e346]: N50407A1877, Eleazar
                    - cell [ref=e347]:
                      - generic [ref=e348]:
                        - button "Eleazar's Form A (2)" [disabled] [ref=e349]
                        - button "More info" [ref=e351]
                    - cell [ref=e352]:
                      - button "67 days" [disabled] [ref=e353]
                    - cell [ref=e354]:
                      - button "● Submitted" [disabled] [ref=e355]:
                        - generic [ref=e356]: ●
                        - text: Submitted
                    - cell [ref=e357]:
                      - button "Edit Assignment" [disabled] [ref=e358]
                      - button "Add Tests" [disabled] [ref=e359]
                      - button "Assignment actions" [ref=e360]
                  - row [ref=e361] [cursor=pointer]:
                    - cell [ref=e362]:
                      - button "Begin assignment Michelle's Form A (3) for N15103A89202, Michelle" [disabled] [ref=e363]:
                        - generic [ref=e364]: N15103A89202, Michelle
                    - cell [ref=e365]:
                      - generic [ref=e366]:
                        - button "Michelle's Form A (3)" [disabled] [ref=e367]
                        - button "More info" [ref=e369]
                    - cell [ref=e370]:
                      - button "66 days" [disabled] [ref=e371]
                    - cell [ref=e372]:
                      - button "● Submitted" [disabled] [ref=e373]:
                        - generic [ref=e374]: ●
                        - text: Submitted
                    - cell [ref=e375]:
                      - button "Edit Assignment" [disabled] [ref=e376]
                      - button "Add Tests" [disabled] [ref=e377]
                      - button "Assignment actions" [ref=e378]
                  - row [ref=e379] [cursor=pointer]:
                    - cell [ref=e380]:
                      - button "Begin assignment Frankie's Form A for N38414A21601, Frankie" [disabled] [ref=e381]:
                        - generic [ref=e382]: N38414A21601, Frankie
                    - cell [ref=e383]:
                      - generic [ref=e384]:
                        - button "Frankie's Form A" [disabled] [ref=e385]
                        - button "More info" [ref=e387]
                    - cell [ref=e388]:
                      - button "66 days" [disabled] [ref=e389]
                    - cell [ref=e390]:
                      - button "● Submitted" [disabled] [ref=e391]:
                        - generic [ref=e392]: ●
                        - text: Submitted
                    - cell [ref=e393]:
                      - button "Edit Assignment" [disabled] [ref=e394]
                      - button "Add Tests" [disabled] [ref=e395]
                      - button "Assignment actions" [ref=e396]
                  - row [ref=e397] [cursor=pointer]:
                    - cell [ref=e398]:
                      - button "Begin assignment Alda's Form A (1) for N79431A42115, Alda" [disabled] [ref=e399]:
                        - generic [ref=e400]: N79431A42115, Alda
                    - cell [ref=e401]:
                      - generic [ref=e402]:
                        - button "Alda's Form A (1)" [disabled] [ref=e403]
                        - button "More info" [ref=e405]
                    - cell [ref=e406]:
                      - button "66 days" [disabled] [ref=e407]
                    - cell [ref=e408]:
                      - button "● Submitted" [disabled] [ref=e409]:
                        - generic [ref=e410]: ●
                        - text: Submitted
                    - cell [ref=e411]:
                      - button "Edit Assignment" [disabled] [ref=e412]
                      - button "Add Tests" [disabled] [ref=e413]
                      - button "Assignment actions" [ref=e414]
                  - row [ref=e415] [cursor=pointer]:
                    - cell [ref=e416]:
                      - button "Begin assignment Karine's Form A (2) for N24007A64178, Karine" [disabled] [ref=e417]:
                        - generic [ref=e418]: N24007A64178, Karine
                    - cell [ref=e419]:
                      - generic [ref=e420]:
                        - button "Karine's Form A (2)" [disabled] [ref=e421]
                        - button "More info" [ref=e423]
                    - cell [ref=e424]:
                      - button "66 days" [disabled] [ref=e425]
                    - cell [ref=e426]:
                      - button "● Submitted" [disabled] [ref=e427]:
                        - generic [ref=e428]: ●
                        - text: Submitted
                    - cell [ref=e429]:
                      - button "Edit Assignment" [disabled] [ref=e430]
                      - button "Add Tests" [disabled] [ref=e431]
                      - button "Assignment actions" [ref=e432]
                  - row [aria-hidden] [ref=e433] [cursor=pointer]:
                    - cell [ref=e434]
                  - row [aria-hidden] [ref=e435] [cursor=pointer]:
                    - cell [ref=e436]
                  - row [aria-hidden] [ref=e437] [cursor=pointer]:
                    - cell [ref=e438]
                  - row [aria-hidden] [ref=e439] [cursor=pointer]:
                    - cell [ref=e440]
                  - row [aria-hidden] [ref=e441] [cursor=pointer]:
                    - cell [ref=e442]
                  - row [aria-hidden] [ref=e443] [cursor=pointer]:
                    - cell [ref=e444]
                  - row [aria-hidden] [ref=e445] [cursor=pointer]:
                    - cell [ref=e446]
                  - row [aria-hidden] [ref=e447] [cursor=pointer]:
                    - cell [ref=e448]
                  - row [aria-hidden] [ref=e449] [cursor=pointer]:
                    - cell [ref=e450]
                  - row [aria-hidden] [ref=e451] [cursor=pointer]:
                    - cell [ref=e452]
                  - row [aria-hidden] [ref=e453] [cursor=pointer]:
                    - cell [ref=e454]
                  - row [aria-hidden] [ref=e455] [cursor=pointer]:
                    - cell [ref=e456]
                  - row [aria-hidden] [ref=e457] [cursor=pointer]:
                    - cell [ref=e458]
                  - row [aria-hidden] [ref=e459] [cursor=pointer]:
                    - cell [ref=e460]
                  - row [aria-hidden] [ref=e461] [cursor=pointer]:
                    - cell [ref=e462]
                  - row [aria-hidden] [ref=e463] [cursor=pointer]:
                    - cell [ref=e464]
                  - row [aria-hidden] [ref=e465] [cursor=pointer]:
                    - cell [ref=e466]
                  - row [aria-hidden] [ref=e467] [cursor=pointer]:
                    - cell [ref=e468]
                  - row [aria-hidden] [ref=e469] [cursor=pointer]:
                    - cell [ref=e470]
                  - row [aria-hidden] [ref=e471] [cursor=pointer]:
                    - cell [ref=e472]
                  - row [aria-hidden] [ref=e473] [cursor=pointer]:
                    - cell [ref=e474]
                  - row [aria-hidden] [ref=e475] [cursor=pointer]:
                    - cell [ref=e476]
                  - row [aria-hidden] [ref=e477] [cursor=pointer]:
                    - cell [ref=e478]
                  - row [aria-hidden] [ref=e479] [cursor=pointer]:
                    - cell [ref=e480]
                  - row [aria-hidden] [ref=e481] [cursor=pointer]:
                    - cell [ref=e482]
                  - row [aria-hidden] [ref=e483] [cursor=pointer]:
                    - cell [ref=e484]
                  - row [aria-hidden] [ref=e485] [cursor=pointer]:
                    - cell [ref=e486]
                  - row [aria-hidden] [ref=e487] [cursor=pointer]:
                    - cell [ref=e488]
                  - row [aria-hidden] [ref=e489] [cursor=pointer]:
                    - cell [ref=e490]
                  - row [aria-hidden] [ref=e491] [cursor=pointer]:
                    - cell [ref=e492]
                  - row [aria-hidden] [ref=e493] [cursor=pointer]:
                    - cell [ref=e494]
                  - row [aria-hidden] [ref=e495] [cursor=pointer]:
                    - cell [ref=e496]
                  - row [aria-hidden] [ref=e497] [cursor=pointer]:
                    - cell [ref=e498]
                  - row [aria-hidden] [ref=e499] [cursor=pointer]:
                    - cell [ref=e500]
                  - row [aria-hidden] [ref=e501] [cursor=pointer]:
                    - cell [ref=e502]
                  - row [aria-hidden] [ref=e503] [cursor=pointer]:
                    - cell [ref=e504]
                  - row [aria-hidden] [ref=e505] [cursor=pointer]:
                    - cell [ref=e506]
                  - row [aria-hidden] [ref=e507] [cursor=pointer]:
                    - cell [ref=e508]
                  - row [aria-hidden] [ref=e509] [cursor=pointer]:
                    - cell [ref=e510]
                  - row [aria-hidden] [ref=e511] [cursor=pointer]:
                    - cell [ref=e512]
                  - row [aria-hidden] [ref=e513] [cursor=pointer]:
                    - cell [ref=e514]
                  - row [aria-hidden] [ref=e515] [cursor=pointer]:
                    - cell [ref=e516]
                  - row [aria-hidden] [ref=e517] [cursor=pointer]:
                    - cell [ref=e518]
                  - row [aria-hidden] [ref=e519] [cursor=pointer]:
                    - cell [ref=e520]
                  - row [aria-hidden] [ref=e521] [cursor=pointer]:
                    - cell [ref=e522]
                  - row [aria-hidden] [ref=e523] [cursor=pointer]:
                    - cell [ref=e524]
                  - row [aria-hidden] [ref=e525] [cursor=pointer]:
                    - cell [ref=e526]
                  - row [aria-hidden] [ref=e527] [cursor=pointer]:
                    - cell [ref=e528]
                  - row [aria-hidden] [ref=e529] [cursor=pointer]:
                    - cell [ref=e530]
                  - row [aria-hidden] [ref=e531] [cursor=pointer]:
                    - cell [ref=e532]
                  - row [aria-hidden] [ref=e533] [cursor=pointer]:
                    - cell [ref=e534]
                  - row [aria-hidden] [ref=e535] [cursor=pointer]:
                    - cell [ref=e536]
                  - row [aria-hidden] [ref=e537] [cursor=pointer]:
                    - cell [ref=e538]
                  - row [aria-hidden] [ref=e539] [cursor=pointer]:
                    - cell [ref=e540]
                  - row [aria-hidden] [ref=e541] [cursor=pointer]:
                    - cell [ref=e542]
                  - row [aria-hidden] [ref=e543] [cursor=pointer]:
                    - cell [ref=e544]
                  - row [aria-hidden] [ref=e545] [cursor=pointer]:
                    - cell [ref=e546]
                  - row [aria-hidden] [ref=e547] [cursor=pointer]:
                    - cell [ref=e548]
                  - row [aria-hidden] [ref=e549] [cursor=pointer]:
                    - cell [ref=e550]
                  - row [aria-hidden] [ref=e551] [cursor=pointer]:
                    - cell [ref=e552]
                  - row [aria-hidden] [ref=e553] [cursor=pointer]:
                    - cell [ref=e554]
                  - row [aria-hidden] [ref=e555] [cursor=pointer]:
                    - cell [ref=e556]
                  - row [aria-hidden] [ref=e557] [cursor=pointer]:
                    - cell [ref=e558]
                  - row [aria-hidden] [ref=e559] [cursor=pointer]:
                    - cell [ref=e560]
                  - row [aria-hidden] [ref=e561] [cursor=pointer]:
                    - cell [ref=e562]
                  - row [aria-hidden] [ref=e563] [cursor=pointer]:
                    - cell [ref=e564]
                  - row [aria-hidden] [ref=e565] [cursor=pointer]:
                    - cell [ref=e566]
                  - row [aria-hidden] [ref=e567] [cursor=pointer]:
                    - cell [ref=e568]
                  - row [aria-hidden] [ref=e569] [cursor=pointer]:
                    - cell [ref=e570]
                  - row [aria-hidden] [ref=e571] [cursor=pointer]:
                    - cell [ref=e572]
                  - row [aria-hidden] [ref=e573] [cursor=pointer]:
                    - cell [ref=e574]
                  - row [aria-hidden] [ref=e575] [cursor=pointer]:
                    - cell [ref=e576]
                  - row [aria-hidden] [ref=e577] [cursor=pointer]:
                    - cell [ref=e578]
                  - row [aria-hidden] [ref=e579] [cursor=pointer]:
                    - cell [ref=e580]
                  - row [aria-hidden] [ref=e581] [cursor=pointer]:
                    - cell [ref=e582]
                  - row [aria-hidden] [ref=e583] [cursor=pointer]:
                    - cell [ref=e584]
                  - row [aria-hidden] [ref=e585] [cursor=pointer]:
                    - cell [ref=e586]
                  - row [aria-hidden] [ref=e587] [cursor=pointer]:
                    - cell [ref=e588]
                  - row [aria-hidden] [ref=e589] [cursor=pointer]:
                    - cell [ref=e590]
                  - row [aria-hidden] [ref=e591] [cursor=pointer]:
                    - cell [ref=e592]
                  - row [aria-hidden] [ref=e593] [cursor=pointer]:
                    - cell [ref=e594]
                  - row [aria-hidden] [ref=e595] [cursor=pointer]:
                    - cell [ref=e596]
                  - row [aria-hidden] [ref=e597] [cursor=pointer]:
                    - cell [ref=e598]
                  - row [aria-hidden] [ref=e599] [cursor=pointer]:
                    - cell [ref=e600]
                  - row [aria-hidden] [ref=e601] [cursor=pointer]:
                    - cell [ref=e602]
                  - row [aria-hidden] [ref=e603] [cursor=pointer]:
                    - cell [ref=e604]
                  - row [aria-hidden] [ref=e605] [cursor=pointer]:
                    - cell [ref=e606]
                  - row [aria-hidden] [ref=e607] [cursor=pointer]:
                    - cell [ref=e608]
                  - row [aria-hidden] [ref=e609] [cursor=pointer]:
                    - cell [ref=e610]
                  - row [aria-hidden] [ref=e611] [cursor=pointer]:
                    - cell [ref=e612]
                  - row [aria-hidden] [ref=e613] [cursor=pointer]:
                    - cell [ref=e614]
                  - row [aria-hidden] [ref=e615] [cursor=pointer]:
                    - cell [ref=e616]
                  - row [aria-hidden] [ref=e617] [cursor=pointer]:
                    - cell [ref=e618]
                  - row [aria-hidden] [ref=e619] [cursor=pointer]:
                    - cell [ref=e620]
                  - row [aria-hidden] [ref=e621] [cursor=pointer]:
                    - cell [ref=e622]
                  - row [aria-hidden] [ref=e623] [cursor=pointer]:
                    - cell [ref=e624]
                  - row [aria-hidden] [ref=e625] [cursor=pointer]:
                    - cell [ref=e626]
                  - row [aria-hidden] [ref=e627] [cursor=pointer]:
                    - cell [ref=e628]
                  - row [aria-hidden] [ref=e629] [cursor=pointer]:
                    - cell [ref=e630]
                  - row [aria-hidden] [ref=e631] [cursor=pointer]:
                    - cell [ref=e632]
                  - row [aria-hidden] [ref=e633] [cursor=pointer]:
                    - cell [ref=e634]
                  - row [aria-hidden] [ref=e635] [cursor=pointer]:
                    - cell [ref=e636]
                  - row [aria-hidden] [ref=e637] [cursor=pointer]:
                    - cell [ref=e638]
                  - row [aria-hidden] [ref=e639] [cursor=pointer]:
                    - cell [ref=e640]
                  - row [aria-hidden] [ref=e641] [cursor=pointer]:
                    - cell [ref=e642]
                  - row [aria-hidden] [ref=e643] [cursor=pointer]:
                    - cell [ref=e644]
                  - row [aria-hidden] [ref=e645] [cursor=pointer]:
                    - cell [ref=e646]
                  - row [aria-hidden] [ref=e647] [cursor=pointer]:
                    - cell [ref=e648]
                  - row [aria-hidden] [ref=e649] [cursor=pointer]:
                    - cell [ref=e650]
                  - row [aria-hidden] [ref=e651] [cursor=pointer]:
                    - cell [ref=e652]
                  - row [aria-hidden] [ref=e653] [cursor=pointer]:
                    - cell [ref=e654]
                  - row [aria-hidden] [ref=e655] [cursor=pointer]:
                    - cell [ref=e656]
                  - row [aria-hidden] [ref=e657] [cursor=pointer]:
                    - cell [ref=e658]
                  - row [aria-hidden] [ref=e659] [cursor=pointer]:
                    - cell [ref=e660]
                  - row [aria-hidden] [ref=e661] [cursor=pointer]:
                    - cell [ref=e662]
                  - row [aria-hidden] [ref=e663] [cursor=pointer]:
                    - cell [ref=e664]
                  - row [aria-hidden] [ref=e665] [cursor=pointer]:
                    - cell [ref=e666]
                  - row [aria-hidden] [ref=e667] [cursor=pointer]:
                    - cell [ref=e668]
                  - row [aria-hidden] [ref=e669] [cursor=pointer]:
                    - cell [ref=e670]
                  - row [aria-hidden] [ref=e671] [cursor=pointer]:
                    - cell [ref=e672]
                  - row [aria-hidden] [ref=e673] [cursor=pointer]:
                    - cell [ref=e674]
                  - row [aria-hidden] [ref=e675] [cursor=pointer]:
                    - cell [ref=e676]
                  - row [aria-hidden] [ref=e677] [cursor=pointer]:
                    - cell [ref=e678]
                  - row [aria-hidden] [ref=e679] [cursor=pointer]:
                    - cell [ref=e680]
                  - row [aria-hidden] [ref=e681] [cursor=pointer]:
                    - cell [ref=e682]
                  - row [aria-hidden] [ref=e683] [cursor=pointer]:
                    - cell [ref=e684]
                  - row [aria-hidden] [ref=e685] [cursor=pointer]:
                    - cell [ref=e686]
                  - row [aria-hidden] [ref=e687] [cursor=pointer]:
                    - cell [ref=e688]
                  - row [aria-hidden] [ref=e689] [cursor=pointer]:
                    - cell [ref=e690]
                  - row [aria-hidden] [ref=e691] [cursor=pointer]:
                    - cell [ref=e692]
              - navigation "Pagination" [ref=e693]:
                - button "First page, disabled" [disabled] [ref=e694]: <<
                - button "Previous page, disabled" [disabled] [ref=e695]: <
                - button "Page 1" [ref=e696] [cursor=pointer]: "1"
                - button "Page 2" [ref=e697] [cursor=pointer]: "2"
                - button "Page 3" [ref=e698] [cursor=pointer]: "3"
                - button "Page 4" [ref=e699] [cursor=pointer]: "4"
                - button "Page 5" [ref=e700] [cursor=pointer]: "5"
                - button "Page 6" [ref=e701] [cursor=pointer]: "6"
                - button "Page 7" [ref=e702] [cursor=pointer]: "7"
                - button "Page 8" [ref=e703] [cursor=pointer]: "8"
                - button "Page 9" [ref=e704] [cursor=pointer]: "9"
                - button "Page 10" [ref=e705] [cursor=pointer]: "10"
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
  289 |         this.index++;
  290 | 
  291 |         if (itemDetails.startsWith('Test ')) {
  292 |           this.scoreMap.set(updatedItemDetails, '1');
  293 |         }
  294 |       } else {
  295 |         console.warn(`No correct response found for: ${updatedItemDetails}`);
  296 |       }
  297 |     }
  298 | 
  299 |     return {
  300 |       itemDetails: updatedItemDetails,
  301 |       response: correctClicksCount > 0 ? `[${aggregatedResponse}]` : '',
  302 |       score: correctClicksCount,
  303 |     };
  304 |   }
  305 | 
  306 |   async activateTabletControlIfRequired() {
  307 |     const isTabletControlActive: boolean = await this.tabletControlBanner.isVisible();
  308 |     if (!isTabletControlActive) {
  309 |       await this.activateTabletControlButton.click();
  310 |     }
  311 |     await this.tabletControlBanner.waitFor({
  312 |       state: 'visible',
  313 |       timeout: 10000,
  314 |     });
  315 |   }
  316 | 
  317 |   async completeTheTakenTestForTestDataExportforGIWHERPubTest(typeOfTest: string): Promise<TestRunTimeData> {
  318 |     let score;
  319 |     let response;
  320 |     let delivery_order = 0;
  321 | 
  322 |     const lastItemText: string = await this.itemsContainerLastSpan.textContent();
  323 |     const itemNumber: number = Number(lastItemText.split(' ')[1]);
  324 |     console.log(`Item Number ${itemNumber} \n`);
  325 | 
  326 |     this.scoreMap.set(` `, '^');
  327 |     for (let index = 1; index <= itemNumber; index++) {
  328 |       this.scoreMap.set(`Item ${index}`, 'x');
  329 |     }
  330 | 
  331 |     console.log(`Type Of test ${typeOfTest} \n`);
  332 |     while (await this.plainNextButtonOrEndButton.isVisible()) {
  333 |       const startTimer: number = performance.now();
  334 | 
  335 |       const itemDetails: string = await this.itemDetails.textContent();
  336 |       console.log(itemDetails);
  337 | 
  338 |       if (typeOfTest.match(/All correct scenario/i)) {
  339 |         const correctOption: string = await this.correctOptionButton.first().textContent();
  340 | 
  341 |         if (itemDetails.match(/^(Item)\s/)) {
  342 |           // if (await this.page.locator(".audio-player").isVisible()) {
  343 |           //   let timeDisplay: string = await this.page
  344 |           //     .locator(".time-display")
  345 |           //     .textContent();
  346 |           //   await this.page.locator(".small-blue-button").click();
  347 | 
  348 |           //   const numberPart = timeDisplay.replace(/^00'|"/g, "");
  349 |           //   const numberValue = parseInt(numberPart);
  350 | 
  351 |           //   await this.page.waitForTimeout(numberValue * 1350);
  352 |           // }
  353 |           await this.correctOptionButton.first().click();
  354 |           score = 1;
  355 |           response = correctOption;
  356 |         }
  357 |       } else {
  358 |         throw new Error(`The ${typeOfTest} didnt match with any of the conditions provided`);
  359 |       }
  360 | 
  361 |       const endTimer: number = performance.now();
  362 | 
  363 |       const RT: number = (endTimer - startTimer) / 1000;
  364 | 
  365 |       this.testRunTimeData[itemDetails] = {
  366 |         RT: Number(RT.toFixed(3)),
  367 |         Delivered_Order: delivery_order,
  368 |         Response: response,
  369 |         Score: score,
  370 |       };
  371 |       delivery_order++;
  372 | 
  373 |       await this.plainNextButtonOrEndButton.click();
  374 |       await this.page.waitForRequest(() => true);
  375 | 
  376 |       if ((await this.plainNextButtonOrEndButton.textContent()) === 'End Test') {
  377 |         break;
  378 |       }
  379 |     }
  380 |     console.log(this.testRunTimeData);
  381 |     return this.testRunTimeData;
  382 |   }
  383 | 
  384 |   async completeTheTakenTestForTestDataExportforAPPROBPubTest(typeOfTest: string): Promise<TestRunTimeData> {
  385 |     let score;
  386 |     let response;
  387 |     let delivery_order = 0;
  388 | 
> 389 |     const lastItemText: string = await this.itemsContainerLastSpan.textContent();
      |                                                                    ^ TimeoutError: locator.textContent: Timeout 60000ms exceeded.
  390 |     const itemNumber: number = Number(lastItemText.split(' ')[1]);
  391 |     console.log(`Item Number ${itemNumber} \n`);
  392 | 
  393 |     this.scoreMap.set(` `, '^');
  394 |     for (let index = 1; index <= itemNumber; index++) {
  395 |       this.scoreMap.set(`Item ${index}`, 'x');
  396 |     }
  397 | 
  398 |     console.log(`Type Of test ${typeOfTest} \n`);
  399 |     while (await this.plainNextButtonOrEndButton.isVisible()) {
  400 |       await this.page.waitForTimeout(2000);
  401 |       const startTimer: number = performance.now();
  402 | 
  403 |       const itemDetails: string = await this.itemDetails.textContent();
  404 |       console.log(itemDetails);
  405 | 
  406 |       if (itemDetails.startsWith('Introduction')) {
  407 |         score = 0;
  408 |         response = '';
  409 |       } else if (typeOfTest.match(/All correct scenario/i)) {
  410 |         const correctOption: string = await this.correctOptionButton.first().textContent();
  411 | 
  412 |         if (itemDetails.match(/^(Item|Sample)\s/)) {
  413 |           if (await this.audioPlayerElement.isVisible()) {
  414 |             let timeDisplay: string = await this.timeDisplayElement.textContent();
  415 |             await this.smallBlueButton.click();
  416 |             await this.page.waitForRequest(() => true);
  417 | 
  418 |             const numberPart = timeDisplay.replace(/^00'|"/g, '');
  419 |             const numberValue = parseInt(numberPart);
  420 | 
  421 |             await this.page.waitForTimeout(numberValue * 1350);
  422 |             // while(timeDisplay != timeDisplay){
  423 |             //   await this.page.waitForTimeout(1000);
  424 |             //   timeDisplay = await this.page
  425 |             //   .locator(".time-display")
  426 |             //   .textContent();
  427 |             // }
  428 | 
  429 |             //   await this.page.waitForFunction(
  430 |             //     (timeDisplayParam) => {
  431 |             //         // Access timeDisplayParam instead of timeDisplay
  432 |             //         const timerText = document.querySelector(".time-display")?.textContent;
  433 |             //         console.log(`timerText `, timerText);
  434 |             //         return timerText === timeDisplayParam;
  435 |             //     },
  436 |             //     { timeout: 60000 },
  437 |             //     timeDisplay // Pass timeDisplay as an argument
  438 |             // );
  439 |           }
  440 |           await this.correctOptionButton.first().click();
  441 |           score = 1;
  442 |           response = correctOption;
  443 |         }
  444 |       } else {
  445 |         throw new Error(`The ${typeOfTest} didnt match with any of the conditions provided`);
  446 |       }
  447 | 
  448 |       const endTimer: number = performance.now();
  449 | 
  450 |       const RT: number = (endTimer - startTimer) / 1000;
  451 | 
  452 |       this.testRunTimeData[itemDetails] = {
  453 |         RT: Number(RT.toFixed(3)),
  454 |         Delivered_Order: delivery_order,
  455 |         Response: response,
  456 |         Score: score,
  457 |       };
  458 |       delivery_order++;
  459 | 
  460 |       await this.plainNextButtonOrEndButton.click();
  461 |       // await this.page.waitForRequest(() => true);
  462 | 
  463 |       if ((await this.plainNextButtonOrEndButton.textContent()) === 'End Test') {
  464 |         break;
  465 |       }
  466 |     }
  467 |     console.log(this.testRunTimeData);
  468 |     return this.testRunTimeData;
  469 |   }
  470 | 
  471 |   async completeTheTakenTestForTestDataExportForMATRCZTest(typeOfTest: string): Promise<TestRunTimeData> {
  472 |     let score;
  473 |     let response;
  474 |     let delivery_order = 0;
  475 | 
  476 |     const lastItemText: string = await this.itemsContainerLastSpan.textContent();
  477 |     const itemNumber: number = Number(lastItemText.split(' ')[1]);
  478 |     console.log(`Item Number ${itemNumber} \n`);
  479 | 
  480 |     this.scoreMap.set(` `, '^');
  481 |     for (let index = 1; index <= itemNumber; index++) {
  482 |       this.scoreMap.set(`Item ${index}`, 'x');
  483 |     }
  484 | 
  485 |     console.log(`Type Of test ${typeOfTest} \n`);
  486 |     while (await this.plainNextButtonOrEndButton.isVisible()) {
  487 |       const startTimer: number = performance.now();
  488 | 
  489 |       const itemDetails: string = await this.itemDetails.textContent();
```