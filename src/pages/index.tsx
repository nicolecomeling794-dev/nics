import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { fallbackProjects } from "@/data/projects";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Figma",
  "Git"
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "24+", label: "Projects Completed" },
  { value: "12+", label: "Happy Clients" }
];

const experience = [
  {
    period: "Jun 2023 — Present",
    title: "Frontend Developer",
    company: "Studio Nimbus",
    location: "Remote",
    description:
      "Lead premium interface builds with polished motion, elegant accessibility, and a refined component system for luxury digital brands."
  },
  {
    period: "Jan 2022 — Jun 2023",
    title: "UI/UX Designer",
    company: "Velora Labs",
    location: "Remote",
    description:
      "Crafted brand-driven product experiences for digital platforms, balancing clarity, emotion, and premium conversion-focused layouts."
  },
  {
    period: "May 2021 — Dec 2021",
    title: "Web Developer",
    company: "Lattice Creative",
    location: "Remote",
    description:
      "Built responsive, component-first websites and polished landing pages for startups and boutique studios."
  }
];

const skillCards = [
  { title: "Frontend Development", detail: "Designing responsive experiences with performance, polish, and thoughtful interactions." },
  { title: "UI/UX Design", detail: "Creating intuitive design systems for meaningful product journeys and high-end brand expression." },
  { title: "Next.js", detail: "SSR, static rendering, and premium page transitions for modern web experiences." },
  { title: "React", detail: "Component-driven architecture with modern interaction patterns and clean state management." },
  { title: "TypeScript", detail: "Type-safe interfaces for scalable frontend code and long-term maintainability." },
  { title: "Figma", detail: "High-fidelity UI systems, interactive prototypes, and polished brand foundations." },
  { title: "Tailwind CSS", detail: "Elegant utility-first styling for refined, consistent, and responsive layouts." },
  { title: "Git", detail: "Version-controlled delivery with collaborative workflow discipline and polished release flow." }
];



export default function HomePage() {
  const featuredProject = fallbackProjects[0];
  const projectCards = fallbackProjects.slice(1);

  return (
    <>
      <Head>
        <title>Nicole.dev | Frontend Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Nicole is an aspiring frontend developer and UI/UX designer building clean, responsive web experiences. Available for internships and freelance work."
        />
        <meta property="og:title" content="Nicole.dev | Frontend Developer & UI/UX Designer" />
        <meta
          property="og:description"
          content="Nicole is an aspiring frontend developer and UI/UX designer building clean, responsive web experiences."
        />
        <meta property="og:type" content="website" />
      </Head>

      <HeroSection />

      <section className="section about-section" id="about">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-frame">
              <Image
                src="/myprofile.png"
                alt="Nicole portrait"
                width={760}
                height={920}
                priority
                className="about-image"
              />
            </div>
          </div>

          <div className="about-copy">
            <div className="section-heading">
              <p className="section-eyebrow">About</p>
              <h2>Building digital experiences while growing as a Computer Science student.</h2>
            </div>
            <p>
              I’m an aspiring developer and Computer Science student passionate about building clean, responsive, and user-friendly web experiences while continuously learning and improving my skills.
            </p>

            <div className="stats-grid">
              {stats.map((item) => (
                <article key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="section-eyebrow">Experience</p>
          <h2>Timeline of curated design and frontend work.</h2>
        </div>

        <div className="timeline-list">
          {experience.map((item) => (
            <article key={item.title} className="timeline-item">
              <div className="timeline-meta">
                <span>{item.period}</span>
                <strong>{item.title}</strong>
                <p>{item.company} • {item.location}</p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-eyebrow">Skills</p>
          <h2>Modern tools and polished systems that power every project.</h2>
        </div>

        <div className="skills-panel">
          {technologies.map((technology) => (
            <span key={technology} className="skill-pill">
              {technology}
            </span>
          ))}
        </div>

        <div className="skill-card-grid">
          {skillCards.map((card) => (
            <article key={card.title} className="skill-card">
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>
          <h2>Selected work that blends design, motion, and performance.</h2>
        </div>

        <div className="projects-grid">
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
              <a href={featuredProject.liveLink} target="_blank" rel="noreferrer" className="project-action-link">
                View Live
              </a>
              <a href={featuredProject.githubLink} target="_blank" rel="noreferrer" className="project-action-link">
                View Code
              </a>
            </div>
          </article>

          <div className="project-column-grid">
            {projectCards.map((project) => (
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
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-action-link">
                    Live
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-action-link">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     
    </>
  );
}
