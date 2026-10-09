"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, profile } from "@/lib/site";
import portrait from "@/public/youssef-elbasiouny.jpg";

const sectionIds = ["top", ...navItems.map((item) => item.id)];

// Scrollspy: the section crossing the middle of the viewport is the active one.
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-page/75 backdrop-blur-xl">
      <div aria-hidden="true" className="scroll-progress" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — back to top`}
          >
            <Image
              src={portrait}
              alt=""
              sizes="36px"
              className="size-9 rounded-full object-cover ring-2 ring-primary/40 transition group-hover:ring-secondary/70"
            />
            <span className="hidden whitespace-nowrap font-display text-sm font-semibold tracking-tight sm:block md:hidden lg:block">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm lg:gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="nav-link nav-link--bar"
                    aria-current={active === item.id ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary hidden px-4 py-2 sm:inline-flex">
              Get in touch
            </a>
            <button
              type="button"
              className="icon-btn md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          inert={!open}
          className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <nav aria-label="Mobile" className="overflow-hidden">
            <ul className="flex flex-col gap-1 pb-5 pt-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="nav-link block rounded-lg px-3 py-2.5 text-base hover:bg-primary/10"
                    aria-current={active === item.id ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
