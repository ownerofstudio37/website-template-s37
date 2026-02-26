type AdminSectionPageProps = {
  title: string;
  description: string;
  cards: { title: string; description: string }[];
};

export function AdminSectionPage({
  title,
  description,
  cards
}: AdminSectionPageProps) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-2 text-white/70">{description}</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="card">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-white/70">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
