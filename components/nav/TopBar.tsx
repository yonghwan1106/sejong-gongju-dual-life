'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E2DDD6] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-sm font-700 tracking-tight text-[#6B4423]"
            style={{ fontWeight: 700 }}
          >
            공주 듀얼라이프
          </span>
          <span className="hidden sm:block text-[#E2DDD6]">|</span>
          <span className="hidden sm:block text-xs text-[#8A8A8A]">
            2026 공주시 시정발전 아이디어 공모전
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="text-[10px] border-[#E2DDD6] text-[#8A8A8A] hidden sm:flex"
          >
            제안 데모
          </Badge>
          <a
            href="#apply"
            className="text-xs font-semibold bg-[#6B4423] text-white px-3 py-1.5 rounded-full hover:bg-[#8A5C35] transition-colors"
          >
            관심 등록
          </a>
        </div>
      </div>
    </header>
  );
}
