const tiers = [
  {
    name: "Launch",
    description: "Fast start for premium brands entering the market.",
    price: "$4,800",
    items: ["AI concierge", "Booking flow", "SEO foundation", "Blog import"]
  },
  {
    name: "Scale",
    description: "All core modules with automation and analytics.",
    price: "$9,500",
    items: [
      "CRM",
      "AI lead scoring",
      "Client portal",
      "Performance auditing"
    ]
  },
  {
    name: "Signature",
    description: "Full suite with bespoke AI workflows and enterprise support.",
    price: "Custom",
    items: ["Visual CMS", "AI SEO tools", "Email + SMS", "Team training"]
  }
];

export function PricingSection() {
  return (
    <section className="section-pad" id="pricing">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold md:text-4xl">Investment tiers</h2>
        <p className="mt-3 text-white/70">
          Flexible packages for high-touch client experiences.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="card flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {tier.name}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{tier.price}</h3>
              <p className="mt-2 text-sm text-white/70">{tier.description}</p>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              {tier.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <button className="mt-auto rounded-full border border-white/20 py-2 text-sm text-white/80 hover:text-white">
              Request proposal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
