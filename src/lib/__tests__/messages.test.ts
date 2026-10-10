import { describe, expect, it } from 'vitest';
import { groupConversations, Message } from '../messages';

const msg = (id: string, from: string, to: string, at: string, read = false): Message =>
  ({ id, from_id: from, to_id: to, body: id, read_at: read ? at : null, created_at: at });

describe('groupConversations', () => {
  it('groups by the other person, counts unread, sorts newest thread first', () => {
    const convs = groupConversations([
      msg('3', 'me', 'b', '2026-10-10T10:00:00Z'),
      msg('2', 'a', 'me', '2026-10-09T10:00:00Z'),
      msg('1', 'a', 'me', '2026-10-08T10:00:00Z', true),
      msg('0', 'b', 'me', '2026-10-07T10:00:00Z'),
    ], 'me');
    expect(convs.map(c => c.otherId)).toEqual(['b', 'a']);
    expect(convs[0].messages.map(m => m.id)).toEqual(['0', '3']);
    expect(convs.map(c => c.unread)).toEqual([1, 1]);
  });

  it("doesn't count my own messages as unread", () => {
    expect(groupConversations([msg('1', 'me', 'a', '2026-10-10T10:00:00Z')], 'me')[0].unread).toBe(0);
  });
});
