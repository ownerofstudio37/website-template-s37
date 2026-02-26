const logos = [
  "Atlas Partners",
  "Northwind Studio",
  "Halo Ventures",
  "Luxe Collective",
  "Prism Atelier"
];

export function LogoWall() {
  return (
    <section className="section-pad border-y border-white/5">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.4em] text-white/40">
        {logos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}
