import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables for Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * SQL Schema for Supabase Editor:
 * 
 * -- 1. PROFILES TABLE
 * CREATE TABLE IF NOT EXISTS public.profiles (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   email TEXT UNIQUE NOT NULL,
 *   full_name TEXT NOT NULL,
 *   role TEXT NOT NULL DEFAULT 'student',
 *   level TEXT DEFAULT 'B1',
 *   onboarding_completed BOOLEAN DEFAULT false,
 *   xp INTEGER DEFAULT 100,
 *   streak INTEGER DEFAULT 1,
 *   group_id TEXT,
 *   created_at TIMESTAMPTZ DEFAULT now(),
 *   updated_at TIMESTAMPTZ DEFAULT now()
 * );
 * 
 * -- 2. GROUPS TABLE
 * CREATE TABLE IF NOT EXISTS public.groups (
 *   id TEXT PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   level TEXT NOT NULL,
 *   teacher_name TEXT NOT NULL,
 *   room TEXT,
 *   schedule TEXT,
 *   students_count INTEGER DEFAULT 0,
 *   created_at TIMESTAMPTZ DEFAULT now()
 * );
 * 
 * -- 3. HOMEWORKS TABLE
 * CREATE TABLE IF NOT EXISTS public.homeworks (
 *   id TEXT PRIMARY KEY,
 *   group_id TEXT NOT NULL,
 *   title TEXT NOT NULL,
 *   description TEXT,
 *   due_date TEXT NOT NULL,
 *   max_score INTEGER DEFAULT 100,
 *   created_at TIMESTAMPTZ DEFAULT now()
 * );
 * 
 * -- 4. HOMEWORK SUBMISSIONS TABLE
 * CREATE TABLE IF NOT EXISTS public.homework_submissions (
 *   id TEXT PRIMARY KEY,
 *   homework_id TEXT NOT NULL,
 *   student_id TEXT NOT NULL,
 *   student_name TEXT,
 *   homework_title TEXT,
 *   text_content TEXT,
 *   score INTEGER,
 *   max_score INTEGER DEFAULT 100,
 *   feedback TEXT,
 *   status TEXT DEFAULT 'pending',
 *   submitted_at TIMESTAMPTZ DEFAULT now(),
 *   graded_at TIMESTAMPTZ,
 *   graded_by TEXT
 * );
 * 
 * -- 5. ATTENDANCE TABLE
 * CREATE TABLE IF NOT EXISTS public.attendance (
 *   id TEXT PRIMARY KEY,
 *   lesson_id TEXT NOT NULL,
 *   student_id TEXT NOT NULL,
 *   status TEXT NOT NULL,
 *   note TEXT,
 *   created_at TIMESTAMPTZ DEFAULT now()
 * );
 * 
 * -- 6. PAYMENTS TABLE
 * CREATE TABLE IF NOT EXISTS public.payments (
 *   id TEXT PRIMARY KEY,
 *   student_id TEXT NOT NULL,
 *   student_name TEXT NOT NULL,
 *   amount NUMERIC NOT NULL,
 *   status TEXT DEFAULT 'paid',
 *   payment_method TEXT DEFAULT 'click',
 *   date TIMESTAMPTZ DEFAULT now(),
 *   receipt_url TEXT,
 *   created_at TIMESTAMPTZ DEFAULT now()
 * );
 */
