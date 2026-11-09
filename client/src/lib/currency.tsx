import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export const CURRENCIES: Record<string, { label: string; locale: string; flag: string }> = {
  USD: { label: "US Dollar", locale: "en-US", flag: "🇺🇸" },
  INR: { label: "Indian Rupee", locale: "en-IN", flag: "🇮🇳" },
  AED: { label: "UAE Dirham", locale: "en-AE", flag: "🇦🇪" },
  GBP: { label: "British Pound", locale: "en-GB", flag: "🇬🇧" },
  EUR: { label: "Euro", locale: "en-IE", flag: "🇪🇺" },
  CAD: { label: "Canadian Dollar", locale: "en-CA", flag: "🇨🇦" },
  AUD: { label: "Australian Dollar", locale: "en-AU", flag: "🇦🇺" },
  SAR: { label: "Saudi Riyal", locale: "en-SA", flag: "🇸🇦" },
  SGD: { label: "Singapore Dollar", locale: "en-SG", flag: "🇸🇬" },
};

// Approximate fallback rates (per 1 USD), used if the live rate request fails.
const FALLBACK: Record<string, number> = { USD: 1, INR: 88, AED: 3.67, GBP: 0.78, EUR: 0.92, CAD: 1.37, AUD: 1.52, SAR: 3.75, SGD: 1.3 };
const KEY = "growia-currency";
const EU = ["DE", "FR", "ES", "IT", "NL", "IE", "PT", "BE", "AT", "FI", "GR"];

function detect(): string {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && CURRENCIES[saved]) return saved;
  } catch { /* storage unavailable */ }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "INR";
    if (tz === "Asia/Dubai") return "AED";
    if (tz === "Asia/Riyadh") return "SAR";
    if (tz === "Asia/Singapore") return "SGD";
    if (tz.startsWith("Australia/")) return "AUD";
    if (tz === "Europe/London") return "GBP";
    const region = (navigator.language.split("-")[1] ?? "").toUpperCase();
    if (region === "IN") return "INR";
    if (region === "AE") return "AED";
    if (region === "GB") return "GBP";
    if (region === "CA") return "CAD";
    if (region === "AU") return "AUD";
    if (region === "SA") return "SAR";
    if (region === "SG") return "SGD";
    if (EU.includes(region)) return "EUR";
  } catch { /* fall through */ }
  return "USD";
}

/** Smallest price step per currency, so converted prices land on clean numbers. */
const STEP: Record<string, number> = { USD: 0, INR: 10, AED: 1, SAR: 1, GBP: 0.5, EUR: 0.5, CAD: 0.5, AUD: 0.5, SGD: 0.5 };

export interface Price {
  total: number;
  per: number;
  original: number | null;
  save: number;
  pct: number;
}

interface PlanLike {
  name: string;
  videos: number;
  priceUsd: number;
  originalPriceUsd: number | null;
}

interface Ctx {
  code: string;
  setCode: (c: string) => void;
  fmt: (usd: number) => string;
  money: (local: number) => string;
  ladder: (plans: PlanLike[]) => Record<string, Price>;
  live: boolean;
  updated: string | null;
  rate: number;
}

const CurrencyCtx = createContext<Ctx>({
  code: "USD", setCode: () => {}, fmt: v => `$${v}`, money: v => `$${v}`, ladder: () => ({}), live: false, updated: null, rate: 1,
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [code, setCodeState] = useState<string>(detect);
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK);
  const [live, setLive] = useState(false);
  const [updated, setUpdated] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    fetch("https://open.er-api.com/v6/latest/USD", { signal: ctrl.signal })
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(d => {
        if (!d?.rates) return;
        const next: Record<string, number> = { USD: 1 };
        for (const c of Object.keys(CURRENCIES)) next[c] = typeof d.rates[c] === "number" ? d.rates[c] : FALLBACK[c];
        setRates(next);
        setLive(true);
        if (d.time_last_update_utc) setUpdated(String(d.time_last_update_utc));
      })
      .catch(() => { /* keep fallback rates */ })
      .finally(() => clearTimeout(t));
    return () => { ctrl.abort(); clearTimeout(t); };
  }, []);

  const value = useMemo<Ctx>(() => {
    const info = CURRENCIES[code] ?? CURRENCIES.USD;
    const rate = rates[code] ?? 1;
    return {
      code,
      live,
      updated,
      rate,
      setCode: c => {
        setCodeState(c);
        try { localStorage.setItem(KEY, c); } catch { /* ignore */ }
      },
      fmt: usd => {
        const v = usd * rate;
        const whole = code !== "USD" || Number.isInteger(v);
        return new Intl.NumberFormat(info.locale, {
          style: "currency",
          currency: code,
          minimumFractionDigits: whole ? 0 : 2,
          maximumFractionDigits: whole ? 0 : 2,
        }).format(code === "USD" ? v : Math.round(v));
      },
      money: n => {
        const whole = Number.isInteger(n);
        return new Intl.NumberFormat(info.locale, {
          style: "currency",
          currency: code,
          minimumFractionDigits: whole ? 0 : 2,
          maximumFractionDigits: 2,
        }).format(n);
      },
      ladder: plans => {
        const out: Record<string, Price> = {};
        const step = STEP[code] ?? 0;
        if (!step) {
          for (const p of plans) {
            const save = p.originalPriceUsd ? p.originalPriceUsd - p.priceUsd : 0;
            out[p.name] = { total: p.priceUsd, per: p.priceUsd / p.videos, original: p.originalPriceUsd, save, pct: p.originalPriceUsd ? Math.round((save / p.originalPriceUsd) * 100) : 0 };
          }
          return out;
        }
        // Round each pack's per-video price to a clean number, and keep it strictly lower for bigger packs.
        const sorted = [...plans].sort((a, b) => a.videos - b.videos);
        const units: Record<string, number> = {};
        let prev = Infinity;
        for (const p of sorted) {
          let unit = Math.round(((p.priceUsd / p.videos) * rate) / step) * step;
          if (unit >= prev) unit = prev - step;
          units[p.name] = unit;
          prev = unit;
        }
        const single = sorted.find(p => p.videos === 1);
        for (const p of sorted) {
          const unit = units[p.name];
          const total = unit * p.videos;
          const singleUnit = single ? units[single.name] : Math.round((((p.originalPriceUsd ?? p.priceUsd) / p.videos) * rate) / step) * step;
          const original = p.originalPriceUsd && singleUnit * p.videos > total ? singleUnit * p.videos : null;
          const save = original ? original - total : 0;
          out[p.name] = { total, per: unit, original, save, pct: original ? Math.round((save / original) * 100) : 0 };
        }
        return out;
      },
    };
  }, [code, rates, live, updated]);

  return <CurrencyCtx.Provider value={value}>{children}</CurrencyCtx.Provider>;
}

export const useCurrency = () => useContext(CurrencyCtx);
