export type PreviewVariant = "systolic" | "kernel" | "candles" | "nodes" | "road" | "router";

function Road() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full">
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={200 + (i - 1.5) * 20}
          y1="14"
          x2={200 + (i - 1.5) * 110}
          y2="150"
          stroke="#000"
          strokeOpacity="0.35"
          strokeDasharray={i === 0 || i === 3 ? undefined : "4 5"}
        />
      ))}
      <rect x="168" y="38" width="20" height="14" fill="none" stroke="#000" strokeOpacity="0.55" />
      <rect x="205" y="70" width="34" height="22" fill="none" stroke="#000" strokeOpacity="0.55" />
      <rect x="140" y="104" width="52" height="34" fill="none" stroke="#000" strokeOpacity="0.7" />
      <line x1="215" y1="92" x2="215" y2="52" stroke="#000" strokeOpacity="0.6" strokeDasharray="2 3" />
    </svg>
  );
}

function Router() {
  const experts = [24, 52, 80, 108, 136];
  const weights = [0.15, 0.6, 0.3, 0.7, 0.2];
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full">
      <circle cx="40" cy="80" r="8" fill="none" stroke="#000" strokeOpacity="0.7" />
      <rect x="90" y="66" width="36" height="28" fill="none" stroke="#000" strokeOpacity="0.7" />
      {experts.map((y, i) => (
        <g key={y}>
          <line x1="126" y1="80" x2="260" y2={y} stroke="#000" strokeOpacity={weights[i]} />
          <rect x="260" y={y - 10} width="70" height="20" fill="none" stroke="#000" strokeOpacity="0.5" />
        </g>
      ))}
      <line x1="48" y1="80" x2="90" y2="80" stroke="#000" strokeOpacity="0.5" />
    </svg>
  );
}

function Systolic() {
  const cols = 8;
  const rows = 4;
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const x = 30 + c * 46;
          const y = 24 + r * 36;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="30"
              height="22"
              rx="2"
              fill="none"
              stroke="#000"
              strokeOpacity={0.15 + ((r + c) % 3) * 0.1}
            />
          );
        })
      )}
      {Array.from({ length: rows }).map((_, r) => (
        <line
          key={`h-${r}`}
          x1="15"
          y1={35 + r * 36}
          x2="385"
          y2={35 + r * 36}
          stroke="#000"
          strokeOpacity="0.35"
          strokeDasharray="2 4"
        />
      ))}
    </svg>
  );
}

function Kernel() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full">
      <circle cx="200" cy="80" r="34" fill="none" stroke="#000" strokeOpacity="0.5" />
      <circle cx="200" cy="80" r="6" fill="#000" fillOpacity="0.7" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + 34 * Math.cos(rad);
        const y1 = 80 + 34 * Math.sin(rad);
        const x2 = 200 + 74 * Math.cos(rad);
        const y2 = 80 + 74 * Math.sin(rad);
        return (
          <g key={deg}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000" strokeOpacity="0.35" />
            <rect
              x={x2 - 9}
              y={y2 - 9}
              width="18"
              height="18"
              fill="none"
              stroke="#000"
              strokeOpacity="0.55"
            />
          </g>
        );
      })}
    </svg>
  );
}

function Candles() {
  const bars = [40, 65, 30, 80, 55, 95, 45, 70, 60, 100, 50, 75];
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full">
      <line x1="20" y1="20" x2="20" y2="140" stroke="#000" strokeOpacity="0.3" />
      <line x1="20" y1="140" x2="385" y2="140" stroke="#000" strokeOpacity="0.3" />
      {bars.map((h, i) => {
        const x = 35 + i * 29;
        const y = 140 - h;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="14"
            height={h}
            fill="none"
            stroke="#000"
            strokeOpacity={0.3 + (i % 4) * 0.15}
          />
        );
      })}
      <polyline
        points={bars.map((h, i) => `${42 + i * 29},${140 - h - 6}`).join(" ")}
        fill="none"
        stroke="#000"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Nodes() {
  const points = [
    [60, 40], [180, 30], [300, 50], [340, 100], [230, 130], [100, 120], [40, 90], [200, 80],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [1, 7], [4, 7], [7, 2],
  ];
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke="#000"
          strokeOpacity="0.25"
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 7 ? 7 : 4.5} fill="none" stroke="#000" strokeOpacity="0.7" />
      ))}
    </svg>
  );
}

export default function ProjectPreview({ variant }: { variant: PreviewVariant }) {
  const Comp = { systolic: Systolic, kernel: Kernel, candles: Candles, nodes: Nodes, road: Road, router: Router }[variant];
  return (
    <div className="relative w-full aspect-[5/2] rounded-t-lg border-b border-black/10 bg-black/[0.02] overflow-hidden">
      <Comp />
    </div>
  );
}
