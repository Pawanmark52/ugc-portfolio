import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal, SectionHead } from "./ui";

function Count({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: v => { if (ref.current) ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`; } });
    return () => c.stop();
  }, [inView, to, prefix, suffix, decimals]);
  return <b ref={ref}>{prefix}0{suffix}</b>;
}

export function Results() {
  return (
    <section id="results">
      <div className="wrap">
        <SectionHead eyebrow="Performance" title={<>Built to <span className="silver">perform</span> in your ad account</>} sub="Illustrative dashboard. Results vary by product and audience." />
        <Reveal>
          <div className="browser glass">
            <div className="bar"><i /><i /><i /><em>ads-manager / campaign / ugc-pack</em></div>
            <div className="dash">
              <div className="kpi"><small>Click-through rate</small><Count to={2.8} suffix="%" decimals={1} /><span className="up">▲ vs studio ads</span></div>
              <div className="kpi"><small>Cost per purchase</small><Count to={9.4} prefix="$" decimals={1} /><span className="up">▼ lower</span></div>
              <div className="kpi"><small>Thumb-stop rate</small><Count to={34} suffix="%" /><span className="up">▲ higher</span></div>
              <div className="chart">
                <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".35" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
                  </defs>
                  <path className="area" d="M0 150 C60 140 90 120 140 124 S230 90 280 80 S380 96 430 60 S540 30 600 18 L600 180 L0 180Z" fill="url(#ar)" />
                  <path className="line" d="M0 150 C60 140 90 120 140 124 S230 90 280 80 S380 96 430 60 S540 30 600 18" />
                </svg>
                <div className="legend"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
