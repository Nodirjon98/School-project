import React, { useState, useMemo } from 'react';
import { 
  Users, Clock, ShieldCheck, AlertTriangle, Search, Filter, 
  Eye, CheckCircle2, PauseCircle, Monitor, Smartphone, Tablet, 
  BookOpen, Layers, Headphones, FileEdit, Mic, Sparkles, ChevronRight,
  TrendingUp, Download, RefreshCw, X, MessageSquare, PhoneCall, Calendar
} from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { StudentTelemetryLog, StudentActionEvent, TelemetryModule } from '../../types';
import { Modal } from '../../components/common/Modal';

export const StudentMonitoringPage: React.FC = () => {
  const { telemetryLogs, actionEvents, groups, students, saveTeacherNote } = useLMSData();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'online' | 'idle' | 'warning'>('all');
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [teacherNoteInput, setTeacherNoteInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline'>('overview');

  // Convert telemetryLogs dictionary to array
  const telemetryList = useMemo(() => {
    return Object.values(telemetryLogs);
  }, [telemetryLogs]);

  // KPIs
  const totalStudents = telemetryList.length;
  const onlineCount = telemetryList.filter(s => s.online_status === 'online').length;
  const idleCount = telemetryList.filter(s => s.online_status === 'idle').length;
  const warningCount = telemetryList.filter(s => s.risk_level === 'warning' || s.risk_level === 'danger').length;

  const totalActiveSeconds = telemetryList.reduce((acc, s) => acc + s.today_active_seconds, 0);
  const avgTodayMins = totalStudents > 0 ? Math.round(totalActiveSeconds / totalStudents / 60) : 0;

  const totalIdleSeconds = telemetryList.reduce((acc, s) => acc + s.idle_paused_seconds, 0);
  const totalBlockedIdleMins = Math.round(totalIdleSeconds / 60);

  // Filtered students
  const filteredStudents = useMemo(() => {
    return telemetryList.filter(st => {
      const matchesSearch = 
        st.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (st.phone && st.phone.includes(searchQuery));
      
      const matchesGroup = selectedGroup === 'all' || st.group_id === selectedGroup || st.group_name === selectedGroup;

      const matchesStatus = 
        statusFilter === 'all' ? true :
        statusFilter === 'online' ? st.online_status === 'online' :
        statusFilter === 'idle' ? st.online_status === 'idle' :
        statusFilter === 'warning' ? (st.risk_level === 'warning' || st.risk_level === 'danger') : true;

      return matchesSearch && matchesGroup && matchesStatus;
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
    }
  };

  const getModuleIcon = (mod: TelemetryModule) => {
    switch (mod) {
      case 'stories': return <BookOpen className="w-3.5 h-3.5 text-rose-500" />;
      case 'vocab': return <Layers className="w-3.5 h-3.5 text-amber-500" />;
      case 'listening': return <Headphones className="w-3.5 h-3.5 text-sky-500" />;
      case 'grammar': return <Sparkles className="w-3.5 h-3.5 text-indigo-500" />;
      case 'homework': return <FileEdit className="w-3.5 h-3.5 text-emerald-500" />;
      case 'speaking': return <Mic className="w-3.5 h-3.5 text-purple-500" />;
      default: return <Clock className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-black tracking-wide uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Jonli Nazorat Markazi
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500">Anti-Cheat & Telemetriya</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            O'quvchilar Faoliyati va Jonli Nazorati
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Real vaqt rejimida o'quvchilar qaysi bo'limda dars qilayotgani, sof o'qish vaqti va qurilmadan uzoqlashganida to'xtatilgan soxta daqiqalar nazorati.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center gap-2 shadow-2xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            <span>Yangilash</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Onlayn o'quvchilar */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hozir Onlayn</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">{onlineCount}</span>
            <span className="text-xs font-bold text-slate-400">/ {totalStudents} o'quvchi</span>
          </div>
          <p className="text-[11px] font-medium text-emerald-600 mt-1">
            {onlineCount > 0 ? "Ayni paytda faol dars qilmoqda" : "Hozircha onlayn o'quvchi yo'q"}
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
            Sof tasdiqlangan o'qish vaqti
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
            90s avto-pauza orqali chiqarib tashlangan
          </p>
        </div>

        {/* Xavf guruhi */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Diqqat Talab</span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-rose-600">{warningCount}</span>
            <span className="text-xs font-bold text-slate-500">o'quvchi</span>
          </div>
          <p className="text-[11px] font-medium text-rose-600 mt-1">
            3 kundan ortiq kirmagan yoki orqada
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
              onClick={() => setStatusFilter('online')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${statusFilter === 'online' ? 'bg-white text-emerald-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Onlayn ({onlineCount})
            </button>
            <button
              onClick={() => setStatusFilter('warning')}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${statusFilter === 'warning' ? 'bg-white text-rose-700 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <AlertTriangle className="w-3 h-3 text-rose-500" />
              Xavf ({warningCount})
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
                <th className="py-3.5 px-3">Holat & Sahifa</th>
                <th className="py-3.5 px-3">Qurilma</th>
                <th className="py-3.5 px-3">Sof Dars Vaqti (Bugun)</th>
                <th className="py-3.5 px-3">Bloklangan Bo'sh Vaqt</th>
                <th className="py-3.5 px-3">Bo'limlar Taqsimoti</th>
                <th className="py-3.5 px-3">Tasdiqlangan Natija</th>
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

                  return (
                    <tr key={st.student_id} className="hover:bg-slate-50/60 transition group">
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
                              {st.risk_level === 'warning' && (
                                <span className="px-1.5 py-0.2 rounded-md bg-rose-50 border border-rose-200 text-rose-600 text-[10px] font-black">
                                  Xavf
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                              <span>{st.group_name}</span>
                              <span>•</span>
                              <span className="font-semibold text-slate-600">{st.level}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Online Status & Current Page */}
                      <td className="py-3.5 px-3">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            {st.online_status === 'online' && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Onlayn
                              </span>
                            )}
                            {st.online_status === 'idle' && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black flex items-center gap-1">
                                <PauseCircle className="w-3 h-3 text-amber-500" />
                                Avto-Pauza
                              </span>
                            )}
                            {st.online_status === 'offline' && (
                              <span className="text-[11px] font-semibold text-slate-500">
                                {st.last_active_label || 'Oflayn'}
                              </span>
                            )}
                          </div>
                          {st.current_page && (
                            <span className="text-[10px] text-slate-400 mt-1 truncate max-w-[140px]" title={st.current_page}>
                              {st.current_page}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Device */}
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          {st.device === 'mobile' ? (
                            <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                          ) : st.device === 'tablet' ? (
                            <Tablet className="w-3.5 h-3.5 text-slate-400" />
                          ) : (
                            <Monitor className="w-3.5 h-3.5 text-slate-400" />
                          )}
                          <span className="text-[11px] capitalize">{st.device}</span>
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
                      </td>

                      {/* Verified Tasks */}
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{st.verified_tasks_count} ta topshiriq</span>
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
                    Oxirgi kirish: {selectedStudent.last_active_label || selectedStudent.last_active_at}
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
                    Hozircha amallar tarixi yozilmagan.
                  </p>
                ) : (
                  studentActions.slice(0, 15).map(action => (
                    <div key={action.id} className="flex items-start justify-between py-1.5 border-b border-slate-200/60 last:border-0">
                      <div className="flex items-center gap-2">
                        {getModuleIcon(action.module)}
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
                  placeholder="Masalan: Uy vazifasini tez bajaryapti, lekin Listeningga ko'proq e'tibor qaratishi kerak..."
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
