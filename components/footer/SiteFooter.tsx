export default function SiteFooter() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-base font-black mb-2" style={{ fontWeight: 900 }}>
              공주 듀얼라이프
            </div>
            <div className="text-xs text-white/50 leading-relaxed">
              세종에서 일하고, 공주에서 산다.<br />
              BRT 개통을 활용한 인구 회복 전략.
            </div>
          </div>

          {/* Proposal info */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
              제안 정보
            </div>
            <div className="text-sm text-white/70 space-y-1">
              <div>2026 공주시 시정발전 아이디어 공모전</div>
              <div className="text-white/40">제안자: 박용환 (크리에이티브 넥서스)</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
              링크
            </div>
            <div className="space-y-2">
              <a
                href="https://github.com/yonghwan1106/sejong-gongju-dual-life"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                GitHub 소스코드 →
              </a>
              <a
                href="https://www.gongju.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                공주시청 홈페이지 →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-white/30">
            본 사이트는 정책 제안 데모입니다. 실제 정책 시행 전 단계이며, 공식 공주시 사이트가 아닙니다.
          </p>
          <p className="text-xs text-white/30">
            © 2026 박용환 · 크리에이티브 넥서스
          </p>
        </div>
      </div>
    </footer>
  );
}
