import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { evaluateIELTSEssay } from '../../lib/ai';
import { IELTSEvaluation } from '../../types';
import { 
  Sparkles, Clock, CheckCircle2, AlertTriangle, 
  BookOpen, Award, ArrowRight, RotateCcw, Copy, 
  HelpCircle, ChevronDown, ChevronUp, FileText, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PresetPrompt {
  id: string;
  type: 'task1' | 'task2';
  title: string;
  category: string;
  prompt: string;
  recommendedWords: number;
}

const PRESET_PROMPTS: PresetPrompt[] = [
  {
    id: 'p1',
    type: 'task2',
    title: 'Higher Education Funding',
    category: 'Education & Society',
    prompt: 'Some people believe that university education should be completely free for all qualified citizens, while others argue that students should bear the financial burden themselves. Discuss both views and give your own opinion.',
    recommendedWords: 250
  },
  {
    id: 'p2',
    type: 'task2',
    title: 'Urban Migration & Megacities',
    category: 'Urbanization & Economy',
    prompt: 'In many countries, young people are migrating in unprecedented numbers from provincial villages to capital cities like Tashkent. What are the key problems resulting from this trend, and what viable measures can governments implement?',
    recommendedWords: 250
  },
  {
    id: 'p3',
    type: 'task2',
    title: 'Technology & Human Connectivity',
    category: 'Technology & Culture',
    prompt: 'Although technological advancements allow instantaneous global communication, some sociologists argue that individuals are becoming increasingly isolated. To what extent do you agree or disagree with this statement?',
    recommendedWords: 250
  },
  {
    id: 'p4',
    type: 'task1',
    title: 'Renewable Energy Adoption',
    category: 'Environment / Academic Report',
    prompt: 'The data illustrates the percentage of national electricity generated from solar, wind, and hydroelectric sources between 2012 and 2024 across Central Asia. Summarize the principal trends, make comparisons where relevant, and highlight key milestones.',
    recommendedWords: 150
  }
];

export const IELTSWritingExaminer: React.FC = () => {
  const { profile } = useAuth();
  const { t } = useLanguage();
  const { awardXp } = useLMSData();

  const [selectedPrompt, setSelectedPrompt] = useState<PresetPrompt>(PRESET_PROMPTS[0]);
  const [customTopic, setCustomTopic] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [essayText, setEssayText] = useState('');
  const [targetBand, setTargetBand] = useState<number>(7.5);

  // Timer
  const [timerSeconds, setTimerSeconds] = useState(40 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  // AI Evaluation State
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<IELTSEvaluation | null>(null);
  const [savedHistory, setSavedHistory] = useState<IELTSEvaluation[]>([]);
  const [copiedModel, setCopiedModel] = useState(false);

  // Load history from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('premier_ielts_writing_history');
      if (stored) {
        setSavedHistory(JSON.parse(stored));
      }
    } catch {}
  }, []);

  // Timer tick
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const words = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  const targetWords = selectedPrompt.recommendedWords;
  const isLengthAdequate = words >= targetWords;

  const handleSelectPrompt = (p: PresetPrompt) => {
    setSelectedPrompt(p);
    setIsCustom(false);
    setTimerSeconds(p.type === 'task1' ? 20 * 60 : 40 * 60);
    setTimerRunning(false);
  };

  const handleInsertPhrase = (phrase: string) => {
    setEssayText(prev => (prev ? prev + ' ' + phrase : phrase));
  };

  const handleEvaluate = async () => {
    if (words < 20) return;
    setIsEvaluating(true);

    const activeTopic = isCustom ? customTopic : selectedPrompt.prompt;
    const taskType = selectedPrompt.type;

    try {
      const result = await evaluateIELTSEssay(essayText, taskType, activeTopic, targetBand);
      const evalData: IELTSEvaluation = {
        ...result,
        taskType,
        topic: activeTopic,
        essay: essayText,
        evaluated_at: new Date().toISOString()
      };

      setEvaluation(evalData);
      const updatedHistory = [evalData, ...savedHistory.slice(0, 9)];
      setSavedHistory(updatedHistory);
      try {
        localStorage.setItem('premier_ielts_writing_history', JSON.stringify(updatedHistory));
      } catch {}

      // Award XP for deliberate practice
      awardXp(50);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } catch (err) {
      console.error('Failed to evaluate essay:', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  const copyModelToClipboard = () => {
    if (!evaluation?.modelParagraph) return;
    navigator.clipboard.writeText(evaluation.modelParagraph);
    setCopiedModel(true);
    setTimeout(() => setCopiedModel(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              IELTS Writing AI Examiner
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-600" />
              Cambridge Rubric
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Band 9 calibrated diagnostic assessment across Task Response, Cohesion, Lexicon, and Grammar with Uzbek annotations.
          </p>
        </div>

        {/* Target Band Selector */}
        <div className="flex items-center gap-3 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs self-start">
          <Award className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-slate-700">Target Band:</span>
          <select
            value={targetBand}
            onChange={(e) => setTargetBand(parseFloat(e.target.value))}
            className="text-xs font-black text-indigo-600 bg-slate-50 rounded-lg px-2 py-1 border border-slate-200 outline-none"
          >
            <option value={6.5}>Band 6.5 (B2 Competent)</option>
            <option value={7.0}>Band 7.0 (C1 Good User)</option>
            <option value={7.5}>Band 7.5 (C1 Academic)</option>
            <option value={8.0}>Band 8.0 (C2 Very Good)</option>
            <option value={8.5}>Band 8.5 (C2 Expert)</option>
          </select>
        </div>
      </div>

      {/* Main Grid: Prompt & Editor vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Prompts & Essay Writing */}
        <div className="lg:col-span-7 space-y-4">
          {/* Prompt Selection Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Exam Task
              </span>
              <button
                type="button"
                onClick={() => setIsCustom(!isCustom)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition"
              >
                {isCustom ? 'Use Cambridge Prompts' : 'Enter Custom Topic'}
              </button>
            </div>

            {!isCustom ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRESET_PROMPTS.map((p) => {
                  const isSelected = selectedPrompt.id === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectPrompt(p)}
                      className={`text-left p-2.5 rounded-xl border transition-all text-xs ${
                        isSelected
                          ? 'bg-indigo-50/70 border-indigo-300 ring-1 ring-indigo-200 shadow-xs'
                          : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">{p.title}</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 uppercase">
                          {p.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{p.prompt}</p>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="Paste your custom IELTS writing prompt here..."
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                />
              </div>
            )}

            {/* Active Prompt Box */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                Active Question • {selectedPrompt.recommendedWords}+ Words Required
              </span>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                {isCustom ? customTopic || 'Custom task prompt' : selectedPrompt.prompt}
              </p>
            </div>
          </div>

          {/* Writing Editor Canvas */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            {/* Action Bar (Timer + Word Count) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              {/* Word Count Indicator */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Words:</span>
                <span
                  className={`text-xs font-black px-2 py-0.5 rounded-md ${
                    isLengthAdequate
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : words > 100
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {words} / {targetWords}
                </span>
                {isLengthAdequate && (
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Target Met
                  </span>
                )}
              </div>

              {/* Exam Countdown Timer */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-mono font-bold text-slate-700 border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {formatTimer(timerSeconds)}
                </div>
                <button
                  type="button"
                  onClick={() => setTimerRunning(!timerRunning)}
                  className={`text-[11px] font-bold px-2 py-1 rounded-lg transition ${
                    timerRunning
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                  }`}
                >
                  {timerRunning ? 'Pause' : 'Start Timer'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTimerRunning(false);
                    setTimerSeconds(selectedPrompt.type === 'task1' ? 20 * 60 : 40 * 60);
                  }}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded transition"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Academic Sentence Starters */}
            <div className="flex flex-wrap items-center gap-1.5 py-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                Quick Phrases:
              </span>
              {[
                'It is widely acknowledged that',
                'While it is true that',
                'A compelling argument in favor is that',
                'Consequently, evidence suggests that',
                'In the final analysis,'
              ].map((phrase, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleInsertPhrase(phrase)}
                  className="text-[10px] font-semibold bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 px-2 py-1 rounded-md border border-slate-200/60 transition"
                >
                  + {phrase}
                </button>
              ))}
            </div>

            {/* Essay Textarea */}
            <textarea
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              placeholder="Write your academic essay here. Organize into 4-5 clear paragraphs: Introduction (Paraphrase + Thesis), Body Paragraph 1 (Topic Sentence + Support + Example), Body Paragraph 2 (Counterpoint / Secondary facet), and Conclusion..."
              rows={16}
              className="w-full text-xs sm:text-sm text-slate-900 leading-relaxed p-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-y font-sans placeholder:text-slate-400"
            />

            {/* Submit Action */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">
                {words < 20 ? 'Write at least 20 words to evaluate' : 'Ready for Cambridge AI analysis'}
              </span>

              <button
                type="button"
                disabled={words < 20 || isEvaluating}
                onClick={handleEvaluate}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 shadow-sm transition cursor-pointer"
              >
                {isEvaluating ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    Examiner Assessing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    Evaluate Essay (+50 XP)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Examiner Diagnostic Report */}
        <div className="lg:col-span-5 space-y-4">
          {!evaluation && !isEvaluating ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Awaiting Your Submission</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
                  Compose or paste your IELTS essay on the left. The AI Examiner will parse your writing against official British Council & IDP rubrics with line-by-line feedback.
                </p>
              </div>

              {/* Prior History Preview if exists */}
              {savedHistory.length > 0 && (
                <div className="pt-4 border-t border-slate-100 text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Recent Evaluations ({savedHistory.length})
                  </span>
                  <div className="space-y-1.5">
                    {savedHistory.slice(0, 3).map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setEvaluation(item)}
                        className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 flex items-center justify-between text-xs transition"
                      >
                        <span className="text-slate-700 truncate max-w-[200px]">{item.topic}</span>
                        <span className="font-bold text-indigo-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                          Band {item.overallBand}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : isEvaluating ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 shadow-xs animate-pulse">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
                <Sparkles className="w-6 h-6 animate-spin" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Assessing Band Criteria...</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Evaluating grammatical range, lexical collocations, coherence links, and task fulfillment.
                </p>
              </div>
            </div>
          ) : evaluation ? (
            <div className="space-y-4">
              {/* Overall Band Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block">
                      Estimated IELTS Result
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-white mt-0.5">
                      Band {evaluation.overallBand}
                    </h2>
                    <span className="text-xs text-slate-300 mt-0.5 inline-block">
                      CEFR Equivalent: <strong className="text-amber-300">{evaluation.estimatedCefr || 'B2'}</strong>
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20 text-xs font-bold">
                      {evaluation.overallBand >= 7.5 ? '🏆 Mastery' : evaluation.overallBand >= 6.5 ? '✨ Strong' : '📚 Developing'}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-200 mt-3 border-t border-white/10 pt-3 leading-relaxed">
                  {evaluation.generalFeedback}
                </p>

                {/* Uzbek Summary Box */}
                {evaluation.uzbekSummary && (
                  <div className="mt-3 bg-indigo-950/80 p-3 rounded-xl border border-indigo-700/50 text-[11px] text-indigo-200 leading-relaxed">
                    <span className="font-bold text-amber-300 block mb-0.5">🇺🇿 O'qituvchi xulosasi:</span>
                    {evaluation.uzbekSummary}
                  </div>
                )}
              </div>

              {/* 4 Criteria Scores Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Task Resp.</span>
                  <span className="text-base font-black text-slate-900 mt-0.5 block">
                    {evaluation.taskAchievement?.band || evaluation.overallBand}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Cohesion</span>
                  <span className="text-base font-black text-slate-900 mt-0.5 block">
                    {evaluation.coherenceCohesion?.band || evaluation.overallBand}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Lexical</span>
                  <span className="text-base font-black text-slate-900 mt-0.5 block">
                    {evaluation.lexicalResource?.band || evaluation.overallBand}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Grammar</span>
                  <span className="text-base font-black text-slate-900 mt-0.5 block">
                    {evaluation.grammaticalAccuracy?.band || evaluation.overallBand}
                  </span>
                </div>
              </div>

              {/* Lexical Resource Upgrades Table */}
              {evaluation.lexicalResource?.suggestions && evaluation.lexicalResource.suggestions.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Band 7.5+ Vocabulary Upgrades
                  </span>
                  <div className="space-y-2">
                    {evaluation.lexicalResource.suggestions.map((sug, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="line-through text-rose-600 font-medium">{sug.original}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {sug.better}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">{sug.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grammatical Corrections & Uzbek Clarification */}
              {evaluation.grammaticalAccuracy?.errors && evaluation.grammaticalAccuracy.errors.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Grammar Diagnostic & Corrections
                  </span>
                  <div className="space-y-2">
                    {evaluation.grammaticalAccuracy.errors.map((err, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                        <div className="text-slate-700">
                          <strong className="text-slate-500">Original:</strong> "{err.quote}"
                        </div>
                        <div className="text-emerald-800 font-bold">
                          <strong className="text-slate-500 font-normal">Correction:</strong> {err.correction}
                        </div>
                        {err.explanationUz && (
                          <div className="text-[11px] text-indigo-700 bg-indigo-50/70 p-1.5 rounded border border-indigo-100 mt-1">
                            🇺🇿 {err.explanationUz}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Model Band 8.5 Rewrite */}
              {evaluation.modelParagraph && (
                <div className="bg-amber-50/70 rounded-2xl border border-amber-200 p-4 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      Band 8.5 Model Paragraph
                    </span>
                    <button
                      type="button"
                      onClick={copyModelToClipboard}
                      className="text-[11px] font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 transition"
                    >
                      {copiedModel ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      {copiedModel ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed italic bg-white/70 p-3 rounded-xl border border-amber-200/60">
                    "{evaluation.modelParagraph}"
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
