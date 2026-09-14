import { RealWorldUnit } from '../../types';

export const BOOK1_MORE_UNITS: RealWorldUnit[] = [
  // ==========================================
  // UNIT 7: Law & Crime
  // ==========================================
  {
    id: 'rrw1-u7',
    unitNumber: 7,
    title: 'Law & Crime',
    subjectArea: 'Forensic Science & Criminology',
    themeDescriptionUz: 'Zamonaviy sud-tibbiyot ekspertizasi, genetik DNK tahlillari va kiberjinoyatchilik xavflari.',
    passages: [
      {
        id: 'rrw1-u7-p1',
        passageNumber: 1,
        title: 'Forensic Science in the Modern Courtroom',
        subtitle: 'How microscopic traces, DNA profiling, and digital ballistics revolutionized criminal justice',
        themeCategory: 'Forensics',
        level: 'B1',
        wordCount: 395,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'How do police investigators gather clues from a crime scene?',
          'Why is DNA evidence considered more dependable than human eyewitness testimony?'
        ],
        paragraphs: [
          'For centuries, criminal trials depended almost entirely on eyewitness accounts, circumstantial clues, and confessions. Unfortunately, human memory is inherently fragile and easily distorted by panic or prejudice. In recent decades, however, the advent of forensic science has revolutionized criminal jurisprudence, shifting courtrooms away from subjective speculation toward indisputable empirical reality.',
          'The cornerstone of modern forensics is DNA profiling, pioneered by British geneticist Sir Alec Jeffreys in 1984. Because each human being—except for identical twins—possesses a distinct genetic code, even microscopic traces such as a stray hair follicle, dried saliva on a drinking glass, or minute droplets of blood can definitively identify a perpetrator. Genetic databases enable law enforcement agencies to compare crime-scene biological samples with millions of recorded offenders in seconds.',
          'Beyond genetics, forensic ballistics examine the microscopic striations left on bullets as they pass through gun barrels, while forensic toxicologists analyze biological tissues to identify obscure poisons or chemical compounds. Nevertheless, forensic experts caution that scientific evidence is rarely infallible; contaminated laboratory samples, improper evidence storage, or overconfident interpretations can still lead to wrongful convictions if rigorous protocols are neglected.',
          'Ultimately, forensic science serves as an impartial witness that cannot lie or forget. When applied with meticulous care, modern analytical techniques ensure that innocent suspects are swiftly exonerated while the guilty are held accountable under the rule of law.'
        ],
        summaryUz: 'Ushbu matn sud-tibbiyot ekspertizasi va ayniqsa 1984-yilda kashf etilgan DNK tahlilining jinoyat ishlarini xolis tergov qilishdagi inqilobiy o\'rnini yoritadi.',
        targetVocab: [
          {
            word: 'circumstantial',
            pos: 'adj.',
            phonetic: '/ˌsɜː.kəmˈstæn.ʃəl/',
            definitionEn: 'Pointing indirectly toward someone\'s guilt but not conclusively proving it.',
            translationUz: 'Bilvosita, vaziyatga asoslangan',
            sampleSentence: 'The suspect was initially detained on circumstantial evidence before DNA tests confirmed his involvement.',
            collocation: 'circumstantial evidence',
            synonym: 'indirect'
          },
          {
            word: 'jurisprudence',
            pos: 'n.',
            phonetic: '/ˌdʒʊə.rɪsˈpruː.dəns/',
            definitionEn: 'The theoretical philosophy or scientific study of law and judicial principles.',
            translationUz: 'Huquqshunoslik, qonunchilik tizimi',
            sampleSentence: 'The introduction of digital forensics created new paradigms within criminal jurisprudence.',
            collocation: 'modern jurisprudence',
            synonym: 'legal theory'
          },
          {
            word: 'cornerstone',
            pos: 'n.',
            phonetic: '/ˈkɔː.nə.stəʊn/',
            definitionEn: 'An essential foundation or chief fundamental element upon which something is built.',
            translationUz: 'Tosh poydevor, asosiy negiz',
            sampleSentence: 'Respect for human rights constitutes the cornerstone of a democratic judicial system.',
            collocation: 'cornerstone of',
            synonym: 'foundation'
          },
          {
            word: 'perpetrator',
            pos: 'n.',
            phonetic: '/ˈpɜː.pə.treɪ.tər/',
            definitionEn: 'A person who commits an illegal, criminal, or harmful act.',
            translationUz: 'Jinoyatchi, qonunbuzar',
            sampleSentence: 'Security cameras captured the perpetrator fleeing the bank premises through the alleyway.',
            collocation: 'alleged perpetrator',
            synonym: 'criminal'
          },
          {
            word: 'infallible',
            pos: 'adj.',
            phonetic: '/ɪnˈfæl.ə.bəl/',
            definitionEn: 'Incapable of making mistakes or being wrong; completely trustworthy.',
            translationUz: 'Xatosiz, beg\'ubor, adashmas',
            sampleSentence: 'No scientific method is entirely infallible if laboratory staff fail to obey sterilization guidelines.',
            collocation: 'infallible method',
            synonym: 'flawless'
          },
          {
            word: 'exonerate',
            pos: 'v.',
            phonetic: '/ɪɡˈzɒn.ə.reɪt/',
            definitionEn: 'To officially clear someone from blame, accusation, or wrongful conviction.',
            translationUz: 'Oqlamoq, ayblovdan xalos qilmoq',
            sampleSentence: 'New retrospective DNA testing helped exonerate dozens of prisoners who had spent decades behind bars.',
            collocation: 'exonerate the suspect',
            synonym: 'acquit'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u7-p1-q1',
            type: 'main-idea',
            question: 'What is the primary thesis of the passage regarding forensic science?',
            options: [
              'It has replaced the need for judges and defense attorneys in all criminal courtrooms.',
              'It transformed the legal system by substituting objective empirical evidence for fallible human memory.',
              'It relies solely on eyewitness interviews conducted immediately following a felony.',
              'It is so prone to contamination that courts rarely admit scientific reports.'
            ],
            correctIndex: 1,
            explanationUz: 'Matn sud-tibbiyot fani insonning noaniq xotirasi o\'rniga obektiv ilmiy dalillarni qo\'yib, adliya tizimini tubdan o\'zgartirganini ta\'kidlaydi.'
          },
          {
            id: 'rrw1-u7-p1-q2',
            type: 'detail',
            question: 'When and by whom was DNA profiling initially developed?',
            options: [
              'In 1999 by American criminologists at the FBI.',
              'In 1890 by Scottish investigators examining handwritten documents.',
              'In 1984 by British geneticist Sir Alec Jeffreys.',
              'In 2010 through computer algorithm research in Geneva.'
            ],
            correctIndex: 2,
            explanationUz: '2-paragrafda keltirilganidek, DNK profillash 1984-yilda britaniyalik genetik Ser Alek Jeffreys tomonidan kashf qilingan.'
          },
          {
            id: 'rrw1-u7-p1-q3',
            type: 'vocabulary',
            question: 'In the final paragraph, the word "exonerated" most nearly means:',
            options: [
              'Sentenced to maximum imprisonment.',
              'Declared innocent and cleared of criminal charges.',
              'Transferred to an international detention center.',
              'Interrogated for prolonged periods without legal counsel.'
            ],
            correctIndex: 1,
            explanationUz: '"Exonerate" so\'zi shaxsni asossiz ayblovdan to\'liq xalos qilish yoki oqlash ma\'nosini bildiradi.'
          },
          {
            id: 'rrw1-u7-p1-q4',
            type: 'inference',
            question: 'Why does the author warn that forensic science is "rarely infallible"?',
            options: [
              'Human error or poor laboratory sanitation can still compromise scientific results.',
              'Bullets change shape unpredictably inside modern fire safety lockers.',
              'Computers inevitably refuse to match biological records across borders.',
              'Defendants are legally forbidden from consulting genetic reports.'
            ],
            correctIndex: 0,
            explanationUz: 'Muallif namunalarning ifloslanishi yoki noto\'g\'ri saqlanishi kabi insoniy omillar tufayli hatto ilmiy dalillar ham xatosiz emasligini uqtiradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'main-ideas-details',
          title: 'Evolution of Criminal Evidence in Courtrooms',
          sections: [
            {
              heading: 'Historical Pre-Forensic Era',
              points: [
                'Heavily reliant on eyewitness memories prone to panic and bias',
                'Subjective interpretations of circumstantial clues',
                'High vulnerability to wrongful accusations'
              ]
            },
            {
              heading: 'Forensic Revolution Disciplines',
              points: [
                'DNA Profiling: Analyzes minute genetic traces unique to individuals',
                'Forensic Ballistics: Examines unique microscopic barrel striations on bullets',
                'Toxicology: Detects obscured chemical compounds and poison traces'
              ]
            },
            {
              heading: 'Crucial Caveats & Standards',
              points: [
                'Rigorous chain of custody must prevent specimen contamination',
                'Laboratories must obey strict sterilization and storage protocols'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should governments maintain mandatory national DNA databases of all citizens to combat crime, or does this violate civil privacy rights?',
          'If an eyewitness and a forensic ballistics test disagree during a trial, which should a jury trust more, and why?'
        ]
      },
      {
        id: 'rrw1-u7-p2',
        passageNumber: 2,
        title: 'Cybercrime and Digital Identity Theft',
        subtitle: 'Navigating phishing syndicates, ransomware extortion, and digital hygiene in a networked world',
        themeCategory: 'Cybersecurity',
        level: 'B1',
        wordCount: 410,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Have you ever received a suspicious message asking for your password or card number?',
          'What steps can individuals take to safeguard their personal accounts online?'
        ],
        paragraphs: [
          'In the twenty-first century, the nature of burglary has undergone a radical transformation. Criminals no longer need crowbars or physical lockpicks to plunder fortunes; instead, armed with algorithmic scripts and deceptive communications, syndicated cybercriminals can breach corporate databases and drain personal bank accounts from continents away.',
          'One of the most rampant cyber threats is phishing—a social engineering tactic in which fraudsters impersonate legitimate organizations, such as banks, postal services, or educational portals. Victims are lured into clicking deceitful links that harvest login credentials or deposit malicious spyware onto their devices. Simultaneously, ransomware attacks encrypt vital institutional files, paralyzing municipal hospitals and infrastructure networks until exorbitant ransoms are paid in anonymous cryptocurrencies.',
          'The repercussions of digital identity theft extend far beyond immediate financial loss. When an individual’s identity is compromised, perpetrators may open fraudulent credit lines, file illicit tax refunds, or commit crimes under the victim’s name, leaving individuals entangled in bureaucratic nightmares that require years to resolve.',
          'Defending against these insidious dangers demands both institutional cybersecurity investments and individual vigilance. Experts advise adopting rigorous digital hygiene: deploying multi-factor authentication (MFA), crafting unique complex passphrases for every account, and exercising healthy skepticism toward unsolicited electronic requests.'
        ],
        summaryUz: 'Kiberjinoyatchilik, fishing hiylalari, to\'lov talab qiluvchi viruslar (ransomware) hamda shaxsiy ma\'lumotlar o\'g\'irlanishining global xavflari va himoyalanish choralari.',
        targetVocab: [
          {
            word: 'plunder',
            pos: 'v.',
            phonetic: '/ˈplʌn.dər/',
            definitionEn: 'To steal goods or resources from a place or person violently or through fraud.',
            translationUz: 'Talon-toroj qilmoq, o\'g\'irlamoq',
            sampleSentence: 'Hackers sought to plunder confidential financial records from the offshore server.',
            collocation: 'plunder assets',
            synonym: 'loot'
          },
          {
            word: 'impersonate',
            pos: 'v.',
            phonetic: '/ɪmˈpɜː.sən.eɪt/',
            definitionEn: 'To pretend to be another person or entity in order to deceive others.',
            translationUz: 'Boshqa shaxs nomidan harakat qilmoq, o\'zini ... qilib ko\'rsatmoq',
            sampleSentence: 'The phishing email attempted to impersonate customer service representatives from a commercial bank.',
            collocation: 'impersonate an official',
            synonym: 'mimic'
          },
          {
            word: 'harvest',
            pos: 'v.',
            phonetic: '/ˈhɑː.vɪst/',
            definitionEn: 'To collect or gather a large quantity of data or information systematically.',
            translationUz: 'To\'plamoq, yig\'ib olmoq (ma\'lumotlarni)',
            sampleSentence: 'Deceptive software was secretly engineered to harvest passwords and debit card numbers.',
            collocation: 'harvest user credentials',
            synonym: 'gather'
          },
          {
            word: 'exorbitant',
            pos: 'adj.',
            phonetic: '/ɪɡˈzɔː.bɪ.tənt/',
            definitionEn: 'Unreasonably high or excessive in cost, amount, or demand.',
            translationUz: 'Haddan tashqari yuqori, qimmat',
            sampleSentence: 'The extortionists demanded an exorbitant ransom of thirty Bitcoin to decrypt hospital patient files.',
            collocation: 'exorbitant fee',
            synonym: 'excessive'
          },
          {
            word: 'insidious',
            pos: 'adj.',
            phonetic: '/ɪnˈsɪd.i.əs/',
            definitionEn: 'Proceeding in a gradual, subtle way, but with extremely harmful effects.',
            translationUz: 'Yashirin, makkor, asta-sekin zarar yetkazuvchi',
            sampleSentence: 'Malware often infiltrates systems through insidious background downloads disguised as routine updates.',
            collocation: 'insidious threat',
            synonym: 'treacherous'
          },
          {
            word: 'vigilance',
            pos: 'n.',
            phonetic: '/ˈvɪdʒ.əl.əns/',
            definitionEn: 'The action or state of keeping careful watch for possible danger or difficulties.',
            translationUz: 'Hushyorlik, sergaklik',
            sampleSentence: 'Preventing digital fraud requires constant personal vigilance whenever clicking unfamiliar hyperlinks.',
            collocation: 'exercise vigilance',
            synonym: 'alertness'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u7-p2-q1',
            type: 'main-idea',
            question: 'What is the primary message of this reading on modern cybercrime?',
            options: [
              'Cybercrime is easy to eradicate simply by turning off computer monitors at night.',
              'Digital crimes pose grave financial and institutional hazards, requiring both system security and individual habits.',
              'Physical burglars have completely disappeared from every city worldwide.',
              'Hospitals are the only institutions ever targeted by malicious software.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqola kiberjinoyatchilikning jiddiy xavflarini va tizimli xavfsizlik bilan birga shaxsiy gigiyena va hushyorlik muhimligini uqtiradi.'
          },
          {
            id: 'rrw1-u7-p2-q2',
            type: 'detail',
            question: 'How do phishing attacks primarily ensnare unsuspecting victims?',
            options: [
              'By sending armed agents directly to the victim’s residence.',
              'By mimicking trustworthy institutions to coax victims into surrendering passwords.',
              'By intercepting international cargo ships at deep sea ports.',
              'By disabling electrical power grids across entire nations.'
            ],
            correctIndex: 1,
            explanationUz: 'Fishing hujumlari bank yoki tashkilotlar nomidan soxta xabarlar yuborib, odamlarni login va parollarni kiritishga aldaydi.'
          },
          {
            id: 'rrw1-u7-p2-q3',
            type: 'vocabulary',
            question: 'Which word serves as the best synonym for "exorbitant" as used in paragraph 2?',
            options: ['Modest', 'Unreasonable and excessive', 'Negotiable', 'Affordable'],
            correctIndex: 1,
            explanationUz: '"Exorbitant" so\'zi haddan tashqari yuqori, haddan ziyod ma\'nosini bildiradi.'
          },
          {
            id: 'rrw1-u7-p2-q4',
            type: 'inference',
            question: 'Why does identity theft often produce prolonged "bureaucratic nightmares"?',
            options: [
              'Victims must physically travel to every country where fraudulent transactions occurred.',
              'Repairing ruined credit scores and disproving fraudulent debts involves complex legal procedures.',
              'Banks automatically cancel all citizenship papers when credit cards are lost.',
              'Victims are permanently barred from using electronic devices.'
            ],
            correctIndex: 1,
            explanationUz: 'O\'g\'irlangan shaxsiyat nomidan olingan qarzlar va jinoyatlarni isbotlash va tozalash uzoq muddatli qonuniy jarayonlarni talab qiladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'problem-solution',
          title: 'Cybercrime Vulnerabilities and Protective Countermeasures',
          sections: [
            {
              heading: 'Primary Cyber Attack Vectors',
              points: [
                'Phishing: Social engineering impersonations harvesting private credentials',
                'Ransomware: Hostage encryption of crucial municipal and corporate databases',
                'Identity Theft: Creation of fraudulent credit cards and criminal records under victim names'
              ]
            },
            {
              heading: 'Individual Digital Hygiene Solutions',
              points: [
                'Multi-Factor Authentication (MFA) on all critical email and banking logins',
                'Lengthy, distinct passphrases managed via reliable encrypted vaults',
                'Refusing to click unsolicited links or download unverified attachments'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should companies pay ransomware extortionists if human lives (such as hospital patients) are directly threatened?',
          'What responsibilities should social media platforms bear when fraudulent accounts impersonate real people?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 8: Language & Literature
  // ==========================================
  {
    id: 'rrw1-u8',
    unitNumber: 8,
    title: 'Language & Literature',
    subjectArea: 'Sociolinguistics & World Literature',
    themeDescriptionUz: 'Global ingliz tili, yo\'qolib borayotgan tillar merosi va badiiy adabiyotning inson tafakkuriga ta\'siri.',
    passages: [
      {
        id: 'rrw1-u8-p1',
        passageNumber: 1,
        title: 'The Global Rise of English: Lingua Franca or Threat?',
        subtitle: 'Weighing international trade unity against the endangerment of indigenous linguistic diversity',
        themeCategory: 'Linguistics',
        level: 'B1',
        wordCount: 415,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why has English become the universal language of global business and science?',
          'What happens to a culture when its native tongue falls out of common use?'
        ],
        paragraphs: [
          'Today, more than 1.5 billion people worldwide speak English, making it the undeniable global lingua franca of the modern era. From international aviation corridors and diplomacy summits to cutting-edge scientific journals and internet code, English bridges communication across geographic and cultural frontiers that once seemed insurmountable.',
          'The historical momentum behind this linguistic supremacy began with British colonial expansion in the eighteenth and nineteenth centuries, subsequently amplified by the economic, military, and technological dominance of the United States throughout the twentieth century. For developing nations, widespread English proficiency is widely heralded as a crucial economic catalyst, granting ambitious citizens access to prestigious academic scholarships, global commerce, and international employment.',
          'Yet, this unprecedented dominance sparks fierce debates among sociolinguists. Critics contend that the relentless encroachment of English exerts a homogenizing pressure on global culture, gradually marginalizing indigenous dialects and local idioms. When youth prioritize foreign vocabulary over their ancestral mother tongue, intangible heritage—such as folklore, botanical wisdom, and unique philosophical frameworks—risks irreversible extinction.',
          'Linguistic scholars advocate for balanced multilingualism rather than linguistic monopoly. In an interconnected world, mastering a shared global tongue should never demand the sacrifice of one’s unique cultural heritage.'
        ],
        summaryUz: 'Ingliz tilining xalqaro lingua franca sifatida ommalashishi, uning iqtisodiy foydalari hamda mahalliy milliy tillar xilma-xilligiga ko\'rsatadigan ta\'siri tahlili.',
        targetVocab: [
          {
            word: 'insurmountable',
            pos: 'adj.',
            phonetic: '/ˌɪn.səˈmaʊn.tə.bəl/',
            definitionEn: 'Too great or difficult to be overcome or resolved.',
            translationUz: 'Yengib bo\'lmas, oshib bo\'lmas',
            sampleSentence: 'Language barriers that once seemed insurmountable dissolved with the adoption of a common trade language.',
            collocation: 'insurmountable challenge',
            synonym: 'unconquerable'
          },
          {
            word: 'supremacy',
            pos: 'n.',
            phonetic: '/suːˈprem.ə.si/',
            definitionEn: 'The state or condition of being superior to all others in authority, power, or status.',
            translationUz: 'Hukmronlik, ustunlik',
            sampleSentence: 'The technological supremacy of modern computer networks accelerated the spread of global languages.',
            collocation: 'linguistic supremacy',
            synonym: 'dominance'
          },
          {
            word: 'catalyst',
            pos: 'n.',
            phonetic: '/ˈkæt.əl.ɪst/',
            definitionEn: 'A person, thing, or event that precipitates rapid change or progress.',
            translationUz: 'Katalizator, jadallashtiruvchi omil',
            sampleSentence: 'Access to high-speed internet proved to be a decisive catalyst for rural educational reform.',
            collocation: 'economic catalyst',
            synonym: 'stimulant'
          },
          {
            word: 'encroachment',
            pos: 'n.',
            phonetic: '/ɪnˈkrəʊtʃ.mənt/',
            definitionEn: 'Intrusion on a person\'s territory, rights, or linguistic domains gradually and stealthily.',
            translationUz: 'Tajovuz, asta-sekin siqib chiqarish',
            sampleSentence: 'Scholars expressed concern over the continuous encroachment of foreign media into traditional domestic broadcasting.',
            collocation: 'gradual encroachment',
            synonym: 'intrusion'
          },
          {
            word: 'intangible',
            pos: 'adj.',
            phonetic: '/ɪnˈtæn.dʒə.bəl/',
            definitionEn: 'Unable to be touched or grasped; having no physical presence but carrying deep value.',
            translationUz: 'Nomoddiy, ma\'naviy',
            sampleSentence: 'Ancient legends and cultural proverbs represent the intangible wealth of civilization.',
            collocation: 'intangible heritage',
            synonym: 'abstract'
          },
          {
            word: 'monopoly',
            pos: 'n.',
            phonetic: '/məˈnɒp.əl.i/',
            definitionEn: 'Exclusive possession or control of the supply or trade in a commodity or service.',
            translationUz: 'Monopoliya, yakka hukmronlik',
            sampleSentence: 'No single tongue should hold a total monopoly over creative academic and artistic expression.',
            collocation: 'linguistic monopoly',
            synonym: 'exclusivity'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u8-p1-q1',
            type: 'main-idea',
            question: 'What central dilemma is highlighted in the text regarding global English?',
            options: [
              'Whether English should be replaced entirely by artificial programming code.',
              'The tension between international practical utility and the risk of eroding indigenous linguistic diversity.',
              'Why English words are grammatically impossible for children to pronounce.',
              'How airlines will transition to silent sign language for cockpit communications.'
            ],
            correctIndex: 1,
            explanationUz: 'Matn ingliz tilining xalqaro muloqotdagi foydalari va mahalliy tillar hamda madaniy xilma-xillikni asrash o\'rtasidagi muvozanatni tahlil qiladi.'
          },
          {
            id: 'rrw1-u8-p1-q2',
            type: 'detail',
            question: 'What historical factors fueled the international spread of English according to paragraph 2?',
            options: [
              'Ancient Roman legionary conquests in Africa.',
              'British colonial expansion followed by American economic and technological dominance.',
              'Mandatory United Nations edicts passed in the seventeenth century.',
              'A global lottery hosted by international publishing houses.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda Britaniya imperiyasining mustamlakalari va keyinchalik AQShning texnologik va iqtisodiy kuchi sabab qilib ko\'rsatilgan.'
          },
          {
            id: 'rrw1-u8-p1-q3',
            type: 'vocabulary',
            question: 'The term "intangible heritage" in paragraph 3 refers to:',
            options: [
              'Physical gold coins and mineral deposits.',
              'Non-physical cultural assets like folk stories, oral customs, and philosophical outlooks.',
              'Concrete monuments and historical marble bridges.',
              'Modern hardware routers and fiber-optic cables.'
            ],
            correctIndex: 1,
            explanationUz: '"Intangible heritage" - bu moddiy bo\'lmagan, lekin ulkan qimmatga ega bo\'lgan urf-odatlar, afsonalar va falsafiy dunyoqarashdir.'
          },
          {
            id: 'rrw1-u8-p1-q4',
            type: 'inference',
            question: 'What solution do linguistic scholars propose in the final paragraph?',
            options: [
              'Completely banning English education in all elementary schools.',
              'Cultivating balanced multilingualism where global proficiency coexists with mother-tongue preservation.',
              'Translating all scientific research into Latin.',
              'Restricting internet access to single-language territories.'
            ],
            correctIndex: 1,
            explanationUz: 'Olimlar global tilni o\'rganish bilan birga o\'z ona tilini e\'zozlaydigan ko\'ptillilikni (multilingualism) targ\'ib qilishadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'The Global English Phenomenon: Advantages vs Concerns',
          sections: [
            {
              heading: 'Global Communication Benefits',
              points: [
                'Unifies international science, civil aviation, and diplomatic summits',
                'Opens doors to global trade, scholarly grants, and international careers',
                'Overcomes historic geographic language barriers'
              ]
            },
            {
              heading: 'Sociolinguistic Concerns',
              points: [
                'Homogenizing pressure on distinct cultural traditions and idioms',
                'Risk of ancestral mother tongues and oral botanical knowledge falling into disuse',
                'Linguistic inequality between native and non-native speakers'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Can an individual adopt a global lingua franca without losing their native cultural identity?',
          'What strategies can schools implement to ensure students excel in international languages while mastering their native tongue?'
        ]
      },
      {
        id: 'rrw1-u8-p2',
        passageNumber: 2,
        title: 'Preserving the World\'s Endangered Languages',
        subtitle: 'Digital archiving, elder storytelling, and the race against linguistic extinction',
        themeCategory: 'Anthropology',
        level: 'B1',
        wordCount: 390,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'How many languages exist on Earth today, and how many are in danger of disappearing?',
          'Why is an endangered language compared to an irreplaceable library of human history?'
        ],
        paragraphs: [
          'Of the approximately seven thousand languages spoken across the globe today, linguists estimate that nearly half could vanish before the close of this century. Every two weeks, an ancient dialect dies alongside its last surviving native speaker. This silent catastrophe represents far more than the loss of arbitrary vocabulary; it constitutes the irreversible erasure of unique ways of perceiving the cosmos.',
          'Each language encapsulates centuries of indigenous ecological observations, medical insights, and communal mythologies. For instance, Amazonian languages contain highly nuanced taxonomies for rainforest medicinal flora that have no equivalent in modern European classifications. When such languages disappear, priceless scientific knowledge dissolves before modern pharmaceutical researchers can even document it.',
          'Linguistic extinction is frequently accelerated by political marginalization, mandatory assimilation policies, and urbanization that tempts rural youth to abandon their ancestral customs. In response, collaborative initiatives are mobilizing cutting-edge digital technologies to preserve disappearing speeches. Field researchers record high-fidelity audio of elderly storytellers, compiling interactive digital dictionaries and grammar repositories.',
          'Crucially, preservation must transcend mere academic archives. Revitalization programs—modeled on successful efforts with the Maori language in New Zealand and Welsh in the United Kingdom—demonstrate that when communities establish immersive language nests for toddlers, ancient tongues can be reawakened and flourish for generations.'
        ],
        summaryUz: 'Dunyodagi yo\'qolib borayotgan tillarni saqlab qolish, ulardagi bebaho ekologik va tibbiy bilimlarni hujjatlashtirish hamda yosh avlodga o\'rgatish borasidagi harakatlar.',
        targetVocab: [
          {
            word: 'catastrophe',
            pos: 'n.',
            phonetic: '/kəˈtæs.trə.fi/',
            definitionEn: 'An event causing great and often sudden damage or suffering; a disaster.',
            translationUz: 'Falokat, katta yo\'qotish',
            sampleSentence: 'The extinction of biodiversity and human languages represents an unfolding cultural catastrophe.',
            collocation: 'silent catastrophe',
            synonym: 'disaster'
          },
          {
            word: 'encapsulate',
            pos: 'v.',
            phonetic: '/ɪnˈkæp.sjə.leɪt/',
            definitionEn: 'To express the essential features of something succinctly; to enclose or contain.',
            translationUz: 'O\'zida mujassam etmoq, qamrab olmoq',
            sampleSentence: 'Traditional folk songs encapsulate the historical hardships and triumphs of an entire nation.',
            collocation: 'encapsulate wisdom',
            synonym: 'embody'
          },
          {
            word: 'taxonomy',
            pos: 'n.',
            phonetic: '/tækˈsɒn.ə.mi/',
            definitionEn: 'A scheme of classification, especially a hierarchical classification of organisms or concepts.',
            translationUz: 'Taksonomiya, tasniflash tizimi',
            sampleSentence: 'Indigenous botanists developed a sophisticated taxonomy for hundreds of medicinal forest herbs.',
            collocation: 'botanical taxonomy',
            synonym: 'classification'
          },
          {
            word: 'assimilation',
            pos: 'n.',
            phonetic: '/əˌsɪm.ɪˈleɪ.ʃən/',
            definitionEn: 'The process of becoming similar to a larger group or adopting the culture of others.',
            translationUz: 'Assimilyatsiya, o\'zlashib yo\'qolib ketish',
            sampleSentence: 'Forced cultural assimilation in historical boarding schools discouraged children from speaking their tribal tongues.',
            collocation: 'cultural assimilation',
            synonym: 'integration'
          },
          {
            word: 'repository',
            pos: 'n.',
            phonetic: '/rɪˈpɒz.ɪ.tər.i/',
            definitionEn: 'A central location, database, or archive where items or data are stored.',
            translationUz: 'Omborxona, xazina, ma\'lumotlar arxivi',
            sampleSentence: 'The national library established an open digital repository for audio recordings of rare dialects.',
            collocation: 'digital repository',
            synonym: 'archive'
          },
          {
            word: 'revitalization',
            pos: 'n.',
            phonetic: '/riːˌvaɪ.təl.aɪˈzeɪ.ʃən/',
            definitionEn: 'The action of imbuing something with new life, vitality, and vigor.',
            translationUz: 'Qayta jonlantirish, tiklash',
            sampleSentence: 'Community language revitalization programs inspired teenagers to compose rap songs in their native idiom.',
            collocation: 'language revitalization',
            synonym: 'resurgence'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u8-p2-q1',
            type: 'main-idea',
            question: 'What is the primary urgency emphasized in this passage?',
            options: [
              'English must be made mandatory in all rain-forest regions.',
              'Thousands of unique human languages risk rapid extinction, necessitating urgent archiving and community revitalization.',
              'Ancient dictionaries are too heavy to transport without helicopters.',
              'All modern languages should merge into one universal computer code.'
            ],
            correctIndex: 1,
            explanationUz: 'Matn minglab noyob tillar yo\'qolib ketish arafasida turgani va ularni saqlab qolish uchun zudlik bilan chora ko\'rish zarurligini uqtiradi.'
          },
          {
            id: 'rrw1-u8-p2-q2',
            type: 'detail',
            question: 'What unique knowledge can be lost when Amazonian languages vanish?',
            options: [
              'Secret recipes for making synthetic gasoline.',
              'Nuanced classifications and medicinal uses of rainforest plants unknown to modern medicine.',
              'Methods for constructing steel suspension bridges.',
              'Satellite telemetry calculation methods.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda Amazonka qabilalari tillarida o\'rmon shifobaxsh o\'simliklariga doir chuqur taksonomiyalar mavjudligi aytilgan.'
          },
          {
            id: 'rrw1-u8-p2-q3',
            type: 'vocabulary',
            question: 'Which word is the closest synonym for "repository" as used in paragraph 3?',
            options: ['Marketplace', 'Archive or storage center', 'Factory', 'Courtroom'],
            correctIndex: 1,
            explanationUz: '"Repository" so\'zi arxiv, saqlash ombori yoki ma\'lumotlar bazasi ma\'nosini anglatadi.'
          },
          {
            id: 'rrw1-u8-p2-q4',
            type: 'inference',
            question: 'Why are "language nests" for toddlers considered vital for true language preservation?',
            options: [
              'They isolate toddlers from contact with outside civilization permanently.',
              'They create a natural, fluent generation of speakers rather than leaving the tongue dead inside written books.',
              'They eliminate the need for parents to speak any words at home.',
              'They reduce school building construction budgets.'
            ],
            correctIndex: 1,
            explanationUz: 'Til faqat kitobda emas, balki bolalar unda erkin so\'zlashgandagina tirik qoladi; bog\'chalardagi muhit buni ta\'minlaydi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'problem-solution',
          title: 'Language Endangerment Drivers and Revitalization Strategies',
          sections: [
            {
              heading: 'Causes of Linguistic Decline',
              points: [
                'Aging speaker demographics without intergenerational transmission',
                'Historical forced cultural assimilation policies',
                'Rapid rural-to-urban migration driving youth toward majority tongues'
              ]
            },
            {
              heading: 'Modern Remedial Initiatives',
              points: [
                'High-fidelity digital audio archiving of elder oral histories',
                'Open-access searchable linguistic dictionaries and grammar apps',
                'Immersive early childhood language nests to nurture new native speakers'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should national governments provide taxpayer funding to save languages spoken by fewer than a hundred people?',
          'What role can smartphone apps and artificial intelligence play in keeping endangered dialects vibrant?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 9: Space & Exploration
  // ==========================================
  {
    id: 'rrw1-u9',
    unitNumber: 9,
    title: 'Space & Exploration',
    subjectArea: 'Astrophysics & Planetary Science',
    themeDescriptionUz: 'Yashash uchun yaroqli ekzosayyoralarni izlash, Oyga qaytish va insoniyatning koinotdagi kelajagi.',
    passages: [
      {
        id: 'rrw1-u9-p1',
        passageNumber: 1,
        title: 'The Search for Habitable Exoplanets',
        subtitle: 'How orbital telescopes scan distant stars for atmospheric biosignatures and alien oceans',
        themeCategory: 'Astronomy',
        level: 'B1',
        wordCount: 405,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Do you believe life exists on planets outside our solar system?',
          'What conditions are essential for a planet to sustain living organisms?'
        ],
        paragraphs: [
          'Until the mid-1990s, humanity had confirmed the existence of planets orbiting only one solitary star: our Sun. Today, thanks to revolutionary orbital observatories like NASA’s Kepler and the James Webb Space Telescope, astronomers have cataloged over five thousand exoplanets across our Milky Way galaxy, transforming ancient philosophical inquiries into rigorous empirical science.',
          'The ultimate goal of modern astrobiology is the discovery of an "Earth 2.0"—a rocky planet situated within its host star’s circumstellar habitable zone, colloquially dubbed the "Goldilocks Zone." In this orbital sweet spot, solar radiation is neither too scorching to vaporize surface water nor too frigid to freeze it into permanent ice sheets. Because liquid water is the indispensable solvent for organic chemistry as we know it, worlds within this zone represent prime targets.',
          'Detecting these distant worlds requires ingenious observation techniques. The transit method tracks the minuscule, periodic dimming of a star’s light as an orbiting planet traverses in front of it. By analyzing the starlight filtering through the exoplanet’s fragile atmosphere during transit, spectroscopes can decipher its chemical recipe, hunting for biosignatures such as oxygen, ozone, water vapor, and methane.',
          'While interstellar distances preclude human space travelers from journeying to these realms with current propulsion technology, uncovering conclusive proof of extraterrestrial biosignatures would profoundly alter humanity’s perception of its place in the cosmic tapestry.'
        ],
        summaryUz: 'Quyosh tizimidan tashqaridagi yashashga yaroqli ekzosayyoralar (Goldilocks hududi), orbital teleskoplar va atmosferadagi hayot alomatlari (biosignature) tahlili.',
        targetVocab: [
          {
            word: 'solitary',
            pos: 'adj.',
            phonetic: '/ˈsɒl.ɪ.tər.i/',
            definitionEn: 'Existing alone or single; isolated from others of its kind.',
            translationUz: 'Yolg\'iz, yakka',
            sampleSentence: 'Ancient observers believed our solar system occupied a solitary oasis in an otherwise empty cosmos.',
            collocation: 'solitary star',
            synonym: 'isolated'
          },
          {
            word: 'circumstellar',
            pos: 'adj.',
            phonetic: '/ˌsɜː.kəmˈstel.ər/',
            definitionEn: 'Surrounding or situated around an astronomical star.',
            translationUz: 'Yulduz atrofi bo\'ylab joylashgan',
            sampleSentence: 'Planetary formation takes place inside a circumstellar disk of swirling dust and gas.',
            collocation: 'circumstellar zone',
            synonym: 'orbital'
          },
          {
            word: 'colloquially',
            pos: 'adv.',
            phonetic: '/kəˈləʊ.kwi.ə.li/',
            definitionEn: 'Informally or in ordinary, familiar conversation rather than formal literary language.',
            translationUz: 'Ommaviy tilda, norasmiy tarzda',
            sampleSentence: 'The temperate orbital band is colloquially termed the Goldilocks Zone by astronomers.',
            collocation: 'colloquially known as',
            synonym: 'informally'
          },
          {
            word: 'indispensable',
            pos: 'adj.',
            phonetic: '/ˌɪn.dɪˈspen.sə.bəl/',
            definitionEn: 'Absolutely necessary or essential; unable to be done without.',
            translationUz: 'Zaruriy, ajralmas, o\'rnini bosib bo\'lmas',
            sampleSentence: 'Liquid water remains an indispensable prerequisite for the biochemistry of living cells.',
            collocation: 'indispensable element',
            synonym: 'essential'
          },
          {
            word: 'traverse',
            pos: 'v.',
            phonetic: '/trəˈvɜːs/',
            definitionEn: 'To travel across, over, or through an area or space.',
            translationUz: 'Kesib o\'tmoq, bo\'ylab harakatlanmoq',
            sampleSentence: 'Astronomers measure subtle light dips as a silhouette planet traverses the disk of its star.',
            collocation: 'traverse the star',
            synonym: 'cross'
          },
          {
            word: 'preclude',
            pos: 'v.',
            phonetic: '/prɪˈkluːd/',
            definitionEn: 'To prevent something from happening or make it impossible.',
            translationUz: 'To\'sqinlik qilmoq, imkonsiz qilmoq',
            sampleSentence: 'Immense cosmic distances currently preclude physical human voyages beyond our solar system.',
            collocation: 'preclude exploration',
            synonym: 'prevent'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u9-p1-q1',
            type: 'main-idea',
            question: 'What is the main focus of this article on exoplanet research?',
            options: [
              'How to construct warp-drive engines for personal space cruisers.',
              'The scientific methodologies and significance of searching for habitable worlds around other stars.',
              'Why Mars is the only celestial body in the universe containing minerals.',
              'The history of Greek myths about constellations.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqolada boshqa yulduzlar atrofidagi hayot mavjud bo\'lishi mumkin bo\'lgan sayyoralarni aniqlash usullari va uning ahamiyati yoritilgan.'
          },
          {
            id: 'rrw1-u9-p1-q2',
            type: 'detail',
            question: 'Why is the "Goldilocks Zone" deemed critical for life as we know it?',
            options: [
              'It contains vast fields of solid diamond asteroids.',
              'Temperatures allow liquid water to persist on the planetary surface.',
              'Gravity is completely absent in that zone.',
              'Solar radiation is strong enough to cook meat instantly.'
            ],
            correctIndex: 1,
            explanationUz: '"Goldilocks Zone"da harorat na juda issiq, na juda sovuq bo\'lib, suyuq suv mavjud bo\'lishi uchun ideal sharoit yaratadi.'
          },
          {
            id: 'rrw1-u9-p1-q3',
            type: 'vocabulary',
            question: 'In paragraph 2, the word "indispensable" means:',
            options: ['Expensive', 'Essential and non-negotiable', 'Temporary', 'Harmful'],
            correctIndex: 1,
            explanationUz: '"Indispensable" so\'zi mutlaqo zaruriy, ajralmas ma\'nosini anglatadi.'
          },
          {
            id: 'rrw1-u9-p1-q4',
            type: 'inference',
            question: 'How does atmospheric transit spectroscopy help astronomers find potential life?',
            options: [
              'It captures photographs of alien cities using ultraviolet film.',
              'It identifies chemical combinations like oxygen and methane in the atmosphere that biological processes generate.',
              'It listens to alien radio broadcasts transmitting music.',
              'It measures the weight of soil samples scooped by robotic probes.'
            ],
            correctIndex: 1,
            explanationUz: 'Spektroskopiya orqali atmosferadagi kislorod va metan kabi tirik organizmlar chiqaradigan gazlar (biosignatures) aniqlanadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Exoplanet Detection and Habitability Analysis',
          sections: [
            {
              heading: 'Observational Mechanism (Transit Method)',
              points: [
                'Exoplanet crosses host star, creating a micro-dip in measured brightness',
                'Starlight filters through upper planetary atmosphere',
                'Spectrographs split light into wavelength spectra revealing chemical absorption lines'
              ]
            },
            {
              heading: 'Habitability Criteria and Impacts',
              points: [
                'Orbital distance within the circumstellar Goldilocks Zone allows liquid water',
                'Detection of biosignature gases (oxygen, methane, ozone) indicates potential biology',
                'Transforms humanity\'s understanding of our rarity in the cosmos'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If scientists discover definitive biosignatures of microbial life on an exoplanet, how would society, religion, and philosophy react?',
          'Given pressing problems on Earth such as climate change, should nations continue funding deep-space astronomy?'
        ]
      },
      {
        id: 'rrw1-u9-p2',
        passageNumber: 2,
        title: 'Returning to the Moon: The Artemis Generation',
        subtitle: 'Establishing permanent lunar outposts, harvesting polar ice, and preparing for deep-space voyages',
        themeCategory: 'Space Technology',
        level: 'B1',
        wordCount: 410,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'When was the last time humans walked on the surface of the Moon?',
          'What valuable natural resources might be located on the lunar surface?'
        ],
        paragraphs: [
          'More than half a century has elapsed since Apollo 17 astronaut Gene Cernan left the last human footprints in lunar dust in December 1972. While the Apollo missions were celebrated geopolitical sprint victories of the Cold War, humanity’s imminent return under NASA’s Artemis program pursues a fundamentally different objective: not merely planting a flag and returning, but establishing a sustainable, enduring presence on the Moon.',
          'The linchpin of this modern lunar architecture is the South Pole. Unlike the equatorial landing sites visited by Apollo, the lunar South Pole features deep impact craters whose interiors have been shielded in eternal shadow for billions of years. Scientific orbiters confirmed that these frigid depressions conceal vast reservoirs of water ice. This ice is far more than drinking water for astronauts; when cracked electrochemically into hydrogen and oxygen, it becomes rocket propellant—the "fuel station" of the solar system.',
          'To support long-duration surface missions, space agencies are partnering with commercial aerospace firms to construct the Lunar Gateway—a mini-space station orbiting the Moon. Astronauts will test autonomous habitats, Closed-Loop life support systems, and radiation shielding. Learning to survive in this hostile, low-gravity environment will provide indispensable operational blueprints for humanity’s ultimate planetary leap: sending a crewed mission to Mars.',
          'The Moon is no longer a distant romantic muse in the night sky. In the twenty-first century, it represents the indispensable training proving ground for an interplanetary civilization.'
        ],
        summaryUz: 'Artemis dasturi orqali insoniyatning Oyga qaytishi, janubiy qutbdagi muz zahiralari, Lunar Gateway stansiyasi va Marsga parvozlar uchun tayyorgarlik.',
        targetVocab: [
          {
            word: 'imminent',
            pos: 'adj.',
            phonetic: '/ˈɪm.ɪ.nənt/',
            definitionEn: 'About to happen; occurring in the very near future.',
            translationUz: 'Kutilayotgan, yaqin orada sodir bo\'ladigan',
            sampleSentence: 'Engineers conducted final safety checks in anticipation of the imminent rocket launch.',
            collocation: 'imminent departure',
            synonym: 'impending'
          },
          {
            word: 'linchpin',
            pos: 'n.',
            phonetic: '/ˈlɪntʃ.pɪn/',
            definitionEn: 'A person or thing vital to an enterprise or organization; a central binding element.',
            translationUz: 'Asosiy tirgak, bosh tayanch',
            sampleSentence: 'The discovery of polar water ice serves as the economic linchpin of long-term lunar colonization.',
            collocation: 'linchpin of the strategy',
            synonym: 'keystone'
          },
          {
            word: 'reservoir',
            pos: 'n.',
            phonetic: '/ˈrez.ə.vwɑːr/',
            definitionEn: 'A large natural or artificial lake or supply used as a source of water or materials.',
            translationUz: 'Zahira, suv ombori',
            sampleSentence: 'Permanently shadowed craters safeguard immense reservoirs of frozen lunar water.',
            collocation: 'water reservoir',
            synonym: 'storehouse'
          },
          {
            word: 'propellant',
            pos: 'n.',
            phonetic: '/prəˈpel.ənt/',
            definitionEn: 'A chemical substance used to provide thrust or motive force in rockets.',
            translationUz: 'Raketa yoqilg\'isi, harakatlantiruvchi modda',
            sampleSentence: 'Splitting water into liquid oxygen and hydrogen yields high-efficiency rocket propellant.',
            collocation: 'rocket propellant',
            synonym: 'fuel'
          },
          {
            word: 'autonomous',
            pos: 'adj.',
            phonetic: '/ɔːˈtɒn.ə.məs/',
            definitionEn: 'Having the freedom or ability to act or function independently without external control.',
            translationUz: 'Avtonom, mustaqil ishlovchi',
            sampleSentence: 'Robotic rovers deployed autonomous navigation systems to survey hazardous craters.',
            collocation: 'autonomous system',
            synonym: 'self-governing'
          },
          {
            word: 'interplanetary',
            pos: 'adj.',
            phonetic: '/ˌɪn.təˈplæn.ɪ.tər.i/',
            definitionEn: 'Situated or traveling between different planets.',
            translationUz: 'Sayyoralararo',
            sampleSentence: 'Testing closed-loop life support on the Moon prepares humanity for interplanetary voyages to Mars.',
            collocation: 'interplanetary mission',
            synonym: 'cosmic'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u9-p2-q1',
            type: 'main-idea',
            question: 'How do the objectives of the Artemis program differ fundamentally from the Apollo missions?',
            options: [
              'Artemis intends only to take black-and-white photos of lunar stones.',
              'Artemis seeks to establish a lasting, sustainable human infrastructure and prepare for Mars, rather than a brief geopolitical visit.',
              'Artemis will use steam engines rather than modern liquid fuels.',
              'Artemis will abandon all international partnerships.'
            ],
            correctIndex: 1,
            explanationUz: 'Apollo shunchaki qisqa muddatli poyga bo\'lgan bo\'lsa, Artemis Oyda doimiy baza qurish va Marsga parvozga tayyorgarlik ko\'rishni maqsad qilgan.'
          },
          {
            id: 'rrw1-u9-p2-q2',
            type: 'detail',
            question: 'Why is the Moon’s South Pole considered uniquely valuable for exploration?',
            options: [
              'It has warm sandy beaches suitable for tourism.',
              'It houses permanently shadowed craters harboring substantial water ice reserves.',
              'It experiences no gravity whatsoever.',
              'It is closer to Earth than the lunar equator.'
            ],
            correctIndex: 1,
            explanationUz: 'Janubiy qutbdagi doimiy qorong\'u kraterlarda ulkan muz zahiralari mavjud bo\'lib, ulardan suv va yoqilg\'i olish mumkin.'
          },
          {
            id: 'rrw1-u9-p2-q3',
            type: 'vocabulary',
            question: 'Which word is the closest synonym for "linchpin" in paragraph 2?',
            options: ['Decorative accessory', 'Crucial central foundation', 'Minor complication', 'Unwanted baggage'],
            correctIndex: 1,
            explanationUz: '"Linchpin" - butun tizimning barqarorligini ta\'minlovchi bosh tayanch, asosiy omil demakdir.'
          },
          {
            id: 'rrw1-u9-p2-q4',
            type: 'inference',
            question: 'Why is producing rocket propellant directly on the Moon so critical for future Mars voyages?',
            options: [
              'Earth rockets are banned by international law from carrying fuel.',
              'Launching heavy fuel from Earth\'s deep gravity well is prohibitively expensive compared to producing it on the Moon.',
              'Lunar water tastes better than terrestrial tap water.',
              'Martian gravity repels fuel produced on Earth.'
            ],
            correctIndex: 1,
            explanationUz: 'Yoqilg\'ini Yerning kuchli gravitatsiyasidan ko\'tarib chiqish juda qimmatga tushadi; Oyda yoqilg\'i ishlab chiqarish parvozlarni ancha arzonlashtiradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'timeline',
          title: 'Chronology of Human Lunar Exploration and Future Vision',
          sections: [
            {
              heading: '1969–1972: Apollo Era',
              points: [
                'Cold War geopolitical space race focused on landing first',
                'Brief equatorial excursions collecting lunar soil samples',
                'Apollo 17 marks last human footprints for over 50 years'
              ]
            },
            {
              heading: '2020s–2030s: Artemis Infrastructure',
              points: [
                'Commercial partnerships constructing the orbital Lunar Gateway station',
                'Harvesting polar water ice for crew hydration and liquid rocket propellant',
                'Testing autonomous habitats and radiation protection'
              ]
            },
            {
              heading: 'Future Milestone: Mars Stepping Stone',
              points: [
                'Applying proven lunar survival protocols to crewed expeditions to Mars'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should private corporations be allowed to claim ownership of mineral and water ice resources on the Moon?',
          'What psychological challenges might astronauts encounter living inside an enclosed lunar base for a year?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 10: Sports & Fitness
  // ==========================================
  {
    id: 'rrw1-u10',
    unitNumber: 10,
    title: 'Sports & Fitness',
    subjectArea: 'Kinesiology & Performance Psychology',
    themeDescriptionUz: 'Sport psixologiyasi, ruhiy chidamlilik va zamonaviy sportdagi ilg\'or texnologiyalar.',
    passages: [
      {
        id: 'rrw1-u10-p1',
        passageNumber: 1,
        title: 'The Psychology of Peak Athletic Performance',
        subtitle: 'Unlocking the flow state, mental visualization, and emotional resilience under pressure',
        themeCategory: 'Sports Psychology',
        level: 'B1',
        wordCount: 400,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do world-class athletes sometimes fail during the most important moments of a game?',
          'What mental habits distinguish champions from merely talented athletes?'
        ],
        paragraphs: [
          'At the elite level of sports competition, physical conditioning and technical prowess are often nearly identical between contenders. Olympic sprinters may be separated by hundredths of a second, while Grand Slam tennis players execute strokes with comparable biomechanical precision. Consequently, sports scientists agree that the true differentiator between victory and defeat resides between the athlete\'s ears.',
          'One of the most intensely studied psychological phenomena is the "flow state," popularised by psychologist Mihaly Csikszentmihalyi. Athletes colloquially describe this mental zone as effortless immersion, wherein conscious self-doubt vanishes, perception of time slows down, and complex reflexes execute automatically. To enter this state reliably, competitors employ structured routines, controlled diaphragmatic breathing, and intense sensory visualization.',
          'Visualization, or mental rehearsal, activates the exact neural pathways in the brain’s motor cortex that fire during real physical movement. By vividly envisioning every micro-detail of an upcoming race or penalty kick, athletes inoculate themselves against debilitating anxiety and build supreme self-efficacy.',
          'Equally vital is emotional resilience—the ability to rebound swiftly from an egregious blunder without collapsing into despair. Champions reframe setbacks not as permanent indictments of their character, but as temporary tactical data points to inform their next adjustment.'
        ],
        summaryUz: 'Sportda g\'alaba va mag\'lubiyatni hal qiluvchi psixologik omillar: "flow" holati, vizualizatsiya va stress ostida ruhiy chidamlilik.',
        targetVocab: [
          {
            word: 'prowess',
            pos: 'n.',
            phonetic: '/ˈpraʊ.es/',
            definitionEn: 'Skill or expertise in a particular activity or field.',
            translationUz: 'Mahorat, ustun qobiliyat',
            sampleSentence: 'The gymnast demonstrated breathtaking technical prowess on the balance beam.',
            collocation: 'athletic prowess',
            synonym: 'mastery'
          },
          {
            word: 'immersion',
            pos: 'n.',
            phonetic: '/ɪˈmɜː.ʃən/',
            definitionEn: 'The state of being deeply involved or absorbed in an activity.',
            translationUz: 'To\'liq berilish, sho\'ng\'ish',
            sampleSentence: 'Complete mental immersion in the match silenced the roaring stadium crowd.',
            collocation: 'total immersion',
            synonym: 'absorption'
          },
          {
            word: 'inoculate',
            pos: 'v.',
            phonetic: '/ɪˈnɒk.jə.leɪt/',
            definitionEn: 'To protect someone against an adverse effect, influence, or anxiety beforehand.',
            translationUz: 'Himoyalamoq, oldindan immunitet hosil qilmoq',
            sampleSentence: 'Simulated high-pressure drills inoculate young athletes against tournament panic.',
            collocation: 'inoculate against stress',
            synonym: 'shield'
          },
          {
            word: 'debilitating',
            pos: 'adj.',
            phonetic: '/dɪˈbɪl.ɪ.teɪ.tɪŋ/',
            definitionEn: 'Tending to weaken something or sap energy and strength severely.',
            translationUz: 'Holsizlantiruvchi, kuchdan qoldiruvchi',
            sampleSentence: 'Debilitating stage fright prevented the runner from achieving her personal best.',
            collocation: 'debilitating anxiety',
            synonym: 'paralyzing'
          },
          {
            word: 'egregious',
            pos: 'adj.',
            phonetic: '/ɪˈɡriː.dʒəs/',
            definitionEn: 'Outstandingly bad, shocking, or flagrant.',
            translationUz: 'Qo\'pol, ko\'zga tashlanadigan (xato)',
            sampleSentence: 'Despite committing an egregious passing error early on, the goalkeeper maintained his composure.',
            collocation: 'egregious mistake',
            synonym: 'glaring'
          },
          {
            word: 'indictment',
            pos: 'n.',
            phonetic: '/ɪnˈdaɪt.mənt/',
            definitionEn: 'A sign or expression that shows that something is very bad or deserves blame.',
            translationUz: 'Ayblov, qoralovchi dalil',
            sampleSentence: 'A single lost set is not an indictment of your overall training regimen.',
            collocation: 'harsh indictment',
            synonym: 'condemnation'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u10-p1-q1',
            type: 'main-idea',
            question: 'What is the central argument of this passage regarding elite sports?',
            options: [
              'Athletes with taller heights will win every contest automatically.',
              'When physical conditioning is roughly equal, mental psychology and resilience determine championship outcomes.',
              'Elite athletes should avoid mental visualization because it damages the nervous system.',
              'Coaches should never teach tactical adjustments during matches.'
            ],
            correctIndex: 1,
            explanationUz: 'Jismoniy tayyorgarlik deyarli teng bo\'lgan holatda g\'olibni ruhiy tayyorgarlik va chidamlilik aniqlab beradi.'
          },
          {
            id: 'rrw1-u10-p1-q2',
            type: 'detail',
            question: 'How does mental rehearsal (visualization) affect the brain physically?',
            options: [
              'It causes the brain to shrink by 10 percent.',
              'It activates the identical motor cortex neural pathways used in physical movement.',
              'It puts athletes into a deep coma.',
              'It erases past memories of training drills.'
            ],
            correctIndex: 1,
            explanationUz: 'Miyadagi vizualizatsiya xuddi haqiqiy harakatdagi motor korteks neyron yo\'llarini faollashtiradi.'
          },
          {
            id: 'rrw1-u10-p1-q3',
            type: 'vocabulary',
            question: 'In paragraph 4, what does the word "egregious" mean?',
            options: ['Tiny and unnoticeable', 'Shockingly noticeable and bad', 'Hilarious', 'Deliberate'],
            correctIndex: 1,
            explanationUz: '"Egregious" so\'zi qo\'pol, ochiq-oydin yomon xatoni bildiradi.'
          },
          {
            id: 'rrw1-u10-p1-q4',
            type: 'inference',
            question: 'How do elite champions psychologically interpret their mistakes during a game?',
            options: [
              'As personal proof that they should quit professional athletics immediately.',
              'As actionable tactical data to guide their next correction rather than a character failure.',
              'As intentional sabotage by the referee.',
              'As illusions created by stadium floodlights.'
            ],
            correctIndex: 1,
            explanationUz: 'Chempionlar xatoni o\'z shaxsiyatiga ayblov deb emas, balki keyingi harakatni to\'g\'rilovchi foydali ma\'lumot sifatida qabul qiladilar.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'main-ideas-details',
          title: 'Psychological Pillars of Elite Athletic Performance',
          sections: [
            {
              heading: 'The Flow State',
              points: [
                'State of complete immersion where self-doubt vanishes',
                'Perception of time dilates; complex movements become automatic',
                'Accessed via breathing rituals and strict focus routines'
              ]
            },
            {
              heading: 'Neural Visualization',
              points: [
                'Mental simulation fires identical motor cortex circuits as real exercise',
                'Inoculates against anxiety in high-stakes moments',
                'Strengthens neuromuscular confidence'
              ]
            },
            {
              heading: 'Resilience and Reframing',
              points: [
                'Rapid recovery from mistakes without despair',
                'Mistakes treated as objective tactical feedback for next adjustments'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Can mental visualization techniques used by athletes be applied to public speaking or taking academic exams?',
          'Why do some athletes "choke" under immense pressure despite years of flawless training?'
        ]
      },
      {
        id: 'rrw1-u10-p2',
        passageNumber: 2,
        title: 'Technology in Modern Sports: Fair Edge or Unfair Advantage?',
        subtitle: 'Carbon-plated shoes, AI analytics, and the ethical boundaries of athletic gear',
        themeCategory: 'Sports Science',
        level: 'B1',
        wordCount: 405,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Should sports gear be restricted if it makes runners significantly faster?',
          'Where is the line between human athletic achievement and technological enhancement?'
        ],
        paragraphs: [
          'From high-tech swimsuits to carbon-fiber running shoes and algorithm-driven motion trackers, modern sports equipment has become an engineering battlefield. While technological advancements have undeniably lowered injury rates and elevated athletic performance, they have also ignited fierce debates regarding fairness and the true spirit of athletic rivalry.',
          'A prominent flashpoint occurred in marathon running with the introduction of carbon-plated super shoes. Featuring resilient energy-returning foam combined with rigid curved carbon plates, these shoes reduce the energetic cost of running by up to 4 percent. Within a few short seasons, historic marathon records that stood untouched for decades fell in rapid succession, prompting critics to question whether the record-breaker was the runner or the shoe manufacturer.',
          'Similarly, in professional football, tennis, and basketball, computer vision systems like Video Assistant Referee (VAR) and Hawk-Eye have virtually eliminated blatant refereeing blunders. Yet purists lament that microscopic video reviews disrupt the organic rhythm of the game, turning spontaneous stadium euphoria into prolonged, clinical committee deliberations.',
          'Sports governing bodies face an ongoing dilemma: how to embrace progressive engineering that protects athlete physiology without creating an uneven playing field where wealthy contenders simply purchase competitive supremacy.'
        ],
        summaryUz: 'Sportdagi texnologik inqilob: uglerod tolali poyabzallar, hakamlikdagi VAR tizimi va texnologik ustunlikning etikasi.',
        targetVocab: [
          {
            word: 'rivalry',
            pos: 'n.',
            phonetic: '/ˈraɪ.vəl.ri/',
            definitionEn: 'Competition for the same objective or for superiority in the same field.',
            translationUz: 'Raqobat, bellashuv',
            sampleSentence: 'The intense rivalry between the two tennis champions captivated global audiences.',
            collocation: 'athletic rivalry',
            synonym: 'competition'
          },
          {
            word: 'flashpoint',
            pos: 'n.',
            phonetic: '/ˈflæʃ.pɔɪnt/',
            definitionEn: 'A place, event, or time at which trouble, conflict, or debate suddenly breaks out.',
            translationUz: 'Bahs-munozara nuqtasi, portlash o\'chog\'i',
            sampleSentence: 'The adoption of carbon-fiber footwear became an international flashpoint among marathon officials.',
            collocation: 'political flashpoint',
            synonym: 'hotspot'
          },
          {
            word: 'succession',
            pos: 'n.',
            phonetic: '/səkˈseʃ.ən/',
            definitionEn: 'A number of people or things of a similar kind following one after another.',
            translationUz: 'Ketma-ketlik, qator',
            sampleSentence: 'World records were shattered in rapid succession following the rollout of new track spikes.',
            collocation: 'in rapid succession',
            synonym: 'sequence'
          },
          {
            word: 'blatant',
            pos: 'adj.',
            phonetic: '/ˈbleɪ.tənt/',
            definitionEn: 'Done openly and unashamedly; completely obvious and glaring.',
            translationUz: 'Ochiq-oydin, yaqqol',
            sampleSentence: 'Video reviews caught a blatant handball that the referee on the field had completely missed.',
            collocation: 'blatant error',
            synonym: 'flagrant'
          },
          {
            word: 'euphoria',
            pos: 'n.',
            phonetic: '/juːˈfɔː.ri.ə/',
            definitionEn: 'A feeling or state of intense excitement, jubilation, and happiness.',
            translationUz: 'Evforiya, jo\'shqin xursandchilik',
            sampleSentence: 'Stadium euphoria erupted as the underdog squad scored the winning goal in stoppage time.',
            collocation: 'moment of euphoria',
            synonym: 'elation'
          },
          {
            word: 'dilemma',
            pos: 'n.',
            phonetic: '/dɪˈlem.ə/',
            definitionEn: 'A situation in which a difficult choice has to be made between two undesirable alternatives.',
            translationUz: 'Qiyin tanlov, dilemma',
            sampleSentence: 'Regulators face a persistent dilemma between permitting innovation and preserving fairness.',
            collocation: 'ethical dilemma',
            synonym: 'predicament'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u10-p2-q1',
            type: 'main-idea',
            question: 'What is the primary ethical tension described in this article?',
            options: [
              'Whether athletes should be forced to play barefoot in all weather.',
              'Balancing technological enhancements that improve performance with fair competition and authentic athletic spirit.',
              'Why video monitors in stadiums consume excessive electrical energy.',
              'The danger of basketball players jumping too high.'
            ],
            correctIndex: 1,
            explanationUz: 'Matn texnologik kashfiyotlar natijalarni oshirgani bilan adolatli bellashuv ruhiga qanday ta\'sir qilishi borasidagi etik bahsni tahlil qiladi.'
          },
          {
            id: 'rrw1-u10-p2-q2',
            type: 'detail',
            question: 'How do carbon-plated marathon shoes enhance running efficiency?',
            options: [
              'By spraying cooling mist onto the runner\'s ankles.',
              'By utilizing energetic foam and rigid carbon plates that cut energy expenditure by up to 4 percent.',
              'By connecting to internet satellite navigation to choose shorter routes.',
              'By releasing small helium bubbles into the air.'
            ],
            correctIndex: 1,
            explanationUz: 'Maxsus elastik ko\'pik va uglerod plastinka yugurishda energiyani 4% gacha tejashga yordam beradi.'
          },
          {
            id: 'rrw1-u10-p2-q3',
            type: 'vocabulary',
            question: 'Which word is the best antonym for "blatant" as used in paragraph 3?',
            options: ['Subtle or concealed', 'Loud', 'Illegal', 'Deliberate'],
            correctIndex: 0,
            explanationUz: '"Blatant" so\'zi ochiq-oydin, yaqqol degani; uning teskarisi "subtle" (sezilmas, yashirin) hisoblanadi.'
          },
          {
            id: 'rrw1-u10-p2-q4',
            type: 'inference',
            question: 'Why do sports purists criticize technologies like VAR in football?',
            options: [
              'They believe referees should be permitted to take bribes.',
              'Prolonged video deliberations interrupt the game’s emotional flow and natural excitement.',
              'Television screens make the stadium look visually unattractive.',
              'The cameras make the players run slower.'
            ],
            correctIndex: 1,
            explanationUz: 'Uzoq davom etadigan video tekshiruvlar o\'yinning jonli ritmini buzishi va gollardan keyingi xursandchilikni so\'ndirishi tanqid qilinadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Sports Technology: Enhancements vs Critiques',
          sections: [
            {
              heading: 'Technological Advancements',
              points: [
                'Carbon-plated shoes improve energy return and reduce muscle fatigue',
                'VAR and Hawk-Eye eliminate decisive human referee errors',
                'Advanced materials reduce concussion and ligament trauma'
              ]
            },
            {
              heading: 'Ethical & Aesthetic Concerns',
              points: [
                'Distorts historical record comparisons across athletic eras',
                'Financial inequality: wealthy teams and athletes afford superior gear',
                'Stoppages for microscopic video review diminish spontaneous excitement'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If a shoe allows a marathoner to run 4% faster, should world records set with that shoe count alongside records set decades ago in plain shoes?',
          'Would you prefer instant, imperfect human referee decisions or mathematically flawless decisions that take 3 minutes to review?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 11: People & Opinions
  // ==========================================
  {
    id: 'rrw1-u11',
    unitNumber: 11,
    title: 'People & Opinions',
    subjectArea: 'Sociology & Public Discourse',
    themeDescriptionUz: 'Axborot oshkor qiluvchilar (whistleblowers), ijtimoiy tarmoq influencerlari va jamoatchilik fikrining shakllanishi.',
    passages: [
      {
        id: 'rrw1-u11-p1',
        passageNumber: 1,
        title: 'Whistleblowers: Courageous Guardians or Disloyal Actors?',
        subtitle: 'Examining the moral dilemmas, personal perils, and legal protections of insiders who expose corruption',
        themeCategory: 'Ethics',
        level: 'B1',
        wordCount: 410,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What would you do if you discovered that your employer was breaking the law or endangering the public?',
          'Why do whistleblowers often face severe retaliation after speaking out?'
        ],
        paragraphs: [
          'Throughout modern history, many of the most egregious abuses of institutional power—ranging from corporate financial fraud and environmental dumping to governmental surveillance—were brought to public light not by official audits, but by solitary insiders known as whistleblowers. These individuals risk their careers, personal reputations, and even freedom to expose wrongdoing.',
          'The moral dilemma confronting a prospective whistleblower is acutely agonizing. On one hand, employees enter contracts bound by loyalty and confidentiality toward their organization. On the other hand, an individual possesses a transcendent ethical duty toward the safety, health, and democratic rights of the broader public. When an organization stubbornly suppresses internal complaints, external disclosure to journalists or law enforcement becomes the only viable path to reform.',
          'Despite statutory protections such as the Whistleblower Protection Act in the United States and similar European directives, the personal repercussions for truth-tellers remain severe. Whistleblowers frequently encounter blacklisting by industry peers, retaliatory lawsuits, intense social ostracism, and devastating financial ruin.',
          'Ultimately, societies that cherish transparency must fortify legal defenses for those who blow the whistle. Without individuals brave enough to puncture organizational secrecy, institutional malfeasance would flourish unchecked in the dark.'
        ],
        summaryUz: 'Kompaniya yoki davlat idoralaridagi yashirin qonunbuzarlik va korrupsiyani fosh qiluvchi shaxslar (whistleblowers) ning axloqiy tanlovi va xavflari.',
        targetVocab: [
          {
            word: 'solitary',
            pos: 'adj.',
            phonetic: '/ˈsɒl.ɪ.tər.i/',
            definitionEn: 'Done or existing alone without companion or support.',
            translationUz: 'Yakka, yolg\'iz',
            sampleSentence: 'A solitary whistleblower took on the multinational corporation to protect public drinking water.',
            collocation: 'solitary figure',
            synonym: 'lone'
          },
          {
            word: 'agonizing',
            pos: 'adj.',
            phonetic: '/ˈæɡ.ə.naɪ.zɪŋ/',
            definitionEn: 'Causing great physical, mental, or emotional pain and anguish.',
            translationUz: 'Azobli, qiynoqli',
            sampleSentence: 'She spent agonizing weeks deciding whether to leak the concealed safety test reports.',
            collocation: 'agonizing decision',
            synonym: 'painful'
          },
          {
            word: 'transcendent',
            pos: 'adj.',
            phonetic: '/trænˈsen.dənt/',
            definitionEn: 'Surpassing ordinary limits; superior or supreme in importance.',
            translationUz: 'Ustun, oliy darajadagi',
            sampleSentence: 'Public health constitutes a transcendent moral duty that overrides corporate secrecy agreements.',
            collocation: 'transcendent obligation',
            synonym: 'paramount'
          },
          {
            word: 'ostracism',
            pos: 'n.',
            phonetic: '/ˈɒs.trə.sɪ.zəm/',
            definitionEn: 'Exclusion from a society, professional group, or social community.',
            translationUz: 'Jamiyatdan chetlatish, boykot qilish',
            sampleSentence: 'After uncovering the accounting irregularities, the auditor experienced cold ostracism from former colleagues.',
            collocation: 'social ostracism',
            synonym: 'exclusion'
          },
          {
            word: 'fortify',
            pos: 'v.',
            phonetic: '/ˈfɔː.tɪ.faɪ/',
            definitionEn: 'To strengthen or reinforce something against attack or vulnerability.',
            translationUz: 'Mustahkamlamoq, kuchaytirmoq',
            sampleSentence: 'Legislators voted to fortify statutory protections for government whistleblowers.',
            collocation: 'fortify defenses',
            synonym: 'strengthen'
          },
          {
            word: 'malfeasance',
            pos: 'n.',
            phonetic: '/mælˈfiː.zəns/',
            definitionEn: 'Wrongdoing or misconduct, especially by a public official or corporate executive.',
            translationUz: 'Mansabni suiiste\'mol qilish, noqonuniy xatti-harakat',
            sampleSentence: 'Independent journalists investigated corporate malfeasance involving illegal toxic waste dumping.',
            collocation: 'corporate malfeasance',
            synonym: 'wrongdoing'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u11-p1-q1',
            type: 'main-idea',
            question: 'What is the primary message of this passage regarding whistleblowers?',
            options: [
              'All corporate workers should be banned from speaking to journalists under penalty of fines.',
              'Whistleblowers play a critical role in safeguarding public integrity, yet face severe personal peril and need stronger legal shielding.',
              'Whistleblowing is only permissible if the individual receives a large cash reward.',
              'Companies never commit financial malfeasance in modern economies.'
            ],
            correctIndex: 1,
            explanationUz: 'Maqolada korrupsiya va qonunbuzarlikni fosh qiluvchilar jamiyat uchun juda muhimligi, lekin ular duch keladigan xavflar sababli qonuniy himoya zarurligi uqtiriladi.'
          },
          {
            id: 'rrw1-u11-p1-q2',
            type: 'detail',
            question: 'According to paragraph 2, what creates the agonizing moral dilemma for insiders?',
            options: [
              'Deciding what color uniform to wear to court.',
              'The conflict between professional loyalty to an employer and a transcendent ethical duty toward public welfare.',
              'Choosing between typing reports on a laptop or with a pen.',
              'Calculating travel expenses to foreign embassies.'
            ],
            correctIndex: 1,
            explanationUz: 'Xodim tashkilotga bo\'lgan sadoqat bilan keng jamoatchilik manfaati va xavfsizligi oldidagi oliy axloqiy burch o\'rtasida qoladi.'
          },
          {
            id: 'rrw1-u11-p1-q3',
            type: 'vocabulary',
            question: 'The word "ostracism" in paragraph 3 most nearly refers to:',
            options: ['Promotion to manager', 'Deliberate exclusion and cold isolation by peers', 'Financial bonuses', 'Medical treatment'],
            correctIndex: 1,
            explanationUz: '"Ostracism" so\'zi hamkasblar yoki jamoa tomonidan shaxsni chetlatish, unga nisbatan sovuq munosabatda bo\'lishni anglatadi.'
          },
          {
            id: 'rrw1-u11-p1-q4',
            type: 'inference',
            question: 'What is likely to occur in societies where whistleblowers receive no genuine legal protection?',
            options: [
              'Corruption and dangerous practices will remain buried and thrive without consequence.',
              'All citizens will automatically become honest.',
              'Newspapers will have too many stories to print.',
              'Businesses will double their profits lawfully.'
            ],
            correctIndex: 0,
            explanationUz: 'Agar himoya bo\'lmasa, xodimlar gapirishdan qo\'rqadi va noqonuniy ishlar jazosiz qolib gullab-yashnaydi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'problem-solution',
          title: 'Whistleblower Vulnerabilities and Democratic Safeguards',
          sections: [
            {
              heading: 'Perils Confronted by Whistleblowers',
              points: [
                'Retaliatory firings and industry blacklisting destroying livelihoods',
                'Aggressive corporate lawsuits demanding punitive damages',
                'Severe psychological stress and social isolation from peers'
              ]
            },
            {
              heading: 'Societal and Legal Remedies',
              points: [
                'Robust whistleblower protection statutes shielding against termination',
                'Confidential, encrypted reporting hotlines audited by independent bodies',
                'Public recognition of ethical disclosure as vital democratic service'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Is an employee ever morally justified in breaking a legal non-disclosure agreement (NDA)?',
          'Should the public view whistleblowers as courageous heroes or corporate traitors?'
        ]
      },
      {
        id: 'rrw1-u11-p2',
        passageNumber: 2,
        title: 'The Influencer Economy: Authenticity vs Monetization',
        subtitle: 'Behind the filtered perfection: algorithmic monetization, parasocial intimacy, and youth consumerism',
        themeCategory: 'Media Studies',
        level: 'B1',
        wordCount: 410,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Do you follow social media influencers, and have you ever bought a product because they endorsed it?',
          'How authentic is the lifestyle displayed on video-sharing platforms?'
        ],
        paragraphs: [
          'Over the past decade, social media has dismantled the traditional monopoly of television networks and glossy fashion magazines. In their place has emerged the influencer economy—a multi-billion-dollar ecosystem where everyday content creators monetize their personal lives, hobbies, and aesthetic tastes directly to millions of dedicated followers.',
          'The currency that propels this economy is perceived authenticity. Unlike polished celebrity advertisements of the past, social media creators cultivate what sociologists call "parasocial relationships"—one-sided psychological bonds where followers experience an illusion of genuine friendship and intimate familiarity. When an influencer casually recommends a skincare serum or dietary supplement from their bedroom, audiences perceive the pitch as organic counsel from a trusted confidant rather than a paid corporate commercial.',
          'However, the imperative to continually monetize creates profound ethical tensions. Behind carefully staged photographs and breezy captions lie lucrative sponsorship contracts, undisclosed brand freebies, and opaque algorithms that prioritize viral controversy over truth. Young viewers, struggling with self-esteem, can internalize unrealistic benchmarks of physical beauty, wealth, and effortless leisure.',
          'As regulatory bodies mandate clearer labeling of sponsored content, audiences must develop media literacy. Discerning the boundary between authentic human connection and engineered salesmanship is vital in our hyper-commercialized digital landscape.'
        ],
        summaryUz: 'Ijtimoiy tarmoqlardagi blogerlar iqtisodiyoti, soxta samimiylik, "parasosial" munosabatlar va yoshlarning iste\'mol odatlariga ta\'siri.',
        targetVocab: [
          {
            word: 'propel',
            pos: 'v.',
            phonetic: '/prəˈpel/',
            definitionEn: 'To drive, push, or cause someone or something to move forward.',
            translationUz: 'Harakatlantirmoq, olg\'a surmoq',
            sampleSentence: 'Engaging storytelling helped propel the travel influencer to international stardom.',
            collocation: 'propel growth',
            synonym: 'drive'
          },
          {
            word: 'parasocial',
            pos: 'adj.',
            phonetic: '/ˌpær.əˈsəʊ.ʃəl/',
            definitionEn: 'Characterized by a one-sided relationship experienced by a member of an audience for a media persona.',
            translationUz: 'Bir tomonlama (auditoriya va bloger o\'rtasidagi xayoliy aloqa)',
            sampleSentence: 'Fans often develop strong parasocial attachments to podcasters they listen to daily.',
            collocation: 'parasocial bond',
            synonym: 'one-sided'
          },
          {
            word: 'confidant',
            pos: 'n.',
            phonetic: '/ˈkɒn.fɪ.dænt/',
            definitionEn: 'A person with whom one shares a secret or private matter, trusting them not to repeat it.',
            translationUz: 'Sirdosh, yaqin ishonchli do\'st',
            sampleSentence: 'Followers mistakenly view their favorite video creator as an intimate personal confidant.',
            collocation: 'trusted confidant',
            synonym: 'companion'
          },
          {
            word: 'opaque',
            pos: 'adj.',
            phonetic: '/əʊˈpeɪk/',
            definitionEn: 'Not transparent; difficult to understand or see through.',
            translationUz: 'Shaffof bo\'lmagan, tushunarsiz',
            sampleSentence: 'Recommendation algorithms remain opaque, keeping consumers unaware of how content is promoted.',
            collocation: 'opaque system',
            synonym: 'obscure'
          },
          {
            word: 'benchmark',
            pos: 'n.',
            phonetic: '/ˈbentʃ.mɑːk/',
            definitionEn: 'A standard or point of reference against which things may be compared or assessed.',
            translationUz: 'Mezon, andoza, taqqoslash standarti',
            sampleSentence: 'Heavily edited vacation images establish unrealistic financial benchmarks for teenage followers.',
            collocation: 'standard benchmark',
            synonym: 'criterion'
          },
          {
            word: 'discerning',
            pos: 'adj.',
            phonetic: '/dɪˈsɜː.nɪŋ/',
            definitionEn: 'Having or showing good judgment and acute understanding.',
            translationUz: 'Fahm-farosatli, ajrata oladigan',
            sampleSentence: 'Discerning social media users verify sponsored product claims before making expensive purchases.',
            collocation: 'discerning consumer',
            synonym: 'perceptive'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u11-p2-q1',
            type: 'main-idea',
            question: 'What is the core dynamic powering the influencer economy according to the passage?',
            options: [
              'Government subsidies paid to anyone who owns a video camera.',
              'The monetized perception of authenticity and one-sided parasocial intimacy with followers.',
              'The total disappearance of all traditional clothing and cosmetic manufacturers.',
              'A global law banning printed magazines.'
            ],
            correctIndex: 1,
            explanationUz: 'Blogerlar iqtisodiyoti ortida muxlislar bilan samimiy do\'stona munosabat (parasosial) taassurotini uyg\'otish va buni reklama pullariga aylantirish yotadi.'
          },
          {
            id: 'rrw1-u11-p2-q2',
            type: 'detail',
            question: 'What term do sociologists use to describe a one-sided emotional bond between a viewer and media figure?',
            options: ['Bilateral treaty', 'Parasocial relationship', 'Monopolistic merger', 'Quantum entanglement'],
            correctIndex: 1,
            explanationUz: 'Matn 2-paragrafida bir tomonlama bu psixologik bog\'lanish "parasocial relationship" deb atalishi ko\'rsatilgan.'
          },
          {
            id: 'rrw1-u11-p2-q3',
            type: 'vocabulary',
            question: 'In paragraph 3, what does the word "opaque" describe regarding algorithms?',
            options: ['Clear and transparent', 'Unclear and secretive', 'Inexpensive', 'Fragile'],
            correctIndex: 1,
            explanationUz: '"Opaque" so\'zi shaffof bo\'lmagan, ko\'rinmas va tushunarsiz degan ma\'noni bildiradi.'
          },
          {
            id: 'rrw1-u11-p2-q4',
            type: 'inference',
            question: 'Why do regulatory bodies now mandate explicit hashtags like #ad or #sponsored?',
            options: [
              'To ensure influencers pay higher electrical bills.',
              'To protect consumers by making commercial product placements unmistakably obvious.',
              'To force influencers to delete their accounts.',
              'To reduce the total number of followers on video apps.'
            ],
            correctIndex: 1,
            explanationUz: 'Xaridorlar qaysi tavsiya shaxsiy fikr va qaysi biri pul to\'langan reklama ekanligini aniq ajrata olishlari uchun qonunlar joriy etilmoqda.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Mechanisms and Consequences of the Influencer Economy',
          sections: [
            {
              heading: 'Economic Drivers',
              points: [
                'Perceived authenticity creates high trust and parasocial bonds',
                'Casual bedroom settings disguise multi-million corporate product placements',
                'Algorithms boost sensational content to maximize viewer retention'
              ]
            },
            {
              heading: 'Societal & Consumer Impacts',
              points: [
                'Adolescents absorb distorted standards of beauty and material wealth',
                'Erosion of trust when covert sponsorships are unmasked',
                'Rising demand for critical digital media literacy education'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should influencers be held legally liable if a product or financial asset they promote turns out to be fraudulent?',
          'Does following influencers inspire self-improvement or foster feelings of inadequacy among teenagers?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 12: Business & Economics
  // ==========================================
  {
    id: 'rrw1-u12',
    unitNumber: 12,
    title: 'Business & Economics',
    subjectArea: 'Development Economics & Sustainable Commerce',
    themeDescriptionUz: 'Mikromoliyalashtirish orqali qashshoqlikni yengish, aylanma iqtisodiyot (Circular Economy) va barqaror biznes.',
    passages: [
      {
        id: 'rrw1-u12-p1',
        passageNumber: 1,
        title: 'Microfinance: Banking for the Unbanked',
        subtitle: 'How tiny loans, peer collateral, and Grameen banking uplift marginalized entrepreneurs worldwide',
        themeCategory: 'Development Economics',
        level: 'B1',
        wordCount: 420,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do traditional commercial banks refuse to give loans to very poor individuals?',
          'How can a small loan of $50 transform a family’s economic future?'
        ],
        paragraphs: [
          'For centuries, traditional commercial banking operated on a rigid premise: individuals without physical collateral, documented credit scores, or formal employment were deemed uncreditworthy. Consequently, billions of impoverished people were left at the mercy of predatory informal moneylenders charging extortionate interest rates that trapped entire generations in inescapable debt cycles.',
          'In the 1970s, Bangladeshi economist Muhammad Yunus challenged this conventional orthodoxy by launching the Grameen Bank. Yunus recognized that the poor possess immense entrepreneurial drive but lack the modest working capital needed to purchase basic tools—such as sewing machines, livestock, or bulk wholesale inventory. Instead of physical assets, Grameen pioneered social collateral: borrowers form small solidarity groups that meet weekly, encouraging one another to repay on schedule.',
          'Remarkably, over 95 percent of microfinance borrowers are women, who statistically reinvest a far greater portion of earnings into family nutrition, healthcare, and children’s education. Repayment rates routinely exceed 97 percent, outperforming the credit portfolios of many prestigious Wall Street investment firms.',
          'While microfinance is not a solitary panacea for global poverty—it must be complemented by public infrastructure, healthcare, and formal schooling—it has proven that treating the impoverished with dignifying trust can ignite powerful grassroots economic revolutions.'
        ],
        summaryUz: 'Muhammad Yunus tomonidan yaratilgan mikromoliya (Grameen Bank) tizimi, ijtimoiy kafolat orqali kambag\'allikka qarshi kurash va ayollarning tadbirkorlik imkoniyatlari.',
        targetVocab: [
          {
            word: 'collateral',
            pos: 'n.',
            phonetic: '/kəˈlæt.ər.əl/',
            definitionEn: 'Property or other assets that a borrower offers a lender to secure a loan.',
            translationUz: 'Garov, ta\'minot mulki',
            sampleSentence: 'Without land or houses to offer as collateral, rural artisans were denied commercial credit.',
            collocation: 'pledge collateral',
            synonym: 'security'
          },
          {
            word: 'predatory',
            pos: 'adj.',
            phonetic: '/ˈpred.ə.tər.i/',
            definitionEn: 'Seeking to exploit or take ruthless advantage of other vulnerable people.',
            translationUz: 'Yirtqichona, sudxo\'rlik qiluvchi, ekspluatatsion',
            sampleSentence: 'Predatory moneylenders charged interest rates exceeding 100 percent per annum.',
            collocation: 'predatory lending',
            synonym: 'exploitative'
          },
          {
            word: 'orthodoxy',
            pos: 'n.',
            phonetic: '/ˈɔː.θə.dɒk.si/',
            definitionEn: 'Authorized or generally accepted theory, doctrine, or practice.',
            translationUz: 'Qabul qilingan odatiy qarash, qat\'iy dogma',
            sampleSentence: 'Yunus defied the established economic orthodoxy that considered the poor too risky to lend to.',
            collocation: 'conventional orthodoxy',
            synonym: 'doctrine'
          },
          {
            word: 'solidarity',
            pos: 'n.',
            phonetic: '/ˌsɒl.ɪˈdær.ə.ti/',
            definitionEn: 'Unity or agreement of feeling or action, especially among individuals with a common interest.',
            translationUz: 'Hamtadabirlik, birdamlik',
            sampleSentence: 'Borrowers rely on group solidarity to support members during unexpected family illnesses.',
            collocation: 'group solidarity',
            synonym: 'unity'
          },
          {
            word: 'panacea',
            pos: 'n.',
            phonetic: '/ˌpæn.əˈsiː.ə/',
            definitionEn: 'A solution or remedy for all difficulties or diseases; a universal cure.',
            translationUz: 'Barcha dardlarga davo, universal chora',
            sampleSentence: 'Experts emphasize that small business loans are not a panacea for severe structural poverty.',
            collocation: 'universal panacea',
            synonym: 'cure-all'
          },
          {
            word: 'grassroots',
            pos: 'adj.',
            phonetic: '/ˈɡrɑːs.ruːts/',
            definitionEn: 'Originating from the ordinary people regarded as the fundamental basis of an organization or movement.',
            translationUz: 'Xalqchil, tub quyi qatlamdan boshlangan',
            sampleSentence: 'The grassroots cooperative expanded from one village into a national financial institution.',
            collocation: 'grassroots movement',
            synonym: 'community-based'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u12-p1-q1',
            type: 'main-idea',
            question: 'What is the primary contribution of microfinance as described in the text?',
            options: [
              'It provides billion-dollar loans to multinational aviation corporations.',
              'It unlocks economic independence for the poor by replacing physical collateral with trust and peer solidarity.',
              'It eliminates the need for any schools or hospitals in developing nations.',
              'It forces borrowers to move to major capital cities.'
            ],
            correctIndex: 1,
            explanationUz: 'Mikromoliyalashtirish oddiy odamlarga garovsiz, o\'zaro ishonch va jamoaviy birdamlik asosida kichik kreditlar berib, iqtisodiy erkinlikka erishishga ko\'maklashadi.'
          },
          {
            id: 'rrw1-u12-p1-q2',
            type: 'detail',
            question: 'Why does the Grameen Bank model focus predominantly on female borrowers?',
            options: [
              'Women are legally forbidden from opening regular bank accounts in all Asian countries.',
              'Women statistically invest a much higher share of income into family nourishment, health, and children’s schooling.',
              'Male applicants refuse to sign written contracts.',
              'Women do not require repayment receipts.'
            ],
            correctIndex: 1,
            explanationUz: 'Tadqiqotlar shuni ko\'rsatadiki, ayollar olingan daromadning ancha ko\'proq qismini farzandlar ta\'limi, oziq-ovqati va sog\'lig\'iga sarflaydilar.'
          },
          {
            id: 'rrw1-u12-p1-q3',
            type: 'vocabulary',
            question: 'Which word serves as the closest synonym for "panacea" in paragraph 4?',
            options: ['Problematic tax', 'Cure-all or universal remedy', 'Legal contract', 'Loan default'],
            correctIndex: 1,
            explanationUz: '"Panacea" - barcha muammolarni bir zumda hal qiluvchi mo\'jizaviy davo (cure-all) ma\'nosini anglatadi.'
          },
          {
            id: 'rrw1-u12-p1-q4',
            type: 'inference',
            question: 'Why do repayment rates for microfinance groups often exceed 97 percent?',
            options: [
              'Borrowers are threatened with immediate physical imprisonment by armed police.',
              'Peer support and social encouragement create immense mutual responsibility among group members.',
              'The bank waives repayment if the borrower simply forgets.',
              'Commercial Wall Street firms pay off the loans automatically.'
            ],
            correctIndex: 1,
            explanationUz: 'Kichik guruhdagi o\'zaro ijtimoiy javobgarlik va obro\' sababli qarz qaytarish ko\'rsatkichi 97 foizdan ham oshadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Traditional Commercial Banking vs Grameen Microfinance',
          sections: [
            {
              heading: 'Traditional Commercial Banking',
              points: [
                'Requires documented physical collateral (land deeds, homes)',
                'Favors wealthy borrowers and established corporations',
                'Excludes low-income earners, pushing them to predatory moneylenders'
              ]
            },
            {
              heading: 'Grameen Microfinance Model',
              points: [
                'Substitutes physical collateral with peer group social solidarity',
                'Focuses on women entrepreneurs to uplift household education and health',
                'High repayment rates exceeding 97% through weekly accountability'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Can microfinance principles be applied to help underprivileged youth launch technology startups in developed economies?',
          'What happens when commercial for-profit lenders enter the microcredit market and raise interest rates?'
        ]
      },
      {
        id: 'rrw1-u12-p2',
        passageNumber: 2,
        title: 'The Circular Economy: Rethinking Waste and Consumption',
        subtitle: 'Shifting from the extractive "take-make-waste" pipeline to regenerative industrial ecosystems',
        themeCategory: 'Sustainable Business',
        level: 'B1',
        wordCount: 415,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What happens to a smartphone after a user discards it for a newer model?',
          'How can industrial manufacturing imitate natural ecosystems where waste does not exist?'
        ],
        paragraphs: [
          'Since the Industrial Revolution, the global economy has functioned along a linear trajectory best summarized as "take-make-waste." Raw mineral and biological resources are extracted from the Earth, transformed into consumer goods, and rapidly discarded into overflowing landfills or incinerators once their perceived utility expires. This linear model assumes an infinite supply of natural resources and an unlimited planetary capacity to absorb toxic pollutants.',
          'In stark contrast, visionary economists and industrial designers advocate for the Circular Economy. Inspired by nature’s biological cycles—wherein the waste of one organism serves as the vital nutrient for another—a circular system is regenerative by design. It aims to decouple economic prosperity from the relentless consumption of finite virgin materials.',
          'The circular framework rests upon three foundational pillars: designing out waste and pollution, keeping products and materials circulating at their highest utility for as long as possible, and regenerating natural systems. Rather than selling physical objects that consumers discard, corporations are pioneering "product-as-a-service" business models. For example, lighting companies now lease illumination hours rather than selling disposable lightbulbs, retaining responsibility for maintenance, repair, and modular recycling.',
          'Transitioning to a circular paradigm demands sweeping innovation in supply chains, taxation of virgin resources, and consumer mindsets. Embracing circularity is no longer merely an ecological idealism; it is a financial imperative for long-term corporate survival on a resource-constrained planet.'
        ],
        summaryUz: 'An\'anaviy "ol-ishlab chiqar-tashla" chiziqli modelidan materiallar qayta aylanadigan va chiqindi nolga tenglashtiriladigan aylanma iqtisodiyotga (Circular Economy) o\'tish.',
        targetVocab: [
          {
            word: 'trajectory',
            pos: 'n.',
            phonetic: '/trəˈdʒek.tər.i/',
            definitionEn: 'The path followed by a moving object or the development path of an economy/system.',
            translationUz: 'Yo\'nalish, rivojlanish traektoriyasi',
            sampleSentence: 'The current trajectory of global plastic waste is environmentally unsustainable.',
            collocation: 'linear trajectory',
            synonym: 'path'
          },
          {
            word: 'regenerative',
            pos: 'adj.',
            phonetic: '/rɪˈdʒen.ər.ə.tɪv/',
            definitionEn: 'Tending or having the power to restore, renew, or revitalize.',
            translationUz: 'Qayta tiklovchi, yangilovchi',
            sampleSentence: 'Circular agriculture utilizes regenerative practices that replenish soil organic matter.',
            collocation: 'regenerative design',
            synonym: 'restorative'
          },
          {
            word: 'decouple',
            pos: 'v.',
            phonetic: '/diːˈkʌp.əl/',
            definitionEn: 'To separate, disengage, or dissociate something from something else.',
            translationUz: 'Bir-biridan ajratmoq, uzmoq',
            sampleSentence: 'The goal of clean energy is to decouple GDP growth from carbon emissions.',
            collocation: 'decouple growth from waste',
            synonym: 'separate'
          },
          {
            word: 'finite',
            pos: 'adj.',
            phonetic: '/ˈfaɪ.naɪt/',
            definitionEn: 'Having limits or bounds; not infinite in quantity.',
            translationUz: 'Cheklangan, tugaydigan',
            sampleSentence: 'Rare earth elements needed for electric batteries exist in strictly finite reserves.',
            collocation: 'finite resources',
            synonym: 'limited'
          },
          {
            word: 'lease',
            pos: 'v.',
            phonetic: '/liːs/',
            definitionEn: 'To grant or hold the use of something under a contract in exchange for regular payments.',
            translationUz: 'Ijaraga bermoq yoki olmoq',
            sampleSentence: 'Automakers are beginning to lease battery packs rather than selling them permanently.',
            collocation: 'lease equipment',
            synonym: 'rent'
          },
          {
            word: 'imperative',
            pos: 'n.',
            phonetic: '/ɪmˈper.ə.tɪv/',
            definitionEn: 'An essential or urgent thing; a duty that cannot be avoided.',
            translationUz: 'Shart, zarurat, muqarrar talab',
            sampleSentence: 'Reducing industrial landfill waste has become an existential imperative for corporations.',
            collocation: 'economic imperative',
            synonym: 'necessity'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw1-u12-p2-q1',
            type: 'main-idea',
            question: 'What is the core premise of a Circular Economy compared to the linear model?',
            options: [
              'Burning all trash in open bonfires outside major cities.',
              'Designing systems that eliminate waste by keeping materials and components circulating at high value continuously.',
              'Banning all industrial manufacturing and returning to the Stone Age.',
              'Exporting plastic waste to the polar ice caps.'
            ],
            correctIndex: 1,
            explanationUz: 'Aylanma iqtisodiyot materiallarni doimiy ravishda yuqori qimmatda aylanib yurishini ta\'minlab, chiqindilarni nolga tushirishni ko\'zlaydi.'
          },
          {
            id: 'rrw1-u12-p2-q2',
            type: 'detail',
            question: 'What is an example of a "product-as-a-service" business model mentioned in the text?',
            options: [
              'Supermarkets charging customers for shopping carts.',
              'Lighting manufacturers leasing hours of illumination rather than selling throwaway lightbulbs.',
              'Restaurants requiring diners to wash dishes.',
              'Toy stores throwing away unsold plastic dolls.'
            ],
            correctIndex: 1,
            explanationUz: 'Matnda yoritish kompaniyalari lampochkani sotish o\'rniga yorug\'lik soatlarini ijaraga berishi misol qilib keltirilgan.'
          },
          {
            id: 'rrw1-u12-p2-q3',
            type: 'vocabulary',
            question: 'The word "finite" in paragraph 2 describes resources that are:',
            options: ['Never-ending and infinite', 'Limited and exhaustible', 'Invisible', 'Liquid'],
            correctIndex: 1,
            explanationUz: '"Finite" so\'zi cheklangan, ma\'lum miqdorda bo\'lib, tugab qoladigan ma\'nosini bildiradi.'
          },
          {
            id: 'rrw1-u12-p2-q4',
            type: 'inference',
            question: 'Why does product leasing incentivize companies to build longer-lasting goods?',
            options: [
              'Because customers break them intentionally.',
              'Because the manufacturer bears the cost of repair and replacement, making durability financially profitable.',
              'Because government inspectors confiscate broken goods.',
              'Because leasing requires no legal contracts.'
            ],
            correctIndex: 1,
            explanationUz: 'Agar mahsulot ishlab chiqaruvchining mulki bo\'lib qolsa, uning uzoq chidashi va buzilmasligi kompaniyaning o\'zi uchun eng katta foyda keltiradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Linear Take-Make-Waste vs Circular Regenerative Economy',
          sections: [
            {
              heading: 'Traditional Linear Paradigm',
              points: [
                'Extract finite virgin minerals and fossil fuels from the biosphere',
                'Mass-produce short-lived consumer goods designed for obsolescence',
                'Dispose of items into incinerators and polluting landfills'
              ]
            },
            {
              heading: 'Circular Regenerative Paradigm',
              points: [
                'Design out waste through modular disassembly and non-toxic materials',
                'Product-as-a-service leasing encourages maximum product durability',
                'Nutrients returned harmlessly to nature or industrial closed loops'
              ]
            }
          ]
        },
        discussionPrompts: [
          'What consumer habits would you personally need to change to live in a fully circular zero-waste society?',
          'Should governments mandate a "Right to Repair" law requiring tech companies to provide cheap spare parts for smartphones?'
        ]
      }
    ]
  }
];
