import React from "react";
import { Link } from "react-router-dom";
import CartSum from "../components/CartSum/CartSum";
import Coupon from "../components/Coupon/Coupon";
import ProductsCart from "../components/ProductsCart/ProductsCart";

const ViewCart = () => {
  return (
    <div className="viewcart mx-48 flex items-center justify-center">
      <div className="container  my-10 flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-10 ">
          <div className="title text-black font-pop text-5xl">Cart</div>
          <div className="steps flex items-center justify-center gap-10">
            <div className="step1 flex items-center gap-4 border-b-2 border-[#141718] pb-6">
              <div className="number font-int text-base font-semibold rounded-full bg-black text-white px-4 py-2">
                1
              </div>

              <div className="title-step text-[#23262F] font-int text-base font-semibold">
                Shopping Cart
              </div>
            </div>
            <div className="step1 flex items-center gap-4 border-b-2 border-white pb-6 ">
              <div className="number font-int t text-base font-semibold rounded-full bg-[#B1B5C3] text-[#FCFCFD] px-4 py-2">
                2
              </div>

              <div className="title-step text-[#B1B5C3] font-int text-base font-semibold">
                Checkout details
              </div>
            </div>
            <div className="step1 flex items-center gap-4 border-b-2 border-white pb-6">
              <div className="number font-int text-base font-semibold rounded-full bg-[#B1B5C3] text-[#FCFCFD] px-4 py-2">
                3
              </div>

              <div className="title-step text-[#B1B5C3] font-int text-base font-semibold">
                Order complete
              </div>
            </div>
          </div>
        </div>
        <div className="bag-and-sum flex py-20 gap-24">
          <ProductsCart
            products={[
              {
                title: "Tray Table",
                color: "Black",
                price: 104,
                quantity: 2,
                image: "src/assets/chair.png",
              },
              {
                title: "Tray Table",
                color: "Black",
                price: 100,
                quantity: 2,
                image: "src/assets/chair.png",
              },
              {
                title: "Tray Table",
                color: "Black",
                price: 100,
                quantity: 2,
                image: "src/assets/chair.png",
              },
            ]}
          />
          <CartSum subtotal={100} />
        </div>
        <Coupon />
      </div>
    </div>
  );
};

export default ViewCart;
