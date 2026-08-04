"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from "react-icons/fi";
import type { ProjectMedia } from "@/lib/content";

type GalleryItem = Pick<ProjectMedia, "src" | "alt" | "caption"> & { src: string };

export function MediaGallery({ items }: Readonly<{ items: GalleryItem[] }>) {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const hasMany = items.length > 1;
  const item = items[active];

  const previous = useCallback(() => setActive((current) => (current - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setActive((current) => (current + 1) % items.length), [items.length]);

  useEffect(() => {
    if (!modalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
      if (event.key === "ArrowLeft" && hasMany) previous();
      if (event.key === "ArrowRight" && hasMany) next();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [hasMany, modalOpen, next, previous]);

  if (!items.length) return null;

  const modal = (
    <div className="fixed inset-0 z-[999] flex min-h-dvh items-center justify-center bg-[rgba(17,24,39,0.88)] p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button className="absolute inset-0 cursor-default" onClick={() => setModalOpen(false)} type="button" aria-label="Close image" />
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-3">
        <div className="relative h-[min(68dvh,75vw)] max-h-[82dvh] w-full overflow-hidden rounded-2xl md:h-[82dvh]">
          <Image key={item.src} className="gallery-image-enter object-contain drop-shadow-2xl" src={item.src} alt={item.alt} fill sizes="100vw" />
        </div>
        <button className="absolute right-2 top-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#C68A1E] text-[var(--color-paper)] shadow-lg transition-colors hover:bg-[#A86F16]" onClick={() => setModalOpen(false)} type="button" aria-label="Close image">
          <FiX aria-hidden="true" />
        </button>
        {hasMany ? (
          <>
            <button className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/45 bg-[var(--color-paper)] text-[var(--color-graphite)] shadow-lg transition-all hover:scale-105 hover:border-[#C68A1E] hover:bg-[#C68A1E] hover:text-[var(--color-paper)] md:inline-flex lg:-left-16" onClick={previous} type="button" aria-label="Previous image">
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/45 bg-[var(--color-paper)] text-[var(--color-graphite)] shadow-lg transition-all hover:scale-105 hover:border-[#C68A1E] hover:bg-[#C68A1E] hover:text-[var(--color-paper)] md:inline-flex lg:-right-16" onClick={next} type="button" aria-label="Next image">
              <FiChevronRight aria-hidden="true" />
            </button>
            <div className="md:hidden">
              <GalleryControls active={active} count={items.length} onPrevious={previous} onNext={next} onSelect={setActive} light inlineCounter />
            </div>
            <div className="hidden md:block">
              <GalleryDots active={active} count={items.length} onSelect={setActive} light />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );

  return (
    <>
      <div className="grid gap-4">
        <figure className="grid gap-3">
          <button className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-linen)] text-left" onClick={() => setModalOpen(true)} type="button">
            <Image key={item.src} className="gallery-image-enter object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 44vw, 100vw" priority />
            <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--color-graphite)] text-[var(--color-paper)] shadow-lg transition-colors group-hover:bg-[#C68A1E]">
              <FiMaximize2 aria-hidden="true" />
            </span>
          </button>
          {item.caption ? <figcaption className="text-sm text-[var(--color-muted)]">{item.caption}</figcaption> : null}
        </figure>
        {hasMany ? (
          <GalleryControls active={active} count={items.length} onPrevious={previous} onNext={next} onSelect={setActive} />
        ) : null}
      </div>

      {modalOpen ? createPortal(modal, document.body) : null}
    </>
  );
}

function GalleryDots({
  active,
  count,
  onSelect,
  light = false,
}: Readonly<{
  active: number;
  count: number;
  onSelect: (index: number) => void;
  light?: boolean;
}>) {
  const dotClass = light ? "bg-white/35 data-[active=true]:bg-[#C68A1E]" : "bg-[var(--color-border)] data-[active=true]:bg-[var(--color-accent)]";

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button key={index} className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-300 hover:bg-[#C68A1E] data-[active=true]:w-7 ${dotClass}`} data-active={active === index} onClick={() => onSelect(index)} type="button" aria-label={`Go to image ${index + 1}`} />
        ))}
      </div>
      <p className={`text-sm font-semibold ${light ? "text-white/80" : "text-[var(--color-muted)]"}`}>
        {active + 1}-{count}
      </p>
    </div>
  );
}

function GalleryControls({
  active,
  count,
  onPrevious,
  onNext,
  onSelect,
  light = false,
  inlineCounter = false,
}: Readonly<{
  active: number;
  count: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  light?: boolean;
  inlineCounter?: boolean;
}>) {
  const buttonClass = light
    ? "border-white/25 bg-white/10 text-white hover:border-white"
    : "border-[var(--color-border)] text-[var(--color-graphite)] hover:border-[#C68A1E] hover:bg-[#C68A1E] hover:text-[var(--color-paper)]";
  const dotClass = light ? "bg-white/35 data-[active=true]:bg-white" : "bg-[var(--color-border)] data-[active=true]:bg-[var(--color-accent)]";

  const dots = (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button key={index} className={`h-2.5 w-2.5 rounded-full transition-all duration-300 data-[active=true]:w-7 ${dotClass}`} data-active={active === index} onClick={() => onSelect(index)} type="button" aria-label={`Go to image ${index + 1}`} />
      ))}
    </div>
  );

  const counter = <p className={`text-sm font-semibold ${light ? "text-white/80" : "text-[var(--color-muted)]"}`}>{active + 1}-{count}</p>;
  const previousButton = (
    <button className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all hover:scale-105 ${buttonClass}`} onClick={onPrevious} type="button" aria-label="Previous image">
      <FiChevronLeft aria-hidden="true" />
    </button>
  );
  const nextButton = (
    <button className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all hover:scale-105 ${buttonClass}`} onClick={onNext} type="button" aria-label="Next image">
      <FiChevronRight aria-hidden="true" />
    </button>
  );

  if (inlineCounter) {
    return (
      <div className="flex items-center justify-center gap-4">
        {previousButton}
        <div className="flex min-w-24 flex-col items-center gap-2">
          {dots}
          {counter}
        </div>
        {nextButton}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-4">
        {previousButton}
        {dots}
        {nextButton}
      </div>
      {counter}
    </div>
  );
}
