import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/sign-in" && location.pathname !== "/sign-up" ? (
        <div className="footer bg-[#141718] pt-14 pb-8 ">
          <div className="content mx-40 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
            <div className="top-footer flex items-center justify-between flex-wrap ">
              <div className="left flex items-center py-5 pr-8 flex-wrap justify-center max-sm:flex-col max-sm:w-[100vw] max-sm:pr-0">
                <div className="logo text-white font-pop text-2xl  font-medium ">
                  3legant<span className="text-[#6C7275]">.</span>
                </div>
                <div className="line-vertical bg-[#6C7275] w-[1px] h-6 mx-8 max-sm:mx-3 max-sm:rotate-90"></div>
                <div className="category text-[#E8ECEF] text-sm font-int font-normal">
                  Gift & Decoration Store
                </div>
              </div>
              <div className="right-footer flex items-center justify-center overflow-hidden my-6">
                <div className="pages flex text-[#FEFEFE] gap-10 flex-wrap max-sm:flex-col max-sm:w-[100vw]  items-center justify-center font-int text-sm  font-normal">
                  <div className="">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="">
                    <Link to="/shop">Shop</Link>
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
            <div className="bottom-footer flex items-center justify-between mt-12 border-t border-[#6C7275] py-4 max-sm:my-5 gap-10 flex-wrap-reverse max-sm:justify-center">
              <div className="left-bottom  flex items-center  text-xs font-pop gap-6 max-sm:text-[10px] flex-wrap-reverse max-sm:justify-center">
                <div className="text1 text-[#E8ECEF] font-normal ">
                  Copyright © 2023 3legant. All rights reserved
                </div>
                <div className="linkspolicy flex items-center justify-center flex-wrap  gap-3 max-sm:gap-7">
                  <div className="text2 font-semibold text-[#FEFEFE]">
                    <Link to="/privacy-policy">Policy</Link>
                  </div>
                  <div className="text3 font-semibold text-[#FEFEFE]">
                    <Link to="/terms-of-use">Terms of Use</Link>
                  </div>
                </div>
              </div>
              <div className="right-bottom flex items-center gap-6 max-sm:gap-6 flex-wrap ">
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
      ) : null}
    </>
  );
};

export default Footer;
