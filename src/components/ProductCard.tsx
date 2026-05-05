import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import type { Product } from "../data/products";
import { formatPrice } from "../data/products";
import { flyToTarget } from "../utils/animations";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  index: number;
}

function ProductDetailModal({ product, onClose, onAddToCart, isFavorite, onToggleFavorite }: {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (p: Product) => void;
}) {
  const [activeView, setActiveView] = useState(0);
  const views = [
    { label: "Chính diện", transform: "rotate(0deg)" },
    { label: "Nghiêng trái", transform: "rotate(-15deg) scaleX(0.9)" },
    { label: "Nghiêng phải", transform: "rotate(15deg) scaleX(0.9)" },
    { label: "Cận chi tiết", transform: "scale(1.4)" },
  ];

  const modalContent = (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 9999 }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", minHeight: "500px" }}>
          {/* Image gallery */}
          <div style={{ backgroundColor: "var(--color-bg)", padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain", transition: "transform 0.5s ease", transform: views[activeView].transform }}
              />
            </div>
            {/* View selector */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginTop: "2rem" }}>
              {views.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveView(i)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.8125rem",
                    border: `1px solid ${i === activeView ? "var(--color-accent)" : "var(--color-stroke)"}`,
                    background: i === activeView ? "rgba(205,155,81,0.1)" : "transparent",
                    color: i === activeView ? "var(--color-accent)" : "var(--color-muted)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div style={{ padding: "3rem", display: "flex", flexDirection: "column" }}>
            <button onClick={onClose} style={{ alignSelf: "flex-end", padding: "0.5rem", background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
              <div>
                <p style={{ fontSize: "0.8125rem", letterSpacing: "0.2em", color: "var(--color-accent)", marginBottom: "0.75rem" }}>{product.style}</p>
                <h2 className="font-display" style={{ fontSize: "2rem", color: "var(--color-text-primary)" }}>{product.name}</h2>
              </div>

              <p className="accent-gradient-text" style={{ fontSize: "1.75rem", fontWeight: 600 }}>{formatPrice(product.price)}</p>

              <p style={{ fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.8, fontWeight: 300 }}>{product.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", padding: "1.25rem 0", borderTop: "1px solid var(--color-stroke)", borderBottom: "1px solid var(--color-stroke)" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: "0.375rem" }}>Chất liệu</p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-primary)" }}>{product.material}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: "0.375rem" }}>Bảo hành</p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-primary)" }}>6 tháng</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: "0.375rem" }}>UV</p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-primary)" }}>UV400</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                <button onClick={() => onAddToCart(product)} className="btn-primary" style={{ flex: 1 }}>
                  Thêm vào giỏ
                </button>
                <button
                  onClick={() => onToggleFavorite(product)}
                  style={{
                    width: "3.5rem", height: "3.5rem", borderRadius: "50%",
                    border: `1px solid ${isFavorite ? "rgba(248,113,113,0.3)" : "var(--color-stroke)"}`,
                    background: isFavorite ? "rgba(248,113,113,0.1)" : "transparent",
                    color: isFavorite ? "#f87171" : "var(--color-muted)",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart, index }: ProductCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        className="card-hover-effect group"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-stroke)", borderRadius: "1rem", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -6, boxShadow: "0 15px 40px rgba(0,0,0,0.1)", borderColor: "var(--color-accent)" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        onClick={() => setShowDetail(true)}
      >
        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "1", overflow: "hidden", backgroundColor: "var(--color-bg)" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }} loading="lazy" />
          
          {/* Hover overlay */}
          <div className="group" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", opacity: 0, transition: "opacity 0.5s", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ padding: "0.75rem 2rem", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "9999px", fontSize: "0.875rem", color: "var(--color-text-primary)", letterSpacing: "0.05em" }}>
              Xem chi tiết
            </span>
          </div>

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(product);
              if (!isFavorite) flyToTarget(e.clientX, e.clientY, '#nav-favorite-icon', product.image);
            }}
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              width: "2.75rem", height: "2.75rem", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: isFavorite ? "rgba(248,113,113,0.2)" : "rgba(0,0,0,0.3)",
              color: isFavorite ? "#f87171" : "rgba(255,255,255,0.6)",
              border: "none", cursor: "pointer", transition: "all 0.3s",
              opacity: isFavorite ? 1 : 0.7,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Style badge */}
          <span style={{ position: "absolute", bottom: "1rem", left: "1rem", padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.6875rem", letterSpacing: "0.1em", background: "rgba(0,0,0,0.6)", color: "var(--color-accent)", backdropFilter: "blur(8px)" }}>
            {product.style}
          </span>
        </div>

        {/* Info */}
        <div style={{ padding: "1.25rem 1.5rem" }}>
          <h3 style={{ fontSize: "1.0625rem", fontWeight: 500, color: "var(--color-text-primary)", letterSpacing: "0.02em" }}>
            {product.name}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginTop: "0.375rem", fontWeight: 300, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {product.description}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem" }}>
            <p className="accent-gradient-text" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              {formatPrice(product.price)}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
                flyToTarget(e.clientX, e.clientY, '#nav-cart-icon', product.image);
              }}
              className="accent-gradient"
              style={{ padding: "0.5rem 1.25rem", borderRadius: "9999px", fontSize: "0.8125rem", color: "var(--color-bg)", border: "none", cursor: "pointer", fontWeight: 500, transition: "opacity 0.3s" }}
            >
              + Giỏ hàng
            </button>
          </div>
        </div>
      </motion.div>

      {showDetail && (
        <ProductDetailModal product={product} onClose={() => setShowDetail(false)} onAddToCart={onAddToCart} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
      )}
    </>
  );
}
