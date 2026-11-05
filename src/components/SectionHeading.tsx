import { Fragment, type CSSProperties } from "react";

export function SectionHeading({
  index,
  label,
  title,
  id,
}: {
  index: string;
  label: string;
  title: string;
  id: string;
}) {
  const words = title.split(" ");
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <p className="reveal mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {index} <span className="text-muted">/ {label}</span>
      </p>
      <h2 id={id} className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="word" style={{ "--i": i } as CSSProperties}>
              {word}
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </h2>
    </div>
  );
}
