import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq as FaqT } from "../types";
import { Reveal, SectionHead } from "./ui";

export function Faq({ faqs }: { faqs: FaqT[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq">
      <div className="wrap faq">
        <SectionHead center eyebrow="FAQ" title={<>Questions? <span className="silver">Answered.</span></>} />
        {faqs.map((f, i) => (
          <Reveal key={f.question} delay={i * 0.05}>
            <div className={`qa glass ${open === i ? "open" : ""}`}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.question}</span><i>+</i>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }} style={{ overflow: "hidden" }}>
                    <p>{f.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
