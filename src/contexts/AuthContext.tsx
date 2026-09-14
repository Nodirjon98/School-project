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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<Profile | null>(() => {
    return getStorageItem<Profile | null>('premier_lms_profile', SEED_PROFILES[2]); // default to student Jasur
  });
  const [loading, setLoading] = useState<boolean>(true);

  // Sync profile to storage whenever it changes
  const saveProfile = useCallback((newProfile: Profile | null) => {
    setProfile(newProfile);
    if (newProfile) {
      setStorageItem('premier_lms_profile', newProfile);
    } else {
      removeStorageItem('premier_lms_profile');
    }
  }, []);

  useEffect(() => {
    // Initialize active profile from storage or fallback to Jasur Rustamov
    const stored = getStorageItem<Profile | null>('premier_lms_profile', null);
    if (stored) {
      setProfile(stored);
      setUser({ id: stored.id, email: stored.email });
    } else {
      saveProfile(SEED_PROFILES[2]);
      setUser({ id: SEED_PROFILES[2].id, email: SEED_PROFILES[2].email });
    }
    setLoading(false);
  }, [saveProfile]);

  const signIn = async (email: string, _password?: string): Promise<{ error: string | null }> => {
    setLoading(true);
    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('email', email.toLowerCase())
          .maybeSingle();

        if (data && !error) {
          setUser({ id: data.id, email: data.email });
          saveProfile(data as Profile);
          setLoading(false);
          return { error: null };
        }
      }

      // Look up in known seed profiles
      const matched = SEED_PROFILES.find(p => p.email.toLowerCase() === email.toLowerCase());
      if (matched) {
        setUser({ id: matched.id, email: matched.email });
        saveProfile(matched);
        setLoading(false);
        return { error: null };
      }

      // Look up in official premier students
      const officialMatched = PREMIER_OFFICIAL_STUDENTS.find(p => p.email.toLowerCase() === email.toLowerCase());
      if (officialMatched) {
        setUser({ id: officialMatched.id, email: officialMatched.email });
        saveProfile(officialMatched);
        setLoading(false);
        return { error: null };
      }

      // Check previously registered users stored in localStorage
      const customUsers = getStorageItem<Profile[]>('premier_registered_users', []);
      const customMatched = customUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (customMatched) {
        setUser({ id: customMatched.id, email: customMatched.email });
        saveProfile(customMatched);
        setLoading(false);
        return { error: null };
      }

      // Otherwise create active profile on the fly
      const newCustomProfile: Profile = {
        id: `user-${Date.now()}`,
        email,
        full_name: email.split('@')[0].replace('.', ' '),
        role: 'student',
        level: 'B1',
        onboarding_completed: true,
        xp: 150,
        streak: 1,
        created_at: new Date().toISOString()
      };
      setStorageItem('premier_registered_users', [...customUsers, newCustomProfile]);
      setUser({ id: newCustomProfile.id, email: newCustomProfile.email });
      saveProfile(newCustomProfile);
      setLoading(false);
      return { error: null };
    } catch (err: any) {
      setLoading(false);
      return { error: err.message || 'Login failed' };
    }
  };

  const signUp = async (
    email: string, 
    _password: string, 
    fullName: string, 
    role: UserRole = 'student',
    phone?: string,
    level?: CEFRLevel
  ): Promise<{ error: string | null }> => {
    setLoading(true);
    try {
      const newProf: Profile = {
        id: `usr-${Date.now()}`,
        email,
        full_name: fullName,
        role,
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
  };

  const updateProfile = async (updates: Partial<Profile>): Promise<{ error: string | null }> => {
    if (!profile) return { error: 'No active profile found' };
    const updated: Profile = { ...profile, ...updates, updated_at: new Date().toISOString() };
    saveProfile(updated);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('profiles').update(updates).eq('id', profile.id);
      } catch (e) {
        console.warn('Supabase profile update warning:', e);
      }
    }

    return { error: null };
  };

  const switchDemoRole = (targetRole: UserRole) => {
    const target = SEED_PROFILES.find(p => p.role === targetRole) || SEED_PROFILES[0];
    saveProfile(target);
    setUser({ id: target.id, email: target.email });
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
