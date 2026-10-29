import { useState } from "react";
import type { WorkSample } from "../types";
import { Reveal } from "./Reveal";

function Card({ w }: { w: WorkSample }) {
  const [failed, setFailed] = useState(false);
  return (
    <a className="vid" href={w.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${w.title}`}>
      <div className="ph" style={{ background: `linear-gradient(160deg,${w.gradient[0]},${w.gradient[1]})` }} />
      {!failed && <img src={w.thumbnailUrl} alt={w.title} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}
      <div className="pl">▶</div>
      <div className="meta"><b>{w.title}</b><small>{w.category}</small></div>
    </a>
  );
}

export function Work({ works }: { works: WorkSample[] }) {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Portfolio</span>
          <h2>Recent <span className="grad">UGC ads</span></h2>
          <p className="sub">Tap a video to watch the full ad.</p>
        </Reveal>
        <Reveal className="work">
          {works.map(w => <Card key={w.id} w={w} />)}
          <a className="vid next" href="#contact">
            <div className="plus">+</div>
            <b>Your brand next</b>
            <small>Order 5 videos</small>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
