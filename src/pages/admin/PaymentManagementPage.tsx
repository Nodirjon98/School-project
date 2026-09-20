import React, { useState, useEffect, useMemo } from 'react';
import { 
  CreditCard, DollarSign, Search, Download, Plus, CheckCircle2, 
  Clock, AlertTriangle, User, Calendar, FileText, Percent, 
  Banknote, Sparkles, Filter, Send, MessageSquare, Phone, 
  ArrowUpDown, SlidersHorizontal, Layers, Table as TableIcon, 
  LayoutGrid, Receipt, BarChart3, RefreshCw, Check, Printer, 
  TrendingUp, Wallet, Smartphone, ShieldCheck, ExternalLink, ChevronRight
} from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { StudentPaymentPlan, PaymentScheduleItem, PaymentStatus, PaymentPlanType, PaymentMethod } from '../../types';
import { 
  getStoredStudentPayments, 
  saveStoredStudentPayments, 
  syncPaymentsWithAllStudents,
  getAllPaymentTransactions,
  PaymentTransactionItem 
} from '../../data/paymentAndAnalyticsData';
import { PaymentReceiptModal } from '../../components/payments/PaymentReceiptModal';
import { ReceivePaymentModal } from '../../components/payments/ReceivePaymentModal';
import { CustomizeScheduleModal } from '../../components/payments/CustomizeScheduleModal';
import { PaymentReminderModal } from '../../components/payments/PaymentReminderModal';
import { StudentContractModal } from '../../components/payments/StudentContractModal';
import { Modal } from '../../components/common/Modal';

type ActiveTab = 'plans' | 'debtors' | 'ledger' | 'groups';
type ViewMode = 'table' | 'cards';

