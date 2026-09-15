import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { PREMIER_OFFICIAL_STUDENTS } from '../src/data/premierStudentsData';

const app = express();

app.use(express.json({ limit: '5mb' }));

// CORS headers
app.use((req: Request, res: Response, next: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

interface ServerStudentTelemetry {
  id: string;
  student_id: string;
  student_name: string;
  student_avatar?: string;
  email?: string;
  group_name?: string;
  group_id?: string;
  phone?: string;
  level?: string;
  online_status: 'online' | 'idle' | 'offline';
  current_page?: string;
  current_module?: string;
  device?: string;
  last_active_at: string;
  last_active_label: string;
  total_active_seconds: number;
  today_active_seconds: number;
  weekly_active_seconds: number;
  idle_paused_seconds: number;
  verified_tasks_count: number;
  module_breakdown: {
    stories_seconds: number;
    vocab_seconds: number;
    listening_seconds: number;
    grammar_seconds: number;
    homework_seconds: number;
    speaking_seconds: number;
    other_seconds: number;
  };
}

interface ServerStudentAction {
  id: string;
  student_id: string;
  student_name: string;
  action_type: string;
  module: string;
  timestamp: string;
  details?: {
    title: string;
    score?: number;
    unit?: number | string;
    extra_info?: string;
    is_verified_productive?: boolean;
  };
}

const TELEMETRY_DIR = path.resolve(process.env.TEMP || (process.platform === 'win32' ? process.env.TMP || 'C:\\Windows\\Temp' : '/tmp'));
const TELEMETRY_FILE = path.join(TELEMETRY_DIR, 'premier_lms_telemetry_store.json');

const globalTelemetryStore: Record<string, ServerStudentTelemetry> =
  (global as any).__premierTelemetryStore || {};
const globalActionEvents: ServerStudentAction[] =
  (global as any).__premierActionEvents || [];
(global as any).__premierTelemetryStore = globalTelemetryStore;
(global as any).__premierActionEvents = globalActionEvents;

function createDefaultStudentTelemetry(st: any): ServerStudentTelemetry {
  return {
    id: `tel-${st.id}`,
    student_id: st.id,
    student_name: st.full_name || "O'quvchi",
    student_avatar: st.avatar_url,
    email: st.email,
    group_name: st.group_name || "Guruhga biriktirilmagan",
    group_id: st.group_id,
    phone: st.phone,
    level: st.level || 'B1',
    online_status: 'offline',
    current_page: undefined,
    current_module: undefined,
    device: 'mobile',
    last_active_at: '',
    last_active_label: 'Hali kirmagan',
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
}

let isInitialized = false;
function ensureInit() {
  if (isInitialized) return;
  isInitialized = true;

  try {
    if (fs.existsSync(TELEMETRY_FILE)) {
      const saved = JSON.parse(fs.readFileSync(TELEMETRY_FILE, 'utf-8'));
      if (saved.logs && typeof saved.logs === 'object') {
        Object.assign(globalTelemetryStore, saved.logs);
      }
      if (Array.isArray(saved.actions) && saved.actions.length > 0) {
        globalActionEvents.splice(0, globalActionEvents.length, ...saved.actions);
      }
    }
  } catch {}

  if (Array.isArray(PREMIER_OFFICIAL_STUDENTS)) {
    PREMIER_OFFICIAL_STUDENTS.forEach(st => {
      if (!globalTelemetryStore[st.id]) {
        globalTelemetryStore[st.id] = createDefaultStudentTelemetry(st);
      }
    });
  }
}

function persistStore() {
  try {
    fs.writeFileSync(TELEMETRY_FILE, JSON.stringify({
      logs: globalTelemetryStore,
      actions: globalActionEvents.slice(0, 200)
    }), 'utf-8');
  } catch {}
}

function computeTelemetryDisplay(log: ServerStudentTelemetry) {
  if (!log.last_active_at) {
    return {
      online_status: 'offline' as const,
      last_active_label: 'Hali kirmagan'
    };
  }

  const now = Date.now();
  const lastActiveTime = new Date(log.last_active_at).getTime();
  const diffSec = Math.max(0, Math.floor((now - lastActiveTime) / 1000));

  let online_status: 'online' | 'idle' | 'offline' = 'offline';
  let last_active_label = 'Hali kirmagan';

  if (diffSec < 120) {
    online_status = 'online';
    last_active_label = 'Ayni paytda faol';
  } else if (diffSec < 600) {
    online_status = 'idle';
    const mins = Math.max(1, Math.floor(diffSec / 60));
    last_active_label = `${mins} daqiqa oldin faol`;
  } else {
    online_status = 'offline';
    const lastDate = new Date(lastActiveTime);
    const today = new Date();
    const isToday = lastDate.toDateString() === today.toDateString();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = lastDate.toDateString() === yesterday.toDateString();

    const timeStr = lastDate.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', hour12: false });

    if (isToday) {
      last_active_label = `Bugun ${timeStr} da`;
    } else if (isYesterday) {
      last_active_label = `Kecha ${timeStr} da`;
    } else {
      const day = String(lastDate.getDate()).padStart(2, '0');
      const month = String(lastDate.getMonth() + 1).padStart(2, '0');
      last_active_label = `${day}.${month} ${timeStr} da`;
    }
  }

  return { online_status, last_active_label };
}

// Health check
app.get(['/api/health', '/health', '/api', '/'], (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Premier School LMS Vercel API',
    officialStudentsCount: PREMIER_OFFICIAL_STUDENTS.length
  });
});

// 1. LOGIN
app.post(['/api/telemetry/login', '/telemetry/login'], (req: Request, res: Response) => {
  const { student_id, student_name, email, device, group_name, group_id, level, student_avatar } = req.body;
  if (!student_id) return res.status(400).json({ error: 'student_id required' });

  ensureInit();
  const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find(s => s.id === student_id || s.email.toLowerCase() === (email || '').toLowerCase());
  const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name, email, group_name, group_id, level, avatar_url: student_avatar });

  const nowIso = new Date().toISOString();
  const detectedDevice = device || (/android|iphone|ipad|mobile/i.test(req.headers['user-agent'] || '') ? 'mobile' : 'desktop');

  globalTelemetryStore[student_id] = {
    ...current,
    student_name: student_name || current.student_name,
    email: email || current.email,
    device: detectedDevice,
    online_status: 'online',
    last_active_at: nowIso,
    last_active_label: 'Ayni paytda faol'
  };

  const actionEvent: ServerStudentAction = {
    id: `act-ev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    student_id,
    student_name: student_name || current.student_name,
    action_type: 'LOGIN',
    module: 'system',
    timestamp: nowIso,
    details: {
      title: "Platformaga muvaffaqiyatli kirdi",
      extra_info: `Qurilma: ${detectedDevice === 'mobile' ? 'Mobil telefon (Smartfon)' : 'Kompyuter / Noutbuk'}`
    }
  };

  globalActionEvents.unshift(actionEvent);
  if (globalActionEvents.length > 200) globalActionEvents.pop();

  persistStore();

  res.json({ success: true, telemetry: globalTelemetryStore[student_id], action: actionEvent });
});

// 2. HEARTBEAT
app.post(['/api/telemetry/heartbeat', '/telemetry/heartbeat'], (req: Request, res: Response) => {
  const { student_id, student_name, module, active_seconds = 0, idle_seconds = 0, current_page, is_idle, device } = req.body;
  if (!student_id) return res.status(400).json({ error: 'student_id required' });

  ensureInit();
  const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find(s => s.id === student_id);
  const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name });

  const nowIso = new Date().toISOString();
  const activeSec = Number(active_seconds) || 0;
  const idleSec = Number(idle_seconds) || 0;

  const modBreakdown = { ...current.module_breakdown };
  if (module) {
    const key = `${module}_seconds` as keyof typeof modBreakdown;
    if (key in modBreakdown) {
      modBreakdown[key] = (modBreakdown[key] || 0) + activeSec;
    }
  }

  const isOnline = !is_idle && (activeSec > 0 || !is_idle);
  globalTelemetryStore[student_id] = {
    ...current,
    online_status: is_idle ? 'idle' : 'online',
    last_active_at: nowIso,
    last_active_label: is_idle ? 'Pauzada (harakatsiz)' : 'Ayni paytda faol',
    current_page: current_page || current.current_page,
    current_module: module || current.current_module,
    device: device || current.device,
    total_active_seconds: (current.total_active_seconds || 0) + activeSec,
    today_active_seconds: (current.today_active_seconds || 0) + activeSec,
    weekly_active_seconds: (current.weekly_active_seconds || 0) + activeSec,
    idle_paused_seconds: (current.idle_paused_seconds || 0) + idleSec,
    module_breakdown: modBreakdown
  };

  persistStore();

  res.json({ success: true, telemetry: globalTelemetryStore[student_id] });
});

// 3. ACTION
app.post(['/api/telemetry/action', '/telemetry/action'], (req: Request, res: Response) => {
  const { student_id, student_name, action_type, module, details } = req.body;
  if (!student_id) return res.status(400).json({ error: 'student_id required' });

  ensureInit();
  const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find(s => s.id === student_id);
  const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name });

  const nowIso = new Date().toISOString();
  const actionEvent: ServerStudentAction = {
    id: `act-ev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    student_id,
    student_name: student_name || current.student_name,
    action_type: action_type || 'PAGE_VIEW',
    module: module || 'system',
    timestamp: nowIso,
    details: details || {}
  };

  globalActionEvents.unshift(actionEvent);
  if (globalActionEvents.length > 200) globalActionEvents.pop();

  if (details?.is_verified_productive) {
    current.verified_tasks_count = (current.verified_tasks_count || 0) + 1;
  }
  current.last_active_at = nowIso;
  current.last_active_label = 'Ayni paytda faol';
  current.online_status = 'online';
  if (module) current.current_module = module;

  globalTelemetryStore[student_id] = current;
  persistStore();

  res.json({ success: true, event: actionEvent, telemetry: current });
});

// 4. STATUS
app.get(['/api/telemetry/status', '/telemetry/status'], (req: Request, res: Response) => {
  ensureInit();
  const formattedLogs: Record<string, any> = {};

  for (const [id, log] of Object.entries(globalTelemetryStore)) {
    const { online_status, last_active_label } = computeTelemetryDisplay(log);
    formattedLogs[id] = {
      ...log,
      online_status,
      last_active_label
    };
  }

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.json({
    success: true,
    telemetryLogs: formattedLogs,
    actionEvents: globalActionEvents,
    timestamp: new Date().toISOString(),
    onlineCount: Object.values(formattedLogs).filter((l: any) => l.online_status === 'online').length
  });
});

// 5. RESET
app.post(['/api/telemetry/reset', '/telemetry/reset'], (req: Request, res: Response) => {
  ensureInit();
  if (Array.isArray(PREMIER_OFFICIAL_STUDENTS)) {
    PREMIER_OFFICIAL_STUDENTS.forEach(st => {
      globalTelemetryStore[st.id] = createDefaultStudentTelemetry(st);
    });
  }
  globalActionEvents.length = 0;
  persistStore();
  res.json({ success: true, message: 'Barcha telemetriya tozalab yangilandi' });
});

export default app;
