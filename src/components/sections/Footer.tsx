import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
