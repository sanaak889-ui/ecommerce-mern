import React, { useEffect, useState } from "react";

const FlashSaleCountdown = () => {
  const [time, setTime] = useState(8 * 3600); // 8 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="rounded-xl bg-black p-4 text-center text-white">
      <h3 className="text-lg font-bold">🔥 Flash Sale Ends In</h3>
      <div className="mt-2 text-2xl font-bold">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default FlashSaleCountdown;
