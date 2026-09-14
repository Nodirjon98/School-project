const fs = require('fs');

// Read existing toeflEssaysData.ts
const existingContent = fs.readFileSync('src/data/toeflEssaysData.ts', 'utf8');
const lines = existingContent.split('\n');

const t81_start = 1230;
const t185_start = 1409;
const t185_end = 1604;

const topic81_str = lines.slice(t81_start, t185_start - 1).join('\n');
const topic185_str = lines.slice(t185_start, t185_end + 1).join('\n');

// TOPIC 18: Qualities of a Good Boss
const topic18_data = {
  id: 'topic-18',
  topicNumber: 18,
  shortTitle: 'Qualities of an Effective Boss',
  category: 'work',
  categoryName: 'Career, Leadership & Management',
  questionType: 'explanation',
  prompt: 'What are some important qualities of a good supervisor (boss)? Use specific details and examples for your explanation.',
  essays: [
    {
      id: 'essay-18-1',
      essayNumber: 1,
      title: 'The Trinity of Transformational Leadership: Vision, Empathy, and Autonomy',
      score: 6.0,
      stance: 'preference',
      wordCount: 405,
      essayText: `The managerial philosophy and personal temperament of a corporate supervisor exert a profound influence upon workplace productivity, corporate culture, and the emotional well-being of subordinates. While a toxic or tyrannical supervisor demoralizes employees and induces costly turnover, an inspirational leader galvanizes latent talent and orchestrates collective triumphs. In my perspective, the quintessential attributes of an exemplary supervisor comprise articulate and empathetic communication, the wisdom to empower subordinates through decentralized autonomy, and unwavering impartiality in evaluating merit.

First and foremost, an exceptional boss is distinguished by crystal-clear communication anchored in genuine emotional intelligence. In many organizations, employees languish in anxiety because directives are ambiguous and expectations fluctuate erratically. A superior supervisor articulates strategic goals with precision, demystifying complex projects into manageable milestones. Crucially, communication must be a two-way conduit: an effective boss actively solicits feedback, listens attentively to team grievances without defensiveness, and provides constructive criticism that mentors rather than humiliates.

Furthermore, an enlightened manager possesses the confidence to delegate authority rather than succumbing to toxic micromanagement. Ineffective supervisors hover over subordinates’ desks, dictating every minor keystroke and suffocating initiative. In sharp contrast, a great boss recognizes that high-performing professionals flourish when granted autonomy. By establishing clear overarching objectives and providing necessary resources, the supervisor steps back, allowing employees to take intellectual ownership of their work. This liberation sparks creative innovation and fosters profound professional maturity.

Finally, unassailable fairness and transparent meritocracy are indispensable for sustaining team morale. Favoritism, nepotism, and subjective bias poison office culture, breeding bitter resentment among diligent contributors. An exemplary supervisor distributes assignments equitably, acknowledges contributions publicly without claiming sole credit, and bases promotions strictly upon demonstrable outcomes and character. When employees know that hard work is recognized with absolute fairness, organizational loyalty and enthusiasm reach their zenith.

In conclusion, true managerial excellence is not an exercise in authoritarian dominance, but a service of empowerment. By marrying clear empathetic communication with liberating delegation and steadfast fairness, an outstanding supervisor transforms a group of disparate workers into a unified, high-performing team.`,
      targetWords: [
        {
          id: 'tw-t18-1',
          word: 'galvanizes',
          partOfSpeech: 'verb',
          phonetic: '/ˈɡælvənaɪzɪz/',
          definition: 'Shocks or excites someone into taking immediate, energized action.',
          translationUz: 'ruhini koʻtaradi, harakatga keltirib ilhomlantiradi',
          example: 'An inspirational leader galvanizes latent talent and orchestrates collective triumphs.'
        },
        {
          id: 'tw-t18-2',
          word: 'conduit',
          partOfSpeech: 'noun',
          phonetic: '/ˈkɑːnduɪt/',
          definition: 'A channel or pipe for conveying water or other fluid; a medium for communication.',
          translationUz: 'yoʻlak, aloqa kanali, uzatuvchi vosita',
          example: 'Communication must be a two-way conduit of honest feedback.'
        },
        {
          id: 'tw-t18-3',
          word: 'meritocracy',
          partOfSpeech: 'noun',
          phonetic: '/ˌmerɪˈtɑːkrəsi/',
          definition: 'A system in which advancement is based solely on individual ability and achievement.',
          translationUz: 'meritokratiya, munosiblik va xizmatga asoslangan boshqaruv',
          example: 'Unassailable fairness and transparent meritocracy are indispensable.'
        },
        {
          id: 'tw-t18-4',
          word: 'nepotism',
          partOfSpeech: 'noun',
          phonetic: '/ˈnepətɪzəm/',
          definition: 'The practice among those with power of favoring relatives or friends.',
          translationUz: 'tanish-bilishchilik, urugʻ-aymoqchilik',
          example: 'Favoritism and nepotism poison office culture, breeding bitter resentment.'
        },
        {
          id: 'tw-t18-5',
          word: 'zenith',
          partOfSpeech: 'noun',
          phonetic: '/ˈziːnɪθ/',
          definition: 'The time at which something is most powerful, successful, or at its peak.',
          translationUz: 'choʻqqi, eng yuqori daraja, avj palla',
          example: 'Organizational loyalty and enthusiasm reach their zenith.'
        }
      ],
      phrases: [
        {
          id: 'ph-t18-1',
          phrase: 'steps back',
          type: 'phrasal_verb',
          meaning: 'To withdraw or detach slightly from direct control to give others room to act.',
          translationUz: 'orqaga chekinib erkinlik bermoq',
          example: 'The supervisor steps back, allowing employees to take intellectual ownership.'
        },
        {
          id: 'ph-t18-2',
          phrase: 'toxic micromanagement',
          type: 'collocation',
          meaning: 'The destructive practice of obsessively controlling every trivial detail of work.',
          translationUz: 'har bir mayda-chuyda ishga asabiy aralashuv',
          example: 'Rather than succumbing to toxic micromanagement and suffocating initiative.'
        },
        {
          id: 'ph-t18-3',
          phrase: 'labor of love',
          type: 'idiomatic_expression',
          meaning: 'Devoted, purposeful work performed with genuine personal investment.',
          translationUz: 'qalb amri bilan, fidokorona qilingan mehnat',
          example: 'Transforms routine corporate tasks into a shared labor of love.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t18-1',
          phrase: 'The managerial philosophy and personal temperament of',
          category: 'intro_thesis',
          categoryLabel: 'Executive Opening Formula',
          function: 'Introduces leadership evaluation with high-level corporate terminology.',
          translationUz: '...ning boshqaruv falsafasi va shaxsiy feʼl-atvori',
          example: 'The managerial philosophy and personal temperament of a supervisor exert a profound influence.'
        },
        {
          id: 'wc-t18-2',
          phrase: 'is not an exercise in authoritarian dominance, but a service of',
          category: 'conclusion',
          categoryLabel: 'Paradigm Shift Closure',
          function: 'Reinterprets management from autocratic rule to servant leadership.',
          translationUz: 'avtoritar hukmronlik namoyishi emas, balki ... xizmatidir',
          example: 'True managerial excellence is not an exercise in authoritarian dominance, but a service of empowerment.'
        }
      ],
      ideas: [
        {
          id: 'idea-t18-1',
          type: 'thesis',
          title: 'Emotional intelligence, decentralized autonomy, and impartial meritocracy define great leadership',
          anchorText: 'articulate and empathetic communication, the wisdom to empower subordinates through decentralized autonomy, and unwavering impartiality in evaluating merit.',
          explanation: 'Synthesizes communication, delegation, and ethical justice into a modern executive framework.',
          explanationUz: 'Eng namunali rahbar tushunarli va hamdard muloqot qiladi, xodimlarga mustaqil ishlash erkinligini beradi va barchani faqat mehnatiga qarab adolatli baholaydi.',
          scoreInsight: 'Frames leadership around modern organizational psychology rather than crude discipline.',
          promptApplication: 'Transferable to school principal, coach, or political leader essay prompts.'
        }
      ],
      outline: {
        introduction: 'Impact of leadership on organizational morale; thesis identifying empathetic communication, autonomy, and meritocracy as key qualities.',
        bodyPoints: [
          'Empathetic two-way communication: articulating clear goals and welcoming employee feedback without defensiveness.',
          'Decentralized delegation: avoiding suffocating micromanagement and empowering workers with intellectual ownership.',
          'Uncompromising meritocracy: eliminating toxic favoritism and publicly honoring genuine output.'
        ],
        conclusion: 'Leadership is servant empowerment rather than authoritarian control.'
      },
      brainstormingPros: [
        'Boosts productivity, innovation, and long-term worker retention.',
        'Reduces employee anxiety, depression, and burnout.'
      ],
      brainstormingCons: [
        'Excessive autonomy without accountability may lead undisciplined workers to miss deadlines.'
      ]
    }
  ]
};

