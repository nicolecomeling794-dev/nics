import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS", "Figma", "Git",
];

const experience = [
  {
    period: "Jun 2023 — Present",
    title: "Frontend Developer",
    company: "Studio Nimbus",
    location: "Remote",
    description:
      "Lead premium interface builds with polished motion, elegant accessibility, and a refined component system for luxury digital brands.",
  },
  {
    period: "Jan 2022 — Jun 2023",
    title: "UI/UX Designer",
    company: "Velora Labs",
    location: "Remote",
    description:
      "Crafted brand-driven product experiences for digital platforms, balancing clarity, emotion, and premium conversion-focused layouts.",
  },
  {
    period: "May 2021 — Dec 2021",
    title: "Web Developer",
    company: "Lattice Creative",
    location: "Remote",
    description:
      "Built responsive, component-first websites and polished landing pages for startups and boutique studios.",
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "24+", label: "Projects Completed" },
  { value: "12+", label: "Happy Clients" },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Nicole.dev</title>
        <meta
          name="description"
          content="Learn about Nicole — aspiring frontend developer, UI/UX designer, and Computer Science student based in the Philippines."
        />
      </Head>

      {/* ── Hero ── */}
      <section className="about-page-hero section">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-frame">
              <Image
                src="/myprofile.png"
                alt="Portrait of Nicole"
                width={760}
                height={920}
                priority
                className="about-image"
              />
            </div>
          </div>

          <div className="about-copy">
            <p className="section-eyebrow">About Me</p>
            <h1 className="about-heading">
              Building digital experiences while growing as a Computer Science student.
            </h1>
            <p className="about-lead">
              I&apos;m Nicole — an aspiring frontend developer and UI/UX designer based in the Philippines.
              I&apos;m passionate about crafting clean, responsive, and user-friendly web experiences while
              continuously learning and refining my craft as a Computer Science student.
            </p>
            <p className="about-body">
              My approach combines solid engineering fundamentals with a designer&apos;s eye for detail.
              I care about accessibility, performance, and the small interactions that make digital products
              feel considered and premium.
            </p>

            <div className="about-actions">
              <a href="/resume.pdf" download className="button button-primary">
                Download Résumé
              </a>
              <Link href="/contact" className="button button-secondary">
                Get in Touch
              </Link>
            </div>

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

      {/* ── Skills ── */}
      <section className="section about-skills-section">
        <div className="section-heading">
          <p className="section-eyebrow">Skills</p>
          <h2>Tools and technologies I work with.</h2>
        </div>
        <div className="skills-panel">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="section about-experience-section">
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
                <p>
                  {item.company} &bull; {item.location}
                </p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section about-cta-section">
        <div className="about-cta-card">
          <p className="section-eyebrow">Ready to collaborate?</p>
          <h2>Let&apos;s build something exceptional together.</h2>
          <p>
            I&apos;m open to internship opportunities, freelance projects, and long-term collaborations.
            Reach out and let&apos;s talk.
          </p>
          <div className="about-actions">
            <Link href="/contact" className="button button-primary">
              Contact Me
            </Link>
            <Link href="/projects" className="button button-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
