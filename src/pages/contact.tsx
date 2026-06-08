import Head from "next/head";
import ContactForm from "@/components/ContactForm";

const contactLinks = [
  {
    key: "linkedin",
    title: "LinkedIn",
    subtitle: "Professional connections",
    href: "https://linkedin.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6 1.13 6 0 4.881 0 3.5 0 2.12 1.13 1 2.5 1c1.37 0 2.48 1.12 2.48 2.5zM.28 8.5H4.7V23H.28V8.5zM8.13 8.5h4.22v1.98h.06c.59-1.11 2.02-2.28 4.16-2.28 4.45 0 5.27 2.93 5.27 6.73V23h-4.42v-7.15c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.78V23H8.13V8.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "github",
    title: "GitHub",
    subtitle: "Code, components, and experiments",
    href: "https://github.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.23 9.2 7.71 10.68.56.1.76-.24.76-.53 0-.26-.01-1-.01-1.96-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.62.51 3.26.39.1-.3.39-.51.71-.63-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.15-3.03-.12-.28-.5-1.39.11-2.9 0 0 .94-.3 3.08 1.15A10.7 10.7 0 0 1 12 6.8c.95.004 1.9.13 2.79.38 2.14-1.45 3.08-1.15 3.08-1.15.61 1.51.23 2.62.11 2.9.71.8 1.15 1.8 1.15 3.03 0 4.33-2.64 5.27-5.15 5.55.4.35.76 1.04.76 2.1 0 1.52-.01 2.75-.01 3.13 0 .29.2.63.77.52 4.49-1.49 7.72-5.7 7.72-10.68C23.25 5.48 18.27.5 12 .5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "instagram",
    title: "Instagram",
    subtitle: "Design and studio work",
    href: "https://instagram.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "email",
    title: "Email",
    subtitle: "Project inquiries and collaborations",
    href: "mailto:hello@example.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Nicole.dev</title>
        <meta name="description" content="Get in touch with Nicole — frontend developer and UI/UX designer." />
      </Head>

      <section className="contact-section">
        <div className="contact-shell">

          {/* ── Left: text block ── */}
          <div className="contact-copy">
            <p className="contact-eyebrow">CONTACT</p>

           <h1 className="contact-title">
  Stay Connected With Me —{" "}
  <span className="contact-title-accent">Anytime, Anywhere</span>
</h1>

            <div className="contact-divider">
              <span className="divider-line" />
              <span className="divider-dot" />
            </div>

            <p className="contact-description">
              As an Aspiring Developer and Computer Science Student, I&apos;m passionate about creating clean, responsive, and modern digital experiences while continuously improving my skills and creativity.
            </p>

            <a className="contact-cta" href="mailto:hello@example.com" aria-label="Contact me via email">
              <span className="cta-left" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <span className="cta-label">Contact Me Now</span>
              <span className="cta-right" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* ── Right: social link cards ── */}
          <div className="contact-cards">
            {contactLinks.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="contact-card"
              >
                <span className="card-icon" aria-hidden>
                  <span className="card-icon-bg">{item.icon}</span>
                </span>

                <span className="card-copy">
                  <span className="card-title">{item.title}</span>
                  <span className="card-sub">{item.subtitle}</span>
                </span>

                <span className="card-arrow" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* ── Contact form — full-width below the two-column shell ── */}
        <div className="contact-form-wrapper">
          <div className="contact-form-inner">
            <div className="contact-form-header">
              <p className="contact-eyebrow">Send a Message</p>
              <h2 className="contact-form-title">Prefer a direct message? Drop me a note.</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
