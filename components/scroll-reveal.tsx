"use client";

import { useEffect } from "react";

// Animates every `.reveal` element in as it scrolls into view (styles in
// globals.css). Elements already on screen at load are left alone, and nothing
// is hidden unless this script runs, so content never depends on it.
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Set<Element>();

    const show = (element: Element) => {
      element.classList.add("reveal-in");
      element.classList.remove("reveal-pending");
      pending.delete(element);
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target);
        }
        // A jump (End key, anchor link) can carry the page past elements
        // without them ever intersecting; don't leave those hidden above.
        for (const element of pending) {
          if (element.getBoundingClientRect().bottom < 0) show(element);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const element of document.querySelectorAll(".reveal")) {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        pending.add(element);
        observer.observe(element);
      }
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
