import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

type Product = {
  location: string;
  name: string;
  weight: string;
  productName: string;
};

type Item = {
  id: string;
  title: string;
  type?: string;
  category: string;
  price: string;
  product: Product;
  img: string;
  desc: string;
};

type FavouriteProductCardProps = {
  item: Item;
};

const FavouriteProductCard = ({ item }: FavouriteProductCardProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = () => {};

  return (
    <div>
      <div className=" flex flex-col shadow-lg rounded-md ease-in-out p-3 transform hover:translate-y-2 hover:shadow-xl transition duration-300 cursor:pointer">
        <div className="w-full md:h-[302px] flex item-center justify-center relative group">
          <img
            src={item.img}
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
            <div className="flex text-yellow-500 cursor-pointer">
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
                        ratingValue <= (hover || rating) ? "#fe6600" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>
            <span className="whitespace-nowrap text-sm font-semibold">
              ₦{item?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProductCard;
