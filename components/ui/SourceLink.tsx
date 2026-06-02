'use client';

import { useRef, useState } from 'react';

interface SourceLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  sourcePlacement?: 'inline' | 'below';
}

/**
 * SourceLink — wraps a stat value with a superscript citation.
 * Hover reveals a tooltip with the source label; clicking opens in new tab.
 *
 * Usage:
 *   <SourceLink href="https://kosis.kr/..." label="KOSIS 2026.2">99,551</SourceLink>
 */
export default function SourceLink({
  href,
  label,
  children,
  sourcePlacement = 'inline',
}: SourceLinkProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const sourceBelow = sourcePlacement === 'below';

  return (
    <span className={sourceBelow ? 'relative inline-flex flex-col items-start gap-1' : 'relative inline-flex items-baseline gap-0'}>
      {children}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`출처: ${label}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-block focus:outline-none"
      >
        <span
          ref={ref}
          className={
            sourceBelow
              ? 'block text-xs font-bold leading-none opacity-45 hover:opacity-80 transition-opacity cursor-pointer select-none text-[#6B4423]'
              : 'ml-0.5 text-[0.6em] leading-none opacity-50 hover:opacity-80 transition-opacity cursor-pointer select-none text-[#6B4423]'
          }
          style={sourceBelow ? undefined : { fontSize: '0.6em', verticalAlign: 'super' }}
        >
          출처
        </span>
      </a>

      {/* Tooltip */}
      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
        >
          <span className="whitespace-nowrap bg-[#1F1F1F] text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            {label}
          </span>
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1F1F1F]" />
        </span>
      )}
    </span>
  );
}
