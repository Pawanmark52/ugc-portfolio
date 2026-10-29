export interface Profile {
  name: string;
  handle: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  location: string;
  deliveryDays: number;
  skills: string[];
}

export interface WorkSample {
  id: string;
  title: string;
  category: string;
  driveFileId: string;
  gradient: [string, string];
}

export interface Plan {
  name: string;
  badge: string | null;
  videos: number;
  priceUsd: number;
  deliveryDays: number;
  features: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const profile: Profile = {
  name: "Growia",
  handle: "growia",
  tagline: "UGC ads that make people stop scrolling.",
  bio: "We're a UGC studio that knows what makes short-form video convert: a sharp hook, natural delivery and clean, fast editing. Brands get real-feeling content without the agency price tag.",
  email: "growia.ae@gmail.com",
  phone: "+91 88246 24210",
  whatsapp: "918824624210",
  instagram: "heyitspwn",
  location: "India",
  deliveryDays: 2,
  skills: ["UGC ads", "Hook writing", "Fast editing", "Reels / TikTok / Shorts", "Meta Ads ready"],
};

export const works: WorkSample[] = [
  {
    id: "w1",
    title: "UGC Ad Sample",
    category: "UGC video ad",
    driveFileId: "1tHwm79Tc7QPCrd1aOk9Dqk51rAgO4Drd",
    gradient: ["#1d4ed8", "#38bdf8"],
  },
  {
    id: "w2",
    title: "UGC Ad Sample 2",
    category: "UGC video ad",
    driveFileId: "1j1xpsyWcl0oly5RFTqaQI4tKX_agII3r",
    gradient: ["#2f6bff", "#93c5fd"],
  },
];

export const plans: Plan[] = [
  {
    name: "UGC Starter Pack",
    badge: "MOST POPULAR",
    videos: 5,
    priceUsd: 65,
    deliveryDays: 2,
    features: [
      "5 UGC videos (15-45 sec each)",
      "Custom hook and script for every video",
      "Captions, music and editing included",
      "1 revision per video",
      "Delivery in 2 days",
    ],
  },
];

export const services: Service[] = [
  { icon: "🎬", title: "Product demo UGC", description: "Natural, handheld-style videos showing your product in real use." },
  { icon: "🗣️", title: "Testimonial style", description: "Talking-to-camera reviews that build trust fast." },
  { icon: "🪝", title: "Hook-first scripts", description: "The first 3 seconds decide everything. Every script starts with a tested hook." },
  { icon: "✂️", title: "Pro editing", description: "Cuts, captions, B-roll, sound and color tuned for mobile." },
  { icon: "📱", title: "Platform-ready", description: "TikTok, Reels, Shorts and Meta Ads formats in HD." },
  { icon: "⚡", title: "2-day delivery", description: "Fast turnaround so you can launch campaigns this week." },
];

export const faqs: Faq[] = [
  { question: "Do I need to ship the product to you?", answer: "For digital products, apps and services no shipping is needed. For physical products we'll discuss options before ordering." },
  { question: "What do you need from me?", answer: "Product link or details, brand tone, target audience and any must-say points. We handle the rest." },
  { question: "Can I run these as paid ads?", answer: "Yes. Videos are delivered ready for organic posting and for Meta and TikTok ad campaigns." },
  { question: "Is delivery really 2 days?", answer: "Yes. Once the script is approved and we have your product details, your 5 videos are delivered within 2 days." },
  { question: "What if I'm not happy?", answer: "Each video includes a revision. Tell us what to change and we'll fix it." },
];
