export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f1a] border-b border-white/10 shadow-lg">
      <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Portfolio</a>
        <nav className="hidden sm:flex gap-5 text-sm text-[#9aa4b2]">
          {links.map(l => (
            <a key={l.href} className="hover:text-white" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
