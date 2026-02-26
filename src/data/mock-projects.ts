export type Project = {
  id: string;
  name: string;
  client: string;
  status: "planning" | "in-progress" | "review" | "completed" | "on-hold";
  priority: "low" | "medium" | "high" | "urgent";
  progress: number;
  startDate: string;
  dueDate: string;
  budget: number;
  spent: number;
  team: string[];
  description: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  assignee: string;
  dueDate: string;
};

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "TechStartup Platform Rebuild",
    client: "TechStartup Inc",
    status: "in-progress",
    priority: "high",
    progress: 65,
    startDate: "2026-01-15",
    dueDate: "2026-03-30",
    budget: 45000,
    spent: 29250,
    team: ["You", "Designer A", "Developer B"],
    description: "Complete platform redesign with new features and improved UX",
    tasks: [
      {
        id: "1-1",
        title: "Complete wireframes",
        status: "done",
        assignee: "Designer A",
        dueDate: "2026-02-10",
      },
      {
        id: "1-2",
        title: "Develop new dashboard",
        status: "in-progress",
        assignee: "Developer B",
        dueDate: "2026-03-05",
      },
      {
        id: "1-3",
        title: "User testing",
        status: "todo",
        assignee: "You",
        dueDate: "2026-03-20",
      },
    ],
  },
  {
    id: "2",
    name: "Design Studio Rebrand",
    client: "Design Studio Co",
    status: "review",
    priority: "medium",
    progress: 90,
    startDate: "2025-12-01",
    dueDate: "2026-03-01",
    budget: 32000,
    spent: 28800,
    team: ["You", "Designer A"],
    description: "Brand identity refresh including logo, colors, and style guide",
    tasks: [
      {
        id: "2-1",
        title: "Logo concepts",
        status: "done",
        assignee: "Designer A",
        dueDate: "2026-01-15",
      },
      {
        id: "2-2",
        title: "Style guide creation",
        status: "done",
        assignee: "Designer A",
        dueDate: "2026-02-10",
      },
      {
        id: "2-3",
        title: "Client final review",
        status: "in-progress",
        assignee: "You",
        dueDate: "2026-03-01",
      },
    ],
  },
  {
    id: "3",
    name: "EcoCommerce Optimization",
    client: "EcoCommerce",
    status: "in-progress",
    priority: "urgent",
    progress: 45,
    startDate: "2026-02-01",
    dueDate: "2026-04-15",
    budget: 58000,
    spent: 26100,
    team: ["You", "Developer B", "Designer A", "Analyst C"],
    description: "Conversion rate optimization and A/B testing campaign",
    tasks: [
      {
        id: "3-1",
        title: "Audit current funnel",
        status: "done",
        assignee: "Analyst C",
        dueDate: "2026-02-15",
      },
      {
        id: "3-2",
        title: "Implement tracking",
        status: "in-progress",
        assignee: "Developer B",
        dueDate: "2026-03-01",
      },
      {
        id: "3-3",
        title: "Design test variants",
        status: "in-progress",
        assignee: "Designer A",
        dueDate: "2026-03-10",
      },
      {
        id: "3-4",
        title: "Run tests",
        status: "todo",
        assignee: "You",
        dueDate: "2026-04-01",
      },
    ],
  },
  {
    id: "4",
    name: "HealthTech Portal",
    client: "HealthTech Solutions",
    status: "planning",
    priority: "high",
    progress: 15,
    startDate: "2026-02-20",
    dueDate: "2026-06-30",
    budget: 67000,
    spent: 10050,
    team: ["You", "Developer B"],
    description: "Patient portal with secure messaging and appointment booking",
    tasks: [
      {
        id: "4-1",
        title: "Requirements gathering",
        status: "in-progress",
        assignee: "You",
        dueDate: "2026-03-05",
      },
      {
        id: "4-2",
        title: "Architecture design",
        status: "todo",
        assignee: "Developer B",
        dueDate: "2026-03-15",
      },
    ],
  },
  {
    id: "5",
    name: "Strategic Consulting Website",
    client: "Strategic Consulting",
    status: "completed",
    priority: "low",
    progress: 100,
    startDate: "2025-10-01",
    dueDate: "2025-12-15",
    budget: 24000,
    spent: 24000,
    team: ["You", "Designer A"],
    description: "Professional website with case studies and lead generation",
    tasks: [
      {
        id: "5-1",
        title: "Design and develop",
        status: "done",
        assignee: "Designer A",
        dueDate: "2025-11-30",
      },
      {
        id: "5-2",
        title: "Content migration",
        status: "done",
        assignee: "You",
        dueDate: "2025-12-10",
      },
      {
        id: "5-3",
        title: "Launch",
        status: "done",
        assignee: "You",
        dueDate: "2025-12-15",
      },
    ],
  },
];
