import { AdminSectionPage } from "@/components/admin-section-page";

export default function EmailPage() {
  return (
    <AdminSectionPage
      title="Email Built In"
      description="Design high-touch campaigns and automated follow-ups." 
      cards={[
        {
          title: "Sequences",
          description: "Create onboarding and nurture journeys." 
        },
        {
          title: "Templates",
          description: "Keep branding consistent with reusable templates." 
        }
      ]}
    />
  );
}
