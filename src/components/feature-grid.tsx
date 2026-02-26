import { features } from "@/data/features";

export function FeatureGrid() {
  return (
    <section className="section-pad" id="solutions">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Everything you need to win high-value clients
        </h2>
        <p className="mt-3 text-white/70">
          Build a world-class experience across marketing, booking, delivery, and
          retention. Every module is designed for speed, polish, and measurable
          impact.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {feature.kicker}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
