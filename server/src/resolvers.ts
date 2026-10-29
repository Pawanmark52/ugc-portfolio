import { GraphQLError } from "graphql";
import { faqs, plans, profile, services, works, type Plan, type WorkSample } from "./data.js";
import { saveInquiry, type InquiryInput } from "./inquiries.js";

const driveView = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const driveThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const resolvers = {
  Query: {
    profile: () => profile,
    works: () => works,
    plans: () => plans,
    services: () => services,
    faqs: () => faqs,
  },
  WorkSample: {
    videoUrl: (w: WorkSample) => driveView(w.driveFileId),
    thumbnailUrl: (w: WorkSample) => driveThumb(w.driveFileId),
  },
  Plan: {
    pricePerVideo: (p: Plan) => Math.round((p.priceUsd / p.videos) * 100) / 100,
  },
  Mutation: {
    submitInquiry: async (_: unknown, { input }: { input: InquiryInput }) => {
      const name = input.name.trim();
      const message = input.message.trim();
      if (!name || name.length > 100) throw new GraphQLError("Please enter your name.", { extensions: { code: "BAD_USER_INPUT" } });
      if (!emailRe.test(input.email.trim())) throw new GraphQLError("Please enter a valid email.", { extensions: { code: "BAD_USER_INPUT" } });
      if (message.length < 5 || message.length > 2000) throw new GraphQLError("Message must be 5-2000 characters.", { extensions: { code: "BAD_USER_INPUT" } });
      return saveInquiry({ name, email: input.email.trim(), product: input.product?.trim() || null, message });
    },
  },
};
