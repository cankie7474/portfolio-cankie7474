import { Code2 } from "lucide-react";

import { navLinks, profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white">
            <Code2 size={18} />
          </span>
          <div>
            <p className="font-medium text-white">{profile.name}</p>
            <p>{profile.role}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
