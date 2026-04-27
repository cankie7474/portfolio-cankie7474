import { BriefcaseBusiness } from "lucide-react";

import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
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
                <AnimateIn
                  key={`${item.company}-${item.period}`}
                  delay={index * 0.08}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div className="relative sm:pl-12">
                    <div className="absolute left-0 top-6 hidden size-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary sm:flex">
                      <BriefcaseBusiness size={15} />
                    </div>
                    <div
                      className={`group rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-black/20 ${
                        isCurrent
                          ? "border-primary/40 bg-primary/10 shadow-[0_0_28px_rgba(99,102,241,0.12)]"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <p className="text-sm font-medium text-primary">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {item.company}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
