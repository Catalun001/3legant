import React from "react";
import { Link } from "react-router-dom";
import HeroShop from "../components/HeroShop/HeroShop";
import Newsletter from "../components/Newsletter/Newsletter";
import BlogCard from "../components/BlogCard/BlogCard";
import Check from "../components/Check/Check";
import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Option from "@mui/joy/Option";
const Blog = () => {
  return (
    <div className="blog">
      <HeroShop
        image="/src/assets/blog.png"
        title="Our Blog"
        page="Blog"
        description="Home ideas and design inspiration"
      />
      <div className="mx-48">
        <div className="header flex items-center justify-between pt-6">
          <div className="left flex gap-10">
            <Check name="All Blog" state />
            <Check name="Featured" />
          </div>
          <div className="right">
            <Select
              placeholder="Sort By"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 240,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="ascending">By Date to newest</Option>
              <Option value="descending">By Date to oldest</Option>
            </Select>
          </div>
        </div>

        <div className="cards flex flex-wrap gap-[1.5vw] pt-10 pb-20">
          <BlogCard
            title="7 ways to decor your home like a professional"
            date="October 16, 2023"
            image="/src/assets/BlogCard.png"
          />
          <BlogCard
            title="7 ways to decor your home like a professional"
            date="October 16, 2023"
            image="/src/assets/BlogCard.png"
          />
          <BlogCard
            title="7 ways to decor your home like a professional"
            date="October 16, 2023"
            image="/src/assets/BlogCard.png"
          />
          <BlogCard
            title="7 ways to decor your home like a professional"
            date="October 16, 2023"
            image="/src/assets/BlogCard.png"
          />
          <BlogCard
            title="7 ways to decor your home like a professional"
            date="October 16, 2023"
            image="/src/assets/BlogCard.png"
          />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Blog;
