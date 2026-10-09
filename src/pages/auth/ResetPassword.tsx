import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

/**
 * Landing page for the password-recovery email. Supabase signs the user in
 * from the link's token (PASSWORD_RECOVERY), then we let them set a new password.
 */
export const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [linkInvalid, setLinkInvalid] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    // Expired or reused links come back with an error in the URL hash.
    if (/error_code=|error=/.test(window.location.hash)) setLinkInvalid(true);
    // No recovery session after a few seconds means the link was not valid.
    const t = window.setTimeout(() => setLinkInvalid(true), 6000);
    return () => { sub.subscription.unsubscribe(); window.clearTimeout(t); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) return setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak.");
    if (password !== confirm) return setError('Parollar bir xil emas.');
    if (!supabase) return;
    setLoading(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) {
      setError(/same/i.test(err.message) ? "Yangi parol eskisidan farq qilishi kerak." : "Parolni yangilab bo'lmadi. Havola eskirgan bo'lishi mumkin — qaytadan so'rang.");
      return;
    }
    setDone(true);
    window.setTimeout(() => navigate('/app'), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Yangi parol o'rnatish</h2>

        {done ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-bold text-emerald-900">Parol yangilandi. Kabinetga yo'naltirilmoqdasiz…</p>
          </div>
        ) : linkInvalid && !ready ? (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-900"><AlertTriangle className="w-4 h-4" /> Havola eskirgan yoki noto'g'ri</div>
            <p className="mt-1 text-xs text-amber-800">Yangi havola so'rang: <Link to="/forgot-password" className="font-semibold underline">Parolni tiklash</Link></p>
          </div>
        ) : !ready ? (
          <p className="flex items-center gap-2 text-sm text-slate-500"><Loader2 className="w-4 h-4 animate-spin" /> Havola tekshirilmoqda…</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {[['Yangi parol', password, setPassword], ['Parolni takrorlang', confirm, setConfirm]].map(([label, value, set]) => (
              <div key={label as string}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label as string}</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    value={value as string}
                    onChange={e => (set as (v: string) => void)(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
                  />
                </div>
              </div>
            ))}
            {error && <p className="text-xs font-medium text-rose-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-60 transition text-sm inline-flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Parolni saqlash
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
