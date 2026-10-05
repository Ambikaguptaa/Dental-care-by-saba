import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/content-page";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments | Dental by Saba" },
      {
        name: "description",
        content:
          "Plan a visit to Dental by Saba in Mumbai. Verified contact details will be added before launch.",
      },
      { property: "og:title", content: "Contact Dental by Saba" },
      { property: "og:description", content: "Plan your visit and request an appointment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
