import React, { useState, useMemo } from 'react';
import { 
  X, Volume2, Search, Check, Plus, BookOpen, Layers, 
  Sparkles, ArrowRight, RotateCw, ExternalLink, ChevronRight, Bookmark
} from 'lucide-react';
import { RealWorldUnit, RealWorldVocab } from '../../types';
import { playSound } from '../../lib/sound';
import { speakTargetWord } from '../../lib/pronunciationEngine';
import { getSynonymForVocab } from '../../data/realworld/academicSynonyms';

interface UnitVocabularyModalProps {
  unit: RealWorldUnit;
  isOpen: boolean;
  onClose: () => void;
  onSelectWord: (vocab: RealWorldVocab) => void;
  onOpenKitobDarsi: (passageId?: string) => void;
  addedWords?: Set<string>;
  onSaveWord?: (vocab: RealWorldVocab) => void;
}

export const UnitVocabularyModal: React.FC<UnitVocabularyModalProps> = ({
  unit,
  isOpen,
  onClose,
  onSelectWord,
  onOpenKitobDarsi,
  addedWords = new Set(),
  onSaveWord
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPassageFilter, setSelectedPassageFilter] = useState<'all' | string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'flashcards'>('list');
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Collect all vocabulary from both passages
  const allVocab = useMemo(() => {
    const list: Array<RealWorldVocab & { passageId: string; passageNumber: number; passageTitle: string }> = [];
    unit.passages.forEach(p => {
      (p.targetVocab || []).forEach(v => {
        list.push({
          ...v,
          passageId: p.id,
          passageNumber: p.passageNumber,
          passageTitle: p.title
        });
      });
    });
    return list;
  }, [unit]);

  // Filtered vocabulary
  const filteredVocab = useMemo(() => {
    let result = allVocab;
    if (selectedPassageFilter !== 'all') {
      result = result.filter(v => v.passageId === selectedPassageFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(v => 
        v.word.toLowerCase().includes(q) ||
        v.translationUz.toLowerCase().includes(q) ||
        v.definitionEn.toLowerCase().includes(q) ||
        (v.synonym && v.synonym.toLowerCase().includes(q))
      );
    }
    return result;
  }, [allVocab, selectedPassageFilter, searchQuery]);

  if (!isOpen) return null;

  const currentCard = filteredVocab[cardIndex] || filteredVocab[0];

  const handlePronounce = (word: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakTargetWord(word, { rate: 0.9 });
  };

  const handleNextCard = () => {
    setIsCardFlipped(false);
    setCardIndex(prev => (prev < filteredVocab.length - 1 ? prev + 1 : 0));
    playSound('click');
  };

  const handlePrevCard = () => {
    setIsCardFlipped(false);
    setCardIndex(prev => (prev > 0 ? prev - 1 : filteredVocab.length - 1));
    playSound('click');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3 bg-slate-50/70 dark:bg-slate-800/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <span>Unit {unit.unitNumber}</span>
              <span>•</span>
              <span>{unit.subjectArea}</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono text-[10px] font-black">
                {allVocab.length} ta so'z
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
              {unit.title}: Lug'atlar va Tarjimalar
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              So'zlarning o'zbekcha tarjimasi, talaffuzi va kontekstual ma'nolari
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTROLS: SEARCH, PASSAGE FILTER, VIEW MODE */}
        <div className="p-3 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2.5 bg-white dark:bg-slate-900">
          {/* Search bar */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCardIndex(0);
              }}
              placeholder="So'z yoki o'zbekcha tarjima qidiring..."
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 border-none text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Passage Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            <button
              type="button"
              onClick={() => { setSelectedPassageFilter('all'); setCardIndex(0); }}
              className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                selectedPassageFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Hammasi ({allVocab.length})
            </button>
            {unit.passages.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => { setSelectedPassageFilter(p.id); setCardIndex(0); }}
                className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  selectedPassageFilter === p.id
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Part {p.passageNumber}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: List vs Flashcards */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`px-2.5 py-1 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Ro'yxat</span>
            </button>
            <button
              type="button"
              onClick={() => { setViewMode('flashcards'); setIsCardFlipped(false); }}
              className={`px-2.5 py-1 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kartochkalar</span>
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredVocab.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <p className="text-sm font-semibold">Qidiruv bo'yicha so'z topilmadi.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedPassageFilter('all'); }}
                className="text-xs text-indigo-600 hover:underline font-bold"
              >
                Filtrni tozalash
              </button>
            </div>
          ) : viewMode === 'list' ? (
            /* ========================================================= */
            /* MODE 1: LIST WITH FULL TRANSLATIONS & AUDIO               */
            /* ========================================================= */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredVocab.map((item) => {
                const isSaved = addedWords.has(item.word.toLowerCase());
                const syn = getSynonymForVocab(item);

                return (
                  <div
                    key={`${item.passageId}-${item.word}`}
                    onClick={() => onSelectWord(item)}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-indigo-400 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/20 transition cursor-pointer flex flex-col justify-between space-y-2.5 group"
                  >
                    <div>
                      {/* Top row: Word, Audio, Phonetic, Part */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 transition">
                              {item.word}
                            </span>
                            <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                              {item.phonetic}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold italic">
                              {item.pos}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                            Part {item.passageNumber}: {item.passageTitle}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => handlePronounce(item.word, e)}
                          className="p-2 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 border border-slate-200 dark:border-slate-700 shadow-2xs transition cursor-pointer"
                          title="Talaffuzni tinglash"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Uzbek translation (Highlighted) */}
                      <div className="mt-2 p-2 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900">
                        <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                          O'zbekcha tarjima:
                        </div>
                        <div className="text-sm font-black text-indigo-950 dark:text-indigo-100 mt-0.5">
                          {item.translationUz}
                        </div>
                      </div>

                      {/* English Definition */}
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {item.definitionEn}
                      </p>

                      {/* Contextual Synonym & Collocation */}
                      {(item.synonym || item.collocation || syn.synonym) && (
                        <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                          {(item.synonym || syn.synonym) && (
                            <span className="px-2 py-0.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 font-medium">
                              <b>Sinonim:</b> {item.synonym || syn.synonym}
                            </span>
                          )}
                          {item.collocation && (
                            <span className="px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-medium">
                              <b>Collocation:</b> {item.collocation}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Actions: Save to SRS and Detail */}
                    <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-0.5 transition">
                        <span>Batafsil / Talaffuz mashqi</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>

                      {onSaveWord && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSaveWord(item);
                            playSound('click');
                          }}
                          className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition flex items-center gap-1 cursor-pointer ${
                            isSaved
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200'
                              : 'bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {isSaved ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>Saqlangan</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3 text-indigo-600" />
                              <span>Lug'atimga</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ========================================================= */
            /* MODE 2: INTERACTIVE FLASHCARD MEMORIZATION CARDS          */
            /* ========================================================= */
            currentCard && (
              <div className="max-w-md mx-auto space-y-4 py-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
                  <span>Kartochka: {cardIndex + 1} / {filteredVocab.length}</span>
                  <span className="text-indigo-600">Ustiga bosib tarjimasini oching</span>
                </div>

                {/* Flip card */}
                <div
                  onClick={() => {
                    setIsCardFlipped(prev => !prev);
                    playSound('click');
                  }}
                  className={`min-h-[260px] p-6 sm:p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between text-center select-none shadow-lg ${
                    isCardFlipped
                      ? 'bg-indigo-600 text-white border-indigo-500 rotate-y-180'
                      : 'bg-white dark:bg-slate-800 border-indigo-200 dark:border-indigo-900 text-slate-900 dark:text-white'
                  }`}
                >
                  {!isCardFlipped ? (
                    /* FRONT: ENGLISH WORD, PHONETIC, AUDIO */
                    <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase">
                        Part {currentCard.passageNumber} • {currentCard.pos}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                        {currentCard.word}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400 dark:text-slate-300 text-sm">
                          {currentCard.phonetic}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handlePronounce(currentCard.word, e)}
                          className="p-1.5 rounded-full bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 transition cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 italic pt-2">
                        Tarjimani ko'rish uchun bosing 👆
                      </p>
                    </div>
                  ) : (
                    /* BACK: UZBEK TRANSLATION, DEFINITION, SAMPLE */
                    <div className="flex-1 flex flex-col items-center justify-center space-y-3 text-white">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                        O'zbekcha Ma'nosi:
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black">
                        {currentCard.translationUz}
                      </h3>
                      <p className="text-xs text-indigo-100 leading-relaxed max-w-xs">
                        {currentCard.definitionEn}
                      </p>
                      {currentCard.sampleSentence && (
                        <div className="p-3 rounded-2xl bg-indigo-700/60 border border-indigo-500/40 text-xs italic text-indigo-50 max-w-sm mt-2">
                          "{currentCard.sampleSentence}"
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-2 text-[11px] opacity-70 flex items-center justify-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Aylantirish uchun bosing</span>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handlePrevCard}
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs transition cursor-pointer"
                  >
                    ← Oldingisi
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectWord(currentCard)}
                    className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs transition cursor-pointer flex items-center gap-1"
                  >
                    <span>Batafsil</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextCard}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition cursor-pointer"
                  >
                    Keyingisi →
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {/* FOOTER ACTION: DIRECT JUMP TO KITOB DARSI */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Lug'atlarni o'rgangach, kitob darsidagi haqiqiy matn va mashqlarga o'ting.
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenKitobDarsi(selectedPassageFilter !== 'all' ? selectedPassageFilter : undefined);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span>Kitob Darsiga O'tish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
