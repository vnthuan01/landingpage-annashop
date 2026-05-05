import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { galleryImages as images } from "../data/gallery";

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".gallery-item");
    const triggers: ScrollTrigger[] = [];

    items.forEach((item, i) => {
      const tween = gsap.fromTo(
        item,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.08,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="section-spacing" style={{ backgroundColor: "var(--color-bg-gold)", marginTop: "1rem" }}>
      <div className="container-main">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.1em", color: "var(--color-text-on-gold)", opacity: 0.8, marginBottom: "1.25rem", fontWeight: 400 }}>
            Sản phẩm thực tế
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "var(--color-text-on-gold)", marginBottom: "1.5rem", textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            Lookbook
          </h2>
          <div className="accent-gradient" style={{ width: "6rem", height: "1px", margin: "0 auto" }} />
        </div>

        {/* Gallery grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", gridAutoRows: "300px" }}>
          {images.map((img) => (
            <div
              key={img.id}
              className={`gallery-item group ${img.span}`}
              style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }}
                loading="lazy"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", transition: "opacity 0.5s" }} className="opacity-0 group-hover:opacity-100" />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", transition: "opacity 0.5s", zIndex: 10 }} className="opacity-0 group-hover:opacity-100">
                <p style={{ fontSize: "0.875rem", color: "#FFFFFF", letterSpacing: "0.05em" }}>
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
