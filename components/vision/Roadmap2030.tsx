'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';

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

export default function Roadmap2030() {
  const [selectedYear, setSelectedYear] = useState<Year>(2025);
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            비전 2030
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            비전 2030 —{' '}
            <span className="text-[#C8553D]">공주 인구 10만 회복 시나리오</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#C8553D]" />
        </motion.div>

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
      </div>
    </section>
  );
}
