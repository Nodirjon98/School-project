import { ToeflTopic } from '../../types';

export const TOPICS_1_TO_5: ToeflTopic[] = [
    {
    id: 'topic-1',
    topicNumber: 1,
    shortTitle: 'Why Go to University?',
    category: 'education',
    categoryName: 'University & Higher Education',
    questionType: 'explanation',
    prompt: 'People attend college or university for many different reasons (for example, new experiences, career preparation, increased knowledge). Why do you think people attend college or university? Use specific reasons and examples to support your answer.',
    essays: [
      {
        id: 'essay-1-1',
        essayNumber: 1,
        title: 'Entering the Realm of Distinction & Knowledge',
        score: 6.0,
        stance: 'agree',
        wordCount: 395,
        essayText: `I strongly believe that everyone should attend university. Entering university is at the same time a so much promising step into a world of opportunities as long as it is accompanied by a strong will and desire for distinction. The quality and diversity of opportunities and the spread spectrum of choices higher education can provide us is the core motive for everyone intending to attend university. I will try to examine below the specific reasons for entering university according to which I think are the most common viewpoints nowadays.

First let us look at what a person can typically gain from a successfully study at a university. It is a diploma and/or a degree. This is by default leading to a more distinct, respected, well-paid profession. Nowadays unemployment crisis is troubling not only the poor countries but the developed western countries as well, so that the ease of finding a job may play an important role in the decisions people are making.

Another important reason is that people want to get more education. University provides a higher level of education and has all these resources and facilities for people who crave knowledge. Learning is the key to everything that we want to improve. So, higher education helps us widen our understanding and increase our intellectual ability.

Apart from the points I made above there is also a well known fashion all over the world that is called career preparation. Many people attend university in order to seek either a career in science and technology or a career in business. It is believed that the ideas, opportunities, qualifications, in-depth knowledge and expertise in science areas often make attending university imperative. Many times a four-year study at a university may only be the beginning of a sequence of moves someone can make in order to accomplish what he thinks best for his career.

Finally, I cannot oversee the fact that many times studying at a university also means living in a city far from home. New responsibilities always appear but they do not become serious drawbacks. In contrast, the new sense of freedom and independence a young man can experience or thinks he will is thought of as something of great importance. One thing is for sure though, there is chance for everyone in the community of a university to meet people, make new friends and know individuals of great importance.

Last but not least I wish to say that the purpose of university is to harvest knowledge and to being educated, so it is obvious that everyone can find a reason for attending university.`,
        targetWords: [
          {
            id: 'tw-t1-1',
            word: 'distinction',
            partOfSpeech: 'noun',
            phonetic: '/dɪˈstɪŋkʃn/',
            definition: 'Excellence that sets someone apart from others; high standing.',
            translationUz: 'ajralib turish, eʼtiborli mavqe, ustunlik',
            example: 'Entering university is accompanied by a strong will and desire for distinction.'
          },
          {
            id: 'tw-t1-2',
            word: 'spectrum',
            partOfSpeech: 'noun',
            phonetic: '/ˈspektrəm/',
            definition: 'A wide range of diverse items, options, or qualities.',
            translationUz: 'keng koʻlam, qamrov, xilma-xillik',
            example: 'The spread spectrum of choices higher education can provide us is our core motive.'
          },
          {
            id: 'tw-t1-3',
            word: 'imperative',
            partOfSpeech: 'adjective',
            phonetic: '/ɪmˈperətɪv/',
            definition: 'Of vital importance; crucial or indispensable.',
            translationUz: 'oʻta muhim, zarur, shart boʻlgan',
            example: 'In-depth knowledge and expertise make attending university imperative.'
          },
          {
            id: 'tw-t1-4',
            word: 'crave',
            partOfSpeech: 'verb',
            phonetic: '/kreɪv/',
            definition: 'To feel a powerful and eager desire for something.',
            translationUz: 'ishtiyoqmand boʻlmoq, chanqoq boʻlmoq',
            example: 'University provides resources and facilities for people who crave knowledge.'
          },
          {
            id: 'tw-t1-5',
            word: 'intellectual',
            partOfSpeech: 'adjective',
            phonetic: '/ˌɪntəˈlektʃuəl/',
            definition: 'Appealing to or requiring use of the intellect and thinking capacity.',
            translationUz: 'intellektual, aqliy, zehnli',
            example: 'Higher education helps us widen our understanding and increase our intellectual ability.'
          },
          {
            id: 'tw-t1-6',
            word: 'expertise',
            partOfSpeech: 'noun',
            phonetic: '/ˌekspɜːˈtiːz/',
            definition: 'Expert skill, proficiency, or authoritative knowledge in a particular field.',
            translationUz: 'chuqur bilim, ekspertiza, kasbiy mahorat',
            example: 'Qualifications and expertise in science areas make attending university imperative.'
          },
          {
            id: 'tw-t1-7',
            word: 'drawbacks',
            partOfSpeech: 'noun',
            phonetic: '/ˈdrɔːbæks/',
            definition: 'Disadvantages or inconvenient features that hinder progress.',
            translationUz: 'kamchiliklar, toʻsiqlar, noqulayliklar',
            example: 'New responsibilities always appear but they do not become serious drawbacks.'
          },
          {
            id: 'tw-t1-8',
            word: 'harvest',
            partOfSpeech: 'verb',
            phonetic: '/ˈhɑːrvɪst/',
            definition: 'To gather, obtain, or reap benefits and rewards through diligent effort.',
            translationUz: 'hosilini yigʻishtirib olmoq, samarani qoʻlga kiritmoq',
            example: 'The ultimate purpose of university is to harvest knowledge and to be educated.'
          }
        ],
        phrases: [
          {
            id: 'ph-t1-1',
            phrase: 'a world of opportunities',
            type: 'idiom',
            meaning: 'An extensive multitude of promising paths, prospects, and chances.',
            translationUz: 'cheksiz imkoniyatlar olami',
            example: 'Entering university is a promising step into a world of opportunities.',
            contextNote: 'High-impact motivational idiom for academic essays.'
          },
          {
            id: 'ph-t1-2',
            phrase: 'by default',
            type: 'collocation',
            meaning: 'Automatically occurring as a natural, expected outcome.',
            translationUz: 'oʻz-oʻzidan, tabiiy ravishda',
            example: 'This is by default leading to a more distinct, respected, well-paid profession.',
            contextNote: 'Common transition marker indicating automatic consequence.'
          },
          {
            id: 'ph-t1-3',
            phrase: 'in-depth knowledge',
            type: 'collocation',
            meaning: 'Comprehensive, thorough, and sophisticated understanding of a subject.',
            translationUz: 'chuqur va mukammal bilim',
            example: 'It is believed that in-depth knowledge and expertise make university imperative.',
            contextNote: 'Academic collocation frequently rewarded in C1/C2 writing.'
          },
          {
            id: 'ph-t1-4',
            phrase: 'sense of freedom',
            type: 'collocation',
            meaning: 'A psychological feeling of personal autonomy and self-determination.',
            translationUz: 'erkinlik hissi, mustaqillik tuygʻusi',
            example: 'The new sense of freedom and independence a young man can experience.',
            contextNote: 'Pairs naturally with independence, adulthood, and personal growth.'
          },
          {
            id: 'ph-t1-5',
            phrase: 'individuals of great importance',
            type: 'collocation',
            meaning: 'Influential leaders, mentors, and prominent figures in a community.',
            translationUz: 'katta mavqega ega shaxslar, nufuzli insonlar',
            example: 'There is chance to meet people, make new friends and know individuals of great importance.',
            contextNote: 'Sophisticated alternative to simply saying "important people".'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t1-1',
            phrase: 'I strongly believe that',
            category: 'intro_thesis',
            categoryLabel: 'Stating Clear Stance',
            function: 'Introduces the author’s primary stance with uncompromising academic clarity.',
            translationUz: 'Men qatʼiy ishonamanki...',
            example: 'I strongly believe that everyone should attend university.',
            usageNote: 'Use in the thesis statement to immediately position your argument for the examiner.'
          },
          {
            id: 'wc-t1-2',
            phrase: 'First let us look at what',
            category: 'body_argument',
            categoryLabel: 'First Body Paragraph Starter',
            function: 'Transitions cleanly into the first analytical point or empirical observation.',
            translationUz: 'Dastlab, keling, ... nimani berishiga nazar tashlaylik',
            example: 'First let us look at what a person can typically gain from a successfully study at a university.',
            usageNote: 'Sets up a rhetorical prompt that draws the reader into the first piece of evidence.'
          },
          {
            id: 'wc-t1-3',
            phrase: 'Another important reason is that',
            category: 'body_argument',
            categoryLabel: 'Adding Second Core Reason',
            function: 'Introduces a secondary core argument smoothly without jarring breaks.',
            translationUz: 'Yana bir muhim sabab shundaki...',
            example: 'Another important reason is that people want to get more education.',
            usageNote: 'Cohesive transition connecting paragraph two to paragraph three.'
          },
          {
            id: 'wc-t1-4',
            phrase: 'Apart from the points I made above',
            category: 'contrast_concession',
            categoryLabel: 'Expanding the Scope of Discussion',
            function: 'Signals that earlier points have been established and broadens the essay scope.',
            translationUz: 'Yuqorida keltirilgan dalillardan tashqari...',
            example: 'Apart from the points I made above there is also a well known fashion all over the world that is called career preparation.',
            usageNote: 'Demonstrates sophisticated paragraph linking and text cohesion.'
          },
          {
            id: 'wc-t1-5',
            phrase: 'In contrast, the new sense of',
            category: 'contrast_concession',
            categoryLabel: 'Contrasting Perspectives',
            function: 'Counters potential drawbacks with a constructive, empowering dimension.',
            translationUz: 'Aksincha, ... yangicha hissi',
            example: 'In contrast, the new sense of freedom and independence a young man can experience is thought of as something of great importance.',
            usageNote: 'Used when pivoting from potential negatives to overwhelming positives.'
          },
          {
            id: 'wc-t1-6',
            phrase: 'Last but not least I wish to say that',
            category: 'conclusion',
            categoryLabel: 'Final Emphatic Conclusion',
            function: 'Concludes the essay with a memorable summary statement reiterating the thesis.',
            translationUz: 'Nihoyat, soʻnggi ammo eng muhim jihat sifatida aytmoqchimanki...',
            example: 'Last but not least I wish to say that the purpose of university is to harvest knowledge.',
            usageNote: 'Provides a conclusive cadence that ties all sub-arguments together.'
          }
        ],
        ideas: [
          {
            id: 'id-t1-1',
            type: 'thesis',
            title: 'Thesis: University as Gateway to Opportunity & Distinction',
            anchorText: 'Entering university is at the same time a so much promising step into a world of opportunities as long as it is accompanied by a strong will and desire for distinction.',
            explanation: 'The writer establishes an assertive stance: higher education is not merely job training, but a multifaceted catalyst for personal excellence, wide choices, and social distinction.',
            explanationUz: 'Muallif qatʼiy tezis qoʻyadi: oliy taʼlim shunchaki kasb oʻrganish emas, balki shaxsiy kamolot, keng imkoniyatlar va nufuzli mavqe garovidir.',
            scoreInsight: 'Scores 6.0 because it states an unambiguous, nuanced thesis with strong thematic direction.',
            promptApplication: 'Adapt this opening whenever defending higher education, vocational training, or institutional study over self-taught routes.'
          },
          {
            id: 'id-t1-2',
            type: 'main_argument',
            title: 'Economic Security: Credentials Combatting Global Unemployment',
            anchorText: 'Nowadays unemployment crisis is troubling not only the poor countries but the developed western countries as well, so that the ease of finding a job may play an important role in the decisions people are making.',
            explanation: 'Grounds the argument in real-world economic realities: a formal university degree provides competitive resilience in tight global job markets.',
            explanationUz: 'Dalilni real iqtisodiy voqelik bilan bogʻlaydi: diplom xalqaro ishsizlik sharoitida raqobatbardoshlikni taʼminlaydi.',
            scoreInsight: 'Acknowledging macroeconomic conditions (global unemployment) demonstrates adult, worldly maturity required for top band scores.',
            promptApplication: 'Effective in essays addressing youth employment, economic stability, or college vs. trade school decisions.'
          },
          {
            id: 'id-t1-3',
            type: 'evidence',
            title: 'Intellectual Growth: Beyond Rote Skills to Pure Knowledge',
            anchorText: 'University provides a higher level of education and has all these resources and facilities for people who crave knowledge. Learning is the key to everything that we want to improve.',
            explanation: 'Distinguishes practical training from intellectual thirst: access to state-of-the-art libraries, research laboratories, and professor mentorship.',
            explanationUz: 'Amaliy hunarni aqliy chanqoqlikdan ajratib koʻrsatadi: laboratoriyalar, kutubxonalar va professorlar muhiti intellektual oʻsishni taʼminlaydi.',
            scoreInsight: 'Balanced perspective: connects abstract "craving knowledge" with tangible "resources and facilities".',
            promptApplication: 'Use when comparing library vs. sports funding, online degrees vs. campus life, or research investments.'
          },
          {
            id: 'id-t1-4',
            type: 'counter_argument',
            title: 'Overcoming Concessions: Geographic Separation as Maturation',
            anchorText: 'New responsibilities always appear but they do not become serious drawbacks. In contrast, the new sense of freedom and independence a young man can experience or thinks he will is thought of as something of great importance.',
            explanation: 'The author addresses the objection of being away from home, flipping homesickness into an invaluable milestone of emotional maturity and self-reliance.',
            explanationUz: 'Uydan uzoqda yashash qiyinchiligini rad etmaydi, balki buni mustaqillik, masʼuliyat va balogʻatga yetishish bosqichi sifatida ijobiy talqin qiladi.',
            scoreInsight: 'Concession and refutation (turning an apparent disadvantage into a benefit) is a hallmark of band 6.0 analytical writing.',
            promptApplication: 'Vital for questions discussing dormitory living, studying abroad, or adolescent independence.'
          },
          {
            id: 'id-t1-5',
            type: 'conclusion',
            title: 'Universal Value: Harvesting Knowledge for Lifelong Progress',
            anchorText: 'Last but not least I wish to say that the purpose of university is to harvest knowledge and to being educated, so it is obvious that everyone can find a reason for attending university.',
            explanation: 'Synthesizes all individual motivations into one overarching philosophical truth: every individual finds their personal purpose through the pursuit of knowledge.',
            explanationUz: 'Barcha xususiy sabablarni bitta umumiy falsafiy xulosaga birlashtiradi: har bir inson ilm orqali oʻz maqsadiga erishadi.',
            scoreInsight: 'Ends with a concise, powerful takeaway that satisfies the prompt completely without drifting off-topic.',
            promptApplication: 'Ideal closing pattern for education-themed essays.'
          }
        ],
        outline: {
          introduction: 'Introduction of university as a gateway of broad opportunities; explicit thesis stating university education is vital for personal distinction.',
          bodyPoints: [
            'Attaining respected credentials and degree to navigate modern global unemployment realities.',
            'Accessing high-level research facilities and widening intellectual and mental capacity.',
            'Long-term career preparation and structured sequences of professional milestones.',
            'Developing personal autonomy, adult responsibility, and building high-level networking connections.'
          ],
          conclusion: 'Summary synthesis asserting that university serves the noble purpose of harvesting knowledge, offering distinct value to every student.'
        },
        brainstormingPros: [
          'Opens access to high-paying, specialized professional careers (engineering, law, medicine).',
          'Cultivates critical thinking, analytical agility, and deep subject-matter expertise.',
          'Provides fertile networking ground with ambitious peers and faculty mentors.',
          'Accelerates independence and self-governance through living away from parental homes.'
        ],
        brainstormingCons: [
          'Substantial tuition fees and potential student loan debt.',
          'Delaying entry into the labor market by three to four years.',
          'Theoretical curricula may lack immediate practical workplace readiness compared to apprenticeships.'
        ]
      },
      {
        id: 'essay-1-2',
        essayNumber: 2,
        title: 'The Turning Point: Knowledge Accumulation & Social Mobility',
        score: 6.0,
        stance: 'agree',
        wordCount: 382,
        essayText: `University is no longer a fresh word to people nowadays. Since the beginning of this century, more and more youngsters choose to enter university after they have completed the study in high schools rather than to join the army or become an apprentice. Therefore, it is kind of interesting to find out the reason behind.

First of all, students can only learn fundamental knowledge during high school while they are able to focus on their own interested majors in universities. This period is the key to knowledge accumulation, which will contribute a lot to the future of an individual. Moreover, university is no doubt the symbol of high education. It offers more than pure knowledge. A degree from a university gives people certain identity that makes them stand out among their competitors. It can be seen from the fact that most international companies will only hire those who have at least a Bachelor's degree in China.

But, as far as I know, sincere dreams might also be the reason for university or college. For instance, in the 60s and 70s, people in China experienced hard times. Many of them had to give up advanced education and take up the burdens of life at their early age. Now, as they became parents or even grandparents, their dream for university education had no doubt realized by their younger family members. Those young people, as reported, often study very hard in order to fulfill the expectations of two generations.

There is no doubt that university can be the turning point of one's future, because higher education will provide people with not only knowledge prepared for their careers, but also the fulfillment of their life goals. Meanwhile, the society has improved its strength to sponsor higher education. Compared with the past, people now attend universities also because they are able to secure various scholarships and supports from different channels. A very good example is that many Chinese students are now studying in the U. S. Their incentive for application should be attributed to not only to their own performance but also the comprehensive education frameworks in the U. S.

Broadly speaking, people who study in universities have their hopes: to fulfill themselves. At the same time, our society generously provides such an environment for people to achieve such goals. Therefore, when we see more and more fresh smiles on the campus of universities, let us just wish them a promising future.`,
        targetWords: [
          {
            id: 'tw-t1-9',
            word: 'apprentice',
            partOfSpeech: 'noun',
            phonetic: '/əˈprentɪs/',
            definition: 'A person learning a trade or craft from a skilled employer for an agreed period.',
            translationUz: 'shogird, usta yonida hunar oʻrganuvchi',
            example: 'Youngsters enter university rather than join the army or become an apprentice.'
          },
          {
            id: 'tw-t1-10',
            word: 'accumulation',
            partOfSpeech: 'noun',
            phonetic: '/əˌkjuːmjəˈleɪʃn/',
            definition: 'The gradual gathering or growing stockpile of something over time.',
            translationUz: 'toʻplash, jamlash, boyitib borish',
            example: 'This period is the key to knowledge accumulation for an individual.'
          },
          {
            id: 'tw-t1-11',
            word: 'competitors',
            partOfSpeech: 'noun',
            phonetic: '/kəmˈpetɪtərz/',
            definition: 'Rival persons or entities striving against each other for the same goal.',
            translationUz: 'raqobatchilar, daʼvogarlar',
            example: 'A university degree makes graduates stand out among their competitors.'
          },
          {
            id: 'tw-t1-12',
            word: 'incentive',
            partOfSpeech: 'noun',
            phonetic: '/ɪnˈsentɪv/',
            definition: 'A motivating influence that incites or encourages someone to take action.',
            translationUz: 'ragʻbat, turtki, undovchi sabab',
            example: 'Their incentive for application should be attributed to comprehensive frameworks.'
          },
          {
            id: 'tw-t1-13',
            word: 'comprehensive',
            partOfSpeech: 'adjective',
            phonetic: '/ˌkɑːmprɪˈhensɪv/',
            definition: 'Including or dealing with all or nearly all elements or aspects of something.',
            translationUz: 'har tomonlama, keng qamrovli, mukammal',
            example: 'They are drawn by the comprehensive education frameworks in top universities.'
          }
        ],
        phrases: [
          {
            id: 'ph-t1-6',
            phrase: 'turning point',
            type: 'idiom',
            meaning: 'A decisive time at which an important decisive change takes place.',
            translationUz: 'burilish nuqtasi, hayotiy keskin oʻzgarish pallasi',
            example: 'There is no doubt that university can be the turning point of one\'s future.',
            contextNote: 'Powerful narrative phrase for biographical and developmental topics.'
          },
          {
            id: 'ph-t1-7',
            phrase: 'stand out among',
            type: 'phrasal_verb',
            meaning: 'To be noticeably superior, distinctive, or distinguished within a cohort.',
            translationUz: 'orasida ajralib turmoq, yaqqol koʻzga tashlanmoq',
            example: 'A degree gives people certain identity that makes them stand out among their competitors.',
            contextNote: 'Common in career and competitive achievement contexts.'
          },
          {
            id: 'ph-t1-8',
            phrase: 'take up the burdens',
            type: 'collocation',
            meaning: 'To shoulder heavy obligations, responsibilities, or hardships.',
            translationUz: 'mashaqqat va masʼuliyat yukini zimmasiga olmoq',
            example: 'Many had to give up advanced education and take up the burdens of life.',
            contextNote: 'Evocative phrasing describing socioeconomic sacrifice.'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t1-7',
            phrase: 'First of all, students can only',
            category: 'body_argument',
            categoryLabel: 'Contrasting Prior Stages',
            function: 'Highlights the limited scope of high school before contrasting it with university depth.',
            translationUz: 'Avvalo, oʻquvchilar faqatgina...',
            example: 'First of all, students can only learn fundamental knowledge during high school.',
            usageNote: 'Effective for staging arguments that show evolutionary stages of learning.'
          },
          {
            id: 'wc-t1-8',
            phrase: 'It can be seen from the fact that',
            category: 'exemplification',
            categoryLabel: 'Empirical Proof Presentation',
            function: 'Introduces tangible marketplace evidence to substantiate an assertion.',
            translationUz: 'Buni ... holatidan ham yaqqol koʻrish mumkin',
            example: 'It can be seen from the fact that most international companies will only hire those with a degree.',
            usageNote: 'Replaces generic "For example" with an authoritative empirical frame.'
          },
          {
            id: 'wc-t1-9',
            phrase: 'There is no doubt that',
            category: 'body_argument',
            categoryLabel: 'Asserting Certainty',
            function: 'Reasserts confidence in a major conceptual milestone.',
            translationUz: 'Hech shubha yoʻqki...',
            example: 'There is no doubt that university can be the turning point of one\'s future.',
            usageNote: 'Use at the head of a body paragraph to signal strong conviction.'
          },
          {
            id: 'wc-t1-10',
            phrase: 'Broadly speaking, people who',
            category: 'conclusion',
            categoryLabel: 'Synthesizing General Motive',
            function: 'Steps back from specific examples to summarize the universal human ambition.',
            translationUz: 'Kengroq maʼnoda aytganda, ... qiladigan insonlar',
            example: 'Broadly speaking, people who study in universities have their hopes: to fulfill themselves.',
            usageNote: 'Signals transition into the overarching takeaway.'
          }
        ],
        ideas: [
          {
            id: 'id-t1-6',
            type: 'main_argument',
            title: 'Specialization: Transition from General Basics to Professional Mastery',
            anchorText: 'students can only learn fundamental knowledge during high school while they are able to focus on their own interested majors in universities. This period is the key to knowledge accumulation',
            explanation: 'High schools provide broad survey knowledge; universities allow targeted immersion into specialized fields necessary for modern technical professions.',
            explanationUz: 'Maktab umumiy poydevor bersa, oliygoh talabaga oʻz sohasi boʻyicha chuqur ixtisoslashish imkonini beradi.',
            scoreInsight: 'Clear structural distinction between preparatory and professional academic phases.',
            promptApplication: 'Useful in essays contrasting generalist vs. specialist education models.'
          },
          {
            id: 'id-t1-7',
            type: 'evidence',
            title: 'Intergenerational Dream: Fulfilling Sacrifices of Ancestors',
            anchorText: 'Many of them had to give up advanced education and take up the burdens of life at their early age... Those young people, as reported, often study very hard in order to fulfill the expectations of two generations.',
            explanation: 'The essay introduces an emotional and cultural driver: university attendance fulfills the unreached aspirations of parents who sacrificed their own education during turbulent economic times.',
            explanationUz: 'Universitetga kirish koʻpincha mashaqqat chekkan ota-bobolar orzularini roʻyobga chiqarish va oilaviy qadriyatlarni yuksaltirishga xizmat qiladi.',
            scoreInsight: 'Provides cultural depth and poignant human context, elevating the essay far above sterile list-making.',
            promptApplication: 'Applies to questions about family expectations, motivation in study, and generational progress.'
          },
          {
            id: 'id-t1-8',
            type: 'conclusion',
            title: 'Self-Actualization: Society Empowering Individual Potential',
            anchorText: 'Broadly speaking, people who study in universities have their hopes: to fulfill themselves. At the same time, our society generously provides such an environment for people to achieve such goals.',
            explanation: 'Connects individual self-fulfillment (Maslow’s hierarchy) with the mutual benefit gained by society through educated, confident citizens.',
            explanationUz: 'Insonning oʻz iqtidorini toʻliq namoyon etishi (oʻzligini roʻyobga chiqarishi) va jamiyatning bunga sharoit yaratishi oʻrtasidagi uygʻunlik.',
            scoreInsight: 'High-level philosophical synthesis that closes the essay on an uplifting, forward-looking note.',
            promptApplication: 'Use to summarize essays on educational funding, civic development, and human capital.'
          }
        ],
        outline: {
          introduction: 'Historical shift from trade apprenticeships to university matriculation; setting up the quest for motives.',
          bodyPoints: [
            'Contrast between foundational school curriculum and specialized university majors.',
            'Credentials serving as essential sorting mechanisms for international corporate recruitment.',
            'Intergenerational aspirations: fulfilling the deferred dreams of working-class parents.',
            'Societal infrastructure, scholarships, and global mobility providing access.'
          ],
          conclusion: 'Higher education represents self-actualization where individual dreams merge with societal support.'
        },
        brainstormingPros: [
          'Direct pathway to high-status corporate employment requiring accredited degrees.',
          'Provides specialized academic training in engineering, jurisprudence, and science.',
          'Enables social mobility across generations.'
        ],
        brainstormingCons: [
          'High opportunity cost if theoretical training is detached from modern vocational realities.',
          'Academic pressure driven by family expectations can induce psychological strain.'
        ]
      }
    ]
  },
    {
    id: 'topic-2',
    topicNumber: 2,
    shortTitle: 'Are Parents Best Teachers?',
    category: 'personal',
    categoryName: 'Family, Parenting & Childhood',
    questionType: 'agree_disagree',
    prompt: 'Do you agree or disagree with the following statement? Parents are the best teachers. Use specific reasons and examples to support your answer.',
    essays: [
      {
        id: 'essay-2-1',
        essayNumber: 1,
        title: 'The Balance: Instinctive Mentors vs. Specialized Educators',
        score: 6.0,
        stance: 'balanced',
        wordCount: 420,
        essayText: `Obviously, the first teachers we have in our lives in most cases are our parents. They teach us to walk, to speak, and to have good manners before we reach "the real world." More than even the professional teachers that we have at school, parents are generally the most involved in the development and education of children.

Almost for sure our parents are the best teachers at the beginning of our lives, which actually corresponds to the parents' role in nature. Parents are most committed and involved in teaching their children; they have a kind of instinct to sacrifice a part of themselves for the betterment of their children. They love us and have great patience while passing down their knowledge to us. They wish us a success and thus will not teach us bad things. And of course, implicit learning occurs when children unconsciously copy some of their parents' habits and styles of behavior.

During the second stage of child development, adolescence, parents can still be in the best position to offer advice even though the children might not accept it. In this case, perhaps the child's friends would be the best teachers. Adolescents are notoriously rebellious in many cultures and may automatically reject any advice from their parents. My first marriage for instance, was solely a matter of doing the opposite when my parents tried to intrude in offering their advice. So in such matters, parents should be much more flexible and be rather the partners with their children. So we can see that being a teacher of growing child become more and more complicated case as the time passes and many parents are simply not able to meet the increased demands.

On the other hand, I would say that parents are not professional teachers and they tend to be very biased by their love of their children. So wishing good things and an easy life may prevent children from maturation. In any case, parents usually can present only one viewpoint of the world, while good teaching should be based on different attitudes. Thus, when children go to school and have a great diversity of teachers, they learn much more than their parents could probably give them. Furthermore, once our parents get older, they become more conservative and cannot always be objective in regard to modern trends and fashions. Thus we need to take their advice with caution during that period. However, some kind of intuition that I believe shared between relatives about what everybody needs and great love that exists in families still makes our parents very good teachers and advisers at any time.

In conclusion, while parents are not the ideal teachers, and well-rounded children will generally need a great diversity of teachers in their lives in order to have a more accurate view of the world, parents are generally the most committed of all teachers and have the greatest emotional investment in their children and their future.`,
        targetWords: [
          {
            id: 'tw-t2-1',
            word: 'betterment',
            partOfSpeech: 'noun',
            phonetic: '/ˈbetərmənt/',
            definition: 'The improvement of something in quality, value, or status.',
            translationUz: 'yaxshilash, kamolot, farovonlik sari rivojlanish',
            example: 'Parents possess an instinct to sacrifice for the betterment of their children.'
          },
          {
            id: 'tw-t2-2',
            word: 'implicit',
            partOfSpeech: 'adjective',
            phonetic: '/ɪmˈplɪsɪt/',
            definition: 'Implied or acquired indirectly though not plainly expressed.',
            translationUz: 'anglashiladigan, bilvosita oʻzlashtiriladigan',
            example: 'Implicit learning occurs when children unconsciously copy parents’ habits.'
          },
          {
            id: 'tw-t2-3',
            word: 'notoriously',
            partOfSpeech: 'adverb',
            phonetic: '/noʊˈtɔːriəsli/',
            definition: 'Used to emphasize that a quality or fact is widely known, typically unfavorably.',
            translationUz: 'nom qozongan holda, barchaga maʼlumki',
            example: 'Adolescents are notoriously rebellious in many cultures.'
          },
          {
            id: 'tw-t2-4',
            word: 'intrude',
            partOfSpeech: 'verb',
            phonetic: '/ɪnˈtruːd/',
            definition: 'To put oneself deliberately into a place or situation where one is uninvited.',
            translationUz: 'aralashmoq, daxl qilmoq, ruxsatsiz suqilmoq',
            example: 'Children rebel when parents try to intrude in offering unsolicited advice.'
          },
          {
            id: 'tw-t2-5',
            word: 'maturation',
            partOfSpeech: 'noun',
            phonetic: '/ˌmætʃuˈreɪʃn/',
            definition: 'The process of maturing, developing, or reaching full psychological adulthood.',
            translationUz: 'balogʻatga yetish, ulgʻayish, kamol topish',
            example: 'Wishing an easy life may inadvertently prevent children from healthy maturation.'
          },
          {
            id: 'tw-t2-6',
            word: 'conservative',
            partOfSpeech: 'adjective',
            phonetic: '/kənˈsɜːrvətɪv/',
            definition: 'Averse to change or innovation and holding traditional values.',
            translationUz: 'konservativ, eskicha qarashlarga ega, anʼanaviy',
            example: 'As parents age, they become more conservative regarding contemporary trends.'
          }
        ],
        phrases: [
          {
            id: 'ph-t2-1',
            phrase: 'pass down',
            type: 'phrasal_verb',
            meaning: 'To transmit knowledge, traditions, or values from older to younger generations.',
            translationUz: 'avloddan-avlodga oʻtkazmoq, meros qilib qoldirmoq',
            example: 'Parents have great patience while passing down their knowledge to us.',
            contextNote: 'Invaluable phrase for family and heritage prompts.'
          },
          {
            id: 'ph-t2-2',
            phrase: 'emotional investment',
            type: 'collocation',
            meaning: 'The dedication of feeling, love, and profound personal stake in someone’s welfare.',
            translationUz: 'hissiy sarmoya, qalbiy bogʻliqlik va mehr',
            example: 'Parents have the greatest emotional investment in their children and their future.',
            contextNote: 'Academic psychological collocation demonstrating high-level vocabulary.'
          },
          {
            id: 'ph-t2-3',
            phrase: 'well-rounded',
            type: 'collocation',
            meaning: 'Having a balanced, comprehensive personality, education, or skill set.',
            translationUz: 'har tomonlama barkamol, keng dunyoqarashli',
            example: 'Well-rounded children will generally need a great diversity of teachers.',
            contextNote: 'Classic CEFR C1 adjective describing holistic human development.'
          }
        ],
        writingChunks: [
          {
            id: 'wc-t2-1',
            phrase: 'Almost for sure our parents are',
            category: 'intro_thesis',
            categoryLabel: 'Qualified Assertion',
            function: 'Establishes a nuanced position recognizing the temporal limits of parental supremacy.',
            translationUz: 'Deyarli ishonch bilan aytish mumkinki, ota-onalarimiz...',
            example: 'Almost for sure our parents are the best teachers at the beginning of our lives.',
            usageNote: 'Avoids sweeping absolutes, which makes the argumentative tone more scholarly.'
          },
          {
            id: 'wc-t2-2',
            phrase: 'During the second stage of',
            category: 'body_argument',
            categoryLabel: 'Chronological Progression Marker',
            function: 'Segments the analysis along chronological developmental stages (early childhood to adolescence).',
            translationUz: 'Rivojlanishning ikkinchi bosqichida...',
            example: 'During the second stage of child development, adolescence, parents can still be in the best position.',
            usageNote: 'Organizing by developmental stages demonstrates analytical rigor.'
          },
          {
            id: 'wc-t2-3',
            phrase: 'On the other hand, I would say that',
            category: 'contrast_concession',
            categoryLabel: 'Introducing Counter-perspective',
            function: 'Transitions smoothly to examine inherent limits and biases.',
            translationUz: 'Boshqa tomondan qaraganda, shuni taʼkidlash joizki...',
            example: 'On the other hand, I would say that parents are not professional teachers.',
            usageNote: 'Essential for balanced-stance essays to display counter-arguments.'
          },
          {
            id: 'wc-t2-4',
            phrase: 'In conclusion, while parents are not',
            category: 'conclusion',
            categoryLabel: 'Complex Conditional Conclusion',
            function: 'Concludes with a sophisticated concession-plus-reassertion thesis clause.',
            translationUz: 'Xulosa oʻrnida, ota-onalar mukammal ustoz boʻlmasa-da, ...',
            example: 'In conclusion, while parents are not the ideal teachers, parents are the most committed of all teachers.',
            usageNote: 'Uses the "While X, nevertheless Y" pattern favored in high-band responses.'
          }
        ],
        ideas: [
          {
            id: 'id-t2-1',
            type: 'thesis',
            title: 'Balanced Thesis: Natural Commitment vs. Need for Diverse Perspectives',
            anchorText: 'while parents are not the ideal teachers, and well-rounded children will generally need a great diversity of teachers in their lives... parents are generally the most committed of all teachers and have the greatest emotional investment',
            explanation: 'Parents provide foundational morals, instinctive sacrifice, and unconditional love, but formal education requires professional pedagogues to prevent insularity.',
            explanationUz: 'Ota-ona ilk poydevor va fidoyilikni bersa-da, har tomonlama yetuk inson boʻlish uchun maktabdagi turli xil professional ustozlar bilimi ham zarur.',
            scoreInsight: 'Scores 6.0 by rejecting oversimplified binary claims and offering a mature developmental synthesis.',
            promptApplication: 'Use whenever a prompt asks whether one group is "the best" or "always right".'
          },
          {
            id: 'id-t2-2',
            type: 'main_argument',
            title: 'Early Childhood: Instinctive Dedication & Unconscious Mimicry',
            anchorText: 'Parents are most committed and involved in teaching their children; they have a kind of instinct to sacrifice a part of themselves for the betterment of their children... implicit learning occurs when children unconsciously copy some of their parents\' habits',
            explanation: 'Biological instincts ensure parents never withhold vital survival knowledge, and children absorb language, ethics, and emotional safety implicitly.',
            explanationUz: 'Biologik mehr va fidoyilik ota-onani beminnat bilim ulashuvchiga aylantiradi; bola ularning feʼl-atvorini beixtiyor oʻzlashtiradi.',
            scoreInsight: 'Linguistic distinction between explicit instruction and "implicit learning" demonstrates cognitive sophistication.',
            promptApplication: 'Ideal for child psychology, early childhood development, and moral education prompts.'
          },
          {
            id: 'id-t2-3',
            type: 'counter_argument',
            title: 'Adolescent Friction & Parental Subjectivity',
            anchorText: 'parents are not professional teachers and they tend to be very biased by their love of their children. So wishing good things and an easy life may prevent children from maturation.',
            explanation: 'Excessive affection leads to protective bias; parents may shield children from healthy struggle, hindering independence and objective worldview formation.',
            explanationUz: 'Cheksiz mehr tufayli ota-onalar koʻpincha xolis boʻlolmaydilar; bolani qiyinchiliklardan haddan ziyod asrash mustaqil fikrlashga toʻsqinlik qilishi mumkin.',
            scoreInsight: 'Points out the paradox of love: parental protectiveness can inadvertently impede necessary life hardships.',
            promptApplication: 'Can be deployed in parenting, overprotective families, or experiential learning debates.'
          }
        ],
        outline: {
          introduction: 'Parents are universally the first teachers; setting the question of whether they remain the "best" across a lifetime.',
          bodyPoints: [
            'Infancy and early years: biological instinct, moral grounding, and implicit imitation make parents irreplaceable.',
            'Adolescence: natural rebellion complicates parent-child mentorship, elevating peer and outside guidance.',
            'Limitations of parental perspective: emotional bias, single worldview, and conservatism in modern matters.',
            'Professional teachers provide objective, diversified disciplines and specialized pedagogy.'
          ],
          conclusion: 'Parents possess unmatched emotional investment, but balanced growth requires school diversity alongside parental guidance.'
        },
        brainstormingPros: [
          'Unconditional love and patience motivate round-the-clock guidance from day one.',
          'Foundational behavioral models, language acquisition, and moral compass originate at home.',
          'Parents understand a child’s specific vulnerabilities, sensitivities, and character better than anyone.'
        ],
        brainstormingCons: [
          'Parents lack formal pedagogical training and specialized academic/scientific subject depth.',
          'Emotional bias may blind parents to child shortcomings or promote overprotection.',
          'Single-household environment limits exposure to diverse cultural and ideological perspectives.'
        ]
      }
    ]
  },
{
  "id": "topic-3",
  "topicNumber": 3,
  "shortTitle": "Easier Food Preparation & Modern Life",
  "category": "technology",
  "categoryName": "Technology & Everyday Life",
  "questionType": "explanation",
  "prompt": "Nowadays, food has become easier to prepare. Has this change improved the way people live? Use specific reasons and examples to support your answer.",
  "essays": [
    {
      "id": "essay-3-1",
      "essayNumber": 1,
      "title": "Liberation from Culinary Drudgery & Expanded Human Horizons",
      "score": 6,
      "stance": "agree",
      "wordCount": 388,
      "essayText": "Man, through the ages, has undergone monumental transformations, progressing from primitive hunting to an era where sustenance is conveniently accessible in supermarkets. Modern technological innovations, ranging from microwave ovens and hermetically sealed preservation to instant culinary ingredients, have drastically diminished the hours required to prepare nourishing meals. While some skeptics lament that fast meals erode traditional dining rituals and promote sedentary habits, I firmly contend that easier food preparation has substantially enhanced human existence by liberating precious time, expanding nutritional diversity, and fostering gender equality.\n\nFirst and foremost, the primary blessing of accelerated food preparation is the liberation of human time. In previous generations, homemakers dedicated up to five or six hours daily to tending hearth fires, chopping raw ingredients, and simmering broths. Today, advanced kitchen appliances and pre-prepared produce reduce meal preparation to a fraction of that duration. This reclaimed time can now be invested in academic advancement, career building, artistic hobbies, and quality companionship with loved ones. For busy professionals and working parents, this temporal efficiency prevents chronic exhaustion and elevates overall mental well-being.\n\nFurthermore, simplified food preparation has democratized healthy nutrition and diverse cuisine. Prior to modern preservation methods and rapid cooking methods, common families were restricted to seasonal, regional fare, often suffering nutritional deficiencies during harsh winters. Nowadays, flash-frozen vegetables, pasteurized dairy, and vacuum-sealed proteins allow ordinary citizens to effortlessly construct well-balanced, wholesome meals within twenty minutes, irrespective of geographic location or climate.\n\nFinally, the simplification of culinary labor has served as a pivotal catalyst for social equality. Historically, the grueling burden of meal preparation fell almost exclusively upon women, confining them to domestic spheres and severely curtailing their educational opportunities. The ubiquity of instant meals and rapid cooking tools enabled women to break free from domestic servitude and enter the professional workforce en masse, thereby revolutionizing the global economy and family dynamics.\n\nIn conclusion, although society must remain vigilant against over-processed junk food, the advent of easier food preparation has indisputably improved human life. It has liberated mankind from arduous domestic chores, enriched our dietary palette, and accelerated societal emancipation.",
      "targetWords": [
        {
          "id": "tw-t3-1",
          "word": "sustenance",
          "partOfSpeech": "noun",
          "phonetic": "/ˈsʌstənəns/",
          "definition": "Food and drink regarded as a source of strength; nourishment.",
          "translationUz": "tirikchilik ozuqasi, ozuqa, moddiy taʼminot",
          "example": "Progressing from primitive hunting to an era where sustenance is conveniently accessible."
        },
        {
          "id": "tw-t3-2",
          "word": "diminished",
          "partOfSpeech": "verb",
          "phonetic": "/dɪˈmɪnɪʃt/",
          "definition": "Made smaller or less in size, extent, or degree.",
          "translationUz": "kamaytirildi, qisqartirildi",
          "example": "Modern innovations have drastically diminished the hours required to prepare meals."
        },
        {
          "id": "tw-t3-3",
          "word": "sedentary",
          "partOfSpeech": "adjective",
          "phonetic": "/ˈsednteri/",
          "definition": "Tending to spend much time seated; somewhat inactive.",
          "translationUz": "kamharakat, oʻtroq",
          "example": "Skeptics argue convenience food promotes a sedentary lifestyle."
        },
        {
          "id": "tw-t3-4",
          "word": "reclaimed",
          "partOfSpeech": "adjective",
          "phonetic": "/rɪˈkleɪmd/",
          "definition": "Recovered or brought back for useful activity.",
          "translationUz": "qaytarib olingan, tejalgan",
          "example": "This reclaimed time can now be invested in academic advancement."
        },
        {
          "id": "tw-t3-5",
          "word": "ubiquity",
          "partOfSpeech": "noun",
          "phonetic": "/juːˈbɪkwəti/",
          "definition": "The state of being very common or appearing everywhere.",
          "translationUz": "hamma joyda uchrashlik, keng tarqalganlik",
          "example": "The ubiquity of instant meals enabled women to break free from domestic servitude."
        },
        {
          "id": "tw-t3-6",
          "word": "arduous",
          "partOfSpeech": "adjective",
          "phonetic": "/ˈɑːrdʒuəs/",
          "definition": "Involving or requiring strenuous effort; difficult and tiring.",
          "translationUz": "mashaqqatli, qiyin, ogʻir",
          "example": "It has liberated mankind from arduous domestic chores."
        }
      ],
      "phrases": [
        {
          "id": "ph-t3-1",
          "phrase": "break free from",
          "type": "phrasal_verb",
          "meaning": "To escape from a confining, oppressive, or restrictive condition.",
          "translationUz": "cheklovlardan ozod boʻlmoq, qutilmoq",
          "example": "Enabled women to break free from domestic servitude and enter the workforce.",
          "contextNote": "Powerful rhetorical verb phrase for sociopolitical essays."
        },
        {
          "id": "ph-t3-2",
          "phrase": "en masse",
          "type": 'idiom',
          "meaning": "In a group; all together as a collective whole.",
          "translationUz": "ommaviy ravishda, yalpisiga",
          "example": "Women entered the professional workforce en masse.",
          "contextNote": "Sophisticated French loan phrase accepted in high-level academic writing."
        },
        {
          "id": "ph-t3-3",
          "phrase": "temporal efficiency",
          "type": "collocation",
          "meaning": "The ability to accomplish tasks with minimal expenditure of time.",
          "translationUz": "vaqt tejamkorligi va samaradorligi",
          "example": "For busy professionals, this temporal efficiency prevents chronic exhaustion.",
          "contextNote": "C2-level academic synonym for \"saving time\"."
        }
      ],
      "writingChunks": [
        {
          "id": "wc-t3-1",
          "phrase": "Man, through the ages, has undergone",
          "category": "intro_thesis",
          "categoryLabel": "Historical Context Lead-in",
          "function": "Establishes a grand historical arc from primitive origins to modern sophistication.",
          "translationUz": "Insoniyat asrlar mobaynida ...dan oʻtib keldi",
          "example": "Man, through the ages, has undergone monumental transformations."
        },
        {
          "id": "wc-t3-2",
          "phrase": "I firmly contend that",
          "category": "intro_thesis",
          "categoryLabel": "Stating Thesis Stance",
          "function": "Directly and unequivocally states the author’s primary thesis position.",
          "translationUz": "Men qatʼiy taʼkidlaymanki...",
          "example": "I firmly contend that easier food preparation has substantially enhanced human existence."
        },
        {
          "id": "wc-t3-3",
          "phrase": "First and foremost, the primary blessing of",
          "category": "body_argument",
          "categoryLabel": "First Argument Introduction",
          "function": "Introduces the core primary benefit with persuasive rhetorical weight.",
          "translationUz": "Avvalo, ...ning eng asosiy neʼmati / afzalligi shundaki",
          "example": "First and foremost, the primary blessing of accelerated food preparation is the liberation of human time."
        },
        {
          "id": "wc-t3-4",
          "phrase": "served as a pivotal catalyst for",
          "category": "cause_effect",
          "categoryLabel": "Causality & Impact",
          "function": "Describes how an innovation directly stimulated a major societal outcome.",
          "translationUz": "...uchun hal qiluvchi turtki (katalizator) boʻlib xizmat qildi",
          "example": "The simplification of culinary labor has served as a pivotal catalyst for social equality."
        },
        {
          "id": "wc-t3-5",
          "phrase": "society must remain vigilant against",
          "category": "conclusion",
          "categoryLabel": "Concession / Cautionary Note",
          "function": "Balances an enthusiastic argument with a pragmatic warning about health risks.",
          "translationUz": "jamiyat ...dan doimo ehtiyot boʻlishi va hushyor turishi lozim",
          "example": "Although society must remain vigilant against over-processed junk food, the advent of easier food preparation has indisputably improved human life."
        }
      ],
      "ideas": [
        {
          "id": "idea-t3-1",
          "type": "thesis",
          "title": "Easier food preparation dramatically elevates modern quality of life",
          "anchorText": "easier food preparation has substantially enhanced human existence by liberating precious time, expanding nutritional diversity, and fostering gender equality.",
          "explanation": "Frames food technology not merely as culinary convenience, but as a triple engine of temporal freedom, nutritional equity, and gender emancipation.",
          "explanationUz": "Oziq-ovqat tayyorlashning osonlashuvi nafaqat qulaylik, balki vaqtni tejash, toʻgʻri ovqatlanish imkoniyati va ayollarning jamiyatdagi tengligini taʼminlovchi omildir.",
          "scoreInsight": "Demonstrates multi-dimensional argumentation (lifestyle, health, and gender sociopolitical history).",
          "promptApplication": "Transferable to any prompt asking about domestic technology, washing machines, or household automation."
        },
        {
          "id": "idea-t3-2",
          "type": "main_argument",
          "title": "Temporal liberation enables career, academic, and personal pursuits",
          "anchorText": "This reclaimed time can now be invested in academic advancement, career building, artistic hobbies, and quality companionship with loved ones.",
          "explanation": "Reclaims hours previously lost to kitchen labor and redirects them into high-value cognitive and emotional development.",
          "explanationUz": "Oshxonadagi ogʻir mehnatdan tejalgan vaqt taʼlim olish, martaba qurish va oilaga gʻamxoʻrlik qilishga yoʻnaltiriladi.",
          "scoreInsight": "Uses concrete contrasts between historic multi-hour chores and modern 20-minute prep.",
          "promptApplication": "Use whenever discussing automation, modern labor-saving devices, or work-life balance."
        },
        {
          "id": "idea-t3-3",
          "type": "main_argument",
          "title": "Catalyst for female workforce participation and social parity",
          "anchorText": "enabled women to break free from domestic servitude and enter the professional workforce en masse",
          "explanation": "Elevates an everyday topic into profound socio-economic history: kitchen labor emancipation unlocked half the human talent pool.",
          "explanationUz": "Oshxona mashaqqatining yengillashishi ayollarga uy yumushlaridan ozod boʻlib, taʼlim olish va mehnat bozoriga kirish imkonini berdi.",
          "scoreInsight": "High-level sociological insight that instantly distinguishes band 6.0 candidates from average writers.",
          "promptApplication": "Applicable to prompts on historical changes, women in leadership, and technology in society."
        }
      ],
      "outline": {
        "introduction": "Historical shift from primitive hunting to modern supermarkets; thesis that easier preparation saves vital time, enhances health, and advances gender parity.",
        "bodyPoints": [
          "Temporal efficiency: freeing 4-5 hours of daily kitchen toil for education, profession, and family care.",
          "Nutritional equity: refrigeration and flash-freezing enable balanced diets regardless of winter or geography.",
          "Socio-economic liberation: breaking the historic domestic burden on women, enabling widespread workforce participation."
        ],
        "conclusion": "Concession acknowledging dietary dangers of processed snacks, balanced by the firm verdict that culinary ease has liberated humanity."
      },
      "brainstormingPros": [
        "Saves multiple hours daily for study, work, and personal development.",
        "Reduces reliance on seasonal availability, preventing vitamin deficiencies.",
        "Decreases domestic friction and encourages equal household division of labor."
      ],
      "brainstormingCons": [
        "Excessive reliance on ultra-processed meals containing high sodium and preservatives.",
        "Loss of traditional family bonding around long communal cooking rituals."
      ]
    }
  ]
},
{
  "id": "topic-4",
  "topicNumber": 4,
  "shortTitle": "Knowledge from Books vs Experience",
  "category": "education",
  "categoryName": "Education & Philosophy",
  "questionType": "preference",
  "prompt": "It has been said, 'Not everything that is learned is contained in books.' Compare knowledge gained from experience with knowledge gained from books. In your opinion, which source is more important? Why?",
  "essays": [
    {
      "id": "essay-4-1",
      "essayNumber": 1,
      "title": "Theoretical Blueprints vs The Crucible of Experience",
      "score": 6,
      "stance": "preference",
      "wordCount": 412,
      "essayText": "Books have long been revered as the immortal custodians of human wisdom, preserving centuries of scientific discoveries, literary brilliance, and philosophical discourse. However, a timeless adage rightly proclaims that not everything that is learned is contained within the printed page. While books provide the structural scaffolding of theoretical principles, experiential learning breathes vitality into those principles through direct trial, tactile sensation, and emotional resonance. While acknowledging the invaluable foundation provided by literature, I firmly argue that practical experience is the superior and more indispensable source of genuine knowledge.\n\nOn the one hand, academic literature is undeniably vital for establishing conceptual literacy and transmitting cumulative knowledge across generations. Through books, a novice engineer can absorb mathematical proofs calculated over centuries, and an aspiring physician can study the intricate anatomy of the human cardiovascular system without having to dissect a cadaver first. Books transcend the limits of mortal lifespan and geography, granting readers access to the greatest intellects of human civilization. Without this literary bedrock, every new generation would be condemned to reinvent the wheel in agonizing isolation.\n\nOn the other hand, theoretical comprehension remains dormant and sterile until tested in the crucible of real-world experience. Reading a manual on swimming or aviation cannot teach an individual how to stay afloat in churning currents or navigate atmospheric turbulence; such physical proficiencies demand sensory feedback, muscle memory, and instantaneous decision-making under stress. Furthermore, the profoundest facets of human existence—such as interpersonal empathy, leadership under adversity, and resilience in the face of bereavement—cannot be synthesized through dry prose. They must be endured, felt, and internalized through personal trials.\n\nUltimately, experience acts as the supreme filter that validates or refutes book-learned doctrine. Theoretical hypotheses frequently fail when confronted by unpredictable human behaviors and turbulent market conditions. A brilliant economist who has only read treatises may miscalculate human panic during a financial panic, whereas a seasoned entrepreneur who has weathered bankruptcies possesses instinctual acumen that no textbook can impart.\n\nIn conclusion, while books furnish humanity with indispensable theoretical blueprints, experiential knowledge remains the preeminent source of true competence and emotional maturity. As the ancient philosopher Aristotle observed, what we must learn to do, we learn by doing.",
      "targetWords": [
        {
          "id": "tw-t4-1",
          "word": "custodians",
          "partOfSpeech": "noun",
          "phonetic": "/kʌˈstoʊdiənz/",
          "definition": "Persons or entities having responsibility for protecting or preserving something.",
          "translationUz": "qoʻriqchilari, saqlovchilari, himoyachilari",
          "example": "Books have long been revered as the immortal custodians of human wisdom."
        },
        {
          "id": "tw-t4-2",
          "word": "scaffolding",
          "partOfSpeech": "noun",
          "phonetic": "/ˈskæfəldɪŋ/",
          "definition": "A temporary supporting structure or framework that facilitates learning.",
          "translationUz": "asosiy tayanch tizimi, qolip, fundament",
          "example": "Books provide the structural scaffolding of theoretical principles."
        },
        {
          "id": "tw-t4-3",
          "word": "tactile",
          "partOfSpeech": "adjective",
          "phonetic": "/ˈtæktaɪl/",
          "definition": "Connected with or perceived through the sense of touch.",
          "translationUz": "sezilarli, qoʻl bilan ushlab his qilinadigan",
          "example": "Experiential learning breathes vitality through direct trial and tactile sensation."
        },
        {
          "id": "tw-t4-4",
          "word": "crucible",
          "partOfSpeech": "noun",
          "phonetic": "/ˈkruːsɪbl/",
          "definition": "A severe test or trial that shapes and transforms someone.",
          "translationUz": "sinov maydoni, qizgʻin sinov maydoni",
          "example": "Theoretical comprehension remains dormant until tested in the crucible of real experience."
        },
        {
          "id": "tw-t4-5",
          "word": "acumen",
          "partOfSpeech": "noun",
          "phonetic": "/ˈækjəmən/",
          "definition": "The ability to make good judgments and quick decisions.",
          "translationUz": "oʻtkir zehniy farosat, tadbirkorlik uquvi",
          "example": "A seasoned entrepreneur possesses instinctual acumen that no textbook can impart."
        },
        {
          "id": "tw-t4-6",
          "word": "preeminent",
          "partOfSpeech": "adjective",
          "phonetic": "/priːˈemɪnənt/",
          "definition": "Surpassing all others; very distinguished in some way.",
          "translationUz": "eng ustun, birinchi darajali, benazir",
          "example": "Experiential knowledge remains the preeminent source of true competence."
        }
      ],
      "phrases": [
        {
          "id": "ph-t4-1",
          "phrase": "reinvent the wheel",
          "type": 'idiom',
          "meaning": "To waste effort trying to create something that already exists and works well.",
          "translationUz": "allaqachon yaratilgan narsani qaytadan oʻylab topishga behuda urinmoq",
          "example": "Without books, every generation would be condemned to reinvent the wheel."
        },
        {
          "id": "ph-t4-2",
          "phrase": "stay afloat",
          "type": 'idiom',
          "meaning": "Literally to remain above water; metaphorically to survive difficult situations.",
          "translationUz": "suv yuzida suzib qolmoq, qiyinchilikda chidab turmoq",
          "example": "Cannot teach an individual how to stay afloat in churning currents."
        },
        {
          "id": "ph-t4-3",
          "phrase": "tested in the crucible of",
          "type": "collocation",
          "meaning": "Subjected to severe real-world challenges that demonstrate true quality.",
          "translationUz": "...ning qizgʻin sinovlaridan oʻtgan",
          "example": "Tested in the crucible of real-world experience."
        }
      ],
      "writingChunks": [
        {
          "id": "wc-t4-1",
          "phrase": "Books have long been revered as the",
          "category": "intro_thesis",
          "categoryLabel": "Historical Reverence Opening",
          "function": "Graciously acknowledges the established authority of books before pivoting to personal stance.",
          "translationUz": "Kitoblar azaldan ... sifatida ulugʻlanib kelingan",
          "example": "Books have long been revered as the immortal custodians of human wisdom."
        },
        {
          "id": "wc-t4-2",
          "phrase": "breathes vitality into",
          "category": "body_argument",
          "categoryLabel": "Metaphorical Illustration",
          "function": "Contrasts abstract static theory with dynamic real-world implementation.",
          "translationUz": "...ga tiriklik va hayotiy nafas bagʻishlaydi",
          "example": "Experiential learning breathes vitality into theoretical principles through direct trial."
        },
        {
          "id": "wc-t4-3",
          "phrase": "Without this literary bedrock, every new generation would",
          "category": "contrast_concession",
          "categoryLabel": "Concession Analysis",
          "function": "Examines the counterfactual scenario to illustrate the legitimate value of books.",
          "translationUz": "Ushbu adabiy poydevorsiz har bir yangi avlod ...ga mahkum boʻlardi",
          "example": "Without this literary bedrock, every new generation would be condemned to reinvent the wheel."
        },
        {
          "id": "wc-t4-4",
          "phrase": "acts as the supreme filter that validates or refutes",
          "category": "body_argument",
          "categoryLabel": "Analytical Assessment",
          "function": "Positions real-world outcome as the ultimate test of hypothetical truth.",
          "translationUz": "...ni tasdiqlaydigan yoki rad etadigan oliy mezon (filtr) vazifasini bajaradi",
          "example": "Ultimately, experience acts as the supreme filter that validates or refutes book-learned doctrine."
        }
      ],
      "ideas": [
        {
          "id": "idea-t4-1",
          "type": "thesis",
          "title": "Books provide theoretical scaffolding, but experience is paramount",
          "anchorText": "practical experience is the superior and more indispensable source of genuine knowledge.",
          "explanation": "Presents a sophisticated synthesized position: books supply the architectural blueprints, but experiential practice creates functional mastery.",
          "explanationUz": "Kitoblar nazariy asosni bersa-da, amaliy tajriba insonning haqiqiy mahorati va yetukligini shakllantiruvchi eng oliy manbadir.",
          "scoreInsight": "Avoids a one-sided attack on books by granting them legitimate foundational credit.",
          "promptApplication": "Ideal for prompts asking about theory vs practice, classroom vs internship, or formal vs informal education."
        },
        {
          "id": "idea-t4-2",
          "type": "main_argument",
          "title": "Emotional intelligence and crisis management cannot be read into existence",
          "anchorText": "interpersonal empathy, leadership under adversity, and resilience in the face of bereavement—cannot be synthesized through dry prose.",
          "explanation": "Identifies human qualities (leadership, bereavement, empathy) that fundamentally resist textual transmission.",
          "explanationUz": "Empatiya, qiyinchilik paytidagi yetakchilik va musibatdagi sabr-toqatni faqat hayotiy sinovlar orqali oʻrganish mumkin.",
          "scoreInsight": "Demonstrates psychological depth that elevates the essay beyond mechanical examples.",
          "promptApplication": "Use in essays about leadership qualities, emotional maturity, or character formation."
        }
      ],
      "outline": {
        "introduction": "Books as custodians of wisdom vs the proverb of living experience; thesis that while books give blueprints, experience delivers vital competence.",
        "bodyPoints": [
          "Value of books: historical continuity, anatomy and science without reinventing the wheel.",
          "Crucible of experience: physical reflexes, tactile muscle memory, and emotional resilience cannot be read.",
          "Experience as ultimate arbiter: real-world markets and crisis situations test theoretical assumptions."
        ],
        "conclusion": "Synthesis referencing Aristotle: theoretical blueprints are essential, but true mastery is achieved by doing."
      },
      "brainstormingPros": [
        "Builds instinctual reflexes, muscle memory, and situational adaptability.",
        "Develops deep emotional wisdom, empathy, and resilience under real stress.",
        "Prevents abstract delusions by constantly testing assumptions against reality."
      ],
      "brainstormingCons": [
        "Trial-and-error can be painfully slow, perilous, or financially devastating.",
        "Lacks historical breadth without the recorded wisdom of thousands of predecessors."
      ]
    }
  ]
},
{
  "id": "topic-5",
  "topicNumber": 5,
  "shortTitle": "Factory in Community: Economy vs Environment",
  "category": "society",
  "categoryName": "Environment & Community Development",
  "questionType": "agree_disagree",
  "prompt": "A company has announced that it wishes to build a large factory near your community. Discuss the advantages and disadvantages of this new influence on your community. Do you support or oppose the factory? Explain your position.",
  "essays": [
    {
      "id": "essay-5-1",
      "essayNumber": 1,
      "title": "Preserving Civic Harmony Over Short-Sighted Industrial Expansion",
      "score": 6,
      "stance": "disagree",
      "wordCount": 405,
      "essayText": "The prospective establishment of a massive manufacturing enterprise in the immediate periphery of a tranquil residential neighborhood invariably precipitates passionate civic debate. Advocates of industrial development celebrate the influx of capital and local job creation, while conservationists and resident families voice grave trepidation concerning toxic emissions, traffic gridlock, and deteriorated quality of life. Having meticulously weighed both sides of this dilemma, I vigorously oppose the construction of this factory, as its irreversible ecological harm and civic disruption far eclipse its ephemeral economic windfalls.\n\nTo be sure, constructing a factory yields tangible commercial perks that cannot be dismissed out of hand. A manufacturing plant generates hundreds of direct operational positions, ranging from manual assembly lines to administrative engineering roles. Furthermore, local suppliers, catering services, and retail shops might experience a modest surge in patronage as commuting laborers patronize surrounding commercial establishments. The resulting municipal tax revenues could theoretically be channeled into improving community roads and funding neighborhood educational facilities.\n\nHowever, these economic incentives are thoroughly eclipsed by catastrophic environmental externalities. Manufacturing plants inevitably generate voluminous industrial effluents, air pollutants, and non-biodegradable hazardous wastes. Toxic emissions degrade local air quality, exacerbating childhood asthma and respiratory illnesses among elderly residents. Moreover, toxic seepage risks contaminating subterranean aquifers, endangering the community's domestic water reserves. The clean air, lush parks, and pristine serenity that currently attract young families to our enclave would be irrevocably degraded.\n\nEqually detrimental is the inevitable collapse of our civic tranquility and infrastructural integrity. Our neighborhood streets were engineered for domestic vehicles, not fleets of heavy articulated diesel trucks rumbling throughout all hours of the night. The resulting noise pollution, incessant vibrations, and chronic traffic congestion would turn peaceful residential avenues into perilous logistical corridors. Property values in the vicinity would plummet as discerning homebuyers flee industrial blight, effectively erasing the life savings invested by residents in their family homes.\n\nIn conclusion, although the promise of municipal revenue and employment possesses superficial allure, the long-term human cost is unacceptably exorbitant. A community’s primary mandate is the health, safety, and tranquility of its citizenry. Therefore, municipal planners should steer industrial conglomerates toward designated offshore industrial parks rather than polluting peaceful residential sanctuaries.",
      "targetWords": [
        {
          "id": "tw-t5-1",
          "word": "precipitates",
          "partOfSpeech": "verb",
          "phonetic": "/prɪˈsɪpɪteɪts/",
          "definition": "Causes an event or situation to happen suddenly or unexpectedly.",
          "translationUz": "keltirib chiqaradi, tezlashtiradi, qoʻzgʻaydi",
          "example": "Invariably precipitates passionate civic debate."
        },
        {
          "id": "tw-t5-2",
          "word": "trepidation",
          "partOfSpeech": "noun",
          "phonetic": "/ˌtrepɪˈdeɪʃn/",
          "definition": "A feeling of fear or agitation about something that may happen.",
          "translationUz": "xavotir, qoʻrquv, bezovtalik",
          "example": "Resident families voice grave trepidation concerning toxic emissions."
        },
        {
          "id": "tw-t5-3",
          "word": "effluents",
          "partOfSpeech": "noun",
          "phonetic": "/ˈefluənts/",
          "definition": "Liquid waste or sewage discharged into a river or the sea.",
          "translationUz": "sanoat chiqindi suvlari, oqova suvlar",
          "example": "Manufacturing plants generate voluminous industrial effluents and hazardous wastes."
        },
        {
          "id": "tw-t5-4",
          "word": "aquifers",
          "partOfSpeech": "noun",
          "phonetic": "/ˈækwɪfərz/",
          "definition": "A body of permeable rock that can contain or transmit groundwater.",
          "translationUz": "yerosti suvli qatlamlari",
          "example": "Toxic seepage risks contaminating subterranean aquifers."
        },
        {
          "id": "tw-t5-5",
          "word": "plummet",
          "partOfSpeech": "verb",
          "phonetic": "/ˈplʌmɪt/",
          "definition": "To fall or drop straight down at high speed.",
          "translationUz": "keskin pasaymoq, qulamoq",
          "example": "Property values in the vicinity would plummet as buyers flee industrial blight."
        },
        {
          "id": "tw-t5-6",
          "word": "exorbitant",
          "partOfSpeech": "adjective",
          "phonetic": "/ɪɡˈzɔːrbɪtənt/",
          "definition": "Unreasonably high or excessive in price, demand, or toll.",
          "translationUz": "haddan ziyod yuqori, oʻta qimmatga tushadigan",
          "example": "The long-term human cost is unacceptably exorbitant."
        }
      ],
      "phrases": [
        {
          "id": "ph-t5-1",
          "phrase": "out of hand",
          "type": 'idiom',
          "meaning": "Without giving something serious thought or consideration.",
          "translationUz": "oʻylab koʻrmasdan darhol rad etib",
          "example": "Yields commercial perks that cannot be dismissed out of hand."
        },
        {
          "id": "ph-t5-2",
          "phrase": "subterranean aquifers",
          "type": "collocation",
          "meaning": "Underground natural reservoirs containing precious fresh drinking water.",
          "translationUz": "yerosti toza ichimlik suvi qatlamlari",
          "example": "Contaminating subterranean aquifers, endangering domestic water reserves."
        },
        {
          "id": "ph-t5-3",
          "phrase": "industrial blight",
          "type": "collocation",
          "meaning": "The ugly, polluted visual and physical deterioration caused by factories.",
          "translationUz": "sanoatlashuv keltirib chiqargan xarobalashuv va ifloslanish",
          "example": "Discerning homebuyers flee industrial blight, eroding property values."
        }
      ],
      "writingChunks": [
        {
          "id": "wc-t5-1",
          "phrase": "Having meticulously weighed both sides of this dilemma, I",
          "category": "intro_thesis",
          "categoryLabel": "Balanced Stance Thesis",
          "function": "Signals that the author considered counterarguments thoroughly before choosing a side.",
          "translationUz": "Ushbu muammoning ikki tomonini chuqur tahlil qilib, men...",
          "example": "Having meticulously weighed both sides of this dilemma, I vigorously oppose the construction of this factory."
        },
        {
          "id": "wc-t5-2",
          "phrase": "To be sure, constructing a factory yields",
          "category": "contrast_concession",
          "categoryLabel": "Concession Transition",
          "function": "Admits the valid economic counterargument with formal rhetorical poise.",
          "translationUz": "Shubhasizki, zavod qurilishi ... beradi",
          "example": "To be sure, constructing a factory yields tangible commercial perks."
        },
        {
          "id": "wc-t5-3",
          "phrase": "are thoroughly eclipsed by catastrophic",
          "category": "body_argument",
          "categoryLabel": "Refutation Power",
          "function": "Overcomes the previous concession by showing the massive scale of disadvantages.",
          "translationUz": "...katastrofik zararlar soyasida butunlay yoʻqqa chiqadi",
          "example": "However, these economic incentives are thoroughly eclipsed by catastrophic environmental externalities."
        },
        {
          "id": "wc-t5-4",
          "phrase": "A community’s primary mandate is",
          "category": "conclusion",
          "categoryLabel": "Ethical Principle Closure",
          "function": "Roots the conclusion in an unassailable moral principle of government.",
          "translationUz": "Har qanday jamoatning birlamchi burchi bu...",
          "example": "A community’s primary mandate is the health, safety, and tranquility of its citizenry."
        }
      ],
      "ideas": [
        {
          "id": "idea-t5-1",
          "type": "thesis",
          "title": "Ecological destruction and civic ruin outweigh short-term economic gains",
          "anchorText": "I vigorously oppose the construction of this factory, as its irreversible ecological harm and civic disruption far eclipse its ephemeral economic windfalls.",
          "explanation": "Clear thesis balancing conceded employment opportunities against long-term toxic hazards and housing devaluation.",
          "explanationUz": "Zavod keltiradigan vaqtinchalik iqtisodiy foydadan koʻra, uning atrof-muhitga, sogʻlikka va tinchlikka yetkazadigan zarari ancha ustundir.",
          "scoreInsight": "Contrasts \"irreversible ecological harm\" with \"ephemeral economic windfalls\" with academic elegance.",
          "promptApplication": "Crucial blueprint for any environmental vs industrial development prompt."
        },
        {
          "id": "idea-t5-2",
          "type": "main_argument",
          "title": "Infrastructure strain, heavy trucking, and real estate depreciation",
          "anchorText": "turn peaceful residential avenues into perilous logistical corridors. Property values in the vicinity would plummet",
          "explanation": "Examines tangible practical impacts: road destruction by diesel trucks, nocturnal noise pollution, and devastating home equity loss.",
          "explanationUz": "Katta yuk mashinalari harakati koʻchalarni xavfli yoʻlakka aylantiradi va aholining uylari narxi keskin tushib ketishiga sabab boʻladi.",
          "scoreInsight": "Provides concrete municipal and logistical details rather than vague abstractions.",
          "promptApplication": "Useful in prompts on urban zoning, highway construction, or local community projects."
        }
      ],
      "outline": {
        "introduction": "The tension between industrial capital and residential peace; thesis firmly opposing the factory due to environmental and infrastructural damage.",
        "bodyPoints": [
          "Concession on advantages: jobs created, local retail boosted, and municipal tax collection.",
          "Catastrophic environmental toll: toxic airborne effluents, respiratory illnesses, and aquifer contamination.",
          "Infrastructural collapse and economic loss: heavy diesel trucks destroying serenity and plunging real estate values."
        ],
        "conclusion": "The ethical mandate of community leadership is citizen health, urging factories into isolated industrial zones."
      },
      "brainstormingPros": [
        "Creates hundreds of steady manufacturing, logistics, and managerial jobs.",
        "Boosts municipal tax revenues for public schools, parks, and roads.",
        "Provides indirect business for local lunch diners, stores, and suppliers."
      ],
      "brainstormingCons": [
        "Air, ground, and water pollution causing severe respiratory ailments.",
        "Nocturnal noise and heavy diesel trucking disrupting neighborhood safety.",
        "Significant depreciation of nearby residential property values."
      ]
    }
  ]
}
];
