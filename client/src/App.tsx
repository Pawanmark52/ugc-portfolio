import { useQuery } from "@apollo/client";
import { SITE_QUERY } from "./graphql";
import { fallback } from "./fallback";
import type { SiteData } from "./types";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";

export default function App() {
  const { data } = useQuery<SiteData>(SITE_QUERY);
  const site = data ?? fallback;
  const { profile } = site;
  const plan = site.plans[0];
  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Pawan, I want the 5 UGC video pack")}`;

  return (
    <>
      <Navbar />
      <Hero profile={profile} plan={plan} />
      <Marquee />
      <Work works={site.works} />
      <About profile={profile} />
      <Services services={site.services} />
      <Process days={profile.deliveryDays} />
      <Pricing plans={site.plans} />
      <Reviews />
      <Faq faqs={site.faqs} />
      <Contact profile={profile} />
      <footer>© {new Date().getFullYear()} {profile.name}. All rights reserved.</footer>
      <div className="sticky"><a className="btn" href={wa} target="_blank" rel="noopener noreferrer">Order {plan?.videos ?? 5} videos · ${plan?.priceUsd ?? 65}</a></div>
    </>
  );
}
