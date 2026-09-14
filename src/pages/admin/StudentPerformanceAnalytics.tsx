import React, { useState, useMemo } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, 
  ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, ReferenceLine, Cell, PieChart, Pie
} from 'recharts';
import { 
  TrendingUp, Clock, CheckCircle2, Award, Users, Filter, 
  Search, ArrowUpRight, ArrowDownRight, Calendar, Sparkles, 
  Download, Eye, BookOpen, Headphones, Mic, PenTool, Layers, 
  HelpCircle, ChevronRight, X, ShieldAlert, BarChart3, Star
} from 'lucide-react';
import { 
  SEED_DAILY_LEARNING_TIME, 
  SEED_DAY_OF_WEEK_ENGAGEMENT, 
  SEED_MODULE_COMPLETION, 
  SEED_GROUP_COMPLETIONS, 
  SEED_QUIZ_CATEGORIES, 
  SEED_WEEKLY_QUIZ_TREND, 
  SEED_STUDENT_PERFORMANCE_RECORDS, 
  StudentPerformanceRecord,
  calculateAnalyticsMetrics
} from '../../data/studentPerformanceData';

export const StudentPerformanceAnalytics: React.FC = () => {
  // Filters & controls
  const [timeRange, setTimeRange] = useState<'7d' | '14d' | '30d'>('14d');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeMetricTab, setActiveMetricTab] = useState<'all' | 'time' | 'modules' | 'quizzes'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'mastery' | 'on_track' | 'needs_support'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentPerformanceRecord | null>(null);

  // Groups list for filter dropdown
  const groupOptions = [
    { value: 'all', label: 'Barcha Guruhlar (Markaz bo\'yicha)' },
    { value: 'IELTS Intensive 7.5+ (Oybek)', label: 'IELTS Intensive 7.5+ (Oybek)' },
    { value: 'General English B2 (Chorsu)', label: 'General English B2 (Chorsu)' },
    { value: 'TOEFL iBT Mastery (Online)', label: 'TOEFL iBT Mastery (Online)' },
    { value: 'Kids English Champions', label: 'Kids English Champions' }
  ];

  // Filter daily learning time by selected time range
  const filteredDailyData = useMemo(() => {
    const totalPoints = SEED_DAILY_LEARNING_TIME.length;
    let sliceCount = 14;
    if (timeRange === '7d') sliceCount = 7;
    if (timeRange === '30d') sliceCount = 30;

    const sliced = SEED_DAILY_LEARNING_TIME.slice(totalPoints - sliceCount);

    // If a group is selected, adjust values proportionally
    if (selectedGroup !== 'all') {
      const multiplier = selectedGroup.includes('IELTS') ? 1.15 : selectedGroup.includes('Kids') ? 0.75 : 0.95;
      return sliced.map(d => ({
        ...d,
        avgMinutesPerStudent: Math.round(d.avgMinutesPerStudent * multiplier),
        totalMinutes: Math.round(d.totalMinutes * 0.35 * multiplier),
        speakingMinutes: Math.round(d.speakingMinutes * multiplier),
        listeningMinutes: Math.round(d.listeningMinutes * multiplier),
        vocabMinutes: Math.round(d.vocabMinutes * multiplier)
      }));
    }
    return sliced;
  }, [timeRange, selectedGroup]);

  // Filter student performance records
  const filteredStudents = useMemo(() => {
    return SEED_STUDENT_PERFORMANCE_RECORDS.filter(student => {
      const matchesGroup = selectedGroup === 'all' || student.groupName === selectedGroup;
      const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            student.groupName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesStatus && matchesSearch;
    });
  }, [selectedGroup, statusFilter, searchQuery]);

  // Calculate executive KPI metrics
  const metrics = useMemo(() => {
    return calculateAnalyticsMetrics(filteredStudents, filteredDailyData);
  }, [filteredStudents, filteredDailyData]);

  // Format minutes into human readable text
  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m} daqiqa`;
    return `${h} soat ${m > 0 ? `${m} daq` : ''}`;
  };

  // CSV Report Exporter
  const handleExportCSV = () => {
    const headers = ['Ism', 'Guruh', 'Daraja', 'Kunlik O\'rtacha (daq)', 'Umumiy Soat', 'Modul Tugatish %', 'Test O\'rtacha %', 'Testlar Soni', 'Holat'];
    const rows = filteredStudents.map(s => [
      `"${s.name}"`,
      `"${s.groupName}"`,
      `"${s.level}"`,
      s.avgDailyMinutes,
      s.totalTimeHours,
      s.moduleCompletionRate,
      s.avgQuizScore,
      s.quizzesCompleted,
      `"${s.status}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Premier_School_Student_Performance_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner & Title */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-indigo-500/20 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                Recharts Analytics Suite
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-indigo-300 font-semibold">Administrator Paneli</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              O'quvchilar O'zlashtirish Analitikasi (Performance Dashboard)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              O'quvchilarning platformadagi kunlik o'rganish vaqti, o'quv modullarini tugatish sur'ati va test sinovlaridagi o'rtacha ballarini dinamik vizuallash.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Eksport (CSV Hisobot)</span>
            </button>
          </div>
        </div>

        {/* Global Controls Bar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          {/* Metric View Tabs */}
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveMetricTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeMetricTab === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Barcha Ko'rsatkichlar
            </button>
            <button
              onClick={() => setActiveMetricTab('time')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeMetricTab === 'time' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Kunlik Vaqt (Daily Time)
            </button>
            <button
              onClick={() => setActiveMetricTab('modules')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeMetricTab === 'modules' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Modullar Tugallanishi
            </button>
            <button
              onClick={() => setActiveMetricTab('quizzes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeMetricTab === 'quizzes' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Test Ballari (Quiz Scores)
            </button>
          </div>

          {/* Group & Time Range Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Group Selector */}
            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
              <Users className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
              >
                {groupOptions.map(g => (
                  <option key={g.value} value={g.value} className="bg-slate-900 text-white">
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Range Selector */}
            <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                  timeRange === '7d' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                7 kun
              </button>
              <button
                onClick={() => setTimeRange('14d')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                  timeRange === '14d' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                14 kun
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                  timeRange === '30d' ? 'bg-emerald-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                30 kun
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Key Executive Performance KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Daily Learning Time */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kunlik O'rtacha Vaqt
            </span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {metrics.avgDailyMinutes} daqiqa/kun
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> +14.2% o'tgan haftaga nisbatan
            </span>
            <span className="text-slate-400 text-[11px]">Maqsad: 45 daq</span>
          </div>
        </div>

        {/* KPI 2: Module Completion Rate */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Modullar Tugatilishi
            </span>
            <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {metrics.avgCompletionRate}%
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-sky-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Yuqori o'zlashtirish
            </span>
            <span className="text-slate-400 text-[11px]">Benchmark: 75%</span>
          </div>
        </div>

        {/* KPI 3: Average Quiz Score */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              O'rtacha Test Balli
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {metrics.avgQuizScore}%
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +3.8% bu oy
            </span>
            <span className="text-slate-400 text-[11px]">O'tish chegarasi: 70%</span>
          </div>
        </div>

        {/* KPI 4: Total Quizzes & Student Cohort */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Topshirilgan Testlar
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Star className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {metrics.totalQuizzesTaken} ta test
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-indigo-600 font-bold">
              {metrics.masteryCount} nafar a'lochi (90%+)
            </span>
            <span className="text-slate-400 text-[11px]">{metrics.totalStudents} o'quvchi</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: DAILY LEARNING TIME VISUALIZATION (RECHARTS AREA & STACKED) */}
      {/* ========================================================================= */}
      {(activeMetricTab === 'all' || activeMetricTab === 'time') && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    Kunlik O'rganish Vaqti Dinamikasi (Daily Learning Time)
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Har bir o'quvchining o'rtacha kunlik sarflagan vaqti (daqiqa) va o'rnatilgan 45 daqiqalik maqsadli chegara (Benchmark)
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold">
                <div className="flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100">
                  <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block" />
                  <span>Haqiqiy Sarflangan Vaqt</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100">
                  <span className="w-3 h-0.5 bg-emerald-500 inline-block" />
                  <span>Maqsadli Chegara (45 daq)</span>
                </div>
              </div>
            </div>

            {/* Recharts Area & Line Composed Chart */}
            <div className="w-full h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={filteredDailyData}
                  margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="timeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="speakingGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="dayLabel" 
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
                    axisLine={{ stroke: '#cbd5e1' }}
                    tickLine={false}
                  />
                  <YAxis 
                    unit=" d" 
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 'dataMax + 15']}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 text-xs space-y-1.5 min-w-[200px]">
                            <div className="font-extrabold text-sm text-indigo-300 border-b border-slate-800 pb-1 flex items-center justify-between">
                              <span>{data.date}</span>
                              <span className="text-[10px] text-slate-400">{data.activeLearners} o'quvchi faol</span>
                            </div>
                            <div className="flex justify-between font-bold text-slate-200">
                              <span>O'rtacha Vaqt:</span>
                              <span className="text-emerald-400 font-extrabold">{data.avgMinutesPerStudent} daqiqa/talaba</span>
                            </div>
                            <div className="flex justify-between text-slate-300 text-[11px]">
                              <span>Markaz Jami:</span>
                              <span>{formatTime(data.totalMinutes)}</span>
                            </div>
                            <div className="pt-1.5 border-t border-slate-800 space-y-0.5 text-[10px] text-slate-400">
                              <div className="flex justify-between">
                                <span className="text-emerald-300">🎙️ Speaking & Hub:</span>
                                <span>{data.speakingMinutes} daq</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sky-300">🎧 Tactics Listening:</span>
                                <span>{data.listeningMinutes} daq</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-amber-300">📚 4000 Words & SRS:</span>
                                <span>{data.vocabMinutes} daq</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <ReferenceLine 
                    y={45} 
                    stroke="#10b981" 
                    strokeDasharray="4 4" 
                    strokeWidth={2}
                    label={{ value: 'Maqsad: 45 daq', fill: '#059669', fontSize: 10, position: 'insideTopRight' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="avgMinutesPerStudent"
                    name="O'rtacha Vaqt (daqiqa)"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#timeGradient)"
                  />
                  <Line
                    type="monotone"
                    dataKey="avgMinutesPerStudent"
                    stroke="#4338ca"
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#4f46e5', strokeWidth: 2, stroke: '#ffffff' }}
                    activeDot={{ r: 7, fill: '#10b981', stroke: '#ffffff', strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sub-grid: Modullar bo'yicha vaqt taqsimoti & Hafta kunlari */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. Modullar bo'yicha daqiqalar (Stacked Bar Chart) */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Modullar Bo'yicha Vaqt Taqsimoti (Stack breakdown)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    O'quvchilar vaqtining Speaking, Listening, Vocab va Grammar o'rtasidagi nisbati
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  So'nggi 7 kun
                </span>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={filteredDailyData.slice(-7)}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="dayLabel" tick={{ fill: '#64748b', fontSize: 10 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
                    <Tooltip 
                      formatter={(val: any, name: any) => [`${val} daqiqa`, name]}
                      contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                    />
                    <Legend 
                      iconType="circle" 
                      wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                    />
                    <Bar dataKey="speakingMinutes" name="Speaking AI" stackId="a" fill="#10b981" />
                    <Bar dataKey="listeningMinutes" name="Tactics Listening" stackId="a" fill="#0284c7" />
                    <Bar dataKey="vocabMinutes" name="4000 Words" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="readingMinutes" name="Reading" stackId="a" fill="#8b5cf6" />
                    <Bar dataKey="grammarQuizMinutes" name="Grammar & Quizzes" stackId="a" fill="#ec4899" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 2. Hafta kunlari bo'yicha o'rganish faolligi */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Hafta Kunlari Faolligi
                  </h4>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    Peak Times
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Haftaning qaysi kunlarida o'quvchilar ko'proq dars qilishadi
                </p>

                <div className="w-full h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SEED_DAY_OF_WEEK_ENGAGEMENT} layout="vertical" margin={{ left: 10, right: 10, top: 0, bottom: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="day" type="category" width={75} tick={{ fontSize: 10, fill: '#475569' }} axisLine={false} tickLine={false} />
                      <Tooltip formatter={(val: any) => [`${val} daq o'rtacha`, 'Kunlik vaqt']} />
                      <Bar dataKey="avgMinutes" fill="#4f46e5" radius={[0, 6, 6, 0]}>
                        {SEED_DAY_OF_WEEK_ENGAGEMENT.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.avgMinutes >= 55 ? '#059669' : entry.avgMinutes >= 45 ? '#4f46e5' : '#94a3b8'} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                <span className="font-bold text-slate-700 block">⚡ Eng Yuqori Faollik Vaqti:</span>
                <span className="text-slate-500 text-[11px]">
                  Chorshanba va Seshanba kunlari soat 18:30 dan 21:30 gacha markazda eng yuqori mustaqil shug'ullanish qayd etilmoqda.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: MODULE COMPLETION RATES VISUALIZATION (RECHARTS BAR & RADIAL) */}
      {/* ========================================================================= */}
      {(activeMetricTab === 'all' || activeMetricTab === 'modules') && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    O'quv Modullari Tugallanish Ko'rsatkichlari (Module Completion Rates)
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Har bir modul bo'yicha umumiy reja va darslarning talabalar tomonidan o'zlashtirilish darajasi (%)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold">Benchmark:</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                  Target: 75%
                </span>
              </div>
            </div>

            {/* Horizontal / Vertical Recharts Bar Chart */}
            <div className="w-full h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={SEED_MODULE_COMPLETION}
                  margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="shortName" 
                    tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }}
                    axisLine={{ stroke: '#cbd5e1' }}
                    tickLine={false}
                  />
                  <YAxis 
                    unit="%" 
                    domain={[0, 100]}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 text-xs space-y-2 min-w-[220px]">
                            <div className="font-bold text-sm text-sky-300 border-b border-slate-800 pb-1">
                              {data.name}
                            </div>
                            <div className="flex justify-between font-extrabold text-slate-100">
                              <span>Tugallanish Foizi:</span>
                              <span className="text-emerald-400">{data.completionRate}%</span>
                            </div>
                            <div className="flex justify-between text-slate-300 text-[11px]">
                              <span>O'rtacha Bajarilgan:</span>
                              <span>{data.completedUnitsAvg} / {data.totalUnitsOrItems} unit</span>
                            </div>
                            <div className="flex justify-between text-slate-300 text-[11px]">
                              <span>Faol Talabalar:</span>
                              <span>{data.activeStudents} nafar</span>
                            </div>
                            <div className="pt-1.5 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
                              <span>Tugatilgan: {data.statusBreakdown.completed}%</span>
                              <span>Jarayonda: {data.statusBreakdown.inProgress}%</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <ReferenceLine 
                    y={75} 
                    stroke="#10b981" 
                    strokeDasharray="4 4" 
                    strokeWidth={2}
                    label={{ value: 'Target 75%', fill: '#059669', fontSize: 10, position: 'insideTopRight' }}
                  />
                  <Bar dataKey="completionRate" name="Tugallanish Ko'rsatkichi (%)" radius={[8, 8, 0, 0]}>
                    {SEED_MODULE_COMPLETION.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.completionRate >= 80 ? '#059669' : entry.completionRate >= 70 ? '#0284c7' : '#d97706'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sub-grid: Guruhlar kesimidagi taqqoslash */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-extrabold text-base text-slate-900">
                  Guruhlar Kesimida Modullar O'zlashtirilishi
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Har bir guruhning asosiy fanlar bo'yicha progressi
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
                Group Benchmark
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Guruh Nomi</th>
                    <th className="py-3 px-4">Tactics Listening</th>
                    <th className="py-3 px-4">Speaking AI</th>
                    <th className="py-3 px-4">4000 Words</th>
                    <th className="py-3 px-4">Reading</th>
                    <th className="py-3 px-4">Grammar</th>
                    <th className="py-3 px-4 text-right">Umumiy O'rtacha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {SEED_GROUP_COMPLETIONS.map((gc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition">
                      <td className="py-3.5 px-4 font-extrabold text-slate-900">
                        {gc.groupName}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                          {gc.listening}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {gc.speaking}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                          {gc.vocab}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                          {gc.reading}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded">
                          {gc.grammar}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 font-black text-xs border border-indigo-200">
                          {gc.overallAvg}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: AVERAGE QUIZ SCORES VISUALIZATION (RECHARTS LINE & BAR) */}
      {/* ========================================================================= */}
      {(activeMetricTab === 'all' || activeMetricTab === 'quizzes') && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    O'rtacha Test va Sinov Ballari (Average Quiz Scores)
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Har bir yo'nalish bo'yicha talabalarning o'rtacha ballari, o'tish ko'rsatkichi (Passing Rate) va eng yuqori natijalar
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  O'rtacha O'tish Ko'rsatkichi: 93.8%
                </span>
              </div>
            </div>

            {/* Quiz Category Bar Chart */}
            <div className="w-full h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={SEED_QUIZ_CATEGORIES}
                  margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="shortName" 
                    tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }}
                    axisLine={{ stroke: '#cbd5e1' }}
                    tickLine={false}
                  />
                  <YAxis 
                    unit="%" 
                    domain={[50, 100]}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 text-xs space-y-1.5 min-w-[220px]">
                            <div className="font-bold text-sm text-emerald-400 border-b border-slate-800 pb-1">
                              {data.name}
                            </div>
                            <div className="flex justify-between font-extrabold text-slate-100">
                              <span>O'rtacha Ball:</span>
                              <span className="text-emerald-400 text-sm">{data.avgScore}%</span>
                            </div>
                            <div className="flex justify-between text-slate-300 text-[11px]">
                              <span>O'tish Foizi (&gt;=70%):</span>
                              <span className="text-sky-300 font-bold">{data.passingRate}%</span>
                            </div>
                            <div className="flex justify-between text-slate-300 text-[11px]">
                              <span>Jami Urinishlar:</span>
                              <span>{data.totalAttempts} marta</span>
                            </div>
                            <div className="flex justify-between text-slate-400 text-[10px] pt-1 border-t border-slate-800">
                              <span>Max: {data.highestScore}%</span>
                              <span>Min: {data.lowestScore}%</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <ReferenceLine 
                    y={70} 
                    stroke="#ef4444" 
                    strokeDasharray="4 4" 
                    strokeWidth={2}
                    label={{ value: 'Passing Grade: 70%', fill: '#ef4444', fontSize: 10, position: 'insideBottomRight' }}
                  />
                  <Bar dataKey="avgScore" name="O'rtacha Ball (%)" radius={[8, 8, 0, 0]}>
                    {SEED_QUIZ_CATEGORIES.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.avgScore >= 85 ? '#059669' : entry.avgScore >= 75 ? '#3b82f6' : '#f59e0b'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sub-grid: 8-Haftalik Test Ballari O'sish Dinamikasi (LineChart) & Ballar Taqsimoti */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. 8-Haftalik O'sish Grafigi (LineChart) */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Haftalik Test Ballari O'sish Tendensiyasi (8-Week Trend)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    O'quvchilarning haftadan-haftaga test topshirish tajribasi va o'rtacha ballari o'sishi
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  +10.6% Progress
                </span>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={SEED_WEEKLY_QUIZ_TREND}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="week" tick={{ fill: '#64748b', fontSize: 10 }} />
                    <YAxis domain={[70, 100]} unit="%" tick={{ fill: '#64748b', fontSize: 10 }} />
                    <Tooltip 
                      formatter={(val: any, name: any) => [`${val}%`, name]}
                      contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Line 
                      type="monotone" 
                      dataKey="avgScore" 
                      name="O'rtacha Ball" 
                      stroke="#4f46e5" 
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#4f46e5' }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="topScore" 
                      name="Eng Yuqori Natija" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ r: 3, fill: '#10b981' }}
                    />
                    <ReferenceLine y={75} stroke="#94a3b8" strokeDasharray="3 3" label={{ value: 'Target 75%', fontSize: 9, fill: '#94a3b8' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 2. Ballar Taqvimi / Sifat Darajasi */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Ballar Oralig'i Taqsimoti
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 mb-4">
                  Talabalarning umumiy test sinovlaridagi foizlari
                </p>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-emerald-950 text-xs block">90 - 100% (A'lo / Mastery)</span>
                      <span className="text-[10px] text-emerald-700">Imtihonga to'liq tayyor</span>
                    </div>
                    <span className="text-sm font-black text-emerald-700">34.5%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-blue-950 text-xs block">75 - 89% (Yaxshi / Proficient)</span>
                      <span className="text-[10px] text-blue-700">Mustahkam bilim bazasi</span>
                    </div>
                    <span className="text-sm font-black text-blue-700">51.8%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-amber-950 text-xs block">60 - 74% (Qoniqarli)</span>
                      <span className="text-[10px] text-amber-700">Qo'shimcha takrorlash zarur</span>
                    </div>
                    <span className="text-sm font-black text-amber-700">10.6%</span>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-between">
                    <div>
                      <span className="font-extrabold text-rose-950 text-xs block">&lt; 60% (Yordam kerak)</span>
                      <span className="text-[10px] text-rose-700">O'qituvchi nazorati lozim</span>
                    </div>
                    <span className="text-sm font-black text-rose-700">3.1%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] text-slate-400">
                  Umumiy test topshirish sifati: <strong className="text-slate-700 font-bold">Yuqori (Tier-A)</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: STUDENT PERFORMANCE ROSTER & LEADERBOARD TABLE */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-black text-lg text-slate-900 tracking-tight">
              O'quvchilar Shaxsiy O'zlashtirish Jurnali (Student Matrix)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Har bir o'quvchining sarflagan vaqti, modul progressi, o'rtacha balli va hozirgi o'qish holati
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  statusFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Barchasi ({SEED_STUDENT_PERFORMANCE_RECORDS.length})
              </button>
              <button
                onClick={() => setStatusFilter('mastery')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  statusFilter === 'mastery' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                A'lochi (90%+)
              </button>
              <button
                onClick={() => setStatusFilter('on_track')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  statusFilter === 'on_track' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Yaxshi
              </button>
              <button
                onClick={() => setStatusFilter('needs_support')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  statusFilter === 'needs_support' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Yordam kerak
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ism yoki guruh bo'yicha qidiruv..."
                className="pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition w-56"
              />
            </div>
          </div>
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">O'quvchi</th>
                <th className="py-3 px-4">Guruh & Daraja</th>
                <th className="py-3 px-4">Kunlik O'rtacha</th>
                <th className="py-3 px-4">Modullar Tugallanishi</th>
                <th className="py-3 px-4">Test Balli</th>
                <th className="py-3 px-4">Testlar</th>
                <th className="py-3 px-4">Holat</th>
                <th className="py-3 px-4 text-right">Batafsil</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/70 transition">
                  {/* Student Info */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <span className="font-extrabold text-slate-900 block">{student.name}</span>
                        <span className="text-[10px] text-slate-400">{student.email}</span>
                      </div>
                    </div>
                  </td>

                  {/* Group & Level */}
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-800 block">{student.groupName}</span>
                    <span className="text-[10px] text-indigo-600 font-semibold">{student.level}</span>
                  </td>

                  {/* Daily Learning Time */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 font-extrabold text-slate-900">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{student.avgDailyMinutes} daq/kun</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Jami: {student.totalTimeHours} soat</span>
                  </td>

                  {/* Module Completion */}
                  <td className="py-3.5 px-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span className="text-slate-700">{student.moduleCompletionRate}%</span>
                        <span className="text-slate-400">Target 75%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            student.moduleCompletionRate >= 90 ? 'bg-emerald-500' :
                            student.moduleCompletionRate >= 75 ? 'bg-indigo-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${student.moduleCompletionRate}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Average Quiz Score */}
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-md font-black text-xs border ${
                      student.avgQuizScore >= 90 
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                        : student.avgQuizScore >= 80
                        ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      {student.avgQuizScore}%
                    </span>
                  </td>

                  {/* Quizzes Count */}
                  <td className="py-3.5 px-4 text-slate-600 font-semibold">
                    <span>{student.quizzesCompleted} ta test</span>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    {student.status === 'mastery' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 w-fit">
                        <Award className="w-3 h-3" /> A'lochi
                      </span>
                    )}
                    {student.status === 'on_track' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 w-fit">
                        <CheckCircle2 className="w-3 h-3" /> Yaxshi
                      </span>
                    )}
                    {student.status === 'needs_support' && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 w-fit">
                        <ShieldAlert className="w-3 h-3" /> Yordam lozim
                      </span>
                    )}
                  </td>

                  {/* Action Button */}
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition cursor-pointer"
                      title="Batafsil tahlilni ko'rish"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DETAILED STUDENT INSPECTOR MODAL */}
      {/* ========================================================================= */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
              <img 
                src={selectedStudent.avatar} 
                alt={selectedStudent.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-500"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-slate-900">
                    {selectedStudent.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                    {selectedStudent.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedStudent.groupName} • {selectedStudent.email}
                </p>
              </div>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-3 gap-3 my-5">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Kunlik O'rtacha</span>
                <span className="text-base font-black text-indigo-600">{selectedStudent.avgDailyMinutes} daq</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Modul Tugatish</span>
                <span className="text-base font-black text-emerald-600">{selectedStudent.moduleCompletionRate}%</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">O'rtacha Test Balli</span>
                <span className="text-base font-black text-purple-600">{selectedStudent.avgQuizScore}%</span>
              </div>
            </div>

            {/* Modules Progress Breakdown */}
            <div className="space-y-3 mb-6">
              <h4 className="font-extrabold text-sm text-slate-800">
                Modullar Bo'yicha Progress:
              </h4>

              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>🎧 Tactics for Listening (Oxford)</span>
                    <span>{selectedStudent.moduleProgress.listeningTactics}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full" style={{ width: `${selectedStudent.moduleProgress.listeningTactics}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>🎙️ Live Speaking w/ Mr. Safoyev</span>
                    <span>{selectedStudent.moduleProgress.speakingSafoyev}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${selectedStudent.moduleProgress.speakingSafoyev}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>📚 4000 Essential English Words</span>
                    <span>{selectedStudent.moduleProgress.vocab4000}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${selectedStudent.moduleProgress.vocab4000}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>✍️ Grammar & Diagnostic Mastery</span>
                    <span>{selectedStudent.moduleProgress.grammarMastery}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: `${selectedStudent.moduleProgress.grammarMastery}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Quizzes List */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm text-slate-800">
                Yaqinda Topshirilgan Test Natijalari:
              </h4>

              <div className="space-y-2">
                {selectedStudent.recentQuizzes.map(q => (
                  <div key={q.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block">{q.name}</span>
                      <span className="text-[10px] text-slate-400">{q.date} • {q.module}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-black ${
                        q.score >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        q.score >= 70 ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {q.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
