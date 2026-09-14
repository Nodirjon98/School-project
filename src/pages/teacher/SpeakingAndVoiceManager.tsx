import React, { useState } from 'react';
import { 
  Mic, Volume2, Award, Users, CheckCircle2, 
  Sparkles, Sliders, MessageSquare, AlertCircle, 
  Search, ShieldCheck, Flame, BookOpen, Clock
} from 'lucide-react';
import { SafoyevVoiceCloneStudio } from '../../components/speaking/SafoyevVoiceCloneStudio';
import { useAuth } from '../../contexts/AuthContext';
import { useLMSData } from '../../contexts/LMSDataContext';

export const SpeakingAndVoiceManager: React.FC = () => {
  const { profile } = useAuth();
  const { groups } = useLMSData();

  const [activeTab, setActiveTab] = useState<'voice_clone' | 'student_sessions' | 'pronunciation_stats'>('voice_clone');
  const [selectedGroup, setSelectedGroup] = useState('all');

  // Mock initial student speaking sessions
  const studentSessions = [
    {
      id: 'sess-1',
      studentName: 'Madina Karimova',
      group: 'IELTS Intensive A',
      topic: 'IELTS Part 1: Hometown & City Life',
      date: '2026-09-06 14:20',
      overallBand: 7.5,
      fluency: 7.5,
      lexical: 8.0,
      grammar: 7.0,
      pronunciation: 7.5,
      correctionsCount: 1,
      teacherNote: 'Ajoyib so\'z boyligi. Grammatikada "I agree" fe\'lini to\'g\'ri qo\'lladi.'
    },
    {
      id: 'sess-2',
      studentName: 'Javohir Toshmatov',
      group: 'IELTS Intensive B',
      topic: 'IELTS Part 3: Technology & Human Interaction',
      date: '2026-09-06 11:15',
      overallBand: 6.5,
      fluency: 6.0,
      lexical: 7.0,
      grammar: 6.5,
      pronunciation: 6.5,
      correctionsCount: 3,
      teacherNote: 'Gapirish tezligini biroz oshirish va misollar keltirishda aniqlik kerak.'
    },
    {
      id: 'sess-3',
      studentName: 'Shaxzoda Umarova',
      group: 'TOEFL Advanced',
      topic: 'TOEFL Academic Debate: Education Reform',
      date: '2026-09-05 16:45',
      overallBand: 8.0,
      fluency: 8.0,
      lexical: 8.5,
      grammar: 8.0,
      pronunciation: 7.5,
      correctionsCount: 0,
      teacherNote: 'Yuqori darajadagi akademik argumentlar va mukammal bog\'lovchi so\'zlar.'
    }
  ];

  // Mock pronunciation records
  const difficultWords = [
    { word: 'hierarchy', category: 'TOEFL Academic', attempts: 42, avgAccuracy: 64, trickySound: '/ˈhaɪ.ə.rɑː.ki/' },
    { word: 'phenomenon', category: '4000 Essential Words', attempts: 58, avgAccuracy: 68, trickySound: '/fəˈnɒm.ɪ.nən/' },
    { word: 'conscientious', category: 'TOEFL Advanced', attempts: 37, avgAccuracy: 59, trickySound: '/ˌkɒn.ʃiˈen.ʃəs/' },
    { word: 'deteriorate', category: 'Reading Book 4', attempts: 49, avgAccuracy: 71, trickySound: '/dɪˈtɪə.ri.ə.reɪt/' },
    { word: 'enthusiastic', category: 'Reading Book 2', attempts: 63, avgAccuracy: 76, trickySound: '/ɪnˌθjuː.ziˈæs.tɪk/' }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-indigo-900/50 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wide">
              Teacher Speaking & Voice Hub
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
              Mr. Safoyev Voice Simulation
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Speaking & Pronunciation Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            O'qituvchi Nodirjon Safoyev ovoz profilini boshqarish, talabalar bilan jonli suhbat natijalari va talaffuz laboratoriyasi statistikasi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AI Voice Model Sync: OK</span>
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 border-b border-slate-200 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('voice_clone')}
          className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'voice_clone'
              ? 'bg-white border-t-2 border-x border-slate-200 text-indigo-600 shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Mr. Safoyev Ovozini Kalibrlash (Voice Studio)</span>
        </button>

        <button
          onClick={() => setActiveTab('student_sessions')}
          className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'student_sessions'
              ? 'bg-white border-t-2 border-x border-slate-200 text-indigo-600 shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>O'quvchilar Jonli Suhbatlari ({studentSessions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('pronunciation_stats')}
          className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'pronunciation_stats'
              ? 'bg-white border-t-2 border-x border-slate-200 text-indigo-600 shadow-2xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Talaffuz Tahlili & Qiyin So'zlar</span>
        </button>
      </div>

      {/* TAB 1: Voice Clone Studio */}
      {activeTab === 'voice_clone' && (
        <div>
          <SafoyevVoiceCloneStudio />
        </div>
      )}

      {/* TAB 2: Student Live Sessions List */}
      {activeTab === 'student_sessions' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-900 text-base">O'quvchilarning Jonli Speaking Sessiyalari</h3>
              <p className="text-xs text-slate-500">Mr. Safoyev bilan 1-on-1 speaking qilgan talabalar natijalari va IELTS ballari.</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-semibold">Guruh:</span>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="text-xs p-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="all">Barcha guruhlar</option>
                {groups.map(g => (
                  <option key={g.id} value={g.name}>{g.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            {studentSessions.map(sess => (
              <div key={sess.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                      {sess.studentName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{sess.studentName}</div>
                      <div className="text-xs text-slate-500">{sess.group} • {sess.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-xl text-sm font-black border border-amber-200">
                      Overall Band {sess.overallBand}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-indigo-900">
                  Mavzu: <span className="font-normal text-slate-800">{sess.topic}</span>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-200/80 text-center">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Fluency</div>
                    <div className="font-bold text-slate-900 text-sm">{sess.fluency}</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Lexical</div>
                    <div className="font-bold text-slate-900 text-sm">{sess.lexical}</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Grammar</div>
                    <div className="font-bold text-slate-900 text-sm">{sess.grammar}</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Pronunciation</div>
                    <div className="font-bold text-slate-900 text-sm">{sess.pronunciation}</div>
                  </div>
                </div>

                <div className="text-xs text-emerald-900 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200">
                  <span className="font-bold">Ustoz xulosasi: </span>
                  {sess.teacherNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Pronunciation Stats & Difficult Words */}
      {activeTab === 'pronunciation_stats' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="pb-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">Talaffuz Laboratoriyasi & Qiyin So'zlar Reytingi</h3>
            <p className="text-xs text-slate-500">
              O'quvchilar Reading darslarida va TOEFL insholarida eng ko'p xato qilgan so'zlar ro'yxati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl">
              <span className="text-xs font-bold text-indigo-700 uppercase">Jami Talaffuz Urinishlari</span>
              <div className="text-2xl font-black text-indigo-950 mt-1">1,248 ta</div>
              <span className="text-[11px] text-indigo-700 mt-1 block">O'quvchilar tomonidan mashq qilindi</span>
            </div>

            <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-xl">
              <span className="text-xs font-bold text-emerald-700 uppercase">O'rtacha Aniqlik (Accuracy)</span>
              <div className="text-2xl font-black text-emerald-950 mt-1">82.4%</div>
              <span className="text-[11px] text-emerald-700 mt-1 block">Yaxshi daraja</span>
            </div>

            <div className="p-4 bg-amber-50/70 border border-amber-100 rounded-xl">
              <span className="text-xs font-bold text-amber-700 uppercase">Ko'p Xato Qilingan So'zlar</span>
              <div className="text-2xl font-black text-amber-950 mt-1">18 ta</div>
              <span className="text-[11px] text-amber-700 mt-1 block">Darsda alohida qaytarish tavsiya etiladi</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Eng ko'p diqqat talab qiluvchi so'zlar (Top Challenging Words)
            </h4>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              {difficultWords.map((w, idx) => (
                <div key={idx} className="p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 text-sm mr-2">{w.word}</span>
                    <span className="font-mono text-indigo-600 mr-2">{w.trickySound}</span>
                    <span className="text-[11px] text-slate-400">({w.category})</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-slate-500">{w.attempts} ta urinish</span>
                    <span className={`px-2 py-0.5 rounded-md font-bold ${
                      w.avgAccuracy < 65 ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {w.avgAccuracy}% aniqlik
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
