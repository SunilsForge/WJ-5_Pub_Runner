# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional/SubmittedTestAssignments.spec.ts >> I want the ability to launch into review mode for my submitted test assignments >> Validate different scenarios in submitted test assignment in review mode
- Location: src/tests/functional/SubmittedTestAssignments.spec.ts:168:9

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Exit Review Mode' })
    - locator resolved to <button class="hollow-button">Exit Review Mode</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ReactModal__Overlay ReactModal__Overlay--after-open Overlay">…</div> from <div class="ReactModalPortal">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ReactModal__Overlay ReactModal__Overlay--after-open Overlay">…</div> from <div class="ReactModalPortal">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    116 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="ReactModal__Overlay ReactModal__Overlay--after-open Overlay">…</div> from <div class="ReactModalPortal">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic:
  - dialog "Administration Overview for Oral Vocabulary–Synonyms" [ref=e2]:
    - banner [ref=e3]:
      - button "Main Navigation" [ref=e4] [cursor=pointer]
      - generic "Oral Vocabulary–Synonyms" [ref=e5] [cursor=pointer]:
        - generic [ref=e6]: Oral Vocabulary–Synonyms
      - 'button "N4371A8017, Lydia Age: 5y Grade: Kindergarten" [ref=e9] [cursor=pointer]':
        - img [ref=e10]
        - generic [ref=e13]:
          - generic [ref=e14]: N4371A8017, Lydia
          - generic [ref=e15]: "Age: 5y Grade: Kindergarten"
    - generic [ref=e17]:
      - heading "Oral Vocabulary–Synonyms" [level=2] [ref=e18]
      - generic [ref=e19]:
        - text: Read the instructions below or
        - button "begin the test." [disabled] [ref=e20]
    - generic [ref=e21]:
      - heading "Things to Know:" [level=2] [ref=e23]
      - generic [ref=e27]: This test presents items via audio recording.
      - generic [ref=e31]: This test uses voice capture.
      - button "Check Audio Settings" [ref=e32] [cursor=pointer]
    - generic [ref=e33]:
      - paragraph [ref=e34]: Administration Overview
      - generic [ref=e35]:
        - generic [ref=e36]: ✦
        - paragraph [ref=e38]: Before testing, adjust the volume to a comfortably loud level on the examinee’s headphones or tablet speaker.
      - generic [ref=e39]:
        - generic [ref=e40]: ✦
        - paragraph [ref=e42]: Look away from the examinee while an item is being presented from the audio recording. After the two beeps, look expectantly at the examinee.
      - generic [ref=e43]:
        - generic [ref=e44]: ✦
        - paragraph [ref=e46]:
          - text: "Basal: 5 consecutive lowest-numbered items administered correct or Item 1"
          - text: "Ceiling: 5 consecutive highest-numbered items administered incorrect and no higher-numbered items administered are correct, or the last item on the test"
      - generic [ref=e47]:
        - generic [ref=e48]: ✦
        - paragraph [ref=e50]:
          - text: "Unless the scoring key indicates otherwise, accept only one-word responses as correct. If the examinee gives a two-word response, say:"
          - strong [ref=e51]:
            - generic "* Tell me just one word. *"
            - generic [ref=e53]: Tell me just one word.
          - text: "Very young examinees may sometimes respond to this query by saying a word that is unrelated to the item. If that happens, redirect the examinee by saying:"
          - strong [ref=e54]:
            - generic "* Tell me just one word for [word]. *"
            - generic [ref=e56]: Tell me just one word for [word].
      - generic [ref=e57]:
        - generic [ref=e58]: ✦
        - paragraph [ref=e60]: Do not penalize the examinee for mispronunciations resulting from articulation errors, dialect variations, or regional speech patterns.
      - generic [ref=e61]:
        - generic [ref=e62]: ✦
        - paragraph [ref=e64]: The platform will administer Oral Vocabulary–Synonyms first, followed immediately by Oral Vocabulary–Antonyms.
      - generic [ref=e65]:
        - generic [ref=e66]: ✦
        - paragraph [ref=e68]: Know the exact pronunciation of each test item before administering this test.
      - generic [ref=e69]:
        - generic [ref=e70]: ✦
        - paragraph [ref=e72]: Present Sample Item A orally. Present Sample Item B and all test items from the audio recording.
      - generic [ref=e73]:
        - generic [ref=e74]: ✦
        - paragraph [ref=e76]: If the examinee demonstrates difficulty with the audio recording, you may present all items orally. If presenting items orally, say each item exactly as it is presented on the audio recording.
      - generic [ref=e77]:
        - generic [ref=e78]: ✦
        - paragraph [ref=e80]: The platform alerts you when 30 seconds have elapsed on any test item. Encourage the examinee to respond. If the examinee does not appear to be actively engaged in the item, select No Response.
      - generic [ref=e81]:
        - generic [ref=e82]: ✦
        - paragraph [ref=e84]: Score a response correct if it differs from the correct response(s) provided only in verb tense or number (singular/plural), unless the scoring key indicates otherwise.
      - generic [ref=e85]:
        - generic [ref=e86]: ✦
        - paragraph [ref=e88]: Score a response incorrect if the examinee substitutes a different part of speech, such as a noun for a verb, unless the scoring key indicates otherwise.
      - generic [ref=e89]:
        - generic [ref=e90]: ✦
        - paragraph [ref=e92]: You may repeat any item on this test if the examinee requests it.
      - generic [ref=e93]:
        - generic [ref=e94]: ✦
        - paragraph [ref=e96]: This test contains one or more Sample Items.
      - generic [ref=e97]:
        - generic [ref=e98]: ✦
        - paragraph [ref=e100]: The platform selects an appropriate starting point based on the examinee’s age or grade/education level.
      - generic [ref=e101]:
        - generic [ref=e102]: ✦
        - paragraph [ref=e104]: The test ends when the examinee has met the basal and ceiling requirements.
      - paragraph [ref=e105]: Scoring
      - generic [ref=e106]:
        - generic [ref=e107]: ✦
        - paragraph [ref=e109]: If the examinee provides a response that requires querying, click the response and follow the instructions to query for more information. Then select the response option from the scoring key that matches the examinee’s next response.
      - generic [ref=e110]:
        - generic [ref=e111]: ✦
        - paragraph [ref=e113]: The platform assigns 1 point for correct responses and 0 points for incorrect responses.
      - generic [ref=e114]:
        - generic [ref=e115]: ✦
        - paragraph [ref=e117]: The platform computes the total test score by summing the item scores for all administered items and adding 1 point for each unadministered item below the basal.
      - generic [ref=e118]:
        - generic [ref=e119]: ✦
        - paragraph [ref=e121]: For each item administered, select the response option from the scoring key that matches the examinee’s response. If the examinee provides a response that is not listed in the scoring key, use the Other option to assign it a score of 1 (correct) or 0 (incorrect).
    - generic [ref=e122]:
      - button "Letʼs Begin" [ref=e123] [cursor=pointer]
      - button "SCROLL FOR MORE ↓" [ref=e124] [cursor=pointer]:
        - text: SCROLL
        - text: FOR MORE
        - text: ↓
  - dialog [ref=e126]:
    - banner [ref=e127]:
      - button "Main Navigation" [ref=e128] [cursor=pointer]
      - generic [ref=e129]: Review Mode
      - generic [ref=e130]:
        - generic [ref=e131]:
          - 'button "N4371A8017, Lydia Age: 5y Grade: Kindergarten" [ref=e132] [cursor=pointer]':
            - img [ref=e133]
            - generic [ref=e136]:
              - generic [ref=e137]: N4371A8017, Lydia
              - generic [ref=e138]: "Age: 5y Grade: Kindergarten"
          - button "Open Notes" [ref=e139] [cursor=pointer]:
            - generic [ref=e140]: Note
        - generic [ref=e142]: Examinee Not Connected
    - generic [ref=e143]:
      - heading "Review Mode Dashboard" [level=2] [ref=e144]
      - generic [ref=e145]: Navigate to any test to review content, edit scores, resolve flags, listen to audio recordings, and more.
    - generic [ref=e146]:
      - generic [ref=e148]:
        - generic [ref=e149]:
          - img [ref=e150]
          - generic [ref=e152]: Form A (+1 more)
          - button "Hide Scores" [ref=e153] [cursor=pointer]
        - generic [ref=e154]:
          - generic [ref=e156]:
            - button "Not Yet Administered Analysis-Synthesis" [ref=e157] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e158]
              - generic [ref=e162]: Analysis-Synthesis
            - button "Skip test" [ref=e163] [cursor=pointer]: ✕
          - generic [ref=e165]:
            - button "Not Yet Administered Applied Problems" [ref=e166] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e167]
              - generic [ref=e171]: Applied Problems
            - button "Skip test" [ref=e172] [cursor=pointer]: ✕
          - generic [ref=e174]:
            - button "Not Yet Administered Block Rotation" [ref=e175] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e176]
              - generic [ref=e180]: Block Rotation
            - button "Skip test" [ref=e181] [cursor=pointer]: ✕
          - generic [ref=e183]:
            - button "Not Yet Administered Calculation" [ref=e184] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e185]
              - generic [ref=e189]: Calculation
            - button "Skip test" [ref=e190] [cursor=pointer]: ✕
          - generic [ref=e192]:
            - button "Not Yet Administered Letter-Word Identification" [ref=e193] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e194]
              - generic [ref=e198]: Letter-Word Identification
            - button "Skip test" [ref=e199] [cursor=pointer]: ✕
          - generic [ref=e201]:
            - button "Not Yet Administered Letter-Pattern Matching" [ref=e202] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e203]
              - generic [ref=e207]: Letter-Pattern Matching
            - button "Skip test" [ref=e208] [cursor=pointer]: ✕
          - generic [ref=e210]:
            - button "Not Yet Administered Math Facts Fluency" [ref=e211] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e212]
              - generic [ref=e216]: Math Facts Fluency
            - button "Skip test" [ref=e217] [cursor=pointer]: ✕
          - generic [ref=e219]:
            - button "Not Yet Administered Math Problem Identification" [ref=e220] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e221]
              - generic [ref=e225]: Math Problem Identification
            - button "Skip test" [ref=e226] [cursor=pointer]: ✕
          - generic [ref=e227]:
            - generic [ref=e228]:
              - button "Complete Matrices" [ref=e229] [cursor=pointer]:
                - img "Complete" [ref=e230]
                - generic [ref=e234]: Matrices
              - button "Skip test" [ref=e235] [cursor=pointer]: ✕
            - generic [ref=e236]:
              - generic [ref=e237]:
                - generic [ref=e238]:
                  - generic [ref=e239]: SS
                  - generic [ref=e240]:
                    - text: <40–74
                    - img [ref=e242]
                - generic [ref=e244]:
                  - generic [ref=e245]: PR
                  - generic [ref=e246]:
                    - text: <1–4
                    - img [ref=e248]
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: AE
                  - generic [ref=e253]: <4y0m
                - generic [ref=e254]:
                  - generic [ref=e255]: GE
                  - generic [ref=e256]: <GK.0
          - generic [ref=e258]:
            - button "Not Yet Administered Number-Pattern Matching" [ref=e259] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e260]
              - generic [ref=e264]: Number-Pattern Matching
            - button "Skip test" [ref=e265] [cursor=pointer]: ✕
          - generic [ref=e267]:
            - button "Not Yet Administered Oral Comprehension" [ref=e268] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e269]
              - generic [ref=e273]: Oral Comprehension
            - button "Skip test" [ref=e274] [cursor=pointer]: ✕
          - generic [ref=e276]:
            - button "Not Yet Administered Numbers Reversed" [ref=e277] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e278]
              - generic [ref=e282]: Numbers Reversed
            - button "Skip test" [ref=e283] [cursor=pointer]: ✕
          - generic [ref=e285]:
            - button "Not Yet Administered Oral Language Samples" [ref=e286] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e287]
              - generic [ref=e291]: Oral Language Samples
            - button "Skip test" [ref=e292] [cursor=pointer]: ✕
          - generic [ref=e293]:
            - generic [ref=e294]:
              - button "Complete Oral Vocabulary–Synonyms" [ref=e295] [cursor=pointer]:
                - img "Complete" [ref=e296]
                - generic [ref=e300]: Oral Vocabulary–Synonyms
              - button "Skip test" [ref=e301] [cursor=pointer]: ✕
            - generic [ref=e302]:
              - generic [ref=e303]:
                - generic [ref=e304]:
                  - generic [ref=e305]: SS
                  - generic [ref=e306]:
                    - text: 66–89
                    - img [ref=e308]
                - generic [ref=e310]:
                  - generic [ref=e311]: PR
                  - generic [ref=e312]:
                    - text: 1–23
                    - img [ref=e314]
              - generic [ref=e316]:
                - generic [ref=e317]:
                  - generic [ref=e318]: AE
                  - generic [ref=e319]: <4y0m
                - generic [ref=e320]:
                  - generic [ref=e321]: GE
                  - generic [ref=e322]: <GK.0
          - generic [ref=e323]:
            - generic [ref=e324]:
              - button "Complete Oral Vocabulary–Antonyms" [ref=e325] [cursor=pointer]:
                - img "Complete" [ref=e326]
                - generic [ref=e330]: Oral Vocabulary–Antonyms
              - button "Skip test" [ref=e331] [cursor=pointer]: ✕
            - generic [ref=e332]:
              - generic [ref=e333]:
                - generic [ref=e334]:
                  - generic [ref=e335]: SS
                  - generic [ref=e336]:
                    - text: 66–89
                    - img [ref=e338]
                - generic [ref=e340]:
                  - generic [ref=e341]: PR
                  - generic [ref=e342]:
                    - text: 1–23
                    - img [ref=e344]
              - generic [ref=e346]:
                - generic [ref=e347]:
                  - generic [ref=e348]: AE
                  - generic [ref=e349]: <4y0m
                - generic [ref=e350]:
                  - generic [ref=e351]: GE
                  - generic [ref=e352]: <GK.0
          - generic [ref=e354]:
            - button "Not Yet Administered Paragraph Reading Comprehension" [ref=e355] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e356]
              - generic [ref=e360]: Paragraph Reading Comprehension
            - button "Skip test" [ref=e361] [cursor=pointer]: ✕
          - generic [ref=e363]:
            - button "Not Yet Administered Passage Comprehension" [ref=e364] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e365]
              - generic [ref=e369]: Passage Comprehension
            - button "Skip test" [ref=e370] [cursor=pointer]: ✕
          - generic [ref=e372]:
            - button "Not Yet Administered Phonemic Word Retrieval" [ref=e373] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e374]
              - generic [ref=e378]: Phonemic Word Retrieval
            - button "Skip test" [ref=e379] [cursor=pointer]: ✕
          - generic [ref=e381]:
            - button "Not Yet Administered Picture Vocabulary" [ref=e382] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e383]
              - generic [ref=e387]: Picture Vocabulary
            - button "Skip test" [ref=e388] [cursor=pointer]: ✕
          - generic [ref=e390]:
            - button "Not Yet Administered Semantic Word Retrieval" [ref=e391] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e392]
              - generic [ref=e396]: Semantic Word Retrieval
            - button "Skip test" [ref=e397] [cursor=pointer]: ✕
          - generic [ref=e399]:
            - button "Not Yet Administered Sentence Reading Fluency" [ref=e400] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e401]
              - generic [ref=e405]: Sentence Reading Fluency
            - button "Skip test" [ref=e406] [cursor=pointer]: ✕
          - generic [ref=e408]:
            - button "Not Yet Administered Sentence Writing Fluency" [ref=e409] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e410]
              - generic [ref=e414]: Sentence Writing Fluency
            - button "Skip test" [ref=e415] [cursor=pointer]: ✕
          - generic [ref=e417]:
            - button "Not Yet Administered Sentence Writing Accuracy" [ref=e418] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e419]
              - generic [ref=e423]: Sentence Writing Accuracy
            - button "Skip test" [ref=e424] [cursor=pointer]: ✕
          - generic [ref=e426]:
            - button "Not Yet Administered Spatial Relations" [ref=e427] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e428]
              - generic [ref=e432]: Spatial Relations
            - button "Skip test" [ref=e433] [cursor=pointer]: ✕
          - generic [ref=e435]:
            - button "Not Yet Administered Story Comprehension" [ref=e436] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e437]
              - generic [ref=e441]: Story Comprehension
            - button "Skip test" [ref=e442] [cursor=pointer]: ✕
          - generic [ref=e444]:
            - button "Not Yet Administered Spelling" [ref=e445] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e446]
              - generic [ref=e450]: Spelling
            - button "Skip test" [ref=e451] [cursor=pointer]: ✕
          - generic [ref=e453]:
            - button "Not Yet Administered Story Recall" [ref=e454] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e455]
              - generic [ref=e459]: Story Recall
            - button "Skip test" [ref=e460] [cursor=pointer]: ✕
          - generic [ref=e462]:
            - button "Not Yet Administered Verbal Analogies" [ref=e463] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e464]
              - generic [ref=e468]: Verbal Analogies
            - button "Skip test" [ref=e469] [cursor=pointer]: ✕
          - generic [ref=e470]:
            - generic [ref=e471]:
              - button "Complete Verbal Attention" [ref=e472] [cursor=pointer]:
                - img "Complete" [ref=e473]
                - generic [ref=e477]: Verbal Attention
              - button "Skip test" [ref=e478] [cursor=pointer]: ✕
            - generic [ref=e479]:
              - generic [ref=e480]:
                - generic [ref=e481]:
                  - generic [ref=e482]: SS
                  - generic [ref=e483]:
                    - text: 50–80
                    - img [ref=e485]
                - generic [ref=e487]:
                  - generic [ref=e488]: PR
                  - generic [ref=e489]:
                    - text: <1–9
                    - img [ref=e491]
              - generic [ref=e493]:
                - generic [ref=e494]:
                  - generic [ref=e495]: AE
                  - generic [ref=e496]: <4y0m
                - generic [ref=e497]:
                  - generic [ref=e498]: GE
                  - generic [ref=e499]: <GK.0
          - generic [ref=e501]:
            - button "Not Yet Administered Word Attack" [ref=e502] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e503]
              - generic [ref=e507]: Word Attack
            - button "Skip test" [ref=e508] [cursor=pointer]: ✕
          - generic [ref=e510]:
            - button "Not Yet Administered Word Reading Fluency" [ref=e511] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e512]
              - generic [ref=e516]: Word Reading Fluency
            - button "Skip test" [ref=e517] [cursor=pointer]: ✕
          - generic [ref=e519]:
            - button "Not Yet Administered Written Language Samples" [ref=e520] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e521]
              - generic [ref=e525]: Written Language Samples
            - button "Skip test" [ref=e526] [cursor=pointer]: ✕
          - generic [ref=e528]:
            - button "Not Yet Administered Academic Vocabulary" [ref=e529] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e530]
              - generic [ref=e534]: Academic Vocabulary
            - button "Skip test" [ref=e535] [cursor=pointer]: ✕
          - generic [ref=e537]:
            - button "Not Yet Administered General Information–Where" [ref=e538] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e539]
              - generic [ref=e543]: General Information–Where
            - button "Skip test" [ref=e544] [cursor=pointer]: ✕
          - generic [ref=e546]:
            - button "Not Yet Administered General Information–What" [ref=e547] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e548]
              - generic [ref=e552]: General Information–What
            - button "Skip test" [ref=e553] [cursor=pointer]: ✕
          - generic [ref=e555]:
            - button "Not Yet Administered Memory for Words" [ref=e556] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e557]
              - generic [ref=e561]: Memory for Words
            - button "Skip test" [ref=e562] [cursor=pointer]: ✕
          - generic [ref=e564]:
            - button "Not Yet Administered Nonsense Word Repetition" [ref=e565] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e566]
              - generic [ref=e570]: Nonsense Word Repetition
            - button "Skip test" [ref=e571] [cursor=pointer]: ✕
          - generic [ref=e573]:
            - button "Not Yet Administered Number Series" [ref=e574] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e575]
              - generic [ref=e579]: Number Series
            - button "Skip test" [ref=e580] [cursor=pointer]: ✕
          - generic [ref=e582]:
            - button "Not Yet Administered Oral Reading" [ref=e583] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e584]
              - generic [ref=e588]: Oral Reading
            - button "Skip test" [ref=e589] [cursor=pointer]: ✕
          - generic [ref=e591]:
            - button "Not Yet Administered Rapid Letter Naming" [ref=e592] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e593]
              - generic [ref=e597]: Rapid Letter Naming
            - button "Skip test" [ref=e598] [cursor=pointer]: ✕
          - generic [ref=e600]:
            - button "Not Yet Administered Rapid Phoneme Naming" [ref=e601] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e602]
              - generic [ref=e606]: Rapid Phoneme Naming
            - button "Skip test" [ref=e607] [cursor=pointer]: ✕
          - generic [ref=e609]:
            - button "Not Yet Administered Rapid Picture Naming" [ref=e610] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e611]
              - generic [ref=e615]: Rapid Picture Naming
            - button "Skip test" [ref=e616] [cursor=pointer]: ✕
          - generic [ref=e618]:
            - button "Not Yet Administered Segmentation" [ref=e619] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e620]
              - generic [ref=e624]: Segmentation
            - button "Skip test" [ref=e625] [cursor=pointer]: ✕
          - generic [ref=e627]:
            - button "Not Yet Administered Sentence Repetition" [ref=e628] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e629]
              - generic [ref=e633]: Sentence Repetition
            - button "Skip test" [ref=e634] [cursor=pointer]: ✕
          - generic [ref=e636]:
            - button "Not Yet Administered Sound Blending" [ref=e637] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e638]
              - generic [ref=e642]: Sound Blending
            - button "Skip test" [ref=e643] [cursor=pointer]: ✕
          - generic [ref=e645]:
            - button "Not Yet Administered Sound Deletion" [ref=e646] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e647]
              - generic [ref=e651]: Sound Deletion
            - button "Skip test" [ref=e652] [cursor=pointer]: ✕
          - generic [ref=e654]:
            - button "Not Yet Administered Sound Reversal" [ref=e655] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e656]
              - generic [ref=e660]: Sound Reversal
            - button "Skip test" [ref=e661] [cursor=pointer]: ✕
          - generic [ref=e663]:
            - button "Not Yet Administered Sound Substitution" [ref=e664] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e665]
              - generic [ref=e669]: Sound Substitution
            - button "Skip test" [ref=e670] [cursor=pointer]: ✕
          - generic [ref=e672]:
            - button "Not Yet Administered Spelling of Sounds" [ref=e673] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e674]
              - generic [ref=e678]: Spelling of Sounds
            - button "Skip test" [ref=e679] [cursor=pointer]: ✕
          - generic [ref=e681]:
            - button "Not Yet Administered Academic Facts" [ref=e682] [cursor=pointer]:
              - img "Not Yet Administered" [ref=e683]
              - generic [ref=e687]: Academic Facts
            - button "Skip test" [ref=e688] [cursor=pointer]: ✕
        - button "+ Add Test" [ref=e689] [cursor=pointer]
      - generic [ref=e691]:
        - heading "Administration Summary" [level=2] [ref=e693]
        - generic [ref=e694]:
          - generic [ref=e695]:
            - heading "Score Later *" [level=4] [ref=e696]
            - generic [ref=e697]: No items
            - heading "Needs Attention *" [level=4] [ref=e698]
            - generic [ref=e699]: No items
            - heading "Invalidated Tests Not available for reporting" [level=4] [ref=e700]
            - generic [ref=e701]: No items
          - generic [ref=e702]:
            - heading "Flagged Items" [level=4] [ref=e703]
            - generic [ref=e704]: No items
        - generic [ref=e705]: "*Resolve all Score Later and Needs Attention items before submitting. When sharing, coordinate with your collaborator."
    - generic [ref=e706]:
      - generic [ref=e707]: "Warning: Changing scores may result in the need to administer additional items to examinee to retrieve valid test scores."
      - button "Exit Review Mode" [ref=e708] [cursor=pointer]
      - button "Submit Test Assignment" [disabled] [ref=e709]
  - alertdialog [active] [ref=e711]:
    - alert [ref=e712]:
      - generic [ref=e713]:
        - img [ref=e715]
        - generic [ref=e720]:
          - generic [ref=e721]: Are you sure you want to skip this test?
          - generic [ref=e722]: Skipping this test means your score will not be included in the final report.
    - navigation [ref=e723]:
      - button "Yes, skip" [ref=e724] [cursor=pointer]
      - button "No" [ref=e725] [cursor=pointer]
