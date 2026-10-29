import type { Plan } from "../types";
import { Glass, Reveal, SectionHead } from "./ui";

export function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <section id="pricing">
      <div className="wrap center">
        <SectionHead center eyebrow="Pricing" title={<>Simple, <span className="silver">affordable</span> pricing</>} sub="No monthly contracts. One pack, one price." />
        {plans.map(p => (
          <Reveal key={p.name} className="price-wrap">
            <Glass className="price-box" tilt={4}>
              {p.badge && <span className="badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <div className="price"><span className="silver">${p.priceUsd}</span><small>/ {p.videos} videos</small></div>
              <p className="per">Just ${p.pricePerVideo} per video</p>
              <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
              <a href="#contact" className="btn block">Order the pack <span>→</span></a>
            </Glass>
          </Reveal>
        ))}
        <p className="note">Need 10+ videos or monthly content? <a href="#contact" className="link-u">Message us for a custom quote.</a></p>
      </div>
    </section>
  );
}
