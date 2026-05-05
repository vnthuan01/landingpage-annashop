# 🧿 ANNA EYEWEAR – LANDING PAGE SPEC

Build a single-page **dark product landing page** using React + Vite + Tailwind CSS + TypeScript + GSAP + Framer Motion + hls.js.

---

## Global Design System

### Fonts

Google Fonts import: Inter (300–700) and Instrument Serif (italic, 400).

- --font-body: 'Inter', sans-serif → Tailwind font-body
- --font-display: 'Instrument Serif', serif → Tailwind font-display

### CSS Custom Properties (HSL, no hsl() wrapper — Tailwind adds it)

--bg: 0 0% 4%;
--surface: 0 0% 8%;
--text: 0 0% 96%;
--muted: 0 0% 53%;
--stroke: 0 0% 12%;
--accent: 0 0% 96%;

### Tailwind Custom Colors

bg: "hsl(var(--bg))",
surface: "hsl(var(--surface))",
"text-primary": "hsl(var(--text))",
muted: "hsl(var(--muted))",
stroke: "hsl(var(--stroke))",

### Accent Gradient

linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)

Used for:

- Logo
- Border hover
- Progress bar
- CTA hover ring

### Custom Animations (in index.css)

- @keyframes scroll-down — translateY(-100%) → translateY(200%)
- @keyframes fade-in — opacity 0 → 1
- @keyframes gradient-shift — animated border

### Forced dark theme

body: bg-bg text-text-primary

---

## Page Structure (Index.tsx)

{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

---

## Section 1: Loading Screen

Full-screen overlay (fixed inset-0 z-[9999] bg-bg)

### Nội dung

- Top-left: "ANNA EYEWEAR"
- Center: ["Tinh tế", "Hiện đại", "Cá tính"] (rotate mỗi 900ms)
- Bottom-right: Counter 000 → 100
- Progress bar gradient

### Behavior

- requestAnimationFrame chạy 2700ms
- delay 400ms → vào trang

---

## Section 2: Hero (Trang chủ – 3 banner)

Full screen + video background

### Background Video

- HLS source (fashion video)
- hls.js fallback
- overlay: bg-black/20
- bottom fade gradient

---

### Navbar (fixed center)

Menu:

- Trang chủ
- Sản phẩm
- Về Anna
- Liên hệ

CTA:

- "Mua ngay"

---

### Hero Content

#### Banner 1

- Eyebrow: "BỘ SƯU TẬP 2026"
- Title: "Kính mắt mèo ANNA"
- Sub: "Tôn vinh nét đẹp cá tính"

#### Banner 2

- Title: "Một thiết kế – Nhiều phong cách"
- Sub: "Phù hợp mọi khuôn mặt"

#### Banner 3

- Title: "Đơn giản nhưng đẳng cấp"
- Sub: "Tinh tế trong từng chi tiết"

---

### CTA Buttons

- "Xem sản phẩm"
- "Liên hệ ngay"

---

### Scroll Indicator

"CUỘN XUỐNG"

---

## Section 3: Sản phẩm

bg-bg py-16

### Header

- Eyebrow: "SẢN PHẨM"
- Heading: "Kính mắt mèo ANNA"
- Subtext: "Một dòng sản phẩm duy nhất"

---

### Product Grid

- 10 sản phẩm
- Không phân loại (chỉ 1 dòng kính mắt mèo)

Danh sách:

ANNA Cat Eye #01 → #10  
Giá: 450.000đ – 680.000đ

---

### Product Card

Mỗi card gồm:

- Ảnh
- Tên
- Giá

Hover:

- Zoom ảnh
- Overlay blur
- Button:
  - Xem chi tiết
  - Thêm vào giỏ
  - ❤️ Yêu thích

---

## Section: Favorite (Yêu thích)

### Mô tả

- Không login
- Lưu sessionStorage

### Logic

```js
const favorites = JSON.parse(sessionStorage.getItem("favorites") || "[]");

function toggleFavorite(product) {
  const exists = favorites.find(p => p.id === product.id);
  let updated = exists
    ? favorites.filter(p => p.id !== product.id)
    : [...favorites, product];

  sessionStorage.setItem("favorites", JSON.stringify(updated));
}
const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

function addToCart(product) {
  const exist = cart.find(p => p.id === product.id);

  let updated = exist
    ? cart.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    : [...cart, { ...product, quantity: 1 }];

  sessionStorage.setItem("cart", JSON.stringify(updated));
}
Cart Functions
Thêm sản phẩm
Xóa sản phẩm
Tăng / giảm số lượng
Section: Checkout (Mua hàng)
Form

Fields:

Họ và tên
Số điện thoại
Địa chỉ
Ghi chú
Submit
function handleCheckout(data) {
  const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

  const payload = {
    ...data,
    cart
  };

  console.log(payload);

  sessionStorage.removeItem("cart");
}
Section 4: Về Anna
Nội dung

ANNA là thương hiệu kính thời trang:

Thiết kế tối giản
Giá hợp lý
Phù hợp giới trẻ
Sứ mệnh

Mang đến vẻ đẹp tinh tế

Tầm nhìn

Thương hiệu kính phổ biến tại Việt Nam

Section 5: Khám phá (Gallery)
Ảnh lifestyle
Lookbook
Parallax scroll
Section 6: Thống kê
10+ mẫu kính
5000+ khách hàng
98% hài lòng
Section 7: Liên hệ

CTA:

"Liên hệ với ANNA ngay hôm nay"

Email:
hello@annaeyewear.com

Chính sách bảo hành
Bảo hành 6 tháng
Đổi trả 7 ngày nếu lỗi
Hỗ trợ sửa chữa

Không áp dụng:

Rơi vỡ
Va đập
Footer
Social links
Trạng thái: "Sẵn sàng phục vụ"

© 2026 ANNA Eyewear

Dependencies

gsap
framer-motion
hls.js
react-router-dom
tailwindcss-animate

Features
Dark UI
Video background
GSAP animation
Parallax scroll
Responsive
Cart (session)
Favorite (session)
Checkout form
```
