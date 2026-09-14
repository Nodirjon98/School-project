import { KaraokeSong } from '../types';

export const KARAOKE_SONGS: KaraokeSong[] = [
  {
    id: 'song-viva-la-vida',
    title: 'Viva La Vida',
    artist: 'Coldplay',
    youtubeId: 'dvgZkm1xWPE',
    level: 'B2',
    difficulty: 'Advanced',
    coverImage: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80',
    genre: 'Alternative Rock',
    theme: 'Tarix, vaqt o\'tishi, kuch-qudrat va insoniy taqdir',
    description: 'Boy so\'z boyligi va tarixiy metaforalarga boy jahon xiti. B2 va C1 darajasidagi o\'quvchilar uchun qiyin va qiziqarli tinglash mashqi.',
    totalGaps: 16,
    grammarPoints: [
      {
        title: 'Used to + Verb (O\'tmishdagi odat yoki holat)',
        ruleUz: 'O\'tmishda muntazam sodir bo\'lgan, lekin hozirda mavjud bo\'lmagan holat yoki harakatlarni ifodalash uchun ishlatiladi.',
        exampleFromSong: 'I used to rule the world / Sweep the streets I used to own / I used to roll the dice'
      },
      {
        title: 'Hypothetical "Would" in Past Narration',
        ruleUz: 'O\'tmishdagi qat\'iy kutilgan harakatlar yoki shartli voqelikni bayon qilishda "would + verb" qo\'llanadi.',
        exampleFromSong: 'Seas would rise when I gave the word / Listen as the crowd would sing'
      },
      {
        title: 'Passive & Inversion Structure',
        ruleUz: 'Poeziya va musiqada ta\'sirchanlikni oshirish uchun passiv va o\'rin almashish konstruksiyalaridan foydalaniladi.',
        exampleFromSong: 'Next the walls were closed on me'
      }
    ],
    lines: [
      {
        id: 'viva-1',
        startTime: 14,
        endTime: 21,
        lineText: 'I used to rule the world',
        targetWord: 'rule',
        options: ['rule', 'own', 'change', 'save'],
        translationUz: "Bir paytlar men dunyoni boshqarardim"
      },
      {
        id: 'viva-2',
        startTime: 22,
        endTime: 28,
        lineText: 'Seas would rise when I gave the word',
        targetWord: 'rise',
        options: ['rise', 'fall', 'calm', 'freeze'],
        translationUz: "Buyruq berganimda dengizlar to'lqinlanar edi"
      },
      {
        id: 'viva-3',
        startTime: 29,
        endTime: 36,
        lineText: 'Now in the morning I sleep alone',
        targetWord: 'alone',
        options: ['alone', 'late', 'peaceful', 'soundly'],
        translationUz: "Endi esa tongda yolg'iz uxlayman"
      },
      {
        id: 'viva-4',
        startTime: 37,
        endTime: 44,
        lineText: 'Sweep the streets I used to own',
        targetWord: 'streets',
        options: ['streets', 'castles', 'halls', 'kingdoms'],
        translationUz: "Bir paytlar o'zimga tegishli bo'lgan ko'chalarni supuraman"
      },
      {
        id: 'viva-5',
        startTime: 45,
        endTime: 51,
        lineText: 'I used to roll the dice',
        targetWord: 'dice',
        options: ['dice', 'wheel', 'ball', 'cards'],
        translationUz: "Men taqdir oshig'ini (zar) tashlardim"
      },
      {
        id: 'viva-6',
        startTime: 52,
        endTime: 59,
        lineText: 'Feel the fear in my enemy\'s eyes',
        targetWord: 'fear',
        options: ['fear', 'anger', 'doubt', 'pain'],
        translationUz: "Dushmanlarimning ko'zlarida qo'rquvni his qilardim"
      },
      {
        id: 'viva-7',
        startTime: 60,
        endTime: 66,
        lineText: 'Listen as the crowd would sing',
        targetWord: 'sing',
        options: ['sing', 'shout', 'cheer', 'cry'],
        translationUz: "Olomon kuylayotganini tinglardim"
      },
      {
        id: 'viva-8',
        startTime: 67,
        endTime: 74,
        lineText: 'Now the old king is dead, long live the king',
        targetWord: 'dead',
        options: ['dead', 'gone', 'lost', 'crowned'],
        translationUz: "Endi qari qirol o'ldi, yashasin yangi qirol"
      },
      {
        id: 'viva-9',
        startTime: 75,
        endTime: 81,
        lineText: 'One minute I held the key',
        targetWord: 'key',
        options: ['key', 'crown', 'sword', 'power'],
        translationUz: "Bir daqiqa avval qo'limda kalit bor edi"
      },
      {
        id: 'viva-10',
        startTime: 82,
        endTime: 89,
        lineText: 'Next the walls were closed on me',
        targetWord: 'closed',
        options: ['closed', 'fallen', 'built', 'locked'],
        translationUz: "Keyingi lahzada devorlar ustimga yopildi"
      },
      {
        id: 'viva-11',
        startTime: 90,
        endTime: 97,
        lineText: 'And I discovered that my castles stand',
        targetWord: 'castles',
        options: ['castles', 'kingdoms', 'towers', 'palaces'],
        translationUz: "Va anglab yetdimki, mening qasrlarim"
      },
      {
        id: 'viva-12',
        startTime: 98,
        endTime: 105,
        lineText: 'Upon pillars of salt and pillars of sand',
        targetWord: 'sand',
        options: ['sand', 'stone', 'gold', 'glass'],
        translationUz: "Tuz va qum ustunlari ustida turgan ekan"
      },
      {
        id: 'viva-13',
        startTime: 106,
        endTime: 113,
        lineText: 'I hear Jerusalem bells a-ringing',
        targetWord: 'bells',
        options: ['bells', 'chimes', 'horns', 'drums'],
        translationUz: "Quddus qo'ng'iroqlari chalinayotganini eshityapman"
      },
      {
        id: 'viva-14',
        startTime: 114,
        endTime: 121,
        lineText: 'Roman cavalry choirs are singing',
        targetWord: 'choirs',
        options: ['choirs', 'soldiers', 'knights', 'generals'],
        translationUz: "Rim otliq qo'shinlarining xorlari kuylamoqda"
      },
      {
        id: 'viva-15',
        startTime: 122,
        endTime: 129,
        lineText: 'Be my mirror, my sword and shield',
        targetWord: 'shield',
        options: ['shield', 'armor', 'spear', 'guard'],
        translationUz: "Mening ko'zgum, qilichim va qalqonim bo'l"
      },
      {
        id: 'viva-16',
        startTime: 130,
        endTime: 138,
        lineText: 'My missionaries in a foreign field',
        targetWord: 'foreign',
        options: ['foreign', 'distant', 'battle', 'empty'],
        translationUz: "Begona dalalardagi mening elchilarim"
      }
    ],
    quizQuestions: [
      {
        id: 'viva-q1',
        type: 'idiom',
        question: 'What does the idiom "roll the dice" symbolize in the song?',
        options: [
          'Playing a friendly board game',
          'Taking high risks and gambling with fate/power',
          'Throwing trash onto the streets',
          'Losing money at a fair'
        ],
        answerIndex: 1,
        explanationUz: "\"Roll the dice\" (zar tashlash) iborasi taqdir bilan tavakkal qilish, katta xatarli qarorlar qabul qilishni anglatadi."
      },
      {
        id: 'viva-q2',
        type: 'comprehension',
        question: 'What does "castles stand upon pillars of salt and pillars of sand" metaphorically mean?',
        options: [
          'The castles were built directly on a beach',
          'Worldly power, fame, and wealth are extremely fragile and temporary',
          'Salt was used as the primary construction material in Rome',
          'The king wanted to build a desert fortress'
        ],
        answerIndex: 1,
        explanationUz: "Qum va tuzdan qurilgan ustunlar — insoniyat qudrati, boyligi va hokimiyati qanchalik omonat hamda o'tkinchi ekanligini ifodalaydi."
      },
      {
        id: 'viva-q3',
        type: 'grammar',
        question: 'Why does the singer repeatedly use "I used to" (e.g. "I used to rule the world")?',
        options: [
          'To describe a future plan he hopes to achieve',
          'To describe something he does every single day right now',
          'To express a past state or routine that is no longer true today',
          'To ask someone for permission'
        ],
        answerIndex: 2,
        explanationUz: "\"Used to + verb\" o'tmishda mavjud bo'lgan, ammo hozirda butunlay tugagan holatni (oldin boshqarardim, endi oddiy odamman) bildiradi."
      },
      {
        id: 'viva-q4',
        type: 'comprehension',
        question: 'What dramatic change happened to the main character\'s life?',
        options: [
          'He was poor and then won the lottery',
          'He fell from being an all-powerful king to sweeping the lonely streets',
          'He traveled to Jerusalem to become a monk',
          'He decided to become a musician'
        ],
        answerIndex: 1,
        explanationUz: "Qo'shiq qahramoni hamma narsaga ega bo'lgan hukmdordan yolg'iz ko'cha supuruvchiga aylangan qismatni bayon qiladi."
      },
      {
        id: 'viva-q5',
        type: 'idiom',
        question: 'What does the traditional phrase "Now the old king is dead, long live the king" mean?',
        options: [
          'A rebellion killed everyone',
          'Continuity of power: when one monarch dies, succession immediately transfers to the new ruler',
          'People prefer having no king at all',
          'An ancient folk bedtime lullaby'
        ],
        answerIndex: 1,
        explanationUz: "Bu ibora hokimiyat almashinuvini bildiradi — eski hukmdor ketadi, olomon esa darhol yangisiga sig'inadi."
      },
      {
        id: 'viva-q6',
        type: 'comprehension',
        question: 'What does the Spanish title "Viva La Vida" mean in English?',
        options: [
          'Life is difficult',
          'Long live life (Live life to the fullest)',
          'Goodbye forever',
          'Victory in war'
        ],
        answerIndex: 1,
        explanationUz: "\"Viva La Vida\" ispancha ibora bo'lib, \"Yashasin hayot!\" degan ma'noni anglatadi."
      }
    ]
  },
  {
    id: 'song-count-on-me',
    title: 'Count on Me',
    artist: 'Bruno Mars',
    youtubeId: '4JNtAtGGNRU',
    level: 'A2',
    difficulty: 'Beginner',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    genre: 'Pop / Acoustic',
    theme: 'Do\'stlik, mehr-oqibat va o\'zaro yordam',
    description: 'Do\'stlik haqidagi eng samimiy va mashhur qo\'shiq. So\'zlari juda aniq va ravon aytilgan bo\'lib, yangi boshlovchilar uchun ayni muddao.',
    totalGaps: 14,
    grammarPoints: [
      {
        title: 'First Conditional (Shart ergash gaplar: Real Future)',
        ruleUz: 'Kelajakdagi ehtimoliy vaziyat uchun "If + Present Simple, will + base verb" formulasi ishlatiladi.',
        exampleFromSong: 'If you ever find yourself stuck in the middle of the sea, I\'ll sail the world to find you.'
      },
      {
        title: 'Phrasal Verb: Count on somebody',
        ruleUz: 'Biror kishiga qiyin paytda suyanmoq, unga ishonmoq (Rely on / Trust).',
        exampleFromSong: 'You can count on me like one, two, three.'
      },
      {
        title: 'Be supposed to + Verb',
        ruleUz: 'Majburiyat yoki ijtimoiy qoida bo\'yicha kutilgan vazifa (shunday qilishi kerak).',
        exampleFromSong: '\'Cause that\'s what friends are supposed to do.'
      }
    ],
    lines: [
      {
        id: 'com-1',
        startTime: 12,
        endTime: 18,
        lineText: 'If you ever find yourself stuck in the middle of the sea',
        targetWord: 'middle',
        options: ['middle', 'deep', 'island', 'bottom'],
        translationUz: "Agar o'zingni dengiz o'rtasida qolib ketganingni sezsang"
      },
      {
        id: 'com-2',
        startTime: 18,
        endTime: 23,
        lineText: 'I\'ll sail the world to find you',
        targetWord: 'sail',
        options: ['sail', 'fly', 'walk', 'run'],
        translationUz: "Seni topish uchun dunyo bo'ylab suzib boraman"
      },
      {
        id: 'com-3',
        startTime: 24,
        endTime: 29,
        lineText: 'If you ever find yourself lost in the dark and you can\'t see',
        targetWord: 'dark',
        options: ['dark', 'cold', 'rain', 'night'],
        translationUz: "Agar qorong'uda adashib qolsang va ko'ra olmasang"
      },
      {
        id: 'com-4',
        startTime: 30,
        endTime: 36,
        lineText: 'I\'ll be the light to guide you',
        targetWord: 'light',
        options: ['light', 'sun', 'star', 'fire'],
        translationUz: "Senga yo'l ko'rsatuvchi nur bo'laman"
      },
      {
        id: 'com-5',
        startTime: 37,
        endTime: 42,
        lineText: 'We find out what we\'re made of',
        targetWord: 'made',
        options: ['made', 'built', 'done', 'born'],
        translationUz: "Biz nimadan yaralganimizni anglab yetamiz"
      },
      {
        id: 'com-6',
        startTime: 43,
        endTime: 48,
        lineText: 'When we are called to help our friends in need',
        targetWord: 'help',
        options: ['help', 'save', 'call', 'meet'],
        translationUz: "Muhtoj do'stlarimizga yordam berishga chaqirilganimizda"
      },
      {
        id: 'com-7',
        startTime: 49,
        endTime: 55,
        lineText: 'You can count on me like one, two, three',
        targetWord: 'count',
        options: ['count', 'call', 'rely', 'trust'],
        translationUz: "Menga bir, ikki, uch deb suyanishing mumkin"
      },
      {
        id: 'com-8',
        startTime: 55,
        endTime: 60,
        lineText: 'I\'ll be there, and I know when I need it',
        targetWord: 'there',
        options: ['there', 'here', 'ready', 'back'],
        translationUz: "Men u yerda bo'laman va bilamanki, menga kerak bo'lganda"
      },
      {
        id: 'com-9',
        startTime: 61,
        endTime: 66,
        lineText: 'I can count on you like four, three, two',
        targetWord: 'four',
        options: ['four', 'ten', 'five', 'zero'],
        translationUz: "Men ham senga to'rt, uch, ikki deb suyanaman"
      },
      {
        id: 'com-10',
        startTime: 67,
        endTime: 73,
        lineText: 'And you\'ll be there, \'cause that\'s what friends are supposed to do',
        targetWord: 'friends',
        options: ['friends', 'brothers', 'people', 'heroes'],
        translationUz: "Va sen ham yoningda bo'lasan, chunki do'stlar shunday qilishi kerak"
      },
      {
        id: 'com-11',
        startTime: 74,
        endTime: 80,
        lineText: 'If you\'re tossin\' and you\'re turnin\' and you just can\'t fall asleep',
        targetWord: 'asleep',
        options: ['asleep', 'down', 'away', 'quiet'],
        translationUz: "Agar to'shagingda to'lg'onib, uxlolmay yotsang"
      },
      {
        id: 'com-12',
        startTime: 81,
        endTime: 87,
        lineText: 'I\'ll sing a song beside you',
        targetWord: 'song',
        options: ['song', 'story', 'hymn', 'rhyme'],
        translationUz: "Yoningda turib senga qo'shiq aytib beraman"
      },
      {
        id: 'com-13',
        startTime: 88,
        endTime: 94,
        lineText: 'And if you ever forget how much you really mean to me',
        targetWord: 'forget',
        options: ['forget', 'wonder', 'doubt', 'lose'],
        translationUz: "Agar menga qanchalik qadrli ekaningni unutsang"
      },
      {
        id: 'com-14',
        startTime: 95,
        endTime: 101,
        lineText: 'Everyday I will remind you',
        targetWord: 'remind',
        options: ['remind', 'tell', 'show', 'write'],
        translationUz: "Har kuni buni senga eslatib turaman"
      }
    ],
    quizQuestions: [
      {
        id: 'com-q1',
        type: 'idiom',
        question: 'What does the phrasal verb "count on" mean in the song title?',
        options: [
          'To do simple math with numbers',
          'To rely on, trust, or depend on someone in difficult times',
          'To write names in a notebook',
          'To ask someone for cash'
        ],
        answerIndex: 1,
        explanationUz: "\"Count on someone\" iborasi biror kishiga ishonish, uning yordamiga tayanish (rely on) ma'nosini beradi."
      },
      {
        id: 'com-q2',
        type: 'grammar',
        question: 'Complete the rule: "If you ever find yourself stuck... I\'ll sail the world" is an example of which grammar conditional?',
        options: [
          'Zero Conditional (facts)',
          'First Conditional (real possibilities in the future)',
          'Third Conditional (past regrets)',
          'Mixed Conditional'
        ],
        answerIndex: 1,
        explanationUz: "If + Present Simple (\"find\"), Future Simple (\"I will sail\") — bu 1-turdagi real shart gap (First Conditional)."
      },
      {
        id: 'com-q3',
        type: 'comprehension',
        question: 'What promise does Bruno Mars make if his friend cannot fall asleep?',
        options: [
          'He will buy sleeping pills',
          'He will sing a comforting song beside them',
          'He will turn on the television',
          'He will wake them up early'
        ],
        answerIndex: 1,
        explanationUz: "Matnda: \"I'll sing a song beside you\" (Yoningda qo'shiq aytib beraman) deb aytilgan."
      },
      {
        id: 'com-q4',
        type: 'idiom',
        question: 'What does "toss and turn" mean when trying to sleep?',
        options: [
          'To play with a blanket',
          'To move around restlessly because you cannot sleep',
          'To exercise in bed',
          'To turn off the bedroom light'
        ],
        answerIndex: 1,
        explanationUz: "\"Toss and turn\" — uxlolmasdan to'shakda tinimsiz u yoqdan-bu yoqqa to'lg'onishni bildiradi."
      },
      {
        id: 'com-q5',
        type: 'grammar',
        question: 'In the line "that\'s what friends are supposed to do", what does "be supposed to" mean?',
        options: [
          'It is strictly forbidden by law',
          'It is an expected duty or moral obligation',
          'It happened by pure accident',
          'It will cost a lot of money'
        ],
        answerIndex: 1,
        explanationUz: "\"Be supposed to do\" — shunday qilish kutiladi, shunday qilish burch/odat degan ma'noni beradi."
      },
      {
        id: 'com-q6',
        type: 'comprehension',
        question: 'True or False: According to the lyrics, true friendship is a two-way reciprocal relationship.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). \"You can count on me 'cause I can count on you\" (ikki tomonlama o'zaro suyanish)."
      }
    ]
  },
  {
    id: 'song-wonderful-world',
    title: 'What a Wonderful World',
    artist: 'Louis Armstrong',
    youtubeId: 'A3yCcXgbKrE',
    level: 'A1',
    difficulty: 'Beginner',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    genre: 'Jazz / Classic',
    theme: 'Tabiat go\'zalligi, tinchlik va hayot sevgisi',
    description: 'Jahon klassikasi. Ovoz ohangi juda sokin, so\'zlari sekin va tushunarli aytilgan. A1 darajadagi tinglovchilar uchun mukammal.',
    totalGaps: 12,
    grammarPoints: [
      {
        title: 'Verbs of Perception (Ko\'rish va his qilish fe\'llari)',
        ruleUz: '"See", "hear", "watch" kabi sezgi fe\'llaridan so\'ng oddiy fe\'l (bare infinitive) yoki -ing shakli kelishi mumkin.',
        exampleFromSong: 'I see trees bloom / I hear babies cry / I watch them grow'
      },
      {
        title: 'Exclamatory Sentences with "What a..."',
        ruleUz: 'Hayrat va chuqur qoyil qolishni bildirish uchun "What a + adjective + singular noun!" ishlatiladi.',
        exampleFromSong: 'What a wonderful world!'
      }
    ],
    lines: [
      {
        id: 'www-1',
        startTime: 5,
        endTime: 12,
        lineText: 'I see trees of green, red roses too',
        targetWord: 'trees',
        options: ['trees', 'fields', 'birds', 'mountains'],
        translationUz: "Men yam-yashil daraxtlarni va qizil atirgullarni ko'ryapman"
      },
      {
        id: 'www-2',
        startTime: 13,
        endTime: 20,
        lineText: 'I see them bloom for me and you',
        targetWord: 'bloom',
        options: ['bloom', 'grow', 'shine', 'dance'],
        translationUz: "Men ularning men va sen uchun ochilayotganini ko'ryapman"
      },
      {
        id: 'www-3',
        startTime: 21,
        endTime: 29,
        lineText: 'And I think to myself, what a wonderful world',
        targetWord: 'wonderful',
        options: ['wonderful', 'beautiful', 'peaceful', 'happy'],
        translationUz: "Va o'zimcha o'ylayman: qanday ajoyib bu dunyo"
      },
      {
        id: 'www-4',
        startTime: 30,
        endTime: 38,
        lineText: 'I see skies of blue and clouds of white',
        targetWord: 'clouds',
        options: ['clouds', 'birds', 'stars', 'waves'],
        translationUz: "Men moviy osmonni va oppoq bulutlarni ko'ryapman"
      },
      {
        id: 'www-5',
        startTime: 39,
        endTime: 47,
        lineText: 'The bright blessed day, the dark sacred night',
        targetWord: 'sacred',
        options: ['sacred', 'quiet', 'cold', 'long'],
        translationUz: "Yorug' muborak kun va qorong'u muqaddas tun"
      },
      {
        id: 'www-6',
        startTime: 48,
        endTime: 56,
        lineText: 'And I think to myself, what a wonderful world',
        targetWord: 'world',
        options: ['world', 'life', 'place', 'time'],
        translationUz: "Va o'zimcha o'ylayman: qanday ajoyib bu dunyo"
      },
      {
        id: 'www-7',
        startTime: 57,
        endTime: 64,
        lineText: 'The colors of the rainbow so pretty in the sky',
        targetWord: 'rainbow',
        options: ['rainbow', 'sunset', 'morning', 'sunlight'],
        translationUz: "Osmonda kamalak ranglari shunchalik go'zal"
      },
      {
        id: 'www-8',
        startTime: 65,
        endTime: 73,
        lineText: 'Are also on the faces of people going by',
        targetWord: 'faces',
        options: ['faces', 'eyes', 'hands', 'smiles'],
        translationUz: "O'tib ketayotgan insonlarning chehralarida ham aks etgan"
      },
      {
        id: 'www-9',
        startTime: 74,
        endTime: 81,
        lineText: 'I see friends shaking hands saying how do you do',
        targetWord: 'hands',
        options: ['hands', 'heads', 'arms', 'greetings'],
        translationUz: "Do'stlar qo'l berib ko'rishib, ahvollashayotganini ko'raman"
      },
      {
        id: 'www-10',
        startTime: 82,
        endTime: 90,
        lineText: 'They\'re really saying I love you',
        targetWord: 'love',
        options: ['love', 'know', 'see', 'miss'],
        translationUz: "Ular aslida bir-birlariga mehrini izhor qilmoqdalar"
      },
      {
        id: 'www-11',
        startTime: 91,
        endTime: 99,
        lineText: 'I hear babies cry, I watch them grow',
        targetWord: 'grow',
        options: ['grow', 'play', 'learn', 'smile'],
        translationUz: "Chaqaloqlarning yig'isini eshitaman, ularning o'sishini kuzataman"
      },
      {
        id: 'www-12',
        startTime: 100,
        endTime: 109,
        lineText: 'They\'ll learn much more than I\'ll ever know',
        targetWord: 'learn',
        options: ['learn', 'know', 'see', 'read'],
        translationUz: "Ular men bilganimdan ham ko'proq narsani o'rganadilar"
      }
    ],
    quizQuestions: [
      {
        id: 'www-q1',
        type: 'comprehension',
        question: 'What is the primary mood and emotion portrayed in "What a Wonderful World"?',
        options: [
          'Deep sorrow and heartbreak',
          'Gratitude, optimism, and appreciation for everyday life and nature',
          'Anger at political injustice',
          'Confusion about modern technology'
        ],
        answerIndex: 1,
        explanationUz: "Qo'shiq hayotga, tabiatga va insonlarning samimiyatiga bo'lgan cheksiz minnatdorlik va optimizmni ifodalaydi."
      },
      {
        id: 'www-q2',
        type: 'idiom',
        question: 'What does the verb "bloom" mean when talking about flowers?',
        options: [
          'To dry up and fall down',
          'To open up and produce blossoms/flowers',
          'To be planted in winter',
          'To smell unpleasant'
        ],
        answerIndex: 1,
        explanationUz: "\"Bloom\" — gullarning ochilishi, yashnab gullashini bildiradi."
      },
      {
        id: 'www-q3',
        type: 'comprehension',
        question: 'What does Louis Armstrong mean when he says friends shaking hands are "really saying I love you"?',
        options: [
          'They speak a secret code language',
          'Simple daily greetings often carry deep care, warmth, and brotherhood',
          'People always lie when they say hello',
          'They want to sign a commercial contract'
        ],
        answerIndex: 1,
        explanationUz: "Oddiy salomlashish orqasida insonlarning bir-biriga bo'lgan samimiy mehri va hurmati yotadi."
      },
      {
        id: 'www-q4',
        type: 'grammar',
        question: 'Which of the following demonstrates the grammar pattern "Verbs of Perception + Object + Bare Infinitive"?',
        options: [
          'I see them bloom',
          'I am wonderful',
          'I thought about it yesterday',
          'I want to sleep'
        ],
        answerIndex: 0,
        explanationUz: "\"I see (perception) them (object) bloom (bare infinitive)\" — ingliz tilida sezgi fe'llarining klassik qoidasidir."
      },
      {
        id: 'www-q5',
        type: 'comprehension',
        question: 'Why does the singer watch babies grow with hope?',
        options: [
          'Because the future generations will learn and accomplish more than he ever could',
          'Because he is a school teacher',
          'Because babies make funny sounds',
          'Because he wants them to build roads'
        ],
        answerIndex: 0,
        explanationUz: "\"They'll learn much more than I'll ever know\" — kelajak avlod yanada ko'proq bilim va yutuqlarga erishishiga ishonch bildiradi."
      },
      {
        id: 'www-q6',
        type: 'comprehension',
        question: 'True or False: The song describes both the beauty of daytime ("bright blessed day") and nighttime ("dark sacred night").',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Matnda kunning ham, tunning ham o'ziga xos go'zalligi va muqaddasligi keltirilgan."
      }
    ]
  },
  {
    id: 'song-memories',
    title: 'Memories',
    artist: 'Maroon 5',
    youtubeId: 'SlPhMPnQ58k',
    level: 'B1',
    difficulty: 'Intermediate',
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    genre: 'Pop',
    theme: 'Xotiralar, qadrdonlarni eslash va o\'tmish saboqlari',
    description: 'Pachelbel kanoniga asoslangan samimiy qo\'shiq. Yo\'qotishlarni yodga olish va yaxshi xotiralarni qadrlash haqida.',
    totalGaps: 12,
    grammarPoints: [
      {
        title: 'Toast / Dedication ("Here\'s to...")',
        ruleUz: 'Biror kishining xotirasiga, sog\'lig\'iga yoki ezgu niyatiga qadah ko\'tarish/bag\'ishlash uchun "Here\'s to + noun" qo\'llanadi.',
        exampleFromSong: 'Here\'s to the ones that we got / Cheers to the wish you were here'
      },
      {
        title: 'Wish + Past Simple (Hozirgi paytdagi armonga nisbatan istak)',
        ruleUz: 'Ayni damda amalga oshishi mumkin bo\'lmagan orzuni ifodalashda "wish + past tense" ishlatiladi.',
        exampleFromSong: 'Cheers to the wish you were here'
      }
    ],
    lines: [
      {
        id: 'mem-1',
        startTime: 4,
        endTime: 10,
        lineText: 'Here\'s to the ones that we got',
        targetWord: 'ones',
        options: ['ones', 'friends', 'days', 'nights'],
        translationUz: "Biz bilan birga bo'lgan qadrdonlarimiz uchun"
      },
      {
        id: 'mem-2',
        startTime: 11,
        endTime: 16,
        lineText: 'Cheers to the wish you were here, but you\'re not',
        targetWord: 'here',
        options: ['here', 'home', 'alive', 'near'],
        translationUz: "Koshki bu yerda bo'lsang edi, ammo sen yo'qsan"
      },
      {
        id: 'mem-3',
        startTime: 17,
        endTime: 22,
        lineText: '\'Cause the drinks bring back all the memories',
        targetWord: 'memories',
        options: ['memories', 'stories', 'moments', 'feelings'],
        translationUz: "Chunki bu damlar barcha shirin xotiralarni qaytaradi"
      },
      {
        id: 'mem-4',
        startTime: 23,
        endTime: 29,
        lineText: 'Of everything we\'ve been through',
        targetWord: 'through',
        options: ['through', 'doing', 'past', 'known'],
        translationUz: "Biz birga boshdan kechirgan barcha narsalarni"
      },
      {
        id: 'mem-5',
        startTime: 30,
        endTime: 35,
        lineText: 'Toast to the ones here today',
        targetWord: 'today',
        options: ['today', 'tonight', 'always', 'forever'],
        translationUz: "Bugun yonimizda bo'lganlar uchun qadah ko'taramiz"
      },
      {
        id: 'mem-6',
        startTime: 36,
        endTime: 42,
        lineText: 'Toast to the ones that we lost on the way',
        targetWord: 'lost',
        options: ['lost', 'left', 'missed', 'loved'],
        translationUz: "Va hayot yo'lida yo'qotgan qadrdonlarimiz uchun"
      },
      {
        id: 'mem-7',
        startTime: 43,
        endTime: 48,
        lineText: '\'Cause the drinks bring back all the memories',
        targetWord: 'bring',
        options: ['bring', 'take', 'make', 'give'],
        translationUz: "Chunki bu lahzalar xotiralarni uyg'otadi"
      },
      {
        id: 'mem-8',
        startTime: 49,
        endTime: 55,
        lineText: 'And the memories bring back, memories bring back you',
        targetWord: 'you',
        options: ['you', 'us', 'them', 'time'],
        translationUz: "Xotiralar esa seni ko'z o'ngimga qaytaradi"
      },
      {
        id: 'mem-9',
        startTime: 56,
        endTime: 62,
        lineText: 'There\'s a time that I remember when I did not know no pain',
        targetWord: 'pain',
        options: ['pain', 'fear', 'sadness', 'grief'],
        translationUz: "Hech qanday og'riqni bilmagan bolalik damlarimni eslayman"
      },
      {
        id: 'mem-10',
        startTime: 63,
        endTime: 69,
        lineText: 'When I believed in forever, and everything would stay the same',
        targetWord: 'forever',
        options: ['forever', 'miracles', 'magic', 'dreams'],
        translationUz: "Hamma narsa abadiy va o'zgarmas qoladi deb ishongan vaqtlarimni"
      },
      {
        id: 'mem-11',
        startTime: 70,
        endTime: 75,
        lineText: 'Now my heart feel like December when somebody say your name',
        targetWord: 'December',
        options: ['December', 'winter', 'autumn', 'midnight'],
        translationUz: "Endi birov ismingni aytganda yuragimdek qahrli dekabr sovug'i seziladi"
      },
      {
        id: 'mem-12',
        startTime: 76,
        endTime: 82,
        lineText: '\'Cause I can\'t reach out to call you, but I know I will one day',
        targetWord: 'call',
        options: ['call', 'see', 'hug', 'find'],
        translationUz: "Chunki endi senga qo'ng'iroq qilolmayman, ammo bir kun uchrashishimizni bilaman"
      }
    ],
    quizQuestions: [
      {
        id: 'mem-q1',
        type: 'comprehension',
        question: 'What is the main topic of Maroon 5\'s song "Memories"?',
        options: [
          'Buying a new sports car',
          'Remembering loved ones who have passed away and cherishing nostalgia',
          'Planning a summer beach party',
          'Complaining about rainy weather'
        ],
        answerIndex: 1,
        explanationUz: "Qo'shiq hayotdan ko'z yumgan qadrdon do'stlarni xotirlash va o'tgan go'zal damlarni e'zozlashga bag'ishlangan."
      },
      {
        id: 'mem-q2',
        type: 'grammar',
        question: 'What meaning does the construction "Here\'s to..." convey in English?',
        options: [
          'A complaint about food',
          'A toast or dedication in honor of someone or something',
          'An address on an envelope',
          'A negative warning'
        ],
        answerIndex: 1,
        explanationUz: "\"Here's to...\" ingliz tilida biror shaxs yoki niyat sharafiga ehtirom bildirish, qadah so'zi aytishda ishlatiladi."
      },
      {
        id: 'mem-q3',
        type: 'idiom',
        question: 'Why does the singer compare his heart to "December"?',
        options: [
          'Because he loves skiing in the mountains',
          'Because December represents coldness, grief, and emotional frost after loss',
          'Because December is his birthday month',
          'Because it is the last month of the year'
        ],
        answerIndex: 1,
        explanationUz: "\"Heart feel like December\" — yo'qotish va ayriliqdan keyin qalbning qahraton qishdek sovuq va g'amgin bo'lib qolishining go'zal metaforasi."
      },
      {
        id: 'mem-q4',
        type: 'comprehension',
        question: 'What contrast is drawn between the singer\'s past and present?',
        options: [
          'In the past he had no pain and believed everything would stay forever; now he carries the grief of loss',
          'In the past he was very rich; now he is broke',
          'In the past he lived in London; now in New York',
          'He used to hate music; now he loves it'
        ],
        answerIndex: 0,
        explanationUz: "Ilgari u hech qanday dardni bilmagan, hamma narsa abadiy deb o'ylagan; hozir esa yo'qotish og'rig'ini his qiladi."
      },
      {
        id: 'mem-q5',
        type: 'grammar',
        question: 'Complete the grammar: "Wish you were here" uses "were" instead of "was" because:',
        options: [
          'It is a spelling mistake by the songwriter',
          'Subjunctive mood is used to express hypothetical, unreal desires in the present',
          'English grammar has no rules for songs',
          'It refers to multiple people'
        ],
        answerIndex: 1,
        explanationUz: "Subjunctive mood (orzu-istak mayli)da ayni paytda amalga oshmagan holat uchun \"wish you were\" shakli qo'llaniladi."
      },
      {
        id: 'mem-q6',
        type: 'comprehension',
        question: 'True or False: The classical chord progression of "Memories" is inspired by Johann Pachelbel\'s Canon in D.',
        options: ['True (To\'g\'ri)', 'False (Noto\'g\'ri)', 'Not Given'],
        answerIndex: 0,
        explanationUz: "To'g'ri (True). Qo'shiq musiqiy jihatdan Pachelbelning mashhur Kanon asari garmoniyasiga asoslangan."
      }
    ]
  },
  {
    id: 'song-photograph',
    title: 'Photograph',
    artist: 'Ed Sheeran',
    youtubeId: 'nSDgHBxUbVQ',
    level: 'B1',
    difficulty: 'Intermediate',
    coverImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80',
    genre: 'Pop / Ballad',
    theme: 'Muhabbat, masofa, xotiralarni asrash va sabr',
    description: 'Acoustic gitara va lirik ma\'noli so\'zlar. Present Simple va his-tuyg\'ular bilan bog\'liq iboralar.',
    totalGaps: 12,
    grammarPoints: [
      {
        title: 'Verbs of Emotion with Gerund / Infinitive',
        ruleUz: 'Tuyg\'ularni ifodalash: "Loving can hurt" (gerund ega vazifasida), "makes us feel alive" (make + object + bare verb).',
        exampleFromSong: 'Loving can hurt / It is the only thing that makes us feel alive'
      },
      {
        title: 'Future with "Will" for promises',
        ruleUz: 'Va\'dalar berishda: "You won\'t ever be alone / Wait for me to come home".',
        exampleFromSong: 'I will keep you inside the pocket of my ripped jeans'
      }
    ],
    lines: [
      {
        id: 'photo-1',
        startTime: 13,
        endTime: 21,
        lineText: 'Loving can hurt, loving can hurt sometimes',
        targetWord: 'hurt',
        options: ['hurt', 'heal', 'fade', 'change'],
        translationUz: "Sevgi og'ritishi mumkin, sevgi ba'zida ranjitishi mumkin"
      },
      {
        id: 'photo-2',
        startTime: 22,
        endTime: 30,
        lineText: 'But it\'s the only thing that I know',
        targetWord: 'know',
        options: ['know', 'feel', 'have', 'need'],
        translationUz: "Lekin bu men bilgan yagona haqiqatdir"
      },
      {
        id: 'photo-3',
        startTime: 31,
        endTime: 38,
        lineText: 'When it gets hard, you know it can get hard sometimes',
        targetWord: 'hard',
        options: ['hard', 'cold', 'dark', 'bad'],
        translationUz: "Qiyin bo'lganida, bilasanki, ba'zida qiyinlashib ketishi mumkin"
      },
      {
        id: 'photo-4',
        startTime: 39,
        endTime: 47,
        lineText: 'It is the only thing that makes us feel alive',
        targetWord: 'alive',
        options: ['alive', 'happy', 'strong', 'young'],
        translationUz: "Bu bizga tirik ekanligimizni his qildiradigan yagona tuyg'udir"
      },
      {
        id: 'photo-5',
        startTime: 48,
        endTime: 55,
        lineText: 'We keep this love in a photograph',
        targetWord: 'photograph',
        options: ['photograph', 'memory', 'picture', 'secret'],
        translationUz: "Biz bu muhabbatni fotosuratda asrab qolamiz"
      },
      {
        id: 'photo-6',
        startTime: 56,
        endTime: 63,
        lineText: 'We made these memories for ourselves',
        targetWord: 'ourselves',
        options: ['ourselves', 'everyone', 'each other', 'the future'],
        translationUz: "Biz bu xotiralarni o'zimiz uchun yaratganmiz"
      },
      {
        id: 'photo-7',
        startTime: 64,
        endTime: 71,
        lineText: 'Where our eyes are never closing',
        targetWord: 'closing',
        options: ['closing', 'looking', 'crying', 'fading'],
        translationUz: "U yerda ko'zlarimiz hech qachon yumilmaydi"
      },
      {
        id: 'photo-8',
        startTime: 72,
        endTime: 79,
        lineText: 'Hearts were never broken',
        targetWord: 'broken',
        options: ['broken', 'frozen', 'lost', 'lonely'],
        translationUz: "Yuraklarimiz hech qachon sinmagan"
      },
      {
        id: 'photo-9',
        startTime: 80,
        endTime: 87,
        lineText: 'And time\'s forever frozen still',
        targetWord: 'frozen',
        options: ['frozen', 'running', 'passing', 'silent'],
        translationUz: "Va vaqt abadiy bir nuqtada to'xtab qolgan"
      },
      {
        id: 'photo-10',
        startTime: 88,
        endTime: 95,
        lineText: 'So you can keep me inside the pocket of your ripped jeans',
        targetWord: 'pocket',
        options: ['pocket', 'jacket', 'wallet', 'closet'],
        translationUz: "Shunday ekan, meni yirtiq jinshing cho'ntagida saqlashing mumkin"
      },
      {
        id: 'photo-11',
        startTime: 96,
        endTime: 104,
        lineText: 'Holding me closer \'til our eyes meet',
        targetWord: 'closer',
        options: ['closer', 'tighter', 'longer', 'safer'],
        translationUz: "Ko'zlarimiz uchrashguncha meni o'zingga yaqin tutib"
      },
      {
        id: 'photo-12',
        startTime: 105,
        endTime: 114,
        lineText: 'You won\'t ever be alone, wait for me to come home',
        targetWord: 'alone',
        options: ['alone', 'afraid', 'sad', 'lost'],
        translationUz: "Sen hech qachon yolg'iz bo'lmaysan, uyga qaytishimni kutgin"
      }
    ],
    quizQuestions: [
      {
        id: 'photo-q1',
        type: 'comprehension',
        question: 'Why does Ed Sheeran emphasize keeping love "in a photograph"?',
        options: [
          'Because he wants to sell the picture in an auction',
          'Because a photograph freezes time, preserving love when hearts are unbroken',
          'Because smartphones didn\'t exist',
          'Because he forgot the person\'s face'
        ],
        answerIndex: 1,
        explanationUz: "Fotosuratda vaqt to'xtaydi («frozen still»), unda xotiralar qariymaydi va yuraklar sinmaydi."
      },
      {
        id: 'photo-q2',
        type: 'grammar',
        question: 'In "Loving can hurt", what role does the word "Loving" play grammatically?',
        options: [
          'Present Continuous verb',
          'Gerund functioning as the subject of the sentence',
          'Past participle adjective',
          'Adverb of manner'
        ],
        answerIndex: 1,
        explanationUz: "\"Loving\" fe'lga -ing qo'shilishi orqali otlashgan gerund bo'lib, gapning egasi (Subject) vazifasida kelmoqda."
      },
      {
        id: 'photo-q3',
        type: 'idiom',
        question: 'What does "time\'s forever frozen still" mean?',
        options: [
          'The weather is below zero degrees',
          'A preserved photo keeps a moment alive unchanged forever',
          'The clock stopped working',
          'Time travel has been invented'
        ],
        answerIndex: 1,
        explanationUz: "Suratdagi lahza hech qachon o'zgarmaydi, xuddi muzlab qolgandek abadiy saqlanadi."
      },
      {
        id: 'photo-q4',
        type: 'comprehension',
        question: 'Where does the singer say the photograph can be kept?',
        options: [
          'In an art gallery in Paris',
          'Inside the pocket of ripped jeans, close to the person',
          'Under the bed',
          'In a locked safe'
        ],
        answerIndex: 1,
        explanationUz: "Matnda: «inside the pocket of your ripped jeans» (yirtiq jinshing cho'ntagida) deb aytilgan."
      },
      {
        id: 'photo-q5',
        type: 'grammar',
        question: 'Complete the pattern: "It is the only thing that makes us feel alive" - why is "feel" in base form?',
        options: [
          'Because the causative verb "make" + object takes a bare infinitive (without "to")',
          'Because "feel" cannot take -ing',
          'It is an irregular past tense',
          'It is a modal auxiliary verb'
        ],
        answerIndex: 0,
        explanationUz: "Sababiyat fe'li: Make someone do something (make + object + bare infinitive) qoidasiga ko'ra «feel» ishlatilgan."
      },
      {
        id: 'photo-q6',
        type: 'comprehension',
        question: 'What comforting promise closes the chorus?',
        options: [
          'That he will send money',
          'That "you won\'t ever be alone, wait for me to come home"',
          'That he will never sing again',
          'That they will buy a new house'
        ],
        answerIndex: 1,
        explanationUz: "Qo'shiq oxirida: «You won't ever be alone, wait for me to come home» degan sadoqatli va'da beriladi."
      }
    ]
  },
  {
    id: 'song-perfect',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    youtubeId: '2Vv-BfVoq4g',
    level: 'A2',
    difficulty: 'Beginner',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    genre: 'Pop / Acoustic',
    theme: 'Samimiy sevgi, bolalik xotiralari, sadoqat va orzular',
    description: 'Britaniyalik mashhur qo\'shiqchi Ed Sheeranning sof talaffuzda kuylangan xalqaro durdonasi. A2 darajadagi o\'quvchilar uchun eshitish, ritmni anglash va sodda grammatikani o\'zlashtirishda ideal.',
    totalGaps: 14,
    grammarPoints: [
      {
        title: 'Past Simple (Found, Knew, Was)',
        ruleUz: 'O\'tmishda tugallangan aniq voqealarni bayon qilish uchun noto\'g\'ri fe\'llarning o\'tgan zamon shakllari (V2) qo\'llaniladi.',
        exampleFromSong: 'I found a love for me / We were just kids when we fell in love'
      },
      {
        title: 'Present Continuous for Ongoing Action',
        ruleUz: 'Nutq paytida davom etayotgan harakatlarni ifodalash: Dancing in the dark, listening to our favorite song.',
        exampleFromSong: 'Dancing in the dark with you between my arms'
      },
      {
        title: 'Gerund after Prepositions (Without + V-ing)',
        ruleUz: 'Old qo\'shimchalardan (preposition) so\'ng fe\'l -ing shaklida (gerund) keladi: Without knowing.',
        exampleFromSong: 'Not knowing what it was / Barefoot on the grass'
      }
    ],
    lines: [
      {
        id: 'perf-1',
        startTime: 2,
        endTime: 8,
        lineText: 'I found a love for me',
        targetWord: 'found',
        options: ['found', 'lost', 'sought', 'dreamed'],
        translationUz: 'Men o\'zim uchun muhabbat topdim'
      },
      {
        id: 'perf-2',
        startTime: 9,
        endTime: 16,
        lineText: 'Darling just dive right in and follow my lead',
        targetWord: 'follow',
        options: ['follow', 'leave', 'hear', 'break'],
        translationUz: 'Azizam, shunchaki ergash va mening ortimdan yur'
      },
      {
        id: 'perf-3',
        startTime: 17,
        endTime: 23,
        lineText: 'Well I found a girl beautiful and sweet',
        targetWord: 'sweet',
        options: ['sweet', 'tall', 'brave', 'quiet'],
        translationUz: 'Men go\'zal va shirin bir qizni uchratdim'
      },
      {
        id: 'perf-4',
        startTime: 24,
        endTime: 31,
        lineText: 'Oh I never knew you were the someone waiting for me',
        targetWord: 'waiting',
        options: ['waiting', 'crying', 'looking', 'working'],
        translationUz: 'Meni kutayotgan inson aynan sen ekaningni hech bilmagandim'
      },
      {
        id: 'perf-5',
        startTime: 32,
        endTime: 38,
        lineText: '\'Cause we were just kids when we fell in love',
        targetWord: 'kids',
        options: ['kids', 'friends', 'strangers', 'students'],
        translationUz: 'Chunki biz sevib qolganimizda hali go\'dak bolalar edik'
      },
      {
        id: 'perf-6',
        startTime: 39,
        endTime: 46,
        lineText: 'Not knowing what it was',
        targetWord: 'knowing',
        options: ['knowing', 'believing', 'saying', 'noticing'],
        translationUz: 'Buning nimaligini ham to\'la tushunmas edik'
      },
      {
        id: 'perf-7',
        startTime: 47,
        endTime: 54,
        lineText: 'I will not give you up this time',
        targetWord: 'give',
        options: ['give', 'take', 'leave', 'hold'],
        translationUz: 'Bu safar sendan aslo voz kechmayman'
      },
      {
        id: 'perf-8',
        startTime: 55,
        endTime: 62,
        lineText: 'Darling just kiss me slow your heart is all I own',
        targetWord: 'heart',
        options: ['heart', 'smile', 'voice', 'eyes'],
        translationUz: 'Azizam, meni ohista o\'p, sening qalbing mening bor boyligim'
      },
      {
        id: 'perf-9',
        startTime: 63,
        endTime: 70,
        lineText: 'And in your eyes you\'re holding mine',
        targetWord: 'eyes',
        options: ['eyes', 'hands', 'dreams', 'arms'],
        translationUz: 'Va ko\'zlaringda mening ko\'zlarim aks etmoqda'
      },
      {
        id: 'perf-10',
        startTime: 71,
        endTime: 77,
        lineText: 'Baby I\'m dancing in the dark with you between my arms',
        targetWord: 'dark',
        options: ['dark', 'rain', 'street', 'night'],
        translationUz: 'Jonim, men qorong\'ulikda seni quchoqlab raqsga tushyapman'
      },
      {
        id: 'perf-11',
        startTime: 78,
        endTime: 85,
        lineText: 'Barefoot on the grass listening to our favorite song',
        targetWord: 'grass',
        options: ['grass', 'floor', 'sand', 'snow'],
        translationUz: 'Maysazorda yalangoyoq sevimli qo\'shig\'imizni tinglab'
      },
      {
        id: 'perf-12',
        startTime: 86,
        endTime: 93,
        lineText: 'When you said you looked a mess I whispered underneath my breath',
        targetWord: 'whispered',
        options: ['whispered', 'shouted', 'argued', 'wondered'],
        translationUz: 'Sen "ust-boshim tartibsiz ko\'rinyapti" deganingda, men sekin shivirladim'
      },
      {
        id: 'perf-13',
        startTime: 94,
        endTime: 102,
        lineText: 'But you heard it darling you look perfect tonight',
        targetWord: 'perfect',
        options: ['perfect', 'happy', 'tired', 'different'],
        translationUz: 'Lekin sen buni eshitding: "Azizam, sen bu oqshom mukammal ko\'rinyapsan"'
      }
    ],
    quizQuestions: [
      {
        id: 'perf-q1',
        type: 'comprehension',
        question: 'How old were the singer and his partner when they first fell in love?',
        options: [
          'They were university professors',
          'They were just kids',
          'They met in their forties',
          'They were elderly neighbors'
        ],
        answerIndex: 1,
        explanationUz: 'Qo\'shiqda: «We were just kids when we fell in love» deb aytilgan.'
      },
      {
        id: 'perf-q2',
        type: 'idiom',
        question: 'What does the word "barefoot" mean in the song?',
        options: [
          'Wearing heavy winter boots',
          'Without shoes or socks on the feet',
          'Running as fast as possible',
          'Dancing on roller skates'
        ],
        answerIndex: 1,
        explanationUz: '«Barefoot» — poyabzalsiz, yalangoyoq degani.'
      },
      {
        id: 'perf-q3',
        type: 'grammar',
        question: 'Which phrasal verb means "to surrender or stop trying"?',
        options: [
          'Dive in',
          'Give up',
          'Hold on',
          'Stand up'
        ],
        answerIndex: 1,
        explanationUz: '«Give up» — voz kechmoq, taslim bo\'lmoq.'
      },
      {
        id: 'perf-q4',
        type: 'comprehension',
        question: 'Where were they dancing according to the chorus?',
        options: [
          'In a crowded disco club',
          'In the dark, barefoot on the grass listening to their song',
          'On a cruise ship in the ocean',
          'Inside an empty subway station'
        ],
        answerIndex: 1,
        explanationUz: 'Matnda: «dancing in the dark with you between my arms, barefoot on the grass» deb tasvirlanadi.'
      },
      {
        id: 'perf-q5',
        type: 'comprehension',
        question: 'What did the singer whisper when his partner said she "looked a mess"?',
        options: [
          'That she should change her dress',
          'That "darling, you look perfect tonight"',
          'That they should go home',
          'That it was too cold outside'
        ],
        answerIndex: 1,
        explanationUz: 'U sekin shivirlab: «Darling, you look perfect tonight» deydi.'
      }
    ]
  }
];

export const getKaraokeSongById = (id: string): KaraokeSong | undefined => {
  return KARAOKE_SONGS.find((s) => s.id === id);
};
