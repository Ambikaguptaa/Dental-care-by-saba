import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dental by Saba | Premium Dental Care" },
      {
        name: "description",
        content:
          "Dental by Saba offers personalised dental and smile care in Mumbai, with a gentle, modern approach focused on patient comfort and confidence.",
      },
      { property: "og:title", content: "Dental by Saba | Premium Dental Care" },
      {
        property: "og:description",
        content: "A softer, more personal approach to modern dental and smile care in Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dental by Saba | Premium Dental Care" },
      {
        name: "twitter:description",
        content: "A softer, more personal approach to modern dental and smile care in Mumbai.",
      },
    ],
  }),
  component: HomePage,
});
