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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl float"></div>
            <div className="relative">
              <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg md:text-xl text-[#9aa4b2] leading-relaxed">
                {profile.tagline}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ring-1 ring-white/20 hover:bg-white/10 hover:ring-white/30 transition-all duration-300 hover:scale-105"
            >
              View Experience
            </a>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0 invert" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gray-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <img src="/github.png" alt="GitHub" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0 invert" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <img src="/mail.png" alt="Email" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0 invert" />
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">About</h2>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1422]/80 to-[#0a0d14]/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <p className="text-slate-200/90 text-lg leading-relaxed relative z-10 mb-6">
              I'm a passionate software engineer studying EECS at UC Berkeley. When I'm not diving deep into algorithms or building full-stack applications, 
              you'll find me exploring quantitative finance, optimizing QA workflows, or contributing to open-source projects that make learning more accessible.
            </p>
            <p className="text-slate-300/80 text-base leading-relaxed relative z-10 mb-8">
              Currently building innovative tools that bridge the gap between AI and user experience, 
              while mentoring fellow students and contributing to campus initiatives that serve 50,000+ users.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-sm relative z-10">
              <div className="group">
                <div className="text-emerald-400 font-medium mb-1">
                  Location
                </div>
                <div className="text-slate-300">{profile.location}</div>
              </div>
              <div className="group">
                <div className="text-blue-400 font-medium mb-1">
                  Graduating
                </div>
                <div className="text-slate-300">{profile.education.gradDate}</div>
              </div>
              <div className="group">
                <div className="text-purple-400 font-medium mb-1">
                  Current GPA
                </div>
                <div className="text-slate-300">{profile.education.gpa}</div>
              </div>
            </div>
            
            {/* Awards and Organizations - compact */}
            <div className="mt-4 text-sm relative z-10">
              <div className="flex flex-wrap gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-medium">Award:</span>
                  <span className="text-slate-300">{profile.education.awards[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-medium">Member:</span>
                  <span className="text-slate-300">{profile.education.organizations[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interests & Personality */}
        <section className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Additional Focus Areas</h2>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1422]/80 to-[#0a0d14]/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Financial Technology
                </h3>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  Developing quantitative analysis tools and algorithms to understand market patterns, 
                  exploring fintech applications, and building sustainable investment strategies using data science.
                </p>
              </div>
              
              <div className="group text-center">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Student Leadership
                </h3>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  Mentoring peers through engineering honor society, contributing to platforms serving 5000+ students, 
                  and developing tools that enhance academic accessibility and collaboration.
                </p>
              </div>
              
              <div className="group text-center">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Infrastructure Optimization
                </h3>
                <p className="text-slate-300/80 text-sm leading-relaxed">
                  Streamlining QA workflows, debugging complex infrastructure issues, 
                  and implementing automated solutions that improve reliability and efficiency for large-scale systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Professional Experience</h2>
          </div>
          <div className="grid gap-6">
            {profile.experience.map((e, i) => (
              <Work key={i} {...e} />
            ))}
          </div>
        </section>

        <section id="projects" className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {profile.projects.map((p, i) => (
              <Project key={i} {...p} />
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Skills & Learning</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Skills title="Languages" items={profile.skills.languages} collapsedHeight={110} />
            <Skills title="Frameworks & Libraries" items={profile.skills.frameworks} collapsedHeight={110} />
            <Skills title="Tools & Platforms" items={[...profile.skills.tools, ...profile.skills.databases]} collapsedHeight={110} />
            <Skills title="Academic Courses" items={profile.skills.courses} asList collapsedHeight={120} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">Contact</h2>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1422]/80 to-[#0a0d14]/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div className="group">
                  <div className="text-emerald-400 font-medium mb-2">
                    Email
                  </div>
                  <a 
                    className="hover:text-blue-400 transition-colors text-slate-300" 
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="group">
                  <div className="text-blue-400 font-medium mb-2">
                    LinkedIn
                  </div>
                  <a 
                    className="hover:text-blue-400 transition-colors text-slate-300" 
                    href={profile.links.linkedin} target="_blank" rel="noreferrer"
                  >
                    {profile.links.linkedin}
                  </a>
                </div>
                <div className="group">
                  <div className="text-purple-400 font-medium mb-2">
                    GitHub
                  </div>
                  <a 
                    className="hover:text-blue-400 transition-colors text-slate-300" 
                    href={profile.links.github} target="_blank" rel="noreferrer"
                  >
                    {profile.links.github}
                  </a>
                </div>
                <div className="group">
                  <div className="text-pink-400 font-medium mb-2">
                    Location
                  </div>
                  <div className="text-slate-300">{profile.location}</div>
                </div>
              </div>
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
