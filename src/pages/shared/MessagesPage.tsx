import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Loader2, MessageSquare, Plus, Search, Send } from 'lucide-react';
import { useInbox } from '../../contexts/InboxContext';
import { Contact, loadContacts, sendMessage } from '../../lib/messages';
import { formatUzDateTime } from '../../lib/uzDate';

const ROLE_LABEL: Record<string, string> = { admin: 'Administrator', teacher: "O'qituvchi", student: "O'quvchi" };

const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join('') || '?';

/** Direct messages between students and staff (ported from premier-school). */
export const MessagesPage: React.FC = () => {
  const { me, conversations, markRead, addSent } = useInbox();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [picking, setPicking] = useState(false);
  const [query, setQuery] = useState('');
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadContacts().then(c => { setContacts(c); setLoadingContacts(false); });
  }, []);

  const contactById = useMemo(() => new Map(contacts.map(c => [c.id, c])), [contacts]);
  const nameOf = (id: string) => contactById.get(id)?.full_name || 'Foydalanuvchi';

  const active = conversations.find(c => c.otherId === activeId);
  const activeUnread = active?.unread ?? 0;

  useEffect(() => {
    if (activeId && activeUnread > 0) markRead(activeId);
  }, [activeId, activeUnread, markRead]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end' });
  }, [activeId, active?.messages.length]);

  const q = query.trim().toLowerCase();
  const pickList = contacts.filter(c => !q || c.full_name.toLowerCase().includes(q) || (c.group_name || '').toLowerCase().includes(q));
  const threadList = conversations.filter(c => !q || nameOf(c.otherId).toLowerCase().includes(q));

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeId || !draft.trim() || sending) return;
    setSending(true);
    const { message, error: err } = await sendMessage(activeId, draft);
    setSending(false);
    if (err) return setError(err);
    setError(null);
    setDraft('');
    if (message) addSent(message);
  };

  const open = (id: string) => {
    setActiveId(id);
    setPicking(false);
    setQuery('');
    setError(null);
  };

  return (
    <div className="flex h-[calc(100vh-9rem)] min-h-[480px] overflow-hidden rounded-3xl border border-slate-200/70 bg-white">
      {/* List */}
      <aside className={`${activeId ? 'hidden md:flex' : 'flex'} w-full md:w-80 shrink-0 flex-col border-r border-slate-100`}>
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 p-4">
          <h1 className="flex items-center gap-2 text-lg font-extrabold text-slate-900"><MessageSquare className="h-5 w-5 text-indigo-600" /> Xabarlar</h1>
          <button type="button" onClick={() => { setPicking(p => !p); setQuery(''); }}
            className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800 cursor-pointer">
            <Plus className="h-3.5 w-3.5" /> Yangi
          </button>
        </div>
        <label className="relative m-3 block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder={picking ? 'Kimga yozasiz?' : 'Suhbatlarni qidirish'}
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </label>
        <ul className="flex-1 overflow-y-auto">
          {picking ? (
            loadingContacts ? <li className="p-6 text-center text-sm text-slate-500"><Loader2 className="mx-auto h-4 w-4 animate-spin" /></li>
            : pickList.length === 0 ? <li className="p-6 text-center text-sm text-slate-500">Hech kim topilmadi.</li>
            : pickList.map(c => (
              <li key={c.id}>
                <button type="button" onClick={() => open(c.id)} className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-slate-50 cursor-pointer">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">{initials(c.full_name)}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-slate-900">{c.full_name}</span>
                    <span className="block truncate text-xs text-slate-500">{ROLE_LABEL[c.role] || c.role}{c.group_name ? ` · ${c.group_name}` : ''}</span>
                  </span>
                </button>
              </li>
            ))
          ) : threadList.length === 0 ? (
            <li className="p-6 text-center text-sm text-slate-500">
              Hali suhbat yo'q. <button type="button" onClick={() => setPicking(true)} className="font-semibold text-indigo-600 cursor-pointer">Yangi xabar yozing</button>.
            </li>
          ) : threadList.map(c => {
            const last = c.messages[c.messages.length - 1];
            return (
              <li key={c.otherId}>
                <button type="button" onClick={() => open(c.otherId)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition cursor-pointer ${activeId === c.otherId ? 'bg-indigo-50/60' : 'hover:bg-slate-50'}`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">{initials(nameOf(c.otherId))}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className={`truncate text-sm ${c.unread ? 'font-extrabold text-slate-900' : 'font-semibold text-slate-800'}`}>{nameOf(c.otherId)}</span>
                      {c.unread > 0 && <span className="rounded-full bg-fuchsia-500 px-1.5 py-0.5 text-[10px] font-bold text-white">{c.unread}</span>}
                    </span>
                    <span className="block truncate text-xs text-slate-500">{last.from_id === me ? 'Siz: ' : ''}{last.body}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Thread */}
      <section className={`${activeId ? 'flex' : 'hidden md:flex'} min-w-0 flex-1 flex-col`}>
        {!activeId ? (
          <div className="m-auto max-w-xs p-6 text-center text-sm text-slate-500">
            <MessageSquare className="mx-auto mb-3 h-10 w-10 text-slate-300" />
            Suhbatni tanlang yoki "Yangi" tugmasi orqali xabar yozing.
          </div>
        ) : (
          <>
            <header className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
              <button type="button" onClick={() => setActiveId(null)} className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 md:hidden" aria-label="Orqaga">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">{nameOf(activeId)}</p>
                <p className="truncate text-xs text-slate-500">{ROLE_LABEL[contactById.get(activeId)?.role || ''] || ''}</p>
              </div>
            </header>
            <div className="flex-1 space-y-2 overflow-y-auto bg-slate-50/60 p-4">
              {(active?.messages || []).map(m => {
                const mine = m.from_id === me;
                return (
                  <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm shadow-xs ${mine ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800 border border-slate-200/70'}`}>
                      <p className="whitespace-pre-wrap break-words">{m.body}</p>
                      <p className={`mt-1 text-[10px] ${mine ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {formatUzDateTime(m.created_at)}{mine && m.read_at ? ' · o\'qildi' : ''}
                      </p>
                    </div>
                  </div>
                );
              })}
              {!active && <p className="pt-10 text-center text-sm text-slate-400">Birinchi xabarni yozing.</p>}
              <div ref={bottomRef} />
            </div>
            <form onSubmit={send} className="border-t border-slate-100 p-3">
              {error && <p className="mb-2 text-xs font-medium text-rose-600">{error}</p>}
              <div className="flex items-end gap-2">
                <textarea
                  value={draft}
                  onChange={e => setDraft(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(e); } }}
                  rows={1}
                  maxLength={2000}
                  placeholder="Xabar yozing…"
                  className="max-h-32 flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <button type="submit" disabled={sending || !draft.trim()} aria-label="Yuborish"
                  className="rounded-full bg-indigo-600 p-3 text-white transition hover:bg-indigo-700 disabled:opacity-50 cursor-pointer">
                  {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  );
};
