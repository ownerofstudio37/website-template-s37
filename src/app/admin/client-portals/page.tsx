import { AdminSectionPage } from "@/components/admin-section-page";

export default function ClientPortalsPage() {
  return (
    <AdminSectionPage
      title="Client Portals"
      description="Deliver branded workspaces for every client." 
      cards={[
        {
          title: "Secure access",
          description: "Share files, timelines, and updates privately." 
        },
        {
          title: "Collaboration",
          description: "Message, approve, and sign off in one place." 
        }
      ]}
    />
  );
}
