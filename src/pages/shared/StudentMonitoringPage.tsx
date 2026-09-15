import React, { useState, useMemo } from 'react';
import { 
  Users, Clock, ShieldCheck, AlertTriangle, Search, Filter, 
  Eye, CheckCircle2, PauseCircle, Monitor, Smartphone, Tablet, 
  BookOpen, Layers, Headphones, FileEdit, Mic, Sparkles, ChevronRight,
  TrendingUp, Download, RefreshCw, X, MessageSquare, PhoneCall, Calendar,
  KeyRound, Copy, Check, ExternalLink, ShieldAlert, FileSpreadsheet
} from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { StudentTelemetryLog, StudentActionEvent, TelemetryModule } from '../../types';
import { Modal } from '../../components/common/Modal';

export const StudentMonitoringPage: React.FC = () => {
  const { telemetryLogs, actionEvents, groups, students, saveTeacherNote, refreshTelemetry } = useLMSData();

  const [mainTab, setMainTab] = useState<'monitoring' | 'credentials'>('monitoring');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'online' | 'idle' | 'not_logged_in'>('all');
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [teacherNoteInput, setTeacherNoteInput] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAllType, setCopiedAllType] = useState<'telegram' | 'table' | null>(null);
  const [credSearchQuery, setCredSearchQuery] = useState('');
  const [credSelectedGroup, setCredSelectedGroup] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSyncedTime, setLastSyncedTime] = useState<string>(() => 
    new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  );

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    try {
      if (refreshTelemetry) {
        await refreshTelemetry();
      }
      setLastSyncedTime(new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
      showToast("O'quvchilar ma'lumotlari serverdan yangilandi!");
    } catch {
      showToast("Server bilan aloqa tekshirildi");
    } finally {
      setTimeout(() => setIsRefreshing(false), 500);
    }
  };

  // Filtered credentials list for credentials tab
  const filteredCredentials = useMemo(() => {
    return students.filter(st => {
      const q = credSearchQuery.toLowerCase();
      const matchesSearch = 
        st.full_name.toLowerCase().includes(q) ||
        st.email.toLowerCase().includes(q) ||
        (st.phone && st.phone.includes(q));
      
      const matchesGroup = 
        credSelectedGroup === 'all' || 
        st.group_id === credSelectedGroup || 
        st.group_name === credSelectedGroup;

      return matchesSearch && matchesGroup;
    });
  }, [students, credSearchQuery, credSelectedGroup]);

  // Convert telemetryLogs dictionary to array
  const telemetryList = useMemo(() => {
    return Object.values(telemetryLogs);
  }, [telemetryLogs]);

  // KPIs
  const totalStudents = students.length;
  const onlineCount = telemetryList.filter(s => s.online_status === 'online').length;
  const idleCount = telemetryList.filter(s => s.online_status === 'idle').length;
  const activeOrIdleCount = onlineCount + idleCount;
  const notLoggedInCount = telemetryList.filter(s => !s.last_active_at || s.last_active_label === 'Hali kirmagan').length;

  const totalActiveSeconds = telemetryList.reduce((acc, s) => acc + s.today_active_seconds, 0);
  const avgTodayMins = totalStudents > 0 ? Math.round(totalActiveSeconds / totalStudents / 60) : 0;

  const totalIdleSeconds = telemetryList.reduce((acc, s) => acc + s.idle_paused_seconds, 0);
  const totalBlockedIdleMins = Math.round(totalIdleSeconds / 60);

  // Active / recently active radar list (for live highlight banner)
  const activeRadarStudents = useMemo(() => {
    return telemetryList
      .filter(s => s.online_status === 'online' || s.online_status === 'idle' || (s.today_active_seconds || 0) > 0 || (s.last_active_at && s.last_active_label !== 'Hali kirmagan'))
      .sort((a, b) => {
        const timeB = b.last_active_at ? new Date(b.last_active_at).getTime() : 0;
        const timeA = a.last_active_at ? new Date(a.last_active_at).getTime() : 0;
        return timeB - timeA;
      });
  }, [telemetryList]);

  // Filtered students for monitoring - ALWAYS SORTS ACTIVE / ONLINE STUDENTS FIRST
  const filteredStudents = useMemo(() => {
    const list = telemetryList.filter(st => {
      const matchesSearch = 
        st.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (st.phone && st.phone.includes(searchQuery));
      
      const matchesGroup = selectedGroup === 'all' || st.group_id === selectedGroup || st.group_name === selectedGroup;

      const matchesStatus = 
        statusFilter === 'all' ? true :
        statusFilter === 'active' ? (st.online_status === 'online' || st.online_status === 'idle' || (st.today_active_seconds || 0) > 0) :
        statusFilter === 'online' ? st.online_status === 'online' :
        statusFilter === 'idle' ? st.online_status === 'idle' :
        statusFilter === 'not_logged_in' ? (!st.last_active_at || st.last_active_label === 'Hali kirmagan') : true;

      return matchesSearch && matchesGroup && matchesStatus;
    });

    // Intelligent Sorting:
    // Priority 1: 🟢 Online students (most recently active first)
    // Priority 2: 🟡 Idle students (most recently active first)
    // Priority 3: Offline with study minutes today / logged in (most recently active first)
    // Priority 4: Never logged in
    return list.sort((a, b) => {
      const getRank = (s: typeof a) => {
        if (s.online_status === 'online') return 4;
        if (s.online_status === 'idle') return 3;
        if ((s.today_active_seconds || 0) > 0 || (s.last_active_at && s.last_active_label !== 'Hali kirmagan')) return 2;
        return 1;
      };
      const rankDiff = getRank(b) - getRank(a);
      if (rankDiff !== 0) return rankDiff;

      const timeB = b.last_active_at ? new Date(b.last_active_at).getTime() : 0;
      const timeA = a.last_active_at ? new Date(a.last_active_at).getTime() : 0;
      if (timeB !== timeA) return timeB - timeA;

      return (b.today_active_seconds || 0) - (a.today_active_seconds || 0);
    });
  }, [telemetryList, searchQuery, selectedGroup, statusFilter]);

  // Selected student details
  const selectedStudent = selectedStudentId ? telemetryLogs[selectedStudentId] : null;

  // Filter actions for selected student
  const studentActions = useMemo(() => {
    if (!selectedStudentId) return [];
    return actionEvents.filter(ev => ev.student_id === selectedStudentId);
  }, [actionEvents, selectedStudentId]);

  const formatMinutes = (seconds: number) => {
    if (!seconds || seconds === 0) return '0 daqiqa';
    if (seconds < 60) return `${seconds} soniya`;
    const mins = Math.floor(seconds / 60);
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    if (hours === 0) return `${mins} daqiqa`;
    return `${hours}s ${remMins > 0 ? `${remMins}d` : ''}`;
  };

  const handleOpenDossier = (student: StudentTelemetryLog) => {
    setSelectedStudentId(student.student_id);
    setTeacherNoteInput(student.teacher_notes || '');
  };

  const handleSaveNote = () => {
    if (selectedStudentId) {
      saveTeacherNote(selectedStudentId, teacherNoteInput);
      showToast("Qayd muvaffaqiyatli saqlandi!");
    }
  };

  // Copy SMS / Telegram format credentials for a single student
  const handleCopyCredentials = (st: typeof students[0]) => {
    const text = `Assalomu alaykum! Premier School ta'lim platformasidagi shaxsiy kabinetingiz ma'lumotlari:\n\n👤 O'quvchi: ${st.full_name}\n🌐 Sayt: ${window.location.origin}/login\n📧 Login (Email): ${st.email}\n🔑 Parol: ${st.password || 'Premier2026!'}\n\nIltimos, platformaga kirib darslarni va uy vazifalarini bajarishni boshlang!`;
    navigator.clipboard.writeText(text);
    setCopiedId(st.id);
    showToast(`"${st.full_name}" uchun login va parol nusxalandi!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Copy ALL credentials formatted for Telegram / SMS / Notes
  const handleCopyAllTelegram = () => {
    const list = filteredCredentials.length > 0 ? filteredCredentials : students;
    if (list.length === 0) {
      showToast("Nusxalash uchun o'quvchilar topilmadi!");
      return;
    }

    const groupTitle = credSelectedGroup !== 'all' 
      ? groups.find(g => g.id === credSelectedGroup)?.name || credSelectedGroup
      : "Barcha Guruhlar";

    let text = `🎓 PREMIER SCHOOL — O'QUVCHILARNING LOGIN VA PAROLLARI\n`;
    text += `📋 Guruh: ${groupTitle}\n`;
    text += `👥 Jami o'quvchilar: ${list.length} nafar\n`;
    text += `🌐 Platformaga kirish: ${window.location.origin}/login\n`;
    text += `========================================\n\n`;

    list.forEach((st, idx) => {
      text += `${idx + 1}. 👤 ${st.full_name}\n`;
      if (st.group_name) text += `   📚 Guruh: ${st.group_name}\n`;
      if (st.phone) text += `   📱 Tel: ${st.phone}\n`;
      text += `   📧 Login: ${st.email}\n`;
      text += `   🔑 Parol: ${st.password || 'Premier2026!'}\n`;
      text += `----------------------------------------\n`;
    });

    text += `\n💡 Eslatma: O'quvchilar ushbu login va parol orqali tizimga kirib darslar va vazifalarni bajarishlari mumkin.`;

    navigator.clipboard.writeText(text);
    setCopiedAllType('telegram');
    showToast(`Barcha ${list.length} ta o'quvchining login va paroli nusxalandi (Telegram formatida)!`);
    setTimeout(() => setCopiedAllType(null), 3000);
  };

  // Copy ALL credentials as a clean Table (tab-separated, directly pastable into Excel or Google Sheets)
  const handleCopyAllTable = () => {
    const list = filteredCredentials.length > 0 ? filteredCredentials : students;
    if (list.length === 0) {
      showToast("Nusxalash uchun o'quvchilar topilmadi!");
      return;
    }

    let text = "№\tF.I.Sh\tGuruh\tTelefon\tLogin (Email)\tParol\n";
    list.forEach((st, idx) => {
      text += `${idx + 1}\t${st.full_name}\t${st.group_name || 'Guruhsiz'}\t${st.phone || '-'}\t${st.email}\t${st.password || 'Premier2026!'}\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedAllType('table');
    showToast(`Barcha ${list.length} ta o'quvchi ma'lumotlari jadval (Excel) formatida nusxalandi!`);
    setTimeout(() => setCopiedAllType(null), 3000);
  };

  // Export credentials as CSV
  const handleExportCSV = () => {
    const list = filteredCredentials.length > 0 ? filteredCredentials : students;
    const headers = "ID,F.I.Sh,Guruh,Telefon,Email (Login),Parol\n";
    const rows = list.map(s => `"${s.id}","${s.full_name}","${s.group_name || 'Guruhsiz'}","${s.phone || ''}","${s.email}","${s.password || 'Premier2026!'}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `premier_students_credentials_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast(`${list.length} ta o'quvchi login-paroli CSV faylga yuklandi!`);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-black tracking-wide uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Jonli Nazorat Markazi
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500">Real Vaqt & Telemetriya</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            O'quvchilar Nazorati va Login-Parollar
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Real o'quvchilar faoliyati, darsga sarflagan aniq daqiqalari, ekrandan uzoqlashgan bo'sh vaqtlari hamda o'quvchilarga tarqatiladigan kirish ma'lumotlari.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs self-start sm:self-auto">
          <button
            onClick={() => setMainTab('monitoring')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              mainTab === 'monitoring'
                ? 'bg-white text-indigo-700 shadow-2xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Faoliyat & Nazorat ({totalStudents})</span>
          </button>
          <button
            onClick={() => setMainTab('credentials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              mainTab === 'credentials'
                ? 'bg-white text-emerald-700 shadow-2xs font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
            <span>Login & Parollar (Tarqatish)</span>
          </button>
        </div>
      </div>

      {mainTab === 'credentials' ? (
        /* ========================================================
           TAB 2: CREDENTIALS DISTRIBUTION (LOGIN & PAROLLAR)
           ======================================================== */
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-sky-500/10 border border-emerald-200/80 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-emerald-600" />
                <h2 className="text-base font-black text-slate-900">
                  O'quvchilar Kirish Ma'lumotlari (Login & Parollar)
                </h2>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                O'quvchilarga platformaga kirishi uchun ushbu login va parollarni bering. O'quvchi birinchi marta kirishi bilan, uning faoliyati orqa fonda avtomatik nazorat qilinadi.
              </p>
            </div>

            {/* Quick Bulk Copy & Export Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={handleCopyAllTelegram}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition flex items-center gap-2 shadow-xs cursor-pointer"
                title="Barcha login va parollarni Telegram/SMS uchun qulay formatda bir martada nusxalash"
              >
                {copiedAllType === 'telegram' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Barchasi Nusxalandi! ({filteredCredentials.length})</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Barchasini Nusxalash ({filteredCredentials.length} ta)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyAllTable}
                className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold transition flex items-center gap-2 shadow-2xs cursor-pointer"
                title="Excel yoki Google Sheets ga to'g'ridan-to'g'ri jadval ko'rinishida nusxalash (Ctrl+V)"
              >
                {copiedAllType === 'table' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Jadval Nusxalandi!</span>
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4 text-slate-500" />
                    <span>Excel Jadvali nusxasi</span>
                  </>
                )}
              </button>

              <button
                onClick={handleExportCSV}
                className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
                title="CSV fayl ko'rinishida yuklab olish"
              >
                <Download className="w-4 h-4" />
                <span>CSV Yuklash</span>
              </button>
            </div>
          </div>

          {/* Search and Group Filter for Credentials */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={credSearchQuery}
                  onChange={(e) => setCredSearchQuery(e.target.value)}
                  placeholder="Ism, email yoki telefon bo'yicha qidirish..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 transition"
                />
              </div>

              <select
                value={credSelectedGroup}
                onChange={(e) => setCredSelectedGroup(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:bg-white focus:outline-hidden transition"
              >
                <option value="all">Barcha Guruhlar ({students.length} nafar)</option>
                {groups.map(g => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
            </div>

            <div className="text-xs font-bold text-slate-500 self-end md:self-center">
              Ko'rsatilmoqda: <span className="text-indigo-600 font-black">{filteredCredentials.length}</span> / {students.length} nafar o'quvchi
            </div>
          </div>

          {/* Credentials Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4">№</th>
                    <th className="py-3.5 px-4">O'quvchi F.I.Sh</th>
                    <th className="py-3.5 px-3">Guruh</th>
                    <th className="py-3.5 px-3">Telefon</th>
                    <th className="py-3.5 px-4">Login (Email)</th>
                    <th className="py-3.5 px-4">Parol</th>
                    <th className="py-3.5 px-4 text-right">Ota-onaga Yuborish</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredCredentials.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400 font-medium">
                        Qidiruv bo'yicha hech qanday o'quvchi topilmadi.
                      </td>
                    </tr>
                  ) : (
                    filteredCredentials.map((st, idx) => (
                      <tr key={st.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-3 px-4 font-bold text-slate-400 text-[11px]">{idx + 1}</td>
                        <td className="py-3 px-4 font-extrabold text-slate-900">{st.full_name}</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                            {st.group_name || "Guruhsiz"}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-600">
                          {st.phone || <span className="text-slate-400 italic">Kiritilmagan</span>}
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-indigo-700 font-bold">
                          {st.email}
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-slate-900 font-bold bg-slate-50/50">
                          {st.password || 'Premier2026!'}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => handleCopyCredentials(st)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5 cursor-pointer ${
                              copiedId === st.id
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700'
                            }`}
                          >
                            {copiedId === st.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Nusxalandi!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>SMS/Telegram matni</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================
           TAB 1: LIVE ACTIVITY & SURVEILLANCE
           ======================================================== */
        <>
          {/* Real-time Live Synchronization Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs font-black text-slate-900">Avtomatik Real-Vaqt Sinxronizatsiyasi Faol</span>
                <span className="text-xs text-slate-500 ml-2 hidden sm:inline">• O'quvchilar telefon yoki kompyuterdan kirishi bilan bu yerda real vaqtda ko'rinadi</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Oxirgi tekshiruv:</span>
              <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200">{lastSyncedTime}</span>
              <button
                onClick={handleManualRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold transition cursor-pointer"
                title="Qayta yangilash"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-600' : ''}`} />
                <span>Yangilash</span>
              </button>
            </div>
          </div>

          {/* Live Active Students Radar Highlights */}
          {activeRadarStudents.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-500/15 border-2 border-emerald-300 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <span>⚡ Jonli Faoliyat Radari — Kirgan va Faol O'quvchilar</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black">
                      {activeRadarStudents.length} nafar
                    </span>
                  </h3>
                </div>
                <span className="text-[11px] font-medium text-slate-500">
                  O'quvchilar login qilishi bilan shu yerda jonli ko'rinadi
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeRadarStudents.slice(0, 6).map((st) => {
                  const isCurOnline = st.online_status === 'online';
                  const isCurIdle = st.online_status === 'idle';

                  return (
                    <div
                      key={st.student_id}
                      onClick={() => handleOpenDossier(st)}
                      className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 bg-white shadow-xs hover:shadow-md ${
                        isCurOnline ? 'border-emerald-300 ring-2 ring-emerald-400/30' :
                        isCurIdle ? 'border-amber-300' : 'border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="relative shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-xs">
                            {st.student_name.slice(0, 2).toUpperCase()}
                          </div>
                          <span
                            className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${
                              isCurOnline ? 'bg-emerald-500 animate-pulse' :
                              isCurIdle ? 'bg-amber-400' : 'bg-slate-400'
                            }`}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-black text-slate-900 text-xs truncate">
                            {st.student_name}
                          </div>
                          <div className="text-[11px] flex items-center gap-1 mt-0.5">
                            {isCurOnline ? (
                              <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                                🟢 Onlayn (Ayni paytda)
                              </span>
                            ) : isCurIdle ? (
                              <span className="text-amber-700 font-bold flex items-center gap-1">
                                🟡 {st.last_active_label || 'Pauzada'}
                              </span>
                            ) : (
                              <span className="text-slate-600 font-medium">
                                ⏱️ {st.last_active_label || 'Oflayn'}
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                            <span>{st.device === 'desktop' ? '💻 Kompyuter' : '📱 Smartfon'}</span>
                            <span>•</span>
                            <span className="font-bold text-indigo-600">{formatMinutes(st.today_active_seconds)}</span>
                          </div>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Onlayn o'quvchilar */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hozir Onlayn</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <span className={`w-2.5 h-2.5 rounded-full ${onlineCount > 0 ? 'bg-emerald-500 animate-ping' : 'bg-slate-300'}`} />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">{onlineCount}</span>
                <span className="text-xs font-bold text-slate-400">/ {totalStudents} o'quvchi</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-1">
                {onlineCount > 0 ? "Ayni paytda faol dars qilmoqda" : "Hozircha faol o'quvchi yo'q"}
              </p>
            </div>

            {/* Bugungi o'rtacha dars vaqti */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">O'rtacha Dars Vaqti</span>
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">{avgTodayMins}</span>
                <span className="text-xs font-bold text-slate-500">daqiqa / kun</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-1">
                Sof tasdiqlangan dars vaqti
              </p>
            </div>

            {/* Aniqlangan soxta vaqt (Anti-cheat) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ushlangan Bo'sh Vaqt</span>
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-amber-600">{totalBlockedIdleMins}</span>
                <span className="text-xs font-bold text-slate-500">daq soxta vaqt</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-1">
                90s avto-pauza orqali chiqarilgan
              </p>
            </div>

            {/* Hali kirmaganlar */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hali Kirmaganlar</span>
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-700">{notLoggedInCount}</span>
                <span className="text-xs font-bold text-slate-400">/ {totalStudents} o'quvchi</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-1">
                Login-parol berilishi kutilmoqda
              </p>
            </div>
          </div>

          {/* Filter and Search Bar */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {/* Search Box */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="O'quvchi ismi yoki telefon..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 transition"
                />
              </div>

              {/* Group Filter */}
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:bg-white focus:outline-hidden transition"
              >
                <option value="all">Barcha Guruhlar ({groups.length})</option>
                {groups.map(g => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>

              {/* Status Filter Buttons */}
              <div className="flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition ${statusFilter === 'all' ? 'bg-white text-indigo-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Barchasi ({totalStudents})
                </button>
                <button
                  onClick={() => setStatusFilter('active')}
                  className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${statusFilter === 'active' ? 'bg-white text-emerald-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Faollar ({activeRadarStudents.length})
                </button>
                <button
                  onClick={() => setStatusFilter('online')}
                  className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${statusFilter === 'online' ? 'bg-white text-emerald-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Onlayn ({onlineCount})
                </button>
                <button
                  onClick={() => setStatusFilter('idle')}
                  className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${statusFilter === 'idle' ? 'bg-white text-amber-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Pauzada ({idleCount})
                </button>
                <button
                  onClick={() => setStatusFilter('not_logged_in')}
                  className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${statusFilter === 'not_logged_in' ? 'bg-white text-slate-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Hali kirmagan ({notLoggedInCount})
                </button>
              </div>
            </div>

            <div className="text-xs font-bold text-slate-500 self-end md:self-center">
              Topildi: <span className="text-slate-900 font-black">{filteredStudents.length}</span> nafar o'quvchi
            </div>
          </div>

          {/* Main Student Surveillance Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4">O'quvchi</th>
                    <th className="py-3.5 px-3">Holat</th>
                    <th className="py-3.5 px-3">Oxirgi Kirish</th>
                    <th className="py-3.5 px-3">Sof Dars Vaqti</th>
                    <th className="py-3.5 px-3">Ushlangan Bo'sh Vaqt</th>
                    <th className="py-3.5 px-3">Bo'limlar Taqsimoti</th>
                    <th className="py-3.5 px-3">Topshirilgan Natija</th>
                    <th className="py-3.5 px-4 text-right">Harakat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-slate-400 font-medium">
                        Hech qanday o'quvchi topilmadi.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((st) => {
                      const storiesMins = Math.round((st.module_breakdown?.stories_seconds || 0) / 60);
                      const vocabMins = Math.round((st.module_breakdown?.vocab_seconds || 0) / 60);
                      const listeningMins = Math.round((st.module_breakdown?.listening_seconds || 0) / 60);
                      const grammarMins = Math.round((st.module_breakdown?.grammar_seconds || 0) / 60);
                      const isNotLoggedIn = !st.last_active_at || st.last_active_label === 'Hali kirmagan';
                      const isCurOnline = st.online_status === 'online';
                      const isCurIdle = st.online_status === 'idle';
                      const isRecentlyActive = (st.today_active_seconds || 0) > 0 || (st.last_active_at && st.last_active_label !== 'Hali kirmagan');

                      return (
                        <tr 
                          key={st.student_id} 
                          className={`transition group ${
                            isCurOnline ? 'bg-emerald-50/40 hover:bg-emerald-50/70 border-l-4 border-l-emerald-500' :
                            isCurIdle ? 'bg-amber-50/30 hover:bg-amber-50/60 border-l-4 border-l-amber-400' :
                            isRecentlyActive ? 'bg-slate-50/40 hover:bg-slate-100/60' :
                            'hover:bg-slate-50/60'
                          }`}
                        >
                          {/* Student Info */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-xs">
                                  {st.student_name.slice(0, 2).toUpperCase()}
                                </div>
                                <span 
                                  className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                                    st.online_status === 'online' ? 'bg-emerald-500' :
                                    st.online_status === 'idle' ? 'bg-amber-400' : 'bg-slate-300'
                                  }`} 
                                />
                              </div>
                              <div>
                                <div className="font-extrabold text-slate-900 group-hover:text-indigo-600 transition flex items-center gap-1.5">
                                  {st.student_name}
                                </div>
                                <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                                  <span>{st.group_name}</span>
                                  <span>•</span>
                                  <span className="font-semibold text-slate-600">{st.level}</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Online Status */}
                          <td className="py-3.5 px-3">
                            <div className="flex flex-col gap-1 items-start">
                              {st.online_status === 'online' ? (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black flex items-center gap-1 border border-emerald-200/60 shadow-2xs">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  🟢 Onlayn
                                </span>
                              ) : st.online_status === 'idle' ? (
                                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black flex items-center gap-1 border border-amber-200/60">
                                  <PauseCircle className="w-3 h-3 text-amber-500" />
                                  Avto-Pauza
                                </span>
                              ) : isNotLoggedIn ? (
                                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold">
                                  Hali kirmagan
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                                  Oflayn
                                </span>
                              )}

                              {st.current_module && st.online_status === 'online' && (
                                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                                  {st.current_module === 'stories' ? '📖 Stories' :
                                   st.current_module === 'vocab' ? '🔤 Vocabulary' :
                                   st.current_module === 'listening' ? '🎧 Listening' :
                                   st.current_module === 'grammar' ? '✍️ Grammar' :
                                   st.current_module === 'homework' ? '📝 Homework' :
                                   st.current_module === 'speaking' ? '🗣️ Speaking' : '💻 LMS'}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Last Active & Device */}
                          <td className="py-3.5 px-3">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-slate-700 font-bold text-[11px]">
                                {st.last_active_label || 'Hali kirmagan'}
                              </span>
                              {st.last_active_at && (
                                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                  {st.device === 'desktop' ? (
                                    <Monitor className="w-3 h-3 text-slate-400 shrink-0" />
                                  ) : (
                                    <Smartphone className="w-3 h-3 text-slate-400 shrink-0" />
                                  )}
                                  <span>{st.device === 'desktop' ? 'Kompyuter' : 'Smartfon'}</span>
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Active Time Today */}
                          <td className="py-3.5 px-3">
                            <div>
                              <div className="font-black text-slate-900 text-xs">
                                {formatMinutes(st.today_active_seconds)}
                              </div>
                              <div className="text-[10px] text-slate-500 mt-0.5">
                                Jami: {formatMinutes(st.total_active_seconds)}
                              </div>
                            </div>
                          </td>

                          {/* Blocked Idle Time (Anti-cheat) */}
                          <td className="py-3.5 px-3">
                            {st.idle_paused_seconds > 0 ? (
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold">
                                <ShieldCheck className="w-3 h-3 text-amber-500" />
                                <span>{Math.round(st.idle_paused_seconds / 60)} daq bekor</span>
                              </div>
                            ) : (
                              <span className="text-slate-400 text-[11px]">0 daq</span>
                            )}
                          </td>

                          {/* Module breakdown pills */}
                          <td className="py-3.5 px-3">
                            {storiesMins === 0 && vocabMins === 0 && listeningMins === 0 && grammarMins === 0 ? (
                              <span className="text-slate-400 text-[11px] italic">Boshlanmagan</span>
                            ) : (
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {storiesMins > 0 && (
                                  <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 text-[10px] font-bold flex items-center gap-1" title="Stories">
                                    <BookOpen className="w-2.5 h-2.5" />
                                    {storiesMins}m
                                  </span>
                                )}
                                {vocabMins > 0 && (
                                  <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-bold flex items-center gap-1" title="Vocabulary">
                                    <Layers className="w-2.5 h-2.5" />
                                    {vocabMins}m
                                  </span>
                                )}
                                {listeningMins > 0 && (
                                  <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 text-[10px] font-bold flex items-center gap-1" title="Listening">
                                    <Headphones className="w-2.5 h-2.5" />
                                    {listeningMins}m
                                  </span>
                                )}
                                {grammarMins > 0 && (
                                  <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold flex items-center gap-1" title="Grammar">
                                    <Sparkles className="w-2.5 h-2.5" />
                                    {grammarMins}m
                                  </span>
                                )}
                              </div>
                            )}
                          </td>

                          {/* Verified Tasks */}
                          <td className="py-3.5 px-3">
                            <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                              <span>{st.verified_tasks_count} ta</span>
                            </div>
                          </td>

                          {/* Action */}
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => handleOpenDossier(st)}
                              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-xs font-bold transition flex items-center gap-1 ml-auto cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Dosye</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Student Dossier Modal */}
      {selectedStudent && (
        <Modal
          isOpen={!!selectedStudentId}
          onClose={() => setSelectedStudentId(null)}
          title={`O'quvchi Dosyesi: ${selectedStudent.student_name}`}
        >
          <div className="space-y-6">
            {/* Header info */}
            <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black text-lg flex items-center justify-center shadow-sm">
                  {selectedStudent.student_name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{selectedStudent.student_name}</h3>
                  <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                    <span>{selectedStudent.group_name}</span>
                    <span>•</span>
                    <span className="font-bold text-indigo-600">{selectedStudent.level}</span>
                    {selectedStudent.phone && (
                      <>
                        <span>•</span>
                        <span>{selectedStudent.phone}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                {selectedStudent.online_status === 'online' ? (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Hozir Onlayn
                  </span>
                ) : selectedStudent.online_status === 'idle' ? (
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold flex items-center gap-1.5">
                    <PauseCircle className="w-3.5 h-3.5 text-amber-600" />
                    Avto-Pauza (Harakatsiz)
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-slate-500">
                    {selectedStudent.last_active_label || 'Hali kirmagan'}
                  </span>
                )}
              </div>
            </div>

            {/* Time Breakdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Bugungi Dars</span>
                <p className="text-base font-black text-slate-900 mt-1">
                  {formatMinutes(selectedStudent.today_active_seconds)}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Haftalik Jami</span>
                <p className="text-base font-black text-slate-900 mt-1">
                  {formatMinutes(selectedStudent.weekly_active_seconds)}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-[10px] font-bold text-amber-700 uppercase">Bloklangan Bo'sh Vaqt</span>
                <p className="text-base font-black text-amber-800 mt-1">
                  {Math.round(selectedStudent.idle_paused_seconds / 60)} daqiqa
                </p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Topshirilgan Testlar</span>
                <p className="text-base font-black text-emerald-800 mt-1">
                  {selectedStudent.verified_tasks_count} ta
                </p>
              </div>
            </div>

            {/* Module distribution */}
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                Bo'limlar Kesimida Dars Vaqti
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-bold text-slate-700">Stories (Hill)</span>
                  </div>
                  <span className="text-xs font-black text-rose-700">
                    {Math.round((selectedStudent.module_breakdown.stories_seconds || 0) / 60)} daq
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold text-slate-700">Daily Words (SRS)</span>
                  </div>
                  <span className="text-xs font-black text-amber-700">
                    {Math.round((selectedStudent.module_breakdown.vocab_seconds || 0) / 60)} daq
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-sky-500" />
                    <span className="text-xs font-bold text-slate-700">Listening</span>
                  </div>
                  <span className="text-xs font-black text-sky-700">
                    {Math.round((selectedStudent.module_breakdown.listening_seconds || 0) / 60)} daq
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-bold text-slate-700">Grammar & Murphy</span>
                  </div>
                  <span className="text-xs font-black text-indigo-700">
                    {Math.round((selectedStudent.module_breakdown.grammar_seconds || 0) / 60)} daq
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileEdit className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-700">Uyga Vazifalar</span>
                  </div>
                  <span className="text-xs font-black text-emerald-700">
                    {Math.round((selectedStudent.module_breakdown.homework_seconds || 0) / 60)} daq
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-bold text-slate-700">Speaking Hub</span>
                  </div>
                  <span className="text-xs font-black text-purple-700">
                    {Math.round((selectedStudent.module_breakdown.speaking_seconds || 0) / 60)} daq
                  </span>
                </div>
              </div>
            </div>

            {/* Action History / Timeline */}
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                Oxirgi Amallar Xronologiyasi
              </h4>
              <div className="max-h-48 overflow-y-auto space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                {studentActions.length === 0 ? (
                  <p className="text-slate-400 text-center py-4 font-medium">
                    Hozircha amallar tarixi yo'q (O'quvchi hali kirmagan).
                  </p>
                ) : (
                  studentActions.slice(0, 15).map(action => (
                    <div key={action.id} className="flex items-start justify-between py-1.5 border-b border-slate-200/60 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">{action.details.title || action.action_type}</span>
                        {action.details.score !== undefined && (
                          <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black">
                            Ball: {action.details.score}
                          </span>
                        )}
                        {action.details.extra_info && (
                          <span className="text-[11px] text-slate-500">
                            ({action.details.extra_info})
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                        {new Date(action.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Teacher Notes */}
            <div className="pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                O'qituvchi Qaydlari va Nazorat Xulosasi
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={teacherNoteInput}
                  onChange={(e) => setTeacherNoteInput(e.target.value)}
                  placeholder="O'quvchi haqida shaxsiy qayd..."
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 transition"
                />
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
