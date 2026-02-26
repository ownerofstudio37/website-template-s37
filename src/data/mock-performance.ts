export type PerformanceMetric = {
  id: string;
  url: string;
  date: string;
  performanceScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  seoScore: number;
  fcp: number; // First Contentful Paint (ms)
  lcp: number; // Largest Contentful Paint (ms)
  cls: number; // Cumulative Layout Shift
  tti: number; // Time to Interactive (ms)
  recommendations: string[];
};

export const mockPerformanceMetrics: PerformanceMetric[] = [
  {
    id: "1",
    url: "https://techstartup.io",
    date: "2026-02-26",
    performanceScore: 92,
    accessibilityScore: 95,
    bestPracticesScore: 88,
    seoScore: 97,
    fcp: 1200,
    lcp: 2100,
    cls: 0.05,
    tti: 2800,
    recommendations: [
      "Eliminate render-blocking resources",
      "Serve images in next-gen formats",
      "Reduce unused JavaScript",
    ],
  },
  {
    id: "2",
    url: "https://ecommerce.shop",
    date: "2026-02-25",
    performanceScore: 78,
    accessibilityScore: 91,
    bestPracticesScore: 85,
    seoScore: 94,
    fcp: 1850,
    lcp: 3200,
    cls: 0.12,
    tti: 4100,
    recommendations: [
      "Optimize images (2.3 MB savings)",
      "Minify CSS and JavaScript",
      "Enable text compression",
      "Reduce third-party code impact",
    ],
  },
  {
    id: "3",
    url: "https://healthtech.co",
    date: "2026-02-24",
    performanceScore: 88,
    accessibilityScore: 98,
    bestPracticesScore: 92,
    seoScore: 96,
    fcp: 1400,
    lcp: 2400,
    cls: 0.08,
    tti: 3200,
    recommendations: [
      "Preload key requests",
      "Avoid enormous network payloads",
    ],
  },
];

export type SEOData = {
  id: string;
  url: string;
  keywords: Array<{
    keyword: string;
    position: number;
    change: number;
    volume: number;
  }>;
  backlinks: number;
  domainAuthority: number;
  pageSpeed: number;
  mobileUsability: "good" | "needs-work" | "poor";
};

export const mockSEOData: SEOData[] = [
  {
    id: "1",
    url: "https://techstartup.io",
    keywords: [
      { keyword: "startup platform", position: 3, change: 2, volume: 12000 },
      { keyword: "tech solutions", position: 8, change: -1, volume: 8500 },
      { keyword: "SaaS platform", position: 12, change: 5, volume: 15000 },
    ],
    backlinks: 284,
    domainAuthority: 42,
    pageSpeed: 92,
    mobileUsability: "good",
  },
  {
    id: "2",
    url: "https://ecommerce.shop",
    keywords: [
      { keyword: "eco friendly products", position: 5, change: 3, volume: 22000 },
      { keyword: "sustainable shopping", position: 7, change: 1, volume: 18000 },
      { keyword: "green ecommerce", position: 15, change: -2, volume: 5400 },
    ],
    backlinks: 512,
    domainAuthority: 58,
    pageSpeed: 78,
    mobileUsability: "good",
  },
];
