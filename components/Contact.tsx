import { ArrowUpRight, Camera, Code2 } from "lucide-react";

import type { GitHubProfile } from "@/data/github";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import AnimateIn from "@/components/ui/AnimateIn";

type ContactProps = {
  githubProfile: GitHubProfile | null;
};

export default function Contact({ githubProfile }: ContactProps) {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          description="Reach out through GitHub or Instagram."
        />

        <AnimateIn direction="up">
          <div className="mx-auto rounded-2xl border border-white/6 bg-white/3 p-2.5 shadow-xl shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-2.5 rounded-xl border border-white/6 bg-black/60 p-2.5 sm:grid-cols-2">
              <AnimateIn delay={0.08} direction="left">
                <a
                  href={githubProfile?.htmlUrl || profile.github}
                  className="group relative block overflow-hidden rounded-2xl border border-white/6 bg-white/3 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/12 hover:bg-white/6"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Code2 size={18} />
                      </span>
                      <span>
                        <span className="block font-medium text-white">
                          GitHub
                        </span>
                        <span className="mt-1 block text-sm text-zinc-500">
                          cankie7474
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-500 transition group-hover:text-white"
                    />
                  </span>
                </a>
              </AnimateIn>

              <AnimateIn delay={0.16} direction="right">
                <a
                  href={profile.instagram}
                  className="group relative block overflow-hidden rounded-2xl border border-white/6 bg-white/3 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/12 hover:bg-white/6"
                >
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(217,70,239,0.08)_0%,transparent_70%)]" />
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-fuchsia-300/10 text-fuchsia-300">
                        <Camera size={18} />
                      </span>
                      <span>
                        <span className="block font-medium text-white">
                          Instagram
                        </span>
                        <span className="mt-1 block text-sm text-zinc-500">
                          caaan.kyc
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-500 transition group-hover:text-white"
                    />
                  </span>
                </a>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
