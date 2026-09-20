import React, { useState } from 'react';
import { 
  X, Send, Copy, Check, MessageSquare, Phone, 
  AlertCircle, Sparkles, Clock, User, ShieldAlert 
} from 'lucide-react';
import { StudentPaymentPlan, PaymentScheduleItem } from '../../types';

interface PaymentReminderModalProps {
  isOpen: boolean;
  plan: StudentPaymentPlan;
  targetItem?: PaymentScheduleItem;
  onClose: () => void;
  onSent?: (studentName: string) => void;
}

type TemplateType = 'friendly' | 'overdue' | 'parent' | 'short_sms';

export const PaymentReminderModal: React.FC<PaymentReminderModalProps> = ({
  isOpen,
  plan,
  targetItem,
  onClose,
  onSent
}) => {
  if (!isOpen) return null;

  // Resolve target schedule item (overdue first, or first pending, or custom)
  const item = targetItem || 
    plan.schedules.find(s => s.status === 'overdue') || 
    plan.schedules.find(s => s.status === 'pending') || 
    plan.schedules[0];

  const amountFormatted = (item ? item.amount : plan.remaining_amount).toLocaleString('uz-UZ') + " so'm";
  const dueDate = item?.due_date || plan.next_due_date || '2026-09-25';
  const installmentTitle = item?.title || "Oylik kurs to'lovi";

  const isOverdue = item?.status === 'overdue';

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(isOverdue ? 'overdue' : 'friendly');
  const [phoneNumber, setPhoneNumber] = useState<string>(plan.student_phone || '+998 90 000 00 00');
  const [copied, setCopied] = useState(false);

  // Template texts in Uzbek
  const getTemplateContent = (type: TemplateType): string => {
    switch (type) {
      case 'friendly':
        return `Assalomu alaykum, ${plan.student_name}!
Premier School o'quv markazidan eslatma: Sizning "${plan.course_title}" kursi bo'yicha ${installmentTitle} (${amountFormatted}) to'lov muddati ${dueDate} sanasigacha belgilangan.

To'lovni o'quv markazi ma'muriyatida (naqd / plastik karta) yoki masofadan turib (Click, Payme, Uzum) orqali amalga oshirishingiz mumkin.

Savollaringiz bo'lsa, ma'muriyatimizga murojaat qiling: +998 71 200 00 00.
Muvaffaqiyatli ta'lim tilaymiz!
— Premier School Jamoasi`;

      case 'overdue':
        return `Assalomu alaykum, hurmatli ${plan.student_name}!
Premier School o'quv markazidagi "${plan.course_title}" kursi bo'yicha ${installmentTitle} to'lov muddati (${dueDate}) yakunlanganligini eslatib o'tamiz.
Mavjud qarzdorlik miqdori: ${amountFormatted}.

Darslarga uzluksiz qatnashish va platforma imkoniyatlaridan to'liq foydalanishni ta'minlash maqsadida to'lovni zudlik bilan amalga oshirishingizni so'raymiz.

To'lov usullari: Naqd pul, Karta (Uzcard/Humo), Click, Payme.
Ma'lumot uchun: +998 71 200 00 00`;

      case 'parent':
        return `Assalomu alaykum, hurmatli ota-ona!
Farzandingiz ${plan.student_name}ning Premier School o'quv markazidagi (${plan.group_name}) o'qish to'lovi muddati kelganligini ma'lum qilamiz.
To'lov miqdori: ${amountFormatted}.
Muddati: ${dueDate}.

O'qish uchun to'lovni o'quv markazimiz kassa hisobiga yoki Click/Payme orqali qulay to'lashingiz mumkin.
Farzandingiz yutuqlaridan faxrlanamiz!
— Premier School Ma'muriyati (+998 71 200 00 00)`;

      case 'short_sms':
        return `Premier School: Hurmatli ${plan.student_name}, ${installmentTitle} to'lovi (${amountFormatted}) muddati: ${dueDate}. Click/Payme yoki markaz kassasida to'lashingiz mumkin. Tel: 712000000`;
    }
  };

  const [messageText, setMessageText] = useState<string>(() => getTemplateContent(isOverdue ? 'overdue' : 'friendly'));

  const handleTemplateChange = (type: TemplateType) => {
    setSelectedTemplate(type);
    setMessageText(getTemplateContent(type));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Clipboard copy failed', e);
    }
  };

  const handleSendTelegram = () => {
    const encoded = encodeURIComponent(messageText);
    window.open(`https://t.me/share/url?url=&text=${encoded}`, '_blank');
    if (onSent) onSent(plan.student_name);
  };

  const handleSendSMS = () => {
    const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
    const encoded = encodeURIComponent(messageText);
    window.open(`sms:${cleanPhone}?body=${encoded}`, '_blank');
    if (onSent) onSent(plan.student_name);
  };

  const handleCall = () => {
    const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
    window.open(`tel:${cleanPhone}`, '_self');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-linear-to-r from-blue-700 via-indigo-700 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md">
              <MessageSquare className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-base">To'lov Eslatmasi (SMS & Telegram)</h2>
                {isOverdue && (
                  <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                    Muddati o'tgan
                  </span>
                )}
              </div>
              <p className="text-xs text-indigo-200">{plan.student_name} • {plan.group_name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-indigo-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {/* Quick info strip */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-500 block font-medium">To'lov bosqichi / Qarzdorlik:</span>
              <span className="font-extrabold text-slate-900 text-sm">{installmentTitle}</span>
              <span className="text-slate-500 block mt-0.5">Muddat: <strong className={isOverdue ? 'text-rose-600' : 'text-slate-800'}>{dueDate}</strong></span>
            </div>
            <div className="sm:text-right">
              <span className="text-slate-500 block font-medium">Summa:</span>
              <span className={`font-black text-lg ${isOverdue ? 'text-rose-600' : 'text-indigo-600'}`}>
                {amountFormatted}
              </span>
            </div>
          </div>

          {/* Student Phone Number edit */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Telefon raqami (Aloqa uchun):
            </label>
            <div className="relative">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full px-3.5 py-2 pl-9 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono font-bold text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-hidden"
              />
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Template Selectors */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Tayyor Eslatma Shablonini Tanlang:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleTemplateChange('friendly')}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  selectedTemplate === 'friendly'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-extrabold ring-1 ring-indigo-600'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="block font-bold text-xs">🌟 Do'stona</span>
                <span className="text-[10px] text-slate-500">Ijobiy eslatma</span>
              </button>

              <button
                type="button"
                onClick={() => handleTemplateChange('overdue')}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  selectedTemplate === 'overdue'
                    ? 'border-rose-600 bg-rose-50 text-rose-900 font-extrabold ring-1 ring-rose-600'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="block font-bold text-xs">⚠️ Qarzdorlik</span>
                <span className="text-[10px] text-slate-500">Rasmiy ogohlantirish</span>
              </button>

              <button
                type="button"
                onClick={() => handleTemplateChange('parent')}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  selectedTemplate === 'parent'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-extrabold ring-1 ring-emerald-600'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="block font-bold text-xs">👨‍👩‍👧 Ota-onalarga</span>
                <span className="text-[10px] text-slate-500">Hurmatli xat</span>
              </button>

              <button
                type="button"
                onClick={() => handleTemplateChange('short_sms')}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  selectedTemplate === 'short_sms'
                    ? 'border-amber-600 bg-amber-50 text-amber-900 font-extrabold ring-1 ring-amber-600'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="block font-bold text-xs">💬 Qisqa SMS</span>
                <span className="text-[10px] text-slate-500">160 belgi</span>
              </button>
            </div>
          </div>

          {/* Editable Text Area */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Xabar matni (Tahrirlashingiz mumkin):
              </label>
              <span className="text-[10px] font-mono text-slate-400">
                {messageText.length} ta belgi
              </span>
            </div>
            <textarea
              rows={6}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs text-slate-900 font-medium leading-relaxed focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-hidden"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Nusxa olindi! ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Nusxa olish</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCall}
                title="Telefon orqali bog'lanish"
                className="p-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSendSMS}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                <span>SMS orqali</span>
              </button>

              <button
                type="button"
                onClick={handleSendTelegram}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram orqali jo'natish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
