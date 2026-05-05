import type { Product } from "../data/products";
import { formatPrice } from "../data/products";

interface FavoriteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function FavoriteDrawer({ isOpen, onClose, favorites, onToggleFavorite, onAddToCart }: FavoriteDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} onClick={onClose} />
      <div className="drawer-enter" style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 201, width: "100%", maxWidth: "520px", background: "var(--color-bg)", borderLeft: "1px solid var(--color-stroke)", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 2.5rem", borderBottom: "1px solid var(--color-stroke)" }}>
          <h2 style={{ fontSize: "1.375rem", letterSpacing: "0.05em", fontWeight: 300, display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Yêu thích
          </h2>
          <button onClick={onClose} style={{ padding: "0.75rem", background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", borderRadius: "50%", transition: "color 0.3s" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "2rem 2.5rem" }}>
          {favorites.length === 0 ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--color-muted)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: "1.5rem", opacity: 0.3 }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p style={{ fontSize: "1.0625rem" }}>Chưa có sản phẩm yêu thích</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {favorites.map((product) => (
                <div key={product.id} style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", borderRadius: "1.25rem", background: "var(--color-surface)", border: "1px solid var(--color-stroke)" }}>
                  <img src={product.image} alt={product.name} style={{ width: "5.5rem", height: "5.5rem", objectFit: "cover", borderRadius: "1rem" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "1.0625rem", color: "var(--color-text-primary)", fontWeight: 500 }}>{product.name}</h3>
                    <p className="accent-gradient-text" style={{ fontSize: "1rem", fontWeight: 600, marginTop: "0.25rem" }}>{formatPrice(product.price)}</p>
                    <button onClick={() => onAddToCart(product)} style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-accent-blue)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.05em", padding: "0.375rem 0" }}>
                      + Thêm vào giỏ
                    </button>
                  </div>
                  <button onClick={() => onToggleFavorite(product)} style={{ alignSelf: "flex-start", padding: "0.5rem", background: "none", border: "none", color: "#f87171", cursor: "pointer", borderRadius: "50%", transition: "color 0.3s" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
