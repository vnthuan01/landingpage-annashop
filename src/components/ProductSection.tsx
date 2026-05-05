import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

interface ProductSectionProps {
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductSection({
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: ProductSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Use GSAP context for clean React integration
    const ctx = gsap.context(() => {
      const scrollAmount = -(track.scrollWidth - window.innerWidth + 80);

      gsap.to(track, {
        x: scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 500}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef); // scope to containerRef

    return () => ctx.revert(); // GSAP context.revert() cleans up everything including pin-spacers
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-bg"
    >
      {/* Header */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, paddingTop: "7rem", paddingBottom: "2.5rem", background: "linear-gradient(to bottom, var(--color-bg), rgba(10,10,10,0.95), transparent)" }}>
        <div className="container-main" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.4em", color: "var(--color-accent-blue)", marginBottom: "0.75rem", textTransform: "uppercase", fontWeight: 300 }}>
            SẢN PHẨM
          </p>
          <h2 className="font-display" style={{ fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "var(--color-text-primary)" }}>
            Kính mắt mèo ANNA
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "1rem", marginTop: "0.75rem", fontWeight: 300 }}>
            Một dòng sản phẩm duy nhất — Trượt để khám phá
          </p>
        </div>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        style={{ display: "flex", alignItems: "center", gap: "3rem", height: "100%", paddingTop: "16rem", paddingBottom: "6rem", paddingLeft: "5rem", paddingRight: "5rem", width: "fit-content" }}
      >
        <div style={{ flexShrink: 0, width: "2rem" }} />

        {products.map((product, index) => (
          <div key={product.id} style={{ flexShrink: 0, width: "340px" }}>
            <ProductCard
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
              index={index}
            />
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-[320px] h-full flex items-center justify-center">
          <div className="text-center">
            <p className="font-display italic text-3xl text-text-primary mb-4">
              Khám phá thêm
            </p>
            <div className="w-16 h-[1px] accent-gradient mx-auto mb-4" />
            <p className="text-muted text-base">10 mẫu kính độc đáo</p>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        <span className="text-xs tracking-[0.2em] text-muted uppercase">
          Cuộn để xem
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted animate-pulse"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  );
}
