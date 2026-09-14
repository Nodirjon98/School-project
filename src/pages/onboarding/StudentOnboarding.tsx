import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { CEFRLevel } from '../../types';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, Sparkles, 
  Target, Calendar, HelpCircle, Award, User, Phone, Brain
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PlacementQuestion {
  id: number;
  levelTested: CEFRLevel;
  question: string;
  options: string[];
  correct: string;
}

const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: 1,
    levelTested: 'A2',
    question: 'Where ______ you yesterday at 6 PM when I called from Tashkent?',
    options: ['was', 'were', 'are', 'did'],
    correct: 'were'
  },
  {
    id: 2,
    levelTested: 'B1',
    question: 'I have lived in this district ______ I graduated from university in 2021.',
    options: ['for', 'since', 'during', 'from'],
    correct: 'since'
  },
  {
    id: 3,
    levelTested: 'B2',
    question: 'If Aziz ______ the earlier express train from Samarkand, he would be in class right now.',
    options: ['caught', 'had caught', 'catches', 'would catch'],
    correct: 'had caught'
  },
  {
    id: 4,
    levelTested: 'B2',
    question: 'The academic director recommended that the new syllabus ______ immediately.',
    options: ['is implemented', 'be implemented', 'was implemented', 'will be implemented'],
    correct: 'be implemented'
  },
  {
    id: 5,
    levelTested: 'C1',
    question: 'Seldom ______ such linguistic fluency and analytical depth from high school candidates.',
    options: ['we encounter', 'have we encountered', 'did we encountered', 'we have encountered'],
    correct: 'have we encountered'
  }
];

