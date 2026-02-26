import { AdminSectionPage } from "@/components/admin-section-page";

export default function ProjectsPage() {
  return (
    <AdminSectionPage
      title="Project Management"
      description="Stay on top of deliverables, timelines, and client approvals."
      cards={[
        {
          title: "Milestones",
          description: "Map key phases and maintain momentum with clarity."
        },
        {
          title: "Tasks",
          description: "Assign, track, and automate follow-ups." 
        }
      ]}
    />
  );
}