// TOPIC 20: Countryside vs Big City for Children
const topic20_data = {
  id: 'topic-20',
  topicNumber: 20,
  shortTitle: 'Countryside vs Big City for Children',
  category: 'personal',
  categoryName: 'Family, Childhood & Environment',
  questionType: 'agree_disagree',
  prompt: 'It is better for children to grow up in the countryside than in a big city. Do you agree or disagree? Use specific reasons and examples to develop your essay.',
  essays: [
    {
      id: 'essay-20-1',
      essayNumber: 1,
      title: 'The Crucible of Modern Competence: Championing Metropolitan Childhood',
      score: 6.0,
      stance: 'disagree',
      wordCount: 418,
      essayText: `The environment in which children spend their formative childhood years exerts an indelible imprint upon their cognitive horizons, social adaptability, and future career readiness. Many sentimental traditionalists romanticize pastoral village life, praising its pristine open spaces, organic tranquility, and shelter from commercial vices. While the countryside undeniably offers fresh air and wholesome nature, I strongly disagree with the premise that it is superior for child development. In our interconnected, competitive modern world, growing up in a dynamic metropolis provides children with vastly superior educational institutions, rich multicultural socialization, and early exposure to global opportunities.

First and foremost, large cities offer an unrivaled concentration of premier educational and cultural resources that rural regions simply cannot match. Metropolitan centers boast specialized magnet schools, world-class science museums, botanical gardens, and elite libraries. A child raised in a metropolis can attend weekend symphonies, take coding workshops at tech incubators, and participate in competitive mathematics leagues. In sharp contrast, rural schools frequently grapple with severe budgetary shortfalls, outdated laboratories, and a dearth of specialized instructors, leaving children intellectually disadvantaged when competing for prestigious university admissions.

Furthermore, urban upbringing fosters vital multicultural literacy and cosmopolitan adaptability. Big cities are vibrant mosaic melting pots where children interact daily with peers from diverse ethnic, religious, and socio-economic backgrounds. Through collaborative school projects and neighborhood play, urban children naturally develop open-minded tolerance, cross-cultural empathy, and bilingual communication skills. Rural environments, by contrast, tend to be ethnically and culturally homogeneous; children sheltered within them often struggle with culture shock and provincial awkwardness when eventually thrust into globalized universities and corporate environments.

Finally, metropolitan life instills independence, self-reliance, and navigational acumen from an early age. City children learn to utilize mass transit systems, navigate crowded public avenues safely, and manage their schedules independently. This early exposure demystifies modern society, cultivating resilient young adults who navigate complex professional landscapes with effortless self-assurance.

In conclusion, although the tranquil pastoral charm of the countryside is aesthetically appealing, nostalgia must not blind us to the imperative demands of the twenty-first century. The metropolis remains the supreme crucible for shaping well-rounded, sophisticated, and globally competitive children.`,
      targetWords: [
        {
          id: 'tw-t20-1',
          word: 'formative',
          partOfSpeech: 'adjective',
          phonetic: '/ˈfɔːrmətɪv/',
          definition: 'Serving to form something, especially having a profound influence on character during youth.',
          translationUz: 'shakllantiruvchi, shaxsiyat kamol topadigan (bolalik davri)',
          example: 'Children spend their formative childhood years.'
        },
        {
          id: 'tw-t20-2',
          word: 'dearth',
          partOfSpeech: 'noun',
          phonetic: '/dɜːrθ/',
          definition: 'A scarcity or lack of something.',
          translationUz: 'tanqislik, yetishmovchilik, kamyoblik',
          example: 'Rural schools grapple with a dearth of specialized instructors.'
        },
        {
          id: 'tw-t20-3',
          word: 'cosmopolitan',
          partOfSpeech: 'adjective',
          phonetic: '/ˌkɑːzməˈpɑːlɪtən/',
          definition: 'Familiar with and at ease in many different countries and cultures.',
          translationUz: 'kosmopolit, koʻpmillatli, jahonshumul dunyoqarashga ega',
          example: 'Urban upbringing fosters vital multicultural literacy and cosmopolitan adaptability.'
        },
        {
          id: 'tw-t20-4',
          word: 'provincial',
          partOfSpeech: 'adjective',
          phonetic: '/prəˈvɪnʃl/',
          definition: 'Of or concerning the regions outside the capital city, especially when regarded as unsophisticated.',
          translationUz: 'viloyatga xos, tor dunyoqarashli, chekka hududga xos',
          example: 'Children struggle with culture shock and provincial awkwardness.'
        },
        {
          id: 'tw-t20-5',
          word: 'demystifies',
          partOfSpeech: 'verb',
          phonetic: '/diːˈmɪstɪfaɪz/',
          definition: 'Makes a difficult subject clearer and easier to understand.',
          translationUz: 'tushunarli va ravshan qiladi, sirli qoʻrquvni tarqatadi',
          example: 'This early exposure demystifies modern society, cultivating resilient young adults.'
        }
      ],
      phrases: [
        {
          id: 'ph-t20-1',
          phrase: 'thrust into',
          type: 'phrasal_verb',
          meaning: 'To push someone suddenly or violently into a new, challenging situation.',
          translationUz: 'kutilmaganda ... girdobiga tushib qolmoq',
          example: 'When eventually thrust into globalized universities and corporate environments.'
        },
        {
          id: 'ph-t20-2',
          phrase: 'mosaic melting pot',
          type: 'collocation',
          meaning: 'A diverse urban society where many cultures blend together harmoniously.',
          translationUz: 'rang-barang madaniyatlarning uygʻun qozoni',
          example: 'Big cities are vibrant mosaic melting pots where children interact daily.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t20-1',
          phrase: 'Many sentimental traditionalists romanticize pastoral village life, praising',
          category: 'contrast_concession',
          categoryLabel: 'Romantic Myth Critique',
          function: 'Critiques the traditional nostalgia of rural life before presenting modern urban reality.',
          translationUz: 'Koʻpgina anʼanaparastlar qishloq hayotini ... maqtab ideallashtiradilar',
          example: 'Many sentimental traditionalists romanticize pastoral village life, praising its open spaces.'
        },
        {
          id: 'wc-t20-2',
          phrase: 'nostalgia must not blind us to the imperative demands of',
          category: 'conclusion',
          categoryLabel: 'Pragmatic Modern Closure',
          function: 'Balances emotional romanticism against the pragmatic demands of modern global success.',
          translationUz: 'oʻtmish qoʻmsashi bizning koʻzimizni ...ning talablaridan toʻsmasligi lozim',
          example: 'Nostalgia must not blind us to the imperative demands of the twenty-first century.'
        }
      ],
      ideas: [
        {
          id: 'idea-t20-1',
          type: 'thesis',
          title: 'Metropolitan upbringing provides superior education, cultural tolerance, and worldly adaptability',
          anchorText: 'growing up in a dynamic metropolis provides children with vastly superior educational institutions, rich multicultural socialization, and early exposure to global opportunities.',
          explanation: 'Rejects pastoral nostalgia in favor of institutional superiority, cultural diversity, and modern survival skills.',
          explanationUz: 'Katta shahar bolalarga zamonaviy taʼlim maskanlari, koʻpmillatli bagʻrikenglik va hayotiy mustaqillikni oʻrgatadi.',
          scoreInsight: 'Directly counters popular emotional assumptions with robust factual rationale.',
          promptApplication: 'Use in essays comparing urban vs rural living, city infrastructure, or child development.'
        }
      ],
      outline: {
        introduction: 'Rural romanticism vs modern realities; thesis contending that city childhood offers superior schooling, diversity, and life skills.',
        bodyPoints: [
          'Educational supremacy: science centers, specialized magnet schools, coding labs, and world-class libraries.',
          'Multicultural socialization: daily interaction with diverse cultures dispelling provincial biases.',
          'Early independence: navigating mass transit and complex environments building lifelong resilience.'
        ],
        conclusion: 'Nature is pleasant, but the metropolis is the true crucible for preparing children for 21st-century global competition.'
      },
      brainstormingPros: [
        'Unrivaled access to top-tier academic tutoring, science centers, and arts academies.',
        'Develops early social adaptability and cultural empathy.',
        'Prepares children for navigating competitive corporate and academic worlds.'
      ],
      brainstormingCons: [
        'Higher noise pollution, traffic hazards, and air particulate matter.',
        'Higher costs of living and smaller residential spaces.'
      ]
    }
  ]
};

