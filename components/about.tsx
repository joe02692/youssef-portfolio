import { GraduationIcon, Icon, MapPinIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { about, profile } from "@/lib/site";
import { stagger } from "@/lib/stagger";

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Comfortable at both ends of the stack.">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-3">
          <div className="reveal space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-fg" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {about.focus.map((item, index) => (
              <li
                key={item.title}
                className="reveal card p-5"
                data-reveal="zoom"
                style={stagger(index)}
              >
                <Icon name={item.icon} className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-[0.9375rem] font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="reveal lg:col-span-2" data-reveal="right" aria-label="Education">
          <div className="card p-6 sm:p-7">
            <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-dim">
              <GraduationIcon className="size-4 text-secondary" />
              Education
            </h3>
            <ol className="mt-6 space-y-6 border-l border-line pl-6">
              {about.education.map((entry) => (
                <li key={entry.school} className="relative">
                  <span className="absolute top-1.5 -left-[1.8125rem] size-2.5 rounded-full border-2 border-secondary bg-surface" />
                  <p className="font-display font-semibold">{entry.school}</p>
                  <p className="mt-1 text-sm text-muted">{entry.detail}</p>
                  <p className="mt-2 inline-block rounded-md bg-secondary/10 px-2 py-0.5 font-mono text-xs text-secondary">
                    {entry.meta}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-7 flex items-center gap-2 border-t border-line pt-5 text-sm text-muted">
              <MapPinIcon className="size-4 text-dim" />
              Based in {profile.location}
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
