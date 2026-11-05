import { projects, type Project } from "@/data/portfolio";
import { ArrowUpRight, GitHub } from "./icons";
import { ProjectShot } from "./ProjectShot";
import { SectionHeading } from "./SectionHeading";

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on ${l.label}`}
          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-sm transition-colors hover:border-fg"
        >
          {l.label === "GitHub" ? <GitHub width={15} height={15} /> : null}
          {l.label}
          <ArrowUpRight width={14} height={14} className="text-muted" />
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      data-glow
      className="reveal card-glow relative grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[1.35fr_1fr]"
    >
      <div className="p-6 sm:p-10">
        <p className="mb-5 font-mono text-xs text-accent">
          Featured · {project.repo}
        </p>
        <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-lg text-fg">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted text-pretty">
          {project.description}
        </p>
        <ul className="mt-6 space-y-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="relative pl-5 text-sm leading-relaxed text-muted"
            >
              <span
                className="absolute top-[0.65em] left-0 h-px w-2.5 bg-accent"
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-7 space-y-5">
          <Chips items={project.stack} />
          <Links project={project} />
        </div>
      </div>

      {project.metrics?.length ? (
        <dl className="grid auto-rows-fr gap-px border-t border-line bg-line lg:border-t-0 lg:border-l">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col justify-center bg-surface-2 p-6 sm:p-10"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {m.label}
              </dt>
              <dd className="mt-2 font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  );
}

function ProjectCard({ project, n }: { project: Project; n: number }) {
  return (
    <article
      data-glow
      className="reveal card-glow group relative flex flex-col rounded-2xl border border-line bg-surface p-4 transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-muted hover:shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)] sm:p-5"
    >
      {project.image ? (
        <ProjectShot
          name={project.image.name}
          alt={project.image.alt}
          title={project.name}
        />
      ) : null}
      <div className="flex flex-1 flex-col px-2 pt-6 pb-2 sm:px-3 sm:pt-7">
        <div className="mb-5 flex items-center justify-between font-mono text-xs text-muted">
          <span>{project.repo}</span>
          <span aria-hidden>{String(n).padStart(2, "0")}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-1 text-fg">{project.tagline}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted text-pretty">
          {project.description}
        </p>
        <ul className="mt-5 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="relative pl-5 text-sm leading-relaxed text-muted"
            >
              <span
                className="absolute top-[0.65em] left-0 h-px w-2.5 bg-accent"
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-5 pt-7">
          <Chips items={project.stack} />
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      aria-labelledby="projects-title"
      id="projects"
      className="border-t border-line bg-surface-2/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading
          id="projects-title"
          index="02"
          label="Projects"
          title="Things I build on my own time, mostly AI tooling and developer experience."
        />
        <div className="space-y-6">
          {featured.map((p) => (
            <FeaturedProject key={p.repo} project={p} />
          ))}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <ProjectCard key={p.repo} project={p} n={i + 2} />
            ))}
          </div>
        </div>
        <p className="reveal mt-10 text-sm text-muted">
          More on GitHub:{" "}
          <a
            href="https://github.com/shivams10?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline underline-offset-4 hover:text-accent"
          >
            github.com/shivams10
          </a>
        </p>
      </div>
    </section>
  );
}
