import React, { useRef, useState } from 'react';
import { 
  X, Printer, CheckCircle2, Copy, Check, 
  ShieldCheck, QrCode, Building, Calendar, User, FileText 
} from 'lucide-react';
import { PaymentScheduleItem, StudentPaymentPlan } from '../../types';

interface PaymentReceiptModalProps {
  plan: StudentPaymentPlan;
  item: PaymentScheduleItem;
  onClose: () => void;
}

export const PaymentReceiptModal: React.FC<PaymentReceiptModalProps> = ({ plan, item, onClose }) => {
  const [copied, setCopied] = useState(false);

  const formatCurrency = (val: number) => {
    return val.toLocaleString('uz-UZ') + " so'm";
  };

  const handlePrint = () => {
    window.print();
  };

  const receiptNumber = item.receipt_no || `RCP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const paymentDate = item.paid_date || new Date().toISOString().split('T')[0];

  const methodLabel = 
    item.payment_method === 'cash' ? '💵 Naqd pul (Kassa)' : 
    item.payment_method === 'card' ? '💳 Plastik karta (Uzcard / Humo)' : 
    item.payment_method === 'click' ? '🟡 Click Evolution' : 
    item.payment_method === 'payme' ? '🔵 Payme' : 
    item.payment_method === 'uzum' ? '🟣 Uzum Bank' : '🏛️ Bank o\'tkazmasi';

  const handleCopyReceiptSummary = async () => {
    const summary = `🧾 PREMIER SCHOOL — TO'LOV KVITANSIYASI
№: ${receiptNumber}
Sana: ${paymentDate}
O'quvchi: ${plan.student_name}
Guruh: ${plan.group_name}
Kurs: ${plan.course_title}
To'lov maqsadi: ${item.title}
To'lov usuli: ${methodLabel}
To'langan summa: ${formatCurrency(item.amount)}
Tranzaksiya ID: ${item.transaction_id || 'CSH-90123'}
Holat: To'langan (Tasdiqlangan ✓)
Premier School Ma'muriyati: +998 71 200 00 00`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      {/* Inline styles for crystal-clean printing */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body * {
              visibility: hidden !important;
            }
            #printable-receipt-area, #printable-receipt-area * {
              visibility: visible !important;
            }
            #printable-receipt-area {
              position: fixed !important;
              left: 0 !important;
              top: 0 !important;
              width: 100% !important;
              height: auto !important;
              margin: 0 !important;
              padding: 24px !important;
              background: white !important;
              color: black !important;
              box-shadow: none !important;
              border: none !important;
            }
            .no-print {
              display: none !important;
            }
          }
        `
      }} />

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Bar (hidden during print) */}
        <div className="no-print px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-extrabold text-sm tracking-tight">Rasmiy To'lov Kvitansiyasi</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReceiptSummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Nusxalandi! ✓' : 'Nusxa olish'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish (Print)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Card */}
        <div id="printable-receipt-area" className="p-8 space-y-5.5 text-slate-800 bg-white">
          {/* Header */}
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-5">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-700 text-white font-black flex items-center justify-center text-base shadow-xs">
                  P
                </div>
                <div>
                  <h2 className="font-black text-xl text-slate-950 tracking-tight leading-none">
                    PREMIER SCHOOL
                  </h2>
                  <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">
                    Tashkent English & IELTS Academy
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-medium">
                Toshkent sh., Mirobod t., Oybek ko'chasi 14 • Tel: +998 71 200 00 00
              </p>
              <p className="text-[10px] text-slate-400 font-mono">
                STIR / INN: 308 192 841 • Premier LMS Billing Gateway
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-black text-xs uppercase tracking-wider">
                ✓ TO'LANGAN (PAID)
              </span>
              <p className="text-sm font-mono font-black text-slate-900 mt-2">
                № {receiptNumber}
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Sana: {paymentDate}
              </p>
            </div>
          </div>

          {/* Student & Course Details */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/90 text-xs">
            <div>
              <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">O'quvchi (Student):</span>
              <p className="font-black text-slate-950 text-sm mt-0.5">{plan.student_name}</p>
              <p className="text-slate-600 font-medium mt-0.5">{plan.student_phone || plan.student_email}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">Guruh & Yo'nalish:</span>
              <p className="font-bold text-slate-900 mt-0.5">{plan.group_name}</p>
              <p className="text-indigo-600 font-semibold mt-0.5">{plan.course_title}</p>
            </div>
          </div>

          {/* Line Item Table */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-100/90 px-4 py-2.5 text-[11px] font-bold text-slate-700 flex justify-between uppercase tracking-wider">
              <span>Xizmat nomi / To'lov maqsadi</span>
              <span>Summa</span>
            </div>
            <div className="p-4 space-y-2.5 bg-white">
              <div className="flex justify-between items-center text-sm font-black text-slate-900">
                <span>{item.title}</span>
                <span>{formatCurrency(item.amount)}</span>
              </div>
              {plan.discount_percent > 0 && (
                <div className="flex justify-between items-center text-xs text-emerald-700 font-medium">
                  <span>Chegirma / Grant ({plan.discount_percent}% - {plan.discount_reason || "Grant asosida"})</span>
                  <span>Hisobga olingan</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span>To'lov usuli:</span>
                <span className="font-extrabold text-slate-800 uppercase">
                  {methodLabel}
                </span>
              </div>
              {item.transaction_id && (
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Tranzaksiya / Chek ID:</span>
                  <span className="font-mono font-bold text-slate-800">{item.transaction_id}</span>
                </div>
              )}
              {item.notes && (
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Izoh:</span>
                  <span className="text-slate-700 italic">{item.notes}</span>
                </div>
              )}
            </div>

            {/* Total Footer Strip */}
            <div className="bg-indigo-50 px-4 py-3 border-t border-indigo-100 flex justify-between items-center">
              <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider">Jami to'langan:</span>
              <span className="text-lg font-black text-indigo-900">{formatCurrency(item.amount)}</span>
            </div>
          </div>

          {/* Remaining Balance Note */}
          <div className="flex justify-between items-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <span className="text-slate-500 font-medium">Kurs bo'yicha qoldiq summa:</span>
            <span className={`font-extrabold ${plan.remaining_amount > 0 ? 'text-rose-600' : 'text-emerald-700'}`}>
              {plan.remaining_amount > 0 ? `${formatCurrency(plan.remaining_amount)}` : "0 so'm (To'liq to'langan ✓)"}
            </span>
          </div>

          {/* Verification & Stamp Footer */}
          <div className="flex items-end justify-between pt-4 border-t border-dashed border-slate-300">
            {/* QR Code */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white border border-slate-300 rounded-xl p-1 flex items-center justify-center shadow-2xs">
                <QrCode className="w-14 h-14 text-slate-900" />
              </div>
              <div className="text-[10px] text-slate-500 leading-tight max-w-44">
                <p className="font-bold text-slate-800">QR-kod orqali tekshirish:</p>
                <p className="mt-0.5">Ushbu to'lov cheki Premier School LMS tizimida ro'yxatga olingan va tasdiqlangan.</p>
              </div>
            </div>

            {/* Stamp simulation */}
            <div className="border-2 border-indigo-700/70 rounded-2xl p-2.5 text-center rotate-[-3deg] shadow-2xs bg-indigo-50/20">
              <span className="text-[10px] font-black tracking-widest uppercase text-indigo-900 block">
                PREMIER SCHOOL
              </span>
              <span className="text-[9px] font-bold text-indigo-700 block">
                BUXGALTERIYA • TASDIQLANDI
              </span>
              <span className="text-[8px] font-mono text-indigo-500 block mt-0.5">
                {paymentDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
