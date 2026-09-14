import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, CheckCircle2, Clock, BookOpen, 
  ClipboardCheck, Award, AlertTriangle, X, Check, ArrowRight
} from 'lucide-react';
import { RealtimeEventPayload } from '../../types';
import { realtime } from '../../lib/realtime';

export const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState<RealtimeEventPayload[]>(() => realtime.getNotifications());
  const [isOpen, setIsOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<RealtimeEventPayload | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subscribe to live events
    const unsubscribe = realtime.subscribe((event) => {
      setNotifications(realtime.getNotifications());
      setActiveToast(event);

      // Auto dismiss toast after 5s
      const timer = setTimeout(() => {
        setActiveToast(prev => prev?.id === event.id ? null : prev);
      }, 5000);

      return () => clearTimeout(timer);
    });

    return () => unsubscribe();
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    realtime.markAsRead(id);
    setNotifications(realtime.getNotifications());
  };

  const handleMarkAllAsRead = () => {
    realtime.markAllAsRead();
    setNotifications(realtime.getNotifications());
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'LESSON_COMPLETED':
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'ATTENDANCE_MARKED':
        return <ClipboardCheck className="w-4 h-4 text-emerald-600" />;
      case 'HOMEWORK_SUBMITTED':
        return <Clock className="w-4 h-4 text-purple-600" />;
      case 'HOMEWORK_GRADED':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      case 'DEADLINE_ALERT':
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case 'XP_AWARDED':
        return <Award className="w-4 h-4 text-amber-500" />;
      default:
        return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  const formatRelativeTime = (timestamp: string) => {
    try {
      const diff = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
      if (diff < 60) return 'Just now';
      if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
      if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
      return `${Math.floor(diff / 86400)}d ago`;
    } catch {
      return 'Recently';
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Bell Button */}
      <button
        type="button"
        id="realtime-notification-bell-btn"
        onClick={() => setIsOpen(prev => !prev)}
        className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition cursor-pointer"
        aria-label="Real-time notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-xs animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Floating Live Toast Popup */}
      {activeToast && (
        <div 
          className="fixed top-20 right-4 sm:right-8 z-50 max-w-sm w-full bg-white border border-slate-200/90 shadow-xl rounded-2xl p-4 flex items-start gap-3 transition-all transform translate-y-0"
          role="alert"
        >
          <div className="p-2 bg-blue-50 border border-blue-100 rounded-xl shrink-0 mt-0.5">
            {getEventIcon(activeToast.type)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                Live Update
              </span>
              <button 
                onClick={() => setActiveToast(null)}
                className="text-slate-400 hover:text-slate-600 p-0.5 rounded"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <h4 className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">{activeToast.title}</h4>
            <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">{activeToast.message}</p>
          </div>
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200/90 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-full">
                  {unreadCount} new
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={handleMarkAllAsRead}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer flex items-center gap-1"
              >
                <Check className="w-3 h-3" />
                Mark all read
              </button>
            )}
          </div>

          {/* List of events */}
          <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-30" />
                No real-time notifications yet.
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => handleMarkAsRead(notif.id)}
                  className={`p-3.5 flex items-start gap-3 hover:bg-slate-50 transition cursor-pointer ${
                    !notif.read ? 'bg-blue-50/40' : ''
                  }`}
                >
                  <div className="p-2 rounded-xl bg-slate-100 shrink-0 mt-0.5">
                    {getEventIcon(notif.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className={`text-xs font-bold leading-tight line-clamp-1 ${!notif.read ? 'text-slate-900' : 'text-slate-700'}`}>
                        {notif.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 whitespace-nowrap">
                        {formatRelativeTime(notif.timestamp)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {notif.message}
                    </p>
                  </div>
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center">
            <span className="text-[10px] text-slate-400 font-medium">
              Live updates pushed via Premier Real-time engine
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
