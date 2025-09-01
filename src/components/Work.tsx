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
    <article className="rounded-2xl border border-white/5 bg-[#0f1422]/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg md:text-xl font-semibold">
          {title} · {org}
        </h3>
        <div className="text-sm text-[#9aa4b2]">
          {start} — {end}
        </div>
      </div>
      <div className="text-sm text-[#9aa4b2]">{location}</div>
      <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-200/90">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
