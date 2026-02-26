import { AdminSectionPage } from "@/components/admin-section-page";

export default function AdminBlogPage() {
  return (
    <AdminSectionPage
      title="Blog + AI Writer"
      description="Plan, draft, and optimize long-form content." 
      cards={[
        {
          title: "Content calendar",
          description: "Schedule editorial themes and publishing cadences." 
        },
        {
          title: "AI writer",
          description: "Generate outlines and drafts aligned to SEO strategy." 
        }
      ]}
    />
  );
}
