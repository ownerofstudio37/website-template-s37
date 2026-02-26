import { testimonials } from "@/data/testimonials";

export function TestimonialSection() {
  return (
    <section className="section-pad" id="results">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Designed to convert</h2>
          <p className="mt-3 text-white/70">
            Purpose-built journeys that turn curiosity into committed clients.
          </p>
        </div>
        <div className="text-sm text-white/60">
          AI-powered personalization. Human-grade polish.
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.name} className="card">
            <p className="text-sm text-white/70">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold">{item.name}</p>
            <p className="text-xs text-white/50">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
