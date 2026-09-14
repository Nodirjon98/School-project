import { PodcastItem } from '../types';

export const PODCASTS_DATA: PodcastItem[] = [
  {
    id: 'podcast-sleep-benefits',
    title: 'The Benefits of a Good Night\'s Sleep',
    channel: 'TED-Ed (Dr. Shai Efrati)',
    youtubeId: 'gedoSfZvBgE',
    level: 'A2',
    duration: '5:45',
    topic: 'Salomatlik, Uyqu va Miya tiklanishi',
    description: 'Nega biz uxlashimiz shart? Uyqu paytida miyamiz qanday toksinlardan tozalanadi va xotira qanday mustahkamlanadi? Ushbu mashhur TED-Ed animatsiyasida batafsil bilib oling.',
    coverImage: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    summaryUz: "Uyqu faqatgina dam olish emas, balki miya va tananing biologik ta'mirlanish jarayonidir. Yetarlicha uxlagan insonning diqqat-e'tibori, qaror qabul qilish tezligi va immuniteti ancha yuqori bo'ladi. Aksincha, surunkali uyqusizlik xotira susayishi va stressga olib keladi.",
    discussionPromptUz: "Siz kuniga o'rtacha necha soat uxlaysiz? Uyqu yetishmasligi darsdagi diqqatingizga qanday ta'sir qilishini his qilganmisiz?",
    keyVocabulary: [
      {
        word: 'Restorative',
        partOfSpeech: 'adjective',
        meaningUz: 'Kuch bag\'ishlovchi, tiklovchi',
        example: 'Deep sleep provides a restorative effect for muscles and tissues.'
      },
      {
        word: 'Toxin',
        partOfSpeech: 'noun',
        meaningUz: 'Zaharli modda, metabolik qoldiq',
        example: 'During sleep, the brain actively flushes out harmful metabolic toxins.'
      },
      {
        word: 'Consolidate',
        partOfSpeech: 'verb',
        meaningUz: 'Mustahkamlamoq, birlashtirmoq',
        example: 'Sleep helps the brain consolidate new information learned during the day.'
      },
      {
        word: 'Deprivation',
        partOfSpeech: 'noun',
        meaningUz: 'Mahrumlik, yetishmovchilik',
        example: 'Sleep deprivation significantly impairs judgment and concentration.'
      },
      {
        word: 'Immune system',
        partOfSpeech: 'noun',
        meaningUz: 'Immunitet tizimi',
        example: 'Consistent good sleep strengthens your body\'s immune system against illnesses.'
      }
    ],
    shadowingPhrases: [
      {
        id: 'slp-sh-1',
        text: 'We spend about one-third of our entire lives sleeping or trying to sleep.',
        translationUz: "Biz butun umrimizning taxminan uchdan bir qismini uxlab yoki uxlashga harakat qilib o'tkazamiz.",
        startTime: 9,
        pronunciationTipUz: "\"one-third of our\" birikmasini bitta ritmik oqimda ('wun-thurd-uv-owr') bog'lab ayting."
      },
      {
        id: 'slp-sh-2',
        text: 'During sleep, the brain reorganizes and recharges its vital neural pathways.',
        translationUz: "Uyqu vaqtida miya o'zining muhim neyron yo'llarini qayta tartiblaydi va quvvatlantiradi.",
        startTime: 45,
        pronunciationTipUz: "\"Recharges\" so'zidagi urg'u ikkinchi bo'g'inga tushadi (re-CHAR-ges)."
      },
      {
        id: 'slp-sh-3',
        text: 'Without sufficient sleep, your cognitive abilities decline significantly.',
        translationUz: "Yetarli uyqusiz sizning aqliy qobiliyatingiz sezilarli darajada pasayadi.",
        startTime: 120,
        pronunciationTipUz: "\"Cognitive abilities\" birikmasida 'g' va 'n' tovushlarini aniq va ravon talaffuz qiling."
      }
    ],
    summaryExercise: {
      title: 'Uyquning foydalari bo\'yicha xulosa matni',
      instructionUz: 'Quyidagi matnda tushirib qoldirilgan kalit so\'zlarni kontekstga qarab to\'g\'ri tanlang:',
      template: 'Sleep is not a waste of time; it is a vital {{gap_1}} process. During sleep, our brain removes metabolic {{gap_2}} and helps {{gap_3}} memories from the day. Chronic sleep {{gap_4}} can severely damage your {{gap_5}} system and focus.',
      gaps: [
        {
          id: 'gap_1',
          correctWord: 'restorative',
          options: ['restorative', 'dangerous', 'temporary', 'useless'],
          hintUz: 'Tanani qayta tiklovchi, quvvat beruvchi'
        },
        {
          id: 'gap_2',
          correctWord: 'toxins',
          options: ['toxins', 'vitamins', 'muscles', 'bones'],
          hintUz: 'Miyadan yuvilib ketadigan zararli qoldiqlar'
        },
        {
          id: 'gap_3',
          correctWord: 'consolidate',
          options: ['consolidate', 'destroy', 'forget', 'ignore'],
          hintUz: 'Xotirani mustahkamlash, tartiblash'
        },
        {
          id: 'gap_4',
          correctWord: 'deprivation',
          options: ['deprivation', 'celebration', 'perfection', 'creation'],
          hintUz: 'Yetishmovchilik, mahrum bo\'lish'
        },
        {
          id: 'gap_5',
          correctWord: 'immune',
          options: ['immune', 'solar', 'financial', 'political'],
          hintUz: 'Kasalliklarga qarshi himoya tizimi'
        }
      ]
    },
    transcript: [
      {
        id: 'slp-1',
        startTime: 0,
        endTime: 8,
        speaker: 'Narrator',
        text: 'It\'s 2 AM, and you\'re still awake staring at your ceiling.',
        translationUz: "Tungi soat 2, siz esa hali ham shiftga qarab uyg'oq yotibsiz."
      },
      {
        id: 'slp-2',
        startTime: 9,
        endTime: 17,
        speaker: 'Narrator',
        text: 'We spend about one-third of our entire lives sleeping or trying to sleep.',
        translationUz: "Biz butun umrimizning taxminan uchdan bir qismini uxlab yoki uxlashga harakat qilib o'tkazamiz."
      },
      {
        id: 'slp-3',
        startTime: 18,
        endTime: 26,
        speaker: 'Narrator',
        text: 'For a long time, researchers wondered: why do humans need so much sleep?',
        translationUz: "Uzoq vaqt davomida tadqiqotchilar: insoniyatga nega bunchalik ko'p uyqu kerak deb o'ylashgan."
      },
      {
        id: 'slp-4',
        startTime: 27,
        endTime: 36,
        speaker: 'Narrator',
        text: 'Today we know sleep is essential for restoring both mental and physical health.',
        translationUz: "Bugun biz bilamizki, uyqu aqliy va jismoniy salomatlikni tiklash uchun juda muhimdir."
      },
      {
        id: 'slp-5',
        startTime: 37,
        endTime: 48,
        speaker: 'Narrator',
        text: 'While you rest, cerebrospinal fluid flushes out cellular waste from the brain.',
        translationUz: "Siz dam olayotganingizda orqa miya suyuqligi miyadagi hujayra qoldiqlarini yuvib chiqaradi."
      },
      {
        id: 'slp-6',
        startTime: 49,
        endTime: 60,
        speaker: 'Narrator',
        text: 'This nightly cleaning process prevents the buildup of harmful protein toxins.',
        translationUz: "Ushbu tungi tozalash jarayoni zararli oqsil toksinlarining to'planishining oldini oladi."
      },
      {
        id: 'slp-7',
        startTime: 61,
        endTime: 75,
        speaker: 'Narrator',
        text: 'Sleep also strengthens memories, transforming short-term thoughts into long-term knowledge.',
        translationUz: "Shuningdek, uyqu xotirani mustahkamlaydi, qisqa muddatli fikrlarni uzoq muddatli bilimga aylantiradi."
      },
      {
        id: 'slp-8',
        startTime: 76,
        endTime: 90,
        speaker: 'Narrator',
        text: 'If you want to perform at your best tomorrow, never sacrifice tonight\'s sleep.',
        translationUz: "Agar ertaga eng yuqori natijaga erishmoqchi bo'lsangiz, bugungi uyquni hech qachon qurbon qilmang."
      }
    ],
    questions: [
      {
        id: 'slp-q1',
        type: 'multiple_choice',
        question: 'Roughly what proportion of our entire lifetime is spent sleeping?',
        options: ['One-tenth (1/10)', 'One-third (1/3)', 'One-half (1/2)', 'Two-thirds (2/3)'],
        answerIndex: 1,
        explanationUz: "Matnda aytilganidek: \"We spend about one-third of our entire lives sleeping\" (inson hayotining uchdan bir qismi)."
      },
      {
        id: 'slp-q2',
        type: 'multiple_choice',
        question: 'What vital biological cleaning process occurs in the brain during deep sleep?',
        options: [
          'New bones are created',
          'Cerebrospinal fluid flushes out cellular metabolic waste and toxins',
          'Blood stops circulating to save energy',
          'The stomach produces extra acid'
        ],
        answerIndex: 1,
        explanationUz: "Uyqu paytida orqa miya suyuqligi miyadagi zararli metabolik toksinlar va oqsillarni yuvib chiqaradi."
      },
      {
        id: 'slp-q3',
        type: 'true_false',
        question: 'True or False: Staying awake all night studying is scientifically more effective than sleeping before an exam.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 1,
        explanationUz: "Noto'g'ri (False). Uyqu xotirani mustahkamlash (consolidate) uchun juda zarur; uxlamaslik imtihonda diqqat va eslashni keskin pasaytiradi."
      },
      {
        id: 'slp-q4',
        type: 'vocabulary',
        question: 'What is the meaning of the word "Restorative" in this context?',
        options: [
          'Having the ability to heal, renew, and restore energy or health',
          'Something that takes away money',
          'A restaurant where people eat late at night',
          'Something that causes severe headaches'
        ],
        answerIndex: 0,
        explanationUz: "\"Restorative\" — quvvat bag'ishlovchi, to'qimalarni qayta tiklovchi ta'sirga ega degani."
      },
      {
        id: 'slp-q5',
        type: 'multiple_choice',
        question: 'What happens to short-term memories when you get proper sleep?',
        options: [
          'They are completely erased to free up space',
          'They are transferred and consolidated into durable long-term storage',
          'They turn into mathematical formulas',
          'They are emailed to your brain'
        ],
        answerIndex: 1,
        explanationUz: "Uyqu vaqtida qisqa muddatli xotiralar (short-term) uzoq muddatli xotiraga (long-term) aylantiriladi."
      },
      {
        id: 'slp-q6',
        type: 'true_false',
        question: 'True or False: Chronic sleep deprivation can weaken your immune defense against common sicknesses.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Doimiy uyqu yetishmasligi immun tizimini zaiflashtiradi va inson tez-tez kasal bo'la boshlaydi."
      }
    ]
  },
  {
    id: 'podcast-instrument-brain',
    title: 'How Playing an Instrument Benefits Your Brain',
    channel: 'TED-Ed (Anita Collins)',
    youtubeId: 'R0JKCYZ8hng',
    level: 'B1',
    duration: '4:45',
    topic: 'Nevrologiya, Musiqa va Intellekt',
    description: 'Musiqa asbobini chalish inson miyasida butun tana bo\'ylab mushak mashqini bajarishga teng. Neyrologlarning so\'nggi kashfiyotlari bilan tanishing.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    summaryUz: "Musiqa tinglaganda miyaning alohida qismlari faollashsa, musiqa asbobini chalayotganda miyaning deyarli barcha sohalari bir vaqtda nurlanadi. Bu jarayon ikki yarim sharni bog'lovchi «Corpus Callosum» ko'prigini mustahkamlaydi va insonning muammolarni ijodiy hal qilish qobiliyatini keskin oshiradi.",
    discussionPromptUz: "Siz qaysi musiqa asbobini chalishni xohlardingiz? Sizningcha musiqa tinglash diqqatni jamlashga yordam beradimi yoki chalg'itadimi?",
    keyVocabulary: [
      {
        word: 'Neuroscientist',
        partOfSpeech: 'noun',
        meaningUz: 'Miya va asab tizimi olimi',
        example: 'Neuroscientists use fMRI scanners to monitor real-time brain activity.'
      },
      {
        word: 'Corpus Callosum',
        partOfSpeech: 'noun',
        meaningUz: 'Miya yarim sharlarini bog\'lovchi qadoqsimon tana',
        example: 'Musicians develop a thicker corpus callosum, linking logic with creativity.'
      },
      {
        word: 'Simultaneously',
        partOfSpeech: 'adverb',
        meaningUz: 'Bir vaqtning o\'zida, barobariga',
        example: 'Playing the piano requires reading notes and moving both hands simultaneously.'
      },
      {
        word: 'Fine motor skills',
        partOfSpeech: 'noun phrase',
        meaningUz: 'Barmoqlar nozik harakati (motorika)',
        example: 'String and wind instruments enhance precise fine motor skills.'
      },
      {
        word: 'Cognitive',
        partOfSpeech: 'adjective',
        meaningUz: 'Aqliy, bilishga oid',
        example: 'Musical training provides long-term cognitive enhancements in elderly people.'
      }
    ],
    shadowingPhrases: [
      {
        id: 'ins-sh-1',
        text: 'Playing an instrument is the brain\'s equivalent of a full-body workout.',
        translationUz: "Musiqa asbobini chalish miya uchun butun tanani mashq qildirish bilan tengdir.",
        startTime: 14,
        pronunciationTipUz: "\"Equivalent of a\" iborasini birlashtirib, ravon talaffuz qiling ('ee-KWIV-uh-lunt-uv-uh')."
      },
      {
        id: 'ins-sh-2',
        text: 'It bridges the artistic right hemisphere with the analytical left hemisphere.',
        translationUz: "U badiiy o'ng yarim sharni mantiqiy chap yarim shar bilan bog'laydi.",
        startTime: 65,
        pronunciationTipUz: "\"Hemisphere\" so'zidagi 'ph' harfi 'f' tovushini beradi (HEM-iss-feer)."
      },
      {
        id: 'ins-sh-3',
        text: 'Musicians exhibit enhanced memory functions, storing and retrieving memories more efficiently.',
        translationUz: "Musiqachilar xotiralarni ancha samarali saqlash va eslash imkoniyatini namoyish etadilar.",
        startTime: 135,
        pronunciationTipUz: "\"Retrieving\" ('ri-TREE-ving') so'zida 'ee' unlisini cho'zibroq ayting."
      }
    ],
    summaryExercise: {
      title: 'Musiqa va Miya bo\'yicha xulosa mashqi',
      instructionUz: 'Quyidagi xulosa matnidagi bo\'sh o\'rinlarga eng mos so\'zlarni tanlang:',
      template: 'When people play musical instruments, {{gap_1}} observe fireworks throughout the brain. This activity engages the visual, auditory, and motor cortices {{gap_2}}. It also strengthens the {{gap_3}}, allowing messages to travel faster between hemispheres. As a result, musicians exhibit higher {{gap_4}} skills and exceptional {{gap_5}} motor control.',
      gaps: [
        {
          id: 'gap_1',
          correctWord: 'neuroscientists',
          options: ['neuroscientists', 'archaeologists', 'astronomers', 'pilots'],
          hintUz: 'Miya va asab tizimini o\'rganuvchi olimlar'
        },
        {
          id: 'gap_2',
          correctWord: 'simultaneously',
          options: ['simultaneously', 'rarely', 'never', 'accidentally'],
          hintUz: 'Bir vaqtning o\'zida, parallel ravishda'
        },
        {
          id: 'gap_3',
          correctWord: 'corpus callosum',
          options: ['corpus callosum', 'blood vessels', 'ear canal', 'skull'],
          hintUz: 'Ikki yarim sharni tutashtiruvchi miya ko\'prigi'
        },
        {
          id: 'gap_4',
          correctWord: 'cognitive',
          options: ['cognitive', 'geographical', 'financial', 'chemical'],
          hintUz: 'Aqliy va tushunishga oid qobiliyatlar'
        },
        {
          id: 'gap_5',
          correctWord: 'fine',
          options: ['fine', 'broken', 'wild', 'heavy'],
          hintUz: 'Barmoqlarning nozik va aniq harakati'
        }
      ]
    },
    transcript: [
      {
        id: 'ins-1',
        startTime: 0,
        endTime: 10,
        speaker: 'Narrator',
        text: 'Did you know that whenever you listen to music, multiple areas of your brain light up?',
        translationUz: "Musiqa tinglaganingizda miyangizning bir nechta sohalari birdaniga nurlanishini bilasizmi?"
      },
      {
        id: 'ins-2',
        startTime: 11,
        endTime: 22,
        speaker: 'Narrator',
        text: 'Yet, when scientists look at someone actually playing an instrument, it\'s like a full-body workout for the brain.',
        translationUz: "Ammo olimlar biror asbob chalayotgan kishini tekshirganda, bu miya uchun butun tana mashqiga aylanadi."
      },
      {
        id: 'ins-3',
        startTime: 23,
        endTime: 36,
        speaker: 'Narrator',
        text: 'Playing music engages almost every single area of the central nervous system simultaneously.',
        translationUz: "Musiqa chalish markaziy asab tizimining deyarli har bir sohasini bir vaqtning o'zida harakatga keltiradi."
      },
      {
        id: 'ins-4',
        startTime: 37,
        endTime: 50,
        speaker: 'Narrator',
        text: 'It involves visual reading, auditory processing, and fine motor precision all at once.',
        translationUz: "U vizual o'qish, eshitishni qayta ishlash va barmoqlar nozik harakatini birdek talab qiladi."
      },
      {
        id: 'ins-5',
        startTime: 51,
        endTime: 68,
        speaker: 'Narrator',
        text: 'The bridge connecting the two brain hemispheres, called the corpus callosum, grows significantly stronger.',
        translationUz: "Ikki miya yarim sharini bog'lovchi qadoqsimon tana (corpus callosum) sezilarli darajada baquvvatroq rivojlanadi."
      },
      {
        id: 'ins-6',
        startTime: 69,
        endTime: 85,
        speaker: 'Narrator',
        text: 'This allows musicians to solve problems more creatively and innovatively in both academic and social settings.',
        translationUz: "Bu esa musiqachilarga ham akademik, ham ijtimoiy muhitda muammolarni yanada ijodiy hal qilish imkonini beradi."
      }
    ],
    questions: [
      {
        id: 'ins-q1',
        type: 'multiple_choice',
        question: 'What metaphor does the speaker use to describe playing an instrument\'s effect on the brain?',
        options: [
          'A gentle nap in a hammock',
          'The brain\'s equivalent of a full-body workout',
          'Drinking an energy drink',
          'Reading a dictionary'
        ],
        answerIndex: 1,
        explanationUz: "Spiker musiqa asbobi chalishni miya uchun butun tanani qamrab oluvchi sport mashqiga (full-body workout) o'xshatadi."
      },
      {
        id: 'ins-q2',
        type: 'multiple_choice',
        question: 'Which three sensory and motor systems are coordinated simultaneously when playing an instrument?',
        options: [
          'Taste, smell, and digestion',
          'Visual (reading notes), auditory (listening), and motor (fine finger movements)',
          'Breathing, running, and sleeping',
          'Balance, jumping, and shouting'
        ],
        answerIndex: 1,
        explanationUz: "Musiqachi notani ko'radi (visual), eshitadi (auditory) va barmoqlari bilan nozik harakat qiladi (motor)."
      },
      {
        id: 'ins-q3',
        type: 'true_false',
        question: 'True or False: Musicians often show stronger problem-solving capabilities because information travels faster between both hemispheres.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Corpus Callosum mustahkamlangani sababli ma'lumot ikki yarim shar o'rtasida tezroq almashadi."
      },
      {
        id: 'ins-q4',
        type: 'vocabulary',
        question: 'What is the "Corpus Callosum"?',
        options: [
          'A special type of classical acoustic guitar',
          'The dense bridge of nerve fibers connecting the left and right hemispheres of the brain',
          'A bone located in the inner ear',
          'A famous musical orchestra in Vienna'
        ],
        answerIndex: 1,
        explanationUz: "Corpus Callosum — chap va o'ng miya yarim sharlarini bog'lab turuvchi asab tolalari ko'prigidir."
      },
      {
        id: 'ins-q5',
        type: 'multiple_choice',
        question: 'What does the word "Simultaneously" mean?',
        options: [
          'Happening one after another very slowly',
          'At the exact same time',
          'Never occurring at all',
          'Only in cold winter seasons'
        ],
        answerIndex: 1,
        explanationUz: "\"Simultaneously\" — aynan bir vaqtning o'zida, parallel ro'y berish demakdir."
      },
      {
        id: 'ins-q6',
        type: 'true_false',
        question: 'True or False: Listening to music and actually playing an instrument produce identical levels of neural activation in brain scans.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 1,
        explanationUz: "Noto'g'ri (False). Eshitish faqat ayrim sohalarni faollashtirsa, chalish esa butun miyani harakatga keltiradi."
      }
    ]
  },
  {
    id: 'podcast-power-reading',
    title: 'The Power of Reading Books Daily',
    channel: 'TED-Ed & BBC Learning English',
    youtubeId: '7rX_J2rNhyE',
    level: 'B1',
    duration: '5:10',
    topic: 'Shaxsiy rivojlanish, Kitobxonlik va Empatiya',
    description: 'Har kuni atigi 15-20 daqiqa kitob o\'qish miyamizni, so\'z boyligimizni va boshqa insonlarni tushunish (empatiya) qobiliyatimizni qanday o\'zgartiradi? Ilmiy dalillar bilan tanishing.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    summaryUz: "Kitob o'qish inson miyasida boshqa bir olamni qayta gavdalantiradi. Tadqiqotlar shuni ko'rsatadiki, badiiy asarlar o'qish insonlarda empatiya (boshqalarning dardini his qilish), stress darajasini 68% ga kamaytirish va so'z boyligini muntazam boyitish xususiyatiga ega.",
    discussionPromptUz: "Siz oxirgi marta qaysi kitobni o'qib tugatdingiz? Kitob o'qish sizga xotirjamlik beradimi yoki diqqatni jamlash qiyinmi?",
    keyVocabulary: [
      {
        word: 'Empathy',
        partOfSpeech: 'noun',
        meaningUz: 'Empatiya, birovning his-tuyg\'usini tushunish',
        example: 'Reading literature nurtures deep empathy for diverse human perspectives.'
      },
      {
        word: 'Vocabulary acquisition',
        partOfSpeech: 'noun phrase',
        meaningUz: 'Yangi so\'zlarni o\'zlashtirish',
        example: 'Daily reading is the most organic method for vocabulary acquisition.'
      },
      {
        word: 'Neuroplasticity',
        partOfSpeech: 'noun',
        meaningUz: 'Miyaning yangi tajribalar asosida o\'zgarish qobiliyati',
        example: 'Reading rewires brain circuits through neuroplasticity.'
      },
      {
        word: 'Immerse',
        partOfSpeech: 'verb',
        meaningUz: 'Sho\'ng\'imoq, butunlay berilmoq',
        example: 'When you immerse yourself in a story, stress levels drop rapidly.'
      },
      {
        word: 'Cognitive longevity',
        partOfSpeech: 'noun phrase',
        meaningUz: 'Aqliy faollikning keksalikda ham saqlanib qolishi',
        example: 'Lifelong readers enjoy significantly better cognitive longevity.'
      }
    ],
    shadowingPhrases: [
      {
        id: 'red-sh-1',
        text: 'Reading for just six minutes a day can reduce stress by up to sixty-eight percent.',
        translationUz: "Kuniga atigi olti daqiqa kitob o'qish stressni oltmish sakkiz foizgacha kamaytirishi mumkin.",
        startTime: 20,
        pronunciationTipUz: "\"reduce stress by up to\" qismini ravon va ravshan talaffuz qiling."
      },
      {
        id: 'red-sh-2',
        text: 'Fiction allows you to step directly into another person\'s shoes and experience their world.',
        translationUz: "Badiiy adabiyot boshqa insonning o'rniga kirish va uning olamini his qilish imkonini beradi.",
        startTime: 70,
        pronunciationTipUz: "\"Step into another person's shoes\" mashhur ingliz iborasidir (o'zini birovning o'rniga qo'yish)."
      },
      {
        id: 'red-sh-3',
        text: 'Words encountered in real literary contexts are remembered far longer than isolated flashcards.',
        translationUz: "Haqiqiy adabiy kontekstda uchragan so'zlar alohida kartochkalarga qaraganda ancha uzoq esda qoladi.",
        startTime: 140,
        pronunciationTipUz: "\"Literary contexts\" ('LIT-er-er-ee KON-texts') urg'ulariga e'tibor bering."
      }
    ],
    summaryExercise: {
      title: 'Kitob o\'qishning kuchi bo\'yicha xulosa',
      instructionUz: 'Bo\'sh qoldirilgan joylarga mos so\'zlarni tanlang:',
      template: 'Daily reading provides immense psychological benefits. Immersing oneself in a captivating story can drastically lower {{gap_1}} levels. Furthermore, reading literary fiction builds interpersonal {{gap_2}}, as readers understand diverse viewpoints. It expands your passive and active {{gap_3}}, while stimulating {{gap_4}} to keep your brain agile throughout life.',
      gaps: [
        {
          id: 'gap_1',
          correctWord: 'stress',
          options: ['stress', 'wealth', 'vision', 'weight'],
          hintUz: 'Asabiy zo\'riqish va charchoq'
        },
        {
          id: 'gap_2',
          correctWord: 'empathy',
          options: ['empathy', 'jealousy', 'anger', 'arrogance'],
          hintUz: 'Boshqalarning hissini tushunish va hamdardlik'
        },
        {
          id: 'gap_3',
          correctWord: 'vocabulary',
          options: ['vocabulary', 'furniture', 'clothing', 'diet'],
          hintUz: 'So\'z boyligi va nutq imkoniyati'
        },
        {
          id: 'gap_4',
          correctWord: 'neuroplasticity',
          options: ['neuroplasticity', 'pollution', 'gravity', 'humidity'],
          hintUz: 'Miyaning yangi neyron aloqalarini shakllantirishi'
        }
      ]
    },
    transcript: [
      {
        id: 'red-1',
        startTime: 0,
        endTime: 12,
        speaker: 'Narrator',
        text: 'In an age dominated by endless smartphone notifications, when was the last time you read a physical book?',
        translationUz: "Smartfon bildirishnomalari hukmron bo'lgan davrda oxirgi marta qachon qo'lingizga haqiqiy kitob olgan edingiz?"
      },
      {
        id: 'red-2',
        startTime: 13,
        endTime: 26,
        speaker: 'Narrator',
        text: 'Scientific research shows that reading for just six minutes can reduce heart rate and muscular tension.',
        translationUz: "Ilmiy tadqiqotlar shuni ko'rsatadiki, atigi 6 daqiqa o'qish yurak urishi va mushak zo'riqishini pasaytiradi."
      },
      {
        id: 'red-3',
        startTime: 27,
        endTime: 40,
        speaker: 'Narrator',
        text: 'In fact, University of Sussex researchers found it reduces stress more effectively than listening to music or taking a walk.',
        translationUz: "Aslida, Sasseks universiteti tadqiqotchilari bu musiqa tinglash yoki sayr qilishdan ko'ra stressni yaxshiroq kamaytirishini aniqladilar."
      },
      {
        id: 'red-4',
        startTime: 41,
        endTime: 56,
        speaker: 'Narrator',
        text: 'Beyond relaxation, reading fiction activates neural circuits that mirror real-life human interactions.',
        translationUz: "Xotirjamlikdan tashqari, badiiy asarlar hayotiy muloqotni aks ettiruvchi neyron tarmoqlarini faollashtiradi."
      },
      {
        id: 'red-5',
        startTime: 57,
        endTime: 75,
        speaker: 'Narrator',
        text: 'This develops what psychologists call the \'Theory of Mind\'—the capacity to understand others\' beliefs and emotions.',
        translationUz: "Bu psixologlar «Aql nazariyasi» deb ataydigan boshqalarning his-tuyg'ularini tushunish iqtidorini rivojlantiradi."
      }
    ],
    questions: [
      {
        id: 'red-q1',
        type: 'multiple_choice',
        question: 'According to researchers at the University of Sussex, how much can reading for just 6 minutes lower stress?',
        options: ['Up to 15%', 'Up to 35%', 'Up to 68%', '100% permanently'],
        answerIndex: 2,
        explanationUz: "Tadqiqotda atigi 6 daqiqa o'qish stress darajasini 68% gacha pasaytirishi isbotlangan."
      },
      {
        id: 'red-q2',
        type: 'multiple_choice',
        question: 'What is "Theory of Mind" developed by reading literary fiction?',
        options: [
          'The ability to memorize random telephone numbers',
          'The capacity to empathize with and understand others\' emotions, motives, and mental states',
          'A physics theory about gravity',
          'A technique to read books in your sleep'
        ],
        answerIndex: 1,
        explanationUz: "«Theory of Mind» — insonning boshqa shaxslarning ichki tuyg'ulari va niyatlarini tushuna olish qobiliyatidir."
      },
      {
        id: 'red-q3',
        type: 'true_false',
        question: 'True or False: Reading words inside engaging stories helps you remember them longer than memorizing isolated word lists.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Kontekst ichida o'rganilgan so'zlar miyada ancha chuqur va uzoq saqlanadi."
      },
      {
        id: 'red-q4',
        type: 'vocabulary',
        question: 'What does the verb "Immerse" mean in the phrase "immerse yourself in a story"?',
        options: [
          'To throw a book into cold water',
          'To deeply involve or absorb oneself completely in an experience',
          'To quickly glance at the back cover',
          'To sell a book online'
        ],
        answerIndex: 1,
        explanationUz: "\"Immerse oneself\" — biror faoliyat yoki kitob olamiga butun borlig'i bilan sho'ng'imoq, berilib ketmoq."
      },
      {
        id: 'red-q5',
        type: 'multiple_choice',
        question: 'What does the idiom "step into another person\'s shoes" mean?',
        options: [
          'To borrow someone\'s expensive sneakers without permission',
          'To imagine oneself in another person\'s situation and understand their perspective',
          'To become a shoemaker',
          'To walk 10,000 steps every morning'
        ],
        answerIndex: 1,
        explanationUz: "\"Step into someone's shoes\" — o'zini boshqa odamning o'rniga qo'yib ko'rmoq degan mashhur ibora."
      },
      {
        id: 'red-q6',
        type: 'true_false',
        question: 'True or False: The podcast states that reading physical paper books causes more screen fatigue than tablets.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 1,
        explanationUz: "Noto'g'ri (False). Aksincha, qog'oz kitoblar ko'z zo'riqishi va charchoqni kamaytirishi qayd etilgan."
      }
    ]
  },
  {
    id: 'podcast-why-we-dream',
    title: 'Why Do We Dream?',
    channel: 'TED-Ed (Amy Adkins)',
    youtubeId: '2W85Dwxx218',
    level: 'B2',
    duration: '5:20',
    topic: 'Psixologiya, Tushlar va Ong osti',
    description: 'Nega biz tush ko\'ramiz? Tushlar shunchaki tasodifiy neyron chaqnashlarimi yoki ularning chuqur psixologik va evolyutsion vazifasi bormi? 5 ta asosiy ilmiy gipoteza bilan tanishing.',
    coverImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    summaryUz: "Tushlar insoniyatning eng qadimiy sirlaridan biridir. Zamonaviy fan tushlarning bir necha vazifasini o'rganmoqda: 1) Emotsional terapiya (stressli xotiralarni xavfsiz qayta ishlash); 2) Xavf-xatarga tayyorgarlik (Fight or Flight simulyatsiyasi); 3) Ijodiy muammolar yechimi (ong cheklovlarisiz yangi g'oyalarni bog'lash).",
    discussionPromptUz: "Siz eslab qolgan eng qiziqarli yoki g'alati tushingiz qaysi? Tushlar kelajakni bildiradi deb o'ylaysizmi yoki shunchaki xotiralar aksi?",
    keyVocabulary: [
      {
        word: 'Hypothesis',
        partOfSpeech: 'noun',
        meaningUz: 'Gipoteza, ilmiy taxmin',
        example: 'Several scientific hypotheses attempt to explain the evolutionary purpose of dreaming.'
      },
      {
        word: 'REM Sleep',
        partOfSpeech: 'noun phrase',
        meaningUz: 'Ko\'z tez harakatlanadigan chuqur tush fazasi',
        example: 'Most vivid and story-like dreams occur during REM (Rapid Eye Movement) sleep.'
      },
      {
        word: 'Consensus',
        partOfSpeech: 'noun',
        meaningUz: 'Yagona kelishuv, yakdil xulosa',
        example: 'There is still no universal consensus on the exact singular function of dreams.'
      },
      {
        word: 'De-escalate',
        partOfSpeech: 'verb',
        meaningUz: 'Pasaytirmoq, yumshatmoq',
        example: 'Dreaming helps de-escalate painful emotional charges attached to memories.'
      },
      {
        word: 'Unconstrained',
        partOfSpeech: 'adjective',
        meaningUz: 'Cheklanmagan, erkin',
        example: 'In dreams, the mind makes unconstrained connections between disparate concepts.'
      }
    ],
    shadowingPhrases: [
      {
        id: 'drm-sh-1',
        text: 'Do dreams serve a true biological purpose, or are they mere byproducts of sleep?',
        translationUz: "Tushlar haqiqiy biologik maqsadga xizmat qiladimi yoki ular uyquning shunchaki yon mahsulotimi?",
        startTime: 12,
        pronunciationTipUz: "\"biological purpose\" va \"byproducts\" urg'ularini aniq ifodalang."
      },
      {
        id: 'drm-sh-2',
        text: 'One theory suggests dreams act as overnight therapy, taking the painful edge off difficult memories.',
        translationUz: "Bir nazariyaga ko'ra, tushlar qiyin xotiralarning og'riqli tomonini yumshatuvchi tungi terapiya vazifasini o'taydi.",
        startTime: 68,
        pronunciationTipUz: "\"Taking the painful edge off\" iborasi 'og'riqni kamaytirish' ma'nosini bildiradi."
      },
      {
        id: 'drm-sh-3',
        text: 'Unconstrained by conscious logic, your sleeping brain creates radical creative associations.',
        translationUz: "Ongli mantiq bilan cheklanmagan holda, uxlayotgan miyangiz g'ayrioddiy ijodiy bog'liqliklarni yaratadi.",
        startTime: 145,
        pronunciationTipUz: "\"Unconstrained by conscious logic\" jumlasi intonatsiyasini yuqoridan pastga ravon tushiring."
      }
    ],
    summaryExercise: {
      title: 'Tushlar nazariyasi bo\'yicha xulosa',
      instructionUz: 'Matndagi tushirib qoldirilgan so\'zlarni kontekstga moslab to\'ldiring:',
      template: 'Scientists have yet to reach a single {{gap_1}} regarding why we dream. One leading idea is that dreaming provides overnight {{gap_2}}, detaching raw emotions from traumatic memories. Another theory posits that dreams simulate real-world {{gap_3}} to train our survival instincts. Finally, during sleep, the mind makes {{gap_4}} associations that foster creative breakthroughs.',
      gaps: [
        {
          id: 'gap_1',
          correctWord: 'consensus',
          options: ['consensus', 'airplane', 'telescope', 'ticket'],
          hintUz: 'Yagona umumiy kelishuv, ilmiy to\'xtam'
        },
        {
          id: 'gap_2',
          correctWord: 'therapy',
          options: ['therapy', 'infection', 'punishment', 'warfare'],
          hintUz: 'Ruhni davolash, taskin beruvchi jarayon'
        },
        {
          id: 'gap_3',
          correctWord: 'threats',
          options: ['threats', 'parties', 'holidays', 'desserts'],
          hintUz: 'Xavf-xatarlar, tahdidlar'
        },
        {
          id: 'gap_4',
          correctWord: 'unconstrained',
          options: ['unconstrained', 'forbidden', 'impossible', 'silent'],
          hintUz: 'Mantiqiy chegaralanmagan, erkin'
        }
      ]
    },
    transcript: [
      {
        id: 'drm-1',
        startTime: 0,
        endTime: 10,
        speaker: 'Narrator',
        text: 'Every night, we enter an alternate reality filled with bizarre storylines and vivid sensations.',
        translationUz: "Har kecha biz g'alati voqealar va yorqin hislarga to'la o'zgacha bir olamga qadam qo'yamiz."
      },
      {
        id: 'drm-2',
        startTime: 11,
        endTime: 23,
        speaker: 'Narrator',
        text: 'Do dreams actually mean something, or are they random neural firings with no evolutionary purpose?',
        translationUz: "Tushlar chindan ham biror ma'noga egami yoki ular evolyutsion maqsadsiz tasodifiy neyron chaqnashlarimi?"
      },
      {
        id: 'drm-3',
        startTime: 24,
        endTime: 38,
        speaker: 'Narrator',
        text: 'The first major hypothesis suggests dreams fulfill our emotional regulation and psychological healing.',
        translationUz: "Birinchi asosiy gipoteza tushlar emotsional boshqaruv va ruhiy tiklanish vazifasini bajarishini aytadi."
      },
      {
        id: 'drm-4',
        startTime: 39,
        endTime: 55,
        speaker: 'Narrator',
        text: 'During REM sleep, stress-related neurotransmitters are quieted, allowing the brain to process traumatic memories safely.',
        translationUz: "REM uyqusi paytida stress bilan bog'liq moddalar pasayadi va miya og'riqli xotiralarni xavfsiz qayta ishlaydi."
      },
      {
        id: 'drm-5',
        startTime: 56,
        endTime: 74,
        speaker: 'Narrator',
        text: 'Another theory suggests dreams simulate threats, rehearsing our fight-or-flight instincts against imaginary predators.',
        translationUz: "Boshqa bir nazariya esa tushlar xavf-xatarni simulyatsiya qilib, omon qolish instinktlarimizni mashq qildirishini ta'kidlaydi."
      }
    ],
    questions: [
      {
        id: 'drm-q1',
        type: 'multiple_choice',
        question: 'Which phase of sleep is most commonly associated with vivid, immersive dreams?',
        options: ['REM (Rapid Eye Movement) sleep', 'Light Stage 1 sleep', 'Dreamless sleep', 'Coma'],
        answerIndex: 0,
        explanationUz: "Eng jonli va esda qolarli tushlar aynan REM (Rapid Eye Movement) fazasida ko'riladi."
      },
      {
        id: 'drm-q2',
        type: 'multiple_choice',
        question: 'Why does dreaming act as emotional therapy according to one prominent theory?',
        options: [
          'Because stress chemicals like noradrenaline are suppressed during REM sleep',
          'Because dreams always show happy endings',
          'Because you forget all your friends',
          'Because dreams make you sleep longer'
        ],
        answerIndex: 0,
        explanationUz: "Tush paytida stress gormoni pasayadi va miya noxush xotiralarni osoyishta xavfsiz qayta ishlaydi."
      },
      {
        id: 'drm-q3',
        type: 'true_false',
        question: 'True or False: Scientists have reached an absolute single consensus on why we dream.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 1,
        explanationUz: "Noto'g'ri (False). Matnda yakuniy bitta konsensus yo'qligi, bir necha yetakchi nazariyalar borligi ta'kidlangan."
      },
      {
        id: 'drm-q4',
        type: 'vocabulary',
        question: 'What does the word "Hypothesis" mean in scientific context?',
        options: [
          'A proven fact beyond all doubt',
          'A proposed explanation or theory open for testing',
          'A medical surgery',
          'A type of ancient tablet'
        ],
        answerIndex: 1,
        explanationUz: "Gipoteza (hypothesis) — sinov va tadqiqot talab qiladigan ilmiy taxmin/nazariya."
      },
      {
        id: 'drm-q5',
        type: 'multiple_choice',
        question: 'How can dreaming assist in creative problem solving?',
        options: [
          'By making connections between completely unconstrained ideas',
          'By making the person forget the problem',
          'By giving exact lottery numbers',
          'By copying other people\'s homework'
        ],
        answerIndex: 0,
        explanationUz: "Tushda mantiqiy cheklovlar bo'lmagani uchun miya kutilmagan g'oyalar o'rtasida erkin bog'liqlik hosil qiladi."
      },
      {
        id: 'drm-q6',
        type: 'true_false',
        question: 'True or False: Most vivid and memorable dreams occur during REM (Rapid Eye Movement) sleep.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Eng yorqin tushlar aynan REM fazasida kechadi."
      }
    ]
  },
  {
    id: 'podcast-procrastinator',
    title: 'Inside the Mind of a Master Procrastinator',
    channel: 'TED (Tim Urban)',
    youtubeId: 'arj7oStGLkU',
    level: 'B2',
    duration: '14:00',
    topic: 'Vaqtni boshqarish, Psixologiya va Prokrastinatsiya',
    description: 'Tarixdagi eng ko\'p ko\'rilgan (60+ million) va eng kulgili TED nutq! Tim Urban nima uchun biz doim muhim ishlarni kechiktirishimizni va «Instant Gratification Monkey» miyamizni qanday boshqarishini tushuntiradi.',
    coverImage: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=600&q=80',
    summaryUz: "Tim Urban prokrastinatorning miyasida uchta qahramon borligini tushuntiradi: 1) Rational Decision-Maker (Mantiqiy qaror qabul qiluvchi); 2) Instant Gratification Monkey (Darhol rohatlanishni xohlovchi maymuncha); 3) Panic Monster (Vahima maxluqi). Muddat (deadline) yaqinlashgandagina Panic Monster uyg'onadi va maymunni haydab chiqaradi. Ammo muddati yo'q orzularimiz (kitob yozish, biznes boshlash) uchun Panic Monster hech qachon uyg'onmaydi va ularni o'zimiz qo'lga olishimiz kerak.",
    discussionPromptUz: "Siz ham ishlaringizni oxirgi muddatgacha kechiktirasizmi? «Instant Gratification Monkey» sizni qanday chalg'itadi (Instagram, Reels, o'yinlar)?",
    keyVocabulary: [
      {
        word: 'Procrastination',
        partOfSpeech: 'noun',
        meaningUz: 'Ishlarni keyinga qoldirish, paysallash',
        example: 'Procrastination often leads to extreme last-minute stress and compromised quality.'
      },
      {
        word: 'Instant gratification',
        partOfSpeech: 'noun phrase',
        meaningUz: 'Bir lahzalik lazzat / tezkor qanoatlanish',
        example: 'Social media apps exploit our human desire for instant gratification.'
      },
      {
        word: 'Rational',
        partOfSpeech: 'adjective',
        meaningUz: 'Aqlga muvofiq, mantiqiy',
        example: 'The rational decision-maker wants to visualize long-term achievements.'
      },
      {
        word: 'Deadline',
        partOfSpeech: 'noun',
        meaningUz: 'Topshirishning oxirgi qat\'iy muddati',
        example: 'Without a clear deadline, important life ambitions get delayed indefinitely.'
      },
      {
        word: 'Epiphany',
        partOfSpeech: 'noun',
        meaningUz: 'To\'satdan kelgan chuqur anglash, kashfiyot',
        example: 'He had an epiphany that life is too short to leave unfulfilled dreams.'
      }
    ],
    shadowingPhrases: [
      {
        id: 'prc-sh-1',
        text: 'The Instant Gratification Monkey only cares about two things: easy and fun.',
        translationUz: "Darhol rohatlanuvchi maymun faqat ikkita narsa haqida qayg'uradi: oson va qiziqarli bo'lishi.",
        startTime: 215,
        pronunciationTipUz: "\"easy and fun\" so'zlarini kulgili va aniq intonatsiya bilan ta'kidlang."
      },
      {
        id: 'prc-sh-2',
        text: 'The Panic Monster is dormant most of the time, but wakes up when a deadline gets too close.',
        translationUz: "Vahima Maxluqi ko'p vaqt uxlaydi, lekin oxirgi muddat haddan tashqari yaqinlashganda uyg'onadi.",
        startTime: 330,
        pronunciationTipUz: "\"dormant\" ('DOR-munt') — uxlab yotgan, nofaol holat degani."
      },
      {
        id: 'prc-sh-3',
        text: 'The most dangerous kind of procrastination is the one that happens without any deadlines.',
        translationUz: "Prokrastinatsiyaning eng xavfli turi — bu hech qanday muddatsiz ro'y beradiganidir.",
        startTime: 620,
        pronunciationTipUz: "\"most dangerous kind\" urg'usini jiddiy va salobatli tonda ayting."
      }
    ],
    summaryExercise: {
      title: 'Prokrastinatsiya xulosasi',
      instructionUz: 'Nutq mazmuniga qarab bo\'shliqlarga to\'g\'ri so\'zni joylashtiring:',
      template: 'In a procrastinator\'s brain, the Rational Decision-Maker coexists with the Instant Gratification {{gap_1}}. The monkey insists on doing whatever is easy and fun. Everything changes when a strict {{gap_2}} approaches, awakening the fearsome {{gap_3}} Monster. However, for non-deadline ambitions like self-improvement, the monster never awakens, causing long-term silent {{gap_4}}.',
      gaps: [
        {
          id: 'gap_1',
          correctWord: 'monkey',
          options: ['monkey', 'lion', 'elephant', 'rabbit'],
          hintUz: 'Darhol rohatlanishni xohlovchi ramziy jonivor'
        },
        {
          id: 'gap_2',
          correctWord: 'deadline',
          options: ['deadline', 'vacation', 'birthday', 'weather'],
          hintUz: 'Topshirishning oxirgi muddati'
        },
        {
          id: 'gap_3',
          correctWord: 'panic',
          options: ['panic', 'sleeping', 'dancing', 'cooking'],
          hintUz: 'Vahima, shoshilinch xavotir'
        },
        {
          id: 'gap_4',
          correctWord: 'procrastination',
          options: ['procrastination', 'celebration', 'perfection', 'applause'],
          hintUz: 'Muntazam kechiktirish va orqaga surish'
        }
      ]
    },
    transcript: [
      {
        id: 'prc-1',
        startTime: 0,
        endTime: 15,
        speaker: 'Tim Urban',
        text: 'So in college, I was a government major, which means I had to write a lot of papers.',
        translationUz: "Kollejda men davlat boshqaruvi yo'nalishida o'qirdim, bu esa ko'plab ilmiy maqolalar yozishim kerakligini anglatardi."
      },
      {
        id: 'prc-2',
        startTime: 16,
        endTime: 32,
        speaker: 'Tim Urban',
        text: 'When a normal person has to write a paper, they spread the work out evenly over several weeks.',
        translationUz: "Oddiy odam maqola yozishi kerak bo'lganda, ular ishni bir necha haftaga teng taqsimlaydilar."
      },
      {
        id: 'prc-3',
        startTime: 33,
        endTime: 50,
        speaker: 'Tim Urban',
        text: 'My plan was always like that, but then the work just wouldn\'t get done until the very last night.',
        translationUz: "Mening rejam ham doim shunday bo'lardi, lekin ish faqat eng oxirgi kechagacha surilib ketaverardi."
      },
      {
        id: 'prc-4',
        startTime: 200,
        endTime: 225,
        speaker: 'Tim Urban',
        text: 'Both brains have a Rational Decision-Maker, but the procrastinator\'s brain also has an Instant Gratification Monkey.',
        translationUz: "Ikkala miyada ham aqliy qaror qabul qiluvchi bor, lekin prokrastinatorda qo'shimcha tezkor rohatlanuvchi maymun ham bor."
      },
      {
        id: 'prc-5',
        startTime: 320,
        endTime: 345,
        speaker: 'Tim Urban',
        text: 'The only thing that terrifies the monkey is the Panic Monster, who wakes up whenever a deadline looms.',
        translationUz: "Maymunni qo'rqita oladigan yagona narsa — bu muddat yaqinlashganda uyg'onadigan Vahima Maxluqidir."
      }
    ],
    questions: [
      {
        id: 'prc-q1',
        type: 'multiple_choice',
        question: 'According to Tim Urban, what does the "Instant Gratification Monkey" care about?',
        options: [
          'Long-term career planning and retirement funds',
          'Only what is easy and fun right now',
          'Doing difficult homework with high precision',
          'Waking up at 5 AM every single day'
        ],
        answerIndex: 1,
        explanationUz: "Maymun faqat ayni daqiqada nima oson va ko'ngilochar bo'lsa (easy and fun), shuni talab qiladi."
      },
      {
        id: 'prc-q2',
        type: 'multiple_choice',
        question: 'What is the only entity that can scare away the Instant Gratification Monkey?',
        options: ['A cup of strong coffee', 'The Panic Monster (when deadlines arrive)', 'A library card', 'An alarm clock'],
        answerIndex: 1,
        explanationUz: "Maymunni faqat qat'iy muddat kelganda uyg'onadigan Vahima Maxluqi (Panic Monster) quvib yubora oladi."
      },
      {
        id: 'prc-q3',
        type: 'true_false',
        question: 'True or False: Tim Urban argues that non-deadline procrastination (e.g. dreams, relationships, health) is actually far more harmful than deadline-based procrastination.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Muddati yo'q narsalar (sog'liq, shaxsiy orzular)da Panic Monster uyg'onmaydi, shuning uchun inson butun umr kechiktirishi mumkin."
      },
      {
        id: 'prc-q4',
        type: 'vocabulary',
        question: 'What does "Instant Gratification" mean?',
        options: [
          'Immediate pleasure and satisfaction without delay',
          'Waiting patiently for 10 years for a degree',
          'A painful medical shot',
          'A discount coupon at a store'
        ],
        answerIndex: 0,
        explanationUz: "\"Instant gratification\" — natijani kutmasdan darhol lazzat va qanoat olish xohishidir."
      },
      {
        id: 'prc-q5',
        type: 'multiple_choice',
        question: 'Why did Tim Urban show a visual grid of "Life in Weeks" at the end of his talk?',
        options: [
          'To sell paper calendars',
          'To show that human life is finite (about 4,000 weeks) and we cannot afford to postpone our true dreams',
          'To teach arithmetic multiplication',
          'To show how many weeks there are in a leap year'
        ],
        answerIndex: 1,
        explanationUz: "Inson umri taxminan 4,000 haftadan iborat ekanini va qimmatli vaqtni bekorga kechiktirishga haqqimiz yo'qligini eslatish uchun."
      },
      {
        id: 'prc-q6',
        type: 'true_false',
        question: 'True or False: Tim Urban believes there are people in the world who are 100% immune to procrastination.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 1,
        explanationUz: "Noto'g'ri (False). U hamma insonlar u yoki bu darajada prokrastinatsiyaga moyil ekanini aytadi."
      }
    ]
  }
];

export const getPodcastById = (id: string): PodcastItem | undefined => {
  return PODCASTS_DATA.find((p) => p.id === id);
};
