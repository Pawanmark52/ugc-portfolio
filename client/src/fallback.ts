import type { SiteData } from "./types";

// Used when the GraphQL API is unreachable (e.g. static hosting of the client only),
// so the site always renders. Keep in sync with server/src/data.ts.
const id = "1tHwm79Tc7QPCrd1aOk9Dqk51rAgO4Drd";
const id2 = "1j1xpsyWcl0oly5RFTqaQI4tKX_agII3r";
const id3 = "1XZcPRwH3g_gVRC4kAF5Dor0OwWIxnjo-";
const id4 = "1_kwOgNmTk6y2E4sBnniVphYvZKuE5FCA";
const id5 = "1dxq4bikaSW0zbpuVKJ46Fleaa5sbwaV4";
const id6 = "1mNDpSqeWmd378KFbNTwycu5_5RCpzmli";
const id8 = "1ERWQkksP0FuHK_8DM7l5KVpPHHItKV3h";
const id7 = "17okHyacXpORmiVyTX_KnC3CSQvv7tLs0";

export const fallback: SiteData = {
  profile: {
    name: "Growia", handle: "growia", tagline: "UGC ads that make people stop scrolling.",
    bio: "We're a UGC studio that knows what makes short-form video convert: a sharp hook, natural delivery and clean, fast editing. Brands get real-feeling content without the agency price tag.",
    email: "growia.ae@gmail.com", phone: "+91 88246 24210", whatsapp: "918824624210",
    instagram: "growia.studio", location: "India", deliveryDays: 2,
    skills: ["UGC ads", "Hook writing", "Fast editing", "Reels / TikTok / Shorts", "Meta Ads ready"],
  },
  works: [{
    id: "w1", title: "UGC Ad Sample 1", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id8}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id8}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id8}&sz=w800`,
    gradient: ["#71717a", "#f4f4f5"],
  }, {
    id: "w2", title: "UGC Ad Sample 2", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id7}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id7}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id7}&sz=w800`,
    gradient: ["#52525b", "#e4e4e7"],
  }, {
    id: "w3", title: "UGC Ad Sample 3", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id6}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id6}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id6}&sz=w800`,
    gradient: ["#3f3f46", "#d4d4d8"],
  }, {
    id: "w4", title: "UGC Ad Sample 4", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id5}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id5}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id5}&sz=w800`,
    gradient: ["#475569", "#cbd5e1"],
  }, {
    id: "w5", title: "UGC Ad Sample 5", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id4}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id4}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id4}&sz=w800`,
    gradient: ["#334155", "#94a3b8"],
  }, {
    id: "w6", title: "UGC Ad Sample 6", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id3}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id3}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id3}&sz=w800`,
    gradient: ["#1e40af", "#60a5fa"],
  }, {
    id: "w7", title: "UGC Ad Sample 7", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id2}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id2}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id2}&sz=w800`,
    gradient: ["#2f6bff", "#93c5fd"],
  }, {
    id: "w8", title: "UGC Ad Sample 8", category: "UGC video ad",
    videoUrl: `https://drive.google.com/file/d/${id}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${id}/preview`,
    thumbnailUrl: `https://drive.google.com/thumbnail?id=${id}&sz=w800`,
    gradient: ["#1d4ed8", "#38bdf8"],
  }],
  plans: [
    {
      name: "Single Video", badge: null, videos: 1, priceUsd: 19, originalPriceUsd: null, featured: false, pricePerVideo: 19, deliveryDays: 2,
      features: ["1 UGC video (15-45 sec)", "Custom hook and script", "Captions, music and editing included", "1 revision", "Delivery in 2 days"],
    },
    {
      name: "3-Video Pack", badge: null, videos: 3, priceUsd: 49, originalPriceUsd: 57, featured: false, pricePerVideo: 16.33, deliveryDays: 2,
      features: ["3 UGC videos (15-45 sec each)", "Custom hook and script for every video", "Captions, music and editing included", "1 revision per video", "Delivery in 2 days"],
    },
    {
      name: "5-Video Pack", badge: "MOST POPULAR", videos: 5, priceUsd: 79, originalPriceUsd: 95, featured: true, pricePerVideo: 15.8, deliveryDays: 2,
      features: ["5 UGC videos (15-45 sec each)", "Custom hook and script for every video", "Captions, music and editing included", "1 revision per video", "Bonus: free 2nd hook for 1 video", "Delivery in 2 days"],
    },
    {
      name: "10-Video Pack", badge: "BEST VALUE", videos: 10, priceUsd: 139, originalPriceUsd: 190, featured: false, pricePerVideo: 13.9, deliveryDays: 2,
      features: ["10 UGC videos (15-45 sec each)", "Custom hook and script for every video", "Captions, music and editing included", "1 revision per video", "Bonus: free extra hook variation of your best video", "First videos delivered in 2 days"],
    },
  ],
  services: [
    { icon: "🎬", title: "Product demo UGC", description: "Natural, handheld-style videos showing your product in real use." },
    { icon: "🗣️", title: "Testimonial style", description: "Talking-to-camera reviews that build trust fast." },
    { icon: "🪝", title: "Hook-first scripts", description: "The first 3 seconds decide everything. Every script starts with a tested hook." },
    { icon: "✂️", title: "Pro editing", description: "Cuts, captions, B-roll, sound and color tuned for mobile." },
    { icon: "📱", title: "Platform-ready", description: "TikTok, Reels, Shorts and Meta Ads formats in HD." },
    { icon: "⚡", title: "2-day delivery", description: "Fast turnaround so you can launch campaigns this week." },
  ],
  addons: [
    { name: "Rush delivery (24 hours)", priceUsd: 10, perVideo: false },
    { name: "Extra revision", priceUsd: 4, perVideo: true },
    { name: "Extra hook variation", priceUsd: 5, perVideo: false },
    { name: "Raw footage files", priceUsd: 5, perVideo: false },
  ],
  faqs: [
    { question: "Do I need to ship the product to you?", answer: "For digital products, apps and services no shipping is needed. For physical products we'll discuss options before ordering." },
    { question: "What do you need from me?", answer: "Product link or details, brand tone, target audience and any must-say points. We handle the rest." },
    { question: "Can I run these as paid ads?", answer: "Yes. Videos are delivered ready for organic posting and for Meta and TikTok ad campaigns." },
    { question: "Is delivery really 2 days?", answer: "Yes. Once the script is approved and we have your product details, your 5 videos are delivered within 2 days." },
    { question: "What if I'm not happy?", answer: "Each video includes a revision. Tell us what to change and we'll fix it." },
  ],
};
