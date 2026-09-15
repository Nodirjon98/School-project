// src/api/serverless.ts
import fs from "fs";
import path from "path";

// src/data/premierStudentsData.ts
var PREMIER_OFFICIAL_STUDENTS = [
  {
    "id": "student-official-1",
    "email": "shahzoda.ilhomova@premier.uz",
    "full_name": "Shahzoda Ilhomova",
    "role": "student",
    "phone": "+998 88 486 92 93",
    "birth_date": "2014-04-20",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Shahzoda2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-2",
    "email": "shahnoza.kodirova@premier.uz",
    "full_name": "Shahnoza Kodirova",
    "role": "student",
    "phone": "",
    "birth_date": "2013-08-30",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Shahnoza2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-3",
    "email": "olmas.rasulov@premier.uz",
    "full_name": "O'lmas Rasulov",
    "role": "student",
    "phone": "+998 97 303 51 25",
    "birth_date": null,
    "status": "active",
    "payment_type": "full",
    "custom_fee": 35e4,
    "password": "Olmas2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-4",
    "email": "toymurod.azimov@premier.uz",
    "full_name": "To'ymurod Azimov",
    "role": "student",
    "phone": "+998 88 866 01 10",
    "birth_date": null,
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Toymurod2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-5",
    "email": "azizbek.ashurov@premier.uz",
    "full_name": "Azizbek Ashurov",
    "role": "student",
    "phone": "+998 97 862 22 42",
    "birth_date": "2015-10-14",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Azizbek2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-6",
    "email": "dilnoza.rajabova@premier.uz",
    "full_name": "Dilnoza Rajabova",
    "role": "student",
    "phone": "+998 97 664 28 88",
    "birth_date": "2014-04-04",
    "status": "active",
    "payment_type": "custom",
    "custom_fee": null,
    "password": "Dilnoza2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-7",
    "email": "mirshod.xolmurodov@premier.uz",
    "full_name": "Mirshod Xolmurodov",
    "role": "student",
    "phone": "+998 87 337 93 16",
    "birth_date": "2026-10-19",
    "status": "active",
    "payment_type": "custom",
    "custom_fee": null,
    "password": "Mirshod2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-8",
    "email": "manzura.sayfullayeva@premier.uz",
    "full_name": "Manzura Sayfullayeva",
    "role": "student",
    "phone": "+998 88 082 77 71",
    "birth_date": "2011-08-18",
    "status": "active",
    "payment_type": "custom",
    "custom_fee": 4e5,
    "password": "Manzura2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-9",
    "email": "akbar.ashurov@premier.uz",
    "full_name": "Akbar Ashurov",
    "role": "student",
    "phone": "+998 88 071 25 24",
    "birth_date": "2012-09-07",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Akbar2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-10",
    "email": "shalola.hasanova@premier.uz",
    "full_name": "Shalola Hasanova",
    "role": "student",
    "phone": "+998 97 080 64 08",
    "birth_date": "2013-09-27",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Shalola2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-11",
    "email": "sadoqatbonu.salimova@premier.uz",
    "full_name": "Sadoqatbonu Salimova",
    "role": "student",
    "phone": "+998 97 861 20 06",
    "birth_date": "2006-06-20",
    "status": "active",
    "payment_type": "free",
    "custom_fee": null,
    "password": "Sadoqatbonu2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "paid",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-12",
    "email": "mehroj.ulugbekov@premier.uz",
    "full_name": "Mehroj Ulug'bekov",
    "role": "student",
    "phone": "+998 88 082 99 11",
    "birth_date": null,
    "status": "active",
    "payment_type": "custom",
    "custom_fee": 3e5,
    "password": "Mehroj2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-13",
    "email": "muhammad.elmurodov@premier.uz",
    "full_name": "Muhammad Elmurodov",
    "role": "student",
    "phone": "+998 88 017 54 00",
    "birth_date": "2012-07-15",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Muhammad2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-14",
    "email": "muhammadali.rajabov@premier.uz",
    "full_name": "Muhammadali Rajabov",
    "role": "student",
    "phone": "+998 91 242 02 07",
    "birth_date": "2018-11-09",
    "status": "left",
    "payment_type": "custom",
    "custom_fee": 25e4,
    "password": "Muhammadali2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-15",
    "email": "otabek.roziqulov@premier.uz",
    "full_name": "Otabek Ro'ziqulov",
    "role": "student",
    "phone": "+998 97 798 79 14",
    "birth_date": "2011-08-06",
    "status": "active",
    "payment_type": "custom",
    "custom_fee": 6e5,
    "password": "Otabek2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-16",
    "email": "sarvar.rasulov@premier.uz",
    "full_name": "Sarvar Rasulov",
    "role": "student",
    "phone": "+998 87 053 17 16",
    "birth_date": "2016-05-19",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Sarvar2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-17",
    "email": "zuhra.aminova@premier.uz",
    "full_name": "Zuhra Aminova",
    "role": "student",
    "phone": "+998 97 854 16 11",
    "birth_date": "2012-06-09",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Zuhra2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-18",
    "email": "parviz.shokirov@premier.uz",
    "full_name": "Parviz Shokirov",
    "role": "student",
    "phone": "+998 90 194 90 96",
    "birth_date": "2013-04-25",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Parviz2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-19",
    "email": "shaxram.shokirov@premier.uz",
    "full_name": "Shaxram Shokirov",
    "role": "student",
    "phone": "",
    "birth_date": "2018-03-18",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Shaxram2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-20",
    "email": "aziza.hafizova@premier.uz",
    "full_name": "Aziza Hafizova",
    "role": "student",
    "phone": "+998 87 684 11 91",
    "birth_date": "2009-12-11",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Aziza2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-21",
    "email": "bobur.yangiboyev@premier.uz",
    "full_name": "Bobur Yangiboyev",
    "role": "student",
    "phone": "+998 97 309 44 56",
    "birth_date": "2011-12-12",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Bobur2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-22",
    "email": "fotima.zuhra49@premier.uz",
    "full_name": "Fotima Aminova",
    "role": "student",
    "phone": "+998 97 854 16 11",
    "birth_date": "2012-06-09",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Fotima2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-23",
    "email": "farhod.premier@premier.uz",
    "full_name": "Farhod Muhammadov",
    "role": "student",
    "phone": "",
    "birth_date": null,
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Farhod2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-24",
    "email": "jasurbek.joniyev@premier.uz",
    "full_name": "Jasurbek Joniyev",
    "role": "student",
    "phone": "",
    "birth_date": null,
    "status": "left",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Jasurbek2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-25",
    "email": "sarvinoz.joniyeva@premier.uz",
    "full_name": "Sarvinoz Joniyeva",
    "role": "student",
    "phone": "",
    "birth_date": null,
    "status": "left",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Sarvinoz2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-26",
    "email": "parizoda.tangriyeva@premier.uz",
    "full_name": "Parizoda Tangriyeva",
    "role": "student",
    "phone": "+998 97 281 00 40",
    "birth_date": null,
    "status": "left",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Parizoda2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-27",
    "email": "mehroj.tangriyev@premier.uz",
    "full_name": "Mehroj Tangriyev",
    "role": "student",
    "phone": "+998 94 994 88 10",
    "birth_date": null,
    "status": "left",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Mehroj2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-28",
    "email": "golibjon.umarov@premier.uz",
    "full_name": "G'olibjon Umarov",
    "role": "student",
    "phone": "+998 88 868 65 75",
    "birth_date": "2015-07-25",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Golibjon2026!",
    "level": "A2",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-29",
    "email": "zarina.ostonova@premier.uz",
    "full_name": "Zarina Ostonova",
    "role": "student",
    "phone": "+998 97 181 10 07",
    "birth_date": "2013-05-02",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Zarina2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-30",
    "email": "parizoda.nematova@premier.uz",
    "full_name": "Parizoda Nematova",
    "role": "student",
    "phone": "+998 93 683 89 80",
    "birth_date": "2014-04-05",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Parizoda2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-31",
    "email": "mehrangiz.baxodirova@premier.uz",
    "full_name": "Mehrangiz Baxodirova",
    "role": "student",
    "phone": "+998 88 309 33 66",
    "birth_date": "2016-01-08",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Mehrangiz2026!",
    "level": "B2",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-32",
    "email": "sarvinozbonu.salimova@premier.uz",
    "full_name": "Sarvinozbonu Salimova",
    "role": "student",
    "phone": "+998 91 828 03 12",
    "birth_date": "2013-10-18",
    "status": "left",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Sarvinozbonu2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-33",
    "email": "ferangiz.ramazonova@premier.uz",
    "full_name": "Ferangiz Ramazonova",
    "role": "student",
    "phone": "+998 94 676 30 86",
    "birth_date": "2013-05-31",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Ferangiz2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-34",
    "email": "charos.farmonova@premier.uz",
    "full_name": "Charos Farmonova",
    "role": "student",
    "phone": "+998 93 110 54 79",
    "birth_date": "2012-12-29",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Charos2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-35",
    "email": "fotima.ergasheva@premier.uz",
    "full_name": "Fotima Ergasheva",
    "role": "student",
    "phone": "+998 91 242 09 55",
    "birth_date": "2013-08-25",
    "status": "left",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Fotima2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 50,
    "streak": 0,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  },
  {
    "id": "student-official-36",
    "email": "alijon.umarov@premier.uz",
    "full_name": "Alijon Umarov",
    "role": "student",
    "phone": "",
    "birth_date": "2011-09-22",
    "status": "active",
    "payment_type": "full",
    "custom_fee": null,
    "password": "Alijon2026!",
    "level": "B1",
    "onboarding_completed": true,
    "xp": 350,
    "streak": 3,
    "payment_status": "pending",
    "created_at": "2026-02-01T09:00:00Z"
  }
];

