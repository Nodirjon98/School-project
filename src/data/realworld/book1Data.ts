import { RealWorldBook } from '../../types';
import { BOOK1_MORE_UNITS } from './book1MoreUnits';

export const RRW_BOOK_1: RealWorldBook = {
  id: 'rrw-book-1',
  bookNumber: 1,
  title: 'Reading for the Real World 1',
  edition: '4th Edition (Compass Publishing / Essential English)',
  targetLevel: 'Intermediate (B1)',
  cefrLevel: 'B1',
  descriptionUz: 'B1 darajadagi o\'quvchilar uchun akademik mutolaa, yangi akademik so\'zlar (NAWL) va tahliliy tafakkurni rivojlantiruvchi 12 ta ilmiy-ommabop unit.',
  coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
  totalUnits: 12,
  totalPassages: 24,
  totalTargetWords: 144,
  colorTheme: {
    primary: '#0284c7', // Sky 600
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    gradient: 'from-sky-600 to-indigo-700'
  },
  units: [
    {
      id: 'rrw1-u1',
      unitNumber: 1,
      title: 'Strange & Unusual',
      subjectArea: 'Anthropology & Folklore',
      themeDescriptionUz: 'G\'ayritabiiy hodisalar, insoniyatning omad va xurofotlarga bo\'lgan ishonchi hamda ilmiy tushuntirishlar.',
      passages: [
        {
          id: 'rrw1-u1-p1',
          passageNumber: 1,
          title: 'American Superstitions',
          subtitle: 'Why rational modern people still knock on wood and fear Friday the 13th',
          themeCategory: 'Anthropology',
          level: 'B1',
          wordCount: 420,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Do you or people you know have any rituals or habits to bring good luck?',
            'Why do you think superstitions survive even in scientifically advanced societies?'
          ],
          paragraphs: [
            'Do you consider yourself superstitious? While many modern Americans pride themselves on being rational, scientific, and realistic, statistical surveys reveal a very different reality. In fact, a recent nationwide poll discovered that over forty percent of Americans openly admit to harboring superstitious beliefs, and even twelve percent of those who claim not to be superstitious confess that they regularly knock on wood to prevent bad luck.',
            'Among the most enduring American good-luck superstitions is the custom of "knocking on wood." When someone makes a statement expressing satisfaction with their health or fortune—such as "I have never broken a bone"—they frequently tap a wooden table or object immediately afterward. The psychological motive is to avoid tempting fate or arrogance. Anthropologists suggest this practice originates from ancient Celtic and pagan European beliefs that protective spirits and woodland deities lived inside trees, and touching the wood was an appeal for their sanctuary and blessing.',
            'Other widespread positive rituals include picking up a penny that is lying heads-up on the ground, carrying a rabbit\'s foot for protection, and searching through clover patches for rare four-leaf specimens. On the other hand, bad-luck superstitions are equally deeply rooted in daily culture. Walking directly under an open ladder, breaking a mirror (believed to bring seven consecutive years of sorrow), and encountering a black cat crossing one\'s path still provoke genuine apprehension in many otherwise sensible citizens.',
            'Why do these ancient beliefs persist in our era of artificial intelligence, smartphones, and space exploration? Psychologists explain that superstitions provide people with an illusion of psychological control during times of uncertainty, anxiety, and stress. When facing challenging life events such as university exams, job interviews, or medical diagnoses, performing a minor, harmless ritual gives individuals a momentary sense of reassurance and emotional comfort.'
          ],
          summaryUz: 'Ushbu matnda zamonaviy Amerika jamiyatida xurofotlar (superstitions) va ularning saqlanib qolish sabablari tahlil qilinadi. Ko\'plab insonlar o\'zlarini ratsional deb bilsa-da, "yog\'ochni taqillatish" (knocking on wood), to\'rt yaproqli beda terish yoki 13-sanadan ehtiyot bo\'lish kabi odatlarga amal qilishadi. Psixologlarga ko\'ra, bu noaniqlik va stressli vaziyatlarda insonlarga xotirjamlik hamda nazorat hissini taqdim etadi.',
          targetVocab: [
            {
              word: 'superstition',
              pos: 'n.',
              phonetic: '/ˌsuː.pɚˈstɪʃ.ən/',
              definitionEn: 'A belief that particular events cannot be explained by reason or science, or that certain actions bring good or bad luck.',
              translationUz: 'xurofot, irim-sirim',
              sampleSentence: 'According to local superstition, breaking a mirror brings seven years of misfortune.',
              collocation: 'harbor a superstition'
            },
            {
              word: 'rational',
              pos: 'adj.',
              phonetic: '/ˈræʃ.ən.əl/',
              definitionEn: 'Based on clear thought and reason rather than on emotions or beliefs.',
              translationUz: 'oqilona, mantiqiy, aqlga tayanadigan',
              sampleSentence: 'Scientists always search for rational explanations rather than supernatural causes.',
              collocation: 'rational explanation'
            },
            {
              word: 'sanctuary',
              pos: 'n.',
              phonetic: '/ˈsæŋk.tʃu.er.i/',
              definitionEn: 'Protection or a safe place, especially from danger or pursuit.',
              translationUz: 'boshpana, panoh, himoya maskani',
              sampleSentence: 'Ancient wanderers believed sacred groves provided sanctuary from evil spirits.',
              collocation: 'seek sanctuary'
            },
            {
              word: 'specimen',
              pos: 'n.',
              phonetic: '/ˈspes.ə.mən/',
              definitionEn: 'A single example of something that shows what the whole group or class is like.',
              translationUz: 'namuna, nusxa',
              sampleSentence: 'Finding a four-leaf clover specimen in the wild is extremely uncommon.',
              collocation: 'rare specimen'
            },
            {
              word: 'apprehension',
              pos: 'n.',
              phonetic: '/ˌæp.rəˈhen.ʃən/',
              definitionEn: 'A feeling of worry or fear that something unpleasant might happen.',
              translationUz: 'xavotir, qo\'rquv, andisha',
              sampleSentence: 'She felt great apprehension before walking into the crucial job interview.',
              collocation: 'feeling of apprehension'
            },
            {
              word: 'reassurance',
              pos: 'n.',
              phonetic: '/ˌriː.əˈʃʊr.əns/',
              definitionEn: 'Words or actions that make someone feel less worried or uncertain.',
              translationUz: 'tasalli, xotirjamlik, ko\'ngil taskini',
              sampleSentence: 'The doctor offered calm reassurance that the patient would make a full recovery.',
              collocation: 'provide reassurance'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u1-p1-q1',
              type: 'main-idea',
              question: 'What is the primary main idea of the reading passage?',
              options: [
                'Modern Americans have completely abandoned ancient superstitions in favor of science.',
                'Superstitions persist in modern society because they provide emotional reassurance and an illusion of control.',
                'Breaking a mirror has been scientifically proven to alter a person\'s fortune.',
                'Knocking on wood was invented by smartphone manufacturers to reduce stress.'
              ],
              correctIndex: 1,
              explanationUz: 'Matnning asosiy g\'oyasi: Zamonaviy jamiyatda ham xurofotlar saqlanib qolayotganining sababi — ular noaniqlik va stress davrida ruhiy taskin va nazorat hissini beradi.'
            },
            {
              id: 'rrw1-u1-p1-q2',
              type: 'detail',
              question: 'According to anthropologists, where did the custom of "knocking on wood" originate?',
              options: [
                'From ancient Celtic and pagan beliefs that spirits lived inside trees',
                'From nineteenth-century American railway workers building wooden tracks',
                'From sailors who knocked on ship hulls to check for leaks',
                'From medieval doctors testing the quality of wooden medicine boxes'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "Anthropologists suggest this practice originates from ancient Celtic and pagan European beliefs that protective spirits and woodland deities lived inside trees".'
            },
            {
              id: 'rrw1-u1-p1-q3',
              type: 'inference',
              question: 'What can be inferred about people who claim they are NOT superstitious?',
              options: [
                'They never experience any stress or anxiety in daily life.',
                'Some of them still perform superstitious rituals unconsciously or out of habit.',
                'They are banned from taking university exams or medical tests.',
                'They know more about botany and clover specimens than others.'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda 12% xurofotga ishonmayman deydiganlar ham yog\'ochni taqillatishi ko\'rsatilgan, demak ularning ba\'zilari odat yuzasidan bu rasm-rusumlarni bajaradilar.'
            },
            {
              id: 'rrw1-u1-p1-q4',
              type: 'vocabulary',
              question: 'In paragraph 4, the phrase "illusion of psychological control" most likely means:',
              options: [
                'A scientific medical machine that controls brain waves',
                'A false sense of being in charge of an unpredictable situation',
                'A magic trick performed on a theater stage',
                'A legal agreement signed between doctors and patients'
              ],
              correctIndex: 1,
              explanationUz: '"Illusion of psychological control" — oldindan aytib bo\'lmaydigan vaziyatda inson o\'zini vaziyat ustidan hukmrondek his qilishi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'Superstitions: Origin, Practice, and Psychological Cause',
            sections: [
              {
                heading: 'Underlying Cause',
                points: [
                  'Life events bring unpredictability, anxiety, and danger.',
                  'Ancient traditions passed down through folklore and Celtic beliefs.'
                ]
              },
              {
                heading: 'Observed Actions',
                points: [
                  'Knocking on wood after boasting.',
                  'Picking up heads-up pennies and four-leaf clovers.',
                  'Avoiding ladders, broken mirrors, and black cats.'
                ]
              },
              {
                heading: 'Psychological Effect',
                points: [
                  'Provides an illusion of control over fate.',
                  'Supplies emotional reassurance and temporary stress reduction.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think believing in good luck can actually boost someone\'s performance on an exam?',
            'How do cultural superstitions differ between your country and Western societies?'
          ]
        },
        {
          id: 'rrw1-u1-p2',
          passageNumber: 2,
          title: 'Bigfoot: Legend or Undiscovered Primate?',
          subtitle: 'Evaluating eyewitness testimony, physical footprints, and cryptographic science',
          themeCategory: 'Cryptid Zoology',
          level: 'B1',
          wordCount: 440,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Have you ever heard of the Yeti or Sasquatch stories in North America and Central Asia?',
            'What level of scientific evidence is necessary to prove the existence of a new large animal?'
          ],
          paragraphs: [
            'For centuries, Indigenous peoples inhabiting the Pacific Northwest of North America preserved vivid oral legends describing massive, hair-covered humanoid creatures roaming deep in temperate rainforests. In modern times, this elusive entity is commonly known as "Sasquatch" or "Bigfoot." Enthusiasts describe it as an upright-walking bipedal primate standing between seven and ten feet tall, emitting foul musky odors, and leaving enormous footprints measuring up to twenty-four inches in length.',
            'The most iconic piece of alleged evidence remains the famous 1967 Patterson-Gimlin film clip recorded in northern California. The brief footage depicts a large, furry creature striding gracefully across a gravel creek bed, pausing momentarily to turn its head toward the camera before disappearing into dense timber. Supporters argue that the fluid muscular motion, arm-to-leg proportions, and walking gait could not have been simulated by a man in a costume given the Hollywood special effects available in the 1960s.',
            'Nevertheless, mainstream biological scientists and zoologists remain staunchly skeptical. They emphasize that in more than a century of extensive logging, hunting, highway construction, and recreational camping across American forests, not a single authentic bone, skeleton, hair specimen, or carcass of a Bigfoot has ever been retrieved. Furthermore, modern forensic analysis of purported Bigfoot hair and tissue samples repeatedly reveals them to belong to black bears, wolves, or domestic dogs.',
            'Is Bigfoot simply a persistent cultural folklore fed by mistaken identities and deliberate commercial hoaxes, or could a relict population of prehistoric apes—such as the extinct Gigantopithecus—survive hidden in remote wilderness? Until verifiable physical specimens undergo peer-reviewed scientific scrutiny, Bigfoot will remain confined to the fascinating realm of cryptozoology.'
          ],
          summaryUz: 'Ushbu darsda Shimoliy Amerikaning mashhur "Bigfoot" (Sasquatch) afsonasi va unga tegishli ilmiy dalillar tahlil qilinadi. Patterson-Gimlin videoyozuvi va izlar bor bo\'lsa-da, rasmiy biologiya fanida birorta ham suyak, jasad yoki DNK namunasi topilmagani sababli u ilmiy kashfiyot emas, balki folklor sifatida baholanadi.',
          targetVocab: [
            {
              word: 'bipedal',
              pos: 'adj.',
              phonetic: '/baɪˈpiː.dəl/',
              definitionEn: 'Using only two legs for walking.',
              translationUz: 'ikki oyoqda yuradigan',
              sampleSentence: 'Humans and birds are among the few naturally bipedal creatures on Earth.',
              collocation: 'bipedal creature'
            },
            {
              word: 'elusive',
              pos: 'adj.',
              phonetic: '/iˈluː.sɪv/',
              definitionEn: 'Difficult to describe, find, achieve, or catch.',
              translationUz: 'tutqich bermas, topilishi qiyin, yashirin',
              sampleSentence: 'The snow leopard is an elusive predator living in high mountain peaks.',
              collocation: 'elusive creature'
            },
            {
              word: 'skeptical',
              pos: 'adj.',
              phonetic: '/ˈskep.tɪ.kəl/',
              definitionEn: 'Doubting that something is true or useful.',
              translationUz: 'shubhali, ishonchsiz, skeptik',
              sampleSentence: 'The professor remained highly skeptical of the student\'s sensational claims.',
              collocation: 'staunchly skeptical'
            },
            {
              word: 'carcass',
              pos: 'n.',
              phonetic: '/ˈkɑːr.kəs/',
              definitionEn: 'The dead body of an animal, especially a large one.',
              translationUz: 'hayvon murdasi, o\'laksa, jasad',
              sampleSentence: 'Vultures circled high above the abandoned animal carcass in the desert.',
              collocation: 'animal carcass'
            },
            {
              word: 'scrutiny',
              pos: 'n.',
              phonetic: '/ˈskruː.tən.i/',
              definitionEn: 'The careful and detailed examination of something in order to get information about it.',
              translationUz: 'puxta tahlil, sinchkovlik bilan tekshirish',
              sampleSentence: 'The newly discovered fossil must undergo rigorous scientific scrutiny.',
              collocation: 'undergo scrutiny'
            },
            {
              word: 'purported',
              pos: 'adj.',
              phonetic: '/pɚˈpɔːr.tɪd/',
              definitionEn: 'Said to be true or to be something, although there is no proof.',
              translationUz: 'go\'yoki shunday deb da\'vo qilingan, taxminiy',
              sampleSentence: 'DNA testing revealed that the purported alien artifact was merely common volcanic rock.',
              collocation: 'purported evidence'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u1-p2-q1',
              type: 'main-idea',
              question: 'Why do mainstream zoologists doubt the existence of Bigfoot?',
              options: [
                'Because indigenous peoples never had legends about forests',
                'Because despite extensive human activity, no physical skeleton or carcass has ever been found',
                'Because cameras did not exist before the year 1990',
                'Because black bears cannot survive in North America'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy dalil: O\'rmonlarda yuz yildan ortiq vaqt davomida faoliyat olib borilgan bo\'lsa-da, bitta ham suyak yoki jasad topilmagan.'
            },
            {
              id: 'rrw1-u1-p2-q2',
              type: 'detail',
              question: 'What did laboratory forensic testing usually show about alleged Bigfoot hair samples?',
              options: [
                'They were proven to come from an extraterrestrial origin.',
                'They belonged to familiar animals like bears, wolves, or domestic dogs.',
                'They matched human DNA with 100% precision.',
                'They were made of ancient plastic polymers.'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "modern forensic analysis of purported Bigfoot hair and tissue samples repeatedly reveals them to belong to black bears, wolves, or domestic dogs".'
            },
            {
              id: 'rrw1-u1-p2-q3',
              type: 'inference',
              question: 'What made the 1967 Patterson-Gimlin film convincing to supporters?',
              options: [
                'The creature spoke directly into an audio microphone.',
                'The fluid muscular motion and proportions seemed too advanced for 1960s costumes.',
                'It was signed and verified by the President of the United States.',
                'The video was recorded inside a high-security university laboratory.'
              ],
              correctIndex: 1,
              explanationUz: 'Tarafdorlar 1960-yillardagi kostyumlar darajasida bunday silliq muskullar harakati va gavda nisbatlarini soxtalashtirib bo\'lmasligini aytishadi.'
            },
            {
              id: 'rrw1-u1-p2-q4',
              type: 'vocabulary',
              question: 'What does the word "elusive" mean in the first paragraph?',
              options: [
                'Extremely dangerous and aggressive',
                'Difficult to see, locate, or capture',
                'Living exclusively under ocean water',
                'Capable of flying through the air'
              ],
              correctIndex: 1,
              explanationUz: '"Elusive" so\'zi — ko\'zga tashlanmaydigan, tutib yoki topib bo\'lmaydigan degan ma\'noni beradi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Bigfoot Debate: Evidence for vs. Scientific Skepticism',
            sections: [
              {
                heading: 'Arguments for Existence (Believers)',
                points: [
                  'Centuries of Indigenous oral history and folklore.',
                  'Patterson-Gimlin footage showing natural primate locomotion.',
                  'Plaster casts of massive footprints with anatomical dermal ridges.'
                ]
              },
              {
                heading: 'Scientific Counter-Evidence (Skeptics)',
                points: [
                  'Zero biological remains (no bones, skulls, or carcasses found).',
                  'DNA tests confirm hair samples belong to bears, dogs, or cattle.',
                  'Extensive commercial hoaxes and fake footprint stompers.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think modern trail cameras and satellite mapping make it impossible for large undiscovered animals to exist?',
            'Why are humans so fascinated by mystery creatures like Bigfoot and the Loch Ness Monster?'
          ]
        }
      ]
    },
    {
      id: 'rrw1-u2',
      unitNumber: 2,
      title: 'Computers & Technology',
      subjectArea: 'Information Technology & Cyberculture',
      themeDescriptionUz: 'Internetning paydo bo\'lish tarixi, global aloqa inqilobi va videoo\'yinlar madaniyatining jamiyatga ta\'siri.',
      passages: [
        {
          id: 'rrw1-u2-p1',
          passageNumber: 1,
          title: 'The History of the Internet',
          subtitle: 'From Cold War military communication network to planetary digital nervous system',
          themeCategory: 'Technology',
          level: 'B1',
          wordCount: 435,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'How many hours a day do you rely on internet connectivity?',
            'Do you know who invented the World Wide Web and why it was created?'
          ],
          paragraphs: [
            'It is nearly impossible to imagine contemporary civilization without the internet. We rely on it for international banking, navigation, news broadcast, academic research, and personal correspondence. However, the genesis of this planetary infrastructure was not commercial entertainment or social networking, but national defense during the Cold War in the late 1960s.',
            'Fearing that a single nuclear strike could annihilate conventional telephone networks, the United States Department of Defense\'s Advanced Research Projects Agency (DARPA) funded an experimental project called ARPANET. The key technological breakthrough was "packet switching." Instead of relying on a fragile continuous telephone circuit, packet switching segmented data into small electronic chunks that traveled independently across multiple interconnected computers before reassembling seamlessly at the destination.',
            'In October 1969, the first transmission occurred between computer laboratories at UCLA and Stanford University. Researchers attempted to type the word "LOGIN"; the system crashed after transmitting only the first two letters, "LO," but the revolutionary proof of concept had succeeded. By the early 1980s, the development of universal standardized transmission protocols (TCP/IP) allowed disparate computer networks worldwide to communicate with each other, giving birth to the true "Internet."',
            'The crucial democratization of this network occurred in 1989 when British computer scientist Tim Berners-Lee, working at the CERN particle physics laboratory in Switzerland, invented the World Wide Web. By introducing hyperlinks, web browsers, and HTML code, Berners-Lee transformed a complex command-line tool into an intuitive visual medium. Crucially, CERN released the technology into the public domain without patent royalties, sparking an unprecedented global information explosion.'
          ],
          summaryUz: 'Ushbu dars internetning kelib chiqish tarixini bayon qiladi. 1960-yillarda Sovuq urush davrida AQSh Mudofaa vazirligi (DARPA) tomonidan ARPANET loyihasi boshlangan. Paketlarni uzatish va TCP/IP protokollari asosida kompyuterlar bog\'langan. 1989-yilda esa Tim Berners-Lee World Wide Web (WWW) va gipermatnni ixtiro qilib, internetni har bir oddiy inson foydalana oladigan global maydonga aylantirdi.',
          targetVocab: [
            {
              word: 'genesis',
              pos: 'n.',
              phonetic: '/ˈdʒen.ə.sɪs/',
              definitionEn: 'The origin or beginning of something, especially when it is complex.',
              translationUz: 'ibtidolanish, kelib chiqish, paydo bo\'lish',
              sampleSentence: 'The genesis of the space program began with early military rocketry.',
              collocation: 'genesis of an idea'
            },
            {
              word: 'annihilate',
              pos: 'v.',
              phonetic: '/əˈnaɪ.ə.leɪt/',
              definitionEn: 'To destroy something completely so that nothing is left.',
              translationUz: 'butunlay yakson qilmoq, yo\'q qilib tashlamoq',
              sampleSentence: 'The tornado annihilated several small towns along the coastal plains.',
              collocation: 'completely annihilate'
            },
            {
              word: 'disparate',
              pos: 'adj.',
              phonetic: '/ˈdɪs.pɚ.ət/',
              definitionEn: 'Different in every way and not allowing comparison.',
              translationUz: 'har xil, bir-biridan farqli, mos kelmaydigan',
              sampleSentence: 'The software integrates data from disparate banking systems into one screen.',
              collocation: 'disparate elements'
            },
            {
              word: 'protocol',
              pos: 'n.',
              phonetic: '/ˈproʊ.t̬ə.kɑːl/',
              definitionEn: 'A standard set of rules and instructions for transmitting data between computers.',
              translationUz: 'qoidalar to\'plami, aloqa protokoli',
              sampleSentence: 'TCP/IP is the foundational protocol that enables devices to share packets over the internet.',
              collocation: 'transmission protocol'
            },
            {
              word: 'democratization',
              pos: 'n.',
              phonetic: '/dɪˌmɑː.krə.t̬əˈzeɪ.ʃən/',
              definitionEn: 'The process of making something accessible to everyone regardless of status.',
              translationUz: 'ommaboplashtirish, barcha uchun ochiq qilish',
              sampleSentence: 'The democratization of knowledge was accelerated by public libraries and the web.',
              collocation: 'democratization of technology'
            },
            {
              word: 'unprecedented',
              pos: 'adj.',
              phonetic: '/ʌnˈpres.ə.den.t̬ɪd/',
              definitionEn: 'Never having happened or existed in the past.',
              translationUz: 'misli ko\'rilmagan, tarixda uchramagan',
              sampleSentence: 'The smartphone era caused an unprecedented rise in mobile communications.',
              collocation: 'unprecedented growth'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u2-p1-q1',
              type: 'main-idea',
              question: 'What is the primary focus of this reading text?',
              options: [
                'How social media advertising ruined the original internet',
                'The technological and historical evolution of the internet from military defense to the World Wide Web',
                'Why Tim Berners-Lee became the wealthiest man in modern history',
                'The failure of California universities to build reliable computers'
              ],
              correctIndex: 1,
              explanationUz: 'Matn internetning harbiy mudofaa tarmog\'idan global World Wide Web ga aylanishigacha bo\'lgan tarixiy va texnologik rivojlanishini yoritadi.'
            },
            {
              id: 'rrw1-u2-p1-q2',
              type: 'detail',
              question: 'What was the revolutionary concept of "packet switching"?',
              options: [
                'Breaking continuous data into small chunks that travel independently and reassemble at the end',
                'Hiring military couriers to deliver physical magnetic tapes between cities',
                'Using television antennas to broadcast encrypted Morse code messages',
                'Connecting all telephones in America to one giant battery'
              ],
              correctIndex: 0,
              explanationUz: 'Paketlarni uzatish — ma\'lumotni kichik bo\'laklarga bo\'lib, har xil yo\'llar orqali jo\'natish va manzilda qayta yig\'ish tizimidir.'
            },
            {
              id: 'rrw1-u2-p1-q3',
              type: 'detail',
              question: 'Why was CERN\'s decision regarding the World Wide Web in 1989–1993 so critical?',
              options: [
                'They charged heavy monthly fees to all European governments.',
                'They released the technology into the public domain without demanding patent royalties.',
                'They banned American scientists from using hyperlinks.',
                'They forced all computers to use the French language.'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "CERN released the technology into the public domain without patent royalties, sparking an unprecedented global information explosion."'
            },
            {
              id: 'rrw1-u2-p1-q4',
              type: 'vocabulary',
              question: 'In the passage, the word "genesis" is closest in meaning to:',
              options: [
                'Financial price',
                'Beginning or origin',
                'Technical failure',
                'Military battle'
              ],
              correctIndex: 1,
              explanationUz: '"Genesis" so\'zi ibtido, kelib chiqish (beginning or origin) ma\'nosini beradi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'timeline',
            title: 'Chronological Milestones in Internet History',
            sections: [
              {
                heading: 'Late 1960s (ARPANET Creation)',
                points: [
                  'US Defense Department creates ARPANET to resist nuclear disruption.',
                  'Packet switching invented as an alternative to fragile telephone lines.'
                ]
              },
              {
                heading: '1969 (First Successful Transmission)',
                points: [
                  'UCLA to Stanford connection transmits "LO" before system crash.',
                  'First successful node-to-node computer data transfer.'
                ]
              },
              {
                heading: '1980s (TCP/IP Standardization)',
                points: [
                  'Standard protocols allow disparate networks to interconnect globally.'
                ]
              },
              {
                heading: '1989–1993 (The World Wide Web Explosion)',
                points: [
                  'Tim Berners-Lee invents HTML, URL, and web browsers at CERN.',
                  'Released freely to the public domain, triggering universal access.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'What would happen to the global economy if internet connectivity stopped for 48 hours?',
            'Do you think Tim Berners-Lee was right to give the Web away for free rather than patenting it?'
          ]
        },
        {
          id: 'rrw1-u2-p2',
          passageNumber: 2,
          title: 'Gamers: Image and Reality',
          subtitle: 'Debunking outdated stereotypes and examining the cognitive benefits of gaming',
          themeCategory: 'Sociology & Cognitive Science',
          level: 'B1',
          wordCount: 420,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'What image comes to your mind when someone uses the word "gamer"?',
            'Can video games improve spatial awareness, reaction speed, or teamwork?'
          ],
          paragraphs: [
            'For decades, popular media portrayed the typical video gamer as an antisocial teenage boy isolated in a dark basement, surviving on junk food and neglecting his academic and social responsibilities. However, contemporary demographic research conducted across North America, Europe, and Asia reveals that this unflattering caricature is vastly outdated and inaccurate.',
            'According to the Entertainment Software Association, the average gamer today is over thirty-three years old, and approximately forty-eight percent of all video game enthusiasts are female. Video games have evolved far beyond simple teenage distractions; they now constitute a three-hundred-billion-dollar global entertainment industry that surpasses Hollywood cinema and commercial music combined.',
            'Furthermore, cognitive neuroscientists are discovering surprising cognitive benefits associated with moderate gaming. Action and strategy games require players to navigate complex three-dimensional environments, manage scarce virtual resources, and execute rapid split-second decisions under pressure. Clinical studies demonstrate that regular gamers exhibit superior visual spatial resolution, faster reaction reflexes, and enhanced multitasking abilities compared to non-gamers.',
            'Cooperative multiplayer games also foster leadership, communication, and cross-cultural teamwork. Thousands of players coordinate complex tactical strategies with teammates residing on different continents. While excessive screen addiction and physical sedentary habits remain legitimate medical concerns, the modern consensus recognizes gaming as a legitimate cognitive art form and social bridge.'
          ],
          summaryUz: 'Ushbu darsda videoo\'yinlar va geymerlar haqidagi stereotiplar fosh etiladi. Bugungi kunda o\'rtacha geymer yoshi 33 yoshdan oshgan va o\'yinchilarning 48 foizi ayollardir. Neyrobiologik tadqiqotlar shuni ko\'rsatadiki, me\'yoridagi o\'yinlar fazoviy fikrlash, tezkor qaror qabul qilish va jamoaviy muloqotni rivojlantiradi.',
          targetVocab: [
            {
              word: 'caricature',
              pos: 'n.',
              phonetic: '/ˈker.ɪ.kə.tʃʊr/',
              definitionEn: 'A description or depiction that exaggerates certain characteristics to make it look ridiculous.',
              translationUz: 'bo\'rttirilgan timsol, karikatura, kulgili qiyofa',
              sampleSentence: 'The comedian presented a hilarious caricature of a stressed schoolmaster.',
              collocation: 'outdated caricature'
            },
            {
              word: 'demographic',
              pos: 'adj.',
              phonetic: '/ˌdem.əˈɡræf.ɪk/',
              definitionEn: 'Relating to human populations and their characteristics like age, gender, and income.',
              translationUz: 'demografik, aholi tarkibiga oid',
              sampleSentence: 'Marketing teams analyze demographic shifts to target advertising campaigns.',
              collocation: 'demographic research'
            },
            {
              word: 'cognitive',
              pos: 'adj.',
              phonetic: '/ˈkɑːɡ.nə.t̬ɪv/',
              definitionEn: 'Connected with the mental processes of understanding, learning, and remembering.',
              translationUz: 'kognitiv, aqliy, idrokka oid',
              sampleSentence: 'Solving complex puzzles helps prevent age-related cognitive decline.',
              collocation: 'cognitive abilities'
            },
            {
              word: 'sedentary',
              pos: 'adj.',
              phonetic: '/ˈsed.ən.ter.i/',
              definitionEn: 'Involving little exercise or physical activity and much sitting.',
              translationUz: 'kamharakat, o\'tirib ishlaydigan',
              sampleSentence: 'Office workers who lead a sedentary lifestyle face higher risks of back strain.',
              collocation: 'sedentary habits'
            },
            {
              word: 'consensus',
              pos: 'n.',
              phonetic: '/kənˈsen.səs/',
              definitionEn: 'A generally accepted opinion or decision among a group of people.',
              translationUz: 'yakdillik, umumiy konsensus, umum e\'tirof etilgan fikr',
              sampleSentence: 'The medical consensus confirms that regular exercise improves heart vitality.',
              collocation: 'reach a consensus'
            },
            {
              word: 'unflattering',
              pos: 'adj.',
              phonetic: '/ʌnˈflæt̬.ɚ.ɪŋ/',
              definitionEn: 'Making someone or something look worse or less attractive than they really are.',
              translationUz: 'noo\'rin, yoqimsiz qilib ko\'rsatadigan',
              sampleSentence: 'The newspaper printed an unflattering portrait of the disgraced politician.',
              collocation: 'unflattering image'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u2-p2-q1',
              type: 'main-idea',
              question: 'What is the main finding regarding modern gamers presented in the text?',
              options: [
                'Gaming is exclusively popular among male teenagers who fail school.',
                'Modern gamers represent a diverse demographic, and moderate gaming provides measurable cognitive benefits.',
                'Video games have generated less revenue than silent black-and-white films.',
                'Doctors recommend that children play computer games for twenty hours daily.'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy g\'oya: Zamonaviy o\'yinchilar demografik jihatdan rang-barang bo\'lib, me\'yordagi o\'yinlar idrok va fikrlashga ijobiy foyda keltiradi.'
            },
            {
              id: 'rrw1-u2-p2-q2',
              type: 'detail',
              question: 'What percentage of video game players are female today?',
              options: [
                'Less than 5 percent',
                'Approximately 48 percent',
                'Exactly 92 percent',
                'Zero percent'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "approximately forty-eight percent of all video game enthusiasts are female".'
            },
            {
              id: 'rrw1-u2-p2-q3',
              type: 'detail',
              question: 'Which cognitive advantage is specifically mentioned as being developed by strategy and action games?',
              options: [
                'Superior visual spatial resolution and faster reflexes',
                'The ability to survive without drinking water',
                'Permanent photographic memorization of dictionaries',
                'Instant fluency in ancient Latin'
              ],
              correctIndex: 0,
              explanationUz: 'Keltirilishicha: "gamers exhibit superior visual spatial resolution, faster reaction reflexes, and enhanced multitasking abilities".'
            },
            {
              id: 'rrw1-u2-p2-q4',
              type: 'vocabulary',
              question: 'What does the word "sedentary" mean in the last paragraph?',
              options: [
                'Extremely energetic and athletic',
                'Involving excessive sitting and lack of physical exercise',
                'Expensive and luxurious',
                'Highly dangerous and toxic'
              ],
              correctIndex: 1,
              explanationUz: '"Sedentary" — jismoniy harakatsiz, asosan o\'tirib vaqt o\'tkazish degan ma\'noni anglatadi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Video Gaming: Outdated Stereotypes vs Modern Scientific Reality',
            sections: [
              {
                heading: 'Outdated Cultural Stereotype',
                points: [
                  'Antisocial teenage boys isolated in basements.',
                  'Total waste of intellectual time and energy.',
                  'Destructive to social skills and health.'
                ]
              },
              {
                heading: 'Modern Statistical & Cognitive Reality',
                points: [
                  'Average player is over 33 years old; 48% are female.',
                  'Surpasses Hollywood and music industries ($300B revenue).',
                  'Improves 3D spatial awareness, visual acuity, and reflexes.',
                  'Encourages global cross-cultural teamwork and leadership.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you consider esports (competitive gaming) a real sport comparable to chess or racing?',
            'How can parents prevent gaming addiction in children while still allowing cognitive benefits?'
          ]
        }
      ]
    },
    {
      id: 'rrw1-u3',
      unitNumber: 3,
      title: 'Health & Medicine',
      subjectArea: 'Physiology & Public Health',
      themeDescriptionUz: 'Inson salomatligi, tana massasi indeksi (BMI) ning cheklovlari va bosh og\'riqlarining tibbiy sabablari.',
      passages: [
        {
          id: 'rrw1-u3-p1',
          passageNumber: 1,
          title: 'Body Mass and Weight: Rethinking the BMI',
          subtitle: 'Why the 200-year-old Body Mass Index formula fails modern athletes and diverse populations',
          themeCategory: 'Public Health',
          level: 'B1',
          wordCount: 430,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Have you ever calculated your Body Mass Index (BMI)?',
            'Can a muscular athlete be categorized as "overweight" by standard charts?'
          ],
          paragraphs: [
            'For nearly a century, general practitioners, life insurance corporations, and national health authorities have relied on a single numerical metric to categorize human physical fitness: the Body Mass Index (BMI). Calculated simply by dividing an individual\'s weight in kilograms by the square of their height in meters, the score sorts individuals into categories such as underweight, normal, overweight, or obese.',
            'However, prominent epidemiologists and sports medicine clinicians are fiercely challenging the clinical validity of this ubiquitous calculation. The original formula was devised in the 1830s by a Belgian mathematician named Adolphe Quetelet. Crucially, Quetelet was an astronomer and statistician, not a physician; his objective was to describe average population distributions across nineteenth-century Western European men, not to assess individual human metabolic health.',
            'The most glaring flaw of the BMI is its complete inability to differentiate between dense muscle tissue and adipose fat. Because skeletal muscle is approximately eighteen percent denser than body fat, a heavily muscled Olympic sprinter, rugby player, or bodybuilder often possesses a BMI exceeding thirty. Consequently, standard automated health questionnaires mistakenly classify these peak athletes as dangerously obese.',
            'Furthermore, the formula fails to consider bone density, age-related muscle wasting, gender biological differences, and fat distribution. Medical research demonstrates that visceral fat stored around abdominal organs poses far greater cardiovascular risks than subcutaneous fat stored beneath the skin of the hips and thighs. Modern physicians advocate replacing BMI with comprehensive metrics such as waist-to-height ratio, dual-energy X-ray absorptiometry (DEXA) scans, and blood lipid biomarkers.'
          ],
          summaryUz: 'Ushbu darsda tana massasi indeksi (BMI) tahlil qilinadi. 1830-yillarda belgiyalik matematik Adolf Ketle tomonidan ishlab chiqilgan ushbu formula insonning mushak massasi va yog\' qatlami orasidagi farqni ajrata olmaydi. Natijada ko\'plab sportchilar "semiz" deb noto\'g\'ri tasniflanadi. Zamonaviy tibbiyot BMI o\'rniga bel aylanasining bo\'yga nisbati va qon biomarkerlariga tayanishni tavsiya etadi.',
          targetVocab: [
            {
              word: 'ubiquitous',
              pos: 'adj.',
              phonetic: '/juːˈbɪk.wə.t̬əs/',
              definitionEn: 'Seeming to be everywhere at the same time.',
              translationUz: 'hamma joyda uchraydigan, keng tarqalgan',
              sampleSentence: 'Smartphones have become ubiquitous in both urban and rural communities.',
              collocation: 'ubiquitous presence'
            },
            {
              word: 'epidemiologist',
              pos: 'n.',
              phonetic: '/ˌep.ə.diːmiˈɑː.lə.dʒɪst/',
              definitionEn: 'A scientist who studies how disease and health conditions spread in populations.',
              translationUz: 'epidemiolog, kasallik tarqalishini o\'rganuvchi olim',
              sampleSentence: 'The epidemiologist tracked the outbreak of the influenza strain.',
              collocation: 'prominent epidemiologist'
            },
            {
              word: 'adipose',
              pos: 'adj.',
              phonetic: '/ˈæd.ə.poʊs/',
              definitionEn: 'Used by anatomists to refer to body fat or fatty tissue.',
              translationUz: 'yog\' to\'qimalariga oid',
              sampleSentence: 'Adipose tissue stores excess calories and insulates the body against cold.',
              collocation: 'adipose tissue'
            },
            {
              word: 'visceral',
              pos: 'adj.',
              phonetic: '/ˈvɪs.ɚ.əl/',
              definitionEn: 'Relating to the large internal organs in the chest or abdomen.',
              translationUz: 'ichki a\'zolarga oid (ayniqsa qorin bo\'shlig\'i)',
              sampleSentence: 'High amounts of visceral fat increase the risk of type 2 diabetes.',
              collocation: 'visceral fat'
            },
            {
              word: 'advocate',
              pos: 'v.',
              phonetic: '/ˈæd.və.keɪt/',
              definitionEn: 'To publicly support or recommend a particular policy or way of doing things.',
              translationUz: 'targ\'ib qilmoq, yoqlamoq, qo\'llab-quvvatlamoq',
              sampleSentence: 'Nutritionists advocate eating whole grain foods and fresh vegetables.',
              collocation: 'advocate a method'
            },
            {
              word: 'glaring',
              pos: 'adj.',
              phonetic: '/ˈɡler.ɪŋ/',
              definitionEn: 'Used to describe something bad that is very obvious and noticeable.',
              translationUz: 'yaqqol ko\'rinib turgan, ko\'zga tashlanadigan (xato)',
              sampleSentence: 'The auditing team discovered a glaring error in the financial balance sheet.',
              collocation: 'glaring flaw'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u3-p1-q1',
              type: 'main-idea',
              question: 'Why are modern medical experts criticizing the widespread use of the BMI?',
              options: [
                'Because it is too expensive to calculate on modern computers',
                'Because it cannot distinguish between muscle and fat, and ignores body composition',
                'Because it was banned by the World Health Organization in 1910',
                'Because it only measures height in inches rather than centimeters'
              ],
              correctIndex: 1,
              explanationUz: 'Tanqid sababi: BMI mushak va yog\'ni bir-biridan ajrata olmaydi va inson tana tarkibini to\'liq inobatga olmaydi.'
            },
            {
              id: 'rrw1-u3-p1-q2',
              type: 'detail',
              question: 'Who was Adolphe Quetelet, the creator of the original BMI formula?',
              options: [
                'A Belgian mathematician and astronomer, not a medical doctor',
                'A British Olympic gold medalist in weightlifting',
                'An American cardiologist working in New York City',
                'A French chef who invented low-calorie cuisine'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda keltirilgan: Adolphe Quetelet shifokor emas, balki astronom va statistik matematik bo\'lgan.'
            },
            {
              id: 'rrw1-u3-p1-q3',
              type: 'detail',
              question: 'According to the reading, which type of fat is most dangerous to cardiovascular health?',
              options: [
                'Subcutaneous fat stored beneath the skin of the hips',
                'Visceral fat stored around abdominal internal organs',
                'Fat found naturally in hair follicles',
                'Fat stored in the fingertips of musicians'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "visceral fat stored around abdominal organs poses far greater cardiovascular risks than subcutaneous fat".'
            },
            {
              id: 'rrw1-u3-p1-q4',
              type: 'vocabulary',
              question: 'The word "ubiquitous" in paragraph 2 is closest in meaning to:',
              options: [
                'Present and seen everywhere',
                'Highly confidential and secret',
                'Extremely cheap to purchase',
                'Painful and unpleasant'
              ],
              correctIndex: 0,
              explanationUz: '"Ubiquitous" so\'zi hamma joyda mavjud bo\'lgan, keng tarqalgan ma\'nosini bildiradi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'problem-solution',
            title: 'Body Mass Index: Clinical Flaws and Modern Alternatives',
            sections: [
              {
                heading: 'Inherent Flaws of BMI',
                points: [
                  'Cannot distinguish muscle mass from excess body fat.',
                  'Devised in 1830s by an astronomer for Western European populations.',
                  'Classifies muscular athletes as "obese".',
                  'Ignores dangerous visceral fat location.'
                ]
              },
              {
                heading: 'Modern Clinical Solutions',
                points: [
                  'Waist-to-height ratio measurements.',
                  'DEXA dual-energy body scans for exact tissue percentage.',
                  'Blood lipid and metabolic biomarker panels.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think schools should publicly weigh students and publish BMI reports?',
            'How can health practitioners encourage fitness without causing body shame or eating disorders?'
          ]
        },
        {
          id: 'rrw1-u3-p2',
          passageNumber: 2,
          title: 'Studying Headaches: Tension, Migraine, and Triggers',
          subtitle: 'Neurological mechanisms behind common cranial pain and modern treatment options',
          themeCategory: 'Neurology',
          level: 'B1',
          wordCount: 425,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'What do you usually do when you experience a sudden severe headache?',
            'Do you know what triggers migraines compared to ordinary tension headaches?'
          ],
          paragraphs: [
            'Almost every human being experiences cranial pain at some point in their life. In fact, headache disorders rank among the most prevalent conditions affecting humanity, causing billions of dollars in lost economic productivity and severe personal distress. Yet, despite their frequency, many patients remain confused regarding the biological distinctions between different varieties of headaches.',
            'The most common type is the tension headache, which accounts for nearly ninety percent of all documented complaints. Tension headaches typically produce a dull, steady, band-like ache pressing around both sides of the forehead and the back of the neck. They are predominantly triggered by muscular contractions caused by emotional stress, eye fatigue from digital display screens, sleep deprivation, or poor ergonomic posture while sitting at desks.',
            'In stark contrast, migraines represent a far more severe neurovascular condition. Rather than a steady ache, migraines usually inflict intense, throbbing pain concentrated on one side of the head. Furthermore, migraine episodes are frequently accompanied by sensory disturbances known as "auras," which manifest as flashing lights, blind spots, or tingling in the limbs. Sufferers often experience extreme sensitivity to light and sound, accompanied by nausea and vomiting.',
            'Neuroscientists now understand that migraines involve abnormal genetic hypersensitivity in the trigeminal nerve pathway, causing sudden blood vessel dilation and localized neurogenic inflammation. While over-the-counter painkillers provide relief for mild tension aches, migraine management requires targeted prescription medications like triptans or CGRP inhibitors, combined with diligent trigger avoidance (such as managing irregular sleep, dehydration, caffeine withdrawal, and aged cheeses).'
          ],
          summaryUz: 'Ushbu darsda bosh og\'riqlarining asosiy turlari: zo\'riqish bosh og\'rig\'i (tension headache) va migren (migraine) solishtiriladi. Zo\'riqish bosh og\'rig\'i stress va kompyuter nuridan kelsa, migren asab tomirlarining yallig\'lanishi va genetik moyillik bilan bog\'liq bo\'lib, bir tomonlama kuchli og\'riq va ko\'rish buzilishi bilan kechadi.',
          targetVocab: [
            {
              word: 'prevalent',
              pos: 'adj.',
              phonetic: '/ˈprev.əl.ənt/',
              definitionEn: 'Existing very commonly or happening often in a particular place or time.',
              translationUz: 'keng tarqalgan, ko\'p uchraydigan',
              sampleSentence: 'Vitamin D deficiency is especially prevalent during cold winter months.',
              collocation: 'prevalent condition'
            },
            {
              word: 'throbbing',
              pos: 'adj.',
              phonetic: '/ˈθrɑː.bɪŋ/',
              definitionEn: 'Feeling pain in strong, regular beats.',
              translationUz: 'lo\'qillab turadigan, urib turgan (og\'riq)',
              sampleSentence: 'He awoke with a throbbing toothache that prevented him from eating breakfast.',
              collocation: 'throbbing pain'
            },
            {
              word: 'dilation',
              pos: 'n.',
              phonetic: '/daɪˈleɪ.ʃən/',
              definitionEn: 'The state of becoming larger, wider, or more open.',
              translationUz: 'kengayish, ochilish (tomirlar)',
              sampleSentence: 'Eye doctors apply chemical drops to induce pupil dilation for examination.',
              collocation: 'vessel dilation'
            },
            {
              word: 'ergonomic',
              pos: 'adj.',
              phonetic: '/ˌɝː.ɡəˈnɑː.mɪk/',
              definitionEn: 'Designed to make work comfortable and avoid health injury.',
              translationUz: 'ergonomik, qulay ishlashga moslashtirilgan',
              sampleSentence: 'Investing in an ergonomic office chair dramatically improved her posture.',
              collocation: 'ergonomic posture'
            },
            {
              word: 'deprivation',
              pos: 'n.',
              phonetic: '/ˌdep.rəˈveɪ.ʃən/',
              definitionEn: 'A situation in which you do not have things or conditions necessary for a pleasant life.',
              translationUz: 'mahrum bo\'lish, yetishmaslik, uyqusizlik',
              sampleSentence: 'Chronic sleep deprivation impairs memory consolidation and emotional balance.',
              collocation: 'sleep deprivation'
            },
            {
              word: 'hypersensitivity',
              pos: 'n.',
              phonetic: '/ˌhaɪ.pɚˌsen.səˈtɪv.ə.t̬i/',
              definitionEn: 'The condition of reacting too strongly to stimuli.',
              translationUz: 'o\'ta sezgirlik, gipersezgirlik',
              sampleSentence: 'Patients with allergies suffer from immune system hypersensitivity to pollen.',
              collocation: 'sensory hypersensitivity'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u3-p2-q1',
              type: 'main-idea',
              question: 'What is the primary difference between tension headaches and migraines?',
              options: [
                'Tension headaches occur only in children, while migraines occur only in athletes.',
                'Tension headaches produce steady dull aches around the head, whereas migraines cause throbbing pain with sensory symptoms and nausea.',
                'Tension headaches can only be cured by surgery, while migraines need no medicine.',
                'Migraines are caused by eating vegetables, while tension is caused by drinking tea.'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy farq: Zo\'riqish bosh og\'rig\'i bosim beruvchi simillovchi og\'riq bersa, migren bir tomonda lo\'qillovchi og\'riq, nurga sezgirlik va ko\'ngil aynishi keltiradi.'
            },
            {
              id: 'rrw1-u3-p2-q2',
              type: 'detail',
              question: 'What percentage of documented headache complaints are tension headaches?',
              options: [
                'Nearly ninety percent',
                'Exactly twenty-five percent',
                'Less than two percent',
                'Fifty percent precisely'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "The most common type is the tension headache, which accounts for nearly ninety percent of all documented complaints".'
            },
            {
              id: 'rrw1-u3-p2-q3',
              type: 'vocabulary',
              question: 'In the passage, the word "aura" refers to:',
              options: [
                'A golden coin awarded to doctors',
                'Sensory disturbances like flashing lights or tingling preceding a migraine',
                'A magical spiritual halo around a patient',
                'A brand of over-the-counter pain medication'
              ],
              correctIndex: 1,
              explanationUz: '"Aura" — migren oldidan ko\'z oldida yaltirash, chiroq chaqnashi yoki uvishish kabi hissiy belgilar.'
            },
            {
              id: 'rrw1-u3-p2-q4',
              type: 'detail',
              question: 'Which nerve pathway is implicated in abnormal migraine inflammation?',
              options: [
                'The sciatic nerve',
                'The trigeminal nerve',
                'The optic nerve only',
                'The spinal cord lumbar section'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "abnormal genetic hypersensitivity in the trigeminal nerve pathway".'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Headache Comparison: Tension vs Migraine',
            sections: [
              {
                heading: 'Tension Headaches',
                points: [
                  '90% of all cases.',
                  'Dull, constant band-like pressure on both sides.',
                  'Caused by stress, poor posture, screen fatigue.',
                  'Treated with rest and OTC painkillers.'
                ]
              },
              {
                heading: 'Migraine Episodes',
                points: [
                  'Severe, throbbing unilateral (one-sided) pain.',
                  'Accompanied by aura, light/sound sensitivity, and nausea.',
                  'Neurovascular inflammation involving trigeminal nerve.',
                  'Requires targeted prescription triptans and trigger control.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think staring at phone screens all day is increasing headaches in young people?',
            'What lifestyle habits help you maintain focus and prevent physical tension?'
          ]
        }
      ]
    },
    {
      id: 'rrw1-u4',
      unitNumber: 4,
      title: 'Social Issues',
      subjectArea: 'Education & Global Mobility',
      themeDescriptionUz: 'Chet elda ta\'lim olishning afzalliklari, madaniy shok va pandemiya davrida ta\'lim transformatsiyasi.',
      passages: [
        {
          id: 'rrw1-u4-p1',
          passageNumber: 1,
          title: 'Education Abroad: Should I Stay or Should I Go?',
          subtitle: 'Evaluating linguistic immersion, financial investment, and cultural resilience in international study',
          themeCategory: 'International Education',
          level: 'B1',
          wordCount: 440,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Would you like to earn your university degree in an English-speaking country?',
            'What are the greatest obstacles international students experience when living abroad?'
          ],
          paragraphs: [
            'Every year, over five million ambitious university students pack their suitcases, bid farewell to their families, and cross international borders to pursue higher education abroad. For many young scholars, studying in countries such as the United States, the United Kingdom, Canada, or Australia represents a golden ticket to global career mobility, fluent foreign language mastery, and cosmopolitan independence.',
            'The academic and cognitive advantages of international study are well documented. Complete linguistic immersion forces students to practice a second language continuously—not merely in sterile lecture halls, but while opening bank accounts, negotiating rental leases, and engaging in lively dinner debates. Furthermore, exposure to international teaching styles—which frequently emphasize collaborative seminar discussions, critical skepticism, and individual research over rote memorization—broadens intellectual horizons.',
            'However, studying abroad is not without acute emotional and economic hardships. Tuition fees for international students are notoriously steep, often reaching triple the rates paid by domestic citizens. Beyond financial burdens, almost all foreign students experience varying degrees of "culture shock"—a disorienting psychological state characterized by loneliness, homesickness, dietary distress, and frustration with unfamiliar social conventions.',
            'Ultimately, educational experts conclude that the transformational value of studying overseas depends heavily on a student\'s personal resilience and adaptability. Those who make conscious efforts to step outside their comfort zones, integrate with local communities, and embrace cultural discomfort emerge with superior cross-cultural competencies that make them invaluable in today\'s globalized economy.'
          ],
          summaryUz: 'Ushbu darsda xorijda o\'qishning (Education Abroad) ijobiy va murakkab tomonlari tahlil qilinadi. Til muhitida yashash, mustaqillik va xalqaro karyera imkoniyatlari katta bo\'lsa-da, qimmat kontrakt to\'lovlari, sog\'inch va madaniy shok kabi qiyinchiliklar mavjud. O\'z qobig\'idan chiqib, yangi muhitga moslashgan talabalar ulkan muvaffaqiyatga erishadilar.',
          targetVocab: [
            {
              word: 'immersion',
              pos: 'n.',
              phonetic: '/ɪˈmɝː.ʃən/',
              definitionEn: 'The process of learning a language or skill by being completely surrounded by it.',
              translationUz: 'to\'liq sho\'ng\'ish, muhit ichida bo\'lish (til o\'rganishda)',
              sampleSentence: 'Total linguistic immersion is the fastest method to attain speaking fluency.',
              collocation: 'linguistic immersion'
            },
            {
              word: 'cosmopolitan',
              pos: 'adj.',
              phonetic: '/ˌkɑːz.məˈpɑː.lɪ.tən/',
              definitionEn: 'Containing or having experience of people and things from many different parts of the world.',
              translationUz: 'xalqaro, dunyoqarashi keng, kosmopolit',
              sampleSentence: 'London and New York are vibrant cosmopolitan cities with diverse communities.',
              collocation: 'cosmopolitan outlook'
            },
            {
              word: 'notoriously',
              pos: 'adv.',
              phonetic: '/noʊˈtɔːr.i.əs.li/',
              definitionEn: 'In a way that is famous for something bad.',
              translationUz: 'yomon nom bilan tanilgan ravishda, qimmatligi/qiyinligi bilan mashhur',
              sampleSentence: 'The mountain pass is notoriously treacherous during winter blizzards.',
              collocation: 'notoriously expensive'
            },
            {
              word: 'disorienting',
              pos: 'adj.',
              phonetic: '/dɪˈsɔːr.i.en.tɪŋ/',
              definitionEn: 'Making someone feel confused about where they are or where they are going.',
              translationUz: 'sarosimaga soladigan, boshni aylantiradigan',
              sampleSentence: 'Arriving in Tokyo after midnight was an exhilarating yet disorienting experience.',
              collocation: 'disorienting state'
            },
            {
              word: 'competency',
              pos: 'n.',
              phonetic: '/ˈkɑːm.pə.tən.si/',
              definitionEn: 'An important skill that is needed to do a job or task effectively.',
              translationUz: 'kompetensiya, mahorat, malaka',
              sampleSentence: 'Multinational firms actively recruit candidates with strong cross-cultural competency.',
              collocation: 'cross-cultural competency'
            },
            {
              word: 'resilience',
              pos: 'n.',
              phonetic: '/rɪˈzɪl.jəns/',
              definitionEn: 'The ability to be happy, successful, or recover quickly again after something difficult.',
              translationUz: 'bardoshlilik, chidamlilik, ruhiy quvvat',
              sampleSentence: 'She demonstrated admirable resilience when overcoming financial setbacks.',
              collocation: 'personal resilience'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u4-p1-q1',
              type: 'main-idea',
              question: 'What is the main conclusion of the passage regarding studying abroad?',
              options: [
                'Studying abroad is always a terrible financial mistake that should be outlawed.',
                'Studying abroad offers profound linguistic and career benefits, but requires resilience to overcome financial and cultural challenges.',
                'All foreign universities have eliminated tuition fees for international students.',
                'Speaking a foreign language is impossible without moving to Antarctica.'
              ],
              correctIndex: 1,
              explanationUz: 'Xulosa: Xorijda o\'qish til va karyera uchun ulkan imtiyozlar beradi, lekin qimmat to\'lovlar va madaniy qiyinchiliklarni yengish uchun kuchli iroda talab etiladi.'
            },
            {
              id: 'rrw1-u4-p1-q2',
              type: 'detail',
              question: 'Why does complete linguistic immersion accelerate language acquisition?',
              options: [
                'Students only speak during formal exams once a year.',
                'Students are forced to use the language in practical daily tasks like banking, housing, and social interactions.',
                'Universities inject vitamins into student meals to improve memory.',
                'Students are forbidden from using laptops or pens.'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: Talabalar faqat darsda emas, balki ijara shartnomasi, bank ochish va kundalik muloqotda tilni doimiy qo\'llashga majbur bo\'ladilar.'
            },
            {
              id: 'rrw1-u4-p1-q3',
              type: 'vocabulary',
              question: 'What does "culture shock" mean in paragraph 3?',
              options: [
                'An electrical injury caused by foreign appliances',
                'A disorienting feeling of confusion, loneliness, and distress experienced when adjusting to an unfamiliar culture',
                'A sudden drop in foreign currency exchange rates',
                'A new genre of pop music'
              ],
              correctIndex: 1,
              explanationUz: '"Culture shock" — yangi madaniyat, til va muhitga ko\'nikish jarayonida yuzaga keladigan sarosima, yolg\'izlik va ruhiy zo\'riqish.'
            },
            {
              id: 'rrw1-u4-p1-q4',
              type: 'inference',
              question: 'What advice does the author imply for students moving abroad?',
              options: [
                'Stay inside the dormitory bedroom and only speak your native language with childhood friends.',
                'Actively step outside your comfort zone and engage with local people and social customs.',
                'Never spend any money on groceries or textbooks.',
                'Return home immediately upon feeling the first sign of homesickness.'
              ],
              correctIndex: 1,
              explanationUz: 'Muallif qulaylik zonasidan (comfort zone) chiqishni va mahalliy jamoatchilik bilan muloqot qilishni tavsiya qiladi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'International Education: Opportunities vs Challenges',
            sections: [
              {
                heading: 'Transformational Opportunities',
                points: [
                  'Accelerated linguistic fluency through daily real-life immersion.',
                  'Exposure to critical thinking and seminar-style pedagogy.',
                  'Global network and high employability in multinational corporations.'
                ]
              },
              {
                heading: 'Acute Challenges & Hardships',
                points: [
                  'High tuition fees (often triple domestic rates).',
                  'Culture shock, linguistic isolation, and intense homesickness.',
                  'Navigating unfamiliar legal, healthcare, and rental systems.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Which country would be your top choice for university study, and why?',
            'How can universities better support international students during their first semester?'
          ]
        },
        {
          id: 'rrw1-u4-p2',
          passageNumber: 2,
          title: 'Closed Doors: Education Under Covid-19',
          subtitle: 'The sudden shift to emergency remote learning and the digital divide in global schooling',
          themeCategory: 'Education Policy',
          level: 'B1',
          wordCount: 430,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Did you have to take classes online via Zoom during the global pandemic?',
            'What were the biggest drawbacks of studying at home compared to in-person school?'
          ],
          paragraphs: [
            'In the spring of 2020, the rapid outbreak of the Covid-19 respiratory pandemic triggered the largest disruption of global educational systems in recorded history. According to UNESCO statistics, nationwide school closures were implemented in more than one hundred and ninety countries, instantly forcing over 1.6 billion learners—nearly ninety percent of the world\'s student population—out of physical classrooms.',
            'Faced with unprecedented shutdowns, educational ministries and universities pivoted almost overnight to emergency remote teaching. Video teleconferencing platforms, cloud learning management systems, and interactive digital whiteboards became the new educational lifeline. Teachers rapidly restructured syllabi, recorded virtual lectures, and experimented with digital breakout rooms to maintain pedagogical continuity.',
            'However, this abrupt digital transition cast a harsh spotlight on deep socio-economic inequalities, widely termed the "digital divide." While affluent urban households possessed high-speed broadband connections, private study bedrooms, and dedicated laptops for each child, millions of marginalized rural students lacked reliable internet or even steady electrical power. In developing regions, entire families were forced to share a single cracked smartphone screen with erratic cellular data.',
            'The prolonged closure of schools extracted severe academic and developmental tolls. Standardized assessments conducted after classrooms reopened revealed substantial learning loss, particularly in mathematics and early literacy, alongside alarming spikes in adolescent anxiety and depression. As educators rebuild post-pandemic schooling, the consensus emphasizes building hybrid educational models that leverage digital innovation while preserving the irreplaceable emotional warmth of in-person mentorship.'
          ],
          summaryUz: 'Ushbu darsda Covid-19 pandemiyasi davrida 1.6 milliard o\'quvchining onlayn ta\'limga o\'tishi va "raqamli tengsizlik" (digital divide) muammosi ko\'rsatiladi. Boy oilalar internet va kompyuterga ega bo\'lgan bir paytda, qishloq joylarida ko\'plab bolalar ta\'limdan uzilib qoldi. Maktablarning yopilishi o\'quv ko\'rsatkichlarining pasayishiga va o\'smirlar ruhiyatiga salbiy ta\'sir qildi.',
          targetVocab: [
            {
              word: 'pivot',
              pos: 'v.',
              phonetic: '/ˈpɪv.ət/',
              definitionEn: 'To turn or change direction quickly, especially in strategy or method.',
              translationUz: 'tezda yo\'nalishni o\'zgartirmoq, yangi usulga o\'tmoq',
              sampleSentence: 'The software company pivoted from gaming to enterprise cybersecurity.',
              collocation: 'pivot to remote learning'
            },
            {
              word: 'pedagogical',
              pos: 'adj.',
              phonetic: '/ˌped.əˈɡɑː.dʒɪ.kəl/',
              definitionEn: 'Relating to the methods and theory of teaching.',
              translationUz: 'pedagogik, o\'qitish metodikasiga oid',
              sampleSentence: 'Teachers experimented with innovative pedagogical tools during lockdown.',
              collocation: 'pedagogical continuity'
            },
            {
              word: 'marginalized',
              pos: 'adj.',
              phonetic: '/ˈmɑːr.dʒə.nə.laɪzd/',
              definitionEn: 'Treated as if you are not important or do not have power in a society.',
              translationUz: 'e\'tibordan chetda qolgan, imkoniyati cheklangan',
              sampleSentence: 'Charities provided free laptops to marginalized rural schoolchildren.',
              collocation: 'marginalized students'
            },
            {
              word: 'erratic',
              pos: 'adj.',
              phonetic: '/ɪˈræt̬.ɪk/',
              definitionEn: 'Moving or behaving in a way that is not regular, certain, or expected.',
              translationUz: 'beqaror, o\'zgaruvchan, uzuq-yuluq',
              sampleSentence: 'Heavy storms caused erratic internet connectivity across the region.',
              collocation: 'erratic connection'
            },
            {
              word: 'irreplaceable',
              pos: 'adj.',
              phonetic: '/ˌɪr.əˈpleɪ.sə.bəl/',
              definitionEn: 'Too special, valuable, or unusual to be replaced by anything else.',
              translationUz: 'o\'rnini bosib bo\'lmas, tengsiz, bebaho',
              sampleSentence: 'In-person classroom interaction provides irreplaceable emotional support.',
              collocation: 'irreplaceable value'
            },
            {
              word: 'disruption',
              pos: 'n.',
              phonetic: '/dɪsˈrʌp.ʃən/',
              definitionEn: 'An interruption in the usual way that a system, process, or event works.',
              translationUz: 'buzilish, to\'xtalish, uzilish',
              sampleSentence: 'The volcano caused massive disruption to international airline flights.',
              collocation: 'educational disruption'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u4-p2-q1',
              type: 'main-idea',
              question: 'What does the passage identify as the most alarming consequence of emergency remote education?',
              options: [
                'All video game servers in the world became overloaded',
                'Deep socio-economic inequalities were exposed through the digital divide, causing severe learning loss',
                'School uniforms became completely obsolete forever',
                'Teachers forgot how to write on chalkboards'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy muammo: Raqamli tengsizlik (digital divide) tufayli ijtimoiy tabaqalanish yaqqol ko\'rindi va jiddiy bilim yo\'qotilishi (learning loss) yuz berdi.'
            },
            {
              id: 'rrw1-u4-p2-q2',
              type: 'detail',
              question: 'According to UNESCO statistics, how many learners were impacted by pandemic school closures?',
              options: [
                'Over 1.6 billion learners across 190 countries',
                'Only 50,000 university professors',
                'Less than 10 percent of world students',
                'Exactly 400 students in Switzerland'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda keltirilgan: "forcing over 1.6 billion learners—nearly ninety percent of the world\'s student population—out of physical classrooms".'
            },
            {
              id: 'rrw1-u4-p2-q3',
              type: 'vocabulary',
              question: 'The term "digital divide" in paragraph 3 refers to:',
              options: [
                'The gap between people with access to modern internet/computers and those without',
                'A mathematical formula used to calculate screen brightness',
                'A video game tournament held between different countries',
                'A physical wall built inside computer laboratories'
              ],
              correctIndex: 0,
              explanationUz: '"Digital divide" — zamonaviy texnologiya, kompyuter va sifatli internetga ega bo\'lganlar va undan mahrum qolganlar o\'rtasidagi ijtimoiy bo\'shliq.'
            },
            {
              id: 'rrw1-u4-p2-q4',
              type: 'inference',
              question: 'What is the future direction of post-pandemic education according to educators?',
              options: [
                'Closing all physical universities permanently and only using automated email robots',
                'Adopting hybrid models that combine digital tools with the essential human mentorship of in-person classes',
                'Banning the internet and laptops inside all schools worldwide',
                'Canceling all mathematics and reading assessments forever'
              ],
              correctIndex: 1,
              explanationUz: 'Pedagoglar kelajakda raqamli innovatsiyalarni jonli sinfdagi insoniy ustozlik munosabati bilan uyg\'unlashtirgan gibrid modellarni qo\'llashni ma\'qul ko\'rishmoqda.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'Covid-19 Education Disruption: Catalyst, Disparities, and Outlook',
            sections: [
              {
                heading: 'Catalyst (Spring 2020)',
                points: [
                  'Worldwide Covid-19 pandemic halts physical gatherings.',
                  '1.6 billion learners (90% of students) displaced from classrooms.'
                ]
              },
              {
                heading: 'The Digital Divide Reality',
                points: [
                  'Affluent households: High-speed fiber, dedicated laptops, private rooms.',
                  'Marginalized households: Erratic phone data, shared devices, power outages.'
                ]
              },
              {
                heading: 'Consequences & Future Path',
                points: [
                  'Measurable learning loss in mathematics and literacy.',
                  'Transition toward resilient hybrid learning with strong in-person mentorship.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Did remote learning improve your self-discipline, or make it harder to concentrate?',
            'How can governments guarantee equal internet access for all school children as a fundamental right?'
          ]
        }
      ]
    },
    {
      id: 'rrw1-u5',
      unitNumber: 5,
      title: 'Environmental Issues',
      subjectArea: 'Ecology & Global Warming',
      themeDescriptionUz: 'Insoniyat va tabiat o\'rtasidagi muvozanat hamda global iqlim o\'zgarishining geosiyosiy oqibatlari.',
      passages: [
        {
          id: 'rrw1-u5-p1',
          passageNumber: 1,
          title: 'Humans and the Natural World: The Anthropocene Epoch',
          subtitle: 'Examining how human civilization became the dominant planetary geological force',
          themeCategory: 'Ecology & Earth Science',
          level: 'B1',
          wordCount: 440,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Have you heard of the term "Anthropocene"? What do you think it means?',
            'How does modern plastic and concrete alter the geological layers of the Earth?'
          ],
          paragraphs: [
            'For billions of years, the evolution of planet Earth was governed strictly by natural forces: drifting tectonic plates, volcanic eruptions, asteroid impacts, and astronomical ice age cycles. However, prominent geologists and environmental scientists now declare that Earth has crossed a monumental threshold into a brand-new geological epoch: the "Anthropocene"—the Age of Humans.',
            'The defining characteristic of the Anthropocene is that human collective activity has surpassed natural forces as the primary driver of global environmental change. Since the dawn of the Industrial Revolution in the late eighteenth century, and accelerating dramatically during the "Great Acceleration" of the 1950s, human societies have reshaped the face of the planet with unprecedented speed.',
            'The tangible geological markers of human civilization are pervasive. Scientists excavating modern sediment layers uncover synthetic plastics, radioactive isotopes from nuclear weapons tests, billions of tons of concrete and asphalt, and soot particles from burning fossil fuels. Furthermore, humans have transformed over seventy percent of the Earth\'s ice-free land for agriculture and livestock, diverting massive river systems and destabilizing ancient carbon cycles.',
            'This staggering domination of planetary ecosystems has precipitated the "Sixth Mass Extinction," with animal and plant species disappearing at hundreds of times their baseline historical rates. Ecological scientists warn that humanity cannot treat nature as an inexhaustible quarry for raw materials without triggering catastrophic systemic feedback loops. The challenge of the 21st century is transitioning from planetary exploitation to conscious environmental stewardship.'
          ],
          summaryUz: 'Ushbu darsda insoniyat Yer sayyorasining geologik qiyofasini o\'zgartirib yuborgan yangi davr — "Antroposen" (Anthropocene) haqida so\'z boradi. Sanoat inqilobidan so\'ng plastik, beton, uglerod chiqindilari va o\'rmonlarning qisqarishi sayyora tabiatini tubdan o\'zgartirdi. Olimlar tabiatdan cheksiz foydalanish o\'rniga uni asrash va ekologik mas\'uliyatga o\'tishga chaqirmoqda.',
          targetVocab: [
            {
              word: 'threshold',
              pos: 'n.',
              phonetic: '/ˈθreʃ.hoʊld/',
              definitionEn: 'The level or point at which you start to experience something, or at which something starts to happen.',
              translationUz: 'bo\'sag\'a, chegara nuqtasi, boshlanish pallasi',
              sampleSentence: 'The global temperature is rapidly approaching a dangerous tipping threshold.',
              collocation: 'cross a threshold'
            },
            {
              word: 'sediment',
              pos: 'n.',
              phonetic: '/ˈsed.ə.mənt/',
              definitionEn: 'Solid matter that settles to the bottom of a liquid, or dirt and rocks deposited by water.',
              translationUz: 'cho\'kindi jinslar, cho\'kindi qatlam',
              sampleSentence: 'Geologists analyzed the ancient marine sediment layers for volcanic ash.',
              collocation: 'sediment layers'
            },
            {
              word: 'tangible',
              pos: 'adj.',
              phonetic: '/ˈtæn.dʒə.bəl/',
              definitionEn: 'Real and not imaginary; able to be shown, touched, or experienced.',
              translationUz: 'aniq, sezilarli, ushlab ko\'rsa bo\'ladigan',
              sampleSentence: 'We need to see tangible results from the environmental policy reforms.',
              collocation: 'tangible markers'
            },
            {
              word: 'destabilize',
              pos: 'v.',
              phonetic: '/diːˈsteɪ.bə.laɪz/',
              definitionEn: 'To make a system, country, or government less stable or less able to work normally.',
              translationUz: 'beqarorlashtirmoq, muvozanatdan chiqarmoq',
              sampleSentence: 'Excessive greenhouse gas emissions destabilize planetary weather systems.',
              collocation: 'destabilize ecosystems'
            },
            {
              word: 'inexhaustible',
              pos: 'adj.',
              phonetic: '/ˌɪn.ɪɡˈzɑː.stə.bəl/',
              definitionEn: 'Existing in very great amounts that will never be finished.',
              translationUz: 'tugamas, tuganmas, cheksiz',
              sampleSentence: 'Ancient societies mistakenly assumed fresh ocean fisheries were inexhaustible.',
              collocation: 'inexhaustible resource'
            },
            {
              word: 'stewardship',
              pos: 'n.',
              phonetic: '/ˈstuː.ɚd.ʃɪp/',
              definitionEn: 'Someone\'s ability to look after, manage, and care for something properly.',
              translationUz: 'mas\'uliyat bilan boshqarish, asrash va g\'amxo\'rlik qilish',
              sampleSentence: 'Indigenous leaders practice sustainable environmental stewardship of the forests.',
              collocation: 'environmental stewardship'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u5-p1-q1',
              type: 'main-idea',
              question: 'What defines the proposed geological epoch known as the "Anthropocene"?',
              options: [
                'Volcanoes have frozen the entire surface of the planet',
                'Human collective activities have become the primary driving force shaping the Earth\'s environment and geology',
                'Asteroids have replaced the Moon in Earth\'s orbit',
                'All oceans have completely dried out due to solar radiation'
              ],
              correctIndex: 1,
              explanationUz: 'Antroposen ta\'rifi: Inson faoliyati Yer yuzining geologiyasi va ekologik tizimlarini o\'zgartiruvchi asosiy yetakchi kuchga aylangan davr.'
            },
            {
              id: 'rrw1-u5-p1-q2',
              type: 'detail',
              question: 'Which physical markers of human activity will future geologists find in sedimentary rock layers?',
              options: [
                'Synthetic plastics, concrete, radioactive isotopes, and fossil fuel soot',
                'Bronze swords and wooden sailing ships only',
                'Leaves from prehistoric giant ferns',
                'Pure diamonds formed by meteors'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "synthetic plastics, radioactive isotopes from nuclear weapons tests, billions of tons of concrete and asphalt, and soot particles".'
            },
            {
              id: 'rrw1-u5-p1-q3',
              type: 'vocabulary',
              question: 'In the passage, the word "tangible" is closest in meaning to:',
              options: [
                'Imaginary and invisible',
                'Clear, real, and touchable',
                'Extremely quiet',
                'Ancient and crumbling'
              ],
              correctIndex: 1,
              explanationUz: '"Tangible" so\'zi aniq, ko\'zga ko\'rinadigan, moddiy (real and touchable) degan ma\'noni anglatadi.'
            },
            {
              id: 'rrw1-u5-p1-q4',
              type: 'inference',
              question: 'What does the term "Sixth Mass Extinction" imply about historical biodiversity loss?',
              options: [
                'Extinctions never occurred prior to the year 2020',
                'Five previous catastrophic extinction events occurred in deep Earth history, and humanity is causing the sixth',
                'Only six species of animals currently exist on Earth',
                'Dinosaurs returned to live alongside humans in cities'
              ],
              correctIndex: 1,
              explanationUz: 'Yer tarixida avval 5 ta yirik qirilib ketish davri (masalan, dinozavrlar davri) bo\'lgan, hozir insoniyat faoliyati sabab 6-ommaviy qirilib ketish jarayoni yuz bermoqda.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'The Anthropocene: Human Drivers and Planetary Impacts',
            sections: [
              {
                heading: 'Human Activities (Drivers)',
                points: [
                  'Industrial Revolution fossil combustion.',
                  'Global land transformation (70% of ice-free land used for farms).',
                  'Nuclear tests and massive plastic/concrete manufacturing.'
                ]
              },
              {
                heading: 'Geological & Ecological Effects',
                points: [
                  'Sedimentary layers permanently embedded with synthetic polymers.',
                  'Destabilization of the global carbon and climate cycles.',
                  'Sixth Mass Extinction: Accelerated biodiversity collapse.'
                ]
              },
              {
                heading: 'Required Transformation',
                points: [
                  'Shift from reckless resource extraction to planetary stewardship.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think everyday individuals or multinational corporations carry more responsibility for reducing carbon emissions?',
            'What simple habit could your community adopt tomorrow to reduce single-use plastic waste?'
          ]
        },
        {
          id: 'rrw1-u5-p2',
          passageNumber: 2,
          title: 'The Geopolitics of Climate Change',
          subtitle: 'How rising sea levels, water scarcity, and melting Arctic ice ignite new global friction',
          themeCategory: 'Geopolitics & Climate',
          level: 'B1',
          wordCount: 450,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Can changes in the weather and climate cause military conflicts between countries?',
            'What happens when international rivers shared by multiple nations begin drying up?'
          ],
          paragraphs: [
            'When political leaders and public media discuss global climate change, the conversation typically centers on environmental and scientific metrics: parts per million of atmospheric carbon dioxide, rising Celsius temperatures, and melting polar glaciers. However, national defense strategists, intelligence agencies, and foreign ministries view global warming through a far grimmer lens: as the supreme "threat multiplier" of the twenty-first century.',
            'Climate disruption does not exist in an ecological vacuum; it directly collides with existing geopolitical fault lines, poverty, and political instability. For example, in regions already suffering from chronic water stress, such as the Middle East and North Africa, prolonged droughts decimate agricultural yields, driving desperate rural populations into crowded urban slums and igniting civil unrest.',
            'Cross-border freshwater basins represent another volatile flashpoint. When nations build massive hydroelectric dams upstream—such as on the Nile, the Indus, or the Mekong rivers—downstream neighboring countries face severe water deficits during seasonal droughts. Tensions over dam operations and water rationing have brought several sovereign nations to the brink of military confrontation.',
            'Meanwhile, the rapid melting of the Arctic ice cap has opened lucrative new maritime trade routes and unlocked vast undersea reserves of petroleum and critical minerals. Consequently, superpowers like the United States, Russia, and China are rapidly expanding icebreaker fleets and establishing military bases in previously frozen northern waters. Climate change is no longer solely an ecological crusade; it is redefining global sovereignty and international security.'
          ],
          summaryUz: 'Ushbu darsda iqlim o\'zgarishining geosiyosiy ta\'siri (Geopolitics of Climate Change) ko\'rib chiqiladi. Qurg\'oqchilik va suv tanqisligi Afrikada va Yaqin Sharqda ichki nizolarni kuchaytirmoqda. Nil va Mekong kabi daryolarda qurilayotgan to\'g\'onlar davlatlar o\'rtasida ziddiyat tug\'dirmoqda. Shimoliy qutb muzliklarining erishi esa davlatlar o\'rtasida yangi dengiz yo\'llari va neft zaxiralari uchun raqobatni avj oldirdi.',
          targetVocab: [
            {
              word: 'multiplier',
              pos: 'n.',
              phonetic: '/ˈmʌl.tə.plaɪ.ɚ/',
              definitionEn: 'A factor or number by which something increases or multiplies.',
              translationUz: 'kuchaytiruvchi omil, ko\'paytiruvchi',
              sampleSentence: 'Drought acts as a severe threat multiplier in politically fragile territories.',
              collocation: 'threat multiplier'
            },
            {
              word: 'decimate',
              pos: 'v.',
              phonetic: '/ˈdes.ə.meɪt/',
              definitionEn: 'To kill a large number of something, or to reduce something severely.',
              translationUz: 'keskin kamaytirib yubormoq, qirib tashlamoq, payhon qilmoq',
              sampleSentence: 'The viral blight decimated potato crops across the farming district.',
              collocation: 'decimate yields'
            },
            {
              word: 'flashpoint',
              pos: 'n.',
              phonetic: '/ˈflæʃ.pɔɪnt/',
              definitionEn: 'A place or stage where trouble, especially violence or war, starts suddenly.',
              translationUz: 'xavfli nuqta, nizo o\'chog\'i, to\'qnashuv maydoni',
              sampleSentence: 'The disputed border territory remains a dangerous international flashpoint.',
              collocation: 'volatile flashpoint'
            },
            {
              word: 'deficit',
              pos: 'n.',
              phonetic: '/ˈdef.ə.sɪt/',
              definitionEn: 'The total amount by which money or goods are less than what is needed.',
              translationUz: 'yetishmovchilik, kamomad, taqchillik',
              sampleSentence: 'Severe rainfall deficits caused water rationing in the capital city.',
              collocation: 'water deficit'
            },
            {
              word: 'lucrative',
              pos: 'adj.',
              phonetic: '/ˈluː.krə.t̬ɪv/',
              definitionEn: 'Producing a great deal of profit or wealth.',
              translationUz: 'katta daromad keltiruvchi, foydali, manfaatli',
              sampleSentence: 'The airline launched a lucrative new commercial flight path.',
              collocation: 'lucrative trade route'
            },
            {
              word: 'sovereignty',
              pos: 'n.',
              phonetic: '/ˈsɑːv.rən.t̬i/',
              definitionEn: 'The power that an independent country has to govern itself and control its own territory.',
              translationUz: 'suverenitet, mustaqil davlat huquqi',
              sampleSentence: 'Nations actively defend their territorial sovereignty in coastal economic zones.',
              collocation: 'national sovereignty'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u5-p2-q1',
              type: 'main-idea',
              question: 'Why do national defense strategists categorize climate change as a "threat multiplier"?',
              options: [
                'Because it multiplies the price of solar panels in supermarkets',
                'Because it exacerbates existing poverty, water scarcity, and political tensions, triggering new conflicts',
                'Because it makes tanks drive faster across snowy fields',
                'Because all military bases are required to plant flower gardens'
              ],
              correctIndex: 1,
              explanationUz: 'Iqlim o\'zgarishi mavjud qashshoqlik, suv tanqisligi va siyosiy beqarorlikni bir necha barobar kuchaytirib (threat multiplier), yangi mojarolarni yuzaga keltiradi.'
            },
            {
              id: 'rrw1-u5-p2-q2',
              type: 'detail',
              question: 'What is happening in the Arctic as polar sea ice melts?',
              options: [
                'Polar bears have built underwater cities',
                'New commercial shipping shortcuts and rich mineral/oil reserves have opened, attracting superpower competition',
                'The Arctic Ocean has completely turned into fresh drinking water',
                'All countries have agreed to ban ships from entering the North Pole'
              ],
              correctIndex: 1,
              explanationUz: 'Muz erishi natijasida yangi qisqa dengiz savdo yo\'llari va neft/mineral konlari ochildi, bu esa AQSh, Rossiya va Xitoy kabi davlatlar raqobatini oshirdi.'
            },
            {
              id: 'rrw1-u5-p2-q3',
              type: 'vocabulary',
              question: 'In paragraph 3, the word "flashpoint" most likely means:',
              options: [
                'A photography camera accessory',
                'A location or situation likely to erupt into sudden violent conflict',
                'A lighthouse on a peaceful beach',
                'A computer screen saver'
              ],
              correctIndex: 1,
              explanationUz: '"Flashpoint" — to\'satdan urush yoki qurolli nizo alangalanib ketishi mumkin bo\'lgan xavfli hudud.'
            },
            {
              id: 'rrw1-u5-p2-q4',
              type: 'inference',
              question: 'Why do massive hydroelectric dams upstream cause friction with downstream nations?',
              options: [
                'They block the view of sunsets for downstream citizens',
                'Downstream nations face severe water shortages when the upstream country retains water during droughts',
                'Downstream countries do not like the color of concrete dams',
                'Dams make the water too salty to drink'
              ],
              correctIndex: 1,
              explanationUz: 'Daryoning yuqori oqimidagi davlat suvni to\'sib olganda, quyi oqimdagi davlatlar ekin sug\'orish va ichimlik suvisiz qoladi, bu esa keskin nizo keltirib chiqaradi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'Climate Geopolitics: Ecological Shifts and Security Flashpoints',
            sections: [
              {
                heading: '1. Prolonged Regional Droughts',
                points: [
                  'Agricultural collapse and crop failure in vulnerable regions.',
                  'Mass rural migration into overburdened urban centers sparking unrest.'
                ]
              },
              {
                heading: '2. Transboundary River Disputes',
                points: [
                  'Upstream mega-dams (Nile, Mekong, Indus) restrict river flow.',
                  'Downstream neighbors suffer water shortages and threaten military escalation.'
                ]
              },
              {
                heading: '3. Arctic Thaw & Resource Scramble',
                points: [
                  'Melting polar sea ice unlocks lucrative Northern Sea routes.',
                  'Superpowers deploy military assets to secure petroleum and mineral claims.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think future wars will be fought over access to clean fresh water rather than oil?',
            'What international treaties should govern the newly opened shipping passages in the Arctic?'
          ]
        }
      ]
    },
    {
      id: 'rrw1-u6',
      unitNumber: 6,
      title: 'Food Science & Nutrition',
      subjectArea: 'Nutritional Biochemistry',
      themeDescriptionUz: 'Organik oziq-ovqatlarning ilmiy tahlili, oziq-ovqat marketingi va shakar sanoatining inson salomatligiga ta\'siri.',
      passages: [
        {
          id: 'rrw1-u6-p1',
          passageNumber: 1,
          title: 'The Organic Food Debate: Science vs Marketing',
          subtitle: 'Separating nutritional reality from supermarket hype in the multi-billion dollar organic industry',
          themeCategory: 'Nutrition Science',
          level: 'B1',
          wordCount: 435,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'Do you buy organic fruits and vegetables? Why or why not?',
            'Do you believe organic food is significantly healthier than conventional produce?'
          ],
          paragraphs: [
            'Walk down any contemporary supermarket aisle, and you are bombarded by glossy green labels proudly proclaiming products to be "100% Certified Organic." Over the past three decades, the global organic food market has exploded into a multi-billion dollar juggernaut. Consumers routinely pay premiums of fifty to one hundred percent more for organic apples, milk, and eggs, firmly convinced that they are purchasing superior nutritional vitality and shielding their families from hazardous toxins.',
            'However, when clinical nutritional scientists conduct rigorous double-blind meta-analyses comparing organic and conventional produce, the scientific evidence tells a far more nuanced story. A landmark systematic review conducted by Stanford University researchers analyzed hundreds of independent studies and concluded that organic foods do not exhibit statistically meaningful differences in vitamin concentrations, protein quality, or dietary mineral content compared to standard groceries.',
            'Where organic farming does offer demonstrable advantages is in pesticide residue reduction and agricultural ecology. Organic protocols strictly prohibit synthetic chemical fertilizers, artificial pesticides, and prophylactic antibiotic administration in livestock. Consequently, organic fruits and vegetables contain significantly lower levels of measurable chemical residue, though conventional produce levels almost universally fall safely beneath government toxicity thresholds.',
            'Furthermore, sustainable organic cultivation practices nurture soil microbiomes and reduce nitrogen runoff into freshwater lakes and oceans. Ultimately, medical epidemiologists stress that whether you purchase organic or conventional produce, the paramount health objective is consuming abundant daily servings of fresh fruits and green vegetables, rather than obsessing over packaging labels.'
          ],
          summaryUz: 'Ushbu darsda organik va an\'anaviy oziq-ovqatlar o\'rtasidagi ilmiy farqlar ko\'rib chiqiladi. Standford universiteti tadqiqotlariga ko\'ra, organik mahsulotlar ozuqaviy qiymati (vitaminlar, minerallar) bo\'yicha oddiy mahsulotlardan deyarli farq qilmaydi. Biroq ularda pestitsid va kimyoviy qoldiqlar ancha kam bo\'ladi. Shifokorlar eng muhimi ko\'proq meva va sabzavot iste\'mol qilish ekanini ta\'kidlaydilar.',
          targetVocab: [
            {
              word: 'juggernaut',
              pos: 'n.',
              phonetic: '/ˈdʒʌɡ.ɚ.nɑːt/',
              definitionEn: 'A very large, powerful, and unstoppable force or organization.',
              translationUz: 'to\'xtatib bo\'lmas ulkan kuch, yirik sanoat',
              sampleSentence: 'The organic food industry has transformed into an unstoppable economic juggernaut.',
              collocation: 'economic juggernaut'
            },
            {
              word: 'premium',
              pos: 'n.',
              phonetic: '/ˈpriː.mi.əm/',
              definitionEn: 'An extra amount of money that is added to the usual cost or price of something.',
              translationUz: 'qo\'shimcha ustama to\'lov, qimmat narx',
              sampleSentence: 'Shoppers willingly pay a high premium for environmentally friendly groceries.',
              collocation: 'pay a premium'
            },
            {
              word: 'nuanced',
              pos: 'adj.',
              phonetic: '/ˈnuː.ɑːnst/',
              definitionEn: 'Made up of or showing subtle distinctions and variations.',
              translationUz: 'nozik farqlarga ega, biryoqlama bo\'lmagan',
              sampleSentence: 'The scientific reality surrounding nutrition is much more nuanced than advertising suggests.',
              collocation: 'nuanced story'
            },
            {
              word: 'prohibit',
              pos: 'v.',
              phonetic: '/proʊˈhɪb.ɪt/',
              definitionEn: 'To officially forbid something by law, rule, or other authority.',
              translationUz: 'taqiqlamoq, man etmoq',
              sampleSentence: 'Strict organic guidelines prohibit the use of synthetic chemical sprays on orchards.',
              collocation: 'strictly prohibit'
            },
            {
              word: 'residue',
              pos: 'n.',
              phonetic: '/ˈrez.ə.duː/',
              definitionEn: 'A small amount of something that remains after the main part has gone or been taken.',
              translationUz: 'qoldiq, kimyoviy qoldiq modda',
              sampleSentence: 'Thoroughly washing raw vegetables washes away any remaining pesticide residue.',
              collocation: 'pesticide residue'
            },
            {
              word: 'paramount',
              pos: 'adj.',
              phonetic: '/ˈper.ə.maʊnt/',
              definitionEn: 'More important than anything else; supreme in rank or authority.',
              translationUz: 'birlamchi, eng muhim, ustuvor',
              sampleSentence: 'Getting adequate sleep and regular hydration is of paramount importance to athletes.',
              collocation: 'paramount objective'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u6-p1-q1',
              type: 'main-idea',
              question: 'What is the primary conclusion of the Stanford University review regarding organic foods?',
              options: [
                'Organic foods cause dangerous vitamin deficiencies in children',
                'Organic foods do not possess significantly superior vitamin or nutritional content compared to conventional produce',
                'Conventional apples contain twice as much protein as organic alternatives',
                'Supermarkets will soon eliminate all conventional produce sections'
              ],
              correctIndex: 1,
              explanationUz: 'Stanford universiteti xulosasiga ko\'ra, organik oziq-ovqatlarda vitamin va ozuqa moddalari miqdori oddiy oziq-ovqatlardan deyarli ustun emas.'
            },
            {
              id: 'rrw1-u6-p1-q2',
              type: 'detail',
              question: 'In what specific area do organic farming practices demonstrate an unambiguous advantage?',
              options: [
                'Faster delivery to neighborhood convenience stores',
                'Lowering the purchase cost for low-income consumers',
                'Reducing agricultural pesticide residues and prohibiting synthetic fertilizers',
                'Eliminating the need to water crops during droughts'
              ],
              correctIndex: 2,
              explanationUz: 'Matnga ko\'ra, organik dehqonchilikning asosiy yutug\'i — sintetik kimyoviy o\'g\'itlar va pestitsid qoldiqlarining keskin kam bo\'lishidir.'
            },
            {
              id: 'rrw1-u6-p1-q3',
              type: 'vocabulary',
              question: 'In paragraph 1, what does the word "juggernaut" most closely mean?',
              options: [
                'A fragile and failing business initiative',
                'An unstoppable and immensely powerful force',
                'A small seasonal wooden cart',
                'A type of exotic imported fruit'
              ],
              correctIndex: 1,
              explanationUz: '"Juggernaut" so\'zi to\'xtatib bo\'lmas darajada ulkan va qudratli kuch yoki sanoatni anglatadi.'
            },
            {
              id: 'rrw1-u6-p1-q4',
              type: 'inference',
              question: 'What do epidemiologists recommend as the most important nutritional habit?',
              options: [
                'Only purchasing food that has expensive certified organic stamps',
                'Completely avoiding all fresh fruits due to natural fruit sugars',
                'Consuming plenty of fresh fruits and vegetables regardless of organic labels',
                'Drinking carbonated sports drinks instead of municipal tap water'
              ],
              correctIndex: 2,
              explanationUz: 'Epidemiologlar yorliqqa ortiqcha berilmasdan, har kuni ko\'proq yangi meva-sabzavotlar iste\'mol qilishni eng muhim salomatlik odati deb bilishadi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Organic vs Conventional Food Production',
            sections: [
              {
                heading: 'Nutritional Composition',
                points: [
                  'Both offer equivalent vitamin, dietary fiber, and protein concentrations.',
                  'No clinically meaningful metabolic difference in human blood panels.'
                ]
              },
              {
                heading: 'Chemical Residue & Environment',
                points: [
                  'Organic: Zero synthetic pesticides, shields soil and aquatic microbiomes.',
                  'Conventional: Safe below legal toxicity thresholds, but carries measurable residues.'
                ]
              },
              {
                heading: 'Consumer Takeaway',
                points: [
                  'Prioritize eating abundant fruits and vegetables above marketing labels.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think governments should subsidize organic farming to lower its price for ordinary citizens?',
            'How much of food purchasing decisions do you think are driven by clever psychological marketing rather than biological facts?'
          ]
        },
        {
          id: 'rrw1-u6-p2',
          passageNumber: 2,
          title: 'The Hidden Sugar Epidemic',
          subtitle: 'Investigating high-fructose corn syrup, ultra-processed foods, and global metabolic health',
          themeCategory: 'Public Health',
          level: 'B1',
          wordCount: 440,
          readingTimeMinutes: 3,
          preReadingQuestions: [
            'How many teaspoons of sugar do you think the average person consumes every day?',
            'What foods contain surprising amounts of hidden added sugar?'
          ],
          paragraphs: [
            'When most people picture sugar consumption, they imagine sweet desserts: chocolate pastries, strawberry ice cream, or candy bars. However, modern public health epidemiologists warn that the true driver of the global metabolic crisis is not festive birthday cakes, but the insidious presence of "hidden sugars" engineered into everyday processed foods.',
            'Beginning in the 1970s, agricultural subsidies spurred the mass industrial synthesis of high-fructose corn syrup (HFCS). Food manufacturers quickly discovered that blending cheap liquid sugars into recipes not only heightened consumer taste cravings, but also extended shelf life, improved moisture retention in baked goods, and enhanced food color. Today, added sugars lurk in unexpected grocery staples, including savory pasta sauces, whole-wheat sandwich breads, breakfast cereals, salad dressings, and flavored yogurts.',
            'The physiological consequences of this dietary shift are catastrophic. Unlike glucose, which every living cell in the human body can metabolize for immediate energy, fructose is processed almost exclusively by the liver. When flooded with liquid fructose from soda and processed snacks, the liver converts the excess calories into fat droplets, sparking non-alcoholic fatty liver disease, systemic inflammation, insulin resistance, and type 2 diabetes.',
            'In response, forward-thinking public health authorities worldwide are adopting regulatory countermeasures. Countries such as Mexico, Chile, and the United Kingdom have implemented targeted sugar taxes on sweetened carbonated beverages, resulting in notable reductions in soda purchases. Health advocates contend that just as society successfully restricted tobacco advertising, aggressive truth-in-labeling laws and marketing bans aimed at children are essential to defusing the global obesity epidemic.'
          ],
          summaryUz: 'Ushbu darsda kundalik oziq-ovqatlardagi yashirin shakar (hidden sugars) epidemiyasi va uning xavflari ko\'rib chiqiladi. 1970-yillardan boshlab fruktozali jo\'xori qiyomi (HFCS) souslar, nonlar va yogurtlarga ko\'p qo\'shila boshlandi. Fruktoza faqat jigarda parchalanadi va ortiqchasi jigar yog\' bosishi, insulin qarshiligi va diabetga olib keladi. Qator davlatlar shirin ichimliklarga maxsus soliqlar joriy qilmoqda.',
          targetVocab: [
            {
              word: 'insidious',
              pos: 'adj.',
              phonetic: '/ɪnˈsɪd.i.əs/',
              definitionEn: 'Gradually and secretly causing harm without being easily noticed.',
              translationUz: 'bildirmasdan zarar yetkazuvchi, makkor, sezdirmaydigan',
              sampleSentence: 'Hidden sugars cause an insidious decline in metabolic cardiovascular health.',
              collocation: 'insidious presence'
            },
            {
              word: 'spurred',
              pos: 'v.',
              phonetic: '/spɝːd/',
              definitionEn: 'Encouraged, stimulated, or pushed into rapid development or action.',
              translationUz: 'jadallashtirdi, turtki berdi, rag\'batlantirdi',
              sampleSentence: 'Government agricultural subsidies spurred mass production of high-fructose syrup.',
              collocation: 'spurred production'
            },
            {
              word: 'staple',
              pos: 'n.',
              phonetic: '/ˈsteɪ.pəl/',
              definitionEn: 'A basic food or primary product that is used regularly by a community.',
              translationUz: 'asosiy oziq-ovqat mahsuloti, kundalik taom',
              sampleSentence: 'Bread and rice remain primary dietary staples for billions of families.',
              collocation: 'grocery staples'
            },
            {
              word: 'metabolize',
              pos: 'v.',
              phonetic: '/məˈtæb.əl.aɪz/',
              definitionEn: 'To change food into energy and new biological tissue by biochemical processes.',
              translationUz: 'moddalar almashinuvida parchalash, o\'zlashtirmoq',
              sampleSentence: 'Unlike muscle cells, the liver must metabolize all dietary fructose.',
              collocation: 'metabolize calories'
            },
            {
              word: 'countermeasure',
              pos: 'n.',
              phonetic: '/ˈkaʊn.t̬ɚˌmeʒ.ɚ/',
              definitionEn: 'An action taken to protect against something or counteract a negative effect.',
              translationUz: 'qarshi chora, bartaraf etish tadbiri',
              sampleSentence: 'The Ministry of Health implemented strict countermeasures against sugary beverage marketing.',
              collocation: 'regulatory countermeasures'
            },
            {
              word: 'advocate',
              pos: 'n.',
              phonetic: '/ˈæd.və.kət/',
              definitionEn: 'A person who publicly supports or recommends a particular cause or policy.',
              translationUz: 'tarafdor, himoyachi, ilgari suruvchi',
              sampleSentence: 'Public health advocates are petitioning for mandatory warning labels on soda cans.',
              collocation: 'health advocates'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw1-u6-p2-q1',
              type: 'main-idea',
              question: 'What is the central focus of the article concerning modern sugar consumption?',
              options: [
                'Sweet cakes baked exclusively for birthday celebrations',
                'Hidden added sugars engineered into everyday staple processed foods',
                'The decline of traditional sugarcane farming in the tropics',
                'Why children should drink fruit juices before bedtime'
              ],
              correctIndex: 1,
              explanationUz: 'Maqolaning asosiy diqqati kundalik oddiy qayta ishlangan oziq-ovqatlarga (sous, non, yogurt) yashirincha qo\'shiladigan shakar va uning oqibatlariga qaratilgan.'
            },
            {
              id: 'rrw1-u6-p2-q2',
              type: 'detail',
              question: 'How does the human body process dietary fructose differently from glucose?',
              options: [
                'Fructose is metabolized almost entirely by the liver rather than all cells',
                'Fructose strengthens teeth enamel during digestion',
                'Fructose cannot be digested and leaves the body immediately',
                'Glucose is only absorbed through the skin'
              ],
              correctIndex: 0,
              explanationUz: 'Glyukoza barcha tana hujayralari tomonidan energiya sifatida ishlatilsa, fruktoza faqat jigarda qayta ishlanadi va ortiqchasi yog\'ga aylanadi.'
            },
            {
              id: 'rrw1-u6-p2-q3',
              type: 'vocabulary',
              question: 'What does the adjective "insidious" imply about hidden sugars?',
              options: [
                'They taste extremely bitter and unpleasant',
                'They are harmless and beneficial to teeth',
                'They quietly and gradually inflict severe bodily harm without obvious signs',
                'They are only sold in transparent glass jars'
              ],
              correctIndex: 2,
              explanationUz: '"Insidious" so\'zi sezdirmasdan, makkorlik bilan sekin-asta katta zarar keltiradigan holatni anglatadi.'
            },
            {
              id: 'rrw1-u6-p2-q4',
              type: 'inference',
              question: 'Why have countries like the UK and Chile enacted taxes on sugary drinks?',
              options: [
                'To punish farmers who grow organic citrus trees',
                'To discourage the purchase of sweetened sodas and combat obesity epidemics',
                'To encourage people to drink alcohol instead of water',
                'To raise money exclusively for military weapons'
              ],
              correctIndex: 1,
              explanationUz: 'Shirin gazlangan ichimliklar solig\'i odamlarning nosog\'lom ichimliklarni sotib olishini kamaytirish va semizlik epidemiyasiga qarshi kurashish uchun joriy qilingan.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'The Hidden Sugar Epidemic Pathway',
            sections: [
              {
                heading: 'Industrial Cause (1970s onwards)',
                points: [
                  'Subsidized High-Fructose Corn Syrup (HFCS) added to pasta sauces, bread, and yogurt.',
                  'Extended shelf-life and engineered addictive flavor profiles.'
                ]
              },
              {
                heading: 'Biological Mechanism',
                points: [
                  'Dietary fructose metabolized solely in the liver.',
                  'Excess fructose converted into fat: leads to insulin resistance and type 2 diabetes.'
                ]
              },
              {
                heading: 'Public Health Countermeasures',
                points: [
                  'Targeted sugar taxes on carbonated sodas.',
                  'Aggressive warning labels and restrictions on advertising to youth.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Should governments impose a tax on ultra-processed junk foods similar to tobacco taxes?',
            'Do you regularly check nutrition labels for "added sugars" before buying packaged foods?'
          ]
        }
      ]
    },
    ...BOOK1_MORE_UNITS
  ]
};

