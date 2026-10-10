import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Crown, Flame, Loader2, Play, Plus, RotateCcw, Settings2, Sparkles, Swords, Timer, X, XCircle } from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { ContentPicker } from '../../components/games/classroom/ContentPicker';
import { useGamePool } from '../../components/games/classroom/useGamePool';
import { ContentSource, GameQuestion, ModeChoice, battlePoints, battleXp, buildDeck } from '../../lib/gameQuestions';

const ROUND_SEC = 12;

interface Player {
  key: string;
  name: string;
  /** Real student id when picked from the roster (gets XP); undefined for guests. */
  studentId?: string;
  score: number;
  correct: number;
  wrong: number;
  streak: number;
  best: number;
}

interface Turn { playerKey: string; q: GameQuestion; picked: string | null; points: number }

/**
 * Turn-based classroom battle: each player answers in turn against a 12 s
 * clock, points for accuracy and speed. Ported from premier-school's
 * VocabBattle and fed by 4000 Essential Words / daily words.
 */
export const VocabBattlePage: React.FC = () => {
  const { students, groups } = useLMSData();
  const { role } = useAuth();
  const isStaff = role === 'admin' || role === 'teacher';

  const [source, setSource] = useState<ContentSource>({ book: 1, unitFrom: 1, unitTo: 5, kinds: ['word'] });
  const [mode, setMode] = useState<ModeChoice>('mixed');
  const { books, pool, loading } = useGamePool(source);

  const [groupId, setGroupId] = useState('');
  const [selected, setSelected] = useState<{ key: string; name: string; studentId?: string }[]>([]);
  const [guest, setGuest] = useState('');
  const [perPlayer, setPerPlayer] = useState(5);

  const [phase, setPhase] = useState<'setup' | 'play' | 'done'>('setup');
  const [players, setPlayers] = useState<Player[]>([]);
  const [deck, setDeck] = useState<GameQuestion[]>([]);
  const [turn, setTurn] = useState(0);
  const [timer, setTimer] = useState(ROUND_SEC);
  const [picked, setPicked] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [lastPoints, setLastPoints] = useState<number | null>(null);
  const [history, setHistory] = useState<Turn[]>([]);
  const [xpState, setXpState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const startedAt = useRef(Date.now());
  const xpPaid = useRef(new Set<string>());

  const roster = useMemo(
    () => students.filter(s => s.status !== 'left' && (!groupId || s.group_id === groupId)).sort((a, b) => (a.full_name || '').localeCompare(b.full_name || '')),
    [students, groupId]
  );

  const totalTurns = players.length * perPlayer;
  const current = players.length ? players[turn % players.length] : null;
  const question = deck[turn];

  const start = () => {
    if (!selected.length) return;
    const d = buildDeck(pool, selected.length * perPlayer, mode);
    if (d.length < selected.length * perPlayer) return;
    setPlayers(selected.map(s => ({ ...s, score: 0, correct: 0, wrong: 0, streak: 0, best: 0 })));
    setDeck(d);
    setTurn(0);
    setHistory([]);
    setPicked(null);
    setAnswered(false);
    setLastPoints(null);
    setXpState('idle');
    xpPaid.current = new Set();
    setTimer(ROUND_SEC);
    startedAt.current = Date.now();
    setPhase('play');
  };

  const resolve = useCallback((option: string | null) => {
    if (answered || !question || !current) return;
    const elapsed = (Date.now() - startedAt.current) / 1000;
    const good = option === question.correct;
    const pts = battlePoints(good, elapsed, ROUND_SEC);
    setAnswered(true);
    setPicked(option);
    setLastPoints(pts);
    setPlayers(ps => ps.map(p => {
      if (p.key !== current.key) return p;
      const streak = good ? p.streak + 1 : 0;
      return { ...p, score: p.score + pts, correct: p.correct + (good ? 1 : 0), wrong: p.wrong + (good ? 0 : 1), streak, best: Math.max(p.best, streak) };
    }));
    setHistory(h => [...h, { playerKey: current.key, q: question, picked: option, points: pts }]);
  }, [answered, question, current]);

  // Countdown for the current turn
  useEffect(() => {
    if (phase !== 'play' || answered) return;
    const t = window.setInterval(() => setTimer(s => (s <= 1 ? 0 : s - 1)), 1000);
    return () => window.clearInterval(t);
  }, [phase, answered, turn]);
  useEffect(() => { if (phase === 'play' && timer === 0 && !answered) resolve(null); }, [timer, phase, answered, resolve]);

  // Move on after showing the answer
  useEffect(() => {
    if (!answered) return;
    const t = window.setTimeout(() => {
      if (turn + 1 >= totalTurns) { setPhase('done'); return; }
      setTurn(n => n + 1);
      setPicked(null);
      setAnswered(false);
      setLastPoints(null);
      setTimer(ROUND_SEC);
      startedAt.current = Date.now();
    }, 1500);
    return () => window.clearTimeout(t);
  }, [answered, turn, totalTurns]);

  // 1–4 keys answer
  useEffect(() => {
    if (phase !== 'play' || !question) return;
    const onKey = (e: KeyboardEvent) => {
      const idx = ['1', '2', '3', '4'].indexOf(e.key);
      if (idx >= 0 && question.options[idx]) resolve(question.options[idx]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, question, resolve]);

  const ranking = [...players].sort((a, b) => b.score - a.score || b.correct - a.correct);
  const topScore = ranking[0]?.score ?? 0;
  const isWinner = (p: Player) => p.score === topScore && topScore > 0;

  useEffect(() => {
    if (phase === 'done' && topScore > 0) confetti({ particleCount: 180, spread: 90, origin: { y: 0.6 } });
  }, [phase, topScore]);

  const missed = useMemo(() => {
    const seen = new Map<string, Turn['q']>();
    history.filter(h => h.picked !== h.q.correct).forEach(h => seen.set(h.q.item.id, h.q));
    return Array.from(seen.values());
  }, [history]);

  const awardXp = async () => {
    if (!supabase) return;
    setXpState('saving');
    // A retry after a partial failure must not pay the same student twice.
    const pending = players.filter(p => p.studentId && !xpPaid.current.has(p.key) && battleXp(p, isWinner(p)) > 0);
    const results = await Promise.all(pending.map(async p => {
      const { error } = await supabase!.rpc('add_xp', { p_student_id: p.studentId, p_amount: battleXp(p, isWinner(p)) });
      if (!error) xpPaid.current.add(p.key);
      return error;
    }));
    setXpState(results.some(Boolean) ? 'error' : 'saved');
  };

  if (phase === 'setup') {
    const add = (p: { key: string; name: string; studentId?: string }) =>
      setSelected(s => (s.some(x => x.key === p.key) ? s : [...s, p]));
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900"><Sparkles className="h-6 w-6 text-fuchsia-600" /> So'z jangi</h1>
          <p className="mt-1 text-sm text-slate-500">O'quvchilar navbat bilan javob beradi: har savolga {ROUND_SEC} soniya, tez va to'g'ri javob ko'proq ochko. Oxirida xato qilingan so'zlar ro'yxati chiqadi.</p>
        </div>
        <div className="grid gap-4 rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6 md:grid-cols-2">
          <div className="space-y-3">
            {isStaff && (
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Guruh</span>
                <select value={groupId} onChange={e => setGroupId(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                  <option value="">Barcha o'quvchilar</option>
                  {groups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
              </label>
            )}
            {isStaff && roster.length > 0 && (
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">O'quvchilar</span>
                  <button type="button" className="text-xs font-semibold text-indigo-600 cursor-pointer"
                    onClick={() => roster.forEach(s => add({ key: s.id, name: s.full_name || s.email, studentId: s.id }))}>Hammasini qo'shish</button>
                </div>
                <div className="flex max-h-40 flex-wrap gap-1.5 overflow-y-auto">
                  {roster.map(s => {
                    const on = selected.some(x => x.key === s.id);
                    return (
                      <button key={s.id} type="button"
                        onClick={() => (on ? setSelected(sel => sel.filter(x => x.key !== s.id)) : add({ key: s.id, name: s.full_name || s.email, studentId: s.id }))}
                        className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${on ? 'border-indigo-500 bg-indigo-50 text-indigo-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                        {s.full_name || s.email}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <form className="flex gap-2" onSubmit={e => { e.preventDefault(); if (guest.trim()) { add({ key: `guest-${Date.now()}`, name: guest.trim().slice(0, 40) }); setGuest(''); } }}>
              <input value={guest} onChange={e => setGuest(e.target.value)} placeholder="Mehmon o'yinchi ismi" maxLength={40}
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
              <button type="submit" className="rounded-xl bg-slate-100 px-3 text-slate-700 hover:bg-slate-200 cursor-pointer" aria-label="Qo'shish"><Plus className="h-4 w-4" /></button>
            </form>
            {selected.length > 0 && (
              <ol className="space-y-1">
                {selected.map((p, i) => (
                  <li key={p.key} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-1.5 text-sm">
                    <span><span className="mr-2 text-xs font-bold text-slate-400">{i + 1}.</span>{p.name}{!p.studentId && <span className="ml-1 text-xs text-slate-400">(mehmon)</span>}</span>
                    <button type="button" onClick={() => setSelected(s => s.filter(x => x.key !== p.key))} className="text-slate-400 hover:text-slate-700 cursor-pointer" aria-label="Olib tashlash"><X className="h-3.5 w-3.5" /></button>
                  </li>
                ))}
              </ol>
            )}
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Har o'yinchiga savol</span>
              <select value={perPlayer} onChange={e => setPerPlayer(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                {[3, 5, 8, 10].map(n => <option key={n} value={n}>{n} ta</option>)}
              </select>
            </label>
          </div>
          <ContentPicker books={books} source={source} onSource={setSource} mode={mode} onMode={setMode} poolSize={pool.length} />
        </div>
        <button type="button" onClick={start} disabled={loading || pool.length < 4 || selected.length === 0}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-50 cursor-pointer">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
          {loading ? 'Kontent yuklanmoqda…' : selected.length === 0 ? "O'yinchilarni qo'shing" : `Boshlash · ${selected.length} o'yinchi`}
        </button>
      </div>
    );
  }

  if (phase === 'done') {
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-[28px] bg-[#0b0c1a] p-6 text-white sm:p-8">
          <div className="text-center">
            <Crown className="mx-auto h-12 w-12 text-amber-300" />
            <h2 className="mt-2 text-3xl font-black">{topScore > 0 ? `${ranking.filter(isWinner).map(p => p.name).join(', ')} g'olib!` : "Hech kim ochko olmadi"}</h2>
          </div>
          <ol className="mt-6 space-y-2">
            {ranking.map((p, i) => (
              <li key={p.key} className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 ${i === 0 ? 'bg-amber-400/15 ring-1 ring-amber-300/40' : 'bg-white/[0.05]'}`}>
                <span className="flex items-center gap-3">
                  <span className="w-6 text-center text-lg font-black text-slate-400">{i + 1}</span>
                  <span>
                    <span className="block font-bold">{p.name}</span>
                    <span className="block text-xs text-slate-400">{p.correct} to'g'ri · {p.wrong} xato · seriya {p.best}{p.studentId && isStaff ? ` · +${battleXp(p, isWinner(p))} XP` : ''}</span>
                  </span>
                </span>
                <span className="text-2xl font-black tabular-nums">{p.score}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {isStaff && players.some(p => p.studentId) && (
              <button type="button" onClick={awardXp} disabled={xpState === 'saving' || xpState === 'saved'}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-300 disabled:opacity-70 cursor-pointer">
                {xpState === 'saving' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Flame className="h-4 w-4" />}
                {xpState === 'saved' ? 'XP berildi' : xpState === 'error' ? 'Qayta urinish' : 'XP berish'}
              </button>
            )}
            <button type="button" onClick={start} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 cursor-pointer"><RotateCcw className="h-4 w-4" /> Qayta</button>
            <button type="button" onClick={() => setPhase('setup')} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 cursor-pointer"><Settings2 className="h-4 w-4" /> Sozlamalar</button>
          </div>
          {xpState === 'error' && <p className="mt-3 text-center text-sm text-rose-300">Ba'zi o'quvchilarga XP yozilmadi. Qayta urinib ko'ring.</p>}
        </div>

        <section className="rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6">
          <h3 className="text-[15px] font-bold text-slate-900">Qayta o'rganish kerak ({missed.length})</h3>
          {missed.length === 0 ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Hamma so'zlar to'g'ri topildi!</p>
          ) : (
            <ul className="mt-3 divide-y divide-slate-100">
              {missed.map(q => (
                <li key={q.item.id} className="py-2.5">
                  <p className="text-sm"><span className="font-bold text-slate-900">{q.item.term}</span> — <span className="text-slate-700">{q.item.uz}</span></p>
                  {q.item.example && <p className="text-xs italic text-slate-500">{q.item.example}</p>}
                  <p className="text-[11px] text-slate-400">{q.item.source}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
      <div className="rounded-[28px] bg-[#0b0c1a] p-5 text-white sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold text-slate-400">Savol {Math.min(turn + 1, totalTurns)} / {totalTurns}</span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-lg font-black tabular-nums ${timer <= 3 ? 'bg-rose-500/20 text-rose-300' : 'bg-white/10'}`}>
            <Timer className="h-4 w-4" /> {timer}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-1000 ease-linear" style={{ width: `${(timer / ROUND_SEC) * 100}%` }} />
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-fuchsia-300"><Swords className="mr-1 inline h-4 w-4" /> Navbat: <span className="text-lg font-extrabold text-white">{current?.name}</span></p>
        {question && (
          <>
            <div className="mt-4 rounded-3xl bg-white/[0.06] px-5 py-7 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{question.hint} · {question.item.source}</p>
              <p className={`mt-2 font-extrabold tracking-tight ${question.prompt.length > 80 ? 'text-xl sm:text-2xl' : 'text-3xl sm:text-5xl'}`}>{question.prompt}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {question.options.map((o, i) => {
                let cls = 'border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-white';
                if (answered) {
                  if (o === question.correct) cls = 'border-emerald-400 bg-emerald-500/25 text-white';
                  else if (o === picked) cls = 'border-rose-400 bg-rose-500/25 text-rose-100';
                  else cls = 'border-white/5 bg-white/[0.02] text-slate-500';
                }
                return (
                  <button key={o} type="button" disabled={answered} onClick={() => resolve(o)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-base font-semibold transition sm:text-lg cursor-pointer disabled:cursor-default ${cls}`}>
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold">{i + 1}</span>{o}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 h-7 text-center text-lg font-black">
              {answered && (lastPoints ? <span className="text-emerald-300">+{lastPoints}</span>
                : <span className="inline-flex items-center gap-1 text-rose-300"><XCircle className="h-5 w-5" /> {picked ? "Noto'g'ri" : 'Vaqt tugadi'}</span>)}
            </div>
          </>
        )}
      </div>

      <aside className="rounded-3xl border border-slate-200/70 bg-white p-4">
        <h3 className="mb-3 text-sm font-bold text-slate-900">Hisob</h3>
        <ol className="space-y-1.5">
          {ranking.map((p, i) => (
            <li key={p.key} className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${p.key === current?.key ? 'bg-indigo-50 ring-1 ring-indigo-200' : 'bg-slate-50'}`}>
              <span className="truncate"><span className="mr-1.5 text-xs font-bold text-slate-400">{i + 1}</span>{p.name}{p.streak >= 2 && <Flame className="ml-1 inline h-3.5 w-3.5 text-orange-500" />}</span>
              <span className="font-black tabular-nums text-slate-900">{p.score}</span>
            </li>
          ))}
        </ol>
        <button type="button" onClick={() => setPhase('done')} className="mt-4 w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer">
          O'yinni yakunlash
        </button>
      </aside>
    </div>
  );
};
