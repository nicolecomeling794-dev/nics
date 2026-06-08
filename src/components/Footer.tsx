import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div>
        <p className="footer-brand">Nicole.dev</p>
        <p className="footer-copy">
          Crafted for modern digital brands with design-forward frontend execution.
        </p>
      </div>

      <nav className="footer-actions" aria-label="Footer navigation">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      
        <a href="/resume.pdf" download>
          Résumé
        </a>
      </nav>
    </footer>
  );
}
