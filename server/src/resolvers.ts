import { addons, faqs, plans, profile, services, works, type Plan, type WorkSample } from "./data.js";

const driveView = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
const driveThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

export const resolvers = {
  Query: {
    profile: () => profile,
    works: () => works,
    plans: () => plans,
    services: () => services,
    faqs: () => faqs,
    addons: () => addons,
  },
  WorkSample: {
    videoUrl: (w: WorkSample) => driveView(w.driveFileId),
    previewUrl: (w: WorkSample) => drivePreview(w.driveFileId),
    thumbnailUrl: (w: WorkSample) => driveThumb(w.driveFileId),
  },
  Plan: {
    pricePerVideo: (p: Plan) => Math.round((p.priceUsd / p.videos) * 100) / 100,
  }
};
