import React from "react";
import Article from "../Article/Article";

const Articles = () => {
  return (
    <div className="articles my-20 mx-40 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
      <div className="titleandmore flex items-center justify-between mb-12 flex-wrap">
        <div className="title text-4xl text-black font-medium font-pop py-2 pr-4">
          Articles
        </div>
        <div className="more ">
          <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black ">
            <div className="content flex items-center text-base">
              <a href="#">More Articles</a>
              <img src="src\assets\arrow-right1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="arts flex items-center justify-start gap-7 flex-wrap max-sm:gap-5 max-sm:justify-center max-md:justify-center max-lg:justify-center max-xl:justify-center max-md:gap-6 max-2xl:jus\
      ">
        <Article
          image="\src\assets\article.png"
          title="7 ways to decor your home"
        />
        <Article
          image="\src\assets\article.png"
          title="7 ways to decor your home"
        />
        <Article
          image="\src\assets\article.png"
          title="7 ways to decor your home"
        />
        <Article
          image="\src\assets\article.png"
          title="7 ways to decor your home"
        />
      </div>
    </div>
  );
};

export default Articles;
