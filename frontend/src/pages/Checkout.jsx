import React from "react";
import FormClient from "../components/FormClient/FormClient";
import OrderSum from "../components/OrderSum/OrderSum";
import { useSelector } from "react-redux";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="checkout mx-48 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px] ">
      <div className="flex flex-col items-center justify-center gap-10 my-10">
        <div className="title text-black font-pop text-5xl ">Check Out</div>
        <div className="steps flex items-center justify-center gap-10">
          <div className="step1 flex items-center gap-4 border-b-2 border-[#38CB89] pb-6">
            <div className="number font-int text-base font-semibold rounded-full  text-white ">
              <img src="/src/assets/Frame 73.png" alt="" />
            </div>

            <div className="title-step text-[#38CB89] font-int text-base font-semibold">
              Shopping Cart
            </div>
          </div>
          <div className="step1 flex items-center gap-4  border-b-2 border-[#141718] pb-6 ">
            <div className="number font-int t text-base font-semibold rounded-full bg-black text-white  px-4 py-2">
              2
            </div>

            <div className="title-step text-[#23262F]  font-int text-base font-semibold">
              Checkout details
            </div>
          </div>
          <div className="step1 flex items-center gap-4 border-b-2 max-sm:hidden border-white pb-6">
            <div className="number font-int text-base font-semibold rounded-full bg-[#B1B5C3] text-[#FCFCFD] px-4 py-2">
              3
            </div>

            <div className="title-step text-[#B1B5C3] font-int text-base font-semibold">
              Order complete
            </div>
          </div>
        </div>
      </div>
      <div className="form my-20 flex gap-16  justify-center ml-[5vw] max-sm:flex-wrap max-sm:ml-0 max-md:flex-wrap max-md:ml-0">
        <FormClient />
        <OrderSum cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Checkout;
