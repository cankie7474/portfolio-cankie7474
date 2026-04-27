import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  Hash,
  Palette,
  Terminal,
  Smartphone,
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import AnimateIn from "@/components/ui/AnimateIn";
import TextReveal from "@/components/ui/TextReveal";

const coreStack = [
  {
    name: "TypeScript",
    icon: FileCode2,
  },
  {
    name: "JavaScript",
    icon: Braces,
  },
  {
    name: "HTML",
    icon: Code2,
  },
  {
    name: "CSS",
    icon: Palette,
  },
  {
    name: "React",
    icon: Atom,
  },
  {
    name: "C#",
    icon: Hash,
  },
  {
    name: "Python",
    icon: Terminal,
  },
  {
    name: "Expo",
    icon: Smartphone,
  },
];

export default function CoreStack() {
  return (
    <section id="core-stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Core Stack"
          title="Tools I use to ship ideas."
          description="A focused stack for web, backend, and mobile products."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <AnimateIn key={tech.name} delay={index * 0.08} direction="up">
                <div className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/3 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/12 hover:bg-white/6">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
                  <div className="relative z-10">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition group-hover:shadow-[0_0_30px_rgba(99,102,241,0.28)]">
                      <Icon size={23} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      <TextReveal text={tech.name} delay={index * 0.03} />
                    </h3>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
