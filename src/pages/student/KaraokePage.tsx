import React, { useState } from 'react';
import { KARAOKE_SONGS } from '../../data/karaokeSongsData';
import { KaraokeSong, CEFRLevel } from '../../types';
import { KaraokePlayer } from '../../components/karaoke/KaraokePlayer';
import { Music, Play, Sparkles, Filter, ChevronLeft, Award, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';

export const KaraokePage: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<KaraokeSong | null>(null);
  const [filterLevel, setFilterLevel] = useState<'ALL' | 'Beginner' | 'Intermediate' | 'Advanced'>('ALL');

  const filteredSongs = KARAOKE_SONGS.filter(s => {
    if (filterLevel === 'ALL') return true;
    return s.difficulty === filterLevel;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white py-10 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-6xl mx-auto">
          {selectedSong ? (
            <button
              id="back-to-songs-list-btn"
              onClick={() => setSelectedSong(null)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors mb-4 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Barcha qo'shiqlarga qaytish</span>
            </button>
          ) : null}

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Music className="w-3.5 h-3.5 text-indigo-300" />
                <span>Karaoke & Lyrics Gap-Fill Hub</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                {selectedSong ? selectedSong.title : 'Qo\'shiqlar bilan Listening & Karaoke'}
              </h1>
              <p className="text-indigo-200 text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
                {selectedSong
                  ? `${selectedSong.artist} ijrosidagi taronani tinglang va tushirib qoldirilgan 1 ta so'zni aniqlang.`
                  : "Odob-axloq mezonlariga mos jahon xitlari orqali tabiiy talaffuz va boy so'z boyligini rivojlantiring."}
              </p>
            </div>

            {/* Ethic & Education Badge */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
              <div>
                <div className="text-xs font-bold text-white">100% Ta'limiy & Clean</div>
                <div className="text-[11px] text-indigo-200">Axloqiy va oilaviy mezonlarga mos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {selectedSong ? (
          /* Active Karaoke View */
          <div className="animate-fade-in">
            <KaraokePlayer song={selectedSong} />
          </div>
        ) : (
          /* Songs Catalog View */
          <div className="space-y-6">
            {/* Level Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500 ml-1" />
                <span className="text-xs font-bold text-slate-600">Darajalar:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {(['ALL', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    id={`filter-karaoke-${lvl}`}
                    onClick={() => setFilterLevel(lvl)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      filterLevel === lvl
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {lvl === 'ALL'
                      ? 'Barchasi'
                      : lvl === 'Beginner'
                      ? '🟢 Beginner (A1-A2)'
                      : lvl === 'Intermediate'
                      ? '🟡 Intermediate (B1)'
                      : '🔴 Advanced (B2)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Songs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSongs.map((song) => (
                <div
                  key={song.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-1"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={song.coverImage}
                      alt={song.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-extrabold rounded-lg bg-indigo-600 text-white shadow-sm uppercase tracking-wider">
                        {song.level}
                      </span>
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {song.difficulty}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-black tracking-tight leading-snug drop-shadow-sm">
                        {song.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-200">{song.artist}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5 font-medium text-slate-700">
                        <HeartHandshake className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                        <span className="line-clamp-1">{song.theme}</span>
                      </div>
                      <p className="text-slate-500 line-clamp-2 leading-relaxed">
                        {song.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          <span>{song.lines.length} ta gap-fill so'z</span>
                        </div>
                        <div className="text-[11px] text-indigo-600 font-medium">
                          +{song.quizQuestions?.length || 6} ta test & tahlil
                        </div>
                      </div>

                      <button
                        id={`play-karaoke-song-${song.id}`}
                        onClick={() => setSelectedSong(song)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Boshlash</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
