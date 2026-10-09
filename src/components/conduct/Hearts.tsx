import React from 'react';
import { Heart } from 'lucide-react';
import { HEARTS_MAX } from '../../lib/conduct';

/** A row of hearts: filled up to `count`, capped at HEARTS_MAX, with the number for screen readers. */
export const Hearts: React.FC<{ count: number; size?: 'sm' | 'md'; max?: number }> = ({ count, size = 'sm', max = 10 }) => {
  const shown = Math.min(Math.max(count, max), HEARTS_MAX);
  const px = size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5';
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${count} ta yurakcha`} title={`${count} ta yurakcha`}>
      <span className="inline-flex flex-wrap gap-0.5" aria-hidden="true">
        {Array.from({ length: shown }, (_, i) => (
          <Heart key={i} className={`${px} ${i < count ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`} />
        ))}
      </span>
      <span className={`font-bold tabular-nums ${size === 'sm' ? 'text-xs' : 'text-sm'} ${count <= 3 ? 'text-rose-600' : 'text-slate-700'}`}>{count}</span>
    </span>
  );
};
