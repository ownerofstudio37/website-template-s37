export type Appointment = {
  id: string;
  title: string;
  client: string;
  type: "consultation" | "meeting" | "call" | "demo" | "review";
  startTime: string;
  endTime: string;
  status: "scheduled" | "completed" | "cancelled" | "rescheduled";
  location: string;
  notes: string;
  attendees: string[];
};

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    title: "Discovery Call - New Venture Co",
    client: "Alexandra Martinez",
    type: "call",
    startTime: "2026-02-27T10:00:00",
    endTime: "2026-02-27T11:00:00",
    status: "scheduled",
    location: "Zoom",
    notes: "Discuss project scope and timeline for Q2 launch",
    attendees: ["You", "Alexandra Martinez"],
  },
  {
    id: "2",
    title: "Contract Review - Startup 123",
    client: "Robert Taylor",
    type: "meeting",
    startTime: "2026-02-28T14:00:00",
    endTime: "2026-02-28T15:30:00",
    status: "scheduled",
    location: "Office",
    notes: "Final contract terms and signature",
    attendees: ["You", "Robert Taylor", "Legal Team"],
  },
  {
    id: "3",
    title: "Project Kickoff - EcoCommerce",
    client: "Emily Thompson",
    type: "meeting",
    startTime: "2026-02-26T09:00:00",
    endTime: "2026-02-26T10:30:00",
    status: "completed",
    location: "Client Office",
    notes: "Successful kickoff. Team aligned on goals.",
    attendees: ["You", "Emily Thompson", "Designer A", "Developer B"],
  },
  {
    id: "4",
    title: "Demo - Growth Co",
    client: "Jennifer Wu",
    type: "demo",
    startTime: "2026-03-01T15:00:00",
    endTime: "2026-03-01T16:00:00",
    status: "scheduled",
    location: "Zoom",
    notes: "Show platform capabilities and case studies",
    attendees: ["You", "Jennifer Wu"],
  },
  {
    id: "5",
    title: "Monthly Review - HealthTech",
    client: "Lisa Anderson",
    type: "review",
    startTime: "2026-02-25T11:00:00",
    endTime: "2026-02-25T12:00:00",
    status: "completed",
    location: "Zoom",
    notes: "Reviewed progress. Client very satisfied with deliverables.",
    attendees: ["You", "Lisa Anderson", "Developer B"],
  },
  {
    id: "6",
    title: "Consultation - Enterprise Solutions",
    client: "Michael Brown",
    type: "consultation",
    startTime: "2026-02-29T13:00:00",
    endTime: "2026-02-29T14:00:00",
    status: "scheduled",
    location: "Zoom",
    notes: "Address final questions before contract signing",
    attendees: ["You", "Michael Brown"],
  },
];
