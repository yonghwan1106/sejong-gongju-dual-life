'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useT } from '@/components/i18n/useT';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import SavingsBreakdown from './SavingsBreakdown';

interface Persona {
  id: string;
  label: string;
  rent: number;
  members: number;
  useBrt: 'yes' | 'no';
}

const PERSONAS: Persona[] = [
  { id: 'single', label: '1인 직장인', rent: 60, members: 1, useBrt: 'yes' },
  { id: 'couple', label: '신혼 부부', rent: 90, members: 2, useBrt: 'yes' },
  { id: 'family4', label: '4인 가족', rent: 120, members: 4, useBrt: 'yes' },
  { id: 'nomad', label: '디지털 노마드', rent: 50, members: 1, useBrt: 'no' },
];

export default function DualLifeCalculator() {
  const t = useT();
  const [rent, setRent] = useState(70);
  const [members, setMembers] = useState(2);
  const [useBrt, setUseBrt] = useState<'yes' | 'no'>('yes');
  const [activePersona, setActivePersona] = useState<string | null>(null);

  const applyPersona = (p: Persona) => {
    setRent(p.rent);
    setMembers(p.members);
    setUseBrt(p.useBrt);
    setActivePersona(p.id);
  };

  const clearPersona = () => setActivePersona(null);

  const sejongMonthly = rent * members;
  const gongjiuMonthly = Math.round(sejongMonthly * 0.6);
  const monthlyDiff = sejongMonthly - gongjiuMonthly;

  const brtSaving = useBrt === 'yes' ? 144 : 0;
  const movingSaving = 50;
  const depositSaving = 30;
  const annualTotal = monthlyDiff * 12 + brtSaving + movingSaving + depositSaving;

  const sejongBarPct = 100;
  const gongjiuBarPct = Math.round((gongjiuMonthly / sejongMonthly) * 100);

  return (
    <section id="calculator" className="bg-[#FAF7F2] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
            비용 시뮬레이터
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            내 연간 절감액,
            <br />
            <span className="text-[#6B4423]">직접 계산해 보세요</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        {/* Persona presets */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-3">
            빠른 선택 — 나와 비슷한 케이스
          </p>
          <div className="flex flex-wrap gap-2">
            {PERSONAS.map((p) => {
              const active = activePersona === p.id;
              return (
                <motion.button
                  key={p.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => (active ? clearPersona() : applyPersona(p))}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    active
                      ? 'bg-[#6B4423] text-white border-[#6B4423] shadow-sm'
                      : 'bg-white text-[#555] border-[#E2DDD6] hover:border-[#6B4423] hover:text-[#6B4423]'
                  }`}
                >
                  {p.label}
                  {active && (
                    <span className="ml-1.5 opacity-60 text-xs">✕</span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Card className="border-[#E2DDD6] shadow-none bg-white h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col gap-7">
                {/* Rent slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-sm font-semibold text-[#1F1F1F]">
                      세종 현재 월세
                    </Label>
                    <motion.span
                      key={rent}
                      initial={{ scale: 0.88, opacity: 0.6 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-xl font-black text-[#6B4423] tabular-nums"
                      style={{ fontWeight: 900 }}
                    >
                      {rent}만원
                    </motion.span>
                  </div>
                  <Slider
                    min={30}
                    max={120}
                    step={5}
                    value={rent}
                    onValueChange={(v) => { setRent(v as number); clearPersona(); }}
                    className="[&_[data-slot=slider-thumb]]:border-[#6B4423] [&_[data-slot=slider-thumb]]:bg-[#6B4423] [&_[data-slot=slider-range]]:bg-[#6B4423]"
                  />
                  <div className="flex justify-between text-xs text-[#8A8A8A] mt-1.5">
                    <span>30만</span>
                    <span>120만</span>
                  </div>
                </div>

                {/* Member count */}
                <div>
                  <Label htmlFor="members" className="text-sm font-semibold text-[#1F1F1F] mb-3 block">
                    가족 구성원 수
                  </Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="members"
                      type="number"
                      min={1}
                      max={5}
                      value={members}
                      onChange={(e) => {
                        const v = parseInt(e.target.value);
                        if (v >= 1 && v <= 5) { setMembers(v); clearPersona(); }
                      }}
                      className="w-20 text-center text-lg font-bold border-[#E2DDD6] focus-visible:ring-[#6B4423]"
                    />
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          onClick={() => { setMembers(n); clearPersona(); }}
                          className={`w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                            members === n
                              ? 'bg-[#6B4423] text-white'
                              : 'bg-[#F5F1EB] text-[#555] hover:bg-[#E8DDD3]'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BRT toggle */}
                <div>
                  <Label className="text-sm font-semibold text-[#1F1F1F] mb-3 block">
                    BRT 정기권 이용 여부
                  </Label>
                  <Tabs
                    value={useBrt}
                    onValueChange={(v) => { setUseBrt(v as 'yes' | 'no'); clearPersona(); }}
                  >
                    <TabsList className="bg-[#F5F1EB] border border-[#E2DDD6] p-1 rounded-xl">
                      <TabsTrigger
                        value="yes"
                        className="rounded-lg data-[state=active]:bg-[#6B4423] data-[state=active]:text-white data-[state=active]:shadow-sm text-sm font-medium px-5"
                      >
                        이용 (+연 144만원)
                      </TabsTrigger>
                      <TabsTrigger
                        value="no"
                        className="rounded-lg data-[state=active]:bg-[#6B4423] data-[state=active]:text-white data-[state=active]:shadow-sm text-sm font-medium px-5"
                      >
                        미이용
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Visual bar comparison */}
                <div className="pt-2 border-t border-[#E2DDD6]">
                  <p className="text-xs text-[#8A8A8A] mb-4 font-medium uppercase tracking-wider">월 주거비 비교</p>
                  <div className="space-y-3">
                    {[
                      { label: '세종', pct: sejongBarPct, value: sejongMonthly, color: '#E8DDD3' },
                      { label: '공주', pct: gongjiuBarPct, value: gongjiuMonthly, color: '#6B4423' },
                    ].map((bar) => (
                      <div key={bar.label} className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-[#555] w-8">{bar.label}</span>
                        <div className="flex-1 bg-[#F5F1EB] rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            animate={{ width: `${bar.pct}%` }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: bar.color }}
                          />
                        </div>
                        <span className="text-xs font-bold tabular-nums text-[#1F1F1F] w-16 text-right">
                          {bar.value.toLocaleString('ko-KR')}만
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Result panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Big result */}
            <Card className="border-[#E2DDD6] shadow-none bg-[#6B4423] text-white">
              <CardContent className="p-6 sm:p-8">
                <div className="text-sm font-semibold opacity-70 mb-3 uppercase tracking-wider">
                  {t('savingsLabel')}
                </div>
                <motion.div
                  key={annualTotal}
                  initial={{ scale: 0.92, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-5xl sm:text-6xl font-black tabular-nums leading-none mb-2"
                  style={{ fontWeight: 900 }}
                >
                  {annualTotal.toLocaleString('ko-KR')}만원
                </motion.div>
                <p className="text-sm opacity-70">
                  공주로 이사 시 연간 절감 예상액
                </p>
              </CardContent>
            </Card>

            {/* Breakdown */}
            <SavingsBreakdown
              monthlyDiff={monthlyDiff}
              brtSaving={brtSaving}
              movingSaving={movingSaving}
              depositSaving={depositSaving}
              rent={rent}
              members={members}
              useBrt={useBrt}
              annualTotal={annualTotal}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
