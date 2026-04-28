import { Code2 } from "lucide-react";

import { navLinks, profile } from "@/data/profile";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <AnimateIn delay={0.2} direction="up">
        <nav className="relative mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/8 bg-black/55 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-4">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(110deg,rgba(255,255,255,0.10),transparent_24%,transparent_76%,rgba(99,102,241,0.12))]" />
          <a href="#" className="relative z-10 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.16)] transition hover:scale-105">
              <Code2 size={18} />
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold tracking-tight text-white">
                cankie<span className="text-primary">.</span>
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
                {profile.role}
              </span>
            </span>
          </a>

          <div className="relative z-10 hidden items-center rounded-full border border-white/8 bg-white/4 p-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                <span className="absolute inset-0 rounded-full bg-white/0 transition-colors group-hover:bg-white/8" />
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="relative z-10 flex items-center gap-1 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/8 bg-white/4 px-3 py-2 text-xs font-medium text-muted-foreground transition hover:bg-white/8 hover:text-white"
              >
                {link.label.split(" ")[0]}
              </a>
            ))}
          </div>
        </nav>
      </AnimateIn>
    </header>
  );
}
