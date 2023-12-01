import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import HeroShop from "../components/HeroShop/HeroShop";
import Newsletter from "../components/Newsletter/Newsletter";
const Blog = () => {
  return (
    <div className="blog">
      <HeroShop
        image="/src/assets/blog.png"
        title="Our Blog"
        page="Blog"
        description="Home ideas and design inspiration"
      />
<Newsletter />
    </div>
  );
};

export default Blog;
