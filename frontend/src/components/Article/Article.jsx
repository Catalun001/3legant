import React from "react";
import { Link } from "react-router-dom";
const Article = ({ image, title }) => {
  return (
    <div className="article ">
      <div className="imag  max-sm:w-[21rem] max-md:w-[17rem] max-lg:w-[19.5rem] max-xl:w-[23rem] max-2xl:w-[20rem]">
        <img src={image} alt="" className="object-fit " />
      </div>
      <div className="rest mt-6">
        <div className="title text-[#23262F] text-xl font-medium font-pop max-sm:text-base">
          {title}
        </div>
        <div className="2text mt-2 text-black inline-flex font-int font-medium text-base  border-b border-black ">
          <div className="content flex items-center text-base max-sm:text-xs font-medium">
            <Link to="/blog">Read More</Link>
            <img src="src\assets\arrow-right1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
