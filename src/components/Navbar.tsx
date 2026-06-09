import Link from "next/link";
import { useRouter } from "next/router";
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
  // Exact match for all page routes (/about, /projects, /skills, /contact)
  return pathname === href;
}

function NavLink({
  href,
  label,
  active
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link href={href} className={`nav-link ${active ? "nav-link-active" : ""}`}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="navbar-shell">
      <nav className="navbar-inner" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <span style={{ marginRight: '0.5rem', display: 'inline-block' }}>✦</span>NICOLE
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={isActiveLink(router.pathname, router.asPath, link.href)}
            />
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
