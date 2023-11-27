import React from "react";
import { Link } from "react-router-dom";
const HeroShop = () => {
  const cardStyle = {
    backgroundImage: "url(/src/assets/heroimage.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="Hero">
      <div
        className="HeroBg flex-col items-center justify-center py-28 mx-48"
        style={cardStyle}
      >
        <div className="categories  flex items-center justify-center gap-4">
          <div className="text-[#605F5F] font-int text-sm font-medium flex items-center gap-1">
            <Link to="/">Home</Link>
            <img src="/src/assets/chevron-right.png" alt="" />
          </div>
          <div className="text-[#121212] font-int font-medium text-sm">
            Shop
          </div>
        </div>
        <div className="title font-pop text-[54px] font-medium text-black flex items-center justify-center">
          Shop Page
        </div>
      </div>
    </div>
  );
};

export default HeroShop;
