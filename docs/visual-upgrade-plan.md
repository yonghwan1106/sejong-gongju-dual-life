# 세종GO 공주LIVE 시각·기능 업그레이드 계획

## 최종 목표

이 사이트의 최종 목표는 2026 공주시 시정발전 아이디어 공모전 심사위원이 5분 안에 “세종에서 일하고 공주에서 사는 듀얼라이프 정책”의 필요성, 실행 가능성, 재정 효과, 시민 체감 장면을 동시에 이해하도록 만드는 라이브 정책 데모입니다.

단순 소개 페이지가 아니라 다음을 증명해야 합니다.

- 공주가 가진 차별성: 세종 30분 통근권, BRT 2027년 1월 개통, 생활인구·세계유산·국립대 기반
- 정책 실행 가능성: 실제로 작동하는 비용 계산기, 관심 등록 폼, 카운터, KPI/ROI 근거
- 시민 설득력: 숫자만이 아니라 “어떤 삶이 바뀌는지”를 이미지와 장면으로 보여주는 정책 스토리
- 심사용 완성도: 한글 판독성, 출처·면책 고지, 모바일/데스크톱 응답성, 다크모드 일관성

## 이미지 추가 전략

이미지는 GPT Image 2.0으로 생성하고, 사이트에서는 HTML 캡션·오버레이를 함께 사용합니다. 이렇게 하면 이미지 자체의 한글 표현력을 활용하면서도 접근성, 검색성, 판독성을 안정적으로 확보할 수 있습니다.

### 배치 계획

1. `hero-background.png`
   - 위치: HeroBlock 전체 배경
   - 역할: 첫 화면에서 세종 업무지구와 공주 생활권을 한 장면으로 연결
   - 비고: HTML H1과 겹치지 않도록 무문자 배경으로 별도 생성

2. `hero-dual-life.png`
   - 위치: HeroBlock 우측/하단 비주얼
   - 역할: 신규 VisualEvidence 섹션의 키비주얼 카드

3. `brt-commute-board.png`
   - 위치: 신규 VisualEvidence 섹션 첫 카드
   - 역할: BRT 개통과 30분 통근권을 노선 보드처럼 직관화

4. `incentive-package.png`
   - 위치: 신규 VisualEvidence 섹션 두 번째 카드
   - 역할: 이사비·보증금·BRT 정기권 3종 패키지를 한 장으로 요약

## GPT Image 2.0 프롬프트

### 1. Hero 이미지

```text
Use case: ads-marketing
Asset type: website hero image for a Korean municipal policy demo
Primary request: Create a premium editorial policy-campaign image that visualizes the idea “work in Sejong, live in Gongju.”
Scene/backdrop: A warm early-morning commute scene connecting a modern Sejong office district to Gongju’s historic riverside atmosphere. Include a clean BRT bus lane, a subtle Geumgang river impression, and a refined Gongju heritage silhouette inspired by Gongsanseong, without copying any official logo.
Subject: A professional commuter and a small family arriving home in Gongju after work, optimistic and realistic, not cartoonish.
Style/medium: High-end Korean public policy campaign photography blended with subtle data-journalism poster design.
Composition/framing: 16:9 landscape, strong central depth line from Sejong to Gongju, generous safe margins, polished website hero crop.
Lighting/mood: Warm sunrise, calm confidence, civic trust.
Color palette: Warm beige, chestnut brown, muted teal, soft ivory, restrained accents.
Text (verbatim): "세종에서 일하고\n공주에서 산다"
Constraints: Korean text must be perfectly legible, spelled exactly as provided, no extra text, no English text, no official government logo, no watermark.
Avoid: distorted Hangul, fake seals, cluttered UI, fantasy cityscape, overly dark atmosphere.
```

### 1-A. Hero 무문자 배경 이미지

