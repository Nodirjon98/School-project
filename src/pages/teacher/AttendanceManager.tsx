import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { AttendanceStatus } from '../../types';
import { 
  ClipboardCheck, Users, Calendar, Check, 
  X, Clock, AlertCircle, Save 
} from 'lucide-react';

interface StudentRosterItem {
  id: string;
  name: string;
  phone: string;
}

export const AttendanceManager: React.FC = () => {
  const { t } = useLanguage();
  const { groups, lessons, markAttendance, students } = useLMSData();

  const [selectedGroupId, setSelectedGroupId] = useState(groups[0]?.id || '');
  const groupLessons = lessons.filter(l => !selectedGroupId || l.group_id === selectedGroupId);
  const [selectedLessonId, setSelectedLessonId] = useState(groupLessons[0]?.id || lessons[0]?.id || '');
  const [attendanceRecords, setAttendanceRecords] = useState<Record<string, { status: AttendanceStatus; notes: string }>>({});
  const [savedSuccess, setSavedSuccess] = useState(false);

  const roster = students.filter(s => s.role === 'student' && s.group_id === selectedGroupId && s.status !== 'left');

  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    setAttendanceRecords(prev => ({
      ...prev,
      [studentId]: {
        ...(prev[studentId] || { notes: '' }),
        status
      }
    }));
    setSavedSuccess(false);
  };

  const handleNotesChange = (studentId: string, notes: string) => {
    setAttendanceRecords(prev => ({
      ...prev,
      [studentId]: {
        ...(prev[studentId] || { status: 'present' }),
        notes
      }
    }));
  };

  const handleSaveAll = async () => {
    for (const student of roster) {
      const rec = attendanceRecords[student.id] || { status: 'present', notes: '' };
      await markAttendance(selectedLessonId, student.id, rec.status, rec.notes);
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const selectedGroup = groups.find(g => g.id === selectedGroupId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('attendanceTitle')}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {t('attendanceSubtitle')}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveAll}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>{savedSuccess ? 'Saqlandi!' : t('saveAttendanceBtn')}</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Davomat muvaffaqiyatli saqlandi va talabalar profiliga kiritildi.</span>
        </div>
      )}

      {/* Selectors Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Guruhni tanlang</label>
          <select
            value={selectedGroupId}
            onChange={(e) => setSelectedGroupId(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden focus:border-blue-500"
          >
            {groups.map(g => (
              <option key={g.id} value={g.id}>{g.name} ({g.schedule})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Dars / Mavzuni tanlang</label>
          <select
            value={selectedLessonId}
            onChange={(e) => setSelectedLessonId(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden focus:border-blue-500"
          >
            {lessons.map(l => (
              <option key={l.id} value={l.id}>{l.title} - {l.topic}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Attendance Roster Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            O'quvchilar ro'yxati ({roster.length} nafar)
          </span>
          <span className="text-xs text-slate-500">
            {selectedGroup?.name} • Xona: {selectedGroup?.room || '304'}
          </span>
        </div>

        {roster.length === 0 ? (
          <div className="p-10 text-center">
            <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-sm font-bold text-slate-700">Ushbu guruhga hali o'quvchilar biriktirilmagan</h4>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              Administrator paneli &rarr; "Guruhlar & O'quvchilar" bo'limiga o'tib, 36 nafar real o'quvchilarni ushbu guruhga taqsimlang.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {roster.map((student, idx) => {
              const currentRec = attendanceRecords[student.id] || { status: 'present', notes: '' };

              return (
                <div key={student.id} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/60 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 font-bold text-slate-600 text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{student.full_name}</h4>
                      <span className="text-[11px] text-slate-400">{student.phone || student.email}</span>
                    </div>
                  </div>

                  {/* Status selector buttons */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleStatusChange(student.id, 'present')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                        currentRec.status === 'present'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{t('present')}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleStatusChange(student.id, 'late')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                        currentRec.status === 'late'
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t('late')}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleStatusChange(student.id, 'absent')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                        currentRec.status === 'absent'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{t('absent')}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleStatusChange(student.id, 'excused')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                        currentRec.status === 'excused'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{t('excused')}</span>
                    </button>
                  </div>

                  {/* Teacher Note input */}
                  <div className="w-full md:w-64">
                    <input
                      type="text"
                      value={currentRec.notes}
                      onChange={(e) => handleNotesChange(student.id, e.target.value)}
                      placeholder="Izoh yozish (ixtiyoriy)..."
                      className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-hidden focus:border-blue-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
