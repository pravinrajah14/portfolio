import Chip from "../ui/Chip";
import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <section className="py-12 md:py-16">
      <Chip>Portfolio</Chip>
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
      <div className="flex gap-4 mt-6 text-sm text-[#9aa4b2]">
        <a className="hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="hover:text-white" href="#contact">Email</a>
      </div>
    </section>
  );
}
