import Head from "next/head";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Figma",
  "Git",
];

const skillCards = [
  {
    title: "Frontend Development",
    detail: "Designing responsive experiences with performance, polish, and thoughtful interactions.",
  },
  {
    title: "UI/UX Design",
    detail: "Creating intuitive design systems for meaningful product journeys and high-end brand expression.",
  },
  {
    title: "Next.js",
    detail: "SSR, static rendering, and premium page transitions for modern web experiences.",
  },
  {
    title: "React",
    detail: "Component-driven architecture with modern interaction patterns and clean state management.",
  },
  {
    title: "TypeScript",
    detail: "Type-safe interfaces for scalable frontend code and long-term maintainability.",
  },
  {
    title: "Figma",
    detail: "High-fidelity UI systems, interactive prototypes, and polished brand foundations.",
  },
  {
    title: "Tailwind CSS",
    detail: "Elegant utility-first styling for refined, consistent, and responsive layouts.",
  },
  {
    title: "Git",
    detail: "Version-controlled delivery with collaborative workflow discipline and polished release flow.",
  },
];

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Nicole.dev</title>
        <meta
          name="description"
          content="Nicole's technical skills and expertise — frontend development, UI/UX design, Next.js, React, TypeScript, and more."
        />
      </Head>

      <section className="section skills-section">
        <div className="section-heading">
          <p className="section-eyebrow">Skills</p>
          <h1 className="skills-page-heading">
            Modern tools and polished systems that power every project.
          </h1>
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
    </>
  );
}
