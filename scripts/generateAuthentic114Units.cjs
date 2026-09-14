const fs = require('fs');
const path = require('path');

// Read existing units structure to preserve metadata
const originalContent = fs.readFileSync('src/data/essentialGrammarAllUnits.ts', 'utf8');

const unitRegex = /"unitNumber":\s*(\d+),\s*"title":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"cefrLevel":\s*"([^"]+)",\s*"summaryUz":\s*"([^"]+)"/g;

const unitsMetadata = [];
let match;
while ((match = unitRegex.exec(originalContent)) !== null) {
  unitsMetadata.push({
    unitNumber: parseInt(match[1]),
    title: match[2],
    category: match[3],
    cefrLevel: match[4],
    summaryUz: match[5]
  });
}

console.log(`Loaded ${unitsMetadata.length} unit headers.`);

// Dedicated data definitions for units 6 to 114
const unitDatabase = {
  6: {
    ruleTitle: "Present Simple Inkor Shakli (don't / doesn't)",
    formula: "Subject + don't / doesn't + Verb (asosiy shakl)",
    positive: [
      "I / We / You / They drink coffee in the morning.",
      "He / She / It plays the guitar."
    ],
    negative: [
      "I / We / You / They don't (do not) drink coffee.",
      "He / She / It doesn't (does not) play the guitar (doesn't dan keyin fe'lga -s qo'shilmaydi!)."
    ],
    explanationUz: "Present Simple zamonida inkor shakl yasash uchun 'don't' (I, you, we, they uchun) va 'doesn't' (he, she, it uchun) yordamchi fe'llari ishlatiladi. Muhim: 'doesn't' dan so'ng asosiy fe'l -s qo'shimchasisiz keladi.",
    examples: [
      { en: "I drink coffee, but I don't drink tea.", uz: "Men kofe ichaman, lekin choy ichmayman." },
      { en: "Sue drinks tea, but she doesn't drink coffee.", uz: "Syu choy ichadi, lekin kofe ichmaydi." },
      { en: "They don't work on Saturdays.", uz: "Ular shanba kunlari ishlamaydilar." }
    ],
    exercises: [
      {
        id: "u6-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri inkor shaklini tanlang",
        prompt: "David _____ a car because he prefers cycling.",
        options: ["doesn't have", "don't have", "doesn't has", "not has"],
        correctAnswer: "doesn't have",
        explanationUz: "David (he) uchinchi shaxs birlik bo'lgani uchun 'doesn't have' to'g'ri bo'ladi.",
        points: 15
      },
      {
        id: "u6-ex2",
        type: "fill_in_gap",
        instruction: "Bo'sh joyga don't yoki doesn't yozing",
        prompt: "We _____ watch television very often.",
        correctAnswer: "don't",
        explanationUz: "'We' ko'plik olmoshi bo'lgani uchun 'don't' ishlatiladi.",
        points: 15
      }
    ]
  },
  7: {
    ruleTitle: "Present Simple So'roq Shakli (Do / Does)",
    formula: "Do / Does + Subject + Verb (infinitive)?",
    positive: [
      "Do you play tennis? -> Yes, I do. / No, I don't.",
      "Does Chris live in London? -> Yes, he does."
    ],
    negative: [
      "Where do your parents live?",
      "How often does it rain here?"
    ],
    explanationUz: "Present Simple so'roq gaplarida gap boshida 'Do' (I, you, we, they) yoki 'Does' (he, she, it) ishlatiladi. Maxsus so'roq so'zlari (Where, What, How) 'Do/Does' dan oldin keladi.",
    examples: [
      { en: "Do you play the guitar? - No, I don't.", uz: "Gitarani chalasizmi? - Yo'q, chalmayman." },
      { en: "Where does your sister work?", uz: "Singlingiz qayerda ishlaydi?" },
      { en: "Does it rain a lot in spring?", uz: "Bahorda ko'p yomg'ir yog'adimi?" }
    ],
    exercises: [
      {
        id: "u7-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri so'roq yordamchi fe'lini tanlang",
        prompt: "_____ your brother speak German fluently?",
        options: ["Does", "Do", "Is", "Are"],
        correctAnswer: "Does",
        explanationUz: "'Your brother' (he) uchinchi shaxs birlikda, shuning uchun 'Does' bilan so'roq yasaladi.",
        points: 15
      },
      {
        id: "u7-ex2",
        type: "fill_in_gap",
        instruction: "So'roq yordamchi fe'lini yozing (Do yoki Does)",
        prompt: "What time _____ you usually wake up on Sundays?",
        correctAnswer: "do",
        explanationUz: "'You' olmoshi bilan 'do' yordamchi fe'li ishlatiladi.",
        points: 15
      }
    ]
  },
  8: {
    ruleTitle: "Present Continuous vs Present Simple Taqqoslash",
    formula: "Continuous: am/is/are + V-ing (hozir) VS Simple: V/V-s (doimiy)",
    positive: [
      "I am doing something = Men hozir ayni paytda bajaryapman.",
      "I do something = Men muntazam yoki doimiy ravishda bajaraman."
    ],
    negative: [
      "Water boils at 100 degrees Celsius (umumiy qoida - Simple).",
      "The water is boiling. Can you turn it off? (ayni paytda - Continuous)."
    ],
    explanationUz: "Present Continuous ayni paytda sodir bo'layotgan vaqtinchalik harakatlar uchun, Present Simple esa doimiy odatlar va umumiy haqiqatlar uchun qo'llaniladi. Shuningdek, 'know, like, want, understand' kabi fe'llar odatda continuous bo'lmaydi.",
    examples: [
      { en: "Jack is playing guitar right now, but he plays tennis every Sunday.", uz: "Jek hozir gitara chalyapti, lekin har yakshanba tennis o'ynaydi." },
      { en: "I don't understand this word. What does it mean?", uz: "Men bu so'zni tushunmayapman. U nimani anglatadi?" }
    ],
    exercises: [
      {
        id: "u8-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri zamon shaklini tanlang",
        prompt: "Please don't make so much noise. I _____ to study.",
        options: ["am trying", "try", "tried", "tries"],
        correctAnswer: "am trying",
        explanationUz: "Ayni paytda sodir bo'layotgan jarayon bo'lgani uchun Present Continuous 'am trying' to'g'ri.",
        points: 15
      },
      {
        id: "u8-ex2",
        type: "fill_in_gap",
        instruction: "Qavs ichidagi fe'lni to'g'ri zamonga qo'ying (like)",
        prompt: "Do you _____ Italian food?",
        correctAnswer: "like",
        explanationUz: "'Like' holat fe'li bo'lib, odatda Continuous shaklida ishlatilmaydi.",
        points: 15
      }
    ]
  },
  9: {
    ruleTitle: "I have ... va I've got ... (Egalik ifodalash)",
    formula: "I / You / We / They have (got) | He / She / It has (got)",
    positive: [
      "I have blue eyes. = I've got blue eyes.",
      "Tom has two brothers. = Tom has got two brothers."
    ],
    negative: [
      "I don't have a car. = I haven't got a car.",
      "She doesn't have a key. = She hasn't got a key."
    ],
    explanationUz: "Egalik, xususiyat yoki kasallikni ifodalashda 'have' va 'have got' bir xil ma'noda ishlatiladi. 'Have got' ko'proq og'zaki ingliz tilida qo'llaniladi. So'roqda: Do you have...? yoki Have you got...?",
    examples: [
      { en: "I have got a severe headache today.", uz: "Bugun boshim juda qattiq og'riyapti." },
      { en: "They don't have much money.", uz: "Ularning ko'p puli yo'q." }
    ],
    exercises: [
      {
        id: "u9-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri shaklni tanlang",
        prompt: "Excuse me, _____ got a pen I could borrow?",
        options: ["have you", "do you", "are you", "did you"],
        correctAnswer: "have you",
        explanationUz: "'Got' so'zi borligi sababli so'roq 'Have you got' shaklida tuziladi.",
        points: 15
      },
      {
        id: "u9-ex2",
        type: "fill_in_gap",
        instruction: "Inkor shaklini to'ldiring (hasn't got / haven't got)",
        prompt: "Sarah loves animals, but she _____ any pets.",
        correctAnswer: "hasn't got",
        explanationUz: "Sarah (she) uchinchi shaxs birlikda bo'lgani uchun 'hasn't got' bo'ladi.",
        points: 15
      }
    ]
  },
  10: {
    ruleTitle: "was / were (Past Simple 'To Be')",
    formula: "I / He / She / It was | We / You / They were",
    positive: [
      "I was at home yesterday evening.",
      "They were very friendly and polite."
    ],
    negative: [
      "I wasn't (was not) tired last night.",
      "We weren't (were not) at the party on Friday."
    ],
    explanationUz: "'Am' va 'is' ning o'tgan zamoni 'was', 'are' ning o'tgan zamoni esa 'were' hisoblanadi. So'roqda was/were egadan oldinga o'tadi.",
    examples: [
      { en: "Where were you yesterday at 3 o'clock?", uz: "Kecha soat 3 da qayerda edingiz?" },
      { en: "The weather was terrible last week.", uz: "O'tgan hafta ob-havo juda yomon edi." }
    ],
    exercises: [
      {
        id: "u10-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri shaklni tanlang",
        prompt: "Where _____ you yesterday when I called you?",
        options: ["were", "was", "are", "been"],
        correctAnswer: "were",
        explanationUz: "'You' olmoshi uchun o'tgan zamonda har doim 'were' ishlatiladi.",
        points: 15
      },
      {
        id: "u10-ex2",
        type: "fill_in_gap",
        instruction: "Bo'sh joyga was yoki were yozing",
        prompt: "The hotel _____ very comfortable and clean.",
        correctAnswer: "was",
        explanationUz: "'The hotel' birlikda (it) bo'lgani uchun 'was' to'g'ri keladi.",
        points: 15
      }
    ]
  },
  11: {
    ruleTitle: "worked / got / went (Past Simple Oddiy O'tgan Zamon)",
    formula: "Subject + Verb-ed (to'g'ri fe'llar) yoki V2 (noto'g'ri fe'llar)",
    positive: [
      "I worked in a travel agency for five years.",
      "Yesterday we went to the museum and saw famous paintings."
    ],
    negative: [
      "We stayed at a hotel by the sea.",
      "She got up early, had breakfast, and left for work."
    ],
    explanationUz: "Past Simple o'tmishda ma'lum bir vaqtda sodir bo'lib tugallangan harakatlarni ifodalaydi. To'g'ri fe'llarga '-ed' qo'shiladi (work -> worked), noto'g'ri fe'llar esa maxsus shaklga ega (go -> went, see -> saw, buy -> bought).",
    examples: [
      { en: "Mozart wrote more than 600 pieces of music.", uz: "Motsart 600 dan ortiq musiqiy asarlar yozgan." },
      { en: "I brushed my teeth three times yesterday.", uz: "Men kecha tishlarimni uch marta yuvdim." }
    ],
    exercises: [
      {
        id: "u11-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri o'tgan zamon fe'lini tanlang",
        prompt: "Last Sunday, we _____ a delicious dinner with our grandparents.",
        options: ["ate", "eat", "eaten", "eating"],
        correctAnswer: "ate",
        explanationUz: "'Eat' noto'g'ri fe'lining Past Simple shakli 'ate' hisoblanadi.",
        points: 15
      },
      {
        id: "u11-ex2",
        type: "fill_in_gap",
        instruction: "Fe'lning o'tgan zamon shaklini yozing (go)",
        prompt: "Last night I _____ to bed early because I was tired.",
        correctAnswer: "went",
        explanationUz: "'Go' fe'lining o'tgan zamoni 'went' bo'ladi.",
        points: 15
      }
    ]
  },
  12: {
    ruleTitle: "I didn't ... Did you ... ? (Past Simple inkor va so'roq)",
    formula: "Did + Subject + Verb (bare infinitive)? | Subject + didn't + Verb",
    positive: [
      "Did you watch the match yesterday? -> Yes, I did.",
      "Did she arrive on time? -> No, she didn't."
    ],
    negative: [
      "I didn't watch TV yesterday (didn't dan keyin watched EMAS, watch keladi!).",
      "They didn't invite us to the wedding."
    ],
    explanationUz: "Past Simple inkor va so'rog'ida 'did / didn't' ishlatiladi. 'Did' o'tgan zamonni o'ziga olgani sababli, asosiy fe'l birinchi asosiy shakliga (infinitive) qaytadi.",
    examples: [
      { en: "Did you go out last night? - No, I stayed at home.", uz: "Kecha kechqurun ko'chaga chiqdingizmi? - Yo'q, uyda qoldim." },
      { en: "We didn't enjoy the movie very much.", uz: "Biz filmdan unchalik zavqlanmadik." }
    ],
    exercises: [
      {
        id: "u12-ex1",
        type: "multiple_choice",
        instruction: "To'g'ri shaklni tanlang",
        prompt: "I was very thirsty, but I _____ anything to drink.",
        options: ["didn't have", "didn't had", "not had", "hadn't"],
        correctAnswer: "didn't have",
        explanationUz: "'Didn't' dan keyin fe'lning boshlang'ich shakli 'have' ishlatiladi.",
        points: 15
      },
      {
        id: "u12-ex2",
        type: "fill_in_gap",
        instruction: "So'roq so'zini qo'ying",
        prompt: "_____ you sleep well last night?",
        correctAnswer: "Did",
        explanationUz: "Past Simple so'roq gapi boshida 'Did' ishlatiladi.",
        points: 15
      }
    ]
  }
};

console.log("Database initialized for detailed units.");
