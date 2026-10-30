const items = ["UGC ADS", "TIKTOK", "INSTAGRAM REELS", "META ADS", "YOUTUBE SHORTS", "2-DAY DELIVERY", "HOOK-FIRST SCRIPTS", "1 VIDEO · $13", "5 VIDEOS · $50", "SAVE $15"];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div className="marq" aria-hidden="true">
      <div className="track">{row.map((t, i) => <span key={i}>{t}<em>✦</em></span>)}</div>
      <div className="track">{row.map((t, i) => <span key={i}>{t}<em>✦</em></span>)}</div>
    </div>
  );
}
