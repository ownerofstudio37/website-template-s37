export type GalleryImage = {
  id: string;
  title: string;
  description: string;
  url: string;
  alt: string;
  category: string;
  tags: string[];
};

export const mockGalleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Modern Tech Workspace",
    description: "Hero banner showing collaborative tech team environment",
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    alt: "Team collaborating on tech project",
    category: "portfolio",
    tags: ["hero", "banner", "tech"],
  },
  {
    id: "2",
    title: "Team Meeting",
    description: "Professional team brainstorming session",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team members in meeting",
    category: "portfolio",
    tags: ["team", "about", "people"],
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Product screenshot showing data visualization",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Analytics dashboard interface",
    category: "case-study",
    tags: ["product", "dashboard", "analytics"],
  },
  {
    id: "4",
    title: "Creative Workspace",
    description: "Modern office environment with natural lighting",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    alt: "Modern office workspace",
    category: "about",
    tags: ["office", "workspace", "environment"],
  },
];

export type CMSPage = {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: "published" | "draft" | "scheduled";
  author: string;
  createdAt: string;
  updatedAt: string;
  template: string;
  views: number;
};

export const mockCMSPages: CMSPage[] = [
  {
    id: "1",
    title: "Home",
    slug: "/",
    description: "Main homepage with hero section, features, and testimonials",
    status: "published",
    author: "You",
    createdAt: "2025-08-01",
    updatedAt: "2026-02-20",
    template: "homepage",
    views: 15234,
  },
  {
    id: "2",
    title: "About Us",
    slug: "/about",
    description: "Company story, team members, and mission statement",
    status: "published",
    author: "You",
    createdAt: "2025-08-01",
    updatedAt: "2026-01-15",
    template: "standard",
    views: 8421,
  },
  {
    id: "3",
    title: "Services",
    slug: "/services",
    description: "Complete list of services and pricing information",
    status: "published",
    author: "Designer A",
    createdAt: "2025-08-05",
    updatedAt: "2026-02-10",
    template: "services",
    views: 12005,
  },
  {
    id: "4",
    title: "Case Studies",
    slug: "/case-studies",
    description: "Portfolio showcasing successful client projects",
    status: "published",
    author: "You",
    createdAt: "2025-09-12",
    updatedAt: "2026-02-18",
    template: "portfolio",
    views: 6892,
  },
  {
    id: "5",
    title: "New Landing Page",
    slug: "/promo-2026",
    description: "Promotional landing page for Q1 2026 campaign",
    status: "draft",
    author: "Designer A",
    createdAt: "2026-02-24",
    updatedAt: "2026-02-24",
    template: "landing",
    views: 0,
  },
];
