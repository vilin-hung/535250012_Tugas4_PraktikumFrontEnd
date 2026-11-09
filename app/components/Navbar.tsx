"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "journey", label: "Our Approach" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleClick(id: string) {
    setActiveSection(id);
    setMenuOpen(false);
  }

  return (
    <header className="vm-navbar">
      <a
        href="#home"
        className="vm-logo"
        onClick={() => handleClick("home")}
      >
        vilmuse<span>.</span>
      </a>

      <button
        type="button"
        className="vm-menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`vm-nav-links ${menuOpen ? "is-open" : ""}`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? "active-link"
                : ""
            }
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
