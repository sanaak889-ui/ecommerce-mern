import React from 'react';
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
import { useState } from "react";
import AuthModal from "../../components/AuthModal";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {

  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const { message, cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { compareItems } = useCompare();

  return (
    <header className="bg-white">

      <div className="top-strip border-gray-200 border-b-[1px] border-t-[1px] py-2"> 
        <div className="container">

          <div className="flex items-center justify-between">

            <div className="col1 w-[50%]"> 
              <p className="font-[500] text-[12px]">
                Get upto 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">

              <ul className="flex items-center gap-4">

                <li className="list-none">
                  <Link to="/helpcenter" className="link font-[500] text-[13px] transition">
                    Help Center
                  </Link>
                </li>

                <li className="list-none">
                  <Link to="/order-tracking" className="link font-[500] text-[13px] transition">
                    Order Tracking
                  </Link>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </div>


      <div className="header border-gray-200 border-b-[1px] border-t-[1px] py-2">

        <div className="container flex items-center justify-between">
            
            <div className="col1 w-[25%]">
                <Link to={"/"}>
                    <img src="/shop.png" className="max-h-[70px] w-auto object-contain" />
                </Link>
            </div>

            <div className="col2 w-[45%]">
                <Search/>
            </div>

            <div className="col3 flex w-[35%] items-center pl-7">

                <ul className="flex w-full items-center justify-end gap-3">

                  <li className="flex list-none items-center gap-2">

                    <button 
                      onClick={() => {
                        setShowAuth(true);
                        setAuthMode("login");
                      }}
                      className="link font-[500] text-[15px] transition hover:text-blue-600"
                    >
                      Login
                    </button>

                    | &nbsp;

                    <button 
                      onClick={() => {
                        setShowAuth(true);
                        setAuthMode("register");
                      }}
                      className="link font-[500] text-[15px] transition hover:text-blue-600"
                    >
                      Register
                    </button>

                  </li>

                  <AuthModal 
                    show={showAuth} 
                    mode={authMode} 
                    onClose={() => setShowAuth(false)} 
                  />

                  {/* Compare */}
                  <li>
                    <Tooltip title="Compare">
                      <Link to="/compare">
                        <IconButton aria-label="compare">
                          <StyledBadge badgeContent={compareItems.length} color="secondary">
                            <IoMdGitCompare />
                          </StyledBadge>
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </li> 
                    
                  {/* Wishlist */}
                  <li>
                    <Tooltip title="Wishlist">
                      <Link to="/wishlist">
                        <IconButton aria-label="wishlist">
                          <StyledBadge badgeContent={wishlistItems.length} color="secondary">
                            <FaRegHeart />
                          </StyledBadge>
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </li>
                   
                  {/* CART ICON (ANIMATION TARGET) */}
                  <li id="cart-icon">
                    <Tooltip title="Cart">
                      <Link to="/cart">
                        <IconButton aria-label="cart">
                          <StyledBadge badgeContent={cartItems.length} color="secondary">
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
       
      {message && (
        <div className="cart-toast">
          {message}
        </div>
      )}

      <Navigation/>

    </header>
  );
};

export default Header;