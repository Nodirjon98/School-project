import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ArrowRight, Award, BookOpen, BrainCircuit, Check, Flame, Globe, GraduationCap,
  Headphones, Layers, LineChart, Lock, MessageCircle, Mic, Phone, PenLine,
  ShieldCheck, Sparkles, Star, Trophy, Users,
} from 'lucide-react';

const CONTACT = {
  phone: '+998 94 877 00 60',
  telegram: 'https://t.me/premier_school_admin',
  telegramLabel: '@premier_school_admin',
};

const SKILLS = [
  'Listening', 'Speaking', 'Reading', 'Writing', 'Grammar', 'Vocabulary',
  'IELTS', 'CEFR A1–C1', 'Pronunciation', 'Karaoke', 'Leitner', 'AI Examiner',
];

const STATS = [
  { value: 'IELTS 8.5', label: "Bosh o'qituvchi natijasi" },
  { value: '4 140+', label: "Akademik so'zlar bazasi" },
  { value: '24', label: 'Tactics for Listening unitlari' },
  { value: 'A1 → C1', label: '30 savollik daraja testi' },
];

const LEVELS = [
  { code: 'A1', name: "Boshlang'ich", desc: "Alifbo, kundalik so'zlar va oddiy jumlalar", tone: 'from-sky-400/20 to-sky-400/0 text-sky-300' },
  { code: 'A2', name: 'Elementar', desc: "Suhbat, o'qish va kundalik mavzular", tone: 'from-emerald-400/20 to-emerald-400/0 text-emerald-300' },
  { code: 'B1', name: "O'rta", desc: 'Erkin muloqot, matn tahlili va yozuv', tone: 'from-amber-400/20 to-amber-400/0 text-amber-300' },
  { code: 'B2', name: "Yuqori-o'rta", desc: 'Murakkab matnlar va fikr bildirish', tone: 'from-rose-400/20 to-rose-400/0 text-rose-300' },
  { code: 'IELTS', name: 'Imtihon', desc: '6.5+ ball uchun maxsus tayyorgarlik', tone: 'from-violet-400/25 to-violet-400/0 text-violet-300' },
];

const FEATURES = [
  {
    icon: Mic, title: 'AI bilan speaking', color: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
    desc: "Mr. Safoyev ovozidagi AI suhbatdosh bilan istalgan vaqtda gapiring — talaffuz va ravonlik bo'yicha darhol fikr oling.",
    span: 'md:col-span-2',
  },
  {
    icon: PenLine, title: 'IELTS Writing Examiner', color: 'text-violet-300 bg-violet-400/10 border-violet-400/20',
    desc: "Inshoni yuboring — 4 mezon bo'yicha taxminiy ball va o'zbekcha izohlar.",
    span: '',
  },
  {
    icon: Layers, title: "Leitner so'z tizimi", color: 'text-amber-300 bg-amber-400/10 border-amber-400/20',
    desc: "4 140+ so'z 5 qutili takrorlash tizimida — unutayotgan so'zingiz o'z vaqtida qaytib keladi.",
    span: '',
  },
  {
    icon: Headphones, title: 'Tactics for Listening', color: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
    desc: "24 unit asl audiolar, matn va o'zbekcha tarjima bilan — tinglab tushunishni bosqichma-bosqich oshiring.",
    span: 'md:col-span-2',
  },
  {
    icon: Trophy, title: 'Kunlik missiya va chempionat', color: 'text-rose-300 bg-rose-400/10 border-rose-400/20',
    desc: "XP, streak, nishonlar va oylik chempionat — o'quvchilar har kuni o'z xohishi bilan qaytadi.",
    span: 'md:col-span-3',
  },
];

const STEPS = [
  { title: "Ro'yxatdan o'ting", desc: 'Bir daqiqada bepul hisob oching — email va parol kifoya.' },
  { title: 'Darajangizni aniqlang', desc: "A1 dan C1 gacha 30 savollik test sizga mos darajani ko'rsatadi." },
  { title: "O'rganishni boshlang", desc: "Shaxsiy kabinet, uy vazifalar va natijalar — hammasi bir joyda." },
];

