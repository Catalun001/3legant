import React from "react";
import Article from "../Article/Article";
const Articles = () => {
  return (
    <div className="articles my-20 mx-40">
      <div className="titleandmore flex items-center justify-between ">
        <div className="title text-4xl text-black font-medium font-pop mb-12">
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
      <div className="arts flex items-center justify-start gap-7">
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
