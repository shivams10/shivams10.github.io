import { profile } from "@/data/portfolio";
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "./icons";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github, Icon: GitHub, external: true },
  { label: "LinkedIn", value: "Shivam Shukla", href: profile.linkedin, Icon: LinkedIn, external: true },
  { label: "Résumé", value: "Download PDF", href: profile.resume, Icon: Download, external: false, download: true },
];

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="border-t border-line bg-fg text-bg">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.18em] opacity-75">04 / Contact</p>
        <h2
          id="contact-title"
          className="reveal max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-balance sm:text-7xl"
        >
          Got a product that needs to feel fast? Let&apos;s talk.
        </h2>
        <p className="reveal mt-6 max-w-xl text-lg leading-relaxed opacity-70">
          I&apos;m happy to talk about frontend roles, performance work or AI tooling. Email is the quickest way to reach me.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="reveal group mt-10 inline-flex items-center gap-3 border-b-2 border-current pb-1 font-display text-2xl font-semibold tracking-tight break-all transition-opacity hover:opacity-75 sm:break-normal sm:text-4xl"
        >
          {profile.email}
          <ArrowUpRight width={28} height={28} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <ul className="reveal mt-16 grid gap-px overflow-hidden rounded-2xl bg-bg/15 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon, external, download }) => (
            <li key={label} className="bg-fg">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "me noopener noreferrer" } : {})}
                {...(download ? { download: true } : {})}
                className="flex h-full items-center gap-4 p-6 transition-colors hover:bg-bg/8"
              >
                <Icon width={20} height={20} className="shrink-0 opacity-70" />
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.16em] opacity-75">{label}</span>
                  <span className="mt-0.5 block truncate">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
