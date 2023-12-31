import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner flex items-center w-full  justify-center bg-[#F3F5F7]  overflow-hidden max-sm:flex-wrap max-md:flex-wrap">
      <div className="left-container flex items-center justify-center ">
        <img
          src="\src\assets\banner.png"
          className="object-cover max-md:w-[100vw]  "
          alt=""
        />
      </div>

      <div className="right-container  bg-[#F3F5F7] ml-[4vw] mx-4 flex-col items-center justify-center my-20 overflow-hidden">
        <div className="sale-title text-[#377DFF] font-int text-base font-bold leading-4 ">
          SALE UP TO 35% OFF
        </div>
        <div className="title-right text-[#141718] font-pop text-[34px] my-4 font-medium  leading-10">
          HUNDREDS of New lower prices!
        </div>
        <div className="description text-[#141718] text-xl max-sm:text-sm font-normal leading-8 mb-6 max-sm:mb-1  ">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </div>
        <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black  mt-6">
          <div className="content flex items-center text-base max-sm:text-sm font-medium">
            <Link to="/shop">Shop Now</Link>
            <img src="src\assets\arrow-right1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
