import { experience, type Job } from "@/data/portfolio";
import { ArrowUpRight } from "./icons";
import { ProjectShot } from "./ProjectShot";
import { SectionHeading } from "./SectionHeading";

function ExternalName({
  name,
  url,
  className,
}: {
  name: string;
  url?: string;
  className?: string;
}) {
  if (!url) return <span className={className}>{name}</span>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 underline-offset-4 hover:underline ${className ?? ""}`}
    >
      {name}
      <ArrowUpRight
        width={15}
        height={15}
        className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((p) => (
        <li
          key={p}
          className="relative pl-5 leading-relaxed text-muted text-pretty"
        >
          <span
            className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent"
            aria-hidden
          />
          {p}
        </li>
      ))}
    </ul>
  );
}

function JobEntry({ job, current }: { job: Job; current: boolean }) {
  return (
    <li className="reveal relative grid gap-4 border-t border-line py-10 md:grid-cols-[13rem_1fr] md:gap-10">
      <span
        aria-hidden
        className="timeline-dot absolute top-[2.65rem] -left-6 size-2.5 -translate-x-1/2 overflow-hidden rounded-full bg-line ring-4 ring-bg sm:-left-10"
      />
      <div>
        <p className="font-mono text-xs tracking-wide text-muted">
          {job.period}
        </p>
        {current ? (
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-0.5 font-mono text-[11px] text-fg">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Current
          </p>
        ) : null}
      </div>

      <div>
        <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          <ExternalName name={job.company} url={job.url} />
        </h3>
        <p className="mt-1 text-fg">{job.role}</p>
        {job.summary ? (
          <p className="mt-1 text-sm text-muted">{job.summary}</p>
        ) : null}

        <div className="mt-5">
          <Bullets items={job.points} />
        </div>

        {job.image ? (
          <div className="mt-7 max-w-xl">
            <ProjectShot
              dir="work"
              name={job.image.name}
              alt={job.image.alt}
              title={job.company}
              thumbSizes="(min-width: 768px) 576px, calc(100vw - 72px)"
            />
          </div>
        ) : null}

        {job.clients?.length ? (
          <div className="mt-8 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Client work
            </p>
            {job.clients.map((c) => (
              <article
                key={c.name}
                className="rounded-xl border border-line bg-surface p-5 sm:p-6"
              >
                <div
                  className={
                    c.image
                      ? "grid gap-5 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-7"
                      : undefined
                  }
                >
                  <div className="min-w-0">
                    <header className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-display text-xl font-semibold tracking-tight">
                        <ExternalName name={c.name} url={c.url} />
                      </h4>
                      <p className="text-sm text-muted">{c.blurb}</p>
                    </header>
                    <Bullets items={c.points} />
                  </div>
                  {c.image ? (
                    <div className="order-first md:order-none">
                      <ProjectShot
                        dir="work"
                        name={c.image.name}
                        alt={c.image.alt}
                        title={c.name}
                        thumbSizes="(min-width: 768px) 240px, calc(100vw - 88px)"
                      />
                    </div>
                  ) : null}
                </div>

                {c.app ? (
                  <div className="mt-6 border-t border-line pt-5">
                    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                        Mobile app
                      </p>
                      <a
                        href={c.app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                      >
                        {c.app.label} on Google Play
                        <ArrowUpRight width={14} height={14} />
                      </a>
                    </div>
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {c.app.shots.map((shot) => (
                        <li key={shot.name}>
                          <ProjectShot
                            dir="work"
                            name={shot.name}
                            alt={shot.alt}
                            title={`${c.name} app`}
                            ratio={1284 / 2778}
                            thumbWidths={[360, 720]}
                            fullWidths={[360, 720, 1080]}
                            thumbSizes="(min-width: 640px) 180px, 42vw"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section
      aria-labelledby="experience-title"
      id="experience"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        id="experience-title"
        index="01"
        label="Experience"
        title="Four years of shipping to production, for users and for clients."
      />
      <div className="timeline relative border-b border-line pl-6 sm:pl-10">
        <span
          aria-hidden
          className="timeline-rail absolute top-0 bottom-0 left-0 w-px overflow-hidden bg-line"
        />
        <ol>
          {experience.map((job, i) => (
            <JobEntry key={job.company} job={job} current={i === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}
