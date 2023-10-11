import React from "react";

import { NavLink } from "react-router-dom";
import { CardProps, cap } from "./Card";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";

const MobileCard: React.FC<CardProps> = ({ item }) => {
  // const { data: allCategories, error, isLoading } = useGetAllCategories();
  return (
    <NavLink
    to={`/category/${item?._id}?q=${item?.name}`}
      className="flex flex-auto justify-between flex-col h-[264px] w-[65%] rounded-lg shadow-md xxs:flex-shrink-0 md:flex-shrink relative md:hidden"
    >
      <div className="relative h-[264px]">
        <img
          src={item.featuredImage}
          alt=""
          className="object-cover w-full h-[264px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col items-center">
            <span className="text-white font-medium text-[20px] leading-[24px]">
              {cap(item.name)}
            </span>
            <span className="bg-[#fff] w-14 h-[1px]"></span>
            <p className="font-light text-[12px] leading-[14px] mt-1 text-[#fff]">
              Click to shop
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MobileCard;
