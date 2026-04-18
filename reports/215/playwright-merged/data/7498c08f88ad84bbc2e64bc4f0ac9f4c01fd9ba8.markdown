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
              - heading "Hello S09PwAut25Ex_02 ln" [level=2] [ref=e8]:
                - generic [ref=e9]: Hello
                - button "S09PwAut25Ex_02 ln" [ref=e10] [cursor=pointer]
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
              - generic [ref=e38]: "Your Subscription Expires in 28 days:"
              - generic [ref=e39]: Keep your reporting access by renewing today.
              - link "Renew Now" [ref=e40] [cursor=pointer]:
                - /url: https://store.riversideinsights.com/p/woodcock-johnson-v-wj-v/
              - button "✕" [ref=e41] [cursor=pointer]
            - generic [ref=e42]:
              - generic [ref=e43]:
                - heading "My Test Assignments" [level=1] [ref=e44]
                - button "Create New Test Assignment" [ref=e45] [cursor=pointer]
              - generic [ref=e46]:
                - generic [ref=e49]:
                  - textbox [active] [ref=e50]:
                    - /placeholder: Search Test Assignments
                    - text: Submitted
                  - button "Search Test Assignments" [ref=e51] [cursor=pointer]
                - generic [ref=e52]:
                  - button "Active" [disabled] [ref=e53]
                  - button "Closed" [disabled] [ref=e54]
              - table "Available Assignments" [ref=e56]:
                - rowgroup [ref=e63]:
                  - row "This is the student or individual being assessed. A collection of tests grouped together for assessment. Number of days remaining to edit this assignment. Status of the test assignment. Actions available are based on your role and test status." [ref=e64]:
                    - columnheader "This is the student or individual being assessed." [ref=e65]: Examinee
                    - columnheader "A collection of tests grouped together for assessment." [ref=e66]: Test Set
                    - columnheader "Number of days remaining to edit this assignment." [ref=e67]: Days Left to Edit
                    - columnheader "Status of the test assignment." [ref=e68]: Status
                    - columnheader "Actions available are based on your role and test status." [ref=e69]: Actions
                - rowgroup [ref=e70]:
                  - row "Begin assignment Form A (+1 more) for N51081A36437, Yvonne Form A (+1 more) More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e71] [cursor=pointer]:
                    - cell "Begin assignment Form A (+1 more) for N51081A36437, Yvonne" [ref=e72]:
                      - button "Begin assignment Form A (+1 more) for N51081A36437, Yvonne" [ref=e73]:
                        - generic [ref=e74]: N51081A36437, Yvonne
                    - cell "Form A (+1 more) More info" [ref=e75]:
                      - generic [ref=e76]:
                        - button "Form A (+1 more)" [ref=e77]:
                          - generic [ref=e78]: Form A (+1 more)
                        - button "More info" [ref=e79]
                    - cell "72 days" [ref=e80]:
                      - button "72 days" [ref=e81]
                    - cell "● Submitted" [ref=e82]:
                      - button "● Submitted" [ref=e83]:
                        - generic [ref=e84]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e85]:
                      - button "Edit Assignment" [ref=e86]
                      - button "Add Tests" [ref=e87]
                      - button "Assignment actions" [ref=e88]
                  - row "Begin assignment Form A for N46380A5872, Jules Form A More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e89] [cursor=pointer]:
                    - cell "Begin assignment Form A for N46380A5872, Jules" [ref=e90]:
                      - button "Begin assignment Form A for N46380A5872, Jules" [ref=e91]:
                        - generic [ref=e92]: N46380A5872, Jules
                    - cell "Form A More info" [ref=e93]:
                      - generic [ref=e94]:
                        - button "Form A" [ref=e95]:
                          - generic [ref=e96]: Form A
                        - button "More info" [ref=e97]
                    - cell "72 days" [ref=e98]:
                      - button "72 days" [ref=e99]
                    - cell "● Submitted" [ref=e100]:
                      - button "● Submitted" [ref=e101]:
                        - generic [ref=e102]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e103]:
                      - button "Edit Assignment" [ref=e104]
                      - button "Add Tests" [ref=e105]
                      - button "Assignment actions" [ref=e106]
                  - row "Begin assignment Form A for N31573A94827, Burley Form A More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e107] [cursor=pointer]:
                    - cell "Begin assignment Form A for N31573A94827, Burley" [ref=e108]:
                      - button "Begin assignment Form A for N31573A94827, Burley" [ref=e109]:
                        - generic [ref=e110]: N31573A94827, Burley
                    - cell "Form A More info" [ref=e111]:
                      - generic [ref=e112]:
                        - button "Form A" [ref=e113]:
                          - generic [ref=e114]: Form A
                        - button "More info" [ref=e115]
                    - cell "72 days" [ref=e116]:
                      - button "72 days" [ref=e117]
                    - cell "● Submitted" [ref=e118]:
                      - button "● Submitted" [ref=e119]:
                        - generic [ref=e120]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e121]:
                      - button "Edit Assignment" [ref=e122]
                      - button "Add Tests" [ref=e123]
                      - button "Assignment actions" [ref=e124]
                  - row "Begin assignment Form A for N67905A90696, Ahmed Form A More info 72 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e125] [cursor=pointer]:
                    - cell "Begin assignment Form A for N67905A90696, Ahmed" [ref=e126]:
                      - button "Begin assignment Form A for N67905A90696, Ahmed" [ref=e127]:
                        - generic [ref=e128]: N67905A90696, Ahmed
                    - cell "Form A More info" [ref=e129]:
                      - generic [ref=e130]:
                        - button "Form A" [ref=e131]:
                          - generic [ref=e132]: Form A
                        - button "More info" [ref=e133]
                    - cell "72 days" [ref=e134]:
                      - button "72 days" [ref=e135]
                    - cell "● Submitted" [ref=e136]:
                      - button "● Submitted" [ref=e137]:
                        - generic [ref=e138]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e139]:
                      - button "Edit Assignment" [ref=e140]
                      - button "Add Tests" [ref=e141]
                      - button "Assignment actions" [ref=e142]
                  - row "Begin assignment Form A for N27625A93914, Myah Form A More info 45 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e143] [cursor=pointer]:
                    - cell "Begin assignment Form A for N27625A93914, Myah" [ref=e144]:
                      - button "Begin assignment Form A for N27625A93914, Myah" [ref=e145]:
                        - generic [ref=e146]: N27625A93914, Myah
                    - cell "Form A More info" [ref=e147]:
                      - generic [ref=e148]:
                        - button "Form A" [ref=e149]:
                          - generic [ref=e150]: Form A
                        - button "More info" [ref=e151]
                    - cell "45 days" [ref=e152]:
                      - button "45 days" [ref=e153]
                    - cell "● Submitted" [ref=e154]:
                      - button "● Submitted" [ref=e155]:
                        - generic [ref=e156]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e157]:
                      - button "Edit Assignment" [ref=e158]
                      - button "Add Tests" [ref=e159]
                      - button "Assignment actions" [ref=e160]
                  - row "Begin assignment Form A for N83294A52167, Lyric Form A More info 45 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e161] [cursor=pointer]:
                    - cell "Begin assignment Form A for N83294A52167, Lyric" [ref=e162]:
                      - button "Begin assignment Form A for N83294A52167, Lyric" [ref=e163]:
                        - generic [ref=e164]: N83294A52167, Lyric
                    - cell "Form A More info" [ref=e165]:
                      - generic [ref=e166]:
                        - button "Form A" [ref=e167]:
                          - generic [ref=e168]: Form A
                        - button "More info" [ref=e169]
                    - cell "45 days" [ref=e170]:
                      - button "45 days" [ref=e171]
                    - cell "● Submitted" [ref=e172]:
                      - button "● Submitted" [ref=e173]:
                        - generic [ref=e174]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e175]:
                      - button "Edit Assignment" [ref=e176]
                      - button "Add Tests" [ref=e177]
                      - button "Assignment actions" [ref=e178]
                  - row "Begin assignment Form A for N99823A76542, Webster Form A More info 45 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e179] [cursor=pointer]:
                    - cell "Begin assignment Form A for N99823A76542, Webster" [ref=e180]:
                      - button "Begin assignment Form A for N99823A76542, Webster" [ref=e181]:
                        - generic [ref=e182]: N99823A76542, Webster
                    - cell "Form A More info" [ref=e183]:
                      - generic [ref=e184]:
                        - button "Form A" [ref=e185]:
                          - generic [ref=e186]: Form A
                        - button "More info" [ref=e187]
                    - cell "45 days" [ref=e188]:
                      - button "45 days" [ref=e189]
                    - cell "● Submitted" [ref=e190]:
                      - button "● Submitted" [ref=e191]:
                        - generic [ref=e192]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e193]:
                      - button "Edit Assignment" [ref=e194]
                      - button "Add Tests" [ref=e195]
                      - button "Assignment actions" [ref=e196]
                  - row "Begin assignment Form A for N83538A11274, Celia Form A More info 45 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e197] [cursor=pointer]:
                    - cell "Begin assignment Form A for N83538A11274, Celia" [ref=e198]:
                      - button "Begin assignment Form A for N83538A11274, Celia" [ref=e199]:
                        - generic [ref=e200]: N83538A11274, Celia
                    - cell "Form A More info" [ref=e201]:
                      - generic [ref=e202]:
                        - button "Form A" [ref=e203]:
                          - generic [ref=e204]: Form A
                        - button "More info" [ref=e205]
                    - cell "45 days" [ref=e206]:
                      - button "45 days" [ref=e207]
                    - cell "● Submitted" [ref=e208]:
                      - button "● Submitted" [ref=e209]:
                        - generic [ref=e210]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e211]:
                      - button "Edit Assignment" [ref=e212]
                      - button "Add Tests" [ref=e213]
                      - button "Assignment actions" [ref=e214]
                  - row "Begin assignment Form A for N75821A72288, Delaney Form A More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e215] [cursor=pointer]:
                    - cell "Begin assignment Form A for N75821A72288, Delaney" [ref=e216]:
                      - button "Begin assignment Form A for N75821A72288, Delaney" [ref=e217]:
                        - generic [ref=e218]: N75821A72288, Delaney
                    - cell "Form A More info" [ref=e219]:
                      - generic [ref=e220]:
                        - button "Form A" [ref=e221]:
                          - generic [ref=e222]: Form A
                        - button "More info" [ref=e223]
                    - cell "33 days" [ref=e224]:
                      - button "33 days" [ref=e225]
                    - cell "● Submitted" [ref=e226]:
                      - button "● Submitted" [ref=e227]:
                        - generic [ref=e228]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e229]:
                      - button "Edit Assignment" [ref=e230]
                      - button "Add Tests" [ref=e231]
                      - button "Assignment actions" [ref=e232]
                  - row "Begin assignment Form A for N96386A32406, Elenor Form A More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e233] [cursor=pointer]:
                    - cell "Begin assignment Form A for N96386A32406, Elenor" [ref=e234]:
                      - button "Begin assignment Form A for N96386A32406, Elenor" [ref=e235]:
                        - generic [ref=e236]: N96386A32406, Elenor
                    - cell "Form A More info" [ref=e237]:
                      - generic [ref=e238]:
                        - button "Form A" [ref=e239]:
                          - generic [ref=e240]: Form A
                        - button "More info" [ref=e241]
                    - cell "33 days" [ref=e242]:
                      - button "33 days" [ref=e243]
                    - cell "● Submitted" [ref=e244]:
                      - button "● Submitted" [ref=e245]:
                        - generic [ref=e246]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e247]:
                      - button "Edit Assignment" [ref=e248]
                      - button "Add Tests" [ref=e249]
                      - button "Assignment actions" [ref=e250]
                  - row "Begin assignment Form A for N20273A11262, Jadyn Form A More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e251] [cursor=pointer]:
                    - cell "Begin assignment Form A for N20273A11262, Jadyn" [ref=e252]:
                      - button "Begin assignment Form A for N20273A11262, Jadyn" [ref=e253]:
                        - generic [ref=e254]: N20273A11262, Jadyn
                    - cell "Form A More info" [ref=e255]:
                      - generic [ref=e256]:
                        - button "Form A" [ref=e257]:
                          - generic [ref=e258]: Form A
                        - button "More info" [ref=e259]
                    - cell "33 days" [ref=e260]:
                      - button "33 days" [ref=e261]
                    - cell "● Submitted" [ref=e262]:
                      - button "● Submitted" [ref=e263]:
                        - generic [ref=e264]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e265]:
                      - button "Edit Assignment" [ref=e266]
                      - button "Add Tests" [ref=e267]
                      - button "Assignment actions" [ref=e268]
                  - row "Begin assignment Form A for N34025A21000, Loyce Form A More info 33 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e269] [cursor=pointer]:
                    - cell "Begin assignment Form A for N34025A21000, Loyce" [ref=e270]:
                      - button "Begin assignment Form A for N34025A21000, Loyce" [ref=e271]:
                        - generic [ref=e272]: N34025A21000, Loyce
                    - cell "Form A More info" [ref=e273]:
                      - generic [ref=e274]:
                        - button "Form A" [ref=e275]:
                          - generic [ref=e276]: Form A
                        - button "More info" [ref=e277]
                    - cell "33 days" [ref=e278]:
                      - button "33 days" [ref=e279]
                    - cell "● Submitted" [ref=e280]:
                      - button "● Submitted" [ref=e281]:
                        - generic [ref=e282]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e283]:
                      - button "Edit Assignment" [ref=e284]
                      - button "Add Tests" [ref=e285]
                      - button "Assignment actions" [ref=e286]
                  - row "Begin assignment Form A for N82442A41155, Ocie Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e287] [cursor=pointer]:
                    - cell "Begin assignment Form A for N82442A41155, Ocie" [ref=e288]:
                      - button "Begin assignment Form A for N82442A41155, Ocie" [ref=e289]:
                        - generic [ref=e290]: N82442A41155, Ocie
                    - cell "Form A More info" [ref=e291]:
                      - generic [ref=e292]:
                        - button "Form A" [ref=e293]:
                          - generic [ref=e294]: Form A
                        - button "More info" [ref=e295]
                    - cell "32 days" [ref=e296]:
                      - button "32 days" [ref=e297]
                    - cell "● Submitted" [ref=e298]:
                      - button "● Submitted" [ref=e299]:
                        - generic [ref=e300]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e301]:
                      - button "Edit Assignment" [ref=e302]
                      - button "Add Tests" [ref=e303]
                      - button "Assignment actions" [ref=e304]
                  - row "Begin assignment Form A for N87429A24450, Doris Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e305] [cursor=pointer]:
                    - cell "Begin assignment Form A for N87429A24450, Doris" [ref=e306]:
                      - button "Begin assignment Form A for N87429A24450, Doris" [ref=e307]:
                        - generic [ref=e308]: N87429A24450, Doris
                    - cell "Form A More info" [ref=e309]:
                      - generic [ref=e310]:
                        - button "Form A" [ref=e311]:
                          - generic [ref=e312]: Form A
                        - button "More info" [ref=e313]
                    - cell "32 days" [ref=e314]:
                      - button "32 days" [ref=e315]
                    - cell "● Submitted" [ref=e316]:
                      - button "● Submitted" [ref=e317]:
                        - generic [ref=e318]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e319]:
                      - button "Edit Assignment" [ref=e320]
                      - button "Add Tests" [ref=e321]
                      - button "Assignment actions" [ref=e322]
                  - row "Begin assignment Form A for N2634A71598, Dimitri Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e323] [cursor=pointer]:
                    - cell "Begin assignment Form A for N2634A71598, Dimitri" [ref=e324]:
                      - button "Begin assignment Form A for N2634A71598, Dimitri" [ref=e325]:
                        - generic [ref=e326]: N2634A71598, Dimitri
                    - cell "Form A More info" [ref=e327]:
                      - generic [ref=e328]:
                        - button "Form A" [ref=e329]:
                          - generic [ref=e330]: Form A
                        - button "More info" [ref=e331]
                    - cell "32 days" [ref=e332]:
                      - button "32 days" [ref=e333]
                    - cell "● Submitted" [ref=e334]:
                      - button "● Submitted" [ref=e335]:
                        - generic [ref=e336]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e337]:
                      - button "Edit Assignment" [ref=e338]
                      - button "Add Tests" [ref=e339]
                      - button "Assignment actions" [ref=e340]
                  - row "Begin assignment Form A for N68251A7042, Clemens Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e341] [cursor=pointer]:
                    - cell "Begin assignment Form A for N68251A7042, Clemens" [ref=e342]:
                      - button "Begin assignment Form A for N68251A7042, Clemens" [ref=e343]:
                        - generic [ref=e344]: N68251A7042, Clemens
                    - cell "Form A More info" [ref=e345]:
                      - generic [ref=e346]:
                        - button "Form A" [ref=e347]:
                          - generic [ref=e348]: Form A
                        - button "More info" [ref=e349]
                    - cell "32 days" [ref=e350]:
                      - button "32 days" [ref=e351]
                    - cell "● Submitted" [ref=e352]:
                      - button "● Submitted" [ref=e353]:
                        - generic [ref=e354]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e355]:
                      - button "Edit Assignment" [ref=e356]
                      - button "Add Tests" [ref=e357]
                      - button "Assignment actions" [ref=e358]
                  - row "Begin assignment Form A for N31554A74561, Isom Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e359] [cursor=pointer]:
                    - cell "Begin assignment Form A for N31554A74561, Isom" [ref=e360]:
                      - button "Begin assignment Form A for N31554A74561, Isom" [ref=e361]:
                        - generic [ref=e362]: N31554A74561, Isom
                    - cell "Form A More info" [ref=e363]:
                      - generic [ref=e364]:
                        - button "Form A" [ref=e365]:
                          - generic [ref=e366]: Form A
                        - button "More info" [ref=e367]
                    - cell "32 days" [ref=e368]:
                      - button "32 days" [ref=e369]
                    - cell "● Submitted" [ref=e370]:
                      - button "● Submitted" [ref=e371]:
                        - generic [ref=e372]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e373]:
                      - button "Edit Assignment" [ref=e374]
                      - button "Add Tests" [ref=e375]
                      - button "Assignment actions" [ref=e376]
                  - row "Begin assignment Form A for N6806A33650, Zion Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e377] [cursor=pointer]:
                    - cell "Begin assignment Form A for N6806A33650, Zion" [ref=e378]:
                      - button "Begin assignment Form A for N6806A33650, Zion" [ref=e379]:
                        - generic [ref=e380]: N6806A33650, Zion
                    - cell "Form A More info" [ref=e381]:
                      - generic [ref=e382]:
                        - button "Form A" [ref=e383]:
                          - generic [ref=e384]: Form A
                        - button "More info" [ref=e385]
                    - cell "32 days" [ref=e386]:
                      - button "32 days" [ref=e387]
                    - cell "● Submitted" [ref=e388]:
                      - button "● Submitted" [ref=e389]:
                        - generic [ref=e390]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e391]:
                      - button "Edit Assignment" [ref=e392]
                      - button "Add Tests" [ref=e393]
                      - button "Assignment actions" [ref=e394]
                  - row "Begin assignment Form A for N72224A21343, Nicholas Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e395] [cursor=pointer]:
                    - cell "Begin assignment Form A for N72224A21343, Nicholas" [ref=e396]:
                      - button "Begin assignment Form A for N72224A21343, Nicholas" [ref=e397]:
                        - generic [ref=e398]: N72224A21343, Nicholas
                    - cell "Form A More info" [ref=e399]:
                      - generic [ref=e400]:
                        - button "Form A" [ref=e401]:
                          - generic [ref=e402]: Form A
                        - button "More info" [ref=e403]
                    - cell "32 days" [ref=e404]:
                      - button "32 days" [ref=e405]
                    - cell "● Submitted" [ref=e406]:
                      - button "● Submitted" [ref=e407]:
                        - generic [ref=e408]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e409]:
                      - button "Edit Assignment" [ref=e410]
                      - button "Add Tests" [ref=e411]
                      - button "Assignment actions" [ref=e412]
                  - row "Begin assignment Form A for N9578A27830, Savion Form A More info 32 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e413] [cursor=pointer]:
                    - cell "Begin assignment Form A for N9578A27830, Savion" [ref=e414]:
                      - button "Begin assignment Form A for N9578A27830, Savion" [ref=e415]:
                        - generic [ref=e416]: N9578A27830, Savion
                    - cell "Form A More info" [ref=e417]:
                      - generic [ref=e418]:
                        - button "Form A" [ref=e419]:
                          - generic [ref=e420]: Form A
                        - button "More info" [ref=e421]
                    - cell "32 days" [ref=e422]:
                      - button "32 days" [ref=e423]
                    - cell "● Submitted" [ref=e424]:
                      - button "● Submitted" [ref=e425]:
                        - generic [ref=e426]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e427]:
                      - button "Edit Assignment" [ref=e428]
                      - button "Add Tests" [ref=e429]
                      - button "Assignment actions" [ref=e430]
                  - row "Begin assignment Form A for N30101A33740, Hilton Form A More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e431] [cursor=pointer]:
                    - cell "Begin assignment Form A for N30101A33740, Hilton" [ref=e432]:
                      - button "Begin assignment Form A for N30101A33740, Hilton" [ref=e433]:
                        - generic [ref=e434]: N30101A33740, Hilton
                    - cell "Form A More info" [ref=e435]:
                      - generic [ref=e436]:
                        - button "Form A" [ref=e437]:
                          - generic [ref=e438]: Form A
                        - button "More info" [ref=e439]
                    - cell "29 days" [ref=e440]:
                      - button "29 days" [ref=e441]
                    - cell "● Submitted" [ref=e442]:
                      - button "● Submitted" [ref=e443]:
                        - generic [ref=e444]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e445]:
                      - button "Edit Assignment" [ref=e446]
                      - button "Add Tests" [ref=e447]
                      - button "Assignment actions" [ref=e448]
                  - row "Begin assignment Form A for N86707A52584, Loraine Form A More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e449] [cursor=pointer]:
                    - cell "Begin assignment Form A for N86707A52584, Loraine" [ref=e450]:
                      - button "Begin assignment Form A for N86707A52584, Loraine" [ref=e451]:
                        - generic [ref=e452]: N86707A52584, Loraine
                    - cell "Form A More info" [ref=e453]:
                      - generic [ref=e454]:
                        - button "Form A" [ref=e455]:
                          - generic [ref=e456]: Form A
                        - button "More info" [ref=e457]
                    - cell "29 days" [ref=e458]:
                      - button "29 days" [ref=e459]
                    - cell "● Submitted" [ref=e460]:
                      - button "● Submitted" [ref=e461]:
                        - generic [ref=e462]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e463]:
                      - button "Edit Assignment" [ref=e464]
                      - button "Add Tests" [ref=e465]
                      - button "Assignment actions" [ref=e466]
                  - row "Begin assignment Form A for N89532A60523, Celia Form A More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e467] [cursor=pointer]:
                    - cell "Begin assignment Form A for N89532A60523, Celia" [ref=e468]:
                      - button "Begin assignment Form A for N89532A60523, Celia" [ref=e469]:
                        - generic [ref=e470]: N89532A60523, Celia
                    - cell "Form A More info" [ref=e471]:
                      - generic [ref=e472]:
                        - button "Form A" [ref=e473]:
                          - generic [ref=e474]: Form A
                        - button "More info" [ref=e475]
                    - cell "29 days" [ref=e476]:
                      - button "29 days" [ref=e477]
                    - cell "● Submitted" [ref=e478]:
                      - button "● Submitted" [ref=e479]:
                        - generic [ref=e480]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e481]:
                      - button "Edit Assignment" [ref=e482]
                      - button "Add Tests" [ref=e483]
                      - button "Assignment actions" [ref=e484]
                  - row "Begin assignment Form A for N97794A33719, Johnpaul Form A More info 29 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e485] [cursor=pointer]:
                    - cell "Begin assignment Form A for N97794A33719, Johnpaul" [ref=e486]:
                      - button "Begin assignment Form A for N97794A33719, Johnpaul" [ref=e487]:
                        - generic [ref=e488]: N97794A33719, Johnpaul
                    - cell "Form A More info" [ref=e489]:
                      - generic [ref=e490]:
                        - button "Form A" [ref=e491]:
                          - generic [ref=e492]: Form A
                        - button "More info" [ref=e493]
                    - cell "29 days" [ref=e494]:
                      - button "29 days" [ref=e495]
                    - cell "● Submitted" [ref=e496]:
                      - button "● Submitted" [ref=e497]:
                        - generic [ref=e498]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e499]:
                      - button "Edit Assignment" [ref=e500]
                      - button "Add Tests" [ref=e501]
                      - button "Assignment actions" [ref=e502]
                  - row "Begin assignment Form A for N82940A69281, Elvie Form A More info 25 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e503] [cursor=pointer]:
                    - cell "Begin assignment Form A for N82940A69281, Elvie" [ref=e504]:
                      - button "Begin assignment Form A for N82940A69281, Elvie" [ref=e505]:
                        - generic [ref=e506]: N82940A69281, Elvie
                    - cell "Form A More info" [ref=e507]:
                      - generic [ref=e508]:
                        - button "Form A" [ref=e509]:
                          - generic [ref=e510]: Form A
                        - button "More info" [ref=e511]
                    - cell "25 days" [ref=e512]:
                      - button "25 days" [ref=e513]
                    - cell "● Submitted" [ref=e514]:
                      - button "● Submitted" [ref=e515]:
                        - generic [ref=e516]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e517]:
                      - button "Edit Assignment" [ref=e518]
                      - button "Add Tests" [ref=e519]
                      - button "Assignment actions" [ref=e520]
                  - row "Begin assignment Form A for N33163A67895, Rico Form A More info 25 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e521] [cursor=pointer]:
                    - cell "Begin assignment Form A for N33163A67895, Rico" [ref=e522]:
                      - button "Begin assignment Form A for N33163A67895, Rico" [ref=e523]:
                        - generic [ref=e524]: N33163A67895, Rico
                    - cell "Form A More info" [ref=e525]:
                      - generic [ref=e526]:
                        - button "Form A" [ref=e527]:
                          - generic [ref=e528]: Form A
                        - button "More info" [ref=e529]
                    - cell "25 days" [ref=e530]:
                      - button "25 days" [ref=e531]
                    - cell "● Submitted" [ref=e532]:
                      - button "● Submitted" [ref=e533]:
                        - generic [ref=e534]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e535]:
                      - button "Edit Assignment" [ref=e536]
                      - button "Add Tests" [ref=e537]
                      - button "Assignment actions" [ref=e538]
                  - row "Begin assignment Form A for N20737A44049, Lucius Form A More info 25 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e539] [cursor=pointer]:
                    - cell "Begin assignment Form A for N20737A44049, Lucius" [ref=e540]:
                      - button "Begin assignment Form A for N20737A44049, Lucius" [ref=e541]:
                        - generic [ref=e542]: N20737A44049, Lucius
                    - cell "Form A More info" [ref=e543]:
                      - generic [ref=e544]:
                        - button "Form A" [ref=e545]:
                          - generic [ref=e546]: Form A
                        - button "More info" [ref=e547]
                    - cell "25 days" [ref=e548]:
                      - button "25 days" [ref=e549]
                    - cell "● Submitted" [ref=e550]:
                      - button "● Submitted" [ref=e551]:
                        - generic [ref=e552]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e553]:
                      - button "Edit Assignment" [ref=e554]
                      - button "Add Tests" [ref=e555]
                      - button "Assignment actions" [ref=e556]
                  - row "Begin assignment Form A for N34822A68237, Dashawn Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e557] [cursor=pointer]:
                    - cell "Begin assignment Form A for N34822A68237, Dashawn" [ref=e558]:
                      - button "Begin assignment Form A for N34822A68237, Dashawn" [ref=e559]:
                        - generic [ref=e560]: N34822A68237, Dashawn
                    - cell "Form A More info" [ref=e561]:
                      - generic [ref=e562]:
                        - button "Form A" [ref=e563]:
                          - generic [ref=e564]: Form A
                        - button "More info" [ref=e565]
                    - cell "23 days" [ref=e566]:
                      - button "23 days" [ref=e567]
                    - cell "● Submitted" [ref=e568]:
                      - button "● Submitted" [ref=e569]:
                        - generic [ref=e570]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e571]:
                      - button "Edit Assignment" [ref=e572]
                      - button "Add Tests" [ref=e573]
                      - button "Assignment actions" [ref=e574]
                  - row "Begin assignment Form A for N39054A44344, Abigail Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e575] [cursor=pointer]:
                    - cell "Begin assignment Form A for N39054A44344, Abigail" [ref=e576]:
                      - button "Begin assignment Form A for N39054A44344, Abigail" [ref=e577]:
                        - generic [ref=e578]: N39054A44344, Abigail
                    - cell "Form A More info" [ref=e579]:
                      - generic [ref=e580]:
                        - button "Form A" [ref=e581]:
                          - generic [ref=e582]: Form A
                        - button "More info" [ref=e583]
                    - cell "23 days" [ref=e584]:
                      - button "23 days" [ref=e585]
                    - cell "● Submitted" [ref=e586]:
                      - button "● Submitted" [ref=e587]:
                        - generic [ref=e588]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e589]:
                      - button "Edit Assignment" [ref=e590]
                      - button "Add Tests" [ref=e591]
                      - button "Assignment actions" [ref=e592]
                  - row "Begin assignment Form A for N60945A76465, Adrienne Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e593] [cursor=pointer]:
                    - cell "Begin assignment Form A for N60945A76465, Adrienne" [ref=e594]:
                      - button "Begin assignment Form A for N60945A76465, Adrienne" [ref=e595]:
                        - generic [ref=e596]: N60945A76465, Adrienne
                    - cell "Form A More info" [ref=e597]:
                      - generic [ref=e598]:
                        - button "Form A" [ref=e599]:
                          - generic [ref=e600]: Form A
                        - button "More info" [ref=e601]
                    - cell "23 days" [ref=e602]:
                      - button "23 days" [ref=e603]
                    - cell "● Submitted" [ref=e604]:
                      - button "● Submitted" [ref=e605]:
                        - generic [ref=e606]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e607]:
                      - button "Edit Assignment" [ref=e608]
                      - button "Add Tests" [ref=e609]
                      - button "Assignment actions" [ref=e610]
                  - row "Begin assignment Form A for N82712A32420, Clifford Form A More info 23 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e611] [cursor=pointer]:
                    - cell "Begin assignment Form A for N82712A32420, Clifford" [ref=e612]:
                      - button "Begin assignment Form A for N82712A32420, Clifford" [ref=e613]:
                        - generic [ref=e614]: N82712A32420, Clifford
                    - cell "Form A More info" [ref=e615]:
                      - generic [ref=e616]:
                        - button "Form A" [ref=e617]:
                          - generic [ref=e618]: Form A
                        - button "More info" [ref=e619]
                    - cell "23 days" [ref=e620]:
                      - button "23 days" [ref=e621]
                    - cell "● Submitted" [ref=e622]:
                      - button "● Submitted" [ref=e623]:
                        - generic [ref=e624]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e625]:
                      - button "Edit Assignment" [ref=e626]
                      - button "Add Tests" [ref=e627]
                      - button "Assignment actions" [ref=e628]
                  - row "Begin assignment Form A for N89201A21216, Thea Form A More info 12 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e629] [cursor=pointer]:
                    - cell "Begin assignment Form A for N89201A21216, Thea" [ref=e630]:
                      - button "Begin assignment Form A for N89201A21216, Thea" [ref=e631]:
                        - generic [ref=e632]: N89201A21216, Thea
                    - cell "Form A More info" [ref=e633]:
                      - generic [ref=e634]:
                        - button "Form A" [ref=e635]:
                          - generic [ref=e636]: Form A
                        - button "More info" [ref=e637]
                    - cell "12 days" [ref=e638]:
                      - button "12 days" [ref=e639]
                    - cell "● Submitted" [ref=e640]:
                      - button "● Submitted" [ref=e641]:
                        - generic [ref=e642]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e643]:
                      - button "Edit Assignment" [ref=e644]
                      - button "Add Tests" [ref=e645]
                      - button "Assignment actions" [ref=e646]
                  - row "Begin assignment Form A for N39764A36710, Gene Form A More info 11 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e647] [cursor=pointer]:
                    - cell "Begin assignment Form A for N39764A36710, Gene" [ref=e648]:
                      - button "Begin assignment Form A for N39764A36710, Gene" [ref=e649]:
                        - generic [ref=e650]: N39764A36710, Gene
                    - cell "Form A More info" [ref=e651]:
                      - generic [ref=e652]:
                        - button "Form A" [ref=e653]:
                          - generic [ref=e654]: Form A
                        - button "More info" [ref=e655]
                    - cell "11 days" [ref=e656]:
                      - button "11 days" [ref=e657]
                    - cell "● Submitted" [ref=e658]:
                      - button "● Submitted" [ref=e659]:
                        - generic [ref=e660]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e661]:
                      - button "Edit Assignment" [ref=e662]
                      - button "Add Tests" [ref=e663]
                      - button "Assignment actions" [ref=e664]
                  - row "Begin assignment Form A for N43668A93988, Aglae Form A More info 11 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e665] [cursor=pointer]:
                    - cell "Begin assignment Form A for N43668A93988, Aglae" [ref=e666]:
                      - button "Begin assignment Form A for N43668A93988, Aglae" [ref=e667]:
                        - generic [ref=e668]: N43668A93988, Aglae
                    - cell "Form A More info" [ref=e669]:
                      - generic [ref=e670]:
                        - button "Form A" [ref=e671]:
                          - generic [ref=e672]: Form A
                        - button "More info" [ref=e673]
                    - cell "11 days" [ref=e674]:
                      - button "11 days" [ref=e675]
                    - cell "● Submitted" [ref=e676]:
                      - button "● Submitted" [ref=e677]:
                        - generic [ref=e678]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e679]:
                      - button "Edit Assignment" [ref=e680]
                      - button "Add Tests" [ref=e681]
                      - button "Assignment actions" [ref=e682]
                  - row "Begin assignment Form A for N97092A68843, Caitlyn Form A More info 11 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e683] [cursor=pointer]:
                    - cell "Begin assignment Form A for N97092A68843, Caitlyn" [ref=e684]:
                      - button "Begin assignment Form A for N97092A68843, Caitlyn" [ref=e685]:
                        - generic [ref=e686]: N97092A68843, Caitlyn
                    - cell "Form A More info" [ref=e687]:
                      - generic [ref=e688]:
                        - button "Form A" [ref=e689]:
                          - generic [ref=e690]: Form A
                        - button "More info" [ref=e691]
                    - cell "11 days" [ref=e692]:
                      - button "11 days" [ref=e693]
                    - cell "● Submitted" [ref=e694]:
                      - button "● Submitted" [ref=e695]:
                        - generic [ref=e696]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e697]:
                      - button "Edit Assignment" [ref=e698]
                      - button "Add Tests" [ref=e699]
                      - button "Assignment actions" [ref=e700]
                  - row "Begin assignment Form A for N55570A47865, Fannie Form A More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e701] [cursor=pointer]:
                    - cell "Begin assignment Form A for N55570A47865, Fannie" [ref=e702]:
                      - button "Begin assignment Form A for N55570A47865, Fannie" [ref=e703]:
                        - generic [ref=e704]: N55570A47865, Fannie
                    - cell "Form A More info" [ref=e705]:
                      - generic [ref=e706]:
                        - button "Form A" [ref=e707]:
                          - generic [ref=e708]: Form A
                        - button "More info" [ref=e709]
                    - cell "3 days" [ref=e710]:
                      - button "3 days" [ref=e711]
                    - cell "● Submitted" [ref=e712]:
                      - button "● Submitted" [ref=e713]:
                        - generic [ref=e714]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e715]:
                      - button "Edit Assignment" [ref=e716]
                      - button "Add Tests" [ref=e717]
                      - button "Assignment actions" [ref=e718]
                  - row "Begin assignment Form A for N78611A74266, Mohammad Form A More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e719] [cursor=pointer]:
                    - cell "Begin assignment Form A for N78611A74266, Mohammad" [ref=e720]:
                      - button "Begin assignment Form A for N78611A74266, Mohammad" [ref=e721]:
                        - generic [ref=e722]: N78611A74266, Mohammad
                    - cell "Form A More info" [ref=e723]:
                      - generic [ref=e724]:
                        - button "Form A" [ref=e725]:
                          - generic [ref=e726]: Form A
                        - button "More info" [ref=e727]
                    - cell "3 days" [ref=e728]:
                      - button "3 days" [ref=e729]
                    - cell "● Submitted" [ref=e730]:
                      - button "● Submitted" [ref=e731]:
                        - generic [ref=e732]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e733]:
                      - button "Edit Assignment" [ref=e734]
                      - button "Add Tests" [ref=e735]
                      - button "Assignment actions" [ref=e736]
                  - row "Begin assignment Form A for N44841A62174, Abby Form A More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e737] [cursor=pointer]:
                    - cell "Begin assignment Form A for N44841A62174, Abby" [ref=e738]:
                      - button "Begin assignment Form A for N44841A62174, Abby" [ref=e739]:
                        - generic [ref=e740]: N44841A62174, Abby
                    - cell "Form A More info" [ref=e741]:
                      - generic [ref=e742]:
                        - button "Form A" [ref=e743]:
                          - generic [ref=e744]: Form A
                        - button "More info" [ref=e745]
                    - cell "3 days" [ref=e746]:
                      - button "3 days" [ref=e747]
                    - cell "● Submitted" [ref=e748]:
                      - button "● Submitted" [ref=e749]:
                        - generic [ref=e750]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e751]:
                      - button "Edit Assignment" [ref=e752]
                      - button "Add Tests" [ref=e753]
                      - button "Assignment actions" [ref=e754]
                  - row "Begin assignment Form A for N76806A77931, Ismael Form A More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e755] [cursor=pointer]:
                    - cell "Begin assignment Form A for N76806A77931, Ismael" [ref=e756]:
                      - button "Begin assignment Form A for N76806A77931, Ismael" [ref=e757]:
                        - generic [ref=e758]: N76806A77931, Ismael
                    - cell "Form A More info" [ref=e759]:
                      - generic [ref=e760]:
                        - button "Form A" [ref=e761]:
                          - generic [ref=e762]: Form A
                        - button "More info" [ref=e763]
                    - cell "3 days" [ref=e764]:
                      - button "3 days" [ref=e765]
                    - cell "● Submitted" [ref=e766]:
                      - button "● Submitted" [ref=e767]:
                        - generic [ref=e768]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e769]:
                      - button "Edit Assignment" [ref=e770]
                      - button "Add Tests" [ref=e771]
                      - button "Assignment actions" [ref=e772]
                  - row "Begin assignment Form A for N75787A26981, Yessenia Form A More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e773] [cursor=pointer]:
                    - cell "Begin assignment Form A for N75787A26981, Yessenia" [ref=e774]:
                      - button "Begin assignment Form A for N75787A26981, Yessenia" [ref=e775]:
                        - generic [ref=e776]: N75787A26981, Yessenia
                    - cell "Form A More info" [ref=e777]:
                      - generic [ref=e778]:
                        - button "Form A" [ref=e779]:
                          - generic [ref=e780]: Form A
                        - button "More info" [ref=e781]
                    - cell "3 days" [ref=e782]:
                      - button "3 days" [ref=e783]
                    - cell "● Submitted" [ref=e784]:
                      - button "● Submitted" [ref=e785]:
                        - generic [ref=e786]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e787]:
                      - button "Edit Assignment" [ref=e788]
                      - button "Add Tests" [ref=e789]
                      - button "Assignment actions" [ref=e790]
                  - row "Begin assignment Form A for N51781A53845, Javonte Form A More info 3 days ● Submitted Edit Assignment Add Tests Assignment actions" [ref=e791] [cursor=pointer]:
                    - cell "Begin assignment Form A for N51781A53845, Javonte" [ref=e792]:
                      - button "Begin assignment Form A for N51781A53845, Javonte" [ref=e793]:
                        - generic [ref=e794]: N51781A53845, Javonte
                    - cell "Form A More info" [ref=e795]:
                      - generic [ref=e796]:
                        - button "Form A" [ref=e797]:
                          - generic [ref=e798]: Form A
                        - button "More info" [ref=e799]
                    - cell "3 days" [ref=e800]:
                      - button "3 days" [ref=e801]
                    - cell "● Submitted" [ref=e802]:
                      - button "● Submitted" [ref=e803]:
                        - generic [ref=e804]: ●
                        - text: Submitted
                    - cell "Edit Assignment Add Tests Assignment actions" [ref=e805]:
                      - button "Edit Assignment" [ref=e806]
                      - button "Add Tests" [ref=e807]
                      - button "Assignment actions" [ref=e808]
            - generic [ref=e809]:
              - generic [ref=e812]:
                - img [ref=e813]
                - heading "Notifications Center" [level=2] [ref=e817]
              - generic [ref=e818]:
                - generic [ref=e820]:
                  - img [ref=e821]
                  - heading "Resources" [level=3] [ref=e825]
                - list [ref=e826]:
                  - listitem [ref=e827]:
                    - button "Riverside Learn" [ref=e828] [cursor=pointer]:
                      - heading "Riverside Learn" [level=4] [ref=e829]
                      - img [ref=e831]
                  - listitem [ref=e833]:
                    - button "Onboarding Tutorial Videos" [ref=e834] [cursor=pointer]:
                      - heading "Onboarding Tutorial Videos" [level=4] [ref=e835]
                      - img [ref=e837]
                  - listitem [ref=e839]:
                    - button "Quick Reference Guides" [ref=e840] [cursor=pointer]:
                      - heading "Quick Reference Guides" [level=4] [ref=e841]
                      - img [ref=e843]
                - button "View All" [ref=e846] [cursor=pointer]
      - contentinfo [ref=e847]:
        - generic [ref=e848]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e849] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e850]
        - generic [ref=e851]:
          - link "Riverside Insights Facebook" [ref=e852] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e853]
          - link "Riverside Insights Twitter" [ref=e854] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e855]
          - link "Riverside Insights LinkedIn" [ref=e856] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e857]
          - link "Riverside Insights Instagram" [ref=e858] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e859]
        - generic [ref=e860]:
          - button "Leave Feedback" [ref=e861] [cursor=pointer]
          - generic [ref=e862]: "|"
          - link "Terms of Use" [ref=e863] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e864]: "|"
          - link "Privacy Policy" [ref=e865] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e866]: Footer region end
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