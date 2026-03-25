const features = [
  {
    title: 'Conversion-focused structure',
    description: 'Pre-made page architecture for hero, social proof, and CTA flows.',
  },
  {
    title: 'Design system baseline',
    description: 'Tailwind v4 tokens with reusable shadcn-style UI components.',
  },
  {
    title: 'Strong DX defaults',
    description: 'Type-safe forms, strict linting, formatting, and path aliases included.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container-tight py-16">
      <h2 className="text-3xl font-semibold">Everything wired for production velocity</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-3 text-sm text-muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
