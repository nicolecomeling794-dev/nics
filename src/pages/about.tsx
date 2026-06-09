import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

      <section className="section about-page-section">
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
    </>
  );
}
