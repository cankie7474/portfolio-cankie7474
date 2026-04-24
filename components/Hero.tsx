import Image from "next/image";
import { ArrowRight, Code2 } from "lucide-react";

import type { GitHubLanguage, GitHubProfile } from "@/data/github";
import { profile } from "@/data/profile";

type HeroProps = {
  githubProfile: GitHubProfile | null;
  githubLanguages: GitHubLanguage[];
};

const languageColors = [
  "bg-cyan-300",
  "bg-fuchsia-300",
  "bg-emerald-300",
  "bg-amber-300",
  "bg-sky-300",
];

const fallbackLanguages: GitHubLanguage[] = [
  { name: "TypeScript", percentage: 35, bytes: 35 },
  { name: "JavaScript", percentage: 25, bytes: 25 },
  { name: "CSS", percentage: 18, bytes: 18 },
  { name: "HTML", percentage: 12, bytes: 12 },
  { name: "C#", percentage: 10, bytes: 10 },
];

export default function Hero({ githubProfile, githubLanguages }: HeroProps) {
  const languages =
    githubLanguages.length > 0 ? githubLanguages : fallbackLanguages;
  const topLanguages = languages.slice(0, 3);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-12 left-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-lg border border-white/10 bg-white/4 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25">
            <div className="rounded-md border border-white/10 bg-black/70 p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {githubProfile?.avatarUrl ? (
                  <Image
                    src={githubProfile.avatarUrl}
                    alt={`${profile.name} GitHub profile picture`}
                    width={112}
                    height={112}
                    className="rounded-lg border border-white/10 shadow-[0_0_35px_rgba(103,232,249,0.12)]"
                    priority
                  />
                ) : (
                  <div className="flex size-28 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-3xl font-semibold text-white">
                    CK
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-cyan-300">About Me</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                    {githubProfile?.name || profile.name}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    @{githubProfile?.login || profile.githubUsername}
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                    {githubProfile?.bio ||
                      "Full Stack Developer from Austria building web, backend, and mobile projects."}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-md border border-white/10 bg-white/4 p-4">
                  <p className="text-2xl font-semibold text-white">
                    {githubProfile?.publicRepos ?? "2"}
                  </p>
                  <p className="text-xs text-zinc-500">Repositories</p>
                </div>
                <div className="rounded-md border border-white/10 bg-white/4 p-4">
                  <p className="text-2xl font-semibold text-white">
                    {githubProfile?.followers ?? "0"}
                  </p>
                  <p className="text-xs text-zinc-500">Followers</p>
                </div>
                <div className="rounded-md border border-white/10 bg-white/4 p-4">
                  <p className="text-2xl font-semibold text-white">
                    {languages[0]?.name || "Code"}
                  </p>
                  <p className="text-xs text-zinc-500">Top language</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-md border border-white/10 bg-black/40 p-4 font-mono text-sm">
                <p className="text-zinc-500">const developer = &#123;</p>
                <p className="pl-4 text-cyan-200">
                  role: &quot;{profile.role}&quot;,
                </p>
                <p className="pl-4 text-emerald-200">
                  age: &quot;{profile.age}&quot;,
                </p>
                <p className="pl-4 text-fuchsia-200">
                  stack: &quot;web + backend + mobile&quot;,
                </p>
                <p className="text-zinc-500">&#125;;</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/4 p-4 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl transition duration-300 hover:border-fuchsia-300/25">
            <div className="h-full rounded-md border border-white/10 bg-black/70 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Languages
                  </h2>
                </div>
                <div className="flex size-11 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.12)]">
                  <Code2 size={20} />
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {topLanguages.map((language, index) => (
                  <div key={language.name}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span
                          className={`size-2.5 rounded-full ${
                            languageColors[index] || "bg-zinc-300"
                          }`}
                        />
                        {language.name}
                      </div>
                      <span className="font-medium text-white">
                        {language.percentage}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${
                          languageColors[index] || "bg-zinc-300"
                        }`}
                        style={{ width: `${language.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="duck-card mt-8 overflow-hidden rounded-md border border-white/10 bg-white/[0.035] p-5">
                <div className="duck-scene relative mx-auto h-40 max-w-72">
                  <span className="duck-sparkle duck-sparkle-one" />
                  <span className="duck-sparkle duck-sparkle-two" />

                  <div className="duck-shadow" />
                  <div className="duck-platform" />
                  <div className="duck-pillow" />

                  <div className="duck">
                    <div className="duck-tail" />
                    <div className="duck-wing" />
                    <div className="duck-foot duck-foot-left" />
                    <div className="duck-foot duck-foot-right" />

                    <div className="duck-head">
                      <div className="duck-feather" />
                      <div className="duck-eye" />
                      <div className="duck-hover-eye" />
                      <div className="duck-beak" />
                    </div>
                  </div>

                  <span className="sleep-z sleep-z-one">z</span>
                  <span className="sleep-z sleep-z-two">z</span>
                  <span className="sleep-z sleep-z-three">z</span>
                </div>
                <p className="mt-2 text-center text-xs font-medium text-zinc-500">
                  Compiling dreams...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.22)] transition hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
