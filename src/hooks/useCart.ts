import { useState, useEffect, useCallback } from "react";
import type { CartItem, Product } from "../data/products";

function getCartFromStorage(): CartItem[] {
  try {
    return JSON.parse(sessionStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(getCartFromStorage);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((p) => p.id !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    sessionStorage.removeItem("cart");
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice };
}
