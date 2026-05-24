export const translations = {
  ko: {
    // Hero
    heroHeadline1: '세종에서 일하고,',
    heroHeadline2: '공주에서 산다',
    heroSubtitle: '2027년 1월 BRT 개통, 공주 정착 패스트트랙',
    ctaCalculate: '내 절감액 계산하기',
    ctaPolicy: '정책 살펴보기',

    // Stats / Labels
    populationLabel: '공주시 주민등록 인구',
    brtCountdown: 'BRT 개통까지',
    savingsLabel: '1년 통장 차이',
    interestRegister: '관심 등록',
    applySection: '관심 등록하기',

    // Section headings
    sectionAnalysis: '현황 분석',
    sectionBrt: 'BRT 통근 시뮬레이션',
    sectionIncentive: '인센티브 패키지',
    sectionRoadmap: '비전 2030',
    sectionFaq: '자주 묻는 질문',

    // Roadmap
    roadmapTitle: '비전 2030 — 공주 인구 10만 회복 시나리오',
    roadmapPopulation: '추정 인구',
    roadmapHouseholds: '누적 전입 가구',
    roadmapBudget: '예산 누적',
    roadmapPhase: '단계',

    // BRT Map
    brtMapTitle: 'BRT 노선 지도',
    brtStop1: '세종 한별동',
    brtStop2: '공주종합버스터미널',

    // Calculator
    calcTitle: '내 절감액 계산하기',
    calcMonthlyRent: '월 주거비',
    calcCommute: '출퇴근 비용',

    // Nav
    navTitle: '공주 듀얼라이프',
    navSubtitle: '2026 공주시 시정발전 아이디어 공모전',
    navBadge: '제안 데모',
    navApply: '관심 등록',

    // Footer / Misc
    proposalBy: '박용환 · 크리에이티브 넥서스',
    sourceLabel: '출처',
  },
  en: {
    // Hero
    heroHeadline1: 'Work in Sejong,',
    heroHeadline2: 'Live in Gongju',
    heroSubtitle: 'BRT Opening Jan 2027 — Fast-Track Relocation Program',
    ctaCalculate: 'Calculate My Savings',
    ctaPolicy: 'Explore Policy',

    // Stats / Labels
    populationLabel: 'Gongju Registered Population',
    brtCountdown: 'Until BRT Launch',
    savingsLabel: '1-Year Savings',
    interestRegister: 'Register Interest',
    applySection: 'Register Interest',

    // Section headings
    sectionAnalysis: 'Current Status',
    sectionBrt: 'BRT Commute Simulation',
    sectionIncentive: 'Incentive Package',
    sectionRoadmap: 'Vision 2030',
    sectionFaq: 'FAQ',

    // Roadmap
    roadmapTitle: 'Vision 2030 — Gongju Population 100K Recovery Scenario',
    roadmapPopulation: 'Est. Population',
    roadmapHouseholds: 'Cumulative Households',
    roadmapBudget: 'Cumulative Budget',
    roadmapPhase: 'Phase',

    // BRT Map
    brtMapTitle: 'BRT Route Map',
    brtStop1: 'Sejong Hanbyeol-dong',
    brtStop2: 'Gongju Bus Terminal',

    // Calculator
    calcTitle: 'Calculate My Savings',
    calcMonthlyRent: 'Monthly Housing Cost',
    calcCommute: 'Commute Cost',

    // Nav
    navTitle: 'Gongju Dual-Life',
    navSubtitle: '2026 Gongju City Innovation Idea Contest',
    navBadge: 'Proposal Demo',
    navApply: 'Register Interest',

    // Footer / Misc
    proposalBy: 'Yonghwan Park · Creative Nexus',
    sourceLabel: 'Source',
  },
} as const;

export type TranslationKey = keyof typeof translations.ko;
