import type { Addon, Plan } from "../types";
import { Glass, Reveal, SectionHead } from "./ui";

function Card({ p, delay }: { p: Plan; delay: number }) {
  const save = p.originalPriceUsd ? p.originalPriceUsd - p.priceUsd : 0;
  const pct = p.originalPriceUsd ? Math.round((save / p.originalPriceUsd) * 100) : 0;
  const unit = p.videos === 1 ? "video" : "videos";
  return (
    <Reveal delay={delay} className={`plan ${p.featured ? "hot" : ""}`}>
      <Glass className="price-box" tilt={p.featured ? 4 : 6}>
        {p.badge && <span className="badge">{p.badge}</span>}
        <h3>{p.name}</h3>
        <div className="price">
          <span className="silver">${p.priceUsd}</span>
          {p.originalPriceUsd && <s className="was">${p.originalPriceUsd}</s>}
        </div>
        <small className="unit">for {p.videos} {unit}</small>
        <p className="per">${p.pricePerVideo} per video{save > 0 && <b className="save">Save ${save} ({pct}% off)</b>}</p>
        <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
        <a href="#contact" className="btn block">{p.videos === 1 ? "Order 1 video" : `Get ${p.videos} videos`} · ${p.priceUsd} <span>→</span></a>
      </Glass>
    </Reveal>
  );
}

export function Pricing({ plans, addons }: { plans: Plan[]; addons: Addon[] }) {
  const single = plans.find(p => p.videos === 1);
  const pack = plans.find(p => p.videos === 5);
  return (
    <section id="pricing">
      <div className="wrap center">
        <SectionHead center eyebrow="Pricing" title={<>The more you order, <span className="silver">the less you pay</span></>} sub="No monthly contracts. Start with one video, or grab a pack and pay less per video." />
        {single && pack && (
          <Reveal className="offer glass">
            <span className="flame">🔥</span>
            <div><b>Launch offer: 5 videos for ${pack.priceUsd}</b><small>Single video is ${single.priceUsd}. Five separately would be ${single.priceUsd * 5}. Save ${single.priceUsd * 5 - pack.priceUsd}.</small></div>
            <a href="#contact" className="btn btn-sm">Get the offer</a>
          </Reveal>
        )}
        <div className="plans">
          {plans.map((p, i) => <Card key={p.name} p={p} delay={i * 0.08} />)}
        </div>
        {addons.length > 0 && (
          <Reveal className="addons glass">
            <b>Add-ons</b>
            <div>{addons.map(a => <span key={a.name}>{a.name} <em>{a.price}</em></span>)}</div>
          </Reveal>
        )}
        <p className="note">Need monthly content or more than 10 videos? <a href="#contact" className="link-u">Message us for a custom quote.</a></p>
      </div>
    </section>
  );
}
