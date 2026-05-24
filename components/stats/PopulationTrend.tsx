'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';

// Data points: [year, population]
const DATA: [number, number][] = [
  [1995, 138069],
  [1997, 135000],
  [2000, 130000],
  [2005, 128500],
  [2010, 127500],
  [2013, 121000],
  [2015, 110000],
  [2018, 107000],
  [2020, 104000],
  [2023, 101500],
  [2026, 99551],
];

const W = 700;
const H = 260;
const PAD = { top: 32, right: 32, bottom: 48, left: 64 };

function scaleX(year: number) {
  const minY = DATA[0][0];
  const maxY = DATA[DATA.length - 1][0];
  return PAD.left + ((year - minY) / (maxY - minY)) * (W - PAD.left - PAD.right);
}

function scaleY(pop: number) {
  const minP = 90000;
  const maxP = 145000;
  return PAD.top + ((maxP - pop) / (maxP - minP)) * (H - PAD.top - PAD.bottom);
}

// Build smooth cubic bezier path
function buildPath(points: [number, number][]): string {
  if (points.length < 2) return '';
  const pts = points.map(([y, p]) => ({ x: scaleX(y), y: scaleY(p) }));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const linePath = buildPath(DATA);

// Area path (close to bottom)
function buildArea(points: [number, number][]): string {
  const pts = points.map(([y, p]) => ({ x: scaleX(y), y: scaleY(p) }));
  const lastX = pts[pts.length - 1].x;
  const firstX = pts[0].x;
  const baseline = scaleY(90000);
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  d += ` L ${lastX} ${baseline} L ${firstX} ${baseline} Z`;
  return d;
}

const areaPath = buildArea(DATA);

const HUNDRED_K_Y = scaleY(100000);
const PEAK = DATA[0];
const LAST = DATA[DATA.length - 1];

const Y_TICKS = [100000, 110000, 120000, 130000, 138069].map((v) => ({
  v,
  y: scaleY(v),
  label: v === 138069 ? '138,069' : `${(v / 10000).toFixed(0)}만`,
}));

const X_TICKS = [1995, 2000, 2005, 2010, 2015, 2020, 2026];

export default function PopulationTrend() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="trend"
      className="bg-white dark:bg-[#0F0F0F] py-20 border-t border-[#E2DDD6] dark:border-[#2A2A2A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            인구 추이
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            30년의 곡선 —
            <br />
            <span className="text-[#C8553D]">공주가 잃은 사람들</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative overflow-x-auto dark:opacity-80"
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full max-w-[700px] mx-auto block"
            style={{ minWidth: 320 }}
            aria-label="공주시 인구 추이 1995~2026"
            role="img"
          >
            <defs>
              <linearGradient id="popGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6B4423" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#6B4423" stopOpacity="0.01" />
              </linearGradient>
              <clipPath id="chartClip">
                <rect
                  x={PAD.left}
                  y={PAD.top - 4}
                  width={W - PAD.left - PAD.right}
                  height={H - PAD.top - PAD.bottom + 4}
                />
              </clipPath>
            </defs>

            {/* Y gridlines */}
            {Y_TICKS.map((t) => (
              <g key={t.v}>
                <line
                  x1={PAD.left}
                  x2={W - PAD.right}
                  y1={t.y}
                  y2={t.y}
                  stroke="#E2DDD6"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={PAD.left - 8}
                  y={t.y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#8A8A8A"
                  fontFamily="var(--font-pretendard, sans-serif)"
                >
                  {t.label}
                </text>
              </g>
            ))}

            {/* 100,000 line */}
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={HUNDRED_K_Y}
              y2={HUNDRED_K_Y}
              stroke="#C8553D"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              opacity="0.7"
            />
            <text
              x={W - PAD.right + 4}
              y={HUNDRED_K_Y + 4}
              fontSize="9"
              fill="#C8553D"
              fontFamily="var(--font-pretendard, sans-serif)"
              fontWeight="600"
            >
              10만
            </text>
            <text
              x={W - PAD.right + 4}
              y={HUNDRED_K_Y + 14}
              fontSize="8"
              fill="#C8553D"
              fontFamily="var(--font-pretendard, sans-serif)"
              opacity="0.8"
            >
              마지노선
            </text>

            {/* X axis labels */}
            {X_TICKS.map((yr) => (
              <text
                key={yr}
                x={scaleX(yr)}
                y={H - PAD.bottom + 18}
                textAnchor="middle"
                fontSize="10"
                fill="#8A8A8A"
                fontFamily="var(--font-pretendard, sans-serif)"
              >
                {yr}
              </text>
            ))}

            {/* Area fill */}
            <motion.path
              d={areaPath}
              fill="url(#popGrad)"
              clipPath="url(#chartClip)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
            />

            {/* Line */}
            <motion.path
              d={linePath}
              fill="none"
              stroke="#6B4423"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              clipPath="url(#chartClip)"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
            />

            {/* Peak marker — 1995 */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.4 }}
              style={{ transformOrigin: `${scaleX(PEAK[0])}px ${scaleY(PEAK[1])}px` }}
            >
              <circle
                cx={scaleX(PEAK[0])}
                cy={scaleY(PEAK[1])}
                r="5"
                fill="#6B4423"
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={scaleX(PEAK[0]) + 8}
                y={scaleY(PEAK[1]) - 6}
                fontSize="10"
                fill="#6B4423"
                fontWeight="700"
                fontFamily="var(--font-pretendard, sans-serif)"
              >
                138,069
              </text>
              <text
                x={scaleX(PEAK[0]) + 8}
                y={scaleY(PEAK[1]) + 5}
                fontSize="9"
                fill="#8A8A8A"
                fontFamily="var(--font-pretendard, sans-serif)"
              >
                1995 정점
              </text>
            </motion.g>

            {/* Current marker — 2026 */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.9 }}
              style={{ transformOrigin: `${scaleX(LAST[0])}px ${scaleY(LAST[1])}px` }}
            >
              <circle
                cx={scaleX(LAST[0])}
                cy={scaleY(LAST[1])}
                r="6"
                fill="#C8553D"
                stroke="white"
                strokeWidth="2.5"
              />
              <text
                x={scaleX(LAST[0]) - 8}
                y={scaleY(LAST[1]) + 18}
                fontSize="10"
                fill="#C8553D"
                fontWeight="700"
                fontFamily="var(--font-pretendard, sans-serif)"
                textAnchor="end"
              >
                99,551
              </text>
              <text
                x={scaleX(LAST[0]) - 8}
                y={scaleY(LAST[1]) + 28}
                fontSize="9"
                fill="#8A8A8A"
                fontFamily="var(--font-pretendard, sans-serif)"
                textAnchor="end"
              >
                2026.2 현재
              </text>
            </motion.g>
          </svg>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <p className="text-sm text-[#555555] dark:text-[#AAAAAA]" style={{ wordBreak: 'keep-all' }}>
            <span className="font-semibold text-[#C8553D]">16년간 −22%</span>
            {' '}— 세종 출범(2013) 이후 인구 유출 가속. 10만 선 붕괴.
          </p>
          <SourceLink
            href="https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B040A3"
            label="KOSIS 주민등록인구현황 2026.2"
          >
            <span className="text-xs text-[#8A8A8A]">출처: KOSIS 2026.2</span>
          </SourceLink>
        </motion.div>
      </div>
    </section>
  );
}
