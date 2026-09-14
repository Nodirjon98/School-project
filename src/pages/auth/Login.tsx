import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, Lock, LogIn } from 'lucide-react';

export const Login: React.FC = () => {
  const { signIn, role } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = (location.state as any)?.from?.pathname || (
    role === 'admin' ? '/admin/dashboard' : role === 'teacher' ? '/teacher/dashboard' : '/dashboard'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);
    const result = await signIn(email, password);
    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo Card */}
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/20 mb-3">
            P
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Premier School LMS
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {t('tagline')} • Tashkent
          </p>
        </div>

        {/* Login Form Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-1">{t('loginTitle')}</h2>
          <p className="text-xs text-slate-500 mb-6">{t('loginSubtitle')}</p>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('emailLabel')}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@premierschool.uz"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  {t('passwordLabel')}
                </label>
                <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">
                  {t('forgotPassword')}
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-sm disabled:opacity-50 text-sm"
            >
              <LogIn className="w-4 h-4" />
              <span>{loading ? 'Kirilmoqda...' : t('loginBtn')}</span>
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            {t('dontHaveAccount')}{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              {t('signupBtn')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
