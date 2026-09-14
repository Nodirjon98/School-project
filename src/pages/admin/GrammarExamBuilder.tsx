import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { ESSENTIAL_GRAMMAR_UNITS } from '../../data/essentialGrammarData';
import { Modal } from '../../components/common/Modal';
import { 
  Plus, CheckSquare, Clock, ShieldCheck, Sparkles, 
  Trash2, FileText, CheckCircle2, Award, Zap, ChevronRight 
} from 'lucide-react';

export interface GrammarExam {
  id: string;
  title: string;
  description: string;
  targetLevel: string;
  durationMinutes: number;
  passPercentage: number;
  maxScore: number;
  targetGroupId?: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanationUz: string;
    points: number;
  }[];
  createdAt: string;
}

export const GrammarExamBuilder: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { groups } = useLMSData();

  const [exams, setExams] = useState<GrammarExam[]>([
    {
      id: 'g-exam-1',
      title: 'Beginner Grammar Midterm Exam (Units 1–5)',
      description: 'am/is/are, Present Continuous, and Present Simple topic mastery test.',
      targetLevel: 'A1 Beginner',
      durationMinutes: 20,
      passPercentage: 70,
      maxScore: 100,
      questions: [
        {
          id: 'q-m1',
          question: 'Where ______ your brother living nowadays?',
          options: ['is', 'are', 'am', 'do'],
          correctAnswer: 'is',
          explanationUz: 'Your brother (he) bo\'lgani uchun "is" ishlatiladi.',
          points: 20
        },
        {
          id: 'q-m2',
          question: 'Listen! Somebody ______ the piano in the music room.',
          options: ['plays', 'is playing', 'play', 'are playing'],
          correctAnswer: 'is playing',
          explanationUz: 'Hozir ayni paytda bo\'layotgani (Listen!) uchun Present Continuous.',
          points: 20
        },
        {
          id: 'q-m3',
          question: 'Terry ______ in a bank in downtown Tashkent.',
          options: ['works', 'work', 'is work', 'working'],
          correctAnswer: 'works',
          explanationUz: 'Terry (he) uchinchi shaxs birlikda Present Simple -s qo\'shimchasini oladi.',
          points: 20
        },
        {
          id: 'q-m4',
          question: '______ your parents at home right now?',
          options: ['Are', 'Is', 'Do', 'Have'],
          correctAnswer: 'Are',
          explanationUz: 'Parents ko\'plikda bo\'lgani uchun "Are" ishlatiladi.',
          points: 20
        },
        {
          id: 'q-m5',
          question: 'It\'s 10:00 PM. I ______ hungry, but I\'m very tired.',
          options: ['am not', 'isn\'t', 'aren\'t', 'don\'t'],
          correctAnswer: 'am not',
          explanationUz: 'I bilan inkor shakli "am not".',
          points: 20
        }
      ],
      createdAt: '2025-01-15T10:00:00Z'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [examTitle, setExamTitle] = useState('');
  const [examDesc, setExamDesc] = useState('');
  const [duration, setDuration] = useState(25);
  const [passPercent, setPassPercent] = useState(70);
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = useState<any[]>([]);
  const [publishedMessage, setPublishedMessage] = useState<string | null>(null);

  const handleAddQuestionFromUnit = (ex: any) => {
    if (selectedQuestions.some(q => q.id === ex.id)) return;
    setSelectedQuestions(prev => [
      ...prev,
      {
        id: ex.id,
        question: ex.prompt,
        options: ex.options || ['True', 'False'],
        correctAnswer: ex.correctAnswer,
        explanationUz: ex.explanationUz,
        points: ex.points || 20
      }
    ]);
  };

  const handleRemoveQuestion = (id: string) => {
    setSelectedQuestions(prev => prev.filter(q => q.id !== id));
  };

  const handleCreateExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!examTitle || selectedQuestions.length === 0) return;

    const newExam: GrammarExam = {
      id: `exam-${Date.now()}`,
      title: examTitle,
      description: examDesc,
      targetLevel: 'A1-A2 Elementary',
      durationMinutes: Number(duration),
      passPercentage: Number(passPercent),
      maxScore: selectedQuestions.reduce((acc, q) => acc + q.points, 0),
      questions: selectedQuestions,
      createdAt: new Date().toISOString()
    };

    setExams(prev => [newExam, ...prev]);
    setPublishedMessage(`✅ "${examTitle}" imtihoni muvaffaqiyatli saqlandi va o'quvchilar uchun e'lon qilindi!`);

    setTimeout(() => {
      setIsModalOpen(false);
      setPublishedMessage(null);
      setExamTitle('');
      setExamDesc('');
      setSelectedQuestions([]);
    }, 1800);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Grammatika Imtihonlari va Savollar Bazasi (Question Bank)
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
              Exam Builder
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Raqamlashtirilgan Raymond Murphy darsligidan yoki o'zingiz kiritgan manbalardan mavzulashtirilgan vaqtli grammatika imtihonlarini tuzish.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Yangi Imtihon Yaratish</span>
        </button>
      </div>

      {/* Published Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exams.map(ex => (
          <div key={ex.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {ex.targetLevel}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  O'tish bali: {ex.passPercentage}%
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900">{ex.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">{ex.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> {ex.durationMinutes} Daqiqa
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> {ex.questions.length} ta Savol
                </span>
                <span className="font-bold text-indigo-600">
                  Maks: {ex.maxScore} ball
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  Yaratildi: {new Date(ex.createdAt).toLocaleDateString()}
                </span>
                <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Faol Imtihon
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Exam Builder */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Yangi Mavzulashtirilgan Grammatika Imtihoni Yaratish"
        maxWidth="xl"
      >
        <form onSubmit={handleCreateExam} className="space-y-4">
          {publishedMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              {publishedMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Imtihon Nomi</label>
              <input
                type="text"
                required
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                placeholder="Masalan: Progress Test 1 (Present Tenses)"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Qisqacha Ta'rif</label>
              <input
                type="text"
                value={examDesc}
                onChange={(e) => setExamDesc(e.target.value)}
                placeholder="Imtihon qaysi unitlarni qamrab oladi..."
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Vaqt Chegarasi (Daqiqada)</label>
              <input
                type="number"
                min="5"
                max="120"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">O'tish Bali (%)</label>
              <input
                type="number"
                min="30"
                max="100"
                value={passPercent}
                onChange={(e) => setPassPercent(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-emerald-700"
              />
            </div>
          </div>

          {/* Question Bank Selector from Digitized Murphy Units */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                1. Raqamlashtirilgan Darslikdan Savollar Tanlash (Question Bank)
              </span>
              <select
                value={selectedUnitIdx}
                onChange={(e) => setSelectedUnitIdx(Number(e.target.value))}
                className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold"
              >
                {ESSENTIAL_GRAMMAR_UNITS.map((u, i) => (
                  <option key={u.unitNumber} value={i}>Unit {u.unitNumber}: {u.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {ESSENTIAL_GRAMMAR_UNITS[selectedUnitIdx]?.exercises.map(ex => (
                <div key={ex.id} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 truncate">{ex.prompt}</p>
                    <p className="text-[10px] text-slate-400">To'g'ri javob: {ex.correctAnswer}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddQuestionFromUnit(ex)}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg hover:bg-indigo-100 transition shrink-0"
                  >
                    + Tanlash
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Questions for this Exam */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
              2. Imtihon Savollari Ro'yxati ({selectedQuestions.length} ta savol)
            </span>

            {selectedQuestions.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                Yuqoridagi bazadan savollarni tanlang
              </div>
            ) : (
              <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                {selectedQuestions.map((q, idx) => (
                  <div key={q.id} className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-indigo-900">{idx + 1}. {q.question}</span>
                      <span className="text-[10px] text-indigo-600 block">Javob: {q.correctAnswer}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveQuestion(q.id)}
                      className="p-1 rounded text-rose-600 hover:bg-rose-50 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
              disabled={selectedQuestions.length === 0}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition disabled:opacity-40 shadow-sm"
            >
              Imtihonni Saqlash & E'lon Qilish
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
