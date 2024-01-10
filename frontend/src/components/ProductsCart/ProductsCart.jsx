import React from "react";
import Quantity from "../Quantity/Quantity";

const ProductsCart = ({ products }) => {
  return (
    <div
      className={`overflow-hidden products-cart grid grid-cols-4 max-sm:grid-cols-2 grid-rows-${products.length}`}
    >
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <div className="c1 ">
            {index === 0 && (
              <div className="product max-sm:w-[100vw]  pb-6 w-full font-int text-base font-semibold text-[#121212]">
                Product
              </div>
            )}
            <div
              className={`prod flex items-center justify-center py-2 gap-5 max-sm:justify-start  ${
                index === 0
                  ? " border-t border-[#6C7275]"
                  : "border-y border-[#E8ECEF]"
              }`}
            >
              <div className="img flex items-center justify-center py-5 pb-">
                <img className="w-28 h-30" src={products[index].image} alt="" />
              </div>
              <div className="info flex flex-col gap-2">
                <div className="title font-int text-sm font-semibold text-[#121212]">
                  {products[index].title}
                </div>
                <div className="color font-int text-xs font-normal text-[#6C7275]">
                  Color: {products[index].color}
                </div>
                <div className="flex items-center w-full justify-center h-full border-t sm:hidden ">
                  <Quantity amount={products[index].quantity} />
                </div>
                <div className="remove max-sm:hidden">
                  <button className="flex items-center">
                    <img src="/src/assets/Line2.png" alt="" />
                    <div className="text text-[#6C7275] font-int text-sm font-semibold">
                      Remove
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="c2 flex flex-col items-center justify-center max-sm:hidden">
            {index === 0 && (
              <div className="title-section  max-sm:text-white  pb-6 w-full flex justify-center font-int text-base font-semibold text-[#121212] ">
                Quantity
              </div>
            )}
            <div
              className={`flex items-center w-full justify-center h-full border-t  ${
                index !== 0
                  ? "border-y border-[#E8ECEF] "
                  : "border-t border-[#6C7275]"
              }`}
            >
              <Quantity amount={products[index].quantity} />
            </div>
          </div>
          <div className="c3 flex flex-col items-center max-sm:hidden justify-center">
            {index === 0 && (
              <div className="title-section  max-sm:border-none max-sm:text-white  pb-6 w-full flex justify-center font-int text-base font-semibold text-[#121212]">
                Price
              </div>
            )}
            <div
              className={`flex items-center justify-center max-sm:hidden h-full w-full font-int text-lg font-normal ${
                index !== 0
                  ? "border-y border-[#E8ECEF]"
                  : "border-t border-[#6C7275]"
              }`}
            >
              ${parseFloat(products[index].price).toFixed(2)}
            </div>
          </div>
          <div className="c4 flex flex-col items-center justify-center">
            {index === 0 && (
              <div className="title-section  max-sm:text-white max-sm:border-none  pb-6 w-full flex justify-center font-int text-base font-semibold text-[#121212]">
                Subtotal
              </div>
            )}
            <div
              className={`flex flex-col items-center justify-center h-full w-full font-int text-lg font-semibold ${
                index != 0
                  ? "border-y border-[#E8ECEF]"
                  : "border-t border-[#6C7275]"
              }`}
            >
              <div className="inner flex flex-col gap-1">
                ${parseFloat(products[index].price).toFixed(2)}
                <div className="remove flex items-center justify-end sm:hidden">
                  <button className="flex items-center">
                    <img src="/src/assets/Line2.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductsCart;
