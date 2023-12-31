import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Hero = () => {
  return (
    <div className="mx-48 max-sm:mx-4 max-md:mx-10 max-lg:mx-14 max-xl:mx-16 max-2xl:mx-[120px] ">
      <Splide hasTrack={false}>
        <SplideTrack>
          <SplideSlide>
            <img
              src="/src/assets/slider1.png"
              alt="Image 1"
              className="w-full h-auto   object-cover max-sm:h-80"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="/src/assets/slider1.png"
              alt="Image 2"
              className="w-full h-auto   object-cover max-sm:h-80"
            />
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows hidden md:flex">
          <button className="splide__arrow splide__arrow--prev">
            <img src="/src/assets/arrow-left.svg" alt="Previous" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <img src="/src/assets/arrow-right.svg" alt="Next" />
          </button>
        </div>
      </Splide>
      <div className="flex items-center justify-center my-8 mb-10 flex-wrap">
        <div className="title text-7xl max-sm:text-[40px] font-pop font-medium tracking-tighter max-sm:leading-10 leading-[72px] mb-10 max-sm:mb-5">
          Simply Unique<span className="text-[#6C7275]">/</span>
          <br />
          Simply Better<span className="text-[#6C7275]">.</span>
        </div>
        <div className="description text-base max-sm:text-sm  font-semibold leading-6 font-int max-sm:w-[70vw] mx-10">
          <span className="text-[#343839]">3legant </span>
          <span className="text-[#6C7275] font-normal">
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
