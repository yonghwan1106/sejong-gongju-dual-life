/**
 * BRT 개통 카운트다운 유틸리티
 * 목표: 2027년 1월 1일 00:00:00 KST (UTC+9)
 */

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isExpired: boolean;
}

const BRT_OPEN_DATE_KST = new Date('2027-01-01T00:00:00+09:00');

export function getCountdown(now: Date = new Date()): CountdownState {
  const diffMs = BRT_OPEN_DATE_KST.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0, isExpired: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, totalSeconds, isExpired: false };
}

export function formatPad(n: number): string {
  return String(n).padStart(2, '0');
}
