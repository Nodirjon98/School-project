# -*- coding: utf-8 -*-
"""
Authentic Murphy Essential Grammar Content: Units 41 to 80
"""

UNITS_41_TO_80 = {
    41: {
        "ruleTitle": "too / either va so am I / neither do I (Fikrga Qo'shilish)",
        "formula": "Tasdiq: too / So + aux + S | Inkor: either / Neither + aux + S",
        "positive": [
          "I'm happy. - I'm happy too. / So am I.",
          "I like coffee. - I do too. / So do I."
        ],
        "negative": [
          "I'm not hungry. - I'm not either. / Neither am I.",
          "I don't have a car. - Neither do I."
        ],
        "explanationUz": "Suhbatdoshning tasdiq fikriga qo'shilish uchun 'too' yoki 'So + yordamchi fe'l + ega' ishlatiladi. Inkor fikriga qo'shilish uchun esa 'either' yoki 'Neither + yordamchi fe'l + ega' qo'llaniladi.",
        "examples": [
          {"en": "I can play chess. - So can I.", "uz": "Men shaxmat o'ynay olaman. - Men ham."},
          {"en": "I haven't got time. - Neither have I.", "uz": "Mening vaqtim yo'q. - Mening ham."},
          {"en": "I passed the exam. - So did Mark.", "uz": "Men imtihondan o'tdim. - Mark ham."}
        ],
        "exercises": [
          {
            "id": "u41-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri qo'shilish iborasini tanlang",
            "prompt": "'I am very tired.' - '_____.'",
            "options": ["So am I", "So do I", "Neither am I", "I am so"],
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
    42: {
        "ruleTitle": "isn't, haven't, don't (Ingliz Tilida Inkor Shakllari)",
        "formula": "Auxiliary verb + not (n't) + Main Verb",
        "positive": [
          "She is working. -> She isn't working.",
          "I have seen it. -> I haven't seen it."
        ],
        "negative": [
          "They know the answer. -> They don't know the answer.",
          "He went to London. -> He didn't go to London."
        ],
        "explanationUz": "Ingliz tilida inkor yasash uchun yordamchi fe'lga 'not' (qisqartmasi n't) qo'shiladi. Oddiy zamonlarda esa do/does/did yordamchi fe'llari kiritiladi.",
        "examples": [
          {"en": "We haven't got any bread left.", "uz": "Bizda non qolmabdi."},
          {"en": "Don't touch that! It's very hot.", "uz": "Unga tegmang! U juda issiq."}
        ],
        "exercises": [
          {
            "id": "u42-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri inkor shaklini tanlang",
            "prompt": "George _____ drink coffee in the evening.",
            "options": ["doesn't", "don't", "isn't", "not"],
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
    43: {
        "ruleTitle": "is it ... ? have you ... ? (So'roq Gaplarda So'z Tartibi)",
        "formula": "Question word + Auxiliary Verb + Subject + Main Verb?",
        "positive": [
          "Are you watching TV? -> Yes, I am.",
          "Where does your brother work?"
        ],
        "negative": [
          "Why were you late this morning?",
          "How long have they been married?"
        ],
        "explanationUz": "Ingliz tili so'roq gaplarida yordamchi fe'l har doim egadan oldinga o'tadi (inversiya). Agar maxsus so'roq so'zi (Why, Where, What) bo'lsa, u eng birinchi turadi.",
        "examples": [
          {"en": "Has the postman come yet?", "uz": "Pochtachi keldimi?"},
          {"en": "Why didn't you phone me yesterday?", "uz": "Kecha nega menga qo'ng'iroq qilmadingiz?"}
        ],
        "exercises": [
          {
            "id": "u43-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri so'z tartibini tanlang",
            "prompt": "Where _____ on holiday last year?",
            "options": ["did you go", "you did go", "went you", "you went"],
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
    44: {
        "ruleTitle": "Who saw you? vs Who did you see? (Ega va To'ldiruvchi Savollari)",
        "formula": "Ega so'rog'i: Who/What + Verb(s) | To'ldiruvchi: Who/What + do/did + S + Verb?",
        "positive": [
          "Somebody saw you. -> Who saw you? (Who = Subject, did ishlatilmaydi!).",
          "You saw somebody. -> Who did you see? (Who = Object, did kerak!)."
        ],
        "negative": [
          "What happened? (Nima sodir bo'ldi? - Ega so'rog'i).",
          "What did you do? (Nima qildingiz? - To'ldiruvchi so'rog'i)."
        ],
        "explanationUz": "Agar Who yoki What gapning egasi haqida so'rasa, yordamchi fe'l (do/does/did) ishlatilmaydi va fe'l xuddi darak gapdagidek tuslanadi. Agar to'ldiruvchi so'ralsa, do/does/did shart.",
        "examples": [
          {"en": "Who broke this vase? - Emma broke it.", "uz": "Bu vazani kim sindirdi? - Emma sindirdi."},
          {"en": "Who did Emma meet at the cafe? - She met John.", "uz": "Emma kafeda kimni uchratdi? - Jonni uchratdi."}
        ],
        "exercises": [
          {
            "id": "u44-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri so'roq shaklini tanlang",
            "prompt": "_____ happened to your hand? Did you cut it?",
            "options": ["What", "What did", "Who did", "Which did"],
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
    45: {
        "ruleTitle": "Who is she talking to? (Predlogli Savollar va 'What is it like?')",
        "formula": "Question word + aux + Subject + Verb + Preposition?",
        "positive": [
          "Who is she talking to? (Predlog gap oxirida).",
          "Where do you come from?"
        ],
        "negative": [
          "What is your new apartment like? = U qanaqa? (Ta'rif so'rash).",
          "What was the weather like yesterday?"
        ],
        "explanationUz": "Ingliz tilida so'roq gaplarda predloglar (to, from, with, about, like) odatda gapning eng oxirida keladi. 'What is ... like?' biror narsa yoki kishining qandayligini/ta'rifini so'rash uchun ishlatiladi.",
        "examples": [
          {"en": "What is your new teacher like? - She's very kind and patient.", "uz": "Yangi o'qituvchingiz qanaqa? - U juda mehribon va sabrli."},
          {"en": "What are you looking for? - My sunglasses.", "uz": "Nimani qidiryapsiz? - Quyosh ko'zoynagimni."}
        ],
        "exercises": [
          {
            "id": "u45-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "'_____ is your new house like?' - 'It's very modern and spacious.'",
            "options": ["What", "How", "Which", "Where"],
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
    46: {
        "ruleTitle": "What ... ? Which ... ? How ... ? (So'roq So'zlari Farqi)",
        "formula": "Which (cheklangan tanlov) | What (cheksiz tanlov) | How (usul/holat)",
        "positive": [
          "Which pen do you want - the blue one or the black one? (cheklangan 2-3 ta).",
          "What is your favourite colour? (cheksiz tanlov)."
        ],
        "negative": [
          "How tall are you? / How far is the station?",
          "How often do you go swimming?"
        ],
        "explanationUz": "'Which' cheklangan sonli variantlar ichidan tanlashda (Which one?), 'What' esa umumiy va cheklanmagan holatlarda ishlatiladi. 'How' sifatlar va ravishlar bilan qo'shilib o'lchov, yosh, narx va masofani so'raydi.",
        "examples": [
          {"en": "Which way is the city centre - left or right?", "uz": "Shahar markazi qaysi tomonda - chapdami yoki o'ngda?"},
          {"en": "How long does the movie last?", "uz": "Film qancha vaqt davom etadi?"}
        ],
        "exercises": [
          {
            "id": "u46-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri so'roq so'zini tanlang",
            "prompt": "_____ train are you taking - the 10:15 or the 11:30?",
            "options": ["Which", "What", "How", "Whose"],
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
    47: {
        "ruleTitle": "How long does it take ... ? (Vaqt Sarflanishini So'rash)",
        "formula": "How long does it take (you) to do ... ? | It takes (me) 20 minutes to ...",
        "positive": [
          "It takes 20 minutes to walk to the station.",
          "It took me two hours to do my homework yesterday."
        ],
        "negative": [
          "How long does it take by plane from Tashkent to Moscow?",
          "It won't take long to fix your bicycle."
        ],
        "explanationUz": "Biror harakat uchun qancha vaqt ketishini aytishda 'It takes/took/will take (someone) time to do' strukturasi ishlatiladi. So'roqda: 'How long does it take...?'",
        "examples": [
          {"en": "How long did it take you to learn to drive?", "uz": "Mashina haydashni o'rganishingizga qancha vaqt ketdi?"},
          {"en": "It takes an hour to fly from Tashkent to Samarkand.", "uz": "Toshkentdan Samarqandga samolyotda uchish 1 soat vaqt oladi."}
        ],
        "exercises": [
          {
            "id": "u47-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri fe'l shaklini tanlang",
            "prompt": "It _____ me two hours to finish the report yesterday.",
            "options": ["took", "takes", "taken", "taking"],
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
    48: {
        "ruleTitle": "Do you know where ... ? (Bilvosita Savollar)",
        "formula": "Do you know where / what / when + Subject + Verb? (darak so'z tartibi!)",
        "positive": [
          "Where is the post office? -> Do you know where the post office is?",
          "What time does the film start? -> Can you tell me what time the film starts?"
        ],
        "negative": [
          "I don't know where she lives.",
          "I don't know if (whether) they are coming."
        ],
        "explanationUz": "Boshqa gap tarkibiga kirgan bilvosita savollarda so'z tartibi darak gapdagidek bo'ladi (yordamchi fe'l egadan oldinga o'tmaydi va do/does tushib qoladi).",
        "examples": [
          {"en": "Do you know where Jack works?", "uz": "Jek qayerda ishlashini bilasizmi?"},
          {"en": "Can you tell me what time the train leaves?", "uz": "Poyezd soat nechada ketishini ayta olasizmi?"}
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
    49: {
        "ruleTitle": "She said that ... He told me that ... (O'zlashtirma Gap)",
        "formula": "say (to someone) | tell someone (to siz!) + bir pog'ona o'tgan zamonga surilish",
        "positive": [
          "Direct: 'I am tired' -> Reported: He said that he was tired.",
          "Direct: 'I've lost my key' -> Reported: She told me that she had lost her key."
        ],
        "negative": [
          "He said that he didn't like his new job.",
          "She told me not to wait for her."
        ],
        "explanationUz": "Birovning gapini boshqaga yetkazganda 'say' (aytdi) yoki 'tell someone' (kimdirga aytdi) ishlatiladi. 'Tell' dan keyin 'to' ishlatilmaydi (told me). Fe'llar odatda o'tmishga suriladi (am -> was, have -> had).",
        "examples": [
          {"en": "Sarah said that she was going to buy a new car.", "uz": "Sara yangi mashina sotib olmoqchiligini aytdi."},
          {"en": "He told me that he didn't feel well.", "uz": "U menga o'zini yaxshi his qilmayotganini aytdi."}
        ],
        "exercises": [
          {
            "id": "u49-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri fe'lni tanlang (said / told)",
            "prompt": "Anna _____ me that she was leaving for Madrid the next day.",
            "options": ["told", "said", "spoke", "talked"],
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
    50: {
        "ruleTitle": "work / working, go / going, do / doing (Fe'l Shakllari Umumiy Qoidasi)",
        "formula": "Modal + bare infinitive (can go) | to + infinitive (want to go) | -ing (enjoy going)",
        "positive": [
          "I can speak English fluently (modal fe'llardan keyin).",
          "I want to learn Spanish (infinitive bilan)."
        ],
        "negative": [
          "I enjoy reading books in the evening (gerund -ing bilan).",
          "Let's go home now."
        ],
        "explanationUz": "Ingliz tilida ikkinchi fe'l 3 xil ko'rinishda kelishi mumkin: to-infinitive (want to do), bare infinitive (can do, must do) yoki gerund (enjoy doing, finish doing).",
        "examples": [
          {"en": "You must listen carefully to the instructions.", "uz": "Ko'rsatmalarni diqqat bilan eshitishingiz shart."},
          {"en": "She decided to study medicine.", "uz": "U tibbiyotni o'rganishga qaror qildi."}
        ],
        "exercises": [
          {
            "id": "u50-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri fe'l shaklini tanlang",
            "prompt": "You shouldn't _____ so fast in rainy weather.",
            "options": ["drive", "to drive", "driving", "drove"],
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
    51: {
        "ruleTitle": "to ... (I want to do) va -ing (I enjoy doing)",
        "formula": "want / decide / hope + to do VS enjoy / finish / stop + doing",
        "positive": [
          "I decided to sell my old car (decide to do).",
          "Have you finished cleaning your room? (finish doing)."
        ],
        "negative": [
          "I don't mind waiting a few minutes.",
          "She refused to answer his question."
        ],
        "explanationUz": "Ba'zi fe'llardan keyin to-infinitive keladi: want, hope, decide, plan, promise, agree, refuse, offer. Boshqa fe'llardan keyin esa -ing keladi: enjoy, mind, finish, suggest, avoid, stop.",
        "examples": [
          {"en": "It began raining (yoki to rain).", "uz": "Yomg'ir yog'a boshladi."},
          {"en": "Do you mind closing the window?", "uz": "Derazani yopib yubora olmaysizmi?"}
        ],
        "exercises": [
          {
            "id": "u51-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri shaklni tanlang",
            "prompt": "We decided _____ to the cinema tonight.",
            "options": ["to go", "going", "go", "went"],
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
    52: {
        "ruleTitle": "I want you to ... I told you to ... (Murakkab To'ldiruvchi)",
        "formula": "Verb (want / ask / tell / advise) + Person (you, him, her) + to do",
        "positive": [
          "I want you to be happy.",
          "The doctor told me to rest for a few days."
        ],
        "negative": [
          "I asked him not to be late.",
          "My parents advised me to study harder."
        ],
        "explanationUz": "Boshqa birovdan biror ish qilishini istaganda yoki buyurganda 'Verb + shaxs + to-infinitive' strukturasi ishlatiladi. 'Make' va 'let' fe'llaridan keyin esa 'to' tushib qoladi (make me laugh, let me go).",
        "examples": [
          {"en": "What do you want me to do?", "uz": "Mendan nima qilishimni istaysiz?"},
          {"en": "The film was sad. It made me cry.", "uz": "Film g'amgin edi. U meni yig'latdi."}
        ],
        "exercises": [
          {
            "id": "u52-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri strukturani tanlang",
            "prompt": "The teacher told us _____ quiet during the test.",
            "options": ["to be", "be", "being", "that be"],
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
    53: {
        "ruleTitle": "I went to the shop to ... (Maqsad Infinitivi)",
        "formula": "Action + to + Verb (maqsad: uchun)",
        "positive": [
          "I went to the supermarket to buy some food.",
          "He turned on the TV to watch the news."
        ],
        "negative": [
          "I'm learning English to get a better job.",
          "I went to the bank for some money (ot bilan 'for' ishlatiladi!)."
        ],
        "explanationUz": "Harakatning maqsadini (nima uchun qilinganini) ifodalash uchun fe'l oldidan 'to' qo'yiladi (to buy, to see). Agar ot kelsa 'for' ishlatiladi (for bread, for an interview).",
        "examples": [
          {"en": "Why did you go out? - To post a letter.", "uz": "Nega ko'chaga chiqdingiz? - Xat jo'natish uchun."},
          {"en": "We shouted to warn everybody of the danger.", "uz": "Biz barchani xavfdan ogohlantirish uchun baqirdik."}
        ],
        "exercises": [
          {
            "id": "u53-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "She went to university _____ computer science.",
            "options": ["to study", "for study", "for to study", "studying"],
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
    54: {
        "ruleTitle": "go to ..., go on ..., go for ..., go -ing",
        "formula": "go to + place | go on + holiday/trip | go for + a walk | go + sporting -ing",
        "positive": [
          "I go to work / school / bed / the cinema.",
          "We went on holiday to Egypt last year."
        ],
        "negative": [
          "Let's go for a walk in the park.",
          "Do you often go swimming / skiing / shopping?"
        ],
        "explanationUz": "'Go' fe'li turli predloglar bilan maxsus iboralar yasaydi: go to (joyga borish), go on (ta'tilga/safarga chiqish), go for a walk/swim/drive (sayrga chiqish), go -ing (sport/dam olish faoliyatlari: shopping, swimming).",
        "examples": [
          {"en": "Richard went on a business trip to Germany.", "uz": "Richard Germaniyaga xizmat safariga bordi."},
          {"en": "Would you like to go for a coffee?", "uz": "Kofe ichgani borishni xohlaysizmi?"}
        ],
        "exercises": [
          {
            "id": "u54-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri birikmani tanlang",
            "prompt": "On Saturdays, my mother usually goes _____ with her friend.",
            "options": ["shopping", "to shopping", "for shopping", "shop"],
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
    55: {
        "ruleTitle": "get (Turli Ma'nolari: Olmoq, Yetib Bormoq, Bo'lmoq)",
        "formula": "get + noun (receive/buy) | get + adjective (become) | get to (arrive)",
        "positive": [
          "I got an email from my manager this morning (receive).",
          "It's getting cold. Put on your jacket (become)."
        ],
        "negative": [
          "What time did you get to London? (arrive at/reach).",
          "Get in / get out of a car | Get on / get off a bus/train."
        ],
        "explanationUz": "'Get' ingliz tilida eng ko'p qo'llaniladigan fe'llardan biri bo'lib: 1) sotib olmoq yoki olmoq (get a job), 2) holat o'zgarishi (get dark, get tired), 3) manzilga yetib bormoq (get home, get to work) ma'nolarini beradi.",
        "examples": [
          {"en": "Where did you get that stylish jacket?", "uz": "U bashang kurtkani qayerdan oldingiz?"},
          {"en": "If you don't eat, you'll get hungry.", "uz": "Agar ovqatlanmasangiz, qorningiz ochadi."}
        ],
        "exercises": [
          {
            "id": "u55-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri transport frazasini tanlang",
            "prompt": "The bus arrived and we _____ it.",
            "options": ["got on", "got in", "got to", "got into"],
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
    56: {
        "ruleTitle": "do va make Farqlari",
        "formula": "do (faoliyat, vazifa, ish) VS make (yaratish, ishlab chiqarish, tayyorlash)",
        "positive": [
          "Do: do homework, do housework, do exercises, do your best, do business.",
          "Make: make coffee, make a mistake, make a phone call, make noise, make money."
        ],
        "negative": [
          "What are you doing this evening?",
          "Don't make so much noise! The baby is sleeping."
        ],
        "explanationUz": "'Make' nimanidir noldan yasash, ishlab chiqarish yoki natija yaratishda ishlatiladi (make a cake). 'Do' esa umumiy faoliyatlar, yumushlar va majburiyatlar uchun qo'llaniladi (do the dishes).",
        "examples": [
          {"en": "I need to make an appointment with the doctor.", "uz": "Shifokor bilan qabul vaqtini belgilashim (uchrashuv tayinlashim) kerak."},
          {"en": "Did you do all your homework?", "uz": "Hamma uy vazifalaringizni qildingizmi?"}
        ],
        "exercises": [
          {
            "id": "u56-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri fe'lni tanlang (do / make)",
            "prompt": "I'm sorry, I made a terrible _____ in my calculations.",
            "options": ["mistake", "homework", "favour", "job"],
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
    57: {
        "ruleTitle": "have (have breakfast, have a shower, have a rest)",
        "formula": "have + food/drink/action (doimiy ega bo'lish emas, faoliyat!)",
        "positive": [
          "I have breakfast at 7:30 every morning.",
          "We're having a party next Saturday."
        ],
        "negative": [
          "Did you have a good holiday?",
          "I'm going to have a shower before dinner."
        ],
        "explanationUz": "'Have' ovqatlanish, dam olish va faoliyatlar bilan kelganda 'have got' ishlatilmaydi va Present Continuous da tuslanishi mumkin (I am having lunch right now). Savol va inkorda do/did ishlatiladi.",
        "examples": [
          {"en": "Have a good time in Paris!", "uz": "Parijda vaqtingiz maroqli o'tsin!"},
          {"en": "Can I have a look at your photos?", "uz": "Rasmlaringizga bir qarasam bo'ladimi?"}
        ],
        "exercises": [
          {
            "id": "u57-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri zamon shaklini tanlang",
            "prompt": "Excuse me, I can't talk right now. I _____ lunch.",
            "options": ["am having", "have got", "had got", "having"],
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
    58: {
        "ruleTitle": "I / me, he / him, they / them (Ega va To'ldiruvchi Kishilik Olmoshlari)",
        "formula": "Subject: I, he, she, it, we, they | Object: me, him, her, it, us, them",
        "positive": [
          "I know Tom, but he doesn't know me.",
          "We invited them, but they couldn't come."
        ],
        "negative": [
          "Where is Sarah? I need to speak to her.",
          "This letter isn't for you, it's for us."
        ],
        "explanationUz": "Gapning egasi (harakatni bajaruvchi) sifatida Subject olmoshlar (I, he, she...), fe'ldan yoki predlogdan keyin esa to'ldiruvchi sifatida Object olmoshlar (me, him, her, us, them) ishlatiladi.",
        "examples": [
          {"en": "Give that book to me, please.", "uz": "Iltimos, u kitobni menga bering."},
          {"en": "Do you like them? - Yes, they are very friendly.", "uz": "Ular sizga yoqadimi? - Ha, ular juda samimiy."}
        ],
        "exercises": [
          {
            "id": "u58-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri to'ldiruvchi olmoshini tanlang",
            "prompt": "I don't know that man. Do you know _____?",
            "options": ["him", "he", "his", "himself"],
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
    59: {
        "ruleTitle": "my / his / their etc. (Egalik Sifatlari)",
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
        "explanationUz": "Egalik sifatlari har doim otdan oldin keladi va buyum yoki shaxsning kimga tegishli ekanini bildiradi (my car, his shoes, their house).",
        "examples": [
          {"en": "Mary lives in Rome with her husband.", "uz": "Meri Rimda o'z eri bilan yashaydi."},
          {"en": "Our flat is on the third floor.", "uz": "Bizning xonadonimiz uchinchi qavatda."}
        ],
        "exercises": [
          {
            "id": "u59-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri egalik sifatini tanlang",
            "prompt": "Mr. and Mrs. Smith live with _____ three daughters.",
            "options": ["their", "them", "theirs", "they"],
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
    60: {
        "ruleTitle": "Whose is this? It's mine / yours / hers (Egalik Olmoshlari)",
        "formula": "mine, yours, his, hers, ours, theirs (otsiz yolg'iz ishlatiladi!)",
        "positive": [
          "This is my book. -> This book is mine.",
          "Is this camera yours or his?"
        ],
        "negative": [
          "Whose jacket is this? - It's hers.",
          "Our car is bigger than theirs."
        ],
        "explanationUz": "Egalik olmoshlari (mine, yours, hers...) otdan so'ng yoki yolg'iz keladi va o'zidan keyin ot talab qilmaydi. Egalikni so'rash uchun 'Whose...?' (Kimniki?) so'rog'i qo'llaniladi.",
        "examples": [
          {"en": "Whose bag is this? - It's mine.", "uz": "Bu kimning sumkasi? - Meniki."},
          {"en": "Their house is lovely, but ours is newer.", "uz": "Ularning uyi ajoyib, lekin bizniki yangiroq."}
        ],
        "exercises": [
          {
            "id": "u60-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri egalik olmoshini tanlang",
            "prompt": "Is that umbrella _____ or does it belong to Anna?",
            "options": ["yours", "your", "you", "yours'"],
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
    61: {
        "ruleTitle": "I / me / my / mine (Kishilik va Egalik Tizimi Taqqoslashi)",
        "formula": "I (ega) -> me (to'ldiruvchi) -> my (ot oldida) -> mine (otsiz)",
        "positive": [
          "I gave my phone to him, and he gave his to me.",
          "She asked me for my passport, but I couldn't find mine."
        ],
        "negative": [
          "He doesn't know his neighbours, and they don't know him.",
          "We invited our friends, and they invited theirs."
        ],
        "explanationUz": "Ushbu unit barcha olmosh turlarini yaxlit holda taqqoslaydi: ega olmoshi, to'ldiruvchi olmoshi, egalik sifati va mustaqil egalik olmoshi.",
        "examples": [
          {"en": "Do you know him? He is a good friend of mine.", "uz": "Uni taniysizmi? U mening yaxshi do'stlarimdan biri."},
          {"en": "This is her coat, and that one is mine.", "uz": "Bu uning paltosi, anavi esa meniki."}
        ],
        "exercises": [
          {
            "id": "u61-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "A friend of _____ is getting married this Saturday.",
            "options": ["mine", "my", "me", "I"],
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
    62: {
        "ruleTitle": "myself / yourself / themselves (O'zlik Olmoshlari)",
        "formula": "Subject + Verb + reflexive pronoun (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves)",
        "positive": [
          "I cut myself with a knife while cooking.",
          "He looked at himself in the mirror."
        ],
        "negative": [
          "We enjoyed ourselves at the party very much.",
          "She did all the work by herself (= yolg'iz o'zi)."
        ],
        "explanationUz": "Harakatni bajaruvchi va qabul qiluvchi bir xil shaxs bo'lganda o'zlik olmoshlari ishlatiladi. 'By myself / by himself' esa 'yolg'iz o'zi / hech kimning yordamisiz' ma'nosini beradi.",
        "examples": [
          {"en": "Take care of yourself!", "uz": "O'zingizni ehtiyot qiling!"},
          {"en": "They repaired the car by themselves.", "uz": "Ular mashinani hech kimning yordamisiz o'zlari ta'mirladilar."}
        ],
        "exercises": [
          {
            "id": "u62-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri o'zlik olmoshini tanlang",
            "prompt": "Did you paint the room all by _____?",
            "options": ["yourself", "you", "your", "yours"],
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
    63: {
        "ruleTitle": "Ann's camera / my brother's car ('s Egalik Qo'shimchasi)",
        "formula": "Shaxs + 's + noun (Ann's camera) | Ko'plik -s + ' (my parents' car) | Narsa + of (the roof of the house)",
        "positive": [
          "This is my sister's laptop.",
          "We went to Paul and Emma's wedding."
        ],
        "negative": [
          "My parents' house is in Samarkand.",
          "The temperature of the water was very cold (narsalar uchun 'of')."
        ],
        "explanationUz": "Odamlar va hayvonlarga nisbatan egalik bildirish uchun 's qo'shiladi. Ko'plik -s bilan tugagan otlarda faqat apostrof ' qo'yiladi (my friends' house). Jonsiz narsalarda esa odatda 'of' ishlatiladi.",
        "examples": [
          {"en": "What is the name of this street?", "uz": "Bu ko'chaning nomi nima?"},
          {"en": "Yesterday I met Tom's brother.", "uz": "Kecha men Tomning akasi bilan uchrashdim."}
        ],
        "exercises": [
          {
            "id": "u63-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri egalik shaklini tanlang",
            "prompt": "Do you know _____ daughter? She is an architect.",
            "options": ["Jack and Mary's", "Jack's and Mary's", "Jack and Mary", "Jack's and Mary"],
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
    64: {
        "ruleTitle": "a / an ... (Noaniq Artikllar)",
        "formula": "a + undosh tovush (a car, a university) | an + unli tovush (an apple, an hour)",
        "positive": [
          "Rachel works in a bank.",
          "Can I have an orange, please?"
        ],
        "negative": [
          "He is an honest man ('h' o'qilmaydi - unli tovush!).",
          "She is a university student ('u' [ju:] undosh tovush!)."
        ],
        "explanationUz": "'A/an' faqat birlikdagi sanaladigan otlar oldidan keladi. Tanlov yozuvdagi harfga emas, balki talaffuzdagi birinchi tovushga bog'liq: unli tovushdan oldin 'an', undosh tovushdan oldin 'a'.",
        "examples": [
          {"en": "I waited for an hour at the station.", "uz": "Vokzalda bir soat kutdim."},
          {"en": "She wants to become a doctor.", "uz": "U shifokor bo'lishni xohlaydi."}
        ],
        "exercises": [
          {
            "id": "u64-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri artiklni tanlang",
            "prompt": "My uncle is _____ university professor in London.",
            "options": ["a", "an", "the", "-"],
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
    65: {
        "ruleTitle": "flower(s), bus(es) (Otlar Ko'pligi)",
        "formula": "Noun + -s / -es | Irregular: man -> men, child -> children, foot -> feet",
        "positive": [
          "one car -> two cars | a bus -> three buses | a city -> four cities.",
          "Irregulars: a child -> children, a tooth -> teeth, a person -> people."
        ],
        "negative": [
          "These scissors are sharp (doimiy ko'plikdagi otlar).",
          "My trousers are too long."
        ],
        "explanationUz": "Ko'p otlarga ko'plikda -s yoki -es (-s, -sh, -ch, -x dan keyin) qo'shiladi. Noto'g'ri otlar ichki unlisini o'zgartiradi (men, women, feet). Scissors, glasses, trousers, jeans kabi otlar doimiy ko'plik hisoblanadi.",
        "examples": [
          {"en": "There are many young people in our city.", "uz": "Shahrimizda juda ko'p yoshlar bor."},
          {"en": "Where are my sunglasses?", "uz": "Quyosh ko'zoynagim qayerda?"}
        ],
        "exercises": [
          {
            "id": "u65-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri ko'plik shaklini tanlang",
            "prompt": "There were about twenty _____ in the playground.",
            "options": ["children", "childs", "childrens", "childes"],
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
    66: {
        "ruleTitle": "a car / some money (Sanaladigan va Sanalmaydigan Otlar 1)",
        "formula": "Countable: a car / cars, many cars | Uncountable: some money, much money (a/an va ko'plik bo'lmaydi!)",
        "positive": [
          "Countable: a beach, an apple, two cups, three houses.",
          "Uncountable: water, milk, rice, money, music, air."
        ],
        "negative": [
          "I have some money. (a money EMAS!).",
          "Can you pass me some sugar?"
        ],
        "explanationUz": "Sanaladigan otlar dona-dona sanaladi (one car, two cars). Sanalmaydigan otlar esa yaxlit modda, suyuqlik yoki tushuncha bo'lib, ularning oldidan a/an ishlatilmaydi va ko'plik shakli bo'lmaydi.",
        "examples": [
          {"en": "I bought some bananas and some rice.", "uz": "Men bir nechta banan va bir oz guruch sotib oldim."},
          {"en": "Do you listen to music very often?", "uz": "Musiqa juda tez-tez eshitib turasizmi?"}
        ],
        "exercises": [
          {
            "id": "u66-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri sanalmaydigan ot ifodasini tanlang",
            "prompt": "Would you like _____ tea or coffee?",
            "options": ["some", "a", "an", "many"],
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
    67: {
        "ruleTitle": "a car / some money (Sanalmaydigan Maxsus Otlar 2)",
        "formula": "Uncountable: information, advice, news, weather, bread, traffic, luggage, furniture",
        "positive": [
          "Can you give me some advice? (an advice EMAS!).",
          "The weather was wonderful yesterday."
        ],
        "negative": [
          "The news is good (news har doim birlik fe'l oladi!).",
          "We have a lot of luggage."
        ],
        "explanationUz": "O'zbek tilida sanaladigan bo'lsa ham, ingliz tilida qat'iy sanalmaydigan otlar: information (ma'lumot), advice (maslahat), news (yangilik), weather (ob-havo), bread (non), furniture (mebel), luggage (yuk).",
        "examples": [
          {"en": "Let me give you a piece of advice.", "uz": "Sizga bitta maslahat berishga ruxsat eting."},
          {"en": "I have some wonderful news for you.", "uz": "Siz uchun ajoyib bir yangiligim bor."}
        ],
        "exercises": [
          {
            "id": "u67-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri fe'lni tanlang",
            "prompt": "The news about the project _____ very exciting.",
            "options": ["is", "are", "were", "have been"],
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
    68: {
        "ruleTitle": "a / an va the (Artikllar Farqi)",
        "formula": "a/an = noaniq, birinchi bor eslatilgan | the = aniq, tinglovchiga ma'lum",
        "positive": [
          "I bought a jacket and a shirt. The jacket is blue, but the shirt is white.",
          "Can you open the door, please? (Xonadagi aniq eshik)."
        ],
        "negative": [
          "There is a man outside. (Qaysi man ekani noma'lum).",
          "The man outside wants to speak to you. (O'sha man)."
        ],
        "explanationUz": "Nutqda birinchi marta tilga olingan narsalar uchun 'a/an', suhbatdoshga allaqachon ma'lum bo'lgan aniq narsa-buyumlar uchun esa 'the' aniq artikli ishlatiladi.",
        "examples": [
          {"en": "We sat down in the living room and turned on the TV.", "uz": "Biz mehmonxonada o'tirdik va televizorni yoqdik."},
          {"en": "I need to go to the bank to get some cash.", "uz": "Naqd pul olish uchun bankka borishim kerak."}
        ],
        "exercises": [
          {
            "id": "u68-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri artikl kombinatsiyasini tanlang",
            "prompt": "A woman and a man were sitting opposite me. _____ woman was reading a book.",
            "options": ["The", "A", "An", "One"],
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
    69: {
        "ruleTitle": "the ... (Yagona Narsalar va Muhit)",
        "formula": "the + dunyoda yagona narsalar (the sun, the moon, the sky, the world, the internet)",
        "positive": [
          "The sun is shining brightly today.",
          "The earth moves around the sun."
        ],
        "negative": [
          "Paris is the capital of France.",
          "I looked up at the sky."
        ],
        "explanationUz": "Dunyoda yagona bo'lgan borliq ob'ektlari (the sun, the moon, the earth, the world, the universe) hamda 'the police, the fire brigade, the internet' so'zlari bilan 'the' ishlatiladi.",
        "examples": [
          {"en": "Millions of people surf the internet every day.", "uz": "Millionlab insonlar har kuni internetdan foydalanadi."},
          {"en": "What is the longest river in the world?", "uz": "Dunyodagi eng uzun daryo qaysi?"}
        ],
        "exercises": [
          {
            "id": "u69-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "_____ moon was full and bright last night.",
            "options": ["The", "A", "An", "-"],
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
    70: {
        "ruleTitle": "go to work / go home / go to the cinema",
        "formula": "No article: at home, at work, at school, in bed | With 'the': to the cinema, to the bank",
        "positive": [
          "I'm at work right now (the work EMAS!).",
          "What time do you usually go home? (to home EMAS!)."
        ],
        "negative": [
          "Children start school at the age of six.",
          "We went to the cinema on Friday evening."
        ],
        "explanationUz": "'Home, work, school, hospital, prison, church, bed' so'zlari ularning asosiy maqsadi bo'yicha ishlatilganda 'the' artiklisiz qo'llaniladi (in hospital - davolanmoqda). 'Cinema, theatre, bank, supermarket' bilan esa 'the' ishlatiladi.",
        "examples": [
          {"en": "I was exhausted, so I went straight to bed.", "uz": "Juda charchagan edim, shuning uchun to'g'ri o'ringa yotishga bordim."},
          {"en": "We often go to the theatre at the weekend.", "uz": "Dam olish kunlari biz tez-tez teatrga boramiz."}
        ],
        "exercises": [
          {
            "id": "u70-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri shaklni tanlang",
            "prompt": "After finishing work, I went straight _____.",
            "options": ["home", "to home", "to the home", "at home"],
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
    71: {
        "ruleTitle": "I like music, I hate exams (Umumiy Tushunchalar Artikl Olmaydi)",
        "formula": "General plural / uncountable: no article | Specific: the + noun",
        "positive": [
          "I love music, especially jazz (umumiy musiqa).",
          "I liked the music at the party yesterday (aniq o'sha kechadagi musiqa)."
        ],
        "negative": [
          "Doctors work very hard (umumiy shifokorlar).",
          "We must protect wild animals."
        ],
        "explanationUz": "Umumiy ma'nodagi ko'plikdagi otlar (computers, children) yoki sanalmaydigan mavhum/moddiy otlar (music, life, gold) oldidan 'the' ishlatilmaydi.",
        "examples": [
          {"en": "Life is not possible without water.", "uz": "Suvsiz hayot bo'lishi mumkin emas."},
          {"en": "Most people like chocolate.", "uz": "Ko'pchilik odamlar shokoladni yoqtirishadi."}
        ],
        "exercises": [
          {
            "id": "u71-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri variantni tanlang",
            "prompt": "_____ are much more expensive than they were five years ago.",
            "options": ["Computers", "The computers", "A computer", "An computers"],
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
    72: {
        "ruleTitle": "the ... (Geografik Joy Nomlari)",
        "formula": "Daryolar, dengizlar, okeanlar, tog' tizmalari: the | Qit'alar, shaharlar, ko'llar: artiklsiz",
        "positive": [
          "The Atlantic Ocean, the Nile, the Mediterranean Sea, the Alps.",
          "Countries with plural / Republic / Kingdom: the USA, the UK, the Netherlands."
        ],
        "negative": [
          "Uzbekistan, France, Asia, London, Lake Baikal, Mount Everest (artiklsiz!).",
          "We visited Central Asia last spring."
        ],
        "explanationUz": "Shaharlar, davlatlarning ko'pchiligi, qit'alar va alohida tog' cho'qqilari artiklsiz keladi. Ammo daryolar (the Nile), okeanlar (the Pacific), tog' tizmalari (the Alps) hamda nomida 'Republic/Kingdom/States' bo'lgan davlatlar oldidan 'the' qo'yiladi.",
        "examples": [
          {"en": "The United Kingdom consists of four countries.", "uz": "Birlashgan Qirollik to'rtta mamlakatdan iborat."},
          {"en": "Cairo is on the River Nile.", "uz": "Qohira Nil daryosi bo'yida joylashgan."}
        ],
        "exercises": [
          {
            "id": "u72-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri geografik artiklni tanlang",
            "prompt": "Have you ever visited _____ United States of America?",
            "options": ["the", "a", "an", "-"],
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
    73: {
        "ruleTitle": "this / that / these / those (Ko'rsatish Olmoshlari)",
        "formula": "this / these (yaqinda) | that / those (uzoqda) | this/that (birlik), these/those (ko'plik)",
        "positive": [
          "Do you like this picture here? (yaqin birlik).",
          "These flowers are for you (yaqin ko'plik)."
        ],
        "negative": [
          "Who is that woman over there? (uzoq birlik).",
          "Those shoes look uncomfortable (uzoq ko'plik)."
        ],
        "explanationUz": "'This' (bu) va 'these' (bular) so'zlovchiga yaqin narsalar uchun, 'that' (anavi) va 'those' (anavilar) esa uzoqdagi narsalar uchun ishlatiladi. Telefonda: 'Hello, this is David' (Men Davidman).",
        "examples": [
          {"en": "This is a great party, isn't it?", "uz": "Bu ajoyib kecha, shunday emasmi?"},
          {"en": "Look at those birds high up in the sky!", "uz": "Osmonda baland uchayotgan anavi qushlarga qara!"}
        ],
        "exercises": [
          {
            "id": "u73-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri ko'rsatish olmoshini tanlang",
            "prompt": "Who are _____ people waiting outside the office over there?",
            "options": ["those", "these", "this", "that"],
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
    74: {
        "ruleTitle": "one / ones (Otni Takrorlamaslik)",
        "formula": "a/the + adjective + one (birlik) | the/some + adjective + ones (ko'plik)",
        "positive": [
          "Which coat is yours? - The blue one.",
          "I don't like these shoes, but I like those ones."
        ],
        "negative": [
          "This cup is dirty. Can I have a clean one?",
          "Don't buy those apples. Buy the fresh ones."
        ],
        "explanationUz": "Avval eslatilgan otni yana takrorlamaslik uchun birlikda 'one', ko'plikda esa 'ones' so'zi ishlatiladi (The black one = qora poyafzal).",
        "examples": [
          {"en": "Which car did you rent? - The small red one.", "uz": "Qaysi mashinani ijaraga oldingiz? - Kichik qizilini."},
          {"en": "My old glasses broke, so I bought some new ones.", "uz": "Eski ko'zoynaklarim sindi, shuning uchun yangilarini sotib oldim."}
        ],
        "exercises": [
          {
            "id": "u74-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri o'rnini bosuvchi so'zni tanlang",
            "prompt": "I don't like the red hotel, I prefer the modern _____.",
            "options": ["one", "ones", "it", "them"],
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
    75: {
        "ruleTitle": "some va any (Miqdor Ko'rsatkichlari)",
        "formula": "some = tasdiq gaplar va takliflar | any = inkor va umumiy so'roq gaplar",
        "positive": [
          "I bought some apples and some milk.",
          "Would you like some coffee? (Muloyim taklifda 'some'!)."
        ],
        "negative": [
          "I didn't buy any bananas.",
          "Have you got any luggage?"
        ],
        "explanationUz": "'Some' odatda tasdiq gaplarda hamda javobi 'ha' deb kutilgan taklif/iltimoslarda (Would you like some...?) qo'llaniladi. 'Any' esa inkor va umumiy so'roq gaplarda ishlatiladi.",
        "examples": [
          {"en": "Can I have some water, please?", "uz": "Iltimos, ozgina suv bersangiz bo'ladimi?"},
          {"en": "There aren't any clean towels in the bathroom.", "uz": "Vannaxonada hech qanday toza sochiq yo'q."}
        ],
        "exercises": [
          {
            "id": "u75-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri so'zni tanlang (some / any)",
            "prompt": "We don't have _____ bread left, so we need to go to the bakery.",
            "options": ["any", "some", "no", "none"],
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
    76: {
        "ruleTitle": "not + any, no va none (Inkor Miqdor)",
        "formula": "not ... any + noun = no + noun | none = otsiz yolg'iz javob",
        "positive": [
          "We haven't got any money. = We have no money.",
          "There are no shops open today."
        ],
        "negative": [
          "How much money do you have? - None.",
          "How many books did you read? - None of them."
        ],
        "explanationUz": "'No' so'zi inkor ma'nosini o'zi bergani uchun gapdagi fe'l tasdiqda bo'ladi (He has no friends). 'None' esa otsiz mustaqil ishlatiladi ('How much? - None').",
        "examples": [
          {"en": "There were no empty seats on the bus.", "uz": "Avtobusda birorta ham bo'sh o'rindiq yo'q edi."},
          {"en": "Is there any milk left? - No, none.", "uz": "Sut qoldimi? - Yo'q, hech qancha qolmadi."}
        ],
        "exercises": [
          {
            "id": "u76-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri inkor so'zini tanlang",
            "prompt": "I called him, but there was _____ answer.",
            "options": ["no", "any", "none", "not"],
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
    77: {
        "ruleTitle": "somebody, nobody, anybody (Kishilik Noaniq Olmoshlari)",
        "formula": "somebody/someone (tasdiq) | anybody/anyone (inkor/so'roq) | nobody/no-one (inkor ma'no)",
        "positive": [
          "Somebody broke the window.",
          "Nobody called while you were out."
        ],
        "negative": [
          "I didn't speak to anybody at the party.",
          "Is anyone at home?"
        ],
        "explanationUz": "Odamlar uchun: somebody (kimdir), anybody (kimdir/hech kim), nobody (hech kim). 'Nobody' kelgan gapda ikkinchi inkor qo'yilmaydi (Nobody knows, Nobody didn't know EMAS!).",
        "examples": [
          {"en": "There is somebody waiting at the door.", "uz": "Eshik oldida kimdir kutyapti."},
          {"en": "The house was completely dark. Nobody was there.", "uz": "Uy qop-qorong'u edi. U yerda hech kim yo'q edi."}
        ],
        "exercises": [
          {
            "id": "u77-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri olmoshni tanlang",
            "prompt": "The room was completely empty. There wasn't _____ there.",
            "options": ["anybody", "nobody", "somebody", "no one"],
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
    78: {
        "ruleTitle": "something, nothing, everywhere (Buyum va Joy Olmoshlari)",
        "formula": "thing: something, anything, nothing, everything | place: somewhere, anywhere, nowhere, everywhere",
        "positive": [
          "Lucy said something, but I didn't hear it.",
          "Let's go somewhere warm for our holiday."
        ],
        "negative": [
          "I didn't do anything yesterday.",
          "I looked for my keys everywhere, but they were nowhere to be found."
        ],
        "explanationUz": "Narsa-buyumlar uchun -thing (something, nothing), joylar uchun -where (somewhere, nowhere, everywhere) qo'shiladi. Bu so'zlardan so'ng sifat bevosita kelishi mumkin (something cold, somewhere quiet).",
        "examples": [
          {"en": "Would you like something to eat?", "uz": "Yeyishga biror narsa xohlaysizmi?"},
          {"en": "There is nowhere to park around here.", "uz": "Bu atrofda mashina qo'yishga birorta ham joy yo'q."}
        ],
        "exercises": [
          {
            "id": "u78-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri birikmani tanlang",
            "prompt": "I'm looking for _____ quiet to study for my exams.",
            "options": ["somewhere", "anywhere", "nowhere", "everywhere"],
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
    79: {
        "ruleTitle": "every va all (Har Bir va Barcha)",
        "formula": "every + singular noun (every student) | all + plural noun (all students)",
        "positive": [
          "Every student in the class passed the exam.",
          "All the students were very excited."
        ],
        "negative": [
          "I get up at 7:00 every morning.",
          "He spent all his money on books."
        ],
        "explanationUz": "'Every' har bir a'zoni alohida nazarda tutadi va undan keyin birlikdagi ot hamda birlikdagi fe'l keladi (Every child needs love). 'All' esa guruhni yaxlit oladi va ko'plikdagi ot bilan ishlatiladi.",
        "examples": [
          {"en": "Every room in the hotel has a balcony.", "uz": "Mehmonxonaning har bir xonasida balkon bor."},
          {"en": "All the trains were cancelled due to heavy snow.", "uz": "Qalin qor tufayli barcha poyezdlar bekor qilindi."}
        ],
        "exercises": [
          {
            "id": "u79-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri miqdor so'zini tanlang",
            "prompt": "_____ country has its own national flag and anthem.",
            "options": ["Every", "All", "Whole", "Each of"],
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
    80: {
        "ruleTitle": "all, most, some, any, no / none",
        "formula": "all/most/some + noun (umumiy) | all/most/some + OF + the/my/these + noun (aniq guruh)",
        "positive": [
          "Most children like sweets (Dunyodagi aksariyat bolalar).",
          "Most of the children in this school wear uniforms (Aniq ushbu maktabdagilar)."
        ],
        "negative": [
          "Some people enjoy cooking.",
          "None of my friends live abroad."
        ],
        "explanationUz": "Umumiy tushunchalarda 'most/all/some + ot' ishlatiladi. Agar aniq bir guruh nazarda tutilsa (the, my, these oldidan), 'of' qo'shiladi: most of the students, some of my friends.",
        "examples": [
          {"en": "All of us were surprised by the unexpected news.", "uz": "Kutilmagan yangilikdan hammamiz hayratda qoldik."},
          {"en": "Most cars use petrol or electricity.", "uz": "Ko'pchilik avtomobillar benzin yoki elektr energiyasidan foydalanadi."}
        ],
        "exercises": [
          {
            "id": "u80-ex1",
            "type": "multiple_choice",
            "instruction": "To'g'ri konstruksiyani tanlang",
            "prompt": "_____ the students in our group passed the final test.",
            "options": ["All of", "All", "Every of", "Whole"],
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
    }
}
