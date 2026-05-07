import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./auth.css";

/* Layout */
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import ScrollToTop from "./ScrollToTop.jsx";
import Chatbot from "./components/Chatbot";


/* Pages */
import Home from "./pages/home_temp/index.jsx";
import ProductListing from "./pages/ProductListing/index.jsx";
import ProductPage from "./pages/ProductPage/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Wishlist from "./pages/Wishlist/index.jsx";
import Compare from "./pages/Compare/index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import HelpCenter from "./pages/HelpCenter/index.jsx";
import BestSeller from "./BestSeller.jsx";
import Unisex from "./Unisex.jsx";
import Sale from "./Sale.jsx";
import OrderTracking from "./pages/OrderTracking.jsx";

/* Admin */
import AdminLogin from "./pages/AdminLogin";
import AdminCreate from "./pages/AdminCreate";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboardStats from "./pages/Admin/AdminDashboardStats";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminProducts from "./pages/Admin/AdminProducts";
import Slideshow from "./pages/Admin/AdminSlideshow";
import AdminBanner from "./pages/Admin/AdminBanners";
import AdminLogo from "./pages/Admin/AdminLogo";
import AdminUsers from "./pages/Admin/AdminUsers";

/* Contexts */
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CompareProvider } from "./context/CompareContext";
import { ToastProvider } from "./context/ToastContext";
import { SoundProvider } from "./context/SoundContext";
import { AuthProvider } from "./context/AuthContext";
import { UserAuthProvider } from "./context/UserAuthContext";

/* Toast */
import { Toaster } from "react-hot-toast";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
     <AuthProvider>
     <UserAuthProvider>
      <SoundProvider>
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              <CompareProvider>

                <ScrollToTop />
                <Chatbot />

                <Header
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                <Toaster position="top-right" />

                <Routes>

  {/* PUBLIC */}
  <Route path="/" element={<Home />} />
  <Route path="/helpcenter" element={<HelpCenter />} />
  <Route path="/order-tracking" element={<OrderTracking />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* SIMPLE PAGES */}
  <Route path="/unisex" element={<Unisex />} />
  
  <Route path="/best-seller" element={<BestSeller />} />
  <Route path="/sale" element={<Sale />} />

  {/* PRODUCTS (FIXED - IMPORTANT) */}
  <Route
  path="/productListing/:category"
  element={<ProductListing />}
/>
  <Route
    path="/productListing/:category/:subcategory/:subSubcategory?"
    element={<ProductListing />}
  />

  <Route path="/product/:id" element={<ProductPage />} />

  {/* CART */}
  <Route path="/cart" element={<Cart />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/compare" element={<Compare />} />

  {/* ADMIN AUTH */}
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/admin/create-admin" element={<AdminCreate />} />

  {/* ADMIN */}
  <Route
    path="/admin"
    element={
      <ProtectedAdminRoute>
        <AdminLayout />
      </ProtectedAdminRoute>
    }
  >
    <Route index element={<AdminDashboardStats />} />
    <Route path="orders" element={<AdminOrders />} />
    <Route path="products" element={<AdminProducts />} />
    <Route path="users" element={<AdminUsers />} />
    <Route path="slideshow" element={<Slideshow />} />
    <Route path="banner" element={<AdminBanner />} />
    <Route path="logo" element={<AdminLogo />} />
  </Route>

</Routes>

                <Footer />
                <FooterBottom />

              </CompareProvider>
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </SoundProvider>
      </UserAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;