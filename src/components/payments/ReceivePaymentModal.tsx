import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, DollarSign, CreditCard, Banknote, 
  Search, Calendar, User, FileText, Check, ArrowRight, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StudentPaymentPlan, PaymentScheduleItem, PaymentMethod } from '../../types';

interface ReceivePaymentModalProps {
  plan?: StudentPaymentPlan;
  allPlans?: StudentPaymentPlan[];
  onSavePayment: (updatedPlan: StudentPaymentPlan, paidItem: PaymentScheduleItem) => void;
  onClose: () => void;
}

export const ReceivePaymentModal: React.FC<ReceivePaymentModalProps> = ({
  plan: initialPlan,
  allPlans = [],
  onSavePayment,
  onClose,
}) => {
  // If plan is provided, use it; otherwise use the first plan with remaining debt or first plan
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    initialPlan?.id || (allPlans.find(p => p.remaining_amount > 0)?.id || allPlans[0]?.id || '')
  );

  const [studentSearch, setStudentSearch] = useState<string>('');
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);

  const currentPlan = initialPlan || allPlans.find(p => p.id === selectedPlanId);

  // Find first unpaid or pending installment, or default to first
  const pendingItem = currentPlan?.schedules.find(s => s.status === 'overdue') || 
                      currentPlan?.schedules.find(s => s.status === 'pending') || 
                      currentPlan?.schedules[0];

  const [selectedScheduleId, setSelectedScheduleId] = useState<string>(pendingItem ? pendingItem.id : '');
  const [customAmount, setCustomAmount] = useState<number>(pendingItem ? pendingItem.amount : 0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [payerName, setPayerName] = useState<string>(currentPlan?.student_name || '');
  const [paymentDate, setPaymentDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [receiptNumber, setReceiptNumber] = useState<string>(`RCP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
  const [transactionId, setTransactionId] = useState<string>(`CSH-${Math.floor(100000 + Math.random() * 900000)}`);
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync state if currentPlan changes (e.g. user selects different student)
  useEffect(() => {
    if (currentPlan) {
      const nextPending = currentPlan.schedules.find(s => s.status === 'overdue') || 
                          currentPlan.schedules.find(s => s.status === 'pending') || 
                          currentPlan.schedules[0];
      if (nextPending) {
        setSelectedScheduleId(nextPending.id);
        setCustomAmount(nextPending.amount > 0 ? nextPending.amount : currentPlan.remaining_amount);
      }
      setPayerName(currentPlan.student_name);
    }
  }, [currentPlan?.id]);

  // Update transaction ID prefix when method changes
  const handleMethodChange = (m: PaymentMethod) => {
    setPaymentMethod(m);
    const prefix = m === 'cash' ? 'CSH' :
                   m === 'card' ? 'TRM' :
                   m === 'click' ? 'CLK' :
                   m === 'payme' ? 'PAY' :
                   m === 'uzum' ? 'UZM' : 'BNK';
    setTransactionId(`${prefix}-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const handleScheduleSelect = (id: string) => {
    setSelectedScheduleId(id);
    const item = currentPlan?.schedules.find(s => s.id === id);
    if (item) {
      setCustomAmount(item.amount);
    }
  };

  const handleSelectStudent = (planItem: StudentPaymentPlan) => {
    setSelectedPlanId(planItem.id);
    setIsStudentDropdownOpen(false);
    setStudentSearch('');
  };

  const filteredStudents = allPlans.filter(p => 
    p.student_name.toLowerCase().includes(studentSearch.toLowerCase()) ||
    p.group_name.toLowerCase().includes(studentSearch.toLowerCase()) ||
    (p.student_phone && p.student_phone.includes(studentSearch))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPlan) return;
    if (!customAmount || customAmount <= 0) return;

    // Trigger celebration confetti!
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Clone plan and update target schedule
    const updatedSchedules = currentPlan.schedules.map(sch => {
      if (sch.id === selectedScheduleId) {
        return {
          ...sch,
          amount: customAmount,
          status: 'paid' as const,
          paid_date: paymentDate,
          payment_method: paymentMethod,
          transaction_id: transactionId,
          receipt_no: receiptNumber,
          notes: notes || "To'lov qabul qilindi",
        };
      }
      return sch;
    });

    const newPaidAmount = updatedSchedules.filter(s => s.status === 'paid').reduce((acc, curr) => acc + curr.amount, 0);
    const newRemaining = Math.max(0, currentPlan.final_total_fee - newPaidAmount);
    const hasOverdue = updatedSchedules.some(s => s.status === 'overdue');

    const updatedOverallStatus = newRemaining === 0 ? 'paid' : hasOverdue ? 'overdue' : 'partial';

    const updatedPlan: StudentPaymentPlan = {
      ...currentPlan,
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

  if (!currentPlan && allPlans.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4.5 bg-linear-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md shadow-xs">
              <DollarSign className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h2 className="font-black text-base flex items-center gap-2">
                <span>To'lov Qabul Qilish (Kassa)</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-100 text-[10px] font-extrabold uppercase border border-emerald-300/30">
                  Kassa Operatsiyasi
                </span>
              </h2>
              <p className="text-xs text-emerald-100 mt-0.5">
                {currentPlan ? `${currentPlan.student_name} • ${currentPlan.group_name}` : "O'quvchini tanlang"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-emerald-100 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4.5">
          {/* If opened without a specific plan, show searchable student selector */}
          {!initialPlan && allPlans.length > 0 && (
            <div className="relative">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                O'quvchini Tanlang (Qidiruv):
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ism, telefon yoki guruh bo'yicha qidiring..."
                  value={studentSearch || (currentPlan ? `${currentPlan.student_name} (${currentPlan.group_name})` : '')}
                  onFocus={() => {
                    setIsStudentDropdownOpen(true);
                    setStudentSearch('');
                  }}
                  onChange={(e) => {
                    setStudentSearch(e.target.value);
                    setIsStudentDropdownOpen(true);
                  }}
                  className="w-full px-4 py-2.5 pl-10 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-hidden"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>

              {isStudentDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl z-30 max-h-56 overflow-y-auto p-1.5 space-y-1">
                  {filteredStudents.length === 0 ? (
                    <div className="p-3 text-xs text-slate-400 text-center">O'quvchi topilmadi</div>
                  ) : (
                    filteredStudents.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectStudent(p)}
                        className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between text-xs transition cursor-pointer ${
                          p.id === currentPlan?.id ? 'bg-emerald-50 text-emerald-900 font-extrabold' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-900">{p.student_name}</div>
                          <div className="text-[11px] text-slate-500">{p.group_name} • {p.student_phone || p.student_email}</div>
                        </div>
                        <div className="text-right">
                          <span className={`text-xs font-extrabold ${p.remaining_amount > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                            {p.remaining_amount > 0 ? `${p.remaining_amount.toLocaleString()} UZS qarz` : "To'langan ✓"}
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* Quick summary financial card */}
          {currentPlan && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-white rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Jami To'lov</span>
                <span className="font-black text-slate-900 text-sm mt-0.5">
                  {currentPlan.final_total_fee.toLocaleString()} UZS
                </span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">To'langan</span>
                <span className="font-extrabold text-emerald-600 text-sm mt-0.5">
                  {currentPlan.paid_amount.toLocaleString()} UZS
                </span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Qoldiq Qarzdorlik</span>
                <span className={`font-black text-sm mt-0.5 ${currentPlan.remaining_amount > 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                  {currentPlan.remaining_amount.toLocaleString()} UZS
                </span>
              </div>
            </div>
          )}

          {/* Installment selector */}
          {currentPlan && (
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                To'lov Bosqichi / Oyi:
              </label>
              <select
                value={selectedScheduleId}
                onChange={(e) => handleScheduleSelect(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-hidden cursor-pointer"
              >
                {currentPlan.schedules.map((sch) => (
                  <option key={sch.id} value={sch.id}>
                    {sch.title} — {sch.amount.toLocaleString()} UZS ({
                      sch.status === 'paid' ? "To'langan ✓" : 
                      sch.status === 'overdue' ? "⚠️ Muddati o'tgan" : "Kutilmoqda"
                    })
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Amount field & Quick preset chips */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                To'lov summasi (UZS):
              </label>
              {currentPlan && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      const item = currentPlan.schedules.find(s => s.id === selectedScheduleId);
                      if (item) setCustomAmount(item.amount);
                    }}
                    className="px-2 py-0.5 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[10px] transition cursor-pointer"
                  >
                    Navbatdagi summa
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomAmount(currentPlan.remaining_amount)}
                    className="px-2 py-0.5 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-[10px] transition cursor-pointer"
                  >
                    Barcha qoldiq ({currentPlan.remaining_amount.toLocaleString()})
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(Number(e.target.value))}
                required
                className="w-full px-4 py-2.5 pl-10 bg-slate-50 border border-slate-300 rounded-xl text-base font-black text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-hidden"
              />
              <Banknote className="w-5 h-5 text-slate-400 absolute left-3 top-3" />
            </div>

            {/* Quick sum chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[200000, 350000, 400000, 500000, 1000000, 1500000].map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setCustomAmount(val)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition cursor-pointer ${
                    customAmount === val
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  +{val.toLocaleString()} UZS
                </button>
              ))}
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              To'lov Usulini Tanlang:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'cash', name: '💵 Naqd pul', desc: 'Kassaga qabul qilindi' },
                { id: 'card', name: '💳 Terminal (Karta)', desc: 'Uzcard / Humo' },
                { id: 'click', name: '🟡 Click', desc: 'Click ilovasi orqali' },
                { id: 'payme', name: '🔵 Payme', desc: 'Payme ilovasi orqali' },
                { id: 'uzum', name: '🟣 Uzum Bank', desc: 'Uzum to\'lovi' },
                { id: 'bank_transfer', name: '🏛️ Bank hisobiga', desc: 'Bank o\'tkazmasi' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleMethodChange(m.id as PaymentMethod)}
                  className={`p-2.5 rounded-xl text-left border transition cursor-pointer ${
                    paymentMethod === m.id
                      ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500 font-bold'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{m.name}</div>
                  <div className="text-[10px] text-slate-500">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Grid: Payment Date, Payer Name, Txn Ref */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                To'lov Sanasi:
              </label>
              <input
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 outline-hidden"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                To'lovchi F.I.Sh.:
              </label>
              <input
                type="text"
                value={payerName}
                onChange={(e) => setPayerName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 outline-hidden"
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
              Qo'shimcha Qayd / Izoh (ixtiyoriy):
            </label>
            <input
              type="text"
              placeholder="Masalan: Ota-onasi tomonidan naqd to'landi"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 outline-hidden"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 transition cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              disabled={isSuccess || !customAmount || customAmount <= 0}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-md shadow-emerald-600/20 transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 animate-bounce text-emerald-200" />
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
