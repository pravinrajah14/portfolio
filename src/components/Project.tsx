export default function ProjectCard({
  name,
  bullets,
  link,
  tools = [],
}: {
  name: string;
  bullets: string[];
  link?: string;
  tools?: string[];
}) {
  return (
    <article className="relative rounded-2xl border border-white/5 bg-[#0f1422]/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] p-6 flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-200/90">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {tools.length > 0 && (
          <div className="mt-4 -mx-6 px-6">
            <div className="overflow-x-auto scroll-smooth">
              <div className="inline-flex gap-2 pr-6">
                {tools.map((t, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-[#9aa4b2]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {link && (
        <div className="mt-4 flex justify-start">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/90">
              <img
                src={link.includes("github.com") ? "/github.png" : "/external.png"}
                alt={link.includes("github.com") ? "GitHub" : "External"}
                className="w-3.5 h-3.5"
              />
            </span>
            {link.includes("github.com") ? "GitHub" : "Live Demo"}
          </a>
        </div>
      )}
    </article>
  );
}
