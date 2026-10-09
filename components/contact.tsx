import {
  ArrowUpRightIcon,
  ChatIcon,
  PhoneIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { profile } from "@/lib/site";

const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const channels = [
  {
    label: "LinkedIn",
    value: handle(profile.linkedin),
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: handle(profile.github),
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    icon: PhoneIcon,
    external: false,
  },
  {
    label: "WhatsApp",
    value: profile.phoneDisplay,
    href: `https://wa.me/${profile.phone.slice(1)}`,
    icon: ChatIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent."
      lead="Have an internship, a project or a hard problem in mind? Send a message — I'd be glad to hear about it."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
        <ul className="reveal space-y-4 lg:col-span-2" data-reveal="left">
          {channels.map(({ label, value, href, icon: ChannelIcon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card group flex items-center gap-4 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-raised text-primary">
                  <ChannelIcon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-sm font-semibold">{label}</span>
                  <span className="block truncate font-mono text-xs text-muted">{value}</span>
                </span>
                <ArrowUpRightIcon className="size-4 shrink-0 text-dim transition-colors group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>

        <div className="reveal lg:col-span-3" data-reveal="right">
          <ContactForm email={profile.email} />
        </div>
      </div>
    </Section>
  );
}
