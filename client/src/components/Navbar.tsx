import { useEffect, useState } from "react";

const links = [["work", "Work"], ["about", "About"], ["services", "Services"], ["pricing", "Pricing"], ["faq", "FAQ"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav-row">
        <a href="#top" className="logo">pawan<span className="grad">.ugc</span></a>
        <ul className={open ? "open" : ""}>
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn nav-cta">Order now</a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>{open ? "✕" : "☰"}</button>
      </div>
    </nav>
  );
}
