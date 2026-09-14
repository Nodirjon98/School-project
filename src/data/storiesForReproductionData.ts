import { StoryForReproduction } from '../types';

export const STORIES_FOR_REPRODUCTION: StoryForReproduction[] = [
  {
    id: 'story-1',
    storyNumber: 1,
    title: 'The Christmas Cards',
    titleUz: 'Rojdestvo Tabriknomalari',
    cefrLevel: 'A2',
    wordCount: 154,
    readingTimeMinutes: 1,
    storyText: `It was two weeks before Christmas, and Mrs Smith was very busy. She bought a lot of Christmas cards to send to her friends and to her husband's friends, and put them on the table in the living-room. Then, when her husband came home from work, she said to him, 'Here are the Christmas cards for our friends, and here are some stamps, a pen and our book of addresses. Will you please write the cards while I am cooking the dinner?'\n\nMr Smith did not say anything, but walked out of the living-room and went to his study. Mrs Smith was very angry with him, but did not say anything either.\n\nThen a minute later he came back with a box full of Christmas cards. All of them had addresses and stamps on them.\n\n'These are from last year,' he said. 'I forgot to post them.'`,
    paragraphs: [
      `It was two weeks before Christmas, and Mrs Smith was very busy. She bought a lot of Christmas cards to send to her friends and to her husband's friends, and put them on the table in the living-room. Then, when her husband came home from work, she said to him, 'Here are the Christmas cards for our friends, and here are some stamps, a pen and our book of addresses. Will you please write the cards while I am cooking the dinner?'`,
      `Mr Smith did not say anything, but walked out of the living-room and went to his study. Mrs Smith was very angry with him, but did not say anything either.`,
      `Then a minute later he came back with a box full of Christmas cards. All of them had addresses and stamps on them.`,
      `'These are from last year,' he said. 'I forgot to post them.'`
    ],
    summaryUz: "Rojdestvodan ikki hafta oldin Missis Smit do'stlariga tabriknoma yozish uchun eridan yordam so'raydi. Eri xonasiga kirib ketadi va o'tgan yili jo'natishni unutib qo'ygan tayyor tabriknomalarni olib chiqadi.",
    vocabulary: [
      {
        word: 'Christmas card',
        pos: 'n.',
        phonetic: '[ˈkrɪsməs kɑːd]',
        translationUz: 'Rojdestvo tabriknomasi',
        definitionEn: 'A greeting card sent at Christmas.',
        exampleSentence: 'She sent a Christmas card to her best friend.'
      },
      {
        word: 'stamp',
        pos: 'n.',
        phonetic: '[stæmp]',
        translationUz: 'pochta markasi',
        definitionEn: 'A small adhesive piece of paper stuck to mail to show postage has been paid.',
        exampleSentence: 'Put a stamp on the envelope before mailing it.'
      },
      {
        word: 'address book',
        pos: 'n.',
        phonetic: '[əˈdres bʊk]',
        translationUz: "manzillar daftarchasi",
        definitionEn: 'A notebook containing people\'s names and addresses.',
        exampleSentence: 'Our book of addresses is on the shelf.'
      },
      {
        word: 'study',
        pos: 'n.',
        phonetic: '[ˈstʌdi]',
        translationUz: 'ish kabineti (uyda)',
        definitionEn: 'A room used for reading, writing, or studying.',
        exampleSentence: 'He walked out of the living-room into his study.'
      },
      {
        word: 'post',
        pos: 'v.',
        phonetic: '[pəʊst]',
        translationUz: "pochtadan jo'natmoq",
        definitionEn: 'To send a letter or parcel via the postal service.',
        exampleSentence: 'I forgot to post the letters yesterday.'
      },
      {
        word: 'angry',
        pos: 'adj.',
        phonetic: '[ˈæŋɡri]',
        translationUz: "jahli chiqqan, darg'azab",
        definitionEn: 'Feeling or showing strong annoyance or displeasure.',
        exampleSentence: 'Mrs Smith was very angry with her husband.'
      }
    ],
    reproductionOutline: [
      'Two weeks before Christmas — Mrs Smith busy buying cards.',
      'Putting cards, stamps, pen and address book on the table.',
      'Asking husband to write them while cooking dinner.',
      'Mr Smith leaves without a word; Mrs Smith gets angry.',
      'Mr Smith returns with a box of ready cards from last year that he forgot to post.'
    ],
    modelRetelling: `Two weeks before Christmas, Mrs Smith bought many Christmas cards for their friends. When Mr Smith came home from work, she asked him to write the cards while she was cooking dinner. Mr Smith did not say anything and went to his study, which made his wife angry. But a minute later, he came back with a box of cards with stamps and addresses already on them. They were from last year because he had forgotten to post them.`,
    questions: [
      {
        id: 's1-q1',
        order: 1,
        question: 'When was Mrs Smith very busy?',
        modelAnswer: 'She was very busy two weeks before Christmas.',
        keywords: ['two weeks', 'before Christmas', 'busy'],
        options: ['Two weeks before Christmas', 'On Christmas morning', 'A month after Christmas', 'In the middle of summer'],
        correctOptionIndex: 0,
        explanationUz: "Matnning 1-jumlasida: 'It was two weeks before Christmas, and Mrs Smith was very busy.'"
      },
      {
        id: 's1-q2',
        order: 2,
        question: 'What did she do?',
        modelAnswer: "She bought a lot of Christmas cards and put them on the table in the living-room.",
        keywords: ['bought', 'cards', 'table', 'living-room'],
        options: ['She cooked dinner and watched TV', 'She bought a lot of Christmas cards', 'She visited her friends in London', 'She bought a new car'],
        correctOptionIndex: 1,
        explanationUz: "U do'stlariga jo'natish uchun ko'plab Rojdestvo tabriknomalarini sotib oldi."
      },
      {
        id: 's1-q3',
        order: 3,
        question: 'Why did she buy the cards?',
        modelAnswer: "To send to her friends and to her husband's friends.",
        keywords: ['send', 'friends', "husband's friends"],
        options: ['To sell them at the market', 'To give them to her children', 'To send to her friends and her husband\'s friends', 'To decorate her bedroom walls'],
        correctOptionIndex: 2,
        explanationUz: "O'zining va erining do'stlariga tabriknoma qilib jo'natish maqsadida sotib olgan."
      },
      {
        id: 's1-q4',
        order: 4,
        question: 'Where did she put them?',
        modelAnswer: 'She put them on the table in the living-room.',
        keywords: ['table', 'living-room', 'put'],
        options: ['Under the bed', 'In the kitchen cupboard', 'On the table in the living-room', 'Inside her husband\'s briefcase'],
        correctOptionIndex: 2,
        explanationUz: "U kartochkalarni mehmonxonadagi stol ustiga qo'ydi."
      },
      {
        id: 's1-q5',
        order: 5,
        question: 'What did she say to her husband?',
        modelAnswer: "She asked him to write the cards while she was cooking the dinner.",
        keywords: ['write the cards', 'cooking dinner', 'stamps', 'pen'],
        options: ['"Please go and buy some bread"', '"Will you please write the cards while I am cooking the dinner?"', '"Where were you all day?"', '"Please clean the living-room"'],
        correctOptionIndex: 1,
        explanationUz: "U eridan kechki ovqat pishirgunicha tabriknomalarni yozib turishini so'radi."
      },
      {
        id: 's1-q6',
        order: 6,
        question: 'What did Mr Smith say?',
        modelAnswer: 'He did not say anything.',
        keywords: ['did not say anything', 'nothing', 'silent'],
        options: ['"I am too tired tonight"', 'He did not say anything', '"Yes, of course, darling"', '"I hate writing cards"'],
        correctOptionIndex: 1,
        explanationUz: "Janob Smit hech narsa demadi ('did not say anything')."
      },
      {
        id: 's1-q7',
        order: 7,
        question: 'What did he do?',
        modelAnswer: 'He walked out of the living-room and went to his study.',
        keywords: ['walked out', 'living-room', 'study'],
        options: ['He began writing cards immediately', 'He walked out of the living-room and went to his study', 'He sat down and drank coffee', 'He went out to meet his friends'],
        correctOptionIndex: 1,
        explanationUz: "U mehmonxonadan chiqib o'z ish xonasiga (study) kirib ketdi."
      },
      {
        id: 's1-q8',
        order: 8,
        question: 'How did Mrs Smith feel?',
        modelAnswer: 'She was very angry with him.',
        keywords: ['angry', 'upset', 'furious'],
        options: ['She felt very happy and relaxed', 'She was very angry with him', 'She was surprised and amused', 'She felt sleepy'],
        correctOptionIndex: 1,
        explanationUz: "Missis Smit uning bu qilig'idan juda jahli chiqdi ('very angry')."
      },
      {
        id: 's1-q9',
        order: 9,
        question: 'What did she say?',
        modelAnswer: 'She did not say anything either.',
        keywords: ['did not say anything', 'nothing', 'either'],
        options: ['She shouted at him', 'She asked him to come back', 'She did not say anything either', 'She called her mother'],
        correctOptionIndex: 2,
        explanationUz: "U ham indamadi, hech narsa demadi ('did not say anything either')."
      },
      {
        id: 's1-q10',
        order: 10,
        question: 'What did Mr Smith do a minute later?',
        modelAnswer: 'A minute later he came back with a box full of Christmas cards.',
        keywords: ['minute later', 'came back', 'box full', 'cards'],
        options: ['He came back with a cup of tea', 'He came back with a box full of Christmas cards', 'He went to sleep', 'He came back with a fresh newspaper'],
        correctOptionIndex: 1,
        explanationUz: "Bir daqiqa o'tib u tabriknomalar to'la quti bilan qaytib chiqdi."
      },
      {
        id: 's1-q11',
        order: 11,
        question: 'What did he say?',
        modelAnswer: "'These are from last year. I forgot to post them.'",
        keywords: ['from last year', 'forgot', 'post'],
        options: ['"I bought new cards from the shop"', '"These are from last year. I forgot to post them."', '"Let\'s not send any cards this year"', '"Where are the stamps?"'],
        correctOptionIndex: 1,
        explanationUz: "U: 'Bular o'tgan yilgilar, jo'natish yodimdan ko'tarilgan ekan' deb aytdi."
      }
    ],
    trueFalseQuestions: [
      {
        id: 's1-tf1',
        order: 1,
        statement: 'Mrs Smith bought the Christmas cards two days before Christmas.',
        correctAnswer: 'False',
        explanationUz: "Matnda: 'It was two weeks before Christmas' (ikki hafta oldin), ikki kun emas."
      },
      {
        id: 's1-tf2',
        order: 2,
        statement: "Mrs Smith bought cards to send to her own friends and her husband's friends.",
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'She bought a lot of Christmas cards to send to her friends and to her husband\\'s friends'."
      },
      {
        id: 's1-tf3',
        order: 3,
        statement: 'Mrs Smith asked her husband to write the cards while she was cooking the dinner.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'Will you please write the cards while I am cooking the dinner?'"
      },
      {
        id: 's1-tf4',
        order: 4,
        statement: "Mr Smith's study was located on the second floor of their house.",
        correctAnswer: 'Not Given',
        explanationUz: "Matnda janob Smitning ish xonasi nechanchi qavatda ekanligi haqida ma'lumot berilmagan."
      },
      {
        id: 's1-tf5',
        order: 5,
        statement: 'All the cards in the box already had addresses and stamps on them.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'All of them had addresses and stamps on them'."
      },
      {
        id: 's1-tf6',
        order: 6,
        statement: "Mr Smith had posted all of last year's Christmas cards on time.",
        correctAnswer: 'False',
        explanationUz: "Xato: U o'tgan yilgi kartochkalarni jo'natishni unutib qo'ygan ('I forgot to post them')."
      }
    ]
  },
  {
    id: 'story-2',
    storyNumber: 2,
    title: 'A Telephone Call for Billy',
    titleUz: "Billy Uchun Telefon Qo'ng'irog'i",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: `Mrs Jones was waiting for an important telephone call, but she had no bread in the house, so she left the baby at home and said to his five-year-old brother, 'I am going to the shops, Jimmy, and I will be back in a few minutes.'\n\nWhile she was out, the telephone rang, and Jimmy answered. 'Hallo,' said a man, 'is your mother there?'\n'No,' answered Jimmy.\n'Well, when she comes back, say to her, "Mr Baker telephoned".'\n'What?'\n'Mr Baker. Write it down. B-A-K-E-R.'\n'How do you make a B?'\n'How do I make...? Listen, little boy, is there anybody else with you? Any brothers or sisters?'\n'My brother Billy is here.'\n'Good, I want to talk to him, please.'\n'All right.' Jimmy took the telephone to the baby's bed and gave it to Billy. When their mother came back, she asked, 'Did anyone telephone?'\n'Yes,' said Jimmy, 'a man. But he only wanted to talk to Billy.'`,
    paragraphs: [
      `Mrs Jones was waiting for an important telephone call, but she had no bread in the house, so she left the baby at home and said to his five-year-old brother, 'I am going to the shops, Jimmy, and I will be back in a few minutes.'`,
      `While she was out, the telephone rang, and Jimmy answered. 'Hallo,' said a man, 'is your mother there?'\n'No,' answered Jimmy.`,
      `'Well, when she comes back, say to her, "Mr Baker telephoned".'\n'What?'\n'Mr Baker. Write it down. B-A-K-E-R.'\n'How do you make a B?'`,
      `'How do I make...? Listen, little boy, is there anybody else with you? Any brothers or sisters?'\n'My brother Billy is here.'\n'Good, I want to talk to him, please.'`,
      `'All right.' Jimmy took the telephone to the baby's bed and gave it to Billy. When their mother came back, she asked, 'Did anyone telephone?'\n'Yes,' said Jimmy, 'a man. But he only wanted to talk to Billy.'`
    ],
    summaryUz: "Missis Jons muhim qo'ng'iroq kutayotgan edi, biroq nonga chiqishiga to'g'ri keldi. Uyda 5 yashar Jimmi va chaqaloq qoldi. Qo'ng'iroq qilgan erkak Jimmi yozishni bilmagani sababli uning ukasi bilan gaplashmoqchi bo'ldi, biroq uka hali chaqaloq edi!",
    vocabulary: [
      {
        word: 'telephone call',
        pos: 'n.',
        phonetic: '[ˈtelɪfəʊn kɔːl]',
        translationUz: "telefon qo'ng'irog'i",
        definitionEn: 'A connection over a telephone network between callers.',
        exampleSentence: 'Mrs Jones was waiting for an important telephone call.'
      },
      {
        word: 'baby',
        pos: 'n.',
        phonetic: '[ˈbeɪbi]',
        translationUz: 'chaqaloq, go‘dak',
        definitionEn: 'A very young child or infant.',
        exampleSentence: 'Jimmy took the telephone to the baby\'s bed.'
      },
      {
        word: 'write down',
        pos: 'v.',
        phonetic: '[raɪt daʊn]',
        translationUz: 'yozib qo‘ymoq',
        definitionEn: 'To record in writing.',
        exampleSentence: 'Please write down Mr Baker\'s name.'
      },
      {
        word: 'spell',
        pos: 'v.',
        phonetic: '[spel]',
        translationUz: 'harflab aytmoq',
        definitionEn: 'To say or write the letters of a word in order.',
        exampleSentence: 'The man spelled out B-A-K-E-R.'
      },
      {
        word: 'anybody else',
        pos: 'phrase',
        phonetic: '[ˈenibɒdi els]',
        translationUz: 'boshqa hech kim / yana birov',
        definitionEn: 'Any other person.',
        exampleSentence: 'Is there anybody else in the house?'
      }
    ],
    reproductionOutline: [
      'Mrs Jones awaits important call but needs bread.',
      'Leaves 5-year-old Jimmy with baby brother Billy.',
      'Phone rings — Mr Baker asks Jimmy to write his name.',
      'Jimmy doesn\'t know how to write the letter B.',
      'Mr Baker asks for an older brother or sister; Jimmy gives phone to baby Billy.',
      'Mother returns — Jimmy says the man only wanted to talk to Billy.'
    ],
    modelRetelling: `Mrs Jones was waiting for an important call, but had to go to the shop for bread. She left five-year-old Jimmy at home with his baby brother Billy. While she was away, Mr Baker called and asked Jimmy to write down his name. Since Jimmy didn't know how to write a B, Mr Baker asked to speak to anyone else. Jimmy told him his brother Billy was there and gave the phone to the baby. When their mother returned, Jimmy told her a man had called, but only wanted to talk to Billy.`,
    questions: [
      {
        id: 's2-q1',
        order: 1,
        question: 'What was Mrs Jones waiting for?',
        modelAnswer: 'She was waiting for an important telephone call.',
        keywords: ['important', 'telephone call', 'waiting'],
        options: ['A letter from her sister', 'An important telephone call', 'A delivery package', 'Her husband to return from work'],
        correctOptionIndex: 1,
        explanationUz: "Missis Jons muhim telefon qo'ng'irog'ini kutayotgan edi."
      },
      {
        id: 's2-q2',
        order: 2,
        question: 'Why did she go out?',
        modelAnswer: 'Because she had no bread in the house.',
        keywords: ['no bread', 'house', 'shops'],
        options: ['To visit a doctor', 'Because she had no bread in the house', 'To go to work', 'To walk in the park'],
        correctOptionIndex: 1,
        explanationUz: "Uyda non qolmagani uchun do'konga chiqib ketdi."
      },
      {
        id: 's2-q3',
        order: 3,
        question: 'What did she do with the baby when she went out?',
        modelAnswer: 'She left the baby at home.',
        keywords: ['left', 'baby', 'at home'],
        options: ['She took the baby with her', 'She left the baby at home', 'She sent the baby to kindergarten', 'She called a babysitter'],
        correctOptionIndex: 1,
        explanationUz: "U chaqaloqni uyda qoldirdi."
      },
      {
        id: 's2-q4',
        order: 4,
        question: 'What did she say to Jimmy?',
        modelAnswer: "She said, 'I am going to the shops, Jimmy, and I will be back in a few minutes.'",
        keywords: ['going to the shops', 'back in a few minutes'],
        options: ['"Do your homework, Jimmy"', '"I am going to the shops, Jimmy, and I will be back in a few minutes."', '"Don\'t touch the telephone"', '"Go to sleep right now"'],
        correctOptionIndex: 1,
        explanationUz: "U Jimmiga bir necha daqiqada qaytib kelishini aytdi."
      },
      {
        id: 's2-q5',
        order: 5,
        question: 'How old was he?',
        modelAnswer: 'He was five years old.',
        keywords: ['five', 'five-year-old', 'years old'],
        options: ['Three years old', 'Five years old', 'Seven years old', 'Ten years old'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi 5 yoshda edi ('five-year-old brother')."
      },
      {
        id: 's2-q6',
        order: 6,
        question: 'What happened while she was out?',
        modelAnswer: 'The telephone rang.',
        keywords: ['telephone rang', 'call came'],
        options: ['The baby started crying', 'The telephone rang', 'Someone knocked on the door', 'Rain started falling'],
        correctOptionIndex: 1,
        explanationUz: "U ko'chada bo'lgan vaqtda telefon jiringladi."
      },
      {
        id: 's2-q7',
        order: 7,
        question: 'What did Jimmy do?',
        modelAnswer: 'Jimmy answered the telephone.',
        keywords: ['answered', 'telephone', 'picked up'],
        options: ['He ran outside', 'He answered the telephone', 'He ignored the ringing', 'He woke the baby up'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi telefonni ko'tardi ('answered')."
      },
      {
        id: 's2-q8',
        order: 8,
        question: 'What did the man say?',
        modelAnswer: "The man said, 'Hallo, is your mother there?'",
        keywords: ['is your mother there', 'hallo'],
        options: ['"Where is Mr Jones?"', '"Hallo, is your mother there?"', '"Can I buy some bread?"', '"Who is this?"'],
        correctOptionIndex: 1,
        explanationUz: "Erkak: 'Salom, onang shu yerdami?' deb so'radi."
      },
      {
        id: 's2-q9',
        order: 9,
        question: 'What did Jimmy answer?',
        modelAnswer: "Jimmy answered, 'No.'",
        keywords: ['no', 'answered'],
        options: ['"Yes, she is sleeping"', '"No."', '"She is cooking"', '"I don\'t know"'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi 'Yo'q' deb javob berdi."
      },
      {
        id: 's2-q10',
        order: 10,
        question: 'What did the man say then?',
        modelAnswer: "'Well, when she comes back, say to her, \"Mr Baker telephoned\".'",
        keywords: ['when she comes back', 'Mr Baker telephoned'],
        options: ['"Tell her to call me back immediately"', '\'Well, when she comes back, say to her, "Mr Baker telephoned".\'', '"I will call again tomorrow"', '"Goodbye, little boy"'],
        correctOptionIndex: 1,
        explanationUz: "U onasi kelganda Janob Beyker qo'ng'iroq qildi deb aytishni tayinladi."
      },
      {
        id: 's2-q11',
        order: 11,
        question: 'What did Jimmy say?',
        modelAnswer: "Jimmy said, 'What?'",
        keywords: ['what', 'asked'],
        options: ['"Okay"', '"What?"', '"I don\'t understand"', '"Who are you?"'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi: 'Nima?' deb so'radi."
      },
      {
        id: 's2-q12',
        order: 12,
        question: 'What was the man\'s answer?',
        modelAnswer: "'Mr Baker. Write it down. B-A-K-E-R.'",
        keywords: ['Mr Baker', 'write it down', 'B-A-K-E-R'],
        options: ['"Never mind"', '\'Mr Baker. Write it down. B-A-K-E-R.\'', '"I said Mr Jones"', '"Spell your name"'],
        correctOptionIndex: 1,
        explanationUz: "Erkak ismini harflab berdi: B-A-K-E-R."
      },
      {
        id: 's2-q13',
        order: 13,
        question: 'What did Jimmy ask him then?',
        modelAnswer: "'How do you make a B?'",
        keywords: ['how do you make a B', 'letter B'],
        options: ['"What does B mean?"', '\'How do you make a B?\'', '"Where is a pen?"', '"Can you repeat?"'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi 'B harfi qanday yoziladi?' deb so'radi."
      },
      {
        id: 's2-q14',
        order: 14,
        question: 'What did the man say then?',
        modelAnswer: "'Listen, little boy, is there anybody else with you? Any brothers or sisters?'",
        keywords: ['anybody else', 'brothers', 'sisters'],
        options: ['"Go ask your father"', '\'Listen, little boy, is there anybody else with you? Any brothers or sisters?\'', '"You are silly"', '"I will call later"'],
        correctOptionIndex: 1,
        explanationUz: "Erkak uyda boshqa biror akang yoki opang bormi deb so'radi."
      },
      {
        id: 's2-q15',
        order: 15,
        question: 'What did Jimmy answer?',
        modelAnswer: "'My brother Billy is here.'",
        keywords: ['brother Billy', 'is here'],
        options: ['"Nobody is here"', '\'My brother Billy is here.\'', '"My sister is here"', '"My dog is here"'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi 'Ukam Billi shu yerda' dedi."
      },
      {
        id: 's2-q16',
        order: 16,
        question: 'What did the man say?',
        modelAnswer: "'Good, I want to talk to him, please.'",
        keywords: ['good', 'talk to him', 'please'],
        options: ['"How old is Billy?"', '\'Good, I want to talk to him, please.\'', '"Put him on the line quickly"', '"Is Billy older than you?"'],
        correctOptionIndex: 1,
        explanationUz: "Erkak xursand bo'lib: 'Yaxshi, u bilan gaplashmoqchiman' dedi."
      },
      {
        id: 's2-q17',
        order: 17,
        question: 'What did Jimmy say?',
        modelAnswer: "Jimmy said, 'All right.'",
        keywords: ['all right', 'okay'],
        options: ['"No, he cannot speak"', '\'All right.\'', '"He is sleeping"', '"Wait a minute"'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi 'Xo'p' (All right) deb aytdi."
      },
      {
        id: 's2-q18',
        order: 18,
        question: 'What did he do?',
        modelAnswer: "Jimmy took the telephone to the baby's bed and gave it to Billy.",
        keywords: ['took telephone', "baby's bed", 'gave it to Billy'],
        options: ['He hung up the telephone', 'Jimmy took the telephone to the baby\'s bed and gave it to Billy', 'He called his neighbor', 'He wrote down the name on paper'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi telefonni chaqaloqning karavotiga olib borib Billiga berdi."
      },
      {
        id: 's2-q19',
        order: 19,
        question: 'What did Jimmy\'s mother do when she came home?',
        modelAnswer: "She asked, 'Did anyone telephone?'",
        keywords: ['asked', 'did anyone telephone'],
        options: ['She cooked dinner immediately', 'She asked, \'Did anyone telephone?\'', 'She checked the baby\'s diaper', 'She checked her purse'],
        correctOptionIndex: 1,
        explanationUz: "Onasi uyga kelgach: 'Birov telefon qildimi?' deb so'radi."
      },
      {
        id: 's2-q20',
        order: 20,
        question: 'What did Jimmy answer?',
        modelAnswer: "'Yes, a man. But he only wanted to talk to Billy.'",
        keywords: ['yes', 'a man', 'wanted to talk to Billy'],
        options: ['"No, nobody called"', '\'Yes, a man. But he only wanted to talk to Billy.\'', '"Mr Baker called and left a message"', '"The telephone was broken"'],
        correctOptionIndex: 1,
        explanationUz: "Jimmi: 'Ha, bir erkak qildi, lekin u faqat Billi bilan gaplashmoqchi bo'ldi' dedi."
      }
    ],
    trueFalseQuestions: [
      {
        id: 's2-tf1',
        order: 1,
        statement: 'Mrs Jones went to the shops because she had run out of bread.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'she had no bread in the house, so she left the baby at home and went to the shops'."
      },
      {
        id: 's2-tf2',
        order: 2,
        statement: 'Jimmy was seven years old when the telephone rang.',
        correctAnswer: 'False',
        explanationUz: "Xato, Jimmi 5 yoshda edi ('five-year-old brother')."
      },
      {
        id: 's2-tf3',
        order: 3,
        statement: 'The caller on the phone was a man named Mr Baker.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'say to her, \"Mr Baker telephoned\".'"
      },
      {
        id: 's2-tf4',
        order: 4,
        statement: "Mr Baker was a close colleague of Jimmy's father.",
        correctAnswer: 'Not Given',
        explanationUz: "Matnda Janob Beyker kim ekanligi yoki otasining tanishi ekanligi haqida ma'lumot berilmagan."
      },
      {
        id: 's2-tf5',
        order: 5,
        statement: 'Jimmy could write all the letters of the English alphabet easily.',
        correctAnswer: 'False',
        explanationUz: "Xato, Jimmi B harfini qanday yozishni ham bilmas edi ('How do you make a B?')."
      },
      {
        id: 's2-tf6',
        order: 6,
        statement: "Jimmy took the telephone to the baby's bed and handed it to Billy.",
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'Jimmy took the telephone to the baby\'s bed and gave it to Billy'."
      }
    ]
  },
  {
    id: 'story-3',
    storyNumber: 3,
    title: 'Nasreddin and the Garden Fork',
    titleUz: 'Nasriddin va Bog‘ Panjaxorasi',
    cefrLevel: 'A2',
    wordCount: 161,
    readingTimeMinutes: 1,
    storyText: `Nasreddin had an old shed. It had no windows, so it was very dark, and it was full of old things.\nOne day Nasreddin went into this shed to get a ladder, but slipped on something and fell against a big garden fork. The fork hit him on the head and knocked him down. Then it fell on top of him and hit him hard on the left leg. The ends of the fork then went into his long beard. He fought with the fork fiercely, and at last threw it off him, jumped up and ran out of the shed. He was very angry. He had an old sword under his bed, and he now ran and got this. Then he ran back to the shed, opened the door suddenly and shouted in a terrible voice, 'All right, come out and fight, you and all the other forks in the world! I'm not afraid of you!'`,
    paragraphs: [
      `Nasreddin had an old shed. It had no windows, so it was very dark, and it was full of old things.`,
      `One day Nasreddin went into this shed to get a ladder, but slipped on something and fell against a big garden fork. The fork hit him on the head and knocked him down. Then it fell on top of him and hit him hard on the left leg. The ends of the fork then went into his long beard.`,
      `He fought with the fork fiercely, and at last threw it off him, jumped up and ran out of the shed. He was very angry. He had an old sword under his bed, and he now ran and got this.`,
      `Then he ran back to the shed, opened the door suddenly and shouted in a terrible voice, 'All right, come out and fight, you and all the other forks in the world! I'm not afraid of you!'`
    ],
    summaryUz: "Nasriddin qorong'i bostirmaga narvon olgani kiradi, toyib ketib katta panjaxara (vilka) ustiga yiqiladi. Panjaxara uni uradi va soqoliga o'ralib qoladi. Nasriddin qattiq g'azablanib to'shagi tagidan qilichini olib keladi va hamma panjaxaralarni jangga chorlaydi.",
    vocabulary: [
      {
        word: 'shed',
        pos: 'n.',
        phonetic: '[ʃed]',
        translationUz: "bostirma, omborxona",
        definitionEn: 'A simple roofed structure used for garden tools or storage.',
        exampleSentence: 'Nasreddin kept his old tools in the shed.'
      },
      {
        word: 'ladder',
        pos: 'n.',
        phonetic: '[ˈlædə(r)]',
        translationUz: 'narvon',
        definitionEn: 'A structure used for climbing up or down.',
        exampleSentence: 'He went into the shed to get a ladder.'
      },
      {
        word: 'garden fork',
        pos: 'n.',
        phonetic: '[ˈɡɑːdn fɔːk]',
        translationUz: 'bog‘ panjaxorasi, xaskash',
        definitionEn: 'A large fork with several prongs used for digging or turning soil.',
        exampleSentence: 'He slipped and fell against a big garden fork.'
      },
      {
        word: 'knock down',
        pos: 'v.',
        phonetic: '[nɒk daʊn]',
        translationUz: 'urib qulatmoq, yiqitmoq',
        definitionEn: 'To strike someone so that they fall to the ground.',
        exampleSentence: 'The heavy fork knocked him down.'
      },
      {
        word: 'beard',
        pos: 'n.',
        phonetic: '[bɪəd]',
        translationUz: 'soqol',
        definitionEn: 'Growth of hair on the chin and cheeks of a man.',
        exampleSentence: 'The ends of the fork got tangled in his long beard.'
      },
      {
        word: 'sword',
        pos: 'n.',
        phonetic: '[sɔːd]',
        translationUz: 'qilich',
        definitionEn: 'A weapon with a long metal blade and a handle.',
        exampleSentence: 'He ran and grabbed an old sword from under his bed.'
      }
    ],
    reproductionOutline: [
      'Nasreddin\'s old dark shed with no windows and full of old things.',
      'Goes to get a ladder, slips, and falls against a big garden fork.',
      'Fork hits him on the head, leg, and gets stuck in his beard.',
      'Fights the fork fiercely, throws it off, and runs out angrily.',
      'Fetches an old sword from under his bed.',
      'Shouts at the shed: "Come out and fight, you and all other forks!"'
    ],
    modelRetelling: `Nasreddin had a dark old shed full of old things. One day, he went inside to get a ladder, but he slipped and fell against a garden fork. The fork hit his head, fell on his leg, and got stuck in his long beard. Nasreddin fought with the fork angrily, threw it off, and ran out. He went to his bedroom, grabbed an old sword from under his bed, returned to the shed, and challenged all the forks in the world to come out and fight him.`,
    questions: [
      {
        id: 's3-q1',
        order: 1,
        question: 'What did Nasreddin have?',
        modelAnswer: 'Nasreddin had an old shed.',
        keywords: ['old shed', 'had'],
        options: ['A new garden house', 'An old shed', 'A large farm', 'A stable for horses'],
        correctOptionIndex: 1,
        explanationUz: "Nasriddinning eski bostirmasi bor edi."
      },
      {
        id: 's3-q2',
        order: 2,
        question: 'What was it like inside?',
        modelAnswer: 'It was very dark, and it was full of old things.',
        keywords: ['very dark', 'full of old things'],
        options: ['It was clean and bright', 'It was very dark, and it was full of old things', 'It was filled with grain', 'It was completely empty'],
        correctOptionIndex: 1,
        explanationUz: "Uning ichi juda qorong'i va eski narsalarga to'la edi."
      },
      {
        id: 's3-q3',
        order: 3,
        question: 'Why was it dark?',
        modelAnswer: 'Because it had no windows.',
        keywords: ['no windows', 'had no windows'],
        options: ['Because it was midnight', 'Because it had no windows', 'Because the door was locked', 'Because trees covered it'],
        correctOptionIndex: 1,
        explanationUz: "Chunki unda birorta ham deraza yo'q edi ('had no windows')."
      },
      {
        id: 's3-q4',
        order: 4,
        question: 'What happened one day?',
        modelAnswer: 'One day Nasreddin went into the shed, slipped and fell against a big garden fork.',
        keywords: ['went into shed', 'slipped', 'fell against garden fork'],
        options: ['A fire started in the shed', 'One day Nasreddin went into the shed, slipped and fell against a big garden fork', 'He found a treasure chest', 'A thief broke into the shed'],
        correctOptionIndex: 1,
        explanationUz: "Bir kuni u bostirmaga kirib, toyib ketdi va katta panjaxaraga urilib yiqildi."
      },
      {
        id: 's3-q5',
        order: 5,
        question: 'Why did Nasreddin go into the shed?',
        modelAnswer: 'He went into the shed to get a ladder.',
        keywords: ['to get a ladder', 'ladder'],
        options: ['To look for his sword', 'To get a ladder', 'To hide from the rain', 'To feed his animals'],
        correctOptionIndex: 1,
        explanationUz: "U narvon olish uchun bostirmaga kirgan edi ('to get a ladder')."
      },
      {
        id: 's3-q6',
        order: 6,
        question: 'What did he do inside the shed?',
        modelAnswer: 'He slipped on something and fell against a big garden fork.',
        keywords: ['slipped', 'fell', 'fork'],
        options: ['He climbed the ladder', 'He slipped on something and fell against a big garden fork', 'He sat down and rested', 'He cleaned the old things'],
        correctOptionIndex: 1,
        explanationUz: "U bir narsaga toyib ketib, panjaxaraga urildi."
      },
      {
        id: 's3-q7',
        order: 7,
        question: 'What did the fork do?',
        modelAnswer: 'The fork hit him on the head and knocked him down.',
        keywords: ['hit him on the head', 'knocked him down'],
        options: ['The fork broke in two', 'The fork hit him on the head and knocked him down', 'The fork fell harmlessly to the ground', 'The fork flew out the door'],
        correctOptionIndex: 1,
        explanationUz: "Panjaxara uning boshiga urib, yiqitdi."
      },
      {
        id: 's3-q8',
        order: 8,
        question: 'What did it do after that?',
        modelAnswer: 'It fell on top of him and hit him hard on the left leg.',
        keywords: ['fell on top', 'hit him hard', 'left leg'],
        options: ['It rolled away', 'It fell on top of him and hit him hard on the left leg', 'It stuck into the wooden floor', 'It hit his right shoulder'],
        correctOptionIndex: 1,
        explanationUz: "So'ng uning ustiga qulab, chap oyog'iga qattiq urildi."
      },
      {
        id: 's3-q9',
        order: 9,
        question: 'What did the ends of the fork do?',
        modelAnswer: 'The ends of the fork went into his long beard.',
        keywords: ['ends of the fork', 'went into', 'long beard'],
        options: ['They tore his coat', 'The ends of the fork went into his long beard', 'They pierced his hand', 'They bent completely'],
        correctOptionIndex: 1,
        explanationUz: "Panjaxaraning uchlari uning uzun soqoliga kirib qoldi."
      },
      {
        id: 's3-q10',
        order: 10,
        question: 'What did Nasreddin do?',
        modelAnswer: 'He fought with the fork fiercely, threw it off him, jumped up and ran out of the shed.',
        keywords: ['fought fiercely', 'threw it off', 'ran out of shed'],
        options: ['He cried for help', 'He fought with the fork fiercely, threw it off him, jumped up and ran out of the shed', 'He stayed lying on the floor', 'He fell asleep'],
        correctOptionIndex: 1,
        explanationUz: "U panjaxara bilan qattiq kurashib, uni irg'itib tashladi va bostirmadan yugurib chiqib ketdi."
      },
      {
        id: 's3-q11',
        order: 11,
        question: 'How did he feel?',
        modelAnswer: 'He was very angry.',
        keywords: ['very angry', 'furious'],
        options: ['He was frightened and timid', 'He was very angry', 'He was laughing', 'He felt exhausted'],
        correctOptionIndex: 1,
        explanationUz: "Nasriddinning qattiq jahli chiqdi ('very angry')."
      },
      {
        id: 's3-q12',
        order: 12,
        question: 'What did he have under his bed?',
        modelAnswer: 'He had an old sword under his bed.',
        keywords: ['old sword', 'under his bed'],
        options: ['A box of gold', 'He had an old sword under his bed', 'A pair of old boots', 'A loaded gun'],
        correctOptionIndex: 1,
        explanationUz: "Uning karavoti tagida eski qilich bor edi."
      },
      {
        id: 's3-q13',
        order: 13,
        question: 'What did he do now?',
        modelAnswer: 'He ran and got the sword, ran back to the shed, and opened the door suddenly.',
        keywords: ['got the sword', 'ran back to shed', 'opened the door'],
        options: ['He threw the sword into the river', 'He ran and got the sword, ran back to the shed, and opened the door suddenly', 'He called his neighbors to fight', 'He locked the shed forever'],
        correctOptionIndex: 1,
        explanationUz: "U borib qilichni oldi, bostirmaga yugurib kelib eshikni birdan ochdi."
      },
      {
        id: 's3-q14',
        order: 14,
        question: 'What did he shout?',
        modelAnswer: "'All right, come out and fight, you and all the other forks in the world! I'm not afraid of you!'",
        keywords: ['come out and fight', 'all other forks in the world', 'not afraid of you'],
        options: ['"Please don\'t hurt me again!"', '\'All right, come out and fight, you and all the other forks in the world! I\'m not afraid of you!\'', '"Someone help me with this ladder!"', '"I will burn this shed down!"'],
        correctOptionIndex: 1,
        explanationUz: "U: 'Qani chiq va jang qil, sen va dunyodagi barcha boshqa panjaxaralar! Men sendan qo'rqmayman!' deb baqirdi."
      }
    ],
    trueFalseQuestions: [
      {
        id: 's3-tf1',
        order: 1,
        statement: 'Nasreddin\'s shed was dark because it had very dirty windows.',
        correctAnswer: 'False',
        explanationUz: "Xato, unda umuman deraza yo'q edi ('It had no windows, so it was very dark')."
      },
      {
        id: 's3-tf2',
        order: 2,
        statement: 'Nasreddin entered the shed specifically to find a garden fork.',
        correctAnswer: 'False',
        explanationUz: "Xato, u narvon olish uchun kirgan edi ('to get a ladder')."
      },
      {
        id: 's3-tf3',
        order: 3,
        statement: 'The garden fork hit Nasreddin on the head and on his left leg.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'The fork hit him on the head and knocked him down. Then it fell on top of him and hit him hard on the left leg'."
      },
      {
        id: 's3-tf4',
        order: 4,
        statement: 'Nasreddin kept an old sword under his bed.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'He had an old sword under his bed'."
      },
      {
        id: 's3-tf5',
        order: 5,
        statement: 'Nasreddin\'s neighbors came outside to watch him fight the fork.',
        correctAnswer: 'Not Given',
        explanationUz: "Matnda qo'shnilar chiqqani yoki ko'rgani haqida hech qanday ma'lumot keltirilmagan."
      },
      {
        id: 's3-tf6',
        order: 6,
        statement: 'Nasreddin was deeply afraid of fighting the garden forks.',
        correctAnswer: 'False',
        explanationUz: "Xato: Nasriddin 'I'm not afraid of you!' (Men sizlardan qo'rqmayman) deb baqirdi."
      }
    ]
  },
  {
    id: 'story-4',
    storyNumber: 4,
    title: 'Two Glasses of Beer',
    titleUz: 'Ikki Qadah Pivo',
    cefrLevel: 'A2',
    wordCount: 139,
    readingTimeMinutes: 1,
    storyText: `A man always went to the same bar at the same time every day and asked for two glasses of beer. He drank them and then asked for two more.\n\nOne day the man behind the bar said to him, 'Why do you always ask for two glasses of beer? Why don't you get one big glass instead?'\n\nThe man answered, 'Because I do not like to drink alone. I drink with my friend.'\n\nBut a few days later the man came in and asked only for one beer.\n\n'Oh,' said the barman, 'has your friend died?'\n\n'Oh, no,' said the man. 'He is very well. This beer is for him. But I have stopped drinking beer. My doctor doesn't want me to drink any more because it is dangerous for me.'`,
    paragraphs: [
      `A man always went to the same bar at the same time every day and asked for two glasses of beer. He drank them and then asked for two more.`,
      `One day the man behind the bar said to him, 'Why do you always ask for two glasses of beer? Why don't you get one big glass instead?'\nThe man answered, 'Because I do not like to drink alone. I drink with my friend.'`,
      `But a few days later the man came in and asked only for one beer.\n'Oh,' said the barman, 'has your friend died?'`,
      `'Oh, no,' said the man. 'He is very well. This beer is for him. But I have stopped drinking beer. My doctor doesn't want me to drink any more because it is dangerous for me.'`
    ],
    summaryUz: "Bir kishi har kuni barga borib, do'sti uchun ham qo'shib 2 qadah pivo buyurtma qilar edi. Bir necha kundan so'ng u faqat 1 ta pivo so'radi. Barmen do'sti vafot etdimi deb so'raganida, u: 'Yo'q, u sog'-salomat. Men ichishni tashladim, bu pivo do'stim uchun!' deb javob beradi.",
    vocabulary: [
      {
        word: 'bar',
        pos: 'n.',
        phonetic: '[bɑː(r)]',
        translationUz: 'bar, qahvaxona',
        definitionEn: 'An establishment where drinks are served.',
        exampleSentence: 'A man went to the same bar every day.'
      },
      {
        word: 'barman',
        pos: 'n.',
        phonetic: '[ˈbɑːmən]',
        translationUz: 'barmen, barda ichimlik quyuvchi',
        definitionEn: 'A man who serves drinks behind the bar.',
        exampleSentence: 'The barman asked him why he always ordered two beers.'
      },
      {
        word: 'drink alone',
        pos: 'phrase',
        phonetic: '[drɪŋk əˈləʊn]',
        translationUz: "yolg'iz ichmoq",
        definitionEn: 'To consume beverages without company.',
        exampleSentence: 'I do not like to drink alone.'
      },
      {
        word: 'instead',
        pos: 'adv.',
        phonetic: '[ɪnˈsted]',
        translationUz: "o'rniga",
        definitionEn: 'As an alternative or substitute.',
        exampleSentence: 'Why don\'t you get one big glass instead?'
      },
      {
        word: 'dangerous',
        pos: 'adj.',
        phonetic: '[ˈdeɪndʒərəs]',
        translationUz: 'xavfli',
        definitionEn: 'Likely to cause harm or injury.',
        exampleSentence: 'Drinking is dangerous for his health.'
      }
    ],
    reproductionOutline: [
      'A man visits the same bar daily and orders two glasses of beer.',
      'Barman asks why he doesn\'t order one big glass instead.',
      'Man explains he drinks with his absent friend.',
      'Days later, he comes in and orders only one beer.',
      'Barman asks if his friend died.',
      'Man replies: "Friend is fine. This beer is for him — I stopped drinking!"'
    ],
    modelRetelling: `Every day, a man went to the same bar and ordered two glasses of beer. When the barman asked why he ordered two glasses instead of one large one, the man explained that he was drinking with his friend. A few days later, the man came in and ordered only one glass. The barman asked sadly if his friend had died. The man laughed and said, 'No, he is very well. This beer is for him. I have stopped drinking because my doctor warned me it is dangerous!'`,
    questions: [
      {
        id: 's4-q1',
        order: 1,
        question: 'What did the man in this story do every day?',
        modelAnswer: 'He went to the same bar at the same time every day.',
        keywords: ['went to the same bar', 'same time', 'every day'],
        options: ['He walked his dog in the park', 'He went to the same bar at the same time every day', 'He visited his friend at the hospital', 'He bought groceries at the market'],
        correctOptionIndex: 1,
        explanationUz: "U har kuni bir xil vaqtda bir xil barga borardi."
      },
      {
        id: 's4-q2',
        order: 2,
        question: 'What did he ask for?',
        modelAnswer: 'He asked for two glasses of beer.',
        keywords: ['two glasses of beer', 'two beers'],
        options: ['A cup of black coffee', 'Two glasses of beer', 'One big mug of cider', 'A bottle of mineral water'],
        correctOptionIndex: 1,
        explanationUz: "U ikkita qadah pivo so'rardi."
      },
      {
        id: 's4-q3',
        order: 3,
        question: 'What did he do then?',
        modelAnswer: 'He drank them and then asked for two more.',
        keywords: ['drank them', 'asked for two more'],
        options: ['He paid and went home', 'He drank them and then asked for two more', 'He gave one to the barman', 'He waited for his friend'],
        correctOptionIndex: 1,
        explanationUz: "Ularni ichib, yana ikkita so'rardi."
      },
      {
        id: 's4-q4',
        order: 4,
        question: 'What did the man behind the bar say one day?',
        modelAnswer: "'Why do you always ask for two glasses of beer? Why don't you get one big glass instead?'",
        keywords: ['why always two glasses', 'one big glass instead'],
        options: ['"You drink too much"', '\'Why do you always ask for two glasses of beer? Why don\'t you get one big glass instead?\'', '"We have run out of beer"', '"Where is your friend today?"'],
        correctOptionIndex: 1,
        explanationUz: "Barmen: 'Nega bitta katta qadahda olmaysiz?' deb so'radi."
      },
      {
        id: 's4-q5',
        order: 5,
        question: 'What did the man answer?',
        modelAnswer: "'Because I do not like to drink alone. I drink with my friend.'",
        keywords: ['do not like to drink alone', 'drink with my friend'],
        options: ['"Two small glasses taste better"', '\'Because I do not like to drink alone. I drink with my friend.\'', '"One glass gets warm too fast"', '"I can afford two glasses"'],
        correctOptionIndex: 1,
        explanationUz: "Kishi yolg'iz ichishni yoqtirmasligini, do'sti bilan ichishini aytdi."
      },
      {
        id: 's4-q6',
        order: 6,
        question: 'What happened a few days later?',
        modelAnswer: 'A few days later the man came in and asked only for one beer.',
        keywords: ['few days later', 'came in', 'asked for one beer'],
        options: ['The bar was closed', 'A few days later the man came in and asked only for one beer', 'His friend came with him', 'He ordered wine instead'],
        correctOptionIndex: 1,
        explanationUz: "Bir necha kundan so'ng u kelib faqat 1 ta pivo so'radi."
      },
      {
        id: 's4-q7',
        order: 7,
        question: 'What did the man ask for this time?',
        modelAnswer: 'He asked only for one beer.',
        keywords: ['only for one beer', 'one beer'],
        options: ['Three glasses of beer', 'He asked only for one beer', 'A glass of juice', 'Nothing at all'],
        correctOptionIndex: 1,
        explanationUz: "Bu safar faqat bitta pivo so'radi."
      },
      {
        id: 's4-q8',
        order: 8,
        question: 'What did the barman ask?',
        modelAnswer: "'Has your friend died?'",
        keywords: ['has your friend died', 'friend died'],
        options: ['"Are you feeling unwell?"', '\'Has your friend died?\'', '"Did you change your job?"', '"Do you have enough money?"'],
        correctOptionIndex: 1,
        explanationUz: "Barmen: 'Do'stingiz vafot etdimi?' deb so'radi."
      },
      {
        id: 's4-q9',
        order: 9,
        question: 'What did the man answer?',
        modelAnswer: "'He is very well. This beer is for him. But I have stopped drinking beer because it is dangerous for me.'",
        keywords: ['very well', 'beer is for him', 'stopped drinking', 'dangerous'],
        options: ['"Yes, he died last Monday"', '\'He is very well. This beer is for him. But I have stopped drinking beer because it is dangerous for me.\'', '"No, we had an argument"', '"He moved to another city"'],
        correctOptionIndex: 1,
        explanationUz: "U: 'Do'stim sog'-salomat. Bu pivo uniki. Men o'zim ichishni tashladim' deb javob berdi."
      }
    ],
    trueFalseQuestions: [
      {
        id: 's4-tf1',
        order: 1,
        statement: 'The man visited the bar at different times each day.',
        correctAnswer: 'False',
        explanationUz: "Xato: U har kuni aynan bir xil vaqtda borar edi ('at the same time every day')."
      },
      {
        id: 's4-tf2',
        order: 2,
        statement: 'The man originally ordered two beers because he did not like to drink alone.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'Because I do not like to drink alone. I drink with my friend'."
      },
      {
        id: 's4-tf3',
        order: 3,
        statement: 'The barman\'s name was Richard.',
        correctAnswer: 'Not Given',
        explanationUz: "Matnda barmenning ismi tilga olinmagan."
      },
      {
        id: 's4-tf4',
        order: 4,
        statement: 'A few days later, the man\'s friend had sadly passed away.',
        correctAnswer: 'False',
        explanationUz: "Xato: Uning do'sti vafot etmagan, sog'-salomat edi ('He is very well')."
      },
      {
        id: 's4-tf5',
        order: 5,
        statement: 'The man stopped drinking beer on his doctor\'s orders.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'My doctor doesn\'t want me to drink any more because it is dangerous for me'."
      },
      {
        id: 's4-tf6',
        order: 6,
        statement: 'The man had been visiting this specific bar for over ten years.',
        correctAnswer: 'Not Given',
        explanationUz: "Matnda uning bu barga necha yildan buyon kelishi haqida hech qanday ma'lumot yo'q."
      }
    ]
  },
  {
    id: 'story-5',
    storyNumber: 5,
    title: 'I Am Not a Bear',
    titleUz: 'Men Ayiq Emasman',
    cefrLevel: 'A2',
    wordCount: 167,
    readingTimeMinutes: 1,
    storyText: `Old Mr Black loved shooting bears, but his eyes were not good any more. Several times he nearly shot people instead of bears, so his friends were always very careful when they went out shooting with him.\n\nOne day a young friend of his wanted to have a joke, so he got a big piece of white paper and wrote on it in very big letters 'I AM NOT A BEAR'. Then he tied it to his back and went off. His friends saw it and laughed a lot.\n\nBut it did not save him. After a few minutes Mr Black shot at him and knocked his hat off.\n\nThe young man was frightened and angry. 'Didn't you see this piece of paper?' he shouted to Mr Black. 'Yes, I did,' said Mr Black. Then he went nearer, looked carefully at the paper and said, 'Oh, I am very sorry. I did not see the word NOT.'`,
    paragraphs: [
      `Old Mr Black loved shooting bears, but his eyes were not good any more. Several times he nearly shot people instead of bears, so his friends were always very careful when they went out shooting with him.`,
      `One day a young friend of his wanted to have a joke, so he got a big piece of white paper and wrote on it in very big letters 'I AM NOT A BEAR'. Then he tied it to his back and went off. His friends saw it and laughed a lot.`,
      `But it did not save him. After a few minutes Mr Black shot at him and knocked his hat off.`,
      `The young man was frightened and angry. 'Didn't you see this piece of paper?' he shouted to Mr Black. 'Yes, I did,' said Mr Black. Then he went nearer, looked carefully at the paper and said, 'Oh, I am very sorry. I did not see the word NOT.'`
    ],
    summaryUz: "Keksa ovchi Janob Blek ayiqlarni ovlashni sevar, ammo ko'zi xiralashgan edi. Bir kuni yosh do'sti hazillashib orqasiga 'MEN AYIQ EMASMAN' deb yozib oldi. Janob Blek baribir uni otdi va shlyapasini uchirib yubordi. Yaqinroq kelib: 'Kechirasiz, NOT (Emas) so'zini ko'rmay qolibman' dedi.",
    vocabulary: [
      {
        word: 'shooting',
        pos: 'n.',
        phonetic: '[ˈʃuːtɪŋ]',
        translationUz: 'ov qilish, otish',
        definitionEn: 'The sport or activity of hunting animals with a gun.',
        exampleSentence: 'Mr Black loved shooting bears in the forest.'
      },
      {
        word: 'nearly',
        pos: 'adv.',
        phonetic: '[ˈnɪəli]',
        translationUz: 'deyarli, sal qolsa',
        definitionEn: 'Almost, very close to.',
        exampleSentence: 'He nearly shot people instead of bears.'
      },
      {
        word: 'joke',
        pos: 'n.',
        phonetic: '[dʒəʊk]',
        translationUz: 'hazil, latifa',
        definitionEn: 'Something said or done to provoke laughter.',
        exampleSentence: 'His young friend wanted to have a joke.'
      },
      {
        word: 'tie',
        pos: 'v.',
        phonetic: '[taɪ]',
        translationUz: "bog'lamoq",
        definitionEn: 'To attach or fasten with a string or cord.',
        exampleSentence: 'He tied the paper to his back.'
      },
      {
        word: 'frightened',
        pos: 'adj.',
        phonetic: '[ˈfraɪtnd]',
        translationUz: "qo'rqqan, cho'chigan",
        definitionEn: 'Afraid or anxious.',
        exampleSentence: 'The young man was frightened and angry.'
      },
      {
        word: 'knock off',
        pos: 'v.',
        phonetic: '[nɒk ɒf]',
        translationUz: 'uchirib yubormoq',
        definitionEn: 'To cause something to fall off by striking it.',
        exampleSentence: 'The bullet knocked his hat off.'
      }
    ],
    reproductionOutline: [
      'Mr Black loves bear shooting, but has bad eyesight and nearly shoots people.',
      'Young friend plays a joke: writes "I AM NOT A BEAR" on paper and ties to back.',
      'Friends laugh, but Mr Black shoots and knocks his hat off.',
      'Frightened young man asks: "Didn\'t you see the paper?"',
      'Mr Black looks closely: "Sorry, I didn\'t see the word NOT!"'
    ],
    modelRetelling: `Old Mr Black loved hunting bears, but his poor eyesight caused him to nearly shoot people several times. To stay safe and have a joke, a young friend wrote 'I AM NOT A BEAR' in large letters on a white paper and tied it to his back. But after a few minutes, Mr Black shot at him and knocked his hat off. When the angry young man asked if he had seen the paper, Mr Black walked closer, looked at the sign, and apologized: 'I saw the paper, but I didn't see the word NOT!'`,
    questions: [
      {
        id: 's5-q1',
        order: 1,
        question: 'What did Mr Black love?',
        modelAnswer: 'He loved shooting bears.',
        keywords: ['loved shooting bears', 'hunting bears'],
        options: ['Catching fish', 'He loved shooting bears', 'Walking in the woods', 'Reading novels'],
        correctOptionIndex: 1,
        explanationUz: "Janob Blek ayiq ovlashni yaxshi ko'rardi."
      },
      {
        id: 's5-q2',
        order: 2,
        question: 'What was the matter with him?',
        modelAnswer: 'His eyes were not good any more.',
        keywords: ['eyes not good', 'poor eyesight', 'bad vision'],
        options: ['He had a bad knee', 'His eyes were not good any more', 'He lost his gun', 'He could not walk fast'],
        correctOptionIndex: 1,
        explanationUz: "Uning ko'zlari endi yaxshi ko'rmas edi."
      },
      {
        id: 's5-q3',
        order: 3,
        question: 'What happened several times?',
        modelAnswer: 'Several times he nearly shot people instead of bears.',
        keywords: ['nearly shot people', 'instead of bears'],
        options: ['He got lost in the forest', 'Several times he nearly shot people instead of bears', 'He dropped his rifle into a river', 'He shot his own horse'],
        correctOptionIndex: 1,
        explanationUz: "Bir necha bor ayiq o'rniga odamlarni otib qo'yishiga sal qolgan edi."
      },
      {
        id: 's5-q4',
        order: 4,
        question: 'What did his friends do when they went out shooting with him?',
        modelAnswer: 'His friends were always very careful.',
        keywords: ['always very careful', 'careful'],
        options: ['They wore bright hats', 'His friends were always very careful', 'They stayed far behind in the car', 'They took his gun away'],
        correctOptionIndex: 1,
        explanationUz: "Do'stlari u bilan ovga chiqqanda juda ehtiyot bo'lishardi."
      },
      {
        id: 's5-q5',
        order: 5,
        question: 'What did one of his young friends want to do one day?',
        modelAnswer: 'He wanted to have a joke.',
        keywords: ['have a joke', 'play a prank'],
        options: ['He wanted to help him shoot', 'He wanted to have a joke', 'He wanted to buy his rifle', 'He wanted to stay home'],
        correctOptionIndex: 1,
        explanationUz: "Bir kuni yosh do'stlaridan biri hazillashmoqchi bo'ldi ('wanted to have a joke')."
      },
      {
        id: 's5-q6',
        order: 6,
        question: 'What did he do?',
        modelAnswer: 'He got a big piece of white paper and wrote on it in very big letters.',
        keywords: ['got paper', 'wrote in big letters'],
        options: ['He dressed as a bear', 'He got a big piece of white paper and wrote on it in very big letters', 'He painted his clothes red', 'He climbed a tall tree'],
        correctOptionIndex: 1,
        explanationUz: "U katta oq qog'oz olib, ustiga katta harflar bilan yozdi."
      },
      {
        id: 's5-q7',
        order: 7,
        question: 'What did he write on the piece of paper?',
        modelAnswer: "He wrote 'I AM NOT A BEAR'.",
        keywords: ['I AM NOT A BEAR', 'not a bear'],
        options: ['"PLEASE DO NOT SHOOT"', '\'I AM NOT A BEAR\'', '"I AM A HUNTER"', '"LOOK AT MY HAT"'],
        correctOptionIndex: 1,
        explanationUz: "Qog'ozga: 'MEN AYIQ EMASMAN' deb yozdi."
      },
      {
        id: 's5-q8',
        order: 8,
        question: 'What did he do then?',
        modelAnswer: 'He tied it to his back and went off.',
        keywords: ['tied to back', 'went off'],
        options: ['He put it in his pocket', 'He tied it to his back and went off', 'He gave it to Mr Black', 'He pinned it to a tree'],
        correctOptionIndex: 1,
        explanationUz: "Qog'ozni orqasiga bog'lab, yurib ketdi."
      },
      {
        id: 's5-q9',
        order: 9,
        question: 'What did his friends do?',
        modelAnswer: 'His friends saw it and laughed a lot.',
        keywords: ['saw it', 'laughed a lot'],
        options: ['They got angry', 'His friends saw it and laughed a lot', 'They told him to take it off', 'They hid behind rocks'],
        correctOptionIndex: 1,
        explanationUz: "Do'stlari buni ko'rib rosa kulishdi."
      },
      {
        id: 's5-q10',
        order: 10,
        question: 'What happened then?',
        modelAnswer: 'After a few minutes Mr Black shot at him and knocked his hat off.',
        keywords: ['shot at him', 'knocked his hat off'],
        options: ['They found a real bear', 'After a few minutes Mr Black shot at him and knocked his hat off', 'It started raining hard', 'The paper tore off'],
        correctOptionIndex: 1,
        explanationUz: "Bir necha daqiqadan so'ng Janob Blek unga qarab otdi va shlyapasini uchirdi."
      },
      {
        id: 's5-q11',
        order: 11,
        question: 'Did the paper save the young man?',
        modelAnswer: 'No, it did not save him.',
        keywords: ['did not save him', 'no'],
        options: ['Yes, it stopped the bullet', 'No, it did not save him', 'Yes, Mr Black didn\'t shoot', 'Partially'],
        correctOptionIndex: 1,
        explanationUz: "Yo'q, qog'oz uni qutqarib qololmadi."
      },
      {
        id: 's5-q12',
        order: 12,
        question: 'How did he feel?',
        modelAnswer: 'The young man was frightened and angry.',
        keywords: ['frightened', 'angry', 'scared'],
        options: ['He felt very proud', 'The young man was frightened and angry', 'He was still laughing', 'He felt unconcerned'],
        correctOptionIndex: 1,
        explanationUz: "Yosh yigit ham qo'rqib ketdi, ham qattiq g'azablandi."
      },
      {
        id: 's5-q13',
        order: 13,
        question: 'What did he shout?',
        modelAnswer: "'Didn't you see this piece of paper?' he shouted to Mr Black.",
        keywords: ['didn\'t you see', 'piece of paper'],
        options: ['"Help me, doctor!"', '\'Didn\'t you see this piece of paper?\' he shouted to Mr Black.', '"Why did you break my hat?"', '"I will call the police!"'],
        correctOptionIndex: 1,
        explanationUz: "U Janob Blekka qarab: 'Qog'ozni ko'rmadingizmi?' deb baqirdi."
      },
      {
        id: 's5-q14',
        order: 14,
        question: 'What did Mr Black do?',
        modelAnswer: 'He went nearer, looked carefully at the paper and spoke.',
        keywords: ['went nearer', 'looked carefully'],
        options: ['He ran away into the trees', 'He went nearer, looked carefully at the paper and spoke', 'He reloaded his rifle', 'He put on his glasses'],
        correctOptionIndex: 1,
        explanationUz: "Janob Blek yaqinroq kelib, qog'ozga diqqat bilan qaradi."
      },
      {
        id: 's5-q15',
        order: 15,
        question: 'What did he say?',
        modelAnswer: "'Oh, I am very sorry. I did not see the word NOT.'",
        keywords: ['very sorry', 'did not see the word NOT'],
        options: ['"You should not wear hats in the woods"', '\'Oh, I am very sorry. I did not see the word NOT.\'', '"I thought you were a deer"', '"The letters were too small"'],
        correctOptionIndex: 1,
        explanationUz: "U: 'Kechirasiz, NOT (Emas) so'zini ko'rmay qolibman' dedi."
      }
    ],
    trueFalseQuestions: [
      {
        id: 's5-tf1',
        order: 1,
        statement: 'Mr Black had eyesight problems that made shooting dangerous.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'his eyes were not good any more'."
      },
      {
        id: 's5-tf2',
        order: 2,
        statement: 'Mr Black had previously shot and killed several of his close friends.',
        correctAnswer: 'False',
        explanationUz: "Xato: U do'stlarini o'ldirmagan, faqat sal qolgan edi ('nearly shot people')."
      },
      {
        id: 's5-tf3',
        order: 3,
        statement: 'The young friend used blue paint to write on the piece of paper.',
        correctAnswer: 'Not Given',
        explanationUz: "Matnda yozuv qanday rangda yozilganligi haqida ma'lumot berilmagan."
      },
      {
        id: 's5-tf4',
        order: 4,
        statement: 'The piece of paper successfully prevented Mr Black from shooting.',
        correctAnswer: 'False',
        explanationUz: "Xato: Qog'oz uni otishdan to'xtata olmadi ('it did not save him. Mr Black shot at him')."
      },
      {
        id: 's5-tf5',
        order: 5,
        statement: 'Mr Black\'s shot hit the young man\'s hat off his head.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'Mr Black shot at him and knocked his hat off'."
      },
      {
        id: 's5-tf6',
        order: 6,
        statement: 'Mr Black saw the piece of paper, but failed to notice the word NOT.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'Yes, I did [see the paper]... I did not see the word NOT'."
      }
    ]
  },
  {
    id: 'story-6',
    storyNumber: 6,
    title: 'The Grandfather Lost in the Park',
    titleUz: "Bog'da Adashgan Bobo",
    cefrLevel: 'A2',
    wordCount: 162,
    readingTimeMinutes: 1,
    storyText: `Mrs Brown's old grandfather lived with her and her husband. Every morning he went for a walk in the park and came home at half past twelve for his lunch.\n\nBut one morning a police car stopped outside Mrs Brown's house at twelve o'clock, and two policemen helped Mr Brown to get out. One of them said to Mrs Brown, 'The poor old gentleman lost his way in the park and telephoned us for help, so we sent a car to bring him home.' Mrs Brown was very surprised, but she thanked the policemen and they left.\n\n'But, Grandfather,' she then said, 'you have been to that park nearly every day for twenty years. How did you lose your way there?'\n\nThe old man smiled, closed one eye and said, 'I didn't quite lose my way. I just got tired and I didn't want to walk home!'`,
    paragraphs: [
      `Mrs Brown's old grandfather lived with her and her husband. Every morning he went for a walk in the park and came home at half past twelve for his lunch.`,
      `But one morning a police car stopped outside Mrs Brown's house at twelve o'clock, and two policemen helped Mr Brown to get out. One of them said to Mrs Brown, 'The poor old gentleman lost his way in the park and telephoned us for help, so we sent a car to bring him home.' Mrs Brown was very surprised, but she thanked the policemen and they left.`,
      `'But, Grandfather,' she then said, 'you have been to that park nearly every day for twenty years. How did you lose your way there?'`,
      `The old man smiled, closed one eye and said, 'I didn't quite lose my way. I just got tired and I didn't want to walk home!'`
    ],
    summaryUz: "Missis Braunning keksa bobosi har kuni bog'da sayr qilib 12:30 da tushlikka qaytardi. Bir kuni politsiya mashinasi uni soat 12:00 da olib keladi. Politsiyachi bobo adashib qolganini aytadi. Nabirasi: '20 yildan beri borasiz-ku, qanday adashdingiz?' desa, bobo bir ko'zini qisib: 'Adashganim yo'q, shunchaki charchadim va piyoda yurishni xohlamadim!' deb javob beradi.",
    vocabulary: [
      {
        word: 'grandfather',
        pos: 'n.',
        phonetic: '[ˈɡrænfɑːðə(r)]',
        translationUz: 'bobo',
        definitionEn: 'The father of one\'s father or mother.',
        exampleSentence: 'Mrs Brown\'s old grandfather lived with her.'
      },
      {
        word: 'go for a walk',
        pos: 'phrase',
        phonetic: '[ɡəʊ fə(r) ə wɔːk]',
        translationUz: 'sayrga chiqmoq, aylanmoq',
        definitionEn: 'To take a leisurely walk.',
        exampleSentence: 'Every morning he went for a walk in the park.'
      },
      {
        word: 'police car',
        pos: 'n.',
        phonetic: '[pəˈliːs kɑː(r)]',
        translationUz: 'politsiya mashinasi',
        definitionEn: 'A motor vehicle used by police officers.',
        exampleSentence: 'A police car stopped outside the house.'
      },
      {
        word: 'lose one\'s way',
        pos: 'idiom',
        phonetic: '[luːz wʌnz weɪ]',
        translationUz: 'yo‘ldan adashmoq',
        definitionEn: 'To become lost or unable to find the correct route.',
        exampleSentence: 'The old gentleman lost his way in the park.'
      },
      {
        word: 'wink / close one eye',
        pos: 'phrase',
        phonetic: '[kləʊz wʌn aɪ]',
        translationUz: 'bir ko‘zni qismoq',
        definitionEn: 'To close one eye briefly as a signal or joke.',
        exampleSentence: 'The old man smiled and closed one eye.'
      },
      {
        word: 'surprised',
        pos: 'adj.',
        phonetic: '[səˈpraɪzd]',
        translationUz: 'hayron qolgan, taajjubda',
        definitionEn: 'Feeling or showing surprise.',
        exampleSentence: 'Mrs Brown was very surprised to see the police car.'
      }
    ],
    reproductionOutline: [
      'Mrs Brown\'s grandfather lives with her and walks in the park daily.',
      'Usually returns at 12:30 for lunch.',
      'One day, a police car brings him home at 12:00.',
      'Policeman says the old gentleman lost his way and phoned for help.',
      'Mrs Brown asks how he could lose his way after visiting the park for 20 years.',
      'Grandfather winks: "I didn\'t lose my way — I was just tired of walking!"'
    ],
    modelRetelling: `Mrs Brown's grandfather lived with her and went for a walk in the park every morning, returning at 12:30 for lunch. One morning at twelve o'clock, a police car brought him home. The officers said he had gotten lost and called them for help. Mrs Brown thanked the police, but wondered how he could get lost after walking in that park for twenty years. The grandfather smiled, winked, and confessed that he wasn't really lost — he was just tired and didn't want to walk all the way home!`,
    questions: [
      {
        id: 's6-q1',
        order: 1,
        question: 'Who lived with Mr and Mrs Brown?',
        modelAnswer: "Mrs Brown's old grandfather lived with them.",
        keywords: ['grandfather', 'Mrs Brown', 'lived with'],
        options: ['Mrs Brown\'s nephew', 'Mrs Brown\'s old grandfather', 'Their married daughter', 'A university student'],
        correctOptionIndex: 1,
        explanationUz: "Missis Braunning keksa bobosi ular bilan birga yashardi."
      },
      {
        id: 's6-q2',
        order: 2,
        question: 'What did he do every morning?',
        modelAnswer: 'Every morning he went for a walk in the park.',
        keywords: ['walk in the park', 'every morning'],
        options: ['He read the newspaper in bed', 'Every morning he went for a walk in the park', 'He worked in the garden', 'He went to the local market'],
        correctOptionIndex: 1,
        explanationUz: "Har kuni ertalab u bog'da sayr qilardi."
      },
      {
        id: 's6-q3',
        order: 3,
        question: 'When did he come home?',
        modelAnswer: 'He came home at half past twelve.',
        keywords: ['half past twelve', '12:30'],
        options: ['At eleven o\'clock', 'He came home at half past twelve', 'At one o\'clock', 'At two in the afternoon'],
        correctOptionIndex: 1,
        explanationUz: "U soat o'n ikki yarimda (12:30) uyga qaytardi."
      },
      {
        id: 's6-q4',
        order: 4,
        question: 'What did he come home for?',
        modelAnswer: 'He came home for his lunch.',
        keywords: ['lunch', 'for his lunch'],
        options: ['To watch television', 'He came home for his lunch', 'To take his afternoon medicine', 'To feed his cat'],
        correctOptionIndex: 1,
        explanationUz: "U tushlik qilish uchun uyga kelardi ('for his lunch')."
      },
      {
        id: 's6-q5',
        order: 5,
        question: 'What happened one morning?',
        modelAnswer: "A police car stopped outside Mrs Brown's house.",
        keywords: ['police car stopped', 'house'],
        options: ['The park was closed for repairs', 'A police car stopped outside Mrs Brown\'s house', 'Grandfather fell on the ice', 'An ambulance arrived'],
        correctOptionIndex: 1,
        explanationUz: "Bir kuni ertalab uy oldida politsiya mashinasi to'xtadi."
      },
      {
        id: 's6-q6',
        order: 6,
        question: 'At what time did it happen?',
        modelAnswer: 'It happened at twelve o\'clock.',
        keywords: ['twelve o\'clock', '12:00'],
        options: ['At ten o\'clock', 'It happened at twelve o\'clock', 'At half past one', 'At three o\'clock'],
        correctOptionIndex: 1,
        explanationUz: "Bu soat o'n ikkida (12:00 da) sodir bo'ldi."
      },
      {
        id: 's6-q7',
        order: 7,
        question: 'What did the two policemen do?',
        modelAnswer: 'Two policemen helped Mr Brown to get out of the car.',
        keywords: ['helped get out', 'policemen'],
        options: ['They questioned Mrs Brown', 'Two policemen helped Mr Brown to get out of the car', 'They asked for identification', 'They gave him a traffic ticket'],
        correctOptionIndex: 1,
        explanationUz: "Ikki politsiyachi unga mashinadan tushishga yordam berdi."
      },
      {
        id: 's6-q8',
        order: 8,
        question: 'What did one of them say to Mrs Brown?',
        modelAnswer: "'The poor old gentleman lost his way in the park and telephoned us for help, so we sent a car to bring him home.'",
        keywords: ['lost his way', 'telephoned for help', 'sent a car'],
        options: ['"He was disturbing people in the park"', '\'The poor old gentleman lost his way in the park and telephoned us for help, so we sent a car to bring him home.\'', '"Your grandfather forgot his wallet"', '"We found him asleep on a bench"'],
        correctOptionIndex: 1,
        explanationUz: "Ular bobo adashib politsiyaga telefon qilgani va mashinada olib kelishganini aytishdi."
      },
      {
        id: 's6-q9',
        order: 9,
        question: 'How did Mrs Brown feel?',
        modelAnswer: 'Mrs Brown was very surprised.',
        keywords: ['very surprised', 'shocked'],
        options: ['She was extremely angry', 'Mrs Brown was very surprised', 'She felt relieved and relaxed', 'She was indifferent'],
        correctOptionIndex: 1,
        explanationUz: "Missis Braun juda hayron qoldi ('very surprised')."
      },
      {
        id: 's6-q10',
        order: 10,
        question: 'What did she do?',
        modelAnswer: 'She thanked the policemen and they left.',
        keywords: ['thanked the policemen', 'they left'],
        options: ['She paid the police officers', 'She thanked the policemen and they left', 'She scolded her grandfather immediately', 'She called the doctor'],
        correctOptionIndex: 1,
        explanationUz: "U politsiyachilarga minnatdorchilik bildirdi va ular ketishdi."
      },
      {
        id: 's6-q11',
        order: 11,
        question: 'What did she say to her grandfather?',
        modelAnswer: "'You have been to that park nearly every day for twenty years. How did you lose your way there?'",
        keywords: ['twenty years', 'how did you lose your way'],
        options: ['"Are you hurt anywhere?"', '\'You have been to that park nearly every day for twenty years. How did you lose your way there?\'', '"Why didn\'t you take a taxi?"', '"Never go to that park again"'],
        correctOptionIndex: 1,
        explanationUz: "U: '20 yildan beri deyarli har kuni borasiz-ku, qanday adashdingiz?' deb so'radi."
      },
      {
        id: 's6-q12',
        order: 12,
        question: 'What did the old man do?',
        modelAnswer: 'The old man smiled and closed one eye.',
        keywords: ['smiled', 'closed one eye', 'winked'],
        options: ['He bowed his head and wept', 'The old man smiled and closed one eye', 'He denied everything', 'He went straight to the kitchen'],
        correctOptionIndex: 1,
        explanationUz: "Bobo jilmayib, bitta ko'zini qisdi (wink qildi)."
      },
      {
        id: 's6-q13',
        order: 13,
        question: 'What did he say?',
        modelAnswer: "'I didn't quite lose my way. I just got tired and I didn't want to walk home!'",
        keywords: ['didn\'t quite lose my way', 'got tired', 'didn\'t want to walk home'],
        options: ['"The paths were too confusing"', '\'I didn\'t quite lose my way. I just got tired and I didn\'t want to walk home!\'', '"The fog was too thick"', '"I lost my spectacles"'],
        correctOptionIndex: 1,
        explanationUz: "U: 'Unchalik ham adashmadim. Shunchaki charchab qoldim va piyoda yurishni xohlamadim!' deb aytdi."
      }
    ],
    trueFalseQuestions: [
      {
        id: 's6-tf1',
        order: 1,
        statement: 'Mrs Brown\'s grandfather normally returned from the park at 12:30 for lunch.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'and came home at half past twelve for his lunch'."
      },
      {
        id: 's6-tf2',
        order: 2,
        statement: 'The police car arrived outside the house at one o\'clock in the afternoon.',
        correctAnswer: 'False',
        explanationUz: "Xato: Politsiya soat 12:00 da (at twelve o'clock) kelgan edi."
      },
      {
        id: 's6-tf3',
        order: 3,
        statement: 'The policemen charged Mrs Brown a fine for bringing her grandfather home.',
        correctAnswer: 'Not Given',
        explanationUz: "Matnda politsiyaga pul to'langani yoki jarima yozilgani haqida hech qanday ma'lumot yo'q."
      },
      {
        id: 's6-tf4',
        order: 4,
        statement: 'The grandfather had visited that same park almost daily for twenty years.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'you have been to that park nearly every day for twenty years'."
      },
      {
        id: 's6-tf5',
        order: 5,
        statement: 'The grandfather was genuinely lost and could not find the park exit.',
        correctAnswer: 'False',
        explanationUz: "Xato: U aslida adashmagan edi, shunchaki charchagan va piyoda yurishni xohlamagan edi ('I didn\'t quite lose my way')."
      },
      {
        id: 's6-tf6',
        order: 6,
        statement: 'The grandfather smiled and closed one eye when telling Mrs Brown the truth.',
        correctAnswer: 'True',
        explanationUz: "To'g'ri: 'The old man smiled, closed one eye and said...'."
      }
    ]
  }
,
  {
    id: 'story-7',
    storyNumber: 7,
    title: "Helen and Her Glasses",
    titleUz: "Helen va uning ko'zoynagi",
    cefrLevel: 'A2',
    wordCount: 110,
    readingTimeMinutes: 1,
    storyText: "Helen's eyes were not very good, so she usually wore glasses. But when she was seventeen and she began to go out with a young man, she never wore her glasses when she was with him. When he came to the door to take her out, she took her glasses off, and when she came home again and he left, she put them on.\n\nOne day her mother said to her, 'But Helen, why do you never wear your glasses when you are with Jim? He takes you to beautiful places in his car, but you don't see anything.'\n\n'Well, Mother,' said Helen, 'I look prettier to Jim when I am not wearing my glasses- and he looks better to me too!'",
    paragraphs: [
      "Helen's eyes were not very good, so she usually wore glasses. But when she was seventeen and she began to go out with a young man, she never wore her glasses when she was with him. When he came to the door to take her out, she took her glasses off, and when she came home again and he left, she put them on.",
      "One day her mother said to her, 'But Helen, why do you never wear your glasses when you are with Jim? He takes you to beautiful places in his car, but you don't see anything.'",
      "'Well, Mother,' said Helen, 'I look prettier to Jim when I am not wearing my glasses- and he looks better to me too!'"
],
    summaryUz: "Helen ko'zi yaxshi ko'rmagani uchun doim ko'zoynak taqardi. Ammo Jim bilan uchrashganda ko'zoynagini yechib qo'yardi. Onasi sababini so'raganida, Helen ko'zoynaksiz Jimga chiroyliroq ko'rinishi va Jim ham o'ziga kelishganroq ko'rinishini aytadi.",
    vocabulary: [
      {
            "word": "glasses",
            "pos": "n.",
            "phonetic": "[ˈɡlɑːsɪz]",
            "translationUz": "ko'zoynak",
            "definitionEn": "Lenses set in a frame worn on the face to improve vision.",
            "exampleSentence": "She wears glasses for reading and driving."
      },
      {
            "word": "go out with",
            "pos": "phr. v.",
            "phonetic": "[ɡəʊ aʊt wɪð]",
            "translationUz": "uchrashmoq (sevgilisi bilan)",
            "definitionEn": "To have a romantic relationship with someone.",
            "exampleSentence": "She began to go out with a nice young man."
      },
      {
            "word": "take off",
            "pos": "phr. v.",
            "phonetic": "[teɪk ɒf]",
            "translationUz": "yechmoq, olib qo'ymoq",
            "definitionEn": "To remove clothing or an accessory from one's body.",
            "exampleSentence": "She took her glasses off before entering the room."
      },
      {
            "word": "put on",
            "pos": "phr. v.",
            "phonetic": "[pʊt ɒn]",
            "translationUz": "taqmoq, kiymoq",
            "definitionEn": "To dress oneself in or wear an accessory.",
            "exampleSentence": "She put on her glasses when she got home."
      },
      {
            "word": "pretty (prettier)",
            "pos": "adj.",
            "phonetic": "[ˈprɪti] ([ˈprɪtiə])",
            "translationUz": "chiroyli (chiroyliroq)",
            "definitionEn": "Attractive in a delicate or pleasant way.",
            "exampleSentence": "She felt she looked prettier without her heavy glasses."
      },
      {
            "word": "look better",
            "pos": "v. phr.",
            "phonetic": "[lʊk ˈbetə]",
            "translationUz": "yaxshiroq / kelishganroq ko'rinmoq",
            "definitionEn": "To appear more appealing or attractive.",
            "exampleSentence": "He looks much better in casual clothes."
      }
],
    reproductionOutline: [
      "Helen had poor eyesight and usually wore glasses.",
      "At seventeen, she started going out with a young man named Jim.",
      "She always took off her glasses when meeting Jim, and put them on when returning home.",
      "Her mother asked why she never wore glasses despite visiting scenic places in Jim's car.",
      "Helen humorously answered: without glasses, she looked prettier to Jim, and he looked better to her."
],
    modelRetelling: "Helen had poor eyesight and usually had to wear glasses. However, at age seventeen she began going out with Jim. Whenever Jim arrived at the door, she took her glasses off, and only put them back on after returning home and saying goodbye. One day her mother wondered why Helen did not wear glasses with Jim, even though he took her to beautiful places by car. Helen replied that without glasses she looked prettier to Jim, and Jim also looked better to her.",
    questions: [
      {
            "id": "s7-q1",
            "order": 1,
            "question": "What did Helen usually wear?",
            "modelAnswer": "She usually wore glasses.",
            "keywords": [
                  "wore",
                  "glasses",
                  "usually"
            ],
            "options": [
                  "Glasses",
                  "A hat",
                  "A blue coat",
                  "Sunglasses"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Matn boshida: 'Helen\\'s eyes were not very good, so she usually wore glasses.'"
      },
      {
            "id": "s7-q2",
            "order": 2,
            "question": "Why did she do this?",
            "modelAnswer": "Because her eyes were not very good.",
            "keywords": [
                  "eyes",
                  "not good",
                  "poor eyesight"
            ],
            "options": [
                  "Because her eyes were not very good",
                  "Because the sun was too bright",
                  "Because her mother forced her to",
                  "Because her teacher advised it"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning ko'zlari xira ko'rardi: 'Helen\\'s eyes were not very good'."
      },
      {
            "id": "s7-q3",
            "order": 3,
            "question": "What did she begin to do when she was seventeen?",
            "modelAnswer": "She began to go out with a young man.",
            "keywords": [
                  "began",
                  "go out",
                  "young man",
                  "seventeen"
            ],
            "options": [
                  "She began to go out with a young man",
                  "She learned how to drive a motor-car",
                  "She bought contacts instead of glasses",
                  "She started studying medicine"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U 17 yoshida yosh yigit bilan uchrashishni boshladi: 'she began to go out with a young man'."
      },
      {
            "id": "s7-q4",
            "order": 4,
            "question": "What did she do when she was with the young man ?",
            "modelAnswer": "She never wore her glasses when she was with him.",
            "keywords": [
                  "never",
                  "wore",
                  "glasses",
                  "with him"
            ],
            "options": [
                  "She never wore her glasses",
                  "She wore two pairs of glasses",
                  "She drove his car for him",
                  "She wore dark sunglasses"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yigit bilan bo'lganida aslo ko'zoynak taqmas edi: 'she never wore her glasses when she was with him'."
      },
      {
            "id": "s7-q5",
            "order": 5,
            "question": "Why did the young man come to the door?",
            "modelAnswer": "He came to the door to take her out.",
            "keywords": [
                  "come",
                  "door",
                  "take her out"
            ],
            "options": [
                  "To take her out",
                  "To speak with her father",
                  "To borrow some money",
                  "To bring her new spectacles"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yigit uni aylanib kelishga olib ketish uchun eshik oldiga kelardi: 'When he came to the door to take her out'."
      },
      {
            "id": "s7-q6",
            "order": 6,
            "question": "What did Helen do then?",
            "modelAnswer": "She took her glasses off.",
            "keywords": [
                  "took off",
                  "glasses"
            ],
            "options": [
                  "She took her glasses off",
                  "She put her glasses on",
                  "She hid in her bedroom",
                  "She called her best friend"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yigit kelgan paytda u ko'zoynagini yechib qo'yardi: 'she took her glasses off'."
      },
      {
            "id": "s7-q7",
            "order": 7,
            "question": "What did she do when she came home?",
            "modelAnswer": "When she came home and he left, she put her glasses on.",
            "keywords": [
                  "put them on",
                  "came home",
                  "glasses"
            ],
            "options": [
                  "She put them on again",
                  "She broke her glasses",
                  "She went to sleep without dinner",
                  "She gave them to her mother"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uyga qaytib yigit ketishi bilan ko'zoynagini yana taqib olardi: 'when she came home again and he left, she put them on'."
      },
      {
            "id": "s7-q8",
            "order": 8,
            "question": "What did her mother say to her one day?",
            "modelAnswer": "Her mother asked why she never wore glasses with Jim when he took her to beautiful places in his car.",
            "keywords": [
                  "why",
                  "never wear",
                  "glasses",
                  "Jim",
                  "beautiful places"
            ],
            "options": [
                  "She asked why Helen never wore glasses with Jim though he took her to beautiful places",
                  "She told Helen to stop going out with Jim immediately",
                  "She advised Helen to get a driver's licence",
                  "She asked Jim to buy Helen a pair of sunglasses"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Onasi unga: 'Jim seni ajoyib joylarga olib boradi, lekin hech narsani ko'rmaysan, nega ko'zoynak taqmaysan?' dedi."
      },
      {
            "id": "s7-q9",
            "order": 9,
            "question": "What did Helen answer?",
            "modelAnswer": "Helen answered that she looked prettier to Jim without glasses, and he looked better to her too.",
            "keywords": [
                  "prettier to Jim",
                  "looks better to me",
                  "not wearing glasses"
            ],
            "options": [
                  "She looked prettier to Jim without glasses, and he looked better to her too",
                  "She said she always forgot them in her drawer",
                  "She confessed that she had lost them in the park",
                  "She claimed Jim preferred girls who could not see well"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Helen ko'zoynaksiz Jimga chiroyli ko'rinishini, shuningdek xira ko'rgani uchun Jim ham unga kelishganroq ko'rinishini aytdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s7-tf1",
            "order": 1,
            "statement": "Helen wore glasses because she had poor eyesight.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Helen\\'s eyes were not very good, so she usually wore glasses'."
      },
      {
            "id": "s7-tf2",
            "order": 2,
            "statement": "Helen met Jim for the very first time in an optical shop.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda ularning qayerda tanishganliklari haqida ma'lumot berilmagan."
      },
      {
            "id": "s7-tf3",
            "order": 3,
            "statement": "Helen kept her glasses on while driving around in Jim's car.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Jim bilan bo'lganida u hech qachon ko'zoynak taqmas edi ('she never wore her glasses when she was with him')."
      },
      {
            "id": "s7-tf4",
            "order": 4,
            "statement": "Jim owned a motor-car and drove Helen to attractive places.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'He takes you to beautiful places in his car'."
      },
      {
            "id": "s7-tf5",
            "order": 5,
            "statement": "Helen's mother approved of Jim and wanted them to marry soon.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda onasining to'y yoki nikohga munosabati tilga olinmagan."
      },
      {
            "id": "s7-tf6",
            "order": 6,
            "statement": "Helen believed Jim appeared more attractive when she could not see him clearly.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'and he looks better to me too!' (ko'zi xira ko'rganda Jim unga kelishganroq tuyulgan)."
      }
]
  },
  {
    id: 'story-8',
    storyNumber: 8,
    title: "The Electric Motor-Car",
    titleUz: "Elektr Avtomobil",
    cefrLevel: 'A2',
    wordCount: 135,
    readingTimeMinutes: 1,
    storyText: "A man was trying to build an electric motor-car. He worked in an office in the town during most of the week, but on Saturdays and Sundays he stayed at home in the country and worked on his electric car. Every Monday he told his friends at the office about his work on the car, but his news about it was never very good. Then at last one Monday morning he came to the office and said to his friends, 'I have done it! I have driven from my home to here by electricity!'\n\nHis friends were all very glad. 'How much did it cost to get here by electricity?' they asked.\n\n'Three hundred and two pounds,' he answered. 'Two pounds for the electricity, and three hundred pounds for the electric wires from my house to the car.'",
    paragraphs: [
      "A man was trying to build an electric motor-car. He worked in an office in the town during most of the week, but on Saturdays and Sundays he stayed at home in the country and worked on his electric car.",
      "Every Monday he told his friends at the office about his work on the car, but his news about it was never very good. Then at last one Monday morning he came to the office and said to his friends, 'I have done it! I have driven from my home to here by electricity!'",
      "His friends were all very glad. 'How much did it cost to get here by electricity?' they asked.",
      "'Three hundred and two pounds,' he answered. 'Two pounds for the electricity, and three hundred pounds for the electric wires from my house to the car.'"
],
    summaryUz: "Bir xizmatchi bo'sh vaqtlarida qishloqdagi uyida elektr mashina yasashga urinardi. Nihoyat bir kuni u idoraga elektr quvvatida yetib kelganini va bunga 302 funt sarflaganini aytdi: 2 funt tokka, 300 funt esa uyidan mashinagacha yetib kelgan uzun elektr simiga!",
    vocabulary: [
      {
            "word": "electric motor-car",
            "pos": "n.",
            "phonetic": "[ɪˈlektrɪk ˈməʊtəkɑː]",
            "translationUz": "elektr avtomobil",
            "definitionEn": "An automobile propelled by one or more electric motors.",
            "exampleSentence": "He spent his weekends building an electric motor-car."
      },
      {
            "word": "during",
            "pos": "prep.",
            "phonetic": "[ˈdjʊərɪŋ]",
            "translationUz": "davomida, mobaynida",
            "definitionEn": "Throughout the course or period of time.",
            "exampleSentence": "He worked in an office during most of the week."
      },
      {
            "word": "electricity",
            "pos": "n.",
            "phonetic": "[ɪˌlekˈtrɪsɪti]",
            "translationUz": "elektr quvvati, tok",
            "definitionEn": "A form of energy resulting from charged particles.",
            "exampleSentence": "The car was powered by electricity."
      },
      {
            "word": "glad",
            "pos": "adj.",
            "phonetic": "[ɡlæd]",
            "translationUz": "xursand, mamnun",
            "definitionEn": "Pleased, delighted, or relieved.",
            "exampleSentence": "His friends were very glad to hear the good news."
      },
      {
            "word": "cost",
            "pos": "v.",
            "phonetic": "[kɒst]",
            "translationUz": "narxi ... bo'lmoq, turmoq",
            "definitionEn": "To require the payment of a specified amount before it can be acquired.",
            "exampleSentence": "How much did the journey cost?"
      },
      {
            "word": "electric wire",
            "pos": "n.",
            "phonetic": "[ɪˈlektrɪk ˈwaɪə]",
            "translationUz": "elektr simi, kabel",
            "definitionEn": "A metal conductor used to carry electrical current.",
            "exampleSentence": "He bought a long electric wire to connect the car."
      }
],
    reproductionOutline: [
      "A man tried to invent and build an electric motor-car at home.",
      "He worked in a town office on weekdays, and built the car in the country on weekends.",
      "Every Monday his news was disappointing, until one Monday he announced success.",
      "He drove from his country home to the office using electricity.",
      "Colleagues asked about the cost: £2 for electricity, and £300 for the extremely long cable."
],
    modelRetelling: "A man who worked in a town office during the week spent his weekends at his country home trying to build an electric motor-car. Every Monday he shared progress updates with his colleagues, but the news was usually discouraging. Finally, one Monday morning he excitedly announced that he had driven all the way from home to work by electricity. His delighted friends asked how much it had cost. He replied that it cost £302 — £2 for the power and £300 for the wires running from his house to the car.",
    questions: [
      {
            "id": "s8-q1",
            "order": 1,
            "question": "What was the man in this story trying to do?",
            "modelAnswer": "He was trying to build an electric motor-car.",
            "keywords": [
                  "build",
                  "electric motor-car",
                  "trying"
            ],
            "options": [
                  "To build an electric motor-car",
                  "To repair a petrol truck",
                  "To invent an electric bicycle",
                  "To open a car showroom"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Matn boshida: 'A man was trying to build an electric motor-car.'"
      },
      {
            "id": "s8-q2",
            "order": 2,
            "question": "What did he do most of the week?",
            "modelAnswer": "He worked in an office in the town during most of the week.",
            "keywords": [
                  "worked",
                  "office",
                  "town",
                  "most of the week"
            ],
            "options": [
                  "He worked in an office in the town",
                  "He tested electric batteries in a factory",
                  "He stayed in the countryside",
                  "He sold cars to his colleagues"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hafta davomida shahardagi idorada ishlagan: 'He worked in an office in the town during most of the week'."
      },
      {
            "id": "s8-q3",
            "order": 3,
            "question": "What did he do on Saturdays and Sundays?",
            "modelAnswer": "He stayed at home in the country and worked on his electric car.",
            "keywords": [
                  "stayed at home",
                  "country",
                  "worked on his electric car"
            ],
            "options": [
                  "He stayed at home in the country and worked on his electric car",
                  "He drove with friends to the beach",
                  "He worked overtime in the town office",
                  "He visited car exhibitions in London"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Shanba va yakshanba kunlari qishloqdagi uyida mashinasi ustida ishlagan."
      },
      {
            "id": "s8-q4",
            "order": 4,
            "question": "What was his news about the car like?",
            "modelAnswer": "His news about it was never very good.",
            "keywords": [
                  "news",
                  "never very good"
            ],
            "options": [
                  "His news about it was never very good",
                  "His news was always wonderful and exciting",
                  "He never discussed the car at all",
                  "The car was already finished in the first week"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning yangiliklari hech qachon unchalik quvonarli bo'lmagan: 'his news about it was never very good'."
      },
      {
            "id": "s8-q5",
            "order": 5,
            "question": "What happened at last one Monday morning?",
            "modelAnswer": "He came to the office and told his friends that he had driven from his home to the office by electricity.",
            "keywords": [
                  "came to office",
                  "driven",
                  "electricity"
            ],
            "options": [
                  "He announced he had driven from his home to the office by electricity",
                  "His office fired him for working on weekends",
                  "He broke his electric car into pieces",
                  "He sold his house in the country"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nihoyat bir dushanba u uydan idoragacha elektrda yetib kelganini e'lon qildi."
      },
      {
            "id": "s8-q6",
            "order": 6,
            "question": "How did his friends feel?",
            "modelAnswer": "His friends were all very glad.",
            "keywords": [
                  "friends",
                  "very glad"
            ],
            "options": [
                  "They were all very glad",
                  "They were envious and angry",
                  "They doubted his honesty",
                  "They felt bored and ignored him"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'stlarining barchasi juda xursand bo'lishdi: 'His friends were all very glad'."
      },
      {
            "id": "s8-q7",
            "order": 7,
            "question": "What did they say?",
            "modelAnswer": "They asked, 'How much did it cost to get here by electricity?'",
            "keywords": [
                  "how much",
                  "cost",
                  "get here by electricity"
            ],
            "options": [
                  "'How much did it cost to get here by electricity?'",
                  "'Where did you park the motor-car?'",
                  "'Can we buy tickets to ride with you?'",
                  "'Who helped you build the engine?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular mashinada elektrda kelish qanchaga tushganini so'rashdi."
      },
      {
            "id": "s8-q8",
            "order": 8,
            "question": "What did he do every Monday?",
            "modelAnswer": "Every Monday he told his friends at the office about his work on the car.",
            "keywords": [
                  "told his friends",
                  "work on the car",
                  "every Monday"
            ],
            "options": [
                  "He told his friends at the office about his work on the car",
                  "He brought fresh vegetables from the countryside",
                  "He asked his manager for a day off",
                  "He borrowed tools from his colleagues"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U har dushanba idoradagi do'stlariga mashina ustidagi yangiliklarni aytib berardi."
      },
      {
            "id": "s8-q9",
            "order": 9,
            "question": "What did the man answer?",
            "modelAnswer": "He answered: 'Three hundred and two pounds. Two pounds for the electricity, and three hundred pounds for the electric wires from my house to the car.'",
            "keywords": [
                  "three hundred and two pounds",
                  "electricity",
                  "electric wires"
            ],
            "options": [
                  "Three hundred and two pounds: £2 for power and £300 for the wires",
                  "Only two pounds in total for the journey",
                  "It cost him nothing because electricity was free",
                  "Five hundred pounds for a rechargeable battery"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U 302 funt sarflaganini aytdi: 2 funt tokka, 300 funt esa uyidan mashinagacha bo'lgan simlarga!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s8-tf1",
            "order": 1,
            "statement": "The man was an office employee who worked in the town on weekdays.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'He worked in an office in the town during most of the week'."
      },
      {
            "id": "s8-tf2",
            "order": 2,
            "statement": "The car operated using advanced wireless battery technology.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Mashina simsiz akkumulyator emas, balki uydan tortilgan 300 funtlik sim orqali quvvatlangan."
      },
      {
            "id": "s8-tf3",
            "order": 3,
            "statement": "The man's colleagues at the office were delighted when he succeeded.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'His friends were all very glad'."
      },
      {
            "id": "s8-tf4",
            "order": 4,
            "statement": "The man received an award from the town council for his invention.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda shahar hokimiyati yoki mukofot haqida hech narsa deyilmagan."
      },
      {
            "id": "s8-tf5",
            "order": 5,
            "statement": "The electric wires cost considerably more money than the electricity consumed.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Simlar £300, tok esa bor-yo'g'i £2 turgan."
      },
      {
            "id": "s8-tf6",
            "order": 6,
            "statement": "The man planned to start a commercial company to produce similar electric cars.",
            "correctAnswer": "Not Given",
            "explanationUz": "Uning ommaviy avtomobil ishlab chiqarish niyati bor-yo'qligi matnda aytilmagan."
      }
]
  },
  {
    id: 'story-9',
    storyNumber: 9,
    title: "The Artist and the Farmer",
    titleUz: "Rassom va Fermer",
    cefrLevel: 'A2',
    wordCount: 165,
    readingTimeMinutes: 1,
    storyText: "An artist went to a beautiful part of the country for a holiday, and stayed with a farmer. Every day he went out with his paints and his brushes and painted from morning to evening, and then when it got dark, he went back to the farm and had a good dinner before he went to bed.\n\nAt the end of his holiday he wanted to pay the farmer, but the farmer said, 'No, I do not want money-but give me one of your pictures. What is money? In a week it will all be finished, but your painting will still be here.'\n\nThe artist was very pleased and thanked the farmer for saying such kind things about his paintings.\n\nThe farmer smiled and answered, 'It is not that. I have a son in London. He wants to become an artist. When he comes here next month, I will show him your picture, and then he will not want to be an artist any more, I think.'",
    paragraphs: [
      "An artist went to a beautiful part of the country for a holiday, and stayed with a farmer. Every day he went out with his paints and his brushes and painted from morning to evening, and then when it got dark, he went back to the farm and had a good dinner before he went to bed.",
      "At the end of his holiday he wanted to pay the farmer, but the farmer said, 'No, I do not want money-but give me one of your pictures. What is money? In a week it will all be finished, but your painting will still be here.'",
      "The artist was very pleased and thanked the farmer for saying such kind things about his paintings.",
      "The farmer smiled and answered, 'It is not that. I have a son in London. He wants to become an artist. When he comes here next month, I will show him your picture, and then he will not want to be an artist any more, I think.'"
],
    summaryUz: "Rassom qishloqda bir fermerning uyida yashab, har kuni rasm chizadi. Ketayotib pul to'lamoqchi bo'lganida, fermer pul o'rniga bitta rasm so'raydi. Rassom maqtovdan xursand bo'ladi, ammo fermer bu rasmni Londondagi o'g'liga ko'rsatib, uni rassom bo'lish orzusidan qaytarmoqchi ekanini aytadi!",
    vocabulary: [
      {
            "word": "artist",
            "pos": "n.",
            "phonetic": "[ˈɑːtɪst]",
            "translationUz": "rassom",
            "definitionEn": "A person who creates paintings or drawings.",
            "exampleSentence": "The artist loved painting rural landscapes."
      },
      {
            "word": "brush",
            "pos": "n.",
            "phonetic": "[brʌʃ]",
            "translationUz": "mo'yqalam, chotka",
            "definitionEn": "An instrument with bristles used for applying paint.",
            "exampleSentence": "He cleaned his paints and brushes every night."
      },
      {
            "word": "holiday",
            "pos": "n.",
            "phonetic": "[ˈhɒlədeɪ]",
            "translationUz": "ta'til, hordiq",
            "definitionEn": "A period of leisure or travel away from regular work.",
            "exampleSentence": "He went to a beautiful rural area for a holiday."
      },
      {
            "word": "pleased",
            "pos": "adj.",
            "phonetic": "[pliːzd]",
            "translationUz": "mamnun, quvongan",
            "definitionEn": "Feeling happy or satisfied with a situation.",
            "exampleSentence": "The painter was pleased with the compliment."
      },
      {
            "word": "kind",
            "pos": "adj.",
            "phonetic": "[kaɪnd]",
            "translationUz": "mehribon, yoqimli",
            "definitionEn": "Having or showing a friendly, generous nature.",
            "exampleSentence": "Thank you for saying such kind things."
      },
      {
            "word": "any more",
            "pos": "adv. phr.",
            "phonetic": "[ˌeni ˈmɔː]",
            "translationUz": "boshqa, ortiq (inkor bilan)",
            "definitionEn": "No longer or from now on.",
            "exampleSentence": "He will not want to be an artist any more."
      }
],
    reproductionOutline: [
      "An artist stayed with a countryside farmer during his holiday.",
      "He painted outdoors every day from sunrise till dusk and ate dinner at the farm.",
      "At departure, the farmer refused money and requested a painting instead.",
      "Flattered, the artist thanked him for appreciating his artwork.",
      "The farmer revealed the true motive: to show the terrible picture to his London son so he gives up on art."
],
    modelRetelling: "An artist spent his holiday in a beautiful countryside village, staying with a local farmer. Every day he painted outdoors from morning until evening, returning to the farm only for a hot dinner and sleep. When his holiday ended, he offered to pay the farmer, but the farmer asked for one of his paintings instead of cash, remarking that money vanishes quickly while art remains. Flattered by the supposed compliment, the artist thanked him warmly. However, the farmer chuckled and clarified: he wanted to show the painting to his son in London so the boy would give up his dream of becoming an artist.",
    questions: [
      {
            "id": "s9-q1",
            "order": 1,
            "question": "Where did the artist go for his holiday?",
            "modelAnswer": "He went to a beautiful part of the country for a holiday.",
            "keywords": [
                  "beautiful part",
                  "country",
                  "holiday"
            ],
            "options": [
                  "To a beautiful part of the country",
                  "To a bustling city center",
                  "To an art gallery in Paris",
                  "To a sunny seaside beach"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Matn boshida: 'An artist went to a beautiful part of the country for a holiday'."
      },
      {
            "id": "s9-q2",
            "order": 2,
            "question": "Where did he stay?",
            "modelAnswer": "He stayed with a farmer.",
            "keywords": [
                  "stayed",
                  "farmer",
                  "farm"
            ],
            "options": [
                  "With a farmer",
                  "In a luxury countryside hotel",
                  "In a tent near the river",
                  "At an art school"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U fermerning uyida turgan: 'and stayed with a farmer'."
      },
      {
            "id": "s9-q3",
            "order": 3,
            "question": "What did he do every day?",
            "modelAnswer": "Every day he went out with his paints and his brushes and painted from morning to evening.",
            "keywords": [
                  "paints",
                  "brushes",
                  "painted",
                  "morning to evening"
            ],
            "options": [
                  "He went out with paints and brushes and painted from morning to evening",
                  "He helped the farmer feed the animals",
                  "He read books in the farmhouse living room",
                  "He taught the villagers how to paint"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Har kuni mo'yqalam va bo'yoqlari bilan ertalabdan kechgacha rasm chizgan."
      },
      {
            "id": "s9-q4",
            "order": 4,
            "question": "What did he do when it got dark?",
            "modelAnswer": "When it got dark, he went back to the farm and had a good dinner before he went to bed.",
            "keywords": [
                  "went back",
                  "farm",
                  "good dinner",
                  "went to bed"
            ],
            "options": [
                  "He went back to the farm, had a good dinner and went to bed",
                  "He stayed outside painting under moonlight",
                  "He walked to the nearest town tavern",
                  "He called his family on the telephone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qorong'i tushgach, fermaga qaytib, yaxshi ovqatlanib uxlashga yotgan."
      },
      {
            "id": "s9-q5",
            "order": 5,
            "question": "What did the farmer say when the artist wanted to pay him?",
            "modelAnswer": "The farmer said, 'No, I do not want money-but give me one of your pictures. What is money? In a week it will all be finished, but your painting will still be here.'",
            "keywords": [
                  "not want money",
                  "give me one of your pictures",
                  "finished",
                  "painting will still be here"
            ],
            "options": [
                  "He refused money and asked for one of the artist's pictures instead",
                  "He asked for double the money in cash",
                  "He told the artist to leave without paying anything",
                  "He asked the artist to paint his farmhouse wall"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Fermer pul olmasligini, buning o'rniga bitta rasm berishini aytgan."
      },
      {
            "id": "s9-q6",
            "order": 6,
            "question": "What did the painter thank the farmer for?",
            "modelAnswer": "He thanked the farmer for saying such kind things about his paintings.",
            "keywords": [
                  "thanked",
                  "kind things",
                  "paintings"
            ],
            "options": [
                  "For saying such kind things about his paintings",
                  "For cooking delicious food every evening",
                  "For giving him free brushes",
                  "For introducing him to local painters"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Rassom fermerga rasmlari haqida iliq so'zlar aytgani uchun minnatdorchilik bildirgan."
      },
      {
            "id": "s9-q7",
            "order": 7,
            "question": "Why did the farmer want the artist's painting?",
            "modelAnswer": "He wanted to show it to his son in London so that his son would not want to be an artist any more.",
            "keywords": [
                  "show his son",
                  "London",
                  "not want to be an artist"
            ],
            "options": [
                  "To show his son in London so he would no longer want to be an artist",
                  "To hang it proudly over the dining table",
                  "To sell it at an auction in London",
                  "To give it as a present to his wife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Fermer Londondagi o'g'liga ko'rsatib, rassom bo'lish fikridan qaytarish uchun xohlagan."
      },
      {
            "id": "s9-q8",
            "order": 8,
            "question": "Did the farmer want his son to become an artist?",
            "modelAnswer": "No, he did not want his son to become an artist.",
            "keywords": [
                  "No",
                  "did not want",
                  "son",
                  "artist"
            ],
            "options": [
                  "No, he did not want his son to become an artist",
                  "Yes, he dreamed of having a famous painter in the family",
                  "Yes, but only if he painted farm animals",
                  "The farmer did not care either way"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yo'q, fermer o'g'lining rassom bo'lishini sira istamas edi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s9-tf1",
            "order": 1,
            "statement": "The artist stayed at a rural farmhouse during his vacation.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'An artist went to a beautiful part of the country for a holiday, and stayed with a farmer'."
      },
      {
            "id": "s9-tf2",
            "order": 2,
            "statement": "The artist painted oil portraits of the farmer's family.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uning aniq nimalarni chizgani (manzara yoki portret) tilga olinmagan."
      },
      {
            "id": "s9-tf3",
            "order": 3,
            "statement": "The farmer refused cash payment at the end of the holiday.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: ''No, I do not want money-but give me one of your pictures''."
      },
      {
            "id": "s9-tf4",
            "order": 4,
            "statement": "The artist was insulted by the farmer's words at first.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Boshida rassom juda xursand bo'lgan edi ('The artist was very pleased and thanked the farmer...')."
      },
      {
            "id": "s9-tf5",
            "order": 5,
            "statement": "The farmer's son was already a wealthy painter in London.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U hali rassom emas, balki rassom bo'lishni xohlayotgan edi ('He wants to become an artist')."
      },
      {
            "id": "s9-tf6",
            "order": 6,
            "statement": "The farmer believed the artist's artwork was discouragingly poor.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Fermer bu rasmni ko'rgan odam rassom bo'lish fikridan qaytadi deb hisoblagan."
      }
]
  },
  {
    id: 'story-10',
    storyNumber: 10,
    title: "Mr and Mrs Jones",
    titleUz: "Janob va Xonim Jons",
    cefrLevel: 'A2',
    wordCount: 147,
    readingTimeMinutes: 1,
    storyText: "Mr Jones was very angry with his wife, and she was very angry with her husband. For several days they did not speak to each other at all. One evening Mr Jones was very tired when he came back from work, so he went to bed soon after dinner. Of course, he did not say anything to Mrs Jones before he went upstairs. Mrs Jones washed the dinner things and then did some sewing. When she went up to bed much later than her husband, she found a piece of paper on the small table near her bed. On it were the words, 'Mother.-Wake me up at 7 a.m.-Father.'\n\nWhen Mr Jones woke up the next morning, it was nearly 8 a.m. and on the small table near his bed he saw another piece of paper. He took it and read these words: 'Father.-Wake up. It is 7 a.m.-Mother.'",
    paragraphs: [
      "Mr Jones was very angry with his wife, and she was very angry with her husband. For several days they did not speak to each other at all.",
      "One evening Mr Jones was very tired when he came back from work, so he went to bed soon after dinner. Of course, he did not say anything to Mrs Jones before he went upstairs. Mrs Jones washed the dinner things and then did some sewing.",
      "When she went up to bed much later than her husband, she found a piece of paper on the small table near her bed. On it were the words, 'Mother.-Wake me up at 7 a.m.-Father.'",
      "When Mr Jones woke up the next morning, it was nearly 8 a.m. and on the small table near his bed he saw another piece of paper. He took it and read these words: 'Father.-Wake up. It is 7 a.m.-Mother.'"
],
    summaryUz: "Janob va xonim Jons arazlashib, bir necha kun gaplashmay yurishadi. Erta yotgan janob Jons xotiniga gapirmasdan qog'ozga: 'Meni soat 7:00 da uyg'ot' deb yozib qo'yadi. Ertalab deyarli 8:00 da uyg'onganida esa, boshqa qog'ozda xotinining javobini ko'radi: 'Uyg'on, soat 7:00 bo'ldi!'",
    vocabulary: [
      {
            "word": "speak to each other",
            "pos": "v. phr.",
            "phonetic": "[spiːk tuː iːtʃ ˈʌðə]",
            "translationUz": "bir-biri bilan gaplashmoq",
            "definitionEn": "To engage in conversation with one another.",
            "exampleSentence": "They were angry and did not speak to each other."
      },
      {
            "word": "upstairs",
            "pos": "adv.",
            "phonetic": "[ˌʌpˈsteəz]",
            "translationUz": "yuqoriga, tepa qavatga",
            "definitionEn": "To or on a higher floor of a building.",
            "exampleSentence": "He went upstairs to his bedroom."
      },
      {
            "word": "sewing",
            "pos": "n.",
            "phonetic": "[ˈsəʊɪŋ]",
            "translationUz": "tikuvchilik, tikish",
            "definitionEn": "The activity of stitching or mending cloth.",
            "exampleSentence": "After washing dishes, she did some sewing."
      },
      {
            "word": "piece of paper",
            "pos": "n.",
            "phonetic": "[piːs əv ˈpeɪpə]",
            "translationUz": "qog'oz parchasi",
            "definitionEn": "A single sheet or slip of paper.",
            "exampleSentence": "He wrote an urgent note on a piece of paper."
      },
      {
            "word": "wake up",
            "pos": "phr. v.",
            "phonetic": "[weɪk ʌp]",
            "translationUz": "uyg'onmoq, uyg'otmoq",
            "definitionEn": "To emerge or cause someone to emerge from sleep.",
            "exampleSentence": "Wake me up at 7 a.m. tomorrow morning."
      },
      {
            "word": "nearly",
            "pos": "adv.",
            "phonetic": "[ˈnɪəli]",
            "translationUz": "deyarli, sal kam",
            "definitionEn": "Very close to; almost.",
            "exampleSentence": "When he woke up, it was nearly 8 a.m."
      }
],
    reproductionOutline: [
      "Mr and Mrs Jones had a bitter argument and refused to talk for days.",
      "One evening, Mr Jones was exhausted after work and went straight to bed after dinner.",
      "Mrs Jones cleaned the kitchen, did sewing, and came upstairs much later.",
      "She found a note on her nightstand: \"Mother. Wake me up at 7 a.m. - Father.\"",
      "Mr Jones woke up at 8 a.m. and saw a reply note: \"Father. Wake up. It is 7 a.m. - Mother.\""
],
    modelRetelling: "Mr and Mrs Jones were furious with each other and maintained complete silence for days. One evening, exhausted from his job, Mr Jones went upstairs to sleep immediately following dinner without saying a single word to his wife. After washing the dishes and finishing some sewing, Mrs Jones finally went to bed. On her bedside table, she discovered a note from her husband requesting: 'Mother.-Wake me up at 7 a.m.-Father.' The following morning Mr Jones awoke near 8 a.m., only to find a new note resting on his own side table: 'Father.-Wake up. It is 7 a.m.-Mother.'",
    questions: [
      {
            "id": "s10-q1",
            "order": 1,
            "question": "Why did Mr and Mrs Jones not speak to each other for several days?",
            "modelAnswer": "Because Mr Jones was very angry with his wife, and she was very angry with her husband.",
            "keywords": [
                  "angry",
                  "with each other",
                  "wife",
                  "husband"
            ],
            "options": [
                  "Because they were very angry with each other",
                  "Because both had lost their voices",
                  "Because Mr Jones had been away on a business trip",
                  "Because they were playing a silent challenge"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Janob Jons xotinidan, xotini esa eridan qattiq ranjigan va jahli chiqqan edi."
      },
      {
            "id": "s10-q2",
            "order": 2,
            "question": "Why did Mr Jones go to bed soon after dinner?",
            "modelAnswer": "Because he was very tired when he came back from work.",
            "keywords": [
                  "tired",
                  "came back from work"
            ],
            "options": [
                  "Because he was very tired when he came back from work",
                  "Because he was feeling terribly sick",
                  "Because there was no power in the living room",
                  "Because his wife told him to leave the room"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ishdan juda charchab qaytgani uchun ovqatdan so'ng darhol yotishga chiqdi."
      },
      {
            "id": "s10-q3",
            "order": 3,
            "question": "Did he speak to his wife before he went upstairs?",
            "modelAnswer": "No, he did not say anything to Mrs Jones before he went upstairs.",
            "keywords": [
                  "No",
                  "did not say anything",
                  "before he went upstairs"
            ],
            "options": [
                  "No, he did not say anything to her",
                  "Yes, he wished her goodnight warmly",
                  "Yes, he asked her for an alarm clock",
                  "Yes, they argued about the dinner"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yo'q, yuqoriga chiqishdan oldin u xotiniga hech narsa demadi: 'he did not say anything'."
      },
      {
            "id": "s10-q4",
            "order": 4,
            "question": "What did Mrs Jones do after dinner?",
            "modelAnswer": "She washed the dinner things and then did some sewing.",
            "keywords": [
                  "washed the dinner things",
                  "sewing"
            ],
            "options": [
                  "She washed the dinner things and then did some sewing",
                  "She watched television and read a magazine",
                  "She went to visit her neighbour",
                  "She immediately went to bed with her husband"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U idish-tovoqlarni yuvdi va keyin bir oz tikuvchilik qildi."
      },
      {
            "id": "s10-q5",
            "order": 5,
            "question": "When did she go to bed?",
            "modelAnswer": "She went up to bed much later than her husband.",
            "keywords": [
                  "much later",
                  "than her husband"
            ],
            "options": [
                  "Much later than her husband",
                  "At the exact same time as her husband",
                  "Before finishing the dinner dishes",
                  "Early in the morning at dawn"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eridan ancha kechroq yotishga chiqdi: 'much later than her husband'."
      },
      {
            "id": "s10-q6",
            "order": 6,
            "question": "What did she find when she went to bed?",
            "modelAnswer": "She found a piece of paper with a note from her husband.",
            "keywords": [
                  "found",
                  "piece of paper",
                  "words"
            ],
            "options": [
                  "A piece of paper on the small table near her bed",
                  "A newly purchased alarm clock",
                  "A letter from her relatives",
                  "A box of chocolates"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U karavoti yonidagi kichik stol ustida bir parcha qog'oz topdi."
      },
      {
            "id": "s10-q7",
            "order": 7,
            "question": "Where did she find it?",
            "modelAnswer": "She found it on the small table near her bed.",
            "keywords": [
                  "small table",
                  "near her bed"
            ],
            "options": [
                  "On the small table near her bed",
                  "Underneath her pillow",
                  "On the kitchen counter",
                  "Stuck to the bedroom door"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni karavoti yonidagi stolda ko'rdi: 'on the small table near her bed'."
      },
      {
            "id": "s10-q8",
            "order": 8,
            "question": "What did she read?",
            "modelAnswer": "She read: 'Mother.-Wake me up at 7 a.m.-Father.'",
            "keywords": [
                  "Mother",
                  "Wake me up at 7 a.m.",
                  "Father"
            ],
            "options": [
                  "'Mother.-Wake me up at 7 a.m.-Father.'",
                  "'I am sorry for my bad temper.'",
                  "'Please make tea early tomorrow.'",
                  "'Do not forget to lock the front door.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qog'ozda: 'Ona. Meni ertalab 7 da uyg'ot. Ota' deb yozilgan edi."
      },
      {
            "id": "s10-q9",
            "order": 9,
            "question": "At what time did Mr Jones wake up the next morning?",
            "modelAnswer": "He woke up at nearly 8 a.m. the next morning.",
            "keywords": [
                  "nearly 8 a.m.",
                  "next morning"
            ],
            "options": [
                  "Nearly 8 a.m.",
                  "Promptly at 7 a.m.",
                  "At half past six",
                  "At nine o'clock"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ertasi kuni soat deyarli 8:00 da uyg'ondi: 'it was nearly 8 a.m.'."
      },
      {
            "id": "s10-q10",
            "order": 10,
            "question": "What did he see when he woke up?",
            "modelAnswer": "He saw another piece of paper on the small table near his bed.",
            "keywords": [
                  "another piece of paper",
                  "small table near his bed"
            ],
            "options": [
                  "Another piece of paper on the small table near his bed",
                  "A hot cup of morning coffee",
                  "His wife standing by the window",
                  "The morning newspaper"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Karavoti yonidagi kichik stol ustida yana boshqa qog'oz parchasini ko'rdi."
      },
      {
            "id": "s10-q11",
            "order": 11,
            "question": "What did he read?",
            "modelAnswer": "He read: 'Father.-Wake up. It is 7 a.m.-Mother.'",
            "keywords": [
                  "Father",
                  "Wake up",
                  "It is 7 a.m.",
                  "Mother"
            ],
            "options": [
                  "'Father.-Wake up. It is 7 a.m.-Mother.'",
                  "'You slept too long, hurry up!'",
                  "'Breakfast is on the kitchen table.'",
                  "'I am still angry with you.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qog'ozda: 'Ota. Uyg'oning. Soat 7:00 bo'ldi. Ona' deb yozilgan edi."
      },
      {
            "id": "s10-q12",
            "order": 12,
            "question": "Why did Mr Jones not wake up at 7 a.m.?",
            "modelAnswer": "Because his wife wrote him a note on paper instead of waking him out loud, since they were not speaking to each other.",
            "keywords": [
                  "wife wrote a note",
                  "not speaking",
                  "did not call him"
            ],
            "options": [
                  "Because his wife left a silent note on paper instead of shaking or calling him",
                  "Because his alarm clock battery ran out",
                  "Because the bedroom curtains blocked the sunlight",
                  "Because he turned off the telephone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki ular gaplashmayotgani uchun xotini uni chaqirib yoki silkib emas, qog'ozga yozib qo'ygan edi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s10-tf1",
            "order": 1,
            "statement": "Mr and Mrs Jones were on speaking terms and talked happily during dinner.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ular arazlashib, bir necha kundan beri umuman gaplashmayotgan edilar ('did not speak to each other at all')."
      },
      {
            "id": "s10-tf2",
            "order": 2,
            "statement": "Mr Jones retired early to bed due to exhaustion from work.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'One evening Mr Jones was very tired when he came back from work, so he went to bed soon after dinner'."
      },
      {
            "id": "s10-tf3",
            "order": 3,
            "statement": "Mrs Jones worked professionally making wedding dresses.",
            "correctAnswer": "Not Given",
            "explanationUz": "U kechqurun biroz tikuvchilik qilgan, lekin uning professional kasbi haqida ma'lumot yo'q."
      },
      {
            "id": "s10-tf4",
            "order": 4,
            "statement": "Mr Jones left a note asking to be awakened at seven o'clock in the morning.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Mother.-Wake me up at 7 a.m.-Father.'"
      },
      {
            "id": "s10-tf5",
            "order": 5,
            "statement": "Mrs Jones threw her husband's note out of the window in irritation.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U qog'ozni tashlab yubormadi, balki javoban o'zi ham xat qoldirdi."
      },
      {
            "id": "s10-tf6",
            "order": 6,
            "statement": "Mrs Jones shouted loudly in the bedroom at 7 a.m. to wake her husband.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U ovoz chiqarib baqirmadi, aksincha qog'ozga 'Father.-Wake up. It is 7 a.m.-Mother' deb yozib qo'ydi."
      }
]
  },
  {
    id: 'story-11',
    storyNumber: 11,
    title: "The Red Light and the Police Car",
    titleUz: "Qizil Chiroq va Politsiya Mashinasi",
    cefrLevel: 'A2',
    wordCount: 112,
    readingTimeMinutes: 1,
    storyText: "The lights were red, so the old man stopped his car and waited for them to change to green. While he was waiting, a police car came up behind him, hit his car hard in the back and stopped.\n\nThere were two policemen in the police car, and they were very surprised and glad when the old man got out of his car and walked towards them without any trouble after such an accident. He was over 70 years old.\n\nThe old man came to the door of the police car, smiled kindly, and said, 'Tell me, young man, how do you stop this car when the lights are red and I am not here?'",
    paragraphs: [
      "The lights were red, so the old man stopped his car and waited for them to change to green. While he was waiting, a police car came up behind him, hit his car hard in the back and stopped.",
      "There were two policemen in the police car, and they were very surprised and glad when the old man got out of his car and walked towards them without any trouble after such an accident. He was over 70 years old.",
      "The old man came to the door of the police car, smiled kindly, and said, 'Tell me, young man, how do you stop this car when the lights are red and I am not here?'"
],
    summaryUz: "Svetaforning qizil chirog'ida to'xtab turgan 70 yoshdan oshgan qariyaning mashinasiga orqadan kelgan politsiya mashinasi qattiq uriladi. Qariya butun va shikastlanmasdan tushib kelib, politsiyachiga hazillashadi: 'Yigitcha, men bu yerda bo'lmasam, qizil chiroqda qanday to'xtaysiz?'",
    vocabulary: [
      {
            "word": "traffic lights",
            "pos": "n.",
            "phonetic": "[ˈtræfɪk laɪts]",
            "translationUz": "svetafor",
            "definitionEn": "A set of automatically operated colored lights for controlling traffic.",
            "exampleSentence": "The lights were red, so he came to a complete stop."
      },
      {
            "word": "hit hard",
            "pos": "v.",
            "phonetic": "[hɪt hɑːd]",
            "translationUz": "qattiq urilmoq",
            "definitionEn": "To collide or strike with great force.",
            "exampleSentence": "The following vehicle hit his car hard in the rear."
      },
      {
            "word": "accident",
            "pos": "n.",
            "phonetic": "[ˈæksɪdənt]",
            "translationUz": "avariya, yo'l-transport hodisasi",
            "definitionEn": "An unfortunate incident that happens unexpectedly and results in damage or injury.",
            "exampleSentence": "He walked away safely after such a serious accident."
      },
      {
            "word": "surprised",
            "pos": "adj.",
            "phonetic": "[səˈpraɪzd]",
            "translationUz": "hayron bo'lgan, taajjublangan",
            "definitionEn": "Feeling or showing surprise.",
            "exampleSentence": "The officers were surprised that nobody was hurt."
      },
      {
            "word": "trouble",
            "pos": "n.",
            "phonetic": "[ˈtrʌbl]",
            "translationUz": "qiyinchilik, tashvish",
            "definitionEn": "Difficulty or problems.",
            "exampleSentence": "He walked out of the wreckage without any trouble."
      },
      {
            "word": "kindly",
            "pos": "adv.",
            "phonetic": "[ˈkaɪndli]",
            "translationUz": "muloyimlik bilan, mehribonlarcha",
            "definitionEn": "In a kind, friendly, or warm manner.",
            "exampleSentence": "The elderly gentleman smiled kindly at the young officer."
      }
],
    reproductionOutline: [
      "An elderly man in his car stopped at a red traffic light, waiting for green.",
      "Suddenly, a police car approached from behind and smashed into his car.",
      "Two police officers were shocked and relieved to see the 70-year-old walk out uninjured.",
      "The calm gentleman approached the police cruiser window with a warm smile.",
      "He jokingly asked how the officer usually stops at red lights when no car is there to crash into."
],
    modelRetelling: "While an elderly gentleman over seventy years of age was patiently waiting at a red traffic light, a police car approached from behind and rammed into the back of his vehicle. The two police officers inside were astonished and deeply relieved when the old man stepped out and walked toward them without any difficulty. Approaching the police car window with a kind smile, the old man witty remarked: 'Tell me, young man, how do you stop this car when the lights are red and I am not here?'",
    questions: [
      {
            "id": "s11-q1",
            "order": 1,
            "question": "Why did the old man stop his car?",
            "modelAnswer": "Because the traffic lights were red.",
            "keywords": [
                  "lights were red",
                  "stopped"
            ],
            "options": [
                  "Because the lights were red",
                  "Because his engine stalled",
                  "Because a police siren ordered him to pull over",
                  "Because he saw a friend on the pavement"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Svetaforda qizil chiroq yongan edi: 'The lights were red, so the old man stopped his car'."
      },
      {
            "id": "s11-q2",
            "order": 2,
            "question": "What did he wait for?",
            "modelAnswer": "He waited for the lights to change to green.",
            "keywords": [
                  "change to green",
                  "lights"
            ],
            "options": [
                  "For them to change to green",
                  "For a pedestrian to cross the avenue",
                  "For the police car to overtake him",
                  "For his passenger to return"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chiroq yashil bo'lishini kutdi: 'waited for them to change to green'."
      },
      {
            "id": "s11-q3",
            "order": 3,
            "question": "What happened while he was waiting?",
            "modelAnswer": "A police car came up behind him, hit his car hard in the back and stopped.",
            "keywords": [
                  "police car",
                  "hit his car",
                  "in the back"
            ],
            "options": [
                  "A police car crashed hard into the rear of his vehicle",
                  "A tyre on his car suddenly burst",
                  "The traffic lights stopped working",
                  "Another car overtook him on the pavement"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kutayotgan paytda orqadan politsiya mashinasi kelib, mashinaning orqasiga qattiq urildi."
      },
      {
            "id": "s11-q4",
            "order": 4,
            "question": "What people were there in the police car?",
            "modelAnswer": "There were two policemen in the police car.",
            "keywords": [
                  "two policemen"
            ],
            "options": [
                  "Two policemen",
                  "One police officer and a police dog",
                  "Three young detectives",
                  "A traffic inspector and an injured passenger"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Politsiya mashinasida ikkita politsiyachi bor edi: 'There were two policemen in the police car'."
      },
      {
            "id": "s11-q5",
            "order": 5,
            "question": "What did the old man do ?",
            "modelAnswer": "The old man got out of his car and walked towards them without any trouble.",
            "keywords": [
                  "got out",
                  "walked towards them",
                  "without any trouble"
            ],
            "options": [
                  "He got out of his car and walked towards them without any trouble",
                  "He remained unconscious inside his damaged car",
                  "He ran away to call an insurance company",
                  "He shouted insults at the police officers"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya mashinasidan tushib, hech qanday qiyinchiliksiz politsiyachilar tomon yurib keldi."
      },
      {
            "id": "s11-q6",
            "order": 6,
            "question": "How did the policemen feel about it ?",
            "modelAnswer": "They were very surprised and glad.",
            "keywords": [
                  "surprised",
                  "glad"
            ],
            "options": [
                  "They were very surprised and glad",
                  "They were furious and annoyed",
                  "They were terrified and tried to flee",
                  "They were indifferent to the driver's health"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular juda hayron qolishdi va uning sog'-salomatligidan xursand bo'lishdi: 'very surprised and glad'."
      },
      {
            "id": "s11-q7",
            "order": 7,
            "question": "Why were they surprised?",
            "modelAnswer": "Because the old man was unhurt and walked towards them without trouble after such a hard accident, despite being over 70 years old.",
            "keywords": [
                  "without any trouble",
                  "after such an accident",
                  "over 70 years old"
            ],
            "options": [
                  "Because he walked towards them without trouble after such a serious crash",
                  "Because they discovered he had no driving licence",
                  "Because his car suffered zero scratches",
                  "Because they knew him personally from the police station"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Shunday kuchli to'qnashuvdan keyin 70 yoshdan oshgan qariyaning hech qanday qiyinchiliksiz yurib kelganidan hayratda qoldilar."
      },
      {
            "id": "s11-q8",
            "order": 8,
            "question": "How old was the man?",
            "modelAnswer": "He was over 70 years old.",
            "keywords": [
                  "over 70",
                  "years old"
            ],
            "options": [
                  "He was over 70 years old",
                  "He was exactly 55 years old",
                  "He was around 60 years old",
                  "He was eighty-five years old"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U 70 yoshdan oshgan edi: 'He was over 70 years old'."
      },
      {
            "id": "s11-q9",
            "order": 9,
            "question": "What did he do then?",
            "modelAnswer": "He came to the door of the police car and smiled kindly.",
            "keywords": [
                  "came to the door",
                  "smiled kindly"
            ],
            "options": [
                  "He came to the door of the police car and smiled kindly",
                  "He kicked the bumper of the police car",
                  "He asked for the police officers' badges and IDs",
                  "He demanded money on the spot for car repairs"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U politsiya mashinasi eshigi oldiga kelib, mayin jilmaydi."
      },
      {
            "id": "s11-q10",
            "order": 10,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Tell me, young man, how do you stop this car when the lights are red and I am not here?'",
            "keywords": [
                  "how do you stop",
                  "lights are red",
                  "not here"
            ],
            "options": [
                  "'Tell me, young man, how do you stop this car when the lights are red and I am not here?'",
                  "'You reckless officers should lose your driver licences!'",
                  "'Call an ambulance immediately!'",
                  "'Who will pay for the repairs to my rear bumper?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya hazil qilib: 'Menga aytingchi, yigitcha, agar men bu yerda bo'lmasam, qizil chiroqda mashinangizni qanday to'xtatasiz?' deb so'radi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s11-tf1",
            "order": 1,
            "statement": "The elderly driver stopped because the traffic signal showed red.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The lights were red, so the old man stopped his car'."
      },
      {
            "id": "s11-tf2",
            "order": 2,
            "statement": "Heavy snow and ice caused the police vehicle to skid into the car.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda ob-havo sharoiti (qor yoki muz) haqida hech narsa deyilmagan."
      },
      {
            "id": "s11-tf3",
            "order": 3,
            "statement": "The police car collided forcefully with the rear of the elderly driver's car.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'hit his car hard in the back and stopped'."
      },
      {
            "id": "s11-tf4",
            "order": 4,
            "statement": "The old man was severely injured and had to be rushed to hospital.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Qariya jiddiy jarohat olmagan va hech qanday qiyinchiliksiz yurib borgan ('walked towards them without any trouble')."
      },
      {
            "id": "s11-tf5",
            "order": 5,
            "statement": "The old gentleman was older than seventy years of age.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'He was over 70 years old'."
      },
      {
            "id": "s11-tf6",
            "order": 6,
            "statement": "The old gentleman reacted with fury and threatened to sue the police.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U g'azablanmadi, aksincha muloyim jilmayib hazil qildi ('smiled kindly, and said...')."
      }
]
  }
,
  {
    id: 'story-12',
    storyNumber: 12,
    title: "The Stolen Roses",
    titleUz: "O'g'irlangan atirgullar",
    cefrLevel: 'A2',
    wordCount: 147,
    readingTimeMinutes: 1,
    storyText: "Mrs Williams loved flowers and had a small but beautiful garden. In the summer, her roses were always the best in her street. One summer afternoon her bell rang, and when she went to the front door, she saw a small boy outside. He was about seven years old, and was holding a big bunch of beautiful roses in his hand.\n'I am selling roses,' he said. 'Do you want any? They are quite cheap. Five pence for a big bunch. They are fresh. I picked them this afternoon.'\n'My boy,' Mrs Williams answered, 'I pick roses whenever I want, and don't pay anything for them, because I have lots in my garden.'\n'Oh, no, you haven't,' said the small boy. 'There aren't any roses in your garden—because they are here in my hand!'",
    paragraphs: [
      "Mrs Williams loved flowers and had a small but beautiful garden. In the summer, her roses were always the best in her street. One summer afternoon her bell rang, and when she went to the front door, she saw a small boy outside. He was about seven years old, and was holding a big bunch of beautiful roses in his hand.",
      "'I am selling roses,' he said. 'Do you want any? They are quite cheap. Five pence for a big bunch. They are fresh. I picked them this afternoon.'",
      "'My boy,' Mrs Williams answered, 'I pick roses whenever I want, and don't pay anything for them, because I have lots in my garden.'",
      "'Oh, no, you haven't,' said the small boy. 'There aren't any roses in your garden—because they are here in my hand!'"
],
    summaryUz: "Missis Uilyams gullarni yaxshi ko'rardi va uning atirgullari butun ko'chada eng chiroylisi edi. Bir kuni eshigi jiringlab, 7 yoshli bola unga atirgul sotmoqchi bo'ladi. Ayol o'zining bog'ida gullar ko'pligini aytganida, bola: 'Sizning bog'ingizda gul qolmagan, chunki ularning hammasi mening qo'limda!' deb javob beradi.",
    vocabulary: [
      {
            "word": "bunch",
            "pos": "n.",
            "phonetic": "[bʌntʃ]",
            "translationUz": "dasta, guldasta",
            "definitionEn": "A number of things of the same kind held or tied together.",
            "exampleSentence": "He was holding a big bunch of roses in his hand."
      },
      {
            "word": "cheap",
            "pos": "adj.",
            "phonetic": "[tʃiːp]",
            "translationUz": "arzon",
            "definitionEn": "Costing little money; not expensive.",
            "exampleSentence": "The roses were quite cheap, only five pence."
      },
      {
            "word": "pick",
            "pos": "v.",
            "phonetic": "[pɪk]",
            "translationUz": "uzmoq, termoq",
            "definitionEn": "To detach and gather a flower, fruit, etc.",
            "exampleSentence": "She picked fresh flowers from her garden."
      },
      {
            "word": "whenever",
            "pos": "conj.",
            "phonetic": "[wenˈevə]",
            "translationUz": "har gal ... qilganda, qachonki",
            "definitionEn": "At whatever time, on any occasion that.",
            "exampleSentence": "I can pick flowers whenever I want."
      },
      {
            "word": "fresh",
            "pos": "adj.",
            "phonetic": "[freʃ]",
            "translationUz": "yangi, uzilgan",
            "definitionEn": "Recently made, gathered, or produced; not stale.",
            "exampleSentence": "These roses are fresh because I picked them today."
      },
      {
            "word": "lots of",
            "pos": "determiner",
            "phonetic": "[lɒts əv]",
            "translationUz": "ko'plab",
            "definitionEn": "A large number or amount.",
            "exampleSentence": "She had lots of red roses in her garden."
      }
],
    reproductionOutline: [
      "Mrs Williams loved flowers and had a lovely garden with the best roses in town.",
      "One summer afternoon, the front door bell rang and she saw a seven-year-old boy.",
      "The boy offered to sell her a big bunch of fresh roses for five pence.",
      "Mrs Williams declined, saying she already had plenty of free roses in her own garden.",
      "The boy revealed the truth: her garden had no roses left because he had picked them all!"
],
    modelRetelling: "Mrs Williams took great pride in her garden, which grew the most beautiful roses on her street. One summer afternoon, a seven-year-old boy knocked on her door holding a large bunch of fresh roses and offered to sell them for five pence. Mrs Williams smiled and refused, explaining that she did not need to buy flowers because her garden was full of them. To her astonishment, the boy replied that there were no roses left in her garden because he had just picked all of them to sell back to her!",
    questions: [
      {
            "id": "s12-q1",
            "order": 1,
            "question": "What did Mrs Williams love?",
            "modelAnswer": "Mrs Williams loved flowers.",
            "keywords": [
                  "loved",
                  "flowers"
            ],
            "options": [
                  "Flowers",
                  "Animals",
                  "Cooking",
                  "Travelling"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Matnning birinchi jumlasida: 'Mrs Williams loved flowers'."
      },
      {
            "id": "s12-q2",
            "order": 2,
            "question": "What did she have?",
            "modelAnswer": "She had a small but beautiful garden.",
            "keywords": [
                  "small",
                  "beautiful garden"
            ],
            "options": [
                  "A small but beautiful garden",
                  "A large farm in the village",
                  "A flower shop in town",
                  "A pet dog"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning kichik, lekin chiroyli bog'i bor edi."
      },
      {
            "id": "s12-q3",
            "order": 3,
            "question": "What were her roses like in the summer?",
            "modelAnswer": "In the summer, her roses were always the best in her street.",
            "keywords": [
                  "best",
                  "in her street",
                  "summer"
            ],
            "options": [
                  "They were always the best in her street",
                  "They dried up and died",
                  "They were yellow and small",
                  "They were eaten by insects"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yozda uning atirgullari ko'chadagi eng yaxshisi bo'lar edi."
      },
      {
            "id": "s12-q4",
            "order": 4,
            "question": "What happened one summer afternoon?",
            "modelAnswer": "Her bell rang one summer afternoon.",
            "keywords": [
                  "bell rang",
                  "summer afternoon"
            ],
            "options": [
                  "Her front bell rang",
                  "A storm damaged her garden",
                  "A neighbour visited her",
                  "The postman brought a letter"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir yoz kuni tushdan keyin uning eshik qo'ng'irog'i jiringladi."
      },
      {
            "id": "s12-q5",
            "order": 5,
            "question": "What did Mrs Williams do then?",
            "modelAnswer": "She went to the front door.",
            "keywords": [
                  "went to the front door"
            ],
            "options": [
                  "She went to the front door",
                  "She stayed in the kitchen",
                  "She looked out of the window",
                  "She called the police"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U old eshik tomon bordi: 'she went to the front door'."
      },
      {
            "id": "s12-q6",
            "order": 6,
            "question": "What did she see?",
            "modelAnswer": "She saw a small boy holding a big bunch of beautiful roses.",
            "keywords": [
                  "small boy",
                  "holding",
                  "bunch of roses"
            ],
            "options": [
                  "A small boy holding a big bunch of roses",
                  "Her friend with a present",
                  "A stray cat in the yard",
                  "A delivery driver"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'lida katta guldasta ushlab turgan kichkina bolani ko'rdi."
      },
      {
            "id": "s12-q7",
            "order": 7,
            "question": "Where did she see this boy?",
            "modelAnswer": "She saw him outside her front door.",
            "keywords": [
                  "outside",
                  "front door"
            ],
            "options": [
                  "Outside her front door",
                  "In the park down the road",
                  "Inside her living room",
                  "Near the supermarket"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bolani eshigi tashqarisida ko'rdi: 'outside'."
      },
      {
            "id": "s12-q8",
            "order": 8,
            "question": "How old was he?",
            "modelAnswer": "He was about seven years old.",
            "keywords": [
                  "about seven years old"
            ],
            "options": [
                  "About seven years old",
                  "Ten years old",
                  "About five years old",
                  "Twelve years old"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bola taxminan 7 yoshda edi: 'He was about seven years old'."
      },
      {
            "id": "s12-q9",
            "order": 9,
            "question": "What was he holding?",
            "modelAnswer": "He was holding a big bunch of beautiful roses in his hand.",
            "keywords": [
                  "big bunch",
                  "beautiful roses",
                  "in his hand"
            ],
            "options": [
                  "A big bunch of beautiful roses",
                  "A basket of apples",
                  "A pair of garden scissors",
                  "A school bag"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'lida katta dasta chiroyli atirgullarni ushlab turgan edi."
      },
      {
            "id": "s12-q10",
            "order": 10,
            "question": "What did he say to Mrs Williams?",
            "modelAnswer": "He said that he was selling roses, asked if she wanted any for five pence, and said they were fresh.",
            "keywords": [
                  "selling roses",
                  "cheap",
                  "five pence",
                  "fresh"
            ],
            "options": [
                  "He offered to sell her fresh roses for five pence a bunch",
                  "He asked for a glass of cold water",
                  "He asked for directions to the market",
                  "He said he was giving away free flowers"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bola atirgul sotayotganini va ular yangi uzilgan hamda atigi 5 pens ekanini aytdi."
      },
      {
            "id": "s12-q11",
            "order": 11,
            "question": "What did Mrs Williams answer?",
            "modelAnswer": "She answered that she could pick roses whenever she wanted without paying because she had lots in her garden.",
            "keywords": [
                  "pick roses whenever I want",
                  "lots in my garden"
            ],
            "options": [
                  "She said she picks roses whenever she wants because she has lots in her garden",
                  "She said she had no money to buy flowers",
                  "She bought the roses immediately",
                  "She told the boy to go to another street"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U o'z bog'ida gullar ko'pligini va xohlagan paytida bepul uzib olishini aytdi."
      },
      {
            "id": "s12-q12",
            "order": 12,
            "question": "What did the small boy say then?",
            "modelAnswer": "He said, 'Oh, no, you haven't. There aren't any roses in your garden—because they are here in my hand!'",
            "keywords": [
                  "no you haven't",
                  "aren't any roses in your garden",
                  "here in my hand"
            ],
            "options": [
                  "'There aren't any roses in your garden—because they are here in my hand!'",
                  "'I will give you a discount if you buy two bunches'",
                  "'My mother picked them in our backyard'",
                  "'I will come back tomorrow with fresh tulips'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bola: 'Sizning bog'ingizda atirgullar yo'q, chunki ularning hammasi mening qo'limda!' dedi."
      },
      {
            "id": "s12-q13",
            "order": 13,
            "question": "Why weren't there any roses in Mrs Williams's garden?",
            "modelAnswer": "Because the small boy had picked all of them to sell to her.",
            "keywords": [
                  "small boy",
                  "picked all of them",
                  "garden"
            ],
            "options": [
                  "Because the boy had picked all of them to sell",
                  "Because a bad wind blew them away",
                  "Because someone had sprayed poison on them",
                  "Because summer had already ended"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki bola ayolning bog'iga kirib, barcha atirgullarni uzib olgan edi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s12-tf1",
            "order": 1,
            "statement": "Mrs Williams was well known on her street for having beautiful roses.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'her roses were always the best in her street'."
      },
      {
            "id": "s12-tf2",
            "order": 2,
            "statement": "The boy selling flowers was a teenager in high school.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U taxminan yetti yoshli bola edi ('He was about seven years old')."
      },
      {
            "id": "s12-tf3",
            "order": 3,
            "statement": "The boy asked for ten shillings for the bouquet.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U atigi 5 pens so'ragan edi ('Five pence for a big bunch')."
      },
      {
            "id": "s12-tf4",
            "order": 4,
            "statement": "The roses held by the boy had been stolen from Mrs Williams's own garden.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Bola uning bog'idagi barcha atirgullarni o'zi uzib olgan edi."
      },
      {
            "id": "s12-tf5",
            "order": 5,
            "statement": "Mrs Williams called the police to arrest the seven-year-old child.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda ayolning politsiya chaqirgani yoki nima qilgani haqida aytilmagan."
      },
      {
            "id": "s12-tf6",
            "order": 6,
            "statement": "Mrs Williams refused to buy the flowers before she knew where they came from.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U gullar o'z bog'idan ekanini bilishidan oldin rad javobini bergan edi."
      }
]
  },
  {
    id: 'story-13',
    storyNumber: 13,
    title: "The Doctor and the Woman's Age",
    titleUz: "Shifokor va ayolning yoshi",
    cefrLevel: 'A2',
    wordCount: 104,
    readingTimeMinutes: 1,
    storyText: "A woman was having some trouble with her heart, so she went to see the doctor. He was a new doctor, and did not know her, so he first asked some questions, and one of them was, 'How old are you?'\n'Well,' she answered, 'I don't remember, doctor, but I will try to think.' She thought for a minute and then said, 'Yes, I remember now, doctor! When I married, I was eighteen years old, and my husband was thirty. Now my husband is sixty, I know; and that is twice thirty. So I am twice eighteen. That is thirty-six, isn't it?'",
    paragraphs: [
      "A woman was having some trouble with her heart, so she went to see the doctor. He was a new doctor, and did not know her, so he first asked some questions, and one of them was, 'How old are you?'",
      "'Well,' she answered, 'I don't remember, doctor, but I will try to think.' She thought for a minute and then said, 'Yes, I remember now, doctor! When I married, I was eighteen years old, and my husband was thirty. Now my husband is sixty, I know; and that is twice thirty. So I am twice eighteen. That is thirty-six, isn't it?'"
],
    summaryUz: "Yuragi bezovta qilgan ayol yangi shifokorga boradi. Shifokor yoshini so'raganida, ayol yoshini eslolmay qolib g'alati hisob-kitob qiladi: 'Turmushga chiqqanimda men 18 da, erim 30 da edi. Hozir erim 60 da — ya'ni 30 ning ikki barobari. Demak men ham 18 ning ikki barobari, ya'ni 36 yoshdaman!' (Aslida esa u 48 yoshda edi).",
    vocabulary: [
      {
            "word": "trouble",
            "pos": "n.",
            "phonetic": "[ˈtrʌbl]",
            "translationUz": "muammo, bezovtalik, xastalik",
            "definitionEn": "Difficulty or physical problems.",
            "exampleSentence": "She was having trouble with her heart."
      },
      {
            "word": "heart",
            "pos": "n.",
            "phonetic": "[hɑːt]",
            "translationUz": "yurak",
            "definitionEn": "The organ in the chest that pumps blood.",
            "exampleSentence": "The doctor listened to her heart."
      },
      {
            "word": "marry",
            "pos": "v.",
            "phonetic": "[ˈmæri]",
            "translationUz": "turmush qurmoq",
            "definitionEn": "To join in marriage.",
            "exampleSentence": "She was eighteen when she married."
      },
      {
            "word": "twice",
            "pos": "adv.",
            "phonetic": "[twaɪs]",
            "translationUz": "ikki marta, ikki barobar",
            "definitionEn": "Two times; double in degree or quantity.",
            "exampleSentence": "Sixty is twice thirty."
      },
      {
            "word": "remember",
            "pos": "v.",
            "phonetic": "[rɪˈmembə]",
            "translationUz": "eslamoq, yodda tutmoq",
            "definitionEn": "To bring to mind or think of again.",
            "exampleSentence": "I don't remember my exact age, doctor."
      },
      {
            "word": "think",
            "pos": "v.",
            "phonetic": "[θɪŋk]",
            "translationUz": "o'ylamoq",
            "definitionEn": "To use one's mind actively to reflect or deliberate.",
            "exampleSentence": "She thought for a minute before answering."
      }
],
    reproductionOutline: [
      "A woman visited a new doctor because of heart problems.",
      "The doctor did not know her and asked for her age.",
      "The woman admitted she could not remember, but tried to calculate it.",
      "She reasoned: when married she was 18 and her husband was 30.",
      "Since her husband was now 60 (twice 30), she mistakenly concluded she was 36 (twice 18) instead of 48!"
],
    modelRetelling: "A woman experiencing heart trouble consulted a new doctor who was unfamiliar with her medical history. When the doctor asked for her age, she confessed that she had forgotten it, but offered to work it out. She recalled that on their wedding day, she was eighteen and her husband was thirty. Knowing that her husband was now sixty, she reasoned that since sixty is double thirty, her own age must be double eighteen, proudly concluding that she was thirty-six, completely missing that she was actually forty-eight!",
    questions: [
      {
            "id": "s13-q1",
            "order": 1,
            "question": "Where did the woman in this story go?",
            "modelAnswer": "She went to see the doctor.",
            "keywords": [
                  "see the doctor"
            ],
            "options": [
                  "To see the doctor",
                  "To a pharmacy",
                  "To her husband's office",
                  "To the hospital registry"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U shifokor qabuliga bordi: 'so she went to see the doctor'."
      },
      {
            "id": "s13-q2",
            "order": 2,
            "question": "Why did she go there?",
            "modelAnswer": "Because she was having some trouble with her heart.",
            "keywords": [
                  "trouble with her heart"
            ],
            "options": [
                  "Because she was having some trouble with her heart",
                  "Because she needed a routine health certificate",
                  "Because she was feeling dizzy after work",
                  "Because her husband felt ill"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning yuragida muammo bor edi: 'trouble with her heart'."
      },
      {
            "id": "s13-q3",
            "order": 3,
            "question": "Why did the doctor not know her?",
            "modelAnswer": "Because he was a new doctor.",
            "keywords": [
                  "new doctor"
            ],
            "options": [
                  "Because he was a new doctor",
                  "Because she wore a disguise",
                  "Because she had moved from another country",
                  "Because the doctor was very old"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki u yangi shifokor edi: 'He was a new doctor'."
      },
      {
            "id": "s13-q4",
            "order": 4,
            "question": "What did he do first?",
            "modelAnswer": "First he asked some questions.",
            "keywords": [
                  "asked some questions"
            ],
            "options": [
                  "He asked some questions",
                  "He gave her pills",
                  "He checked her blood pressure",
                  "He asked her husband to enter"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U avvaliga ba'zi savollarni so'radi."
      },
      {
            "id": "s13-q5",
            "order": 5,
            "question": "What was one of his questions?",
            "modelAnswer": "One of his questions was, 'How old are you?'",
            "keywords": [
                  "How old are you"
            ],
            "options": [
                  "'How old are you?'",
                  "'What is your name?'",
                  "'Where do you live?'",
                  "'Do you take any medication?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Savollardan biri: 'Yoshingiz nechada?' edi."
      },
      {
            "id": "s13-q6",
            "order": 6,
            "question": "What did the woman answer?",
            "modelAnswer": "She answered that she didn't remember, but would try to think.",
            "keywords": [
                  "don't remember",
                  "try to think"
            ],
            "options": [
                  "She said she did not remember, but would try to think",
                  "She immediately said thirty-six",
                  "She said she was forty-eight",
                  "She said she was sixty years old"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yoshini eslay olmasligini, lekin o'ylab ko'rishini aytdi."
      },
      {
            "id": "s13-q7",
            "order": 7,
            "question": "What did she do then?",
            "modelAnswer": "She thought for a minute.",
            "keywords": [
                  "thought for a minute"
            ],
            "options": [
                  "She thought for a minute",
                  "She phoned her husband",
                  "She looked in her handbag",
                  "She checked her identity card"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bir daqiqa o'ylab ko'rdi: 'She thought for a minute'."
      },
      {
            "id": "s13-q8",
            "order": 8,
            "question": "What did she say after that?",
            "modelAnswer": "She said when she married she was eighteen and her husband was thirty, and since her husband was now sixty (twice thirty), she was twice eighteen, which was thirty-six.",
            "keywords": [
                  "married at 18",
                  "husband was thirty",
                  "now sixty",
                  "twice thirty",
                  "twice eighteen",
                  "thirty-six"
            ],
            "options": [
                  "She calculated that she must be thirty-six because sixty is twice thirty",
                  "She realized she was fifty years old",
                  "She said her husband was thirty-six",
                  "She admitted she was unable to do the maths"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U erining yoshi 2 barobar oshgani kabi, o'zining yoshi ham 18 dan 36 ga chiqqanini iddao qildi."
      },
      {
            "id": "s13-q9",
            "order": 9,
            "question": "How old was the woman really?",
            "modelAnswer": "She was really 48 years old.",
            "keywords": [
                  "48 years old",
                  "forty-eight"
            ],
            "options": [
                  "48 years old",
                  "36 years old",
                  "54 years old",
                  "60 years old"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri 30 dan 60 ga yetguncha 30 yil o'tgan. 18 + 30 = 48 yosh bo'ladi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s13-tf1",
            "order": 1,
            "statement": "The woman visited the clinic because of a stomach complaint.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U oshqozon emas, yurak xastaligi tufayli borgan ('trouble with her heart')."
      },
      {
            "id": "s13-tf2",
            "order": 2,
            "statement": "The doctor had treated the woman several times before.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U yangi shifokor bo'lib, ayolni tanimas edi ('He was a new doctor, and did not know her')."
      },
      {
            "id": "s13-tf3",
            "order": 3,
            "statement": "When they got married, the husband was twelve years older than the woman.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Ayol 18 da, eri 30 da bo'lgan (30 - 18 = 12 yil farq)."
      },
      {
            "id": "s13-tf4",
            "order": 4,
            "statement": "The woman's husband was sixty years old at the time of the story.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Now my husband is sixty, I know'."
      },
      {
            "id": "s13-tf5",
            "order": 5,
            "statement": "The woman's mathematical reasoning about her age was completely correct.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uning mantiqiy hisobi xato bo'lib, u aslida 48 yoshda edi."
      },
      {
            "id": "s13-tf6",
            "order": 6,
            "statement": "The doctor laughed out loud at the woman's funny answer.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda shifokorning bu javobga qanday munosabat bildirgani aytilmagan."
      }
]
  },
  {
    id: 'story-14',
    storyNumber: 14,
    title: "The Cotton Dress",
    titleUz: "Paxta Ko'ylak",
    cefrLevel: 'A2',
    wordCount: 167,
    readingTimeMinutes: 1,
    storyText: "One day Mrs Jones went shopping. When her husband came home in the evening, she began to tell him about a beautiful cotton dress. 'I saw it in a shop this morning,' she said, 'and ... '\n'And you want to buy it,' said her husband. 'How much does it cost?'\n'Fifteen pounds.'\n'Fifteen pounds for a cotton dress? That is too much!'\nBut every evening, when Mr Jones came back from work, his wife continued to speak only about the dress, and at last, after a week, he said, 'Oh, buy the dress! Here is the money!' She was very happy.\nBut the next evening, when Mr Jones came home and asked, 'Have you got the famous dress?' she said, 'No.'\n'Why not?' he said.\n'Well, it was still in the window of the shop after a week so I thought, \"Nobody else wants this dress, so I don't want it either\".'",
    paragraphs: [
      "One day Mrs Jones went shopping. When her husband came home in the evening, she began to tell him about a beautiful cotton dress. 'I saw it in a shop this morning,' she said, 'and ... '",
      "'And you want to buy it,' said her husband. 'How much does it cost?'\n'Fifteen pounds.'\n'Fifteen pounds for a cotton dress? That is too much!'",
      "But every evening, when Mr Jones came back from work, his wife continued to speak only about the dress, and at last, after a week, he said, 'Oh, buy the dress! Here is the money!' She was very happy.",
      "But the next evening, when Mr Jones came home and asked, 'Have you got the famous dress?' she said, 'No.'\n'Why not?' he said.\n'Well, it was still in the window of the shop after a week so I thought, \"Nobody else wants this dress, so I don't want it either\".'"
],
    summaryUz: "Xonim Jons do'konda 15 funtlik paxta ko'ylakni ko'rib, bir hafta davomida har kecha eriga faqat shu haqda gapiradi. Oxiri eri joniqib unga 15 funt beradi. Ertasi kuni eri ko'ylakni so'raganida, ayol ko'ylakni olmaganini aytadi: 'Bir hafta o'tsa ham vitrinada turibdi, demak hech kimga yoqmabdi, shuning uchun menga ham kerak emas!'",
    vocabulary: [
      {
            "word": "cotton",
            "pos": "n. / adj.",
            "phonetic": "[ˈkɒtn]",
            "translationUz": "paxta, paxtali",
            "definitionEn": "A soft white fibrous substance used to make textile fabric.",
            "exampleSentence": "She fell in love with a lightweight cotton dress."
      },
      {
            "word": "too much",
            "pos": "adv. phr.",
            "phonetic": "[tuː mʌtʃ]",
            "translationUz": "juda qimmat, me'yordan ortiq",
            "definitionEn": "An excessive amount or price.",
            "exampleSentence": "Fifteen pounds for a simple dress is too much!"
      },
      {
            "word": "continue",
            "pos": "v.",
            "phonetic": "[kənˈtɪnjuː]",
            "translationUz": "davom etmoq",
            "definitionEn": "To keep doing or discussing something without stopping.",
            "exampleSentence": "She continued to speak about the dress every evening."
      },
      {
            "word": "at last",
            "pos": "adv. phr.",
            "phonetic": "[æt lɑːst]",
            "translationUz": "nihoyat, oxir-oqibat",
            "definitionEn": "Finally, after much delay or effort.",
            "exampleSentence": "At last, after a whole week, he agreed."
      },
      {
            "word": "famous",
            "pos": "adj.",
            "phonetic": "[ˈfeɪməs]",
            "translationUz": "mashhur (bu yerda kinoyali: \"o'sha tilga tushgan\")",
            "definitionEn": "Known by many; here used humorously for something discussed repeatedly.",
            "exampleSentence": "Did you buy that famous dress today?"
      },
      {
            "word": "either",
            "pos": "adv.",
            "phonetic": "[ˈaɪðə]",
            "translationUz": "ham (inkor gaplarda)",
            "definitionEn": "Used to indicate a similar negative circumstance.",
            "exampleSentence": "Nobody wants it, so I do not want it either."
      }
],
    reproductionOutline: [
      "Mrs Jones saw a fifteen-pound cotton dress in a shop window while shopping.",
      "Her husband thought 15 pounds was far too expensive for a cotton dress.",
      "For a whole week, Mrs Jones talked about nothing else every single evening.",
      "Exhausted by her persistence, Mr Jones finally gave her the money.",
      "However, she decided not to buy it because if no one else bought it in a week, she no longer wanted it!"
],
    modelRetelling: "After spotting a beautiful cotton dress in a shop window, Mrs Jones spent every single evening begging her husband for it. Although Mr Jones initially balked at the fifteen-pound price tag, after seven straight days of relentless pleading he finally gave in and handed her the cash. To his amazement, the next evening Mrs Jones revealed that she had not purchased the dress after all. Since the dress was still sitting untouched in the shop window after a full week, she reasoned that nobody else wanted it, so she had lost interest as well!",
    questions: [
      {
            "id": "s14-q1",
            "order": 1,
            "question": "What did Mrs Jones do one day?",
            "modelAnswer": "One day Mrs Jones went shopping.",
            "keywords": [
                  "went shopping"
            ],
            "options": [
                  "She went shopping",
                  "She visited a museum",
                  "She made a new dress",
                  "She cleaned the house"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni xonim Jons xarid qilishga bordi: 'One day Mrs Jones went shopping'."
      },
      {
            "id": "s14-q2",
            "order": 2,
            "question": "When did her husband come home?",
            "modelAnswer": "Her husband came home in the evening.",
            "keywords": [
                  "came home",
                  "evening"
            ],
            "options": [
                  "In the evening",
                  "At lunchtime",
                  "Late at night",
                  "Early in the morning"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri kechqurun uyga qaytdi: 'came home in the evening'."
      },
      {
            "id": "s14-q3",
            "order": 3,
            "question": "What did Mrs Jones do when he came home?",
            "modelAnswer": "She began to tell him about a beautiful cotton dress.",
            "keywords": [
                  "tell him about",
                  "beautiful cotton dress"
            ],
            "options": [
                  "She began to tell him about a beautiful cotton dress",
                  "She served dinner silently",
                  "She complained about the weather",
                  "She asked him for a holiday in Spain"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eriga chiroyli paxta ko'ylak haqida so'zlay boshladi."
      },
      {
            "id": "s14-q4",
            "order": 4,
            "question": "What did she say to him?",
            "modelAnswer": "She said, 'I saw it in a shop this morning, and ...'",
            "keywords": [
                  "saw it in a shop this morning"
            ],
            "options": [
                  "'I saw it in a shop this morning, and ...'",
                  "'I bought a wonderful hat for myself'",
                  "'The shops were all closed today'",
                  "'Could you lend money to my sister?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ertalab do'konda bu ko'ylakni ko'rganini aytdi."
      },
      {
            "id": "s14-q5",
            "order": 5,
            "question": "What did he answer?",
            "modelAnswer": "He answered, 'And you want to buy it. How much does it cost?'",
            "keywords": [
                  "want to buy it",
                  "how much does it cost"
            ],
            "options": [
                  "'And you want to buy it. How much does it cost?'",
                  "'You already have too many clothes.'",
                  "'Let us go and see it together right now.'",
                  "'Do not bother me with dresses tonight.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri: 'Va sen uni sotib olmoqchisan. Narxi qancha?' deb so'radi."
      },
      {
            "id": "s14-q6",
            "order": 6,
            "question": "What did she say?",
            "modelAnswer": "She said, 'Fifteen pounds.'",
            "keywords": [
                  "Fifteen pounds"
            ],
            "options": [
                  "Fifteen pounds",
                  "Fifty pounds",
                  "Five pounds",
                  "Twenty pounds"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ko'ylak narxi 15 funt edi: 'Fifteen pounds'."
      },
      {
            "id": "s14-q7",
            "order": 7,
            "question": "What did Mr Jones say then?",
            "modelAnswer": "Mr Jones said, 'Fifteen pounds for a cotton dress? That is too much!'",
            "keywords": [
                  "Fifteen pounds for a cotton dress",
                  "too much"
            ],
            "options": [
                  "'Fifteen pounds for a cotton dress? That is too much!'",
                  "'That sounds very reasonable, buy two!'",
                  "'Ask the shopkeeper for a lower price.'",
                  "'We will check my bank account tomorrow.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri 15 funt paxta ko'ylak uchun juda qimmat ekanini aytdi."
      },
      {
            "id": "s14-q8",
            "order": 8,
            "question": "What happened every evening after that?",
            "modelAnswer": "Every evening his wife continued to speak only about the dress.",
            "keywords": [
                  "continued to speak only about the dress"
            ],
            "options": [
                  "His wife continued to speak only about the dress",
                  "They went out to restaurants for dinner",
                  "They did not speak to each other at all",
                  "Mr Jones worked late at the office"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Har oqshom xotini faqat shu ko'ylak haqida gapirishni davom ettirdi."
      },
      {
            "id": "s14-q9",
            "order": 9,
            "question": "What happened after a week?",
            "modelAnswer": "After a week, Mr Jones gave her the money and told her to buy the dress.",
            "keywords": [
                  "buy the dress",
                  "Here is the money"
            ],
            "options": [
                  "Mr Jones gave her the money and told her to buy the dress",
                  "Mrs Jones gave up and forgot about it",
                  "The shopkeeper reduced the price to ten pounds",
                  "Mr Jones bought the dress himself as a surprise"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir haftadan so'ng eri pulni berib, borib sotib olishini aytdi."
      },
      {
            "id": "s14-q10",
            "order": 10,
            "question": "What did Mr Jones ask the next evening?",
            "modelAnswer": "He asked, 'Have you got the famous dress?'",
            "keywords": [
                  "Have you got the famous dress"
            ],
            "options": [
                  "'Have you got the famous dress?'",
                  "'What is for dinner tonight?'",
                  "'Where is my change from the fifteen pounds?'",
                  "'Did your friends like the dress?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ertasi kechqurun u: 'O'sha mashhur ko'ylakni oldingmi?' deb so'radi."
      },
      {
            "id": "s14-q11",
            "order": 11,
            "question": "What did Mrs Jones answer?",
            "modelAnswer": "She answered, 'No.'",
            "keywords": [
                  "No"
            ],
            "options": [
                  "No",
                  "Yes",
                  "Not yet, tomorrow",
                  "I returned it"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xonim Jons 'Yo'q' deb javob berdi."
      },
      {
            "id": "s14-q12",
            "order": 12,
            "question": "What did her husband say then?",
            "modelAnswer": "He said, 'Why not?'",
            "keywords": [
                  "Why not"
            ],
            "options": [
                  "'Why not?'",
                  "'Where is my money?'",
                  "'Did someone steal it?'",
                  "'Was the shop closed?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri hayron bo'lib: 'Nega olmading?' dedi."
      },
      {
            "id": "s14-q13",
            "order": 13,
            "question": "What was her answer?",
            "modelAnswer": "She answered that after a week the dress was still in the shop window, so she thought nobody else wanted it, and she didn't want it either.",
            "keywords": [
                  "still in the window",
                  "nobody else wants this dress",
                  "don't want it either"
            ],
            "options": [
                  "She said nobody else wanted the dress after a week, so she didn't want it either",
                  "She said the shop had already sold it to another woman",
                  "She had lost the fifteen pounds on the bus",
                  "She decided she preferred a woolen coat instead"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir hafta o'tsa ham vitrinada turgani uchun, boshqalar xohlamagan ko'ylakni o'zi ham xohlamasligini aytdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s14-tf1",
            "order": 1,
            "statement": "Mrs Jones discovered the cotton dress while shopping in the morning.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'I saw it in a shop this morning'."
      },
      {
            "id": "s14-tf2",
            "order": 2,
            "statement": "Mr Jones immediately agreed that fifteen pounds was a great bargain.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U buni juda qimmat deb hisobladi ('That is too much!')."
      },
      {
            "id": "s14-tf3",
            "order": 3,
            "statement": "Mrs Jones talked about the dress every evening for an entire week.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'every evening... his wife continued to speak only about the dress... after a week'."
      },
      {
            "id": "s14-tf4",
            "order": 4,
            "statement": "Mr Jones bought the dress himself and wrapped it as a birthday gift.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U o'zi sotib olmadi, balki xotiniga pul berdi ('Here is the money!')."
      },
      {
            "id": "s14-tf5",
            "order": 5,
            "statement": "The dress was sold to another customer before Mrs Jones reached the shop.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ko'ylak hanuz vitrinada turgan edi ('it was still in the window of the shop')."
      },
      {
            "id": "s14-tf6",
            "order": 6,
            "statement": "Mrs Jones decided against buying the dress because it seemed unpopular.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Agar hech kimga kerak bo'lmagan bo'lsa, menga ham kerak emas deb o'yladi."
      }
]
  },
  {
    id: 'story-15',
    storyNumber: 15,
    title: "The Ugly Hat",
    titleUz: "Xunuk Shlyapa",
    cefrLevel: 'A2',
    wordCount: 149,
    readingTimeMinutes: 1,
    storyText: "One day a lady walked into a hat shop. The shopkeeper smiled and said, 'Good afternoon, madam.'\n'Good afternoon,' the lady answered. 'There is a green hat with red flowers and blue leaves on it in your window. Will you please take it out of there.'\n'Yes, madam,' the shopkeeper said. 'I will be very pleased to do that for you.' Usually ladies looked at a lot of hats before they chose one, and the shopkeeper got very tired. 'Good', he thought, 'I will sell this hat very quickly—and it has been in my window for a very long time.'\n'Do you want it in a box, madam,' he asked, 'or will you wear it?'\n'Oh, I don't want it,' she answered. 'I only wanted you to take it out of your window. I pass your shop every day, and I hate to see the ugly thing there!'",
    paragraphs: [
      "One day a lady walked into a hat shop. The shopkeeper smiled and said, 'Good afternoon, madam.'",
      "'Good afternoon,' the lady answered. 'There is a green hat with red flowers and blue leaves on it in your window. Will you please take it out of there.'",
      "'Yes, madam,' the shopkeeper said. 'I will be very pleased to do that for you.' Usually ladies looked at a lot of hats before they chose one, and the shopkeeper got very tired. 'Good', he thought, 'I will sell this hat very quickly—and it has been in my window for a very long time.'",
      "'Do you want it in a box, madam,' he asked, 'or will you wear it?'",
      "'Oh, I don't want it,' she answered. 'I only wanted you to take it out of your window. I pass your shop every day, and I hate to see the ugly thing there!'"
],
    summaryUz: "Bir ayol shlyapa do'koniga kirib, sotuvchidan vitrinadagi qizil gulli va ko'k bargli yashil shlyapani olib tashlashni iltimos qiladi. Sotuvchi uzoq vaqt sotilmay yotgan bu shlyapa nihoyat sotiladi deb xursand bo'ladi va uni qutiga solib berishni so'raydi. Biroq ayol: 'Menga bu shlyapa kerak emas! Men har kuni bu yerdan o'taman va vitrinada bu xunuk narsani ko'rishdan nafratlanaman!' deydi.",
    vocabulary: [
      {
            "word": "shopkeeper",
            "pos": "n.",
            "phonetic": "[ˈʃɒpkiːpə]",
            "translationUz": "do'kondor, sotuvchi",
            "definitionEn": "An owner or manager of a small retail store.",
            "exampleSentence": "The shopkeeper smiled warmly at the customer."
      },
      {
            "word": "window",
            "pos": "n.",
            "phonetic": "[ˈwɪndəʊ]",
            "translationUz": "vitrina",
            "definitionEn": "A display area behind glass at the front of a store.",
            "exampleSentence": "The green hat had been in the window for a long time."
      },
      {
            "word": "choose",
            "pos": "v.",
            "phonetic": "[tʃuːz]",
            "translationUz": "tanlamoq",
            "definitionEn": "To select or pick out from a number of alternatives.",
            "exampleSentence": "Customers usually looked at ten hats before they chose one."
      },
      {
            "word": "pass",
            "pos": "v.",
            "phonetic": "[pɑːs]",
            "translationUz": "yonidan o'tmoq",
            "definitionEn": "To move past or go by something.",
            "exampleSentence": "I pass your shop on my way to work every morning."
      },
      {
            "word": "hate",
            "pos": "v.",
            "phonetic": "[heɪt]",
            "translationUz": "nafratlanmoq, yoqtirmaslik",
            "definitionEn": "To feel intense dislike or aversion towards.",
            "exampleSentence": "She hates seeing that ugly colour combination."
      },
      {
            "word": "ugly",
            "pos": "adj.",
            "phonetic": "[ˈʌɡli]",
            "translationUz": "xunuk, badbashara",
            "definitionEn": "Unpleasant or repulsive in appearance.",
            "exampleSentence": "The hat was so ugly that she could not bear to look at it."
      }
],
    reproductionOutline: [
      "A lady entered a hat shop and politely greeted the shopkeeper.",
      "She asked him to take down a specific green hat with red flowers from the shop window.",
      "Delighted, the shopkeeper thought he had finally made a quick sale of an old stock item.",
      "He asked whether she preferred the hat packed in a box or to wear it out.",
      "The woman bluntly stated she had no desire to buy it—she just hated seeing the ugly thing on display every day!"
],
    modelRetelling: "A lady visited a hat shop and pointed out a green hat decorated with red flowers and blue leaves displayed in the window, asking the shopkeeper to take it out. Overjoyed, the shopkeeper gladly complied, thrilled at the prospect of instantly selling a hat that had lingered in his window for months without the usual exhausting browsing. When he politely asked whether she wanted it boxed or would wear it, she shocked him by answering that she had no intention of purchasing it; she simply walked past his shop daily and could no longer stand looking at that hideous creation!",
    questions: [
      {
            "id": "s15-q1",
            "order": 1,
            "question": "What happened one day?",
            "modelAnswer": "One day a lady walked into a hat shop.",
            "keywords": [
                  "lady walked into a hat shop"
            ],
            "options": [
                  "A lady walked into a hat shop",
                  "A man bought a new suit",
                  "A window broke in a shop",
                  "A hat was stolen"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni bir ayol shlyapa do'koniga kirdi."
      },
      {
            "id": "s15-q2",
            "order": 2,
            "question": "What did the shopkeeper do?",
            "modelAnswer": "The shopkeeper smiled.",
            "keywords": [
                  "smiled"
            ],
            "options": [
                  "He smiled",
                  "He frowned",
                  "He hid behind the counter",
                  "He closed the door"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Sotuvchi jilmaydi: 'The shopkeeper smiled'."
      },
      {
            "id": "s15-q3",
            "order": 3,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Good afternoon, madam.'",
            "keywords": [
                  "Good afternoon, madam"
            ],
            "options": [
                  "'Good afternoon, madam.'",
                  "'Can I help you, miss?'",
                  "'We are closing soon.'",
                  "'Hats are half price today.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Xayrli kun, xonim' dedi."
      },
      {
            "id": "s15-q4",
            "order": 4,
            "question": "What did the lady answer?",
            "modelAnswer": "She answered, 'Good afternoon. There is a green hat with red flowers and blue leaves on it in your window. Will you please take it out of there.'",
            "keywords": [
                  "green hat with red flowers",
                  "take it out of there"
            ],
            "options": [
                  "She asked him to take the green hat with red flowers and blue leaves out of the window",
                  "She asked to see the most expensive hat in the shop",
                  "She complained about the high prices",
                  "She asked for a pair of matching gloves"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U vitrinadagi qizil gulli, ko'k bargli yashil shlyapani olib tashlashni so'radi."
      },
      {
            "id": "s15-q5",
            "order": 5,
            "question": "What did the shopkeeper say then?",
            "modelAnswer": "He said, 'Yes, madam. I will be very pleased to do that for you.'",
            "keywords": [
                  "very pleased to do that for you"
            ],
            "options": [
                  "'Yes, madam. I will be very pleased to do that for you.'",
                  "'I am sorry, but that hat is not for sale.'",
                  "'You must pay first before I touch it.'",
                  "'That window is locked today.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Sotuvchi mamnuniyat bilan bu ishni bajarishini aytdi."
      },
      {
            "id": "s15-q6",
            "order": 6,
            "question": "What usually happened in the shop?",
            "modelAnswer": "Usually ladies looked at a lot of hats before they chose one, and the shopkeeper got very tired.",
            "keywords": [
                  "looked at a lot of hats",
                  "before they chose one",
                  "got very tired"
            ],
            "options": [
                  "Usually ladies looked at a lot of hats before choosing one, making the shopkeeper very tired",
                  "Customers bought hats without even looking at them",
                  "Only gentlemen came into the shop",
                  "The hats were always sold out by noon"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Odatda ayollar bitta tanlashdan oldin juda ko'p shlyapalarni ko'rib sotuvchini charchatishardi."
      },
      {
            "id": "s15-q7",
            "order": 7,
            "question": "What did the shopkeeper think?",
            "modelAnswer": "He thought, 'Good, I will sell this hat very quickly—and it has been in my window for a very long time.'",
            "keywords": [
                  "sell this hat very quickly",
                  "in my window for a very long time"
            ],
            "options": [
                  "He thought he would sell this old hat very quickly without getting tired",
                  "He thought the lady was going to rob his shop",
                  "He thought the lady was a famous fashion designer",
                  "He regretted displaying the hat in the window"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bu eski shlyapani tezda sotishini va nihoyat qutulishini o'yladi."
      },
      {
            "id": "s15-q8",
            "order": 8,
            "question": "What did he say to the lady?",
            "modelAnswer": "He asked, 'Do you want it in a box, madam, or will you wear it?'",
            "keywords": [
                  "in a box",
                  "wear it"
            ],
            "options": [
                  "'Do you want it in a box, madam, or will you wear it?'",
                  "'How much money do you have?'",
                  "'Would you like to try another hat as well?'",
                  "'Shall I deliver it to your house?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U shlyapani qutiga solib berishni yoki kiyib ketishini so'radi."
      },
      {
            "id": "s15-q9",
            "order": 9,
            "question": "What was her answer?",
            "modelAnswer": "She answered that she didn't want it, but only wanted him to remove it because she passed his shop every day and hated to see the ugly thing there.",
            "keywords": [
                  "don't want it",
                  "pass your shop every day",
                  "hate to see the ugly thing"
            ],
            "options": [
                  "She said she didn't want it; she passed every day and hated to see the ugly thing there",
                  "She said she wanted it in a golden gift box",
                  "She said she would wear it to church on Sunday",
                  "She said the hat was too expensive for her"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U shlyapani sotib olmasligini, har kuni o'tib bu xunuk narsani ko'rishdan charchaganini aytdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s15-tf1",
            "order": 1,
            "statement": "The hat had green fabric, red flowers, and blue leaves.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'a green hat with red flowers and blue leaves on it'."
      },
      {
            "id": "s15-tf2",
            "order": 2,
            "statement": "The shopkeeper had placed the hat in the window that very morning.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Shlyapa juda uzoq vaqtdan beri vitrinada turgan edi ('it has been in my window for a very long time')."
      },
      {
            "id": "s15-tf3",
            "order": 3,
            "statement": "Most female customers made up their minds immediately upon entering the shop.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ayollar odatda ko'plab shlyapalarni sinab ko'rib sotuvchini charchatishardi ('Usually ladies looked at a lot of hats before they chose one')."
      },
      {
            "id": "s15-tf4",
            "order": 4,
            "statement": "The lady was looking for a matching hat to wear to an afternoon tea party.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda ayolning qayerga borayotgani yoki nima maqsadda yurgani aytilmagan."
      },
      {
            "id": "s15-tf5",
            "order": 5,
            "statement": "The lady walked past the shopkeeper's window on a daily basis.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'I pass your shop every day'."
      },
      {
            "id": "s15-tf6",
            "order": 6,
            "statement": "The lady purchased the hat for a discounted clearance price.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U shlyapani umuman sotib olmadi ('Oh, I don't want it')."
      }
]
  },
  {
    id: 'story-16',
    storyNumber: 16,
    title: "Nasreddin and the Lost Ring",
    titleUz: "Nasriddin va Yo'qolgan Uzuk",
    cefrLevel: 'A2',
    wordCount: 153,
    readingTimeMinutes: 1,
    storyText: "Nasreddin had a shed behind his house. It had no lights in it. One night he went out to the shed to get his ladder, and lost his ring there. He left the ladder, went out into the street and began to look around.\nOne of his friends saw him in the street outside his house, and said to him, 'Hullo, Nasreddin. What are you looking for?'\n'My ring,' answered Nasreddin. 'It fell off my finger. It is a silver ring with a red stone in it.'\n'Oh, yes,' said his friend. 'I remember it. I will help you to look for it. Where did you lose it?'\n'In my shed.'\n'But why don't you look for it there?'\n'Don't be stupid! It is quite dark in my shed, so how will I find my ring there? Here there is light from the lamps in the street.'",
    paragraphs: [
      "Nasreddin had a shed behind his house. It had no lights in it. One night he went out to the shed to get his ladder, and lost his ring there. He left the ladder, went out into the street and began to look around.",
      "One of his friends saw him in the street outside his house, and said to him, 'Hullo, Nasreddin. What are you looking for?'",
      "'My ring,' answered Nasreddin. 'It fell off my finger. It is a silver ring with a red stone in it.'",
      "'Oh, yes,' said his friend. 'I remember it. I will help you to look for it. Where did you lose it?'\n'In my shed.'\n'But why don't you look for it there?'",
      "'Don't be stupid! It is quite dark in my shed, so how will I find my ring there? Here there is light from the lamps in the street.'"
],
    summaryUz: "Nasriddin orqa hovlidagi qorong'i bostirmasida narvon olayotib qizil ko'zli kumush uzugini tushirib qo'yadi. So'ng ko'chaga chiqib uzuk qidiradi. Do'sti unga yordam bermoqchi bo'lib: 'Qayerda yo'qotding?' deb so'raganida, Nasriddin: 'Bostirmamda! Lekin bostirma qorong'iku, u yerda qanday topaman? Bu yerda esa ko'cha chiroqlari yorug'!' deb javob beradi.",
    vocabulary: [
      {
            "word": "shed",
            "pos": "n.",
            "phonetic": "[ʃed]",
            "translationUz": "bostirma, omborxona",
            "definitionEn": "A small outbuilding used for storage.",
            "exampleSentence": "He kept his garden tools in a wooden shed."
      },
      {
            "word": "ladder",
            "pos": "n.",
            "phonetic": "[ˈlædə]",
            "translationUz": "narvon",
            "definitionEn": "A piece of equipment consisting of two vertical sides with rungs used for climbing.",
            "exampleSentence": "He went to get his ladder to paint the roof."
      },
      {
            "word": "ring",
            "pos": "n.",
            "phonetic": "[rɪŋ]",
            "translationUz": "uzuk",
            "definitionEn": "A circular band of precious metal worn on a finger.",
            "exampleSentence": "It was a silver ring with a sparkling red stone."
      },
      {
            "word": "fall off",
            "pos": "phr. v.",
            "phonetic": "[fɔːl ɒf]",
            "translationUz": "tushib ketmoq (barmoqdan)",
            "definitionEn": "To drop or become detached from.",
            "exampleSentence": "The ring fell off his finger in the dark."
      },
      {
            "word": "silver",
            "pos": "n. / adj.",
            "phonetic": "[ˈsɪlvə]",
            "translationUz": "kumush, kumushdan yasalgan",
            "definitionEn": "A precious shiny grayish-white metal.",
            "exampleSentence": "He wore a valuable silver ring."
      },
      {
            "word": "stupid",
            "pos": "adj.",
            "phonetic": "[ˈstjuːpɪd]",
            "translationUz": "ahmoq, nodon",
            "definitionEn": "Lacking intelligence or common sense.",
            "exampleSentence": "Don't be stupid, look where the light is!"
      }
],
    reproductionOutline: [
      "Nasreddin had an unlit storage shed behind his house.",
      "While fetching a ladder one night, his red-stoned silver ring slipped off his finger in the shed.",
      "Instead of looking inside, Nasreddin went out onto the public street to search.",
      "A passing friend offered help and asked where the ring was dropped.",
      "When Nasreddin said \"in the shed\", the astonished friend asked why he searched the street; Nasreddin retorted that the street had lamplight!"
],
    modelRetelling: "One dark night, Nasreddin went to fetch a ladder from the unlit shed behind his house and accidentally lost his silver ring with a red stone. Leaving the ladder behind, he immediately went outside and began scouring the street. A passing friend offered to assist him in the search and inquired where the ring had slipped off. When Nasreddin stated that it was lost inside the shed, the bewildered friend asked why he was searching out on the road. Nasreddin snapped back that it was pitch dark in the shed, so he was looking on the street where the streetlamps provided plenty of light!",
    questions: [
      {
            "id": "s16-q1",
            "order": 1,
            "question": "What did Nasreddin have behind his house?",
            "modelAnswer": "Nasreddin had a shed behind his house.",
            "keywords": [
                  "shed behind his house"
            ],
            "options": [
                  "A shed behind his house",
                  "A large flower garden",
                  "A swimming pool",
                  "A donkey stable"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning uyi orqasida bostirmasi bor edi: 'Nasreddin had a shed behind his house'."
      },
      {
            "id": "s16-q2",
            "order": 2,
            "question": "What was his shed like?",
            "modelAnswer": "It had no lights in it.",
            "keywords": [
                  "no lights in it"
            ],
            "options": [
                  "It had no lights in it",
                  "It was brightly lit",
                  "It had big glass windows",
                  "It was painted yellow"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bostirmada umuman chiroq yo'q edi: 'It had no lights in it'."
      },
      {
            "id": "s16-q3",
            "order": 3,
            "question": "What did he do one night?",
            "modelAnswer": "One night he went out to the shed to get his ladder.",
            "keywords": [
                  "went out to the shed",
                  "get his ladder"
            ],
            "options": [
                  "He went out to the shed to get his ladder",
                  "He slept in the shed",
                  "He repaired the roof with his friend",
                  "He locked the shed door"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kecha u narvonini olish uchun bostirmasiga bordi."
      },
      {
            "id": "s16-q4",
            "order": 4,
            "question": "Why did he do this?",
            "modelAnswer": "He did this to get his ladder.",
            "keywords": [
                  "to get his ladder"
            ],
            "options": [
                  "To get his ladder",
                  "To find his lost money",
                  "To feed his animals",
                  "To escape the heat"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U narvonini olish uchun borgan edi."
      },
      {
            "id": "s16-q5",
            "order": 5,
            "question": "What happened?",
            "modelAnswer": "He lost his ring there.",
            "keywords": [
                  "lost his ring"
            ],
            "options": [
                  "He lost his ring there",
                  "The ladder broke",
                  "He hurt his foot",
                  "A thief entered the shed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yerda uzugini tushirib yo'qotib qo'ydi."
      },
      {
            "id": "s16-q6",
            "order": 6,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "He left the ladder, went out into the street and began to look around.",
            "keywords": [
                  "left the ladder",
                  "went out into the street",
                  "began to look around"
            ],
            "options": [
                  "He left the ladder, went out into the street and began to look around",
                  "He brought a candle into the shed",
                  "He gave up and went to sleep",
                  "He shouted for his wife to help"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U narvonni qoldirib, ko'chaga chiqdi va ko'chada uzuk qidira boshladi."
      },
      {
            "id": "s16-q7",
            "order": 7,
            "question": "Who saw him in the street?",
            "modelAnswer": "One of his friends saw him in the street outside his house.",
            "keywords": [
                  "one of his friends"
            ],
            "options": [
                  "One of his friends",
                  "A police officer",
                  "His wife",
                  "The town mayor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ko'chada uning do'stlaridan biri ko'rib qoldi."
      },
      {
            "id": "s16-q8",
            "order": 8,
            "question": "What did this person say?",
            "modelAnswer": "He said, 'Hullo, Nasreddin. What are you looking for?'",
            "keywords": [
                  "What are you looking for"
            ],
            "options": [
                  "'Hullo, Nasreddin. What are you looking for?'",
                  "'Why are you shouting in the middle of the night?'",
                  "'Can you lend me your ladder?'",
                  "'Where are your donkeys?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'sti salom berib, nima qidirayotganini so'radi."
      },
      {
            "id": "s16-q9",
            "order": 9,
            "question": "What was Nasreddin's answer?",
            "modelAnswer": "Nasreddin answered, 'My ring. It fell off my finger. It is a silver ring with a red stone in it.'",
            "keywords": [
                  "silver ring with a red stone",
                  "fell off my finger"
            ],
            "options": [
                  "'My ring. It fell off my finger. It is a silver ring with a red stone in it.'",
                  "'I dropped my purse full of gold.'",
                  "'I lost the keys to my house.'",
                  "'I am searching for my eyeglasses.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U barmog'idan tushib ketgan qizil toshli kumush uzugini qidirayotganini aytdi."
      },
      {
            "id": "s16-q10",
            "order": 10,
            "question": "What did his friend say then?",
            "modelAnswer": "His friend said, 'Oh, yes. I remember it. I will help you to look for it. Where did you lose it?'",
            "keywords": [
                  "help you to look for it",
                  "Where did you lose it"
            ],
            "options": [
                  "'I remember it. I will help you to look for it. Where did you lose it?'",
                  "'You should buy a new ring tomorrow.'",
                  "'It is too dark to find anything now.'",
                  "'Why don't you ask your wife?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'sti uzukni eslashini, yordam berishini aytib, qayerda yo'qotganini so'radi."
      },
      {
            "id": "s16-q11",
            "order": 11,
            "question": "What did Nasreddin answer?",
            "modelAnswer": "Nasreddin answered, 'In my shed.'",
            "keywords": [
                  "In my shed"
            ],
            "options": [
                  "'In my shed.'",
                  "'Here in the street.'",
                  "'At the market.'",
                  "'Near the river.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Bostirmamda' deb javob berdi."
      },
      {
            "id": "s16-q12",
            "order": 12,
            "question": "What did his friend say now?",
            "modelAnswer": "His friend asked, 'But why don't you look for it there?'",
            "keywords": [
                  "why don't you look for it there"
            ],
            "options": [
                  "'But why don't you look for it there?'",
                  "'Who locked the shed?'",
                  "'Did you bring a torch?'",
                  "'Let us go to sleep.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'sti: 'Unda nega u yerda qidirmayapsan?' deb so'radi."
      },
      {
            "id": "s16-q13",
            "order": 13,
            "question": "What did Nasreddin say to him?",
            "modelAnswer": "Nasreddin said, 'Don't be stupid! It is quite dark in my shed, so how will I find my ring there? Here there is light from the lamps in the street.'",
            "keywords": [
                  "quite dark in my shed",
                  "how will I find my ring there",
                  "light from the lamps in the street"
            ],
            "options": [
                  "'Don't be stupid! It is quite dark in my shed... Here there is light from the street lamps.'",
                  "'The shed is locked and I lost the key.'",
                  "'A big dog is sleeping in the shed.'",
                  "'I was told rings always roll onto the road.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Axmoq bo'lma, bostirmada qorong'iku! Bu yerda esa ko'cha chiroqlari yorug'!' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s16-tf1",
            "order": 1,
            "statement": "Nasreddin's storage shed was equipped with modern electric lights.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Bostirmada hech qanday chiroq yo'q edi ('It had no lights in it')."
      },
      {
            "id": "s16-tf2",
            "order": 2,
            "statement": "The lost ring was made of gold and decorated with a shiny blue diamond.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uzuk qizil toshli kumush uzuk edi ('a silver ring with a red stone in it')."
      },
      {
            "id": "s16-tf3",
            "order": 3,
            "statement": "Nasreddin lost the ring while trying to retrieve his ladder from the shed.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'One night he went out to the shed to get his ladder, and lost his ring there'."
      },
      {
            "id": "s16-tf4",
            "order": 4,
            "statement": "The passing friend recognized the ring from having seen it before.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Oh, yes... I remember it'."
      },
      {
            "id": "s16-tf5",
            "order": 5,
            "statement": "Nasreddin successfully recovered the ring under a street lamp.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uzuk topilgan yoki topilmagani aytilmagan."
      },
      {
            "id": "s16-tf6",
            "order": 6,
            "statement": "Nasreddin searched the street simply because it was illuminated by streetlamps.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Nasriddin ko'cha yorug' bo'lgani uchungina u yerdan qidirgan edi."
      }
]
  }
,
  {
    id: 'story-17',
    storyNumber: 17,
    title: "Mrs Andrews and Her Clever Cat",
    titleUz: "Missis Endryus va uning aqlli mushugi",
    cefrLevel: 'A2',
    wordCount: 135,
    readingTimeMinutes: 1,
    storyText: "Mrs Andrews had a young cat, and it was the cat's first winter. One evening it was outside when it began to snow heavily. Mrs Andrews looked everywhere and shouted its name, but she did not find it, so she telephoned the police and said, 'I have lost a small black cat. Has anybody found one?'\n'No, madam,' said the policeman at the other end. 'But cats are really very strong animals. They sometimes live for days in the snow, and when it melts or somebody finds them, they are quite all right.'\nMrs Andrews felt happier when she heard this. 'And', she said, 'our cat is very clever. She almost talks.'\nThe policeman was getting rather tired. 'Well then,' he said, 'why don't you put your telephone down? Perhaps she is trying to telephone you now.'",
    paragraphs: [
      "Mrs Andrews had a young cat, and it was the cat's first winter. One evening it was outside when it began to snow heavily. Mrs Andrews looked everywhere and shouted its name, but she did not find it, so she telephoned the police and said, 'I have lost a small black cat. Has anybody found one?'",
      "'No, madam,' said the policeman at the other end. 'But cats are really very strong animals. They sometimes live for days in the snow, and when it melts or somebody finds them, they are quite all right.'",
      "Mrs Andrews felt happier when she heard this. 'And', she said, 'our cat is very clever. She almost talks.'",
      "The policeman was getting rather tired. 'Well then,' he said, 'why don't you put your telephone down? Perhaps she is trying to telephone you now.'"
],
    summaryUz: "Missis Endryus qishda qalin qor yoqqanda yo'qolib qolgan qora mushugini qidirib topolmay, politsiyaga qo'ng'iroq qiladi. Politsiyachi mushuklar qorda ham bir necha kun chidab yashay olishini aytib ovutadi. Ayol: 'Bizning mushuk juda aqlli, deyarli gapiradi ham!' deb maqtanaverganidan zerikkan politsiyachi unga: 'Unda telefonni qo'ying, ehtimol mushugingiz sizga telefon qilishga urinayotgandir!' deydi.",
    vocabulary: [
      {
            "word": "snow heavily",
            "pos": "v. phr.",
            "phonetic": "[snəʊ ˈhevɪli]",
            "translationUz": "qalin qor yog'moq",
            "definitionEn": "To fall from the sky in large dense flakes.",
            "exampleSentence": "It began to snow heavily as evening fell."
      },
      {
            "word": "look everywhere",
            "pos": "v. phr.",
            "phonetic": "[lʊk ˈevrɪweə]",
            "translationUz": "hamma yoqdan qidirmoq",
            "definitionEn": "To search in all possible directions and places.",
            "exampleSentence": "She looked everywhere in the garden for her pet."
      },
      {
            "word": "melt",
            "pos": "v.",
            "phonetic": "[melt]",
            "translationUz": "erimoq",
            "definitionEn": "To change from a solid to a liquid state by heat.",
            "exampleSentence": "When the deep snow melts, cats return home."
      },
      {
            "word": "clever",
            "pos": "adj.",
            "phonetic": "[ˈklevə]",
            "translationUz": "aqlli, ziyrak",
            "definitionEn": "Quick to understand, learn, and devise ideas.",
            "exampleSentence": "Her cat was clever and learned many tricks."
      },
      {
            "word": "put down",
            "pos": "phr. v.",
            "phonetic": "[pʊt daʊn]",
            "translationUz": "go'shakni qo'ymoq (telefonda)",
            "definitionEn": "To terminate a telephone call by replacing the receiver.",
            "exampleSentence": "Why don't you put your telephone down?"
      },
      {
            "word": "perhaps",
            "pos": "adv.",
            "phonetic": "[pəˈhæps]",
            "translationUz": "ehtimol, balki",
            "definitionEn": "Maybe; used to express uncertainty or possibility.",
            "exampleSentence": "Perhaps she is trying to telephone you right now."
      }
],
    reproductionOutline: [
      "Mrs Andrews had a young black cat facing its first winter.",
      "During heavy snowfall one evening, the cat disappeared outside.",
      "Unable to find it, she phoned the police station to ask if anyone reported a black cat.",
      "The policeman reassured her that cats are tough creatures that survive days under snow.",
      "When the woman boasted that her cat was so clever it almost spoke, the tired officer joked that she should hang up because the cat might be calling her!"
],
    modelRetelling: "During a heavy snowstorm one winter evening, Mrs Andrews's young black cat went missing outside. Unable to find her pet after shouting and searching everywhere, she called the local police station in distress. The officer calmed her down by explaining that cats are remarkably resilient creatures capable of enduring days in snow until it melts. Relieved, Mrs Andrews began exaggerating her pet's intelligence, claiming the cat was so smart it could almost talk. Growing weary of the conversation, the policeman dryly advised her to hang up the phone because her genius cat might be trying to call her!",
    questions: [
      {
            "id": "s17-q1",
            "order": 1,
            "question": "What had Mrs Andrews got?",
            "modelAnswer": "Mrs Andrews had a young cat.",
            "keywords": [
                  "young cat"
            ],
            "options": [
                  "A young cat",
                  "An old dog",
                  "A talking parrot",
                  "A white rabbit"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Missis Endryusning yosh mushugi bor edi: 'Mrs Andrews had a young cat'."
      },
      {
            "id": "s17-q2",
            "order": 2,
            "question": "Was it the cat's first, second, or third winter?",
            "modelAnswer": "It was the cat's first winter.",
            "keywords": [
                  "first winter"
            ],
            "options": [
                  "First winter",
                  "Second winter",
                  "Third winter",
                  "Fourth winter"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu mushukning ilk (birinchi) qishi edi: 'it was the cat's first winter'."
      },
      {
            "id": "s17-q3",
            "order": 3,
            "question": "What happened one evening?",
            "modelAnswer": "It began to snow heavily one evening.",
            "keywords": [
                  "began to snow heavily"
            ],
            "options": [
                  "It began to snow heavily",
                  "A thunderstorm broke out",
                  "The electricity went out",
                  "The front gate blew open"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir oqshom qalin qor yoqa boshladi: 'it began to snow heavily'."
      },
      {
            "id": "s17-q4",
            "order": 4,
            "question": "Where was the cat when this happened?",
            "modelAnswer": "The cat was outside when this happened.",
            "keywords": [
                  "outside"
            ],
            "options": [
                  "Outside",
                  "Asleep on the sofa",
                  "Under the kitchen table",
                  "In the neighbour's attic"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Mushuk tashqarida edi: 'it was outside'."
      },
      {
            "id": "s17-q5",
            "order": 5,
            "question": "What did Mrs Andrews do?",
            "modelAnswer": "She looked everywhere and shouted its name.",
            "keywords": [
                  "looked everywhere",
                  "shouted its name"
            ],
            "options": [
                  "She looked everywhere and shouted its name",
                  "She put out a bowl of milk and waited",
                  "She went straight to bed",
                  "She drove around town in her car"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U hamma yerni qidirdi va mushugining nomini aytib chaqirdi."
      },
      {
            "id": "s17-q6",
            "order": 6,
            "question": "Did she find the cat?",
            "modelAnswer": "No, she did not find it.",
            "keywords": [
                  "did not find it"
            ],
            "options": [
                  "No, she did not find it",
                  "Yes, under the car",
                  "Yes, up a tall tree",
                  "Yes, in the porch"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yo'q, u mushugini topa olmadi: 'she did not find it'."
      },
      {
            "id": "s17-q7",
            "order": 7,
            "question": "What did she do then?",
            "modelAnswer": "She telephoned the police.",
            "keywords": [
                  "telephoned the police"
            ],
            "options": [
                  "She telephoned the police",
                  "She called the fire brigade",
                  "She posted leaflets",
                  "She phoned her sister"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U politsiyaga telefon qildi: 'she telephoned the police'."
      },
      {
            "id": "s17-q8",
            "order": 8,
            "question": "What did she say?",
            "modelAnswer": "She said, 'I have lost a small black cat. Has anybody found one?'",
            "keywords": [
                  "lost a small black cat",
                  "Has anybody found one"
            ],
            "options": [
                  "'I have lost a small black cat. Has anybody found one?'",
                  "'A thief stole my precious jewellery.'",
                  "'My telephone lines are down.'",
                  "'Send an officer with a searchlight immediately.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U kichkina qora mushugini yo'qotganini va biror kim topgan-topmaganini so'radi."
      },
      {
            "id": "s17-q9",
            "order": 9,
            "question": "What was the policeman's answer?",
            "modelAnswer": "The policeman said that nobody had found one, but reassured her that cats are strong animals and can live for days in the snow.",
            "keywords": [
                  "strong animals",
                  "live for days in the snow",
                  "quite all right"
            ],
            "options": [
                  "He said cats are very strong and can live for days in the snow until it melts",
                  "He promised to send a search team into the snow",
                  "He told her that cats never survive freezing weather",
                  "He advised her to buy a new pet tomorrow"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Politsiyachi hech kim topmaganini, biroq mushuklar kuchli bo'lib, qorda bir necha kun tirik yura olishini aytdi."
      },
      {
            "id": "s17-q10",
            "order": 10,
            "question": "How did Mrs Andrews feel after that?",
            "modelAnswer": "Mrs Andrews felt happier when she heard this.",
            "keywords": [
                  "felt happier"
            ],
            "options": [
                  "She felt happier",
                  "She felt even more worried",
                  "She felt furious",
                  "She was indifferent"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Buni eshitgach u o'zini ancha xotirjam va yaxshiroq his qildi."
      },
      {
            "id": "s17-q11",
            "order": 11,
            "question": "What did she say?",
            "modelAnswer": "She said, 'And our cat is very clever. She almost talks.'",
            "keywords": [
                  "very clever",
                  "almost talks"
            ],
            "options": [
                  "'And our cat is very clever. She almost talks.'",
                  "'Can you search my garden with dogs?'",
                  "'My cat is worth a thousand pounds.'",
                  "'I will wait up all night by the door.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U mushugi juda aqlli ekanini, deyarli gapirishi ham mumkinligini aytdi."
      },
      {
            "id": "s17-q12",
            "order": 12,
            "question": "How was the policeman feeling now?",
            "modelAnswer": "The policeman was getting rather tired.",
            "keywords": [
                  "getting rather tired"
            ],
            "options": [
                  "He was getting rather tired",
                  "He was fascinated",
                  "He was laughing hysterically",
                  "He was angry"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Politsiyachi bu gaplardan zerika va charchay boshladi: 'getting rather tired'."
      },
      {
            "id": "s17-q13",
            "order": 13,
            "question": "What did he say to Mrs Andrews?",
            "modelAnswer": "He said, 'Well then, why don't you put your telephone down? Perhaps she is trying to telephone you now.'",
            "keywords": [
                  "put your telephone down",
                  "trying to telephone you now"
            ],
            "options": [
                  "'Why don't you put your telephone down? Perhaps she is trying to telephone you now.'",
                  "'I will file a formal missing cat report.'",
                  "'Please do not call emergency services again.'",
                  "'Bring a photo of the cat to the station tomorrow.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Politsiyachi unga go'shakni qo'yishni, ehtimol mushugi unga telefon qilmoqchi bo'layotganini aytdi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s17-tf1",
            "order": 1,
            "statement": "Mrs Andrews owned a young black cat that went missing.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Mrs Andrews had a young cat... small black cat'."
      },
      {
            "id": "s17-tf2",
            "order": 2,
            "statement": "The cat disappeared during the summer season.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Hodisa qishda, qalin qor yoqqanda sodir bo'lgan ('cat's first winter... began to snow heavily')."
      },
      {
            "id": "s17-tf3",
            "order": 3,
            "statement": "The police officer sent two patrol cars to search the neighbourhood.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda politsiyachining mashina yuborgani haqida ma'lumot yo'q."
      },
      {
            "id": "s17-tf4",
            "order": 4,
            "statement": "The policeman believed cats are resilient and can survive in snow for days.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'cats are really very strong animals. They sometimes live for days in the snow'."
      },
      {
            "id": "s17-tf5",
            "order": 5,
            "statement": "Mrs Andrews believed her cat was exceptionally intelligent.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'our cat is very clever. She almost talks'."
      },
      {
            "id": "s17-tf6",
            "order": 6,
            "statement": "The policeman seriously expected the cat to call the station on the telephone.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Politsiyachi suhbatdan zerikkani uchun kinoyali hazil qilgan edi ('getting rather tired... Perhaps she is trying to telephone you now')."
      }
]
  },
  {
    id: 'story-18',
    storyNumber: 18,
    title: "Nasreddin and the Six Donkeys",
    titleUz: "Nasriddin va Oltita Eshak",
    cefrLevel: 'A2',
    wordCount: 161,
    readingTimeMinutes: 1,
    storyText: "One morning Nasreddin left his house with six donkeys to go to the market. After a time, he got tired and got on to one of them. He counted the donkeys, and there were only five, so he got off and went to look for the sixth. He looked and looked but did not find it, so he went back to the donkeys and counted them again. This time there were six, so he got on to one of them again and they all started.\nAfter a few minutes he counted the donkeys again, and again there were only five! While he was counting again a friend of his passed, and Nasreddin said to him, 'I left my house with six donkeys; then I had five; then I had six again; and now I have only five! Look! One, two, three, four, five.'\n'But, Nasreddin,' said his friend, 'You are sitting on a donkey too! That is the sixth! And you are the seventh!'",
    paragraphs: [
      "One morning Nasreddin left his house with six donkeys to go to the market. After a time, he got tired and got on to one of them. He counted the donkeys, and there were only five, so he got off and went to look for the sixth. He looked and looked but did not find it, so he went back to the donkeys and counted them again. This time there were six, so he got on to one of them again and they all started.",
      "After a few minutes he counted the donkeys again, and again there were only five! While he was counting again a friend of his passed, and Nasreddin said to him, 'I left my house with six donkeys; then I had five; then I had six again; and now I have only five! Look! One, two, three, four, five.'",
      "'But, Nasreddin,' said his friend, 'You are sitting on a donkey too! That is the sixth! And you are the seventh!'"
],
    summaryUz: "Nasriddin 6 ta eshak bilan bozorga yo'l oladi. Charchab biriga mingach, sanasa 5 ta chiqadi. Tushib qidiradi, topolmay qaytib sanasa 6 ta bo'ladi. Yana eshakka minsa, yana 5 ta qoladi! Do'sti kelib qolib, sababini tushuntiradi: 'Nasriddin, axir sen o'zing ham bitta eshakning ustida o'tiribsan-ku! O'sha oltinchisi, sen esa yettinchisisan!'",
    vocabulary: [
      {
            "word": "donkey",
            "pos": "n.",
            "phonetic": "[ˈdɒŋki]",
            "translationUz": "eshak",
            "definitionEn": "A domesticated hoofed mammal related to horses with long ears.",
            "exampleSentence": "He rode to town on his trusty grey donkey."
      },
      {
            "word": "market",
            "pos": "n.",
            "phonetic": "[ˈmɑːkɪt]",
            "translationUz": "bozor",
            "definitionEn": "A regular gathering of people for the purchase and sale of provisions.",
            "exampleSentence": "He went to the bustling livestock market."
      },
      {
            "word": "get on to",
            "pos": "phr. v.",
            "phonetic": "[ɡet ɒn tuː]",
            "translationUz": "ustiga minmoq",
            "definitionEn": "To mount or climb onto an animal or vehicle.",
            "exampleSentence": "He got tired and got on to one of the donkeys."
      },
      {
            "word": "get off",
            "pos": "phr. v.",
            "phonetic": "[ɡet ɒf]",
            "translationUz": "tushmoq",
            "definitionEn": "To dismount or step down from an animal or vehicle.",
            "exampleSentence": "He got off the donkey to look for the missing one."
      },
      {
            "word": "count",
            "pos": "v.",
            "phonetic": "[kaʊnt]",
            "translationUz": "sanamoq, hisoblamoq",
            "definitionEn": "To determine the total number of items in a set.",
            "exampleSentence": "He counted them carefully: one, two, three, four, five."
      },
      {
            "word": "pass",
            "pos": "v.",
            "phonetic": "[pɑːs]",
            "translationUz": "o'tib qolmoq, yonidan o'tmoq",
            "definitionEn": "To move past or travel by someone.",
            "exampleSentence": "A friend passed by while he was counting."
      }
],
    reproductionOutline: [
      "Nasreddin left home with six donkeys bound for the market.",
      "Tired of walking, he mounted one donkey and counted only five remaining ahead.",
      "He dismounted, searched around, found nothing, and recounted: all six were present.",
      "Mounted again, he counted only five once more in total bewilderment.",
      "A passerby pointed out the obvious blunder: the donkey he was riding was the sixth, and Nasreddin was the seventh!"
],
    modelRetelling: "Heading to the market with six donkeys one morning, Nasreddin grew weary and climbed onto one of them. Looking ahead, he counted the donkeys and was alarmed to count only five. He hopped off and searched everywhere for the missing sixth donkey. Finding nothing, he recounted from the ground and discovered all six were there! Satisfied, he remounted, only to count five again. A passing acquaintance saw his confusion as Nasreddin demonstrated his bizarre tally. The friend laughed and pointed out that Nasreddin had forgotten the donkey beneath him—making it the sixth, while cheekily crowning Nasreddin the seventh donkey!",
    questions: [
      {
            "id": "s18-q1",
            "order": 1,
            "question": "What did Nasreddin do one morning?",
            "modelAnswer": "One morning Nasreddin left his house with six donkeys to go to the market.",
            "keywords": [
                  "left his house with six donkeys",
                  "go to the market"
            ],
            "options": [
                  "He left his house with six donkeys to go to the market",
                  "He bought six horses at an auction",
                  "He lost his way in the desert",
                  "He traded his donkeys for a camel"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U oltita eshagi bilan bozorga yo'l oldi."
      },
      {
            "id": "s18-q2",
            "order": 2,
            "question": "How many donkeys did he have with him?",
            "modelAnswer": "He had six donkeys with him.",
            "keywords": [
                  "six donkeys"
            ],
            "options": [
                  "Six donkeys",
                  "Five donkeys",
                  "Seven donkeys",
                  "Ten donkeys"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning yonida 6 ta eshak bor edi: 'six donkeys'."
      },
      {
            "id": "s18-q3",
            "order": 3,
            "question": "What happened after a time?",
            "modelAnswer": "After a time, he got tired.",
            "keywords": [
                  "got tired"
            ],
            "options": [
                  "He got tired",
                  "A rainstorm started",
                  "One donkey ran away",
                  "He met a bandit"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Biroz vaqt o'tgach u charchab qoldi: 'he got tired'."
      },
      {
            "id": "s18-q4",
            "order": 4,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "He got on to one of them.",
            "keywords": [
                  "got on to one of them"
            ],
            "options": [
                  "He got on to one of them",
                  "He sat under a tree to rest",
                  "He tied them to a fence",
                  "He ate his lunch"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshaklardan birining ustiga mindi: 'got on to one of them'."
      },
      {
            "id": "s18-q5",
            "order": 5,
            "question": "How many donkeys did he count?",
            "modelAnswer": "He counted only five donkeys.",
            "keywords": [
                  "only five"
            ],
            "options": [
                  "Only five",
                  "Six",
                  "Seven",
                  "Four"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U sanaganida bor-yo'g'i 5 ta eshak chiqdi: 'there were only five'."
      },
      {
            "id": "s18-q6",
            "order": 6,
            "question": "What did he do then?",
            "modelAnswer": "He got off and went to look for the sixth donkey.",
            "keywords": [
                  "got off",
                  "look for the sixth"
            ],
            "options": [
                  "He got off and went to look for the sixth",
                  "He sold the five donkeys to a farmer",
                  "He started crying on the road",
                  "He rode quickly to the police station"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshakdan tushib, oltinchisini qidirishga ketdi."
      },
      {
            "id": "s18-q7",
            "order": 7,
            "question": "Did he find the donkey?",
            "modelAnswer": "No, he looked and looked but did not find it.",
            "keywords": [
                  "did not find it"
            ],
            "options": [
                  "No, he did not find it",
                  "Yes, hiding in the bushes",
                  "Yes, eating grass by the river",
                  "Yes, at the neighbour's barn"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yo'q, u qancha qidirmasin topa olmadi: 'did not find it'."
      },
      {
            "id": "s18-q8",
            "order": 8,
            "question": "What did he do then?",
            "modelAnswer": "He went back to the donkeys and counted them again.",
            "keywords": [
                  "went back",
                  "counted them again"
            ],
            "options": [
                  "He went back to the donkeys and counted them again",
                  "He continued walking on foot alone",
                  "He sat down and went to sleep",
                  "He phoned his friend"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshaklar yoniga qaytib, ularni qaytadan sanadi."
      },
      {
            "id": "s18-q9",
            "order": 9,
            "question": "How many donkeys were there this time?",
            "modelAnswer": "This time there were six donkeys.",
            "keywords": [
                  "six"
            ],
            "options": [
                  "Six donkeys",
                  "Five donkeys",
                  "Four donkeys",
                  "Seven donkeys"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu safar eshaklar yana 6 ta chiqdi: 'This time there were six'."
      },
      {
            "id": "s18-q10",
            "order": 10,
            "question": "What happened then?",
            "modelAnswer": "He got on to one of them again and they all started.",
            "keywords": [
                  "got on to one of them again",
                  "all started"
            ],
            "options": [
                  "He got on to one of them again and they all started",
                  "The donkeys refused to move",
                  "He tied them together with ropes",
                  "He decided to return home"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yana bitta eshakka mindi va hammalari yo'lga tushdilar."
      },
      {
            "id": "s18-q11",
            "order": 11,
            "question": "What did Nasreddin do after a few minutes?",
            "modelAnswer": "After a few minutes he counted the donkeys again.",
            "keywords": [
                  "counted the donkeys again"
            ],
            "options": [
                  "He counted the donkeys again",
                  "He fed the donkeys some hay",
                  "He stopped to drink water",
                  "He sang a song"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir necha daqiqadan so'ng u eshaklarni yana sanadi."
      },
      {
            "id": "s18-q12",
            "order": 12,
            "question": "How many donkeys did he count this time?",
            "modelAnswer": "Again there were only five!",
            "keywords": [
                  "only five"
            ],
            "options": [
                  "Only five",
                  "Six",
                  "Seven",
                  "Eight"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yana bor-yo'g'i 5 ta eshak chiqdi!"
      },
      {
            "id": "s18-q13",
            "order": 13,
            "question": "Who passed just then?",
            "modelAnswer": "A friend of his passed.",
            "keywords": [
                  "friend of his passed"
            ],
            "options": [
                  "A friend of his",
                  "A police officer",
                  "A caravan of merchants",
                  "His wife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Shu payt uning do'stlaridan biri o'tib qoldi."
      },
      {
            "id": "s18-q14",
            "order": 14,
            "question": "What did Nasreddin say to him?",
            "modelAnswer": "Nasreddin said that he had left with six donkeys, then had five, then six, and now only five, and counted one to five for him.",
            "keywords": [
                  "left my house with six",
                  "now I have only five"
            ],
            "options": [
                  "He explained the magical count and counted 'one, two, three, four, five' for him",
                  "He asked him to buy the fifth donkey",
                  "He accused him of stealing his donkey",
                  "He asked him for directions to the market"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin uyidan 6 ta eshak bilan chiqqanini, endi esa 5 ta qolganini aytib, birma-bir sanab ko'rsatdi."
      },
      {
            "id": "s18-q15",
            "order": 15,
            "question": "What did his friend answer?",
            "modelAnswer": "His friend said, 'You are sitting on a donkey too! That is the sixth! And you are the seventh!'",
            "keywords": [
                  "sitting on a donkey",
                  "That is the sixth",
                  "you are the seventh"
            ],
            "options": [
                  "'You are sitting on a donkey too! That is the sixth! And you are the seventh!'",
                  "'You should go home and rest, you are seeing things.'",
                  "'A wolf must have eaten the sixth donkey.'",
                  "'I will sell you one of mine so you have six again.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'sti: 'Sen o'zing ham bitta eshakning ustida o'tiribsan, o'sha oltinchisi! Sen esa yettinchisisan!' deb javob berdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s18-tf1",
            "order": 1,
            "statement": "Nasreddin originally departed for the market with six donkeys.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Nasreddin left his house with six donkeys to go to the market'."
      },
      {
            "id": "s18-tf2",
            "order": 2,
            "statement": "Nasreddin became tired after walking and mounted one of the animals.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'he got tired and got on to one of them'."
      },
      {
            "id": "s18-tf3",
            "order": 3,
            "statement": "Whenever Nasreddin counted from the saddle, he forgot to include the donkey he was riding.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U faqat oldindagi eshaklarni sanab, ostidagi eshakni hisobga qo'shmasdi."
      },
      {
            "id": "s18-tf4",
            "order": 4,
            "statement": "A robber hid behind a rock and repeatedly stole a donkey.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Hech kim o'g'irlamagan, barcha 6 ta eshak joyida edi."
      },
      {
            "id": "s18-tf5",
            "order": 5,
            "statement": "Nasreddin's friend offered to buy all the donkeys on the spot.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda do'stining eshaklarni sotib olish niyati haqida hech narsa deyilmagan."
      },
      {
            "id": "s18-tf6",
            "order": 6,
            "statement": "Nasreddin's friend jokingly teased him by calling him the seventh donkey.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'That is the sixth! And you are the seventh!'."
      }
]
  },
  {
    id: 'story-19',
    storyNumber: 19,
    title: "Nasreddin and the Rich Man",
    titleUz: "Nasriddin va Boy Odam",
    cefrLevel: 'A2',
    wordCount: 153,
    readingTimeMinutes: 1,
    storyText: "One of Nasreddin's friends loved money very much, and never gave anything to anybody. Soon he became rich.\nOne day, he was walking near the river with his friends when he slipped and fell in. His friends ran to help him and one of them knelt on the ground, held out his hand and said, 'Give me your hand, and I will pull you out!' The rich man's head went under the water and then came up again, but he did not give his friend his hand. Again another of his friends tried, but again the same thing happened.\nThen Nasreddin said, 'Take my hand and I will pull you out!' The rich man took his hand, and Nasreddin pulled him out of the water.\n'You don't know our friend very well,' he said to the others. 'When you say \"Give\" to him, he does nothing; but when you say \"Take\", he takes!'",
    paragraphs: [
      "One of Nasreddin's friends loved money very much, and never gave anything to anybody. Soon he became rich.",
      "One day, he was walking near the river with his friends when he slipped and fell in. His friends ran to help him and one of them knelt on the ground, held out his hand and said, 'Give me your hand, and I will pull you out!' The rich man's head went under the water and then came up again, but he did not give his friend his hand. Again another of his friends tried, but again the same thing happened.",
      "Then Nasreddin said, 'Take my hand and I will pull you out!' The rich man took his hand, and Nasreddin pulled him out of the water.",
      "'You don't know our friend very well,' he said to the others. 'When you say \"Give\" to him, he does nothing; but when you say \"Take\", he takes!'"
],
    summaryUz: "Nasriddinning hech kimga hech narsa bermaydigan o'ta xasis boy do'sti daryoga yiqilib tushadi. Do'stlari: 'Qo'lingni ber (Give), tortib olaman!' deyishsa ham suvga cho'kib, qo'lini bermaydi. Shunda Nasriddin: 'Qo'limni ol (Take)!' deydi va boy darhol uning qo'lidan tutadi. Nasriddin boshqalarga: 'Sizlar uni bilmaysizlar, unga \"Ber\" desang hech narsa qilmaydi, lekin \"Ol\" desang, darhol oladi!' deydi.",
    vocabulary: [
      {
            "word": "rich",
            "pos": "adj.",
            "phonetic": "[rɪtʃ]",
            "translationUz": "boy, badavlat",
            "definitionEn": "Having a great deal of money or assets; wealthy.",
            "exampleSentence": "He saved every penny and soon became very rich."
      },
      {
            "word": "slip",
            "pos": "v.",
            "phonetic": "[slɪp]",
            "translationUz": "sirg'anib ketmoq",
            "definitionEn": "To slide accidentally causing one to lose one's footing.",
            "exampleSentence": "He slipped on the wet riverbank and fell into the water."
      },
      {
            "word": "kneel",
            "pos": "v.",
            "phonetic": "[niːl]",
            "translationUz": "tiz cho'kmoq",
            "definitionEn": "To fall or rest on one's knees.",
            "exampleSentence": "His friend knelt on the grass to reach into the river."
      },
      {
            "word": "hold out",
            "pos": "phr. v.",
            "phonetic": "[həʊld aʊt]",
            "translationUz": "cho'zmoq (qo'lni)",
            "definitionEn": "To extend one's hand or arm towards someone.",
            "exampleSentence": "He held out his hand to pull the drowning man out."
      },
      {
            "word": "pull out",
            "pos": "phr. v.",
            "phonetic": "[pʊl aʊt]",
            "translationUz": "tortib olmoq, chiqarib olmoq",
            "definitionEn": "To drag or extract someone or something from an enclosed area or water.",
            "exampleSentence": "Nasreddin grabbed him firmly and pulled him out."
      },
      {
            "word": "drown / sink",
            "pos": "v.",
            "phonetic": "[draʊn] / [sɪŋk]",
            "translationUz": "suv ostiga cho'kmoq",
            "definitionEn": "To go beneath the surface of the water.",
            "exampleSentence": "The man went under the water twice."
      }
],
    reproductionOutline: [
      "A notoriously greedy friend of Nasreddin loved money and never gave anything away.",
      "While strolling along a river with companions, the wealthy miser slipped into deep water.",
      "Friends knelt down shouting \"Give me your hand\", but the miser stubbornly refused to \"give\" anything.",
      "Understanding the man's stingy psyche, Nasreddin shouted \"Take my hand!\" instead.",
      "The miser grabbed it immediately, prompting Nasreddin's witty explanation: he refuses to \"give\", but eagerly \"takes\"!"
],
    modelRetelling: "Nasreddin had a notoriously greedy acquaintance who grew immensely wealthy by never parting with a single penny. One afternoon, while walking alongside a river, the wealthy miser lost his balance and fell into the rushing water. Rushing to the rescue, one friend knelt on the bank, reached out and shouted: 'Give me your hand!' But true to his selfish instincts, the man submerged and resurfaced without extending his hand. Another friend tried the exact same plea with no luck. Finally, Nasreddin stepped forward and shouted: 'Take my hand!' Instantly, the man grasped Nasreddin's arm and was pulled to safety. Nasreddin turned to the others and chuckled: 'When you say \"Give\", he freezes; but when you say \"Take\", he never misses a chance!'",
    questions: [
      {
            "id": "s19-q1",
            "order": 1,
            "question": "What was Nasreddin's friend like?",
            "modelAnswer": "He loved money very much, and never gave anything to anybody.",
            "keywords": [
                  "loved money very much",
                  "never gave anything to anybody"
            ],
            "options": [
                  "He loved money very much, and never gave anything to anybody",
                  "He was a generous merchant who helped orphans",
                  "He was an experienced swimmer and sailor",
                  "He was an elderly doctor in town"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U pulni juda sevar va hech kimga hech narsa bermasdi."
      },
      {
            "id": "s19-q2",
            "order": 2,
            "question": "What happened to him soon?",
            "modelAnswer": "Soon he became rich.",
            "keywords": [
                  "became rich"
            ],
            "options": [
                  "Soon he became rich",
                  "He lost all his savings",
                  "He moved to another city",
                  "He bought a ship"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Tez orada u boyib ketdi: 'Soon he became rich'."
      },
      {
            "id": "s19-q3",
            "order": 3,
            "question": "What happened one day?",
            "modelAnswer": "One day he slipped and fell into the river.",
            "keywords": [
                  "slipped",
                  "fell in"
            ],
            "options": [
                  "He slipped and fell into the river",
                  "A thief stole his gold coins",
                  "He won a lottery",
                  "He fell from a horse"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni u sirpanib daryoga tushib ketdi."
      },
      {
            "id": "s19-q4",
            "order": 4,
            "question": "What was Nasreddin's friend doing when this happened?",
            "modelAnswer": "He was walking near the river with his friends.",
            "keywords": [
                  "walking near the river with his friends"
            ],
            "options": [
                  "He was walking near the river with his friends",
                  "He was washing his clothes in the water",
                  "He was fishing with a rod",
                  "He was crossing a wooden bridge"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U do'stlari bilan daryo yoqasida sayr qilib yurgan edi."
      },
      {
            "id": "s19-q5",
            "order": 5,
            "question": "What did the rich man's friends do?",
            "modelAnswer": "His friends ran to help him.",
            "keywords": [
                  "ran to help him"
            ],
            "options": [
                  "His friends ran to help him",
                  "They laughed and walked away",
                  "They ran into town to call the police",
                  "They jumped into the water with all their clothes on"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'stlari unga yordam berish uchun yugurib kelishdi."
      },
      {
            "id": "s19-q6",
            "order": 6,
            "question": "What did one of them do?",
            "modelAnswer": "One of them knelt on the ground and held out his hand.",
            "keywords": [
                  "knelt on the ground",
                  "held out his hand"
            ],
            "options": [
                  "One of them knelt on the ground and held out his hand",
                  "He threw a long rope into the current",
                  "He took off his coat to swim",
                  "He threw a heavy stone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ulardan biri yerga tiz cho'kib, qo'lini cho'zdi."
      },
      {
            "id": "s19-q7",
            "order": 7,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Give me your hand, and I will pull you out!'",
            "keywords": [
                  "Give me your hand",
                  "pull you out"
            ],
            "options": [
                  "'Give me your hand, and I will pull you out!'",
                  "'Swim to the other side!'",
                  "'How much will you pay if I save you?'",
                  "'Hold your breath and float!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Qo'lingni ber, seni tortib olaman!' dedi."
      },
      {
            "id": "s19-q8",
            "order": 8,
            "question": "What happened then?",
            "modelAnswer": "The rich man's head went under the water and came up again, but he did not give his friend his hand.",
            "keywords": [
                  "went under the water",
                  "did not give his friend his hand"
            ],
            "options": [
                  "The rich man went under and came up, but refused to give his hand",
                  "He grabbed his friend and pulled him into the river too",
                  "He floated safely to the riverbank",
                  "He shouted for a doctor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Boy suvga botib yana chiqdi, ammo do'stiga qo'lini bermadi ('berish'ni yoqtirmagani uchun)."
      },
      {
            "id": "s19-q9",
            "order": 9,
            "question": "What did another friend do?",
            "modelAnswer": "Another of his friends tried the same thing.",
            "keywords": [
                  "another of his friends tried"
            ],
            "options": [
                  "Another of his friends tried the same thing",
                  "He went to find a long wooden branch",
                  "He jumped in to carry him out",
                  "He started praying aloud"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Boshqa bir do'sti ham xuddi shunday qilib ko'rdi."
      },
      {
            "id": "s19-q10",
            "order": 10,
            "question": "What happened?",
            "modelAnswer": "Again the same thing happened.",
            "keywords": [
                  "same thing happened"
            ],
            "options": [
                  "Again the same thing happened",
                  "The rich man drowned completely",
                  "The second friend fell into the river",
                  "The river dried up suddenly"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yana o'sha holat takrorlandi: boy qo'lini bermadi."
      },
      {
            "id": "s19-q11",
            "order": 11,
            "question": "What did Nasreddin say then?",
            "modelAnswer": "Nasreddin said, 'Take my hand and I will pull you out!'",
            "keywords": [
                  "Take my hand",
                  "pull you out"
            ],
            "options": [
                  "'Take my hand and I will pull you out!'",
                  "'Give me five gold coins first!'",
                  "'Let us leave him to his fate.'",
                  "'Try to stand on the river bottom.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin unga: 'Qo'limni ol (ushla), seni tortib olaman!' dedi."
      },
      {
            "id": "s19-q12",
            "order": 12,
            "question": "What did the rich man do?",
            "modelAnswer": "The rich man took his hand.",
            "keywords": [
                  "took his hand"
            ],
            "options": [
                  "The rich man took his hand",
                  "He pushed Nasreddin away",
                  "He swam away",
                  "He refused to touch him"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Boy darhol uning qo'lini ushladi: 'The rich man took his hand'."
      },
      {
            "id": "s19-q13",
            "order": 13,
            "question": "What did Nasreddin do?",
            "modelAnswer": "Nasreddin pulled him out of the water.",
            "keywords": [
                  "pulled him out of the water"
            ],
            "options": [
                  "Nasreddin pulled him out of the water",
                  "Nasreddin jumped into the river too",
                  "Nasreddin asked for a bag of money",
                  "Nasreddin called an ambulance"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin uni suvdan tortib quruqlikka chiqardi."
      },
      {
            "id": "s19-q14",
            "order": 14,
            "question": "What did he say?",
            "modelAnswer": "He said, 'You don't know our friend very well. When you say \"Give\" to him, he does nothing; but when you say \"Take\", he takes!'",
            "keywords": [
                  "don't know our friend",
                  "When you say Give",
                  "when you say Take"
            ],
            "options": [
                  "'When you say \"Give\" to him, he does nothing; but when you say \"Take\", he takes!'",
                  "'He owes me fifty gold coins for saving his life.'",
                  "'Next time he should learn how to swim before walking near rivers.'",
                  "'We must take him to the doctor immediately.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Unga \"Ber\" desang hech narsa qilmaydi, lekin \"Ol\" desang, darhol oladi!' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s19-tf1",
            "order": 1,
            "statement": "Nasreddin's friend accumulated wealth because he was exceptionally stingy.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'loved money very much, and never gave anything to anybody. Soon he became rich'."
      },
      {
            "id": "s19-tf2",
            "order": 2,
            "statement": "The rich man fell into the river while attempting to rescue a drowning child.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U shunchaki daryo yoqasida yurganida oyog'i toyib yiqilib tushgan edi ('he slipped and fell in')."
      },
      {
            "id": "s19-tf3",
            "order": 3,
            "statement": "The rich man could swim like a fish and enjoyed being in the river.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U cho'kayotgan va boshi suv ostiga kirib-chiqib turgan edi."
      },
      {
            "id": "s19-tf4",
            "order": 4,
            "statement": "The miser ignored offers of help whenever people used the word \"Give\".",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'When you say \"Give\" to him, he does nothing'."
      },
      {
            "id": "s19-tf5",
            "order": 5,
            "statement": "Nasreddin dove into the deep river to haul the man out.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U suvga sakramadi, balki qirg'oqdan qo'lini tutqazib tortib oldi ('Take my hand... pulled him out')."
      },
      {
            "id": "s19-tf6",
            "order": 6,
            "statement": "The rich man gave Nasreddin a bag of gold coins to thank him.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda boyning qutqargani uchun mukofot bergani haqida hech narsa deyilmagan."
      }
]
  },
  {
    id: 'story-20',
    storyNumber: 20,
    title: "Nasreddin and the Clever Thieves",
    titleUz: "Nasriddin va Ayyor O'g'rilar",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "One day Nasreddin bought a donkey in the market; but while he was taking it home, two thieves followed him. One of them took the rope from the donkey's neck and tied it round his friend's neck. Then he went away with the donkey.\nWhen Nasreddin got home, he turned and saw the young man. He was very surprised. 'Where is my donkey?' he said angrily.\n'I am very sorry,' said the thief, 'but once I said some very bad things to my mother, and she changed me into a donkey. But because a good man bought me, I am now a man again! Thank you!'\nNasreddin untied the man and said, 'Go! And never say bad things to your mother again!'\nThe next day, Nasreddin saw the same donkey in the market again! The other thief was selling it.\nNasreddin went to it and said into its ear, 'Young man, some people will never learn!'",
    paragraphs: [
      "One day Nasreddin bought a donkey in the market; but while he was taking it home, two thieves followed him. One of them took the rope from the donkey's neck and tied it round his friend's neck. Then he went away with the donkey.",
      "When Nasreddin got home, he turned and saw the young man. He was very surprised. 'Where is my donkey?' he said angrily.",
      "'I am very sorry,' said the thief, 'but once I said some very bad things to my mother, and she changed me into a donkey. But because a good man bought me, I am now a man again! Thank you!'",
      "Nasreddin untied the man and said, 'Go! And never say bad things to your mother again!'",
      "The next day, Nasreddin saw the same donkey in the market again! The other thief was selling it.",
      "Nasreddin went to it and said into its ear, 'Young man, some people will never learn!'"
],
    summaryUz: "Nasriddin bozordan eshak sotib olib ketayotganda, ikki o'g'ri eshakning bo'ynidagi arqonni yechib, sherigining bo'yniga bog'lashadi. Uyga borgach Nasriddin yigitni ko'rib qoladi. O'g'ri: 'Onamni xafa qilganim uchun eshakka aylanib qolgandim, sizday yaxshi odam sotib olgani uchun yana odam bo'ldim!' deb aldaydi. Nasriddin unga rahm qilib bo'shatib yuboradi. Ertasi kuni o'sha eshakni bozorda yana ko'rib, qulog'iga: 'Ey yigit, ba'zi odamlar hech qachon o'rganmas ekanda (yana onangni xafa qilib eshak bo'lib qolibsan)!' deb pichirlaydi.",
    vocabulary: [
      {
            "word": "thief (thieves)",
            "pos": "n.",
            "phonetic": "[θiːf] ([θiːvz])",
            "translationUz": "o'g'ri (o'g'rilar)",
            "definitionEn": "A person who steals another person's property.",
            "exampleSentence": "Two clever thieves followed Nasreddin from the market."
      },
      {
            "word": "rope",
            "pos": "n.",
            "phonetic": "[rəʊp]",
            "translationUz": "arqon, ip",
            "definitionEn": "A length of thick strong cord.",
            "exampleSentence": "He slipped the rope off the donkey's neck."
      },
      {
            "word": "tie round",
            "pos": "phr. v.",
            "phonetic": "[taɪ raʊnd]",
            "translationUz": "atrofiga bog'lamoq",
            "definitionEn": "To attach or fasten securely around something.",
            "exampleSentence": "He tied the rope around his companion's neck."
      },
      {
            "word": "change into",
            "pos": "phr. v.",
            "phonetic": "[tʃeɪndʒ ˈɪntuː]",
            "translationUz": "aylanmoq, o'zgarmoq",
            "definitionEn": "To transform into another form.",
            "exampleSentence": "My mother cursed me and changed me into a donkey!"
      },
      {
            "word": "untie",
            "pos": "v.",
            "phonetic": "[ʌnˈtaɪ]",
            "translationUz": "yechmoq (tugun yoki arqonni)",
            "definitionEn": "To undo or loosen a knot or binding.",
            "exampleSentence": "Nasreddin felt pity and untied the young man."
      },
      {
            "word": "whisper / say into ear",
            "pos": "v. phr.",
            "phonetic": "[seɪ ˈɪntuː ɪə]",
            "translationUz": "qulog'iga aytmoq / shivirlamoq",
            "definitionEn": "To speak softly directly into someone's ear.",
            "exampleSentence": "He walked up to the animal and whispered into its ear."
      }
],
    reproductionOutline: [
      "Nasreddin bought a donkey at the market and began leading it home.",
      "Two thieves followed: one made off with the donkey while the other tied the halter round his own neck.",
      "Upon reaching home, Nasreddin was shocked to find a human being instead of his donkey.",
      "The thief fabricated an excuse: his mother had magically cursed him into a donkey until a kind man bought him.",
      "Nasreddin freed him, but seeing the same donkey for sale next day, whispered into its ear: \"Some people never learn!\""
],
    modelRetelling: "After purchasing a donkey at the market, Nasreddin led it homeward, unaware that two clever thieves were tailing him. One thief slipped the halter off the beast and fastened it around his partner's neck before walking away with the prize. Reaching his house, Nasreddin turned around and was stunned to find a young man in place of the donkey. The cunning trickster apologized, concocting a tall tale about how his furious mother had magically transformed him into a beast of burden until a righteous man purchased him. Believing the tale, Nasreddin released him with a stern warning. The very next day, noticing the exact same donkey being auctioned at the market by the other thief, Nasreddin leaned toward its ear and sighed: 'Young man, some people truly never learn!'",
    questions: [
      {
            "id": "s20-q1",
            "order": 1,
            "question": "What did Nasreddin do one day?",
            "modelAnswer": "One day Nasreddin bought a donkey in the market.",
            "keywords": [
                  "bought a donkey in the market"
            ],
            "options": [
                  "He bought a donkey in the market",
                  "He sold his house in the village",
                  "He caught two thieves in his shed",
                  "He lost his wallet in town"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni Nasriddin bozordan eshak sotib oldi."
      },
      {
            "id": "s20-q2",
            "order": 2,
            "question": "Who followed him?",
            "modelAnswer": "Two thieves followed him.",
            "keywords": [
                  "two thieves followed him"
            ],
            "options": [
                  "Two thieves",
                  "A police officer",
                  "His wife and son",
                  "A pack of wild dogs"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning orqasidan ikki o'g'ri ergashdi: 'two thieves followed him'."
      },
      {
            "id": "s20-q3",
            "order": 3,
            "question": "When did they do this?",
            "modelAnswer": "While he was taking the donkey home.",
            "keywords": [
                  "taking it home"
            ],
            "options": [
                  "While he was taking the donkey home",
                  "Early in the morning before sunrise",
                  "After he fell asleep at home",
                  "At the market auction"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshakni uyiga olib ketayotgan vaqtda: 'while he was taking it home'."
      },
      {
            "id": "s20-q4",
            "order": 4,
            "question": "What did one of the men do?",
            "modelAnswer": "One of them took the rope from the donkey's neck and tied it round his friend's neck.",
            "keywords": [
                  "took the rope",
                  "tied it round his friend's neck"
            ],
            "options": [
                  "He took the rope from the donkey and tied it round his friend's neck",
                  "He attacked Nasreddin from behind",
                  "He offered to carry Nasreddin's bags",
                  "He cut the rope and ran away alone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "O'g'rilardan biri arqonni eshakdan yechib, sherigining bo'yniga bog'ladi."
      },
      {
            "id": "s20-q5",
            "order": 5,
            "question": "What did he do then?",
            "modelAnswer": "Then he went away with the donkey.",
            "keywords": [
                  "went away with the donkey"
            ],
            "options": [
                  "He went away with the donkey",
                  "He hid in the bushes",
                  "He followed Nasreddin into the kitchen",
                  "He sold the rope to a passing farmer"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "So'ng u eshakni yetaklab ketib qoldi: 'went away with the donkey'."
      },
      {
            "id": "s20-q6",
            "order": 6,
            "question": "What did Nasreddin do when he got home?",
            "modelAnswer": "When he got home, he turned and saw the young man.",
            "keywords": [
                  "turned and saw the young man"
            ],
            "options": [
                  "He turned around and saw the young man",
                  "He immediately tied the rope to a tree",
                  "He offered hay to the donkey",
                  "He went inside to call his wife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uyga yetgach, orqasiga o'girilib yosh yigitni ko'rdi."
      },
      {
            "id": "s20-q7",
            "order": 7,
            "question": "How did he feel?",
            "modelAnswer": "He was very surprised and angry.",
            "keywords": [
                  "very surprised",
                  "angrily"
            ],
            "options": [
                  "He was very surprised and angry",
                  "He was delighted and laughed",
                  "He was terrified and ran inside",
                  "He was bored and tired"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U juda hayron qoldi va jahli chiqdi: 'very surprised... angrily'."
      },
      {
            "id": "s20-q8",
            "order": 8,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Where is my donkey?'",
            "keywords": [
                  "Where is my donkey"
            ],
            "options": [
                  "'Where is my donkey?'",
                  "'Who are you and why are you following me?'",
                  "'Did you bring the feed for my animal?'",
                  "'Call the village guard immediately!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Eshagim qani?' deb so'radi."
      },
      {
            "id": "s20-q9",
            "order": 9,
            "question": "How did he say this?",
            "modelAnswer": "He said this angrily.",
            "keywords": [
                  "angrily"
            ],
            "options": [
                  "Angrily",
                  "Happily",
                  "Whispering quietly",
                  "In tears"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni jahli chiqqan holda aytdi: 'angrily'."
      },
      {
            "id": "s20-q10",
            "order": 10,
            "question": "What did the thief answer?",
            "modelAnswer": "The thief said that once he said bad things to his mother and she changed him into a donkey, but because a good man bought him, he became a man again.",
            "keywords": [
                  "changed me into a donkey",
                  "good man bought me",
                  "man again"
            ],
            "options": [
                  "He claimed his mother cursed him into a donkey, and Nasreddin's purchase turned him human again",
                  "He admitted he had stolen the donkey and begged for mercy",
                  "He claimed the donkey ran away near the village well",
                  "He offered to buy the rope for five copper coins"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "O'g'ri onasini xafa qilgani uchun eshakka aylanganini, yaxshi odam sotib olgani tufayli yana odam bo'lganini aytdi."
      },
      {
            "id": "s20-q11",
            "order": 11,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "Nasreddin untied the man.",
            "keywords": [
                  "untied the man"
            ],
            "options": [
                  "Nasreddin untied the man",
                  "Nasreddin took him to court",
                  "Nasreddin made him plow the field",
                  "Nasreddin locked him in the shed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin yigitning bo'ynidagi arqonni yechib yubordi."
      },
      {
            "id": "s20-q12",
            "order": 12,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Go! And never say bad things to your mother again!'",
            "keywords": [
                  "Go",
                  "never say bad things to your mother again"
            ],
            "options": [
                  "'Go! And never say bad things to your mother again!'",
                  "'Pay me back the price of my donkey!'",
                  "'Stay here and work as my servant.'",
                  "'Take this bread for your journey.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Bor, boshqa hech qachon onangga yomon gap aytma!' dedi."
      },
      {
            "id": "s20-q13",
            "order": 13,
            "question": "What happened the next day?",
            "modelAnswer": "The next day, Nasreddin saw the same donkey in the market again.",
            "keywords": [
                  "saw the same donkey in the market again"
            ],
            "options": [
                  "He saw the same donkey in the market again",
                  "The young man returned with a bag of gold",
                  "The police arrested the two thieves",
                  "Nasreddin bought a horse instead"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ertasi kuni Nasriddin xuddi o'sha eshakni bozorda yana ko'rdi."
      },
      {
            "id": "s20-q14",
            "order": 14,
            "question": "Why was the donkey in the market?",
            "modelAnswer": "Because the other thief was selling it.",
            "keywords": [
                  "other thief was selling it"
            ],
            "options": [
                  "Because the other thief was selling it",
                  "Because it had escaped and walked back",
                  "Because Nasreddin had brought it for sale",
                  "Because the village chief put it on show"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki ikkinchi o'g'ri uni bozorda sotayotgan edi."
      },
      {
            "id": "s20-q15",
            "order": 15,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "Nasreddin went to it and spoke into its ear.",
            "keywords": [
                  "went to it",
                  "said into its ear"
            ],
            "options": [
                  "He went to it and spoke into its ear",
                  "He shouted for the police to arrest the seller",
                  "He bought the donkey a second time",
                  "He hit the donkey with a stick"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin eshakning yoniga borib, uning qulog'iga gapirdi."
      },
      {
            "id": "s20-q16",
            "order": 16,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Young man, some people will never learn!'",
            "keywords": [
                  "Young man",
                  "some people will never learn"
            ],
            "options": [
                  "'Young man, some people will never learn!'",
                  "'How much are you worth today?'",
                  "'Did you escape from your mother again?'",
                  "'I will not buy you this time!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshakka qarab: 'Ey yigit, ba'zi odamlar hech qachon saboq olmas ekanda!' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s20-tf1",
            "order": 1,
            "statement": "Two thieves conspired to steal Nasreddin's newly bought donkey.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'two thieves followed him. One of them took the rope from the donkey's neck...'."
      },
      {
            "id": "s20-tf2",
            "order": 2,
            "statement": "The thieves used physical violence and knocked Nasreddin unconscious.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ular zo'ravonlik ishlatishmadi, balki bildirmasdan almashtirib qo'yishdi."
      },
      {
            "id": "s20-tf3",
            "order": 3,
            "statement": "The thief told a fable that his mother had turned him into an animal.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'once I said some very bad things to my mother, and she changed me into a donkey'."
      },
      {
            "id": "s20-tf4",
            "order": 4,
            "statement": "Nasreddin made the young man sign a written promise before releasing him.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda hech qanday yozma tilxat haqida so'z bormagan."
      },
      {
            "id": "s20-tf5",
            "order": 5,
            "statement": "The donkey at the market the next day was being sold by the same young man who had the rope round his neck.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uni ikkinchi o'g'ri sotayotgan edi ('The other thief was selling it')."
      },
      {
            "id": "s20-tf6",
            "order": 6,
            "statement": "Nasreddin genuinely believed the donkey had misbehaved towards its mother again.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Nasriddin eshakning qulog'iga 'ba'zi odamlar hech qachon o'rganmaydi' deb aytganidan uning ishonganini ko'rish mumkin."
      }
]
  },
  {
    id: 'story-21',
    storyNumber: 21,
    title: "Nasreddin and the Coat",
    titleUz: "Nasriddin va Palto",
    cefrLevel: 'A2',
    wordCount: 147,
    readingTimeMinutes: 1,
    storyText: "Nasreddin wanted to buy some new clothes, so he went to a shop. First he asked for some trousers and put them on, but then he took them off and gave them back to the shopkeeper and said, 'No, give me a coat instead of these.'\nThe man gave him a coat, and said, 'This one costs the same as the trousers.' Nasreddin took the coat and walked out of the shop with it. The shopkeeper ran after him and said, 'You have not paid for that coat!'\n'But I gave you the trousers for the coat,' said Nasreddin. 'They cost the same as the coat, didn't they?'\n'Yes,' said the shopkeeper, 'But you didn't pay for the trousers either!'\n'Of course I didn't!' answered Nasreddin. 'I did not take them. I am not stupid! Nobody gives things back and then pays for them!'",
    paragraphs: [
      "Nasreddin wanted to buy some new clothes, so he went to a shop. First he asked for some trousers and put them on, but then he took them off and gave them back to the shopkeeper and said, 'No, give me a coat instead of these.'",
      "The man gave him a coat, and said, 'This one costs the same as the trousers.' Nasreddin took the coat and walked out of the shop with it. The shopkeeper ran after him and said, 'You have not paid for that coat!'",
      "'But I gave you the trousers for the coat,' said Nasreddin. 'They cost the same as the coat, didn't they?'",
      "'Yes,' said the shopkeeper, 'But you didn't pay for the trousers either!'",
      "'Of course I didn't!' answered Nasreddin. 'I did not take them. I am not stupid! Nobody gives things back and then pays for them!'"
],
    summaryUz: "Nasriddin kiyim do'koniga borib, avval shim kiyib ko'radi, so'ng uni qaytarib berib, o'rniga narxi teng bo'lgan palto so'raydi. Paltoni olib to'lamasdan chiqib ketayotganda sotuvchi yugurib chiqadi: 'Palto uchun to'lamadingiz!' Nasriddin: 'Palto o'rniga shimdi berdim-ku!' deydi. Sotuvchi: 'Lekin shim uchun ham to'lamagan edingiz!' deganida, Nasriddin kulib: 'Albatta to'lamaganman, axir shimni olib ketmadimku! Odam qaytarib bergan narsasiga ham pul to'laydimi?!' deydi.",
    vocabulary: [
      {
            "word": "trousers",
            "pos": "n.",
            "phonetic": "[ˈtraʊzəz]",
            "translationUz": "shim",
            "definitionEn": "An outer garment covering the body from the waist to the ankles with a separate part for each leg.",
            "exampleSentence": "First he tried on a pair of woollen trousers."
      },
      {
            "word": "coat",
            "pos": "n.",
            "phonetic": "[kəʊt]",
            "translationUz": "palto, ustki kiyim",
            "definitionEn": "An outer garment with sleeves worn outdoors.",
            "exampleSentence": "Give me a warm coat instead of these trousers."
      },
      {
            "word": "instead of",
            "pos": "prep.",
            "phonetic": "[ɪnˈsted əv]",
            "translationUz": "o'rniga",
            "definitionEn": "In place of; as a substitute or alternative to.",
            "exampleSentence": "He chose a coat instead of trousers."
      },
      {
            "word": "costs the same as",
            "pos": "v. phr.",
            "phonetic": "[kɒsts ðə seɪm æz]",
            "translationUz": "... bilan narxi bir xil bo'lmoq",
            "definitionEn": "To be equal in price or value to something else.",
            "exampleSentence": "This warm coat costs the same as the trousers."
      },
      {
            "word": "run after",
            "pos": "phr. v.",
            "phonetic": "[rʌn ˈɑːftə]",
            "translationUz": "orqasidan yugurib quvmoq",
            "definitionEn": "To chase or pursue someone on foot.",
            "exampleSentence": "The shopkeeper ran after him into the street."
      },
      {
            "word": "give back",
            "pos": "phr. v.",
            "phonetic": "[ɡɪv bæk]",
            "translationUz": "qaytarib bermoq",
            "definitionEn": "To return something to its owner.",
            "exampleSentence": "Nobody gives things back and then pays for them!"
      }
],
    reproductionOutline: [
      "Nasreddin entered a clothes store desiring new garments.",
      "He tried on a pair of trousers, but returned them requesting a coat of equal price instead.",
      "Receiving the coat, Nasreddin calmly strolled out of the store without paying.",
      "The outraged merchant chased him, complaining that the coat had not been paid for.",
      "Nasreddin baffled the merchant with absurd logic: he gave trousers for the coat, and obviously nobody pays for trousers they returned!"
],
    modelRetelling: "In need of fresh attire, Nasreddin went to a clothing shop and initially asked to try on a pair of trousers. After putting them on, he changed his mind, handed them back, and asked for a coat of equal value instead. The shopkeeper handed him a coat, confirming that it carried the identical price tag. Nasreddin put on the coat and casually walked out the door. Panicked, the merchant sprinted after him, yelling that he had not paid for the coat. Nasreddin smoothly argued that he had traded the trousers for the coat. When the merchant objected that Nasreddin had never paid for the trousers in the first place, Nasreddin scoffed: 'Of course I didn't! I didn't take them! Only a fool would pay for something he gave back!'",
    questions: [
      {
            "id": "s21-q1",
            "order": 1,
            "question": "What did Nasreddin want to do?",
            "modelAnswer": "Nasreddin wanted to buy some new clothes.",
            "keywords": [
                  "buy some new clothes"
            ],
            "options": [
                  "To buy some new clothes",
                  "To sell his old donkey",
                  "To complain about a tailor",
                  "To borrow some money from a friend"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yangi kiyimlar sotib olmoqchi edi: 'Nasreddin wanted to buy some new clothes'."
      },
      {
            "id": "s21-q2",
            "order": 2,
            "question": "Where did he go?",
            "modelAnswer": "He went to a shop.",
            "keywords": [
                  "went to a shop"
            ],
            "options": [
                  "To a shop",
                  "To the open market",
                  "To a bazaar square",
                  "To a friend's house"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U do'konga bordi: 'so he went to a shop'."
      },
      {
            "id": "s21-q3",
            "order": 3,
            "question": "What did he do there first?",
            "modelAnswer": "First he asked for some trousers and put them on.",
            "keywords": [
                  "asked for some trousers",
                  "put them on"
            ],
            "options": [
                  "He asked for some trousers and put them on",
                  "He tried on a heavy fur hat",
                  "He negotiated the price of a coat",
                  "He greeted the shopkeeper warmly"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Avval u shim so'radi va uni kiyib ko'rdi."
      },
      {
            "id": "s21-q4",
            "order": 4,
            "question": "What did he do then?",
            "modelAnswer": "He took them off and gave them back to the shopkeeper.",
            "keywords": [
                  "took them off",
                  "gave them back"
            ],
            "options": [
                  "He took them off and gave them back to the shopkeeper",
                  "He paid fifteen pence for the trousers",
                  "He tore a hole in the pocket",
                  "He hid the trousers under his arm"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "So'ng shimni yechib, do'kondorga qaytarib berdi."
      },
      {
            "id": "s21-q5",
            "order": 5,
            "question": "What did he say?",
            "modelAnswer": "He said, 'No, give me a coat instead of these.'",
            "keywords": [
                  "give me a coat instead of these"
            ],
            "options": [
                  "'No, give me a coat instead of these.'",
                  "'These trousers are too tight for me.'",
                  "'I will return tomorrow with my money.'",
                  "'Do you have silk shirts in stock?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Yo'q, bularning o'rniga menga palto ber' dedi."
      },
      {
            "id": "s21-q6",
            "order": 6,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "Nasreddin took the coat and walked out of the shop with it.",
            "keywords": [
                  "took the coat",
                  "walked out of the shop"
            ],
            "options": [
                  "He took the coat and walked out of the shop with it",
                  "He paid for the coat with gold coins",
                  "He examined the buttons carefully",
                  "He asked for a gift box"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U paltoni oldi va u bilan do'kondan chiqib ketdi."
      },
      {
            "id": "s21-q7",
            "order": 7,
            "question": "What did the shopkeeper do?",
            "modelAnswer": "The shopkeeper ran after him.",
            "keywords": [
                  "ran after him"
            ],
            "options": [
                  "The shopkeeper ran after him",
                  "He called the city guards",
                  "He counted his money in the cash drawer",
                  "He locked the front door"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Sotuvchi uning orqasidan yugurib chiqdi: 'The shopkeeper ran after him'."
      },
      {
            "id": "s21-q8",
            "order": 8,
            "question": "What did he say?",
            "modelAnswer": "He said, 'You have not paid for that coat!'",
            "keywords": [
                  "not paid for that coat"
            ],
            "options": [
                  "'You have not paid for that coat!'",
                  "'You forgot your old clothes inside!'",
                  "'Please come back and try the trousers again!'",
                  "'Have a wonderful evening, sir!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Siz bu palto uchun to'lamadingiz!' dedi."
      },
      {
            "id": "s21-q9",
            "order": 9,
            "question": "What was Nasreddin's answer?",
            "modelAnswer": "Nasreddin answered, 'But I gave you the trousers for the coat. They cost the same as the coat, didn't they?'",
            "keywords": [
                  "gave you the trousers for the coat",
                  "cost the same as the coat"
            ],
            "options": [
                  "'But I gave you the trousers for the coat. They cost the same, didn't they?'",
                  "'I will pay you at the end of the month.'",
                  "'My brother paid you five minutes ago.'",
                  "'I thought coats were free today.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin palto o'rniga shimni berganini, ularning narxi tengligini aytdi."
      },
      {
            "id": "s21-q10",
            "order": 10,
            "question": "What did the shopkeeper say?",
            "modelAnswer": "The shopkeeper said, 'Yes, but you didn't pay for the trousers either!'",
            "keywords": [
                  "didn't pay for the trousers either"
            ],
            "options": [
                  "'Yes, but you didn't pay for the trousers either!'",
                  "'The coat is actually more expensive than the trousers.'",
                  "'I do not accept trades in my shop.'",
                  "'Show me the receipt for the trousers.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Sotuvchi: 'To'g'ri, lekin siz shim uchun ham pul to'lamagan edingiz-ku!' dedi."
      },
      {
            "id": "s21-q11",
            "order": 11,
            "question": "What did the shopkeeper do?",
            "modelAnswer": "The shopkeeper stopped him and demanded payment for the clothes.",
            "keywords": [
                  "demanded payment",
                  "stopped him"
            ],
            "options": [
                  "He challenged Nasreddin's absurd logic and demanded payment",
                  "He took the coat back by force",
                  "He agreed that Nasreddin was right and returned inside",
                  "He offered him a free pair of shoes"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Sotuvchi shim uchun ham to'lamaganini aytib e'tiroz bildirdi."
      },
      {
            "id": "s21-q12",
            "order": 12,
            "question": "What did Nasreddin say then?",
            "modelAnswer": "Nasreddin said, 'Of course I didn't! I did not take them. I am not stupid! Nobody gives things back and then pays for them!'",
            "keywords": [
                  "Of course I didn't",
                  "did not take them",
                  "Nobody gives things back and then pays for them"
            ],
            "options": [
                  "'Of course I didn't! I did not take them... Nobody gives things back and then pays for them!'",
                  "'Take your coat back, I do not want anything from your shop.'",
                  "'Call the judge, we will see who is right.'",
                  "'Here is your money, I was only joking.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Albatta to'lamaganman! Axir ularni olmadimku! Hech kim qaytarib bergan narsasiga pul to'lamaydi!' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s21-tf1",
            "order": 1,
            "statement": "Nasreddin went to the shop because he needed new clothing.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Nasreddin wanted to buy some new clothes, so he went to a shop'."
      },
      {
            "id": "s21-tf2",
            "order": 2,
            "statement": "The coat cost significantly more than the trousers.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ikkalasining narxi bir xil edi ('This one costs the same as the trousers')."
      },
      {
            "id": "s21-tf3",
            "order": 3,
            "statement": "Nasreddin paid the full price of the trousers before trying them on.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U shim uchun ham hech qanday pul to'lamagan edi."
      },
      {
            "id": "s21-tf4",
            "order": 4,
            "statement": "The shopkeeper immediately called a policeman to arrest Nasreddin.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda do'kondor politsiya chaqirgani haqida gap yo'q, faqat o'zi quvib chiqqani aytilgan."
      },
      {
            "id": "s21-tf5",
            "order": 5,
            "statement": "Nasreddin argued that returning an item exempts a customer from paying for it.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Nobody gives things back and then pays for them!'."
      },
      {
            "id": "s21-tf6",
            "order": 6,
            "statement": "Nasreddin ended up keeping both the trousers and the coat.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Shimni do'konda qoldirgan edi ('I did not take them')."
      }
]
  }
];

export function getStoryById(id: string): StoryForReproduction | undefined {
  return STORIES_FOR_REPRODUCTION.find(s => s.id === id);
}

export function getStoryByNumber(num: number): StoryForReproduction | undefined {
  return STORIES_FOR_REPRODUCTION.find(s => s.storyNumber === num);
}
