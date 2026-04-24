import { ArrowUpRight, Camera, Code2 } from "lucide-react";

import type { GitHubProfile } from "@/data/github";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

type ContactProps = {
  githubProfile: GitHubProfile | null;
};

export default function Contact({ githubProfile }: ContactProps) {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          description="Reach out through GitHub or Instagram."
        />

        <div className="mx-auto rounded-lg border border-white/10 bg-white/[0.035] p-2.5 shadow-[0_0_70px_rgba(34,211,238,0.07)] backdrop-blur-xl">
          <div className="grid gap-2.5 rounded-md border border-white/10 bg-black/60 p-2.5 sm:grid-cols-2">
            <a
              href={githubProfile?.htmlUrl || profile.github}
              className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-300">
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

            <a
              href={profile.instagram}
              className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/40 hover:bg-fuchsia-300/10"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-fuchsia-300/10 text-fuchsia-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}
