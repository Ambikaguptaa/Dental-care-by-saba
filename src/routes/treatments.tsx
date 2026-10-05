import { createFileRoute } from "@tanstack/react-router";
import { TreatmentsPage } from "@/components/content-page";
export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Dental Treatments | Dental by Saba" },
      {
        name: "description",
        content: "Explore personalised dental and smile-care treatment concepts at Dental by Saba.",
      },
      { property: "og:title", content: "Dental Treatments | Dental by Saba" },
      { property: "og:description", content: "Thoughtful dental care designed around your smile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TreatmentsPage,
});
