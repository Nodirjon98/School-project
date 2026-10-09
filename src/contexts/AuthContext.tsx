import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem, removeStorageItem } from '../lib/storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Profile, UserRole, CEFRLevel } from '../types';

interface AuthContextType {
  user: any | null;
  profile: Profile | null;
  role: UserRole;
  loading: boolean;
  signIn: (email: string, password?: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, fullName: string, role?: UserRole, phone?: string, level?: CEFRLevel) => Promise<{ error: string | null; needsConfirmation?: boolean }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: string | null }>;
  switchDemoRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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

  // 3. Record the login in student_events so the admin sees it on any device
  if (isSupabaseConfigured && supabase) {
    const evt = {
      id: `act-login-${studProfile.id}-${Date.now()}`,
      student_id: studProfile.id,
      student_name: studProfile.full_name,
      action_type: 'LOGIN',
      module: 'system',
      timestamp: nowIso,
      details: { title: 'Platformaga kirdi', extra_info: `Qurilma: ${isMobile ? 'Mobil telefon' : 'Kompyuter'}` },
    };
    supabase.from('student_events').insert({ id: evt.id, student_id: evt.student_id, data: evt })
      .then(({ error }) => { if (error) console.warn('Login event save failed:', error.message); });
  }

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

// Map Supabase Auth errors to messages students understand.
const authErrorMessage = (message: string): string => {
  const m = message.toLowerCase();
  if (m.includes('invalid login credentials')) return "Email yoki parol noto'g'ri.";
  if (m.includes('email not confirmed')) return "Email hali tasdiqlanmagan. Pochtangizga yuborilgan havolani bosing.";
  if (m.includes('already registered') || m.includes('already been registered')) return "Bu email bilan hisob allaqachon mavjud. Tizimga kirish sahifasidan foydalaning.";
  if (m.includes('password') && (m.includes('at least') || m.includes('weak'))) return "Parol kamida 6 belgidan iborat bo'lishi kerak.";
  if (m.includes('rate limit') || m.includes('too many')) return "Juda ko'p urinish. Birozdan so'ng qayta urinib ko'ring.";
  if (m.includes('failed to fetch') || m.includes('network')) return "Internet aloqasi yo'q. Qayta urinib ko'ring.";
  return message;
};

const fetchProfile = async (userId: string): Promise<Profile | null> => {
  if (!supabase) return null;
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle();
  if (error || !data) return null;
  // Imported students keep their old ID in the app, because local LMS data is keyed by it.
  const { legacy_id, ...row } = data as Profile & { legacy_id?: string | null };
  return { ...row, id: legacy_id || row.id, auth_id: row.id } as Profile;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cached profile renders instantly; the Supabase session below is the source of truth.
  const [profile, setProfile] = useState<Profile | null>(() => {
    return getStorageItem<Profile | null>('premier_lms_profile', null);
  });
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const saveProfile = useCallback((newProfile: Profile | null) => {
    setProfile(newProfile);
    if (newProfile) setStorageItem('premier_lms_profile', newProfile);
    else removeStorageItem('premier_lms_profile');
  }, []);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      saveProfile(null);
      setLoading(false);
      return;
    }
    let active = true;

    supabase.auth.getSession().then(async ({ data }) => {
      const sessionUser = data.session?.user;
      if (!sessionUser) {
        if (active) {
          setUser(null);
          saveProfile(null);
          setLoading(false);
        }
        return;
      }
      const prof = await fetchProfile(sessionUser.id);
      if (!active) return;
      setUser({ id: sessionUser.id, email: sessionUser.email });
      saveProfile(prof);
      setLoading(false);
      if (prof?.role === 'student') notifyStudentLogin(prof);
    });

    // Keep this callback synchronous: awaiting Supabase calls inside it can deadlock the client.
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setUser(null);
        saveProfile(null);
      }
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [saveProfile]);

  const signIn = async (email: string, password?: string): Promise<{ error: string | null }> => {
    if (!supabase) return { error: "Baza bilan aloqa sozlanmagan." };
    const cleanEmail = email.trim().toLowerCase();
    if (!password) return { error: "Parolni kiriting." };

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
      if (error || !data.user) return { error: authErrorMessage(error?.message || 'Kirishda xatolik yuz berdi') };

      const prof = await fetchProfile(data.user.id);
      if (!prof) {
        await supabase.auth.signOut();
        return { error: "Profil topilmadi. Administrator bilan bog'laning." };
      }

      setUser({ id: data.user.id, email: data.user.email });
      saveProfile(prof);
      if (prof.role === 'student') notifyStudentLogin(prof);
      return { error: null };
    } catch (err: any) {
      return { error: authErrorMessage(err?.message || 'Kirishda xatolik yuz berdi') };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    fullName: string,
    _role: UserRole = 'student',
    phone?: string,
    _level?: CEFRLevel
  ): Promise<{ error: string | null; needsConfirmation?: boolean }> => {
    if (!supabase) return { error: "Baza bilan aloqa sozlanmagan." };
    const cleanEmail = email.trim().toLowerCase();
    if (password.length < 6) return { error: "Parol kamida 6 belgidan iborat bo'lishi kerak." };

    setLoading(true);
    try {
      // The profile row (always role 'student') is created by the on_auth_user_created trigger.
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: { full_name: fullName.trim(), phone: phone?.trim() || null },
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/login` : undefined,
        },
      });
      if (error) return { error: authErrorMessage(error.message) };

      // With email confirmation on, an existing address comes back with no identities.
      if (data.user && data.user.identities && data.user.identities.length === 0) {
        return { error: authErrorMessage('already registered') };
      }

      if (!data.session || !data.user) {
        return { error: null, needsConfirmation: true };
      }

      const prof = await fetchProfile(data.user.id);
      if (!prof) return { error: "Profil yaratilmadi. Qayta urinib ko'ring." };
      setUser({ id: data.user.id, email: data.user.email });
      saveProfile(prof);

      try {
        window.dispatchEvent(new CustomEvent('premier:student_registered', { detail: prof }));
      } catch {}

      return { error: null };
    } catch (err: any) {
      return { error: authErrorMessage(err?.message || "Ro'yxatdan o'tishda xatolik") };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    if (supabase) await supabase.auth.signOut();
    setUser(null);
    saveProfile(null);
  };

  const updateProfile = async (updates: Partial<Profile>): Promise<{ error: string | null }> => {
    if (!profile) return { error: 'No active profile found' };
    const updated: Profile = { ...profile, ...updates, updated_at: new Date().toISOString() };
    saveProfile(updated);

    // Keep the admin-side local student lists in sync until they move to the database too
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

      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        const ch = new BroadcastChannel('premier_lms_bus');
        ch.postMessage({ type: 'PROFILE_UPDATED', profile: updated });
        ch.close();
      }
    } catch {}

    if (isSupabaseConfigured && supabase) {
      const { password: _pw, id: _id, auth_id: _authId, created_at: _created, ...dbUpdates } = updates;
      const { error } = await supabase.from('profiles').update(dbUpdates).eq('id', profile.auth_id || profile.id);
      if (error) {
        console.warn('Supabase profile update failed:', error.message);
        return { error: error.message };
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
