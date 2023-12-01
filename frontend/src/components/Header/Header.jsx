//libraries
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//components
import Notification from "../Notification/Notification";
import Drawer from "../Drawer/Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="cont">
      {location.pathname != "/cart" &&
      location.pathname != "/blog" &&
      location.pathname != "/contact-us" &&
      location.pathname != "/checkout" ? (
        <Notification />
      ) : null}

      <div className="py-5  header flex items-center justify-between mx-48">
        <div className="left-header font-pop text-2xl font-medium  leading-6 text-black flex items-center ">
          3legant
          <div className="font-pop text-2xl font-medium leading-6 text-[#6C7275]">
            .
          </div>
        </div>
        {/* active - #14171, not-active -#6C7275  */}
        <div className="middle-header">
          <ul className="links flex gap-10 ">
            <li
              className={`font-spa text-sm font-medium ${
                location.pathname === "/" ? "text-[#14171]" : "text-[#6C7275]"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-spa text-sm font-medium ${
                location.pathname === "/shop"
                  ? "text-[#14171]"
                  : "text-[#6C7275]"
              }`}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`font-spa text-sm font-medium ${
                location.pathname === "/product"
                  ? "text-[#14171]"
                  : "text-[#6C7275]"
              }`}
            >
              <Link to="/blog">Our Blog</Link>
            </li>
            <li
              className={`font-spa text-sm font-medium ${
                location.pathname === "/contact-us"
                  ? "text-[#14171]"
                  : "text-[#6C7275]"
              }`}
            >
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="right-header flex items-center gap-4">
          <div className="heart">
            <a href="">
              <img src="src\assets\Heart.png" alt="" />
            </a>
          </div>
          <div className="account">
            <img src="src\assets\user.png"></img>
          </div>
          <div
            className="shopping-bag flex items-center cursor-pointer"
            onClick={openDrawer}
          >
            <img src="src\assets\bag.png" alt="Shopping Bag" />
            <div className="bullet w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">
              <div className="text font-int text-xs font-bold">0</div>
            </div>
          </div>
        </div>
      </div>

      {isDrawerOpen && <Drawer closeDrawer={closeDrawer} />}
    </div>
  );
};

export default Header;
