import React, { useState } from 'react';
import { Group, Profile } from '../../types';
import { Clock, MapPin, Users, Calendar, Filter } from 'lucide-react';

interface WeeklyTimetableProps {
  groups: Group[];
  students?: Profile[];
  onSelectGroup?: (group: Group) => void;
  userGroupId?: string;
  isStudentView?: boolean;
}

interface ParsedSlot {
  day: string; // 'Dush' | 'Sesh' | 'Chor' | 'Pay' | 'Jum' | 'Shan'
  dayIndex: number;
  timeSlot: string; // '09:00 - 10:30' | '11:00 - 12:30' | '14:00 - 15:30' | '16:30 - 18:00' | '18:30 - 20:00'
  group: Group;
}

const DAYS = [
  { key: 'Dush', nameUz: 'Dushanba', short: 'Dush' },
  { key: 'Sesh', nameUz: 'Seshanba', short: 'Sesh' },
  { key: 'Chor', nameUz: 'Chorshanba', short: 'Chor' },
  { key: 'Pay', nameUz: 'Payshanba', short: 'Pay' },
  { key: 'Jum', nameUz: 'Juma', short: 'Jum' },
  { key: 'Shan', nameUz: 'Shanba', short: 'Shan' },
];

const TIME_SLOTS = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:30 - 18:00',
  '18:30 - 20:00',
];

// Helper to normalize group schedule strings into day/time slots
function parseGroupSchedule(group: Group): ParsedSlot[] {
  const sched = (group.schedule || '').toLowerCase();
  const slots: ParsedSlot[] = [];

  // Determine time slot
  let matchedTime = '18:30 - 20:00';
  if (sched.includes('09:00') || sched.includes('10:00')) {
    matchedTime = '09:00 - 10:30';
  } else if (sched.includes('11:00') || sched.includes('12:00')) {
    matchedTime = '11:00 - 12:30';
  } else if (sched.includes('14:00') || sched.includes('15:00')) {
    matchedTime = '14:00 - 15:30';
  } else if (sched.includes('16:30') || sched.includes('17:00')) {
    matchedTime = '16:30 - 18:00';
  } else if (sched.includes('18:30') || sched.includes('19:00') || sched.includes('20:00')) {
    matchedTime = '18:30 - 20:00';
  }

  // Determine days
  const hasMon = sched.includes('mon') || sched.includes('dush');
  const hasTue = sched.includes('tue') || sched.includes('sesh');
  const hasWed = sched.includes('wed') || sched.includes('chor');
  const hasThu = sched.includes('thu') || sched.includes('pay');
  const hasFri = sched.includes('fri') || sched.includes('jum');
  const hasSat = sched.includes('sat') || sched.includes('shan');

  // If MWF pattern
  if (hasMon || (!hasTue && !hasThu && !hasSat)) {
    slots.push({ day: 'Dush', dayIndex: 0, timeSlot: matchedTime, group });
    slots.push({ day: 'Chor', dayIndex: 2, timeSlot: matchedTime, group });
    slots.push({ day: 'Jum', dayIndex: 4, timeSlot: matchedTime, group });
  } else {
    // TTS pattern
    slots.push({ day: 'Sesh', dayIndex: 1, timeSlot: matchedTime, group });
    slots.push({ day: 'Pay', dayIndex: 3, timeSlot: matchedTime, group });
    slots.push({ day: 'Shan', dayIndex: 5, timeSlot: matchedTime, group });
  }

  return slots;
}

