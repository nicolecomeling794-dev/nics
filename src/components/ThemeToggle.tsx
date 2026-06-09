import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      className="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span
        className="theme-toggle-thumb"
        aria-hidden="true"
        style={
          theme === "dark"
            ? { background: 'var(--text)', boxShadow: '6px -4px 0 -2px rgba(0,0,0,0.6)' }
            : { border: '2px solid currentColor', boxShadow: '-5px 0 0 -2px currentColor' }
        }
      />
    </button>
  );
}
