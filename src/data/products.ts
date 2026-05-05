export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  material: string;
  style: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  { id: 1, name: "Anna Cat Eye #01", price: 450000, image: "/product.png", description: "Thiết kế mắt mèo cổ điển, gọng kim loại mạ vàng 18K, tròng kính chống UV400.", material: "Titanium + Acetate", style: "Classic" },
  { id: 2, name: "Anna Cat Eye #02", price: 490000, image: "/product.png", description: "Phiên bản thanh lịch với gọng mỏng, phù hợp khuôn mặt oval và trái xoan.", material: "Stainless Steel", style: "Elegant" },
  { id: 3, name: "Anna Cat Eye #03", price: 520000, image: "/product.png", description: "Phom dáng oversized, tạo điểm nhấn nổi bật cho phong cách streetwear.", material: "TR90 + Metal", style: "Streetwear" },
  { id: 4, name: "Anna Cat Eye #04", price: 480000, image: "/product.png", description: "Thiết kế retro-modern, kết hợp hoàn hảo giữa cổ điển và hiện đại.", material: "Acetate", style: "Retro" },
  { id: 5, name: "Anna Cat Eye #05", price: 550000, image: "/product.png", description: "Gọng siêu nhẹ chỉ 18g, lý tưởng cho người đeo cả ngày.", material: "Beta Titanium", style: "Minimal" },
  { id: 6, name: "Anna Cat Eye #06", price: 600000, image: "/product.png", description: "Bản Limited Edition với hoạ tiết khắc laser tinh xảo trên gọng.", material: "Titanium + Gold Plated", style: "Luxury" },
  { id: 7, name: "Anna Cat Eye #07", price: 580000, image: "/product.png", description: "Phong cách unisex, phù hợp mọi giới tính và mọi dáng mặt.", material: "Stainless Steel + Acetate", style: "Unisex" },
  { id: 8, name: "Anna Cat Eye #08", price: 650000, image: "/product.png", description: "Tròng kính đổi màu thông minh, tự điều chỉnh theo ánh sáng.", material: "Titanium", style: "Smart" },
  { id: 9, name: "Anna Cat Eye #09", price: 680000, image: "/product.png", description: "Thiết kế bold frame, tạo cá tính mạnh mẽ cho người đeo.", material: "TR90 + Metal", style: "Bold" },
  { id: 10, name: "Anna Cat Eye #10", price: 620000, image: "/product.png", description: "Bản Signature với logo Anna khắc nổi trên gọng, đẳng cấp riêng biệt.", material: "Acetate + 18K Gold", style: "Signature" },
];

export function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}
