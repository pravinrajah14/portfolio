export default function Work({
  title,
  org,
  location,
  start,
  end,
  bullets,
}: {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}) {
  return (
    <article className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1422]/80 to-[#0a0d14]/80 hover:border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] p-8 transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
            {title} at {org}
          </h3>
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
            <span className="text-[#9aa4b2] group-hover:text-white transition-colors">{start} — {end}</span>
          </div>
        </div>
        
        <div className="text-sm text-emerald-400 mb-6">
          {location}
        </div>
        
        <div className="space-y-4">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 group/bullet">
              <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2.5 opacity-60 group-hover/bullet:opacity-100 transition-opacity"></div>
              <p className="text-slate-200/90 leading-relaxed group-hover/bullet:text-white transition-colors">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
