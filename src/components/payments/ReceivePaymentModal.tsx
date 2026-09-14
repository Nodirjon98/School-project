import React, { useState } from 'react';
import { X, CheckCircle2, DollarSign, CreditCard, Banknote, ShieldAlert, Sparkles } from 'lucide-react';
import { StudentPaymentPlan, PaymentScheduleItem, PaymentMethod } from '../../types';

interface ReceivePaymentModalProps {
  plan: StudentPaymentPlan;
  onSavePayment: (updatedPlan: StudentPaymentPlan, paidItem: PaymentScheduleItem) => void;
  onClose: () => void;
}

export const ReceivePaymentModal: React.FC<ReceivePaymentModalProps> = ({
  plan,
  onSavePayment,
  onClose,
}) => {
  // Find first unpaid or pending installment, or default to first
  const pendingItem = plan.schedules.find(s => s.status !== 'paid') || plan.schedules[0];

  const [selectedScheduleId, setSelectedScheduleId] = useState<string>(pendingItem ? pendingItem.id : '');
  const [customAmount, setCustomAmount] = useState<number>(pendingItem ? pendingItem.amount : 0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('click');
  const [payerName, setPayerName] = useState<string>(plan.student_name);
  const [transactionId, setTransactionId] = useState<string>(`TXN-${Math.floor(100000 + Math.random() * 900000)}`);
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleScheduleSelect = (id: string) => {
    setSelectedScheduleId(id);
    const item = plan.schedules.find(s => s.id === id);
    if (item) {
      setCustomAmount(item.amount);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAmount || customAmount <= 0) return;

    const receiptNo = `RCP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const paidDate = new Date().toISOString().split('T')[0];

    // Clone plan and update schedule
    const updatedSchedules = plan.schedules.map(sch => {
      if (sch.id === selectedScheduleId) {
        return {
          ...sch,
          amount: customAmount,
          status: 'paid' as const,
          paid_date: paidDate,
          payment_method: paymentMethod,
          transaction_id: transactionId,
          receipt_no: receiptNo,
          notes: notes || "To'lov muvaffaqiyatli qabul qilindi",
        };
      }
      return sch;
    });

    const newPaidAmount = updatedSchedules.filter(s => s.status === 'paid').reduce((acc, curr) => acc + curr.amount, 0);
    const newRemaining = Math.max(0, plan.final_total_fee - newPaidAmount);
    const hasPending = updatedSchedules.some(s => s.status === 'pending');
    const hasOverdue = updatedSchedules.some(s => s.status === 'overdue');

    const updatedOverallStatus = newRemaining === 0 ? 'paid' : hasOverdue ? 'overdue' : 'partial';

    const updatedPlan: StudentPaymentPlan = {
      ...plan,
      paid_amount: newPaidAmount,
      remaining_amount: newRemaining,
      overall_status: updatedOverallStatus,
      schedules: updatedSchedules,
    };

    const targetItem = updatedSchedules.find(s => s.id === selectedScheduleId)!;
    setIsSuccess(true);
    setTimeout(() => {
      onSavePayment(updatedPlan, targetItem);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-linear-to-r from-indigo-700 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
              <DollarSign className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="font-extrabold text-base">To'lov Qabul Qilish (Receive Payment)</h2>
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

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Quick summary info */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-500 font-medium block">Umumiy to'lov:</span>
              <span className="font-extrabold text-slate-900 text-sm">{plan.final_total_fee.toLocaleString()} UZS</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block">To'langan:</span>
              <span className="font-bold text-emerald-600 text-sm">{plan.paid_amount.toLocaleString()} UZS</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block">Qoldiq qarzdorlik:</span>
              <span className="font-extrabold text-rose-600 text-sm">{plan.remaining_amount.toLocaleString()} UZS</span>
            </div>
          </div>

          {/* Installment selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              To'lanayotgan bosqich / oy (Installment):
            </label>
            <select
              value={selectedScheduleId}
              onChange={(e) => handleScheduleSelect(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-hidden"
            >
              {plan.schedules.map((sch) => (
                <option key={sch.id} value={sch.id}>
                  {sch.title} — {sch.amount.toLocaleString()} UZS ({sch.status === 'paid' ? "To'langan ✓" : sch.status === 'overdue' ? "Muddati o'tgan ⚠️" : "Kutilmoqda ⏳"})
                </option>
              ))}
            </select>
          </div>

          {/* Amount field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              To'lov summasi (UZS):
            </label>
            <div className="relative">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(Number(e.target.value))}
                required
                className="w-full px-4 py-2.5 pl-10 bg-slate-50 border border-slate-300 rounded-xl text-sm font-black text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-hidden"
              />
              <Banknote className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              To'lov turi va usulini tanlang:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'cash', name: '💵 Naqd pul (Kassa)', desc: 'Kassaga qabul qilindi', color: 'border-emerald-500 bg-emerald-50 text-emerald-900' },
                { id: 'card', name: '💳 Plastik karta', desc: 'Uzcard / Humo / Terminal', color: 'border-indigo-500 bg-indigo-50 text-indigo-900' },
                { id: 'click', name: '🟡 Click Evolution', desc: 'Click ilovasi orqali', color: 'border-amber-500 bg-amber-50 text-amber-900' },
                { id: 'payme', name: '🔵 Payme', desc: 'Payme ilovasi orqali', color: 'border-cyan-500 bg-cyan-50 text-cyan-900' },
                { id: 'uzum', name: '🟣 Uzum Bank', desc: 'Uzum to\'lovi', color: 'border-purple-500 bg-purple-50 text-purple-900' },
                { id: 'bank_transfer', name: '🏛️ Bank hisobiga', desc: 'Bank o\'tkazmasi', color: 'border-blue-500 bg-blue-50 text-blue-900' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id as PaymentMethod)}
                  className={`p-3 rounded-2xl text-left border transition cursor-pointer ${
                    paymentMethod === m.id
                      ? `${m.color} ring-2 ring-indigo-600 font-extrabold shadow-sm`
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{m.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Payer Name & Transaction Ref */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                To'lovchi F.I.Sh.:
              </label>
              <input
                type="text"
                value={payerName}
                onChange={(e) => setPayerName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-medium outline-hidden"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                Chek / Tranzaksiya ID:
              </label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-slate-900 outline-hidden"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
              Izoh (ixtiyoriy):
            </label>
            <input
              type="text"
              placeholder="Masalan: Ota-onasi tomonidan to'landi"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 outline-hidden"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 transition cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              disabled={isSuccess}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 animate-bounce" />
                  <span>Qabul qilindi!</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>To'lovni Tasdiqlash & Kvitansiya</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
