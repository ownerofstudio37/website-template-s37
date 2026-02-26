import { adminSections } from "@/data/admin-sections";
import Link from "next/link";

export default function AdminHomePage() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Admin Command Center</h1>
          <p className="mt-2 text-white/70">
            Manage clients, projects, content, and AI automation in one premium
            workspace.
          </p>
        </div>
        <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
          Launch AI assistant
        </button>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {adminSections.map((section) => (
          <Link key={section.title} href={section.href} className="card">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="mt-2 text-sm text-white/70">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
