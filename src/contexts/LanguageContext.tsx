import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../i18n/translations';
import { getStorageItem, setStorageItem } from '../lib/storage';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en'] | (string & {})) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return getStorageItem<Language>('premier_lms_lang', 'uz');
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setStorageItem('premier_lms_lang', lang);
  };

  const t = (key: keyof typeof translations['en']): string => {
    const dict = translations[language] || translations.en;
    return dict[key] || translations.en[key] || (key as string);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
