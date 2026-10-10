import { describe, expect, it } from 'vitest';
import { parseStudentLines } from '../AddStudentsDialog';

describe('parseStudentLines', () => {
  it('reads name, email, phone and password in any order', () => {
    const { rows, bad } = parseStudentLines('Ali Valiyev, ali@mail.uz, +998 90 123 45 67, secret12\nvali@mail.uz;Vali Aliyev');
    expect(bad).toEqual([]);
    expect(rows).toEqual([
      { full_name: 'Ali Valiyev', email: 'ali@mail.uz', phone: '+998 90 123 45 67', password: 'secret12' },
      { full_name: 'Vali Aliyev', email: 'vali@mail.uz', phone: undefined, password: undefined },
    ]);
  });
  it('flags lines without an email or a name', () => {
    expect(parseStudentLines('Ali Valiyev\n+998901234567, x@y.uz').bad).toEqual(['Ali Valiyev', '+998901234567, x@y.uz']);
  });
});