export const WeeklyTimetable: React.FC<WeeklyTimetableProps> = ({
  groups,
  students = [],
  onSelectGroup,
  userGroupId,
  isStudentView = false,
}) => {
  const [selectedCampus, setSelectedCampus] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // Filter groups
  const displayGroups = groups.filter(g => {
    if (userGroupId && g.id !== userGroupId) return false;
    if (selectedLevel !== 'all' && g.level !== selectedLevel) return false;
    if (selectedCampus !== 'all') {
      const room = (g.room || '').toLowerCase();
      if (!room.includes(selectedCampus.toLowerCase())) return false;
    }
    return true;
  });

  // Collect parsed slots
  const allSlots: ParsedSlot[] = [];
  displayGroups.forEach(g => {
    allSlots.push(...parseGroupSchedule(g));
  });

  const getLevelColor = (lvl: string) => {
    switch (lvl) {
      case 'A1':
      case 'A2':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400';
      case 'B1':
        return 'bg-blue-50 text-blue-800 border-blue-200 hover:border-blue-400';
      case 'B2':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:border-indigo-400';
      case 'C1':
      case 'C2':
        return 'bg-purple-50 text-purple-800 border-purple-200 hover:border-purple-400';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-400';
    }
  };

  const getBadgeColor = (lvl: string) => {
    switch (lvl) {
      case 'A1':
      case 'A2':
        return 'bg-emerald-600 text-white';
      case 'B1':
        return 'bg-blue-600 text-white';
      case 'B2':
        return 'bg-indigo-600 text-white';
      case 'C1':
      case 'C2':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-slate-700 text-white';
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Filter Bar (if not student individual view) */}
      {!isStudentView && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span className="font-extrabold text-sm text-slate-900">
              Haftalik Dars Jadvali (Interactive Timetable)
            </span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold">
              {displayGroups.length} ta guruh
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-500 font-semibold">Filial:</span>
              <select
                value={selectedCampus}
                onChange={(e) => setSelectedCampus(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden"
              >
                <option value="all">Barcha filiallar</option>
                <option value="oybek">Oybek filiali</option>
                <option value="chorsu">Chorsu filiali</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-slate-500 font-semibold">Daraja:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden"
              >
                <option value="all">Barcha CEFR</option>
                <option value="A1">A1 Beginner</option>
                <option value="A2">A2 Elementary</option>
                <option value="B1">B1 Intermediate</option>
                <option value="B2">B2 Upper-Int</option>
                <option value="C1">C1 Advanced</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Timetable Grid */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
              <th className="py-3 px-4 w-32 border-r border-slate-200 text-center">Vaqt / Soat</th>
              {DAYS.map((day) => (
                <th key={day.key} className="py-3 px-3 text-center border-r last:border-r-0 border-slate-200">
                  <div className="font-extrabold text-slate-900">{day.nameUz}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{day.short}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {TIME_SLOTS.map((slotTime) => (
              <tr key={slotTime} className="hover:bg-slate-50/50 transition">
                {/* Time column */}
                <td className="py-3 px-3 font-bold text-slate-700 bg-slate-50/60 border-r border-slate-200 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{slotTime}</span>
                  </div>
                </td>

                {/* 6 Day columns */}
                {DAYS.map((day) => {
                  const matchingSlots = allSlots.filter(
                    (s) => s.day === day.key && s.timeSlot === slotTime
                  );

                  return (
                    <td
                      key={day.key}
                      className="py-2 px-2 border-r last:border-r-0 border-slate-100 align-top min-h-[90px]"
                    >
                      {matchingSlots.length === 0 ? (
                        <div className="h-14 rounded-xl border border-dashed border-slate-100 flex items-center justify-center text-[11px] text-slate-300 font-medium">
                          Bo'sh
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          {matchingSlots.map((slot, idx) => {
                            const studentCount = students.filter(st => st.group_id === slot.group.id).length || slot.group.students_count || 12;
                            return (
                              <div
                                key={`${slot.group.id}-${idx}`}
                                onClick={() => onSelectGroup && onSelectGroup(slot.group)}
                                className={`p-2.5 rounded-xl border transition shadow-2xs cursor-pointer ${getLevelColor(
                                  slot.group.level
                                )}`}
                              >
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span
                                    className={`px-1.5 py-0.2 rounded text-[10px] font-black ${getBadgeColor(
                                      slot.group.level
                                    )}`}
                                  >
                                    {slot.group.level}
                                  </span>
                                  <span className="text-[10px] font-semibold text-slate-500 flex items-center gap-0.5">
                                    <Users className="w-3 h-3" />
                                    {studentCount} / {slot.group.capacity || 14}
                                  </span>
                                </div>

                                <div className="font-bold text-slate-900 leading-snug line-clamp-1">
                                  {slot.group.name}
                                </div>

                                <div className="mt-1 text-[11px] text-slate-600 flex items-center gap-1 truncate">
                                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                                  <span className="truncate">{slot.group.room || 'Room 304'}</span>
                                </div>

                                <div className="mt-0.5 text-[10px] text-slate-500 truncate">
                                  Ustoz: {slot.group.teacher_name || 'Malika Karimova'}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
