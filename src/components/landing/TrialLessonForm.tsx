import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { submitLead } from '../../lib/leads';

const LEVELS = ["Bilmayman", 'A1', 'A2', 'B1', 'B2', 'C1', 'IELTS'];

/** Public trial-lesson application; lands in the admin "Arizalar" page. */
export const TrialLessonForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [level, setLevel] = useState(LEVELS[0]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    const err = await submitLead({ name, phone, level_interest: level });
    setSending(false);
    if (err) setError(err);
    else setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-white p-7 text-center text-slate-900 shadow-2xl">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <h3 className="mt-3 text-xl font-extrabold">Arizangiz qabul qilindi!</h3>
        <p className="mt-2 text-sm text-slate-600">Administratorimiz tez orada siz bilan bog'lanib, sinov darsi vaqtini kelishib oladi.</p>
      </div>
    );
  }

  const field = 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200';

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-7" noValidate>
      <h3 className="text-lg font-extrabold">Bepul sinov darsiga yoziling</h3>
      <p className="mt-1 text-sm text-slate-500">Raqamingizni qoldiring — o'zimiz qo'ng'iroq qilamiz.</p>
      <div className="mt-5 space-y-3">
        <label className="block">
          <span className="sr-only">Ismingiz</span>
          <input className={field} value={name} onChange={e => setName(e.target.value)} placeholder="Ismingiz" maxLength={100} autoComplete="name" required />
        </label>
        <label className="block">
          <span className="sr-only">Telefon raqamingiz</span>
          <input className={field} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+998 90 123 45 67" inputMode="tel" maxLength={20} autoComplete="tel" required />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-slate-500">Ingliz tili darajangiz</span>
          <select className={field} value={level} onChange={e => setLevel(e.target.value)}>
            {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
      </div>
      {error && <p className="mt-3 text-sm font-medium text-rose-600" role="alert">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-60 cursor-pointer"
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Ariza yuborish
      </button>
    </form>
  );
};
