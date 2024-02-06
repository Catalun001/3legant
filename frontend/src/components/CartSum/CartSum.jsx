import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartSum.css";
import { useSelector, useDispatch } from "react-redux";
import { setShipping } from "../../features/cartSlice";
const CartSum = ({ subtotal }) => {
  subtotal = parseFloat(subtotal).toFixed(2);
  const [selectedOption, setOption] = useState("");
  const dispatch = useDispatch();

  const func = (option) => {
    setOption(option);
  };
  const handleCheckout = () => {
    let selectedShippingOption;
    if (selectedOption === "option2") selectedShippingOption = "option2";
    else if (selectedOption === "option3") selectedShippingOption = "option3";
    else selectedShippingOption = "option1";
    dispatch(setShipping({ shippingOption: selectedShippingOption }));
    console.log(selectedShippingOption);
  };

  return (
    <div className="cartsum  border border-[#6C7275] rounded-md p-6 w-[30%] max-sm:w-full h-min max-md:w-[70vw] max-lg:w-[60vw] max-xl:w-[38vw]">
      <div className="title text-[#141718] font-pop text-xl font-medium">
        Cart summary
      </div>
      <form action="">
        <div className="deliveries mt-4 flex flex-col gap-3 mb-4">
          <label htmlFor="option1">
            <div
              onClick={() => func("option1")}
              className="option  flex px-4 py-3 rounded items-center gap-3 justify-between border border-[#141718]"
            >
              <div className="subdiv flex gap-3 items-center justify-center ">
                <div className="div flex items-start">
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    defaultChecked
                  />
                </div>
                <div className="div">
                  <label
                    htmlFor="option1"
                    className="font-int text-[#141718] font-normal text-base"
                  >
                    Free shipping
                  </label>
                </div>
              </div>
              <div className="div">
                <label
                  htmlFor="option1"
                  className="text-[#141718] font-int text-base font-normal "
                >
                  $0.00
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="option2">
            <div
              onClick={() => func("option2")}
              className="option flex px-4 py-3 rounded items-center gap-3 justify-between border border-[#141718]"
            >
              <div className="subdiv flex items-center gap-3  ">
                <div className="div flex items-start">
                  <input type="radio" id="option2" name="option" />
                </div>
                <div className="div">
                  <label
                    htmlFor="option2"
                    className="font-int text-[#141718] font-normal text-base"
                  >
                    Express shipping
                  </label>
                </div>
              </div>
              <div className="div">
                <label
                  htmlFor="option2"
                  className="text-[#141718] font-int text-base font-normal "
                >
                  +$15.00
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="option3">
            <div
              onClick={() => func("option3")}
              className="option flex px-4 py-3 rounded items-center gap-3 justify-between border border-[#141718]"
            >
              <div className="subdiv flex items-center gap-3 ">
                <div className="div flex items-start">
                  <input type="radio" id="option3" name="option" />
                </div>
                <div className="div">
                  <label
                    htmlFor="option3"
                    className="font-int text-[#141718] font-normal text-base"
                  >
                    Pick Up
                  </label>
                </div>
              </div>
              <div className="div">
                <label
                  htmlFor="option3"
                  className="text-[#141718] font-int text-base font-normal "
                >
                  %21.00
                </label>
              </div>
            </div>
          </label>
        </div>
      </form>
      <div className="container sub flex border-b border-[#EAEAEA] py-3 items-center justify-between">
        <div className="text text-[#141718] font-int text-base font-normal">
          Subtotal
        </div>
        <div className="subtotal text-[#141718] font-int text-base font-semibold ">
          ${subtotal}
        </div>
      </div>

      <div className="container total flex py-3 items-center justify-between">
        <div className="text text-[#141718] font-int text-xl font-semibold ">
          Total
        </div>
        <div className="subtotal text-[#141718] font-int text-xl font-semibold">
          {selectedOption === "option2"
            ? `$${(parseFloat(subtotal) + 15).toFixed(2)}`
            : selectedOption === "option3"
            ? `$${(parseFloat(subtotal) * 1.21).toFixed(2)}`
            : `$${subtotal}`}
        </div>
      </div>
      <div className="checkout">
        <Link
          to="/checkout"
          onClick={handleCheckout}
          className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-xl font-medium rounded-md"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartSum;
