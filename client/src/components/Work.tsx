import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { WorkSample } from "../types";
import { startScroll, stopScroll } from "../lib/lenis";
import { Glass, Reveal, SectionHead } from "./ui";

function Card({ w, i, onPlay }: { w: WorkSample; i: number; onPlay: () => void }) {
  const [failed, setFailed] = useState(false);
  return (
    <Reveal delay={i * 0.1} className="work-item">
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

function Player({ w, onClose }: { w: WorkSample; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    stopScroll();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      startScroll();
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onClose} role="dialog" aria-modal="true" aria-label={w.title}>
      <motion.div className="modal-card glass" initial={{ opacity: 0, y: 40, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }} transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }} onClick={e => e.stopPropagation()}>
        <div className="modal-top">
          <b>{w.title}</b>
          <button onClick={onClose} aria-label="Close video">✕</button>
        </div>
        <div className="player">
          <iframe src={w.previewUrl} title={w.title} allow="autoplay; fullscreen; encrypted-media" allowFullScreen referrerPolicy="no-referrer" />
        </div>
        <a className="open-ext" href={w.videoUrl} target="_blank" rel="noopener noreferrer">Video not loading? Open in Drive ↗</a>
      </motion.div>
    </motion.div>
  );
}

export function Work({ works }: { works: WorkSample[] }) {
  const [active, setActive] = useState<WorkSample | null>(null);
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead eyebrow="Our work" title={<>Recent <span className="silver">UGC ads</span></>} sub="Tap a video to play it right here." />
        <div className="work">
          {works.map((w, i) => <Card key={w.id} w={w} i={i} onPlay={() => setActive(w)} />)}
          <Reveal delay={works.length * 0.1} className="work-item">
            <a href="#contact" className="vid-btn">
              <Glass className="vid next" tilt={8}>
                <div className="plus">+</div><b>Your brand next</b><small>Order 5 videos</small>
              </Glass>
            </a>
          </Reveal>
        </div>
      </div>
      <AnimatePresence>{active && <Player key={active.id} w={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
