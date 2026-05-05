import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: "Mẫu kính" },
  { value: 5000, suffix: "+", label: "Khách hàng" },
  { value: 98, suffix: "%", label: "Hài lòng" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setCount(Math.floor(obj.val)),
        });
      },
    });

    return () => { trigger.kill(); };
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--color-bg)", marginTop: "1rem" }}>
      <div className="container-main">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem", textAlign: "center" }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display accent-gradient-text" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "1rem" }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", color: "var(--color-muted)", letterSpacing: "0.1em" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
