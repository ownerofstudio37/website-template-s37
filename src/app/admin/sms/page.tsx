import { AdminSectionPage } from "@/components/admin-section-page";

export default function SmsPage() {
  return (
    <AdminSectionPage
      title="SMS Tools"
      description="Send high-touch reminders and updates." 
      cards={[
        {
          title: "Templates",
          description: "Create reusable SMS templates." 
        },
        {
          title: "Compliance",
          description: "Manage opt-in settings and messaging rules." 
        }
      ]}
    />
  );
}
