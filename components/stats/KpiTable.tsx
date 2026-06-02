'use client';

import { motion } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface KpiRow {
  metric: string;
  current: string;
  y1: string;
  y3: string;
  y5: string;
}

const rows: KpiRow[] = [
  {
    metric: '주민등록 인구',
    current: '99,551명',
    y1: '99,951명 (+400)',
    y3: '101,151명 (+1,600)',
    y5: '102,551명 (+3,000)',
  },
  {
    metric: '세종 재직자 공주 전입 가구',
    current: '0가구',
    y1: '200가구',
    y3: '800가구',
    y5: '1,500가구',
  },
  {
    metric: '전입률 (세종 모수 대비)',
    current: '0.2%',
    y1: '0.4%',
    y3: '1.5%',
    y5: '3.0%',
  },
  {
    metric: 'BRT 정기권 발급 누적',
    current: '0건',
    y1: '200건',
    y3: '800건',
    y5: '1,500건',
  },
  {
    metric: '지역 소비 유입 (보수 환산)',
    current: '0억',
    y1: '48억원',
    y3: '192억원',
    y5: '270억원',
  },
  {
    metric: '학령인구 추가 전입 (자녀 40%)',
    current: '0명',
    y1: '80명',
    y3: '320명',
    y5: '600명',
  },
  {
    metric: '폐교 위기 학교 안정화',
    current: '—',
    y1: '1교',
    y3: '2~3교',
    y5: '5교+',
  },
];

const colHeaders = ['지표', '현재 (2026)', '1년차', '3년 누적', '5년 누적'];
const colWidths = ['w-[34%]', 'w-[16%]', 'w-[16%]', 'w-[16%]', 'w-[18%]'];
const colAccent = [false, false, false, true, true];

export default function KpiTable() {
  return (
    <section
      id="kpi"
      className="bg-[#FAF7F2] dark:bg-[#0F0F0F] py-20 border-t border-[#E2DDD6] dark:border-[#2A2A2A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <SectionHeading
            eyebrow="KPI"
            title={<>직접 전입 기준 KPI{' '}<span className="text-[#6B4423]">— 7개 지표</span></>}
            accentColor="#6B4423"
          />
          <p className="mt-3 text-xs text-[#8A8A8A] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
            3년 목표 +1,600명은 세종 재직자 800가구 × 2인 직접 전입 기준입니다.
            5년 확산치는 1,500가구 직접 전입 +3,000명으로 별도 표시합니다.
            <br />
            기준 문서:{' '}
            <SourceLink href="https://www.gongju.go.kr/" label="공주시 인구정책 제안서 vF lock 기준">
              제안서 vF lock 기준
            </SourceLink>
          </p>
        </div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="hidden sm:block overflow-x-auto rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]"
        >
          <table className="w-full text-sm" role="table" aria-label="5년 인구 회복 KPI 시나리오">
            <thead>
              <tr className="border-b border-[#E2DDD6] dark:border-[#2A2A2A]">
                {colHeaders.map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className={`px-5 py-4 text-left text-xs font-semibold tracking-wider uppercase ${
                      colAccent[i]
                        ? 'text-[#6B4423] dark:text-[#D4A574] bg-[#FAF7F2] dark:bg-[#0F0F0F]'
                        : 'text-[#8A8A8A]'
                    } ${colWidths[i]}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.metric}
                  className={`border-b border-[#E2DDD6] dark:border-[#2A2A2A] last:border-0 transition-colors hover:bg-[#FAF7F2] dark:hover:bg-[#0F0F0F] ${
                    i % 2 === 0 ? '' : 'bg-[#FDFCFA] dark:bg-[#161616]'
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-[#1F1F1F] dark:text-[#F0F0F0] text-sm leading-snug" style={{ wordBreak: 'keep-all' }}>
                    {row.metric}
                  </td>
                  <td className="px-5 py-4 text-[#555555] dark:text-[#AAAAAA] tabular-nums text-sm">
                    {row.current}
                  </td>
                  <td className="px-5 py-4 text-[#555555] dark:text-[#AAAAAA] tabular-nums text-sm">
                    {row.y1}
                  </td>
                  <td className="px-5 py-4 font-semibold text-[#6B4423] dark:text-[#D4A574] tabular-nums text-sm bg-[#FAF7F2] dark:bg-[#0F0F0F]">
                    {row.y3}
                  </td>
                  <td className="px-5 py-4 font-bold text-[#6B4423] dark:text-[#D4A574] tabular-nums text-sm bg-[#FAF7F2] dark:bg-[#0F0F0F]">
                    {row.y5}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile card stack */}
        <div className="sm:hidden space-y-3">
          {rows.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-5"
            >
              <p className="text-sm font-bold text-[#1F1F1F] dark:text-[#F0F0F0] mb-3" style={{ wordBreak: 'keep-all' }}>
                {row.metric}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8A8A8A] mb-0.5">현재</p>
                  <p className="text-sm tabular-nums text-[#555555] dark:text-[#AAAAAA]">{row.current}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8A8A8A] mb-0.5">1년차</p>
                  <p className="text-sm tabular-nums text-[#555555] dark:text-[#AAAAAA]">{row.y1}</p>
                </div>
                <div className="bg-[#FAF7F2] dark:bg-[#0F0F0F] rounded-lg p-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B4423] dark:text-[#D4A574] mb-0.5">3년 누적</p>
                  <p className="text-sm tabular-nums font-semibold text-[#6B4423] dark:text-[#D4A574]">{row.y3}</p>
                </div>
                <div className="bg-[#FAF7F2] dark:bg-[#0F0F0F] rounded-lg p-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B4423] dark:text-[#D4A574] mb-0.5">5년 누적</p>
                  <p className="text-sm tabular-nums font-bold text-[#6B4423] dark:text-[#D4A574]">{row.y5}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
