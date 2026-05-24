'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Bus, Truck, PiggyBank } from 'lucide-react';

interface Props {
  monthlyDiff: number;
  brtSaving: number;
  movingSaving: number;
  depositSaving: number;
}

export default function SavingsBreakdown({ monthlyDiff, brtSaving, movingSaving, depositSaving }: Props) {
  const items = [
    {
      icon: Home,
      label: '월세 차액 (12개월)',
      value: monthlyDiff * 12,
      color: '#6B4423',
      bg: '#F5EDE3',
      suffix: '만원',
    },
    {
      icon: Bus,
      label: 'BRT 정기권 12개월',
      value: brtSaving,
      color: '#2D5F5D',
      bg: '#E3EFEE',
      suffix: '만원',
    },
    {
      icon: Truck,
      label: '이사비 지원 (1회)',
      value: movingSaving,
      color: '#6B4423',
      bg: '#F5EDE3',
      suffix: '만원',
    },
    {
      icon: PiggyBank,
      label: '보증금 융자 이자절감',
      value: depositSaving,
      color: '#2D5F5D',
      bg: '#E3EFEE',
      suffix: '만원',
    },
  ];

  return (
    <Card className="border-[#E2DDD6] shadow-none bg-white flex-1">
      <CardContent className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-4">
          절감 내역 분해
        </p>
        <div className="space-y-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ backgroundColor: item.bg + '66' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <span className="flex-1 text-sm text-[#555]">{item.label}</span>
                <span
                  className="font-black tabular-nums text-base"
                  style={{ fontWeight: 900, color: item.value > 0 ? item.color : '#8A8A8A' }}
                >
                  {item.value > 0 ? `+${item.value.toLocaleString()}` : '—'}
                  <span className="text-xs font-medium ml-0.5">만</span>
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-[#E2DDD6] text-xs text-[#8A8A8A] leading-relaxed">
          * 세종 대비 공주 월세 약 40% 저렴 기준. BRT 정기권 월 12만원 × 12개월. 개인 상황에 따라 다를 수 있습니다.
        </div>
      </CardContent>
    </Card>
  );
}
