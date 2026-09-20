import React, { useState } from 'react';
import { 
  X, Printer, Copy, Check, FileText, Building, 
  User, Calendar, ShieldCheck, QrCode, SlidersHorizontal, Save, Sparkles,
  Phone, Clock, AlertTriangle, BookOpen, Undo2, Layers, CheckCircle2
} from 'lucide-react';
import { StudentPaymentPlan, ContractCustomClauses } from '../../types';

interface StudentContractModalProps {
  isOpen: boolean;
  plan: StudentPaymentPlan;
  onClose: () => void;
  onUpdatePlan?: (updatedPlan: StudentPaymentPlan) => void;
}

export const DEFAULT_CONTRACT_CLAUSES: ContractCustomClauses = {
  daily_study_minutes: 40,
  student_obligations: `1. Har kuni «Premier School LMS» platformasiga shaxsiy akkaunt orqali kirish va kamida 30-45 daqiqa davomida kunlik o'quv trenajyorlarida mustaqil shug'ullanish;
2. «4000 Essential English Words» moduli bo'yicha belgilangan yangi so'zlarni, ularning kontekstual matnlari, talaffuzi va audio namunalarini to'liq o'zlashtirish;
3. «Tactics for Listening» audio trenajyorlarida berilgan tinglab tushunish, diktant va audio topshiriqlarni sifatli va to'liq yakunlash;
4. O'qituvchi tomonidan platformaga yuklangan barcha grammatik mashqlar va uy vazifalarini belgilangan muddatda kechiktirmasdan topshirish;
5. O'quv intizomiga, platformadagi kunlik faollik zanjiriga (Streak) va dars jadvaliga qat'iy rioya etish.`,
  parent_obligations: `1. Ta'lim oluvchining ota-onasi (qonuniy vakili) farzandining har kuni platformaga kirayotganligi va vaqt sarflayotganligini (telemetriya tahlilini) muntazam nazorat qilib boradi;
2. Ota-ona har hafta yakunida platforma monitoringi yoki o'quv hisobotlari orqali farzandining o'zlashtirishini ko'zdan kechiradi va o'rganish jarayonini ko'rganligini tasdiqlab boradi;
3. Ota-ona farzandining uyda platforma trenajyorlarida uzluksiz shug'ullanishi uchun zarur texnik vosita (kompyuter/planshet/smartfon) hamda barqaror internet tarmog'i bilan ta'minlaydi;
4. O'quvchining darslarga kechikishi yoki sababsiz qatnashmasligi holatlari yuzasidan o'quv markazi ma'muriyatini zudlik bilan xabardor qiladi.`,
  disciplinary_terms: `1. Ta'lim oluvchi uzrli sababsiz ketma-ket 3 (uch) kun davomida yoki bir oy davomida jami 5 kundan ortiq platformaga kirmasa, so'zlar va audiolarni o'zlashtirmasa yoki uy vazifalarini bajarmasa, ma'muriyat tomonidan qat'iy ogohlantiriladi;
2. Ta'lim oluvchi tomonidan kunlik platforma darslari bajarilmagan yoki ota-ona tomonidan nazorat va tasdiq amalga oshirilmagan holatlarda, o'quvchining akademik natijasining pasayishi yoki kutilgan CEFR/IELTS darajasiga erisha olmasligi uchun «Premier School Academy» hech qanday yuridik yoki moddiy javobgarlikni o'z zimmasiga olmaydi;
3. Qoidabuzarliklar muntazam takrorlangan taqdirda, markaz ma'muriyati o'quvchini kursdan chetlatish yoki ushbu bosqichni to'liq to'lov asosida qaytadan o'qishga qoldirish huquqiga ega.`,
  custom_terms: `O'quv kursi yakunida yakuniy test va 4000 Essential Words hamda Tactics for Listening bo'yicha yakuniy imtihon olinadi. Imtihondan 80% dan yuqori ball to'plagan o'quvchiga rasmiy sertifikat taqdim etiladi.`
};

