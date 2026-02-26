import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-pad grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Voss Studio</h3>
          <p className="mt-3 text-sm text-white/70">
            Premium client experiences with AI automation, seamless bookings, and
            measurable performance.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/70 md:justify-self-end">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/blog/migrate" className="hover:text-white">
            Blog migration
          </Link>
          <Link href="/admin" className="hover:text-white">
            Admin dashboard
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-xs text-white/50 sm:px-10 lg:px-16">
        © 2026 Voss Studio. All rights reserved.
      </div>
    </footer>
  );
}
