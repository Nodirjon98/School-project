import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ConductEvent, HEARTS_START, heartsFor, loadConductEvents } from '../../lib/conduct';
import { realtime } from '../../lib/realtime';
import { getStorageItem, setStorageItem } from '../../lib/storage';
import { Hearts } from './Hearts';

/** Student-facing conduct summary: current hearts and the latest reasons. */
export const ConductCard: React.FC = () => {
  const { profile } = useAuth();
  const [events, setEvents] = useState<ConductEvent[] | null>(null);

  useEffect(() => {
    if (!profile?.id) return;
    loadConductEvents().then(all => {
      const mine = all.filter(e => e.student_id === profile.id);
      setEvents(mine);
      // Tell the student about changes made since their last visit.
      const seenKey = `premier_conduct_seen_${profile.id}`;
      const seen = new Set(getStorageItem<string[]>(seenKey, []));
      mine.filter(e => !seen.has(e.id)).slice(0, 5).reverse().forEach(e => {
        realtime.notifyLocal({
          id: `conduct-${e.id}`,
          type: 'XP_AWARDED',
          title: e.delta > 0 ? `+${e.delta} yurakcha` : `${e.delta} yurakcha`,
          message: e.reason,
          timestamp: e.created_at,
          read: false,
        });
      });
      setStorageItem(seenKey, mine.map(e => e.id));
    });
  }, [profile?.id]);

  if (!profile?.id || events === null) return null;
  const hearts = heartsFor(events, profile.id);

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> Odob va tartib
        </h3>
        <span className="text-xs text-slate-500">{HEARTS_START} dan boshlanadi</span>
      </div>
      <Hearts count={hearts} size="md" />
      <p className="mt-2 text-xs text-slate-500">
        {hearts >= HEARTS_START ? "Ajoyib! Odobingiz uchun yurakchalaringiz to'liq." : hearts <= 3 ? "Diqqat: yurakchalar kam qoldi. Tartibga rioya qiling." : "Odob va faollik uchun yurakcha qo'shiladi."}
      </p>
      {events.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {events.slice(0, 4).map(e => (
            <li key={e.id} className="flex items-center gap-2 text-xs">
              <span className={`w-8 shrink-0 font-bold ${e.delta > 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{e.delta > 0 ? '+' : ''}{e.delta}</span>
              <span className="truncate text-slate-700">{e.reason}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
