// Premier School LMS Real-Time Event & Subscription Manager
// Powers instant push updates for lesson completion, attendance marking,
// homework submissions, grades, deadlines, and live notification alerts.

import { RealtimeEventPayload, RealtimeEventType } from '../types';
import { getStorageItem, setStorageItem } from './storage';
import { playSound } from './sound';

type EventCallback = (event: RealtimeEventPayload) => void;

class RealtimeManager {
  private listeners: Set<EventCallback> = new Set();
  private broadcastChannel: BroadcastChannel | null = null;
  private eventSource: EventSource | null = null;
  private isConnected = false;
  private reconnectTimer: any = null;
  private currentUserId?: string;
  private currentUserRole?: string;

  constructor() {
    this.initBroadcastChannel();
    this.connectSSE();
  }

  public setUserContext(userId?: string, role?: string) {
    this.currentUserId = userId;
    this.currentUserRole = role;
  }

  private initBroadcastChannel() {
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        this.broadcastChannel = new BroadcastChannel('premier_lms_realtime');
        this.broadcastChannel.onmessage = (messageEvent) => {
          if (messageEvent.data && messageEvent.data.type) {
            this.handleIncomingEvent(messageEvent.data, false);
          }
        };
      }
    } catch (e) {
      console.warn('[Realtime] BroadcastChannel unavailable, falling back to SSE:', e);
    }
  }

  public connectSSE() {
    if (typeof window === 'undefined') return;
    if (this.eventSource) {
      this.eventSource.close();
    }

    try {
      const url = new URL('/api/realtime/stream', window.location.origin);
      if (this.currentUserId) url.searchParams.set('userId', this.currentUserId);
      if (this.currentUserRole) url.searchParams.set('role', this.currentUserRole);

      this.eventSource = new EventSource(url.toString());

      this.eventSource.onopen = () => {
        this.isConnected = true;
      };

      this.eventSource.addEventListener('lms_event', (e: MessageEvent) => {
        try {
          const payload = JSON.parse(e.data) as RealtimeEventPayload;
          this.handleIncomingEvent(payload, true);
        } catch (err) {
          console.error('[Realtime] Error parsing event data:', err);
        }
      });

      this.eventSource.onerror = () => {
        this.isConnected = false;
        if (this.eventSource) {
          this.eventSource.close();
          this.eventSource = null;
        }
        // Auto reconnect with exponential backoff
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = setTimeout(() => {
          this.connectSSE();
        }, 5000);
      };
    } catch (err) {
      console.warn('[Realtime] Failed to initialize SSE, relying on BroadcastChannel:', err);
    }
  }

  private handleIncomingEvent(event: RealtimeEventPayload, fromSSE: boolean) {
    // Avoid duplicate processing if event was already stored recently
    const existing = this.getNotifications();
    if (existing.some(e => e.id === event.id)) {
      return;
    }

    // Store notification in storage
    const updated = [event, ...existing].slice(0, 30);
    setStorageItem('premier_notifications', updated);

    // Play subtle sound effect
    try {
      if (event.type === 'XP_AWARDED' || event.type === 'LESSON_COMPLETED') {
        playSound('levelup');
      } else if (event.type === 'DEADLINE_ALERT') {
        playSound('wrong');
      } else {
        playSound('correct');
      }
    } catch {
      // Audio autoplay policy fallback
    }

    // Broadcast to inter-tab channel if this came from SSE
    if (fromSSE && this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(event);
      } catch {
        // Channel closed
      }
    }

    // Notify registered listeners
    for (const listener of this.listeners) {
      try {
        listener(event);
      } catch (e) {
        console.error('[Realtime] Listener callback error:', e);
      }
    }
  }

  public subscribe(callback: EventCallback): () => void {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  public async publish(event: Omit<RealtimeEventPayload, 'id' | 'timestamp'>): Promise<RealtimeEventPayload> {
    const fullEvent: RealtimeEventPayload = {
      ...event,
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      read: false,
    };

    // Broadcast across tabs immediately
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(fullEvent);
      } catch (e) {
        console.warn('[Realtime] Failed to post to BroadcastChannel:', e);
      }
    }

    // Process locally immediately (optimistic UI)
    this.handleIncomingEvent(fullEvent, false);

    // Send to backend server to broadcast to all other connected clients
    try {
      await fetch('/api/realtime/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: fullEvent }),
      });
    } catch (err) {
      console.warn('[Realtime] Could not push to server broadcaster:', err);
    }

    return fullEvent;
  }

  public getNotifications(): RealtimeEventPayload[] {
    return getStorageItem<RealtimeEventPayload[]>('premier_notifications', [
      {
        id: 'init-notif-1',
        type: 'NEW_HOMEWORK',
        title: 'New Assignment Assigned',
        message: 'Malika Karimova assigned "IELTS Writing Task 2 - Essay on Technology".',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        read: false,
      },
      {
        id: 'init-notif-2',
        type: 'DEADLINE_ALERT',
        title: 'Upcoming Deadline Reminder',
        message: '"Conditionals in Context" homework is due in 8 hours.',
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        read: true,
      }
    ]);
  }

  public markAsRead(id: string) {
    const notifs = this.getNotifications();
    const updated = notifs.map(n => n.id === id ? { ...n, read: true } : n);
    setStorageItem('premier_notifications', updated);
  }

  public markAllAsRead() {
    const notifs = this.getNotifications();
    const updated = notifs.map(n => ({ ...n, read: true }));
    setStorageItem('premier_notifications', updated);
  }

  public clearAll() {
    setStorageItem('premier_notifications', []);
  }
}

export const realtime = new RealtimeManager();
