import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import { Link } from 'react-router-dom'; 
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from '../Header/Navigation';
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
import AuthModal from "../../components/AuthModal";
import { useUserAuth } from "../../context/UserAuthContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {

  const { user, login, logout } = useUserAuth();
  const [logo, setLogo] = useState(null);
  
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const { message, cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { compareItems } = useCompare();

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
  setActiveMenu(activeMenu === menu ? null : menu);
};
useEffect(() => {
  const fetchLogo = async () => {
    try {
      const { data } = await api.get("/admin/logo");
      setLogo(data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchLogo();
}, []);

  return (
    <header className="relative bg-white">

      {/* 🔥 MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* 🔥 MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b p-4">
          <h2 className="font-bold">Menu</h2>
        </div>

        {/* ✅ FIXED NAVIGATION MENU (REAL CATEGORIES) */}
       <div className="flex flex-col gap-3 p-4">

  {/* HOME */}
  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
    Home
  </Link>

  {/* FASHION */}
  <button
  onClick={() => toggleMenu("fashion")}
  className="text-left font-medium flex justify-between w-full"
>
  Fashion
  <span>{activeMenu === "fashion" ? "▲" : "▼"}</span>
</button>

{activeMenu === "fashion" && (
  <div className="flex flex-col gap-2 pl-4 transition-all duration-300">
    <Link to="/productListing/Fashion/Men" onClick={() => setMobileMenuOpen(false)}>Men</Link>
    <Link to="/productListing/Fashion/Women" onClick={() => setMobileMenuOpen(false)}>Women</Link>
    <Link to="/productListing/Fashion/Kids" onClick={() => setMobileMenuOpen(false)}>Kids</Link>
  </div>

  )}

  {/* ELECTRONICS */}
  <button
  onClick={() => toggleMenu("electronics")}
  className="text-left font-medium flex justify-between w-full"
>
  Electronics
  <span>{activeMenu === "electronics" ? "▲" : "▼"}</span>
</button>

{activeMenu === "electronics" && (
  <div className="flex flex-col gap-2 pl-4">
    <Link to="/productListing/Electronics/Laptops" onClick={() => setMobileMenuOpen(false)}>Laptops</Link>
    <Link to="/productListing/Electronics/Phone" onClick={() => setMobileMenuOpen(false)}>Mobile Phones</Link>
    <Link to="/productListing/Electronics/SmartGadgets" onClick={() => setMobileMenuOpen(false)}>Smart Gadgets</Link>
  </div>
)}

  {/* FOOTWEAR */}
  <button
  onClick={() => toggleMenu("footwear")}
  className="text-left font-medium flex justify-between w-full"
>
  Footwear
  <span>{activeMenu === "footwear" ? "▲" : "▼"}</span>
</button>

{activeMenu === "footwear" && (
  <div className="flex flex-col gap-2 pl-4">
    <Link to="/productListing/Footwear/Men" onClick={() => setMobileMenuOpen(false)}>Men</Link>
    <Link to="/productListing/Footwear/Women" onClick={() => setMobileMenuOpen(false)}>Women</Link>
    <Link to="/productListing/Footwear/Kids" onClick={() => setMobileMenuOpen(false)}>Kids</Link>
  </div>
)}

  {/* SIMPLE LINKS */}
  <Link to="/productListing/Bags" onClick={() => setMobileMenuOpen(false)}>
    Bags
  </Link>

  <Link to="/productListing/Groceries" onClick={() => setMobileMenuOpen(false)}>
    Groceries
  </Link>

  <Link to="/productListing/Beauty" onClick={() => setMobileMenuOpen(false)}>
    Beauty
  </Link>

  <Link to="/productListing/Accessories" onClick={() => setMobileMenuOpen(false)}>
    Accessories
  </Link>

  {/* EXTRA CATEGORY */}
  <Link to="/productListing/Furniture" onClick={() => setMobileMenuOpen(false)}>
    Furniture
  </Link>

  <Link to="/productListing/Perfumes" onClick={() => setMobileMenuOpen(false)}>
    Perfumes
  </Link>

  <Link to="/productListing/Jewellery" onClick={() => setMobileMenuOpen(false)}>
    Jewellery
  </Link>

  <hr />

  {/* BOTTOM LINKS */}
  <Link to="/best-seller" onClick={() => setMobileMenuOpen(false)}>
    Best Seller
  </Link>

  <Link to="/unisex" onClick={() => setMobileMenuOpen(false)}>
    Unisex
  </Link>

  <Link to="/sale" onClick={() => setMobileMenuOpen(false)}>
    Sale
  </Link>

</div>
</div>

      {/* TOP STRIP */}
      <div className="top-strip border-gray-200 border-b-[1px] border-t-[1px] py-2"> 
        <div className="container flex items-center justify-between">

          <p className="font-[500] text-[12px]">
            Get upto 50% off new season styles, limited time only
          </p>

          <ul className="flex items-center gap-4">
            <li><Link to="/helpcenter" className="font-[500] text-[13px]">Help Center</Link></li>
            <li><Link to="/order-tracking" className="font-[500] text-[13px]">Order Tracking</Link></li>
          </ul>

        </div>
      </div>

      {/* HEADER MAIN */}
      <div className="header border-gray-200 border-b-[1px] py-2">
        <div className="container flex items-center justify-between">

          {/* ☰ HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-2xl font-bold"
            >
              ☰
            </button>
          </div>

          {/* LOGO */}
          <div className="col1 w-[25%]">
            <Link to="/">
              <img
                  src={logo?.image || "/shop.png"}
                  alt="logo"
                  className="max-h-[70px] object-contain"
                />
            </Link>
          </div>

          {/* SEARCH */}
          <div className="col2 hidden w-[45%] md:block">
            <Search/>
          </div>

          {/* ICONS */}
          <div className="col3 flex w-[35%] items-center justify-end">

            <ul className="flex items-center gap-3">

              {/* LOGIN */}
              <li className="hidden items-center gap-2 md:flex">

                  {user ? (
                    <>
                      <span className="text-sm font-medium">
                        👤 {user.name}
                      </span>

                     <button
                          onClick={() => {
                            logout();
                            setShowAuth(false);
                            setAuthMode("login");
                          }}
                          className="font-medium text-red-500"
                        >
                          Logout
                        </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => { setShowAuth(true); setAuthMode("login"); }}
                      >
                        Login
                      </button>

                      |

                      <button
                        onClick={() => { setShowAuth(true); setAuthMode("register"); }}
                      >
                        Register
                      </button>
                    </>
                  )}

                </li>

              <AuthModal 
                show={showAuth} 
                mode={authMode} 
                onClose={() => setShowAuth(false)} 
              />

              {/* COMPARE */}
              <li>
                <Tooltip title="Compare">
                  <Link to="/compare">
                    <IconButton>
                      <StyledBadge badgeContent={compareItems.length}>
                        <IoMdGitCompare />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Tooltip>
              </li>

              {/* WISHLIST */}
              <li>
                <Tooltip title="Wishlist">
                  <Link to="/wishlist">
                    <IconButton>
                      <StyledBadge badgeContent={wishlistItems.length}>
                        <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Tooltip>
              </li>

              {/* CART */}
              <li>
                <Tooltip title="Cart">
                  <Link to="/cart">
                    <IconButton>
                      <StyledBadge badgeContent={cartItems.length}>
                        <MdOutlineShoppingCart size={24}/>
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Tooltip>
              </li>

            </ul>

          </div>

        </div>
      </div>

      {/* TOAST */}
      {message && (
        <div className="cart-toast">
          {message}
        </div>
      )}

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:block">
        <Navigation />
      </div>

    </header>
  );
};

export default Header;