import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { contactInfo } from "../data/contact";
const { warranty: warrantyItems } = contactInfo;

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll(".contact-animate");
    const triggers: ScrollTrigger[] = [];
    elements.forEach((el, i) => {
      const t = gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.1,
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      });
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    });
    return () => { triggers.forEach((st) => st.kill()); };
  }, []);

  const iconBoxStyle: React.CSSProperties = {
    width: "4rem", height: "4rem", borderRadius: "1rem",
    backgroundColor: "var(--color-bg)", border: "1px solid var(--color-stroke)",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  };

  const warrantyBoxStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: "1.5rem",
    padding: "1.5rem", borderRadius: "1rem",
    backgroundColor: "var(--color-bg)", border: "1px solid var(--color-stroke)",
  };

  return (
    <section id="contact" ref={sectionRef} className="section-spacing" style={{ backgroundColor: "var(--color-surface)", marginTop: "1rem" }}>
      <div className="container-main">
        <div className="contact-animate" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "var(--color-text-primary)", marginBottom: "1.5rem" }}>
            Liên hệ với ANNA ngay hôm nay
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "1.125rem", fontWeight: 300, maxWidth: "36rem", margin: "0 auto" }}>
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
          <div className="accent-gradient" style={{ width: "6rem", height: "1px", margin: "2rem auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "4rem" }}>
          <div className="contact-animate">
            <h3 style={{ fontSize: "1.125rem", letterSpacing: "0.1em", color: "var(--color-text-primary)", marginBottom: "2.5rem", fontWeight: 500 }}>
              Thông tin liên hệ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <a href={`mailto:${contactInfo.email}`} style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--color-muted)", textDecoration: "none" }}>
                <div style={iconBoxStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                  </svg>
                </div>
                <span style={{ fontSize: "1.125rem" }}>{contactInfo.email}</span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--color-muted)" }}>
                <div style={iconBoxStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.76.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1.05.34 1.93.57 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <span style={{ fontSize: "1.125rem" }}>{contactInfo.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--color-muted)" }}>
                <div style={iconBoxStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span style={{ fontSize: "1.125rem" }}>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div className="contact-animate">
            <h3 style={{ fontSize: "1.125rem", letterSpacing: "0.1em", color: "var(--color-text-primary)", marginBottom: "2.5rem", fontWeight: 500 }}>
              Chính sách bảo hành
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {warrantyItems.map((item, i) => (
                <div key={i} style={warrantyBoxStyle}>
                  <div className="accent-gradient" style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-bg)" }}>
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <span style={{ fontSize: "1.125rem", color: "var(--color-text-primary)" }}>{item.label}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem", padding: "1.75rem", borderRadius: "1rem", backgroundColor: "var(--color-bg)", border: "1px solid var(--color-stroke)" }}>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "1rem", letterSpacing: "0.1em", fontWeight: 500 }}>
                Không áp dụng bảo hành
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                {contactInfo.nonWarranty.map((t) => (
                  <span key={t} style={{ fontSize: "1rem", color: "rgba(248,113,113,0.8)", backgroundColor: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.1)", padding: "0.75rem 1.5rem", borderRadius: "9999px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
