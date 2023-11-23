import React from "react";

const Card = ({ category, image, width, height, end }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: width,
    height: height,
    alignItems: end === 1 ? "flex-end" : "flex-start",
  };
  
  return (
    <div className="card flex" style={cardStyle}>
      <div className="content p-10" >
        <div className="card-title text-[34px] font-pop font-medium">
          {category}
        </div>
        <div className=" mt-3 text text-[#141718] font-int font-medium text-sm border-b border-[#141718] inline-flex pb-1">
          <div className="content items-center inline-flex">
            <a href="#" className="font-int text-base">
              Shop Now
            </a>
            <img src="src\assets\arrow-rightb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
