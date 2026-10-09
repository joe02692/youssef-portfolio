"use client";

import { useEffect, type MouseEvent } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { THEME_COLORS, THEME_STORAGE_KEY } from "@/lib/theme";

function applyTheme(dark: boolean) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? THEME_COLORS.dark : THEME_COLORS.light);
}

export function ThemeToggle() {
  useEffect(() => {
    // The inline script in the layout set data-theme; bring the browser chrome
    // colour in line with it.
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark");

    // Follow a change made in another tab.
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) applyTheme(event.newValue === "dark");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const dark = document.documentElement.getAttribute("data-theme") !== "dark";
    try {
      if (dark) localStorage.setItem(THEME_STORAGE_KEY, "dark");
      else localStorage.removeItem(THEME_STORAGE_KEY);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      applyTheme(dark);
      return;
    }

    // Reveal the new theme as a circle growing out of the button.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const transition = document.startViewTransition(() => applyTheme(dark));
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {
        // The transition was skipped; the theme has already been applied.
      });
  }

  // Both states are in the markup and CSS shows the one that applies, so the
  // button is correct before hydration and needs no React state.
  return (
    <button type="button" onClick={toggle} className="icon-btn">
      <MoonIcon className="size-[1.125rem] dark:hidden" />
      <SunIcon className="hidden size-[1.125rem] dark:block" />
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>
    </button>
  );
}
