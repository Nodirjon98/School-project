const fs = require('fs');
const path = require('path');

// Read existing toeflEssaysData.ts
const existingContent = fs.readFileSync('src/data/toeflEssaysData.ts', 'utf8');
const lines = existingContent.split('\n');

const t1_start = 10;
const t2_start = 482;
const t7_start = 689;
const t8_start = 855;
const t9_start = 1041;
const t81_start = 1230;
const t185_start = 1409;
const t185_end = 1604;

const topic1_str = lines.slice(t1_start, t2_start - 1).join('\n');
const topic2_str = lines.slice(t2_start, t7_start - 1).join('\n');
const topic7_str = lines.slice(t7_start, t8_start - 1).join('\n');
const topic8_str = lines.slice(t8_start, t9_start - 1).join('\n');
const topic9_str = lines.slice(t9_start, t81_start - 1).join('\n');
const topic81_str = lines.slice(t81_start, t185_start - 1).join('\n');
const topic185_str = lines.slice(t185_start, t185_end + 1).join('\n');

// TOPIC 3: Food Preparation
const topic3_data = {
  id: 'topic-3',
  topicNumber: 3,
  shortTitle: 'Easier Food Preparation & Modern Life',
  category: 'technology',
  categoryName: 'Technology & Everyday Life',
  questionType: 'explanation',
  prompt: 'Nowadays, food has become easier to prepare. Has this change improved the way people live? Use specific reasons and examples to support your answer.',
  essays: [
    {
      id: 'essay-3-1',
      essayNumber: 1,
      title: 'Liberation from Culinary Drudgery & Expanded Human Horizons',
      score: 6.0,
      stance: 'agree',
      wordCount: 388,
      essayText: `Man, through the ages, has undergone monumental transformations, progressing from primitive hunting to an era where sustenance is conveniently accessible in supermarkets. Modern technological innovations, ranging from microwave ovens and hermetically sealed preservation to instant culinary ingredients, have drastically diminished the hours required to prepare nourishing meals. While some skeptics lament that fast meals erode traditional dining rituals and promote sedentary habits, I firmly contend that easier food preparation has substantially enhanced human existence by liberating precious time, expanding nutritional diversity, and fostering gender equality.

First and foremost, the primary blessing of accelerated food preparation is the liberation of human time. In previous generations, homemakers dedicated up to five or six hours daily to tending hearth fires, chopping raw ingredients, and simmering broths. Today, advanced kitchen appliances and pre-prepared produce reduce meal preparation to a fraction of that duration. This reclaimed time can now be invested in academic advancement, career building, artistic hobbies, and quality companionship with loved ones. For busy professionals and working parents, this temporal efficiency prevents chronic exhaustion and elevates overall mental well-being.

Furthermore, simplified food preparation has democratized healthy nutrition and diverse cuisine. Prior to modern preservation methods and rapid cooking methods, common families were restricted to seasonal, regional fare, often suffering nutritional deficiencies during harsh winters. Nowadays, flash-frozen vegetables, pasteurized dairy, and vacuum-sealed proteins allow ordinary citizens to effortlessly construct well-balanced, wholesome meals within twenty minutes, irrespective of geographic location or climate.

Finally, the simplification of culinary labor has served as a pivotal catalyst for social equality. Historically, the grueling burden of meal preparation fell almost exclusively upon women, confining them to domestic spheres and severely curtailing their educational opportunities. The ubiquity of instant meals and rapid cooking tools enabled women to break free from domestic servitude and enter the professional workforce en masse, thereby revolutionizing the global economy and family dynamics.

In conclusion, although society must remain vigilant against over-processed junk food, the advent of easier food preparation has indisputably improved human life. It has liberated mankind from arduous domestic chores, enriched our dietary palette, and accelerated societal emancipation.`,
      targetWords: [
        {
          id: 'tw-t3-1',
          word: 'sustenance',
          partOfSpeech: 'noun',
          phonetic: '/ˈsʌstənəns/',
          definition: 'Food and drink regarded as a source of strength; nourishment.',
          translationUz: 'tirikchilik ozuqasi, ozuqa, moddiy taʼminot',
          example: 'Progressing from primitive hunting to an era where sustenance is conveniently accessible.'
        },
        {
          id: 'tw-t3-2',
          word: 'diminished',
          partOfSpeech: 'verb',
          phonetic: '/dɪˈmɪnɪʃt/',
          definition: 'Made smaller or less in size, extent, or degree.',
          translationUz: 'kamaytirildi, qisqartirildi',
          example: 'Modern innovations have drastically diminished the hours required to prepare meals.'
        },
        {
          id: 'tw-t3-3',
          word: 'sedentary',
          partOfSpeech: 'adjective',
          phonetic: '/ˈsednteri/',
          definition: 'Tending to spend much time seated; somewhat inactive.',
          translationUz: 'kamharakat, oʻtroq',
          example: 'Skeptics argue convenience food promotes a sedentary lifestyle.'
        },
        {
          id: 'tw-t3-4',
          word: 'reclaimed',
          partOfSpeech: 'adjective',
          phonetic: '/rɪˈkleɪmd/',
          definition: 'Recovered or brought back for useful activity.',
          translationUz: 'qaytarib olingan, tejalgan',
          example: 'This reclaimed time can now be invested in academic advancement.'
        },
        {
          id: 'tw-t3-5',
          word: 'ubiquity',
          partOfSpeech: 'noun',
          phonetic: '/juːˈbɪkwəti/',
          definition: 'The state of being very common or appearing everywhere.',
          translationUz: 'hamma joyda uchrashlik, keng tarqalganlik',
          example: 'The ubiquity of instant meals enabled women to break free from domestic servitude.'
        },
        {
          id: 'tw-t3-6',
          word: 'arduous',
          partOfSpeech: 'adjective',
          phonetic: '/ˈɑːrdʒuəs/',
          definition: 'Involving or requiring strenuous effort; difficult and tiring.',
          translationUz: 'mashaqqatli, qiyin, ogʻir',
          example: 'It has liberated mankind from arduous domestic chores.'
        }
      ],
      phrases: [
        {
          id: 'ph-t3-1',
          phrase: 'break free from',
          type: 'phrasal_verb',
          meaning: 'To escape from a confining, oppressive, or restrictive condition.',
          translationUz: 'cheklovlardan ozod boʻlmoq, qutilmoq',
          example: 'Enabled women to break free from domestic servitude and enter the workforce.',
          contextNote: 'Powerful rhetorical verb phrase for sociopolitical essays.'
        },
        {
          id: 'ph-t3-2',
          phrase: 'en masse',
          type: 'idiomatic_expression',
          meaning: 'In a group; all together as a collective whole.',
          translationUz: 'ommaviy ravishda, yalpisiga',
          example: 'Women entered the professional workforce en masse.',
          contextNote: 'Sophisticated French loan phrase accepted in high-level academic writing.'
        },
        {
          id: 'ph-t3-3',
          phrase: 'temporal efficiency',
          type: 'collocation',
          meaning: 'The ability to accomplish tasks with minimal expenditure of time.',
          translationUz: 'vaqt tejamkorligi va samaradorligi',
          example: 'For busy professionals, this temporal efficiency prevents chronic exhaustion.',
          contextNote: 'C2-level academic synonym for "saving time".'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t3-1',
          phrase: 'Man, through the ages, has undergone',
          category: 'intro_thesis',
          categoryLabel: 'Historical Context Lead-in',
          function: 'Establishes a grand historical arc from primitive origins to modern sophistication.',
          translationUz: 'Insoniyat asrlar mobaynida ...dan oʻtib keldi',
          example: 'Man, through the ages, has undergone monumental transformations.'
        },
        {
          id: 'wc-t3-2',
          phrase: 'I firmly contend that',
          category: 'intro_thesis',
          categoryLabel: 'Stating Thesis Stance',
          function: 'Directly and unequivocally states the author’s primary thesis position.',
          translationUz: 'Men qatʼiy taʼkidlaymanki...',
          example: 'I firmly contend that easier food preparation has substantially enhanced human existence.'
        },
        {
          id: 'wc-t3-3',
          phrase: 'First and foremost, the primary blessing of',
          category: 'body_argument',
          categoryLabel: 'First Argument Introduction',
          function: 'Introduces the core primary benefit with persuasive rhetorical weight.',
          translationUz: 'Avvalo, ...ning eng asosiy neʼmati / afzalligi shundaki',
          example: 'First and foremost, the primary blessing of accelerated food preparation is the liberation of human time.'
        },
        {
          id: 'wc-t3-4',
          phrase: 'served as a pivotal catalyst for',
          category: 'cause_effect',
          categoryLabel: 'Causality & Impact',
          function: 'Describes how an innovation directly stimulated a major societal outcome.',
          translationUz: '...uchun hal qiluvchi turtki (katalizator) boʻlib xizmat qildi',
          example: 'The simplification of culinary labor has served as a pivotal catalyst for social equality.'
        },
        {
          id: 'wc-t3-5',
          phrase: 'society must remain vigilant against',
          category: 'conclusion',
          categoryLabel: 'Concession / Cautionary Note',
          function: 'Balances an enthusiastic argument with a pragmatic warning about health risks.',
          translationUz: 'jamiyat ...dan doimo ehtiyot boʻlishi va hushyor turishi lozim',
          example: 'Although society must remain vigilant against over-processed junk food, the advent of easier food preparation has indisputably improved human life.'
        }
      ],
      ideas: [
        {
          id: 'idea-t3-1',
          type: 'thesis',
          title: 'Easier food preparation dramatically elevates modern quality of life',
          anchorText: 'easier food preparation has substantially enhanced human existence by liberating precious time, expanding nutritional diversity, and fostering gender equality.',
          explanation: 'Frames food technology not merely as culinary convenience, but as a triple engine of temporal freedom, nutritional equity, and gender emancipation.',
          explanationUz: 'Oziq-ovqat tayyorlashning osonlashuvi nafaqat qulaylik, balki vaqtni tejash, toʻgʻri ovqatlanish imkoniyati va ayollarning jamiyatdagi tengligini taʼminlovchi omildir.',
          scoreInsight: 'Demonstrates multi-dimensional argumentation (lifestyle, health, and gender sociopolitical history).',
          promptApplication: 'Transferable to any prompt asking about domestic technology, washing machines, or household automation.'
        },
        {
          id: 'idea-t3-2',
          type: 'main_argument',
          title: 'Temporal liberation enables career, academic, and personal pursuits',
          anchorText: 'This reclaimed time can now be invested in academic advancement, career building, artistic hobbies, and quality companionship with loved ones.',
          explanation: 'Reclaims hours previously lost to kitchen labor and redirects them into high-value cognitive and emotional development.',
          explanationUz: 'Oshxonadagi ogʻir mehnatdan tejalgan vaqt taʼlim olish, martaba qurish va oilaga gʻamxoʻrlik qilishga yoʻnaltiriladi.',
          scoreInsight: 'Uses concrete contrasts between historic multi-hour chores and modern 20-minute prep.',
          promptApplication: 'Use whenever discussing automation, modern labor-saving devices, or work-life balance.'
        },
        {
          id: 'idea-t3-3',
          type: 'main_argument',
          title: 'Catalyst for female workforce participation and social parity',
          anchorText: 'enabled women to break free from domestic servitude and enter the professional workforce en masse',
          explanation: 'Elevates an everyday topic into profound socio-economic history: kitchen labor emancipation unlocked half the human talent pool.',
          explanationUz: 'Oshxona mashaqqatining yengillashishi ayollarga uy yumushlaridan ozod boʻlib, taʼlim olish va mehnat bozoriga kirish imkonini berdi.',
          scoreInsight: 'High-level sociological insight that instantly distinguishes band 6.0 candidates from average writers.',
          promptApplication: 'Applicable to prompts on historical changes, women in leadership, and technology in society.'
        }
      ],
      outline: {
        introduction: 'Historical shift from primitive hunting to modern supermarkets; thesis that easier preparation saves vital time, enhances health, and advances gender parity.',
        bodyPoints: [
          'Temporal efficiency: freeing 4-5 hours of daily kitchen toil for education, profession, and family care.',
          'Nutritional equity: refrigeration and flash-freezing enable balanced diets regardless of winter or geography.',
          'Socio-economic liberation: breaking the historic domestic burden on women, enabling widespread workforce participation.'
        ],
        conclusion: 'Concession acknowledging dietary dangers of processed snacks, balanced by the firm verdict that culinary ease has liberated humanity.'
      },
      brainstormingPros: [
        'Saves multiple hours daily for study, work, and personal development.',
        'Reduces reliance on seasonal availability, preventing vitamin deficiencies.',
        'Decreases domestic friction and encourages equal household division of labor.'
      ],
      brainstormingCons: [
        'Excessive reliance on ultra-processed meals containing high sodium and preservatives.',
        'Loss of traditional family bonding around long communal cooking rituals.'
      ]
    }
  ]
};

