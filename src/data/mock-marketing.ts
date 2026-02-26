export type EmailCampaign = {
  id: string;
  name: string;
  subject: string;
  status: "draft" | "scheduled" | "sent" | "active";
  recipients: number;
  openRate: number;
  clickRate: number;
  sendDate: string;
};

export type SMSCampaign = {
  id: string;
  name: string;
  message: string;
  status: "draft" | "scheduled" | "sent";
  recipients: number;
  deliveryRate: number;
  replyRate: number;
  sendDate: string;
};

export const mockEmailCampaigns: EmailCampaign[] = [
  {
    id: "1",
    name: "February Newsletter",
    subject: "Your Monthly Platform Updates 🚀",
    status: "sent",
    recipients: 2450,
    openRate: 76,
    clickRate: 30,
    sendDate: "2026-02-15",
  },
  {
    id: "2",
    name: "Product Launch Announcement",
    subject: "Introducing Our New Features",
    status: "scheduled",
    recipients: 3200,
    openRate: 0,
    clickRate: 0,
    sendDate: "2026-03-01",
  },
  {
    id: "3",
    name: "Re-engagement Campaign",
    subject: "We miss you! Here's 20% off",
    status: "active",
    recipients: 892,
    openRate: 50,
    clickRate: 20,
    sendDate: "2026-02-22",
  },
];

export const mockSMSCampaigns: SMSCampaign[] = [
  {
    id: "1",
    name: "Appointment Reminders",
    message: "Reminder: Your consultation is tomorrow at 10 AM. Reply Y to confirm.",
    status: "sent",
    recipients: 45,
    deliveryRate: 98,
    replyRate: 85,
    sendDate: "2026-02-25",
  },
  {
    id: "2",
    name: "Flash Sale Alert",
    message: "🔥 24h Flash Sale! Use code SAVE20 for 20% off. Shop now: [link]",
    status: "scheduled",
    recipients: 1200,
    deliveryRate: 0,
    replyRate: 0,
    sendDate: "2026-02-28",
  },
];

export type ClientPortalUser = {
  id: string;
  name: string;
  email: string;
  company: string;
  role: "owner" | "admin" | "member";
  status: "active" | "inactive";
  createdAt: string;
  lastLogin: string;
  loginCount: number;
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
    status: "active",
    createdAt: "2025-10-15",
    lastLogin: "2026-02-26",
    loginCount: 42,
    activeProjects: 1,
    files: 24,
  },
  {
    id: "2",
    name: "Emily Thompson",
    email: "emily@ecommerce.shop",
    company: "EcoCommerce",
    role: "owner",
    status: "active",
    createdAt: "2025-09-22",
    lastLogin: "2026-02-25",
    loginCount: 38,
    activeProjects: 1,
    files: 18,
  },
  {
    id: "3",
    name: "Lisa Anderson",
    email: "lisa@healthtech.co",
    company: "HealthTech Solutions",
    role: "owner",
    status: "active",
    createdAt: "2025-11-03",
    lastLogin: "2026-02-24",
    loginCount: 51,
    activeProjects: 1,
    files: 31,
  },
];