// src/api/serverless.ts
var TELEMETRY_DIR = path.resolve(process.env.TEMP || (process.platform === "win32" ? process.env.TMP || "C:\\Windows\\Temp" : "/tmp"));
var TELEMETRY_FILE = path.join(TELEMETRY_DIR, "premier_lms_telemetry_store.json");
var globalTelemetryStore = global.__premierTelemetryStore || {};
var globalActionEvents = global.__premierActionEvents || [];
global.__premierTelemetryStore = globalTelemetryStore;
global.__premierActionEvents = globalActionEvents;
function createDefaultStudentTelemetry(st) {
  return {
    id: `tel-${st.id}`,
    student_id: st.id,
    student_name: st.full_name || "O'quvchi",
    student_avatar: st.avatar_url,
    email: st.email,
    group_name: st.group_name || "Guruhga biriktirilmagan",
    group_id: st.group_id,
    phone: st.phone,
    level: st.level || "B1",
    online_status: "offline",
    current_page: void 0,
    current_module: void 0,
    device: "mobile",
    last_active_at: "",
    last_active_label: "Hali kirmagan",
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
var isInitialized = false;
function ensureInit() {
  if (isInitialized) return;
  isInitialized = true;
  try {
    if (fs.existsSync(TELEMETRY_FILE)) {
      const saved = JSON.parse(fs.readFileSync(TELEMETRY_FILE, "utf-8"));
      if (saved.logs && typeof saved.logs === "object") {
        Object.assign(globalTelemetryStore, saved.logs);
      }
      if (Array.isArray(saved.actions) && saved.actions.length > 0) {
        globalActionEvents.splice(0, globalActionEvents.length, ...saved.actions);
      }
    }
  } catch {
  }
  if (Array.isArray(PREMIER_OFFICIAL_STUDENTS)) {
    PREMIER_OFFICIAL_STUDENTS.forEach((st) => {
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
    }), "utf-8");
  } catch {
  }
}
function computeTelemetryDisplay(log) {
  if (!log.last_active_at) {
    return { online_status: "offline", last_active_label: "Hali kirmagan" };
  }
  const now = Date.now();
  const lastActiveTime = new Date(log.last_active_at).getTime();
  const diffSec = Math.max(0, Math.floor((now - lastActiveTime) / 1e3));
  let online_status = "offline";
  let last_active_label = "Hali kirmagan";
  if (diffSec < 300) {
    online_status = "online";
    last_active_label = "Ayni paytda faol";
  } else if (diffSec < 1200) {
    online_status = "idle";
    const mins = Math.max(1, Math.floor(diffSec / 60));
    last_active_label = `${mins} daqiqa oldin faol`;
  } else {
    online_status = "offline";
    const lastDate = new Date(lastActiveTime);
    const today = /* @__PURE__ */ new Date();
    const isToday = lastDate.toDateString() === today.toDateString();
    const yesterday = /* @__PURE__ */ new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = lastDate.toDateString() === yesterday.toDateString();
    const timeStr = lastDate.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", hour12: false });
    if (isToday) {
      last_active_label = `Bugun ${timeStr} da`;
    } else if (isYesterday) {
      last_active_label = `Kecha ${timeStr} da`;
    } else {
      const day = String(lastDate.getDate()).padStart(2, "0");
      const month = String(lastDate.getMonth() + 1).padStart(2, "0");
      last_active_label = `${day}.${month} ${timeStr} da`;
    }
  }
  return { online_status, last_active_label };
}
function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  if (typeof res.json === "function") {
    return res.json(data);
  }
  return res.end(JSON.stringify(data));
}
async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    return res.end();
  }
  ensureInit();
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
    }
  }
  body = body || {};
  const url = req.url || "";
  const method = req.method || "GET";
  if (url.includes("/health") || url === "/" || url === "/api") {
    return sendJson(res, 200, {
      status: "ok",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      service: "Premier School LMS Vercel API",
      officialStudentsCount: PREMIER_OFFICIAL_STUDENTS.length
    });
  }
  if (url.includes("/telemetry/status") || url.includes("/status") && method === "GET") {
    const formattedLogs = {};
    for (const [id, log] of Object.entries(globalTelemetryStore)) {
      const { online_status, last_active_label } = computeTelemetryDisplay(log);
      formattedLogs[id] = { ...log, online_status, last_active_label };
    }
    return sendJson(res, 200, {
      success: true,
      telemetryLogs: formattedLogs,
      actionEvents: globalActionEvents,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      onlineCount: Object.values(formattedLogs).filter((l) => l.online_status === "online").length
    });
  }
  if (url.includes("/telemetry/login") || url.includes("/login") && method === "POST") {
    const { student_id, student_name, email, device, group_name, group_id, level, student_avatar } = body;
    if (!student_id) return sendJson(res, 400, { error: "student_id required" });
    const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find((s) => s.id === student_id || s.email.toLowerCase() === (email || "").toLowerCase());
    const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name, email, group_name, group_id, level, avatar_url: student_avatar });
    const nowIso = (/* @__PURE__ */ new Date()).toISOString();
    const detectedDevice = device || (/android|iphone|ipad|mobile/i.test(req.headers?.["user-agent"] || "") ? "mobile" : "desktop");
    globalTelemetryStore[student_id] = {
      ...current,
      student_name: student_name || current.student_name,
      email: email || current.email,
      device: detectedDevice,
      online_status: "online",
      last_active_at: nowIso,
      last_active_label: "Ayni paytda faol"
    };
    const actionEvent = {
      id: `act-ev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      student_id,
      student_name: student_name || current.student_name,
      action_type: "LOGIN",
      module: "system",
      timestamp: nowIso,
      details: {
        title: "Platformaga muvaffaqiyatli kirdi",
        extra_info: `Qurilma: ${detectedDevice === "mobile" ? "Mobil telefon (Smartfon)" : "Kompyuter / Noutbuk"}`
      }
    };
    globalActionEvents.unshift(actionEvent);
    if (globalActionEvents.length > 200) globalActionEvents.pop();
    persistStore();
    return sendJson(res, 200, { success: true, telemetry: globalTelemetryStore[student_id], action: actionEvent });
  }
  if (url.includes("/telemetry/heartbeat") || url.includes("/heartbeat") && method === "POST") {
    const { student_id, student_name, module, active_seconds = 0, idle_seconds = 0, current_page, is_idle, device } = body;
    if (!student_id) return sendJson(res, 400, { error: "student_id required" });
    const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find((s) => s.id === student_id);
    const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name });
    const nowIso = (/* @__PURE__ */ new Date()).toISOString();
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
      online_status: is_idle ? "idle" : "online",
      last_active_at: nowIso,
      last_active_label: is_idle ? "Pauzada (harakatsiz)" : "Ayni paytda faol",
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
  if (url.includes("/telemetry/action") || url.includes("/action") && method === "POST") {
    const { student_id, student_name, action_type, module, details } = body;
    if (!student_id) return sendJson(res, 400, { error: "student_id required" });
    const matchedOfficial = PREMIER_OFFICIAL_STUDENTS.find((s) => s.id === student_id);
    const current = globalTelemetryStore[student_id] || createDefaultStudentTelemetry(matchedOfficial || { id: student_id, full_name: student_name });
    const nowIso = (/* @__PURE__ */ new Date()).toISOString();
    const actionEvent = {
      id: `act-ev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      student_id,
      student_name: student_name || current.student_name,
      action_type: action_type || "PAGE_VIEW",
      module: module || "system",
      timestamp: nowIso,
      details: details || {}
    };
    globalActionEvents.unshift(actionEvent);
    if (globalActionEvents.length > 200) globalActionEvents.pop();
    if (details?.is_verified_productive) {
      current.verified_tasks_count = (current.verified_tasks_count || 0) + 1;
    }
    current.last_active_at = nowIso;
    current.last_active_label = "Ayni paytda faol";
    current.online_status = "online";
    if (module) current.current_module = module;
    globalTelemetryStore[student_id] = current;
    persistStore();
    return sendJson(res, 200, { success: true, event: actionEvent, telemetry: current });
  }
  if (url.includes("/telemetry/reset")) {
    if (Array.isArray(PREMIER_OFFICIAL_STUDENTS)) {
      PREMIER_OFFICIAL_STUDENTS.forEach((st) => {
        globalTelemetryStore[st.id] = createDefaultStudentTelemetry(st);
      });
    }
    globalActionEvents.length = 0;
    persistStore();
    return sendJson(res, 200, { success: true, message: "Barcha telemetriya tozalab yangilandi" });
  }
  return sendJson(res, 404, { error: "Not found", path: url });
}
export {
  handler as default
};
