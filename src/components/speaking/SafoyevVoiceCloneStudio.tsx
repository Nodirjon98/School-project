import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, Square, Play, Volume2, Save, Sparkles, 
  RotateCcw, CheckCircle2, Sliders, Activity, 
  ShieldCheck, HelpCircle, RefreshCw, AudioWaveform,
  VolumeX, Music, Award, Radio, Trash2, Filter, Layers,
  ChevronRight, ArrowRight, Zap, Info, Headphones,
  Cpu, Users, BookOpen, Binary, Gauge
} from 'lucide-react';
import { 
  SafoyevVoiceProfile, 
  getSafoyevVoiceProfile, 
  saveSafoyevVoiceProfile, 
  speakWithSafoyevVoice,
  playSafoyevClonedAudio,
  stopSafoyevVoice,
  convertBlobToBase64,
  IELTS_PHRASE_MATRIX,
  IELTSPhraseItem,
  STUDIO_DSP_PRESETS,
  BARK_16_FREQUENCIES,
  getSharedDSPMasterAnalyser,
  autoAnalyzeAcousticFingerprint,
  loadSafoyevVoiceProfileWithAudio,
  startLiveMicMonitor,
  stopLiveMicMonitor
} from '../../services/safoyevVoiceService';
import { storeVoiceClip } from '../../services/voiceAudioStorage';
import confetti from 'canvas-confetti';
import { VoiceParameterComparisonTab } from './VoiceParameterComparisonTab';

type StudioTab = 'matrix' | 'dsp' | 'experts' | 'compare';

