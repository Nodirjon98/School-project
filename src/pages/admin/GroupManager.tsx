import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { CEFRLevel, Group, Profile } from '../../types';
import { Modal } from '../../components/common/Modal';
import { WeeklyTimetable } from '../../components/schedule/WeeklyTimetable';
import { 
  Users, Plus, Clock, MapPin, 
  UserPlus, Search, Phone, Mail, CheckCircle2,
  Calendar, CreditCard, AlertCircle, ArrowRight, Sparkles, X, ChevronRight,
  Trash2, KeyRound, Copy, Check, UserX, UserCheck, Eye, Edit3
} from 'lucide-react';

export const GroupManager: React.FC = () => {
  const { t } = useLanguage();
  const { 
    groups, createGroup, updateGroup, deleteGroup, students, 
    assignStudentToGroup, removeStudentFromGroup, deleteStudent, registerStudentByAdmin 
  } = useLMSData();

  // Tab navigation
  const [activeTab, setActiveTab] = useState<'groups' | 'students' | 'timetable'>('students');

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [selectedGroupForDetail, setSelectedGroupForDetail] = useState<Group | null>(null);
  const [selectedStudentForAssign, setSelectedStudentForAssign] = useState<Profile | null>(null);
  const [selectedStudentForCredentials, setSelectedStudentForCredentials] = useState<Profile | null>(null);
  const [copiedField, setCopiedField] = useState<'login' | 'password' | 'all' | null>(null);
  const [assignTargetGroupId, setAssignTargetGroupId] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Edit Group states
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [editName, setEditName] = useState('');
  const [editLevel, setEditLevel] = useState<CEFRLevel>('B2');
  const [editScheduleDays, setEditScheduleDays] = useState<'MWF' | 'TTS' | 'custom'>('MWF');
  const [editScheduleTime, setEditScheduleTime] = useState('18:30 - 20:00');
  const [editCustomSchedule, setEditCustomSchedule] = useState('');
  const [editRoom, setEditRoom] = useState('Oybek Campus, Room 304');
  const [editCapacity, setEditCapacity] = useState(14);
  const [editTeacherName, setEditTeacherName] = useState('Malika Karimova');

  // Search and Filters
  const [groupSearch, setGroupSearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');
  const [studentFilter, setStudentFilter] = useState<'all' | 'unassigned' | 'assigned'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'left'>('all');

  // Group Form states
  const [name, setName] = useState('');
  const [level, setLevel] = useState<CEFRLevel>('B2');
  const [scheduleDays, setScheduleDays] = useState<'MWF' | 'TTS'>('MWF');
  const [scheduleTime, setScheduleTime] = useState('18:30 - 20:00');
  const [room, setRoom] = useState('Oybek Campus, Room 304');
  const [capacity, setCapacity] = useState(14);
  const [teacherName, setTeacherName] = useState('Malika Karimova');

  // Student Registration Form states
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('+998 90 ');
  const [studentPassword, setStudentPassword] = useState('premier2026');
  const [studentLevel, setStudentLevel] = useState<CEFRLevel>('B2');
  const [targetGroupId, setTargetGroupId] = useState('');
  const [studentMessage, setStudentMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const openEditGroupModal = (grp: Group) => {
    setEditingGroup(grp);
    setEditName(grp.name);
    setEditLevel(grp.level);
    if (grp.schedule.includes('Dush') || grp.schedule.includes('Chor') || grp.schedule.includes('Mon')) {
      setEditScheduleDays('MWF');
      const timeMatch = grp.schedule.match(/\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}/);
      if (timeMatch) setEditScheduleTime(timeMatch[0]);
    } else if (grp.schedule.includes('Sesh') || grp.schedule.includes('Pay') || grp.schedule.includes('Tue')) {
      setEditScheduleDays('TTS');
      const timeMatch = grp.schedule.match(/\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}/);
      if (timeMatch) setEditScheduleTime(timeMatch[0]);
    } else {
      setEditScheduleDays('custom');
      setEditCustomSchedule(grp.schedule);
    }
    setEditRoom(grp.room || 'Oybek Campus, Room 304');
    setEditCapacity(grp.capacity || 14);
    setEditTeacherName(grp.teacher_name || 'Malika Karimova');
  };

  const handleSaveEditGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGroup || !editName.trim()) return;

    let fullSchedule = editCustomSchedule;
    if (editScheduleDays === 'MWF') {
      fullSchedule = `Dush / Chor / Jum ${editScheduleTime}`;
    } else if (editScheduleDays === 'TTS') {
      fullSchedule = `Sesh / Pay / Shan ${editScheduleTime}`;
    }

    await updateGroup(editingGroup.id, {
      name: editName.trim(),
      level: editLevel,
      schedule: fullSchedule,
      room: editRoom.trim(),
      capacity: Number(editCapacity),
      teacher_name: editTeacherName.trim(),
    });

    if (selectedGroupForDetail?.id === editingGroup.id) {
      setSelectedGroupForDetail({
        ...selectedGroupForDetail,
        name: editName.trim(),
        level: editLevel,
        schedule: fullSchedule,
        room: editRoom.trim(),
        capacity: Number(editCapacity),
        teacher_name: editTeacherName.trim(),
      });
    }

    showToast(`"${editName}" guruhi ma'lumotlari muvaffaqiyatli tahrirlandi!`);
    setEditingGroup(null);
  };

  const handleDeleteGroup = async (grp: Group) => {
    const assignedCount = students.filter(s => s.group_id === grp.id).length;
    const confirmMsg = assignedCount > 0
      ? `"${grp.name}" guruhida ${assignedCount} nafar o'quvchi mavjud. Guruh o'chirilsa, ular guruhsiz holatga o'tadi.\n\nGuruhni butunlay o'chirishni tasdiqlaysizmi?`
      : `"${grp.name}" guruhini tizimdan butunlay o'chirishni tasdiqlaysizmi?`;

    if (window.confirm(confirmMsg)) {
      await deleteGroup(grp.id);
      if (selectedGroupForDetail?.id === grp.id) {
        setSelectedGroupForDetail(null);
      }
      showToast(`"${grp.name}" guruhi muvaffaqiyatli o'chirildi.`);
    }
  };

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const fullSchedule = `${scheduleDays === 'MWF' ? 'Dush / Chor / Jum' : 'Sesh / Pay / Shan'} ${scheduleTime}`;

    await createGroup({
      name,
      level,
      teacher_id: 't1',
      teacher_name: teacherName,
      schedule: fullSchedule,
      room,
      capacity: Number(capacity),
      students_count: 0
    });

    setIsModalOpen(false);
    setName('');
    showToast(`"${name}" guruhi muvaffaqiyatli ochildi!`);
  };

  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentEmail || !studentName) return;

    setStudentMessage('');
    try {
      await registerStudentByAdmin({
        full_name: studentName,
        email: studentEmail,
        phone: studentPhone,
        level: studentLevel,
        group_id: targetGroupId || undefined,
        password: studentPassword,
      });

      setStudentMessage(`✅ O'quvchi "${studentName}" muvaffaqiyatli saqlandi!`);
      showToast(`O'quvchi "${studentName}" ro'yxatga olindi!`);
      setTimeout(() => {
        setIsStudentModalOpen(false);
        setStudentMessage('');
        setStudentName('');
        setStudentEmail('');
        setStudentPhone('+998 90 ');
        setTargetGroupId('');
      }, 1000);
    } catch (err: any) {
      setStudentMessage(`Xatolik: ${err.message}`);
    }
  };

  const handleAssignStudent = async () => {
    if (!selectedStudentForAssign || !assignTargetGroupId) return;

    await assignStudentToGroup(selectedStudentForAssign.id, assignTargetGroupId);
    const assignedGroup = groups.find(g => g.id === assignTargetGroupId);
    showToast(`✅ ${selectedStudentForAssign.full_name} "${assignedGroup?.name}" guruhiga joylashtirildi!`);
    setSelectedStudentForAssign(null);
    setAssignTargetGroupId('');
  };

  const handleRemoveFromGroup = async (student: Profile) => {
    if (window.confirm(`${student.full_name} ni guruhdan chiqarishni tasdiqlaysizmi?`)) {
      await removeStudentFromGroup(student.id);
      showToast(`${student.full_name} guruhdan chiqarildi.`);
    }
  };

  const copyToClipboard = (text: string, field: 'login' | 'password' | 'all') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleDeleteStudent = async (student: Profile) => {
    const confirmDelete = window.confirm(
      `"${student.full_name}" o'quvchisini tizimdan butunlay o'chirishni tasdiqlaysizmi?\n\nBu o'quvchi barcha guruhlardan chiqariladi va ma'lumotlar bazasidan butunlay o'chiriladi.`
    );
    if (!confirmDelete) return;

    try {
      await deleteStudent(student.id);
      showToast(`🗑️ "${student.full_name}" o'quvchisi tizimdan o'chirildi.`);
      if (selectedStudentForCredentials?.id === student.id) {
        setSelectedStudentForCredentials(null);
      }
    } catch (err: any) {
      alert(`Xatolik: ${err.message}`);
    }
  };

  // KPIs
  const totalStudents = students.length;
  const activeStudentsCount = students.filter(s => s.status !== 'left').length;
  const leftStudentsCount = students.filter(s => s.status === 'left').length;
  const unassignedStudents = students.filter(s => !s.group_id);
  const assignedStudents = students.filter(s => !!s.group_id);

  // Filtered lists
  const filteredGroups = groups.filter(g => 
    g.name.toLowerCase().includes(groupSearch.toLowerCase()) ||
    g.level.toLowerCase().includes(groupSearch.toLowerCase()) ||
    g.room?.toLowerCase().includes(groupSearch.toLowerCase())
  );

  const filteredStudents = students.filter(st => {
    const matchesSearch = 
      st.full_name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      st.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
      (st.phone && st.phone.includes(studentSearch)) ||
      (st.level && st.level.toLowerCase().includes(studentSearch.toLowerCase()));

    if (!matchesSearch) return false;

    if (studentFilter === 'unassigned' && st.group_id) return false;
    if (studentFilter === 'assigned' && !st.group_id) return false;

    if (statusFilter === 'active' && st.status === 'left') return false;
    if (statusFilter === 'left' && st.status !== 'left') return false;

    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
              Admin & Academic CRM
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs font-semibold text-slate-500">Guruhlar va O'quvchilar Boshqaruvi</span>
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight">
            Guruhlar & O'quvchilarni Joylashtirish Markazi
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Yangi ro'yxatdan o'tgan o'quvchilarni qabul qiling, guruhlarga joylang va haftalik dars jadvallarini boshqaring.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsStudentModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition shadow-sm cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>+ Yangi O'quvchi Qo'shish</span>
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Yangi Guruh Ochish</span>
          </button>
        </div>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Jami O'quvchilar</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{totalStudents} nafar</div>
          <span className="text-[11px] text-blue-600 font-semibold block mt-0.5">Premier School bazasida</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Guruh Kutayotganlar</span>
            <AlertCircle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-amber-600">{unassignedStudents.length} nafar</div>
          <span className="text-[11px] text-amber-600 font-bold block mt-0.5">
            {unassignedStudents.length > 0 ? "⚠️ Joylashtirish talab etiladi" : "Barchasi joylashtirilgan ✓"}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Guruhdagi O'quvchilar</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{assignedStudents.length} nafar</div>
          <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">Darslarda faol ishtirokchi</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Faol Guruhlar</span>
            <Calendar className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{groups.length} ta guruh</div>
          <span className="text-[11px] text-purple-600 font-semibold block mt-0.5">Oybek & Chorsu filiallari</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('students')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeTab === 'students'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <UserPlus className="w-4 h-4" />
          <span>O'quvchilar Ro'yxati & Guruhga Joylash</span>
          {unassignedStudents.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black animate-pulse">
              {unassignedStudents.length}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('groups')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeTab === 'groups'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Guruhlar Boshqaruvi ({groups.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('timetable')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
            activeTab === 'timetable'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Haftalik Dars Jadvali (Timetable)</span>
        </button>
      </div>

      {/* TAB 1: STUDENTS CRM & GROUP ASSIGNMENT */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          {/* Sub Filters & Search */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {/* Assignment filter */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setStudentFilter('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    studentFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Barchasi ({students.length})
                </button>
                <button
                  type="button"
                  onClick={() => setStudentFilter('unassigned')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                    studentFilter === 'unassigned'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'text-amber-800 hover:text-amber-900'
                  }`}
                >
                  <span>Guruhsiz</span>
                  <span className="font-extrabold px-1 rounded-full bg-white/20 text-[10px]">{unassignedStudents.length}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStudentFilter('assigned')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    studentFilter === 'assigned'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-emerald-800 hover:text-emerald-900'
                  }`}
                >
                  Guruhdagi ({assignedStudents.length})
                </button>
              </div>

              {/* Status filter: Active vs Left */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    statusFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Barcha holat
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('active')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                    statusFilter === 'active'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-emerald-700 hover:text-emerald-900'
                  }`}
                >
                  <span>🟢 Faollar</span>
                  <span className="font-extrabold px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">{activeStudentsCount}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('left')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
                    statusFilter === 'left'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-rose-700 hover:text-rose-900'
                  }`}
                >
                  <span>🔴 Kelmayotganlar</span>
                  <span className="font-extrabold px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">{leftStudentsCount}</span>
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Ism, telefon, email yoki daraja..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:bg-white"
              />
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-bold tracking-wider">
                  <tr>
                    <th className="py-3 px-4">O'quvchi</th>
                    <th className="py-3 px-4">Holati</th>
                    <th className="py-3 px-4">Bog'lanish (Telefon / Email)</th>
                    <th className="py-3 px-4">Darajasi & Tarif</th>
                    <th className="py-3 px-4">Biriktirilgan Guruh</th>
                    <th className="py-3 px-4">To'lov Holati</th>
                    <th className="py-3 px-4 text-right">Amallar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        O'quvchilar topilmadi
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((st) => {
                      const studentGroup = groups.find(g => g.id === st.group_id);
                      const isLeft = st.status === 'left';
                      return (
                        <tr key={st.id} className={`transition ${isLeft ? 'bg-rose-50/25 hover:bg-rose-50/45' : 'hover:bg-slate-50/70'}`}>
                          {/* Student Name & Avatar */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 ${
                                isLeft ? 'bg-slate-400' : 'bg-gradient-to-tr from-indigo-500 to-purple-600'
                              }`}>
                                {st.full_name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                  <span>{st.full_name}</span>
                                  {st.password && (
                                    <span className="text-[10px] px-1 py-0.2 rounded bg-indigo-50 text-indigo-600 font-mono" title="Login va parol faol">
                                      🔑
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                                  <span>ID: {st.id.slice(-6)}</span>
                                  {st.birth_date && <span>• {st.birth_date}</span>}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Status */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            {isLeft ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-rose-50 text-rose-700 border border-rose-200">
                                <UserX className="w-3 h-3 text-rose-500" />
                                Kelmayapti (Ketgan)
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <UserCheck className="w-3 h-3 text-emerald-500" />
                                Faol o'quvchi
                              </span>
                            )}
                          </td>

                          {/* Contact */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="space-y-0.5">
                              <div className="text-slate-800 font-semibold flex items-center gap-1">
                                <Phone className="w-3 h-3 text-slate-400" />
                                <span>{st.phone || '+998 —'}</span>
                              </div>
                              <div className="text-slate-400 text-[11px] flex items-center gap-1">
                                <Mail className="w-3 h-3 text-slate-300" />
                                <span>{st.email}</span>
                              </div>
                            </div>
                          </td>

                          {/* Level & Fee Type */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="space-y-0.5">
                              <span className="px-2 py-0.5 rounded-full font-bold text-[10px] bg-slate-100 text-slate-700 border border-slate-200 inline-block">
                                {st.level || 'B1'}
                              </span>
                              <div className="text-[11px] font-semibold">
                                {st.payment_type === 'free' ? (
                                  <span className="text-purple-600 font-bold">Grant (Bepul)</span>
                                ) : st.payment_type === 'custom' ? (
                                  <span className="text-amber-700 font-bold">
                                    {st.custom_fee ? `${st.custom_fee.toLocaleString()} so'm` : 'Maxsus narx'}
                                  </span>
                                ) : (
                                  <span className="text-slate-600">To'liq to'lov</span>
                                )}
                              </div>
                            </div>
                          </td>

                          {/* Group status */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            {st.group_id && studentGroup ? (
                              <div>
                                <span className="font-bold text-indigo-700 text-xs block">
                                  {studentGroup.name}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  {studentGroup.schedule}
                                </span>
                              </div>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[11px]">
                                <AlertCircle className="w-3 h-3 text-amber-500" />
                                Guruhga biriktirilmagan
                              </span>
                            )}
                          </td>

                          {/* Payment status */}
                          <td className="py-3 px-4 whitespace-nowrap">
                            {st.payment_status === 'paid' ? (
                              <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                                To'langan ✓
                              </span>
                            ) : st.payment_status === 'overdue' ? (
                              <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-rose-50 text-rose-700 border border-rose-200">
                                Qarzdor ⚠️
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-100 text-slate-600 border border-slate-200">
                                Kutilmoqda ⏳
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="py-3 px-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* View Credentials Button */}
                              <button
                                type="button"
                                onClick={() => setSelectedStudentForCredentials(st)}
                                className="p-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition cursor-pointer"
                                title="Login va parolni ko'rish"
                              >
                                <KeyRound className="w-4 h-4" />
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedStudentForAssign(st);
                                  setAssignTargetGroupId(st.group_id || groups[0]?.id || '');
                                }}
                                className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition cursor-pointer"
                              >
                                {st.group_id ? "Guruhni almashtirish" : "Guruhga joylash →"}
                              </button>

                              {st.group_id && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFromGroup(st)}
                                  className="p-1.5 rounded-xl text-amber-600 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition cursor-pointer"
                                  title="Guruhdan chiqarish"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              )}

                              <Link
                                to="/admin/payments"
                                className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 border border-slate-200 transition"
                                title="To'lov boshqaruvi"
                              >
                                <CreditCard className="w-4 h-4 text-emerald-600" />
                              </Link>

                              {/* DELETE BUTTON */}
                              <button
                                type="button"
                                onClick={() => handleDeleteStudent(st)}
                                className="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition cursor-pointer"
                                title="O'quvchini butunlay o'chirish"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GROUPS MANAGEMENT */}
      {activeTab === 'groups' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={groupSearch}
              onChange={(e) => setGroupSearch(e.target.value)}
              placeholder="Guruh nomi, CEFR darajasi yoki xona bo'yicha qidirish..."
              className="w-full text-xs font-medium bg-transparent focus:outline-hidden text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGroups.map(g => {
              const assignedCount = students.filter(s => s.group_id === g.id).length;
              return (
                <div 
                  key={g.id} 
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-indigo-300 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {g.level} Daraja
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => openEditGroupModal(g)}
                          className="p-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition cursor-pointer"
                          title="Guruhni tahrirlash"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteGroup(g)}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 transition cursor-pointer"
                          title="Guruhni o'chirish"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">{g.name}</h3>

                    <div className="space-y-1.5 my-3 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{g.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{g.room || 'Oybek Campus, Room 304'}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs mb-3">
                      <span className="text-slate-500 font-medium truncate max-w-[140px]">Ustoz: {g.teacher_name || 'Malika Karimova'}</span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {assignedCount} / {g.capacity || 14} o'quvchi
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-50">
                      <button
                        type="button"
                        onClick={() => setSelectedGroupForDetail(g)}
                        className="w-full py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>O'quvchilar ({assignedCount})</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => openEditGroupModal(g)}
                        className="w-full py-2 px-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Tahrirlash</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: WEEKLY TIMETABLE */}
      {activeTab === 'timetable' && (
        <WeeklyTimetable 
          groups={groups} 
          students={students}
          onSelectGroup={(grp) => setSelectedGroupForDetail(grp)}
        />
      )}

      {/* MODAL 1: ASSIGN STUDENT TO GROUP */}
      <Modal
        isOpen={!!selectedStudentForAssign}
        onClose={() => setSelectedStudentForAssign(null)}
        title="O'quvchini Guruhga Biriktirish"
      >
        {selectedStudentForAssign && (
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div className="font-extrabold text-slate-900 text-sm mb-1">
                {selectedStudentForAssign.full_name}
              </div>
              <div className="text-slate-500 space-y-0.5">
                <div>Email: {selectedStudentForAssign.email}</div>
                <div>Telefon: {selectedStudentForAssign.phone || 'Kiritilmagan'}</div>
                <div>CEFR Daraja: <span className="font-bold text-slate-800">{selectedStudentForAssign.level || 'B1'}</span></div>
                {selectedStudentForAssign.group_name && (
                  <div className="text-indigo-600 font-bold mt-1">
                    Hozirgi guruh: {selectedStudentForAssign.group_name}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Biriktiriladigan Guruhni Tanlang:
              </label>
              <select
                value={assignTargetGroupId}
                onChange={(e) => setAssignTargetGroupId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:outline-hidden focus:bg-white"
              >
                <option value="">Guruhni tanlang...</option>
                {groups.map((grp) => {
                  const currentCount = students.filter(s => s.group_id === grp.id).length;
                  return (
                    <option key={grp.id} value={grp.id}>
                      {grp.name} ({grp.level}) • {grp.schedule} • {currentCount}/{grp.capacity || 14} o'quvchi
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedStudentForAssign(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={handleAssignStudent}
                disabled={!assignTargetGroupId}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition disabled:opacity-50 cursor-pointer"
              >
                Guruhga Joylash ✓
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* MODAL 2: VIEW GROUP STUDENTS DETAIL */}
      <Modal
        isOpen={!!selectedGroupForDetail}
        onClose={() => setSelectedGroupForDetail(null)}
        title={selectedGroupForDetail ? `Guruh O'quvchilari: ${selectedGroupForDetail.name}` : ''}
      >
        {selectedGroupForDetail && (
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-700 block">{selectedGroupForDetail.schedule}</span>
                <span className="text-slate-400">{selectedGroupForDetail.room} • Ustoz: {selectedGroupForDetail.teacher_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-xs">
                  {selectedGroupForDetail.level}
                </span>
                <button
                  type="button"
                  onClick={() => openEditGroupModal(selectedGroupForDetail)}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer shadow-xs"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Tahrirlash</span>
                </button>
              </div>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2">
              {students.filter(s => s.group_id === selectedGroupForDetail.id).length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-xs">
                  Bu guruhga hali o'quvchilar biriktirilmagan.
                </div>
              ) : (
                students.filter(s => s.group_id === selectedGroupForDetail.id).map(st => (
                  <div key={st.id} className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block">{st.full_name}</span>
                      <span className="text-slate-400 text-[11px]">{st.phone || st.email}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromGroup(st)}
                      className="px-2.5 py-1 rounded-lg text-rose-600 bg-rose-50 hover:bg-rose-100 text-[11px] font-bold transition cursor-pointer"
                    >
                      Guruhdan chiqarish
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* MODAL 3: CREATE GROUP */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Yangi O'quv Guruhi Yaratish"
      >
        <form onSubmit={handleCreateGroup} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Guruh nomi</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masalan: IELTS Intensive Autumn 2026"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">CEFR Darajasi</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as CEFRLevel)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="A1">A1 - Beginner</option>
                <option value="A2">A2 - Elementary</option>
                <option value="B1">B1 - Intermediate</option>
                <option value="B2">B2 - Upper-Intermediate</option>
                <option value="C1">C1 - Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Maksimal Sig'im</label>
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Dars Kunlari</label>
              <select
                value={scheduleDays}
                onChange={(e) => setScheduleDays(e.target.value as 'MWF' | 'TTS')}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="MWF">Dushanba / Chorshanba / Juma</option>
                <option value="TTS">Seshanba / Payshanba / Shanba</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Dars Soati</label>
              <select
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="09:00 - 10:30">09:00 - 10:30</option>
                <option value="11:00 - 12:30">11:00 - 12:30</option>
                <option value="14:00 - 15:30">14:00 - 15:30</option>
                <option value="16:30 - 18:00">16:30 - 18:00</option>
                <option value="18:30 - 20:00">18:30 - 20:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Biriktirilgan Ustoz</label>
            <input
              type="text"
              required
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="Malika Karimova"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Filial va Sinf Xonasi</label>
            <input
              type="text"
              required
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Oybek Campus, Room 304"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition cursor-pointer"
            >
              Guruhni Saqlash
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL 4: CREATE STUDENT */}
      <Modal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        title="Yangi O'quvchini Ro'yxatga Olish (CRM Auth)"
      >
        <form onSubmit={handleCreateStudent} className="space-y-4">
          {studentMessage && (
            <div className={`p-3 rounded-xl text-xs font-bold ${
              studentMessage.includes('xatolik') || studentMessage.includes('Xatolik') 
                ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}>
              {studentMessage}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">O'quvchining Ism-Familiyasi</label>
            <input
              type="text"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Masalan: Sardor Ergashev"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email / Login</label>
              <input
                type="email"
                required
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                placeholder="sardor@premier.uz"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Telefon Raqam (+998)</label>
              <input
                type="text"
                required
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
                placeholder="+998 90 123 45 67"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Parol</label>
              <input
                type="text"
                required
                value={studentPassword}
                onChange={(e) => setStudentPassword(e.target.value)}
                placeholder="premier2026"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">CEFR Darajasi</label>
              <select
                value={studentLevel}
                onChange={(e) => setStudentLevel(e.target.value as CEFRLevel)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="A1">A1 - Beginner</option>
                <option value="A2">A2 - Elementary</option>
                <option value="B1">B1 - Intermediate</option>
                <option value="B2">B2 - Upper-Intermediate</option>
                <option value="C1">C1 - Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Biriktiriladigan Guruh</label>
            <select
              value={targetGroupId}
              onChange={(e) => setTargetGroupId(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            >
              <option value="">Guruh tanlanmagan (Hozircha guruhsiz)</option>
              {groups.map(g => (
                <option key={g.id} value={g.id}>{g.name} ({g.level}) - {g.schedule}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsStudentModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition cursor-pointer"
            >
              O'quvchini Bazaga Saqlash
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL 5: STUDENT CREDENTIALS & LOGIN/PASSWORD */}
      <Modal
        isOpen={!!selectedStudentForCredentials}
        onClose={() => { setSelectedStudentForCredentials(null); setCopiedField(null); }}
        title="O'quvchining Shaxsiy Login & Parol Ma'lumotlari"
      >
        {selectedStudentForCredentials && (
          <div className="space-y-4">
            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-sm font-black text-slate-900">{selectedStudentForCredentials.full_name}</div>
                <div className="text-xs text-slate-500">
                  {selectedStudentForCredentials.level || 'B1'} daraja • {selectedStudentForCredentials.phone || 'Telefon kiritilmagan'}
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                selectedStudentForCredentials.status === 'left'
                  ? 'bg-rose-100 text-rose-800'
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                {selectedStudentForCredentials.status === 'left' ? "Kelmayapti (Ketgan)" : "Faol o'quvchi"}
              </span>
            </div>

            <div className="space-y-3">
              {/* Login/Email */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Login / Email</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(selectedStudentForCredentials.email, 'login')}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    {copiedField === 'login' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'login' ? "Nusxa olindi!" : "Nusxa olish"}</span>
                  </button>
                </div>
                <div className="font-mono text-xs font-bold text-slate-900 select-all">
                  {selectedStudentForCredentials.email}
                </div>
              </div>

              {/* Password */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Kirish Paroli</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(selectedStudentForCredentials.password || 'premier2026', 'password')}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    {copiedField === 'password' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'password' ? "Nusxa olindi!" : "Nusxa olish"}</span>
                  </button>
                </div>
                <div className="font-mono text-sm font-black text-indigo-700 select-all tracking-wider">
                  {selectedStudentForCredentials.password || 'premier2026'}
                </div>
              </div>

              {/* Payment Info */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">To'lov Tarifi</span>
                  <span className="font-bold text-slate-800">
                    {selectedStudentForCredentials.payment_type === 'free' 
                      ? 'Grant (Bepul)' 
                      : selectedStudentForCredentials.payment_type === 'custom' 
                      ? `Maxsus (${selectedStudentForCredentials.custom_fee ? selectedStudentForCredentials.custom_fee.toLocaleString() + " so'm" : "kelishilgan"})` 
                      : "To'liq (Standart)"}
                  </span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Tug'ilgan sana</span>
                  <span className="font-bold text-slate-800">{selectedStudentForCredentials.birth_date || "Kiritilmagan"}</span>
                </div>
              </div>

              {/* One-click SMS/Telegram Message copy */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const smsText = `Assalomu alaykum, hurmatli ota-ona! Premier School platformasidagi shaxsiy kabinet login ma'lumotlari:\nO'quvchi: ${selectedStudentForCredentials.full_name}\nLogin: ${selectedStudentForCredentials.email}\nParol: ${selectedStudentForCredentials.password || 'premier2026'}\nKirish: https://premier-school-lms.vercel.app/login`;
                    copyToClipboard(smsText, 'all');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {copiedField === 'all' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedField === 'all' ? "Ota-ona uchun SMS nusxalandi!" : "Ota-ona uchun to'liq SMS xabarini nusxalash"}</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleDeleteStudent(selectedStudentForCredentials)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-bold border border-rose-200 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>O'quvchini O'chirish</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStudentForCredentials(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* MODAL 6: EDIT GROUP */}
      <Modal
        isOpen={!!editingGroup}
        onClose={() => setEditingGroup(null)}
        title={editingGroup ? `Guruhni Tahrirlash: ${editingGroup.name}` : "Guruhni Tahrirlash"}
      >
        {editingGroup && (
          <form onSubmit={handleSaveEditGroup} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Guruh nomi</label>
              <input
                type="text"
                required
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Masalan: IELTS Intensive Autumn 2026"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-bold text-slate-900"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Guruh nomi o'zgartirilsa, unga biriktirilgan barcha o'quvchilar profilida ham avtomatik yangilanadi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">CEFR Darajasi</label>
                <select
                  value={editLevel}
                  onChange={(e) => setEditLevel(e.target.value as CEFRLevel)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-bold"
                >
                  <option value="A1">A1 - Beginner</option>
                  <option value="A2">A2 - Elementary</option>
                  <option value="B1">B1 - Intermediate</option>
                  <option value="B2">B2 - Upper-Intermediate</option>
                  <option value="C1">C1 - Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Maksimal Sig'im (o'rin)</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={editCapacity}
                  onChange={(e) => setEditCapacity(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Dars Kunlari</label>
                <select
                  value={editScheduleDays}
                  onChange={(e) => setEditScheduleDays(e.target.value as 'MWF' | 'TTS' | 'custom')}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium"
                >
                  <option value="MWF">Dushanba / Chorshanba / Juma</option>
                  <option value="TTS">Seshanba / Payshanba / Shanba</option>
                  <option value="custom">Boshqa / Maxsus jadval</option>
                </select>
              </div>

              {editScheduleDays !== 'custom' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Dars Soati</label>
                  <select
                    value={editScheduleTime}
                    onChange={(e) => setEditScheduleTime(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium"
                  >
                    <option value="09:00 - 10:30">09:00 - 10:30</option>
                    <option value="11:00 - 12:30">11:00 - 12:30</option>
                    <option value="14:00 - 15:30">14:00 - 15:30</option>
                    <option value="16:30 - 18:00">16:30 - 18:00</option>
                    <option value="18:30 - 20:00">18:30 - 20:00</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Maxsus Jadval Matni</label>
                  <input
                    type="text"
                    value={editCustomSchedule}
                    onChange={(e) => setEditCustomSchedule(e.target.value)}
                    placeholder="Masalan: Shanba / Yakshanba 10:00 - 12:00"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Biriktirilgan Ustoz</label>
              <input
                type="text"
                required
                value={editTeacherName}
                onChange={(e) => setEditTeacherName(e.target.value)}
                placeholder="Malika Karimova"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Filial va Sinf Xonasi</label>
              <input
                type="text"
                required
                value={editRoom}
                onChange={(e) => setEditRoom(e.target.value)}
                placeholder="Oybek Campus, Room 304"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden font-medium"
              />
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  const grpToDel = editingGroup;
                  setEditingGroup(null);
                  if (grpToDel) handleDeleteGroup(grpToDel);
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-bold border border-rose-200 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Guruhni O'chirish</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingGroup(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition cursor-pointer shadow-sm"
                >
                  O'zgarishlarni Saqlash ✓
                </button>
              </div>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
