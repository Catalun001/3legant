import React,{useState} from "react";

const CardShop = ({
  product,
  image,
  price,
  oldPrice = "",
  newTag = 0,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    height: "349px",
    width: "262px",
  };

  const sale = Math.floor(((oldPrice - price) / oldPrice) * 100);

  return (
    <div
      className={`mini-card inline-flex flex-col ${
        isHovered ? "hovered" : ""
      } transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg p-4 inline-flex flex-col justify-between transition-all duration-300 ease-in-out"
        style={cardStyle}
      >
        <div className="header-card flex justify-between">
          <div className="left-header flex-col">
            {newTag != 0 && (
              <div className="rounded-md flex justify-center items-center new-tag text-base font-int bg-white font-bold text-[#141718] px-3 py-1">
                NEW
              </div>
            )}
            {oldPrice != "" && (
              <div className="rounded-md sale-tag text-base font-int mt-2 bg-[#38CB89] font-bold text-white px-3 py-1">
                -{sale}%
              </div>
            )}
          </div>
        </div>
        <div
          className={`footer-card font-int text-base font-medium rounded-lg bg-black px-6 py-2 text-white flex justify-center items-center ${
            isHovered ? "visible opacity-100" : "invisible opacity-0"
          } transition-all duration-400 ease-in-out`}
        >
          <a href="">Add to cart</a>
        </div>
      </div>
      <div className="description mt-3 flex-col">
        <div className="rating flex mt-1">
          <img src="/src/assets/Star.png" alt="star" />
          <img src="/src/assets/Star.png" alt="star" />
          <img src="/src/assets/Star.png" alt="star" />
          <img src="/src/assets/Star.png" alt="star" />
          <img src="/src/assets/Star.png" alt="star" />
        </div>
        <div className="product-title font-int text-base font-semibold my-1">
          {product}
        </div>
        <div className="prices flex gap-3 items-center mt-1">
          <div className="price font-int font-semibold text-sm">${price}</div>
          {oldPrice != "" && (
            <div
              className="oldprice font-int font-normal text-sm text-[#6C7275]"
              style={{ textDecorationLine: "line-through" }}
            >
              ${oldPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardShop;
