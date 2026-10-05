import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/content-page";
export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Smile Gallery | Dental by Saba" },
      {
        name: "description",
        content: "A reserved space for authentic, clinic-approved smile stories.",
      },
      { property: "og:title", content: "Smile Gallery | Dental by Saba" },
      {
        property: "og:description",
        content: "Real smiles and real patient stories, shared with care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});
