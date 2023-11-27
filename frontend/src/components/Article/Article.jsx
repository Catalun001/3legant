import React from "react";

const Article = ({ image, title }) => {
  return (
    <div className="article ">
      <div className="imag">
        <img src={image} alt="" width={"357px"} height={"325px"} />
      </div>
      <div className="rest mt-6">
        <div className="title text-[#23262F] text-xl font-medium font-pop">
          {title}
        </div>
        <div className="2text mt-2 text-black inline-flex font-int font-medium text-base border-b border-black ">
          <div className="content flex items-center text-base font-medium">
            <a href="#">Read More</a>
            <img src="src\assets\arrow-right1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
