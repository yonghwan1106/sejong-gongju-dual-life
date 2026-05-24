import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const BASE_URL = "https://sejong-gongju-dual-life.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "세종에서 일하고, 공주에서 산다 — 2026 공주시 시정발전 아이디어 공모전",
    template: "%s — 세종·공주 듀얼라이프",
  },
  description:
    "2027년 BRT 개통을 활용한 세종-공주 듀얼라이프 정착 패스트트랙 제안. 30분 통근 + 3종 인센티브로 공주시 인구 100,000 회복 경로를 제시합니다. 박용환, 크리에이티브 넥서스.",
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
      "BRT 개통 타이밍 공주 정착 패스트트랙 — 2026 공주시 시정발전 아이디어 공모전 제안",
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
      "BRT 개통 타이밍 공주 정착 패스트트랙 — 2026 공주시 시정발전 아이디어 공모전",
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
  other: {
    // JSON-LD will be injected inline in <head> below
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
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
