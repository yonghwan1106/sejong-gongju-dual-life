'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const BrtCountdown = dynamic(() => import('./BrtCountdown'), { ssr: false });

const kpis = [
  { value: '+1,600명', label: '3년 전입 목표' },
  { value: 'ROI 21배', label: '재정 투자 대비' },
  { value: '연 2.2억', label: '시 부담 예산' },
];

export default function HeroBlock() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle background texture lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #6B4423 0px, #6B4423 1px, transparent 1px, transparent 80px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#6B4423] bg-[#E8DDD3] px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4423] animate-pulse" />
            2026 공주시 시정발전 아이디어 공모전
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-[#1F1F1F] mb-5"
          style={{ fontWeight: 900, wordBreak: 'keep-all' }}
        >
          세종에서 일하고,
          <br />
          <span className="text-[#6B4423]">공주에서 산다</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-[#555555] mb-2 max-w-2xl"
          style={{ wordBreak: 'keep-all' }}
        >
          2027년 1월 BRT 개통, 공주 정착 패스트트랙
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm text-[#8A8A8A] mb-8"
        >
          2026 공주시 시정발전 아이디어 공모전 제안 — 박용환
        </motion.p>

        {/* BRT Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mb-8"
        >
          <BrtCountdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('calculator')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6B4423] text-white text-sm font-semibold rounded-full hover:bg-[#8A5C35] transition-colors shadow-sm"
          >
            내 절감액 계산하기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('incentives')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E2DDD6] text-[#1F1F1F] text-sm font-medium rounded-full hover:bg-[#F5F1EB] transition-colors"
          >
            정책 살펴보기
          </motion.button>
        </motion.div>

        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-0 border border-[#E2DDD6] rounded-2xl overflow-hidden bg-white max-w-2xl"
        >
          {kpis.map((kpi, i) => (
            <div
              key={kpi.value}
              className={`flex-1 px-6 py-5 ${
                i < kpis.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#E2DDD6]' : ''
              }`}
            >
              <div
                className="text-2xl sm:text-3xl font-black text-[#6B4423] tabular-nums mb-1"
                style={{ fontWeight: 900 }}
              >
                {kpi.value}
              </div>
              <div className="text-xs text-[#8A8A8A]">{kpi.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#8A8A8A]"
      >
        <span className="text-xs tracking-widest uppercase">아래로</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
