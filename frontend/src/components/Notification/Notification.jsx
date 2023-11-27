import React from "react";
import { Link } from "react-router-dom";
const Notification = () => {
  return (
    <div className="notification flex gap-3 items-center justify-center bg-[#F3F5F7] h-10 ">
      <div className="ticket ">
        <img src="src\assets\ticket.png" alt="" />
      </div>
      <div className="text font-int text-sm font-semibold text-[#343839] max-sm:text-xs">
        30% off storewide — Limited time!
      </div>
      <div className="2text text-[#377DFF] font-int font-medium text-sm border-b border-[#377DFF] ">
        <div className="content flex items-center max-sm:text-xs">
          <Link to="/shop">Shop Now</Link>
          <img src="src\assets\arrow-right.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
