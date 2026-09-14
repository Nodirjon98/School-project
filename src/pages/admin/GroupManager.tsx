import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useAuth } from '../../contexts/AuthContext';
import { CEFRLevel, Group, Profile } from '../../types';
import { Modal } from '../../components/common/Modal';
import { 
  Users, Plus, Clock, MapPin, 
  UserPlus, Search, ShieldCheck, Phone, Mail, CheckCircle2, UserCheck
} from 'lucide-react';
import { getStorageItem, setStorageItem } from '../../lib/storage';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

export const GroupManager: React.FC = () => {
  const { t } = useLanguage();
  const { groups, createGroup } = useLMSData();
  const { signUp } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  // Group Form states
  const [name, setName] = useState('');
  const [level, setLevel] = useState<CEFRLevel>('B2');
  const [schedule, setSchedule] = useState('Dush / Chor / Jum 18:30 - 20:00');
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

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    await createGroup({
      name,
      level,
      teacher_id: 't1',
      teacher_name: teacherName,
      schedule,
      room,
      capacity: Number(capacity),
      students_count: 0
    });

    setIsModalOpen(false);
    setName('');
  };

  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentEmail || !studentName) return;

    setStudentMessage('');
    const res = await signUp(studentEmail, studentPassword, studentName, 'student');
    
    if (res.error) {
      setStudentMessage(`Xatolik: ${res.error}`);
      return;
    }

    // Assign to group and update profile phone/group_id
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').update({
          phone: studentPhone,
          group_id: targetGroupId,
          level: studentLevel
        }).eq('email', studentEmail.toLowerCase());
      } catch (err) {
        console.warn('Supabase student update error:', err);
      }
    }

    setStudentMessage(`✅ O'quvchi "${studentName}" muvaffaqiyatli saqlandi! Login: ${studentEmail}`);
    setTimeout(() => {
      setIsStudentModalOpen(false);
      setStudentMessage('');
      setStudentName('');
      setStudentEmail('');
    }, 1500);
  };

  const filteredGroups = groups.filter(g => 
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.room?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('manageGroupsTitle')}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Guruhlar jadvali, xonalar va yangi o'quvchilarni ro'yxatga olish (Phase 1 CRM)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsStudentModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition shadow-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>+ Yangi O'quvchi Qo'shish</span>
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>+ Yangi Guruh Ochish</span>
          </button>
        </div>
      </div>

      {/* Search filter */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Guruh nomi, CEFR darajasi yoki xona bo'yicha qidirish..."
          className="w-full text-xs font-medium bg-transparent focus:outline-hidden text-slate-900 placeholder:text-slate-400"
        />
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGroups.map(g => (
          <div key={g.id} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-indigo-300 transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {g.level} Daraja
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  {g.students_count || 12} / {g.capacity || 14} o'quvchi
                </span>
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

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Ustoz: {g.teacher_name || 'Malika Karimova'}</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Faol Guruh
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Create Group */}
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

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Dars Vaqti va Kunlari</label>
            <input
              type="text"
              required
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              placeholder="Dush / Chor / Jum 18:30 - 20:00"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
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
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition"
            >
              Guruhni saqlash
            </button>
          </div>
        </form>
      </Modal>

      {/* Modal: Create Student Profile */}
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
              <option value="">Guruh tanlanmagan (Hali guruhsiz)</option>
              {groups.map(g => (
                <option key={g.id} value={g.id}>{g.name} ({g.level}) - {g.schedule}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsStudentModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition"
            >
              O'quvchini Bazaga Saqlash
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