```text
Use case: ads-marketing
Asset type: full-bleed website hero background for a Korean municipal policy demo
Primary request: Create a premium editorial background image that visualizes “work in Sejong, live in Gongju” with no readable text anywhere, so HTML headline text can be overlaid on top.
Scene/backdrop: A warm early-morning commute scene connecting a modern Sejong office district on the left to Gongju’s historic riverside atmosphere on the right. Include a clean BRT bus lane, a subtle Geumgang river impression, and a refined Gongju heritage silhouette inspired by Gongsanseong, without copying any official logo.
Subject: A professional commuter and a small family walking toward Gongju at sunrise, optimistic and realistic, not cartoonish.
Style/medium: High-end Korean public policy campaign photography, cinematic but natural.
Composition/framing: 16:9 landscape, full-bleed website hero background, darker/cleaner negative space on the left third for overlaid Korean headline, detailed civic-life scene on the right.
Lighting/mood: Warm sunrise, calm confidence, civic trust.
Color palette: Warm beige, chestnut brown, muted teal, soft ivory, restrained accents.
Text (verbatim): no text.
Constraints: Absolutely no readable text, no signs, no labels, no English text, no Korean text, no official government logo, no watermark.
Avoid: distorted Hangul, fake seals, cluttered UI, fantasy cityscape, overly dark atmosphere.
```

### 2. BRT 통근 보드 이미지

```text
Use case: infographic-diagram
Asset type: website evidence image card
Primary request: Create a clean Korean route-board style infographic showing the Sejong-to-Gongju BRT commute concept.
Scene/backdrop: A modern transit information board with a simple route line, station markers, and a subtle background hint of road, river, and city.
Subject: A visual route from Sejong work district to Gongju residential life, with a BRT vehicle icon and clear time emphasis.
Style/medium: Premium Korean civic infographic, realistic transit-board material, not flat clipart.
Composition/framing: 16:9 landscape, route line from left to right, large readable Korean labels.
Lighting/mood: Bright, clean, reliable, transport-policy confidence.
Color palette: Ivory base, chestnut brown route line, muted teal BRT accent, terracotta highlight.
Text (verbatim): "세종 업무지구" "공주 주거지" "30분 통근" "BRT 2027.1"
Constraints: All Korean text must be perfectly legible and spelled exactly as provided, keep labels few and large, no extra words, no official logo, no watermark.
Avoid: tiny labels, subway-map complexity, distorted Hangul, English replacements.
```

### 3. 인센티브 패키지 이미지

```text
Use case: infographic-diagram
Asset type: website policy package image card
Primary request: Create a premium Korean policy package infographic that summarizes three settlement incentives for moving to Gongju while working in Sejong.
Scene/backdrop: A refined civic service desk or welcome-kit scene with three clear benefit cards, subtle home and transit motifs.
Subject: Three benefit cards arranged horizontally with simple icons: moving box, housing deposit document, BRT pass.
Style/medium: Polished public-policy infographic with realistic paper/card texture and soft shadows.
Composition/framing: 16:9 landscape, three equal cards, large Hangul, enough padding for website display.
Lighting/mood: Trustworthy, practical, warm, citizen-friendly.
Color palette: Beige base, chestnut brown headings, muted teal check marks, terracotta emphasis.
Text (verbatim): "이사비 50만원" "보증금 1,000만원" "BRT 12개월"
Constraints: Korean text and numbers must be perfectly legible and spelled exactly as provided, no extra text, no official logo, no watermark.
Avoid: crowded fine print, distorted Hangul, luxury real-estate ad style, English text.
```

## 기능 추가 계획

이번 작업에서 바로 반영할 기능:

- 관심 등록 API에 이메일을 정상 전달한다.
- 카운터가 0건이어도 표시되도록 한다.
- API 오류 시 가짜 성공 화면을 보여주지 않고 인라인 오류를 표시한다.
- 생성 이미지 3장을 HeroBlock과 신규 VisualEvidence 섹션에 반영한다.

후속으로 확장하기 좋은 기능:

- 관심 등록 카운터를 Vercel KV 또는 Postgres로 영속화한다.
- “심사위원 5분 워크스루” 모드를 추가해 핵심 섹션만 순서대로 강조한다.
- 계산기 결과에 따라 맞춤 이미지/문구가 바뀌는 페르소나별 결과 카드를 만든다.
- 실제 제출용 PDF/QR 검증 페이지를 추가해 QR 접속 후 확인해야 할 항목을 자동 체크한다.

## 생성 결과

| 파일 | 저장 경로 | 크기 |
|------|-----------|------|
| Hero 무문자 배경 | `public/images/hero-background.png` | 1672×941 |
| 정책 키비주얼 | `public/images/hero-dual-life.png` | 1672×941 |
| BRT 통근 보드 | `public/images/brt-commute-board.png` | 1672×941 |
| 인센티브 패키지 | `public/images/incentive-package.png` | 1672×941 |

검증 캡처:

- `output/playwright/desktop-home.png`
- `output/playwright/mobile-home.png`
- `.codex/verification/visual-section-clean.png`
