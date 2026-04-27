# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_dataExport/APPROB_Pub.spec.ts >>  APPROB.W5PA Test Data Export Automation  >> @Test_De For Age 4 - All correct scenario login as AH Conduct test as Examiner and generate reports
- Location: src/tests/test_dataExport/APPROB_Pub.spec.ts:16:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "[!b]correct"
Received string:    "correct"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "35 (three fifths)"
Received string:    "(three fifths)"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "-13 (negative one third)"
Received string:    "(negative one third)"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "-23 (negative two thirds)"
Received string:    "(negative two thirds)"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "163 (sixteen times the square root of three) square inches"
Received string:    "(sixteen times the square root of three) square inches"
```

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "0.048 inch per minute (leading zero is optional)"
Received string:    "inch"
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
            - link [ref=e5] [cursor=pointer]:
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
            - menuitem "Dashboard" [ref=e21] [cursor=pointer]: Dashboard
            - menuitem "Test Sets" [ref=e23] [cursor=pointer]: Test Sets
            - menuitem "Examinees" [ref=e25] [cursor=pointer]: Examinees
            - menuitem "Staff" [ref=e27] [cursor=pointer]: Staff
            - menuitem "Reports" [ref=e29] [cursor=pointer]:
              - text: Reports
              - img [ref=e30]
            - menuitem "Resources" [ref=e33] [cursor=pointer]: Resources
        - main [ref=e34]:
          - generic [ref=e35]:
            - heading "REPORT CENTER" [level=1] [ref=e36]
            - navigation [ref=e37]:
              - tablist [ref=e38]:
                - tab "Report Library" [selected] [ref=e39] [cursor=pointer]
                - button "Zoom In" [ref=e40] [cursor=pointer]:
                  - img "Zoom Page In Icon" [ref=e41]
            - generic "Report Library" [ref=e50]:
              - grid [ref=e51]:
                - generic [ref=e52]:
                  - generic "Report Name" [ref=e53]:
                    - generic [ref=e55]: Report Name
                  - generic "Status" [ref=e56]:
                    - generic [ref=e58]: Status
                  - generic "Date Created" [ref=e59]:
                    - generic [ref=e61]: Date Created
                  - generic "Actions" [ref=e62]:
                    - generic [ref=e64]: Actions
                - rowgroup [ref=e65]:
                  - row "Report Name Test_DataExport_AutoFilter_Template_N60554A66896 Status Completed Date Created 04/27/2026 06:57 AM Download/Print Delete View Data Export Format" [ref=e66]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N60554A66896" [ref=e68]: Test_DataExport_AutoFilter_Template_N60554A66896
                    - gridcell "Status Completed" [ref=e70]: Completed
                    - gridcell "Date Created 04/27/2026 06:57 AM" [ref=e72]: 04/27/2026 06:57 AM
                    - generic [ref=e73]:
                      - gridcell "Download/Print" [active] [ref=e75] [cursor=pointer]
                      - gridcell "Delete" [ref=e77] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e78] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N47907A68169 Status Completed Date Created 04/27/2026 06:52 AM Download/Print Delete View Data Export Format" [ref=e80]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N47907A68169" [ref=e82]: Test_DataExport_AutoFilter_Template_N47907A68169
                    - gridcell "Status Completed" [ref=e84]: Completed
                    - gridcell "Date Created 04/27/2026 06:52 AM" [ref=e86]: 04/27/2026 06:52 AM
                    - generic [ref=e87]:
                      - gridcell "Download/Print" [ref=e89] [cursor=pointer]
                      - gridcell "Delete" [ref=e91] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e92] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N9780A171 Status Completed Date Created 04/05/2026 12:43 PM Download/Print Delete View Data Export Format" [ref=e94]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N9780A171" [ref=e96]: Test_DataExport_AutoFilter_Template_N9780A171
                    - gridcell "Status Completed" [ref=e98]: Completed
                    - gridcell "Date Created 04/05/2026 12:43 PM" [ref=e100]: 04/05/2026 12:43 PM
                    - generic [ref=e101]:
                      - gridcell "Download/Print" [ref=e103] [cursor=pointer]
                      - gridcell "Delete" [ref=e105] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e106] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N52205A94863 Status Completed Date Created 04/04/2026 12:00 AM Download/Print Delete View Data Export Format" [ref=e108]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N52205A94863" [ref=e110]: Test_DataExport_AutoFilter_Template_N52205A94863
                    - gridcell "Status Completed" [ref=e112]: Completed
                    - gridcell "Date Created 04/04/2026 12:00 AM" [ref=e114]: 04/04/2026 12:00 AM
                    - generic [ref=e115]:
                      - gridcell "Download/Print" [ref=e117] [cursor=pointer]
                      - gridcell "Delete" [ref=e119] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e120] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N22163A8534 Status Completed Date Created 04/03/2026 11:55 PM Download/Print Delete View Data Export Format" [ref=e122]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N22163A8534" [ref=e124]: Test_DataExport_AutoFilter_Template_N22163A8534
                    - gridcell "Status Completed" [ref=e126]: Completed
                    - gridcell "Date Created 04/03/2026 11:55 PM" [ref=e128]: 04/03/2026 11:55 PM
                    - generic [ref=e129]:
                      - gridcell "Download/Print" [ref=e131] [cursor=pointer]
                      - gridcell "Delete" [ref=e133] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e134] [cursor=pointer]
                  - row "Report Name Test_DataExport_AutoFilter_Template_N61369A98683 Status Completed Date Created 04/03/2026 11:51 PM Download/Print Delete View Data Export Format" [ref=e136]:
                    - gridcell "Report Name Test_DataExport_AutoFilter_Template_N61369A98683" [ref=e138]: Test_DataExport_AutoFilter_Template_N61369A98683
                    - gridcell "Status Completed" [ref=e140]: Completed
                    - gridcell "Date Created 04/03/2026 11:51 PM" [ref=e142]: 04/03/2026 11:51 PM
                    - generic [ref=e143]:
                      - gridcell "Download/Print" [ref=e145] [cursor=pointer]
                      - gridcell "Delete" [ref=e147] [cursor=pointer]
                      - button "View Data Export Format":
                        - img [ref=e148] [cursor=pointer]
      - contentinfo [ref=e150]:
        - generic [ref=e151]: Footer region,
        - link "w w w dot riverside insights dot com" [ref=e152] [cursor=pointer]:
          - /url: https://www.riversideinsights.com/
          - img "Riverside Insights Website" [ref=e153]
        - generic [ref=e154]:
          - link "Riverside Insights Facebook" [ref=e155] [cursor=pointer]:
            - /url: https://www.facebook.com/RiversideInsights/
            - img "Riverside Insights Facebook" [ref=e156]
          - link "Riverside Insights Twitter" [ref=e157] [cursor=pointer]:
            - /url: https://twitter.com/1BillionLives
            - img "Riverside Insights Twitter" [ref=e158]
          - link "Riverside Insights LinkedIn" [ref=e159] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/riverside-insights/
            - img "Riverside Insights LinkedIn" [ref=e160]
          - link "Riverside Insights Instagram" [ref=e161] [cursor=pointer]:
            - /url: https://www.instagram.com/riversideinsightsassessments/
            - img "Riverside Insights Instagram" [ref=e162]
        - generic [ref=e163]:
          - button "Leave Feedback" [ref=e164] [cursor=pointer]
          - generic [ref=e165]: "|"
          - link "Terms of Use" [ref=e166] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/terms-of-use
          - generic [ref=e167]: "|"
          - link "Privacy Policy" [ref=e168] [cursor=pointer]:
            - /url: https://info.riversideinsights.com/privacy-assessment_policy
        - generic [ref=e169]: Footer region end
```

