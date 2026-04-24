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
    <section id="core-stack" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Core Stack" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group rounded-lg border border-white/10 bg-white/4 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition group-hover:shadow-[0_0_30px_rgba(103,232,249,0.22)]">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {tech.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
