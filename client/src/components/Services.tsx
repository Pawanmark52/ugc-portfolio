import type { Service } from "../types";
import { Glass, Reveal, SectionHead } from "./ui";

const visuals: Record<string, JSX.Element> = {
  "Hook-first scripts": (
    <div className="viz hookviz">
      <div className="bubble b1">"Stop scrolling..."</div>
      <div className="bubble b2">3s hook ✓</div>
      <div className="bar-row"><i style={{ width: "92%" }} /><i style={{ width: "64%" }} /><i style={{ width: "78%" }} /></div>
    </div>
  ),
  "Pro editing": (
    <div className="viz timeline">
      {[34, 58, 22, 70, 46, 80, 30].map((w, i) => <i key={i} style={{ width: `${w}%`, animationDelay: `${i * 0.15}s` }} />)}
      <u />
    </div>
  ),
  "Product demo UGC": (
    <div className="viz minis">
      <div className="mini"><b /><i /></div><div className="mini m2"><b /><i /></div><div className="mini m3"><b /><i /></div>
    </div>
  ),
  "Platform-ready": (
    <div className="viz plats"><span>TikTok</span><span>Reels</span><span>Shorts</span><span>Meta</span><span>9:16 HD</span></div>
  ),
  "2-day delivery": (
    <div className="viz ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /><circle className="arc" cx="50" cy="50" r="40" /></svg><b>48h</b></div>
  ),
  "Testimonial style": (
    <div className="viz stars"><div>★★★★★</div><p>"Honestly obsessed."</p></div>
  ),
};

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHead eyebrow="What you get" title={<>Everything for a <span className="silver">winning ad</span></>} sub="One studio for scripts, filming, editing and delivery, built for short-form feeds." />
        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className={`bento-item i${i}`}>
              <Glass className="bento-card">
                <div className="ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                {visuals[s.title]}
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
