import type { Plan, Profile } from "../types";

export function Hero({ profile, plan }: { profile: Profile; plan?: Plan }) {
  const price = plan?.priceUsd ?? 65;
  return (
    <header className="hero" id="top">
      <div className="blob b1" /><div className="blob b2" />
      <div className="wrap hero-grid">
        <div>
          <span className="tag"><i className="dot" /> Taking new orders this week</span>
          <h1>UGC ads that make people <span className="grad">stop scrolling</span>.</h1>
          <p className="lead">
            We create authentic, high-converting UGC video ads for TikTok, Instagram Reels and Meta Ads.
            Script, filming, edit and captions all handled. <b>Delivered in {profile.deliveryDays} days.</b>
          </p>
          <div className="cta">
            <a href="#pricing" className="btn">Get {plan?.videos ?? 5} videos for ${price}</a>
            <a href="#work" className="btn ghost">See our work</a>
          </div>
          <div className="stats">
            <div><b>{plan?.videos ?? 5}</b><span>videos per pack</span></div>
            <div><b>{profile.deliveryDays} days</b><span>delivery</span></div>
            <div><b>${plan?.pricePerVideo ?? 13}</b><span>per video</span></div>
          </div>
        </div>

        <div className="stage">
          <div className="phone side l"><div className="notch" /><div className="screen g2" />
            <div className="type-tag">📦 UNBOXING</div>
            <div className="side-copy"><b>"Okay, the packaging alone..."</b><span>First-reaction unboxing</span></div>
          </div>
          <div className="phone side r"><div className="notch" /><div className="screen g3b" />
            <div className="type-tag">🗣️ TESTIMONIAL</div>
            <div className="side-copy"><div className="mini-stars">★★★★★</div><b>"I use it every single day."</b><span>Talking-to-camera review</span></div>
          </div>
          <div className="phone main">
            <div className="notch" />
            <svg className="scene" viewBox="0 0 180 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dbeafe" /><stop offset=".55" stopColor="#60a5fa" /><stop offset="1" stopColor="#1e3a8a" /></linearGradient>
                <radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".9" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
                <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset=".6" stopColor="#e0edff" stopOpacity=".9" /><stop offset="1" stopColor="#bcd6ff" stopOpacity=".9" /></linearGradient>
                <linearGradient id="serum" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7dd3fc" /><stop offset="1" stopColor="#2563eb" /></linearGradient>
              </defs>
              <rect width="180" height="380" fill="url(#bg)" />
              <circle cx="90" cy="230" r="120" fill="url(#glow)" />
              <g fill="#fff" opacity=".55"><circle cx="28" cy="170" r="5" /><circle cx="150" cy="150" r="7" /><circle cx="40" cy="250" r="3" /><circle cx="146" cy="260" r="4" /><circle cx="22" cy="120" r="2.5" /><circle cx="158" cy="210" r="2.5" /></g>
              <g fill="#fff"><path d="M138 108l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" /><path d="M34 205l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" opacity=".8" /></g>
              <ellipse cx="90" cy="337" rx="64" ry="12" fill="#0b1b3a" opacity=".25" />
              <ellipse cx="90" cy="332" rx="58" ry="10" fill="#fff" opacity=".8" />
              <rect x="78" y="94" width="24" height="42" rx="12" fill="#1d4ed8" />
              <rect x="70" y="132" width="40" height="36" rx="8" fill="#0b1b3a" />
              <rect x="74" y="166" width="32" height="26" fill="#cfe3ff" />
              <rect x="52" y="188" width="76" height="146" rx="20" fill="url(#glass)" />
              <rect x="56" y="268" width="68" height="62" rx="16" fill="url(#serum)" opacity=".85" />
              <rect x="62" y="226" width="56" height="58" rx="7" fill="#fff" />
              <text x="90" y="248" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0b1b3a" letterSpacing="1.5">YOUR</text>
              <text x="90" y="260" textAnchor="middle" fontSize="8" fontWeight="800" fill="#1d4ed8" letterSpacing="1.5">BRAND</text>
              <rect x="74" y="266" width="32" height="2" rx="1" fill="#93c5fd" />
              <rect x="60" y="198" width="7" height="120" rx="3.5" fill="#fff" opacity=".55" />
            </svg>
            <div className="segs"><i className="s1" /><i className="s2" /><i className="s3" /></div>
            <div className="seg-labels"><span>HOOK</span><span>DEMO</span><span>CTA</span></div>
            <div className="ad-badge">Sponsored</div>
            <div className="sticker">🏷️ Your product here</div>
            <div className="cap">"Wait, this <em>actually works</em>?!"</div>
            <div className="ui-side"><div><i>❤️</i>Like</div><div><i>💬</i>Comment</div><div><i>↗️</i>Share</div></div>
            <div className="ui-bot"><b>@{profile.handle}</b><span>♪ Honest review, real results #ugc #fyp</span></div>
            <div className="shop">Shop now →</div>
          </div>
          <div className="chip c1"><small>Every video</small><b>🪝 Hook-first script</b></div>
          <div className="chip c2"><small>Delivery</small><b>⚡ {profile.deliveryDays} days</b></div>
          <div className="chip c3"><small>Per pack</small><b>🎬 {plan?.videos ?? 5} videos</b></div>
        </div>
      </div>
    </header>
  );
}
