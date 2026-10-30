export interface Profile {
  name: string; handle: string; tagline: string; bio: string; email: string; phone: string;
  whatsapp: string; instagram: string; location: string; deliveryDays: number; skills: string[];
}
export interface WorkSample {
  id: string; title: string; category: string; videoUrl: string; thumbnailUrl: string; gradient: string[];
}
export interface Plan {
  name: string; badge: string | null; videos: number; priceUsd: number; originalPriceUsd: number | null; featured: boolean; pricePerVideo: number;
  deliveryDays: number; features: string[];
}
export interface Service { icon: string; title: string; description: string }
export interface Addon { name: string; price: string }
export interface Faq { question: string; answer: string }

export interface SiteData {
  profile: Profile; works: WorkSample[]; plans: Plan[]; services: Service[]; faqs: Faq[]; addons: Addon[];
}