export const StudentOnboarding: React.FC = () => {
  const { profile, updateProfile } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [phone, setPhone] = useState(profile?.phone || '+998 ');
  const [age, setAge] = useState<number>(profile?.age || 18);
  const [goal, setGoal] = useState<string>(profile?.goal || 'IELTS 7.5+ Target');
  const [levelEstimate, setLevelEstimate] = useState<string>(profile?.level_estimate || 'B1');
  const [schedule, setSchedule] = useState<string>('Mon / Wed / Fri 18:30 - 20:00 (Evening)');
  
  // Placement test answers
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>({});
  const [predictedLevel, setPredictedLevel] = useState<CEFRLevel>('B1');
  const [isFinishing, setIsFinishing] = useState(false);

  // Compute CEFR Level from Placement Test score
  const evaluateScore = () => {
    let score = 0;
    PLACEMENT_QUESTIONS.forEach(q => {
      if (testAnswers[q.id] === q.correct) score += 1;
    });

    let level: CEFRLevel = 'A1';
    if (score === 1) level = 'A2';
    else if (score === 2) level = 'A2';
    else if (score === 3) level = 'B1';
    else if (score === 4) level = 'B2';
    else if (score === 5) level = 'C1';

    setPredictedLevel(level);
    return level;
  };

  const handleNext = () => {
    if (currentStep === 6) {
      evaluateScore();
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch {}
    }
    setCurrentStep(prev => Math.min(7, prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleFinish = async () => {
    setIsFinishing(true);
    const finalLevel = predictedLevel;

    await updateProfile({
      full_name: fullName,
      phone,
      age: Number(age),
      goal,
      level_estimate: levelEstimate,
      schedule_preference: schedule,
      level: finalLevel,
      onboarding_completed: true,
      xp: (profile?.xp || 0) + 150, // Onboarding completion reward bonus!
    });

    setIsFinishing(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar & Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            <span>Premier School Onboarding</span>
            <span>Qadam {currentStep} / 7</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          {/* STEP 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">1-qadam</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{t('step1Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step1Desc')}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">To'liq ism-familiyangiz</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jasur Rustamov"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Telefon raqamingiz</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Dars jadvali va SMS xabarnomalar uchun ishlatiladi</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Age */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">2-qadam</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{t('step2Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step2Desc')}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Yoshingizni kiriting: <span className="text-blue-600 font-bold">{age} yosh</span></label>
                <input
                  type="range"
                  min="12"
                  max="60"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>12 yosh (O'smirlar)</span>
                  <span>25 yosh</span>
                  <span>60 yosh (Kattalar)</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                Premier School o'quvchilarni yosh va qiziqishlari bo'yicha tengdosh guruhlarga taqsimlaydi.
              </div>
            </div>
          )}

          {/* STEP 3: Goal */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">3-qadam</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{t('step3Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step3Desc')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'IELTS 7.5+ Target', desc: 'Xalqaro universitetlar va grantlar uchun' },
                  { title: 'CEFR Multilevel B2/C1', desc: 'Milliy sertifikat va davlat OTM imtihonlari' },
                  { title: 'General Speaking & Fluency', desc: 'Erkin so\'zlashish va chet elliklar bilan muloqot' },
                  { title: 'IT & Business English', desc: 'Xalqaro IT kompaniyalar va karyera o\'sishi' }
                ].map(item => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setGoal(item.title)}
                    className={`p-4 rounded-xl border text-left transition ${
                      goal === item.title 
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Level Estimate */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">4-qadam</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{t('step4Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step4Desc')}</p>
              </div>

              <div className="space-y-2.5">
                {[
                  { level: 'A1', label: 'Beginner / Boshlang\'ich', detail: 'Oddiy iboralar va tanishuv so\'zlari' },
                  { level: 'A2', label: 'Elementary / Oddiy muloqot', detail: 'Kundalik vaziyatlarda qisqa suhbat' },
                  { level: 'B1', label: 'Intermediate / O\'rta daraja', detail: 'Ko\'p mavzularda erkin fikr bildirish' },
                  { level: 'B2', label: 'Upper-Intermediate / Yetuk daraja', detail: 'Murakkab matnlar va tezkor nutq' },
                  { level: 'C1', label: 'Advanced / Yuqori daraja', detail: 'Akademik va professional ravonlik' }
                ].map(item => (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setLevelEstimate(item.level)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition ${
                      levelEstimate === item.level
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900">{item.label}</span>
                      <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-700">
                      {item.level}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Schedule Preference */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">5-qadam</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{t('step5Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step5Desc')}</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Dushanba / Chorshanba / Juma — 18:30 (Kechki)', badge: 'Eng talabgir' },
                  { label: 'Seshanba / Payshanba / Shanba — 16:30 (Kunduzgi)', badge: 'Talabalar uchun' },
                  { label: 'Dushanba / Chorshanba / Juma — 10:00 (Tonggi)', badge: 'Ertalabki' },
                  { label: 'Shanba & Yakshanba — 14:00 (Weekend Intensive)', badge: 'Dam olish kunlari' }
                ].map(item => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setSchedule(item.label)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition ${
                      schedule === item.label
                        ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Adaptive Placement Test */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">6-qadam</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{t('step6Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step6Desc')}</p>
              </div>

              <div className="space-y-6">
                {PLACEMENT_QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500">Savol {idx + 1} / 5</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        {q.levelTested} darajasi
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-3">{q.question}</p>

                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setTestAnswers(prev => ({ ...prev, [q.id]: opt }))}
                          className={`p-2.5 rounded-lg text-xs font-semibold text-left transition border ${
                            testAnswers[q.id] === opt
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 7: CEFR Prediction & Verification */}
          {currentStep === 7 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Test yakunlandi!</span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">{t('step7Title')}</h2>
                <p className="text-xs text-slate-500 mt-1">{t('step7Desc')}</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-100 max-w-md mx-auto">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Aniqlangan CEFR darajangiz:</span>
                <div className="text-5xl font-black text-blue-600 my-2 tracking-tight">
                  {predictedLevel}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-blue-200 text-xs font-semibold text-blue-800 mb-4 shadow-2xs">
                  {predictedLevel === 'C1' ? 'Advanced Fluency' : predictedLevel === 'B2' ? 'Upper-Intermediate IELTS' : predictedLevel === 'B1' ? 'Intermediate Competence' : 'Elementary / Pre-Intermediate'}
                </div>

                <div className="text-left bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-blue-100 text-xs text-slate-700 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tavsiya etilgan guruh:</span>
                    <span className="font-bold text-slate-900">IELTS Intensive ({predictedLevel})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Kafedrasi:</span>
                    <span className="font-bold text-slate-900">Malika Karimova (CELTA)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Boshlang'ich bonus:</span>
                    <span className="font-bold text-emerald-600">+150 XP Ball</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wizard Footer Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            {currentStep > 1 && currentStep < 7 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t('prevStep')}</span>
              </button>
            ) : <div />}

            {currentStep < 7 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition shadow-sm ml-auto"
              >
                <span>{t('nextStep')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isFinishing}
                onClick={handleFinish}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm hover:from-blue-700 hover:to-indigo-700 transition shadow-md shadow-blue-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isFinishing ? 'Saqlanmoqda...' : t('finishOnboarding')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
