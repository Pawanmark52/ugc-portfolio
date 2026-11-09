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
  originalPriceUsd: number | null;
  featured: boolean;
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
  phone: "+971 50 978 8191",
  whatsapp: "971509788191",
  instagram: "growia.studio",
  location: "India",
  deliveryDays: 1,
  skills: ["UGC ads", "Hook writing", "Fast editing", "Reels / TikTok / Shorts", "Meta Ads ready"],
};

export const works: WorkSample[] = [
  {
    id: "w1",
    title: "UGC Ad Sample 1",
    category: "UGC video ad",
    driveFileId: "1ERWQkksP0FuHK_8DM7l5KVpPHHItKV3h",
    gradient: ["#71717a", "#f4f4f5"],
  },
  {
    id: "w2",
    title: "UGC Ad Sample 2",
    category: "UGC video ad",
    driveFileId: "17okHyacXpORmiVyTX_KnC3CSQvv7tLs0",
    gradient: ["#52525b", "#e4e4e7"],
  },
  {
    id: "w3",
    title: "UGC Ad Sample 3",
    category: "UGC video ad",
    driveFileId: "1mNDpSqeWmd378KFbNTwycu5_5RCpzmli",
    gradient: ["#3f3f46", "#d4d4d8"],
  },
  {
    id: "w4",
    title: "UGC Ad Sample 4",
    category: "UGC video ad",
    driveFileId: "1dxq4bikaSW0zbpuVKJ46Fleaa5sbwaV4",
    gradient: ["#475569", "#cbd5e1"],
  },
  {
    id: "w5",
    title: "UGC Ad Sample 5",
    category: "UGC video ad",
    driveFileId: "1_kwOgNmTk6y2E4sBnniVphYvZKuE5FCA",
    gradient: ["#334155", "#94a3b8"],
  },
  {
    id: "w6",
    title: "UGC Ad Sample 6",
    category: "UGC video ad",
    driveFileId: "1XZcPRwH3g_gVRC4kAF5Dor0OwWIxnjo-",
    gradient: ["#1e40af", "#60a5fa"],
  },
  {
    id: "w7",
    title: "UGC Ad Sample 7",
    category: "UGC video ad",
    driveFileId: "1j1xpsyWcl0oly5RFTqaQI4tKX_agII3r",
    gradient: ["#2f6bff", "#93c5fd"],
  },
  {
    id: "w8",
    title: "UGC Ad Sample 8",
    category: "UGC video ad",
    driveFileId: "1tHwm79Tc7QPCrd1aOk9Dqk51rAgO4Drd",
    gradient: ["#1d4ed8", "#38bdf8"],
  },
];

export const plans: Plan[] = [
  {
    name: "Single Video",
    badge: null,
    videos: 1,
    priceUsd: 16,
    originalPriceUsd: null,
    featured: false,
    deliveryDays: 1,
    features: [
      "1 UGC video (15-45 sec)",
      "Custom hook and script",
      "Captions, music and editing included",
      "1 revision",
      "Delivery in 1 day",
    ],
  },
  {
    name: "3-Video Pack",
    badge: null,
    videos: 3,
    priceUsd: 44,
    originalPriceUsd: 48,
    featured: false,
    deliveryDays: 2,
    features: [
      "3 UGC videos (15-45 sec each)",
      "Custom hook and script for every video",
      "Captions, music and editing included",
      "2 revisions for the pack",
      "Delivery in 2 days",
    ],
  },
  {
    name: "5-Video Pack",
    badge: "MOST POPULAR",
    videos: 5,
    priceUsd: 69,
    originalPriceUsd: 80,
    featured: true,
    deliveryDays: 3,
    features: [
      "5 UGC videos (15-45 sec each)",
      "Custom hook and script for every video",
      "Captions, music and editing included",
      "3 revisions for the pack",
      "Bonus: free 2nd hook for 1 video",
      "Delivery in 3 days",
    ],
  },
  {
    name: "10-Video Pack",
    badge: "BEST VALUE",
    videos: 10,
    priceUsd: 119,
    originalPriceUsd: 160,
    featured: false,
    deliveryDays: 4,
    features: [
      "10 UGC videos (15-45 sec each)",
      "Custom hook and script for every video",
      "Captions, music and editing included",
      "7 revisions for the pack",
      "Bonus: free extra hook variation of your best video",
      "Delivery in 4 days",
    ],
  },
];


export const addons = [
  { name: "Priority delivery (about half the time)", priceUsd: 10, perVideo: false },
  { name: "Extra revision", priceUsd: 4, perVideo: false },
  { name: "Extra hook variation", priceUsd: 5, perVideo: false },
  { name: "Raw footage files", priceUsd: 5, perVideo: false },
];


export const services: Service[] = [
  { icon: "🎬", title: "Product demo UGC", description: "Natural, handheld-style videos showing your product in real use." },
  { icon: "🗣️", title: "Testimonial style", description: "Talking-to-camera reviews that build trust fast." },
  { icon: "🪝", title: "Hook-first scripts", description: "The first 3 seconds decide everything. Every script starts with a tested hook." },
  { icon: "✂️", title: "Pro editing", description: "Cuts, captions, B-roll, sound and color tuned for mobile." },
  { icon: "📱", title: "Platform-ready", description: "TikTok, Reels, Shorts and Meta Ads formats in HD." },
  { icon: "⚡", title: "Fast delivery", description: "From 1 day for a single video, up to 4 days for a 10-pack, so you can launch campaigns this week." },
];

export const faqs: Faq[] = [
  { question: "Do I need to ship the product to you?", answer: "For digital products, apps and services no shipping is needed. For physical products we'll discuss options before ordering." },
  { question: "What do you need from me?", answer: "Product link or details, brand tone, target audience and any must-say points. We handle the rest." },
  { question: "Can I run these as paid ads?", answer: "Yes. Videos are delivered ready for organic posting and for Meta and TikTok ad campaigns." },
  { question: "How fast is delivery?", answer: "Single video: 1 day. 3-pack: 2 days. 5-pack: 3 days. 10-pack: 4 days. The days are counted from when the script is approved and we have your product details." },
  { question: "What if I'm not happy?", answer: "Every order includes revisions: 1 for a single video, 2 for a 3-pack, 3 for a 5-pack and 7 for a 10-pack. Revisions are shared across the whole pack. Tell us what to change and we'll fix it. Need more? Extra revisions are available as an add-on." },
];
