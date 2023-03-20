import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux'
import { addProductToCart } from "../../redux/features/product/productSlice";
import RatingWidget from "../RatingWidget";

const Cards = ({ item }: any) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addProductToCart({ id: item?.id }))
  };

  // console.log({ item });
  return (
    <div className=" flex flex-col shadow-lg rounded-md ease-in-out p-3 transform hover:translate-y-2 hover:shadow-xl transition duration-300 cursor:pointer">
      <div className="w-full md:h-[302px] flex item-center justify-center relative group">
        <img
          src={item?.img}
          alt="product"
          className="w-full h-full object-cover"
        />

        <div
          onClick={handleClick}
          className=" flex items-center justify-center absolute w-full h-14 md:bg-[#197B30] md:bottom-[-72px] md:group-hover:bottom-0 duration-700 cursor-pointer"
        >
          <h1 className="text-white xxs:hidden md:block">ADD TO CART</h1>
        </div>
      </div>
      <div className="z-10 bg-white">
        <div className="flex items-center justify-between py-1">
          <h2 className="text-sm text-[#A2A2A2]">{item?.title}</h2>
          <span className="text-sm text-[#A2A2A2]">
            {item?.product?.location}
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <h1 className="whitespace-nowrap text-sm font-semibold">
            {item?.product?.productName}
          </h1>
          <span className="whitespace-nowrap text-sm font-semibold">
            {item?.product?.weight}
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <RatingWidget onChange={(value) => console.log(value)} defaultValue={2} />
          <span className="whitespace-nowrap text-sm font-semibold">
            ₦{item?.price}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cards;