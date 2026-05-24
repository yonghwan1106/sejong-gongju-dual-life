'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCountdown, formatPad, type CountdownState } from '@/lib/countdown';

function AnimatedDigit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative overflow-hidden h-8 w-10 sm:w-12 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="text-lg sm:text-xl font-black tabular-nums text-[#6B4423] absolute"
            style={{ fontWeight: 900 }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function BrtCountdown() {
  const [state, setState] = useState<CountdownState>(() => getCountdown());

  useEffect(() => {
    const id = setInterval(() => {
      setState(getCountdown());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="inline-flex items-center gap-4 px-5 py-3 bg-white border border-[#E2DDD6] rounded-2xl shadow-sm"
    >
      {/* D-day big number */}
      <div className="flex flex-col items-center leading-none pr-4 border-r border-[#E2DDD6]">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#8A8A8A] mb-0.5">
          BRT 개통까지
        </span>
        <motion.span
          key={state.days}
          initial={{ scale: 0.85, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl sm:text-4xl font-black tabular-nums text-[#2D5F5D] leading-none"
          style={{ fontWeight: 900 }}
        >
          D-{state.days.toLocaleString('ko-KR')}
        </motion.span>
      </div>

      {/* hh : mm : ss */}
      <div className="flex items-end gap-1">
        <AnimatedDigit value={formatPad(state.hours)} label="시간" />
        <span className="text-[#E2DDD6] font-black pb-5">:</span>
        <AnimatedDigit value={formatPad(state.minutes)} label="분" />
        <span className="text-[#E2DDD6] font-black pb-5">:</span>
        <AnimatedDigit value={formatPad(state.seconds)} label="초" />
      </div>
    </motion.div>
  );
}
