import { RealWorldBook } from '../../types';
import { BOOK3_UNITS_PART2 } from './book3UnitsPart2';
import { BOOK3_UNITS_PART3 } from './book3UnitsPart3';
import { BOOK3_UNITS_PART4 } from './book3UnitsPart4';

export const RRW_BOOK_3: RealWorldBook = {
  id: 'rrw-book-3',
  bookNumber: 3,
  title: 'Reading for the Real World 3',
  edition: '4th Edition (Compass Publishing / Essential English)',
  targetLevel: 'Advanced (B2+/C1)',
  cefrLevel: 'C1',
  descriptionUz: 'C1 darajadagi akademik ingliz tili, fan va jamiyatning eng murakkab muammolari: ilmiy qalbakilashtirishlar, gen terapiyasi, internetning xotiraga ta\'siri va robotika etikasi.',
  coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  totalUnits: 12,
  totalPassages: 24,
  totalTargetWords: 168,
  colorTheme: {
    primary: '#059669', // Emerald 600
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    gradient: 'from-emerald-600 to-teal-800'
  },
  units: [
    {
      id: 'rrw3-u1',
      unitNumber: 1,
      title: 'Strange & Unusual',
      subjectArea: 'Paleoanthropology & Historical Hoaxes',
      themeDescriptionUz: 'Ilm-fan tarixidagi eng yirik qalbakilashtirish — Piltdaun odami va Qadimgi Misr fironlari la\'nati afsonasi.',
      passages: [
        {
          id: 'rrw3-u1-p1',
          passageNumber: 1,
          title: 'The Piltdown Man: The Greatest Scientific Hoax in History',
          subtitle: 'How nationalistic pride and confirmation bias deceived world paleontologists for forty years',
          themeCategory: 'Paleoanthropology',
          level: 'C1',
          wordCount: 480,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Why do even highly educated scientists sometimes fall victim to fraudulent claims?',
            'What is "confirmation bias," and how does it influence scientific investigation?'
          ],
          paragraphs: [
            'In December 1912, the Geological Society of London erupted into spontaneous applause when amateur antiquarian Charles Dawson and prominent paleontologist Sir Arthur Smith Woodward unveiled sensational fossil fragments discovered in a gravel pit near Piltdown in Sussex, England. The skull appeared to possess the cranium of a modern human paired with the primitive jaw of an ape. It was triumphantly heralded as "Eoanthropus dawsoni"—the long-sought evolutionary "Missing Link" bridging early hominids with Homo sapiens.',
            'For the British scientific establishment, the discovery was intoxicating. At the time, major ancestral hominid fossils had already been discovered in Germany (Neanderthal) and France (Cro-Magnon); the British Empire, despite its global preeminence, lacked any prehistoric fossil proof of ancient human lineage on its native soil. Piltdown conveniently filled this patriotic void, appearing to confirm the prevailing Eurocentric hypothesis that brain enlargement had preceded upright walking in human evolutionary trajectory.',
            'For four decades, the Piltdown fossils were revered in academic textbooks, protected from skeptical scrutiny, and utilized to dismiss authentic African hominid discoveries—most notably Raymond Dart\'s 1924 discovery of Australopithecus africanus (the Taung Child). However, as evolutionary discoveries across Africa and Asia consistently established that upright bipedalism evolved millions of years before brain size expanded, the Piltdown anatomy grew increasingly anomalous.',
            'The catastrophic deception unraveled definitively in 1953 when researchers at the Natural History Museum subjected the original specimens to rigorous fluorine absorption dating and microscopic chemical analysis. The verdict was humiliating: the Piltdown skull was an elaborate, calculated forgery. The cranium belonged to a medieval human only six hundred years old; the jawbone was taken from a female orangutan, its teeth filed flat with metal rasps and chemically stained with potassium dichromate to simulate ancient geological fossilization. The Piltdown debacle stands as an enduring epistemological warning: when scientists desperately desire to confirm a flattering hypothesis, critical objectivity is the first casualty.'
          ],
          summaryUz: 'Ushbu darsda fan tarixidagi eng mashhur soxtalashtirish — "Piltdaun odami" (Piltdown Man) tahlil qilinadi. 1912-yilda Britaniyada inson va maymun o\'rtasidagi "yo\'qolgan bo\'g\'in" deb e\'lon qilingan bu topilma 40 yil davomida darsliklarda saqlanib kelgan. Biroq 1953-yilda kimyoviy tahlil orqali uning o\'rta asrlarga oid inson bosh suyagi va orangutan jag\'ini egovlab yasalgan qalloblik ekani fosh qilindi.',
          targetVocab: [
            {
              word: 'antiquarian',
              pos: 'n.',
              phonetic: '/ˌæn.təˈkwer.i.ən/',
              definitionEn: 'A person who studies or collects old and valuable objects, especially very ancient ones.',
              translationUz: 'antikvar, qadimiy ashyolarni o\'rganuvchi havaskor',
              sampleSentence: 'The antiquarian spent his weekends exploring ancient Roman ruins in the countryside.',
              collocation: 'amateur antiquarian'
            },
            {
              word: 'preeminence',
              pos: 'n.',
              phonetic: '/priːˈem.ə.nəns/',
              definitionEn: 'The quality of being much more important, skillful, or successful than others.',
              translationUz: 'ustunlik, peshqadamlik, yetakchilik mavqeyi',
              sampleSentence: 'The empire maintained economic preeminence throughout the nineteenth century.',
              collocation: 'global preeminence'
            },
            {
              word: 'anomalous',
              pos: 'adj.',
              phonetic: '/əˈnɑː.mə.ləs/',
              definitionEn: 'Different from what is usual, expected, or standard.',
              translationUz: 'anomal, noodatiy, qoidaga to\'g\'ri kelmaydigan',
              sampleSentence: 'The laboratory detected an anomalous spike in ocean water temperature.',
              collocation: 'anomalous data'
            },
            {
              word: 'forgery',
              pos: 'n.',
              phonetic: '/ˈfɔːr.dʒɚ.i/',
              definitionEn: 'An illegal copy of a document, painting, or fossil, or the crime of making such copies.',
              translationUz: 'qalbakilashtirish, soxta nusxa, firibgarlik',
              sampleSentence: 'Art historians revealed that the Renaissance painting was a modern forgery.',
              collocation: 'elaborate forgery'
            },
            {
              word: 'epistemological',
              pos: 'adj.',
              phonetic: '/ɪˌpɪs.tə.məˈlɑː.dʒɪ.kəl/',
              definitionEn: 'Relating to the philosophical study of the nature, origin, and limits of human knowledge.',
              translationUz: 'epistemologik, bilish nazariyasiga oid',
              sampleSentence: 'The scientific method imposes strict epistemological criteria for empirical verification.',
              collocation: 'epistemological warning'
            },
            {
              word: 'debacle',
              pos: 'n.',
              phonetic: '/deɪˈbɑː.kəl/',
              definitionEn: 'A complete failure, especially because of bad planning and organization.',
              translationUz: 'sharmandali mag\'lubiyat, fiyasko, qulash',
              sampleSentence: 'The military campaign dissolved into a catastrophic strategic debacle.',
              collocation: 'scientific debacle'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw3-u1-p1-q1',
              type: 'main-idea',
              question: 'Why did the Piltdown Man forgery succeed in deceiving the scientific community for four decades?',
              options: [
                'Because microscopic carbon-dating was invented in ancient Greece',
                'Because it flattered British nationalistic pride and matched the prevailing hypothesis about brain-first evolution',
                'Because Charles Dawson was the prime minister of Great Britain',
                'Because the fossils were discovered by an artificial intelligence supercomputer'
              ],
              correctIndex: 1,
              explanationUz: 'Qalloblikning uzoq saqlanib qolish sababi: u Britaniya milliy g\'ururiga mos kelgan va inson evolyutsiyasida avval miya o\'sgan degan farazni tasdiqlagandek ko\'ringan.'
            },
            {
              id: 'rrw3-u1-p1-q2',
              type: 'detail',
              question: 'What did chemical analysis in 1953 definitively prove about the Piltdown fossils?',
              options: [
                'The skull belonged to an extinct dinosaur',
                'The cranium was medieval human bone, while the jaw belonged to an orangutan with filed-down teeth',
                'The bones were made of modern plastic polymers from Germany',
                'The skeleton belonged to an ancient astronaut from Mars'
              ],
              correctIndex: 1,
              explanationUz: '1953-yildagi kimyoviy tahlil shuni ko\'rsatdiki, bosh suyagi 600 yillik o\'rta asr odamiga, jag\' esa tishlari egovlangan urg\'ochi orangutanga tegishli bo\'lgan.'
            },
            {
              id: 'rrw3-u1-p1-q3',
              type: 'inference',
              question: 'How did Piltdown Man negatively affect genuine paleoanthropology during the 1920s?',
              options: [
                'It caused researchers to burn down the British Natural History Museum',
                'It led scholars to mistakenly dismiss legitimate African hominid discoveries like the Taung Child',
                'It forced universities to stop teaching biology classes entirely',
                'It prevented archaeologists from visiting Egyptian pyramids'
              ],
              correctIndex: 1,
              explanationUz: 'Piltdaun soxta topilmasi tufayli olimlar 1924-yilda Afrikada topilgan haqiqiy Australopithecus kashfiyotini uzoq vaqt rad etib kelishgan.'
            },
            {
              id: 'rrw3-u1-p1-q4',
              type: 'vocabulary',
              question: 'In the passage, the word "debacle" is closest in meaning to:',
              options: [
                'A glorious architectural victory',
                'A disastrous and humiliating collapse or failure',
                'A peaceful international treaty',
                'An annual academic graduation ceremony'
              ],
              correctIndex: 1,
              explanationUz: '"Debacle" so\'zi fiyasko, sharmandali muvaffaqiyatsizlik yoki qulash (disastrous failure) degan ma\'noni beradi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'The Piltdown Man Hoax: Motivations, Methods, and Exposure',
            sections: [
              {
                heading: 'Psychological & Social Motives',
                points: [
                  'British desire for an ancestral fossil to rival German Neanderthals.',
                  'Eurocentric bias assuming brain growth preceded bipedalism.'
                ]
              },
              {
                heading: 'Method of Forgery',
                points: [
                  'Combining 600-year-old human skull with modern female orangutan jaw.',
                  'Filing molar teeth flat with metal rasps to mimic human wear.',
                  'Staining bones with potassium dichromate to simulate geological age.'
                ]
              },
              {
                heading: 'Scientific Unraveling (1953)',
                points: [
                  'Fluorine absorption dating proves bones are disparate and modern.',
                  'Re-establishment of African hominid evolutionary origins.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'What modern safeguards does the scientific peer-review process use today to prevent similar scientific hoaxes?',
            'Can you think of any contemporary beliefs where confirmation bias causes intelligent people to overlook contradictory facts?'
          ]
        },
        {
          id: 'rrw3-u1-p2',
          passageNumber: 2,
          title: 'The Curse of the Mummy: Myth versus Archaeology',
          subtitle: 'Unpacking the 1922 discovery of King Tutankhamun and the psychology of gothic journalism',
          themeCategory: 'Egyptology & Cultural History',
          level: 'C1',
          wordCount: 470,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Have you heard of the "Mummy\'s Curse" that allegedly killed the excavators of Tutankhamun\'s tomb?',
            'How did newspaper rivalries and exclusive contracts contribute to creating modern urban legends?'
          ],
          paragraphs: [
            'In November 1922, British archaeologist Howard Carter made what remains the most breathtaking discovery in the annals of Egyptology: the virtually intact, treasure-laden tomb of the eighteenth-dynasty Pharaoh Tutankhamun in the Valley of the Kings. Yet, while scholars celebrated an unparalleled historical bonanza, the global public became captivated by a darker, chilling narrative: the dreaded "Curse of the Pharaohs."',
            'The sensational rumor erupted following the sudden death of George Herbert, the 5th Earl of Carnarvon, Carter\'s aristocratic financial patron. Just five months after breaking the subterranean seals of the tomb, Carnarvon succumbed in a Cairo hospital to blood poisoning resulting from an infected mosquito bite that developed into severe pneumonia. Instantly, sensationalist tabloid journalists fabricated lurid accounts of a magical hieroglyphic warning carved above the tomb door, promising death on swift wings to anyone who dared disturb the slumber of the pharaoh.',
            'In reality, the myth was largely manufactured by the hyper-competitive press of the 1920s. Carnarvon had signed an exclusive commercial contract granting the London Times sole journalistic access to the tomb; enraged rival reporters, starved for content, began churning out speculative occult melodrama. Authors like Sir Arthur Conan Doyle—already famous for his public embrace of spiritualism—enthusiastically validated the curse, assuring readers that elemental spirits guarded ancient tombs.',
            'Rigorous statistical epidemiology, however, demolishes the curse hypothesis completely. A comprehensive study published in the British Medical Journal tracked the lifespan of forty-four Westerners present during the tomb\'s opening and unwrapping. The average lifespan of those present exceeded seventy years; Howard Carter himself, who breathed the tomb\'s stale air for nearly a decade, lived to sixty-four before dying of natural lymphoma in 1939. While toxic fungal spores like Aspergillus niger do occasionally survive in ancient crypts, the true "curse" was nothing more than gothic journalism meeting the eternal human appetite for the supernatural.'
          ],
          summaryUz: 'Ushbu darsda 1922-yilda Tutanxamon maqbarasining ochilishi va unga bog\'langan "Firon la\'nati" haqiqati tahlil qilinadi. Karter homiysi Lord Karnarvon chivin chaqishi oqibatida vafot etgach, jurnalistlar shov-shuv ko\'tarishgan. Biroq statistik tibbiyot shuni ko\'rsatadiki, qabrni ochgan 44 kishining o\'rtacha umri 70 yoshdan oshgan.',
          targetVocab: [
            {
              word: 'annals',
              pos: 'n.',
              phonetic: '/ˈæn.əlz/',
              definitionEn: 'Historical records of events in the order in which they happened.',
              translationUz: 'solnomalar, tarixiy bitiklar, yilnomalar',
              sampleSentence: 'His courageous rescue will forever be remembered in the annals of mountaineering.',
              collocation: 'in the annals of history'
            },
            {
              word: 'bonanza',
              pos: 'n.',
              phonetic: '/bəˈnæn.zə/',
              definitionEn: 'A situation from which a large amount of wealth or success can be gained.',
              translationUz: 'ulkan boylik, mo\'l-ko\'l xazina, omadli manba',
              sampleSentence: 'The discovery of offshore natural gas proved an economic bonanza for the nation.',
              collocation: 'historical bonanza'
            },
            {
              word: 'lurid',
              pos: 'adj.',
              phonetic: '/ˈlʊr.ɪd/',
              definitionEn: 'Too brightly colored, or shocking and unpleasant, especially about sex, crime, or violence.',
              translationUz: 'vahimali, dahshatli, bo\'rttirilgan',
              sampleSentence: 'The tabloids printed lurid headlines describing the celebrity scandal.',
              collocation: 'lurid accounts'
            },
            {
              word: 'occult',
              pos: 'adj.',
              phonetic: '/əˈkʌlt/',
              definitionEn: 'Relating to magical powers and activities, not connected with science.',
              translationUz: 'okkult, sirli, g\'ayritabiiy, sehr-joduga oid',
              sampleSentence: 'The secret society claimed to possess ancient occult knowledge.',
              collocation: 'occult melodrama'
            },
            {
              word: 'succumb',
              pos: 'v.',
              phonetic: '/səˈkʌm/',
              definitionEn: 'To lose the determination to oppose something, or to die from a disease.',
              translationUz: 'taslim bo\'lmoq, kasallikdan vafot etmoq',
              sampleSentence: 'After battling illness for months, the elder statesman finally succumbed.',
              collocation: 'succumb to illness'
            },
            {
              word: 'demolish',
              pos: 'v.',
              phonetic: '/dɪˈmɑː.lɪʃ/',
              definitionEn: 'To completely destroy a building, or to completely prove an idea or argument is wrong.',
              translationUz: 'butunlay yakson qilmoq, rad etib puchga chiqarmoq',
              sampleSentence: 'The new experimental data completely demolished the professor\'s initial premise.',
              collocation: 'demolish a hypothesis'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw3-u1-p2-q1',
              type: 'main-idea',
              question: 'What does the reading passage conclude about the "Curse of the Pharaohs"?',
              options: [
                'It was an ancient magical curse validated by modern physics and mathematics.',
                'It was an invention of sensationalist journalists fueled by media competition, thoroughly debunked by statistical epidemiology.',
                'It was a deadly chemical gas invented by pharaohs to poison all European visitors.',
                'Howard Carter died two hours after entering the tomb.'
              ],
              correctIndex: 1,
              explanationUz: 'Xulosa: Firon la\'nati haqiqiy emas, balki gazetalarning raqobati natijasida to\'qib chiqarilgan shov-shuv bo\'lib, tibbiy statistika buni butunlay inkor etadi.'
            },
            {
              id: 'rrw3-u1-p2-q2',
              type: 'detail',
              question: 'What was the true medical cause of Lord Carnarvon\'s death in Cairo?',
              options: [
                'A cobra bite inside the golden sarcophagus',
                'Blood poisoning from an infected mosquito bite developing into pneumonia',
                'Old age at ninety-nine years old',
                'A collapse of the stone ceiling of the burial chamber'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda: "Carnarvon succumbed in a Cairo hospital to blood poisoning resulting from an infected mosquito bite that developed into severe pneumonia".'
            },
            {
              id: 'rrw3-u1-p2-q3',
              type: 'detail',
              question: 'What did the British Medical Journal study find regarding the people who opened the tomb?',
              options: [
                'All forty-four individuals died within thirty days.',
                'Their average lifespan exceeded seventy years, demonstrating normal longevity.',
                'They all lost their ability to speak English.',
                'They became wealthy pharaohs in modern Egypt.'
              ],
              correctIndex: 1,
              explanationUz: 'Tadqiqot shuni ko\'rsatdiki, qabrni ochganlarning o\'rtacha umri 70 yoshdan oshgan, ya\'ni ular uzoq va normal umr ko\'rishgan.'
            },
            {
              id: 'rrw3-u1-p2-q4',
              type: 'vocabulary',
              question: 'The word "lurid" in paragraph 2 is closest in meaning to:',
              options: [
                'Shocking, sensational, and exaggerated',
                'Accurate, modest, and mathematical',
                'Written in ancient hieroglyphs',
                'Extremely slow and peaceful'
              ],
              correctIndex: 0,
              explanationUz: '"Lurid" so\'zi shov-shuvli, vahimali, o\'ta bo\'rttirilgan (shocking, sensational) degan ma\'noda kelgan.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'compare-contrast',
            title: 'Tutankhamun\'s Tomb: Sensational Myth vs Epidemiological Fact',
            sections: [
              {
                heading: 'Tabloid Myth (1920s Press)',
                points: [
                  'Supernatural death hieroglyphs above the tomb portal.',
                  'Lord Carnarvon struck down by occult forces.',
                  'Avenging disturbance of the royal mummy.'
                ]
              },
              {
                heading: 'Historical & Scientific Facts',
                points: [
                  'Carnarvon had pre-existing weak lungs; died of pneumonia after mosquito bite infection.',
                  'Rival journalists shut out by exclusive Times contract fabricated stories.',
                  'BMJ study: 44 people present lived past age 70 on average.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Why do media organizations often prioritize sensational supernatural stories over boring factual corrections?',
            'Should ancient archaeological human remains (like Egyptian mummies) be displayed in museums, or reburied with dignity?'
          ]
        }
      ]
    },
    {
      id: 'rrw3-u2',
      unitNumber: 2,
      title: 'Computers & Technology',
      subjectArea: 'Cognitive Science & Artificial Intelligence',
      themeDescriptionUz: 'Internet va smartfonlarning inson xotirasiga ta\'siri (Google Effect) hamda sun\'iy idrok va robotika etikasi.',
      passages: [
        {
          id: 'rrw3-u2-p1',
          passageNumber: 1,
          title: 'Is the Internet Ruining Your Memory? The Google Effect',
          subtitle: 'Digital amnesia, cognitive offloading, and transactive memory in the age of instant search',
          themeCategory: 'Cognitive Neuroscience',
          level: 'C1',
          wordCount: 475,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'How many phone numbers of your close friends or family can you recite from memory right now?',
            'When you need to remember a fact, do you try to recall it or immediately type it into a search engine?'
          ],
          paragraphs: [
            'In ancient Greece, the philosopher Socrates famously expressed grave alarm regarding a newly emerging technology that he feared would permanently degrade human intellect: the written word. Socrates argued that reliance on written letters would plant forgetfulness in learners\' souls, because they would cease to exercise their internal biological memory and rely instead on external marks on papyrus. Today, a remarkably parallel debate preoccupies cognitive neuroscientists, but the technological catalyst is not paper—it is the internet search engine.',
            'Seminal psychological research led by Dr. Betsy Sparrow at Columbia University identified a neurological phenomenon dubbed "The Google Effect" or "digital amnesia." Sparrow\'s experiments demonstrated that when participants are informed that computer files will save information for future reference, their brains make significantly less cognitive effort to retain the underlying facts. Instead, their neural circuitry prioritizes remembering where or how to access the information—essentially transforming the brain from a repository of factual knowledge into an index of online locations.',
            'Psychologists categorize this behavior as "cognitive offloading." Just as humans have historically engaged in transactive memory systems—relying on spouses, colleagues, or librarians to hold specialized domain knowledge—we now treat the internet as an omnipresent, external cerebral hard drive. Why expend metabolic energy memorizing historical dates, geological strata, or mathematical constants when a smartphone delivers instant verification in fractions of a second?',
            'However, neuroscientists warn of insidious cognitive consequences. The deep creative synthesis of ideas—the foundational spark of scientific innovation and philosophical insight—requires disparate memories to be stored internally within long-term biological synaptic networks, where the subconscious mind can forge unexpected connections. If our working memory merely retrieves external search results without internalizing deep knowledge, our capacity for profound contemplation, critical synthesis, and mental independence may inexorably atrophy.'
          ],
          summaryUz: 'Ushbu darsda internet va qidiruv tizimlarining inson xotirasiga ta\'siri — "Google Effect" (Digital Amnesia) tahlil qilinadi. Tadqiqotlar shuni ko\'rsatadiki, kompyuter ma\'lumotni saqlab qolishini bilgan miya faktlarni eslab qolishga kuch sarflamaydi, balki ma\'lumotni qayerdan topish mumkinligini eslab qoladi ("kognitiv yukni yengillatish"). Ammo ichki xotirada chuqur bilim bo\'lmasa, yangi kashfiyotlar va chuqur tahlil qilish qobiliyati susayishi mumkin.',
          targetVocab: [
            {
              word: 'degrade',
              pos: 'v.',
              phonetic: '/dɪˈɡreɪd/',
              definitionEn: 'To reduce the quality, value, or moral standard of something.',
              translationUz: 'pasaytirmoq, sifatini tushirmoq, yemirilishga olib kelmoq',
              sampleSentence: 'Excessive pollution degrades water quality in freshwater river ecosystems.',
              collocation: 'degrade human intellect'
            },
            {
              word: 'seminal',
              pos: 'adj.',
              phonetic: '/ˈsem.ə.nəl/',
              definitionEn: 'Containing important new ideas and having a great influence on later work.',
              translationUz: 'fundamental, poydevor qo\'yuvchi, yo\'l ochib beruvchi',
              sampleSentence: 'Her seminal paper on quantum entanglement reshaped modern physics.',
              collocation: 'seminal research'
            },
            {
              word: 'repository',
              pos: 'n.',
              phonetic: '/rɪˈpɑː.zə.tɔːr.i/',
              definitionEn: 'A place where large quantities of something are stored or kept.',
              translationUz: 'xazina, omborxona, bilimlar maskani',
              sampleSentence: 'The national archives serve as a vast repository of historical treaties.',
              collocation: 'repository of knowledge'
            },
            {
              word: 'omnipresent',
              pos: 'adj.',
              phonetic: '/ˌɑːm.nɪˈprez.ənt/',
              definitionEn: 'Present or having an effect everywhere at all times.',
              translationUz: 'hamma joyda hozir bo\'lgan, har yerda mavjud',
              sampleSentence: 'Smartphones have become an omnipresent fixture of urban modern life.',
              collocation: 'omnipresent network'
            },
            {
              word: 'insidious',
              pos: 'adj.',
              phonetic: '/ɪnˈsɪd.i.əs/',
              definitionEn: 'Gradually and secretly causing harm without being noticed.',
              translationUz: 'bildirmasdan zarar yetkazuvchi, makkor, yashirin xatarli',
              sampleSentence: 'High blood pressure is an insidious condition that often produces no early symptoms.',
              collocation: 'insidious consequences'
            },
            {
              word: 'atrophy',
              pos: 'v.',
              phonetic: '/ˈæt.rə.fi/',
              definitionEn: 'To become weak and be destroyed through lack of use or lack of blood.',
              translationUz: 'zaiflashmoq, so\'lmoq, ishlatilmaslik oqibatida yo\'qolmoq',
              sampleSentence: 'Without daily intellectual challenges, mental faculties can slowly atrophy.',
              collocation: 'inexorably atrophy'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw3-u2-p1-q1',
              type: 'main-idea',
              question: 'What is the primary conclusion of the "Google Effect" research described in the text?',
              options: [
                'Computers make human eyes turn permanently blue',
                'Access to search engines causes brains to offload factual details, prioritizing retrieval pathways over internal biological retention',
                'Ancient Greek philosophers were superior to modern computers in playing chess',
                'The internet will be banned by all universities by next year'
              ],
              correctIndex: 1,
              explanationUz: 'Google Effect xulosasi: Qidiruv tizimlari tufayli inson miyasi faktlarni eslab qolishni tashqi tizimga topshiradi (offloading) va faqat qayerdan topish yo\'lini eslab qoladi.'
            },
            {
              id: 'rrw3-u2-p1-q2',
              type: 'detail',
              question: 'What ancient technology did Socrates criticize for potentially weakening human memory?',
              options: [
                'The abacus calculator',
                'The written alphabet on papyrus',
                'The optical telescope',
                'The steam engine'
              ],
              correctIndex: 1,
              explanationUz: 'Matnda keltirilgan: Suqrot o\'z davrida yozuv (the written word on papyrus) insonlarning ichki xotirasini mashq qilishdan to\'xtatib, unutuvchanlik keltirib chiqarishidan xavfsiragan.'
            },
            {
              id: 'rrw3-u2-p1-q3',
              type: 'vocabulary',
              question: 'What does the term "cognitive offloading" mean in paragraph 3?',
              options: [
                'Carrying heavy physical books up a mountain',
                'The practice of using external tools (like search engines or notebooks) to reduce mental processing demands',
                'Deleting video files from an external hard drive',
                'Falling asleep during an examination'
              ],
              correctIndex: 1,
              explanationUz: '"Cognitive offloading" — miyaning eslab qolish va hisoblash og\'irligini tashqi vositalarga (internet, daftarlar) yuklab, aqliy quvvatni tejash amaliyoti.'
            },
            {
              id: 'rrw3-u2-p1-q4',
              type: 'inference',
              question: 'Why is internal biological memorization essential for creative breakthroughs?',
              options: [
                'Because search engines refuse to display artistic paintings',
                'Because creative synthesis requires disparate memories to be stored together inside biological neural networks for subconscious connections',
                'Because paper books produce more vitamins than digital monitors',
                'Because without memorizing dates, a person cannot obtain a driver\'s license'
              ],
              correctIndex: 1,
              explanationUz: 'Ijodiy va yangi kashfiyotlar miyaning ichki neyron tarmoqlarida turli bilimlarning kutilmagan assotsiatsiyalari va bog\'lanishlari natijasida tug\'iladi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'Digital Amnesia: The Mechanism and Long-Term Cognitive Costs',
            sections: [
              {
                heading: '1. Technological Condition',
                points: [
                  'Omnipresent internet connectivity with instant search verification.',
                  'Confidence that digital data will be saved permanently.'
                ]
              },
              {
                heading: '2. Cognitive Adaptation',
                points: [
                  'The Google Effect: Brain stores "where to find" rather than "what it is".',
                  'Cognitive offloading turns the brain into a web index rather than a repository.'
                ]
              },
              {
                heading: '3. Cognitive Risks',
                points: [
                  'Erosion of deep working memory.',
                  'Decreased capacity for organic creative synthesis and mental independence.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you feel your own attention span and memory have decreased since using smartphones?',
            'Is cognitive offloading an intelligent adaptation or a dangerous biological decline?'
          ]
        },
        {
          id: 'rrw3-u2-p2',
          passageNumber: 2,
          title: 'The Robot\'s First Law: Ethics in Artificial Intelligence',
          subtitle: 'From Isaac Asimov\'s Three Laws of Robotics to autonomous lethal weapons and alignment theory',
          themeCategory: 'Artificial Intelligence Ethics',
          level: 'C1',
          wordCount: 485,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Should an autonomous artificial intelligence ever be given the authority to make life-and-death decisions?',
            'What is the famous "trolley problem," and how does it relate to self-driving cars?'
          ],
          paragraphs: [
            'In 1942, visionary science-fiction author Isaac Asimov penned a landmark short story introducing what would become the most famous ethical framework in computer history: the "Three Laws of Robotics." The paramount First Law dictated: "A robot may not injure a human being or, through inaction, allow a human being to come to harm." For decades, Asimov\'s laws served as a brilliant literary playground, exploring how seemingly watertight moral programming could unravel through logical ambiguities and conflicting imperatives.',
            'Today, the moral dilemmas of artificial intelligence have escaped the realm of speculative fiction and landed with sudden urgency in computer science laboratories and corporate boardrooms. Autonomous systems—ranging from self-driving electric vehicles navigating metropolitan traffic to algorithmic triage systems in hospital emergency departments—must routinely execute moral choices under extreme time constraints.',
            'Consider the moral architecture of an autonomous passenger vehicle. If a sudden catastrophic brake failure forces the car\'s neural network to choose between colliding with a crowded pedestrian crosswalk or swerving into a concrete pillar (killing the vehicle\'s solitary occupant), what ethical doctrine should dictate the algorithm\'s decision? Should it adopt utilitarian calculus (minimizing total casualties) or Kantian deontological duty (protecting the passenger who purchased the vehicle)?',
            'Even more harrowing is the militarization of autonomous technology. Military defense contractors are actively developing Autonomous Weapon Systems (AWS)—often termed "slaughterbots"—capable of locating, tracking, and engaging human combatants without human intervention or "in-the-loop" verification. United Nations diplomats and computer scientists argue that delegating the moral decision to terminate human life to algorithmic mathematical weights constitutes an assault on fundamental human dignity. The AI "alignment problem"—ensuring artificial minds share human ethical values—remains the existential intellectual challenge of our era.'
          ],
          summaryUz: 'Ushbu darsda Ayzek Azimovning "Robototexnikaning uch qonuni"dan boshlab, zamonaviy sun\'iy intellekt etikasi, o\'ziyurar avtomobillarning axloqiy tanlovi (trolley problem) va avtonom harbiy qurollar muammosi tahlil qilinadi. BMT va yetakchi olimlar inson hayotini to\'xtatish qarorini algoritmlarga topshirish inson qadr-qimmatiga tahdid ekanini ta\'kidlamoqda.',
          targetVocab: [
            {
              word: 'paramount',
              pos: 'adj.',
              phonetic: '/ˈper.ə.maʊnt/',
              definitionEn: 'More important than anything else.',
              translationUz: 'eng oliy, eng muhim, birinchi darajali',
              sampleSentence: 'Passenger physical safety is of paramount importance during flight design.',
              collocation: 'paramount importance'
            },
            {
              word: 'imperative',
              pos: 'n.',
              phonetic: '/ɪmˈper.ə.t̬ɪv/',
              definitionEn: 'An essential or urgent thing; something that must be done.',
              translationUz: 'kechiktirib bo\'lmas talab, shart, zaruriyat',
              sampleSentence: 'Decarbonizing energy generation is an urgent ecological imperative.',
              collocation: 'moral imperative'
            },
            {
              word: 'utilitarian',
              pos: 'adj.',
              phonetic: '/ˌjuː.tɪ.ləˈter.i.ən/',
              definitionEn: 'Believing that the right action is the one that produces the greatest happiness for the greatest number.',
              translationUz: 'utilitar, ko\'pchilik uchun eng katta foyda va eng kam zararni ko\'zlaydigan',
              sampleSentence: 'The city council used utilitarian reasoning to fund public transit over private roads.',
              collocation: 'utilitarian calculus'
            },
            {
              word: 'deontological',
              pos: 'adj.',
              phonetic: '/diːˌɑːn.t̬əˈlɑː.dʒɪ.kəl/',
              definitionEn: 'Relating to the philosophical view that certain actions are inherently right or wrong regardless of consequences.',
              translationUz: 'deontologik, burch va qat\'iy axloqiy qoidalarga asoslangan',
              sampleSentence: 'Kantian ethics is strictly deontological, emphasizing moral duties over outcomes.',
              collocation: 'deontological ethics'
            },
            {
              word: 'harrowing',
              pos: 'adj.',
              phonetic: '/ˈher.oʊ.ɪŋ/',
              definitionEn: 'Extremely distressing, shocking, or painful to experience.',
              translationUz: 'yurakni larzaga soluvchi, dahshatli, azobli',
              sampleSentence: 'The war correspondent shared a harrowing report from the besieged territory.',
              collocation: 'harrowing dilemma'
            },
            {
              word: 'alignment',
              pos: 'n.',
              phonetic: '/əˈlaɪn.mənt/',
              definitionEn: 'An arrangement in which systems, goals, or minds work together harmoniously toward the same purpose.',
              translationUz: 'moslashtirish, inson qadriyatlari bilan bir xil maqsadga yo\'naltirish',
              sampleSentence: 'AI alignment aims to ensure superintelligent models respect human rights.',
              collocation: 'alignment problem'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw3-u2-p2-q1',
              type: 'main-idea',
              question: 'What is the primary challenge regarding modern artificial intelligence ethics discussed in the text?',
              options: [
                'Teaching computers to play video games with joystick controllers',
                'Programming machines to make complex moral and life-and-death decisions that align with human ethical values',
                'Finding cheaper plastic to manufacture humanoid robot feet',
                'Translating science-fiction books into foreign languages'
              ],
              correctIndex: 1,
              explanationUz: 'Asosiy muammo: mashinalarni inson qadriyatlariga mos keladigan va hayot-mamot masalalarida to\'g\'ri axloqiy qaror qabul qiladigan qilib dasturlash (AI Alignment).'
            },
            {
              id: 'rrw3-u2-p2-q2',
              type: 'detail',
              question: 'Who originally formulated the famous "Three Laws of Robotics" in 1942?',
              options: [
                'Isaac Asimov',
                'Alan Turing',
                'Tim Berners-Lee',
                'Elon Musk'
              ],
              correctIndex: 0,
              explanationUz: 'Matnda: "In 1942, visionary science-fiction author Isaac Asimov penned a landmark short story introducing the \'Three Laws of Robotics\'".'
            },
            {
              id: 'rrw3-u2-p2-q3',
              type: 'vocabulary',
              question: 'What does the term "utilitarian calculus" mean in paragraph 3?',
              options: [
                'Calculating the price of gasoline for sports cars',
                'A moral philosophy that aims to minimize total harm or maximize total well-being for the greatest number of people',
                'A mathematical method to predict lunar eclipses',
                'An automated parking ticket generator'
              ],
              correctIndex: 1,
              explanationUz: '"Utilitarian calculus" — umumiy qurbonlar sonini minimallashtirish va eng ko\'p inson uchun foyda/omon qolishni tanlaydigan axloqiy hisob-kitob.'
            },
            {
              id: 'rrw3-u2-p2-q4',
              type: 'detail',
              question: 'Why do United Nations diplomats and computer scientists object to Autonomous Weapon Systems (AWS)?',
              options: [
                'Because robots use too much battery electricity on the battlefield',
                'Because delegating the moral decision to terminate human life to mathematical algorithms is an assault on fundamental human dignity',
                'Because weapons are painted in bright colors that scare wild animals',
                'Because computer screens break easily in rainy weather'
              ],
              correctIndex: 1,
              explanationUz: 'Diplomatlar inson hayotini uzishdek muqaddas va jiddiy axloqiy qarorni sovuqqon matematik algoritmlarga topshirish inson sha\'niga zid ekanini aytmoqda.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'problem-solution',
            title: 'AI Ethics & The Alignment Dilemma',
            sections: [
              {
                heading: 'Literary Precursor (Asimov 1942)',
                points: [
                  'Three Laws of Robotics: Never harm humans, obey orders, preserve self.',
                  'Exposed flaws: Logical ambiguity and conflicting moral duties.'
                ]
              },
              {
                heading: 'Real-World Moral Applications',
                points: [
                  'Self-Driving Cars: Utilitarian (least deaths) vs Deontological (protect passenger).',
                  'Autonomous Weapon Systems (AWS): Lethal force without human-in-the-loop.'
                ]
              },
              {
                heading: 'The Existential Imperative',
                points: [
                  'Solving the AI Alignment Problem: Guaranteeing machine intelligence safeguards human dignity and ethics.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'If you were buying a self-driving car, would you buy one programmed to sacrifice you to save a crowd of pedestrians?',
            'Should international law enact an absolute global ban on autonomous lethal weapons (slaughterbots)?'
          ]
        }
      ]
    },
    {
      id: 'rrw3-u3',
      unitNumber: 3,
      title: 'Neuroeconomics & Human Decision Making',
      subjectArea: 'Cognitive Neuroscience & Economics',
      themeDescriptionUz: 'Moliya bozorlaridagi irrasional xatti-harakatlar, kognitiv xatolar va xulq-atvor iqtisodiyotidagi "Nudge" (turtki) nazariyasi.',
      passages: [
        {
          id: 'rrw3-u3-p1',
          passageNumber: 1,
          title: 'The Irrational Brain in Financial Markets',
          subtitle: 'Why classical economic models fail to predict panic selling, speculative bubbles, and loss aversion',
          themeCategory: 'Neuroeconomics',
          level: 'C1',
          wordCount: 490,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Have you ever made an impulsive financial purchase that you immediately regretted?',
            'Do you feel the emotional pain of losing $100 more intensely than the joy of gaining $100?'
          ],
          paragraphs: [
            'For more than a century, orthodox neoclassical economic theory rested upon a tidy foundational axiom: the construct of "Homo economicus"—an idealized, hyper-rational economic agent who coolly evaluates probabilistic risks, calculates expected utility with mathematical precision, and executes optimal financial decisions free from emotional turbulence. However, the recurring spectacles of speculative asset bubbles, irrational market exuberance, and catastrophic financial panics have laid bare the profound bankruptcy of this neoclassical dogma.',
            'Enter neuroeconomics: an interdisciplinary frontier bridging neuroscience, psychology, and behavioral economics. By utilizing functional Magnetic Resonance Imaging (fMRI) scanners to observe real-time neural activity in human investors, neuroeconomists have discovered that financial decision-making is not dictated by cerebral logic alone, but rather by an incessant neurological tug-of-war between ancient, evolutionary brain circuits.',
            'When traders anticipate lucrative capital gains, their ventral striatum and nucleus accumbens flood with dopamine—the same ancient reward neurotransmitter that drives addiction, feeding, and sexual pursuit. This biochemical surge frequently induces cognitive blindness, leading investors to dismiss glaring structural risks during market bubbles. Conversely, when stock portfolios hemorrhage value, the amygdala—the brain\'s primal fear and panic center—seizes control, prompting reflexive panic selling at the exact market nadir.',
            'Most critically, behavioral psychologists Daniel Kahneman and Amos Tversky demonstrated the biological reality of "loss aversion." Neurologically, the psychological anguish of sustaining a financial loss registers twice as intensely in the human brain as the gratification derived from an equivalent financial gain. Understanding these inherent neurobiological biases is no longer merely academic; it is vital to designing algorithmic safeguards and macroprudential regulations that protect global financial systems from human instinct.'
          ],
          summaryUz: 'Ushbu darsda klassik iqtisodiyotdagi "Homo economicus" (ratsional inson) modeli qanday qilib neyroiqtisodiyot tomonidan rad etilgani tahlil qilinadi. fMRI orqali inson miyasi o\'rganilganda, moliyaviy qarorlar mantiq emas, balki qadimgi biologik dofamin (ochko\'zlik/orzu) va amigdala (qo\'rquv/vahima) o\'rtasidagi kurash natijasi ekani ma\'lum bo\'ldi. Insonlar yutqazish azobini (loss aversion) yutish quvonchidan ikki barobar kuchliroq his qiladilar.',
          targetVocab: [
            {
              word: 'axiom',
              pos: 'n.',
              phonetic: '/ˈæk.si.əm/',
              definitionEn: 'A statement or principle that is generally accepted to be true, but cannot be proved.',
              translationUz: 'aksioma, isbotsiz qabul qilinadigan asosiy qoida',
              sampleSentence: 'Classical financial theory rested on the unproven axiom that all investors behave rationally.',
              collocation: 'foundational axiom'
            },
            {
              word: 'exuberance',
              pos: 'n.',
              phonetic: '/ɪɡˈzuː.bɚ.əns/',
              definitionEn: 'The quality of being full of energy, excitement, and cheerfulness, often unrestrained.',
              translationUz: 'haddan ortiq jo\'shqinlik, jilovsiz hayajon',
              sampleSentence: 'Central bankers warned against the irrational exuberance driving the housing bubble.',
              collocation: 'irrational exuberance'
            },
            {
              word: 'incessant',
              pos: 'adj.',
              phonetic: '/ɪnˈses.ənt/',
              definitionEn: 'Never stopping, especially in an annoying or unpleasant way; continuous.',
              translationUz: 'to\'xtovsiz, tinimsiz, uzluksiz davom etadigan',
              sampleSentence: 'The human brain engages in an incessant internal conflict between logic and emotion.',
              collocation: 'incessant tug-of-war'
            },
            {
              word: 'hemorrhage',
              pos: 'v.',
              phonetic: '/ˈhem.ɚ.ɪdʒ/',
              definitionEn: 'To lose huge amounts of money or blood rapidly and uncontrollably.',
              translationUz: 'katta yo\'qotishga uchramoq, qon oqishi kabi boylik yo\'qotmoq',
              sampleSentence: 'During the flash crash, tech hedge funds hemorrhaged billions in capital.',
              collocation: 'hemorrhage value'
            },
            {
              word: 'nadir',
              pos: 'n.',
              phonetic: '/ˈneɪ.dɪr/',
              definitionEn: 'The lowest point of someone\'s situation or something\'s trajectory.',
              translationUz: 'eng tub nuqta, quyi cho\'qqi',
              sampleSentence: 'Panic-stricken retail investors sold all their shares at the exact market nadir.',
              collocation: 'market nadir'
            },
            {
              word: 'anguish',
              pos: 'n.',
              phonetic: '/ˈæŋ.ɡwɪʃ/',
              definitionEn: 'Extreme physical or mental pain or suffering.',
              translationUz: 'azob-uqubat, qattiq qayg\'u va ruhiy iztirob',
              sampleSentence: 'The psychological anguish of a monetary loss far exceeds the happiness of a gain.',
              collocation: 'psychological anguish'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw3-u3-p1-q1',
              type: 'main-idea',
              question: 'How has the discipline of neuroeconomics challenged classical neoclassical economics?',
              options: [
                'By arguing that money should be replaced with gold coins',
                'By demonstrating that financial choices are heavily driven by emotional and evolutionary neural circuits rather than pure rational calculus',
                'By proving that robots make worse stock investments than cats',
                'By claiming that nobody ever worries about losing money'
              ],
              correctIndex: 1,
              explanationUz: 'Neyroiqtisodiyot moliyaviy qarorlarning sovuqqon mantiq emas, balki chuqur biologik his-tuyg\'ular va evolyutsion neyron tizimlar tomonidan boshqarilishini isbotladi.'
            },
            {
              id: 'rrw3-u3-p1-q2',
              type: 'detail',
              question: 'According to Kahneman and Tversky, what is the defining feature of "loss aversion"?',
              options: [
                'People never look at their bank accounts on weekends',
                'The mental pain of losing money registers roughly twice as intensely as the joy of gaining the same amount',
                'Investors prefer losing money to gaining money',
                'Banks refuse to lend money to young entrepreneurs'
              ],
              correctIndex: 1,
              explanationUz: '"Loss aversion" (yo\'qotishdan qo\'rqish) shuni anglatadiki, inson pul yo\'qotish azobini xuddi shu miqdordagi pulni yutish xursandchiligidan taxminan 2 barobar kuchliroq his qiladi.'
            },
            {
              id: 'rrw3-u3-p1-q3',
              type: 'vocabulary',
              question: 'In paragraph 3, what is the meaning of the word "nadir"?',
              options: [
                'The absolute lowest point',
                'The supreme astronomical peak',
                'A modern computerized skyscraper',
                'A currency exchange booth'
              ],
              correctIndex: 0,
              explanationUz: '"Nadir" so\'zi eng pastki, eng tub nuqtani (zenith so\'zining aksi) bildiradi.'
            },
            {
              id: 'rrw3-u3-p1-q4',
              type: 'inference',
              question: 'Why does a surge of dopamine during speculative bubbles make investors vulnerable?',
              options: [
                'It causes severe physical blindness that prevents reading contracts',
                'It biochemically blinds them to structural risks by creating euphoric reward sensations',
                'It makes them fall asleep during market hours',
                'It decreases their interest in making profits'
              ],
              correctIndex: 1,
              explanationUz: 'Dofamin to\'lqini ochko\'zlik va zavq hissini oshirib, investorlarning jiddiy moliyaviy xavflarni ko\'ra olmasligiga ("cognitive blindness") sabab bo\'ladi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'main-ideas-details',
            title: 'Neural Anatomy of Market Trading',
            sections: [
              {
                heading: 'The Greed Circuit (Nucleus Accumbens)',
                points: [
                  'Flooded with dopamine when expecting capital gains.',
                  'Triggers euphoria and reckless risk blindness during market bubbles.'
                ]
              },
              {
                heading: 'The Fear Circuit (Amygdala)',
                points: [
                  'Activated during sudden price drops and portfolio losses.',
                  'Causes reflexive panic selling at market nadirs.'
                ]
              },
              {
                heading: 'Loss Aversion Asymmetry',
                points: [
                  'Negative emotional weight of losing $1 = 2x positive emotional weight of gaining $1.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Do you think retail traders should be required to pass a psychological cognitive bias test before trading volatile cryptocurrencies?',
            'How can understanding loss aversion help you make calmer, more disciplined decisions in your personal savings?'
          ]
        },
        {
          id: 'rrw3-u3-p2',
          passageNumber: 2,
          title: 'Choice Architecture and the Nudge Revolution',
          subtitle: 'How subtle behavioral interventions reshape retirement savings, organ donations, and public health',
          themeCategory: 'Behavioral Economics',
          level: 'C1',
          wordCount: 485,
          readingTimeMinutes: 4,
          preReadingQuestions: [
            'Have you ever noticed how grocery stores place expensive sugary candy right at eye level by the cash register?',
            'Should governments gently steer citizens toward healthier life choices without legally banning unhealthy options?'
          ],
          paragraphs: [
            'How much of your everyday behavior is the product of deliberate, conscious free will, and how much is silently orchestrated by the subconscious environment in which choices are presented? In their seminal treatise *Nudge*, Nobel laureate Richard Thaler and legal scholar Cass Sunstein introduced the world to "choice architecture"—the profound concept that there is no such thing as a neutral design, and that small tweaks to the context of decision-making can powerfully steer human behavior without eliminating freedom of choice.',
            'This philosophy, christened "libertarian paternalism," explicitly rejects both heavy-handed government mandates and laissez-faire neglect. A "nudge" is defined as any feature of choice architecture that alters people\'s behavior in a predictable manner without forbidding any options or significantly changing their economic incentives. Putting fresh apples at eye level in school cafeterias while shifting junk food to bottom shelves is a classic nudge; legally banning chocolate bars is not.',
            'The most dramatic triumph of nudge theory has occurred in national retirement savings policies. Historically, corporate pension plans required new hires to proactively fill out complex enrollment paperwork. Paralyzed by cognitive friction and procrastination, only thirty percent of workers enrolled. When behavioral economists advised companies to switch to "automatic enrollment"—where workers are automatically enrolled by default unless they actively check a box to opt out—participation rates skyrocketed to over ninety percent.',
            'A parallel miraculous effect is observed in organ donation registries. Countries utilizing an "opt-in" model (where citizens must actively register to donate organs after death) struggle with donor rates under fifteen percent. Conversely, nations implementing "presumed consent" defaults (opt-out) maintain donor rates exceeding ninety-nine percent, saving thousands of lives annually without coercing a single citizen. As algorithmic choice architecture expands into digital user interfaces and artificial intelligence, mastering the ethics of behavioral nudging has become an imperative frontier for democratic governance.'
          ],
          summaryUz: 'Ushbu darsda Nobel mukofoti sovrindori Richard Taler va Kass Sansteynning "Nudge" (turtki) nazariyasi va "tanlov arxitekturasi" ko\'rib chiqiladi. Insonlar erkinligini cheklamagan holda, shunchaki standart tanlovni (default option) o\'zgartirish orqali ulkan ijobiy natijalarga erishish mumkin. Pensiya jamg\'armasiga avtomatik a\'zo qilish yoki a\'zo donorlik tizimini opt-out shakliga o\'tkazish bunga yorqin misoldir.',
          targetVocab: [
            {
              word: 'seminal',
              pos: 'adj.',
              phonetic: '/ˈsem.ə.nəl/',
              definitionEn: 'Extremely important and having a strong influence on later developments or works.',
              translationUz: 'asos soluvchi, ulkan burilish yasagan, fundamental',
              sampleSentence: 'Thaler and Sunstein published a seminal treatise on behavioral choice architecture.',
              collocation: 'seminal treatise'
            },
            {
              word: 'orchestrate',
              pos: 'v.',
              phonetic: '/ˈɔːr.kə.streɪt/',
              definitionEn: 'To carefully arrange, coordinate, or organize a situation to achieve a desired result.',
              translationUz: 'ustalik bilan rejalashtirmoq, sahnalashtirmoq, yo\'naltirmoq',
              sampleSentence: 'The supermarket display was cleverly orchestrated to induce impulse buying.',
              collocation: 'silently orchestrate'
            },
            {
              word: 'paternalism',
              pos: 'n.',
              phonetic: '/pəˈtɝː.nəl.ɪ.zəm/',
              definitionEn: 'A policy or practice of treating or governing people in a fatherly manner, especially by providing for their needs without giving them responsibility.',
              translationUz: 'otaliq g\'amxo\'rligi, yo\'l-yo\'riq ko\'rsatish tizimi',
              sampleSentence: 'Libertarian paternalism aims to gently guide choices while safeguarding personal autonomy.',
              collocation: 'libertarian paternalism'
            },
            {
              word: 'friction',
              pos: 'n.',
              phonetic: '/ˈfrɪk.ʃən/',
              definitionEn: 'Disagreement, or difficulty and delay that slows down a process.',
              translationUz: 'to\'siq, qiyinchilik, psixologik qarshilik yoki kechikish',
              sampleSentence: 'Removing bureaucratic friction drastically increased voter registration.',
              collocation: 'cognitive friction'
            },
            {
              word: 'procrastination',
              pos: 'n.',
              phonetic: '/proʊˌkræs.təˈneɪ.ʃən/',
              definitionEn: 'The act of delaying something that must be done, often because it is unpleasant or boring.',
              translationUz: 'paysalga solish, orqaga surish, kechiktirish odati',
              sampleSentence: 'Procrastination prevented millions of young employees from signing up for pensions.',
              collocation: 'paralyzed by procrastination'
            },
            {
              word: 'coerce',
              pos: 'v.',
              phonetic: '/koʊˈɝːs/',
              definitionEn: 'To persuade or force someone to do something that they are unwilling to do.',
              translationUz: 'majburlamoq, zo\'rlamoq',
              sampleSentence: 'A true behavioral nudge never seeks to coerce individuals against their will.',
              collocation: 'without coercing'
            }
          ],
          comprehensionQuiz: [
            {
              id: 'rrw3-u3-p2-q1',
              type: 'main-idea',
              question: 'What is the foundational definition of a "nudge" in behavioral economics?',
              options: [
                'A harsh police regulation punishing unhealthy citizens with prison time',
                'A subtle modification in choice architecture that alters behavior predictably without banning any options or imposing economic penalties',
                'A computerized shock device attached to shopping carts',
                'A direct cash handout from the national treasury to all voters'
              ],
              correctIndex: 1,
              explanationUz: '"Nudge" — hech qanday variantni taqiqlamasdan va moliyaviy jazo qo\'llamasdan, tanlov muhitini o\'zgartirish orqali insonlarni foydali qarorga muloyim yo\'naltirishdir.'
            },
            {
              id: 'rrw3-u3-p2-q2',
              type: 'detail',
              question: 'What simple change in choice architecture caused corporate pension enrollment to jump from 30% to over 90%?',
              options: [
                'Tripling employee salaries if they agreed to sign up',
                'Flipping the default from "opt-in" paperwork to "automatic enrollment" where employees are enrolled unless they opt out',
                'Forbidding workers from ever resigning from the company',
                'Replacing human managers with automated robotic payroll bots'
              ],
              correctIndex: 1,
              explanationUz: 'Kompaniyalar ro\'yxatdan o\'tish tizimini "avtomatik a\'zolik" (automatic enrollment default) qilib belgilagach, a\'zolik ko\'rsatkichi 30% dan 90% ga ko\'tarildi.'
            },
            {
              id: 'rrw3-u3-p2-q3',
              type: 'vocabulary',
              question: 'What does the word "seminal" in paragraph 1 tell the reader about Thaler and Sunstein\'s book?',
              options: [
                'It was quickly forgotten and considered useless',
                'It was highly influential and opened up an entirely new field of public policy',
                'It was written strictly for kindergarten students',
                'It cost more than one million dollars to purchase'
              ],
              correctIndex: 1,
              explanationUz: '"Seminal" so\'zi chuqur ta\'sirga ega bo\'lgan, yangi soha va yo\'nalishlarga asos solgan fundamental asarni anglatadi.'
            },
            {
              id: 'rrw3-u3-p2-q4',
              type: 'inference',
              question: 'Why do "opt-out" organ donor policies result in over 99% participation compared to less than 15% in "opt-in" nations?',
              options: [
                'Because citizens in opt-out nations are forced to donate organs while still alive',
                'Because human beings exhibit a powerful cognitive bias to stick with the default setting rather than expend effort to change it',
                'Because hospital doctors refuse to treat anyone without a donor badge',
                'Because citizens receive free sports cars when they register'
              ],
              correctIndex: 1,
              explanationUz: 'Inson psixologiyasida "default effect" (standart variantga ergashish) kuchi juda yuqori bo\'lib, odamlar o\'zgartirish kiritish o\'rniga belgilangan standart holatda qolishni afzal bilishadi.'
            }
          ],
          graphicOrganizer: {
            organizerType: 'cause-effect',
            title: 'The Default Option Effect (Opt-In vs Opt-Out)',
            sections: [
              {
                heading: 'Opt-In Choice Architecture',
                points: [
                  'Citizen must actively fill out paperwork to participate.',
                  'Procrastination & cognitive friction depress rates to 15-30%.'
                ]
              },
              {
                heading: 'Opt-Out Choice Architecture (Nudge)',
                points: [
                  'Citizen is enrolled automatically; retains full right to opt out.',
                  'Leverages status-quo bias: skyrockets participation to 90-99%.'
                ]
              },
              {
                heading: 'Real-World Public Impacts',
                points: [
                  'Billions in added pension savings and thousands of lives saved through organ transplants.'
                ]
              }
            ]
          },
          discussionPrompts: [
            'Is it ethical for technology apps to use "dark nudges" to keep users addicted to scrolling their feeds?',
            'What is a healthy habit in your own life that you could "nudge" yourself into by changing your room setup?'
          ]
        }
      ]
    },
    ...BOOK3_UNITS_PART2,
    ...BOOK3_UNITS_PART3,
    ...BOOK3_UNITS_PART4
  ]
};
