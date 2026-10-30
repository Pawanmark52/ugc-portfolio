import { gql } from "@apollo/client";

export const SITE_QUERY = gql`
  query Site {
    profile { name handle tagline bio email phone whatsapp instagram location deliveryDays skills }
    works { id title category videoUrl previewUrl thumbnailUrl gradient }
    plans { name badge videos priceUsd originalPriceUsd featured pricePerVideo deliveryDays features }
    services { icon title description }
    faqs { question answer }
    addons { name price }
  }
`;
