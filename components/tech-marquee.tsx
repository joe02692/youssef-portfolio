import { techTicker } from "@/lib/site";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {techTicker.map((item) => (
        <li
          key={item}
          className="flex items-center gap-[2.75rem] whitespace-nowrap font-mono text-sm text-muted"
        >
          {item}
          <span className="size-1 rounded-full bg-primary/60" />
        </li>
      ))}
    </ul>
  );
}

// Slow ticker of core technologies. The second track is a visual duplicate
// that makes the loop seamless; it pauses on hover and is static when the
// visitor prefers reduced motion.
export function TechMarquee() {
  return (
    <section aria-label="Core technologies" className="border-y border-line bg-surface/50 py-5">
      <div className="marquee">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
