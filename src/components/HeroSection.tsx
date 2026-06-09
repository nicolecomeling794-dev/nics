import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-decor">
        <span className="hero-circle hero-circle-1" />
        <span className="hero-circle hero-circle-2" />
        <span className="hero-spark hero-spark-1" />
        <span className="hero-spark hero-spark-2" />
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, I&apos;M NICOLE.</p>
          <h1>
            Aspiring Frontend Developer
            <br />
            &amp; UI/UX Designer
          </h1>
          <p className="hero-text">
            I create responsive and user-friendly websites while continuously improving my skills in design and development.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              View Projects
            </Link>
            <a href="/resume.pdf" download className="button button-secondary">
              Download resume.pdf
            </a>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">Let&apos;s connect</span>
            <div className="hero-socials-icons">
              <a className="hero-social-icon-link" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2a4 4 0 0 1 4-2z" />
                  <rect x="2" y="9" width="4" height="12" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a className="hero-social-icon-link" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-4.97 1.5-5-2.5-7-3 0 0 0-1 1-2s1-2 1-2c0-1.5.6-2.5 2-3 0 0 1 0 2 1s1 1 2 1 1-1 3-1 2 0 2 0c1.4.5 2 1.5 2 3 0 0 1 0 2 1 2s1 1 1 2c1 0 1 2 1 2-2 0-2 4-7 3z" />
                </svg>
              </a>
              <a className="hero-social-icon-link" href="https://instagram.com/nics.codexie" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.9 1.62 4 4 0 0 1 7.9-1.62z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
              <a className="hero-social-icon-link" href="mailto:nicolecomeling794@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v12H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-card">
            <Image
              src="/myprofile.png"
              alt="Portrait of Nicole"
              width={920}
              height={1000}
              priority
              className="hero-image"
            />
          </div>

          <article className="availability-card">
            <p className="availability-eyebrow">Availability</p>
            <h2>Open for freelance & contract roles</h2>
            <p>Let&apos;s create elegant digital products together.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
