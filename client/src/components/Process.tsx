import { Glass, Reveal, SectionHead } from "./ui";

export function Process({ days }: { days: number }) {
  const steps = [
    ["Place order", "Pay and share your product, brand and target audience."],
    ["Script approval", "We send hook and script ideas. You pick your favourites."],
    ["We create", "Filming and editing, delivered in 1 to 4 days depending on your pack."],
    ["Delivery", "HD files delivered, plus your included revisions."],
  ];
  return (
    <section id="process">
      <div className="wrap">
        <SectionHead eyebrow="How it works" title={<>From order to <span className="silver">ready-to-post</span> in 1 to 4 days</>} />
        <div className="steps">
          <div className="steps-line" />
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <Glass className="step">
                <span className="num">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
