import { Link } from "react-router-dom";

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
              Thương hiệu kính mắt thời trang dành cho giới trẻ Việt Nam. Thiết kế tối giản, chất lượng cao cấp, giá cả hợp lý — mỗi chiếc kính là một tuyên ngôn phong cách.
            </p>
          </div>

          {/* Khám phá */}
          <div>
            <h3 style={{ fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "1.75rem" }}>
              Khám phá
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { to: "/", label: "Trang chủ" },
                { to: "/san-pham", label: "Sản phẩm" },
                { to: "/ve-anna", label: "Về Anna" },
              ].map((link) => (
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
                <span style={{ fontSize: "1rem" }}>hello@annaeyewear.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-muted)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013.12 4.18 2 2 0 015.11 2h3a2 2 0 012 1.72c.13.88.36 1.76.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1.05.34 1.93.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span style={{ fontSize: "1rem" }}>0123 456 789</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-muted)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: "1rem" }}>TP. Hồ Chí Minh, Việt Nam</span>
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
            {[
              { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", d: "" },
              { label: "TikTok", d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.28 8.28 0 004.76 1.5v-3.5a4.82 4.82 0 01-1-.01z" },
            ].map((s) => (
              <a key={s.label} href="#" style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", border: "1px solid var(--color-stroke)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted)", transition: "all 0.3s", textDecoration: "none" }} className="nav-link" aria-label={s.label}>
                {s.label === "Instagram" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