// TOPIC 4: Books vs Experience
const topic4_data = {
  id: 'topic-4',
  topicNumber: 4,
  shortTitle: 'Knowledge from Books vs Experience',
  category: 'education',
  categoryName: 'Education & Philosophy',
  questionType: 'preference',
  prompt: "It has been said, 'Not everything that is learned is contained in books.' Compare knowledge gained from experience with knowledge gained from books. In your opinion, which source is more important? Why?",
  essays: [
    {
      id: 'essay-4-1',
      essayNumber: 1,
      title: 'Theoretical Blueprints vs The Crucible of Experience',
      score: 6.0,
      stance: 'preference',
      wordCount: 412,
      essayText: `Books have long been revered as the immortal custodians of human wisdom, preserving centuries of scientific discoveries, literary brilliance, and philosophical discourse. However, a timeless adage rightly proclaims that not everything that is learned is contained within the printed page. While books provide the structural scaffolding of theoretical principles, experiential learning breathes vitality into those principles through direct trial, tactile sensation, and emotional resonance. While acknowledging the invaluable foundation provided by literature, I firmly argue that practical experience is the superior and more indispensable source of genuine knowledge.

On the one hand, academic literature is undeniably vital for establishing conceptual literacy and transmitting cumulative knowledge across generations. Through books, a novice engineer can absorb mathematical proofs calculated over centuries, and an aspiring physician can study the intricate anatomy of the human cardiovascular system without having to dissect a cadaver first. Books transcend the limits of mortal lifespan and geography, granting readers access to the greatest intellects of human civilization. Without this literary bedrock, every new generation would be condemned to reinvent the wheel in agonizing isolation.

On the other hand, theoretical comprehension remains dormant and sterile until tested in the crucible of real-world experience. Reading a manual on swimming or aviation cannot teach an individual how to stay afloat in churning currents or navigate atmospheric turbulence; such physical proficiencies demand sensory feedback, muscle memory, and instantaneous decision-making under stress. Furthermore, the profoundest facets of human existence—such as interpersonal empathy, leadership under adversity, and resilience in the face of bereavement—cannot be synthesized through dry prose. They must be endured, felt, and internalized through personal trials.

Ultimately, experience acts as the supreme filter that validates or refutes book-learned doctrine. Theoretical hypotheses frequently fail when confronted by unpredictable human behaviors and turbulent market conditions. A brilliant economist who has only read treatises may miscalculate human panic during a financial panic, whereas a seasoned entrepreneur who has weathered bankruptcies possesses instinctual acumen that no textbook can impart.

In conclusion, while books furnish humanity with indispensable theoretical blueprints, experiential knowledge remains the preeminent source of true competence and emotional maturity. As the ancient philosopher Aristotle observed, what we must learn to do, we learn by doing.`,
      targetWords: [
        {
          id: 'tw-t4-1',
          word: 'custodians',
          partOfSpeech: 'noun',
          phonetic: '/kʌˈstoʊdiənz/',
          definition: 'Persons or entities having responsibility for protecting or preserving something.',
          translationUz: 'qoʻriqchilari, saqlovchilari, himoyachilari',
          example: 'Books have long been revered as the immortal custodians of human wisdom.'
        },
        {
          id: 'tw-t4-2',
          word: 'scaffolding',
          partOfSpeech: 'noun',
          phonetic: '/ˈskæfəldɪŋ/',
          definition: 'A temporary supporting structure or framework that facilitates learning.',
          translationUz: 'asosiy tayanch tizimi, qolip, fundament',
          example: 'Books provide the structural scaffolding of theoretical principles.'
        },
        {
          id: 'tw-t4-3',
          word: 'tactile',
          partOfSpeech: 'adjective',
          phonetic: '/ˈtæktaɪl/',
          definition: 'Connected with or perceived through the sense of touch.',
          translationUz: 'sezilarli, qoʻl bilan ushlab his qilinadigan',
          example: 'Experiential learning breathes vitality through direct trial and tactile sensation.'
        },
        {
          id: 'tw-t4-4',
          word: 'crucible',
          partOfSpeech: 'noun',
          phonetic: '/ˈkruːsɪbl/',
          definition: 'A severe test or trial that shapes and transforms someone.',
          translationUz: 'sinov maydoni, qizgʻin sinov maydoni',
          example: 'Theoretical comprehension remains dormant until tested in the crucible of real experience.'
        },
        {
          id: 'tw-t4-5',
          word: 'acumen',
          partOfSpeech: 'noun',
          phonetic: '/ˈækjəmən/',
          definition: 'The ability to make good judgments and quick decisions.',
          translationUz: 'oʻtkir zehniy farosat, tadbirkorlik uquvi',
          example: 'A seasoned entrepreneur possesses instinctual acumen that no textbook can impart.'
        },
        {
          id: 'tw-t4-6',
          word: 'preeminent',
          partOfSpeech: 'adjective',
          phonetic: '/priːˈemɪnənt/',
          definition: 'Surpassing all others; very distinguished in some way.',
          translationUz: 'eng ustun, birinchi darajali, benazir',
          example: 'Experiential knowledge remains the preeminent source of true competence.'
        }
      ],
      phrases: [
        {
          id: 'ph-t4-1',
          phrase: 'reinvent the wheel',
          type: 'idiomatic_expression',
          meaning: 'To waste effort trying to create something that already exists and works well.',
          translationUz: 'allaqachon yaratilgan narsani qaytadan oʻylab topishga behuda urinmoq',
          example: 'Without books, every generation would be condemned to reinvent the wheel.'
        },
        {
          id: 'ph-t4-2',
          phrase: 'stay afloat',
          type: 'idiomatic_expression',
          meaning: 'Literally to remain above water; metaphorically to survive difficult situations.',
          translationUz: 'suv yuzida suzib qolmoq, qiyinchilikda chidab turmoq',
          example: 'Cannot teach an individual how to stay afloat in churning currents.'
        },
        {
          id: 'ph-t4-3',
          phrase: 'tested in the crucible of',
          type: 'collocation',
          meaning: 'Subjected to severe real-world challenges that demonstrate true quality.',
          translationUz: '...ning qizgʻin sinovlaridan oʻtgan',
          example: 'Tested in the crucible of real-world experience.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t4-1',
          phrase: 'Books have long been revered as the',
          category: 'intro_thesis',
          categoryLabel: 'Historical Reverence Opening',
          function: 'Graciously acknowledges the established authority of books before pivoting to personal stance.',
          translationUz: 'Kitoblar azaldan ... sifatida ulugʻlanib kelingan',
          example: 'Books have long been revered as the immortal custodians of human wisdom.'
        },
        {
          id: 'wc-t4-2',
          phrase: 'breathes vitality into',
          category: 'body_argument',
          categoryLabel: 'Metaphorical Illustration',
          function: 'Contrasts abstract static theory with dynamic real-world implementation.',
          translationUz: '...ga tiriklik va hayotiy nafas bagʻishlaydi',
          example: 'Experiential learning breathes vitality into theoretical principles through direct trial.'
        },
        {
          id: 'wc-t4-3',
          phrase: 'Without this literary bedrock, every new generation would',
          category: 'contrast_concession',
          categoryLabel: 'Concession Analysis',
          function: 'Examines the counterfactual scenario to illustrate the legitimate value of books.',
          translationUz: 'Ushbu adabiy poydevorsiz har bir yangi avlod ...ga mahkum boʻlardi',
          example: 'Without this literary bedrock, every new generation would be condemned to reinvent the wheel.'
        },
        {
          id: 'wc-t4-4',
          phrase: 'acts as the supreme filter that validates or refutes',
          category: 'body_argument',
          categoryLabel: 'Analytical Assessment',
          function: 'Positions real-world outcome as the ultimate test of hypothetical truth.',
          translationUz: '...ni tasdiqlaydigan yoki rad etadigan oliy mezon (filtr) vazifasini bajaradi',
          example: 'Ultimately, experience acts as the supreme filter that validates or refutes book-learned doctrine.'
        }
      ],
      ideas: [
        {
          id: 'idea-t4-1',
          type: 'thesis',
          title: 'Books provide theoretical scaffolding, but experience is paramount',
          anchorText: 'practical experience is the superior and more indispensable source of genuine knowledge.',
          explanation: 'Presents a sophisticated synthesized position: books supply the architectural blueprints, but experiential practice creates functional mastery.',
          explanationUz: 'Kitoblar nazariy asosni bersa-da, amaliy tajriba insonning haqiqiy mahorati va yetukligini shakllantiruvchi eng oliy manbadir.',
          scoreInsight: 'Avoids a one-sided attack on books by granting them legitimate foundational credit.',
          promptApplication: 'Ideal for prompts asking about theory vs practice, classroom vs internship, or formal vs informal education.'
        },
        {
          id: 'idea-t4-2',
          type: 'main_argument',
          title: 'Emotional intelligence and crisis management cannot be read into existence',
          anchorText: 'interpersonal empathy, leadership under adversity, and resilience in the face of bereavement—cannot be synthesized through dry prose.',
          explanation: 'Identifies human qualities (leadership, bereavement, empathy) that fundamentally resist textual transmission.',
          explanationUz: 'Empatiya, qiyinchilik paytidagi yetakchilik va musibatdagi sabr-toqatni faqat hayotiy sinovlar orqali oʻrganish mumkin.',
          scoreInsight: 'Demonstrates psychological depth that elevates the essay beyond mechanical examples.',
          promptApplication: 'Use in essays about leadership qualities, emotional maturity, or character formation.'
        }
      ],
      outline: {
        introduction: 'Books as custodians of wisdom vs the proverb of living experience; thesis that while books give blueprints, experience delivers vital competence.',
        bodyPoints: [
          'Value of books: historical continuity, anatomy and science without reinventing the wheel.',
          'Crucible of experience: physical reflexes, tactile muscle memory, and emotional resilience cannot be read.',
          'Experience as ultimate arbiter: real-world markets and crisis situations test theoretical assumptions.'
        ],
        conclusion: 'Synthesis referencing Aristotle: theoretical blueprints are essential, but true mastery is achieved by doing.'
      },
      brainstormingPros: [
        'Builds instinctual reflexes, muscle memory, and situational adaptability.',
        'Develops deep emotional wisdom, empathy, and resilience under real stress.',
        'Prevents abstract delusions by constantly testing assumptions against reality.'
      ],
      brainstormingCons: [
        'Trial-and-error can be painfully slow, perilous, or financially devastating.',
        'Lacks historical breadth without the recorded wisdom of thousands of predecessors.'
      ]
    }
  ]
};

