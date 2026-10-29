import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [["work", "Work"], ["services", "Services"], ["process", "Process"], ["pricing", "Pricing"], ["faq", "FAQ"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <header className="nav">
        <div className="nav-pill glass">
          <a href="#top" className="logo"><span className="logo-mark">G</span>growia</a>
          <nav className={open ? "open" : ""}>
            {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          </nav>
          <a href="#contact" className="btn btn-sm">Get started</a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}><i /><i /></button>
        </div>
      </header>
    </>
  );
}
