'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView, AnimatePresence } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';
import { SectionHeading } from '@/components/ui/SectionHeading';

const YEARS = [2025, 2026, 2027, 2028, 2029, 2030] as const;
type Year = (typeof YEARS)[number];

interface YearData {
  population: number;
  households: number;
  budgetBillion: number; // 억원
  phase: string;
  phaseEn: string;
  color: string;
}

const DATA: Record<Year, YearData> = {
  2025: {
    population: 99551,
    households: 0,
    budgetBillion: 0,
    phase: '준비',
    phaseEn: 'Preparation',
    color: '#8A8A8A',
  },
  2026: {
    population: 99951,
    households: 200,
    budgetBillion: 3.14,
    phase: 'BRT 개통 동시 1차',
    phaseEn: 'BRT Launch — Phase 1',
    color: '#6B4423',
  },
  2027: {
    population: 101400,
    households: 500,
    budgetBillion: 6.28,
    phase: '확산 본격화',
    phaseEn: 'Expansion Begins',
    color: '#8A5C35',
  },
  2028: {
    population: 103500,
    households: 800,
    budgetBillion: 10.64,
    phase: '안정화',
    phaseEn: 'Stabilization',
    color: '#2D5F5D',
  },
  2029: {
    population: 104800,
    households: 1100,
    budgetBillion: 13.78,
    phase: '행안부 우수사례',
    phaseEn: 'MOIS Best Practice',
    color: '#3A7A77',
  },
  2030: {
    population: 106500,
    households: 1500,
    budgetBillion: 17,
    phase: '10만 회복 + 추가 성장',
    phaseEn: '100K Restored + Growth',
    color: '#C8553D',
  },
};

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const from = prevRef.current;
    prevRef.current = value;
    const controls = animate(from, value, {
      duration: 0.7,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span className="tabular-nums">
      {display.toLocaleString('ko-KR')}
      {suffix}
    </span>
  );
}

function AnimatedDecimal({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const from = prevRef.current;
    prevRef.current = value;
    const controls = animate(from, value, {
      duration: 0.7,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v * 100) / 100),
    });
    return () => controls.stop();
  }, [value]);

  return <span className="tabular-nums">{display.toFixed(2)}</span>;
}

const BASELINE: Record<Year, number> = {
  2025: 99551,
  2026: 99200,
  2027: 98800,
  2028: 98300,
  2029: 97800,
  2030: 97300,
};

const EXPAND_CARDS = [
  {
    title: '공주 모델 매뉴얼화',
    desc: '행안부 우수사례 등재 → 전국 표준 가이드라인 수록',
  },
  {
    title: '전국 12개 지역 확산',
    desc: '광역시 인접 인구감소지역 12개 즉시 적용 가능',
  },
  {
    title: '지방소멸대응기금 영구 매칭',
    desc: '5년 성과 기반 기금 매칭 영구화 — 재정 자립 구조',
  },
];

