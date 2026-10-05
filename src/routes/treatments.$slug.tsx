import { createFileRoute } from "@tanstack/react-router";
import { TreatmentDetailPage } from "@/components/content-page";
export const Route = createFileRoute("/treatments/$slug")({
  head: ({ params }) => ({
    meta: [
      {
        title: `${params.slug
          .split("-")
          .map((x) => x[0]?.toUpperCase() + x.slice(1))
          .join(" ")} | Dental by Saba`,
      },
      {
        name: "description",
        content:
          "Explore this Dental by Saba treatment concept and what a personalised visit may involve.",
      },
      { property: "og:title", content: "Treatment | Dental by Saba" },
      { property: "og:description", content: "A calm, personalised dental treatment experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TreatmentRoute,
});
function TreatmentRoute() {
  const { slug } = Route.useParams();
  return <TreatmentDetailPage slug={slug} />;
}
