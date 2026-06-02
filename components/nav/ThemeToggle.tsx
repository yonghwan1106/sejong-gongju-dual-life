'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  onHero?: boolean;
}

export default function ThemeToggle({ onHero = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="테마 전환"
        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none ${
          onHero ? 'border-white/55 bg-black/20 text-white/90 backdrop-blur-sm' : 'border-[#E2DDD6] text-[#8A8A8A]'
        }`}
      >
        <span className="sr-only">테마 전환</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none ${
        onHero
          ? 'border-white/55 bg-black/20 text-white/90 hover:bg-white/15 hover:text-white backdrop-blur-sm'
          : 'border-[#E2DDD6] dark:border-[#2A2A2A] text-[#8A8A8A] dark:text-[#A0A0A0] hover:text-[#1F1F1F] dark:hover:text-[#F0F0F0] hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A]'
      }`}
    >
      {isDark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
