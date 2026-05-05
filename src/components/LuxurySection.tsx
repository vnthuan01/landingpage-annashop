import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Phom dáng thanh lịch",
    desc: "Đường cong mắt mèo được chế tác tỉ mỉ, tôn vinh đường nét khuôn mặt. Mỗi chi tiết đều được cân chỉnh để đạt tỷ lệ vàng hoàn hảo.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Hoàn thiện đậm chất cao cấp",
    desc: "Gọng kim loại mạ vàng 18K, bản lề 5 trục siêu bền, tròng kính chống UV400. Mỗi chiếc kính là một tác phẩm nghệ thuật thu nhỏ.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Dấu ấn cho nhịp sống hiện đại",
    desc: "Từ công sở đến dạo phố, từ cà phê đến tiệc tối — ANNA là người bạn đồng hành hoàn hảo cho mọi khoảnh khắc của bạn.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function LuxurySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll(".luxury-card");
    const triggers: ScrollTrigger[] = [];
    cards.forEach((card, i) => {
      const t = gsap.fromTo(card, { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.8, delay: i * 0.15,
        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
      });
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    });
    return () => { triggers.forEach((st) => st.kill()); };
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing" style={{ backgroundColor: "var(--color-bg)", marginTop: "1rem" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.1em", color: "var(--color-accent)", marginBottom: "1.25rem", fontWeight: 400 }}>
            Sang trọng & Đẳng cấp
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "var(--color-text-primary)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.3 }}>
            Những giá trị làm nên một thiết kế luxury đúng nghĩa
          </h2>
          <div className="accent-gradient" style={{ width: "6rem", height: "1px", margin: "2rem auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "2.5rem" }}>
          {values.map((v, i) => (
            <div key={i} className="luxury-card" style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--color-stroke)",
              borderRadius: "1.5rem",
              padding: "3rem 2.5rem",
              transition: "all 0.5s",
              cursor: "default",
            }}>
              <div className="accent-gradient" style={{ width: "4.5rem", height: "4.5rem", borderRadius: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", color: "var(--color-bg)" }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: "1.375rem", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "0.02em" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.8, fontWeight: 300 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
