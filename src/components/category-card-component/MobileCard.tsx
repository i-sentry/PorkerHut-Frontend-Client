import React from "react";
import { NavLink } from "react-router-dom";
import { CardProps, cap } from "./Card";

const MobileCard: React.FC<CardProps> = ({ item }) => {
  // const { data: allCategories, error, isLoading } = useGetAllCategories();
  return (
    <NavLink
      to={`/category/${item?._id}?q=${item?.name}`}
      className="relative flex h-[264px] w-full flex-col justify-between rounded-lg shadow-md xxs:flex-shrink-0 sm:w-1/2 md:hidden md:w-[65%] md:flex-shrink"
    >
      <div className="relative h-[264px]">
        <img
          src={item.featuredImage}
          alt=""
          className="h-[264px] w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-medium leading-[24px] text-white">
              {cap(item.name)}
            </span>
            <span className="h-[1px] w-14 bg-[#fff]"></span>
            <p className="mt-1 text-[12px] font-light leading-[14px] text-[#fff]">
              Click to shop
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MobileCard;
