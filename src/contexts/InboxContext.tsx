import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';
import { Conversation, Message, groupConversations, loadMessages, markThreadRead } from '../lib/messages';
import { countNewLeads } from '../lib/leads';

interface InboxContextType {
  me: string | null;
  conversations: Conversation[];
  unreadTotal: number;
  newLeads: number;
  reload: () => Promise<void>;
  addSent: (m: Message) => void;
  markRead: (otherId: string) => Promise<void>;
}

const InboxContext = createContext<InboxContextType | undefined>(undefined);

/** Messages and new-lead counts with live updates, shared by the sidebar and pages. */
export const InboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, role } = useAuth();
  const me: string | null = user?.id ?? null;
  const isStaff = role === 'admin' || role === 'teacher';
  const [messages, setMessages] = useState<Message[]>([]);
  const [newLeads, setNewLeads] = useState(0);

  const reload = useCallback(async () => {
    if (!me) return setMessages([]);
    setMessages(await loadMessages(me));
  }, [me]);

  const reloadLeads = useCallback(async () => {
    setNewLeads(isStaff ? await countNewLeads() : 0);
  }, [isStaff]);

  useEffect(() => {
    reload();
    reloadLeads();
    if (!supabase || !me) return;
    const client = supabase;
    let channel = client
      .channel(`inbox-${me}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages', filter: `to_id=eq.${me}` }, () => reload())
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `from_id=eq.${me}` }, () => reload());
    if (isStaff) channel = channel.on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, () => reloadLeads());
    channel.subscribe();
    // Realtime can drop silently; a slow poll keeps badges honest.
    const timer = window.setInterval(() => { reload(); reloadLeads(); }, 60_000);
    return () => {
      window.clearInterval(timer);
      client.removeChannel(channel);
    };
  }, [me, isStaff, reload, reloadLeads]);

  const conversations = useMemo(() => (me ? groupConversations(messages, me) : []), [messages, me]);
  const unreadTotal = conversations.reduce((a, c) => a + c.unread, 0);

  const addSent = useCallback((m: Message) => {
    setMessages(prev => (prev.some(p => p.id === m.id) ? prev : [m, ...prev]));
  }, []);

  const markRead = useCallback(async (otherId: string) => {
    if (!me) return;
    const now = new Date().toISOString();
    setMessages(prev => prev.map(m => (m.from_id === otherId && m.to_id === me && !m.read_at ? { ...m, read_at: now } : m)));
    await markThreadRead(me, otherId);
  }, [me]);

  return (
    <InboxContext.Provider value={{ me, conversations, unreadTotal, newLeads, reload, addSent, markRead }}>
      {children}
    </InboxContext.Provider>
  );
};

export function useInbox() {
  const ctx = useContext(InboxContext);
  if (!ctx) throw new Error('useInbox must be used inside InboxProvider');
  return ctx;
}
