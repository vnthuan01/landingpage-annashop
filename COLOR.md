🎨 ✨ THEME HOÀN CHỈNH (dựa trên #CD9B51)
🌟 Background System
--bg-main: #CD9B51;     /* nền chính (section highlight) */
--bg-soft: #F6F1E7;     /* nền phụ (để nghỉ mắt) */
--surface: #FFF9F0;     /* card nền sáng */

👉 Không dùng 1 màu cho toàn page
👉 Phải alternating sections

🖋 TEXT (quan trọng nhất)
--text-primary: #2B2114;   /* nâu đậm (đọc tốt trên bg sáng) */
--text-on-gold: #FFFFFF;  /* dùng khi text nằm trên #CD9B51 */
--text-muted: #7A6A55;

👉 Rule:

Trên #CD9B51 → dùng trắng
Trên nền sáng → dùng nâu đậm
🧵 BORDER / DIVIDER
--stroke: #E8D9C3;
--stroke-dark: rgba(43,33,20,0.15);
💎 CARD (rất quan trọng để không bị “ngợp vàng”)
--card-bg: #FFF9F0;
--card-border: #E8D9C3;

👉 Card luôn phải sáng hơn nền gold

Style:
background: var(--card-bg);
border: 1px solid var(--card-border);
box-shadow: 0 10px 30px rgba(0,0,0,0.05);
🔥 BUTTON SYSTEM
Primary (nút chính)

👉 đảo ngược màu để nổi trên nền

background: #2B2114;
color: #FFFFFF;

Hover:

background: #1F180F;
Secondary (outline luxury)
border: 1.5px solid #2B2114;
color: #2B2114;
background: transparent;

Hover:

background: #2B2114;
color: white;
Accent Button (premium)
background: linear-gradient(135deg, #E6C48A 0%, #CD9B51 100%);
color: #2B2114;
🧊 INPUT / FORM
background: #FFF9F0;
border: 1px solid #E8D9C3;
color: #2B2114;

Focus:

border: 1px solid #CD9B51;
box-shadow: 0 0 0 3px rgba(205,155,81,0.15);
✨ ICON / BADGE
background: linear-gradient(135deg, #E6C48A, #CD9B51);
color: #2B2114;
🌗 SECTION COMPOSITION (QUAN TRỌNG)

👉 Đừng làm full vàng

Hero → #CD9B51
Section 2 → #F6F1E7
Section 3 → #FFF9F0
Section 4 → #CD9B51 (nhẹ hoặc overlay)
🚨 LỖI PHỔ BIẾN (tránh)

❌ text nâu trên nền gold → khó đọc
❌ card cũng màu vàng → mất layer
❌ button cùng màu nền → không nổi
❌ quá nhiều gradient → nhìn rẻ

💎 RESULT STYLE

Theme này sẽ ra vibe:

Zara Home
Gentle Monster (warm version)
Luxury minimal Việt Nam