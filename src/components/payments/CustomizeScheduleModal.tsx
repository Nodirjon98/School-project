import React, { useState } from 'react';
import { X, Calendar, Plus, Trash2, CheckCircle2, Percent, Calculator } from 'lucide-react';
import { StudentPaymentPlan, PaymentScheduleItem, PaymentPlanType } from '../../types';

interface CustomizeScheduleModalProps {
  plan: StudentPaymentPlan;
  onSave: (updatedPlan: StudentPaymentPlan) => void;
  onClose: () => void;
}

export const CustomizeScheduleModal: React.FC<CustomizeScheduleModalProps> = ({
  plan,
  onSave,
  onClose,
}) => {
  const [planType, setPlanType] = useState<PaymentPlanType>(plan.plan_type);
  const [discountPercent, setDiscountPercent] = useState<number>(plan.discount_percent);
  const [discountReason, setDiscountReason] = useState<string>(plan.discount_reason || '');
  const [schedules, setSchedules] = useState<PaymentScheduleItem[]>(plan.schedules);

  const calculateTotals = () => {
    const totalOriginal = schedules.reduce((acc, curr) => acc + curr.amount, 0);
    const discountAmount = Math.round(totalOriginal * (discountPercent / 100));
    const finalTotal = Math.max(0, totalOriginal - discountAmount);
    return { totalOriginal, discountAmount, finalTotal };
  };

  const { totalOriginal, discountAmount, finalTotal } = calculateTotals();

  const handleUpdateItem = (id: string, field: keyof PaymentScheduleItem, val: any) => {
    setSchedules(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, [field]: val };
      }
      return item;
    }));
  };

  const handleAddItem = () => {
    const nextNum = schedules.length + 1;
    const newItem: PaymentScheduleItem = {
      id: `sch-${Date.now()}-${nextNum}`,
      installment_number: nextNum,
      title: `${nextNum}-oy to'lovi`,
      amount: 1200000,
      due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 * nextNum).toISOString().split('T')[0],
      status: 'pending'
    };
    setSchedules(prev => [...prev, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    if (schedules.length <= 1) return;
    setSchedules(prev => prev.filter(s => s.id !== id));
  };

  const handleQuickPreset = (type: PaymentPlanType) => {
    setPlanType(type);
    const baseMonthly = plan.base_monthly_fee || 1200000;

    if (type === 'monthly') {
      const today = new Date();
      const generated: PaymentScheduleItem[] = [1, 2, 3].map(monthNum => {
        const d = new Date(today);
        d.setMonth(today.getMonth() + (monthNum - 1));
        return {
          id: `sch-m-${monthNum}-${Date.now()}`,
          installment_number: monthNum,
          title: `${monthNum}-oy to'lovi`,
          amount: baseMonthly,
          due_date: d.toISOString().split('T')[0],
          status: monthNum === 1 && plan.paid_amount >= baseMonthly ? 'paid' : 'pending'
        };
      });
      setSchedules(generated);
    } else if (type === 'full_course') {
      setDiscountPercent(15);
      setDiscountReason("To'liq oldindan to'lov chegirmasi (15%)");
      setSchedules([
        {
          id: `sch-full-${Date.now()}`,
          installment_number: 1,
          title: "To'liq kurs to'lovi",
          amount: baseMonthly * 3,
          due_date: new Date().toISOString().split('T')[0],
          status: 'pending'
        }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paidAmount = schedules.filter(s => s.status === 'paid').reduce((acc, curr) => acc + curr.amount, 0);
    const remaining = Math.max(0, finalTotal - paidAmount);
    const nextPending = schedules.find(s => s.status !== 'paid');

    const updated: StudentPaymentPlan = {
      ...plan,
      plan_type: planType,
      discount_percent: discountPercent,
      discount_reason: discountReason,
      total_course_fee: totalOriginal,
      final_total_fee: finalTotal,
      paid_amount: paidAmount,
      remaining_amount: remaining,
      next_due_date: nextPending ? nextPending.due_date : plan.next_due_date,
      overall_status: remaining === 0 ? 'paid' : schedules.some(s => s.status === 'overdue') ? 'overdue' : 'partial',
      schedules
    };

    onSave(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-base">To'lov Grafigini Moslash & Sozlash</h2>
              <p className="text-xs text-slate-400">{plan.student_name} • {plan.group_name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Preset Buttons */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              To'lov sxemasi andozasi:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleQuickPreset('monthly')}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  planType === 'monthly'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                📅 Oyma-oy (3 oy)
              </button>
              <button
                type="button"
                onClick={() => handleQuickPreset('full_course')}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  planType === 'full_course'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                💎 To'liq kurs (15% chegirma)
              </button>
              <button
                type="button"
                onClick={() => setPlanType('custom')}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  planType === 'custom'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                ⚙️ Maxsus grafik (Erkin)
              </button>
            </div>
          </div>

          {/* Discount Section */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Chegirma / Grant foizi (%):
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(Math.min(100, Math.max(0, Number(e.target.value))))}
                  className="w-full px-3 py-2 pr-8 bg-white border border-slate-300 rounded-xl text-sm font-black text-slate-900 outline-hidden"
                />
                <Percent className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Chegirma sababi / Grant turi:
              </label>
              <input
                type="text"
                placeholder="Masalan: IELTS 7.5+ Grant, Oila a'zosi"
                value={discountReason}
                onChange={(e) => setDiscountReason(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 outline-hidden"
              />
            </div>
          </div>

          {/* Schedule items table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                To'lov Bosqichlari & Muddatlari ({schedules.length} ta):
              </label>
              <button
                type="button"
                onClick={handleAddItem}
                className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Bosqich qo'shish</span>
              </button>
            </div>

            <div className="space-y-3">
              {schedules.map((sch, idx) => (
                <div
                  key={sch.id}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-xl bg-slate-100 font-black text-slate-700 flex items-center justify-center text-xs shrink-0">
                    {idx + 1}
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      value={sch.title}
                      onChange={(e) => handleUpdateItem(sch.id, 'title', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-900 outline-hidden"
                      placeholder="Bosqich nomi"
                    />
                  </div>

                  <div className="w-full sm:w-36">
                    <input
                      type="number"
                      value={sch.amount}
                      onChange={(e) => handleUpdateItem(sch.id, 'amount', Number(e.target.value))}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-900 outline-hidden"
                      placeholder="Summa"
                    />
                  </div>

                  <div className="w-full sm:w-36">
                    <input
                      type="date"
                      value={sch.due_date}
                      onChange={(e) => handleUpdateItem(sch.id, 'due_date', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-700 outline-hidden"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                      sch.status === 'paid' ? 'bg-emerald-100 text-emerald-800' :
                      sch.status === 'overdue' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {sch.status === 'paid' ? "To'langan" : sch.status === 'overdue' ? "O'tgan" : "Kutilmoqda"}
                    </span>
                    {schedules.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(sch.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Summary Calculations */}
          <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100 flex items-center justify-between text-xs">
            <div>
              <span className="text-indigo-900/70 font-medium block">Dastlabki summa:</span>
              <span className="font-bold text-indigo-950">{totalOriginal.toLocaleString()} UZS</span>
            </div>
            {discountPercent > 0 && (
              <div>
                <span className="text-emerald-700 font-medium block">Chegirma ({discountPercent}%):</span>
                <span className="font-bold text-emerald-800">-{discountAmount.toLocaleString()} UZS</span>
              </div>
            )}
            <div>
              <span className="text-indigo-900/70 font-medium block">Yakuniy to'lov:</span>
              <span className="font-black text-indigo-900 text-base">{finalTotal.toLocaleString()} UZS</span>
            </div>
          </div>

          {/* Actions */}
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
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Grafigini Saqlash</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
