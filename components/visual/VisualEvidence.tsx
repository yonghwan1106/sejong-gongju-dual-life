'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const visuals = [
  {
    src: '/images/hero-dual-life.png',
    alt: '세종에서 일하고 공주에서 산다는 듀얼라이프 정책 키비주얼',
    eyebrow: '키비주얼',
    title: '정책 컨셉을 한 장으로',
    description:
      '세종의 일자리와 공주의 주거·역사 자산을 하나의 생활권으로 묶어, 제안의 핵심 문장을 첫눈에 전달합니다.',
    stat: '세종 직장 + 공주 생활',
  },
  {
    src: '/images/brt-commute-board.png',
    alt: '세종 업무지구에서 공주 주거지까지 30분 통근과 BRT 2027.1을 보여주는 노선 보드',
    eyebrow: '교통 근거',
    title: 'BRT 개통 타이밍',
    description:
      '2027년 1월 BRT 개통을 정책 착수 시점으로 삼아 30분 통근권이라는 설득 가능한 전입 조건을 제시합니다.',
    stat: '30분 통근',
  },
  {
    src: '/images/incentive-package.png',
    alt: '이사비 50만원, 보증금 1,000만원, BRT 12개월 지원을 보여주는 인센티브 카드',
    eyebrow: '정착 패키지',
    title: '망설임을 줄이는 3종 지원',
    description:
      '초기 이사 비용, 주거 진입 비용, 통근 비용을 동시에 낮춰 세종 직장인의 실제 이전 결정을 돕습니다.',
    stat: '3종 인센티브',
  },
];

export default function VisualEvidence() {
  return (
    <section id="visual" className="bg-white dark:bg-[#0F0F0F] py-20 border-t border-[#E2DDD6] dark:border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="시각 근거"
            title={<>숫자만 보던 정책을<br /><span className="text-[#2D5F5D] dark:text-[#7DCAC6]">장면으로 보여줍니다</span></>}
            accentColor="#2D5F5D"
          />
          <p className="text-sm leading-relaxed text-[#555555] dark:text-[#AAAAAA] lg:max-w-xl" style={{ wordBreak: 'keep-all' }}>
            심사위원이 사이트를 처음 훑을 때, 정책의 작동 방식을 이미지로 먼저 이해하고
            아래의 계산기·KPI·ROI 섹션에서 근거를 확인하도록 설계했습니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {visuals.map((visual, index) => (
            <motion.article
              key={visual.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#FAF7F2] dark:bg-[#1A1A1A]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E8DDD3] dark:bg-[#2A2A2A]">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold tracking-widest text-[#2D5F5D] dark:text-[#7DCAC6]">
                    {visual.eyebrow}
                  </span>
                  <span className="rounded-full bg-white dark:bg-[#0F0F0F] px-3 py-1 text-[11px] font-bold text-[#6B4423] dark:text-[#D4A574]">
                    {visual.stat}
                  </span>
                </div>
                <h3 className="text-lg font-black leading-snug text-[#1F1F1F] dark:text-[#F0F0F0]" style={{ fontWeight: 900, wordBreak: 'keep-all' }}>
                  {visual.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#555555] dark:text-[#AAAAAA]" style={{ wordBreak: 'keep-all' }}>
                  {visual.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
