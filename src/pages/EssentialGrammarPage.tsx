import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useLMSData } from '../contexts/LMSDataContext';
import { ESSENTIAL_GRAMMAR_UNITS, EssentialGrammarUnit } from '../data/essentialGrammarData';
import { Modal } from '../components/common/Modal';
import { 
  BookOpen, Sparkles, CheckCircle2, XCircle, ArrowRight, 
  Send, Award, HelpCircle, Volume2, Layers, CheckSquare, RefreshCcw, ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const EssentialGrammarPage: React.FC = () => {
  const { role, profile } = useAuth();
  const { t } = useLanguage();
  const { groups, createHomework, addXP } = useLMSData();

  const [activeUnitIndex, setActiveUnitIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [checkedExerciseIds, setCheckedExerciseIds] = useState<Record<string, boolean>>({});
  const [assignModalOpen, setAssignModalOpen] = useState<boolean>(false);
  const [selectedGroupId, setSelectedGroupId] = useState<string>(groups[0]?.id || '');
  const [dueDate, setDueDate] = useState<string>('2026-09-20');
  const [assignedMessage, setAssignedMessage] = useState<string | null>(null);

  const activeUnit = ESSENTIAL_GRAMMAR_UNITS[activeUnitIndex] || ESSENTIAL_GRAMMAR_UNITS[0];

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswerChange = (exId: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [exId]: value }));
  };

  const handleCheckExercise = (exId: string, correctAnswer: string, points: number) => {
    const userVal = (userAnswers[exId] || '').trim().toLowerCase();
    const correctVal = correctAnswer.trim().toLowerCase();
    
    setCheckedExerciseIds(prev => ({ ...prev, [exId]: true }));

    if (userVal === correctVal) {
      addXP(points, `Completed Grammar Unit ${activeUnit.unitNumber} exercise`);
      try {
        confetti({ particleCount: 35, spread: 50, origin: { y: 0.7 } });
      } catch {}
    }
  };

  const handleAssignHomework = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeUnit) return;

    await createHomework({
      group_id: selectedGroupId,
      teacher_id: profile?.id || 't1',
      title: `Grammar Unit ${activeUnit.unitNumber}: ${activeUnit.title}`,
      description: `Essential Grammar in Use • ${activeUnit.summaryUz}`,
      type: 'fill_in_gap',
      due_date: dueDate,
      max_score: activeUnit.exercises.length * 15,
      content: {
        prompt: `Unit ${activeUnit.unitNumber}: ${activeUnit.title}\n\nQoidalar va formulalar bo'yicha berilgan mashqlarni bajaring.`,
        questions: activeUnit.exercises.map(ex => ({
          id: ex.id,
          question: ex.prompt,
          options: ex.options,
          correct_answer: ex.correctAnswer,
          points: ex.points
        }))
      }
    });

    setAssignedMessage(`✅ "Unit ${activeUnit.unitNumber}: ${activeUnit.title}" muvaffaqiyatli dars vazifasi qilib yuklandi!`);
    setTimeout(() => {
      setAssignModalOpen(false);
      setAssignedMessage(null);
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-sm border border-indigo-900/60 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Essential Grammar in Use • Raymond Murphy (Digitized Edition)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            114 ta Grammatika Unitlari Darsligi
          </h1>
          <p className="text-xs text-indigo-200/90 mt-1 max-w-2xl leading-relaxed">
            Ingliz tili noldan (Beginner/Elementary) o'rganuvchilar uchun formulalar, o'zbekcha tushuntirishlar, audio o'qilishi va avtomatik tekshiriladigan interaktiv darslik.
          </p>
        </div>

        {(role === 'teacher' || role === 'admin') && (
          <button
            type="button"
            onClick={() => setAssignModalOpen(true)}
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition flex items-center gap-2 flex-shrink-0"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Guruhga Vazifa Qilib Yuborish</span>
          </button>
        )}
      </div>

      {/* Main Grid: Left Unit Selector & Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (3 cols): Unit Selector List */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Grammar Units (114 Units)
            </h3>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              Elementary (A1-A2)
            </span>
          </div>

          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {ESSENTIAL_GRAMMAR_UNITS.map((unit, idx) => {
              const isActive = idx === activeUnitIndex;
              return (
                <button
                  key={unit.unitNumber}
                  type="button"
                  onClick={() => {
                    setActiveUnitIndex(idx);
                    setUserAnswers({});
                    setCheckedExerciseIds({});
                  }}
                  className={`w-full p-3 rounded-xl border text-left transition flex items-center justify-between ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                        isActive ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        Unit {unit.unitNumber}
                      </span>
                      <span className={`text-[10px] font-bold ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {unit.category}
                      </span>
                    </div>
                    <p className={`text-xs font-bold truncate mt-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {unit.title}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (8 cols): Unit Presentation, Rules & Exercises */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Active Unit Header Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                  Unit {activeUnit.unitNumber} • CEFR {activeUnit.cefrLevel}
                </span>
                <h2 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                  {activeUnit.title}
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-500">
                {activeUnit.category} Section
              </span>
            </div>

            {/* Uzbek Explanation Banner */}
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 leading-relaxed font-medium">
              <span className="font-bold block mb-0.5">🇺🇿 O'zbekcha qisqacha ta'rif:</span>
              {activeUnit.summaryUz}
            </div>

            {/* Rules & Formulas Section */}
            {activeUnit.grammarRules.map((rule, rIdx) => (
              <div key={rIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">{rule.title}</h4>
                  {rule.formula && (
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-900 text-amber-300">
                      {rule.formula}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                    <span className="font-bold text-emerald-600 block text-[11px] uppercase">(+) Positive (Tasdiq):</span>
                    {rule.positive.map((p, i) => (
                      <div key={i} className="text-slate-800 font-medium">• {p}</div>
                    ))}
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                    <span className="font-bold text-rose-600 block text-[11px] uppercase">(-) Negative (Inkor):</span>
                    {rule.negative.map((n, i) => (
                      <div key={i} className="text-slate-800 font-medium">• {n}</div>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 italic">
                  💡 {rule.explanationUz}
                </p>
              </div>
            ))}

            {/* Example Sentences with Audio Read-Along */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Namunaviy Gaplar va Talaffuz (Examples with Audio)
              </h4>

              <div className="grid grid-cols-1 gap-2">
                {activeUnit.examples.map((ex, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-900">{ex.en}</p>
                      <p className="text-slate-500 font-medium">🇺🇿 {ex.uz}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => speakText(ex.en)}
                      className="p-2 rounded-lg bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-50 transition"
                      title="Audio talaffuzni eshitish"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Exercises Card (Auto-Graded) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Interaktiv Mashqlar (Unit {activeUnit.unitNumber} Exercises)
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Avtomatik Tekshirish
              </span>
            </div>

            <div className="space-y-4">
              {activeUnit.exercises.map((ex, idx) => {
                const userVal = userAnswers[ex.id] || '';
                const isChecked = checkedExerciseIds[ex.id];
                const isCorrect = isChecked && userVal.trim().toLowerCase() === ex.correctAnswer.trim().toLowerCase();

                return (
                  <div key={ex.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-500">Mashq #{idx + 1} • {ex.instruction}</span>
                      <span className="font-bold text-amber-600">+{ex.points} XP</span>
                    </div>

                    <p className="text-sm font-bold text-slate-900">{ex.prompt}</p>

                    {/* Input or Options */}
                    {ex.type === 'multiple_choice' && ex.options ? (
                      <div className="grid grid-cols-2 gap-2">
                        {ex.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            type="button"
                            disabled={isChecked}
                            onClick={() => handleAnswerChange(ex.id, opt)}
                            className={`p-2.5 rounded-lg border text-xs font-semibold transition text-left ${
                              userVal === opt
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-400'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          disabled={isChecked}
                          value={userVal}
                          onChange={(e) => handleAnswerChange(ex.id, e.target.value)}
                          placeholder="Javobingizni yozing..."
                          className="flex-1 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-hidden focus:border-indigo-500"
                        />
                      </div>
                    )}

                    {/* Check Action Button */}
                    {!isChecked ? (
                      <button
                        type="button"
                        disabled={!userVal}
                        onClick={() => handleCheckExercise(ex.id, ex.correctAnswer, ex.points)}
                        className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition disabled:opacity-40"
                      >
                        Tekshirish
                      </button>
                    ) : (
                      <div className={`p-3 rounded-lg border text-xs space-y-1 ${
                        isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Barakalla! To'g'ri javob: "{ex.correctAnswer}"</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span>Noto'g'ri. To'g'ri javob: "{ex.correctAnswer}"</span>
                            </>
                          )}
                        </div>
                        <p className="text-[11px] opacity-80">💡 {ex.explanationUz}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Modal: Assign Unit as Homework */}
      <Modal
        isOpen={assignModalOpen}
        onClose={() => setAssignModalOpen(false)}
        title={`Unit ${activeUnit.unitNumber} ni Guruhga Vazifa Qilib Yuborish`}
        maxWidth="md"
      >
        <form onSubmit={handleAssignHomework} className="space-y-4">
          {assignedMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              {assignedMessage}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Darslik Uniti</label>
            <input
              type="text"
              disabled
              value={`Unit ${activeUnit.unitNumber}: ${activeUnit.title}`}
              className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Guruhni Tanlang</label>
            <select
              value={selectedGroupId}
              onChange={(e) => setSelectedGroupId(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
            >
              {groups.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Topshirish Muddati</label>
            <input
              type="date"
              required
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
            />
          </div>

          <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900 leading-relaxed">
            💡 Ushbu vazifa guruhdagi barcha o'quvchilar ekraniga avtomatik yuboriladi. O'quvchilar yechgach, natijalar o me'yorida baholanadi.
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setAssignModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition shadow-sm"
            >
              Vazifani e'lon qilish
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
