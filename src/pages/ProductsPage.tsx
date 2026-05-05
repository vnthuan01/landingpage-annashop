import { motion } from "framer-motion";
import { products } from "../data/products";
import { productsContent } from "../data/productsContent";
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1rem", color: "var(--color-muted)", marginBottom: "4rem" }}>
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
          style={{ marginBottom: "4rem", textAlign: "center", gap: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        >
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.1em", color: "var(--color-accent)", fontWeight: 400 }}>
            {productsContent.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary">
            {productsContent.title}
          </h1>
          <p className="text-muted text-base md:text-lg font-light mx-auto leading-relaxed">
            {productsContent.description}
          </p>
          <div className="accent-gradient" style={{ width: "5rem", height: "1px", margin: "1.5rem auto 0" }} />
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
            {productsContent.features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center max-w-[260px] gap-3">
                <div className="w-16 h-16 mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E] shadow-[0_8px_30px_rgba(198,168,110,0.35)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    {feature.isCircle ? (
                      <><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-6" /></>
                    ) : (
                      <path d={feature.icon} />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg text-text-primary font-medium mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
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
