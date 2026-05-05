import { useState, useEffect, useCallback } from "react";
import type { Product } from "../data/products";

function getFavoritesFromStorage(): Product[] {
  try {
    return JSON.parse(sessionStorage.getItem("favorites") || "[]");
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Product[]>(getFavoritesFromStorage);

  useEffect(() => {
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((product: Product) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const isFavorite = useCallback(
    (productId: number) => favorites.some((p) => p.id === productId),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
}
