import { AdminSectionPage } from "@/components/admin-section-page";

export default function GalleryPage() {
  return (
    <AdminSectionPage
      title="Gallery Manager"
      description="Showcase case studies, visuals, and testimonials." 
      cards={[
        {
          title: "Asset library",
          description: "Organize imagery, video, and brand assets." 
        },
        {
          title: "Highlights",
          description: "Pin featured work to your marketing pages." 
        }
      ]}
    />
  );
}
