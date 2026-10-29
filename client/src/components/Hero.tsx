import { lazy, Suspense, Component, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Plan, Profile } from "../types";
import { PhoneStack } from "./Phone";

const Scene3D = lazy(() => import("./Scene3D"));

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="orb" /> : this.props.children; }
}

export function Hero({ profile, plan }: { profile: Profile; plan?: Plan }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const y3d = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const price = plan?.priceUsd ?? 65;
  return (
    <section className="hero" id="top" ref={ref}>
      <div className="bg-grid" />
      <div className="glow g1" /><div className="glow g2" />
      <div className="wrap hero-grid">
        <motion.div className="hero-copy" style={{ y: yText, opacity: fade }}>
          <motion.span className="pill glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <i className="dot" /> Booking new brands this week
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}>
            UGC ads that make people <span className="silver">stop scrolling</span>.
          </motion.h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35 }}>
            We create authentic, high-converting UGC video ads for TikTok, Instagram Reels and Meta Ads. Script, filming, edit and captions, all handled. Delivered in {profile.deliveryDays} days.
          </motion.p>
          <motion.div className="cta" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <a href="#pricing" className="btn">Get {plan?.videos ?? 5} videos for ${price} <span>→</span></a>
            <a href="#work" className="btn ghost">See our work</a>
          </motion.div>
          <motion.div className="hero-stats glass" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.65 }}>
            <div><b>{plan?.videos ?? 5}</b><span>videos per pack</span></div>
            <div><b>{profile.deliveryDays} days</b><span>delivery</span></div>
            <div><b>${plan?.pricePerVideo ?? 13}</b><span>per video</span></div>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <motion.div className="three" style={{ y: y3d }}>
            <Boundary><Suspense fallback={<div className="orb" />}><Scene3D /></Suspense></Boundary>
          </motion.div>
          <motion.div className="phone-wrap" style={{ y: yPhone }} initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}>
            <PhoneStack handle={profile.handle} />
          </motion.div>
          <div className="chip glass c1"><small>Every video</small><b>🪝 Hook-first script</b></div>
          <div className="chip glass c2"><small>Delivery</small><b>⚡ {profile.deliveryDays} days</b></div>
          <div className="chip glass c3"><small>Per pack</small><b>🎬 {plan?.videos ?? 5} videos</b></div>
        </div>
      </div>
      <div className="scroll-hint"><i /> Scroll</div>
    </section>
  );
}
