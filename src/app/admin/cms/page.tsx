import { AdminSectionPage } from "@/components/admin-section-page";

export default function CMSPage() {
  return (
    <AdminSectionPage
      title="CMS + AI Page Builder"
      description="Design pages quickly with brand-safe layouts and AI drafts." 
      cards={[
        {
          title: "Visual builder",
          description: "Drag, drop, and publish polished sections." 
        },
        {
          title: "AI drafts",
          description: "Generate on-brand copy and layout suggestions." 
        }
      ]}
    />
  );
}
