import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Maximize, Minimize, Pause, Play, RotateCcw, Settings2, Swords, Trophy } from 'lucide-react';
import { useLMSData } from '../../contexts/LMSDataContext';
import { useAuth } from '../../contexts/AuthContext';
import { ContentPicker } from '../../components/games/classroom/ContentPicker';
import { useGamePool } from '../../components/games/classroom/useGamePool';
import { ContentSource, GameQuestion, ModeChoice, buildDeck } from '../../lib/gameQuestions';

type Side = 'left' | 'right';
interface PlayerState { name: string; score: number; streak: number; best: number; wrong: number }

const KEYS: Record<Side, string[]> = { left: ['1', '2', '3', '4'], right: ['7', '8', '9', '0'] };
const SIDE_STYLE: Record<Side, { ring: string; btn: string; text: string; color: string }> = {
  left: { ring: 'ring-indigo-400', btn: 'bg-indigo-500/15 hover:bg-indigo-500/30 border-indigo-400/40', text: 'text-indigo-300', color: '#818cf8' },
  right: { ring: 'ring-fuchsia-400', btn: 'bg-fuchsia-500/15 hover:bg-fuchsia-500/30 border-fuchsia-400/40', text: 'text-fuchsia-300', color: '#e879f9' },
};
const fresh = (name: string): PlayerState => ({ name, score: 0, streak: 0, best: 0, wrong: 0 });

/**
 * Two players, one screen: the first correct answer takes the point; a wrong
 * answer locks that side until the next question. Ported from premier-school's
 * Duel and fed by 4000 Essential Words / daily words.
 */