const PRESET_TEMPLATES = {
  standard: {
    name: "Standart Shablon (Premier General English)",
    minutes: 40,
    student: DEFAULT_CONTRACT_CLAUSES.student_obligations,
    parent: DEFAULT_CONTRACT_CLAUSES.parent_obligations,
    disciplinary: DEFAULT_CONTRACT_CLAUSES.disciplinary_terms,
    custom: DEFAULT_CONTRACT_CLAUSES.custom_terms
  },
  ielts_intensive: {
    name: "Qat'iy Intizom Shablon (IELTS & TOEFL Intensive)",
    minutes: 50,
    student: `1. Har kuni «Premier School LMS» platformasiga kirib kamida 50-60 daqiqa dars qilish;
2. Har bir unit bo'yicha 4000 Words so'zlarini 95%+ aniqlikda topshirish;
3. Tactics for Listening Developing va Expanding testlarini to'liq 100% bajarish;
4. Har hafta kamida 2 ta IELTS Writing inshosini tahlil uchun topshirish;
5. Ketma-ket kunlik o'rganish streak zanjirini uzmaslik.`,
    parent: `1. Ota-ona farzandining kunlik 50 daqiqa platformada bo'lishini va barcha uy vazifalarini topshirganligini har kuni shaxsan nazorat qiladi;
2. Ota-ona haftalik tahliliy grafikni ko'rib, tasdiqlash bildirishnomasini beradi;
3. Farzandining darslarga to'liq tayyorgarlik ko'rishiga xalaqit beruvchi omillarni bartaraf etadi.`,
    disciplinary: `1. O'quvchi uzrli sababsiz 2 kun ketma-ket darsga yoki platformaga kirmasa, ota-onaga rasmiy xabarnoma yuboriladi;
2. Topshiriqlar muntazam bajarilmasa, o'quvchi IELTS mock imtihoniga kiritilmaydi va markaz kafolatlangan band-score natijasi uchun javobgarlikni o'z zimmasidan soqit qiladi;
3. O'zlashtirish 70% dan past bo'lgan taqdirda bosqich to'liq qaytariladi.`,
    custom: `IELTS/CEFR xalqaro imtihoniga ro'yxatdan o'tishdan oldin markazning kamida 3 ta rasmiy sinov imtihonidan o'tish majburiydir.`
  },
  kids_teens: {
    name: "Boshlang'ich va O'smirlar (Ota-ona to'liq nazorati bilan)",
    minutes: 30,
    student: `1. Har kuni 30 daqiqa platformaga kirib audio so'zlar va bolalar hikoyalarini o'qish;
2. Audio diktant va o'yinli mashqlarni o'z vaqtida yakunlash;
3. O'qituvchi bergan topshiriqlarni mustaqil bajarishga harakat qilish.`,
    parent: `1. Ota-ona farzandi bilan birgalikda har kuni platformadagi mashqlarni ko'zdan kechiradi;
2. Farzandining audio va so'z yodlash jarayonini har kuni tasdiqlab boradi;
3. Platforma ilovasi o'rnatilgan gadjetdan unumli foydalanishini ta'minlaydi.`,
    disciplinary: `1. O'quvchi sababsiz dars qoldirsa, mavzularni o'zlashtirish kechikishi uchun markaz mas'ul bo'lmaydi;
2. Ota-onaning muntazam e'tiborsizligi bolaning ingliz tiliga bo'lgan qiziqishiga salbiy ta'sir ko'rsatganda guruh rahbari bilan maxsus suhbat o'tkaziladi.`,
    custom: `Har chorak yakunida ota-onalar ishtirokida ochiq dars va bolalar nutqi namoyishi o'tkaziladi.`
  }
};

