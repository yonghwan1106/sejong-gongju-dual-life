'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stops = [
  { name: '세종 한별동', sub: '출발', side: 'left' },
  { name: '세종 어진동', sub: '중간', side: 'mid' },
  { name: '공주 버스터미널', sub: '도착', side: 'right' },
];

export default function RouteVisualizer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-20 border-b border-[#E2DDD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            BRT 통근 시뮬레이션
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            30분이면
            <br />
            <span className="text-[#2D5F5D]">세종 직장에 닿는다</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#2D5F5D]" />
        </motion.div>

        {/* Route line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mb-10"
        >
          <div className="flex items-center justify-between relative">
            {/* Track line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[#E2DDD6] rounded-full z-0">
              {/* Animated fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                className="h-full bg-[#2D5F5D] rounded-full"
              />
            </div>

            {/* Animated train dot */}
            {inView && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 z-20"
                initial={{ left: '0%' }}
                animate={{ left: ['0%', '100%', '0%'] }}
                transition={{
                  duration: 4,
                  delay: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.45, 1],
                }}
              >
                <div className="w-5 h-5 rounded-full bg-[#2D5F5D] border-2 border-white shadow-md -translate-x-1/2" />
              </motion.div>
            )}

            {/* Stops */}
            {stops.map((stop, i) => (
              <motion.div
                key={stop.name}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className={`relative z-10 flex flex-col items-center ${
                  i === 0 ? 'items-start' : i === stops.length - 1 ? 'items-end' : 'items-center'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white border-2 border-[#2D5F5D] mb-3 shadow-sm" />
                <div className={`text-center ${i === 0 ? 'text-left' : i === stops.length - 1 ? 'text-right' : 'text-center'}`}>
                  <div className="text-sm font-bold text-[#1F1F1F]">{stop.name}</div>
                  <div className="text-xs text-[#8A8A8A]">{stop.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Route stats inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center gap-6 mt-8 flex-wrap"
          >
            {[
              { label: '노선 거리', value: '18.5km' },
              { label: '배차 간격', value: '8분' },
              { label: '통근 시간', value: '약 30분' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black text-[#2D5F5D] tabular-nums" style={{ fontWeight: 900 }}>
                  {s.value}
                </div>
                <div className="text-xs text-[#8A8A8A]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.6 }}
            className="p-6 rounded-2xl bg-[#2D5F5D] text-white"
          >
            <div className="text-xs font-semibold tracking-widest uppercase opacity-60 mb-2">
              정기권 혜택
            </div>
            <div className="text-2xl font-black mb-1" style={{ fontWeight: 900 }}>
              12개월 무료
            </div>
            <div className="text-sm opacity-80">
              월 12만원 × 12개월 ={' '}
              <span className="font-bold text-[#A8D5D3]">연 144만원 절감</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.75 }}
            className="p-6 rounded-2xl border border-[#E2DDD6] bg-[#FAF7F2]"
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-2">
              무료 환승
            </div>
            <div className="text-base font-bold text-[#1F1F1F] mb-1">
              대전 · 세종 · 오송 BRT
            </div>
            <div className="text-sm text-[#555]">
              세종~공주 BRT 개통 후<br />광역 환승 연계 무료 전환
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
