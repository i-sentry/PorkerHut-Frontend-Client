import React from 'react'
import { CategoryProps } from './Card';
import { NavLink } from 'react-router-dom';

const MobileCard = (items: any) => {
  return (
    <NavLink
      to={`/category/${items?.title}`}
      className="flex flex-auto justify-between flex-col h-[264px] w-[65%] rounded-lg shadow-md xxs:flex-shrink-0 md:flex-shrink relative md:hidden"
    >
      <div className="relative h-[264px]">
        <img
          src={items?.src}
          alt=""
          className="object-cover w-full h-[264px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col items-center">
            <span className="text-white font-medium text-xl">
              {items?.title}
            </span>
            <span className="bg-[#fff] w-8 h-0.5"></span>
            <p className="font-light text-sm text-[#fff]">Click to shop</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MobileCard