'use client';

import { motion } from 'framer-motion';
import SourceLink from '@/components/ui/SourceLink';

const numbers = [
  {
    value: '99,551',
    label: '주민등록 인구',
    sub: '2026.2 기준',
    href: 'https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B040A3',
    source: 'KOSIS 주민등록인구현황 2026.2',
    color: '#C8553D',
  },
  {
    value: '779만',
    label: '연간 생활인구',
    sub: '전국 기초지자체 3위',
    href: 'https://www.tourismdatalab.kr/',
    source: '한국관광데이터랩 2024',
    color: '#6B4423',
  },
  {
    value: '17%',
    label: '전국 밤 생산 점유율',
    sub: '2,100 농가 / 6차산업',
    href: 'https://www.gongju.go.kr/',
    source: '공주시 농업통계 2024',
    color: '#6B4423',
  },
  {
    value: '2종',
    label: '유네스코 세계유산',
    sub: '백제역사유적지구 + 마곡사',
    href: 'https://heritage.unesco.or.kr/',
    source: 'UNESCO 세계유산 등재 현황',
    color: '#2D5F5D',
  },
  {
    value: '22,000명',
    label: '공주대학교 재학생',
    sub: '국립대 2개 캠퍼스 운영',
    href: 'https://www.gongju.ac.kr/',
    source: '공주대학교 2025 현황',
    color: '#2D5F5D',
  },
  {
    value: '32,750명',
    label: '65세 이상 인구',
    sub: '고령화율 32.9%',
    href: 'https://kosis.kr/',
    source: 'KOSIS 인구총조사 2024',
    color: '#6B4423',
  },
  {
    value: '489개',
    label: '경로당',
    sub: '전국 밀도 최상위권',
    href: 'https://www.gongju.go.kr/',
    source: '공주시 노인복지 현황 2025',
    color: '#6B4423',
  },
  {
    value: '138,742건',
    label: '세종 통근통행',
    sub: '1일 기준 (2019)',
    href: 'https://www.molit.go.kr/',
    source: '국토교통부 전국 통행실태조사 2019',
    color: '#2D5F5D',
  },
  {
    value: '1조 506억',
    label: '2026 본예산',
    sub: '사상 최초 1조 돌파',
    href: 'https://www.gongju.go.kr/',
    source: '공주시 2026 예산서',
    color: '#6B4423',
  },
];

export default function GongjuByNumbers() {
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
            기본 현황
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            숫자로 보는
            <br />
            <span className="text-[#6B4423]">공주</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {numbers.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-[#E2DDD6] dark:border-[#2A2A2A] p-5 flex flex-col gap-1.5"
            >
              <div
                className="text-2xl sm:text-3xl font-black tabular-nums leading-none"
                style={{ fontWeight: 900, color: item.color }}
              >
                <SourceLink href={item.href} label={item.source}>
                  {item.value}
                </SourceLink>
              </div>
              <div className="text-sm font-semibold text-[#1F1F1F] dark:text-[#F0F0F0]">{item.label}</div>
              <div className="text-xs text-[#8A8A8A]">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
