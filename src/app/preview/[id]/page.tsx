import { notFound } from "next/navigation";
import { getPreset, getAllPresets } from "@/data/layouts/presets";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  const presets = getAllPresets();
  return presets.map((preset) => ({
    id: preset.id
  }));
}

export default async function PreviewLayout({ params }: { params: Params }) {
  const { id } = await params;
  const preset = getPreset(id);

  if (!preset) {
    notFound();
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: preset.colors.ink[900] }}
    >
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-opacity-50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between">
            <Link href="/layouts" className="text-white/60 transition-colors hover:text-white">
              ← Back to Showcase
            </Link>
            <h2 className="font-bold text-white">{preset.name} Preview</h2>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Gradient Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${preset.colors.brand[500]}, transparent 70%)`
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8">
          <h1 className="text-5xl font-bold text-white sm:text-6xl">
            {preset.tagline}
          </h1>
          <p
            className="mt-6 text-lg text-white/70"
            style={{ color: `${preset.colors.accent[500]}cc` }}
          >
            {preset.description}
          </p>
          <button
            className="mt-8 rounded-lg px-8 py-3 font-semibold text-white transition-all hover:shadow-glow"
            style={{ backgroundColor: preset.colors.brand[600] }}
          >
            {preset.ctaText}
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-white">Included Features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preset.enabledFeatures.map((feature) => (
            <div
              key={feature}
              className="rounded-lg border border-white/10 bg-ink-800 p-6"
            >
              <div
                className="mb-3 h-2 w-8 rounded"
                style={{ backgroundColor: preset.colors.accent[500] }}
              />
              <h3 className="font-semibold text-white capitalize">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Dashboard Preview */}
      <div
        className="border-y border-white/10 py-16"
        style={{ backgroundColor: preset.colors.ink[800] }}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-white">Admin Dashboard</h2>
          <p className="mt-2 text-white/60">
            Optimized sections for your business
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preset.adminSections.map((section) => (
              <div
                key={section}
                className="rounded-lg border border-white/10 bg-ink-700 p-4"
              >
                <p className="font-semibold text-white capitalize">{section}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-white">Design System</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Ink Colors */}
          <div>
            <p className="mb-4 font-semibold text-white/80">Background (Ink)</p>
            <div className="space-y-2">
              {Object.entries(preset.colors.ink).map(([level, color]) => (
                <div key={level} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-white/60">ink-{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Colors */}
          <div>
            <p className="mb-4 font-semibold text-white/80">Brand (Primary)</p>
            <div className="space-y-2">
              {Object.entries(preset.colors.brand).map(([level, color]) => (
                <div key={level} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-white/60">brand-{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <p className="mb-4 font-semibold text-white/80">Accent (Secondary)</p>
            <div className="space-y-2">
              {Object.entries(preset.colors.accent).map(([level, color]) => (
                <div key={level} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-white/60">accent-{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div
        className="border-t border-white/10 py-12"
        style={{ backgroundColor: preset.colors.ink[800] }}
      >
        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="text-white/60">Ready to use this layout?</p>
          <p className="mt-2 font-mono text-sm text-white/80">
            Set <code className="font-bold">NEXT_PUBLIC_LAYOUT_PRESET={preset.id}</code>
          </p>
        </div>
      </div>
    </div>
  );
}
