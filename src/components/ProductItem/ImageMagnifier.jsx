import React, { useState } from "react";

const ImageMagnifier = ({ src, magnifierHeight = 150, magnifierWidth = 150, zoomLevel = 2 }) => {
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMagnifierPos({
      x: Math.max(0, Math.min(x, width)),
      y: Math.max(0, Math.min(y, height)),
      visible: true,
      width,
      height,
    });
  };

  const handleMouseLeave = () => {
    setMagnifierPos((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div
      className="relative h-full w-full cursor-zoom-in overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="product" className="h-full w-full rounded-md object-cover" />
      {magnifierPos.visible && (
        <div
          className="pointer-events-none absolute rounded-full border"
          style={{
            top: magnifierPos.y - magnifierHeight / 2,
            left: magnifierPos.x - magnifierWidth / 2,
            width: magnifierWidth,
            height: magnifierHeight,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${magnifierPos.width * zoomLevel}px ${magnifierPos.height * zoomLevel}px`,
            backgroundPositionX: `-${magnifierPos.x * zoomLevel - magnifierWidth / 2}px`,
            backgroundPositionY: `-${magnifierPos.y * zoomLevel - magnifierHeight / 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
