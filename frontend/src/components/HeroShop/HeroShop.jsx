import React from "react";
import { Link } from "react-router-dom";
const HeroShop = ({page, image, title,description}) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="Hero mx-48 ">
      <div
        className="HeroBg flex flex-col items-center justify-center py-28 "
        style={cardStyle}
      >
        <div className="categories  flex items-center justify-center gap-4">
          <div className="text-[#605F5F] font-int text-sm font-medium flex items-center gap-1">
            <Link to="/">Home</Link>
            <img src="/src/assets/chevron-right.png" alt="" />
          </div>
          <div className="text-[#121212] font-int font-medium text-sm">
            {page}
          </div>
        </div>
        <div className="title font-pop text-[54px] font-medium text-black flex items-center justify-center">
          {title}
        </div>
        <div className="description text-[#121212] font-int text-xl font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

export default HeroShop;
