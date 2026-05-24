'use client';

import { motion } from 'framer-motion';
import {
  Train,
  Landmark,
  GraduationCap,
  Users,
  Leaf,
} from 'lucide-react';
import SourceLink from '@/components/ui/SourceLink';

const assets = [
  {
    icon: Train,
    title: '세종 30분 통근권',
    value: '30분',
    valueSub: 'BRT 직결',
    compare: '타 89개 지역 평균: 광역시 없음',
    ours: '공주: 세종시 인접 유일',
    href: 'https://www.molit.go.kr/',
    source: '국토교통부 광역BRT 계획 2027.1',
    accent: '#2D5F5D',
    accentBg: '#EBF4F3',
    accentBorder: '#BCD9D8',
  },
  {
    icon: Landmark,
    title: '유네스코 세계유산 2종',
    value: '2종',
    valueSub: '동시 보유',
    compare: '타 89개 지역: 중복 보유 0개',
    ours: '공주: 백제역사유적지구 + 마곡사',
    href: 'https://heritage.unesco.or.kr/',
    source: 'UNESCO 세계유산 등재 현황',
    accent: '#6B4423',
    accentBg: '#F5EDE4',
    accentBorder: '#DEC9B0',
  },
  {
    icon: GraduationCap,
    title: '국립대 2개',
    value: '23,280명',
    valueSub: '재학생 풀',
    compare: '타 89개 지역 평균: 국립대 0~1개',
    ours: '공주대 22,000 + 공주교대 1,280',
    href: 'https://www.gongju.ac.kr/',
    source: '공주대학교·공주교육대학교 2025 현황',
    accent: '#2D5F5D',
    accentBg: '#EBF4F3',
    accentBorder: '#BCD9D8',
  },
  {
    icon: Users,
    title: '생활인구 전국 3위',
    value: '779만',
    valueSub: '연간 / 충남 1위',
    compare: '재방문율 48.9%',
    ours: '공주: 전국 기초지자체 생활인구 3위',
    href: 'https://www.tourismdatalab.kr/',
    source: '한국관광데이터랩 2024',
    accent: '#6B4423',
    accentBg: '#F5EDE4',
    accentBorder: '#DEC9B0',
  },
  {
    icon: Leaf,
    title: '공주 알밤 전국 17%',
    value: '17%',
    valueSub: '전국 생산 점유',
    compare: '2,100 농가 6차산업 기반',
    ours: '공주: 헤리티지 농산물 브랜드 독점',
    href: 'https://www.gongju.go.kr/',
    source: '공주시 농업통계 2024',
    accent: '#2D5F5D',
    accentBg: '#EBF4F3',
    accentBorder: '#BCD9D8',
  },
];

export default function UniquenessCompare() {
  return (
    <section className="bg-[#FAF7F2] dark:bg-[#0F0F0F] py-20 border-t border-[#E2DDD6] dark:border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            차별성 분석
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            89개 인구감소지역 중
            <br />
            <span className="text-[#6B4423]">공주만 가진 것</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {assets.map((asset, i) => {
            const Icon = asset.icon;
            return (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                className="rounded-2xl border p-6 flex flex-col gap-4 bg-white dark:bg-[#1A1A1A]"
                style={{ borderColor: asset.accentBorder }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: asset.accentBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: asset.accent }} />
                </div>

                {/* Big value */}
                <div>
                  <div
                    className="text-4xl font-black tabular-nums leading-none mb-1"
                    style={{ fontWeight: 900, color: asset.accent }}
                  >
                    <SourceLink href={asset.href} label={asset.source}>
                      {asset.value}
                    </SourceLink>
                  </div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: asset.accent, opacity: 0.65 }}
                  >
                    {asset.valueSub}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#1F1F1F] dark:text-[#F0F0F0]">{asset.title}</h3>

                {/* Compare */}
                <div className="mt-auto space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 w-3 h-3 rounded-full bg-[#E2DDD6] flex-shrink-0" />
                    <span className="text-xs text-[#8A8A8A] leading-snug">{asset.compare}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-0.5 w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: asset.accentBg, border: `1.5px solid ${asset.accent}` }}
                    />
                    <span
                      className="text-xs font-semibold leading-snug"
                      style={{ color: asset.accent }}
                    >
                      {asset.ours}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Closing statement card — spans remaining column(s) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: assets.length * 0.08 }}
            className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-[#6B4423] bg-[#6B4423] p-6 flex flex-col justify-center"
          >
            <p
              className="text-white text-base font-bold leading-snug mb-3"
              style={{ wordBreak: 'keep-all' }}
            >
              이 다섯 가지를 동시에 가진 도시는
              <br />
              <span className="text-[#E8DDD3]">공주뿐입니다.</span>
            </p>
            <p className="text-white/60 text-xs leading-relaxed" style={{ wordBreak: 'keep-all' }}>
              광역교통 + 세계유산 + 국립대 + 생활인구 + 헤리티지 산업이
              동시에 갖춰진 인구감소지역은 전국 89개 중 공주가 유일합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
