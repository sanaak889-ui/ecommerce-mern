import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../Navigation/style.css';

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null); // close inner submenu when outer changes
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  return (
    <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
        <h3 className="font-[500] flex items-center justify-between p-3 text-[15px]">
          Shop By Categories
          <IoCloseSharp
            onClick={toggleDrawer(false)}
            className="cursor-pointer text-[20px]"
          />
        </h3>

        <div className="scroll">
          <ul className="w-full">

            {/* ================= Fashion ================= */}
            <li className="relative list-none">
              <div className="buttonWrapper relative w-full">
                <Link to="/productListing/Fashion" className="w-full">
                  <Button className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.8)]">
                    Fashion
                  </Button>
                </Link>

                {submenuIndex === 0 ? (
                  <FaRegMinusSquare
                    onClick={() => openSubmenu(0)}
                    className="absolute right-[15px] top-[10px] cursor-pointer"
                  />
                ) : (
                  <FaRegSquarePlus
                    onClick={() => openSubmenu(0)}
                    className="absolute right-[15px] top-[10px] cursor-pointer"
                  />
                )}
              </div>

              {submenuIndex === 0 && (
                <ul className="submenu show w-full pl-3">

                  {/* Men */}
                  <li className="relative list-none">
                    <div className="buttonWrapper relative w-full">
                      <Button
                        className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.8)]"
                        onClick={() => openInnerSubmenu(innerSubmenuIndex === 'men' ? null : 'men')}
                      >
                        Men
                      </Button>
                      {innerSubmenuIndex === 'men' ? (
                        <FaRegMinusSquare
                          onClick={() => openInnerSubmenu(innerSubmenuIndex === 'men' ? null : 'men')}
                          className="absolute right-[15px] top-[10px] cursor-pointer"
                        />
                      ) : (
                        <FaRegSquarePlus
                          onClick={() => openInnerSubmenu(innerSubmenuIndex === 'men' ? null : 'men')}
                          className="absolute right-[15px] top-[10px] cursor-pointer"
                        />
                      )}
                    </div>
                    {innerSubmenuIndex === 'men' && (
                      <ul className="inner_submenu show w-full pl-3">
                        <li className="list-none"><Link to="/productListing/Fashion/Men/T-Shirts" className="link text-[14px]">T-Shirts</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Men/Polos" className="link text-[14px]">Polos</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Men/Pants" className="link text-[14px]">Jeans</Link></li>
                        <li className="list-none"><Link to="/productListing/Electronics/SmartGadgets" className="link text-[14px]">Watches</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Women */}
                  <li className="relative list-none">
                    <div className="buttonWrapper relative w-full">
                      <Button
                        className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.8)]"
                        onClick={() => openInnerSubmenu(innerSubmenuIndex === 'women' ? null : 'women')}
                      >
                        Women
                      </Button>
                      {innerSubmenuIndex === 'women' ? (
                        <FaRegMinusSquare
                          onClick={() => openInnerSubmenu(innerSubmenuIndex === 'women' ? null : 'women')}
                          className="absolute right-[15px] top-[10px] cursor-pointer"
                        />
                      ) : (
                        <FaRegSquarePlus
                          onClick={() => openInnerSubmenu(innerSubmenuIndex === 'women' ? null : 'women')}
                          className="absolute right-[15px] top-[10px] cursor-pointer"
                        />
                      )}
                    </div>
                    {innerSubmenuIndex === 'women' && (
                      <ul className="inner_submenu show w-full pl-3">
                        <li className="list-none"><Link to="/productListing/Fashion/Women/Tops&Tees" className="link text-[14px]">Tops</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Women/Dresses" className="link text-[14px]">Dresses</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Women/Jeans&Pants" className="link text-[14px]">Jeans</Link></li>
                        <li className="list-none"><Link to="/productListing/Bags" className="link text-[14px]">Handbags</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Kids */}
                  <li className="relative list-none">
                    <div className="buttonWrapper relative w-full">
                      <Button
                        className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.8)]"
                        onClick={() => openInnerSubmenu(innerSubmenuIndex === 'kids' ? null : 'kids')}
                      >
                        Kids
                      </Button>
                      {innerSubmenuIndex === 'kids' ? (
                        <FaRegMinusSquare
                          onClick={() => openInnerSubmenu(innerSubmenuIndex === 'kids' ? null : 'kids')}
                          className="absolute right-[15px] top-[10px] cursor-pointer"
                        />
                      ) : (
                        <FaRegSquarePlus
                          onClick={() => openInnerSubmenu(innerSubmenuIndex === 'kids' ? null : 'kids')}
                          className="absolute right-[15px] top-[10px] cursor-pointer"
                        />
                      )}
                    </div>
                    {innerSubmenuIndex === 'kids' && (
                      <ul className="inner_submenu show w-full pl-3">
                        <li className="list-none"><Link to="/productListing/Fashion/Kids/T-Shirts" className="link text-[14px]">Shirts</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Kids" className="link text-[14px]">Dresses</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Kids/Winter-Wear" className="link text-[14px]">Winter Wear</Link></li>
                        <li className="list-none"><Link to="/productListing/Fashion/Kids/Summer-Wear" className="link text-[14px]">Summer Wear</Link></li>
                      </ul>
                    )}
                  </li>

                </ul>
              )}
            </li>

            {/* ================= Outerwear ================= */}
            <li className="relative list-none">
              <div className="buttonWrapper relative w-full">
                <Button
                  className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.8)]"
                  onClick={() => openSubmenu(submenuIndex === 1 ? null : 1)}
                >
                  Outerwear
                </Button>
                {submenuIndex === 1 ? (
                  <FaRegMinusSquare
                    onClick={() => openSubmenu(submenuIndex === 1 ? null : 1)}
                    className="absolute right-[15px] top-[10px] cursor-pointer"
                  />
                ) : (
                  <FaRegSquarePlus
                    onClick={() => openSubmenu(submenuIndex === 1 ? null : 1)}
                    className="absolute right-[15px] top-[10px] cursor-pointer"
                  />
                )}
              </div>

              {submenuIndex === 1 && (
                <ul className="submenu show w-full pl-3">
                  <li className="list-none"><Link to="/productListing/Fashion/Men/jackets&Coats" className="link pl-4 text-[14px]">Jackets</Link></li>
                  <li className="list-none"><Link to="/productListing/Fashion/Men/jackets&Coats" className="link pl-4 text-[14px]">Coats</Link></li>
                  <li className="list-none"><Link to="/productListing/Fashion/Men/jackets&Coats" className="link pl-4 text-[14px]">Blazers</Link></li>
                  <li className="list-none"><Link to="/productListing/Fashion/Men/Hoodeies&Sweatshirts" className="link pl-4 text-[14px]">Sweaters</Link></li>
                  <li className="list-none"><Link to="/productListing/Fashion/Men/Hoodeies&Sweatshirts" className="link pl-4 text-[14px]">Hoodies</Link></li>
                </ul>
              )}
            </li>

            {/* ================= Other Categories ================= */}
            {[
              ['Jewellery','/productListing/Jewellery'],
              ['Electronics','/productListing/Electronics'],
              ['Furniture','/productListing/Furniture'],
              ['Perfumes','/productListing/Perfumes'],
              ['Footwear','/productListing/Footwear'],
              ['Bags','/productListing/Bags'],
              ['Accessories','/productListing/Accessories'],
              ['Xbox Controller','/productListing/Electronics/SmartGadgets'],
              ['Glasses & Watches','/productListing/Accessories'],
              ['Cosmetics','/productListing/Beauty'],
            ].map(([name, path]) => (
              <li key={name} className="relative list-none">
                <Link to={path} className="w-full">
                  <Button className="w-full !justify-start !px-3 !text-left !text-[rgba(0,0,0,0.8)]">
                    {name}
                  </Button>
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </Box>
    </Drawer>
  );
};

export default CategoryPanel;
