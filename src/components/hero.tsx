import Link from "next/link";
import { ChatConcierge } from "@/components/chat-concierge";

export function Hero() {
  return (
    <section className="section-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Premium client experience
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          A sleek, conversion-first platform that feels <span className="gradient-text">top-tier</span> without
          the noise.
        </h1>
        <p className="mt-5 text-lg text-white/70">
          Deliver a luxury-grade experience across discovery, booking, onboarding,
          and delivery with AI-driven personalization and measurable ROI.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#booking"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-glow"
          >
            Book a consultation
          </Link>
          <Link
            href="/admin"
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 hover:text-white"
          >
            View the admin suite
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
          <div>
            <p className="text-xl font-semibold text-white">+42%</p>
            <p>Average lead conversion lift</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">24/7</p>
            <p>AI concierge coverage</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">3x</p>
            <p>Faster onboarding</p>
          </div>
        </div>
      </div>
      <ChatConcierge />
    </section>
  );
}
