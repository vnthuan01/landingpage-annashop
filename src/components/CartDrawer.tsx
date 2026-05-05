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

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  totalPrice,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-[201] w-full max-w-lg bg-bg border-l border-stroke drawer-enter flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-stroke">
          <h2 className="text-xl tracking-wider font-light">Giỏ hàng</h2>
          <button
            onClick={onClose}
            className="p-3 text-muted hover:text-text-primary transition-colors cursor-pointer rounded-full hover:bg-surface"
            aria-label="Đóng"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-30">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-base">Giỏ hàng trống</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 p-5 rounded-2xl bg-surface border border-stroke"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base text-text-primary truncate font-medium">
                    {item.name}
                  </h3>
                  <p className="text-sm accent-gradient-text font-semibold mt-1">
                    {formatPrice(item.price)}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-9 h-9 rounded-full border border-stroke text-muted hover:text-text-primary hover:border-accent-blue flex items-center justify-center text-lg cursor-pointer transition-colors"
                    >
                      −
                    </button>
                    <span className="text-base text-text-primary w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-9 h-9 rounded-full border border-stroke text-muted hover:text-text-primary hover:border-accent-blue flex items-center justify-center text-lg cursor-pointer transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="self-start p-2 text-muted hover:text-red-400 transition-colors cursor-pointer rounded-full hover:bg-red-400/5"
                  aria-label="Xóa"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-8 py-6 border-t border-stroke space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-base text-muted">Tổng cộng</span>
              <span className="text-2xl accent-gradient-text font-semibold">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-4 accent-gradient text-bg text-base tracking-wider rounded-full hover:opacity-90 transition-opacity cursor-pointer font-medium"
            >
              Thanh toán
            </button>
          </div>
        )}
      </div>
    </>
  );
}
