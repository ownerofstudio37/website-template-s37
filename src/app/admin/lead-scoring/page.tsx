import { AdminSectionPage } from "@/components/admin-section-page";

export default function LeadScoringPage() {
  return (
    <AdminSectionPage
      title="AI Lead Scoring"
      description="Rank opportunities using engagement and intent signals."
      cards={[
        {
          title: "Intent model",
          description: "Score leads based on content, responses, and timing."
        },
        {
          title: "Revenue forecast",
          description: "See projected value and close likelihood in real time."
        }
      ]}
    />
  );
}
