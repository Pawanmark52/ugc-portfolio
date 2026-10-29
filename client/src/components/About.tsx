import type { Profile } from "../types";
import { Reveal } from "./Reveal";

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="band">
      <div className="wrap about">
        <Reveal className="photo">
          <div className="frame"><img src="/pawan.jpg" alt={profile.name} /></div>
          <div className="chip p1"><small>Based in</small><b>{profile.location} 🇮🇳</b></div>
          <div className="chip p2"><small>Reply time</small><b>&lt; 24 hrs</b></div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">About me</span>
          <h2>Hi, I'm {profile.name.split(" ")[0]}. I turn products into <span className="grad">scroll-stoppers</span>.</h2>
          <p className="sub">{profile.bio}</p>
          <div className="pills">{profile.skills.map(s => <span key={s}>{s}</span>)}</div>
          <div className="cta" style={{ marginTop: 28 }}><a href="#contact" className="btn">Work with me</a></div>
        </Reveal>
      </div>
    </section>
  );
}
