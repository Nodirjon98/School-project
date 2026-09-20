import React, { useState } from 'react';
import { 
  X, Printer, Copy, Check, FileText, Building, 
  User, Calendar, ShieldCheck, QrCode, SlidersHorizontal, Save, Sparkles 
} from 'lucide-react';
import { StudentPaymentPlan } from '../../types';

interface StudentContractModalProps {
  isOpen: boolean;
  plan: StudentPaymentPlan;
  onClose: () => void;
  onUpdatePlan?: (updatedPlan: StudentPaymentPlan) => void;
}

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
  const defaultAgreedFee = plan.agreed_fee || plan.base_monthly_fee;

  // Editable parameters
  const [contractNumber, setContractNumber] = useState<string>(defaultContractNo);
  const [contractDate, setContractDate] = useState<string>(defaultContractDate);
  const [passportId, setPassportId] = useState<string>(defaultPassport);
  const [parentName, setParentName] = useState<string>(defaultParent);
  const [agreedFee, setAgreedFee] = useState<number>(defaultAgreedFee);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Format currency
  const formatUZS = (val: number) => {
    return val.toLocaleString('uz-UZ') + " so'm";
  };

  const handlePrint = () => {
    window.print();
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
      schedules: updatedSchedules,
    };

    if (onUpdatePlan) {
      onUpdatePlan(updatedPlan);
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleCopyContractText = async () => {
    const fullText = `TA'LIM XIZMATLARI VA «PREMIER SCHOOL LMS» PLATFORMASIDAN FOYDALANISH TO'G'RISIDA SHARTNOMA № ${contractNumber}
Sana: ${contractDate}
Ijrochi: "PREMIER SCHOOL ACADEMY" NNTM (STIR: 308192841)
Buyurtmachi: ${plan.student_name} (${plan.group_name})
Telefon: ${plan.student_phone || plan.student_email}
Pasport/ID: ${passportId}
${parentName ? `Ota-onasi: ${parentName}` : ''}
Kelishilgan oylik to'lov: ${formatUZS(agreedFee)}
Umumiy kurs to'lovi: ${formatUZS(plan.final_total_fee)}
Kurs: ${plan.course_title}`;

    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
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
              margin: 0 !important;
              padding: 20mm !important;
              background: white !important;
              color: #0f172a !important;
              font-size: 11pt !important;
              line-height: 1.5 !important;
            }
            .no-print {
              display: none !important;
            }
            @page {
              size: A4 portrait;
              margin: 15mm;
            }
          }
        `
      }} />

      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-6 max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Top Control Bar (Hidden on Print) */}
        <div className="no-print px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-sm sm:text-base">Ta'lim & Platforma Shartnomasi (PDF)</h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
                  № {contractNumber}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {plan.student_name} • {plan.group_name} • Kelishilgan summa: {formatUZS(agreedFee)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                showSettings ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              title="Shartnoma va to'lov parametrlarini sozlash"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Kelishuvni Tahrirlash</span>
            </button>

            <button
              onClick={handleCopyContractText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Nusxa olindi!' : 'Nusxa olish'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Edit Parameters Drawer (Hidden on Print) */}
        {showSettings && (
          <div className="no-print bg-slate-50 border-b border-slate-200 p-5 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                O'quvchi Bilan Kelishilgan To'lov va Shartnoma Ma'lumotlari:
              </span>
              {savedSuccess && (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <Check className="w-4 h-4" /> Ma'lumotlar saqlandi!
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Kelishilgan Oylik To'lov (UZS):
                </label>
                <input
                  type="number"
                  step="50000"
                  value={agreedFee}
                  onChange={(e) => setAgreedFee(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-black text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Shartnoma Raqami:
                </label>
                <input
                  type="text"
                  value={contractNumber}
                  onChange={(e) => setContractNumber(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono font-bold text-slate-900 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Shartnoma Tuzilgan Sana:
                </label>
                <input
                  type="date"
                  value={contractDate}
                  onChange={(e) => setContractDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-bold text-slate-900 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Pasport / ID / Guvohnoma №:
                </label>
                <input
                  type="text"
                  placeholder="Masalan: AB 1234567"
                  value={passportId}
                  onChange={(e) => setPassportId(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-bold text-slate-900 outline-hidden"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-3">
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Ota-onasi / Vasiy F.I.Sh. (Agar o'quvchi voyaga yetmagan bo'lsa):
                </label>
                <input
                  type="text"
                  placeholder="Masalan: Ilhomov Botirjon Karimovich"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 outline-hidden"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Saqlash & Yangilash</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scrollable Printable Contract Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-100 flex justify-center">
          <div 
            id="printable-contract"
            className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-900 text-xs sm:text-sm leading-relaxed space-y-6"
          >
            {/* Document Letterhead */}
            <div className="border-b-2 border-slate-900 pb-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-700 text-white font-black flex items-center justify-center text-xl shadow-xs">
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
                  <p className="font-bold text-slate-900">№ {contractNumber}</p>
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
                (O'quv markazida o'qish, platforma trenajyorlaridan foydalanish va to'lov tartibi to'g'risida)
              </p>
            </div>

            {/* Preamble */}
            <div className="text-justify leading-relaxed">
              <p>
                Bir tomondan, <strong>«PREMIER SCHOOL ACADEMY» NTM</strong> (keyingi o'rinlarda <em>«Ijrochi»</em> deb yuritiladi), 
                Ustav asosida faoliyat ko'rsatuvchi Bosh direktor <strong>Nodirjon Safoyev</strong> timsolida, va ikkinchi tomondan 
                fuqaro <strong>{plan.student_name}</strong> (Pasport/ID: <strong>{passportId}</strong>, Telefon: <strong>{plan.student_phone || plan.student_email}</strong>) 
                {parentName ? <span> hamda uning qonuniy vakili (ota-onasi) <strong>{parentName}</strong></span> : ''} (keyingi o'rinlarda <em>«Ta'lim oluvchi»</em> deb yuritiladi), 
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
                <li><strong>Safoyev AI Voice Clone:</strong> Sun'iy intellekt asosida jonli nutq muloqoti, talaffuz tezligi va sofligini parametrik baholash;</li>
                <li><strong>Grammar Exam Builder:</strong> Essential Grammar bo'yicha unit mashqlari va har bir bosqichdan so'ng yakuniy sertifikat imtihoni;</li>
                <li><strong>Writing Examiner & TOEFL Essays:</strong> Insholarni band-score mezonlari (Lexical Resource, Grammatical Accuracy) asosida avtomatik baholash;</li>
                <li><strong>Haftalik dars jadvali, XP, Streak va Davomat monitoringi.</strong></li>
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
                Har bir qabul qilingan to'lov bo'yicha o'quvchiga QR-kodli rasmiy to'lov cheki (kvitansiya) taqdim etiladi.
              </p>
            </div>

            {/* 3. PLATFORMADAN FOYDALANISH VA O'RGANISH QOIDALARI */}
            <div className="space-y-2">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                3. «PREMIER SCHOOL LMS» PLATFORMASIDAN FOYDALANISH VA TA'LIM TALABLARI
              </h3>
              <p className="text-justify">
                <strong>3.1.</strong> Ta'lim oluvchiga taqdim etilgan shaxsiy login va parol qat'iy ravishda uning shaxsiy foydalanishi 
                uchun mo'ljallangan. Ushbu hisob ma'lumotlarini begona shaxslarga berish, sotish yoki ochiq tarmoqlarda e'lon qilish man etiladi.
              </p>
              <p className="text-justify">
                <strong>3.2.</strong> Ta'lim oluvchi markaz darslariga muntazam qatnashishi, o'qituvchi tomonidan platformaga yuklangan 
                darslar, audio mashqlar, so'z yodlash trenajyorlari va uy vazifalarini o'z vaqtida, mustaqil ravishda bajarishi shart.
              </p>
              <p className="text-justify">
                <strong>3.3.</strong> Intellektual mulk himoyasi: «Premier School LMS» tizimidagi barcha audio diktantlar, maxsus metodik 
                qo'llanmalar, ovoz klonlari va test savollari mualliflik huquqi bilan himoyalangan. Ularni tijoriy maqsadlarda tarqatish taqiqlanadi.
              </p>
            </div>

            {/* 4. TOMONLARNING HUQUQ VA MAJBURIYATLARI */}
            <div className="space-y-2">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                4. TOMONLARNING HUQUQ VA MAJBURIYATLARI
              </h3>
              <p className="text-justify">
                <strong>4.1. Ijrochining majburiyatlari:</strong> Darslarni xalqaro CEFR va IELTS standartlari asosida yuqori sifatda tashkil etish; 
                «Premier School LMS» tizimining haftada 7 kun, 24 soat uzluksiz ishlashini ta'minlash; Ta'lim oluvchining o'zlashtirish tahlili va 
                ko'rsatkichlari bo'yicha muntazam ochiq hisobot yuritish.
              </p>
              <p className="text-justify">
                <strong>4.2. Ta'lim oluvchining majburiyatlari:</strong> O'quv markazi ichki tartib-qoidalariga rioya qilish; o'quv dasturi topshiriqlarini 
                vijdonan bajarish; to'lovlarni 2-banddagi grafik asosida kechiktirmasdan amalga oshirish.
              </p>
            </div>

            {/* 5. NIZOLAR VA SHARTNOMANING AMAL QILISHI */}
            <div className="space-y-1.5 text-justify">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-indigo-950 border-b border-indigo-100 pb-1">
                5. SHARTNOMANING AMAL QILISH MUDDATI VA NIZOLARNI HAL ETISH
              </h3>
              <p>
                <strong>5.1.</strong> Ushbu shartnoma imzolangan paytdan boshlab o'quv kursi yakunlangunga qadar yuridik kuchga ega.
              </p>
              <p>
                <strong>5.2.</strong> Tomonlar o'rtasida yuzaga keladigan barcha kelishmovchiliklar o'zaro muzokaralar yo'li bilan, 
                kelishuvga erishilmagan taqdirda O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq sudda hal etiladi.
              </p>
            </div>

            {/* 6. TOMONLARNING YURIDIK REKVIZITLARI VA IMZOLARI */}
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
                      <p className="text-slate-600">Qonuniy vakili (ota-onasi): {parentName}</p>
                    )}
                    <p className="text-slate-600">Kelishilgan to'lov: {formatUZS(agreedFee)}/oy</p>
                  </div>

                  <div className="pt-6 flex items-end justify-between">
                    <div>
                      <p className="text-slate-700 font-bold">Ta'lim oluvchi / Vasiy imzosi:</p>
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
      </div>
    </div>
  );
};
