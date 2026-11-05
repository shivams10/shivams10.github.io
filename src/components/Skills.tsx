import type { CSSProperties } from "react";
import {
  achievements,
  certifications,
  education,
  skills,
} from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      aria-labelledby="skills-title"
      id="skills"
      className="border-t border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading
          id="skills-title"
          index="03"
          label="Toolkit"
          title="React at the core, with enough backend and DevOps to ship the whole thing."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="reveal bg-surface p-6 sm:p-7">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {g.group}
              </h3>
              <ul className="flex flex-wrap gap-x-1.5 gap-y-2">
                {g.items.map((s, i) => (
                  <li
                    key={s}
                    className="chip rounded-full bg-surface-2 px-3 py-1 text-sm"
                    style={{ "--i": i } as CSSProperties}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="reveal">
            <h3 className="mb-5 font-display text-xl font-semibold tracking-tight">
              Education
            </h3>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="leading-snug">{e.title}</p>
                  <p className="mt-1 text-sm text-muted">{e.place}</p>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="mb-5 font-display text-xl font-semibold tracking-tight">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
                >
                  <span className="leading-snug">{c.title}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 className="mb-5 font-display text-xl font-semibold tracking-tight">
              Achievements
            </h3>
            <ul className="space-y-5">
              {achievements.map((a) => (
                <li key={a.title}>
                  <p className="leading-snug">{a.title}</p>
                  {a.detail ? (
                    <p className="mt-1 text-sm text-muted">{a.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 mb-3 font-display text-xl font-semibold tracking-tight">
              Languages
            </h3>
            <p className="text-muted">
              English and Hindi, full professional proficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
