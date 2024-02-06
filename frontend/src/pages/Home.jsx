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
    <div className="home ">
      <Hero />
      <Cards />
      <div className="new flex-col items-center justify-between mt-14 mx-40 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px]">
        <div className="titleandmore flex items-center justify-between flex-wrap">
          <div className="title text-4xl text-black font-medium font-pop py-3">
            New
            <br />
            Arrivals
          </div>
          <div className="more ">
            <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black  ">
              <div className="content flex items-center text-base">
                <Link to="/shop">More Products</Link>
                <img src="src\assets\arrow-right1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="slider my-14 ">
          <Splide
            options={{
              type: "carousel",
              perPage: 4,
              pagination: false,
              fixedWidth: 280,
              arrows: false,
            }}
          >
            <SplideSlide>
              <MiniCard
                id={1}
                product={"Sofa"}
                image="/src/assets/lamo.png"
                price={1000}
                oldPrice={1200}
                rating={5}
              />
            </SplideSlide>
            <SplideSlide>
              <MiniCard
                id={2}
                product={"Sofa"}
                image="/src/assets/lamo.png"
                price={1000}
                oldPrice={1200}
                rating={5}
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="line w-full h-[2px] bg-black rounded-md "></div>
      </div>

      <div className="macro-card flex items-center justify-center gap-6 max-sm:gap-3 my-8 mx-4  flex-wrap">
        <MacroCard
          image="\src\assets\delivery.png"
          title="Free Shipping"
          description="Order above $200"
        />
        <MacroCard
          image="\src\assets\money.svg"
          title="Money-back"
          description="30 days guarantee"
        />
        <MacroCard
          image="\src\assets\lock.svg"
          title="Secure Payments"
          description="Secured by Stripe"
        />
        <MacroCard
          image="\src\assets\call.svg"
          title="24/7 Support"
          description="Phone and Email support"
        />
      </div>
      <Banner />
      <Articles />
      <Newsletter />
    </div>
  );
};

export default App;
