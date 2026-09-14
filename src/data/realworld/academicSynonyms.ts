import { RealWorldVocab } from '../../types';

export interface AcademicSynonymEntry {
  synonym: string;
  definitionEn?: string;
  translationUz?: string;
}

export const ACADEMIC_SYNONYMS: Record<string, AcademicSynonymEntry> = {
  absurdly: { synonym: 'ridiculously', translationUz: 'kulgili darajada, ma\'nosiz' },
  adipose: { synonym: 'fatty tissue', translationUz: 'yog\' to\'qimalariga oid' },
  adversarial: { synonym: 'hostile', translationUz: 'raqobatli, qarshi kurashuvchi' },
  advocate: { synonym: 'supporter', translationUz: 'himoyachi, tarafdor' },
  alignment: { synonym: 'coordination', translationUz: 'muvofiqlashuv, bir qatorda turish' },
  anguish: { synonym: 'severe agony', translationUz: 'qattiq iztirob, azob' },
  annals: { synonym: 'historical chronicles', translationUz: 'tarixiy solnomalar' },
  annihilate: { synonym: 'destroy completely', translationUz: 'butunlay yo\'q qilmoq' },
  anomalous: { synonym: 'irregular', translationUz: 'g\'ayritabiiy, me\'yordan chetga chiqqan' },
  antiquarian: { synonym: 'historical collector', translationUz: 'qadimiy narsalar bilan shug\'ullanuvchi' },
  apprehension: { synonym: 'anxiety', translationUz: 'xavotir, qo\'rquv' },
  atrophy: { synonym: 'wasting away', translationUz: 'zaiflashish, atrofiyaga uchrash' },
  audacious: { synonym: 'boldly daring', translationUz: 'jasur, haddidan oshgan' },
  axiom: { synonym: 'accepted truth', translationUz: 'aksioma, isbotsiz qabul qilingan haqiqat' },
  bipedal: { synonym: 'two-legged', translationUz: 'ikki oyoqda harakatlanuvchi' },
  bonanza: { synonym: 'windfall', translationUz: 'katta boylik manbai, kutilmagan daromad' },
  carcass: { synonym: 'dead body', translationUz: 'hayvon jasadi, murda' },
  caricature: { synonym: 'exaggerated parody', translationUz: 'hajviy tasvir, karikatura' },
  coerce: { synonym: 'force', translationUz: 'majburlamoq, zo\'rlamoq' },
  cognitive: { synonym: 'mental', translationUz: 'aqliy, bilishga oid' },
  commodification: { synonym: 'commercialization', translationUz: 'tijoratlashtirish' },
  competency: { synonym: 'proficiency', translationUz: 'malaka, layoqat' },
  consensus: { synonym: 'general agreement', translationUz: 'yakdillik, umumiy kelishuv' },
  cosmopolitan: { synonym: 'multicultural', translationUz: 'dunyoqarashi keng, xalqaro' },
  counterfeit: { synonym: 'fake copy', translationUz: 'qalbaki, soxta' },
  countermeasure: { synonym: 'preventive action', translationUz: 'qarshi chora, profilaktika' },
  cruising: { synonym: 'gliding smoothly', translationUz: 'bir maromda harakatlanish' },
  dactyloscopy: { synonym: 'fingerprint study', translationUz: 'barmoq izlarini tahlil qilish' },
  debacle: { synonym: 'complete failure', translationUz: 'katta muvaffaqiyatsizlik, parokandalik' },
  decimate: { synonym: 'drastically reduce', translationUz: 'keskin kamaytirmoq, qirib tashlamoq' },
  declassify: { synonym: 'make public', translationUz: 'sirini ochmoq, maxfiylikdan chiqarmoq' },
  deficit: { synonym: 'shortfall', translationUz: 'kamomad, yetishmovchilik' },
  degrade: { synonym: 'deteriorate', translationUz: 'yemirilib bormoq, sifati tushmoq' },
  democratization: { synonym: 'popular access', translationUz: 'barchaga ochiq qilish' },
  demographic: { synonym: 'population statistics', translationUz: 'demografik ko\'rsatkich' },
  demolish: { synonym: 'tear down', translationUz: 'buzib tashlamoq' },
  deontological: { synonym: 'duty-based', translationUz: 'burch va axloq qonunlariga asoslangan' },
  deprivation: { synonym: 'deficiency', translationUz: 'yetishmovchilik, mahrumlik' },
  destabilize: { synonym: 'undermine', translationUz: 'barqarorlikni buzmoq' },
  deterministic: { synonym: 'predetermined', translationUz: 'oldindan belgilab qo\'yilgan' },
  dilation: { synonym: 'expansion', translationUz: 'kengayish, kattalashish' },
  disorienting: { synonym: 'confusing', translationUz: 'yo\'nalishni yo\'qotuvchi, chalkashtiruvchi' },
  disparate: { synonym: 'fundamentally different', translationUz: 'mutlaqo har xil, bir-biriga mos kelmaydigan' },
  disruption: { synonym: 'disturbance', translationUz: 'izdan chiqarish, to\'siq' },
  distort: { synonym: 'misrepresent', translationUz: 'haqiqatni buzib ko\'rsatmoq' },
  dysmorphia: { synonym: 'distorted body image', translationUz: 'tana ko\'rinishidan asossiz norozilik' },
  efficacy: { synonym: 'effectiveness', translationUz: 'samaradorlik, ta\'sir kuchi' },
  elusive: { synonym: 'hard to capture', translationUz: 'tutqich bermas, tushunishi qiyin' },
  epidemiologist: { synonym: 'disease researcher', translationUz: 'epidemiolog, kasallik tarqalishini o\'rganuvchi' },
  epistemological: { synonym: 'knowledge-theory', translationUz: 'bilish nazariyasiga oid' },
  ergonomic: { synonym: 'user-friendly', translationUz: 'qulay ishlashga moslashtirilgan' },
  erratic: { synonym: 'unpredictable', translationUz: 'noaniq, tartibsiz o\'zgaruvchan' },
  exuberance: { synonym: 'boundless energy', translationUz: 'cheksiz jo\'shqinlik, g\'ayrat' },
  feeder: { synonym: 'supplier branch', translationUz: 'ta\'minlovchi tarmoq' },
  flashpoint: { synonym: 'critical friction zone', translationUz: 'keskinlik o\'chog\'i' },
  foresight: { synonym: 'prudent anticipation', translationUz: 'oldindan ko\'ra bilish' },
  forgery: { synonym: 'fraudulent copy', translationUz: 'qalbakilashtirilgan nusxa' },
  friction: { synonym: 'social tension', translationUz: 'ijtimoiy kelishmovchilik' },
  genesis: { synonym: 'origin', translationUz: 'kelib chiqishi, boshlanishi' },
  glaring: { synonym: 'conspicuous', translationUz: 'yaqqol ko\'zga tashlanadigan' },
  gullibility: { synonym: 'credulity', translationUz: 'laqmalik, tez ishonuvchanlik' },
  harrowing: { synonym: 'extremely distressing', translationUz: 'yurakni ezuvchi, azobli' },
  hemorrhage: { synonym: 'massive drain', translationUz: 'katta yo\'qotish, behuda sarflanish' },
  humility: { synonym: 'modesty', translationUz: 'kamtarlik' },
  hypersensitivity: { synonym: 'excessive reactivity', translationUz: 'o\'ta yuqori sezgirlik' },
  immersion: { synonym: 'deep involvement', translationUz: 'chuqur sho\'ng\'ish' },
  immutable: { synonym: 'unchangeable', translationUz: 'o\'zgarmas, doimiy' },
  imperative: { synonym: 'essential requirement', translationUz: 'zaruriy talab, shart' },
  impunity: { synonym: 'freedom from punishment', translationUz: 'jazosizlik kafolati' },
  incessant: { synonym: 'never-ending', translationUz: 'to\'xtovsiz, tinimsiz' },
  indiscriminately: { synonym: 'without selection', translationUz: 'farqlamay, pala-partish' },
  inexhaustible: { synonym: 'limitless', translationUz: 'tugab bitmas, cheksiz' },
  insidious: { synonym: 'gradually harmful', translationUz: 'sekin va makkorlik bilan zararlaydigan' },
  intricate: { synonym: 'highly complex', translationUz: 'juda murakkab, chigal' },
  invasive: { synonym: 'intrusive', translationUz: 'tajovuzkor, ichkariga suqilib kiruvchi' },
  irreplaceable: { synonym: 'invaluable', translationUz: 'o\'rni bosilmas, bebaho' },
  juggernaut: { synonym: 'overwhelming force', translationUz: 'to\'xtatib bo\'lmas kuchli tizim' },
  languish: { synonym: 'suffer neglect', translationUz: 'harakatsiz zaiflashmoq' },
  lucrative: { synonym: 'highly profitable', translationUz: 'katta daromad keltiruvchi' },
  lurid: { synonym: 'sensationalist', translationUz: 'vahimali, shov-shuvli' },
  marginalized: { synonym: 'disadvantaged', translationUz: 'chetga surib qo\'yilgan, e\'tibordan chetda' },
  metabolize: { synonym: 'chemically process', translationUz: 'moddalar almashinuvida qayta ishlamoq' },
  modality: { synonym: 'methodical form', translationUz: 'amal qilish shakli, usuli' },
  multiplier: { synonym: 'amplifying factor', translationUz: 'ko\'paytiruvchi omil, vosita' },
  nadir: { synonym: 'lowest point', translationUz: 'eng pastki nuqta, inqiroz cho\'qqisi' },
  necrosis: { synonym: 'tissue death', translationUz: 'to\'qimalarning nobud bo\'lishi' },
  notoriously: { synonym: 'infamously', translationUz: 'yomon nom bilan tanilgan holda' },
  nuanced: { synonym: 'subtly detailed', translationUz: 'nozik farqlarga boy' },
  obsolete: { synonym: 'outdated', translationUz: 'eskirgan, muomaladan chiqqan' },
  occult: { synonym: 'mysterious hidden', translationUz: 'sirli, maxfiy' },
  omnipresent: { synonym: 'everywhere present', translationUz: 'hamma joyda mavjud' },
  orchestrate: { synonym: 'coordinate skillfully', translationUz: 'ustalik bilan rejalashtirmoq' },
  paradigm: { synonym: 'conceptual model', translationUz: 'ilmiy qolipli qarash, paradigma' },
  paralyze: { synonym: 'immobilize', translationUz: 'falaj qilmoq, harakatdan to\'xtatmoq' },
  paramount: { synonym: 'of supreme importance', translationUz: 'eng muhim, ustuvor' },
  paternalism: { synonym: 'protective control', translationUz: 'otaliq nazorati' },
  pedagogical: { synonym: 'educational', translationUz: 'pedagogik, ta\'limiy' },
  permeate: { synonym: 'spread throughout', translationUz: 'singib ketmoq, tarqalmoq' },
  pivot: { synonym: 'shift focus', translationUz: 'yo\'nalishni tezkor o\'zgartirmoq' },
  plausible: { synonym: 'credible', translationUz: 'ishonchli, aqlga to\'g\'ri keladigan' },
  polarization: { synonym: 'sharp division', translationUz: 'qarama-qarshi qutblarga bo\'linish' },
  porcine: { synonym: 'swine-related', translationUz: 'cho\'chqaga oid' },
  predatory: { synonym: 'exploitative', translationUz: 'yirtqichona, ekspluatatsiya qiluvchi' },
  preeminence: { synonym: 'superiority', translationUz: 'ustunlik, peshqadamlik' },
  premium: { synonym: 'high-tier value', translationUz: 'yuqori darajali, qo\'shimcha to\'lov' },
  prevalent: { synonym: 'widespread', translationUz: 'keng tarqalgan' },
  probabilistic: { synonym: 'likelihood-based', translationUz: 'ehtimollikka tayangan' },
  procrastination: { synonym: 'habitual delay', translationUz: 'ishlarni keyinga surish odati' },
  prohibit: { synonym: 'strictly forbid', translationUz: 'qat\'iyan man etmoq' },
  protocol: { synonym: 'official procedure', translationUz: 'rasmiy tartib-qoida, bayonnoma' },
  proximity: { synonym: 'nearness', translationUz: 'yaqinlik, yonma-yonlik' },
  purported: { synonym: 'alleged', translationUz: 'da\'vo qilingan, taxminiy' },
  rational: { synonym: 'logical', translationUz: 'mantiqiy, asosli' },
  rationing: { synonym: 'controlled allocation', translationUz: 'cheklangan me\'yorda taqsimlash' },
  reassurance: { synonym: 'restoration of confidence', translationUz: 'tinchlantirish, dalda berish' },
  reckless: { synonym: 'heedless of risk', translationUz: 'o\'ylamasdan qilingan, beparvo' },
  relegate: { synonym: 'demote', translationUz: 'quyi mavqega tushirmoq' },
  repository: { synonym: 'storage archive', translationUz: 'ma\'lumotlar ombori, xazina' },
  residue: { synonym: 'remnant', translationUz: 'qoldiq' },
  resilience: { synonym: 'elastic recovery', translationUz: 'bardoshlilik, tiklanuvchanlik' },
  resilient: { synonym: 'adaptable and strong', translationUz: 'egilmas, tez moslashuvchan' },
  sanctuary: { synonym: 'safe haven', translationUz: 'panohgoh, qo\'riqxona' },
  scalpel: { synonym: 'surgical blade', translationUz: 'jarrohlik pichog\'i' },
  scrutiny: { synonym: 'close examination', translationUz: 'sinchkovlik bilan tekshirish' },
  sedentary: { synonym: 'inactive', translationUz: 'kamharakat, o\'tirib ishlaydigan' },
  sediment: { synonym: 'settled matter', translationUz: 'cho\'kindi jinslar' },
  segregate: { synonym: 'isolate', translationUz: 'alohida ajratmoq' },
  seminal: { synonym: 'groundbreaking', translationUz: 'asos soluvchi, tub burilish yasagan' },
  skeptical: { synonym: 'doubtful', translationUz: 'shubhalanuvchi' },
  slash: { synonym: 'drastically cut', translationUz: 'keskin qisqartirmoq' },
  sovereignty: { synonym: 'supreme independence', translationUz: 'mustaqillik, suverenitet' },
  specimen: { synonym: 'representative sample', translationUz: 'namuna, nusxa' },
  sprawl: { synonym: 'uncontrolled expansion', translationUz: 'nazoratsiz kengayish' },
  spurred: { synonym: 'stimulated', translationUz: 'turtki bergan, rag\'batlantirgan' },
  staple: { synonym: 'fundamental item', translationUz: 'asosiy mahsulot yoki omil' },
  stewardship: { synonym: 'responsible custody', translationUz: 'mas\'uliyatli boshqaruv' },
  stigma: { synonym: 'mark of disgrace', translationUz: 'qoralash tamg\'asi, uyat belgisi' },
  stringent: { synonym: 'strictly enforced', translationUz: 'o\'ta qat\'iy' },
  succumb: { synonym: 'yield under pressure', translationUz: 'taslim bo\'lmoq, yengilmoq' },
  superstition: { synonym: 'irrational belief', translationUz: 'xurofot, irim-sirim' },
  surplus: { synonym: 'excess quantity', translationUz: 'ortiqcha miqdor' },
  tangible: { synonym: 'touchable', translationUz: 'aniq, ushlab his qilsa bo\'ladigan' },
  threshold: { synonym: 'boundary limit', translationUz: 'chegara, ostonaviy miqdor' },
  throbbing: { synonym: 'pulsing rhythmically', translationUz: 'lo\'qillab urib turuvchi' },
  thwart: { synonym: 'prevent successfully', translationUz: 'rejasini barbod qilmoq' },
  ubiquitous: { synonym: 'omnipresent', translationUz: 'hamma joyda uchraydigan' },
  unflattering: { synonym: 'unfavorable', translationUz: 'chiroyli ko\'rsatmaydigan, tanqidiy' },
  unprecedented: { synonym: 'never before seen', translationUz: 'misli ko\'rilmagan' },
  utilitarian: { synonym: 'practical and useful', translationUz: 'amaliy foydaga qaratilgan' },
  utopian: { synonym: 'idealistic visionary', translationUz: 'xayoliy mukammal, utopik' },
  visceral: { synonym: 'instinctual internal', translationUz: 'ichki his-tuyg\'uga oid, chuqur' }
};

