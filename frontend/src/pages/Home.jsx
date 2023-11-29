// libraries
import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
//components
import Cards from ".././components/Cards/Cards";
import Hero from ".././components/Hero/Hero";
import MiniCard from ".././components/MiniCard/MiniCard";
import MacroCard from ".././components/MacroCard/MacroCard";
import Banner from ".././components/Banner/Banner";
import Articles from ".././components/Articles/Articles";

import Newsletter from ".././components/Newsletter/Newsletter";


const App = () => {
  return (
    <div className="home">
      
      <Hero />
      <Cards />
      <div className="new flex-col items-center justify-between mt-14 mx-40">
        <div className="titleandmore flex items-center justify-between ">
          <div className="title text-4xl text-black font-medium font-pop">
            New
            <br />
            Arrivals
          </div>
          <div className="more ">
            <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black ">
              <div className="content flex items-center text-base">
                <Link to="/shop">More Products</Link>
                <img src="src\assets\arrow-right1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="slider my-14">
          <Splide
            options={{
              type: "carousel",
              perPage: 4,
              pagination: false,
              fixedWidth: 300,
              arrows: false,
            }}
          >
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/lamo.png"
                price={1200}
                oldPrice={1700}
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                product="Living Room"
                image="/src/assets/sofa.png"
                price={1200}
                oldPrice={1700}
                newTag
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="line w-full h-[2px] bg-black rounded-md "></div>
      </div>

      <div className="macro-card flex items-center justify-center gap-6 py-12 px-40 ">
        <MacroCard
          image="\src\assets\money.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
      </div>
      <Banner />
      <Articles />
      <Newsletter />
      
    </div>
  );
};

export default App;
