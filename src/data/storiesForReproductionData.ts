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
,
  {
    id: 'story-22',
    storyNumber: 22,
    title: "Nasreddin and the End of the World",
    titleUz: "Nasriddin va Oxirzamon",
    cefrLevel: 'A2',
    wordCount: 165,
    readingTimeMinutes: 1,
    storyText: "One day, the boys of Nasreddin's village said to him, 'You have a nice, fat sheep. Will you invite us to a party to eat it with you?'\nNasreddin did not want the boys to eat his sheep, so he said, 'It is not fat enough yet.'\n'But have you not heard?' they said. 'The world is going to end tomorrow, so the sheep will never get fat!'\nNasreddin was getting tired of this, so he said, 'All right, boys, we will have a picnic tomorrow, and eat the sheep.'\nSo the next morning they all went to the river, the boys took off their clothes and jumped into the water, and Nasreddin killed the sheep.\nWhen the boys came out, their clothes were not there.\n'Where are our clothes, Nasreddin?' they asked.\n'Oh,' he answered, 'I made the fire to cook the sheep with your clothes. You will not need them again. The world is going to end today, don't you remember?'",
    paragraphs: [
      "One day, the boys of Nasreddin's village said to him, 'You have a nice, fat sheep. Will you invite us to a party to eat it with you?'\nNasreddin did not want the boys to eat his sheep, so he said, 'It is not fat enough yet.'",
      "'But have you not heard?' they said. 'The world is going to end tomorrow, so the sheep will never get fat!'\nNasreddin was getting tired of this, so he said, 'All right, boys, we will have a picnic tomorrow, and eat the sheep.'",
      "So the next morning they all went to the river, the boys took off their clothes and jumped into the water, and Nasreddin killed the sheep. When the boys came out, their clothes were not there.",
      "'Where are our clothes, Nasreddin?' they asked.\n'Oh,' he answered, 'I made the fire to cook the sheep with your clothes. You will not need them again. The world is going to end today, don't you remember?'"
],
    summaryUz: "Qishloq bolalari Nasriddinning semiz qo'yini yeb olish uchun: 'Ertaga dunyoning oxiri bo'ladi, qo'ying semirib ulgurmaydi, kel uni yeymiz!' deyishadi. Ertasi kuni daryo bo'yida bolalar kiyimlarini yechib suvga tushishadi. Chiqishsa kiyimlari yo'q! Nasriddin ularga: 'Go'shtni pishirish uchun o'choqqa kiyimlaringizni yoqdim. Axir bugun oxirzamon bo'lsa, sizlarga kiyim nega kerak?!' deb javob beradi.",
    vocabulary: [
      {
            "word": "fat",
            "pos": "adj.",
            "phonetic": "[fæt]",
            "translationUz": "semiz, go'shtdor",
            "definitionEn": "Having a lot of excess flesh; plump.",
            "exampleSentence": "Nasreddin owned a nice, fat sheep."
      },
      {
            "word": "invite",
            "pos": "v.",
            "phonetic": "[ɪnˈvaɪt]",
            "translationUz": "taklif qilmoq",
            "definitionEn": "To ask someone politely to come somewhere or do something.",
            "exampleSentence": "Will you invite us to a feast?"
      },
      {
            "word": "end of the world",
            "pos": "n. phr.",
            "phonetic": "[end əv ðə wɜːld]",
            "translationUz": "dunyoning oxiri, oxirzamon",
            "definitionEn": "The complete destruction of the world.",
            "exampleSentence": "They claimed the world is going to end tomorrow."
      },
      {
            "word": "picnic",
            "pos": "n.",
            "phonetic": "[ˈpɪknɪk]",
            "translationUz": "piknik, tabiat qo'ynidagi ziyofat",
            "definitionEn": "An occasion when a packed meal is eaten outdoors.",
            "exampleSentence": "We will have a picnic by the river tomorrow."
      },
      {
            "word": "take off",
            "pos": "phr. v.",
            "phonetic": "[teɪk ɒf]",
            "translationUz": "yechmoq (kiyimni)",
            "definitionEn": "To remove clothing from one's body.",
            "exampleSentence": "The boys took off their clothes and jumped into the river."
      },
      {
            "word": "fire",
            "pos": "n.",
            "phonetic": "[ˈfaɪə]",
            "translationUz": "olov, o'choq",
            "definitionEn": "Combustion or burning in which substances combine chemically with oxygen.",
            "exampleSentence": "He made a fire using their clothes to roast the meat."
      }
],
    reproductionOutline: [
      "Village boys pressured Nasreddin to slaughter his fat sheep for a feast.",
      "When Nasreddin delayed, they claimed the world would end tomorrow so the sheep would never get fatter.",
      "Nasreddin agreed and took them for a picnic by the river the following morning.",
      "While the boys stripped naked and swam, Nasreddin prepared the meat.",
      "Upon emerging, the freezing boys found their clothes incinerated; Nasreddin retorted that the doomed world made clothes useless!"
],
    modelRetelling: "Hoping to feast on Nasreddin's plump sheep, the village boys urged him to throw a party. When Nasreddin protested that the animal was not fat enough yet, they argued that the world was ending the next day anyway. Growing annoyed by their persistence, Nasreddin agreed to a riverbank picnic. The next morning, the boys threw off their clothes and leapt into the water to swim while Nasreddin slaughtered the sheep. When they climbed back out onto the bank, their garments were nowhere to be found. Inquiring frantically, they were told by Nasreddin that he had burned their clothes to fuel the cooking fire—reminding them that since the world was ending today, clothes would be completely unnecessary!",
    questions: [
      {
            "id": "s22-q1",
            "order": 1,
            "question": "What did the boys of Nasreddin's village say to him?",
            "modelAnswer": "They said, 'You have a nice, fat sheep. Will you invite us to a party to eat it with you?'",
            "keywords": [
                  "nice, fat sheep",
                  "invite us to a party"
            ],
            "options": [
                  "'You have a nice, fat sheep. Will you invite us to a party to eat it with you?'",
                  "'Will you lend us your donkey for the market?'",
                  "'Can you teach us how to catch fish in the river?'",
                  "'Where did you buy that beautiful woollen coat?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qishloq bolalari unga semiz qo'yini birgalikda yeyish uchun mehmondorchilikka chaqirishini so'rashdi."
      },
      {
            "id": "s22-q2",
            "order": 2,
            "question": "What did Nasreddin not want?",
            "modelAnswer": "Nasreddin did not want the boys to eat his sheep.",
            "keywords": [
                  "not want the boys to eat his sheep"
            ],
            "options": [
                  "He did not want the boys to eat his sheep",
                  "He did not want to go to the river",
                  "He did not want to sell his wool",
                  "He did not want the world to end"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin bolalarning uning qo'yini yeb qo'yishlarini istamas edi."
      },
      {
            "id": "s22-q3",
            "order": 3,
            "question": "What did he say to the boys?",
            "modelAnswer": "He said, 'It is not fat enough yet.'",
            "keywords": [
                  "not fat enough yet"
            ],
            "options": [
                  "'It is not fat enough yet.'",
                  "'I sold the sheep yesterday.'",
                  "'The sheep is terribly sick.'",
                  "'Go ask your own parents for meat.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'y hali yetarlicha semiz emasligini aytdi."
      },
      {
            "id": "s22-q4",
            "order": 4,
            "question": "What did they answer?",
            "modelAnswer": "They answered, 'The world is going to end tomorrow, so the sheep will never get fat!'",
            "keywords": [
                  "world is going to end tomorrow",
                  "never get fat"
            ],
            "options": [
                  "'The world is going to end tomorrow, so the sheep will never get fat!'",
                  "'We will bring extra grass to feed it.'",
                  "'We can wait until next year.'",
                  "'You are lying to us, Nasreddin.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular: 'Ertaga dunyoning oxiri bo'ladi, demak qo'y baribir semirmaydi!' deb javob berishdi."
      },
      {
            "id": "s22-q5",
            "order": 5,
            "question": "How did Nasreddin feel about this?",
            "modelAnswer": "Nasreddin was getting tired of this.",
            "keywords": [
                  "getting tired of this"
            ],
            "options": [
                  "He was getting tired of this",
                  "He became terrified of the apocalypse",
                  "He was extremely excited and joyful",
                  "He felt sorry for the poor boys"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin bu gap-so'zlardan bezor bo'lib charchadi: 'getting tired of this'."
      },
      {
            "id": "s22-q6",
            "order": 6,
            "question": "What did he say?",
            "modelAnswer": "He said, 'All right, boys, we will have a picnic tomorrow, and eat the sheep.'",
            "keywords": [
                  "have a picnic tomorrow",
                  "eat the sheep"
            ],
            "options": [
                  "'All right, boys, we will have a picnic tomorrow, and eat the sheep.'",
                  "'Never mention my sheep again!'",
                  "'I will give you five pence each instead.'",
                  "'Bring your own pots and pans tomorrow.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U mayli, ertaga daryo bo'yida piknik qilamiz va qo'yni yeymiz dedi."
      },
      {
            "id": "s22-q7",
            "order": 7,
            "question": "What happened the next morning?",
            "modelAnswer": "The next morning they all went to the river.",
            "keywords": [
                  "went to the river"
            ],
            "options": [
                  "The next morning they all went to the river",
                  "The world really came to an end",
                  "It rained heavily and they stayed home",
                  "The sheep escaped into the hills"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ertasi kuni ertalab ularning barchasi daryo bo'yiga bordilar."
      },
      {
            "id": "s22-q8",
            "order": 8,
            "question": "What did the boys do?",
            "modelAnswer": "The boys took off their clothes and jumped into the water.",
            "keywords": [
                  "took off their clothes",
                  "jumped into the water"
            ],
            "options": [
                  "The boys took off their clothes and jumped into the water",
                  "The boys gathered dry firewood for the fire",
                  "The boys prepared the roasting spices",
                  "The boys slept under a shady tree"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bolalar kiyimlarini yechib, daryoga cho'milish uchun sakradilar."
      },
      {
            "id": "s22-q9",
            "order": 9,
            "question": "What did Nasreddin do?",
            "modelAnswer": "Nasreddin killed the sheep.",
            "keywords": [
                  "killed the sheep"
            ],
            "options": [
                  "Nasreddin killed the sheep",
                  "Nasreddin jumped into the water with them",
                  "Nasreddin ran away back to his village",
                  "Nasreddin let the sheep run free"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin qo'yni so'ydi: 'Nasreddin killed the sheep'."
      },
      {
            "id": "s22-q10",
            "order": 10,
            "question": "What happened when the boys came out of the water?",
            "modelAnswer": "When the boys came out, their clothes were not there.",
            "keywords": [
                  "clothes were not there"
            ],
            "options": [
                  "Their clothes were not there",
                  "The sheep meat was completely eaten",
                  "A pack of wolves surrounded them",
                  "A policeman was waiting for them"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bolalar suvdan chiqqanlarida, kiyimlari joyida yo'q edi."
      },
      {
            "id": "s22-q11",
            "order": 11,
            "question": "What did they say?",
            "modelAnswer": "They asked, 'Where are our clothes, Nasreddin?'",
            "keywords": [
                  "Where are our clothes"
            ],
            "options": [
                  "'Where are our clothes, Nasreddin?'",
                  "'Is the mutton soup ready yet?'",
                  "'Why is the water so freezing cold?'",
                  "'Did you bring any fresh bread?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular: 'Kiyimlarimiz qani, Nasriddin?' deb so'rashdi."
      },
      {
            "id": "s22-q12",
            "order": 12,
            "question": "What did Nasreddin answer?",
            "modelAnswer": "He answered, 'I made the fire to cook the sheep with your clothes. You will not need them again. The world is going to end today, don't you remember?'",
            "keywords": [
                  "made the fire with your clothes",
                  "world is going to end today"
            ],
            "options": [
                  "'I made the fire with your clothes. The world is going to end today, don't you remember?'",
                  "'A thief stole them while you were swimming.'",
                  "'The wind blew them into the rushing river.'",
                  "'I washed them and hung them on a faraway tree.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin go'sht pishirish uchun ularning kiyimlarini o'choqqa yoqqanini, bugun oxirzamon bo'lsa kiyim kerak emasligini aytdi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s22-tf1",
            "order": 1,
            "statement": "The village boys wanted to feast on Nasreddin's fat sheep.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'You have a nice, fat sheep. Will you invite us to a party to eat it with you?'."
      },
      {
            "id": "s22-tf2",
            "order": 2,
            "statement": "Nasreddin was happy and eager to sacrifice his sheep for the boys from the start.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Nasriddin qo'yini ularga berishni umuman istamagan edi ('Nasreddin did not want the boys to eat his sheep')."
      },
      {
            "id": "s22-tf3",
            "order": 3,
            "statement": "The boys used the excuse of an impending apocalypse to convince Nasreddin.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The world is going to end tomorrow, so the sheep will never get fat!'."
      },
      {
            "id": "s22-tf4",
            "order": 4,
            "statement": "Nasreddin invited the village judge to join their river picnic.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda qozilar yoki boshqa qishloq oqsoqollari haqida ma'lumot yo'q."
      },
      {
            "id": "s22-tf5",
            "order": 5,
            "statement": "Nasreddin burned the boys' clothing in the cooking fire.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'I made the fire to cook the sheep with your clothes'."
      },
      {
            "id": "s22-tf6",
            "order": 6,
            "statement": "Nasreddin genuinely believed the world would perish that afternoon.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Nasriddin ularning o'z hiylasini o'zlariga qarshi qo'llab, saboq berish uchun shunday degan edi."
      }
]
  },
  {
    id: 'story-23',
    storyNumber: 23,
    title: "Nasreddin and the Beggar on the Roof",
    titleUz: "Nasriddin va Tomdagi Tilanchi",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "Whenever it rained, water came through Nasreddin's roof, so one day he got his ladder, climbed up on to the roof and began to mend it. It was quite difficult and dangerous work.\nWhile he was up there, he suddenly saw an old man in the street. This man was waving to him. He wanted Nasreddin to come down. Nasreddin thought, 'What has happened? What news has this man got for me?' So he climbed down the ladder quickly. Several times he slipped and nearly broke his neck. When he got to the bottom, the old man said,' I am a poor man. Please give me some money.'\nNasreddin was very angry, but he said, 'Come up.' He helped the old man to climb up the ladder and on to the roof.\nThen he said to him, 'I am a poor man too. I have no money for you. And now go down alone. I will not help you.'",
    paragraphs: [
      "Whenever it rained, water came through Nasreddin's roof, so one day he got his ladder, climbed up on to the roof and began to mend it. It was quite difficult and dangerous work.",
      "While he was up there, he suddenly saw an old man in the street. This man was waving to him. He wanted Nasreddin to come down. Nasreddin thought, 'What has happened? What news has this man got for me?' So he climbed down the ladder quickly. Several times he slipped and nearly broke his neck. When he got to the bottom, the old man said,' I am a poor man. Please give me some money.'",
      "Nasreddin was very angry, but he said, 'Come up.' He helped the old man to climb up the ladder and on to the roof.",
      "Then he said to him, 'I am a poor man too. I have no money for you. And now go down alone. I will not help you.'"
],
    summaryUz: "Nasriddin yomg'irda chakka o'tadigan tomini xavfli narvonda zo'rg'a tuzatayotganida, ko'chadagi qariya unga qo'l silkitib pastga tushishini so'raydi. Nasriddin muhim xabar bor deb shoshib tushadi, yo'lda yiqilib bo'yni sinishiga sal qoladi. Pastga tushsa, qariya tilanchilik qilib pul so'raydi! Nasriddinning jahli chiqadi, lekin indamay uni narvon orqali tomga olib chiqadi. Tomga chiqqach: 'Men ham kambag'alman, senga beradigan pulim yo'q! Endi esa pastga o'zing yolg'iz tush, senga yordam bermayman!' deydi.",
    vocabulary: [
      {
            "word": "mend",
            "pos": "v.",
            "phonetic": "[mend]",
            "translationUz": "tuzatmoq, ta'mirlamoq",
            "definitionEn": "To repair something that is broken or damaged.",
            "exampleSentence": "He climbed up on to the roof to mend the hole."
      },
      {
            "word": "dangerous",
            "pos": "adj.",
            "phonetic": "[ˈdeɪndʒərəs]",
            "translationUz": "xavfli",
            "definitionEn": "Able or likely to cause harm or injury.",
            "exampleSentence": "Working on a wet, steep roof is dangerous."
      },
      {
            "word": "wave",
            "pos": "v.",
            "phonetic": "[weɪv]",
            "translationUz": "qo'l silkitmoq",
            "definitionEn": "To move one's hand to and fro in greeting or as a signal.",
            "exampleSentence": "An old man in the street was waving to him."
      },
      {
            "word": "break one's neck",
            "pos": "idiom",
            "phonetic": "[breɪk wʌnz nek]",
            "translationUz": "bo'ynini sindirib olmoq",
            "definitionEn": "To fracture the vertebrae in the neck, causing fatal or severe injury.",
            "exampleSentence": "He slipped on the ladder and nearly broke his neck."
      },
      {
            "word": "poor",
            "pos": "adj.",
            "phonetic": "[pɔː]",
            "translationUz": "kambag'al, qashshoq",
            "definitionEn": "Lacking sufficient money to live comfortably.",
            "exampleSentence": "I am a poor man with no money to spare."
      },
      {
            "word": "alone",
            "pos": "adv.",
            "phonetic": "[əˈləʊn]",
            "translationUz": "yolg'iz, o'zi",
            "definitionEn": "Having no one else present; without assistance.",
            "exampleSentence": "Now climb down that perilous ladder all alone!"
      }
],
    reproductionOutline: [
      "Every rainstorm leaked into Nasreddin's house, prompting him to mend the roof.",
      "From the hazardous rooftop, he noticed an old man gesturing urgently from the road below.",
      "Assuming urgent news, Nasreddin dangerously scrambled down the ladder, narrowly escaping injury.",
      "At the bottom, the stranger nonchalantly begged for a handout of coins.",
      "Furious, Nasreddin coerced the beggar all the way up to the roof, declared he had no money, and abandoned him to climb down alone!"
],
    modelRetelling: "Frustrated by a leaking roof whenever it rained, Nasreddin fetched his ladder and climbed onto the steep rooftop to carry out dangerous repairs. Suddenly, an elderly man in the street began frantically waving, motioning for him to descend. Convinced that the stranger was delivering urgent news, Nasreddin hurried down, slipping several times and nearly breaking his neck in the process. Upon reaching the ground, however, the old man casually asked for alms. Suppressing his immense rage, Nasreddin told the beggar to follow him and helped him up the ladder onto the roof. Once at the top, Nasreddin sternly announced that he too was destitute with nothing to give, ordering the terrified beggar to find his own way down!",
    questions: [
      {
            "id": "s23-q1",
            "order": 1,
            "question": "What happened whenever it rained?",
            "modelAnswer": "Whenever it rained, water came through Nasreddin's roof.",
            "keywords": [
                  "water came through",
                  "roof"
            ],
            "options": [
                  "Water came through Nasreddin's roof",
                  "The street became a deep river",
                  "Nasreddin's donkey ran into the house",
                  "The chimney fell off the roof"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Har gal yomg'ir yoqqanda, Nasriddinning tomidan suv o'tardi: 'water came through Nasreddin's roof'."
      },
      {
            "id": "s23-q2",
            "order": 2,
            "question": "What did Nasreddin do?",
            "modelAnswer": "He got his ladder, climbed up on to the roof and began to mend it.",
            "keywords": [
                  "got his ladder",
                  "climbed up",
                  "mend it"
            ],
            "options": [
                  "He got his ladder, climbed up on to the roof and began to mend it",
                  "He hired a professional builder from the city",
                  "He put buckets in the living room and slept",
                  "He sold his house and moved away"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U narvon olib tomga chiqdi va uni tuzatishga kirishdi."
      },
      {
            "id": "s23-q3",
            "order": 3,
            "question": "What was this work like?",
            "modelAnswer": "It was quite difficult and dangerous work.",
            "keywords": [
                  "quite difficult and dangerous work"
            ],
            "options": [
                  "It was quite difficult and dangerous work",
                  "It was very easy and enjoyable",
                  "It was boring and noisy",
                  "It took only two minutes"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu juda qiyin va xavfli ish edi: 'quite difficult and dangerous work'."
      },
      {
            "id": "s23-q4",
            "order": 4,
            "question": "Whom did he see in the street?",
            "modelAnswer": "He saw an old man in the street.",
            "keywords": [
                  "saw an old man in the street"
            ],
            "options": [
                  "An old man",
                  "His best friend",
                  "A policeman",
                  "A young boy selling roses"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ko'chada bir qariyani ko'rib qoldi: 'saw an old man in the street'."
      },
      {
            "id": "s23-q5",
            "order": 5,
            "question": "When did he see this person?",
            "modelAnswer": "While he was up on the roof.",
            "keywords": [
                  "While he was up there"
            ],
            "options": [
                  "While he was up there on the roof",
                  "Before he climbed the ladder",
                  "After he finished repairing the roof",
                  "During dinner time"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tomda turgan vaqtida ko'rdi: 'While he was up there'."
      },
      {
            "id": "s23-q6",
            "order": 6,
            "question": "What did Nasreddin think?",
            "modelAnswer": "Nasreddin thought, 'What has happened? What news has this man got for me?'",
            "keywords": [
                  "What has happened",
                  "What news has this man got for me"
            ],
            "options": [
                  "'What has happened? What news has this man got for me?'",
                  "'He wants to steal my ladder.'",
                  "'The police are looking for me.'",
                  "'My donkey has escaped again.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin nima bo'ldi ekan, bu kishi qanday muhim xabar olib keldi ekan deb o'yladi."
      },
      {
            "id": "s23-q7",
            "order": 7,
            "question": "What did he do?",
            "modelAnswer": "He climbed down the ladder quickly.",
            "keywords": [
                  "climbed down the ladder quickly"
            ],
            "options": [
                  "He climbed down the ladder quickly",
                  "He shouted from the roof",
                  "He threw a tile down to get attention",
                  "He ignored the man and continued working"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tezda narvondan pastga tushdi: 'climbed down the ladder quickly'."
      },
      {
            "id": "s23-q8",
            "order": 8,
            "question": "What happened while he was doing this?",
            "modelAnswer": "Several times he slipped and nearly broke his neck.",
            "keywords": [
                  "slipped",
                  "nearly broke his neck"
            ],
            "options": [
                  "Several times he slipped and nearly broke his neck",
                  "The ladder snapped in half",
                  "He dropped his hammer into the street",
                  "It started raining heavily"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir necha bor sirpanib, bo'yni sinishiga sal qoldi."
      },
      {
            "id": "s23-q9",
            "order": 9,
            "question": "What did the old man say when Nasreddin got to the bottom?",
            "modelAnswer": "The old man said, 'I am a poor man. Please give me some money.'",
            "keywords": [
                  "poor man",
                  "give me some money"
            ],
            "options": [
                  "'I am a poor man. Please give me some money.'",
                  "'Your house is on fire!'",
                  "'A messenger arrived from the sultan.'",
                  "'Can you help me carry my heavy bags?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya: 'Men kambag'al odamman, iltimos menga biroz pul bering' dedi."
      },
      {
            "id": "s23-q10",
            "order": 10,
            "question": "How did Nasreddin feel?",
            "modelAnswer": "Nasreddin was very angry.",
            "keywords": [
                  "very angry"
            ],
            "options": [
                  "He was very angry",
                  "He was delighted to help",
                  "He felt sorry for the beggar",
                  "He was laughing loudly"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddinning g'azabi qaynadi: 'Nasreddin was very angry'."
      },
      {
            "id": "s23-q11",
            "order": 11,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Come up.'",
            "keywords": [
                  "Come up"
            ],
            "options": [
                  "'Come up.'",
                  "'Go away!'",
                  "'Wait inside the kitchen.'",
                  "'Here is two pence.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qariyaga: 'Tepaga chiq' dedi: 'Come up'."
      },
      {
            "id": "s23-q12",
            "order": 12,
            "question": "What did he do?",
            "modelAnswer": "He helped the old man to climb up the ladder and on to the roof.",
            "keywords": [
                  "helped the old man to climb up",
                  "on to the roof"
            ],
            "options": [
                  "He helped the old man to climb up the ladder and on to the roof",
                  "He hit the old man with his stick",
                  "He gave him all the copper coins in his pocket",
                  "He pushed the ladder away"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qariyaga narvondan tomga chiqib olishga yordam berdi."
      },
      {
            "id": "s23-q13",
            "order": 13,
            "question": "What did he say when they were on the roof?",
            "modelAnswer": "He said, 'I am a poor man too. I have no money for you. And now go down alone. I will not help you.'",
            "keywords": [
                  "poor man too",
                  "no money for you",
                  "go down alone",
                  "not help you"
            ],
            "options": [
                  "'I am a poor man too. I have no money for you. And now go down alone. I will not help you.'",
                  "'Look at the beautiful view of our village.'",
                  "'Help me fix this roof and I will feed you.'",
                  "'Stay here until the rain stops.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tomda: 'Men ham kambag'alman, senga pulim yo'q! Endi pastga o'zing yolg'iz tush, yordam bermayman!' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s23-tf1",
            "order": 1,
            "statement": "Nasreddin climbed onto the roof to carry out necessary home repairs.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'climbed up on to the roof and began to mend it'."
      },
      {
            "id": "s23-tf2",
            "order": 2,
            "statement": "The old man in the street had brought an urgent letter from the local court.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U shunchaki tilanchi bo'lib, pul so'rash uchun chaqirgan edi."
      },
      {
            "id": "s23-tf3",
            "order": 3,
            "statement": "Nasreddin safely descended the ladder without any risk or slipping.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U bir necha bor sirpanib, bo'ynini sindirishiga oz qolgan edi ('Several times he slipped and nearly broke his neck')."
      },
      {
            "id": "s23-tf4",
            "order": 4,
            "statement": "The beggar was blind and carrying a wooden cane.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda qariyaning ko'zi ojizligi yoki hassasi haqida ma'lumot yo'q."
      },
      {
            "id": "s23-tf5",
            "order": 5,
            "statement": "Nasreddin gave the old man five silver coins before climbing back up.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U bir tiyin ham bermadi ('I have no money for you')."
      },
      {
            "id": "s23-tf6",
            "order": 6,
            "statement": "Nasreddin brought the beggar up to the roof to teach him a lesson about wasting others' time.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Nasriddin uni qasddan tomga olib chiqib, o'zi yolg'iz tushishga majbur qildi."
      }
]
  },
  {
    id: 'story-24',
    storyNumber: 24,
    title: "Ten Children in the Same Clothes",
    titleUz: "Bir Xil Kiyimdagi O'n Bola",
    cefrLevel: 'A2',
    wordCount: 147,
    readingTimeMinutes: 1,
    storyText: "One day Mr Robinson saw a lady in the street with ten children. He was very surprised because all the children were wearing the same clothes-white caps, dark blue coats and grey trousers.\n'Are all those children yours?' he asked the mother.\n'Yes, they are,' she answered.\n'Do you always dress them in the same clothes?' asked Mr Robinson.\n'Yes,' answered the mother. 'When we had only four children, we dressed them in the same clothes because we did not want to lose any of them. It was easy to see our children when they were among other children, because they were all wearing the same clothes. And now, when we have ten, we dress them like this because we do not want to take other children home too by mistake. When there are other children among ours, it is easy to see them, because their clothes are different.'",
    paragraphs: [
      "One day Mr Robinson saw a lady in the street with ten children. He was very surprised because all the children were wearing the same clothes-white caps, dark blue coats and grey trousers.",
      "'Are all those children yours?' he asked the mother.\n'Yes, they are,' she answered.",
      "'Do you always dress them in the same clothes?' asked Mr Robinson.",
      "'Yes,' answered the mother. 'When we had only four children, we dressed them in the same clothes because we did not want to lose any of them. It was easy to see our children when they were among other children, because they were all wearing the same clothes. And now, when we have ten, we dress them like this because we do not want to take other children home too by mistake. When there are other children among ours, it is easy to see them, because their clothes are different.'"
],
    summaryUz: "Janob Robinson ko'chada 10 nafar bolasi bilan ketayotgan ayolni ko'radi. Barcha bolalar bir xil kiyingan edi: oq kepka, to'q ko'k palto va kulrang shim. Ayoldan sababini so'raganida: 'Bolam 4 ta bo'lganida birovlarning bolalari orasida yo'qotib qo'ymaslik uchun bir xil kiyintirar edik. Hozir 10 ta bo'lgach esa, adashib birovlarning bolasini uyimizga olib ketmaslik uchun shunday qilamiz, chunki begona bolalarning kiyimi darhol ajralib turadi!' deb javob beradi.",
    vocabulary: [
      {
            "word": "the same",
            "pos": "adj.",
            "phonetic": "[ðə seɪm]",
            "translationUz": "bir xil",
            "definitionEn": "Identical; not different.",
            "exampleSentence": "All ten children were wearing the same clothes."
      },
      {
            "word": "cap",
            "pos": "n.",
            "phonetic": "[kæp]",
            "translationUz": "kepka, qalpoq",
            "definitionEn": "A kind of soft, flat hat, typically with a visor.",
            "exampleSentence": "They wore clean white caps on their heads."
      },
      {
            "word": "trousers",
            "pos": "n.",
            "phonetic": "[ˈtraʊzəz]",
            "translationUz": "shim",
            "definitionEn": "An outer garment covering the body from waist to ankles.",
            "exampleSentence": "Each boy had matching grey trousers."
      },
      {
            "word": "among",
            "pos": "prep.",
            "phonetic": "[əˈmʌŋ]",
            "translationUz": "orasida, ichida",
            "definitionEn": "Surrounded by; in the company or midst of.",
            "exampleSentence": "It was easy to spot them among other schoolchildren."
      },
      {
            "word": "by mistake",
            "pos": "idiom",
            "phonetic": "[baɪ mɪˈsteɪk]",
            "translationUz": "adashib, yanglishib",
            "definitionEn": "As a result of an accident, carelessness, or error.",
            "exampleSentence": "We did not want to take home a strange child by mistake."
      },
      {
            "word": "different",
            "pos": "adj.",
            "phonetic": "[ˈdɪfrənt]",
            "translationUz": "boshqacha, har xil",
            "definitionEn": "Not the same as another or each other; unlike.",
            "exampleSentence": "Other children stand out because their clothes are different."
      }
],
    reproductionOutline: [
      "Mr Robinson was startled to see a mother walking ten identically dressed children.",
      "Every child wore a white cap, dark blue coat, and grey trousers.",
      "He inquired whether they were all hers and why they were dressed alike.",
      "She explained that with four children, uniform clothes prevented losing them in crowds.",
      "With ten children, the same outfit prevented accidentally bringing someone else's child home!"
],
    modelRetelling: "While strolling through town, Mr Robinson was astonished to encounter a woman herding ten children, all dressed in identical outfits consisting of white caps, navy coats, and grey trousers. Inquiring curiously, he confirmed that all ten were indeed her own offspring and asked why she dressed them uniformly. The mother candidly revealed her practical system: when they had only four children, dressing them alike ensured they would never lose any of their own among crowds. However, now that their brood had expanded to ten, uniform clothing prevented them from mistakenly gathering up and taking home someone else's child, as any intruder's different clothes were immediately noticeable!",
    questions: [
      {
            "id": "s24-q1",
            "order": 1,
            "question": "What did Mr Robinson see one morning?",
            "modelAnswer": "He saw a lady in the street with ten children.",
            "keywords": [
                  "lady in the street with ten children"
            ],
            "options": [
                  "A lady in the street with ten children",
                  "A parade of school soldiers",
                  "A clothes sale in the marketplace",
                  "A famous circus troupe"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ko'chada 10 nafar bolasi bor ayolni ko'rdi."
      },
      {
            "id": "s24-q2",
            "order": 2,
            "question": "Where did he see this?",
            "modelAnswer": "He saw this in the street.",
            "keywords": [
                  "in the street"
            ],
            "options": [
                  "In the street",
                  "In a children's playground",
                  "Inside a clothing department store",
                  "At a railway station"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni ko'chada ko'rdi: 'in the street'."
      },
      {
            "id": "s24-q3",
            "order": 3,
            "question": "How did he feel about it?",
            "modelAnswer": "He was very surprised.",
            "keywords": [
                  "very surprised"
            ],
            "options": [
                  "He was very surprised",
                  "He was annoyed and angry",
                  "He was completely indifferent",
                  "He was frightened"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U juda hayron qoldi: 'He was very surprised'."
      },
      {
            "id": "s24-q4",
            "order": 4,
            "question": "Why did he feel like this?",
            "modelAnswer": "Because all the children were wearing the same clothes—white caps, dark blue coats and grey trousers.",
            "keywords": [
                  "all the children were wearing the same clothes"
            ],
            "options": [
                  "Because all the children were wearing identical clothes",
                  "Because the children were walking without shoes",
                  "Because the children were singing loudly",
                  "Because the mother was driving a tractor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki barcha bolalar bir xil kiyingan edi: oq kepka, ko'k palto va kulrang shim."
      },
      {
            "id": "s24-q5",
            "order": 5,
            "question": "What did he say?",
            "modelAnswer": "He asked the mother, 'Are all those children yours?'",
            "keywords": [
                  "Are all those children yours"
            ],
            "options": [
                  "'Are all those children yours?'",
                  "'Where did you buy those uniforms?'",
                  "'Are you taking them to boarding school?'",
                  "'Can I take a photograph of your family?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U onadan: 'Bu bolalarning barchasi siznikimi?' deb so'radi."
      },
      {
            "id": "s24-q6",
            "order": 6,
            "question": "What did the lady answer?",
            "modelAnswer": "She answered, 'Yes, they are.'",
            "keywords": [
                  "Yes, they are"
            ],
            "options": [
                  "'Yes, they are.'",
                  "'No, half belong to my sister.'",
                  "'Only three of them are mine.'",
                  "'I am their school teacher.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ayol: 'Ha, hammasi o'zimniki' deb javob berdi."
      },
      {
            "id": "s24-q7",
            "order": 7,
            "question": "What did Mr Robinson say then?",
            "modelAnswer": "He asked, 'Do you always dress them in the same clothes?'",
            "keywords": [
                  "dress them in the same clothes"
            ],
            "options": [
                  "'Do you always dress them in the same clothes?'",
                  "'How much do their clothes cost?'",
                  "'Do they ever argue with each other?'",
                  "'Why don't you send them to school?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Janob Robinson: 'Ularni doim bir xil kiyintirasizmi?' deb so'radi."
      },
      {
            "id": "s24-q8",
            "order": 8,
            "question": "What was the lady's answer?",
            "modelAnswer": "She answered, 'Yes.'",
            "keywords": [
                  "Yes"
            ],
            "options": [
                  "'Yes.'",
                  "'Only on weekends.'",
                  "'No, only when it rains.'",
                  "'Never at home.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ayol: 'Ha' deb tasdiqladi."
      },
      {
            "id": "s24-q9",
            "order": 9,
            "question": "Why did she dress her children like that when she had four ?",
            "modelAnswer": "Because they did not want to lose any of them, and it was easy to see them among other children.",
            "keywords": [
                  "did not want to lose any of them",
                  "easy to see our children among other children"
            ],
            "options": [
                  "Because they did not want to lose any of them among other children",
                  "Because clothing was cheaper when bought in bulk",
                  "Because the school required that exact uniform",
                  "Because they only had one colour of dye"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bolalari 4 ta bo'lganida, boshqa bolalar orasida yo'qotib qo'ymaslik uchun bir xil kiyintirishgan."
      },
      {
            "id": "s24-q10",
            "order": 10,
            "question": "Why did she dress them like that when she had ten?",
            "modelAnswer": "Because they did not want to take other children home too by mistake, as other children wearing different clothes are easy to spot.",
            "keywords": [
                  "did not want to take other children home too by mistake",
                  "clothes are different"
            ],
            "options": [
                  "Because they did not want to take other children home by mistake",
                  "Because the older children passed down their clothes",
                  "Because they had opened their own textile factory",
                  "Because their father loved blue and grey"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "10 ta bo'lgach esa, adashib begona bolalarni uyga olib ketmaslik uchun shunday qilishgan!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s24-tf1",
            "order": 1,
            "statement": "The mother was walking with a group of ten children on the street.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'saw a lady in the street with ten children'."
      },
      {
            "id": "s24-tf2",
            "order": 2,
            "statement": "Each child wore a different colourful hat.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Barchasi bir xil oq kepka kiygan edi ('all the children were wearing... white caps')."
      },
      {
            "id": "s24-tf3",
            "order": 3,
            "statement": "Mr Robinson was the local primary school headmaster.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda janob Robinsonning kasbi haqida hech narsa deyilmagan."
      },
      {
            "id": "s24-tf4",
            "order": 4,
            "statement": "The mother used to have only four children in the past.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'When we had only four children, we dressed them in the same clothes'."
      },
      {
            "id": "s24-tf5",
            "order": 5,
            "statement": "With four children, identical clothes helped ensure they didn't lose any of them.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'because we did not want to lose any of them'."
      },
      {
            "id": "s24-tf6",
            "order": 6,
            "statement": "With ten children, the mother feared that strange children would be mistaken for her own and taken home.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'because we do not want to take other children home too by mistake'."
      }
]
  },
  {
    id: 'story-25',
    storyNumber: 25,
    title: "Mr Brown and the Lost Key",
    titleUz: "Janob Braun va Yo'qolgan Kalit",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "Mr and Mrs Brown lived in a small house near London with their child. Sometimes Mr Brown came back from work very late, when his wife and the child were asleep, and then he opened the front door of his house with his key and came in very quietly.\nBut one night when he was coming home late, he lost his key, so when he reached his house, he rang the bell. Nothing happened. He rang it again. Again nothing happened-nobody moved inside the house. Mr Brown knocked at the bedroom window, he spoke to his wife, he shouted, but she did not wake up. At last he stopped and thought for a few seconds. Then he began to speak like a small child. 'Mother!' he said, 'I want to go to the lavatory!' He spoke quite quietly but at once Mrs Brown woke up. Then he spoke to her, and she opened the door for him.",
    paragraphs: [
      "Mr and Mrs Brown lived in a small house near London with their child. Sometimes Mr Brown came back from work very late, when his wife and the child were asleep, and then he opened the front door of his house with his key and came in very quietly.",
      "But one night when he was coming home late, he lost his key, so when he reached his house, he rang the bell. Nothing happened. He rang it again. Again nothing happened-nobody moved inside the house.",
      "Mr Brown knocked at the bedroom window, he spoke to his wife, he shouted, but she did not wake up. At last he stopped and thought for a few seconds.",
      "Then he began to speak like a small child. 'Mother!' he said, 'I want to go to the lavatory!' He spoke quite quietly but at once Mrs Brown woke up. Then he spoke to her, and she opened the door for him."
],
    summaryUz: "Janob Braun kech qaytganida kalitini yo'qotib qo'yadi. Qo'ng'iroq chaladi, derazani taqillatadi, baqiradi — xotini uyg'onmaydi. Shunda u kichik bola ovozida sekingina: 'Ona! Hojatxonaga bormoqchiman!' deydi. Xotini ona instinkti bilan darhol uyg'onadi va eriga eshikni ochib beradi.",
    vocabulary: [
      {
            "word": "asleep",
            "pos": "adj.",
            "phonetic": "[əˈsliːp]",
            "translationUz": "uyquda, uxlayotgan",
            "definitionEn": "In a state of sleep; not awake.",
            "exampleSentence": "His wife and the child were fast asleep."
      },
      {
            "word": "quietly",
            "pos": "adv.",
            "phonetic": "[ˈkwaɪətli]",
            "translationUz": "sekin, shovqinsiz",
            "definitionEn": "Making little or no noise.",
            "exampleSentence": "He opened the door and came in very quietly."
      },
      {
            "word": "reach",
            "pos": "v.",
            "phonetic": "[riːtʃ]",
            "translationUz": "yetib kelmoq",
            "definitionEn": "To arrive at; get as far as.",
            "exampleSentence": "When he reached his front door, he realized his key was gone."
      },
      {
            "word": "knock",
            "pos": "v.",
            "phonetic": "[nɒk]",
            "translationUz": "taqillatmoq",
            "definitionEn": "To strike a surface noisily to attract attention.",
            "exampleSentence": "He knocked hard on the bedroom window."
      },
      {
            "word": "at once",
            "pos": "adv. phr.",
            "phonetic": "[æt wʌns]",
            "translationUz": "darhol, shu zahotiyoq",
            "definitionEn": "Immediately; without delay.",
            "exampleSentence": "Mrs Brown woke up at once upon hearing the child's voice."
      },
      {
            "word": "lavatory",
            "pos": "n.",
            "phonetic": "[ˈlævətri]",
            "translationUz": "hojatxona",
            "definitionEn": "A room with a toilet and washbasin.",
            "exampleSentence": "Mother, I want to go to the lavatory!"
      }
],
    reproductionOutline: [
      "Mr and Mrs Brown lived near London with their young child.",
      "Coming home late on ordinary nights, Mr Brown used his key to enter without making noise.",
      "One night he lost his key and was locked out; neither ringing the doorbell nor loud shouting woke his sleeping wife.",
      "Realizing maternal instincts, he whispered like a toddler: \"Mother! I want to go to the lavatory!\"",
      "The quiet child-like plea woke Mrs Brown instantly, and she opened the door."
],
    modelRetelling: "Living in a small cottage near London with their child, Mr Brown occasionally returned home late from work, quietly unlocking the front door so as not to disturb his sleeping family. However, on one late evening he realized he had lost his key. He repeatedly rang the doorbell, knocked firmly against the bedroom window, and shouted his wife's name, but she remained sound asleep. Pausing to ponder a solution, he ingeniously mimicked their young child's voice, whispering softly: 'Mother! I want to go to the lavatory!' Triggered by motherly instinct, Mrs Brown woke up in an instant, realized her husband was locked outside, and happily unbolted the door.",
    questions: [
      {
            "id": "s25-q1",
            "order": 1,
            "question": "Where did Mr and Mrs Brown live?",
            "modelAnswer": "They lived in a small house near London.",
            "keywords": [
                  "small house near London"
            ],
            "options": [
                  "In a small house near London",
                  "In a flat in downtown Manchester",
                  "On a farm in Scotland",
                  "In a seaside cottage in Brighton"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular London yaqinidagi kichik uyda yashashgan: 'in a small house near London'."
      },
      {
            "id": "s25-q2",
            "order": 2,
            "question": "How many children did they have?",
            "modelAnswer": "They had one child.",
            "keywords": [
                  "their child",
                  "one child"
            ],
            "options": [
                  "One child",
                  "Two children",
                  "Four children",
                  "Ten children"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ularning bitta bolasi bor edi: 'with their child'."
      },
      {
            "id": "s25-q3",
            "order": 3,
            "question": "What happened sometimes ?",
            "modelAnswer": "Sometimes Mr Brown came back from work very late.",
            "keywords": [
                  "came back from work very late"
            ],
            "options": [
                  "Mr Brown came back from work very late",
                  "Mrs Brown traveled to London alone",
                  "Their child stayed up all night",
                  "The front door lock broke"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ba'zida janob Braun ishdan juda kech qaytardi: 'came back from work very late'."
      },
      {
            "id": "s25-q4",
            "order": 4,
            "question": "What were his wife and child doing when this happened?",
            "modelAnswer": "His wife and child were asleep.",
            "keywords": [
                  "were asleep"
            ],
            "options": [
                  "They were asleep",
                  "They were watching television",
                  "They were waiting at the bus stop",
                  "They were eating dinner"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini va bolasi uxlab yotgan bo'lardi: 'were asleep'."
      },
      {
            "id": "s25-q5",
            "order": 5,
            "question": "What did Mr Brown do then?",
            "modelAnswer": "He opened the front door of his house with his key.",
            "keywords": [
                  "opened the front door",
                  "with his key"
            ],
            "options": [
                  "He opened the front door with his key",
                  "He rang the doorbell loudly",
                  "He slept in the garden shed",
                  "He phoned his wife from the road"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U uyni o'z kaliti bilan ochardi."
      },
      {
            "id": "s25-q6",
            "order": 6,
            "question": "How did he come in?",
            "modelAnswer": "He came in very quietly.",
            "keywords": [
                  "very quietly"
            ],
            "options": [
                  "Very quietly",
                  "Making a lot of noise",
                  "Singing a song",
                  "With a heavy flashlight"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U juda sekin va shovqinsiz kirardi: 'very quietly'."
      },
      {
            "id": "s25-q7",
            "order": 7,
            "question": "What happened one night?",
            "modelAnswer": "One night he lost his key.",
            "keywords": [
                  "lost his key"
            ],
            "options": [
                  "He lost his key",
                  "His car broke down",
                  "The house caught fire",
                  "A thief entered the house"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kecha u kalitini yo'qotib qo'ydi: 'he lost his key'."
      },
      {
            "id": "s25-q8",
            "order": 8,
            "question": "When did this happen?",
            "modelAnswer": "When he was coming home late from work.",
            "keywords": [
                  "coming home late"
            ],
            "options": [
                  "When he was coming home late",
                  "Early on Sunday morning",
                  "During his lunch break",
                  "On Christmas Eve"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U kechqurun kech qaytayotgan paytda yuz berdi."
      },
      {
            "id": "s25-q9",
            "order": 9,
            "question": "What did Mr Brown do when he reached his house?",
            "modelAnswer": "When he reached his house, he rang the bell.",
            "keywords": [
                  "rang the bell"
            ],
            "options": [
                  "He rang the bell",
                  "He broke the front window",
                  "He climbed through the chimney",
                  "He walked to a hotel"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uyiga yetib kelgach qo'ng'iroqni chaldi: 'he rang the bell'."
      },
      {
            "id": "s25-q10",
            "order": 10,
            "question": "What happened?",
            "modelAnswer": "Nothing happened.",
            "keywords": [
                  "Nothing happened"
            ],
            "options": [
                  "Nothing happened",
                  "The lights turned on",
                  "The dog started barking",
                  "His wife answered immediately"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hech narsa bo'lmadi: 'Nothing happened'."
      },
      {
            "id": "s25-q11",
            "order": 11,
            "question": "What did Mr Brown do then?",
            "modelAnswer": "He rang it again.",
            "keywords": [
                  "rang it again"
            ],
            "options": [
                  "He rang it again",
                  "He sat on the doorstep",
                  "He called the police",
                  "He threw pebbles at the roof"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'ng'iroqni yana bir bor chaldi: 'He rang it again'."
      },
      {
            "id": "s25-q12",
            "order": 12,
            "question": "What happened this time?",
            "modelAnswer": "Again nothing happened—nobody moved inside the house.",
            "keywords": [
                  "Again nothing happened",
                  "nobody moved"
            ],
            "options": [
                  "Again nothing happened—nobody moved inside the house",
                  "The door opened automatically",
                  "His neighbour came out with a torch",
                  "The baby started crying"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yana hech narsa bo'lmadi, uy ichida hech kim qimirlamadi."
      },
      {
            "id": "s25-q13",
            "order": 13,
            "question": "What did Mr Brown do then?",
            "modelAnswer": "He knocked at the bedroom window, spoke to his wife, and shouted.",
            "keywords": [
                  "knocked at the bedroom window",
                  "shouted"
            ],
            "options": [
                  "He knocked at the bedroom window, spoke to his wife, and shouted",
                  "He tried to kick the door down",
                  "He slept inside his parked car",
                  "He went back to his office"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yotoqxona derazasini taqillatdi, xotiniga gapirdi va baqirdi."
      },
      {
            "id": "s25-q14",
            "order": 14,
            "question": "What did his wife do?",
            "modelAnswer": "She did not wake up.",
            "keywords": [
                  "did not wake up"
            ],
            "options": [
                  "She did not wake up",
                  "She shouted back at him",
                  "She called the guards",
                  "She hid under the bed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini aslo uyg'onmadi: 'she did not wake up'."
      },
      {
            "id": "s25-q15",
            "order": 15,
            "question": "What did Mr Brown do then?",
            "modelAnswer": "He stopped and thought for a few seconds.",
            "keywords": [
                  "stopped and thought for a few seconds"
            ],
            "options": [
                  "He stopped and thought for a few seconds",
                  "He gave up completely",
                  "He started crying outside",
                  "He threw a heavy stone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U to'xtab, bir necha soniya o'ylab ko'rdi."
      },
      {
            "id": "s25-q16",
            "order": 16,
            "question": "How did Mr Brown wake his wife?",
            "modelAnswer": "He spoke like a small child and said, 'Mother! I want to go to the lavatory!'",
            "keywords": [
                  "spoke like a small child",
                  "Mother",
                  "want to go to the lavatory"
            ],
            "options": [
                  "He spoke like a small child: 'Mother! I want to go to the lavatory!'",
                  "He sounded an emergency car horn",
                  "He broke the bedroom window pane",
                  "He played loud music on his phone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yosh bola ovozida: 'Ona! Hojatxonaga bormoqchiman!' dedi."
      },
      {
            "id": "s25-q17",
            "order": 17,
            "question": "What did he do then?",
            "modelAnswer": "Then he spoke to her as she woke up.",
            "keywords": [
                  "spoke to her"
            ],
            "options": [
                  "He spoke to her and explained he was locked out",
                  "He ran away into the garden",
                  "He jumped through the open window",
                  "He hid behind the bush"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini uyg'ongach, u bilan gaplashdi."
      },
      {
            "id": "s25-q18",
            "order": 18,
            "question": "What did she do?",
            "modelAnswer": "She opened the door for him.",
            "keywords": [
                  "opened the door for him"
            ],
            "options": [
                  "She opened the door for him",
                  "She locked the latch tighter",
                  "She told him to go away",
                  "She called an ambulance"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini unga eshikni ochib berdi: 'she opened the door for him'."
      }
],
    trueFalseQuestions: [
      {
            "id": "s25-tf1",
            "order": 1,
            "statement": "Mr and Mrs Brown had three school-age children.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ularning faqat bitta bolasi bor edi ('with their child')."
      },
      {
            "id": "s25-tf2",
            "order": 2,
            "statement": "Mr Brown often had late working hours.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Sometimes Mr Brown came back from work very late'."
      },
      {
            "id": "s25-tf3",
            "order": 3,
            "statement": "One night, Mr Brown lost his front door key.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'he lost his key'."
      },
      {
            "id": "s25-tf4",
            "order": 4,
            "statement": "Loud knocking and shouting woke Mrs Brown immediately.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U baqirsa ham, derazani taqillatsa ham xotini uyg'onmadi ('she did not wake up')."
      },
      {
            "id": "s25-tf5",
            "order": 5,
            "statement": "The husband successfully awakened his wife by pretending to be their child.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U yosh bola kabi gapirib, 'Ona, hojatxonaga bormoqchiman' deganida xotini darhol uyg'ondi."
      },
      {
            "id": "s25-tf6",
            "order": 6,
            "statement": "Mrs Brown called the police thinking a burglar was outside.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uning politsiya chaqirgani haqida hech narsa deyilmagan."
      }
]
  },
  {
    id: 'story-26',
    storyNumber: 26,
    title: "Uncle George's Friendly Habit",
    titleUz: "Jorj Tog'aning Do'stona Odati",
    cefrLevel: 'A2',
    wordCount: 164,
    readingTimeMinutes: 1,
    storyText: "Peter's uncle lived in the country. Once Peter went to stay with him for a few weeks. Whenever they went for a walk or for a drive in the car and they passed somebody, his uncle waved. Peter was surprised, and said, 'Uncle George, you know everybody here. Where did you meet them all?'\n'I don't know all these people,' said his uncle.\n'Then why do you wave to them?' asked Peter.\n'Well, Peter,' answered his uncle, 'when I wave to some one and he knows me, he is pleased. He continues his journey with a happier heart. But when I wave to someone and he doesn't know me, he is surprised and says to himself, \"Who is that man? Why did he wave to me?\" So he has something to think about during the rest of his journey, and that makes his journey seem shorter. So I make everybody happy.'",
    paragraphs: [
      "Peter's uncle lived in the country. Once Peter went to stay with him for a few weeks. Whenever they went for a walk or for a drive in the car and they passed somebody, his uncle waved. Peter was surprised, and said, 'Uncle George, you know everybody here. Where did you meet them all?'",
      "'I don't know all these people,' said his uncle.\n'Then why do you wave to them?' asked Peter.",
      "'Well, Peter,' answered his uncle, 'when I wave to some one and he knows me, he is pleased. He continues his journey with a happier heart. But when I wave to someone and he doesn't know me, he is surprised and says to himself, \"Who is that man? Why did he wave to me?\" So he has something to think about during the rest of his journey, and that makes his journey seem shorter. So I make everybody happy.'"
],
    summaryUz: "Piter qishloqda yashovchi Jorj tog'asinikiga mehmonga boradi. Tog'asi ko'chada mashinada ketayotib har bir uchragan odamga qo'l silkitib salom beradi. Piter hamma odamlarni qaerdan tanishini so'raganida, tog'asi: 'Men ularning hammasini tanimayman. Taniydigan odamga qo'l silkitsam xursand bo'ladi. Tanimaydigan odam esa \"Bu kim edi? Nega menga qo'l siltadi?\" deb o'ylanib, yo'li qanday o'tganini bilmay qoladi va uning ham yo'li qisqaradi. Shunday qilib men barchani xursand qilaman!' deydi.",
    vocabulary: [
      {
            "word": "country",
            "pos": "n.",
            "phonetic": "[ˈkʌntri]",
            "translationUz": "qishloq joy, shahar tashqarisi",
            "definitionEn": "Districts outside cities and towns; rural areas.",
            "exampleSentence": "Peter spent his summer holiday in the quiet country."
      },
      {
            "word": "stay with",
            "pos": "phr. v.",
            "phonetic": "[steɪ wɪð]",
            "translationUz": "...nikida mehmon bo'lmoq / yashamoq",
            "definitionEn": "To live temporarily as a guest in someone's home.",
            "exampleSentence": "Peter went to stay with his eccentric uncle."
      },
      {
            "word": "wave",
            "pos": "v.",
            "phonetic": "[weɪv]",
            "translationUz": "qo'l silkitmoq (salom bermoq)",
            "definitionEn": "To move one's hand to signal friendly greeting.",
            "exampleSentence": "Uncle George waved warmly at every passer-by."
      },
      {
            "word": "journey",
            "pos": "n.",
            "phonetic": "[ˈdʒɜːni]",
            "translationUz": "sayohat, safar, yo'l",
            "definitionEn": "An act of travelling from one place to another.",
            "exampleSentence": "The friendly gesture brightened their long journey."
      },
      {
            "word": "seem shorter",
            "pos": "v. phr.",
            "phonetic": "[siːm ˈʃɔːtə]",
            "translationUz": "qisqaroqdek tuyulmoq",
            "definitionEn": "To appear to take less time than actual.",
            "exampleSentence": "Thinking about the mystery makes the trip seem shorter."
      },
      {
            "word": "pleased",
            "pos": "adj.",
            "phonetic": "[pliːzd]",
            "translationUz": "mamnun, xursand",
            "definitionEn": "Feeling happy or satisfied with a situation.",
            "exampleSentence": "People are always pleased when greeted warmly."
      }
],
    reproductionOutline: [
      "Peter stayed with his countryside uncle, George, for several weeks.",
      "Whenever they walked or drove past anyone on the roads, Uncle George enthusiastically waved.",
      "Peter expressed astonishment, assuming his uncle knew the entire local population.",
      "Uncle George admitted he was complete strangers with most of them.",
      "His reasoning was uplifting: acquaintances felt cheered, while strangers grew intrigued, causing their journeys to feel pleasantly shorter!"
],
    modelRetelling: "Visiting his countryside uncle George for several weeks, young Peter was struck by an unusual habit: whenever they drove or strolled past someone, George waved warmly. Mistakenly assuming his uncle was acquainted with every soul in the region, Peter asked where he had met so many people. Uncle George surprised the boy by revealing that he hardly recognized any of them. He explained his unique philosophy: when he greeted an acquaintance, they felt appreciated and traveled happier. When he greeted a complete stranger, that person was left pleasantly puzzled, pondering who the mystery man was, which made the remainder of their journey fly by. In this simple way, George reasoned, he made everyone happy!",
    questions: [
      {
            "id": "s26-q1",
            "order": 1,
            "question": "Where did Peter's uncle live?",
            "modelAnswer": "Peter's uncle lived in the country.",
            "keywords": [
                  "lived in the country"
            ],
            "options": [
                  "In the country",
                  "In central London",
                  "In a seaside port",
                  "In an apartment in New York"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Piterning tog'asi qishloqda yashardi: 'lived in the country'."
      },
      {
            "id": "s26-q2",
            "order": 2,
            "question": "What did Peter once do?",
            "modelAnswer": "Once Peter went to stay with him for a few weeks.",
            "keywords": [
                  "stay with him for a few weeks"
            ],
            "options": [
                  "He went to stay with him for a few weeks",
                  "He bought a vintage motor-car from him",
                  "He helped him harvest wheat",
                  "He moved to the village permanently"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir safar Piter u bilan bir necha hafta yashashga bordi."
      },
      {
            "id": "s26-q3",
            "order": 3,
            "question": "What happened?",
            "modelAnswer": "Whenever they went for a walk or drive and passed somebody, his uncle waved.",
            "keywords": [
                  "passed somebody",
                  "his uncle waved"
            ],
            "options": [
                  "Whenever they passed somebody, his uncle waved",
                  "His uncle stopped and took pictures of everybody",
                  "His uncle invited every stranger for dinner",
                  "Their car broke down on every country road"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular qachon yurishsa yoki mashinada ketishsa, tog'asi har bir o'tgan odamga qo'l silkitardi."
      },
      {
            "id": "s26-q4",
            "order": 4,
            "question": "What did Peter feel about this?",
            "modelAnswer": "Peter was surprised.",
            "keywords": [
                  "was surprised"
            ],
            "options": [
                  "He was surprised",
                  "He was embarrassed and annoyed",
                  "He was scared of the strangers",
                  "He was indifferent"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Piter bundan hayratda qoldi: 'Peter was surprised'."
      },
      {
            "id": "s26-q5",
            "order": 5,
            "question": "What did he say?",
            "modelAnswer": "Peter said, 'Uncle George, you know everybody here. Where did you meet them all?'",
            "keywords": [
                  "you know everybody here",
                  "Where did you meet them all"
            ],
            "options": [
                  "'Uncle George, you know everybody here. Where did you meet them all?'",
                  "'Why are you driving so fast down these narrow lanes?'",
                  "'Can we stop at the next village bakery?'",
                  "'Do people always wave back at you?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Jorj tog'a, siz bu yerdagi hamma odamlarni taniysiz. Ularning hammasi bilan qayerda uchrashgansiz?' deb so'radi."
      },
      {
            "id": "s26-q6",
            "order": 6,
            "question": "What did his uncle answer?",
            "modelAnswer": "His uncle answered, 'I don't know all these people.'",
            "keywords": [
                  "don't know all these people"
            ],
            "options": [
                  "'I don't know all these people.'",
                  "'I went to school with all of them.'",
                  "'They are all our distant cousins.'",
                  "'I met them at the annual country fair.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Tog'asi: 'Men bu odamlarning hammasini tanimayman' deb javob berdi."
      },
      {
            "id": "s26-q7",
            "order": 7,
            "question": "What did Peter ask him then?",
            "modelAnswer": "Peter asked, 'Then why do you wave to them?'",
            "keywords": [
                  "why do you wave to them"
            ],
            "options": [
                  "'Then why do you wave to them?'",
                  "'Can I wave to them too?'",
                  "'Are they angry when you wave?'",
                  "'Do you ever stop to speak with them?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Piter: 'Unda nega ularga qo'l siltaysiz?' deb so'radi."
      },
      {
            "id": "s26-q8",
            "order": 8,
            "question": "What was his uncle's answer?",
            "modelAnswer": "His uncle answered that acquaintances feel pleased, while strangers wonder who waved, which gives them something to think about and makes their journey seem shorter, thus making everybody happy.",
            "keywords": [
                  "pleased",
                  "surprised",
                  "something to think about",
                  "makes his journey seem shorter",
                  "make everybody happy"
            ],
            "options": [
                  "Known people are pleased, while strangers have something to think about making their trip seem shorter",
                  "He waved to keep his arm muscles warm and active",
                  "It was a local traffic regulation to wave at oncoming cars",
                  "He was practicing his election campaign for mayor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Tog'asi taniydiganlar xursand bo'lishini, tanimaydiganlar esa o'ylanib yo'li qanday o'tganini bilmay qolishini va shu tariqa barchani baxtli qilishini aytdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s26-tf1",
            "order": 1,
            "statement": "Peter spent several weeks visiting his uncle in the countryside.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Peter went to stay with him for a few weeks'."
      },
      {
            "id": "s26-tf2",
            "order": 2,
            "statement": "Uncle George waved strictly to personal friends and business clients.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U yo'ldan o'tgan har bir odamga qo'l silkitardi ('Whenever they... passed somebody, his uncle waved')."
      },
      {
            "id": "s26-tf3",
            "order": 3,
            "statement": "Uncle George knew every single inhabitant of the surrounding villages.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U barcha odamlarni tanimasligini ochiq aytdi ('I don't know all these people')."
      },
      {
            "id": "s26-tf4",
            "order": 4,
            "statement": "Uncle George was running for political office in the county.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uning siyosatga aloqadorligi yoki saylovda qatnashayotgani haqida gap yo'q."
      },
      {
            "id": "s26-tf5",
            "order": 5,
            "statement": "Uncle George believed curiosity about his waving helped strangers' journeys feel shorter.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'So he has something to think about... and that makes his journey seem shorter'."
      },
      {
            "id": "s26-tf6",
            "order": 6,
            "statement": "Peter was disgusted by his uncle's friendly habit and refused to ride with him.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Piter faqat hayratlangan va sababini qiziqib so'ragan edi."
      }
]
  }
,
  {
    id: 'story-27',
    storyNumber: 27,
    title: "The Old Gentleman's Umbrella",
    titleUz: "Qariyaning soyaboni",
    cefrLevel: 'A2',
    wordCount: 164,
    readingTimeMinutes: 1,
    storyText: "It was a beautiful spring morning. There wasn't a cloud in the sky, and the sun was warm but not too hot, so Mr Andrews was surprised when he saw an old gentleman at the bus-stop with a big, strong black umbrella in his hand.\nMr Andrews said to him, 'Are we going to have rain today, do you think?'\n'No', said the old gentleman, 'I don't think so.'\n'Then are you carrying the umbrella to keep the sun off you?'\n'No, the sun is not very hot in spring.'\nMr Andrews looked at the big umbrella again, and the gentleman said, 'I am an old man, and my legs are not very strong, so I really need a walking-stick. But when I carry a walking-stick, people say, \"Look at that poor old man\", and I don't like that. When I carry an umbrella in fine weather, people only say, \"Look at that stupid man\".'",
    paragraphs: [
      "It was a beautiful spring morning. There wasn't a cloud in the sky, and the sun was warm but not too hot, so Mr Andrews was surprised when he saw an old gentleman at the bus-stop with a big, strong black umbrella in his hand.",
      "Mr Andrews said to him, 'Are we going to have rain today, do you think?'\n'No', said the old gentleman, 'I don't think so.'\n'Then are you carrying the umbrella to keep the sun off you?'\n'No, the sun is not very hot in spring.'",
      "Mr Andrews looked at the big umbrella again, and the gentleman said, 'I am an old man, and my legs are not very strong, so I really need a walking-stick. But when I carry a walking-stick, people say, \"Look at that poor old man\", and I don't like that. When I carry an umbrella in fine weather, people only say, \"Look at that stupid man\".'"
],
    summaryUz: "Ochiq va iliq bahor tongida bir qariya avtobus bekatida katta qora soyabon ushlab turgan edi. Janob Endryus yomg'ir ham, issiq quyosh ham yo'q paytda nega soyabon ko'tarib yurganini so'raganida, qariya: 'Oyoqlarim zaif, aslida menga hassa kerak. Ammo hassa bilan yursam odamlar \"Bechora qariya\" deyishadi, bu menga yoqmaydi. Ochiq havoda soyabon bilan yursam esa shunchaki \"Anavi ahmoq odamni qarang\" deyishadi, xolos!' deb javob beradi.",
    vocabulary: [
      {
            "word": "umbrella",
            "pos": "n.",
            "phonetic": "[ʌmˈbrelə]",
            "translationUz": "soyabon",
            "definitionEn": "A collapsible canopy designed to protect against rain or sun.",
            "exampleSentence": "He carried a big black umbrella in his hand."
      },
      {
            "word": "walking-stick",
            "pos": "n.",
            "phonetic": "[ˈwɔːkɪŋ stɪk]",
            "translationUz": "hassa, tayoq",
            "definitionEn": "A stick used for support when walking.",
            "exampleSentence": "The old gentleman needed a walking-stick for balance."
      },
      {
            "word": "fine weather",
            "pos": "n. phr.",
            "phonetic": "[faɪn ˈweðə]",
            "translationUz": "ochiq / yaxshi ob-havo",
            "definitionEn": "Clear, sunny, pleasant atmospheric conditions.",
            "exampleSentence": "Why carry an umbrella in such fine weather?"
      },
      {
            "word": "keep off",
            "pos": "phr. v.",
            "phonetic": "[kiːp ɒf]",
            "translationUz": "to'smoq, yaqinlashtirmaslik",
            "definitionEn": "To prevent something from reaching or affecting someone.",
            "exampleSentence": "He used the canopy to keep the sun off him."
      },
      {
            "word": "poor",
            "pos": "adj.",
            "phonetic": "[pɔː]",
            "translationUz": "bechora, holi tang",
            "definitionEn": "Worthy of pity, sympathy, or compassion.",
            "exampleSentence": "People look at him and say, \"Look at that poor old man.\""
      },
      {
            "word": "stupid",
            "pos": "adj.",
            "phonetic": "[ˈstjuːpɪd]",
            "translationUz": "ahmoqona, g'alati",
            "definitionEn": "Lacking common sense or good judgment.",
            "exampleSentence": "They just think he is a foolish or stupid man."
      }
],
    reproductionOutline: [
      "On a warm, cloudless spring morning, Mr Andrews noticed an elderly gentleman with a massive black umbrella at a bus stop.",
      "Curious, Mr Andrews asked if rain was forecasted or if the umbrella was meant to block the sun.",
      "The gentleman confirmed it would not rain and the spring sun was mild.",
      "He explained that his frail legs required the physical support of a walking stick.",
      "However, he preferred being labeled \"stupid\" for carrying an umbrella in sunshine over being pitied as a \"poor old man\" with a cane."
],
    modelRetelling: "On a clear, pleasant spring morning without a cloud in the sky, Mr Andrews was puzzled to see an elderly gentleman waiting at a bus stop holding a sturdy black umbrella. Wondering about the reasoning behind it, Mr Andrews asked whether rain was anticipated or if the umbrella was shielding him from the sunlight. The gentleman replied that the weather was fine and the sun was mild. He explained that due to his weak legs, he actually required a cane for support. However, carrying a walking stick invited condescending pity from strangers whispering 'Look at that poor old man', whereas carrying an umbrella in sunny weather merely caused people to chuckle and remark 'Look at that silly man', which he vastly preferred.",
    questions: [
      {
            "id": "s27-q1",
            "order": 1,
            "question": "What was the weather like?",
            "modelAnswer": "It was a beautiful spring morning with no clouds and a warm sun.",
            "keywords": [
                  "beautiful spring morning",
                  "no cloud",
                  "sun was warm"
            ],
            "options": [
                  "A beautiful spring morning with no clouds and a warm sun",
                  "A rainy and windy afternoon",
                  "A freezing winter day with snow",
                  "A dark and stormy evening"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Havo ajoyib bahor tongi, osmonda bulutsiz va quyosh iliq edi."
      },
      {
            "id": "s27-q2",
            "order": 2,
            "question": "What did Mr Andrews see?",
            "modelAnswer": "He saw an old gentleman at the bus-stop with a big, strong black umbrella in his hand.",
            "keywords": [
                  "old gentleman",
                  "bus-stop",
                  "black umbrella"
            ],
            "options": [
                  "An old gentleman at the bus-stop with a big black umbrella",
                  "A young boy selling roses",
                  "A stray dog chasing a bus",
                  "A policeman waving at him"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bekatda qo'lida katta qora soyabon ushlab turgan qariyani ko'rdi."
      },
      {
            "id": "s27-q3",
            "order": 3,
            "question": "How did he feel about this?",
            "modelAnswer": "Mr Andrews was surprised.",
            "keywords": [
                  "surprised"
            ],
            "options": [
                  "He was surprised",
                  "He was terrified",
                  "He was furious",
                  "He was completely indifferent"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Janob Endryus hayron qoldi: 'Mr Andrews was surprised'."
      },
      {
            "id": "s27-q4",
            "order": 4,
            "question": "Why did he feel like this?",
            "modelAnswer": "Because the weather was sunny and warm with no clouds, but the man had a big umbrella.",
            "keywords": [
                  "no cloud in the sky",
                  "sun was warm",
                  "big umbrella"
            ],
            "options": [
                  "Because the weather was clear and sunny with no sign of rain",
                  "Because the gentleman was wearing a winter fur coat",
                  "Because the bus was already two hours late",
                  "Because the umbrella was broken"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki havo ochiq va quyoshli bo'lsa ham qariya soyabon ko'tarib olgan edi."
      },
      {
            "id": "s27-q5",
            "order": 5,
            "question": "What did Mr Andrews say?",
            "modelAnswer": "He said, 'Are we going to have rain today, do you think?'",
            "keywords": [
                  "rain today",
                  "do you think"
            ],
            "options": [
                  "'Are we going to have rain today, do you think?'",
                  "'Can I borrow your umbrella, sir?'",
                  "'Which bus are you waiting for?'",
                  "'Where did you buy that umbrella?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Bugun yomg'ir yog'adi deb o'ylaysizmi?' deb so'radi."
      },
      {
            "id": "s27-q6",
            "order": 6,
            "question": "What did the old gentleman answer?",
            "modelAnswer": "The old gentleman answered, 'No, I don't think so.'",
            "keywords": [
                  "don't think so"
            ],
            "options": [
                  "'No, I don't think so.'",
                  "'Yes, a heavy thunderstorm is coming.'",
                  "'I heard it on the morning radio.'",
                  "'It always rains in spring.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya: 'Yo'q, unday deb o'ylamayman' deb javob berdi."
      },
      {
            "id": "s27-q7",
            "order": 7,
            "question": "What did Mr Andrews say then?",
            "modelAnswer": "He asked, 'Then are you carrying the umbrella to keep the sun off you?'",
            "keywords": [
                  "keep the sun off you"
            ],
            "options": [
                  "'Then are you carrying the umbrella to keep the sun off you?'",
                  "'Why don't you leave it at home then?'",
                  "'Can you sell it to me for five pence?'",
                  "'Is it broken inside?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Unda quyoshdan saqlanish uchun ko'taryapsizmi?' deb so'radi."
      },
      {
            "id": "s27-q8",
            "order": 8,
            "question": "What was the old gentleman's answer?",
            "modelAnswer": "He answered, 'No, the sun is not very hot in spring.'",
            "keywords": [
                  "sun is not very hot in spring"
            ],
            "options": [
                  "'No, the sun is not very hot in spring.'",
                  "'Yes, I burn very easily.'",
                  "'My doctor ordered me to stay in the shade.'",
                  "'I hate sunlight.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya bahorda quyosh unchalik issiq emasligini aytdi."
      },
      {
            "id": "s27-q9",
            "order": 9,
            "question": "What did Mr Andrews do then?",
            "modelAnswer": "Mr Andrews looked at the big umbrella again.",
            "keywords": [
                  "looked at the big umbrella again"
            ],
            "options": [
                  "He looked at the big umbrella again",
                  "He boarded his bus",
                  "He opened his own newspaper",
                  "He laughed at the old man"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Janob Endryus katta soyabonga yana bir bor qaradi."
      },
      {
            "id": "s27-q10",
            "order": 10,
            "question": "What did the old gentleman say?",
            "modelAnswer": "He explained that he needed a walking-stick for his weak legs, but preferred being called 'stupid' for an umbrella in fine weather rather than 'poor old man' with a walking-stick.",
            "keywords": [
                  "legs are not very strong",
                  "walking-stick",
                  "poor old man",
                  "stupid man"
            ],
            "options": [
                  "He said he needed support for his legs, but preferred being called 'stupid' rather than 'poor old man'",
                  "He said the umbrella was a gift from his grandmother",
                  "He said he used the umbrella to defend against street dogs",
                  "He said he was delivering it to a lost-and-found office"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U hassa tutsa 'bechora qariya' deyishlarini yoqtirmasligini, soyabon tutsa odamlar shunchaki 'anavi ahmoqni qarang' deyishini ma'lum qildi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s27-tf1",
            "order": 1,
            "statement": "The story took place on a chilly, overcast autumn evening.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Hodisa musaffo bahor tongida yuz bergan ('It was a beautiful spring morning')."
      },
      {
            "id": "s27-tf2",
            "order": 2,
            "statement": "The old gentleman carried the umbrella because he predicted rain.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U yomg'ir yog'masligini yaxshi bilgan ('No, I don't think so')."
      },
      {
            "id": "s27-tf3",
            "order": 3,
            "statement": "The gentleman had trouble walking because his legs were weak.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'I am an old man, and my legs are not very strong'."
      },
      {
            "id": "s27-tf4",
            "order": 4,
            "statement": "The gentleman was waiting for bus number 42 to the hospital.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda avtobus raqami yoki qayerga ketayotgani aytilmagan."
      },
      {
            "id": "s27-tf5",
            "order": 5,
            "statement": "The old gentleman disliked being pitied by strangers.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U odamlarning 'bechora qariya' deb achinishlarini xohlamagan ('and I don't like that')."
      },
      {
            "id": "s27-tf6",
            "order": 6,
            "statement": "Mr Andrews took the umbrella away and threw it into the road.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Janob Endryus faqat suhbatlashgan, soyabonga tegmagan."
      }
]
  },
  {
    id: 'story-28',
    storyNumber: 28,
    title: "The Chinese Officer's Dinner",
    titleUz: "Xitoylik zobitning tushligi",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "Many years ago, an English family were living in China.\nOne evening an important Chinese officer came to visit them. It got later and later, and he still did not go, so his hostess invited him to have dinner with them. But she had very little food in the house, so she quickly went to the kitchen and spoke to her Chinese cook.\nHe said, 'It is all right. You will have a very good dinner.'\nWhen they all sat down to eat, the lady was very surprised, because there was a lot of very good food on the table.\nAfter the dinner, the hostess ran to the kitchen and said to the cook, 'How did you make such a good meal in half an hour?'\n'I did not make it, madam,' he said. 'I sent one of the servants to the Chinese officer's house, and he brought back the Chinese officer's dinner.'",
    paragraphs: [
      "Many years ago, an English family were living in China.\nOne evening an important Chinese officer came to visit them. It got later and later, and he still did not go, so his hostess invited him to have dinner with them. But she had very little food in the house, so she quickly went to the kitchen and spoke to her Chinese cook.",
      "He said, 'It is all right. You will have a very good dinner.'\nWhen they all sat down to eat, the lady was very surprised, because there was a lot of very good food on the table.",
      "After the dinner, the hostess ran to the kitchen and said to the cook, 'How did you make such a good meal in half an hour?'\n'I did not make it, madam,' he said. 'I sent one of the servants to the Chinese officer's house, and he brought back the Chinese officer's dinner.'"
],
    summaryUz: "Xitoyda yashovchi ingliz oilasiga muhim xitoylik zobit mehmonga kelib, kechgacha qolib ketadi. Uy bekasi mehmondorchilik uchun kechki ovqatga taklif qiladi, ammo uyda ovqat kam edi. Oshpaz esa tashvishlanmaslikni aytadi. Dasturxonga shohona taomlar tortilgach, beka yarim soatda buni qanday pishirganini so'raydi. Oshpaz: 'Men pishirmadim, xizmatkorni zobitning uyiga yubordim, u zobitning o'z kechki ovqatini olib keldi!' deb javob beradi.",
    vocabulary: [
      {
            "word": "hostess",
            "pos": "n.",
            "phonetic": "[ˈhəʊstəs]",
            "translationUz": "uy bekasi, mezbon ayol",
            "definitionEn": "A woman who receives or entertains guests.",
            "exampleSentence": "The polite hostess invited the guest to stay for dinner."
      },
      {
            "word": "officer",
            "pos": "n.",
            "phonetic": "[ˈɒfɪsə]",
            "translationUz": "zobit, mansabdor",
            "definitionEn": "A person holding a position of authority in the military or government.",
            "exampleSentence": "An important military officer paid them a visit."
      },
      {
            "word": "cook",
            "pos": "n.",
            "phonetic": "[kʊk]",
            "translationUz": "oshpaz",
            "definitionEn": "A person who prepares and cooks food.",
            "exampleSentence": "She consulted her skilled Chinese cook in the kitchen."
      },
      {
            "word": "servant",
            "pos": "n.",
            "phonetic": "[ˈsɜːvənt]",
            "translationUz": "xizmatkor",
            "definitionEn": "A person who performs domestic duties for another in a household.",
            "exampleSentence": "The servant fetched the prepared dinner trays."
      },
      {
            "word": "half an hour",
            "pos": "n. phr.",
            "phonetic": "[hɑːf ən ˈaʊə]",
            "translationUz": "yarim soat",
            "definitionEn": "A period of thirty minutes.",
            "exampleSentence": "How did you cook all this in just half an hour?"
      },
      {
            "word": "bring back",
            "pos": "phr. v.",
            "phonetic": "[brɪŋ bæk]",
            "translationUz": "qaytarib olib kelmoq",
            "definitionEn": "To return with something from another place.",
            "exampleSentence": "He brought back dishes from the officer's home."
      }
],
    reproductionOutline: [
      "Years ago in China, an English family hosted an influential Chinese officer.",
      "As night fell and the officer lingered, the hostess courteously extended a dinner invitation despite an empty pantry.",
      "The house cook confidently promised a superb banquet within thirty minutes.",
      "The dining table was miraculously laden with lavish delicacies, astonishing the hostess.",
      "After dinner, the cook admitted he had not cooked at all: he dispatched a servant to fetch the officer's own ready dinner from his estate!"
],
    modelRetelling: "Many years ago, an English family resided in China. One evening, an esteemed Chinese officer came calling and stayed so late that the hostess felt obliged to invite him to dinner. Anxious because their pantry was virtually bare, she hurried into the kitchen to alert her Chinese cook. Unperturbed, the cook assured her that a feast would be served. Soon, the table was overflowing with delicious dishes. Wondering how on earth such a banquet had materialized in thirty minutes, the hostess questioned the cook. He chucked and confessed: knowing the officer was not at home, he had sent a servant to the officer's mansion to collect the dinner his own private chefs had already prepared!",
    questions: [
      {
            "id": "s28-q1",
            "order": 1,
            "question": "When did this story happen?",
            "modelAnswer": "This story happened many years ago.",
            "keywords": [
                  "many years ago"
            ],
            "options": [
                  "Many years ago",
                  "Last year",
                  "During World War Two",
                  "Two weeks ago"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hodisa ko'p yillar oldin yuz bergan: 'Many years ago'."
      },
      {
            "id": "s28-q2",
            "order": 2,
            "question": "Where were the English family living?",
            "modelAnswer": "They were living in China.",
            "keywords": [
                  "living in China"
            ],
            "options": [
                  "In China",
                  "In London",
                  "In Japan",
                  "In India"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ingliz oilasi Xitoyda yashayotgan edi."
      },
      {
            "id": "s28-q3",
            "order": 3,
            "question": "What happened one evening?",
            "modelAnswer": "An important Chinese officer came to visit them.",
            "keywords": [
                  "important Chinese officer came to visit"
            ],
            "options": [
                  "An important Chinese officer came to visit them",
                  "A thief broke into their kitchen",
                  "Their cook quit his job",
                  "A typhoon struck the city"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir oqshom muhim xitoylik zobit mehmonga keldi."
      },
      {
            "id": "s28-q4",
            "order": 4,
            "question": "What did the hostess do?",
            "modelAnswer": "The hostess invited him to have dinner with them.",
            "keywords": [
                  "invited him to have dinner"
            ],
            "options": [
                  "She invited him to have dinner with them",
                  "She politely asked him to leave",
                  "She served him hot tea and cake",
                  "She phoned his wife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uy bekasi uni birga kechki ovqatlanishga taklif qildi."
      },
      {
            "id": "s28-q5",
            "order": 5,
            "question": "Why did she do this?",
            "modelAnswer": "Because it got later and later, and he still did not go.",
            "keywords": [
                  "got later and later",
                  "still did not go"
            ],
            "options": [
                  "Because it got later and later and he still did not go",
                  "Because it was his birthday",
                  "Because she wanted a military favour",
                  "Because he brought expensive gifts"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki vaqt kech bo'lib borayotgan, mehmon esa ketmayotgan edi."
      },
      {
            "id": "s28-q6",
            "order": 6,
            "question": "Why did she go to the kitchen?",
            "modelAnswer": "Because she had very little food in the house and needed to speak to her cook.",
            "keywords": [
                  "very little food in the house",
                  "spoke to her Chinese cook"
            ],
            "options": [
                  "Because she had very little food and needed to talk to the cook",
                  "To wash the dirty dishes",
                  "To cook the meat herself",
                  "To find a bottle of wine"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uyda ovqat kam bo'lgani uchun oshpazi bilan gaplashgani oshxonaga kirdi."
      },
      {
            "id": "s28-q7",
            "order": 7,
            "question": "What did the cook say?",
            "modelAnswer": "He said, 'It is all right. You will have a very good dinner.'",
            "keywords": [
                  "all right",
                  "very good dinner"
            ],
            "options": [
                  "'It is all right. You will have a very good dinner.'",
                  "'I have nothing to cook, ask him to leave.'",
                  "'Give me ten pounds to go shopping.'",
                  "'We must serve plain boiled rice.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Oshpaz: 'Hammasi joyida, ajoyib kechki ovqat bo'ladi' deb aytdi."
      },
      {
            "id": "s28-q8",
            "order": 8,
            "question": "What did the English family and the Chinese officer do then?",
            "modelAnswer": "They all sat down to eat.",
            "keywords": [
                  "sat down to eat"
            ],
            "options": [
                  "They all sat down to eat",
                  "They played chess in the parlour",
                  "They went for a walk in the garden",
                  "They listened to Chinese music"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ularning barchasi ovqatlanish uchun o'tirishdi."
      },
      {
            "id": "s28-q9",
            "order": 9,
            "question": "How did the lady feel?",
            "modelAnswer": "The lady was very surprised.",
            "keywords": [
                  "very surprised"
            ],
            "options": [
                  "She was very surprised",
                  "She was disappointed",
                  "She was furious with the cook",
                  "She was frightened"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uy bekasi juda hayron qoldi: 'the lady was very surprised'."
      },
      {
            "id": "s28-q10",
            "order": 10,
            "question": "Why did she feel like this?",
            "modelAnswer": "Because there was a lot of very good food on the table.",
            "keywords": [
                  "lot of very good food on the table"
            ],
            "options": [
                  "Because there was a lot of very good food on the table",
                  "Because the officer refused to eat",
                  "Because the food was burnt",
                  "Because the cook dropped the soup"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki stolda juda ko'p mazali ovqatlar tortilgan edi."
      },
      {
            "id": "s28-q11",
            "order": 11,
            "question": "What did she do after the dinner?",
            "modelAnswer": "After the dinner, she ran to the kitchen.",
            "keywords": [
                  "ran to the kitchen"
            ],
            "options": [
                  "She ran to the kitchen",
                  "She went straight to bed",
                  "She walked the officer to his carriage",
                  "She washed the silver plates"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kechki ovqatdan so'ng oshxonaga yugurib kirdi."
      },
      {
            "id": "s28-q12",
            "order": 12,
            "question": "What did she say to the cook?",
            "modelAnswer": "She said, 'How did you make such a good meal in half an hour?'",
            "keywords": [
                  "How did you make such a good meal in half an hour"
            ],
            "options": [
                  "'How did you make such a good meal in half an hour?'",
                  "'How much did all this food cost?'",
                  "'Who gave you permission to buy lobster?'",
                  "'Did you borrow food from our neighbours?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Yarim soatda bunday ajoyib ovqatni qanday pishirding?' deb so'radi."
      },
      {
            "id": "s28-q13",
            "order": 13,
            "question": "What was his answer?",
            "modelAnswer": "He answered that he sent a servant to the Chinese officer's house to bring back the officer's own dinner.",
            "keywords": [
                  "sent one of the servants",
                  "officer's house",
                  "brought back the Chinese officer's dinner"
            ],
            "options": [
                  "He sent a servant to the officer's house to bring back the officer's own dinner",
                  "He had prepared everything yesterday afternoon",
                  "He bought cooked meals from a nearby French restaurant",
                  "He had magic cooking ingredients"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U zobitning uyiga xizmatkor jo'natib, zobitning o'ziga tayyorlangan kechki ovqatni olib kelganini aytdi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s28-tf1",
            "order": 1,
            "statement": "The English family lived in Shanghai during the nineteenth century.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda qaysi shahar yoki asr ekanligi aytilmagan, faqat Xitoyda ekanligi aytilgan."
      },
      {
            "id": "s28-tf2",
            "order": 2,
            "statement": "The hostess invited the guest because he stayed until late.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'It got later and later, and he still did not go, so his hostess invited him'."
      },
      {
            "id": "s28-tf3",
            "order": 3,
            "statement": "The family pantry was fully stocked with gourmet food.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uyda ovqat deyarli yo'q edi ('she had very little food in the house')."
      },
      {
            "id": "s28-tf4",
            "order": 4,
            "statement": "The cook prepared all the hot dishes in twenty minutes on a wood stove.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Oshpaz o'zi pishirmagan, balki tashqaridan olib keldirgan ('I did not make it')."
      },
      {
            "id": "s28-tf5",
            "order": 5,
            "statement": "The meal served at the table was actually prepared by the guest's own kitchen staff.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Zobitning o'z uyida o'zi uchun tayyorlangan kechki ovqat olib kelingan edi."
      },
      {
            "id": "s28-tf6",
            "order": 6,
            "statement": "The Chinese officer noticed that the food was from his own home and complained.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda zobit ovqatni tanigan yoki tanimagani haqida ma'lumot yo'q."
      }
]
  },
  {
    id: 'story-29',
    storyNumber: 29,
    title: "Eat, Coat!",
    titleUz: "Ye, to'nim!",
    cefrLevel: 'A2',
    wordCount: 161,
    readingTimeMinutes: 1,
    storyText: "One day Nasreddin went to a big dinner party. He was wearing old clothes, and when he came in, nobody looked at him and nobody gave him a seat at a table.\nSo Nasreddin went home, put on his best clothes, and then went back to the party. The host at once got up and came to meet him. He took him to the best table, gave him a good seat, and offered him the best dishes.\nNasreddin put his coat in the food and said, 'Eat, coat!'\nThe other guests were very surprised and said, 'What are you doing?'\nNasreddin answered, 'I was inviting my coat to eat. When I was wearing my old clothes, nobody looked at me or offered me food or drink. Then I went home and came back in these clothes, and you gave me the best food and drink. So you gave me these things for my clothes, not for myself.'",
    paragraphs: [
      "One day Nasreddin went to a big dinner party. He was wearing old clothes, and when he came in, nobody looked at him and nobody gave him a seat at a table.",
      "So Nasreddin went home, put on his best clothes, and then went back to the party. The host at once got up and came to meet him. He took him to the best table, gave him a good seat, and offered him the best dishes.",
      "Nasreddin put his coat in the food and said, 'Eat, coat!'\nThe other guests were very surprised and said, 'What are you doing?'",
      "Nasreddin answered, 'I was inviting my coat to eat. When I was wearing my old clothes, nobody looked at me or offered me food or drink. Then I went home and came back in these clothes, and you gave me the best food and drink. So you gave me these things for my clothes, not for myself.'"
],
    summaryUz: "Nasriddin eski kiyimda to'yga borganida hech kim unga qaramaydi va joy bermaydi. U uyiga borib eng qimmatbaho to'nini kiyib qaytganida, mezbon yugurib kutib olib, eng to'rga o'tqazadi va shohona taomlar tortadi. Nasriddin to'nining etagini oshga botirib: 'Ye, to'nim, ye!' deydi. Sababini so'raganlarga: 'Eski kiyimda kelganimda hech kim qaramadi, yangi to'nda kelganimda esa hurmat qildingiz. Demak bu ziyofat men uchun emas, to'nim uchun berildi!' deb saboq beradi.",
    vocabulary: [
      {
            "word": "dinner party",
            "pos": "n.",
            "phonetic": "[ˈdɪnə ˈpɑːti]",
            "translationUz": "ziyofat, kechki mehmondorchilik",
            "definitionEn": "A social gathering at which a formal dinner is eaten.",
            "exampleSentence": "He received an invitation to a grand dinner party."
      },
      {
            "word": "seat",
            "pos": "n.",
            "phonetic": "[siːt]",
            "translationUz": "o'rindiq, joy",
            "definitionEn": "A place in which to sit at a table or venue.",
            "exampleSentence": "Nobody offered him a comfortable seat at the table."
      },
      {
            "word": "host",
            "pos": "n.",
            "phonetic": "[həʊst]",
            "translationUz": "mezbon, uy egasi",
            "definitionEn": "A person who receives or entertains other people as guests.",
            "exampleSentence": "The host rose eagerly to welcome the smartly dressed man."
      },
      {
            "word": "dishes",
            "pos": "n.",
            "phonetic": "[ˈdɪʃɪz]",
            "translationUz": "taomlar",
            "definitionEn": "Food prepared in a particular way as part of a meal.",
            "exampleSentence": "He was served the finest dishes in the banquet."
      },
      {
            "word": "invite",
            "pos": "v.",
            "phonetic": "[ɪnˈvaɪt]",
            "translationUz": "taklif qilmoq",
            "definitionEn": "To request the presence or participation of someone.",
            "exampleSentence": "I was inviting my coat to eat this delicious pilaf."
      },
      {
            "word": "for myself",
            "pos": "prep. phr.",
            "phonetic": "[fɔː maɪˈself]",
            "translationUz": "o'zim uchun",
            "definitionEn": "Intended for my personal identity, not my attire.",
            "exampleSentence": "You gave these treats to my coat, not to myself."
      }
],
    reproductionOutline: [
      "Nasreddin attended a grand banquet in shabby, worn clothes and was utterly snubbed by guests and host.",
      "He returned home, donned his most luxurious coat, and returned to the festivities.",
      "Instantly, the host bowed, escorted him to the head table, and served top-tier delicacies.",
      "To everyone's shock, Nasreddin dipped his coat sleeve into the platter, commanding: \"Eat, coat!\"",
      "When questioned, he wittily explained that the feast was clearly intended for his clothes rather than his person."
],
    modelRetelling: "Arriving at a high-society dinner party dressed in worn, faded garments, Nasreddin found himself completely ignored—nobody greeted him, and not a single soul offered him a seat. Without complaint, Nasreddin slipped away home, dressed in his most magnificent, ornate coat, and strolled back into the banquet. Upon his entrance, the host sprang up, greeted him lavishly, ushered him to the finest table, and served the best delicacies. Rather than eating, Nasreddin dipped his sleeve directly into the bowl, exclaiming: 'Eat, coat!' Perplexed, the onlookers demanded an explanation. Nasreddin coolly remarked that when he arrived in rags, he was treated as invisible, but his fine attire earned royal treatment; therefore, the feast was clearly intended for the coat, not for him!",
    questions: [
      {
            "id": "s29-q1",
            "order": 1,
            "question": "What did Nasreddin do one day?",
            "modelAnswer": "One day Nasreddin went to a big dinner party.",
            "keywords": [
                  "went to a big dinner party"
            ],
            "options": [
                  "He went to a big dinner party",
                  "He bought a new luxury coat",
                  "He hosted a party at his own house",
                  "He went to the local bathhouse"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni Nasriddin katta ziyofatga bordi."
      },
      {
            "id": "s29-q2",
            "order": 2,
            "question": "What was he wearing?",
            "modelAnswer": "He was wearing old clothes.",
            "keywords": [
                  "wearing old clothes"
            ],
            "options": [
                  "He was wearing old clothes",
                  "He was wearing a silk robe",
                  "He was in his nightgown",
                  "He was wearing a uniform"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eski kiyimlarini kiyib olgan edi: 'wearing old clothes'."
      },
      {
            "id": "s29-q3",
            "order": 3,
            "question": "What happened when he came in?",
            "modelAnswer": "Nobody looked at him and nobody gave him a seat at a table.",
            "keywords": [
                  "nobody looked at him",
                  "nobody gave him a seat"
            ],
            "options": [
                  "Nobody looked at him and nobody gave him a seat",
                  "Everyone cheered and applauded",
                  "The host kicked him out",
                  "He was seated next to the mayor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U kirganida hech kim unga qaramadi va hech kim o'tirishga joy bermadi."
      },
      {
            "id": "s29-q4",
            "order": 4,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "He went home, put on his best clothes, and went back to the party.",
            "keywords": [
                  "went home",
                  "put on his best clothes",
                  "went back"
            ],
            "options": [
                  "He went home, put on his best clothes, and went back",
                  "He started an argument with the host",
                  "He sat on the kitchen floor",
                  "He went to a restaurant alone"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U uyiga borib, eng yaxshi kiyimlarini kiyib qaytib keldi."
      },
      {
            "id": "s29-q5",
            "order": 5,
            "question": "What happened when he went back to the party?",
            "modelAnswer": "The host at once got up, came to meet him, took him to the best table, gave him a good seat, and offered him the best dishes.",
            "keywords": [
                  "host got up",
                  "best table",
                  "best dishes"
            ],
            "options": [
                  "The host greeted him warmly and took him to the best table with fine dishes",
                  "The guards refused to open the gate",
                  "He was asked to pay an entry fee",
                  "The party was already over"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Mezbon darhol o'rnidan turib kutib oldi, eng yaxshi stolga o'tqazib sara taomlarni tortdi."
      },
      {
            "id": "s29-q6",
            "order": 6,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "Nasreddin put his coat in the food.",
            "keywords": [
                  "put his coat in the food"
            ],
            "options": [
                  "Nasreddin put his coat in the food",
                  "He ate greedily with both hands",
                  "He stuffed his pockets with bread",
                  "He spilled wine on the table"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin to'nini ovqatga botirdi: 'put his coat in the food'."
      },
      {
            "id": "s29-q7",
            "order": 7,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Eat, coat!'",
            "keywords": [
                  "Eat, coat"
            ],
            "options": [
                  "'Eat, coat!'",
                  "'Thank you for this banquet.'",
                  "'This food is not salty enough.'",
                  "'Who cooked this delicious meal?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Ye, to'nim!' dedi."
      },
      {
            "id": "s29-q8",
            "order": 8,
            "question": "How did the other guests feel?",
            "modelAnswer": "The other guests were very surprised.",
            "keywords": [
                  "very surprised"
            ],
            "options": [
                  "They were very surprised",
                  "They were laughing aloud",
                  "They were offended and left",
                  "They completely ignored him"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Boshqa mehmonlar juda hayron qolishdi: 'very surprised'."
      },
      {
            "id": "s29-q9",
            "order": 9,
            "question": "What did they say?",
            "modelAnswer": "They said, 'What are you doing?'",
            "keywords": [
                  "What are you doing"
            ],
            "options": [
                  "'What are you doing?'",
                  "'Are you out of your mind?'",
                  "'Take off your coat immediately!'",
                  "'Can you give us some pilaf?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular: 'Nima qilyapsiz?' deb so'rashdi."
      },
      {
            "id": "s29-q10",
            "order": 10,
            "question": "What was Nasreddin's answer?",
            "modelAnswer": "He answered that when he was in old clothes nobody offered him anything, but in fine clothes he received the best dishes, proving the food was for his clothes and not for himself.",
            "keywords": [
                  "inviting my coat to eat",
                  "gave me these things for my clothes",
                  "not for myself"
            ],
            "options": [
                  "He explained that the honour was given to his clothes, not to him as a person",
                  "He said the coat was very hungry after the walk",
                  "He claimed his coat was magical",
                  "He apologized for staining the tablecloth"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eski kiyimda hech kim qaramaganini, to'n kiyganda esa izzat qilinganini aytib, bu taomlar o'zi uchun emas, to'ni uchun ekanini bildirdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s29-tf1",
            "order": 1,
            "statement": "Nasreddin was initially welcomed with great fanfare in his old clothes.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Eski kiyimda kelganida hech kim unga qaramagan ham ('nobody looked at him')."
      },
      {
            "id": "s29-tf2",
            "order": 2,
            "statement": "Nasreddin went back home specifically to change into his finest clothes.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Nasreddin went home, put on his best clothes, and then went back'."
      },
      {
            "id": "s29-tf3",
            "order": 3,
            "statement": "The host recognized that Nasreddin was a royal nobleman.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uning zodagonligi yoki martabasi haqida ma'lumot yo'q."
      },
      {
            "id": "s29-tf4",
            "order": 4,
            "statement": "Nasreddin fed the dishes to a stray dog under the banquet table.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U to'nini ovqatga botirib 'Ye, to'nim' degan."
      },
      {
            "id": "s29-tf5",
            "order": 5,
            "statement": "The other guests were bewildered by Nasreddin's bizarre behaviour.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The other guests were very surprised'."
      },
      {
            "id": "s29-tf6",
            "order": 6,
            "statement": "Nasreddin's action was a satirical lesson about superficial judgment based on clothing.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Nasriddin odamlarni tashqi kiyimiga qarab baholash xato ekanini ko'rsatib berdi."
      }
]
  }
,
  {
    id: 'story-30',
    storyNumber: 30,
    title: "The Pot That Died",
    titleUz: "Qozonning o'limi",
    cefrLevel: 'A2',
    wordCount: 162,
    readingTimeMinutes: 1,
    storyText: "Nasreddin wanted a big pot for a party, so he borrowed one from a neighbour. After the party he took it back with another small pot inside.\n'Your pot had a baby while it was with us,' he said.\nOf course, the neighbour was very pleased, and when Nasreddin came to borrow the big pot again for another party, he lent it to him very gladly.\nThis time Nasreddin did not bring the pot back, so after a few days the man went to Nasreddin's house.\n'What has happened to my big pot?' he asked. 'Why have you not brought it back yet?'\n'Oh, the big pot?' said Nasreddin. 'It died while it was with us.'\n'Died?' said the neighbour angrily. 'But pots do not die!'\n'Why do you say that?' answered Nasreddin. 'When I said, \"The pot has had a baby\", you did not say, \"Pots do not have babies\", did you?'",
    paragraphs: [
      "Nasreddin wanted a big pot for a party, so he borrowed one from a neighbour. After the party he took it back with another small pot inside.\n'Your pot had a baby while it was with us,' he said.",
      "Of course, the neighbour was very pleased, and when Nasreddin came to borrow the big pot again for another party, he lent it to him very gladly.",
      "This time Nasreddin did not bring the pot back, so after a few days the man went to Nasreddin's house.\n'What has happened to my big pot?' he asked. 'Why have you not brought it back yet?'\n'Oh, the big pot?' said Nasreddin. 'It died while it was with us.'",
      "'Died?' said the neighbour angrily. 'But pots do not die!'\n'Why do you say that?' answered Nasreddin. 'When I said, \"The pot has had a baby\", you did not say, \"Pots do not have babies\", did you?'"
],
    summaryUz: "Nasriddin qo'shnisidan katta qozon qarzga oladi. Qaytarayotganda ichiga kichik qozoncha solib: 'Qozoningiz biznikida tug'di' deydi. Qo'shnisi xursand bo'ladi. Keyingi safar yana qozon olib, qaytarmaydi. Qo'shnisi so'rab kelganda esa: 'Qozoningiz o'lib qoldi' deydi. Qo'shnisi: 'Qozon ham o'ladimi?!' deb baqirsa, Nasriddin: 'Qozon tug'di deganimda qozon tug'maydi demaganding-ku?!' deb javob beradi.",
    vocabulary: [
      {
            "word": "pot",
            "pos": "n.",
            "phonetic": "[pɒt]",
            "translationUz": "qozon",
            "definitionEn": "A rounded deep container used for cooking.",
            "exampleSentence": "He needed a big cooking pot for the party."
      },
      {
            "word": "borrow",
            "pos": "v.",
            "phonetic": "[ˈbɒrəʊ]",
            "translationUz": "qarzga olmoq (foydalanishga)",
            "definitionEn": "To take and use something belonging to someone else with the intention of returning it.",
            "exampleSentence": "Nasreddin borrowed a metal pot from his neighbour."
      },
      {
            "word": "have a baby",
            "pos": "v. phr.",
            "phonetic": "[hæv ə ˈbeɪbi]",
            "translationUz": "tug'moq, bolalamoq",
            "definitionEn": "To give birth to an offspring.",
            "exampleSentence": "Your big pot had a baby while it was at our house."
      },
      {
            "word": "gladly",
            "pos": "adv.",
            "phonetic": "[ˈɡlædli]",
            "translationUz": "mamnuniyat bilan, jon deb",
            "definitionEn": "With pleasure; willingly.",
            "exampleSentence": "The greedy neighbour lent it to him very gladly."
      },
      {
            "word": "die",
            "pos": "v.",
            "phonetic": "[daɪ]",
            "translationUz": "o'lmoq, qazosi yetmoq",
            "definitionEn": "To stop living; cease to exist.",
            "exampleSentence": "Alas, your beloved pot died yesterday."
      },
      {
            "word": "angrily",
            "pos": "adv.",
            "phonetic": "[ˈæŋɡrəli]",
            "translationUz": "jahli chiqib, g'azab bilan",
            "definitionEn": "In a manner showing strong annoyance or displeasure.",
            "exampleSentence": "Pots do not die! the neighbour shouted angrily."
      }
],
    reproductionOutline: [
      "Nasreddin borrowed a large cooking pot from his neighbour for a party.",
      "He returned it with a small pot nested inside, claiming the pot had given birth to a baby.",
      "Delighted by the free small pot, the neighbour gladly lent the big pot a second time.",
      "When Nasreddin failed to return it, the neighbour visited and was told the pot had died.",
      "When the neighbour protested that pots cannot die, Nasreddin countered that if pots can have babies, they can surely die!"
],
    modelRetelling: "Needing a large pot for an upcoming celebration, Nasreddin borrowed one from his neighbour. When returning the utensil after the feast, he nestled a miniature pot inside and told the owner that the large pot had given birth. Thrilled by the unearned bonus, the neighbour happily agreed when Nasreddin asked to borrow the big pot a second time. Days went by without the pot returning, so the neighbour visited Nasreddin's cottage. When asked, Nasreddin solemn-faced revealed that the pot had passed away. Furious, the neighbour shouted that inanimate objects cannot die. Nasreddin cleverly retorted that since the neighbour had willingly accepted that pots can give birth, he must also accept that pots can die!",
    questions: [
      {
            "id": "s30-q1",
            "order": 1,
            "question": "What did Nasreddin want?",
            "modelAnswer": "Nasreddin wanted a big pot.",
            "keywords": [
                  "big pot"
            ],
            "options": [
                  "A big pot",
                  "A sack of flour",
                  "A horse and cart",
                  "A sharp knife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddinga katta qozon kerak edi: 'Nasreddin wanted a big pot'."
      },
      {
            "id": "s30-q2",
            "order": 2,
            "question": "What did he want it for?",
            "modelAnswer": "He wanted it for a party.",
            "keywords": [
                  "for a party"
            ],
            "options": [
                  "For a party",
                  "To boil water for sheep",
                  "To wash clothes",
                  "To store grain"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni mehmondorchilik (ziyofat) uchun xohlagan edi."
      },
      {
            "id": "s30-q3",
            "order": 3,
            "question": "What did he do?",
            "modelAnswer": "He borrowed one from a neighbour.",
            "keywords": [
                  "borrowed one from a neighbour"
            ],
            "options": [
                  "He borrowed one from a neighbour",
                  "He bought one at the market",
                  "He stole one from a restaurant",
                  "He made one from clay"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'shnisidan bitta qozonni qarzga oldi."
      },
      {
            "id": "s30-q4",
            "order": 4,
            "question": "What did he do after the party?",
            "modelAnswer": "He took it back with another small pot inside.",
            "keywords": [
                  "took it back",
                  "another small pot inside"
            ],
            "options": [
                  "He took it back with another small pot inside",
                  "He broke it into pieces",
                  "He kept it for a month",
                  "He painted it black"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ziyofatdan keyin ichiga kichik qozoncha solib qaytarib olib bordi."
      },
      {
            "id": "s30-q5",
            "order": 5,
            "question": "What did he say?",
            "modelAnswer": "He said, 'Your pot had a baby while it was with us.'",
            "keywords": [
                  "pot had a baby"
            ],
            "options": [
                  "'Your pot had a baby while it was with us.'",
                  "'Here is your clean pot, thank you.'",
                  "'I cooked soup in it yesterday.'",
                  "'This pot has a crack in the bottom.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Qozoningiz biznikida tuqdi' dedi."
      },
      {
            "id": "s30-q6",
            "order": 6,
            "question": "How did his neighbour feel?",
            "modelAnswer": "The neighbour was very pleased.",
            "keywords": [
                  "very pleased"
            ],
            "options": [
                  "He was very pleased",
                  "He was suspicious and called police",
                  "He was confused and threw it away",
                  "He was offended"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qo'shnisi bundan juda xursand bo'ldi: 'The neighbour was very pleased'."
      },
      {
            "id": "s30-q7",
            "order": 7,
            "question": "What did Nasreddin do after that in the story?",
            "modelAnswer": "He came to borrow the big pot again for another party.",
            "keywords": [
                  "borrow the big pot again"
            ],
            "options": [
                  "He came to borrow the big pot again for another party",
                  "He bought the neighbour a gift",
                  "He moved to another village",
                  "He invited the neighbour to dinner"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yana bir ziyofat uchun o'sha katta qozonni qaytadan qarzga so'rab keldi."
      },
      {
            "id": "s30-q8",
            "order": 8,
            "question": "What did his neighbour do?",
            "modelAnswer": "He lent it to him very gladly.",
            "keywords": [
                  "lent it to him very gladly"
            ],
            "options": [
                  "He lent it to him very gladly",
                  "He refused to open the door",
                  "He asked for money upfront",
                  "He said the pot was broken"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qo'shnisi mamnuniyat bilan qozonni berdi."
      },
      {
            "id": "s30-q9",
            "order": 9,
            "question": "What happened to the pot this time?",
            "modelAnswer": "This time Nasreddin did not bring the pot back.",
            "keywords": [
                  "did not bring the pot back"
            ],
            "options": [
                  "Nasreddin did not bring the pot back",
                  "The pot had twins",
                  "The pot was stolen by thieves",
                  "Nasreddin washed it in the river"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu safar Nasriddin qozonni qaytarib olib bormadi."
      },
      {
            "id": "s30-q10",
            "order": 10,
            "question": "What did the neighbour do then?",
            "modelAnswer": "After a few days the man went to Nasreddin's house.",
            "keywords": [
                  "went to Nasreddin's house"
            ],
            "options": [
                  "He went to Nasreddin's house",
                  "He went to court",
                  "He bought a replacement pot",
                  "He gave up on the pot"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir necha kundan so'ng u Nasriddinning uyiga bordi."
      },
      {
            "id": "s30-q11",
            "order": 11,
            "question": "What did he say to Nasreddin?",
            "modelAnswer": "He asked, 'What has happened to my big pot? Why have you not brought it back yet?'",
            "keywords": [
                  "What has happened to my big pot",
                  "Why have you not brought it back yet"
            ],
            "options": [
                  "'What has happened to my big pot? Why have you not brought it back yet?'",
                  "'Do you need another pot for tomorrow?'",
                  "'Did your party go well?'",
                  "'Can I borrow your donkey?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qozoniga nima bo'lganini va nega haligacha qaytarmaganini so'radi."
      },
      {
            "id": "s30-q12",
            "order": 12,
            "question": "What was Nasreddin's answer?",
            "modelAnswer": "Nasreddin said, 'It died while it was with us.'",
            "keywords": [
                  "It died while it was with us"
            ],
            "options": [
                  "'It died while it was with us.'",
                  "'I sold it at the bazaar.'",
                  "'My wife is still cooking soup in it.'",
                  "'It gave birth to three more pots.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'U biznikida o'lib qoldi' deb javob berdi."
      },
      {
            "id": "s30-q13",
            "order": 13,
            "question": "What did the neighbour say then?",
            "modelAnswer": "He said, 'Died? But pots do not die!'",
            "keywords": [
                  "pots do not die"
            ],
            "options": [
                  "'Died? But pots do not die!'",
                  "'Oh, that is very sad news.'",
                  "'When did the funeral take place?'",
                  "'Give me the small pot then.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qo'shnisi: 'O'ldi deysanmi? Axir qozonlar o'lmaydi-ku!' dedi."
      },
      {
            "id": "s30-q14",
            "order": 14,
            "question": "How did he say it?",
            "modelAnswer": "He said it angrily.",
            "keywords": [
                  "angrily"
            ],
            "options": [
                  "Angrily",
                  "Calmly",
                  "Politely",
                  "Laughing out loud"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni g'azablanib aytdi: 'angrily'."
      },
      {
            "id": "s30-q15",
            "order": 15,
            "question": "What did Nasreddin answer?",
            "modelAnswer": "Nasreddin answered, 'When I said, \"The pot has had a baby\", you did not say, \"Pots do not have babies\", did you?'",
            "keywords": [
                  "pot has had a baby",
                  "pots do not have babies"
            ],
            "options": [
                  "'When I said it had a baby, you didn't say pots don't have babies, did you?'",
                  "'You should pray for the soul of the pot.'",
                  "'I will pay you two copper coins tomorrow.'",
                  "'A pot is just like any living animal.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Qozon tug'di deganimda qozon tug'maydi demaganding, o'lishiga nega ishonmaysan?' deb javob berdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s30-tf1",
            "order": 1,
            "statement": "Nasreddin borrowed the neighbour's big pot on two separate occasions.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U avval bir marta, keyin yana bir marta qarzga olgan."
      },
      {
            "id": "s30-tf2",
            "order": 2,
            "statement": "The neighbour angrily refused the little bonus pot the first time.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Qo'shnisi kichik qozondan juda xursand bo'lgan edi ('the neighbour was very pleased')."
      },
      {
            "id": "s30-tf3",
            "order": 3,
            "statement": "The big pot was made of pure silver and had two golden handles.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda qozonning nimasidan yasalgani haqida ma'lumot yo'q."
      },
      {
            "id": "s30-tf4",
            "order": 4,
            "statement": "The neighbour gladly lent the pot the second time because he hoped for more free pots.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U ochko'zlik qilib qozonni yana xursandlik bilan berdi ('lent it to him very gladly')."
      },
      {
            "id": "s30-tf5",
            "order": 5,
            "statement": "Nasreddin honestly returned the pot in exchange for a bag of rice.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U qozonni qaytarmadi, balki 'o'lib qoldi' deb o'zlashtirdi."
      },
      {
            "id": "s30-tf6",
            "order": 6,
            "statement": "Nasreddin used the neighbour's own greedy logic to expose his hypocrisy.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Nasriddin agar tug'ishga ishonsa, o'limga ham ishonishi kerakligini isbotlab qo'shnisining munofiqligini ko'rsatdi."
      }
]
  },
  {
    id: 'story-31',
    storyNumber: 31,
    title: "The Runaway Horse",
    titleUz: "Qochgan ot",
    cefrLevel: 'A2',
    wordCount: 169,
    readingTimeMinutes: 1,
    storyText: "One day Nasreddin's donkey was ill, so he borrowed a horse from an officer. It was a big, strong animal, and usually nobody rode it except the officer. It tried to throw Nasreddin off, but he stayed on it. Then it suddenly began to run away with him. He tried to turn it towards his house, and he tried to stop it, but it continued to run the opposite way.\nOne of Nasreddin's friends was working in his field and saw him riding very fast towards this friend's house. He thought, 'Why is Nasreddin riding so fast? Perhaps he has some bad news. Perhaps he is riding to my house to give me some bad news!'\nHe was frightened and shouted to Nasreddin, 'Nasreddin! Nasreddin! What is the matter? Where are you going?'\n'I don't know!' Nasreddin shouted back. 'This stupid animal hasn't told me!'",
    paragraphs: [
      "One day Nasreddin's donkey was ill, so he borrowed a horse from an officer. It was a big, strong animal, and usually nobody rode it except the officer. It tried to throw Nasreddin off, but he stayed on it. Then it suddenly began to run away with him. He tried to turn it towards his house, and he tried to stop it, but it continued to run the opposite way.",
      "One of Nasreddin's friends was working in his field and saw him riding very fast towards this friend's house. He thought, 'Why is Nasreddin riding so fast? Perhaps he has some bad news. Perhaps he is riding to my house to give me some bad news!'",
      "He was frightened and shouted to Nasreddin, 'Nasreddin! Nasreddin! What is the matter? Where are you going?'\n'I don't know!' Nasreddin shouted back. 'This stupid animal hasn't told me!'"
],
    summaryUz: "Nasriddinning eshagi kasal bo'lib, zobitdan katta kuchli ot qarz oladi. Ot uni tashlab yubormoqchi bo'ladi, so'ng birdan qochib ketadi. Nasriddin to'xtatmoqchi bo'ladi, lekin ot teskari tomonga jadal chopadi. Dalada ishlayotgan do'sti Nasriddinning o'qdek uchib kelayotganini ko'rib, yomon xabar bormikan deb qo'rqib ketadi: 'Nasriddin, nima bo'ldi, qayerga ketyapsan?!' deb baqiradi. Nasriddin esa: 'Bilmayman, bu ahmoq hayvon qayerga ketayotganini menga aytmadi!' deb javob qaytaradi.",
    vocabulary: [
      {
            "word": "ill",
            "pos": "adj.",
            "phonetic": "[ɪl]",
            "translationUz": "kasal, betob",
            "definitionEn": "Not in full health; sick.",
            "exampleSentence": "His poor donkey was ill and could not carry heavy loads."
      },
      {
            "word": "officer",
            "pos": "n.",
            "phonetic": "[ˈɒfɪsə]",
            "translationUz": "zobit, harbiy",
            "definitionEn": "A person holding a position of authority, especially military.",
            "exampleSentence": "He borrowed a fierce stallion from an army officer."
      },
      {
            "word": "throw off",
            "pos": "phr. v.",
            "phonetic": "[θrəʊ ɒf]",
            "translationUz": "ustidan uloqtirib tashlamoq",
            "definitionEn": "To dislodge or cause a rider to fall from an animal.",
            "exampleSentence": "The wild horse tried to throw the rider off."
      },
      {
            "word": "run away with",
            "pos": "phr. v.",
            "phonetic": "[rʌn əˈweɪ wɪð]",
            "translationUz": "olib qochmoq",
            "definitionEn": "To gallop uncontrollably carrying a rider.",
            "exampleSentence": "The powerful stallion bolted and ran away with him."
      },
      {
            "word": "opposite",
            "pos": "adj.",
            "phonetic": "[ˈɒpəzɪt]",
            "translationUz": "teskari, qarama-qarshi",
            "definitionEn": "Facing the other direction; completely different in direction.",
            "exampleSentence": "The horse charged in the opposite direction from his home."
      },
      {
            "word": "frightened",
            "pos": "adj.",
            "phonetic": "[ˈfraɪtnd]",
            "translationUz": "qo'rqqan, xavotirga tushgan",
            "definitionEn": "Afraid or anxious about something bad.",
            "exampleSentence": "His friend was frightened by the sudden frantic ride."
      }
],
    reproductionOutline: [
      "With his donkey sick, Nasreddin borrowed an officer's powerful horse.",
      "The spirited beast bucked to throw Nasreddin off, but failing that, bolted uncontrollably.",
      "Nasreddin tugged and turned the reins desperately, but the horse galloped straight across the fields.",
      "A farmer friend working in his field feared Nasreddin was racing toward his house with catastrophic news.",
      "Panic-stricken, the friend yelled to ask where he was heading; Nasreddin roared back that the stubborn animal hadn't informed him yet!"
],
    modelRetelling: "When his donkey fell ill, Nasreddin borrowed a formidable war horse from a military officer. Used only to its master, the beast bucked wildly to dislodge Nasreddin, but finding him clinging firmly, it bolted at full gallop. Nasreddin pulled hard on the reins, but the horse charged headlong in the opposite direction toward the open fields. A friend farming nearby noticed Nasreddin galloping furiously toward his home and panicked, assuming that only tragic news could prompt such reckless speed. Terrified, the farmer hollered out to ask what was wrong and where he was dashing. Desperately clinging to the mane, Nasreddin shouted back: 'How should I know? This stubborn beast hasn't told me yet!'",
    questions: [
      {
            "id": "s31-q1",
            "order": 1,
            "question": "What was the matter with Nasreddin's donkey one day?",
            "modelAnswer": "His donkey was ill.",
            "keywords": [
                  "donkey was ill"
            ],
            "options": [
                  "His donkey was ill",
                  "His donkey was stolen",
                  "His donkey was sold at the market",
                  "His donkey died of old age"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning eshagi betob bo'lib qolgan edi: 'Nasreddin's donkey was ill'."
      },
      {
            "id": "s31-q2",
            "order": 2,
            "question": "What did he do?",
            "modelAnswer": "He borrowed a horse from an officer.",
            "keywords": [
                  "borrowed a horse from an officer"
            ],
            "options": [
                  "He borrowed a horse from an officer",
                  "He walked to the city on foot",
                  "He bought a camel",
                  "He hired a donkey cart"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U zobitdan bitta otni qarzga oldi."
      },
      {
            "id": "s31-q3",
            "order": 3,
            "question": "What was the horse like?",
            "modelAnswer": "It was a big, strong animal.",
            "keywords": [
                  "big, strong animal"
            ],
            "options": [
                  "A big, strong animal",
                  "An old, slow mare",
                  "A tiny pony",
                  "A lame, gentle horse"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ot katta va baquvvat hayvon edi: 'a big, strong animal'."
      },
      {
            "id": "s31-q4",
            "order": 4,
            "question": "Who usually rode it?",
            "modelAnswer": "Usually nobody rode it except the officer.",
            "keywords": [
                  "nobody rode it except the officer"
            ],
            "options": [
                  "Nobody except the officer",
                  "All the village boys",
                  "The officer's children",
                  "Nasreddin's wife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Odatda zobitdan boshqa hech kim bu otni minmas edi."
      },
      {
            "id": "s31-q5",
            "order": 5,
            "question": "What did it try to do?",
            "modelAnswer": "It tried to throw Nasreddin off.",
            "keywords": [
                  "throw Nasreddin off"
            ],
            "options": [
                  "It tried to throw Nasreddin off",
                  "It tried to bite Nasreddin's leg",
                  "It sat down on the ground",
                  "It ran into the stable"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ot Nasriddinni ustidan uloqtirib yuborishga urindi."
      },
      {
            "id": "s31-q6",
            "order": 6,
            "question": "What did Nasreddin do?",
            "modelAnswer": "He stayed on it.",
            "keywords": [
                  "stayed on it"
            ],
            "options": [
                  "He stayed on it",
                  "He fell into the mud",
                  "He jumped off immediately",
                  "He struck it with a whip"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U otdan yiqilmay, ustida qoldi: 'he stayed on it'."
      },
      {
            "id": "s31-q7",
            "order": 7,
            "question": "What did the horse do then?",
            "modelAnswer": "Then it suddenly began to run away with him.",
            "keywords": [
                  "run away with him"
            ],
            "options": [
                  "It began to run away with him",
                  "It stopped and ate grass",
                  "It walked calmly down the street",
                  "It jumped over a high fence"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "So'ng ot to'satdan uni olib qochib ketdi."
      },
      {
            "id": "s31-q8",
            "order": 8,
            "question": "What did Nasreddin do?",
            "modelAnswer": "He tried to turn it towards his house, and tried to stop it.",
            "keywords": [
                  "turn it towards his house",
                  "tried to stop it"
            ],
            "options": [
                  "He tried to turn it towards his house and stop it",
                  "He dropped the reins and screamed",
                  "He pulled out a sword",
                  "He closed his eyes and prayed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U otni uyiga burishga va to'xtatishga urindi."
      },
      {
            "id": "s31-q9",
            "order": 9,
            "question": "What did the horse do?",
            "modelAnswer": "It continued to run the opposite way.",
            "keywords": [
                  "continued to run the opposite way"
            ],
            "options": [
                  "It continued to run the opposite way",
                  "It obeyed and stopped at his house",
                  "It ran into the river to drink",
                  "It fell asleep on the field"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ot teskari tomonga yugurishda davom etdi."
      },
      {
            "id": "s31-q10",
            "order": 10,
            "question": "Who saw Nasreddin?",
            "modelAnswer": "One of Nasreddin's friends saw him.",
            "keywords": [
                  "One of Nasreddin's friends saw him"
            ],
            "options": [
                  "One of his friends",
                  "The army officer",
                  "The town mayor",
                  "His wife"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddinning do'stlaridan biri uni ko'rib qoldi."
      },
      {
            "id": "s31-q11",
            "order": 11,
            "question": "What was this person doing?",
            "modelAnswer": "He was working in his field.",
            "keywords": [
                  "working in his field"
            ],
            "options": [
                  "He was working in his field",
                  "He was repairing his cart",
                  "He was resting in his cottage",
                  "He was hunting birds"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U dalasida ishlayotgan edi: 'working in his field'."
      },
      {
            "id": "s31-q12",
            "order": 12,
            "question": "What did he think?",
            "modelAnswer": "He thought Nasreddin was riding so fast because he had some bad news for him.",
            "keywords": [
                  "Why is Nasreddin riding so fast",
                  "bad news"
            ],
            "options": [
                  "He thought Nasreddin had some bad news for him",
                  "He thought Nasreddin was practicing for a race",
                  "He thought Nasreddin had bought a prize horse",
                  "He thought Nasreddin was being chased by bandits"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U Nasriddin qandaydir yomon xabar keltiryapti deb o'yladi."
      },
      {
            "id": "s31-q13",
            "order": 13,
            "question": "How did he feel?",
            "modelAnswer": "He was frightened.",
            "keywords": [
                  "frightened"
            ],
            "options": [
                  "He was frightened",
                  "He was excited and happy",
                  "He was annoyed",
                  "He was indifferent"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'rqib ketdi: 'He was frightened'."
      },
      {
            "id": "s31-q14",
            "order": 14,
            "question": "What did he shout?",
            "modelAnswer": "He shouted, 'Nasreddin! What is the matter? Where are you going?'",
            "keywords": [
                  "What is the matter",
                  "Where are you going"
            ],
            "options": [
                  "'Nasreddin! What is the matter? Where are you going?'",
                  "'Stop your horse immediately!'",
                  "'Come inside for some tea!'",
                  "'Can you sell me that fine stallion?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Nasriddin! Tinchlikmi? Qayerga ketyapsan?' deb baqirdi."
      },
      {
            "id": "s31-q15",
            "order": 15,
            "question": "What did Nasreddin shout back?",
            "modelAnswer": "He shouted back, 'I don't know! This stupid animal hasn't told me!'",
            "keywords": [
                  "don't know",
                  "stupid animal hasn't told me"
            ],
            "options": [
                  "'I don't know! This stupid animal hasn't told me!'",
                  "'I am rushing to the doctor in town!'",
                  "'To the battlefield to fight the enemy!'",
                  "'My house is completely on fire!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Bilmayman! Bu ahmoq hayvon menga aytmadi!' deb baqirib o'tib ketdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s31-tf1",
            "order": 1,
            "statement": "Nasreddin needed the horse because his donkey had fallen ill.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'One day Nasreddin's donkey was ill, so he borrowed a horse'."
      },
      {
            "id": "s31-tf2",
            "order": 2,
            "statement": "The horse was well-trained and gentle with children and strangers.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ot juda yovvoyi va kuchli bo'lib, zobitdan boshqa hech kimni ustiga mindirmas edi."
      },
      {
            "id": "s31-tf3",
            "order": 3,
            "statement": "The horse threw Nasreddin into a muddy ditch right outside the stable.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ot uni yiqitmoqchi bo'ldi, lekin Nasriddin ustida qoldi ('he stayed on it')."
      },
      {
            "id": "s31-tf4",
            "order": 4,
            "statement": "Nasreddin's farmer friend worried that tragic news was coming his way.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Perhaps he is riding to my house to give me some bad news!'."
      },
      {
            "id": "s31-tf5",
            "order": 5,
            "statement": "The horse broke its leg while crossing the farmer's ditch.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda otning jarohat olgani haqida hech qanday ma'lumot yo'q."
      },
      {
            "id": "s31-tf6",
            "order": 6,
            "statement": "Nasreddin could not control where the runaway horse was heading.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Ot Nasriddinga bo'ysunmay o'zi xohlagan tomonga chopib ketayotgan edi."
      }
]
  },
  {
    id: 'story-32',
    storyNumber: 32,
    title: "The Basket Carrier Thief",
    titleUz: "Savat ko'taruvchi o'g'ri",
    cefrLevel: 'A2',
    wordCount: 167,
    readingTimeMinutes: 1,
    storyText: "Every Saturday, Nasreddin went to the market to buy food and other things. He put them in a big basket, but he was old and weak, so he always paid another man to carry the basket home for him.\nBut one Saturday, while he was walking home in front of the man with the basket, the man ran away with it.\nThe next Saturday, when Nasreddin went to the market again, a friend of his said, 'Look, there he is! That man stole your things last week!'\nNasreddin at once hid behind a shop, and stayed there until the man left the market.\nHis friend was very surprised. 'Why did you do that?' he asked.\n'Well,' said Nasreddin, 'that man was carrying my basket when he left me a week ago. He will want me to pay him for seven days' work, and that will cost me more than a basket full of things!'",
    paragraphs: [
      "Every Saturday, Nasreddin went to the market to buy food and other things. He put them in a big basket, but he was old and weak, so he always paid another man to carry the basket home for him.",
      "But one Saturday, while he was walking home in front of the man with the basket, the man ran away with it.",
      "The next Saturday, when Nasreddin went to the market again, a friend of his said, 'Look, there he is! That man stole your things last week!'\nNasreddin at once hid behind a shop, and stayed there until the man left the market.",
      "His friend was very surprised. 'Why did you do that?' he asked.\n'Well,' said Nasreddin, 'that man was carrying my basket when he left me a week ago. He will want me to pay him for seven days' work, and that will cost me more than a basket full of things!'"
],
    summaryUz: "Nasriddin keksayib qolgani uchun bozordan oziq-ovqat savatini ko'tarib berishga mardikor yollardi. Bir shanba kuni mardikor savatni olib qochib ketadi. Keyingi shanba do'sti o'g'rini ko'rsatganida, Nasriddin darhol do'kon orqasiga yashirinib oladi. Do'sti sababini so'rasa: 'U bir hafta oldin savatimni ko'tarib ketgan edi. Hozir u menga ro'para kelsa, 7 kunlik mehnat haqqimni to'la deydi. Yetti kunlik ish haqi esa bir savat narsamdan ancha qimmatga tushadi!' deydi.",
    vocabulary: [
      {
            "word": "basket",
            "pos": "n.",
            "phonetic": "[ˈbɑːskɪt]",
            "translationUz": "savat",
            "definitionEn": "A container made of interwoven cane or wire.",
            "exampleSentence": "He packed his groceries into a heavy reed basket."
      },
      {
            "word": "weak",
            "pos": "adj.",
            "phonetic": "[wiːk]",
            "translationUz": "zaif, nimjon",
            "definitionEn": "Lacking physical strength and energy.",
            "exampleSentence": "Because he was old and weak, he hired help."
      },
      {
            "word": "carry",
            "pos": "v.",
            "phonetic": "[ˈkæri]",
            "translationUz": "ko'tarmoq, tashimoq",
            "definitionEn": "To support and move someone or something from one place to another.",
            "exampleSentence": "He paid a porter to carry the basket home."
      },
      {
            "word": "steal (stole)",
            "pos": "v.",
            "phonetic": "[stiːl] ([stəʊl])",
            "translationUz": "o'g'irlamoq (o'g'irladi)",
            "definitionEn": "To take another person's property without permission.",
            "exampleSentence": "That rogue stole your groceries last Saturday!"
      },
      {
            "word": "hide (hid)",
            "pos": "v.",
            "phonetic": "[haɪd] ([hɪd])",
            "translationUz": "yashirinmoq (yashirindi)",
            "definitionEn": "To put oneself in a place where one cannot be seen.",
            "exampleSentence": "Nasreddin promptly hid behind a shop awning."
      },
      {
            "word": "cost",
            "pos": "v.",
            "phonetic": "[kɒst]",
            "translationUz": "narxi ... turmoq",
            "definitionEn": "To require the payment of a specified sum.",
            "exampleSentence": "Paying seven days of labour will cost a fortune!"
      }
],
    reproductionOutline: [
      "Every Saturday, an aging and frail Nasreddin hired a porter to haul his market basket.",
      "One weekend, the porter bolted with the full basket while walking behind Nasreddin.",
      "The following week, a friend spotted the thief strolling openly in the market.",
      "Instead of confronting him, Nasreddin ducked behind a shop until the man departed.",
      "To his bewildered friend, Nasreddin explained that the porter would bill him for seven full days of carrying the basket, costing far more than the goods!"
],
    modelRetelling: "Every Saturday, Nasreddin shopped at the market, but being elderly and physically frail, he routinely paid a local porter to carry his heavy basket home. One weekend, as Nasreddin strolled ahead, the porter absconded with the entire basket of groceries. The following Saturday, a friend spotted the thief in the bazaar and pointed him out. To the friend's astonishment, Nasreddin instantly darted behind a stall and stayed concealed until the thief moved away. When pressed for an explanation, Nasreddin reasoned with absurd practicality: since the porter had carried his basket for seven days straight, he would surely demand seven days' worth of wages, which would easily surpass the value of the stolen basket!",
    questions: [
      {
            "id": "s32-q1",
            "order": 1,
            "question": "What did Nasreddin do every Saturday?",
            "modelAnswer": "He went to the market to buy food and other things.",
            "keywords": [
                  "went to the market",
                  "buy food and other things"
            ],
            "options": [
                  "He went to the market to buy food and other things",
                  "He worked in his wheat field",
                  "He visited his married daughter",
                  "He cleaned his house"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U har shanba oziq-ovqat xarid qilish uchun bozorga borar edi."
      },
      {
            "id": "s32-q2",
            "order": 2,
            "question": "Why did he do this?",
            "modelAnswer": "He did this to buy food and supplies for the week.",
            "keywords": [
                  "buy food and other things"
            ],
            "options": [
                  "To buy provisions and necessities",
                  "To sell his donkey",
                  "To meet his friends for coffee",
                  "To find a new house"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Haftalik oziq-ovqat va kerakli narsalarni xarid qilish uchun borgan."
      },
      {
            "id": "s32-q3",
            "order": 3,
            "question": "What did he do with the things?",
            "modelAnswer": "He put them in a big basket.",
            "keywords": [
                  "put them in a big basket"
            ],
            "options": [
                  "He put them in a big basket",
                  "He loaded them onto his donkey",
                  "He carried them in his pockets",
                  "He mailed them by post"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U narsalarni katta savatga joylardi: 'put them in a big basket'."
      },
      {
            "id": "s32-q4",
            "order": 4,
            "question": "What did he do then?",
            "modelAnswer": "He paid another man to carry the basket home for him.",
            "keywords": [
                  "paid another man to carry the basket"
            ],
            "options": [
                  "He paid another man to carry the basket home for him",
                  "He carried it on his shoulders",
                  "He left it in a locker",
                  "He threw it away"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U boshqa bir kishiga savatni uyigacha ko'tarib berishi uchun pul to'lardi."
      },
      {
            "id": "s32-q5",
            "order": 5,
            "question": "Why did he do this?",
            "modelAnswer": "Because he was old and weak.",
            "keywords": [
                  "old and weak"
            ],
            "options": [
                  "Because he was old and weak",
                  "Because he was lazy",
                  "Because the basket was dirty",
                  "Because he was riding a horse"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki u qari va zaifhol edi: 'he was old and weak'."
      },
      {
            "id": "s32-q6",
            "order": 6,
            "question": "What happened one Saturday?",
            "modelAnswer": "The man ran away with the basket.",
            "keywords": [
                  "man ran away with it"
            ],
            "options": [
                  "The man ran away with the basket",
                  "The basket broke in half",
                  "The man asked for triple pay",
                  "A horse kicked the basket"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Mardikor kishi savatni ko'tarib qochib ketdi."
      },
      {
            "id": "s32-q7",
            "order": 7,
            "question": "What was Nasreddin doing when this happened?",
            "modelAnswer": "He was walking home in front of the man with the basket.",
            "keywords": [
                  "walking home in front of the man"
            ],
            "options": [
                  "He was walking home in front of the man",
                  "He was sleeping under a tree",
                  "He was haggling over melons",
                  "He was chatting with the town guard"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U savat ko'targan odamning oldida uyga qarab ketayotgan edi."
      },
      {
            "id": "s32-q8",
            "order": 8,
            "question": "What did Nasreddin do the next Saturday?",
            "modelAnswer": "Nasreddin went to the market again.",
            "keywords": [
                  "went to the market again"
            ],
            "options": [
                  "He went to the market again",
                  "He stayed in bed all day",
                  "He reported the crime to the court",
                  "He bought a guard dog"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Keyingi shanba u yana bozorga bordi."
      },
      {
            "id": "s32-q9",
            "order": 9,
            "question": "What did a friend of his say?",
            "modelAnswer": "His friend said, 'Look, there he is! That man stole your things last week!'",
            "keywords": [
                  "there he is",
                  "stole your things last week"
            ],
            "options": [
                  "'Look, there he is! That man stole your things last week!'",
                  "'Can you lend me five copper coins?'",
                  "'Where is your donkey today?'",
                  "'The market prices have doubled!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'sti: 'Qara, anavi o'sha! O'tgan hafta narsalaringni o'g'irlagan odam!' dedi."
      },
      {
            "id": "s32-q10",
            "order": 10,
            "question": "What did Nasreddin do?",
            "modelAnswer": "Nasreddin at once hid behind a shop.",
            "keywords": [
                  "at once hid behind a shop"
            ],
            "options": [
                  "He at once hid behind a shop",
                  "He attacked the thief with a stick",
                  "He screamed for the police",
                  "He demanded his basket back"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin darhol do'kon orqasiga yashirindi."
      },
      {
            "id": "s32-q11",
            "order": 11,
            "question": "When did he come out?",
            "modelAnswer": "He stayed there until the man left the market.",
            "keywords": [
                  "stayed there until the man left the market"
            ],
            "options": [
                  "He came out after the man left the market",
                  "He came out after sundown",
                  "He came out when the police arrived",
                  "He never came out"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U o'sha odam bozordan ketib bo'lgunicha kutib turdi."
      },
      {
            "id": "s32-q12",
            "order": 12,
            "question": "How did his friend feel about this?",
            "modelAnswer": "His friend was very surprised.",
            "keywords": [
                  "very surprised"
            ],
            "options": [
                  "His friend was very surprised",
                  "His friend was furious",
                  "His friend congratulated him",
                  "His friend ignored him"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Do'sti bundan juda ajablandi: 'His friend was very surprised'."
      },
      {
            "id": "s32-q13",
            "order": 13,
            "question": "What did he say?",
            "modelAnswer": "He asked, 'Why did you do that?'",
            "keywords": [
                  "Why did you do that"
            ],
            "options": [
                  "'Why did you do that?'",
                  "'Why didn't you punch him?'",
                  "'Did you lose your glasses?'",
                  "'Are you afraid of him?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Nega bunday qilding?' deb so'radi."
      },
      {
            "id": "s32-q14",
            "order": 14,
            "question": "What was Nasreddin's answer?",
            "modelAnswer": "Nasreddin answered that the man had been carrying his basket for a week, and would demand seven days' wages, costing more than the basket full of things.",
            "keywords": [
                  "carrying my basket",
                  "pay him for seven days' work",
                  "cost me more than a basket"
            ],
            "options": [
                  "He said the man would demand seven days' pay for carrying the basket, costing more than the food",
                  "He said the man was a dangerous swordsman",
                  "He said he had already bought another basket",
                  "He said he felt pity for the poor porter"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin o'g'ri 7 kunlik ish haqi talab qilsa, bu bir savat oziq-ovqatdan ancha qimmatga tushishini aytdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s32-tf1",
            "order": 1,
            "statement": "Nasreddin employed a porter because he was elderly and lacked strength.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'he was old and weak, so he always paid another man to carry the basket'."
      },
      {
            "id": "s32-tf2",
            "order": 2,
            "statement": "The porter was apprehended by guards while escaping.",
            "correctAnswer": "False",
            "explanationUz": "Xato: O'g'ri hech kimga tutilmay qochib ketgan edi ('the man ran away with it')."
      },
      {
            "id": "s32-tf3",
            "order": 3,
            "statement": "Nasreddin confronted the thief boldly and reclaimed his basket the following week.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Nasriddin unga ro'para kelishdan qochib, do'kon orqasiga yashirindi."
      },
      {
            "id": "s32-tf4",
            "order": 4,
            "statement": "The basket contained gold bullion and rare gems.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Savatda bozor oziq-ovqatlari bor edi ('food and other things')."
      },
      {
            "id": "s32-tf5",
            "order": 5,
            "statement": "Nasreddin waited in hiding until the thief departed the bazaar.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'stayed there until the man left the market'."
      },
      {
            "id": "s32-tf6",
            "order": 6,
            "statement": "Nasreddin humorously treated the theft as an ongoing week-long job for which he would be billed.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Nasriddin o'g'rini go'yo 7 kundan beri savatini ko'tarib yurgan xizmatkor deb tasavvur qildi."
      }
]
  }
,
  {
    id: 'story-33',
    storyNumber: 33,
    title: "Nasreddin and the Door",
    titleUz: "Nasriddin va Eshik",
    cefrLevel: 'A2',
    wordCount: 161,
    readingTimeMinutes: 1,
    storyText: "Once, when Nasreddin was a boy, his mother went out for a picnic. Before she went, she said to him, 'Nasreddin, while I am away, stay near the door, and watch it all the time.' She said this because there were a lot of thieves in their town.\nNasreddin sat down beside the door. After an hour one of his uncles came. He said to Nasreddin, 'Where is your mother?'\n'At a picnic,' he answered.\n'Well,' said the uncle, 'we are going to visit your house this evening. Go and tell her!'\nHis uncle then went away, and Nasreddin began to think.\n'Mother said, \"Watch the door all the time!\" and Uncle said, \"Go and tell her\"!'\nHe thought and thought, then at last, he pulled the door down, put it on his back and went to his mother with it!",
    paragraphs: [
      "Once, when Nasreddin was a boy, his mother went out for a picnic. Before she went, she said to him, 'Nasreddin, while I am away, stay near the door, and watch it all the time.' She said this because there were a lot of thieves in their town.",
      "Nasreddin sat down beside the door. After an hour one of his uncles came. He said to Nasreddin, 'Where is your mother?'\n'At a picnic,' he answered.\n'Well,' said the uncle, 'we are going to visit your house this evening. Go and tell her!'",
      "His uncle then went away, and Nasreddin began to think.\n'Mother said, \"Watch the door all the time!\" and Uncle said, \"Go and tell her\"!'\nHe thought and thought, then at last, he pulled the door down, put it on his back and went to his mother with it!"
],
    summaryUz: "Nasriddin bolaligida onasi mehmondorchilikka ketayotib: 'Shaharda o'g'rilar ko'p, eshik oldida o'tirib, eshikka yaxshilab qarab tur!' deb tayinlaydi. Bir soatdan keyin tog'asi kelib, kechqurun mehmonga borishlarini onasiga aytib kelishni buyuradi. Nasriddin ikkala buyruqni ham bajarish uchun eshikni o'rnidan sug'urib oladi-da, orqasiga ortmoqlab onasining oldiga olib boradi!",
    vocabulary: [
      {
            "word": "watch",
            "pos": "v.",
            "phonetic": "[wɒtʃ]",
            "translationUz": "ko'z-quloq bo'lmoq, qo'riqlamoq",
            "definitionEn": "To look at or observe attentively over a period of time.",
            "exampleSentence": "Watch the door carefully while I am out."
      },
      {
            "word": "picnic",
            "pos": "n.",
            "phonetic": "[ˈpɪknɪk]",
            "translationUz": "sayr, mehmondorchilik",
            "definitionEn": "An outing or gathering where a meal is eaten outdoors.",
            "exampleSentence": "His mother went out with her friends for a picnic."
      },
      {
            "word": "thief (thieves)",
            "pos": "n.",
            "phonetic": "[θiːf] ([θiːvz])",
            "translationUz": "o'g'ri (o'g'rilar)",
            "definitionEn": "A person who steals another person's property.",
            "exampleSentence": "There were many cunning thieves in their town."
      },
      {
            "word": "uncle",
            "pos": "n.",
            "phonetic": "[ˈʌŋkl]",
            "translationUz": "tog'a, amaki",
            "definitionEn": "The brother of one's father or mother.",
            "exampleSentence": "One of his uncles arrived with a message."
      },
      {
            "word": "pull down",
            "pos": "phr. v.",
            "phonetic": "[pʊl daʊn]",
            "translationUz": "sug'urib olmoq, yulib olmoq",
            "definitionEn": "To dismantle or detach something from its frame.",
            "exampleSentence": "He pulled the wooden door down off its hinges."
      },
      {
            "word": "on one's back",
            "pos": "prep. phr.",
            "phonetic": "[ɒn wʌnz bæk]",
            "translationUz": "orqasiga, yelkasiga",
            "definitionEn": "Carried across the shoulders or upper body.",
            "exampleSentence": "He carried the heavy door on his back."
      }
],
    reproductionOutline: [
      "Departing for a picnic, Nasreddin's mother instructed the boy to vigilantly watch the door due to town thieves.",
      "Nasreddin dutifully sat by the entrance until an uncle arrived an hour later.",
      "The uncle told Nasreddin to immediately locate his mother and inform her of an evening family visit.",
      "Faced with conflicting directives—stay with the door versus seek his mother—Nasreddin devised a bizarre solution.",
      "He hoisted the door off its frame, placed it upon his back, and marched off to find his mother!"
],
    modelRetelling: "When Nasreddin was still a young boy, his mother set out for a picnic, warning him to remain by the front door and guard it constantly against local thieves. Faithful to her instructions, young Nasreddin sat beside the entrance until his uncle dropped by an hour later. Learning that his mother was at a picnic, the uncle commanded Nasreddin to go alert her that relatives would be visiting that evening. Pondering both instructions—guarding the door and tracking down his mother—Nasreddin decided to fulfill both simultaneously. Unhinging the massive wooden door, he hoisted it onto his back and trudged all the way to the picnic with the door in tow!",
    questions: [
      {
            "id": "s33-q1",
            "order": 1,
            "question": "When did this story happen?",
            "modelAnswer": "It happened once when Nasreddin was a boy.",
            "keywords": [
                  "when Nasreddin was a boy"
            ],
            "options": [
                  "When Nasreddin was a boy",
                  "During his old age",
                  "Last summer",
                  "When he was an army officer"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu voqea Nasriddinning bolaligida yuz bergan."
      },
      {
            "id": "s33-q2",
            "order": 2,
            "question": "What did Nasreddin's mother do?",
            "modelAnswer": "She went out for a picnic.",
            "keywords": [
                  "went out for a picnic"
            ],
            "options": [
                  "She went out for a picnic",
                  "She went to the market to buy pots",
                  "She went to the doctor",
                  "She visited relatives in London"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning onasi sayrga (piknikka) ketgan edi."
      },
      {
            "id": "s33-q3",
            "order": 3,
            "question": "What did she say to him?",
            "modelAnswer": "She said, 'While I am away, stay near the door, and watch it all the time.'",
            "keywords": [
                  "stay near the door",
                  "watch it all the time"
            ],
            "options": [
                  "'While I am away, stay near the door, and watch it all the time.'",
                  "'Cook the soup before I return.'",
                  "'Lock the door and go to school.'",
                  "'Do not speak to any strangers.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Eshik oldida tur va unga doim qarab o'tir' dedi."
      },
      {
            "id": "s33-q4",
            "order": 4,
            "question": "When did she say it?",
            "modelAnswer": "Before she went out for the picnic.",
            "keywords": [
                  "Before she went"
            ],
            "options": [
                  "Before she went out",
                  "When she returned home",
                  "The night before",
                  "During breakfast"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ketishdan oldin buni tayinlagan edi."
      },
      {
            "id": "s33-q5",
            "order": 5,
            "question": "Why did she say this?",
            "modelAnswer": "Because there were a lot of thieves in their town.",
            "keywords": [
                  "lot of thieves in their town"
            ],
            "options": [
                  "Because there were a lot of thieves in their town",
                  "Because the door was broken",
                  "Because she expected a delivery",
                  "Because it was raining outside"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki shaharlarida o'g'rilar juda ko'p edi."
      },
      {
            "id": "s33-q6",
            "order": 6,
            "question": "What did Nasreddin do?",
            "modelAnswer": "Nasreddin sat down beside the door.",
            "keywords": [
                  "sat down beside the door"
            ],
            "options": [
                  "He sat down beside the door",
                  "He played football in the street",
                  "He fell asleep on the bed",
                  "He went to his friend's house"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin eshik yoniga o'tirib oldi: 'sat down beside the door'."
      },
      {
            "id": "s33-q7",
            "order": 7,
            "question": "What happened after an hour?",
            "modelAnswer": "One of his uncles came.",
            "keywords": [
                  "one of his uncles came"
            ],
            "options": [
                  "One of his uncles came",
                  "A thief climbed through the window",
                  "His mother returned with fruits",
                  "The door fell open"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir soatdan so'ng uning tog'asi keldi."
      },
      {
            "id": "s33-q8",
            "order": 8,
            "question": "What did Nasreddin's uncle say?",
            "modelAnswer": "He asked, 'Where is your mother?'",
            "keywords": [
                  "Where is your mother"
            ],
            "options": [
                  "'Where is your mother?'",
                  "'Why are you sitting on the floor?'",
                  "'Can you lend me ten shillings?'",
                  "'Where is your father?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Tog'asi: 'Onang qani?' deb so'radi."
      },
      {
            "id": "s33-q9",
            "order": 9,
            "question": "What did Nasreddin answer?",
            "modelAnswer": "He answered, 'At a picnic.'",
            "keywords": [
                  "At a picnic"
            ],
            "options": [
                  "'At a picnic.'",
                  "'She is asleep inside.'",
                  "'She went to the marketplace.'",
                  "'I don't know.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Piknikda' deb javob berdi."
      },
      {
            "id": "s33-q10",
            "order": 10,
            "question": "What did his uncle say then?",
            "modelAnswer": "His uncle said, 'We are going to visit your house this evening. Go and tell her!'",
            "keywords": [
                  "visit your house this evening",
                  "Go and tell her"
            ],
            "options": [
                  "'We are going to visit your house this evening. Go and tell her!'",
                  "'Lock the house and come with me.'",
                  "'Give her this letter from our family.'",
                  "'Tell her not to cook anything.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Tog'asi: 'Kechqurun mehmonga kelamiz, bor onangga ayt!' dedi."
      },
      {
            "id": "s33-q11",
            "order": 11,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "Nasreddin began to think.",
            "keywords": [
                  "began to think"
            ],
            "options": [
                  "He began to think",
                  "He immediately ran to the park",
                  "He locked the door and went to bed",
                  "He called his friends"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin o'ylana boshladi: 'Nasreddin began to think'."
      },
      {
            "id": "s33-q12",
            "order": 12,
            "question": "What did he think?",
            "modelAnswer": "He thought, 'Mother said, \"Watch the door all the time!\" and Uncle said, \"Go and tell her\"!'",
            "keywords": [
                  "Watch the door all the time",
                  "Go and tell her"
            ],
            "options": [
                  "He was torn between his mother's order to watch the door and his uncle's order to go to her",
                  "He thought about eating sweets",
                  "He thought his uncle was joking",
                  "He thought thieves had already robbed the kitchen"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U onasining eshikdan ketmaslik va tog'asining onasiga xabar berish buyrug'i haqida o'yladi."
      },
      {
            "id": "s33-q13",
            "order": 13,
            "question": "What did he do at last?",
            "modelAnswer": "He pulled the door down, put it on his back and went to his mother with it!",
            "keywords": [
                  "pulled the door down",
                  "put it on his back",
                  "went to his mother with it"
            ],
            "options": [
                  "He pulled the door down, put it on his back and went to his mother with it",
                  "He left the door wide open and ran",
                  "He asked a neighbour to watch the door",
                  "He stayed home and did not tell his mother"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshikni yechib olib, yelkasiga ortmoqlab onasining oldiga olib bordi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s33-tf1",
            "order": 1,
            "statement": "Nasreddin was an adult shopkeeper when these events occurred.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U o'sha paytda hali yosh bola edi ('when Nasreddin was a boy')."
      },
      {
            "id": "s33-tf2",
            "order": 2,
            "statement": "His mother told him to watch the door because of the abundance of thieves.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'She said this because there were a lot of thieves in their town'."
      },
      {
            "id": "s33-tf3",
            "order": 3,
            "statement": "The uncle stayed at the house to protect it while Nasreddin ran.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Tog'asi xabarni aytib ketib qolgan ('His uncle then went away')."
      },
      {
            "id": "s33-tf4",
            "order": 4,
            "statement": "Nasreddin solved the dilemma by taking the door with him.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U eshikni o'zi bilan ko'tarib ketdi."
      },
      {
            "id": "s33-tf5",
            "order": 5,
            "statement": "Nasreddin accidentally broke the door into splinters.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U eshikni butunligicha orqasiga ortmoqlab olgan edi."
      },
      {
            "id": "s33-tf6",
            "order": 6,
            "statement": "Thieves broke into the house and took everything while the doorway stood wide open.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uyga o'g'ri tushgan yoki tushmagani haqida aytilmagan."
      }
]
  },
  {
    id: 'story-34',
    storyNumber: 34,
    title: "The Dead Man's Destination",
    titleUz: "Mayitning manzili",
    cefrLevel: 'A2',
    wordCount: 154,
    readingTimeMinutes: 1,
    storyText: "Nasreddin was sitting by a window in his house one day in the middle of winter, when he heard women outside crying. He put his head out of the window, and saw a lot of people coming towards his house.\nThey were carrying a dead man, and the women were crying, 'Oh, why are you leaving us to go to a place without light and without a fire and without food? It will be dark there, and you will be cold and hungry. Nobody will look after you, nobody will be kind to you, and nobody will love you there!'\n'My God!' said Nasreddin to his wife. 'They are talking about our house. They are bringing the dead man here! Quick, lock the door! Don't let him in!'",
    paragraphs: [
      "Nasreddin was sitting by a window in his house one day in the middle of winter, when he heard women outside crying. He put his head out of the window, and saw a lot of people coming towards his house.",
      "They were carrying a dead man, and the women were crying, 'Oh, why are you leaving us to go to a place without light and without a fire and without food? It will be dark there, and you will be cold and hungry. Nobody will look after you, nobody will be kind to you, and nobody will love you there!'",
      "'My God!' said Nasreddin to his wife. 'They are talking about our house. They are bringing the dead man here! Quick, lock the door! Don't let him in!'"
],
    summaryUz: "Qish o'rtasida deraza yonida o'tirgan Nasriddin ko'chada yig'lab kelayotgan ayollar ovozini eshitadi. Odamlar tobut ko'tarib borayotgan, ayollar esa: 'Nega bizni tashlab olovi yo'q, chirog'i yo'q, yeguligi yo'q qorong'i joyga ketyapsan? U yerda och va sovuq qolasan, hech kim senga qaramaydi!' deb dod solishayotgan edi. Buni eshitgan Nasriddin dahshatga tushib xotiniga: 'Ular bizning uyimizni tasvirlashyapti! Mayitni biznikiga olib kelishyapti! Tezroq eshikni qulfla, ichkariga kiritma!' deb baqiradi.",
    vocabulary: [
      {
            "word": "in the middle of",
            "pos": "prep. phr.",
            "phonetic": "[ɪn ðə ˈmɪdl əv]",
            "translationUz": "qoq o'rtasida",
            "definitionEn": "At the midpoint of a period of time.",
            "exampleSentence": "It was bitterly cold in the middle of winter."
      },
      {
            "word": "cry",
            "pos": "v.",
            "phonetic": "[kraɪ]",
            "translationUz": "yig'lamoq, faryod urmoq",
            "definitionEn": "To shed tears or utter a lamenting sound.",
            "exampleSentence": "The mourning women were crying loudly outside."
      },
      {
            "word": "dead",
            "pos": "adj.",
            "phonetic": "[ded]",
            "translationUz": "o'lik, vafot etgan",
            "definitionEn": "No longer alive.",
            "exampleSentence": "The funeral procession carried the dead man."
      },
      {
            "word": "look after",
            "pos": "phr. v.",
            "phonetic": "[lʊk ˈɑːftə]",
            "translationUz": "g'amxo'rlik qilmoq, qaramoq",
            "definitionEn": "To take care of or attend to someone.",
            "exampleSentence": "Nobody will look after you in that bleak place."
      },
      {
            "word": "lock",
            "pos": "v.",
            "phonetic": "[lɒk]",
            "translationUz": "qulflamoq",
            "definitionEn": "To fasten or secure with a lock and key.",
            "exampleSentence": "Quick, lock the door before they arrive!"
      },
      {
            "word": "hungry",
            "pos": "adj.",
            "phonetic": "[ˈhʌŋɡri]",
            "translationUz": "och, qorni och",
            "definitionEn": "Feeling or showing the need for food.",
            "exampleSentence": "You will be freezing cold and hungry there."
      }
],
    reproductionOutline: [
      "Sitting by his window in midwinter, Nasreddin heard wailing women in a funeral procession.",
      "Mourners carried a deceased man toward his street.",
      "The grieving women wailed about a bleak destination without fire, light, or food, where the deceased would freeze in neglect.",
      "Hearing the dire description of cold poverty, Nasreddin realized it matched his own destitute cottage.",
      "Panic-stricken, he ordered his wife to bolt the front door to prevent them from moving the corpse in!"
],
    modelRetelling: "One frigid winter day, Nasreddin was sitting by his cottage window when he was startled by the mournful wailing of women in the lane. Peeking outside, he observed a funeral cortege carrying a deceased man toward his house. The grief-stricken women wailed in lamentation, crying out why he was departing for a bleak place stripped of fire, barren of light, devoid of food, and where nobody would care for or comfort him. Shocked by their words, Nasreddin turned pale and yelled to his wife that the mourners were obviously describing their own impoverished household! In a frantic panic, he commanded her to bolt the door shut immediately before the crowd deposited the dead man inside!",
    questions: [
      {
            "id": "s34-q1",
            "order": 1,
            "question": "What was Nasreddin doing at the beginning of this story?",
            "modelAnswer": "He was sitting by a window in his house.",
            "keywords": [
                  "sitting by a window in his house"
            ],
            "options": [
                  "Sitting by a window in his house",
                  "Mending his leaky roof",
                  "Eating lunch with his wife",
                  "Sleeping near the fireplace"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U uyining derazasi yonida o'tirgan edi."
      },
      {
            "id": "s34-q2",
            "order": 2,
            "question": "When was this?",
            "modelAnswer": "It was in the middle of winter.",
            "keywords": [
                  "middle of winter"
            ],
            "options": [
                  "In the middle of winter",
                  "On a hot summer afternoon",
                  "During spring festival",
                  "In late autumn"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu qishning qoq o'rtasida bo'lgan: 'in the middle of winter'."
      },
      {
            "id": "s34-q3",
            "order": 3,
            "question": "What did he hear?",
            "modelAnswer": "He heard women outside crying.",
            "keywords": [
                  "women outside crying"
            ],
            "options": [
                  "He heard women outside crying",
                  "He heard barking dogs",
                  "He heard music playing",
                  "He heard horses galloping"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tashqarida ayollarning yig'layotganini eshitdi."
      },
      {
            "id": "s34-q4",
            "order": 4,
            "question": "What did he do then?",
            "modelAnswer": "He put his head out of the window.",
            "keywords": [
                  "put his head out of the window"
            ],
            "options": [
                  "He put his head out of the window",
                  "He ran out into the street",
                  "He closed the curtains",
                  "He called his neighbours"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U boshini derazadan tashqariga chiqardi."
      },
      {
            "id": "s34-q5",
            "order": 5,
            "question": "What did he see?",
            "modelAnswer": "He saw a lot of people coming towards his house.",
            "keywords": [
                  "lot of people coming towards his house"
            ],
            "options": [
                  "A lot of people coming towards his house",
                  "Children playing snowball fights",
                  "Bandits attacking a cart",
                  "A wedding celebration"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U uyiga qarab kelayotgan ko'plab odamlarni ko'rdi."
      },
      {
            "id": "s34-q6",
            "order": 6,
            "question": "What were the people doing?",
            "modelAnswer": "They were carrying a dead man.",
            "keywords": [
                  "carrying a dead man"
            ],
            "options": [
                  "They were carrying a dead man",
                  "They were dancing in the street",
                  "They were carrying sacks of grain",
                  "They were building a snow fort"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular mayitni (o'lik odamni) ko'tarib borishayotgan edi."
      },
      {
            "id": "s34-q7",
            "order": 7,
            "question": "What were the women doing?",
            "modelAnswer": "The women were crying and lamenting.",
            "keywords": [
                  "women were crying"
            ],
            "options": [
                  "The women were crying and wailing",
                  "They were singing joyful songs",
                  "They were reading books",
                  "They were counting coins"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ayollar dod solib yig'layotgan edilar."
      },
      {
            "id": "s34-q8",
            "order": 8,
            "question": "What were they saying?",
            "modelAnswer": "They said he was going to a place without light, without fire, without food, where it was dark, cold and hungry, and nobody would care for him.",
            "keywords": [
                  "without light and without a fire and without food",
                  "cold and hungry"
            ],
            "options": [
                  "They lamented that he was going to a cold, dark place without light, fire, or food",
                  "They praised his heroism in battle",
                  "They asked for money for his tomb",
                  "They argued about his inheritance"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular mayitning chiroqsiz, olovsiz, yeguliksiz, sovuq va qorong'i joyga ketayotganini aytib yig'lashayotgan edi."
      },
      {
            "id": "s34-q9",
            "order": 9,
            "question": "What did Nasreddin say?",
            "modelAnswer": "He said, 'They are talking about our house. They are bringing the dead man here! Quick, lock the door! Don't let him in!'",
            "keywords": [
                  "talking about our house",
                  "bringing the dead man here",
                  "lock the door"
            ],
            "options": [
                  "'They are talking about our house! Quick, lock the door! Don't let him in!'",
                  "'Let us join the funeral procession.'",
                  "'May his soul rest in peace.'",
                  "'Let us invite them in for tea.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Ular bizning uyimiz haqida gapiryapti, uni biznikiga olib kelishyapti! Eshikni qulfla!' dedi."
      },
      {
            "id": "s34-q10",
            "order": 10,
            "question": "Whom did he say this to?",
            "modelAnswer": "He said this to his wife.",
            "keywords": [
                  "to his wife"
            ],
            "options": [
                  "To his wife",
                  "To his brother",
                  "To the crowd outside",
                  "To the dead man"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni xotiniga aytdi: 'said Nasreddin to his wife'."
      }
],
    trueFalseQuestions: [
      {
            "id": "s34-tf1",
            "order": 1,
            "statement": "Nasreddin lived in a very wealthy, well-heated palace.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uning uyi sovuq, olovsiz va qashshoq bo'lgan ('without light and without fire and without food')."
      },
      {
            "id": "s34-tf2",
            "order": 2,
            "statement": "The women were lamenting the destination of the grave.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Ayollar qabr haqida faryod chekishayotgan edi."
      },
      {
            "id": "s34-tf3",
            "order": 3,
            "statement": "Nasreddin mistook the description of the grave for his own impoverished house.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U qabr ta'rifini o'zining qashshoq uyi deb o'yladi ('They are talking about our house')."
      },
      {
            "id": "s34-tf4",
            "order": 4,
            "statement": "The funeral procession was actually trying to force its way into Nasreddin's home.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ular shunchaki qabristonga ketayotgan edilar."
      },
      {
            "id": "s34-tf5",
            "order": 5,
            "statement": "Nasreddin ordered his wife to lock the door.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Quick, lock the door! Don't let him in!'."
      },
      {
            "id": "s34-tf6",
            "order": 6,
            "statement": "The dead man was Nasreddin's distant cousin.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda marhumning kimligi haqida ma'lumot yo'q."
      }
]
  },
  {
    id: 'story-35',
    storyNumber: 35,
    title: "The Shirt That Brings Rain",
    titleUz: "Yomg'ir chaqiruvchi ko'ylak",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "One day when Nasreddin was travelling, he came to a village. The people there said to him, 'We have had no rain for three months, and we have no water. Our corn is dying. Please help us! Pray for rain!'\nNasreddin wanted to help these poor people, so he asked for a bucket of water. There was very little water in the village, but each family gave a little, and they filled a bucket and gave it to Nasreddin.\nThen Nasreddin took off his shirt and began to wash it. The people were surprised and angry.\n'That water was for our children to drink, and you are washing your shirt in it!'\nBut Nasreddin said, 'Wait!' He hung the shirt up to dry, and at once it began to rain.\n'I have only one shirt,' he said to the surprised people, 'and when I wash it and hang it up to dry, it always rains.'",
    paragraphs: [
      "One day when Nasreddin was travelling, he came to a village. The people there said to him, 'We have had no rain for three months, and we have no water. Our corn is dying. Please help us! Pray for rain!'",
      "Nasreddin wanted to help these poor people, so he asked for a bucket of water. There was very little water in the village, but each family gave a little, and they filled a bucket and gave it to Nasreddin.",
      "Then Nasreddin took off his shirt and began to wash it. The people were surprised and angry.\n'That water was for our children to drink, and you are washing your shirt in it!'",
      "But Nasreddin said, 'Wait!' He hung the shirt up to dry, and at once it began to rain.\n'I have only one shirt,' he said to the surprised people, 'and when I wash it and hang it up to dry, it always rains.'"
],
    summaryUz: "Uch oy davomida qurg'oqchilikdan ekinlari quriydigan qishloq ahli Nasriddindan yomg'ir so'rab duo qilishini o'tinishadi. Nasriddin ulardan bir chelak suv so'raydi. Aholi bolalariga asrab qo'ygan tomchi suvlarini yig'ib chelakni to'ldiradilar. Nasriddin esa yagona ko'ylagini yechib, shu suvda yuva boshlaydi! Odamlar g'azablanganda: 'Kuting!' deb ko'ylagini dorga osadi va shu zahotiyoq yomg'ir yog'a boshlaydi. Nasriddin: 'Mening bitta ko'ylagim bor, qachon uni yuvib quritishga ossam, albatta yomg'ir yog'adi!' deydi.",
    vocabulary: [
      {
            "word": "drought / no rain",
            "pos": "n.",
            "phonetic": "[draʊt]",
            "translationUz": "qurg'oqchilik",
            "definitionEn": "A prolonged period of abnormally low rainfall.",
            "exampleSentence": "They suffered without rain for three long months."
      },
      {
            "word": "corn",
            "pos": "n.",
            "phonetic": "[kɔːn]",
            "translationUz": "makkajo'xori, g'alla",
            "definitionEn": "Cereal crops such as wheat or maize.",
            "exampleSentence": "Our corn is withering and dying in the dry fields."
      },
      {
            "word": "pray for",
            "pos": "v.",
            "phonetic": "[preɪ fɔː]",
            "translationUz": "uchun duo qilmoq",
            "definitionEn": "To address a request to God or higher power.",
            "exampleSentence": "The desperate villagers begged him to pray for rain."
      },
      {
            "word": "bucket",
            "pos": "n.",
            "phonetic": "[ˈbʌkɪt]",
            "translationUz": "chelak",
            "definitionEn": "A cylindrical vessel for carrying liquids.",
            "exampleSentence": "Every family contributed water to fill one wooden bucket."
      },
      {
            "word": "hang up",
            "pos": "phr. v.",
            "phonetic": "[hæŋ ʌp]",
            "translationUz": "ilmoq, osmoq (dorga)",
            "definitionEn": "To suspend clothes on a line or hook to dry.",
            "exampleSentence": "He hung the clean wet shirt up to dry in the breeze."
      },
      {
            "word": "at once",
            "pos": "adv. phr.",
            "phonetic": "[æt wʌns]",
            "translationUz": "darhol, bir zumda",
            "definitionEn": "Immediately; instantaneously.",
            "exampleSentence": "At once thick clouds formed and rain started."
      }
],
    reproductionOutline: [
      "Travelling through a drought-stricken village, Nasreddin was begged by farmers to pray for rain to save their dying corn.",
      "To help, Nasreddin requested a single bucket of water, which the parched families scraped together.",
      "Outraging the villagers, Nasreddin stripped off his dusty shirt and began washing it in their precious drinking water.",
      "He hushed their outrage, pegged the wet shirt onto a clothesline, and rain instantly poured down.",
      "Nasreddin revealed his humorous superstition: with only one shirt, hanging it out to dry guaranteed heavy rain every single time!"
],
    modelRetelling: "During his travels, Nasreddin encountered a parched village where no rain had fallen for three consecutive months, leaving their crops dying. Desperate, the inhabitants pleaded with him to pray for heavenly rain. Agreeing to intervene, Nasreddin requested a bucket of water. Though water was scarce, every family sacrificed a cupful to fill a bucket. To their fury, Nasreddin stripped off his solitary shirt and began scrubbing it in their children's drinking water! Urging the enraged crowd to wait, he hung the drenched garment on a line. Miraculously, dark clouds gathered and torrential rain began to fall. Smiling at the stunned crowd, Nasreddin explained that having only one shirt, hanging it out to dry unfailingly provoked a downpour!",
    questions: [
      {
            "id": "s35-q1",
            "order": 1,
            "question": "What was Nasreddin doing at the beginning of this story?",
            "modelAnswer": "He was travelling.",
            "keywords": [
                  "travelling"
            ],
            "options": [
                  "He was travelling",
                  "He was farming",
                  "He was preaching",
                  "He was shopping"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U sayohat qilib yurgan edi: 'Nasreddin was travelling'."
      },
      {
            "id": "s35-q2",
            "order": 2,
            "question": "What happened one day?",
            "modelAnswer": "He came to a village.",
            "keywords": [
                  "came to a village"
            ],
            "options": [
                  "He came to a village",
                  "He lost his horse",
                  "He met a bandit",
                  "He ran out of food"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bir qishloqqa yetib keldi."
      },
      {
            "id": "s35-q3",
            "order": 3,
            "question": "Who spoke to him?",
            "modelAnswer": "The people of the village spoke to him.",
            "keywords": [
                  "people there said to him"
            ],
            "options": [
                  "The people of the village",
                  "The village chief only",
                  "A young shepherd boy",
                  "The local priest"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qishloq ahli unga murojaat qildi."
      },
      {
            "id": "s35-q4",
            "order": 4,
            "question": "What did they say?",
            "modelAnswer": "They said they had no rain for three months, their corn was dying, and begged him to pray for rain.",
            "keywords": [
                  "no rain for three months",
                  "corn is dying",
                  "Pray for rain"
            ],
            "options": [
                  "'We have had no rain for three months, our corn is dying. Please help us! Pray for rain!'",
                  "'Leave our village immediately!'",
                  "'Buy our dried corn for a cheap price!'",
                  "'Can you build us a water well?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular 3 oydan beri yomg'ir yo'qligini, ekinlari quriydiganini aytib, yomg'ir so'rab duo qilishini o'tindilar."
      },
      {
            "id": "s35-q5",
            "order": 5,
            "question": "What did Nasreddin want to do?",
            "modelAnswer": "Nasreddin wanted to help these poor people.",
            "keywords": [
                  "wanted to help these poor people"
            ],
            "options": [
                  "He wanted to help these poor people",
                  "He wanted to make fun of them",
                  "He wanted to demand gold",
                  "He wanted to sleep in their barn"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bu bechora odamlarga yordam berishni xohladi."
      },
      {
            "id": "s35-q6",
            "order": 6,
            "question": "What did he ask for?",
            "modelAnswer": "He asked for a bucket of water.",
            "keywords": [
                  "asked for a bucket of water"
            ],
            "options": [
                  "A bucket of water",
                  "Ten loaves of bread",
                  "A prayer carpet",
                  "A white horse"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bir chelak suv so'radi."
      },
      {
            "id": "s35-q7",
            "order": 7,
            "question": "What did the people do?",
            "modelAnswer": "Each family gave a little, filled a bucket and gave it to Nasreddin.",
            "keywords": [
                  "each family gave a little",
                  "filled a bucket"
            ],
            "options": [
                  "Each family gave a little, filled a bucket and gave it to him",
                  "They refused to give him any water",
                  "They dug a new canal",
                  "They brought water from a faraway river"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Har bir oila ozgina-ozgina suv berib, chelakni to'ldirib unga berdilar."
      },
      {
            "id": "s35-q8",
            "order": 8,
            "question": "Was this easy for them?",
            "modelAnswer": "No, it was not easy for them.",
            "keywords": [
                  "not easy"
            ],
            "options": [
                  "No, it was not easy at all",
                  "Yes, they had rivers of water",
                  "Yes, it was very simple",
                  "It took no effort"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu ular uchun oson emas edi, chunki suv nihoyatda tanqis edi."
      },
      {
            "id": "s35-q9",
            "order": 9,
            "question": "Why?",
            "modelAnswer": "Because there was very little water in the village.",
            "keywords": [
                  "very little water in the village"
            ],
            "options": [
                  "Because there was very little water left in the village",
                  "Because the buckets were broken",
                  "Because the well was poisoned",
                  "Because water was illegal"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki qishloqda suv juda kam qolgan edi."
      },
      {
            "id": "s35-q10",
            "order": 10,
            "question": "What did Nasreddin do then?",
            "modelAnswer": "He took off his shirt and began to wash it in the bucket.",
            "keywords": [
                  "took off his shirt",
                  "wash it"
            ],
            "options": [
                  "He took off his shirt and began to wash it",
                  "He drank the entire bucket of water",
                  "He poured it over the dry corn",
                  "He sprinkled it on the villagers"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ko'ylagini yechib, o'sha chelakdagi suvda yuva boshladi."
      },
      {
            "id": "s35-q11",
            "order": 11,
            "question": "How did the people feel?",
            "modelAnswer": "The people were surprised and angry.",
            "keywords": [
                  "surprised and angry"
            ],
            "options": [
                  "They were surprised and angry",
                  "They were pleased and cheered",
                  "They were indifferent",
                  "They were frightened of him"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Odamlar hayron qolishdi va qattiq g'azablandilar."
      },
      {
            "id": "s35-q12",
            "order": 12,
            "question": "What did they say?",
            "modelAnswer": "They said, 'That water was for our children to drink, and you are washing your shirt in it!'",
            "keywords": [
                  "water was for our children to drink",
                  "washing your shirt in it"
            ],
            "options": [
                  "'That water was for our children to drink, and you are washing your shirt in it!'",
                  "'Wash our clothes too!'",
                  "'Use more soap!'",
                  "'Where is the miracle?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular: 'Bu suv bolalarimiz ichishi uchun edi, sen esa unda ko'ylagingni yuvyapsan!' dedilar."
      },
      {
            "id": "s35-q13",
            "order": 13,
            "question": "What did Nasreddin answer?",
            "modelAnswer": "Nasreddin said, 'Wait!'",
            "keywords": [
                  "Wait"
            ],
            "options": [
                  "'Wait!'",
                  "'Go away!'",
                  "'Give me more water!'",
                  "'I don't care about your children!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin: 'Kuting!' dedi."
      },
      {
            "id": "s35-q14",
            "order": 14,
            "question": "What happened then?",
            "modelAnswer": "He hung the shirt up to dry, and at once it began to rain.",
            "keywords": [
                  "hung the shirt up to dry",
                  "began to rain"
            ],
            "options": [
                  "He hung the shirt to dry, and at once it began to rain",
                  "The shirt was blown away by wind",
                  "The sun dried the shirt in one second",
                  "A lightning bolt struck the shirt"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ko'ylakni quritishga osishi bilan yomg'ir quya boshladi."
      },
      {
            "id": "s35-q15",
            "order": 15,
            "question": "How did the people feel?",
            "modelAnswer": "The people were surprised.",
            "keywords": [
                  "surprised"
            ],
            "options": [
                  "They were surprised and amazed",
                  "They were disappointed",
                  "They were bored",
                  "They were still furious"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Odamlar lol qolib hayratda qoldilar."
      },
      {
            "id": "s35-q16",
            "order": 16,
            "question": "What did Nasreddin say to them?",
            "modelAnswer": "He said, 'I have only one shirt, and when I wash it and hang it up to dry, it always rains.'",
            "keywords": [
                  "only one shirt",
                  "hang it up to dry",
                  "always rains"
            ],
            "options": [
                  "'I have only one shirt, and when I wash it and hang it up to dry, it always rains.'",
                  "'You must pay me ten bags of corn now.'",
                  "'I am the master of thunder.'",
                  "'My prayer was answered instantly.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Mening bitta ko'ylagim bor, qachon uni yuvib quritishga ossam, albatta yomg'ir yog'adi' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s35-tf1",
            "order": 1,
            "statement": "The village had been suffering from lack of rain for three months.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'We have had no rain for three months'."
      },
      {
            "id": "s35-tf2",
            "order": 2,
            "statement": "The villagers had plenty of surplus water stored in large cisterns.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Qishloqda suv deyarli qolmagan edi ('There was very little water in the village')."
      },
      {
            "id": "s35-tf3",
            "order": 3,
            "statement": "Nasreddin washed a silk carpet with the bucket of water.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U o'zining yagona ko'ylagini yuvgan ('took off his shirt and began to wash it')."
      },
      {
            "id": "s35-tf4",
            "order": 4,
            "statement": "The villagers were initially furious at Nasreddin for squandering their drinking water.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The people were surprised and angry. That water was for our children to drink'."
      },
      {
            "id": "s35-tf5",
            "order": 5,
            "statement": "Rain began pouring as soon as the wet shirt was hung up.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'He hung the shirt up to dry, and at once it began to rain'."
      },
      {
            "id": "s35-tf6",
            "order": 6,
            "statement": "Nasreddin owned a wardrobe of fifty shirts in his home village.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uning bor-yo'g'i bitta ko'ylagi bor edi ('I have only one shirt')."
      }
]
  },
  {
    id: 'story-36',
    storyNumber: 36,
    title: "The Five-Pound Note Trick",
    titleUz: "Besh funtlik hiyla",
    cefrLevel: 'A2',
    wordCount: 169,
    readingTimeMinutes: 1,
    storyText: "Three people were walking along a street, first a big man, then a pretty woman, and then an old gentleman. The first two went round a corner. Suddenly the gentleman saw a piece of paper on the ground. He picked it up. It was five pounds.\nA few seconds later, the young woman came back. She was crying. 'I have dropped five pounds,' she said.\n'Don't cry', said the gentleman. 'Here it is.'\nThe young woman thanked him and went away. After a few seconds, the big man came back. He was looking for something.\nSuddenly a window opened and a small man looked out. 'I saw five pounds fall from your pocket,' he said, 'but that man gave it to a young woman.'\nThe big man was very angry. The gentleman was frightened and gave him another five pounds.\nWhen he had gone, the young woman came back to get her one pound sixty-seven pence, and the small man came out to get his.",
    paragraphs: [
      "Three people were walking along a street, first a big man, then a pretty woman, and then an old gentleman. The first two went round a corner. Suddenly the gentleman saw a piece of paper on the ground. He picked it up. It was five pounds.",
      "A few seconds later, the young woman came back. She was crying. 'I have dropped five pounds,' she said.\n'Don't cry', said the gentleman. 'Here it is.'\nThe young woman thanked him and went away. After a few seconds, the big man came back. He was looking for something.",
      "Suddenly a window opened and a small man looked out. 'I saw five pounds fall from your pocket,' he said, 'but that man gave it to a young woman.'\nThe big man was very angry. The gentleman was frightened and gave him another five pounds.",
      "When he had gone, the young woman came back to get her one pound sixty-seven pence, and the small man came out to get his."
],
    summaryUz: "Ko'chada ketayotgan qariya yerda tushib qolgan 5 funtlik pulni topib oladi. Ko'z yosh to'kib kelgan ayolga uni qaytarib beradi. So'ng gavdali erkak kelib pul qidiradi, derazadan bir odam mo'ralab: 'Sening cho'ntagingdan 5 funt tushganini ko'rdim, ammo anavi qariya uni ayolga berib yubordi!' deydi. Gavdali erkakning g'azabidan qo'rqqan qariya unga cho'ntagidan boshqa 5 funt beradi. Qariya ketgach, ayol va derazadagi odam chiqib, 5 funtni teng 3 ga (har biri 1 funt 67 pensdan) bo'lib olishadi!",
    vocabulary: [
      {
            "word": "round a corner",
            "pos": "prep. phr.",
            "phonetic": "[raʊnd ə ˈkɔːnə]",
            "translationUz": "burchakdan burilmoq",
            "definitionEn": "To pass around a street corner out of sight.",
            "exampleSentence": "The first two walkers disappeared round a corner."
      },
      {
            "word": "pick up",
            "pos": "phr. v.",
            "phonetic": "[pɪk ʌp]",
            "translationUz": "yerdan ko'tarib olmoq",
            "definitionEn": "To lift something up from the ground.",
            "exampleSentence": "He saw five pounds on the ground and picked it up."
      },
      {
            "word": "cry",
            "pos": "v.",
            "phonetic": "[kraɪ]",
            "translationUz": "yig'lamoq",
            "definitionEn": "To weep or shed tears.",
            "exampleSentence": "She was pretending to cry to fool the gentleman."
      },
      {
            "word": "fall from pocket",
            "pos": "v. phr.",
            "phonetic": "[fɔːl frəm ˈpɒkɪt]",
            "translationUz": "cho'ntagidan tushib ketmoq",
            "definitionEn": "To slip out of one's garment pocket accidentally.",
            "exampleSentence": "I saw a bank note fall from your jacket pocket."
      },
      {
            "word": "frightened",
            "pos": "adj.",
            "phonetic": "[ˈfraɪtnd]",
            "translationUz": "qo'rqib ketgan",
            "definitionEn": "Terrified, scared, or intimidated.",
            "exampleSentence": "The old gentleman was frightened by the burly man."
      },
      {
            "word": "trick / swindle",
            "pos": "n.",
            "phonetic": "[trɪk] / [ˈswɪndl]",
            "translationUz": "hiyla, firibgarlik",
            "definitionEn": "A cunning scheme to deceive and steal money from someone.",
            "exampleSentence": "The three conspirators executed a clever trick."
      }
],
    reproductionOutline: [
      "An elderly gentleman found a five-pound note dropped in the street behind a woman and a burly man.",
      "Moments later, the weeping woman returned claiming she lost five pounds, and the honest gentleman surrendered it.",
      "Next, the imposing man returned searching, backed up by a neighbour shouting from a window that the note was his.",
      "Threatened by the angry giant, the terrified gentleman compensated him with another five pounds of his own cash.",
      "Once the victim departed, the woman and the window man gathered to divide the extorted five pounds three ways (£1.67 each)!"
],
    modelRetelling: "While walking down a street behind a burly man and an attractive woman, an old gentleman discovered a five-pound note lying on the pavement. Seconds after the pair turned the corner, the young woman returned in tears, crying that she had just dropped her five pounds. The chivalrous gentleman immediately handed her the money. Shortly thereafter, the burly man reappeared frantically searching the ground. A conspirator leaned out of an overlooking window and declared that he had seen the note drop from the big man's pocket and watched the gentleman give it away. Intimidated by the giant's menacing rage, the frightened gentleman handed over five pounds of his own money to defuse the situation. As soon as the victim vanished, the woman and the accomplice emerged to claim their equal one-pound-sixty-seven-pence shares of the staged extortion!",
    questions: [
      {
            "id": "s36-q1",
            "order": 1,
            "question": "What people were walking along the street at the beginning of this story?",
            "modelAnswer": "A big man, a pretty woman, and an old gentleman.",
            "keywords": [
                  "big man",
                  "pretty woman",
                  "old gentleman"
            ],
            "options": [
                  "A big man, a pretty woman, and an old gentleman",
                  "Two policemen and a thief",
                  "A mother and her three children",
                  "Three university professors"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Gavdali erkak, chiroyli ayol va keksa janob ketishayotgan edi."
      },
      {
            "id": "s36-q2",
            "order": 2,
            "question": "What did the first two do?",
            "modelAnswer": "The first two went round a corner.",
            "keywords": [
                  "went round a corner"
            ],
            "options": [
                  "They went round a corner",
                  "They entered a cafe",
                  "They started a fight",
                  "They ran away"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Dastlabki ikkitasi burchakdan burilib ketishdi: 'went round a corner'."
      },
      {
            "id": "s36-q3",
            "order": 3,
            "question": "What happened then?",
            "modelAnswer": "Suddenly the gentleman saw a piece of paper on the ground.",
            "keywords": [
                  "saw a piece of paper on the ground"
            ],
            "options": [
                  "The gentleman saw a piece of paper on the ground",
                  "A carriage crashed",
                  "A dog barked at him",
                  "Rain began to pour"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya yerda bir parcha qog'ozni ko'rib qoldi."
      },
      {
            "id": "s36-q4",
            "order": 4,
            "question": "What did the old gentleman do?",
            "modelAnswer": "He picked it up.",
            "keywords": [
                  "picked it up"
            ],
            "options": [
                  "He picked it up",
                  "He walked past it",
                  "He kicked it away",
                  "He hid it under his shoe"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U uni yerdan ko'tarib oldi: 'He picked it up'."
      },
      {
            "id": "s36-q5",
            "order": 5,
            "question": "What was the piece of paper?",
            "modelAnswer": "It was five pounds.",
            "keywords": [
                  "five pounds"
            ],
            "options": [
                  "It was five pounds",
                  "A love letter",
                  "A grocery receipt",
                  "A cinema ticket"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu 5 funtlik pul edi: 'It was five pounds'."
      },
      {
            "id": "s36-q6",
            "order": 6,
            "question": "What happened then?",
            "modelAnswer": "A few seconds later, the young woman came back.",
            "keywords": [
                  "young woman came back"
            ],
            "options": [
                  "The young woman came back",
                  "The police arrived",
                  "The big man shouted",
                  "A window broke"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir necha soniyadan keyin yosh ayol qaytib keldi."
      },
      {
            "id": "s36-q7",
            "order": 7,
            "question": "What was the young woman doing?",
            "modelAnswer": "She was crying.",
            "keywords": [
                  "crying"
            ],
            "options": [
                  "She was crying",
                  "She was laughing",
                  "She was eating an apple",
                  "She was running for a bus"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yig'layotgan edi: 'She was crying'."
      },
      {
            "id": "s36-q8",
            "order": 8,
            "question": "What did she say?",
            "modelAnswer": "She said, 'I have dropped five pounds.'",
            "keywords": [
                  "dropped five pounds"
            ],
            "options": [
                  "'I have dropped five pounds.'",
                  "'Can you help me find my handbag?'",
                  "'I am lost in this city.'",
                  "'Call an ambulance!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Besh funtimni tushirib qo'ydim' dedi."
      },
      {
            "id": "s36-q9",
            "order": 9,
            "question": "What did the old gentleman say?",
            "modelAnswer": "He said, 'Don't cry. Here it is.'",
            "keywords": [
                  "Don't cry",
                  "Here it is"
            ],
            "options": [
                  "'Don't cry. Here it is.'",
                  "'Show me your identity card.'",
                  "'Finders keepers!'",
                  "'Go to the police station.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya: 'Yig'lama, mana u' dedi."
      },
      {
            "id": "s36-q10",
            "order": 10,
            "question": "What did the young woman do?",
            "modelAnswer": "She thanked him and went away.",
            "keywords": [
                  "thanked him and went away"
            ],
            "options": [
                  "She thanked him and went away",
                  "She kissed his cheek",
                  "She counted the change",
                  "She called the big man"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ayol minnatdorchilik bildirib ketib qoldi."
      },
      {
            "id": "s36-q11",
            "order": 11,
            "question": "What happened then?",
            "modelAnswer": "After a few seconds, the big man came back.",
            "keywords": [
                  "big man came back"
            ],
            "options": [
                  "The big man came back",
                  "The sun went down",
                  "A crowd gathered",
                  "The gentleman got on a bus"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir ozdan keyin gavdali erkak qaytib keldi."
      },
      {
            "id": "s36-q12",
            "order": 12,
            "question": "What was the big man doing?",
            "modelAnswer": "He was looking for something.",
            "keywords": [
                  "looking for something"
            ],
            "options": [
                  "He was looking for something",
                  "He was drinking water",
                  "He was singing",
                  "He was reading a letter"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U nimanidir qidirayotgan edi: 'looking for something'."
      },
      {
            "id": "s36-q13",
            "order": 13,
            "question": "What happened after that?",
            "modelAnswer": "Suddenly a window opened and a small man looked out.",
            "keywords": [
                  "window opened",
                  "small man looked out"
            ],
            "options": [
                  "A window opened and a small man looked out",
                  "A whistle blew",
                  "A carriage stopped",
                  "The woman screamed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "To'satdan deraza ochilib, bir pakana odam qaradi."
      },
      {
            "id": "s36-q14",
            "order": 14,
            "question": "What did the man at the window say?",
            "modelAnswer": "He said, 'I saw five pounds fall from your pocket, but that man gave it to a young woman.'",
            "keywords": [
                  "saw five pounds fall from your pocket",
                  "gave it to a young woman"
            ],
            "options": [
                  "'I saw five pounds fall from your pocket, but that man gave it to a young woman.'",
                  "'Be quiet down there!'",
                  "'Call the police immediately!'",
                  "'Throw the money up to me!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Derazadagi odam: 'Cho'ntagingdan 5 funt tushganini ko'rdim, ammo anavi kishi uni ayolga berib yubordi!' dedi."
      },
      {
            "id": "s36-q15",
            "order": 15,
            "question": "How did the big man feel?",
            "modelAnswer": "The big man was very angry.",
            "keywords": [
                  "very angry"
            ],
            "options": [
                  "He was very angry",
                  "He was laughing",
                  "He was indifferent",
                  "He was polite and gentle"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Gavdali erkak juda g'azablandi: 'very angry'."
      },
      {
            "id": "s36-q16",
            "order": 16,
            "question": "How did the old gentleman feel?",
            "modelAnswer": "The old gentleman was frightened.",
            "keywords": [
                  "frightened"
            ],
            "options": [
                  "He was frightened",
                  "He was courageous",
                  "He was amused",
                  "He was bored"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Keksa janob qo'rqib ketdi: 'frightened'."
      },
      {
            "id": "s36-q17",
            "order": 17,
            "question": "What did he do?",
            "modelAnswer": "He gave the big man another five pounds.",
            "keywords": [
                  "gave him another five pounds"
            ],
            "options": [
                  "He gave him another five pounds",
                  "He punched the big man",
                  "He blew a police whistle",
                  "He ran away around the corner"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qo'rqib, gavdali erkakka o'z cho'ntagidan boshqa 5 funt berdi."
      },
      {
            "id": "s36-q18",
            "order": 18,
            "question": "What happened when the old gentleman went away?",
            "modelAnswer": "The young woman and the small man came back to get their share of the money.",
            "keywords": [
                  "young woman came back",
                  "small man came out to get his"
            ],
            "options": [
                  "The young woman and the small man came out to divide the five pounds",
                  "The big man was arrested by police",
                  "The gentleman returned with a lawyer",
                  "The money vanished into thin air"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qariya ketishi bilan ayol va derazadagi odam chiqib, pulni bo'lishib olishdi."
      },
      {
            "id": "s36-q19",
            "order": 19,
            "question": "How much did the young woman get?",
            "modelAnswer": "She got one pound sixty-seven pence.",
            "keywords": [
                  "one pound sixty-seven pence"
            ],
            "options": [
                  "One pound sixty-seven pence (£1.67)",
                  "Five pounds",
                  "Fifty pence",
                  "Two pounds fifty pence"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ayol 1 funt 67 pens oldi (5 funtning 3 dan 1 qismi)."
      },
      {
            "id": "s36-q20",
            "order": 20,
            "question": "What were these three people?",
            "modelAnswer": "They were thieves / tricksters / confidence tricksters.",
            "keywords": [
                  "thieves",
                  "tricksters",
                  "swindlers"
            ],
            "options": [
                  "They were thieves and confidence tricksters working together",
                  "They were honest citizens",
                  "They were wealthy actors filming a movie",
                  "They were innocent bystanders"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bu uchala odam birgalikda ishlovchi firibgar o'g'rilar edi!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s36-tf1",
            "order": 1,
            "statement": "The old gentleman spotted a five-pound note dropped on the ground.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Suddenly the gentleman saw a piece of paper on the ground... It was five pounds'."
      },
      {
            "id": "s36-tf2",
            "order": 2,
            "statement": "The young woman was genuinely crying because she lost her rent money.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U aldash uchun yig'lagan, chunki ular bir guruh firibgarlar edi."
      },
      {
            "id": "s36-tf3",
            "order": 3,
            "statement": "The man leaning out of the window was a sworn police detective.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U ham jinoiy to'daning sherigi edi ('the small man came out to get his')."
      },
      {
            "id": "s36-tf4",
            "order": 4,
            "statement": "The old gentleman paid five pounds of his own money out of fear.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The gentleman was frightened and gave him another five pounds'."
      },
      {
            "id": "s36-tf5",
            "order": 5,
            "statement": "The three swindlers split the five pounds equally among themselves.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Har biri taxminan £1.67 dan bo'lib olishgan."
      },
      {
            "id": "s36-tf6",
            "order": 6,
            "statement": "The police arrived and arrested all three criminals in the alley.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda politsiya kelgani yoki hibsga olingani haqida aytilmagan."
      }
]
  }
,
  {
    id: 'story-37',
    storyNumber: 37,
    title: "Nasreddin and the Cat",
    titleUz: "Nasriddin va Mushuk",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "Nasreddin liked fish very much, and when he had enough money, he bought some for his dinner when he went to the market, and took it home. But when his wife saw the fish, she always said to herself, 'Good! Now I will invite my friends to lunch and we will eat this fish. They like fish very much.'\nSo when Nasreddin came home in the evening after his work, the fish was never there, and his wife always said, 'Oh, your cat ate it! She is a very bad animal!' And she gave Nasreddin soup and rice for his dinner.\nBut one evening when this happened, Nasreddin became very angry. He took the cat and his wife to the shop near his house and weighed the cat carefully. Then he turned to his wife and said, 'My fish weighed two kilos. This cat weighs two kilos too. My fish is here, you say. Then where is my cat?'",
    paragraphs: [
      "Nasreddin liked fish very much, and when he had enough money, he bought some for his dinner when he went to the market, and took it home. But when his wife saw the fish, she always said to herself, 'Good! Now I will invite my friends to lunch and we will eat this fish. They like fish very much.'",
      "So when Nasreddin came home in the evening after his work, the fish was never there, and his wife always said, 'Oh, your cat ate it! She is a very bad animal!' And she gave Nasreddin soup and rice for his dinner.",
      "But one evening when this happened, Nasreddin became very angry. He took the cat and his wife to the shop near his house and weighed the cat carefully. Then he turned to his wife and said, 'My fish weighed two kilos. This cat weighs two kilos too. My fish is here, you say. Then where is my cat?'"
],
    summaryUz: "Nasriddin baliqni yaxshi ko'rar va puli bo'lganda bozordan baliq olib kelardi. Xotini esa baliqni dugonalariga pishirib berib, kechqurun Nasriddinga: 'Baliqni mushuk yeb qo'ydi' deb sho'rva bilan guruch berardi. Bir kuni Nasriddinning sabri tugab, xotini va mushukni do'konga olib borib, tarozida mushukni tortadi. So'ng xotiniga: 'Men olgan baliq 2 kilo edi, bu mushuk ham 2 kilo chiqdi. Agar bu o'sha baliq bo'lsa, unda mushugim qani? Agar bu mushuk bo'lsa, baliq qani?!' deydi.",
    vocabulary: [
      {
            "word": "fish",
            "pos": "n.",
            "phonetic": "[fɪʃ]",
            "translationUz": "baliq",
            "definitionEn": "A limbless cold-blooded vertebrate animal with gills living in water.",
            "exampleSentence": "Nasreddin loved fresh fried fish."
      },
      {
            "word": "enough",
            "pos": "determiner",
            "phonetic": "[ɪˈnʌf]",
            "translationUz": "yetarli",
            "definitionEn": "As much or as many as required.",
            "exampleSentence": "Whenever he had enough money, he treated himself to fish."
      },
      {
            "word": "weigh",
            "pos": "v.",
            "phonetic": "[weɪ]",
            "translationUz": "tortmoq (tarozida)",
            "definitionEn": "To find out how heavy someone or something is using scales.",
            "exampleSentence": "He weighed the cat carefully on the merchant's scale."
      },
      {
            "word": "kilo",
            "pos": "n.",
            "phonetic": "[ˈkiːləʊ]",
            "translationUz": "kilogramm",
            "definitionEn": "A kilogram (1000 grams).",
            "exampleSentence": "The fish weighed exactly two kilos."
      },
      {
            "word": "turn to",
            "pos": "phr. v.",
            "phonetic": "[tɜːn tuː]",
            "translationUz": "yuzlanmoq, qaramog'i",
            "definitionEn": "To change one's posture to face someone.",
            "exampleSentence": "He turned to his deceitful wife and questioned her."
      },
      {
            "word": "soup and rice",
            "pos": "n. phr.",
            "phonetic": "[suːp ənd raɪs]",
            "translationUz": "sho'rva va guruch",
            "definitionEn": "A plain, basic meal of broth and grains.",
            "exampleSentence": "She fed him plain soup and rice instead of fish."
      }
],
    reproductionOutline: [
      "Fond of fish, Nasreddin occasionally bought dinner fish at the market and carried it home.",
      "His wife routinely hosted her friends to eat the delicacy at lunchtime behind his back.",
      "In the evening, she served him plain rice, claiming their wicked cat had devoured the entire fish.",
      "Fed up, Nasreddin marched wife and cat to the local grocer to weigh the feline.",
      "Finding the cat weighed exactly two kilos—the precise weight of the fish—Nasreddin asked: \"If this is the fish, where is my cat?\""
],
    modelRetelling: "Nasreddin was exceedingly fond of fish, purchasing some at the bazaar whenever funds permitted. However, every time he brought fish home, his wife secretly cooked it for her lady friends at lunch. When Nasreddin returned from work anticipating a savory dinner, he was consistently served plain rice and soup, with his wife feigning outrage that their greedy cat had eaten the fish. One evening, thoroughly fed up with this deceit, Nasreddin carried both the cat and his wife to the nearby grocery store and placed the animal on the merchant's scale. The scale tipped at precisely two kilograms. Turning to his guilty wife, Nasreddin dryly inquired: 'My fish weighed two kilos, and this cat weighs exactly two kilos. If this weight is the fish, where is my cat? And if this is the cat, where on earth is my fish?'",
    questions: [
      {
            "id": "s37-q1",
            "order": 1,
            "question": "What did Nasreddin like very much?",
            "modelAnswer": "Nasreddin liked fish very much.",
            "keywords": [
                  "liked fish very much"
            ],
            "options": [
                  "Fish",
                  "Roast chicken",
                  "Sweet cakes",
                  "Beef stew"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddin baliqni juda yaxshi ko'rar edi."
      },
      {
            "id": "s37-q2",
            "order": 2,
            "question": "When did he buy some of this?",
            "modelAnswer": "He bought some when he had enough money.",
            "keywords": [
                  "had enough money"
            ],
            "options": [
                  "When he had enough money",
                  "Every single day",
                  "Only on his birthday",
                  "During Ramadan only"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yetarli puli bo'lgan vaqtlarda sotib olardi."
      },
      {
            "id": "s37-q3",
            "order": 3,
            "question": "What did he buy it for?",
            "modelAnswer": "He bought it for his dinner.",
            "keywords": [
                  "for his dinner"
            ],
            "options": [
                  "For his dinner",
                  "To feed his cat",
                  "To sell at a profit",
                  "To give to the poor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kechki ovqati uchun sotib olardi: 'for his dinner'."
      },
      {
            "id": "s37-q4",
            "order": 4,
            "question": "What did he do with it then?",
            "modelAnswer": "He took it home.",
            "keywords": [
                  "took it home"
            ],
            "options": [
                  "He took it home",
                  "He cooked it in the market",
                  "He gave it to a friend",
                  "He salted it in a barrel"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U baliqni uyiga olib ketardi."
      },
      {
            "id": "s37-q5",
            "order": 5,
            "question": "What did his wife say to herself when she saw it?",
            "modelAnswer": "She said, 'Good! Now I will invite my friends to lunch and we will eat this fish.'",
            "keywords": [
                  "invite my friends to lunch",
                  "eat this fish"
            ],
            "options": [
                  "'Good! Now I will invite my friends to lunch and we will eat this fish.'",
                  "'I must cook this for my husband tonight.'",
                  "'What an ugly, smelly fish!'",
                  "'I will feed this to the neighbours.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini ichida dugonalarini chaqirib, tushlikka shu baliqni yeyishini aytardi."
      },
      {
            "id": "s37-q6",
            "order": 6,
            "question": "What happened when Nasreddin came home?",
            "modelAnswer": "The fish was never there.",
            "keywords": [
                  "fish was never there"
            ],
            "options": [
                  "The fish was never there",
                  "A delicious fish was waiting on the table",
                  "His wife was crying",
                  "The cat had run away"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kechqurun qaytganida baliqdan asar ham qolmagan bo'lardi."
      },
      {
            "id": "s37-q7",
            "order": 7,
            "question": "What did his wife always say?",
            "modelAnswer": "She always said, 'Oh, your cat ate it! She is a very bad animal!'",
            "keywords": [
                  "your cat ate it",
                  "very bad animal"
            ],
            "options": [
                  "'Oh, your cat ate it! She is a very bad animal!'",
                  "'I burned it on the stove.'",
                  "'A beggar stole it from the kitchen.'",
                  "'I threw it to the birds.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini doim mushuk yeb qo'yganini va u juda yomon hayvonligini aytardi."
      },
      {
            "id": "s37-q8",
            "order": 8,
            "question": "What did she give Nasreddin for his dinner?",
            "modelAnswer": "She gave Nasreddin soup and rice for his dinner.",
            "keywords": [
                  "soup and rice"
            ],
            "options": [
                  "Soup and rice",
                  "Bread and cheese",
                  "Fried potatoes",
                  "Nothing at all"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U Nasriddinga sho'rva va guruch berardi."
      },
      {
            "id": "s37-q9",
            "order": 9,
            "question": "How did Nasreddin feel one evening when this happened?",
            "modelAnswer": "Nasreddin became very angry.",
            "keywords": [
                  "became very angry"
            ],
            "options": [
                  "He became very angry",
                  "He was amused",
                  "He felt sorry for the cat",
                  "He was completely indifferent"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nasriddinning qattiq jahli chiqdi: 'became very angry'."
      },
      {
            "id": "s37-q10",
            "order": 10,
            "question": "What did he do?",
            "modelAnswer": "He took the cat and his wife to the shop near his house and weighed the cat carefully.",
            "keywords": [
                  "took the cat and his wife",
                  "weighed the cat carefully"
            ],
            "options": [
                  "He took the cat and his wife to the shop and weighed the cat",
                  "He beat the cat with a broom",
                  "He divorced his wife on the spot",
                  "He bought ten more kilos of fish"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U xotini va mushukni do'konga olib borib, mushukni tarozida tortdi."
      },
      {
            "id": "s37-q11",
            "order": 11,
            "question": "What did he say to his wife then?",
            "modelAnswer": "He said, 'My fish weighed two kilos. This cat weighs two kilos too. My fish is here, you say. Then where is my cat?'",
            "keywords": [
                  "fish weighed two kilos",
                  "cat weighs two kilos",
                  "where is my cat"
            ],
            "options": [
                  "'My fish weighed two kilos. This cat weighs two kilos too. If my fish is here, where is my cat?'",
                  "'This cat is innocent, apologize to her.'",
                  "'You must pay me for two kilos of fish.'",
                  "'Never cook soup again.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Baliq 2 kilo edi, bu mushuk ham 2 kilo chiqdi. Agar bu baliq bo'lsa, mushuk qani?' dedi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s37-tf1",
            "order": 1,
            "statement": "Nasreddin bought fresh fish whenever his finances allowed.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'when he had enough money, he bought some for his dinner'."
      },
      {
            "id": "s37-tf2",
            "order": 2,
            "statement": "The cat genuinely devoured the two kilograms of fish each time.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Baliqni xotini dugonalari bilan birga yeb qo'ygan edi."
      },
      {
            "id": "s37-tf3",
            "order": 3,
            "statement": "The wife served Nasreddin roast beef instead of fish.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U sho'rva va guruch bergan ('soup and rice for his dinner')."
      },
      {
            "id": "s37-tf4",
            "order": 4,
            "statement": "The grocery store was located adjacent to Nasreddin's residence.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'to the shop near his house'."
      },
      {
            "id": "s37-tf5",
            "order": 5,
            "statement": "The cat weighed five kilograms according to the grocer's scales.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Mushuk roppa-rosa 2 kilo chiqqan ('weighs two kilos too')."
      },
      {
            "id": "s37-tf6",
            "order": 6,
            "statement": "Nasreddin used the scale measurement to expose his wife's recurring lie.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U tarozi orqali xotinining yolg'onini fosh qildi."
      }
]
  },
  {
    id: 'story-38',
    storyNumber: 38,
    title: "Nasreddin in the Bathroom",
    titleUz: "Nasriddin hammomda",
    cefrLevel: 'A2',
    wordCount: 156,
    readingTimeMinutes: 1,
    storyText: "One day when Nasreddin was having a bath, he began to sing. The bathroom was small and had a stone floor, so his song was very beautiful, he thought.\n'Oh,' he said, 'I sing very well. I will sing to other people too, and perhaps I will become a famous singer, and everybody in the world will want to hear me.'\nSo after his bath Nasreddin went up on to the flat roof of the house and began to sing his song very loudly. But he did not like it very much when he sang it there.\nA man was walking across the square in front of the house, and when he heard Nasreddin, he said, 'What are you doing? You are making a terrible noise. Nobody wants to hear it.'\n'Oh, you think so, do you?' answered Nasreddin. 'Well, I really sing very beautifully. Come to my bathroom and you will hear me.'",
    paragraphs: [
      "One day when Nasreddin was having a bath, he began to sing. The bathroom was small and had a stone floor, so his song was very beautiful, he thought.",
      "'Oh,' he said, 'I sing very well. I will sing to other people too, and perhaps I will become a famous singer, and everybody in the world will want to hear me.'",
      "So after his bath Nasreddin went up on to the flat roof of the house and began to sing his song very loudly. But he did not like it very much when he sang it there.",
      "A man was walking across the square in front of the house, and when he heard Nasreddin, he said, 'What are you doing? You are making a terrible noise. Nobody wants to hear it.'\n'Oh, you think so, do you?' answered Nasreddin. 'Well, I really sing very beautifully. Come to my bathroom and you will hear me.'"
],
    summaryUz: "Hammomda cho'milayotgan Nasriddin qo'shiq aytadi. Tosh polli tor hammomda aks-sado berib ovozi o'ziga juda chiroyli eshitiladi. Mashhur qo'shiqchi bo'laman deb, cho'milib bo'lgach tomga chiqib baqirib qo'shiq ayta boshlaydi. Maydondan o'tayotgan bir kishi: 'Nima qilyapsan? Dahshatli shovqin solyapsan, bu ovozni hech kim eshitishni xohlamaydi!' deydi. Nasriddin esa: 'Aslida juda chiroyli kuylayman. Hammomimga kelsang o'zing eshitib ko'rasan!' deb javob beradi.",
    vocabulary: [
      {
            "word": "have a bath",
            "pos": "v. phr.",
            "phonetic": "[hæv ə bɑːθ]",
            "translationUz": "cho'milmoq, vanna qabul qilmoq",
            "definitionEn": "To wash oneself in a bath or washroom.",
            "exampleSentence": "He liked singing while having a hot bath."
      },
      {
            "word": "stone floor",
            "pos": "n.",
            "phonetic": "[stəʊn flɔː]",
            "translationUz": "tosh pol",
            "definitionEn": "A floor constructed of stone blocks providing echo.",
            "exampleSentence": "The stone floor echoed with his rich baritone."
      },
      {
            "word": "flat roof",
            "pos": "n.",
            "phonetic": "[flæt ruːf]",
            "translationUz": "tekis tom",
            "definitionEn": "A horizontal or near-horizontal roof of a house.",
            "exampleSentence": "He stepped out onto the flat roof of his house."
      },
      {
            "word": "terrible noise",
            "pos": "n. phr.",
            "phonetic": "[ˈterəbl nɔɪz]",
            "translationUz": "dahshatli shovqin-suron",
            "definitionEn": "An unpleasant, harsh, or cacophonous sound.",
            "exampleSentence": "Stop that terrible noise at once!"
      },
      {
            "word": "square",
            "pos": "n.",
            "phonetic": "[skweə]",
            "translationUz": "maydon",
            "definitionEn": "An open typically four-sided area surrounded by buildings in a town.",
            "exampleSentence": "A pedestrian strolled across the central square."
      },
      {
            "word": "famous",
            "pos": "adj.",
            "phonetic": "[ˈfeɪməs]",
            "translationUz": "mashhur, tanilgan",
            "definitionEn": "Known about by many people.",
            "exampleSentence": "He dreamed of becoming a famous opera singer."
      }
],
    reproductionOutline: [
      "While bathing in his small stone-floored bathroom, the acoustic echo convinced Nasreddin he had a divine singing voice.",
      "Envisioning worldwide fame as a singer, he decided to share his talent with the public.",
      "Emerging from the bath, he climbed onto his rooftop and sang at the top of his lungs.",
      "A pedestrian crossing the village square yelled up in distress, calling his singing a horrific racket.",
      "Nasreddin stubbornly defended his talent, inviting the critic into his bathroom for the proper acoustic experience!"
],
    modelRetelling: "While scrubbing himself in his small, stone-tiled washroom, Nasreddin began singing and was mesmerized by the rich acoustic resonance bouncing off the hard walls. Convinced that his voice was breathtaking and that global stardom awaited him, he determined to showcase his talent to the community. Climbing onto his flat rooftop immediately after bathing, he belted out his tune into the open air, though he noticed the magic seemed lacking. Down below in the square, an irritated passerby shouted up, demanding to know why he was making such an agonizing racket that nobody wished to endure. Unshaken in his vanity, Nasreddin retorted: 'You have no idea! I sing like an angel—come inside and join me in my bathroom and you will hear for yourself!'",
    questions: [
      {
            "id": "s38-q1",
            "order": 1,
            "question": "When did Nasreddin begin to sing?",
            "modelAnswer": "He began to sing when he was having a bath.",
            "keywords": [
                  "having a bath"
            ],
            "options": [
                  "When he was having a bath",
                  "While riding his donkey",
                  "During a wedding party",
                  "While working on his roof"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U hammomda cho'milayotgan paytida qo'shiq ayta boshladi."
      },
      {
            "id": "s38-q2",
            "order": 2,
            "question": "What was the bathroom like?",
            "modelAnswer": "The bathroom was small and had a stone floor.",
            "keywords": [
                  "small and had a stone floor"
            ],
            "options": [
                  "It was small and had a stone floor",
                  "It was large with golden mirrors",
                  "It was outdoors under a tree",
                  "It was full of steam and wooden benches"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hammom kichik va tosh polli edi: 'small and had a stone floor'."
      },
      {
            "id": "s38-q3",
            "order": 3,
            "question": "How did the song seem to Nasreddin?",
            "modelAnswer": "His song seemed very beautiful to him.",
            "keywords": [
                  "very beautiful"
            ],
            "options": [
                  "It seemed very beautiful",
                  "It sounded awful",
                  "It was too quiet",
                  "It sounded like a donkey"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qo'shig'i o'ziga juda chiroyli tuyuldi: 'his song was very beautiful, he thought'."
      },
      {
            "id": "s38-q4",
            "order": 4,
            "question": "What did he say?",
            "modelAnswer": "He said, 'I sing very well. I will sing to other people too, and perhaps I will become a famous singer, and everybody in the world will want to hear me.'",
            "keywords": [
                  "sing very well",
                  "famous singer",
                  "everybody in the world will want to hear me"
            ],
            "options": [
                  "'I sing very well. I will sing to other people and become a famous singer.'",
                  "'I should stop singing before my wife wakes up.'",
                  "'I need hot water.'",
                  "'This bathroom is too cold.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U juda yaxshi kuylashini, odamlarga aytib mashhur qo'shiqchi bo'lishini aytdi."
      },
      {
            "id": "s38-q5",
            "order": 5,
            "question": "What did Nasreddin do after his bath?",
            "modelAnswer": "He went up on to the flat roof of the house and began to sing his song very loudly.",
            "keywords": [
                  "flat roof of the house",
                  "sing his song very loudly"
            ],
            "options": [
                  "He went up to the flat roof and sang very loudly",
                  "He went to sleep in his bed",
                  "He sang for his neighbours at the fence",
                  "He auditioned at the royal palace"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hammomdan keyin tomga chiqib baland ovozda qo'shiq ayta boshladi."
      },
      {
            "id": "s38-q6",
            "order": 6,
            "question": "What did he think of his song now?",
            "modelAnswer": "He did not like it very much when he sang it there.",
            "keywords": [
                  "did not like it very much"
            ],
            "options": [
                  "He did not like it very much",
                  "He loved it even more",
                  "He thought it sounded like thunder",
                  "He thought it was perfect"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tomda aytganida qo'shig'i unchalik yoqmadi: 'he did not like it very much'."
      }
],
    trueFalseQuestions: [
      {
            "id": "s38-tf1",
            "order": 1,
            "statement": "The acoustics of the small stone-floored bathroom flattered Nasreddin's singing voice.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Tosh polli tor xona ovozni aks-sado berib chiroyli ko'rsatgan edi."
      },
      {
            "id": "s38-tf2",
            "order": 2,
            "statement": "Nasreddin hoped to earn international acclaim as a celebrated singer.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'perhaps I will become a famous singer, and everybody in the world will want to hear me'."
      },
      {
            "id": "s38-tf3",
            "order": 3,
            "statement": "Nasreddin's singing on the open roof sounded even better than in the bathroom.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Tomda aytganda aks-sado bo'lmagani uchun unchalik yoqmadi ('he did not like it very much')."
      },
      {
            "id": "s38-tf4",
            "order": 4,
            "statement": "The passer-by in the square showered Nasreddin with applause and gold coins.",
            "correctAnswer": "False",
            "explanationUz": "Xato: O'tgan odam uni 'dahshatli shovqin solyapsan' deb tanqid qildi."
      },
      {
            "id": "s38-tf5",
            "order": 5,
            "statement": "Nasreddin conceded defeat and never uttered another note in his life.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U o'z ovoziga ishonib, o'sha odamni hammomga taklif qildi."
      },
      {
            "id": "s38-tf6",
            "order": 6,
            "statement": "The passer-by accepted the invitation and entered Nasreddin's bathroom.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda o'tkinchining hammomga kirgan yoki kirmagani aytilmagan."
      }
]
  },
  {
    id: 'story-39',
    storyNumber: 39,
    title: "The Four Photographs of the Thief",
    titleUz: "O'g'rining to'rt fotosurati",
    cefrLevel: 'A2',
    wordCount: 169,
    readingTimeMinutes: 1,
    storyText: "The police in the big city were looking for a thief. At last they caught him. But while they were taking photographs of him — from the front, from the left, from the right, with a hat, without a hat — he suddenly attacked the policemen and ran off. They tried to catch him, but he got away.\nThen a week later the telephone rang in the police-station, and somebody said, 'You are looking for Bill Cross, aren't you?'\n'Yes.'\n'Well, he left here for Waterbridge an hour ago.'\nWaterbridge was a small town 150 kilometres from the city. The city police at once sent four different photographs of the thief to the police in Waterbridge.\nLess than twelve hours later they got a telephone call from the police in Waterbridge. 'We have caught three of the men,' they said happily, 'and we will catch the fourth this evening, we think'.",
    paragraphs: [
      "The police in the big city were looking for a thief. At last they caught him. But while they were taking photographs of him — from the front, from the left, from the right, with a hat, without a hat — he suddenly attacked the policemen and ran off. They tried to catch him, but he got away.",
      "Then a week later the telephone rang in the police-station, and somebody said, 'You are looking for Bill Cross, aren't you?'\n'Yes.'\n'Well, he left here for Waterbridge an hour ago.'",
      "Waterbridge was a small town 150 kilometres from the city. The city police at once sent four different photographs of the thief to the police in Waterbridge.",
      "Less than twelve hours later they got a telephone call from the police in Waterbridge. 'We have caught three of the men,' they said happily, 'and we will catch the fourth this evening, we think'."
],
    summaryUz: "Katta shahar politsiyasi Bill Kross ismli o'g'rini ushlab, turli rakurslardan (oldidan, chapdan, o'ngdan, shlyapali va shlyapasiz) suratga olayotganda, u qochib ketadi. Bir haftadan so'ng uning 150 km uzoqlikdagi Uoterbrij shaharchasiga ketgani ma'lum bo'ladi. Shahar politsiyasi mahalliy politsiyaga o'g'rining 4 xil fotosuratini yuboradi. O'n ikki soat o'tmay Uoterbrij politsiyasi xursand bo'lib qo'ng'iroq qiladi: 'Biz anavi to'rttaladan uchtasini ushladik, to'rtinchisini ham bugun kechqurun ushlaymiz!'",
    vocabulary: [
      {
            "word": "thief",
            "pos": "n.",
            "phonetic": "[θiːf]",
            "translationUz": "o'g'ri",
            "definitionEn": "A person who steals another person's property.",
            "exampleSentence": "The city detectives pursued a notorious thief."
      },
      {
            "word": "photograph",
            "pos": "n.",
            "phonetic": "[ˈfəʊtəɡrɑːf]",
            "translationUz": "fotosurat",
            "definitionEn": "A picture made using a camera.",
            "exampleSentence": "They took photographs from multiple angles."
      },
      {
            "word": "run off",
            "pos": "phr. v.",
            "phonetic": "[rʌn ɒf]",
            "translationUz": "qochib ketmoq",
            "definitionEn": "To escape or leave abruptly.",
            "exampleSentence": "He attacked the guards and ran off into the night."
      },
      {
            "word": "police-station",
            "pos": "n.",
            "phonetic": "[pəˈliːs ˌsteɪʃn]",
            "translationUz": "politsiya mahkamasi",
            "definitionEn": "The headquarters of a local police force.",
            "exampleSentence": "The telephone rang in the bustling police-station."
      },
      {
            "word": "caught",
            "pos": "v.",
            "phonetic": "[kɔːt]",
            "translationUz": "ushladi (catch fe'lining o'tgan zamoni)",
            "definitionEn": "Captured or apprehended a suspect.",
            "exampleSentence": "We have caught three of the suspects already!"
      },
      {
            "word": "different",
            "pos": "adj.",
            "phonetic": "[ˈdɪfrənt]",
            "translationUz": "har xil, turlicha",
            "definitionEn": "Not the same as another.",
            "exampleSentence": "They sent four different photos of the same fugitive."
      }
],
    reproductionOutline: [
      "Big-city police captured fugitive thief Bill Cross and took standard mugshots from several angles.",
      "During the photoshoot, Cross assaulted the officers and successfully escaped custody.",
      "A week later, an informant tipped off police that Cross was traveling to Waterbridge, 150 kilometers away.",
      "City detectives immediately wired the four distinct photographs of Cross to the small-town precinct.",
      "Within twelve hours, the provincial police proudly called back, boasting they had already arrested three of the \"four men\"!"
],
    modelRetelling: "Detectives in a major city finally apprehended a notorious thief named Bill Cross. However, while officers were taking identification photographs from multiple profiles—front, sides, with and without headwear—Cross abruptly lashed out at his captors and sprinted to freedom. A week later, an anonymous informant tipped off the precinct that Cross had departed for Waterbridge, a provincial town 150 kilometers away. The metropolitan police promptly dispatched the four distinct mugshots to their rural counterparts. Barely twelve hours later, the Waterbridge police telephoned in triumph, cheerfully reporting that they had already captured three of the suspects and expected to apprehend the fourth by evening, utterly unaware that all four photos depicted the identical man!",
    questions: [
      {
            "id": "s39-q1",
            "order": 1,
            "question": "Where were the police?",
            "modelAnswer": "The police were in the big city.",
            "keywords": [
                  "in the big city"
            ],
            "options": [
                  "In the big city",
                  "In Waterbridge village",
                  "At the seaport",
                  "On a passenger train"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Politsiya katta shaharda edi: 'in the big city'."
      },
      {
            "id": "s39-q2",
            "order": 2,
            "question": "What were they doing?",
            "modelAnswer": "They were looking for a thief.",
            "keywords": [
                  "looking for a thief"
            ],
            "options": [
                  "Looking for a thief",
                  "Directing morning traffic",
                  "Guarding the national bank",
                  "Investigating a murder"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular o'g'rini qidirayotgan edilar."
      },
      {
            "id": "s39-q3",
            "order": 3,
            "question": "What happened at last?",
            "modelAnswer": "At last they caught him.",
            "keywords": [
                  "caught him"
            ],
            "options": [
                  "At last they caught him",
                  "The thief escaped to America",
                  "They closed the case",
                  "The thief surrendered voluntarily"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Nihoyat ular o'g'rini qo'lga oldilar."
      },
      {
            "id": "s39-q4",
            "order": 4,
            "question": "What did the man do?",
            "modelAnswer": "He suddenly attacked the policemen and ran off.",
            "keywords": [
                  "attacked the policemen and ran off"
            ],
            "options": [
                  "He attacked the policemen and ran off",
                  "He confessed to all his crimes",
                  "He smiled for the camera",
                  "He gave them false identification"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U politsiyachilarga hujum qilib, qochib ketdi."
      },
      {
            "id": "s39-q5",
            "order": 5,
            "question": "When did he do this?",
            "modelAnswer": "While they were taking photographs of him.",
            "keywords": [
                  "taking photographs of him"
            ],
            "options": [
                  "While they were taking photographs of him",
                  "During his trial in court",
                  "While eating his lunch in his cell",
                  "As they loaded him into a van"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uni fotosuratga olayotgan paytda qochdi."
      },
      {
            "id": "s39-q6",
            "order": 6,
            "question": "What did the police do?",
            "modelAnswer": "They tried to catch him.",
            "keywords": [
                  "tried to catch him"
            ],
            "options": [
                  "They tried to catch him",
                  "They shot at his tyres",
                  "They closed the city borders",
                  "They took a nap"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular uni tutishga harakat qildilar: 'They tried to catch him'."
      },
      {
            "id": "s39-q7",
            "order": 7,
            "question": "What happened?",
            "modelAnswer": "He got away.",
            "keywords": [
                  "got away"
            ],
            "options": [
                  "He got away",
                  "He was caught on the steps",
                  "He fell into the river",
                  "He was cornered by dogs"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U qutulib qochib ketdi: 'he got away'."
      },
      {
            "id": "s39-q8",
            "order": 8,
            "question": "What happened a week later?",
            "modelAnswer": "The telephone rang in the police-station.",
            "keywords": [
                  "telephone rang in the police-station"
            ],
            "options": [
                  "The telephone rang in the police-station",
                  "The thief was seen at the city cinema",
                  "The thief mailed a letter to the chief",
                  "The case was cancelled"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir hafta o'tib politsiya mahkamasida telefon jiringladi."
      },
      {
            "id": "s39-q9",
            "order": 9,
            "question": "What did someone say over the telephone?",
            "modelAnswer": "Somebody asked, 'You are looking for Bill Cross, aren't you?'",
            "keywords": [
                  "looking for Bill Cross"
            ],
            "options": [
                  "'You are looking for Bill Cross, aren't you?'",
                  "'Bill Cross has surrendered at the bank.'",
                  "'Where is the reward money?'",
                  "'Send backup to the railway station.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kimdir: 'Sizlar Bill Krossni qidiryapsizlar, shunday emasmi?' dedi."
      },
      {
            "id": "s39-q10",
            "order": 10,
            "question": "What did the police answer?",
            "modelAnswer": "The police answered, 'Yes.'",
            "keywords": [
                  "Yes"
            ],
            "options": [
                  "'Yes.'",
                  "'No, we caught him.'",
                  "'Who is calling?'",
                  "'We are too busy today.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Politsiya 'Ha' deb tasdiqladi."
      },
      {
            "id": "s39-q11",
            "order": 11,
            "question": "What did the man say then?",
            "modelAnswer": "He said, 'Well, he left here for Waterbridge an hour ago.'",
            "keywords": [
                  "left here for Waterbridge an hour ago"
            ],
            "options": [
                  "'Well, he left here for Waterbridge an hour ago.'",
                  "'He is hiding in my basement.'",
                  "'He bought a train ticket to Paris.'",
                  "'He changed his name to John.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'U bir soat oldin bu yerdan Uoterbrijga ketdi' dedi."
      },
      {
            "id": "s39-q12",
            "order": 12,
            "question": "Where and what was Waterbridge?",
            "modelAnswer": "Waterbridge was a small town 150 kilometres from the city.",
            "keywords": [
                  "small town 150 kilometres from the city"
            ],
            "options": [
                  "A small town 150 km from the city",
                  "A large international seaport",
                  "A village in the Swiss Alps",
                  "A neighbourhood in central London"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uoterbrij shahardan 150 km uzoqlikdagi kichik shaharcha edi."
      },
      {
            "id": "s39-q13",
            "order": 13,
            "question": "What did the city police do?",
            "modelAnswer": "They at once sent four different photographs of the thief to the police in Waterbridge.",
            "keywords": [
                  "sent four different photographs of the thief"
            ],
            "options": [
                  "They sent four different photographs of the thief to Waterbridge police",
                  "They sent ten armed detectives by helicopter",
                  "They called the army",
                  "They put posters on every tree"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular darhol Uoterbrij politsiyasiga o'g'rining 4 xil fotosuratini jo'natdilar."
      },
      {
            "id": "s39-q14",
            "order": 14,
            "question": "What happened less than twelve hours later?",
            "modelAnswer": "They got a telephone call from the police in Waterbridge.",
            "keywords": [
                  "got a telephone call from the police in Waterbridge"
            ],
            "options": [
                  "They received a telephone call from Waterbridge police",
                  "Bill Cross returned to the city",
                  "A fifth photo was found",
                  "The town of Waterbridge flooded"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "O'n ikki soat o'tmay Uoterbrij politsiyasidan qo'ng'iroq bo'ldi."
      },
      {
            "id": "s39-q15",
            "order": 15,
            "question": "What did the police in Waterbridge say?",
            "modelAnswer": "They said, 'We have caught three of the men, and we will catch the fourth this evening, we think.'",
            "keywords": [
                  "caught three of the men",
                  "catch the fourth this evening"
            ],
            "options": [
                  "'We have caught three of the men, and will catch the fourth this evening!'",
                  "'We haven't seen anyone matching these photos.'",
                  "'Bill Cross died in an accident.'",
                  "'Send more photos from the back.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular 4 kishilik fotosurat deb o'ylab: 'Uchtasini ushladik, to'rtinchisini ham bugun kechga ushlaymiz!' dedilar."
      }
],
    trueFalseQuestions: [
      {
            "id": "s39-tf1",
            "order": 1,
            "statement": "Bill Cross was a master safecracker wanted across five continents.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uning xalqaro miqyosdagi jinoyatlari haqida aytilmagan."
      },
      {
            "id": "s39-tf2",
            "order": 2,
            "statement": "The thief attacked the city officers while being photographed.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'while they were taking photographs of him... he suddenly attacked the policemen and ran off'."
      },
      {
            "id": "s39-tf3",
            "order": 3,
            "statement": "Waterbridge was a small town located 150 kilometres away from the metropolis.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Waterbridge was a small town 150 kilometres from the city'."
      },
      {
            "id": "s39-tf4",
            "order": 4,
            "statement": "The four sent photographs featured four completely distinct criminal accomplices.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Barcha to'rtta fotosurat bitta odam — Bill Krossning turli rakurslardagi suratlari edi."
      },
      {
            "id": "s39-tf5",
            "order": 5,
            "statement": "The Waterbridge police mistook the four pictures of one man for a gang of four separate suspects.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Ular to'rtta fotosuratni to'rt xil odam deb o'ylab, 'uchtasini ushladik' deyishdi."
      },
      {
            "id": "s39-tf6",
            "order": 6,
            "statement": "The fourth suspect escaped across the international border.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda to'rtinchi odam nima bo'lgani haqida ma'lumot yo'q."
      }
]
  },
  {
    id: 'story-40',
    storyNumber: 40,
    title: "Mrs Jones and Mrs Smith",
    titleUz: "Xonim Jons va Xonim Smit",
    cefrLevel: 'A2',
    wordCount: 162,
    readingTimeMinutes: 1,
    storyText: "Mrs Jones was still cleaning the house when her husband came back from work. She was wearing dirty, old clothes and no stockings, her hair was not tidy, she had dust on her face and she looked dirty and tired.\nHer husband looked at her and said, 'Is this what I come home to after a hard day's work?'\nMrs Jones's neighbour, Mrs Smith, was there. When she heard Mr Jones's words, she quickly said goodbye and ran back to her house. Then she washed, brushed and combed her hair carefully, put on her best dress and her prettiest stockings, painted her face, and waited for her husband to come home.\nWhen he arrived, he was hot and tired. He walked slowly into the house, saw his wife and stopped. Then he shouted angrily, 'And where are you going this evening?'",
    paragraphs: [
      "Mrs Jones was still cleaning the house when her husband came back from work. She was wearing dirty, old clothes and no stockings, her hair was not tidy, she had dust on her face and she looked dirty and tired.",
      "Her husband looked at her and said, 'Is this what I come home to after a hard day's work?'",
      "Mrs Jones's neighbour, Mrs Smith, was there. When she heard Mr Jones's words, she quickly said goodbye and ran back to her house. Then she washed, brushed and combed her hair carefully, put on her best dress and her prettiest stockings, painted her face, and waited for her husband to come home.",
      "When he arrived, he was hot and tired. He walked slowly into the house, saw his wife and stopped. Then he shouted angrily, 'And where are you going this evening?'"
],
    summaryUz: "Xonim Jons uy tozalab, kiyimlari kir va charchagan holda turganida eri ishdan kelib: 'Kun bo'yi ishlab kelganimda meni shunday kutib olasanmi?' deb xafa bo'ladi. Buni eshitgan qo'shnisi xonim Smit darhol uyiga yugurib, yuvinib, sochlarini tarab, eng chiroyli ko'ylak va paypog'ini kiyib, pardoz qilib erini kutadi. Er charchab kelib, yasanib olgan xotinini ko'rgach, g'azablanib: 'Xo'sh, bugun kechqurun qayoqqa ketyapsan?!' deb baqiradi.",
    vocabulary: [
      {
            "word": "stockings",
            "pos": "n.",
            "phonetic": "[ˈstɒkɪŋz]",
            "translationUz": "paypoq, kolgotki",
            "definitionEn": "Close-fitting elastic garments covering feet and legs.",
            "exampleSentence": "She put on her prettiest silk stockings."
      },
      {
            "word": "tidy",
            "pos": "adj.",
            "phonetic": "[ˈtaɪdi]",
            "translationUz": "tartibli, orasta",
            "definitionEn": "Arranged neatly and in good order.",
            "exampleSentence": "Her hair was messy and far from tidy."
      },
      {
            "word": "dust",
            "pos": "n.",
            "phonetic": "[dʌst]",
            "translationUz": "chang, g'ubor",
            "definitionEn": "Fine, dry powder consisting of tiny particles of earth or waste.",
            "exampleSentence": "She had streaks of grey dust across her forehead."
      },
      {
            "word": "comb",
            "pos": "v.",
            "phonetic": "[kəʊm]",
            "translationUz": "taramoq (sochni)",
            "definitionEn": "To untangle and arrange hair using a comb.",
            "exampleSentence": "She washed and combed her dark hair carefully."
      },
      {
            "word": "paint one's face",
            "pos": "v. phr.",
            "phonetic": "[peɪnt wʌnz feɪs]",
            "translationUz": "yuzini pardozlamoq",
            "definitionEn": "To apply makeup or cosmetics to one's face.",
            "exampleSentence": "She painted her face with lipstick and powder."
      },
      {
            "word": "angrily",
            "pos": "adv.",
            "phonetic": "[ˈæŋɡrəli]",
            "translationUz": "jahli chiqib, darg'azab bo'lib",
            "definitionEn": "In a furious or displeased manner.",
            "exampleSentence": "Where are you going tonight? he shouted angrily."
      }
],
    reproductionOutline: [
      "Returning exhausted from work, Mr Jones reproached his disheveled, dusty wife who was still scrubbing the house.",
      "Neighbour Mrs Smith witnessed the scolding and hurried home, determined to do the opposite for her own husband.",
      "Mrs Smith bathed, styled her hair, donned her finest gown and stockings, and applied glamorous makeup.",
      "Her tired, sweaty husband trudged through the doorway and froze upon seeing his glamorous wife.",
      "Instead of being pleased, he immediately barked in jealousy: \"And where are you going this evening?!\""
],
    modelRetelling: "Mr Jones returned from a grueling day of labor only to find Mrs Jones in old disheveled rags, dusty-faced and scrubbing the floor. Disappointed, he grumbled: 'Is this what I come home to after a hard day's work?' Visiting next door, neighbour Mrs Smith overheard the stinging remark and immediately fled home. Vowing to delight her own spouse, she bathed, brushed her hair, donned her most elegant dress and delicate stockings, painted her face with makeup, and waited by the door. However, when Mr Smith dragged himself into the parlor hot and weary, he took one look at her lavish appearance and barked in furious suspicion: 'And where on earth are you going this evening?!'",
    questions: [
      {
            "id": "s40-q1",
            "order": 1,
            "question": "What was Mrs Jones doing?",
            "modelAnswer": "Mrs Jones was cleaning the house.",
            "keywords": [
                  "cleaning the house"
            ],
            "options": [
                  "Cleaning the house",
                  "Cooking dinner",
                  "Sewing a cotton dress",
                  "Watering garden roses"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xonim Jons uyni tozalayotgan edi."
      },
      {
            "id": "s40-q2",
            "order": 2,
            "question": "What happened while she was doing this?",
            "modelAnswer": "Her husband came back from work.",
            "keywords": [
                  "husband came back from work"
            ],
            "options": [
                  "Her husband came back from work",
                  "A thief entered the kitchen",
                  "The chimney caught fire",
                  "A neighbour phoned her"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tozalayotganida eri ishdan qaytib keldi."
      },
      {
            "id": "s40-q3",
            "order": 3,
            "question": "What was Mrs Jones wearing?",
            "modelAnswer": "She was wearing dirty, old clothes and no stockings.",
            "keywords": [
                  "dirty, old clothes and no stockings"
            ],
            "options": [
                  "Dirty, old clothes and no stockings",
                  "Her best silk dress",
                  "A clean apron and slippers",
                  "A swimming costume"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U kir, eski kiyimlar kiyib olgan va paypoqsiz edi."
      },
      {
            "id": "s40-q4",
            "order": 4,
            "question": "What did her hair look like?",
            "modelAnswer": "Her hair was not tidy.",
            "keywords": [
                  "hair was not tidy"
            ],
            "options": [
                  "Her hair was not tidy",
                  "Her hair was beautifully curled",
                  "Her hair was covered in a scarf",
                  "Her hair was very short"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Sochlari to'zg'igan va tartibsiz edi."
      },
      {
            "id": "s40-q5",
            "order": 5,
            "question": "What did her face look like?",
            "modelAnswer": "She had dust on her face.",
            "keywords": [
                  "dust on her face"
            ],
            "options": [
                  "She had dust on her face",
                  "She was wearing heavy makeup",
                  "Her face was sunburned",
                  "Her face was pale and sick"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yuzida chang bor edi: 'she had dust on her face'."
      },
      {
            "id": "s40-q6",
            "order": 6,
            "question": "What did Mrs Jones look like?",
            "modelAnswer": "She looked dirty and tired.",
            "keywords": [
                  "dirty and tired"
            ],
            "options": [
                  "She looked dirty and tired",
                  "She looked joyful and rested",
                  "She looked like a movie star",
                  "She looked furious"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U kir va charchagan ko'rinishda edi."
      },
      {
            "id": "s40-q7",
            "order": 7,
            "question": "What did her husband say?",
            "modelAnswer": "Her husband said, 'Is this what I come home to after a hard day's work?'",
            "keywords": [
                  "what I come home to after a hard day's work"
            ],
            "options": [
                  "'Is this what I come home to after a hard day's work?'",
                  "'You look wonderful, darling.'",
                  "'Where is my hot dinner?'",
                  "'Did the postman bring any letters?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri: 'Kun bo'yi qattiq ishlab kelganimda meni shunday kutib olasanmi?' dedi."
      },
      {
            "id": "s40-q8",
            "order": 8,
            "question": "Who was there too?",
            "modelAnswer": "Mrs Jones's neighbour, Mrs Smith, was there.",
            "keywords": [
                  "neighbour, Mrs Smith, was there"
            ],
            "options": [
                  "Mrs Jones's neighbour, Mrs Smith",
                  "Her mother-in-law",
                  "Her teenage daughter",
                  "The postman"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yerda qo'shnisi xonim Smit ham bor edi."
      },
      {
            "id": "s40-q9",
            "order": 9,
            "question": "What did Mrs Smith do when she heard Mr Jones's words?",
            "modelAnswer": "She quickly said goodbye, ran back to her house, washed, styled her hair, put on her best dress and stockings, painted her face, and waited for her husband.",
            "keywords": [
                  "ran back to her house",
                  "put on her best dress",
                  "painted her face"
            ],
            "options": [
                  "She ran home, dressed up in her best clothes, and did her hair and makeup",
                  "She argued with Mr Jones",
                  "She helped Mrs Jones clean up",
                  "She phoned her husband at his office"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U tezda uyiga borib, yuvinib, eng yaxshi kiyimlarini kiyib, pardoz qilib erini kutdi."
      },
      {
            "id": "s40-q10",
            "order": 10,
            "question": "How was her husband when he arrived?",
            "modelAnswer": "He was hot and tired.",
            "keywords": [
                  "hot and tired"
            ],
            "options": [
                  "He was hot and tired",
                  "He was cheerful and singing",
                  "He was freezing cold",
                  "He was drunk"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri kelganida terlagan va charchagan edi: 'hot and tired'."
      },
      {
            "id": "s40-q11",
            "order": 11,
            "question": "What did he do?",
            "modelAnswer": "He walked slowly into the house, saw his wife and stopped.",
            "keywords": [
                  "walked slowly into the house, saw his wife and stopped"
            ],
            "options": [
                  "He walked in slowly, saw his wife, and stopped",
                  "He kissed her immediately",
                  "He handed her his coat",
                  "He ran back outside"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U sekin kirib, xotinini ko'rdi va to'xtab qoldi."
      },
      {
            "id": "s40-q12",
            "order": 12,
            "question": "What did he shout?",
            "modelAnswer": "He shouted, 'And where are you going this evening?'",
            "keywords": [
                  "where are you going this evening"
            ],
            "options": [
                  "'And where are you going this evening?'",
                  "'You look stunning, my dear!'",
                  "'Why are you wasting money on perfume?'",
                  "'Who gave you that new dress?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Xo'sh, bugun oqshom qayoqqa ketyapsan?!' deb baqirdi."
      },
      {
            "id": "s40-q13",
            "order": 13,
            "question": "How did he shout this?",
            "modelAnswer": "He shouted this angrily.",
            "keywords": [
                  "angrily"
            ],
            "options": [
                  "Angrily",
                  "Politely",
                  "Joyfully",
                  "Whispering quietly"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni g'azab bilan baqirdi: 'angrily'."
      }
],
    trueFalseQuestions: [
      {
            "id": "s40-tf1",
            "order": 1,
            "statement": "Mrs Jones had finished cleaning the home hours before her husband arrived.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Eri kelgan paytda u hanuz uyni tozalayotgan edi ('Mrs Jones was still cleaning the house')."
      },
      {
            "id": "s40-tf2",
            "order": 2,
            "statement": "Mr Jones felt disappointed by his wife's unkempt, dusty appearance.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Is this what I come home to after a hard day's work?'."
      },
      {
            "id": "s40-tf3",
            "order": 3,
            "statement": "Mrs Smith lived three streets away from the Jones household.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U bevosita qo'shni edi ('Mrs Jones's neighbour, Mrs Smith')."
      },
      {
            "id": "s40-tf4",
            "order": 4,
            "statement": "Mrs Smith prepared a three-course French meal for dinner.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uning qanday ovqat pishirgani aytilmagan, faqat kiyinib pardoz qilgani keltirilgan."
      },
      {
            "id": "s40-tf5",
            "order": 5,
            "statement": "Mr Smith assumed his wife was dressed up to go out for the evening without him.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U xotinining chiroyli kiyinganini ko'rib, qayergadir ketmoqchi deb o'yladi ('And where are you going this evening?')."
      },
      {
            "id": "s40-tf6",
            "order": 6,
            "statement": "Both husbands had peaceful, stress-free evenings with their wives.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Har ikkala uyda ham norozilik va g'azab bilan janjal boshlandi."
      }
]
  },
  {
    id: 'story-41',
    storyNumber: 41,
    title: "Billy and the Vegetable Delivery Man",
    titleUz: "Billi va Sabzavot Yetkazuvchi",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "Billy was four years old, and he was a very bad boy. Every day after lunch his mother took him to his bedroom and put him on his bed to rest for an hour, but Billy never slept and usually he made a lot of noise and got off his bed every few minutes.\nOne afternoon, Billy's mother put him on his bed and then went to her bedroom to do some sewing. After ten minutes, she heard a noise so she went to Billy's room. He was not there, but his trousers were lying on his bed.\nShe looked in the other rooms upstairs, but he was not there either, so she went to the top of the stairs and shouted down angrily, 'Are you running about down there without your trousers?'\n'No, madam,' answered a man's voice. 'I have brought your vegetables—and I am wearing my trousers.'",
    paragraphs: [
      "Billy was four years old, and he was a very bad boy. Every day after lunch his mother took him to his bedroom and put him on his bed to rest for an hour, but Billy never slept and usually he made a lot of noise and got off his bed every few minutes.",
      "One afternoon, Billy's mother put him on his bed and then went to her bedroom to do some sewing. After ten minutes, she heard a noise so she went to Billy's room. He was not there, but his trousers were lying on his bed.",
      "She looked in the other rooms upstairs, but he was not there either, so she went to the top of the stairs and shouted down angrily, 'Are you running about down there without your trousers?'\n'No, madam,' answered a man's voice. 'I have brought your vegetables—and I am wearing my trousers.'"
],
    summaryUz: "To'rt yoshli sho'x Billini onasi tushlikdan so'ng uxlatish uchun yotqizadi, lekin u hech uxlamasdi. Bir kuni ona tikuvchilik qilayotib, shovqin eshitadi va bolaning xonasiga kirsa, bola yo'q, karavotda faqat shimi yotardi. Tepadagi xonalardan topolmagach, zinalar tepasiga kelib pastga qarab jahl bilan: 'U yerda shimsiz yugurib yuribsanmi?!' deb baqiradi. Pastdan esa erkak kishi ovozi javob beradi: 'Yo'q, xonim, men sabzavotlaringizni olib keldim va men shimdaman!'",
    vocabulary: [
      {
            "word": "bad boy",
            "pos": "n. phr.",
            "phonetic": "[bæd bɔɪ]",
            "translationUz": "sho'x / quloqsiz bola",
            "definitionEn": "A mischievous, naughty young boy.",
            "exampleSentence": "Four-year-old Billy was a notoriously naughty boy."
      },
      {
            "word": "rest",
            "pos": "v.",
            "phonetic": "[rest]",
            "translationUz": "dam olmoq",
            "definitionEn": "To cease work or movement in order to relax or sleep.",
            "exampleSentence": "She put him on his bed to rest for an hour."
      },
      {
            "word": "sewing",
            "pos": "n.",
            "phonetic": "[ˈsəʊɪŋ]",
            "translationUz": "tikuvchilik",
            "definitionEn": "The craft of stitching cloth with a needle and thread.",
            "exampleSentence": "She retired to her bedroom to finish some sewing."
      },
      {
            "word": "trousers",
            "pos": "n.",
            "phonetic": "[ˈtraʊzəz]",
            "translationUz": "shim",
            "definitionEn": "An outer garment covering each leg separately.",
            "exampleSentence": "His little blue trousers were discarded on the bed."
      },
      {
            "word": "stairs",
            "pos": "n.",
            "phonetic": "[steəz]",
            "translationUz": "zina, zinalar",
            "definitionEn": "A set of steps leading from one floor of a building to another.",
            "exampleSentence": "She marched to the top of the wooden stairs."
      },
      {
            "word": "vegetables",
            "pos": "n.",
            "phonetic": "[ˈvedʒtəblz]",
            "translationUz": "sabzavotlar",
            "definitionEn": "Plants or parts of plants used as food.",
            "exampleSentence": "The delivery man brought fresh farm vegetables."
      }
],
    reproductionOutline: [
      "Four-year-old unruly Billy refused to nap after lunch, always climbing out of bed and causing chaos.",
      "One afternoon, his mother settled him in bed and retreated to do some sewing in her own room.",
      "Hearing clatter ten minutes later, she checked Billy's bedroom and found it empty except for his abandoned trousers.",
      "Searching upstairs in vain, she stomped to the landing and bellowed downstairs: \"Are you running about down there without your trousers?\"",
      "From the downstairs hallway, an unexpected delivery man called back: \"No madam, I brought your vegetables—and I am wearing my trousers!\""
],
    modelRetelling: "Four-year-old Billy was a rambunctious boy who steadfastly refused his daily post-lunch nap, making a racket and jumping off his bed every few minutes. One afternoon, his mother tucked him into bed and went into her own room to do some mending. Hearing suspicious thuds ten minutes later, she checked Billy's room only to find it deserted, with his little trousers discarded on the sheets. Finding no sign of him upstairs, she marched to the staircase landing and shouted down in irritation: 'Are you running around down there without your trousers?' To her profound shock, an adult male voice called back politely from the front hall: 'No, madam! I have brought your vegetables—and I am wearing my trousers!'",
    questions: [
      {
            "id": "s41-q1",
            "order": 1,
            "question": "How old was Billy?",
            "modelAnswer": "Billy was four years old.",
            "keywords": [
                  "four years old"
            ],
            "options": [
                  "Four years old",
                  "Six years old",
                  "Two years old",
                  "Seven years old"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Billi to'rt yoshda edi: 'Billy was four years old'."
      },
      {
            "id": "s41-q2",
            "order": 2,
            "question": "What kind of boy was he?",
            "modelAnswer": "He was a very bad boy.",
            "keywords": [
                  "very bad boy"
            ],
            "options": [
                  "A very bad boy",
                  "A quiet, polite boy",
                  "A sickly child",
                  "A studious boy"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U juda sho'x (quloqsiz) bola edi."
      },
      {
            "id": "s41-q3",
            "order": 3,
            "question": "What happened every day?",
            "modelAnswer": "His mother took him to his bedroom and put him on his bed to rest for an hour.",
            "keywords": [
                  "put him on his bed to rest for an hour"
            ],
            "options": [
                  "His mother put him on his bed to rest for an hour",
                  "He went to kindergarten",
                  "He played in the garden with neighbours",
                  "He ate ice cream"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Har kuni onasi uni bir soat dam olishi uchun yotqizardi."
      },
      {
            "id": "s41-q4",
            "order": 4,
            "question": "When did it happen?",
            "modelAnswer": "Every day after lunch.",
            "keywords": [
                  "after lunch"
            ],
            "options": [
                  "Every day after lunch",
                  "Before breakfast",
                  "Late at night",
                  "At teatime"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Har kuni tushlikdan keyin bo'lar edi."
      },
      {
            "id": "s41-q5",
            "order": 5,
            "question": "Why did Billy's mother put him on his bed?",
            "modelAnswer": "To rest for an hour.",
            "keywords": [
                  "to rest for an hour"
            ],
            "options": [
                  "To rest for an hour",
                  "As a severe punishment",
                  "Because he had a fever",
                  "To cut his hair"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir soat dam olishi (uxlashi) uchun."
      },
      {
            "id": "s41-q6",
            "order": 6,
            "question": "What did Billy do then?",
            "modelAnswer": "Billy never slept and usually he made a lot of noise and got off his bed every few minutes.",
            "keywords": [
                  "never slept",
                  "made a lot of noise",
                  "got off his bed"
            ],
            "options": [
                  "He never slept, made a lot of noise and got off bed every few minutes",
                  "He fell asleep immediately",
                  "He read storybooks silently",
                  "He prayed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U aslo uxlamas, shovqin solib har necha daqiqada karavotdan tushib olar edi."
      },
      {
            "id": "s41-q7",
            "order": 7,
            "question": "What happened one afternoon?",
            "modelAnswer": "Billy's mother put him on his bed and went to her bedroom to do some sewing.",
            "keywords": [
                  "put him on his bed",
                  "do some sewing"
            ],
            "options": [
                  "His mother put him to bed and went to do some sewing",
                  "Billy escaped to the zoo",
                  "A doctor came to examine Billy",
                  "The delivery truck crashed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni tushdan keyin onasi uni yotqizib, tikuvchilik qilish uchun xonasiga o'tdi."
      },
      {
            "id": "s41-q8",
            "order": 8,
            "question": "Why did Billy's mother go to her bedroom?",
            "modelAnswer": "To do some sewing.",
            "keywords": [
                  "do some sewing"
            ],
            "options": [
                  "To do some sewing",
                  "To take an afternoon nap",
                  "To write letters",
                  "To watch television"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Biroz tikuvchilik qilish uchun."
      },
      {
            "id": "s41-q9",
            "order": 9,
            "question": "What happened after ten minutes?",
            "modelAnswer": "After ten minutes, she heard a noise.",
            "keywords": [
                  "heard a noise"
            ],
            "options": [
                  "She heard a noise",
                  "The front doorbell rang",
                  "Billy cried loudly",
                  "A window shattered"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "O'n daqiqadan so'ng u shovqin eshitdi."
      },
      {
            "id": "s41-q10",
            "order": 10,
            "question": "What did Billy's mother do then?",
            "modelAnswer": "She went to Billy's room.",
            "keywords": [
                  "went to Billy's room"
            ],
            "options": [
                  "She went to Billy's room",
                  "She phoned her husband",
                  "She ran into the garden",
                  "She ignored the sound"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U Billining xonasiga bordi."
      },
      {
            "id": "s41-q11",
            "order": 11,
            "question": "What did she see in Billy's room?",
            "modelAnswer": "Billy was not there, but his trousers were lying on his bed.",
            "keywords": [
                  "not there",
                  "trousers were lying on his bed"
            ],
            "options": [
                  "Billy was gone, but his trousers were lying on the bed",
                  "Billy was sleeping soundly",
                  "The room was in flames",
                  "Billy was jumping on the wardrobe"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Billi yo'q, karavotda faqat uning shimi yotardi."
      },
      {
            "id": "s41-q12",
            "order": 12,
            "question": "What did she do then?",
            "modelAnswer": "She looked in the other rooms upstairs.",
            "keywords": [
                  "looked in the other rooms upstairs"
            ],
            "options": [
                  "She looked in the other rooms upstairs",
                  "She ran outside into the street",
                  "She called the police",
                  "She looked under the rug"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yuqori qavatdagi boshqa xonalarni qidirdi."
      },
      {
            "id": "s41-q13",
            "order": 13,
            "question": "What did she see?",
            "modelAnswer": "He was not there either.",
            "keywords": [
                  "not there either"
            ],
            "options": [
                  "He was not there either",
                  "Billy was hiding behind a curtain",
                  "Her husband was asleep",
                  "A burglar was in the closet"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yerda ham Billi yo'q edi."
      },
      {
            "id": "s41-q14",
            "order": 14,
            "question": "What did she do after that?",
            "modelAnswer": "She went to the top of the stairs and shouted down.",
            "keywords": [
                  "top of the stairs",
                  "shouted down"
            ],
            "options": [
                  "She went to the top of the stairs and shouted down",
                  "She went down to the kitchen",
                  "She phoned her sister",
                  "She started weeping"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U zinalar tepasiga borib pastga qarab baqirdi."
      },
      {
            "id": "s41-q15",
            "order": 15,
            "question": "What did she shout?",
            "modelAnswer": "She shouted, 'Are you running about down there without your trousers?'",
            "keywords": [
                  "running about down there without your trousers"
            ],
            "options": [
                  "'Are you running about down there without your trousers?'",
                  "'Billy, come up here this instant!'",
                  "'Who is making that noise downstairs?'",
                  "'Get back into bed right now!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Pastda shimsiz yugurib yuribsanmi?!' deb baqirdi."
      },
      {
            "id": "s41-q16",
            "order": 16,
            "question": "How did she shout this?",
            "modelAnswer": "She shouted this angrily.",
            "keywords": [
                  "angrily"
            ],
            "options": [
                  "Angrily",
                  "Happily",
                  "Whispering",
                  "Politely"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U buni jahli chiqib baqirdi: 'angrily'."
      },
      {
            "id": "s41-q17",
            "order": 17,
            "question": "Who answered her?",
            "modelAnswer": "A man's voice answered her.",
            "keywords": [
                  "man's voice answered her"
            ],
            "options": [
                  "A man's voice",
                  "Little Billy",
                  "Her husband",
                  "The family dog"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Unga bir erkak kishi ovozi javob berdi."
      },
      {
            "id": "s41-q18",
            "order": 18,
            "question": "What did the man say?",
            "modelAnswer": "He said, 'No, madam. I have brought your vegetables—and I am wearing my trousers.'",
            "keywords": [
                  "brought your vegetables",
                  "wearing my trousers"
            ],
            "options": [
                  "'No, madam. I have brought your vegetables—and I am wearing my trousers.'",
                  "'Billy is here eating an apple.'",
                  "'I am a burglar, don't shoot!'",
                  "'Your front door was unlocked.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Yo'q xonim, men sabzavotlaringizni keltirdim va men shimdaman!' deb javob berdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s41-tf1",
            "order": 1,
            "statement": "Billy enjoyed taking long naps every afternoon.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Billi hech qachon uxlamas edi ('Billy never slept')."
      },
      {
            "id": "s41-tf2",
            "order": 2,
            "statement": "Billy took off his trousers before sneaking out of his bedroom.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'his trousers were lying on his bed'."
      },
      {
            "id": "s41-tf3",
            "order": 3,
            "statement": "The mother found Billy hiding under the bathtub.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U yuqori qavatdagi hech qaysi xonada yo'q edi ('he was not there either')."
      },
      {
            "id": "s41-tf4",
            "order": 4,
            "statement": "The delivery person brought a crate of fresh vegetables into the house.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'I have brought your vegetables'."
      },
      {
            "id": "s41-tf5",
            "order": 5,
            "statement": "The delivery man was wearing swim trunks.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U odatdagi shim kiygan edi ('and I am wearing my trousers')."
      },
      {
            "id": "s41-tf6",
            "order": 6,
            "statement": "The mother called the police to report a home invasion.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda politsiya chaqirilgani haqida hech qanday ma'lumot yo'q."
      }
]
  }
,
  {
    id: 'story-42',
    storyNumber: 42,
    title: "The Old Lady in the Aeroplane",
    titleUz: "Samolyotdagi kampir",
    cefrLevel: 'A2',
    wordCount: 162,
    readingTimeMinutes: 1,
    storyText: "An old lady in an aeroplane had a blanket over her head and she did not want to take it off. The air hostess spoke to her, but the old lady said, 'I have never been in an aeroplane before, and I am frightened. I am going to keep this blanket over my head until we are back on the ground again!'\nThen the captain came. He said 'Madam, I am the captain of this aeroplane. The weather is fine, there are no clouds in the sky, and everything is going very well.'\nBut she continued to hide.\nSo the captain turned and started to go back. Then the old lady looked out from under the blanket with one eye and said, 'I am sorry, young man, but I don't like aeroplanes and I am never going to fly again. But I'll say one thing,' she continued kindly, 'you and your wife keep your aeroplane very clean!'",
    paragraphs: [
      "An old lady in an aeroplane had a blanket over her head and she did not want to take it off. The air hostess spoke to her, but the old lady said, 'I have never been in an aeroplane before, and I am frightened. I am going to keep this blanket over my head until we are back on the ground again!'",
      "Then the captain came. He said 'Madam, I am the captain of this aeroplane. The weather is fine, there are no clouds in the sky, and everything is going very well.'\nBut she continued to hide.",
      "So the captain turned and started to go back. Then the old lady looked out from under the blanket with one eye and said, 'I am sorry, young man, but I don't like aeroplanes and I am never going to fly again. But I'll say one thing,' she continued kindly, 'you and your wife keep your aeroplane very clean!'"
],
    summaryUz: "Samolyotda birinchi marta uchayotgan kampir qo'rqqanidan boshiga adyol yopib oladi. Styuardessa va kapitan havo yaxshiligini aytib ovutishga urinsalar ham, u yerga qo'nguncha boshini ochmasligini aytadi. Kapitan ortiga qaytayotganida, kampir bir ko'zini ochib qarab: 'Men samolyotlarni yoqtirmayman va boshqa hech qachon uchmayman! Lekin bitta gapni aytay: siz va xotiningiz samolyotingizni juda toza saqlarkansizlar!' deb styuardessani kapitanning xotini deb o'ylaydi.",
    vocabulary: [
      {
            "word": "aeroplane",
            "pos": "n.",
            "phonetic": "[ˈeərəpleɪn]",
            "translationUz": "samolyot",
            "definitionEn": "A powered flying vehicle with fixed wings.",
            "exampleSentence": "The old lady had never flown in an aeroplane before."
      },
      {
            "word": "blanket",
            "pos": "n.",
            "phonetic": "[ˈblæŋkɪt]",
            "translationUz": "adyol, ko'rpa",
            "definitionEn": "A large piece of woolen or warm material used as a covering.",
            "exampleSentence": "She pulled the woolen blanket over her head."
      },
      {
            "word": "air hostess",
            "pos": "n.",
            "phonetic": "[ˈeə ˌhəʊstəs]",
            "translationUz": "styuardessa",
            "definitionEn": "A woman flight attendant on an aircraft.",
            "exampleSentence": "The air hostess offered her a warm drink."
      },
      {
            "word": "frightened",
            "pos": "adj.",
            "phonetic": "[ˈfraɪtnd]",
            "translationUz": "qo'rqqan, cho'chigan",
            "definitionEn": "Afraid or anxious.",
            "exampleSentence": "She was terribly frightened of high altitudes."
      },
      {
            "word": "captain",
            "pos": "n.",
            "phonetic": "[ˈkæptɪn]",
            "translationUz": "kapitan, uchuvchi komandir",
            "definitionEn": "The pilot in command of a civil aircraft.",
            "exampleSentence": "The captain reassured the anxious passenger."
      },
      {
            "word": "hide",
            "pos": "v.",
            "phonetic": "[haɪd]",
            "translationUz": "yashirinmoq, bekinmoq",
            "definitionEn": "To conceal oneself from view.",
            "exampleSentence": "She continued to hide beneath her blanket."
      }
],
    reproductionOutline: [
      "An elderly first-time flyer huddled under a blanket throughout her flight, paralyzed by fear.",
      "Neither the flight attendant nor the flight captain could coax her out from under the covering.",
      "The captain assured her that flying conditions were smooth and cloudless, but she refused to budge.",
      "As the captain turned to return to the cockpit, the lady peeked out with one eye.",
      "She vowed never to fly again, but praised the captain and \"his wife\" (the stewardess) for keeping the cabin so neat!"
],
    modelRetelling: "Trapped in airborne terror during her very first flight, an elderly passenger huddled under a heavy blanket pulled tightly over her head. Both the flight attendant and the captain attempted to soothe her nerves, with the captain reassuring her that the skies were clear and the journey was completely safe. Unmoved, the woman refused to uncover her face until wheels touched the tarmac again. As the captain gave up and turned to head back to the flight deck, she peeked out with one eye from beneath the fabric. Politely apologetic, she declared that she loathed flying and would never board another aircraft, but graciously complimented the captain and his \"wife\"—mistaking the flight attendant for his spouse—on maintaining such an impeccably tidy aeroplane!",
    questions: [
      {
            "id": "s42-q1",
            "order": 1,
            "question": "Where was the old lady?",
            "modelAnswer": "The old lady was in an aeroplane.",
            "keywords": [
                  "in an aeroplane"
            ],
            "options": [
                  "In an aeroplane",
                  "On a ferry boat",
                  "At a railway station",
                  "In a city hospital"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kampir samolyotda edi: 'in an aeroplane'."
      },
      {
            "id": "s42-q2",
            "order": 2,
            "question": "What was she doing at the beginning of this story?",
            "modelAnswer": "She had a blanket over her head and did not want to take it off.",
            "keywords": [
                  "blanket over her head",
                  "not want to take it off"
            ],
            "options": [
                  "She had a blanket over her head and refused to take it off",
                  "She was arguing with the pilot",
                  "She was looking out of the window",
                  "She was reading a flight magazine"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U boshiga adyol yopib olgan va uni yechishni xohlamas edi."
      },
      {
            "id": "s42-q3",
            "order": 3,
            "question": "Who spoke to her?",
            "modelAnswer": "The air hostess spoke to her.",
            "keywords": [
                  "air hostess spoke to her"
            ],
            "options": [
                  "The air hostess",
                  "Her grandson",
                  "Another passenger",
                  "A flight doctor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Unga styuardessa gapirdi: 'The air hostess spoke to her'."
      },
      {
            "id": "s42-q4",
            "order": 4,
            "question": "What did the old lady say?",
            "modelAnswer": "She said she had never been in an aeroplane before, was frightened, and would keep the blanket on until they were back on the ground.",
            "keywords": [
                  "never been in an aeroplane before",
                  "frightened",
                  "back on the ground again"
            ],
            "options": [
                  "She said she was frightened because it was her first flight and would keep the blanket on until landing",
                  "She asked for a vegetarian lunch",
                  "She demanded that the plane land immediately",
                  "She complained that the cabin was too hot"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U umrida birinchi marta samolyotda ekanini, qo'rqayotganini va yerga tushguncha ochmasligini aytdi."
      },
      {
            "id": "s42-q5",
            "order": 5,
            "question": "Who came then?",
            "modelAnswer": "Then the captain came.",
            "keywords": [
                  "captain came"
            ],
            "options": [
                  "The captain",
                  "A flight engineer",
                  "Her husband",
                  "A police officer"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "So'ng samolyot kapitani keldi."
      },
      {
            "id": "s42-q6",
            "order": 6,
            "question": "What did this person say?",
            "modelAnswer": "He said, 'Madam, I am the captain of this aeroplane. The weather is fine, there are no clouds in the sky, and everything is going very well.'",
            "keywords": [
                  "captain of this aeroplane",
                  "weather is fine",
                  "no clouds"
            ],
            "options": [
                  "He reassured her that weather was fine, with no clouds, and everything was going well",
                  "He told her that the engine had caught fire",
                  "He ordered her to take off the blanket or pay a fine",
                  "He offered her a glass of champagne"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kapitan havo yaxshiligini, osmonda bulut yo'qligini va hammasi ajoyib ketayotganini aytdi."
      },
      {
            "id": "s42-q7",
            "order": 7,
            "question": "What did the old lady do?",
            "modelAnswer": "She continued to hide.",
            "keywords": [
                  "continued to hide"
            ],
            "options": [
                  "She continued to hide",
                  "She took off the blanket and smiled",
                  "She jumped out of her seat",
                  "She started screaming"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bekinishda davom etdi: 'she continued to hide'."
      },
      {
            "id": "s42-q8",
            "order": 8,
            "question": "What did the captain do?",
            "modelAnswer": "The captain turned and started to go back.",
            "keywords": [
                  "turned and started to go back"
            ],
            "options": [
                  "The captain turned and started to go back",
                  "He pulled the blanket off by force",
                  "He sat down beside her",
                  "He called ground control"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Kapitan ortiga o'girilib, kabinasiga qayta boshladi."
      },
      {
            "id": "s42-q9",
            "order": 9,
            "question": "What did the old lady do then?",
            "modelAnswer": "She looked out from under the blanket with one eye.",
            "keywords": [
                  "looked out from under the blanket with one eye"
            ],
            "options": [
                  "She looked out from under the blanket with one eye",
                  "She threw her blanket on the floor",
                  "She waved at the other passengers",
                  "She fell asleep"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U adyol tagidan bir ko'zi bilan mo'ralab qaradi."
      },
      {
            "id": "s42-q10",
            "order": 10,
            "question": "What did she say?",
            "modelAnswer": "She said she was never going to fly again, but kindly praised him and his wife (the stewardess) for keeping the aeroplane very clean.",
            "keywords": [
                  "never going to fly again",
                  "you and your wife keep your aeroplane very clean"
            ],
            "options": [
                  "She said she would never fly again, but praised him and his 'wife' for keeping the aeroplane very clean",
                  "She asked for a parachute",
                  "She asked what time they would arrive in London",
                  "She apologized for breaking her seatbelt"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U boshqa hech qachon uchmasligini, lekin kapitan va uning 'xotini' samolyotni juda toza tutishini aytdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s42-tf1",
            "order": 1,
            "statement": "The old lady was a frequent flier who had traveled to fifty countries.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U ilgari hech qachon samolyotda uchmagan edi ('I have never been in an aeroplane before')."
      },
      {
            "id": "s42-tf2",
            "order": 2,
            "statement": "The flight encountered severe turbulence and hail clouds.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Havo musaffo va bulutsiz edi ('The weather is fine, there are no clouds in the sky')."
      },
      {
            "id": "s42-tf3",
            "order": 3,
            "statement": "The captain was sympathetic and tried to reassure the passenger.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Kapitan kelib uni xotirjam qilishga urindi."
      },
      {
            "id": "s42-tf4",
            "order": 4,
            "statement": "The old lady mistook the flight attendant for the pilot's spouse.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: U styuardessani kapitanning xotini deb o'yladi ('you and your wife keep your aeroplane very clean')."
      },
      {
            "id": "s42-tf5",
            "order": 5,
            "statement": "The old lady intended to book tickets for another flight next month.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U boshqa aslo uchmasligini aytdi ('I am never going to fly again')."
      },
      {
            "id": "s42-tf6",
            "order": 6,
            "statement": "The aircraft landed safely at its destination airport.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda parvoz qanday yakunlangani haqida ma'lumot keltirilmagan."
      }
]
  },
  {
    id: 'story-43',
    storyNumber: 43,
    title: "The Air Force Officer's Wings",
    titleUz: "Harbiy uchuvchining qanotlari",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "A young air force officer had a very beautiful wife. Early each morning he left his house and went to the airport, and an hour later his wife always left the house too, with a big white towel, and went for a walk on the beach.\nHer husband always flew over every morning, and when she saw his aeroplane, she held the white towel high above her head. When her husband saw it, he made either the left wing or the right wing of his aeroplane go down. The left wing meant, 'I will be busy tonight and won't be home.' The right wing meant, 'In eight hours I will be holding you in my arms.'\nOne morning he flew over with eight other aeroplanes, and his left wing went down. Before his wife had time to feel sad about this, all the other aeroplanes flew over, and each of them turned its right wing down.",
    paragraphs: [
      "A young air force officer had a very beautiful wife. Early each morning he left his house and went to the airport, and an hour later his wife always left the house too, with a big white towel, and went for a walk on the beach.",
      "Her husband always flew over every morning, and when she saw his aeroplane, she held the white towel high above her head. When her husband saw it, he made either the left wing or the right wing of his aeroplane go down. The left wing meant, 'I will be busy tonight and won't be home.' The right wing meant, 'In eight hours I will be holding you in my arms.'",
      "One morning he flew over with eight other aeroplanes, and his left wing went down. Before his wife had time to feel sad about this, all the other aeroplanes flew over, and each of them turned its right wing down."
],
    summaryUz: "Harbiy uchuvchi har kuni plyajda oq sochiq silkitib turgan go'zal xotinining tepasidan samolyotida uchib o'tardi. Chap qanotini quyi tushirsa — 'Bugun bandman, kela olmayman', o'ng qanotini tushirsa — 'Kechqurun quchog'imga olaman' degani edi. Bir kuni u 8 ta boshqa samolyot bilan uchib o'tib, chap qanotini tushiradi (bandman). Xotini xafa bo'lishga ulgurmasdan, ortidan uchib o'tgan barcha 8 ta samolyot birin-ketin o'ng qanotlarini quyi tushirib o'tadilar!",
    vocabulary: [
      {
            "word": "air force officer",
            "pos": "n.",
            "phonetic": "[ˈeə fɔːs ˈɒfɪsə]",
            "translationUz": "harbiy havo kuchlari zobiti (uchuvchi)",
            "definitionEn": "A commissioned officer in the military branch for aviation.",
            "exampleSentence": "The handsome air force officer flew patrol jets."
      },
      {
            "word": "towel",
            "pos": "n.",
            "phonetic": "[ˈtaʊəl]",
            "translationUz": "sochiq",
            "definitionEn": "A piece of absorbent cloth or paper used for drying.",
            "exampleSentence": "She signaled him by waving a large white towel."
      },
      {
            "word": "beach",
            "pos": "n.",
            "phonetic": "[biːtʃ]",
            "translationUz": "plyaj, sohil",
            "definitionEn": "A sandy or pebbly shore by the sea.",
            "exampleSentence": "She enjoyed peaceful morning walks on the sandy beach."
      },
      {
            "word": "wing",
            "pos": "n.",
            "phonetic": "[wɪŋ]",
            "translationUz": "qanot (samolyotniki)",
            "definitionEn": "A rigid horizontal structure projecting from both sides of an aircraft.",
            "exampleSentence": "The pilot dipped the right wing in salute."
      },
      {
            "word": "in my arms",
            "pos": "prep. phr.",
            "phonetic": "[ɪn maɪ ɑːmz]",
            "translationUz": "quchog'imda, bag'rimda",
            "definitionEn": "Embraced closely with affection.",
            "exampleSentence": "In eight hours I will be holding you in my arms."
      },
      {
            "word": "turn down",
            "pos": "phr. v.",
            "phonetic": "[tɜːn daʊn]",
            "translationUz": "quyi egmoq (qanotni)",
            "definitionEn": "To dip or tilt downwards in banking flight.",
            "exampleSentence": "Each of the military jets tilted its right wing down."
      }
],
    reproductionOutline: [
      "A young air force pilot had an attractive wife who walked the beach with a white towel daily.",
      "Flying patrol overhead, the pilot read her towel signal and communicated via airplane wings.",
      "Dipping the left wing meant he was grounded with evening duties; dipping the right wing meant an intimate evening reunion.",
      "One morning, he flew in formation with eight squadron colleagues and dipped his left wing in disappointment.",
      "Before his wife could despair, all eight accompanying jets dipped their right wings in cheeky flirtatious solidarity!"
],
    modelRetelling: "A handsome young air force officer was married to a striking beauty. Each morning, following his departure for the airbase, his wife strolled along the beach brandishing a massive white towel. Whenever the husband soared overhead, she held the towel aloft. In response, the officer dipped one of his aircraft's wings: the left wing signaled that he had evening duties and could not return home, while the right wing lovingly declared: 'In eight hours I will hold you in my arms.' One morning, he flew over accompanied by eight other squadron fighters, sorrowfully tilting his left wing downward. But before his wife could even sigh, the eight other jets flew past in sequence, each playfully dipping their right wings down!",
    questions: [
      {
            "id": "s43-q1",
            "order": 1,
            "question": "Who are the two people at the beginning of this story?",
            "modelAnswer": "A young air force officer and his very beautiful wife.",
            "keywords": [
                  "young air force officer",
                  "very beautiful wife"
            ],
            "options": [
                  "A young air force officer and his very beautiful wife",
                  "A pilot and a flight attendant",
                  "An old sailor and his daughter",
                  "A general and a nurse"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hikoya boshidagi ikki kishi yosh harbiy uchuvchi va uning go'zal xotini edi."
      },
      {
            "id": "s43-q2",
            "order": 2,
            "question": "When did the man in this story leave his house?",
            "modelAnswer": "He left his house early each morning.",
            "keywords": [
                  "early each morning"
            ],
            "options": [
                  "Early each morning",
                  "Late in the afternoon",
                  "At midnight",
                  "Only on weekends"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U har kuni erta tongda uyidan chiqib ketardi."
      },
      {
            "id": "s43-q3",
            "order": 3,
            "question": "Where did he go?",
            "modelAnswer": "He went to the airport.",
            "keywords": [
                  "went to the airport"
            ],
            "options": [
                  "To the airport / airbase",
                  "To the city harbour",
                  "To the train station",
                  "To the military hospital"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U aeroportga (aerodromga) ketardi."
      },
      {
            "id": "s43-q4",
            "order": 4,
            "question": "When did his wife leave the house?",
            "modelAnswer": "His wife left the house an hour later.",
            "keywords": [
                  "an hour later"
            ],
            "options": [
                  "An hour later",
                  "At the exact same time",
                  "In the late evening",
                  "At lunchtime"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Xotini bir soatdan keyin uydan chiqardi."
      },
      {
            "id": "s43-q5",
            "order": 5,
            "question": "What did she take with her?",
            "modelAnswer": "She took a big white towel with her.",
            "keywords": [
                  "big white towel"
            ],
            "options": [
                  "A big white towel",
                  "A pair of binoculars",
                  "A picnic basket",
                  "A radio transmitter"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U o'zi bilan katta oq sochiq olardi."
      },
      {
            "id": "s43-q6",
            "order": 6,
            "question": "Where did she go?",
            "modelAnswer": "She went for a walk on the beach.",
            "keywords": [
                  "walk on the beach"
            ],
            "options": [
                  "For a walk on the beach",
                  "To the downtown market",
                  "To her mother's house",
                  "To the airport hangar"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U sohil bo'yiga (plyajga) sayrga borardi."
      },
      {
            "id": "s43-q7",
            "order": 7,
            "question": "What happened every morning after that?",
            "modelAnswer": "Her husband always flew over every morning.",
            "keywords": [
                  "husband always flew over every morning"
            ],
            "options": [
                  "Her husband always flew over every morning",
                  "She swam in the sea",
                  "She received a telegraph",
                  "Her husband waved from a boat"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Eri har tong uning tepasidan samolyotda uchib o'tardi."
      },
      {
            "id": "s43-q8",
            "order": 8,
            "question": "What did the officer's wife do?",
            "modelAnswer": "She held the white towel high above her head.",
            "keywords": [
                  "held the white towel high above her head"
            ],
            "options": [
                  "She held the white towel high above her head",
                  "She blew a whistle",
                  "She flashed a mirror",
                  "She waved both hands"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U oq sochiqni boshidan yuqori ko'tarib silkitardi."
      },
      {
            "id": "s43-q9",
            "order": 9,
            "question": "When did she do it?",
            "modelAnswer": "When she saw his aeroplane.",
            "keywords": [
                  "When she saw his aeroplane"
            ],
            "options": [
                  "When she saw his aeroplane",
                  "When the sun rose",
                  "When the tide went out",
                  "When other tourists arrived"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Elining samolyotini ko'rgan zahoti shunday qilardi."
      },
      {
            "id": "s43-q10",
            "order": 10,
            "question": "What did her husband do then?",
            "modelAnswer": "He made either the left wing or the right wing of his aeroplane go down.",
            "keywords": [
                  "left wing or the right wing",
                  "go down"
            ],
            "options": [
                  "He made either the left wing or the right wing dip down",
                  "He dropped a love letter with a parachute",
                  "He performed a loop in the sky",
                  "He flashed his landing lights"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U samolyotining chap yoki o'ng qanotini quyi tushirardi."
      },
      {
            "id": "s43-q11",
            "order": 11,
            "question": "When did he do this?",
            "modelAnswer": "When he saw the white towel.",
            "keywords": [
                  "When her husband saw it"
            ],
            "options": [
                  "When he saw the towel",
                  "Before taking off",
                  "When landing on the runway",
                  "At sundown"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Oq sochiqni ko'rgan paytida."
      },
      {
            "id": "s43-q12",
            "order": 12,
            "question": "What did the left wing mean?",
            "modelAnswer": "The left wing meant, 'I will be busy tonight and won't be home.'",
            "keywords": [
                  "busy tonight and won't be home"
            ],
            "options": [
                  "'I will be busy tonight and won't be home.'",
                  "'The weather is getting stormy.'",
                  "'Prepare a hot roast dinner.'",
                  "'I have to fly to Paris tomorrow.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chap qanot: 'Bugun kechqurun bandman, uyga borolmayman' degan ma'noni anglatardi."
      },
      {
            "id": "s43-q13",
            "order": 13,
            "question": "What did the right wing mean?",
            "modelAnswer": "The right wing meant, 'In eight hours I will be holding you in my arms.'",
            "keywords": [
                  "In eight hours I will be holding you in my arms"
            ],
            "options": [
                  "'In eight hours I will be holding you in my arms.'",
                  "'I am bringing my pilot friends over for drinks.'",
                  "'Meet me at the airbase gate.'",
                  "'Fly with me tomorrow.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "O'ng qanot: 'Sakkiz soatdan so'ng seni bag'rimga bosaman' degani edi."
      },
      {
            "id": "s43-q14",
            "order": 14,
            "question": "What happened one morning?",
            "modelAnswer": "One morning he flew over with eight other aeroplanes, and his left wing went down.",
            "keywords": [
                  "flew over with eight other aeroplanes",
                  "left wing went down"
            ],
            "options": [
                  "He flew over with eight other planes and his left wing went down",
                  "His engine stopped over the beach",
                  "His wife forgot to bring the towel",
                  "The beach was closed by the military"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir tong u 8 ta boshqa samolyot bilan uchib o'tib, chap qanotini tushirdi."
      },
      {
            "id": "s43-q15",
            "order": 15,
            "question": "Which wing went down?",
            "modelAnswer": "His left wing went down.",
            "keywords": [
                  "left wing"
            ],
            "options": [
                  "His left wing",
                  "His right wing",
                  "Both wings",
                  "The tail rudder"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning chap qanoti quyi tushdi (uyga kela olmasligini bildirdi)."
      },
      {
            "id": "s43-q16",
            "order": 16,
            "question": "What did the other aeroplanes do?",
            "modelAnswer": "All the other aeroplanes flew over, and each of them turned its right wing down.",
            "keywords": [
                  "turned its right wing down"
            ],
            "options": [
                  "Each of the eight other planes turned its right wing down",
                  "They all landed on the sand",
                  "They fired signal flares",
                  "They circled around in confusion"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qolgan barcha 8 ta samolyot birin-ketin o'ng qanotlarini quyi tushirib o'tdilar!"
      }
],
    trueFalseQuestions: [
      {
            "id": "s43-tf1",
            "order": 1,
            "statement": "The wife signaled to her pilot husband using a bright red flag.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U katta oq sochiq bilan signal berardi ('with a big white towel')."
      },
      {
            "id": "s43-tf2",
            "order": 2,
            "statement": "A dipped left wing signified that the husband was held up on duty that night.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The left wing meant, \"I will be busy tonight and won't be home\"'."
      },
      {
            "id": "s43-tf3",
            "order": 3,
            "statement": "A dipped right wing promised a romantic reunion within eight hours.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'The right wing meant, \"In eight hours I will be holding you in my arms\"'."
      },
      {
            "id": "s43-tf4",
            "order": 4,
            "statement": "The husband was flying a helicopter rather than an aeroplane.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U qanotli samolyotda uchardi ('either the left wing or the right wing of his aeroplane')."
      },
      {
            "id": "s43-tf5",
            "order": 5,
            "statement": "The eight fellow pilots playfully promised that they would hold her in their arms.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Barcha 8 ta hamkasblar hazillashib o'ng qanotlarini tushirib o'tdilar."
      },
      {
            "id": "s43-tf6",
            "order": 6,
            "statement": "The husband was court-martialed for reckless formation flying.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda uchuvchilarning jazolangani haqida hech narsa deyilmagan."
      }
]
  },
  {
    id: 'story-44',
    storyNumber: 44,
    title: "Without Shoes and Socks",
    titleUz: "Poyabzal va paypoqsiz",
    cefrLevel: 'A2',
    wordCount: 161,
    readingTimeMinutes: 1,
    storyText: "An artist had a small daughter. Sometimes he painted women without any clothes on, and he and his wife always tried to keep the small girl out when he was doing this. 'She is too young to understand,' they said.\nBut one day, when the artist was painting a woman with no clothes on, he forgot to lock the door, and the little girl suddenly ran into the room. Her mother ran up the stairs after her, but when she got to the top, the little girl was already in the room and looking at the woman. Both her parents waited for her to speak.\nFor a few seconds the little girl said nothing, but then she ran to her mother and said angrily, 'Why do you let her go about without shoes and socks on when you don't let me?'",
    paragraphs: [
      "An artist had a small daughter. Sometimes he painted women without any clothes on, and he and his wife always tried to keep the small girl out when he was doing this. 'She is too young to understand,' they said.",
      "But one day, when the artist was painting a woman with no clothes on, he forgot to lock the door, and the little girl suddenly ran into the room. Her mother ran up the stairs after her, but when she got to the top, the little girl was already in the room and looking at the woman. Both her parents waited for her to speak.",
      "For a few seconds the little girl said nothing, but then she ran to her mother and said angrily, 'Why do you let her go about without shoes and socks on when you don't let me?'"
],
    summaryUz: "Rassom ba'zida kiyimsiz ayollarning suratini chizardi. Ota-onasi yosh qizchasiga bu narsani ko'rsatmaslik uchun eshikni qulflab olishardi. Bir kuni rassom eshikni qulflashni unutib qo'yadi va qizcha xonaga yugurib kiradi. Ota-ona qizchaning reaksiyasidan xavotirlanib jim kutishadi. Qizcha esa onasiga qarab achchiqlanib: 'Nega unga tuflisiz va paypoqsiz yurishga ruxsat berasiz-u, menga esa ruxsat bermaysiz?!' deb e'tiroz bildiradi.",
    vocabulary: [
      {
            "word": "artist",
            "pos": "n.",
            "phonetic": "[ˈɑːtɪst]",
            "translationUz": "rassom",
            "definitionEn": "A person who produces paintings or drawings as a profession.",
            "exampleSentence": "The talented artist painted portraits in his attic studio."
      },
      {
            "word": "without any clothes on",
            "pos": "prep. phr.",
            "phonetic": "[wɪˈðaʊt ˈeni kləʊðz ɒn]",
            "translationUz": "kiyimsiz, yalang'och holda",
            "definitionEn": "Nude; wearing no garments.",
            "exampleSentence": "He was painting a life model without any clothes on."
      },
      {
            "word": "lock the door",
            "pos": "v. phr.",
            "phonetic": "[lɒk ðə dɔː]",
            "translationUz": "eshikni qulflamoq",
            "definitionEn": "To secure the door with a bolt or key.",
            "exampleSentence": "He carelessly forgot to lock the studio door."
      },
      {
            "word": "stairs",
            "pos": "n.",
            "phonetic": "[steəz]",
            "translationUz": "zina",
            "definitionEn": "Steps leading from one floor to another.",
            "exampleSentence": "The anxious mother dashed up the stairs."
      },
      {
            "word": "shoes and socks",
            "pos": "n. phr.",
            "phonetic": "[ʃuːz ənd sɒks]",
            "translationUz": "tufli va paypoq",
            "definitionEn": "Footwear covering feet and ankles.",
            "exampleSentence": "Why is she allowed to walk without shoes and socks?"
      },
      {
            "word": "let",
            "pos": "v.",
            "phonetic": "[let]",
            "translationUz": "ruxsat bermoq, qo'yib bermoq",
            "definitionEn": "To allow or permit someone to do something.",
            "exampleSentence": "Why do you let her go about barefoot?"
      }
],
    reproductionOutline: [
      "A painter and his wife carefully barred their young daughter whenever nude models posed in the studio.",
      "One day, the painter forgot to bolt the door, and the toddler bolted inside.",
      "The mother sprinted upstairs in panic, finding the girl already gazing inquisitively at the nude model.",
      "Both parents held their breath, dreading an awkward, precocious remark.",
      "With child-like innocence, the girl merely protested that the stranger was allowed to walk around without shoes and socks!"
],
    modelRetelling: "An artist who periodically painted nude models always took precautions with his wife to exclude their little daughter from the studio, believing she was too young to understand. However, during one session the painter neglected to lock the studio door, and the little girl burst right into the room. Racing up the stairs in dread, the mother reached the doorway to discover her daughter silently examining the naked woman. Bracing themselves for an embarrassing question, both parents waited anxiously. After studying the scene, the girl stamped her foot and complained indignantly to her mother: 'Why on earth do you let her wander around without any shoes and socks on, when you never let me do that?!'",
    questions: [
      {
            "id": "s44-q1",
            "order": 1,
            "question": "What was the small girl's father?",
            "modelAnswer": "The small girl's father was an artist.",
            "keywords": [
                  "father was an artist"
            ],
            "options": [
                  "An artist",
                  "A doctor",
                  "A police officer",
                  "A school headmaster"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qizchaning otasi rassom edi: 'An artist had a small daughter'."
      },
      {
            "id": "s44-q2",
            "order": 2,
            "question": "What did he sometimes do?",
            "modelAnswer": "Sometimes he painted women without any clothes on.",
            "keywords": [
                  "painted women without any clothes on"
            ],
            "options": [
                  "He painted women without any clothes on",
                  "He sculpted wild animals",
                  "He painted country landscapes",
                  "He taught art classes"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ba'zida kiyimsiz ayollarni chizardi."
      },
      {
            "id": "s44-q3",
            "order": 3,
            "question": "What did he and his wife do then?",
            "modelAnswer": "They always tried to keep the small girl out.",
            "keywords": [
                  "keep the small girl out"
            ],
            "options": [
                  "They always tried to keep the small girl out",
                  "They let her help with the brushes",
                  "They sent her to boarding school",
                  "They covered the paintings with curtains"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular qizchani xonaga kiritmaslikka harakat qilishardi."
      },
      {
            "id": "s44-q4",
            "order": 4,
            "question": "What did they say?",
            "modelAnswer": "They said, 'She is too young to understand.'",
            "keywords": [
                  "too young to understand"
            ],
            "options": [
                  "'She is too young to understand.'",
                  "'She will spill the paint.'",
                  "'She is afraid of models.'",
                  "'Art is for adults only.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular: 'U buni tushunish uchun hali juda yosh' deyishardi."
      },
      {
            "id": "s44-q5",
            "order": 5,
            "question": "What happened one day?",
            "modelAnswer": "He forgot to lock the door, and the little girl suddenly ran into the room.",
            "keywords": [
                  "forgot to lock the door",
                  "little girl suddenly ran into the room"
            ],
            "options": [
                  "He forgot to lock the door and the girl ran into the room",
                  "The model fainted",
                  "The painting caught fire",
                  "The mother lost her temper"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U eshikni qulflashni unutdi va qizcha yugurib kirib qoldi."
      },
      {
            "id": "s44-q6",
            "order": 6,
            "question": "When did it happen?",
            "modelAnswer": "When the artist was painting a woman with no clothes on.",
            "keywords": [
                  "painting a woman with no clothes on"
            ],
            "options": [
                  "When the artist was painting a woman with no clothes on",
                  "During breakfast time",
                  "Late at night while everyone slept",
                  "During an art exhibition"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Rassom kiyimsiz ayolning suratini chizayotgan vaqtda yuz berdi."
      },
      {
            "id": "s44-q7",
            "order": 7,
            "question": "What did the small girl's mother do?",
            "modelAnswer": "Her mother ran up the stairs after her.",
            "keywords": [
                  "mother ran up the stairs after her"
            ],
            "options": [
                  "Her mother ran up the stairs after her",
                  "She screamed from the kitchen",
                  "She phoned her neighbour",
                  "She locked herself in her bedroom"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Onasi uning ortidan zinalardan yugurib chiqdi."
      },
      {
            "id": "s44-q8",
            "order": 8,
            "question": "What was the girl doing when her mother got to the top of the stairs?",
            "modelAnswer": "The little girl was already in the room and looking at the woman.",
            "keywords": [
                  "already in the room and looking at the woman"
            ],
            "options": [
                  "She was already in the room looking at the woman",
                  "She was crying in a corner",
                  "She was hiding behind the easel",
                  "She was painting on the wall"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qizcha xonaga kirib, ayolga qarab turgan edi."
      },
      {
            "id": "s44-q9",
            "order": 9,
            "question": "What did her parents do?",
            "modelAnswer": "Both her parents waited for her to speak.",
            "keywords": [
                  "Both her parents waited for her to speak"
            ],
            "options": [
                  "Both her parents waited for her to speak",
                  "They scolded her immediately",
                  "They dragged her out of the room",
                  "They laughed aloud"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ota-onasi uning nima deyishini kutib jim turishdi."
      },
      {
            "id": "s44-q10",
            "order": 10,
            "question": "What did the little girl do?",
            "modelAnswer": "She ran to her mother.",
            "keywords": [
                  "ran to her mother"
            ],
            "options": [
                  "She ran to her mother",
                  "She hid under the sofa",
                  "She touched the wet canvas",
                  "She began to cry"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U onasining yoniga yugurib bordi: 'she ran to her mother'."
      },
      {
            "id": "s44-q11",
            "order": 11,
            "question": "What did she say?",
            "modelAnswer": "She said, 'Why do you let her go about without shoes and socks on when you don't let me?'",
            "keywords": [
                  "without shoes and socks on when you don't let me"
            ],
            "options": [
                  "'Why do you let her go about without shoes and socks on when you don't let me?'",
                  "'Why is she not wearing her dress?'",
                  "'Is she cold in this room?'",
                  "'Can I have some paint too?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Nega menga ruxsat bermaysiz-u, unga poyabzal va paypoqsiz yurishga ruxsat berasiz?' dedi."
      },
      {
            "id": "s44-q12",
            "order": 12,
            "question": "How did she feel about this?",
            "modelAnswer": "She felt angry.",
            "keywords": [
                  "said angrily"
            ],
            "options": [
                  "She felt angry and treated unfairly",
                  "She was terrified",
                  "She was amused",
                  "She was embarrassed"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U o'zini nohaq cheklangan deb o'ylab jahli chiqdi: 'said angrily'."
      }
],
    trueFalseQuestions: [
      {
            "id": "s44-tf1",
            "order": 1,
            "statement": "The artist and his wife routinely allowed the girl to watch life drawing sessions.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Ular qizchani xonaga kiritmaslikka qat'iy harakat qilishardi ('always tried to keep the small girl out')."
      },
      {
            "id": "s44-tf2",
            "order": 2,
            "statement": "The studio door was left unlocked by accident on that day.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'he forgot to lock the door'."
      },
      {
            "id": "s44-tf3",
            "order": 3,
            "statement": "The model was wearing shoes and woollen socks.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Model butunlay kiyimsiz, shu jumladan poyabzalsiz ham edi ('without shoes and socks on')."
      },
      {
            "id": "s44-tf4",
            "order": 4,
            "statement": "The child noticed the model's bare feet before noticing her lack of clothes.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: Bola kiyimning yo'qligiga emas, oyoqyalangligiga e'tibor qaratdi."
      },
      {
            "id": "s44-tf5",
            "order": 5,
            "statement": "The mother was relieved by her daughter's innocent remark.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda onaning yengil nafas olgani yoki nima degani aytilmagan."
      },
      {
            "id": "s44-tf6",
            "order": 6,
            "statement": "The little girl was punished and locked in her bedroom.",
            "correctAnswer": "False",
            "explanationUz": "Matnda qizchaga jazo berilgani haqida hech narsa deyilmagan."
      }
]
  },
  {
    id: 'story-45',
    storyNumber: 45,
    title: "Bill and the Fish Sandwiches",
    titleUz: "Bill va Baliqli Sendvichlar",
    cefrLevel: 'A2',
    wordCount: 153,
    readingTimeMinutes: 1,
    storyText: "It was a small factory, and there was nowhere to eat near it, so the workmen took food from their homes and ate it in the factory at midday.\nOne of the workmen always had fish sandwiches. Every day he took one of them out of his bag, bit it, and then threw all the sandwiches angrily away.\nAt last, one day one of the workmen said to him, 'But, Bill, don't you like fish sandwiches?'\n'No,' said Bill, 'I hate them.'\n'Then why does your wife make them for you every day? There are lots of other nice things for sandwiches. Tell your wife, and she will make other sandwiches.'\n'It isn't as easy as that,' answered Bill. 'I haven't got a wife. I make the sandwiches myself.'",
    paragraphs: [
      "It was a small factory, and there was nowhere to eat near it, so the workmen took food from their homes and ate it in the factory at midday.",
      "One of the workmen always had fish sandwiches. Every day he took one of them out of his bag, bit it, and then threw all the sandwiches angrily away.",
      "At last, one day one of the workmen said to him, 'But, Bill, don't you like fish sandwiches?'\n'No,' said Bill, 'I hate them.'\n'Then why does your wife make them for you every day? There are lots of other nice things for sandwiches. Tell your wife, and she will make other sandwiches.'",
      "'It isn't as easy as that,' answered Bill. 'I haven't got a wife. I make the sandwiches myself.'"
],
    summaryUz: "Kichik zavod yaqinida oshxona bo'lmagani uchun ishchilar uylaridan ovqat olib kelishardi. Bill ismli ishchi har kuni baliqli sendvich olib kelar, bir tishlab, jahli chiqib barchasini axlatga uloqtirardi. Bir kuni hamkasbi unga: 'Bill, baliqli sendvichni yoqtirmasang, xotiningga ayt, boshqacha sendvich qilib bersin' deydi. Shunda Bill: 'Bu sen o'ylagandek oson emas. Mening xotinim yo'q, sendvichlarni o'zim tayyorlayman!' deb javob beradi.",
    vocabulary: [
      {
            "word": "factory",
            "pos": "n.",
            "phonetic": "[ˈfæktri]",
            "translationUz": "zavod, fabrika",
            "definitionEn": "A building or group of buildings where goods are manufactured.",
            "exampleSentence": "The men worked in a small rural factory."
      },
      {
            "word": "midday",
            "pos": "n.",
            "phonetic": "[ˌmɪdˈdeɪ]",
            "translationUz": "tush vaqti, peshin",
            "definitionEn": "Twelve o'clock in the day; noon.",
            "exampleSentence": "They paused their machines and ate lunch at midday."
      },
      {
            "word": "sandwich",
            "pos": "n.",
            "phonetic": "[ˈsænwɪtʃ]",
            "translationUz": "sendvich",
            "definitionEn": "Two pieces of bread with a filling between them.",
            "exampleSentence": "He packed two cold fish sandwiches in his lunchbox."
      },
      {
            "word": "bite (bit)",
            "pos": "v.",
            "phonetic": "[baɪt] ([bɪt])",
            "translationUz": "tishlamoq (tishladi)",
            "definitionEn": "To use teeth to cut into something.",
            "exampleSentence": "He bit into the sandwich and grimaced in disgust."
      },
      {
            "word": "throw away",
            "pos": "phr. v.",
            "phonetic": "[θrəʊ əˈweɪ]",
            "translationUz": "uloqtirib yubormoq, tashlab yubormoq",
            "definitionEn": "To discard something as useless or unwanted.",
            "exampleSentence": "He angrily threw the remaining sandwiches away."
      },
      {
            "word": "hate",
            "pos": "v.",
            "phonetic": "[heɪt]",
            "translationUz": "nafratlanmoq, yomon ko'rmoq",
            "definitionEn": "To feel intense dislike for.",
            "exampleSentence": "I hate fish sandwiches with all my heart."
      }
],
    reproductionOutline: [
      "Factory employees brought packed lunches from home due to the lack of nearby cafes.",
      "A workman named Bill repeatedly unpacked fish sandwiches, took a single bite, and hurled them furiously into the garbage.",
      "Baffled by this wasteful ritual, a coworker asked Bill if he despised fish sandwiches.",
      "When Bill confirmed his intense hatred, the colleague suggested instructing his wife to prepare different fillings.",
      "Bill delivered the punchline: he was an unmarried bachelor who prepared his own sandwiches every morning!"
],
    modelRetelling: "In a small isolated factory devoid of nearby eateries, the workmen were accustomed to packing their midday lunches from home. One employee named Bill brought fish sandwiches every single shift; unfailingly, he would unwrap one, take a single reluctant bite, curse in anger, and fling the entire lunch into the trash bin. Puzzled by this bizarre daily performance, a fellow workman finally intervened, asking whether Bill disliked fish sandwiches. Bill vehemently confirmed his disgust. The coworker reasonably recommended that Bill simply ask his wife to prepare ham or cheese instead. Bill sighed gloomily and admitted: 'It isn't as simple as that—I don't have a wife. I make the blasted sandwiches myself!'",
    questions: [
      {
            "id": "s45-q1",
            "order": 1,
            "question": "Where did the workmen in the story work?",
            "modelAnswer": "They worked in a small factory.",
            "keywords": [
                  "worked in a small factory"
            ],
            "options": [
                  "In a small factory",
                  "In a coal mine",
                  "At a car repair shop",
                  "On a commercial farm"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ishchilar kichik fabrikada ishlashardi: 'in a small factory'."
      },
      {
            "id": "s45-q2",
            "order": 2,
            "question": "What did they take to the factory?",
            "modelAnswer": "They took food from their homes.",
            "keywords": [
                  "took food from their homes"
            ],
            "options": [
                  "Food from their homes",
                  "Tools and spare parts",
                  "Bottles of medicine",
                  "Newspapers to read"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular uylaridan ovqat olib kelishardi."
      },
      {
            "id": "s45-q3",
            "order": 3,
            "question": "Why did they do this?",
            "modelAnswer": "Because there was nowhere to eat near the factory.",
            "keywords": [
                  "nowhere to eat near it"
            ],
            "options": [
                  "Because there was nowhere to eat nearby",
                  "Because restaurant food was too expensive",
                  "Because they were on strict diets",
                  "Because the factory manager forbade dining out"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Chunki zavod yaqinida ovqatlanishga joy yo'q edi."
      },
      {
            "id": "s45-q4",
            "order": 4,
            "question": "When and where did they eat their food?",
            "modelAnswer": "They ate it in the factory at midday.",
            "keywords": [
                  "in the factory at midday"
            ],
            "options": [
                  "In the factory at midday",
                  "Outside in the park at evening",
                  "In the parking lot at morning",
                  "On the factory roof at dawn"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ular zavod ichida, peshin vaqtida ovqatlanishardi."
      },
      {
            "id": "s45-q5",
            "order": 5,
            "question": "What did one of the workmen always have?",
            "modelAnswer": "He always had fish sandwiches.",
            "keywords": [
                  "fish sandwiches"
            ],
            "options": [
                  "Fish sandwiches",
                  "Cold beef pies",
                  "Cheese rolls",
                  "Hot chicken soup"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning doim baliqli sendvichlari bo'lardi: 'fish sandwiches'."
      },
      {
            "id": "s45-q6",
            "order": 6,
            "question": "What did he do every day?",
            "modelAnswer": "He took one out of his bag, bit it, and threw all the sandwiches angrily away.",
            "keywords": [
                  "took one out",
                  "bit it",
                  "threw all the sandwiches angrily away"
            ],
            "options": [
                  "He bit one and threw all of them angrily away",
                  "He gave them to stray dogs",
                  "He shared them with his colleagues",
                  "He ate ten sandwiches in five minutes"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U bittasini tishlab, barcha sendvichlarni jahl bilan axlatga uloqtirardi."
      },
      {
            "id": "s45-q7",
            "order": 7,
            "question": "How did he feel?",
            "modelAnswer": "He felt angry.",
            "keywords": [
                  "angrily"
            ],
            "options": [
                  "Angry and disgusted",
                  "Happy and satisfied",
                  "Frightened",
                  "Bored"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uning jahli chiqardi: 'angrily'."
      },
      {
            "id": "s45-q8",
            "order": 8,
            "question": "What did another workman say to him one day?",
            "modelAnswer": "He asked, 'But, Bill, don't you like fish sandwiches?'",
            "keywords": [
                  "don't you like fish sandwiches"
            ],
            "options": [
                  "'But, Bill, don't you like fish sandwiches?'",
                  "'Can I have the sandwiches you throw away?'",
                  "'Where do you buy your bread?'",
                  "'Why are you wasting company time?'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Hamkasbi: 'Bill, baliqli sendvichni yoqtirmaysanmi?' deb so'radi."
      },
      {
            "id": "s45-q9",
            "order": 9,
            "question": "What did Bill answer?",
            "modelAnswer": "Bill answered, 'No, I hate them.'",
            "keywords": [
                  "No, I hate them"
            ],
            "options": [
                  "'No, I hate them.'",
                  "'Yes, they are my favourite.'",
                  "'They are too salty today.'",
                  "'The fish is spoiled.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bill: 'Yo'q, ulardan nafratlanaman' dedi."
      },
      {
            "id": "s45-q10",
            "order": 10,
            "question": "What did the other workman say then?",
            "modelAnswer": "He asked why his wife made them every day, suggesting he tell his wife to make other nice sandwiches.",
            "keywords": [
                  "why does your wife make them",
                  "Tell your wife"
            ],
            "options": [
                  "He asked why his wife made them, suggesting he tell her to make other fillings",
                  "He offered to buy him lunch at a restaurant",
                  "He told him to stop working in the factory",
                  "He offered him half of his own sandwich"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U xotiniga aytib, boshqa masalliqdan sendvich tayyorlatishni maslahat berdi."
      },
      {
            "id": "s45-q11",
            "order": 11,
            "question": "What was Bill's answer to this?",
            "modelAnswer": "Bill answered, 'It isn't as easy as that. I haven't got a wife. I make the sandwiches myself.'",
            "keywords": [
                  "haven't got a wife",
                  "make the sandwiches myself"
            ],
            "options": [
                  "'I haven't got a wife. I make the sandwiches myself.'",
                  "'My wife refuses to listen to me.'",
                  "'Fish is the only food in our fridge.'",
                  "'I lost my voice this morning.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bill: 'Mening xotinim yo'q, sendvichlarni o'zim tayyorlayman!' deb javob berdi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s45-tf1",
            "order": 1,
            "statement": "The factory featured an affordable hot-food cafeteria for staff.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Zavod yaqinida ovqatlanadigan joy yo'q edi ('there was nowhere to eat near it')."
      },
      {
            "id": "s45-tf2",
            "order": 2,
            "statement": "Bill loved fish sandwiches more than any other meal.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U baliqli sendvichlardan nafratlanardi ('No, I hate them')."
      },
      {
            "id": "s45-tf3",
            "order": 3,
            "statement": "Bill regularly threw his packed sandwiches into the rubbish bin.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'threw all the sandwiches angrily away'."
      },
      {
            "id": "s45-tf4",
            "order": 4,
            "statement": "Bill had been married to a chef for ten years.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Uning xotini umuman yo'q edi ('I haven't got a wife')."
      },
      {
            "id": "s45-tf5",
            "order": 5,
            "statement": "Bill prepared the despised fish sandwiches with his own hands.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'I make the sandwiches myself'."
      },
      {
            "id": "s45-tf6",
            "order": 6,
            "statement": "Bill switched to roast beef sandwiches the following week.",
            "correctAnswer": "Not Given",
            "explanationUz": "Matnda keyin nima qilgani haqida aytilmagan."
      }
]
  },
  {
    id: 'story-46',
    storyNumber: 46,
    title: "Enjoy Your Vegetables!",
    titleUz: "Sabzavotlaringiz yoqimli ishtaha!",
    cefrLevel: 'A2',
    wordCount: 168,
    readingTimeMinutes: 1,
    storyText: "Mrs Brown had a small garden behind her house, and in the spring she planted some vegetables in it. She looked after them very carefully, and when the summer came, they looked very nice.\nOne evening Mrs Brown looked at her vegetables and said, 'Tomorrow I am going to pick them, and then we can eat them.'\nBut early the next morning, her son ran into the kitchen and shouted, 'Mother, Mother! Come quickly! Our neighbour's ducks are in the garden and they are eating our vegetables!'\nMrs Brown ran out, but it was too late! All the vegetables were finished! Mrs Brown cried, and her neighbour was very sorry, but that was the end of the vegetables.\nThen a few days before Christmas, the neighbour brought Mrs Brown a parcel. In it was a beautiful, fat duck, and on it was a piece of paper with the words, 'Enjoy your vegetables!'",
    paragraphs: [
      "Mrs Brown had a small garden behind her house, and in the spring she planted some vegetables in it. She looked after them very carefully, and when the summer came, they looked very nice.",
      "One evening Mrs Brown looked at her vegetables and said, 'Tomorrow I am going to pick them, and then we can eat them.'",
      "But early the next morning, her son ran into the kitchen and shouted, 'Mother, Mother! Come quickly! Our neighbour's ducks are in the garden and they are eating our vegetables!'\nMrs Brown ran out, but it was too late! All the vegetables were finished! Mrs Brown cried, and her neighbour was very sorry, but that was the end of the vegetables.",
      "Then a few days before Christmas, the neighbour brought Mrs Brown a parcel. In it was a beautiful, fat duck, and on it was a piece of paper with the words, 'Enjoy your vegetables!'"
],
    summaryUz: "Missis Braun orqa tomorqasiga sabzavotlar ekib, mehr bilan parvarish qiladi. Yozda hosilni uzmoqchi bo'lib turgan tongda, qo'shnisining o'rdaklari tomorqaga kirib, barcha sabzavotlarni yeb ketadi. Ayol yig'laydi, qo'shnisi uzr so'raydi. Rojdestvodan bir necha kun oldin o'sha qo'shni Missis Braunga sovg'a olib keladi: qutida sabzavotlar bilan boqilib semirgan chiroyli semiz o'rdak va ustida xat: 'Sabzavotlaringiz yoqimli ishtaha bo'lsin!'",
    vocabulary: [
      {
            "word": "plant",
            "pos": "v.",
            "phonetic": "[plɑːnt]",
            "translationUz": "ekmoq (urug', ko'chat)",
            "definitionEn": "To place a seed, bulb, or plant in the ground to grow.",
            "exampleSentence": "In spring she planted crisp vegetables in her plot."
      },
      {
            "word": "look after",
            "pos": "phr. v.",
            "phonetic": "[lʊk ˈɑːftə]",
            "translationUz": "parvarish qilmoq, qaramoq",
            "definitionEn": "To take care of or tend to.",
            "exampleSentence": "She looked after the seedlings very carefully."
      },
      {
            "word": "pick",
            "pos": "v.",
            "phonetic": "[pɪk]",
            "translationUz": "uzmoq, termoq",
            "definitionEn": "To detach and gather vegetables, fruit, or flowers.",
            "exampleSentence": "Tomorrow morning I am going to pick the vegetables."
      },
      {
            "word": "duck",
            "pos": "n.",
            "phonetic": "[dʌk]",
            "translationUz": "o'rdak",
            "definitionEn": "A waterbird with webbed feet and a broad flat bill.",
            "exampleSentence": "The neighbour's greedy ducks invaded the garden."
      },
      {
            "word": "parcel",
            "pos": "n.",
            "phonetic": "[ˈpɑːsl]",
            "translationUz": "posilka, tuguncha, sovg'a qutisi",
            "definitionEn": "A package or object wrapped in paper for delivery.",
            "exampleSentence": "He brought a holiday parcel wrapped in brown paper."
      },
      {
            "word": "enjoy",
            "pos": "v.",
            "phonetic": "[ɪnˈdʒɔɪ]",
            "translationUz": "rohatlanmoq, yoqimli ishtaha tilamoq",
            "definitionEn": "To take pleasure in food or an experience.",
            "exampleSentence": "Enjoy your vegetables, roasted inside the duck!"
      }
],
    reproductionOutline: [
      "Mrs Brown meticulously cultivated a bountiful vegetable garden behind her house all spring and summer.",
      "On the eve of harvest, she planned to pick the fresh produce the following morning.",
      "At dawn, her son cried that the neighbour's ducks had invaded the plot, gobbling up every single plant.",
      "Mrs Brown wept while the neighbour offered sincere apologies for the lost crop.",
      "Just before Christmas, the neighbour delivered a plump, oven-ready duck with a clever note: \"Enjoy your vegetables!\""
],
    modelRetelling: "Throughout the spring and summer, Mrs Brown lovingly tended a small vegetable patch in her backyard. On the eve of her long-awaited harvest, she resolved to pick the fresh produce the following day. Early the next morning, however, her son sprinted into the kitchen shouting that the neighbour's ducks had broken into the garden. Rushing outside, Mrs Brown found to her despair that the ravenous flock had devoured every scrap of green. While the apologetic neighbour expressed profound regret, the harvest was ruined. Months later, just prior to Christmas, the neighbour knocked on Mrs Brown's door carrying a wrapped package. Inside lay a magnificent, plump roasted duck, accompanied by a witty card reading: 'Enjoy your vegetables!'",
    questions: [
      {
            "id": "s46-q1",
            "order": 1,
            "question": "What did Mrs Brown have?",
            "modelAnswer": "Mrs Brown had a small garden.",
            "keywords": [
                  "small garden"
            ],
            "options": [
                  "A small garden",
                  "A flock of ducks",
                  "A grocery shop",
                  "A vegetable farm"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Missis Braunning kichik tomorqasi (bog'i) bor edi."
      },
      {
            "id": "s46-q2",
            "order": 2,
            "question": "Where did she have it?",
            "modelAnswer": "Behind her house.",
            "keywords": [
                  "behind her house"
            ],
            "options": [
                  "Behind her house",
                  "In front of the village hall",
                  "Near the riverbank",
                  "On the roof"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Uyi orqasida: 'behind her house'."
      },
      {
            "id": "s46-q3",
            "order": 3,
            "question": "What did she do there?",
            "modelAnswer": "She planted some vegetables.",
            "keywords": [
                  "planted some vegetables"
            ],
            "options": [
                  "She planted some vegetables",
                  "She kept ducks and chickens",
                  "She built a greenhouse",
                  "She parked her car"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U yerga sabzavotlar ekkan edi."
      },
      {
            "id": "s46-q4",
            "order": 4,
            "question": "When did she do it?",
            "modelAnswer": "In the spring.",
            "keywords": [
                  "in the spring"
            ],
            "options": [
                  "In the spring",
                  "In midwinter",
                  "In late autumn",
                  "During summer vacation"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bahorda ekkan edi: 'in the spring'."
      },
      {
            "id": "s46-q5",
            "order": 5,
            "question": "What did she do then?",
            "modelAnswer": "She looked after them very carefully.",
            "keywords": [
                  "looked after them very carefully"
            ],
            "options": [
                  "She looked after them very carefully",
                  "She forgot to water them",
                  "She sold them to neighbours",
                  "She covered them with plastic"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ularni juda ehtiyotkorlik bilan parvarish qildi."
      },
      {
            "id": "s46-q6",
            "order": 6,
            "question": "What happened in the summer?",
            "modelAnswer": "When the summer came, they looked very nice.",
            "keywords": [
                  "looked very nice",
                  "summer"
            ],
            "options": [
                  "They looked very nice",
                  "They dried up and died",
                  "They were eaten by caterpillars",
                  "They were ruined by frost"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Yoz kelganda ular juda yaxshi hosil berib chiroyli ko'rindi."
      },
      {
            "id": "s46-q7",
            "order": 7,
            "question": "What did Mrs Brown do one evening?",
            "modelAnswer": "She looked at her vegetables.",
            "keywords": [
                  "looked at her vegetables"
            ],
            "options": [
                  "She looked at her vegetables",
                  "She harvested everything",
                  "She invited her neighbour over",
                  "She built a fence"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Bir kuni oqshom u sabzavotlariga qaradi."
      },
      {
            "id": "s46-q8",
            "order": 8,
            "question": "What did she say?",
            "modelAnswer": "She said, 'Tomorrow I am going to pick them, and then we can eat them.'",
            "keywords": [
                  "Tomorrow I am going to pick them",
                  "we can eat them"
            ],
            "options": [
                  "'Tomorrow I am going to pick them, and then we can eat them.'",
                  "'I will sell them at the market for ten pounds.'",
                  "'The ducks might eat these.'",
                  "'I need more fertilizer.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U ertaga ularni uzib, yeyishlarini aytdi."
      },
      {
            "id": "s46-q9",
            "order": 9,
            "question": "What happened early the next morning?",
            "modelAnswer": "Her son ran into the kitchen and shouted.",
            "keywords": [
                  "son ran into the kitchen and shouted"
            ],
            "options": [
                  "Her son ran into the kitchen and shouted",
                  "A fire broke out in the garden",
                  "The neighbour brought a basket",
                  "It started snowing heavily"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Ertasi tongda o'g'li oshxonaga yugurib kirib qichqirdi."
      },
      {
            "id": "s46-q10",
            "order": 10,
            "question": "What did Mrs Brown's son shout?",
            "modelAnswer": "He shouted, 'Mother, Mother! Come quickly! Our neighbour's ducks are in the garden and they are eating our vegetables!'",
            "keywords": [
                  "neighbour's ducks are in the garden",
                  "eating our vegetables"
            ],
            "options": [
                  "'Our neighbour's ducks are in the garden and they are eating our vegetables!'",
                  "'Someone stole our garden fence!'",
                  "'Breakfast is burning on the stove!'",
                  "'A storm has destroyed the house!'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U: 'Tez keling! Qo'shnining o'rdaklari tomorqadagi sabzavotlarimizni yeb qo'yishyapti!' deb baqirdi."
      },
      {
            "id": "s46-q11",
            "order": 11,
            "question": "What did Mrs Brown do?",
            "modelAnswer": "Mrs Brown ran out.",
            "keywords": [
                  "ran out"
            ],
            "options": [
                  "Mrs Brown ran out",
                  "She phoned the police",
                  "She grabbed a broom and hid",
                  "She fainted on the floor"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "U darhol tashqariga yugurib chiqdi: 'Mrs Brown ran out'."
      },
      {
            "id": "s46-q12",
            "order": 12,
            "question": "What happened to the vegetables?",
            "modelAnswer": "All the vegetables were finished.",
            "keywords": [
                  "All the vegetables were finished"
            ],
            "options": [
                  "All the vegetables were finished and gone",
                  "Half of them were saved",
                  "Only the carrots remained",
                  "The vegetables were untouched"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Barcha sabzavotlar tugagan, o'rdaklar yeb bitirgan edi."
      },
      {
            "id": "s46-q13",
            "order": 13,
            "question": "How did Mrs Brown's neighbor feel?",
            "modelAnswer": "Her neighbour was very sorry.",
            "keywords": [
                  "very sorry"
            ],
            "options": [
                  "The neighbour was very sorry",
                  "The neighbour laughed loudly",
                  "The neighbour blamed Mrs Brown",
                  "The neighbour demanded compensation"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qo'shnisi juda xijolat bo'ldi va uzr so'radi: 'was very sorry'."
      },
      {
            "id": "s46-q14",
            "order": 14,
            "question": "What happened a few days before Christmas?",
            "modelAnswer": "The neighbour brought Mrs Brown a parcel.",
            "keywords": [
                  "neighbour brought Mrs Brown a parcel"
            ],
            "options": [
                  "The neighbour brought Mrs Brown a parcel",
                  "The ducks laid golden eggs",
                  "Mrs Brown bought new seeds",
                  "The neighbour moved away"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Rojdestvodan bir necha kun oldin qo'shnisi unga posilka (tuguncha) keltirdi."
      },
      {
            "id": "s46-q15",
            "order": 15,
            "question": "What was in the parcel?",
            "modelAnswer": "In it was a beautiful, fat duck.",
            "keywords": [
                  "beautiful, fat duck"
            ],
            "options": [
                  "A beautiful, fat duck",
                  "A basket of fresh winter vegetables",
                  "A box of Christmas sweets",
                  "A pair of garden shears"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Tuguncha ichida go'zal, semiz o'rdak bor edi."
      },
      {
            "id": "s46-q16",
            "order": 16,
            "question": "What were the words on the piece of paper?",
            "modelAnswer": "The words were, 'Enjoy your vegetables!'",
            "keywords": [
                  "Enjoy your vegetables"
            ],
            "options": [
                  "'Enjoy your vegetables!'",
                  "'Merry Christmas to my dear neighbour!'",
                  "'Please forgive my hungry ducks.'",
                  "'With deepest sympathy.'"
            ],
            "correctOptionIndex": 0,
            "explanationUz": "Qog'ozda 'Sabzavotlaringiz yoqimli ishtaha!' deb yozilgan edi."
      }
],
    trueFalseQuestions: [
      {
            "id": "s46-tf1",
            "order": 1,
            "statement": "Mrs Brown planted a vegetable garden behind her house in spring.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'Mrs Brown had a small garden behind her house, and in the spring she planted some vegetables'."
      },
      {
            "id": "s46-tf2",
            "order": 2,
            "statement": "Mrs Brown harvested all her vegetables and sold them at the local market.",
            "correctAnswer": "False",
            "explanationUz": "Xato: U hosilni yig'ishga ulgurmadi, o'rdaklar yeb ketdi."
      },
      {
            "id": "s46-tf3",
            "order": 3,
            "statement": "The neighbour deliberately sent his ducks into the garden to destroy the crops.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Bu tasodifan bo'lgan va qo'shni juda afsuslangan ('her neighbour was very sorry')."
      },
      {
            "id": "s46-tf4",
            "order": 4,
            "statement": "Mrs Brown's son raised the alarm about the ducks.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: 'her son ran into the kitchen and shouted'."
      },
      {
            "id": "s46-tf5",
            "order": 5,
            "statement": "The Christmas gift was a live kitten in a wicker basket.",
            "correctAnswer": "False",
            "explanationUz": "Xato: Sovg'a qilingan narsa semiz o'rdak edi ('a beautiful, fat duck')."
      },
      {
            "id": "s46-tf6",
            "order": 6,
            "statement": "The note \"Enjoy your vegetables!\" humorously referred to the fact that the duck was fattened on her vegetables.",
            "correctAnswer": "True",
            "explanationUz": "To'g'ri: O'rdak ayolning sabzavotlarini yeb semirgani sababli 'sabzavotlaringizdan bahramand bo'ling' deb hazillashgan."
      }
]
  }
,

  // Story 47
  {
  id: "story-47",
  storyNumber: 47,
  title: "The Food Shortage and the Baby Problem",
  titleUz: "Oziq-ovqat tanqisligi va tug'ilish muammosi",
  cefrLevel: "A2",
  wordCount: 145,
  readingTimeMinutes: 1,
  storyText: "The ladies' club always had a meeting every Friday afternoon and someone came to talk to them about important things. After that, they had tea and asked questions.\nOne Friday, a gentleman came and talked to the club about food. 'There is not enough food in the world for everybody,' he said. 'More than half the people in the world are hungry. And when they get more food, they have more babies, so they never stop being hungry. Somewhere in the world, a woman is having a baby every minute, day and night. What are we going to do about it?'\nHe waited for a few seconds before he continued, but before he began to speak again, one of the ladies said, 'Well, why don't we find that woman and stop her?'",
  paragraphs: [
    "The ladies' club always had a meeting every Friday afternoon and someone came to talk to them about important things. After that, they had tea and asked questions.",
    "One Friday, a gentleman came and talked to the club about food. 'There is not enough food in the world for everybody,' he said. 'More than half the people in the world are hungry. And when they get more food, they have more babies, so they never stop being hungry. Somewhere in the world, a woman is having a baby every minute, day and night. What are we going to do about it?'",
    "He waited for a few seconds before he continued, but before he began to speak again, one of the ladies said, 'Well, why don't we find that woman and stop her?'"
  ],
  summaryUz: "Xotin-qizlar klubi har juma tushdan keyin yig'ilish o'tkazib, ma'ruzalar tinglar va choy ichardi. Bir kuni bir janob dunyodagi oziq-ovqat tanqisligi haqida gapirib: 'Dunyoda har daqiqada bir ayol farzand ko'rmoqda, bu muammo bo'yicha nima qilishimiz kerak?' deganida, ayollardan biri statistikani tushunmay: 'O'sha ayolni topib, to'xtatsak bo'lmaydimi?' deb kulgili taklif bildiradi.",
  vocabulary: [
    {
      word: "meeting",
      pos: "n.",
      phonetic: "[ˈmiːtɪŋ]",
      translationUz: "yig'ilish, majlis",
      definitionEn: "An assembly of people for discussion.",
      exampleSentence: "The club had a meeting every Friday afternoon."
    },
    {
      word: "important",
      pos: "adj.",
      phonetic: "[ɪmˈpɔːtnt]",
      translationUz: "muhim, ahamiyatli",
      definitionEn: "Of great significance or value.",
      exampleSentence: "Someone came to talk about important things."
    },
    {
      word: "hungry",
      pos: "adj.",
      phonetic: "[ˈhʌŋɡri]",
      translationUz: "och, och qolgan",
      definitionEn: "Feeling or showing the need for food.",
      exampleSentence: "More than half the people in the world are hungry."
    },
    {
      word: "gentleman",
      pos: "n.",
      phonetic: "[ˈdʒentlmən]",
      translationUz: "janob, hurmatli kishi",
      definitionEn: "A courteous or honourable man.",
      exampleSentence: "A gentleman came and talked to the club."
    },
    {
      word: "continue",
      pos: "v.",
      phonetic: "[kənˈtɪnjuː]",
      translationUz: "davom ettirmoq",
      definitionEn: "Persist in an activity or process.",
      exampleSentence: "He paused before he continued speaking."
    },
    {
      word: "somewhere",
      pos: "adv.",
      phonetic: "[ˈsʌmweə]",
      translationUz: "qayerdadir",
      definitionEn: "In or to some unspecified place.",
      exampleSentence: "Somewhere in the world, a child is born every minute."
    }
  ],
  reproductionOutline: [
    "The weekly Friday gatherings of the ladies' club with guest speakers and afternoon tea.",
    "A gentleman delivers a serious lecture concerning worldwide food shortages.",
    "He states that over half of humanity goes hungry, exacerbated by rapid population growth.",
    "He gives a vivid statistic: somewhere on Earth, a woman gives birth every single minute.",
    "He asks the ladies what action should be taken to solve the crisis.",
    "A lady misunderstands the general statistic literally, proposing to locate and restrain that single mother!"
  ],
  modelRetelling: "Every Friday afternoon, a local women's club convened to listen to guest speakers discuss significant global topics, followed by tea and a question session. On one particular Friday, a gentleman addressed the members on the subject of global malnutrition and food supply. He pointed out that more than half of the world's population suffered from hunger, and that higher food availability usually led to more births, perpetuating the cycle. To emphasize his point, he stated that somewhere in the world, a woman was having a baby every single minute, day and night, and asked what could be done about the situation. Before he could elaborate further, an innocent lady piped up with a humorous solution, suggesting they simply track down that prolific woman and make her stop!",
  questions: [
    {
      id: "s47-q1",
      order: 1,
      question: "What happened every Friday afternoon?",
      modelAnswer: "The ladies' club always had a meeting every Friday afternoon.",
      keywords: [
        "ladies' club",
        "meeting",
        "Friday afternoon"
      ],
      options: [
        "The ladies' club always had a meeting every Friday afternoon",
        "They went shopping together in town",
        "A doctor gave free medical check-ups",
        "They held a baking competition"
      ],
      correctOptionIndex: 0,
      explanationUz: "Matn boshida: 'The ladies' club always had a meeting every Friday afternoon'."
    },
    {
      id: "s47-q2",
      order: 2,
      question: "What happened at the meeting?",
      modelAnswer: "Someone came to talk to them about important things.",
      keywords: [
        "someone came to talk",
        "important things"
      ],
      options: [
        "Someone came to talk to them about important things",
        "They elected a new chairperson every week",
        "They practiced classical choir singing",
        "They raised funds for charity"
      ],
      correctOptionIndex: 0,
      explanationUz: "U yerda kimdir kelib muhim narsalar haqida gapirib berardi."
    },
    {
      id: "s47-q3",
      order: 3,
      question: "What happened after that?",
      modelAnswer: "After that, they had tea and asked questions.",
      keywords: [
        "had tea",
        "asked questions"
      ],
      options: [
        "After that, they had tea and asked questions",
        "They went home immediately",
        "They walked around the park",
        "They watched a documentary film"
      ],
      correctOptionIndex: 0,
      explanationUz: "Undan keyin ular choy ichib savollar berishardi."
    },
    {
      id: "s47-q4",
      order: 4,
      question: "What happened one Friday?",
      modelAnswer: "A gentleman came and talked to the club about food.",
      keywords: [
        "gentleman came",
        "talked to the club about food"
      ],
      options: [
        "A gentleman came and talked to the club about food",
        "The guest speaker failed to arrive",
        "They organized an afternoon picnic",
        "A chef demonstrated new recipes"
      ],
      correctOptionIndex: 0,
      explanationUz: "Jumalardan birida bir janob kelib oziq-ovqat haqida gapirdi."
    },
    {
      id: "s47-q5",
      order: 5,
      question: "What did the man say?",
      modelAnswer: "He said there was not enough food, more than half the people were hungry, and a woman had a baby every minute.",
      keywords: [
        "not enough food",
        "hungry",
        "baby every minute"
      ],
      options: [
        "He said there is not enough food, half of humanity is hungry, and a woman is having a baby every minute",
        "He said agricultural output had doubled globally",
        "He advised everyone to grow their own vegetables",
        "He announced free food distribution in the city"
      ],
      correctOptionIndex: 0,
      explanationUz: "U dunyoda oziq-ovqat yetishmasligi va har daqiqada bir ayol bola ko'rayotganini aytdi."
    },
    {
      id: "s47-q6",
      order: 6,
      question: "What question did he ask?",
      modelAnswer: "He asked, 'What are we going to do about it?'",
      keywords: [
        "What are we going to do about it"
      ],
      options: [
        "What are we going to do about it?",
        "How much food do you waste each week?",
        "Can anyone donate money today?",
        "Who wants to volunteer overseas?"
      ],
      correctOptionIndex: 0,
      explanationUz: "U 'What are we going to do about it?' deb savol berdi."
    },
    {
      id: "s47-q7",
      order: 7,
      question: "What did he do then?",
      modelAnswer: "He waited for a few seconds before he continued.",
      keywords: [
        "waited for a few seconds"
      ],
      options: [
        "He waited for a few seconds before he continued",
        "He took a sip of water and sat down",
        "He handed out survey questionnaires",
        "He displayed charts on the blackboard"
      ],
      correctOptionIndex: 0,
      explanationUz: "U davom ettirishdan oldin bir necha soniya kutib turdi."
    },
    {
      id: "s47-q8",
      order: 8,
      question: "What did one of the ladies say?",
      modelAnswer: "She said, 'Well, why don't we find that woman and stop her?'",
      keywords: [
        "find that woman and stop her"
      ],
      options: [
        "Well, why don't we find that woman and stop her?",
        "We should donate more grains to poor regions",
        "Governments must ration food supplies immediately",
        "The statistics must be completely incorrect"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ayollardan biri: 'O'sha ayolni topib to'xtatsak bo'lmaydimi?' deb aytadi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s47-tf1",
      order: 1,
      statement: "The ladies' club gathered on Friday afternoons.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Klub har juma tushdan keyin yig'ilar edi ('every Friday afternoon')."
    },
    {
      id: "s47-tf2",
      order: 2,
      statement: "The gentleman stated that world food supply was abundant for everyone.",
      correctAnswer: "False",
      explanationUz: "Xato: U oziq-ovqat yetarli emasligini aytdi ('There is not enough food in the world for everybody')."
    },
    {
      id: "s47-tf3",
      order: 3,
      statement: "According to the speaker, over half the world population suffered from hunger.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'More than half the people in the world are hungry' deyilgan."
    },
    {
      id: "s47-tf4",
      order: 4,
      statement: "The speaker was an agricultural scientist from Oxford.",
      correctAnswer: "Not Given",
      explanationUz: "Matnda uning kasbi yoki qayerdan kelgani aytilmagan."
    },
    {
      id: "s47-tf5",
      order: 5,
      statement: "One club member took the birth rate statistic as referring to a single specific person.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: U har daqiqada bitta ayol tug'moqda degan gapni bitta shaxs deb tushundi ('find that woman and stop her')."
    },
    {
      id: "s47-tf6",
      order: 6,
      statement: "The club members launched a charitable foundation after the meeting.",
      correctAnswer: "Not Given",
      explanationUz: "Yig'ilishdan keyin jamg'arma tuzilgani haqida hech narsa aytilmagan."
    }
  ]
},

  // Story 48
  {
  id: "story-48",
  storyNumber: 48,
  title: "The Word \"Love\" in the Telegram",
  titleUz: "Telegrammadagi \"Muhabbat\" so'zi",
  cefrLevel: "A2",
  wordCount: 168,
  readingTimeMinutes: 1,
  storyText: "A man had some work to do in Switzerland, so he said goodbye to his wife at the airport, got into an aeroplane and left.\nAfter ten days, his work in Switzerland was finished, so he bought a ticket for his journey back home, and then went to the post-office to send a telegram to his wife. He wrote the telegram, gave it to the clerk and said, 'How much will this cost?'\nShe told him, and he counted his Swiss money. He had not got quite enough.\n'Take the word \"love\" off my telegram,' he said, 'and then I will have enough money to pay for it.'\n'No,' the girl said. She opened her handbag, took the money for the word 'love' out of it and said, 'For the word \"love\", I will pay the money. Wives need that word from their husbands.'",
  paragraphs: [
    "A man had some work to do in Switzerland, so he said goodbye to his wife at the airport, got into an aeroplane and left.",
    "After ten days, his work in Switzerland was finished, so he bought a ticket for his journey back home, and then went to the post-office to send a telegram to his wife. He wrote the telegram, gave it to the clerk and said, 'How much will this cost?'",
    "She told him, and he counted his Swiss money. He had not got quite enough.",
    "'Take the word \"love\" off my telegram,' he said, 'and then I will have enough money to pay for it.'",
    "'No,' the girl said. She opened her handbag, took the money for the word 'love' out of it and said, 'For the word \"love\", I will pay the money. Wives need that word from their husbands.'"
  ],
  summaryUz: "Shveysariyadagi ishini yakunlagan kishi xotiniga telegramma yuborish uchun pochtaga kiradi. Telegramma narxi uning qolgan shveysar valyutasidan ozgina oshib ketgach, u tejash uchun 'love' (sevgi bilan) so'zini o'chirib tashlashni so'raydi. Lekin pochtachi qiz bunga yo'l qo'ymay, o'z hamyonidan yetmagan pulni to'lab beradi va xotinlar doim erlaridan bu so'zga muhtojligini aytadi.",
  vocabulary: [
    {
      word: "aeroplane",
      pos: "n.",
      phonetic: "[ˈeərəpleɪn]",
      translationUz: "samolyot",
      definitionEn: "A powered flying vehicle with fixed wings.",
      exampleSentence: "He got into an aeroplane and flew to Zurich."
    },
    {
      word: "journey",
      pos: "n.",
      phonetic: "[ˈdʒɜːni]",
      translationUz: "sayohat, safar",
      definitionEn: "An act of travelling from one place to another.",
      exampleSentence: "He bought a ticket for his journey back home."
    },
    {
      word: "telegram",
      pos: "n.",
      phonetic: "[ˈtelɪɡræm]",
      translationUz: "telegramma",
      definitionEn: "A message transmitted telegraphically.",
      exampleSentence: "He decided to send a telegram to his wife."
    },
    {
      word: "clerk",
      pos: "n.",
      phonetic: "[klɑːk]",
      translationUz: "xodim, kotib",
      definitionEn: "An employee dealing with mail, clerical work, or records.",
      exampleSentence: "He handed the sheet of paper to the post clerk."
    },
    {
      word: "count",
      pos: "v.",
      phonetic: "[kaʊnt]",
      translationUz: "sanamoq, hisoblamoq",
      definitionEn: "To determine the total number of items.",
      exampleSentence: "He counted his remaining Swiss banknotes."
    },
    {
      word: "handbag",
      pos: "n.",
      phonetic: "[ˈhændbæɡ]",
      translationUz: "sumka, ayollar sumkasi",
      definitionEn: "A bag carried by women for money and small articles.",
      exampleSentence: "She opened her handbag and paid the difference."
    }
  ],
  reproductionOutline: [
    "A man travels to Switzerland on business after bidding his wife farewell at the airport.",
    "Ten days later, with work concluded, he purchases a ticket home.",
    "He visits the post office to dispatch a telegram informing his wife.",
    "Upon hearing the price, he counts his Swiss francs and finds he is slightly short.",
    "To reduce the total cost, he tells the clerk to omit the word \"love\".",
    "The young woman clerk refuses, pulls money from her own purse, and pays for the word herself!"
  ],
  modelRetelling: "After flying out to Switzerland on a ten-day business assignment, a husband finished his work and bought a plane ticket for his journey back home. Before departing, he stopped at a local post office to send a telegram to his wife announcing his return. When the postal clerk calculated the total cost, the man counted his remaining Swiss francs and discovered that he fell slightly short of the required sum. In an attempt to cut costs, he asked the clerk to delete the final word, \"love\", from the message. However, the clerk firmly refused. Opening her personal handbag, she produced the necessary coins herself, declaring that all wives need to receive that heartfelt word from their husbands.",
  questions: [
    {
      id: "s48-q1",
      order: 1,
      question: "Why did the man in this story go to Switzerland?",
      modelAnswer: "He had some work to do in Switzerland.",
      keywords: [
        "some work to do in Switzerland"
      ],
      options: [
        "He had some work to do in Switzerland",
        "He went to ski in the Alps",
        "He was visiting his relatives",
        "He attended a medical conference"
      ],
      correctOptionIndex: 0,
      explanationUz: "U Shveysariyada bajarishi kerak bo'lgan ishlari uchun borgan edi."
    },
    {
      id: "s48-q2",
      order: 2,
      question: "What did he do at the airport?",
      modelAnswer: "He said goodbye to his wife, got into an aeroplane and left.",
      keywords: [
        "said goodbye to his wife",
        "aeroplane",
        "left"
      ],
      options: [
        "He said goodbye to his wife, got into an aeroplane and left",
        "He exchanged foreign currency",
        "He bought souvenirs for his family",
        "He missed his scheduled flight"
      ],
      correctOptionIndex: 0,
      explanationUz: "U aeroportda xotini bilan xayrlashib, samolyotga chiqib ketdi."
    },
    {
      id: "s48-q3",
      order: 3,
      question: "What happened after ten days?",
      modelAnswer: "After ten days, his work in Switzerland was finished.",
      keywords: [
        "work in Switzerland was finished"
      ],
      options: [
        "His work in Switzerland was finished",
        "His company extended his contract",
        "His wife flew over to join him",
        "He fell ill in his hotel"
      ],
      correctOptionIndex: 0,
      explanationUz: "O'n kundan keyin uning ishlari yakunlandi."
    },
    {
      id: "s48-q4",
      order: 4,
      question: "What did he do then?",
      modelAnswer: "He bought a ticket for his journey back home, and then went to the post-office.",
      keywords: [
        "bought a ticket",
        "journey back home",
        "post-office"
      ],
      options: [
        "He bought a ticket for his journey back home, and then went to the post-office",
        "He checked into a luxurious resort",
        "He rented a sports car",
        "He phoned his boss to resign"
      ],
      correctOptionIndex: 0,
      explanationUz: "U uyga qaytish chiptasini oldi va pochtaga bordi."
    },
    {
      id: "s48-q5",
      order: 5,
      question: "Why did he go to the post-office?",
      modelAnswer: "He went to the post-office to send a telegram to his wife.",
      keywords: [
        "send a telegram to his wife"
      ],
      options: [
        "To send a telegram to his wife",
        "To collect an official parcel",
        "To convert coins into notes",
        "To buy postage stamps for his collection"
      ],
      correctOptionIndex: 0,
      explanationUz: "Xotiniga telegramma yuborish uchun pochtaga bordi."
    },
    {
      id: "s48-q6",
      order: 6,
      question: "What did he do there?",
      modelAnswer: "He wrote the telegram, gave it to the clerk and asked how much it would cost.",
      keywords: [
        "wrote the telegram",
        "gave it to the clerk"
      ],
      options: [
        "He wrote the telegram and gave it to the clerk",
        "He called his home on an international phone",
        "He purchased envelopes and postcards",
        "He waited in a long queue"
      ],
      correctOptionIndex: 0,
      explanationUz: "U telegramma yozib, xodimga uzatdi."
    },
    {
      id: "s48-q7",
      order: 7,
      question: "What did he say to the clerk?",
      modelAnswer: "He said, 'How much will this cost?'",
      keywords: [
        "How much will this cost"
      ],
      options: [
        "How much will this cost?",
        "When will this message arrive?",
        "Can I pay in British pounds?",
        "Do you have special gift stationery?"
      ],
      correctOptionIndex: 0,
      explanationUz: "U 'How much will this cost?' (Bu qancha turadi?) deb so'radi."
    },
    {
      id: "s48-q8",
      order: 8,
      question: "What did she do?",
      modelAnswer: "She told him the cost.",
      keywords: [
        "told him the cost"
      ],
      options: [
        "She told him the cost",
        "She weighed his heavy luggage",
        "She rejected the handwritten slip",
        "She stamped his travel papers"
      ],
      correctOptionIndex: 0,
      explanationUz: "Xodim qiz unga telegramma narxini aytdi."
    },
    {
      id: "s48-q9",
      order: 9,
      question: "What did the man do then?",
      modelAnswer: "He counted his Swiss money.",
      keywords: [
        "counted his Swiss money"
      ],
      options: [
        "He counted his Swiss money",
        "He opened his briefcase",
        "He wrote an extra sentence",
        "He called his hotel reception"
      ],
      correctOptionIndex: 0,
      explanationUz: "U Shveysariya pullarini sanab ko'rdi."
    },
    {
      id: "s48-q10",
      order: 10,
      question: "Had he got enough money?",
      modelAnswer: "No, he had not got quite enough.",
      keywords: [
        "not got quite enough"
      ],
      options: [
        "No, he had not got quite enough",
        "Yes, he had plenty of money",
        "No, he had lost his wallet",
        "Yes, but in foreign banknotes"
      ],
      correctOptionIndex: 0,
      explanationUz: "Unda pul salgina yetmas edi ('He had not got quite enough')."
    },
    {
      id: "s48-q11",
      order: 11,
      question: "What did he say then?",
      modelAnswer: "He said, 'Take the word \"love\" off my telegram, and then I will have enough money to pay for it.'",
      keywords: [
        "Take the word love off my telegram"
      ],
      options: [
        "Take the word \"love\" off my telegram, and then I will have enough money to pay for it",
        "Please cancel the whole message",
        "Can you lend me five Swiss francs?",
        "I will come back when the banks open"
      ],
      correctOptionIndex: 0,
      explanationUz: "U telegrammadagi 'love' so'zini olib tashlashni so'radi."
    },
    {
      id: "s48-q12",
      order: 12,
      question: "What did the girl say?",
      modelAnswer: "The girl said, 'No.'",
      keywords: [
        "The girl said No"
      ],
      options: [
        "The girl said, 'No'",
        "The girl said, 'Certainly, sir'",
        "The girl said, 'That costs extra'",
        "The girl said, 'Rules are rules'"
      ],
      correctOptionIndex: 0,
      explanationUz: "Qiz rozi bo'lmay 'No' dedi."
    },
    {
      id: "s48-q13",
      order: 13,
      question: "What did she do?",
      modelAnswer: "She opened her handbag and took the money for the word 'love' out of it.",
      keywords: [
        "opened her handbag",
        "took the money"
      ],
      options: [
        "She opened her handbag and took the money for the word 'love' out of it",
        "She crumpled up the telegram",
        "She called the branch supervisor",
        "She offered him a cup of coffee"
      ],
      correctOptionIndex: 0,
      explanationUz: "U sumkasini ochib, 'love' so'zi uchun kerak bo'lgan pulni oldi."
    },
    {
      id: "s48-q14",
      order: 14,
      question: "What did she say then?",
      modelAnswer: "She said, 'For the word \"love\", I will pay the money. Wives need that word from their husbands.'",
      keywords: [
        "For the word love, I will pay the money",
        "Wives need that word"
      ],
      options: [
        "For the word \"love\", I will pay the money. Wives need that word from their husbands",
        "You must repay this at the border",
        "Swiss post offices do not allow deletions",
        "My own husband never sends me flowers"
      ],
      correctOptionIndex: 0,
      explanationUz: "U: 'Muhabbat so'zi uchun pulni o'zim to'layman, ayollar erlaridan bu so'zga muhtoj' deb aytdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s48-tf1",
      order: 1,
      statement: "The man spent ten days working in Switzerland.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Matnda 'After ten days, his work in Switzerland was finished' deyilgan."
    },
    {
      id: "s48-tf2",
      order: 2,
      statement: "The traveler did not have enough funds to buy his return plane ticket.",
      correctAnswer: "False",
      explanationUz: "Xato: U qaytish chiptasini sotib olgan edi ('bought a ticket for his journey back home')."
    },
    {
      id: "s48-tf3",
      order: 3,
      statement: "Telegram charges were based on the number of words transmitted.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Bitta so'zni o'chirish narxni pasaytirishi telegrammada har bir so'z pullik bo'lganini tasdiqlaydi."
    },
    {
      id: "s48-tf4",
      order: 4,
      statement: "The postal worker was married to an airline pilot.",
      correctAnswer: "Not Given",
      explanationUz: "Pochtachi qizning oilaviy holati haqida matnda hech qanday ma'lumot yo'q."
    },
    {
      id: "s48-tf5",
      order: 5,
      statement: "The female clerk paid for the missing amount out of her own pocket.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: U o'z sumkasidan pul chiqarib berdi ('took the money... out of it')."
    },
    {
      id: "s48-tf6",
      order: 6,
      statement: "The man refused the clerk's kindness and tore up his telegram.",
      correctAnswer: "False",
      explanationUz: "Xato: U telegrammani yirtmadi, qiz pulni to'lab xabarni jo'natishga yordam berdi."
    }
  ]
},

  // Story 49
  {
  id: "story-49",
  storyNumber: 49,
  title: "The Wrong Cinema Telephone Number",
  titleUz: "Kinoteatrning adashgan telefon raqami",
  cefrLevel: "A2",
  wordCount: 165,
  readingTimeMinutes: 1,
  storyText: "Mrs Jones's telephone number was 3463, and the number of the cinema in her town was 3464, so people often made a mistake and telephoned her when they wanted the cinema.\nOne evening the telephone bell rang and Mrs Jones answered it. A tired man said, 'At what time does your last film begin?'\n'I am sorry,' said Mrs Jones, 'but you have the wrong number. This is not the cinema.'\n'Oh, it began twenty minutes ago?' said the man. 'I am sorry about that. Goodbye.'\nMrs Jones was very surprised, so she told her husband.\nHe laughed and said, 'The man's wife wanted to go to the cinema, but he was feeling tired, so he telephoned the cinema. His wife heard him, but she didn't hear you. Now they will stay at home this evening, and the husband will be happy!'",
  paragraphs: [
    "Mrs Jones's telephone number was 3463, and the number of the cinema in her town was 3464, so people often made a mistake and telephoned her when they wanted the cinema.",
    "One evening the telephone bell rang and Mrs Jones answered it. A tired man said, 'At what time does your last film begin?'",
    "'I am sorry,' said Mrs Jones, 'but you have the wrong number. This is not the cinema.'\n'Oh, it began twenty minutes ago?' said the man. 'I am sorry about that. Goodbye.'",
    "Mrs Jones was very surprised, so she told her husband.",
    "He laughed and said, 'The man's wife wanted to go to the cinema, but he was feeling tired, so he telephoned the cinema. His wife heard him, but she didn't hear you. Now they will stay at home this evening, and the husband will be happy!'"
  ],
  summaryUz: "Mrs Jonesning telefon raqami (3463) bilan kinoteatr raqami (3464) deyarli bir xil bo'lgani uchun odamlar tez-tez adashib tushishardi. Bir oqshom toliqqan bir kishi qo'ng'iroq qilib, oxirgi seans vaqtini so'raydi. Mrs Jones xato raqam ekanini aytganda, kishi xotini eshitsin deb ataylab: 'A, yigirma daqiqa oldin boshlanib ketdimi? Kech qolibmiz, xayr' deydi. Buni eshitgan Jonesning eri kuladi: charchagan er kinoga bormaslik uchun shunday ayyorlik qilgan edi.",
  vocabulary: [
    {
      word: "cinema",
      pos: "n.",
      phonetic: "[ˈsɪnəmə]",
      translationUz: "kinoteatr",
      definitionEn: "A theatre where films are shown.",
      exampleSentence: "The number of the local cinema was 3464."
    },
    {
      word: "mistake",
      pos: "n.",
      phonetic: "[mɪˈsteɪk]",
      translationUz: "xato, yanglishish",
      definitionEn: "An act or judgement that is misguided or wrong.",
      exampleSentence: "People often made a mistake dialing her number."
    },
    {
      word: "tired",
      pos: "adj.",
      phonetic: "[ˈtaɪəd]",
      translationUz: "charchagan, toliqqan",
      definitionEn: "In need of sleep or rest; weary.",
      exampleSentence: "A tired man phoned to ask about the evening film."
    },
    {
      word: "wrong",
      pos: "adj.",
      phonetic: "[rɒŋ]",
      translationUz: "noto'g'ri, adashgan",
      definitionEn: "Not correct or true; mistaken.",
      exampleSentence: "I am sorry, but you dialed the wrong number."
    },
    {
      word: "surprised",
      pos: "adj.",
      phonetic: "[səˈpraɪzd]",
      translationUz: "hayron bo'lgan, taajjublangan",
      definitionEn: "Feeling astonishment at something unexpected.",
      exampleSentence: "Mrs Jones was surprised by the caller's strange reply."
    },
    {
      word: "laugh",
      pos: "v.",
      phonetic: "[lɑːf]",
      translationUz: "kulmoq",
      definitionEn: "Make spontaneous sounds showing amusement.",
      exampleSentence: "Her husband laughed at the man's clever excuse."
    }
  ],
  reproductionOutline: [
    "Similar numbers: Mrs Jones (3463) vs. cinema (3464) leads to frequent mix-ups.",
    "A tired gentleman dials Mrs Jones believing he has reached the cinema ticket office.",
    "He inquires when the final screening commences.",
    "Mrs Jones informs him that he has dialed the wrong number and this is not the cinema.",
    "The caller deliberately pretends to hear that the movie started 20 minutes earlier, hangs up quickly.",
    "Mr Jones explains the hilarious trick: the weary husband staged the call to escape a night out!"
  ],
  modelRetelling: "Due to an unfortunate similarity between phone numbers—Mrs Jones having 3463 and the local cinema holding 3464—strangers frequently phoned her house by mistake. One evening, an exhausted man rang her line to ask when the evening's final screening began. When Mrs Jones politely clarified that he had dialed the wrong number and had not reached the cinema, the caller unexpectedly replied, \"Oh, it began twenty minutes ago? I am sorry about that. Goodbye.\" Baffled by his response, Mrs Jones shared the encounter with her husband. Laughing heartily, Mr Jones deciphered the caller's ingenious plot: the man's wife had demanded a cinema outing, but the exhausted husband had simulated the telephone inquiry so his spouse would believe they had missed the show, thereby securing a restful evening at home.",
  questions: [
    {
      id: "s49-q1",
      order: 1,
      question: "What did people often do in this story?",
      modelAnswer: "People often made a mistake and telephoned Mrs Jones when they wanted the cinema.",
      keywords: [
        "made a mistake",
        "telephoned her",
        "wanted the cinema"
      ],
      options: [
        "People often dialed Mrs Jones by mistake when they wanted the cinema",
        "People knocked on her door seeking directions",
        "Delivery drivers brought packages to her address",
        "People complained about cinema ticket prices"
      ],
      correctOptionIndex: 0,
      explanationUz: "Odamlar kinoteatr deb o'ylab adashib Mrs Jonesga qo'ng'iroq qilishardi."
    },
    {
      id: "s49-q2",
      order: 2,
      question: "Why did they do this?",
      modelAnswer: "Because Mrs Jones's number was 3463, and the cinema's was 3464.",
      keywords: [
        "3463",
        "3464"
      ],
      options: [
        "Because Mrs Jones's number was 3463 and the cinema's was 3464",
        "Because her number was misprinted on movie posters",
        "Because she used to manage the ticket counter",
        "Because the cinema lines were completely broken"
      ],
      correctOptionIndex: 0,
      explanationUz: "Chunki raqamlar 3463 va 3464 bo'lib, faqat bitta songa farq qilardi."
    },
    {
      id: "s49-q3",
      order: 3,
      question: "What happened one evening?",
      modelAnswer: "The telephone bell rang and Mrs Jones answered it.",
      keywords: [
        "telephone bell rang",
        "Mrs Jones answered"
      ],
      options: [
        "The telephone bell rang and Mrs Jones answered it",
        "A cinema technician visited her house",
        "The telephone line went dead",
        "She watched a drama movie at home"
      ],
      correctOptionIndex: 0,
      explanationUz: "Bir oqshom telefon jiringladi va Mrs Jones go'shakni ko'tardi."
    },
    {
      id: "s49-q4",
      order: 4,
      question: "What did Mrs Jones do?",
      modelAnswer: "She answered the telephone.",
      keywords: [
        "answered the telephone"
      ],
      options: [
        "She answered the telephone",
        "She ignored the ringing sound",
        "She called her neighbor for assistance",
        "She unplugged the receiver"
      ],
      correctOptionIndex: 0,
      explanationUz: "U telefonga javob berdi."
    },
    {
      id: "s49-q5",
      order: 5,
      question: "Who spoke to her on the telephone?",
      modelAnswer: "A tired man spoke to her.",
      keywords: [
        "tired man"
      ],
      options: [
        "A tired man",
        "The cinema projectionist",
        "An upset young woman",
        "A small child"
      ],
      correctOptionIndex: 0,
      explanationUz: "Charchagan bir kishi gapirdi ('A tired man said')."
    },
    {
      id: "s49-q6",
      order: 6,
      question: "What did he say?",
      modelAnswer: "He said, 'At what time does your last film begin?'",
      keywords: [
        "At what time does your last film begin"
      ],
      options: [
        "At what time does your last film begin?",
        "Can you reserve two gallery tickets?",
        "Are children admitted to the thriller movie?",
        "Where is the cinema entrance situated?"
      ],
      correctOptionIndex: 0,
      explanationUz: "U: 'Oxirgi filmingiz soat nechada boshlanadi?' deb so'radi."
    },
    {
      id: "s49-q7",
      order: 7,
      question: "What did Mrs Jones answer?",
      modelAnswer: "She said, 'I am sorry, but you have the wrong number. This is not the cinema.'",
      keywords: [
        "wrong number",
        "not the cinema"
      ],
      options: [
        "I am sorry, but you have the wrong number. This is not the cinema",
        "The last film starts at quarter past nine",
        "All seats are completely sold out",
        "Please consult the evening paper"
      ],
      correctOptionIndex: 0,
      explanationUz: "U adashganini va bu kinoteatr emasligini aytdi."
    },
    {
      id: "s49-q8",
      order: 8,
      question: "What did the man say then?",
      modelAnswer: "He said, 'Oh, it began twenty minutes ago? I am sorry about that. Goodbye.'",
      keywords: [
        "began twenty minutes ago",
        "Goodbye"
      ],
      options: [
        "Oh, it began twenty minutes ago? I am sorry about that. Goodbye",
        "Excuse me for dialing the wrong line",
        "Could you check tomorrow's schedule?",
        "I will lodge an official complaint"
      ],
      correctOptionIndex: 0,
      explanationUz: "U: 'A, 20 daqiqa oldin boshlandimi? Afsus, xayr' dedi."
    },
    {
      id: "s49-q9",
      order: 9,
      question: "How did Mrs Jones feel?",
      modelAnswer: "Mrs Jones was very surprised.",
      keywords: [
        "very surprised"
      ],
      options: [
        "Mrs Jones was very surprised",
        "Mrs Jones was furious",
        "Mrs Jones was frightened",
        "Mrs Jones felt insulted"
      ],
      correctOptionIndex: 0,
      explanationUz: "Mrs Jones juda hayron qoldi ('Mrs Jones was very surprised')."
    },
    {
      id: "s49-q10",
      order: 10,
      question: "What did she do?",
      modelAnswer: "She told her husband.",
      keywords: [
        "told her husband"
      ],
      options: [
        "She told her husband",
        "She dialed the police department",
        "She disconnected the bell",
        "She wrote a memo to the telephone company"
      ],
      correctOptionIndex: 0,
      explanationUz: "U bu haqda eriga aytib berdi."
    },
    {
      id: "s49-q11",
      order: 11,
      question: "What did her husband do?",
      modelAnswer: "He laughed.",
      keywords: [
        "laughed"
      ],
      options: [
        "He laughed",
        "He lost his temper",
        "He picked up the receiver to call back",
        "He told her to stop picking up unknown calls"
      ],
      correctOptionIndex: 0,
      explanationUz: "Eri kulib yubordi ('He laughed')."
    },
    {
      id: "s49-q12",
      order: 12,
      question: "What did he say?",
      modelAnswer: "He explained that the man pretended the film had started so his wife would stay home with him.",
      keywords: [
        "man's wife",
        "stay at home",
        "husband will be happy"
      ],
      options: [
        "He explained that the tired husband pretended the movie had already started so they would stay home",
        "He thought the caller was a drunken stranger playing jokes",
        "He advised changing their home number next week",
        "He suggested that they go to the cinema themselves"
      ],
      correctOptionIndex: 0,
      explanationUz: "Eri charchagan erkak kinoga bormaslik uchun ataylab shunday bahona qilganini tushuntirdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s49-tf1",
      order: 1,
      statement: "Mrs Jones's telephone number was 3463.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Matnda 'Mrs Jones's telephone number was 3463' deyilgan."
    },
    {
      id: "s49-tf2",
      order: 2,
      statement: "The cinema was closed down due to renovations.",
      correctAnswer: "False",
      explanationUz: "Xato: Kinoteatr ishlab turgan, faqat telefon raqami 3464 bo'lgan."
    },
    {
      id: "s49-tf3",
      order: 3,
      statement: "The caller truly believed he was talking to cinema personnel at the end.",
      correctAnswer: "False",
      explanationUz: "Xato: U adashganini bildi, lekin xotini eshitsin deb bila turib shunday javob qaytardi."
    },
    {
      id: "s49-tf4",
      order: 4,
      statement: "The caller's wife was eager to go out to the movies.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'The man's wife wanted to go to the cinema' deyilgan."
    },
    {
      id: "s49-tf5",
      order: 5,
      statement: "Mrs Jones charged callers a fee for providing cinema information.",
      correctAnswer: "False",
      explanationUz: "Xato: U hech qanday haq olmagan, adashganlarini aytgan xolos."
    },
    {
      id: "s49-tf6",
      order: 6,
      statement: "Mr Jones found the caller's excuse amusing and clever.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: U kulib hiylani tushuntirib berdi ('He laughed and said...')."
    }
  ]
},

  // Story 50
  {
  id: "story-50",
  storyNumber: 50,
  title: "Missing the Last Train on Purpose",
  titleUz: "So'nggi poyezdni ataylab o'tkazib yuborish",
  cefrLevel: "A2",
  wordCount: 156,
  readingTimeMinutes: 1,
  storyText: "It was a few days before Christmas, so when the office closed at half past five, most of the young men and typists stayed and had a party. They ate and drank, danced and sang songs, and nobody wanted to go home.\nBut Joe had a wife at home, and lived quite a long way from the city. Every few minutes he looked at his watch, and at last, when it was very late, he began to leave.\n'Joe!' shouted his friends. 'Are you leaving? Why don't you stay and enjoy the party?'\n'I am not leaving,' said Joe. 'I am only going down to the station to miss the last train back home. I will be back here in a few minutes.'",
  paragraphs: [
    "It was a few days before Christmas, so when the office closed at half past five, most of the young men and typists stayed and had a party. They ate and drank, danced and sang songs, and nobody wanted to go home.",
    "But Joe had a wife at home, and lived quite a long way from the city. Every few minutes he looked at his watch, and at last, when it was very late, he began to leave.",
    "'Joe!' shouted his friends. 'Are you leaving? Why don't you stay and enjoy the party?'",
    "'I am not leaving,' said Joe. 'I am only going down to the station to miss the last train back home. I will be back here in a few minutes.'"
  ],
  summaryUz: "Rojdestvo arafasida ofis yopilgach, xodimlar bayramona bazm uyushtirib vaqtichog'lik qilishadi. Joe shahardan olisda yashasa va uni uyda xotini kutsa ham, bazmni tark etgisi kelmaydi. Kech tushganda u kiyinib yo'lga chiqadi. Do'stlari nega ketayotganini so'raganida, u uyga olib boradigan oxirgi poyezdni ataylab o'tkazib yuborish uchun stansiyaga borayotganini va bir necha daqiqadan so'ng ziyofatga qaytib kelishini aytadi.",
  vocabulary: [
    {
      word: "typist",
      pos: "n.",
      phonetic: "[ˈtaɪpɪst]",
      translationUz: "mashinistka, matn teruvchi",
      definitionEn: "A person who types documents.",
      exampleSentence: "Most of the young clerks and typists stayed behind."
    },
    {
      word: "party",
      pos: "n.",
      phonetic: "[ˈpɑːti]",
      translationUz: "bazm, kecha",
      definitionEn: "A social gathering for celebration.",
      exampleSentence: "They stayed at the office and had a lively party."
    },
    {
      word: "station",
      pos: "n.",
      phonetic: "[ˈsteɪʃn]",
      translationUz: "vokzal, stansiya",
      definitionEn: "A stopping place for trains.",
      exampleSentence: "Joe walked towards the central railway station."
    },
    {
      word: "miss",
      pos: "v.",
      phonetic: "[mɪs]",
      translationUz: "o'tkazib yubormoq, kechikmoq",
      definitionEn: "To arrive too late for a train or bus.",
      exampleSentence: "He went to miss the last train back home."
    },
    {
      word: "watch",
      pos: "n.",
      phonetic: "[wɒtʃ]",
      translationUz: "qo'l soati",
      definitionEn: "A small portable timepiece.",
      exampleSentence: "Every few minutes Joe looked down at his watch."
    },
    {
      word: "shout",
      pos: "v.",
      phonetic: "[ʃaʊt]",
      translationUz: "baqirmoq, chaqirmoq",
      definitionEn: "To utter words loudly.",
      exampleSentence: "His friends shouted when they saw him head for the door."
    }
  ],
  reproductionOutline: [
    "Pre-Christmas celebration in an office building after 5:30 closing time.",
    "Staff members eating, drinking, dancing, and singing well into the night.",
    "Joe's dilemma: a distant home in the country and a waiting wife.",
    "Joe repeatedly inspects his wristwatch as the hours advance.",
    "Joe finally stands up to exit late at night, triggering protests from colleagues.",
    "Joe's comical plan: heading to the railway station purely to miss the final train, allowing him to party on!"
  ],
  modelRetelling: "A few days prior to Christmas, employees at a city office stayed behind after the 5:30 closing bell to throw a merry holiday party. Everyone danced, sang, and ate with no desire to go home early. One employee, Joe, resided far out of town and had a wife awaiting him. Conscious of the time, Joe nervously glanced at his watch every few minutes until the night grew very late. When he finally stood up and prepared to leave, his coworkers called out, urging him not to depart so prematurely. Joe grinned and reassured them that he wasn't going home at all; he was merely strolling to the railway platform to intentionally miss the night's final commuter train, promising to return in minutes to keep partying without further worries.",
  questions: [
    {
      id: "s50-q1",
      order: 1,
      question: "When did this story happen?",
      modelAnswer: "It happened a few days before Christmas.",
      keywords: [
        "a few days before Christmas"
      ],
      options: [
        "A few days before Christmas",
        "On New Year's Eve",
        "During the Easter holidays",
        "On the first day of summer vacation"
      ],
      correctOptionIndex: 0,
      explanationUz: "Matn boshida: 'It was a few days before Christmas'."
    },
    {
      id: "s50-q2",
      order: 2,
      question: "What happened at half past five?",
      modelAnswer: "The office closed at half past five.",
      keywords: [
        "office closed at half past five"
      ],
      options: [
        "The office closed at half past five",
        "A fire alarm sounded in the building",
        "The company CEO delivered bonuses",
        "The electricity went off completely"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ofis soat 5:30 da yopildi."
    },
    {
      id: "s50-q3",
      order: 3,
      question: "What happened after that?",
      modelAnswer: "Most of the young men and typists stayed and had a party.",
      keywords: [
        "stayed and had a party"
      ],
      options: [
        "Most of the young men and typists stayed and had a party",
        "Everyone immediately caught their buses home",
        "They attended an evening religious service",
        "They went to a nearby pub"
      ],
      correctOptionIndex: 0,
      explanationUz: "Xodimlar qolib ofisda bazm o'tkazishdi."
    },
    {
      id: "s50-q4",
      order: 4,
      question: "What did the people do?",
      modelAnswer: "They ate and drank, danced and sang songs.",
      keywords: [
        "ate and drank",
        "danced and sang songs"
      ],
      options: [
        "They ate and drank, danced and sang songs",
        "They prepared financial audits for next year",
        "They tidied up the filing cabinets",
        "They watched a film projection"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ular yeb-ichishdi, raqsga tushishdi va qo'shiq aytishdi."
    },
    {
      id: "s50-q5",
      order: 5,
      question: "What did they not want to do?",
      modelAnswer: "Nobody wanted to go home.",
      keywords: [
        "nobody wanted to go home"
      ],
      options: [
        "Nobody wanted to go home",
        "Nobody wanted to dance",
        "Nobody wanted to eat snacks",
        "Nobody wanted to drink punch"
      ],
      correctOptionIndex: 0,
      explanationUz: "Hech kim uyga ketishni istamasdi ('nobody wanted to go home')."
    },
    {
      id: "s50-q6",
      order: 6,
      question: "Where did Joe live?",
      modelAnswer: "He lived quite a long way from the city.",
      keywords: [
        "quite a long way from the city"
      ],
      options: [
        "Quite a long way from the city",
        "In an apartment above the office",
        "Two blocks away from the station",
        "In a quiet street near the central park"
      ],
      correctOptionIndex: 0,
      explanationUz: "Joe shahardan ancha uzoqda yashardi."
    },
    {
      id: "s50-q7",
      order: 7,
      question: "What did he have at home?",
      modelAnswer: "Joe had a wife at home.",
      keywords: [
        "wife at home"
      ],
      options: [
        "Joe had a wife at home",
        "He had two pet dogs",
        "He had elderly relatives needing care",
        "He had young children waiting for dinner"
      ],
      correctOptionIndex: 0,
      explanationUz: "Uning uyda xotini bor edi ('Joe had a wife at home')."
    },
    {
      id: "s50-q8",
      order: 8,
      question: "What did he do every few minutes?",
      modelAnswer: "Every few minutes he looked at his watch.",
      keywords: [
        "looked at his watch"
      ],
      options: [
        "Every few minutes he looked at his watch",
        "He dialed his home phone number",
        "He requested another dance song",
        "He refilled his wine goblet"
      ],
      correctOptionIndex: 0,
      explanationUz: "U har bir necha daqiqada soatiga qarab turdi."
    },
    {
      id: "s50-q9",
      order: 9,
      question: "What did he do at last?",
      modelAnswer: "He began to leave.",
      keywords: [
        "began to leave"
      ],
      options: [
        "He began to leave",
        "He fell asleep on his desk",
        "He gave a farewell speech to the team",
        "He put on music on the gramophone"
      ],
      correctOptionIndex: 0,
      explanationUz: "Nihoyat, u keta boshladi ('he began to leave')."
    },
    {
      id: "s50-q10",
      order: 10,
      question: "When did he do this?",
      modelAnswer: "He did this when it was very late.",
      keywords: [
        "when it was very late"
      ],
      options: [
        "When it was very late",
        "At precisely six o'clock",
        "Right after dinner was served",
        "Early on Christmas morning"
      ],
      correctOptionIndex: 0,
      explanationUz: "U juda kech bo'lganda yo'lga tushdi ('when it was very late')."
    },
    {
      id: "s50-q11",
      order: 11,
      question: "What did his friends shout?",
      modelAnswer: "They shouted, 'Joe! Are you leaving? Why don't you stay and enjoy the party?'",
      keywords: [
        "Are you leaving",
        "enjoy the party"
      ],
      options: [
        "Joe! Are you leaving? Why don't you stay and enjoy the party?",
        "Hurry or the snow will block the roads!",
        "Don't forget your Christmas parcel!",
        "Call us when you get home safely!"
      ],
      correctOptionIndex: 0,
      explanationUz: "Do'stlari unga nega ketayotganini va qolib rohatlanishini aytib baqirishdi."
    },
    {
      id: "s50-q12",
      order: 12,
      question: "What was Joe's answer?",
      modelAnswer: "He said he was only going to the station to miss the last train home, and would be back in a few minutes.",
      keywords: [
        "miss the last train back home",
        "back here in a few minutes"
      ],
      options: [
        "He said he was going to intentionally miss the last train so he could return and keep partying",
        "He said his wife ordered him to return before midnight",
        "He said he was exhausted and needed immediate rest",
        "He said he had to catch a commuter bus instead"
      ],
      correctOptionIndex: 0,
      explanationUz: "U oxirgi poyezdni ataylab o'tkazib yuborish uchun stansiyaga ketayotganini aytdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s50-tf1",
      order: 1,
      statement: "The celebration took place in the office right before Christmas.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Matnda 'It was a few days before Christmas... had a party' deyilgan."
    },
    {
      id: "s50-tf2",
      order: 2,
      statement: "Joe lived in an apartment next door to the office.",
      correctAnswer: "False",
      explanationUz: "Xato: U shahardan ancha uzoqda yashardi ('quite a long way from the city')."
    },
    {
      id: "s50-tf3",
      order: 3,
      statement: "Joe repeatedly glanced at his wristwatch during the celebration.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'Every few minutes he looked at his watch' deb keltirilgan."
    },
    {
      id: "s50-tf4",
      order: 4,
      statement: "Joe's wife attended the party together with him.",
      correctAnswer: "False",
      explanationUz: "Xato: Xotini uyda edi ('Joe had a wife at home')."
    },
    {
      id: "s50-tf5",
      order: 5,
      statement: "Joe planned to deliberately miss his train to justify staying out late.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: U so'nggi poyezdni ataylab o'tkazib yuborish uchun ketayotganini aytdi."
    },
    {
      id: "s50-tf6",
      order: 6,
      statement: "Joe missed the train and had to sleep on a bench at the station.",
      correctAnswer: "Not Given",
      explanationUz: "U qayerda tunagani haqida matnda hech narsa deyilmagan."
    }
  ]
},

  // Story 51
  {
  id: "story-51",
  storyNumber: 51,
  title: "She Is Looking for Me",
  titleUz: "U meni qidiryapti",
  cefrLevel: "A2",
  wordCount: 160,
  readingTimeMinutes: 1,
  storyText: "Mr Jones and Mr Brown worked in the same office.\nOne day Mr Jones said to Mr Brown, 'We are going to have a small party at our house next Wednesday evening. Will you and your wife come?'\nMr Brown said, 'Thank you very much. That is very kind of you. We are free that evening, I think, but I will telephone my wife and ask her. Perhaps she wants to go somewhere that evening.'\nSo Mr Brown went to the other room and telephoned. When he came back, he looked very surprised.\n'What is the matter?' said Mr Jones. 'Did you speak to your wife?'\n'No,' answered Mr Brown. 'She wasn't there. My small son answered the telephone. I said to him, \"Is your mother there, David?\" and he answered, \"No, she is not in the house\". \"Where is she then?\" I asked.\n\"She is somewhere outside\".\n\"What is she doing?\"\n\"She is looking for me\".'",
  paragraphs: [
    "Mr Jones and Mr Brown worked in the same office.",
    "One day Mr Jones said to Mr Brown, 'We are going to have a small party at our house next Wednesday evening. Will you and your wife come?'",
    "Mr Brown said, 'Thank you very much. That is very kind of you. We are free that evening, I think, but I will telephone my wife and ask her. Perhaps she wants to go somewhere that evening.'",
    "So Mr Brown went to the other room and telephoned. When he came back, he looked very surprised.",
    "'What is the matter?' said Mr Jones. 'Did you speak to your wife?'\n'No,' answered Mr Brown. 'She wasn't there. My small son answered the telephone. I said to him, \"Is your mother there, David?\" and he answered, \"No, she is not in the house\". \"Where is she then?\" I asked.\n\"She is somewhere outside\".\n\"What is she doing?\"\n\"She is looking for me\".'"
  ],
  summaryUz: "Mr Jones va Mr Brown bir ofisda ishlashardi. Jones Brownni va uning rafiqasini kelasi chorshanba oqshomidagi mehmondorchilikka taklif qiladi. Brown xotinining rejalarini bilish uchun uyiga qo'ng'iroq qiladi. Biroq qaytib kelgach, uning yuzi juda taajjublangan edi. Jones nima bo'lganini so'raganida, Brown uyda kichik o'g'li Devid go'shakni olganini, onasi esa ayni paytda ko'chada bolani qidirib yurganini aytadi.",
  vocabulary: [
    {
      word: "office",
      pos: "n.",
      phonetic: "[ˈɒfɪs]",
      translationUz: "idora, ofis",
      definitionEn: "A workplace for commercial or administrative tasks.",
      exampleSentence: "They worked together in the same commercial office."
    },
    {
      word: "free",
      pos: "adj.",
      phonetic: "[friː]",
      translationUz: "bo'sh, band bo'lmagan",
      definitionEn: "Not occupied or engaged with plans.",
      exampleSentence: "We are completely free next Wednesday evening."
    },
    {
      word: "perhaps",
      pos: "adv.",
      phonetic: "[pəˈhæps]",
      translationUz: "ehtimol, balki",
      definitionEn: "Used to indicate uncertainty.",
      exampleSentence: "Perhaps she wants to visit her sister that evening."
    },
    {
      word: "matter",
      pos: "n.",
      phonetic: "[ˈmætə]",
      translationUz: "holat, masala",
      definitionEn: "A situation under consideration or a trouble.",
      exampleSentence: "'What is the matter?' asked his surprised colleague."
    },
    {
      word: "answer",
      pos: "v.",
      phonetic: "[ˈɑːnsə]",
      translationUz: "javob bermoq",
      definitionEn: "To respond to a call or inquiry.",
      exampleSentence: "His young son answered the telephone."
    },
    {
      word: "look for",
      pos: "phr. v.",
      phonetic: "[lʊk fɔː]",
      translationUz: "qidirmoq, izlamoq",
      definitionEn: "To search for someone or something.",
      exampleSentence: "She is out on the street looking for our son."
    }
  ],
  reproductionOutline: [
    "Two office colleagues: Mr Jones invites Mr Brown and his spouse to a dinner party next Wednesday.",
    "Mr Brown welcomes the invitation but wishes to check his wife's calendar first.",
    "Mr Brown steps into another room to make a phone call to his home.",
    "He re-enters the office displaying absolute astonishment on his face.",
    "Mr Jones inquires whether he reached his wife on the line.",
    "Brown relates the bizarre telephone conversation with his little son David: mom is outside desperately searching for David!"
  ],
  modelRetelling: "Colleagues Mr Jones and Mr Brown shared an office. One day, Jones invited Brown and his wife to an intimate party hosted at his home the upcoming Wednesday night. Brown thanked him gratefully, believing they had no prior commitments, but decided to telephone his home from an adjacent office room to confirm with his wife. When Brown reappeared, he wore a look of utter amazement. Jones asked if he had managed to speak to his spouse, but Brown confessed that only his young son David had picked up. When Brown had inquired after his mother's whereabouts, David innocently explained that she was outside in the neighborhood—feverishly looking for him!",
  questions: [
    {
      id: "s51-q1",
      order: 1,
      question: "Where did Mr Jones and Mr Brown work?",
      modelAnswer: "Mr Jones and Mr Brown worked in the same office.",
      keywords: [
        "worked in the same office"
      ],
      options: [
        "In the same office",
        "In a shipping harbor",
        "At a suburban primary school",
        "In a regional hospital"
      ],
      correctOptionIndex: 0,
      explanationUz: "Matn boshida: 'Mr Jones and Mr Brown worked in the same office'."
    },
    {
      id: "s51-q2",
      order: 2,
      question: "What did Mr Jones say to Mr Brown one day?",
      modelAnswer: "He invited Mr Brown and his wife to a small party at their house next Wednesday evening.",
      keywords: [
        "small party",
        "house",
        "next Wednesday evening"
      ],
      options: [
        "He invited Mr Brown and his wife to a party next Wednesday evening",
        "He asked Mr Brown to work overtime on Saturday",
        "He invited him to play badminton at the club",
        "He offered him a promotion to department chief"
      ],
      correctOptionIndex: 0,
      explanationUz: "U Brown va uning xotinini kelasi chorshanba kechqurungi bazmga taklif qildi."
    },
    {
      id: "s51-q3",
      order: 3,
      question: "What did Mr Brown answer?",
      modelAnswer: "He thanked him, said they were free, but wanted to telephone his wife to ask her first.",
      keywords: [
        "telephone my wife and ask her"
      ],
      options: [
        "He thanked him, believed they were free, but wanted to phone his wife first",
        "He flatly declined the invitation due to illness",
        "He accepted immediately without consulting his spouse",
        "He suggested having the party at a restaurant instead"
      ],
      correctOptionIndex: 0,
      explanationUz: "U minnatdorchilik bildirib, avval xotinidan so'rab olishini aytdi."
    },
    {
      id: "s51-q4",
      order: 4,
      question: "What did he do then?",
      modelAnswer: "He went to the other room and telephoned.",
      keywords: [
        "went to the other room and telephoned"
      ],
      options: [
        "He went to the other room and telephoned",
        "He wrote a brief letter to his wife",
        "He left the office early to drive home",
        "He booked a taxi for next Wednesday"
      ],
      correctOptionIndex: 0,
      explanationUz: "U boshqa xonaga o'tib telefon qildi."
    },
    {
      id: "s51-q5",
      order: 5,
      question: "How did he look when he came back?",
      modelAnswer: "When he came back, he looked very surprised.",
      keywords: [
        "looked very surprised"
      ],
      options: [
        "He looked very surprised",
        "He looked thrilled and cheerful",
        "He looked terrified and pale",
        "He looked annoyed with his friend"
      ],
      correctOptionIndex: 0,
      explanationUz: "U qaytib kelganda juda taajjublangan edi ('looked very surprised')."
    },
    {
      id: "s51-q6",
      order: 6,
      question: "What did Mr Jones say to him?",
      modelAnswer: "Mr Jones said, 'What is the matter? Did you speak to your wife?'",
      keywords: [
        "What is the matter",
        "Did you speak to your wife"
      ],
      options: [
        "What is the matter? Did you speak to your wife?",
        "Did she agree to bring an apple pie?",
        "Is the telephone out of service today?",
        "Why did you stay on the phone for so long?"
      ],
      correctOptionIndex: 0,
      explanationUz: "Jones: 'Nima bo'ldi? Xotining bilan gaplashdingmi?' deb so'radi."
    },
    {
      id: "s51-q7",
      order: 7,
      question: "What was Mr Brown's answer?",
      modelAnswer: "He said his little son David answered, and said his mother was outside looking for him.",
      keywords: [
        "small son",
        "David",
        "looking for me"
      ],
      options: [
        "He said his small son answered and reported that his mother was outside looking for him",
        "He said his wife was indisposed and unable to talk",
        "He said the house line kept ringing without answer",
        "He said a burglar picked up the handset"
      ],
      correctOptionIndex: 0,
      explanationUz: "U kichik o'g'li David go'shakni olgani va onasi ko'chada uni qidirib yurganini aytganini aytdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s51-tf1",
      order: 1,
      statement: "Mr Jones and Mr Brown shared an office.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'Mr Jones and Mr Brown worked in the same office' deyilgan."
    },
    {
      id: "s51-tf2",
      order: 2,
      statement: "The gathering was scheduled for a Saturday afternoon.",
      correctAnswer: "False",
      explanationUz: "Xato: U chorshanba oqshomiga rejalashtirilgan edi ('next Wednesday evening')."
    },
    {
      id: "s51-tf3",
      order: 3,
      statement: "Mr Brown was confident that they had no conflicting engagements.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'We are free that evening, I think' deb aytgan."
    },
    {
      id: "s51-tf4",
      order: 4,
      statement: "David was Mr Brown's eldest teenage son.",
      correctAnswer: "False",
      explanationUz: "Xato: Matnda 'My small son' (kichik o'g'lim) deyilgan."
    },
    {
      id: "s51-tf5",
      order: 5,
      statement: "The mother was searching outside for the very child answering the call.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Bola 'She is looking for me' (U meni qidiryapti) deb javob berdi."
    },
    {
      id: "s51-tf6",
      order: 6,
      statement: "Mr Brown rushed home immediately in a panic.",
      correctAnswer: "Not Given",
      explanationUz: "Matnda uning uyga shoshib ketgani haqida hech qanday ma'lumot berilmagan."
    }
  ]
},

  // Story 52
  {
  id: "story-52",
  storyNumber: 52,
  title: "The Post-Office Box Key Inside the Box",
  titleUz: "Qutining ichiga solib qo'yilgan kalit",
  cefrLevel: "A2",
  wordCount: 154,
  readingTimeMinutes: 1,
  storyText: "When you have a post-office box, the postman does not bring letters to you, but you go to the post-office and get your letters and parcels from your box. The box is locked, and you have the key, so the letters are quite safe.\nOne day, the headmaster of a school wrote to the post-office and asked for a post-office box for his school. He soon got an answer. It said, 'We will give you a post-box in one month.'\nThree months later, the headmaster wrote to the post-office again and said, 'Why haven't we got a post-office box yet?'\nThis was the answer from the post-office:\n'Dear Sir,\nWe gave you a post-office box two months ago and wrote to you then to tell you. Here is the key to your box. You will find our letter to you in it.'",
  paragraphs: [
    "When you have a post-office box, the postman does not bring letters to you, but you go to the post-office and get your letters and parcels from your box. The box is locked, and you have the key, so the letters are quite safe.",
    "One day, the headmaster of a school wrote to the post-office and asked for a post-office box for his school. He soon got an answer. It said, 'We will give you a post-box in one month.'",
    "Three months later, the headmaster wrote to the post-office again and said, 'Why haven't we got a post-office box yet?'",
    "This was the answer from the post-office:\n'Dear Sir,\nWe gave you a post-office box two months ago and wrote to you then to tell you. Here is the key to your box. You will find our letter to you in it.'"
  ],
  summaryUz: "Pochta qutisiga (abonent qutisi) ega bo'lgan kishi maktublarini pochta binosidagi maxsus qulflanadigan qutisidan oladi. Bir maktab direktori maktab uchun shunday quti so'rab ariza beradi va bir oyda tayyor bo'lishi aytiladi. Uch oydan so'ng direktor quti nega berilmagani haqida so'rab xat yozadi. Pochtadan esa kulgili javob keladi: 'Biz sizga ikki oy oldin quti ochib xat yozgan edik. Mana qutingiz kaliti, o'sha xatimizni ham qutining ichidan topasiz!'",
  vocabulary: [
    {
      word: "post-office box",
      pos: "n.",
      phonetic: "[ˌpəʊst ˈɒfɪs bɒks]",
      translationUz: "abonent pochta qutisi",
      definitionEn: "A uniquely addressable lockable box at a post office.",
      exampleSentence: "You can collect your mail directly from your post-office box."
    },
    {
      word: "headmaster",
      pos: "n.",
      phonetic: "[ˌhedˈmɑːstə]",
      translationUz: "maktab direktori",
      definitionEn: "The principal of a school.",
      exampleSentence: "The headmaster requested a dedicated postal box for the school."
    },
    {
      word: "safe",
      pos: "adj.",
      phonetic: "[seɪf]",
      translationUz: "xavfsiz, bexatar",
      definitionEn: "Protected from danger or risk.",
      exampleSentence: "Letters in a locked box are completely safe."
    },
    {
      word: "parcel",
      pos: "n.",
      phonetic: "[ˈpɑːsl]",
      translationUz: "posilka, tuguncha",
      definitionEn: "An object or collection wrapped in paper for postal delivery.",
      exampleSentence: "He collected several letters and small parcels."
    },
    {
      word: "lock",
      pos: "v.",
      phonetic: "[lɒk]",
      translationUz: "qulflamoq, qulflanmoq",
      definitionEn: "To fasten or secure with a lock.",
      exampleSentence: "The box is locked securely with a metal key."
    },
    {
      word: "key",
      pos: "n.",
      phonetic: "[kiː]",
      translationUz: "kalit",
      definitionEn: "An instrument used for locking and unlocking.",
      exampleSentence: "Here is the metal key to your private post-box."
    }
  ],
  reproductionOutline: [
    "How post-office boxes work: mail is picked up securely from a locked box using a key.",
    "A school headmaster submits an application requesting a box for his institution.",
    "The postal authorities promise to assign a box within one month.",
    "Three months elapse with zero communication; the headmaster writes an inquiry letter.",
    "The post office provides an absurd bureaucratic reply: the box was ready two months ago, and the notification letter was placed inside the locked box with the key now enclosed!"
  ],
  modelRetelling: "When someone rents a post-office box, mail is not delivered directly by the postman; instead, the recipient travels to the branch and unlocks their private box using a key, ensuring that letters and parcels remain thoroughly protected. One day, a school headmaster requested a post-office box for his educational institution, and received a written assurance stating it would be made available within one month. However, after three months passed without any news, the headmaster sent a follow-up inquiry asking why the service had still not been provided. The postal management replied with comical bureaucratic circularity: they revealed that the box had actually been assigned two months earlier, enclosing the physical key with a note stating that their original confirmation letter was locked inside the box!",
  questions: [
    {
      id: "s52-q1",
      order: 1,
      question: "What happens when you have a post-office box?",
      modelAnswer: "The postman does not bring letters to you, but you go to the post-office and get your letters and parcels from your box.",
      keywords: [
        "postman does not bring letters",
        "go to the post-office",
        "get letters and parcels"
      ],
      options: [
        "The postman does not bring letters to you; you go to the post-office to collect them from your box",
        "Letters are delivered by express courier to your front doorstep",
        "You must pay an extra delivery fee for every individual postcard",
        "Letters are scanned and transmitted electronically"
      ],
      correctOptionIndex: 0,
      explanationUz: "Pochtachi xatlarni uyingizga olib kelmaydi, o'zingiz pochtaga borib qutingizdan olasiz."
    },
    {
      id: "s52-q2",
      order: 2,
      question: "Why are the letters safe when they are in a post-office box?",
      modelAnswer: "Because the box is locked, and you have the key.",
      keywords: [
        "box is locked",
        "have the key"
      ],
      options: [
        "Because the box is locked and you hold the unique key",
        "Because security officers stand guard night and day",
        "Because the post office is surrounded by iron fences",
        "Because only registered parcels can fit inside the box"
      ],
      correctOptionIndex: 0,
      explanationUz: "Quti qulflangan bo'ladi va kalit faqat sizda bo'ladi."
    },
    {
      id: "s52-q3",
      order: 3,
      question: "What happened one day?",
      modelAnswer: "The headmaster of a school wrote to the post-office and asked for a post-office box for his school.",
      keywords: [
        "headmaster of a school",
        "asked for a post-office box"
      ],
      options: [
        "The headmaster of a school wrote to request a post-office box",
        "The postmaster lost all the town's letters",
        "A school boy broke into a post office box",
        "The school stopped sending outgoing mail"
      ],
      correctOptionIndex: 0,
      explanationUz: "Bir maktab direktori maktabi uchun pochta qutisi so'rab xat yozdi."
    },
    {
      id: "s52-q4",
      order: 4,
      question: "What happened then?",
      modelAnswer: "He soon got an answer.",
      keywords: [
        "soon got an answer"
      ],
      options: [
        "He soon got an answer",
        "His letter was returned to sender",
        "The post office manager phoned him",
        "He visited the mayor's office"
      ],
      correctOptionIndex: 0,
      explanationUz: "Tez orada unga javob keldi ('He soon got an answer')."
    },
    {
      id: "s52-q5",
      order: 5,
      question: "What was the answer?",
      modelAnswer: "It said, 'We will give you a post-box in one month.'",
      keywords: [
        "give you a post-box in one month"
      ],
      options: [
        "It said they would provide a post-box in one month",
        "It stated that no boxes were currently available",
        "It asked for an advance payment of one hundred pounds",
        "It instructed him to apply to regional headquarters"
      ],
      correctOptionIndex: 0,
      explanationUz: "Bir oy ichida quti berilishi aytildi."
    },
    {
      id: "s52-q6",
      order: 6,
      question: "What happened three months later?",
      modelAnswer: "The headmaster wrote to the post-office again and asked why they hadn't got a box yet.",
      keywords: [
        "wrote to the post-office again",
        "why haven't we got a post-office box yet"
      ],
      options: [
        "The headmaster wrote again asking why they had not received a box yet",
        "The school moved to a new suburban campus",
        "The headmaster cancelled the order in disgust",
        "The post office burned down in a fire"
      ],
      correctOptionIndex: 0,
      explanationUz: "Uch oy o'tgach, direktor nega haligacha quti olmaganliklarini so'rab yana xat yozdi."
    },
    {
      id: "s52-q7",
      order: 7,
      question: "What was the answer from the post-office?",
      modelAnswer: "They said they had given him a box two months ago, enclosed the key, and told him the notification letter was inside it.",
      keywords: [
        "gave you a post-office box two months ago",
        "Here is the key",
        "find our letter to you in it"
      ],
      options: [
        "They said the box had been ready two months ago, gave him the key, and said the notification was locked inside the box",
        "They offered an apology and sent a refund check",
        "They claimed the application documents were misplaced",
        "They refused to provide a box due to postal regulation changes"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ular quti 2 oy oldin ochilganini, xatni esa qutining ichiga solib qo'yishganini ma'lum qilib kalitni berishdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s52-tf1",
      order: 1,
      statement: "A postman delivers box mail directly to the customer's residence.",
      correctAnswer: "False",
      explanationUz: "Xato: Pochtachi olib kelmaydi, egasi o'zi borib oladi ('the postman does not bring letters to you')."
    },
    {
      id: "s52-tf2",
      order: 2,
      statement: "Post-office boxes remain locked to keep correspondence protected.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'The box is locked, and you have the key, so the letters are quite safe'."
    },
    {
      id: "s52-tf3",
      order: 3,
      statement: "The headmaster was initially promised a box within thirty days.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'We will give you a post-box in one month' deb yozilgan."
    },
    {
      id: "s52-tf4",
      order: 4,
      statement: "The school had over five hundred pupils enrolled.",
      correctAnswer: "Not Given",
      explanationUz: "Maktabdagi o'quvchilar soni haqida matnda aytilmagan."
    },
    {
      id: "s52-tf5",
      order: 5,
      statement: "The postal department placed the original confirmation inside the newly opened locked box.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Ular xatni qutining ichiga solib qo'yganliklarini aytishdi ('You will find our letter to you in it')."
    },
    {
      id: "s52-tf6",
      order: 6,
      statement: "The headmaster sued the postal service for bureaucratic incompetence.",
      correctAnswer: "Not Given",
      explanationUz: "Direktor sudga bergani haqida hech qanday gap yo'q."
    }
  ]
},

  // Story 53
  {
  id: "story-53",
  storyNumber: 53,
  title: "The Snowstorm and the Buried Car in the Garage",
  titleUz: "Qor bo'roni va garajdagi ko'milgan mashina",
  cefrLevel: "A2",
  wordCount: 164,
  readingTimeMinutes: 1,
  storyText: "One night there was a heavy snowstorm, and in the morning Mr Smith's garden was full of deep snow. Mr Smith wanted to take his car out, so he paid a man to clean the path from his garage to his gate.\nHe said to this man, 'Don't throw any snow on that side, because it will damage the bushes in my garden; and don't throw any on the other side, because it will break my fence. And don't throw any into the street, or the police will be angry.'\nThen Mr Smith went out.\nWhen he came back, the path was clean and the snow from it was not on the bushes, or the fence, or the street. Mr Smith was very pleased — until he opened the garage to get his car out! The garage was full to the top with all the snow from the path, and his car was somewhere under it all!",
  paragraphs: [
    "One night there was a heavy snowstorm, and in the morning Mr Smith's garden was full of deep snow. Mr Smith wanted to take his car out, so he paid a man to clean the path from his garage to his gate.",
    "He said to this man, 'Don't throw any snow on that side, because it will damage the bushes in my garden; and don't throw any on the other side, because it will break my fence. And don't throw any into the street, or the police will be angry.'\nThen Mr Smith went out.",
    "When he came back, the path was clean and the snow from it was not on the bushes, or the fence, or the street. Mr Smith was very pleased — until he opened the garage to get his car out! The garage was full to the top with all the snow from the path, and his car was somewhere under it all!"
  ],
  summaryUz: "Kechasi qattiq qor bo'roni bo'lib, janob Smitning bog'i qalin qorga to'ladi. Mashinasini olib chiqish uchun u bir ishchiga garajdan darvozagacha bo'lgan yo'lakni qordan tozalashni buyuradi. Ammo shart qo'yadi: qorni butalarga (zararlamaslik uchun), to'siqqa (sindirib qo'ymaslik uchun) va ko'chaga (politsiya jazolamasligi uchun) otmaslik kerak. Ishchi yo'lni tozalaydi, Smit qaytib kelib bundan xursand bo'ladi. Biroq mashinani olish uchun garajni ochganda, butun yo'lakning qori garaj ichiga tiqilgani va mashina qor tagida qolib ketganini ko'radi!",
  vocabulary: [
    {
      word: "snowstorm",
      pos: "n.",
      phonetic: "[ˈsnəʊstɔːm]",
      translationUz: "qor bo'roni",
      definitionEn: "A heavy fall of snow accompanied by a high wind.",
      exampleSentence: "One night there was a severe winter snowstorm."
    },
    {
      word: "path",
      pos: "n.",
      phonetic: "[pɑːθ]",
      translationUz: "yo'lka, so'qmoq",
      definitionEn: "A way or track laid down for walking.",
      exampleSentence: "He cleared the path leading from the garage to the gate."
    },
    {
      word: "damage",
      pos: "v.",
      phonetic: "[ˈdæmɪdʒ]",
      translationUz: "zarar yetkazmoq, shikastlamoq",
      definitionEn: "To inflict physical harm upon something.",
      exampleSentence: "Heavy snow will damage the tender bushes."
    },
    {
      word: "fence",
      pos: "n.",
      phonetic: "[fens]",
      translationUz: "panjara, to'siq devor",
      definitionEn: "A barrier enclosing an area of ground.",
      exampleSentence: "Don't throw snow against the wooden fence."
    },
    {
      word: "pleased",
      pos: "adj.",
      phonetic: "[pliːzd]",
      translationUz: "mamnun, xursand",
      definitionEn: "Feeling or showing pleasure and satisfaction.",
      exampleSentence: "Mr Smith was very pleased to see the tidy walkway."
    },
    {
      word: "garage",
      pos: "n.",
      phonetic: "[ˈɡærɑːʒ]",
      translationUz: "garaj, avtoturargoh",
      definitionEn: "A building for housing motor vehicles.",
      exampleSentence: "The garage was filled to the ceiling with piled snow."
    }
  ],
  reproductionOutline: [
    "A ferocious snowstorm blankets Mr Smith's garden in deep snow.",
    "Needing to drive his car, Mr Smith hires a laborer to shovel the path between garage and gate.",
    "Mr Smith sets strict prohibitions: no snow on bushes, no snow against the fence, no snow into the street.",
    "Mr Smith departs and returns later to find an immaculate path and all his rules obeyed.",
    "Joy turns into shock upon unlocking the garage: the worker had shoveled every snowflake directly inside on top of the car!"
  ],
  modelRetelling: "Following an overnight snowstorm, Mr Smith woke up to find his garden buried under heavy drifts. Wishing to drive his automobile, he hired a laborer to clear the path extending from his garage doors out to the front gate. Before leaving, Mr Smith issued precise restrictions: the snow must not be tossed onto the garden bushes lest they be harmed, nor piled against the fence lest it collapse, and definitely not thrown into the road to avoid police fines. When Mr Smith returned home, he was delighted to see a spotless walkway with neither the bushes, fence, nor street touched. His delight evaporated instantly upon opening the garage: the literal-minded laborer had shoveled the entire mountain of snow right into the garage, completely submerging the vehicle beneath it!",
  questions: [
    {
      id: "s53-q1",
      order: 1,
      question: "What happened one night?",
      modelAnswer: "One night there was a heavy snowstorm.",
      keywords: [
        "heavy snowstorm"
      ],
      options: [
        "There was a heavy snowstorm",
        "A burglar attempted to enter the garage",
        "A severe hurricane blew away the garden fence",
        "A water pipe burst in the front driveway"
      ],
      correctOptionIndex: 0,
      explanationUz: "Kechasi kuchli qor bo'roni bo'ldi: 'One night there was a heavy snowstorm'."
    },
    {
      id: "s53-q2",
      order: 2,
      question: "What was Mr Smith's garden like in the morning?",
      modelAnswer: "In the morning Mr Smith's garden was full of deep snow.",
      keywords: [
        "garden was full of deep snow"
      ],
      options: [
        "It was full of deep snow",
        "It was completely flooded with rainwater",
        "It was covered in autumn fallen leaves",
        "It was completely frozen into solid ice"
      ],
      correctOptionIndex: 0,
      explanationUz: "Bog' qalin qorga to'lgan edi: 'full of deep snow'."
    },
    {
      id: "s53-q3",
      order: 3,
      question: "What did he do then?",
      modelAnswer: "He paid a man to clean the path from his garage to his gate.",
      keywords: [
        "paid a man to clean the path"
      ],
      options: [
        "He paid a man to shovel the path from garage to gate",
        "He started digging the snow out himself",
        "He called a towing company to pull his car",
        "He decided to stay in bed all morning"
      ],
      correctOptionIndex: 0,
      explanationUz: "U yo'lakni tozalash uchun bir odamni yollab pul to'ladi."
    },
    {
      id: "s53-q4",
      order: 4,
      question: "Why did he do this?",
      modelAnswer: "Because Mr Smith wanted to take his car out.",
      keywords: [
        "wanted to take his car out"
      ],
      options: [
        "Because he wanted to take his car out",
        "Because he expected guests for lunch",
        "Because the postman refused to deliver letters",
        "Because his children wanted to build a snowman"
      ],
      correctOptionIndex: 0,
      explanationUz: "Chunki u mashinasini olib chiqmoqchi edi."
    },
    {
      id: "s53-q5",
      order: 5,
      question: "What did he say to the man?",
      modelAnswer: "He told him not to throw snow on bushes, on the fence, or into the street.",
      keywords: [
        "damage the bushes",
        "break my fence",
        "police will be angry"
      ],
      options: [
        "Not to throw snow on the bushes, against the fence, or into the street",
        "To finish the job within half an hour",
        "To use salt instead of a shovel",
        "To wash the car after shoveling the path"
      ],
      correctOptionIndex: 0,
      explanationUz: "U qorni butalarga, to'siqqa va ko'chaga tashlamaslikni tayinladi."
    },
    {
      id: "s53-q6",
      order: 6,
      question: "What did he do then?",
      modelAnswer: "Then Mr Smith went out.",
      keywords: [
        "Mr Smith went out"
      ],
      options: [
        "Mr Smith went out",
        "He supervised the worker from his porch",
        "He took a warm bath",
        "He made hot tea for the worker"
      ],
      correctOptionIndex: 0,
      explanationUz: "Keyin janob Smit ko'chaga chiqib ketdi."
    },
    {
      id: "s53-q7",
      order: 7,
      question: "What did he see when he came back?",
      modelAnswer: "The path was clean and the snow was not on the bushes, the fence, or the street.",
      keywords: [
        "path was clean",
        "snow was not on bushes, fence, street"
      ],
      options: [
        "The path was perfectly clean with no snow on bushes, fence, or street",
        "The worker was asleep inside the greenhouse",
        "The gate was crushed by a snow mound",
        "The path was still untouched and icy"
      ],
      correctOptionIndex: 0,
      explanationUz: "Yo'lak top-toza, qor esa butalar, to'siq yoki ko'chada yo'q edi."
    },
    {
      id: "s53-q8",
      order: 8,
      question: "How did he feel?",
      modelAnswer: "Mr Smith was very pleased.",
      keywords: [
        "very pleased"
      ],
      options: [
        "Mr Smith was very pleased",
        "He was suspicious and restless",
        "He felt disappointed with the speed",
        "He was anxious about the bill"
      ],
      correctOptionIndex: 0,
      explanationUz: "Smit juda mamnun bo'ldi: 'Mr Smith was very pleased'."
    },
    {
      id: "s53-q9",
      order: 9,
      question: "For how long did he feel like this?",
      modelAnswer: "Until he opened the garage to get his car out.",
      keywords: [
        "until he opened the garage"
      ],
      options: [
        "Until he opened the garage door to get his car out",
        "All throughout the following week",
        "Until the worker demanded extra wages",
        "Until his wife pointed out a damaged shrub"
      ],
      correctOptionIndex: 0,
      explanationUz: "Mashinasini olib chiqish uchun garajni ochguncha shunday his qildi."
    },
    {
      id: "s53-q10",
      order: 10,
      question: "What was the garage like?",
      modelAnswer: "The garage was full to the top with all the snow from the path.",
      keywords: [
        "full to the top with all the snow"
      ],
      options: [
        "The garage was crammed to the roof with all the snow from the path",
        "The garage was flooded with melted water",
        "The garage had a broken window",
        "The garage was completely empty and tidy"
      ],
      correctOptionIndex: 0,
      explanationUz: "Garaj tepasigacha yo'lakdan olingan qorga to'lgan edi."
    },
    {
      id: "s53-q11",
      order: 11,
      question: "Where was the car?",
      modelAnswer: "His car was somewhere under all the snow.",
      keywords: [
        "somewhere under it all"
      ],
      options: [
        "His car was buried somewhere underneath the massive heap of snow",
        "His car was parked on the public driveway",
        "His car had been stolen while he was away",
        "His car was safely out on the street"
      ],
      correctOptionIndex: 0,
      explanationUz: "Uning mashinasi barcha qorlar tagida qolib ketgan edi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s53-tf1",
      order: 1,
      statement: "A severe snowstorm struck the neighborhood during the night.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'One night there was a heavy snowstorm' deyilgan."
    },
    {
      id: "s53-tf2",
      order: 2,
      statement: "Mr Smith shoveled all the snow in the driveway without any help.",
      correctAnswer: "False",
      explanationUz: "Xato: U bitta odamni yollab pul to'ladi ('he paid a man to clean the path')."
    },
    {
      id: "s53-tf3",
      order: 3,
      statement: "Tossing snow into the street would make the police angry.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Smit: 'don't throw any into the street, or the police will be angry' dedi."
    },
    {
      id: "s53-tf4",
      order: 4,
      statement: "The worker broke two wooden posts of the garden fence.",
      correctAnswer: "False",
      explanationUz: "Xato: To'siqqa hech narsa qilmadi ('the snow from it was not on... the fence')."
    },
    {
      id: "s53-tf5",
      order: 5,
      statement: "The worker shoveled the driveway snow directly inside the garage.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Ishchi butun qorni garaj ichiga to'kkan edi."
    },
    {
      id: "s53-tf6",
      order: 6,
      statement: "Mr Smith's car engine was completely ruined by the freezing snow.",
      correctAnswer: "Not Given",
      explanationUz: "Mashina motori aynan ishdan chiqqani haqida matnda hech narsa aytilmagan."
    }
  ]
},

  // Story 54
  {
  id: "story-54",
  storyNumber: 54,
  title: "John Robinson and the Wooden Floor in the Tents",
  titleUz: "Jon Robinson va chodirlardagi yog'och pol",
  cefrLevel: "A2",
  wordCount: 168,
  readingTimeMinutes: 1,
  storyText: "At the beginning of the First World War, John Robinson was a soldier in the army. He went to France with a lot of other soldiers, and lived in a cold, wet, muddy camp. The rain came into his tent, there was mud and water on the floor, and the food was not good.\nThen he became an officer and went to work in the army in Paris. He lived very pleasantly there in a warm house, had very good food, and enjoyed himself.\nAfter some months, he met one of his old friends from the camp.\n'You made a big mistake when you left our camp,' said this friend.\n'Oh?' said John Robinson. 'Why?'\n'Well,' said the soldier, 'the week after you left, they put wood floors in our tents!'",
  paragraphs: [
    "At the beginning of the First World War, John Robinson was a soldier in the army. He went to France with a lot of other soldiers, and lived in a cold, wet, muddy camp. The rain came into his tent, there was mud and water on the floor, and the food was not good.",
    "Then he became an officer and went to work in the army in Paris. He lived very pleasantly there in a warm house, had very good food, and enjoyed himself.",
    "After some months, he met one of his old friends from the camp.",
    "'You made a big mistake when you left our camp,' said this friend.\n'Oh?' said John Robinson. 'Why?'\n'Well,' said the soldier, 'the week after you left, they put wood floors in our tents!'"
  ],
  summaryUz: "Birinchi jahon urushi boshida Jon Robinson oddiy askar sifatida Fransiyadagi sovuq, loyqa va yomg'ir o'tadigan chodirda nochor sharoitda yashaydi. Keyinroq u ofitser darajasiga ko'tarilib, Parijga yuboriladi va u yerda iliq uyda, shohona taomlar bilan maza qilib yashay boshlaydi. Oradan bir necha oy o'tib sobiq chodirdagi askar do'stini uchratib qoladi. Do'sti unga: 'Chodirimizni tashlab ketib katta xato qilding, chunki sen ketgan haftadayoq chodirlarimizga yog'och pol to'shashdi!' deydi. Do'sti yog'och polni Parijdagi ofitserlik hayotidan ham ustunroq deb hisoblagan edi.",
  vocabulary: [
    {
      word: "soldier",
      pos: "n.",
      phonetic: "[ˈsəʊldʒə]",
      translationUz: "askar, jangchi",
      definitionEn: "A person who serves in an army.",
      exampleSentence: "John Robinson served as a common soldier in France."
    },
    {
      word: "muddy",
      pos: "adj.",
      phonetic: "[ˈmʌdi]",
      translationUz: "loyqa, botqoqli",
      definitionEn: "Covered in or full of mud.",
      exampleSentence: "The military camp was cold, wet, and thoroughly muddy."
    },
    {
      word: "tent",
      pos: "n.",
      phonetic: "[tent]",
      translationUz: "chodir, palatka",
      definitionEn: "A portable shelter made of cloth supported by poles.",
      exampleSentence: "Rain soaked through the thin canvas of his tent."
    },
    {
      word: "officer",
      pos: "n.",
      phonetic: "[ˈɒfɪsə]",
      translationUz: "ofitser, zobit",
      definitionEn: "A person holding a position of authority or command in the army.",
      exampleSentence: "He gained a promotion and became an officer in Paris."
    },
    {
      word: "pleasantly",
      pos: "adv.",
      phonetic: "[ˈplezntli]",
      translationUz: "yoqimli tarzda, rohatda",
      definitionEn: "In an enjoyable, agreeable manner.",
      exampleSentence: "He lived very pleasantly in an elegant Parisian home."
    },
    {
      word: "wood floor",
      pos: "n.",
      phonetic: "[wʊd flɔː]",
      translationUz: "yog'och pol",
      definitionEn: "A flooring made of timber boards.",
      exampleSentence: "They laid wooden floors inside all the soldiers' tents."
    }
  ],
  reproductionOutline: [
    "John Robinson serves as an infantryman in France at the dawn of the First World War.",
    "Squalid camp conditions: penetrating rainwater, deep mud, leaking tents, terrible rations.",
    "Promotion to officer brings an assignment in Paris.",
    "A life of comfort: residing in a warm residence, dining exquisitely, thoroughly enjoying existence.",
    "A chance reunion with a comrade from the muddy camp months later.",
    "The comrade claims Robinson committed a terrible blunder by leaving, because the tents finally received wooden floorboards!"
  ],
  modelRetelling: "During the opening stages of the First World War, John Robinson was stationed in France as an ordinary foot soldier. Life in the field camp was miserable: his tent let in constant rainfall, water pooled on the bare muddy ground, and the army rations were abysmal. His fortunes transformed dramatically when he earned a commission as an officer and transferred to an administrative military post in Paris. There, he inhabited a heated, comfortable apartment, enjoyed gourmet meals, and savored the French capital. Months down the road, he crossed paths with an old infantry friend from the frontline encampment. The friend solemnly chided John, claiming he had made a foolish mistake by departing, because just one week after his transfer, the army had installed wooden floorboards in their tents!",
  questions: [
    {
      id: "s54-q1",
      order: 1,
      question: "When did this story happen?",
      modelAnswer: "At the beginning of the First World War.",
      keywords: [
        "beginning of the First World War"
      ],
      options: [
        "At the beginning of the First World War",
        "During the Second World War",
        "During the Crimean War",
        "In the late nineteenth century"
      ],
      correctOptionIndex: 0,
      explanationUz: "Birinchi jahon urushi boshida: 'At the beginning of the First World War'."
    },
    {
      id: "s54-q2",
      order: 2,
      question: "What was John Robinson?",
      modelAnswer: "John Robinson was a soldier in the army.",
      keywords: [
        "soldier in the army"
      ],
      options: [
        "A soldier in the army",
        "A naval ship doctor",
        "A military war correspondent",
        "A pilot in the air squadron"
      ],
      correctOptionIndex: 0,
      explanationUz: "U armiyadagi askar edi ('a soldier in the army')."
    },
    {
      id: "s54-q3",
      order: 3,
      question: "Where did he go?",
      modelAnswer: "He went to France.",
      keywords: [
        "went to France"
      ],
      options: [
        "To France",
        "To Egypt",
        "To Germany",
        "To Canada"
      ],
      correctOptionIndex: 0,
      explanationUz: "U Fransiyaga bordi: 'He went to France'."
    },
    {
      id: "s54-q4",
      order: 4,
      question: "Whom did he go with?",
      modelAnswer: "He went with a lot of other soldiers.",
      keywords: [
        "with a lot of other soldiers"
      ],
      options: [
        "With a lot of other soldiers",
        "With his two younger brothers",
        "With his university professor",
        "Completely on his own"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ko'plab boshqa askarlar bilan birga ketdi."
    },
    {
      id: "s54-q5",
      order: 5,
      question: "Where did he live?",
      modelAnswer: "He lived in a cold, wet, muddy camp.",
      keywords: [
        "cold, wet, muddy camp"
      ],
      options: [
        "In a cold, wet, muddy camp",
        "In a quiet countryside farmhouse",
        "In an underground bunker",
        "In a hotel near the coastline"
      ],
      correctOptionIndex: 0,
      explanationUz: "Sovuq, ho'l va loyqa lagerda yashadi."
    },
    {
      id: "s54-q6",
      order: 6,
      question: "What was the camp like?",
      modelAnswer: "It was cold, wet and muddy.",
      keywords: [
        "cold",
        "wet",
        "muddy"
      ],
      options: [
        "It was cold, wet, and muddy",
        "It was modern, dry, and well-paved",
        "It was located high on a sunny hill",
        "It was peaceful and comfortable"
      ],
      correctOptionIndex: 0,
      explanationUz: "Lager sovuq, nam va loy edi."
    },
    {
      id: "s54-q7",
      order: 7,
      question: "What was John's tent like?",
      modelAnswer: "The rain came into his tent, and there was mud and water on the floor.",
      keywords: [
        "rain came into his tent",
        "mud and water on the floor"
      ],
      options: [
        "Rain leaked inside and there was mud and water on the ground",
        "It was warm and heated with a coal furnace",
        "It had double canvas walls and glass windows",
        "It was spacious and completely dry"
      ],
      correctOptionIndex: 0,
      explanationUz: "Chodirdan yomg'ir o'tar, polda loy va suv to'planib qolardi."
    },
    {
      id: "s54-q8",
      order: 8,
      question: "How was the food at the camp?",
      modelAnswer: "The food was not good.",
      keywords: [
        "food was not good"
      ],
      options: [
        "The food was not good",
        "The food was exceptionally delicious",
        "They ate fresh beef steaks daily",
        "Food was plentiful and varied"
      ],
      correctOptionIndex: 0,
      explanationUz: "Lagerdagi ovqat yaxshi emas edi ('The food was not good')."
    },
    {
      id: "s54-q9",
      order: 9,
      question: "What happened then?",
      modelAnswer: "He became an officer.",
      keywords: [
        "became an officer"
      ],
      options: [
        "He became an officer",
        "He was injured in combat",
        "He deserted the frontline",
        "He caught severe pneumonia"
      ],
      correctOptionIndex: 0,
      explanationUz: "So'ng u ofitser bo'ldi ('Then he became an officer')."
    },
    {
      id: "s54-q10",
      order: 10,
      question: "Where did he go?",
      modelAnswer: "He went to work in the army in Paris.",
      keywords: [
        "went to work in the army in Paris"
      ],
      options: [
        "He went to work in Paris",
        "He returned home to London",
        "He was transferred to Marseille",
        "He went to a training base in Scotland"
      ],
      correctOptionIndex: 0,
      explanationUz: "U Parijdagi armiyada ishlash uchun ketdi."
    },
    {
      id: "s54-q11",
      order: 11,
      question: "How did he live there?",
      modelAnswer: "He lived very pleasantly.",
      keywords: [
        "lived very pleasantly"
      ],
      options: [
        "He lived very pleasantly",
        "He suffered hardship and loneliness",
        "He slept on a camp cot in barracks",
        "He worked fourteen hours a day without rest"
      ],
      correctOptionIndex: 0,
      explanationUz: "U yerda juda yoqimli va farovon yashadi ('lived very pleasantly')."
    },
    {
      id: "s54-q12",
      order: 12,
      question: "Where did he live?",
      modelAnswer: "He lived in a warm house.",
      keywords: [
        "lived in a warm house"
      ],
      options: [
        "In a warm house",
        "In a damp basement apartment",
        "In a military garrison tent",
        "In a shared military hospital room"
      ],
      correctOptionIndex: 0,
      explanationUz: "U issiq uyda yashadi ('in a warm house')."
    },
    {
      id: "s54-q13",
      order: 13,
      question: "How did he like it?",
      modelAnswer: "He enjoyed himself and had very good food.",
      keywords: [
        "enjoyed himself",
        "had very good food"
      ],
      options: [
        "He had very good food and enjoyed himself immensely",
        "He missed the outdoor muddy life",
        "He found city life stressful and dull",
        "He wanted to return to frontline trenches"
      ],
      correctOptionIndex: 0,
      explanationUz: "U ajoyib taomlar yeb, hayotidan rohatlanib yashadi."
    },
    {
      id: "s54-q14",
      order: 14,
      question: "What happened after some months?",
      modelAnswer: "He met one of his old friends from the camp.",
      keywords: [
        "met one of his old friends from the camp"
      ],
      options: [
        "He met one of his old comrades from the military camp",
        "The war ended and peace was signed",
        "He was ordered back to frontline combat",
        "He married a Parisian lady"
      ],
      correctOptionIndex: 0,
      explanationUz: "Bir necha oydan so'ng u lagerdagi eski do'stlaridan birini uchratdi."
    },
    {
      id: "s54-q15",
      order: 15,
      question: "What did his friend say?",
      modelAnswer: "His friend said, 'You made a big mistake when you left our camp.'",
      keywords: [
        "made a big mistake when you left our camp"
      ],
      options: [
        "You made a big mistake when you left our camp",
        "Paris has ruined your soldier discipline",
        "Our company commander has been dismissed",
        "You should resign from military service"
      ],
      correctOptionIndex: 0,
      explanationUz: "Do'sti: 'Lagerimizdan ketib katta xato qilding' dedi."
    },
    {
      id: "s54-q16",
      order: 16,
      question: "What did John Robinson answer?",
      modelAnswer: "John Robinson said, 'Oh? Why?'",
      keywords: [
        "Oh? Why?"
      ],
      options: [
        "Oh? Why?",
        "Are you envious of my promotion?",
        "How could anything be better than Paris?",
        "Have you been discharged?"
      ],
      correctOptionIndex: 0,
      explanationUz: "Robinson: 'Iye? Nega?' deb so'radi."
    },
    {
      id: "s54-q17",
      order: 17,
      question: "What did his friend say then?",
      modelAnswer: "He said that the week after John left, they put wood floors in the tents.",
      keywords: [
        "put wood floors in our tents"
      ],
      options: [
        "He said that the week after John left, they installed wood floors in the tents",
        "He said the army doubled their daily bread ration",
        "He said they were sent to a warm Mediterranean island",
        "He said the general presented everyone with medals"
      ],
      correctOptionIndex: 0,
      explanationUz: "Do'sti u ketganidan keyingi haftada chodirlarga yog'och pol to'shalganini aytdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s54-tf1",
      order: 1,
      statement: "John Robinson began his service in France as a regular soldier.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'John Robinson was a soldier in the army. He went to France' deyilgan."
    },
    {
      id: "s54-tf2",
      order: 2,
      statement: "The infantry encampment had dry gravel ground and heated barracks.",
      correctAnswer: "False",
      explanationUz: "Xato: Lager loyqa, sovuq va chodirlardan yomg'ir o'tadigan edi ('cold, wet, muddy camp')."
    },
    {
      id: "s54-tf3",
      order: 3,
      statement: "After gaining a promotion to officer, John moved to Paris.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'Then he became an officer and went to work in the army in Paris'."
    },
    {
      id: "s54-tf4",
      order: 4,
      statement: "In Paris, John suffered from severe lack of food and heating.",
      correctAnswer: "False",
      explanationUz: "Xato: U issiq uyda yashab, ajoyib ovqatlar yegan ('warm house, had very good food')."
    },
    {
      id: "s54-tf5",
      order: 5,
      statement: "The soldier believed wooden tent boards were preferable to a lavish officer life in Paris.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: U Robinsonni Parijga ketib 'katta xato qilding' deb hisobladi."
    },
    {
      id: "s54-tf6",
      order: 6,
      statement: "John Robinson immediately requested a transfer back to the field camp.",
      correctAnswer: "False",
      explanationUz: "Xato: U lagerga qaytishni so'ramagan, Parijda rohatlanib yashayotgan edi."
    }
  ]
},

  // Story 55
  {
  id: "story-55",
  storyNumber: 55,
  title: "The Former Shop Telephone Number",
  titleUz: "Do'konning eski telefon raqami",
  cefrLevel: "A2",
  wordCount: 162,
  readingTimeMinutes: 1,
  storyText: "Mr Andrews had a new telephone number. Before he got it, it was the number of a shop. The shop now had a new number, but a lot of women did not know this, so they still telephoned the old one.\nAt first, Mr and Mrs Andrews always said, 'We are sorry. You have the wrong number. The shop has a new one now.'\nBut women still continued to telephone them to ask for things, so after some time, Mr and Mrs Andrews began to answer them like this:\n'Good morning, madam. What do you want us to send you today?'\nThey thought, 'Perhaps they will stop telephoning us when they don't get their things.'\nBut this did not help Mr and Mrs Andrews, because now women began to telephone them more and more, and say angrily, 'Where are my things? They have not come yet! Why haven't you sent them yet?'",
  paragraphs: [
    "Mr Andrews had a new telephone number. Before he got it, it was the number of a shop. The shop now had a new number, but a lot of women did not know this, so they still telephoned the old one.",
    "At first, Mr and Mrs Andrews always said, 'We are sorry. You have the wrong number. The shop has a new one now.'",
    "But women still continued to telephone them to ask for things, so after some time, Mr and Mrs Andrews began to answer them like this:\n'Good morning, madam. What do you want us to send you today?'\nThey thought, 'Perhaps they will stop telephoning us when they don't get their things.'",
    "But this did not help Mr and Mrs Andrews, because now women began to telephone them more and more, and say angrily, 'Where are my things? They have not come yet! Why haven't you sent them yet?'"
  ],
  summaryUz: "Janob Endryusga berilgan yangi telefon raqami ilgari bir do'konga tegishli edi. Do'kon boshqa raqamga o'tgan bo'lsa-da, ko'plab ayollar buni bilmay, eski raqamga buyurtma berish uchun qo'ng'iroq qilaverishadi. Avvaliga Endryus va rafiqasi do'kon raqami o'zgarganini aytib tushuntirishga urinishadi, ammo qo'ng'iroqlar to'xtamaydi. Oxiri ular yangi reja o'ylab topishadi: soxta buyurtmalarni qabul qilib: 'Narsalarini olmagach, qo'ng'iroq qilishni to'xtatishar' deb o'ylashadi. Biroq bu reja teskari natija beradi: endi ayollar narsalari yetib kelmaganidan g'azablanib, tinimsiz qo'ng'iroq qilib urisha boshlashadi!",
  vocabulary: [
    {
      word: "telephone number",
      pos: "n.",
      phonetic: "[ˈtelɪfəʊn ˈnʌmbə]",
      translationUz: "telefon raqami",
      definitionEn: "A sequence of digits assigned to a specific phone line.",
      exampleSentence: "He received a newly assigned domestic telephone number."
    },
    {
      word: "shop",
      pos: "n.",
      phonetic: "[ʃɒp]",
      translationUz: "do'kon, magazin",
      definitionEn: "A building where goods are sold to the public.",
      exampleSentence: "The telephone had previously belonged to a neighborhood shop."
    },
    {
      word: "continue",
      pos: "v.",
      phonetic: "[kənˈtɪnjuː]",
      translationUz: "davom etmoq",
      definitionEn: "To persist without ceasing.",
      exampleSentence: "Callers continued to phone day in and day out."
    },
    {
      word: "send",
      pos: "v.",
      phonetic: "[send]",
      translationUz: "yubormoq, jo'natmoq",
      definitionEn: "To dispatch goods or messages to a destination.",
      exampleSentence: "What goods do you want us to send you today?"
    },
    {
      word: "angrily",
      pos: "adv.",
      phonetic: "[ˈæŋɡrəli]",
      translationUz: "jahli chiqib, g'azab bilan",
      definitionEn: "In a manner marked by extreme anger.",
      exampleSentence: "Customers phoned back angrily asking where their orders were."
    },
    {
      word: "get",
      pos: "v.",
      phonetic: "[ɡet]",
      translationUz: "olmoq, yetib kelmoq",
      definitionEn: "To receive or obtain something.",
      exampleSentence: "They thought customers would stop calling when they did not get items."
    }
  ],
  reproductionOutline: [
    "Mr Andrews acquires a new telephone number that previously belonged to a retail store.",
    "The store changed numbers, but female shoppers repeatedly phone the old digits to place orders.",
    "Mr and Mrs Andrews initially clarify politely that it is a wrong number, with zero success.",
    "To deter callers, the couple starts playing along, politely taking orders under the theory that non-delivery will discourage them.",
    "The tactic backfires catastrophically: furious women now call twice as often, demanding to know why their deliveries have not arrived!"
  ],
  modelRetelling: "Mr Andrews was assigned a new home phone number, which had formerly belonged to a local grocery shop. Even though the business had transitioned to a new contact number, many female patrons remained unaware and kept dialing the old line to place home delivery orders. At first, Mr and Mrs Andrews patiently answered that callers had reached the wrong household. When the barrage of ringing failed to diminish, the couple devised an alternative strategy: they began cordially accepting the orders, reasoning that customers would assume the store was useless and cease calling once their goods never arrived. Unfortunately, the tactic backfired terribly; enraged women flooded the phone line with redoubled fury, furiously screaming and demanding to know why their delayed packages had still not reached their doors!",
  questions: [
    {
      id: "s55-q1",
      order: 1,
      question: "What did Mr Andrews have?",
      modelAnswer: "Mr Andrews had a new telephone number.",
      keywords: [
        "new telephone number"
      ],
      options: [
        "A new telephone number",
        "A newly opened grocery shop",
        "A modern television set",
        "A house in the countryside"
      ],
      correctOptionIndex: 0,
      explanationUz: "Unda yangi telefon raqami bor edi ('a new telephone number')."
    },
    {
      id: "s55-q2",
      order: 2,
      question: "What was it before he got it?",
      modelAnswer: "Before he got it, it was the number of a shop.",
      keywords: [
        "number of a shop"
      ],
      options: [
        "It was the number of a shop",
        "It was the emergency police line",
        "It was the contact for a local doctor",
        "It was an unlisted government extension"
      ],
      correctOptionIndex: 0,
      explanationUz: "U ilgari bir do'konning telefon raqami bo'lgan edi."
    },
    {
      id: "s55-q3",
      order: 3,
      question: "What happened then?",
      modelAnswer: "A lot of women still telephoned the old number.",
      keywords: [
        "women still telephoned the old one"
      ],
      options: [
        "A lot of women continued to telephone the old number",
        "The telephone company disconnected his line",
        "The shop owner demanded the number back",
        "Neighbors complained about noisy deliveries"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ko'plab ayollar eski raqamga qo'ng'iroq qilishda davom etishdi."
    },
    {
      id: "s55-q4",
      order: 4,
      question: "Why did it happen?",
      modelAnswer: "Because the shop had a new number, but a lot of women did not know this.",
      keywords: [
        "shop now had a new number",
        "women did not know this"
      ],
      options: [
        "The shop had a new number, but many women did not know this",
        "The telephone directory was published with typos",
        "The shopkeeper gave out fake business cards",
        "Mr Andrews advertised sales in local newspapers"
      ],
      correctOptionIndex: 0,
      explanationUz: "Chunki do'kon raqami o'zgarganini ayollar bilmas edilar."
    },
    {
      id: "s55-q5",
      order: 5,
      question: "What did Mr and Mrs Andrews always do at first?",
      modelAnswer: "They always said, 'We are sorry. You have the wrong number. The shop has a new one now.'",
      keywords: [
        "We are sorry",
        "wrong number",
        "shop has a new one now"
      ],
      options: [
        "They explained that callers had the wrong number and that the shop had changed its line",
        "They slammed down the handset without answering",
        "They forwarded calls to the local post office",
        "They took orders and delivered them personally"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ular avvaliga uzr so'rab, raqam o'zgarganini aytishardi."
    },
    {
      id: "s55-q6",
      order: 6,
      question: "What happened after that?",
      modelAnswer: "Women still continued to telephone them to ask for things.",
      keywords: [
        "women still continued to telephone them"
      ],
      options: [
        "Women still continued to telephone them asking for items",
        "The calls ceased completely",
        "The shop went bankrupt",
        "The police investigated the telephone calls"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ayollar buyurtmalar so'rab qo'ng'iroq qilishda davom etaverishdi."
    },
    {
      id: "s55-q7",
      order: 7,
      question: "What did Mr and Mrs Andrews do after some time?",
      modelAnswer: "They began to take their orders, saying: 'Good morning, madam. What do you want us to send you today?'",
      keywords: [
        "What do you want us to send you today"
      ],
      options: [
        "They pretended to be shop staff and took orders cordially",
        "They unplugged the phone every morning",
        "They changed their surname in the phone registry",
        "They reported each caller for harassment"
      ],
      correctOptionIndex: 0,
      explanationUz: "Ular 'Bugun sizga nima jo'nataylik?' deb soxta buyurtma ola boshlashdi."
    },
    {
      id: "s55-q8",
      order: 8,
      question: "Why did they do this?",
      modelAnswer: "They thought women would stop telephoning when they did not get their things.",
      keywords: [
        "stop telephoning",
        "don't get their things"
      ],
      options: [
        "They thought women would stop calling once they didn't get their goods",
        "They planned to launch their own delivery service",
        "They wanted to practice customer service skills",
        "They wanted to play innocent April Fools pranks"
      ],
      correctOptionIndex: 0,
      explanationUz: "Narsalar yetib bormagach, qo'ng'iroq qilishni to'xtatishar deb o'ylashdi."
    },
    {
      id: "s55-q9",
      order: 9,
      question: "Did this help Mr and Mrs Andrews? Why?",
      modelAnswer: "No, because women began to telephone more and more, angrily demanding to know where their things were.",
      keywords: [
        "did not help",
        "telephone more and more",
        "say angrily",
        "Where are my things"
      ],
      options: [
        "No, because furious customers phoned even more frequently demanding their delayed packages",
        "Yes, callers gave up and total silence returned",
        "Yes, the shop apologized and compensated them",
        "No, the postal service intercepted all calls"
      ],
      correctOptionIndex: 0,
      explanationUz: "Yo'q, chunki ayollar narsalari kelmaganidan jahllari chiqib, yanada ko'proq qo'ng'iroq qila boshlashdi."
    }
  ],
  trueFalseQuestions: [
    {
      id: "s55-tf1",
      order: 1,
      statement: "Mr Andrews received a telephone number formerly registered to a shop.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'Before he got it, it was the number of a shop' deyilgan."
    },
    {
      id: "s55-tf2",
      order: 2,
      statement: "The retail shop was closed permanently due to lack of customers.",
      correctAnswer: "False",
      explanationUz: "Xato: Do'kon yopilmagan, faqat yangi raqamga o'tgan edi ('The shop now had a new number')."
    },
    {
      id: "s55-tf3",
      order: 3,
      statement: "Mr and Mrs Andrews initially attempted to explain the mistake politely.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: 'At first, Mr and Mrs Andrews always said, We are sorry. You have the wrong number'."
    },
    {
      id: "s55-tf4",
      order: 4,
      statement: "Mr Andrews decided to open a competing shop from his residence.",
      correctAnswer: "False",
      explanationUz: "Xato: U do'kon ochmadi, shunchaki qo'ng'iroqlardan qutulish uchun hiyla ishlatdi."
    },
    {
      id: "s55-tf5",
      order: 5,
      statement: "The couple's scheme caused callers to ring more frequently and with greater anger.",
      correctAnswer: "True",
      explanationUz: "To'g'ri: Ayollar buyurtmalari kelmaganidan g'azablanib, yanada ko'proq qo'ng'iroq qila boshlashdi."
    },
    {
      id: "s55-tf6",
      order: 6,
      statement: "The telephone operator disconnected Mr Andrews's line due to excessive complaints.",
      correctAnswer: "Not Given",
      explanationUz: "Telefon operatori liniyani uzib qo'ygani haqida matnda hech qanday gap yo'q."
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

export type { StoryForReproduction };
