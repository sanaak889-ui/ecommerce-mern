import React, { useEffect, useState } from "react";
import api from "../../api/axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const [slides, setSlides] = useState([]);

 const fetchSlides = async () => {
  try {
    const { data } = await api.get("/slideshow"); // ✅ correct
    setSlides(data);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <div className="homeSlider w-full overflow-hidden py-3">
      <div className="w-full">

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="sliderHome w-full"
        >

          {slides.length > 0 ? (
            slides.map((slide) => (
              <SwiperSlide key={slide._id || slide.image}>
                <div className="w-full overflow-hidden rounded-lg md:rounded-[20px]">
                  <img
                    src={slide.image}
                    className="h-[180px] w-full object-cover sm:h-[250px] md:h-[350px] lg:h-[420px]"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="p-5 text-center text-gray-500">
              No slides found
            </div>
          )}

        </Swiper>

      </div>
    </div>
  );
};

export default HomeSlider;