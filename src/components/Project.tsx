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
    <article className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1422]/80 to-[#0a0d14]/80 hover:border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] p-8 flex flex-col transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex-1 relative z-10">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent group-hover:from-emerald-200 group-hover:to-pink-200 transition-all duration-300">
            {name}
          </h3>
        </div>
        
        <div className="space-y-4 mb-6">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 group/bullet">
              <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full mt-2.5 opacity-60 group-hover/bullet:opacity-100 transition-opacity"></div>
              <p className="text-slate-200/90 leading-relaxed group-hover/bullet:text-white transition-colors">{b}</p>
            </div>
          ))}
        </div>

        {tools.length > 0 && (
          <div className="mt-6 -mx-4 px-4">
            <div className="overflow-x-auto scroll-smooth">
              <div className="inline-flex gap-2 pr-4">
                {tools.map((t, i) => (
                  <span
                    key={i}
                    className="group/tool whitespace-nowrap inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-[#9aa4b2] bg-white/5 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300"
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
        <div className="mt-6 flex justify-start relative z-10">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium ring-1 ring-white/20 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-purple-500/20 hover:ring-emerald-400/30 transition-all duration-300 hover:scale-105"
          >
            <span>{link.includes("github.com") ? "View on GitHub" : "See Live Demo"}</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      )}
    </article>
  );
}
