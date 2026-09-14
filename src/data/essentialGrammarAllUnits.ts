import { EssentialGrammarUnit } from './essentialGrammarData';

export const ALL_ESSENTIAL_GRAMMAR_UNITS: EssentialGrammarUnit[] = [
  {
    "unitNumber": 1,
    "title": "am / is / are",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Bo'lish, holat va shaxsni ifodalovchi Present Simple 'To Be' fe'li.",
    "grammarRules": [
      {
        "title": "To Be (am/is/are) Shaxs va Son bo'yicha Tuslanishi",
        "formula": "Subject + am / is / are + Complement",
        "positive": [
          "I am (I'm) a student.",
          "He / She / It is (he's / she's / it's) at home.",
          "We / You / They are (we're / you're / they're) tired."
        ],
        "negative": [
          "I am not (I'm not) hungry.",
          "He / She / It is not (isn't / 's not) cold.",
          "We / You / They are not (aren't / 're not) late."
        ],
        "explanationUz": "'To be' fe'li holat, kasb, yosh, joy va sifatlarni ifodalash uchun ishlatiladi. Birlikda 'is', ko'plikda 'are', birinchi shaxsda 'am' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "The weather is nice today.",
        "uz": "Bugun ob-havo juda yaxshi."
      },
      {
        "en": "My brother and I are good tennis players.",
        "uz": "Akam va men yaxshi tennischilarning birimiz."
      },
      {
        "en": "Ann is at home. Her children are at school.",
        "uz": "Enn uyda. Uning bolalari maktabda."
      }
    ],
    "exercises": [
      {
        "id": "u1-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri 'to be' shaklini tanlang",
        "prompt": "The weather _____ nice today.",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "correctAnswer": "is",
        "explanationUz": "'The weather' birlikdagi ot bo'lgani uchun 'is' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u1-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga am, is yoki are yozing",
        "prompt": "My brother and I _____ good tennis players.",
        "correctAnswer": "are",
        "explanationUz": "'My brother and I' ko'plikdagi kishilar bo'lgani uchun 'are' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u1-ex3",
        "type": "multiple_choice",
        "instruction": "To'g'ri inkor shaklini tanlang",
        "prompt": "These bags _____ heavy. You can take them.",
        "options": [
          "aren't",
          "isn't",
          "am not",
          "not are"
        ],
        "correctAnswer": "aren't",
        "explanationUz": "'These bags' ko'plikda bo'lgani uchun inkor shakli 'aren't' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 2,
    "title": "am / is / are (questions)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "'To Be' (am/is/are) fe'lida so'roq gaplar yasash va qisqa javoblar berish.",
    "grammarRules": [
      {
        "title": "Am / Is / Are bilan So'roq va Qisqa Javoblar",
        "formula": "Am / Is / Are + Subject + Complement?",
        "positive": [
          "Am I late? -> Yes, you are.",
          "Is your mother at home? -> No, she's out.",
          "Are your parents at home? -> Yes, they are."
        ],
        "negative": [
          "Is it cold in your room? -> No, it isn't.",
          "Are your shoes new? -> No, they're old.",
          "Where is your car? -> It's in the garage."
        ],
        "explanationUz": "So'roq gapda am, is, are egadan oldinga o'tadi. Wh- so'zlari (Where, What, Who, How) esa eng birinchi o'rinda keladi."
      }
    ],
    "examples": [
      {
        "en": "Where is your mother? Is she at home?",
        "uz": "Onangiz qayerda? U uyda-mi?"
      },
      {
        "en": "How old is Joe? - He's 24.",
        "uz": "Jou necha yoshda? - U 24 yoshda."
      },
      {
        "en": "Are these your keys? - Yes, they are.",
        "uz": "Bular sizning kalitlaringizmi? - Ha, shunday."
      }
    ],
    "exercises": [
      {
        "id": "u2-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'roq shaklini tanlang",
        "prompt": "_____ your parents at home right now?",
        "options": [
          "Are",
          "Is",
          "Am",
          "Do"
        ],
        "correctAnswer": "Are",
        "explanationUz": "'Your parents' ko'plikda bo'lgani uchun so'roqda 'Are' egalar oldiga o'tadi.",
        "points": 15
      },
      {
        "id": "u2-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq so'zini qo'ying (Where / What / How)",
        "prompt": "_____ colour is your car? - It's red.",
        "correctAnswer": "What",
        "explanationUz": "Rangni so'rash uchun 'What colour' birikmasi ishlatiladi.",
        "points": 15
      },
      {
        "id": "u2-ex3",
        "type": "multiple_choice",
        "instruction": "To'g'ri qisqa javobni tanlang",
        "prompt": "'Are you hungry?' - 'No, _____, but I'm thirsty.'",
        "options": [
          "I'm not",
          "I isn't",
          "I aren't",
          "I don't"
        ],
        "correctAnswer": "I'm not",
        "explanationUz": "'Are you' so'rog'iga birinchi shaxs inkor javobi 'No, I'm not' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 3,
    "title": "I am doing (present continuous)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Hozirgi ayni paytda sodir bo'layotgan harakatlar (Present Continuous).",
    "grammarRules": [
      {
        "title": "Present Continuous (Hozirgi Davomli Zamon)",
        "formula": "Subject + am/is/are + Verb-ing",
        "positive": [
          "I am working on a new project.",
          "She is reading a newspaper.",
          "They are playing football in the garden."
        ],
        "negative": [
          "I'm not eating anything.",
          "He isn't wearing a jacket today.",
          "We aren't watching TV."
        ],
        "explanationUz": "Ayni nutq momentida (hozir sodir bo'layotgan) davomli harakatlar uchun qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "Please be quiet. I'm working.",
        "uz": "Iltimos, tinchlaning. Men ishlayapman."
      },
      {
        "en": "Look! Somebody is swimming in the river.",
        "uz": "Qara! Kimdir daryoda suzyapti."
      },
      {
        "en": "We're having dinner now.",
        "uz": "Biz hozir kechki ovqatni yeyapmiz."
      }
    ],
    "exercises": [
      {
        "id": "u3-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri Present Continuous shaklini tanlang",
        "prompt": "Listen! Somebody _____ the piano in the living room.",
        "options": [
          "is playing",
          "plays",
          "are playing",
          "play"
        ],
        "correctAnswer": "is playing",
        "explanationUz": "'Listen!' (Qara/Eshit!) iborasi ayni paytdagi davomli harakatni anglatadi.",
        "points": 15
      },
      {
        "id": "u3-ex2",
        "type": "fill_in_gap",
        "instruction": "Fe'lni to'g'ri shaklda yozing (work -> ...)",
        "prompt": "Please be quiet. I am _____ right now.",
        "correctAnswer": "working",
        "explanationUz": "Present Continuous uchun fe'lga '-ing' qo'shimchasi qo'shiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 4,
    "title": "are you doing? (present continuous questions)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Present Continuous zamonida so'roq gaplar va qisqa javoblar.",
    "grammarRules": [
      {
        "title": "Present Continuous So'roq Shakli",
        "formula": "Am / Is / Are + Subject + Verb-ing?",
        "positive": [
          "Are you feeling okay? -> Yes, I'm fine.",
          "Is it raining outside? -> Yes, take an umbrella.",
          "Why are you wearing a coat? -> Because it's cold."
        ],
        "negative": [
          "What is Paul doing? -> He's cooking dinner.",
          "Where are they going? -> To the cinema."
        ],
        "explanationUz": "So'roq shaklda am/is/are egadan oldinga o'tadi va fe'l har doim -ing shaklida qoladi."
      }
    ],
    "examples": [
      {
        "en": "Are you working today? - No, I'm not.",
        "uz": "Bugun ishlayapsizmi? - Yo'q."
      },
      {
        "en": "What are you reading? - A mystery novel.",
        "uz": "Nima o'qiyapsiz? - Detektiv roman."
      }
    ],
    "exercises": [
      {
        "id": "u4-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'roq gap shaklini tanlang",
        "prompt": "_____ your brother working in Tashkent nowadays?",
        "options": [
          "Is",
          "Are",
          "Do",
          "Does"
        ],
        "correctAnswer": "Is",
        "explanationUz": "'Your brother' (he) uchun Present Continuous so'rog'i 'Is' bilan boshlanadi.",
        "points": 15
      },
      {
        "id": "u4-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq so'zini kiriting",
        "prompt": "_____ are you wearing a heavy coat? It isn't cold.",
        "correctAnswer": "Why",
        "explanationUz": "Sababini so'rash uchun 'Why' (Nega/Nimaga) so'zi ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 5,
    "title": "I do / work / like etc. (present simple)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Doimiy odatlar va kundalik tartiblar (Present Simple).",
    "grammarRules": [
      {
        "title": "Present Simple (Oddiy Hozirgi Zamon)",
        "formula": "Subject + Verb(s)",
        "positive": [
          "I / We / You / They work in a bank.",
          "He / She / It works in a bank (3-shaxs birlikda -s / -es).",
          "Nurbek drives a car to work every morning."
        ],
        "negative": [
          "I don't work on Sundays.",
          "She doesn't like spicy food."
        ],
        "explanationUz": "Doimiy odatlar, umumiy haqiqatlar va muntazam takrorlanadigan harakatlar uchun Present Simple qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "Terry works in a bank in downtown Tashkent.",
        "uz": "Terri Toshkent markazidagi bankda ishlaydi."
      },
      {
        "en": "The earth goes round the sun.",
        "uz": "Yer quyosh atrofida aylanadi."
      }
    ],
    "exercises": [
      {
        "id": "u5-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'l shaklini tanlang",
        "prompt": "Terry _____ in an IT company in Tashkent.",
        "options": [
          "works",
          "work",
          "is work",
          "working"
        ],
        "correctAnswer": "works",
        "explanationUz": "'Terry' (he) uchinchi shaxs birlikda fe'lga '-s' qo'shimchasi oladi.",
        "points": 15
      },
      {
        "id": "u5-ex2",
        "type": "fill_in_gap",
        "instruction": "Fe'lning to'g'ri shaklini yozing",
        "prompt": "Nurbek speaks English very well, but he _____ (speak) French poorly.",
        "correctAnswer": "speaks",
        "explanationUz": "Uchinchi shaxs birlik (he) bo'lgani uchun 'speaks' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 6,
    "title": "I don't ... (present simple negative)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Present Simple zamonida inkor gaplar (don't / doesn't).",
    "grammarRules": [
      {
        "title": "Present Simple Inkor Shakli (don't / doesn't)",
        "formula": "Subject + don't / doesn't + Verb (bare infinitive)",
        "positive": [
          "I / We / You / They drink coffee in the morning.",
          "He / She / It plays the guitar very well."
        ],
        "negative": [
          "I / We / You / They don't (do not) drink tea.",
          "He / She / It doesn't (does not) play the piano."
        ],
        "explanationUz": "Present Simple zamonida inkor gaplar yasash uchun don't (I, you, we, they) va doesn't (he, she, it) ishlatiladi. 'Doesn't' ishlatilganda asosiy fe'lga -s qo'shimchasi qo'shilmaydi."
      }
    ],
    "examples": [
      {
        "en": "I drink coffee, but I don't drink tea.",
        "uz": "Men kofe ichaman, lekin choy ichmayman."
      },
      {
        "en": "Sue drinks tea, but she doesn't drink coffee.",
        "uz": "Syu choy ichadi, lekin kofe ichmaydi."
      },
      {
        "en": "They don't work on Saturdays and Sundays.",
        "uz": "Ular shanba va yakshanba kunlari ishlamaydilar."
      }
    ],
    "exercises": [
      {
        "id": "u6-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri inkor shaklini tanlang",
        "prompt": "David _____ a car because he rides his bicycle everywhere.",
        "options": [
          "doesn't have",
          "don't have",
          "doesn't has",
          "not has"
        ],
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
  {
    "unitNumber": 7,
    "title": "Do you ... ? (present simple questions)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Present Simple zamonida so'roq gaplar (Do / Does).",
    "grammarRules": [
      {
        "title": "Present Simple So'roq Shakli (Do / Does)",
        "formula": "Do / Does + Subject + Verb (infinitive)?",
        "positive": [
          "Do you play tennis? -> Yes, I do. / No, I don't.",
          "Does Chris live in London? -> Yes, he does."
        ],
        "negative": [
          "Where do your parents live?",
          "How often does it rain here in summer?"
        ],
        "explanationUz": "Present Simple so'rog'ida gap boshida Do (I, you, we, they) yoki Does (he, she, it) ishlatiladi. Maxsus so'roq so'zlari (Where, What, When) Do/Does dan oldin keladi."
      }
    ],
    "examples": [
      {
        "en": "Do you play the guitar? - No, I don't.",
        "uz": "Gitara chalasizmi? - Yo'q, chalmayman."
      },
      {
        "en": "Where does your sister work?",
        "uz": "Singlingiz qayerda ishlaydi?"
      },
      {
        "en": "Does it rain a lot in spring?",
        "uz": "Bahorda ko'p yomg'ir yog'adimi?"
      }
    ],
    "exercises": [
      {
        "id": "u7-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri yordamchi fe'lni tanlang",
        "prompt": "_____ your parents speak English fluently?",
        "options": [
          "Do",
          "Does",
          "Are",
          "Is"
        ],
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
  {
    "unitNumber": 8,
    "title": "I am doing and I do (present continuous vs present simple)",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Present Continuous va Present Simple zamonlarini taqqoslash.",
    "grammarRules": [
      {
        "title": "Present Continuous vs Present Simple Taqqoslash",
        "formula": "Continuous: am/is/are + V-ing (hozir) VS Simple: V/V-s (doimiy)",
        "positive": [
          "I am doing something = Men hozir ayni paytda bajaryapman.",
          "I do something = Men doimiy, odatiy tarzda bajaraman."
        ],
        "negative": [
          "The water is boiling. Can you turn it off? (ayni paytda).",
          "Water boils at 100 degrees Celsius (umumiy ilmiy haqiqat)."
        ],
        "explanationUz": "Present Continuous nutq vaqtidagi vaqtinchalik harakatlar uchun, Present Simple esa doimiy odat va faktlar uchun qo'llaniladi. Know, like, love, want, understand kabi fe'llar faqat Simple da keladi."
      }
    ],
    "examples": [
      {
        "en": "Look! That man is trying to open your car door.",
        "uz": "Qara! U odam mashinang eshigini ochishga urinyapti."
      },
      {
        "en": "The moon goes round the earth.",
        "uz": "Oy yer atrofida aylanadi."
      },
      {
        "en": "I don't understand this word.",
        "uz": "Men bu so'zni tushunmayapman."
      }
    ],
    "exercises": [
      {
        "id": "u8-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri zamon shaklini tanlang",
        "prompt": "Please be quiet! I _____ to concentrate on my homework.",
        "options": [
          "am trying",
          "try",
          "tried",
          "tries"
        ],
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
  {
    "unitNumber": 9,
    "title": "I have ... / I've got ...",
    "category": "Present",
    "cefrLevel": "A1",
    "summaryUz": "Egalik va mavjudlikni ifodalash (have / have got).",
    "grammarRules": [
      {
        "title": "I have ... va I've got ... (Egalik ifodalash)",
        "formula": "I / You / We / They have (got) | He / She / It has (got)",
        "positive": [
          "I've got a new smartphone. = I have a new smartphone.",
          "Mr. Davis has got three children. = Mr. Davis has three children."
        ],
        "negative": [
          "I haven't got a car. = I don't have a car.",
          "She hasn't got many friends. = She doesn't have many friends."
        ],
        "explanationUz": "Egalik, munosabatlar va kasalliklarni ifodalashda 'have' yoki 'have got' ishlatiladi. 'Have got' ko'proq kundalik jonli tilda ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "I've got a headache today.",
        "uz": "Bugun boshim og'riyapti."
      },
      {
        "en": "Have you got an umbrella? - Yes, in my bag.",
        "uz": "Zontigingiz bormi? - Ha, sumkamda."
      },
      {
        "en": "They don't have any money.",
        "uz": "Ularda hech qanday pul yo'q."
      }
    ],
    "exercises": [
      {
        "id": "u9-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shaklni tanlang",
        "prompt": "Excuse me, _____ got a pen I could borrow?",
        "options": [
          "have you",
          "do you",
          "are you",
          "did you"
        ],
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
  {
    "unitNumber": 10,
    "title": "was / were",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "'To Be' fe'lining o'tgan zamon shakllari (was / were).",
    "grammarRules": [
      {
        "title": "was / were (Past Simple 'To Be')",
        "formula": "I / He / She / It was | We / You / They were",
        "positive": [
          "I was at work yesterday morning.",
          "They were in London last summer."
        ],
        "negative": [
          "She wasn't (was not) well yesterday.",
          "We weren't (were not) tired after the long walk."
        ],
        "explanationUz": "'Am/is' ning o'tgan zamoni 'was', 'are' ning o'tgan zamoni esa 'were' hisoblanadi. So'roq shaklida was/were egadan oldinga o'tadi."
      }
    ],
    "examples": [
      {
        "en": "Where were you yesterday at 4 pm?",
        "uz": "Kecha soat 4 da qayerda edingiz?"
      },
      {
        "en": "The hotel was very clean and comfortable.",
        "uz": "Mehmonxona juda toza va qulay edi."
      },
      {
        "en": "Why were you late for school?",
        "uz": "Nega maktabga kech qoldingiz?"
      }
    ],
    "exercises": [
      {
        "id": "u10-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shaklni tanlang",
        "prompt": "The weather _____ wonderful during our holiday in Italy.",
        "options": [
          "was",
          "were",
          "been",
          "is was"
        ],
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
  {
    "unitNumber": 11,
    "title": "worked / got / went etc. (past simple)",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "O'tmishda tugallangan harakatlar (Past Simple).",
    "grammarRules": [
      {
        "title": "worked / got / went (Past Simple To'g'ri va Noto'g'ri Fe'llar)",
        "formula": "Subject + Verb-ed (regular) / V2 (irregular)",
        "positive": [
          "I worked in a bank for three years.",
          "Yesterday we went to Samarkand by train."
        ],
        "negative": [
          "They stayed in a lovely apartment.",
          "She bought a new laptop last Friday."
        ],
        "explanationUz": "O'tmishda tugallangan aniq harakatlar uchun Past Simple qo'llaniladi. To'g'ri fe'llarga -ed qo'shiladi (clean -> cleaned), noto'g'ri fe'llar esa 2-shakliga o'zgaradi (go -> went, see -> saw)."
      }
    ],
    "examples": [
      {
        "en": "Mozart wrote more than 600 musical works.",
        "uz": "Motsart 600 dan ortiq musiqiy asarlar yozgan."
      },
      {
        "en": "I lost my keys yesterday, but I found them today.",
        "uz": "Kecha kalitlarimni yo'qotib qo'ygandim, lekin bugun topdim."
      },
      {
        "en": "We invited 50 people to our party.",
        "uz": "Biz kechamizga 50 kishini taklif qildik."
      }
    ],
    "exercises": [
      {
        "id": "u11-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri Past Simple fe'l shaklini tanlang",
        "prompt": "Last night, I _____ a very interesting documentary on TV.",
        "options": [
          "watched",
          "watch",
          "watching",
          "watches"
        ],
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
  {
    "unitNumber": 12,
    "title": "I didn't ... Did you ... ? (past simple negative and questions)",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "Past Simple zamonida inkor va so'roq gaplar (didn't / Did you).",
    "grammarRules": [
      {
        "title": "I didn't ... Did you ... ? (Past Simple inkor va so'roq)",
        "formula": "Subject + didn't + Verb (bare infinitive) | Did + Subject + Verb?",
        "positive": [
          "Did you go out last night? -> Yes, I did. / No, I didn't.",
          "Did she pass her driving test? -> Yes, she did."
        ],
        "negative": [
          "I didn't watch TV yesterday (didn't watched EMAS!).",
          "They didn't invite us to their wedding."
        ],
        "explanationUz": "Past Simple inkorida 'didn't' va so'rog'ida 'did' qo'llaniladi. 'Did' o'tgan zamon yukini o'ziga olgani sababli asosiy fe'l boshlang'ich lug'aviy shaklga (infinitive) qaytadi."
      }
    ],
    "examples": [
      {
        "en": "Did you see Jack yesterday? - No, I didn't.",
        "uz": "Kecha Jekni ko'rdingizmi? - Yo'q, ko'rmadim."
      },
      {
        "en": "It was warm, so I didn't wear a jacket.",
        "uz": "Havo iliq edi, shuning uchun kurtka kiymadim."
      },
      {
        "en": "What time did the train arrive?",
        "uz": "Poyezd soat nechada yetib keldi?"
      }
    ],
    "exercises": [
      {
        "id": "u12-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri inkor shaklini tanlang",
        "prompt": "I was very thirsty, but I _____ anything to drink.",
        "options": [
          "didn't have",
          "didn't had",
          "not have",
          "not had"
        ],
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
  {
    "unitNumber": 13,
    "title": "I was doing (past continuous)",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "O'tmishda ma'lum vaqtda davom etayotgan harakatlar (Past Continuous).",
    "grammarRules": [
      {
        "title": "I was doing (Past Continuous O'tgan Davomli Zamon)",
        "formula": "Subject + was / were + Verb-ing",
        "positive": [
          "At 11:30 yesterday, I was playing tennis.",
          "They were having lunch when the phone rang."
        ],
        "negative": [
          "I wasn't listening to the radio.",
          "What were you doing at 10 o'clock last night?"
        ],
        "explanationUz": "O'tmishdagi ma'lum bir daqiqada davom etayotgan harakatlar uchun Past Continuous (was/were + V-ing) ishlatiladi. Harakat o'sha paytda hali tugallanmagan bo'lgan."
      }
    ],
    "examples": [
      {
        "en": "This time last year, I was living in Brazil.",
        "uz": "O'tgan yili ayni shu paytda Braziliyada yashayotgan edim."
      },
      {
        "en": "The sun was shining and the birds were singing.",
        "uz": "Quyosh charaqlab, qushlar sayrayotgan edi."
      },
      {
        "en": "Were you watching TV when I called you?",
        "uz": "Men qo'ng'iroq qilganimda televizor ko'rayotganmidingiz?"
      }
    ],
    "exercises": [
      {
        "id": "u13-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri Past Continuous shaklini tanlang",
        "prompt": "At 8 o'clock yesterday evening, we _____ dinner.",
        "options": [
          "were having",
          "was having",
          "had",
          "are having"
        ],
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
  {
    "unitNumber": 14,
    "title": "I was doing (past continuous) and I did (past simple)",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "Past Continuous va Past Simple zamonlarining birgalikda qo'llanilishi.",
    "grammarRules": [
      {
        "title": "Past Continuous va Past Simple Birgalikda Qo'llanishi",
        "formula": "While / When + Past Continuous, Past Simple (qisqa to'siq harakat)",
        "positive": [
          "Jack was reading a book when the phone rang.",
          "While I was cooking dinner, I burned my finger."
        ],
        "negative": [
          "It didn't rain while we were on holiday.",
          "What were you doing when the accident happened?"
        ],
        "explanationUz": "O'tmishda bir davomli harakat ketayotganda (Past Continuous) ikkinchi bir qisqa harakat uni kesib o'tsa yoki sodir bo'lsa (Past Simple), ikkala zamon birga ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "I saw you yesterday in the park. You were sitting on the grass.",
        "uz": "Kecha sizni parkda ko'rdim. Siz maysazorda o'tirgan edingiz."
      },
      {
        "en": "When Karen arrived, we were having coffee.",
        "uz": "Karen yetib kelganida biz kofe ichayotgan edik."
      }
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
  {
    "unitNumber": 15,
    "title": "I have done (present perfect 1)",
    "category": "Present Perfect",
    "cefrLevel": "A2",
    "summaryUz": "Natijasi hozirda ko'rinib turgan harakatlar (Present Perfect).",
    "grammarRules": [
      {
        "title": "I have done (Present Perfect 1 - Hozirgi Natija)",
        "formula": "Subject + have / has + Past Participle (V3 / -ed)",
        "positive": [
          "I've cleaned my shoes. (Shoes are clean NOW).",
          "He has lost his key. (He doesn't have it NOW)."
        ],
        "negative": [
          "They haven't arrived yet.",
          "She hasn't finished her report."
        ],
        "explanationUz": "Present Perfect o'tmishda yuz bergan, ammo natijasi bevosita hozirgi vaqt bilan bog'liq bo'lgan harakatlar uchun qo'llaniladi. He/She/It uchun 'has', boshqalar uchun 'have' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Where is your key? - I don't know. I've lost it.",
        "uz": "Kaliting qayerda? - Bilmayman. Uni yo'qotib qo'ydim."
      },
      {
        "en": "Mary isn't here. She has gone to the supermarket.",
        "uz": "Meri bu yerda emas. U supermarketga ketgan."
      },
      {
        "en": "Look! Somebody has broken that window.",
        "uz": "Qarang! Kimdir u derazani sindiribdi."
      }
    ],
    "exercises": [
      {
        "id": "u15-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri Present Perfect shaklini tanlang",
        "prompt": "Can you help me? I _____ my passport and I can't find it.",
        "options": [
          "have lost",
          "lost",
          "had lost",
          "am losing"
        ],
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
  {
    "unitNumber": 16,
    "title": "I've just ... I've already ... I haven't ... yet (present perfect 2)",
    "category": "Present Perfect",
    "cefrLevel": "A2",
    "summaryUz": "Just, already va yet so'zlari bilan Present Perfect qo'llanilishi.",
    "grammarRules": [
      {
        "title": "just, already va yet bilan Present Perfect",
        "formula": "have/has + just / already + V3 | haven't/hasn't + V3 ... yet",
        "positive": [
          "I've just arrived (hozirgina - bir necha daqiqa oldin).",
          "I've already paid the electricity bill (allaqachon - kutilgandan oldin)."
        ],
        "negative": [
          "Has it stopped raining yet? (allaqachon/hali - so'roqda oxirida).",
          "They haven't finished lunch yet (hali ham - inkorda oxirida)."
        ],
        "explanationUz": "'Just' - hozirgina; 'already' - kutilganidan oldinroq (allaqachon). 'Yet' esa faqat inkor va so'roq gaplarning oxirida kelib, 'hali' yoki 'allaqachon' ma'nosini beradi."
      }
    ],
    "examples": [
      {
        "en": "Would you like something to eat? - No, thanks. I've just had lunch.",
        "uz": "Biror narsa yeysizmi? - Yo'q, rahmat. Hozirgina tushlik qildim."
      },
      {
        "en": "Don't forget to send the email! - I've already sent it.",
        "uz": "Email jo'natishni unutmang! - Men uni allaqachon jo'natib bo'ldim."
      },
      {
        "en": "Is the postman here? - No, he hasn't arrived yet.",
        "uz": "Pochtachi keldimi? - Yo'q, u hali kelgani yo'q."
      }
    ],
    "exercises": [
      {
        "id": "u16-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'zni tanlang (just / already / yet)",
        "prompt": "I'm not hungry. I have _____ eaten a big sandwich.",
        "options": [
          "just",
          "yet",
          "still",
          "ago"
        ],
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
  {
    "unitNumber": 17,
    "title": "Have you ever ... ? (present perfect 3)",
    "category": "Present Perfect",
    "cefrLevel": "A2",
    "summaryUz": "Hayotiy tajribani so'rash (Have you ever ... ?).",
    "grammarRules": [
      {
        "title": "Have you ever ... ? (Present Perfect Hayotiy Tajriba)",
        "formula": "Have you ever + Past Participle (V3)?",
        "positive": [
          "Have you ever been to Rome? -> Yes, I have. Many times.",
          "I have never eaten sushi in my life."
        ],
        "negative": [
          "Have you ever ridden a horse? -> No, never.",
          "She has never travelled by plane."
        ],
        "explanationUz": "Insonning butun umri davomidagi tajribasini (biror ishni hech qilganmisiz) so'rashda 'Have you ever...?' va inkorida 'I have never...' ishlatiladi. 'Been to' borib kelganlikni anglatadi."
      }
    ],
    "examples": [
      {
        "en": "Have you ever been to Japan? - No, never.",
        "uz": "Hech Yaponiyada bo'lganmisiz? - Yo'q, hech qachon."
      },
      {
        "en": "I've seen that movie three times.",
        "uz": "Men u kinoni uch marta ko'rganman."
      },
      {
        "en": "Ben has never been late for a class.",
        "uz": "Ben hech qachon darsga kechikmagan."
      }
    ],
    "exercises": [
      {
        "id": "u17-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "_____ you ever played cricket before?",
        "options": [
          "Have",
          "Did",
          "Are",
          "Do"
        ],
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
  {
    "unitNumber": 18,
    "title": "How long have you ... ? (present perfect 4)",
    "category": "Present Perfect",
    "cefrLevel": "A2",
    "summaryUz": "Harakatning qanchadan beri davom etayotganini so'rash.",
    "grammarRules": [
      {
        "title": "How long have you ... ? (Present Perfect Davomiylik)",
        "formula": "How long + have / has + Subject + V3 / been?",
        "positive": [
          "How long have you lived here? -> I've lived here for two years.",
          "They have been married since 2018."
        ],
        "negative": [
          "How long has he had his car?",
          "We haven't seen each other for ages."
        ],
        "explanationUz": "O'tmishda boshlanib hozirgacha davom etib kelayotgan holat yoki harakatning qancha vaqt davom etayotganini so'rash uchun 'How long have you...?' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "How long have you known each other? - Since school.",
        "uz": "Bir-biringizni qachondan beri taniysiz? - Maktabdan beri."
      },
      {
        "en": "She has been in hospital since Monday.",
        "uz": "U dushanbadan beri kasalxonada."
      },
      {
        "en": "I've had this phone for six months.",
        "uz": "Bu telefonni olti oydan beri ishlataman."
      }
    ],
    "exercises": [
      {
        "id": "u18-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri savol shaklini tanlang",
        "prompt": "_____ have you known your best friend?",
        "options": [
          "How long",
          "How much",
          "How many",
          "When"
        ],
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
  {
    "unitNumber": 19,
    "title": "for, since, ago",
    "category": "Present Perfect",
    "cefrLevel": "A2",
    "summaryUz": "Vaqt ko'rsatkichlari: for (davomida), since (dan beri), ago (ilgari).",
    "grammarRules": [
      {
        "title": "for, since va ago (Vaqt Ko'rsatkichlari)",
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
        "explanationUz": "'For' vaqt oralig'ini (for three days, for six years), 'since' harakat boshlangan aniq vaqt nuqtasini (since Monday, since 2010) ifodalaydi. 'Ago' esa o'tmishda (Past Simple da) ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Jill has been in Ireland since Monday.",
        "uz": "Jil dushanbadan beri Irlandiyada."
      },
      {
        "en": "Jill has been in Ireland for three days.",
        "uz": "Jil uch kun davomida Irlandiyada bo'lib turibdi."
      },
      {
        "en": "Jill arrived in Ireland three days ago.",
        "uz": "Jil Irlandiyaga uch kun oldin yetib keldi."
      }
    ],
    "exercises": [
      {
        "id": "u19-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri predlogni tanlang (for / since / ago)",
        "prompt": "They have been waiting at the station _____ half an hour.",
        "options": [
          "for",
          "since",
          "ago",
          "during"
        ],
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
  {
    "unitNumber": 20,
    "title": "I have done (present perfect) and I did (past simple)",
    "category": "Present Perfect",
    "cefrLevel": "A2",
    "summaryUz": "Present Perfect va Past Simple zamonlari farqi.",
    "grammarRules": [
      {
        "title": "Present Perfect vs Past Simple Taqqoslash",
        "formula": "Past Simple: tugallangan vaqt (yesterday) VS Present Perfect: hozirgacha",
        "positive": [
          "I lost my key yesterday (aniq o'tgan vaqt - Past Simple).",
          "I have lost my key (hozir ham yo'q - Present Perfect)."
        ],
        "negative": [
          "Did you see John yesterday? (o'tmish).",
          "Have you seen John today? (bugun hali davom etmoqda)."
        ],
        "explanationUz": "Agar gapda o'tmishdagi aniq vaqt ko'rsatilgan bo'lsa (yesterday, last year, in 2019, when I was a child), har doim Past Simple ishlatiladi. Vaqt tugallanmagan bo'lsa (today, this week), Present Perfect ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Shakespeare wrote many famous plays. (o'tmishda yashagan).",
        "uz": "Shekspir ko'plab mashhur pyesalar yozgan."
      },
      {
        "en": "My brother has written two books. (u hali tirik, yana yozishi mumkin).",
        "uz": "Akam ikkita kitob yozgan."
      }
    ],
    "exercises": [
      {
        "id": "u20-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri zamonni tanlang",
        "prompt": "When _____ your new car? - Last week.",
        "options": [
          "did you buy",
          "have you bought",
          "do you buy",
          "are you buying"
        ],
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
  {
    "unitNumber": 21,
    "title": "is done, was done (passive 1)",
    "category": "Passive",
    "cefrLevel": "A2",
    "summaryUz": "Majhul nisbat (Present Simple & Past Simple Passive).",
    "grammarRules": [
      {
        "title": "is done, was done (Passive 1 - Majhul Nisbat)",
        "formula": "Present: am/is/are + V3 | Past: was/were + V3",
        "positive": [
          "This room is cleaned every day (Present Passive).",
          "This house was built in 1965 (Past Passive)."
        ],
        "negative": [
          "Butter is made from milk.",
          "Two people were injured in the accident."
        ],
        "explanationUz": "Majhul nisbatda harakat kim tomonidan bajarilganidan ko'ra, harakatning o'zi yoki uning obyekti muhimroq bo'ladi. Bajiruvchini ko'rsatish uchun 'by' predlogi ishlatiladi (built by my grandfather)."
      }
    ],
    "examples": [
      {
        "en": "Many accidents are caused by dangerous driving.",
        "uz": "Ko'plab avariyalar xavfli haydash tufayli sodir bo'ladi."
      },
      {
        "en": "The telephone was invented by Alexander Graham Bell.",
        "uz": "Telefon Aleksandr Grexam Bell tomonidan ixtiro qilingan."
      }
    ],
    "exercises": [
      {
        "id": "u21-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri Passive shaklini tanlang",
        "prompt": "Millions of emails _____ every single day around the world.",
        "options": [
          "are sent",
          "is sent",
          "sent",
          "are sending"
        ],
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
  {
    "unitNumber": 22,
    "title": "is being done, has been done (passive 2)",
    "category": "Passive",
    "cefrLevel": "A2",
    "summaryUz": "Present Continuous va Present Perfect Passive shakllari.",
    "grammarRules": [
      {
        "title": "is being done, has been done (Passive 2)",
        "formula": "Continuous Passive: is/are being + V3 | Perfect Passive: has/have been + V3",
        "positive": [
          "The room is being cleaned right now (ayni paytda tozalanmoqda).",
          "The room has been cleaned (tozalanib bo'lindi)."
        ],
        "negative": [
          "My car is being repaired at the moment.",
          "Have you ever been bitten by a dog?"
        ],
        "explanationUz": "Ayni paytda sodir bo'layotgan majhul harakat uchun 'am/is/are being + V3', tugallangan natijali majhul harakat uchun 'has/have been + V3' qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "A new hospital is being built in our town.",
        "uz": "Shahrimizda yangi shifoxona qurilmoqda."
      },
      {
        "en": "The shirts have been ironed.",
        "uz": "Ko'ylaklar dazmollangan."
      }
    ],
    "exercises": [
      {
        "id": "u22-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shaklni tanlang",
        "prompt": "Look! The windows _____ at the moment.",
        "options": [
          "are being cleaned",
          "are cleaned",
          "have been cleaned",
          "were cleaning"
        ],
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
  {
    "unitNumber": 23,
    "title": "be / have / do in present and past tenses",
    "category": "Present",
    "cefrLevel": "A2",
    "summaryUz": "Yordamchi fe'llar (be, have, do) tahlili.",
    "grammarRules": [
      {
        "title": "be / have / do zamonlar bo'yicha qo'llanilishi",
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
        "explanationUz": "Be, have va do ingliz tilida ham yordamchi fe'l, ham asosiy fe'l bo'lib kelishi mumkin. Yordamchi fe'l sifatida zamon, inkor va so'roq yasashda xizmat qiladi."
      }
    ],
    "examples": [
      {
        "en": "What were you doing when I called?",
        "uz": "Men qo'ng'iroq qilganimda nima qilayotgan edingiz?"
      },
      {
        "en": "Has Ann arrived yet?",
        "uz": "Ann yetib keldimi?"
      }
    ],
    "exercises": [
      {
        "id": "u23-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri yordamchi fe'lni tanlang",
        "prompt": "Where _____ you born?",
        "options": [
          "were",
          "did",
          "have",
          "are"
        ],
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
  {
    "unitNumber": 24,
    "title": "Regular and irregular verbs",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "To'g'ri va noto'g'ri fe'llar ro'yxati hamda qo'llanilishi.",
    "grammarRules": [
      {
        "title": "To'g'ri va Noto'g'ri Fe'llar (Regular and Irregular Verbs)",
        "formula": "Regular: V + -ed (worked, wanted) | Irregular: V1 -> V2 -> V3 (go, went, gone)",
        "positive": [
          "Regular: played, visited, watched, arrived.",
          "Irregular: see -> saw -> seen | buy -> bought -> bought."
        ],
        "negative": [
          "Put -> put -> put (shakli o'zgarmaydigan fe'llar).",
          "Write -> wrote -> written (har uchala shakli har xil)."
        ],
        "explanationUz": "To'g'ri fe'llarning o'tgan zamon va sifatdosh shakllari -ed bilan yasaladi. Noto'g'ri fe'llar esa maxsus jadval orqali yod olinadi."
      }
    ],
    "examples": [
      {
        "en": "I wrote a letter and sent it by post.",
        "uz": "Men xat yozdim va uni pochta orqali jo'natdim."
      },
      {
        "en": "She broke her arm while skiing.",
        "uz": "U chang'i uchayotganda qo'lini sindirib oldi."
      }
    ],
    "exercises": [
      {
        "id": "u24-ex1",
        "type": "multiple_choice",
        "instruction": "Fe'lning to'g'ri 3-shaklini tanlang (write)",
        "prompt": "This book was _____ by a famous Uzbek author.",
        "options": [
          "written",
          "wrote",
          "write",
          "writed"
        ],
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
  {
    "unitNumber": 25,
    "title": "I used to ...",
    "category": "Past",
    "cefrLevel": "A2",
    "summaryUz": "O'tmishdagi doimiy odatlar va holatlar (used to).",
    "grammarRules": [
      {
        "title": "I used to ... (O'tmishdagi Odat va Holatlar)",
        "formula": "Subject + used to + Verb (infinitive)",
        "positive": [
          "I used to play tennis a lot, but now I don't.",
          "Dave used to have long hair when he was a student."
        ],
        "negative": [
          "I didn't use to like cheese, but now I love it.",
          "Did you use to live in London?"
        ],
        "explanationUz": "'Used to' o'tmishda muntazam qilingan, ammo hozir to'xtatilgan odatlar yoki o'tmishda to'g'ri bo'lgan holatlar uchun ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "We used to live in a small village, but now we live in Tashkent.",
        "uz": "Biz kichik qishloqda yashar edik, lekin hozir Toshkentda yashaymiz."
      },
      {
        "en": "There used to be a cinema here many years ago.",
        "uz": "Ko'p yillar oldin bu yerda kinoteatr bo'lgan edi."
      }
    ],
    "exercises": [
      {
        "id": "u25-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "I _____ smoke, but I gave up three years ago.",
        "options": [
          "used to",
          "use to",
          "am used to",
          "was used to"
        ],
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
  {
    "unitNumber": 26,
    "title": "What are you doing tomorrow?",
    "category": "Future",
    "cefrLevel": "A2",
    "summaryUz": "Yaqin kelajakdagi rejalashtirilgan harakatlar (Present Continuous for Future).",
    "grammarRules": [
      {
        "title": "What are you doing tomorrow? (Present Continuous Kelasi Zamon Uchun)",
        "formula": "Subject + am/is/are + Verb-ing + kelasi zamon vaqti (tomorrow, next week)",
        "positive": [
          "I'm playing tennis with John tomorrow morning.",
          "Sophie is going to the dentist on Friday."
        ],
        "negative": [
          "We aren't going anywhere this weekend.",
          "What are you doing on Saturday evening?"
        ],
        "explanationUz": "Oldindan rejalashtirilgan, kelishilgan va tayyorgarligi ko'rilgan aniq kelajak harakatlari uchun Present Continuous zamoni qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "Alex is getting married next month.",
        "uz": "Aleks kelasi oyda uylanadi (to'y kuni aniq)."
      },
      {
        "en": "I'm not working tomorrow, so we can meet.",
        "uz": "Ertaga ishlamayman, shuning uchun uchrashishimiz mumkin."
      }
    ],
    "exercises": [
      {
        "id": "u26-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri rejalashtirilgan kelasi zamon shaklini tanlang",
        "prompt": "What time _____ you meeting Kate tomorrow?",
        "options": [
          "are",
          "do",
          "will",
          "shall"
        ],
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
  {
    "unitNumber": 27,
    "title": "I'm going to ...",
    "category": "Future",
    "cefrLevel": "A2",
    "summaryUz": "Kelajakdagi niyat va maqsadlar (going to).",
    "grammarRules": [
      {
        "title": "I'm going to ... (Niyat va Aniq Alomatli Kelajak)",
        "formula": "Subject + am/is/are + going to + Verb (infinitive)",
        "positive": [
          "I am going to buy some books tomorrow (Niyat/Qaror).",
          "Look at the dark clouds! It's going to rain (Ko'rinib turgan alomat)."
        ],
        "negative": [
          "I'm not going to have breakfast this morning.",
          "Are you going to invite Martin to your party?"
        ],
        "explanationUz": "'Be going to' qat'iy niyat qilingan harakatlar yoki ayni paytda yaqqol ko'rinib turgan alomatlar asosida sodir bo'lishi muqarrar bo'lgan voqealar uchun ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "What are you going to wear to the party?",
        "uz": "Kechaga nima kiyish niyatidasiz?"
      },
      {
        "en": "Look out! That glass is going to fall.",
        "uz": "Ehtiyot bo'ling! U stakan tushib ketadi (alomat bor)."
      }
    ],
    "exercises": [
      {
        "id": "u27-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri niyat ifodasini tanlang",
        "prompt": "I've decided. I _____ study computer engineering at university.",
        "options": [
          "am going to",
          "will to",
          "going to",
          "am go to"
        ],
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
  {
    "unitNumber": 28,
    "title": "will / shall (1)",
    "category": "Future",
    "cefrLevel": "A2",
    "summaryUz": "Kelajak zamon (will / shall) va tezkor qarorlar.",
    "grammarRules": [
      {
        "title": "will / shall (1) - Kelasi Zamon Bashoratlari",
        "formula": "Subject + will ('ll) / will not (won't) + Verb (bare infinitive)",
        "positive": [
          "I think Uzbekistan will win the football match.",
          "It will be warm and sunny tomorrow."
        ],
        "negative": [
          "I won't (will not) be here tomorrow.",
          "Don't worry, the exam won't be very difficult."
        ],
        "explanationUz": "'Will' kelajak haqidagi shaxsiy fikrlar, taxminlar va bashoratlarda (I think, I believe, probably) hamda o'sha paytning o'zida qabul qilingan qarorlarda ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "I think Diana will pass her driving test easily.",
        "uz": "Menimcha Diana haydovchilik imtihonidan oson o'tadi."
      },
      {
        "en": "You'll love New York. It's an amazing city.",
        "uz": "Sizga Nyu-York yoqadi. U ajoyib shahar."
      }
    ],
    "exercises": [
      {
        "id": "u28-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "I think the weather _____ nice at the weekend.",
        "options": [
          "will be",
          "is being",
          "was",
          "shall be"
        ],
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
  {
    "unitNumber": 29,
    "title": "will / shall (2)",
    "category": "Future",
    "cefrLevel": "A2",
    "summaryUz": "Taklif va va'da berishda will / shall ishlatilishi.",
    "grammarRules": [
      {
        "title": "will / shall (2) - Taklif va Darhol Qabul Qilingan Qarorlar",
        "formula": "I'll do ... (qaror qildim) | Shall I / we ... ? (taklif/maslahat)",
        "positive": [
          "My bag is heavy. - I'll carry it for you.",
          "I'm tired. I think I'll go to bed now."
        ],
        "negative": [
          "Shall I open the window? (Oynani ochaymi?)",
          "Where shall we go tonight? (Bugun qayerga boramiz?)"
        ],
        "explanationUz": "Nutq paytida to'satdan qabul qilingan qarorlarda 'I'll' ishlatiladi. 'Shall I...?' yoki 'Shall we...?' esa biror kishiga yordam yoki birgalikda ish qilish taklifini bildiradi."
      }
    ],
    "examples": [
      {
        "en": "It's cold in here. - I'll close the window.",
        "uz": "Bu yer sovuq. - Men derazani yopaman."
      },
      {
        "en": "Shall I help you with your luggage?",
        "uz": "Yuklaringiz bilan yordamlashaymi?"
      }
    ],
    "exercises": [
      {
        "id": "u29-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri taklif shaklini tanlang",
        "prompt": "It's very warm in this room. _____ I open the window?",
        "options": [
          "Shall",
          "Will",
          "Would",
          "Do"
        ],
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
  {
    "unitNumber": 30,
    "title": "might",
    "category": "Modals",
    "cefrLevel": "A2",
    "summaryUz": "Ehtimollik va gumonni ifodalash (might).",
    "grammarRules": [
      {
        "title": "might (Ehtimollik - Balki)",
        "formula": "Subject + might (not) + Verb (bare infinitive)",
        "positive": [
          "It might rain later, so take an umbrella with you.",
          "I might go to Italy for my holidays this summer."
        ],
        "negative": [
          "I might not go to work tomorrow. I feel sick.",
          "She might not come to the party."
        ],
        "explanationUz": "'Might' kelajakda biror narsa sodir bo'lishi ehtimolini (balki shunday bo'lar, balki bo'lmas, 50/50) ifodalaydi. 'May' bilan deyarli bir xil ma'noda keladi."
      }
    ],
    "examples": [
      {
        "en": "Where is Peter? - He might be in his office.",
        "uz": "Piter qayerda? - U ehtimol o'z kabinetidadir."
      },
      {
        "en": "I haven't decided yet. I might buy that blue shirt.",
        "uz": "Hali bir qarorga kelganim yo'q. Balki o'sha ko'k ko'ylakni sotib olarman."
      }
    ],
    "exercises": [
      {
        "id": "u30-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri ehtimollik modal fe'lini tanlang",
        "prompt": "Take a jacket with you. It _____ get cold this evening.",
        "options": [
          "might",
          "must",
          "can",
          "should to"
        ],
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
  {
    "unitNumber": 31,
    "title": "can and could",
    "category": "Modals",
    "cefrLevel": "A1",
    "summaryUz": "Qobiliyat va ruxsat so'rash (can / could).",
    "grammarRules": [
      {
        "title": "can va could (Qobiliyat va Ruxsat)",
        "formula": "can / can't + Verb (hozir) | could / couldn't + Verb (o'tgan zamon)",
        "positive": [
          "I can swim very well.",
          "When I was young, I could run very fast."
        ],
        "negative": [
          "I'm sorry, I can't come to your party on Friday.",
          "He couldn't sleep last night."
        ],
        "explanationUz": "'Can' hozirgi zamondagi qobiliyat va imkoniyatni, 'could' esa o'tmishdagi qobiliyatni bildiradi. Shuningdek, 'Could you...?' muloyim iltimoslarda qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "Can you speak any foreign languages?",
        "uz": "Chet tillarida gaplasha olasizmi?"
      },
      {
        "en": "Could you open the door for me, please?",
        "uz": "Iltimos, men uchun eshikni ochib yubora olasizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u31-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "I looked everywhere, but I _____ find my glasses.",
        "options": [
          "couldn't",
          "can't",
          "am not",
          "wasn't"
        ],
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
  {
    "unitNumber": 32,
    "title": "must, mustn't, needn't",
    "category": "Modals",
    "cefrLevel": "A2",
    "summaryUz": "Majburiyat va taqiqlar (must / mustn't / needn't).",
    "grammarRules": [
      {
        "title": "must, mustn't va needn't",
        "formula": "must (shart/zarur) | mustn't (qat'iy man etiladi) | needn't (hojat yo'q)",
        "positive": [
          "You must be careful. The road is slippery.",
          "I must study hard for my final exam."
        ],
        "negative": [
          "You mustn't touch that wire. It's dangerous! (Taqiqlanadi).",
          "You needn't hurry. We have plenty of time (Hojat yo'q)."
        ],
        "explanationUz": "'Must' - kuchli zarurat; 'mustn't' - qat'iyan taqiqlangan harakat; 'needn't' (yoki don't need to) - biror narsa qilishga zarurat yo'qligini bildiradi."
      }
    ],
    "examples": [
      {
        "en": "You mustn't tell anyone what I said. It's a secret.",
        "uz": "Men aytgan gapni hech kimga aytmasligingiz kerak. Bu sir."
      },
      {
        "en": "We have plenty of food, so you needn't go shopping.",
        "uz": "Bizda oziq-ovqat yetarli, shuning uchun bozorga borishingizga hojat yo'q."
      }
    ],
    "exercises": [
      {
        "id": "u32-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri modal fe'lni tanlang",
        "prompt": "You _____ smoke anywhere inside the hospital. It is forbidden.",
        "options": [
          "mustn't",
          "needn't",
          "don't have to",
          "must"
        ],
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
  {
    "unitNumber": 33,
    "title": "should",
    "category": "Modals",
    "cefrLevel": "A2",
    "summaryUz": "Maslahat va tavsiya berish (should / shouldn't).",
    "grammarRules": [
      {
        "title": "should (Maslahat va Tavsiya)",
        "formula": "Subject + should / shouldn't + Verb (bare infinitive)",
        "positive": [
          "You look tired. You should go to bed early tonight.",
          "It's a wonderful movie. You should go and see it."
        ],
        "negative": [
          "You shouldn't eat so much junk food. It isn't healthy.",
          "I think we should invite Tom to dinner."
        ],
        "explanationUz": "'Should' - biror ishni qilish yaxshi g'oya yoki to'g'ri ish ekanligini (maslahat) bildiradi. 'Shouldn't' esa buni qilmaslik maqsadga muvofiq ekanini anglatadi."
      }
    ],
    "examples": [
      {
        "en": "Do you think I should apply for this new job?",
        "uz": "Sizningcha men bu yangi ishga topshirishim kerakmi?"
      },
      {
        "en": "He has a bad cough. He shouldn't smoke.",
        "uz": "U qattiq yo'talyapti. U chekmasligi kerak."
      }
    ],
    "exercises": [
      {
        "id": "u33-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri maslahat so'zini tanlang",
        "prompt": "When you play tennis, you _____ always watch the ball.",
        "options": [
          "should",
          "should to",
          "ought",
          "must to"
        ],
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
  {
    "unitNumber": 34,
    "title": "I have to ...",
    "category": "Modals",
    "cefrLevel": "A2",
    "summaryUz": "Tashqi majburiyatni ifodalash (have to / has to).",
    "grammarRules": [
      {
        "title": "I have to ... (Tashqi Majburiyat)",
        "formula": "have / has to + Verb | don't / doesn't have to + Verb",
        "positive": [
          "I have to wear glasses for reading.",
          "Mark has to get up at 6:00 am every day for work."
        ],
        "negative": [
          "I don't have to work tomorrow because it's a holiday.",
          "Did you have to wait a long time for the bus?"
        ],
        "explanationUz": "'Have to' tashqi qoidalar, vaziyat yoki qonun talab qilgan majburiyatlarni ifodalaydi. 'Don't have to' esa majburiyat yo'qligini bildiradi."
      }
    ],
    "examples": [
      {
        "en": "You have to turn left here. It's a one-way street.",
        "uz": "Bu yerda chapga burilishingiz shart. Bu bir tomonlama ko'cha."
      },
      {
        "en": "Tomorrow is Sunday, so I don't have to get up early.",
        "uz": "Ertaga yakshanba, shuning uchun erta turishim shart emas."
      }
    ],
    "exercises": [
      {
        "id": "u34-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri majburiyat shaklini tanlang",
        "prompt": "Sarah isn't well, so she _____ stay in bed today.",
        "options": [
          "has to",
          "have to",
          "having to",
          "has"
        ],
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
  {
    "unitNumber": 35,
    "title": "Would you like ... ? I'd like ...",
    "category": "Modals",
    "cefrLevel": "A1",
    "summaryUz": "Xushmuomalalik bilan taklif qilish (Would you like ... ?).",
    "grammarRules": [
      {
        "title": "Would you like ... ? va I'd like ... (Muloyim Taklif va Istak)",
        "formula": "Would you like + noun / to do? | I'd like (I would like) ...",
        "positive": [
          "Would you like a cup of coffee? -> Yes, please.",
          "I'd like to reserve a table for four people, please."
        ],
        "negative": [
          "Do you like coffee? = Doimiy yoqtirasizmi? (umumiy)",
          "Would you like coffee? = Hozir ichasizmi? (taklif)"
        ],
        "explanationUz": "'Would you like...?' birovga muloyimlik bilan biror narsa taklif qilish yoki taklifnoma bildirish uchun ishlatiladi. 'I'd like...' esa 'I want' ning xushmuomala shakli hisoblanadi."
      }
    ],
    "examples": [
      {
        "en": "What would you like to drink? - Orange juice, please.",
        "uz": "Nima ichishni xohlaysiz? - Apelsin sharbati, iltimos."
      },
      {
        "en": "I'd like to ask you a question.",
        "uz": "Sizdan bir savol so'ramoqchi edim."
      }
    ],
    "exercises": [
      {
        "id": "u35-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri muloyim taklifni tanlang",
        "prompt": "_____ you like some chocolate? - Yes, thank you!",
        "options": [
          "Would",
          "Do",
          "Are",
          "Did"
        ],
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
  {
    "unitNumber": 36,
    "title": "there is, there are",
    "category": "Questions",
    "cefrLevel": "A1",
    "summaryUz": "Mavjudlikni ifodalash (there is / there are).",
    "grammarRules": [
      {
        "title": "there is, there are (Mavjudlikni Ifodalash)",
        "formula": "There is + singular noun | There are + plural noun",
        "positive": [
          "There is a big supermarket near our house.",
          "There are 24 students in our class."
        ],
        "negative": [
          "There isn't any milk left in the fridge.",
          "Are there any questions about this topic?"
        ],
        "explanationUz": "Biror joyda biror narsaning borligini (mavjudligini) birinchi marta aytganda 'there is' (birlik uchun) va 'there are' (ko'plik uchun) ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "There is a train to Bukhara at 8:30 am.",
        "uz": "Ertalab 8:30 da Buxoroga poyezd bor."
      },
      {
        "en": "There are many interesting places to visit in Samarkand.",
        "uz": "Samarqandda ziyorat qilish uchun ko'plab qiziqarli joylar mavjud."
      }
    ],
    "exercises": [
      {
        "id": "u36-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shaklni tanlang",
        "prompt": "_____ seven days in a week.",
        "options": [
          "There are",
          "There is",
          "It is",
          "They are"
        ],
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
  {
    "unitNumber": 37,
    "title": "there was / were, there has / have been, there will be",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "There is iborasining o'tgan va kelajak zamon shakllari.",
    "grammarRules": [
      {
        "title": "there was/were, there has been, there will be",
        "formula": "Past: there was/were | Perfect: there has/have been | Future: there will be",
        "positive": [
          "There was a serious accident on this road yesterday.",
          "There were hundreds of people at the concert."
        ],
        "negative": [
          "There has been an accident. The road is closed now.",
          "Do you think there will be a lot of people at the party?"
        ],
        "explanationUz": "'There be' konstruksiyasi boshqa zamonlarda ham qo'llaniladi: o'tmishda (there was/were), yaqinda sodir bo'lgan (there has been) va kelajakda (there will be)."
      }
    ],
    "examples": [
      {
        "en": "There was a storm last night.",
        "uz": "Kecha tunda bo'ron bo'ldi."
      },
      {
        "en": "I hope there will be good weather tomorrow.",
        "uz": "Umid qilamanki, ertaga yaxshi ob-havo bo'ladi."
      }
    ],
    "exercises": [
      {
        "id": "u37-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri zamon shaklini tanlang",
        "prompt": "Twenty years ago, _____ very few cars in this town.",
        "options": [
          "there were",
          "there was",
          "there are",
          "there have been"
        ],
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
  {
    "unitNumber": 38,
    "title": "It ...",
    "category": "Questions",
    "cefrLevel": "A1",
    "summaryUz": "Vaqt, ob-havo va masofani ifodalashda 'It' nisbiy egasi.",
    "grammarRules": [
      {
        "title": "It ... (Shaxssiz Olmoshi - Ob-havo, Vaqt, Masofa)",
        "formula": "It is + time / weather / distance / fact",
        "positive": [
          "It's raining outside. Take an umbrella.",
          "It is half past ten. Time to go."
        ],
        "negative": [
          "It's a long way from here to the airport.",
          "It is nice to meet you."
        ],
        "explanationUz": "Vaqt (It's 5 o'clock), ob-havo (It's cold/sunny), masofa (It's 10 kilometres) va shaxssiz iboralarda (It's difficult to understand) gap egasi sifatida 'It' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "What time is it? - It's quarter to eight.",
        "uz": "Soat necha bo'ldi? - Sakkiztakam o'n besh."
      },
      {
        "en": "How far is it to Tashkent from Samarkand?",
        "uz": "Samarqanddan Toshkentgacha qancha masofa?"
      }
    ],
    "exercises": [
      {
        "id": "u38-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri olmoshni tanlang",
        "prompt": "_____ is very windy today, so put on your coat.",
        "options": [
          "It",
          "There",
          "He",
          "That"
        ],
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
  {
    "unitNumber": 39,
    "title": "I am, I don't etc.",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Qisqa tasdiq va takroriy javoblar.",
    "grammarRules": [
      {
        "title": "I am, I don't etc. (Qisqa Javoblar va Yordamchi Fe'llar)",
        "formula": "Subject + Auxiliary Verb (qisqa tasdiq yoki inkor)",
        "positive": [
          "Are you tired? -> Yes, I am. (Yes, I'm EMAS!).",
          "Do you like football? -> Yes, I do."
        ],
        "negative": [
          "Can you drive? -> No, I can't.",
          "Has he left? -> No, he hasn't."
        ],
        "explanationUz": "Ingliz tilida butun gapni takrorlamaslik uchun yordamchi fe'llardan (am, is, do, did, can, have) foydalanib qisqa javob beriladi. Qisqa tasdiq javobida qisqartma (I'm, he's) ishlatilmaydi."
      }
    ],
    "examples": [
      {
        "en": "Did you lock the door? - Yes, I did.",
        "uz": "Eshikni qulfladingizmi? - Ha, qulfladim."
      },
      {
        "en": "Are you going out tonight? - No, I'm not.",
        "uz": "Bugun kechqurun ko'chaga chiqasizmi? - Yo'q."
      }
    ],
    "exercises": [
      {
        "id": "u39-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri qisqa javobni tanlang",
        "prompt": "'Have you seen my keys?' - 'No, _____.'",
        "options": [
          "I haven't",
          "I don't",
          "I hasn't",
          "I haven't seen"
        ],
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
  {
    "unitNumber": 40,
    "title": "Have you? Are you? Don't you? etc.",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Ajratuvchi so'roq gaplar va reaksiya bildirish.",
    "grammarRules": [
      {
        "title": "Have you? Are you? Don't you? (Qiziqish Bildirish va Ajratuvchi Savollar)",
        "formula": "Question tags: Tasdiq gap + inkor tag? | Inkor gap + tasdiq tag?",
        "positive": [
          "You're a student, aren't you? -> Yes, that's right.",
          "It's a beautiful day, isn't it? -> Yes, lovely."
        ],
        "negative": [
          "You haven't seen my bag, have you? -> No, I haven't.",
          "They don't live here, do they?"
        ],
        "explanationUz": "Suhbatdoshning fikrini tasdiqlatish yoki qiziqish bildirish uchun gap oxiriga question tag (ajratuvchi savol) qo'shiladi. Gap tasdiq bo'lsa tag inkor, gap inkor bo'lsa tag tasdiq bo'ladi."
      }
    ],
    "examples": [
      {
        "en": "You speak French, don't you?",
        "uz": "Siz fransuzcha gaplashasiz, shunday emasmi?"
      },
      {
        "en": "Kate wasn't at the meeting, was she?",
        "uz": "Keyt yig'ilishda emas edi, shundaymi?"
      }
    ],
    "exercises": [
      {
        "id": "u40-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri question tag tanlang",
        "prompt": "You haven't eaten breakfast yet, _____?",
        "options": [
          "have you",
          "haven't you",
          "did you",
          "do you"
        ],
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
  },
  {
    "unitNumber": 41,
    "title": "too / either, so am I / neither do I etc.",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Fikrga qo'shilish: too/either hamda So am I / Neither do I.",
    "grammarRules": [
      {
        "title": "too / either va so am I / neither do I (Fikrga Qo'shilish)",
        "formula": "Tasdiq: too / So + aux + S | Inkor: either / Neither + aux + S",
        "positive": [
          "I'm happy. - I'm happy too. / So am I.",
          "I like coffee. - I do too. / So do I."
        ],
        "negative": [
          "I'm not hungry. - I'm not either. / Neither am I.",
          "I don't have a car. - Neither do I."
        ],
        "explanationUz": "Suhbatdoshning tasdiq fikriga qo'shilish uchun 'too' yoki 'So + yordamchi fe'l + ega' ishlatiladi. Inkor fikriga qo'shilish uchun esa 'either' yoki 'Neither + yordamchi fe'l + ega' qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "I can play chess. - So can I.",
        "uz": "Men shaxmat o'ynay olaman. - Men ham."
      },
      {
        "en": "I haven't got time. - Neither have I.",
        "uz": "Mening vaqtim yo'q. - Mening ham."
      },
      {
        "en": "I passed the exam. - So did Mark.",
        "uz": "Men imtihondan o'tdim. - Mark ham."
      }
    ],
    "exercises": [
      {
        "id": "u41-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri qo'shilish iborasini tanlang",
        "prompt": "'I am very tired.' - '_____.'",
        "options": [
          "So am I",
          "So do I",
          "Neither am I",
          "I am so"
        ],
        "correctAnswer": "So am I",
        "explanationUz": "'I am' tasdiq gapiga qo'shilish uchun 'So am I' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u41-ex2",
        "type": "fill_in_gap",
        "instruction": "Inkor qo'shilish so'zini yozing (Neither yoki So)",
        "prompt": "'I don't like horror movies.' - '_____ do I.'",
        "correctAnswer": "Neither",
        "explanationUz": "Inkor fikrga qo'shilish uchun 'Neither do I' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 42,
    "title": "isn't, haven't, don't etc. (negatives)",
    "category": "Questions",
    "cefrLevel": "A1",
    "summaryUz": "Inkor fe'llar va qisqartmalar natsional strukturasi.",
    "grammarRules": [
      {
        "title": "isn't, haven't, don't (Ingliz Tilida Inkor Shakllari)",
        "formula": "Auxiliary verb + not (n't) + Main Verb",
        "positive": [
          "She is working. -> She isn't working.",
          "I have seen it. -> I haven't seen it."
        ],
        "negative": [
          "They know the answer. -> They don't know the answer.",
          "He went to London. -> He didn't go to London."
        ],
        "explanationUz": "Ingliz tilida inkor yasash uchun yordamchi fe'lga 'not' (qisqartmasi n't) qo'shiladi. Oddiy zamonlarda esa do/does/did yordamchi fe'llari kiritiladi."
      }
    ],
    "examples": [
      {
        "en": "We haven't got any bread left.",
        "uz": "Bizda non qolmabdi."
      },
      {
        "en": "Don't touch that! It's very hot.",
        "uz": "Unga tegmang! U juda issiq."
      }
    ],
    "exercises": [
      {
        "id": "u42-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri inkor shaklini tanlang",
        "prompt": "George _____ drink coffee in the evening.",
        "options": [
          "doesn't",
          "don't",
          "isn't",
          "not"
        ],
        "correctAnswer": "doesn't",
        "explanationUz": "George (he) uchun Present Simple inkorida 'doesn't' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u42-ex2",
        "type": "fill_in_gap",
        "instruction": "Buyruq inkor so'zini yozing",
        "prompt": "_____ be late for your interview tomorrow morning!",
        "correctAnswer": "Don't",
        "explanationUz": "Inkor buyruq gap 'Don't' bilan boshlanadi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 43,
    "title": "is it ... ? have you ... ? do they ... ? etc. (questions 1)",
    "category": "Questions",
    "cefrLevel": "A1",
    "summaryUz": "Umumiy so'roq gaplar va so'z tartibi.",
    "grammarRules": [
      {
        "title": "is it ... ? have you ... ? (So'roq Gaplarda So'z Tartibi)",
        "formula": "Question word + Auxiliary Verb + Subject + Main Verb?",
        "positive": [
          "Are you watching TV? -> Yes, I am.",
          "Where does your brother work?"
        ],
        "negative": [
          "Why were you late this morning?",
          "How long have they been married?"
        ],
        "explanationUz": "Ingliz tili so'roq gaplarida yordamchi fe'l har doim egadan oldinga o'tadi (inversiya). Agar maxsus so'roq so'zi (Why, Where, What) bo'lsa, u eng birinchi turadi."
      }
    ],
    "examples": [
      {
        "en": "Has the postman come yet?",
        "uz": "Pochtachi keldimi?"
      },
      {
        "en": "Why didn't you phone me yesterday?",
        "uz": "Kecha nega menga qo'ng'iroq qilmadingiz?"
      }
    ],
    "exercises": [
      {
        "id": "u43-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'z tartibini tanlang",
        "prompt": "Where _____ on holiday last year?",
        "options": [
          "did you go",
          "you did go",
          "went you",
          "you went"
        ],
        "correctAnswer": "did you go",
        "explanationUz": "So'roq gapda yordamchi fe'l egadan oldinda bo'ladi: did you go.",
        "points": 15
      },
      {
        "id": "u43-ex2",
        "type": "fill_in_gap",
        "instruction": "Yordamchi fe'lni to'g'ri qo'ying",
        "prompt": "What time _____ the train leave?",
        "correctAnswer": "does",
        "explanationUz": "'The train' (it) uchun so'roqda 'does' yordamchi fe'li ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 44,
    "title": "Who saw you? Who did you see? (questions 2)",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Ega va to'ldiruvchiga beriladigan so'roq gaplar farqi.",
    "grammarRules": [
      {
        "title": "Who saw you? vs Who did you see? (Ega va To'ldiruvchi Savollari)",
        "formula": "Ega so'rog'i: Who/What + Verb(s) | To'ldiruvchi: Who/What + do/did + S + Verb?",
        "positive": [
          "Somebody saw you. -> Who saw you? (Who = Subject, did ishlatilmaydi!).",
          "You saw somebody. -> Who did you see? (Who = Object, did kerak!)."
        ],
        "negative": [
          "What happened? (Nima sodir bo'ldi? - Ega so'rog'i).",
          "What did you do? (Nima qildingiz? - To'ldiruvchi so'rog'i)."
        ],
        "explanationUz": "Agar Who yoki What gapning egasi haqida so'rasa, yordamchi fe'l (do/does/did) ishlatilmaydi va fe'l xuddi darak gapdagidek tuslanadi. Agar to'ldiruvchi so'ralsa, do/does/did shart."
      }
    ],
    "examples": [
      {
        "en": "Who broke this vase? - Emma broke it.",
        "uz": "Bu vazani kim sindirdi? - Emma sindirdi."
      },
      {
        "en": "Who did Emma meet at the cafe? - She met John.",
        "uz": "Emma kafeda kimni uchratdi? - Jonni uchratdi."
      }
    ],
    "exercises": [
      {
        "id": "u44-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'roq shaklini tanlang",
        "prompt": "_____ happened to your hand? Did you cut it?",
        "options": [
          "What",
          "What did",
          "Who did",
          "Which did"
        ],
        "correctAnswer": "What",
        "explanationUz": "Ega so'rog'ida 'did' qo'yilmaydi: 'What happened?'.",
        "points": 15
      },
      {
        "id": "u44-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq so'zini yozing (Who yoki Whom)",
        "prompt": "_____ wrote Romeo and Juliet? - William Shakespeare.",
        "correctAnswer": "Who",
        "explanationUz": "Muallifni (egani) so'rash uchun 'Who wrote...' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 45,
    "title": "Who is she talking to? What is it like? (questions 3)",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Predlog bilan tugaydigan so'roq gaplar.",
    "grammarRules": [
      {
        "title": "Who is she talking to? (Predlogli Savollar va 'What is it like?')",
        "formula": "Question word + aux + Subject + Verb + Preposition?",
        "positive": [
          "Who is she talking to? (Predlog gap oxirida).",
          "Where do you come from?"
        ],
        "negative": [
          "What is your new apartment like? = U qanaqa? (Ta'rif so'rash).",
          "What was the weather like yesterday?"
        ],
        "explanationUz": "Ingliz tilida so'roq gaplarda predloglar (to, from, with, about, like) odatda gapning eng oxirida keladi. 'What is ... like?' biror narsa yoki kishining qandayligini/ta'rifini so'rash uchun ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "What is your new teacher like? - She's very kind and patient.",
        "uz": "Yangi o'qituvchingiz qanaqa? - U juda mehribon va sabrli."
      },
      {
        "en": "What are you looking for? - My sunglasses.",
        "uz": "Nimani qidiryapsiz? - Quyosh ko'zoynagimni."
      }
    ],
    "exercises": [
      {
        "id": "u45-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "'_____ is your new house like?' - 'It's very modern and spacious.'",
        "options": [
          "What",
          "How",
          "Which",
          "Where"
        ],
        "correctAnswer": "What",
        "explanationUz": "'What is ... like?' birikmasi ta'rifni so'rash uchun ishlatiladi.",
        "points": 15
      },
      {
        "id": "u45-ex2",
        "type": "fill_in_gap",
        "instruction": "Gap oxiridagi mos predlogni yozing (for / at / to)",
        "prompt": "Who are you listening _____? - To an English podcast.",
        "correctAnswer": "to",
        "explanationUz": "'Listen' fe'li bilan har doim 'to' predlogi ishlatiladi: listening to.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 46,
    "title": "What ... ? Which ... ? How ... ?",
    "category": "Questions",
    "cefrLevel": "A1",
    "summaryUz": "Maxsus so'roq so'zlar: What, Which, How.",
    "grammarRules": [
      {
        "title": "What ... ? Which ... ? How ... ? (So'roq So'zlari Farqi)",
        "formula": "Which (cheklangan tanlov) | What (cheksiz tanlov) | How (usul/holat)",
        "positive": [
          "Which pen do you want - the blue one or the black one? (cheklangan 2-3 ta).",
          "What is your favourite colour? (cheksiz tanlov)."
        ],
        "negative": [
          "How tall are you? / How far is the station?",
          "How often do you go swimming?"
        ],
        "explanationUz": "'Which' cheklangan sonli variantlar ichidan tanlashda (Which one?), 'What' esa umumiy va cheklanmagan holatlarda ishlatiladi. 'How' sifatlar va ravishlar bilan qo'shilib o'lchov, yosh, narx va masofani so'raydi."
      }
    ],
    "examples": [
      {
        "en": "Which way is the city centre - left or right?",
        "uz": "Shahar markazi qaysi tomonda - chapdami yoki o'ngda?"
      },
      {
        "en": "How long does the movie last?",
        "uz": "Film qancha vaqt davom etadi?"
      }
    ],
    "exercises": [
      {
        "id": "u46-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'roq so'zini tanlang",
        "prompt": "_____ train are you taking - the 10:15 or the 11:30?",
        "options": [
          "Which",
          "What",
          "How",
          "Whose"
        ],
        "correctAnswer": "Which",
        "explanationUz": "Ikkita aniq poyezd variantidan birini tanlash uchun 'Which' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u46-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq so'zini yozing",
        "prompt": "_____ often do you visit your grandparents?",
        "correctAnswer": "How",
        "explanationUz": "Chastotani so'rash uchun 'How often' (Qanchalik tez-tez) birikmasi ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 47,
    "title": "How long does it take ... ?",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Vaqt sarflanishini so me'yorda so'rash (How long does it take?).",
    "grammarRules": [
      {
        "title": "How long does it take ... ? (Vaqt Sarflanishini So'rash)",
        "formula": "How long does it take (you) to do ... ? | It takes (me) 20 minutes to ...",
        "positive": [
          "It takes 20 minutes to walk to the station.",
          "It took me two hours to do my homework yesterday."
        ],
        "negative": [
          "How long does it take by plane from Tashkent to Moscow?",
          "It won't take long to fix your bicycle."
        ],
        "explanationUz": "Biror harakat uchun qancha vaqt ketishini aytishda 'It takes/took/will take (someone) time to do' strukturasi ishlatiladi. So'roqda: 'How long does it take...?'"
      }
    ],
    "examples": [
      {
        "en": "How long did it take you to learn to drive?",
        "uz": "Mashina haydashni o'rganishingizga qancha vaqt ketdi?"
      },
      {
        "en": "It takes an hour to fly from Tashkent to Samarkand.",
        "uz": "Toshkentdan Samarqandga samolyotda uchish 1 soat vaqt oladi."
      }
    ],
    "exercises": [
      {
        "id": "u47-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'l shaklini tanlang",
        "prompt": "It _____ me two hours to finish the report yesterday.",
        "options": [
          "took",
          "takes",
          "taken",
          "taking"
        ],
        "correctAnswer": "took",
        "explanationUz": "O'tgan zamon (yesterday) bo'lgani sababli 'took' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u47-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq iborasini to'ldiring",
        "prompt": "How _____ does it take to get to the airport?",
        "correctAnswer": "long",
        "explanationUz": "Vaqt sarfini so'rashda 'How long' qo'llaniladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 48,
    "title": "Do you know where ... ? I don't know what ... etc.",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "Egri so'roq gaplar (Indirect questions).",
    "grammarRules": [
      {
        "title": "Do you know where ... ? (Bilvosita Savollar)",
        "formula": "Do you know where / what / when + Subject + Verb? (darak so'z tartibi!)",
        "positive": [
          "Where is the post office? -> Do you know where the post office is?",
          "What time does the film start? -> Can you tell me what time the film starts?"
        ],
        "negative": [
          "I don't know where she lives.",
          "I don't know if (whether) they are coming."
        ],
        "explanationUz": "Boshqa gap tarkibiga kirgan bilvosita savollarda so'z tartibi darak gapdagidek bo'ladi (yordamchi fe'l egadan oldinga o'tmaydi va do/does tushib qoladi)."
      }
    ],
    "examples": [
      {
        "en": "Do you know where Jack works?",
        "uz": "Jek qayerda ishlashini bilasizmi?"
      },
      {
        "en": "Can you tell me what time the train leaves?",
        "uz": "Poyezd soat nechada ketishini ayta olasizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u48-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri bilvosita savol so'z tartibini tanlang",
        "prompt": "Excuse me, do you know where _____?",
        "options": [
          "the nearest bank is",
          "is the nearest bank",
          "does the nearest bank be",
          "the nearest bank does"
        ],
        "correctAnswer": "the nearest bank is",
        "explanationUz": "Bilvosita savollarda darak gap tartibi bo'ladi: ega (bank) + fe'l (is).",
        "points": 15
      },
      {
        "id": "u48-ex2",
        "type": "fill_in_gap",
        "instruction": "Ha/yo'q savollarida bilvosita bog'lovchini yozing (if yoki whether)",
        "prompt": "I don't know _____ they will come to the party or not.",
        "correctAnswer": "if",
        "explanationUz": "'Kelish-kelmasliklarini bilmayman' ma'nosida 'if' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 49,
    "title": "She said that ... He told me that ...",
    "category": "Questions",
    "cefrLevel": "A2",
    "summaryUz": "O'zlashtirma gaplar (Reported speech: said vs told).",
    "grammarRules": [
      {
        "title": "She said that ... He told me that ... (O'zlashtirma Gap)",
        "formula": "say (to someone) | tell someone (to siz!) + bir pog'ona o'tgan zamonga surilish",
        "positive": [
          "Direct: 'I am tired' -> Reported: He said that he was tired.",
          "Direct: 'I've lost my key' -> Reported: She told me that she had lost her key."
        ],
        "negative": [
          "He said that he didn't like his new job.",
          "She told me not to wait for her."
        ],
        "explanationUz": "Birovning gapini boshqaga yetkazganda 'say' (aytdi) yoki 'tell someone' (kimdirga aytdi) ishlatiladi. 'Tell' dan keyin 'to' ishlatilmaydi (told me). Fe'llar odatda o'tmishga suriladi (am -> was, have -> had)."
      }
    ],
    "examples": [
      {
        "en": "Sarah said that she was going to buy a new car.",
        "uz": "Sara yangi mashina sotib olmoqchiligini aytdi."
      },
      {
        "en": "He told me that he didn't feel well.",
        "uz": "U menga o'zini yaxshi his qilmayotganini aytdi."
      }
    ],
    "exercises": [
      {
        "id": "u49-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'lni tanlang (said / told)",
        "prompt": "Anna _____ me that she was leaving for Madrid the next day.",
        "options": [
          "told",
          "said",
          "spoke",
          "talked"
        ],
        "correctAnswer": "told",
        "explanationUz": "'Me' (to'ldiruvchi) bor bo'lgani uchun 'told me' to'g'ri.",
        "points": 15
      },
      {
        "id": "u49-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga said yoki told yozing",
        "prompt": "He _____ that he was very busy.",
        "correctAnswer": "said",
        "explanationUz": "To'ldiruvchi kishi nomi yo'qligi sababli 'said that' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 50,
    "title": "work / working, go / going, do / doing",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Fe'l shakllari va zamonlar uyg'unligi.",
    "grammarRules": [
      {
        "title": "work / working, go / going, do / doing (Fe'l Shakllari Umumiy Qoidasi)",
        "formula": "Modal + bare infinitive (can go) | to + infinitive (want to go) | -ing (enjoy going)",
        "positive": [
          "I can speak English fluently (modal fe'llardan keyin).",
          "I want to learn Spanish (infinitive bilan)."
        ],
        "negative": [
          "I enjoy reading books in the evening (gerund -ing bilan).",
          "Let's go home now."
        ],
        "explanationUz": "Ingliz tilida ikkinchi fe'l 3 xil ko'rinishda kelishi mumkin: to-infinitive (want to do), bare infinitive (can do, must do) yoki gerund (enjoy doing, finish doing)."
      }
    ],
    "examples": [
      {
        "en": "You must listen carefully to the instructions.",
        "uz": "Ko'rsatmalarni diqqat bilan eshitishingiz shart."
      },
      {
        "en": "She decided to study medicine.",
        "uz": "U tibbiyotni o'rganishga qaror qildi."
      }
    ],
    "exercises": [
      {
        "id": "u50-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'l shaklini tanlang",
        "prompt": "You shouldn't _____ so fast in rainy weather.",
        "options": [
          "drive",
          "to drive",
          "driving",
          "drove"
        ],
        "correctAnswer": "drive",
        "explanationUz": "'Should' modal fe'lidan keyin fe'lning to-siz asosiy shakli (drive) keladi.",
        "points": 15
      },
      {
        "id": "u50-ex2",
        "type": "fill_in_gap",
        "instruction": "Fe'l shaklini to'ldiring (watch)",
        "prompt": "I enjoy _____ movies at the weekend.",
        "correctAnswer": "watching",
        "explanationUz": "'Enjoy' fe'lidan so'ng -ing shakli (gerund) ishlatiladi: watching.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 51,
    "title": "to ... (I want to do) and -ing (I enjoy doing)",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Infinitive (to do) hamda Gerund (-ing) fe'llari.",
    "grammarRules": [
      {
        "title": "to ... (I want to do) va -ing (I enjoy doing)",
        "formula": "want / decide / hope + to do VS enjoy / finish / stop + doing",
        "positive": [
          "I decided to sell my old car (decide to do).",
          "Have you finished cleaning your room? (finish doing)."
        ],
        "negative": [
          "I don't mind waiting a few minutes.",
          "She refused to answer his question."
        ],
        "explanationUz": "Ba'zi fe'llardan keyin to-infinitive keladi: want, hope, decide, plan, promise, agree, refuse, offer. Boshqa fe'llardan keyin esa -ing keladi: enjoy, mind, finish, suggest, avoid, stop."
      }
    ],
    "examples": [
      {
        "en": "It began raining (yoki to rain).",
        "uz": "Yomg'ir yog'a boshladi."
      },
      {
        "en": "Do you mind closing the window?",
        "uz": "Derazani yopib yubora olmaysizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u51-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shaklni tanlang",
        "prompt": "We decided _____ to the cinema tonight.",
        "options": [
          "to go",
          "going",
          "go",
          "went"
        ],
        "correctAnswer": "to go",
        "explanationUz": "'Decide' fe'lidan keyin to-infinitive ishlatiladi: decided to go.",
        "points": 15
      },
      {
        "id": "u51-ex2",
        "type": "fill_in_gap",
        "instruction": "Fe'lni to'g'ri shaklga qo'ying (swim)",
        "prompt": "She loves _____ in the sea during summer.",
        "correctAnswer": "swimming",
        "explanationUz": "'Love' dan keyin ko'pincha -ing (swimming) ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 52,
    "title": "I want you to ... I told you to ...",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Murakkab to'ldiruvchi (Complex Object: want someone to do).",
    "grammarRules": [
      {
        "title": "I want you to ... I told you to ... (Murakkab To'ldiruvchi)",
        "formula": "Verb (want / ask / tell / advise) + Person (you, him, her) + to do",
        "positive": [
          "I want you to be happy.",
          "The doctor told me to rest for a few days."
        ],
        "negative": [
          "I asked him not to be late.",
          "My parents advised me to study harder."
        ],
        "explanationUz": "Boshqa birovdan biror ish qilishini istaganda yoki buyurganda 'Verb + shaxs + to-infinitive' strukturasi ishlatiladi. 'Make' va 'let' fe'llaridan keyin esa 'to' tushib qoladi (make me laugh, let me go)."
      }
    ],
    "examples": [
      {
        "en": "What do you want me to do?",
        "uz": "Mendan nima qilishimni istaysiz?"
      },
      {
        "en": "The film was sad. It made me cry.",
        "uz": "Film g'amgin edi. U meni yig'latdi."
      }
    ],
    "exercises": [
      {
        "id": "u52-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri strukturani tanlang",
        "prompt": "The teacher told us _____ quiet during the test.",
        "options": [
          "to be",
          "be",
          "being",
          "that be"
        ],
        "correctAnswer": "to be",
        "explanationUz": "'Tell someone to do' qoidasiga ko'ra 'told us to be' to'g'ri bo'ladi.",
        "points": 15
      },
      {
        "id": "u52-ex2",
        "type": "fill_in_gap",
        "instruction": "Inkor to-infinitive shaklini to'ldiring (not to ...)",
        "prompt": "She asked him _____ make any noise.",
        "correctAnswer": "not to",
        "explanationUz": "Inkor buyruqda 'not to' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 53,
    "title": "I went to the shop to ...",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Maqsadni ifodalash (to + verb for purpose).",
    "grammarRules": [
      {
        "title": "I went to the shop to ... (Maqsad Infinitivi)",
        "formula": "Action + to + Verb (maqsad: uchun)",
        "positive": [
          "I went to the supermarket to buy some food.",
          "He turned on the TV to watch the news."
        ],
        "negative": [
          "I'm learning English to get a better job.",
          "I went to the bank for some money (ot bilan 'for' ishlatiladi!)."
        ],
        "explanationUz": "Harakatning maqsadini (nima uchun qilinganini) ifodalash uchun fe'l oldidan 'to' qo'yiladi (to buy, to see). Agar ot kelsa 'for' ishlatiladi (for bread, for an interview)."
      }
    ],
    "examples": [
      {
        "en": "Why did you go out? - To post a letter.",
        "uz": "Nega ko'chaga chiqdingiz? - Xat jo'natish uchun."
      },
      {
        "en": "We shouted to warn everybody of the danger.",
        "uz": "Biz barchani xavfdan ogohlantirish uchun baqirdik."
      }
    ],
    "exercises": [
      {
        "id": "u53-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "She went to university _____ computer science.",
        "options": [
          "to study",
          "for study",
          "for to study",
          "studying"
        ],
        "correctAnswer": "to study",
        "explanationUz": "Maqsad fe'l bilan ifodalanganda 'to + infinitive' qo'llaniladi: to study.",
        "points": 15
      },
      {
        "id": "u53-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga to yoki for yozing",
        "prompt": "We stopped at a restaurant _____ lunch.",
        "correctAnswer": "for",
        "explanationUz": "'Lunch' ot so'z turkumi bo'lgani uchun 'for' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 54,
    "title": "go to ..., go on ..., go for ..., go -ing",
    "category": "Clauses",
    "cefrLevel": "A1",
    "summaryUz": "'Go' fe'lining predloglar bilan birikishi.",
    "grammarRules": [
      {
        "title": "go to ..., go on ..., go for ..., go -ing",
        "formula": "go to + place | go on + holiday/trip | go for + a walk | go + sporting -ing",
        "positive": [
          "I go to work / school / bed / the cinema.",
          "We went on holiday to Egypt last year."
        ],
        "negative": [
          "Let's go for a walk in the park.",
          "Do you often go swimming / skiing / shopping?"
        ],
        "explanationUz": "'Go' fe'li turli predloglar bilan maxsus iboralar yasaydi: go to (joyga borish), go on (ta'tilga/safarga chiqish), go for a walk/swim/drive (sayrga chiqish), go -ing (sport/dam olish faoliyatlari: shopping, swimming)."
      }
    ],
    "examples": [
      {
        "en": "Richard went on a business trip to Germany.",
        "uz": "Richard Germaniyaga xizmat safariga bordi."
      },
      {
        "en": "Would you like to go for a coffee?",
        "uz": "Kofe ichgani borishni xohlaysizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u54-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri birikmani tanlang",
        "prompt": "On Saturdays, my mother usually goes _____ with her friend.",
        "options": [
          "shopping",
          "to shopping",
          "for shopping",
          "shop"
        ],
        "correctAnswer": "shopping",
        "explanationUz": "Bo'sh vaqtdagi mashg'ulotlar uchun 'go shopping' shaklida keladi.",
        "points": 15
      },
      {
        "id": "u54-ex2",
        "type": "fill_in_gap",
        "instruction": "Mos predlogni yozing (to / on / for)",
        "prompt": "The weather is lovely. Let's go _____ a walk.",
        "correctAnswer": "for",
        "explanationUz": "'Sayrga chiqmoq' iborasi 'go for a walk' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 55,
    "title": "get",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "'Get' fe me'lining turli ma'nolari (olmoq, yetib bormoq, bo'lmoq).",
    "grammarRules": [
      {
        "title": "get (Turli Ma'nolari: Olmoq, Yetib Bormoq, Bo'lmoq)",
        "formula": "get + noun (receive/buy) | get + adjective (become) | get to (arrive)",
        "positive": [
          "I got an email from my manager this morning (receive).",
          "It's getting cold. Put on your jacket (become)."
        ],
        "negative": [
          "What time did you get to London? (arrive at/reach).",
          "Get in / get out of a car | Get on / get off a bus/train."
        ],
        "explanationUz": "'Get' ingliz tilida eng ko'p qo'llaniladigan fe'llardan biri bo'lib: 1) sotib olmoq yoki olmoq (get a job), 2) holat o'zgarishi (get dark, get tired), 3) manzilga yetib bormoq (get home, get to work) ma'nolarini beradi."
      }
    ],
    "examples": [
      {
        "en": "Where did you get that stylish jacket?",
        "uz": "U bashang kurtkani qayerdan oldingiz?"
      },
      {
        "en": "If you don't eat, you'll get hungry.",
        "uz": "Agar ovqatlanmasangiz, qorningiz ochadi."
      }
    ],
    "exercises": [
      {
        "id": "u55-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri transport frazasini tanlang",
        "prompt": "The bus arrived and we _____ it.",
        "options": [
          "got on",
          "got in",
          "got to",
          "got into"
        ],
        "correctAnswer": "got on",
        "explanationUz": "Avtobus, poyezd yoki samolyotga chiqish uchun 'get on' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u55-ex2",
        "type": "fill_in_gap",
        "instruction": "O'tgan zamon shaklini yozing (get)",
        "prompt": "I _____ a letter from my university yesterday.",
        "correctAnswer": "got",
        "explanationUz": "'Get' fe'lining o'tgan zamon shakli 'got' hisoblanadi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 56,
    "title": "do and make",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "'Do' va 'Make' fe'llari o'rtasidagi farqlar.",
    "grammarRules": [
      {
        "title": "do va make Farqlari",
        "formula": "do (faoliyat, vazifa, ish) VS make (yaratish, ishlab chiqarish, tayyorlash)",
        "positive": [
          "Do: do homework, do housework, do exercises, do your best, do business.",
          "Make: make coffee, make a mistake, make a phone call, make noise, make money."
        ],
        "negative": [
          "What are you doing this evening?",
          "Don't make so much noise! The baby is sleeping."
        ],
        "explanationUz": "'Make' nimanidir noldan yasash, ishlab chiqarish yoki natija yaratishda ishlatiladi (make a cake). 'Do' esa umumiy faoliyatlar, yumushlar va majburiyatlar uchun qo'llaniladi (do the dishes)."
      }
    ],
    "examples": [
      {
        "en": "I need to make an appointment with the doctor.",
        "uz": "Shifokor bilan qabul vaqtini belgilashim (uchrashuv tayinlashim) kerak."
      },
      {
        "en": "Did you do all your homework?",
        "uz": "Hamma uy vazifalaringizni qildingizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u56-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'lni tanlang (do / make)",
        "prompt": "I'm sorry, I made a terrible _____ in my calculations.",
        "options": [
          "mistake",
          "homework",
          "favour",
          "job"
        ],
        "correctAnswer": "mistake",
        "explanationUz": "'Xato qilmoq' ingliz tilida 'make a mistake' birikmasi bilan aytiladi.",
        "points": 15
      },
      {
        "id": "u56-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga do yoki make yozing",
        "prompt": "Could you _____ me a favour, please?",
        "correctAnswer": "do",
        "explanationUz": "'Iltimosni bajarmoq / yaxshilik qilmoq' iborasi 'do a favour' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 57,
    "title": "have",
    "category": "Clauses",
    "cefrLevel": "A1",
    "summaryUz": "'Have' fe'lining birikmalar bilan qo'llanilishi (have breakfast, have a shower).",
    "grammarRules": [
      {
        "title": "have (have breakfast, have a shower, have a rest)",
        "formula": "have + food/drink/action (doimiy ega bo'lish emas, faoliyat!)",
        "positive": [
          "I have breakfast at 7:30 every morning.",
          "We're having a party next Saturday."
        ],
        "negative": [
          "Did you have a good holiday?",
          "I'm going to have a shower before dinner."
        ],
        "explanationUz": "'Have' ovqatlanish, dam olish va faoliyatlar bilan kelganda 'have got' ishlatilmaydi va Present Continuous da tuslanishi mumkin (I am having lunch right now). Savol va inkorda do/did ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Have a good time in Paris!",
        "uz": "Parijda vaqtingiz maroqli o'tsin!"
      },
      {
        "en": "Can I have a look at your photos?",
        "uz": "Rasmlaringizga bir qarasam bo'ladimi?"
      }
    ],
    "exercises": [
      {
        "id": "u57-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri zamon shaklini tanlang",
        "prompt": "Excuse me, I can't talk right now. I _____ lunch.",
        "options": [
          "am having",
          "have got",
          "had got",
          "having"
        ],
        "correctAnswer": "am having",
        "explanationUz": "Ayni paytda tushlik qilish jarayoni uchun 'am having lunch' to'g'ri.",
        "points": 15
      },
      {
        "id": "u57-ex2",
        "type": "fill_in_gap",
        "instruction": "Iborani to'ldiring (have a ...)",
        "prompt": "I'm very tired. I want to have a _____ on the sofa.",
        "correctAnswer": "rest",
        "explanationUz": "'Dam olmoq' iborasi 'have a rest' hisoblanadi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 58,
    "title": "I / me, he / him, they / them etc.",
    "category": "Pronouns",
    "cefrLevel": "A1",
    "summaryUz": "Ega va to'ldiruvchi olmoshlari (Subject vs Object Pronouns).",
    "grammarRules": [
      {
        "title": "I / me, he / him, they / them (Ega va To'ldiruvchi Kishilik Olmoshlari)",
        "formula": "Subject: I, he, she, it, we, they | Object: me, him, her, it, us, them",
        "positive": [
          "I know Tom, but he doesn't know me.",
          "We invited them, but they couldn't come."
        ],
        "negative": [
          "Where is Sarah? I need to speak to her.",
          "This letter isn't for you, it's for us."
        ],
        "explanationUz": "Gapning egasi (harakatni bajaruvchi) sifatida Subject olmoshlar (I, he, she...), fe'ldan yoki predlogdan keyin esa to'ldiruvchi sifatida Object olmoshlar (me, him, her, us, them) ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Give that book to me, please.",
        "uz": "Iltimos, u kitobni menga bering."
      },
      {
        "en": "Do you like them? - Yes, they are very friendly.",
        "uz": "Ular sizga yoqadimi? - Ha, ular juda samimiy."
      }
    ],
    "exercises": [
      {
        "id": "u58-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri to'ldiruvchi olmoshini tanlang",
        "prompt": "I don't know that man. Do you know _____?",
        "options": [
          "him",
          "he",
          "his",
          "himself"
        ],
        "correctAnswer": "him",
        "explanationUz": "Erkak kishi to'ldiruvchi sifatida fe'ldan keyin 'him' bo'ladi.",
        "points": 15
      },
      {
        "id": "u58-ex2",
        "type": "fill_in_gap",
        "instruction": "To'g'ri olmoshni yozing (we / us)",
        "prompt": "They gave _____ a warm welcome.",
        "correctAnswer": "us",
        "explanationUz": "Fe'ldan keyin kelgan to'ldiruvchi uchun 'us' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 59,
    "title": "my / his / their etc.",
    "category": "Pronouns",
    "cefrLevel": "A1",
    "summaryUz": "Egalik sifatlari (Possessive Adjectives: my, your, his, her).",
    "grammarRules": [
      {
        "title": "my / his / their etc. (Egalik Sifatlari)",
        "formula": "my, your, his, her, its, our, their + Noun",
        "positive": [
          "I like my new job.",
          "Do you like your teacher?",
          "Sam is with his sister."
        ],
        "negative": [
          "Oxford is famous for its university (its = egalik, it's = it is EMAS!).",
          "They are washing their car."
        ],
        "explanationUz": "Egalik sifatlari har doim otdan oldin keladi va buyum yoki shaxsning kimga tegishli ekanini bildiradi (my car, his shoes, their house)."
      }
    ],
    "examples": [
      {
        "en": "Mary lives in Rome with her husband.",
        "uz": "Meri Rimda o'z eri bilan yashaydi."
      },
      {
        "en": "Our flat is on the third floor.",
        "uz": "Bizning xonadonimiz uchinchi qavatda."
      }
    ],
    "exercises": [
      {
        "id": "u59-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri egalik sifatini tanlang",
        "prompt": "Mr. and Mrs. Smith live with _____ three daughters.",
        "options": [
          "their",
          "them",
          "theirs",
          "they"
        ],
        "correctAnswer": "their",
        "explanationUz": "Ko'plikdagi egalar uchun 'their' (ularning) otdan oldin qo'yiladi.",
        "points": 15
      },
      {
        "id": "u59-ex2",
        "type": "fill_in_gap",
        "instruction": "To'g'ri shaklni yozing (its yoki it's)",
        "prompt": "The dog was playing with _____ favourite ball.",
        "correctAnswer": "its",
        "explanationUz": "Hayvon yoki jonsiz narsa egaligi uchun apostrofsiz 'its' yoziladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 60,
    "title": "Whose is this? It's mine / yours / hers etc.",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Egalik olmoshlari (Possessive Pronouns: mine, yours, hers).",
    "grammarRules": [
      {
        "title": "Whose is this? It's mine / yours / hers (Egalik Olmoshlari)",
        "formula": "mine, yours, his, hers, ours, theirs (otsiz yolg'iz ishlatiladi!)",
        "positive": [
          "This is my book. -> This book is mine.",
          "Is this camera yours or his?"
        ],
        "negative": [
          "Whose jacket is this? - It's hers.",
          "Our car is bigger than theirs."
        ],
        "explanationUz": "Egalik olmoshlari (mine, yours, hers...) otdan so'ng yoki yolg'iz keladi va o'zidan keyin ot talab qilmaydi. Egalikni so'rash uchun 'Whose...?' (Kimniki?) so'rog'i qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "Whose bag is this? - It's mine.",
        "uz": "Bu kimning sumkasi? - Meniki."
      },
      {
        "en": "Their house is lovely, but ours is newer.",
        "uz": "Ularning uyi ajoyib, lekin bizniki yangiroq."
      }
    ],
    "exercises": [
      {
        "id": "u60-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri egalik olmoshini tanlang",
        "prompt": "Is that umbrella _____ or does it belong to Anna?",
        "options": [
          "yours",
          "your",
          "you",
          "yours'"
        ],
        "correctAnswer": "yours",
        "explanationUz": "Gap oxirida otsiz yolg'iz kelgan egalik olmoshi 'yours' bo'ladi.",
        "points": 15
      },
      {
        "id": "u60-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq so'zini yozing (Whose yoki Who's)",
        "prompt": "_____ keys are these on the kitchen table?",
        "correctAnswer": "Whose",
        "explanationUz": "'Kimning kalitlari' deb egalikni so'rashda 'Whose' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 61,
    "title": "I / me / my / mine",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Olmoshlarning umumiy takroriy jadvali.",
    "grammarRules": [
      {
        "title": "I / me / my / mine (Kishilik va Egalik Tizimi Taqqoslashi)",
        "formula": "I (ega) -> me (to'ldiruvchi) -> my (ot oldida) -> mine (otsiz)",
        "positive": [
          "I gave my phone to him, and he gave his to me.",
          "She asked me for my passport, but I couldn't find mine."
        ],
        "negative": [
          "He doesn't know his neighbours, and they don't know him.",
          "We invited our friends, and they invited theirs."
        ],
        "explanationUz": "Ushbu unit barcha olmosh turlarini yaxlit holda taqqoslaydi: ega olmoshi, to'ldiruvchi olmoshi, egalik sifati va mustaqil egalik olmoshi."
      }
    ],
    "examples": [
      {
        "en": "Do you know him? He is a good friend of mine.",
        "uz": "Uni taniysizmi? U mening yaxshi do'stlarimdan biri."
      },
      {
        "en": "This is her coat, and that one is mine.",
        "uz": "Bu uning paltosi, anavi esa meniki."
      }
    ],
    "exercises": [
      {
        "id": "u61-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "A friend of _____ is getting married this Saturday.",
        "options": [
          "mine",
          "my",
          "me",
          "I"
        ],
        "correctAnswer": "mine",
        "explanationUz": "'A friend of mine' (mening do'stlarimdan biri) turg'un iborasida 'mine' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u61-ex2",
        "type": "fill_in_gap",
        "instruction": "To'g'ri olmoshni yozing",
        "prompt": "I forgot my umbrella, so Sarah lent me _____.",
        "correctAnswer": "hers",
        "explanationUz": "Sarahning zontigi (o'ziniki) otsiz kelganida 'hers' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 62,
    "title": "myself / yourself / themselves etc.",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "O'zlik olmoshlari (Reflexive Pronouns).",
    "grammarRules": [
      {
        "title": "myself / yourself / themselves (O'zlik Olmoshlari)",
        "formula": "Subject + Verb + reflexive pronoun (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves)",
        "positive": [
          "I cut myself with a knife while cooking.",
          "He looked at himself in the mirror."
        ],
        "negative": [
          "We enjoyed ourselves at the party very much.",
          "She did all the work by herself (= yolg'iz o'zi)."
        ],
        "explanationUz": "Harakatni bajaruvchi va qabul qiluvchi bir xil shaxs bo'lganda o'zlik olmoshlari ishlatiladi. 'By myself / by himself' esa 'yolg'iz o'zi / hech kimning yordamisiz' ma'nosini beradi."
      }
    ],
    "examples": [
      {
        "en": "Take care of yourself!",
        "uz": "O'zingizni ehtiyot qiling!"
      },
      {
        "en": "They repaired the car by themselves.",
        "uz": "Ular mashinani hech kimning yordamisiz o'zlari ta'mirladilar."
      }
    ],
    "exercises": [
      {
        "id": "u62-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri o'zlik olmoshini tanlang",
        "prompt": "Did you paint the room all by _____?",
        "options": [
          "yourself",
          "you",
          "your",
          "yours"
        ],
        "correctAnswer": "yourself",
        "explanationUz": "'By yourself' birikmasi 'o'zingiz yolg'iz' ma'nosini bildiradi.",
        "points": 15
      },
      {
        "id": "u62-ex2",
        "type": "fill_in_gap",
        "instruction": "Mos o'zlik olmoshini yozing",
        "prompt": "Be careful with that hot tea! Don't burn _____.",
        "correctAnswer": "yourself",
        "explanationUz": "Suhbatdoshga (you) qaratilgani uchun 'yourself' to'g'ri bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 63,
    "title": "Ann's camera / my brother's car ('s)",
    "category": "Pronouns",
    "cefrLevel": "A1",
    "summaryUz": "Egalik kelishigi (-'s va s').",
    "grammarRules": [
      {
        "title": "Ann's camera / my brother's car ('s Egalik Qo'shimchasi)",
        "formula": "Shaxs + 's + noun (Ann's camera) | Ko'plik -s + ' (my parents' car) | Narsa + of (the roof of the house)",
        "positive": [
          "This is my sister's laptop.",
          "We went to Paul and Emma's wedding."
        ],
        "negative": [
          "My parents' house is in Samarkand.",
          "The temperature of the water was very cold (narsalar uchun 'of')."
        ],
        "explanationUz": "Odamlar va hayvonlarga nisbatan egalik bildirish uchun 's qo'shiladi. Ko'plik -s bilan tugagan otlarda faqat apostrof ' qo'yiladi (my friends' house). Jonsiz narsalarda esa odatda 'of' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "What is the name of this street?",
        "uz": "Bu ko'chaning nomi nima?"
      },
      {
        "en": "Yesterday I met Tom's brother.",
        "uz": "Kecha men Tomning akasi bilan uchrashdim."
      }
    ],
    "exercises": [
      {
        "id": "u63-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri egalik shaklini tanlang",
        "prompt": "Do you know _____ daughter? She is an architect.",
        "options": [
          "Jack and Mary's",
          "Jack's and Mary's",
          "Jack and Mary",
          "Jack's and Mary"
        ],
        "correctAnswer": "Jack and Mary's",
        "explanationUz": "Umumiy egalikda apostrof s faqat oxirgi ismga qo'shiladi: Jack and Mary's.",
        "points": 15
      },
      {
        "id": "u63-ex2",
        "type": "fill_in_gap",
        "instruction": "To'g'ri predlogni yozing (of yoki 's)",
        "prompt": "I don't remember the title _____ the book.",
        "correctAnswer": "of",
        "explanationUz": "Jonsiz narsa (kitob) uchun 'the title of the book' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 64,
    "title": "a / an ...",
    "category": "Articles & Nouns",
    "cefrLevel": "A1",
    "summaryUz": "Noaniq artikllar (a / an).",
    "grammarRules": [
      {
        "title": "a / an ... (Noaniq Artikllar)",
        "formula": "a + undosh tovush (a car, a university) | an + unli tovush (an apple, an hour)",
        "positive": [
          "Rachel works in a bank.",
          "Can I have an orange, please?"
        ],
        "negative": [
          "He is an honest man ('h' o'qilmaydi - unli tovush!).",
          "She is a university student ('u' [ju:] undosh tovush!)."
        ],
        "explanationUz": "'A/an' faqat birlikdagi sanaladigan otlar oldidan keladi. Tanlov yozuvdagi harfga emas, balki talaffuzdagi birinchi tovushga bog'liq: unli tovushdan oldin 'an', undosh tovushdan oldin 'a'."
      }
    ],
    "examples": [
      {
        "en": "I waited for an hour at the station.",
        "uz": "Vokzalda bir soat kutdim."
      },
      {
        "en": "She wants to become a doctor.",
        "uz": "U shifokor bo'lishni xohlaydi."
      }
    ],
    "exercises": [
      {
        "id": "u64-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri artiklni tanlang",
        "prompt": "My uncle is _____ university professor in London.",
        "options": [
          "a",
          "an",
          "the",
          "-"
        ],
        "correctAnswer": "a",
        "explanationUz": "'University' so'zi [ju:] undosh tovushi bilan boshlangani uchun 'a' qo'yiladi.",
        "points": 15
      },
      {
        "id": "u64-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga a yoki an yozing",
        "prompt": "We had to wait for _____ hour before the doctor arrived.",
        "correctAnswer": "an",
        "explanationUz": "'Hour' so'zida 'h' harfi o'qilmasdan unli tovush bilan boshlangani sababli 'an' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 65,
    "title": "flower(s), bus(es) (singular and plural)",
    "category": "Articles & Nouns",
    "cefrLevel": "A1",
    "summaryUz": "Otlar ko'pligi (Singular and Plural Nouns).",
    "grammarRules": [
      {
        "title": "flower(s), bus(es) (Otlar Ko'pligi)",
        "formula": "Noun + -s / -es | Irregular: man -> men, child -> children, foot -> feet",
        "positive": [
          "one car -> two cars | a bus -> three buses | a city -> four cities.",
          "Irregulars: a child -> children, a tooth -> teeth, a person -> people."
        ],
        "negative": [
          "These scissors are sharp (doimiy ko'plikdagi otlar).",
          "My trousers are too long."
        ],
        "explanationUz": "Ko'p otlarga ko'plikda -s yoki -es (-s, -sh, -ch, -x dan keyin) qo'shiladi. Noto'g'ri otlar ichki unlisini o'zgartiradi (men, women, feet). Scissors, glasses, trousers, jeans kabi otlar doimiy ko'plik hisoblanadi."
      }
    ],
    "examples": [
      {
        "en": "There are many young people in our city.",
        "uz": "Shahrimizda juda ko'p yoshlar bor."
      },
      {
        "en": "Where are my sunglasses?",
        "uz": "Quyosh ko'zoynagim qayerda?"
      }
    ],
    "exercises": [
      {
        "id": "u65-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri ko'plik shaklini tanlang",
        "prompt": "There were about twenty _____ in the playground.",
        "options": [
          "children",
          "childs",
          "childrens",
          "childes"
        ],
        "correctAnswer": "children",
        "explanationUz": "'Child' otining to'g'ri ko'plik shakli 'children' hisoblanadi.",
        "points": 15
      },
      {
        "id": "u65-ex2",
        "type": "fill_in_gap",
        "instruction": "Otning ko'plik shaklini yozing (city)",
        "prompt": "Tashkent and Samarkand are ancient _____ of Uzbekistan.",
        "correctAnswer": "cities",
        "explanationUz": "Undosh + y bilan tugagan otlar ko'plikda '-ies' oladi: cities.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 66,
    "title": "a car / some money (countable/uncountable 1)",
    "category": "Articles & Nouns",
    "cefrLevel": "A2",
    "summaryUz": "Sanaladigan va sanalmaydigan otlar.",
    "grammarRules": [
      {
        "title": "a car / some money (Sanaladigan va Sanalmaydigan Otlar 1)",
        "formula": "Countable: a car / cars, many cars | Uncountable: some money, much money (a/an va ko'plik bo'lmaydi!)",
        "positive": [
          "Countable: a beach, an apple, two cups, three houses.",
          "Uncountable: water, milk, rice, money, music, air."
        ],
        "negative": [
          "I have some money. (a money EMAS!).",
          "Can you pass me some sugar?"
        ],
        "explanationUz": "Sanaladigan otlar dona-dona sanaladi (one car, two cars). Sanalmaydigan otlar esa yaxlit modda, suyuqlik yoki tushuncha bo'lib, ularning oldidan a/an ishlatilmaydi va ko'plik shakli bo'lmaydi."
      }
    ],
    "examples": [
      {
        "en": "I bought some bananas and some rice.",
        "uz": "Men bir nechta banan va bir oz guruch sotib oldim."
      },
      {
        "en": "Do you listen to music very often?",
        "uz": "Musiqa juda tez-tez eshitib turasizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u66-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri sanalmaydigan ot ifodasini tanlang",
        "prompt": "Would you like _____ tea or coffee?",
        "options": [
          "some",
          "a",
          "an",
          "many"
        ],
        "correctAnswer": "some",
        "explanationUz": "'Tea' sanalmaydigan ot bo'lgani uchun unga 'some' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u66-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga a yoki some yozing",
        "prompt": "I need _____ information about train times.",
        "correctAnswer": "some",
        "explanationUz": "'Information' ingliz tilida sanalmaydigan ot bo'lib, 'a' olmaydi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 67,
    "title": "a car / some money (countable/uncountable 2)",
    "category": "Articles & Nouns",
    "cefrLevel": "A2",
    "summaryUz": "Sanalmaydigan otlar bilan a/an va some ishlatilishi.",
    "grammarRules": [
      {
        "title": "a car / some money (Sanalmaydigan Maxsus Otlar 2)",
        "formula": "Uncountable: information, advice, news, weather, bread, traffic, luggage, furniture",
        "positive": [
          "Can you give me some advice? (an advice EMAS!).",
          "The weather was wonderful yesterday."
        ],
        "negative": [
          "The news is good (news har doim birlik fe'l oladi!).",
          "We have a lot of luggage."
        ],
        "explanationUz": "O'zbek tilida sanaladigan bo'lsa ham, ingliz tilida qat'iy sanalmaydigan otlar: information (ma'lumot), advice (maslahat), news (yangilik), weather (ob-havo), bread (non), furniture (mebel), luggage (yuk)."
      }
    ],
    "examples": [
      {
        "en": "Let me give you a piece of advice.",
        "uz": "Sizga bitta maslahat berishga ruxsat eting."
      },
      {
        "en": "I have some wonderful news for you.",
        "uz": "Siz uchun ajoyib bir yangiligim bor."
      }
    ],
    "exercises": [
      {
        "id": "u67-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'lni tanlang",
        "prompt": "The news about the project _____ very exciting.",
        "options": [
          "is",
          "are",
          "were",
          "have been"
        ],
        "correctAnswer": "is",
        "explanationUz": "'News' oxirida -s bo'lsa ham birlikdagi ot hisoblanadi va 'is' oladi.",
        "points": 15
      },
      {
        "id": "u67-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga piece yoki some yozing",
        "prompt": "He gave me a valuable _____ of advice.",
        "correctAnswer": "piece",
        "explanationUz": "'Bitta maslahat' ingliz tilida 'a piece of advice' deyiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 68,
    "title": "a / an and the",
    "category": "Articles & Nouns",
    "cefrLevel": "A1",
    "summaryUz": "Noaniq (a/an) va aniq (the) artikllari taqqoslanishi.",
    "grammarRules": [
      {
        "title": "a / an va the (Artikllar Farqi)",
        "formula": "a/an = noaniq, birinchi bor eslatilgan | the = aniq, tinglovchiga ma'lum",
        "positive": [
          "I bought a jacket and a shirt. The jacket is blue, but the shirt is white.",
          "Can you open the door, please? (Xonadagi aniq eshik)."
        ],
        "negative": [
          "There is a man outside. (Qaysi man ekani noma'lum).",
          "The man outside wants to speak to you. (O'sha man)."
        ],
        "explanationUz": "Nutqda birinchi marta tilga olingan narsalar uchun 'a/an', suhbatdoshga allaqachon ma'lum bo'lgan aniq narsa-buyumlar uchun esa 'the' aniq artikli ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "We sat down in the living room and turned on the TV.",
        "uz": "Biz mehmonxonada o'tirdik va televizorni yoqdik."
      },
      {
        "en": "I need to go to the bank to get some cash.",
        "uz": "Naqd pul olish uchun bankka borishim kerak."
      }
    ],
    "exercises": [
      {
        "id": "u68-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri artikl kombinatsiyasini tanlang",
        "prompt": "A woman and a man were sitting opposite me. _____ woman was reading a book.",
        "options": [
          "The",
          "A",
          "An",
          "One"
        ],
        "correctAnswer": "The",
        "explanationUz": "Ayol ikkinchi marta eslatilgani sababli 'The' aniq artikli qo'yiladi.",
        "points": 15
      },
      {
        "id": "u68-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga the yoki a yozing",
        "prompt": "Could you please pass me _____ salt?",
        "correctAnswer": "the",
        "explanationUz": "Stoldagi aniq tuzdon nazarda tutilgani uchun 'the salt' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 69,
    "title": "the ...",
    "category": "Articles & Nouns",
    "cefrLevel": "A2",
    "summaryUz": "Aniq artikl (the) ning maxsus qoidalari.",
    "grammarRules": [
      {
        "title": "the ... (Yagona Narsalar va Muhit)",
        "formula": "the + dunyoda yagona narsalar (the sun, the moon, the sky, the world, the internet)",
        "positive": [
          "The sun is shining brightly today.",
          "The earth moves around the sun."
        ],
        "negative": [
          "Paris is the capital of France.",
          "I looked up at the sky."
        ],
        "explanationUz": "Dunyoda yagona bo'lgan borliq ob'ektlari (the sun, the moon, the earth, the world, the universe) hamda 'the police, the fire brigade, the internet' so'zlari bilan 'the' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Millions of people surf the internet every day.",
        "uz": "Millionlab insonlar har kuni internetdan foydalanadi."
      },
      {
        "en": "What is the longest river in the world?",
        "uz": "Dunyodagi eng uzun daryo qaysi?"
      }
    ],
    "exercises": [
      {
        "id": "u69-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "_____ moon was full and bright last night.",
        "options": [
          "The",
          "A",
          "An",
          "-"
        ],
        "correctAnswer": "The",
        "explanationUz": "Oy osmonda yagona ob'ekt bo'lgani sababli 'The moon' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u69-ex2",
        "type": "fill_in_gap",
        "instruction": "Kerakli artiklni yozing (the yoki a)",
        "prompt": "You can find almost any information on _____ internet.",
        "correctAnswer": "the",
        "explanationUz": "'Internet' so'zi oldidan har doim 'the' qo'yiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 70,
    "title": "go to work / go home / go to the cinema",
    "category": "Articles & Nouns",
    "cefrLevel": "A2",
    "summaryUz": "Artiklsiz ishlatiladigan joy nomlari (go to school, go home).",
    "grammarRules": [
      {
        "title": "go to work / go home / go to the cinema",
        "formula": "No article: at home, at work, at school, in bed | With 'the': to the cinema, to the bank",
        "positive": [
          "I'm at work right now (the work EMAS!).",
          "What time do you usually go home? (to home EMAS!)."
        ],
        "negative": [
          "Children start school at the age of six.",
          "We went to the cinema on Friday evening."
        ],
        "explanationUz": "'Home, work, school, hospital, prison, church, bed' so'zlari ularning asosiy maqsadi bo'yicha ishlatilganda 'the' artiklisiz qo'llaniladi (in hospital - davolanmoqda). 'Cinema, theatre, bank, supermarket' bilan esa 'the' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "I was exhausted, so I went straight to bed.",
        "uz": "Juda charchagan edim, shuning uchun to'g'ri o'ringa yotishga bordim."
      },
      {
        "en": "We often go to the theatre at the weekend.",
        "uz": "Dam olish kunlari biz tez-tez teatrga boramiz."
      }
    ],
    "exercises": [
      {
        "id": "u70-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shaklni tanlang",
        "prompt": "After finishing work, I went straight _____.",
        "options": [
          "home",
          "to home",
          "to the home",
          "at home"
        ],
        "correctAnswer": "home",
        "explanationUz": "'Go home' iborasida 'to' ham, artikl ham ishlatilmaydi.",
        "points": 15
      },
      {
        "id": "u70-ex2",
        "type": "fill_in_gap",
        "instruction": "Mos predlogni yozing (at / in / to)",
        "prompt": "My mother is still _____ work at the hospital.",
        "correctAnswer": "at",
        "explanationUz": "'Ishda' ma'nosida 'at work' iborasi qo'llaniladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 71,
    "title": "I like music, I hate exams",
    "category": "Articles & Nouns",
    "cefrLevel": "A2",
    "summaryUz": "Umumiy tushunchalar bilan artikllarning ishlatilmasligi.",
    "grammarRules": [
      {
        "title": "I like music, I hate exams (Umumiy Tushunchalar Artikl Olmaydi)",
        "formula": "General plural / uncountable: no article | Specific: the + noun",
        "positive": [
          "I love music, especially jazz (umumiy musiqa).",
          "I liked the music at the party yesterday (aniq o'sha kechadagi musiqa)."
        ],
        "negative": [
          "Doctors work very hard (umumiy shifokorlar).",
          "We must protect wild animals."
        ],
        "explanationUz": "Umumiy ma'nodagi ko'plikdagi otlar (computers, children) yoki sanalmaydigan mavhum/moddiy otlar (music, life, gold) oldidan 'the' ishlatilmaydi."
      }
    ],
    "examples": [
      {
        "en": "Life is not possible without water.",
        "uz": "Suvsiz hayot bo'lishi mumkin emas."
      },
      {
        "en": "Most people like chocolate.",
        "uz": "Ko'pchilik odamlar shokoladni yoqtirishadi."
      }
    ],
    "exercises": [
      {
        "id": "u71-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "_____ are much more expensive than they were five years ago.",
        "options": [
          "Computers",
          "The computers",
          "A computer",
          "An computers"
        ],
        "correctAnswer": "Computers",
        "explanationUz": "Umumiy ma'noda kompyuterlar haqida gap ketganda artiklsiz 'Computers' bo'ladi.",
        "points": 15
      },
      {
        "id": "u71-ex2",
        "type": "fill_in_gap",
        "instruction": "Artikl kerak bo'lmasa '-' deb, kerak bo'lsa 'the' deb yozing",
        "prompt": "Do you like classical _____ music?",
        "correctAnswer": "-",
        "explanationUz": "Umumiy musiqa turi oldidan artikl qo'yilmaydi (-).",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 72,
    "title": "the ... (names of places)",
    "category": "Articles & Nouns",
    "cefrLevel": "A2",
    "summaryUz": "Joy va geografik nomlar bilan 'the' artiklining ishlatilishi.",
    "grammarRules": [
      {
        "title": "the ... (Geografik Joy Nomlari)",
        "formula": "Daryolar, dengizlar, okeanlar, tog' tizmalari: the | Qit'alar, shaharlar, ko'llar: artiklsiz",
        "positive": [
          "The Atlantic Ocean, the Nile, the Mediterranean Sea, the Alps.",
          "Countries with plural / Republic / Kingdom: the USA, the UK, the Netherlands."
        ],
        "negative": [
          "Uzbekistan, France, Asia, London, Lake Baikal, Mount Everest (artiklsiz!).",
          "We visited Central Asia last spring."
        ],
        "explanationUz": "Shaharlar, davlatlarning ko'pchiligi, qit'alar va alohida tog' cho'qqilari artiklsiz keladi. Ammo daryolar (the Nile), okeanlar (the Pacific), tog' tizmalari (the Alps) hamda nomida 'Republic/Kingdom/States' bo'lgan davlatlar oldidan 'the' qo'yiladi."
      }
    ],
    "examples": [
      {
        "en": "The United Kingdom consists of four countries.",
        "uz": "Birlashgan Qirollik to'rtta mamlakatdan iborat."
      },
      {
        "en": "Cairo is on the River Nile.",
        "uz": "Qohira Nil daryosi bo'yida joylashgan."
      }
    ],
    "exercises": [
      {
        "id": "u72-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri geografik artiklni tanlang",
        "prompt": "Have you ever visited _____ United States of America?",
        "options": [
          "the",
          "a",
          "an",
          "-"
        ],
        "correctAnswer": "the",
        "explanationUz": "'United States' ko'plikdagi davlat nomi bo'lgani uchun 'the' talab qiladi.",
        "points": 15
      },
      {
        "id": "u72-ex2",
        "type": "fill_in_gap",
        "instruction": "Daryo oldidagi artiklni yozing",
        "prompt": "The Amudarya flows into _____ Aral Sea.",
        "correctAnswer": "the",
        "explanationUz": "Dengizlar va daryolar nomlari oldidan 'the' artikli qo'yiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 73,
    "title": "this / that / these / those",
    "category": "Pronouns",
    "cefrLevel": "A1",
    "summaryUz": "Ko'rsatish olmoshlari (this, that, these, those).",
    "grammarRules": [
      {
        "title": "this / that / these / those (Ko'rsatish Olmoshlari)",
        "formula": "this / these (yaqinda) | that / those (uzoqda) | this/that (birlik), these/those (ko'plik)",
        "positive": [
          "Do you like this picture here? (yaqin birlik).",
          "These flowers are for you (yaqin ko'plik)."
        ],
        "negative": [
          "Who is that woman over there? (uzoq birlik).",
          "Those shoes look uncomfortable (uzoq ko'plik)."
        ],
        "explanationUz": "'This' (bu) va 'these' (bular) so'zlovchiga yaqin narsalar uchun, 'that' (anavi) va 'those' (anavilar) esa uzoqdagi narsalar uchun ishlatiladi. Telefonda: 'Hello, this is David' (Men Davidman)."
      }
    ],
    "examples": [
      {
        "en": "This is a great party, isn't it?",
        "uz": "Bu ajoyib kecha, shunday emasmi?"
      },
      {
        "en": "Look at those birds high up in the sky!",
        "uz": "Osmonda baland uchayotgan anavi qushlarga qara!"
      }
    ],
    "exercises": [
      {
        "id": "u73-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri ko'rsatish olmoshini tanlang",
        "prompt": "Who are _____ people waiting outside the office over there?",
        "options": [
          "those",
          "these",
          "this",
          "that"
        ],
        "correctAnswer": "those",
        "explanationUz": "Uzoqdagi ('over there') ko'plikdagi odamlar ('people') uchun 'those' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u73-ex2",
        "type": "fill_in_gap",
        "instruction": "Telefon suhbati boshlanishini to'ldiring",
        "prompt": "'Hello, _____ is John. Can I speak to Mary, please?'",
        "correctAnswer": "this",
        "explanationUz": "Telefonda o'zini tanishtirish uchun 'this is...' deyiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 74,
    "title": "one / ones",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Otni takrorlamaslik uchun 'one / ones' ishlatilishi.",
    "grammarRules": [
      {
        "title": "one / ones (Otni Takrorlamaslik)",
        "formula": "a/the + adjective + one (birlik) | the/some + adjective + ones (ko'plik)",
        "positive": [
          "Which coat is yours? - The blue one.",
          "I don't like these shoes, but I like those ones."
        ],
        "negative": [
          "This cup is dirty. Can I have a clean one?",
          "Don't buy those apples. Buy the fresh ones."
        ],
        "explanationUz": "Avval eslatilgan otni yana takrorlamaslik uchun birlikda 'one', ko'plikda esa 'ones' so'zi ishlatiladi (The black one = qora poyafzal)."
      }
    ],
    "examples": [
      {
        "en": "Which car did you rent? - The small red one.",
        "uz": "Qaysi mashinani ijaraga oldingiz? - Kichik qizilini."
      },
      {
        "en": "My old glasses broke, so I bought some new ones.",
        "uz": "Eski ko'zoynaklarim sindi, shuning uchun yangilarini sotib oldim."
      }
    ],
    "exercises": [
      {
        "id": "u74-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri o'rnini bosuvchi so'zni tanlang",
        "prompt": "I don't like the red hotel, I prefer the modern _____.",
        "options": [
          "one",
          "ones",
          "it",
          "them"
        ],
        "correctAnswer": "one",
        "explanationUz": "Birlikdagi ot ('hotel') o'rniga 'one' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u74-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga one yoki ones yozing",
        "prompt": "These chocolates are delicious, but those _____ are too sweet.",
        "correctAnswer": "ones",
        "explanationUz": "Ko'plikdagi 'chocolates' o'rniga 'ones' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 75,
    "title": "some and any",
    "category": "Pronouns",
    "cefrLevel": "A1",
    "summaryUz": "Some va Any quantifierlari.",
    "grammarRules": [
      {
        "title": "some va any (Miqdor Ko'rsatkichlari)",
        "formula": "some = tasdiq gaplar va takliflar | any = inkor va umumiy so'roq gaplar",
        "positive": [
          "I bought some apples and some milk.",
          "Would you like some coffee? (Muloyim taklifda 'some'!)."
        ],
        "negative": [
          "I didn't buy any bananas.",
          "Have you got any luggage?"
        ],
        "explanationUz": "'Some' odatda tasdiq gaplarda hamda javobi 'ha' deb kutilgan taklif/iltimoslarda (Would you like some...?) qo'llaniladi. 'Any' esa inkor va umumiy so'roq gaplarda ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Can I have some water, please?",
        "uz": "Iltimos, ozgina suv bersangiz bo'ladimi?"
      },
      {
        "en": "There aren't any clean towels in the bathroom.",
        "uz": "Vannaxonada hech qanday toza sochiq yo'q."
      }
    ],
    "exercises": [
      {
        "id": "u75-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'zni tanlang (some / any)",
        "prompt": "We don't have _____ bread left, so we need to go to the bakery.",
        "options": [
          "any",
          "some",
          "no",
          "none"
        ],
        "correctAnswer": "any",
        "explanationUz": "Inkor gapda ('don't have') miqdor uchun 'any' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u75-ex2",
        "type": "fill_in_gap",
        "instruction": "Taklif so'rog'ini to'ldiring (some yoki any)",
        "prompt": "Would you like _____ more tea?",
        "correctAnswer": "some",
        "explanationUz": "Muloyim takliflarda 'some' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 76,
    "title": "not + any, no, none",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Inkor miqdor ko'rsatkichlari (no, none, not any).",
    "grammarRules": [
      {
        "title": "not + any, no va none (Inkor Miqdor)",
        "formula": "not ... any + noun = no + noun | none = otsiz yolg'iz javob",
        "positive": [
          "We haven't got any money. = We have no money.",
          "There are no shops open today."
        ],
        "negative": [
          "How much money do you have? - None.",
          "How many books did you read? - None of them."
        ],
        "explanationUz": "'No' so'zi inkor ma'nosini o'zi bergani uchun gapdagi fe'l tasdiqda bo'ladi (He has no friends). 'None' esa otsiz mustaqil ishlatiladi ('How much? - None')."
      }
    ],
    "examples": [
      {
        "en": "There were no empty seats on the bus.",
        "uz": "Avtobusda birorta ham bo'sh o'rindiq yo'q edi."
      },
      {
        "en": "Is there any milk left? - No, none.",
        "uz": "Sut qoldimi? - Yo'q, hech qancha qolmadi."
      }
    ],
    "exercises": [
      {
        "id": "u76-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri inkor so'zini tanlang",
        "prompt": "I called him, but there was _____ answer.",
        "options": [
          "no",
          "any",
          "none",
          "not"
        ],
        "correctAnswer": "no",
        "explanationUz": "Tasdiq fe'l bilan ot oldidan inkor qilish uchun 'no' ishlatiladi: no answer.",
        "points": 15
      },
      {
        "id": "u76-ex2",
        "type": "fill_in_gap",
        "instruction": "Qisqa otsiz inkor javobini yozing",
        "prompt": "'How many mistakes did you make?' - '_____! I got 100%.'",
        "correctAnswer": "None",
        "explanationUz": "Otsiz yolg'iz ishlatiladigan inkor so'z 'None' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 77,
    "title": "not + anybody / anyone / anything, nobody / no-one / nothing",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Gumon va inkor olmoshlari.",
    "grammarRules": [
      {
        "title": "somebody, nobody, anybody (Kishilik Noaniq Olmoshlari)",
        "formula": "somebody/someone (tasdiq) | anybody/anyone (inkor/so'roq) | nobody/no-one (inkor ma'no)",
        "positive": [
          "Somebody broke the window.",
          "Nobody called while you were out."
        ],
        "negative": [
          "I didn't speak to anybody at the party.",
          "Is anyone at home?"
        ],
        "explanationUz": "Odamlar uchun: somebody (kimdir), anybody (kimdir/hech kim), nobody (hech kim). 'Nobody' kelgan gapda ikkinchi inkor qo'yilmaydi (Nobody knows, Nobody didn't know EMAS!)."
      }
    ],
    "examples": [
      {
        "en": "There is somebody waiting at the door.",
        "uz": "Eshik oldida kimdir kutyapti."
      },
      {
        "en": "The house was completely dark. Nobody was there.",
        "uz": "Uy qop-qorong'u edi. U yerda hech kim yo'q edi."
      }
    ],
    "exercises": [
      {
        "id": "u77-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri olmoshni tanlang",
        "prompt": "The room was completely empty. There wasn't _____ there.",
        "options": [
          "anybody",
          "nobody",
          "somebody",
          "no one"
        ],
        "correctAnswer": "anybody",
        "explanationUz": "Inkorli fe'l ('wasn't') bilan birga 'anybody' keladi.",
        "points": 15
      },
      {
        "id": "u77-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga nobody yoki anybody yozing",
        "prompt": "The exam was very difficult, so _____ passed it.",
        "correctAnswer": "nobody",
        "explanationUz": "Fe'l tasdiqda ('passed') bo'lib, inkor ma'no berish uchun 'nobody' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 78,
    "title": "somebody / anything / nowhere etc.",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Noma'lum shaxs va joy olmoshlari.",
    "grammarRules": [
      {
        "title": "something, nothing, everywhere (Buyum va Joy Olmoshlari)",
        "formula": "thing: something, anything, nothing, everything | place: somewhere, anywhere, nowhere, everywhere",
        "positive": [
          "Lucy said something, but I didn't hear it.",
          "Let's go somewhere warm for our holiday."
        ],
        "negative": [
          "I didn't do anything yesterday.",
          "I looked for my keys everywhere, but they were nowhere to be found."
        ],
        "explanationUz": "Narsa-buyumlar uchun -thing (something, nothing), joylar uchun -where (somewhere, nowhere, everywhere) qo'shiladi. Bu so'zlardan so'ng sifat bevosita kelishi mumkin (something cold, somewhere quiet)."
      }
    ],
    "examples": [
      {
        "en": "Would you like something to eat?",
        "uz": "Yeyishga biror narsa xohlaysizmi?"
      },
      {
        "en": "There is nowhere to park around here.",
        "uz": "Bu atrofda mashina qo'yishga birorta ham joy yo'q."
      }
    ],
    "exercises": [
      {
        "id": "u78-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri birikmani tanlang",
        "prompt": "I'm looking for _____ quiet to study for my exams.",
        "options": [
          "somewhere",
          "anywhere",
          "nowhere",
          "everywhere"
        ],
        "correctAnswer": "somewhere",
        "explanationUz": "Tasdiq gapda tinch biror joyni izlash uchun 'somewhere quiet' to'g'ri.",
        "points": 15
      },
      {
        "id": "u78-ex2",
        "type": "fill_in_gap",
        "instruction": "Inkor olmoshini yozing (nothing yoki anything)",
        "prompt": "Don't worry! I have _____ to hide from you.",
        "correctAnswer": "nothing",
        "explanationUz": "'Yashiradigan hech narsam yo'q' tasdiq fe'l bilan 'nothing' orqali ifodalanadi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 79,
    "title": "every and all",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Every va All o'rtasidagi farqlar.",
    "grammarRules": [
      {
        "title": "every va all (Har Bir va Barcha)",
        "formula": "every + singular noun (every student) | all + plural noun (all students)",
        "positive": [
          "Every student in the class passed the exam.",
          "All the students were very excited."
        ],
        "negative": [
          "I get up at 7:00 every morning.",
          "He spent all his money on books."
        ],
        "explanationUz": "'Every' har bir a'zoni alohida nazarda tutadi va undan keyin birlikdagi ot hamda birlikdagi fe'l keladi (Every child needs love). 'All' esa guruhni yaxlit oladi va ko'plikdagi ot bilan ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Every room in the hotel has a balcony.",
        "uz": "Mehmonxonaning har bir xonasida balkon bor."
      },
      {
        "en": "All the trains were cancelled due to heavy snow.",
        "uz": "Qalin qor tufayli barcha poyezdlar bekor qilindi."
      }
    ],
    "exercises": [
      {
        "id": "u79-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri miqdor so'zini tanlang",
        "prompt": "_____ country has its own national flag and anthem.",
        "options": [
          "Every",
          "All",
          "Whole",
          "Each of"
        ],
        "correctAnswer": "Every",
        "explanationUz": "Birlikdagi ot ('country') oldidan 'Every' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u79-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga all yoki every yozing",
        "prompt": "She invited _____ her colleagues to the wedding.",
        "correctAnswer": "all",
        "explanationUz": "Ko'plikdagi 'colleagues' oldidan 'all' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 80,
    "title": "all, most, some, any, no / none",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Miqdor bildiruvchi umumiy so'zlar.",
    "grammarRules": [
      {
        "title": "all, most, some, any, no / none",
        "formula": "all/most/some + noun (umumiy) | all/most/some + OF + the/my/these + noun (aniq guruh)",
        "positive": [
          "Most children like sweets (Dunyodagi aksariyat bolalar).",
          "Most of the children in this school wear uniforms (Aniq ushbu maktabdagilar)."
        ],
        "negative": [
          "Some people enjoy cooking.",
          "None of my friends live abroad."
        ],
        "explanationUz": "Umumiy tushunchalarda 'most/all/some + ot' ishlatiladi. Agar aniq bir guruh nazarda tutilsa (the, my, these oldidan), 'of' qo'shiladi: most of the students, some of my friends."
      }
    ],
    "examples": [
      {
        "en": "All of us were surprised by the unexpected news.",
        "uz": "Kutilmagan yangilikdan hammamiz hayratda qoldik."
      },
      {
        "en": "Most cars use petrol or electricity.",
        "uz": "Ko'pchilik avtomobillar benzin yoki elektr energiyasidan foydalanadi."
      }
    ],
    "exercises": [
      {
        "id": "u80-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri konstruksiyani tanlang",
        "prompt": "_____ the students in our group passed the final test.",
        "options": [
          "All of",
          "All",
          "Every of",
          "Whole"
        ],
        "correctAnswer": "All of",
        "explanationUz": "'The students' aniq guruhi oldidan 'All of' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u80-ex2",
        "type": "fill_in_gap",
        "instruction": "Predlogni yozing (of yoki -)",
        "prompt": "Some _____ my friends study at the medical university.",
        "correctAnswer": "of",
        "explanationUz": "'My friends' oldidan 'some of' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 81,
    "title": "both, either, neither",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Ikki narsaga nisbatan both, either, neither qo'llanilishi.",
    "grammarRules": [
      {
        "title": "both, either va neither (Ikki Narsa yoki Shaxs)",
        "formula": "both (= ikkalasi ham) | either (= ikkisidan biri) | neither (= ikkalasi ham emas)",
        "positive": [
          "Both of my parents are teachers.",
          "You can take either bus - the 14 or the 28 (ikkisi ham boradi)."
        ],
        "negative": [
          "Neither of the restaurants was open (ikkalasi ham yopiq edi).",
          "Neither restaurant is expensive."
        ],
        "explanationUz": "'Both' ikkita narsaning ikkalasini ham, 'either' ikkisidan birini (ixtiyoriy birini), 'neither' esa ikkalasini ham inkor qilish uchun ishlatiladi. 'Neither' o'zi inkor bo'lgani uchun fe'l tasdiqda keladi."
      }
    ],
    "examples": [
      {
        "en": "Both Ann and Tom passed their driving tests.",
        "uz": "Ann ham, Tom ham haydovchilik imtihonidan o'tdi."
      },
      {
        "en": "Do you want tea or coffee? - Either, I don't mind.",
        "uz": "Choy xohlaysizmi yoki kofe? - Farqi yo'q, ixtiyoriy birini."
      }
    ],
    "exercises": [
      {
        "id": "u81-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "I tried two coats on, but _____ of them fitted me.",
        "options": [
          "neither",
          "either",
          "both",
          "all"
        ],
        "correctAnswer": "neither",
        "explanationUz": "Ikkala palto ham to'g'ri kelmagani (inkor) uchun 'neither of them' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u81-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga both, either yoki neither yozing",
        "prompt": "There are two roads to the city, and _____ are very busy.",
        "correctAnswer": "both",
        "explanationUz": "Ikkala yo'l ham tirband bo'lgani uchun 'both' to'g'ri bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 82,
    "title": "a lot, much, many",
    "category": "Pronouns",
    "cefrLevel": "A1",
    "summaryUz": "Ko'p miqdorni ifodalash (a lot, much, many).",
    "grammarRules": [
      {
        "title": "a lot, much va many (Ko'p Miqdor)",
        "formula": "much + uncountable (inkor/so'roq) | many + plural countable | a lot of + ikkalasi bilan ham (tasdiq)",
        "positive": [
          "We bought a lot of food and a lot of apples (tasdiq gaplarda).",
          "There are many interesting books in the library."
        ],
        "negative": [
          "We haven't got much time. We must hurry.",
          "Did you take many photos on your holiday?"
        ],
        "explanationUz": "'Much' sanalmaydigan otlar bilan (inkor va so'roqda), 'many' sanaladigan ko'plik otlar bilan ishlatiladi. 'A lot of' (ko'p) esa tasdiq gaplarda ikkala turdagi otlar bilan ham keng qo'llaniladi."
      }
    ],
    "examples": [
      {
        "en": "How much money do you need?",
        "uz": "Sizga qancha pul kerak?"
      },
      {
        "en": "How many languages can you speak?",
        "uz": "Nechta tilda gaplasha olasiz?"
      }
    ],
    "exercises": [
      {
        "id": "u82-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'zni tanlang (much / many / a lot)",
        "prompt": "We don't have _____ time left before the train departs.",
        "options": [
          "much",
          "many",
          "a lot",
          "few"
        ],
        "correctAnswer": "much",
        "explanationUz": "'Time' (vaqt) sanalmaydigan ot bo'lgani uchun inkor gapda 'much' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u82-ex2",
        "type": "fill_in_gap",
        "instruction": "So'roq iborasini to'ldiring (How much yoki How many)",
        "prompt": "_____ books did you borrow from the library?",
        "correctAnswer": "How many",
        "explanationUz": "'Books' sanaladigan ko'plik ot bo'lgani sababli 'How many' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 83,
    "title": "(a) little, (a) few",
    "category": "Pronouns",
    "cefrLevel": "A2",
    "summaryUz": "Oz miqdorni ifodalash ((a) little, (a) few).",
    "grammarRules": [
      {
        "title": "(a) little va (a) few (Kam Miqdor)",
        "formula": "a little / little + uncountable | a few / few + plural countable",
        "positive": [
          "I speak a little English (ozroq, yetarli - ijobiy ma'no).",
          "I have a few friends in Tashkent (bir nechta - ijobiy ma'no)."
        ],
        "negative": [
          "He has little money (juda kam, deyarli yo'q - salbiy ma'no).",
          "There were few people at the meeting (juda oz kishi)."
        ],
        "explanationUz": "'A little' va 'a few' oldida artikl 'a' bo'lsa 'ozroq, bir oz' (ijobiy) ma'nosini beradi. Artikl 'a' siz 'little' va 'few' esa 'juda oz, deyarli yo'q' (salbiy) ma'noni ifodalaydi."
      }
    ],
    "examples": [
      {
        "en": "Would you like a little milk in your tea? - Yes, please.",
        "uz": "Choyingizga ozroq sut solib beraymi? - Ha, iltimos."
      },
      {
        "en": "She's lucky. She has few problems in her life.",
        "uz": "U omadli. Uning hayotida muammolar juda kam."
      }
    ],
    "exercises": [
      {
        "id": "u83-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "I can't buy that coat because I have very _____ money.",
        "options": [
          "little",
          "a little",
          "few",
          "a few"
        ],
        "correctAnswer": "little",
        "explanationUz": "'Money' sanalmaydi va 'deyarli yo'q' (salbiy ma'no) bo'lgani uchun 'very little' to'g'ri.",
        "points": 15
      },
      {
        "id": "u83-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga few yoki little yozing",
        "prompt": "I'm going to stay in Bukhara for a _____ days.",
        "correctAnswer": "few",
        "explanationUz": "'Days' sanaladigan ko'plik ot bo'lgani uchun 'a few' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 84,
    "title": "old / nice / interesting etc. (adjectives)",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A1",
    "summaryUz": "Sifatlar va ularning gapdagi o'rni.",
    "grammarRules": [
      {
        "title": "old / nice / interesting (Sifatlar O'rni)",
        "formula": "Adjective + Noun (a nice day) | be / seem / look / feel + Adjective",
        "positive": [
          "He is a tall, handsome man.",
          "This soup tastes delicious."
        ],
        "negative": [
          "You look tired. You should sleep.",
          "The weather became windy in the afternoon."
        ],
        "explanationUz": "Ingliz tilida sifatlar otning oldidan keladi (a red apple). Shuningdek, be, look, feel, smell, taste, seem, become fe'llaridan so'ng bevosita sifat ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Do you feel happy in your new home?",
        "uz": "Yangi uyingizda o'zingizni baxtiyor his qilyapsizmi?"
      },
      {
        "en": "Those flowers smell wonderful.",
        "uz": "Anavi gullardan ajoyib hid kelyapti."
      }
    ],
    "exercises": [
      {
        "id": "u84-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'z tartibini tanlang",
        "prompt": "They live in a _____ in the countryside.",
        "options": [
          "beautiful old house",
          "house old beautiful",
          "old beautiful house",
          "beautiful house old"
        ],
        "correctAnswer": "beautiful old house",
        "explanationUz": "Fikr-mulohaza sifati (beautiful) yosh sifatidan (old) oldin keladi: beautiful old house.",
        "points": 15
      },
      {
        "id": "u84-ex2",
        "type": "fill_in_gap",
        "instruction": "Sifatni to'g'ri qo'ying (happy / happily)",
        "prompt": "The children looked very _____ when they opened their presents.",
        "correctAnswer": "happy",
        "explanationUz": "'Look' (tuyulmoq) bog'lovchi fe'lidan keyin sifat (happy) ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 85,
    "title": "quickly / badly / suddenly etc. (adverbs)",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Ravishlar va sifatdan ravish yasash (-ly).",
    "grammarRules": [
      {
        "title": "quickly / badly / suddenly (Ravishlar Yasalishi)",
        "formula": "Adjective + -ly = Adverb (quick -> quickly, careful -> carefully) | Irregular: fast, hard, well",
        "positive": [
          "He drove very carefully in the heavy snow.",
          "She speaks English fluently and accurately."
        ],
        "negative": [
          "Good (sifat) -> Well (ravish): She plays the piano well.",
          "Fast va hard o'zgarmaydi: He works hard. He runs fast."
        ],
        "explanationUz": "Ravishlar harakat qanday bajarilganini bildiradi va fe'lga bog'lanadi. Aksariyat ravishlar sifatga -ly qo'shish bilan yasaladi. Istisnolar: good -> well, fast -> fast, hard -> hard."
      }
    ],
    "examples": [
      {
        "en": "Our team played badly in the first half.",
        "uz": "Bizning jamoa birinchi bo'limda yomon o'ynadi."
      },
      {
        "en": "Please open the door quietly.",
        "uz": "Iltimos, eshikni sekin (ovoz chiqarmay) oching."
      }
    ],
    "exercises": [
      {
        "id": "u85-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri ravishni tanlang",
        "prompt": "He ran very _____ to catch the departing train.",
        "options": [
          "fast",
          "fastly",
          "quick",
          "good"
        ],
        "correctAnswer": "fast",
        "explanationUz": "'Fast' ravishi -ly qo'shimchasini olmaydi: he ran fast.",
        "points": 15
      },
      {
        "id": "u85-ex2",
        "type": "fill_in_gap",
        "instruction": "Sifatdan ravish yasab yozing (fluent)",
        "prompt": "Dilshod speaks English _____.",
        "correctAnswer": "fluently",
        "explanationUz": "'Fluent' sifatiga '-ly' qo'shilib 'fluently' ravishi yasaladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 86,
    "title": "old / older, expensive / more expensive",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Sifat va ravishlarning qiyosiy darajasi (Comparative).",
    "grammarRules": [
      {
        "title": "old / older, expensive / more expensive (Qiyosiy Sifatlar 1)",
        "formula": "1 bo'g'inli: adj + -er (cheaper, older) | 2+ bo'g'inli: more + adj (more expensive)",
        "positive": [
          "Rome is older than Madrid.",
          "Hotels are more expensive in summer than in winter."
        ],
        "negative": [
          "Good -> better | Bad -> worse | Far -> further.",
          "Heavy -> heavier (-y harfi -i ga o'zgaradi)."
        ],
        "explanationUz": "Bir bo'g'inli sifatlarga -er qo'shiladi (fast -> faster, cheap -> cheaper). Ikki va undan ortiq bo'g'inli sifatlar oldiga 'more' qo'yiladi (more modern, more comfortable). Noto'g'ri: good -> better, bad -> worse."
      }
    ],
    "examples": [
      {
        "en": "I feel much better today than yesterday.",
        "uz": "Bugun o'zimni kechagidan ancha yaxshi his qilyapman."
      },
      {
        "en": "Travelling by train is more comfortable than by bus.",
        "uz": "Poyezdda sayohat qilish avtobusdagidan ko'ra qulayroq."
      }
    ],
    "exercises": [
      {
        "id": "u86-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri qiyosiy shaklni tanlang",
        "prompt": "This laptop is much _____ than my previous one.",
        "options": [
          "faster",
          "more fast",
          "fastest",
          "fast"
        ],
        "correctAnswer": "faster",
        "explanationUz": "Bir bo'g'inli 'fast' sifatining qiyosiy darajasi 'faster' bo'ladi.",
        "points": 15
      },
      {
        "id": "u86-ex2",
        "type": "fill_in_gap",
        "instruction": "Sifatning qiyosiy darajasini yozing (bad)",
        "prompt": "The weather today is _____ than it was yesterday.",
        "correctAnswer": "worse",
        "explanationUz": "'Bad' ning qiyosiy darajasi 'worse' hisoblanadi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 87,
    "title": "older than ... more expensive than ...",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Than ko'rsatkichi bilan taqqoslash.",
    "grammarRules": [
      {
        "title": "older than ... more expensive than ... (Qiyosiy Daraja 2 - than)",
        "formula": "Comparative adjective + than (ko'ra / -dan)",
        "positive": [
          "Sarah is two years older than me.",
          "The museum was more interesting than I expected."
        ],
        "negative": [
          "Gas is less expensive than electricity.",
          "A bit older / much older (kuchaytiruvchilar)."
        ],
        "explanationUz": "Ikki narsa yoki shaxsni taqqoslashda 'than' (qaraganda, ko'ra) so'zi ishlatiladi (taller than, more expensive than). Sifat oldiga 'much' yoki 'a bit' qo'yib farq darajasini ko'rsatish mumkin."
      }
    ],
    "examples": [
      {
        "en": "It's much colder today than it was yesterday.",
        "uz": "Bugun havo kechagiga qaraganda ancha sovuq."
      },
      {
        "en": "Going by car is more convenient than taking the bus.",
        "uz": "Mashinada borish avtobusda borishdan ko'ra ancha qulay."
      }
    ],
    "exercises": [
      {
        "id": "u87-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri taqqoslash so'zini tanlang",
        "prompt": "My new apartment is much bigger _____ my old one.",
        "options": [
          "than",
          "then",
          "as",
          "that"
        ],
        "correctAnswer": "than",
        "explanationUz": "Qiyosiy darajadan keyin taqqoslash bog'lovchisi 'than' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u87-ex2",
        "type": "fill_in_gap",
        "instruction": "Kuchaytirgich so'zini yozing (much / many)",
        "prompt": "Travelling by air is _____ faster than going by train.",
        "correctAnswer": "much",
        "explanationUz": "Qiyosiy darajani kuchaytirish uchun 'much faster' deyiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 88,
    "title": "not as ... as",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Tenglik va tengsizlik darajasi (as ... as).",
    "grammarRules": [
      {
        "title": "not as ... as (Tenglik va Notenglik Qiyosi)",
        "formula": "as + Adjective + as (kabi bir xil) | not as + Adjective + as (-dek emas)",
        "positive": [
          "He is as tall as his father (otasidek baland bo'yli).",
          "You can eat as much as you like."
        ],
        "negative": [
          "Rome is not as old as Athens (= Athens is older).",
          "My car is not as fast as yours."
        ],
        "explanationUz": "'As ... as' ikki narsa yoki shaxsning tengligini ('u kabi'), 'not as ... as' esa biri ikkinchisichalik emasligini bildiradi. Sifat o'zgarishsiz asosiy shaklida qoladi."
      }
    ],
    "examples": [
      {
        "en": "I'm sorry I'm late. I ran as fast as I could.",
        "uz": "Kechikkanim uchun uzr. Qo'limdan kelgancha tez yugurdim."
      },
      {
        "en": "The second exam was not as difficult as the first one.",
        "uz": "Ikkinchi imtihon birinchisichalik qiyin emas edi."
      }
    ],
    "exercises": [
      {
        "id": "u88-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri konstruksiyani tanlang",
        "prompt": "Our hotel was not _____ expensive as we expected.",
        "options": [
          "as",
          "so much",
          "than",
          "more"
        ],
        "correctAnswer": "as",
        "explanationUz": "'Not as ... as' konstruksiyasida birinchi bog'lovchi 'as' bo'ladi.",
        "points": 15
      },
      {
        "id": "u88-ex2",
        "type": "fill_in_gap",
        "instruction": "Tenglik bog'lovchisini yozing",
        "prompt": "Jack is 22. Emma is 22. Jack is as old _____ Emma.",
        "correctAnswer": "as",
        "explanationUz": "Tenglikda 'as old as' shaklida yoziladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 89,
    "title": "the oldest, the most expensive",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Sifatlarning orttirma darajasi (Superlative).",
    "grammarRules": [
      {
        "title": "the oldest, the most expensive (Orttirma Daraja)",
        "formula": "the + adj + -est (the oldest) | the most + adj (the most expensive)",
        "positive": [
          "The blue whale is the largest animal in the world.",
          "This is the most expensive restaurant in Tashkent."
        ],
        "negative": [
          "Good -> the best | Bad -> the worst | Far -> the furthest.",
          "What is the happiest day of your life?"
        ],
        "explanationUz": "Orttirma daraja barcha narsalar ichida eng ustuni yoki eng ajralib turganini bildiradi va har doim 'the' aniq artikli bilan qo'llaniladi (the biggest, the most beautiful)."
      }
    ],
    "examples": [
      {
        "en": "Everest is the highest mountain in the world.",
        "uz": "Everest dunyodagi eng baland tog'dir."
      },
      {
        "en": "Yesterday was the hottest day of the year.",
        "uz": "Kecha yilning eng issiq kuni bo'ldi."
      }
    ],
    "exercises": [
      {
        "id": "u89-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri orttirma shaklini tanlang",
        "prompt": "That was _____ film I have ever seen in my life.",
        "options": [
          "the worst",
          "the baddest",
          "worse",
          "the most bad"
        ],
        "correctAnswer": "the worst",
        "explanationUz": "'Bad' sifatining orttirma darajasi 'the worst' hisoblanadi.",
        "points": 15
      },
      {
        "id": "u89-ex2",
        "type": "fill_in_gap",
        "instruction": "Sifatning orttirma darajasini yozing (good)",
        "prompt": "She is the _____ student in our class.",
        "correctAnswer": "best",
        "explanationUz": "'Good' ning orttirma darajasi 'best' (the best) bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 90,
    "title": "enough",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Etarli miqdor va darajani ifodalash (enough).",
    "grammarRules": [
      {
        "title": "enough (Yetarli Miqdor)",
        "formula": "Adjective + enough (tall enough) | enough + Noun (enough money)",
        "positive": [
          "He isn't tall enough to play basketball.",
          "We have enough money to buy this sofa."
        ],
        "negative": [
          "Is the water warm enough for swimming?",
          "There aren't enough chairs for everyone."
        ],
        "explanationUz": "'Enough' sifat va ravishlardan KEYIN keladi (warm enough, fast enough), ammo otlarning OLDIDA keladi (enough time, enough chairs)."
      }
    ],
    "examples": [
      {
        "en": "Did you have enough time to finish the exam?",
        "uz": "Imtihonni tugatish uchun yetarli vaqtingiz bo'ldimi?"
      },
      {
        "en": "She didn't speak loudly enough for everyone to hear.",
        "uz": "U hamma eshitishi uchun yetarlicha baland gapirmadi."
      }
    ],
    "exercises": [
      {
        "id": "u90-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'z tartibini tanlang",
        "prompt": "I can't drink this tea. It isn't _____.",
        "options": [
          "sweet enough",
          "enough sweet",
          "sweetly enough",
          "enough sweetly"
        ],
        "correctAnswer": "sweet enough",
        "explanationUz": "Sifat 'enough' so'zidan oldin keladi: sweet enough.",
        "points": 15
      },
      {
        "id": "u90-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga enough so'zini qo'ying",
        "prompt": "We don't have _____ fuel to reach the next city.",
        "correctAnswer": "enough",
        "explanationUz": "Ot ('fuel') oldidan 'enough' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 91,
    "title": "too",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Meyordan ortiq darajani ifodalash (too).",
    "grammarRules": [
      {
        "title": "too (Haddan Tashqari)",
        "formula": "too + Adjective (too expensive) | too much + uncountable | too many + countable",
        "positive": [
          "This coat is too big for me.",
          "There were too many people on the bus."
        ],
        "negative": [
          "You drink too much coffee. It's bad for your health.",
          "The box is too heavy to carry."
        ],
        "explanationUz": "'Too' me'yoridan ortiq, keragidan ko'p (salbiy ma'noda) deganidir. Sifat oldidan 'too' (too hot), sanalmaydigan ot oldidan 'too much', ko'plik ot oldidan 'too many' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "The music is too loud. Can you turn it down?",
        "uz": "Musiqa juda baland. Pasaytira olasizmi?"
      },
      {
        "en": "We arrived too late to catch our train.",
        "uz": "Poyezdimizga chiqish uchun haddan tashqari kech yetib keldik."
      }
    ],
    "exercises": [
      {
        "id": "u91-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri variantni tanlang",
        "prompt": "There are _____ cars in the city centre nowadays.",
        "options": [
          "too many",
          "too much",
          "too",
          "enough"
        ],
        "correctAnswer": "too many",
        "explanationUz": "'Cars' sanaladigan ko'plik ot bo'lgani uchun 'too many' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u91-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga much yoki many yozing",
        "prompt": "Don't eat too _____ sugar!",
        "correctAnswer": "much",
        "explanationUz": "'Sugar' sanalmaydigan ot bo'lgani uchun 'too much' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 92,
    "title": "He speaks English very well (word order 1)",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Gapda to'ldiruvchi va o'rin-payt ravishlari so'z tartibi.",
    "grammarRules": [
      {
        "title": "He speaks English very well (So'z Tartibi 1 - Verb + Object)",
        "formula": "Subject + Verb + Object (fe'l va to'ldiruvchini ajratmang!) + Place + Time",
        "positive": [
          "Sue reads a book every evening (Sue reads every evening a book EMAS!).",
          "We visited the museum yesterday."
        ],
        "negative": [
          "Place + Time: We walked to the station yesterday morning.",
          "Did you enjoy the party last night?"
        ],
        "explanationUz": "Ingliz tilida fe'l va uning bevosita to'ldiruvchisi (object) orasi uzilmaydi (I like Italian food very much). O'rin-joy har doim vaqtdan oldin keladi (Place before Time: in the park yesterday)."
      }
    ],
    "examples": [
      {
        "en": "I lost my umbrella on the bus yesterday.",
        "uz": "Kecha avtobusda zontigimni yo'qotib qo'ydim."
      },
      {
        "en": "She plays tennis every Saturday morning.",
        "uz": "U har shanba kuni ertalab tennis o'ynaydi."
      }
    ],
    "exercises": [
      {
        "id": "u92-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'z tartibini tanlang",
        "prompt": "Choose the correctly ordered sentence:",
        "options": [
          "I bought a new phone yesterday.",
          "I bought yesterday a new phone.",
          "Yesterday a new phone bought I.",
          "A new phone I bought yesterday."
        ],
        "correctAnswer": "I bought a new phone yesterday.",
        "explanationUz": "Fe'l (bought) va to'ldiruvchi (a new phone) ajratilmaydi va vaqt (yesterday) oxirida keladi.",
        "points": 15
      },
      {
        "id": "u92-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyni to'ldiring: Joy birinchi keladimi yoki vaqt?",
        "prompt": "In English, Place comes _____ Time.",
        "correctAnswer": "before",
        "explanationUz": "Ingliz tilida o'rin-joy (Place) har doim vaqtdan (Time) oldin keladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 93,
    "title": "always / usually / often etc. (word order 2)",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A1",
    "summaryUz": "Chastota ravishlarining gapdagi o'rni.",
    "grammarRules": [
      {
        "title": "always / usually / often (So'z Tartibi 2 - Chastota Ravishlari)",
        "formula": "Main verb oldidan | be fe'lidan keyin | yordamchi va asosiy fe'l o'rtasida",
        "positive": [
          "I always drink tea in the morning (asosiy fe'ldan oldin).",
          "Sarah is never late for work (be fe'lidan keyin)."
        ],
        "negative": [
          "I have never been to London (yordamchi va asosiy fe'l o'rtasida).",
          "Do you usually go to bed late?"
        ],
        "explanationUz": "Chastota ravishlari (always, usually, often, sometimes, rarely, never): 1) asosiy fe'ldan oldin turadi; 2) am/is/are/was/were dan keyin keladi; 3) ikkita fe'l bo'lsa ularning o'rtasida turadi."
      }
    ],
    "examples": [
      {
        "en": "Tom always forgets my birthday.",
        "uz": "Tom har doim tug'ilgan kunimni unutadi."
      },
      {
        "en": "We are usually at home on Sunday evenings.",
        "uz": "Yakshanba oqshomlari biz odatda uyda bo'lamiz."
      }
    ],
    "exercises": [
      {
        "id": "u93-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri joylashuvni tanlang",
        "prompt": "Where should 'always' be placed in this sentence?",
        "options": [
          "He always wears a smart suit.",
          "He wears always a smart suit.",
          "Always he wears a smart suit.",
          "He wears a smart suit always."
        ],
        "correctAnswer": "He always wears a smart suit.",
        "explanationUz": "Chastota ravishi asosiy fe'ldan oldin keladi: He always wears.",
        "points": 15
      },
      {
        "id": "u93-ex2",
        "type": "fill_in_gap",
        "instruction": "To'g'ri joylashuvni yozing: 'often' fe'l 'is' dan oldin keladimi yoki keyin?",
        "prompt": "Frequency adverbs come _____ the verb 'to be'.",
        "correctAnswer": "after",
        "explanationUz": "'To be' fe'lidan keyin keladi: He is often late.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 94,
    "title": "still, yet, already",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Still, yet va already ravishlarining farqlari.",
    "grammarRules": [
      {
        "title": "still, yet va already (Vaqt Ravishlari)",
        "formula": "still (hali ham davom etyapti) | already (kutilgandan oldin) | yet (inkor va so'roq oxirida)",
        "positive": [
          "It's 10 o'clock and he is still in bed.",
          "I have already finished my homework."
        ],
        "negative": [
          "Has the train arrived yet? - Not yet.",
          "I haven't told anyone yet."
        ],
        "explanationUz": "'Still' harakat kutilganidan uzoq davom etayotganini (hali ham), 'already' harakat kutilgandan erta bitganini (allaqachon), 'yet' esa harakat hali sodir bo'lmaganini yoki so'ralayotganini bildiradi."
      }
    ],
    "examples": [
      {
        "en": "Do you still live in the same house?",
        "uz": "Hali ham o'sha uyda yashaysizmi?"
      },
      {
        "en": "I've already paid the internet bill.",
        "uz": "Internet to'lovini allaqachon to'lab qo'ydim."
      }
    ],
    "exercises": [
      {
        "id": "u94-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri ravishni tanlang",
        "prompt": "Are you _____ waiting for the bus? It's been 40 minutes!",
        "options": [
          "still",
          "yet",
          "already",
          "ago"
        ],
        "correctAnswer": "still",
        "explanationUz": "Harakat hali ham davom etayotganini ko'rsatish uchun 'still' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u94-ex2",
        "type": "fill_in_gap",
        "instruction": "Inkor gap oxiriga mos so'zni yozing",
        "prompt": "I haven't received their reply _____.",
        "correctAnswer": "yet",
        "explanationUz": "Inkor gap oxirida 'yet' qo'yiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 95,
    "title": "Give me that book! Give it to me!",
    "category": "Adjectives & Adverbs",
    "cefrLevel": "A2",
    "summaryUz": "Ikki to'ldiruvchili fe'llar va so'z tartibi.",
    "grammarRules": [
      {
        "title": "Give me that book! Give it to me! (Ikkita To'ldiruvchili Fe'llar)",
        "formula": "Verb + Person + Thing (give me the book) OR Verb + Thing + TO/FOR + Person (give the book to me)",
        "positive": [
          "I gave Sarah a present. = I gave a present to Sarah.",
          "Can you buy me an ice cream? = Can you buy an ice cream for me?"
        ],
        "negative": [
          "Give it to me! (it/them olmosh bo'lsa 'give me it' EMAS!).",
          "Send it to him."
        ],
        "explanationUz": "Give, send, lend, pass, show, buy, get kabi fe'llar ikkita to'ldiruvchi oladi: shaxs va buyum. Agar buyum 'it' yoki 'them' olmoshi bo'lsa, har doim 'give it to me' shaklida 'to' bilan aytiladi."
      }
    ],
    "examples": [
      {
        "en": "I lent my bicycle to a friend.",
        "uz": "Velosipedimni do'stimga berib turdim."
      },
      {
        "en": "Show me your new phone.",
        "uz": "Yangi telefoningizni menga ko'rsating."
      }
    ],
    "exercises": [
      {
        "id": "u95-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri iborani tanlang",
        "prompt": "Here is your key. _____.",
        "options": [
          "Give it to me",
          "Give me it",
          "Give to me it",
          "Give it me"
        ],
        "correctAnswer": "Give it to me",
        "explanationUz": "'It' olmoshi bilan 'give it to me' strukturasi qo'llaniladi.",
        "points": 15
      },
      {
        "id": "u95-ex2",
        "type": "fill_in_gap",
        "instruction": "Predlogni yozing (to yoki for)",
        "prompt": "Could you pass the salt _____ me, please?",
        "correctAnswer": "to",
        "explanationUz": "'Pass something to someone' iborasida 'to' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 96,
    "title": "at 8 o'clock, on Monday, in April",
    "category": "Prepositions",
    "cefrLevel": "A1",
    "summaryUz": "Vaqt predloglari (at, on, in).",
    "grammarRules": [
      {
        "title": "at 8 o'clock, on Monday, in April (Vaqt Predloglari)",
        "formula": "at + soat va bayramlar | on + kunlar va sanalar | in + oylar, fasllar, yillar, asrlar",
        "positive": [
          "at 5 o'clock, at night, at the weekend, at Christmas.",
          "on Monday, on 15 March, on my birthday, on Friday morning."
        ],
        "negative": [
          "in April, in summer, in 2024, in the 21st century, in the morning.",
          "this, last, next, every bilan predlog ISHLATILMAYDI (next Monday)."
        ],
        "explanationUz": "Aniq soat va daqiqalar uchun 'at', hafta kunlari va to'liq sanalar uchun 'on', oylar, yillar va kun qismlari (in the morning) uchun 'in' ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "The meeting starts at 9:30 am on Wednesday.",
        "uz": "Yig'ilish chorshanba kuni soat 9:30 da boshlanadi."
      },
      {
        "en": "I was born in October in 2005.",
        "uz": "Men 2005-yilning oktyabr oyida tug'ilganman."
      }
    ],
    "exercises": [
      {
        "id": "u96-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri vaqt predlogini tanlang",
        "prompt": "Our English class starts _____ 9 o'clock every morning.",
        "options": [
          "at",
          "on",
          "in",
          "to"
        ],
        "correctAnswer": "at",
        "explanationUz": "Aniq vaqt soatlari oldidan 'at' ishlatiladi: at 9 o'clock.",
        "points": 15
      },
      {
        "id": "u96-ex2",
        "type": "fill_in_gap",
        "instruction": "Hafta kuni oldidagi predlogni yozing",
        "prompt": "We usually play football together _____ Saturday afternoons.",
        "correctAnswer": "on",
        "explanationUz": "Hafta kunlari oldidan 'on' predlogi ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 97,
    "title": "from ... to, until, since, for",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Vaqt oralig'i predloglari.",
    "grammarRules": [
      {
        "title": "from ... to, until, since, for (Vaqt Davomiyligi)",
        "formula": "from ... to (dan ... gacha) | until (gacha) | since (+ boshlanish nuqtasi) | for (+ davomiylik)",
        "positive": [
          "We lived in Japan from 2015 to 2020.",
          "Wait here until I come back."
        ],
        "negative": [
          "I have been waiting since 10 o'clock.",
          "We've known each other for many years."
        ],
        "explanationUz": "'From ... to' boshlanish va tugash chegarasini, 'until' harakat qachongacha davom etishini, 'since' harakat boshlangan aniq vaqtni, 'for' esa butun davomiylik miqdorini bildiradi."
      }
    ],
    "examples": [
      {
        "en": "The shop is open from Monday to Saturday.",
        "uz": "Do'kon dushanbadan shanbagacha ochiq."
      },
      {
        "en": "I stayed in bed until noon.",
        "uz": "Tushgacha o'rinda yotdim."
      }
    ],
    "exercises": [
      {
        "id": "u97-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri predlogni tanlang",
        "prompt": "Please don't leave _____ the teacher gives permission.",
        "options": [
          "until",
          "since",
          "during",
          "for"
        ],
        "correctAnswer": "until",
        "explanationUz": "'O'qituvchi ruxsat berguncha kutmoq' ma'nosida 'until' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u97-ex2",
        "type": "fill_in_gap",
        "instruction": "Davomiylik predlogini yozing (for yoki since)",
        "prompt": "I'm going to travel around Europe _____ three weeks.",
        "correctAnswer": "for",
        "explanationUz": "Vaqt oralig'i (3 hafta) uchun 'for' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 98,
    "title": "before, after, during, while",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Ketma-ketlik va vaqt predloglari.",
    "grammarRules": [
      {
        "title": "before, after, during, while (Vaqt Bog'lovchi va Predloglari)",
        "formula": "during + Noun (during the film) | while + Subject + Verb (while we were watching)",
        "positive": [
          "Always wash your hands before eating.",
          "I fell asleep during the movie (during + ot)."
        ],
        "negative": [
          "I fell asleep while I was watching the movie (while + gap).",
          "We can go for a walk after lunch."
        ],
        "explanationUz": "'During' predlog bo'lib, o'zidan keyin ot talab qiladi (during the night). 'While' esa bog'lovchi bo'lib, o'zidan keyin to'liq gap (ega + fe'l) oladi."
      }
    ],
    "examples": [
      {
        "en": "It started to rain while we were walking home.",
        "uz": "Uyga piyoda ketayotganimizda yomg'ir yog'a boshladi."
      },
      {
        "en": "Nobody was allowed to leave during the exam.",
        "uz": "Imtihon davomida hech kimga chiqib ketishga ruxsat berilmadi."
      }
    ],
    "exercises": [
      {
        "id": "u98-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri so'zni tanlang (during / while)",
        "prompt": "I met a lot of interesting people _____ my stay in London.",
        "options": [
          "during",
          "while",
          "for",
          "since"
        ],
        "correctAnswer": "during",
        "explanationUz": "'My stay' ot birikmasi bo'lgani uchun 'during' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u98-ex2",
        "type": "fill_in_gap",
        "instruction": "Bo'sh joyga while yoki during yozing",
        "prompt": "The phone rang _____ I was cooking dinner.",
        "correctAnswer": "while",
        "explanationUz": "'I was cooking' to'liq gap bo'lgani sababli 'while' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 99,
    "title": "in, at, on (places 1)",
    "category": "Prepositions",
    "cefrLevel": "A1",
    "summaryUz": "O'rin-joy predloglari (in, at, on).",
    "grammarRules": [
      {
        "title": "in, at, on (O'rin-joy Predloglari 1)",
        "formula": "in (ichida - room, box, garden) | at (nuqta/joyda - bus stop, door) | on (ustida - table, wall, floor)",
        "positive": [
          "There is someone at the door.",
          "There are some beautiful pictures on the wall.",
          "The children are playing in the garden."
        ],
        "negative": [
          "Turn left at the traffic lights.",
          "Don't sit on the grass, it's wet."
        ],
        "explanationUz": "'In' bino, xona yoki o'ralgan hudud ichida; 'at' aniq manzil yoki uchrashuv nuqtasida; 'on' esa tekis sirt (stol, devor, pol) ustida ekanlikni bildiradi."
      }
    ],
    "examples": [
      {
        "en": "Write your name at the top of the page.",
        "uz": "Ismingizni sahifaning yuqori qismiga yozing."
      },
      {
        "en": "There is a cat sleeping on the sofa.",
        "uz": "Divan ustida mushuk uxlab yotibdi."
      }
    ],
    "exercises": [
      {
        "id": "u99-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri joy predlogini tanlang",
        "prompt": "I waited for you _____ the bus stop for twenty minutes.",
        "options": [
          "at",
          "on",
          "in",
          "to"
        ],
        "correctAnswer": "at",
        "explanationUz": "Avtobus bekati aniq nuqta bo'lgani uchun 'at the bus stop' deyiladi.",
        "points": 15
      },
      {
        "id": "u99-ex2",
        "type": "fill_in_gap",
        "instruction": "Devordagi narsa uchun predlogni yozing",
        "prompt": "There was a large clock _____ the wall.",
        "correctAnswer": "on",
        "explanationUz": "Devor sirtida joylashgan narsa uchun 'on the wall' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 100,
    "title": "in, at, on (places 2)",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Bino va manzillar bilan in, at, on qo'llanilishi.",
    "grammarRules": [
      {
        "title": "in, at, on (O'rin-joy Predloglari 2 - Maxsus Iboralar)",
        "formula": "in bed, in hospital, in the sky | at home, at work, at school, at university | on a bus/train/plane",
        "positive": [
          "I was tired, so I stayed in bed all morning.",
          "My brother is studying economics at university."
        ],
        "negative": [
          "I saw Sarah on the bus yesterday morning (jamoat transportida 'on').",
          "He was in a taxi / in a car (kichik shaxsiy transportda 'in')."
        ],
        "explanationUz": "Jamoat transportida (avtobus, poyezd, samolyot) 'on' ishlatiladi (on a bus). Yengil mashina va taksida esa 'in' ishlatiladi (in a car). Shuningdek: at home, at work, at school."
      }
    ],
    "examples": [
      {
        "en": "There were too many passengers on the train.",
        "uz": "Poyezdda yo'lovchilar juda ko'p edi."
      },
      {
        "en": "Is your mother at home?",
        "uz": "Onangiz uydami?"
      }
    ],
    "exercises": [
      {
        "id": "u100-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri transport predlogini tanlang",
        "prompt": "We travelled across France _____ a very comfortable high-speed train.",
        "options": [
          "on",
          "in",
          "at",
          "by the"
        ],
        "correctAnswer": "on",
        "explanationUz": "Poyezdda harakatlanish uchun 'on a train' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u100-ex2",
        "type": "fill_in_gap",
        "instruction": "Predlogni yozing",
        "prompt": "My father is _____ work right now.",
        "correctAnswer": "at",
        "explanationUz": "'Ishda' ma'nosida 'at work' iborasi qo'llaniladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 101,
    "title": "to, in, at (places 3)",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Harakat yo'nalishi (to) va o'rin-joy (in/at).",
    "grammarRules": [
      {
        "title": "to, in, at (Harakat Yo'nalishi va Joylashuv)",
        "formula": "to (harakat: go to, come to, return to) VS in / at (joylashuv: live in, stay at)",
        "positive": [
          "We are going to Italy next summer (harakat yo'nalishi).",
          "We stayed at a very nice hotel in Rome (joylashuv)."
        ],
        "negative": [
          "Welcome to Uzbekistan!",
          "Arrive in Tashkent / arrive at the airport (arrive TO bo'lmaydi!)."
        ],
        "explanationUz": "'To' harakatning biror tomonga yo'nalganini bildiradi (go to London). 'In' va 'at' esa qayerdalikni ko'rsatadi. Muhim: 'arrive' fe'li bilan hech qachon 'to' ishlatilmaydi (arrive in a city / arrive at a building)."
      }
    ],
    "examples": [
      {
        "en": "What time did you arrive in Tashkent?",
        "uz": "Toshkentga soat nechada yetib keldingiz?"
      },
      {
        "en": "I walked to the station to catch the train.",
        "uz": "Poyezdga chiqish uchun vokzalga bordim."
      }
    ],
    "exercises": [
      {
        "id": "u101-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri predlogni tanlang",
        "prompt": "We arrived _____ the airport two hours before the flight.",
        "options": [
          "at",
          "to",
          "in",
          "on"
        ],
        "correctAnswer": "at",
        "explanationUz": "Aeroport binosiga yetib kelishda 'arrive at the airport' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u101-ex2",
        "type": "fill_in_gap",
        "instruction": "Yo'nalish predlogini yozing",
        "prompt": "Welcome _____ our school!",
        "correctAnswer": "to",
        "explanationUz": "'Xush kelibsiz' iborasida har doim 'Welcome to...' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 102,
    "title": "under, behind, opposite etc.",
    "category": "Prepositions",
    "cefrLevel": "A1",
    "summaryUz": "Fazoviy joylashuv predloglari (under, behind, in front of, opposite).",
    "grammarRules": [
      {
        "title": "under, behind, opposite etc. (Joylashuv Predloglari)",
        "formula": "under (ostida) | behind (orqasida) | in front of (oldida) | opposite (ro'parasida) | next to / beside (yonida) | between (o'rtasida)",
        "positive": [
          "The cat was sleeping under the table.",
          "Our hotel was opposite the main railway station."
        ],
        "negative": [
          "Don't stand in front of the TV!",
          "Samarkand is between Tashkent and Bukhara."
        ],
        "explanationUz": "Obyektlarning fazodagi o'zaro joylashuvini bildiradi: under (ostida), behind (orqasida), in front of (oldida), opposite (yuzma-yuz qarshisida), between (ikkita narsa o'rtasida), next to (yonida)."
      }
    ],
    "examples": [
      {
        "en": "There is a bank opposite the supermarket.",
        "uz": "Supermarket ro'parasida bank bor."
      },
      {
        "en": "Who is that standing behind you?",
        "uz": "Orqangizda turgan u kim?"
      }
    ],
    "exercises": [
      {
        "id": "u102-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri joy predlogini tanlang",
        "prompt": "The post office is _____ the cinema and the bank.",
        "options": [
          "between",
          "among",
          "opposite",
          "behind"
        ],
        "correctAnswer": "between",
        "explanationUz": "Ikkita obyekt orasida bo'lgani sababli 'between' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u102-ex2",
        "type": "fill_in_gap",
        "instruction": "'Oldida' iborasini to'ldiring",
        "prompt": "There is a lovely garden in _____ of the house.",
        "correctAnswer": "front",
        "explanationUz": "'In front of' (oldida) iborasida 'front' so'zi yoziladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 103,
    "title": "up, over, through etc.",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Harakat va yo'nalish predloglari.",
    "grammarRules": [
      {
        "title": "up, over, through etc. (Harakat Yo'nalishi Predloglari)",
        "formula": "up (yuqoriga) | down (pastga) | over (ustidan oshib) | through (ichidan teshib/o'tib) | along (bo'ylab) | across (kesib o'tib)",
        "positive": [
          "We walked up the hill to see the view.",
          "The train went through a long tunnel under the mountain."
        ],
        "negative": [
          "Be careful when you walk across the busy road.",
          "They drove along the river for several miles."
        ],
        "explanationUz": "Harakat yo'nalishi va yo'lini ifodalovchi predloglar: across (ko'chani kesib o'tmoq), through (o'rmon yoki tunnel ichidan o'tmoq), along (ko'cha bo'ylab yurmoq), over (to'siq ustidan oshib o'tmoq)."
      }
    ],
    "examples": [
      {
        "en": "The bird flew over the roof of the house.",
        "uz": "Qush uyning tomi ustidan uchib o'tdi."
      },
      {
        "en": "We walked along the beach at sunset.",
        "uz": "Quyosh botayotganda sohil bo'ylab sayr qildik."
      }
    ],
    "exercises": [
      {
        "id": "u103-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri harakat predlogini tanlang",
        "prompt": "The dog jumped _____ the fence into our garden.",
        "options": [
          "over",
          "through",
          "across",
          "under"
        ],
        "correctAnswer": "over",
        "explanationUz": "Devor yoki panjaraning ustidan sakrab o'tish 'over' orqali ifodalanadi.",
        "points": 15
      },
      {
        "id": "u103-ex2",
        "type": "fill_in_gap",
        "instruction": "Yo'nalish predlogini yozing",
        "prompt": "The train passed _____ a dark tunnel.",
        "correctAnswer": "through",
        "explanationUz": "Tunnel ichidan o'tish 'through a tunnel' bo'ladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 104,
    "title": "on, at, by, with, about",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Predloglarning birikmalarda qo'llanilishi (by car, on foot, with friends).",
    "grammarRules": [
      {
        "title": "on, at, by, with, about (Maxsus Qo'llanilishlar)",
        "formula": "by car / train (transport usuli) | on foot (piyoda) | with a knife (qurol/asbob) | about history (mavzu)",
        "positive": [
          "Did you come by car or on foot?",
          "This book is about ancient Central Asia."
        ],
        "negative": [
          "Cut the bread with a sharp knife.",
          "Send it by email / by post."
        ],
        "explanationUz": "Transport vositasi bilan bormoq: 'by car, by train, by plane' (artiklsiz!). Piyoda yurish esa 'on foot' bo'ladi. Qurol-yarog' va asbob-uskuna bilan harakat qilish 'with' (with a pen, with a key)."
      }
    ],
    "examples": [
      {
        "en": "I go to work on foot every morning.",
        "uz": "Men har kuni ertalab ishga piyoda boraman."
      },
      {
        "en": "We talked about our plans for the future.",
        "uz": "Kelajakdagi rejalarimiz haqida gaplashdik."
      }
    ],
    "exercises": [
      {
        "id": "u104-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri predlogni tanlang",
        "prompt": "He goes to school _____ foot because it's only five minutes away.",
        "options": [
          "on",
          "by",
          "with",
          "at"
        ],
        "correctAnswer": "on",
        "explanationUz": "'Piyoda' iborasi ingliz tilida 'on foot' hisoblanadi.",
        "points": 15
      },
      {
        "id": "u104-ex2",
        "type": "fill_in_gap",
        "instruction": "Asbob bilan harakat predlogini yozing",
        "prompt": "He opened the locked door _____ a spare key.",
        "correctAnswer": "with",
        "explanationUz": "Asbob yordamida harakat qilish 'with' predlogi bilan ifodalanadi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 105,
    "title": "afraid of ..., good at ... etc. (preposition + -ing)",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Sifat + predlog + Gerund birikmalari.",
    "grammarRules": [
      {
        "title": "afraid of ..., good at ... (Sifat + Predlog + -ing)",
        "formula": "Adjective + Preposition + Noun / Verb-ing",
        "positive": [
          "I'm afraid of dogs.",
          "She is very good at learning foreign languages."
        ],
        "negative": [
          "Are you interested in photography?",
          "He is fed up with doing the same routine every day."
        ],
        "explanationUz": "Ko'plab sifatlar o'zlarining doimiy predloglariga ega: afraid of (qo'rqmoq), good/bad at (usta/no'noq), interested in (qiziqmoq), tired of (charchamoq). Predlogdan keyin fe'l kelsa, har doim -ing oladi."
      }
    ],
    "examples": [
      {
        "en": "Are you afraid of flying?",
        "uz": "Samolyotda uchishdan qo'rqasizmi?"
      },
      {
        "en": "She is famous for her delicious cakes.",
        "uz": "U o'zining mazali piroglari bilan mashhur."
      }
    ],
    "exercises": [
      {
        "id": "u105-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri sifat predlogini tanlang",
        "prompt": "Farrukh is very good _____ playing chess.",
        "options": [
          "at",
          "in",
          "on",
          "for"
        ],
        "correctAnswer": "at",
        "explanationUz": "Biror faoliyatda usta bo'lish 'good at' orqali ifodalanadi.",
        "points": 15
      },
      {
        "id": "u105-ex2",
        "type": "fill_in_gap",
        "instruction": "Qiziqish predlogini yozing",
        "prompt": "Are you interested _____ studying abroad?",
        "correctAnswer": "in",
        "explanationUz": "'Interested in' birikmasi 'qiziqmoq' ma'nosini beradi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 106,
    "title": "listen to ..., look at ... etc. (verb + preposition)",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Fe'l + predlog birikmalari.",
    "grammarRules": [
      {
        "title": "listen to ..., look at ... (Fe'l + Predlog)",
        "formula": "look at, listen to, wait for, ask for, apologize to, belong to, think about/of",
        "positive": [
          "Look at that beautiful bird in the tree!",
          "I love listening to traditional Uzbek music."
        ],
        "negative": [
          "Who are you waiting for? - I'm waiting for John.",
          "Does this bag belong to you?"
        ],
        "explanationUz": "Ingliz tilidagi ko'plab fe'llar o'z predlogi bilan mustahkam bog'langan: listen to, look at, wait for, ask for, speak to, laugh at, think about."
      }
    ],
    "examples": [
      {
        "en": "Don't forget to write to your parents.",
        "uz": "Ota-onangizga xat yozishni unutmang."
      },
      {
        "en": "I'm looking for my glasses. Have you seen them?",
        "uz": "Ko'zoynagimni qidiryapman. Ularni ko'rdingizmi?"
      }
    ],
    "exercises": [
      {
        "id": "u106-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri predlogni tanlang",
        "prompt": "I've been waiting _____ you for more than thirty minutes!",
        "options": [
          "for",
          "to",
          "at",
          "after"
        ],
        "correctAnswer": "for",
        "explanationUz": "'Wait' fe'li kutish obyekti oldidan 'for' predlogini oladi: wait for you.",
        "points": 15
      },
      {
        "id": "u106-ex2",
        "type": "fill_in_gap",
        "instruction": "Fe'l predlogini to'ldiring",
        "prompt": "Please listen _____ me carefully.",
        "correctAnswer": "to",
        "explanationUz": "'Listen' fe'lidan keyin 'to' predlogi ishlatiladi: listen to me.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 107,
    "title": "go in, fall off, run away etc. (phrasal verbs 1)",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "Frazeologik fe'llar (Phrasal Verbs 1).",
    "grammarRules": [
      {
        "title": "go in, fall off, run away (Frazeologik Fe'llar 1 - Ajralmas)",
        "formula": "Verb + Particle (out, in, on, off, away, back)",
        "positive": [
          "Come in and sit down, please.",
          "The plane took off on time."
        ],
        "negative": [
          "He fell off his bicycle and hurt his knee.",
          "What time did you get back from London?"
        ],
        "explanationUz": "Frazeologik fe'llar (phrasal verbs) fe'l va undan keyin keluvchi predlog yoki ravishdan (in, out, off, up, down) iborat bo'lib, yangi ma'no hosil qiladi: get up (uyg'onmoq), take off (havoga ko'tarilmoq), wake up (uyg'onmoq)."
      }
    ],
    "examples": [
      {
        "en": "The car stopped and a man got out.",
        "uz": "Mashina to'xtadi va bir kishi undan tushdi."
      },
      {
        "en": "Don't run away! I want to talk to you.",
        "uz": "Qochib ketmang! Siz bilan gaplashmoqchiman."
      }
    ],
    "exercises": [
      {
        "id": "u107-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri frazeologik fe'lni tanlang",
        "prompt": "The plane _____ without any delays.",
        "options": [
          "took off",
          "took out",
          "took in",
          "took down"
        ],
        "correctAnswer": "took off",
        "explanationUz": "Samolyotning parvozga ko'tarilishi 'take off' (o'tgan zamonda took off) bo'ladi.",
        "points": 15
      },
      {
        "id": "u107-ex2",
        "type": "fill_in_gap",
        "instruction": "Frazeologik qo'shimchani yozing (up / out / back)",
        "prompt": "I usually wake _____ at 6:30 every morning.",
        "correctAnswer": "up",
        "explanationUz": "'Uyg'onmoq' frazeologik fe'li 'wake up' deb aytiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 108,
    "title": "put on your shoes / put your shoes on (phrasal verbs 2)",
    "category": "Prepositions",
    "cefrLevel": "A2",
    "summaryUz": "To'ldiruvchili frazeologik fe'llar.",
    "grammarRules": [
      {
        "title": "put on your shoes / put your shoes on (Frazeologik Fe'llar 2 - Ajraladigan)",
        "formula": "put on + noun OR put + noun + on | put IT on (olmosh o'rtaga kiradi!)",
        "positive": [
          "Put on your coat. = Put your coat on.",
          "Turn off the lights before leaving."
        ],
        "negative": [
          "It's cold. Put it on (put on it EMAS!).",
          "Here is your money. Put it away."
        ],
        "explanationUz": "To'ldiruvchi ot bo'lsa, uni fe'ldan keyin ham, fe'l bilan predlog o'rtasida ham qo'yish mumkin (turn off the TV / turn the TV off). Ammo to'ldiruvchi 'it' yoki 'them' olmoshi bo'lsa, u FAQAT o'rtada keladi (turn it off)."
      }
    ],
    "examples": [
      {
        "en": "Can you turn on the radio, please?",
        "uz": "Radiを図 yoqib yubora olasizmi?"
      },
      {
        "en": "Take off your wet jacket and hang it up.",
        "uz": "Ho'l kurtkangizni yeching va uni ilib qo'ying."
      }
    ],
    "exercises": [
      {
        "id": "u108-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri olmosh joylashuvini tanlang",
        "prompt": "It is very dark in here. Could you _____?",
        "options": [
          "turn on the light",
          "turn the light on",
          "turn it on",
          "All of these"
        ],
        "correctAnswer": "All of these",
        "explanationUz": "'Turn on the light', 'turn the light on' va 'turn it on' - barchasi grammatik to'g'ri.",
        "points": 15
      },
      {
        "id": "u108-ex2",
        "type": "fill_in_gap",
        "instruction": "Olmoshni to'g'ri joyga qo'yib yozing: 'turn off' va 'it'",
        "prompt": "The TV is too loud. Please turn _____ off.",
        "correctAnswer": "it",
        "explanationUz": "Olmosh 'it' fe'l va predlog o'rtasida bo'ladi: turn it off.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 109,
    "title": "and, but, or, so, because",
    "category": "Clauses",
    "cefrLevel": "A1",
    "summaryUz": "Bog'lovchilar: and, but, or, so, because.",
    "grammarRules": [
      {
        "title": "and, but, or, so, because (Bog'lovchilar)",
        "formula": "and (va) | but (lekin) | or (yoki) | so (shuning uchun - natija) | because (chunki - sabab)",
        "positive": [
          "It was very cold, so I put on a thick coat (natija).",
          "I put on a thick coat because it was very cold (sabab)."
        ],
        "negative": [
          "He is rich, but he isn't very happy.",
          "Do you want tea or coffee?"
        ],
        "explanationUz": "'So' harakatning oqibati va natijasini (shuning uchun), 'because' esa harakatning sababini (chunki) ifodalaydi. 'But' qarama-qarshilikni, 'or' tanlovni ko'rsatadi."
      }
    ],
    "examples": [
      {
        "en": "I was tired, so I went to bed early.",
        "uz": "Charchagan edim, shuning uchun erta uxlashga yotdim."
      },
      {
        "en": "We went to the beach because the weather was sunny.",
        "uz": "Havo quyoshli bo'lgani sababli sohilga bordik."
      }
    ],
    "exercises": [
      {
        "id": "u109-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri bog'lovchini tanlang (so / because)",
        "prompt": "I didn't have an umbrella, _____ I got completely wet in the rain.",
        "options": [
          "so",
          "because",
          "but",
          "or"
        ],
        "correctAnswer": "so",
        "explanationUz": "Natijani ifodalash uchun 'so' (shuning uchun) ishlatiladi.",
        "points": 15
      },
      {
        "id": "u109-ex2",
        "type": "fill_in_gap",
        "instruction": "Sabab bog'lovchisini yozing (so yoki because)",
        "prompt": "She went to the doctor _____ she was feeling unwell.",
        "correctAnswer": "because",
        "explanationUz": "Sababni ifodalash uchun 'because' (chunki) ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 110,
    "title": "When ...",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Vaqt ergash gapli bog'lovchilar (When I arrive ...).",
    "grammarRules": [
      {
        "title": "When ... (Vaqt Ergash Gaplarda Hozirgi Zamon Kelajak Uchun)",
        "formula": "When / As soon as / Before / After + Present Simple, will + Verb",
        "positive": [
          "When I get home tonight, I'll have a shower (When I will get EMAS!).",
          "We'll call you as soon as we arrive in London."
        ],
        "negative": [
          "Before you leave, don't forget to turn off the heating.",
          "I'll wait here until you come back."
        ],
        "explanationUz": "Kelajakka tegishli vaqt ergash gaplarida 'when, as soon as, before, after, until' dan keyin KELASI ZAMON (will) ISHLATILMAYDI, uning o'rniga Present Simple qo'yiladi."
      }
    ],
    "examples": [
      {
        "en": "When I see Tom tomorrow, I will invite him.",
        "uz": "Ertaga Tomni ko'rganimda, uni taklif qilaman."
      },
      {
        "en": "What will you do when you finish university?",
        "uz": "Universitetni bitirganingizda nima qilasiz?"
      }
    ],
    "exercises": [
      {
        "id": "u110-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri fe'l zamonini tanlang",
        "prompt": "I will send you a text message as soon as I _____ at the airport.",
        "options": [
          "arrive",
          "will arrive",
          "arrived",
          "am arriving"
        ],
        "correctAnswer": "arrive",
        "explanationUz": "'As soon as' dan keyin kelasi zamon o'rniga Present Simple 'arrive' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u110-ex2",
        "type": "fill_in_gap",
        "instruction": "Qavsdagi fe'lni to'g'ri zamonga qo'ying (come)",
        "prompt": "I'll wait here until you _____ back.",
        "correctAnswer": "come",
        "explanationUz": "'Until' dan keyin kelasi ma'noda Present Simple (come) ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 111,
    "title": "If we go ..., If you see ... etc.",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Shart ergash gaplar 1-turi (First Conditional).",
    "grammarRules": [
      {
        "title": "If we go ..., If you see ... (1-Tur Shart Ergash Gaplar)",
        "formula": "If + Present Simple, will / won't + Verb (Real Kelajak Shart)",
        "positive": [
          "If it rains tomorrow, we will stay at home (If it will rain EMAS!).",
          "If you study hard, you will pass your exams."
        ],
        "negative": [
          "If you don't hurry, you'll miss the train.",
          "What will you do if you don't find your keys?"
        ],
        "explanationUz": "First Conditional (1-tur shart) kelajakda amalga oshishi mumkin bo'lgan real shart va vaziyatlar uchun qo'llaniladi. If qismida hech qachon 'will' qo'yilmaydi, Present Simple ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "If I have enough time tomorrow, I'll visit you.",
        "uz": "Ertaga yetarli vaqtim bo'lsa, sizni ko'rgani boraman."
      },
      {
        "en": "If it's sunny this weekend, we'll have a picnic.",
        "uz": "Dam olish kunlari havo quyoshli bo'lsa, piknik qilamiz."
      }
    ],
    "exercises": [
      {
        "id": "u111-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri shart shaklini tanlang",
        "prompt": "If you _____ free this evening, we can go to the cinema.",
        "options": [
          "are",
          "will be",
          "were",
          "would be"
        ],
        "correctAnswer": "are",
        "explanationUz": "If qismida kelasi zamon uchun Present Simple 'are' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u111-ex2",
        "type": "fill_in_gap",
        "instruction": "Natija qismidagi kelasi zamon modalini yozing",
        "prompt": "If you don't eat now, you _____ be hungry later.",
        "correctAnswer": "will",
        "explanationUz": "First conditional natija qismida 'will' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 112,
    "title": "If I had ..., If we went ... etc.",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Shart ergash gaplar 2-turi (Second Conditional).",
    "grammarRules": [
      {
        "title": "If I had ..., If we went ... (2-Tur Noreal Shart Ergash Gaplar)",
        "formula": "If + Past Simple, would ('d) + Verb (Hozirgi Noreal/Xayoliy Shart)",
        "positive": [
          "If I had a million dollars, I would buy a big house.",
          "If I were you, I would accept the job offer (maslahat berishda: If I were you)."
        ],
        "negative": [
          "If I knew his address, I would write to him (ammo bilmayman).",
          "What would you do if you won the lottery?"
        ],
        "explanationUz": "Second Conditional (2-tur shart) ayni damdagi xayoliy, noreal yoki imkonsiz holatlar uchun ishlatiladi. If qismida Past Simple, natija qismida 'would + Verb' qo'yiladi."
      }
    ],
    "examples": [
      {
        "en": "If I had more free time, I would learn Spanish.",
        "uz": "Bo'sh vaqtim ko'proq bo'lganida edi, ispan tilini o'rgangan bo'lardim."
      },
      {
        "en": "I wouldn't buy that car if I were you.",
        "uz": "Sizning o'rningizda bo'lganimda u mashinani sotib olmagan bo'lardim."
      }
    ],
    "exercises": [
      {
        "id": "u112-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri Second Conditional shaklini tanlang",
        "prompt": "If I _____ his phone number, I would call him right now.",
        "options": [
          "knew",
          "know",
          "will know",
          "would know"
        ],
        "correctAnswer": "knew",
        "explanationUz": "Second conditional if qismida Past Simple 'knew' ishlatiladi.",
        "points": 15
      },
      {
        "id": "u112-ex2",
        "type": "fill_in_gap",
        "instruction": "Maslahat berish iborasini to'ldiring (was yoki were)",
        "prompt": "If I _____ you, I would see a doctor immediately.",
        "correctAnswer": "were",
        "explanationUz": "'Sizning o'rningizda bo'lganimda' rasmiy qoidaga ko'ra 'If I were you' deb aytiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 113,
    "title": "a person who ..., a thing that / which ... (relative clauses 1)",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Ega va predmetga nisbatan tayinlovchi ergash gaplar (who / which / that).",
    "grammarRules": [
      {
        "title": "a person who ..., a thing that / which ... (Aniqlik Ergash Gaplar 1)",
        "formula": "who (odamlar uchun) | which / that (narsalar va hayvonlar uchun)",
        "positive": [
          "A thief is a person who steals things.",
          "An airplane is a machine that flies."
        ],
        "negative": [
          "I met a woman who can speak six languages.",
          "Where are the keys that were on the kitchen table?"
        ],
        "explanationUz": "Who odamlar haqida ma'lumot beruvchi ergash gaplarda (the boy who lives next door), which yoki that esa jonsiz narsalar va hayvonlar haqida (the book which I bought) ishlatiladi."
      }
    ],
    "examples": [
      {
        "en": "Do you know the girl who is talking to David?",
        "uz": "David bilan gaplashayotgan qizni taniysizmi?"
      },
      {
        "en": "We stayed at a hotel which had a swimming pool.",
        "uz": "Biz suzish havzasi bor bo'lgan mehmonxonada yashadik."
      }
    ],
    "exercises": [
      {
        "id": "u113-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri nisbiy olmoshni tanlang",
        "prompt": "I like people _____ are honest and hard-working.",
        "options": [
          "who",
          "which",
          "whose",
          "where"
        ],
        "correctAnswer": "who",
        "explanationUz": "Odamlar ('people') uchun 'who' nisbiy olmoshi ishlatiladi.",
        "points": 15
      },
      {
        "id": "u113-ex2",
        "type": "fill_in_gap",
        "instruction": "Narsalar uchun nisbiy olmoshni yozing (which yoki who)",
        "prompt": "A dictionary is a book _____ gives definitions of words.",
        "correctAnswer": "which",
        "explanationUz": "Jonsiz narsa ('a book') uchun 'which' ishlatiladi.",
        "points": 15
      }
    ]
  },
  {
    "unitNumber": 114,
    "title": "the people we met, the hotel you stayed at (relative clauses 2)",
    "category": "Clauses",
    "cefrLevel": "A2",
    "summaryUz": "Nisbiy olmoshlar tushib qoladigan ergash gaplar.",
    "grammarRules": [
      {
        "title": "the people we met, the hotel you stayed at (Nisbiy Olmoshlarni Tushirib Qoldirish)",
        "formula": "Ot + (who / which / that tushib qoladi) + Ega + Fe'l (to'ldiruvchi vazifasida)",
        "positive": [
          "The man (who) I wanted to see was away on holiday.",
          "Did you find the keys (that) you lost?"
        ],
        "negative": [
          "The hotel we stayed at was excellent (predlog oxirida qoladi).",
          "Who was that girl you were talking to?"
        ],
        "explanationUz": "Agar who, which yoki that nisbiy olmoshi ergash gapning to'ldiruvchisi bo'lsa (ya'ni undan keyin yangi ega va fe'l kelsa), uni tushirib qoldirish mumkin va bu jonli ingliz tilida juda tabiiy hisoblanadi."
      }
    ],
    "examples": [
      {
        "en": "The movie we watched yesterday was really exciting.",
        "uz": "Kecha biz tomosha qilgan kino juda qiziqarli edi."
      },
      {
        "en": "Is that the book you were looking for?",
        "uz": "Siz qidirayotgan kitob shu-mi?"
      }
    ],
    "exercises": [
      {
        "id": "u114-ex1",
        "type": "multiple_choice",
        "instruction": "To'g'ri tabiiy jumlani tanlang",
        "prompt": "Choose the most natural everyday English sentence:",
        "options": [
          "The people we met on holiday were very friendly.",
          "The people which we met on holiday were very friendly.",
          "The people whom we met them on holiday were very friendly.",
          "The people where we met on holiday were very friendly."
        ],
        "correctAnswer": "The people we met on holiday were very friendly.",
        "explanationUz": "To'ldiruvchi holatida olmosh tushib qolgan 'The people we met' eng tabiiy shakldir.",
        "points": 15
      },
      {
        "id": "u114-ex2",
        "type": "fill_in_gap",
        "instruction": "Jumla oxiridagi predlogni yozing",
        "prompt": "That is the house I used to live _____.",
        "correctAnswer": "in",
        "explanationUz": "'Live in a house' iborasi bo'lgani sababli oxirida 'in' predlogi qoladi.",
        "points": 15
      }
    ]
  }
];
