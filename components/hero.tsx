import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SystemDiagram } from "@/components/system-diagram";
import { profile, projects } from "@/lib/site";
import { stagger } from "@/lib/stagger";

const award = projects.find((project) => project.award)?.award;

const facts = [
  { value: "4th year", label: "Intelligent Systems Eng." },
  ...(award ? [{ value: "3rd place", label: "AI Hackathon 2026" }] : []),
  { value: `${projects.length} projects`, label: "Across AI, embedded & web" },
];

export function Hero() {
  return (
    <section id="top" className="hero relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hero-text">
          <p
            className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted"
            style={stagger(0)}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            {profile.availability}
          </p>

          <h1
            className="rise mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={stagger(1)}
          >
            {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
          </h1>

          <p className="rise mt-6 text-xl font-medium text-fg sm:text-2xl" style={stagger(2)}>
            {profile.title}
          </p>
          <p
            className="rise mt-2 font-mono text-sm tracking-wide text-tertiary sm:text-base"
            style={stagger(2)}
          >
            {profile.subtitle}
          </p>

          <p
            className="rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            style={stagger(3)}
          >
            {profile.bio}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={stagger(4)}>
            <a href="#projects" className="btn btn-primary">
              View projects
              <ArrowRightIcon className="size-4" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <span className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="size-[1.125rem]" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="size-[1.125rem]" />
              </a>
            </span>
          </div>

          <dl
            className="rise mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6"
            style={stagger(5)}
          >
            {facts.map((fact) => (
              <div key={fact.value} className="flex flex-col-reverse justify-end gap-1">
                <dt className="text-xs leading-snug text-dim sm:text-sm">{fact.label}</dt>
                <dd className="font-display text-base font-semibold sm:text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* hero-art: scroll parallax · rise: entrance · float: idle motion */}
        <div className="hero-art mx-auto w-full max-w-md lg:max-w-none">
          <div className="rise" style={stagger(4)}>
            <div className="float drop-shadow-[0_30px_60px_color-mix(in_srgb,var(--primary)_22%,transparent)]">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
