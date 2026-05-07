import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider overflow-hidden py-6">

      {/* FULL WIDTH FIX */}
      <div className="w-full px-2 md:px-4">

        <Swiper
          spaceBetween={10}
          navigation={true}
          grabCursor={true}
          modules={[Navigation]}
          className="mySwiper"

          /* ✅ RESPONSIVE FIX */
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
        >

          {/* ITEM 1 */}
          <SwiperSlide>
            <Link to="/productListing/Fashion">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC1.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 2 */}
          <SwiperSlide>
            <Link to="/productListing/Electronics">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC2.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 3 */}
          <SwiperSlide>
            <Link to="/productListing/Bags">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC3.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 4 */}
          <SwiperSlide>
            <Link to="/productListing/Footwear">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC4.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 5 */}
          <SwiperSlide>
            <Link to="/productListing/Groceries">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC5.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 6 */}
          <SwiperSlide>
            <Link to="/productListing/Beauty">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC6.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 7 */}
          <SwiperSlide>
            <Link to="/productListing/Furniture">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC9.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Furniture</h3>
              </div>
            </Link>
          </SwiperSlide>

          {/* ITEM 8 */}
          <SwiperSlide>
            <Link to="/productListing/Perfumes">
              <div className="item flex flex-col items-center justify-center rounded-md bg-white px-3 py-6 text-center shadow-sm transition hover:scale-105">
                <img src="HC10.png" className="h-[45px] w-[45px] md:h-[60px] md:w-[60px]" />
                <h3 className="mt-2 font-medium text-[12px] md:text-[14px]">Perfumes</h3>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
};

export default HomeCatSlider;