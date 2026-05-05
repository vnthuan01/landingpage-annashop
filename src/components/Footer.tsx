import { Link } from "react-router-dom";
import { aboutContent } from "../data/about";
import { navLinks, socialLinks } from "../data/navigation";
import { contactInfo } from "../data/contact";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-stroke)", marginTop: "2rem" }}>
      <div className="container-main" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          {/* About ANNA */}
          <div>
            <Link to="/" className="accent-gradient-text" style={{ fontSize: "1.5rem", letterSpacing: "0.1em", fontWeight: 400, textDecoration: "none", display: "inline-block", marginBottom: "1.5rem" }}>
              Anna Eyewear
            </Link>
            <p style={{ fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.8, fontWeight: 300, maxWidth: "320px" }}>
              {aboutContent.story}
            </p>
          </div>

          {/* Khám phá */}
          <div>
            <h3 style={{ fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "1.75rem" }}>
              Khám phá
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.filter(link => link.to !== "/lien-he").map((link) => (
                <Link key={link.to} to={link.to} className="nav-link" style={{ fontSize: "1rem", color: "var(--color-muted)", textDecoration: "none", transition: "color 0.3s", padding: "0.25rem 0" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 style={{ fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "1.75rem" }}>
              Liên hệ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-muted)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                </svg>
                <span style={{ fontSize: "1rem" }}>{contactInfo.email}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-muted)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013.12 4.18 2 2 0 015.11 2h3a2 2 0 012 1.72c.13.88.36 1.76.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1.05.34 1.93.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span style={{ fontSize: "1rem" }}>{contactInfo.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-muted)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: "1rem" }}>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--color-stroke)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>
            © 2026 ANNA Eyewear. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", border: "1px solid var(--color-stroke)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted)", transition: "all 0.3s", textDecoration: "none" }} className="nav-link" aria-label={s.label}>
                {s.isInstagram ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
