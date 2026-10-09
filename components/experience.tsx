import { Section } from "@/components/section";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & activities"
      title="Where I've contributed."
    >
      <ol className="relative max-w-3xl space-y-6 before:absolute before:inset-y-2 before:left-[0.4375rem] before:w-px before:bg-linear-to-b before:from-primary before:via-secondary before:to-transparent">
        {experience.map((item) => (
          <li key={item.org} className="reveal relative pl-10" data-reveal="right">
            <span className="absolute top-7 left-0 flex size-[0.9375rem] items-center justify-center rounded-full border border-primary bg-page">
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <div className="card p-6 transition-colors duration-200 hover:border-primary/40">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">@ {item.org}</p>
                </div>
                <p className="tag shrink-0">{item.meta}</p>
              </div>
              <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
