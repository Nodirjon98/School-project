import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useAuth } from '../../contexts/AuthContext';
import { HomeworkType, Homework } from '../../types';
import { Modal } from '../../components/common/Modal';
import { 
  Plus, CheckSquare, Clock, User, CheckCircle2, 
  Send, AlertCircle, Calendar, FileText, Sparkles, RotateCcw 
} from 'lucide-react';
import { gradeSubmissionAI } from '../../lib/ai';

export const HomeworkManager: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useAuth();
  const { groups, homeworks, submissions, createHomework, gradeSubmission } = useLMSData();

  const [activeTab, setActiveTab] = useState<'assigned' | 'submissions'>('submissions');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [gradingSubId, setGradingSubId] = useState<string | null>(null);
  const [gradeScore, setGradeScore] = useState<number>(85);
  const [gradeFeedback, setGradeFeedback] = useState<string>('Yaxshi tahliliy insho. Grammatik xatolar kam.');
  const [isAiGrading, setIsAiGrading] = useState(false);

  const handleAiAssist = async (sub: any) => {
    const hw = homeworks.find(h => h.id === sub.homework_id);
    const text = sub.submission_data?.written_text || '';
    if (!text || !hw) return;

    setIsAiGrading(true);
    try {
      const promptText = hw.content.prompt || hw.description || hw.title;
      const result = await gradeSubmissionAI(promptText, text, hw.max_score);
      setGradeScore(result.suggestedScore);
      setGradeFeedback(result.feedback);
    } catch (e) {
      console.error('AI grading assist error:', e);
    } finally {
      setIsAiGrading(false);
    }
  };

  // Create Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newGroupId, setNewGroupId] = useState(groups[0]?.id || '');
  const [newType, setNewType] = useState<HomeworkType>('writing');
  const [newDueDate, setNewDueDate] = useState('2026-09-15');
  const [newMaxScore, setNewMaxScore] = useState(100);
  const [newPrompt, setNewPrompt] = useState('');

  const handleCreateHomework = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    await createHomework({
      group_id: newGroupId,
      teacher_id: profile?.id || 't1',
      title: newTitle,
      description: newDesc,
      type: newType,
      due_date: newDueDate,
      max_score: Number(newMaxScore),
      content: {
        prompt: newPrompt,
        questions: newType === 'multiple_choice' ? [
          {
            id: 'q1',
            question: 'Which word best replaces "significant" in academic writing?',
            options: ['Substantial', 'Big', 'Lots', 'Nice'],
            correct_answer: 'Substantial',
            points: 50
          },
          {
            id: 'q2',
            question: 'Identify the grammatically correct inverted structure:',
            options: [
              'Hardly had he arrived when the bell rang',
              'Hardly he had arrived when the bell rang',
              'Hardly did he arrived when the bell rang',
              'Hardly had he arrived than the bell rang'
            ],
            correct_answer: 'Hardly had he arrived when the bell rang',
            points: 50
          }
        ] : []
      }
    });

    setIsCreateModalOpen(false);
    setNewTitle('');
    setNewDesc('');
    setNewPrompt('');
  };

  const handleSaveGrade = async (subId: string) => {
    await gradeSubmission(subId, gradeScore, gradeFeedback);
    setGradingSubId(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('homeworkManagerTitle')}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {t('homeworkManagerSubtitle')}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('submissions')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'submissions' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Topshirilganlar ({submissions.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('assigned')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'assigned' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Berilgan vazifalar ({homeworks.length})
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Yangi vazifa</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Submissions to Grade */}
      {activeTab === 'submissions' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 font-bold text-xs text-slate-700 uppercase tracking-wider">
            O'quvchilar tomonidan topshirilgan ishlar
          </div>

          <div className="divide-y divide-slate-100">
            {submissions.map((sub) => {
              const isGraded = sub.status === 'graded';
              const isBeingGraded = gradingSubId === sub.id;

              return (
                <div key={sub.id} className="p-5 hover:bg-slate-50/70 transition space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">
                          {sub.student_name || "O'quvchi"}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-semibold text-slate-600">
                          {sub.homework_title || 'IELTS Writing Task 2 Essay'}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Topshirildi: {new Date(sub.submitted_at).toLocaleString()}
                        {sub.is_late && <span className="text-rose-600 font-bold ml-1.5">(Kechikkan)</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isGraded ? (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Baholangan: {sub.score} / {sub.max_score || 100} ball
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setGradingSubId(sub.id);
                            setGradeScore(sub.score || 85);
                            setGradeFeedback(sub.feedback || '');
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition"
                        >
                          Baholash
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Submission Content Text */}
                  {sub.submission_data?.written_text && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed max-h-40 overflow-y-auto">
                      <span className="font-bold text-slate-900 block mb-1">O'quvchi matni:</span>
                      <p className="whitespace-pre-line">{sub.submission_data.written_text}</p>
                    </div>
                  )}

                  {/* Feedback preview if already graded */}
                  {isGraded && sub.feedback && (
                    <div className="text-xs text-slate-600 italic bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                      Ustoz izohi: "{sub.feedback}"
                    </div>
                  )}

                  {/* Inline Grading Form */}
                  {isBeingGraded && (
                    <div className="mt-3 p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 space-y-3 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-indigo-900">Inshoni baholash va taqriz berish</span>
                          {sub.submission_data?.written_text && (
                            <button
                              type="button"
                              disabled={isAiGrading}
                              onClick={() => handleAiAssist(sub)}
                              className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-2xs"
                              title="Gemini AI yordamida avtomatik tahlil va baholash"
                            >
                              {isAiGrading ? (
                                <>
                                  <RotateCcw className="w-3 h-3 animate-spin" />
                                  <span>AI tahlil qilmoqda...</span>
                                </>
                              ) : (
                                <>
                                  <Sparkles className="w-3 h-3 text-amber-300" />
                                  <span>AI bilan baholash (Gemini 3.8)</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-700">Ball:</span>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={gradeScore}
                            onChange={(e) => setGradeScore(Number(e.target.value))}
                            className="w-20 px-2.5 py-1 bg-white border border-indigo-300 rounded-lg text-xs font-bold text-indigo-900"
                          />
                        </div>
                      </div>

                      <textarea
                        rows={3}
                        value={gradeFeedback}
                        onChange={(e) => setGradeFeedback(e.target.value)}
                        placeholder="O'quvchiga tavsiyalar, kamchiliklar va tuzatishlar..."
                        className="w-full p-2.5 bg-white border border-indigo-200 rounded-lg text-xs focus:outline-hidden focus:border-indigo-500"
                      />

                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setGradingSubId(null)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-semibold"
                        >
                          Bekor qilish
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSaveGrade(sub.id)}
                          className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs"
                        >
                          Bahoni saqlash (+XP o'quvchiga)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Assigned Homework List */}
      {activeTab === 'assigned' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeworks.map(hw => (
            <div key={hw.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  {hw.type.replace('_', ' ')}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Maks: {hw.max_score} ball
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{hw.title}</h3>
              <p className="text-xs text-slate-500 mb-4 line-clamp-2">{hw.description}</p>
              
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Muddati: {new Date(hw.due_date).toLocaleDateString()}</span>
                <span className="font-semibold text-blue-600">Guruh: IELTS Intensive</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal: Create Homework */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Yangi uy vazifasi yaratish"
        maxWidth="lg"
      >
        <form onSubmit={handleCreateHomework} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Mavzu / Sarlavha</label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Masalan: IELTS Writing Task 2: Technology in Education"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Guruhni tanlang</label>
              <select
                value={newGroupId}
                onChange={(e) => setNewGroupId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                {groups.map(g => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Vazifa turi</label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as HomeworkType)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="writing">Insho / Yozma ish (Writing)</option>
                <option value="multiple_choice">Test (Multiple Choice - Auto Graded)</option>
                <option value="fill_in_gap">Bo'shliqni to'ldirish (Fill-in-gap)</option>
                <option value="matching">Moslashtirish (Matching)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Topshirish muddati</label>
              <input
                type="date"
                required
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Maksimal ball</label>
              <input
                type="number"
                value={newMaxScore}
                onChange={(e) => setNewMaxScore(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Qisqacha ta'rif</label>
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="O'quvchilar uchun qisqa ko'rsatma..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Topshiriq / Savol matni (Prompt)
            </label>
            <textarea
              rows={4}
              value={newPrompt}
              onChange={(e) => setNewPrompt(e.target.value)}
              placeholder="Topshiriqning to'liq matnini kiriting..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition"
            >
              Vazifani biriktirish
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
