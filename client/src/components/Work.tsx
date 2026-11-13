import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { WorkSample } from "../types";
import { startScroll, stopScroll } from "../lib/lenis";
import { Glass, Reveal, SectionHead } from "./ui";

const INITIAL = 8;

function Card({ w, i, onPlay }: { w: WorkSample; i: number; onPlay: () => void }) {
  const [failed, setFailed] = useState(false);
  return (
    <Reveal delay={(i % 4) * 0.1} className="work-item">
      <button className="vid-btn" onClick={onPlay} aria-label={`Play ${w.title}`}>
        <Glass className="vid" tilt={8}>
          <div className="ph" />
          {!failed && <img src={w.thumbnailUrl} alt={w.title} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}
          <div className="play"><span>▶</span></div>
          <div className="meta glass-bar"><b>{w.title}</b><small>{w.category}</small><em>Play ▶</em></div>
        </Glass>
      </button>
    </Reveal>
  );
}

function Player({ w, index, total, onClose, onStep }: { w: WorkSample; index: number; total: number; onClose: () => void; onStep: (d: number) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  useEffect(() => {
    stopScroll();
    document.body.style.overflow = "hidden";
    return () => {
      startScroll();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onClose} role="dialog" aria-modal="true" aria-label={w.title}>
      <motion.div className="modal-card glass" initial={{ opacity: 0, y: 40, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }} transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }} onClick={e => e.stopPropagation()}>
        <div className="modal-top">
          <b>{w.title} <small>{index + 1} / {total}</small></b>
          <button onClick={onClose} aria-label="Close video">✕</button>
        </div>
        <div className="player">
          <iframe key={w.id} src={w.previewUrl} title={w.title} allow="autoplay; fullscreen; encrypted-media" allowFullScreen referrerPolicy="no-referrer" />
        </div>
        <div className="modal-nav">
          <button onClick={() => onStep(-1)} aria-label="Previous video">← Prev</button>
          <a className="open-ext" href={w.videoUrl} target="_blank" rel="noopener noreferrer">Not loading? Open in Drive ↗</a>
          <button onClick={() => onStep(1)} aria-label="Next video">Next →</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ALL = "All";

export function Work({ allWorks }: { allWorks: WorkSample[] }) {
  const [cat, setCat] = useState(ALL);
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Categories in the order they first appear; the tabs only show when there is more than one.
  const counts = new Map<string, number>();
  for (const w of allWorks) counts.set(w.category, (counts.get(w.category) ?? 0) + 1);
  const categories = [...counts.keys()].sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0));
  const works = cat === ALL ? allWorks : allWorks.filter(w => w.category === cat);
  const shown = showAll ? works : works.slice(0, INITIAL);
  const step = (d: number) => setActive(a => (a === null ? a : (a + d + works.length) % works.length));
  const close = () => setActive(null);
  const pick = (c: string) => { setCat(c); setShowAll(false); };

  return (
    <section id="work">
      <div className="wrap">
        <SectionHead eyebrow="Our work" title={<>Recent <span className="silver">UGC ads</span></>} sub={`${works.length} sample videos${cat === ALL ? "" : ` in ${cat}`}. Tap one to play it right here.`} />
        {categories.length > 1 && (
          <div className="cats" role="tablist" aria-label="Sample categories">
            {[ALL, ...categories].map(c => (
              <button key={c} role="tab" aria-selected={cat === c} className={`cat glass ${cat === c ? "on" : ""}`} onClick={() => pick(c)}>
                {c}<em>{c === ALL ? allWorks.length : counts.get(c)}</em>
              </button>
            ))}
          </div>
        )}
        <div className="work" key={cat}>
          {shown.map((w, i) => <Card key={w.id} w={w} i={i} onPlay={() => setActive(i)} />)}
          {(showAll || works.length <= INITIAL) && (
            <Reveal className="work-item">
              <a href="#contact" className="vid-btn">
                <Glass className="vid next" tilt={8}>
                  <div className="plus">+</div><b>Your brand next</b><small>Order a pack</small>
                </Glass>
              </a>
            </Reveal>
          )}
        </div>
        {works.length > INITIAL && (
          <div className="more">
            <button className="btn ghost" onClick={() => setShowAll(s => !s)}>
              {showAll ? "Show fewer ↑" : `Show all ${works.length} videos ↓`}
            </button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {active !== null && works[active] && <Player key="player" w={works[active]} index={active} total={works.length} onClose={close} onStep={step} />}
      </AnimatePresence>
    </section>
  );
}
