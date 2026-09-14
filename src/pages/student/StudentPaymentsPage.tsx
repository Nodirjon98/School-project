import React, { useState, useEffect } from 'react';
import { 
  CreditCard, DollarSign, Calendar, CheckCircle2, Clock, 
  AlertTriangle, FileText, Download, ShieldCheck, QrCode, ArrowRight 
} from 'lucide-react';
import { StudentPaymentPlan, PaymentScheduleItem } from '../../types';
import { getStoredStudentPayments } from '../../data/paymentAndAnalyticsData';
import { PaymentReceiptModal } from '../../components/payments/PaymentReceiptModal';
import { useAuth } from '../../contexts/AuthContext';

export const StudentPaymentsPage: React.FC = () => {
  const { user } = useAuth();
  const [plans, setPlans] = useState<StudentPaymentPlan[]>([]);
  const [selectedReceipt, setSelectedReceipt] = useState<{ plan: StudentPaymentPlan; item: PaymentScheduleItem } | null>(null);

  useEffect(() => {
    setPlans(getStoredStudentPayments());
  }, []);

  // Match current user or default to first plan
  const myPlan = plans.find(p => p.student_email?.toLowerCase() === user?.email?.toLowerCase() || p.student_id === user?.id) || plans[0];

  if (!myPlan) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <CreditCard className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h3 className="font-extrabold text-slate-800">To'lov ma'lumotlari topilmadi</h3>
      </div>
    );
  }

  const percentPaid = Math.round((myPlan.paid_amount / myPlan.final_total_fee) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
            O'quvchi Kabineti
          </span>
          <span className="text-slate-400 text-xs">•</span>
          <span className="text-xs font-semibold text-slate-500">Moliya & To'lovlar</span>
        </div>
        <h1 className="text-2xl font-black text-slate-950 tracking-tight">
          Mening To'lov Grafigim & Kvitansiyalar
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Kurs to'lovlari holati, qoldiq mablag'lar, navbatdagi to'lov sanalari va rasmiy to'lov cheklarini yuklab olish.
        </p>
      </div>

      {/* Main Plan Overview Card */}
      <div className="bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-black uppercase tracking-wider border border-white/10 inline-block mb-3">
              {myPlan.overall_status === 'paid' ? "To'liq to'langan ✓" : "To'lov davom etmoqda"}
            </span>
            <h2 className="text-2xl font-black">{myPlan.course_title}</h2>
            <p className="text-indigo-200 text-sm mt-1">{myPlan.group_name}</p>

            {myPlan.discount_percent > 0 && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <span>🎉 Sizga {myPlan.discount_percent}% grant berilgan: {myPlan.discount_reason}</span>
              </div>
            )}
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 min-w-64 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-indigo-200 font-medium">Jami to'lov:</span>
              <span className="font-extrabold text-sm">{myPlan.final_total_fee.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-emerald-300 font-medium">To'langan:</span>
              <span className="font-extrabold text-emerald-400 text-sm">{myPlan.paid_amount.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-white/10 pt-2">
              <span className="text-rose-200 font-medium">Qoldiq summa:</span>
              <span className="font-black text-rose-300 text-base">{myPlan.remaining_amount.toLocaleString()} UZS</span>
            </div>
            {/* Progress */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] text-indigo-200 font-bold">
                <span>To'lov jarayoni</span>
                <span>{percentPaid}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                <div 
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
                  style={{ width: `${percentPaid}%` }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installments Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 text-base">
            To'lov Rejasi & Muddatlari
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Keyingi to'lov muddati: <strong className="text-slate-900">{myPlan.next_due_date}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {myPlan.schedules.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-3xl border transition-all ${
                item.status === 'paid'
                  ? 'bg-white border-emerald-200 shadow-2xs'
                  : item.status === 'overdue'
                  ? 'bg-rose-50/60 border-rose-300 shadow-2xs'
                  : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-black text-slate-900 block">{item.title}</span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Muddati: <strong className="text-slate-700">{item.due_date}</strong>
                  </span>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase ${
                  item.status === 'paid' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                  item.status === 'overdue' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {item.status === 'paid' ? "To'langan ✓" : item.status === 'overdue' ? "O'tgan ⚠️" : "Kutilmoqda"}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Summa:</span>
                  <span className="text-base font-black text-slate-950">
                    {item.amount.toLocaleString()} UZS
                  </span>
                </div>

                {item.status === 'paid' ? (
                  <button
                    onClick={() => setSelectedReceipt({ plan: myPlan, item })}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Chekni Ko'rish</span>
                  </button>
                ) : (
                  <div className="text-right">
                    <span className="inline-block px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold">
                      Kassa orqali
                    </span>
                  </div>
                )}
              </div>

              {item.paid_date && (
                <div className="mt-2 text-[10px] text-slate-400 font-medium">
                  To'langan sana: {item.paid_date} • {item.payment_method?.toUpperCase()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Official Receipt Modal */}
      {selectedReceipt && (
        <PaymentReceiptModal
          plan={selectedReceipt.plan}
          item={selectedReceipt.item}
          onClose={() => setSelectedReceipt(null)}
        />
      )}
    </div>
  );
};
