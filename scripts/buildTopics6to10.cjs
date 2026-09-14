const fs = require('fs');

// Read existing toeflEssaysData.ts
const existingContent = fs.readFileSync('src/data/toeflEssaysData.ts', 'utf8');
const lines = existingContent.split('\n');

const t7_start = 689;
const t8_start = 855;
const t9_start = 1041;
const t81_start = 1230;

const topic7_str = lines.slice(t7_start, t8_start - 1).join('\n');
const topic8_str = lines.slice(t8_start, t9_start - 1).join('\n');
const topic9_str = lines.slice(t9_start, t81_start - 1).join('\n');

// TOPIC 6: Hometown change
const topic6_data = {
  id: 'topic-6',
  topicNumber: 6,
  shortTitle: 'One Pivotal Change to Hometown',
  category: 'society',
  categoryName: 'Urban Development & Society',
  questionType: 'hypothetical',
  prompt: 'If you could change one important thing about your hometown, what would you change? Use reasons and specific examples to support your answer.',
  essays: [
    {
      id: 'essay-6-1',
      essayNumber: 1,
      title: 'Revolutionizing Public Transit to Reclaim Civic Vitality',
      score: 6.0,
      stance: 'preference',
      wordCount: 398,
      essayText: `Every individual harbors a profound affection for the place of their birth, yet no municipality is immune to the structural deficiencies spawned by rapid urban expansion. My hometown, once a charming provincial hub, has devolved over recent decades into a gridlocked metropolitan sprawl dominated by private automobiles. If I were granted the miraculous authority to execute one pivotal metamorphosis in my hometown, I would comprehensively overhaul its obsolete public transit system by constructing an electrified, high-frequency light rail network. This transformative reform would alleviate crippling vehicular traffic, drastically curb greenhouse emissions, and bridge socio-economic divides across our city.

First and foremost, a state-of-the-art mass transit network would dismantle the nightmare of chronic traffic congestion. Currently, tens of thousands of citizens endure two to three hours of agonizing delay each day, trapped in bumper-to-bumper gridlock along obsolete arterial highways. This unproductive commuting squanders millions in economic productivity and induces severe psychological distress. An efficient light rail system, operating on dedicated subterranean and elevated tracks, would whisk commuters swiftly between residential peripheries and downtown commercial epicenters in a matter of minutes, thereby liberating commuters from automotive captivity.

Equally paramount is the environmental imperative. The dense concentration of fossil-fuel combustion vehicles in our city basin traps a suffocating blanket of photochemical smog, provoking alarming rates of pediatric asthma and chronic pulmonary conditions. Transitioning our populace toward an emissions-free, renewable-powered electric rail network would purify our ambient air, revitalize urban biodiversity, and restore the crystalline blue skies that once characterized our municipal valley.

Finally, modernized public transportation represents an indispensable instrument for social equity. In our automobile-dependent society, individuals who cannot afford the exorbitant expenses of vehicle maintenance, insurance, and fuel—particularly students, low-wage laborers, and pensioners—are geographically marginalized and severed from gainful employment opportunities. Affordable, universal transit connectivity integrates disadvantaged suburbs into the vibrant economic fabric of the city, affording every citizen dignified access to premier universities, medical complexes, and cultural arenas.

In conclusion, although urban infrastructure demands substantial upfront financial investment, transforming our obsolete transit network into a modern transit artery would revitalize my hometown. It would vanquish gridlock, cleanse our atmosphere, and forge a cohesive, egalitarian metropolis for generations to come.`,
      targetWords: [
        {
          id: 'tw-t6-1',
          word: 'metamorphosis',
          partOfSpeech: 'noun',
          phonetic: '/ˌmetəˈmɔːrfəsɪs/',
          definition: 'A change of the form or nature of a thing or person into a completely different one.',
          translationUz: 'tub burilish, tub oʻzgarish, metamorfoz',
          example: 'If I were granted authority to execute one pivotal metamorphosis in my hometown.'
        },
        {
          id: 'tw-t6-2',
          word: 'arterial',
          partOfSpeech: 'adjective',
          phonetic: '/ɑːrˈtɪriəl/',
          definition: 'Relating to an important, busy main route in a network of roads or railways.',
          translationUz: 'asosiy, markaziy, eng gavjum (yoʻllarga nisbatan)',
          example: 'Trapped in bumper-to-bumper gridlock along obsolete arterial highways.'
        },
        {
          id: 'tw-t6-3',
          word: 'whisk',
          partOfSpeech: 'verb',
          phonetic: '/wɪsk/',
          definition: 'To move someone or something quickly and smoothly.',
          translationUz: 'tezlik bilan olib oʻtmoq, yetkazmoq',
          example: 'Would whisk commuters swiftly between residential peripheries and downtown.'
        },
        {
          id: 'tw-t6-4',
          word: 'ambient',
          partOfSpeech: 'adjective',
          phonetic: '/ˈæmbiənt/',
          definition: 'Relating to the immediate surroundings of something; encircling.',
          translationUz: 'atrof-muhitdagi, atrofdagi',
          example: 'Electric rail network would purify our ambient air and revitalize biodiversity.'
        },
        {
          id: 'tw-t6-5',
          word: 'egalitarian',
          partOfSpeech: 'adjective',
          phonetic: '/ɪˌɡælɪˈteriən/',
          definition: 'Believing in or based on the principle that all people are equal and deserve equal rights.',
          translationUz: 'barcha uchun teng huquqli, adolatli jamiyatga asoslangan',
          example: 'Forge a cohesive, egalitarian metropolis for generations to come.'
        }
      ],
      phrases: [
        {
          id: 'ph-t6-1',
          phrase: 'bumper-to-bumper',
          type: 'idiomatic_expression',
          meaning: 'Very close together in a long line of cars moving very slowly.',
          translationUz: 'mashinalar tirbandligida bir-biriga taqalib',
          example: 'Trapped in bumper-to-bumper gridlock along obsolete highways.'
        },
        {
          id: 'ph-t6-2',
          phrase: 'severed from',
          type: 'phrasal_verb',
          meaning: 'Cut off or separated completely from something important.',
          translationUz: '...dan butunlay uzilib qolgan, ajralgan',
          example: 'Low-wage laborers are marginalized and severed from gainful employment.'
        },
        {
          id: 'ph-t6-3',
          phrase: 'photochemical smog',
          type: 'collocation',
          meaning: 'Air pollution produced by the action of sunlight on vehicle exhaust emissions.',
          translationUz: 'fotokimyoviy quyuq tutun / zaharli smog',
          example: 'Traps a suffocating blanket of photochemical smog over our city.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t6-1',
          phrase: 'If I were granted the miraculous authority to execute',
          category: 'intro_thesis',
          categoryLabel: 'Hypothetical Wish Opener',
          function: 'Uses advanced second conditional to address hypothetical ETS prompts.',
          translationUz: 'Agar menga ...ni amalga oshirish vakolati berilganida edi, men...',
          example: 'If I were granted the miraculous authority to execute one pivotal metamorphosis, I would overhaul public transit.'
        },
        {
          id: 'wc-t6-2',
          phrase: 'dismantle the nightmare of chronic',
          category: 'body_argument',
          categoryLabel: 'Problem Solver Stance',
          function: 'Evokes strong visceral urgency regarding urban infrastructure bottlenecks.',
          translationUz: '...dek surunkali dahshatga chek qoʻygan (barham bergan) boʻlardi',
          example: 'A state-of-the-art mass transit network would dismantle the nightmare of chronic traffic congestion.'
        },
        {
          id: 'wc-t6-3',
          phrase: 'represents an indispensable instrument for',
          category: 'body_argument',
          categoryLabel: 'Societal Value Argument',
          function: 'Presents a policy proposal as a tool of democratic fairness.',
          translationUz: '...uchun ajralmas va zaruriy vosita hisoblanadi',
          example: 'Modernized public transportation represents an indispensable instrument for social equity.'
        }
      ],
      ideas: [
        {
          id: 'idea-t6-1',
          type: 'thesis',
          title: 'Comprehensive light rail transit overhaul solves traffic, pollution, and inequality',
          anchorText: 'This transformative reform would alleviate crippling vehicular traffic, drastically curb greenhouse emissions, and bridge socio-economic divides across our city.',
          explanation: 'Clear tripartite thesis covering practical commuting, environmental ecology, and social equity.',
          explanationUz: 'Zamonaviy temir yoʻl jamoat transporti tirbandlikni bartaraf etadi, havoni tozalaydi va kambagʻal qatlamga imkoniyat eshiklarini ochadi.',
          scoreInsight: 'Synthesizes economic, ecological, and civil rights dimensions into one concrete municipal policy.',
          promptApplication: 'Transferable to any city planning, hometown improvement, or government expenditure prompt.'
        },
        {
          id: 'idea-t6-2',
          type: 'main_argument',
          title: 'Transit as an equalizer for marginalized socio-economic citizens',
          anchorText: 'severed from gainful employment opportunities. Affordable, universal transit connectivity integrates disadvantaged suburbs into the vibrant economic fabric',
          explanation: 'Argues that lack of transit traps poor citizens in geographic poverty, while trains democratize upward mobility.',
          explanationUz: 'Avtomobil ololmaydigan talabalar va kam taʼminlangan aholi arzon transport orqali ish va oʻqish joylariga qulay qatnay oladi.',
          scoreInsight: 'Sophisticated socioeconomic framing that goes beyond simple "cars are bad" platitudes.',
          promptApplication: 'Use in essays about social inequality, urban poverty, or public services.'
        }
      ],
      outline: {
        introduction: 'Affection for hometown vs structural blight of traffic; thesis proposing an electric light rail network to solve congestion, pollution, and isolation.',
        bodyPoints: [
          'Decongesting roads: eliminating multi-hour commute delays and returning productive time to citizens.',
          'Atmospheric purification: slashing vehicle exhaust and lifting photochemical smog from the city basin.',
          'Socio-economic integration: granting marginalized non-car owners equitable access to jobs and universities.'
        ],
        conclusion: 'Upfront capital expense is dwarfed by multi-generational benefits in health, economic vitality, and civic harmony.'
      },
      brainstormingPros: [
        'Eliminates gridlock and saves millions of wasted worker hours.',
        'Drastically reduces carbon emissions and respiratory illnesses.',
        'Provides affordable mobility for low-income citizens and students.'
      ],
      brainstormingCons: [
        'Massive municipal expenditure and bond debt required for construction.',
        'Years of disruptive construction causing temporary business losses.'
      ]
    }
  ]
};

