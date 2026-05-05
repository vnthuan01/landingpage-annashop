import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };


  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8125rem",
    color: "var(--color-muted)",
    marginBottom: "0.75rem",
    letterSpacing: "0.1em",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", paddingTop: "9rem", paddingBottom: "7rem" }}>
      <div className="container-main">
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1rem", color: "var(--color-muted)", marginBottom: "2.5rem" }}>
          <Link to="/" className="hover:text-text-primary transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
            Trang chủ
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-text-primary)" }}>Liên hệ</span>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.1em", color: "var(--color-accent)", marginBottom: "1rem", fontWeight: 400 }}>
            Kết nối với chúng tôi
          </p>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "var(--color-text-primary)", marginBottom: "1rem" }}>
            Liên hệ Anna Eyewear
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--color-muted)", maxWidth: "32rem", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy chọn phương thức liên lạc phù hợp nhất.
          </p>
          <div className="accent-gradient" style={{ width: "5rem", height: "1px", margin: "2rem auto 1rem" }} />
        </motion.div>

        {/* Content */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "2.5rem" }}>
          {/* Column 1: Info & Quick Support */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Contact Info Card */}
            <motion.div
              className="glass"
              style={{ padding: "3rem 2.5rem", borderRadius: "1.5rem" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="accent-gradient" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", color: "var(--color-bg)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.375rem", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "1.5rem" }}>Thông tin liên hệ</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013.12 4.18 2 2 0 015.11 2h3a2 2 0 012 1.72c.13.88.36 1.76.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1.05.34 1.93.57 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>Hotline</p>
                    <p style={{ fontSize: "1.0625rem", color: "var(--color-text-primary)" }}>0123 456 789</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                  </svg>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>Email</p>
                    <p style={{ fontSize: "1.0625rem", color: "var(--color-text-primary)" }}>hello@annaeyewear.com</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>Địa chỉ</p>
                    <p style={{ fontSize: "1.0625rem", color: "var(--color-text-primary)", lineHeight: 1.5 }}>
                      123 Đường Fashion, Quận 1,<br />TP. Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Support Card */}
            <motion.div
              className="glass"
              style={{ padding: "3rem 2.5rem", borderRadius: "1.5rem" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="accent-gradient" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", color: "var(--color-bg)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.375rem", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "1.5rem" }}>Hỗ trợ nhanh</h3>
              <p style={{ fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
                Đội ngũ chăm sóc khách hàng trực tuyến sẵn sàng giải đáp thắc mắc của bạn từ 8:00 - 22:00 mỗi ngày.
              </p>
              <button className="btn-outline" style={{ width: "100%", padding: "1rem" }}>
                Chat qua Messenger
              </button>
            </motion.div>
          </div>

          {/* Column 2: Contact Form */}
          <motion.div
            className="glass"
            style={{ padding: "3rem 2.5rem", borderRadius: "1.5rem", display: "flex", flexDirection: "column" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="accent-gradient" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem", color: "var(--color-bg)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.375rem", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "0.5rem" }}>Gửi lời nhắn</h3>
            <p style={{ fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
              Để lại thông tin và lời nhắn, chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.
            </p>

            {submitted ? (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "2rem", textAlign: "center" }}>
                <div className="accent-gradient" style={{ width: "4rem", height: "4rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h4 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>Đã gửi thành công!</h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)" }}>Cảm ơn bạn đã liên hệ.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", flex: 1 }}>
                <div>
                  <label style={labelStyle}>Họ và tên *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-base" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-base" placeholder="Nhập địa chỉ email" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Nội dung *</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="input-base" style={{ resize: "none", height: "calc(100% - 2rem)" }} placeholder="Bạn cần hỗ trợ gì?" />
                </div>
                <button type="submit" className="btn-primary" style={{ marginTop: "1rem", padding: "1rem" }}>
                  Gửi lời nhắn
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
