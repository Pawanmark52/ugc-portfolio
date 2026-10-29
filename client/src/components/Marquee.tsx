const items = ["UGC ADS", "TIKTOK", "REELS", "META ADS", "YOUTUBE SHORTS", "2-DAY DELIVERY", "5 VIDEOS · $65", "HOOK-FIRST"];

export function Marquee() {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="marq" aria-hidden="true">
      <div className="track">
        {row.map((t, i) => (<span key={i}>{t}<em> ✦ </em></span>))}
      </div>
    </div>
  );
}
