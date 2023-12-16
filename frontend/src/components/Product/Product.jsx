import React, { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Quantity from "../Quantity/Quantity";
import "@splidejs/react-splide/css";
import "./Product.css";

const Product = ({
  category,
  title,
  rating,
  description,
  price,
  oldPrice = "",
  measurements,
  imagesColors,
  images,
  productCode,
  newTag = 0,
}) => {
  const [selectedColor, setSelectedColor] = useState(
    Object.keys(imagesColors)[0]
  );
  const [isHeart, setHeart] = useState(0);

  const toggle = (event) => {
    event.preventDefault();
    isHeart ? setHeart(0) : setHeart(1);
  };

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const colorChange = (color) => {
    setSelectedColor(color);
  };

  const Stars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++)
      if (i < rating)
        stars.push(<img key={i} src="/src/assets/Star.png" alt="star" />);
      else stars.push(<img key={i} src="/src/assets/unStar.png" alt="star" />);

    return stars;
  };

  const sale = Math.floor(((oldPrice - price) / oldPrice) * 100);

  useEffect(() => {
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    const intervalId = setInterval(() => {
      const timeDiff = endDate - new Date();
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="product flex gap-16 mt-3 my-10">
      <div className="left w-1/2 flex flex-col overflow-hidden object-cover items-center ">
        <Splide hasTrack={false} className="flex items-center justify-center">
          <SplideTrack>
            {images.map((image, index) => (
              <SplideSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img src={image} className="object-cover h-[729px] w-[548px]" />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <img src="/src/assets/arrow-left.svg" />
            </button>
            <button className="splide__arrow splide__arrow--next ">
              <img src="/src/assets/arrow-right.svg" />
            </button>
          </div>
        </Splide>

        <div className="all-images flex items-center gap-[1.5vw] mt-4">
          {images.slice(1, 4).map((image, index) => (
            <div key={index} className="image">
              <img src={image} className="w-40 h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="right flex flex-col ">
        <div className="info flex flex-col pb-6 gap-4">
          <div className="rating flex items-center gap-0.5">{Stars()}</div>
          <div className="title text-[#141718] font-pop text-4xl font-medium flex items-center gap-2">
            {title}
            {newTag !== 0 && (
              <div className="rounded-md flex justify-center items-center new-tag text-base font-int bg-[#F5F5F5] font-bold text-[#141718] px-3 py-1">
                NEW
              </div>
            )}
            {oldPrice !== "" && (
              <div className="rounded-md sale-tag flex justify-center items-center text-base font-int  bg-[#38CB89] font-bold text-white px-3 py-1">
                -{sale}%
              </div>
            )}
          </div>
          <div className="description text-[#6C7275] font-int text-base font-normal">
            {description}
          </div>
          <div className="prices flex gap-3 items-center ">
            <div className="price font-pop text-3xl font-medium text-[#121212]">
              ${parseFloat(price).toFixed(2)}
            </div>
            {oldPrice != "" && (
              <div
                className="oldprice font-pop text-xl font-medium text-[#6C7275]"
                style={{ textDecorationLine: "line-through" }}
              >
                ${parseFloat(oldPrice).toFixed(2)}
              </div>
            )}
          </div>
        </div>
        {oldPrice !== "" && (
          <div className="timer flex flex-col border-y border-[#E8ECEF] py-6 gap-3">
            <div className="text font-int text-base font-normal text-[#343839]">
              Offer expires in:
            </div>
            <div className="time flex items-center gap-4">
              {Object.entries(timeRemaining).map(([unit, value]) => (
                <div
                  key={unit}
                  className="card1 flex flex-col items-center justify-center"
                >
                  <div className="cd text-black bg-[#F3F5F7] rounded font-pop text-3xl font-medium px-2.5 py-2.5">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text font-int text-[#6C7275] tex-xs font-normal mt-1">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="swatches  flex flex-col gap-6 py-6">
          <div className="measurements">
            <div className="text text-[#6C7275] font-int text-base font-semibold">
              Measurements
            </div>
            <div className="measurem text-black font-int text-lg font-normal">
              {measurements}
            </div>
          </div>
          <div className="colors">
            <div className="choose text-[#6C7275] font-int text-base font-semibold flex items-center gap-1">
              Choose Color
              <img src="/src/assets/chevron-right.png" alt="" />
            </div>
            <div className="selected text-black font-int text-lg font-normal">
              {selectedColor}
            </div>
            <div className="all-images-colors flex  mt-4">
              {Object.keys(imagesColors).map((color) => (
                <label
                  key={color}
                  className={`color-swatch relative w-20 flex items-center justify-center ${
                    selectedColor === color ? "selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className={`opacity-0 absolute z-10 w-full h-full object-cover  ${
                      selectedColor === color
                        ? "checked:border checked:border-black"
                        : ""
                    }`}
                    checked={selectedColor === color}
                    onChange={() => colorChange(color)}
                  />
                  <img
                    src={imagesColors[color]}
                    alt={`Color ${color}`}
                    className={`w-16 h-16 object-cover relative ${
                      selectedColor === color
                        ? "checked:border checked:border-black"
                        : ""
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="product-cart flex flex-col gap-6 py-4">
          <div className="top flex items-center gap-6">
            <div className="amount">
              <Quantity singleProd={1} />
            </div>
            <a
              href=""
              className="text-[#141718] font-int text-lg font-medium border border-[#141718]  rounded-lg "
            >
              <div className="wishlist ">
                <button
                  onClick={(event) => toggle(event)}
                  className="flex items-center justify-center gap-2 px-40 py-2"
                >
                  {isHeart ? (
                    <img src="\src\assets\HeartClick.png" alt="" />
                  ) : (
                    <img src="\src\assets\Heart.png" alt="" />
                  )}
                  Wishlist
                </button>
              </div>
            </a>
          </div>
          <div className="add-to-cart">
            <div className="w-full">
              <button className="bg-[#141718] text-white font-int text-md font-medium rounded-lg py-3 w-[63%] ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="codes flex items-center gap-14 py-3">
          <div className="left flex flex-col text-[#6C7275] font-int text-xs font-normal gap-2">
            <div className="sku">PRODUCT CODE</div>
            <div className="sku">CATEGORY</div>
          </div>
          <div className="right text-[#141718] flex flex-col font-int font-normal text-xs gap-2">
            <div className="sku">{productCode}</div>
            <div className="sku">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
