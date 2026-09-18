import { FileText } from "lucide-react";

export default function Nav() {
  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa]/85 backdrop-blur-md border-b border-black/10">
      <div className="mx-auto max-w-3xl px-6 py-3.5 flex items-center justify-between">
        <a href="#" className="font-display font-semibold text-black tracking-tight">
          Pravin Rajah
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-black transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-black transition-colors"
        >
          <FileText size={15} />
          Resume
        </a>
      </div>
    </header>
  );
}
