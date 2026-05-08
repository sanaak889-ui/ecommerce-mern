import React from "react";

const BannerBox = ({ img }) => {
  return (
    <div className="flex h-[180px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 sm:h-[200px] md:h-[240px] lg:h-[260px]">
      <img
        src={img}
        alt="banner"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
};

export default BannerBox;