import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Notification = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div
      className={` notification flex gap-3 items-center justify-center bg-[#F3F5F7] h-10 ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <div className="ticket ">
        <img src="\src\assets\ticket.png" alt="" />
      </div>
      <div className="text font-int text-sm font-semibold text-[#343839] max-sm:text-xs">
        30% off storewide — Limited time!
      </div>
      <div className="2text text-[#377DFF] font-int font-medium text-sm border-b border-[#377DFF] ">
        <div className="content flex items-center max-sm:text-xs max-sm:hidden">
          <Link to="/shop">Shop Now</Link>
          <img src="src\assets\arrow-right.png" alt="" />
        </div>
      </div>
      <button onClick={toggle} className="sm:hidden">
        <div className="close ">
          <img src="/src/assets/close.svg" alt="" />
        </div>
      </button>
    </div>
  );
};

export default Notification;
