import React, { useState } from 'react';
import { 
  Headphones, BookOpen, CheckSquare, Users, 
  Calendar, Clock, CheckCircle2, ChevronRight, 
  Volume2, Search, Plus, Award, AlertCircle
} from 'lucide-react';
import { BASIC_TACTICS_FOR_LISTENING_UNITS } from '../../data/tacticsForListeningData';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useAuth } from '../../contexts/AuthContext';
import confetti from 'canvas-confetti';

export const TacticsListeningManager: React.FC = () => {
  const { profile } = useAuth();
  const { groups, createHomework } = useLMSData();

  const [selectedUnitNum, setSelectedUnitNum] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(groups[0]?.id || '');
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [assignSuccess, setAssignSuccess] = useState(false);

  const selectedUnit = BASIC_TACTICS_FOR_LISTENING_UNITS.find(u => u.unitNumber === selectedUnitNum) || BASIC_TACTICS_FOR_LISTENING_UNITS[0];

  const handleAssignToGroup = async () => {
    if (!selectedGroupId || !selectedUnit) return;

    await createHomework({
      group_id: selectedGroupId,
      teacher_id: profile?.id || 'teacher-1',
      title: `Tactics for Listening - Unit ${selectedUnit.unitNumber}: ${selectedUnit.title}`,
      description: `Complete Getting Started and Listening tasks for Unit ${selectedUnit.unitNumber} (${selectedUnit.title}). Practice with natural American English dialogues.`,
      due_date: dueDate,
      type: 'multiple_choice',
      max_score: 100,
      content: {
        instructions: selectedUnit.overviewUz,
        prompt: `Unit ${selectedUnit.unitNumber}: ${selectedUnit.title}`,
        questions: selectedUnit.listening1.task1.questions.map((q, idx) => ({
          id: `tfl-${selectedUnit.unitNumber}-${idx}`,
          question: q.question,
          options: q.options,
          correct_answer: q.options[q.answerIndex],
          points: Math.round(100 / selectedUnit.listening1.task1.questions.length)
        }))
      }
    });

    setAssignSuccess(true);
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
    setTimeout(() => {
      setAssignSuccess(false);
      setShowAssignModal(false);
    }, 1500);
  };

  const filteredUnits = BASIC_TACTICS_FOR_LISTENING_UNITS.filter(u => 
    u.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white border border-indigo-900/50 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Teacher Curriculum Management
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Basic Tactics for Listening (3rd Edition)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            24 ta to'liq darslik unitlari, audio dialoglar va test topshiriqlarini guruhlarga vazifa qilib berish va o'quvchilar natijalarini kuzatish.
          </p>
        </div>

        <button
          onClick={() => setShowAssignModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Guruhga vazifa qilib berish</span>
        </button>
      </div>

      {/* Grid Layout: Unit Browser & Unit Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Units List (1 col) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm">Unitlar ro'yxati (24 Units)</h3>
            <span className="text-xs text-slate-500 font-semibold">{filteredUnits.length} ta</span>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1">
            {filteredUnits.map(u => (
              <button
                key={u.unitNumber}
                onClick={() => setSelectedUnitNum(u.unitNumber)}
                className={`w-full p-3 rounded-xl text-left transition flex items-center justify-between cursor-pointer ${
                  u.unitNumber === selectedUnitNum
                    ? 'bg-indigo-600 text-white shadow-xs font-bold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div>
                  <div className="text-xs">
                    Unit {u.unitNumber}: {u.title}
                  </div>
                  <div className={`text-[10px] truncate max-w-[180px] ${u.unitNumber === selectedUnitNum ? 'text-indigo-200' : 'text-slate-500'}`}>
                    {u.topic}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Selected Unit Preview & Action (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
                Unit {selectedUnit.unitNumber} Tafsilotlari
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedUnit.title}</h2>
              <p className="text-xs text-slate-500 mt-0.5">{selectedUnit.overviewUz}</p>
            </div>

            <button
              onClick={() => setShowAssignModal(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
            >
              Ushbu unitni biriktirish
            </button>
          </div>

          {/* Target Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Asosiy ko'nikmalar (Target Skills)
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedUnit.targetSkills.map((s, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                  ✓ {s}
                </span>
              ))}
            </div>
          </div>

          {/* Listening 1 Dialogues Preview */}
          {/* Audio script preview */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2">
                <Headphones className="w-4 h-4 text-indigo-600" />
                {selectedUnit.listening1?.dialogues?.length ? 'Listening 1 Dialogue Script' : 'Conversation Practice Script'}
              </h4>
              <span className="text-xs text-indigo-600 font-semibold">
                {selectedUnit.listening1?.dialogues?.length
                  ? `${selectedUnit.listening1.dialogues.length} ta muloqot`
                  : `${selectedUnit.conversationPractice?.script?.length || 0} ta gap`}
              </span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {(selectedUnit.listening1?.dialogues?.flatMap(d => d.lines) || selectedUnit.conversationPractice?.script || []).map((line, i) => (
                <div key={i} className="text-xs">
                  <span className="font-bold text-slate-900">{line.speaker}: </span>
                  <span className="text-slate-700">{line.text}</span>
                  {line.translationUz && (
                    <span className="text-slate-500 italic block mt-0.5">🇺🇿 {line.translationUz}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sample Questions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Topshiriq savollari (Sample Questions)
            </h4>
            <div className="space-y-2">
              {selectedUnit.listening1.task1.questions.map((q, idx) => (
                <div key={q.id} className="p-3 bg-white border border-slate-200 rounded-xl text-xs">
                  <div className="font-bold text-slate-900 mb-1">
                    {idx + 1}. {q.question}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className={oIdx === q.answerIndex ? 'font-bold text-emerald-700' : ''}>
                        {String.fromCharCode(65 + oIdx)}. {opt} {oIdx === q.answerIndex ? '✓' : ''}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-lg">
              Tactics for Listening Vazifasini Biriktirish
            </h3>
            <p className="text-xs text-slate-500">
              Unit {selectedUnit.unitNumber}: {selectedUnit.title} topshiriqlarini qaysi guruhga biriktirmoqchisiz?
            </p>

            {assignSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Vazifa guruhga muvaffaqiyatli biriktirildi!</span>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Guruhni tanlang:</label>
                  <select
                    value={selectedGroupId}
                    onChange={(e) => setSelectedGroupId(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    {groups.map(g => (
                      <option key={g.id} value={g.id}>
                        {g.name} ({g.level}) - {g.schedule}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Topshirish muddati (Due Date):</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-2">
                  <button
                    onClick={() => setShowAssignModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Bekor qilish
                  </button>
                  <button
                    onClick={handleAssignToGroup}
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold cursor-pointer transition shadow-xs"
                  >
                    Vazifani yuborish
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
