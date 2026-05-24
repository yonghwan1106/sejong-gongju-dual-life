'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface EvalItem {
  num: string;
  points: number;
  title: string;
  subtitle: string;
  anchors: string[];
  anchorLabels: string[];
}

const items: EvalItem[] = [
  {
    num: '①',
    points: 20,
    title: '부서 시행가능성',
    subtitle: '실제 인구증가 KPI·계산기로 검증',
    anchors: ['calculator', 'kpi'],
    anchorLabels: ['비용 계산기', 'KPI 시나리오'],
  },
  {
    num: '②',
    points: 20,
    title: '창의성',
    subtitle: '타 사례 모방 없이 공주 고유 자산 활용',
    anchors: ['why'],
    anchorLabels: ['차별성 분석'],
  },
  {
    num: '③',
    points: 20,
    title: '효과성',
    subtitle: 'ROI 21배 — 수식으로 검증된 재정 효율',
    anchors: ['roi'],
    anchorLabels: ['ROI 분해 패널'],
  },
  {
    num: '④',
    points: 20,
    title: '필요성',
    subtitle: '공주 지역특성·시민 수요 데이터 근거',
    anchors: ['gauge', 'trend'],
    anchorLabels: ['인구 게이지', '인구 추세'],
  },
  {
    num: '⑤',
    points: 20,
    title: '계속성',
    subtitle: '2030 로드맵·정책 패키지의 지속 구조',
    anchors: ['roadmap', 'policy'],
    anchorLabels: ['비전 2030', '정책 패키지'],
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function EvaluationMap() {
  return (
    <section
      id="evaluation"
      className="bg-white dark:bg-[#1A1A1A] py-20 border-b border-[#E2DDD6] dark:border-[#2A2A2A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="공모 평가표 100점"
            title={<>심사 5항목,{' '}<span className="text-[#6B4423]">사이트 어디에서 답을 보시면 됩니다</span></>}
            accentColor="#6B4423"
          />
          <p className="mt-4 text-sm text-[#8A8A8A]" style={{ wordBreak: 'keep-all' }}>
            각 평가 항목 카드를 클릭하면 해당 섹션으로 이동합니다.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {/* Card wrapper — click first anchor */}
              <button
                onClick={() => scrollTo(item.anchors[0])}
                className="group w-full text-left rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#0F0F0F] p-5 flex flex-col gap-3 hover:border-[#6B4423] hover:shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#6B4423]/50 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label={`${item.title} — 해당 섹션 보기`}
              >
                {/* Number badge */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-3xl font-black leading-none text-[#6B4423] dark:text-[#D4A574]"
                    style={{ fontWeight: 900 }}
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>
                  <span className="text-xs font-black tabular-nums text-white bg-[#6B4423] dark:bg-[#D4A574] dark:text-[#0F0F0F] px-2 py-0.5 rounded-full">
                    {item.points}점
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F0F0F0] leading-snug" style={{ wordBreak: 'keep-all' }}>
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#8A8A8A] leading-relaxed flex-1" style={{ wordBreak: 'keep-all' }}>
                  {item.subtitle}
                </p>

                {/* Anchor links */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.anchors.map((anchor, j) => (
                    <span
                      key={anchor}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#6B4423] dark:text-[#D4A574] bg-[#E8DDD3] dark:bg-[#2A2A2A] px-2 py-0.5 rounded-full"
                    >
                      {item.anchorLabels[j]}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1 text-xs font-semibold text-[#6B4423] dark:text-[#D4A574] group-hover:gap-2 transition-all duration-150">
                  이 섹션 보기
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
