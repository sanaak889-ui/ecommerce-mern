import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-8 pt-4">
      <div className="container">
        <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
         breakpoints={{
        0: { slidesPerView: 2 },
        640: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1280: { slidesPerView: 8 },
      }}
        modules={[Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide>
        <Link to="/productListing/Fashion">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC1.png" className="h-[60px] w-[60px]"/>
                <h3 className="font-[500] mt-3 text-[15px] transition-all">Fashion</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Electronics">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC2.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Electronics</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Bags">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC3.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Bags</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Footwear">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC4.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Footwear</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Groceries">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC5.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Groceries</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Beauty">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC6.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Beauty</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Wellness">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC7.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Wellness</h3>
            </div></Link>
        </SwiperSlide>

         <SwiperSlide>
        <Link to="/productListing/Jewellery">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC8.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Jewelery</h3>
            </div></Link>
        </SwiperSlide>
         <SwiperSlide>
        <Link to="/productListing/Furniture">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC9.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Furniture</h3>
            </div></Link>
        </SwiperSlide>
         <SwiperSlide>
        <Link to="/productListing/Perfumes">
            <div className="item flex flex-col items-center justify-center rounded-sm bg-white px-3 py-7 text-center">
                <img src="HC10.png" className="h-[60px] w-[60px] transition-all"/>
                <h3 className="font-[500] mt-3 text-[15px]">Perfumes</h3>
            </div></Link>
        </SwiperSlide>

    

       
      
      </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
