'use client';

import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  accentColor?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  accentColor = '#6B4423',
  align = 'left',
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] dark:text-[#A0A0A0]">
        {eyebrow}
      </span>
      <h2
        className="mt-2 text-3xl sm:text-4xl font-black leading-tight text-[#1F1F1F] dark:text-[#F0F0F0]"
        style={{ fontWeight: 900, wordBreak: 'keep-all' }}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-0.5 w-8 ${align === 'center' ? 'mx-auto' : ''}`}
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
}
