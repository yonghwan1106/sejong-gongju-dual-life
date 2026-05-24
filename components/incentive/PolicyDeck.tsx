'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Truck, Banknote, BusFront } from 'lucide-react';
import SourceLink from '@/components/ui/SourceLink';

const policies = [
  {
    icon: Truck,
    number: '01',
    title: '이사비 지원',
    amount: '50만원',
    amountHref: 'https://www.gongju.go.kr/',
    amountSource: '공주시 결혼·출산장려금 조례',
    amountSub: '공주페이 지급',
    description: '공주시로 전입 시 1회 지급. 공주사랑상품권(공주페이)으로 지역 경제도 함께 살립니다.',
    condition: '전입일 기준 30일 이내 신청',
    color: '#6B4423',
    bg: '#FAF7F2',
    accent: '#E8DDD3',
  },
  {
    icon: Banknote,
    number: '02',
    title: '보증금 무이자 융자',
    amount: '1,000만원',
    amountHref: 'https://www.gongju.go.kr/',
    amountSource: '공주시 결혼·출산장려금 조례',
    amountSub: '1년 거주 후 소멸',
    description: '전세·월세 보증금 최대 1,000만원 무이자 융자. 1년 이상 거주 시 상환 의무 소멸.',
    condition: '세종 직장 재직 증명 제출',
    color: '#2D5F5D',
    bg: '#F0F5F5',
    accent: '#C8E0DF',
  },
  {
    icon: BusFront,
    number: '03',
    title: 'BRT 정기권 무료',
    amount: '144만원',
    amountHref: 'https://www.molit.go.kr/',
    amountSource: '국토교통부 광역BRT 2027.1',
    amountSub: '월 12만 × 12개월',
    description: '세종~공주 BRT 정기권 12개월 전액 지원. 2027년 1월 개통에 맞춰 즉시 적용.',
    condition: '전입 후 BRT 이용 등록 필수',
    color: '#6B4423',
    bg: '#FAF7F2',
    accent: '#E8DDD3',
  },
];

export default function PolicyDeck() {
  return (
    <section id="policy" className="bg-[#FAF7F2] dark:bg-[#0F0F0F] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="인센티브 패키지"
            title={<>이사 결정을 쉽게 만드는<br /><span className="text-[#6B4423]">3종 정착 지원금</span></>}
            accentColor="#6B4423"
          />

          {/* Total banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-3 bg-[#6B4423] text-white px-5 py-3 rounded-2xl"
          >
            <span className="text-sm font-medium opacity-80">총 패키지 가치</span>
            <span className="text-2xl font-black tabular-nums" style={{ fontWeight: 900 }}>
              최대 194만원
            </span>
            <span className="text-sm opacity-70">(1년 기준)</span>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {policies.map((policy, i) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={policy.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card
                  className="h-full border-[#E2DDD6] shadow-none overflow-hidden"
                  style={{ backgroundColor: policy.bg }}
                >
                  <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                    {/* Number + icon */}
                    <div className="flex items-start justify-between mb-5">
                      <span
                        className="text-xs font-black tracking-widest"
                        style={{ color: policy.color, opacity: 0.4 }}
                      >
                        {policy.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: policy.accent }}
                      >
                        <Icon className="w-5 h-5" style={{ color: policy.color }} />
                      </div>
                    </div>

                    {/* Amount */}
                    <div
                      className="text-3xl font-black tabular-nums mb-0.5"
                      style={{ fontWeight: 900, color: policy.color }}
                    >
                      <SourceLink href={policy.amountHref} label={policy.amountSource}>
                        {policy.amount}
                      </SourceLink>
                    </div>
                    <div className="text-xs font-semibold mb-4" style={{ color: policy.color, opacity: 0.65 }}>
                      {policy.amountSub}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#1F1F1F] dark:text-[#F0F0F0] mb-3">
                      {policy.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#555] leading-relaxed flex-1 mb-5" style={{ wordBreak: 'keep-all' }}>
                      {policy.description}
                    </p>

                    {/* Condition */}
                    <div
                      className="text-xs px-3 py-2 rounded-lg"
                      style={{ backgroundColor: policy.accent, color: policy.color }}
                    >
                      <span className="font-semibold">조건</span> {policy.condition}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