// TOPIC 10: Hard Work vs Luck
const topic10_data = {
  id: 'topic-10',
  topicNumber: 10,
  shortTitle: 'Hard Work vs Luck in Success',
  category: 'personal',
  categoryName: 'Success, Ambition & Ethics',
  questionType: 'agree_disagree',
  prompt: 'When people succeed, it is because of hard work. Luck has nothing to do with success. Do you agree or disagree with the quotation above? Use specific reasons and examples to explain your position.',
  essays: [
    {
      id: 'essay-10-1',
      essayNumber: 1,
      title: 'The Convergence of Relentless Diligence and Serendipity',
      score: 6.0,
      stance: 'disagree',
      wordCount: 420,
      essayText: `The correlation between human industry and fortuitous circumstances has captivated philosophers and biographers for millennia. A popular meritocratic doctrine insists that human achievement is solely the product of sweat, tenacity, and relentless discipline, asserting dogmatically that luck plays zero role in personal success. While diligent dedication is indisputably the indispensable engine of accomplishment, dismissing fortune entirely is an arrogant oversimplification of reality. I strongly disagree with the prompt’s absolute assertion, maintaining that monumental success is an intricate alchemy where unyielding preparation intersects with fortunate timing, geographic privilege, and serendipitous opportunities.

First and foremost, one cannot oversee the immense impact of biological and socio-economic lottery upon one’s trajectory. No individual chooses their country of birth, parental wealth, health endowment, or the historical epoch into which they are born. A child born to impoverished agrarian parents in a war-ravaged region may possess the intellectual brilliance of Albert Einstein and the work ethic of Thomas Edison, yet remain illiterate due to lack of schools and nutrition. Conversely, an individual born into an affluent society with stable governance and elite patronage begins life with colossal advantages that are purely the consequence of fortunate circumstance.

Furthermore, commercial history illuminates how serendipitous timing frequently dictates whether brilliant labor flourishes or perishes. Countless pioneering entrepreneurs have worked eighteen-hour days creating technologically advanced inventions, only to suffer ruin because the market infrastructure was premature. Consider tech pioneers like Bill Gates or Steve Jobs; while their intellect and work ethic were legendary, they themselves acknowledged their extraordinary good fortune to be born in the precise decade when computing components became miniaturized, in a region with elite computing laboratories accessible to teenagers. Hard work without fertile historical timing yields frustration rather than triumph.

Nevertheless, it is critical to emphasize that fortune alone is impotent without prepared competence. Luck merely flings open a fleeting doorway of opportunity; only the disciplined, hardworking individual possesses the stamina, technical prowess, and courage to cross the threshold and capitalize upon it. As the Roman philosopher Seneca famously observed, luck is what happens when preparation meets opportunity.

In conclusion, although steadfast diligence remains the cardinal bedrock of human achievement, asserting that luck has nothing to do with success is a blind denial of life’s complexity. True greatness requires both the humility to honor the blessings of fortunate timing and the grit to master one’s craft.`,
      targetWords: [
        {
          id: 'tw-t10-1',
          word: 'fortuitous',
          partOfSpeech: 'adjective',
          phonetic: '/fɔːrˈtuːɪtəs/',
          definition: 'Happening by chance or fortune rather than by intention, often with a lucky outcome.',
          translationUz: 'tasodifiy, baxtli tasodif tufayli sodir boʻlgan',
          example: 'The correlation between human industry and fortuitous circumstances.'
        },
        {
          id: 'tw-t10-2',
          word: 'dogmatically',
          partOfSpeech: 'adverb',
          phonetic: '/dɔːɡˈmætɪkli/',
          definition: 'In a manner that lays down principles as undeniably true, without consideration of evidence.',
          translationUz: 'koʻr-koʻrona, qatʼiy va mutlaq tarzda',
          example: 'Asserting dogmatically that luck plays zero role in personal success.'
        },
        {
          id: 'tw-t10-3',
          word: 'alchemy',
          partOfSpeech: 'noun',
          phonetic: '/ˈælkəmi/',
          definition: 'A seemingly magical process of transformation, creation, or combination.',
          translationUz: 'sehrli uygʻunlik, oʻzgartiruvchi birikma',
          example: 'Monumental success is an intricate alchemy where preparation intersects with timing.'
        },
        {
          id: 'tw-t10-4',
          word: 'agrarian',
          partOfSpeech: 'adjective',
          phonetic: '/əˈɡreriən/',
          definition: 'Relating to cultivated land or the cultivation of land; agricultural.',
          translationUz: 'qishloq xoʻjaligiga oid, dehqonchilikka xos',
          example: 'A child born to impoverished agrarian parents in a war-torn region.'
        },
        {
          id: 'tw-t10-5',
          word: 'impotent',
          partOfSpeech: 'adjective',
          phonetic: '/ˈɪmpətənt/',
          definition: 'Unable to take effective action; helpless or powerless.',
          translationUz: 'kuchsiz, nochor, amalda natijasiz',
          example: 'Fortune alone is impotent without prepared competence.'
        },
        {
          id: 'tw-t10-6',
          word: 'cardinal',
          partOfSpeech: 'adjective',
          phonetic: '/ˈkɑːrdɪnl/',
          definition: 'Of the greatest importance; fundamental.',
          translationUz: 'eng asosiy, eng muhim, poydevoriy',
          example: 'Steadfast diligence remains the cardinal bedrock of human achievement.'
        }
      ],
      phrases: [
        {
          id: 'ph-t10-1',
          phrase: 'flings open',
          type: 'idiomatic_expression',
          meaning: 'To open something suddenly, wide, and with dramatic force.',
          translationUz: 'keng ochib yubormoq, ochib tashlamoq',
          example: 'Luck merely flings open a fleeting doorway of opportunity.'
        },
        {
          id: 'ph-t10-2',
          phrase: 'cross the threshold',
          type: 'idiomatic_expression',
          meaning: 'To enter a new stage, place, or level of attainment.',
          translationUz: 'ostonani bosib oʻtmoq, imkoniyatdan dadil foydalanmoq',
          example: 'Possesses the stamina to cross the threshold and capitalize upon it.'
        },
        {
          id: 'ph-t10-3',
          phrase: 'socio-economic lottery',
          type: 'collocation',
          meaning: 'The unchosen circumstances of birth (wealth, country, genetics, and era).',
          translationUz: 'tugʻilishdagi ijtimoiy-iqtisodiy omad lotereyasi',
          example: 'One cannot oversee the immense impact of the socio-economic lottery upon one’s trajectory.'
        }
      ],
      writingChunks: [
        {
          id: 'wc-t10-1',
          phrase: 'While diligent dedication is indisputably the',
          category: 'contrast_concession',
          categoryLabel: 'Nuanced Concession Hook',
          function: 'Validates hard work before demonstrating why luck cannot be excluded.',
          translationUz: 'Garchi tinimsiz mehnat shubhasiz ... boʻlsa-da, ...',
          example: 'While diligent dedication is indisputably the indispensable engine of accomplishment, dismissing fortune is an arrogant oversimplification.'
        },
        {
          id: 'wc-t10-2',
          phrase: 'One cannot oversee the immense impact of',
          category: 'body_argument',
          categoryLabel: 'Structural Evidence Stem',
          function: 'Directs reader attention to an undeniable systemic truth.',
          translationUz: '...ning ulkan taʼsirini aslo koʻrmaslikka olib boʻlmaydi',
          example: 'First and foremost, one cannot oversee the immense impact of biological and socio-economic lottery.'
        },
        {
          id: 'wc-t10-3',
          phrase: 'Hard work without fertile historical timing yields',
          category: 'cause_effect',
          categoryLabel: 'Consequence Synthesis',
          function: 'Synthesizes the dependency of labor upon favorable external conditions.',
          translationUz: 'Tarixiy vaqt toʻgʻri kelmagan sharoitdagi mashaqqatli mehnat ... keltiradi',
          example: 'Hard work without fertile historical timing yields frustration rather than triumph.'
        },
        {
          id: 'wc-t10-4',
          phrase: 'luck is what happens when preparation meets opportunity',
          category: 'conclusion',
          categoryLabel: 'Philosophical Axiom',
          function: 'Cites Seneca’s classical wisdom to deliver a memorable rhetorical climax.',
          translationUz: 'Omad — bu puxta tayyorgarlik va qulay imkoniyat uchrashganda roʻy beradi',
          example: 'As the Roman philosopher Seneca famously observed, luck is what happens when preparation meets opportunity.'
        }
      ],
      ideas: [
        {
          id: 'idea-t10-1',
          type: 'thesis',
          title: 'Success is an intricate alchemy where unyielding preparation meets lucky timing and circumstance',
          anchorText: 'monumental success is an intricate alchemy where unyielding preparation intersects with fortunate timing, geographic privilege, and serendipitous opportunities.',
          explanation: 'Rejects simplistic extremes (pure meritocracy vs fatalism), proposing that luck provides the open door while discipline walks through it.',
          explanationUz: 'Muvaffaqiyat — bu faqat mehnat yoki faqat omad emas, balki tinimsiz mehnatning qulay vaqt, muhit va imkoniyatlar bilan sehrli uygʻunlashuvidir.',
          scoreInsight: 'Demonstrates dialectical reasoning, the highest hallmark of ETS band 6.0 scoring.',
          promptApplication: 'Transferable to any prompt regarding fame, talent vs effort, wealth inequality, or athletic mastery.'
        },
        {
          id: 'idea-t10-2',
          type: 'main_argument',
          title: 'The birth lottery and historical epoch determine the baseline of possibilities',
          anchorText: 'A child born to impoverished agrarian parents in a war-ravaged region may possess the intellectual brilliance of Albert Einstein... yet remain illiterate',
          explanation: 'Powerful contrast between unchosen birth environments and inherited aristocratic/stable advantages.',
          explanationUz: 'Qashshoqlik va urushda tugʻilgan bola qanchalik iqtidorli va mehnatsevar boʻlmasin, imkoniyatlar yetishmasligidan chetda qolib ketishi mumkin.',
          scoreInsight: 'Concretizes abstract philosophy with vivid human scenarios.',
          promptApplication: 'Use in sociology, education access, and global opportunity prompts.'
        }
      ],
      outline: {
        introduction: 'Meritocratic myth of 100% hard work; thesis that extraordinary triumph is the synthesis of unyielding labor and fortunate external circumstances.',
        bodyPoints: [
          'The birth lottery: unchosen geography, economic status, and genetics setting the initial playing field.',
          'Historical serendipity: pioneers like Gates and Jobs required the advent of microchips at the exact moment of their youth.',
          'The necessity of grit: luck is useless without the preparation to seize it when the doorway swings open.'
        ],
        conclusion: 'Seneca’s axiom on preparation meeting opportunity; true greatness combines relentless sweat with humble gratitude for good fortune.'
      },
      brainstormingPros: [
        'Hard work is within human control, building resilience, character, and mastery.',
        'Continuous effort exponentially multiplies the surface area of potential lucky encounters.',
        'Without disciplined preparation, unexpected opportunities are wasted instantly.'
      ],
      brainstormingCons: [
        'Catastrophic geopolitical or medical bad luck can ruin even the most industrious worker.',
        'Ignorance of privilege leads to arrogant lack of empathy for underprivileged communities.'
      ]
    }
  ]
};

// Build topics 6 to 10 file
const topics_6_to_10_content = `import { ToeflTopic } from '../../types';

export const TOPICS_6_TO_10: ToeflTopic[] = [
${JSON.stringify(topic6_data, null, 2)},
${topic7_str},
${topic8_str},
${topic9_str},
${JSON.stringify(topic10_data, null, 2)}
];
`;

fs.writeFileSync('src/data/toefl/topics_6_to_10.ts', topics_6_to_10_content, 'utf8');
console.log('Saved src/data/toefl/topics_6_to_10.ts');
