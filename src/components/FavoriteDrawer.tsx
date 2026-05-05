import type { Product } from "../data/products";
import { formatPrice } from "../data/products";

interface FavoriteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function FavoriteDrawer({
  isOpen,
  onClose,
  favorites,
  onToggleFavorite,
  onAddToCart,
}: FavoriteDrawerProps) {
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
          <h2 className="text-xl tracking-wider font-light flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-red-400">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Yêu thích
          </h2>
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
          {favorites.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-30">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p className="text-base">Chưa có sản phẩm yêu thích</p>
            </div>
          ) : (
            favorites.map((product) => (
              <div
                key={product.id}
                className="flex gap-5 p-5 rounded-2xl bg-surface border border-stroke group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base text-text-primary truncate font-medium">
                    {product.name}
                  </h3>
                  <p className="text-sm accent-gradient-text font-semibold mt-1">
                    {formatPrice(product.price)}
                  </p>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="mt-3 text-sm tracking-wider text-accent-blue hover:text-accent-blue-dark transition-colors cursor-pointer"
                  >
                    + Thêm vào giỏ
                  </button>
                </div>
                <button
                  onClick={() => onToggleFavorite(product)}
                  className="self-start p-2 text-red-400 hover:text-red-300 transition-colors cursor-pointer rounded-full hover:bg-red-400/5"
                  aria-label="Bỏ yêu thích"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
