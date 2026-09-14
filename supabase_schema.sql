-- ============================================================================
-- PREMIER SCHOOL LMS - SUPABASE DATABASE SCHEMA
-- Copy and paste this script into Supabase SQL Editor and click "Run"
-- ============================================================================

-- Enable Row Level Security & Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE (Students, Teachers, Admins)
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student',
  level TEXT DEFAULT 'B1',
  onboarding_completed BOOLEAN DEFAULT true,
  xp INTEGER DEFAULT 100,
  streak INTEGER DEFAULT 1,
  group_id TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. GROUPS TABLE
CREATE TABLE IF NOT EXISTS public.groups (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  level TEXT NOT NULL,
  teacher_name TEXT NOT NULL,
  room TEXT,
  schedule TEXT,
  students_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. LESSONS TABLE
CREATE TABLE IF NOT EXISTS public.lessons (
  id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL,
  group_name TEXT,
  title TEXT NOT NULL,
  topic TEXT,
  unit_number INTEGER,
  date TEXT NOT NULL,
  time TEXT,
  room TEXT,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. HOMEWORKS TABLE
CREATE TABLE IF NOT EXISTS public.homeworks (
  id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL,
  group_name TEXT,
  title TEXT NOT NULL,
  description TEXT,
  due_date TEXT NOT NULL,
  max_score INTEGER DEFAULT 100,
  type TEXT DEFAULT 'essay',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. HOMEWORK SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS public.homework_submissions (
  id TEXT PRIMARY KEY,
  homework_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  student_name TEXT,
  homework_title TEXT,
  text_content TEXT,
  score INTEGER,
  max_score INTEGER DEFAULT 100,
  feedback TEXT,
  status TEXT DEFAULT 'pending',
  submitted_at TIMESTAMPTZ DEFAULT now(),
  graded_at TIMESTAMPTZ,
  graded_by TEXT
);

-- 6. ATTENDANCE TABLE
CREATE TABLE IF NOT EXISTS public.attendance (
  id TEXT PRIMARY KEY,
  lesson_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  status TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.payments (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  student_name TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT DEFAULT 'paid',
  payment_method TEXT DEFAULT 'click',
  date TIMESTAMPTZ DEFAULT now(),
  receipt_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 8. DAILY WORDS TABLE
CREATE TABLE IF NOT EXISTS public.daily_words (
  id TEXT PRIMARY KEY,
  word TEXT NOT NULL,
  part_of_speech TEXT,
  definition TEXT NOT NULL,
  translation_uz TEXT NOT NULL,
  example TEXT,
  cefr_level TEXT DEFAULT 'B2',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Seed Initial Default Profiles
INSERT INTO public.profiles (id, email, full_name, role, level, onboarding_completed, xp)
VALUES 
  ('usr-admin-1', 'admin@premier.uz', 'Nodirjon Safoyev (Admin)', 'admin', 'C2', true, 5000),
  ('usr-teacher-1', 'teacher@premier.uz', 'Malika Karimova (Teacher)', 'teacher', 'C1', true, 3200),
  ('usr-student-1', 'student@premier.uz', 'Jasur Rustamov (Student)', 'student', 'B2', true, 1450)
ON CONFLICT (email) DO NOTHING;

-- Turn off RLS for initial simple connection or set open read/write rules
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.groups DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.homeworks DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_words DISABLE ROW LEVEL SECURITY;
