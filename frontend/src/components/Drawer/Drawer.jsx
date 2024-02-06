import React from "react";
import DrawerItem from "../DrawerItem/DrawerItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Drawer = ({ closeDrawer }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  let total = 0;
  for (const item of cartItems) total += item.price * item.amount;

  return (
    <div className="drawer fixed top-0 right-0 h-full w-80 bg-white shadow z-10 py-14 px-6 ">
      <div className="header flex items-center justify-between">
        <div className="title text-[#121212] font-pop text-3xl">Cart</div>
        <button onClick={closeDrawer}>
          <img
            src="\src\assets\x-removebg-preview.png"
            alt=""
            className="w-5"
          />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="cartItems overflow-y-auto flex-col items-center justify-center mt-4 z-10 overflow-hidden">
          {cartItems.map((item, index) => (
            <DrawerItem
              key={index}
              productId={item.id}
              image={item.selectedImage}
              title={item.title}
              color={item.selectedColor}
              price={item.price}
              Amount={item.amount}
            />
          ))}
        </div>
        <div className="footer z-20 pt-8">
          <div className="total flex items-center justify-between">
            <div className="text text-[#141718] font-pop text-xl font-medium ">
              Total
            </div>
            <div className="total-price text-[#141718] font-pop font-medium text-xl">
              ${total.toFixed(2)}
            </div>
          </div>
          <div className="checkout-btn-view flex flex-col gap-4 items-center justify-center mt-4">
            <div className="w-full">
              <Link
                to="/checkout"
                onClick={closeDrawer}
                className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-xl font-medium rounded-md"
              >
                Checkout
              </Link>
            </div>
            <div>
              <Link
                to="/cart"
                onClick={closeDrawer}
                className="text-[#121212]  font-int text-sm font-semibold border-b border-black"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