```

# Test source

```ts
  855  |   }
  856  |   async clickOnFirstRow() {
  857  |     await this.rowButton
  858  |       .first()
  859  |       .locator("td:nth-child(1) button")
  860  |       .click({ force: true });
  861  |     await this.page.waitForTimeout(2000);
  862  |     await this.waitForLoadingSpinnerToDisappear();
  863  |   }
  864  | 
  865  |   async clickOnRowByTestSetName(testSetName: string) {
  866  |     const rowCount = await this.myTestAssignmentsRow.count();
  867  |     for (let i = 0; i < rowCount; i++) {
  868  |       const row = this.myTestAssignmentsRow.nth(i);
  869  |       const testSet = await row.locator('td:nth-child(2)').textContent();
  870  |       if (testSet?.trim() === testSetName) {
  871  |         await row.click();
  872  |         await this.page.waitForTimeout(2000);
  873  |         return;
  874  |       }
  875  |     }
  876  |     throw new Error(`No row found with test set name: "${testSetName}"`);
  877  |   }
  878  | 
  879  |   async generateReport(examineeId: string): Promise<[Page, Page]> {
  880  |     await this.searchForExamineeAtSearchMyTestAssignments(examineeId);
  881  |     await this.waitForLoadingSpinnerToDisappear();
  882  | 
  883  |     // await this.generateReportIcon.first().click();
  884  |     await this.getLinkButton('ellipsis').click();
  885  |     await this.page.locator("//button[text()='Generate Report']").click();
  886  | 
  887  |     await this.waitForLoadingIconToDisappear();
  888  |     await this.nextButton.click();
  889  |     await this.nextButton.click();
  890  | 
  891  |     const [newPage] = await Promise.all([
  892  |       this.page.context().waitForEvent("page"),
  893  |       this.generateReportButton.last().click(),
  894  |     ]);
  895  | 
  896  |     return [this.page, newPage] as [Page, Page];
  897  |   }
  898  | 
  899  |   async goToDashboardFromMainNavigation() {
  900  |     await this.page.bringToFront();
  901  |     await this.mainNavigation.click();
  902  |     await this.mainNavigationHome.click();
  903  |     await this.areYouSureYesButton.click();
  904  |     await this.waitForLoadingSpinnerToDisappear();
  905  |   }
  906  | 
  907  |   async closeLaunchTestSessionPopUp() {
  908  |     await this.closeSessionIntroCrossIcon.click();
  909  |     await this.waitForLoadingSpinnerToDisappear();
  910  |   }
  911  | 
  912  |   async clickOnReviewMode() {
  913  |     await this.reviewModeButton.click();
  914  |   }
  915  | 
  916  |   async getStatusOfSubmitTestAssignmentButton() {
  917  |     await this.submitTestSetAndFinishAdministration.waitFor({
  918  |       state: "visible",
  919  |       timeout: 2 * 60 * 1000,
  920  |     });
  921  |     await this.page.waitForTimeout(3000);
  922  |     return await this.submitTestSetAndFinishAdministration.isDisabled();
  923  |   }
  924  | 
  925  |   async verifyReviewModeDashboardIsVisible() {
  926  |     await this.reviewModeDashboardHeader.waitFor({
  927  |       state: "visible",
  928  |       timeout: 2 * 60 * 1000,
  929  |     });
  930  |     await expect(this.reviewModeDashboardHeader).toBeVisible();
  931  |     await this.page.waitForTimeout(2000);
  932  |   }
  933  | 
  934  |   async verifyAdministrationSummaryIsVisible() {
  935  |    await this.waitForLoadingInnerToDisappear();
  936  |     await this.administrationSummaryHeader.waitFor({
  937  |       state: "visible",
  938  |       timeout: 1 * 60 * 1000,
  939  |     });
  940  |     await expect(this.administrationSummaryHeader).toBeVisible();
  941  |     await this.page.waitForTimeout(2000);
  942  |   }
  943  | 
  944  |   private async waitForLoadingInnerToDisappear() {
  945  |         try {
  946  |       await this.loadingIcon.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  947  |     } catch (error) {
  948  |       await this.page.reload();
  949  |       console.error("Loading icon did not disappear in time:", error);
  950  |     }
  951  | 
  952  |   }
  953  | 
  954  |   async exitReviewMode() {
> 955  |     await this.exitReviewModeButton.click();
       |                                     ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  956  |     await this.waitForLoadingSpinnerToDisappear();
  957  |   }
  958  | 
  959  |   async selectFollowingTestFromTestsList(testName: string) {
  960  |     await this.page
  961  |       .locator(`//div[contains(@class, 'testName')][text()='${testName}']`)
  962  |       .click();
  963  |   }
  964  | 
  965  |   async clickBackToReviewButton() {
  966  |     await this.backToReviewButton.last().click();
  967  |     await this.page.waitForLoadState("domcontentloaded");
  968  |     await this.waitForLoadingResultsToDisappear();
  969  |   }
  970  | 
  971  |   async waitForLoadingResultsToDisappear() {
  972  |     await this.loadingResults.waitFor({ state: "hidden", timeout: 2 * 60 * 1000 });
  973  |   }
  974  | 
  975  |   async changeResponse(
  976  |     item: string,
  977  |     initialResponse: number,
  978  |     updatedResponse: number,
  979  |   ) {
  980  |     await this.clickFollowingItem(item);
  981  |     await this.page.waitForTimeout(2000);
  982  |     await this.openNotesIcon.hover();
  983  |     await this.selectResponse(initialResponse);
  984  |     await this.page.waitForTimeout(3000);
  985  |     await this.selectResponse(updatedResponse);
  986  |     await this.page.waitForTimeout(2000);
  987  |   }
  988  | 
  989  |   private async selectResponse(response: number) {
  990  |     let button;
  991  | 
  992  |     if (response === 0) {
  993  |       button = this.incorrectOptionButton.first();
  994  |     } else if (response === 1) {
  995  |       button = this.correctOptionButton.first();
  996  |     } else {
  997  |       throw new Error(`Invalid response: ${response}`);
  998  |     }
  999  | 
  1000 |     await expect(button).toBeEnabled({ timeout: 5000 });
  1001 |     await button.click();
  1002 |   }
  1003 | 
  1004 |   async submitTestAssignment() {
  1005 |     await this.submitTestSetAndFinishAdministration.click();
  1006 |     await this.nextButton.click();
  1007 |     await this.submitTestSetAndFinishAdministration.last().click();
  1008 |     await this.page.waitForTimeout(2000);
  1009 |     await this.testAssignmentSubmittedPopUp.waitFor({
  1010 |       state: "hidden",
  1011 |       timeout: 2 * 60 * 1000,
  1012 |     });
  1013 |   }
  1014 | 
  1015 |   async addNewTestToBlock() {
  1016 |     await this.addTestButton.click();
  1017 |     await this.waitForLoadingSpinnerToDisappear();
  1018 |     await this.getCheckboxLocator('unchecked')
  1019 |       .first()
  1020 |       .click();
  1021 |     await this.addTestsButton.click();
  1022 |   }
  1023 | 
  1024 |   async skipFollowingTestFromTestsList(testName: string) {
  1025 |     await this.page
  1026 |       .locator(
  1027 |         `//div[contains(@class, 'testName')][text()='${testName}']//parent::button//following-sibling::button[contains(@class,'skipTest')]`,
  1028 |       )
  1029 |       .click();
  1030 |     await this.page.waitForLoadState("domcontentloaded");
  1031 |   }
  1032 | 
  1033 |   async addTestNotedAndFlag(item: string, notes: string, flad?: boolean) {
  1034 |     await this.clickFollowingItem(item);
  1035 |     await this.addNotes("test", notes);
  1036 |     await this.verifySavedNotes("test", notes);
  1037 |     await this.page.waitForTimeout(1000);
  1038 |     await this.flagIcon.click();
  1039 |     await this.page.waitForTimeout(1000);
  1040 |     await this.verifyFlagged();
  1041 |   }
  1042 | 
  1043 |   async addNotes(level: string, notes: string) {
  1044 |     await this.openNotesIcon.click();
  1045 |     await this.selectNotesDropdown(level);
  1046 |     await this.notesText.fill(notes);
  1047 |     await this.notesSaveButton.click();
  1048 |   }
  1049 | 
  1050 |   async verifySavedNotes(level: string, notes: string) {
  1051 |     await this.openNotesIcon.click();
  1052 |     await this.selectNotesDropdown(level);
  1053 |     await this.notesText.waitFor({ state: "visible" });
  1054 |     const text = await this.notesText.textContent();
  1055 |     expect.soft(text, "Notes not saved").toBe(notes);
```