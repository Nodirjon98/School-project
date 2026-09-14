import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { CEFRLevel, AIContentType } from '../../types';
import { generateAIContent } from '../../lib/ai';
import { 
  Sparkles, BookOpen, Clock, CheckCircle2, 
  Copy, Save, HelpCircle, FileText, Check 
} from 'lucide-react';

export const AIContentStudio: React.FC = () => {
  const { t } = useLanguage();
  const { createLesson, groups } = useLMSData();

  const [contentType, setContentType] = useState<AIContentType>('reading');
  const [topic, setTopic] = useState('Traditional Uzbek Architecture & Silk Road Heritage');
  const [level, setLevel] = useState<CEFRLevel>('B2');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Editable fields
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');

  const handleGenerate = async () => {
    setIsLoading(true);
    setSavedSuccess(false);
    const result = await generateAIContent(contentType, level, topic);
    setGeneratedContent(result);
    setEditedTitle(result.title || topic);
    setEditedBody(
      contentType === 'reading' ? (result.passage || '') :
      contentType === 'lesson_plan' ? JSON.stringify(result.stages, null, 2) :
      JSON.stringify(result.questions, null, 2)
    );
    setIsLoading(false);
  };

  const handleCopy = () => {
    const fullText = `${editedTitle}\n\n${editedBody}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToLessons = async () => {
    if (!groups[0]) return;
    await createLesson({
      group_id: groups[0].id,
      title: editedTitle || topic,
      topic: `${contentType.toUpperCase()}: ${topic}`,
      lesson_date: new Date().toISOString().split('T')[0],
      date: new Date().toISOString().split('T')[0],
      materials_url: '#',
      materials_name: `${editedTitle}.pdf`
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Google Gemini 3.8 Flash • Premier Pedagogical Studio</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          {t('aiStudioTitle')}
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          {t('aiStudioSubtitle')}
        </p>
      </div>

      {/* Generator Settings Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
        {/* Type tabs */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">Kontent turini tanlang</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { type: 'reading', label: 'Reading Passage', desc: 'Savollar va lug\'atlar bilan matn' },
              { type: 'lesson_plan', label: '90-min Lesson Plan', desc: 'Taym-menejment va CCQ savollari' },
              { type: 'quiz', label: 'Interactive Quiz', desc: 'Avtomatik testlar to\'plami' }
            ].map(item => (
              <button
                key={item.type}
                type="button"
                onClick={() => setContentType(item.type as AIContentType)}
                className={`p-3.5 rounded-xl border text-left transition ${
                  contentType === item.type
                    ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Mavzu / Kontekst</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Masalan: Artificial Intelligence in Tashkent Smart City"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">CEFR Darajasi</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as CEFRLevel)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-hidden"
            >
              <option value="A1">A1 - Beginner</option>
              <option value="A2">A2 - Elementary</option>
              <option value="B1">B1 - Intermediate</option>
              <option value="B2">B2 - Upper-Intermediate</option>
              <option value="C1">C1 - Advanced IELTS</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          disabled={isLoading}
          onClick={handleGenerate}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition shadow-sm disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isLoading ? 'Gemini 3.8 Flash pedagogik kontentni tuzmoqda...' : 'Gemini 3.8 Flash orqali yaratish'}</span>
        </button>
      </div>

      {/* Generated & Editable Result Card */}
      {generatedContent && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                {contentType} • CEFR {level}
              </span>
              <span className="text-xs text-slate-400 font-semibold">Tahrirlanadigan holatda</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Nusxalandi' : 'Nusxa olish'}</span>
              </button>

              <button
                type="button"
                onClick={handleSaveToLessons}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition shadow-2xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{savedSuccess ? 'Darslarga saqlandi!' : 'Darsga biriktirish'}</span>
              </button>
            </div>
          </div>

          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Material saqlandi va guruh o'quvchilari uchun ochiq bo'ldi!</span>
            </div>
          )}

          {/* Title Editor */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Sarlavha</label>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full text-base font-bold text-slate-900 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden"
            />
          </div>

          {/* Reading Specific Highlights */}
          {contentType === 'reading' && generatedContent.vocabulary_highlights && (
            <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100">
              <span className="text-xs font-bold text-blue-900 block mb-2">
                Lug'at va o'zbekcha tarjimalar:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {generatedContent.vocabulary_highlights.map((vh: any, idx: number) => (
                  <div key={idx} className="text-xs bg-white p-2.5 rounded-lg border border-blue-100 flex items-center justify-between">
                    <span className="font-bold text-slate-900">{vh.word}</span>
                    <span className="text-blue-700 font-semibold">{vh.translation_uz}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lesson Plan Stages Table */}
          {contentType === 'lesson_plan' && generatedContent.stages && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                90-daqiqalik dars bosqichlari (Stages & Timings)
              </span>
              <div className="space-y-2">
                {generatedContent.stages.map((stage: any, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>{stage.stage_name}</span>
                      <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {stage.timing_minutes} daqiqa
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{stage.procedure}</p>
                    {stage.ccq && (
                      <p className="text-xs text-indigo-700 italic">Teacher CCQ: "{stage.ccq}"</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Body Editor */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Matn / Struktura
            </label>
            <textarea
              rows={10}
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono leading-relaxed focus:bg-white focus:outline-hidden"
            />
          </div>

          {/* Comprehension Questions if Reading */}
          {contentType === 'reading' && generatedContent.comprehension_questions && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Tushunish darajasini tekshirish savollari
              </span>
              <div className="space-y-2">
                {generatedContent.comprehension_questions.map((cq: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      {idx + 1}. {cq.question}
                    </span>
                    <span className="text-emerald-700 font-semibold block">
                      To'g'ri javob: {cq.answer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
