import { ArrowUpRight, Code2 } from "lucide-react";

import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects I've built."
          description="A showcase of products, experiments, and real-world applications."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.07]"
            >
              <div className={`h-56 bg-linear-to-br ${project.gradient} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-md border border-white/25 bg-black/25 p-5 backdrop-blur">
                  <div className="h-2 w-24 rounded-full bg-white/50" />
                  <div>
                    <p className="text-4xl font-semibold text-white">
                      {project.metric}
                    </p>
                    <p className="text-sm text-white/75">
                      {project.metricLabel}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
                  >
                    <Code2 size={16} />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm text-zinc-400">
                      Demo coming soon
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
