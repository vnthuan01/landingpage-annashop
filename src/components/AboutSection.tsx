import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".about-animate");
    const triggers: ScrollTrigger[] = [];

    elements.forEach((el, i) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
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
    <section id="about" ref={sectionRef} className="section-spacing" style={{ backgroundColor: "var(--color-bg)", marginTop: "1rem" }}>
      <div className="container-main">
        {/* Header */}
        <div className="text-center about-animate" style={{ marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.4em", color: "var(--color-accent-blue)", marginBottom: "1.25rem", textTransform: "uppercase", fontWeight: 300 }}>
            VỀ ANNA
          </p>
          <h2 className="font-display" style={{ fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "var(--color-text-primary)", marginBottom: "1.5rem" }}>
            Câu chuyện thương hiệu
          </h2>
          <div className="accent-gradient" style={{ width: "6rem", height: "1px", margin: "0 auto" }} />
        </div>

        {/* Content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="md:grid-cols-2">
          {/* Story */}
          <div className="about-animate">
            <p style={{ color: "var(--color-muted)", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.8, fontWeight: 300 }}>
              <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>ANNA</span> là
              thương hiệu kính thời trang được thành lập với triết lý thiết kế
              tối giản, giá cả hợp lý và phù hợp với phong cách của giới trẻ
              Việt Nam. Mỗi chiếc kính đều được chế tác tỉ mỉ, mang đến vẻ đẹp
              tinh tế nhưng không kém phần cá tính.
            </p>
          </div>

          {/* Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                icon: <><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-6" /></>,
                title: "Sứ mệnh",
                desc: "Mang đến vẻ đẹp tinh tế, hiện đại cho mọi người với mức giá phải chăng.",
              },
              {
                icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
                title: "Tầm nhìn",
                desc: "Trở thành thương hiệu kính phổ biến và được yêu thích nhất tại Việt Nam.",
              },
              {
                icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
                title: "Giá trị cốt lõi",
                desc: "Thiết kế tối giản · Chất lượng cao · Giá hợp lý",
              },
            ].map((item, i) => (
              <div className="about-animate" key={i}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                  <div className="accent-gradient" style={{ width: "4rem", height: "4rem", borderRadius: "1rem", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-bg)" }}>
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", letterSpacing: "0.05em", marginBottom: "0.75rem", fontWeight: 500 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--color-muted)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
