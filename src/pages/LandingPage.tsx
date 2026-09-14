import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Sparkles, ShieldCheck, Zap, Headphones, Mic, BookOpen, 
  Award, Trophy, ArrowRight, Check, X, Users, Star, BrainCircuit,
  MessageSquare, Layers, Lock, Play, Globe, CheckCircle2, ChevronRight
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { user, role } = useAuth();
  const { t, language, setLanguage } = useLanguage();
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Top Floating Glass Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/25">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base tracking-tight">Premier School</span>
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-semibold">
                LMS & AI Ecosystem • Tashkent
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition">Imkoniyatlar</a>
            <a href="#comparison" className="hover:text-indigo-400 transition">Ustunliklar</a>
            <a href="#ai-tools" className="hover:text-indigo-400 transition">AI Vositalari</a>
            <a href="#campuses" className="hover:text-indigo-400 transition">Filiallar</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Language switch */}
            <button
              onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}
              className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 text-xs font-bold hover:bg-slate-800 transition flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language.toUpperCase()}</span>
            </button>

            {user ? (
              <button
                onClick={handleDashboardClick}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30"
              >
                <span>Kabinetga Kirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white font-bold text-xs hover:bg-slate-900 transition"
                >
                  Tizimga Kirish
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs hover:from-indigo-500 hover:to-purple-500 transition shadow-lg shadow-indigo-500/25"
                >
                  <span>Ro'yxatdan O'tish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>O'zbekistondagi Birinchi AI va Cambridge Standartli LMS Tizimi</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-none">
            Ingliz Tili Ta'limida <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sun'iy Intellekt va Inqilobiy Natijalar
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Premier School LMS — Oxford 3rd Edition audiolar, Mr. Safoyev ovozli AI generatori, Cambridge CELTA studiyasi va 4000 ta so'zli Leitner tizimini birlashtirgan zamonaviy ta'lim ekosistemasi.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm transition shadow-xl shadow-indigo-600/35 flex items-center gap-2"
            >
              <span>Tekin Boshlash (Onboarding)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-extrabold text-sm transition flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-indigo-400" />
              <span>Mavjud Akkauntga Kirish</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-3xl font-black text-white">IELTS 8.5</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Bosh O'qituvchi Natijasi</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-3xl font-black text-indigo-400">4,140+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Akademik So'zlar Bazasi</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-3xl font-black text-purple-400">24 Units</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Tactics for Listening Audio</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-3xl font-black text-emerald-400">100% Real</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Supabase Baza Integratsiyasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Section (Platform Advantages) */}
      <section id="comparison" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Taqqoslama</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
              Nega Premier School LMS Boshqa Dasturlardan Ustun?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-3">
              Oddiy LMS tizimlari faqat uy vazifasi saqlaydi. Bizning ilova esa o'quvchining har bir xatosini tahlil qiluvchi AI intellektga ega.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 font-bold">Imkoniyat va Xususiyat</th>
                  <th className="py-4 px-4 font-bold text-slate-500">Oddiy LMS / Tizimlar</th>
                  <th className="py-4 px-4 font-bold text-indigo-400 bg-indigo-950/40 rounded-t-xl">Premier School LMS ✨</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs font-medium">
                <tr>
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-indigo-400" />
                    <span>Tactics for Listening (3rd Ed)</span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">Faqat oddiy MP3 fayllar</td>
                  <td className="py-4 px-4 text-indigo-300 font-bold bg-indigo-950/40">Autentik CD treklar, qat'iy Audio-to-JSON va Uzbek tarjimasi</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Mic className="w-4 h-4 text-emerald-400" />
                    <span>Mr. Safoyev Voice Speaking AI</span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">Mavjud emas</td>
                  <td className="py-4 px-4 text-emerald-300 font-bold bg-indigo-950/40">16-bandli Bark spektral Neyro-klon va YIN chastota tahlili</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-purple-400" />
                    <span>IELTS Writing AI Examiner</span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">Faqat o'qituvchi qo'lda tekshiradi</td>
                  <td className="py-4 px-4 text-purple-300 font-bold bg-indigo-950/40">Task Achievement, Coherence, Lexical, Grammar bo'yicha 0.5 aniqlikda va Uzbek izohli baho</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Leitner 5-Box Spaced Repetition</span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">Statik so'zlar ro'yxati</td>
                  <td className="py-4 px-4 text-amber-300 font-bold bg-indigo-950/40">4,140 ta so'zli avtomatik spaced repetition va instant click-to-define</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <span>4000 Essential & TOEFL 6.0 Essays</span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">Qog'oz kitoblar</td>
                  <td className="py-4 px-4 text-sky-300 font-bold bg-indigo-950/40">Books 1-6 interaktiv darslar va TOEFL insho chunklari</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Main Core Features Showcase */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Ekosistema</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
              Har Bir Rol Uchun Maxsus Yaratilgan Imkoniyatlar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Talabalar Portali</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Leitner 5-box kunlik so'zlar, CEFR placement test, karaoke gap-fill mashqlari, 1v1 lug'at bellashuvi arena va IELTS Writing AI barchasi bitta dashboardda.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0" /> 7 bosqichli onboarding wizard</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0" /> Oylik chempionat va nishonlar (Badges)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0" /> Uzbek va Ingliz tillari qo'llab-quvvatlovi</li>
              </ul>
            </div>

            {/* Teacher Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">O'qituvchi AI Studiyasi</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  CELTA standartidagi 90 daqiqalik dars rejalari generatori, 4 holatli davomat boshqaruvi va insholarni avtomatik baholash paneli.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Stage-by-stage dars rejalari</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> 4-holatli davomat (Present, Absent, Late, Excused)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> AI Formative grading maslahatchisi</li>
              </ul>
            </div>

            {/* Admin Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Admin CRM & Analitika</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Filiallar boshqaruvi (Oybek va Chorsu campus), kassa to'lovlari, guruhlar jadvali, o'quvchilarni ro'yxatga olish va oylik chempionat resetlari.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Recharts analitika grafiklari</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Supabase PostgreSQL doimiy saqlash</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> To'lov cheklari va kassa nazorati</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tashkent Campuses Section */}
      <section id="campuses" className="py-16 bg-slate-900/30 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Premier School Tashkent Filiallari</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left">
              <h4 className="text-base font-bold text-indigo-400">Oybek Campus</h4>
              <p className="text-xs text-slate-400 mt-1">Toshkent sh., Mirobod t., Oybek metrosi yaqinida</p>
              <div className="mt-3 text-xs text-slate-300 font-medium">Xonalar: 301 - 308 (IELTS & CEFR Masterclass)</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left">
              <h4 className="text-base font-bold text-purple-400">Chorsu Campus</h4>
              <p className="text-xs text-slate-400 mt-1">Toshkent sh., Shayxontohur t., Chorsu maydoni</p>
              <div className="mt-3 text-xs text-slate-300 font-medium">Xonalar: 101 - 106 (General English & Foundation)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Premier School English Language Center • Tashkent, Uzbekistan. Barcha huquqlar himoyalangan.</p>
          <div className="mt-3 flex justify-center gap-6 text-slate-400 font-medium">
            <Link to="/login" className="hover:text-white">Kirish</Link>
            <Link to="/signup" className="hover:text-white">Ro'yxatdan O'tish</Link>
            <a href="#features" className="hover:text-white">Imkoniyatlar</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
