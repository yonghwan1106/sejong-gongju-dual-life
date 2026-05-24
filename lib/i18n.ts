export type Locale = 'ko' | 'en';

const STORAGE_KEY = 'sgv2-locale';

export function getLocale(): Locale {
  if (typeof window === 'undefined') return 'ko';
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ko' || stored === 'en') return stored;
  } catch {}
  return 'ko';
}

export function setLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
}
