import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2024", event: "ANNA Eyewear ra đời tại TP. Hồ Chí Minh" },
  { year: "2025", event: "Ra mắt dòng kính mắt mèo đầu tiên — 10 thiết kế" },
  { year: "2026", event: "Phục vụ hơn 5.000 khách hàng trên toàn quốc" },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 15l-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 2z" />
      </svg>
    ),
    title: "Sứ mệnh",
    desc: "Mang đến vẻ đẹp tinh tế, hiện đại cho mọi người với mức giá phải chăng.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Tầm nhìn",
    desc: "Trở thành thương hiệu kính thời trang phổ biến và được yêu thích nhất tại Việt Nam.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Giá trị cốt lõi",
    desc: "Thiết kế tối giản · Chất lượng · Tinh tế · Hiện đại",
  },
];

const features = [
  "Thiết kế tối giản, phong cách Hàn Quốc",
  "Giá cả hợp lý cho giới trẻ",
  "Phù hợp mọi dáng khuôn mặt",
  "Bảo hành 6 tháng chính hãng",
  "Đổi trả miễn phí trong 7 ngày",
  "Hỗ trợ sửa chữa trọn đời",
];

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-bg)",
        paddingTop: "9rem",
        paddingBottom: "7rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* FIX: center container */}
      {/* Breadcrumb */}
      <div className="container-main">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1rem", color: "var(--color-muted)", marginBottom: "4rem" }}>
          <Link to="/" className="hover:text-text-primary transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-text-primary">Về Anna</span>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center", gap: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        >
          <p style={{ fontSize: "1rem", letterSpacing: "0.1em", color: "var(--color-accent)", fontWeight: 400 }}>
            Về Anna Eyewear
          </p>

          <h1 className="font-display text-4xl md:text-6xl text-text-primary">
            Câu chuyện thương hiệu
          </h1>

          <p className="text-muted text-base md:text-lg font-light mx-auto leading-relaxed max-w-2xl text-center">
            Anna là thương hiệu kính thời trang được thành lập với triết lý thiết kế tối giản,
            giá cả hợp lý và phù hợp với phong cách của giới trẻ Việt Nam.
          </p>

          <div className="accent-gradient" style={{ width: "5rem", height: "1px", margin: "1.5rem auto 0" }} />
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid gap-10 mb-28 justify-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))", marginBottom: "2rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              className="glass group text-center"
              style={{
                padding: "2.5rem",
                borderRadius: "1.5rem",
                transition: "all 0.5s",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6
                bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E]
                shadow-[0_8px_30px_rgba(198,168,110,0.3)]"
              >
                {v.icon}
              </div>

              <h3 className="text-lg text-text-primary font-medium mb-3">
                {v.title}
              </h3>

              <p className="text-muted text-sm font-light leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div className="max-w-[520px] mx-auto">
              <p className="text-xs tracking-[0.1em] text-[#C6A86E] mb-4">
                Câu chuyện của chúng tôi
              </p>

              <h2 className="font-display text-3xl text-text-primary mb-6">
                Từ ý tưởng đến hiện thực
              </h2>

              <p className="text-muted leading-relaxed mb-4 font-light">
                ANNA Eyewear bắt đầu từ một ý tưởng đơn giản: tạo ra những chiếc kính đẹp mà ai cũng có thể sở hữu.
              </p>

              <p className="text-muted leading-relaxed font-light">
                Mỗi thiết kế đều được nghiên cứu kỹ lưỡng để đảm bảo sự thoải mái và phong cách.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto rounded-2xl overflow-hidden border border-stroke">
              <img
                src="/product.png"
                alt=""
                className="w-full h-[24rem] object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div className="mb-28">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center mb-14">
            Hành trình phát triển
          </h2>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-10">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#E8D8B5] to-[#C6A86E]" />
                  {i < timeline.length - 1 && (
                    <div className="w-[1px] flex-1 bg-stroke mt-2" />
                  )}
                </div>

                <div>
                  <span className="text-sm text-[#C6A86E] font-medium">
                    {item.year}
                  </span>
                  <p className="text-text-primary font-light mt-1">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="flex justify-center text-center" style={{ marginTop: "4rem" }}>
          <motion.div className="flex flex-col items-center justify-center glass rounded-2xl p-10 md:p-14 max-w-[800px] mx-auto" style={{ padding: "1rem" }}>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary text-center" style={{ marginBottom: "1rem" }}>
              Tại sao chọn ANNA?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-xl bg-bg border border-stroke
                hover:border-[#C6A86E]/40 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E]">
                    <svg width="14" height="14" viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>

                  <span className="text-base text-text-primary font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}