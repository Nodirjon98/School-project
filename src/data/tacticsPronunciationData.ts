export interface UnitPronunciationInfo {
  unitNumber: number;
  title: string;
  helpRule: string;
  tableRows: string[][];
  task1Items: string[];
}

export const TACTICS_PRONUNCIATION_MAP: Record<number, UnitPronunciationInfo> = {
  "1": {
    "unitNumber": 1,
    "title": "Linking vowel sounds",
    "helpRule": "Pronunciation Help How we spell it How we say it name is nameiz address is addressiz number is numberiz live in livin have a hava It&#39;s nice Itsnice",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "name is",
        "nameiz"
      ],
      [
        "address is",
        "addressiz"
      ],
      [
        "number is",
        "numberiz"
      ],
      [
        "live in",
        "livin"
      ],
      [
        "have a",
        "hava"
      ],
      [
        "It's nice",
        "Itsnice"
      ]
    ],
    "task1Items": [
      "1. My name is Tim.",
      "2. My e-mail address is timr@tmail.com",
      "3. I live in New York.",
      "4. I have a reservation for tonight."
    ]
  },
  "2": {
    "unitNumber": 2,
    "title": "Intonation of yes/no questions and answers",
    "helpRule": "Use rising intonation for yes/no questions. Use falling intonation for yes/no answers.",
    "tableRows": [],
    "task1Items": [
      "1. Are you Abby's sister↗ Yes, I am↘",
      "2. Does he wear glasses↗? Yes, he does↘.",
      "3. Is she in her twenties↗? No, she isn't↘."
    ]
  },
  "3": {
    "unitNumber": 3,
    "title": "Plural -s endings",
    "helpRule": "Pronunciation Help Sounds like /s/ Sounds like /z/ Sounds like /iz/ pants sneakers blouses jackets earrings purses shirts ties dresses",
    "tableRows": [
      [
        "Sounds like /s/",
        "Sounds like /z/",
        "Sounds like /iz/"
      ],
      [
        "pants",
        "sneakers",
        "blouses"
      ],
      [
        "jackets",
        "earrings",
        "purses"
      ],
      [
        "shirts",
        "ties",
        "dresses"
      ]
    ],
    "task1Items": [
      "1. pants",
      "2. jackets",
      "3. sneakers",
      "4. earrings",
      "5. blouses",
      "6. purses"
    ]
  },
  "4": {
    "unitNumber": 4,
    "title": "Syllable stress in numbers",
    "helpRule": "Reduce the t in numbers including the word twenty. Twenty is pronounced twenny.",
    "tableRows": [],
    "task1Items": [
      "1. thirtéen",
      "2. fiftéen",
      "3. sixtéen",
      "4. thírty",
      "5. fífty",
      "6. síxty"
    ]
  },
  "5": {
    "unitNumber": 5,
    "title": "Ordinal numbers",
    "helpRule": "Pronounce the t as d in numbers thirty, forty, fifty, sixty, etc. Say thirdy, fordy, fifdy, sixdy, etc.",
    "tableRows": [],
    "task1Items": [
      "1. first",
      "2. second",
      "3. third",
      "4. fourth",
      "5. fifth",
      "6. sixth",
      "7. seventh",
      "8. eighth",
      "9. ninth",
      "10. tenth",
      "11. twentieth",
      "12. thirty-first"
    ]
  },
  "6": {
    "unitNumber": 6,
    "title": "Syllable stress in words",
    "helpRule": "Tap your desk as you say the words. It will help you hear which syllables are stressed.",
    "tableRows": [],
    "task1Items": [
      "1. sérver",
      "2. flíght",
      "3. téacher",
      "4. constr&uacute;ction wórker",
      "5. b&uacute;sinessperson",
      "6. recéptionist"
    ]
  },
  "7": {
    "unitNumber": 7,
    "title": "Intonation of Wh- questions",
    "helpRule": "Ask a Wh- question if yo want to find out more information about a topic. Use falling intonation for Wh- questions.",
    "tableRows": [],
    "task1Items": [
      "1. What's→ your→ favorite→ TV→ show↘?",
      "2. Who's your→ favorite→ actor↘?",
      "3. Why→ do→ you→ like→ it↘?",
      "4. When do you→ usually→ watch↘ TV?"
    ]
  },
  "8": {
    "unitNumber": 8,
    "title": "sentence stress",
    "helpRule": "Tap your desk as you say the sentences. It will help you hear which words and syllables are stressed.",
    "tableRows": [],
    "task1Items": [
      "1. I pláy ténnis a lót.",
      "2. I líke to tak'e wálks.",
      "3. What spórts do you pláy?",
      "4. Do you like wátching spórts?"
    ]
  },
  "9": {
    "unitNumber": 9,
    "title": "Contracted not",
    "helpRule": "Reduce the t at the end of contraction such as don't, doesn't, and isn't.",
    "tableRows": [],
    "task1Items": [
      "1. is",
      "2. isn't",
      "3. do",
      "4. don't",
      "5. are",
      "6. aren't",
      "7. does",
      "8. doesn't"
    ]
  },
  "10": {
    "unitNumber": 10,
    "title": "Reduction of do, does, and are",
    "helpRule": "‣ Pronunciation Help How we spell it How we say it Do you Doya Who do you Whodaya What does he Whaduzzee What are Whadder",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "Do you",
        "Doya"
      ],
      [
        "Who do you",
        "Whodaya"
      ],
      [
        "What does he",
        "Whaduzzee"
      ],
      [
        "What are",
        "Whadder"
      ]
    ],
    "task1Items": [
      "1. Do you have any brothers?",
      "2. What does he do?",
      "3. Who do you look like?",
      "4. What are their names?"
    ]
  },
  "11": {
    "unitNumber": 11,
    "title": "Reduction of the vowel sound in can",
    "helpRule": "‣ Pronunciation Help How we spell it How we say it can kən can&#39;t k&aelig;nt",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "can",
        "kən"
      ],
      [
        "can't",
        "k&aelig;nt"
      ]
    ],
    "task1Items": [
      "1. I can come to your play.",
      "2. I can't come to your party",
      "3. They can go to the beach with us."
    ]
  },
  "12": {
    "unitNumber": 12,
    "title": "Saying large numbers",
    "helpRule": "The use of and is optional in large numbers. Use it between the hundreds and tens, or simply pause. 110 can be one hundred and ten or one hundred ten.",
    "tableRows": [],
    "task1Items": [
      "1. a thousand",
      "2. one thousand",
      "3. two hundred and twenty-seven",
      "4. two hundred twenty-seven",
      "5. four thousand-six hundred and eighteen",
      "6. four thousand-six hundred eighteen"
    ]
  },
  "13": {
    "unitNumber": 13,
    "title": "wasn't and weren't",
    "helpRule": "‣ Pronunciation Help How we spell it How we say it wasn&#39;t wuznt weren&#39;t wernt",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "wasn't",
        "wuznt"
      ],
      [
        "weren't",
        "wernt"
      ]
    ],
    "task1Items": [
      "1. The pie was delicious.",
      "2. The French fries were really salty.",
      "3. The steak wasn't cooked enough.",
      "4. The vegetables weren't very fresh."
    ]
  },
  "14": {
    "unitNumber": 14,
    "title": "Reduction of Wh- questions",
    "helpRule": "‣ Pronunciation Help How we spell it How we say it How&#39;s your Howsyer How are Hower How have you Howvya What have you Whatuvya",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "How's your",
        "Howsyer"
      ],
      [
        "How are",
        "Hower"
      ],
      [
        "How have you",
        "Howvya"
      ],
      [
        "What have you",
        "Whatuvya"
      ]
    ],
    "task1Items": [
      "1. How's your family?",
      "2. How are you?",
      "3. How have you been?",
      "4. What have you been doing?"
    ]
  },
  "15": {
    "unitNumber": 15,
    "title": "Past tense -ed endings",
    "helpRule": "‣ Pronunciation Help Sounds like /t/ Sounds like /d/ Sounds like /id/ watched stayed visited talked learned decided asked skied skated",
    "tableRows": [
      [
        "Sounds like /t/",
        "Sounds like /d/",
        "Sounds like /id/"
      ],
      [
        "watched",
        "stayed",
        "visited"
      ],
      [
        "talked",
        "learned",
        "decided"
      ],
      [
        "asked",
        "skied",
        "skated"
      ]
    ],
    "task1Items": [
      "1. It rained every day.",
      "2. I rented a house.",
      "3. I walked on the beach every morning."
    ]
  },
  "16": {
    "unitNumber": 16,
    "title": "Contractions of there is and there are",
    "helpRule": "‣ Pronunciation Help How we spell it How we say it there&#39;s therez there are therer",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "there's",
        "therez"
      ],
      [
        "there are",
        "therer"
      ]
    ],
    "task1Items": [
      "1. There's a small yard.",
      "2. There's only one bathroom.",
      "3. There are four bedrooms in my apartment.",
      "4. There are three windows in my living room."
    ]
  },
  "17": {
    "unitNumber": 17,
    "title": "Reduction of want to, going to, hope to",
    "helpRule": "‣ Pronunciation Help How we spell it How we say it going to gonna want to wanna hope to hopeta",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "going to",
        "gonna"
      ],
      [
        "want to",
        "wanna"
      ],
      [
        "hope to",
        "hopeta"
      ]
    ],
    "task1Items": [
      "1. I'm going to graduate next month.",
      "2. I want to travel this summer.",
      "3. I hope to be rich someday."
    ]
  },
  "18": {
    "unitNumber": 18,
    "title": "Intonation of words in a series",
    "helpRule": "Use falling intonation for the last item in a series of words and rising intonation for earlier items.",
    "tableRows": [],
    "task1Items": [
      "1. In Taipei it will be cloudy↗, wet↗, and hot↘ today.",
      "2. Tomorrow it's going to be sunny↗, hot↗, and humid↘.",
      "3. Remember to wear your boots↗, jacket↗, and hat↘."
    ]
  },
  "19": {
    "unitNumber": 19,
    "title": "Contrastive stress",
    "helpRule": "Stress the words that highlight the differences between two choices. for example, stress coffee and tea in the sentence, &quot;Would you like coffee or tea?&quot;",
    "tableRows": [],
    "task1Items": [
      "1. Would you like a lárge or a smáll coffee?",
      "2. Are you paying with cásh or crédit?",
      "3. Can this be machíne-washed or should I dr'y-clean it?",
      "4. Do you like this bl&uacute;e coat or the réd one?"
    ]
  },
  "20": {
    "unitNumber": 20,
    "title": "Syllable stress in adjectives",
    "helpRule": "An adjective is always stressed in a sentence because it highlights something important about the noun.",
    "tableRows": [],
    "task1Items": [
      "1. léather wallet",
      "2. expénsive sunglasses",
      "3. régular glasses",
      "4. cólorful backpack"
    ]
  },
  "21": {
    "unitNumber": 21,
    "title": "Intonation for confirming information",
    "helpRule": "Use rising intonation to ask a question that confirms information.",
    "tableRows": [],
    "task1Items": [
      "1.A: Is there a post office near here?B: A post office↗?",
      "2.A: Could I please have a map?B: A map↗?",
      "3.A: Do you know where the restrooms are?B: The restrooms↗?",
      "4.A: I'm trying to find a supermarket.B: A supermarket↗?"
    ]
  },
  "22": {
    "unitNumber": 22,
    "title": "Third person -s",
    "helpRule": "‣ Pronunciation Help Sounds like /s/ Sounds like /z/ Sounds like /iz/ makes loves practices speaks plays watches",
    "tableRows": [
      [
        "Sounds like /s/",
        "Sounds like /z/",
        "Sounds like /iz/"
      ],
      [
        "makes",
        "loves",
        "practices"
      ],
      [
        "speaks",
        "plays",
        "watches"
      ]
    ],
    "task1Items": [
      "1. makes",
      "2. speaks",
      "3. loves",
      "4. plays",
      "5. practices",
      "6. watches"
    ]
  },
  "23": {
    "unitNumber": 23,
    "title": "Sentence stress",
    "helpRule": "Tap your desk as you read a sentence. It will help you to hear which words are stressed.",
    "tableRows": [],
    "task1Items": [
      "1. It's nóisy cíty.",
      "2. It's véry crówded.",
      "3. Esverything is chéap.",
      "4. The párks are beáutiful."
    ]
  },
  "24": {
    "unitNumber": 24,
    "title": "Reduction of did you",
    "helpRule": "Pronunciation Help How we spell it How we say it Did you Didja",
    "tableRows": [
      [
        "How we spell it",
        "How we say it"
      ],
      [
        "Did you",
        "Didja"
      ]
    ],
    "task1Items": [
      "1. Did you cut yourself?",
      "2. How did you break your arm?",
      "3. Did you go to the doctor?",
      "4. Why did you go to the doctor?"
    ]
  }
};
