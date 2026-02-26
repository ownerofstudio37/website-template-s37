export type GalleryImage = {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  size: number;
  dimensions: string;
  uploadedBy: string;
  uploadedDate: string;
  tags: string[];
};

export const mockGalleryImages: GalleryImage[] = [
  {
    id: "1",
    name: "hero-banner.jpg",
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300",
    size: 245600,
    dimensions: "1920x1080",
    uploadedBy: "You",
    uploadedDate: "2026-02-20",
    tags: ["hero", "banner", "tech"],
  },
  {
    id: "2",
    name: "team-photo.jpg",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300",
    size: 189400,
    dimensions: "1600x900",
    uploadedBy: "Designer A",
    uploadedDate: "2026-02-18",
    tags: ["team", "about", "people"],
  },
  {
    id: "3",
    name: "product-shot.jpg",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300",
    size: 312800,
    dimensions: "2048x1152",
    uploadedBy: "You",
    uploadedDate: "2026-02-15",
    tags: ["product", "dashboard", "analytics"],
  },
  {
    id: "4",
    name: "office-workspace.jpg",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300",
    size: 278900,
    dimensions: "1920x1280",
    uploadedBy: "Designer A",
    uploadedDate: "2026-02-12",
    tags: ["office", "workspace", "environment"],
  },
];

export type CMSPage = {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft" | "scheduled";
  author: string;
  createdDate: string;
  modifiedDate: string;
  template: string;
  views: number;
};

export const mockCMSPages: CMSPage[] = [
  {
    id: "1",
    title: "Home",
    slug: "/",
    status: "published",
    author: "You",
    createdDate: "2025-08-01",
    modifiedDate: "2026-02-20",
    template: "homepage",
    views: 15234,
  },
  {
    id: "2",
    title: "About Us",
    slug: "/about",
    status: "published",
    author: "You",
    createdDate: "2025-08-01",
    modifiedDate: "2026-01-15",
    template: "standard",
    views: 8421,
  },
  {
    id: "3",
    title: "Services",
    slug: "/services",
    status: "published",
    author: "Designer A",
    createdDate: "2025-08-05",
    modifiedDate: "2026-02-10",
    template: "services",
    views: 12005,
  },
  {
    id: "4",
    title: "Case Studies",
    slug: "/case-studies",
    status: "published",
    author: "You",
    createdDate: "2025-09-12",
    modifiedDate: "2026-02-18",
    template: "portfolio",
    views: 6892,
  },
  {
    id: "5",
    title: "New Landing Page",
    slug: "/promo-2026",
    status: "draft",
    author: "Designer A",
    createdDate: "2026-02-24",
    modifiedDate: "2026-02-24",
    template: "landing",
    views: 0,
  },
];
