export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="reveal mb-12 max-w-2xl" data-reveal="left">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {lead ? <p className="mt-4 text-pretty text-muted">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