/**
 * Ensures ANY target vocabulary word has a valid, meaningful contextual synonym.
 * Priority:
 * 1. Word's own `vocab.synonym` (if set)
 * 2. Lookup in ACADEMIC_SYNONYMS
 * 3. Intelligent fallback extracted from definition
 */
export function getSynonymForVocab(vocab: RealWorldVocab): {
  word: string;
  synonym: string;
  definitionEn: string;
  translationUz: string;
} {
  if (vocab.synonym && vocab.synonym.trim().length > 0) {
    return {
      word: vocab.word,
      synonym: vocab.synonym.trim(),
      definitionEn: vocab.definitionEn,
      translationUz: vocab.translationUz
    };
  }

  const key = vocab.word.toLowerCase().trim();
  const entry = ACADEMIC_SYNONYMS[key];
  if (entry && entry.synonym) {
    return {
      word: vocab.word,
      synonym: entry.synonym,
      definitionEn: vocab.definitionEn,
      translationUz: entry.translationUz || vocab.translationUz
    };
  }

  // Fallback if not directly in dictionary
  const rawDef = vocab.definitionEn || '';
  const cleanDef = rawDef
    .replace(/^(to\s+|the\s+|a\s+|an\s+|feeling\s+|relating to(\s+the)?\s+|used\s+to\s+|having\s+|condition of\s+)/i, '')
    .split(/[,.;]/)[0]
    .trim();

  const words = cleanDef.split(/\s+/);
  const fallbackSynonym = words.length > 0 && words.length <= 4 
    ? words.join(' ') 
    : vocab.translationUz.split(/[,;]/)[0].trim();

  return {
    word: vocab.word,
    synonym: fallbackSynonym || 'contextual equivalent',
    definitionEn: vocab.definitionEn,
    translationUz: vocab.translationUz
  };
}
