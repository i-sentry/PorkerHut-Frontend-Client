import React from "react";
import {  NavLink } from "react-router-dom";
import { ICategory, SkeletonLoader } from "../category-component/Category";

export interface CardProps {
  item: ICategory;
}
export const cap = (arg?: string) => {
  return arg
    ?.toLowerCase()
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};



const Card: React.FC<CardProps> = ({ item }) => {
  console.log(item, "title");
  if (!item) {
    //Render the skeleton loader when item is not available
    return <SkeletonLoader />;
  }

  return (
    <NavLink
      to={`/category/${item._id}?q=${item?.name}`}
      className="overflow-hidden relative flex-1 max-h-[420px] flex items-center justify-center"
    >
      <img
        src={item?.featuredImage}
        alt=""
        className="object-cover rounded-sm transition duration-1000 ease-in hover:transform hover:scale-125 w-full h-full opacity-95"
      />
      <div className="absolute">
        <span className="text-white font-medium text-[24px] leading-normal">
          {cap(item?.name)}
        </span>
      </div>
    </NavLink>
  );
};

export default Card;
