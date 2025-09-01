export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm text-[#9aa4b2]">
      {children}
    </span>
  );
}
