import Link from "next/link";
import { getAllPresets } from "@/data/layouts/presets";

export const metadata = {
  title: "Layout Showcase | Voss Studio",
  description: "Choose a layout for your business type"
};

export default function LayoutShowcase() {
  const presets = getAllPresets();

  return (
    <div className="min-h-screen bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Choose Your Layout
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Select a layout built for your business type. Each comes with optimized features and design.
          </p>
        </div>

        {/* Presets Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {presets.map((preset) => (
            <div
              key={preset.id}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-ink-800 p-8 transition-all hover:border-white/30 hover:shadow-glow"
            >
              {/* Color Preview */}
              <div className="mb-6 flex gap-2">
                <div
                  className="h-8 w-8 rounded"
                  style={{ backgroundColor: preset.colors.brand[500] }}
                  title="Brand Color"
                />
                <div
                  className="h-8 w-8 rounded"
                  style={{ backgroundColor: preset.colors.accent[500] }}
                  title="Accent Color"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-bold text-white">{preset.name}</h2>
                <p className="mt-2 text-sm text-white/60">{preset.businessType}</p>
                <p className="mt-4 text-white/80">{preset.description}</p>

                {/* Features */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase text-white/50">
                    Enabled Features
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {preset.enabledFeatures.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                      >
                        {feature}
                      </span>
                    ))}
                    {preset.enabledFeatures.length > 4 && (
                      <span className="inline-block text-xs text-white/50">
                        +{preset.enabledFeatures.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Admin Sections */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase text-white/50">
                    Admin Sections
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {preset.adminSections.slice(0, 4).map((section) => (
                      <span
                        key={section}
                        className="inline-block rounded bg-white/5 px-2 py-1 text-xs text-white/60"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Preview */}
                <div className="mt-8">
                  <button
                    className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all"
                    style={{ backgroundColor: preset.colors.brand[600] }}
                  >
                    {preset.ctaText}
                  </button>
                </div>

                {/* View Full Layout Link */}
                <Link
                  href={`/preview/${preset.id}`}
                  className="mt-4 block w-full text-center text-sm text-white/60 underline transition-colors hover:text-white"
                >
                  Preview Full Layout →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-16 rounded-lg border border-white/10 bg-ink-800 p-8">
          <h3 className="font-bold text-white">How to Deploy</h3>
          <p className="mt-2 text-white/70">
            Choose a layout above, then set the <code className="rounded bg-white/10 px-2 py-1 font-mono text-sm">NEXT_PUBLIC_LAYOUT_PRESET</code> environment variable in your deployment settings:
          </p>
          <div className="mt-4 rounded bg-ink-900 p-4">
            <code className="text-sm text-white/80">
              NEXT_PUBLIC_LAYOUT_PRESET=home_services
            </code>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Available presets: {presets.map((p) => p.id).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
