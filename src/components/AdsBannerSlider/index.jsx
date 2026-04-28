import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
         
    
        modules={[Navigation, Autoplay]}
        autoplay={{
					  delay: 2500,
					  disableOnInteraction: false,
					}}
        className="smlBtn py-5"
      >
        <SwiperSlide>
          <BannerBox img={'/B1.jpg'} link={'/'}/>
        </SwiperSlide>

         <SwiperSlide>
          <BannerBox img={'/B2.jpg'} link={'/'}/>
        </SwiperSlide>

         <SwiperSlide>
          <BannerBox img={'/B3.jpg'} link={'/'}/>
        </SwiperSlide>

         <SwiperSlide>
          <BannerBox img={'/B5.jpg'} link={'/'}/>
        </SwiperSlide>

         <SwiperSlide>
          <BannerBox img={'/B4.jpg'} link={'/'}/>
        </SwiperSlide>

         <SwiperSlide>
          <BannerBox img={'/B6.jpg'} link={'/'}/>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
