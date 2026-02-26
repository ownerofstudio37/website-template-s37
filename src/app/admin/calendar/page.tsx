import { AdminSectionPage } from "@/components/admin-section-page";

export default function CalendarPage() {
  return (
    <AdminSectionPage
      title="Calendar + Booking"
      description="Coordinate availability, booking links, and reminders."
      cards={[
        {
          title: "Availability rules",
          description: "Define consult slots and blackout windows." 
        },
        {
          title: "Automated reminders",
          description: "Email and SMS reminders reduce no-shows." 
        }
      ]}
    />
  );
}
