import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLMSData } from '../../contexts/LMSDataContext';
import { Modal } from '../common/Modal';
import { 
  Camera, Upload, Trash2, Check, Sparkles, 
  Image as ImageIcon, User, AlertCircle 
} from 'lucide-react';
import { playSound } from '../../lib/sound';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const PRESET_AVATARS: { id: string; label: string; svg: string }[] = [
  {
    id: 'student-boy-1',
    label: "Talaba (O'g'il bola)",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%234F46E5"/><circle cx="50" cy="40" r="20" fill="%23FCD34D"/><path d="M50 20c-12 0-20 6-20 16 0 2 1 4 2 5 2-8 8-13 18-13s16 5 18 13c1-1 2-3 2-5 0-10-8-16-20-16z" fill="%231E1B4B"/><circle cx="43" cy="38" r="2.5" fill="%231E1B4B"/><circle cx="57" cy="38" r="2.5" fill="%231E1B4B"/><path d="M46 47c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M22 88c0-15 12-28 28-28s28 13 28 28" fill="%23312E81"/></svg>'
  },
  {
    id: 'student-girl-1',
    label: "Talaba (Qiz bola)",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%23EC4899"/><circle cx="50" cy="42" r="19" fill="%23FDE68A"/><path d="M50 20c-14 0-24 10-24 24 0 12 5 19 6 20 2-8 7-15 18-15s16 7 18 15c1-1 6-8 6-20 0-14-10-24-24-24z" fill="%23831843"/><circle cx="44" cy="41" r="2.5" fill="%23831843"/><circle cx="56" cy="41" r="2.5" fill="%23831843"/><path d="M46 49c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M24 88c0-14 11-26 26-26s26 12 26 26" fill="%239D174D"/></svg>'
  },
  {
    id: 'student-headphones',
    label: "Musiqa & Quloqchin",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%230EA5E9"/><circle cx="50" cy="42" r="19" fill="%23FCD34D"/><path d="M50 22c-11 0-18 6-18 15 0 2 1 4 2 5 2-7 7-12 16-12s14 5 16 12c1-1 2-3 2-5 0-9-7-15-18-15z" fill="%230F172A"/><path d="M30 38c0-11 9-20 20-20s20 9 20 20" stroke="%23F43F5E" stroke-width="4" stroke-linecap="round"/><rect x="26" y="36" width="6" height="12" rx="3" fill="%23F43F5E"/><rect x="68" y="36" width="6" height="12" rx="3" fill="%23F43F5E"/><circle cx="44" cy="42" r="2.5" fill="%230F172A"/><circle cx="56" cy="42" r="2.5" fill="%230F172A"/><path d="M46 49c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M24 88c0-14 11-26 26-26s26 12 26 26" fill="%230369A1"/></svg>'
  },
  {
    id: 'student-glasses',
    label: "Kitobxon Ko'zoynakli",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%2310B981"/><circle cx="50" cy="40" r="19" fill="%23FDE68A"/><path d="M50 20c-12 0-19 6-19 15 0 2 1 4 2 5 2-7 7-12 17-12s15 5 17 12c1-1 2-3 2-5 0-9-7-15-19-15z" fill="%23064E3B"/><circle cx="42" cy="39" r="6" stroke="%23064E3B" stroke-width="2" fill="%23D1FAE5"/><circle cx="58" cy="39" r="6" stroke="%23064E3B" stroke-width="2" fill="%23D1FAE5"/><path d="M48 39h4" stroke="%23064E3B" stroke-width="2"/><path d="M46 48c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M24 88c0-14 11-26 26-26s26 12 26 26" fill="%23047857"/></svg>'
  },
  {
    id: 'student-cap',
    label: "Kepkali O'quvchi",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%23F59E0B"/><circle cx="50" cy="43" r="18" fill="%23FCD34D"/><path d="M30 33c0-6 9-11 20-11s20 5 20 11H30z" fill="%23DC2626"/><path d="M38 33h36c4 0 7 2 7 4s-3 4-7 4H38v-8z" fill="%23B91C1C"/><circle cx="44" cy="42" r="2.5" fill="%2378350F"/><circle cx="56" cy="42" r="2.5" fill="%2378350F"/><path d="M46 50c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M25 88c0-14 11-25 25-25s25 11 25 25" fill="%23B45309"/></svg>'
  },
  {
    id: 'student-graduate',
    label: "Bitiruvchi (Graduate)",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%238B5CF6"/><circle cx="50" cy="44" r="18" fill="%23FDE68A"/><path d="M50 20L26 31l24 11 24-11L50 20z" fill="%231E1B4B"/><path d="M36 36v12c0 8 6 14 14 14s14-6 14-14V36" fill="%231E1B4B"/><circle cx="44" cy="43" r="2.5" fill="%231E1B4B"/><circle cx="56" cy="43" r="2.5" fill="%231E1B4B"/><path d="M46 51c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M25 88c0-14 11-25 25-25s25 11 25 25" fill="%234C1D95"/></svg>'
  },
  {
    id: 'student-girl-smart',
    label: "Zukko Talaba Qiz",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%2306B6D4"/><circle cx="50" cy="42" r="19" fill="%23FED7AA"/><path d="M50 20c-13 0-22 8-22 22 0 8 4 14 7 16 0-8 6-13 15-13s15 5 15 13c3-2 7-8 7-16 0-14-9-22-22-22z" fill="%23451A03"/><circle cx="43" cy="41" r="2.5" fill="%23451A03"/><circle cx="57" cy="41" r="2.5" fill="%23451A03"/><path d="M46 49c2 2 6 2 8 0" stroke="%23C2410C" stroke-width="2" stroke-linecap="round"/><path d="M24 88c0-14 11-26 26-26s26 12 26 26" fill="%230891B2"/></svg>'
  },
  {
    id: 'student-champion',
    label: "Chempion Lider",
    svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="50" fill="%233B82F6"/><circle cx="50" cy="40" r="19" fill="%23FDE68A"/><path d="M50 18c-12 0-19 6-19 16 0 2 1 4 2 5 2-8 7-13 17-13s15 5 17 13c1-1 2-3 2-5 0-10-7-16-19-16z" fill="%231E3A8A"/><circle cx="43" cy="38" r="2.5" fill="%231E3A8A"/><circle cx="57" cy="38" r="2.5" fill="%231E3A8A"/><path d="M46 47c2 2 6 2 8 0" stroke="%23B45309" stroke-width="2" stroke-linecap="round"/><path d="M42 63l8 8 8-8" stroke="%23F59E0B" stroke-width="3" stroke-linecap="round"/><path d="M23 88c0-14 12-26 27-26s27 12 27 26" fill="%231D4ED8"/></svg>'
  }
];

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { profile, updateProfile } = useAuth();
  const { updateStudentProfile } = useLMSData();

  const [previewUrl, setPreviewUrl] = useState<string | null>(profile?.avatar_url || null);
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'preset'>('upload');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImageFile = (file: File) => {
    setErrorMsg(null);
    if (!file.type.startsWith('image/')) {
      setErrorMsg("Iltimos, faqat rasm fayllarini yuklang (PNG, JPG, WEBP, GIF)");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg("Rasm hajmi juda katta (maksimal 10 MB)");
      return;
    }

    setIsProcessing(true);
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const size = 320;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            throw new Error("Canvas context yaratib bo'lmadi");
          }

          const minDim = Math.min(img.width, img.height);
          const sx = (img.width - minDim) / 2;
          const sy = (img.height - minDim) / 2;

          ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);

          const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
          setPreviewUrl(dataUrl);
          setSelectedPresetId(null);
          setIsProcessing(false);
          playSound('pop');
        } catch {
          setErrorMsg("Rasmni qayta ishlashda xatolik yuz berdi");
          setIsProcessing(false);
        }
      };

      img.onerror = () => {
        setErrorMsg("Rasm fayli shikastlangan yoki ochilmadi");
        setIsProcessing(false);
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      setErrorMsg("Faylni o'qishda xatolik");
      setIsProcessing(false);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleSelectPreset = (preset: typeof PRESET_AVATARS[0]) => {
    setSelectedPresetId(preset.id);
    setPreviewUrl(preset.svg);
    setErrorMsg(null);
    playSound('tap');
  };

  const handleSave = async () => {
    if (!profile) return;
    setIsProcessing(true);
    try {
      await updateProfile({ avatar_url: previewUrl || undefined });
      if (profile.id) {
        await updateStudentProfile(profile.id, { avatar_url: previewUrl || undefined });
      }
      playSound('correct');
      onSuccess?.();
      onClose();
    } catch {
      setErrorMsg("Rasmni saqlashda xatolik yuz berdi");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemovePhoto = async () => {
    setPreviewUrl(null);
    setSelectedPresetId(null);
    if (!profile) return;
    setIsProcessing(true);
    try {
      await updateProfile({ avatar_url: undefined });
      if (profile.id) {
        await updateStudentProfile(profile.id, { avatar_url: undefined });
      }
      playSound('pop');
      onSuccess?.();
      onClose();
    } catch {
      setErrorMsg("Rasmni o'chirishda xatolik");
    } finally {
      setIsProcessing(false);
    }
  };

  const initials = profile?.full_name 
    ? profile.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : 'PS';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Profil Rasmini Yangilash (Avatar)"
    >
      <div className="space-y-5">
        {/* Top Preview Section */}
        <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-indigo-50/40 rounded-2xl border border-slate-200/80">
          <div className="relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100 flex items-center justify-center">
              {previewUrl ? (
                <img 
                  src={previewUrl} 
                  alt="Profile Preview" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-black text-2xl text-indigo-600">
                  {initials}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 p-2 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition cursor-pointer border-2 border-white"
              title="Kamera yoki fayldan tanlash"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center mt-3">
            <h4 className="font-bold text-slate-900 text-sm">{profile?.full_name || 'Talaba'}</h4>
            <p className="text-xs text-slate-500">{profile?.email}</p>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Tab Switcher: Custom Photo vs Preset Avatars */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'upload'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>O'z Rasmingizni Yuklash</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('preset')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'preset'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tayyor Avatarlar</span>
          </button>
        </div>

        {/* Tab 1: Upload Custom Photo */}
        {activeTab === 'upload' && (
          <div className="space-y-3">
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileChange} 
            />

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 hover:border-indigo-500 bg-slate-50 hover:bg-indigo-50/40 rounded-2xl p-6 text-center cursor-pointer transition flex flex-col items-center justify-center gap-2"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Rasmni bu yerga tashlang yoki <span className="text-indigo-600 underline">faylni tanlang</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  JPG, PNG, WEBP • Avtomatik 320x320 formatda siqiladi
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Preset Library */}
        {activeTab === 'preset' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-500">
              O'zingizga mos biror rasmiy timsolni tanlang:
            </p>
            <div className="grid grid-cols-4 gap-2.5 max-h-48 overflow-y-auto p-1">
              {PRESET_AVATARS.map((p) => {
                const isSelected = selectedPresetId === p.id || previewUrl === p.svg;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className={`relative p-2 rounded-xl border flex flex-col items-center justify-center transition cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-500 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    title={p.label}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
                      <img src={p.svg} alt={p.label} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 truncate w-full text-center">
                      {p.label}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          {profile?.avatar_url ? (
            <button
              type="button"
              disabled={isProcessing}
              onClick={handleRemovePhoto}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-bold transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Rasmni O'chirish</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isProcessing}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
            >
              Bekor qilish
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isProcessing || previewUrl === profile?.avatar_url}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition cursor-pointer disabled:opacity-50"
            >
              <Check className="w-4 h-4" />
              <span>{isProcessing ? 'Saqlanmoqda...' : 'Rasmni Saqlash'}</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
