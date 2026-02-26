import Link from "next/link";
import { adminSections } from "@/data/admin-sections";

export function AdminNav() {
  return (
    <aside className="hidden w-72 flex-col border-r border-white/10 bg-ink-800/40 p-6 lg:flex">
      <Link href="/" className="text-lg font-semibold text-white">
        Voss Studio
      </Link>
      <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/40">
        Admin
      </p>
      <nav className="mt-6 space-y-2 text-sm text-white/70">
        {adminSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="block rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white"
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
