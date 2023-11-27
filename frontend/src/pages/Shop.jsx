import React from "react";
import Header from ".././components/Header/Header";
import Cards from ".././components/Cards/Cards";
import Hero from ".././components/Hero/Hero";
import MiniCard from ".././components/MiniCard/MiniCard";
import MacroCard from ".././components/MacroCard/MacroCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Banner from ".././components/Banner/Banner";
import Articles from ".././components/Articles/Articles";
import Footer from ".././components/Footer/Footer";
import HeroShop from "../components/HeroShop/HeroShop";

const App = () => {
  return (
    <div className="home ">
      <div className="header mr-[15px]">
        <Header />
      </div>
      <HeroShop />
    </div>
  );
};

export default App;