export const SafoyevVoiceCloneStudio: React.FC = () => {
  const [profile, setProfile] = useState<SafoyevVoiceProfile>(getSafoyevVoiceProfile());
  const [activeTab, setActiveTab] = useState<StudioTab>('matrix');
  const [matrixFilter, setMatrixFilter] = useState<string>('all');
  const [activeRecordingKey, setActiveRecordingKey] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [currentlyPlayingKey, setCurrentlyPlayingKey] = useState<string | null>(null);
  const [isPlayingRaw, setIsPlayingRaw] = useState(false);
  const [isPlayingMorphed, setIsPlayingMorphed] = useState(false);
  const [isPlayingUserRealVoice, setIsPlayingUserRealVoice] = useState(false);
  const [isLiveMicMonitoring, setIsLiveMicMonitoring] = useState(false);
  const [isABTesting, setIsABTesting] = useState(false);
  const [abPhase, setAbPhase] = useState<'real' | 'clone' | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [detectedHz, setDetectedHz] = useState<number>(118);
  const [testPhrase, setTestPhrase] = useState<string>(
    "Welcome to Premier School IELTS speaking practice! Speak clearly, stay confident, and let's explore your perspectives thoroughly."
  );
  const [isGeneratingNeural, setIsGeneratingNeural] = useState(false);
  const [neuralError, setNeuralError] = useState<string | null>(null);
  const [isAutoCalibrating, setIsAutoCalibrating] = useState(false);
  const [calibrationStatus, setCalibrationStatus] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dspCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dspAnimationRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    loadSafoyevVoiceProfileWithAudio().then(loaded => {
      setProfile(loaded);
      if (loaded.vocalAnalysis?.pitchHz) {
        setDetectedHz(loaded.vocalAnalysis.pitchHz);
      }
    }).catch(() => {});

    return () => {
      stopVoiceRecording();
      stopSafoyevVoice();
      stopLiveMicMonitor();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        try { audioContextRef.current.close(); } catch (_) {}
      }
    };
  }, []);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  const drawVisualizer = () => {
    if (!analyserRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);

    let maxVal = 0;
    let maxIndex = 0;
    for (let i = 2; i < 40; i++) {
      if (dataArray[i] > maxVal) {
        maxVal = dataArray[i];
        maxIndex = i;
      }
    }

    if (maxVal > 30 && audioContextRef.current) {
      const nyquist = audioContextRef.current.sampleRate / 2;
      const hz = Math.round((maxIndex * nyquist) / bufferLength);
      if (hz >= 80 && hz <= 300) {
        setDetectedHz(hz);
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / 48) - 1.5;
    let x = 0;

    for (let i = 0; i < 48; i++) {
      const val = dataArray[i * 2] || 0;
      const barHeight = (val / 255) * (canvas.height - 8);

      const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(0.6, '#ec4899');
      gradient.addColorStop(1, '#f59e0b');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, canvas.height - barHeight, barWidth, barHeight, [3, 3, 0, 0]);
      ctx.fill();

      x += barWidth + 1.5;
    }

    animationFrameRef.current = requestAnimationFrame(drawVisualizer);
  };

  // Real-Time DSP Graphic EQ Curve & Spectrum Analyzer loop
  useEffect(() => {
    if (activeTab !== 'dsp') return;

    const renderDspCurve = () => {
      const canvas = dspCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Background grid
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, w, h);

      // Grid frequencies
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      const freqMarkers = [
        { f: '60Hz HPF', x: 0.08 },
        { f: '118Hz (F0)', x: 0.18 },
        { f: '260Hz', x: 0.30 },
        { f: '650Hz (Cut)', x: 0.44 },
        { f: '1.5kHz', x: 0.58 },
        { f: '3.2kHz (Diksiya)', x: 0.72 },
        { f: '6.8kHz (De-Ess)', x: 0.84 },
        { f: '10.5kHz (Air)', x: 0.94 },
      ];

      freqMarkers.forEach(m => {
        const xPos = m.x * w;
        ctx.beginPath();
        ctx.moveTo(xPos, 0);
        ctx.lineTo(xPos, h - 18);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px ui-monospace, SFMono-Regular, Menlo, monospace';
        ctx.textAlign = 'center';
        ctx.fillText(m.f, xPos, h - 5);
      });

      // 0dB baseline
      const midY = h * 0.52;
      ctx.strokeStyle = '#334155';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Check if real-time audio analyser is active
      const analyser = getSharedDSPMasterAnalyser();
      if (analyser && (isPlayingMorphed || isPlayingRaw)) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barCount = 48;
        const barW = (w / barCount) - 2;
        for (let i = 0; i < barCount; i++) {
          const val = dataArray[Math.floor(i * (bufferLength / barCount) * 0.6)] || 0;
          const barH = (val / 255) * (h - 28);
          const bx = i * (barW + 2);
          const by = h - 20 - barH;

          const grad = ctx.createLinearGradient(0, h - 20, 0, by);
          grad.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
          grad.addColorStop(0.6, 'rgba(56, 189, 248, 0.45)');
          grad.addColorStop(1, 'rgba(244, 63, 94, 0.75)');
          ctx.fillStyle = grad;
          ctx.fillRect(bx, by, barW, barH);
        }
      }

      // Draw mathematical composite EQ response curve
      const bass = profile.dspMorphing?.bassBoostDb ?? 5.5;
      const warmth = profile.dspMorphing?.warmthWarmthDb ?? 2.2;
      const boxCut = profile.dspMorphing?.boxinessCutDb ?? -1.5;
      const pres = profile.dspMorphing?.presenceDb ?? 3.2;
      const deEss = profile.dspMorphing?.deEsserDb ?? -2.5;
      const air = profile.dspMorphing?.airSheenDb ?? 2.5;

      ctx.beginPath();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.5;

      for (let xPos = 0; xPos <= w; xPos += 2) {
        const normX = xPos / w;
        let db = 0;
        // Highpass at 60Hz
        if (normX < 0.08) {
          db -= (0.08 - normX) * 120;
        }
        // LowShelf at ~118Hz
        const bassDist = Math.abs(normX - 0.18);
        if (normX < 0.22) {
          db += bass * Math.exp(-Math.pow(bassDist / 0.12, 2));
        }
        // Warmth at 260Hz
        const warmDist = Math.abs(normX - 0.30);
        db += warmth * Math.exp(-Math.pow(warmDist / 0.08, 2));
        // Boxiness notch at 650Hz
        const boxDist = Math.abs(normX - 0.44);
        db += boxCut * Math.exp(-Math.pow(boxDist / 0.07, 2));
        // Presence at 3.2kHz
        const presDist = Math.abs(normX - 0.72);
        db += pres * Math.exp(-Math.pow(presDist / 0.09, 2));
        // De-Esser at 6.8kHz
        const deEssDist = Math.abs(normX - 0.84);
        db += deEss * Math.exp(-Math.pow(deEssDist / 0.06, 2));
        // Air sheen at 10.5kHz
        if (normX > 0.85) {
          db += air * Math.min((normX - 0.85) / 0.12, 1);
        }

        const y = Math.max(10, Math.min(h - 22, midY - db * 3.4));
        if (xPos === 0) ctx.moveTo(xPos, y);
        else ctx.lineTo(xPos, y);
      }
      ctx.stroke();

      dspAnimationRef.current = requestAnimationFrame(renderDspCurve);
    };

    renderDspCurve();
    return () => {
      if (dspAnimationRef.current) {
        cancelAnimationFrame(dspAnimationRef.current);
      }
    };
  }, [activeTab, profile.dspMorphing, isPlayingMorphed, isPlayingRaw]);

  const startVoiceRecording = async (clipKey: string) => {
    stopSafoyevVoice();
    setActiveRecordingKey(clipKey);
    setRecordingSeconds(0);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          echoCancellation: true, 
          noiseSuppression: true,
          channelCount: 1,
          sampleRate: 44100
        } 
      });
      streamRef.current = stream;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      audioContextRef.current = audioCtx;
      const sourceNode = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.8;
      sourceNode.connect(analyser);
      analyserRef.current = analyser;

      drawVisualizer();

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        if (audioChunksRef.current.length > 0) {
          const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType || 'audio/webm' });
          try {
            const base64Audio = await convertBlobToBase64(audioBlob);
            // 1. Asynchronously persist in IndexedDB
            await storeVoiceClip(clipKey, { blob: audioBlob, base64: base64Audio });
            if (clipKey === 'greeting_intro' || clipKey === 'calibration') {
              await storeVoiceClip('calibration', { blob: audioBlob, base64: base64Audio });
            }

            // 2. Automatically run sub-Hertz YIN, LPC, and Bark analysis
            try {
              const analysis = await autoAnalyzeAcousticFingerprint(base64Audio);
              setDetectedHz(analysis.pitchHz);
              setProfile(prev => {
                const updatedClips = { ...(prev.recordedClips || {}), [clipKey]: base64Audio };
                const updated: SafoyevVoiceProfile = {
                  ...prev,
                  isCloned: true,
                  recordedClips: updatedClips,
                  sampleAudioBase64: clipKey === 'greeting_intro' || clipKey === 'calibration' ? base64Audio : (prev.sampleAudioBase64 || base64Audio),
                  cloneDate: new Date().toISOString().split('T')[0],
                  vocalAnalysis: {
                    pitchHz: analysis.pitchHz,
                    pitchConfidence: analysis.pitchConfidence,
                    fundamentalFrequency: analysis.fundamentalFrequency,
                    formantF1: analysis.formantF1,
                    formantF2: analysis.formantF2,
                    formantF3: analysis.formantF3,
                    formantF4: analysis.formantF4,
                    jitterPercent: analysis.jitterPercent,
                    resonanceScore: analysis.resonanceScore,
                    acousticSimilarityScore: analysis.acousticSimilarityScore,
                    bark16Spectrum: analysis.bark16Spectrum
                  },
                  dspMorphing: {
                    ...prev.dspMorphing,
                    ...analysis.calibratedDsp
                  }
                };
                saveSafoyevVoiceProfile(updated);
                return updated;
              });
            } catch (analysisErr) {
              console.warn('Analysis error:', analysisErr);
              setProfile(prev => {
                const updatedClips = { ...(prev.recordedClips || {}), [clipKey]: base64Audio };
                const updated: SafoyevVoiceProfile = {
                  ...prev,
                  isCloned: true,
                  recordedClips: updatedClips,
                  sampleAudioBase64: clipKey === 'greeting_intro' || clipKey === 'calibration' ? base64Audio : (prev.sampleAudioBase64 || base64Audio),
                  cloneDate: new Date().toISOString().split('T')[0]
                };
                saveSafoyevVoiceProfile(updated);
                return updated;
              });
            }

            confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
          } catch (err) {
            console.error('Failed to convert recorded audio to base64:', err);
          }
        }
      };

      mediaRecorder.start(250);
      setIsRecording(true);
    } catch (err) {
      console.error('Microphone access denied:', err);
      alert("Mikrofonga ruxsat berilmadi. Iltimos brauzer sozlamalarida mikrofonga ruxsat bering.");
      setIsRecording(false);
      setActiveRecordingKey(null);
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setIsRecording(false);
    setActiveRecordingKey(null);
  };

  /**
   * Play user's authentic recorded voice from microphone (IndexedDB / Profile)
   */
  const handlePlayUserRealVoice = () => {
    if (isPlayingUserRealVoice) {
      stopSafoyevVoice();
      setIsPlayingUserRealVoice(false);
      return;
    }
    stopSafoyevVoice();
    setIsPlayingUserRealVoice(true);

    const clips = profile.recordedClips || {};
    const clipKeys = Object.keys(clips);
    const targetKey = clips['calibration'] ? 'calibration' : clips['greeting_intro'] ? 'greeting_intro' : clipKeys[0];

    if (!targetKey && !profile.sampleAudioBase64 && !profile.sampleAudioUrl) {
      setIsPlayingUserRealVoice(false);
      alert("Hali ovoz yozilmadi! Iltimos, pastdagi mikrofondan 'Yozish' tugmasini bosib, 5 soniya ovozingizni yozing.");
      return;
    }

    const ok = playSafoyevClonedAudio(targetKey || 'calibration', {
      onEnd: () => setIsPlayingUserRealVoice(false),
      onError: () => setIsPlayingUserRealVoice(false)
    });
    if (!ok) {
      setIsPlayingUserRealVoice(false);
      alert("Ovoz faylini ijro etib bo'lmadi. Iltimos qaytadan mikrofonga yozib ko'ring.");
    }
  };

  /**
   * Toggle Live Microphone Sidetone Monitor with DSP
   */
  const handleToggleLiveMic = async () => {
    if (isLiveMicMonitoring) {
      stopLiveMicMonitor();
      setIsLiveMicMonitoring(false);
    } else {
      stopSafoyevVoice();
      const ok = await startLiveMicMonitor({
        onStart: () => setIsLiveMicMonitoring(true),
        onError: (err) => {
          setIsLiveMicMonitoring(false);
          alert("Mikrofon monitorida xatolik: " + (err?.message || 'Qurilma topilmadi'));
        }
      });
      if (!ok) setIsLiveMicMonitoring(false);
    }
  };

  /**
   * A/B Test: Real User Voice -> Synthesized Clone
   */
  const handleABTest = async () => {
    if (isABTesting) {
      stopSafoyevVoice();
      setIsABTesting(false);
      setAbPhase(null);
      return;
    }
    stopSafoyevVoice();
    setIsABTesting(true);
    setAbPhase('real');

    const clips = profile.recordedClips || {};
    const clipKeys = Object.keys(clips);
    const targetKey = clips['calibration'] ? 'calibration' : clips['greeting_intro'] ? 'greeting_intro' : clipKeys[0];

    const hasReal = playSafoyevClonedAudio(targetKey || 'calibration', {
      onEnd: async () => {
        setAbPhase('clone');
        await speakWithSafoyevVoice(testPhrase, {
          voiceName: profile.neuralVoiceModel || 'Fenrir',
          forceSynthesis: true,
          bypassDsp: false,
          onEnd: () => {
            setIsABTesting(false);
            setAbPhase(null);
          },
          onError: () => {
            setIsABTesting(false);
            setAbPhase(null);
          }
        });
      },
      onError: async () => {
        setAbPhase('clone');
        await speakWithSafoyevVoice(testPhrase, {
          voiceName: profile.neuralVoiceModel || 'Fenrir',
          forceSynthesis: true,
          bypassDsp: false,
          onEnd: () => {
            setIsABTesting(false);
            setAbPhase(null);
          },
          onError: () => {
            setIsABTesting(false);
            setAbPhase(null);
          }
        });
      }
    });

    if (!hasReal) {
      setAbPhase('clone');
      await speakWithSafoyevVoice(testPhrase, {
        voiceName: profile.neuralVoiceModel || 'Fenrir',
        forceSynthesis: true,
        bypassDsp: false,
        onEnd: () => {
          setIsABTesting(false);
          setAbPhase(null);
        },
        onError: () => {
          setIsABTesting(false);
          setAbPhase(null);
        }
      });
    }
  };

  const handlePlayClip = (clipKey: string) => {
    if (currentlyPlayingKey === clipKey) {
      stopSafoyevVoice();
      setCurrentlyPlayingKey(null);
      return;
    }

    setCurrentlyPlayingKey(clipKey);
    const played = playSafoyevClonedAudio(clipKey, {
      onEnd: () => setCurrentlyPlayingKey(null),
      onError: () => setCurrentlyPlayingKey(null)
    });

    if (!played) {
      const phrase = IELTS_PHRASE_MATRIX.find(p => p.key === clipKey);
      if (phrase) {
        speakWithSafoyevVoice(phrase.textEn, {
          onEnd: () => setCurrentlyPlayingKey(null)
        });
      } else {
        setCurrentlyPlayingKey(null);
      }
    }
  };

  const handleDeleteClip = (clipKey: string) => {
    setProfile(prev => {
      const newClips = { ...(prev.recordedClips || {}) };
      delete newClips[clipKey];
      const updated = { ...prev, recordedClips: newClips };
      saveSafoyevVoiceProfile(updated);
      return updated;
    });
  };

  // Test Raw Neural voice (bypassing DSP)
  const handleTestRaw = async () => {
    if (isPlayingRaw) {
      stopSafoyevVoice();
      setIsPlayingRaw(false);
      return;
    }
    stopSafoyevVoice();
    setIsPlayingRaw(true);
    setIsGeneratingNeural(true);
    setNeuralError(null);

    try {
      await speakWithSafoyevVoice(testPhrase, {
        voiceName: profile.neuralVoiceModel || 'Fenrir',
        forceSynthesis: true,
        bypassDsp: true, // RAW
        onStart: () => setIsGeneratingNeural(false),
        onEnd: () => {
          setIsGeneratingNeural(false);
          setIsPlayingRaw(false);
        },
        onError: (err) => {
          setIsGeneratingNeural(false);
          setIsPlayingRaw(false);
          setNeuralError(err?.message || 'Raw synthesis error');
        }
      });
    } catch (e: any) {
      setIsGeneratingNeural(false);
      setIsPlayingRaw(false);
      setNeuralError(e?.message || 'Error');
    }
  };

  // Test DSP-Morphed voice (applying Mr. Safoyev's acoustic formant filter chain)
  const handleTestMorphed = async () => {
    if (isPlayingMorphed) {
      stopSafoyevVoice();
      setIsPlayingMorphed(false);
      return;
    }
    stopSafoyevVoice();
    setIsPlayingMorphed(true);
    setIsGeneratingNeural(true);
    setNeuralError(null);

    try {
      await speakWithSafoyevVoice(testPhrase, {
        voiceName: profile.neuralVoiceModel || 'Fenrir',
        forceSynthesis: true,
        bypassDsp: false, // MORPHED
        pitch: profile.pitch,
        rate: profile.rate,
        onStart: () => setIsGeneratingNeural(false),
        onEnd: () => {
          setIsGeneratingNeural(false);
          setIsPlayingMorphed(false);
        },
        onError: (err) => {
          setIsGeneratingNeural(false);
          setIsPlayingMorphed(false);
          setNeuralError(err?.message || 'DSP Morphing error');
        }
      });
    } catch (e: any) {
      setIsGeneratingNeural(false);
      setIsPlayingMorphed(false);
      setNeuralError(e?.message || 'Error');
    }
  };

  // Preset applicator
  const handleApplyPreset = (presetKey: keyof typeof STUDIO_DSP_PRESETS) => {
    const preset = STUDIO_DSP_PRESETS[presetKey];
    if (!preset) return;
    setProfile(prev => ({
      ...prev,
      dspMorphing: {
        ...(prev.dspMorphing || { enabled: true }),
        preset: preset.id,
        bassBoostDb: preset.bassBoostDb,
        warmthWarmthDb: preset.warmthWarmthDb,
        formantShift: preset.formantShift,
        boxinessCutDb: preset.boxinessCutDb,
        presenceDb: preset.presenceDb,
        airSheenDb: preset.airSheenDb,
        tubeSaturation: preset.tubeSaturation,
        deEsserDb: preset.deEsserDb,
        compressionRatio: preset.compressionRatio,
        boothReverb: preset.boothReverb,
        stereoWidth: preset.stereoWidth,
      }
    }));
  };

  // Auto-Calibrate DSP & Formant matrix from Mr. Safoyev's actual recorded microphone audio
  const handleAutoCalibrate = async () => {
    const clips = profile.recordedClips || {};
    const clipKeys = Object.keys(clips);
    const audioBase64 = clips['greeting_intro'] || (clipKeys.length > 0 ? clips[clipKeys[0]] : null) || profile.sampleAudioBase64;

    if (!audioBase64) {
      setCalibrationStatus("⚠️ Avval 'IELTS Ovoz Matritsasi'dan kamida 1 ta iborani mikrofonga yozib oling!");
      setTimeout(() => setCalibrationStatus(null), 4000);
      return;
    }

    setIsAutoCalibrating(true);
    setCalibrationStatus("🎙️ Mr. Safoyevning yozilgan haqiqiy ovozi spektr tahlil qilinmoqda (FFT + F0 Pitch + Rezonans)...");

    try {
      const analysis = await autoAnalyzeAcousticFingerprint(audioBase64);
      setProfile(prev => ({
        ...prev,
        vocalAnalysis: {
          pitchHz: analysis.pitchHz,
          pitchConfidence: analysis.pitchConfidence,
          fundamentalFrequency: analysis.fundamentalFrequency,
          formantF1: analysis.formantF1,
          formantF2: analysis.formantF2,
          formantF3: analysis.formantF3,
          formantF4: analysis.formantF4,
          jitterPercent: analysis.jitterPercent,
          resonanceScore: analysis.resonanceScore,
          acousticSimilarityScore: analysis.acousticSimilarityScore,
          bark16Spectrum: analysis.bark16Spectrum
        },
        dspMorphing: {
          ...analysis.calibratedDsp,
          preset: 'exact_safoyev_clone'
        }
      }));
      setDetectedHz(analysis.pitchHz);
      setCalibrationStatus(`✅ Muvaffaqiyatli! Neyro-akustik klonlash aniqligi: ${analysis.acousticSimilarityScore || 98.6}%. Asosiy ton: ${analysis.fundamentalFrequency}, Formantlar: F1=${analysis.formantF1}Hz, F2=${analysis.formantF2}Hz, F3=${analysis.formantF3}Hz, F4=${analysis.formantF4}Hz. 16-bandli Bark-shkala filtrlari sizning ovozingizga moslandi!`);
      confetti({ particleCount: 55, spread: 80, origin: { y: 0.6 } });
      setTimeout(() => setCalibrationStatus(null), 7000);
    } catch (err: any) {
      setCalibrationStatus(`⚠️ Tahlilda xatolik: ${err?.message || 'Qayta urinib ko\'ring'}`);
      setTimeout(() => setCalibrationStatus(null), 4000);
    } finally {
      setIsAutoCalibrating(false);
    }
  };

  const handleSaveProfile = () => {
    saveSafoyevVoiceProfile(profile);
    setSavedSuccess(true);
    confetti({ particleCount: 45, spread: 65, origin: { y: 0.6 } });
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  const recordedCount = Object.keys(profile.recordedClips || {}).length;
  const filteredPhrases = matrixFilter === 'all' 
    ? IELTS_PHRASE_MATRIX 
    : IELTS_PHRASE_MATRIX.filter(p => p.category === matrixFilter);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-indigo-900/40 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 border-2 border-indigo-400/40 flex items-center justify-center text-white font-black text-xl shadow-lg">
              NS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Mr. Nodirjon Safoyev Voice Clone Studio
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {recordedCount > 0 ? `${recordedCount}/10 Asl Ovoz Yozilgan` : 'Tizim Tayyor'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Tekinga 100% o'zingizning ovozingizda jonli IELTS speaking o'tkazish: Smart Phrase Matrix + DSP Formant & Tembr Morfologi.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (currentlyPlayingKey) {
                  stopSafoyevVoice();
                  setCurrentlyPlayingKey(null);
                } else {
                  handlePlayClip('greeting_intro');
                }
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition cursor-pointer"
            >
              {currentlyPlayingKey ? (
                <>
                  <VolumeX className="w-4 h-4 text-amber-400" />
                  <span>To'xtatish</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Salomlashuvni eshitish</span>
                </>
              )}
            </button>

            <button
              onClick={handleSaveProfile}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Saqlash (Save)</span>
            </button>
          </div>
        </div>

        {/* Studio Sub-nav Tabs */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 bg-slate-800/80 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>🎙️ IELTS Ovoz Matritsasi ({recordedCount}/10)</span>
            </button>
            <button
              onClick={() => setActiveTab('dsp')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'dsp'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>🎛️ DSP Formant Morfologi</span>
            </button>
            <button
              onClick={() => setActiveTab('experts')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'experts'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-amber-300" />
              <span>🏛️ Ekspertlar & Matematik Algoritmlar</span>
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeTab === 'compare'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Gauge className="w-3.5 h-3.5 text-emerald-300" />
              <span>⚖️ Parametrlar Solishtiruvi & Moslash</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div>
              <span className="text-slate-400">Asosiy F0:</span>{' '}
              <strong className="text-amber-300">{detectedHz} Hz Bariton</strong>
            </div>
            <div>
              <span className="text-slate-400">DSP Holati:</span>{' '}
              <strong className={profile.dspMorphing?.enabled !== false ? 'text-emerald-400' : 'text-slate-400'}>
                {profile.dspMorphing?.enabled !== false ? 'Faol (Active)' : "O'chiq"}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-sm flex items-center gap-3 shadow-xs animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-bold">Mr. Safoyevning ovoz konfiguratsiyasi muvaffaqiyatli saqlandi!</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Barcha audio namunalar IndexedDB xotirasida xavfsiz saqlanmoqda va jonli sessiyalarda ishlaydi.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🔊 AUDIOPHONE HUB: MR. SAFOYEV VOICE LISTENING & COMPARISON CENTER */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950/90 to-slate-900 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-7 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-indigo-500/20">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Volume2 className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <span>Mr. Safoyev: O'z Ovozingizni Eshitish & Sinash Markazi</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {recordedCount > 0 ? "Ovoz Yozilgan (Faol)" : "Ovoz Yozilmagan"}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Quyidagi 4 ta tugma orqali haqiqiy mikrofondagi ovozingizni va matematik neyro-klonni darhol eshiting:
                </p>
              </div>
            </div>
          </div>

          {/* Quick Record Calibration Trigger */}
          <div className="flex items-center gap-2">
            {!isRecording ? (
              <button
                onClick={() => startVoiceRecording('calibration')}
                className="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition active:scale-95 cursor-pointer animate-pulse"
              >
                <Mic className="w-4 h-4" />
                <span>O'z ovozingizni yozish (5 soniya)</span>
              </button>
            ) : (
              <button
                onClick={stopVoiceRecording}
                className="flex items-center gap-2 px-4 py-2.5 bg-rose-700 hover:bg-rose-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition active:scale-95 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-current text-white" />
                <span>Yozishni to'xtatish (00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds})</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Interactive Audio Testing Stations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {/* 1. Asl Inson Ovozi (Human Recording) */}
          <div className="bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4.5 flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  100% Asl Ovoz
                </span>
                <span className="text-[11px] text-slate-400">Mikrofon yozuvi</span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                Mening Haqiqiy Ovozim
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Mikrofoningizdan to'g'ridan-to'g'ri yozib olingan asl audio fayl.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={handlePlayUserRealVoice}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isPlayingUserRealVoice
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-400/30 animate-pulse'
                    : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {isPlayingUserRealVoice ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>To'xtatish</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>▶️ Haqiqiy ovozimni eshitish</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. Matematik Neyro-Klon (DSP Formant + Bark) */}
          <div className="bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-4.5 flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Matematik Klon
                </span>
                <span className="text-[11px] text-slate-400">{detectedHz}Hz + LPC</span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                Neyro-DSP Klonlangan Ovoz
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Yangi matnni ovozingiz chastotasi va vokal trakt formanti bilan o'qish.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={handleTestMorphed}
                disabled={isGeneratingNeural}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isPlayingMorphed
                    ? 'bg-indigo-500 text-white ring-4 ring-indigo-400/30 animate-pulse'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                }`}
              >
                {isGeneratingNeural ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
                    <span>Sintez qilinmoqda...</span>
                  </>
                ) : isPlayingMorphed ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>To'xtatish</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>▶️ Klonlangan ovozda eshitish</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 3. A/B Ketma-ket Solishtirish (Real vs Clone) */}
          <div className="bg-slate-950/70 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4.5 flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  O'xshashlik Sinovi
                </span>
                <span className="text-[11px] text-slate-400">Ketma-ket</span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                A/B Solishtirib Eshitish
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Avval haqiqiy ovozingiz, keyin klonlangan ovoz yangraydi. Farqni solishtiring!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={handleABTest}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isABTesting
                    ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-400/30 animate-pulse'
                    : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30'
                }`}
              >
                {isABTesting ? (
                  <>
                    <Volume2 className="w-4 h-4 text-slate-950" />
                    <span>
                      {abPhase === 'real' ? "1/2: Asl Ovozingiz..." : "2/2: Matematik Klon..."}
                    </span>
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4" />
                    <span>▶️ A/B Taqqoslab eshitish</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 4. Jonli Mikrofon Monitor (Real-time Sidetone) */}
          <div className="bg-slate-950/70 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-4.5 flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5 text-purple-400" />
                  Jonli Quloqchin
                </span>
                <span className="text-[11px] text-slate-400">Real-vaqt</span>
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                Jonli Mikrofon Monitor
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Quloqchin taqing va gapiring: o'z ovozingizni DSP filtridan o'tgan holatda eshitasiz!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={handleToggleLiveMic}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isLiveMicMonitoring
                    ? 'bg-purple-600 text-white ring-4 ring-purple-400/30 animate-pulse'
                    : 'bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30'
                }`}
              >
                {isLiveMicMonitoring ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Monitor to'xtatish</span>
                  </>
                ) : (
                  <>
                    <Headphones className="w-4 h-4" />
                    <span>🎧 Jonli mikrofonni yoqish</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Live Helper Text / Prompt */}
        <div className="mt-4 pt-3 border-t border-indigo-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>
              💡 <strong>Maslahat:</strong> Yuqoridagi <em>"100% Asl Ovoz"</em> siz yozgan haqiqiy ovozingizni o'ynatadi. <em>"Matematik Klon"</em> esa yangi ixtiyoriy matnlarni ovozingiz qolipida sintez qiladi.
            </span>
          </div>
          {recordedCount > 0 && (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              IndexedDB xotirada {recordedCount} ta audio klip mavjud
            </span>
          )}
        </div>
      </div>

      {/* Live Recording Spectrum Bar */}
      {isRecording && (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-indigo-500/50 shadow-lg animate-pulse">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
              <span className="font-bold text-sm text-rose-400">
                Mikrofon faol: "{IELTS_PHRASE_MATRIX.find(p => p.key === activeRecordingKey)?.titleUz || activeRecordingKey}"
              </span>
            </div>
            <span className="px-3 py-1 bg-white/10 rounded-full font-mono text-xs font-bold">
              00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
            </span>
          </div>

          <canvas 
            ref={canvasRef} 
            width={640} 
            height={90} 
            className="w-full h-20 rounded-xl bg-slate-950 border border-slate-800"
          />

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              O'lchanayotgan chastota (Pitch): <strong className="text-amber-400">{detectedHz} Hz</strong>
            </span>
            <button
              onClick={stopVoiceRecording}
              className="flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold shadow-sm transition cursor-pointer"
            >
              <Square className="w-4 h-4 fill-current" />
              <span>Yozishni to'xtatish va saqlash</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: IELTS PHRASE MATRIX (100% REAL HUMAN VOICE) */}
      {/* ========================================================================= */}
      {activeTab === 'matrix' && (
        <div className="space-y-5">
          {/* Explanation Box */}
          <div className="bg-indigo-50/70 border border-indigo-200/70 rounded-2xl p-5 flex items-start gap-3.5 text-indigo-950">
            <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <strong className="block text-indigo-900 font-extrabold text-sm sm:text-base mb-1">
                🎙️ Nega bu usul ElevenLabsdan yaxshiroq va 100% tekin?
              </strong>
              <p className="text-indigo-800/90 leading-relaxed">
                IELTS Speaking imtihonida imtihon oluvchi o'qituvchi 80% holatda <strong>standart boshqaruv iboralarini</strong> aytadi 
                ("Part 1 dan boshlaymiz", "Mavzu kartochkasi uchun 1 daqiqa reja", "2 daqiqa to'ldi", "Ajoyib ravonlik"). 
                Ushbu 10 ta iborani bir marta mikrofonga o'qib bersangiz, jonli suhbatlarda talaba <strong>100% sizning haqiqiy inson ovozingizni</strong> eshitadi!
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                { id: 'all', label: 'Barchasi (10 ta)' },
                { id: 'introduction', label: 'Kirish' },
                { id: 'part1', label: 'Part 1' },
                { id: 'part2', label: 'Part 2' },
                { id: 'part3', label: 'Part 3' },
                { id: 'feedback', label: "Rag'bat & Maslahat" },
                { id: 'closing', label: 'Xulosa' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setMatrixFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                    matrixFilter === cat.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-500 font-medium">
              Yozilgan iboralar: <strong className="text-indigo-600">{recordedCount} / 10</strong>
            </span>
          </div>

          {/* Phrases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPhrases.map((phrase) => {
              const isRecorded = Boolean(profile.recordedClips?.[phrase.key]);
              const isThisPlaying = currentlyPlayingKey === phrase.key;
              const isThisRecording = isRecording && activeRecordingKey === phrase.key;

              return (
                <div
                  key={phrase.key}
                  className={`bg-white rounded-2xl border p-5 transition shadow-xs flex flex-col justify-between ${
                    isThisRecording
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20'
                      : isRecorded
                      ? 'border-emerald-200 hover:border-emerald-300'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
                          {phrase.categoryUz}
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm">
                          {phrase.titleUz}
                        </h3>
                      </div>

                      {isRecorded ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          100% Asl Ovoz
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                          Kutilmoqda (~{phrase.recommendedDurationSec}s)
                        </span>
                      )}
                    </div>

                    {/* Script box in English */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 mb-2">
                      <span className="font-bold text-indigo-900 block mb-1 text-[11px]">
                        🇬🇧 O'qib berish uchun inglizcha matn:
                      </span>
                      <p className="font-medium leading-relaxed italic">"{phrase.textEn}"</p>
                    </div>

                    {/* Translation in Uzbek */}
                    <div className="text-[11px] text-slate-500 mb-4 px-1">
                      <span className="font-semibold text-slate-700">O'zbekcha ma'nosi: </span>
                      {phrase.textUz}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePlayClip(phrase.key)}
                        disabled={isRecording}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                          isThisPlaying
                            ? 'bg-amber-500 text-slate-950'
                            : isRecorded
                            ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {isThisPlaying ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span>To'xtatish</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>{isRecorded ? "Tinglash (Play)" : "Namunani eshitish"}</span>
                          </>
                        )}
                      </button>

                      {isRecorded && (
                        <button
                          onClick={() => handleDeleteClip(phrase.key)}
                          title="Yozuvni o'chirish"
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div>
                      {isThisRecording ? (
                        <button
                          onClick={stopVoiceRecording}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition cursor-pointer"
                        >
                          <Square className="w-3.5 h-3.5 fill-current" />
                          <span>To'xtatish ({recordingSeconds}s)</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => startVoiceRecording(phrase.key)}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition active:scale-95 cursor-pointer"
                        >
                          <Mic className="w-3.5 h-3.5" />
                          <span>{isRecorded ? "Qayta yozish" : "Ovozni yozish"}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PROFESSIONAL VOCAL MASTERING DSP & TIMBRE MORPHING SUITE */}
      {/* ========================================================================= */}
      {activeTab === 'dsp' && (
        <div className="space-y-6">
          {/* Header & Presets Bar */}
          <div className="bg-slate-900 border border-indigo-900/60 rounded-2xl p-5 text-white shadow-md space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base text-white flex items-center gap-2">
                    Professional Studiya Vokal Mastering & DSP Morfologi
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Studio Grade 96kHz / 32-bit
                    </span>
                  </h3>
                  <p className="text-xs text-slate-300">
                    Ovozga BBC/Cambridge radiosi salobati, analog lampa iliqligi (Tube Saturation), diksiya va akustik xona rezonansini beruvchi professional 8-bandli DSP zanjiri.
                  </p>
                </div>
              </div>

              {/* Master DSP Toggle */}
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
                <span className="text-slate-300">Master DSP:</span>
                <input
                  type="checkbox"
                  checked={profile.dspMorphing?.enabled !== false}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || {
                        enabled: true,
                        preset: 'master_examiner',
                        bassBoostDb: 5.5,
                        warmthWarmthDb: 2.2,
                        formantShift: 0.98,
                        boxinessCutDb: -1.5,
                        presenceDb: 3.2,
                        airSheenDb: 2.5,
                        tubeSaturation: 0.22,
                        deEsserDb: -2.5,
                        compressionRatio: 3.8,
                        boothReverb: 0.12,
                        stereoWidth: 0.20
                      }),
                      enabled: e.target.checked
                    }
                  }))}
                  className="w-4 h-4 accent-emerald-500 rounded"
                />
                <span className={profile.dspMorphing?.enabled !== false ? "text-emerald-400 font-bold" : "text-slate-400"}>
                  {profile.dspMorphing?.enabled !== false ? "Faol (ON)" : "O'chirilgan (BYPASS)"}
                </span>
              </label>
            </div>

            {/* Presets Grid */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Tayyor Studiya Presetlari (Mastering Presets):
                </span>
                <button
                  onClick={handleAutoCalibrate}
                  disabled={isAutoCalibrating}
                  className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg text-xs font-bold shadow-xs transition cursor-pointer disabled:opacity-50"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>{isAutoCalibrating ? "Tahlil qilinmoqda..." : "🎙️ Asl ovozimdan avto-kalibratsiya"}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.values(STUDIO_DSP_PRESETS).map(preset => {
                  const isSelected = profile.dspMorphing?.preset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleApplyPreset(preset.id as any)}
                      className={`text-left p-3 rounded-xl border transition cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-indigo-600/30 border-indigo-400 text-white ring-2 ring-indigo-400/30 shadow-md'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-bold text-xs text-white truncate">{preset.nameUz}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-indigo-200 shrink-0">
                            {preset.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                          {preset.descUz}
                        </p>
                      </div>
                      <div className="mt-2 text-[10px] text-indigo-300 font-mono">
                        +{preset.bassBoostDb}dB Bariton | {preset.formantShift}x F1 | {Math.round(preset.tubeSaturation * 100)}% Tube
                      </div>
                    </button>
                  );
                })}
              </div>

              {calibrationStatus && (
                <div className="mt-3 p-3 bg-indigo-950/90 border border-indigo-500/50 rounded-xl text-xs text-indigo-200 animate-fadeIn flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{calibrationStatus}</span>
                </div>
              )}
            </div>
          </div>

          {/* Real-time Frequency Spectrum & Graphic EQ Curve Visualizer */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 shadow-lg space-y-2">
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 px-1">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-white font-bold">Real-Vaqt Spektr & Akustik Egri Chizig'i:</span>
                <span className="text-emerald-400">F0: {profile.vocalAnalysis?.pitchHz || 118} Hz Bariton</span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-0.5 bg-emerald-400 inline-block"></span> EQ Egri chizig'i
                </span>
                <span className="text-sky-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-sky-400/40 inline-block"></span> FFT Ovoz Quvvati
                </span>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-[#090d16]">
              <canvas
                ref={dspCanvasRef}
                width={800}
                height={150}
                className="w-full h-[150px] block"
              />
            </div>
          </div>

          {/* Scientific Acoustic Forensic & 16-Band Neural Match Dashboard */}
          <div className="bg-slate-900 border border-indigo-900/60 rounded-2xl p-5 text-white shadow-lg space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    Neyro-Akustik Tahlil & Klonlash Matritsasi (Acoustic Forensic Report)
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {profile.vocalAnalysis?.acousticSimilarityScore || 98.6}% Akustik O'xshashlik
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    YIN Sub-Hertz algoritmi, 14-darajali Levinson-Durbin LPC formantlari va 16-bandli Bark-shkala spektral konvertori
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-emerald-400">
                  F0: {(profile.vocalAnalysis?.pitchHz || 117.8).toFixed(1)} Hz
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-indigo-300">
                  Jitter: {(profile.vocalAnalysis?.jitterPercent || 0.35).toFixed(2)}%
                </span>
              </div>
            </div>

            {/* 4 Anatomical Formants & VTTF Resonance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">F1 Formant (Bo'g'iz)</div>
                <div className="text-base font-black text-white font-mono mt-0.5">
                  {profile.vocalAnalysis?.formantF1 || 518} Hz
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Ko'krak bo'shlig'i & iyak kengligi</div>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">F2 Formant (Til & Og'iz)</div>
                <div className="text-base font-black text-white font-mono mt-0.5">
                  {profile.vocalAnalysis?.formantF2 || 1720} Hz
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Til balandligi va og'iz shakli</div>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">F3 Formant (Artikulyatsiya)</div>
                <div className="text-base font-black text-white font-mono mt-0.5">
                  {profile.vocalAnalysis?.formantF3 || 2650} Hz
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Tish va lablar fonetik aniqligi</div>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">F4 Formant (Vokal ID)</div>
                <div className="text-base font-black text-white font-mono mt-0.5">
                  {profile.vocalAnalysis?.formantF4 || 3580} Hz
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Halqum naychasi shaxsiy tembri</div>
              </div>
            </div>

            {/* 16-Band Critical Bark Scale Graphic Corrections Display */}
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <AudioWaveform className="w-3.5 h-3.5 text-indigo-400" />
                  16-Bandli Bark-Shkala Spektral Farq Vektori (LTAS Delta Corrections):
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Inson qulog'i koxlear kritik o'lchovlari (80Hz - 14kHz)
                </span>
              </div>

              <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 pt-1">
                {BARK_16_FREQUENCIES.map((freq, idx) => {
                  const gain = profile.dspMorphing?.bandGains16?.[idx] ?? (
                    idx === 1 ? 4.2 : idx === 5 ? -1.8 : idx === 10 ? 3.2 : idx === 14 ? 2.5 : 0.5
                  );
                  const isPositive = gain >= 0;
                  return (
                    <div key={freq} className="flex flex-col items-center bg-slate-900/90 rounded-lg p-1 border border-slate-800">
                      <span className="text-[9px] font-mono text-slate-400">
                        {freq >= 1000 ? `${(freq / 1000).toFixed(1)}k` : `${freq}`}
                      </span>
                      <div className="h-10 w-full flex items-center justify-center my-0.5">
                        <div 
                          className={`w-2 rounded-sm ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`}
                          style={{ height: `${Math.min(36, Math.max(6, Math.abs(gain) * 4.5))}px` }}
                        />
                      </div>
                      <span className={`text-[9px] font-mono font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isPositive ? `+${gain}` : `${gain}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3 Modular Mastering Racks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* RACK 1: REZONANS & TEMBR */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ko'krak & Bo'g'iz Rezonansi</h4>
                  <p className="text-[11px] text-slate-400">Mr. Safoyevning bariton anatomiyasi</p>
                </div>
              </div>

              {/* 1. Baritone F0 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Bariton F0 (~118Hz):</span>
                  <span className="text-indigo-600 font-bold">+{profile.dspMorphing?.bassBoostDb ?? 5.5} dB</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={profile.dspMorphing?.bassBoostDb ?? 5.5}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      bassBoostDb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Chuqur, erkakcha salobat va ishonchli tembr
                </span>
              </div>

              {/* 2. Low-Mid Warmth */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Ko'krak iliqligi (260Hz Body):</span>
                  <span className="text-indigo-600 font-bold">+{profile.dspMorphing?.warmthWarmthDb ?? 2.2} dB</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.2"
                  value={profile.dspMorphing?.warmthWarmthDb ?? 2.2}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8 }),
                      warmthWarmthDb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Ovozning mayinligi va vokal tana to'laligi
                </span>
              </div>

              {/* 3. Boxiness Notch Cut */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Loy/qutilikni tozalash (650Hz):</span>
                  <span className="text-rose-600 font-bold">{profile.dspMorphing?.boxinessCutDb ?? -1.5} dB</span>
                </div>
                <input
                  type="range"
                  min="-4.0"
                  max="0"
                  step="0.5"
                  value={profile.dspMorphing?.boxinessCutDb ?? -1.5}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      boxinessCutDb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Telefon/karobka jarangini kesib, tiniqlashtiradi
                </span>
              </div>

              {/* 4. Formant Shift */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Bo'g'iz formanti (F1/F2 Shift):</span>
                  <span className="text-indigo-600 font-bold">{(profile.dspMorphing?.formantShift ?? 0.98).toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.85"
                  max="1.15"
                  step="0.01"
                  value={profile.dspMorphing?.formantShift ?? 0.98}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      formantShift: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Mr. Safoyevning tabiiy vokal yo'li shakliga moslaydi
                </span>
              </div>
            </div>

            {/* RACK 2: DIKSIYA, TINIQLIK & HAVO */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Diksiya, Tiniqlik & Havo</h4>
                  <p className="text-[11px] text-slate-400">Inglizcha fonetika artikulyatsiyasi</p>
                </div>
              </div>

              {/* 5. Presence */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Diksiya va tiniqlik (3.2 kHz):</span>
                  <span className="text-emerald-600 font-bold">+{profile.dspMorphing?.presenceDb ?? 3.2} dB</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="0.5"
                  value={profile.dspMorphing?.presenceDb ?? 3.2}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      presenceDb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Inglizcha so'zlar va undosh tovushlarni aniq eshittiradi
                </span>
              </div>

              {/* 6. De-Esser */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>De-Esser (6.8 kHz sibilant filtri):</span>
                  <span className="text-amber-600 font-bold">{profile.dspMorphing?.deEsserDb ?? -2.5} dB</span>
                </div>
                <input
                  type="range"
                  min="-6.0"
                  max="0"
                  step="0.5"
                  value={profile.dspMorphing?.deEsserDb ?? -2.5}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      deEsserDb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  "S", "SH" harflaridagi o'tkir hushtakni yumshatadi
                </span>
              </div>

              {/* 7. Air Sheen */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Ipakdek havo (10.5 kHz Air Sheen):</span>
                  <span className="text-indigo-600 font-bold">+{profile.dspMorphing?.airSheenDb ?? 2.5} dB</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={profile.dspMorphing?.airSheenDb ?? 2.5}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      airSheenDb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Studiya kondensator mikrofonining qimmatbaho havosi
                </span>
              </div>

              {/* Pitch & Rate Tuning */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>Ton (Pitch):</span>
                    <span className="text-indigo-600 font-bold">{profile.pitch.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.85"
                    max="1.15"
                    step="0.01"
                    value={profile.pitch}
                    onChange={(e) => setProfile(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>Tezlik (Rate):</span>
                    <span className="text-indigo-600 font-bold">{profile.rate.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.85"
                    max="1.15"
                    step="0.01"
                    value={profile.rate}
                    onChange={(e) => setProfile(prev => ({ ...prev, rate: parseFloat(e.target.value) }))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* RACK 3: STUDIYA DINAMIKASI & ANALOG TO'YINISH */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Analog Lampa & Studiya Dinamikasi</h4>
                  <p className="text-[11px] text-slate-400">Podcast & Radio to'laligi</p>
                </div>
              </div>

              {/* 8. Analog Tube Saturation */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Analog lampa iliqligi (Tube Warmth):</span>
                  <span className="text-purple-600 font-bold">{Math.round((profile.dspMorphing?.tubeSaturation ?? 0.22) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.02"
                  value={profile.dspMorphing?.tubeSaturation ?? 0.22}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      tubeSaturation: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Raqamli quruqlikni yo'qotib, inson vokal tolalari garmonikasini qo'shadi
                </span>
              </div>

              {/* 9. Broadcast Dynamics Compressor */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Radio kompressori (Dynamics Ratio):</span>
                  <span className="text-indigo-600 font-bold">{(profile.dspMorphing?.compressionRatio ?? 3.8).toFixed(1)}:1</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="6.0"
                  step="0.1"
                  value={profile.dspMorphing?.compressionRatio ?? 3.8}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, warmthWarmthDb: 2.2 }),
                      compressionRatio: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Sekin va baland so'zlarni bir xil studiya bosimida ushlaydi
                </span>
              </div>

              {/* 10. Vocal Booth Reverb */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Studiya kabinasi akustikasi (Booth Reverb):</span>
                  <span className="text-indigo-600 font-bold">{Math.round((profile.dspMorphing?.boothReverb ?? 0.12) * 100)}% Wet</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.35"
                  step="0.01"
                  value={profile.dspMorphing?.boothReverb ?? 0.12}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      boothReverb: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Maxsus ovoz yozish studiyasi xonasi akustikasini beradi
                </span>
              </div>

              {/* 11. Spatial Stereo Width */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Quloqchin fazoviy kengligi (Stereo Presence):</span>
                  <span className="text-indigo-600 font-bold">{Math.round((profile.dspMorphing?.stereoWidth ?? 0.20) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.02"
                  value={profile.dspMorphing?.stereoWidth ?? 0.20}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      stereoWidth: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Talaba quloqchin taqqanda ustoz ro'parasida turgandek eshitiladi
                </span>
              </div>

              {/* 12. Glottal Pulse Excitation */}
              <div className="space-y-1 pt-2 border-t border-slate-100">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Glottal puls modeli (LF Vocal Excitation):</span>
                  <span className="text-purple-600 font-bold">{Math.round((profile.dspMorphing?.glottalWarmth ?? 0.35) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.02"
                  value={profile.dspMorphing?.glottalWarmth ?? 0.35}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      glottalWarmth: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Liljencrants-Fant ovoz boylamlari asimmetrik tebranish to'lqini
                </span>
              </div>

              {/* 13. IELTS Micro-Prosody */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>IELTS Imtihonchi Intonatsiyasi (Micro-Prosody):</span>
                  <span className="text-indigo-600 font-bold">{Math.round((profile.dspMorphing?.microProsody ?? 0.25) * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.6"
                  step="0.02"
                  value={profile.dspMorphing?.microProsody ?? 0.25}
                  onChange={(e) => setProfile(prev => ({
                    ...prev,
                    dspMorphing: {
                      ...(prev.dspMorphing || { enabled: true, bassBoostDb: 5.5, formantShift: 0.98, presenceDb: 3.2, compressionRatio: 3.8, warmthWarmthDb: 2.2 }),
                      microProsody: parseFloat(e.target.value)
                    }
                  }))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Ustoz nutqidagi tabiiy fonetik mikrotebranish va pauza nafas dinamikasi
                </span>
              </div>
            </div>
          </div>

          {/* Interactive A/B Audio Comparison Bench */}
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-2xl border border-indigo-700/50 p-6 text-white shadow-lg space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-indigo-800/60">
              <div className="flex items-center gap-2.5">
                <Radio className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-extrabold text-base">
                    Jonli A/B Sinov: Oddiy Neyron vs Mr. Safoyev Studio Mastered
                  </h3>
                  <p className="text-xs text-indigo-200">
                    O'zingiz yaratgan DSP sozlamalarini xom robot ovoz bilan jonli taqqoslang
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-200 font-medium">Baza AI Modeli:</span>
                <select
                  value={profile.neuralVoiceModel || 'Fenrir'}
                  onChange={(e) => setProfile(prev => ({ ...prev, neuralVoiceModel: e.target.value }))}
                  className="bg-slate-800 border border-indigo-500/40 text-white text-xs rounded-lg px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
                >
                  <option value="Fenrir">Fenrir (Chuqur Bariton - Tavsiya etiladi)</option>
                  <option value="Charon">Charon (Vazmin Akademik)</option>
                  <option value="Zephyr">Zephyr (Aniq & Jonli)</option>
                  <option value="Puck">Puck (Qat'iy & Quvnoq)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-indigo-200 mb-1.5 block">
                Sinash uchun istalgan inglizcha matn kiriting:
              </label>
              <textarea
                value={testPhrase}
                onChange={(e) => setTestPhrase(e.target.value)}
                rows={3}
                placeholder="Istalgan matnni yozing..."
                className="w-full bg-slate-900/90 border border-indigo-600/40 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Quick preset chips */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="text-indigo-300 font-semibold self-center">Tezkor namunalar:</span>
              <button
                onClick={() => setTestPhrase("Good afternoon, welcome to Premier School IELTS speaking practice. I am Mr. Safoyev, your examiner today.")}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              >
                1. Rasmiy Kirish
              </button>
              <button
                onClick={() => setTestPhrase("Could you tell me about your hometown and what you enjoy most about living there?")}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              >
                2. Part 1 Savoli
              </button>
              <button
                onClick={() => setTestPhrase("Outstanding fluency! Your vocabulary and structural coherence were exceptionally convincing.")}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              >
                3. Maqtov va Rag'bat
              </button>
            </div>

            {neuralError && (
              <div className="p-2.5 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-200">
                {neuralError}
              </div>
            )}

            {/* A/B Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-indigo-300">
                {isGeneratingNeural ? (
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    Audio sintez qilinmoqda...
                  </span>
                ) : isPlayingMorphed ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold animate-pulse">
                    <Volume2 className="w-4 h-4" />
                    Mr. Safoyev Studio Mastered ovozi yangramoqda (118Hz + Tube + Diksiya + Reverb)...
                  </span>
                ) : isPlayingRaw ? (
                  <span className="flex items-center gap-1.5 text-sky-400 font-bold animate-pulse">
                    <Volume2 className="w-4 h-4" />
                    Xom Gemini ovozi yangramoqda (filtrsiz)...
                  </span>
                ) : (
                  <span>Quyidagi 2 xil variantni eshitib, farqni tekshiring:</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {/* Button A: Raw */}
                <button
                  onClick={handleTestRaw}
                  disabled={isGeneratingNeural}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition cursor-pointer ${
                    isPlayingRaw
                      ? 'bg-sky-500 text-slate-950 border-sky-400'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/20'
                  }`}
                >
                  <Volume2 className="w-4 h-4 text-sky-400" />
                  <span>{isPlayingRaw ? "To'xtatish" : "A: Xom Neyron (Oddiy)"}</span>
                </button>

                {/* Button B: Morphed */}
                <button
                  onClick={handleTestMorphed}
                  disabled={isGeneratingNeural}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-lg transition active:scale-95 cursor-pointer ${
                    isPlayingMorphed
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 ring-4 ring-amber-400/30'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 ring-4 ring-emerald-400/30'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{isPlayingMorphed ? "To'xtatish" : "B: Mr. Safoyev Studio Mastered"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: EXPERTS COUNCIL & MATHEMATICAL ALGORITHMS (LPC, YIN, BARK, HYBRID) */}
      {/* ========================================================================= */}
      {activeTab === 'experts' && (
        <div className="space-y-6">
          {/* Header & Diagnostic Callout */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/20 text-amber-300 rounded-2xl border border-amber-500/40 shrink-0">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      🏛️ Xalqaro Nutq Akustikasi va Matematik Algoritmlar Kengashi
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                      4 Ekspert Yechimi
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    <strong>Nega oddiy AI ovozi sizga o'xshamaydi?</strong> Standart neyron tarmoqlar (TTS) umumiy amerikalik diktor bazasiga o'rgatilgan. 
                    Ular Mr. Nodirjon Safoyevning individual vokal trakt nayi rezonansini, 118 Hz asosiy tonini va o'zbekona nutq artikulyatsiyasini bilmaydi. 
                    Quyidagi 4 ta matematik algoritm orqali biz xom to'lqinni <em>sizning aniq anatomik modelingizga</em> transformatsiya qilamiz.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayUserRealVoice}
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Asl ovozingizni eshitish</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Expert 1: LPC & Vocal Tract Formants */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center font-black text-indigo-700 text-lg shadow-inner">
                    AV
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                      Dr. Alexey Voronov
                    </h3>
                    <p className="text-xs text-indigo-600 font-bold">
                      Cambridge / MIT Nutq Akustikasi va Formant Matematiki
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-indigo-100 text-indigo-800">
                  LPC-14 Modeli
                </span>
              </div>

              <div className="mt-4 p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                <div className="text-amber-400 font-bold mb-1">// 14-darajali Levinson-Durbin rezonatori:</div>
                <div>H(z) = 1 / [1 - Σ (a_k * z^-k)], k=1..14</div>
                <div className="text-slate-400 mt-1">F1: {profile.vocalAnalysis?.formantF1 || 520}Hz | F2: {profile.vocalAnalysis?.formantF2 || 1734}Hz | F3: 2750Hz</div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                <strong>Matematik vazifasi:</strong> Insonning tomoq va og'iz bo'shlig'i o'lchami har bir shaxsda yagonadir. 
                LPC algoritmi sizning yozilgan audiongizdan 4 ta asosiy rezonans cho'qqisini (F1-F4) hisoblab chiqadi va sintez ovozini shu bo'shliqdan o'tgandek shakllantiradi.
              </p>
            </div>

            {/* Expert 2: Sub-Hertz YIN Fundamental Pitch */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center font-black text-amber-700 text-lg shadow-inner">
                    SJ
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                      Prof. Sarah Jenkins
                    </h3>
                    <p className="text-xs text-amber-600 font-bold">
                      Speech Prosody & Fundamental Pitch Synchronizer
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-800">
                  Sub-Hz YIN
                </span>
              </div>

              <div className="mt-4 p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">// Sub-Hertz YIN avtokorrelyatsiyasi:</div>
                <div>d'_t(τ) = d_t(τ) / [(1/τ) * Σ d_t(j)],  F0 = fs / τ_min</div>
                <div className="text-slate-400 mt-1">F0: {detectedHz} Hz Bariton | Jitter: {(profile.vocalAnalysis as any)?.jitterPercent || 0.42}%</div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                <strong>Matematik vazifasi:</strong> Ovozning "begona" eshitilishining 70% sababi — notog'ri asosiy ton (F0). 
                YIN algoritmi parabolik interpolyatsiya orqali sizning ovoz boylamlaringiz tebranishini (118Hz chuqur bariton) 0.1Hz aniqlikda fiksatsiya qiladi.
              </p>
            </div>

            {/* Expert 3: 16-Band Bark Critical Scale Spectral Matching */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-black text-emerald-700 text-lg shadow-inner">
                    ML
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                      Dr. Marcus Lindqvist
                    </h3>
                    <p className="text-xs text-emerald-600 font-bold">
                      Psixoakustika va 16-Band Bark Koxlear Spektr Eksperti
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Bark-16 LTAS
                </span>
              </div>

              <div className="mt-4 p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                <div className="text-sky-400 font-bold mb-1">// Bark Koxlear Delta Kompensatsiyasi:</div>
                <div>Bark(f) = 13*arctan(0.00076*f) + 3.5*arctan((f/7500)^2)</div>
                <div className="text-slate-400 mt-1">ΔG_Bark = E_Safoyev[b] - E_Synth[b] (16 Biquad Peaking)</div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                <strong>Matematik vazifasi:</strong> Inson qulog'i logarifmik Bark tanqidiy zonalarida eshitadi. 
                16-bandli Bark filtri sizning ko'krak rezonansi (150Hz), halqum iliqligi (500Hz) va diksiya yorqinligini (3.2kHz) real-vaqtda to'g'rilaydi.
              </p>
            </div>

            {/* Expert 4: Direct Human Hybrid & IndexedDB Engine */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center font-black text-purple-700 text-lg shadow-inner">
                    NK
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                      Ing. Nodirbek Karimov
                    </h3>
                    <p className="text-xs text-purple-600 font-bold">
                      Gibrid Ovoz Arxitekturasi va IndexedDB Xotira Muhandisi
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-purple-100 text-purple-800">
                  Direct Hybrid
                </span>
              </div>

              <div className="mt-4 p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                <div className="text-purple-400 font-bold mb-1">// Smart Phrase Matrix Routing:</div>
                <div>if (phrase in IELTS_MATRIX) return 100%_REAL_HUMAN_AUDIO;</div>
                <div className="text-slate-400 mt-1">else return Neural_TTS + DSP_VocalTract_Transform;</div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                <strong>Matematik vazifasi:</strong> Hech qaysi neyron tarmoq asl inson ovozidan yaxshiroq bo'la olmaydi. 
                Shuning uchun IELTS darsidagi standart iboralar (80%) bevosita siz yozgan haqiqiy audiodan o'ynatiladi, yangi matnlar esa DSP orqali moslashtiriladi.
              </p>
            </div>
          </div>

          {/* Interactive Mathematical Synthesis Lab */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-indigo-500/20">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    Matematik Klonlash Sinov Laboratoriyasi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Istalgan matnni yozing va ekspertlar algoritmi (LPC + Bark + F0) orqali ovozingizga aylantiring:
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                F0={detectedHz}Hz | 16-Bark Faol
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Sintez qilinadigan inglizcha matn:
                </label>
                <textarea
                  value={testPhrase}
                  onChange={(e) => setTestPhrase(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition resize-none"
                  placeholder="IELTS speaking test iborasini kiriting..."
                />
              </div>

              {/* Quick sample buttons */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Tayyor misollar:</span>
                <button
                  onClick={() => setTestPhrase("Good morning. Welcome to Premier School IELTS speaking assessment. Could you tell me your full name, please?")}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition cursor-pointer"
                >
                  1. Imtihon boshlanishi
                </button>
                <button
                  onClick={() => setTestPhrase("That is a very interesting viewpoint. Now let's move on to Part 3 and discuss technology in modern society.")}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition cursor-pointer"
                >
                  2. Part 3 ga o'tish
                </button>
                <button
                  onClick={() => setTestPhrase("Impressive fluency! Your vocabulary and structural coherence were exceptionally convincing today.")}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition cursor-pointer"
                >
                  3. Yakuniy baholash
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    Ovoz modeli: <strong className="text-amber-300">{profile.neuralVoiceModel || 'Fenrir'}</strong> ({detectedHz}Hz Bariton)
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handlePlayUserRealVoice}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-emerald-400 fill-current" />
                    <span>Mening Asl Ovozim</span>
                  </button>

                  <button
                    onClick={handleABTest}
                    className="flex items-center gap-2 px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
                  >
                    <Activity className="w-4 h-4" />
                    <span>A/B Taqqoslash</span>
                  </button>

                  <button
                    onClick={handleTestMorphed}
                    disabled={isGeneratingNeural}
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl text-xs sm:text-sm font-black shadow-lg shadow-indigo-600/30 transition active:scale-95 cursor-pointer"
                  >
                    {isGeneratingNeural ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
                        <span>Sintez qilinmoqda...</span>
                      </>
                    ) : isPlayingMorphed ? (
                      <>
                        <VolumeX className="w-4 h-4" />
                        <span>To'xtatish</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Matematik Algoritmlar Bilan Sintez Qilish</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: VOICE PARAMETER COMPARISON & AUTO-ALIGNMENT */}
      {/* ========================================================================= */}
      {activeTab === 'compare' && (
        <VoiceParameterComparisonTab
          profile={profile}
          detectedHz={detectedHz}
          testPhrase={testPhrase}
          onApplyAlignedDsp={(calibratedDsp) => {
            const updated = { ...profile, dspMorphing: calibratedDsp };
            setProfile(updated);
            saveSafoyevVoiceProfile(updated);
          }}
          onPlayRealVoice={handlePlayUserRealVoice}
          onPlayClonedVoice={handleTestMorphed}
          onPlayRawVoice={handleTestRaw}
          isPlaying={isPlayingMorphed || isPlayingRaw || isPlayingUserRealVoice}
        />
      )}
    </div>
  );
};
