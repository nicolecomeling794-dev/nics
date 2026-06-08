import Head from "next/head";
import type { GetServerSideProps } from "next";
import ProjectCard from "@/components/ProjectCard";
import { fallbackProjects } from "@/data/projects";
import type { Project } from "@/types";

type ProjectsPageProps = {
  projects: Project[];
};

export const getServerSideProps: GetServerSideProps<ProjectsPageProps> = async ({ req }) => {
  try {
    // Build an absolute URL that works in both local dev and production
    const protocol = req.headers["x-forwarded-proto"] ?? "http";
    const host = req.headers.host ?? "localhost:3000";
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/projects`);

    if (!res.ok) {
      return { props: { projects: fallbackProjects } };
    }

    const data = await res.json();
    return { props: { projects: data.projects ?? fallbackProjects } };
  } catch {
    // If the API call fails at build/request time, fall back to static data
    return { props: { projects: fallbackProjects } };
  }
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <>
      <Head>
        <title>Projects | Nicole.dev</title>
        <meta
          name="description"
          content="Explore Nicole's portfolio of frontend and full-stack web projects — built with Next.js, TypeScript, and React."
        />
      </Head>

      <section className="section projects-page-section">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h1 className="projects-page-heading">Selected work.</h1>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
