import Link from "next/link";

export function CTASection() {
  return (
    <section className="section-pad">
      <div className="glass flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Ready for a premium client engine?</h2>
          <p className="mt-3 text-white/70">
            Launch a conversion-first platform that feels effortless for you and
            unforgettable for your clients.
          </p>
        </div>
        <Link
          href="#booking"
          className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Start with a consult
        </Link>
      </div>
    </section>
  );
}
