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
            <div className="screen photo-screen" style={{ backgroundImage: "url(/creator.jpg)" }} />
            <div className="segs"><i className="s1" /><i className="s2" /><i className="s3" /></div>
            <div className="seg-labels"><span>HOOK</span><span>DEMO</span><span>CTA</span></div>
            <div className="ad-badge">Sponsored</div>
            <div className="sticker">🏷️ Your product here</div>
            <div className="cap">"Wait, this <em>actually works</em>?!"</div>
            <div className="ui-side"><div><i>❤️</i>Like</div><div><i>💬</i>Comment</div><div><i>↗️</i>Share</div></div>
            <div className="ui-bot"><b>@{profile.handle}</b><span>Honest review, real results #ugc #fyp</span></div>
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
