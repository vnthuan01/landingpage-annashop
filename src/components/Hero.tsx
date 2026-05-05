import { useEffect, useRef, useState } from "react";

const banners = [
  {
    eyebrow: "BỘ SƯU TẬP 2026",
    title: "Kính mắt mèo ANNA",
    sub: "Tôn vinh nét đẹp cá tính",
  },
  {
    eyebrow: "",
    title: "Một thiết kế – Nhiều phong cách",
    sub: "Phù hợp mọi khuôn mặt",
  },
  {
    eyebrow: "",
    title: "Đơn giản nhưng đẳng cấp",
    sub: "Tinh tế trong từng chi tiết",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => { });
    }
  }, []);

  const banner = banners[current];

  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/product.png"
        >
          <source src="/videohsl.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 1rem" }}>
        <div key={current} className="animate-fade-in">
          {banner.eyebrow && (
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.4em", marginBottom: "1rem", textTransform: "uppercase", fontWeight: 300 }}>
              {banner.eyebrow}
            </p>
          )}
          <h1 className="font-display italic text-4xl md:text-6xl lg:text-7xl text-text-primary mb-4 leading-tight">
            {banner.title}
          </h1>
          <p className="text-muted text-base md:text-lg font-light max-w-md mx-auto">
            {banner.sub}
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
          <button onClick={scrollToProducts} className="btn-primary">
            <div className="text-center flex items-center gap-2">
              Xem sản phẩm
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="M19 12l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <button onClick={scrollToContact} className="btn-outline">
            <div className="text-center flex items-center gap-2">
              Liên hệ ngay
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </button>
        </div>

        {/* Banner dots */}
        <div className="absolute bottom-50 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current
                ? "w-6 accent-gradient"
                : "bg-stroke hover:bg-muted"
                }`}
              aria-label={`Banner ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-muted uppercase">
          Cuộn xuống
        </span>
        <div className="w-[1px] h-8 bg-stroke overflow-hidden">
          <div className="w-full h-3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
