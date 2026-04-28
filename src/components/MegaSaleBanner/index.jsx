import React from "react";

const MegaSaleBanner = () => {
  return (
    <div className="mb-8 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 p-10 text-center text-white">
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold">
        <span className="animate-bounce">💥</span>
        MEGA SALE UP TO 70% OFF
      </h1>
      <p className="mt-2 text-lg">Fashion • Furniture • Perfume</p>
    </div>
  );
};

export default MegaSaleBanner;
