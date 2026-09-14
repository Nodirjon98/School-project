# -*- coding: utf-8 -*-
"""
Authentic Murphy Essential Grammar Content: Units 6 to 40
"""

UNITS_6_TO_40 = {
    6: {
        "ruleTitle": "Present Simple Inkor Shakli (don't / doesn't)",
        "formula": "Subject + don't / doesn't + Verb (bare infinitive)",
        "positive": [
          "I / We / You / They drink coffee in the morning.",
          "He / She / It plays the guitar very well."
        ],
        "negative": [
          "I / We / You / They don't (do not) drink tea.",
          "He / She / It doesn't (does not) play the piano."
        ],
        "explanationUz": "Present Simple zamonida inkor gaplar yasash uchun don't (I, you, we, they) va doesn't (he, she, it) ishlatiladi. 'Doesn't' ishlatilganda asosiy fe'lga -s qo'shimchasi qo'shilmaydi.",
        "examples": [
          {"en": "I drink coffee, but I don't drink tea.", "uz": "Men kofe ichaman, lekin choy ichmayman."},
          {"en": "Sue drinks tea, but she doesn't drink coffee.", "uz": "Syu choy ichadi, lekin kofe ichmaydi."},
          {"en": "They don't work on Saturdays and Sundays.", "uz": "Ular shanba va yakshanba kunlari ishlamaydilar."}
        ],
        "exercises": [
          {
            "id": "u6-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri inkor shaklini tanlang",
            "prompt": "David _____ a car because he rides his bicycle everywhere.",
            "options": ["doesn't have", "don't have", "doesn't has", "not has"],
            "correctAnswer": "doesn't have",
            "explanationUz": "David (he) uchinchi shaxs birlikda, inkor shakli 'doesn't have' bo'ladi.",
            "points": 15
          },
          {
            "id": "u6-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga don't yoki doesn't yozing",
            "prompt": "We _____ watch television very often.",
            "correctAnswer": "don't",
            "explanationUz": "'We' ko'plik shaxs olmoshi uchun 'don't' ishlatiladi.",
            "points": 15
          }
        ]
    },
    7: {
        "ruleTitle": "Present Simple So'roq Shakli (Do / Does)",
        "formula": "Do / Does + Subject + Verb (infinitive)?",
        "positive": [
          "Do you play tennis? -> Yes, I do. / No, I don't.",
          "Does Chris live in London? -> Yes, he does."
        ],
        "negative": [
          "Where do your parents live?",
          "How often does it rain here in summer?"
        ],
        "explanationUz": "Present Simple so'rog'ida gap boshida Do (I, you, we, they) yoki Does (he, she, it) ishlatiladi. Maxsus so'roq so'zlari (Where, What, When) Do/Does dan oldin keladi.",
        "examples": [
          {"en": "Do you play the guitar? - No, I don't.", "uz": "Gitara chalasizmi? - Yo'q, chalmayman."},
          {"en": "Where does your sister work?", "uz": "Singlingiz qayerda ishlaydi?"},
          {"en": "Does it rain a lot in spring?", "uz": "Bahorda ko'p yomg'ir yog'adimi?"}
        ],
        "exercises": [
          {
            "id": "u7-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri yordamchi fe'lni tanlang",
            "prompt": "_____ your parents speak English fluently?",
            "options": ["Do", "Does", "Are", "Is"],
            "correctAnswer": "Do",
            "explanationUz": "'Your parents' ko'plikdagi shaxslar (they) bo'lgani uchun 'Do' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u7-ex2",
            "type": "fill_in_gap",
            "instruction": "So'roq yordamchi fe'lini kiriting (Do yoki Does)",
            "prompt": "Where _____ Linda live?",
            "correctAnswer": "does",
            "explanationUz": "Linda (she) uchinchi shaxs birlikda bo'lgani uchun 'does' kerak.",
            "points": 15
          }
        ]
    },
    8: {
        "ruleTitle": "Present Continuous vs Present Simple Taqqoslash",
        "formula": "Continuous: am/is/are + V-ing (hozir) VS Simple: V/V-s (doimiy)",
        "positive": [
          "I am doing something = Men hozir ayni paytda bajaryapman.",
          "I do something = Men doimiy, odatiy tarzda bajaraman."
        ],
        "negative": [
          "The water is boiling. Can you turn it off? (ayni paytda).",
          "Water boils at 100 degrees Celsius (umumiy ilmiy haqiqat)."
        ],
        "explanationUz": "Present Continuous nutq vaqtidagi vaqtinchalik harakatlar uchun, Present Simple esa doimiy odat va faktlar uchun qo'llaniladi. Know, like, love, want, understand kabi fe'llar faqat Simple da keladi.",
        "examples": [
          {"en": "Look! That man is trying to open your car door.", "uz": "Qara! U odam mashinang eshigini ochishga urinyapti."},
          {"en": "The moon goes round the earth.", "uz": "Oy yer atrofida aylanadi."},
          {"en": "I don't understand this word.", "uz": "Men bu so'zni tushunmayapman."}
        ],
        "exercises": [
          {
            "id": "u8-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri zamon shaklini tanlang",
            "prompt": "Please be quiet! I _____ to concentrate on my homework.",
            "options": ["am trying", "try", "tried", "tries"],
            "correctAnswer": "am trying",
            "explanationUz": "Ayni paytda sodir bo'layotgan jarayon ifodalanayotgani sababli 'am trying' to'g'ri.",
            "points": 15
          },
          {
            "id": "u8-ex2",
            "type": "fill_in_gap",
            "instruction": "Qavsdagi fe'lni to'g'ri shaklda yozing (know)",
            "prompt": "Do you _____ that girl over there?",
            "correctAnswer": "know",
            "explanationUz": "'Know' holat fe'li bo'lib, odatda Continuous shaklida ishlatilmaydi.",
            "points": 15
          }
        ]
    },
    9: {
        "ruleTitle": "I have ... va I've got ... (Egalik ifodalash)",
        "formula": "I / You / We / They have (got) | He / She / It has (got)",
        "positive": [
          "I've got a new smartphone. = I have a new smartphone.",
          "Mr. Davis has got three children. = Mr. Davis has three children."
        ],
        "negative": [
          "I haven't got a car. = I don't have a car.",
          "She hasn't got many friends. = She doesn't have many friends."
        ],
        "explanationUz": "Egalik, munosabatlar va kasalliklarni ifodalashda 'have' yoki 'have got' ishlatiladi. 'Have got' ko'proq kundalik jonli tilda ishlatiladi.",
        "examples": [
          {"en": "I've got a headache today.", "uz": "Bugun boshim og'riyapti."},
          {"en": "Have you got an umbrella? - Yes, in my bag.", "uz": "Zontigingiz bormi? - Ha, sumkamda."},
          {"en": "They don't have any money.", "uz": "Ularda hech qanday pul yo'q."}
        ],
        "exercises": [
          {
            "id": "u9-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri shaklni tanlang",
            "prompt": "Excuse me, _____ got a pen I could borrow?",
            "options": ["have you", "do you", "are you", "did you"],
            "correctAnswer": "have you",
            "explanationUz": "'Got' borligi sababli savol 'have you got' shaklida tuziladi.",
            "points": 15
          },
          {
            "id": "u9-ex2",
            "type": "fill_in_gap",
            "instruction": "Inkor shaklini yozing (haven't got / hasn't got)",
            "prompt": "Tom likes sports, but he _____ a bicycle.",
            "correctAnswer": "hasn't got",
            "explanationUz": "Tom (he) uchinchi shaxs birlikda bo'lgani uchun 'hasn't got' bo'ladi.",
            "points": 15
          }
        ]
    },
    10: {
        "ruleTitle": "was / were (Past Simple 'To Be')",
        "formula": "I / He / She / It was | We / You / They were",
        "positive": [
          "I was at work yesterday morning.",
          "They were in London last summer."
        ],
        "negative": [
          "She wasn't (was not) well yesterday.",
          "We weren't (were not) tired after the long walk."
        ],
        "explanationUz": "'Am/is' ning o'tgan zamoni 'was', 'are' ning o'tgan zamoni esa 'were' hisoblanadi. So'roq shaklida was/were egadan oldinga o'tadi.",
        "examples": [
          {"en": "Where were you yesterday at 4 pm?", "uz": "Kecha soat 4 da qayerda edingiz?"},
          {"en": "The hotel was very clean and comfortable.", "uz": "Mehmonxona juda toza va qulay edi."},
          {"en": "Why were you late for school?", "uz": "Nega maktabga kech qoldingiz?"}
        ],
        "exercises": [
          {
            "id": "u10-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri shaklni tanlang",
            "prompt": "The weather _____ wonderful during our holiday in Italy.",
            "options": ["was", "were", "been", "is was"],
            "correctAnswer": "was",
            "explanationUz": "'The weather' birlikda bo'lgani uchun o'tgan zamonda 'was' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u10-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga was yoki were yozing",
            "prompt": "They _____ happy with the exam results.",
            "correctAnswer": "were",
            "explanationUz": "'They' ko'plik olmoshi bilan 'were' ishlatiladi.",
            "points": 15
          }
        ]
    },
    11: {
        "ruleTitle": "worked / got / went (Past Simple To'g'ri va Noto'g'ri Fe'llar)",
        "formula": "Subject + Verb-ed (regular) / V2 (irregular)",
        "positive": [
          "I worked in a bank for three years.",
          "Yesterday we went to Samarkand by train."
        ],
        "negative": [
          "They stayed in a lovely apartment.",
          "She bought a new laptop last Friday."
        ],
        "explanationUz": "O'tmishda tugallangan aniq harakatlar uchun Past Simple qo'llaniladi. To'g'ri fe'llarga -ed qo'shiladi (clean -> cleaned), noto'g'ri fe'llar esa 2-shakliga o'zgaradi (go -> went, see -> saw).",
        "examples": [
          {"en": "Mozart wrote more than 600 musical works.", "uz": "Motsart 600 dan ortiq musiqiy asarlar yozgan."},
          {"en": "I lost my keys yesterday, but I found them today.", "uz": "Kecha kalitlarimni yo'qotib qo'ygandim, lekin bugun topdim."},
          {"en": "We invited 50 people to our party.", "uz": "Biz kechamizga 50 kishini taklif qildik."}
        ],
        "exercises": [
          {
            "id": "u11-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri Past Simple fe'l shaklini tanlang",
            "prompt": "Last night, I _____ a very interesting documentary on TV.",
            "options": ["watched", "watch", "watching", "watches"],
            "correctAnswer": "watched",
            "explanationUz": "O'tgan zamon (Last night) uchun to'g'ri fe'lga '-ed' qo'shiladi: watched.",
            "points": 15
          },
          {
            "id": "u11-ex2",
            "type": "fill_in_gap",
            "instruction": "Fe'lning Past Simple shaklini yozing (buy)",
            "prompt": "She _____ a beautiful dress for the wedding yesterday.",
            "correctAnswer": "bought",
            "explanationUz": "'Buy' noto'g'ri fe'lining 2-shakli 'bought' hisoblanadi.",
            "points": 15
          }
        ]
    },
    12: {
        "ruleTitle": "I didn't ... Did you ... ? (Past Simple inkor va so'roq)",
        "formula": "Subject + didn't + Verb (bare infinitive) | Did + Subject + Verb?",
        "positive": [
          "Did you go out last night? -> Yes, I did. / No, I didn't.",
          "Did she pass her driving test? -> Yes, she did."
        ],
        "negative": [
          "I didn't watch TV yesterday (didn't watched EMAS!).",
          "They didn't invite us to their wedding."
        ],
        "explanationUz": "Past Simple inkorida 'didn't' va so'rog'ida 'did' qo'llaniladi. 'Did' o'tgan zamon yukini o'ziga olgani sababli asosiy fe'l boshlang'ich lug'aviy shaklga (infinitive) qaytadi.",
        "examples": [
          {"en": "Did you see Jack yesterday? - No, I didn't.", "uz": "Kecha Jekni ko'rdingizmi? - Yo'q, ko'rmadim."},
          {"en": "It was warm, so I didn't wear a jacket.", "uz": "Havo iliq edi, shuning uchun kurtka kiymadim."},
          {"en": "What time did the train arrive?", "uz": "Poyezd soat nechada yetib keldi?"}
        ],
        "exercises": [
          {
            "id": "u12-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri inkor shaklini tanlang",
            "prompt": "I was very thirsty, but I _____ anything to drink.",
            "options": ["didn't have", "didn't had", "not have", "not had"],
            "correctAnswer": "didn't have",
            "explanationUz": "'Didn't' dan keyin fe'lning 1-bosh shakli keladi: didn't have.",
            "points": 15
          },
          {
            "id": "u12-ex2",
            "type": "fill_in_gap",
            "instruction": "So'roq yordamchi fe'lini kiriting",
            "prompt": "_____ you sleep well last night?",
            "correctAnswer": "Did",
            "explanationUz": "Past Simple so'roq gapi boshida 'Did' yordamchi fe'li ishlatiladi.",
            "points": 15
          }
        ]
    },
    13: {
        "ruleTitle": "I was doing (Past Continuous O'tgan Davomli Zamon)",
        "formula": "Subject + was / were + Verb-ing",
        "positive": [
          "At 11:30 yesterday, I was playing tennis.",
          "They were having lunch when the phone rang."
        ],
        "negative": [
          "I wasn't listening to the radio.",
          "What were you doing at 10 o'clock last night?"
        ],
        "explanationUz": "O'tmishdagi ma'lum bir daqiqada davom etayotgan harakatlar uchun Past Continuous (was/were + V-ing) ishlatiladi. Harakat o'sha paytda hali tugallanmagan bo'lgan.",
        "examples": [
          {"en": "This time last year, I was living in Brazil.", "uz": "O'tgan yili ayni shu paytda Braziliyada yashayotgan edim."},
          {"en": "The sun was shining and the birds were singing.", "uz": "Quyosh charaqlab, qushlar sayrayotgan edi."},
          {"en": "Were you watching TV when I called you?", "uz": "Men qo'ng'iroq qilganimda televizor ko'rayotganmidingiz?"}
        ],
        "exercises": [
          {
            "id": "u13-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri Past Continuous shaklini tanlang",
            "prompt": "At 8 o'clock yesterday evening, we _____ dinner.",
            "options": ["were having", "was having", "had", "are having"],
            "correctAnswer": "were having",
            "explanationUz": "'We' ko'plikda bo'lgani uchun 'were having' to'g'ri.",
            "points": 15
          },
          {
            "id": "u13-ex2",
            "type": "fill_in_gap",
            "instruction": "Fe'lning to'g'ri shaklini yozing (rain)",
            "prompt": "It was _____ heavily when we left the house.",
            "correctAnswer": "raining",
            "explanationUz": "Past Continuous da was dan keyin fe'lga -ing qo'shiladi: raining.",
            "points": 15
          }
        ]
    },
    14: {
        "ruleTitle": "Past Continuous va Past Simple Birgalikda Qo'llanishi",
        "formula": "While / When + Past Continuous, Past Simple (qisqa to'siq harakat)",
        "positive": [
          "Jack was reading a book when the phone rang.",
          "While I was cooking dinner, I burned my finger."
        ],
        "negative": [
          "It didn't rain while we were on holiday.",
          "What were you doing when the accident happened?"
        ],
        "explanationUz": "O'tmishda bir davomli harakat ketayotganda (Past Continuous) ikkinchi bir qisqa harakat uni kesib o'tsa yoki sodir bo'lsa (Past Simple), ikkala zamon birga ishlatiladi.",
        "examples": [
          {"en": "I saw you yesterday in the park. You were sitting on the grass.", "uz": "Kecha sizni parkda ko'rdim. Siz maysazorda o'tirgan edingiz."},
          {"en": "When Karen arrived, we were having coffee.", "uz": "Karen yetib kelganida biz kofe ichayotgan edik."}
        ],
        "exercises": [
          {
            "id": "u14-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri zamon kombinatsiyasini tanlang",
            "prompt": "I _____ down the street when suddenly I _____ Dave.",
            "options": [
              "was walking / saw",
              "walked / was seeing",
              "was walking / was seeing",
              "walked / saw"
            ],
            "correctAnswer": "was walking / saw",
            "explanationUz": "Ko'chada ketayotgan uzoq davomli harakat (was walking) va to'satdan ko'rib qolish (saw).",
            "points": 15
          },
          {
            "id": "u14-ex2",
            "type": "fill_in_gap",
            "instruction": "Fe'lni to'g'ri o'tgan zamonga qo'ying (ring)",
            "prompt": "The telephone _____ while I was having a shower.",
            "correctAnswer": "rang",
            "explanationUz": "Dush qabul qilish jarayonida qisqa to'siq bo'lgan harakat uchun Past Simple 'rang' ishlatiladi.",
            "points": 15
          }
        ]
    },
    15: {
        "ruleTitle": "I have done (Present Perfect 1 - Hozirgi Natija)",
        "formula": "Subject + have / has + Past Participle (V3 / -ed)",
        "positive": [
          "I've cleaned my shoes. (Shoes are clean NOW).",
          "He has lost his key. (He doesn't have it NOW)."
        ],
        "negative": [
          "They haven't arrived yet.",
          "She hasn't finished her report."
        ],
        "explanationUz": "Present Perfect o'tmishda yuz bergan, ammo natijasi bevosita hozirgi vaqt bilan bog'liq bo'lgan harakatlar uchun qo'llaniladi. He/She/It uchun 'has', boshqalar uchun 'have' ishlatiladi.",
        "examples": [
          {"en": "Where is your key? - I don't know. I've lost it.", "uz": "Kaliting qayerda? - Bilmayman. Uni yo'qotib qo'ydim."},
          {"en": "Mary isn't here. She has gone to the supermarket.", "uz": "Meri bu yerda emas. U supermarketga ketgan."},
          {"en": "Look! Somebody has broken that window.", "uz": "Qarang! Kimdir u derazani sindiribdi."}
        ],
        "exercises": [
          {
            "id": "u15-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri Present Perfect shaklini tanlang",
            "prompt": "Can you help me? I _____ my passport and I can't find it.",
            "options": ["have lost", "lost", "had lost", "am losing"],
            "correctAnswer": "have lost",
            "explanationUz": "Pasport yo'qolgan va uning natijasi hozir ham mavjud (topolmayapman): have lost.",
            "points": 15
          },
          {
            "id": "u15-ex2",
            "type": "fill_in_gap",
            "instruction": "Yordamchi fe'lni yozing (have yoki has)",
            "prompt": "Tom _____ painted the front door green. It looks great!",
            "correctAnswer": "has",
            "explanationUz": "Tom (he) uchinchi shaxs birlik bo'lgani uchun 'has' ishlatiladi.",
            "points": 15
          }
        ]
    },
    16: {
        "ruleTitle": "just, already va yet bilan Present Perfect",
        "formula": "have/has + just / already + V3 | haven't/hasn't + V3 ... yet",
        "positive": [
          "I've just arrived (hozirgina - bir necha daqiqa oldin).",
          "I've already paid the electricity bill (allaqachon - kutilgandan oldin)."
        ],
        "negative": [
          "Has it stopped raining yet? (allaqachon/hali - so'roqda oxirida).",
          "They haven't finished lunch yet (hali ham - inkorda oxirida)."
        ],
        "explanationUz": "'Just' - hozirgina; 'already' - kutilganidan oldinroq (allaqachon). 'Yet' esa faqat inkor va so'roq gaplarning oxirida kelib, 'hali' yoki 'allaqachon' ma'nosini beradi.",
        "examples": [
          {"en": "Would you like something to eat? - No, thanks. I've just had lunch.", "uz": "Biror narsa yeysizmi? - Yo'q, rahmat. Hozirgina tushlik qildim."},
          {"en": "Don't forget to send the email! - I've already sent it.", "uz": "Email jo'natishni unutmang! - Men uni allaqachon jo'natib bo'ldim."},
          {"en": "Is the postman here? - No, he hasn't arrived yet.", "uz": "Pochtachi keldimi? - Yo'q, u hali kelgani yo'q."}
        ],
        "exercises": [
          {
            "id": "u16-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri so'zni tanlang (just / already / yet)",
            "prompt": "I'm not hungry. I have _____ eaten a big sandwich.",
            "options": ["just", "yet", "still", "ago"],
            "correctAnswer": "just",
            "explanationUz": "'Hozirgina yedim' ma'nosida 'have just eaten' to'g'ri keladi.",
            "points": 15
          },
          {
            "id": "u16-ex2",
            "type": "fill_in_gap",
            "instruction": "Gap oxiriga mos so'zni yozing (yet / already)",
            "prompt": "Have you seen the new movie _____?",
            "correctAnswer": "yet",
            "explanationUz": "So'roq gap oxirida 'yet' ishlatiladi.",
            "points": 15
          }
        ]
    },
    17: {
        "ruleTitle": "Have you ever ... ? (Present Perfect Hayotiy Tajriba)",
        "formula": "Have you ever + Past Participle (V3)?",
        "positive": [
          "Have you ever been to Rome? -> Yes, I have. Many times.",
          "I have never eaten sushi in my life."
        ],
        "negative": [
          "Have you ever ridden a horse? -> No, never.",
          "She has never travelled by plane."
        ],
        "explanationUz": "Insonning butun umri davomidagi tajribasini (biror ishni hech qilganmisiz) so'rashda 'Have you ever...?' va inkorida 'I have never...' ishlatiladi. 'Been to' borib kelganlikni anglatadi.",
        "examples": [
          {"en": "Have you ever been to Japan? - No, never.", "uz": "Hech Yaponiyada bo'lganmisiz? - Yo'q, hech qachon."},
          {"en": "I've seen that movie three times.", "uz": "Men u kinoni uch marta ko'rganman."},
          {"en": "Ben has never been late for a class.", "uz": "Ben hech qachon darsga kechikmagan."}
        ],
        "exercises": [
          {
            "id": "u17-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "_____ you ever played cricket before?",
            "options": ["Have", "Did", "Are", "Do"],
            "correctAnswer": "Have",
            "explanationUz": "Hayotiy tajribani so'rashda 'Have you ever + V3' strukturasi ishlatiladi.",
            "points": 15
          },
          {
            "id": "u17-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga ever yoki never yozing",
            "prompt": "She has _____ eaten oysters because she is allergic.",
            "correctAnswer": "never",
            "explanationUz": "'Hech qachon yemagan' ma'nosida 'never' ishlatiladi.",
            "points": 15
          }
        ]
    },
    18: {
        "ruleTitle": "How long have you ... ? (Present Perfect Davomiylik)",
        "formula": "How long + have / has + Subject + V3 / been?",
        "positive": [
          "How long have you lived here? -> I've lived here for two years.",
          "They have been married since 2018."
        ],
        "negative": [
          "How long has he had his car?",
          "We haven't seen each other for ages."
        ],
        "explanationUz": "O'tmishda boshlanib hozirgacha davom etib kelayotgan holat yoki harakatning qancha vaqt davom etayotganini so'rash uchun 'How long have you...?' ishlatiladi.",
        "examples": [
          {"en": "How long have you known each other? - Since school.", "uz": "Bir-biringizni qachondan beri taniysiz? - Maktabdan beri."},
          {"en": "She has been in hospital since Monday.", "uz": "U dushanbadan beri kasalxonada."},
          {"en": "I've had this phone for six months.", "uz": "Bu telefonni olti oydan beri ishlataman."}
        ],
        "exercises": [
          {
            "id": "u18-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri savol shaklini tanlang",
            "prompt": "_____ have you known your best friend?",
            "options": ["How long", "How much", "How many", "When"],
            "correctAnswer": "How long",
            "explanationUz": "Davomiylik vaqtini so'rash uchun 'How long' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u18-ex2",
            "type": "fill_in_gap",
            "instruction": "Yordamchi fe'lni kiriting (have yoki has)",
            "prompt": "How long _____ Helen lived in London?",
            "correctAnswer": "has",
            "explanationUz": "Helen (she) bo'lgani uchun 'has' ishlatiladi.",
            "points": 15
          }
        ]
    },
    19: {
        "ruleTitle": "for, since va ago (Vaqt Ko'rsatkichlari)",
        "formula": "for + davr (two hours) | since + boshlanish nuqtasi (2020) | vaqt + ago (o'tmish)",
        "positive": [
          "I have lived here for 10 years (10 yil davomida).",
          "I have lived here since 2014 (2014-yildan beri).",
          "I arrived here 10 years ago (10 yil oldin - Past Simple!)."
        ],
        "negative": [
          "It hasn't rained since Tuesday.",
          "She left the office two hours ago."
        ],
        "explanationUz": "'For' vaqt oralig'ini (for three days, for six years), 'since' harakat boshlangan aniq vaqt nuqtasini (since Monday, since 2010) ifodalaydi. 'Ago' esa o'tmishda (Past Simple da) ishlatiladi.",
        "examples": [
          {"en": "Jill has been in Ireland since Monday.", "uz": "Jil dushanbadan beri Irlandiyada."},
          {"en": "Jill has been in Ireland for three days.", "uz": "Jil uch kun davomida Irlandiyada bo'lib turibdi."},
          {"en": "Jill arrived in Ireland three days ago.", "uz": "Jil Irlandiyaga uch kun oldin yetib keldi."}
        ],
        "exercises": [
          {
            "id": "u19-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri predlogni tanlang (for / since / ago)",
            "prompt": "They have been waiting at the station _____ half an hour.",
            "options": ["for", "since", "ago", "during"],
            "correctAnswer": "for",
            "explanationUz": "'Half an hour' (yarim soat) vaqt davomiyligi bo'lgani uchun 'for' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u19-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga for yoki since yozing",
            "prompt": "I haven't seen Mark _____ last Christmas.",
            "correctAnswer": "since",
            "explanationUz": "'Last Christmas' aniq boshlanish nuqtasi bo'lgani sababli 'since' to'g'ri keladi.",
            "points": 15
          }
        ]
    },
    20: {
        "ruleTitle": "Present Perfect vs Past Simple Taqqoslash",
        "formula": "Past Simple: tugallangan vaqt (yesterday) VS Present Perfect: hozirgacha",
        "positive": [
          "I lost my key yesterday (aniq o'tgan vaqt - Past Simple).",
          "I have lost my key (hozir ham yo'q - Present Perfect)."
        ],
        "negative": [
          "Did you see John yesterday? (o'tmish).",
          "Have you seen John today? (bugun hali davom etmoqda)."
        ],
        "explanationUz": "Agar gapda o'tmishdagi aniq vaqt ko'rsatilgan bo'lsa (yesterday, last year, in 2019, when I was a child), har doim Past Simple ishlatiladi. Vaqt tugallanmagan bo'lsa (today, this week), Present Perfect ishlatiladi.",
        "examples": [
          {"en": "Shakespeare wrote many famous plays. (o'tmishda yashagan).", "uz": "Shekspir ko'plab mashhur pyesalar yozgan."},
          {"en": "My brother has written two books. (u hali tirik, yana yozishi mumkin).", "uz": "Akam ikkita kitob yozgan."}
        ],
        "exercises": [
          {
            "id": "u20-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri zamonni tanlang",
            "prompt": "When _____ your new car? - Last week.",
            "options": ["did you buy", "have you bought", "do you buy", "are you buying"],
            "correctAnswer": "did you buy",
            "explanationUz": "'When...?' so'rog'i aniq o'tmish paytini so'ragani uchun har doim Past Simple ishlatiladi.",
            "points": 15
          },
          {
            "id": "u20-ex2",
            "type": "fill_in_gap",
            "instruction": "Fe'lni to'g'ri zamonga qo'ying (arrive)",
            "prompt": "What time did the train _____ yesterday?",
            "correctAnswer": "arrive",
            "explanationUz": "'Did' bor bo'lgani uchun fe'l o'zining boshlang'ich shaklida (arrive) keladi.",
            "points": 15
          }
        ]
    },
    21: {
        "ruleTitle": "is done, was done (Passive 1 - Majhul Nisbat)",
        "formula": "Present: am/is/are + V3 | Past: was/were + V3",
        "positive": [
          "This room is cleaned every day (Present Passive).",
          "This house was built in 1965 (Past Passive)."
        ],
        "negative": [
          "Butter is made from milk.",
          "Two people were injured in the accident."
        ],
        "explanationUz": "Majhul nisbatda harakat kim tomonidan bajarilganidan ko'ra, harakatning o'zi yoki uning obyekti muhimroq bo'ladi. Bajiruvchini ko'rsatish uchun 'by' predlogi ishlatiladi (built by my grandfather).",
        "examples": [
          {"en": "Many accidents are caused by dangerous driving.", "uz": "Ko'plab avariyalar xavfli haydash tufayli sodir bo'ladi."},
          {"en": "The telephone was invented by Alexander Graham Bell.", "uz": "Telefon Aleksandr Grexam Bell tomonidan ixtiro qilingan."}
        ],
        "exercises": [
          {
            "id": "u21-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri Passive shaklini tanlang",
            "prompt": "Millions of emails _____ every single day around the world.",
            "options": ["are sent", "is sent", "sent", "are sending"],
            "correctAnswer": "are sent",
            "explanationUz": "'Emails' ko'plikda va Present Simple Passive shaklida: are sent.",
            "points": 15
          },
          {
            "id": "u21-ex2",
            "type": "fill_in_gap",
            "instruction": "Qavsdagi fe'lning to'g'ri Passive shaklini yozing (build)",
            "prompt": "This bridge was _____ in 1895.",
            "correctAnswer": "built",
            "explanationUz": "'Build' fe'lining 3-shakli (Past Participle) 'built' bo'ladi.",
            "points": 15
          }
        ]
    },
    22: {
        "ruleTitle": "is being done, has been done (Passive 2)",
        "formula": "Continuous Passive: is/are being + V3 | Perfect Passive: has/have been + V3",
        "positive": [
          "The room is being cleaned right now (ayni paytda tozalanmoqda).",
          "The room has been cleaned (tozalanib bo'lindi)."
        ],
        "negative": [
          "My car is being repaired at the moment.",
          "Have you ever been bitten by a dog?"
        ],
        "explanationUz": "Ayni paytda sodir bo'layotgan majhul harakat uchun 'am/is/are being + V3', tugallangan natijali majhul harakat uchun 'has/have been + V3' qo'llaniladi.",
        "examples": [
          {"en": "A new hospital is being built in our town.", "uz": "Shahrimizda yangi shifoxona qurilmoqda."},
          {"en": "The shirts have been ironed.", "uz": "Ko'ylaklar dazmollangan."}
        ],
        "exercises": [
          {
            "id": "u22-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri shaklni tanlang",
            "prompt": "Look! The windows _____ at the moment.",
            "options": ["are being cleaned", "are cleaned", "have been cleaned", "were cleaning"],
            "correctAnswer": "are being cleaned",
            "explanationUz": "'At the moment' sababli Present Continuous Passive 'are being cleaned' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u22-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga been yoki being yozing",
            "prompt": "My wallet has _____ stolen!",
            "correctAnswer": "been",
            "explanationUz": "Present Perfect Passive da has dan keyin 'been' ishlatiladi.",
            "points": 15
          }
        ]
    },
    23: {
        "ruleTitle": "be / have / do zamonlar bo'yicha qo'llanilishi",
        "formula": "Auxiliary Verbs: be (am/is/are/was/were) | have (have/has/had) | do (do/does/did)",
        "positive": [
          "Be: She is cooking (continuous) / The car was sold (passive).",
          "Have: I have lost my keys (perfect).",
          "Do: Do you speak English? / I didn't see him (questions/negatives)."
        ],
        "negative": [
          "Do you have a car? (Asosiy fe'l sifatida).",
          "We did our homework (Asosiy fe'l sifatida)."
        ],
        "explanationUz": "Be, have va do ingliz tilida ham yordamchi fe'l, ham asosiy fe'l bo'lib kelishi mumkin. Yordamchi fe'l sifatida zamon, inkor va so'roq yasashda xizmat qiladi.",
        "examples": [
          {"en": "What were you doing when I called?", "uz": "Men qo'ng'iroq qilganimda nima qilayotgan edingiz?"},
          {"en": "Has Ann arrived yet?", "uz": "Ann yetib keldimi?"}
        ],
        "exercises": [
          {
            "id": "u23-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri yordamchi fe'lni tanlang",
            "prompt": "Where _____ you born?",
            "options": ["were", "did", "have", "are"],
            "correctAnswer": "were",
            "explanationUz": "Tug'ilgan joy va vaqt uchun 'were you born' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u23-ex2",
            "type": "fill_in_gap",
            "instruction": "Yordamchi fe'lni yozing (do / does / did)",
            "prompt": "What _____ you do yesterday evening?",
            "correctAnswer": "did",
            "explanationUz": "O'tgan zamon so'rog'i uchun yordamchi fe'l 'did' bo'ladi.",
            "points": 15
          }
        ]
    },
    24: {
        "ruleTitle": "To'g'ri va Noto'g'ri Fe'llar (Regular and Irregular Verbs)",
        "formula": "Regular: V + -ed (worked, wanted) | Irregular: V1 -> V2 -> V3 (go, went, gone)",
        "positive": [
          "Regular: played, visited, watched, arrived.",
          "Irregular: see -> saw -> seen | buy -> bought -> bought."
        ],
        "negative": [
          "Put -> put -> put (shakli o'zgarmaydigan fe'llar).",
          "Write -> wrote -> written (har uchala shakli har xil)."
        ],
        "explanationUz": "To'g'ri fe'llarning o'tgan zamon va sifatdosh shakllari -ed bilan yasaladi. Noto'g'ri fe'llar esa maxsus jadval orqali yod olinadi.",
        "examples": [
          {"en": "I wrote a letter and sent it by post.", "uz": "Men xat yozdim va uni pochta orqali jo'natdim."},
          {"en": "She broke her arm while skiing.", "uz": "U chang'i uchayotganda qo'lini sindirib oldi."}
        ],
        "exercises": [
          {
            "id": "u24-ex1",
            "type": "multiple_choice",
            "instruction": "Fe'lning to'g'ri 3-shaklini tanlang (write)",
            "prompt": "This book was _____ by a famous Uzbek author.",
            "options": ["written", "wrote", "write", "writed"],
            "correctAnswer": "written",
            "explanationUz": "'Write' fe'lining Past Participle (V3) shakli 'written' bo'ladi.",
            "points": 15
          },
          {
            "id": "u24-ex2",
            "type": "fill_in_gap",
            "instruction": "Fe'lning Past Simple (V2) shaklini yozing (speak)",
            "prompt": "He _____ to the manager about the issue.",
            "correctAnswer": "spoke",
            "explanationUz": "'Speak' ning o'tgan zamon shakli 'spoke' hisoblanadi.",
            "points": 15
          }
        ]
    },
    25: {
        "ruleTitle": "I used to ... (O'tmishdagi Odat va Holatlar)",
        "formula": "Subject + used to + Verb (infinitive)",
        "positive": [
          "I used to play tennis a lot, but now I don't.",
          "Dave used to have long hair when he was a student."
        ],
        "negative": [
          "I didn't use to like cheese, but now I love it.",
          "Did you use to live in London?"
        ],
        "explanationUz": "'Used to' o'tmishda muntazam qilingan, ammo hozir to'xtatilgan odatlar yoki o'tmishda to'g'ri bo'lgan holatlar uchun ishlatiladi.",
        "examples": [
          {"en": "We used to live in a small village, but now we live in Tashkent.", "uz": "Biz kichik qishloqda yashar edik, lekin hozir Toshkentda yashaymiz."},
          {"en": "There used to be a cinema here many years ago.", "uz": "Ko'p yillar oldin bu yerda kinoteatr bo'lgan edi."}
        ],
        "exercises": [
          {
            "id": "u25-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "I _____ smoke, but I gave up three years ago.",
            "options": ["used to", "use to", "am used to", "was used to"],
            "correctAnswer": "used to",
            "explanationUz": "O'tmishdagi odatni ifodalash uchun 'used to' konstruksiyasi ishlatiladi.",
            "points": 15
          },
          {
            "id": "u25-ex2",
            "type": "fill_in_gap",
            "instruction": "Inkor shaklida to'ldiring (didn't use to)",
            "prompt": "She didn't _____ eat vegetables when she was a child.",
            "correctAnswer": "use to",
            "explanationUz": "'Didn't' dan keyin 'use to' shaklida yoziladi (d harfi tushadi).",
            "points": 15
          }
        ]
    },
    26: {
        "ruleTitle": "What are you doing tomorrow? (Present Continuous Kelasi Zamon Uchun)",
        "formula": "Subject + am/is/are + Verb-ing + kelasi zamon vaqti (tomorrow, next week)",
        "positive": [
          "I'm playing tennis with John tomorrow morning.",
          "Sophie is going to the dentist on Friday."
        ],
        "negative": [
          "We aren't going anywhere this weekend.",
          "What are you doing on Saturday evening?"
        ],
        "explanationUz": "Oldindan rejalashtirilgan, kelishilgan va tayyorgarligi ko'rilgan aniq kelajak harakatlari uchun Present Continuous zamoni qo'llaniladi.",
        "examples": [
          {"en": "Alex is getting married next month.", "uz": "Aleks kelasi oyda uylanadi (to'y kuni aniq)."},
          {"en": "I'm not working tomorrow, so we can meet.", "uz": "Ertaga ishlamayman, shuning uchun uchrashishimiz mumkin."}
        ],
        "exercises": [
          {
            "id": "u26-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri rejalashtirilgan kelasi zamon shaklini tanlang",
            "prompt": "What time _____ you meeting Kate tomorrow?",
            "options": ["are", "do", "will", "shall"],
            "correctAnswer": "are",
            "explanationUz": "Rejalashtirilgan harakat so'rog'ida 'What time are you meeting...' bo'ladi.",
            "points": 15
          },
          {
            "id": "u26-ex2",
            "type": "fill_in_gap",
            "instruction": "Fe'lni to'g'ri Continuous shaklida yozing (fly)",
            "prompt": "We are _____ to London next Tuesday.",
            "correctAnswer": "flying",
            "explanationUz": "Oldindan rejalashtirilgan safar uchun 'are flying' ishlatiladi.",
            "points": 15
          }
        ]
    },
    27: {
        "ruleTitle": "I'm going to ... (Niyat va Aniq Alomatli Kelajak)",
        "formula": "Subject + am/is/are + going to + Verb (infinitive)",
        "positive": [
          "I am going to buy some books tomorrow (Niyat/Qaror).",
          "Look at the dark clouds! It's going to rain (Ko'rinib turgan alomat)."
        ],
        "negative": [
          "I'm not going to have breakfast this morning.",
          "Are you going to invite Martin to your party?"
        ],
        "explanationUz": "'Be going to' qat'iy niyat qilingan harakatlar yoki ayni paytda yaqqol ko'rinib turgan alomatlar asosida sodir bo'lishi muqarrar bo'lgan voqealar uchun ishlatiladi.",
        "examples": [
          {"en": "What are you going to wear to the party?", "uz": "Kechaga nima kiyish niyatidasiz?"},
          {"en": "Look out! That glass is going to fall.", "uz": "Ehtiyot bo'ling! U stakan tushib ketadi (alomat bor)."}
        ],
        "exercises": [
          {
            "id": "u27-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri niyat ifodasini tanlang",
            "prompt": "I've decided. I _____ study computer engineering at university.",
            "options": ["am going to", "will to", "going to", "am go to"],
            "correctAnswer": "am going to",
            "explanationUz": "Oldindan qilingan qat'iy qaror va niyat uchun 'am going to' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u27-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga going to yoki will qo'ying",
            "prompt": "Look at that black cloud! It is _____ rain.",
            "correctAnswer": "going to",
            "explanationUz": "Ko'rinib turgan yaqqol alomat (qora bulut) asosidagi xulosa uchun 'going to' kerak.",
            "points": 15
          }
        ]
    },
    28: {
        "ruleTitle": "will / shall (1) - Kelasi Zamon Bashoratlari",
        "formula": "Subject + will ('ll) / will not (won't) + Verb (bare infinitive)",
        "positive": [
          "I think Uzbekistan will win the football match.",
          "It will be warm and sunny tomorrow."
        ],
        "negative": [
          "I won't (will not) be here tomorrow.",
          "Don't worry, the exam won't be very difficult."
        ],
        "explanationUz": "'Will' kelajak haqidagi shaxsiy fikrlar, taxminlar va bashoratlarda (I think, I believe, probably) hamda o'sha paytning o'zida qabul qilingan qarorlarda ishlatiladi.",
        "examples": [
          {"en": "I think Diana will pass her driving test easily.", "uz": "Menimcha Diana haydovchilik imtihonidan oson o'tadi."},
          {"en": "You'll love New York. It's an amazing city.", "uz": "Sizga Nyu-York yoqadi. U ajoyib shahar."}
        ],
        "exercises": [
          {
            "id": "u28-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "I think the weather _____ nice at the weekend.",
            "options": ["will be", "is being", "was", "shall be"],
            "correctAnswer": "will be",
            "explanationUz": "'I think' bilan kelasi zamon taxminida 'will be' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u28-ex2",
            "type": "fill_in_gap",
            "instruction": "Will ning inkor qisqartmasini yozing (won't)",
            "prompt": "Don't drink coffee now or you _____ sleep tonight.",
            "correctAnswer": "won't",
            "explanationUz": "'Will not' ning qisqargan inkor shakli 'won't' hisoblanadi.",
            "points": 15
          }
        ]
    },
    29: {
        "ruleTitle": "will / shall (2) - Taklif va Darhol Qabul Qilingan Qarorlar",
        "formula": "I'll do ... (qaror qildim) | Shall I / we ... ? (taklif/maslahat)",
        "positive": [
          "My bag is heavy. - I'll carry it for you.",
          "I'm tired. I think I'll go to bed now."
        ],
        "negative": [
          "Shall I open the window? (Oynani ochaymi?)",
          "Where shall we go tonight? (Bugun qayerga boramiz?)"
        ],
        "explanationUz": "Nutq paytida to'satdan qabul qilingan qarorlarda 'I'll' ishlatiladi. 'Shall I...?' yoki 'Shall we...?' esa biror kishiga yordam yoki birgalikda ish qilish taklifini bildiradi.",
        "examples": [
          {"en": "It's cold in here. - I'll close the window.", "uz": "Bu yer sovuq. - Men derazani yopaman."},
          {"en": "Shall I help you with your luggage?", "uz": "Yuklaringiz bilan yordamlashaymi?"}
        ],
        "exercises": [
          {
            "id": "u29-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri taklif shaklini tanlang",
            "prompt": "It's very warm in this room. _____ I open the window?",
            "options": ["Shall", "Will", "Would", "Do"],
            "correctAnswer": "Shall",
            "explanationUz": "O'z yordamini yoki taklifini bildirishda 'Shall I...?' iborasi qo'llaniladi.",
            "points": 15
          },
          {
            "id": "u29-ex2",
            "type": "fill_in_gap",
            "instruction": "To'g'ri shaklni kiriting (I'll yoki I am)",
            "prompt": "I don't feel well. I think _____ stay at home tonight.",
            "correctAnswer": "I'll",
            "explanationUz": "Shu paytning o'zida qabul qilingan qaror uchun 'I'll' to'g'ri bo'ladi.",
            "points": 15
          }
        ]
    },
    30: {
        "ruleTitle": "might (Ehtimollik - Balki)",
        "formula": "Subject + might (not) + Verb (bare infinitive)",
        "positive": [
          "It might rain later, so take an umbrella with you.",
          "I might go to Italy for my holidays this summer."
        ],
        "negative": [
          "I might not go to work tomorrow. I feel sick.",
          "She might not come to the party."
        ],
        "explanationUz": "'Might' kelajakda biror narsa sodir bo'lishi ehtimolini (balki shunday bo'lar, balki bo'lmas, 50/50) ifodalaydi. 'May' bilan deyarli bir xil ma'noda keladi.",
        "examples": [
          {"en": "Where is Peter? - He might be in his office.", "uz": "Piter qayerda? - U ehtimol o'z kabinetidadir."},
          {"en": "I haven't decided yet. I might buy that blue shirt.", "uz": "Hali bir qarorga kelganim yo'q. Balki o'sha ko'k ko'ylakni sotib olarman."}
        ],
        "exercises": [
          {
            "id": "u30-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri ehtimollik modal fe'lini tanlang",
            "prompt": "Take a jacket with you. It _____ get cold this evening.",
            "options": ["might", "must", "can", "should to"],
            "correctAnswer": "might",
            "explanationUz": "Kechqurun sovuq bo'lishi ehtimoli (balki sovuq bo'lar) uchun 'might' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u30-ex2",
            "type": "fill_in_gap",
            "instruction": "Ehtimollik inkor shaklini to'ldiring",
            "prompt": "I _____ not have time to call you tomorrow, I'll be very busy.",
            "correctAnswer": "might",
            "explanationUz": "'Might not' kelajakdagi ehtimoliy inkorni anglatadi.",
            "points": 15
          }
        ]
    },
    31: {
        "ruleTitle": "can va could (Qobiliyat va Ruxsat)",
        "formula": "can / can't + Verb (hozir) | could / couldn't + Verb (o'tgan zamon)",
        "positive": [
          "I can swim very well.",
          "When I was young, I could run very fast."
        ],
        "negative": [
          "I'm sorry, I can't come to your party on Friday.",
          "He couldn't sleep last night."
        ],
        "explanationUz": "'Can' hozirgi zamondagi qobiliyat va imkoniyatni, 'could' esa o'tmishdagi qobiliyatni bildiradi. Shuningdek, 'Could you...?' muloyim iltimoslarda qo'llaniladi.",
        "examples": [
          {"en": "Can you speak any foreign languages?", "uz": "Chet tillarida gaplasha olasizmi?"},
          {"en": "Could you open the door for me, please?", "uz": "Iltimos, men uchun eshikni ochib yubora olasizmi?"}
        ],
        "exercises": [
          {
            "id": "u31-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "I looked everywhere, but I _____ find my glasses.",
            "options": ["couldn't", "can't", "am not", "wasn't"],
            "correctAnswer": "couldn't",
            "explanationUz": "O'tgan zamondagi (looked) imkonsizlik uchun 'couldn't' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u31-ex2",
            "type": "fill_in_gap",
            "instruction": "Hozirgi qobiliyat modal fe'lini yozing (can yoki could)",
            "prompt": "She _____ play the piano beautifully.",
            "correctAnswer": "can",
            "explanationUz": "Hozirgi qobiliyat uchun 'can' ishlatiladi.",
            "points": 15
          }
        ]
    },
    32: {
        "ruleTitle": "must, mustn't va needn't",
        "formula": "must (shart/zarur) | mustn't (qat'iy man etiladi) | needn't (hojat yo'q)",
        "positive": [
          "You must be careful. The road is slippery.",
          "I must study hard for my final exam."
        ],
        "negative": [
          "You mustn't touch that wire. It's dangerous! (Taqiqlanadi).",
          "You needn't hurry. We have plenty of time (Hojat yo'q)."
        ],
        "explanationUz": "'Must' - kuchli zarurat; 'mustn't' - qat'iyan taqiqlangan harakat; 'needn't' (yoki don't need to) - biror narsa qilishga zarurat yo'qligini bildiradi.",
        "examples": [
          {"en": "You mustn't tell anyone what I said. It's a secret.", "uz": "Men aytgan gapni hech kimga aytmasligingiz kerak. Bu sir."},
          {"en": "We have plenty of food, so you needn't go shopping.", "uz": "Bizda oziq-ovqat yetarli, shuning uchun bozorga borishingizga hojat yo'q."}
        ],
        "exercises": [
          {
            "id": "u32-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri modal fe'lni tanlang",
            "prompt": "You _____ smoke anywhere inside the hospital. It is forbidden.",
            "options": ["mustn't", "needn't", "don't have to", "must"],
            "correctAnswer": "mustn't",
            "explanationUz": "Qat'iy taqiq (forbidden) bo'lgani sababli 'mustn't' ishlatiladi.",
            "points": 15
          },
          {
            "id": "u32-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga must yoki mustn't yozing",
            "prompt": "You _____ wear a seatbelt when driving. It is the law.",
            "correctAnswer": "must",
            "explanationUz": "Qonun talabi va majburiyat uchun 'must' to'g'ri keladi.",
            "points": 15
          }
        ]
    },
    33: {
        "ruleTitle": "should (Maslahat va Tavsiya)",
        "formula": "Subject + should / shouldn't + Verb (bare infinitive)",
        "positive": [
          "You look tired. You should go to bed early tonight.",
          "It's a wonderful movie. You should go and see it."
        ],
        "negative": [
          "You shouldn't eat so much junk food. It isn't healthy.",
          "I think we should invite Tom to dinner."
        ],
        "explanationUz": "'Should' - biror ishni qilish yaxshi g'oya yoki to'g'ri ish ekanligini (maslahat) bildiradi. 'Shouldn't' esa buni qilmaslik maqsadga muvofiq ekanini anglatadi.",
        "examples": [
          {"en": "Do you think I should apply for this new job?", "uz": "Sizningcha men bu yangi ishga topshirishim kerakmi?"},
          {"en": "He has a bad cough. He shouldn't smoke.", "uz": "U qattiq yo'talyapti. U chekmasligi kerak."}
        ],
        "exercises": [
          {
            "id": "u33-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri maslahat so'zini tanlang",
            "prompt": "When you play tennis, you _____ always watch the ball.",
            "options": ["should", "should to", "ought", "must to"],
            "correctAnswer": "should",
            "explanationUz": "Maslahat berishda fe'ldan oldin 'should' ishlatiladi (to siz).",
            "points": 15
          },
          {
            "id": "u33-ex2",
            "type": "fill_in_gap",
            "instruction": "Inkor maslahat shaklini yozing",
            "prompt": "You _____ believe everything you read on social media.",
            "correctAnswer": "shouldn't",
            "explanationUz": "'Ishonmasligingiz kerak' maslahati uchun 'shouldn't' ishlatiladi.",
            "points": 15
          }
        ]
    },
    34: {
        "ruleTitle": "I have to ... (Tashqi Majburiyat)",
        "formula": "have / has to + Verb | don't / doesn't have to + Verb",
        "positive": [
          "I have to wear glasses for reading.",
          "Mark has to get up at 6:00 am every day for work."
        ],
        "negative": [
          "I don't have to work tomorrow because it's a holiday.",
          "Did you have to wait a long time for the bus?"
        ],
        "explanationUz": "'Have to' tashqi qoidalar, vaziyat yoki qonun talab qilgan majburiyatlarni ifodalaydi. 'Don't have to' esa majburiyat yo'qligini bildiradi.",
        "examples": [
          {"en": "You have to turn left here. It's a one-way street.", "uz": "Bu yerda chapga burilishingiz shart. Bu bir tomonlama ko'cha."},
          {"en": "Tomorrow is Sunday, so I don't have to get up early.", "uz": "Ertaga yakshanba, shuning uchun erta turishim shart emas."}
        ],
        "exercises": [
          {
            "id": "u34-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri majburiyat shaklini tanlang",
            "prompt": "Sarah isn't well, so she _____ stay in bed today.",
            "options": ["has to", "have to", "having to", "has"],
            "correctAnswer": "has to",
            "explanationUz": "Sarah (she) uchinchi shaxs birlik bo'lgani uchun 'has to' bo'ladi.",
            "points": 15
          },
          {
            "id": "u34-ex2",
            "type": "fill_in_gap",
            "instruction": "Inkor shaklini yozing (don't have to / doesn't have to)",
            "prompt": "The museum is free. You _____ pay an entrance fee.",
            "correctAnswer": "don't have to",
            "explanationUz": "To'lashga zarurat yo'qligi sababli 'don't have to' ishlatiladi.",
            "points": 15
          }
        ]
    },
    35: {
        "ruleTitle": "Would you like ... ? va I'd like ... (Muloyim Taklif va Istak)",
        "formula": "Would you like + noun / to do? | I'd like (I would like) ...",
        "positive": [
          "Would you like a cup of coffee? -> Yes, please.",
          "I'd like to reserve a table for four people, please."
        ],
        "negative": [
          "Do you like coffee? = Doimiy yoqtirasizmi? (umumiy)",
          "Would you like coffee? = Hozir ichasizmi? (taklif)"
        ],
        "explanationUz": "'Would you like...?' birovga muloyimlik bilan biror narsa taklif qilish yoki taklifnoma bildirish uchun ishlatiladi. 'I'd like...' esa 'I want' ning xushmuomala shakli hisoblanadi.",
        "examples": [
          {"en": "What would you like to drink? - Orange juice, please.", "uz": "Nima ichishni xohlaysiz? - Apelsin sharbati, iltimos."},
          {"en": "I'd like to ask you a question.", "uz": "Sizdan bir savol so'ramoqchi edim."}
        ],
        "exercises": [
          {
            "id": "u35-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri muloyim taklifni tanlang",
            "prompt": "_____ you like some chocolate? - Yes, thank you!",
            "options": ["Would", "Do", "Are", "Did"],
            "correctAnswer": "Would",
            "explanationUz": "Muloyim taklif qilish uchun 'Would you like' birikmasi qo'llaniladi.",
            "points": 15
          },
          {
            "id": "u35-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga like yoki would like yozing",
            "prompt": "I'm thirsty. I _____ a glass of cold water, please.",
            "correctAnswer": "would like",
            "explanationUz": "Ayni paytda istakni muloyim bildirish uchun 'would like' (I'd like) ishlatiladi.",
            "points": 15
          }
        ]
    },
    36: {
        "ruleTitle": "there is, there are (Mavjudlikni Ifodalash)",
        "formula": "There is + singular noun | There are + plural noun",
        "positive": [
          "There is a big supermarket near our house.",
          "There are 24 students in our class."
        ],
        "negative": [
          "There isn't any milk left in the fridge.",
          "Are there any questions about this topic?"
        ],
        "explanationUz": "Biror joyda biror narsaning borligini (mavjudligini) birinchi marta aytganda 'there is' (birlik uchun) va 'there are' (ko'plik uchun) ishlatiladi.",
        "examples": [
          {"en": "There is a train to Bukhara at 8:30 am.", "uz": "Ertalab 8:30 da Buxoroga poyezd bor."},
          {"en": "There are many interesting places to visit in Samarkand.", "uz": "Samarqandda ziyorat qilish uchun ko'plab qiziqarli joylar mavjud."}
        ],
        "exercises": [
          {
            "id": "u36-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri shaklni tanlang",
            "prompt": "_____ seven days in a week.",
            "options": ["There are", "There is", "It is", "They are"],
            "correctAnswer": "There are",
            "explanationUz": "'Seven days' ko'plik ot bo'lgani sababli 'There are' to'g'ri keladi.",
            "points": 15
          },
          {
            "id": "u36-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga is yoki are yozing",
            "prompt": "There _____ a post office across the street.",
            "correctAnswer": "is",
            "explanationUz": "'A post office' bitta bo'lgani uchun 'is' ishlatiladi.",
            "points": 15
          }
        ]
    },
    37: {
        "ruleTitle": "there was/were, there has been, there will be",
        "formula": "Past: there was/were | Perfect: there has/have been | Future: there will be",
        "positive": [
          "There was a serious accident on this road yesterday.",
          "There were hundreds of people at the concert."
        ],
        "negative": [
          "There has been an accident. The road is closed now.",
          "Do you think there will be a lot of people at the party?"
        ],
        "explanationUz": "'There be' konstruksiyasi boshqa zamonlarda ham qo'llaniladi: o'tmishda (there was/were), yaqinda sodir bo'lgan (there has been) va kelajakda (there will be).",
        "examples": [
          {"en": "There was a storm last night.", "uz": "Kecha tunda bo'ron bo'ldi."},
          {"en": "I hope there will be good weather tomorrow.", "uz": "Umid qilamanki, ertaga yaxshi ob-havo bo'ladi."}
        ],
        "exercises": [
          {
            "id": "u37-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri zamon shaklini tanlang",
            "prompt": "Twenty years ago, _____ very few cars in this town.",
            "options": ["there were", "there was", "there are", "there have been"],
            "correctAnswer": "there were",
            "explanationUz": "O'tmishdagi ko'plik ot ('cars') uchun 'there were' to'g'ri bo'ladi.",
            "points": 15
          },
          {
            "id": "u37-ex2",
            "type": "fill_in_gap",
            "instruction": "Kelasi zamon shaklini yozing",
            "prompt": "I think there _____ be a lot of traffic tomorrow morning.",
            "correctAnswer": "will",
            "explanationUz": "Kelasi zamon ehtimolida 'there will be' qo'llaniladi.",
            "points": 15
          }
        ]
    },
    38: {
        "ruleTitle": "It ... (Shaxssiz Olmoshi - Ob-havo, Vaqt, Masofa)",
        "formula": "It is + time / weather / distance / fact",
        "positive": [
          "It's raining outside. Take an umbrella.",
          "It is half past ten. Time to go."
        ],
        "negative": [
          "It's a long way from here to the airport.",
          "It is nice to meet you."
        ],
        "explanationUz": "Vaqt (It's 5 o'clock), ob-havo (It's cold/sunny), masofa (It's 10 kilometres) va shaxssiz iboralarda (It's difficult to understand) gap egasi sifatida 'It' ishlatiladi.",
        "examples": [
          {"en": "What time is it? - It's quarter to eight.", "uz": "Soat necha bo'ldi? - Sakkiztakam o'n besh."},
          {"en": "How far is it to Tashkent from Samarkand?", "uz": "Samarqanddan Toshkentgacha qancha masofa?"}
        ],
        "exercises": [
          {
            "id": "u38-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri olmoshni tanlang",
            "prompt": "_____ is very windy today, so put on your coat.",
            "options": ["It", "There", "He", "That"],
            "correctAnswer": "It",
            "explanationUz": "Ob-havoni ifodalashda gap egasi 'It' bo'ladi: It is very windy.",
            "points": 15
          },
          {
            "id": "u38-ex2",
            "type": "fill_in_gap",
            "instruction": "Bo'sh joyga It yoki There yozing",
            "prompt": "_____ is a long way from London to Edinburgh.",
            "correctAnswer": "It",
            "explanationUz": "Masofani ifodalashda 'It is a long way' ishlatiladi.",
            "points": 15
          }
        ]
    },
    39: {
        "ruleTitle": "I am, I don't etc. (Qisqa Javoblar va Yordamchi Fe'llar)",
        "formula": "Subject + Auxiliary Verb (qisqa tasdiq yoki inkor)",
        "positive": [
          "Are you tired? -> Yes, I am. (Yes, I'm EMAS!).",
          "Do you like football? -> Yes, I do."
        ],
        "negative": [
          "Can you drive? -> No, I can't.",
          "Has he left? -> No, he hasn't."
        ],
        "explanationUz": "Ingliz tilida butun gapni takrorlamaslik uchun yordamchi fe'llardan (am, is, do, did, can, have) foydalanib qisqa javob beriladi. Qisqa tasdiq javobida qisqartma (I'm, he's) ishlatilmaydi.",
        "examples": [
          {"en": "Did you lock the door? - Yes, I did.", "uz": "Eshikni qulfladingizmi? - Ha, qulfladim."},
          {"en": "Are you going out tonight? - No, I'm not.", "uz": "Bugun kechqurun ko'chaga chiqasizmi? - Yo'q."}
        ],
        "exercises": [
          {
            "id": "u39-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri qisqa javobni tanlang",
            "prompt": "'Have you seen my keys?' - 'No, _____.'",
            "options": ["I haven't", "I don't", "I hasn't", "I haven't seen"],
            "correctAnswer": "I haven't",
            "explanationUz": "'Have you' savoliga inkor qisqa javob 'No, I haven't' bo'ladi.",
            "points": 15
          },
          {
            "id": "u39-ex2",
            "type": "fill_in_gap",
            "instruction": "Qisqa tasdiq javobini to'ldiring",
            "prompt": "'Does she live in Samarkand?' - 'Yes, she _____.'",
            "correctAnswer": "does",
            "explanationUz": "Present Simple 'Does she' savoliga javob: 'Yes, she does'.",
            "points": 15
          }
        ]
    },
    40: {
        "ruleTitle": "Have you? Are you? Don't you? (Qiziqish Bildirish va Ajratuvchi Savollar)",
        "formula": "Question tags: Tasdiq gap + inkor tag? | Inkor gap + tasdiq tag?",
        "positive": [
          "You're a student, aren't you? -> Yes, that's right.",
          "It's a beautiful day, isn't it? -> Yes, lovely."
        ],
        "negative": [
          "You haven't seen my bag, have you? -> No, I haven't.",
          "They don't live here, do they?"
        ],
        "explanationUz": "Suhbatdoshning fikrini tasdiqlatish yoki qiziqish bildirish uchun gap oxiriga question tag (ajratuvchi savol) qo'shiladi. Gap tasdiq bo'lsa tag inkor, gap inkor bo'lsa tag tasdiq bo'ladi.",
        "examples": [
          {"en": "You speak French, don't you?", "uz": "Siz fransuzcha gaplashasiz, shunday emasmi?"},
          {"en": "Kate wasn't at the meeting, was she?", "uz": "Keyt yig'ilishda emas edi, shundaymi?"}
        ],
        "exercises": [
          {
            "id": "u40-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri question tag tanlang",
            "prompt": "You haven't eaten breakfast yet, _____?",
            "options": ["have you", "haven't you", "did you", "do you"],
            "correctAnswer": "have you",
            "explanationUz": "Inkor gapdan keyin ('haven't eaten') tasdiq question tag 'have you?' keladi.",
            "points": 15
          },
          {
            "id": "u40-ex2",
            "type": "fill_in_gap",
            "instruction": "To'g'ri tag qo'shimchasini yozing",
            "prompt": "It's cold today, _____ it?",
            "correctAnswer": "isn't",
            "explanationUz": "Tasdiq 'It's' (It is) gapiga inkor tag 'isn't it?' bo'ladi.",
            "points": 15
          }
        ]
    }
}
