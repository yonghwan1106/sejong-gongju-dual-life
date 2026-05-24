import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const BASE_URL = "https://sejong-gongju-dual-life.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "세종에서 일하고, 공주에서 산다 — 2026 공주시 시정발전 아이디어 공모전",
    template: "%s — 세종·공주 듀얼라이프",
  },
  description:
    "2027년 BRT 개통으로 공주 정착이 가능해집니다. 이사비·보증금·BRT 정기권 3종 인센티브, 세종 직장인 대상 전입 패스트트랙 제안. 듀얼라이프 비용계산기로 절감액을 직접 확인하세요.",
  keywords: [
    "공주시",
    "세종시",
    "BRT",
    "듀얼라이프",
    "인구감소",
    "공주 전입",
    "시정발전 아이디어",
    "박용환",
    "크리에이티브 넥서스",
    "공주 이사",
    "세종 통근",
    "광역BRT",
  ],
  authors: [{ name: "박용환", url: BASE_URL }],
  creator: "박용환 · 크리에이티브 넥서스",
  publisher: "박용환",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "세종·공주 듀얼라이프 제안",
    title: "세종에서 일하고, 공주에서 산다",
    description:
      "2027년 BRT 개통으로 공주 정착이 가능해집니다. 이사비·보증금·BRT 정기권 3종 인센티브, 세종 직장인 대상 전입 패스트트랙 제안. 듀얼라이프 비용계산기로 절감액을 직접 확인하세요.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "세종에서 일하고, 공주에서 산다 — 공주시 인구 100,000 회복 전략",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "세종에서 일하고, 공주에서 산다",
    description:
      "2027년 BRT 개통으로 공주 정착이 가능해집니다. 이사비·보증금·BRT 정기권 3종 인센티브, 세종 직장인 대상 전입 패스트트랙 제안. 듀얼라이프 비용계산기로 절감액을 직접 확인하세요.",
    images: ["/opengraph-image"],
    creator: "@yonghwan1106",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "세종·공주 듀얼라이프 제안",
      description:
        "2026 공주시 시정발전 아이디어 공모전 — 세종-공주 BRT 듀얼라이프 패스트트랙",
      inLanguage: "ko",
      publisher: {
        "@type": "Person",
        name: "박용환",
        url: BASE_URL,
      },
    },
    {
      "@type": "GovernmentService",
      "@id": `${BASE_URL}/#service`,
      name: "공주시 듀얼라이프 정착 패스트트랙",
      description:
        "세종 직장인 공주 전입을 위한 이사비 지원·보증금 융자·BRT 정기권 3종 인센티브 패키지",
      provider: {
        "@type": "GovernmentOrganization",
        name: "공주시",
        url: "https://www.gongju.go.kr",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "충청남도 공주시",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6B4423" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F0F0F" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="공주LIVE" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            {/* Skip to main content — accessibility */}
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-[#6B4423] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg focus-visible:outline-none"
            >
              본문 바로가기
            </a>
            {children}
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
