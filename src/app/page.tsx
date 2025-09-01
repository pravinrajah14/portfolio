import Nav from "@/components/sections/Nav";
import Work from "@/components/Work";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { profile } from "@/data/profile";

export default function Page() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-4xl px-4">
        <section className="py-12 md:py-16">
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-3 max-w-2xl text-lg md:text-xl text-[#9aa4b2]">{profile.tagline}</p>
          <div className="flex gap-3 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm bg-white/10 hover:bg-white/20 transition"
            >
              View projects
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              Experience
            </a>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 hover:bg-white transition"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 hover:bg-white transition"
            >
              <img src="/github.png" alt="GitHub" className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 hover:bg-white transition"
            >
              <img src="/mail.png" alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
          <div className="rounded-2xl border border-white/5 bg-[#0f1422]/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] p-6">
            <p className="text-slate-200/90">
              I’m an EECS student at UC Berkeley focused on software engineering,
              QA automation, and full-stack development. Currently, I'm working on a stock tracker that teaches myself
              introductory quantitative finance concepts. Please feel free to reach out at {profile.email}!
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-5 text-sm text-[#9aa4b2]">
              <div><span className="block text-slate-400">Location</span>{profile.location}</div>
              <div><span className="block text-slate-400">Graduation</span>{profile.education.gradDate}</div>
              <div><span className="block text-slate-400">GPA</span>{profile.education.gpa}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Professional Experience</h2>
          <div className="grid gap-4">
            {profile.experience.map((e, i) => (
              <Work key={i} {...e} />
            ))}
          </div>
        </section>

        <section id="projects" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {profile.projects.map((p, i) => (
              <Project key={i} {...p} />
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills & Courses</h2>
          <div className="grid md:grid-cols-2 gap-4 items-stretch">
            <Skills title="Languages" items={profile.skills.languages} collapsedHeight={110} />
            <Skills title="Frameworks" items={profile.skills.frameworks} collapsedHeight={110} />
            <Skills title="Tools"      items={profile.skills.tools}      collapsedHeight={110} />
            <Skills title="Relevant Courses" items={profile.skills.courses} asList collapsedHeight={120} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
          <div className="rounded-2xl border border-white/5 bg-[#0f1422]/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] p-6 grid sm:grid-cols-2 gap-4 text-slate-200/90">
            <div>
              <div className="text-sm text-[#9aa4b2]">Email</div>
              <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <div className="text-sm text-[#9aa4b2]">Location</div>
              <div>{profile.location}</div>
            </div>
            <div>
              <div className="text-sm text-[#9aa4b2]">LinkedIn</div>
              <a className="hover:underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                {profile.links.linkedin}
              </a>
            </div>
            <div>
              <div className="text-sm text-[#9aa4b2]">GitHub</div>
              <a className="hover:underline" href={profile.links.github} target="_blank" rel="noreferrer">
                {profile.links.github}
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-[#9aa4b2]">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}
