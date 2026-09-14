import { RealWorldUnit } from '../../types';

export const BOOK2_UNITS_PART3: RealWorldUnit[] = [
  // ==========================================
  // UNIT 7: Language & Literature
  // ==========================================
  {
    id: 'rrw2-u7',
    unitNumber: 7,
    title: 'Language & Literature',
    subjectArea: 'Neurolinguistics & Mythological Studies',
    themeDescriptionUz: 'Til o\'rganishning neyrobiologik sirlari va afsonalarning insoniyat psixologiyasidagi abadiy o\'rni.',
    passages: [
      {
        id: 'rrw2-u7-p1',
        passageNumber: 1,
        title: 'How the Brain Learns a Second Language',
        subtitle: 'Neuroplasticity, the critical period hypothesis, and bilingual cognitive resilience',
        themeCategory: 'Neurolinguistics',
        level: 'B2',
        wordCount: 420,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do young children acquire languages with native accents while adults struggle with pronunciation?',
          'Does speaking two or more languages protect the brain against aging?'
        ],
        paragraphs: [
          'For decades, linguists debated the "Critical Period Hypothesis," which posits that the human brain possesses an innate window of neurobiological plasticity for effortless language acquisition that gradually closes around puberty. While children absorb vocabulary and syntactic nuances almost effortlessly through passive immersion, adult learners must recruit deliberate conscious strategies, utilizing prefrontal executive networks to master complex grammar rules.',
          'Functional neuroimaging reveals that the bilingual brain is an astonishingly dynamic organ. When an individual is bilingual from infancy, both languages are processed within overlapping regions of Broca’s and Wernicke’s areas. Conversely, late adult learners often store the secondary language in distinct, adjacent cortical patches, requiring higher metabolic energy and conscious mental translation during rapid discourse.',
          'Despite the challenges confronted by mature students, mastering a second language provides profound neuroprotective dividends. The constant mental gymnastics required to suppress one linguistic system while activating another exercises the brain\'s executive control circuitry. Epidemiological studies demonstrate that lifelong bilingualism delays the onset of symptomatic Alzheimer\'s and dementia by an average of four to five years.',
          'The human brain never completely loses its capacity for linguistic renewal. Through disciplined practice, emotional engagement, and communicative immersion, adults can rewire their neural architecture and achieve fluent communication at any stage of life.'
        ],
        summaryUz: 'Neyrolingvistika: miyaning ikkinchi tilni o\'rganish mexanizmi, neyroplastiklik, bolalik va kattalikdagi farqlar hamda ikki tillilikning (bilingualism) miyani qarishdan himoyalashi.',
        targetVocab: [
          {
            word: 'neuroplasticity',
            pos: 'n.',
            phonetic: '/ˌnjʊə.rəʊ.plæsˈtɪs.ə.ti/',
            definitionEn: 'The ability of the brain to form and reorganize synaptic connections, especially in response to learning or experience.',
            translationUz: 'Neyroplastiklik, miyaning qayta shakllanish qobiliyati',
            sampleSentence: 'Lifelong study harnesses neuroplasticity to forge fresh pathways between brain hemispheres.',
            collocation: 'brain neuroplasticity',
            synonym: 'adaptability'
          },
          {
            word: 'syntactic',
            pos: 'adj.',
            phonetic: '/sɪnˈtæk.tɪk/',
            definitionEn: 'Relating to the rules of language and grammar governing sentence structure.',
            translationUz: 'Sintaktik, gap tuzilishiga oid',
            sampleSentence: 'Children intuitively master complex syntactic patterns without formal grammatical instruction.',
            collocation: 'syntactic structure',
            synonym: 'grammatical'
          },
          {
            word: 'adjacent',
            pos: 'adj.',
            phonetic: '/əˈdʒeɪ.sənt/',
            definitionEn: 'Next to or adjoining something else; neighboring.',
            translationUz: 'Yondosh, yonma-yon joylashgan',
            sampleSentence: 'Late language learners store vocabulary in adjacent cortical tissue rather than primary language zones.',
            collocation: 'adjacent area',
            synonym: 'neighboring'
          },
          {
            word: 'dividend',
            pos: 'n.',
            phonetic: '/ˈdɪv.ɪ.dend/',
            definitionEn: 'A benefit or desirable result from an effort or investment.',
            translationUz: 'Foyda, ijobiy samara, daromad',
            sampleSentence: 'Daily reading pays rich intellectual dividends in vocabulary retention and critical reasoning.',
            collocation: 'reap dividends',
            synonym: 'benefit'
          },
          {
            word: 'suppress',
            pos: 'v.',
            phonetic: '/səˈpres/',
            definitionEn: 'To consciously inhibit or prevent an impulse, response, or linguistic interference.',
            translationUz: 'Bosmoq, tiymoq, cheklamoq',
            sampleSentence: 'Bilingual speakers continuously suppress their native tongue while speaking a foreign language.',
            collocation: 'suppress interference',
            synonym: 'inhibit'
          },
          {
            word: 'onset',
            pos: 'n.',
            phonetic: '/ˈɒn.set/',
            definitionEn: 'The initial beginning or early manifestation of something, especially something unpleasant.',
            translationUz: 'Boshlanish, ilk alomat',
            sampleSentence: 'Active bilingual practice can significantly postpone the onset of cognitive decline in older adults.',
            collocation: 'delay the onset',
            synonym: 'commencement'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u7-p1-q1',
            type: 'main-idea',
            question: 'What is the main finding regarding bilingualism and brain function discussed in the text?',
            options: [
              'Learning a second language damages the vocal cords and ears permanently.',
              'While adult language learning involves distinct neural pathways, the practice bolsters executive control and confers significant cognitive protection against dementia.',
              'Adults are biologically incapable of learning any foreign vocabulary after age 18.',
              'Bilingual speakers forget how to count in their native language.'
            ],
            correctIndex: 1,
            explanationUz: 'Kattalarda til o\'rganish boshqacha neyron yo\'llarida kechsa-da, u miyaning ijro nazoratini kuchaytiradi va demensiyani 4-5 yilga kechiktiradi.'
          },
          {
            id: 'rrw2-u7-p1-q2',
            type: 'detail',
            question: 'According to epidemiological research in paragraph 3, by how long does lifelong bilingualism delay symptoms of Alzheimer\'s and dementia?',
            options: ['By approximately 6 months', 'By an average of four to five years', 'By twenty years', 'It has no measurable effect'],
            correctIndex: 1,
            explanationUz: '3-paragrafda keltirilganidek, umrbo\'yi ikki tilda so\'zlashish Alsgeymer va demensiya alomatlarini o\'rtacha 4-5 yilga kechiktiradi.'
          },
          {
            id: 'rrw2-u7-p1-q3',
            type: 'vocabulary',
            question: 'The word "adjacent" in paragraph 2 is closest in meaning to:',
            options: ['Distant', 'Opposite', 'Adjoining and neighboring', 'Underwater'],
            correctIndex: 2,
            explanationUz: '"Adjacent" so\'zi yondosh, tutash, yonma-yon joylashgan ma\'nosini beradi.'
          },
          {
            id: 'rrw2-u7-p1-q4',
            type: 'inference',
            question: 'Why does constant mental switching between two languages strengthen executive cognitive circuitry?',
            options: [
              'Because the brain must constantly inhibit interference from one language while retrieving the other.',
              'Because foreign words contain higher electrical voltages.',
              'Because bilinguals require less sleep at night.',
              'Because grammar books weigh more than ordinary novels.'
            ],
            correctIndex: 0,
            explanationUz: 'Bir tildan ikkinchisiga o\'tishda miya keraksiz tilni bosib turish (inhibition) va keraklisini tanlash mashqini doimiy bajaradi, bu esa aqliy quvvatni oshiradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Childhood vs Adult Language Acquisition in the Brain',
          sections: [
            {
              heading: 'Infancy & Childhood Acquisition',
              points: [
                'High neuroplasticity during the critical period',
                'Both languages processed in integrated, overlapping cortical areas',
                'Effortless absorption of phonetic subtleties and native accent'
              ]
            },
            {
              heading: 'Adult Acquisition & Lifelong Dividends',
              points: [
                'Recruits prefrontal executive networks and conscious analytical rules',
                'Secondary language stored in distinct adjacent cortical regions',
                'Builds cognitive reserve that delays dementia symptoms by 4–5 years'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should foreign language instruction be mandatory in all kindergarten curriculums?',
          'What personal strategies have helped you overcome the fear of making grammatical errors when speaking?'
        ]
      },
      {
        id: 'rrw2-u7-p2',
        passageNumber: 2,
        title: 'The Enduring Power of Myth: Archetypes Across Cultures',
        subtitle: 'Joseph Campbell’s Hero’s Journey and the shared psychological architecture of human storytelling',
        themeCategory: 'Literary Theory',
        level: 'B2',
        wordCount: 425,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do ancient mythologies from Greece, Mesopotamia, and Polynesia share similar plotlines?',
          'How do modern movies like Star Wars or Harry Potter mirror ancient mythological quests?'
        ],
        paragraphs: [
          'Thousands of miles and millennia apart, ancient civilizations that had zero contact with one another composed epic tales with startlingly congruent narrative skeletons. From the Mesopotamian Epic of Gilgamesh and the Greek Odyssey to Native American folklore and Scandinavian sagas, humanity consistently recycled the same mythological tapestry.',
          'In his seminal 1949 work, "The Hero with a Thousand Faces," comparative mythologist Joseph Campbell identified this universal narrative template as the "Monomyth," or the Hero’s Journey. Drawing on the analytical psychology of Carl Jung, Campbell posited that myths are not historical fantasies; rather, they are symbolic exteriorizations of universal psychological archetypes residing in the human collective unconscious.',
          'The monomythic structure follows a cyclical trajectory divided into three core stages: Departure, Initiation, and Return. A reluctant protagonist receives a "call to adventure," crosses a threshold into an unfamiliar supernatural realm, confronts terrifying trials with the guidance of a wise mentor, undergoes an ego-death and rebirth, and ultimately returns to their community bearing an elixir of renewal.',
          'This archetypal blueprint endures because it mirrors our own internal psychological journey. Each human being must leave the safety of childhood, confront chaotic hardships in the world, slay inner demons of fear and insecurity, and return with wisdom. Myth is the psychological compass that teaches humanity how to become mature and whole.'
        ],
        summaryUz: 'Qiyosiy mifologiya va adabiyot: Jozef Kempbellning "Monomif" (Qahramon sayohati) nazariyasi, Karl Yungning arxetiplari va afsonalarning insoniyat ruhiyati uchun ahamiyati.',
        targetVocab: [
          {
            word: 'congruent',
            pos: 'adj.',
            phonetic: '/ˈkɒŋ.ɡru.ənt/',
            definitionEn: 'In agreement or harmony; corresponding in character or kind.',
            translationUz: 'Mos tushuvchi, o\'xshash, uyg\'un',
            sampleSentence: 'Anthropologists noted congruent themes of flood survival across independent continents.',
            collocation: 'congruent patterns',
            synonym: 'harmonious'
          },
          {
            word: 'seminal',
            pos: 'adj.',
            phonetic: '/ˈsem.ɪ.nəl/',
            definitionEn: 'Strongly influencing later developments; groundbreaking and formative.',
            translationUz: 'Asos soluvchi, tub burilish yasovchi',
            sampleSentence: 'Campbell\'s seminal treatise transformed modern Hollywood screenwriting and literary criticism.',
            collocation: 'seminal work',
            synonym: 'groundbreaking'
          },
          {
            word: 'exteriorization',
            pos: 'n.',
            phonetic: '/ɪkˌstɪə.ri.ə.laɪˈzeɪ.ʃən/',
            definitionEn: 'The act of expressing or projecting an internal feeling, psychological state, or idea outward.',
            translationUz: 'Tashqi ko\'rinishga chiqarish, tashqi proeksiya',
            sampleSentence: 'Mythological dragons represent the exteriorization of our deepest subconscious fears.',
            collocation: 'symbolic exteriorization',
            synonym: 'manifestation'
          },
          {
            word: 'protagonist',
            pos: 'n.',
            phonetic: '/prəˈtæɡ.ən.ɪst/',
            definitionEn: 'The leading character or one of the major figures in a drama, movie, novel, or real-world situation.',
            translationUz: 'Bosh qahramon, markaziy siymo',
            sampleSentence: 'The reluctant protagonist initially refuses the call before accepting the perilous voyage.',
            collocation: 'reluctant protagonist',
            synonym: 'hero'
          },
          {
            word: 'elixir',
            pos: 'n.',
            phonetic: '/ɪˈlɪk.sər/',
            definitionEn: 'A magical or medicinal potion; a transformative gift or wisdom that restores life.',
            translationUz: 'Eliksir, shifobaxsh malham yoki hikmat',
            sampleSentence: 'The champion returned from the underworld holding the elixir that revived his dying kingdom.',
            collocation: 'restorative elixir',
            synonym: 'potion'
          },
          {
            word: 'archetypal',
            pos: 'adj.',
            phonetic: '/ˌɑː.kɪˈtaɪ.pəl/',
            definitionEn: 'Very typical of a certain kind of person or thing; representing an original model.',
            translationUz: 'Arxetipik, asl namunaviy',
            sampleSentence: 'The wise mentor who sacrifices himself is an archetypal figure found in global epics.',
            collocation: 'archetypal hero',
            synonym: 'quintessential'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u7-p2-q1',
            type: 'main-idea',
            question: 'What is the primary argument regarding universal myths presented in the text?',
            options: [
              'Myths are inaccurate weather reports written by ancient sailors.',
              'Global mythologies share a unified narrative structure (the Monomyth) because they reflect universal psychological archetypes of human maturity.',
              'Greek myths were written by modern novelists in the twentieth century.',
              'All ancient stories should be banned from modern literature classes.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqolada barcha xalqlarning afsonalari inson ruhiyati va yetuklikka erishishning universal arxetiplari (Monomif) tufayli o\'xshash ekanligi tushuntiriladi.'
          },
          {
            id: 'rrw2-u7-p2-q2',
            type: 'detail',
            question: 'What three core stages constitute Joseph Campbell’s Hero’s Journey?',
            options: [
              'Birth, Marriage, and Wealth',
              'Departure, Initiation, and Return',
              'Study, Employment, and Retirement',
              'Conquest, Destruction, and Rebuilding'
            ],
            correctIndex: 1,
            explanationUz: '3-paragrafda qahramon yo\'lining 3 bosqichi aniq keltirilgan: Ketish (Departure), Sinov/Tashabbus (Initiation) va Qaytish (Return).'
          },
          {
            id: 'rrw2-u7-p2-q3',
            type: 'vocabulary',
            question: 'In paragraph 2, the word "seminal" most nearly describes a work that is:',
            options: ['Boring and forgotten', 'Highly influential and pioneering', 'Extremely short', 'Written in stone'],
            correctIndex: 1,
            explanationUz: '"Seminal" so\'zi sohada yangi yo\'nalish ochgan, asos bo\'lgan va ulkan ta\'sir ko\'rsatgan degan ma\'noni bildiradi.'
          },
          {
            id: 'rrw2-u7-p2-q4',
            type: 'inference',
            question: 'Why do modern blockbuster movies like Star Wars continue to use Campbell\'s monomyth formula?',
            options: [
              'Movie studios are legally obligated to sign Campbell’s copyright contract.',
              'The structure resonates deeply with audiences because it echoes personal internal struggles with adversity and growth.',
              'Special effects computers cannot render any other plot.',
              'Audiences dislike watching characters change.'
            ],
            correctIndex: 1,
            explanationUz: 'Bu formula har bir insonning shaxsiy qo\'rquvlarini yengish va ulg\'ayish dardi bilan hamohang bo\'lgani uchun tomoshabinlarni doim o\'ziga jalb qiladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'timeline',
          title: 'The Monomyth Cyclical Stages (The Hero\'s Journey)',
          sections: [
            {
              heading: 'Phase 1: Departure',
              points: [
                'Call to Adventure from the ordinary world',
                'Initial refusal of the call followed by mentor meeting',
                'Crossing the threshold into the unknown'
              ]
            },
            {
              heading: 'Phase 2: Initiation',
              points: [
                'Road of trials, tests, allies, and enemies',
                'Supreme ordeal: facing the greatest fear (ego death)',
                'Seizing the reward or transformative insight'
              ]
            },
            {
              heading: 'Phase 3: Return',
              points: [
                'Resurrection and crossing the return threshold',
                'Master of two worlds, sharing the elixir with the community'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Can you identify the stages of the Hero\'s Journey in your favorite movie or book?',
          'What "inner dragon" or fear must a modern university graduate slay to enter adulthood?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 8: Space & Exploration
  // ==========================================
  {
    id: 'rrw2-u8',
    unitNumber: 8,
    title: 'Space & Exploration',
    subjectArea: 'Planetary Mining & Deep Ocean Extremophiles',
    themeDescriptionUz: 'Asteroidlardan nodir metallarni qazib olish va chuqur okean tubidagi sirli ekotizimlar.',
    passages: [
      {
        id: 'rrw2-u8-p1',
        passageNumber: 1,
        title: 'Mining the Asteroid Belt: Economics of Celestial Wealth',
        subtitle: 'Platinum group metals, water propellant harvesting, and the legal battle over space resources',
        themeCategory: 'Space Economics',
        level: 'B2',
        wordCount: 430,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What raw materials found on asteroids could help combat scarcity on Earth?',
          'Should private corporations be allowed to own celestial bodies?'
        ],
        paragraphs: [
          'As Earth’s terrestrial deposits of high-grade copper, nickel, cobalt, and platinum-group elements face imminent depletion, forward-looking venture capitalists and aerospace consortiums are gazing beyond our atmosphere toward the asteroid belt. Orbiting between Mars and Jupiter are millions of metallic boulders containing untold trillions of dollars in industrial minerals.',
          'Consider Asteroid 16 Psyche—a colossal metal-rich remnant core measuring over two hundred kilometers across. Planetary spectroscopists calculate that Psyche alone houses enough iron, nickel, and gold to theoretically crash terrestrial commodity markets. However, the most urgent celestial commodity is not precious gold, but ordinary water ice locked in carbonaceous chondrite asteroids. Water is the lifeblood of deep space exploration: when electrolyzed into hydrogen and oxygen, it provides rocket propellant, eliminating the exorbitant expense of launching heavy fuel out of Earth\'s gravitational well.',
          'Technical blueprints for asteroid capture involve autonomous robotic tugs equipped with solar-thermal mirrors or high-power ion propulsion drives. These spacecraft would rendezvous with near-Earth objects, redirect their trajectories into stable lunar orbit, and extract volatile gases and metals using autonomous centrifugal smelters.',
          'Nevertheless, extraterrestrial mining faces thorny legal quandaries. The 1967 United Nations Outer Space Treaty declares outer space to be the "province of all mankind," strictly prohibiting national appropriation of celestial bodies. Resolving whether private extraction violates international sovereignty is a legal frontier as uncharted as the cosmos itself.'
        ],
        summaryUz: 'Asteroidlardan boylik qazib olish: platina va nodir metallar, suvdan raketa yoqilg\'isi olish hamda BMTning 1967-yilgi Koinot shartnomasidagi huquqiy muammolar.',
        targetVocab: [
          {
            word: 'consortium',
            pos: 'n.',
            phonetic: '/kənˈsɔː.ti.əm/',
            definitionEn: 'An association of several companies, organizations, or governments working together for a common project.',
            translationUz: 'Konsortsium, korxonalar birlashmasi',
            sampleSentence: 'An international aerospace consortium secured private funding to build an asteroid survey satellite.',
            collocation: 'international consortium',
            synonym: 'coalition'
          },
          {
            word: 'remnant',
            pos: 'n.',
            phonetic: '/ˈrem.nənt/',
            definitionEn: 'A small remaining quantity of something; a surviving trace or fragment.',
            translationUz: 'Qoldiq, parcha',
            sampleSentence: 'Metallic asteroids are believed to be the exposed core remnants of shattered protoplanets.',
            collocation: 'remnant of',
            synonym: 'residue'
          },
          {
            word: 'rendezvous',
            pos: 'v.',
            phonetic: '/ˈrɒn.deɪ.vuː/',
            definitionEn: 'To meet at an agreed time and place; to bring spacecraft into close orbital proximity.',
            translationUz: 'Belgilangan joyda uchrashmoq, tutashmoq',
            sampleSentence: 'The autonomous robotic probe will rendezvous with the targeted asteroid in late 2029.',
            collocation: 'rendezvous with the craft',
            synonym: 'meet'
          },
          {
            word: 'volatile',
            pos: 'adj.',
            phonetic: '/ˈvɒl.ə.taɪl/',
            definitionEn: 'Easily evaporated at normal temperatures; rapidly changing or unstable.',
            translationUz: 'Uchuvchan (gazlar), tez o\'zgaruvchan',
            sampleSentence: 'Solar furnaces bake the asteroid surface to harvest volatile gases like water and ammonia.',
            collocation: 'volatile compounds',
            synonym: 'evaporable'
          },
          {
            word: 'appropriation',
            pos: 'n.',
            phonetic: '/əˌprəʊ.priˈeɪ.ʃən/',
            definitionEn: 'The action of taking something for one\'s own use, typically without the owner\'s permission.',
            translationUz: 'O\'zlashtirib olish, xususiylashtirish',
            sampleSentence: 'The treaty explicitly forbids any national appropriation of lunar territory or asteroids.',
            collocation: 'unlawful appropriation',
            synonym: 'expropriation'
          },
          {
            word: 'sovereignty',
            pos: 'n.',
            phonetic: '/ˈsɒv.rɪn.ti/',
            definitionEn: 'Supreme power or authority; the authority of a state to govern itself or another state.',
            translationUz: 'Suverenitet, mustaqil davlat boshqaruvi',
            sampleSentence: 'Debates persist over whether commercial claims encroach upon international sovereignty.',
            collocation: 'national sovereignty',
            synonym: 'autonomy'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u8-p1-q1',
            type: 'main-idea',
            question: 'What is the primary economic and operational motivation behind asteroid mining?',
            options: [
              'Building holiday resorts on asteroids for tourists.',
              'Harvesting scarce industrial metals and extracting polar/carbonaceous water ice to fuel interplanetary space transit.',
              'Bringing asteroid dust to Earth to make beauty face masks.',
              'Crashing asteroids into oceans to create new islands.'
            ],
            correctIndex: 1,
            explanationUz: 'Asosiy maqsad nodir metallarni qazib olish va suv muzidan koinotda raketa yoqilg\'isi ishlab chiqarishdir.'
          },
          {
            id: 'rrw2-u8-p1-q2',
            type: 'detail',
            question: 'Why is water ice on asteroids considered even more commercially valuable in space than precious metals?',
            options: [
              'Because astronauts use it exclusively to sculpt ice statues.',
              'Because water can be split into hydrogen and oxygen for rocket fuel, avoiding high launch costs from Earth.',
              'Because space water is completely non-conductive.',
              'Because Earth has run out of drinking water entirely.'
            ],
            correctIndex: 1,
            explanationUz: 'Suvni vodorod va kislorodga ajratib raketa yoqilg\'isi qilish mumkin, bu Yerning og\'ir gravitatsiyasidan yoqilg\'i tashish xarajatlarini yo\'qqa chiqaradi.'
          },
          {
            id: 'rrw2-u8-p1-q3',
            type: 'vocabulary',
            question: 'The word "appropriation" in paragraph 4 most nearly means:',
            options: ['Charitable donation', 'Unilateral taking or claiming ownership of something', 'Scientific examination', 'Peaceful negotiation'],
            correctIndex: 1,
            explanationUz: '"Appropriation" so\'zi biror mulk yoki hududni o\'zlashtirib olish, egallab olish degan ma\'noni beradi.'
          },
          {
            id: 'rrw2-u8-p1-q4',
            type: 'inference',
            question: 'Why does the 1967 Outer Space Treaty pose a dilemma for modern private space mining firms?',
            options: [
              'It forces companies to pay taxes in solid gold bars.',
              'It declares space the common heritage of all mankind, leaving the private property rights over mined space resources ambiguous.',
              'It bans all rocket launches from the northern hemisphere.',
              'It requires all astronauts to speak French.'
            ],
            correctIndex: 1,
            explanationUz: '1967-yilgi shartnoma koinotni butun insoniyat mulki deb e\'lon qilgan, shuning uchun xususiy kompaniyalarning resurslarga egalik huquqi noaniq bo\'lib qolmoqda.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Asteroid Mining Logistics and Strategic Value',
          sections: [
            {
              heading: 'Resource Drivers',
              points: [
                'Depletion of terrestrial critical minerals (platinum, nickel, cobalt)',
                'Abundant water ice in carbonaceous asteroids usable for orbital rocket fuel',
                'Massive metallic bodies like 16 Psyche contain trillions in raw metals'
              ]
            },
            {
              heading: 'Technological & Regulatory Challenges',
              points: [
                'Autonomous orbital rendezvous and trajectory redirection into lunar orbit',
                'In-situ centrifugal smelting in zero-gravity environments',
                'Legal ambiguities surrounding property rights under the 1967 Outer Space Treaty'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If a private corporation captures an asteroid, should they be required to share profits with developing nations?',
          'Could mining space resources solve resource-driven wars on Earth, or will it create new space conflicts?'
        ]
      },
      {
        id: 'rrw2-u8-p2',
        passageNumber: 2,
        title: 'The Deep Ocean: Earth\'s Final Frontier',
        subtitle: 'Hydrothermal vents, chemosynthesis, and astrobiological analogs in the abyssal zone',
        themeCategory: 'Oceanography & Astrobiology',
        level: 'B2',
        wordCount: 420,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Can life thrive in total darkness without any sunlight whatsoever?',
          'How does exploring Earth\'s deep ocean help us search for life on Jupiter\'s moon Europa?'
        ],
        paragraphs: [
          'We possess more detailed topographical maps of the surfaces of Mars and the Moon than we do of our own planet\'s ocean floor. Beneath the sunlit photic zone lies the abyss—a realm of crushing hydrostatic pressure, near-freezing temperatures, and absolute darkness. Until the late 1970s, marine biologists assumed the abyssal plains were desolate biological deserts incapable of supporting complex life.',
          'That assumption was shattered in 1977 when the deep-sea research submersible Alvin discovered hydrothermal vents along the Galápagos Rift. Towering mineral chimneys, dubbed "black smokers," gushed superheated, mineral-laden fluids exceeding three hundred degrees Celsius. Thriving in this hellish environment was a luxuriant ecosystem of giant tube worms, blind shrimp, and ghostly crabs.',
          'Instead of photosynthesis, these bizarre ecosystems depend entirely on chemosynthesis. Symbiotic extremophile bacteria metabolize dissolved hydrogen sulfide and methane escaping from the Earth’s mantle, synthesizing organic molecules that form the foundational trophic tier of the benthic food pyramid.',
          'This discovery revolutionized astrobiology. Scientists realized that life does not require a hospitable sunlit surface. Beneath the frozen crusts of Jupiter’s moon Europa and Saturn’s moon Enceladus lie warm, global liquid oceans warmed by tidal geothermal vents. Exploring Earth\'s abyssal abyss provides the indispensable testing ground for discovering extraterrestrial biology within our own solar system.'
        ],
        summaryUz: 'Chuqur okean tubidagi gidrotermal manbalar (qora chekuvchilar), xemocintez asosidagi hayot va Yupiterning Yevropa yo\'ldoshida hayot izlashdagi ahamiyati.',
        targetVocab: [
          {
            word: 'topographical',
            pos: 'adj.',
            phonetic: '/ˌtɒp.əˈɡræf.ɪ.kəl/',
            definitionEn: 'Relating to the physical features, contours, and surface relief of an area or landscape.',
            translationUz: 'Topografik, relyefga oid',
            sampleSentence: 'Sonar satellites assembled high-resolution topographical models of submerged tectonic trenches.',
            collocation: 'topographical survey',
            synonym: 'geographical'
          },
          {
            word: 'desolate',
            pos: 'adj.',
            phonetic: '/ˈdes.əl.ət/',
            definitionEn: 'Bleak, dismal, and empty; lacking in life or joy.',
            translationUz: 'Kimsasiz, qaqragan, huvillagan',
            sampleSentence: 'The ocean abyss was long presumed to be a desolate underwater desert.',
            collocation: 'desolate landscape',
            synonym: 'barren'
          },
          {
            word: 'extremophile',
            pos: 'n.',
            phonetic: '/ɪkˈstriː.mə.faɪl/',
            definitionEn: 'An organism that thrives in extreme physical or geochemical conditions that are detrimental to most life.',
            translationUz: 'Ekstremofil (o\'ta og\'ir sharoitda yashovchi organizm)',
            sampleSentence: 'Deep vent extremophiles survive crushing pressures and boiling mineral temperatures with ease.',
            collocation: 'bacterial extremophile',
            synonym: 'hardy organism'
          },
          {
            word: 'trophic',
            pos: 'adj.',
            phonetic: '/ˈtrɒf.ɪk/',
            definitionEn: 'Relating to feeding, nutrition, or the levels of a food chain.',
            translationUz: 'Trofik, oziqlanish zanjiriga oid',
            sampleSentence: 'Chemosynthetic microbes occupy the foundational trophic tier of hydrothermal vent food webs.',
            collocation: 'trophic level',
            synonym: 'nutritional'
          },
          {
            word: 'benthic',
            pos: 'adj.',
            phonetic: '/ˈben.θɪk/',
            definitionEn: 'Relating to, or occurring at the bottom of a body of water.',
            translationUz: 'Bentik, suv tubiga oid',
            sampleSentence: 'Benthic scavengers feed on marine snow sinking from the photic surface layers.',
            collocation: 'benthic zone',
            synonym: 'deep-sea'
          },
          {
            word: 'analog',
            pos: 'n.',
            phonetic: '/ˈæn.ə.lɒɡ/',
            definitionEn: 'A person or thing seen as comparable to another; a terrestrial environment modeling extraterrestrial conditions.',
            translationUz: 'Muqobil, o\'xshash model, analog',
            sampleSentence: 'Earth\'s hydrothermal vents serve as an ideal terrestrial analog for ice-covered oceans on Europa.',
            collocation: 'planetary analog',
            synonym: 'equivalent'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u8-p2-q1',
            type: 'main-idea',
            question: 'What revolutionized marine biology after the 1977 discovery of hydrothermal vents?',
            options: [
              'Scientists realized that ocean water is composed mostly of salt crystals.',
              'The revelation that flourishing ecosystems can thrive in total darkness powered by chemosynthesis rather than sunlight.',
              'Finding that all ocean fish originate from rivers.',
              'Proof that submarines cannot withstand cold water.'
            ],
            correctIndex: 1,
            explanationUz: 'Gidrotermal manbalarning kashf etilishi hayot quyosh nurisiz, kimyoviy energiya (xemosintez) hisobiga ham mukammal yashay olishini isbotladi.'
          },
          {
            id: 'rrw2-u8-p2-q2',
            type: 'detail',
            question: 'What chemical substances do symbiotic vent bacteria metabolize to generate organic food?',
            options: [
              'Refined cane sugar and flour',
              'Hydrogen sulfide and methane escaping from the Earth\'s mantle',
              'Plastic particles floating from the surface',
              'Atmospheric ozone'
            ],
            correctIndex: 1,
            explanationUz: '3-paragrafda ekstremofil bakteriyalar mantiya yoriqlaridan chiqadigan vodorod sulfid va metanni o\'zlashtirishi aytilgan.'
          },
          {
            id: 'rrw2-u8-p2-q3',
            type: 'vocabulary',
            question: 'The word "desolate" in paragraph 1 is closest in meaning to:',
            options: ['Densely populated', 'Barren, bleak, and lifeless', 'Extremely noisy', 'Tropical and humid'],
            correctIndex: 1,
            explanationUz: '"Desolate" so\'zi huvillagan, jonsiz, qaqragan sahro ma\'nosini beradi.'
          },
          {
            id: 'rrw2-u8-p2-q4',
            type: 'inference',
            question: 'Why does hydrothermal vent research excite astrobiologists studying Jupiter\'s moon Europa?',
            options: [
              'Europa has sandy beaches with palm trees.',
              'Europa possesses a subsurface liquid ocean warmed by tidal geothermal vents, providing an environment analogous to Earth\'s vents.',
              'Europa is close enough to visit with ordinary airplanes.',
              'Europa has no magnetic field.'
            ],
            correctIndex: 1,
            explanationUz: 'Yupiterning Yevropa yo\'ldoshi muz qatlamining ostida Yer tubidagiga o\'xshash iliq okean va geotermal manbalar mavjud, bu esa hayot ehtimolini oshiradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'main-ideas-details',
          title: 'Deep Ocean Vent Ecosystems and Astrobiological Implications',
          sections: [
            {
              heading: 'Environmental Extremes',
              points: [
                'Hydrostatic pressure over 1,000 atmospheres in total darkness',
                'Superheated mineral fluids gushing from "black smokers" at over 300°C'
              ]
            },
            {
              heading: 'Chemosynthetic Life Web',
              points: [
                'Extremophile bacteria oxidize toxic hydrogen sulfide and methane',
                'Symbiosis supports giant tube worms, blind crustaceans, and predatory fish'
              ]
            },
            {
              heading: 'Planetary Analogy',
              points: [
                'Direct analog for ice moons Europa and Enceladus harboring tidal heated oceans'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should we prioritize spending research billions on exploring Earth\'s oceans or sending probes to other planets?',
          'How should governments regulate deep-sea mining of mineral-rich hydrothermal vent deposits?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 9: Sports & Fitness
  // ==========================================
  {
    id: 'rrw2-u9',
    unitNumber: 9,
    title: 'Sports & Fitness',
    subjectArea: 'Endurance Physiology & The Rise of Esports',
    themeDescriptionUz: 'Insonning chidamlilik chegaralari (ultramarafon) va kiber-sportning (esports) professional sportga aylanishi.',
    passages: [
      {
        id: 'rrw2-u9-p1',
        passageNumber: 1,
        title: 'The Outer Limits of Human Endurance',
        subtitle: 'VO2 max, metabolic ceilings, and the psychology of pain in ultramarathon racing',
        themeCategory: 'Exercise Physiology',
        level: 'B2',
        wordCount: 425,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What happens to human muscles and organs during a 100-mile mountain race?',
          'Is there an absolute biological limit to how much calories a human body can burn per day?'
        ],
        paragraphs: [
          'From the grueling 100-mile Western States endurance run through scorching canyons to multi-day polar treks in Antarctica, human beings routinely push their bodies into physiological frontiers once deemed fatal. Exercise physiologists analyzing these extreme feats have uncovered profound insights into how our species evolved to become the ultimate persistence hunters on Earth.',
          'A key biological determinant of athletic capacity is VO2 max—the maximum volume of oxygen an individual’s cardiovascular system can extract, transport, and utilize during exhaustive exertion. However, in ultramarathon events, raw aerobic speed is subordinate to metabolic efficiency. Groundbreaking research on transcontinental racers discovered an absolute metabolic ceiling: regardless of training, the human digestive system cannot sustainably absorb more than roughly 2.5 times an individual’s basal metabolic rate over prolonged periods. Beyond that ceiling, the body begins consuming its own muscle and fat reserves, leading to catastrophic systemic exhaustion.',
          'Equally critical is the Central Governor Theory, pioneered by sports scientist Tim Noakes. Noakes posits that physical exhaustion is not a sudden peripheral failure of leg muscles; rather, it is a protective psychological illusion generated by the subconscious brain to halt exertion before irreversible cellular damage occurs.',
          'Elite endurance athletes are masters of pain reframing. By decoupling the sensory perception of muscle agony from emotional panic, they override the brain\'s conservative emergency brakes, demonstrating that human fortitude is limited far more by cognitive willpower than muscular biochemistry.'
        ],
        summaryUz: 'Inson chidamliligining fiziologik va ruhiy chegaralari: VO2 max, metabolik ship (2.5x BMR), markaziy boshqaruvchi (Central Governor) nazariyasi va og\'riqni boshqarish.',
        targetVocab: [
          {
            word: 'grueling',
            pos: 'adj.',
            phonetic: '/ˈɡruː.ə.lɪŋ/',
            definitionEn: 'Extremely tiring and demanding to the point of exhaustion.',
            translationUz: 'Haddan tashqari mashaqqatli, holdan toydiruvchi',
            sampleSentence: 'The mountain runners completed a grueling 160-kilometer trek through snow and rock.',
            collocation: 'grueling marathon',
            synonym: 'exhausting'
          },
          {
            word: 'subordinate',
            pos: 'adj.',
            phonetic: '/səˈbɔː.dɪ.nət/',
            definitionEn: 'Lower in rank or position; of less importance than something else.',
            translationUz: 'Ikkinchi darajali, tobe',
            sampleSentence: 'In extreme ultra-distance racing, raw sprinting speed is subordinate to efficient fat metabolism.',
            collocation: 'subordinate to',
            synonym: 'secondary'
          },
          {
            word: 'basal',
            pos: 'adj.',
            phonetic: '/ˈbeɪ.səl/',
            definitionEn: 'Forming or belonging to a bottom layer or minimum starting level; baseline.',
            translationUz: 'Asosiy, bazaviy (metabolizm)',
            sampleSentence: 'The body requires a minimum caloric intake to support basal metabolic cellular functions.',
            collocation: 'basal metabolic rate',
            synonym: 'baseline'
          },
          {
            word: 'peripheral',
            pos: 'adj.',
            phonetic: '/pəˈrɪf.ər.əl/',
            definitionEn: 'Relating to the edge or outer surface rather than the center; secondary.',
            translationUz: 'Periferik, chekka, asosiy bo\'lmagan',
            sampleSentence: 'Muscle burning is a peripheral signal sent back to the central nervous system.',
            collocation: 'peripheral fatigue',
            synonym: 'marginal'
          },
          {
            word: 'fortitude',
            pos: 'n.',
            phonetic: '/ˈfɔː.tɪ.tʃuːd/',
            definitionEn: 'Courage in pain or adversity; mental and emotional strength.',
            translationUz: 'Matonat, ruhiy iroda va chidamlilik',
            sampleSentence: 'The mountaineer survived the blizzard through sheer physical and moral fortitude.',
            collocation: 'mental fortitude',
            synonym: 'resilience'
          },
          {
            word: 'override',
            pos: 'v.',
            phonetic: '/ˌəʊ.vəˈraɪd/',
            definitionEn: 'To use authority or mental willpower to reject, cancel, or bypass an automatic signal or rule.',
            translationUz: 'Bekor qilmoq, iroda bilan ustun kelmoq',
            sampleSentence: 'Trained marathoners learn to override instinctive fatigue signals to maintain pace.',
            collocation: 'override the signal',
            synonym: 'bypass'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u9-p1-q1',
            type: 'main-idea',
            question: 'What is the primary conclusion regarding human endurance presented in the text?',
            options: [
              'Humans cannot run more than one kilometer without water.',
              'Endurance capacity is bounded by a metabolic caloric ceiling, yet supreme performance is largely regulated by mental cognitive control overriding conservative brain signals.',
              'All ultra-marathon runners suffer permanent heart failure within ten days.',
              'VO2 max is the only variable that determines race outcomes.'
            ],
            correctIndex: 1,
            explanationUz: 'Chidamlilik metabolik chegaralarga ega bo\'lsa-da, haqiqiy charchoq miyaning himoya signali bo\'lib, kuchli iroda orqali bu cheklovlarni yengish mumkin.'
          },
          {
            id: 'rrw2-u9-p1-q2',
            type: 'detail',
            question: 'According to metabolic research, what is the sustainable ceiling of human caloric absorption over months?',
            options: ['10 times basal metabolic rate', 'Roughly 2.5 times basal metabolic rate', 'Equal to one glass of milk', 'There is no limit whatsoever'],
            correctIndex: 1,
            explanationUz: '2-paragrafda inson tanasi uzoq muddat davomida asosiy metabolizm darajasidan (BMR) taxminan 2.5 baravardan ortiq kaloriyani o\'zlashtira olmasligi ko\'rsatilgan.'
          },
          {
            id: 'rrw2-u9-p1-q3',
            type: 'vocabulary',
            question: 'The word "fortitude" in the final paragraph most nearly denotes:',
            options: ['Muscular paralysis', 'Mental courage and enduring strength', 'Sudden anger', 'Genetic disease'],
            correctIndex: 1,
            explanationUz: '"Fortitude" so\'zi og\'ir sharoitda bardosh berish, metin iroda va matonat ma\'nosini anglatadi.'
          },
          {
            id: 'rrw2-u9-p1-q4',
            type: 'inference',
            question: 'According to the Central Governor Theory, why does the subconscious brain make muscles feel exhausted?',
            options: [
              'Because the brain dislikes the color of running sneakers.',
              'To proactively prevent irreversible cellular damage and protect bodily survival before true physical collapse occurs.',
              'Because the heart runs out of blood completely.',
              'To force athletes to buy sports drinks.'
            ],
            correctIndex: 1,
            explanationUz: 'Markaziy boshqaruvchi nazariyasiga ko\'ra, miya to\'qimalar zararlanishining oldini olish uchun charchoq hissini avvalroq sun\'iy hosil qilib, insonni to\'xtatishga urinadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'main-ideas-details',
          title: 'Physiological and Neurological Limits of Human Endurance',
          sections: [
            {
              heading: 'Aerobic & Metabolic Ceiling',
              points: [
                'VO2 max measures peak oxygen uptake and transport',
                'Sustained metabolic ceiling capped at roughly 2.5x basal metabolic rate',
                'Exceeding ceiling forces body to cannibalize its own muscle proteins'
              ]
            },
            {
              heading: 'Neurological Regulation (Central Governor)',
              points: [
                'Fatigue is an anticipatory mental construct, not total peripheral muscular failure',
                'Brain sends agonizing pain cues to safeguard organs from irreversible trauma',
                'Elite competitors decouple emotional panic from sensory pain to maintain output'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Do you believe anyone can train to finish a 100-mile run, or does it require unique genetic gifts?',
          'Is running ultramarathons genuinely healthy for the human cardiovascular system, or does it cause hidden damage?'
        ]
      },
      {
        id: 'rrw2-u9-p2',
        passageNumber: 2,
        title: 'The Rise of Esports: From Bedrooms to Stadiums',
        subtitle: 'Cognitive reflex speeds, corporate sponsorships, and the Olympic debate over competitive gaming',
        themeCategory: 'Modern Athletics',
        level: 'B2',
        wordCount: 425,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Do you consider professional video gamers to be true athletes?',
          'How does competitive gaming compare to traditional sports in terms of mental and physical demands?'
        ],
        paragraphs: [
          'What was once dismissed as a sedentary adolescent hobby confined to darkened basements has mutated into a colossus of modern entertainment: esports. Today, premier gaming tournaments fill eighty-thousand-seat Olympic arenas, generate billions of dollars in media rights and corporate sponsorships, and attract digital viewership figures that rival the Super Bowl and UEFA Champions League finals.',
          'Skeptics frequently scoff at categorizing video gaming as a legitimate sport, citing the lack of gross physical locomotion or outdoor exertion. However, sports physiologists studying top-tier esports professionals have revealed astonishing physical demands. During intense multiplayer matches, competitors execute up to four hundred actions per minute (APM) on keyboards and mice, with heart rates fluctuating between 160 and 180 beats per minute—comparable to Formula 1 race car drivers or marathoners in mid-stride.',
          'Furthermore, esports demands acute cognitive faculties: split-second reaction times measured in hundredths of a second, spatial peripheral awareness, and instantaneous strategic coordination under deafening sensory noise. Top organizations now house players in specialized training compounds with dedicated sports psychologists, physical therapists to combat repetitive strain injuries, and strict nutritional regimens.',
          'The International Olympic Committee (IOC) has inaugurated experimental Olympic Esports Series, signaling a generational shift. As digital natives come of age, the historic definition of athleticism is expanding to honor supreme cognitive-motor mastery alongside traditional muscular prowess.'
        ],
        summaryUz: 'Kiber-sportning yuksalishi: soniyasiga 400 ta harakat (APM), yurak urishi minutiga 160-180 marta, F1 haydovchilariga teng jismoniy zo\'riqish va Olimpiada o\'yinlariga kirish bahsi.',
        targetVocab: [
          {
            word: 'sedentary',
            pos: 'adj.',
            phonetic: '/ˈsed.ən.tər.i/',
            definitionEn: 'Tending to spend much time seated; somewhat inactive physically.',
            translationUz: 'Kamharakat, o\'tirib ishlaydigan',
            sampleSentence: 'Gaming was long stereotyped as a sedentary pastime for isolated teenagers.',
            collocation: 'sedentary lifestyle',
            synonym: 'inactive'
          },
          {
            word: 'scoff',
            pos: 'v.',
            phonetic: '/skɒf/',
            definitionEn: 'To speak to someone or about something in a scornfully derisive or mocking way.',
            translationUz: 'Kamsitmoq, masxara qilmoq',
            sampleSentence: 'Traditional athletic purists scoff at the idea of classifying joystick players as athletes.',
            collocation: 'scoff at the idea',
            synonym: 'mock'
          },
          {
            word: 'locomotion',
            pos: 'n.',
            phonetic: '/ˌləʊ.kəˈməʊ.ʃən/',
            definitionEn: 'Movement or the ability to move from one place to another.',
            translationUz: 'Harakatlanish, bir joydan boshqasiga siljish',
            sampleSentence: 'Unlike basketball, digital gaming involves minimal gross whole-body locomotion.',
            collocation: 'physical locomotion',
            synonym: 'movement'
          },
          {
            word: 'compound',
            pos: 'n.',
            phonetic: '/ˈkɒm.paʊnd/',
            definitionEn: 'A large, fenced or enclosed area containing a group of buildings for a specific purpose.',
            translationUz: 'Majmua, maxsus hudud',
            sampleSentence: 'Professional gaming teams live together in high-tech training compounds.',
            collocation: 'training compound',
            synonym: 'facility'
          },
          {
            word: 'regimen',
            pos: 'n.',
            phonetic: '/ˈredʒ.ɪ.mən/',
            definitionEn: 'A prescribed course of medical treatment, diet, or exercise for the maintenance of health.',
            translationUz: 'Tartib, rejim (ovqatlanish, mashg\'ulot)',
            sampleSentence: 'Players follow a rigorous daily fitness regimen to maintain lightning-fast synaptic reflexes.',
            collocation: 'strict regimen',
            synonym: 'routine'
          },
          {
            word: 'inaugurate',
            pos: 'v.',
            phonetic: '/ɪˈnɔː.ɡjə.reɪt/',
            definitionEn: 'To begin or introduce a system, policy, or period formally with an official ceremony.',
            translationUz: 'Tantanali ravishda ochmoq, boshlamoq',
            sampleSentence: 'The Olympic Committee inaugurated the inaugural virtual games week in Singapore.',
            collocation: 'inaugurate the series',
            synonym: 'launch'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u9-p2-q1',
            type: 'main-idea',
            question: 'What is the core argument regarding esports presented in this article?',
            options: [
              'Video games are going to be banned worldwide due to electricity shortages.',
              'Esports has transitioned from an informal hobby into a professional industry characterized by intense cognitive-motor demands, high physiological strain, and growing mainstream athletic legitimacy.',
              'Gaming tournaments are only watched by kindergarten children.',
              'Traditional sports like football and tennis have completely closed down.'
            ],
            correctIndex: 1,
            explanationUz: 'Kiber-sport oddiy o\'yindan ulkan sanoatga aylangani, unda yuqori aqliy-motor reaksiyalar va jismoniy zo\'riqish talab qilinishi hamda uning sport sifatidagi e\'tirofi ochib berilgan.'
          },
          {
            id: 'rrw2-u9-p2-q2',
            type: 'detail',
            question: 'What physiological measurements do top esports athletes exhibit during competitive tournament games?',
            options: [
              'Heart rates between 40 and 50 beats per minute with zero hand movement.',
              'Up to 400 actions per minute (APM) with heart rates fluctuating between 160 and 180 beats per minute.',
              'Complete loss of hearing and vision.',
              'Body temperatures dropping below freezing.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda daqiqasiga 400 tagacha harakat va daqiqada 160-180 martagacha yurak urishi qayd etilgan.'
          },
          {
            id: 'rrw2-u9-p2-q3',
            type: 'vocabulary',
            question: 'The word "sedentary" in paragraph 1 describes an activity that is:',
            options: ['Highly energetic and outdoors', 'Characterized by sitting with minimal movement', 'Extremely dangerous', 'Free of charge'],
            correctIndex: 1,
            explanationUz: '"Sedentary" so\'zi kamharakat, o\'tirib bajariladigan degan ma\'noni anglatadi.'
          },
          {
            id: 'rrw2-u9-p2-q4',
            type: 'inference',
            question: 'Why are major esports franchises hiring physical therapists and dieticians?',
            options: [
              'To teach players how to cook food for tournament spectators.',
              'To mitigate repetitive strain injuries like carpal tunnel and keep cognitive alertness peaked under grueling schedules.',
              'Because the players are required to run marathons before each match.',
              'To satisfy video game store requirements.'
            ],
            correctIndex: 1,
            explanationUz: 'Muntazam zo\'riqishdan kelib chiqadigan jarohatlar (carpal tunnel)ning oldini olish va o\'yinchilarning aqliy sergakligini saqlash uchun mutaxassislar yollanadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Traditional Athletics vs Elite Esports Performance',
          sections: [
            {
              heading: 'Shared Athletic Demands',
              points: [
                'Cardiovascular stress: heart rates reach 160–180 bpm under tournament pressure',
                'Split-second decision-making, pattern recognition, and tactical adaptability',
                'Rigorous team training compounds, sports psychology, and nutrition regimens'
              ]
            },
            {
              heading: 'Distinct Characteristics',
              points: [
                'Traditional sports: Gross bodily locomotion, power output, aerobic stamina',
                'Esports: Fine cognitive-motor reflexes, up to 400 Actions Per Minute (APM)'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should competitive video gaming have full medal events at the Summer Olympic Games?',
          'What health risks do teenage gamers face if they play for 10 hours a day without physical exercise?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 10: People & Opinions
  // ==========================================
  {
    id: 'rrw2-u10',
    unitNumber: 10,
    title: 'People & Opinions',
    subjectArea: 'Digital Epistemology & Behavioral Psychology',
    themeDescriptionUz: 'Axborot pufakchalari (Echo Chambers), qutblashuv va tanlovlar ko\'pligi paradoksi (Paradox of Choice).',
    passages: [
      {
        id: 'rrw2-u10-p1',
        passageNumber: 1,
        title: 'Echo Chambers and the Erosion of Shared Reality',
        subtitle: 'Recommender algorithms, confirmation bias, and affective polarization in online discourse',
        themeCategory: 'Digital Sociology',
        level: 'B2',
        wordCount: 425,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do social media feeds tend to show posts that agree with your existing political beliefs?',
          'What happens to a democracy when opposing groups cannot agree on basic factual truths?'
        ],
        paragraphs: [
          'The democratization of digital publishing once promised an enlightened global village where diverse perspectives would clash, cross-pollinate, and ultimately yield higher civic consensus. Instead, the architecture of modern social platforms has fragmented public discourse into epistemological silos known as "echo chambers" or "filter bubbles."',
          'At the core of this fracture lies the business model of surveillance capitalism. Recommendation algorithms are ruthlessly optimized for one overarching metric: user engagement. Because cognitive psychology proves that human brains are instinctively captivated by outrage, grievance, and tribal vindication, platforms amplify sensational content that flatters existing confirmation biases while suppressing nuance. Users are steadily funneled into enclosed information loops where opposing arguments are straw-manned, ridiculed, or rendered invisible.',
          'The societal consequence is "affective polarization"—a state in which opposing factions do not merely disagree on policy proposals, but actively view one another as morally corrupt, existential threats to civilization. When basic empirical facts regarding public health, climate statistics, or election results become partisan identity markers, rational democratic deliberation collapses into tribal trench warfare.',
          'Reclaiming a shared factual baseline requires systemic interventions: regulating engagement-maximizing algorithms, enforcing algorithmic transparency, and cultivating intellectual humility in citizens so they deliberately seek out disconfirming evidence.'
        ],
        summaryUz: 'Ijtimoiy tarmoqlardagi axborot pufakchalari (echo chambers), algoritmlarning odamlarni g\'azab va qutblashuv orqali ushlab turishi hamda jamiyatdagi umumiy haqiqat tushunchasining yo\'qolishi.',
        targetVocab: [
          {
            word: 'epistemological',
            pos: 'adj.',
            phonetic: '/ɪˌpɪs.tə.məˈlɒdʒ.ɪ.kəl/',
            definitionEn: 'Relating to the theory of knowledge, especially with regard to its methods, validity, and scope.',
            translationUz: 'Epistemologik, bilish nazariyasiga oid',
            sampleSentence: 'Social media users inhabit separate epistemological universes with incompatible views of reality.',
            collocation: 'epistemological crisis',
            synonym: 'philosophical'
          },
          {
            word: 'silo',
            pos: 'n.',
            phonetic: '/ˈsaɪ.ləʊ/',
            definitionEn: 'A system, process, or department that operates in isolation from others.',
            translationUz: 'Yopiq tizim, alohida ajratilgan muhit',
            sampleSentence: 'Political discourse is trapped inside ideological silos that block open dialogue.',
            collocation: 'information silo',
            synonym: 'compartment'
          },
          {
            word: 'vindication',
            pos: 'n.',
            phonetic: '/ˌvɪn.dɪˈkeɪ.ʃən/',
            definitionEn: 'The action of clearing someone of blame or suspicion; proof that someone was right.',
            translationUz: 'Haq ekanligini isbotlash, oqlanish',
            sampleSentence: 'Partisan commentators seek tribal vindication rather than truthful objective facts.',
            collocation: 'seek vindication',
            synonym: 'justification'
          },
          {
            word: 'polarization',
            pos: 'n.',
            phonetic: '/ˌpəʊ.lə.raɪˈzeɪ.ʃən/',
            definitionEn: 'Division into two sharply contrasting groups, sets of opinions, or beliefs.',
            translationUz: 'Qutblashuv, ikki qarama-qarshi tomonga bo\'linish',
            sampleSentence: 'Affective polarization has turned neighbors against one another over minor policy disputes.',
            collocation: 'political polarization',
            synonym: 'division'
          },
          {
            word: 'deliberation',
            pos: 'n.',
            phonetic: '/dɪˌlɪb.əˈreɪ.ʃən/',
            definitionEn: 'Long and careful consideration or discussion.',
            translationUz: 'Mulohaza yuritish, kengash, bafurja muhokama',
            sampleSentence: 'A healthy democracy relies on thoughtful public deliberation based on shared facts.',
            collocation: 'rational deliberation',
            synonym: 'discussion'
          },
          {
            word: 'humility',
            pos: 'n.',
            phonetic: '/hjuːˈmɪl.ə.ti/',
            definitionEn: 'A modest or low view of one\'s own importance; willingness to acknowledge one\'s ignorance.',
            translationUz: 'Kamtarinlik, o\'z bilimsizligini tan olish odobi',
            sampleSentence: 'Intellectual humility prompts thinkers to inspect their own biases with rigorous honesty.',
            collocation: 'intellectual humility',
            synonym: 'modesty'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u10-p1-q1',
            type: 'main-idea',
            question: 'What is the primary driver of political polarization in modern digital communication?',
            options: [
              'People have forgotten how to read written texts.',
              'Recommender algorithms optimized for engagement prioritize outrage and confirmation bias, creating insulated echo chambers.',
              'Governments turned off search engines on weekends.',
              'Keyboard keys have become too small to type complex thoughts.'
            ],
            correctIndex: 1,
            explanationUz: 'Foydalanuvchini platformada ko\'proq ushlab qolishga qaratilgan algoritmlar g\'azab va o\'z fikrini tasdiqlovchi xabarlarni ko\'rsatib, odamlarni alohida pufakchalarga bo\'lib tashlaydi.'
          },
          {
            id: 'rrw2-u10-p1-q2',
            type: 'detail',
            question: 'What psychological tendency causes humans to favor information confirming their preexisting beliefs?',
            options: ['Loss aversion', 'Confirmation bias', 'Phototropism', 'Retrograde amnesia'],
            correctIndex: 1,
            explanationUz: '2-paragrafda insonning o\'z qarashlarini qo\'llab-quvvatlovchi ma\'lumotlarga ko\'proq ishonishi "confirmation bias" ekanligi aytilgan.'
          },
          {
            id: 'rrw2-u10-p1-q3',
            type: 'vocabulary',
            question: 'The word "polarization" in paragraph 3 refers to:',
            options: ['Harmonious teamwork', 'Sharp division into opposing, hostile camps', 'A freezing Arctic wind', 'Technological advancement'],
            correctIndex: 1,
            explanationUz: '"Polarization" jamiyatning murosasiz, qarama-qarshi ikki qutbga bo\'linib ketishini bildiradi.'
          },
          {
            id: 'rrw2-u10-p1-q4',
            type: 'inference',
            question: 'Why is "affective polarization" particularly toxic for democratic stability?',
            options: [
              'Because voting booths run out of paper.',
              'Because opposing groups view each other as evil, existential enemies rather than fellow citizens with different perspectives.',
              'Because citizens refuse to pay for electricity.',
              'Because elections take place on rainy days.'
            ],
            correctIndex: 1,
            explanationUz: 'Affektiv qutblashuvda qarshi tomon shunchaki boshqacha fikrli fuqaro emas, balki xavfli dushman sifatida ko\'rilib, sog\'lom muloqot butunlay yo\'qoladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Algorithmic Echo Chambers and Societal Polarization',
          sections: [
            {
              heading: 'Algorithmic Incentive Structure',
              points: [
                'Engagement-maximizing platforms monetize screen time and ads',
                'Sensational, outrage-inducing content generates higher clicks than balanced nuance',
                'Users funneled into tailored filter bubbles reinforcing cognitive confirmation bias'
              ]
            },
            {
              heading: 'Societal & Civic Repercussions',
              points: [
                'Affective polarization: opposing factions dehumanize each other',
                'Erosion of a shared factual consensus on science, public health, and law',
                'Paralysis of democratic legislative consensus'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Have you ever unfriended someone on social media because of their political or social opinions?',
          'Should social media platforms be legally banned from using personalized recommendation algorithms?'
        ]
      },
      {
        id: 'rrw2-u10-p2',
        passageNumber: 2,
        title: 'The Paradox of Choice: Why More Is Less',
        subtitle: 'Barry Schwartz’s thesis on decision fatigue, maximization, and modern consumer anxiety',
        themeCategory: 'Consumer Psychology',
        level: 'B2',
        wordCount: 420,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Do you feel happier when presented with 3 options or with 30 options when shopping?',
          'Why does having endless choices sometimes cause regret after a purchase?'
        ],
        paragraphs: [
          'Modern capitalist dogma operates on a seemingly unassailable axiom: freedom is inextricably bound to choice, and therefore, maximizing consumer options inherently maximizes human happiness. Whether browsing a supermarket aisle containing seventy varieties of salad dressing or navigating streaming platforms hosting thousands of films, the contemporary citizen enjoys unprecedented abundance.',
          'Yet, in his groundbreaking book "The Paradox of Choice," psychologist Barry Schwartz dismantled this orthodox assumption. Schwartz argued that beyond a modest threshold, an explosion of options ceases to liberate; instead, it induces paralyzing decision fatigue, heightened anxiety, and pervasive post-choice dissatisfaction.',
          'Schwartz distinguished between two cognitive archetypes: "maximizers" and "satisficers." Maximizers compulsively exhaust every possible alternative before deciding, driven by a neurotic terror of choosing a sub-optimal option. Satisficers, conversely, settle contented once an option meets their predetermined criteria of "good enough." Maximizers statistically achieve slightly better objective outcomes—such as securing jobs with marginally higher starting salaries—yet report significantly higher rates of regret, depression, and self-blame.',
          'When choices are infinite, consumers inevitably imagine the hypothetical virtues of the unchosen alternatives, causing acute opportunity costs and buyer’s remorse. To cultivate genuine contentment, psychologists advise consciously constraining choices, embracing "satisficing" mindsets, and practicing gratitude for what is chosen rather than mourning what was discarded.'
        ],
        summaryUz: 'Tanlovlar ko\'pligi paradoksi (Paradox of Choice): variantlar haddan tashqari ko\'p bo\'lganda inson erkin emas, balki qat\'iyatsiz, charchagan va afsuslanuvchiga aylanishi.',
        targetVocab: [
          {
            word: 'unassailable',
            pos: 'adj.',
            phonetic: '/ˌʌn.əˈseɪ.lə.bəl/',
            definitionEn: 'Unable to be attacked, questioned, or defeated.',
            translationUz: 'Inkor etib bo\'lmas, shubhasiz',
            sampleSentence: 'The idea that more options bring more freedom was long considered an unassailable truth.',
            collocation: 'unassailable premise',
            synonym: 'indisputable'
          },
          {
            word: 'paralyzing',
            pos: 'adj.',
            phonetic: '/ˈpær.əl.aɪ.zɪŋ/',
            definitionEn: 'Causing a person to become unable to move, act, or decide.',
            translationUz: 'Shol qiluvchi, harakatsizlantiruvchi',
            sampleSentence: 'Facing hundreds of career paths induced paralyzing dread in the graduating senior.',
            collocation: 'paralyzing anxiety',
            synonym: 'incapacitating'
          },
          {
            word: 'compulsively',
            pos: 'adv.',
            phonetic: '/kəmˈpʌl.sɪv.li/',
            definitionEn: 'In a way that results from an irresistible, uncontrollable urge.',
            translationUz: 'Majburiy ravishda, o\'zini to\'xtata olmasdan',
            sampleSentence: 'He compulsively read reviews of dozens of different laptop models before purchasing.',
            collocation: 'compulsively check',
            synonym: 'obsessively'
          },
          {
            word: 'sub-optimal',
            pos: 'adj.',
            phonetic: '/ˌsʌbˈɒp.tɪ.məl/',
            definitionEn: 'Below the highest standard or level of quality, efficiency, or desirability.',
            translationUz: 'Optimaldan past, eng yaxshi bo\'lmagan',
            sampleSentence: 'Maximizers agonize over the remote possibility of making a sub-optimal choice.',
            collocation: 'sub-optimal outcome',
            synonym: 'inferior'
          },
          {
            word: 'remorse',
            pos: 'n.',
            phonetic: '/rɪˈmɔːs/',
            definitionEn: 'Deep regret or guilt for a wrong committed or an unwise decision made.',
            translationUz: 'Pushaymonlik, vijdon azobi',
            sampleSentence: 'Endless options trigger buyer’s remorse because one constantly imagines the discarded alternatives.',
            collocation: 'buyer\'s remorse',
            synonym: 'regret'
          },
          {
            word: 'constrain',
            pos: 'v.',
            phonetic: '/kənˈstreɪn/',
            definitionEn: 'To severely restrict the scope, extent, or activity of something.',
            translationUz: 'Cheklamoq, chegaralamoq',
            sampleSentence: 'Wise leaders deliberately constrain their daily decisions to conserve mental energy for key tasks.',
            collocation: 'constrain choices',
            synonym: 'limit'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u10-p2-q1',
            type: 'main-idea',
            question: 'What is Barry Schwartz\'s central thesis regarding consumer choices?',
            options: [
              'Supermarkets should be closed down entirely.',
              'Beyond a reasonable threshold, an abundance of choices causes paralysis, regret, and diminished happiness rather than freedom.',
              'People should only be allowed to purchase one single item per week.',
              'Maximizers are the happiest people in modern society.'
            ],
            correctIndex: 1,
            explanationUz: 'Berri Shvarsning fikricha, ma\'lum bir me\'yordan keyin tanlovlar haddan tashqari ko\'payishi insonni baxtli emas, balki qat\'iyatsiz va doim afsuslanuvchiga aylantiradi.'
          },
          {
            id: 'rrw2-u10-p2-q2',
            type: 'detail',
            question: 'How does a "satisficer" make decisions compared to a "maximizer"?',
            options: [
              'Satisficers refuse to purchase any goods at all.',
              'Satisficers settle contentedly once an option meets their "good enough" criteria, whereas maximizers exhaustively compare every alternative.',
              'Satisficers spend days reading technical manuals.',
              'Satisficers always choose the most expensive option.'
            ],
            correctIndex: 1,
            explanationUz: '3-paragrafda keltirilganidek, "satisficer"lar o\'z mezonlariga javob beradigan ma\'qul variantni topishi bilan to\'xtaydilar, "maximizer"lar esa barcha variantlarni oxirigacha titkilaydilar.'
          },
          {
            id: 'rrw2-u10-p2-q3',
            type: 'vocabulary',
            question: 'The term "buyer\'s remorse" in paragraph 4 refers to:',
            options: ['A discount coupon', 'A feeling of regret and second-guessing following a purchase', 'A stolen credit card', 'A broken shopping cart'],
            correctIndex: 1,
            explanationUz: '"Buyer\'s remorse" xarid qilgandan so\'ng "balki boshqasini olishim kerakmidi" degan afsuslanish hissini bildiradi.'
          },
          {
            id: 'rrw2-u10-p2-q4',
            type: 'inference',
            question: 'Why do maximizers report higher levels of depression despite achieving slightly better objective outcomes?',
            options: [
              'Because they pay higher store taxes.',
              'Because the cognitive burden of endless comparison and the constant expectation of perfection create chronic dissatisfaction.',
              'Because they are not allowed to use credit cards.',
              'Because they sleep 14 hours a day.'
            ],
            correctIndex: 1,
            explanationUz: 'Doimiy taqqoslash, mukammallikni kutish va tanlanmagan variantlar haqidagi xayollar insonni doimiy norozilik va tushkunlikda ushlab turadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Decision-Making Archetypes: Maximizers vs Satisficers',
          sections: [
            {
              heading: 'The Maximizer Profile',
              points: [
                'Must inspect and evaluate every alternative before deciding',
                'Terrified of sub-optimal choices and missed opportunities',
                'Achieves marginally better objective results but experiences higher regret and depression'
              ]
            },
            {
              heading: 'The Satisficer Profile',
              points: [
                'Establishes clear criteria for what constitutes "good enough"',
                'Ceases searching immediately upon finding a qualifying option',
                'Reports higher emotional contentment, resilience, and lower anxiety'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Do you consider yourself a maximizer or a satisficer when buying clothes or choosing a restaurant?',
          'Has an abundance of choices on music or movie streaming apps made you listen to less music or watch fewer films?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 11: Cross-Cultural Viewpoints
  // ==========================================
  {
    id: 'rrw2-u11',
    unitNumber: 11,
    title: 'Cross-Cultural Viewpoints',
    subjectArea: 'Cultural Anthropology & Comparative Medicine',
    themeDescriptionUz: 'Vaqt tushunchasi (Monoxron va Polixron madaniyatlar) hamda an\'anaviy sharqona tabobat va zamonaviy tibbiyot uyg\'unligi.',
    passages: [
      {
        id: 'rrw2-u11-p1',
        passageNumber: 1,
        title: 'Cultural Concepts of Time: Monochronic vs Polychronic',
        subtitle: 'Edward T. Hall’s framework on schedules, relational fluidity, and global workplace friction',
        themeCategory: 'Intercultural Communication',
        level: 'B2',
        wordCount: 430,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What does "being on time" mean to you: arriving 5 minutes early, or arriving within a 30-minute window?',
          'How can differing cultural views of time cause misunderstandings in international business?'
        ],
        paragraphs: [
          'In our interconnected global economy, business executives and diplomats routinely cross borders with ease, yet unseen cultural chasms frequently derail international cooperation. One of the most pervasive sources of intercultural friction is not language or dress, but how different human societies perceive, structure, and value time.',
          'Pioneering cultural anthropologist Edward T. Hall categorized human societies into two contrasting temporal orientations: monochronic and polychronic. Monochronic cultures—prominent in Northern and Western Europe, the United States, and Japan—view time as a linear, tangible commodity. In these societies, time can be "saved," "spent," "wasted," or "lost." Schedules are sacrosanct, punctuality is equated with respect and integrity, and tasks are compartmentalized into strict, sequential blocks.',
          'Conversely, polychronic cultures—predominant in Latin America, the Mediterranean, the Middle East, and parts of Sub-Saharan Africa—view time as fluid, circular, and subordinate to human relationships. In polychronic environments, maintaining warm interpersonal harmony, hospitality, and family loyalty takes precedence over rigid adherence to clock hands. Meetings may start late, agendas fluctuate dynamically, and multiple conversations happen simultaneously without anyone feeling offended.',
          'When monochronic managers encounter polychronic partners, mutual misinterpretations proliferate. Monochronic professionals may perceive polychronic fluidity as chaotic, lazy, or unprofessional, while polychronic partners often view monochronic rigidity as cold, transactional, and devoid of genuine humanity. Developing intercultural fluency requires recognizing that neither temporal paradigm is universally superior; successful global leaders learn to flex seamlessly across both.'
        ],
        summaryUz: 'Madaniyatlararo muloqotda vaqt tushunchasi: Edvard Hollning monoxron (chiziqli, qat\'iy) va polixron (munosabatlarga asoslangan, erkin) vaqt tizimlari tahlili.',
        targetVocab: [
          {
            word: 'chasm',
            pos: 'n.',
            phonetic: '/ˈkæz.əm/',
            definitionEn: 'A deep fissure in the earth, rock, or other surface; a profound difference between people or viewpoints.',
            translationUz: 'Tubsiz jar, chuqur tafovut',
            sampleSentence: 'An invisible cultural chasm led to misunderstandings during the joint venture merger.',
            collocation: 'cultural chasm',
            synonym: 'abyss'
          },
          {
            word: 'sacrosanct',
            pos: 'adj.',
            phonetic: '/ˈsæk.rəʊ.sæŋkt/',
            definitionEn: 'Regarded as too important or valuable to be interfered with or altered.',
            translationUz: 'Muqaddas, daxlsiz, buzilmas',
            sampleSentence: 'In monochronic offices, project deadlines are treated as strictly sacrosanct.',
            collocation: 'treated as sacrosanct',
            synonym: 'inviolable'
          },
          {
            word: 'compartmentalize',
            pos: 'v.',
            phonetic: '/kəmˌpɑːtˈmen.təl.aɪz/',
            definitionEn: 'To divide into discrete categories, sections, or compartments.',
            translationUz: 'Bo\'laklarga ajratmoq, alohida-alohida qilmoq',
            sampleSentence: 'Western business culture tends to compartmentalize work and personal friendships.',
            collocation: 'compartmentalize tasks',
            synonym: 'segregate'
          },
          {
            word: 'precedence',
            pos: 'n.',
            phonetic: '/ˈpres.ɪ.dəns/',
            definitionEn: 'The condition of being considered more important than someone or something else; priority in rank.',
            translationUz: 'Ustunlik, birinchi darajali ahamiyat',
            sampleSentence: 'In polychronic cultures, hosting unexpected guests takes precedence over meeting a schedule.',
            collocation: 'take precedence over',
            synonym: 'priority'
          },
          {
            word: 'transactional',
            pos: 'adj.',
            phonetic: '/trænˈzæk.ʃən.əl/',
            definitionEn: 'Relating to conducting business or transactions; focused purely on exchange rather than relationship.',
            translationUz: 'Shunchaki oldi-berdiga asoslangan, rasmiyatchi',
            sampleSentence: 'Foreign partners were put off by what felt like cold, transactional negotiating tactics.',
            collocation: 'transactional relationship',
            synonym: 'business-like'
          },
          {
            word: 'flex',
            pos: 'v.',
            phonetic: '/fleks/',
            definitionEn: 'To adapt or adjust behavior to changing situations easily and smoothly.',
            translationUz: 'Moslashmoq, vaziyatga qarab o\'zgarmoq',
            sampleSentence: 'Effective international diplomats learn to flex between monochronic and polychronic work styles.',
            collocation: 'flex leadership style',
            synonym: 'adapt'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u11-p1-q1',
            type: 'main-idea',
            question: 'What is the primary thesis of Edward T. Hall’s monochronic versus polychronic time framework?',
            options: [
              'All countries should adopt London Greenwich Mean Time as a mandatory law.',
              'Societies structure time in fundamentally distinct ways—linear schedules versus relational fluidity—which significantly impacts cross-cultural interactions.',
              'Clocks in tropical countries run slower due to heat.',
              'Business contracts should never be written down in words.'
            ],
            correctIndex: 1,
            explanationUz: 'Matnda jamiyatlar vaqtni turlicha (qat\'iy chiziqli reja yoki munosabatlarga asoslangan erkin oqim) idrok etishi va bu xalqaro munosabatlarda katta ahamiyatga ega ekanligi ko\'rsatilgan.'
          },
          {
            id: 'rrw2-u11-p1-q2',
            type: 'detail',
            question: 'Which cultural regions typically demonstrate monochronic characteristics according to paragraph 2?',
            options: [
              'Northern and Western Europe, the United States, and Japan',
              'Sub-Saharan Africa and the Amazonian rainforest',
              'Ancient Rome and medieval Persia',
              'Only uninhabited research stations in Antarctica'
            ],
            correctIndex: 0,
            explanationUz: '2-paragrafda Shimoliy va G\'arbiy Yevropa, AQSh hamda Yaponiya monoxron madaniyatlarga misol qilib keltirilgan.'
          },
          {
            id: 'rrw2-u11-p1-q3',
            type: 'vocabulary',
            question: 'In paragraph 2, the word "sacrosanct" means that schedules are regarded as:',
            options: ['Optional and negotiable', 'Extremely important and not to be violated', 'Unimportant', 'Written in pencil'],
            correctIndex: 1,
            explanationUz: '"Sacrosanct" so\'zi daxlsiz, muqaddas, buzilishi mumkin bo\'lmagan qat\'iy qoida ma\'nosini anglatadi.'
          },
          {
            id: 'rrw2-u11-p1-q4',
            type: 'inference',
            question: 'Why might a polychronic businessman arrive 45 minutes late to a contract meeting?',
            options: [
              'Because he intentionally wished to sabotage his company.',
              'Because an unexpected conversation with a valued friend or family member took priority over arbitrary clock hands.',
              'Because he does not own a watch or smartphone.',
              'Because his country has no calendar system.'
            ],
            correctIndex: 1,
            explanationUz: 'Polixron madaniyatda insoniy munosabatlar va kutilmagan mehmonlar soat millariga qat\'iy bo\'ysunishdan ko\'ra muhimroq hisoblanadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Monochronic vs Polychronic Cultural Orientations',
          sections: [
            {
              heading: 'Monochronic (M-Time)',
              points: [
                'Time viewed as linear, compartmentalized, and scarce ("spent", "saved")',
                'Schedules are sacrosanct; punctuality reflects professionalism and respect',
                'Tasks executed sequentially; personal relationships kept separate from business'
              ]
            },
            {
              heading: 'Polychronic (P-Time)',
              points: [
                'Time viewed as fluid, cyclical, and subordinated to relationships',
                'Interpersonal harmony and unexpected social obligations take precedence over clock',
                'Multiple tasks handled simultaneously; fluid agendas that change organically'
              ]
            }
          ]
        },
        discussionPrompts: [
          'In your own culture, how late can someone arrive at a dinner party before it is considered rude?',
          'How can a multinational corporation design meeting schedules that respect both monochronic and polychronic employees?'
        ]
      },
      {
        id: 'rrw2-u11-p2',
        passageNumber: 2,
        title: 'Traditional Healing vs Modern Pharmacology: Convergence',
        subtitle: 'Ethnobotany, bioprospecting, and validating indigenous medicines through clinical trials',
        themeCategory: 'Ethnomedicine',
        level: 'B2',
        wordCount: 425,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Did you know that aspirin originally came from the bark of willow trees?',
          'Can ancient herbal remedies and high-tech modern medicine complement each other?'
        ],
        paragraphs: [
          'For much of the twentieth century, Western biomedical institutions viewed indigenous and traditional medical traditions—such as Traditional Chinese Medicine (TCM), Ayurveda in India, and Amazonian shamanic herbalism—with condescending skepticism. Traditional healers were frequently dismissed as unscientific purveyors of superstition and placebo remedies.',
          'In recent decades, however, this intellectual arrogance has given way to respectful scientific convergence. Pharmacologists increasingly recognize that centuries-old indigenous medical pharmacopeias represent an invaluable repository of empirical biochemical knowledge. Rather than trial-and-error laboratory synthesis from scratch, pharmaceutical researchers employ "ethnobotanical bioprospecting"—consulting indigenous elders to identify medicinal plants that have safely alleviated illnesses for generations.',
          'The most spectacular vindication of this approach occurred with artemisinin, a breakthrough anti-malarial compound. In the 1970s, Chinese pharmacologist Tu Youyou meticulously combed ancient fourth-century medical scrolls, rediscovering sweet wormwood (*Artemisia annua*) extracts used to combat intermittent fevers. By modifying the chemical extraction temperature to preserve delicate active molecules, Tu extracted pure artemisinin, saving millions of lives across tropical developing nations and ultimately winning the 2015 Nobel Prize in Physiology or Medicine.',
          'Today, integrative medicine seeks a harmonious synthesis. While modern clinical trials and mass-spectrometry provide rigorous safety validation and standardization, traditional holistic paradigms remind medicine that healing involves treating the whole human being—mind, body, and communal spirit.'
        ],
        summaryUz: 'An\'anaviy sharqona tabobat va zamonaviy farmakologiyaning birlashishi: Tu Youyou va bezgakka qarshi artemizinin kashfiyoti (Nobel mukofoti), etnobotanika va integrativ tibbiyot.',
        targetVocab: [
          {
            word: 'condescending',
            pos: 'adj.',
            phonetic: '/ˌkɒn.dɪˈsen.dɪŋ/',
            definitionEn: 'Having or showing a feeling of patronizing superiority.',
            translationUz: 'Kamsituvchi, past nazar bilan qarovchi',
            sampleSentence: 'Early colonial doctors exhibited a condescending attitude toward native healers.',
            collocation: 'condescending tone',
            synonym: 'patronizing'
          },
          {
            word: 'pharmacopeia',
            pos: 'n.',
            phonetic: '/ˌfɑː.mə.kəˈpiː.ə/',
            definitionEn: 'An official book or collection describing drugs, medicinal preparations, and their uses.',
            translationUz: 'Farmakopeya, dorivor o\'simliklar va moddalar to\'plami',
            sampleSentence: 'Ancient Chinese pharmacopeias documented hundreds of medicinal roots and fungi.',
            collocation: 'traditional pharmacopeia',
            synonym: 'drug formulary'
          },
          {
            word: 'bioprospecting',
            pos: 'n.',
            phonetic: '/ˌbaɪ.əʊ.prəˈspek.tɪŋ/',
            definitionEn: 'The search for plant and animal species from which medicinal drugs and other commercially valuable compounds can be obtained.',
            translationUz: 'Bioprospekting, tabiatdan dorivor moddalar qidirish',
            sampleSentence: 'Ethnobotanical bioprospecting accelerates the discovery of novel antibiotic compounds.',
            collocation: 'pharmaceutical bioprospecting',
            synonym: 'nature scouting'
          },
          {
            word: 'meticulously',
            pos: 'adv.',
            phonetic: '/məˈtɪk.jə.ləs.li/',
            definitionEn: 'In a way that shows great attention to detail; very thoroughly and carefully.',
            translationUz: 'O\'ta sinchkovlik bilan, har bir detalga e\'tibor qaratib',
            sampleSentence: 'Tu Youyou meticulously reviewed ancient texts to identify low-temperature extraction recipes.',
            collocation: 'meticulously documented',
            synonym: 'thoroughly'
          },
          {
            word: 'integrative',
            pos: 'adj.',
            phonetic: '/ˈɪn.tɪ.ɡrə.tɪv/',
            definitionEn: 'Serving or intending to integrate diverse things into a unified whole.',
            translationUz: 'Integrativ, bir-birini to\'ldiruvchi yaxlit',
            sampleSentence: 'Integrative oncology clinics pair chemotherapy with acupuncture to alleviate severe nausea.',
            collocation: 'integrative medicine',
            synonym: 'combining'
          },
          {
            word: 'holistic',
            pos: 'adj.',
            phonetic: '/həʊˈlɪs.tɪk/',
            definitionEn: 'Characterized by the treatment of the whole person, taking into account mental and social factors rather than just symptoms.',
            translationUz: 'Golistiki, har tomonlama yaxlit (tana va ruh)',
            sampleSentence: 'Holistic healthcare evaluates diet, stress levels, and emotional wellness alongside blood tests.',
            collocation: 'holistic approach',
            synonym: 'comprehensive'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u11-p2-q1',
            type: 'main-idea',
            question: 'What is the modern relationship between traditional indigenous medicine and Western pharmacology described in the passage?',
            options: [
              'Modern medicine has completely outlawed all natural herbs worldwide.',
              'Traditional pharmacopeias are increasingly respected as valuable empirical sources of novel medicinal molecules when validated through modern clinical methods.',
              'Traditional medicine only works if the patient believes in magic.',
              'Modern pharmaceutical companies have stopped conducting laboratory research.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqolada an\'anaviy tibbiyot merosi zamonaviy laboratoriya va klinik sinovlar orqali tasdiqlanganda insoniyat uchun bebaho shifobaxsh dorilarni (masalan, artemizinin) berayotgani uqtirilgan.'
          },
          {
            id: 'rrw2-u11-p2-q2',
            type: 'detail',
            question: 'What life-saving drug did Tu Youyou extract from ancient medical scrolls, earning her a Nobel Prize?',
            options: ['Aspirin', 'Artemisinin (anti-malarial compound)', 'Penicillin', 'Morphine'],
            correctIndex: 1,
            explanationUz: '3-paragrafda Tu Youyou shirin shuvoq o\'simligidan bezgakka qarshi artemizinin moddasini ajratib olgani va Nobel olgani ko\'rsatilgan.'
          },
          {
            id: 'rrw2-u11-p2-q3',
            type: 'vocabulary',
            question: 'The word "meticulously" in paragraph 3 means doing something with:',
            options: ['Carelessness', 'Immense attention to detail and thorough care', 'Speed without checking', 'Angry frustration'],
            correctIndex: 1,
            explanationUz: '"Meticulously" so\'zi har bir mayda detalga ulkan diqqat bilan, sinchkovlik bilan degan ma\'noni beradi.'
          },
          {
            id: 'rrw2-u11-p2-q4',
            type: 'inference',
            question: 'Why was low-temperature extraction crucial for Tu Youyou’s discovery of artemisinin?',
            options: [
              'Because hot water costs too much money.',
              'High heat destroyed the delicate active medicinal molecules, which explained why boiling tea recipes had failed in earlier tests.',
              'Because the laboratory refrigerators were empty.',
              'Ancient scrolls forbade the use of fire.'
            ],
            correctIndex: 1,
            explanationUz: 'Qaynash harorati o\'simlikdagi nozik faol moddalarni parchalab yuborardi; past haroratli ajratib olish (ekstraksiya) moddani butun saqlab qolish imkonini berdi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'problem-solution',
          title: 'Synthesis of Traditional Ethnobotany and Modern Pharmacology',
          sections: [
            {
              heading: 'Historic Impediments',
              points: [
                'Biomedical condescension dismissing herbal traditions as unscientific placebo',
                'Unstandardized dosages and lack of rigorous clinical toxicity testing in folk remedies'
              ]
            },
            {
              heading: 'Scientific Convergence & Solutions',
              points: [
                'Ethnobotanical bioprospecting: learning directly from indigenous healing elders',
                'Mass-spectrometry and chemical extraction (e.g. Tu Youyou\'s artemisinin for malaria)',
                'Integrative medicine blending holistic lifestyle wellness with precise pharmacotherapy'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If a pharmaceutical giant discovers a billion-dollar drug from an indigenous tribe\'s sacred forest plant, how should the tribe be compensated?',
          'Do you prefer natural herbal teas or pharmaceutical tablets when treating a mild cold or headache?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 12: Business & Economics
  // ==========================================
  {
    id: 'rrw2-u12',
    unitNumber: 12,
    title: 'Business & Economics',
    subjectArea: 'Platform Capitalism & Behavioral Economics',
    themeDescriptionUz: 'Platforma iqtisodiyoti (Gig Economy), erkin mehnat bozorining soyali tomonlari va xulq-atvor iqtisodiyoti (Nudging).',
    passages: [
      {
        id: 'rrw2-u12-p1',
        passageNumber: 1,
        title: 'The Platform Economy and the Future of Labor',
        subtitle: 'Algorithmic bosses, gig flexibility, and the erosion of worker safety nets',
        themeCategory: 'Labor Economics',
        level: 'B2',
        wordCount: 430,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Would you prefer a traditional 9-to-5 job with guaranteed benefits or the flexibility of working for an app on your own schedule?',
          'Who is responsible for your healthcare if your boss is a software algorithm?'
        ],
        paragraphs: [
          'The rapid ascent of ride-hailing, food delivery, and freelance freelance platforms has fundamentally disrupted the social contract that governed employment for over a century. Proponents heralded this "gig economy" as the ultimate democratization of work: liberating individuals from the monotony of corporate cubicles, granting them autonomy to set their own hours, and allowing anyone with a smartphone and vehicle to become an entrepreneur.',
          'Yet, beneath the glossy marketing of flexible freedom lies a stark economic reality. By classifying millions of workers as "independent contractors" rather than formal employees, platform corporations circumvent statutory labor obligations. Gig workers are routinely denied guaranteed minimum wages, employer-subsidized health insurance, paid sick leave, retirement contributions, and workers\' compensation in the event of job-related injury.',
          'Furthermore, gig workers face a novel form of management: "algorithmic management." Instead of human supervisors with whom one can negotiate, workers are directed, monitored, and evaluated by automated algorithms. The software calculates passenger fares using opaque surge-pricing metrics, dispatches tasks through game-like nudges, and can summarily "deactivate"—the platform equivalent of termination—a worker based on automated customer star ratings without any transparent right of appeal.',
          'Labor economists warn that without updated regulatory protections—such as portable benefit systems that attach to workers rather than specific employers—the platform economy threatens to institutionalize an insecure, precariously employed digital proletariat.'
        ],
        summaryUz: 'Platforma va kuryerlik iqtisodiyoti (Gig Economy): moslashuvchan jadval qulayligi, mustaqil pudratchi maqomi, ijtimoiy kafolatlarning yo\'qligi va algoritmik boshqaruv.',
        targetVocab: [
          {
            word: 'circumvent',
            pos: 'v.',
            phonetic: '/ˌsɜː.kəmˈvent/',
            definitionEn: 'To find a way around an obstacle or legal regulation, often cleverly or deceptively.',
            translationUz: 'Aylanib o\'tmoq, qonuniy cheklovni chetlab o\'tmoq',
            sampleSentence: 'Tech platforms utilized contractor classifications to circumvent statutory overtime pay.',
            collocation: 'circumvent regulations',
            synonym: 'bypass'
          },
          {
            word: 'statutory',
            pos: 'adj.',
            phonetic: '/ˈstætʃ.ə.tər.i/',
            definitionEn: 'Required, permitted, or enacted by statute or written law.',
            translationUz: 'Qonun bilan belgilangan, majburiy',
            sampleSentence: 'Full-time employees are legally entitled to statutory paid annual leave and pension benefits.',
            collocation: 'statutory requirement',
            synonym: 'mandatory'
          },
          {
            word: 'summarily',
            pos: 'adv.',
            phonetic: '/ˈsʌm.ər.əl.i/',
            definitionEn: 'In a prompt, brief, or immediate manner without customary legal formalities.',
            translationUz: 'Bir zumda, rasmiy sud/tekshiruvsiz',
            sampleSentence: 'Drivers were summarily deactivated by the system after their rating fell below 4.7 stars.',
            collocation: 'summarily dismissed',
            synonym: 'immediately'
          },
          {
            word: 'precariously',
            pos: 'adv.',
            phonetic: '/prɪˈkeə.ri.əs.li/',
            definitionEn: 'In a way that is not securely in position and is likely to fall or collapse; dangerously.',
            translationUz: 'Xatarga to\'la, beqaror tarzda',
            sampleSentence: 'Millions of freelancers live precariously from one weekly paycheck to the next without a safety net.',
            collocation: 'live precariously',
            synonym: 'insecurely'
          },
          {
            word: 'proletariat',
            pos: 'n.',
            phonetic: '/ˌprəʊ.lɪˈteə.ri.ət/',
            definitionEn: 'Workers or working-class people, regarded collectively, especially in modern economic terms.',
            translationUz: 'Proletariat, yollanma ishchilar sinfi',
            sampleSentence: 'Sociologists describe app deliverers as the emerging digital proletariat of metropolitan hubs.',
            collocation: 'urban proletariat',
            synonym: 'working class'
          },
          {
            word: 'portable',
            pos: 'adj.',
            phonetic: '/ˈpɔː.tə.bəl/',
            definitionEn: 'Able to be easily carried or moved; transferable across different employers or jobs.',
            translationUz: 'Ko\'chirib o\'tkaziladigan, moslashuvchan',
            sampleSentence: 'Policy experts advocate portable healthcare accounts that stay with gig workers regardless of app platform.',
            collocation: 'portable benefits',
            synonym: 'transferable'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u12-p1-q1',
            type: 'main-idea',
            question: 'What dual perspective on the gig economy is presented in the article?',
            options: [
              'Gig platforms are exclusively popular among retired people.',
              'While offering schedule autonomy, platforms transfer operational risk to workers while circumventing essential labor safety nets and exerting algorithmic control.',
              'All platform drivers will be replaced by horse carriages by next month.',
              'Governments have banned all smartphones in corporate offices.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqolada platformalar erkin jadval bersa-da, ishchilarni mustaqil pudratchi deb ro\'yxatga olib, ijtimoiy himoyasiz qoldirishi va ularni algoritmlar orqali qattiq nazorat qilishi ko\'rsatilgan.'
          },
          {
            id: 'rrw2-u12-p1-q2',
            type: 'detail',
            question: 'What is "algorithmic management" as described in paragraph 3?',
            options: [
              'A computer class taught at universities.',
              'The direction, evaluation, and summary termination of workers via automated algorithms and metrics rather than human managers.',
              'Robots that wash delivery vehicles.',
              'A new digital currency for buying groceries.'
            ],
            correctIndex: 1,
            explanationUz: 'Algoritmik boshqaruvda tirik rahbar yo\'q, xodimlarning ishi, narxi va hatto tizimdan chiqarilishi (deactivation) avtomatlashgan dasturlar tomonidan amalga oshiriladi.'
          },
          {
            id: 'rrw2-u12-p1-q3',
            type: 'vocabulary',
            question: 'The word "summarily" in paragraph 3 means that an action is carried out:',
            options: ['After months of polite discussion', 'Promptly without ordinary legal formalities or appeal', 'During the summer months', 'Very slowly'],
            correctIndex: 1,
            explanationUz: '"Summarily" so\'zi hech qanday sud yoki rasmiy tekshiruvlarsiz, tezkor va darhol amalga oshirilgan ma\'nosini bildiradi.'
          },
          {
            id: 'rrw2-u12-p1-q4',
            type: 'inference',
            question: 'What reform do labor economists advocate to protect gig economy workers?',
            options: [
              'Banning all delivery bicycles in cities.',
              'Creating "portable benefits" systems that belong to the individual worker rather than tying health and pension to a single employer.',
              'Requiring all drivers to work 80 hours a week.',
              'Eliminating passenger rating systems on mobile apps.'
            ],
            correctIndex: 1,
            explanationUz: 'Iqtisodchilar "ko\'chma imtiyozlar" (portable benefits) tizimini, ya\'ni qaysi kompaniyada ishlashidan qat\'i nazar sug\'urta va pensiya ishchining o\'ziga biriktirilishini taklif qilishmoqda.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'The Gig Economy: Promised Autonomy vs Economic Reality',
          sections: [
            {
              heading: 'Promised Platform Benefits',
              points: [
                'Complete autonomy to set personal work hours and schedules',
                'Low barrier to entry for anyone with basic equipment or vehicle',
                'Ability to supplement income with flexible part-time shifts'
              ]
            },
            {
              heading: 'Labor & Legal Realities',
              points: [
                'Independent contractor status circumvents minimum wage, sick pay, and healthcare',
                'Algorithmic management with opaque surge pricing and summary deactivations',
                'Worker carries vehicle depreciation, fuel costs, and personal health liabilities'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should app-based drivers and food couriers be legally reclassified as full-time employees?',
          'Have you ever given a 1-star rating to a driver, and did you realize it could cause their automated termination?'
        ]
      },
      {
        id: 'rrw2-u12-p2',
        passageNumber: 2,
        title: 'Behavioral Economics: The Nudge Architecture',
        subtitle: 'Defaults, anchoring heuristics, and how subtle choice framing steers global markets',
        themeCategory: 'Behavioral Economics',
        level: 'B2',
        wordCount: 430,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do more people save for retirement when employers enroll them automatically?',
          'Are human consumers completely rational decision-makers, or are we easily influenced by how choices are presented?'
        ],
        paragraphs: [
          'Classical economics was founded upon an idealized abstraction: "Homo economicus," a perfectly rational consumer who evaluates all available market information, calculates utility with mathematical precision, and always selects the optimal outcome. In recent decades, however, the burgeoning discipline of behavioral economics, led by Nobel laureates Daniel Kahneman, Amos Tversky, and Richard Thaler, demonstrated that human beings are "predictably irrational," guided by cognitive shortcuts, emotional biases, and framing effects.',
          'A cornerstone application of behavioral economics is "choice architecture," popularized in Thaler and Cass Sunstein’s book "Nudge." A nudge is any aspect of the choice architecture that alters people’s behavior in a predictable way without forbidding any options or significantly changing their economic incentives. Putting fruit at eye level in a cafeteria counts as a nudge; banning junk food does not.',
          'The most potent nudge is the default option. Because humans exhibit profound inertia and status quo bias, people overwhelmingly stick with whatever option requires zero active effort. When companies transitioned employee pension plans from "opt-in" (employees must manually register) to "opt-out" (automatic enrollment with the right to decline), employee savings participation rates skyrocketed from under forty percent to over ninety percent.',
          'However, choice architecture is a double-edged sword. While governments deploy ethical nudges to bolster retirement savings, organ donation registries, and green energy adoption, commercial corporations frequently deploy deceptive "dark patterns"—manipulative digital designs that trick consumers into recurring subscriptions or surrendering private data. In the modern economy, understanding how our choices are engineered is the ultimate consumer defense.'
        ],
        summaryUz: 'Xulq-atvor iqtisodiyoti: "Homo economicus" mifining inqirozi, "Nudge" nazariyasi, sukut bo\'yicha (default) variantlar kuchi va manipulyativ "dark patterns" xavflari.',
        targetVocab: [
          {
            word: 'abstraction',
            pos: 'n.',
            phonetic: '/æbˈstræk.ʃən/',
            definitionEn: 'A concept or idea not associated with any specific instance; an idealized model.',
            translationUz: 'Abstraktsiya, nazariy mavhumlik',
            sampleSentence: 'The rational Homo economicus was an idealized academic abstraction, not a reality.',
            collocation: 'theoretical abstraction',
            synonym: 'concept'
          },
          {
            word: 'burgeoning',
            pos: 'adj.',
            phonetic: '/ˈbɜː.dʒən.ɪŋ/',
            definitionEn: 'Beginning to grow or increase rapidly; flourishing.',
            translationUz: 'Tez rivojlanayotgan, gullab-yashnayotgan',
            sampleSentence: 'The burgeoning discipline of behavioral economics altered modern public policy.',
            collocation: 'burgeoning field',
            synonym: 'expanding'
          },
          {
            word: 'heuristic',
            pos: 'n.',
            phonetic: '/hjʊəˈrɪs.tɪk/',
            definitionEn: 'A mental shortcut or rule of thumb that enables a person to make decisions or solve problems quickly.',
            translationUz: 'Evristika, aqliy soddalashtirilgan qoida',
            sampleSentence: 'Consumers rely on price heuristics, assuming expensive goods possess superior craftsmanship.',
            collocation: 'cognitive heuristic',
            synonym: 'rule of thumb'
          },
          {
            word: 'inertia',
            pos: 'n.',
            phonetic: '/ɪˈnɜː.ʃə/',
            definitionEn: 'A tendency to do nothing or to remain unchanged; resistance to change.',
            translationUz: 'Inersiya, o\'zgarishga bo\'lgan qarshilik',
            sampleSentence: 'Psychological inertia causes people to remain with default phone settings indefinitely.',
            collocation: 'status quo inertia',
            synonym: 'passivity'
          },
          {
            word: 'potent',
            pos: 'adj.',
            phonetic: '/ˈpəʊ.tənt/',
            definitionEn: 'Having great power, influence, or effect.',
            translationUz: 'Kuchli, qudratli, katta ta\'sirga ega',
            sampleSentence: 'The default choice represents the most potent tool in the behavioral designer\'s arsenal.',
            collocation: 'potent mechanism',
            synonym: 'powerful'
          },
          {
            word: 'surrender',
            pos: 'v.',
            phonetic: '/səˈren.dər/',
            definitionEn: 'To give up something or hand over a right or possession under pressure.',
            translationUz: 'Topshirmoq, ixtiyoriga bermoq, taslim qilmoq',
            sampleSentence: 'Deceptive user interfaces trick users into surrendering their browser tracking data.',
            collocation: 'surrender privacy',
            synonym: 'relinquish'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u12-p2-q1',
            type: 'main-idea',
            question: 'What is the fundamental distinction between classical economics and behavioral economics as outlined in the text?',
            options: [
              'Classical economics uses paper money, while behavioral economics uses silver coins.',
              'Classical economics assumes rational optimization, whereas behavioral economics recognizes that humans rely on predictable heuristics and can be steered by choice architecture.',
              'Behavioral economics only studies the behavior of laboratory rats.',
              'Classical economics does not believe that prices exist.'
            ],
            correctIndex: 1,
            explanationUz: 'Klassik iqtisodiyot insonni har doim mantiqiy hisob-kitob qiladi deb bilsa, xulq-atvor iqtisodiyoti insonlarning aqliy xatolarini va variantlar taqdim etilishi (nudge) orqali ularni yo\'naltirish mumkinligini ko\'rsatadi.'
          },
          {
            id: 'rrw2-u12-p2-q2',
            type: 'detail',
            question: 'What happened when employers shifted retirement savings from "opt-in" to "opt-out" automatic enrollment?',
            options: [
              'Every employee resigned immediately.',
              'Employee savings participation surged from under 40 percent to over 90 percent.',
              'Bank accounts were permanently frozen.',
              'Retirement funds lost all value.'
            ],
            correctIndex: 1,
            explanationUz: '3-paragrafda keltirilganidek, avtomatik a\'zolik (opt-out) tufayli pensiya jamg\'arishda ishtirok etish 40 foizdan 90 foizdan yuqoriga sakradi.'
          },
          {
            id: 'rrw2-u12-p2-q3',
            type: 'vocabulary',
            question: 'The word "inertia" in paragraph 3 refers to:',
            options: ['Extreme physical agility', 'The tendency to remain unchanged and avoid active effort', 'High financial inflation', 'Deep emotional sadness'],
            correctIndex: 1,
            explanationUz: '"Inertia" psixologiyada insonning o\'zgarish qilishni istamasligi va bor holatida qolishga bo\'lgan moyilligini anglatadi.'
          },
          {
            id: 'rrw2-u12-p2-q4',
            type: 'inference',
            question: 'What is a "dark pattern" in commercial website design?',
            options: [
              'A website background that uses a dark black color scheme.',
              'A manipulative user interface that exploits cognitive biases to trick users into unintended purchases or privacy surrender.',
              'A broken computer monitor with dead pixels.',
              'A computer virus that turns off screen lights.'
            ],
            correctIndex: 1,
            explanationUz: '"Dark patterns" - bu insonning aqliy xatolari va inersiyasidan foydalanib, uni qo\'shimcha obunalar sotib olishga yoki shaxsiy ma\'lumotlarini berishga undovchi hiylagirona dizayndir.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Choice Architecture and Behavioral Nudging Dynamics',
          sections: [
            {
              heading: 'Behavioral Flaws (Predictable Irrationality)',
              points: [
                'Status quo bias and cognitive inertia: humans avoid active administrative friction',
                'Framing effects: decision depends heavily on how choices are physically presented'
              ]
            },
            {
              heading: 'Constructive vs Deceptive Applications',
              points: [
                'Beneficial nudges: opt-out retirement savings, automatic organ donation registries',
                'Commercial dark patterns: hidden recurring subscription checkouts, disguised privacy consent'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should governments automatically enroll all adult citizens as organ donors unless they explicitly opt out?',
          'Can you describe a time when a website\'s tricky button design tricked you into agreeing to something you did not want?'
        ]
      }
    ]
  }
];
