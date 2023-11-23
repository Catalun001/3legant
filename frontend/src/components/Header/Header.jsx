import React from "react";

// components
import Notification from "../Notification/Notification";

const Header = () => {
  return (
    <div className="cont">
      <Notification />
      <div className="py-4  header flex items-center justify-between mx-48">
        <div className="left-header font-pop text-2xl font-medium  leading-6 text-black flex items-center ">
          3legant
          <div className="font-pop text-2xl font-medium leading-6 text-[#6C7275]">
            .
          </div>
        </div>
        <div className="middle-header   ">
          <ul className="links flex gap-10 ">
            {/* active - #14171, not-active -#6C7275  */}
            <li className="font-spa text-sm font-medium text-[#6C7275]">
              <a href="#">Home</a>
            </li>
            <li className="font-spa text-sm font-medium text-[#6C7275]  ">
              <a href="#">Shop</a>
            </li>
            <li className="font-spa text-sm font-medium text-[#6C7275] ">
              <a href="#">Product</a>
            </li>
            <li className="font-spa text-sm font-medium text-[#6C7275] ">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="right-header flex items-center gap-4">
          <div className="search">
            <img src="src\assets\search.png"></img>
          </div>
          <div className="account">
            <img src="src\assets\user.png"></img>
          </div>
          <div className="shopping-bag flex items-center">
            <img src="src\assets\bag.png"></img>
            <div className="bullet w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">
              <div className="text font-int text-xs font-bold">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
