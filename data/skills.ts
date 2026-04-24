import { Code2, Database, LayoutDashboard, Smartphone } from "lucide-react";

export const techStack = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "C#",
  "Python",
  "Expo",
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive user interfaces built with modern web technologies.",
    icon: LayoutDashboard,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Mobile",
    description: "Cross-platform mobile apps with React Native and Expo.",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Mobile UI"],
  },
  {
    title: "Backend & APIs",
    description: "Backend foundations for apps, APIs, and project logic.",
    icon: Database,
    skills: ["Laravel", "APIs", "Databases"],
  },
  {
    title: "Languages",
    description: "Languages I use to build and understand software across different stacks.",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "C#", "Python"],
  },
];
