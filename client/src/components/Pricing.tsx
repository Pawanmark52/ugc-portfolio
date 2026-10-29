import type { Plan } from "../types";
import { Reveal } from "./Reveal";

export function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <section id="pricing" className="band">
      <div className="wrap center">
        <Reveal><span className="eyebrow">Pricing</span><h2>Simple, <span className="grad">affordable</span> pricing</h2>
          <p className="sub auto">No monthly contracts. One pack, one price.</p></Reveal>
        {plans.map(p => (
          <Reveal key={p.name} className="price-box">
            {p.badge && <span className="badge">{p.badge}</span>}
            <h3>{p.name}</h3>
            <div className="price grad">${p.priceUsd} <small>/ {p.videos} videos</small></div>
            <p className="per">Just ${p.pricePerVideo} per video</p>
            <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
            <a href="#contact" className="btn block">Order the pack</a>
          </Reveal>
        ))}
        <p className="note">Need 10+ videos or monthly content? <a href="#contact" className="accent">Message me for a custom quote.</a></p>
      </div>
    </section>
  );
}
