import React from "react";
import { NavLink } from "react-router-dom";
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
  if (!item) {
    //Render the skeleton loader when item is not available
    return <SkeletonLoader />;
  }

  return (
    <NavLink
      to={`/category/${item._id}?q=${item?.name}`}
      className="group relative flex h-full w-full flex-1 items-center justify-center overflow-hidden"
    >
      <img
        src={item?.featuredImage}
        alt=""
        className="h-full w-full rounded-sm object-cover transition duration-300 ease-linear hover:scale-125 hover:transform group-hover:scale-110"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40"></div>
      <div className="absolute z-10">
        <span className="text-[24px] font-medium leading-normal text-white">
          {cap(item?.name)}
        </span>
      </div>
    </NavLink>
  );
};

export default Card;
