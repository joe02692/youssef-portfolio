import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { skillGroups } from "@/lib/site";
import { stagger } from "@/lib/stagger";

// 6-column bento: three cards on the first row, two wider ones on the second.
const spans = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "md:col-span-2 lg:col-span-3",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="What I work with."
      lead="From register maps to retrieval pipelines — the languages, frameworks and tools I use across the stack."
    >
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, index) => (
          <li
            key={group.title}
            className={`reveal card p-6 ${spans[index] ?? ""}`}
            data-reveal="zoom"
            style={stagger(index % 3)}
          >
            <div className="flex items-center gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Icon name={group.icon} className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold leading-tight">{group.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill.name} className="chip">
                  {skill.name}
                  {skill.detail ? (
                    <span className="font-mono text-[0.6875rem] text-dim">{skill.detail}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
