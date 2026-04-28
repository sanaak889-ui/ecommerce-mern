import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <div className="z-[999] absolute left-0 top-full hidden w-full bg-white shadow-lg group-hover:block">
      <div className="container mx-auto grid grid-cols-4 gap-8 p-6">

       {/* FASHION (Men Women Kids only) */}
        <div>
          <h3 className="mb-3 font-bold text-[#ff5252]">Fashion</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/productListing/Fashion/Men">Men</Link></li>
            <li><Link to="/productListing/Fashion/Women">Women</Link></li>
            <li><Link to="/productListing/Fashion/Kids">Kids</Link></li>
          </ul>
        </div>  
      
      {/* ELECTRONICS */}
        <div>
          <h3 className="mb-3 font-bold text-[#ff5252]">Electronics</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/productListing/Electronics/Laptops">Laptops</Link></li>
            <li><Link to="/productListing/Electronics/Phones">Mobile Phones</Link></li>
            <li><Link to="/productListing/Electronics/SmartGadgets">Smart Gadgets</Link></li>
          </ul>
        </div>

        {/* FURNITURE */}
        <div>
          <h3 className="mb-3 font-bold text-[#ff5252]">Furniture</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/productListing/Furniture/Bedroom">Bedroom</Link></li>
            <li><Link to="/productListing/Furniture/LivingRoom">Sofa</Link></li>
            <li><Link to="/productListing/Furniture/Dining">Dining</Link></li>
            <li><Link to="/productListing/Furniture/Office">Office</Link></li>
          </ul>
        </div>

        {/* FOOTWEAR */}
        <div>
          <h3 className="mb-3 font-bold text-[#ff5252]">Footwear</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/productListing/Footwear/Men">Men</Link></li>
            <li><Link to="/productListing/Footwear/Women">Women</Link></li>
            <li><Link to="/productListing/Footwear/Kids">Kids</Link></li>
          </ul>
        </div>

       

      </div>
    </div>
  );
};

export default MegaMenu;
