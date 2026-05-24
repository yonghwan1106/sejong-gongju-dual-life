'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useT } from '@/components/i18n/useT';

export default function InterestForm() {
  const t = useT();
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/interest')
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, company: form.company }),
      });
      const data = await res.json();
      if (data.ok) {
        setCount(data.count);
        track('interest_form_submitted', { has_company: !!form.company });
        setSubmitted(true);
      }
    } catch {
      // fallback: still mark submitted on network error
      track('interest_form_submitted', { has_company: !!form.company });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="bg-white dark:bg-[#0F0F0F] py-20 border-t border-[#E2DDD6] dark:border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#8A8A8A]">
              사전 관심 등록
            </span>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F0F0F0] leading-tight mb-4"
              style={{ fontWeight: 900, wordBreak: 'keep-all' }}
            >
              공주 이사,
              <br />
              <span className="text-[#6B4423] dark:text-[#D4A574]">관심 있으신가요?</span>
            </h2>
            <div className="h-0.5 w-8 bg-[#6B4423] mb-6" />
            <p className="text-[#555] text-sm leading-relaxed mb-8" style={{ wordBreak: 'keep-all' }}>
              아직 정책 제안 단계입니다. 관심을 등록해 두시면 실제 시행 시 가장 먼저 안내를 드립니다.
              세종 직장인, 육아 가족, 재택근무자 모두 환영합니다.
            </p>

            {/* Benefits list */}
            <div className="space-y-3">
              {[
                '정책 시행 시 우선 안내 이메일 발송',
                '이사비·보증금·BRT 신청 안내',
                '공주 생활 정착 가이드 제공',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDD3] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#6B4423]" />
                  </div>
                  <span className="text-sm text-[#555]">{item}</span>
                </div>
              ))}
            </div>

            {/* Registration counter */}
            {count !== null && count > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5EDE3] border border-[#E8DDD3]"
              >
                <div className="w-2 h-2 rounded-full bg-[#6B4423] animate-pulse" />
                <span className="text-sm font-semibold text-[#6B4423]">
                  현재 사전 등록 <span className="font-black">{count.toLocaleString('ko-KR')}</span>건
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Card className="border-[#E2DDD6] dark:border-[#2A2A2A] shadow-none bg-[#FAF7F2] dark:bg-[#1A1A1A]">
              <CardContent className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-12 h-12 text-[#2D5F5D] mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-[#1F1F1F] mb-2">
                        관심 등록 완료!
                      </h3>
                      <p className="text-sm text-[#555] leading-relaxed mb-1">
                        감사합니다. 정책이 시행되면 가장 먼저 안내드리겠습니다.
                      </p>
                      {count !== null && count > 0 && (
                        <p className="text-sm font-semibold text-[#6B4423] mt-3">
                          현재 사전 등록 {count.toLocaleString('ko-KR')}건
                        </p>
                      )}
                      <p className="text-xs text-[#8A8A8A] mt-4 p-3 rounded-xl bg-[#F5F1EB] border border-[#E2DDD6]">
                        본 사이트는 공주시 공모전 제안 데모이며,<br />
                        실제 정책 시행 전 단계입니다.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-[#1F1F1F] mb-2 block">
                          이름 <span className="text-[#C8553D]">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="홍길동"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                          className="border-[#E2DDD6] bg-white focus-visible:ring-[#6B4423] focus-visible:border-[#6B4423]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-[#1F1F1F] mb-2 block">
                          이메일 <span className="text-[#C8553D]">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                          className="border-[#E2DDD6] bg-white focus-visible:ring-[#6B4423] focus-visible:border-[#6B4423]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm font-semibold text-[#1F1F1F] mb-2 block">
                          세종 직장명 <span className="text-[#8A8A8A] font-normal">(선택)</span>
                        </Label>
                        <Input
                          id="company"
                          placeholder="세종 소재 직장 또는 기관명"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="border-[#E2DDD6] bg-white focus-visible:ring-[#6B4423] focus-visible:border-[#6B4423]"
                        />
                      </div>

                      {/* Counter below form */}
                      {count !== null && count > 0 && (
                        <p className="text-xs text-center text-[#8A8A8A]">
                          현재 사전 등록{' '}
                          <span className="font-semibold text-[#6B4423]">{count.toLocaleString('ko-KR')}건</span>
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={loading || !form.name || !form.email}
                        className="w-full bg-[#6B4423] hover:bg-[#8A5C35] text-white rounded-xl h-12 text-sm font-semibold transition-colors disabled:opacity-40"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            처리 중...
                          </span>
                        ) : t('interestRegister')}
                      </Button>

                      <p className="text-xs text-[#8A8A8A] text-center leading-relaxed">
                        본 사이트는 공주시 공모전 제안 데모이며,<br />
                        실제 정책 시행 전 단계입니다.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
