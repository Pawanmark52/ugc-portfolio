import { Glass, Reveal, SectionHead } from "./ui";

// Customer reviews from Feerie Candles, a brand we make UGC ads for.
const reviews = [
  { name: "Priya Sharma", city: "Mumbai", product: "Feerie White Cube Candle", text: "The packaging is absolutely luxury! The vanilla jasmine scent filled my entire living room within 15 minutes of lighting." },
  { name: "Rohan Verma", city: "Delhi", product: "Feerie White Cube Candle", text: "Ordered the Duo Pack for our coffee table decor. Clean soot-free burn and very aesthetic shape." },
  { name: "Ananya Deshmukh", city: "Bangalore", product: "Feerie White Cube Candle", text: "Bought the Gift Box Set as a housewarming present. The recipient was completely obsessed with the scent profile!" },
];

export function Reviews() {
  return (
    <section id="reviews">
      <div className="wrap">
        <SectionHead eyebrow="Brand work" title={<>Made for <span className="silver">Feerie Candles</span></>} sub="We create UGC ads for Feerie Candles. Here's what their customers say about the product." />
        <div className="grid3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <Glass className="rcard">
                <div className="stars">★★★★★</div>
                <p>"{r.text}"</p>
                <div className="who"><div className="av">{r.name[0]}</div><div><b>{r.name}</b><small>{r.city} · {r.product}</small></div></div>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
