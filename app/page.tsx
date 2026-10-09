import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { TechMarquee } from "@/components/tech-marquee";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-raised focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="blob-a absolute -top-48 left-[calc(50%-26rem)] h-[34rem] w-[52rem] rounded-full bg-primary/15 blur-[130px]" />
        <div className="blob-b absolute top-1/3 -right-48 size-[28rem] rounded-full bg-secondary/15 blur-[130px]" />
      </div>

      <SiteHeader />
      {/* overflow-x-clip: side-entering reveals must not widen the page. */}
      <main id="main" className="flex-1 overflow-x-clip">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
