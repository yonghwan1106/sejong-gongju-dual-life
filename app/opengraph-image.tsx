import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '세종에서 일하고, 공주에서 산다 — 2026 공주시 시정발전 아이디어 공모전';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #FAF7F2 0%, #F0EBE3 60%, #E8DDD3 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern — subtle repeating lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, #6B4423 0px, #6B4423 1px, transparent 1px, transparent 80px)',
            opacity: 0.03,
          }}
        />

        {/* Acorn / chestnut decorative SVG motif — top right */}
        <svg
          style={{ position: 'absolute', top: -60, right: -60, opacity: 0.08 }}
          width="400"
          height="400"
          viewBox="0 0 200 200"
        >
          <ellipse cx="100" cy="130" rx="55" ry="70" fill="#6B4423" />
          <ellipse cx="100" cy="65" rx="65" ry="28" fill="#8A5C35" />
          <rect x="95" y="30" width="10" height="22" rx="5" fill="#6B4423" />
        </svg>

        {/* Bottom-left accent shape */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: '#2D5F5D',
            opacity: 0.07,
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 80,
            bottom: 80,
            width: 4,
            background: '#6B4423',
            borderRadius: 2,
            opacity: 0.18,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '80px 96px',
            height: '100%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#E8DDD3',
              color: '#6B4423',
              borderRadius: 999,
              padding: '6px 16px',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              width: 'fit-content',
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#6B4423',
              }}
            />
            2026 공주시 시정발전 아이디어 공모전
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.08,
              color: '#1F1F1F',
              letterSpacing: '-0.02em',
              marginBottom: 20,
              wordBreak: 'keep-all',
            }}
          >
            세종에서 일하고,
            <br />
            <span style={{ color: '#6B4423' }}>공주에서 산다</span>
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: 24,
              color: '#555555',
              fontWeight: 500,
              marginBottom: 8,
            }}
          >
            BRT 개통 타이밍 공주 정착 패스트트랙
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#8A8A8A',
              marginBottom: 'auto',
            }}
          >
            제안자: 박용환 · 크리에이티브 넥서스
          </div>

          {/* KPI row */}
          <div
            style={{
              display: 'flex',
              gap: 0,
              background: '#FFFFFF',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid #E2DDD6',
              maxWidth: 640,
            }}
          >
            {[
              { value: '+1,600명', label: '3년 직접 전입' },
              { value: 'ROI 21배', label: '재정 투자 대비' },
              { value: '연 2.2억', label: '초기 연간 시비' },
            ].map((kpi, i) => (
              <div
                key={kpi.value}
                style={{
                  flex: 1,
                  padding: '20px 24px',
                  borderRight: i < 2 ? '1px solid #E2DDD6' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: '#6B4423',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {kpi.value}
                </div>
                <div style={{ fontSize: 12, color: '#8A8A8A' }}>{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Teal accent strip — right edge */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: 'linear-gradient(180deg, #2D5F5D 0%, #3A7A77 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
