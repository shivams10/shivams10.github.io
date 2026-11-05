"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Props = {
  name: string;
  alt: string;
  title: string;
  /** Folder under /public/images holding `${name}-{width}.{avif,webp}` files. */
  dir?: string;
  /** `sizes` for the thumbnail; defaults to the project-card width. */
  thumbSizes?: string;
  /** Image aspect ratio (width / height). 1.6 = 16:10 desktop screenshot. */
  ratio?: number;
  /** Widths generated for the thumbnail and the enlarged view. */
  thumbWidths?: number[];
  fullWidths?: number[];
};

const defaultThumbSizes = "(min-width: 768px) 540px, calc(100vw - 32px)";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Project screenshot that opens in a lightbox.
 * Uses the View Transitions API to morph the thumbnail into the enlarged image,
 * with a CSS fade/scale fallback. Native <dialog> provides focus handling,
 * Esc-to-close and focus return.
 */
export function ProjectShot({
  name,
  alt,
  title,
  dir = "projects",
  thumbSizes = defaultThumbSizes,
  ratio = 1.6,
  thumbWidths = [720, 1280],
  fullWidths = [720, 1280, 1920],
}: Props) {
  // Enlarged view: as wide as possible while staying within 78% of the viewport height.
  const frameWidth = `min(100%, 1400px, calc(78dvh * ${ratio}))`;
  const fullSizes = `min(92vw, 1400px, calc(78dvh * ${ratio}))`;
  const thumbMax = thumbWidths[thumbWidths.length - 1];
  const fullMax = fullWidths[fullWidths.length - 1];
  const set = (ext: string, widths: number[]) =>
    widths.map((w) => `/images/${dir}/${name}-${w}.${ext} ${w}w`).join(", ");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const fullImgRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = useState(false);
  // Render the full-size image only once the user shows intent (hover/focus/touch).
  const [armed, setArmed] = useState(false);
  // Load the thumbnail only when it gets within 600px of the viewport. Native lazy-loading
  // starts ~1250px early on mobile, which pulls below-the-fold images into the initial load.
  const [near, setNear] = useState(false);
  const busy = useRef(false);
  const vtName = `shot-${name}`;

  const canMorph = () =>
    typeof document.startViewTransition === "function" &&
    !prefersReducedMotion();

  async function openLightbox() {
    const dialog = dialogRef.current;
    const thumb = thumbRef.current;
    if (!dialog || !thumb || busy.current || dialog.open) return;
    busy.current = true;

    if (!armed) flushSync(() => setArmed(true));
    // Give the large image a moment to decode so the morph lands on real pixels.
    await Promise.race([
      fullImgRef.current?.decode().catch(() => undefined),
      new Promise((r) => setTimeout(r, 350)),
    ]);

    const show = () => {
      thumb.style.viewTransitionName = "";
      flushSync(() => setOpen(true));
      dialog.showModal();
    };

    if (canMorph()) {
      dialog.dataset.anim = "morph";
      thumb.style.viewTransitionName = vtName;
      await document.startViewTransition(show).finished.catch(() => undefined);
    } else {
      dialog.dataset.anim = prefersReducedMotion() ? "none" : "fade";
      show();
    }
    busy.current = false;
  }

  async function closeLightbox() {
    const dialog = dialogRef.current;
    const thumb = thumbRef.current;
    if (!dialog || !thumb || busy.current || !dialog.open) return;
    busy.current = true;

    const hide = () => {
      flushSync(() => setOpen(false));
      dialog.close();
      thumb.style.viewTransitionName = vtName;
    };

    if (canMorph()) {
      await document.startViewTransition(hide).finished.catch(() => undefined);
      thumb.style.viewTransitionName = "";
    } else if (!prefersReducedMotion()) {
      dialog.dataset.closing = "true";
      await new Promise((r) => setTimeout(r, 180));
      delete dialog.dataset.closing;
      hide();
      thumb.style.viewTransitionName = "";
    } else {
      hide();
      thumb.style.viewTransitionName = "";
    }
    busy.current = false;
  }

  useEffect(() => {
    const el = thumbRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Esc fires "cancel" on the dialog: run our animated close instead of the instant one.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      void closeLightbox();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  });

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        onPointerEnter={() => setArmed(true)}
        onFocus={() => setArmed(true)}
        onTouchStart={() => setArmed(true)}
        aria-haspopup="dialog"
        aria-label={`Enlarge screenshot: ${alt}`}
        className="group/shot relative block w-full cursor-zoom-in rounded-xl text-left"
      >
        <span
          ref={thumbRef}
          className="block overflow-hidden rounded-xl border border-line bg-surface-2"
        >
          {near ? (
            <picture>
              <source
                type="image/avif"
                srcSet={set("avif", thumbWidths)}
                sizes={thumbSizes}
              />
              <img
                src={`/images/${dir}/${name}-${thumbWidths[0]}.webp`}
                srcSet={set("webp", thumbWidths)}
                sizes={thumbSizes}
                width={thumbMax}
                height={Math.round(thumbMax / ratio)}
                alt=""
                decoding="async"
                style={{ aspectRatio: ratio }}
                className="h-auto w-full object-cover object-top transition-transform duration-500 ease-out group-hover/shot:scale-[1.025]"
              />
            </picture>
          ) : (
            // Same box as the image, so nothing shifts when it loads.
            <span className="block w-full" style={{ aspectRatio: ratio }} />
          )}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[11px] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          View
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="shot-dialog"
        aria-label={`${title} screenshot`}
        onClick={(e) => {
          // Anything except the image itself closes the lightbox.
          if (!(e.target as Element).closest("[data-keep-open]"))
            void closeLightbox();
        }}
      >
        <button
          type="button"
          aria-label="Close"
          className="fixed top-4 right-4 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <figure
          className="shot-frame flex flex-col items-center gap-4"
          style={{ width: frameWidth }}
        >
          <span
            data-keep-open
            className="block w-full cursor-default overflow-hidden rounded-xl bg-neutral-900 shadow-[0_40px_120px_-20px_rgb(0_0_0/0.7)] ring-1 ring-white/10 sm:rounded-2xl"
            style={{ viewTransitionName: open ? vtName : undefined }}
          >
            {armed ? (
              <picture>
                <source
                  type="image/avif"
                  srcSet={set("avif", fullWidths)}
                  sizes={fullSizes}
                />
                <img
                  ref={fullImgRef}
                  src={`/images/${dir}/${name}-${fullWidths[Math.min(1, fullWidths.length - 1)]}.webp`}
                  srcSet={set("webp", fullWidths)}
                  sizes={fullSizes}
                  width={fullMax}
                  height={Math.round(fullMax / ratio)}
                  alt={alt}
                  decoding="async"
                  style={{ aspectRatio: ratio }}
                  className="block h-auto w-full object-cover object-top"
                />
              </picture>
            ) : null}
          </span>
          <figcaption className="max-w-2xl px-2 text-center text-sm leading-relaxed text-white/75">
            {alt}
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
