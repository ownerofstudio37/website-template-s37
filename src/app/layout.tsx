import "./globals.css";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Voss Studio | Premium Client Experience",
    template: "%s | Voss Studio"
  },
  description:
    "A premium, conversion-focused client services platform with AI assistance, bookings, and performance insights.",
  keywords: [
    "client services",
    "ai chatbot",
    "consultations",
    "supabase",
    "seo",
    "crm",
    "marketing"
  ],
  openGraph: {
    type: "website",
    title: "Voss Studio | Premium Client Experience",
    description:
      "Sleek, modern, and conversion-ready client experience powered by AI and automation."
  },
  twitter: {
    card: "summary_large_image",
    title: "Voss Studio | Premium Client Experience",
    description:
      "Sleek, modern, and conversion-ready client experience powered by AI and automation."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
