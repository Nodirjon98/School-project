import { describe, expect, it } from 'vitest';
import { ConductEvent, HEARTS_START, heartsFor } from '../conduct';

const ev = (delta: number, at: string, student_id = 's1'): ConductEvent =>
  ({ id: at, student_id, delta, reason: 'x', created_by_name: null, created_at: at });

describe('heartsFor', () => {
  it('starts at the default balance', () => {
    expect(heartsFor([], 's1')).toBe(HEARTS_START);
  });
  it('clamps at zero in chronological order so later rewards count', () => {
    const events = [ev(2, '2026-10-03'), ev(-15, '2026-10-01'), ev(-1, '2026-10-02', 'other')];
    expect(heartsFor(events, 's1')).toBe(2);
  });
});
