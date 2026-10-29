import { useState } from "react";
import type { WorkSample } from "../types";
import { Glass, Reveal, SectionHead } from "./ui";

function Card({ w, i }: { w: WorkSample; i: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <Reveal delay={i * 0.1} className="work-item">
      <a href={w.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${w.title}`}>
        <Glass className="vid" tilt={8}>
          <div className="ph" />
          {!failed && <img src={w.thumbnailUrl} alt={w.title} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}
          <div className="play"><span>▶</span></div>
          <div className="meta glass-bar"><b>{w.title}</b><small>{w.category}</small><em>Watch ↗</em></div>
        </Glass>
      </a>
    </Reveal>
  );
}

export function Work({ works }: { works: WorkSample[] }) {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead eyebrow="Our work" title={<>Recent <span className="silver">UGC ads</span></>} sub="Tap a video to watch the full ad." />
        <div className="work">
          {works.map((w, i) => <Card key={w.id} w={w} i={i} />)}
          <Reveal delay={works.length * 0.1} className="work-item">
            <a href="#contact">
              <Glass className="vid next" tilt={8}>
                <div className="plus">+</div><b>Your brand next</b><small>Order 5 videos</small>
              </Glass>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
