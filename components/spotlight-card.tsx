"use client";

import type { PointerEvent } from "react";

// Card whose glow follows the pointer (see `.spotlight` in globals.css).
export function SpotlightCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  function trackPointer(event: PointerEvent<HTMLElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <article onPointerMove={trackPointer} className={`spotlight card ${className}`}>
      {children}
    </article>
  );
}
