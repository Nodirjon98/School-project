import { RealWorldBook } from '../../types';
import { BOOK2_MORE_UNITS } from './book2MoreUnits';
import { BOOK2_UNITS_PART3 } from './book2UnitsPart3';

export const RRW_BOOK_2: RealWorldBook = {
  id: 'rrw-book-2',
  bookNumber: 2,
  title: 'Reading for the Real World 2',
  edition: '4th Edition (Compass Publishing / Essential English)',
  targetLevel: 'Upper-Intermediate (B2)',
  cefrLevel: 'B2',
  descriptionUz: 'B2 darajadagi o\'quvchilar uchun chuqur ilmiy, texnologik va ijtimoiy mavzular: sun\'iy idrok, biometriya, ksenotransplantatsiya va kosmik tadqiqotlar.',
  coverImage: 'https://images.unsplash.com/photo-1507842229451-7f01be837a27?auto=format&fit=crop&w=800&q=80',
  totalUnits: 12,
  totalPassages: 24,
  totalTargetWords: 156,
  colorTheme: {
    primary: '#4f46e5', // Indigo 600
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    gradient: 'from-indigo-600 to-purple-700'
  },
  units: [
    {
      id: 'rrw2-u1',
      unitNumber: 1,
      title: 'Strange & Unusual',
      subjectArea: 'Astronomy & Military Intelligence',
      themeDescriptionUz: 'Noma\'lum uchar jismlar (UFO / UAP) hodisasi va kelajakni bashorat qilishning ilmiy usullari.',
      passages: [
        {
          id: 'rrw2-u1-p1',
          passageNumber: 1,
          title: 'UFOs: From Conspiracy to Congressional Scrutiny',
          subtitle: 'The shift from tabloid sensationalism to official declassified military intelligence',
          themeCategory: 'Aviation & Defense',
          level: 'B2',
          wordCount: 460,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Do you believe intelligent life exists outside our solar system?',
            'Why did military authorities recently rename UFOs to "Unidentified Anomalous Phenomena" (UAPs)?'
          ],
          paragraphs: [
            'For the better part of seven decades, reports of Unidentified Flying Objects (UFOs) were largely dismissed by the scientific community and relegated to the fringes of science fiction and paranoid conspiracy theories. Sightings were commonly attributed to atmospheric optical illusions, weather balloons, civilian drone activity, or deliberate hoaxes designed to profit from tabloid gullibility.',
            'However, a seismic shift in public and official perception occurred in late 2017 when major media outlets published declassified infrared video footage captured by United States Navy fighter pilots aboard aircraft carriers. In these authenticated cockpit recordings—colloquially named "FLIR," "GIMBAL," and "GOFAST"—pilots observed wingless aerodynamic crafts performing instantaneous acceleration, hypersonic velocity, and sharp turns without visible exhaust plumes or control surfaces.',
            'Faced with genuine national security and airspace safety concerns, the United States Congress held unprecedented public hearings. Pentagon officials established the All-domain Anomaly Resolution Office (AARO) to systematically catalog and investigate what are now officially termed Unidentified Anomalous Phenomena (UAPs). Military leaders emphasized that objects operating with complete impunity inside restricted military training corridors represent an intolerable defense vulnerability, whether they belong to foreign adversarial nations or involve exotic physics.',
            'While astrobiologists emphasize that no definitive evidence has yet linked UAPs to extraterrestrial civilizations, the scientific consensus regarding their study has transformed radically. Rigorous scientific initiatives, such as Harvard University\'s Galileo Project, now deploy high-resolution sensors, artificial intelligence algorithms, and optical observatories to gather transparent, reproducible data, rescuing this mystery from stigma and placing it squarely in the laboratory.'
          ],
          summaryUz: 'Ushbu darsda NUJ (UFO/UAP) hodisalarining safsata va fitnalar darajasidan chiqib, AQSh Kongressi va Pentagon darajasida jiddiy harbiy tadqiqotga aylangani bayon qilinadi. Dengiz floti uchuvchilari tasvirga olgan deklassifikatsiya qilingan videotasvirlar ushbu noma\'lum jismlarning aerodinamik qonunlarga zid ravishda harakatlanishini ko\'rsatgan.',
          targetVocab: [
            {
              word: 'relegate',
              pos: 'v.',
              phonetic: '/ˈrel.ə.ɡeɪt/',
              definitionEn: 'To put someone or something into a lower or less important rank or position.',
              translationUz: 'quyi darajaga tushirmoq, e\'tibordan chetga surmoq',
              sampleSentence: 'The once-popular theory was relegated to the history books.',
              collocation: 'relegate to the fringes'
            },
            {
              word: 'gullibility',
              pos: 'n.',
              phonetic: '/ˌɡʌl.əˈbɪl.ə.t̬i/',
              definitionEn: 'A willingness to believe that what other people say is true, or that you do not easily doubt.',
              translationUz: 'laqmalik, soddadillik, tez ishonib qolish',
              sampleSentence: 'Con artists exploit the gullibility of inexperienced internet shoppers.',
              collocation: 'exploit gullibility'
            },
            {
              word: 'impunity',
              pos: 'n.',
              phonetic: '/ɪmˈpjuː.nə.t̬i/',
              definitionEn: 'Freedom from punishment or from the unpleasant results of something that has been done.',
              translationUz: 'jazosizlik, to\'siqsizlik, o\'zboshimchalik',
              sampleSentence: 'Pirates operated with near impunity in the unprotected waters.',
              collocation: 'operate with impunity'
            },
            {
              word: 'adversarial',
              pos: 'adj.',
              phonetic: '/ˌæd.vɚˈser.i.əl/',
              definitionEn: 'Involving opposition or disagreement between two opposing sides.',
              translationUz: 'dushmanona, raqibga oid',
              sampleSentence: 'Diplomats sought to de-escalate adversarial tensions between the superpowers.',
              collocation: 'adversarial nation'
            },
            {
              word: 'stigma',
              pos: 'n.',
              phonetic: '/ˈstɪɡ.mə/',
              definitionEn: 'A strong feeling of disapproval that most people in a society have about something.',
              translationUz: 'dog\' tushirish, uyatli deb qarash, kamsitish',
              sampleSentence: 'Seeking mental health therapy should be free of any social stigma.',
              collocation: 'rescue from stigma'
            },
            {
              word: 'declassify',
              pos: 'v.',
              phonetic: '/ˌdiːˈklæs.ə.faɪ/',
              definitionEn: 'To officially state that secret government or military information is no longer secret.',
              translationUz: 'maxfiylikdan chiqarmoq, sir emas deb e\'lon qilmoq',
              sampleSentence: 'The government declassified thousands of Cold War surveillance documents.',
              collocation: 'declassified footage'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u1-p1-q1',
              type: 'main-idea',
              question: 'What is the main shift that occurred regarding UFOs over the past decade?',
              options: [
                'Alien beings held a press conference in Geneva to declare peace.',
                'UFOs moved from dismissed tabloid rumors to serious government, military, and academic investigation.',
                'All military aircraft in the world were decommissioned.',
                'Hollywood studios admitted they fabricated all military radar technology.'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy o\'zgarish: NUJ hodisalari mish-mishlardan AQSh Kongressi, Pentagon va universitetlar tekshiradigan jiddiy xavfsizlik va ilmiy masalaga aylandi.'
            },
            {
              id: 'rrw2-u1-p1-q2',
              type: 'detail',
              question: 'What did declassified US Navy cockpit recordings demonstrate about observed objects?',
              options: [
                'They had standard commercial airline wings and fuel logos.',
                'They performed rapid acceleration and sharp maneuvers without visible control surfaces or exhaust.',
                'They landed at passenger terminals to refuel with ordinary kerosene.',
                'They were painted with cartoon characters.'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "performing instantaneous acceleration, hypersonic velocity, and sharp turns without visible exhaust plumes or control surfaces".'
            },
            {
              id: 'rrw2-u1-p1-q3',
              type: 'inference',
              question: 'Why does the military care about UAPs even if they are NOT extraterrestrial?',
              options: [
                'Because they need excuses to increase astronaut salaries.',
                'Because unidentified crafts flying in restricted military airspace pose real national security and safety risks.',
                'Because pilots are bored during regular peacetime patrols.',
                'Because they want to sell movie rights to international streaming services.'
              ],
              correctIndex: 1,
              explanationUz: 'Harbiy havo hududiga noma\'lum apparatlarning erkin kirib kelishi davlat xavfsizligi va parvozlar uchun katta tahdiddir.'
            },
            {
              id: 'rrw2-u1-p1-q4',
              type: 'vocabulary',
              question: 'The word "relegate" in the first paragraph is closest in meaning to:',
              options: [
                'To promote to leadership',
                'To dismiss or downgrade to an inferior place',
                'To celebrate with fireworks',
                'To photograph from a helicopter'
              ],
              correctIndex: 1,
              explanationUz: '"Relegate" — chetga surmoq, ahamiyatsiz yoki quyi pog\'onaga tushirib qo\'ymoq degani.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'UAP Investigation: Causes of Reassessment and Scientific Outcomes',
            sections: [
              {
                heading: 'Catalysts of Change',
                points: [
                  'Declassification of authentic Navy infrared videos (FLIR/GIMBAL).',
                  'Sworn pilot testimony regarding aerodynamic anomalies.',
                  'National airspace security and flight collision hazards.'
                ]
              },
              {
                heading: 'Institutional Response',
                points: [
                  'US Congressional public hearings and transparency bills.',
                  'Establishment of the Pentagon AARO investigative office.'
                ]
              },
              {
                heading: 'Scientific Outcome',
                points: [
                  'Transition from cultural stigma to data-driven academic research.',
                  'Deployment of AI-driven camera arrays by projects like Harvard Galileo.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'What do you think would happen to human philosophy and religion if intelligent life were proven to exist?',
            'Why are scientific institutions often reluctant to study controversial subjects until government evidence is released?'
          ]
        },
        {
          id: 'rrw2-u1-p2',
          passageNumber: 2,
          title: 'An Insight into the Future: Foresight and Strategic Forecasting',
          subtitle: 'How futurists, scenario planners, and superforecasters predict global geopolitical events',
          themeCategory: 'Futurism & Cognitive Science',
          level: 'B2',
          wordCount: 450,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Can anyone accurately predict what technology or geopolitics will look like in 2050?',
            'What is the difference between an astrology horoscope and scientific forecasting?'
          ],
          paragraphs: [
            'Throughout antiquity, kings and generals consulted oracles, astrological star charts, and animal entrails in frantic attempts to divine what lay ahead. Today, while clairvoyance remains dismissed as pseudoscience, the human ambition to anticipate the future has transformed into a rigorous academic discipline known as strategic foresight and probabilistic forecasting.',
            'Modern futurists do not claim to possess a magical crystal ball that displays a singular, predetermined destiny. Instead, organizations such as the United Nations, multinational energy corporations, and military intelligence agencies employ "scenario planning." Pioneered by the Royal Dutch Shell corporation during the 1970s energy crisis, this technique constructs multiple plausible alternative futures based on macro-trends such as demographic shifts, climate volatility, and technological breakthroughs.',
            'Recent breakthrough research led by psychologist Philip Tetlock through the Good Judgment Project demonstrated that human forecasting can be systematically quantified and sharpened. Tetlock discovered an elite cohort of amateur analysts dubbed "superforecasters." Surprisingly, these individuals were not intelligence insiders with access to classified documents, but everyday citizens possessing distinct cognitive habits: intellectual humility, probabilistic thinking, and an eagerness to update their beliefs whenever fresh evidence emerges.',
            'While deterministic predictions will always stumble against the inherent chaos of complex adaptive systems—what Nassim Nicholas Taleb famously categorized as unexpected "Black Swan" events—strategic forecasting equips leaders with mental agility. By stress-testing policies against diverse futures, societies can build resilient infrastructure capable of surviving whatever disruptions tomorrow brings.'
          ],
          summaryUz: 'Ushbu darsda kelajakni bashorat qilishning zamonaviy ilmiy usullari (strategic foresight va scenario planning) ko\'rib chiqiladi. Zamonaviy prognozchilar yagona kelajakni emas, balki bir nechta ehtimoliy ssenariylarni ishlab chiqadilar. "Superforecaster"lar o\'z qarashlarini yangi dalillar asosida doimiy yangilab boradigan insonlardir.',
          targetVocab: [
            {
              word: 'foresight',
              pos: 'n.',
              phonetic: '/ˈfɔːr.saɪt/',
              definitionEn: 'The ability to judge correctly what is going to happen in the future and plan for it.',
              translationUz: 'oldindan ko\'ra bilish, uzoqni ko\'zlash',
              sampleSentence: 'Through remarkable foresight, the city invested in flood barriers before the hurricane.',
              collocation: 'strategic foresight'
            },
            {
              word: 'probabilistic',
              pos: 'adj.',
              phonetic: '/ˌprɑː.bə.bəˈlɪs.tɪk/',
              definitionEn: 'Based on or adapted to a theory of probability.',
              translationUz: 'ehtimoliylikka asoslangan',
              sampleSentence: 'Weather prediction relies on probabilistic models rather than certainties.',
              collocation: 'probabilistic thinking'
            },
            {
              word: 'plausible',
              pos: 'adj.',
              phonetic: '/ˈplɑː.zə.bəl/',
              definitionEn: 'Seeming likely to be true, or able to be believed.',
              translationUz: 'ishonarli, ehtimolga yaqin, mantiqan to\'g\'ri',
              sampleSentence: 'The detective presented a plausible explanation for the suspect\'s whereabouts.',
              collocation: 'plausible scenario'
            },
            {
              word: 'humility',
              pos: 'n.',
              phonetic: '/hjuːˈmɪl.ə.t̬i/',
              definitionEn: 'The quality of not being proud or thinking you are better or wiser than others.',
              translationUz: 'kamtarlik, o\'z bilimsizligini tan olish',
              sampleSentence: 'Intellectual humility allows scientists to admit when their hypothesis is disproven.',
              collocation: 'intellectual humility'
            },
            {
              word: 'deterministic',
              pos: 'adj.',
              phonetic: '/dɪˌtɝː.məˈnɪs.tɪk/',
              definitionEn: 'Believing that everything that happens has a specific cause and could not happen differently.',
              translationUz: 'qat\'iy belgilangan, muqarrar, deterministik',
              sampleSentence: 'Classic Newtonian physics is deterministic, whereas quantum mechanics is probabilistic.',
              collocation: 'deterministic prediction'
            },
            {
              word: 'resilient',
              pos: 'adj.',
              phonetic: '/rɪˈzɪl.jənt/',
              definitionEn: 'Able to be happy, successful, or recover quickly again after something difficult.',
              translationUz: 'bardoshli, moslashuvchan, sinmaydigan',
              sampleSentence: 'The local economy proved remarkably resilient despite the supply-chain shock.',
              collocation: 'resilient infrastructure'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u1-p2-q1',
              type: 'main-idea',
              question: 'What is the modern approach to forecasting described in the text?',
              options: [
                'Relying on horoscopes and astrology to establish permanent truths',
                'Creating multiple plausible scenarios and applying probabilistic thinking to build resilience',
                'Claiming to know with 100% certainty the exact events of the year 2099',
                'Ignoring technological shifts because the future is completely random'
              ],
              correctIndex: 1,
              explanationUz: 'Zamonaviy strategik prognozlash ko\'p ehtimolli ssenariylarni tahlil qilib, tizimlarning moslashuvchanligini oshirishga tayanadi.'
            },
            {
              id: 'rrw2-u1-p2-q2',
              type: 'detail',
              question: 'What cognitive characteristics did psychologist Philip Tetlock identify in "superforecasters"?',
              options: [
                'Arrogance, extreme wealth, and military rank',
                'Intellectual humility, probabilistic thinking, and willingness to update beliefs with new data',
                'The ability to read ancient hieroglyphic scriptures',
                'Having classified government security clearances'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "intellectual humility, probabilistic thinking, and an eagerness to update their beliefs whenever fresh evidence emerges".'
            },
            {
              id: 'rrw2-u1-p2-q3',
              type: 'vocabulary',
              question: 'What is a "Black Swan" event according to the passage?',
              options: [
                'An endangered aquatic bird living in Australia',
                'An unexpected, highly disruptive event that stumbles deterministic predictions',
                'A legal treaty signed between major European energy corporations',
                'A successful computer simulation developed in the 1970s'
              ],
              correctIndex: 1,
              explanationUz: '"Black Swan" — kutilmagan, bashorat qilib bo\'lmaydigan, ammo dunyoni tubdan o\'zgartirib yuboradigan favqulodda hodisa.'
            },
            {
              id: 'rrw2-u1-p2-q4',
              type: 'detail',
              question: 'Which company pioneered the technique of "scenario planning" during the 1970s energy crisis?',
              options: [
                'Apple Computer',
                'Royal Dutch Shell',
                'Pan American World Airways',
                'Standard Oil of California'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "Pioneered by the Royal Dutch Shell corporation during the 1970s energy crisis".'
            }
          ],
          graphicOrganizer: {
            organizerType: 'main-ideas-details',
            title: 'Strategic Foresight: Techniques and Superforecaster Mindset',
            sections: [
              {
                heading: 'Core Methodology',
                points: [
                  'Rejection of single, fixed prophetic destiny.',
                  'Scenario Planning: Multiple plausible futures (Shell model).',
                  'Tracking macro-trends in demographics, climate, and tech.'
                ]
              },
              {
                heading: 'Superforecaster Attributes (Tetlock Study)',
                points: [
                  'Intellectual humility (acknowledging gaps in knowledge).',
                  'Graduated probabilistic calibration.',
                  'Nimble revision of models upon receipt of verified data.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'What do you believe is the single biggest technological disruption humanity will face in the next 20 years?',
            'How can individuals apply scenario planning to their personal career and education decisions?'
          ]
        }
      ]
    },
    {
      id: 'rrw2-u2',
      unitNumber: 2,
      title: 'Computers & Technology',
      subjectArea: 'Big Data & Biometrics',
      themeDescriptionUz: 'Raqamli reklama va foydalanuvchi ma\'lumotlarining xavfsizligi hamda shaxsni aniqlashda biometriya.',
      passages: [
        {
          id: 'rrw2-u2-p1',
          passageNumber: 1,
          title: 'Data and Digital Ads: The Surveillance Economy',
          subtitle: 'How behavioral surplus, predictive algorithms, and microtargeting monetize human attention',
          themeCategory: 'Digital Privacy',
          level: 'B2',
          wordCount: 470,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Have you ever discussed a product with a friend, only to see ads for it on your phone minutes later?',
            'What are you truly paying when you use free online platforms like search engines or social media?'
          ],
          paragraphs: [
            'There is a well-known axiom among modern technology analysts: "If you are not paying for the product, you are the product." When consumers casually browse video streams, check online maps, or like photos on social media, they perceive these services as delightfully costless. In reality, every click, scroll speed, keystroke pause, and geolocation coordinate is meticulously harvested to feed a multi-billion-dollar apparatus known as the surveillance economy.',
            'Harvard professor Shoshana Zuboff coined the phrase "Surveillance Capitalism" to explain this unprecedented economic architecture. While early tech firms used user data merely to improve software functionality, corporations soon recognized that residual data—what Zuboff terms "behavioral surplus"—held staggering commercial value. By running this surplus through machine-learning algorithms, platforms generate predictive behavioral models that forecast not only what goods a consumer desires today, but what emotional vulnerabilities might induce them to purchase tomorrow.',
            'The apex of this mechanism is microtargeted advertising. Unlike traditional television or billboard advertisements broadcast indiscriminately to millions, algorithmic ad platforms segment populations into hyper-specific behavioral clusters. If a user displays digital markers of loneliness, insomnia, political anxiety, or financial desperation at 2:00 AM, advertisers can programmatically bid within milliseconds to display personalized appeals directly on their screen.',
            'While defenders argue that algorithmic tracking optimizes user experience and delivers relevant products, critics emphasize severe societal consequences. Privacy watchdogs, legal scholars, and neuroethicists point to the erosion of democratic discourse, algorithmic polarization, and the non-consensual commodification of human consciousness. As regulatory bodies like the European Union enact stringent data-protection laws (such as GDPR), the battle between corporate data exploitation and digital fundamental rights intensifies.'
          ],
          summaryUz: 'Ushbu darsda raqamli reklama va "Kuzatuv kapitalizmi" tizimi tahlil qilinadi. Bepul xizmatlar evaziga foydalanuvchilarning har bir harakati yig\'ilib, xatti-harakati modellashtiriladi va mikronishonli reklama uchun sotiladi. Bu shaxsiy daxlsizlik bo\'yicha jiddiy savollarni keltirib chiqaradi.',
          targetVocab: [
            {
              word: 'axiom',
              pos: 'n.',
              phonetic: '/ˈæk.si.əm/',
              definitionEn: 'A statement or principle that is generally accepted to be true, but not proven.',
              translationUz: 'aksioma, isbot talab qilmaydigan haqiqat',
              sampleSentence: 'It is a mathematical axiom that parallel lines never intersect.',
              collocation: 'well-known axiom'
            },
            {
              word: 'surplus',
              pos: 'n.',
              phonetic: '/ˈsɝː.pləs/',
              definitionEn: 'An amount that is more than is needed or can be used.',
              translationUz: 'ortiqcha miqdor, ortiqcha qoldiq',
              sampleSentence: 'The national budget recorded a healthy financial surplus this fiscal year.',
              collocation: 'behavioral surplus'
            },
            {
              word: 'indiscriminately',
              pos: 'adv.',
              phonetic: '/ˌɪn.dɪˈskrɪm.ə.nət.li/',
              definitionEn: 'In a way that does not show or involve careful choice or planning.',
              translationUz: 'farqiga bormasdan, har kimga baravar, o\'ylab o\'tirmasdan',
              sampleSentence: 'Weapons must never be deployed indiscriminately against civilian areas.',
              collocation: 'broadcast indiscriminately'
            },
            {
              word: 'commodification',
              pos: 'n.',
              phonetic: '/kəˌmɑː.də.fəˈkeɪ.ʃən/',
              definitionEn: 'The treatment of something as a product that can be bought, sold, or traded.',
              translationUz: 'tovarga aylantirish, savdo vositasi qilish',
              sampleSentence: 'Critics lament the commercial commodification of sacred cultural festivals.',
              collocation: 'commodification of data'
            },
            {
              word: 'stringent',
              pos: 'adj.',
              phonetic: '/ˈstrɪn.dʒənt/',
              definitionEn: 'Having a very severe effect, or being extremely limiting, strict, and severe.',
              translationUz: 'qat\'iy, o\'ta kuchli, qattiqqo\'l',
              sampleSentence: 'Aviation authorities enforce stringent safety inspections on all passenger jets.',
              collocation: 'stringent laws'
            },
            {
              word: 'polarization',
              pos: 'n.',
              phonetic: '/ˌpoʊ.lɚ.əˈzeɪ.ʃən/',
              definitionEn: 'The act of dividing something into two completely opposing groups.',
              translationUz: 'qutblanish, qarama-qarshi tomonlarga bo\'linish',
              sampleSentence: 'Echo chambers on social media have deepened political polarization.',
              collocation: 'societal polarization'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u2-p1-q1',
              type: 'main-idea',
              question: 'What is the central theme of the reading on the surveillance economy?',
              options: [
                'Why social media websites are closing down due to lack of electricity',
                'How free online platforms systematically harvest behavioral data to predict and monetize human actions',
                'How billboard advertisements on highways are replacing internet search engines',
                'Why smartphones should only be operated by children under ten'
              ],
              correctIndex: 1,
              explanationUz: 'Markaziy g\'oya: Bepul platformalar foydalanuvchilarning xatti-harakati ma\'lumotlarini yig\'ib, ularni mikronishonli reklama uchun sotishadi.'
            },
            {
              id: 'rrw2-u2-p1-q2',
              type: 'detail',
              question: 'What phrase did Professor Shoshana Zuboff coin to explain this economic model?',
              options: [
                'Digital Communism',
                'Surveillance Capitalism',
                'Mechanical Mercantilism',
                'Silicon Feudalism'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda keltirilgan: "Shoshana Zuboff coined the phrase \'Surveillance Capitalism\'".'
            },
            {
              id: 'rrw2-u2-p1-q3',
              type: 'inference',
              question: 'Why do advertisers prefer microtargeting over traditional television commercials?',
              options: [
                'Because television cameras are heavier to carry',
                'Because microtargeting allows hyper-specific delivery based on real-time emotional and behavioral markers',
                'Because television ads are banned in the European Union',
                'Because microtargeted ads are entirely free for corporations'
              ],
              correctIndex: 1,
              explanationUz: 'Mikronishonlash odamlarning hissiy va xatti-harakat holatiga qarab, aynan kerakli paytda aniq auditoriyaga ko\'rsatish imkonini beradi.'
            },
            {
              id: 'rrw2-u2-p1-q4',
              type: 'vocabulary',
              question: 'The word "stringent" in the final paragraph is closest in meaning to:',
              options: [
                'Flexible and relaxed',
                'Strict and demanding',
                'Comical and amusing',
                'Old-fashioned and useless'
              ],
              correctIndex: 1,
              explanationUz: '"Stringent" so\'zi qat\'iy, o\'ta qattiq (strict and demanding) degan ma\'noni anglatadi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'The Surveillance Capitalism Pipeline',
            sections: [
              {
                heading: '1. Raw Material Extraction',
                points: [
                  'Users utilize "free" search, mapping, and social media tools.',
                  'Exhaustive logging of clicks, geolocation, and chats.'
                ]
              },
              {
                heading: '2. Algorithmic Manufacturing',
                points: [
                  'Behavioral surplus processed through AI models.',
                  'Generation of predictive behavior patterns.'
                ]
              },
              {
                heading: '3. Market Execution',
                points: [
                  'Real-time automated ad auctions targeting psychological triggers.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Would you be willing to pay a monthly subscription fee for social media in exchange for complete data privacy?',
            'Do targeted ads manipulate human free will or simply connect consumers with useful goods?'
          ]
        },
        {
          id: 'rrw2-u2-p2',
          passageNumber: 2,
          title: 'Using the Body for Identification: Biometrics',
          subtitle: 'Fingerprints, facial geometry, iris scans, and the delicate balance between security and civil liberties',
          themeCategory: 'Biotechnology & Civil Rights',
          level: 'B2',
          wordCount: 460,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Do you unlock your smartphone with your fingerprint or face recognition?',
            'What happens if someone steals your biometric data compared to stealing your password?'
          ],
          paragraphs: [
            'Throughout recorded history, proving human identity relied on external tokens: wax seals, signed parchment documents, photographic passports, plastic badges, and memorized alphanumeric passwords. Yet, all conventional tokens suffer from a fatal vulnerability: they can be forgotten, misplaced, stolen, or counterfeited. In our interconnected digital age, security specialists have turned to an authentication method you can never lose: your biological body.',
            'Biometrics refers to the automated measurement and statistical analysis of unique physiological and behavioral characteristics. The oldest and most ubiquitous biometric is dactyloscopy—fingerprint analysis. Pioneered in forensic science in the late nineteenth century, automated fingerprint scanners now secure billions of smartphones and border inspection gates worldwide by matching epidermal friction ridges.',
            'However, modern biometrics has expanded into far more sophisticated modalities. Optical iris recognition captures the intricate, random patterns of pigmented connective tissue in the human eye, boasting an astronomical mathematical uniqueness that surpasses fingerprints. Facial recognition algorithms employ convolutional neural networks to measure distances between facial landmarks—such as pupil spacing, cheekbone height, and jawline contours—even within moving crowds captured by urban surveillance cameras.',
            'Despite their undeniable convenience and efficacy in anti-terror border defense, biometric systems introduce acute civil liberty dilemmas. Crucially, while a compromised password can be reset instantly, your biological identifiers are immutable: if your biometric facial vector or retinal signature is breached and leaked on the dark web, you cannot change your face or eyes. Furthermore, algorithmic bias studies reveal that facial recognition software frequently exhibits significantly higher error rates when analyzing women and people of color, raising grave legal concerns regarding wrongful arrests.'
          ],
          summaryUz: 'Ushbu darsda biometrik identifikatsiya — barmoq izi, ko\'zning kamalak pardasi va yuzni tanish texnologiyalari ko\'rib chiqiladi. Biometriya xavfsiz bo\'lsa-da, parolni o\'zgartirish mumkin, ammo inson o\'z yuzi yoki ko\'zini o\'zgartira olmasligi sababli xavf yuqori bo\'ladi.',
          targetVocab: [
            {
              word: 'counterfeit',
              pos: 'v.',
              phonetic: '/ˈkaʊn.t̬ɚ.fɪt/',
              definitionEn: 'To make something look like the original of something else in order to deceive people.',
              translationUz: 'soxtalashtirmoq, qalbaki nusxasini yasamoq',
              sampleSentence: 'Criminals attempted to counterfeit official currency and passports.',
              collocation: 'counterfeit documents'
            },
            {
              word: 'dactyloscopy',
              pos: 'n.',
              phonetic: '/ˌdæk.tɪˈlɑː.skə.pi/',
              definitionEn: 'The scientific study of fingerprints for identification purposes.',
              translationUz: 'daktiloskopiya, barmoq izlarini tekshirish fani',
              sampleSentence: 'Forensic investigators used dactyloscopy to match prints left at the crime scene.',
              collocation: 'forensic dactyloscopy'
            },
            {
              word: 'immutable',
              pos: 'adj.',
              phonetic: '/ɪˈmjuː.t̬ə.bəl/',
              definitionEn: 'Not changing, or unable to be changed.',
              translationUz: 'o\'zgarmas, almashtirib bo\'lmaydigan, doimiy',
              sampleSentence: 'The laws of physics remain immutable across the observable universe.',
              collocation: 'immutable identifiers'
            },
            {
              word: 'modality',
              pos: 'n.',
              phonetic: '/moʊˈdæl.ə.t̬i/',
              definitionEn: 'A particular way in which something exists or is experienced or done.',
              translationUz: 'usul, ko\'rinish, modalite',
              sampleSentence: 'Hospitals employ several diagnostic modalities including ultrasound and MRI.',
              collocation: 'biometric modality'
            },
            {
              word: 'intricate',
              pos: 'adj.',
              phonetic: '/ˈɪn.trə.kət/',
              definitionEn: 'Having a lot of small parts or pieces arranged in a complicated way.',
              translationUz: 'chigal, murakkab, nozik qismlardan iborat',
              sampleSentence: 'The antique clock had an intricate mechanism of gears and springs.',
              collocation: 'intricate patterns'
            },
            {
              word: 'efficacy',
              pos: 'n.',
              phonetic: '/ˈef.ə.kə.si/',
              definitionEn: 'The ability, especially of a medicine or method, to produce the intended result.',
              translationUz: 'samaradorlik, kutilgan natijani bera olish kuchi',
              sampleSentence: 'Clinical trials verified the therapeutic efficacy of the new antibiotic.',
              collocation: 'proven efficacy'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u2-p2-q1',
              type: 'main-idea',
              question: 'What is the primary thesis regarding biometric technology in the text?',
              options: [
                'Biometrics should be abandoned immediately in favor of wax seals',
                'Biometrics offers unprecedented convenience and security, but poses profound risks because biological data is immutable and prone to algorithmic bias',
                'Fingerprint scanning was invented by smartphone manufacturers in 2021',
                'Iris recognition has higher failure rates than writing passwords on scrap paper'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy g\'oya: Biometriya qulay va xavfsiz, ammo insonning biologik ma\'lumotlarini o\'zgartirib bo\'lmasligi (immutable) sababli jiddiy xavf tug\'diradi.'
            },
            {
              id: 'rrw2-u2-p2-q2',
              type: 'detail',
              question: 'Why is a breach of biometric data far more dangerous than a stolen alphanumeric password?',
              options: [
                'Because passwords can be changed instantly, whereas your face and retina cannot be replaced',
                'Because biometrics requires more electricity to operate',
                'Because passwords are protected by United Nations treaties',
                'Because biometrics only works in sunny weather'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "Crucially, while a compromised password can be reset instantly, your biological identifiers are immutable: you cannot change your face or eyes".'
            },
            {
              id: 'rrw2-u2-p2-q3',
              type: 'vocabulary',
              question: 'What does the word "immutable" mean in paragraph 4?',
              options: [
                'Incapable of being changed or altered',
                'Easily deleted with software',
                'Extremely expensive to manufacture',
                'Moving at the speed of sound'
              ],
              correctIndex: 0,
              explanationUz: '"Immutable" so\'zi mutlaqo o\'zgarmas, almashtirib bo\'lmaydigan ma\'nosini bildiradi.'
            },
            {
              id: 'rrw2-u2-p2-q4',
              type: 'detail',
              question: 'Which biometric modality analyzes the connective tissue of the human eye?',
              options: [
                'Dactyloscopy',
                'Iris recognition',
                'Gait velocity tracking',
                'Voice harmonic modulation'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "Optical iris recognition captures the intricate, random patterns of pigmented connective tissue in the human eye".'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Authentication Evolution: Tokens/Passwords vs Biometrics',
            sections: [
              {
                heading: 'Traditional Tokens (Keys, Passwords)',
                points: [
                  'Can be forgotten, lost, shared, or stolen.',
                  'Can be immediately cancelled, reset, or changed upon breach.'
                ]
              },
              {
                heading: 'Biometric Identifiers (Fingerprints, Iris)',
                points: [
                  'Always carried on the person; impossible to forget.',
                  'Immutable: Cannot be revoked or changed if leaked online.',
                  'Subject to algorithmic bias and surveillance concerns.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Would you support city governments deploying real-time facial recognition cameras on public streets to catch criminals?',
            'What legal protections should exist for employees whose companies require thumbprint check-ins?'
          ]
        }
      ]
    },
    {
      id: 'rrw2-u3',
      unitNumber: 3,
      title: 'Health & Medicine',
      subjectArea: 'Transplantation & Bioethics',
      themeDescriptionUz: 'Hayvon a\'zolarini insonga ko\'chirib o\'tkazish (Ksenotransplantatsiya) va estetik jarrohlikning ommalashuvi.',
      passages: [
        {
          id: 'rrw2-u3-p1',
          passageNumber: 1,
          title: 'Xenotransplantation: Animal Organs for Human Patients',
          subtitle: 'Genetically modified porcine hearts, immune rejection, and solving the global organ shortage crisis',
          themeCategory: 'Surgical Biotechnology',
          level: 'B2',
          wordCount: 465,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Would you accept a genetically engineered pig heart if your life depended on it?',
            'Why is there such a massive global deficit of human donor organs?'
          ],
          paragraphs: [
            'Across the globe, over one hundred thousand terminally ill patients languish on national organ transplant waiting lists. Every day, seventeen individuals die while awaiting a compatible human donor kidney, heart, or liver. For decades, medical innovators have dreamed of an audacious solution to eliminate this shortage permanently: xenotransplantation—the surgical transplantation of living animal organs, tissues, or cells into human recipients.',
            'Historically, inter-species organ transfers were thwarted by immediate, catastrophic hyperacute rejection. The human immune system is genetically primed to identify foreign animal cells; within minutes of blood flowing into an unmodified animal organ, human antibodies attack the vascular endothelial lining, causing massive thrombosis and tissue necrosis.',
            'However, revolutionary breakthroughs in CRISPR gene-editing technology have turned science fiction into clinical reality. Transplant immunologists now focus on domestic pigs (Sus domesticus) because their internal organ dimensions, heart chamber volumes, and vascular physiology closely mirror adult humans. Using genetic engineering, researchers knock out three specific porcine carbohydrate genes (such as alpha-gal) that trigger human immune attack, while inserting six human protective genes to regulate blood clotting and immune tolerance.',
            'In groundbreaking clinical trials at the University of Maryland and NYU Langone, surgeons successfully transplanted gene-edited pig hearts and kidneys into human patients. While long-term cellular survival and the theoretical risk of cross-species porcine endogenous retroviruses (PERVs) require rigorous monitoring, xenotransplantation promises to transform organ transplantation from a scarce, tragic rationing system into an on-demand medical therapy.'
          ],
          summaryUz: 'Ushbu darsda hayvon (cho\'chqa) a\'zolarini insonga ko\'chirib o\'tkazish — ksenotransplantatsiya tahlil qilinadi. Dunyoda donor a\'zolar yetishmovchiligi tufayli har kuni ko\'plab bemorlar vafot etadi. CRISPR gen muhandisligi yordamida cho\'chqa a\'zolaridagi inson immun tizimi hujum qiladigan genlar o\'chirilib, insonni himoyalovchi genlar kiritilmoqda.',
          targetVocab: [
            {
              word: 'languish',
              pos: 'v.',
              phonetic: '/ˈlæŋ.ɡwɪʃ/',
              definitionEn: 'To exist in an unpleasant or unwanted situation, often for a long time, without progress.',
              translationUz: 'azob chekmoq, so\'lib qolmoq, chorasiz kutmoq',
              sampleSentence: 'Innocent prisoners languished in overcrowded cells for months awaiting trial.',
              collocation: 'languish on waiting lists'
            },
            {
              word: 'audacious',
              pos: 'adj.',
              phonetic: '/ɑːˈdeɪ.ʃəs/',
              definitionEn: 'Showing a willingness to take surprisingly bold risks.',
              translationUz: 'jasurona, jur\'atli, kutilmagan darajada dadil',
              sampleSentence: 'The surgeon proposed an audacious operation that had never been performed.',
              collocation: 'audacious solution'
            },
            {
              word: 'thwart',
              pos: 'v.',
              phonetic: '/θwɔːrt/',
              definitionEn: 'To stop something from happening or someone from doing something.',
              translationUz: 'to\'sqinlik qilmoq, yo\'lini to\'smoq, barbod qilmoq',
              sampleSentence: 'Security guards thwarted an attempted bank robbery.',
              collocation: 'thwarted by rejection'
            },
            {
              word: 'necrosis',
              pos: 'n.',
              phonetic: '/neˈkroʊ.sɪs/',
              definitionEn: 'The death of most or all of the cells in an organ or tissue due to disease or failure of blood supply.',
              translationUz: 'nekroz, to\'qimalarning nobud bo\'lishi, o\'lishi',
              sampleSentence: 'Severe frostbite can lead to tissue necrosis and gangrene in the toes.',
              collocation: 'tissue necrosis'
            },
            {
              word: 'porcine',
              pos: 'adj.',
              phonetic: '/ˈpɔːr.saɪn/',
              definitionEn: 'Like or relating to pigs.',
              translationUz: 'cho\'chqaga oid, cho\'chqasimon',
              sampleSentence: 'Porcine heart valves have been safely used in human cardiovascular surgery for decades.',
              collocation: 'porcine organs'
            },
            {
              word: 'rationing',
              pos: 'n.',
              phonetic: '/ˈræʃ.ən.ɪŋ/',
              definitionEn: 'The system of limiting the amount of something that each person is allowed to have.',
              translationUz: 'me\'yorlash, navbat bilan cheklangan miqdorda taqsimlash',
              sampleSentence: 'During wartime, governments instituted strict gasoline and food rationing.',
              collocation: 'scarce rationing system'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u3-p1-q1',
              type: 'main-idea',
              question: 'What is the primary medical significance of xenotransplantation?',
              options: [
                'It allows humans to acquire animal super-senses like night vision',
                'It provides genetically modified animal organs to resolve the critical global donor organ shortage',
                'It trains dogs and cats to assist in emergency hospital operating rooms',
                'It eliminates the need for doctors and surgeons in cardiovascular medicine'
              ],
              correctIndex: 1,
              explanationUz: 'Ksenotransplantatsiyaning ahamiyati: donor a\'zolar yetishmovchiligi inqirozini bartaraf etish uchun genetik moslashtirilgan hayvon a\'zolaridan foydalanish.'
            },
            {
              id: 'rrw2-u3-p1-q2',
              type: 'detail',
              question: 'Why are domestic pigs preferred over primates (such as chimpanzees) for human organ donation?',
              options: [
                'Pigs have organ dimensions and vascular physiology very similar to adult humans, and raise fewer ethical concerns',
                'Pigs speak fluent English in research facilities',
                'Pigs are immune to all forms of cancer',
                'Pigs have mechanical metal gears in their hearts'
              ],
              correctIndex: 0,
              explanationUz: 'Cho\'chqalarning ichki a\'zolari o\'lchami, qon tomir tizimi odamnikiga juda o\'xshash va primatlarga nisbatan axloqiy/biologik jihatdan qulayroq.'
            },
            {
              id: 'rrw2-u3-p1-q3',
              type: 'vocabulary',
              question: 'What does "hyperacute rejection" mean in the second paragraph?',
              options: [
                'A peaceful medical recovery within twenty-four hours',
                'An immediate, catastrophic immune attack destroying a foreign organ within minutes',
                'A new prescription antibiotic pill',
                'An emotional rejection of hospital cafeteria food'
              ],
              correctIndex: 1,
              explanationUz: '"Hyperacute rejection" — organizm immun tizimining begona a\'zoga bir necha daqiqada halokatli hujum qilishi.'
            },
            {
              id: 'rrw2-u3-p1-q4',
              type: 'detail',
              question: 'What genetic engineering tool enables scientists to edit pig DNA for human compatibility?',
              options: [
                'CRISPR gene-editing technology',
                'Stethoscope acoustic modulation',
                'Microscopic laser tattooing',
                'Penicillin fermentation'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "revolutionary breakthroughs in CRISPR gene-editing technology have turned science fiction into clinical reality".'
            }
          ],
          graphicOrganizer: {
            organizerType: 'problem-solution',
            title: 'Xenotransplantation: The Overcoming of Immune Barriers',
            sections: [
              {
                heading: 'The Crisis',
                points: [
                  'Over 100,000 patients on waitlists; 17 deaths daily.',
                  'Chronic global shortage of compatible human donor organs.'
                ]
              },
              {
                heading: 'Historical Barrier',
                points: [
                  'Hyperacute immune rejection triggers vascular clotting and necrosis in minutes.'
                ]
              },
              {
                heading: 'CRISPR Bioengineering Solution',
                points: [
                  'Knock out porcine alpha-gal antigen genes.',
                  'Insert 6 human protective genes to regulate blood clotting and tolerance.',
                  'Successful experimental pig-to-human heart and kidney transplants.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think religions should support or oppose animal-to-human organ transplants to save lives?',
            'What potential risks exist regarding cross-species viral transmission from animals to humans?'
          ]
        },
        {
          id: 'rrw2-u3-p2',
          passageNumber: 2,
          title: 'A Surge in Cosmetic Surgery',
          subtitle: 'The psychology of selfie dysmorphia, social media filters, and normalized aesthetic procedures',
          themeCategory: 'Psychology & Plastic Surgery',
          level: 'B2',
          wordCount: 440,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Do you regularly use beauty filters before posting selfies on social media?',
            'At what point does wanting to improve your appearance become an unhealthy psychological obsession?'
          ],
          paragraphs: [
            'For most of the twentieth century, plastic and cosmetic surgery was viewed as an extreme, secretive luxury reserved almost exclusively for Hollywood celebrities and wealthy socialites. However, over the past decade, aesthetic medical enhancements have experienced an unprecedented global boom, permeating mainstream culture across all age groups and income brackets.',
            'According to the International Society of Aesthetic Plastic Surgery, procedures such as rhinoplasty, liposuction, botulinum toxin injections (Botox), and hyaluronic acid dermal fillers have surged by over forty percent worldwide. Minimally invasive "lunchtime procedures"—which require no general anesthesia and boast rapid recovery times—have drastically lowered the barrier to entry, normalizing routine cosmetic alteration.',
            'Sociologists and clinical psychologists attribute this dramatic surge primarily to the ubiquity of smartphone cameras and algorithmic social media platforms like Instagram and TikTok. Constant exposure to heavily retouched images and real-time artificial intelligence beauty filters has distorted cultural perceptions of normal human physiology. Psychiatrists have documented a sharp rise in "Snapchat dysmorphia"—a psychiatric manifestation where individuals seek surgical alteration to resemble their own digitally filtered selfies.',
            'While cosmetic procedures can provide genuine psychological boosts in self-esteem and reconstructive healing for accident victims, medical ethicists warn of predatory commercial marketing targeting vulnerable adolescents. True long-term psychological well-being cannot be achieved solely through scalpels and syringes; treating underlying body dysmorphic disorder requires cognitive behavioral therapy rather than endless aesthetic perfectionism.'
          ],
          summaryUz: 'Ushbu darsda estetik va plastik jarrohlikning global miqyosda keskin ommalashishi hamda uning psixologik sabablari ko\'rib chiqiladi. Ijtimoiy tarmoqlardagi go\'zallik filtrlari va tahrirlangan rasmlar "Snapchat dismorfiyasi"ni keltirib chiqarmoqda, ya\'ni odamlar o\'zlarining filtrlangan selfilariga o\'xshash uchun jarrohlikka murojaat qilmoqdalar.',
          targetVocab: [
            {
              word: 'permeate',
              pos: 'v.',
              phonetic: '/ˈpɝː.mi.eɪt/',
              definitionEn: 'To spread through something and affect every part of it.',
              translationUz: 'singib ketmoq, har bir burchakka yoyilmoq, qamrab olmoq',
              sampleSentence: 'The scent of roasted coffee beans permeated the entire office building.',
              collocation: 'permeate mainstream culture'
            },
            {
              word: 'invasive',
              pos: 'adj.',
              phonetic: '/ɪnˈveɪ.sɪv/',
              definitionEn: 'Done by cutting into the body or inserting medical instruments.',
              translationUz: 'invaziv, jarrohlik aralashuvini talab qiladigan',
              sampleSentence: 'Minimally invasive laparoscopic surgery ensures much faster patient recovery.',
              collocation: 'minimally invasive'
            },
            {
              word: 'dysmorphia',
              pos: 'n.',
              phonetic: '/dɪsˈmɔːr.fi.ə/',
              definitionEn: 'A mental illness in which someone obsessive worries about perceived flaws in their physical appearance.',
              translationUz: 'dismorfiya, tashqi ko\'rinishidagi nuqsonlarga haddan tashqari xavotirlanish ruhiy holati',
              sampleSentence: 'Body dysmorphia causes patients to see severe flaws that others do not notice.',
              collocation: 'body dysmorphia'
            },
            {
              word: 'distort',
              pos: 'v.',
              phonetic: '/dɪˈstɔːrt/',
              definitionEn: 'To change the shape, meaning, or appearance of something so that it is not natural.',
              translationUz: 'buzib ko\'rsatmoq, shaklini o\'zgartirmoq, burib yubormoq',
              sampleSentence: 'Social media filters distort realistic expectations of skin texture and aging.',
              collocation: 'distort perceptions'
            },
            {
              word: 'predatory',
              pos: 'adj.',
              phonetic: '/ˈpred.ə.tɔːr.i/',
              definitionEn: 'Using someone\'s weakness or vulnerability to get an advantage for yourself.',
              translationUz: 'yirtqichona, boshqalarning nozik joyidan foydalanib boyiydigan',
              sampleSentence: 'Consumer advocacy groups banned predatory advertising aimed at insecure teenagers.',
              collocation: 'predatory marketing'
            },
            {
              word: 'scalpel',
              pos: 'n.',
              phonetic: '/ˈskæl.pəl/',
              definitionEn: 'A very sharp small knife used by doctors for doing operations.',
              translationUz: 'skalpel, jarrohlik pichog\'i',
              sampleSentence: 'The surgeon wielded the scalpel with extraordinary micro-precision.',
              collocation: 'surgeons and scalpels'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u3-p2-q1',
              type: 'main-idea',
              question: 'What is the primary driver behind the modern surge in cosmetic procedures?',
              options: [
                'An international law requiring all people to look identical',
                'Minimally invasive procedures and social media filters that distort perceptions of normal appearance',
                'A complete shortage of cosmetics and skin lotion in stores',
                'The discovery of vitamins that only work through plastic surgery'
              ],
              correctIndex: 1,
              explanationUz: 'Sababi: Kam invaziv muolajalarning qulayligi va ijtimoiy tarmoqlar go\'zallik filtrlari orqali tashqi ko\'rinish haqidagi tasavvurlarni buzib ko\'rsatmoqda.'
            },
            {
              id: 'rrw2-u3-p2-q2',
              type: 'vocabulary',
              question: 'What does the term "Snapchat dysmorphia" describe in the passage?',
              options: [
                'A software glitch that turns phone screens green',
                'A psychiatric phenomenon where patients desire cosmetic surgery to match their own digitally filtered selfies',
                'An inability to type text messages quickly',
                'A fear of using camera flashes at night'
              ],
              correctIndex: 1,
              explanationUz: '"Snapchat dysmorphia" — odamlarning o\'zlarining filtrlangan selfilariga o\'xshash uchun jarrohlardan operatsiya talab qilishi ruhiy holati.'
            },
            {
              id: 'rrw2-u3-p2-q3',
              type: 'detail',
              question: 'Why have "lunchtime procedures" like Botox and fillers grown so rapidly?',
              options: [
                'They require zero anesthesia, take minutes, and have rapid recovery times',
                'They are provided free of charge by national governments',
                'They make people invisible to security cameras',
                'They cure heart disease instantly'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "lunchtime procedures—which require no general anesthesia and boast rapid recovery times—have drastically lowered the barrier to entry".'
            },
            {
              id: 'rrw2-u3-p2-q4',
              type: 'inference',
              question: 'What is the recommended medical solution for patients with severe body dysmorphic disorder?',
              options: [
                'Performing ten consecutive surgeries immediately',
                'Providing cognitive behavioral therapy rather than endless surgical operations',
                'Banning mirrors inside all private homes',
                'Forcing patients to move to deserted islands'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "treating underlying body dysmorphic disorder requires cognitive behavioral therapy rather than endless aesthetic perfectionism".'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'The Cosmetic Surgery Boom: Drivers and Ethical Concerns',
            sections: [
              {
                heading: 'Technological & Social Catalysts',
                points: [
                  'Minimally invasive injectables (Botox, fillers) with minimal downtime.',
                  'Algorithmic social platforms creating idealized visual standards.',
                  'Ubiquitous AI beauty filters normalizing distorted facial anatomy.'
                ]
              },
              {
                heading: 'Psychological Consequences',
                points: [
                  'Emergence of "Snapchat dysmorphia" and body dissatisfaction.',
                  'Commercial exploitation of adolescent vulnerability.'
                ]
              },
              {
                heading: 'Recommended Approach',
                points: [
                  'Prioritize mental health counseling and CBT over continuous surgery.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Should social media platforms be required by law to display a disclaimer on photos that use beauty filters?',
            'What is the difference between healthy self-care and unhealthy aesthetic obsession?'
          ]
        }
      ]
    },
    {
      id: 'rrw2-u4',
      unitNumber: 4,
      title: 'Urban Planning & Smart Cities',
      subjectArea: 'Urban Architecture & Geography',
      themeDescriptionUz: '15 daqiqalik shahar konsepsiyasi, avtonom transport va zamonaviy megapolislarni yashil ekotizimga aylantirish.',
      passages: [
        {
          id: 'rrw2-u4-p1',
          passageNumber: 1,
          title: 'The 15-Minute City Revolution',
          subtitle: 'Reimagining modern urban geography to combat gridlock, loneliness, and carbon emissions',
          themeCategory: 'Urban Design',
          level: 'B2',
          wordCount: 470,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'How much time do you spend commuting to school or work every day?',
            'Would you prefer living in a neighborhood where everything you need is within a short walk or bike ride?'
          ],
          paragraphs: [
            'For nearly a century, urban planners designed modern metropolises around a single technological centerpiece: the private automobile. This automotive-centric paradigm birthed vast suburban sprawls, fractured communities with multi-lane expressways, and condemned millions of commuters to soul-crushing daily gridlock. Today, however, an audacious urban planning philosophy is sweeping forward-thinking city halls from Paris to Melbourne: the "15-Minute City."',
            'Pioneered by urban theorist Carlos Moreno, the 15-Minute City is rooted in hyper-proximity and decentralization. The foundational premise is deceptively straightforward: all urban residents should be able to access six essential daily urban functions—living, working, supplying, caring, learning, and enjoying—within a fifteen-minute journey on foot, by bicycle, or via rapid public transit from their front doorstep.',
            'Executing this transformation requires a radical rethinking of urban zoning laws. Traditional twentieth-century single-use zoning—which strictly segregated quiet residential suburbs from commercial retail zones and industrial complexes—is replaced by vibrant multi-functional spaces. School playgrounds open to the public on weekends, corporate office buildings integrate ground-floor grocery cooperatives, and reclaimed parking lanes are converted into lush pedestrian greenways and bike paths.',
            'While climate skeptics and conspiracy theorists have absurdly weaponized the concept as an alleged government plot to restrict citizen travel, urban sociologists highlight its profound civic dividends. By minimizing vehicular dependence, 15-minute neighborhoods slash urban carbon footprints, cultivate resilient local economies, and rebuild the social fabric of cities that had been systematically fragmented by car culture.'
          ],
          summaryUz: 'Ushbu darsda zamonaviy urbanistikaning yangi inqilobi — "15 daqiqalik shahar" (15-Minute City) konsepsiyasi tahlil qilinadi. Karlos Moreno tomonidan ilgari surilgan ushbu modelga ko\'ra, aholi ish, do\'kon, shifoxona, maktab va dam olish maskanlariga piyoda yoki velosipedda 15 daqiqada yetib borishi kerak. Bu transport tirbandliklarini kamaytiradi, ekologiyani yaxshilaydi va mahalliy jamoaviylikni mustahkamlaydi.',
          targetVocab: [
            {
              word: 'paradigm',
              pos: 'n.',
              phonetic: '/ˈper.ə.daɪm/',
              definitionEn: 'A very clear and typical example or model of something; a framework of ideas.',
              translationUz: 'paradigma, namunaviy tizim, qarashlar tizimi',
              sampleSentence: 'The transition to renewable power represents a complete paradigm shift.',
              collocation: 'paradigm shift'
            },
            {
              word: 'sprawl',
              pos: 'n.',
              phonetic: '/sprɑːl/',
              definitionEn: 'A large area of buildings and streets that are spread out in an untidy, unplanned way.',
              translationUz: 'shahar kengayishi, betartib cho\'zilib ketgan shahar maydoni',
              sampleSentence: 'Automobile dependence caused enormous suburban sprawl across the region.',
              collocation: 'suburban sprawl'
            },
            {
              word: 'proximity',
              pos: 'n.',
              phonetic: '/prɑːkˈsɪm.ə.t̬i/',
              definitionEn: 'The state of being near in space, time, or relationship.',
              translationUz: 'yaqinlik, yaqin masofada joylashganlik',
              sampleSentence: 'The residential apartment was praised for its close proximity to the metro station.',
              collocation: 'hyper-proximity'
            },
            {
              word: 'segregate',
              pos: 'v.',
              phonetic: '/ˈseɡ.rə.ɡeɪt/',
              definitionEn: 'To keep one group of people or things apart from another.',
              translationUz: 'ajratmoq, bir-biridan yiroqlashtirmoq',
              sampleSentence: 'Old zoning regulations strictly segregated residential homes from markets.',
              collocation: 'strictly segregate'
            },
            {
              word: 'absurdly',
              pos: 'adv.',
              phonetic: '/əbˈsɝːd.li/',
              definitionEn: 'In a way that is stupid, unreasonable, or ridiculous.',
              translationUz: 'mantiqsiz ravishda, kulgili va asossiz tarzda',
              sampleSentence: 'Online rumor mills absurdly claimed the city plan was intended to trap citizens.',
              collocation: 'absurdly weaponize'
            },
            {
              word: 'slash',
              pos: 'v.',
              phonetic: '/slæʃ/',
              definitionEn: 'To reduce something drastically and significantly in amount or size.',
              translationUz: 'keskin qisqartirmoq, kamaytirmoq',
              sampleSentence: 'Replacing car traffic with bicycle greenways slashes carbon emissions.',
              collocation: 'slash emissions'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u4-p1-q1',
              type: 'main-idea',
              question: 'What is the core premise of the "15-Minute City" concept?',
              options: [
                'Every resident must own an electric sports car capable of driving 100 mph',
                'All essential daily functions should be accessible within a 15-minute walk, bike ride, or transit trip',
                'Citizens should be barred from leaving their homes for more than 15 minutes a day',
                'All commercial grocery stores must close at 15 minutes past noon'
              ],
              correctIndex: 1,
              explanationUz: '15 daqiqalik shahar konsepsiyasining asosiy g\'oyasi — kundalik barcha ehtiyojlarga piyoda, velosipedda yoki jamoat transportida 15 daqiqada yetib borish imkoniyatidir.'
            },
            {
              id: 'rrw2-u4-p1-q2',
              type: 'detail',
              question: 'What twentieth-century urban design practice is being dismantled to build 15-minute cities?',
              options: [
                'The installation of underground drinking water pipelines',
                'Strict single-use zoning that separated residential homes far from businesses and jobs',
                'Planting shade trees along neighborhood sidewalks',
                'Constructing hospitals with emergency ambulance bays'
              ],
              correctIndex: 1,
              explanationUz: 'Matnga ko\'ra, 20-asrdagi turar-joylarni savdo va ish joylaridan qat\'iy ajratgan "single-use zoning" (bir maqsadli rayonlashtirish) tizimi bekor qilinmoqda.'
            },
            {
              id: 'rrw2-u4-p1-q3',
              type: 'vocabulary',
              question: 'What does the word "hyper-proximity" emphasize in the text?',
              options: [
                'Traveling to faraway continents by airplane',
                'Living extremely close to one\'s daily needs and amenities',
                'Driving at ultra-fast speeds on open highways',
                'Purchasing goods only through overseas shipping containers'
              ],
              correctIndex: 1,
              explanationUz: '"Hyper-proximity" kundalik ehtiyojlar va xizmat ko\'rsatish nuqtalarining odamlar yashaydigan joyga nihoyatda yaqin joylashganligini ifodalaydi.'
            },
            {
              id: 'rrw2-u4-p1-q4',
              type: 'inference',
              question: 'According to sociologists, how did twentieth-century automobile culture harm communities?',
              options: [
                'It caused all petroleum refineries to run out of oil',
                'It systematically fragmented social cohesion and condemned citizens to exhausting commutes',
                'It forced everyone to become professional race car drivers',
                'It prevented schools from teaching mathematics'
              ],
              correctIndex: 1,
              explanationUz: 'Sotsiologlarga ko\'ra, avtomobilga asoslangan shahar tuzilishi ijtimoiy bog\'liqlikni parchalab yubordi va odamlarni uzoq tirbandliklarda vaqt yo\'qotishga majbur qildi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'problem-solution',
            title: 'Urban Mobility Transition',
            sections: [
              {
                heading: '20th Century Auto-Centric Flaws',
                points: [
                  'Suburban sprawl and separated single-use zoning.',
                  'Gridlock, air pollution, and social fragmentation.'
                ]
              },
              {
                heading: '15-Minute City Framework',
                points: [
                  'Living, working, shopping, healthcare within a 15-minute radius.',
                  'Multi-functional buildings, pedestrian greenways, and bike corridors.'
                ]
              },
              {
                heading: 'Projected Civic Outcomes',
                points: [
                  'Slashed carbon emissions and revived localized neighborhood economies.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'What specific amenities in your hometown are currently too far to reach without a car?',
            'How might historic cities adapt old narrow streets into modern pedestrian-friendly green corridors?'
          ]
        },
        {
          id: 'rrw2-u4-p2',
          passageNumber: 2,
          title: 'Autonomous Mobility and Urban Transit',
          subtitle: 'Will robotaxis solve urban congestion or overwhelm public roadways with empty zombie cars?',
          themeCategory: 'Transportation Technology',
          level: 'B2',
          wordCount: 460,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Have you ever ridden in or seen a driverless autonomous vehicle?',
            'Do you think self-driving taxis will replace human taxi and bus drivers in the next decade?'
          ],
          paragraphs: [
            'In tech hubs such as San Francisco, Phoenix, and Shenzhen, science fiction has silently transitioned into everyday infrastructure. Fleets of driverless "robotaxis"—equipped with spinning LiDAR sensors, optical cameras, and artificial intelligence neural networks—navigate busy boulevards, yielding to pedestrians and executing complex unprotected left turns without a human behind the steering wheel.',
            'Advocates of autonomous vehicles (AVs) forecast a utopian transformation of municipal transportation. Human error accounts for over ninety percent of all motor vehicle collisions worldwide. By replacing distracted, intoxicated, or reckless human operators with tireless algorithmic vision, autonomous fleets could prevent over one million vehicular fatalities globally each year. Furthermore, widespread adoption of shared robotaxis could render private vehicle ownership obsolete, allowing cities to reclaim vast downtown parking structures for affordable public housing and urban parks.',
            'However, transportation economists and urban planners sound severe alarms over the unintended consequences of unregulated autonomous mobility. If hailing an autonomous taxi becomes cheaper than purchasing a ticket for a municipal subway or tram, millions of commuters may abandon collective transit in favor of private robotic cabins. The catastrophic result would be "induced demand" on a staggering scale.',
            'Without smart congestion pricing and strict vehicle occupancy standards, roadways could be paralyzed by millions of empty "zombie cars" cruising continuously to avoid paid parking fees. Urban transit experts argue that autonomous vehicles cannot replace high-capacity electric subways and bus rapid transit; true sustainability lies in integrating driverless shuttles as "first-mile, last-mile" feeders that connect residential neighborhoods to high-speed metropolitan rail networks.'
          ],
          summaryUz: 'Ushbu darsda haydovchisiz avtomobillar (Robotaxis / AVs) va ularning shahar transport tizimiga ta\'siri o\'rganiladi. Sun\'iy intellekt boshqaruvidagi mashinalar avtohalokatlarni keskin kamaytirishi va shaxsiy mashina sotib olish zaruratini yo\'qotishi mumkin. Biroq ular haddan tashqari ko\'payib ketsa, ko\'chalarni bo\'sh yurgan "zombi mashinalar" to\'ldirib, tirbandlik yanada kuchayishi mumkin. Yechim — ularni metro va poyezdlar bilan integratsiya qilishdir.',
          targetVocab: [
            {
              word: 'utopian',
              pos: 'adj.',
              phonetic: '/juːˈtoʊ.pi.ən/',
              definitionEn: 'Relating to or aiming for a perfect, ideal world that is often impossible to achieve.',
              translationUz: 'utopik, orzudagi ideal, xayoliy mukammal',
              sampleSentence: 'Technologists often describe autonomous transit in utopian terms.',
              collocation: 'utopian transformation'
            },
            {
              word: 'reckless',
              pos: 'adj.',
              phonetic: '/ˈrek.ləs/',
              definitionEn: 'Doing something dangerous without caring about the risks and possible consequences.',
              translationUz: 'ehtiyotsiz, tavakkalchi, o\'ylamasdan ish tutuvchi',
              sampleSentence: 'Speeding through red lights is an act of reckless driving.',
              collocation: 'reckless human operators'
            },
            {
              word: 'obsolete',
              pos: 'adj.',
              phonetic: '/ˌɑːb.səˈliːt/',
              definitionEn: 'Not in use anymore, having been replaced by something newer and better.',
              translationUz: 'eskirgan, urfdan qolgan, keraksiz bo\'lib qolgan',
              sampleSentence: 'Shared autonomous fleets could render private car ownership obsolete.',
              collocation: 'render obsolete'
            },
            {
              word: 'paralyze',
              pos: 'v.',
              phonetic: '/ˈper.ə.laɪz/',
              definitionEn: 'To stop something from being able to function, act, or move normally.',
              translationUz: 'falaj qilmoq, butunlay to\'xtatib qo\'ymoq',
              sampleSentence: 'Uncontrolled robotaxi cruising could paralyze downtown traffic.',
              collocation: 'paralyze roadways'
            },
            {
              word: 'cruising',
              pos: 'n.',
              phonetic: '/ˈkruː.zɪŋ/',
              definitionEn: 'Driving around slowly and aimlessly, especially waiting for an opportunity or fare.',
              translationUz: 'aylanib yurish, bo\'sh qatnov',
              sampleSentence: 'Empty autonomous vehicles keep cruising around city blocks to dodge parking fees.',
              collocation: 'cruising continuously'
            },
            {
              word: 'feeder',
              pos: 'n.',
              phonetic: '/ˈfiː.dɚ/',
              definitionEn: 'A subsidiary transport line or branch that connects with a main line or route.',
              translationUz: 'yetkazib beruvchi liniya, bog\'lovchi yo\'nalish',
              sampleSentence: 'Autonomous vans serve as convenient feeder routes connecting suburbs to the subway.',
              collocation: 'first-mile feeders'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw2-u4-p2-q1',
              type: 'main-idea',
              question: 'What dual perspective does the passage present regarding autonomous vehicles?',
              options: [
                'They are too expensive to ever be built and will fail immediately',
                'They offer tremendous safety advantages but risk exacerbating traffic congestion without regulation',
                'They will only be used by submarines exploring ocean trenches',
                'They can run entirely without electricity or fuel'
              ],
              correctIndex: 1,
              explanationUz: 'Maqolada haydovchisiz mashinalarning halokatlarni kamaytiruvchi katta yutuqlari bilan birga, tartibga solinmasa tirbandlikni yanada oshirishi xavfi tahlil qilinadi.'
            },
            {
              id: 'rrw2-u4-p2-q2',
              type: 'detail',
              question: 'Why could millions of "zombie cars" crowd urban streets in the future?',
              options: [
                'To escape from computer viruses on garage hard drives',
                'Because cruising empty is cheaper for owners than paying expensive downtown parking fees',
                'Because robotaxis are required to hunt for lost pets',
                'Because traffic lights will be turned off permanently'
              ],
              correctIndex: 1,
              explanationUz: 'Matnga ko\'ra, qimmat to\'xtash joylari to\'lovidan qochish uchun bo\'sh avtonom mashinalar ko\'chalarda tinimsiz aylanib (cruising) yurishi mumkin.'
            },
            {
              id: 'rrw2-u4-p2-q3',
              type: 'vocabulary',
              question: 'What does the term "render obsolete" mean in paragraph 2?',
              options: [
                'To make something brand new and extremely expensive',
                'To cause something to become outdated, useless, or replaced',
                'To repaint an old car in bright yellow',
                'To export machinery across ocean borders'
              ],
              correctIndex: 1,
              explanationUz: '"Render obsolete" biror narsani eskirgan, keraksiz va o\'rnini yangi texnologiya egallagan holatga keltirishni anglatadi.'
            },
            {
              id: 'rrw2-u4-p2-q4',
              type: 'inference',
              question: 'What is the optimal strategic role for driverless shuttles according to urban transit experts?',
              options: [
                'Completely replacing underground subway networks',
                'Acting as "first-mile, last-mile" feeders to connect neighborhoods to high-speed public rail',
                'Banning all human pedestrians from city sidewalks',
                'Operating exclusively inside private shopping malls'
              ],
              correctIndex: 1,
              explanationUz: 'Ekspertlar fikricha, haydovchisiz mashinalar asosiy metro/poyezdlarning o\'rnini bosolmaydi, balki odamlarni mahallalardan poyezd stantsiyalariga olib boruvchi bog\'lovchi ("feeder") bo\'lishi kerak.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Autonomous Mobility: Promises vs Pitfalls',
            sections: [
              {
                heading: 'Anticipated Benefits',
                points: [
                  'Eliminating 90%+ of crashes caused by reckless human error.',
                  'Phasing out private car ownership to repurpose parking lots for public parks.'
                ]
              },
              {
                heading: 'Potential Pitfalls',
                points: [
                  'Cannibalization of public transit ridership.',
                  'Empty "zombie cars" cruising streets to avoid parking costs.'
                ]
              },
              {
                heading: 'Sustainable Policy Solution',
                points: [
                  'Congestion pricing and integrating AVs as first-mile feeders to train lines.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Would you feel comfortable letting a driverless car take your children to school?',
            'How should governments retrain professional taxi and delivery drivers displaced by automation?'
          ]
        }
      ]
    },
    ...BOOK2_MORE_UNITS,
    ...BOOK2_UNITS_PART3
  ]
};
