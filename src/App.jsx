import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./auth.css";

/* Layout */
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import ScrollToTop from "./ScrollToTop.jsx";

/* Pages */
import Home from "./pages/Home/index.jsx";
import ProductListing from "./pages/ProductListing";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HelpCenter from "./pages/HelpCenter";
import BestSeller from "./BestSeller.jsx";
import Unisex from "./Unisex.jsx";
import Sale from "./Sale";
import OrderTracking from "./pages/OrderTracking";

/* Admin */
import AdminLogin from "./pages/AdminLogin";
import AdminCreate from "./pages/AdminCreate";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboardStats from "./pages/Admin/AdminDashboardStats";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminCategory from "./pages/Admin/AdminCategories";
import AdminBanner from "./pages/Admin/AdminBanners";
import AdminLogo from "./pages/Admin/AdminLogo";

/* Contexts */
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CompareProvider } from "./context/CompareContext";
import { ToastProvider } from "./context/ToastContext";
import { SoundProvider } from "./context/SoundContext";

/* Toast */
import { Toaster } from "react-hot-toast";
/* ChatBot */
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <React.StrictMode>
    <Chatbot />
    <SoundProvider>
      <ToastProvider>
        <CartProvider>
          <WishlistProvider>
            <CompareProvider>
              <BrowserRouter>
                <ScrollToTop />
                <Header />

                {/* GLOBAL TOAST */}
                <Toaster position="top-right"
                    toastOptions={{
                      style: { zIndex: 99999, 
                      } }} />

                <Routes>
                  {/* PUBLIC */}
                  <Route path="/" element={<Home />} />
                  <Route path="/helpcenter" element={<HelpCenter />} />
                  <Route path="/order-tracking" element={<OrderTracking />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  {/* PRODUCTS */}
                  <Route
                    path="/productListing/:category"
                    element={<ProductListing />}
                  />
                  <Route
                    path="/productListing/:category/:subcategory"
                    element={<ProductListing />}
                  />
                  <Route
                    path="/productListing/:category/:subcategory/:subSubcategory"
                    element={<ProductListing />}
                  />
                  <Route path="/product/:id" element={<ProductPage />} />

                  {/* USER */}
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/compare" element={<Compare />} />

                  {/* COLLECTIONS */}
                  <Route path="/best-seller" element={<BestSeller />} />
                  <Route path="/unisex" element={<Unisex />} />
                  <Route path="/sale" element={<Sale />} />

                  {/* ADMIN AUTH */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin/create-admin"
                    element={<AdminCreate />}
                  />

                  {/* ADMIN PROTECTED */}
                  <Route
                    path="/admin"
                    element={
                      <ProtectedAdminRoute>
                        <AdminLayout />
                      </ProtectedAdminRoute>
                    }
                  >
                    <Route index element={<AdminDashboardStats />} />
                    <Route path="dashboard" element={<AdminDashboardStats />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="category" element={<AdminCategory />} />
                    <Route path="banner" element={<AdminBanner />} />
                    <Route path="logo" element={<AdminLogo />} />
                  </Route>
                </Routes>

                <Footer />
                <FooterBottom />
              </BrowserRouter>
            </CompareProvider>
          </WishlistProvider>
        </CartProvider>
      </ToastProvider>
      </SoundProvider>
    </React.StrictMode>
  );
}

export default App;