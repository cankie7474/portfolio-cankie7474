import { Code2 } from "lucide-react";

import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-5xl items-center justify-center px-6">
        <a href="#" className="absolute left-6 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Code2 size={18} />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
