'use client';

import { motion } from 'framer-motion';

export default function ProposerNote() {
  return (
    <section className="bg-white py-16 border-t border-[#E2DDD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="grid sm:grid-cols-5 gap-8 items-start rounded-2xl border border-[#E2DDD6] bg-[#FAF7F2] p-7 sm:p-9"
        >
          {/* Left: proposer note */}
          <div className="sm:col-span-3 flex flex-col gap-4">
            {/* Label */}
            <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
              제안자 소개
            </span>

            {/* Quote mark */}
            <div
              className="text-5xl leading-none text-[#E8DDD3] select-none font-black"
              style={{ fontWeight: 900, lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </div>

            {/* Note body */}
            <div className="space-y-3 text-sm text-[#555555] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              <p>
                공주는 제 고향이 아닙니다. 그러나 30년 인구 곡선이 보여주는 위기와, BRT 개통이라는 마지막 기회를 보고 이 제안을 준비했습니다.
              </p>
              <p>
                정책은 곧 신뢰입니다. 본 사이트는 정책 시행 가능성을 코드로 직접 증명하기 위한 살아있는 데모입니다. 숫자는 출처가 있고, 계산기는 실제로 작동합니다.
              </p>
              <p>
                공주가 100,000명을 되찾는 그날, 이 제안이 작은 씨앗이 되기를 바랍니다.
              </p>
            </div>

            {/* Attribution */}
            <div className="pt-2 border-t border-[#E2DDD6] flex flex-col gap-0.5">
              <span className="text-sm font-bold text-[#1F1F1F]">박용환</span>
              <span className="text-xs text-[#8A8A8A]">크리에이티브 넥서스 대표 · 2026.05</span>
            </div>
          </div>

          {/* Divider — vertical on desktop, horizontal on mobile */}
          <div className="hidden sm:flex sm:col-span-1 justify-center">
            <div className="w-px h-full bg-[#E2DDD6]" />
          </div>
          <div className="sm:hidden h-px bg-[#E2DDD6]" />

          {/* Right: studio intro */}
          <div className="sm:col-span-1 flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
              스튜디오
            </span>

            {/* Logo / wordmark */}
            <div>
              <div
                className="text-base font-black text-[#6B4423] leading-tight"
                style={{ fontWeight: 900 }}
              >
                크리에이티브
                <br />
                넥서스
              </div>
              <div className="mt-0.5 h-0.5 w-6 bg-[#6B4423]" />
            </div>

            <p className="text-xs text-[#555555] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              공모전 전문 기획자 박용환이 운영하는 정책·콘텐츠 기획 스튜디오.
              2024~2026년 행안부·문체부·지자체 공모 다수 수상.
            </p>

            {/* Subtle badge */}
            <div className="mt-auto inline-flex items-center gap-1.5 text-xs text-[#6B4423] bg-[#E8DDD3] px-3 py-1.5 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B4423]" />
              정책 제안 전문
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
