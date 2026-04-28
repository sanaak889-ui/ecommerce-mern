import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from '../ProductItem';

import { Navigation, Autoplay } from "swiper/modules";

const ProductsSlider = ({ items, products }) => {
    if (!products || products.length === 0) return null; 
  return (
    <div className="productSlider py-3">

      <Swiper
        slidesPerView={items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"

        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: items }
        }}
      >

        {products.map((product) => (
          <SwiperSlide key={product._id || product.id}>
            {/* Pass all images array to ProductItem */}
            <ProductItem 
              product={{
                ...product,
                images: product.images || [product.img1, product.img2, product.img3] // fallback to old 3 images
              }} 
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default ProductsSlider;