// TOPIC 27: Doing Things Not Enjoyed
const topic27_data = {
  id: 'topic-27',
  topicNumber: 27,
  shortTitle: 'Doing Unpleasant but Necessary Tasks',
  category: 'personal',
  categoryName: 'Personal Discipline, Ethics & Growth',
  questionType: 'agree_disagree',
  prompt: 'Do you agree or disagree with the following statement? People should sometimes do things that they do not enjoy doing. Use specific reasons and examples to support your answer.',
  essays: [
    {
      id: 'essay-27-1',
      essayNumber: 1,
      title: 'Embracing Discomfort as the Catalyst for Maturity and Achievement',
      score: 6.0,
      stance: 'agree',
      wordCount: 402,
      essayText: `Human biology is instinctively wired to pursue immediate gratification while fleeing from physical discomfort, mental strain, and tedious obligations. A superficial hedonistic philosophy suggests that a successful life is one spent exclusively pursuing pleasant delights and shunning unappealing duties. However, such an outlook confuses momentary amusement with genuine long-term fulfillment. I wholeheartedly agree with the statement that human beings must frequently undertake endeavors they do not enjoy, as voluntary engagement with unpleasant tasks is the indispensable bedrock of physical health, character building, and professional triumph.

First and foremost, physical well-being and longevity are unattainable without enduring activities that are inherently demanding or unpleasant. Virtually nobody experiences pure hedonistic ecstasy while undergoing painful dental procedures, swallowing bitter antibiotic medications, or waking up at dawn to execute strenuous cardiovascular workouts in freezing weather. Yet, voluntarily embracing these arduous routines prevents debilitating illnesses, builds cardiovascular stamina, and extends lifespan. Yielding exclusively to pleasurable inclinations—such as gorging on sugary confections and lounging passively on couches—leads inexorably to chronic infirmity and premature demise.

Furthermore, executing unappealing responsibilities builds moral fortitude and emotional resilience. In academic and professional domains, mastery of any discipline demands hundreds of hours of mundane, repetitive drudgery. An aspiring concert pianist must practice agonizing finger scales for years; an aspiring programmer must spend grueling nights debugging obscure syntax errors. If individuals only performed tasks they found inherently enjoyable, they would abandon their studies the instant complexity arose. Grit—the willingness to persevere through frustration—is the single most accurate predictor of lifelong achievement.

Finally, societal cohesion itself rests upon the execution of unglamorous duties. Maintaining a functioning civilization requires millions of individuals to perform unpalatable jobs daily: collecting municipal waste, cleaning hospital wards, and repairing sewer mains. In our personal domestic lives, taking out the trash and doing taxes are unexciting chores, yet neglecting them plunges households into squalor and legal peril.

In conclusion, while life should certainly contain leisure and joy, embracing the discipline of doing things we dislike is the true mark of adult maturity. Discomfort is the bitter soil from which the sweetest fruits of success and health blossom.`,
      targetWords: [
        {
          id: 'tw-t27-1',
          word: 'hedonistic',
          partOfSpeech: 'adjective',
          phonetic: '/ˌhiːdəˈnɪstɪk/',
          definition: 'Engaged in the pursuit of pleasure; sensually self-indulgent.',
          translationUz: 'kayf-u safo ketidan quvuvchi, maishatparast',
          example: 'A superficial hedonistic philosophy confuses amusement with fulfillment.'
        },
        {
          id: 'tw-t27-2',
          word: 'infirmity',
          partOfSpeech: 'noun',
          phonetic: '/ɪnˈfɜːrməti/',
          definition: 'Physical or mental weakness, especially resulting from old age or bad habits.',
          translationUz: 'nimjonlik, xastalik, jismoniy zaiflik',
          example: 'Yielding to pleasurable inclinations leads inexorably to chronic infirmity.'
        },
        {
          id: 'tw-t27-3',
          word: 'fortitude',
          partOfSpeech: 'noun',
          phonetic: '/ˈfɔːrtɪtuːd/',
          definition: 'Courage in pain or adversity; mental and emotional strength.',
          translationUz: 'matonat, iroda kuchi, chidamlilik',
          example: 'Executing unappealing responsibilities builds moral fortitude and emotional resilience.'
        },
        {
          id: 'tw-t27-4',
          word: 'unpalatable',
          partOfSpeech: 'adjective',
          phonetic: '/ʌnˈpælətəbl/',
          definition: 'Difficult to put up with or accept; unpleasant to taste or execute.',
          translationUz: 'yoqimsiz, ogʻir botadigan, noxush',
          example: 'Requires millions to perform unpalatable jobs daily like waste management.'
        },
        {
          id: 'tw-t27-5',
          word: 'squalor',
          partOfSpeech: 'noun',
          phonetic: '/ˈskwɑːlər/',
          definition: 'The state of being extremely dirty and unpleasant, especially as a result of neglect.',
          translationUz: 'ifloslik, tartibsizlik, tashlandiq nochor holat',
          example: 'Neglecting unexciting chores plunges households into squalor and chaos.'
        }
      ],
      phrases: [
        {
          id: 'ph-t27-1',
          phrase: 'leads inexorably to',
          type: 'collocation',
          meaning: 'Inevitably and unstoppably causes a specific severe outcome.',
          translationUz: 'muqarrar ravishda ...ga olib keladi',
          example: 'Leads inexorably to chronic infirmity and premature demise.'
        },
        {
          id: 'ph-t27-2',
          phrase: 'sweetest fruits blossom',
          type: 'idiomatic_expression',
          meaning: 'The greatest rewards emerge from painful early investments.',
          translationUz: 'eng totli mevalar nish uradi / yetiladi',
          example: 'Discomfort is the bitter soil from which the sweetest fruits of success blossom.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t27-1',
          phrase: 'confuses momentary amusement with genuine long-term',
          category: 'intro_thesis',
          categoryLabel: 'Philosophical Distinction',
          function: 'Distinguishes cheap short-term pleasure from deep, durable fulfillment.',
          translationUz: 'lahzalik zavqni haqiqiy uzoq muddatli ... bilan adashtiradi',
          example: 'Such an outlook confuses momentary amusement with genuine long-term fulfillment.'
        },
        {
          id: 'wc-t27-2',
          phrase: 'is the single most accurate predictor of lifelong achievement',
          category: 'body_argument',
          categoryLabel: 'Psychological Credibility',
          function: 'Cites empirical psychological consensus regarding grit and discipline.',
          translationUz: 'umrbod muvaffaqiyatning eng aniq bashoratlovchi koʻrsatkichidir',
          example: 'Grit—the willingness to persevere through frustration—is the single most accurate predictor of achievement.'
        }
      ],
      ideas: [
        {
          id: 'idea-t27-1',
          type: 'thesis',
          title: 'Doing unpleasant tasks is the foundational engine of health, character grit, and civilization',
          anchorText: 'voluntary engagement with unpleasant tasks is the indispensable bedrock of physical health, character building, and professional triumph.',
          explanation: 'Deconstructs the prompt across physiological health, psychological grit, and civic duty.',
          explanationUz: 'Yoqimsiz mashgʻulotlarni bajarish jismoniy salomatlik, kuchli iroda va jamiyatning barqaror faoliyati uchun zaruriy shartdir.',
          scoreInsight: 'Elevates a simple prompt to a masterclass in philosophical and civic reasoning.',
          promptApplication: 'Ideal for discipline vs freedom, delayed gratification, and professional ethics prompts.'
        }
      ],
      outline: {
        introduction: 'The pleasure trap vs biological reality; thesis stating that executing disliked tasks is required for health, grit, and civic life.',
        bodyPoints: [
          'Physical vitality: medicine, dental surgery, and brutal winter exercise prevent premature death and disease.',
          'Psychological fortitude: mastering complex arts and computer programming requires enduring repetitive frustration.',
          'Civic responsibility: domestic chores, waste collection, and taxes sustain civilized society.'
        ],
        conclusion: 'Discomfort is the bitter soil from which the sweet harvest of true adult achievement grows.'
      },
      brainstormingPros: [
        'Builds mental discipline, tenacity, and resistance to stress.',
        'Secures long-term health and prevents metabolic diseases.',
        'Essential for mastering high-skill technical professions.'
      ],
      brainstormingCons: [
        'Chronic engagement in abusive or soul-crushing jobs harms mental health if unmoderated.'
      ]
    }
  ]
};

