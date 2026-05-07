import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import api from "../../api/axios";
import BannerBox from "../../components/BannerBox";

const AdsBannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await api.get("/home-content");

        console.log("HOME CONTENT:", res.data); // DEBUG

        setBanners(res.data?.adsBanner || []);
      } catch (err) {
        console.log("Banner error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) return null;

  return (
    <div className="w-full px-2 md:px-0">
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
        className="py-5"
      >
        {banners.length > 0 ? (
          banners.map((img, index) => (
            <SwiperSlide key={index}>
              <BannerBox img={img} link="/" />
            </SwiperSlide>
          ))
        ) : (
          <p className="w-full text-center text-gray-500">
            No banners found
          </p>
        )}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;