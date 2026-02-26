export default function BlogMigratePage() {
  return (
    <div className="section-pad">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold md:text-4xl">
          Blog migration center
        </h1>
        <p className="mt-3 text-white/70">
          Import existing blogs without losing SEO rankings. Map legacy URLs,
          preserve metadata, and validate redirects before you publish.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold">Migration checklist</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>• Upload CSV or JSON of legacy posts.</li>
            <li>• Match slugs to new entries.</li>
            <li>• Preserve canonical URLs and metadata.</li>
            <li>• Configure redirects and verify with preview.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">SEO safety</h2>
          <p className="mt-3 text-sm text-white/70">
            Use the admin migration tool to keep legacy URLs intact, auto-generate
            301 redirects, and validate structured data.
          </p>
          <button className="mt-6 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white">
            Open migration tool
          </button>
        </div>
      </div>
    </div>
  );
}
