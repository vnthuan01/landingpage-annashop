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

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  totalPrice,
  onSubmit,
}: CheckoutModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form, cart };
    console.log("Checkout payload:", payload);
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

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[301] flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-bg border border-stroke rounded-2xl overflow-hidden animate-fade-in">
          {submitted ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full accent-gradient flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bg">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-display italic text-text-primary mb-2">
                Đặt hàng thành công!
              </h3>
              <p className="text-sm text-muted">
                Chúng tôi sẽ liên hệ với bạn sớm nhất.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-stroke">
                <h2 className="text-lg tracking-wider font-light">
                  Thanh toán
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 text-muted hover:text-text-primary transition-colors cursor-pointer"
                  aria-label="Đóng"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div>
                  <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
                    Họ và tên *
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full px-5 py-3.5 bg-surface border border-stroke rounded-xl text-base text-text-primary placeholder-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
                    Số điện thoại *
                  </label>
                  <input
                    id="checkout-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-5 py-3.5 bg-surface border border-stroke rounded-xl text-base text-text-primary placeholder-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
                    Địa chỉ *
                  </label>
                  <input
                    id="checkout-address"
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className="w-full px-5 py-3.5 bg-surface border border-stroke rounded-xl text-base text-text-primary placeholder-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Nhập địa chỉ giao hàng"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
                    Ghi chú
                  </label>
                  <textarea
                    id="checkout-note"
                    value={form.note}
                    onChange={(e) => updateField("note", e.target.value)}
                    rows={3}
                    className="w-full px-5 py-3.5 bg-surface border border-stroke rounded-xl text-base text-text-primary placeholder-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    placeholder="Ghi chú thêm (không bắt buộc)"
                  />
                </div>

                {/* Order summary */}
                <div className="pt-4 border-t border-stroke">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted">
                      {cart.length} sản phẩm
                    </span>
                    <span className="text-lg accent-gradient-text font-semibold">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <button
                    type="submit"
                    id="checkout-submit"
                    className="w-full py-4 accent-gradient text-bg text-base tracking-wider rounded-full hover:opacity-90 transition-opacity cursor-pointer font-medium"
                  >
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
