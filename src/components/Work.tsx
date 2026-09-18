export default function Work({
  title,
  org,
  location,
  start,
  end,
  bullets,
  isLast = false,
}: {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-black ring-4 ring-black/10" />
      {!isLast && (
        <span className="absolute left-[3.5px] top-5 bottom-[-2.5rem] w-[3px] bg-black/15" />
      )}

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
        <h3 className="font-display font-semibold text-black text-lg">
          {title} <span className="text-neutral-400 font-body font-normal">· {org}</span>
        </h3>
        <span className="text-xs text-neutral-400 tabular-nums whitespace-nowrap">
          {start} – {end}
        </span>
      </div>
      <div className="text-xs text-neutral-500 mb-4">{location}</div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
            <span className="text-neutral-600 shrink-0">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
