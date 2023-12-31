import React from "react";
import { Link } from "react-router-dom";

const Card = ({ category, image, end, left = 0 }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit:"cover",
    alignItems: end === 1 ? "flex-end" : "flex-start",
  };

  return (
    <div className="card flex " style={cardStyle}>
      <div
        className={`content p-10 ${
          end
            ? "pt-28 pr-36 max-sm:pr-40 max-md:pt-[10vh] max-md:pr-[25vw] max-lg:pr-[10rem] "
            : "pb-[100%] max-sm:pr-28 pr-28   max-md:pr-[18vw]  "
        } `}
      >
        <div className="card-title text-[34px] font-pop font-medium">
          {category}
        </div>
        <div className="mt-3 text text-[#141718] font-int font-medium text-sm border-b border-[#141718] inline-flex pb-1">
          <div className="content items-center inline-flex  gap-1">
            <a href="#" className="font-int text-base">
              <Link to="/shop">Shop Now</Link>
            </a>
            <img src="src\assets\arrow-rightb.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
