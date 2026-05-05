🎨 1. CORE PALETTE (chuẩn cho ANNA)
🌟 Primary (nền chính)
--bg: #F5F5DC;          /* Beige */
--surface: #F1E9D2;     /* Parchment nhẹ */

👉 Dùng cho:

Background chính
Section sáng
🖋 Text
--text-primary: #2B2B2B;   /* gần đen nhưng mềm */
--text-muted: #7A7468;     /* xám ấm */

👉 Đừng dùng đen #000 → quá gắt, mất vibe luxury

🧵 Border / line
--stroke: #E5DBC3;
✨ 2. ACCENT (QUAN TRỌNG NHẤT)

Bạn đang dùng blue → ❌ sai vibe

👉 Đổi sang gold / warm brown

Option đẹp nhất:
--accent: #C6A86E;   /* gold sang */
--accent-soft: #E8D8B5;
Gradient:
linear-gradient(135deg, #E8D8B5 0%, #C6A86E 100%)

👉 Dùng cho:

Button
Icon
Hover border
Progress bar
🪞 3. SURFACE LEVEL (depth cho UI)
--card: #FAF6EC;     /* card sáng */
--glass: rgba(255,255,255,0.6);
🔥 4. HOVER & INTERACTION
Button Primary
bg: #C6A86E
text: white
hover: #B89655
Button Outline
border: #C6A86E
hover:
  bg: gradient gold
  text: white
🧊 5. SHADOW (luxury feel)
box-shadow: 0 10px 40px rgba(198,168,110,0.2);

👉 Không dùng shadow đen → dùng shadow màu gold

🧩 6. APPLY VÀO WEB CỦA BẠN
Navbar
background: rgba(245,245,220,0.7);
border: 1px solid #E5DBC3;
backdrop-filter: blur(20px);
Product Card
bg: #FAF6EC;
hover:
  transform: translateY(-6px)
  shadow: gold
Icon

👉 đổi từ xanh → gold:

bg-gradient-to-br from-[#E8D8B5] to-[#C6A86E]
text: white
Section alternating (quan trọng)
section 1: #F5F5DC
section 2: #F1E9D2
section 3: #F5F5DC

👉 tạo depth rất nhẹ → nhìn cao cấp hơn nhiều

🚨 7. TRÁNH NHỮNG THỨ NÀY

❌ xanh dương (#4E85BF) → phá luxury
❌ đen đậm (#000) → quá harsh
❌ gradient quá gắt
❌ shadow đen
❌ trắng tinh (#fff) → dùng off-white thôi

💎 8. STYLE FINAL (đúng vibe bạn đang build)

👉 Đây là vibe của bạn:

Gentle Monster × Zara × Dior nhẹ
Minimal luxury
Clean + warm