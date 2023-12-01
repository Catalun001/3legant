import React from "react";

const BlogCard = ({ title, image, date }) => {
  return (
    <div className="blog-card inline-flex flex-col gap-6 w-[18vw]">
      <div className="image ">
        <img src={image} alt="" style={{ maxWidth: "100%" }} />
      </div>
      <div className="rest flex flex-col gap-2 ">
        <div className="title text-[#23262F] font-pop text-xl break-words">
          {title}
        </div>
        <div className="date text-[#6C7275] font-int text-xs font-normal">
          {date}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
