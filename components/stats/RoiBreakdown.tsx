'use client';

import { motion } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';

interface CalcStep {
  label: string;
  formula: string;
  result: string;
  accent?: boolean;
}

const steps3yr: CalcStep[] = [
  {
    label: '1가구 연 소비',
    formula: '월 200만원 × 12개월',
    result: '= 2,400만원',
  },
  {
    label: '3년 누적 지역 소비',
    formula: '2,400만원 × 800가구',
    result: '= 192억원',
    accent: true,
  },
];

const steps3yrCost: CalcStep[] = [
  { label: '이사비 지원', formula: '50만 × 700가구', result: '= 3.5억원' },
  { label: 'BRT 정기권', formula: '144만 × 350가구', result: '= 5.04억원' },
  { label: '정착 코디 운영', formula: '2.1억원 / 3년', result: '= 2.1억원' },
  {
    label: '3년 시 직접 비용',
    formula: '합계',
    result: '= 10.64억원',
    accent: true,
  },
];

const steps5yr: CalcStep[] = [
  {
    label: '5년 누적 소비',
    formula: '1,500가구 × 2,400만원 × (3/5 비율 적용)',
    result: '≈ 270억원',
    accent: true,
  },
  {
    label: '5년 시 비용',
    formula: '이사비·BRT·코디 누적',
    result: '≈ 13억원',
  },
];

function CalcBlock({ steps, label }: { steps: CalcStep[]; label: string }) {
  return (
    <div className="rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] overflow-hidden">
      <div className="bg-[#E8DDD3] dark:bg-[#2A2A2A] px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6B4423] dark:text-[#D4A574]">{label}</p>
      </div>
      <div className="bg-white dark:bg-[#1A1A1A] divide-y divide-[#E2DDD6] dark:divide-[#2A2A2A]">
        {steps.map((step) => (
          <div
            key={step.label}
            className={`px-5 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 ${
              step.accent ? 'bg-[#FAF7F2] dark:bg-[#0F0F0F]' : ''
            }`}
          >
            <div className="flex flex-col gap-0.5">
              <span
                className={`text-xs font-semibold ${
                  step.accent
                    ? 'text-[#6B4423] dark:text-[#D4A574]'
                    : 'text-[#555555] dark:text-[#AAAAAA]'
                }`}
                style={{ wordBreak: 'keep-all' }}
              >
                {step.label}
              </span>
              <span className="text-[11px] text-[#8A8A8A] font-mono">{step.formula}</span>
            </div>
            <span
              className={`text-sm font-black tabular-nums ${
                step.accent
                  ? 'text-[#6B4423] dark:text-[#D4A574]'
                  : 'text-[#1F1F1F] dark:text-[#F0F0F0]'
              }`}
              style={{ fontWeight: 900 }}
            >
              {step.result}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoiBreakdown() {
  return (
    <section
      id="roi"
      className="bg-white dark:bg-[#0F0F0F] py-20 border-t border-[#E2DDD6] dark:border-[#2A2A2A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            투자 대비 효과
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            ROI 21배{' '}
            <span className="text-[#6B4423]">— 수식으로 검증</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        {/* ROI summary badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          {[
            { label: '3년 기준 ROI', value: '18배', sub: '192억 ÷ 10.64억', color: '#6B4423' },
            { label: '5년 기준 ROI', value: '21배', sub: '270억 ÷ 13억', color: '#2D5F5D' },
            {
              label: '비교: 화천 산천어축제',
              value: '40배',
              sub: '30억 → 1,200억',
              color: '#C8553D',
              href: 'https://www.hwacheon.go.kr/',
              source: '화천군 산천어축제 경제효과 보고서',
            },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex-1 rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#1A1A1A] px-6 py-5 flex flex-col gap-1.5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A]">
                {badge.label}
              </p>
              <p
                className="text-4xl font-black tabular-nums leading-none"
                style={{ fontWeight: 900, color: badge.color }}
              >
                {badge.href ? (
                  <SourceLink href={badge.href} label={badge.source ?? ''}>
                    {badge.value}
                  </SourceLink>
                ) : (
                  badge.value
                )}
              </p>
              <p className="text-xs text-[#8A8A8A] font-mono">{badge.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Calculation blocks */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <CalcBlock steps={steps3yr} label="지역 소비 편익 (3년)" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CalcBlock steps={steps3yrCost} label="시 직접 비용 (3년)" />
          </motion.div>
        </div>

        {/* 5yr summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <CalcBlock steps={steps5yr} label="5년 누적 시나리오" />
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 text-xs text-[#8A8A8A] leading-relaxed"
          style={{ wordBreak: 'keep-all' }}
        >
          * 소비 편익은 가구당 월 200만원(통계청 2인 가구 평균 소비 기준) 적용. 시 직접 비용은 이사비·BRT 정기권·정착 코디 운영비만 포함(간접 행정비 미포함). 화천 산천어축제 비교는{' '}
          <SourceLink href="https://www.hwacheon.go.kr/" label="화천군 산천어축제 경제효과 보고서">
            화천군 공식 보고서
          </SourceLink>
          {' '}기준.
        </motion.p>
      </div>
    </section>
  );
}
