import { AdminNav } from "@/components/admin-nav";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-900 text-white">
      <div className="flex">
        <AdminNav />
        <div className="flex-1 p-8 lg:p-12">{children}</div>
      </div>
    </div>
  );
}
