import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import MiniCard from "./components/MiniCard/MiniCard";
import MacroCard from "./components/MacroCard/MacroCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <div className="cards  flex gap-6 items-center justify-center">
        <div className="right-card">
          <Card
            category="Living Room"
            image="/src/assets/card1.png"
            width="548px"
            height="664px"
            end={0}
          />
        </div>
        <div className="left-card flex-col gap-6">
          <Card
            category="Bedroom"
            image="/src/assets/card2.png"
            width="548px"
            height="319px"
            end={1}
          />
          <div className="mt-6">
            <Card
              category="Kitchen"
              image="/src/assets/toster.png"
              width="548px"
              height="319px"
              end={1}
            />
          </div>
        </div>
      </div>
      <div className="new flex-col items-center justify-between mx-48 ">
        <div className="titleandmore flex items-center justify-between my-12">
          <div className="title text-4xl text-black font-medium font-pop">
            New Arrivals
          </div>
          <div className="more ">
            <div className="2text text-black inline-flex font-int font-medium text-base border-b border-black ">
              <div className="content flex items-center max-sm:text-xs">
                <a href="#">More Products</a>
                <img src="src\assets\arrow-right1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <Splide
          options={{
            type: "carousel",
            perPage: 4,
            pagination: false,
            fixedWidth: 290,
          }}
        >
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/lamo.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
          <SplideSlide style={{ width: "" }}>
            <MiniCard
              product="Living Room"
              image="/src/assets/sofa.png"
              price={1200}
              oldPrice={1700}
            />
          </SplideSlide>
        </Splide>
        <div className="line w-full h-[2px] bg-black rounded-md my-12"></div>
        <div className="macro-card flex items-center justify-center gap-6 ">
          <MacroCard
            img="\src\assets\delivery.png"
            title="Free Shipping"
            description="Order above $200"
          />
          <MacroCard
            img="\src\assets\delivery.png"
            title="Free Shipping"
            description="Order above $200"
          />
          <MacroCard
            img="\src\assets\delivery.png"
            title="Free Shipping"
            description="Order above $200"
          />
          <MacroCard
            img="\src\assets\delivery.png"
            title="Free Shipping"
            description="Order above $200"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
