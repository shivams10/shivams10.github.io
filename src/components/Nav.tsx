import { nav, profile } from "@/data/portfolio";
import { Download } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/65">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span aria-hidden className="grid size-9 place-items-center rounded-lg bg-fg font-display text-sm font-bold tracking-tight text-bg transition-transform group-hover:-rotate-6">
            {profile.initials}
          </span>
          <span className="sr-only font-display text-[15px] font-semibold tracking-tight sm:not-sr-only">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <Download width={16} height={16} />
            Résumé
          </a>
        </div>
      </div>
      <div aria-hidden className="scroll-progress absolute right-0 -bottom-px left-0 h-0.5 bg-accent" />
    </header>
  );
}
