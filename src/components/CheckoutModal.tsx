import { useState } from "react";
import { formatPrice } from "../data/products";
import type { CartItem } from "../data/products";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  totalPrice: number;
  onSubmit: () => void;
}

export default function CheckoutModal({ isOpen, onClose, cart, totalPrice, onSubmit }: CheckoutModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout payload:", { ...form, cart });
    setSubmitted(true);
    setTimeout(() => {
      onSubmit();
      setSubmitted(false);
      setForm({ name: "", phone: "", address: "", note: "" });
    }, 2000);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem 1.5rem",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-stroke)",
    borderRadius: "0.75rem",
    fontSize: "1rem",
    color: "var(--color-text-primary)",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8125rem",
    color: "var(--color-muted)",
    marginBottom: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  };

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} onClick={onClose} />
      <div style={{ position: "fixed", inset: 0, zIndex: 301, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
        <div className="animate-fade-in" style={{ width: "100%", maxWidth: "560px", background: "var(--color-bg)", border: "1px solid var(--color-stroke)", borderRadius: "1.5rem", overflow: "hidden" }}>
          {submitted ? (
            <div style={{ padding: "5rem 3rem", textAlign: "center" }}>
              <div className="accent-gradient" style={{ width: "5rem", height: "5rem", borderRadius: "50%", margin: "0 auto 1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h3 className="font-display" style={{ fontSize: "1.75rem", fontStyle: "italic", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>Đặt hàng thành công!</h3>
              <p style={{ fontSize: "1rem", color: "var(--color-muted)" }}>Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 2.5rem", borderBottom: "1px solid var(--color-stroke)" }}>
                <h2 style={{ fontSize: "1.375rem", letterSpacing: "0.05em", fontWeight: 300 }}>Thanh toán</h2>
                <button onClick={onClose} style={{ padding: "0.5rem", background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ padding: "2rem 2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Họ và tên *</label>
                    <input type="text" required value={form.name} onChange={(e) => updateField("name", e.target.value)} style={inputStyle} placeholder="Nhập họ và tên" />
                  </div>
                  <div>
                    <label style={labelStyle}>Số điện thoại *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} style={inputStyle} placeholder="Nhập số điện thoại" />
                  </div>
                  <div>
                    <label style={labelStyle}>Địa chỉ *</label>
                    <input type="text" required value={form.address} onChange={(e) => updateField("address", e.target.value)} style={inputStyle} placeholder="Nhập địa chỉ giao hàng" />
                  </div>
                  <div>
                    <label style={labelStyle}>Ghi chú</label>
                    <textarea value={form.note} onChange={(e) => updateField("note", e.target.value)} rows={3} style={{ ...inputStyle, resize: "none" }} placeholder="Ghi chú thêm (không bắt buộc)" />
                  </div>
                </div>

                {/* Summary */}
                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--color-stroke)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <span style={{ fontSize: "1rem", color: "var(--color-muted)" }}>{cart.length} sản phẩm</span>
                    <span className="accent-gradient-text" style={{ fontSize: "1.375rem", fontWeight: 600 }}>{formatPrice(totalPrice)}</span>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1.125rem" }}>
                    Xác nhận đặt hàng
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