// TOPIC 31: Staying in One Place vs Moving
const topic31_data = {
  id: 'topic-31',
  topicNumber: 31,
  shortTitle: 'Staying in One Place vs Relocating',
  category: 'personal',
  categoryName: 'Lifestyle, Mobility & Personal Growth',
  questionType: 'preference',
  prompt: 'Some people spend their entire lives in one place. Others move a number of times throughout their lives, looking for a better job, house, community, or even climate. Which do you prefer: staying in one place or moving in search of new opportunities?',
  essays: [
    {
      id: 'essay-31-1',
      essayNumber: 1,
      title: 'The Odyssey of Self-Realization: Embracing Geographic Mobility',
      score: 6.0,
      stance: 'preference',
      wordCount: 410,
      essayText: `Geographic mobility has evolved into one of the hallmark characteristics of contemporary civilization. While some individuals cherish the tranquil predictability of remaining anchored in their ancestral birthplace throughout their lives, others view life as an open horizon, relocating repeatedly in pursuit of dynamic careers, enriching cultures, and higher living standards. While acknowledging that territorial permanence offers comforting continuity and deep multigenerational roots, I unequivocally favor moving dynamically in search of new horizons. Embracing relocation stimulates exponential career advancement, dismantles narrow parochial prejudices, and unlocks personal resilience that remains dormant in a static environment.

First and foremost, geographic flexibility is the paramount catalyst for economic and professional trajectory in the twenty-first century. Modern industries and technological hubs are clustered unevenly across continents. An ambitious individual confined to a single geographic hamlet must adapt their career ambitions to whatever modest industries happen to exist locally. Conversely, an individual willing to migrate can pursue positions at premier corporate headquarters, research institutions, and creative centers, dramatically multiplying their earning potential and professional influence.

Furthermore, living in diverse communities serves as an invaluable antidote to provincial narrow-mindedness. When a person resides in only one town, their worldview is invariably constrained by the localized customs, political dogmas, and social biases of that specific enclave. By moving between different regions, cities, and countries, an individual encounters divergent philosophies, lifestyles, and languages. This cross-pollination of experiences cultivates emotional maturity, intellectual versatility, and a nuanced global citizenship that can never be acquired through armchair travel.

Finally, the very ordeal of relocating builds indispensable self-reliance. Uprooting one’s life—finding a new residence, navigating unfamiliar public bureaucracies, and forging fresh friendships from scratch—forces an individual out of complacency. Confronting and conquering these logistical challenges transforms a timid person into a confident, resourceful problem-solver equipped to thrive under any adversity.

In conclusion, while rooted stability carries nostalgic charm, life is too vast to be spent within the confines of a single horizon. Moving courageously in pursuit of superior opportunities turns existence into a vibrant voyage of self-actualization.`,
      targetWords: [
        {
          id: 'tw-t31-1',
          word: 'odyssey',
          partOfSpeech: 'noun',
          phonetic: '/ˈɑːdəsi/',
          definition: 'A long and eventful or adventurous journey or experience.',
          translationUz: 'uzoq va sarguzashtlarga boy safar / odisseya',
          example: 'The odyssey of self-realization through geographic mobility.'
        },
        {
          id: 'tw-t31-2',
          word: 'antidote',
          partOfSpeech: 'noun',
          phonetic: '/ˈæntidoʊt/',
          definition: 'Something that counteracts an unpleasant feeling or harmful situation.',
          translationUz: 'davo, zaharga qarshi vosita, ziddiyatni bartaraf etuvchi',
          example: 'Diverse communities serve as an invaluable antidote to provincial narrow-mindedness.'
        },
        {
          id: 'tw-t31-3',
          word: 'cross-pollination',
          partOfSpeech: 'noun',
          phonetic: '/ˌkrɔːsˌpɑːləˈneɪʃn/',
          definition: 'The sharing or blending of different ideas, cultures, or experiences for mutual benefit.',
          translationUz: 'tajribalarning oʻzaro almashinuvi va boyishi',
          example: 'This cross-pollination of experiences cultivates emotional maturity.'
        },
        {
          id: 'tw-t31-4',
          word: 'uprooting',
          partOfSpeech: 'noun',
          phonetic: '/ʌpˈruːtɪŋ/',
          definition: 'The act of pulling up by the roots; moving someone from their established home.',
          translationUz: 'ildizidan qoʻporib koʻchish, joyni butunlay oʻzgartirish',
          example: 'Uprooting one’s life forces an individual out of complacency.'
        },
        {
          id: 'tw-t31-5',
          word: 'self-actualization',
          partOfSpeech: 'noun',
          phonetic: '/ˌselfˌæktʃuələˈzeɪʃn/',
          definition: 'The realization or fulfillment of one’s talents and potentialities.',
          translationUz: 'oʻz iqtidori va salohiyatini toʻliq roʻyobga chiqarish',
          example: 'Turns existence into a vibrant voyage of self-actualization.'
        }
      ],
      phrases: [
        {
          id: 'ph-t31-1',
          phrase: 'armchair travel',
          type: 'idiomatic_expression',
          meaning: 'Reading about or watching travel from home without physically going anywhere.',
          translationUz: 'uydan chiqmay, faqat televizor yoki kitob orqali sayohat qilish',
          example: 'Nuanced global citizenship that can never be acquired through armchair travel.'
        },
        {
          id: 'ph-t31-2',
          phrase: 'from scratch',
          type: 'idiomatic_expression',
          meaning: 'From the very beginning, without using anything that already existed.',
          translationUz: 'noldan boshlab, hech narsasiz',
          example: 'Forging fresh friendships from scratch in a new city.'
        },
        {
          id: 'ph-t31-3',
          phrase: 'territorial permanence',
          type: 'collocation',
          meaning: 'Remaining permanently tied to a single geographical location.',
          translationUz: 'bir joyda doimiy muqim yashash',
          example: 'While acknowledging that territorial permanence offers comforting continuity.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t31-1',
          phrase: 'While acknowledging that territorial permanence offers',
          category: 'contrast_concession',
          categoryLabel: 'Concession Transition',
          function: 'Validates stability before launching the mobility thesis.',
          translationUz: 'Garchi bir joyda yashash ... bersa-da, ...',
          example: 'While acknowledging that territorial permanence offers comforting continuity, I favor moving.'
        },
        {
          id: 'wc-t31-2',
          phrase: 'is too vast to be spent within the confines of a single',
          category: 'conclusion',
          categoryLabel: 'Inspiring Closing Flourish',
          function: 'Provides a poetic call to action regarding human potential and adventure.',
          translationUz: 'yagona ... doirasida oʻtkazib yuborish uchun haddan ortiq keng va bepayondir',
          example: 'Life is too vast to be spent within the confines of a single horizon.'
        }
      ],
      ideas: [
        {
          id: 'idea-t31-1',
          type: 'thesis',
          title: 'Relocation unleashes career multiplying power, cross-cultural empathy, and personal resilience',
          anchorText: 'Embracing relocation stimulates exponential career advancement, dismantles narrow parochial prejudices, and unlocks personal resilience that remains dormant in a static environment.',
          explanation: 'Balanced tripartite thesis covering financial growth, philosophical open-mindedness, and emotional grit.',
          explanationUz: 'Yangi joylarga koʻchish karerada katta sakrash yasash, tor qarashlardan xalos boʻlish va insonning ichki matonatini uygʻotishga yordam beradi.',
          scoreInsight: 'Rich conceptual vocabulary matching highest band descriptors.',
          promptApplication: 'Transferable to studying abroad, urbanization, and career mobility prompts.'
        }
      ],
      outline: {
        introduction: 'Comfort of ancestral roots vs allure of the horizon; thesis supporting mobility for economic gain, open-mindedness, and resilience.',
        bodyPoints: [
          'Economic empowerment: modern industries cluster unevenly; moving unlocks access to global hubs.',
          'Cultural enlightenment: moving cures provincial prejudice and builds true cosmopolitan tolerance.',
          'Self-reliance: the ordeal of settling in new cities builds supreme resourcefulness and courage.'
        ],
        conclusion: 'Ancestral roots are comforting, but courageous relocation turns life into an epic voyage of self-discovery.'
      },
      brainstormingPros: [
        'Massively expands employment prospects, salary upside, and professional networks.',
        'Eliminates racial and regional biases through real cultural immersion.',
        'Prevents mental stagnation and boredom.'
      ],
      brainstormingCons: [
        'Uprooting weakens long-term family support structures and childhood friendship circles.',
        'Moving is financially costly and emotionally taxing.'
      ]
    }
  ]
};

// Build topics 16 to 31 file
const topics_16_to_31_content = `import { ToeflTopic } from '../../types';

export const TOPICS_16_TO_31: ToeflTopic[] = [
${JSON.stringify(topic18_data, null, 2)},
${JSON.stringify(topic20_data, null, 2)},
${JSON.stringify(topic27_data, null, 2)},
${JSON.stringify(topic31_data, null, 2)},
${topic81_str},
${topic185_str}
];
`;

fs.writeFileSync('src/data/toefl/topics_16_to_31.ts', topics_16_to_31_content, 'utf8');
console.log('Saved src/data/toefl/topics_16_to_31.ts');
