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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <p className="text-xs tracking-[0.4em] text-accent-blue mb-6 uppercase font-light">
            BỘ SƯU TẬP 2026
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl text-text-primary mb-6">
            Kính mắt mèo ANNA
          </h1>
          <p className="text-muted text-base md:text-lg font-light mx-auto leading-relaxed">
            Một dòng sản phẩm duy nhất — 10 thiết kế độc đáo dành cho phong cách riêng của bạn
          </p>
          <div className="w-20h-[1px] accent-gradient mx-auto mt-6" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="glass"
          style={{
            maxWidth: "64rem",
            margin: "0 auto 5rem",
            padding: "3.5rem",
            borderRadius: "1.5rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.5rem",
              justifyItems: "center",
            }}
          >
            {/* ITEM */}
            <div className="flex flex-col items-center text-center max-w-[260px]">
              <div className="w-16 h-16 mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E] shadow-[0_8px_30px_rgba(198,168,110,0.35)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-2">
                Thiết kế Cat Eye
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Kiểu dáng mắt mèo sang trọng, tôn vinh đường nét khuôn mặt.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center text-center max-w-[260px]">
              <div className="w-16 h-16 mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E] shadow-[0_8px_30px_rgba(198,168,110,0.35)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-2">
                Chất lượng cao
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Chất liệu bền bỉ, tròng kính chống UV, khung nhẹ thoải mái.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center text-center max-w-[260px]">
              <div className="w-16 h-16 mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E] shadow-[0_8px_30px_rgba(198,168,110,0.35)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-2">
                Giá hợp lý
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Từ 450.000đ — phù hợp với phong cách thời trang hiện đại.
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
