import React from "react";

const MacroCard = ({ image, title, description }) => {
  return (
    <div className="macro-card bg-[#F3F5F7] p-12 flex-col inline-flex">
      <div className="image">
        <img src={image}  />
       
      </div>
      <div className="title mt-4 text-xl text-[#141718] font-medium font-pop">
        {title}
      </div>
      <div className="description mt-2 font-normal font-pop text-[#6C7275] text-sm">
        {description}
      </div>
    </div>
  );
};

export default MacroCard;
