import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/content-page";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Saba | Dental by Saba" },
      {
        name: "description",
        content: "Discover the gentle, personal care philosophy behind Dental by Saba.",
      },
      { property: "og:title", content: "About Dr. Saba | Dental by Saba" },
      {
        property: "og:description",
        content: "A calm and personal approach to dental care in Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
