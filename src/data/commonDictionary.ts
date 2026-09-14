import { TargetWord } from '../types';

export interface DictionaryEntry {
  word: string;
  translationUz: string;
  definition: string;
  partOfSpeech: string;
  phonetic?: string;
  example?: string;
}

export const IRREGULAR_VERB_MAP: Record<string, string> = {
  went: 'go', gone: 'go', goes: 'go', going: 'go',
  was: 'be', were: 'be', been: 'be', is: 'be', am: 'be', are: 'be', being: 'be',
  had: 'have', has: 'have', having: 'have',
  did: 'do', does: 'do', done: 'do', doing: 'do',
  said: 'say', says: 'say', saying: 'say',
  made: 'make', makes: 'make', making: 'make',
  took: 'take', taken: 'take', takes: 'take', taking: 'take',
  came: 'come', comes: 'come', coming: 'come',
  saw: 'see', seen: 'see', sees: 'see', seeing: 'see',
  knew: 'know', known: 'know', knows: 'know', knowing: 'know',
  got: 'get', gotten: 'get', gets: 'get', getting: 'get',
  thought: 'think', thinks: 'think', thinking: 'think',
  told: 'tell', tells: 'tell', telling: 'tell',
  became: 'become', becomes: 'become', becoming: 'become',
  left: 'leave', leaves: 'leave', leaving: 'leave',
  felt: 'feel', feels: 'feel', feeling: 'feel',
  put: 'put', puts: 'put', putting: 'put',
  brought: 'bring', brings: 'bring', bringing: 'bring',
  began: 'begin', begun: 'begin', begins: 'begin', beginning: 'begin',
  kept: 'keep', keeps: 'keep', keeping: 'keep',
  held: 'hold', holds: 'hold', holding: 'hold',
  wrote: 'write', written: 'write', writes: 'write', writing: 'write',
  stood: 'stand', stands: 'stand', standing: 'stand',
  heard: 'hear', hears: 'hear', hearing: 'hear',
  let: 'let', lets: 'let', letting: 'let',
  meant: 'mean', means: 'mean', meaning: 'mean',
  set: 'set', sets: 'set', setting: 'set',
  met: 'meet', meets: 'meet', meeting: 'meet',
  ran: 'run', runs: 'run', running: 'run',
  paid: 'pay', pays: 'pay', paying: 'pay',
  sat: 'sit', sits: 'sit', sitting: 'sit',
  spoke: 'speak', spoken: 'speak', speaks: 'speak', speaking: 'speak',
  led: 'lead', leads: 'lead', leading: 'lead',
  read: 'read', reads: 'read', reading: 'read',
  grew: 'grow', grown: 'grow', grows: 'grow', growing: 'grow',
  lost: 'lose', loses: 'lose', losing: 'lose',
  fell: 'fall', fallen: 'fall', falls: 'fall', falling: 'fall',
  sent: 'send', sends: 'send', sending: 'send',
  built: 'build', builds: 'build', building: 'build',
  understood: 'understand', understands: 'understand', understanding: 'understand',
  drew: 'draw', drawn: 'draw', draws: 'draw', drawing: 'draw',
  broke: 'break', broken: 'break', breaks: 'break', breaking: 'break',
  spent: 'spend', spends: 'spend', spending: 'spend',
  cut: 'cut', cuts: 'cut', cutting: 'cut',
  rose: 'rise', risen: 'rise', rises: 'rise', rising: 'rise',
  drove: 'drive', driven: 'drive', drives: 'drive', driving: 'drive',
  bought: 'buy', buys: 'buy', buying: 'buy',
  wore: 'wear', worn: 'wear', wears: 'wear', wearing: 'wear',
  chose: 'choose', chosen: 'choose', chooses: 'choose', choosing: 'choose',
  ate: 'eat', eaten: 'eat', eats: 'eat', eating: 'eat',
  gave: 'give', given: 'give', gives: 'give', giving: 'give',
  found: 'find', finds: 'find', finding: 'find',
  taught: 'teach', teaches: 'teach', teaching: 'teach',
  caught: 'catch', catches: 'catch', catching: 'catch',
  sang: 'sing', sung: 'sing', sings: 'sing', singing: 'sing',
  swam: 'swim', swum: 'swim', swims: 'swim', swimming: 'swim',
  flew: 'fly', flown: 'fly', flies: 'fly', flying: 'fly',
  slept: 'sleep', sleeps: 'sleep', sleeping: 'sleep',
  struck: 'strike', strikes: 'strike', striking: 'strike',
  shook: 'shake', shaken: 'shake', shakes: 'shake', shaking: 'shake',
  bit: 'bite', bitten: 'bite', bites: 'bite', biting: 'bite',
  hid: 'hide', hidden: 'hide', hides: 'hide', hiding: 'hide',
  jumped: 'jump', attacks: 'attack', attacked: 'attack',
  children: 'child', men: 'man', women: 'woman', mice: 'mouse', feet: 'foot', teeth: 'tooth',
  people: 'person'
};

