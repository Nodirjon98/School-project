import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Swords,
  Trophy,
  Users,
  Flame,
  Zap,
  Timer,
  CheckCircle2,
  XCircle,
  Award,
  ArrowRight,
  RotateCcw,
  Sparkles,
  BookOpen,
  Filter,
  Shield,
  Volume2,
  ChevronRight,
  ChevronLeft,
  Crown
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { CEFRLevel, VocabContestQuestion, VocabLeaderboardEntry } from '../../types';
import {
  CONTEST_OPPONENTS,
  CONTEST_QUESTION_BANK,
  ContestOpponent,
  getContestQuestions,
  getContestLeaderboard
} from '../../data/vocabContestData';
import {
  playSoundCorrect,
  playSoundWrong,
  playSoundVictory,
  playSoundClick
} from '../../lib/contestAudio';

type GameState = 'lobby' | 'countdown' | 'in_match' | 'match_result';

export const VocabContestPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { profile } = useAuth();
  const { groups, addXP } = useLMSData();

  // URL query params for auto-starting a match
  const requestedLevel = (searchParams.get('level') as CEFRLevel) || 'ALL';
  const requestedOpponentId = searchParams.get('opponent');

  // Active view tabs: 'arena' | 'leaderboard' | 'history'
  const [activeTab, setActiveTab] = useState<'arena' | 'leaderboard' | 'history'>('arena');

  // Filter states
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'ALL'>(requestedLevel);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('my_group');
  const [leaderboardLevelFilter, setLeaderboardLevelFilter] = useState<CEFRLevel | 'ALL'>('ALL');

  // Game Engine State
  const [gameState, setGameState] = useState<GameState>('lobby');
  const [currentOpponent, setCurrentOpponent] = useState<ContestOpponent>(CONTEST_OPPONENTS[0]);
  const [matchQuestions, setMatchQuestions] = useState<VocabContestQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);

  // Scoring & Timing
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [opponentScore, setOpponentScore] = useState<number>(0);
  const [playerStreak, setPlayerStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [countdownNum, setCountdownNum] = useState<number>(3);

  // Round Interactive State
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [opponentAnswered, setOpponentAnswered] = useState<boolean>(false);
  const [opponentChoice, setOpponentChoice] = useState<string | null>(null);
  const [isRoundLocked, setIsRoundLocked] = useState<boolean>(false);
  const [showUzTranslation, setShowUzTranslation] = useState<boolean>(true);

  // Match History / Stats (saved locally)
  const [matchHistory, setMatchHistory] = useState<Array<{
    id: string;
    date: string;
    opponentName: string;
    playerScore: number;
    opponentScore: number;
    isWin: boolean;
    level: string;
    xp: number;
  }>>(() => {
    try {
      const saved = localStorage.getItem('vocab_contest_history');
      return saved ? JSON.parse(saved) : [
        {
          id: 'm-init-1',
          date: 'Yesterday, 18:40',
          opponentName: 'Bekzod Toshmatov',
          playerScore: 420,
          opponentScore: 310,
          isWin: true,
          level: 'B1',
          xp: 50
        }
      ];
    } catch {
      return [];
    }
  });

  // Player Rating & Stats
  const [playerRating, setPlayerRating] = useState<number>(() => {
    const saved = localStorage.getItem('vocab_contest_rating');
    return saved ? parseInt(saved, 10) : 1420;
  });

  const timerRef = useRef<any>(null);
  const opponentTimerRef = useRef<any>(null);

  // Determine current user's group
  const userGroupName = useMemo(() => {
    return groups[0]?.name || 'IELTS Intensive Target 7.5+';
  }, [groups]);

  // Filtered Opponents
  const filteredOpponents = useMemo(() => {
    return CONTEST_OPPONENTS.filter(opp => {
      // Don't show current user as opponent
      if (opp.id === 'user-student-1') return false;

      // Group filter
      if (selectedGroupFilter === 'my_group') {
        const isSameGroup = opp.groupName === userGroupName || opp.groupId === 'group-1';
        if (!isSameGroup) return false;
      }

      // Level filter
      if (selectedLevel !== 'ALL') {
        if (selectedLevel === 'A1' || selectedLevel === 'A2') {
          return opp.level === 'A1' || opp.level === 'A2';
        }
        if (selectedLevel === 'B1') return opp.level === 'B1' || opp.level === 'B2';
        if (selectedLevel === 'B2') return opp.level === 'B2' || opp.level === 'B1';
        if (selectedLevel === 'C1' || selectedLevel === 'C2') return opp.level === 'B2' || opp.level === 'C1';
      }

      return true;
    });
  }, [selectedGroupFilter, selectedLevel, userGroupName]);

  // Filtered Leaderboard
  const leaderboardList = useMemo(() => {
    let list = getContestLeaderboard();

    if (selectedGroupFilter === 'my_group') {
      list = list.filter(e => e.groupName === userGroupName || e.groupId === 'group-1');
    }

    if (leaderboardLevelFilter !== 'ALL') {
      list = list.filter(e => e.level === leaderboardLevelFilter);
    }

    return list.sort((a, b) => b.rating - a.rating);
  }, [selectedGroupFilter, leaderboardLevelFilter, userGroupName]);

  // Persist history and rating
  useEffect(() => {
    try {
      localStorage.setItem('vocab_contest_history', JSON.stringify(matchHistory));
      localStorage.setItem('vocab_contest_rating', playerRating.toString());
    } catch (e) {
      console.warn('Failed to save contest stats:', e);
    }
  }, [matchHistory, playerRating]);

  // Auto-launch if requested via URL
  useEffect(() => {
    if (requestedOpponentId) {
      const opp = CONTEST_OPPONENTS.find(o => o.id === requestedOpponentId);
      if (opp) {
        startMatchCountdown(opp);
      }
    }
  }, [requestedOpponentId]);

  // Start match countdown
  const startMatchCountdown = (opponent: ContestOpponent) => {
    playSoundClick();
    setCurrentOpponent(opponent);
    const questions = getContestQuestions(selectedLevel, 5);
    setMatchQuestions(questions);
    setCurrentQIndex(0);
    setPlayerScore(0);
    setOpponentScore(0);
    setPlayerStreak(0);
    setHighestStreak(0);
    setGameState('countdown');
    setCountdownNum(3);

    const countInterval = setInterval(() => {
      setCountdownNum(prev => {
        if (prev <= 1) {
          clearInterval(countInterval);
          startRound(0, questions, opponent);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Start a question round
  const startRound = (qIdx: number, questions: VocabContestQuestion[], opponent: ContestOpponent) => {
    setGameState('in_match');
    setCurrentQIndex(qIdx);
    setSelectedOption(null);
    setOpponentAnswered(false);
    setOpponentChoice(null);
    setIsRoundLocked(false);
    setTimeLeft(15);

    clearInterval(timerRef.current);
    clearTimeout(opponentTimerRef.current);

    const activeQuestion = questions[qIdx];
    if (!activeQuestion) {
      finishMatch();
      return;
    }

    // Question Timer (15 seconds)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeExpire(activeQuestion);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Realistic Opponent Simulation
    // Responds in 2.5 - 5.5 seconds depending on accuracy
    const simulatedDelayMs = 2400 + Math.random() * 3000;
    opponentTimerRef.current = setTimeout(() => {
      const willGetCorrect = Math.random() * 100 <= opponent.accuracy;
      let oppChoice = activeQuestion.correctAnswer;
      if (!willGetCorrect) {
        const wrongOpts = activeQuestion.options.filter(o => o !== activeQuestion.correctAnswer);
        oppChoice = wrongOpts[Math.floor(Math.random() * wrongOpts.length)] || activeQuestion.options[0];
      }
      setOpponentAnswered(true);
      setOpponentChoice(oppChoice);

      if (oppChoice === activeQuestion.correctAnswer) {
        setOpponentScore(prev => prev + 100);
      }
    }, simulatedDelayMs);
  };

  // Handle Player Answer Selection
  const handleSelectOption = (option: string) => {
    if (isRoundLocked) return;
    setIsRoundLocked(true);
    setSelectedOption(option);
    clearInterval(timerRef.current);

    const activeQ = matchQuestions[currentQIndex];
    const isCorrect = option === activeQ.correctAnswer;

    if (isCorrect) {
      playSoundCorrect();
      const newStreak = playerStreak + 1;
      setPlayerStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);

      // Speed bonus (more points if answered quickly)
      const speedBonus = timeLeft * 4;
      const streakBonus = (newStreak - 1) * 20;
      const earned = 100 + speedBonus + streakBonus;
      setPlayerScore(prev => prev + earned);
    } else {
      playSoundWrong();
      setPlayerStreak(0);
    }
  };

  // Handle Time Expire
  const handleTimeExpire = (activeQ: VocabContestQuestion) => {
    if (!isRoundLocked) {
      setIsRoundLocked(true);
      playSoundWrong();
      setPlayerStreak(0);
    }
  };

  // Advance to next question or end match
  const handleNextQuestion = () => {
    playSoundClick();
    if (currentQIndex + 1 < matchQuestions.length) {
      startRound(currentQIndex + 1, matchQuestions, currentOpponent);
    } else {
      finishMatch();
    }
  };

  // Finish match and calculate results
  const finishMatch = () => {
    clearInterval(timerRef.current);
    clearTimeout(opponentTimerRef.current);
    setGameState('match_result');

    const isWin = playerScore >= opponentScore;
    if (isWin) {
      playSoundVictory();
      setPlayerRating(prev => prev + 25);
    } else {
      setPlayerRating(prev => Math.max(900, prev - 12));
    }

    const xpEarned = isWin ? 60 : 25;
    const newRecord = {
      id: `m-${Date.now()}`,
      date: 'Just now',
      opponentName: currentOpponent.name,
      playerScore,
      opponentScore,
      isWin,
      level: currentOpponent.level,
      xp: xpEarned
    };

    setMatchHistory(prev => [newRecord, ...prev]);
  };

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(opponentTimerRef.current);
    };
  }, []);

  // Text-to-speech for contest prompts
  const handlePronounce = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.rate = 0.95;
      window.speechSynthesis.speak(utter);
    }
  };

  const currentQ = matchQuestions[currentQIndex];

  return (
    <div className="space-y-6 pb-12">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER BANNER                                                      */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-500/30 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-amber-200 text-xs font-bold border border-amber-300/30 mb-3">
              <Swords className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Vocabulary & Idioms Combat Arena • Level-Based</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              <span>Vocabulary Contest</span>
              <span className="text-sm font-bold bg-amber-400/30 text-amber-100 px-2 py-0.5 rounded-md">
                Live 1v1
              </span>
            </h1>
            <p className="mt-2 text-amber-100 text-sm sm:text-base leading-relaxed">
              Challenge your classmates and AI sparring bots in fast-paced 5-round duels. Master essential words, collocations, idioms, and contextual phrases from the 4000 Essential English Words curriculum.
            </p>
          </div>

          {/* Player Stats Card */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/15 min-w-[240px] flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                Your Rating
              </div>
              <div className="text-3xl font-black text-white flex items-center gap-1.5 mt-0.5">
                <span>{playerRating}</span>
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-xs text-amber-200/80 mt-0.5 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Group Rank #3 • {userGroupName}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (filteredOpponents.length > 0) {
                  startMatchCountdown(filteredOpponents[0]);
                }
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md flex flex-col items-center justify-center cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>Quick Duel</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MATCH STATE OVERLAY: COUNTDOWN                                         */}
      {/* ========================================================================= */}
      {gameState === 'countdown' && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="text-center space-y-6 max-w-md w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold border border-amber-500/30">
              <Swords className="w-4 h-4 text-amber-400" />
              <span>Match Starting</span>
            </div>

            <div className="flex items-center justify-center gap-8 py-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center text-xl font-black text-white shadow-lg mx-auto">
                  {profile?.full_name?.charAt(0) || 'Y'}
                </div>
                <div className="text-sm font-bold text-white mt-2">You</div>
                <div className="text-xs text-indigo-300">{playerRating} pts</div>
              </div>

              <div className="text-2xl font-black text-amber-400">VS</div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-600 border-2 border-rose-400 flex items-center justify-center text-xl font-black text-white shadow-lg mx-auto">
                  {currentOpponent.name.charAt(0)}
                </div>
                <div className="text-sm font-bold text-white mt-2">{currentOpponent.name}</div>
                <div className="text-xs text-rose-300">{currentOpponent.rating} pts</div>
              </div>
            </div>

            <div className="text-8xl font-black text-amber-400 animate-bounce">
              {countdownNum}
            </div>
            <p className="text-slate-400 text-xs">
              5 Questions • 15 Seconds Per Round • Answer fast for combo streak bonus!
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ACTIVE MATCH ARENA VIEW                                                */}
      {/* ========================================================================= */}
      {gameState === 'in_match' && currentQ && (
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          {/* Top Status Bar: Scores, Time, Streak */}
          <div className="grid grid-cols-3 items-center pb-6 border-b border-slate-800 gap-4">
            {/* Player Side */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-lg border border-indigo-400 shadow-inner">
                {profile?.full_name?.charAt(0) || 'Y'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">You</span>
                  {playerStreak > 1 && (
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400 text-amber-300 text-[10px] font-black flex items-center gap-0.5">
                      <Flame className="w-3 h-3 text-amber-400" />
                      <span>{playerStreak}x Combo</span>
                    </span>
                  )}
                </div>
                <div className="text-2xl font-black text-indigo-400">{playerScore} pts</div>
              </div>
            </div>

            {/* Middle Timer & Round Info */}
            <div className="text-center">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                Round {currentQIndex + 1} of {matchQuestions.length}
              </div>
              <div
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-lg font-black border transition-all ${
                  timeLeft <= 5
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500 animate-pulse'
                    : 'bg-slate-800 text-amber-400 border-amber-400/40'
                }`}
              >
                <Timer className="w-4 h-4" />
                <span>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
              </div>
            </div>

            {/* Opponent Side */}
            <div className="flex items-center justify-end gap-3 text-right">
              <div>
                <div className="text-sm font-bold text-white flex items-center justify-end gap-1.5">
                  <span>{currentOpponent.name}</span>
                  {opponentAnswered && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" title="Opponent has answered" />
                  )}
                </div>
                <div className="text-2xl font-black text-rose-400">{opponentScore} pts</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center font-black text-lg border border-rose-400 shadow-inner">
                {currentOpponent.name.charAt(0)}
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-950/70 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-md text-xs font-black uppercase tracking-wider ${
                    currentQ.phraseType === 'idiom'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : currentQ.phraseType === 'collocation'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : currentQ.phraseType === 'phrasal_verb'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}
                >
                  {currentQ.phraseType ? currentQ.phraseType.replace('_', ' ') : 'Target Word'}
                </span>
                <span className="text-xs text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">
                  Level {currentQ.level} • Book {currentQ.sourceBook}, Unit {currentQ.sourceUnit}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowUzTranslation(!showUzTranslation)}
                  className="text-xs font-bold text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 transition"
                >
                  {showUzTranslation ? 'Hide Uzbek' : 'Show Uzbek'}
                </button>
                <button
                  type="button"
                  onClick={() => handlePronounce(currentQ.prompt)}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 transition"
                  title="Pronounce"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Prompt */}
            <div className="space-y-2 py-2">
              <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                {currentQ.prompt}
              </h2>
              {showUzTranslation && currentQ.promptUz && (
                <p className="text-sm text-indigo-300/90 font-medium italic">
                  Tarjima: {currentQ.promptUz}
                </p>
              )}
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentQ.correctAnswer;
                const isLocked = isRoundLocked;

                let btnStyle = 'bg-slate-800/80 hover:bg-slate-700/80 text-white border-slate-700';

                if (isLocked) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-400 shadow-md ring-2 ring-emerald-300';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-600 text-white border-rose-400 shadow-md';
                  } else {
                    btnStyle = 'bg-slate-800/40 text-slate-500 border-slate-800 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isLocked}
                    onClick={() => handleSelectOption(option)}
                    className={`p-4 rounded-xl border text-left font-bold text-sm transition-all duration-150 flex items-start gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-black/30 flex items-center justify-center text-xs font-mono shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-snug">{option}</span>
                    {isLocked && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
                    )}
                    {isLocked && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-200 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation when round is locked */}
            {isRoundLocked && (
              <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Idiom & Vocabulary Key:</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Opponent {opponentChoice === currentQ.correctAnswer ? '✓ Answered Correctly' : '✗ Missed This Round'}
                  </div>
                </div>
                <div className="text-sm text-slate-200">{currentQ.explanation}</div>
                {currentQ.explanationUz && (
                  <div className="text-xs text-indigo-300 italic">{currentQ.explanationUz}</div>
                )}
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition inline-flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>{currentQIndex + 1 === matchQuestions.length ? 'See Results' : 'Next Question'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MATCH RESULT SUMMARY OVERLAY                                           */}
      {/* ========================================================================= */}
      {gameState === 'match_result' && (
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="text-center max-w-lg mx-auto space-y-4">
            {playerScore >= opponentScore ? (
              <div className="space-y-2">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
                  <Crown className="w-10 h-10 animate-bounce" />
                </div>
                <h2 className="text-3xl font-black text-amber-400">Victory!</h2>
                <p className="text-slate-300 text-sm">
                  Outstanding performance! You outscored {currentOpponent.name} in vocabulary & idioms mastery.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-bold mt-2">
                  <span>+25 Rating Points</span>
                  <span>•</span>
                  <span>+60 Vocab XP</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-20 h-20 rounded-full bg-rose-500/20 border-2 border-rose-400 text-rose-400 flex items-center justify-center mx-auto shadow-lg">
                  <Swords className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-rose-400">Defeat</h2>
                <p className="text-slate-300 text-sm">
                  Good fight! Review the idioms and phrases below to sharpen your edge for the rematch.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold mt-2">
                  <span>-12 Rating</span>
                  <span>•</span>
                  <span>+25 Participation XP</span>
                </div>
              </div>
            )}

            {/* Score Comparison Box */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30">
                <div className="text-xs text-indigo-300 font-bold">Your Score</div>
                <div className="text-3xl font-black text-white mt-1">{playerScore}</div>
                <div className="text-xs text-indigo-200 mt-0.5">Highest Streak: {highestStreak}x</div>
              </div>
              <div className="bg-rose-950/40 p-4 rounded-xl border border-rose-500/30">
                <div className="text-xs text-rose-300 font-bold">{currentOpponent.name}</div>
                <div className="text-3xl font-black text-white mt-1">{opponentScore}</div>
                <div className="text-xs text-rose-200 mt-0.5">Accuracy: {currentOpponent.accuracy}%</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => startMatchCountdown(currentOpponent)}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Rematch {currentOpponent.name}</span>
              </button>

              <button
                type="button"
                onClick={() => setGameState('lobby')}
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Return to Arena
              </button>

              <button
                type="button"
                onClick={() => navigate('/curriculum')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition inline-flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Study Reading Units</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MAIN LOBBY: OPPONENTS, LEADERBOARD, & PROGRESS                         */}
      {/* ========================================================================= */}
      {gameState === 'lobby' && (
        <div className="space-y-6">
          {/* Navigation Sub-Tabs */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('arena')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'arena'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Swords className="w-4 h-4" />
                <span>1. Duel Arena ({filteredOpponents.length} Classmates)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('leaderboard')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'leaderboard'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>2. Group Leaderboard</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('history')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'history'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Timer className="w-4 h-4" />
                <span>3. Match History ({matchHistory.length})</span>
              </button>
            </div>

            {/* Quick Link to Curriculum */}
            <button
              type="button"
              onClick={() => navigate('/curriculum')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Go to 4000 Words Reading</span>
            </button>
          </div>

          {/* TAB 1: DUEL ARENA WITH FILTERABLE OPPONENTS */}
          {activeTab === 'arena' && (
            <div className="space-y-6">
              {/* Filter Controls Bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
                {/* Group Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Group:
                  </span>
                  <div className="flex rounded-xl bg-slate-100 p-1">
                    <button
                      type="button"
                      onClick={() => setSelectedGroupFilter('my_group')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        selectedGroupFilter === 'my_group'
                          ? 'bg-white text-indigo-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      My Group ({userGroupName})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedGroupFilter('all_groups')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        selectedGroupFilter === 'all_groups'
                          ? 'bg-white text-indigo-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      All Groups & Bots
                    </button>
                  </div>
                </div>

                {/* CEFR Level Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Contest Level:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {(['ALL', 'A1', 'A2', 'B1', 'B2', 'C1'] as const).map(lvl => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setSelectedLevel(lvl)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                          selectedLevel === lvl
                            ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {lvl === 'ALL' ? 'All Levels' : lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Opponent Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredOpponents.map(opp => {
                  return (
                    <div
                      key={opp.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group relative overflow-hidden"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-sm ${
                                opp.role === 'bot'
                                  ? 'bg-gradient-to-tr from-rose-500 to-amber-500'
                                  : 'bg-indigo-600'
                              }`}
                            >
                              {opp.name.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition">
                                  {opp.name}
                                </h3>
                                {opp.role === 'bot' && (
                                  <span className="text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200 px-1.5 py-0.2 rounded">
                                    AI Bot
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-400 font-medium">
                                {opp.groupName}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xs font-black text-amber-600 flex items-center justify-end gap-1">
                              <Trophy className="w-3.5 h-3.5" />
                              <span>{opp.rating}</span>
                            </div>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                              Level {opp.level}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 italic bg-slate-50 p-2 rounded-xl border border-slate-100">
                          "{opp.bio}"
                        </p>

                        {/* Curriculum Progress Stats */}
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                          <div className="bg-slate-50 rounded-lg p-1.5">
                            <div className="text-[10px] text-slate-400">Units</div>
                            <div className="text-xs font-black text-slate-800">
                              {opp.unitsCompleted} / 30
                            </div>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-1.5">
                            <div className="text-[10px] text-slate-400">Words</div>
                            <div className="text-xs font-black text-indigo-600">
                              {opp.wordsMastered}
                            </div>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-1.5">
                            <div className="text-[10px] text-slate-400">Phrases</div>
                            <div className="text-xs font-black text-amber-600">
                              {opp.phrasesMastered}
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => startMatchCountdown(opp)}
                        className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Swords className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
                        <span>Challenge Duel</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: GROUP LEADERBOARD */}
          {activeTab === 'leaderboard' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="p-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span>Vocabulary Contest Ranking</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Rankings based on duel rating, 4000 Essential English Words unit completions, and mastered idioms.
                  </p>
                </div>

                {/* Level Filter for Leaderboard */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                  {(['ALL', 'A2', 'B1', 'B2'] as const).map(lvl => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setLeaderboardLevelFilter(lvl)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        leaderboardLevelFilter === lvl
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {lvl === 'ALL' ? 'All' : lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4 w-16">Rank</th>
                      <th className="py-3.5 px-4">Student</th>
                      <th className="py-3.5 px-4">Group</th>
                      <th className="py-3.5 px-4">Rating</th>
                      <th className="py-3.5 px-4">W / L (Win %)</th>
                      <th className="py-3.5 px-4">Curriculum Progress</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leaderboardList.map((entry, idx) => {
                      const isCurrentUser = entry.studentId === 'user-student-1';
                      const oppMatch = CONTEST_OPPONENTS.find(o => o.id === entry.studentId);

                      return (
                        <tr
                          key={entry.studentId}
                          className={`hover:bg-slate-50 transition ${
                            isCurrentUser ? 'bg-indigo-50/50 font-bold' : ''
                          }`}
                        >
                          <td className="py-3 px-4 font-black">
                            {idx === 0 ? (
                              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shadow-xs">
                                1
                              </span>
                            ) : idx === 1 ? (
                              <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-900 flex items-center justify-center text-xs font-black shadow-xs">
                                2
                              </span>
                            ) : idx === 2 ? (
                              <span className="w-6 h-6 rounded-full bg-amber-700 text-amber-100 flex items-center justify-center text-xs font-black shadow-xs">
                                3
                              </span>
                            ) : (
                              <span className="text-slate-400 pl-1.5">{idx + 1}</span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                                {entry.studentName.charAt(0)}
                              </div>
                              <div>
                                <div className="text-slate-900 font-bold flex items-center gap-1.5">
                                  <span>{entry.studentName}</span>
                                  {isCurrentUser && (
                                    <span className="text-[10px] bg-indigo-600 text-white px-1.5 rounded">
                                      You
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-amber-600 font-medium">
                                  {entry.badge}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            <div>{entry.groupName}</div>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                              Level {entry.level}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-black text-amber-600 text-sm">
                            {entry.rating}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            <span className="font-bold">{entry.wins}W</span> - {entry.losses}L
                            <span className="text-[11px] text-slate-400 ml-1.5">({entry.winRate}%)</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-[11px] text-slate-800">
                              <span className="font-bold text-indigo-700">{entry.unitsCompleted}</span> units •{' '}
                              <span className="font-bold text-slate-900">{entry.wordsMastered}</span> words •{' '}
                              <span className="font-bold text-amber-600">{entry.phrasesMastered}</span> idioms
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            {!isCurrentUser && oppMatch && (
                              <button
                                type="button"
                                onClick={() => startMatchCountdown(oppMatch)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs transition inline-flex items-center gap-1 cursor-pointer"
                              >
                                <Swords className="w-3.5 h-3.5" />
                                <span>Duel</span>
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: MATCH HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-5 space-y-4">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Timer className="w-5 h-5 text-indigo-600" />
                <span>Recent Contest Battles</span>
              </h3>

              {matchHistory.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  No duel matches recorded yet. Challenge a classmate above!
                </div>
              ) : (
                <div className="space-y-3">
                  {matchHistory.map(m => (
                    <div
                      key={m.id}
                      className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs ${
                            m.isWin
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-rose-100 text-rose-800 border border-rose-300'
                          }`}
                        >
                          {m.isWin ? 'WIN' : 'LOSS'}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            Duel vs {m.opponentName}
                          </div>
                          <div className="text-xs text-slate-400">
                            {m.date} • Level {m.level}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-sm font-black text-slate-900">
                            {m.playerScore} - {m.opponentScore}
                          </div>
                          <div className="text-[11px] text-emerald-600 font-bold">
                            +{m.xp} XP Earned
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
