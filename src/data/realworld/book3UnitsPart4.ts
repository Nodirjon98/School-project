import { RealWorldUnit } from '../../types';

export const BOOK3_UNITS_PART4: RealWorldUnit[] = [
  // ==========================================
  // UNIT 9: Sports & Fitness
  // ==========================================
  {
    id: 'rrw3-u9',
    unitNumber: 9,
    title: 'Sports & Fitness',
    subjectArea: 'Gene Doping & Mechanical Doping in Athletics',
    themeDescriptionUz: 'Genetik doping (CRISPR/Myostatin), poyafzal biomexanikasi (Super-shoes) va sportda teng imkoniyatlar.',
    passages: [
      {
        id: 'rrw3-u9-p1',
        passageNumber: 1,
        title: 'Gene Doping: The Molecular Frontier of Athletic Enhancement',
        subtitle: 'Myostatin inhibition, viral vectors, and the untraceable biological athlete',
        themeCategory: 'Sports Biotechnology',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What happens when athletes alter their actual genetic DNA rather than injecting chemical steroids?',
          'Will anti-doping agencies ever be able to detect genetically modified athletes?'
        ],
        paragraphs: [
          'For more than half a century, the international anti-doping crusade has waged an adversarial cat-and-mouse war against synthetic performance-enhancing compounds: anabolic steroids, synthetic erythropoietin (EPO), and human growth hormone. However, that chemical arms race is rapidly being eclipsed by an exponentially more covert and formidable biological frontier: gene doping.',
          'Gene doping involves the non-therapeutic application of gene therapy technologies to enhance athletic performance. Utilizing modified adeno-associated viral vectors or CRISPR-Cas9 ribonucleoproteins, athletes can directly insert, silence, or modify specific genetic sequences within their somatic muscle fibers. The targeted physiological pathways are astoundingly potent: injecting engineered copies of the erythropoietin gene causes the athlete\'s own kidneys to continuously manufacture natural red blood cells, elevating aerobic oxygen transport indefinitely without requiring foreign chemical injections.',
          'Even more radical is the genetic silencing of myostatin—a naturally occurring protein that acts as an autocrine braking mechanism preventing excessive skeletal muscle hypertrophy. In laboratory animals, knocking out the myostatin gene produces staggering "mighty mice" and Belgian Blue bulls possessing double the muscular volume and explosive force with zero extra training.',
          'The paramount crisis for the World Anti-Doping Agency (WADA) is detectability. Because gene therapy prompts the body\'s own cellular machinery to synthesize completely endogenous proteins, standard urine and mass-spectrometric blood screens are completely impotent. Unmasking a genetically altered athlete would require invasive muscle biopsies—an intervention fraught with legal, ethical, and medical violations.'
        ],
        summaryUz: 'Genetik doping: kimyoviy steroidlardan gen terapiyasiga o\'tish (CRISPR, EPO geni, Miostatinni bloklash), tabiiy oqsillar ishlab chiqarilishi va WADA uchun uni aniqlashning imkonsizligi.',
        targetVocab: [
          {
            word: 'adversarial',
            pos: 'adj.',
            phonetic: '/ˌæd.vəˈseə.ri.əl/',
            definitionEn: 'Involving or characterized by conflict, opposition, or hostile contention.',
            translationUz: 'Raqiblikka asoslangan, dushmanona',
            sampleSentence: 'The relationship between doping scientists and testing labs is strictly adversarial.',
            collocation: 'adversarial contest',
            synonym: 'antagonistic'
          },
          {
            word: 'covert',
            pos: 'adj.',
            phonetic: '/ˈkəʊ.vɜːt/',
            definitionEn: 'Not openly acknowledged or displayed; secret or disguised.',
            translationUz: 'Yashirin, maxfiy, ko\'zga tashlanmaydigan',
            sampleSentence: 'Gene manipulation represents a covert method of biological enhancement.',
            collocation: 'covert operation',
            synonym: 'clandestine'
          },
          {
            word: 'vector',
            pos: 'n.',
            phonetic: '/ˈvek.tər/',
            definitionEn: 'An organism or virus that does not cause disease itself but which spreads or delivers genetic material into a host.',
            translationUz: 'Vektor, gen tashuvchi virus yoki vosita',
            sampleSentence: 'Scientists use deactivated viral vectors to ferry DNA sequences into skeletal muscle cells.',
            collocation: 'viral vector',
            synonym: 'carrier'
          },
          {
            word: 'autocrine',
            pos: 'adj.',
            phonetic: '/ˈɔː.tə.krɪn/',
            definitionEn: 'Relating to a hormone or substance that affects the exact cells that secrete it.',
            translationUz: 'Avtokrin, o\'zi ishlab chiqargan hujayraga ta\'sir qiluvchi',
            sampleSentence: 'Myostatin acts as an autocrine signal that tells muscle fibers when to cease growing.',
            collocation: 'autocrine signaling',
            synonym: 'self-regulating'
          },
          {
            word: 'endogenous',
            pos: 'adj.',
            phonetic: '/enˈdɒdʒ.ɪ.nəs/',
            definitionEn: 'Having an internal cause or origin; produced naturally within an organism.',
            translationUz: 'Endogen, organizmning o\'zida ichkaridan paydo bo\'luvchi',
            sampleSentence: 'Because the red blood cells are endogenous, laboratory tests cannot distinguish them from natural biology.',
            collocation: 'endogenous hormones',
            synonym: 'internal'
          },
          {
            word: 'impotent',
            pos: 'adj.',
            phonetic: '/ˈɪm.pə.tənt/',
            definitionEn: 'Unable to take effective action; helpless or powerless.',
            translationUz: 'Ojiz, chorasiz, kuchsiz',
            sampleSentence: 'Standard drug urine panels are completely impotent against genetic modifications.',
            collocation: 'rendered impotent',
            synonym: 'powerless'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u9-p1-q1',
            type: 'main-idea',
            question: 'Why does gene doping represent a far more profound crisis for athletic fairness than traditional doping?',
            options: [
              'Because athletes refuse to drink sports drinks.',
              'Because gene therapy causes the athlete\'s own cells to produce identical, endogenous proteins, rendering detection via standard blood and urine tests virtually impossible.',
              'Because gene editing makes running shoes wear out in one day.',
              'Because gene editing only works on cold days.'
            ],
            correctIndex: 1,
            explanationUz: 'Gen dopingida tananing o\'zi tabiiy oqsillarni (endogen) ishlab chiqaradi, shuning uchun odatiy siydik va qon tahlillari uning sun\'iyligini aniqlashda butunlay ojizdir.'
          },
          {
            id: 'rrw3-u9-p1-q2',
            type: 'detail',
            question: 'What physiological consequence occurs when the myostatin gene is knocked out or silenced?',
            options: [
              'The heart stops beating completely.',
              'The biological braking mechanism on muscle hypertrophy is removed, producing dramatic increases in muscle mass and explosive force.',
              'The skeleton becomes made of cartilage.',
              'The body loses all ability to sweat.'
            ],
            correctIndex: 1,
            explanationUz: '3-paragrafda miostatin mushaklar o\'sishini to\'xtatuvchi tormoz ekanligi, u o\'chirilganda mushaklar hajmi va kuchi mashg\'ulotsiz ham 2 baravargacha o\'sishi aytilgan.'
          },
          {
            id: 'rrw3-u9-p1-q3',
            type: 'vocabulary',
            question: 'The word "endogenous" in paragraph 4 describes biological compounds that are:',
            options: ['Manufactured in an illegal factory', 'Naturally produced within the organism itself', 'Poisonous and radioactive', 'Derived from extraterrestrial rocks'],
            correctIndex: 1,
            explanationUz: '"Endogenous" so\'zi tashqaridan kiritilmagan, organizmning o\'z ichida tabiiy ishlab chiqarilgan degan ma\'noni beradi.'
          },
          {
            id: 'rrw3-u9-p1-q4',
            type: 'inference',
            question: 'Why is conducting invasive muscle biopsies on athletes considered ethically and legally unviable for routine doping control?',
            options: [
              'Because needles are made of plastic.',
              'Taking deep muscle tissue biopsies causes physical damage, pain, and scar tissue, impairing the athlete\'s bodily integrity and performance.',
              'Because athletes do not possess muscle fibers.',
              'Because hospitals are too far from running tracks.'
            ],
            correctIndex: 1,
            explanationUz: 'Muntazam mushak biopsiyasi o\'tkazish inson tanasi butunligini buzadi, og\'riq va chandiqlar qoldiradi, bu esa sportchining sog\'lig\'i va natijalariga salbiy ta\'sir qiladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Traditional Chemical Doping vs Genetic Modification',
          sections: [
            {
              heading: 'Traditional Doping (Steroids, Synthetic EPO)',
              points: [
                'Exogenous synthetic compounds injected or ingested periodically',
                'Detectable via mass-spectrometry, abnormal urinary ratios, and the Athlete Biological Passport'
              ]
            },
            {
              heading: 'Gene Doping (CRISPR, Viral Vectors)',
              points: [
                'Direct somatic modification of DNA in muscle/kidney tissues',
                'Prompts body to produce 100% endogenous natural proteins (EPO, IGF-1)',
                'Undetectable by standard blood/urine screens; requires invasive muscle biopsies'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If gene therapy becomes safe and common for treating medical diseases, should athletes be allowed to use it for sports?',
          'Will professional sports eventually have to divide into "natural" and "genetically modified" leagues?'
        ]
      },
      {
        id: 'rrw3-u9-p2',
        passageNumber: 2,
        title: 'Technological Doping: The Biomechanics of Super-Shoes',
        subtitle: 'Curved carbon fiber plates, resilient PEBA foams, and the shattering of marathon world records',
        themeCategory: 'Biomechanics & Sports Ethics',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Can high-tech sneakers act like springs that bounce runners forward faster?',
          'Where is the ethical line between fair athletic equipment and "technological doping"?'
        ],
        paragraphs: [
          'In October 2019 in Vienna, Kenyan distance icon Eliud Kipchoge accomplished what had long been deemed physiologically impossible for Homo sapiens: running a full marathon in under two hours (1:59:40). While Kipchoge’s superhuman cardiovascular aerobic engine and relentless discipline were undisputed, controversy immediately swirled around what was strapped to his feet: a revolutionary prototype running shoe engineered by Nike.',
          'The emergence of "super-shoes" ignited an intense debate over "technological doping." Unlike traditional racing flats, which relied on thin, minimalist layers of ethylene-vinyl acetate (EVA) foam to keep weight low, modern super-shoes feature colossal, four-centimeter-thick midsoles stuffed with polyether block amide (PEBA) foam and embedded with a rigid, curved carbon-fiber plate.',
          'Biomechanically, this architecture functions as an exquisite energy-return spring. High-resilience PEBA foam returns nearly eighty-five percent of the kinetic energy compressed during foot strike—compared to barely sixty percent in legacy shoes. Concurrently, the longitudinal stiffness of the curved carbon plate acts as a lever arm, stabilizing the ankle joint, optimizing the mechanical advantage of the metatarsophalangeal joint, and reducing calf muscle metabolic fatigue. Controlled laboratory trials confirmed a staggering four-percent improvement in running metabolic economy.',
          'As virtually every world marathon and track record fell to athletes donning super-shoes, athletic governing bodies scrambled to impose regulations. World Athletics enacted strict constraints: capping midsole stack height at 40 millimeters and restricting shoes to a single embedded plate. Nonetheless, critics lament that sports history has been severed into two non-comparable epochs: before and after the super-shoe revolution.'
        ],
        summaryUz: 'Texnologik doping: yugurish poyafzallaridagi uglerod tolali plastinalar va PEBA ko\'pigi (super-shoes), ularning energiyani 85% qaytarishi va marafon rekordlarining yangilanishi.',
        targetVocab: [
          {
            word: 'undisputed',
            pos: 'adj.',
            phonetic: '/ˌʌn.dɪˈspjuː.tɪd/',
            definitionEn: 'Not disputed or called in question; accepted without doubt.',
            translationUz: 'Munozarasiz, shubhasiz tan olingan',
            sampleSentence: 'Kipchoge\'s athletic greatness was undisputed among sports fans.',
            collocation: 'undisputed champion',
            synonym: 'unquestioned'
          },
          {
            word: 'resilience',
            pos: 'n.',
            phonetic: '/rɪˈzɪl.jəns/',
            definitionEn: 'The capacity to recover quickly from difficulties; the ability of a substance or object to spring back into shape; elasticity.',
            translationUz: 'Elastiklik, qayta tiklanuvchanlik, bardoshlilik',
            sampleSentence: 'The elastic resilience of PEBA foam returns compressed kinetic energy to the stride.',
            collocation: 'elastic resilience',
            synonym: 'elasticity'
          },
          {
            word: 'longitudinal',
            pos: 'adj.',
            phonetic: '/ˌlɒŋ.ɡɪˈtjuː.dɪ.nəl/',
            definitionEn: 'Running lengthwise rather than across.',
            translationUz: 'Bo\'ylama, uzunlik bo\'yicha yo\'nalgan',
            sampleSentence: 'The longitudinal carbon-fiber plate prevents foot flexion and conserves calf energy.',
            collocation: 'longitudinal stiffness',
            synonym: 'lengthwise'
          },
          {
            word: 'metabolic',
            pos: 'adj.',
            phonetic: '/ˌmet.əˈbɒl.ɪk/',
            definitionEn: 'Relating to the biological processes that occur within a living organism in order to maintain life and produce energy.',
            translationUz: 'Metabolik, moddalar almashinuviga oid',
            sampleSentence: 'Super-shoes confer a documented four-percent reduction in metabolic energy expenditure.',
            collocation: 'metabolic economy',
            synonym: 'physiological'
          },
          {
            word: 'scramble',
            pos: 'v.',
            phonetic: '/ˈskræm.bəl/',
            definitionEn: 'To move or act hurriedly, frantically, or awkwardly to handle a sudden emergency.',
            translationUz: 'Shoshilinch ravishda harakat qilmoq, tipirchilamoq',
            sampleSentence: 'Regulators scrambled to draft technical guidelines before the Olympic trials.',
            collocation: 'scramble to respond',
            synonym: 'rush'
          },
          {
            word: 'epoch',
            pos: 'n.',
            phonetic: '/ˈiː.pɒk/',
            definitionEn: 'A period of time in history or a person\'s life, typically one marked by notable events or particular characteristics.',
            translationUz: 'Davr, yangi eraning boshlanishi',
            sampleSentence: 'The two-hour marathon marked a transformative epoch in athletic biomechanics.',
            collocation: 'new epoch',
            synonym: 'era'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u9-p2-q1',
            type: 'main-idea',
            question: 'What is the primary technological debate surrounding modern running "super-shoes"?',
            options: [
              'Whether shoes should be sold in leather or canvas material.',
              'Whether high-resilience foam and curved carbon-fiber plates constitute fair equipment innovation or mechanical technological doping that distorts human achievement.',
              'The excessive cost of rubber laces.',
              'Why marathon shoes cannot be worn in the rain.'
            ],
            correctIndex: 1,
            explanationUz: 'Bahs-munozara yangi texnologiyali poyafzallarning elastik ko\'pik va uglerod plastina orqali inson yugurish ko\'rsatkichlarini sun\'iy oshirishi "mexanik doping" hisoblanadimi yoki yo\'qmi degan savol atrofida kechadi.'
          },
          {
            id: 'rrw3-u9-p2-q2',
            type: 'detail',
            question: 'Approximately what percentage of compressed kinetic energy does PEBA foam return compared to legacy EVA foam?',
            options: ['Zero percent', 'Nearly 85 percent compared to roughly 60 percent', 'Over 200 percent', 'Only 10 percent'],
            correctIndex: 1,
            explanationUz: '3-paragrafda PEBA ko\'pigi qadam bosilgandagi kinetik energiyaning qariyb 85 foizini qaytarishi (eski ko\'piklarda 60% edi) aytilgan.'
          },
          {
            id: 'rrw3-u9-p2-q3',
            type: 'vocabulary',
            question: 'The word "scramble" in paragraph 4 conveys that governing bodies acted:',
            options: ['Calmly and slowly over decades', 'Hurriedly and frantically in response to an unexpected crisis', 'With total boredom', 'By cooking eggs'],
            correctIndex: 1,
            explanationUz: '"Scramble" so\'zi shoshilinch, sarosimali va kutilmagan vaziyatga tezda chora ko\'rishga urinishni bildiradi.'
          },
          {
            id: 'rrw3-u9-p2-q4',
            type: 'inference',
            question: 'Why do track purists feel that sports history has been "severed into two non-comparable epochs"?',
            options: [
              'Because stopwatches were replaced by digital clocks.',
              'Because historical marathon records set by legendary runners without carbon-plate shoes can no longer be fairly compared with modern times.',
              'Because Olympic races are now held indoors.',
              'Because marathon distances were shortened by ten miles.'
            ],
            correctIndex: 1,
            explanationUz: 'Chunki o\'tmishdagi yuguruvchilar oddiy tufli kiyib rekord qo\'ygan; yangi poyafzallar tufayli eski rekordlar bilan hozirgilarni adolatli taqqoslash imkonsiz bo\'lib qoldi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Super-Shoe Biomechanical Advantages and Regulatory Reactions',
          sections: [
            {
              heading: 'Biomechanical Engineering',
              points: [
                'PEBA foam midsole: 85% elastic energy return compared to 60% for legacy EVA',
                'Embedded curved carbon plate stabilizes ankle, acts as lever arm, and reduces calf load',
                'Produces measured 4% improvement in runner metabolic economy'
              ]
            },
            {
              heading: 'Regulatory Limits (World Athletics)',
              points: [
                'Midsole stack height capped at maximum 40 millimeters',
                'Restricted to single embedded plate; bans dual springs',
                'Must be commercially available on public market for 4 months prior to competition'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should marathon records set with carbon-plated super-shoes carry an asterisk in official record books?',
          'If swimming banned high-tech polyurethane bodysuits in 2010, should running ban super-shoes?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 10: People & Opinions
  // ==========================================
  {
    id: 'rrw3-u10',
    unitNumber: 10,
    title: 'People & Opinions',
    subjectArea: 'Conspiracy Epistemology & Retributive vs Restorative Public Justice',
    themeDescriptionUz: 'Fitna nazariyalarining psixologik sirlari (Epistemology) va bekor qilish madaniyati (Cancel Culture) o\'rniga tiklovchi adolat.',
    passages: [
      {
        id: 'rrw3-u10-p1',
        passageNumber: 1,
        title: 'The Epistemology of Conspiracy Theories',
        subtitle: 'Proportionality bias, epistemic insecurity, and the illusion of explanatory depth',
        themeCategory: 'Social Epistemology & Psychology',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Why do millions of educated people believe secretive cabals control global politics and pandemics?',
          'How does the human brain react when monumental catastrophes have trivial, random causes?'
        ],
        paragraphs: [
          'From the assassination of John F. Kennedy and the moon landing hoax to shadowy plots surrounding viral pandemics and 5G cellular towers, conspiracy theories have plagued human societies for millennia. In the digital age, however, fringe conspiracism has metastasized from peripheral subcultures into mainstream geopolitical forces that undermine public health, polarize electorates, and storm democratic legislatures.',
          'Cognitive psychologists and social epistemologists have dismantled the comforting assumption that conspiracists are simply uneducated or mentally unhinged. Instead, conspiratorial ideation is rooted in universal evolutionary cognitive heuristics. Primary among these is the "proportionality bias"—the deeply ingrained psychological conviction that monumental, world-altering events must be caused by equally monumental, deliberate intentions. When an epochal tragedy strikes—such as a beloved president murdered by a lone, disorganized malcontent, or a global pandemic sparked by a microscopic virus—the human brain recoils in existential dread from the horrifying reality of random chaos. Inventing an omnipotent, malevolent conspiracy restores a perverse sense of order: it is comforting to believe that someone, even an evil cabal, is in control.',
          'Furthermore, conspiracy theories offer profound psychological compensation for "epistemic insecurity." Embracing esoteric explanations endows believers with a flattering sense of cognitive superiority: they view themselves as enlightened truth-seekers who have seen through the deception that dupes the naive masses.',
          'Dismantling conspiracism cannot be accomplished merely by bombarding believers with debunking facts. When worldviews are intertwined with personal identity, aggressive factual refutations often trigger the "backfire effect," hardening entrenched beliefs. Compassionate engagement and nurturing institutional trust are the only enduring antidotes.'
        ],
        summaryUz: 'Fitna nazariyalarining epistemologik va psixologik sabablari: insonning tasodifiy tartibsizlikdan qo\'rqishi, "mutanosiblik moyilligi" (proportionality bias) va soxta ustunlik hissi.',
        targetVocab: [
          {
            word: 'metastasize',
            pos: 'v.',
            phonetic: '/məˈtæs.tə.saɪz/',
            definitionEn: 'To spread injuriously and rapidly, as in cancer spreading to other sites in the body.',
            translationUz: 'Metastaza bermoq, tez va halokatli tarqalmoq',
            sampleSentence: 'Conspiracy theories metastasized across online messaging networks during the lockdown.',
            collocation: 'metastasize rapidly',
            synonym: 'proliferate'
          },
          {
            word: 'unhinged',
            pos: 'adj.',
            phonetic: '/ʌnˈhɪndʒd/',
            definitionEn: 'Mentally unbalanced; deranged or highly eccentric.',
            translationUz: 'Aqli joyida bo\'lmagan, ruhiy muvozanati buzilgan',
            sampleSentence: 'The belief was dismissed as the work of an unhinged fringe blogger.',
            collocation: 'mentally unhinged',
            synonym: 'deranged'
          },
          {
            word: 'proportionality',
            pos: 'n.',
            phonetic: '/prəˌpɔː.ʃənˈæl.ə.ti/',
            definitionEn: 'The quality of corresponding in size or amount to something else.',
            translationUz: 'Mutanosiblik, o\'lcham va sababning mosligi',
            sampleSentence: 'Proportionality bias makes people assume major catastrophes require enormous conspiracies.',
            collocation: 'proportionality bias',
            synonym: 'correspondence'
          },
          {
            word: 'malcontent',
            pos: 'n.',
            phonetic: '/ˈmæl.kən.tent/',
            definitionEn: 'A person who is dissatisfied and rebellious, seeking to cause social disturbance.',
            translationUz: 'Norizo kimsa, isyonchi, fitnachi',
            sampleSentence: 'The assassination was carried out by a lone malcontent with personal grievances.',
            collocation: 'lone malcontent',
            synonym: 'agitator'
          },
          {
            word: 'esoteric',
            pos: 'adj.',
            phonetic: '/ˌes.əˈter.ɪk/',
            definitionEn: 'Intended for or likely to be understood by only a small number of people with specialized knowledge.',
            translationUz: 'Ezoterik, faqat tor doiraga tushunarli bo\'lgan sirli',
            sampleSentence: 'Believers relish possessing what they view as rare esoteric knowledge.',
            collocation: 'esoteric knowledge',
            synonym: 'obscure'
          },
          {
            word: 'entrenched',
            pos: 'adj.',
            phonetic: '/ɪnˈtrentʃt/',
            definitionEn: 'Firmly established and difficult or unlikely to change; ingrained.',
            translationUz: 'Chuqur ildiz otgan, mustahkamlangan',
            sampleSentence: 'Entrenched political biases resist even the clearest mathematical counterproofs.',
            collocation: 'deeply entrenched',
            synonym: 'ingrained'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u10-p1-q1',
            type: 'main-idea',
            question: 'What is the primary psychological driver of conspiratorial beliefs explained in the text?',
            options: [
              'People lack access to television news programs.',
              'Conspiratorial beliefs stem from natural cognitive heuristics—such as the proportionality bias and the need to impose order on frightening, random catastrophes.',
              'Conspiracists are all paid by foreign spy agencies.',
              'People have forgotten the basic laws of gravity.'
            ],
            correctIndex: 1,
            explanationUz: 'Fitna nazariyalari insonning tasodifiy betartiblikdan qo\'rqishi, katta hodisalarga katta sabablar qidirishi (proportionality bias) va nazorat hissini qaytarish istagidan kelib chiqadi.'
          },
          {
            id: 'rrw3-u10-p1-q2',
            type: 'detail',
            question: 'What is "proportionality bias" according to paragraph 2?',
            options: [
              'The urge to divide food equally among siblings.',
              'The cognitive conviction that massive, monumental events must be caused by equally massive, deliberate intentions rather than petty accidents.',
              'The mathematical ratio between circles and triangles.',
              'The belief that tall people are more intelligent.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda bu moyillik inson katta fojialarning kichik yoki tasodifiy sabablar tufayli yuz berganiga ishonishni istamasligi ekanligi aniq ko\'rsatilgan.'
          },
          {
            id: 'rrw3-u10-p1-q3',
            type: 'vocabulary',
            question: 'The word "esoteric" in paragraph 3 refers to information that is:',
            options: ['Broadcast on commercial radio', 'Obscure, specialized, and understood only by a privileged few', 'Completely fictional', 'Written in modern slang'],
            correctIndex: 1,
            explanationUz: '"Esoteric" so\'zi faqat kam sonli shaxslar biladigan sirli, tor doiradagi maxsus bilimni anglatadi.'
          },
          {
            id: 'rrw3-u10-p1-q4',
            type: 'inference',
            question: 'Why does aggressively mocking a conspiracy theorist with hard facts often backfire?',
            options: [
              'Because the facts cost too much to explain.',
              'Because conspiratorial beliefs are intimately bound to their personal identity and status, causing them to view refutation as a hostile personal attack.',
              'Because fact-checkers do not speak clearly.',
              'Because conspiracy theorists cannot hear.'
            ],
            correctIndex: 1,
            explanationUz: 'Fitna nazariyasi insonning shaxsiyati va o\'zini boshqalardan ustun bilish hissi bilan chambarchas bog\'langan bo\'ladi; dalillar bilan bosim o\'tkazish ularni himoyalanishga va o\'z fikrida yanada qat\'iy turib olishga majbur qiladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'cause-effect',
          title: 'Psychological Architecture of Conspiratorial Ideation',
          sections: [
            {
              heading: 'Cognitive Biases & Drivers',
              points: [
                'Proportionality bias: monumental events cannot have random or petty causes',
                'Existential dread: order of an evil cabal is less terrifying than chaotic randomness',
                'Epistemic insecurity: esoteric beliefs grant feelings of intellectual superiority'
              ]
            },
            {
              heading: 'Communication Dynamics',
              points: [
                'Aggressive fact-checking triggers cognitive backfire effect',
                'Beliefs are deeply entrenched in personal social identity and group belonging'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Why do you think conspiracy theories spread significantly faster on social media than verified scientific news?',
          'How would you talk to a family member who has become deeply convinced of a bizarre internet conspiracy theory?'
        ]
      },
      {
        id: 'rrw3-u10-p2',
        passageNumber: 2,
        title: 'Cancel Culture vs Restorative Justice',
        subtitle: 'Public shaming, algorithmic mobs, and the road to genuine accountability',
        themeCategory: 'Social Justice & Ethics',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Does public humiliation on social media change a person\'s harmful behavior for the better?',
          'What is the difference between holding someone accountable and destroying their life forever?'
        ],
        paragraphs: [
          'The phrase "cancel culture" has become the defining flashpoint of the modern culture wars. Proponents characterize public ostracism as a long-overdue mechanism of social justice—a decentralized weapon enabling ordinary citizens to hold powerful figures, corporations, and politicians accountable when established legal systems fail to punish bigotry, harassment, or abuses of power.',
          'Yet, as cancellation moved from toppling predatory media moguls to targeting private citizens for decade-old social media comments, critics sounded alarms over the revival of medieval public shaming. Networked platforms incentivize digitized mob justice: driven by viral moral outrage and algorithmically amplified pile-ons, transgressors are summarily fired, socially blacklisted, and subjected to relentless harassment with zero due process, opportunity for proportional defense, or pathway to redemption.',
          'Criminologists and ethical philosophers increasingly contrast this punitive vengeance with the framework of "restorative justice." Rooted in indigenous legal traditions, restorative justice asserts that wrongdoing is fundamentally a violation of human relationships and community trust, rather than a mere violation of abstract rules. While punitive shaming expels and dehumanizes the transgressor, restorative justice seeks healing for the victim, active acknowledgment of harm by the offender, and the structured reintegration of the transgressor into the community.',
          'A healthy society cannot sustain itself on perpetual ritual excommunication. If every transgression results in permanent social erasure, society incentivizes deceit, defensive entrenchment, and radicalization. True moral progress demands an ethical paradigm capable of balancing uncompromising accountability with grace, proportionality, and the possibility of human transformation.'
        ],
        summaryUz: '"Cancel Culture" (bekor qilish madaniyati) va jamoatchilik jazosi: tarmoqlardagi ommaviy haqoratlar va uning o\'rniga insonni tuzatuvchi tiklovchi adolat (restorative justice) tamoyili.',
        targetVocab: [
          {
            word: 'ostracism',
            pos: 'n.',
            phonetic: '/ˈɒs.trə.sɪ.zəm/',
            definitionEn: 'Exclusion from a society, community, or group by general consent.',
            translationUz: 'Ostrasizm, jamiyatdan quvg\'in qilish, chetlatish',
            sampleSentence: 'The author faced immediate professional ostracism following her controversial remarks.',
            collocation: 'social ostracism',
            synonym: 'banishment'
          },
          {
            word: 'transgressor',
            pos: 'n.',
            phonetic: '/trænzˈɡres.ər/',
            definitionEn: 'A person who breaks a law, moral code, or boundary; an offender.',
            translationUz: 'Qonunbuzar, xato qiluvchi shaxs',
            sampleSentence: 'Public shaming targets the transgressor without investigating context or intent.',
            collocation: 'alleged transgressor',
            synonym: 'offender'
          },
          {
            word: 'restitution',
            pos: 'n.',
            phonetic: '/ˌres.tɪˈtʃuː.ʃən/',
            definitionEn: 'The restoration of something lost or stolen to its proper owner; compensation for injury or harm.',
            translationUz: 'Yetkazilgan zararni qoplash, tovon to\'lash',
            sampleSentence: 'Restorative justice emphasizes genuine restitution rather than purely vindictive punishment.',
            collocation: 'make restitution',
            synonym: 'reparation'
          },
          {
            word: 'excommunication',
            pos: 'n.',
            phonetic: '/ˌek.skəˌmjuː.nɪˈkeɪ.ʃən/',
            definitionEn: 'The action of officially excluding someone from participation in the sacraments or services of a religious or social group.',
            translationUz: 'Jamoatdan haydash, chetlatish',
            sampleSentence: 'Online cancellations mirror historic religious excommunication rituals.',
            collocation: 'ritual excommunication',
            synonym: 'expulsion'
          },
          {
            word: 'erasure',
            pos: 'n.',
            phonetic: '/ɪˈreɪ.ʒər/',
            definitionEn: 'The removal of all traces of something; total obliteration from public record or memory.',
            translationUz: 'O\'chirib tashlash, butunlay yo\'q qilish',
            sampleSentence: 'Total social erasure deprives wrongdoers of the opportunity to learn from their mistakes.',
            collocation: 'social erasure',
            synonym: 'obliteration'
          },
          {
            word: 'proportionality',
            pos: 'n.',
            phonetic: '/prəˌpɔː.ʃənˈæl.ə.ti/',
            definitionEn: 'The quality of being in appropriate proportion to something else, especially punishment matching a crime.',
            translationUz: 'Mutanosiblik, jazoning aybga mosligi',
            sampleSentence: 'Online mobs completely disregard proportionality when meting out career destruction.',
            collocation: 'sense of proportionality',
            synonym: 'balance'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u10-p2-q1',
            type: 'main-idea',
            question: 'What is the primary philosophical contrast drawn between "cancel culture" and "restorative justice"?',
            options: [
              'Cancel culture is free, while restorative justice costs money.',
              'Cancel culture focuses on punitive public shaming, ostracism, and permanent cancellation, while restorative justice focuses on healing victims and rehabilitating offenders.',
              'Restorative justice only applies to sports athletes.',
              'Cancel culture was invented by the Roman Empire.'
            ],
            correctIndex: 1,
            explanationUz: '"Cancel culture" shaxsni jamoat oldida sharmanda qilish va jamiyatdan butunlay haydashga asoslansa, tiklovchi adolat yetkazilgan zararni tan olish, kechirim va insonni tuzatib jamiyatga qaytarishga qaratilgan.'
          },
          {
            id: 'rrw3-u10-p2-q2',
            type: 'detail',
            question: 'What negative behavior does permanent social cancellation incentivize according to the author?',
            options: [
              'Immediate public confessions.',
              'Deceit, defensive entrenchment, radicalization, and a total lack of redemption.',
              'Greater financial donations to charities.',
              'Reading more philosophy books.'
            ],
            correctIndex: 1,
            explanationUz: '4-paragrafda keltirilishicha, agar har qanday xato uchun kishi butunlay yo\'q qilinsa, bu insonlarni o\'z xatosini yashirishga, qaysarlikka va radikallashuvga undaydi.'
          },
          {
            id: 'rrw3-u10-p2-q3',
            type: 'vocabulary',
            question: 'The word "ostracism" in paragraph 1 refers to:',
            options: ['Being celebrated with medals', 'Deliberate exclusion and banishment from a social group', 'Financial investment in stocks', 'Medical vaccination'],
            correctIndex: 1,
            explanationUz: '"Ostracism" so\'zi jamiyatdan quvg\'in qilish, chetlatish va munosabatlarni uzish degan ma\'noni anglatadi.'
          },
          {
            id: 'rrw3-u10-p2-q4',
            type: 'inference',
            question: 'Why do modern social media algorithms accelerate punitive pile-ons against accused individuals?',
            options: [
              'Because algorithms are programmed to love peace.',
              'Because moral outrage generates the highest user engagement, clicks, and advertising revenue for platform corporations.',
              'Because social media servers run faster during cancellations.',
              'Because platforms employ judges as moderators.'
            ],
            correctIndex: 1,
            explanationUz: 'Axloqiy g\'azab va ommaviy haqoratlar algoritmlar uchun eng yuqori ko\'rishlar soni va reklama daromadini keltiradi, shuning uchun ular bunday to\'lqinlarni ataylab kuchaytiradi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Public Cancellation vs Restorative Justice Frameworks',
          sections: [
            {
              heading: 'Cancel Culture / Public Shaming',
              points: [
                'Retributive focus on viral ostracism, deplatforming, and economic firing',
                'Zero due process, absence of nuance, and permanent digital stain with no redemption',
                'Incentivizes defensive deceit and ideological radicalization'
              ]
            },
            {
              heading: 'Restorative Justice Paradigm',
              points: [
                'Transgression viewed as damaged community relationship requiring repair',
                'Offender actively acknowledges specific harm and makes tangible restitution',
                'Structured path toward reintegration and moral human transformation'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should someone be fired from their current job for an offensive joke they posted on Twitter ten years ago as a teenager?',
          'How can an online community hold an influencer accountable without resorting to death threats and mob harassment?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 11: Cross-Cultural Viewpoints
  // ==========================================
  {
    id: 'rrw3-u11',
    unitNumber: 11,
    title: 'Cross-Cultural Viewpoints',
    subjectArea: 'Cultural Psychology & Indigenous Ecological Wisdom',
    themeDescriptionUz: 'Kollektivistik va individualistik "Men" tushunchasi hamda mahalliy xalqlarning ekologik donoligi (TEK).',
    passages: [
      {
        id: 'rrw3-u11-p1',
        passageNumber: 1,
        title: 'The Self: Independent vs Interdependent Cultural Models',
        subtitle: 'Hazel Markus, Shinobu Kitayama, and the psychological geography of human identity',
        themeCategory: 'Cultural Psychology',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'When you define who you are, do you think of your personal achievements or your family and social roles?',
          'Why do Westerners and East Asians describe the same physical painting differently?'
        ],
        paragraphs: [
          'For much of its historical existence, Western psychology operated under the unexamined ethnocentric presumption that human cognition, motivation, and the concept of "the self" were biologically universal. In 1991, however, cultural psychologists Hazel Rose Markus and Shinobu Kitayama dismantled this dogma in a seminal treatise that established the field of cultural psychology: the distinction between the "independent" and "interdependent" self-construals.',
          'The independent model of the self—prevalent in North America and Western Europe—posits the individual as a bounded, autonomous entity possessing an internal configuration of unique traits, abilities, desires, and rights. Under this paradigm, personal authenticity and psychological maturity require asserting one\'s uniqueness, expressing personal agency, and standing out from the crowd. Self-esteem is inextricably tied to individual accomplishment and self-promotion.',
          'Conversely, the interdependent model—predominant in East Asia, Latin America, Africa, and rural traditional communities—conceives the self as fundamentally relational, fluid, and embedded within an encompassing social fabric. Identity is defined through roles, family obligations, and harmonious relationships. In these cultures, moral virtue is demonstrated not through rebellious differentiation, but through self-regulation, empathy, and aligning one\'s desires with communal harmony.',
          'These divergent cultural architectures profoundly shape sensory perception and cognition. Neuroimaging reveals that Westerners visually attend to focal foreground objects, displaying analytical reasoning, whereas East Asians attend holistically to the contextual background and relational interactions. Developing true intercultural wisdom demands appreciating that the human mind does not develop in a cultural vacuum; culture literally scaffolds how we perceive reality and define our existence.'
        ],
        summaryUz: 'Madaniy psixologiya: mustaqil (individualistik) va o\'zaro bog\'liq (kollektivistik) "Men" tushunchasi, Markus va Kitayama tadqiqotlari hamda g\'arb va sharq tafakkurining miyadagi farqlari.',
        targetVocab: [
          {
            word: 'ethnocentric',
            pos: 'adj.',
            phonetic: '/ˌeθ.nəʊˈsen.trɪk/',
            definitionEn: 'Evaluating other peoples and cultures according to the standards of one\'s own culture.',
            translationUz: 'Etnotsentrik, o\'z millati mezonlarini mutlaq deb biluvchi',
            sampleSentence: 'Early psychologists held ethnocentric biases assuming Western traits were universal.',
            collocation: 'ethnocentric assumption',
            synonym: 'culture-bound'
          },
          {
            word: 'construal',
            pos: 'n.',
            phonetic: '/kənˈstruː.əl/',
            definitionEn: 'The way in which a person perceives, comprehends, and interprets the world around them.',
            translationUz: 'Tushunish, talqin qilish, idrok etish usuli',
            sampleSentence: 'The independent self-construal emphasizes individual agency and autonomy.',
            collocation: 'self-construal',
            synonym: 'interpretation'
          },
          {
            word: 'relational',
            pos: 'adj.',
            phonetic: '/rɪˈleɪ.ʃən.əl/',
            definitionEn: 'Concerning the way in which two or more people or things are connected.',
            translationUz: 'Munosabatlarga oid, bog\'liqlikdagi',
            sampleSentence: 'Interdependent societies view the self as an intrinsically relational being.',
            collocation: 'relational identity',
            synonym: 'interconnected'
          },
          {
            word: 'scaffold',
            pos: 'v.',
            phonetic: '/ˈskæf.əʊld/',
            definitionEn: 'To provide structural support or a framework for learning and psychological development.',
            translationUz: 'Qolip/tayanch bo\'lib xizmat qilmoq',
            sampleSentence: 'Language and cultural rituals scaffold human cognitive development from infancy.',
            collocation: 'scaffold perception',
            synonym: 'support'
          },
          {
            word: 'holistically',
            pos: 'adv.',
            phonetic: '/həʊˈlɪs.tɪ.kəl.i/',
            definitionEn: 'In a way that considers the whole of something, and not just its individual parts.',
            translationUz: 'Golistiki tarzda, yaxlit holda',
            sampleSentence: 'East Asian participants evaluated the artwork holistically, noticing the background scenery.',
            collocation: 'process holistically',
            synonym: 'comprehensively'
          },
          {
            word: 'authenticity',
            pos: 'n.',
            phonetic: '/ˌɔː.θenˈtɪs.ə.ti/',
            definitionEn: 'The quality of being real, genuine, and true to one\'s own personality, spirit, or character.',
            translationUz: 'Haqiqiylik, o\'ziga xoslik, soxta emaslik',
            sampleSentence: 'In Western ethics, personal authenticity involves voicing opinions regardless of social friction.',
            collocation: 'personal authenticity',
            synonym: 'genuineness'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u11-p1-q1',
            type: 'main-idea',
            question: 'What is the foundational finding of Markus and Kitayama regarding the human self across cultures?',
            options: [
              'All human beings have the identical definition of happiness.',
              'Human identity is culturally scaffolded into two distinct orientations: the bounded, autonomous "independent self" and the embedded, relational "interdependent self."',
              'Westerners have larger brains than East Asians.',
              'Language has no relationship to human psychology.'
            ],
            correctIndex: 1,
            explanationUz: 'Markus va Kitayama insonning "Men" tushunchasi madaniyatga bog\'liq holda ikkiga: mustaqil/avtonom (independent) va o\'zaro ijtimoiy munosabatlarga bog\'liq (interdependent) qoliplarga bo\'linishini isbotlagan.'
          },
          {
            id: 'rrw3-u11-p1-q2',
            type: 'detail',
            question: 'How do eye-tracking neuroimaging studies reveal cognitive differences between Westerners and East Asians?',
            options: [
              'Westerners look at the ceiling, while East Asians close their eyes.',
              'Westerners attend primarily to focal foreground objects analytically, while East Asians attend holistically to the background context and relational dynamics.',
              'East Asians cannot recognize colors.',
              'There are no measurable neurological differences.'
            ],
            correctIndex: 1,
            explanationUz: '4-paragrafda g\'arbliklar oldingi plandagi markaziy obyektga tahliliy qarashi, sharqliklar esa umumiy fonga va munosabatlarga yaxlit (golistik) qarashi ko\'rsatilgan.'
          },
          {
            id: 'rrw3-u11-p1-q3',
            type: 'vocabulary',
            question: 'The word "ethnocentric" in paragraph 1 describes an approach that:',
            options: ['Celebrates all global cultures equally', 'Judges all cultures through the narrow lens and assumptions of one\'s own culture', 'Uses mathematical computers', 'Is based on climate science'],
            correctIndex: 1,
            explanationUz: '"Ethnocentric" so\'zi boshqa barcha madaniyatlarni faqat o\'z millati yoki madaniyati mezonlari bilan baholovchi degan ma\'noni beradi.'
          },
          {
            id: 'rrw3-u11-p1-q4',
            type: 'inference',
            question: 'Why might an individual from an interdependent culture feel uncomfortable with aggressive self-promotion in a job interview?',
            options: [
              'Because they do not want to earn money.',
              'Because highlighting one\'s personal superiority disrupts communal modesty and the fundamental virtue of relational harmony.',
              'Because job interviews are banned in East Asia.',
              'Because they are not qualified for the job.'
            ],
            correctIndex: 1,
            explanationUz: 'O\'zaro bog\'liq (interdependent) madaniyatlarda o\'zini boshqalardan ustun qo\'yish va ko\'z-ko\'z qilish kamtarlik hamda jamoaviy uyg\'unlik tamoyillariga zid hisoblanadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Independent vs Interdependent Models of the Self',
          sections: [
            {
              heading: 'The Independent Self (Western)',
              points: [
                'Bounded, autonomous entity separate from social context',
                'Core task: assert uniqueness, express personal agency, stand out from the crowd',
                'Cognitive style: Analytical focus on focal foreground objects'
              ]
            },
            {
              heading: 'The Interdependent Self (Eastern/Traditional)',
              points: [
                'Relational entity embedded within communal fabric and social roles',
                'Core task: adjust to others, maintain relational harmony, fulfill social duties',
                'Cognitive style: Holistic focus on background field and relational interactions'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Do you feel that your own country is becoming more individualistic with the rise of social media and modern corporate culture?',
          'Which model of the self do you think is better suited for solving global problems like climate change?'
        ]
      },
      {
        id: 'rrw3-u11-p2',
        passageNumber: 2,
        title: 'Traditional Ecological Knowledge: Indigenous Science',
        subtitle: 'Controlled burns, regenerative forestry, and honoring ecological reciprocity',
        themeCategory: 'Ethnoecology',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'How did Indigenous peoples manage massive forests for thousands of years without catastrophic wildfires?',
          'What is "Traditional Ecological Knowledge" (TEK), and how does it differ from industrial resource extraction?'
        ],
        paragraphs: [
          'Throughout the nineteenth and twentieth centuries, the Western industrial paradigm approached the natural world through an extractive, instrumental lens: nature was viewed as an inert repository of commodities—timber, ore, and arable soil—to be dominated, measured, and extracted for endless economic growth. Indigenous land stewardship practices, conversely, were dismissed by colonial forestry agencies as primitive or destructive.',
          'A catastrophic consequence of this hubris was the "total fire suppression" policy enforced across North American forests for over a century. Viewing forest fires purely as destructive enemies to commercial timber, agencies extinguished every natural blaze. This well-intentioned intervention prevented natural clearing, allowing colossal fuel loads of dry underbrush and deadwood to accumulate. Today, these mismanaged forests erupt into apocalyptic, uncontrollable mega-fires that incinerate entire towns and sterilize soil.',
          'In desperate search of solutions, modern conservation biologists are turning toward Traditional Ecological Knowledge (TEK)—a cumulative body of empirical wisdom, spiritual reciprocity, and ecological adaptations evolved over centuries by indigenous communities living in close interdependence with their bioregions.',
          'A cornerstone of TEK is "cultural burning." For millennia, indigenous peoples executed low-intensity, patchy, cool burns in early spring and autumn. These controlled burns cleared flammable understory fuels, recycled soil nutrients, stimulated the germination of medicinal plants, and established diverse ecological mosaics that acted as natural firebreaks against catastrophic fires. By embracing TEK not as quaint folklore, but as rigorous ecological science grounded in reciprocity, humanity can forge a sustainable alliance with the living earth.'
        ],
        summaryUz: 'Mahalliy xalqlarning an\'anaviy ekologik bilimlari (TEK): o\'rmonlarni o\'t qo\'yib tozalash (cultural burning), tabiatga iste\'molchi emas, balki o\'zaro teng munosabatda bo\'lish va o\'rmon yong\'inlarining oldini olish.',
        targetVocab: [
          {
            word: 'extractive',
            pos: 'adj.',
            phonetic: '/ɪkˈstræk.tɪv/',
            definitionEn: 'Relating to the withdrawal or removal of natural resources from the earth with little or no provision for replenishment.',
            translationUz: 'Qazib oluvchi, tabiatni shilib oluvchi',
            sampleSentence: 'The extractive economic model treats ancient forests as mere timber commodities.',
            collocation: 'extractive economy',
            synonym: 'exploitative'
          },
          {
            word: 'hubris',
            pos: 'n.',
            phonetic: '/ˈhjuː.brɪs/',
            definitionEn: 'Excessive pride or dangerous self-confidence; overweening arrogance.',
            translationUz: 'Kibr, haddidan oshgan g\'urur',
            sampleSentence: 'Human hubris assumed we could banish fire completely from living ecosystems.',
            collocation: 'scientific hubris',
            synonym: 'arrogance'
          },
          {
            word: 'suppression',
            pos: 'n.',
            phonetic: '/səˈpreʃ.ən/',
            definitionEn: 'The act of forcefully putting an end to something, especially stopping a fire or natural process.',
            translationUz: 'To\'xtatish, bostirish, bartaraf etish',
            sampleSentence: 'Decades of total fire suppression led to unprecedented fuel accumulations in Western forests.',
            collocation: 'fire suppression',
            synonym: 'quenching'
          },
          {
            word: 'reciprocity',
            pos: 'n.',
            phonetic: '/ˌres.ɪˈprɒs.ə.ti/',
            definitionEn: 'The practice of exchanging things with others for mutual benefit; a symbiotic balance.',
            translationUz: 'O\'zaro manfaatdorlik, muvozanat, teng almashinuv',
            sampleSentence: 'Indigenous land ethics center on reciprocal respect between humans and non-human species.',
            collocation: 'ecological reciprocity',
            synonym: 'mutual exchange'
          },
          {
            word: 'understory',
            pos: 'n.',
            phonetic: '/ˈʌn.dəˌstɔː.ri/',
            definitionEn: 'A layer of vegetation beneath the main canopy of a forest, including small trees, shrubs, and underbrush.',
            translationUz: 'O\'rmonning quyi qatlami (butalar, mayda o\'simliklar)',
            sampleSentence: 'Cultural burns clear the overgrown understory without scorching the crowns of towering pine trees.',
            collocation: 'dense understory',
            synonym: 'undergrowth'
          },
          {
            word: 'mosaic',
            pos: 'n.',
            phonetic: '/məʊˈzeɪ.ɪk/',
            definitionEn: 'A complex combination of diverse elements forming a greater whole.',
            translationUz: 'Mozaika, xilma-xil uyg\'unlik',
            sampleSentence: 'Patchy seasonal fires create a landscape mosaic that supports rich wildlife biodiversity.',
            collocation: 'habitat mosaic',
            synonym: 'patchwork'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u11-p2-q1',
            type: 'main-idea',
            question: 'What is the primary lesson modern conservation biologists are learning from Traditional Ecological Knowledge (TEK)?',
            options: [
              'That all forests should be completely logged and turned into parking lots.',
              'Total fire suppression was an ecological mistake; indigenous practices like low-intensity cultural burns sustainably manage forests and prevent catastrophic mega-fires.',
              'Forest fires are caused entirely by lightning striking plastic bottles.',
              'Modern science should ban all indigenous farming tools.'
            ],
            correctIndex: 1,
            explanationUz: 'G\'arbning yong\'inlarni mutlaq o\'chirish siyosati falokatli mega-yong\'inlarni keltirib chiqardi; tub aholining past haroratli nazoratli o\'t qo\'yish (cultural burning) amaliyoti o\'rmonlarni saqlashning eng to\'g\'ri yo\'lidir.'
          },
          {
            id: 'rrw3-u11-p2-q2',
            type: 'detail',
            question: 'Why did a century of total fire suppression lead to unprecedented forest mega-fires today?',
            options: [
              'Because fire engines stopped using water.',
              'Because extinguishing every small fire allowed massive fuel loads of dead wood and dry underbrush to accumulate uncontrollably.',
              'Because trees became flammable due to global pollution.',
              'Because rain stopped falling permanently.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda barcha kichik yong\'inlar o\'chirilishi natijasida o\'rmon tubida xavfli darajada ko\'p quruq o\'tin va butalar (fuel loads) to\'planib qolgani aytilgan.'
          },
          {
            id: 'rrw3-u11-p2-q3',
            type: 'vocabulary',
            question: 'The word "hubris" in paragraph 2 denotes:',
            options: ['Deep scientific wisdom', 'Dangerous arrogance and excessive self-confidence', 'Sudden panic', 'Extensive rainfall'],
            correctIndex: 1,
            explanationUz: '"Hubris" so\'zi tabiat qonunlarini mensimay, o\'z kuchiga keragidan ortiq bino qo\'yish, kibr ma\'nosini anglatadi.'
          },
          {
            id: 'rrw3-u11-p2-q4',
            type: 'inference',
            question: 'How does indigenous "cultural burning" actively benefit forest biodiversity?',
            options: [
              'It burns all trees down to the roots.',
              'It clears underbrush, recycles soil minerals, stimulates native seed germination, and creates diverse habitat mosaics.',
              'It scares away all birds.',
              'It eliminates the need for sunlight.'
            ],
            correctIndex: 1,
            explanationUz: 'Nazoratli o\'t qo\'yish tuproqni minerallar bilan boyitadi, dorivor o\'simliklar urug\'ini unib chiqishiga yordam beradi va xilma-xil mozaik yashash muhitlarini yaratadi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'problem-solution',
          title: 'Forest Wildfire Crisis: Industrial Suppression vs Indigenous TEK',
          sections: [
            {
              heading: 'Industrial Paradigm Failure',
              points: [
                'Viewed forest fires purely as destructive economic enemies of timber',
                'Century of total fire suppression allowed massive fuel loads of brush to accumulate',
                'Result: Uncontrollable modern apocalyptic mega-fires destroying ecosystems'
              ]
            },
            {
              heading: 'Indigenous TEK Solution',
              points: [
                'Traditional cultural burning: low-intensity, seasonal, patchy cool burns',
                'Safely eliminates understory fuel, stimulates native flora, and creates natural firebreaks',
                'Based on ecological reciprocity and long-term bioregional interdependence'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Should indigenous tribal elders be given legal co-management authority over national parks and public forests?',
          'What ancient traditions in your own country contain ecological wisdom that modern cities have forgotten?'
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 12: Business & Economics
  // ==========================================
  {
    id: 'rrw3-u12',
    unitNumber: 12,
    title: 'Business & Economics',
    subjectArea: 'Central Bank Digital Currencies & Degrowth Economics',
    themeDescriptionUz: 'Markaziy bank raqamli valyutalari (CBDC) va iqtisodiy o\'sish chegaralari (Degrowth Economics).',
    passages: [
      {
        id: 'rrw3-u12-p1',
        passageNumber: 1,
        title: 'Central Bank Digital Currencies (CBDCs): The Death of Cash?',
        subtitle: 'Programmable money, monetary policy transmission, and the panoptic surveillance state',
        themeCategory: 'Monetary Economics',
        level: 'C1',
        wordCount: 440,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'What is the difference between the digital numbers in your bank app and a sovereign digital dollar or euro issued directly by a central bank?',
          'If physical cash disappears completely, who will have the power to monitor or freeze your spending?'
        ],
        paragraphs: [
          'From the salt bars of ancient Rome to the gold-backed certificates of nineteenth-century London, the medium of exchange has continually mutated alongside technology. Today, paper banknotes and metal coins face imminent obsolescence as central banks representing over ninety percent of global GDP actively research, pilot, or deploy Central Bank Digital Currencies (CBDCs)—such as China’s digital yuan, the European Central Bank’s digital euro, and the Bahamas’ Sand Dollar.',
          'Unlike commercial bank deposits—which represent private liabilities of commercial lenders—a CBDC is a direct digital liability of a sovereign nation\'s central bank, functioning as risk-free legal tender. Central bankers tout immense operational advantages: near-instantaneous cross-border clearing, drastically reduced transaction friction, financial inclusion for unbanked populations, and frictionless monetary policy transmission.',
          'Perhaps most radically, CBDCs enable "programmable money." Central banks could theoretically program automated expiration dates on economic stimulus transfers to force immediate consumer spending during recessions, or deposit targeted emergency relief funds that can only be redeemed for essentials like groceries and medicine.',
          'However, the civil liberties perils of CBDCs are chilling. Unlike anonymous physical cash, a centralized digital ledger provides state authorities with an omniscient, panoptic gaze into every citizen’s financial transactions in real time. In the hands of authoritarian regimes, programmatic digital currency could be weaponized to choke political dissidence: a citizen attending an unauthorized peaceful protest could find their digital wallet automatically frozen, geofenced to prevent travel, or barred from purchasing high-speed rail tickets with the click of a bureaucrat\'s key.'
        ],
        summaryUz: 'Markaziy bank raqamli valyutalari (CBDC): naqd pulsiz jamiyat, "dasturlanadigan pul", pul-kredit siyosatining o\'ta tezkorligi hamda moliyaviy shaxsiy daxlsizlikning to\'liq yo\'qolishi xavfi.',
        targetVocab: [
          {
            word: 'obsolescence',
            pos: 'n.',
            phonetic: '/ˌɒb.səˈles.əns/',
            definitionEn: 'The process of becoming obsolete or out of date, and no longer used.',
            translationUz: 'Eskirish, iste\'moldan chiqish',
            sampleSentence: 'Paper cash is sliding into obsolescence as contactless mobile wallets dominate.',
            collocation: 'slide into obsolescence',
            synonym: 'outdatedness'
          },
          {
            word: 'panoptic',
            pos: 'adj.',
            phonetic: '/pænˈɒp.tɪk/',
            definitionEn: 'Showing or seeing everything at once; permitting a clear view of all parts.',
            translationUz: 'Panoptik, hamma narsani bir vaqtda to\'liq ko\'rib turuvchi',
            sampleSentence: 'A centralized CBDC ledger grants state regulators a panoptic view of consumer spending.',
            collocation: 'panoptic surveillance',
            synonym: 'all-seeing'
          },
          {
            word: 'programmable',
            pos: 'adj.',
            phonetic: '/ˈprəʊ.ɡræm.ə.bəl/',
            definitionEn: 'Able to be provided with coded instructions for the automatic performance of a task.',
            translationUz: 'Dasturlanadigan, shartli bajariladigan',
            sampleSentence: 'Programmable currency can be coded with expiration dates to compel rapid stimulus spending.',
            collocation: 'programmable money',
            synonym: 'code-directed'
          },
          {
            word: 'omniscient',
            pos: 'adj.',
            phonetic: '/ɒmˈnɪs.i.ənt/',
            definitionEn: 'Knowing everything; having complete or infinite knowledge.',
            translationUz: 'Hammanarsani biluvchi, cheksiz xabardor',
            sampleSentence: 'State officials wielded omniscient real-time tracking over private merchant accounts.',
            collocation: 'omniscient oversight',
            synonym: 'all-knowing'
          },
          {
            word: 'dissidence',
            pos: 'n.',
            phonetic: '/ˈdɪs.ɪ.dəns/',
            definitionEn: 'Protest against official policy; dissent or nonconformity.',
            translationUz: 'Muxoliflik, hukumat siyosatiga qarshilik',
            sampleSentence: 'Authoritarian regimes can exploit centralized digital money to extinguish political dissidence.',
            collocation: 'political dissidence',
            synonym: 'dissent'
          },
          {
            word: 'geofence',
            pos: 'v.',
            phonetic: '/ˈdʒiː.əʊ.fens/',
            definitionEn: 'To establish a virtual geographic boundary that triggers a response when a mobile device enters or leaves.',
            translationUz: 'Geografik chegarani belgilab bloklamoq',
            sampleSentence: 'The bank can geofence an activist\'s funds, preventing money from being spent outside their home town.',
            collocation: 'geofence a wallet',
            synonym: 'virtually boundary'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u12-p1-q1',
            type: 'main-idea',
            question: 'What is the primary tension between the economic utility and civil liberty risks of Central Bank Digital Currencies (CBDCs)?',
            options: [
              'Whether paper money can be made of waterproof plastic.',
              'CBDCs offer frictionless monetary policy and instant transactions, but risk total financial surveillance and political control over citizens\' spending.',
              'Why coins are too heavy to carry in leather pockets.',
              'Commercial banks refusing to connect to the internet.'
            ],
            correctIndex: 1,
            explanationUz: 'CBDC moliyaviy tizimni tezlashtirishi va samarali qilishi mumkin, biroq u davlatga har bir insonning pulini kuzatish, cheklash va siyosiy sabablarga ko\'ra muzlatish imkonini beruvchi xavfli vositadir.'
          },
          {
            id: 'rrw3-u12-p1-q2',
            type: 'detail',
            question: 'What unique capability does "programmable money" give central bankers according to paragraph 3?',
            options: [
              'The ability to turn money into physical gold instantly.',
              'Programming automated expiration dates to force consumer spending during recessions or restricting funds to specific essentials like food.',
              'Allowing citizens to print their own currency at home.',
              'Banning all credit cards.'
            ],
            correctIndex: 1,
            explanationUz: '3-paragrafda dasturlanadigan pulning amal qilish muddatini cheklash yoki uni faqat oziq-ovqat va dori-darmonga sarflanadigan qilib belgilash imkoni tushuntirilgan.'
          },
          {
            id: 'rrw3-u12-p1-q3',
            type: 'vocabulary',
            question: 'The word "panoptic" in paragraph 4 describes surveillance that is:',
            options: ['Blind and ineffective', 'All-seeing, totalizing, and monitoring every single detail', 'Conducted purely with sound', 'Very inexpensive'],
            correctIndex: 1,
            explanationUz: '"Panoptic" so\'zi barcha narsani birdek ko\'rib, to\'liq nazorat qilib turuvchi degan ma\'noni anglatadi.'
          },
          {
            id: 'rrw3-u12-p1-q4',
            type: 'inference',
            question: 'Why is physical cash considered a vital safeguard for civil liberties compared to CBDCs?',
            options: [
              'Because paper money never tears.',
              'Because physical cash transactions are decentralized, anonymous, and cannot be remotely deactivated or geofenced by state authorities.',
              'Because banks do not accept physical bills.',
              'Because gold coins never lose purchasing power.'
            ],
            correctIndex: 1,
            explanationUz: 'Naqd pul orqali amalga oshirilgan to\'lovlar anonim va markazlashmagan; uni hech qanday amaldor masofadan turib bir tugma bilan bloklab yoki o\'chirib qo\'ya olmaydi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Physical Cash vs Central Bank Digital Currencies (CBDCs)',
          sections: [
            {
              heading: 'Physical Cash Attributes',
              points: [
                'Completely anonymous, peer-to-peer, decentralized transactions',
                'Zero counterparty technological risk during power or network outages',
                'Cannot be remotely seized, expired, or geofenced by state bureaucrats'
              ]
            },
            {
              heading: 'CBDC Capabilities & Hazards',
              points: [
                'Frictionless monetary transmission, programmable stimulus expiration dates',
                'Financial inclusion for unbanked; instantaneous international settlement',
                'Panoptic state financial surveillance and risk of authoritarian weaponization'
              ]
            }
          ]
        },
        discussionPrompts: [
          'If your country offers a digital wallet that completely eliminates paper banknotes, would you support it?',
          'Should there be a constitutional human right to make anonymous cash payments?'
        ]
      },
      {
        id: 'rrw3-u12-p2',
        passageNumber: 2,
        title: 'Degrowth vs Green Growth: The Planetary Boundaries Paradox',
        subtitle: 'Decoupling fallacy, steady-state economics, and redefining human prosperity beyond GDP',
        themeCategory: 'Macroeconomics & Ecological Economics',
        level: 'C1',
        wordCount: 445,
        readingTimeMinutes: 3,
        preReadingQuestions: [
          'Can an economy grow exponentially forever on a finite planet with limited natural resources?',
          'Is Gross Domestic Product (GDP) a healthy measurement of genuine human wellbeing?'
        ],
        paragraphs: [
          'For nearly a century, orthodox macroeconomics treated compound Gross Domestic Product (GDP) growth as an indispensable moral imperative. High GDP growth was equated with employment generation, escalating living standards, and poverty alleviation. In the face of climate destabilization, mainstream institutions like the World Bank and OECD champion "Green Growth"—the proposition that technological innovation and renewable electrification will achieve "absolute decoupling," allowing economic output to grow indefinitely while environmental resource throughput and carbon emissions decline toward zero.',
          'However, a radical intellectual movement pioneered by ecological economists like Giorgos Kallis and Jason Hickel challenges this orthodoxy with a blunt diagnosis: "Degrowth." Degrowth theorists point to empirical ecological data demonstrating that absolute decoupling of GDP from aggregate material extraction (minerals, biomass, fossil fuels) is an empirical fantasy. Even clean technologies require titanic amounts of copper, lithium, nickel, and rare earths extracted at devastating environmental costs.',
          'Degrowth argues that compound growth on a finite planet is a physical impossibility governed by the laws of thermodynamics. Rather than an unmanaged recession, degrowth envisions a planned, democratic downscaling of resource and energy throughput in wealthy nations. The goal is to bring human economic metabolism back within safe planetary boundaries while simultaneously improving human flourishing.',
          'Degrowth advocates propose restructuring society: enacting shorter workweeks, universal basic services (free healthcare, transit, education), decommodifying housing, and replacing GDP with genuine wellbeing metrics like the Genuine Progress Indicator (GPI). In a world colliding with ecological tipping points, the defining civilizational task is learning to flourish without endless accumulation.'
        ],
        summaryUz: 'Degrowth (O\'sishni to\'xtatish) va Yashil o\'sish bahsi: cheklangan sayyorada cheksiz o\'sishning imkonsizligi, YIM o\'rniga insoniy farovonlik ko\'rsatkichlariga o\'tish va 4 kunlik ish haftasi.',
        targetVocab: [
          {
            word: 'decoupling',
            pos: 'n.',
            phonetic: '/diːˈkʌp.lɪŋ/',
            definitionEn: 'The action of separating two things that were previously linked together, especially economic growth from resource consumption.',
            translationUz: 'Ajratish, bog\'liqlikni uzish (iqtisodiyot va tabiat ziyonini)',
            sampleSentence: 'Green growth relies on the theoretical absolute decoupling of GDP from carbon emissions.',
            collocation: 'absolute decoupling',
            synonym: 'separation'
          },
          {
            word: 'throughput',
            pos: 'n.',
            phonetic: '/ˈθruː.pʊt/',
            definitionEn: 'The amount of material or items passing through a system or process from input to waste.',
            translationUz: 'Material oqimi, xomashyo aylanmasi',
            sampleSentence: 'Degrowth aims to downscale aggregate resource throughput across industrialized nations.',
            collocation: 'resource throughput',
            synonym: 'intake volume'
          },
          {
            word: 'metabolism',
            pos: 'n.',
            phonetic: '/məˈtæb.əl.ɪ.zəm/',
            definitionEn: 'The chemical processes occurring within an organism; the flow of energy and materials through an entire society.',
            translationUz: 'Metabolizm, moddiy almashinuv tizimi',
            sampleSentence: 'The social metabolism of rich nations exceeds planetary regenerative boundaries.',
            collocation: 'societal metabolism',
            synonym: 'energy processing'
          },
          {
            word: 'downscaling',
            pos: 'n.',
            phonetic: '/ˈdaʊnˌskeɪ.lɪŋ/',
            definitionEn: 'The reduction of something in size, scale, or extent.',
            translationUz: 'Ko\'lamini qisqartirish, kichraytirish',
            sampleSentence: 'The policy calls for a planned downscaling of high-pollution luxury consumption.',
            collocation: 'planned downscaling',
            synonym: 'reduction'
          },
          {
            word: 'decommodify',
            pos: 'v.',
            phonetic: '/diː.kəˈmɒd.ɪ.faɪ/',
            definitionEn: 'To remove something from the status of a commodity; to make goods or services available as public rights rather than market goods.',
            translationUz: 'Tijoratlashtirishdan chiqarmoq, umumiy huquqqa aylantirmoq',
            sampleSentence: 'Advocates seek to decommodify essential housing and healthcare.',
            collocation: 'decommodify public goods',
            synonym: 'make public'
          },
          {
            word: 'imperative',
            pos: 'n.',
            phonetic: '/ɪmˈper.ə.tɪv/',
            definitionEn: 'An essential or urgent thing; a vital duty or requirement.',
            translationUz: 'Kechiktirib bo\'lmas talab, shart, zaruriyat',
            sampleSentence: 'Restoring planetary climate stability has become an existential civilizational imperative.',
            collocation: 'moral imperative',
            synonym: 'necessity'
          }
        ],
        comprehensionQuiz: [
          {
            id: 'rrw3-u12-p2-q1',
            type: 'main-idea',
            question: 'What is the fundamental thesis of the "Degrowth" economic movement?',
            options: [
              'People should live without electricity in dark caves.',
              'Infinite compound GDP growth on a finite planet violates thermodynamic limits; wealthy nations must democratically downscale material throughput to achieve sustainable wellbeing.',
              'All factories should be owned by foreign governments.',
              'Money should be replaced by animal fur.'
            ],
            correctIndex: 1,
            explanationUz: 'Degrowth nazariyasi cheklangan Yer sayyorasida cheksiz iqtisodiy o\'sish qonunlarga zid ekanligini, boy mamlakatlar material sarfini kamaytirib, YIM o\'rniga insoniy farovonlikka e\'tibor qaratishi kerakligini ilgari suradi.'
          },
          {
            id: 'rrw3-u12-p2-q2',
            type: 'detail',
            question: 'Why do degrowth economists argue that "Green Growth" absolute decoupling is largely an empirical illusion?',
            options: [
              'Because green paints are too expensive.',
              'Because manufacturing clean technologies (EVs, solar panels, batteries) still requires colossal extraction of metals, rare earths, and mineral throughput.',
              'Because renewable energy generates too much ice.',
              'Because wind turbines stop the wind from blowing.'
            ],
            correctIndex: 1,
            explanationUz: '2-paragrafda yashil texnologiyalar (batareyalar, quyosh panellari) ham ulkan miqdordagi mis, litiy, nikel va metallarni qazib olishni talab qilishi keltirilgan.'
          },
          {
            id: 'rrw3-u12-p2-q3',
            type: 'vocabulary',
            question: 'The word "throughput" in paragraph 2 refers to:',
            options: [
              'The speed of internet downloads',
              'The total volume of energy and raw materials extracted, processed, and discarded by an economy',
              'The number of cars crossing a bridge',
              'The height of a building'
            ],
            correctIndex: 1,
            explanationUz: '"Throughput" iqtisodiyotga kirib keladigan, qayta ishlanadigan va chiqindiga aylanadigan jami xomashyo va energiya oqimini anglatadi.'
          },
          {
            id: 'rrw3-u12-p2-q4',
            type: 'inference',
            question: 'How does degrowth propose maintaining high living standards while scaling down material consumption?',
            options: [
              'By increasing overtime working hours to 80 hours a week.',
              'By introducing shorter workweeks, universal free public healthcare and transit, and prioritizing genuine human wellbeing over endless consumer accumulation.',
              'By closing all schools and universities.',
              'By abolishing paper books.'
            ],
            correctIndex: 1,
            explanationUz: 'Ish haftasini qisqartirish, bepul tibbiyot va ta\'lim, uy-joyni tijoratdan chiqarish orqali keraksiz iste\'mol poygasini to\'xtatib, hayot sifatini oshirish ko\'zda tutiladi.'
          }
        ],
        graphicOrganizer: {
          organizerType: 'compare-contrast',
          title: 'Green Growth Decoupling vs Ecological Degrowth',
          sections: [
            {
              heading: 'Green Growth Paradigm (Mainstream)',
              points: [
                'Maintains compound GDP growth as non-negotiable economic indicator',
                'Pursues "absolute decoupling" via electrification, efficiency, and tech innovation',
                'Market-based carbon taxes, renewable subsidies, and carbon credits'
              ]
            },
            {
              heading: 'Ecological Degrowth Paradigm',
              points: [
                'Argues infinite growth on a finite planet violates physics and thermodynamics',
                'Planned downscaling of energy/resource throughput in affluent nations',
                'Universal public services, shorter workweeks, and Genuine Progress metrics'
              ]
            }
          ]
        },
        discussionPrompts: [
          'Would you be willing to work a 4-day workweek if it meant consuming fewer luxury consumer goods?',
          'Can a modern capitalist nation survive politically if its government officially aims for zero percent GDP growth?'
        ]
      }
    ]
  }
];
