import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SEED_PROFILES } from '../lib/seedData';
import { PREMIER_OFFICIAL_STUDENTS } from '../data/premierStudentsData';
import { getStorageItem, setStorageItem, removeStorageItem } from '../lib/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Profile, UserRole, CEFRLevel } from '../types';

interface AuthContextType {
  user: any | null;
  profile: Profile | null;
  role: UserRole;
  loading: boolean;
  signIn: (email: string, password?: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, fullName: string, role?: UserRole, phone?: string, level?: CEFRLevel) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: string | null }>;
  switchDemoRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAILS = [
  'admin@premier.uz',
  'nodirjon98@gmail.com',
  'safoyevnodirjon@gmail.com'
];

export const notifyStudentLogin = (studProfile: Profile) => {
  if (studProfile.role !== 'student') return;

  const isMobile = typeof navigator !== 'undefined' && /android|iphone|ipad|mobile/i.test(navigator.userAgent);
  const nowIso = new Date().toISOString();
  const payload = {
    student_id: studProfile.id,
    student_name: studProfile.full_name,
    email: studProfile.email,
    device: isMobile ? 'mobile' : 'desktop',
    group_name: studProfile.group_name || 'Guruhga biriktirilmagan',
    group_id: studProfile.group_id,
    level: studProfile.level || 'B1',
    student_avatar: studProfile.avatar_url,
    timestamp: nowIso
  };

  // 1. Instantly update localStorage telemetry and action logs!
  try {
    const storedTelemetry = getStorageItem<Record<string, any>>('premier_student_telemetry', {});
    const existing = storedTelemetry[studProfile.id] || {
      id: `tel-${studProfile.id}`,
      student_id: studProfile.id,
      student_name: studProfile.full_name,
      student_avatar: studProfile.avatar_url,
      email: studProfile.email,
      group_name: studProfile.group_name || 'Guruhga biriktirilmagan',
      group_id: studProfile.group_id,
      phone: studProfile.phone,
      level: studProfile.level || 'B1',
      online_status: 'online',
      current_page: '/student/dashboard',
      device: isMobile ? 'mobile' : 'desktop',
      last_active_at: nowIso,
      last_active_label: 'Ayni paytda faol',
      total_active_seconds: 0,
      today_active_seconds: 0,
      weekly_active_seconds: 0,
      idle_paused_seconds: 0,
      verified_tasks_count: 0,
      module_breakdown: {
        stories_seconds: 0,
        vocab_seconds: 0,
        listening_seconds: 0,
        grammar_seconds: 0,
        homework_seconds: 0,
        speaking_seconds: 0,
        other_seconds: 0
      }
    };

    storedTelemetry[studProfile.id] = {
      ...existing,
      online_status: 'online',
      last_active_at: nowIso,
      last_active_label: 'Ayni paytda faol',
      device: isMobile ? 'mobile' : 'desktop',
      student_avatar: studProfile.avatar_url || existing.student_avatar
    };
    setStorageItem('premier_student_telemetry', storedTelemetry);

    // Also update premier_student_activities for AdminActivityAnalytics
    const storedActivities = getStorageItem<any[]>('premier_student_activities', []);
    const actIdx = storedActivities.findIndex(a => a.student_id === studProfile.id);
    if (actIdx >= 0) {
      storedActivities[actIdx] = {
        ...storedActivities[actIdx],
        status: 'online',
        last_active: 'Ayni paytda faol',
        device: isMobile ? 'mobile' : 'desktop'
      };
      setStorageItem('premier_student_activities', storedActivities);
    }

    const storedActions = getStorageItem<any[]>('premier_student_action_events', []);
    const loginAction = {
      id: `act-login-${studProfile.id}-${Date.now()}`,
      student_id: studProfile.id,
      student_name: studProfile.full_name,
      action_type: 'LOGIN',
      module: 'system',
      timestamp: nowIso,
      details: {
        title: 'Platformaga muvaffaqiyatli kirdi',
        extra_info: `Qurilma: ${isMobile ? 'Mobil telefon' : 'Kompyuter'}`
      }
    };
    setStorageItem('premier_student_action_events', [loginAction, ...storedActions.filter(x => x.id !== loginAction.id)].slice(0, 200));
  } catch {}

  // 2. Broadcast immediately via BroadcastChannel to all other browser tabs
  try {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      const bus = new BroadcastChannel('premier_lms_bus');
      bus.postMessage({ type: 'STUDENT_LOGIN', payload });
      bus.close();
    }
  } catch {}

  // 3. Send to Serverless API
  fetch('/api/telemetry/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(() => {});

  // 4. Send to Supabase Realtime broadcast and Presence channel
  if (isSupabaseConfigured && supabase) {
    try {
      const channel = supabase.channel('premier-telemetry-live', {
        config: { broadcast: { self: true, ack: true }, presence: { key: studProfile.id } }
      });
      channel.subscribe(status => {
        if (status === 'SUBSCRIBED') {
          channel.send({
            type: 'broadcast',
            event: 'student_login',
            payload
          });
          channel.track({
            student_id: studProfile.id,
            student_name: studProfile.full_name,
            role: 'student',
            device: isMobile ? 'mobile' : 'desktop',
            online_at: nowIso
          });
        }
      });
    } catch {}
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(() => {
    return getStorageItem<Profile | null>('premier_lms_profile', null);
  });
  const [user, setUser] = useState<any | null>(() => {
    const stored = getStorageItem<Profile | null>('premier_lms_profile', null);
    return stored ? { id: stored.id, email: stored.email } : null;
  });
  const [loading, setLoading] = useState<boolean>(true);

  const saveProfile = useCallback((newProfile: Profile | null) => {
    setProfile(newProfile);
    setStorageItem('premier_lms_profile', newProfile);
  }, []);

  useEffect(() => {
    const stored = getStorageItem<Profile | null>('premier_lms_profile', null);
    if (stored) {
      setProfile(stored);
      setUser({ id: stored.id, email: stored.email });
      if (stored.role === 'student') {
        notifyStudentLogin(stored);
      }
    } else {
      setProfile(null);
      setUser(null);
    }
    setLoading(false);
  }, [saveProfile]);

  const signIn = async (email: string, password?: string): Promise<{ error: string | null }> => {
    setLoading(true);
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password?.trim() || '';

    try {
      const isAdminEmail = ADMIN_EMAILS.includes(cleanEmail);

      // 1. STRICT ADMIN AUTHENTICATION
      if (isAdminEmail) {
        const validAdminPasswords = [
          'premier2026!',
          'admin2026!',
          'premier2026',
          'admin2026',
          'nodirjon2026',
          'nodirjon98',
          'safoyev2026',
          'demo12345'
        ];

        if (!cleanPass || !validAdminPasswords.includes(cleanPass)) {
          setLoading(false);
          return { error: "Xatolik: Bosh administrator paroli noto'g'ri! Admin panel faqat tizim rahbari kirishi uchun himoyalangan." };
        }

        const adminProfile = SEED_PROFILES.find(p => p.email.toLowerCase() === cleanEmail) || SEED_PROFILES[0];
        setUser({ id: adminProfile.id, email: adminProfile.email });
        saveProfile(adminProfile);
        setLoading(false);
        return { error: null };
      }

      // 2. Official premier students check
      const officialMatched = PREMIER_OFFICIAL_STUDENTS.find(p => p.email.toLowerCase() === cleanEmail);
      if (officialMatched) {
        if (officialMatched.password && cleanPass && officialMatched.password !== cleanPass) {
          setLoading(false);
          return { error: "Parol noto'g'ri kiritildi!" };
        }
        setUser({ id: officialMatched.id, email: officialMatched.email });
        saveProfile(officialMatched);
        notifyStudentLogin(officialMatched);
        setLoading(false);
        return { error: null };
      }

      // 3. Supabase profiles check
      if (isSupabaseConfigured && supabase) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('email', cleanEmail)
          .maybeSingle();

        if (data && !error && data.role !== 'admin') {
          setUser({ id: data.id, email: data.email });
          saveProfile(data as Profile);
          notifyStudentLogin(data as Profile);
          setLoading(false);
          return { error: null };
        }
      }

      // 4. Seed profiles (teachers & students)
      const matched = SEED_PROFILES.find(p => p.email.toLowerCase() === cleanEmail);
      if (matched) {
        if (matched.role === 'admin') {
          setLoading(false);
          return { error: "Admin panelga faqat rasmiy administrator paroli bilan kirish mumkin!" };
        }
        setUser({ id: matched.id, email: matched.email });
        saveProfile(matched);
        if (matched.role === 'student') {
          notifyStudentLogin(matched);
        }
        setLoading(false);
        return { error: null };
      }

      // 5. Check previously registered users stored in localStorage
      const customUsers = getStorageItem<Profile[]>('premier_registered_users', []);
      const customMatched = customUsers.find(u => u.email.toLowerCase() === cleanEmail);
      if (customMatched) {
        // Guarantee no custom user can ever be admin
        const safeProfile: Profile = { ...customMatched, role: (customMatched.role === 'admin' ? 'student' : customMatched.role) as UserRole };
        setUser({ id: safeProfile.id, email: safeProfile.email });
        saveProfile(safeProfile);
        notifyStudentLogin(safeProfile);
        setLoading(false);
        return { error: null };
      }

      // 6. Otherwise create active student profile on the fly
      const newCustomProfile: Profile = {
        id: `user-${Date.now()}`,
        email: cleanEmail,
        full_name: cleanEmail.split('@')[0].replace('.', ' '),
        role: 'student', // ALWAYS student
        level: 'B1',
        onboarding_completed: true,
        xp: 150,
        streak: 1,
        created_at: new Date().toISOString()
      };
      setStorageItem('premier_registered_users', [...customUsers, newCustomProfile]);
      setUser({ id: newCustomProfile.id, email: newCustomProfile.email });
      saveProfile(newCustomProfile);
      notifyStudentLogin(newCustomProfile);
      setLoading(false);
      return { error: null };
    } catch (err: any) {
      setLoading(false);
      return { error: err.message || 'Kirishda xatolik yuz berdi' };
    }
  };

  const signUp = async (
    email: string, 
    _password: string, 
    fullName: string, 
    _role: UserRole = 'student',
    phone?: string,
    level?: CEFRLevel
  ): Promise<{ error: string | null }> => {
    setLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      if (ADMIN_EMAILS.includes(cleanEmail)) {
        setLoading(false);
        return { error: "Ushbu email bosh administratorga tegishli. Iltimos, Tizimga Kirish sahifasidan foydalaning." };
      }

      const newProf: Profile = {
        id: `usr-${Date.now()}`,
        email: cleanEmail,
        full_name: fullName,
        role: 'student', // ALWAYS student
        phone: phone || '',
        level: level || 'B1',
        onboarding_completed: true,
        xp: 100,
        streak: 1,
        payment_status: 'pending',
        created_at: new Date().toISOString()
      };

      if (isSupabaseConfigured && supabase) {
        await supabase.from('profiles').upsert([newProf]);
      }

      const customUsers = getStorageItem<Profile[]>('premier_registered_users', []);
      setStorageItem('premier_registered_users', [...customUsers, newProf]);
      saveProfile(newProf);
      setUser({ id: newProf.id, email: newProf.email });
      
      // Dispatch event to inform other active contexts (e.g., LMSDataContext)
      try {
        window.dispatchEvent(new CustomEvent('premier:student_registered', { detail: newProf }));
      } catch (e) {
        // Safe fallback
      }

      setLoading(false);
      return { error: null };
    } catch (err: any) {
      setLoading(false);
      return { error: err.message || 'Registration failed' };
    }
  };

  const signOut = async (): Promise<void> => {
    setUser(null);
    saveProfile(null);
    removeStorageItem('premier_lms_profile');
  };

  const updateProfile = async (updates: Partial<Profile>): Promise<{ error: string | null }> => {
    if (!profile) return { error: 'No active profile found' };
    const updated: Profile = { ...profile, ...updates, updated_at: new Date().toISOString() };
    saveProfile(updated);

    // Sync into premier_registered_users and premier_all_students
    try {
      const registered = getStorageItem<Profile[]>('premier_registered_users', []);
      const regIdx = registered.findIndex(u => u.id === profile.id || u.email.toLowerCase() === profile.email.toLowerCase());
      if (regIdx >= 0) {
        registered[regIdx] = { ...registered[regIdx], ...updated };
        setStorageItem('premier_registered_users', registered);
      }

      const allStudents = getStorageItem<Profile[]>('premier_all_students', []);
      const stIdx = allStudents.findIndex(s => s.id === profile.id || s.email.toLowerCase() === profile.email.toLowerCase());
      if (stIdx >= 0) {
        allStudents[stIdx] = { ...allStudents[stIdx], ...updated };
        setStorageItem('premier_all_students', allStudents);
      }

      // Broadcast update across tabs
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        const ch = new BroadcastChannel('premier_lms_bus');
        ch.postMessage({ type: 'PROFILE_UPDATED', profile: updated });
        ch.close();
      }
    } catch {}

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').update(updates).eq('id', profile.id);
      } catch (e) {
        console.warn('Supabase profile update warning:', e);
      }
    }

    return { error: null };
  };

  const switchDemoRole = (_targetRole: UserRole) => {
    // Disabled for production security: Admin is strictly restricted to authenticated login
  };

  const role = profile?.role || 'student';

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        role,
        loading,
        signIn,
        signUp,
        signOut,
        updateProfile,
        switchDemoRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
