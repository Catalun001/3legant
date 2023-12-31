import React from "react";
import { Link } from "react-router-dom";
const Menu = ({ closeMenu }) => {
  return (
    <div className="menu fixed top-0 left-0 h-full w-[50vw] max-sm:w-[60vw] bg-white  shadow z-10 p-6 flex flex-col justify-between">
      <div className="top ">
        <div className="top-menu flex items-center justify-between ">
          <div className=" font-pop text-base font-medium leading-6 text-black flex items-center justify-center">
            <Link to="/">3legant</Link>
            <div className="font-pop text-base font-medium leading-6 text-[#6C7275]">
              .
            </div>
          </div>
          <button onClick={closeMenu}>
            <div className="close w-6 h-6">
              <img
                src="/src/assets/Line.svg"
                className="w-6 h-6 object-cover"
                alt=""
              />
            </div>
          </button>
        </div>
        <div className="search border border-[#6C7275] flex items-center rounded-md px-4 gap-2 my-4 overflow-hidden">
          <div className="imagine ">
            <img
              src="/src/assets/search 02.svg"
              className="object-cover w-6 h-6 "
              alt=""
            />
          </div>
          <div className="input text-blue ">
            <input
              type="text"
              placeholder="Search"
              className="outline-none font-int text-sm font-normal text-[#6C7275] overflow-hidden"
            />
          </div>
        </div>
        <div className="categories flex flex-col items-start gap-4 mt-7">
          <div className="category text-[#141718] text-base font-medium border-b border-[#E8ECEF] pb-4 w-full">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </div>
          <div className="category text-[#141718] text-base font-medium border-b border-[#E8ECEF] pb-4 w-full">
            <Link to="/shop" onClick={closeMenu}>
              Shop
            </Link>
          </div>
          <div className="category text-[#141718] text-base font-medium border-b border-[#E8ECEF] pb-4 w-full">
            <Link to="/blog" onClick={closeMenu}>
              Our Blog
            </Link>
          </div>
          <div className="category text-[#141718] text-base font-medium border-b border-[#E8ECEF] pb-4 w-full">
            <Link to="/contact-us" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="/checkout">
          <div className="cart flex items-center justify-between border-b border-[#E8ECEF] pb-4 w-full">
            <div className="text text-[#6C7275] text-lg font-medium font-int ">
              Cart
            </div>
            <div className="shopping-bag flex items-center cursor-pointer gap-1.5">
              <img src="\src\assets\shopping bag.svg" alt="Shopping Bag" />
              <div className="bullet w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">
                <div className="text font-int text-xs font-bold">0</div>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-full my-5">
          <Link
            to="/sign-in"
            className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-lg font-medium rounded-md"
          >
            Sign In
          </Link>
        </div>
        <div className="socials flex items-center gap-6">
          <div className="link">
            <img src="/src/assets/instagram.svg" alt="" />
          </div>
          <div className="link">
            <img src="/src/assets/facebook.svg" alt="" />
          </div>
          <div className="link">
            <img src="/src/assets/youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
