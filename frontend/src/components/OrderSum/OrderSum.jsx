import React from "react";
import DrawerItem from "../DrawerItem/DrawerItem";
import { useSelector } from "react-redux";
const OrderSum = ({ cartItems }) => {
  let total = 0;
  for (const item of cartItems) total += item.price * item.amount;
  const shippingOption = useSelector((state) => state.cart.shippingOption);
  
  return (
    <div className="container max-sm:flex max-sm:items-center max-sm:justify-center max-md:flex max-md:items-center max-md:justify-center ">
      <div className="order border border-[#6C7275] px-6 py-4 max-sm:px-3  rounded-md inline-flex flex-col">
        <div className="title text-[#121212] font-pop text-3xl font-medium">
          Order summary
        </div>
        <div className="orders mt-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className={`order flex flex-col ${
                index !== item.length - 1
                  ? "border-b border-[#E8ECEF]"
                  : "border-none"
              }`}
            >
              <DrawerItem
                key={index}
                productId={item.id}
                image={item.selectedImage}
                title={item.title}
                color={item.color}
                price={item.price}
                Amount={item.amount}
                p={7}
              />
            </div>
          ))}
        </div>
        <div className="first flex items-center justify-between mt-2 gap-3">
          <div className="font-int text-sm font-normal ">
            <input type="text" id="12" placeholder="Input" required />
          </div>
          <div className="checkout">
            <a
              href="#"
              className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-base font-medium rounded-md"
            >
              Apply
            </a>
          </div>
        </div>
        <div className=" mt-4 coupon py-3 border-b border-[#E8ECEF] flex items-center justify-between">
          <div className="image&coupon flex items-center gap-2">
            <div className="image">
              <img src="/src/assets/ticket.png" alt="" />
            </div>
            <div className="name-coupon font-int text-base font-normal text-[#141718]">
              CatalinVoucher
            </div>
          </div>
          <div className="procents font-int text-base font-semibold text-[#38CB89]">
            <a href="">-$25.00 [Remove]</a>
          </div>
        </div>
        <div className=" mt-4 coupon py-3 border-b border-[#E8ECEF] flex items-center justify-between">
          <div className="name-coupon font-int text-base font-normal text-[#141718]">
            Shipping
          </div>
          <div className="procents font-int text-base font-semibold text-[#141718]">
            {shippingOption === "option2"
              ? "+$15.00$"
              : shippingOption === "option3"
              ? `+${(total * 0.15).toFixed(2)}$`
              : "Free"}
          </div>
        </div>
        <div className=" mt-4 coupon py-3 border-b border-[#E8ECEF] flex items-center justify-between">
          <div className="name-coupon font-int text-base font-normal text-[#141718]">
            Subtotal
          </div>
          <div className="procents font-int text-base font-semibold text-[#141718]">
            ${total.toFixed(2)}
          </div>
        </div>
        <div className=" mt-4 coupon py-3  flex items-center justify-between">
          <div className="name-coupon font-pop text-xl font-medium text-[#141718]">
            Total
          </div>
          <div className="procentsfont-pop text-xl font-pop font-medium text-[#141718]">
            {shippingOption === "option2"
              ? `$${(total + 15).toFixed(2)}`
              : shippingOption === "option3"
              ? `$${(total * 1.15).toFixed(2)}`
              : `$${total.toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSum;
