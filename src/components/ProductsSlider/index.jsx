import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from '../ProductItem';

import { Navigation } from "swiper/modules";

const ProductsSlider = ({ items = 5, products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="productSlider w-full py-3">

      {/* ✅ CENTER CONTAINER */}
      <div className="container mx-auto overflow-hidden">

        <Swiper
          centeredSlides={false}
          spaceBetween={12}
          navigation={true}
          modules={[Navigation]}
          className="w-full"

          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: items },
          }}
        >

          {products.map((product) => (
            <SwiperSlide key={product._id || product.id} className="!flex justify-center">

              {/* ✅ FORCE CARD CENTER */}
              <div className="w-full max-w-[250px]">
                <ProductItem
                  product={{
                    ...product,
                    images:
                      product.images || [
                        product.img1,
                        product.img2,
                        product.img3
                      ]
                  }}
                />
              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  );
};

export default ProductsSlider;