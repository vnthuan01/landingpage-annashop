import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  cartCount: number;
  favoriteCount: number;
  onCartClick: () => void;
  onFavoriteClick: () => void;
}

export default function Navbar({ cartCount, favoriteCount, onCartClick, onFavoriteClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: scrolled ? "1rem" : "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 100,
    width: "min(92%, 1300px)",
    padding: "1rem 2.5rem",
    borderRadius: "9999px",
    background: scrolled ? "rgba(255, 249, 240, 0.95)" : "rgba(255, 249, 240, 0.7)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid var(--color-stroke)",
    transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: "0.9375rem",
    letterSpacing: "0.04em",
    color: active ? "var(--color-text-primary)" : "var(--color-muted)",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    transition: "all 0.3s",
    position: "relative",
  });

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src="/logo_anna.png"
            alt="ANNA"
            style={{
              height: "2.2rem",
              transform: "scale(2.8)",
              transformOrigin: "left center",
              objectFit: "contain",
            }}
          />        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center" style={{ gap: "0.25rem" }}>
          <Link to="/" className="nav-link" style={linkStyle(location.pathname === "/")}>Trang chủ</Link>
          <Link to="/san-pham" className="nav-link" style={linkStyle(location.pathname === "/san-pham")}>Sản phẩm</Link>
          <Link to="/ve-anna" className="nav-link" style={linkStyle(location.pathname === "/ve-anna")}>Về Anna</Link>
          <Link to="/lien-he" className="nav-link" style={linkStyle(location.pathname === "/lien-he")}>Liên hệ</Link>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <div className="hidden md:block" style={{ marginRight: "0.25rem" }}>
            <Link to="/san-pham" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem", textDecoration: "none", borderRadius: "9999px" }}>Khám phá ngay</Link>
          </div>
          <button id="nav-favorite-icon" onClick={onFavoriteClick} className="relative" style={{ padding: "0.625rem", color: "var(--color-muted)", cursor: "pointer", background: "none", border: "none", transition: "all 0.3s" }} aria-label="Yêu thích">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {favoriteCount > 0 && (
              <span className="accent-gradient" style={{ position: "absolute", top: "2px", right: "2px", width: "18px", height: "18px", borderRadius: "50%", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-bg)", fontWeight: 700 }}>
                {favoriteCount}
              </span>
            )}
          </button>

          <button id="nav-cart-icon" onClick={onCartClick} className="relative" style={{ padding: "0.625rem", color: "var(--color-muted)", cursor: "pointer", background: "none", border: "none", transition: "all 0.3s" }} aria-label="Giỏ hàng">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="accent-gradient" style={{ position: "absolute", top: "2px", right: "2px", width: "18px", height: "18px", borderRadius: "50%", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-bg)", fontWeight: 700 }}>
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" style={{ padding: "0.625rem", color: "var(--color-muted)", cursor: "pointer", background: "none", border: "none" }} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position: "fixed", top: "6rem", left: "50%", transform: "translateX(-50%)", zIndex: 99, width: "min(90%, 400px)", padding: "2rem", borderRadius: "1.5rem", background: "rgba(255, 249, 240, 0.95)", backdropFilter: "blur(24px)", border: "1px solid var(--color-stroke)", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }} className="animate-fade-in">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { to: "/", label: "Trang chủ" },
              { to: "/san-pham", label: "Sản phẩm" },
              { to: "/ve-anna", label: "Về Anna" },
            ].map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
                style={{ padding: "1rem 1.5rem", fontSize: "1.125rem", color: "var(--color-muted)", borderRadius: "1rem", textDecoration: "none", transition: "all 0.3s" }}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
