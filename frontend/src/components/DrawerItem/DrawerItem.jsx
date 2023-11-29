import React from 'react'

const DrawerItem = ({image,title,color,price}) => {
  return (
    <div className="item flex py-6">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="description ml-4 mr-auto">
        <div className="title text-[#141718] font-int text-sm font-semibold">
          {title}
        </div>
        <div className="color text-[#6C7275] font-int text-xs my-2 font-normal">
          Color: {color}
        </div>
        <div className="quantity w-[90px]  "></div>
      </div>
      <div className="deleteAndPrice  flex flex-col  justify-start items-end ">
        <div className="price text-[#121212] font-int text-sm font-semibold">
          ${price}
        </div>
        <div className="delete mt-2 inline-flex ">
          <img src="src\assets\Line.png" />
        </div>
      </div>
    </div>
  );
}

export default DrawerItem