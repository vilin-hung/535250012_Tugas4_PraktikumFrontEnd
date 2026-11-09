"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/team", label: "Our Team" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        vilmuse<span>.</span>
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href ? "active-link" : ""
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}