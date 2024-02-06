import React, { useState } from "react";
import Quantity from "../Quantity/Quantity";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cartSlice";
const DrawerItem = ({
  productId,
  image,
  title,
  color,
  price,
  p = 0,
  Amount,
}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const descriptionStyle = {
    paddingRight: `${p}rem`,
  };
  price = parseFloat(price).toFixed(2);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const handleQuantityChange = (productId, newAmount) => {
    const itemToUpdate = cartItems.find((item) => item.id === productId);
    if (itemToUpdate) {
      dispatch(updateQuantity({ id: productId, amount: newAmount }));
    }
  };
  const handleDelete = () => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div className="item flex py-6">
      <div className="image">
        <img src={image} alt="" className="object-fit h-20- w-20" />
      </div>
      <div className="description ml-4 mr-auto p" style={descriptionStyle}>
        <div className="title text-[#141718] font-int text-sm font-semibold">
          {title}
        </div>
        <div className="color text-[#6C7275] font-int text-sm my-2 font-normal">
          Color: {color}
        </div>
        <div className="quantity w-[90px]  ">
          <Quantity
            amount={Amount}
            onQuantityChange={(amount) =>
              handleQuantityChange(productId, amount)
            }
          />
        </div>
      </div>
      <div className="deleteAndPrice  flex flex-col  justify-start items-end ">
        <div className="price text-[#121212] font-int text-sm font-semibold">
          ${price}
        </div>
        <div className="delete mt-2 inline-flex " onClick={handleDelete}>
          <img src="\src\assets\Line.png" />
        </div>
      </div>
    </div>
  );
};

export default DrawerItem;
