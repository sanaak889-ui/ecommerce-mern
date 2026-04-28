import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
	return (
		
			<div className="homeSlider py-4">
				<div className="container">
					<Swiper
					spaceBetween={10} 
					navigation={true}
					 

					modules={[Navigation, Autoplay]}
					autoplay={{
					  delay: 2500,
					  disableOnInteraction: false,
					}}

					className="sliderHome">
            <SwiperSlide>
			<div className="item overflow-hidden rounded-[20px]">
			<img src="p1.jpg" alt="Slide 1" className="w-full" />
			</div></SwiperSlide>
            
            <SwiperSlide> 
			<div className="item overflow-hidden rounded-[20px]">
			<img src="p2.jpg" alt="Slide 2" className="w-full" />
			</div></SwiperSlide>

            <SwiperSlide>
			<div className="item overflow-hidden rounded-[20px]">
			<img src="p3.jpg" alt="Slide 3" className="w-full" />
			</div></SwiperSlide>

            <SwiperSlide>
			<div className="item overflow-hidden rounded-[20px]">
			<img src="p4.jpg" alt="Slide 4" className="w-full" />
			</div></SwiperSlide>

            <SwiperSlide>
			<div className="item overflow-hidden rounded-[20px]">
			<img src="p5.jpg" alt="Slide 5" className="w-full" />
			</div></SwiperSlide>

           
      </Swiper>
		
				</div>
			</div>
		);
		};
export default HomeSlider;
