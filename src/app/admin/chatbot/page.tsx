import { AdminSectionPage } from "@/components/admin-section-page";

export default function ChatbotPage() {
  return (
    <AdminSectionPage
      title="AI Chatbot"
      description="Oversee concierge performance and guardrails." 
      cards={[
        {
          title: "Conversation analytics",
          description: "Monitor intents, drop-offs, and booking success." 
        },
        {
          title: "Prompt library",
          description: "Manage approved responses and brand tone." 
        }
      ]}
    />
  );
}
