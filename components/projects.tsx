import { ArrowUpRightIcon, TrophyIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { SpotlightCard } from "@/components/spotlight-card";
import { projects } from "@/lib/site";
import { stagger } from "@/lib/stagger";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Key projects"
      title="Things I've built."
      lead="Clinical AI, assistive computer vision, bare-metal firmware and full-stack web — a sample of work across the three layers."
    >
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li
            key={project.title}
            className={`reveal ${project.featured ? "md:col-span-2" : ""}`}
            style={stagger(index % 3)}
          >
            <SpotlightCard className="flex h-full flex-col p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-tertiary">
                {project.domain}
              </p>
              <h3
                className={`mt-3 font-display font-semibold tracking-tight ${
                  project.featured ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {project.title}
              </h3>

              {project.award ? (
                <p className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-xl border border-secondary/40 bg-secondary/10 px-3.5 py-2 text-sm">
                  <TrophyIcon className="size-4 shrink-0 text-secondary" />
                  <span>
                    <span className="font-semibold text-fg">{project.award.place}</span>
                    <span className="text-muted"> — {project.award.event}</span>
                  </span>
                </p>
              ) : null}

              <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-fg"
                >
                  {project.link.label}
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ) : null}
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
