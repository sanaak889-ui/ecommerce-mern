import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsRocketTakeoff } from "react-icons/bs";
import CategoryPanel from '../Navigation/CategoryPanel';
import '../Navigation/style.css';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
  setIsOpenCatPanel(true);
};

  return (
    <>
      <nav className="hidden py-2 md:block">
        <div className="container flex items-center justify-between gap-8">

          {/* Category Button */}
          <div className="col_1 w-[20%]">
            <Button className="w-full gap-2 !text-black" onClick={openCategoryPanel}>
              <AiOutlineMenuUnfold className="text-[18px]" /> Shop By Categories
              <FaAngleDown className="ml-auto font-bold text-[13px]"/>
            </Button>
          </div>

          {/* Main Navigation */}
          <div className="col_2 w-[60%]">
            <ul className="nav flex items-center gap-1">

              {/* Home */}
              <li className="list-none">
                <Link to="/" className="link font-[500] text-[14px] transition">
                  <Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>

              {/* Fashion */}
              <li className="group relative list-none">
                <Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">
                  Fashion 
                </Button>
                <div className="submenu z-[999] absolute left-0 top-full min-w-[180px] bg-white opacity-0 shadow-md transition-all group-hover:opacity-100">
                  <ul>

                    {/* Men */}
                    <li className="group relative w-full list-none">
                      <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">
                        Men 
                      </Button>
                      <div className="submenu z-[999] absolute left-full top-0 min-w-[180px] bg-white opacity-0 shadow-md transition-all group-hover:opacity-100">
                        <ul>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/T-Shirts">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">T-Shirts</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/Polos">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Polos</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/Hoodies&Sweatshirts">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Hoodies & Sweatshirts</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/Jackets&Coats">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Jackets & Coats</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/Ethnic-Wear">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Ethnic Wear</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/Pants">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Pants</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Men/Innerwear">
                              <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Innerwear</Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Women */}
                    <li className="group relative w-full list-none">
                      <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">
                        Women 
                      </Button>
                      <div className="submenu z-[999] absolute left-full top-0 min-w-[180px] bg-white opacity-0 shadow-md transition-all group-hover:opacity-100">
                        <ul>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Women/Tops&Tees">
                              <Button className="w-full !justify-start !rounded-none !text-left">Tops & Tees</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Women/Dresses">
                              <Button className="w-full !justify-start !rounded-none !text-left">Dresses</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Women/Kurtis&Ethnic">
                              <Button className="w-full !justify-start !rounded-none !text-left">Kurtis & Ethnic</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Women/Jeans&Pants">
                              <Button className="w-full !justify-start !rounded-none !text-left">Jeans & Pants</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Women/Skirts">
                              <Button className="w-full !justify-start !rounded-none !text-left">Skirts</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Women/Innerwear">
                              <Button className="w-full !justify-start !rounded-none !text-left">Innerwear</Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Kids */}
                    <li className="group relative w-full list-none">
                      <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">
                        Kids 
                      </Button>
                      <div className="submenu z-[999] absolute left-full top-0 min-w-[180px] bg-white opacity-0 shadow-md transition-all group-hover:opacity-100">
                        <ul>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Kids/Boys-Clothing">
                              <Button className="w-full !justify-start !rounded-none !text-left">Boys Clothing</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Kids/Girls-Clothing">
                              <Button className="w-full !justify-start !rounded-none !text-left">Girls Clothing</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Kids/T-Shirts">
                              <Button className="w-full !justify-start !rounded-none !text-left">T-Shirts</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Kids/Shorts&Jeans">
                              <Button className="w-full !justify-start !rounded-none !text-left">Shorts & Jeans</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Kids/Winter-Wear">
                              <Button className="w-full !justify-start !rounded-none !text-left">Winter Wear</Button>
                            </Link>
                          </li>
                          <li className="w-full list-none">
                            <Link to="/productListing/Fashion/Kids/Summer-Wear">
                              <Button className="w-full !justify-start !rounded-none !text-left">Summer Wear</Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Unisex, Best Seller, Sale */}
                    <li className="w-full list-none">
                      <Link to="/unisex">
                        <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Unisex</Button>
                      </Link>
                    </li>
                    <li className="w-full list-none">
                      <Link to="/best-seller">
                        <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Best Seller</Button>
                      </Link>
                    </li>
                    <li className="w-full list-none">
                      <Link to="/sale">
                        <Button className="w-full !justify-start !rounded-none !text-left !text-[rgba(0,0,0,0.8)]">Sale upto 70% off</Button>
                      </Link>
                    </li>

                  </ul>
                </div>
              </li>

              {/* Electronics */}
              <li className="group relative list-none">
                <Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">
                  Electronics 
                </Button>
                <ul className="z-[9999] absolute left-0 top-full hidden w-48 rounded-md bg-white shadow-lg group-hover:block">
                  <li><Link to="/productListing/Electronics/Laptops" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Laptops</Link></li>
                  <li><Link to="/productListing/Electronics/Phone" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Mobile Phones</Link></li>
                  <li><Link to="/productListing/Electronics/SmartGadgets" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Smart Gadgets</Link></li>
                </ul>
              </li>

              {/* Bags */}
              <li className="list-none">
                <Link to="/productListing/Bags">
                  <Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">Bags</Button>
                </Link>
              </li>

              {/* Footwear */}
              <li className="group relative list-none">
                <Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">
                  Footwear 
                </Button>
                <ul className="z-[9999] absolute left-0 top-full hidden w-48 rounded-md bg-white shadow-lg group-hover:block">
                  <li><Link to="/productListing/Footwear/Men" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Men</Link></li>
                  <li><Link to="/productListing/Footwear/Women" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Women</Link></li>
                  <li><Link to="/productListing/Footwear/Kids" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Kids</Link></li>
                </ul>
              </li>

              {/* Groceries, Beauty, Accessories */}
              <li className="list-none"><Link to="/productListing/Groceries"><Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">Groceries</Button></Link></li>
              <li className="list-none"><Link to="/productListing/Beauty"><Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">Beauty</Button></Link></li>
              <li className="list-none"><Link to="/productListing/Accessories"><Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">Accessories</Button></Link></li>

              {/* More */}
              <li className="group relative list-none">
                <Button className="link !font-[400] !text-[rgba(0,0,0,0.8)] transition hover:!text-[#ff5252]">
                  More 
                </Button>
                <ul className="z-[99999] absolute left-0 top-full hidden w-48 rounded-md bg-white shadow-xl group-hover:block">

                  <li><Link to="/productListing/Jewellery" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Jewellery</Link></li>
                  <li><Link to="/productListing/Furniture" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Furniture</Link></li>
                  <li><Link to="/productListing/Perfumes" className="block px-4 py-2 hover:bg-[#ff5252] hover:text-white">Perfumes</Link></li>
                </ul>
              </li>

            </ul>
          </div>

          {/* Free Delivery */}
          <div className="col_3 w-[20%]">
            <p className="font-[500] mb-0 mt-0 flex items-center gap-3 text-[13px]">
              <BsRocketTakeoff className="text-[18px]"/>Free International Delivery
            </p>
          </div>

        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
