import type { CSSProperties } from "react";
import { profile, stats } from "@/data/portfolio";
import { ArrowDown, GitHub, LinkedIn, Mail } from "./icons";
import { Portrait } from "./Portrait";

const d = (i: number) => ({ "--i": i }) as CSSProperties;

/** "53M+" -> { pre: "", n: 53, post: "M+" }. Ranges like "6–7" are left static. */
function splitStat(value: string) {
  const m = value.match(/^(\d+)(\D*)$/);
  return m ? { n: Number(m[1]), post: m[2] } : null;
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      data-glow
      className="relative isolate flex flex-col overflow-hidden lg:min-h-[calc(100svh-4rem)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
      </div>
      <div
        className="grid-bg pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="hero-spot -z-10" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:flex-1 lg:grid-cols-[1.1fr_1fr] lg:content-center lg:items-center lg:gap-12 lg:py-[clamp(1rem,4svh,5rem)]">
        <div className="min-w-0">
          <p className="mb-7 short:mb-5 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted">
            <span
              className="pulse-dot size-2 rounded-full bg-accent"
              aria-hidden
            />
            Now: {profile.currentRole}
          </p>

          <h1
            id="hero-title"
            className="font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem] short:text-[3.5rem]"
          >
            {profile.name}
            <span className="mt-3 block text-[0.52em] font-medium leading-tight tracking-[-0.02em] text-muted">
              {profile.role}
            </span>
          </h1>

          <p className="mt-7 short:mt-5 max-w-xl text-xl leading-snug text-fg text-pretty sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted text-pretty">
            {profile.intro}
          </p>

          <div className="mt-9 short:mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowDown width={16} height={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 font-medium transition-colors hover:border-fg"
            >
              <Mail width={16} height={16} />
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub profile"
                className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <GitHub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div
          className="rise min-w-0 lg:w-[min(100%,28rem,calc((100svh-17rem)*0.8))] lg:justify-self-end"
          style={d(1)}
        >
          <Portrait />
        </div>
      </div>

      <div className="border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-line min-[360px]:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => {
            const parts = splitStat(s.value);
            return (
              <div
                key={s.label}
                className="flex flex-col-reverse justify-end bg-surface px-3 py-7 short:py-5 min-[400px]:px-4 sm:px-6"
              >
                <dt className="mt-1 text-[13px] leading-snug text-muted min-[400px]:text-sm">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                  {parts ? (
                    <>
                      <span
                        className="count"
                        style={{ "--to": parts.n } as CSSProperties}
                      >
                        {parts.n}
                      </span>
                      {parts.post}
                    </>
                  ) : (
                    s.value
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
