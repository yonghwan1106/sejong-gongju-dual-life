'use client';

import { useLocale } from '@/components/i18n/LocaleProvider';

export default function LangToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      aria-label={locale === 'ko' ? '영문으로 전환' : 'Switch to Korean'}
      className="flex items-center gap-0.5 text-[11px] font-semibold rounded-full border border-[#E2DDD6] overflow-hidden focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <span
        className={`px-2 py-1 transition-colors ${
          locale === 'ko'
            ? 'bg-[#6B4423] text-white'
            : 'bg-transparent text-[#8A8A8A] hover:text-[#1F1F1F]'
        }`}
      >
        KO
      </span>
      <span
        className={`px-2 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-[#6B4423] text-white'
            : 'bg-transparent text-[#8A8A8A] hover:text-[#1F1F1F]'
        }`}
      >
        EN
      </span>
    </button>
  );
}
