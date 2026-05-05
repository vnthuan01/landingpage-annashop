import type { CartItem } from "../data/products";
import { formatPrice } from "../data/products";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, cart, totalPrice, onUpdateQuantity, onRemove, onCheckout }: CartDrawerProps) {
  if (!isOpen) return null;

  const qtyBtnStyle: React.CSSProperties = {
    width: "2.5rem", height: "2.5rem", borderRadius: "50%",
    border: "1px solid var(--color-stroke)", background: "transparent",
    color: "var(--color-muted)", fontSize: "1.125rem",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", transition: "all 0.3s",
  };

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} onClick={onClose} />
      <div className="drawer-enter" style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 201, width: "100%", maxWidth: "520px", background: "var(--color-bg)", borderLeft: "1px solid var(--color-stroke)", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 2.5rem", borderBottom: "1px solid var(--color-stroke)" }}>
          <h2 style={{ fontSize: "1.375rem", letterSpacing: "0.05em", fontWeight: 300 }}>Giỏ hàng</h2>
          <button onClick={onClose} style={{ padding: "0.75rem", background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", borderRadius: "50%", transition: "color 0.3s" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "2rem 2.5rem" }}>
          {cart.length === 0 ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--color-muted)" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: "1.5rem", opacity: 0.3 }}>
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p style={{ fontSize: "1.0625rem" }}>Giỏ hàng trống</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", borderRadius: "1.25rem", background: "var(--color-surface)", border: "1px solid var(--color-stroke)" }}>
                  <img src={item.image} alt={item.name} style={{ width: "5.5rem", height: "5.5rem", objectFit: "cover", borderRadius: "1rem" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "1.0625rem", color: "var(--color-text-primary)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</h3>
                    <p className="accent-gradient-text" style={{ fontSize: "1rem", fontWeight: 600, marginTop: "0.25rem" }}>{formatPrice(item.price)}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.75rem" }}>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} style={qtyBtnStyle}>−</button>
                      <span style={{ fontSize: "1.0625rem", color: "var(--color-text-primary)", fontWeight: 500, width: "2rem", textAlign: "center" }}>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} style={qtyBtnStyle}>+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} style={{ alignSelf: "flex-start", padding: "0.5rem", background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", borderRadius: "50%", transition: "color 0.3s" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: "2rem 2.5rem", borderTop: "1px solid var(--color-stroke)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.0625rem", color: "var(--color-muted)" }}>Tổng cộng</span>
              <span className="accent-gradient-text" style={{ fontSize: "1.5rem", fontWeight: 600 }}>{formatPrice(totalPrice)}</span>
            </div>
            <button onClick={onCheckout} className="btn-primary" style={{ width: "100%", padding: "1.125rem" }}>
              Thanh toán
            </button>
          </div>
        )}
      </div>
    </>
  );
}
