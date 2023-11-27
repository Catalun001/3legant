import React from "react";
import { Outlet, Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer bg-[#141718] pt-20 pb-8 ">
      <div className="content mx-40 ">
        <div className="top-footer flex items-center justify-between">
          <div className="left flex items-center">
            <div className="logo text-white font-pop text-2xl font-medium ">
              3legant<span className="text-[#6C7275]">.</span>
            </div>
            <div className="line-vertical bg-[#6C7275] w-[1px] h-6 mx-8"></div>
            <div className="category text-[#E8ECEF] text-sm font-int font-normal">
              Gift & Decoration Store
            </div>
          </div>
          <div className="right-footer">
            <div className="pages flex text-white gap-10 items-center font-int text-sm font-normal">
              <div className="">
                <Link to="/">Home</Link>
              </div>
              <div className="">
                <Link to="/shop">Shop</Link>
              </div>
              <div className="">
                <Link to="/product">Product</Link>
              </div>
              <div className="">
                <Link to="/blog">Blog</Link>
              </div>
              <div className="">
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer flex items-center justify-between mt-12 border-t border-[#6C7275] py-4">
          <div className="left-bottom  flex items-center text-xs font-pop gap-6">
            <div className="text1 text-[#E8ECEF] font-normal ">
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div className="text2 font-semibold text-[#FEFEFE]">
              <Link to="/privacy-policy">Policy</Link>
            </div>
            <div className="text3 font-semibold text-[#FEFEFE]">
              <Link to="/terms-of-use">Terms of Use</Link>
            </div>
          </div>
          <div className="right-bottom flex items-center gap-6">
            <div className="logo">
              <a href="">
                <img src="/src/assets/instagram.png" alt="" />
              </a>
            </div>
            <div className="logo">
              <a href="">
                <img src="/src/assets/facebook.png" alt="" />
              </a>
            </div>
            <div className="logo">
              <a href="">
                <img src="/src/assets/youtube.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
