import type { Project } from "@/types";

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Timbangkita",
    description: "A comprehensive health tracking platform that helps users monitor weight goals and nutrition with interactive analytics.",
    techStack: ["Next.js", "PostgreSQL", "Health API"],
    imageUrl: "/project-timbangkita.svg",
    githubLink: "https://github.com/",
    liveLink: "https://vercel.com/"
  },
  {
    id: 2,
    title: "Attendance Management",
    description: "Enterprise solution for tracking employee attendance, leaves, and productivity with automated reporting features.",
    techStack: ["React", "Next.js", "Tailwind"],
    imageUrl: "/project-attendance.svg",
    githubLink: "https://github.com/",
    liveLink: "https://vercel.com/"
  },
  {
    id: 3,
    title: "Smart Harvest",
    description: "An IoT-integrated platform for precision agriculture, monitoring soil health and crop growth in real-time.",
    techStack: ["TypeScript", "IoT API", "PostgreSQL"],
    imageUrl: "/project-harvest.svg",
    githubLink: "https://github.com/",
    liveLink: "https://vercel.com/"
  },
  {
    id: 4,
    title: "Portfolio 2026",
    description: "The very site you are viewing. Built for speed, SEO, and visual impact across light and dark modes.",
    techStack: ["Next.js", "TypeScript", "Vercel"],
    imageUrl: "/project-portfolio.svg",
    githubLink: "https://github.com/",
    liveLink: "https://vercel.com/"
  }
];