// TOPIC 5: Large Factory Near Community
const topic5_data = {
  id: 'topic-5',
  topicNumber: 5,
  shortTitle: 'Factory in Community: Economy vs Environment',
  category: 'society',
  categoryName: 'Environment & Community Development',
  questionType: 'agree_disagree',
  prompt: 'A company has announced that it wishes to build a large factory near your community. Discuss the advantages and disadvantages of this new influence on your community. Do you support or oppose the factory? Explain your position.',
  essays: [
    {
      id: 'essay-5-1',
      essayNumber: 1,
      title: 'Preserving Civic Harmony Over Short-Sighted Industrial Expansion',
      score: 6.0,
      stance: 'disagree',
      wordCount: 405,
      essayText: `The prospective establishment of a massive manufacturing enterprise in the immediate periphery of a tranquil residential neighborhood invariably precipitates passionate civic debate. Advocates of industrial development celebrate the influx of capital and local job creation, while conservationists and resident families voice grave trepidation concerning toxic emissions, traffic gridlock, and deteriorated quality of life. Having meticulously weighed both sides of this dilemma, I vigorously oppose the construction of this factory, as its irreversible ecological harm and civic disruption far eclipse its ephemeral economic windfalls.

To be sure, constructing a factory yields tangible commercial perks that cannot be dismissed out of hand. A manufacturing plant generates hundreds of direct operational positions, ranging from manual assembly lines to administrative engineering roles. Furthermore, local suppliers, catering services, and retail shops might experience a modest surge in patronage as commuting laborers patronize surrounding commercial establishments. The resulting municipal tax revenues could theoretically be channeled into improving community roads and funding neighborhood educational facilities.

However, these economic incentives are thoroughly eclipsed by catastrophic environmental externalities. Manufacturing plants inevitably generate voluminous industrial effluents, air pollutants, and non-biodegradable hazardous wastes. Toxic emissions degrade local air quality, exacerbating childhood asthma and respiratory illnesses among elderly residents. Moreover, toxic seepage risks contaminating subterranean aquifers, endangering the community's domestic water reserves. The clean air, lush parks, and pristine serenity that currently attract young families to our enclave would be irrevocably degraded.

Equally detrimental is the inevitable collapse of our civic tranquility and infrastructural integrity. Our neighborhood streets were engineered for domestic vehicles, not fleets of heavy articulated diesel trucks rumbling throughout all hours of the night. The resulting noise pollution, incessant vibrations, and chronic traffic congestion would turn peaceful residential avenues into perilous logistical corridors. Property values in the vicinity would plummet as discerning homebuyers flee industrial blight, effectively erasing the life savings invested by residents in their family homes.

In conclusion, although the promise of municipal revenue and employment possesses superficial allure, the long-term human cost is unacceptably exorbitant. A community’s primary mandate is the health, safety, and tranquility of its citizenry. Therefore, municipal planners should steer industrial conglomerates toward designated offshore industrial parks rather than polluting peaceful residential sanctuaries.`,
      targetWords: [
        {
          id: 'tw-t5-1',
          word: 'precipitates',
          partOfSpeech: 'verb',
          phonetic: '/prɪˈsɪpɪteɪts/',
          definition: 'Causes an event or situation to happen suddenly or unexpectedly.',
          translationUz: 'keltirib chiqaradi, tezlashtiradi, qoʻzgʻaydi',
          example: 'Invariably precipitates passionate civic debate.'
        },
        {
          id: 'tw-t5-2',
          word: 'trepidation',
          partOfSpeech: 'noun',
          phonetic: '/ˌtrepɪˈdeɪʃn/',
          definition: 'A feeling of fear or agitation about something that may happen.',
          translationUz: 'xavotir, qoʻrquv, bezovtalik',
          example: 'Resident families voice grave trepidation concerning toxic emissions.'
        },
        {
          id: 'tw-t5-3',
          word: 'effluents',
          partOfSpeech: 'noun',
          phonetic: '/ˈefluənts/',
          definition: 'Liquid waste or sewage discharged into a river or the sea.',
          translationUz: 'sanoat chiqindi suvlari, oqova suvlar',
          example: 'Manufacturing plants generate voluminous industrial effluents and hazardous wastes.'
        },
        {
          id: 'tw-t5-4',
          word: 'aquifers',
          partOfSpeech: 'noun',
          phonetic: '/ˈækwɪfərz/',
          definition: 'A body of permeable rock that can contain or transmit groundwater.',
          translationUz: 'yerosti suvli qatlamlari',
          example: 'Toxic seepage risks contaminating subterranean aquifers.'
        },
        {
          id: 'tw-t5-5',
          word: 'plummet',
          partOfSpeech: 'verb',
          phonetic: '/ˈplʌmɪt/',
          definition: 'To fall or drop straight down at high speed.',
          translationUz: 'keskin pasaymoq, qulamoq',
          example: 'Property values in the vicinity would plummet as buyers flee industrial blight.'
        },
        {
          id: 'tw-t5-6',
          word: 'exorbitant',
          partOfSpeech: 'adjective',
          phonetic: '/ɪɡˈzɔːrbɪtənt/',
          definition: 'Unreasonably high or excessive in price, demand, or toll.',
          translationUz: 'haddan ziyod yuqori, oʻta qimmatga tushadigan',
          example: 'The long-term human cost is unacceptably exorbitant.'
        }
      ],
      phrases: [
        {
          id: 'ph-t5-1',
          phrase: 'out of hand',
          type: 'idiomatic_expression',
          meaning: 'Without giving something serious thought or consideration.',
          translationUz: 'oʻylab koʻrmasdan darhol rad etib',
          example: 'Yields commercial perks that cannot be dismissed out of hand.'
        },
        {
          id: 'ph-t5-2',
          phrase: 'subterranean aquifers',
          type: 'collocation',
          meaning: 'Underground natural reservoirs containing precious fresh drinking water.',
          translationUz: 'yerosti toza ichimlik suvi qatlamlari',
          example: 'Contaminating subterranean aquifers, endangering domestic water reserves.'
        },
        {
          id: 'ph-t5-3',
          phrase: 'industrial blight',
          type: 'collocation',
          meaning: 'The ugly, polluted visual and physical deterioration caused by factories.',
          translationUz: 'sanoatlashuv keltirib chiqargan xarobalashuv va ifloslanish',
          example: 'Discerning homebuyers flee industrial blight, eroding property values.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t5-1',
          phrase: 'Having meticulously weighed both sides of this dilemma, I',
          category: 'intro_thesis',
          categoryLabel: 'Balanced Stance Thesis',
          function: 'Signals that the author considered counterarguments thoroughly before choosing a side.',
          translationUz: 'Ushbu muammoning ikki tomonini chuqur tahlil qilib, men...',
          example: 'Having meticulously weighed both sides of this dilemma, I vigorously oppose the construction of this factory.'
        },
        {
          id: 'wc-t5-2',
          phrase: 'To be sure, constructing a factory yields',
          category: 'contrast_concession',
          categoryLabel: 'Concession Transition',
          function: 'Admits the valid economic counterargument with formal rhetorical poise.',
          translationUz: 'Shubhasizki, zavod qurilishi ... beradi',
          example: 'To be sure, constructing a factory yields tangible commercial perks.'
        },
        {
          id: 'wc-t5-3',
          phrase: 'are thoroughly eclipsed by catastrophic',
          category: 'body_argument',
          categoryLabel: 'Refutation Power',
          function: 'Overcomes the previous concession by showing the massive scale of disadvantages.',
          translationUz: '...katastrofik zararlar soyasida butunlay yoʻqqa chiqadi',
          example: 'However, these economic incentives are thoroughly eclipsed by catastrophic environmental externalities.'
        },
        {
          id: 'wc-t5-4',
          phrase: 'A community’s primary mandate is',
          category: 'conclusion',
          categoryLabel: 'Ethical Principle Closure',
          function: 'Roots the conclusion in an unassailable moral principle of government.',
          translationUz: 'Har qanday jamoatning birlamchi burchi bu...',
          example: 'A community’s primary mandate is the health, safety, and tranquility of its citizenry.'
        }
      ],
      ideas: [
        {
          id: 'idea-t5-1',
          type: 'thesis',
          title: 'Ecological destruction and civic ruin outweigh short-term economic gains',
          anchorText: 'I vigorously oppose the construction of this factory, as its irreversible ecological harm and civic disruption far eclipse its ephemeral economic windfalls.',
          explanation: 'Clear thesis balancing conceded employment opportunities against long-term toxic hazards and housing devaluation.',
          explanationUz: 'Zavod keltiradigan vaqtinchalik iqtisodiy foydadan koʻra, uning atrof-muhitga, sogʻlikka va tinchlikka yetkazadigan zarari ancha ustundir.',
          scoreInsight: 'Contrasts "irreversible ecological harm" with "ephemeral economic windfalls" with academic elegance.',
          promptApplication: 'Crucial blueprint for any environmental vs industrial development prompt.'
        },
        {
          id: 'idea-t5-2',
          type: 'main_argument',
          title: 'Infrastructure strain, heavy trucking, and real estate depreciation',
          anchorText: 'turn peaceful residential avenues into perilous logistical corridors. Property values in the vicinity would plummet',
          explanation: 'Examines tangible practical impacts: road destruction by diesel trucks, nocturnal noise pollution, and devastating home equity loss.',
          explanationUz: 'Katta yuk mashinalari harakati koʻchalarni xavfli yoʻlakka aylantiradi va aholining uylari narxi keskin tushib ketishiga sabab boʻladi.',
          scoreInsight: 'Provides concrete municipal and logistical details rather than vague abstractions.',
          promptApplication: 'Useful in prompts on urban zoning, highway construction, or local community projects.'
        }
      ],
      outline: {
        introduction: 'The tension between industrial capital and residential peace; thesis firmly opposing the factory due to environmental and infrastructural damage.',
        bodyPoints: [
          'Concession on advantages: jobs created, local retail boosted, and municipal tax collection.',
          'Catastrophic environmental toll: toxic airborne effluents, respiratory illnesses, and aquifer contamination.',
          'Infrastructural collapse and economic loss: heavy diesel trucks destroying serenity and plunging real estate values.'
        ],
        conclusion: 'The ethical mandate of community leadership is citizen health, urging factories into isolated industrial zones.'
      },
      brainstormingPros: [
        'Creates hundreds of steady manufacturing, logistics, and managerial jobs.',
        'Boosts municipal tax revenues for public schools, parks, and roads.',
        'Provides indirect business for local lunch diners, stores, and suppliers.'
      ],
      brainstormingCons: [
        'Air, ground, and water pollution causing severe respiratory ailments.',
        'Nocturnal noise and heavy diesel trucking disrupting neighborhood safety.',
        'Significant depreciation of nearby residential property values.'
      ]
    }
  ]
};

// Build topics 1 to 5 file
const topics_1_to_5_content = `import { ToeflTopic } from '../../types';

export const TOPICS_1_TO_5: ToeflTopic[] = [
${topic1_str},
${topic2_str},
${JSON.stringify(topic3_data, null, 2)},
${JSON.stringify(topic4_data, null, 2)},
${JSON.stringify(topic5_data, null, 2)}
];
`;

fs.writeFileSync('src/data/toefl/topics_1_to_5.ts', topics_1_to_5_content, 'utf8');
console.log('Saved src/data/toefl/topics_1_to_5.ts');
