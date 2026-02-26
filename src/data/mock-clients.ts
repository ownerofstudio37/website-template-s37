export type Client = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: "active" | "inactive" | "prospect";
  value: number;
  industry: string;
  location: string;
  joinedDate: string;
  lastContact: string;
  notes: string;
  avatar?: string;
};

export const mockClients: Client[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah@techstartup.io",
    company: "TechStartup Inc",
    phone: "+1 (555) 123-4567",
    status: "active",
    value: 45000,
    industry: "Technology",
    location: "San Francisco, CA",
    joinedDate: "2025-09-15",
    lastContact: "2026-02-20",
    notes: "Looking to scale their platform. Interested in ongoing retainer.",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus@designstudio.com",
    company: "Design Studio Co",
    phone: "+1 (555) 234-5678",
    status: "active",
    value: 32000,
    industry: "Creative",
    location: "Austin, TX",
    joinedDate: "2025-11-02",
    lastContact: "2026-02-22",
    notes: "Needs help with brand redesign and website overhaul.",
  },
  {
    id: "3",
    name: "Emily Thompson",
    email: "emily@ecommerce.shop",
    company: "EcoCommerce",
    phone: "+1 (555) 345-6789",
    status: "active",
    value: 58000,
    industry: "E-commerce",
    location: "Seattle, WA",
    joinedDate: "2025-08-20",
    lastContact: "2026-02-25",
    notes: "High-value client. Working on conversion optimization.",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david@consultingfirm.biz",
    company: "Strategic Consulting",
    phone: "+1 (555) 456-7890",
    status: "prospect",
    value: 0,
    industry: "Consulting",
    location: "New York, NY",
    joinedDate: "2026-02-10",
    lastContact: "2026-02-15",
    notes: "Interested in our services. Scheduled follow-up call.",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "lisa@healthtech.co",
    company: "HealthTech Solutions",
    phone: "+1 (555) 567-8901",
    status: "active",
    value: 67000,
    industry: "Healthcare",
    location: "Boston, MA",
    joinedDate: "2025-07-05",
    lastContact: "2026-02-24",
    notes: "Long-term partnership. Very satisfied with deliverables.",
  },
  {
    id: "6",
    name: "James Wilson",
    email: "james@financeapp.io",
    company: "FinanceApp",
    phone: "+1 (555) 678-9012",
    status: "inactive",
    value: 28000,
    industry: "Finance",
    location: "Chicago, IL",
    joinedDate: "2025-05-12",
    lastContact: "2025-12-18",
    notes: "Project completed. May return for phase 2.",
  },
];
