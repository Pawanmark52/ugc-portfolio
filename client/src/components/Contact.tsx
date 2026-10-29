import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import type { Profile } from "../types";
import { SUBMIT_INQUIRY } from "../graphql";
import { Reveal } from "./Reveal";

export function Contact({ profile }: { profile: Profile }) {
  const [form, setForm] = useState({ name: "", email: "", product: "", message: "" });
  const [submit, { loading, error, data }] = useMutation(SUBMIT_INQUIRY);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await submit({ variables: { input: { ...form, product: form.product || null } } });
      setForm({ name: "", email: "", product: "", message: "" });
    } catch { /* shown via `error` */ }
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
            <button className="btn full" disabled={loading}>{loading ? "Sending..." : "Send request"}</button>
            {data && <p className="ok full">✓ Got it! I'll reply within 24 hours.</p>}
            {error && <p className="err full">{error.message.includes("fetch") ? "Server is offline. Please use WhatsApp or email below." : error.message}</p>}
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
