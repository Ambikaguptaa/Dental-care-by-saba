import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/content-page";
export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews | Dental by Saba" },
      {
        name: "description",
        content:
          "Verified patient stories from Dental by Saba will be shared here with permission.",
      },
      { property: "og:title", content: "Patient Reviews | Dental by Saba" },
      { property: "og:description", content: "Trust, shared in our patients’ own words." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});
