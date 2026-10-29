import type { Profile } from "../types";
import { Reveal } from "./Reveal";

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="band">
      <div className="wrap about">
        <Reveal className="photo">
          <div className="frame brandcard"><div className="logo-mark">G</div><b>growia</b><span>UGC ad studio</span></div>
          <div className="chip p1"><small>Based in</small><b>{profile.location} 🇮🇳</b></div>
          <div className="chip p2"><small>Reply time</small><b>&lt; 24 hrs</b></div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">About us</span>
          <h2>We're {profile.name}. We turn products into <span className="grad">scroll-stoppers</span>.</h2>
          <p className="sub">{profile.bio}</p>
          <div className="pills">{profile.skills.map(s => <span key={s}>{s}</span>)}</div>
          <div className="cta" style={{ marginTop: 28 }}><a href="#contact" className="btn">Work with us</a></div>
        </Reveal>
      </div>
    </section>
  );
}
