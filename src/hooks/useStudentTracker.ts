import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLMSData } from '../contexts/LMSDataContext';
import { TelemetryModule } from '../types';

const INACTIVITY_TIMEOUT_MS = 90 * 1000; // 90 seconds threshold
const TICK_INTERVAL_MS = 10 * 1000;      // 10 seconds tick
const FLUSH_INTERVAL_MS = 20 * 1000;     // 20 seconds flush to context/storage

export function useStudentTracker() {
  const { profile, role } = useAuth();
  const { recordActiveTime, logStudentAction } = useLMSData();
  const location = useLocation();

  const lastInteractionTime = useRef<number>(Date.now());
  const isIdle = useRef<boolean>(false);
  const isTabHidden = useRef<boolean>(document.hidden);
  
  const activeAccumulator = useRef<number>(0);
  const idleAccumulator = useRef<number>(0);

  // Map route to academic module
  const getModuleFromPath = useCallback((pathname: string): TelemetryModule => {
    if (pathname.includes('/stories')) return 'stories';
    if (pathname.includes('/daily-words') || pathname.includes('/vocab')) return 'vocab';
    if (pathname.includes('/listening') || pathname.includes('/tactics')) return 'listening';
    if (pathname.includes('/grammar') || pathname.includes('/essential-grammar')) return 'grammar';
    if (pathname.includes('/homework')) return 'homework';
    if (pathname.includes('/speaking') || pathname.includes('/ielts-writing')) return 'speaking';
    return 'system';
  }, []);

  const currentModuleRef = useRef<TelemetryModule>(getModuleFromPath(location.pathname));
  currentModuleRef.current = getModuleFromPath(location.pathname);

  const studentId = profile?.id;
  const isStudent = role === 'student' && !!studentId;

  // Flush accumulated time to LMS state
  const flushTime = useCallback(() => {
    if (!studentId || !isStudent) return;
    const activeSec = activeAccumulator.current;
    const idleSec = idleAccumulator.current;

    if (activeSec > 0 || idleSec > 0) {
      recordActiveTime(
        studentId, 
        currentModuleRef.current, 
        activeSec, 
        idleSec, 
        location.pathname
      );
      activeAccumulator.current = 0;
      idleAccumulator.current = 0;
    }
  }, [studentId, isStudent, recordActiveTime, location.pathname]);

  // Immediate initial heartbeat when student opens app
  useEffect(() => {
    if (!studentId || !isStudent) return;
    const isMobile = typeof navigator !== 'undefined' && /android|iphone|ipad|mobile/i.test(navigator.userAgent);
    fetch('/api/telemetry/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        student_id: studentId,
        student_name: profile?.full_name,
        module: currentModuleRef.current,
        active_seconds: 1,
        idle_seconds: 0,
        current_page: location.pathname,
        is_idle: false,
        device: isMobile ? 'mobile' : 'desktop'
      })
    }).catch(() => {});
  }, [studentId, isStudent]);

  // Handle interaction events (tap, click, keypress, scroll)
  const handleUserActivity = useCallback(() => {
    const now = Date.now();
    lastInteractionTime.current = now;

    if (isIdle.current) {
      isIdle.current = false;
      if (studentId && isStudent) {
        logStudentAction({
          student_id: studentId,
          student_name: profile?.full_name || "O'quvchi",
          action_type: 'RESUME_ACTIVE',
          module: currentModuleRef.current,
          details: {
            title: "Darsga qaytdi",
            extra_info: "Harakatsizlikdan so'ng faoliyat tiklandi"
          }
        });
      }
    }
  }, [studentId, isStudent, logStudentAction, profile?.full_name]);

  // Setup interaction listeners
  useEffect(() => {
    if (!isStudent) return;

    const events = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'scroll'];
    let throttleTimeout: NodeJS.Timeout | null = null;

    const throttledHandler = () => {
      if (!throttleTimeout) {
        handleUserActivity();
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
        }, 3000); // Check at most every 3s
      }
    };

    events.forEach(ev => window.addEventListener(ev, throttledHandler, { passive: true }));

    // Visibility / Tab switching listeners
    const handleVisibilityChange = () => {
      isTabHidden.current = document.hidden;
      if (document.hidden) {
        // Immediately flush time when tab is hidden or phone is locked
        flushTime();
      } else {
        lastInteractionTime.current = Date.now();
      }
    };

    const handleWindowBlur = () => {
      isTabHidden.current = true;
      flushTime();
    };

    const handleWindowFocus = () => {
      isTabHidden.current = false;
      lastInteractionTime.current = Date.now();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      events.forEach(ev => window.removeEventListener(ev, throttledHandler));
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [isStudent, handleUserActivity, flushTime]);

  // Main 10-second ticker loop
  useEffect(() => {
    if (!isStudent) return;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsedSinceInteraction = now - lastInteractionTime.current;
      const isCurrentlyIdle = isTabHidden.current || elapsedSinceInteraction >= INACTIVITY_TIMEOUT_MS;

      if (isCurrentlyIdle) {
        // Accumulate idle time (anti-cheat detection)
        idleAccumulator.current += TICK_INTERVAL_MS / 1000;

        if (!isIdle.current) {
          isIdle.current = true;
          if (studentId) {
            logStudentAction({
              student_id: studentId,
              student_name: profile?.full_name || "O'quvchi",
              action_type: 'IDLE_PAUSE',
              module: currentModuleRef.current,
              details: {
                title: "Avto-Pauza (Harakatsiz)",
                extra_info: isTabHidden.current 
                  ? "Ekranni qoraytirgan yoki boshqa ilovaga o'tgan" 
                  : "90 soniya ekranga teginilmagani sababli to'xtatildi"
              }
            });
          }
        }
      } else {
        // Accumulate active study time
        activeAccumulator.current += TICK_INTERVAL_MS / 1000;
      }
    }, TICK_INTERVAL_MS);

    // Periodic flush
    const flushTimer = setInterval(() => {
      flushTime();
    }, FLUSH_INTERVAL_MS);

    return () => {
      clearInterval(timer);
      clearInterval(flushTimer);
      flushTime();
    };
  }, [isStudent, studentId, logStudentAction, profile?.full_name, flushTime]);

  // Flush when route changes
  useEffect(() => {
    if (isStudent) {
      flushTime();
      if (studentId) {
        logStudentAction({
          student_id: studentId,
          student_name: profile?.full_name || "O'quvchi",
          action_type: 'PAGE_VIEW',
          module: getModuleFromPath(location.pathname),
          details: {
            title: `Sahifa ochildi: ${location.pathname}`
          }
        });
      }
    }
  }, [location.pathname, isStudent, studentId, flushTime, logStudentAction, profile?.full_name, getModuleFromPath]);

  return {
    isIdle: isIdle.current,
    currentModule: currentModuleRef.current
  };
}
