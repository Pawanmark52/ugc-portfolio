export function MainScene() {
  return (
    <svg className="scene" viewBox="0 0 180 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a2b31" /><stop offset=".6" stopColor="#101114" /><stop offset="1" stopColor="#050506" /></linearGradient>
        <radialGradient id="pglow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".5" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
        <linearGradient id="pglass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset=".55" stopColor="#c9ccd3" stopOpacity=".9" /><stop offset="1" stopColor="#8a8d96" stopOpacity=".9" /></linearGradient>
        <linearGradient id="pserum" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e4e6ec" /><stop offset="1" stopColor="#7d808a" /></linearGradient>
      </defs>
      <rect width="180" height="380" fill="url(#pbg)" />
      <circle cx="90" cy="230" r="120" fill="url(#pglow)" />
      <g fill="#fff" opacity=".5" className="spark"><circle cx="28" cy="170" r="4" /><circle cx="150" cy="150" r="6" /><circle cx="40" cy="250" r="3" /><circle cx="146" cy="260" r="3.5" /></g>
      <g fill="#fff"><path className="spark" d="M138 108l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" /><path className="spark d2" d="M34 205l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /></g>
      <ellipse cx="90" cy="337" rx="64" ry="12" fill="#000" opacity=".5" />
      <ellipse cx="90" cy="332" rx="58" ry="10" fill="#fff" opacity=".18" />
      <g className="bottle">
        <rect x="78" y="94" width="24" height="42" rx="12" fill="#e6e8ee" />
        <rect x="70" y="132" width="40" height="36" rx="8" fill="#0a0a0d" stroke="#fff" strokeOpacity=".4" />
        <rect x="74" y="166" width="32" height="26" fill="#b9bcc5" />
        <rect x="52" y="188" width="76" height="146" rx="20" fill="url(#pglass)" />
        <rect x="56" y="268" width="68" height="62" rx="16" fill="url(#pserum)" opacity=".9" />
        <rect x="62" y="226" width="56" height="58" rx="7" fill="#0a0a0d" />
        <text x="90" y="248" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" letterSpacing="1.5">YOUR</text>
        <text x="90" y="260" textAnchor="middle" fontSize="8" fontWeight="800" fill="#9a9da6" letterSpacing="1.5">BRAND</text>
        <rect x="74" y="266" width="32" height="2" rx="1" fill="#fff" opacity=".5" />
        <rect x="60" y="198" width="7" height="120" rx="3.5" fill="#fff" opacity=".6" />
      </g>
    </svg>
  );
}

export function UnboxScene() {
  return (
    <svg className="scene" viewBox="0 0 140 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="#fff" opacity=".7"><circle cx="24" cy="90" r="3" className="spark" /><circle cx="112" cy="70" r="4" className="spark d2" /><circle cx="100" cy="140" r="2.5" className="spark d3" /></g>
      <g className="conf"><rect x="40" y="70" width="6" height="3" rx="1" fill="#fff" /><rect x="92" y="84" width="6" height="3" rx="1" fill="#9a9da6" /><rect x="66" y="58" width="5" height="3" rx="1" fill="#d6d8de" /><rect x="110" y="100" width="5" height="3" rx="1" fill="#fff" /></g>
      <rect x="30" y="170" width="80" height="64" rx="7" fill="#e9eaee" />
      <rect x="30" y="170" width="80" height="14" fill="#b9bcc5" />
      <rect x="66" y="170" width="8" height="64" fill="#0a0a0d" />
      <g className="lid"><rect x="24" y="148" width="92" height="24" rx="6" fill="#f4f5f8" /><rect x="66" y="148" width="8" height="24" fill="#0a0a0d" /><circle cx="62" cy="144" r="7" fill="none" stroke="#0a0a0d" strokeWidth="4" /><circle cx="78" cy="144" r="7" fill="none" stroke="#0a0a0d" strokeWidth="4" /></g>
      <ellipse cx="70" cy="240" rx="46" ry="6" fill="#000" opacity=".4" />
    </svg>
  );
}

export function ReviewScene() {
  return (
    <svg className="scene" viewBox="0 0 140 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="70" cy="120" r="52" fill="#fff" opacity=".1" />
      <circle cx="70" cy="104" r="22" fill="#e9eaee" />
      <path d="M26 190c4-30 24-44 44-44s40 14 44 44z" fill="#e9eaee" />
      <circle cx="62" cy="102" r="2.4" fill="#0a0a0d" /><circle cx="78" cy="102" r="2.4" fill="#0a0a0d" />
      <path d="M62 112q8 7 16 0" stroke="#0a0a0d" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <g className="wave" fill="#fff">{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => <rect key={i} x={30 + i * 10} y="206" width="5" height="26" rx="2.5" style={{ animationDelay: `${i * 0.12}s` }} />)}</g>
    </svg>
  );
}

export function PhoneStack({ handle }: { handle: string }) {
  return (
    <div className="phones">
      <div className="phone side l"><div className="notch" /><div className="screen s-a" /><UnboxScene />
        <div className="type-tag">📦 UNBOXING</div>
        <div className="side-copy"><b>"Okay, the packaging alone..."</b><span>First-reaction unboxing</span></div>
      </div>
      <div className="phone side r"><div className="notch" /><div className="screen s-b" /><ReviewScene />
        <div className="type-tag">🗣️ TESTIMONIAL</div>
        <div className="side-copy"><div className="mini-stars">★★★★★</div><b>"I use it every single day."</b><span>Talking-to-camera review</span></div>
      </div>
      <div className="phone main">
        <div className="notch" />
        <MainScene />
        <div className="segs"><i className="s1" /><i className="s2" /><i className="s3" /></div>
        <div className="seg-labels"><span>HOOK</span><span>DEMO</span><span>CTA</span></div>
        <div className="ad-badge">Sponsored</div>
        <div className="sticker">🏷️ Your product here</div>
        <div className="cap"><span>Stop scrolling. <em>You need this</em> 👀</span><span>Day 7: <em>actually works</em>?!</span><span>Tap below, <em>link in bio</em> 👇</span></div>
        <div className="hearts"><i>🤍</i><i>🖤</i><i>🤍</i></div>
        <div className="cmts"><span>😍 where do I get this??</span><span>Link please!! 🙏</span><span>ordering rn 🛒</span></div>
        <div className="ui-side"><div><i>🤍</i>Like</div><div><i>💬</i>Comment</div><div><i>↗️</i>Share</div></div>
        <div className="ui-bot"><b>@{handle}</b><span>♪ Honest review, real results #ugc #fyp</span></div>
        <div className="shop">Shop now →</div>
      </div>
    </div>
  );
}
