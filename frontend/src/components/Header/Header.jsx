// libraries
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// components
import Notification from "../Notification/Notification";
import Drawer from "../Drawer/Drawer";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const [isMenu, setIsMenu] = useState(false);

  const closeMenu = () => {
    setIsMenu(false);
  };
  const openMenu = () => {
    setIsMenu(true);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="cont">
      {location.pathname !== "/cart" &&
      location.pathname !== "/blog" &&
      location.pathname !== "/contact-us" &&
      location.pathname !== "/success" &&
      location.pathname !== "/sign-in" &&
      location.pathname !== "/sign-up" &&
      location.pathname !== "/checkout" &&
      location.pathname !== "/product/:id" ? (
        <Notification />
      ) : null}
      {location.pathname !== "/sign-in" && location.pathname !== "/sign-up" ? (
        <div className="py-5 header flex items-center justify-between mx-48 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
          <div className="left-header  font-pop text-2xl font-medium leading-6 text-black flex items-center">
            <button onClick={openMenu} className=" lg:hidden mr-1">
              <div className="menu w-6 h-6">
                <img src="/src/assets/menu.svg" alt="" />
              </div>
            </button>
            <Link to="/">3legant</Link>
            <div className="font-pop text-2xl font-medium leading-6 text-[#6C7275]">
              .
            </div>
          </div>
          {/* active - #14171, not-active -#6C7275 */}
          <div className="middle-header max-lg:hidden">
            <ul className="links flex gap-10">
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
                  location.pathname === "/blog"
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
            <div className="heart max-sm:hidden">
              <a href="">
                <img src="\src\assets\Heart.svg" alt="" />
              </a>
            </div>
            <div className="account max-sm:hidden">
              <Link to="/sign-up">
                <img src="\src\assets\user.svg" alt="User" />
              </Link>
            </div>
            <div
              className="shopping-bag flex items-center cursor-pointer"
              onClick={openDrawer}
            >
              <img src="\src\assets\shopping bag.svg" alt="Shopping Bag" />
              <div className="bullet w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">
                <div className="text font-int text-xs font-bold">0</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isDrawerOpen && <Drawer closeDrawer={closeDrawer} />}
      {isMenu && <Menu closeMenu={closeMenu} />}
    </div>
  );
};

export default Header;
