import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function isActiveLink(pathname: string, _asPath: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href;
}

function NavLink({
  href,
  label,
  active,
  onClick,
  className = "nav-link",
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link href={href} className={`${className} ${active ? "nav-link-active" : ""}`} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar-shell">
      <nav className="navbar-inner" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <span className="brand-mark" aria-hidden>✦</span>NICOLE
        </Link>

        <div className="nav-links nav-links-desktop">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={isActiveLink(router.pathname, router.asPath, link.href)}
            />
          ))}
        </div>

        <div className="navbar-end">
          <ThemeToggle />
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
          </button>
        </div>
      </nav>

      <button
        type="button"
        className={`nav-overlay ${menuOpen ? "nav-overlay--open" : ""}`}
        aria-label="Close menu"
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
      />

      <aside
        id="mobile-nav-drawer"
        className={`nav-drawer ${menuOpen ? "nav-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-drawer-header">
          <span className="nav-drawer-title">Menu</span>
          <button type="button" className="nav-drawer-close" onClick={closeMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="nav-drawer-links">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={isActiveLink(router.pathname, router.asPath, link.href)}
              onClick={closeMenu}
              className="nav-drawer-link"
            />
          ))}
        </div>
      </aside>
    </header>
  );
}
