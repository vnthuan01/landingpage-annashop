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
      video.play().catch(() => {});
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div key={current} className="animate-fade-in">
          {banner.eyebrow && (
            <p className="text-xs md:text-sm tracking-[0.4em] text-accent-blue mb-4 font-light uppercase">
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
        <div className="mt-10 flex gap-4">
          <button
            onClick={scrollToProducts}
            className="px-8 py-3.5 accent-gradient text-bg text-base tracking-wider rounded-full hover:opacity-90 transition-opacity cursor-pointer font-medium"
          >
            Xem sản phẩm
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 border border-stroke text-text-primary text-base tracking-wider rounded-full hover:border-accent-blue transition-colors cursor-pointer"
          >
            Liên hệ ngay
          </button>
        </div>

        {/* Banner dots */}
        <div className="mt-8 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
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
