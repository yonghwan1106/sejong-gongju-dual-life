import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "세종에서 일하고, 공주에서 산다 — 2026 공주시 시정발전 아이디어 공모전",
  description:
    "2027년 BRT 개통을 활용한 세종-공주 듀얼라이프 정착 패스트트랙 제안. 박용환, 크리에이티브 넥서스.",
  openGraph: {
    title: "세종에서 일하고, 공주에서 산다",
    description: "공주시 인구 100,000 회복 전략 제안 — 박용환",
    locale: "ko_KR",
    type: "website",
  },
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
