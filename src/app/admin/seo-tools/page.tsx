import { AdminSectionPage } from "@/components/admin-section-page";

export default function SeoToolsPage() {
  return (
    <AdminSectionPage
      title="AI SEO Tools"
      description="Research, optimize, and monitor organic performance." 
      cards={[
        {
          title: "Keyword strategy",
          description: "Cluster topics and map them to landing pages." 
        },
        {
          title: "Metadata checks",
          description: "Validate titles, descriptions, and structured data." 
        }
      ]}
    />
  );
}
