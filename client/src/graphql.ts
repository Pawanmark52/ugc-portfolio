import { gql } from "@apollo/client";

export const SITE_QUERY = gql`
  query Site {
    profile { name handle tagline bio email phone whatsapp instagram location deliveryDays skills }
    works { id title category videoUrl thumbnailUrl gradient }
    plans { name badge videos priceUsd pricePerVideo deliveryDays features }
    services { icon title description }
    faqs { question answer }
  }
`;
