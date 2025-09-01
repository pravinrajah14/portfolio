import { ReactNode } from "react";

export default function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-white/5 bg-[#0f1422]/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] p-6 ${className}`}
    >
      {children}
    </div>
  );
}
