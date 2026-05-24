'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
import { useLocale } from '@/components/i18n/LocaleProvider';

const NAV_LINKS = [
  { labelKey: 'navWhy' as const, anchor: 'why' },
  { labelKey: 'navCalculator' as const, anchor: 'calculator' },
  { labelKey: 'navPolicy' as const, anchor: 'policy' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (menuOpen && scrolled) setMenuOpen(false);
  }, [scrolled, menuOpen]);

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
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-tight text-[#6B4423] dark:text-[#D4A574]">
            {t('navTitle')}
          </span>
          <span className="hidden sm:block text-[#E2DDD6] dark:text-[#2A2A2A]">|</span>
          <span className="hidden sm:block text-xs text-[#8A8A8A]">
            {t('navSubtitle')}
          </span>
        </div>

        {/* Right: desktop nav + controls */}
        <div className="flex items-center gap-1">
          {/* Desktop anchor links */}
          <nav
            aria-label="사이트 내비게이션"
            className="hidden md:flex items-center gap-1 mr-2"
          >
            {NAV_LINKS.map(({ labelKey, anchor }) => (
              <button
                key={anchor}
                onClick={() => scrollTo(anchor)}
                className="text-xs font-medium text-[#555555] dark:text-[#AAAAAA] px-3 py-1.5 rounded-full hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A] hover:text-[#6B4423] dark:hover:text-[#D4A574] transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:outline-none"
              >
                {t(labelKey)}
              </button>
            ))}
          </nav>

          <Badge
            variant="outline"
            className="text-[10px] border-[#E2DDD6] dark:border-[#2A2A2A] text-[#8A8A8A] hidden sm:flex"
          >
            {t('navBadge')}
          </Badge>

          <LangToggle />
          <ThemeToggle />

          {/* Apply CTA */}
          <a
            href="#apply"
            className="text-xs font-semibold bg-[#6B4423] dark:bg-[#D4A574] text-white dark:text-[#0F0F0F] px-3 py-1.5 rounded-full hover:bg-[#8A5C35] dark:hover:bg-[#E8C49A] transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t('navApply')}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="md:hidden ml-1 p-1.5 rounded-lg text-[#555555] dark:text-[#AAAAAA] hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A] transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:outline-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-md border-t border-[#E2DDD6] dark:border-[#2A2A2A] px-4 py-3 flex flex-col gap-1"
          role="navigation"
          aria-label="모바일 내비게이션"
        >
          {NAV_LINKS.map(({ labelKey, anchor }) => (
            <button
              key={anchor}
              onClick={() => {
                scrollTo(anchor);
                setMenuOpen(false);
              }}
              className="text-sm font-medium text-[#555555] dark:text-[#AAAAAA] px-3 py-2.5 rounded-xl text-left hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A] hover:text-[#6B4423] dark:hover:text-[#D4A574] transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:outline-none"
            >
              {t(labelKey)}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo('apply');
              setMenuOpen(false);
            }}
            className="text-sm font-medium text-[#555555] dark:text-[#AAAAAA] px-3 py-2.5 rounded-xl text-left hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A] hover:text-[#6B4423] dark:hover:text-[#D4A574] transition-colors"
          >
            {t('navApply')}
          </button>
        </div>
      )}
    </header>
  );
}
