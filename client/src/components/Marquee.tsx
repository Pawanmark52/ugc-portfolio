import type { Plan } from "../types";
import { useCurrency } from "../lib/currency";

const base = ["UGC ADS", "TIKTOK", "INSTAGRAM REELS", "META ADS", "YOUTUBE SHORTS", "2-DAY DELIVERY", "HOOK-FIRST SCRIPTS"];

export function Marquee({ plans }: { plans: Plan[] }) {
  const { fmt } = useCurrency();
  const items = [...base, ...plans.map(p => `${p.videos} ${p.videos === 1 ? "VIDEO" : "VIDEOS"} · ${fmt(p.priceUsd)}`)];
  const row = [...items, ...items];
  return (
    <div className="marq" aria-hidden="true">
      <div className="track">{row.map((t, i) => <span key={i}>{t}<em>✦</em></span>)}</div>
      <div className="track">{row.map((t, i) => <span key={i}>{t}<em>✦</em></span>)}</div>
    </div>
  );
}
