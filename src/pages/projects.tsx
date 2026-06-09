import Head from "next/head";
import type { GetServerSideProps } from "next";
import { fallbackProjects } from "@/data/projects";
import type { Project } from "@/types";

type ProjectsPageProps = {
  projects: Project[];
};

export const getServerSideProps: GetServerSideProps<ProjectsPageProps> = async ({ req }) => {
  try {
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
    return { props: { projects: fallbackProjects } };
  }
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <>
      <Head>
        <title>Projects | Nicole.dev</title>
        <meta
          name="description"
          content="Explore Nicole's portfolio of frontend and full-stack web projects — built with Next.js, TypeScript, and React."
        />
      </Head>

      <section className="section projects-section">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h1 className="projects-page-heading">
            Selected work that blends design, motion, and performance.
          </h1>
        </div>

        <div className="projects-grid">
          {/* Featured project — large card */}
          {featuredProject && (
            <article className="featured-project-card">
              <div className="project-tag">Featured</div>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <div className="project-tags">
                {featuredProject.techStack.map((technology) => (
                  <span key={technology} className="project-tag">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {featuredProject.liveLink && (
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    View Live
                  </a>
                )}
                {featuredProject.githubLink && (
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    View Code
                  </a>
                )}
              </div>
            </article>
          )}

          {/* Remaining projects — stacked column */}
          <div className="project-column-grid">
            {remainingProjects.map((project) => (
              <article key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.techStack.map((technology) => (
                    <span key={technology} className="project-tag">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-link"
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-link"
                    >
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
