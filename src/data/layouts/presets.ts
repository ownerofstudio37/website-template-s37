export type LayoutPreset = {
  id: string;
  name: string;
  description: string;
  businessType: string;
  colors: {
    ink: { 900: string; 800: string; 700: string };
    brand: { 500: string; 600: string; 700: string };
    accent: { 500: string; 600: string };
  };
  enabledFeatures: string[];
  adminSections: string[];
  heroVariant: "portfolio" | "service" | "coaching" | "booking" | "gallery";
  ctaText: string;
  tagline: string;
};

export const LAYOUT_PRESETS: Record<string, LayoutPreset> = {
  home_services: {
    id: "home_services",
    name: "Home Services",
    description: "Pool cleaning, roofing, restoration, HVAC, plumbing",
    businessType: "Home Services",
    colors: {
      ink: { 900: "#0a0c12", 800: "#111624", 700: "#1b2234" },
      brand: { 500: "#2563eb", 600: "#1d4ed8", 700: "#1e40af" },
      accent: { 500: "#06b6d4", 600: "#0891b2" }
    },
    enabledFeatures: ["booking", "testimonials", "before-after", "service-areas", "blog"],
    adminSections: ["calendar", "crm", "projects", "email", "lead-scoring"],
    heroVariant: "service",
    ctaText: "Book Your Service",
    tagline: "Professional Home Services You Can Trust"
  },

  therapist: {
    id: "therapist",
    name: "Therapist",
    description: "Therapy, counseling, mental health",
    businessType: "Mental Health Professional",
    colors: {
      ink: { 900: "#0f0f1e", 800: "#1a1a2e", 700: "#242d4a" },
      brand: { 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9" },
      accent: { 500: "#ec4899", 600: "#db2777" }
    },
    enabledFeatures: ["booking", "client-portals", "testimonials", "blog", "privacy-notice"],
    adminSections: ["calendar", "client-portals", "crm", "email", "blog"],
    heroVariant: "coaching",
    ctaText: "Schedule a Session",
    tagline: "Your Mental Health Matters"
  },

  health_coach: {
    id: "health_coach",
    name: "Health Coach",
    description: "Wellness coaching, nutrition, fitness",
    businessType: "Health & Wellness Coach",
    colors: {
      ink: { 900: "#0a0f0a", 800: "#0f1f0f", 700: "#1a3a1a" },
      brand: { 500: "#10b981", 600: "#059669", 700: "#047857" },
      accent: { 500: "#f59e0b", 600: "#d97706" }
    },
    enabledFeatures: ["booking", "programs", "testimonials", "gallery", "blog"],
    adminSections: ["calendar", "client-portals", "projects", "email", "lead-scoring"],
    heroVariant: "coaching",
    ctaText: "Start Your Journey",
    tagline: "Transform Your Health Today"
  },

  photographer: {
    id: "photographer",
    name: "Photographer",
    description: "Wedding, portrait, commercial photography",
    businessType: "Photography",
    colors: {
      ink: { 900: "#0a0a0a", 800: "#1a1a1a", 700: "#2d2d2d" },
      brand: { 500: "#f97316", 600: "#ea580c", 700: "#c2410c" },
      accent: { 500: "#06b6d4", 600: "#0891b2" }
    },
    enabledFeatures: ["gallery", "booking", "testimonials", "portfolio", "blog"],
    adminSections: ["gallery", "calendar", "projects", "cms", "email"],
    heroVariant: "gallery",
    ctaText: "View Portfolio",
    tagline: "Capture Your Story"
  },

  charter_fishing: {
    id: "charter_fishing",
    name: "Charter Fishing",
    description: "Fishing charters, guides, water sports",
    businessType: "Charter Fishing",
    colors: {
      ink: { 900: "#0a1428", 800: "#111d2e", 700: "#1b3a47" },
      brand: { 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1" },
      accent: { 500: "#fbbf24", 600: "#f59e0b" }
    },
    enabledFeatures: ["booking", "testimonials", "gallery", "weather-info", "blog"],
    adminSections: ["calendar", "crm", "projects", "gallery", "email"],
    heroVariant: "booking",
    ctaText: "Book Your Charter",
    tagline: "Your Next Adventure Awaits"
  }
};

export function getPreset(id: string): LayoutPreset {
  return LAYOUT_PRESETS[id] || LAYOUT_PRESETS.home_services;
}

export function getCurrentPreset(): LayoutPreset {
  const presetId = process.env.NEXT_PUBLIC_LAYOUT_PRESET || "home_services";
  return getPreset(presetId);
}

export function getAllPresets(): LayoutPreset[] {
  return Object.values(LAYOUT_PRESETS);
}
