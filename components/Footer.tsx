"use client";

import Link from "next/link";
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

const links = {
  Initiative: [
    { href: "#about",        label: "About Us" },
    { href: "#support",      label: "What We Support" },
    { href: "#process",      label: "Our Process" },
    { href: "#apply",        label: "Apply" },
    { href: "/terms",        label: "Terms and Conditions" },
  ],
  "Get Involved": [
    { href: "#",             label: "Contribute" },
    { href: "#",             label: "Volunteer" },
    { href: "#",             label: "Partner With Us" },
    { href: "#",             label: "FAQ" },
  ],
  Connect: [
    { href: "#", icon: <InstagramIcon />, label: "Instagram" },
    { href: "#", icon: <TwitterIcon />,   label: "Twitter" },
    { href: "#", icon: <LinkedinIcon />,  label: "LinkedIn" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark" style={{ borderTop: "1px solid var(--border-dark)" }}>
      <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "1.5rem" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 800, fontSize: "1.25rem", color: "#fff", marginBottom: "0.75rem" }}>
              Liftaura Initiative
            </p>
            <p style={{ color: "var(--text-light-muted)", fontSize: "0.8125rem", maxWidth: "280px", lineHeight: 1.7 }}>
              A community-driven platform creating opportunities and meaningful impact through collective support and transparency.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "0.6875rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "var(--text-muted)", marginBottom: "1rem",
                }}
              >
                {title}
              </h4>
              <ul className="flex-col gap-2" style={{ listStyle: "none" }}>
                {items.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-light-muted)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light-muted)")}
                    >
                      {/* @ts-expect-error icon may not exist on all items */}
                      {link.icon && <span>{link.icon}</span>}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex-wrap-center"
          style={{
            paddingTop: "1.25rem", marginTop: "2.5rem",
            borderTop: "1px solid var(--border-dark)",
            justifyContent: "space-between",
            color: "var(--text-muted)",
          }}
        >
          <p style={{ fontSize: "0.6875rem" }}>
            © {new Date().getFullYear()} Liftaura Initiative. All rights reserved.
          </p>
          <p style={{ fontSize: "0.6875rem" }}>Powered by community support</p>
        </div>
      </div>
    </footer>
  );
}
