import { BriefcaseBusiness } from "lucide-react";

import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="My journey in software development."
          description="Clear progression across web, mobile, backend, and product engineering."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-linear-to-b from-cyan-300 via-white/20 to-transparent sm:block" />

          <div className="space-y-6">
            {experience.map((item, index) => {
              const isCurrent = index === 0;
              return (
                <div
                  key={`${item.company}-${item.period}`}
                  className="relative sm:pl-12"
                >
                  <div className="absolute left-0 top-6 hidden size-8 items-center justify-center rounded-full border border-cyan-300/40 bg-black text-cyan-300 sm:flex">
                    <BriefcaseBusiness size={15} />
                  </div>
                  <div
                    className={`rounded-lg border p-6 backdrop-blur transition hover:border-cyan-300/35 hover:bg-white/[0.07] ${
                      isCurrent
                        ? "border-cyan-300/40 bg-cyan-300/6 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                        : "border-white/10 bg-white/4"
                    }`}
                  >
                    <p className="text-sm font-medium text-cyan-300">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{item.company}</p>
                    <p className="mt-4 leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
