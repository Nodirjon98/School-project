import React, { useRef } from 'react';
import { X, Printer, CheckCircle2, Download, ShieldCheck, QrCode, Building, Calendar, User } from 'lucide-react';
import { PaymentScheduleItem, StudentPaymentPlan } from '../../types';

interface PaymentReceiptModalProps {
  plan: StudentPaymentPlan;
  item: PaymentScheduleItem;
  onClose: () => void;
}

export const PaymentReceiptModal: React.FC<PaymentReceiptModalProps> = ({ plan, item, onClose }) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const formatCurrency = (val: number) => {
    return val.toLocaleString('uz-UZ') + " so'm";
  };

  const handlePrint = () => {
    window.print();
  };

  const receiptNumber = item.receipt_no || `RCP-${Date.now().toString().slice(-8)}`;
  const paymentDate = item.paid_date || new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-sm">Rasmiy To'lov Kvitansiyasi</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div ref={receiptRef} className="p-8 space-y-6 text-slate-800 bg-white">
          {/* Receipt Header */}
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                  P
                </div>
                <div>
                  <h2 className="font-extrabold text-lg text-slate-950 tracking-tight leading-none">
                    PREMIER SCHOOL
                  </h2>
                  <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                    Tashkent English & IELTS Academy
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Toshkent sh., Mirobod t., Oybek ko'chasi 14 • Tel: +998 71 200 00 00
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 font-black text-xs uppercase tracking-wider">
                ✓ TO'LANGAN (PAID)
              </span>
              <p className="text-xs font-mono font-bold text-slate-900 mt-2">
                № {receiptNumber}
              </p>
              <p className="text-[11px] text-slate-500">
                Sana: {paymentDate}
              </p>
            </div>
          </div>

          {/* Student & Course Details */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-400 block font-bold uppercase text-[10px]">O'quvchi (Student):</span>
              <p className="font-extrabold text-slate-950 text-sm mt-0.5">{plan.student_name}</p>
              <p className="text-slate-600 font-medium">{plan.student_phone || plan.student_email}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-bold uppercase text-[10px]">Guruh & Kurs:</span>
              <p className="font-bold text-slate-900 mt-0.5">{plan.group_name}</p>
              <p className="text-indigo-600 font-medium">{plan.course_title}</p>
            </div>
          </div>

          {/* Payment Line Item Table */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-100 px-4 py-2.5 text-[11px] font-bold text-slate-600 flex justify-between uppercase tracking-wider">
              <span>Xizmat nomi / To'lov maqsadi</span>
              <span>Miqdori</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                <span>{item.title}</span>
                <span>{formatCurrency(item.amount)}</span>
              </div>
              {plan.discount_percent > 0 && (
                <div className="flex justify-between items-center text-xs text-emerald-700 font-medium">
                  <span>Chegirma / Grant ({plan.discount_percent}% - {plan.discount_reason || "Maxsus chegirma"})</span>
                  <span>Hisobga olingan</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span>To'lov usuli:</span>
                <span className="font-bold uppercase text-slate-800">
                  {item.payment_method === 'cash' ? '💵 Naqd pul (Kassa)' : 
                   item.payment_method === 'payme' ? '🔵 Payme' : 
                   item.payment_method === 'click' ? '🟡 Click' : 
                   item.payment_method === 'uzum' ? '🟣 Uzum Bank' : '🏛️ Bank o\'tkazmasi'}
                </span>
              </div>
              {item.transaction_id && (
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Tranzaksiya / Chek ID:</span>
                  <span className="font-mono text-slate-800">{item.transaction_id}</span>
                </div>
              )}
            </div>
            <div className="bg-indigo-50/80 px-4 py-3 border-t border-indigo-100 flex justify-between items-center">
              <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider">Jami to'langan:</span>
              <span className="text-base font-black text-indigo-900">{formatCurrency(item.amount)}</span>
            </div>
          </div>

          {/* Verification & Stamp Footer */}
          <div className="flex items-end justify-between pt-4 border-t border-dashed border-slate-300">
            {/* QR Code */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white border border-slate-300 rounded-xl p-1 flex items-center justify-center shadow-2xs">
                <QrCode className="w-14 h-14 text-slate-900" />
              </div>
              <div className="text-[10px] text-slate-500 leading-tight">
                <p className="font-bold text-slate-700">QR-kod orqali tekshirish:</p>
                <p>Ushbu kvitansiya Premier School LMS tizimida ro'yxatdan o'tgan va qonuniy hisoblanadi.</p>
              </div>
            </div>

            {/* Stamp simulation */}
            <div className="border-2 border-indigo-700/60 rounded-2xl p-2.5 text-center rotate-[-3deg] shadow-2xs">
              <span className="text-[10px] font-black tracking-widest uppercase text-indigo-800 block">
                PREMIER SCHOOL
              </span>
              <span className="text-[9px] font-bold text-indigo-600 block">
                BUXGALTERIYA • TASDIQLANDI
              </span>
              <span className="text-[9px] font-mono text-indigo-700">
                {paymentDate}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <div className="text-xs text-slate-500 font-medium">
            Kvitansiya nusxasi o'quvchi kabinetiga ham yuborildi.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Yopish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
