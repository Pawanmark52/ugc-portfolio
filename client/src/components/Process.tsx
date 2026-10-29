import { Reveal } from "./Reveal";

export function Process({ days }: { days: number }) {
  const steps = [
    ["Place order", "Pay and share your product, brand and target audience."],
    ["Script approval", "We send hook and script ideas. You pick your favourites."],
    ["We create", `Filming and editing, all done within ${days} days.`],
    ["Delivery", "HD files delivered, plus one revision per video."],
  ];
  return (
    <section id="process" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal><span className="eyebrow">How it works</span><h2>From order to <span className="grad">ready-to-post</span> in {days} days</h2></Reveal>
        <div className="grid cols4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="card step"><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
