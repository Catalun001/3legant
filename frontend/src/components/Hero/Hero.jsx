import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Hero = () => {
  return (
    <div className="flex-col items-center justify-center mx-48">
      <Splide hasTrack={false} className="flex items-center justify-center">
        <SplideTrack>
          <SplideSlide className="flex items-center justify-center">
            <img
              src="/public/slider1.png"
              alt="Image 1"
              style={{ objectFit: "cover", height: "610px", width: "1640px" }}
            />
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <img
              src="/src/assets/slider1.png"
              alt="Image 2"
              style={{ objectFit: "cover", height: "610px", width: "1640px" }}
            />
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev  ">
            <img src="/src/assets/arrow-left.svg" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <img src="/src/assets/arrow-right.svg" />
          </button>
        </div>
      </Splide>
      <div className="flex items-center gap-40 justify-center my-8 mb-10">
        <div className="title text-7xl font-pop font-medium tracking-tighter leading-[76px]">
          Simply Unique<span className="text-[#6C7275]">/</span>
          <br />
          Simply Better<span className="text-[#6C7275]">.</span>
        </div>
        <div className="description text-base font-semibold leading-6 font-int ">
          <span className="text-[#343839]">3legant </span>
          <span className="text-[#6C7275] font-normal">
            is a gift & decorations store based in HCMC,
            <br />
            Vietnam. Est since 2019.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
