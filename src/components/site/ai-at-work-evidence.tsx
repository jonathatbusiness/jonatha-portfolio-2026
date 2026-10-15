"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import { FiExternalLink, FiMinus, FiPlus, FiX } from "react-icons/fi";
import type { Locale } from "@/lib/content";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Evidence = {
  title: string;
  description: string;
  image: string;
  pdf: string;
};

const COURSE_URL = "/projects/ai-at-work/course/index.html";

export function AiAtWorkEvidence({ locale }: Readonly<{ locale: Locale }>) {
  const pt = locale === "pt-br";

  const [mounted, setMounted] = useState(false);
  const [pdf, setPdf] = useState<string | null>(null);
  const [course, setCourse] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const modalOpen = Boolean(pdf || course);

  const items: Evidence[] = [
    {
      title: pt ? "Roteiro de produção audiovisual" : "Video Production Script",
      description: pt
        ? "Roteiro, narração, direções visuais e storyboard."
        : "Script, narration, visual directions, and storyboard.",
      image: "/projects/ai-at-work/video-script-preview.webp",
      pdf: "/projects/ai-at-work/video-script.pdf",
    },
    {
      title: pt
        ? "Roteiro de design instrucional"
        : "Instructional Design Script",
      description: pt
        ? "Estrutura de aprendizagem, conteúdo, interações e avaliação."
        : "Learning structure, instructional content, interactions, and assessment.",
      image: "/projects/ai-at-work/instructional-script-preview.webp",
      pdf: "/projects/ai-at-work/instructional-design-script.pdf",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPdf(null);
        setCourse(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!pdf) return;

    const container = pdfContainerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(container);
    setContainerWidth(container.clientWidth);

    return () => observer.disconnect();
  }, [pdf]);

  const openPdf = (url: string) => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setNumPages(0);
    setScale(1);
    setPdf(url);
  };

  const openCourse = () => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setCourse(true);
  };

  const closeModal = () => {
    setPdf(null);
    setCourse(false);
  };

  const pageWidth = Math.max(200, Math.min(850, containerWidth - 32));

  const modalContent = modalOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-black/90 p-2 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label={
        pdf
          ? pt
            ? "Visualizador de PDF"
            : "PDF viewer"
          : pt
            ? "Visualizador do curso"
            : "Course viewer"
      }
    >
      <div className="flex shrink-0 items-center justify-between gap-3 pb-3">
        <span className="truncate text-sm font-semibold text-white">
          {pdf
            ? pt
              ? "Documento do projeto"
              : "Project document"
            : "AI at Work: Think Before You Prompt"}
        </span>

        <div className="flex shrink-0 items-center gap-2">
          {pdf && (
            <a
              href={pdf}
              download
              className="cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black"
            >
              Download
            </a>
          )}

          {course && (
            <a
              href={COURSE_URL}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black"
            >
              <FiExternalLink className="mr-2 inline" />
              {pt ? "Nova aba" : "Open in new tab"}
            </a>
          )}

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeModal}
            aria-label={pt ? "Fechar" : "Close"}
            className="cursor-pointer rounded-lg bg-[var(--color-accent)] p-3 text-white"
          >
            <FiX />
          </button>
        </div>
      </div>

      {pdf && (
        <>
          <div
            ref={pdfContainerRef}
            className="min-h-0 flex-1 overflow-auto rounded-lg bg-neutral-700"
          >
            <Document
              key={pdf}
              file={pdf}
              loading={
                <p className="p-6 text-center text-white">
                  {pt ? "Carregando PDF..." : "Loading PDF..."}
                </p>
              }
              error={
                <p className="p-6 text-center text-white">
                  {pt ? "Erro ao carregar PDF." : "Unable to load PDF."}
                </p>
              }
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              className="flex flex-col items-center gap-4 py-4"
            >
              {Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={index + 1}
                  pageNumber={index + 1}
                  width={pageWidth}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-lg"
                />
              ))}
            </Document>
          </div>

          <div className="flex shrink-0 items-center justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={() =>
                setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(1)))
              }
              className="cursor-pointer rounded-lg bg-white p-3 text-black"
              aria-label="Zoom out"
            >
              <FiMinus />
            </button>

            <span className="min-w-14 text-center text-sm text-white">
              {Math.round(scale * 100)}%
            </span>

            <button
              type="button"
              onClick={() =>
                setScale((s) => Math.min(2, +(s + 0.2).toFixed(1)))
              }
              className="cursor-pointer rounded-lg bg-white p-3 text-black"
              aria-label="Zoom in"
            >
              <FiPlus />
            </button>

            <button
              type="button"
              onClick={() => setScale(1)}
              className="rounded-lg bg-white px-3 py-3 text-sm text-black"
            >
              Reset
            </button>

            <span className="text-sm text-white">
              {numPages} {pt ? "páginas" : "pages"}
            </span>
          </div>
        </>
      )}

      {course && (
        <iframe
          src={COURSE_URL}
          title="AI at Work interactive microlearning"
          className="min-h-0 w-full flex-1 rounded-lg border-0 bg-white"
          allowFullScreen
        />
      )}
    </div>
  ) : null;

  return (
    <div className="lg:col-span-2">
      <h2 className="mb-6 text-3xl font-semibold">
        {pt ? "Explore o projeto" : "Explore the Project"}
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.pdf}
            type="button"
            onClick={() => openPdf(item.pdf)}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-linen)]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
                {pt ? "Ver documento" : "View Document"} ↗
              </span>
            </div>
          </button>
        ))}

        <button
          type="button"
          onClick={openCourse}
          className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] text-left md:col-span-2"
        >
          <div className="relative aspect-[16/7] overflow-hidden bg-[var(--color-linen)]">
            <Image
              src="/projects/ai-at-work/course-preview.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-top transition-transform group-hover:scale-[1.02]"
            />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-semibold">
              {pt ? "Microlearning interativo" : "Interactive Microlearning"}
            </h3>

            <p className="mt-2 leading-7 text-[var(--color-muted)]">
              {pt
                ? "Explore a experiência completa desenvolvida com DiscereNow."
                : "Explore the complete learning experience developed with DiscereNow."}
            </p>

            <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">
              {pt ? "Abrir curso" : "Launch Course"} ↗
            </span>
          </div>
        </button>
      </div>

      {mounted && modalContent
        ? createPortal(modalContent, document.body)
        : null}
    </div>
  );
}
