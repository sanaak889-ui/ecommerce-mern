import React from "react";
import { FaShippingFast, FaUndoAlt, FaCreditCard, FaGift, FaHeadset } from "react-icons/fa";

const ServiceHighlights = () => {
  return (
    <section className="border-t bg-white py-10">
      <div className="container mx-auto">

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">

          {/* Free Shipping */}
          <div className="group flex w-[140px] flex-col items-center text-center">
            <FaShippingFast className="text-[40px] text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#ff5252]" />
            <h3 className="mt-3 font-semibold text-[16px]">Free Shipping</h3>
            <p className="text-[12px] text-gray-500">For all Orders Over $200</p>
          </div>

          {/* 30 Days Returns */}
          <div className="group flex w-[140px] flex-col items-center text-center">
            <FaUndoAlt className="text-[40px] text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#ff5252]" />
            <h3 className="mt-3 font-semibold text-[16px]">30 Days Returns</h3>
            <p className="text-[12px] text-gray-500">For an Exchange Product</p>
          </div>

          {/* Secured Payment */}
          <div className="group flex w-[140px] flex-col items-center text-center">
            <FaCreditCard className="text-[40px] text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#ff5252]" />
            <h3 className="mt-3 font-semibold text-[16px]">Secured Payment</h3>
            <p className="text-[12px] text-gray-500">Payment Cards Accepted</p>
          </div>

          {/* Special Gifts */}
          <div className="group flex w-[140px] flex-col items-center text-center">
            <FaGift className="text-[40px] text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#ff5252]" />
            <h3 className="mt-3 font-semibold text-[16px]">Special Gifts</h3>
            <p className="text-[12px] text-gray-500">Our First Product Order</p>
          </div>

          {/* Support 24/7 */}
          <div className="group flex w-[140px] flex-col items-center text-center">
            <FaHeadset className="text-[40px] text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#ff5252]" />
            <h3 className="mt-3 font-semibold text-[16px]">Support 24/7</h3>
            <p className="text-[12px] text-gray-500">Contact us Anytime</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceHighlights;
