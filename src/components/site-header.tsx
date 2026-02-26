import Link from "next/link";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Admin", href: "/admin" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-ink-900/80 backdrop-blur">
      <div className="section-pad flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold">
          <span className="gradient-text">Voss Studio</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#booking"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
          >
            Book a consult
          </Link>
          <Link
            href="/admin"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-glow"
          >
            Client login
          </Link>
        </div>
      </div>
    </header>
  );
}