# Test source

```ts
  242 | 
  243 |   async validateAndAssert_Master_ID(
  244 |     obj1: Record<string, any>,
  245 |     obj2: Record<string, any>,
  246 |   ) {
  247 | 
  248 |     console.log("------------------Master_ID----------------------");
  249 | 
  250 |     for (const key in obj1) {
  251 |       if (key in obj2) {
  252 |         const itemMastedIdP1: string = obj1[key].Master_ID;
  253 |         const itemMasterId2: string = obj2[key].Master_ID;
  254 | 
  255 |         expect.soft(itemMastedIdP1).toEqual(itemMasterId2.toString());
  256 |         console.log("\n", itemMastedIdP1, "===", itemMasterId2);
  257 |         RawValueLogger.log(`  [Master_ID]: "${key}":  "${itemMastedIdP1}", = "${itemMasterId2}"`);
  258 |       } else {
  259 |         console.warn(`Master id '${key}' not found in the second object`);
  260 |       }
  261 |     }
  262 |   }
  263 | 
  264 |   async validateAndAssert_RT(
  265 |     obj1: Record<string, any>, //txt file data
  266 |     obj2: Record<string, any>,
  267 |   ) {
  268 | 
  269 |     console.log("--------------RT------------------");
  270 | 
  271 |     let missingKeysCount = 0;
  272 | 
  273 |     for (const key in obj1) {
  274 |       if (key in obj2) {
  275 |         const RT1: number = Number(obj1[key].RT);
  276 |         const RT2: number = Number(obj2[key].RT);
  277 | 
  278 |         expect.soft(Math.abs(RT1 - RT2)).toBeGreaterThan(0); //CLINICAL-25333
  279 |         console.log("\n", RT1, "-", RT2, "= ", Math.abs(RT1 - RT2));
  280 |         RawValueLogger.log(`  [RT]: "${key}":  "${RT1}", = "${RT2}"`);
  281 |         
  282 |         if (RT1 < 0){
  283 |           expect.soft(RT1, "The RT should be always positive").toBeGreaterThan(0);
  284 |         }
  285 |       } else {
  286 |         missingKeysCount++;
  287 |         console.warn(`RT '${key}' not found in the second object`);
  288 |       }
  289 |     }
  290 | 
  291 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  292 | 
  293 |     if (missingKeysCount > 3) {
  294 |       console.error(`Too many missing keys in RT validation! Total: ${missingKeysCount}`);
  295 |     }
  296 |   }
  297 | 
  298 |   async validateAndAssert_DeliveryOrder(
  299 |     obj1: Record<string, any>,
  300 |     obj2: Record<string, any>,
  301 |   ) {
  302 | 
  303 |     console.log("--------------DeliveryOrder------------------");
  304 | 
  305 |     let missingKeysCount = 0;
  306 | 
  307 |     for (const key in obj1) {
  308 |       if (key in obj2) {
  309 |         const Do1: number = Number(obj1[key].Delivered_Order);
  310 |         const Do2: number = Number(obj2[key].Delivered_Order);
  311 | 
  312 |         expect.soft(Do1).toBeGreaterThanOrEqual(Do2);
  313 | 
  314 |         console.log("\n", Do1, "===", Do2);
  315 |         RawValueLogger.log(`  [DeliveryOrder]: "${key}":  "${Do1}", = "${Do2}"`);
  316 |       } else {
  317 |         missingKeysCount++;
  318 |         console.warn(`Delivered_Order '${key}' not found in the second object`);
  319 |       }
  320 |     }
  321 | 
  322 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  323 | 
  324 |     if (missingKeysCount > 3) {
  325 |       console.error(`Too many missing keys in DeliveryOrder validation! Total: ${missingKeysCount}`);
  326 |     }
  327 |   }
  328 | 
  329 |   async validateAndAssert_Response(
  330 |     obj1: Record<string, any>, // Txt-file data
  331 |     obj2: Record<string, any>, // Run-time data
  332 |   ) {
  333 |     console.log("--------------Response------------------");
  334 |   
  335 |     let missingKeysCount = 0;
  336 |   
  337 |     for (const key in obj1) {
  338 |       if (key in obj2) {
  339 |         const word1: string = await this.extractEnglishWord(obj1[key].Response);
  340 |         let word2: string = await this.extractEnglishWord(obj2[key].Response);
  341 |   
> 342 |         expect.soft(word2).toContain(word1);  
      |                            ^ Error: expect(received).toContain(expected) // indexOf
  343 |         console.log("\n", word2, "===", word1);
  344 |         RawValueLogger.log(`  [Response]: "${key}":  "${word1}", = "${word2}"`);
  345 |       } else {
  346 |         missingKeysCount++;
  347 |         console.warn(`Response '${key}' not found in the second object`);
  348 |       }
  349 |     }
  350 |   
  351 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  352 |   
  353 |     if (missingKeysCount > 3) {
  354 |       console.error(`Too many missing keys! Total: ${missingKeysCount}`);
  355 |     }
  356 |   }
  357 |   
  358 |   async extractEnglishWord(text: string): Promise<string> {
  359 |     text = cheerio.load(text).text().trim();  
  360 |     text = decode(text);  
  361 |     const match = text.match(/^[a-zA-Z]+/);
  362 |     return match ? match[0].toLowerCase() : text.toLowerCase();
  363 |   }
  364 | 
  365 |   async validateAndAssert_Score(
  366 |     obj1: Record<string, any>,
  367 |     obj2: Record<string, any>,
  368 |   ) {
  369 | 
  370 |     console.log("--------------Score------------------");
  371 | 
  372 |     let missingKeysCount = 0;
  373 | 
  374 |     for (const key in obj1) {
  375 |       if (key in obj2) {
  376 |         const Do1: number = Number(obj1[key].Score);
  377 |         const Do2: number = Number(obj2[key].Score);
  378 | 
  379 |         expect.soft(Do1).toEqual(Do2);
  380 | 
  381 |         console.log("\n", Do1, "===", Do2);
  382 |         RawValueLogger.log(`  [Score]: "${key}":  "${Do1}", = "${Do2}"`);
  383 |       } else {
  384 |         missingKeysCount++;
  385 |         console.warn(`Score '${key}' not found in the second object`);
  386 |       }
  387 |     }
  388 | 
  389 |     expect.soft(missingKeysCount <= 3).toBeTruthy();
  390 | 
  391 |     if (missingKeysCount > 3) {
  392 |       console.error(`Too many missing keys in Score validation! Total: ${missingKeysCount}`);
  393 |     }
  394 |   }
  395 | 
  396 |   async getExcelasJson(filePATH: string): Promise<Array<Record<string, any>>> {
  397 |     const filePath = path.join(__dirname, filePATH);
  398 |     const workbook = xlsx.readFile(filePath);
  399 |     const sheetName = workbook.SheetNames[0];
  400 |     const sheet = workbook.Sheets[sheetName];
  401 |     this.selTestJsonData = xlsx.utils.sheet_to_json(sheet);
  402 |     return this.selTestJsonData;
  403 |   }
  404 | 
  405 |   async getColumnOrValueFromExcel(
  406 |     columnName: string,
  407 |     columnValue?: string,
  408 |     returnColumnName?: string,
  409 |   ): Promise<string[] | undefined> {
  410 |     if (this.selTestJsonData === undefined) {
  411 |       this.selTestJsonData = await this.getExcelasJson(
  412 |         `../../dataFiles/derivedScores/WJV SelTestTable.xlsx`,
  413 |       );
  414 |     }
  415 | 
  416 |     if (columnValue === undefined && returnColumnName === undefined) {
  417 |       const values = this.selTestJsonData.map((row: any) => row[columnName]);
  418 |       return [...new Set(values)];
  419 |     } else {
  420 |       const row = this.selTestJsonData.find(
  421 |         (row: any) => row[columnName] === columnValue,
  422 |       );
  423 |       if (row) {
  424 |         return row[returnColumnName];
  425 |       } else {
  426 |         return undefined;
  427 |       }
  428 |     }
  429 |   }
  430 | 
  431 |   async getRowDataOfSpecifiedColumnFromSchemaFiles(
  432 |     fileName: string,
  433 |     columnName: string,
  434 |   ): Promise<Map<string, string>> {
  435 |     const filePath = path.join(
  436 |       __dirname,
  437 |       `../../dataFiles/test_schema_files/${fileName}`,
  438 |     );
  439 |     const workbook = xlsx.readFile(filePath);
  440 |     const sheetName = workbook.SheetNames[0];
  441 |     const sheet = workbook.Sheets[sheetName];
  442 |     const jsonData: Array<Record<string, any>> =
```