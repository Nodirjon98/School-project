import { describe, expect, it } from 'vitest';
import { normalizePhone } from '../leads';

describe('normalizePhone', () => {
  it('accepts common Uzbek formats', () => {
    expect(normalizePhone(' +998  90 123-45-67 ')).toBe('+998 90 123-45-67');
    expect(normalizePhone('(90) 1234567')).toBe('(90) 1234567');
  });
  it('rejects junk', () => {
    expect(normalizePhone('+998 ')).toBeNull();
    expect(normalizePhone('call me 901234567')).toBeNull();
    expect(normalizePhone('1234567890123456')).toBeNull();
  });
});
