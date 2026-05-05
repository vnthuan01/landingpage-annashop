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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
    title: "Sứ mệnh",
    desc: "Mang đến vẻ đẹp tinh tế, hiện đại cho mọi người với mức giá phải chăng. Mỗi chiếc kính ANNA là một lời khẳng định cá tính riêng.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Tầm nhìn",
    desc: "Trở thành thương hiệu kính thời trang phổ biến và được yêu thích nhất tại Việt Nam, với sản phẩm hiện diện ở mọi tủ đồ của giới trẻ.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Giá trị cốt lõi",
    desc: "Thiết kế tối giản · Chất lượng cao · Giá hợp lý · Dịch vụ tận tâm",
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
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", paddingTop: "9rem", paddingBottom: "7rem" }}>
      <div className="container-main">
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1rem", color: "var(--color-muted)", marginBottom: "2.5rem" }}>
          <Link to="/" className="hover:text-text-primary transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-text-primary">Về Anna</span>
        </div>

        {/* Hero */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] text-accent-blue mb-4 uppercase font-light">
            VỀ ANNA EYEWEAR
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl text-text-primary mb-6">
            Câu chuyện thương hiệu
          </h1>
          <p className="text-muted text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            ANNA là thương hiệu kính thời trang được thành lập với triết lý thiết kế tối giản,
            giá cả hợp lý và phù hợp với phong cách của giới trẻ Việt Nam.
            Mỗi chiếc kính đều được chế tác tỉ mỉ, mang đến vẻ đẹp tinh tế nhưng không kém phần cá tính.
          </p>
          <div className="w-20 h-[1px] accent-gradient mx-auto mt-8" />
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-10 hover:border-accent-blue/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mb-7 text-bg group-hover:animate-float">
                {v.icon}
              </div>
              <h3 className="text-lg text-text-primary font-medium mb-3 tracking-wide">
                {v.title}
              </h3>
              <p className="text-muted text-sm md:text-base font-light leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Brand story section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] text-accent-blue mb-4 uppercase font-light">
                CÂU CHUYỆN CỦA CHÚNG TÔI
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-text-primary mb-6">
                Từ ý tưởng đến hiện thực
              </h2>
              <p className="text-muted text-base font-light leading-relaxed mb-6">
                ANNA Eyewear bắt đầu từ một ý tưởng đơn giản: tạo ra những chiếc kính thời trang
                đẹp mắt mà ai cũng có thể sở hữu. Chúng tôi tin rằng phong cách không nên bị giới hạn
                bởi giá cả.
              </p>
              <p className="text-muted text-base font-light leading-relaxed">
                Mỗi thiết kế của ANNA đều trải qua quá trình nghiên cứu kỹ lưỡng về xu hướng,
                chất liệu và sự thoải mái, để đảm bảo bạn không chỉ đẹp mà còn tự tin suốt cả ngày.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-stroke">
              <img
                src="/product.png"
                alt="ANNA Eyewear Story"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-display italic text-3xl md:text-4xl text-text-primary text-center mb-12">
            Hành trình phát triển
          </h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full accent-gradient flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-[1px] flex-1 bg-stroke mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm accent-gradient-text font-semibold tracking-wider">
                    {item.year}
                  </span>
                  <p className="text-base text-text-primary mt-1 font-light">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why choose ANNA */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="font-display italic text-3xl md:text-4xl text-text-primary text-center mb-10">
            Tại sao chọn ANNA?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-bg border border-stroke hover:border-accent-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl accent-gradient flex-shrink-0 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bg">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-base text-text-primary font-light">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
