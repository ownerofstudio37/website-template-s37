export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  source: "website" | "referral" | "social" | "email" | "event";
  status: "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "won" | "lost";
  score: number;
  value: number;
  assignedTo: string;
  createdDate: string;
  lastActivity: string;
  notes: string;
  aiInsights?: string;
};

export const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Alexandra Martinez",
    email: "alex@newventure.co",
    company: "New Venture Co",
    phone: "+1 (555) 111-2222",
    source: "website",
    status: "qualified",
    score: 85,
    value: 42000,
    assignedTo: "You",
    createdDate: "2026-02-18",
    lastActivity: "2026-02-25",
    notes: "Filled out contact form. Very engaged. Budget approved.",
    aiInsights: "High conversion probability (85%). Strong engagement signals: multiple site visits, downloaded resources, executive contact.",
  },
  {
    id: "2",
    name: "Robert Taylor",
    email: "robert@startup123.io",
    company: "Startup 123",
    phone: "+1 (555) 222-3333",
    source: "referral",
    status: "proposal",
    score: 92,
    value: 55000,
    assignedTo: "You",
    createdDate: "2026-02-10",
    lastActivity: "2026-02-24",
    notes: "Referred by Sarah Chen. Ready to move forward.",
    aiInsights: "Extremely high conversion probability (92%). Warm referral, decision-maker engaged, timeline defined.",
  },
  {
    id: "3",
    name: "Jennifer Wu",
    email: "jennifer@growthco.com",
    company: "Growth Co",
    phone: "+1 (555) 333-4444",
    source: "social",
    status: "contacted",
    score: 68,
    value: 35000,
    assignedTo: "You",
    createdDate: "2026-02-20",
    lastActivity: "2026-02-22",
    notes: "Reached out via LinkedIn. Interested in discovery call.",
    aiInsights: "Moderate conversion probability (68%). Early stage, needs nurturing. Good company fit.",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael@enterprise.biz",
    company: "Enterprise Solutions",
    phone: "+1 (555) 444-5555",
    source: "email",
    status: "negotiation",
    score: 88,
    value: 78000,
    assignedTo: "You",
    createdDate: "2026-01-28",
    lastActivity: "2026-02-26",
    notes: "Negotiating contract terms. Close to signature.",
    aiInsights: "High conversion probability (88%). In final stages. Price sensitivity detected, may need slight discount.",
  },
  {
    id: "5",
    name: "Patricia Garcia",
    email: "patricia@smallbiz.co",
    company: "Small Biz Inc",
    phone: "+1 (555) 555-6666",
    source: "event",
    status: "new",
    score: 45,
    value: 18000,
    assignedTo: "You",
    createdDate: "2026-02-24",
    lastActivity: "2026-02-24",
    notes: "Met at conference. Exchanged cards.",
    aiInsights: "Low-moderate conversion probability (45%). New contact, needs follow-up. Budget unclear.",
  },
  {
    id: "6",
    name: "Christopher Lee",
    email: "chris@techcorp.io",
    company: "TechCorp International",
    phone: "+1 (555) 666-7777",
    source: "website",
    status: "lost",
    score: 72,
    value: 48000,
    assignedTo: "You",
    createdDate: "2026-01-15",
    lastActivity: "2026-02-10",
    notes: "Chose competitor. Price was main factor.",
    aiInsights: "Lost opportunity. Exit interview suggested pricing model adjustment for future similar leads.",
  },
];
