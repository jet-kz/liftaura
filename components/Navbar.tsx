"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/apply", label: "Support Areas" },
  { href: "/#process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <nav
        className={`navbar ${scrolled || !isHome ? "scrolled" : "at-top"}`}
        style={!scrolled && isHome ? { background: "transparent" } : {}}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1" style={{ zIndex: 102 }}>
            <img src="/logo.jpeg" alt="Liftaura" className="h-15 w-15 object-contain rounded-full border-2 border-white/10" />
            <span
              className="font-bold text-sm tracking-wide transition-colors duration-300"
              style={{ color: transparent ? "#fff" : "var(--text-dark)" }}
            >
              Liftaura Initiative
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ alignItems: "center", gap: "2rem", zIndex: 102 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ color: transparent ? "rgba(255,255,255,0.85)" : "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn btn-gold" style={{ padding: "0.625rem 1.25rem" }}>
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "transparent", border: "none", cursor: "pointer",
              zIndex: 101, color: transparent ? "#fff" : "var(--text-dark)",
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Side Drawer ──────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(2,12,27,0.55)",
          backdropFilter: "blur(4px)",
          transition: "opacity 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 201,
          width: "100%", maxWidth: "340px",
          background: "var(--bg-white)",
          borderLeft: "1px solid var(--border-light)",
          display: "flex", flexDirection: "column",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: "-8px 0 40px rgba(2,12,27,0.18)",
        }}
      >
        {/* Drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 1.5rem 1rem" }}>
          <span style={{ fontWeight: 800, fontSize: "1rem", color: "var(--text-dark)" }}>Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex", alignItems: "center" }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border-light)", margin: "0 1.5rem" }} />

        {/* Nav links */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1rem" }}>
          {[{ href: "/", label: "Home" }, ...navLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Drawer footer CTA */}
        <div style={{ padding: "1.5rem", borderTop: "1px solid var(--border-light)" }}>
          <Link
            href="/apply"
            className="btn btn-primary flex-center"
            style={{ width: "100%", gap: "0.5rem" }}
            onClick={() => setMenuOpen(false)}
          >
            Apply for Support <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline flex-center"
            style={{ width: "100%", marginTop: "0.75rem" }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
