import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FormClient.css";

const FormClient = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("card");

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };

  return (
    <div className="formclient inline-flex flex-col gap-6 w-full">
      <div className="content flex flex-col gap-6">
        <div className="contact-information border border-[#6C7275] px-6 py-10 rounded w-[38vw] max-sm:w-full max-md:w-full">
          <div className="title text-black font-pop text-xl font-medium">
            Contact Information
          </div>
          <form action="">
            <div className="names mt-6 flex items-center justify-between gap-3   ">
              <div className="first flex flex-col justify-center">
                <label
                  htmlFor="name"
                  className="text-[#6C7275] font-int font-bold text-xs  "
                >
                  FIRST NAME
                </label>
                <div className="font-int text-sm font-normal mt-3 ">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="max-sm:p-0"
                    style={{
                      width: "100%",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="first flex flex-col justify-center">
                <label
                  htmlFor="Last"
                  className="text-[#6C7275] font-int font-bold text-xs  "
                >
                  LAST NAME
                </label>
                <div className="font-int text-sm font-normal mt-3 ">
                  <input
                    type="text"
                    id="Last"
                    placeholder="Last name"
                    className="max-sm:p-0"
                    style={{
                      width: "100%",
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="phone mt-6 ">
              <label
                htmlFor="Phone"
                className="text-[#6C7275] font-int font-bold text-xs"
              >
                PHONE NUMBER
              </label>
              <div className="font-int text-sm font-normal mt-3">
                <input
                  type="text"
                  id="Phone"
                  placeholder="Phone number"
                  style={{ width: "100%" }}
                  required
                />
              </div>
            </div>
            <div className="mail mt-6">
              <label
                htmlFor="mail"
                className="text-[#6C7275] font-int font-bold text-xs"
              >
                EMAIL ADDRESS
              </label>
              <div className="font-int text-sm font-normal mt-3">
                <input
                  type="text"
                  id="mail"
                  placeholder="Your Email"
                  required
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="contact-information border border-[#6C7275] px-6 py-10 rounded w-[38vw] max-sm:w-full max-md:w-full">
          <div className="title text-black font-pop text-xl font-medium">
            Shipping Address
          </div>
          <form action="">
            <div className="phone mt-6">
              <label
                htmlFor="Street"
                className="text-[#6C7275] font-int font-bold text-xs"
              >
                STREET ADDRESS
              </label>
              <div className="font-int text-sm font-normal mt-3">
                <input
                  type="text"
                  id="Street"
                  placeholder="Street Address"
                  style={{ width: "100%" }}
                  required
                />
              </div>
            </div>
            <div className="mail mt-6">
              <label
                htmlFor="country"
                className="text-[#6C7275] font-int font-bold text-xs"
              >
                COUNTRY
              </label>
              <div className="font-int text-sm font-normal mt-3">
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  required
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="mail mt-6">
              <label
                htmlFor="town"
                className="text-[#6C7275] font-int font-bold text-xs"
              >
                TOWN / CITY
              </label>
              <div className="font-int text-sm font-normal mt-3">
                <input
                  type="text"
                  id="town"
                  placeholder="Your Email"
                  required
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="names mt-6 flex items-center justify-between gap-3">
              <div className="first">
                <label
                  htmlFor="state"
                  className="text-[#6C7275] font-int font-bold text-xs"
                >
                  STATE
                </label>
                <div className="font-int text-sm font-normal mt-3">
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="first">
                <label
                  htmlFor="zip"
                  className="text-[#6C7275] font-int font-bold text-xs"
                >
                  ZIP CODE
                </label>
                <div className="font-int text-sm font-normal mt-3">
                  <input
                    type="text"
                    id="zip"
                    placeholder="Zip Code"
                    required
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-information border border-[#6C7275] px-6 py-10 rounded w-[38vw] max-sm:w-full max-md:w-full">
          <div className="title text-black font-pop text-xl font-medium">
            Payment method
          </div>
          <form action="">
            <div
              className={`top flex flex-col gap-6 mt-6 ${
                selectedPaymentOption === "cash"
                  ? "border-none"
                  : "border-b border-[#6C7275] pb-8"
              }`}
            >
              <label htmlFor="option10">
                <div className="option  flex px-4 py-3 rounded items-center gap-3 justify-between border border-[#141718]">
                  <div className="subdiv flex gap-3 items-center justify-center ">
                    <div className="div flex items-start">
                      <input
                        type="radio"
                        id="option10"
                        name="option"
                        checked={selectedPaymentOption === "card"}
                        onChange={() => handlePaymentOptionChange("card")}
                      />
                    </div>
                    <div className="div">
                      <label
                        htmlFor="option10"
                        className="font-int text-[#141718] font-normal text-base"
                      >
                        Pay by Card Credit
                      </label>
                    </div>
                  </div>
                  <div className="div">
                    <label htmlFor="option10">
                      <img src="/src/assets/money1.png" alt="" />
                    </label>
                  </div>
                </div>
              </label>
              <label htmlFor="option20">
                <div className="option  flex px-4 py-3 rounded items-center gap-3 justify-between border border-[#141718]">
                  <div className="subdiv flex gap-3 items-center justify-center ">
                    <div className="div flex items-start">
                      <input
                        type="radio"
                        id="option20"
                        name="option"
                        checked={selectedPaymentOption === "cash"}
                        onChange={() => handlePaymentOptionChange("cash")}
                      />
                    </div>
                    <div className="div">
                      <label
                        htmlFor="option20"
                        className="font-int text-[#141718] font-normal text-base"
                      >
                        Cash
                      </label>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            {selectedPaymentOption === "card" && (
              <>
                <div className="phone mt-6">
                  <label
                    htmlFor="num"
                    className="text-[#6C7275] font-int font-bold text-xs"
                  >
                    CARD NUMBER
                  </label>
                  <div className="font-int text-sm font-normal  mt-3">
                    <input
                      type="text"
                      id="num"
                      placeholder="1234 1234 1234"
                      style={{ width: "100%" }}
                      required
                    />
                  </div>
                </div>
                <div className="names mt-6 flex items-center justify-between gap-3">
                  <div className="first flex flex-col justify-center">
                    <label
                      htmlFor="code1"
                      className="text-[#6C7275] font-int font-bold text-xs"
                    >
                      EXPIRATION DATE
                    </label>
                    <div className="font-int text-sm font-normal mt-3">
                      <input
                        type="text"
                        id="code1"
                        placeholder="MM/YY"
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="first flex flex-col justify-center">
                    <label
                      htmlFor="code"
                      className="text-[#6C7275] font-int font-bold text-xs"
                    >
                      CVC
                    </label>
                    <div className="font-int text-sm font-normal mt-3">
                      <input
                        type="text"
                        id="code"
                        placeholder="CVC code"
                        style={{ width: "100%" }}
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
        <div className="checkout">
          <Link
            to="/success"
            className="bg-[#141718] py-3 px-6 flex items-center justify-center text-white font-int text-base font-medium rounded-md"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormClient;
