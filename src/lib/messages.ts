import { supabase, isSupabaseConfigured } from './supabase';

export interface Message {
  id: string;
  from_id: string;
  to_id: string;
  body: string;
  read_at: string | null;
  created_at: string;
}

export interface Contact {
  id: string;
  full_name: string;
  role: 'admin' | 'teacher' | 'student' | string;
  group_name: string | null;
}

export interface Conversation {
  otherId: string;
  /** Oldest first, ready to render as a thread. */
  messages: Message[];
  unread: number;
  lastAt: string;
}

/** Groups a flat message list into threads for `me`, newest thread first. */
export function groupConversations(messages: Message[], me: string): Conversation[] {
  const byOther = new Map<string, Conversation>();
  for (const m of messages) {
    const otherId = m.from_id === me ? m.to_id : m.from_id;
    if (!otherId || otherId === me) continue;
    let conv = byOther.get(otherId);
    if (!conv) {
      conv = { otherId, messages: [], unread: 0, lastAt: m.created_at };
      byOther.set(otherId, conv);
    }
    conv.messages.push(m);
    if (m.to_id === me && !m.read_at) conv.unread += 1;
    if (m.created_at > conv.lastAt) conv.lastAt = m.created_at;
  }
  const convs = Array.from(byOther.values());
  convs.forEach(c => c.messages.sort((a, b) => a.created_at.localeCompare(b.created_at)));
  return convs.sort((a, b) => b.lastAt.localeCompare(a.lastAt));
}

export async function loadMessages(me: string): Promise<Message[]> {
  if (!isSupabaseConfigured || !supabase || !me) return [];
  const { data, error } = await supabase
    .from('messages')
    .select('id, from_id, to_id, body, read_at, created_at')
    .or(`from_id.eq.${me},to_id.eq.${me}`)
    .order('created_at', { ascending: false })
    .limit(500);
  if (error) {
    console.warn('messages load:', error.message);
    return [];
  }
  return data as Message[];
}

export async function loadContacts(): Promise<Contact[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase.rpc('message_contacts');
  if (error) {
    console.warn('message_contacts:', error.message);
    return [];
  }
  return (data || []) as Contact[];
}

export async function sendMessage(toId: string, body: string): Promise<{ message?: Message; error?: string }> {
  if (!supabase) return { error: "Bazaga ulanib bo'lmadi" };
  const text = body.trim();
  if (!text) return { error: 'Xabar bo\'sh' };
  const { data, error } = await supabase
    .from('messages')
    .insert({ to_id: toId, body: text.slice(0, 2000) })
    .select('id, from_id, to_id, body, read_at, created_at')
    .single();
  if (error) return { error: /row-level security/i.test(error.message) ? "Bu foydalanuvchiga xabar yuborib bo'lmaydi" : error.message };
  return { message: data as Message };
}

export async function markThreadRead(me: string, otherId: string): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase
    .from('messages')
    .update({ read_at: new Date().toISOString() })
    .eq('to_id', me)
    .eq('from_id', otherId)
    .is('read_at', null);
  if (error) console.warn('messages read:', error.message);
}
