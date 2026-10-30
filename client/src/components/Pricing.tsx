import type { Plan } from "../types";
import { Glass, Reveal, SectionHead } from "./ui";

function Card({ p, delay }: { p: Plan; delay: number }) {
  const hot = p.originalPriceUsd !== null;
  const save = hot ? p.originalPriceUsd! - p.priceUsd : 0;
  const pct = hot ? Math.round((save / p.originalPriceUsd!) * 100) : 0;
  return (
    <Reveal delay={delay} className={`plan ${hot ? "hot" : ""}`}>
      <Glass className="price-box" tilt={hot ? 4 : 6}>
        {p.badge && <span className="badge">{p.badge}</span>}
        <h3>{p.name}</h3>
        <div className="price">
          <span className="silver">${p.priceUsd}</span>
          {hot && <s className="was">${p.originalPriceUsd}</s>}
          <small>/ {p.videos} {p.videos === 1 ? "video" : "videos"}</small>
        </div>
        <p className="per">{hot ? <>Just ${p.pricePerVideo} per video <b className="save">You save ${save} ({pct}% off)</b></> : <>${p.pricePerVideo} per video</>}</p>
        <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
        <a href="#contact" className="btn block">{hot ? `Claim the offer · $${p.priceUsd}` : `Order 1 video · $${p.priceUsd}`} <span>→</span></a>
      </Glass>
    </Reveal>
  );
}

export function Pricing({ plans }: { plans: Plan[] }) {
  const single = plans.find(p => p.videos === 1);
  const pack = plans.find(p => p.videos > 1);
  return (
    <section id="pricing">
      <div className="wrap center">
        <SectionHead center eyebrow="Pricing" title={<>Simple pricing. <span className="silver">Bigger savings</span> on 5.</>} sub="No monthly contracts. Order one video, or grab the pack and pay less per video." />
        {single && pack && (
          <Reveal className="offer glass">
            <span className="flame">🔥</span>
            <div><b>Launch offer: 5 videos for ${pack.priceUsd}</b><small>Single video is ${single.priceUsd}. Five separately would be ${single.priceUsd * 5}. Save ${single.priceUsd * 5 - pack.priceUsd}.</small></div>
            <a href="#contact" className="btn btn-sm">Get the offer</a>
          </Reveal>
        )}
        <div className="plans">
          {single && <Card p={single} delay={0} />}
          {pack && <Card p={pack} delay={0.12} />}
        </div>
        <p className="note">Need 10+ videos or monthly content? <a href="#contact" className="link-u">Message us for a custom quote.</a></p>
      </div>
    </section>
  );
}
