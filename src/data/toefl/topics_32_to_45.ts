import { ToeflTopic } from '../../types';

export const TOPICS_32_TO_45: ToeflTopic[] = [
  {
    id: 'topic-32',
    topicNumber: 32,
    shortTitle: 'Saving for the Future vs. Enjoying Money Today',
    category: 'society',
    categoryName: 'Economics, Lifestyle & Personal Finance',
    questionType: 'preference',
    prompt: 'Is it better to enjoy your money when you earn it or is it better to save your money for some time in the future? Use specific reasons and examples to support your answer.',
    essays: [
      {
        id: 'essay-32-1',
        essayNumber: 1,
        title: 'Prudent Balance: The Dual Pillars of Fiscal Prudence and Present Well-Being',
        score: 6,
        stance: 'preference',
        wordCount: 420,
        essayText: 'The dilemma between immediate consumption and long-term capital preservation is a quintessential conflict of human psychology and personal finance. Proponents of living in the moment argue that future health and vitality are never guaranteed, making spontaneous indulgence the truest appreciation of labor. Conversely, financial traditionalists advocate relentless saving as an impenetrable shield against economic catastrophe. In my conviction, while judicious enjoyment of the present brings joy, systematic saving for the future is fundamentally superior because it guarantees personal security, fuels capital investment, and liberates one from predatory debt.\n\nTo begin with, disciplined saving constructs an indispensable buffer against unpredictable life emergencies. Modern economic systems are notorious for volatility: unexpected job layoffs, catastrophic medical diagnoses, and sudden domestic repairs can occur without forewarning. An individual who squanders every earned paycheck immediately will inevitably plunge into financial insolvency when crisis strikes, often resorting to high-interest loans that trigger a vicious debt cycle. Conversely, an accumulated contingency fund transforms existential crises into manageable logistical inconveniences, providing emotional tranquility that no transient luxury can rival.\n\nFurthermore, deferred consumption is the indispensable prerequisite for substantial, life-altering investments. Truly monumental accomplishments—such as purchasing residential property, financing postgraduate education, or launching an entrepreneurial venture—demand significant upfront liquidity. One cannot buy a house or fund a university tuition with spontaneous dinners and designer wardrobe purchases. By patiently accumulating savings, compound interest and strategic reinvestment work in one’s favor, turning modest monthly contributions into multi-generational wealth and self-determination.\n\nThis is not to suggest that one should live in miserable asceticism; a sensible budget must always allocate a reasonable fraction for recreation and cultural experiences. However, prioritizing future security fundamentally amplifies present enjoyment, because money spent free from underlying anxiety is infinitely sweeter than indulgence poisoned by impending poverty.\n\nIn conclusion, while the temptation to spend money as soon as it is earned is alluring, systematic saving is the bedrock of dignity and freedom. Prudent individuals realize that saving is not the denial of enjoyment, but the deliberate postponement of small gratifications to secure enduring peace of mind and monumental autonomy.',
        targetWords: [
          {
            id: 'tw-t32-1',
            word: 'insolvency',
            partOfSpeech: 'noun',
            phonetic: '/ɪnˈsɑːlvənsi/',
            definition: 'The state of being unable to pay the debts, by a person or company.',
            translationUz: 'toʻlovga qobiliyatsizlik, bankrotlik holati',
            example: 'Squandering every paycheck inevitably plunges one into financial insolvency.'
          },
          {
            id: 'tw-t32-2',
            word: 'contingency',
            partOfSpeech: 'noun',
            phonetic: '/kənˈtɪndʒənsi/',
            definition: 'A future event or circumstance which is possible but cannot be predicted with certainty.',
            translationUz: 'kutilmagan hodisa, favqulodda ehtiyot choralari',
            example: 'An accumulated contingency fund transforms existential crises into manageable inconveniences.'
          },
          {
            id: 'tw-t32-3',
            word: 'asceticism',
            partOfSpeech: 'noun',
            phonetic: '/əˈsetɪsɪzəm/',
            definition: 'Severe self-discipline and avoidance of all forms of indulgence, typically for religious or philosophical reasons.',
            translationUz: 'tarkidunyochilik, oʻta tejamkorlik, qanoatmandlik',
            example: 'This is not to suggest that one should live in miserable asceticism.'
          },
          {
            id: 'tw-t32-4',
            word: 'gratifications',
            partOfSpeech: 'noun',
            phonetic: '/ˌɡrætɪfɪˈkeɪʃənz/',
            definition: 'Pleasures, especially when gained from the satisfaction of a desire.',
            translationUz: 'qoniqish, orzu-havas, vaqtinchalik lazzatlar',
            example: 'Saving is the deliberate postponement of small gratifications.'
          }
        ],
        phrases: [
          {
            id: 'ph-t32-1',
            phrase: 'peace of mind',
            type: 'idiom',
            meaning: 'A feeling of being safe or protected, free from mental anxiety or worry.',
            translationUz: 'koʻngil xotirjamligi, ruhiy osoyishtalik',
            example: 'An accumulated contingency fund provides enduring peace of mind.',
            contextNote: 'Superb phrase for conclusions in essays discussing financial security or health.'
          },
          {
            id: 'ph-t32-2',
            phrase: 'vicious debt cycle',
            type: 'collocation',
            meaning: 'A self-reinforcing chain of borrowing where debt leads to higher interest and more debt.',
            translationUz: 'qarzning yopilmas doirasi, ketma-ket qarzga botish',
            example: 'High-interest credit cards trigger a vicious debt cycle.',
            contextNote: 'High-impact economic collocation for essays on finance, poverty, or lifestyle.'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t32-1',
            phrase: 'is the indispensable prerequisite for',
            category: 'cause_effect',
            categoryLabel: 'Cause & Effect / Sabab-oqibat',
            function: 'Establishes a strict causal requirement between two concepts',
            translationUz: '... uchun ajralmas va zarur shart hisoblanadi',
            example: 'Deferred consumption is the indispensable prerequisite for substantial investments.',
            usageNote: 'Use to introduce key conditions in argumentation instead of "is needed for".'
          },
          {
            id: 'wc-t32-2',
            phrase: 'This is not to suggest that',
            category: 'contrast_concession',
            categoryLabel: 'Concession & Nuance / Yon berish va cheklov',
            function: 'Prevents misinterpretation and softens an absolute claim',
            translationUz: 'Bu ... degani emas / Bundan ... degan ma\'no kelib chiqmaydi',
            example: 'This is not to suggest that one should live in miserable asceticism.',
            usageNote: 'Crucial concession phrase before introducing nuance into your thesis.'
          }
        ],
        ideas: [
          {
            id: 'id-t32-1',
            type: 'main_argument',
            title: 'Emergency Cushion Against Systemic Volatility',
            anchorText: 'An individual who squanders every earned paycheck immediately will inevitably plunge into financial insolvency when crisis strikes, often resorting to high-interest loans that trigger a vicious debt cycle.',
            explanation: 'Economic shocks are inevitable; without cash reserves, temporary problems become permanent debt traps.',
            explanationUz: 'Iqtisodiy kutilmagan vaziyatlarda zaxira pulining yoʻqligi odamni foizli qarz tuzogʻiga tushiradi.',
            scoreInsight: 'Elevates personal budgeting to macroeconomic realism and risk management.',
            promptApplication: 'Applicable to any prompt asking about emergency preparedness or income management.'
          }
        ],
        outline: {
          introduction: 'Hook on immediate gratification vs deferred reward; thesis prioritizing systematic saving.',
          bodyPoints: [
            'Emergency contingency: shielding oneself from sudden medical bills or job loss.',
            'Capital formation: funding major milestones like education, business, or housing.',
            'Concession: balanced present living without reckless spending.'
          ],
          conclusion: 'Saving is not austerity, but the liberation of future freedom and tranquility.'
        },
        brainstormingPros: [
          'Guarantees peace of mind and resilience during medical or economic downturns.',
          'Enables compound interest to grow wealth and buy substantial assets.',
          'Breaks reliance on predatory bank loans or credit debt.'
        ],
        brainstormingCons: [
          'Excessive penny-pinching can reduce youthful vitality and enjoyment.',
          'Inflation may erode the purchasing power of idle savings over decades.'
        ]
      }
    ]
  },
  {
    id: 'topic-33',
    topicNumber: 33,
    shortTitle: 'Jewelry vs. Concert Tickets: Material vs. Experiential Gifts',
    category: 'culture',
    categoryName: 'Culture, Arts & Personal Value Systems',
    questionType: 'preference',
    prompt: 'You have received a gift of money. The money is enough to buy either a piece of jewelry you like or tickets to a concert you want to attend. Which would you buy? Use specific reasons and examples to support your choice.',
    essays: [
      {
        id: 'essay-33-1',
        essayNumber: 1,
        title: 'The Primacy of Ephemeral Wonder: Why Experiences Outshine Possessions',
        score: 6,
        stance: 'preference',
        wordCount: 415,
        essayText: 'When bestowed with a discretionary sum of windfall money, an individual faces a classic dilemma: whether to acquire an enduring physical commodity, such as an exquisite piece of jewelry, or to invest in an ephemeral experience, such as premier concert tickets. While traditional materialism prizes jewelry for its tangible permanence and residual resale value, psychological research and personal reflection overwhelmingly affirm that experiential purchases yield superior, long-lasting happiness. Given this choice, I would unhesitatingly purchase tickets to the concert.\n\nPrimarily, shared cultural events cultivate profound emotional resonance and indelible memories that enrich one’s soul indefinitely. A live musical performance is not merely auditory entertainment; it is an electric, visceral communion where thousands of kindred spirits unite in collective euphoria. Long after the stadium lights dim and the final chords evaporate, the vivid sensations of joy, passion, and shared laughter with close companions remain etched into memory. In psychological terms, while material objects quickly succumb to hedonic adaptation—becoming taken for granted within weeks—memories of extraordinary live performances appreciate in emotional value as time passes.\n\nFurthermore, attending an exceptional concert offers an invaluable antidote to the monotonous stresses of daily academic and professional life. Modern life is saturated with digital screens, sedentary obligations, and relentless deadlines. Immersion in live orchestral or contemporary music provides a therapeutic catharsis that rejuvenates mental well-being and sparks creative inspiration. A diamond ring or gold necklace, by contrast, sits inertly in a drawer or on a wrist, incapable of elevating one’s mood or creating transformative social bonds.\n\nFinally, jewelry carries latent burdens of physical anxiety. Expensive ornaments are susceptible to theft, loss, and accidental damage, forcing their owners into constant vigilance and costly insurance policies. In contrast, an experiential memory is invulnerable to theft and immune to physical decay; once lived, it becomes an integral part of one’s personal identity.\n\nIn conclusion, while jewelry offers physical permanence, concert tickets bestow psychological transcendence. By selecting the concert, I choose living inspiration and unforgettable joy over a static metallic adornment.',
        targetWords: [
          {
            id: 'tw-t33-1',
            word: 'visceral',
            partOfSpeech: 'adjective',
            phonetic: '/ˈvɪsərəl/',
            definition: 'Relating to deep inward feelings rather than to the intellect.',
            translationUz: 'chuqur his qilinadigan, vujudni larzaga keltiruvchi',
            example: 'A live performance is an electric, visceral communion.'
          },
          {
            id: 'tw-t33-2',
            word: 'ephemeral',
            partOfSpeech: 'adjective',
            phonetic: '/ɪˈfemərəl/',
            definition: 'Lasting for a very short time; fleeting.',
            translationUz: 'oʻtkinchi, qisqa muddatli, lahzalik',
            example: 'Investing in an ephemeral experience yields enduring emotional dividends.'
          },
          {
            id: 'tw-t33-3',
            word: 'catharsis',
            partOfSpeech: 'noun',
            phonetic: '/kəˈθɑːrsɪs/',
            definition: 'The process of releasing, and thereby providing relief from, strong or repressed emotions.',
            translationUz: 'katarsis, ruhiy poklanish, ruhiy yengillashish',
            example: 'Immersion in live music provides a therapeutic catharsis.'
          },
          {
            id: 'tw-t33-4',
            word: 'vigilance',
            partOfSpeech: 'noun',
            phonetic: '/ˈvɪdʒɪləns/',
            definition: 'The action or state of keeping careful watch for possible danger or difficulties.',
            translationUz: 'hushyorlik, ehtiyotkorlik',
            example: 'Expensive ornaments force owners into constant vigilance against theft.'
          }
        ],
        phrases: [
          {
            id: 'ph-t33-1',
            phrase: 'hedonic adaptation',
            type: 'collocation',
            meaning: 'The psychological tendency of humans to quickly return to a stable level of happiness despite major positive events.',
            translationUz: 'hedonik moslashuv (yangi buyumga tezda koʻnikib qolish)',
            example: 'Material objects quickly succumb to hedonic adaptation within weeks.',
            contextNote: 'Academic psychological concept that adds immense rigor to TOEFL essays.'
          },
          {
            id: 'ph-t33-2',
            phrase: 'kindred spirits',
            type: 'idiom',
            meaning: 'Two or more people who share similar tastes, beliefs, or worldviews.',
            translationUz: 'hamfikrlar, dildosh insonlar',
            example: 'Thousands of kindred spirits unite in collective musical euphoria.',
            contextNote: 'Expressive idiom for social cohesion and communal gatherings.'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t33-1',
            phrase: 'Long after the ... evaporate, the ... remain',
            category: 'conclusion',
            categoryLabel: 'Conclusion & Impact / Xulosa va ta\'sir',
            function: 'Highlights the contrast between fleeting events and lasting memories',
            translationUz: '... yoʻqolib ketganidan ancha keyin ham, ... saqlanib qoladi',
            example: 'Long after the final chords evaporate, the vivid sensations of joy remain etched into memory.',
            usageNote: 'Poetic, evocative chunk for conclusion paragraphs.'
          },
          {
            id: 'wc-t33-2',
            phrase: 'yields superior, long-lasting',
            category: 'body_argument',
            categoryLabel: 'Argumentative Force / Asosiy dalil kuchi',
            function: 'Affirms that one alternative provides vastly better outcomes',
            translationUz: 'ancha ustun va uzoq davom etuvchi natija beradi',
            example: 'Experiential purchases yield superior, long-lasting happiness.',
            usageNote: 'Direct, confident thesis vocabulary.'
          }
        ],
        ideas: [
          {
            id: 'id-t33-1',
            type: 'main_argument',
            title: 'Psychological Immunity to Hedonic Adaptation',
            anchorText: 'In psychological terms, while material objects quickly succumb to hedonic adaptation—becoming taken for granted within weeks—memories of extraordinary live performances appreciate in emotional value as time passes.',
            explanation: 'Physical goods lose novelty immediately, while shared experiences grow richer with nostalgia.',
            explanationUz: 'Buyumlar eskirib oʻz jozibasini yoʻqotadi, jonli konsert xotiralari esa yillar oʻtgani sari qadrlanadi.',
            scoreInsight: 'Incorporates proven behavioral science to justify an everyday personal choice.',
            promptApplication: 'Ideal for prompts contrasting materialism with social experiences or travel.'
          }
        ],
        outline: {
          introduction: 'Hook comparing material commodity with experiential wonder; thesis preferring concert tickets.',
          bodyPoints: [
            'Emotional resonance and social communion: creating indelible lifetime memories.',
            'Psychological rejuvenation: music as a therapeutic antidote to daily digital burnout.',
            'Freedom from physical liability: experiences cannot be stolen, broken, or lost.'
          ],
          conclusion: 'Selecting vibrant life memories over cold, static metallic ornaments.'
        },
        brainstormingPros: [
          'Concert creates shared social memories with friends and fellow enthusiasts.',
          'Provides dopamine, stress reduction, and cultural appreciation.',
          'Zero risk of burglary, loss, or deterioration.'
        ],
        brainstormingCons: [
          'Event lasts only a few hours while jewelry can last for decades.',
          'Jewelry can be sold or pawned in extreme financial distress.'
        ]
      }
    ]
  },
  {
    id: 'topic-34',
    topicNumber: 34,
    shortTitle: 'Corporate Responsibility: Profit vs. Ethical Obligation',
    category: 'work',
    categoryName: 'Business Ethics & Corporate Governance',
    questionType: 'agree_disagree',
    prompt: 'Do you agree or disagree with the following statement? Businesses should do anything they can to make a profit. Use specific reasons and examples to support your position.',
    essays: [
      {
        id: 'essay-34-1',
        essayNumber: 1,
        title: 'The Fallacy of Unfettered Greed: Why Sustainable Ethics Outweigh Short-Term Gains',
        score: 6,
        stance: 'disagree',
        wordCount: 435,
        essayText: 'The fundamental objective of any commercial enterprise is undeniably profitability, which guarantees economic solvency and generates employment. However, the extreme assertion that corporations should do “anything they can” to maximize profits represents an intellectually bankrupt and socially toxic worldview. Unconstrained pursuit of revenue—untethered from moral boundaries, environmental stewardship, and legal compliance—invariably precipitates ecological catastrophe, worker exploitation, and eventual corporate destruction. Therefore, I wholeheartedly disagree with the statement; business profitability must always be subordinate to ethical and societal responsibility.\n\nFirst and foremost, an unbridled mandate to maximize profit at all costs leads directly to severe environmental degradation. History abounds with grim examples of corporations dumping toxic effluents into pristine rivers, deforesting tropical rainforests, or falsifying emissions test results simply to cut operational expenditures by a fraction of a percent. When corporations externalize their ecological costs onto vulnerable communities, public health collapses and ecosystems suffer irreversible trauma. A company that poisons the drinking water of future generations in pursuit of quarterly dividend targets is not an engine of economic vitality, but a predatory parasite upon civilization.\n\nSecondly, unprincipled profit-seeking inevitably cannibalizes human dignity through the exploitation of laborers. Without ethical guardrails, unscrupulous executives slash workplace safety protocols, enforce draconian hours without overtime compensation, and suppress fair wages. The tragic collapse of the Rana Plaza textile factory in Bangladesh—where over a thousand garment workers perished because executives ignored severe structural fissures to meet fast-fashion deadlines—stands as an eternal monument to the horror of doing “anything” for profit. Corporate profits can never be justified when purchased with the blood and misery of human beings.\n\nFinally, irony dictates that unethical greed is ultimately self-defeating from a purely commercial standpoint. In our hyper-connected, digital era, consumers and institutional investors ruthlessly penalize deceitful corporations. Brands implicated in scandals suffer devastating boycotts, catastrophic stock devaluation, and punitive regulatory fines that frequently end in corporate bankruptcy. Conversely, enterprises that champion ethical sustainability and employee well-being foster immense customer loyalty and resilient, long-term brand equity.\n\nIn conclusion, profitability is a necessary condition for business survival, but it is never an excuse for moral anarchy. Sustainable prosperity demands that commerce operates within the bounds of humanitarian compassion, social justice, and environmental preservation.',
        targetWords: [
          {
            id: 'tw-t34-1',
            word: 'unbridled',
            partOfSpeech: 'adjective',
            phonetic: '/ʌnˈbraɪdəld/',
            definition: 'Uncontrolled; unconstrained; lacking in restraints.',
            translationUz: 'jilovsiz, chegarasiz, haddan tashqari',
            example: 'An unbridled mandate to maximize profit leads directly to degradation.'
          },
          {
            id: 'tw-t34-2',
            word: 'effluents',
            partOfSpeech: 'noun',
            phonetic: '/ˈefluənts/',
            definition: 'Liquid waste or sewage discharged into a river or the sea.',
            translationUz: 'sanoat chiqindilari, oqova suvlar',
            example: 'Dumping toxic effluents into pristine rivers destroys biodiversity.'
          },
          {
            id: 'tw-t34-3',
            word: 'fissures',
            partOfSpeech: 'noun',
            phonetic: '/ˈfɪʃərz/',
            definition: 'Long, narrow openings or lines of breakage made by cracking or splitting.',
            translationUz: 'yoriqlar, darz ketishlar',
            example: 'Executives ignored structural fissures to avoid factory shutdown costs.'
          },
          {
            id: 'tw-t34-4',
            word: 'draconian',
            partOfSpeech: 'adjective',
            phonetic: '/drəˈkoʊniən/',
            definition: 'Excessively harsh and severe rules, laws, or working conditions.',
            translationUz: 'oʻta shafqatsiz, ayovsiz, qattiqqoʻl',
            example: 'Unscrupulous companies enforce draconian hours without compensation.'
          }
        ],
        phrases: [
          {
            id: 'ph-t34-1',
            phrase: 'brand equity',
            type: 'collocation',
            meaning: 'The commercial value that derives from consumer perception of the brand name of a particular product or service.',
            translationUz: 'brend obroʻsi va qiymati',
            example: 'Enterprises that champion ethics foster long-term brand equity.',
            contextNote: 'Standard executive business terminology that elevates analytical scores.'
          },
          {
            id: 'ph-t34-2',
            phrase: 'predatory parasite',
            type: 'collocation',
            meaning: 'An entity that exploits and damages its host without offering any equitable return.',
            translationUz: 'yirtqich parazit, tekinxoʻr zarar yetkazuvchi',
            example: 'A polluting company is not an economic engine, but a predatory parasite.',
            contextNote: 'High-register rhetorical expression for strong argumentative emphasis.'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t34-1',
            phrase: 'is a necessary condition for ... but it is never an excuse for',
            category: 'contrast_concession',
            categoryLabel: 'Concession & Balance / Chegara va muvozanat',
            function: 'Acknowledges necessity while firmly barring misuse or moral overreach',
            translationUz: '... uchun zaruriy shart, ammo hech qachon ... uchun bahona boʻla olmaydi',
            example: 'Profitability is a necessary condition for survival, but it is never an excuse for moral anarchy.',
            usageNote: 'Masterful formula for conclusion sentences in ethics and law essays.'
          },
          {
            id: 'wc-t34-2',
            phrase: 'History abounds with grim examples of',
            category: 'exemplification',
            categoryLabel: 'Historical Evidence / Tarixiy dalil',
            function: 'Introduces historical evidence of malpractice or systemic failure',
            translationUz: 'Tarix ... ning ayanchli misollariga toʻla',
            example: 'History abounds with grim examples of corporations dumping toxic waste.',
            usageNote: 'High-scoring way to open an evidence sentence.'
          }
        ],
        ideas: [
          {
            id: 'id-t34-1',
            type: 'main_argument',
            title: 'Human Rights and Labor Exploitation',
            anchorText: 'Without ethical guardrails, unscrupulous executives slash workplace safety protocols, enforce draconian hours without overtime compensation, and suppress fair wages.',
            explanation: 'Unchecked pursuit of profit inevitably commodifies workers and imperils human lives.',
            explanationUz: 'Qat’iy axloqiy mezonlar boʻlmasa, biznes xodimlarni arzon vosita deb biladi va xavfsizlikni mensimaydi.',
            scoreInsight: 'Balances environmental arguments with urgent humanitarian and human rights proof.',
            promptApplication: 'Crucial for any question on corporate governance, labor laws, or economic inequality.'
          }
        ],
        outline: {
          introduction: 'Hook challenging unchecked corporate greed; thesis stating ethics must govern profitability.',
          bodyPoints: [
            'Ecological catastrophe: pollution and depletion when costs are externalized onto the public.',
            'Human exploitation: ignoring labor safety standards and wage justice for short-term margins.',
            'Economic self-sabotage: modern consumers and regulators destroy corrupt enterprises.'
          ],
          conclusion: 'Commerce must serve society and environmental sustainability, not predatory exploitation.'
        },
        brainstormingPros: [
          'Strict ethical compliance builds customer trust and resilient brand valuation.',
          'Protects ecosystems, public health, and fair wages for the workforce.',
          'Prevents catastrophic legal penalties and criminal liability for executives.'
        ],
        brainstormingCons: [
          'Rigorous compliance can increase short-term operational expenses.',
          'May lower initial profit margins compared to unethical competitors.'
        ]
      }
    ]
  },
  {
    id: 'topic-35',
    topicNumber: 35,
    shortTitle: 'Learning About Life: Family Advice vs. Personal Experience',
    category: 'education',
    categoryName: 'Psychology, Education & Human Development',
    questionType: 'preference',
    prompt: 'Some people believe that the best way of learning about life is by listening to the advice of family and friends. Other people believe that the best way of learning about life is through personal experience. Compare the advantages of both ways of learning about life. Which do you prefer? Use specific reasons and details for your explanation.',
    essays: [
      {
        id: 'essay-35-1',
        essayNumber: 1,
        title: 'The Crucible of Trial and the Beacon of Counsel: Synthesizing Wisdom and Experience',
        score: 6,
        stance: 'balanced',
        wordCount: 440,
        essayText: 'Human wisdom is forged at the intersection of generational counsel and individual struggle. While some argue that internalizing the seasoned advice of family and friends is the most efficient blueprint for navigating life’s complexities, others contend that true understanding can only be attained through the crucible of direct personal experience. Both modalities offer unique pedagogical advantages: parental guidance shields us from catastrophic missteps, whereas personal trial instills resilient character and authentic conviction. On balance, while the counsel of loved ones provides an indispensable compass, personal experience remains the paramount teacher of life.\n\nOn the one hand, learning through the advice of mentors and elders offers the profound advantage of cognitive efficiency and safety. Our forebears have already traversed the turbulent paths of adolescence, career pivots, romantic entanglements, and financial hardships. By heeding their counsel, an individual inherits decades of distilled trial-and-error without paying the devastating psychological and financial tuition fees associated with personal failure. For instance, following parental warnings regarding predatory financial investments or harmful addictions can literally preserve an individual’s future from irreversible ruin. Listening to loved ones acts as an intellectual safety net, illuminating hidden pitfalls that youthful arrogance might otherwise overlook.\n\nOn the other hand, the knowledge derived from firsthand experience possesses an emotional depth and transformative power that abstract verbal advice can never replicate. Hearing an elder lecture about the pain of heartbreak, the bitter sting of business failure, or the value of grit is merely intellectual information; enduring those crises personally rewires one’s cognitive fortitude. We only truly understand our personal boundaries, values, and strengths when tested against real-world adversity. Furthermore, blindly relying on parental advice risks stunting individuality, confining young minds within obsolete generational dogmas that may not align with an evolving modern landscape.\n\nIn my view, the ideal developmental trajectory is synergistic: one should listen to the wisdom of elders with humble reverence, using their advice as a preliminary guide, but courageously step into the arena to test and validate that wisdom through personal action.\n\nIn conclusion, while familial counsel provides a protective shelter and valuable foresight, direct personal experience is the indispensable furnace that transforms intellectual theories into living, authentic character.',
        targetWords: [
          {
            id: 'tw-t35-1',
            word: 'crucible',
            partOfSpeech: 'noun',
            phonetic: '/ˈkruːsəbl/',
            definition: 'A situation of severe trial, or in which different elements interact, leading to the creation of something new.',
            translationUz: 'sinov maydoni, qiyinchiliklar oʻchogʻi',
            example: 'True understanding can only be attained through the crucible of personal experience.'
          },
          {
            id: 'tw-t35-2',
            word: 'forebears',
            partOfSpeech: 'noun',
            phonetic: '/ˈfɔːrberz/',
            definition: 'An ancestor or forefather who came before.',
            translationUz: 'ajdodlar, ota-bobolar, yoshi kattalar',
            example: 'Our forebears have already traversed the turbulent paths of financial hardships.'
          },
          {
            id: 'tw-t35-3',
            word: 'fortitude',
            partOfSpeech: 'noun',
            phonetic: '/ˈfɔːrtɪtuːd/',
            definition: 'Courage in pain or adversity.',
            translationUz: 'matonat, sabot, ruhiy baquvvatlik',
            example: 'Enduring crises rewires one’s cognitive fortitude and resilience.'
          },
          {
            id: 'tw-t35-4',
            word: 'synergistic',
            partOfSpeech: 'adjective',
            phonetic: '/ˌsɪnərˈdʒɪstɪk/',
            definition: 'Relating to the interaction or cooperation of two or more elements to produce a combined effect greater than the sum.',
            translationUz: 'bir-birini toʻldiruvchi, uygʻun harakat qiluvchi',
            example: 'The ideal developmental trajectory is synergistic and balanced.'
          }
        ],
        phrases: [
          {
            id: 'ph-t35-1',
            phrase: 'trial and error',
            type: 'collocation',
            meaning: 'The process of experimenting with various methods of doing something until one finds the most successful.',
            translationUz: 'sinov va xatolar yoʻli',
            example: 'One inherits decades of distilled trial-and-error from family elders.',
            contextNote: 'Classic academic collocation for scientific or personal learning.'
          },
          {
            id: 'ph-t35-2',
            phrase: 'step into the arena',
            type: 'idiom',
            meaning: 'To take active, courageous part in challenging real-world affairs rather than being a passive spectator.',
            translationUz: 'maydonga tushmoq, real hayotiy kurashga kirishmoq',
            example: 'One must courageously step into the arena to test and validate theoretical advice.',
            contextNote: 'Inspiring metaphorical idiom derived from Theodore Roosevelt\'s speech.'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t35-1',
            phrase: 'On the one hand, learning through ... offers the profound advantage of',
            category: 'contrast_concession',
            categoryLabel: 'Comparative Balance / Qiyosiy tahlil',
            function: 'Introduces the first side in a balanced comparative essay',
            translationUz: 'Bir tomondan, ... orqali oʻrganish chuqur ustunlikka ega',
            example: 'On the one hand, learning through advice offers the profound advantage of efficiency.',
            usageNote: 'Standard balanced structure for TOEFL comparison prompts.'
          },
          {
            id: 'wc-t35-2',
            phrase: 'is merely intellectual information; enduring those crises personally',
            category: 'body_argument',
            categoryLabel: 'Analytical Elaboration / Chuqur tahlil',
            function: 'Draws a sharp distinction between passive hearing and active realization',
            translationUz: 'shunchaki nazariy ma\'lumotdir; bu inqirozlarni shaxsan boshdan kechirish esa...',
            example: 'Hearing advice is merely intellectual information; enduring those crises personally rewires fortitude.',
            usageNote: 'Sophisticated semicolon contrast clause.'
          }
        ],
        ideas: [
          {
            id: 'id-t35-1',
            type: 'main_argument',
            title: 'Firsthand Trial Transforms Theory Into Character',
            anchorText: 'Hearing an elder lecture about the pain of heartbreak, the bitter sting of business failure, or the value of grit is merely intellectual information; enduring those crises personally rewires one’s cognitive fortitude.',
            explanation: 'Emotional resilience cannot be learned vicariously; direct personal confrontation with failure cements real wisdom.',
            explanationUz: 'Boshqalarning gapini eshitish shunchaki nazariya, xatolar orqali oʻrganish esa inson xarakterini toblab haqiqiy qat’iyatni shakllantiradi.',
            scoreInsight: 'Synthesizes both sides of the comparison prompt before delivering a nuanced synthesis.',
            promptApplication: 'Perfect for educational philosophy, mentoring, and experiential learning topics.'
          }
        ],
        outline: {
          introduction: 'Contrast advice vs experience; thesis establishing both as valuable, with personal experience as the ultimate catalyst.',
          bodyPoints: [
            'Advantages of family advice: cognitive efficiency, shielding youth from fatal traps and debt.',
            'Advantages of personal experience: internalizing deep emotional fortitude and escaping outdated dogmas.',
            'Synthesis: using counsel as a protective map, but forging real identity through direct action.'
          ],
          conclusion: 'Counsel offers the compass, but personal experience walks the rugged mountain.'
        },
        brainstormingPros: [
          'Family counsel saves years of painful mistakes and financial loss.',
          'Personal experience builds indomitable mental toughness and self-knowledge.',
          'Synthesizing both provides high wisdom with low catastrophe.'
        ],
        brainstormingCons: [
          'Relying solely on advice can breed fear and lack of self-reliance.',
          'Relying solely on trial-and-error can lead to permanent scars and fatal errors.'
        ]
      }
    ]
  }
];
