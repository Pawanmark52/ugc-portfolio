import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SITE_QUERY } from "./graphql";
import { fallback } from "./fallback";
import type { SiteData } from "./types";
import { initLenis, scrollToHash } from "./lib/lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Results } from "./components/Results";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { data } = useQuery<SiteData>(SITE_QUERY);
  const site = data ?? fallback;
  const { profile } = site;
  const plan = site.plans[0];
  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Growia, I want the 5 UGC video pack")}`;

  useEffect(() => {
    initLenis();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      scrollToHash(a.getAttribute("href")!);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} plan={plan} />
        <Marquee />
        <Work works={site.works} />
        <Services services={site.services} />
        <Process days={profile.deliveryDays} />
        <Results />
        <Pricing plans={site.plans} />
        <Reviews />
        <Faq faqs={site.faqs} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
      <div className="sticky"><a className="btn" href={wa} target="_blank" rel="noopener noreferrer">Order {plan?.videos ?? 5} videos · ${plan?.priceUsd ?? 65}</a></div>
    </>
  );
}
