import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import FavoriteDrawer from "./components/FavoriteDrawer";
import CheckoutModal from "./components/CheckoutModal";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import { useCart } from "./hooks/useCart";
import { useFavorites } from "./hooks/useFavorites";
import type { Product } from "./data/products";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage({
  isFavorite,
  toggleFavorite,
  addToCart,
}: {
  isFavorite: (id: number) => boolean;
  toggleFavorite: (product: Product) => void;
  addToCart: (product: Product) => void;
}) {
  return (
    <>
      <Hero />
      <ProductSection
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
        onAddToCart={addToCart}
      />
      <AboutSection />
      <GallerySection />
      <StatsSection />
      <ContactSection />
    </>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [favoriteOpen, setFavoriteOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const handleCheckout = useCallback(() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }, []);

  const handleCheckoutSubmit = useCallback(() => {
    clearCart();
    setTimeout(() => setCheckoutOpen(false), 2500);
  }, [clearCart]);

  return (
    <>
      <ScrollToTop />

      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar
          cartCount={totalItems}
          favoriteCount={favorites.length}
          onCartClick={() => setCartOpen(true)}
          onFavoriteClick={() => setFavoriteOpen(true)}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isFavorite={isFavorite}
                  toggleFavorite={toggleFavorite}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/san-pham"
              element={
                <ProductsPage
                  isFavorite={isFavorite}
                  onToggleFavorite={toggleFavorite}
                  onAddToCart={addToCart}
                />
              }
            />
            <Route path="/ve-anna" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <FavoriteDrawer
        isOpen={favoriteOpen}
        onClose={() => setFavoriteOpen(false)}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onAddToCart={addToCart}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        onSubmit={handleCheckoutSubmit}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
