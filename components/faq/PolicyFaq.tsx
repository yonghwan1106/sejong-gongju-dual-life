'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SourceLink from '@/components/ui/SourceLink';

const faqs = [
  {
    q: '위장전입은 어떻게 막나요?',
    a: (
      <>
        전입 후 <strong>1년 실거주</strong> + 공과금(전기·수도·가스) 납부 내역 검증을 전제로 보증금 융자 면제가 적용됩니다.
        검증 미충족 시 지원금 전액 환수 규정을 조례에 명시하며, 분기별 시청 전산 확인을 병행합니다.{' '}
        <SourceLink href="https://www.gongju.go.kr/" label="공주시 결혼·출산장려금 조례">출처</SourceLink>
      </>
    ),
  },
  {
    q: '세종 직장을 잃지 않나요?',
    a: (
      <>
        세종 직장 <strong>유지 전제</strong>의 정책입니다. BRT 30분 통근으로 직주분리를 해소하는 것이 핵심 설계입니다.
        세종 소재 직장 재직 증명서를 전입 신청 시 제출하며, 이후 퇴직 시 인센티브 잔여분은 비례 조정됩니다.{' '}
        <SourceLink href="https://www.molit.go.kr/" label="국토교통부 광역BRT 계획 2027.1">출처</SourceLink>
      </>
    ),
  },
  {
    q: '재원은 어디서 조달하나요?',
    a: (
      <>
        세 가지 재원을 병행합니다. ①{' '}
        <SourceLink href="https://www.mois.go.kr/" label="행안부 지방소멸대응기금 2022">지방소멸대응기금</SourceLink>
        (공주시 89개 포함, 연 30~50억 배분 추정),
        ② 국토교통부 광역BRT 매칭 보조, ③ 행안부 청년일자리 지역정착 예산.
        이사비 50만원은 지역상품권 지급으로 예산 환류 효과까지 포함합니다.
      </>
    ),
  },
  {
    q: 'BRT 개통이 지연되면 어떻게 되나요?',
    a: (
      <>
        2027년 1월 개통 전까지는 <strong>세종↔공주 광역버스 정기권</strong>으로 대체 적용합니다.
        정기권 지원 상한(월 12만원 기준)은 동일하게 유지되며, BRT 개통 즉시 전환됩니다.
        정책 공백이 없도록 전입 시점 기준으로 소급 적용 조항을 명문화합니다.{' '}
        <SourceLink href="https://www.molit.go.kr/" label="국토교통부 광역BRT 계획 2027.1">출처</SourceLink>
      </>
    ),
  },
  {
    q: '자녀 학교는 어떻게 되나요?',
    a: (
      <>
        공주시 초·중·고 전입 우선권과 <strong>통학버스 안내</strong>를 일괄 제공합니다.
        학령인구 추가 전입은 공주 시내 폐교 위기 학교 안정화 효과를 직접 가져옵니다.
        교육청과의 협의를 통해 전입 패스트트랙 창구를 시청 내 1개 부서로 단일화할 계획입니다.{' '}
        <SourceLink href="https://www.gongju.go.kr/" label="공주시청 교육지원 현황">출처</SourceLink>
      </>
    ),
  },
  {
    q: '공주 정주 비용이 부담되지 않나요?',
    a: (
      <>
        공주 아파트 전세 평균은 세종 대비 <strong>약 40% 저렴</strong>합니다.
        동일 평형 기준 연 주거비 차액 약 1,250만원 이상이 발생하며, 여기에 이사비·보증금·BRT 패키지(최대 194만원)가 더해집니다.
        세종에서 월세 부담 없이 동등한 생활수준을 유지할 수 있는 구체적 경로입니다.{' '}
        <SourceLink href="https://www.r114.com/" label="R114 아파트 시세 2025">출처</SourceLink>
      </>
    ),
  },
  {
    q: '외국인도 적용 가능한가요?',
    a: (
      <>
        1차 정책은 <strong>대한민국 국적자</strong> 대상으로 운영합니다.
        향후 지역특화비자(F-2-R) 보유 외국인으로 확대 검토할 예정이며,
        이는 법무부 지역특화비자 제도와 연계하여 충남도 단위 협의를 통해 추진합니다.{' '}
        <SourceLink href="https://www.moj.go.kr/" label="법무부 지역특화비자 F-2-R">출처</SourceLink>
      </>
    ),
  },
  {
    q: '이미 공주에 사는 시민은 형평성 문제가 없나요?',
    a: (
      <>
        신규 전입자 한정 인센티브이며, 기존 시민에게도 <strong>결혼장려금·출산장려금·노인복지</strong> 등 별도 정책이 운영 중입니다.
        인구 회복이 세수 증가 → 전체 시민 복지 예산 확대로 이어지는 선순환 구조임을 공청회를 통해 시민과 공유할 계획입니다.{' '}
        <SourceLink href="https://www.gongju.go.kr/" label="공주시 결혼·출산장려금 조례">출처</SourceLink>
      </>
    ),
  },
];

export default function PolicyFaq() {
  return (
    <section className="bg-[#FAF7F2] py-20 border-t border-[#E2DDD6]">
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
            FAQ
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-black text-[#1F1F1F] leading-tight"
            style={{ fontWeight: 900, wordBreak: 'keep-all' }}
          >
            자주 묻는 질문 —
            <br />
            <span className="text-[#6B4423]">정책 시행 가능성에 대하여</span>
          </h2>
          <div className="mt-3 h-0.5 w-8 bg-[#6B4423]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-white rounded-2xl border border-[#E2DDD6] overflow-hidden"
        >
          <Accordion className="divide-y divide-[#E2DDD6]">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="px-6 sm:px-8 border-none"
              >
                <AccordionTrigger className="py-5 text-sm sm:text-base font-semibold text-[#1F1F1F] hover:text-[#6B4423] hover:no-underline transition-colors text-left gap-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="text-sm text-[#555555] leading-relaxed" style={{ wordBreak: 'keep-all' }}>
                    {faq.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
