import { motion } from "framer-motion";
import { products } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

interface ProductsPageProps {
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductsPage({
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: ProductsPageProps) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", paddingTop: "9rem", paddingBottom: "7rem" }}>
      <div className="container-main">
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1rem", color: "var(--color-muted)", marginBottom: "2.5rem" }}>
          <Link to="/" className="hover:text-text-primary transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-text-primary">Sản phẩm</span>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] text-accent-blue mb-4 uppercase font-light">
            BỘ SƯU TẬP 2026
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl text-text-primary mb-4">
            Kính mắt mèo ANNA
          </h1>
          <p className="text-muted text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed">
            Một dòng sản phẩm duy nhất — 10 thiết kế độc đáo dành cho phong cách riêng của bạn
          </p>
          <div className="w-20 h-[1px] accent-gradient mx-auto mt-6" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-4xl mx-auto mb-20 glass rounded-2xl p-10 md:p-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl accent-gradient flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-3">Thiết kế Cat Eye</h3>
              <p className="text-base text-muted font-light leading-relaxed">
                Kiểu dáng mắt mèo sang trọng, tôn vinh đường nét khuôn mặt.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl accent-gradient flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bg">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-3">Chất lượng cao</h3>
              <p className="text-base text-muted font-light leading-relaxed">
                Chất liệu bền bỉ, tròng kính chống UV, khung nhẹ thoải mái.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl accent-gradient flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-3">Giá hợp lý</h3>
              <p className="text-base text-muted font-light leading-relaxed">
                Từ 450.000đ — Phù hợp mọi túi tiền của giới trẻ.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "2.5rem" }}>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
