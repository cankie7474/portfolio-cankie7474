import Image from "next/image";
import { ArrowRight, Code2 } from "lucide-react";

import type { GitHubLanguage, GitHubProfile } from "@/data/github";
import { profile } from "@/data/profile";
import AnimateIn from "@/components/ui/AnimateIn";
import TypingCodeBlock from "./TypingCodeBlock";

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

const widthClasses = [
  "w-0",
  "w-[5%]",
  "w-[10%]",
  "w-[15%]",
  "w-[20%]",
  "w-[25%]",
  "w-[30%]",
  "w-[35%]",
  "w-[40%]",
  "w-[45%]",
  "w-[50%]",
  "w-[55%]",
  "w-[60%]",
  "w-[65%]",
  "w-[70%]",
  "w-[75%]",
  "w-[80%]",
  "w-[85%]",
  "w-[90%]",
  "w-[95%]",
  "w-full",
];

const fallbackLanguages: GitHubLanguage[] = [
  { name: "TypeScript", percentage: 35, bytes: 35 },
  { name: "JavaScript", percentage: 25, bytes: 25 },
  { name: "CSS", percentage: 18, bytes: 18 },
  { name: "HTML", percentage: 12, bytes: 12 },
  { name: "C#", percentage: 10, bytes: 10 },
];

function getWidthClass(percentage: number) {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));
  const widthIndex = Math.round(clampedPercentage / 5);

  return widthClasses[widthIndex] ?? "w-0";
}

export default function Hero({ githubProfile, githubLanguages }: HeroProps) {
  const languages =
    githubLanguages.length > 0 ? githubLanguages : fallbackLanguages;

  const avatarUrl =
    githubProfile?.avatarUrl ||
    `https://github.com/${profile.githubUsername}.png`;
  const topLanguages = languages.slice(0, 3);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimateIn delay={0.1} direction="left">
            <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="rounded-xl border border-white/10 bg-black/70 p-6 sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <Image
                    src={avatarUrl}
                    alt={`${profile.name} GitHub profile picture`}
                    width={112}
                    height={112}
                    className="rounded-xl border border-white/10 shadow-[0_0_35px_rgba(99,102,241,0.2)]"
                    priority
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-primary">About Me</p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                      {githubProfile?.name || profile.name}
                    </h2>

                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                      @{githubProfile?.login || profile.githubUsername}
                    </p>
                  </div>
                </div>

                <div className="mt-7 rounded-xl border border-white/10 bg-black/40 p-4">
                  <TypingCodeBlock />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: "Repositories",
                      value: githubProfile?.publicRepos ?? "2",
                    },
                    {
                      label: "Followers",
                      value: githubProfile?.followers ?? "0",
                    },
                    {
                      label: "Top language",
                      value: languages[0]?.name || "Code",
                    },
                  ].map((stat, index) => (
                    <AnimateIn key={stat.label} delay={0.18 + index * 0.06}>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-semibold text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-zinc-500">{stat.label}</p>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.18} direction="right">
            <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              <div className="h-full rounded-xl border border-white/10 bg-black/70 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Languages
                  </h2>

                  <div className="flex size-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary shadow-[0_0_24px_rgba(99,102,241,0.18)]">
                    <Code2 size={20} />
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  {topLanguages.map((language, index) => (
                    <AnimateIn
                      key={language.name}
                      delay={0.24 + index * 0.07}
                      direction="up"
                    >
                      <div>
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
                            } ${getWidthClass(language.percentage)}`}
                          />
                        </div>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                <AnimateIn delay={0.42} direction="up">
                  <div className="duck-card mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="duck-scene relative mx-auto h-40 max-w-72">
                      <div className="duck-shadow" />
                      <div className="duck-platform" />
                      <div className="duck-pillow" />

                      <div className="duck">
                        <div className="duck-tail" />
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
                </AnimateIn>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.28} direction="up">
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.22)] transition hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
