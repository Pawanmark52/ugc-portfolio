import type { Faq as FaqT } from "../types";
import { Reveal } from "./Reveal";

export function Faq({ faqs }: { faqs: FaqT[] }) {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap faq">
        <Reveal className="center"><span className="eyebrow">FAQ</span><h2>Questions? <span className="grad">Answered.</span></h2></Reveal>
        {faqs.map(f => (
          <Reveal key={f.question}><details><summary>{f.question}</summary><p>{f.answer}</p></details></Reveal>
        ))}
      </div>
    </section>
  );
}
