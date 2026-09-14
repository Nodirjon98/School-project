import React, { useState, useEffect } from 'react';
import { 
  CreditCard, DollarSign, Search, Download, Plus, CheckCircle2, 
  Clock, AlertTriangle, User, Calendar, 
  FileText, Percent, Banknote, Sparkles
} from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { StudentPaymentPlan, PaymentScheduleItem, PaymentStatus, PaymentPlanType, PaymentMethod } from '../../types';
import { getStoredStudentPayments, saveStoredStudentPayments } from '../../data/paymentAndAnalyticsData';
import { PaymentReceiptModal } from '../../components/payments/PaymentReceiptModal';
import { ReceivePaymentModal } from '../../components/payments/ReceivePaymentModal';
import { CustomizeScheduleModal } from '../../components/payments/CustomizeScheduleModal';
import { Modal } from '../../components/common/Modal';

export const PaymentManagementPage: React.FC = () => {
  const { students, groups } = useLMSData();
  const [plans, setPlans] = useState<StudentPaymentPlan[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [groupFilter, setGroupFilter] = useState<string>('all');
  const [methodFilter, setMethodFilter] = useState<string>('all');

  // Modals state
  const [selectedPlanForReceipt, setSelectedPlanForReceipt] = useState<{ plan: StudentPaymentPlan; item: PaymentScheduleItem } | null>(null);
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState<StudentPaymentPlan | null>(null);
  const [selectedPlanForCustomize, setSelectedPlanForCustomize] = useState<StudentPaymentPlan | null>(null);
  const [isCreatePlanModalOpen, setIsCreatePlanModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Plan Form States
  const [newPlanStudentId, setNewPlanStudentId] = useState<string>('');
  const [newPlanCourseTitle, setNewPlanCourseTitle] = useState<string>('General English & IELTS');
  const [newPlanMonthlyFee, setNewPlanMonthlyFee] = useState<number>(800000);
  const [newPlanInstallments, setNewPlanInstallments] = useState<number>(3);
  const [newPlanDiscountPercent, setNewPlanDiscountPercent] = useState<number>(0);
  const [newPlanDiscountReason, setNewPlanDiscountReason] = useState<string>('');

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
    showToast(`To'lov muvaffaqiyatli qabul qilindi! Kvitansiya: ${paidItem.receipt_no}`);
    setSelectedPlanForReceipt({ plan: updatedPlan, item: paidItem });
  };

  const handleSaveCustomSchedule = (updatedPlan: StudentPaymentPlan) => {
    const nextPlans = plans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setSelectedPlanForCustomize(null);
    showToast(`${updatedPlan.student_name} uchun to'lov grafigi yangilandi!`);
  };

  const handleCreateNewPaymentPlan = (e: React.FormEvent) => {
    e.preventDefault();
    const targetStudent = students.find(s => s.id === newPlanStudentId);
    if (!targetStudent) {
      alert("Iltimos, o'quvchini tanlang");
      return;
    }

    const studentGroup = groups.find(g => g.id === targetStudent.group_id) || groups[0];
    const baseTotal = newPlanMonthlyFee * newPlanInstallments;
    const discountAmount = Math.round((baseTotal * newPlanDiscountPercent) / 100);
    const finalTotal = baseTotal - discountAmount;
    const installmentAmount = Math.round(finalTotal / newPlanInstallments);

    const now = new Date();
    const schedules: PaymentScheduleItem[] = [];

    for (let i = 1; i <= newPlanInstallments; i++) {
      const dueDate = new Date(now.getFullYear(), now.getMonth() + (i - 1), 10);
      schedules.push({
        id: `sch-${Date.now()}-${i}`,
        installment_number: i,
        title: `${i}-oy to'lovi`,
        amount: installmentAmount,
        due_date: dueDate.toISOString().split('T')[0],
        status: 'pending',
      });
    }

    const newPlan: StudentPaymentPlan = {
      id: `plan-${Date.now()}`,
      student_id: targetStudent.id,
      student_name: targetStudent.full_name,
      student_phone: targetStudent.phone || '+998 90 000 00 00',
      student_email: targetStudent.email,
      group_id: studentGroup.id,
      group_name: studentGroup.name,
      course_title: newPlanCourseTitle,
      plan_type: newPlanInstallments === 1 ? 'full_course' : 'monthly',
      base_monthly_fee: newPlanMonthlyFee,
      total_course_fee: baseTotal,
      discount_percent: newPlanDiscountPercent,
      discount_reason: newPlanDiscountReason || (newPlanDiscountPercent > 0 ? 'Chegirma' : undefined),
      final_total_fee: finalTotal,
      paid_amount: 0,
      remaining_amount: finalTotal,
      overall_status: 'pending',
      next_due_date: schedules[0]?.due_date || new Date().toISOString().split('T')[0],
      created_at: new Date().toISOString(),
      schedules,
    };

    const nextPlans = [newPlan, ...plans];
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setIsCreatePlanModalOpen(false);
    showToast(`✅ "${targetStudent.full_name}" uchun ${finalTotal.toLocaleString()} UZS to'lov rejasi ochildi!`);
    setNewPlanStudentId('');
  };

  // Cash vs Card breakdown calculations
  let totalCashPaid = 0;
  let totalCardOrDigitalPaid = 0;

  plans.forEach(p => {
    p.schedules.forEach(s => {
      if (s.status === 'paid') {
        if (s.payment_method === 'cash') {
          totalCashPaid += s.amount;
        } else {
          totalCardOrDigitalPaid += s.amount;
        }
      }
    });
  });

  const totalExpected = plans.reduce((acc, p) => acc + p.final_total_fee, 0);
  const totalPaid = plans.reduce((acc, p) => acc + p.paid_amount, 0);
  const totalRemaining = plans.reduce((acc, p) => acc + p.remaining_amount, 0);
  const totalOverdue = plans.filter(p => p.overall_status === 'overdue').reduce((acc, p) => acc + p.remaining_amount, 0);
  const currentMonthExpected = plans.reduce((acc, p) => {
    const firstSch = p.schedules[0];
    return acc + (firstSch ? firstSch.amount : p.base_monthly_fee);
  }, 0);
  const collectionRate = totalExpected > 0 ? Math.round((totalPaid / totalExpected) * 100) : 0;

  // Filter plans
  const filteredPlans = plans.filter(p => {
    const matchesSearch = p.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.group_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.student_phone && p.student_phone.includes(searchQuery));
    const matchesStatus = statusFilter === 'all' || p.overall_status === statusFilter;
    const matchesGroup = groupFilter === 'all' || p.group_id === groupFilter;

    let matchesMethod = true;
    if (methodFilter === 'cash') {
      matchesMethod = p.schedules.some(s => s.status === 'paid' && s.payment_method === 'cash');
    } else if (methodFilter === 'card') {
      matchesMethod = p.schedules.some(s => s.status === 'paid' && s.payment_method === 'card');
    } else if (methodFilter === 'digital') {
      matchesMethod = p.schedules.some(s => s.status === 'paid' && s.payment_method && ['click', 'payme', 'uzum', 'bank_transfer'].includes(s.payment_method));
    }

    return matchesSearch && matchesStatus && matchesGroup && matchesMethod;
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
            Naqd pul va Plastik karta (Uzcard / Humo) tushumlarini qayd etish, to'lov rejalarini shakllantirish hamda QR-kvitansiyalar.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsCreatePlanModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Yangi To'lov Rejasi Ochish</span>
          </button>

          <button
            onClick={() => {
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
            <span>Hisobot (CSV)</span>
          </button>
        </div>
      </div>

      {/* 5 KPI Cards: Cash vs Card breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Jami Tushum:</span>
            <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl font-black text-slate-950">
              {totalPaid.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div className="mt-1 text-[10px] font-semibold text-emerald-700">
            Jami qabul qilingan
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">💵 Naqd Pul (Kassa):</span>
            <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700">
              <Banknote className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl font-black text-emerald-950">
              {totalCashPaid.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 ml-1">UZS</span>
          </div>
          <div className="mt-1 text-[10px] font-bold text-emerald-800">
            Kassaga naqd kelib tushgan
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider">💳 Plastik Karta & Terminal:</span>
            <div className="p-1.5 rounded-xl bg-indigo-100 text-indigo-700">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl font-black text-indigo-950">
              {totalCardOrDigitalPaid.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-indigo-700 ml-1">UZS</span>
          </div>
          <div className="mt-1 text-[10px] font-bold text-indigo-800">
            Uzcard, Humo va ilovalar
          </div>
        </div>

        {/* Card 4: Muddati O'tgan Qarzdorlik (Only red if totalOverdue > 0) */}
        <div className={`p-4 rounded-2xl border shadow-2xs ${
          totalOverdue > 0 
            ? 'bg-rose-50/30 border-rose-300 text-rose-700' 
            : 'bg-white border-slate-200/90'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-bold uppercase tracking-wider ${
              totalOverdue > 0 ? 'text-rose-700' : 'text-slate-500'
            }`}>
              Muddati O'tgan Qarzdorlik:
            </span>
            <div className={`p-1.5 rounded-xl ${
              totalOverdue > 0 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-50 text-emerald-600'
            }`}>
              {totalOverdue > 0 ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
            </div>
          </div>
          <div className="mt-2">
            <span className={`text-xl font-black ${
              totalOverdue > 0 ? 'text-rose-700' : 'text-slate-950'
            }`}>
              {totalOverdue.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div className={`mt-1 text-[10px] font-semibold ${
            totalOverdue > 0 ? 'text-rose-600' : 'text-emerald-700'
          }`}>
            {totalOverdue > 0 ? 'Muddati o\'tgan to\'lovlar' : 'Muddati o\'tgan qarzdorlik yo\'q ✓'}
          </div>
        </div>

        {/* Card 5: Kutilayotgan Oylik Reja */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Kutilayotgan Tushum:</span>
            <div className="p-1.5 rounded-xl bg-indigo-50 text-indigo-600">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl font-black text-slate-950">
              {currentMonthExpected.toLocaleString()}
            </span>
            <span className="text-[11px] font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div className="mt-1 text-[10px] font-semibold text-slate-500">
            Joriy oy rejasi • Kurs: {totalExpected.toLocaleString()} UZS
          </div>
        </div>
      </div>

      {/* Informative Guidance Banner */}
      <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-4 flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-xs">
          <h4 className="font-extrabold text-indigo-950">
            Kassa va To'lovlar Tizimi — Haqiqiy Hisob-kitob
          </h4>
          <p className="text-slate-600 mt-0.5 leading-relaxed">
            Hozircha yangi o'quv oyi boshlanish arafasida bo'lganligi sababli hech qanday muddati o'tgan qarzdorlik yo'q (<strong>0 UZS</strong>). O'quvchilar naqd pul yoki plastik karta orqali to'lov topshirishlari bilanoq, har bir to'lov bo'yicha <strong>"To'lov Qabul Qilish"</strong> tugmasini bosib tizimga kiritishingiz va QR-kodli rasmiy to'lov cheki (kvitansiya) chiqarib berishingiz mumkin.
          </p>
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

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto text-xs">
          <select
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 outline-hidden cursor-pointer"
          >
            <option value="all">Barcha to'lov turlari</option>
            <option value="cash">💵 Naqd pul tushumlari</option>
            <option value="card">💳 Plastik karta (Uzcard/Humo)</option>
            <option value="digital">📱 Click / Payme / Uzum</option>
          </select>

          <select
            value={groupFilter}
            onChange={(e) => setGroupFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 outline-hidden cursor-pointer"
          >
            <option value="all">Barcha guruhlar</option>
            {uniqueGroups.map((g: any) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 outline-hidden cursor-pointer"
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
            <p className="text-xs text-slate-500 mt-1">
              Yangi to'lov rejasini ochish uchun yuqoridagi <strong>"+ Yangi To'lov Rejasi Ochish"</strong> tugmasidan foydalaning.
            </p>
          </div>
        ) : (
          filteredPlans.map((plan) => {
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
                    {plan.schedules.map((item) => {
                      const methodLabel = 
                        item.payment_method === 'cash' ? '💵 Naqd pul' :
                        item.payment_method === 'card' ? '💳 Plastik karta' :
                        item.payment_method === 'click' ? '🟡 Click' :
                        item.payment_method === 'payme' ? '🔵 Payme' :
                        item.payment_method === 'uzum' ? '🟣 Uzum Bank' :
                        item.payment_method === 'bank_transfer' ? '🏛️ Bank' : '';

                      return (
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
                            <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                              <span>Sana: {item.paid_date}</span>
                              {methodLabel && (
                                <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-800 font-bold">
                                  {methodLabel}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal: Create New Payment Plan */}
      <Modal
        isOpen={isCreatePlanModalOpen}
        onClose={() => setIsCreatePlanModalOpen(false)}
        title="O'quvchiga Yangi To'lov Rejasini Ochish"
      >
        <form onSubmit={handleCreateNewPaymentPlan} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              O'quvchini tanlang:
            </label>
            <select
              required
              value={newPlanStudentId}
              onChange={(e) => setNewPlanStudentId(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-hidden focus:bg-white"
            >
              <option value="">O'quvchini tanlang...</option>
              {students.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.full_name} ({st.level || 'B1'}) • {st.group_name || 'Guruhsiz'} • {st.phone || st.email}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Kurs / Yo'nalish nomi:
            </label>
            <input
              type="text"
              required
              value={newPlanCourseTitle}
              onChange={(e) => setNewPlanCourseTitle(e.target.value)}
              placeholder="Masalan: IELTS Intensive 7.5+ Target"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Oylik to'lov summasi (UZS):
              </label>
              <input
                type="number"
                required
                value={newPlanMonthlyFee}
                onChange={(e) => setNewPlanMonthlyFee(Number(e.target.value))}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                To'lov oylari / davomiyligi:
              </label>
              <select
                value={newPlanInstallments}
                onChange={(e) => setNewPlanInstallments(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-hidden"
              >
                <option value={1}>1 oy (Bir oylik to'lov)</option>
                <option value={2}>2 oy</option>
                <option value={3}>3 oy (Choraklik to'lov)</option>
                <option value={6}>6 oy (Yarim yillik)</option>
                <option value={9}>9 oy (To'liq akademik yil)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Grant / Chegirma (%):
              </label>
              <select
                value={newPlanDiscountPercent}
                onChange={(e) => setNewPlanDiscountPercent(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-hidden"
              >
                <option value={0}>0% - Chegirmasiz</option>
                <option value={10}>10% Chegirma</option>
                <option value={15}>15% Chegirma</option>
                <option value={20}>20% Chegirma</option>
                <option value={50}>50% Yarim Grant</option>
                <option value={100}>100% To'liq Grant</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Chegirma sababi:
              </label>
              <input
                type="text"
                value={newPlanDiscountReason}
                onChange={(e) => setNewPlanDiscountReason(e.target.value)}
                placeholder="Iqtidorli o'quvchi / A'lochi"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Calculated Summary */}
          <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-2xl text-xs space-y-1">
            <div className="flex justify-between text-slate-600">
              <span>Boshlang'ich umumiy narx:</span>
              <span className="font-bold">{(newPlanMonthlyFee * newPlanInstallments).toLocaleString()} UZS</span>
            </div>
            {newPlanDiscountPercent > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Chegirma miqdori ({newPlanDiscountPercent}%):</span>
                <span>-{Math.round(((newPlanMonthlyFee * newPlanInstallments) * newPlanDiscountPercent) / 100).toLocaleString()} UZS</span>
              </div>
            )}
            <div className="flex justify-between text-indigo-950 font-black pt-1 border-t border-indigo-200 text-sm">
              <span>Yakuniy to'lanadigan summa:</span>
              <span>
                {Math.round((newPlanMonthlyFee * newPlanInstallments) * (1 - newPlanDiscountPercent / 100)).toLocaleString()} UZS
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsCreatePlanModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              disabled={!newPlanStudentId}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition disabled:opacity-50 cursor-pointer"
            >
              Rejani Tasdiqlash ✓
            </button>
          </div>
        </form>
      </Modal>

      {/* Existing Modals */}
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
