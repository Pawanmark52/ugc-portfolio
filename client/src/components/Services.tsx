import type { Service } from "../types";
import { Reveal } from "./Reveal";
import { useCountUp } from "../hooks";

function Kpi({ label, value, suffix, prefix = "", note, bars, decimals = 0 }: {
  label: string; value: number; suffix: string; prefix?: string; note: string; bars: number[]; decimals?: number;
}) {
  const { ref, n } = useCountUp(Math.round(value * 10 ** decimals));
  return (
    <div className="kpi">
      <small>{label}</small>
      <b ref={ref}>{prefix}{(n / 10 ** decimals).toFixed(decimals)}{suffix}</b>
      <span className="up">{note}</span>
      <div className="bars">{bars.map((h, i) => <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }} />)}</div>
    </div>
  );
}

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal><span className="eyebrow">What you get</span><h2>Everything for a <span className="grad">winning ad</span></h2></Reveal>
        <div className="grid cols3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card"><div className="ico">{s.icon}</div><h3>{s.title}</h3><p>{s.description}</p></div>
            </Reveal>
          ))}
        </div>
        <Reveal className="browser">
          <div className="bar"><i /><i /><i /><em>ads-manager / campaign / ugc-pack</em></div>
          <div className="dash">
            <Kpi label="Click-through rate" value={2.8} suffix="%" decimals={1} note="▲ 41% vs studio ads" bars={[30, 45, 40, 65, 80, 100]} />
            <Kpi label="Cost per purchase" value={9.4} prefix="$" suffix="" decimals={1} note="▼ 32% lower" bars={[100, 85, 70, 60, 48, 38]} />
            <Kpi label="Thumb-stop rate" value={34} suffix="%" note="▲ 12 pts" bars={[35, 42, 55, 60, 78, 90]} />
          </div>
        </Reveal>
        <p className="note">Illustrative dashboard mockup. Results vary by product and audience.</p>
      </div>
    </section>
  );
}