export default function Roadmap2030() {
  const [selectedYear, setSelectedYear] = useState<Year>(2025);
  const [expandOpen, setExpandOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const data = DATA[selectedYear];
  const maxPop = DATA[2030].population;
  const minPop = DATA[2025].population;
  const progressPct = ((data.population - minPop) / (maxPop - minPop)) * 100;

  return (
    <section ref={ref} id="roadmap" className="bg-white dark:bg-[#0F0F0F] py-20 border-b border-[#E2DDD6] dark:border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="비전 2030"
            title={<>비전 2030 —{' '}<span className="text-[#C8553D]">공주 인구 10만 회복 시나리오</span></>}
            accentColor="#C8553D"
          />
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Left: Year selector */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-2"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-2">
              연도 선택
            </p>
            {YEARS.map((year) => {
              const d = DATA[year];
              const isActive = year === selectedYear;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  aria-pressed={isActive}
                  aria-label={`${year}년 선택`}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none ${
                    isActive
                      ? 'border-[#6B4423] dark:border-[#D4A574] bg-[#FAF7F2] dark:bg-[#1A1A1A] shadow-sm'
                      : 'border-[#E2DDD6] dark:border-[#2A2A2A] hover:border-[#6B4423]/40 dark:hover:border-[#D4A574]/40 hover:bg-[#FAF7F2] dark:hover:bg-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-base font-black"
                      style={{ color: isActive ? d.color : '#8A8A8A', fontWeight: 900 }}
                    >
                      {year}
                    </span>
                    {isActive && (
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: d.color }}
                      >
                        선택됨
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#8A8A8A] dark:text-[#666] mt-0.5">{d.phase}</div>
                </button>
              );
            })}
          </motion.div>

          {/* Right: Result panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-5"
          >
            {/* Phase message */}
            <motion.div
              key={selectedYear + '-phase'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-5 rounded-2xl border-2 dark:border-[#2A2A2A]"
              style={{ borderColor: data.color, backgroundColor: data.color + '10' }}
            >
              <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: data.color }}>
                {selectedYear}년 단계
              </div>
              <div
                className="text-xl font-black text-[#1F1F1F] dark:text-[#F0F0F0]"
                style={{ fontWeight: 900, wordBreak: 'keep-all' }}
              >
                {data.phase}
              </div>
            </motion.div>

            {/* KPI cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Population */}
              <div className="p-5 rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#1A1A1A]">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-2">
                  추정 인구
                </div>
                <div className="text-2xl font-black text-[#1F1F1F] dark:text-[#F0F0F0]" style={{ fontWeight: 900 }}>
                  <SourceLink href="https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B040A3" label="KOSIS 주민등록인구 · 제안서 vF">
                    <AnimatedNumber value={data.population} />
                  </SourceLink>
                </div>
                <div className="text-xs text-[#8A8A8A] mt-0.5">명</div>
                {/* Mini progress */}
                <div className="mt-3 h-1.5 bg-[#E2DDD6] dark:bg-[#2A2A2A] rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: data.color }}
                  />
                </div>
              </div>

              {/* Households */}
              <div className="p-5 rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#1A1A1A]">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-2">
                  누적 전입 가구
                </div>
                <div className="text-2xl font-black text-[#2D5F5D] dark:text-[#5BAAA6]" style={{ fontWeight: 900 }}>
                  <SourceLink href="https://www.gongju.go.kr/" label="공주시 인구정책 제안서 vF">
                    <AnimatedNumber value={data.households} />
                  </SourceLink>
                </div>
                <div className="text-xs text-[#8A8A8A] mt-0.5">가구</div>
              </div>

              {/* Budget */}
              <div className="p-5 rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#1A1A1A]">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-2">
                  예산 누적
                </div>
                <div className="text-2xl font-black text-[#6B4423] dark:text-[#D4A574]" style={{ fontWeight: 900 }}>
                  <SourceLink href="https://www.gongju.go.kr/" label="공주시 인구정책 제안서 vF 재정분석">
                    <AnimatedDecimal value={data.budgetBillion} />
                  </SourceLink>
                </div>
                <div className="text-xs text-[#8A8A8A] mt-0.5">억원</div>
              </div>
            </div>

            {/* Timeline bar */}
            <div className="pt-2">
              <div className="flex justify-between text-[11px] text-[#8A8A8A] mb-2">
                <span>2025</span>
                <span className="font-semibold text-[#C8553D]">목표 2030: 10만 돌파</span>
              </div>
              <div className="relative h-2 bg-[#F5F1EB] dark:bg-[#2A2A2A] rounded-full overflow-hidden">
                {YEARS.map((year, i) => {
                  const pct = (i / (YEARS.length - 1)) * 100;
                  const isActive = year === selectedYear;
                  const isPast = year <= selectedYear;
                  return (
                    <motion.div
                      key={year}
                      className="absolute top-0 h-full rounded-full"
                      style={{
                        left: 0,
                        width: isPast ? `${pct === 0 ? 2 : pct}%` : 0,
                        backgroundColor: DATA[year].color,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      animate={{ width: isPast ? `${pct === 0 ? 2 : pct}%` : 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-2">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    aria-label={`${year}년`}
                    aria-pressed={year === selectedYear}
                    className={`text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 rounded ${
                      year === selectedYear
                        ? 'text-[#6B4423] dark:text-[#D4A574]'
                        : 'text-[#8A8A8A] hover:text-[#6B4423] dark:hover:text-[#D4A574]'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 정책 미적용 시나리오 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-5 rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#1A1A1A]"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-4">
            정책 미적용 시나리오 비교
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {YEARS.map((year) => {
              const withPolicy = DATA[year].population;
              const without = BASELINE[year];
              const diff = withPolicy - without;
              const isSelected = year === selectedYear;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-[#C8553D] bg-white dark:bg-[#0F0F0F]'
                      : 'border-[#E2DDD6] dark:border-[#2A2A2A] hover:border-[#C8553D]/40'
                  }`}
                >
                  <span className="text-[10px] font-semibold text-[#8A8A8A]">{year}</span>
                  <span className="text-xs font-black text-[#C8553D] tabular-nums">
                    {withPolicy.toLocaleString('ko-KR')}
                  </span>
                  <span className="text-[10px] text-[#8A8A8A] tabular-nums line-through">
                    {without.toLocaleString('ko-KR')}
                  </span>
                  {diff > 0 && (
                    <span className="text-[10px] font-bold text-[#2D5F5D]">
                      +{diff.toLocaleString('ko-KR')}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-[#8A8A8A]">
            2030 기준 정책 적용 vs 미적용 차이:{' '}
            <span className="font-bold text-[#C8553D]">
              +{(DATA[2030].population - BASELINE[2030]).toLocaleString('ko-KR')}명
            </span>
          </p>
        </motion.div>

        {/* 2030+ 확산 시나리오 토글 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6"
        >
          <button
            onClick={() => setExpandOpen((v) => !v)}
            className="flex items-center gap-2 text-sm font-semibold text-[#6B4423] dark:text-[#D4A574] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 rounded"
            aria-expanded={expandOpen}
          >
            <span
              className="inline-block transition-transform duration-200"
              style={{ transform: expandOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              ▶
            </span>
            2030+ 확산 시나리오 보기
          </button>

          <AnimatePresence>
            {expandOpen && (
              <motion.div
                key="expand"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  {EXPAND_CARDS.map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="p-5 rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]"
                    >
                      <div className="text-xs font-semibold tracking-widest uppercase text-[#6B4423] dark:text-[#D4A574] mb-2">
                        0{i + 1}
                      </div>
                      <div className="text-sm font-black text-[#1F1F1F] dark:text-[#F0F0F0] mb-1" style={{ wordBreak: 'keep-all' }}>
                        {card.title}
                      </div>
                      <div className="text-xs text-[#8A8A8A] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                        {card.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