const ROLES = [
  {
    icon: GraduationCap, title: "O'quvchilar uchun", accent: 'text-indigo-300',
    points: ['Daraja testi va sertifikat', 'Kunlik so\'zlar va o\'yinlar', 'AI speaking va writing'],
  },
  {
    icon: BrainCircuit, title: "O'qituvchilar uchun", accent: 'text-violet-300',
    points: ['90 daqiqalik dars rejalari', '4 holatli davomat', 'Insholarni tez baholash'],
  },
  {
    icon: LineChart, title: 'Ota-onalar uchun', accent: 'text-emerald-300',
    points: ['Davomat va uy vazifalar', "To'lovlar tarixi", 'Oylik natijalar hisoboti'],
  },
];

// Decorative product preview for the hero — static, no real data.
const HeroPreview: React.FC = () => (
  <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
    <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-indigo-600/30 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />

    {/* Main card */}
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-indigo-950/60 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-black text-white">SI</div>
          <div>
            <div className="text-sm font-bold text-white">Shahzoda I.</div>
            <div className="text-[11px] text-slate-400">Bugungi missiya</div>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-orange-500/15 px-2.5 py-1 text-xs font-bold text-orange-300">
          <Flame className="h-3.5 w-3.5" /> 12 kun
        </div>
      </div>

      <div className="mt-6 flex items-center gap-5">
        <div className="relative h-24 w-24 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="10" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#lpRing)" strokeWidth="10" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="74" />
            <defs>
              <linearGradient id="lpRing" x1="0" x2="1">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-black text-white">B1</span>
            <span className="text-[10px] font-semibold text-slate-400">72% → B2</span>
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          {[
            { label: 'Listening', w: 'w-4/5', c: 'bg-sky-400' },
            { label: 'Speaking', w: 'w-3/5', c: 'bg-emerald-400' },
            { label: 'Writing', w: 'w-2/3', c: 'bg-violet-400' },
          ].map(s => (
            <div key={s.label}>
              <div className="mb-1 text-[11px] font-semibold text-slate-400">{s.label}</div>
              <div className="h-1.5 rounded-full bg-slate-800">
                <div className={`h-full rounded-full ${s.w} ${s.c}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/5 bg-slate-950/60 p-4">
        <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">Kun so'zi</div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="font-display text-3xl italic text-white">consolidate</span>
          <span className="text-xs text-slate-500">/kənˈsɒlɪdeɪt/</span>
        </div>
        <div className="mt-1 text-xs text-slate-400">mustahkamlamoq, xotirada o'rnashtirmoq</div>
      </div>
    </div>

    {/* Floating cards */}
    <div className="lp-float absolute -left-10 top-1/2 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
      <div className="flex items-center gap-2 text-xs font-bold text-emerald-300"><Mic className="h-4 w-4" /> Speaking AI</div>
      <div className="mt-1 text-[11px] text-slate-400">Talaffuz: <span className="font-bold text-white">8.1</span></div>
    </div>
    <div className="lp-float-delay absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-300"><Award className="h-4 w-4" /> IELTS Writing</div>
      <div className="mt-1 text-[11px] text-slate-400">Taxminiy ball: <span className="font-bold text-white">6.5</span></div>
    </div>
  </div>
);

export const LandingPage: React.FC = () => {
  const { user, role } = useAuth();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (role === 'admin') navigate('/admin/dashboard');
    else if (role === 'teacher') navigate('/teacher/dashboard');
    else navigate('/dashboard');
  };

  const phoneHref = `tel:${CONTACT.phone.replace(/\s/g, '')}`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070814] font-sans text-slate-100 selection:bg-fuchsia-500/40 selection:text-white">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070814]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-lg font-black text-white shadow-lg shadow-fuchsia-500/20">
              P
            </div>
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-tight text-white">Premier School</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">English Language Center</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#kurslar" className="transition hover:text-white">Kurslar</a>
            <a href="#platforma" className="transition hover:text-white">Platforma</a>
            <a href="#qanday" className="transition hover:text-white">Qanday ishlaydi</a>
            <a href="#aloqa" className="transition hover:text-white">Aloqa</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            {user ? (
              <button
                onClick={handleDashboardClick}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-200"
              >
                <span>Kabinetga kirish</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <>
                <Link to="/login" className="hidden rounded-xl px-3 py-2.5 text-xs font-bold text-slate-300 transition hover:text-white sm:inline-block">
                  Kirish
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-200"
                >
                  <span>Boshlash</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative">
        <div className="lp-grid-bg pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-indigo-600/25 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="lp-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Yangi guruhlarga qabul ochiq
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ingliz tilini
              <br />
              <span className="font-display italic lp-shimmer-text">ishonch bilan</span>
              <br />
              gapiring.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Tajribali ustozlar, sun'iy intellekt va o'yin elementlari bir platformada.
              A1 darajadan IELTS gacha — har bir qadamingiz o'lchanadi, har bir yutug'ingiz ko'rinadi.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-fuchsia-600/25 transition hover:brightness-110"
              >
                Bepul daraja testi
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-slate-200 backdrop-blur transition hover:bg-white/10"
              >
                <Lock className="h-4 w-4 text-slate-400" />
                Hisobga kirish
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Certiport rasmiy markazi</span>
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-400" /> IELTS 8.5 ustoz</span>
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-indigo-400" /> Ota-onalar uchun hisobot</span>
            </div>
          </div>

          <HeroPreview />
        </div>
      </section>

      {/* ── Skills marquee ── */}
      <div className="relative border-y border-white/5 bg-white/[0.02] py-5">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="lp-marquee flex shrink-0 gap-10 pr-10">
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl italic text-slate-500">
                {s}
                <Sparkles className="h-4 w-4 text-fuchsia-400/60" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map(s => (
            <div key={s.label} className="bg-[#0b0d1d] p-8 text-center">
              <div className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Courses ── */}
      <section id="kurslar" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">Kurslar</div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Har bir daraja — <span className="font-display italic text-slate-300">aniq maqsad</span>
          </h2>
          <p className="mt-4 text-slate-400">
            CEFR standarti bo'yicha izchil yo'l. Daraja testi sizni to'g'ri guruhga joylashtiradi.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {LEVELS.map(l => (
            <div
              key={l.code}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b ${l.tone} p-6 transition hover:-translate-y-1 hover:border-white/20`}
            >
              <div className="font-display text-5xl italic">{l.code}</div>
              <div className="mt-6 text-sm font-bold text-white">{l.name}</div>
              <div className="mt-1 text-xs leading-relaxed text-slate-400">{l.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Platform bento ── */}
      <section id="platforma" className="relative scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-indigo-950/20 to-transparent py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Platforma</div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Darsdan keyin ham <span className="font-display italic lp-shimmer-text">o'rganish davom etadi</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Shaxsiy kabinetda har kuni 15 daqiqa — va natija sezilarli bo'ladi.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {FEATURES.map(f => (
              <div
                key={f.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05] ${f.span}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${f.color}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">{f.desc}</p>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-fuchsia-500/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="qanday" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Qanday ishlaydi</div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Uch qadam — <span className="font-display italic text-slate-300">va siz yo'ldasiz</span>
            </h2>
            <div className="mt-10 space-y-8">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-2xl italic text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {ROLES.map(r => (
              <div key={r.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <r.icon className={`h-5 w-5 ${r.accent}`} />
                  <h3 className="text-base font-bold text-white">{r.title}</h3>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                  {r.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-400">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${r.accent}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ── */}
      <section id="aloqa" className="scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 p-10 sm:p-16">
          <div className="lp-grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Birinchi qadamni <span className="font-display italic">bugun</span> qo'ying.
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                Bepul daraja testini topshiring — natijaga qarab sizga mos guruh va dasturni tavsiya qilamiz.
              </p>
              <Link
                to="/signup"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-extrabold text-slate-900 shadow-xl transition hover:bg-slate-100"
              >
                Ro'yxatdan o'tish
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              <a href={phoneHref} className="flex items-center gap-4 rounded-2xl bg-black/20 p-5 backdrop-blur transition hover:bg-black/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><Phone className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Qo'ng'iroq qiling</div>
                  <div className="text-lg font-bold text-white">{CONTACT.phone}</div>
                </div>
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-black/20 p-5 backdrop-blur transition hover:bg-black/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><MessageCircle className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/70">Telegram</div>
                  <div className="text-lg font-bold text-white">{CONTACT.telegramLabel}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-sm text-slate-500 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-sm font-black text-white">P</div>
            <span className="font-semibold text-slate-300">Premier School</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link to="/login" className="transition hover:text-white">Kirish</Link>
            <Link to="/signup" className="transition hover:text-white">Ro'yxatdan o'tish</Link>
            <a href="#kurslar" className="transition hover:text-white">Kurslar</a>
            <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-1 transition hover:text-white">
              <BookOpen className="h-3.5 w-3.5" /> Telegram
            </a>
          </div>
          <div>© {new Date().getFullYear()} Premier School. Barcha huquqlar himoyalangan.</div>
        </div>
      </footer>
    </div>
  );
};
