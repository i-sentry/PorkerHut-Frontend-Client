import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const product1 = require("../../../assets/images/Product1.jpg");

const FeaturedProductCard = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section>
      <div>
      </div>
      <div className="md:w-80 m-auto">
        <div className="md:h-100 group rounded md:px-2 md:auto xxs:p-2 ">
          <div className="relative overflow-hidden">
            <img src={product1} alt="" className="w-full object-cover" />
            <div className="absolute w-full bg-[#197B30] h-[40px] flex items-center justify-center -bottom-10 group-hover:bottom-0 transition-all duration-300 hover:cursor-pointer">
              <a href="" className="text-white text-sm">
                ADD TO CART
              </a>
            </div>
          </div>
          <div className=" md:flex md:items-center md:justify-between pt-1">
            <span className=" xxs:block text-xs text-[#A2A2A2] font-normal">
              Williams Ochoto Farms
            </span>
            <span className="text-xs text-[#A2A2A2] font-normal">Osun</span>
          </div>
          <div className="md:flex md:items-center md:justify-between mb-2">
            <h1 className="font-semibold text-base">
              100% Healthy-Fed Pork Lap{" "}
            </h1>
            <span className="font-normal">1000g</span>
          </div>
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex">
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
                    <FaStar
                      size={20}
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
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
    </section>
  );
};

export default FeaturedProductCard;
