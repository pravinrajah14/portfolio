import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Nav from "@/components/sections/Nav";
import Work from "@/components/Work";
import Project from "@/components/Project";
import { profile } from "@/data/profile";

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 shrink-0">
        {title}
      </span>
      <div className="flex-1 h-px bg-black/10" />
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-mono px-2 py-0.5 rounded border border-black/10 text-neutral-400">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="pt-20 pb-16">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-5">
            Berkeley, CA &middot; EECS &apos;28
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-black tracking-tight leading-[1.05] mb-5">
            Pravin Rajah
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mb-8">
            {profile.tagline} Most recently interned on{" "}
            <span className="text-black">AWS Resilience Hub</span>, and previously built ML
            systems at Oracle and SAP.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm mb-8">
            <a
              href="#experience"
              className="text-black border-b border-black/40 hover:border-black transition-colors pb-0.5"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-black border-b border-black/40 hover:border-black transition-colors pb-0.5"
            >
              Projects
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-black transition-colors"
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="flex items-center gap-5 text-neutral-400">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-black transition-colors"
            >
              <Mail size={19} strokeWidth={1.75} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition-colors"
            >
              <Github size={19} strokeWidth={1.75} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-black transition-colors"
            >
              <Linkedin size={19} strokeWidth={1.75} />
            </a>
          </div>
        </section>

        {/* Education */}
        <section id="about" className="pb-16">
          <SectionLabel title="Education" />
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div className="font-display font-semibold text-black text-lg">
                {profile.education.school}
              </div>
              <div className="text-neutral-400 text-sm mt-0.5">{profile.education.degree}</div>
            </div>
            <span className="text-sm text-neutral-500 whitespace-nowrap">
              {profile.education.gradDate}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500 mb-5">
            {profile.education.awards.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {profile.skills.courses.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="pb-16">
          <SectionLabel title="Experience" />
          <div className="flex flex-col gap-10">
            {profile.experience.map((e, i) => (
              <Work key={i} {...e} isLast={i === profile.experience.length - 1} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pb-16">
          <SectionLabel title="Projects" />
          <div className="grid md:grid-cols-2 gap-4">
            {profile.projects.map((p, i) => (
              <Project key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="pb-16">
          <SectionLabel title="Leadership" />
          <div className="flex flex-col gap-10">
            {profile.leadership.map((e, i) => (
              <Work key={i} {...e} isLast={i === profile.leadership.length - 1} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pb-16">
          <SectionLabel title="Skills" />
          <div className="space-y-5">
            {[
              { label: "Languages", items: profile.skills.languages },
              { label: "Frameworks", items: profile.skills.frameworks },
              {
                label: "Infra & Data",
                items: [...profile.skills.tools, ...profile.skills.databases],
              },
            ].map(({ label, items }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2 sm:mb-0 sm:w-28 sm:pt-1 shrink-0">
                  {label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-20">
          <SectionLabel title="Contact" />
          <p className="text-neutral-400 text-sm mb-6 max-w-md">
            Open to new opportunities and interesting conversations — feel free to reach out.
          </p>
          <div className="space-y-3 text-sm">
            {[
              { label: "Email", href: `mailto:${profile.email}`, text: profile.email, Icon: Mail },
              {
                label: "LinkedIn",
                href: profile.links.linkedin,
                text: "linkedin.com/in/pravinrajah914",
                Icon: Linkedin,
              },
              {
                label: "GitHub",
                href: profile.links.github,
                text: "github.com/pravinrajah14",
                Icon: Github,
              },
            ].map(({ label, href, text, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-black transition-colors w-fit"
              >
                <Icon size={16} strokeWidth={1.75} />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="py-8 text-center text-xs text-neutral-600 font-mono">
          {profile.name} &middot; {new Date().getFullYear()}
        </footer>
      </main>
    </>
  );
}
