import { RealWorldUnit } from '../../types';

export const BOOK2_MORE_UNITS: RealWorldUnit[] = [
  // ==========================================
  // UNIT 5: Environmental Issues
  // ==========================================
  {
    id: 'rrw2-u5',
    unitNumber: 5,
    title: 'Environmental Issues',
    subjectArea: 'Climate Science & Marine Ecology',
    themeDescriptionUz: 'Qayta tiklanadigan energiya tizimlari, okeanlarning kislotalashishi va marjon riflarini qutqarish.',
    passages: [
      {
        id: 'rrw2-u5-p1',
        passageNumber: 1,
        title: 'The Great Renewable Energy Transition',
        subtitle: 'Overcoming intermittency, upgrading continental grids, and the physics of battery storage',
        themeCategory: 'Renewable Energy',
        level: 'B2',
        wordCount: 425,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What happens to solar and wind power when the sun does not shine or the wind stops blowing?',
          'Why is upgrading the electrical grid as vital as building wind turbines?'
        ],
        paragraphs: [
          'The urgent imperative to decarbonize the global energy economy has sparked an unprecedented boom in solar photovoltaic and wind installations. Over the past decade, the levelized cost of solar electricity plummeted by nearly ninety percent, rendering clean generation cheaper than burning fossil fuels in most major energy markets. Yet, integrating variable renewable energy into existing national grids poses complex engineering quandaries.',
          'The core technical impediment is intermittency. Unlike traditional thermal power stations—which deliver constant "baseload" electricity on demand by combusting coal or natural gas—solar panels and wind turbines produce fluctuating power dependent on meteorological vagaries. When peak generation fails to coincide with peak residential and industrial demand, electrical grids experience volatile frequency fluctuations that risk catastrophic blackouts unless countered by rapid-response balancing reserves.',
          'To surmount this hurdle, electrical engineers are deploying colossal utility-scale lithium-iron-phosphate battery arrays, alongside visionary pumped-storage hydroelectric facilities and green hydrogen electrolyzers. Simultaneously, trans-continental high-voltage direct current (HVDC) transmission corridors are being constructed to shuttle surplus desert solar electricity thousands of kilometers to cloudy, energy-hungry metropolitan centers.',
          'Ultimately, the transition requires an overhaul of regulatory paradigms. Smart grids, equipped with predictive artificial intelligence and dynamic demand-pricing tariffs, turn passive consumers into proactive participants who automatically charge electric vehicles when clean energy is abundant and cheap.'
        ],
        summaryUz: 'Qayta tiklanuvchi energiya (quyosh va shamol) manbalarining ommalashishi, ulardagi uzilishlar (intermittency) muammosi, akkumulyator tizimlari va intellektual elektr tarmoqlari.',
        targetVocab: [
          {
            word: 'quandary',
            pos: 'n.',
            phonetic: '/ˈkwɒn.dər.i/',
            definitionEn: 'A state of perplexity or uncertainty over what to do in a difficult situation.',
            translationUz: 'Mushkul ahvol, chigal masala',
            sampleSentence: 'Engineers confronted a perplexing quandary regarding grid stability during unexpected wind lulls.',
            collocation: 'ethical quandary',
            synonym: 'dilemma'
          },
          {
            word: 'impediment',
            pos: 'n.',
            phonetic: '/ɪmˈped.ɪ.mənt/',
            definitionEn: 'A hindrance or obstruction in doing something; an obstacle.',
            translationUz: 'To\'siq, g\'ov',
            sampleSentence: 'The lack of localized energy storage remains a primary impediment to total fossil fuel phaseout.',
            collocation: 'major impediment',
            synonym: 'obstacle'
          },
          {
            word: 'vagary',
            pos: 'n.',
            phonetic: '/ˈveɪ.ɡər.i/',
            definitionEn: 'An unexpected and inexplicable change in a situation or in someone\'s behavior.',
            translationUz: 'Kutilmagan o\'zgarish, injiqlik (ob-havo)',
            sampleSentence: 'Farmers and solar operators must contend with the unpredictable vagaries of changing climate patterns.',
            collocation: 'vagaries of weather',
            synonym: 'whim'
          },
          {
            word: 'surmount',
            pos: 'v.',
            phonetic: '/səˈmaʊnt/',
            definitionEn: 'To overcome a difficulty, obstacle, or challenge successfully.',
            translationUz: 'Yengib o\'tmoq, bartaraf etmoq',
            sampleSentence: 'The utility company invested in advanced storage tech to surmount seasonal supply shortages.',
            collocation: 'surmount obstacles',
            synonym: 'overcome'
          },
          {
            word: 'surplus',
            pos: 'n.',
            phonetic: '/ˈsɜː.pləs/',
            definitionEn: 'An amount of something left over when requirements have been met; an excess.',
            translationUz: 'Ortiqcha miqdor, ortiqchalik',
            sampleSentence: 'On windy spring afternoons, the regional grid produces a vast surplus of clean electricity.',
            collocation: 'surplus energy',
            synonym: 'excess'
          },
          {
            word: 'overhaul',
            pos: 'n.',
            phonetic: '/ˈəʊ.və.hɔːl/',
            definitionEn: 'A thorough examination of machinery or a system, with repairs or changes made if necessary.',
            translationUz: 'Tubdan qayta ko\'rib chiqish, to\'liq modernizatsiya',
            sampleSentence: 'Transitioning to net-zero emissions necessitates an exhaustive overhaul of public transport infrastructure.',
            collocation: 'comprehensive overhaul',
            synonym: 'revamp'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u5-p1-q1',
            type: 'main-idea',
            question: 'What is the principal engineering challenge discussed in the passage regarding green energy?',
            options: [
              'Solar panels breaking whenever exposed to ordinary sunlight.',
              'Overcoming intermittency and upgrading grid infrastructure to match variable energy generation with demand.',
              'Wind turbines causing ocean tides to reverse direction.',
              'Fossil fuel generators being legally forbidden from producing heat.'
            ],
            correctIndex: 1,
            explanationUz: 'Qayta tiklanuvchi energiyaning eng katta texnik qiyinchiligi - bu havo sharoitiga bog\'liq uzilishlar (intermittency) va elektr tarmoqlarini moslashtirishdir.'
          },
          {
            id: 'rrw2-u5-p1-q2',
            type: 'detail',
            question: 'How much has the levelized cost of solar electricity fallen over the last decade?',
            options: ['By approximately 10 percent', 'By nearly 90 percent', 'It has doubled in price', 'It stayed exactly the same'],
            correctIndex: 1,
            explanationUz: '1-paragrafda quyosh energiyasi narxi oxirgi 10 yilda qariyb 90 foizga arzonlashgani qayd etilgan.'
          },
          {
            id: 'rrw2-u5-p1-q3',
            type: 'vocabulary',
            question: 'The word "impediment" in paragraph 2 is closest in meaning to:',
            options: ['Catalyst', 'Obstacle or barrier', 'Measurement', 'Guarantee'],
            correctIndex: 1,
            explanationUz: '"Impediment" so\'zi to\'siq, qiyinchilik yoki g\'ov ma\'nosini bildiradi.'
          },
          {
            id: 'rrw2-u5-p1-q4',
            type: 'inference',
            question: 'How do high-voltage direct current (HVDC) corridors help solve local power shortages?',
            options: [
              'By turning cloudy rain clouds into clear skies.',
              'By efficiently transmitting excess electricity generated in sunny deserts over thousands of miles to populated cities.',
              'By storing electricity inside underground coal mines.',
              'By eliminating the need for electric wires completely.'
            ],
            correctIndex: 1,
            explanationUz: 'HVDC yo\'laklari quyoshli cho\'llarda hosil bo\'lgan ortiqcha energiyani minglab kilometr uzoqlikdagi yirik shaharlarga yo\'qotishlarsiz yetkazib beradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'problem-solution',
          title: 'Renewable Intermittency Dilemma and Infrastructure Solutions',
          sections: [
            {
              heading: 'The Problem: Intermittency',
              points: [
                'Solar and wind fluctuate unpredictably with weather conditions',
                'Mismatch between peak midday generation and peak evening consumer demand',
                'Risk of grid destabilization and blackouts'
              ]
            },
            {
              heading: 'Technological & Grid Solutions',
              points: [
                'Utility-scale lithium-iron-phosphate battery arrays and pumped-storage hydro',
                'Continental HVDC transmission lines sharing surplus across time zones',
                'AI-driven smart grids and dynamic tariff scheduling'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should governments mandate rooftop solar panels on all newly constructed suburban homes?',
          'How can developing countries balance rapid industrialization with the financial costs of building clean energy grids?'
        ]
      },
      {
        id: 'rrw2-u5-p2',
        passageNumber: 2,
        title: 'Ocean Acidification and the Coral Crisis',
        subtitle: 'The silent chemistry threatening marine calcifiers, food chains, and coastal barriers',
        themeCategory: 'Marine Biology',
        level: 'B2',
        wordCount: 430,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'How does carbon dioxide emitted from cars and factories affect the chemistry of oceans?',
          'Why are coral reefs described as the "rainforests of the sea"?'
        ],
        paragraphs: [
          'While the atmospheric impacts of greenhouse gas emissions—such as heatwaves and severe storms—dominate headline news, an equally ominous chemical transformation is unfolding beneath the ocean surface. Earth’s oceans have absorbed roughly thirty percent of all anthropogenic carbon dioxide released since the dawn of industrialization, serving as a vital planetary buffer that staved off even more catastrophic atmospheric warming. However, this oceanic sponge effect comes at a devastating ecological toll.',
          'When atmospheric carbon dioxide dissolves into seawater, it reacts with water molecules to form carbonic acid. This process releases hydrogen ions that bond with available carbonate ions, depleting the essential building blocks required by calcifying marine organisms. From microscopic pteropods (sea butterflies) at the base of the marine food web to oysters, clams, and reef-building stony corals, creatures struggle to precipitate and maintain their calcium carbonate shells and skeletons.',
          'Under increasingly acidic conditions, existing coral skeletons begin to dissolve faster than corals can construct them. Compounded by elevated sea surface temperatures that trigger devastating coral bleaching—expelling the symbiotic zooxanthellae algae that nourish them—vital reef ecosystems that support twenty-five percent of all marine species face existential collapse.',
          'The collapse of coral barriers will have catastrophic repercussions for human coastal societies, stripping shorelines of natural storm surge defenses and undermining fisheries that sustain over five hundred million people worldwide. Marine biologists emphasize that only rapid global decarbonization, coupled with localized reef restoration and selective breeding of heat-resilient "super corals," can forestall mass marine extinctions.'
        ],
        summaryUz: 'Okeanlarning kislotalashishi, karbonat angidridning dengiz suvi kimyosiga ta\'siri, marjon riflarining yo\'qolishi va qirg\'oqbo\'yi aholisi uchun xavflar.',
        targetVocab: [
          {
            word: 'anthropogenic',
            pos: 'adj.',
            phonetic: '/ˌæn.θrə.pəˈdʒen.ɪk/',
            definitionEn: 'Originating in human activity, especially regarding environmental pollution.',
            translationUz: 'Inson faoliyati bilan bog\'liq, sun\'iy',
            sampleSentence: 'The scientific consensus attributes rising oceanic acidity to anthropogenic carbon emissions.',
            collocation: 'anthropogenic emissions',
            synonym: 'man-made'
          },
          {
            word: 'deplete',
            pos: 'v.',
            phonetic: '/dɪˈpliːt/',
            definitionEn: 'To use up the supply or resources of something drastically.',
            translationUz: 'Tugatmoq, kamaytirib yubormoq',
            sampleSentence: 'Acidification depletes the dissolved carbonate ions essential for shellfish to build their protective carapaces.',
            collocation: 'deplete resources',
            synonym: 'exhaust'
          },
          {
            word: 'symbiotic',
            pos: 'adj.',
            phonetic: '/ˌsɪm.baɪˈɒt.ɪk/',
            definitionEn: 'Involving interaction between two different organisms living in close physical association, typically to mutual advantage.',
            translationUz: 'Simbioz, o\'zaro foydali hamkorlikda yashovchi',
            sampleSentence: 'Corals rely on a delicate symbiotic partnership with microscopic photosynthetic algae.',
            collocation: 'symbiotic relationship',
            synonym: 'mutualistic'
          },
          {
            word: 'existential',
            pos: 'adj.',
            phonetic: '/ˌeɡ.zɪˈsten.ʃəl/',
            definitionEn: 'Relating to existence, especially regarding a threat to the very survival of a species or system.',
            translationUz: 'Mavjudlikka daxldor, hayot-mamotga oid',
            sampleSentence: 'Marine heatwaves pose an immediate existential threat to Australia\'s Great Barrier Reef.',
            collocation: 'existential threat',
            synonym: 'survival-related'
          },
          {
            word: 'repercussion',
            pos: 'n.',
            phonetic: '/ˌriː.pəˈkʌʃ.ən/',
            definitionEn: 'An unintended consequence occurring some time after an event or action.',
            translationUz: 'Salbiy oqibat, asorat',
            sampleSentence: 'The collapse of tropical fisheries would produce severe economic repercussions across coastal developing nations.',
            collocation: 'serious repercussions',
            synonym: 'consequence'
          },
          {
            word: 'forestall',
            pos: 'v.',
            phonetic: '/fɔːˈstɔːl/',
            definitionEn: 'To prevent or obstruct an anticipated event or action by taking advance measures.',
            translationUz: 'Oldini olmoq, to\'sib qolmoq',
            sampleSentence: 'Ecologists race to cultivate heat-tolerant coral strains to forestall catastrophic reef collapse.',
            collocation: 'forestall extinction',
            synonym: 'prevent'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u5-p2-q1',
            type: 'main-idea',
            question: 'What is the primary scientific mechanism and consequence explained in the article?',
            options: [
              'Oceans are turning into freshwater lakes due to melting icebergs.',
              'Dissolved carbon dioxide forms carbonic acid, depleting carbonate ions that marine organisms require to build shells and coral reefs.',
              'Submarine volcanoes are heating the ocean floor, boiling all fish eggs.',
              'Corals are multiplying too rapidly and blocking international shipping lanes.'
            ],
            correctIndex: 1,
            explanationUz: 'Okean suvida erigan karbonat angidrid kislotali muhit hosil qiladi va dengiz jonzotlari qobiq hamda skelet qurishi uchun zarur bo\'lgan karbonat ionlarini kamaytiradi.'
          },
          {
            id: 'rrw2-u5-p2-q2',
            type: 'detail',
            question: 'Approximately what percentage of anthropogenic carbon dioxide emissions have the oceans absorbed?',
            options: ['Less than 1 percent', 'Around 30 percent', '100 percent', 'Precisely 75 percent'],
            correctIndex: 1,
            explanationUz: '1-paragrafda insoniyat chiqargan jami karbonat angidridning taxminan 30 foizini okeanlar yutib olgani ta\'kidlangan.'
          },
          {
            id: 'rrw2-u5-p2-q3',
            type: 'vocabulary',
            question: 'The word "deplete" in paragraph 2 most nearly means:',
            options: ['To multiply rapidly', 'To exhaust or reduce significantly', 'To freeze into solid ice', 'To color brightly'],
            correctIndex: 1,
            explanationUz: '"Deplete" so\'zi miqdorni keskin kamaytirib yubormoq, tugatmoq degan ma\'noni bildiradi.'
          },
          {
            id: 'rrw2-u5-p2-q4',
            type: 'inference',
            question: 'Why does the destruction of coral reefs directly threaten human coastal communities?',
            options: [
              'Reefs provide the sand needed to manufacture glass windows.',
              'Healthy reefs dissipate powerful wave energy, acting as natural breakwaters against destructive hurricanes and storm surges.',
              'Corals generate the electricity that powers coastal streetlights.',
              'Reefs prevent submarines from entering shallow bays.'
            ],
            correctIndex: 1,
            explanationUz: 'Marjon riflari kuchli to\'lqin energiyasini pasaytirib, qirg\'oqdagi aholi punktlarini bo\'ron va sunamilardan tabiiy to\'siq sifatida himoya qiladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Ocean Acidification Cascade and Ecological Repercussions',
          sections: [
            {
              heading: 'Chemical Cascade',
              points: [
                'Atmospheric CO2 dissolves into surface seawater',
                'Water and CO2 react to form carbonic acid (H2CO3)',
                'Free hydrogen ions bind with carbonate ions, reducing calcium carbonate availability'
              ]
            },
            {
              heading: 'Biological & Human Repercussions',
              points: [
                'Shell-forming organisms (pteropods, oysters, corals) suffer skeletal degradation',
                'Coral bleaching expels symbiotic zooxanthellae, leading to habitat mortality',
                'Coastal communities lose natural storm wave buffers and vital seafood proteins'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should scientists be allowed to use gene-editing technology (CRISPR) to create artificial "super corals" and release them into the wild?',
          'How can island nations dependent on coral reef tourism protect their economies in an era of warming oceans?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 6: Law & Crime
  // ==========================================
  {
    id: 'rrw2-u6',
    unitNumber: 6,
    title: 'Law & Crime',
    subjectArea: 'Algorithmic Justice & Surveillance Law',
    themeDescriptionUz: 'Biometrik kuzatuv tizimlari, intellektual mulk huquqi va sun\'iy intellekt davrida adliya.',
    passages: [
      {
        id: 'rrw2-u6-p1',
        passageNumber: 1,
        title: 'Biometric Surveillance and the Erosion of Anonymity',
        subtitle: 'Facial recognition algorithms, public CCTV networks, and the civil liberties frontier',
        themeCategory: 'Surveillance Law',
        level: 'B2',
        wordCount: 435,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Should police departments be permitted to scan every face on a public street using AI cameras?',
          'Is true anonymity in public spaces still possible in modern cities?'
        ],
        paragraphs: [
          'Historically, stepping out into a bustling city street afforded citizens a profound civil guarantee: the shield of public anonymity. While people were physically visible to passing strangers, their identities, movements, and personal associations were not cataloged in permanent centralized databases. Today, however, the proliferation of artificial intelligence-powered biometric facial recognition and dense closed-circuit television (CCTV) networks has rendered public anonymity an obsolete relic of the pre-digital era.',
          'Modern facial recognition systems operate by mapping geometric nodal points across a human face—measuring the distance between the eyes, the contours of cheekbones, and the curvature of the jawline. These mathematical "faceprints" are matched against vast governmental or commercial biometric repositories containing billions of images scraped from driver\'s license databases and social media profiles in fractions of a second.',
          'Proponents within law enforcement argue that real-time biometric scanning provides an indispensable tool for intercepting violent fugitives, locating missing children, and deterring terrorist strikes in crowded transit hubs. However, civil liberties advocates vehemently counter that ubiquitous surveillance creates an insidious "chilling effect" on democratic freedoms. When citizens know that every political demonstration, religious gathering, or medical visit is recorded and scrutinized, the fundamental rights to free assembly and speech are quietly suffocated.',
          'Moreover, independent audits have repeatedly exposed dangerous demographic discrepancies in algorithmic accuracy. Many commercially deployed computer vision models exhibit substantially higher error rates when identifying women and racial minorities, amplifying historical systemic biases and causing harrowing wrongful detentions of completely innocent citizens.'
        ],
        summaryUz: 'Yuzni tanish algoritmlari, biometrik nazorat va shaxsiy daxlsizlik: jinoyatchilikka qarshi kurash va fuqarolik erkinliklari o\'rtasidagi jiddiy ziddiyat.',
        targetVocab: [
          {
            word: 'proliferation',
            pos: 'n.',
            phonetic: '/prəˌlɪf.əˈreɪ.ʃən/',
            definitionEn: 'Rapid increase in the appearance or number of something; large-scale reproduction.',
            translationUz: 'Keng tarqalish, tez sur\'atda ko\'payish',
            sampleSentence: 'The rapid proliferation of surveillance cameras across major intersections sparked public debate.',
            collocation: 'rapid proliferation',
            synonym: 'expansion'
          },
          {
            word: 'obsolete',
            pos: 'adj.',
            phonetic: '/ˈɒb.səl.iːt/',
            definitionEn: 'No longer produced or used; out of date.',
            translationUz: 'Eskirgan, o\'z kuchini yo\'qotgan',
            sampleSentence: 'Pervasive facial tracking has made the concept of urban anonymity virtually obsolete.',
            collocation: 'rendered obsolete',
            synonym: 'outdated'
          },
          {
            word: 'vehemently',
            pos: 'adv.',
            phonetic: '/ˈviː.ə.mənt.li/',
            definitionEn: 'In a forceful, passionate, or intense manner; with great feeling.',
            translationUz: 'Qat\'iyan, qattiq ehtiros bilan',
            sampleSentence: 'Civil rights advocates vehemently opposed the warrantless deployment of biometric scanners.',
            collocation: 'oppose vehemently',
            synonym: 'forcefully'
          },
          {
            word: 'scrutinize',
            pos: 'v.',
            phonetic: '/ˈskruː.tɪ.naɪz/',
            definitionEn: 'To examine or inspect closely and thoroughly.',
            translationUz: 'Sinchkovlik bilan tekshirmoq',
            sampleSentence: 'Regulatory agencies scrutinize artificial intelligence models for hidden demographic biases.',
            collocation: 'closely scrutinize',
            synonym: 'examine'
          },
          {
            word: 'discrepancy',
            pos: 'n.',
            phonetic: '/dɪˈskrep.ən.si/',
            definitionEn: 'A lack of compatibility or similarity between two or more facts; an inconsistency.',
            translationUz: 'Nomuvofiqlik, tafovut, farq',
            sampleSentence: 'Auditors uncovered a troubling discrepancy between recognition accuracy rates across different demographic groups.',
            collocation: 'glaring discrepancy',
            synonym: 'inconsistency'
          },
          {
            word: 'harrowing',
            pos: 'adj.',
            phonetic: '/ˈhær.əʊ.ɪŋ/',
            definitionEn: 'Acutely distressing or painful; agonizing.',
            translationUz: 'Yurakni ezuvchi, azobli, dahshatli',
            sampleSentence: 'An innocent teacher endured a harrowing 48 hours in jail due to an algorithmic false match.',
            collocation: 'harrowing ordeal',
            synonym: 'distressing'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u6-p1-q1',
            type: 'main-idea',
            question: 'What is the core conflict surrounding biometric facial recognition technology?',
            options: [
              'Whether cameras should be painted in camouflaged green or white colors.',
              'The tension between enhanced law enforcement security and the preservation of civil liberties and privacy.',
              'The high cost of replacing glass camera lenses after hailstorms.',
              'Why facial recognition only functions in dark subway tunnels.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqolaning asosiy mavzusi jamoat xavfsizligini ta\'minlash bilan fuqarolarning shaxsiy daxlsizligi va erkinliklari o\'rtasidagi ziddiyatdir.'
          },
          {
            id: 'rrw2-u6-p1-q2',
            type: 'detail',
            question: 'How do computer vision models map a human face mathematically?',
            options: [
              'By measuring the temperature of the forehead skin.',
              'By mapping geometric nodal points, such as distance between eyes, cheekbone contours, and jawline curvature.',
              'By counting the total number of eyelashes.',
              'By reading brainwaves emitted from the earlobes.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda yuzning geometrik tugun nuqtalari: ko\'zlar orasidagi masofa, yonoq va jag\' chiziqlari o\'lchanishi tushuntirilgan.'
          },
          {
            id: 'rrw2-u6-p1-q3',
            type: 'vocabulary',
            question: 'In paragraph 3, the phrase "chilling effect" refers to:',
            options: [
              'A drop in temperature caused by air conditioning.',
              'The discouragement of citizens from freely exercising their lawful speech and assembly rights due to fear of surveillance.',
              'A biological reaction causing shivers in cold weather.',
              'The shutdown of computer fans during winter.'
            ],
            correctIndex: 1,
            explanationUz: '"Chilling effect" fuqarolarning kuzatuvdan cho\'chib, o\'z qonuniy huquq va erkinliklarini (namoyish, so\'z erkinligi) erkin amalga oshirishdan tiyilishini bildiradi.'
          },
          {
            id: 'rrw2-u6-p1-q4',
            type: 'inference',
            question: 'Why are higher error rates among demographic minorities in AI systems particularly dangerous?',
            options: [
              'Because the software consumes more battery power.',
              'Because it leads to disproportionate wrongful accusations and unjust arrests of innocent minority citizens.',
              'Because minority citizens cannot buy smartphones.',
              'Because police cars must drive faster to verify IDs.'
            ],
            correctIndex: 1,
            explanationUz: 'Algoritmik xatolar begunoh odamlarning asossiz ushlanishi va adolatsiz qamoqqa olinishiga sabab bo\'ladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Biometric Surveillance: Arguments For vs Arguments Against',
          sections: [
            {
              heading: 'Security & Enforcement Arguments',
              points: [
                'Rapid interception of violent fugitives and missing children',
                'Effective deterrence of terror attacks in high-density airports and transit hubs',
                'Automates labor-intensive manual detective photo reviews'
              ]
            },
            {
              heading: 'Civil Liberties & Ethical Concerns',
              points: [
                'Eradication of public anonymity and chilling effect on peaceful protest',
                'Higher algorithmic error rates and false positives on racial minorities and women',
                'Risk of authoritarian weaponization for political persecution'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Would you support a complete municipal ban on facial recognition cameras in public parks and squares?',
          'How should judges punish tech companies whose algorithmic false matches cause innocent people to be jailed?'
        ]
      },
      {
        id: 'rrw2-u6-p2',
        passageNumber: 2,
        title: 'Generative AI and the Intellectual Property Crisis',
        subtitle: 'Fair use, copyrighted training corpora, and redefining human authorship in the digital age',
        themeCategory: 'Intellectual Property Law',
        level: 'B2',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Should AI companies be required to pay authors and artists whose books and paintings were used to train AI models?',
          'Who owns the copyright to a poem, image, or computer code created by an artificial neural network?'
        ],
        paragraphs: [
          'The explosive advent of large language models and generative visual algorithms has triggered the most consequential crisis in copyright law since the invention of the printing press. Modern deep-learning architectures achieve their uncanny linguistic fluency and creative prowess by ingesting colossal datasets containing trillions of words and billions of images scraped indiscriminately from the internet. Among these datasets reside millions of copyrighted novels, investigative articles, digital illustrations, and photographic masterpieces ingested without the consent, credit, or compensation of their human creators.',
          'This practice has ignited titanic legal battles between content creators and trillion-dollar technology conglomerates. Authors and artists argue that scraping protected works constitutes wholesale commercial piracy, asserting that generative engines function as unauthorized derivative machines that directly undermine the livelihoods of human creatives.',
          'In defense, artificial intelligence developers invoke the doctrine of "fair use." They contend that neural networks do not copy or store source texts verbatim; rather, they analyze mathematical statistical associations between words and pixels to learn underlying concepts, much like a human art student visits a museum to absorb stylistic techniques before creating an original canvas.',
          'Judicial systems worldwide now wrestle with foundational questions: Can machine learning truly be equated with human cognitive inspiration? Should training on public data be classified as fair use or commercial theft? The resolution of these lawsuits will permanently reshape the creative industries, determining whether human artists will retain financial viability or be eclipsed by algorithmic synthetics.'
        ],
        summaryUz: 'Generativ sun\'iy intellekt va mualliflik huquqi: AI modellarini o\'rgatishda mualliflar asarlaridan ruxsatsiz foydalanish va adolatli foydalanish (Fair Use) bo\'yicha global bahslar.',
        targetVocab: [
          {
            word: 'indiscriminately',
            pos: 'adv.',
            phonetic: '/ˌɪn.dɪˈskrɪm.ɪ.nət.li/',
            definitionEn: 'In a random manner; without making careful distinctions or judgments.',
            translationUz: 'Farqiga bormasdan, yalpi, tartibsiz',
            sampleSentence: 'Web scrapers gathered copyrighted texts and personal blog posts indiscriminately.',
            collocation: 'scraped indiscriminately',
            synonym: 'randomly'
          },
          {
            word: 'conglomerate',
            pos: 'n.',
            phonetic: '/kənˈɡlɒm.ər.ət/',
            definitionEn: 'A corporation that is made up of a number of different, seemingly unrelated businesses.',
            translationUz: 'Konglomerat, yirik korporatsiya',
            sampleSentence: 'Tech conglomerates defended their data ingestion methods in federal court.',
            collocation: 'technology conglomerate',
            synonym: 'corporation'
          },
          {
            word: 'derivative',
            pos: 'adj.',
            phonetic: '/dɪˈrɪv.ə.tɪv/',
            definitionEn: 'Imitative of the work of another person, and usually disapproved of for that reason; derived from something else.',
            translationUz: 'Hosilaviy, ko\'chirma, mustaqil bo\'lmagan',
            sampleSentence: 'Illustrators argued that generated images were merely unauthorized derivative works of their original styles.',
            collocation: 'derivative work',
            synonym: 'secondary'
          },
          {
            word: 'doctrine',
            pos: 'n.',
            phonetic: '/ˈdɒk.trɪn/',
            definitionEn: 'A stated principle of government policy, legal practice, or philosophical belief.',
            translationUz: 'Doktrina, qonuniy ta\'limot',
            sampleSentence: 'Lawyers invoked the fair use doctrine to defend computer model training.',
            collocation: 'legal doctrine',
            synonym: 'principle'
          },
          {
            word: 'verbatim',
            pos: 'adv.',
            phonetic: '/vɜːˈbeɪ.tɪm/',
            definitionEn: 'In exactly the same words as were used originally.',
            translationUz: 'So\'zma-so\'z, harfma-harf',
            sampleSentence: 'The artificial intelligence rarely regurgitated long copyrighted paragraphs verbatim.',
            collocation: 'quote verbatim',
            synonym: 'word-for-word'
          },
          {
            word: 'eclipse',
            pos: 'v.',
            phonetic: '/ɪˈklɪps/',
            definitionEn: 'To obscure or surpass in importance, quality, or renown; overshadow.',
            translationUz: 'Soyada qoldirmoq, ortda qoldirmoq',
            sampleSentence: 'Freelance voice actors worry that synthetic audio will eclipse human talent in commercial narration.',
            collocation: 'eclipse human work',
            synonym: 'overshadow'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw2-u6-p2-q1',
            type: 'main-idea',
            question: 'What is the central legal and ethical conflict presented in this passage?',
            options: [
              'Whether computer programmers should be allowed to use external keyboards.',
              'Whether scraping copyrighted human creations to train generative AI constitutes illegal infringement or protected fair use.',
              'How to increase the retail price of printed paper books in bookstores.',
              'Why digital art cannot be printed on canvas.'
            ],
            correctIndex: 1,
            explanationUz: 'Matn generativ sun\'iy intellektni o\'qitishda mualliflik huquqi bilan himoyalangan asarlardan foydalanish qonuniy o\'g\'irlikmi yoki adolatli foydalanish (fair use) degan bahsni ko\'taradi.'
          },
          {
            id: 'rrw2-u6-p2-q2',
            type: 'detail',
            question: 'What legal defense do AI developers primarily invoke when sued by content creators?',
            options: [
              'The maritime admiralty treaty of 1789.',
              'The legal doctrine of "fair use," arguing that models learn statistical associations rather than storing verbatim copies.',
              'Claiming that all books on the internet were written by aliens.',
              'Declaring immediate corporate bankruptcy.'
            ],
            correctIndex: 1,
            explanationUz: 'AI ishlab chiquvchilari "fair use" doktrinasiga tayanib, modellar matnni so\'zma-so\'z ko\'chirmaydi, balki inson kabi uslubni o\'rganadi deb ta\'kidlashadi.'
          },
          {
            id: 'rrw2-u6-p2-q3',
            type: 'vocabulary',
            question: 'The word "verbatim" in paragraph 3 means:',
            options: ['Using different metaphors', 'Word-for-word exactly as in the original', 'In secret code', 'With high musical pitch'],
            correctIndex: 1,
            explanationUz: '"Verbatim" so\'zi so\'zma-so\'z, aynan asliga o\'xshash shaklda degan ma\'noni bildiradi.'
          },
          {
            id: 'rrw2-u6-p2-q4',
            type: 'inference',
            question: 'Why are human artists deeply alarmed by AI models trained on their works?',
            options: [
              'They fear their paintbrushes will run out of bristles.',
              'AI tools can instantly replicate their unique artistic signatures at zero cost, threatening their commercial survival.',
              'Museums refuse to hang any art created before the year 2020.',
              'Digital files are too heavy to download.'
            ],
            correctIndex: 1,
            explanationUz: 'Ijodkorlar sun\'iy intellekt ularning yillar davomida shakllangan noyob uslubini tekinga o\'zlashtirib, bozorda ularning o\'rnini egallashidan xavotirda.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'The AI Copyright Battlefield: Creatives vs Tech Conglomerates',
          sections: [
            {
              heading: 'Creators\' Grievances (Plaintiffs)',
              points: [
                'Billions of copyrighted books and artworks ingested without license or fee',
                'Generative outputs compete directly with original human creators in market',
                'Derivative outputs devalue human cognitive and creative labor'
              ]
            },
            {
              heading: 'AI Developers\' Defense (Fair Use)',
              points: [
                'Models learn mathematical statistical weights, not storing copies',
                'Analogy to human students learning artistic styles from gallery tours',
                'Strict licensing requirements would stifle breakthrough technological innovation'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If an AI writes a best-selling novel based on analyzing thousands of detective stories, who should receive the royalties?',
          'Should tech companies be required to disclose every book and article in their training datasets?'
        ]
      }
    ]
  }
];
