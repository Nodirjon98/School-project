import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { CEFRLevel, DailyWord } from '../../types';
import { speakWord } from '../../lib/sound';
import { Modal } from '../../components/common/Modal';
import { 
  Database, Plus, Volume2, Search, 
  BookOpen, Check, Trash2 
} from 'lucide-react';

export const DailyWordsManager: React.FC = () => {
  const { t } = useLanguage();
  const { dailyWords, addDailyWord } = useLMSData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');

  // Form
  const [word, setWord] = useState('');
  const [translationUz, setTranslationUz] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');
  const [cefrLevel, setCefrLevel] = useState<CEFRLevel>('B2');
  const [partOfSpeech, setPartOfSpeech] = useState('adjective');

  const handleAddWord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word || !translationUz) return;

    await addDailyWord({
      word,
      translation_uz: translationUz,
      definition,
      example,
      cefr_level: cefrLevel,
      part_of_speech: partOfSpeech,
      day_index: dailyWords.length + 1
    });

    setIsModalOpen(false);
    setWord('');
    setTranslationUz('');
    setDefinition('');
    setExample('');
  };

  const filteredWords = dailyWords.filter(w => {
    const matchesSearch = w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.translation_uz.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || w.cefr_level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {t('manageWordsTitle')}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Har kuni o'quvchilarga taqdim etiladigan 5 ta so'zlar bazasi
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Yangi so'z qo'shish</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex items-center gap-2">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="So'z yoki o'zbekcha tarjimasi bo'yicha qidirish..."
            className="w-full text-xs font-medium bg-transparent focus:outline-hidden text-slate-900"
          />
        </div>

        <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-3">
          <span className="text-xs text-slate-500 font-semibold shrink-0">Daraja:</span>
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
          >
            <option value="all">Barcha darajalar</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
          </select>
        </div>
      </div>

      {/* Words Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span>Lug'atdagi jami so'zlar: {filteredWords.length} ta</span>
          <span>Leitner SRS bilan sinxronlangan</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredWords.map(w => (
            <div key={w.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-slate-900">{w.word}</span>
                  <span className="text-xs text-slate-400 italic">({w.part_of_speech})</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {w.cefr_level}
                  </span>
                </div>
                <div className="text-sm font-bold text-blue-700 mt-0.5">{w.translation_uz}</div>
                <p className="text-xs text-slate-600 mt-0.5">{w.definition}</p>
                <p className="text-xs text-slate-400 italic mt-0.5">"{w.example}"</p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => speakWord(w.word)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition"
                  title="Audio talaffuz"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Add Word */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Lug'atga yangi so'z kiritish"
      >
        <form onSubmit={handleAddWord} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Inglizcha so'z</label>
            <input
              type="text"
              required
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Masalan: Ubiquitous"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">So'z turkumi</label>
              <select
                value={partOfSpeech}
                onChange={(e) => setPartOfSpeech(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="noun">Ot (noun)</option>
                <option value="verb">Fe'l (verb)</option>
                <option value="adjective">Sifat (adjective)</option>
                <option value="adverb">Ravish (adverb)</option>
                <option value="idiom">Idiom / Phrase</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">CEFR Darajasi</label>
              <select
                value={cefrLevel}
                onChange={(e) => setCefrLevel(e.target.value as CEFRLevel)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">O'zbekcha tarjimasi</label>
            <input
              type="text"
              required
              value={translationUz}
              onChange={(e) => setTranslationUz(e.target.value)}
              placeholder="Masalan: Hamma joyda uchraydigan, keng tarqalgan"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Inglizcha ta'rifi (Definition)</label>
            <input
              type="text"
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              placeholder="Present, appearing, or found everywhere"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Namunaviy gap (Example sentence)</label>
            <textarea
              rows={2}
              value={example}
              onChange={(e) => setExample(e.target.value)}
              placeholder="Smartphones have become ubiquitous across Tashkent modern society."
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition"
            >
              So'zni saqlash
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
