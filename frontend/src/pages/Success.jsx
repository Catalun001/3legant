import React from "react";
import { useSelector } from "react-redux";
const Success = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let total = 0;
  const payment = useSelector((state) => state.cart.paymentMethod);
  console.log(payment);
  for (const item of cartItems) total += item.price * item.amount;
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-10">
      <div className="title text-black font-pop text-5xl ">Check Out</div>
      <div className="steps flex items-center justify-center gap-20 max-sm:gap-0 flex-wrap">
        <div className="step1 flex items-center gap-4 border-b-2 border-[#38CB89] pb-6">
          <div className="number font-int text-base max-sm:hidden font-semibold rounded-full  text-white ">
            <img src="/src/assets/Frame 73.png" alt="" />
          </div>

          <div className="title-step text-[#38CB89] max-sm:hidden font-int text-base font-semibold">
            Shopping Cart
          </div>
        </div>
        <div className="step1 flex max-sm:hidden items-center gap-4  border-b-2 border-[#38CB89] pb-6 ">
          <div className="number font-int t text-base font-semibold rounded-full text-white">
            <img src="/src/assets/Frame 73.png" alt="" />
          </div>

          <div className="title-step text-[#38CB89]  font-int text-base font-semibold">
            Checkout details
          </div>
        </div>
        <div className="step1 flex items-center gap-4  border-b-2 border-[#141718] pb-6">
          <div className="number font-int text-base font-semibold rounded-full bg-black text-white px-4 py-2">
            3
          </div>

          <div className="title-step text-[#23262F] font-int text-base font-semibold">
            Order complete
          </div>
        </div>
      </div>
      <div
        className="container flex flex-col items-center gap-10 rounded-lg px-24 py-20 max-sm:py-10 max-sm:px-14"
        style={{
          boxShadow: "0px 32px 48px -48px rgba(18, 18, 18, 0.20)",
        }}
      >
        <div className="top flex flex-col items-center justify-center gap-4">
          <div className="congrats text-[#6C7275] font-pop text-2xl font-medium ">
            Thank you! 🎉
          </div>
          <div className="title mt-4 font-pop text-[#23262F] text-4xl font-medium text-center">
            Your order has been received
          </div>
        </div>
        <div className="orders flex items-center justify-center flex-wrap gap-10 max-sm:gap-4">
          {cartItems.map((item, index) => (
            <div className="img w-24  object-cover">
              <img
              key={index}
                src={item.selectedImage}
                alt=""
                className="w-24  object-cover"
              />
            </div>
          ))}
        </div>
        <div className="description flex gap-10 ">
          <div className="col1 flex flex-col gap-5">
            <div className="text text-[#6C7275] font-int text-sm font-semibold">
              Order Code:
            </div>
            <div className="text text-[#6C7275] font-int text-sm font-semibold">
              Date:
            </div>
            <div className="text text-[#6C7275] font-int text-sm font-semibold">
              Total:
            </div>
            <div className="text text-[#6C7275] font-int text-sm font-semibold">
              Payment method:
            </div>
          </div>
          <div className="col1 flex flex-col gap-5">
            <div className="text text-[#141718] font-int text-sm font-semibold">
              #0123_45678
            </div>
            <div className="text text-[#141718] font-int text-sm font-semibold">
              October 19, 2023
            </div>
            <div className="text text-[#141718] font-int text-sm font-semibold">
              ${total.toFixed(2)}
            </div>
            <div className="text text-[#141718] font-int text-sm font-semibold">
              {payment}
            </div>
          </div>
        </div>
        <div className="checkout">
          <a className="bg-[#141718] py-3 max-sm:px-14 px-10 flex items-center justify-center text-white font-int text-base font-medium rounded-lg">
            Purchase History
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
