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
          <div className="mx-auto rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-xl shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-2.5 rounded-xl border border-white/10 bg-black/60 p-2.5 sm:grid-cols-2">
              <AnimateIn delay={0.08} direction="left">
                <a
                  href={githubProfile?.htmlUrl || profile.github}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-black/20"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Code2 size={18} />
                    </span>
                    <span>
                      <span className="block font-medium text-white">GitHub</span>
                      <span className="mt-1 block text-sm text-zinc-500">
                        cankie7474
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-500 transition group-hover:text-white"
                  />
                </a>
              </AnimateIn>

              <AnimateIn delay={0.16} direction="right">
                <a
                  href={profile.instagram}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-black/20"
                >
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
                </a>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
