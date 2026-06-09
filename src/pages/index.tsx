import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import HeroSection from "@/components/HeroSection";
import { fallbackProjects } from "@/data/projects";
import type { Project } from "@/types";

const previewTechnologies = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"];

const previewSkillCards = [
  {
    title: "Frontend Development",
    detail: "Responsive experiences with performance and polish.",
  },
  {
    title: "UI/UX Design",
    detail: "Intuitive design systems for meaningful product journeys.",
  },
  {
    title: "React",
    detail: "Component-driven architecture with modern interaction patterns.",
  },
  {
    title: "Next.js",
    detail: "SSR, static rendering, and premium page transitions.",
  },
];

const contactPreviewLinks = [
  { title: "LinkedIn", subtitle: "Professional connections", href: "https://linkedin.com" },
  { title: "GitHub", subtitle: "Code and experiments", href: "https://github.com" },
  { title: "Instagram", subtitle: "Design and studio work", href: "https://instagram.com/nics.codexie" },
  { title: "Email", subtitle: "Project inquiries", href: "mailto:nicolecomeling794@gmail.com" },
];

type HomePageProps = {
  projects: Project[];
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ req }) => {
  try {
    const protocol = req.headers["x-forwarded-proto"] ?? "http";
    const host = req.headers.host ?? "localhost:3000";
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/projects`);

    if (!res.ok) {
      return { props: { projects: fallbackProjects.slice(0, 3) } };
    }

    const data = await res.json();
    const projects: Project[] = (data.projects ?? fallbackProjects).slice(0, 3);
    return { props: { projects } };
  } catch {
    return { props: { projects: fallbackProjects.slice(0, 3) } };
  }
};

export default function HomePage({ projects }: HomePageProps) {
  const featuredProject = projects[0];
  const previewProjects = projects.slice(1);

  return (
    <>
      <Head>
        <title>Nicole.dev | Frontend Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Nicole — aspiring frontend developer and UI/UX designer crafting premium, responsive digital experiences."
        />
      </Head>

      <HeroSection />

      {/* ── About Preview ── */}
      <section className="section about-preview-section" id="about">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-frame">
              <Image
                src="/myprofile.png"
                alt="Portrait of Nicole"
                width={760}
                height={920}
                className="about-image"
              />
            </div>
          </div>

          <div className="about-copy">
            <div className="section-heading">
              <p className="section-eyebrow">About</p>
              <h2>Designing elegant digital products with intention.</h2>
            </div>
            <p className="about-lead">
              I&apos;m Nicole — an aspiring frontend developer and UI/UX designer based in the Philippines,
              passionate about clean, responsive web experiences that feel polished and purposeful.
            </p>

            <div className="preview-cta">
              <Link href="/about" className="button button-primary">
                View Full About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Preview ── */}
      <section className="section projects-preview-section" id="projects">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h2>Selected work that blends design, motion, and performance.</h2>
        </div>

        <div className="projects-grid">
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

          <div className="project-column-grid">
            {previewProjects.map((project) => (
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

        <div className="preview-cta">
          <Link href="/projects" className="button button-secondary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* ── Skills Preview ── */}
      <section className="section skills-preview-section" id="skills">
        <div className="section-heading">
          <p className="section-eyebrow">Skills</p>
          <h2>Modern tools that power every project.</h2>
        </div>

        <div className="skills-panel">
          {previewTechnologies.map((technology) => (
            <span key={technology} className="skill-pill">
              {technology}
            </span>
          ))}
          <span className="skill-pill skill-pill--more">+3 more</span>
        </div>

        <div className="skill-card-grid skills-preview-cards">
          {previewSkillCards.map((card) => (
            <article key={card.title} className="skill-card">
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="preview-cta">
          <Link href="/skills" className="button button-secondary">
            View All Skills
          </Link>
        </div>
      </section>

      {/* ── Contact Preview ── */}
      <section className="section contact-preview-section" id="contact">
        <div className="section-heading">
          <p className="section-eyebrow">Contact</p>
          <h2>Let&apos;s connect and build something exceptional.</h2>
        </div>

        <p className="contact-preview-lead">
          Open to internship opportunities, freelance projects, and collaborations.
          Reach out — I&apos;d love to hear from you.
        </p>

        <div className="contact-preview-grid">
          {contactPreviewLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="contact-card"
            >
              <div>
                <span className="contact-card-label">{item.title}</span>
                <p className="contact-card-sub">{item.subtitle}</p>
              </div>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>

        <div className="preview-cta">
          <Link href="/contact" className="button button-primary">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
