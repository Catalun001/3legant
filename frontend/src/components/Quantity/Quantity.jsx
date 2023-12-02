import React, { useState } from "react";

const Quantity = () => {
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
    <div className="quantity inline-flex rounded items-center border border-[#6C7275] px-2 py-0.5">
      <div className="minus mt-1">
        <button onClick={decrement}>
          <img src="/src/assets/Minus.png" alt="" />
        </button>
      </div>
      <div className="amount mx-3 text-[#121212] text-center text-sm font-semibold font-int">
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
