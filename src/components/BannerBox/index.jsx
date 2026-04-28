import React from "react";
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div className="box bannerBox group overflow-hidden rounded-lg">
    <Link to="/">
      <img src={props.img} className="w-full transition-all group-hover:rotate-1 group-hover:rotate-2
        group-hover:scale-105 group-hover:scale-110" alt="banner" />
      </Link>
    </div>
  );
};

export default BannerBox;
