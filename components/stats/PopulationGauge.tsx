'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';

const smallStats = [
  {
    value: '−22%',
    label: '16년간 인구 감소',
    href: 'https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B040A3',
    source: 'KOSIS 주민등록인구현황 2026.2',
  },
  {
    value: '89개',
    label: '인구감소지역 포함',
    href: 'https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=93327',
    source: '행안부 2022 인구감소지역 지정 고시',
  },
  {
    value: '779만',
    label: '생활인구 (전국 3위)',
    href: 'https://www.tourismdatalab.kr/',
    source: '한국관광데이터랩 2024',
  },
];

function CountUp({ target, duration = 1.8 }: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('ko-KR')}
    </span>
  );
}

export default function PopulationGauge() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const current = 99551;
  const target = 100000;
  const pct = (current / target) * 100;
  const remaining = target - current;

  return (
    <section ref={sectionRef} className="bg-white dark:bg-[#0F0F0F] py-20 border-y border-[#E2DDD6] dark:border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            현황 분석
          </span>
          <div className="mt-1 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: big number + gauge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#1F1F1F] leading-none mb-2 tabular-nums"
              style={{ fontWeight: 900 }}
            >
              <SourceLink
                href="https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B040A3"
                label="KOSIS 주민등록인구현황 2026.2"
              >
                <CountUp target={current} />
              </SourceLink>
            </div>
            <p className="text-[#8A8A8A] text-sm mb-8">
              공주시 주민등록 인구 (2026.2 기준)
            </p>

            {/* Gauge bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-[#8A8A8A] mb-2">
                <span>현재</span>
                <span className="font-semibold text-[#2D5F5D]">
                  목표: 100,000명
                </span>
              </div>
              <div className="relative h-3 bg-[#F5F1EB] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : {}}
                  transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
                  className="absolute left-0 top-0 h-full bg-[#6B4423] rounded-full"
                />
                {/* Target marker */}
                <div className="absolute right-0 top-0 w-0.5 h-full bg-[#2D5F5D]" />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-[#8A8A8A]">
                  {pct.toFixed(1)}% 달성
                </span>
                <span className="text-xs font-semibold text-[#C8553D]">
                  {remaining.toLocaleString('ko-KR')}명 남았습니다
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: small stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            {smallStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-xl border border-[#E2DDD6] bg-[#FAF7F2]"
              >
                <div
                  className="text-3xl font-black text-[#6B4423] tabular-nums min-w-[80px]"
                  style={{ fontWeight: 900 }}
                >
                  <SourceLink href={s.href} label={s.source}>
                    {s.value}
                  </SourceLink>
                </div>
                <div className="text-sm text-[#555555]">{s.label}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-5 rounded-xl bg-[#2D5F5D] text-white"
            >
              <div className="text-xs font-semibold tracking-widest uppercase opacity-70 mb-1">
                이 제안의 핵심
              </div>
              <div className="text-base font-bold leading-snug" style={{ wordBreak: 'keep-all' }}>
                BRT로 30분 통근 + 3종 인센티브 =<br />
                <span className="text-[#A8D5D3]">인구 100,000 회복 경로</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
