'use client';

import dynamic from 'next/dynamic';

const LeafletRouteMap = dynamic(
  () => import('@/components/brt/LeafletRouteMap'),
  { ssr: false, loading: () => (
    <div
      className="w-full rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] bg-[#F5F1EB] dark:bg-[#1A1A1A] flex items-center justify-center text-[#8A8A8A] text-sm"
      style={{ height: 380 }}
      aria-label="지도 로딩 중"
    >
      지도 불러오는 중...
    </div>
  )}
);

export default function LeafletMapSection() {
  return (
    <section className="bg-white dark:bg-[#0F0F0F] py-10 border-b border-[#E2DDD6] dark:border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            BRT 노선 지도
          </span>
          <h2
            className="mt-2 text-2xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight"
            style={{ fontWeight: 900 }}
          >
            세종 ↔ 공주 <span className="text-[#6B4423] dark:text-[#D4A574]">실제 노선 확인</span>
          </h2>
        </div>
        <LeafletRouteMap />
      </div>
    </section>
  );
}