export const StudentContractModal: React.FC<StudentContractModalProps> = ({
  isOpen,
  plan,
  onClose,
  onUpdatePlan,
}) => {
  if (!isOpen) return null;

  // Derive initial values
  const defaultContractNo = plan.contract_number || `PS-2026/09-${plan.id.replace(/\D/g, '').slice(-3).padStart(3, '0')}`;
  const defaultContractDate = plan.contract_date || plan.created_at || new Date().toISOString().split('T')[0];
  const defaultPassport = plan.passport_id || 'AB ' + Math.floor(1000000 + Math.random() * 9000000);
  const defaultParent = plan.parent_name || '';
  const defaultParentPhone = plan.parent_phone || '';
  const defaultAgreedFee = plan.agreed_fee || plan.base_monthly_fee;

  const existingClauses = plan.contract_custom_clauses || DEFAULT_CONTRACT_CLAUSES;

  // Active View Tab: 'document' vs 'editor'
  const [activeTab, setActiveTab] = useState<'document' | 'editor'>('document');

  // Editable parameters
  const [contractNumber, setContractNumber] = useState<string>(defaultContractNo);
  const [contractDate, setContractDate] = useState<string>(defaultContractDate);
  const [passportId, setPassportId] = useState<string>(defaultPassport);
  const [parentName, setParentName] = useState<string>(defaultParent);
  const [parentPhone, setParentPhone] = useState<string>(defaultParentPhone);
  const [agreedFee, setAgreedFee] = useState<number>(defaultAgreedFee);

  // Editable Clauses
  const [dailyMinutes, setDailyMinutes] = useState<number>(existingClauses.daily_study_minutes || 40);
  const [studentObligations, setStudentObligations] = useState<string>(existingClauses.student_obligations || DEFAULT_CONTRACT_CLAUSES.student_obligations);
  const [parentObligations, setParentObligations] = useState<string>(existingClauses.parent_obligations || DEFAULT_CONTRACT_CLAUSES.parent_obligations);
  const [disciplinaryTerms, setDisciplinaryTerms] = useState<string>(existingClauses.disciplinary_terms || DEFAULT_CONTRACT_CLAUSES.disciplinary_terms);
  const [customTerms, setCustomTerms] = useState<string>(existingClauses.custom_terms || DEFAULT_CONTRACT_CLAUSES.custom_terms || '');

  const [copied, setCopied] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Format currency
  const formatUZS = (val: number) => {
    return val.toLocaleString('uz-UZ') + " so'm";
  };

  const handlePrint = () => {
    setActiveTab('document');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const applyPreset = (presetKey: keyof typeof PRESET_TEMPLATES) => {
    const preset = PRESET_TEMPLATES[presetKey];
    setDailyMinutes(preset.minutes);
    setStudentObligations(preset.student);
    setParentObligations(preset.parent);
    setDisciplinaryTerms(preset.disciplinary);
    setCustomTerms(preset.custom || '');
  };

  const handleResetToDefaults = () => {
    setDailyMinutes(DEFAULT_CONTRACT_CLAUSES.daily_study_minutes);
    setStudentObligations(DEFAULT_CONTRACT_CLAUSES.student_obligations);
    setParentObligations(DEFAULT_CONTRACT_CLAUSES.parent_obligations);
    setDisciplinaryTerms(DEFAULT_CONTRACT_CLAUSES.disciplinary_terms);
    setCustomTerms(DEFAULT_CONTRACT_CLAUSES.custom_terms || '');
  };

  const handleSaveChanges = () => {
    const installmentsCount = plan.schedules.length || 3;
    const newTotal = agreedFee * installmentsCount;
    const discountAmount = Math.round((newTotal * plan.discount_percent) / 100);
    const finalTotal = newTotal - discountAmount;
    const installmentAmount = Math.round(finalTotal / installmentsCount);

    const updatedSchedules = plan.schedules.map((sch) => ({
      ...sch,
      amount: sch.status === 'paid' ? sch.amount : installmentAmount,
    }));

    const newPaidAmount = updatedSchedules.filter(s => s.status === 'paid').reduce((a, b) => a + b.amount, 0);
    const newRemaining = Math.max(0, finalTotal - newPaidAmount);

    const updatedPlan: StudentPaymentPlan = {
      ...plan,
      base_monthly_fee: agreedFee,
      agreed_fee: agreedFee,
      total_course_fee: newTotal,
      final_total_fee: finalTotal,
      paid_amount: newPaidAmount,
      remaining_amount: newRemaining,
      contract_number: contractNumber,
      contract_date: contractDate,
      passport_id: passportId,
      parent_name: parentName,
      parent_phone: parentPhone,
      schedules: updatedSchedules,
      contract_custom_clauses: {
        daily_study_minutes: dailyMinutes,
        student_obligations: studentObligations,
        parent_obligations: parentObligations,
        disciplinary_terms: disciplinaryTerms,
        custom_terms: customTerms
      }
    };

    if (onUpdatePlan) {
      onUpdatePlan(updatedPlan);
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setActiveTab('document');
    }, 1200);
  };

  const handleCopyContractText = async () => {
    const fullText = `TA'LIM XIZMATLARI VA «PREMIER SCHOOL LMS» PLATFORMASIDAN FOYDALANISH TO'G'RISIDA SHARTNOMA № ${contractNumber}
Sana: ${contractDate}
Ijrochi: "PREMIER SCHOOL ACADEMY" NNTM (STIR: 308192841)
Buyurtmachi: ${plan.student_name} (${plan.group_name})
Telefon: ${plan.student_phone || plan.student_email}
Pasport/ID: ${passportId}
${parentName ? `Ota-onasi: ${parentName} (${parentPhone || 'tel kiritilmagan'})` : ''}
Kelishilgan oylik to'lov: ${formatUZS(agreedFee)}
Umumiy kurs to'lovi: ${formatUZS(plan.final_total_fee)}
Kurs: ${plan.course_title}

KUNLIK MAJBURIYATLAR:
- Har kuni kamida ${dailyMinutes} daqiqa platformada shug'ullanish.
- 4000 Words, Tactics for Listening va uy vazifalarini to'liq bajarish.
- Ota-ona tomonidan har hafta monitoring qilinishi va tasdiqlanishi shart.`;

    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  // Convert raw obligations string into formatted paragraph or list items
  const renderFormattedList = (text: string) => {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    return (
      <div className="space-y-1 text-slate-700 text-justify">
        {lines.map((line, idx) => (
          <p key={idx} className="leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      {/* Printable CSS targeting exact A4 document output */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body * {
              visibility: hidden !important;
            }
            #printable-contract, #printable-contract * {
              visibility: visible !important;
            }
            #printable-contract {
              position: absolute !important;
              left: 0 !important;
              top: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 20mm !important;
              box-shadow: none !important;
              border: none !important;
              font-size: 11pt !important;
              line-height: 1.45 !important;
              background: #fff !important;
            }
            .no-print {
              display: none !important;
            }
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
          }
        `
      }} />

      <div className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        
        {/* Top Action Bar (Non-printable) */}
        <div className="no-print p-4 sm:px-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-inner">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-sm sm:text-base tracking-tight">
                  Rasmiy Ta'lim Shartnomasi
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 rounded-full">
                  № {contractNumber}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {plan.student_name} • {plan.group_name} • {formatUZS(agreedFee)}/oy
              </p>
            </div>
          </div>

          {/* Tab Switcher & Action Buttons */}
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setActiveTab('document')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'document'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Hujjatni Ko'rish</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'editor'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Bandlarni Tahrirlash</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopyContractText}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              title="Shartnoma ma'lumotlarini nusxalash"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Nusxalandi!' : 'Nusxa'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish (PDF)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TAB 2: ADVANCED CLAUSES & CONDITIONS EDITOR */}
        {activeTab === 'editor' && (
          <div className="no-print p-6 bg-slate-50 border-b border-slate-200 overflow-y-auto max-h-[85vh] space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div>
                <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-indigo-600" />
                  Shartnoma Moddalari va Shartlarini Tahrirlash
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ushbu o'zgarishlar rasmiy shartnoma matnida, o'quvchi va ota-onaga beriladigan nusxada to'liq aks etadi.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetToDefaults}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                  <span>Standartga Qaytarish</span>
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  {savedSuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
                  <span>{savedSuccess ? 'Muvaffaqiyatli saqlandi!' : 'Saqlash va Yangilash'}</span>
                </button>
              </div>
            </div>

            {/* Ready-made Template Presets */}
            <div className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-indigo-950 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Tezkor Tayyor Shablonlar (Presets):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {Object.entries(PRESET_TEMPLATES).map(([key, template]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => applyPreset(key as any)}
                    className="p-3 bg-white hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-300 rounded-xl text-left transition cursor-pointer shadow-2xs group"
                  >
                    <p className="font-extrabold text-xs text-slate-900 group-hover:text-indigo-600">
                      {template.name}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-500" />
                      Kunlik: kamida {template.minutes} daqiqa
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* General Parameters & Contacts */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
                1. Shartnoma Asosiy Rekvizitlari va Aloqa
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Shartnoma Raqami:
                  </label>
                  <input
                    type="text"
                    value={contractNumber}
                    onChange={(e) => setContractNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs font-bold text-slate-900 outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Tuzilgan Sana:
                  </label>
                  <input
                    type="date"
                    value={contractDate}
                    onChange={(e) => setContractDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Kelishilgan Oylik To'lov (so'm):
                  </label>
                  <input
                    type="number"
                    step="10000"
                    value={agreedFee}
                    onChange={(e) => setAgreedFee(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-black text-indigo-700 text-xs outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    O'quvchi Pasport / ID №:
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: AB 1234567"
                    value={passportId}
                    onChange={(e) => setPassportId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900 text-xs outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Ota-onasi / Vasiy F.I.Sh.:
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: Karimova Dilnoza Botirovna"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Ota-onasi Telefon Raqami:
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: +998 90 123 45 67"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Clause 1: Daily Study Obligations */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center">
                    1
                  </div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                    O'quvchining Kunlik Platforma Majburiyatlari (3-Modda)
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-semibold">Kunlik talab:</span>
                  <div className="flex items-center gap-1 bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-200">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <input
                      type="number"
                      value={dailyMinutes}
                      onChange={(e) => setDailyMinutes(Math.max(10, parseInt(e.target.value) || 30))}
                      className="w-12 bg-transparent text-xs font-black text-indigo-900 text-center outline-hidden"
                    />
                    <span className="text-[11px] font-bold text-indigo-700">daqiqa</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  O'quvchi har kuni platformada bajarishi shart bo'lgan topshiriqlar ro'yxati (4000 Words, Listening, uy vazifalari va h.k.):
                </label>
                <textarea
                  rows={5}
                  value={studentObligations}
                  onChange={(e) => setStudentObligations(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 font-mono leading-relaxed outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Clause 2: Parent Oversight & Weekly Confirmation */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center">
                  2
                </div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                  Ota-onaning Nazorati va Haftalik Ko'rganligini Tasdiqlash Majburiyati (4-Modda)
                </h4>
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  Ota-ona zimmasiga yuklanadigan muntazam monitoring, tasdiqlash va texnik ta'minot shartlari:
                </label>
                <textarea
                  rows={4}
                  value={parentObligations}
                  onChange={(e) => setParentObligations(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 font-mono leading-relaxed outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Clause 3: Disciplinary terms & Outcome Disclaimer */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center">
                  3
                </div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                  Intizom, Javobgarlik va Natija Shartlari (5-Modda)
                </h4>
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  Ketma-ket 3 kun kirmaslik, uy vazifalarni bajarmaslik holatida markaz natija uchun javobgar bo'lmasligi va intizom choralari:
                </label>
                <textarea
                  rows={4}
                  value={disciplinaryTerms}
                  onChange={(e) => setDisciplinaryTerms(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 font-mono leading-relaxed outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Clause 4: Custom specific conditions */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center">
                  4
                </div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                  Qo'shimcha Maxsus Shartlar va Yakuniy Imtihon (Ixtiyoriy)
                </h4>
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  Ushbu talaba yoki guruh uchun maxsus individual kelishuv bandi:
                </label>
                <textarea
                  rows={2}
                  placeholder="Masalan: Kurs yakunida so'zlar va audiolardan imtihon olinadi..."
                  value={customTerms}
                  onChange={(e) => setCustomTerms(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 font-mono leading-relaxed outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Bottom Save Bar */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('document')}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-bold cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={handleSaveChanges}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl transition flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>O'zgarishlarni Saqlash va Shartnomani Yangilash</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 1: FORMAL PRINTABLE CONTRACT BODY */}
        {activeTab === 'document' && (
          <div className="overflow-y-auto p-4 sm:p-8 bg-slate-100 flex justify-center">
            <div 
              id="printable-contract"
              className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-900 text-xs sm:text-[13px] leading-relaxed space-y-6"
            >
              {/* Document Letterhead */}
              <div className="border-b-2 border-slate-900 pb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-700 text-white font-black flex items-center justify-center text-2xl shadow-xs">
                      P
                    </div>
                    <div>
                      <h1 className="font-black text-xl text-slate-950 tracking-tight leading-none">
                        PREMIER SCHOOL ACADEMY
                      </h1>
                      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-1">
                        Nodavlat Ta'lim Muassasasi • Tashkent English & IELTS Academy
                      </p>
                    </div>
                  </div>

                  <div className="text-right text-[11px] text-slate-500 font-mono">
                    <p className="font-black text-slate-900 text-xs">№ {contractNumber}</p>
                    <p>Sana: {contractDate}</p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap justify-between text-[10px] text-slate-500">
                  <span>Manzil: Toshkent sh., Mirobod t., Oybek ko'chasi 14</span>
                  <span>STIR: 308 192 841 • Tel: +998 71 200 00 00</span>
                  <span>Litsenziya №: NAS-UZ-2024-819</span>
                </div>
              </div>

              {/* Contract Title */}
              <div className="text-center py-2">
                <h2 className="font-black text-sm sm:text-base text-slate-950 uppercase tracking-tight">
                  TA'LIM XIZMATLARI VA «PREMIER SCHOOL LMS» RAQAMLI PLATFORMASIDAN FOYDALANISH BO'YICHA SHARTNOMA
                </h2>
                <p className="text-xs text-slate-600 mt-1 italic">
                  (O'quv markazida ta'lim olish, platforma trenajyorlaridan kunlik foydalanish va to'lov tartibi to'g'risida)
                </p>
              </div>

              {/* Preamble */}
              <div className="text-justify leading-relaxed">
                <p>
                  Bir tomondan, <strong>«PREMIER SCHOOL ACADEMY» NTM</strong> (keyingi o'rinlarda <em>«Ijrochi»</em> deb yuritiladi), 
                  Ustav asosida faoliyat ko'rsatuvchi Bosh direktor <strong>Nodirjon Safoyev</strong> timsolida, va ikkinchi tomondan 
                  fuqaro <strong>{plan.student_name}</strong> (Pasport/ID: <strong>{passportId}</strong>, Telefon: <strong>{plan.student_phone || plan.student_email}</strong>) 
                  {parentName ? <span> hamda uning qonuniy vakili (ota-onasi) <strong>{parentName}</strong> {parentPhone ? `(Tel: ${parentPhone})` : ''}</span> : ''} (keyingi o'rinlarda <em>«Ta'lim oluvchi»</em> deb yuritiladi), 
                  birgalikda «Tomonlar» deb ataluvchilar, ushbu shartnomani quyidagilar haqida tuzdilar:
                </p>
              </div>

              {/* 1. SHARTNOMA PREDMETI */}
              <div className="space-y-2">
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                  1. SHARTNOMA PREDMETI (O'QUV VA PLATFORMA IMKONIYATLARI)
                </h3>
                <p className="text-justify">
                  <strong>1.1.</strong> Ijrochi Ta'lim oluvchini <strong>«{plan.course_title}»</strong> kursi bo'yicha 
                  (Guruh: <strong>{plan.group_name}</strong>) belgilangan o'quv dasturi asosida o'qitish hamda o'quv markazining 
                  yuqori texnologik <strong>«Premier School LMS»</strong> raqamli ta'lim platformasidan to'liq va uzluksiz foydalanish 
                  huquqini taqdim etish majburiyatini oladi.
                </p>
                <p className="text-justify">
                  <strong>1.2.</strong> Ta'lim oluvchi ta'lim jarayonida «Premier School LMS» platformasining quyidagi rasmiy modullaridan 
                  shaxsiy akkaunt orqali cheklovlarsiz foydalanadi:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li><strong>4000 Essential English Words:</strong> Har bir unit bo'yicha audio talaffuz, flashcards va leksik kontekstlar;</li>
                  <li><strong>Tactics for Listening:</strong> Tinglab tushunish, diktant va audio-trenajyor mashqlari;</li>
                  <li><strong>Stories for Reproduction & Real World Reading:</strong> Xalqaro matnlar mutolaasi, grammatik tahlil va savol-javoblar;</li>
                  <li><strong>Safoyev AI Voice Clone:</strong> Sun'iy intellekt asosida jonli nutq muloqoti, talaffuz tezligi va sofligini baholash;</li>
                  <li><strong>Grammar Exam Builder:</strong> Essential Grammar bo'yicha unit mashqlari va yakuniy imtihonlar;</li>
                  <li><strong>Writing Examiner & TOEFL Essays:</strong> Insholarni band-score mezonlari asosida avtomatik baholash;</li>
                  <li><strong>Davomat, Streak, Vaqt sarfi (Telemetriya) va Natijalar monitoringi.</strong></li>
                </ul>
              </div>

              {/* 2. KELISHILGAN TO'LOV MIQDORI VA TO'LOV TARTIBI */}
              <div className="space-y-2.5">
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                  2. KELISHILGAN TO'LOV MIQDORI VA TO'LOV GRAFIGI
                </h3>
                <p className="text-justify">
                  <strong>2.1.</strong> Tomonlarning o'zaro roziligi va kelishuviga ko'ra, Ta'lim oluvchi uchun belgilangan 
                  <strong> oylik ta'lim va platforma to'lovi miqdori {formatUZS(agreedFee)}</strong> etib qat'iy belgilandi.
                </p>
                <p className="text-justify">
                  <strong>2.2.</strong> Kursning umumiy to'lov qiymati: <strong>{formatUZS(plan.final_total_fee)}</strong>.
                  {plan.discount_percent > 0 && (
                    <span className="text-emerald-700 font-semibold block mt-0.5">
                      * Ta'lim oluvchiga {plan.discount_percent}% miqdorida grant/chegirma berilgan ({plan.discount_reason || 'Kelishilgan tarif'}).
                    </span>
                  )}
                </p>

                {/* Installments Table */}
                <div className="border border-slate-200 rounded-xl overflow-hidden mt-2">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-[10px] font-black uppercase text-slate-700">
                      <tr>
                        <th className="p-2.5">Bosqich (Oy)</th>
                        <th className="p-2.5">To'lov Sanasi (Oxirgi muddat)</th>
                        <th className="p-2.5">Kelishilgan Summa</th>
                        <th className="p-2.5">Holat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {plan.schedules.map((sch) => (
                        <tr key={sch.id} className="text-slate-800">
                          <td className="p-2.5 font-bold">{sch.title}</td>
                          <td className="p-2.5">{sch.due_date}</td>
                          <td className="p-2.5 font-extrabold text-slate-950">{formatUZS(sch.amount)}</td>
                          <td className="p-2.5">
                            {sch.status === 'paid' ? (
                              <span className="text-emerald-700 font-black">To'langan ✓ (Sana: {sch.paid_date})</span>
                            ) : (
                              <span className="text-amber-700 font-bold">Kutilmoqda</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-slate-600 mt-1">
                  <strong>2.3.</strong> To'lovlar Ijrochining binosidagi kassa orqali naqd pulda, bank terminallari (Uzcard, Humo) orqali, 
                  mobil to'lov ilovalari (Click Evolution, Payme, Uzum Bank) yoki bank hisob raqamiga to'lov topshiriqnomasi orqali amalga oshiriladi.
                </p>
              </div>

              {/* 3. O'QUVCHINING HAR KUNGI MAJBURIYATLARI */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-indigo-100 pb-1">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950">
                    3. TA'LIM OLUVCHINING HAR KUNGI PLATFORMA MAJBURIYATLARI
                  </h3>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                    Kamida {dailyMinutes} daqiqa/kun
                  </span>
                </div>
                {renderFormattedList(studentObligations)}
              </div>

              {/* 4. OTA-ONANING NAZORATI VA TASDIQLASHI */}
              <div className="space-y-2">
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                  4. OTA-ONANING (QONUNIY VAKILNING) HAFTALIK NAZORATI VA TASDIQLASH MAJBURIYATI
                </h3>
                {renderFormattedList(parentObligations)}
              </div>

              {/* 5. INTIZOM VA NATIJA JAVOBGARLIGI (DISCLAIMER) */}
              <div className="space-y-2">
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                  5. AKADEMIK INTIZOM, NATIJA JAVOBGARLIGI VA CHORALAR
                </h3>
                {renderFormattedList(disciplinaryTerms)}
              </div>

              {/* 6. MAXSUS SHARTLAR (AGAR BO'LSA) */}
              {customTerms && (
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                    6. QO'SHIMCHA MAXSUS KELISHUVLAR
                  </h3>
                  <p className="text-justify text-slate-700 leading-relaxed italic">
                    {customTerms}
                  </p>
                </div>
              )}

              {/* 7. NIZOLAR VA AMAL QILISH */}
              <div className="space-y-1 text-justify">
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                  7. SHARTNOMANING AMAL QILISH MUDDATI VA NIZOLARNI HAL ETISH
                </h3>
                <p>
                  <strong>7.1.</strong> Ushbu shartnoma imzolangan paytdan boshlab o'quv kursi yakunlangunga qadar yuridik kuchga ega.
                </p>
                <p>
                  <strong>7.2.</strong> Tomonlar o'rtasida yuzaga keladigan barcha kelishmovchiliklar o'zaro muzokaralar yo'li bilan, 
                  kelishuvga erishilmagan taqdirda O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq sudda hal etiladi.
                </p>
              </div>

              {/* 8. OTA-ONA MAJBURIYAT KAFOLATI BLOKI */}
              <div className="p-4 bg-slate-50 border border-slate-300 rounded-2xl space-y-2 mt-4">
                <h4 className="font-black text-xs uppercase text-slate-900 text-center tracking-wider">
                  OTA-ONA (QONUNIY VAKIL)NING SHAXSIY KAFOLATI VA TASDIG'I
                </h4>
                <p className="text-justify text-xs text-slate-700 italic leading-relaxed">
                  «Men, ota-ona <strong>{parentName || '_____________________________________'}</strong>, 
                  farzandim <strong>{plan.student_name}</strong> ushbu shartnomada belgilangan kunlik platforma darslarini 
                  (har kuni kamida <strong>{dailyMinutes} daqiqa</strong>) to'liq bajarishini, 4000 Words va Tactics for Listening 
                  topshiriqlarini uzluksiz o'zlashtirishini shaxsan har hafta nazorat qilish hamda o'rganish natijalarini ko'rganligimni 
                  tasdiqlash majburiyatini olaman. Agar ushbu majburiyatlar bajarilmasa, ta'lim natijasi pasayishi uchun «Premier School» 
                  markazi javobgar bo'lmasligini to'liq tushunaman va qabul qilaman.»
                </p>
                <div className="flex items-center justify-between pt-2 text-xs font-semibold text-slate-800">
                  <span>Ota-ona imzosi: ____________________</span>
                  <span>Sana: {contractDate}</span>
                </div>
              </div>

              {/* 9. TOMONLARNING YURIDIK REKVIZITLARI VA IMZOLARI */}
              <div className="pt-4 border-t-2 border-slate-900 mt-6">
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 text-center mb-4">
                  TOMONLARNING YURIDIK REKVIZITLARI VA IMZOLARI
                </h3>

                <div className="grid grid-cols-2 gap-8 text-xs">
                  {/* Ijrochi */}
                  <div className="space-y-1.5 border-r border-slate-200 pr-6">
                    <span className="font-black text-slate-900 uppercase block text-sm">IJROCHI:</span>
                    <p className="font-extrabold text-slate-950">«PREMIER SCHOOL ACADEMY» NTM</p>
                    <p className="text-slate-600">Yuridik manzil: Toshkent sh., Mirobod t., Oybek ko'chasi 14</p>
                    <p className="text-slate-600">STIR (INN): 308 192 841</p>
                    <p className="text-slate-600">H/r: 20208000900543210001</p>
                    <p className="text-slate-600">Bank: ATIB "Ipoteka-bank" Mirobod filiali</p>
                    <p className="text-slate-600">MFO: 00401 • Tel: +998 71 200 00 00</p>

                    {/* Stamp and signature block */}
                    <div className="pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-800">Bosh direktor:</p>
                        <p className="font-black text-slate-950 mt-1">N. A. Safoyev</p>
                        <p className="text-[10px] text-slate-400">Imzo: _________________</p>
                      </div>

                      {/* Official Stamp Watermark */}
                      <div className="w-24 h-24 border-2 border-indigo-700/80 rounded-full flex flex-col items-center justify-center text-center p-1 text-indigo-900 rotate-[-5deg] shadow-2xs bg-indigo-50/20">
                        <span className="text-[8px] font-black tracking-tighter uppercase">PREMIER SCHOOL</span>
                        <span className="text-[7px] font-bold">O'QUV MARKAZI</span>
                        <span className="text-[7px] font-mono text-indigo-700">STIR: 308192841</span>
                        <span className="text-[6px] font-bold text-emerald-700 mt-0.5">TASDIQLANDI</span>
                      </div>
                    </div>
                  </div>

                  {/* Ta'lim oluvchi */}
                  <div className="space-y-1.5 pl-2 flex flex-col justify-between">
                    <div>
                      <span className="font-black text-slate-900 uppercase block text-sm">TA'LIM OLUVCHI:</span>
                      <p className="font-extrabold text-slate-950">{plan.student_name}</p>
                      <p className="text-slate-600">Guruh: {plan.group_name}</p>
                      <p className="text-slate-600">Pasport / ID: {passportId}</p>
                      <p className="text-slate-600">Telefon: {plan.student_phone || plan.student_email}</p>
                      {parentName && (
                        <p className="text-slate-600">Ota-onasi: {parentName} {parentPhone ? `(${parentPhone})` : ''}</p>
                      )}
                      <p className="text-slate-600">Kelishilgan to'lov: {formatUZS(agreedFee)}/oy</p>
                      <p className="text-slate-600">Kunlik talab: kamida {dailyMinutes} daqiqa</p>
                    </div>

                    <div className="pt-6 flex items-end justify-between">
                      <div>
                        <p className="text-slate-700 font-bold">Ta'lim oluvchi imzosi:</p>
                        <p className="font-mono text-slate-400 mt-3">________________________ (imzo)</p>
                        <p className="text-[10px] text-slate-500 mt-1">Sana: {contractDate}</p>
                      </div>

                      {/* QR Code */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white border border-slate-300 rounded-xl p-1 flex items-center justify-center shadow-2xs">
                          <QrCode className="w-14 h-14 text-slate-900" />
                        </div>
                        <span className="text-[8px] text-slate-400 block mt-0.5 font-mono">LMS ID: {plan.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
