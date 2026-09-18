import { ArrowUpRight } from "lucide-react";
import ProjectPreview, { type PreviewVariant } from "./ProjectPreview";

export default function ProjectCard({
  name,
  bullets,
  link,
  tools = [],
  preview,
}: {
  name: string;
  bullets: string[];
  link?: string;
  tools?: string[];
  preview: PreviewVariant;
}) {
  return (
    <article className="group rounded-lg border border-black/10 bg-black/[0.02] flex flex-col hover:border-black/30 transition-colors duration-200 overflow-hidden">
      <ProjectPreview variant={preview} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-display font-semibold text-black leading-snug">{name}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label="View project"
              className="shrink-0 text-neutral-500 hover:text-black transition-colors"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
            </a>
          )}
        </div>

        <ul className="space-y-2 flex-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
              <span className="text-neutral-600 shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-black/10">
            {tools.map((t, i) => (
              <span
                key={i}
                className="text-xs font-mono px-2 py-0.5 rounded border border-black/10 text-neutral-400"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
