import fs from 'fs';
import path from 'path';
import { PREMIER_OFFICIAL_STUDENTS } from '../data/premierStudentsData';

const TELEMETRY_DIR = path.resolve(process.env.TEMP || (process.platform === 'win32' ? process.env.TMP || 'C:\\Windows\\Temp' : '/tmp'));
const TELEMETRY_FILE = path.join(TELEMETRY_DIR, 'premier_lms_telemetry_store.json');

const globalTelemetryStore: Record<string, any> =
  (global as any).__premierTelemetryStore || {};
const globalActionEvents: any[] =
  (global as any).__premierActionEvents || [];
(global as any).__premierTelemetryStore = globalTelemetryStore;
(global as any).__premierActionEvents = globalActionEvents;

function createDefaultStudentTelemetry(st: any) {
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

function computeTelemetryDisplay(log: any) {
  if (!log.last_active_at) {
    return { online_status: 'offline', last_active_label: 'Hali kirmagan' };
  }

  const now = Date.now();
  const lastActiveTime = new Date(log.last_active_at).getTime();
  const diffSec = Math.max(0, Math.floor((now - lastActiveTime) / 1000));

  let online_status = 'offline';
  let last_active_label = 'Hali kirmagan';

  if (diffSec < 300) {
    online_status = 'online';
    last_active_label = 'Ayni paytda faol';
  } else if (diffSec < 1200) {
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

function sendJson(res: any, status: number, data: any) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  if (typeof res.json === 'function') {
    return res.json(data);
  }
  return res.end(JSON.stringify(data));
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  ensureInit();

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch {}
  }
  body = body || {};

  const url = req.url || '';
  const method = req.method || 'GET';

  // 1. HEALTH
  if (url.includes('/health') || url === '/' || url === '/api') {
    return sendJson(res, 200, {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Premier School LMS Vercel API',
      officialStudentsCount: PREMIER_OFFICIAL_STUDENTS.length
    });
  }

  // 2. STATUS
  if (url.includes('/telemetry/status') || (url.includes('/status') && method === 'GET')) {
    const formattedLogs: Record<string, any> = {};
    for (const [id, log] of Object.entries(globalTelemetryStore)) {
      const { online_status, last_active_label } = computeTelemetryDisplay(log);
      formattedLogs[id] = { ...log, online_status, last_active_label };
    }
    return sendJson(res, 200, {
      success: true,
      telemetryLogs: formattedLogs,
      actionEvents: globalActionEvents,
      timestamp: new Date().toISOString(),
      onlineCount: Object.values(formattedLogs).filter((l: any) => l.online_status === 'online').length
    });
  }

  // 3. LOGIN
  if (url.includes('/telemetry/login') || (url.includes('/login') && method === 'POST')) {
    const { student_id, student_name, email, device, group_name, group_id, level, student_avatar } = body;
    if (!student_id) return sendJson(res, 400, { error: 'student_id required' });

    const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find(s => s.id === student_id || s.email.toLowerCase() === (email || '').toLowerCase());
    const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name, email, group_name, group_id, level, avatar_url: student_avatar });

    const nowIso = new Date().toISOString();
    const detectedDevice = device || (/android|iphone|ipad|mobile/i.test(req.headers?.['user-agent'] || '') ? 'mobile' : 'desktop');

    globalTelemetryStore[student_id] = {
      ...current,
      student_name: student_name || current.student_name,
      email: email || current.email,
      device: detectedDevice,
      online_status: 'online',
      last_active_at: nowIso,
      last_active_label: 'Ayni paytda faol'
    };

    const actionEvent = {
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
    return sendJson(res, 200, { success: true, telemetry: globalTelemetryStore[student_id], action: actionEvent });
  }

  // 4. HEARTBEAT
  if (url.includes('/telemetry/heartbeat') || (url.includes('/heartbeat') && method === 'POST')) {
    const { student_id, student_name, module, active_seconds = 0, idle_seconds = 0, current_page, is_idle, device } = body;
    if (!student_id) return sendJson(res, 400, { error: 'student_id required' });

    const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find(s => s.id === student_id);
    const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name });

    const nowIso = new Date().toISOString();
    const activeSec = Number(active_seconds) || 0;
    const idleSec = Number(idle_seconds) || 0;

    const modBreakdown = { ...current.module_breakdown };
    if (module) {
      const key = `${module}_seconds`;
      if (key in modBreakdown) {
        modBreakdown[key] = (modBreakdown[key] || 0) + activeSec;
      }
    }

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
    return sendJson(res, 200, { success: true, telemetry: globalTelemetryStore[student_id] });
  }

  // 5. ACTION
  if (url.includes('/telemetry/action') || (url.includes('/action') && method === 'POST')) {
    const { student_id, student_name, action_type, module, details } = body;
    if (!student_id) return sendJson(res, 400, { error: 'student_id required' });

    const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find(s => s.id === student_id);
    const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name });

    const nowIso = new Date().toISOString();
    const actionEvent = {
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
    return sendJson(res, 200, { success: true, event: actionEvent, telemetry: current });
  }

  // 6. RESET
  if (url.includes('/telemetry/reset')) {
    if (Array.isArray(PREMIER_OFFICIAL_STUDENTS)) {
      PREMIER_OFFICIAL_STUDENTS.forEach(st => {
        globalTelemetryStore[st.id] = createDefaultStudentTelemetry(st);
      });
    }
    globalActionEvents.length = 0;
    persistStore();
    return sendJson(res, 200, { success: true, message: 'Barcha telemetriya tozalab yangilandi' });
  }

  // Default fallback
  return sendJson(res, 404, { error: 'Not found', path: url });
}
