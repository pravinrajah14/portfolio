"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  title?: string;
  meta?: string;  
  collapsedHeight?: number;   
  className?: string;
  children: React.ReactNode;
};

export default function Collapse({
  title,
  meta,
  collapsedHeight = 120,
  className = "",
  children,
}: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(collapsedHeight);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.scrollHeight;
      setContentHeight(h);
      setIsOverflowing(h > collapsedHeight + 4);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [collapsedHeight]);

  const maxH = expanded ? contentHeight : collapsedHeight;

  return (
    <div
      className={`rounded-2xl border border-white/5 bg-[#0f1422]/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] p-6 ${className}`}
    >
      {(title || meta) && (
        <div className="mb-3 flex items-baseline justify-between gap-3">
          {title ? <h3 className="text-lg md:text-xl font-semibold">{title}</h3> : <span />}
          {meta ? <div className="text-sm text-[#9aa4b2]">{meta}</div> : null}
        </div>
      )}

      <div
        ref={contentRef}
        style={{ maxHeight: maxH }}
        className="relative overflow-hidden transition-[max-height] duration-300"
      >
        {children}

        {!expanded && isOverflowing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f1422] to-transparent" />
        )}
      </div>

      {isOverflowing && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            <span>{expanded ? "Show less" : "Show more"}</span>
            <svg
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
