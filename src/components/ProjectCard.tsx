import Image from "next/image";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Image src={project.imageUrl} alt="" className="project-image" width={900} height={560} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveLink ? <a className="project-cta" href={project.liveLink}>View site</a> : null}
          {project.githubLink ? <a className="project-icon-link" href={project.githubLink} aria-label={`${project.title} GitHub repository`}>{"<>"}</a> : null}
        </div>
      </div>
    </article>
  );
}
