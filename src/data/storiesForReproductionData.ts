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
];

export function getStoryById(id: string): StoryForReproduction | undefined {
  return STORIES_FOR_REPRODUCTION.find(s => s.id === id);
}

export function getStoryByNumber(num: number): StoryForReproduction | undefined {
  return STORIES_FOR_REPRODUCTION.find(s => s.storyNumber === num);
}
