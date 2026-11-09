import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Addon, Plan } from "../types";
import { CURRENCIES, useCurrency } from "../lib/currency";
import { Glass, Reveal, SectionHead } from "./ui";

function CurrencyPicker() {
  const { code, setCode, live } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const current = CURRENCIES[code];
  return (
    <div className="cur glass" ref={ref}>
      <span className="cur-label">Show prices in</span>
      <div className="cur-dd">
        <button type="button" className="cur-btn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span className="flag">{current?.flag}</span><b>{code}</b><em>{current?.label}</em><i className={open ? "up" : ""}>▾</i>
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul role="listbox" className="cur-panel glass" initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}>
              {Object.entries(CURRENCIES).map(([c, info]) => (
                <li key={c} role="option" aria-selected={c === code}>
                  <button type="button" className={c === code ? "on" : ""} onClick={() => { setCode(c); setOpen(false); }}>
                    <span className="flag">{info.flag}</span><b>{c}</b><em>{info.label}</em>{c === code && <span className="tick">✓</span>}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <small>{code === "USD" ? "Prices are in US dollars." : `Approximate ${live ? "live " : ""}conversion from USD. The final amount is confirmed when you order.`}</small>
    </div>
  );
}

function Card({ p, delay }: { p: Plan; delay: number }) {
  const { fmt } = useCurrency();
  const save = p.originalPriceUsd ? p.originalPriceUsd - p.priceUsd : 0;
  const pct = p.originalPriceUsd ? Math.round((save / p.originalPriceUsd) * 100) : 0;
  const unit = p.videos === 1 ? "video" : "videos";
  return (
    <Reveal delay={delay} className={`plan ${p.featured ? "hot" : ""}`}>
      <Glass className="price-box" tilt={p.featured ? 4 : 6}>
        {p.badge && <span className="badge">{p.badge}</span>}
        <h3>{p.name}</h3>
        <div className={`price ${fmt(p.priceUsd).length > 5 ? "long" : ""}`}>
          <span className="silver">{fmt(p.priceUsd)}</span>
          {p.originalPriceUsd && <s className="was">{fmt(p.originalPriceUsd)}</s>}
        </div>
        <small className="unit">for {p.videos} {unit}</small>
        <p className="per">{fmt(p.priceUsd / p.videos)} per video{save > 0 && <b className="save">Save {fmt(save)} ({pct}% off)</b>}</p>
        <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
        <a href="#contact" className="btn block">{p.videos === 1 ? "Order 1 video" : `Get ${p.videos} videos`} · {fmt(p.priceUsd)} <span>→</span></a>
      </Glass>
    </Reveal>
  );
}

export function Pricing({ plans, addons }: { plans: Plan[]; addons: Addon[] }) {
  const { fmt } = useCurrency();
  const single = plans.find(p => p.videos === 1);
  const pack = plans.find(p => p.featured) ?? plans.find(p => p.videos === 5);
  return (
    <section id="pricing">
      <div className="wrap center">
        <SectionHead center eyebrow="Pricing" title={<>The more you order, <span className="silver">the less you pay</span></>} sub="No monthly contracts. Start with one video, or grab a pack and pay less per video." />
        {single && pack && (
          <Reveal className="offer glass">
            <span className="flame">🔥</span>
            <div><b>Launch offer: {pack.videos} videos for {fmt(pack.priceUsd)}</b><small>Single video is {fmt(single.priceUsd)}. {pack.videos} separately would be {fmt(single.priceUsd * pack.videos)}. Save {fmt(single.priceUsd * pack.videos - pack.priceUsd)}.</small></div>
            <a href="#contact" className="btn btn-sm">Get the offer</a>
          </Reveal>
        )}
        <Reveal className="cur-wrap"><CurrencyPicker /></Reveal>
        <div className="plans">
          {plans.map((p, i) => <Card key={p.name} p={p} delay={i * 0.08} />)}
        </div>
        {addons.length > 0 && (
          <Reveal className="addons glass">
            <b>Add-ons</b>
            <div>{addons.map(a => <span key={a.name}>{a.name} <em>+{fmt(a.priceUsd)}{a.perVideo ? " / video" : ""}</em></span>)}</div>
          </Reveal>
        )}
        <p className="note">Need monthly content or more than 10 videos? <a href="#contact" className="link-u">Message us for a custom quote.</a></p>
      </div>
    </section>
  );
}
