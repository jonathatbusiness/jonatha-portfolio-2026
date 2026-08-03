"use client";

import { useEffect, useRef, useState } from "react";

export function RevealSection({
  children,
  className = "",
  id,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}>) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -16% 0px", threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`reveal-section ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </section>
  );
}
