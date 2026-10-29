import { FormEvent, useState } from "react";
import type { Profile } from "../types";
import { Reveal } from "./Reveal";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "https://tvigxppfhpglzxawevqo.supabase.co";
// Publishable key: safe in the browser. The ugc_leads table only allows inserts (RLS).
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY ?? "sb_publishable_tkptTYYUDVIfwQWw82m8Wg_4TXFBo8U";

async function sendLead(lead: { name: string; email: string; product: string | null; message: string }) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/ugc_leads`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error(res.status === 400 ? "Please check your details and try again." : "Couldn't send right now. Please use WhatsApp or email below.");
}

export function Contact({ profile }: { profile: Profile }) {
  const [form, setForm] = useState({ name: "", email: "", product: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await sendLead({ name: form.name.trim(), email: form.email.trim(), product: form.product.trim() || null, message: form.message.trim() });
      setForm({ name: "", email: "", product: "", message: "" });
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error && err.message !== "Failed to fetch" ? err.message : "Couldn't send right now. Please use WhatsApp or email below.");
      setStatus("idle");
    }
  };

  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Pawan, I want the 5 UGC video pack")}`;
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent("UGC Pack Order")}`;

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="box">
          <span className="eyebrow">Let's work</span>
          <h2>Ready for ads that <span className="grad">actually convert</span>?</h2>
          <p className="sub auto">Send me your product and I'll reply within 24 hours with script ideas.</p>

          <form className="form" onSubmit={onSubmit}>
            <input required placeholder="Your name" value={form.name} onChange={set("name")} maxLength={100} />
            <input required type="email" placeholder="Email" value={form.email} onChange={set("email")} />
            <input className="full" placeholder="Product / brand link (optional)" value={form.product} onChange={set("product")} />
            <textarea className="full" required minLength={5} rows={4} placeholder="Tell me about your product and what you want" value={form.message} onChange={set("message")} />
            <button className="btn full" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send request"}</button>
            {status === "done" && <p className="ok full">✓ Got it! I'll reply within 24 hours.</p>}
            {error && <p className="err full">{error}</p>}
          </form>

          <div className="links">
            <a className="link" href={mail}><div className="ico">✉️</div><b>Email</b><small>{profile.email}</small></a>
            <a className="link" href={wa} target="_blank" rel="noopener noreferrer"><div className="ico">💬</div><b>WhatsApp / Call</b><small>{profile.phone}</small></a>
            <a className="link" href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer"><div className="ico">📸</div><b>Instagram</b><small>@{profile.instagram}</small></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
