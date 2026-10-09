import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-dim sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-fg"
          >
            <GitHubIcon className="size-[1.125rem]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-fg"
          >
            <LinkedInIcon className="size-[1.125rem]" />
          </a>
          <a href="#top" className="font-mono text-xs transition-colors hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
