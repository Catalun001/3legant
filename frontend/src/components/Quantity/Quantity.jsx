import React, { useState } from "react";

const Quantity = ({ singleProd = 0 }) => {
  const [amount, setAmount] = useState(0);

  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div
      className={`quantity inline-flex rounded items-center border   ${
        singleProd == 1
          ? "py-2 px-4 border-none bg-[#F5F5F5]"
          : "px-2 py-0.5 border-[#6C7275]"
      }`}
    >
      <div className="minus mt-1">
        <button onClick={decrement}>
          <img src="/src/assets/Minus.png" alt="" />
        </button>
      </div>
      <div
        className={`amount  text-[#121212] text-center text-sm font-semibold font-int ${
          singleProd == 1 ? "mx-5" : "mx-3"
        }`}
      >
        {amount}
      </div>
      <div className="plus mt-1">
        <button onClick={increment}>
          <img src="/src/assets/Add.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
