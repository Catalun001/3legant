import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner flex items-center w-full  justify-center bg-[#F3F5F7] ">
      <div className="left-container ">
        <img src="\src\assets\banner.png" alt="" />
      </div>

      <div className="right-container  bg-[#F3F5F7] pl-28 pr-40  flex-col items-center justify-center ">
        <div className="sale-title text-[#377DFF] font-int text-base font-bold leading-4">
          SALE UP TO 35% OFF
        </div>
        <div className="title-right text-[#141718] font-pop text-4xl my-4 font-medium">
          HUNDREDS of
          <br />
          New lower prices!
        </div>
        <div className="description text-[#141718] text-xl font-normal leading-8 mb-6">
          It’s more affordable than ever to give every
          <br />
          room in your home a stylish makeover
        </div>
        <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black ">
          <div className="content flex items-center text-base font-medium">
            <Link to="/shop">Shop Now</Link>
            <img src="src\assets\arrow-right1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
