import React, { useState, useEffect } from 'react';
import { 
  CreditCard, DollarSign, Search, Filter, Download, Plus, CheckCircle2, 
  Clock, AlertTriangle, ArrowUpRight, ChevronRight, User, Calendar, 
  FileText, Percent, RefreshCw, Send, Check
} from 'lucide-react';
import { StudentPaymentPlan, PaymentScheduleItem, PaymentStatus } from '../../types';
import { getStoredStudentPayments, saveStoredStudentPayments } from '../../data/paymentAndAnalyticsData';
import { PaymentReceiptModal } from '../../components/payments/PaymentReceiptModal';
import { ReceivePaymentModal } from '../../components/payments/ReceivePaymentModal';
import { CustomizeScheduleModal } from '../../components/payments/CustomizeScheduleModal';

export const PaymentManagementPage: React.FC = () => {
  const [plans, setPlans] = useState<StudentPaymentPlan[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [groupFilter, setGroupFilter] = useState<string>('all');

  // Modals state
  const [selectedPlanForReceipt, setSelectedPlanForReceipt] = useState<{ plan: StudentPaymentPlan; item: PaymentScheduleItem } | null>(null);
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState<StudentPaymentPlan | null>(null);
  const [selectedPlanForCustomize, setSelectedPlanForCustomize] = useState<StudentPaymentPlan | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setPlans(getStoredStudentPayments());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSavePayment = (updatedPlan: StudentPaymentPlan, paidItem: PaymentScheduleItem) => {
    const nextPlans = plans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setSelectedPlanForPayment(null);
    showToast(`To'lov muvaffaqiyatli qabul qilindi! Kvitansiya raqami: ${paidItem.receipt_no}`);
    // Open receipt modal right away
    setSelectedPlanForReceipt({ plan: updatedPlan, item: paidItem });
  };

  const handleSaveCustomSchedule = (updatedPlan: StudentPaymentPlan) => {
    const nextPlans = plans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setSelectedPlanForCustomize(null);
    showToast(`${updatedPlan.student_name} uchun to'lov grafigi yangilandi!`);
  };

  // KPI calculations
  const totalExpected = plans.reduce((acc, p) => acc + p.final_total_fee, 0);
  const totalPaid = plans.reduce((acc, p) => acc + p.paid_amount, 0);
  const totalRemaining = plans.reduce((acc, p) => acc + p.remaining_amount, 0);
  const totalOverdue = plans.filter(p => p.overall_status === 'overdue').reduce((acc, p) => acc + p.remaining_amount, 0);
  const collectionRate = totalExpected > 0 ? Math.round((totalPaid / totalExpected) * 100) : 0;

  // Filter plans
  const filteredPlans = plans.filter(p => {
    const matchesSearch = p.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.group_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.student_phone && p.student_phone.includes(searchQuery));
    const matchesStatus = statusFilter === 'all' || p.overall_status === statusFilter;
    const matchesGroup = groupFilter === 'all' || p.group_id === groupFilter;
    return matchesSearch && matchesStatus && matchesGroup;
  });

  const uniqueGroups = Array.from(new Set(plans.map(p => JSON.stringify({ id: p.group_id, name: p.group_name }))))
    .map(s => JSON.parse(s));

  return (
    <div className="space-y-8 pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
              Moliya & Billing
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500">To'lovlar boshqaruvi</span>
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight">
            O'quvchilar To'lov Grafigi & Kassa Tizimi
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Moslashuvchan to'lov rejalari, grant va chegirmalarni hisoblash, Click / Payme / Uzum integratsiyasi hamda rasmiy QR-kvitansiyalar.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              // Export to CSV
              const headers = "ID,Talaba,Guruh,Jami summa,To'langan,Qoldiq,Holat\n";
              const rows = plans.map(p => `"${p.id}","${p.student_name}","${p.group_name}",${p.final_total_fee},${p.paid_amount},${p.remaining_amount},"${p.overall_status}"`).join('\n');
              const blob = new Blob([headers + rows], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `premier_payments_${new Date().toISOString().split('T')[0]}.csv`;
              a.click();
              showToast("To'lovlar ro'yxati CSV formatida yuklab olindi!");
            }}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Hisobotni Yuklash (CSV)</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jami Qabul Qilingan:</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-950">
              {totalPaid.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Kassa va hisob-raqamga tushgan</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kutilayotgan Qoldiq:</span>
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-950">
              {totalRemaining.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div className="mt-2 text-[11px] font-semibold text-slate-500">
            Jami reja: {totalExpected.toLocaleString()} UZS
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-rose-200/80 shadow-2xs bg-rose-50/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Muddati O'tgan:</span>
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-rose-700">
              {totalOverdue.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-rose-600 ml-1">UZS</span>
          </div>
          <div className="mt-2 text-[11px] font-semibold text-rose-600">
            Kechikkan o'quvchilarga eslatma yuborildi
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">To'lov Intizomi:</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-950">{collectionRate}%</span>
            <span className="text-xs font-semibold text-slate-500">yig'ildi</span>
          </div>
          {/* Progress bar */}
          <div className="mt-2 w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500" 
              style={{ width: `${collectionRate}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="O'quvchi ismi, guruhi yoki telefoni..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-hidden"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={groupFilter}
            onChange={(e) => setGroupFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-hidden cursor-pointer"
          >
            <option value="all">Barcha guruhlar</option>
            {uniqueGroups.map((g: any) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-hidden cursor-pointer"
          >
            <option value="all">Barcha holatlar</option>
            <option value="paid">To'liq to'langan ✓</option>
            <option value="partial">Qisman to'langan</option>
            <option value="overdue">Muddati o'tgan ⚠️</option>
            <option value="pending">Kutilmoqda</option>
          </select>
        </div>
      </div>

      {/* Main Payment Plans List */}
      <div className="space-y-4">
        {filteredPlans.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center">
            <CreditCard className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-extrabold text-slate-800 text-base">Hech qanday to'lov rejasi topilmadi</h3>
            <p className="text-xs text-slate-500 mt-1">Qidiruv parametrlarini o'zgartiring yoki filtrlarni tozalang.</p>
          </div>
        ) : (
          filteredPlans.map((plan) => {
            const hasOverdue = plan.schedules.some(s => s.status === 'overdue');
            const percentPaid = Math.round((plan.paid_amount / plan.final_total_fee) * 100);

            return (
              <div
                key={plan.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all overflow-hidden"
              >
                {/* Plan Header Info */}
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-extrabold text-sm shrink-0">
                      {plan.student_name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-base text-slate-900">{plan.student_name}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          plan.overall_status === 'paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' :
                          plan.overall_status === 'overdue' ? 'bg-rose-50 text-rose-700 border border-rose-300' :
                          'bg-amber-50 text-amber-700 border border-amber-300'
                        }`}>
                          {plan.overall_status === 'paid' ? "To'liq to'langan" :
                           plan.overall_status === 'overdue' ? "Muddati o'tgan" : "Qisman to'langan"}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">{plan.group_name}</span>
                        <span>•</span>
                        <span>{plan.course_title}</span>
                        {plan.student_phone && (
                          <>
                            <span>•</span>
                            <span className="font-mono">{plan.student_phone}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Financial Stats for this student */}
                  <div className="flex items-center gap-6 text-right">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Jami summa:</span>
                      <span className="font-extrabold text-slate-900 text-sm">{plan.final_total_fee.toLocaleString()} UZS</span>
                      {plan.discount_percent > 0 && (
                        <span className="text-[10px] font-bold text-emerald-600 block">
                          -{plan.discount_percent}% ({plan.discount_reason || 'Grant'})
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">To'langan:</span>
                      <span className="font-extrabold text-emerald-600 text-sm">{plan.paid_amount.toLocaleString()} UZS</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Qoldiq:</span>
                      <span className={`font-extrabold text-sm ${plan.remaining_amount > 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                        {plan.remaining_amount.toLocaleString()} UZS
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedPlanForPayment(plan)}
                        className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold shadow-2xs transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>To'lov Qabul Qilish</span>
                      </button>

                      <button
                        onClick={() => setSelectedPlanForCustomize(plan)}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                        title="To'lov grafigi va muddatlarini moslash"
                      >
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>Grafigini Moslash</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Installments Table / Breakdown */}
                <div className="bg-slate-50/70 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      To'lov Bosqichlari ({plan.schedules.length} ta oy / to'lov):
                    </span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500 font-medium">To'lov progressi:</span>
                      <span className="font-bold text-slate-800">{percentPaid}%</span>
                      <div className="w-24 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${percentPaid}%` }} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {plan.schedules.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          item.status === 'paid'
                            ? 'bg-white border-emerald-200/80 shadow-2xs'
                            : item.status === 'overdue'
                            ? 'bg-rose-50/50 border-rose-300'
                            : 'bg-white border-slate-200 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-xs font-extrabold text-slate-900 block">{item.title}</span>
                            <span className="text-xs text-slate-500 block mt-0.5">
                              Muddat: <strong className="text-slate-700">{item.due_date}</strong>
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${
                            item.status === 'paid' ? 'bg-emerald-100 text-emerald-800' :
                            item.status === 'overdue' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {item.status === 'paid' ? 'To\'langan ✓' : item.status === 'overdue' ? 'O\'tgan ⚠️' : 'Kutilmoqda'}
                          </span>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-sm font-black text-slate-900">
                            {item.amount.toLocaleString()} UZS
                          </span>

                          {item.status === 'paid' ? (
                            <button
                              onClick={() => setSelectedPlanForReceipt({ plan, item })}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>Chek / Kvitansiya</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => setSelectedPlanForPayment(plan)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                            >
                              <DollarSign className="w-3.5 h-3.5" />
                              <span>To'lash</span>
                            </button>
                          )}
                        </div>

                        {item.paid_date && (
                          <div className="mt-1 text-[10px] text-slate-400 font-medium">
                            To'langan: {item.paid_date} ({item.payment_method?.toUpperCase()})
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modals */}
      {selectedPlanForReceipt && (
        <PaymentReceiptModal
          plan={selectedPlanForReceipt.plan}
          item={selectedPlanForReceipt.item}
          onClose={() => setSelectedPlanForReceipt(null)}
        />
      )}

      {selectedPlanForPayment && (
        <ReceivePaymentModal
          plan={selectedPlanForPayment}
          onSavePayment={handleSavePayment}
          onClose={() => setSelectedPlanForPayment(null)}
        />
      )}

      {selectedPlanForCustomize && (
        <CustomizeScheduleModal
          plan={selectedPlanForCustomize}
          onSave={handleSaveCustomSchedule}
          onClose={() => setSelectedPlanForCustomize(null)}
        />
      )}
    </div>
  );
};
