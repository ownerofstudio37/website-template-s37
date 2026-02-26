export type EmailCampaign = {
  id: string;
  name: string;
  subject: string;
  status: "draft" | "scheduled" | "sent" | "active";
  recipients: number;
  opened: number;
  clicked: number;
  sentDate?: string;
  scheduledDate?: string;
};

export type SMSCampaign = {
  id: string;
  name: string;
  message: string;
  status: "draft" | "scheduled" | "sent";
  recipients: number;
  delivered: number;
  replied: number;
  sentDate?: string;
};

export const mockEmailCampaigns: EmailCampaign[] = [
  {
    id: "1",
    name: "February Newsletter",
    subject: "Your Monthly Platform Updates 🚀",
    status: "sent",
    recipients: 2450,
    opened: 1862,
    clicked: 734,
    sentDate: "2026-02-15",
  },
  {
    id: "2",
    name: "Product Launch Announcement",
    subject: "Introducing Our New Features",
    status: "scheduled",
    recipients: 3200,
    opened: 0,
    clicked: 0,
    scheduledDate: "2026-03-01",
  },
  {
    id: "3",
    name: "Re-engagement Campaign",
    subject: "We miss you! Here's 20% off",
    status: "active",
    recipients: 892,
    opened: 445,
    clicked: 178,
    sentDate: "2026-02-22",
  },
];

export const mockSMSCampaigns: SMSCampaign[] = [
  {
    id: "1",
    name: "Appointment Reminders",
    message: "Reminder: Your consultation is tomorrow at 10 AM. Reply Y to confirm.",
    status: "sent",
    recipients: 45,
    delivered: 44,
    replied: 38,
    sentDate: "2026-02-25",
  },
  {
    id: "2",
    name: "Flash Sale Alert",
    message: "🔥 24h Flash Sale! Use code SAVE20 for 20% off. Shop now: [link]",
    status: "scheduled",
    recipients: 1200,
    delivered: 0,
    replied: 0,
  },
];

export type ClientPortalUser = {
  id: string;
  name: string;
  email: string;
  company: string;
  role: "owner" | "admin" | "member";
  lastLogin: string;
  activeProjects: number;
  files: number;
};

export const mockPortalUsers: ClientPortalUser[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah@techstartup.io",
    company: "TechStartup Inc",
    role: "owner",
    lastLogin: "2026-02-26",
    activeProjects: 1,
    files: 24,
  },
  {
    id: "2",
    name: "Emily Thompson",
    email: "emily@ecommerce.shop",
    company: "EcoCommerce",
    role: "owner",
    lastLogin: "2026-02-25",
    activeProjects: 1,
    files: 18,
  },
  {
    id: "3",
    name: "Lisa Anderson",
    email: "lisa@healthtech.co",
    company: "HealthTech Solutions",
    role: "owner",
    lastLogin: "2026-02-24",
    activeProjects: 1,
    files: 31,
  },
];
