import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { productData } from "../../../utils/productData";
import ProductCard from "../ProductCard";

const FeaturedProduct = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div className=" xxs:px-2 xxs:py-2 md:px-8 flex justify-between items-center bg-[#197B30] ">
        <h1 className="text-2xl font-medium text-white">Featured Products</h1>
        <div className=" px-2 flex items-center md:py-1.5 text-white rounded-md hover:cursor-pointer">
          See all{" "}
          <button className="hover:cursor-pointer">
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-4 p-4 gap-3  xxs:grid-cols-2 ">
        {productData.map((item: any) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </>
  );
};

export default FeaturedProduct;
