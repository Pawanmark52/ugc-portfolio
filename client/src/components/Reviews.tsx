import { Reveal } from "./Reveal";

const reviews = [
  ["R", "Riya S.", "Skincare brand", "Got 5 videos in 2 days and the hooks were great. Our Reels reach doubled."],
  ["A", "Arjun M.", "D2C founder", "Felt like real customer content. Perfect for our Meta ads."],
  ["K", "Karan P.", "App owner", "Super fast, great communication and unbeatable price for the quality."],
];

export function Reviews() {
  return (
    <section>
      <div className="wrap">
        <Reveal><span className="eyebrow">Reviews</span><h2>What brands <span className="grad">say</span></h2></Reveal>
        <div className="grid cols3">
          {reviews.map(([a, n, r, q], i) => (
            <Reveal key={n} delay={i * 80}>
              <div className="card"><div className="stars">★★★★★</div><p>"{q}"</p>
                <div className="who"><div className="av">{a}</div><div><b>{n}</b><br /><small>{r}</small></div></div></div>
            </Reveal>
          ))}
        </div>
        <p className="note">Sample reviews. Replace with your real client feedback.</p>
      </div>
    </section>
  );
}
