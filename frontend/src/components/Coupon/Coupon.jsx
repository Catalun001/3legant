import React from "react";

const Coupon = () => {
  return (
    <div className="coupon flex flex-col w-[23vw]">
      <div className="title text-[#141718] font-pop text-xl font-medium">
        Have a coupon?
      </div>
      <div className="subtitle text-[#6C7275] font-int text-base font-normal mt-2">
        Add your code for an instant cart discount
      </div>
      <div className="inputs mt-4 border border-[#6C7275] px-4 flex py-3 items-center justify-between">
        <div className="left flex items-center gap-2">
          <div className="image">
            <img src="/src/assets/ticket.png" alt="" />
          </div>
          <div className="input2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="focus:outline-none"
            />
          </div>
        </div>
        <div className="button">
          <a href="" className="text-[#141718] font-int text-base font-medium">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