export const PaymentManagementPage: React.FC = () => {
  const { students, groups } = useLMSData();
  const [plans, setPlans] = useState<StudentPaymentPlan[]>([]);
  const [activeTab, setActiveTab] = useState<ActiveTab>('plans');
  const [viewMode, setViewMode] = useState<ViewMode>('table');

  // Search and Filters for Plans
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [groupFilter, setGroupFilter] = useState<string>('all');
  const [methodFilter, setMethodFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'debt_desc' | 'due_date' | 'paid_desc'>('debt_desc');

  // Search and Filters for Transactions Ledger
  const [ledgerSearch, setLedgerSearch] = useState('');
  const [ledgerMethodFilter, setLedgerMethodFilter] = useState<string>('all');

  // Modals state
  const [selectedPlanForReceipt, setSelectedPlanForReceipt] = useState<{ plan: StudentPaymentPlan; item: PaymentScheduleItem } | null>(null);
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState<StudentPaymentPlan | null>(null);
  const [isQuickPayOpen, setIsQuickPayOpen] = useState(false);
  const [selectedPlanForCustomize, setSelectedPlanForCustomize] = useState<StudentPaymentPlan | null>(null);
  const [selectedPlanForReminder, setSelectedPlanForReminder] = useState<{ plan: StudentPaymentPlan; item?: PaymentScheduleItem } | null>(null);
  const [selectedPlanForContract, setSelectedPlanForContract] = useState<StudentPaymentPlan | null>(null);
  const [isCreatePlanModalOpen, setIsCreatePlanModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Plan Form States
  const [newPlanStudentId, setNewPlanStudentId] = useState<string>('');
  const [newPlanCourseTitle, setNewPlanCourseTitle] = useState<string>('General English & IELTS Accelerator');
  const [newPlanMonthlyFee, setNewPlanMonthlyFee] = useState<number>(500000);
  const [newPlanInstallments, setNewPlanInstallments] = useState<number>(3);
  const [newPlanDiscountPercent, setNewPlanDiscountPercent] = useState<number>(0);
  const [newPlanDiscountReason, setNewPlanDiscountReason] = useState<string>('');
  const [newPlanPassportId, setNewPlanPassportId] = useState<string>('');
  const [newPlanParentName, setNewPlanParentName] = useState<string>('');

  // Initial load and sync with registered students
  useEffect(() => {
    if (students && students.length > 0) {
      const synced = syncPaymentsWithAllStudents(students);
      setPlans(synced);
    } else {
      setPlans(getStoredStudentPayments());
    }
  }, [students]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSavePayment = (updatedPlan: StudentPaymentPlan, paidItem: PaymentScheduleItem) => {
    const nextPlans = plans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setSelectedPlanForPayment(null);
    setIsQuickPayOpen(false);
    showToast(`✅ To'lov qabul qilindi! Kvitansiya raqami: ${paidItem.receipt_no}`);
    setSelectedPlanForReceipt({ plan: updatedPlan, item: paidItem });
  };

  const handleSaveCustomSchedule = (updatedPlan: StudentPaymentPlan) => {
    const nextPlans = plans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setSelectedPlanForCustomize(null);
    showToast(`✅ "${updatedPlan.student_name}" uchun to'lov grafigi va kelishilgan to'lov yangilandi!`);
  };

  const handleUpdatePlan = (updatedPlan: StudentPaymentPlan) => {
    const nextPlans = plans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setSelectedPlanForContract(updatedPlan);
    showToast(`✅ "${updatedPlan.student_name}" shartnomasi va kelishilgan to'lovi saqlandi!`);
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
      const dueDate = new Date(now.getFullYear(), now.getMonth() + (i - 1), 25);
      schedules.push({
        id: `sch-${Date.now()}-${i}`,
        installment_number: i,
        title: `${i}-oy: To'lov`,
        amount: installmentAmount,
        due_date: dueDate.toISOString().split('T')[0],
        status: 'pending',
      });
    }

    const contractNo = `PS-2026/09-${Date.now().toString().slice(-4)}`;

    const newPlan: StudentPaymentPlan = {
      id: `plan-${Date.now()}`,
      student_id: targetStudent.id,
      student_name: targetStudent.full_name,
      student_phone: targetStudent.phone || '+998 90 000 00 00',
      student_email: targetStudent.email,
      group_id: studentGroup?.id || 'unassigned',
      group_name: studentGroup?.name || "Premier O'quvchisi",
      course_title: newPlanCourseTitle,
      plan_type: newPlanInstallments === 1 ? 'full_course' : 'monthly',
      base_monthly_fee: newPlanMonthlyFee,
      agreed_fee: newPlanMonthlyFee,
      contract_number: contractNo,
      contract_date: new Date().toISOString().split('T')[0],
      passport_id: newPlanPassportId || undefined,
      parent_name: newPlanParentName || undefined,
      total_course_fee: baseTotal,
      discount_percent: newPlanDiscountPercent,
      discount_reason: newPlanDiscountReason || (newPlanDiscountPercent > 0 ? 'Grant' : undefined),
      final_total_fee: finalTotal,
      paid_amount: 0,
      remaining_amount: finalTotal,
      overall_status: 'pending',
      next_due_date: schedules[0]?.due_date || new Date().toISOString().split('T')[0],
      created_at: new Date().toISOString().split('T')[0],
      schedules,
    };

    const nextPlans = [newPlan, ...plans];
    setPlans(nextPlans);
    saveStoredStudentPayments(nextPlans);
    setIsCreatePlanModalOpen(false);
    showToast(`✅ "${targetStudent.full_name}" uchun ${finalTotal.toLocaleString()} UZS to'lov rejasi ochildi!`);
    setNewPlanStudentId('');
    setNewPlanPassportId('');
    setNewPlanParentName('');
  };

  // Financial aggregates
  let totalCashPaid = 0;
  let totalCardPaid = 0;
  let totalDigitalPaid = 0;

  plans.forEach(p => {
    p.schedules.forEach(s => {
      if (s.status === 'paid') {
        if (s.payment_method === 'cash') {
          totalCashPaid += s.amount;
        } else if (s.payment_method === 'card') {
          totalCardPaid += s.amount;
        } else if (['click', 'payme', 'uzum', 'bank_transfer'].includes(s.payment_method || '')) {
          totalDigitalPaid += s.amount;
        }
      }
    });
  });

  const totalExpected = plans.reduce((acc, p) => acc + p.final_total_fee, 0);
  const totalPaid = plans.reduce((acc, p) => acc + p.paid_amount, 0);
  const totalRemaining = plans.reduce((acc, p) => acc + p.remaining_amount, 0);

  // Debtors calculations
  const overduePlans = useMemo(() => {
    return plans.filter(p => 
      p.overall_status === 'overdue' || 
      p.schedules.some(s => s.status === 'overdue')
    );
  }, [plans]);

  const allDebtors = useMemo(() => {
    return plans.filter(p => p.remaining_amount > 0 && p.final_total_fee > 0);
  }, [plans]);

  const totalOverdue = overduePlans.reduce((acc, p) => {
    const overdueItemsSum = p.schedules
      .filter(s => s.status === 'overdue')
      .reduce((a, b) => a + b.amount, 0);
    return acc + (overdueItemsSum > 0 ? overdueItemsSum : p.remaining_amount);
  }, 0);

  const collectionRate = totalExpected > 0 ? Math.round((totalPaid / totalExpected) * 100) : 0;

  // Transactions ledger list
  const transactions: PaymentTransactionItem[] = useMemo(() => {
    return getAllPaymentTransactions(plans);
  }, [plans]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchSearch = t.student_name.toLowerCase().includes(ledgerSearch.toLowerCase()) ||
                          t.receipt_no.toLowerCase().includes(ledgerSearch.toLowerCase()) ||
                          t.transaction_id.toLowerCase().includes(ledgerSearch.toLowerCase()) ||
                          t.group_name.toLowerCase().includes(ledgerSearch.toLowerCase());
      const matchMethod = ledgerMethodFilter === 'all' || t.payment_method === ledgerMethodFilter;
      return matchSearch && matchMethod;
    });
  }, [transactions, ledgerSearch, ledgerMethodFilter]);

  // Unique groups list for filtering
  const uniqueGroups = useMemo(() => {
    return Array.from(new Set(plans.map(p => JSON.stringify({ id: p.group_id, name: p.group_name }))))
      .map(s => JSON.parse(s));
  }, [plans]);

  // Filtered & Sorted Plans for Tab 1
  const filteredPlans = useMemo(() => {
    const list = plans.filter(p => {
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

    return list.sort((a, b) => {
      if (sortBy === 'name') return a.student_name.localeCompare(b.student_name);
      if (sortBy === 'debt_desc') return b.remaining_amount - a.remaining_amount;
      if (sortBy === 'paid_desc') return b.paid_amount - a.paid_amount;
      if (sortBy === 'due_date') return (a.next_due_date || '').localeCompare(b.next_due_date || '');
      return 0;
    });
  }, [plans, searchQuery, statusFilter, groupFilter, methodFilter, sortBy]);

  // Group Financial Analytics
  const groupAnalytics = useMemo(() => {
    const map = new Map<string, {
      id: string;
      name: string;
      totalStudents: number;
      expectedRevenue: number;
      collectedRevenue: number;
      debtorsCount: number;
      paidCount: number;
    }>();

    plans.forEach(p => {
      const gId = p.group_id || 'unassigned';
      if (!map.has(gId)) {
        map.set(gId, {
          id: gId,
          name: p.group_name || 'Guruhsiz',
          totalStudents: 0,
          expectedRevenue: 0,
          collectedRevenue: 0,
          debtorsCount: 0,
          paidCount: 0,
        });
      }
      const data = map.get(gId)!;
      data.totalStudents += 1;
      data.expectedRevenue += p.final_total_fee;
      data.collectedRevenue += p.paid_amount;
      if (p.remaining_amount > 0) data.debtorsCount += 1;
      if (p.overall_status === 'paid') data.paidCount += 1;
    });

    return Array.from(map.values()).sort((a, b) => b.expectedRevenue - a.expectedRevenue);
  }, [plans]);

  // Export Plans to CSV
  const handleExportPlansCSV = () => {
    const headers = "ID,Talaba F.I.Sh.,Telefon,Guruh,Kurs,Oylik Narx,Jami Summa,Chegirma %,To'langan,Qoldiq Qarzdorlik,Holat,Keyingi Muddat\n";
    const rows = plans.map(p => 
      `"${p.id}","${p.student_name}","${p.student_phone || ''}","${p.group_name}","${p.course_title}",${p.base_monthly_fee},${p.final_total_fee},${p.discount_percent},${p.paid_amount},${p.remaining_amount},"${p.overall_status}","${p.next_due_date}"`
    ).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `premier_tolovlar_rejalari_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast("To'lov rejalari CSV formatida yuklab olindi!");
  };

  // Export Ledger to CSV
  const handleExportLedgerCSV = () => {
    const headers = "Chek №,Sana,Talaba,Telefon,Guruh,To'lov Bosqichi,To'lov Usuli,Summa (UZS),Tranzaksiya ID,Izoh\n";
    const rows = transactions.map(t => 
      `"${t.receipt_no}","${t.paid_date}","${t.student_name}","${t.student_phone || ''}","${t.group_name}","${t.installment_title}","${t.payment_method}",${t.amount},"${t.transaction_id}","${t.notes || ''}"`
    ).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `premier_kassa_jurnali_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast("Kassa tranzaksiyalari jurnali CSV formatida yuklab olindi!");
  };

  return (
    <div className="space-y-7 pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-0.5 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-300 text-[10px] font-black uppercase tracking-wider">
              Premier Financial Hub
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs font-semibold text-indigo-200">Kassa & Billing Boshqaruvi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Moliya, Kassa & To'lovlar Tizimi
          </h1>
          <p className="text-xs sm:text-sm text-indigo-200/80 mt-1 max-w-2xl leading-relaxed">
            Real vaqt rejimida naqd kassa, terminal (Uzcard/Humo) hamda Click/Payme tushumlarini qayd etish, qarzdorliklarni monitoring qilish va rasmiy kvitansiyalar.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-2.5">
          {/* Quick Pay Button */}
          <button
            onClick={() => setIsQuickPayOpen(true)}
            className="px-4.5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black transition flex items-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer"
          >
            <DollarSign className="w-4 h-4 text-emerald-100" />
            <span>⚡ Tezkor To'lov Qabul Qilish</span>
          </button>

          {/* New Plan Button */}
          <button
            onClick={() => setIsCreatePlanModalOpen(true)}
            className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
          >
            <Plus className="w-4 h-4 text-indigo-300" />
            <span>+ Yangi Reja Ochish</span>
          </button>

          {/* Export Button */}
          <button
            onClick={activeTab === 'ledger' ? handleExportLedgerCSV : handleExportPlansCSV}
            className="px-3.5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
            title="CSV hisobot yuklab olish"
          >
            <Download className="w-4 h-4 text-slate-300" />
            <span>Eksport</span>
          </button>
        </div>
      </div>

      {/* 5 Fintech KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {/* Card 1: Jami Tushum */}
        <div className="p-4.5 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Jami Tushum:</span>
            <div className="p-2 rounded-2xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2.5">
            <span className="text-2xl font-black text-slate-950">
              {totalPaid.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
              <span>To'planish darajasi:</span>
              <span className="font-extrabold text-emerald-600">{collectionRate}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(100, collectionRate)}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Card 2: Naqd Pul Kassa */}
        <div className="p-4.5 rounded-3xl bg-emerald-50/50 border border-emerald-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">💵 Naqd Kassa:</span>
            <div className="p-2 rounded-2xl bg-emerald-100 text-emerald-700">
              <Banknote className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2.5">
            <span className="text-2xl font-black text-emerald-950">
              {totalCashPaid.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-emerald-700 ml-1">UZS</span>
          </div>
          <div className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
            <span>Kassadagi naqd pul</span>
            <span className="text-[10px] text-emerald-600 font-normal">({transactions.filter(t => t.payment_method === 'cash').length} ta to'lov)</span>
          </div>
        </div>

        {/* Card 3: Terminal (Uzcard / Humo) */}
        <div className="p-4.5 rounded-3xl bg-indigo-50/50 border border-indigo-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider">💳 Terminal (Karta):</span>
            <div className="p-2 rounded-2xl bg-indigo-100 text-indigo-700">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2.5">
            <span className="text-2xl font-black text-indigo-950">
              {totalCardPaid.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-indigo-700 ml-1">UZS</span>
          </div>
          <div className="text-[11px] font-semibold text-indigo-800 flex items-center gap-1">
            <span>Uzcard / Humo terminali</span>
            <span className="text-[10px] text-indigo-600 font-normal">({transactions.filter(t => t.payment_method === 'card').length} ta to'lov)</span>
          </div>
        </div>

        {/* Card 4: Online Ilovalar */}
        <div className="p-4.5 rounded-3xl bg-sky-50/50 border border-sky-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">📱 Online Ilovalar:</span>
            <div className="p-2 rounded-2xl bg-sky-100 text-sky-700">
              <Smartphone className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2.5">
            <span className="text-2xl font-black text-sky-950">
              {totalDigitalPaid.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-sky-700 ml-1">UZS</span>
          </div>
          <div className="text-[11px] font-semibold text-sky-800 flex items-center gap-1">
            <span>Click, Payme, Uzum</span>
            <span className="text-[10px] text-sky-600 font-normal">({transactions.filter(t => ['click', 'payme', 'uzum'].includes(t.payment_method)).length} ta to'lov)</span>
          </div>
        </div>

        {/* Card 5: Muddati O'tgan Qarzdorlik */}
        <div 
          onClick={() => setActiveTab('debtors')}
          className={`p-4.5 rounded-3xl border shadow-xs flex flex-col justify-between cursor-pointer transition-all hover:shadow-md ${
            totalOverdue > 0 
              ? 'bg-rose-50/50 border-rose-300 ring-2 ring-rose-200' 
              : 'bg-white border-slate-200/90 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-bold uppercase tracking-wider ${
              totalOverdue > 0 ? 'text-rose-700' : 'text-slate-500'
            }`}>
              ⚠️ Qarzdorlik & Kechikkan:
            </span>
            <div className={`p-2 rounded-2xl ${
              totalOverdue > 0 ? 'bg-rose-100 text-rose-700 animate-bounce' : 'bg-slate-100 text-slate-600'
            }`}>
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2.5">
            <span className={`text-2xl font-black ${totalOverdue > 0 ? 'text-rose-700' : 'text-slate-950'}`}>
              {totalOverdue.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-slate-500 ml-1">UZS</span>
          </div>
          <div className={`text-[11px] font-bold flex items-center justify-between ${
            totalOverdue > 0 ? 'text-rose-600' : 'text-slate-500'
          }`}>
            <span>{overduePlans.length} nafar muddati o'tgan</span>
            <span className="underline text-[10px]">Ko'rish →</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'plans'
                ? 'bg-white text-slate-950 shadow-xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-4 h-4 text-indigo-600" />
            <span>To'lov Rejalari</span>
            <span className="px-2 py-0.2 rounded-full bg-slate-100 text-slate-600 text-[10px]">
              {plans.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('debtors')}
            className={`px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'debtors'
                ? 'bg-white text-slate-950 shadow-xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span>Qarzdorlar & Eslatmalar</span>
            {overduePlans.length > 0 && (
              <span className="px-2 py-0.2 rounded-full bg-rose-100 text-rose-700 text-[10px] font-black">
                {overduePlans.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'ledger'
                ? 'bg-white text-slate-950 shadow-xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Receipt className="w-4 h-4 text-emerald-600" />
            <span>Kassa & Tranzaksiyalar Tarixi</span>
            <span className="px-2 py-0.2 rounded-full bg-slate-100 text-slate-600 text-[10px]">
              {transactions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'groups'
                ? 'bg-white text-slate-950 shadow-xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span>Guruhlar Moliyaviy Tahlili</span>
          </button>
        </div>

        {/* View Mode Toggle (Only on Tab 1) */}
        {activeTab === 'plans' && (
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'table' ? 'bg-white text-indigo-600 shadow-2xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Kompakt jadval ko'rinishi"
            >
              <TableIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Jadval</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'cards' ? 'bg-white text-indigo-600 shadow-2xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Kartalar ko'rinishi"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Kartalar</span>
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: O'QUVCHILAR TO'LOV REJALARI                                         */}
      {/* ========================================================================= */}
      {activeTab === 'plans' && (
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="O'quvchi ismi, guruh yoki telefon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-hidden"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto text-xs">
              <select
                value={groupFilter}
                onChange={(e) => setGroupFilter(e.target.value)}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="all">Barcha guruhlar</option>
                {uniqueGroups.map((g: any) => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="all">Barcha holatlar</option>
                <option value="paid">To'liq to'langan ✓</option>
                <option value="partial">Qisman to'langan</option>
                <option value="overdue">Muddati o'tgan ⚠️</option>
                <option value="pending">Kutilmoqda</option>
              </select>

              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="all">Barcha to'lov usullari</option>
                <option value="cash">💵 Naqd pul</option>
                <option value="card">💳 Terminal (Uzcard/Humo)</option>
                <option value="digital">📱 Click / Payme / Uzum</option>
              </select>

              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="debt_desc">Qarzdorlik bo'yicha</option>
                <option value="name">Alifbo bo'yicha (A-Z)</option>
                <option value="paid_desc">To'langan summa bo'yicha</option>
                <option value="due_date">To'lov muddati bo'yicha</option>
              </select>
            </div>
          </div>

          {/* Results List */}
          {filteredPlans.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center">
              <CreditCard className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-extrabold text-slate-800 text-base">To'lov rejalari topilmadi</h3>
              <p className="text-xs text-slate-500 mt-1">
                Filtrlarni tozalang yoki yangi to'lov rejasini ochish tugmasidan foydalaning.
              </p>
            </div>
          ) : viewMode === 'table' ? (
            /* COMPACT HIGH-DENSITY TABLE VIEW */
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-3.5">O'quvchi</th>
                      <th className="px-4 py-3.5">Guruh & Kurs</th>
                      <th className="px-4 py-3.5">Tarif</th>
                      <th className="px-4 py-3.5">Jami Summa</th>
                      <th className="px-4 py-3.5">To'langan</th>
                      <th className="px-4 py-3.5">Qoldiq Qarz</th>
                      <th className="px-4 py-3.5">Keyingi Muddat</th>
                      <th className="px-4 py-3.5">Holat</th>
                      <th className="px-5 py-3.5 text-right">Amallar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredPlans.map((plan) => {
                      const percentPaid = plan.final_total_fee > 0 
                        ? Math.round((plan.paid_amount / plan.final_total_fee) * 100) 
                        : 100;

                      const paidSchedules = plan.schedules.filter(s => s.status === 'paid');
                      const latestPaidItem = paidSchedules[paidSchedules.length - 1];

                      return (
                        <tr key={plan.id} className="hover:bg-slate-50/80 transition-colors">
                          {/* Student */}
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xs shrink-0">
                                {plan.student_name.slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-extrabold text-slate-950 text-xs">{plan.student_name}</div>
                                <div className="text-[10px] text-slate-500 font-mono">{plan.student_phone || plan.student_email}</div>
                              </div>
                            </div>
                          </td>

                          {/* Group & Course */}
                          <td className="px-4 py-3.5">
                            <div className="font-bold text-slate-800">{plan.group_name}</div>
                            <div className="text-[10px] text-indigo-600 font-medium truncate max-w-44">{plan.course_title}</div>
                          </td>

                          {/* Tarif */}
                          <td className="px-4 py-3.5">
                            <div className="font-extrabold text-slate-900">{plan.base_monthly_fee.toLocaleString()} UZS/oy</div>
                            {plan.agreed_fee && plan.agreed_fee !== 500000 && (
                              <span className="text-[9px] text-purple-700 font-bold bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200 inline-block mt-0.5">
                                Kelishilgan
                              </span>
                            )}
                          </td>

                          {/* Total */}
                          <td className="px-4 py-3.5">
                            <div className="font-extrabold text-slate-900">{plan.final_total_fee.toLocaleString()} UZS</div>
                            {plan.discount_percent > 0 && (
                              <span className="text-[10px] text-emerald-600 font-bold block">
                                -{plan.discount_percent}% {plan.discount_reason || 'Grant'}
                              </span>
                            )}
                          </td>

                          {/* Paid with progress */}
                          <td className="px-4 py-3.5">
                            <div className="font-extrabold text-emerald-600">{plan.paid_amount.toLocaleString()} UZS</div>
                            <div className="flex items-center gap-1.5 mt-1">
                              <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-emerald-500 rounded-full" 
                                  style={{ width: `${percentPaid}%` }} 
                                />
                              </div>
                              <span className="text-[10px] font-bold text-slate-500">{percentPaid}%</span>
                            </div>
                          </td>

                          {/* Remaining Debt */}
                          <td className="px-4 py-3.5">
                            <span className={`font-black text-xs ${plan.remaining_amount > 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                              {plan.remaining_amount.toLocaleString()} UZS
                            </span>
                          </td>

                          {/* Next Due Date */}
                          <td className="px-4 py-3.5 font-medium text-slate-600 text-[11px]">
                            {plan.next_due_date || '—'}
                          </td>

                          {/* Status */}
                          <td className="px-4 py-3.5">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              plan.overall_status === 'paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' :
                              plan.overall_status === 'overdue' ? 'bg-rose-50 text-rose-700 border border-rose-300 animate-pulse' :
                              plan.overall_status === 'partial' ? 'bg-amber-50 text-amber-700 border border-amber-300' :
                              'bg-slate-100 text-slate-700'
                            }`}>
                              {plan.overall_status === 'paid' ? "To'langan ✓" :
                               plan.overall_status === 'overdue' ? "O'tgan ⚠️" :
                               plan.overall_status === 'partial' ? "Qisman" : "Kutilmoqda"}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-5 py-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Receive payment button */}
                              <button
                                onClick={() => setSelectedPlanForPayment(plan)}
                                title="To'lov qabul qilish"
                                className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition cursor-pointer"
                              >
                                <DollarSign className="w-4 h-4" />
                              </button>

                              {/* Reminder modal button */}
                              <button
                                onClick={() => setSelectedPlanForReminder({ plan })}
                                title="SMS / Telegram eslatma yuborish"
                                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition cursor-pointer"
                              >
                                <MessageSquare className="w-4 h-4" />
                              </button>

                              {/* Customize schedule button */}
                              <button
                                onClick={() => setSelectedPlanForCustomize(plan)}
                                title="Grafigini va kelishilgan to'lovni moslash"
                                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                              >
                                <Calendar className="w-4 h-4" />
                              </button>

                              {/* Contract PDF button */}
                              <button
                                onClick={() => setSelectedPlanForContract(plan)}
                                title="O'quvchi shartnomasini ochish va chop etish (PDF)"
                                className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition cursor-pointer"
                              >
                                <FileText className="w-4 h-4" />
                              </button>

                              {/* Receipt view button */}
                              {latestPaidItem && (
                                <button
                                  onClick={() => setSelectedPlanForReceipt({ plan, item: latestPaidItem })}
                                  title="Oxirgi to'lov chekini ko'rish"
                                  className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition cursor-pointer"
                                >
                                  <Receipt className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* DETAILED CARDS VIEW */
            <div className="space-y-4">
              {filteredPlans.map((plan) => {
                const percentPaid = Math.round((plan.paid_amount / plan.final_total_fee) * 100);

                return (
                  <div
                    key={plan.id}
                    className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all overflow-hidden"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0">
                          {plan.student_name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-base text-slate-900">{plan.student_name}</h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              plan.overall_status === 'paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' :
                              plan.overall_status === 'overdue' ? 'bg-rose-50 text-rose-700 border border-rose-300 animate-pulse' :
                              'bg-amber-50 text-amber-700 border border-amber-300'
                            }`}>
                              {plan.overall_status === 'paid' ? "To'liq to'langan ✓" :
                               plan.overall_status === 'overdue' ? "Muddati o'tgan ⚠️" : "Qisman to'langan"}
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

                      {/* Financial info */}
                      <div className="flex items-center gap-5 text-right">
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
                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                          >
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>To'lov Olish</span>
                          </button>

                          <button
                            onClick={() => setSelectedPlanForReminder({ plan })}
                            className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition cursor-pointer"
                            title="Eslatma yuborish"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => setSelectedPlanForCustomize(plan)}
                            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition cursor-pointer"
                            title="Grafigini va kelishilgan to'lovni moslash"
                          >
                            <Calendar className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => setSelectedPlanForContract(plan)}
                            className="p-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl transition cursor-pointer"
                            title="O'quvchi shartnomasini ochish va chop etish (PDF)"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Installments Breakdown */}
                    <div className="bg-slate-50/70 p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          To'lov Bosqichlari ({plan.schedules.length} ta bosqich):
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
                            item.payment_method === 'card' ? '💳 Karta' :
                            item.payment_method === 'click' ? '🟡 Click' :
                            item.payment_method === 'payme' ? '🔵 Payme' :
                            item.payment_method === 'uzum' ? '🟣 Uzum' : '';

                          return (
                            <div
                              key={item.id}
                              className={`p-4 rounded-2xl border transition-all ${
                                item.status === 'paid'
                                  ? 'bg-white border-emerald-200/90 shadow-2xs'
                                  : item.status === 'overdue'
                                  ? 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-200'
                                  : 'bg-white border-slate-200 shadow-2xs'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <span className="text-xs font-extrabold text-slate-900 block">{item.title}</span>
                                  <span className="text-xs text-slate-500 block mt-0.5">
                                    Muddat: <strong className={item.status === 'overdue' ? 'text-rose-600' : 'text-slate-700'}>{item.due_date}</strong>
                                  </span>
                                </div>
                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${
                                  item.status === 'paid' ? 'bg-emerald-100 text-emerald-800' :
                                  item.status === 'overdue' ? 'bg-rose-100 text-rose-800 animate-pulse' : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {item.status === 'paid' ? "To'langan ✓" : item.status === 'overdue' ? "O'tgan ⚠️" : 'Kutilmoqda'}
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
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => setSelectedPlanForReminder({ plan, item })}
                                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                                    >
                                      <MessageSquare className="w-3.5 h-3.5" />
                                      <span>Eslatma</span>
                                    </button>
                                    <button
                                      onClick={() => setSelectedPlanForPayment(plan)}
                                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                                    >
                                      <DollarSign className="w-3.5 h-3.5" />
                                      <span>To'lash</span>
                                    </button>
                                  </div>
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
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: QARZDORLAR & ESLATMALAR (FOCUSED DEBTOR MANAGEMENT)                */}
      {/* ========================================================================= */}
      {activeTab === 'debtors' && (
        <div className="space-y-4">
          {/* Overdue alert strip */}
          <div className="p-5 rounded-3xl bg-rose-50 border border-rose-200 text-rose-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-2xl bg-rose-200 text-rose-700 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-sm">
                  Qarzdorlik Monitoringi & Avtomatlashtirilgan Eslatmalar
                </h3>
                <p className="text-xs text-rose-700 mt-0.5">
                  Muddati o'tgan yoki navbatdagi to'lov sanasi yaqinlashgan o'quvchilarga 1 bosish orqali Telegram yoki SMS orqali xushmuomala eslatma yuborishingiz mumkin.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0 sm:text-right">
              <div>
                <span className="text-[10px] font-bold uppercase text-rose-600 block">Jami Qarz Miqdori:</span>
                <span className="font-black text-xl text-rose-950">{totalOverdue.toLocaleString()} UZS</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-rose-600 block">Qarzdorlar Soni:</span>
                <span className="font-black text-xl text-rose-950">{overduePlans.length} nafar</span>
              </div>
            </div>
          </div>

          {/* Debtors List */}
          {allDebtors.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-extrabold text-slate-800 text-base">Ajoyib! Hech qanday qarzdorlik yo'q</h3>
              <p className="text-xs text-slate-500 mt-1">
                Barcha o'quvchilar kurs to'lovlarini to'liq va o'z vaqtida amalga oshirishgan.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-3.5">O'quvchi</th>
                      <th className="px-4 py-3.5">Guruh & Telefon</th>
                      <th className="px-4 py-3.5">Muddati O'tgan Bosqich</th>
                      <th className="px-4 py-3.5">Qarzdorlik Summasi</th>
                      <th className="px-4 py-3.5">To'lov Muddati</th>
                      <th className="px-4 py-3.5">Holati</th>
                      <th className="px-5 py-3.5 text-right">Tezkor Harakatlar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {allDebtors.map((plan) => {
                      const overdueItem = plan.schedules.find(s => s.status === 'overdue');
                      const targetItem = overdueItem || plan.schedules.find(s => s.status === 'pending') || plan.schedules[0];
                      const isItemOverdue = targetItem?.status === 'overdue';

                      return (
                        <tr key={plan.id} className="hover:bg-slate-50/80 transition">
                          {/* Student */}
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 ${
                                isItemOverdue ? 'bg-rose-100 text-rose-700' : 'bg-indigo-50 text-indigo-700'
                              }`}>
                                {plan.student_name.slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-black text-slate-950 text-xs">{plan.student_name}</div>
                                <div className="text-[10px] text-slate-500">{plan.course_title}</div>
                              </div>
                            </div>
                          </td>

                          {/* Group & Phone */}
                          <td className="px-4 py-4">
                            <div className="font-bold text-slate-800">{plan.group_name}</div>
                            <div className="text-[10px] font-mono text-slate-500">{plan.student_phone || plan.student_email}</div>
                          </td>

                          {/* Target Installment */}
                          <td className="px-4 py-4 font-semibold text-slate-800">
                            {targetItem ? targetItem.title : "Oylik to'lov"}
                          </td>

                          {/* Debt Amount */}
                          <td className="px-4 py-4">
                            <span className="font-black text-sm text-rose-600">
                              {(targetItem ? targetItem.amount : plan.remaining_amount).toLocaleString()} UZS
                            </span>
                            <span className="text-[10px] text-slate-400 block font-normal">
                              Jami qoldiq: {plan.remaining_amount.toLocaleString()} UZS
                            </span>
                          </td>

                          {/* Due Date */}
                          <td className="px-4 py-4">
                            <span className={`font-bold ${isItemOverdue ? 'text-rose-700' : 'text-slate-700'}`}>
                              {targetItem?.due_date || plan.next_due_date}
                            </span>
                          </td>

                          {/* Status Badge */}
                          <td className="px-4 py-4">
                            {isItemOverdue ? (
                              <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase tracking-wider animate-pulse">
                                ⚠️ Kechikkan
                              </span>
                            ) : (
                              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider">
                                ⏳ Kutilmoqda
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="px-5 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedPlanForContract(plan)}
                                className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition cursor-pointer shadow-2xs"
                                title="O'quvchi shartnomasini ko'rish (PDF)"
                              >
                                <FileText className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => setSelectedPlanForReminder({ plan, item: targetItem })}
                                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                              >
                                <Send className="w-3.5 h-3.5" />
                                <span>Eslatma (SMS/TG)</span>
                              </button>

                              <button
                                onClick={() => setSelectedPlanForPayment(plan)}
                                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                              >
                                <DollarSign className="w-3.5 h-3.5" />
                                <span>To'lovni Kiritish</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: KASSA & TRANZAKSIYALAR TARIXI (CHRONOLOGICAL AUDIT LEDGER)           */}
      {/* ========================================================================= */}
      {activeTab === 'ledger' && (
        <div className="space-y-4">
          {/* Ledger Search and Method Filters */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Chek №, talaba, tranzaksiya ID..."
                value={ledgerSearch}
                onChange={(e) => setLedgerSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-hidden"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto text-xs">
              <select
                value={ledgerMethodFilter}
                onChange={(e) => setLedgerMethodFilter(e.target.value)}
                className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-hidden cursor-pointer"
              >
                <option value="all">Barcha to'lov turlari</option>
                <option value="cash">💵 Naqd pul (Kassa)</option>
                <option value="card">💳 Terminal (Uzcard / Humo)</option>
                <option value="click">🟡 Click Evolution</option>
                <option value="payme">🔵 Payme</option>
                <option value="uzum">🟣 Uzum Bank</option>
              </select>

              <button
                onClick={handleExportLedgerCSV}
                className="px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Kassa Jurnali CSV</span>
              </button>
            </div>
          </div>

          {/* Ledger Table */}
          {filteredTransactions.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center">
              <Receipt className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-extrabold text-slate-800 text-base">Hali tranzaksiyalar qayd etilmagan</h3>
              <p className="text-xs text-slate-500 mt-1">
                Yangi to'lov qabul qilish uchun yuqoridagi <strong>"⚡ Tezkor To'lov Qabul Qilish"</strong> tugmasini bosing.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-3.5">Chek №</th>
                      <th className="px-4 py-3.5">Sana</th>
                      <th className="px-4 py-3.5">Talaba & Guruh</th>
                      <th className="px-4 py-3.5">To'lov Bosqichi</th>
                      <th className="px-4 py-3.5">To'lov Usuli</th>
                      <th className="px-4 py-3.5">Summa (UZS)</th>
                      <th className="px-4 py-3.5">Tranzaksiya ID</th>
                      <th className="px-5 py-3.5 text-right">Kvitansiya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredTransactions.map((item) => {
                      const methodBadge = 
                        item.payment_method === 'cash' ? { text: '💵 Naqd', cls: 'bg-emerald-50 text-emerald-800 border-emerald-300' } :
                        item.payment_method === 'card' ? { text: '💳 Terminal', cls: 'bg-indigo-50 text-indigo-800 border-indigo-300' } :
                        item.payment_method === 'click' ? { text: '🟡 Click', cls: 'bg-amber-50 text-amber-800 border-amber-300' } :
                        item.payment_method === 'payme' ? { text: '🔵 Payme', cls: 'bg-cyan-50 text-cyan-800 border-cyan-300' } :
                        { text: '🟣 Uzum', cls: 'bg-purple-50 text-purple-800 border-purple-300' };

                      return (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition">
                          {/* Receipt No */}
                          <td className="px-5 py-4 font-mono font-black text-slate-900">
                            {item.receipt_no}
                          </td>

                          {/* Date */}
                          <td className="px-4 py-4 text-slate-600 font-medium">
                            {item.paid_date}
                          </td>

                          {/* Student & Group */}
                          <td className="px-4 py-4">
                            <div className="font-extrabold text-slate-950">{item.student_name}</div>
                            <div className="text-[10px] text-slate-500">{item.group_name}</div>
                          </td>

                          {/* Installment */}
                          <td className="px-4 py-4 font-semibold text-slate-700">
                            {item.installment_title}
                          </td>

                          {/* Method */}
                          <td className="px-4 py-4">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${methodBadge.cls}`}>
                              {methodBadge.text}
                            </span>
                          </td>

                          {/* Amount */}
                          <td className="px-4 py-4">
                            <span className="font-black text-sm text-emerald-600">
                              {item.amount.toLocaleString()} UZS
                            </span>
                          </td>

                          {/* Txn ID */}
                          <td className="px-4 py-4 font-mono text-[11px] text-slate-600">
                            {item.transaction_id}
                          </td>

                          {/* Action */}
                          <td className="px-5 py-4 text-right">
                            <button
                              onClick={() => {
                                const targetPlan = plans.find(p => p.id === item.plan_id);
                                const targetSch = targetPlan?.schedules.find(s => s.id === item.schedule_id);
                                if (targetPlan && targetSch) {
                                  setSelectedPlanForReceipt({ plan: targetPlan, item: targetSch });
                                }
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition cursor-pointer"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>Chekni Ochish</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: GURUHLAR MOLIYAVIY TAHLILI (GROUP FINANCIAL ANALYTICS)              */}
      {/* ========================================================================= */}
      {activeTab === 'groups' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groupAnalytics.map((group) => {
              const groupCollectionRate = group.expectedRevenue > 0
                ? Math.round((group.collectedRevenue / group.expectedRevenue) * 100)
                : 0;

              return (
                <div 
                  key={group.id}
                  className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-base text-slate-900">{group.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-black">
                        {group.totalStudents} ta o'quvchi
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>Rejalashtirilgan tushum:</span>
                        <span className="font-bold text-slate-800">{group.expectedRevenue.toLocaleString()} UZS</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Amaldagi tushum:</span>
                        <span className="font-extrabold text-emerald-600">{group.collectedRevenue.toLocaleString()} UZS</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Qoldiq mablag':</span>
                        <span className="font-bold text-rose-600">{(group.expectedRevenue - group.collectedRevenue).toLocaleString()} UZS</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                        <span>To'planish ko'rsatkichi:</span>
                        <span className="text-indigo-600">{groupCollectionRate}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            groupCollectionRate >= 75 ? 'bg-emerald-500' :
                            groupCollectionRate >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                          }`}
                          style={{ width: `${Math.min(100, groupCollectionRate)}%` }} 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500">
                      To'lagan: <strong>{group.paidCount}</strong> • Qarzdor: <strong className="text-rose-600">{group.debtorsCount}</strong>
                    </span>
                    <button
                      onClick={() => {
                        setGroupFilter(group.id);
                        setActiveTab('plans');
                      }}
                      className="inline-flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                    >
                      <span>Ko'rish</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODALS                                                                    */}
      {/* ========================================================================= */}

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
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:outline-hidden"
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
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-hidden"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">
                O'quvchi Bilan Kelishilgan Oylik To'lov Summasi (UZS):
              </label>
              <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                Admin tomonidan kelishilgan stavka
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="50000"
                required
                value={newPlanMonthlyFee}
                onChange={(e) => setNewPlanMonthlyFee(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-black text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-hidden"
              />
              <span className="absolute right-3.5 top-2.5 text-xs font-bold text-slate-400">UZS / oy</span>
            </div>
            {/* Quick Chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[300000, 350000, 400000, 450000, 500000, 600000, 800000].map((feeVal) => (
                <button
                  key={feeVal}
                  type="button"
                  onClick={() => setNewPlanMonthlyFee(feeVal)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition cursor-pointer ${
                    newPlanMonthlyFee === feeVal
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {feeVal / 1000}k
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                To'lov oylari / davomiyligi:
              </label>
              <select
                value={newPlanInstallments}
                onChange={(e) => setNewPlanInstallments(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:outline-hidden"
              >
                <option value={1}>1 oy (Bir oylik to'lov)</option>
                <option value={2}>2 oy</option>
                <option value={3}>3 oy (Choraklik to'lov)</option>
                <option value={6}>6 oy (Yarim yillik)</option>
                <option value={9}>9 oy (To'liq akademik yil)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Grant / Chegirma (%):
              </label>
              <select
                value={newPlanDiscountPercent}
                onChange={(e) => setNewPlanDiscountPercent(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:outline-hidden"
              >
                <option value={0}>0% - Chegirmasiz</option>
                <option value={10}>10% Chegirma</option>
                <option value={15}>15% Chegirma</option>
                <option value={20}>20% Chegirma</option>
                <option value={50}>50% Yarim Grant</option>
                <option value={100}>100% To'liq Grant</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Chegirma / Grant sababi (ixtiyoriy):
            </label>
            <input
              type="text"
              value={newPlanDiscountReason}
              onChange={(e) => setNewPlanDiscountReason(e.target.value)}
              placeholder="Masalan: Iqtidorli o'quvchi / A'lochi"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-hidden"
            />
          </div>

          {/* Contract Details */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Pasport / ID № (Shartnoma uchun):
              </label>
              <input
                type="text"
                placeholder="Masalan: AB 1234567"
                value={newPlanPassportId}
                onChange={(e) => setNewPlanPassportId(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Ota-onasi F.I.Sh. (ixtiyoriy):
              </label>
              <input
                type="text"
                placeholder="Masalan: Karimova Dilrabo"
                value={newPlanParentName}
                onChange={(e) => setNewPlanParentName(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900"
              />
            </div>
          </div>

          {/* Calculated Summary */}
          <div className="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-2xl text-xs space-y-1.5">
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

      {/* Modal: Quick Pay or Direct Pay */}
      {(selectedPlanForPayment || isQuickPayOpen) && (
        <ReceivePaymentModal
          plan={selectedPlanForPayment || undefined}
          allPlans={plans}
          onSavePayment={handleSavePayment}
          onClose={() => {
            setSelectedPlanForPayment(null);
            setIsQuickPayOpen(false);
          }}
        />
      )}

      {/* Modal: Receipt View & Print */}
      {selectedPlanForReceipt && (
        <PaymentReceiptModal
          plan={selectedPlanForReceipt.plan}
          item={selectedPlanForReceipt.item}
          onClose={() => setSelectedPlanForReceipt(null)}
        />
      )}

      {/* Modal: Customize Schedule */}
      {selectedPlanForCustomize && (
        <CustomizeScheduleModal
          plan={selectedPlanForCustomize}
          onSave={handleSaveCustomSchedule}
          onClose={() => setSelectedPlanForCustomize(null)}
        />
      )}

      {/* Modal: SMS & Telegram Payment Reminder */}
      {selectedPlanForReminder && (
        <PaymentReminderModal
          isOpen={true}
          plan={selectedPlanForReminder.plan}
          targetItem={selectedPlanForReminder.item}
          onClose={() => setSelectedPlanForReminder(null)}
          onSent={(studentName) => {
            showToast(`✅ "${studentName}" ga eslatma muvaffaqiyatli jo'natildi!`);
            setSelectedPlanForReminder(null);
          }}
        />
      )}

      {/* Modal: Student Contract (PDF / Print) */}
      {selectedPlanForContract && (
        <StudentContractModal
          isOpen={true}
          plan={selectedPlanForContract}
          onClose={() => setSelectedPlanForContract(null)}
          onUpdatePlan={handleUpdatePlan}
        />
      )}
    </div>
  );
};
