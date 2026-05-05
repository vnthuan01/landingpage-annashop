import { Link } from "react-router-dom";
import { products } from "../data/products";
import { formatPrice } from "../data/products";

export default function PickSection() {
  const featured = products.slice(0, 3);

  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--color-surface)", marginTop: "1rem" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.8125rem", letterSpacing: "0.4em", color: "var(--color-accent-blue)", marginBottom: "1.25rem", textTransform: "uppercase", fontWeight: 300 }}>
            BỘ SƯU TẬP
          </p>
          <h2 className="font-display" style={{ fontStyle: "italic", fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "var(--color-text-primary)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.3 }}>
            Chọn một thiết kế xứng đáng với phong cách của bạn
          </h2>
          <div className="accent-gradient" style={{ width: "6rem", height: "1px", margin: "2rem auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "2.5rem" }}>
          {featured.map((product) => (
            <Link to="/san-pham" key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid var(--color-stroke)",
                background: "var(--color-bg)",
                transition: "all 0.5s",
                cursor: "pointer",
              }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                  <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }} loading="lazy" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", display: "flex", alignItems: "flex-end", padding: "2rem" }}>
                    <div>
                      <span style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", color: "var(--color-accent-blue)", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>{product.style}</span>
                      <h3 className="font-display" style={{ fontSize: "1.5rem", fontStyle: "italic", color: "var(--color-text-primary)" }}>{product.name}</h3>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", fontWeight: 300, marginBottom: "0.25rem" }}>{product.material}</p>
                    <p className="accent-gradient-text" style={{ fontSize: "1.25rem", fontWeight: 600 }}>{formatPrice(product.price)}</p>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-accent-blue)", letterSpacing: "0.05em" }}>
                    Khám phá
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link to="/san-pham" className="btn-primary" style={{ padding: "1.125rem 3rem" }}>
            Xem tất cả sản phẩm →
          </Link>
        </div>
      </div>
    </section>
  );
}
