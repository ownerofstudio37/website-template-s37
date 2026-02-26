import { AdminSectionPage } from "@/components/admin-section-page";

export default function CRMPage() {
  return (
    <AdminSectionPage
      title="CRM"
      description="Centralize client relationships, notes, and pipeline stages."
      cards={[
        {
          title: "Client timeline",
          description: "Track every conversation, file, and milestone in one view."
        },
        {
          title: "Pipeline",
          description: "Customize stages and forecast revenue with confidence."
        }
      ]}
    />
  );
}