export const COMMON_DICTIONARY: Record<string, DictionaryEntry> = {
  // Auxiliary & Pronouns & Basics
  be: {
    word: 'be',
    translationUz: "bo'lmoq, mavjud bo'lmoq",
    definition: 'To exist, live, or have a specified state or quality.',
    partOfSpeech: 'verb',
    phonetic: '/biː/',
    example: 'He wants to be a respected teacher.'
  },
  have: {
    word: 'have',
    translationUz: "ega bo'lmoq, bor bo'lmoq",
    definition: 'To possess, own, or hold something.',
    partOfSpeech: 'verb',
    phonetic: '/hæv/',
    example: 'They have an important exam tomorrow.'
  },
  do: {
    word: 'do',
    translationUz: 'bajarmoq, qilmoq',
    definition: 'To perform an action or activity.',
    partOfSpeech: 'verb',
    phonetic: '/duː/',
    example: 'Always do your best in your studies.'
  },
  say: {
    word: 'say',
    translationUz: 'aytmoq, demoq',
    definition: 'To utter words using the voice.',
    partOfSpeech: 'verb',
    phonetic: '/seɪ/',
    example: 'She wanted to say thank you to the teacher.'
  },
  go: {
    word: 'go',
    translationUz: 'bormoq, ketmoq',
    definition: 'To move from one place to another.',
    partOfSpeech: 'verb',
    phonetic: '/ɡoʊ/',
    example: 'The rabbit went into the deep forest.'
  },
  get: {
    word: 'get',
    translationUz: "olmoq; yetib bormoq; tushunmoq; bo'lmoq",
    definition: 'To receive, obtain, or arrive at a place.',
    partOfSpeech: 'verb',
    phonetic: '/ɡet/',
    example: 'Diligent students get high scores.'
  },
  make: {
    word: 'make',
    translationUz: 'yasamoq, qilmoq, yaratmoq',
    definition: 'To create, construct, or cause something to happen.',
    partOfSpeech: 'verb',
    phonetic: '/meɪk/',
    example: 'Let us make a clear plan for the test.'
  },
  know: {
    word: 'know',
    translationUz: 'bilmoq, tanimoq',
    definition: 'To be aware of through observation or inquiry.',
    partOfSpeech: 'verb',
    phonetic: '/noʊ/',
    example: 'I know how hard you have prepared.'
  },
  think: {
    word: 'think',
    translationUz: "o'ylamoq, fikrlamoq, deb hisoblamoq",
    definition: 'To use one’s mind actively to form connected ideas.',
    partOfSpeech: 'verb',
    phonetic: '/θɪŋk/',
    example: 'The lion thought the reflection was another beast.'
  },
  take: {
    word: 'take',
    translationUz: 'olmoq, qabul qilmoq; vaqt olmoq',
    definition: 'To reach out and grasp, hold, or accept.',
    partOfSpeech: 'verb',
    phonetic: '/teɪk/',
    example: 'Take me to that lion immediately.'
  },
  see: {
    word: 'see',
    translationUz: "ko'rmoq, tushunmoq",
    definition: 'To perceive with the eyes; discern visually.',
    partOfSpeech: 'verb',
    phonetic: '/siː/',
    example: 'He could see his own reflection in the clear water.'
  },
  come: {
    word: 'come',
    translationUz: 'kelmoq, yetib kelmoq',
    definition: 'To move toward or arrive at a place.',
    partOfSpeech: 'verb',
    phonetic: '/kʌm/',
    example: 'One animal will come to you each day.'
  },
  want: {
    word: 'want',
    translationUz: 'istamoq, xohlamoq',
    definition: 'To have a desire to possess or do something.',
    partOfSpeech: 'verb',
    phonetic: '/wɒnt/',
    example: 'All learners want to achieve Band 7.5+.'
  },
  look: {
    word: 'look',
    translationUz: "qaramoq, nazar solmoq; ko'rinmoq",
    definition: 'To direct one’s gaze in a specified direction.',
    partOfSpeech: 'verb',
    phonetic: '/lʊk/',
    example: 'When the lion looked into the well, he was fooled.'
  },
  use: {
    word: 'use',
    translationUz: 'foydalanmoq, ishlatmoq',
    definition: 'To deploy something as a means of achieving an end.',
    partOfSpeech: 'verb',
    phonetic: '/juːz/',
    example: 'You should use cohesive devices in your writing.'
  },
  find: {
    word: 'find',
    translationUz: 'topmoq, aniqlamoq',
    definition: 'To discover or perceive by chance or search.',
    partOfSpeech: 'verb',
    phonetic: '/faɪnd/',
    example: 'Scholars find innovative solutions through research.'
  },
  give: {
    word: 'give',
    translationUz: 'bermoq, taqdim etmoq',
    definition: 'To freely transfer the possession of something to someone.',
    partOfSpeech: 'verb',
    phonetic: '/ɡɪv/',
    example: 'The teacher will give valuable feedback.'
  },
  tell: {
    word: 'tell',
    translationUz: 'aytmoq, gapirib bermoq',
    definition: 'To communicate information or a story in speech or writing.',
    partOfSpeech: 'verb',
    phonetic: '/tel/',
    example: 'The animals told the lion about their proposal.'
  },
  work: {
    word: 'work',
    translationUz: 'ishlamoq, mehnat qilmoq; ish, mehnat',
    definition: 'Activity involving mental or physical effort done to achieve a purpose.',
    partOfSpeech: 'verb / noun',
    phonetic: '/wɜːrk/',
    example: 'Consistent work leads to exceptional progress.'
  },
  call: {
    word: 'call',
    translationUz: 'chaqirmoq; atamoq; telefon qilmoq',
    definition: 'To cry out in a loud voice, or give a specified name to.',
    partOfSpeech: 'verb',
    phonetic: '/kɔːl/',
    example: 'They call Tashkent the city of warm hospitality.'
  },
  try: {
    word: 'try',
    translationUz: 'harakat qilmoq, urinmoq, sinab ko‘rmoq',
    definition: 'To make an attempt or effort to do something.',
    partOfSpeech: 'verb',
    phonetic: '/traɪ/',
    example: 'Always try to learn 10 new words daily.'
  },
  ask: {
    word: 'ask',
    translationUz: "so'ramoq, savol bermoq",
    definition: 'To say something in order to obtain an answer or information.',
    partOfSpeech: 'verb',
    phonetic: '/æsk/',
    example: 'The lion angrily asked why the rabbit was late.'
  },
  need: {
    word: 'need',
    translationUz: "kerak bo'lmoq, muhtoj bo'lmoq",
    definition: 'To require something because it is essential.',
    partOfSpeech: 'verb',
    phonetic: '/niːd/',
    example: 'Students need regular practice to improve fluency.'
  },
  feel: {
    word: 'feel',
    translationUz: 'his qilmoq, sezmoq',
    definition: 'To experience an emotion or physical sensation.',
    partOfSpeech: 'verb',
    phonetic: '/fiːl/',
    example: 'The animals did not feel safe with the cruel lion.'
  },
  become: {
    word: 'become',
    translationUz: "bo'lmoq, aylanmoq",
    definition: 'To begin to be, or develop into.',
    partOfSpeech: 'verb',
    phonetic: '/bɪˈkʌm/',
    example: 'Education helps students become responsible leaders.'
  },
  leave: {
    word: 'leave',
    translationUz: 'tark etmoq, ketmoq; qoldirmoq',
    definition: 'To go away from a person or place.',
    partOfSpeech: 'verb',
    phonetic: '/liːv/',
    example: 'Do not leave your assignments until the last moment.'
  },
  put: {
    word: 'put',
    translationUz: "qo'ymoq, joylashtirmoq",
    definition: 'To move to or place in a particular position.',
    partOfSpeech: 'verb',
    phonetic: '/pʊt/',
    example: 'He put his thoughts into a well-crafted essay.'
  },
  mean: {
    word: 'mean',
    translationUz: "anglatmoq, ma'no bermoq",
    definition: 'To intend to convey or refer to a specific idea.',
    partOfSpeech: 'verb',
    phonetic: '/miːn/',
    example: 'What does this idiomatic phrase mean in context?'
  },
  keep: {
    word: 'keep',
    translationUz: 'saqlamoq; davom ettirmoq',
    definition: 'To continue having or holding something.',
    partOfSpeech: 'verb',
    phonetic: '/kiːp/',
    example: 'Keep studying with diligence every morning.'
  },
  let: {
    word: 'let',
    translationUz: "ruxsat bermoq, qo'yib bermoq",
    definition: 'Not to prevent or forbid; allow.',
    partOfSpeech: 'verb',
    phonetic: '/let/',
    example: 'Let us review the model paragraph carefully.'
  },
  begin: {
    word: 'begin',
    translationUz: 'boshlamoq, boshlanmoq',
    definition: 'To start doing something, or come into being.',
    partOfSpeech: 'verb',
    phonetic: '/bɪˈɡɪn/',
    example: 'We begin each lesson with vocabulary review.'
  },
  seem: {
    word: 'seem',
    translationUz: "tuyulmoq, ko'rinmoq",
    definition: 'To give the impression of being something.',
    partOfSpeech: 'verb',
    phonetic: '/siːm/',
    example: 'The plan seemed very clever to the beast.'
  },
  help: {
    word: 'help',
    translationUz: 'yordam bermoq; ko‘maklashmoq',
    definition: 'To make it easier or possible for someone to do something.',
    partOfSpeech: 'verb',
    phonetic: '/help/',
    example: 'Teachers help students overcome learning hurdles.'
  },
  talk: {
    word: 'talk',
    translationUz: 'gaplashmoq, suhbatlashmoq',
    definition: 'To engage in speech or conversation.',
    partOfSpeech: 'verb',
    phonetic: '/tɔːk/',
    example: 'They like to talk about modern educational methods.'
  },
  turn: {
    word: 'turn',
    translationUz: "burilmoq; navbat, o'zgarish",
    definition: 'To move in a circular direction; an opportunity or duty in order.',
    partOfSpeech: 'verb / noun',
    phonetic: '/tɜːrn/',
    example: 'Finally, it was the rabbit’s turn to face the challenge.'
  },
  start: {
    word: 'start',
    translationUz: 'boshlamoq, boshlanmoq',
    definition: 'To begin an activity or journey.',
    partOfSpeech: 'verb',
    phonetic: '/stɑːrt/',
    example: 'Start your TOEFL preparation early to secure high bands.'
  },
  show: {
    word: 'show',
    translationUz: "ko'rsatmoq, namoyish etmoq",
    definition: 'To allow or cause something to be seen.',
    partOfSpeech: 'verb',
    phonetic: '/ʃoʊ/',
    example: 'The rabbit was happy to show where the other lion lived.'
  },
  hear: {
    word: 'hear',
    translationUz: 'eshitmoq, xabardor bo‘lmoq',
    definition: 'To perceive with the ear the sound made by someone or something.',
    partOfSpeech: 'verb',
    phonetic: '/hɪər/',
    example: 'Listen carefully so that you hear every pronunciation detail.'
  },
  play: {
    word: 'play',
    translationUz: "o'ynamoq; rol ijro etmoq",
    definition: 'To engage in activity for enjoyment; perform a role.',
    partOfSpeech: 'verb',
    phonetic: '/pleɪ/',
    example: 'Vocabulary games play a pivotal role in active learning.'
  },
  run: {
    word: 'run',
    translationUz: 'yugurmoq; boshqarmoq',
    definition: 'To move swiftly on foot; to direct or manage.',
    partOfSpeech: 'verb',
    phonetic: '/rʌn/',
    example: 'The rabbit could run fast through the dense woods.'
  },
  move: {
    word: 'move',
    translationUz: 'harakatlanmoq, surmoq; ko‘chmoq',
    definition: 'To change position or cause to change position.',
    partOfSpeech: 'verb',
    phonetic: '/muːv/',
    example: 'Students move steadily from B1 to C1 proficiency.'
  },
  like: {
    word: 'like',
    translationUz: "yoqtirmoq; ...dek, kabi, o'xshash",
    definition: 'To find agreeable, enjoyable, or satisfactory; similar to.',
    partOfSpeech: 'verb / prep',
    phonetic: '/laɪk/',
    example: 'He writes essays like a Cambridge scholar.'
  },
  live: {
    word: 'live',
    translationUz: 'yashamoq, umrguzaronlik qilmoq',
    definition: 'To remain alive; to make one’s home in a particular place.',
    partOfSpeech: 'verb',
    phonetic: '/lɪv/',
    example: 'A fierce lion lived in the heart of the forest.'
  },
  believe: {
    word: 'believe',
    translationUz: "ishonmoq, deb hisoblamoq",
    definition: 'To accept something as true or feel sure of the truth of.',
    partOfSpeech: 'verb',
    phonetic: '/bɪˈliːv/',
    example: 'Instructors believe in the unlimited potential of their scholars.'
  },
  hold: {
    word: 'hold',
    translationUz: "ushlab turmoq; o'tkazmoq (tadbirlar)",
    definition: 'To grasp, carry, or support with one’s hands; conduct an event.',
    partOfSpeech: 'verb',
    phonetic: '/hoʊld/',
    example: 'The academy will hold an academic writing seminar.'
  },
  bring: {
    word: 'bring',
    translationUz: 'olib kelmoq, keltirmoq',
    definition: 'To take or go with someone or something to a place.',
    partOfSpeech: 'verb',
    phonetic: '/brɪŋ/',
    example: 'Consistent reading will bring rapid lexical growth.'
  },
  happen: {
    word: 'happen',
    translationUz: "sodir bo'lmoq, yuz bermoq",
    definition: 'To take place through a certain event or occurrence.',
    partOfSpeech: 'verb',
    phonetic: '/ˈhæp.ən/',
    example: 'Unexpected challenges happen during live exams.'
  },
  write: {
    word: 'write',
    translationUz: 'yozmoq, insho tuzmoq',
    definition: 'To compose text or record characters on a surface.',
    partOfSpeech: 'verb',
    phonetic: '/raɪt/',
    example: 'Scholars write well-argued 300-word model essays.'
  },
  provide: {
    word: 'provide',
    translationUz: "ta'minlamoq, taqdim etmoq",
    definition: 'To make available for use; supply.',
    partOfSpeech: 'verb',
    phonetic: '/prəˈvaɪd/',
    example: 'Premier School provides modern digital learning tools.'
  },
  learn: {
    word: 'learn',
    translationUz: "o'rganmoq, bilim olmoq",
    definition: 'To gain or acquire knowledge of or skill in something.',
    partOfSpeech: 'verb',
    phonetic: '/lɜːrn/',
    example: 'Curious minds learn foreign languages with ease.'
  },
  change: {
    word: 'change',
    translationUz: "o'zgartirmoq, o'zgarmoq; o'zgarish",
    definition: 'To make or become different.',
    partOfSpeech: 'verb / noun',
    phonetic: '/tʃeɪndʒ/',
    example: 'Technological advances continue to change modern schooling.'
  },
  lead: {
    word: 'lead',
    translationUz: "boshlamoq, olib bormoq, yo'l ko'rsatmoq",
    definition: 'To guide on a way especially by going in advance.',
    partOfSpeech: 'verb',
    phonetic: '/liːd/',
    example: 'The rabbit led the hungry lion straight to the deep well.'
  },
  understand: {
    word: 'understand',
    translationUz: 'tushunmoq, fahmlamoq',
    definition: 'To comprehend the intended meaning of words or ideas.',
    partOfSpeech: 'verb',
    phonetic: '/ˌʌn.dɚˈstænd/',
    example: 'You must understand the prompt before beginning your essay.'
  },
  watch: {
    word: 'watch',
    translationUz: 'kuzatmoq, tomosha qilmoq',
    definition: 'To look at or observe attentively over a period of time.',
    partOfSpeech: 'verb',
    phonetic: '/wɒtʃ/',
    example: 'The other animals stopped to watch the unfolding drama.'
  },
  follow: {
    word: 'follow',
    translationUz: 'ergashmoq, kuzatib bormoq; qoidaga rioya qilmoq',
    definition: 'To come after as a result of; to go after someone.',
    partOfSpeech: 'verb',
    phonetic: '/ˈfɒl.oʊ/',
    example: 'Follow the 5-paragraph academic essay structure.'
  },
  stop: {
    word: 'stop',
    translationUz: "to'xtatmoq, to'xtamoq",
    definition: 'To cease moving or prevent from continuing.',
    partOfSpeech: 'verb',
    phonetic: '/stɒp/',
    example: 'Never stop expanding your daily vocabulary.'
  },
  create: {
    word: 'create',
    translationUz: 'yaratmoq, vujudga keltirmoq',
    definition: 'To bring something into existence.',
    partOfSpeech: 'verb',
    phonetic: '/kriˈeɪt/',
    example: 'Educators create engaging materials for interactive classes.'
  },
  speak: {
    word: 'speak',
    translationUz: "gapirmoq, so'zlamoq",
    definition: 'To say words orally in order to communicate.',
    partOfSpeech: 'verb',
    phonetic: '/spiːk/',
    example: 'Practice speaking English with confidence and clarity.'
  },
  read: {
    word: 'read',
    translationUz: "o'qimoq, mutolaa qilmoq",
    definition: 'To look at and comprehend the meaning of written words.',
    partOfSpeech: 'verb',
    phonetic: '/riːd/',
    example: 'Students read 30 immersive folk and academic stories.'
  },
  allow: {
    word: 'allow',
    translationUz: "ruxsat bermoq, imkon bermoq",
    definition: 'To give permission for or make it possible to do something.',
    partOfSpeech: 'verb',
    phonetic: '/əˈlaʊ/',
    example: 'Smart repetition allows learners to remember words forever.'
  },
  add: {
    word: 'add',
    translationUz: "qo'shmoq, kiritmoq",
    definition: 'To join something to something else so as to increase size or quantity.',
    partOfSpeech: 'verb',
    phonetic: '/æd/',
    example: 'Add these idioms to your active speaking vocabulary.'
  },
  spend: {
    word: 'spend',
    translationUz: "sarflamoq, vaqt o'tkazmoq",
    definition: 'To pay out money or dedicate time to an activity.',
    partOfSpeech: 'verb',
    phonetic: '/spend/',
    example: 'Spend thirty minutes each evening reading English passages.'
  },
  grow: {
    word: 'grow',
    translationUz: "o'smoq, rivojlanmoq",
    definition: 'To increase in size, quantity, or degree through natural development.',
    partOfSpeech: 'verb',
    phonetic: '/ɡroʊ/',
    example: 'Confidence and fluency grow with daily practice.'
  },
  open: {
    word: 'open',
    translationUz: 'ochmoq; ochiq',
    definition: 'To make available or accessible; not closed.',
    partOfSpeech: 'verb / adj',
    phonetic: '/ˈoʊ.pən/',
    example: 'Open your mind to new perspectives and cultures.'
  },
  walk: {
    word: 'walk',
    translationUz: 'piyoda yurmoq',
    definition: 'To move at a regular pace by lifting and setting down each foot in turn.',
    partOfSpeech: 'verb',
    phonetic: '/wɔːk/',
    example: 'The rabbit took a slow walk towards the lion’s cave.'
  },
  win: {
    word: 'win',
    translationUz: "g'alaba qozonmoq, yutmoq",
    definition: 'To be successful or victorious in a contest or battle.',
    partOfSpeech: 'verb',
    phonetic: '/wɪn/',
    example: 'Diligent learners win the weekly Vocab Arena trophy.'
  },
  remember: {
    word: 'remember',
    translationUz: 'eslab qolmoq, yodda tutmoq',
    definition: 'To retain information in one’s memory and recall it at will.',
    partOfSpeech: 'verb',
    phonetic: '/rɪˈmem.bɚ/',
    example: 'Flashcards help you remember high-frequency idioms.'
  },
  decide: {
    word: 'decide',
    translationUz: 'qaror qilmoq, qarorga kelmoq',
    definition: 'To come to a resolution in the mind as a result of consideration.',
    partOfSpeech: 'verb',
    phonetic: '/dɪˈsaɪd/',
    example: 'He decided to commit full focus to IELTS Band 8.0.'
  },
  explain: {
    word: 'explain',
    translationUz: 'tushuntirmoq, izohlamoq',
    definition: 'To make an idea, situation, or problem clear to someone.',
    partOfSpeech: 'verb',
    phonetic: '/ɪkˈspleɪn/',
    example: 'The interactive popup can explain any word on click.'
  },
  hope: {
    word: 'hope',
    translationUz: 'umid qilmoq; umid',
    definition: 'A feeling of expectation and desire for a certain thing to happen.',
    partOfSpeech: 'verb / noun',
    phonetic: '/hoʊp/',
    example: 'We hope every student realizes their study dreams.'
  },
  develop: {
    word: 'develop',
    translationUz: 'rivojlantirmoq, o‘stirmoq',
    definition: 'To grow or cause to grow and become more mature or advanced.',
    partOfSpeech: 'verb',
    phonetic: '/dɪˈvel.əp/',
    example: 'Regular reading helps develop sophisticated writing skills.'
  },
  receive: {
    word: 'receive',
    translationUz: 'qabul qilib olmoq, olmoq',
    definition: 'To be given, presented with, or paid something.',
    partOfSpeech: 'verb',
    phonetic: '/rɪˈsiːv/',
    example: 'High-achieving scholars receive prestigious awards.'
  },
  support: {
    word: 'support',
    translationUz: "qo'llab-quvvatlamoq, dalda bo'lmoq",
    definition: 'To give assistance, approval, or comfort to.',
    partOfSpeech: 'verb / noun',
    phonetic: '/səˈpɔːrt/',
    example: 'Always support your essay arguments with concrete evidence.'
  },
  eat: {
    word: 'eat',
    translationUz: 'yemoq, ovqatlanmoq',
    definition: 'To put food into the mouth and chew and swallow it.',
    partOfSpeech: 'verb',
    phonetic: '/iːt/',
    example: 'The lion wanted to eat only one animal each day.'
  },
  jump: {
    word: 'jump',
    translationUz: "sakramoq, sakrab tushmoq",
    definition: 'To push oneself off a surface and into the air by using the muscles in one’s legs and feet.',
    partOfSpeech: 'verb',
    phonetic: '/dʒʌmp/',
    example: 'The lion jumped into the well to attack the reflection.'
  },
  attack: {
    word: 'attack',
    translationUz: 'hujum qilmoq, hamla qilmoq; hujum',
    definition: 'To take aggressive action against with weapons or physical force.',
    partOfSpeech: 'verb / noun',
    phonetic: '/əˈtæk/',
    example: 'He leapt forward to attack his imaginary rival.'
  },

  // Key Nouns
  animal: {
    word: 'animal',
    translationUz: 'hayvon, jonivor',
    definition: 'A living organism that feeds on organic matter.',
    partOfSpeech: 'noun',
    phonetic: '/ˈæn.ɪ.məl/',
    example: 'Every animal in the forest feared the mighty lion.'
  },
  forest: {
    word: 'forest',
    translationUz: "o'rmon, to'qay",
    definition: 'A large area covered chiefly with trees and undergrowth.',
    partOfSpeech: 'noun',
    phonetic: '/ˈfɔːr.ɪst/',
    example: 'They lived together in a lush green forest.'
  },
  rabbit: {
    word: 'rabbit',
    translationUz: 'quyon',
    definition: 'A burrowing, gregarious, plant-eating mammal with long ears.',
    partOfSpeech: 'noun',
    phonetic: '/ˈræb.ɪt/',
    example: 'The clever rabbit outsmarted the ferocious king of beasts.'
  },
  lion: {
    word: 'lion',
    translationUz: 'sher, arslon',
    definition: 'A large tawny-colored cat that lives in prides, native to Africa and NW India.',
    partOfSpeech: 'noun',
    phonetic: '/ˈlaɪ.ən/',
    example: 'The proud lion believed he ruled supreme over the land.'
  },
  trick: {
    word: 'trick',
    translationUz: 'hiyla, nayrang, usul',
    definition: 'A cunning or skillful act intended to deceive or outwit.',
    partOfSpeech: 'noun',
    phonetic: '/trɪk/',
    example: 'The animals celebrated the rabbit’s clever trick.'
  },
  well: {
    word: 'well',
    translationUz: 'quduq; yaxshi, durust',
    definition: 'A shaft sunk into the ground to obtain water; in a good manner.',
    partOfSpeech: 'noun / adv',
    phonetic: '/wel/',
    example: 'The deep well had still water at the very bottom.'
  },
  water: {
    word: 'water',
    translationUz: 'suv',
    definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, and rain.',
    partOfSpeech: 'noun',
    phonetic: '/ˈwɔː.tər/',
    example: 'He saw his reflection clearly in the deep water.'
  },
  student: {
    word: 'student',
    translationUz: "o'quvchi, talaba",
    definition: 'A person who is studying at a school, college, or university.',
    partOfSpeech: 'noun',
    phonetic: '/ˈstuː.dənt/',
    example: 'Every student at Premier School aims for academic excellence.'
  },
  teacher: {
    word: 'teacher',
    translationUz: "o'qituvchi, ustoz",
    definition: 'A person who teaches, especially in a school.',
    partOfSpeech: 'noun',
    phonetic: '/ˈtiː.tʃər/',
    example: 'The dedicated teacher explained the complex grammar rule.'
  },
  school: {
    word: 'school',
    translationUz: 'maktab, o‘quv markazi',
    definition: 'An institution for educating children or learners.',
    partOfSpeech: 'noun',
    phonetic: '/skuːl/',
    example: 'Premier School offers a world-class ESL curriculum.'
  },
  education: {
    word: 'education',
    translationUz: "ta'lim, tarbiya",
    definition: 'The process of receiving or giving systematic instruction.',
    partOfSpeech: 'noun',
    phonetic: '/ˌedʒ.ʊˈkeɪ.ʃən/',
    example: 'Higher education unlocks boundless international opportunities.'
  },
  country: {
    word: 'country',
    translationUz: 'mamlakat, yurt; qishloq joy',
    definition: 'A nation with its own government, occupying a particular territory.',
    partOfSpeech: 'noun',
    phonetic: '/ˈkʌn.tri/',
    example: 'Uzbekistan is rapidly investing in youth education.'
  },
  world: {
    word: 'world',
    translationUz: 'dunyo, jahon, olam',
    definition: 'The earth, together with all of its countries and peoples.',
    partOfSpeech: 'noun',
    phonetic: '/wɜːrld/',
    example: 'English connects you with learners across the whole world.'
  },
  time: {
    word: 'time',
    translationUz: 'vaqt, payt, zamon; marta',
    definition: 'The indefinite continued progress of existence and events.',
    partOfSpeech: 'noun',
    phonetic: '/taɪm/',
    example: 'Managing your time is essential during writing tasks.'
  },
  day: {
    word: 'day',
    translationUz: 'kun, kunduz',
    definition: 'A period of twenty-four hours as a unit of time.',
    partOfSpeech: 'noun',
    phonetic: '/deɪ/',
    example: 'Each day brings a new opportunity to master vocabulary.'
  },
  year: {
    word: 'year',
    translationUz: 'yil',
    definition: 'The time taken by the earth to make one revolution around the sun (365 days).',
    partOfSpeech: 'noun',
    phonetic: '/jɪər/',
    example: 'Within one year, your language proficiency can multiply.'
  },
  way: {
    word: 'way',
    translationUz: "yo'l, usul, tarz",
    definition: 'A method, style, or manner of doing something.',
    partOfSpeech: 'noun',
    phonetic: '/weɪ/',
    example: 'Interactive reading is the most effective way to learn.'
  },
  man: {
    word: 'man',
    translationUz: 'erkak, odam, inson',
    definition: 'An adult male human being.',
    partOfSpeech: 'noun',
    phonetic: '/mæn/',
    example: 'A wise man listens twice as much as he speaks.'
  },
  woman: {
    word: 'woman',
    translationUz: 'ayol, xotin-qiz',
    definition: 'An adult female human being.',
    partOfSpeech: 'noun',
    phonetic: '/ˈwʊm.ən/',
    example: 'The woman delivered an inspiring scientific lecture.'
  },
  child: {
    word: 'child',
    translationUz: 'bola, farzand',
    definition: 'A young human being below the age of puberty.',
    partOfSpeech: 'noun',
    phonetic: '/tʃaɪld/',
    example: 'Every child deserves an inspiring teacher.'
  },
  family: {
    word: 'family',
    translationUz: 'oila',
    definition: 'A group consisting of parents and children living together in a household.',
    partOfSpeech: 'noun',
    phonetic: '/ˈfæm.əl.i/',
    example: 'Family support inspires students to achieve greatness.'
  },
  friend: {
    word: 'friend',
    translationUz: "do'st, o'rtoq",
    definition: 'A person whom one knows and with whom one has a bond of mutual affection.',
    partOfSpeech: 'noun',
    phonetic: '/frend/',
    example: 'A loyal friend stands with you in times of adversity.'
  },
  question: {
    word: 'question',
    translationUz: 'savol, masala',
    definition: 'A sentence worded or expressed so as to elicit information.',
    partOfSpeech: 'noun',
    phonetic: '/ˈkwes.tʃən/',
    example: 'Do not hesitate to ask a question whenever you need clarification.'
  },
  problem: {
    word: 'problem',
    translationUz: 'muammo, qiyinchilik, masala',
    definition: 'A matter or situation regarded as unwelcome or harmful and needing to be dealt with.',
    partOfSpeech: 'noun',
    phonetic: '/ˈprɒb.ləm/',
    example: 'Strategic thinking turns a complex problem into an opportunity.'
  },
  result: {
    word: 'result',
    translationUz: 'natija, oqibat',
    definition: 'A thing that is caused or produced by something else; a consequence or outcome.',
    partOfSpeech: 'noun',
    phonetic: '/rɪˈzʌlt/',
    example: 'Hard work brings an outstanding academic result.'
  },
  reason: {
    word: 'reason',
    translationUz: 'sabab, vaj, asos',
    definition: 'A cause, explanation, or justification for an action or event.',
    partOfSpeech: 'noun',
    phonetic: '/ˈriː.zən/',
    example: 'State your main reason clearly in the opening topic sentence.'
  },
  example: {
    word: 'example',
    translationUz: 'misol, namuna',
    definition: 'A thing characteristic of its kind or illustrating a general rule.',
    partOfSpeech: 'noun',
    phonetic: '/ɪɡˈzæm.pəl/',
    example: 'For example, modern digital tools accelerate language retention.'
  },
  decision: {
    word: 'decision',
    translationUz: 'qaror, xulosa',
    definition: 'A conclusion or resolution reached after consideration.',
    partOfSpeech: 'noun',
    phonetic: '/dɪˈsɪʒ.ən/',
    example: 'Making a firm decision to read daily transformed his English.'
  },
  research: {
    word: 'research',
    translationUz: 'tadqiqot, ilmiy izlanish',
    definition: 'The systematic investigation into and study of materials and sources in order to establish facts.',
    partOfSpeech: 'noun',
    phonetic: '/rɪˈsɜːrtʃ/',
    example: 'Linguistic research demonstrates that spaced repetition is optimal.'
  },
  technology: {
    word: 'technology',
    translationUz: 'texnologiya',
    definition: 'The application of scientific knowledge for practical purposes.',
    partOfSpeech: 'noun',
    phonetic: '/tekˈnɒl.ə.dʒi/',
    example: 'Modern educational technology empowers personalized learning.'
  },
  society: {
    word: 'society',
    translationUz: 'jamiyat',
    definition: 'The aggregate of people living together in a more or less ordered community.',
    partOfSpeech: 'noun',
    phonetic: '/səˈsaɪ.ə.ti/',
    example: 'Educated youth drive sustainable progress across society.'
  },
  government: {
    word: 'government',
    translationUz: 'hukumat, davlat boshqaruvi',
    definition: 'The governing body of a nation, state, or community.',
    partOfSpeech: 'noun',
    phonetic: '/ˈɡʌv.ən.mənt/',
    example: 'The government supports scholarships for prospective scholars.'
  },
  company: {
    word: 'company',
    translationUz: 'kompaniya, korxona; hamrohlik',
    definition: 'A commercial business; the condition of being with another.',
    partOfSpeech: 'noun',
    phonetic: '/ˈkʌm.pə.ni/',
    example: 'International companies seek multilingual professionals.'
  },
  information: {
    word: 'information',
    translationUz: "ma'lumot, axborot",
    definition: 'Facts provided or learned about something or someone.',
    partOfSpeech: 'noun',
    phonetic: '/ˌɪn.fəˈmeɪ.ʃən/',
    example: 'The article provides valuable information on IELTS writing.'
  },

  // Key Adjectives & Connectors
  important: {
    word: 'important',
    translationUz: 'muhim, ahamiyatli',
    definition: 'Of great significance or value; likely to have a profound effect.',
    partOfSpeech: 'adjective',
    phonetic: '/ɪmˈpɔːr.tənt/',
    example: 'Vocabulary acquisition is an important pillar of English mastery.'
  },
  cruel: {
    word: 'cruel',
    translationUz: "shafqatsiz, zolim, bag'ritosh",
    definition: 'Willfully causing pain or suffering to others, or feeling no concern about it.',
    partOfSpeech: 'adjective',
    phonetic: '/ˈkruː.əl/',
    example: 'A cruel lion ruled over the terrified forest animals.'
  },
  clever: {
    word: 'clever',
    translationUz: 'aqlli, zukko, topqir',
    definition: 'Quick to understand, learn, and devise or apply ideas; intelligent.',
    partOfSpeech: 'adjective',
    phonetic: '/ˈklev.ər/',
    example: 'The clever rabbit saved all the forest inhabitants.'
  },
  safe: {
    word: 'safe',
    translationUz: 'xavfsiz, omon, bexavf',
    definition: 'Protected from or not exposed to danger or risk.',
    partOfSpeech: 'adjective',
    phonetic: '/seɪf/',
    example: 'Once the beast was gone, the forest was completely safe.'
  },
  deep: {
    word: 'deep',
    translationUz: 'chuqur; teran',
    definition: 'Extending far down from the top or surface.',
    partOfSpeech: 'adjective',
    phonetic: '/diːp/',
    example: 'The ancient stone well was very deep.'
  },
  angry: {
    word: 'angry',
    translationUz: "jahli chiqqan, darg'azab",
    definition: 'Feeling or showing strong annoyance, displeasure, or hostility.',
    partOfSpeech: 'adjective',
    phonetic: '/ˈæŋ.ɡri/',
    example: 'The lion roared with angry indignation when the rabbit was late.'
  },
  afraid: {
    word: 'afraid',
    translationUz: "qo'rqqan, xavfsiragan",
    definition: 'Feeling fear or anxiety; frightened.',
    partOfSpeech: 'adjective',
    phonetic: '/əˈfreɪd/',
    example: 'The woodland animals were afraid the lion would destroy them.'
  },
  happy: {
    word: 'happy',
    translationUz: 'baxtli, xursand, mamnun',
    definition: 'Feeling or showing pleasure or contentment.',
    partOfSpeech: 'adjective',
    phonetic: '/ˈhæp.i/',
    example: 'The animals were overjoyed and happy after the resolution.'
  },
  pleased: {
    word: 'pleased',
    translationUz: 'mamnun, xursand bo‘lgan',
    definition: 'Feeling or showing pleasure and satisfaction, especially at an event or achievement.',
    partOfSpeech: 'adjective',
    phonetic: '/pliːzd/',
    example: 'All the animals were very pleased with the rabbit’s trick.'
  },
  different: {
    word: 'different',
    translationUz: 'har xil, turli, boshqacha',
    definition: 'Not the same as another or each other; unlike in nature, form, or quality.',
    partOfSpeech: 'adjective',
    phonetic: '/ˈdɪf.ər.ənt/',
    example: 'Students bring different backgrounds and talents to the classroom.'
  },
  large: {
    word: 'large',
    translationUz: 'katta, ulkan, keng',
    definition: 'Of considerable or relatively great size, extent, or capacity.',
    partOfSpeech: 'adjective',
    phonetic: '/lɑːrdʒ/',
    example: 'A large audience attended the English speaking finals.'
  },
  small: {
    word: 'small',
    translationUz: 'kichik, mayda',
    definition: 'Of a size that is less than normal or usual.',
    partOfSpeech: 'adjective',
    phonetic: '/smɔːl/',
    example: 'Even a small daily effort yields extraordinary results.'
  },
  early: {
    word: 'early',
    translationUz: 'erta, barvaqt',
    definition: 'Happening or done before the usual or expected time.',
    partOfSpeech: 'adjective / adv',
    phonetic: '/ˈɜːr.li/',
    example: 'Waking up early gives you quiet hours to study vocabulary.'
  },
  young: {
    word: 'young',
    translationUz: 'yosh, navqiron',
    definition: 'Having lived or existed for only a short time; not old.',
    partOfSpeech: 'adjective',
    phonetic: '/jʌŋ/',
    example: 'Young scholars in Uzbekistan are mastering global technologies.'
  },
  old: {
    word: 'old',
    translationUz: 'qari, keksa; eski, qadimiy',
    definition: 'Having lived for a long time; no longer young; made a long time ago.',
    partOfSpeech: 'adjective',
    phonetic: '/oʊld/',
    example: 'The rabbit led the lion to an old well in the forest.'
  },
  good: {
    word: 'good',
    translationUz: 'yaxshi, ajoyib, soz',
    definition: 'To be desired or approved of; of high quality.',
    partOfSpeech: 'adjective',
    phonetic: '/ɡʊd/',
    example: 'Good reading habits build lifelong analytical competence.'
  },
  new: {
    word: 'new',
    translationUz: 'yangi',
    definition: 'Already existing but seen, experienced, or acquired recently.',
    partOfSpeech: 'adjective',
    phonetic: '/njuː/',
    example: 'Learn twenty new target words with each unit.'
  },
  high: {
    word: 'high',
    translationUz: 'yuqori, baland',
    definition: 'Of great vertical extent; great or greater than normal in quantity.',
    partOfSpeech: 'adjective',
    phonetic: '/haɪ/',
    example: 'Aim for a high score on the CEFR and IELTS exams.'
  },
  clear: {
    word: 'clear',
    translationUz: 'aniq, ravshan, musaffo',
    definition: 'Easy to perceive, understand, or interpret.',
    partOfSpeech: 'adjective',
    phonetic: '/klɪər/',
    example: 'Make sure your thesis statement is clear and concise.'
  },
  easy: {
    word: 'easy',
    translationUz: 'oson, yengil',
    definition: 'Achieved without great effort; presenting few difficulties.',
    partOfSpeech: 'adjective',
    phonetic: '/ˈiː.zi/',
    example: 'Learning words in context is easier than memorizing isolated lists.'
  },
  hard: {
    word: 'hard',
    translationUz: "qattiq; qiyin, og'ir",
    definition: 'Requiring a great deal of endurance or effort; not soft.',
    partOfSpeech: 'adjective / adv',
    phonetic: '/hɑːrd/',
    example: 'Work hard today to enjoy the benefits tomorrow.'
  },
  strong: {
    word: 'strong',
    translationUz: 'kuchli, baquvvat, mustahkam',
    definition: 'Having the power to move heavy weights or perform other physically demanding tasks.',
    partOfSpeech: 'adjective',
    phonetic: '/strɒŋ/',
    example: 'Strong arguments are grounded in authentic statistical evidence.'
  },
  true: {
    word: 'true',
    translationUz: 'rost, haqiqiy, to‘g‘ri',
    definition: 'In accordance with fact or reality.',
    partOfSpeech: 'adjective',
    phonetic: '/truː/',
    example: 'It is true that continuous immersion accelerates speaking fluency.'
  },

  // High-frequency Connectors & Adverbs
  because: {
    word: 'because',
    translationUz: 'chunki, sababli',
    definition: 'For the reason that; since.',
    partOfSpeech: 'conjunction',
    phonetic: '/bɪˈkɒz/',
    example: 'He succeeded because he practiced relentlessly.'
  },
  although: {
    word: 'although',
    translationUz: "garchi, ...ga qaramasdan",
    definition: 'In spite of the fact that; even though.',
    partOfSpeech: 'conjunction',
    phonetic: '/ɔːlˈðoʊ/',
    example: 'Although the prompt was challenging, she articulated a brilliant essay.'
  },
  however: {
    word: 'however',
    translationUz: 'biroq, ammo, lekin',
    definition: 'Used to introduce a statement that contrasts with or seems to contradict something that has been said.',
    partOfSpeech: 'adverb / conj',
    phonetic: '/haʊˈev.ər/',
    example: 'However, further investigation is essential before reaching conclusions.'
  },
  therefore: {
    word: 'therefore',
    translationUz: 'shuning uchun, demak, binobarin',
    definition: 'For that reason; consequently.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈðeə.fɔːr/',
    example: 'Therefore, investing in educational infrastructure is imperative.'
  },
  furthermore: {
    word: 'furthermore',
    translationUz: "bundan tashqari, shuningdek, ustiga-ustak",
    definition: 'In addition; moreover (used to introduce a fresh consideration).',
    partOfSpeech: 'adverb',
    phonetic: '/ˌfɜː.ðəˈmɔːr/',
    example: 'Furthermore, reading fosters critical thinking capabilities.'
  },
  moreover: {
    word: 'moreover',
    translationUz: 'qolaversa, bundan tashqari',
    definition: 'As a further matter; besides.',
    partOfSpeech: 'adverb',
    phonetic: '/mɔːrˈoʊ.vər/',
    example: 'Moreover, bilingual citizens contribute extensively to international commerce.'
  },
  while: {
    word: 'while',
    translationUz: 'holbuki; ...ayotgan paytda',
    definition: 'During the time that; whereas (indicating a contrast).',
    partOfSpeech: 'conjunction',
    phonetic: '/waɪl/',
    example: 'While some prefer offline lectures, digital courses offer higher flexibility.'
  },
  since: {
    word: 'since',
    translationUz: 'chunki; ...dan beri',
    definition: 'For the reason that; from a past time until now.',
    partOfSpeech: 'conjunction / prep',
    phonetic: '/sɪns/',
    example: 'Since education is transformative, all learners should have access.'
  },
  yesterday: {
    word: 'yesterday',
    translationUz: 'kecha, o‘tgan kuni',
    definition: 'On the day before today.',
    partOfSpeech: 'adverb / noun',
    phonetic: '/ˈjes.tə.deɪ/',
    example: 'She reviewed all the model essays yesterday.'
  },
  today: {
    word: 'today',
    translationUz: 'bugun, hozirgi kunda',
    definition: 'On or in the course of the present day.',
    partOfSpeech: 'adverb / noun',
    phonetic: '/təˈdeɪ/',
    example: 'Begin your journey towards English mastery today.'
  },
  tomorrow: {
    word: 'tomorrow',
    translationUz: 'ertaga',
    definition: 'On the day after today.',
    partOfSpeech: 'adverb / noun',
    phonetic: '/təˈmɒr.oʊ/',
    example: 'The test simulation will take place tomorrow morning.'
  },
  always: {
    word: 'always',
    translationUz: 'har doim, doimo',
    definition: 'At all times; on all occasions.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈɔːl.weɪz/',
    example: 'Always check your spelling and punctuation before submitting.'
  },
  never: {
    word: 'never',
    translationUz: 'hech qachon, aslo',
    definition: 'At no time in the past or future; not ever.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈnev.ər/',
    example: 'The foolish lion jumped into the well and never returned.'
  },
  often: {
    word: 'often',
    translationUz: 'tez-tez, ko‘pincha',
    definition: 'Frequently; many times.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈɒf.ən/',
    example: 'Learners often confuse past simple with present perfect.'
  },
  sometimes: {
    word: 'sometimes',
    translationUz: 'ba’zan, gohida',
    definition: 'At times; now and then; occasionally.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈsʌm.taɪmz/',
    example: 'Sometimes a short walk refreshes your focus.'
  },
  slowly: {
    word: 'slowly',
    translationUz: 'sekin, ohista',
    definition: 'At a slow speed; not quickly.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈsloʊ.li/',
    example: 'The rabbit moved very slowly to make the lion wait.'
  },
  quickly: {
    word: 'quickly',
    translationUz: 'tezda, darhol, chaqqonlik bilan',
    definition: 'At a fast speed; rapidly.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈkwɪk.li/',
    example: 'He quickly realized how the riddle could be answered.'
  },
  angrily: {
    word: 'angrily',
    translationUz: "darg'azablik bilan, jahl bilan",
    definition: 'In a manner marked by anger or fury.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈæŋ.ɡrə.li/',
    example: 'The lion angrily roared across the quiet valley.'
  },
  finally: {
    word: 'finally',
    translationUz: 'nihoyat, oxir-oqibat',
    definition: 'After a long time, typically involving difficulty or delay.',
    partOfSpeech: 'adverb',
    phonetic: '/ˈfaɪ.nəl.i/',
    example: 'Finally, it was the rabbit’s turn to meet the fierce king.'
  }
};
