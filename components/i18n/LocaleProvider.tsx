'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { type Locale, getLocale, setLocale } from '@/lib/i18n';
import { translations, type TranslationKey } from '@/lib/translations';

interface LocaleContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'ko',
  toggleLocale: () => {},
  t: (key) => translations.ko[key],
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko');

  useEffect(() => {
    const saved = getLocale();
    setLocaleState(saved);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLocale = useCallback(() => {
    const next: Locale = locale === 'ko' ? 'en' : 'ko';
    setLocaleState(next);
    setLocale(next);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
    }
  }, [locale]);

  const t = useCallback(
    (key: TranslationKey): string => translations[locale][key],
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