export const DuelPage: React.FC = () => {
  const { students } = useLMSData();
  const { role } = useAuth();
  const roster = useMemo(
    () => (role === 'student' ? [] : students.filter(s => s.status !== 'left').map(s => s.full_name || s.email).filter(Boolean).sort()),
    [students, role]
  );

  const [source, setSource] = useState<ContentSource>({ book: 1, unitFrom: 1, unitTo: 5, kinds: ['word'] });
  const [mode, setMode] = useState<ModeChoice>('en_uz');
  const { books, pool, loading } = useGamePool(source);

  const [names, setNames] = useState<Record<Side, string>>({ left: '', right: '' });
  const [roundTime, setRoundTime] = useState(90);
  const [target, setTarget] = useState(10);

  const [phase, setPhase] = useState<'setup' | 'play' | 'done'>('setup');
  const [deck, setDeck] = useState<GameQuestion[]>([]);
  const [qi, setQi] = useState(0);
  const [players, setPlayers] = useState<Record<Side, PlayerState>>({ left: fresh(''), right: fresh('') });
  const [lockedSides, setLockedSides] = useState<Side[]>([]);
  const [reveal, setReveal] = useState<{ by: Side | null; picked: Partial<Record<Side, string>> } | null>(null);
  const [picked, setPicked] = useState<Partial<Record<Side, string>>>({});
  const [seconds, setSeconds] = useState(roundTime);
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const question = deck[qi];

  const start = () => {
    const d = buildDeck(pool, 300, mode);
    if (d.length === 0) return;
    setDeck(d);
    setQi(0);
    setPlayers({ left: fresh(names.left.trim() || "1-o'yinchi"), right: fresh(names.right.trim() || "2-o'yinchi") });
    setLockedSides([]);
    setPicked({});
    setReveal(null);
    setSeconds(roundTime);
    setPaused(false);
    setPhase('play');
  };

  const finish = useCallback(() => setPhase('done'), []);

  // Clock
  useEffect(() => {
    if (phase !== 'play' || paused) return;
    const t = window.setInterval(() => setSeconds(s => (s <= 1 ? 0 : s - 1)), 1000);
    return () => window.clearInterval(t);
  }, [phase, paused]);
  useEffect(() => { if (phase === 'play' && seconds === 0) finish(); }, [seconds, phase, finish]);

  const next = useCallback(() => {
    setReveal(null);
    setPicked({});
    setLockedSides([]);
    setQi(i => i + 1);
  }, []);

  useEffect(() => {
    if (!reveal) return;
    const t = window.setTimeout(() => {
      if (reveal.by && players[reveal.by].score >= target) finish();
      else next();
    }, reveal.by ? 900 : 1600);
    return () => window.clearTimeout(t);
  }, [reveal, players, target, next, finish]);

  const answer = useCallback((side: Side, option: string) => {
    if (phase !== 'play' || paused || reveal || !question || lockedSides.includes(side)) return;
    const good = option === question.correct;
    const nowPicked = { ...picked, [side]: option };
    setPicked(nowPicked);
    if (good) {
      setPlayers(p => {
        const me = p[side];
        const streak = me.streak + 1;
        return { ...p, [side]: { ...me, score: me.score + 1, streak, best: Math.max(me.best, streak) } };
      });
      setReveal({ by: side, picked: nowPicked });
    } else {
      setPlayers(p => ({ ...p, [side]: { ...p[side], streak: 0, wrong: p[side].wrong + 1 } }));
      const locked = [...lockedSides, side];
      setLockedSides(locked);
      if (locked.length === 2) setReveal({ by: null, picked: nowPicked });
    }
  }, [phase, paused, reveal, question, lockedSides, picked]);

  // Keyboard: left 1–4, right 7–0
  useEffect(() => {
    if (phase !== 'play' || !question) return;
    const onKey = (e: KeyboardEvent) => {
      (Object.keys(KEYS) as Side[]).forEach(side => {
        const idx = KEYS[side].indexOf(e.key);
        if (idx >= 0 && question.options[idx]) answer(side, question.options[idx]);
      });
      if (e.key === ' ') { e.preventDefault(); setPaused(p => !p); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, question, answer]);

  // Ran out of questions → end
  useEffect(() => { if (phase === 'play' && deck.length && qi >= deck.length) finish(); }, [qi, deck.length, phase, finish]);

  const winner: Side | null = players.left.score === players.right.score ? null : players.left.score > players.right.score ? 'left' : 'right';
  useEffect(() => {
    if (phase !== 'done' || !winner) return;
    confetti({ particleCount: 160, spread: 80, origin: { x: winner === 'left' ? 0.25 : 0.75, y: 0.6 }, colors: [SIDE_STYLE[winner].color, '#fbbf24', '#ffffff'] });
  }, [phase, winner]);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) { await stageRef.current?.requestFullscreen(); setFullscreen(true); }
      else { await document.exitFullscreen(); setFullscreen(false); }
    } catch { /* not supported */ }
  };
  useEffect(() => {
    const onChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  if (phase === 'setup') {
    const nameField = (side: Side, label: string) => (
      <label className="block">
        <span className={`mb-1 block text-xs font-bold uppercase tracking-wider ${side === 'left' ? 'text-indigo-600' : 'text-fuchsia-600'}`}>{label}</span>
        <input list="duel-roster" value={names[side]} onChange={e => setNames(n => ({ ...n, [side]: e.target.value }))} maxLength={40}
          placeholder="Ism yozing yoki tanlang" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </label>
    );
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900"><Swords className="h-6 w-6 text-indigo-600" /> Duel</h1>
          <p className="mt-1 text-sm text-slate-500">Ikki o'quvchi bitta ekranda bellashadi: kim birinchi to'g'ri javob bersa, ochko o'shaniki. Proyektor yoki doskada o'ynash uchun.</p>
        </div>
        <div className="grid gap-4 rounded-3xl border border-slate-200/70 bg-white p-5 sm:grid-cols-2 sm:p-6">
          <div className="space-y-3">
            {nameField('left', "1-o'yinchi (chap · 1–4 tugmalari)")}
            {nameField('right', "2-o'yinchi (o'ng · 7–0 tugmalari)")}
            <datalist id="duel-roster">{roster.map(n => <option key={n} value={n} />)}</datalist>
            <div className="grid grid-cols-2 gap-2">
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Vaqt</span>
                <select value={roundTime} onChange={e => setRoundTime(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                  {[60, 90, 120, 180].map(s => <option key={s} value={s}>{s} soniya</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">G'alaba</span>
                <select value={target} onChange={e => setTarget(Number(e.target.value))} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
                  {[5, 10, 15, 20].map(n => <option key={n} value={n}>{n} ochko</option>)}
                </select>
              </label>
            </div>
          </div>
          <ContentPicker books={books} source={source} onSource={setSource} mode={mode} onMode={setMode} poolSize={pool.length} />
        </div>
        <button type="button" onClick={start} disabled={loading || pool.length < 4}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:opacity-50 cursor-pointer">
          <Play className="h-4 w-4" /> {loading ? 'Kontent yuklanmoqda…' : 'Boshlash'}
        </button>
      </div>
    );
  }

  const optionClass = (side: Side, option: string) => {
    const base = 'w-full rounded-2xl border px-4 py-3 text-left text-base sm:text-lg font-semibold transition cursor-pointer disabled:cursor-default';
    if (reveal || lockedSides.includes(side)) {
      if (option === question?.correct && reveal) return `${base} border-emerald-400 bg-emerald-500/25 text-white`;
      if (picked[side] === option) return `${base} border-rose-400 bg-rose-500/25 text-rose-100`;
      return `${base} border-white/5 bg-white/[0.03] text-slate-500`;
    }
    return `${base} ${SIDE_STYLE[side].btn} text-white`;
  };

  const panel = (side: Side) => {
    const p = players[side];
    return (
      <div className={`flex flex-col rounded-3xl bg-white/[0.04] p-4 sm:p-5 ${reveal?.by === side ? `ring-2 ${SIDE_STYLE[side].ring}` : ''}`}>
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <span className={`truncate text-lg font-extrabold ${SIDE_STYLE[side].text}`}>{p.name}</span>
          <span className="text-4xl font-black tabular-nums text-white">{p.score}</span>
        </div>
        <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, (p.score / target) * 100)}%`, background: SIDE_STYLE[side].color }} />
        </div>
        <div className="grid gap-2">
          {question?.options.map((o, i) => (
            <button key={o} type="button" disabled={!!reveal || lockedSides.includes(side) || paused} onClick={() => answer(side, o)} className={optionClass(side, o)}>
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xs font-bold">{KEYS[side][i]}</span>{o}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-400">Seriya: {p.streak} · Eng yaxshi: {p.best}</p>
      </div>
    );
  };

  return (
    <div ref={stageRef} className="relative overflow-hidden rounded-[28px] bg-[#0b0c1a] p-4 text-white sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-bold text-slate-300"><Swords className="h-4 w-4" /> Duel · {target} ochkogacha</span>
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-lg font-black tabular-nums ${seconds <= 10 ? 'bg-rose-500/20 text-rose-300' : 'bg-white/10'}`}>
            {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
          </span>
          {phase === 'play' && (
            <button type="button" onClick={() => setPaused(p => !p)} className="rounded-full bg-white/10 p-2 hover:bg-white/20 cursor-pointer" aria-label={paused ? 'Davom etish' : 'Pauza'}>
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
          )}
          <button type="button" onClick={toggleFullscreen} className="rounded-full bg-white/10 p-2 hover:bg-white/20 cursor-pointer" aria-label="To'liq ekran">
            {fullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => setPhase('setup')} className="rounded-full bg-white/10 p-2 hover:bg-white/20 cursor-pointer" aria-label="Sozlamalar">
            <Settings2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {question && phase === 'play' && (
        <div className="mb-5 rounded-3xl bg-white/[0.06] px-5 py-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{question.hint} · {question.item.source}</p>
          <p className={`mt-2 font-extrabold tracking-tight ${question.prompt.length > 80 ? 'text-xl sm:text-2xl' : 'text-3xl sm:text-5xl'}`}>{question.prompt}</p>
          {paused && <p className="mt-3 text-sm font-semibold text-amber-300">Pauza — davom etish uchun Bo'sh joy tugmasini bosing</p>}
          {reveal && !reveal.by && <p className="mt-3 text-sm font-semibold text-emerald-300">To'g'ri javob: {question.correct}</p>}
        </div>
      )}

      {phase === 'play' ? (
        <div className="grid gap-4 md:grid-cols-2">{panel('left')}{panel('right')}</div>
      ) : (
        <div className="py-10 text-center">
          <Trophy className="mx-auto h-14 w-14 text-amber-300" />
          <h2 className="mt-3 text-3xl font-black">{winner ? `${players[winner].name} g'olib!` : 'Durang!'}</h2>
          <p className="mt-2 text-slate-300">{players.left.name} {players.left.score} : {players.right.score} {players.right.name}</p>
          <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-3 text-sm">
            {(['left', 'right'] as Side[]).map(s => (
              <div key={s} className="rounded-2xl bg-white/[0.06] p-3">
                <p className={`font-bold ${SIDE_STYLE[s].text}`}>{players[s].name}</p>
                <p className="text-slate-300">Xato: {players[s].wrong} · Seriya: {players[s].best}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <button type="button" onClick={start} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 cursor-pointer"><RotateCcw className="h-4 w-4" /> Qayta o'ynash</button>
            <button type="button" onClick={() => setPhase('setup')} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 cursor-pointer"><Settings2 className="h-4 w-4" /> Sozlamalar</button>
          </div>
        </div>
      )}
    </div>
  );
};
