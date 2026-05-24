'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Bus, Truck, PiggyBank, Download, Share2 } from 'lucide-react';

interface Props {
  monthlyDiff: number;
  brtSaving: number;
  movingSaving: number;
  depositSaving: number;
  // share card data
  rent: number;
  members: number;
  useBrt: 'yes' | 'no';
  annualTotal: number;
}

export default function SavingsBreakdown({
  monthlyDiff,
  brtSaving,
  movingSaving,
  depositSaving,
  rent,
  members,
  useBrt,
  annualTotal,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [sharing, setSharing] = useState(false);

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

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const { toPng } = await import('html-to-image');
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#FFFFFF',
        style: { borderRadius: '16px' },
      });
      const link = document.createElement('a');
      link.download = `공주_듀얼라이프_절감액_${annualTotal}만원.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error('PNG export failed', e);
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = async () => {
    if (sharing) return;
    setSharing(true);
    const text = `세종에서 일하고, 공주에서 살면 연간 ${annualTotal.toLocaleString('ko-KR')}만원 절감!\n\n세종 월세 ${rent}만원 × ${members}인 기준 (BRT ${useBrt === 'yes' ? '이용' : '미이용'})\n\n2026 공주시 시정발전 아이디어 공모전 제안\nhttps://sejong-gongju-dual-life.vercel.app`;
    try {
      if (navigator.share) {
        await navigator.share({ title: '세종·공주 듀얼라이프 절감액', text, url: 'https://sejong-gongju-dual-life.vercel.app' });
      } else {
        await navigator.clipboard.writeText(text);
        alert('링크와 내용이 클립보드에 복사되었습니다!');
      }
    } catch (e) {
      if (!(e instanceof DOMException && e.name === 'AbortError')) console.error('Share failed', e);
    } finally {
      setSharing(false);
    }
  };

  return (
    <Card className="border-[#E2DDD6] dark:border-[#2A2A2A] shadow-none bg-white dark:bg-[#1A1A1A] flex-1">
      <CardContent className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-4">
          절감 내역 분해
        </p>

        {/* The capture target — includes breakdown + watermark */}
        <div ref={cardRef} className="bg-white rounded-2xl">
          {/* Input summary (only visible in PNG) */}
          <div className="hidden" aria-hidden="true" id="share-meta" />

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
                  <span className="flex-1 text-sm text-[#555] dark:text-[#AAAAAA]">{item.label}</span>
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

          {/* Total summary row */}
          <div className="mt-4 p-3 rounded-xl bg-[#6B4423] text-white flex items-center justify-between">
            <span className="text-sm font-semibold opacity-80">연간 총 절감</span>
            <span className="text-xl font-black tabular-nums" style={{ fontWeight: 900 }}>
              {annualTotal.toLocaleString('ko-KR')}만원
            </span>
          </div>

          {/* Watermark / brand footer — always rendered, small */}
          <div className="mt-3 flex items-center justify-between text-[10px] text-[#8A8A8A]">
            <span>세종 {rent}만원 × {members}인 · BRT {useBrt === 'yes' ? '이용' : '미이용'}</span>
            <span className="font-semibold text-[#6B4423] opacity-70">sejong-gongju-dual-life.vercel.app</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-[#8A8A8A] leading-relaxed">
          * 세종 대비 공주 월세 약 40% 저렴 기준. BRT 정기권 월 12만원 × 12개월. 개인 상황에 따라 다를 수 있습니다.
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            disabled={downloading}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6B4423] text-white text-sm font-semibold rounded-xl hover:bg-[#8A5C35] transition-colors disabled:opacity-60"
          >
            <Download className="w-4 h-4" />
            {downloading ? '저장 중…' : '결과 이미지 저장'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShare}
            disabled={sharing}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E2DDD6] text-[#1F1F1F] text-sm font-semibold rounded-xl hover:bg-[#F5F1EB] transition-colors disabled:opacity-60"
          >
            <Share2 className="w-4 h-4" />
            {sharing ? '공유 중…' : '결과 공유하기'}
          </motion.button>
        </div>
      </CardContent>
    </Card>
  );
}
