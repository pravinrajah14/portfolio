import Collapse from "./ui/Collapse";

export default function Skills({
  title,
  items,
  asList = false,
  collapsedHeight = 120,
}: {
  title: string;
  items: string[];
  asList?: boolean; 
  collapsedHeight?: number;
}) {
  return (
    <Collapse title={title} collapsedHeight={collapsedHeight}>
      {asList ? (
        <ul className="list-disc pl-5 space-y-1 text-slate-200/90">
          {items.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-wrap gap-2">
          {items.map((x, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm text-[#9aa4b2]"
            >
              {x}
            </span>
          ))}
        </div>
      )}
    </Collapse>
  );
}
