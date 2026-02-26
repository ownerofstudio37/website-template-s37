import { AdminSectionPage } from "@/components/admin-section-page";

export default function ChatbotTrainerPage() {
  return (
    <AdminSectionPage
      title="Chatbot Trainer"
      description="Upload training data and refine responses." 
      cards={[
        {
          title: "Knowledge base",
          description: "Sync FAQs, policies, and service details." 
        },
        {
          title: "Scenario testing",
          description: "Simulate conversations before deploying changes." 
        }
      ]}
    />
  );
}
