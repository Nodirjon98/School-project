import React from 'react';
import type { CurriculumBook } from '../../../types';
import { ContentSource, ItemKind, MODE_LABEL, ModeChoice } from '../../../lib/gameQuestions';

const BOOKS = [1, 2, 3, 4, 5, 6];
const field = 'w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200';

/** Shared "what to practise" controls for the classroom games. */
export const ContentPicker: React.FC<{
  books: CurriculumBook[] | null;
  source: ContentSource;
  onSource: (s: ContentSource) => void;
  mode: ModeChoice;
  onMode: (m: ModeChoice) => void;
  poolSize: number;
}> = ({ books, source, onSource, mode, onMode, poolSize }) => {
  const book = source.book === 'daily' ? null : books?.find(b => b.bookNumber === source.book);
  const unitCount = book?.units.length ?? 30;
  const units = Array.from({ length: unitCount }, (_, i) => i + 1);

  const toggleKind = (k: ItemKind) => {
    const kinds = source.kinds.includes(k) ? source.kinds.filter(x => x !== k) : [...source.kinds, k];
    if (kinds.length) onSource({ ...source, kinds });
  };

  return (
    <div className="space-y-3">
      <label className="block">
        <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Manba</span>
        <select
          className={field}
          value={String(source.book)}
          onChange={e => {
            const v = e.target.value;
            onSource(v === 'daily' ? { book: 'daily', kinds: ['word'] } : { book: Number(v), unitFrom: 1, unitTo: 30, kinds: source.kinds.length ? source.kinds : ['word'] });
          }}
        >
          {BOOKS.map(n => {
            const b = books?.find(x => x.bookNumber === n);
            return <option key={n} value={n}>4000 Essential Words · Book {n}{b ? ` (${b.cefrLevel})` : ''}</option>;
          })}
          <option value="daily">Kunlik so'zlar (A1–C1)</option>
        </select>
      </label>

      {source.book !== 'daily' && (
        <>
          <div className="grid grid-cols-2 gap-2">
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Unit dan</span>
              <select className={field} value={source.unitFrom ?? 1}
                onChange={e => { const f = Number(e.target.value); onSource({ ...source, unitFrom: f, unitTo: Math.max(f, source.unitTo ?? f) }); }}>
                {units.map(u => <option key={u} value={u}>Unit {u}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Unit gacha</span>
              <select className={field} value={source.unitTo ?? unitCount}
                onChange={e => { const t = Number(e.target.value); onSource({ ...source, unitTo: t, unitFrom: Math.min(t, source.unitFrom ?? t) }); }}>
                {units.map(u => <option key={u} value={u}>Unit {u}</option>)}
              </select>
            </label>
          </div>
          <div className="flex gap-2">
            {([['word', "So'zlar"], ['phrase', 'Iboralar']] as [ItemKind, string][]).map(([k, label]) => (
              <button key={k} type="button" onClick={() => toggleKind(k)} aria-pressed={source.kinds.includes(k)}
                className={`flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition cursor-pointer ${source.kinds.includes(k) ? 'border-indigo-500 bg-indigo-50 text-indigo-800' : 'border-slate-200 bg-white text-slate-500'}`}>
                {label}
              </button>
            ))}
          </div>
        </>
      )}

      <label className="block">
        <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Savol turi</span>
        <select className={field} value={mode} onChange={e => onMode(e.target.value as ModeChoice)}>
          {(Object.keys(MODE_LABEL) as ModeChoice[]).map(m => <option key={m} value={m}>{MODE_LABEL[m]}</option>)}
        </select>
      </label>

      <p className={`text-xs font-semibold ${poolSize >= 4 ? 'text-slate-500' : 'text-rose-600'}`}>
        {poolSize >= 4 ? `${poolSize} ta so'z va ibora tanlandi` : "Kamida 4 ta so'z kerak — boshqa unit tanlang"}
      </p>
    </div>
  );
};
