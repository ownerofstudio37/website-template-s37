import { AdminSectionPage } from "@/components/admin-section-page";

export default function PerformancePage() {
  return (
    <AdminSectionPage
      title="Performance Auditing"
      description="Monitor site health, SEO, and conversion metrics." 
      cards={[
        {
          title: "Speed diagnostics",
          description: "Identify bottlenecks and optimization wins." 
        },
        {
          title: "Conversion lift",
          description: "Track goals, funnels, and conversion rates." 
        }
      ]}
    />
  );
}
