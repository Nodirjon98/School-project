import { WritingChunk } from '../../types';

/**
 * MASTER LIBRARY OF ALL USEFUL WRITING CHUNKS
 * Specifically crafted for learners with no prior experience in essay writing.
 * Organized into 7 progressive stages of an academic essay.
 */
export const ALL_USEFUL_WRITING_CHUNKS: WritingChunk[] = [
  // =========================================================================
  // 1. INTRO & HOOK (Mavzuni boshlash va dolzarblik)
  // =========================================================================
  {
    id: 'chunk-hook-1',
    phrase: "In today's rapidly evolving world, [Topic/Issue] has become a subject of great significance.",
    category: 'intro_thesis',
    categoryLabel: 'Hook & Context / Kirish qoliplari',
    function: 'Opens the essay with a broad, impactful statement establishing the relevance of the topic.',
    translationUz: "Bugungi jadal rivojlanayotgan dunyoda [Mavzu] katta ahamiyatga ega masalaga aylandi.",
    beginnerTipUz: "Ushbu qolipni birinchi jumlada qo'llang. [Topic] o'rniga mavzu nomini qo'ying (masalan: higher education, technology, environmental protection).",
    example: "In today's rapidly evolving world, higher education has become a subject of great significance for career success.",
    exampleUz: "Bugungi jadal rivojlanayotgan dunyoda oliy ta'lim kasbiy muvaffaqiyat uchun katta ahamiyatga ega masalaga aylandi."
  },
  {
    id: 'chunk-hook-2',
    phrase: "It is widely acknowledged that [General Truth], yet opinions remain divided regarding [Specific Question].",
    category: 'intro_thesis',
    categoryLabel: 'Hook & Context / Kirish qoliplari',
    function: 'Sets up a balanced debate by acknowledging a consensus before presenting the contentious issue.',
    translationUz: "Hammaga ma'lumki, [Umumiy haqiqat], biroq [Aniq masala] borasida fikrlar hamon turlicha.",
    beginnerTipUz: "Mavzu bo'yicha bahs-munozara borligini ko'rsatish uchun ajoyib qolip. Boshlovchilar uchun kirishning 2-jumlasi sifatida mos keladi.",
    example: "It is widely acknowledged that parents influence their children, yet opinions remain divided regarding whether they are the absolute best teachers.",
    exampleUz: "Ota-onalar o'z farzandlariga ta'sir qilishi hammaga ma'lum, biroq ular eng yaxshi ustozlar ekanligi borasida fikrlar hamon turlicha."
  },
  {
    id: 'chunk-hook-3',
    phrase: "There is no denying that [Subject] plays a pivotal role in shaping modern human lives.",
    category: 'intro_thesis',
    categoryLabel: 'Hook & Context / Kirish qoliplari',
    function: 'Emphasizes the undeniable importance and ubiquity of the central subject.',
    translationUz: "Hech shubha yo'qki, [Mavzu] zamonaviy inson hayotini shakllantirishda hal qiluvchi o'rin tutadi.",
    beginnerTipUz: "Agar mavzu inson hayotiga chuqur ta'sir qilsa (oziq-ovqat, transport, kitoblar, ta'lim), ushbu kuchli iborani tanlang.",
    example: "There is no denying that dietary habits play a pivotal role in shaping modern human lives and longevity.",
    exampleUz: "Hech shubha yo'qki, ovqatlanish odatlari zamonaviy inson hayoti va umr ko'rish davomiyligini belgilashda hal qiluvchi o'rin tutadi."
  },
  {
    id: 'chunk-hook-4',
    phrase: "Over the past few decades, the question of whether [Situation] has generated lively debate.",
    category: 'intro_thesis',
    categoryLabel: 'Hook & Context / Kirish qoliplari',
    function: 'Frames the essay topic within a modern historical trajectory.',
    translationUz: "Oxirgi bir necha o'n yillikda [Vaziyat] masalasi qizg'in bahs-munozaralarga sabab bo'lmoqda.",
    beginnerTipUz: "Vaqtga oid kirish: zamonaviy o'zgarishlarni ta'kidlash uchun qulay boshlang'ich jumla.",
    example: "Over the past few decades, the question of whether material wealth guarantees genuine happiness has generated lively debate.",
    exampleUz: "Oxirgi bir necha o'n yillikda moddiy boylik haqiqiy baxtni kafolatlaydimi yoki yo'qmi degan savol qizg'in bahslarga sabab bo'lmoqda."
  },

  // =========================================================================
  // 2. STATING STANCE & THESIS (O'z fikrini qat'iy bildirish)
  // =========================================================================
  {
    id: 'chunk-thesis-1',
    phrase: "From my perspective, I firmly believe that [Your Stance] for several compelling reasons.",
    category: 'intro_thesis',
    categoryLabel: 'Thesis & Stance / O\'z fikrini bildirish',
    function: 'Clearly announces the author\'s main stance and signals the supporting arguments ahead.',
    translationUz: "Mening nuqtai nazarimdan, men bir qator asosli sabablarga ko'ra [O'z fikringiz]ga qat'iy ishonaman.",
    beginnerTipUz: "Kirish abzasining eng oxirgi jumlasi (Thesis). Bu yerda 'I think' o'rniga 'I firmly believe that...' ishlating!",
    example: "From my perspective, I firmly believe that practical hands-on experience is superior to mere classroom theory.",
    exampleUz: "Mening nuqtai nazarimdan, amaliy tajriba shunchaki darsdagi nazariyadan ustunroq ekaniga qat'iy ishonaman."
  },
  {
    id: 'chunk-thesis-2',
    phrase: "While both sides present reasonable arguments, I lean toward the view that [Chosen Stance].",
    category: 'intro_thesis',
    categoryLabel: 'Thesis & Stance / O\'z fikrini bildirish',
    function: 'Diplomatically introduces the author’s preferred viewpoint in a balanced prompt.',
    translationUz: "Har ikki tomon ham o'ziga yarasha asosli dalillarga ega bo'lsa-da, men [Tanlangan fikr] tomoniga moyilman.",
    beginnerTipUz: "Agar savolda ikkita tanlov berilgan bo'lsa (masalan, tajriba yig'ishmi yoki narsa sotib olishmi), bu qolip eng yaxshi tanlovdir.",
    example: "While both sides present reasonable arguments, I lean toward the view that investing in memorable travel offers far richer emotional rewards.",
    exampleUz: "Har ikki tomon ham asosli dalillarga ega bo'lsa-da, men sayohatlarga mablag' sarflash boyroq his-tuyg'ular hadya etadi degan fikrga moyilman."
  },
  {
    id: 'chunk-thesis-3',
    phrase: "In this essay, I will delve into the primary reasons why [Core Claim] holds true.",
    category: 'intro_thesis',
    categoryLabel: 'Thesis & Stance / O\'z fikrini bildirish',
    function: 'Explicit roadmap statement demonstrating clear academic organization.',
    translationUz: "Ushbu inshoda men nima sababdan [Asosiy fikr] to'g'ri ekanini asoslab beruvchi bosh omillarni tahlil qilaman.",
    beginnerTipUz: "Inshoni nima haqida yozishingizni ko'rsatuvchi xarita (roadmap). Boshlovchilar insho rejasini tartibli bayon qilishida yordam beradi.",
    example: "In this essay, I will delve into the primary reasons why attending university opens doors to professional distinction.",
    exampleUz: "Ushbu inshoda men nima sababdan universitetda o'qish professional yutuqlarga yo'l ochishini ko'rsatuvchi asosiy sabablarni tahlil qilaman."
  },

  // =========================================================================
  // 3. INTRODUCING BODY POINTS & REASONS (Asosiy sabablarni keltirish)
  // =========================================================================
  {
    id: 'chunk-body-1',
    phrase: "First and foremost, it cannot be overstated that [First Major Point].",
    category: 'body_argument',
    categoryLabel: 'Body Paragraphs / Asosiy dalillar',
    function: 'Introduces the strongest opening argument in the first body paragraph with high rhetorical emphasis.',
    translationUz: "Eng avvalo, [Birinchi asosiy fikr]ning o'ta muhim ekanini ortiqcha ta'kidlashga hojat yo'q.",
    beginnerTipUz: "1-Body abzasining birinchi jumlasi (Topic Sentence). Boshlovchilar 'First' o'rniga 'First and foremost' ishlatib yuqori ball oladi.",
    example: "First and foremost, it cannot be overstated that acquiring practical vocational skills immediately enhances employability.",
    exampleUz: "Eng avvalo, amaliy kasbiy ko'nikmalarga ega bo'lish darhol ishga joylashish imkoniyatini oshirishini ortiqcha ta'kidlashga hojat yo'q."
  },
  {
    id: 'chunk-body-2',
    phrase: "Another compelling argument in favor of this perspective is that [Second Reason].",
    category: 'body_argument',
    categoryLabel: 'Body Paragraphs / Asosiy dalillar',
    function: 'Seamlessly transitions to the second body paragraph, introducing a new dimension of support.',
    translationUz: "Ushbu qarashni qo'llab-quvvatlovchi yana bir kuchli dalil shuki, [Ikkinchi sabab].",
    beginnerTipUz: "2-Body abzasini boshlash uchun eng mukammal qolip. 'Secondly' yoki 'Also' degan oddiy so'zlarning o'rnini to'liq bosadi.",
    example: "Another compelling argument in favor of this perspective is that lifelong memories do not depreciate like material commodities.",
    exampleUz: "Ushbu qarashni qo'llab-quvvatlovchi yana bir kuchli dalil shuki, bir umrlik xotiralar moddiy buyumlar kabi eskirib qadrini yo'qotmaydi."
  },
  {
    id: 'chunk-body-3',
    phrase: "Equally important is the fundamental role that [Factor] plays in [Positive Outcome].",
    category: 'body_argument',
    categoryLabel: 'Body Paragraphs / Asosiy dalillar',
    function: 'Elevates a supporting factor to equal prominence within an argumentation structure.',
    translationUz: "Shuningdek, [Omil]ning [Ijobiy natija]ga erishishda tutgan tub o'rni ham birdek muhimdir.",
    beginnerTipUz: "Biror muhim sabab yoki shartni ta'kidlashda qo'llaniladi (masalan, ota-ona tarbiyasi yoki intizom).",
    example: "Equally important is the fundamental role that parental guidance plays in instilling moral integrity.",
    exampleUz: "Shuningdek, ota-ona rahbarligining axloqiy poklikni shakllantirishda tutgan tub o'rni ham birdek muhimdir."
  },
  {
    id: 'chunk-body-4',
    phrase: "In addition to economic benefits, one must also consider the psychological impact of [Activity].",
    category: 'body_argument',
    categoryLabel: 'Body Paragraphs / Asosiy dalillar',
    function: 'Transitions between two distinct domains (e.g. financial to mental/emotional).',
    translationUz: "Iqtisodiy foydalardan tashqari, [Faoliyat]ning ruhiy va psixologik ta'sirini ham inobatga olish zarur.",
    beginnerTipUz: "Inshongizda moddiy tomondan tashqari insoniy/ruhiy tomonni ham ko'rsatish uchun ajoyib ko'prik jumla.",
    example: "In addition to career benefits, one must also consider the psychological impact of keeping a domestic pet at home.",
    exampleUz: "Karyera foydalaridan tashqari, uyda jonivor boqishning ruhiy ta'sirini ham inobatga olish zarur."
  },

  // =========================================================================
  // 4. PROVIDING EXAMPLES & EVIDENCE (Aniq misollar va dalillar)
  // =========================================================================
  {
    id: 'chunk-example-1',
    phrase: "To substantiate this assertion, consider the case of [Concrete Real-World Example].",
    category: 'exemplification',
    categoryLabel: 'Examples & Proof / Misol va dalillar',
    function: 'Formally introduces a concrete illustration to anchor an abstract concept.',
    translationUz: "Ushbu fikrni isbotlash uchun [Haqiqiy hayotiy misol] holatini ko'rib chiqaylik.",
    beginnerTipUz: "Abzas ichida misol keltirishda 'For example' so'zini boyitish uchun ishlatiladi.",
    example: "To substantiate this assertion, consider the case of tech leaders who gained mastery through hands-on project creation rather than formal tests.",
    exampleUz: "Ushbu fikrni isbotlash uchun rasmiy testlar emas, balki amaliy loyihalar yaratish orqali mahoratga erishgan texnologiya yetakchilarini ko'rib chiqaylik."
  },
  {
    id: 'chunk-example-2',
    phrase: "A prominent real-world illustration can be found in [Domain or Institution], where [Action and Result].",
    category: 'exemplification',
    categoryLabel: 'Examples & Proof / Misol va dalillar',
    function: 'Cites an institutional or societal reality as empirical proof.',
    translationUz: "Buning yaqqol hayotiy misolini [Soha yoki muassasa]da ko'rish mumkin, bu yerda [Harakat va natija].",
    beginnerTipUz: "Kompaniyalar, maktablar yoki davlat tizimlaridan misol keltirganda qulay.",
    example: "A prominent real-world illustration can be found in modern automotive design, where safety and environmental standards dictate engineering decisions.",
    exampleUz: "Buning yaqqol misolini zamonaviy avtomobilsozlikda ko'rish mumkin, bu yerda xavfsizlik va ekologiya talablari muhandislik qarorlarini belgilaydi."
  },
  {
    id: 'chunk-example-3',
    phrase: "Take, for instance, a situation where an individual [Specific Scenario].",
    category: 'exemplification',
    categoryLabel: 'Examples & Proof / Misol va dalillar',
    function: 'Engages the reader through a specific, relatable persona or narrative scenario.',
    translationUz: "Misol tariqasida bir inson [Aniq vaziyatga tushgan] holatni olaylik.",
    beginnerTipUz: "Boshlovchilar uchun eng oson misol boshlash usuli! Oddiy inson hayotidan bir misol to'qib aytib berish imkonini beradi.",
    example: "Take, for instance, a situation where an individual must make a quick ethical decision in a corporate setting without prior guidance.",
    exampleUz: "Misol tariqasida bir xodim kompaniyada oldindan tayyorlangan yo'riqnomasiz tezkor axloqiy qaror qabul qilishi kerak bo'lgan holatni olaylik."
  },

  // =========================================================================
  // 5. CONCESSION & CONTRAST (Qarshi fikr va taqqoslash)
  // =========================================================================
  {
    id: 'chunk-contrast-1',
    phrase: "Admittedly, some may contend that [Opponent's Claim]; nevertheless, [Refutation/Deeper Truth].",
    category: 'contrast_concession',
    categoryLabel: 'Concession & Contrast / Qarshi fikr va rad etish',
    function: 'Acknowledges the opposing argument fairly before dismantling it or showing its limitations.',
    translationUz: "To'g'ri, ba'zilar [Qarshi tomonning fikri] deb ta'kidlashlari mumkin; shunga qaramay, [Haqiqat/Javob].",
    beginnerTipUz: "Yuqori ball (Band 6+) olib keluvchi 'Admittedly... nevertheless...' qolipi. Raqib fikrini tan olib, keyin o'zingiznikini ustun qo'yasiz.",
    example: "Admittedly, some may contend that fashionable clothing boosts self-confidence; nevertheless, spending fortunes on fleeting trends remains financially reckless.",
    exampleUz: "To'g'ri, ba'zilar zamonaviy kiyimlar o'ziga ishonchni oshiradi deyishi mumkin; shunga qaramay, o'tkinchi urflarga katta boylik sarflash moliyaviy beparvolikdir."
  },
  {
    id: 'chunk-contrast-2',
    phrase: "While it is undeniably true that [Concession], this limitation is far outweighed by [Overwhelming Advantage].",
    category: 'contrast_concession',
    categoryLabel: 'Concession & Contrast / Qarshi fikr va rad etish',
    function: 'Employs an outweighing logic, validating a drawback while proving advantages dominate.',
    translationUz: "[Kamchilik] mutlaqo haqiqat bo'lsa-da, ushbu cheklov [Katta afzallik] oldida ancha arzimasdir.",
    beginnerTipUz: "'Outweighed by' (ustun kelmoq) iborasi inshoning xulosasida yoki qarshi fikr abzasida mukammal mantiq yaratadi.",
    example: "While it is undeniably true that university tuition represents a heavy expense, this cost is far outweighed by the lifelong return on human capital.",
    exampleUz: "Universitet kontrakte katta xarajat ekani rost bo'lsa-da, bu xarajat inson kapitalidan olinadigan bir umrlik foyda oldida ancha arzimasdir."
  },
  {
    id: 'chunk-contrast-3',
    phrase: "In sharp contrast to [Opposing Element], [Favored Element] delivers sustainable long-term value.",
    category: 'contrast_concession',
    categoryLabel: 'Concession & Contrast / Qarshi fikr va rad etish',
    function: 'Creates a stark, clean dichotomy highlighting the durability of the author’s choice.',
    translationUz: "[Qarama-qarshi omil]dan farqli o'laroq, [Ma'qul omil] uzoq muddatli barqaror qiymat baxsh etadi.",
    beginnerTipUz: "Ikkita tushunchani keskin taqqoslash uchun (masalan, kiyim sotib olish va sayohat xotiralari).",
    example: "In sharp contrast to short-lived material possessions, enriching travel experiences deliver sustainable long-term value.",
    exampleUz: "Qisqa umr ko'ruvchi moddiy narsalardan farqli o'laroq, inson dunyoqarashini boyituvchi sayohatlar uzoq muddatli barqaror qadr-qimmatga ega."
  },

  // =========================================================================
  // 6. CAUSE & EFFECT (Sabab va oqibat bog'lamalari)
  // =========================================================================
  {
    id: 'chunk-cause-1',
    phrase: "As a direct consequence of [Root Cause], individuals are empowered to [Desired Outcome].",
    category: 'cause_effect',
    categoryLabel: 'Cause & Effect / Sabab va oqibat',
    function: 'Establishes a transparent chain of causality linking action to empowerment.',
    translationUz: "[Asosiy sabab]ning to'g'ridan-to'g'ri oqibati o'laroq, insonlar [Kutilgan natija]ga erishish qudratiga ega bo'ladilar.",
    beginnerTipUz: "Oddiy 'Because of this' o'rniga 'As a direct consequence of...' ishlating. Gap tuzilishi darhol akademik tus oladi.",
    example: "As a direct consequence of mentorship and consistent feedback, young apprentices are empowered to excel in their chosen trade.",
    exampleUz: "Ustozlik va muntazam ko'makning to'g'ridan-to'g'ri oqibati o'laroq, yosh shogirdlar o'zlari tanlagan hunarda yuksak natijalarga erishadilar."
  },
  {
    id: 'chunk-cause-2',
    phrase: "This dynamic inevitably leads to [Result], thereby fostering greater [Broader Benefit].",
    category: 'cause_effect',
    categoryLabel: 'Cause & Effect / Sabab va oqibat',
    function: 'Demonstrates cascading effects where a local result builds into a broader societal benefit.',
    translationUz: "Ushbu jarayon muqarrar ravishda [Natija]ga olib keladi va shu tariqa yanada kengroq [Ijobiy ta'sir]ni kuchaytiradi.",
    beginnerTipUz: "Abzas oxirida fikringiz qanday ijobiy oqibatlarga yetaklashini ko'rsatish uchun foydalaning.",
    example: "This dynamic inevitably leads to enhanced mutual empathy, thereby fostering greater family cohesion.",
    exampleUz: "Ushbu jarayon muqarrar ravishda o'zaro hamdardlikni kuchaytiradi va shu tariqa oilaviy birdamlikni mustahkamlaydi."
  },
  {
    id: 'chunk-cause-3',
    phrase: "When [Condition Occurs], it paves the way for [Progressive Milestone].",
    category: 'cause_effect',
    categoryLabel: 'Cause & Effect / Sabab va oqibat',
    function: 'Expresses conditional progress with a forward-looking tone.',
    translationUz: "[Shart ro'y berganda], bu [Keyingi muhim yutuq] uchun zamin yaratadi.",
    beginnerTipUz: "'Paves the way for' (yo'l ochmoq / zamin yaratmoq) — inshoda rejalashtirilgan o'sishni ko'rsatish uchun juda boy ibora.",
    example: "When corporations prioritize ethical integrity over immediate profits, it paves the way for enduring brand loyalty.",
    exampleUz: "Kompaniyalar oniy foydadan ko'ra axloqiy prinsiplarni ustun qo'yganida, bu uzoq muddatli xaridorlar ishonchi uchun zamin yaratadi."
  },

  // =========================================================================
  // 7. CONCLUSION & TAKEAWAY (Xulosa va yakuniy tavsiya)
  // =========================================================================
  {
    id: 'chunk-conclusion-1',
    phrase: "In conclusion, taking all these arguments into consideration, it becomes apparent that [Final Reaffirmed Stance].",
    category: 'conclusion',
    categoryLabel: 'Conclusion & Impact / Xulosa chiqarish',
    function: 'Signals the start of the concluding paragraph with dignified closure.',
    translationUz: "Xulosa qilib aytganda, barcha keltirilgan dalillarni inobatga olgan holda shuni ta'kidlash mumkinki, [Yakuniy mustahkamlangan fikr].",
    beginnerTipUz: "Inshoning eng oxirgi abzasini boshlovchi eng klassik va xatosiz qolip. Kirishdagi fikringizni boshqacha so'zlar bilan qaytarasiz.",
    example: "In conclusion, taking all these arguments into consideration, it becomes apparent that university education remains an indispensable springboard to career distinction.",
    exampleUz: "Xulosa qilib aytganda, barcha dalillarni inobatga olgan holda, universitet ta'limi kasbiy yutuqlarga erishishda ajralmas tramplin bo'lib qolishi ayon bo'ladi."
  },
  {
    id: 'chunk-conclusion-2',
    phrase: "To sum up, while [Minor Counterpoint], the enduring advantages of [Chosen Path] remain beyond dispute.",
    category: 'conclusion',
    categoryLabel: 'Conclusion & Impact / Xulosa chiqarish',
    function: 'Summarizes the synthesis of viewpoints with an authoritative concluding finish.',
    translationUz: "Xulosalaydigan bo'lsak, [Kichik qarshi fikr] bo'lishiga qaramay, [Tanlangan yo'l]ning cheksiz afzalliklari shubhasizdir.",
    beginnerTipUz: "Xulosa abzasining 1- yoki 2-jumlasi sifatida mukammal xizmat qiladi.",
    example: "To sum up, while material goods provide immediate gratification, the enduring advantages of shared life experiences remain beyond dispute.",
    exampleUz: "Xulosalaydigan bo'lsak, moddiy buyumlar oniy quvonch bersa-da, birgalikda orttirilgan hayotiy tajribalarning cheksiz afzalliklari shubhasizdir."
  },
  {
    id: 'chunk-conclusion-3',
    phrase: "Ultimately, society as a whole stands to gain enormously if [Final Forward-Looking Recommendation].",
    category: 'conclusion',
    categoryLabel: 'Conclusion & Impact / Xulosa chiqarish',
    function: 'Delivers an inspiring, forward-looking concluding recommendation for the broader community.',
    translationUz: "Oxir-oqibat, agar [Yakuniy kelajak sari tavsiya] amalga oshirilsa, butun jamiyat bundan ulkan manfaat ko'radi.",
    beginnerTipUz: "Inshoni eng oxirgi va eng esda qolarli yakunlovchi jumlasi (Final Punchline). Examinerda ajoyib taassurot qoldiradi.",
    example: "Ultimately, society as a whole stands to gain enormously if educational systems integrate real-world practical apprenticeships into their core curricula.",
    exampleUz: "Oxir-oqibat, agar ta'lim tizimlari o'z o'quv dasturlariga real amaliy shogirdlikni joriy etsa, butun jamiyat bundan ulkan manfaat ko'radi."
  }
];

export function getChunksByCategory(category: string): WritingChunk[] {
  if (category === 'all') return ALL_USEFUL_WRITING_CHUNKS;
  return ALL_USEFUL_WRITING_CHUNKS.filter(c => c.category === category);
}
