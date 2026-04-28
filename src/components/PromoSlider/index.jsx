import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const PromoSlider = () => {
  return (
    <div className="part1 h-[440px] w-full lg:w-[70%]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <img
              src="/Z1.jpg" // make sure this exists in public folder
              alt="Promo 1"
              className="h-full w-full object-cover"
            />
            <div className="promoText">
              <h2 className="font-bold text-[18px] lg:text-[28px]">
                Buy Apple iPhone
              </h2>
              <span className="text-primary font-bold text-[20px]">$999.00</span>
              <a
                href="/productListing/Electronics/Phone"
                className="mt-4 w-max rounded-md bg-[#ff5252] px-5 py-2 font-semibold hover:!bg-[#e64545]"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <img
              src="/GG1.jpg"
              alt="Promo 2"
              className="h-full w-full object-cover"
            />
            <div className="promoText">
              <h2 className="font-bold text-[18px] lg:text-[28px]">
                Explore The Best Seller
              </h2>
              <span className="text-primary font-bold text-[20px]">$20.00</span>
              <a
                href="/best-seller"
                className="mt-4 w-max rounded-md bg-[#ff5252] px-5 py-2 font-semibold hover:!bg-[#e64545]"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PromoSlider;
