import { profile } from "@/data/portfolio";

const widths = [480, 720, 960];
const srcSet = (ext: string) => widths.map((w) => `/images/shivam-${w}.${ext} ${w}w`).join(", ");
const sizes = "(min-width: 480px) 448px, calc(100vw - 32px)";

export function Portrait() {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:mr-0">
      {/* Offset frame behind the photo */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border border-line bg-surface-2 sm:translate-x-4 sm:translate-y-4"
      />

      <picture className="relative block overflow-hidden rounded-[28px] border border-line bg-surface-2">
        <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
        <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
        <img
          src="/images/shivam-720.jpg"
          srcSet={srcSet("jpg")}
          sizes={sizes}
          width={960}
          height={1200}
          alt={`Portrait of ${profile.name}`}
          decoding="async"
          className="aspect-[4/5] h-auto w-full object-cover"
        />
      </picture>

      <figcaption className="absolute bottom-5 left-5 hidden flex-wrap gap-1.5 sm:flex">
        {profile.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/15 bg-black/55 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md"
          >
            {s}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
