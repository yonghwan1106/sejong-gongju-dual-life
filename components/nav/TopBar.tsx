'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
import { useLocale } from '@/components/i18n/LocaleProvider';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#E2DDD6] dark:border-[#2A2A2A] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-sm font-700 tracking-tight text-[#6B4423] dark:text-[#D4A574]"
            style={{ fontWeight: 700 }}
          >
            {t('navTitle')}
          </span>
          <span className="hidden sm:block text-[#E2DDD6] dark:text-[#2A2A2A]">|</span>
          <span className="hidden sm:block text-xs text-[#8A8A8A]">
            {t('navSubtitle')}
          </span>
        </div>
        <nav aria-label="사이트 내비게이션" className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="text-[10px] border-[#E2DDD6] dark:border-[#2A2A2A] text-[#8A8A8A] hidden sm:flex"
          >
            {t('navBadge')}
          </Badge>
          <LangToggle />
          <ThemeToggle />
          <a
            href="#apply"
            className="text-xs font-semibold bg-[#6B4423] dark:bg-[#D4A574] text-white dark:text-[#0F0F0F] px-3 py-1.5 rounded-full hover:bg-[#8A5C35] dark:hover:bg-[#E8C49A] transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t('navApply')}
          </a>
        </nav>
      </div>
    </header>
  );
}
