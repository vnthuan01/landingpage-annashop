import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ padding: "4rem 0", backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-stroke)", marginTop: "2rem" }}>
      <div className="container-main">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link to="/" className="accent-gradient-text" style={{ fontSize: "1.125rem", letterSpacing: "0.25em", fontWeight: 300 }}>
              ANNA EYEWEAR
            </Link>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-stroke)" }} />
            <span style={{ fontSize: "1rem", color: "var(--color-muted)" }}>Sẵn sàng phục vụ</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", path: "" },
              { label: "TikTok", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.28 8.28 0 004.76 1.5v-3.5a4.82 4.82 0 01-1-.01z" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                style={{ width: "3rem", height: "3rem", borderRadius: "50%", border: "1px solid var(--color-stroke)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted)", transition: "all 0.3s" }}
                aria-label={social.label}
              >
                {social.label === "Instagram" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <p style={{ fontSize: "1rem", color: "var(--color-muted)" }}>
            © 2026 ANNA Eyewear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
