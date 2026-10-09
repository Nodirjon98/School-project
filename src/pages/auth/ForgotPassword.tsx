import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!clean || !supabase) return;
    setLoading(true);
    setError(null);
    const { error: err } = await supabase.auth.resetPasswordForEmail(clean, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (err) {
      setError(
        /rate limit/i.test(err.message)
          ? "Juda ko'p urinish. Bir necha daqiqadan so'ng qayta urinib ko'ring."
          : "Xat yuborib bo'lmadi. Email manzilini tekshiring yoki administratorga murojaat qiling."
      );
      return;
    }
    // Same message whether or not the account exists, so emails can't be probed.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Kirish sahifasiga qaytish
          </Link>

          <h2 className="text-xl font-bold text-slate-900 mb-2">Parolni qayta tiklash</h2>
          <p className="text-xs text-slate-500 mb-6">
            Akkountingizga biriktirilgan elektron pochta manzilini kiriting. Unga yangi parol o'rnatish havolasi yuboriladi.
          </p>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-emerald-900 mb-1">Pochtangizni tekshiring</h3>
              <p className="text-xs text-emerald-700">
                Agar {email} bilan akkount mavjud bo'lsa, unga parolni yangilash havolasi yuborildi. Xat kelmasa, "Spam" papkasini ham ko'ring.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Elektron pochta</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.uz"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-hidden focus:border-blue-500 transition"
                  />
                </div>
              </div>

              {error && <p className="text-xs font-medium text-rose-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-60 transition text-sm shadow-sm inline-flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Tiklash havolasini yuborish
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
