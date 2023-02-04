import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const product1 = require("../../../assets/images/Product1.jpg");

const FeaturedProduct = () => {
  const productData = [
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    {
      id: 1,
      title: "meat",
    },
    
  ];
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
      <div className="w-full m-auto grid md:grid-cols-4 md:gap-8 md:px-4 xxs:grid-cols-2 xxs:px-2 xxs:gap-4">
        {productData.map((item) => (
          <div className=" bg-white h-full py-6 z-30  border-gray-200 hover:border-transparent shadow-none  duration-200 hover:shadow-testShadow relative flex flex-col">
            <div className="w-full md:h-[302px] flex item-center justify-center relative group">
              <img
                src={product1}
                alt="image"
                className="w-full h-full object-cover"
              />

              <div className=" flex items-center justify-center absolute w-full h-14 bg-[#197B30] bottom-[-72px] group-hover:bottom-0 duration-700">
                <h1 className="text-white">ADD TO CART</h1>
              </div>
            </div>
            <div className="z-10 bg-white">
              <div className="flex items-center justify-between">
                <h2>Williams Ochoto Farms</h2>
                <span>Osun</span>
              </div>
              <div className="flex items-center justify-between">
                <h1>100% Healthy-Fed Pork Lap</h1>
                <span>1000g</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((start, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label className="">
                        <input
                          type="radio"
                          name="rating"
                          className="hidden"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <AiFillStar
                          size={20}
                          color={
                            ratingValue <= (hover || rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                        />
                      </label>
                    );
                  })}
                </div>
                <span>N3000</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProduct;
