import React from "react";
import { Link, NavLink } from "react-router-dom";

export interface CategoryProps {
  id: number;
  title?: string;
  src: string;
  path: string;
}

const Card = ({ item, data }: { item: any; data: any }) => {
  console.log(data.length, "title");
  return (
    <NavLink
      to={`/category?q=${item.title}`}
      className={` ${
        data.length > 3 ? "w-[380px]" : "w-[400px]"
      }   h-[400px]  relative  overflow-hidden `}
    >
      <img
        src={item.src}
        alt=""
        className="object-cover rounded-sm transition duration-1000 ease-in hover:transform hover:scale-125 w-full h-full opacity-95"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
      <div className="absolute md:top-[44%] md:right-[40%] xxs:top-[44%] xxs:right-[32%]">
        <span className="text-white font-medium text-2xl">{item.title}</span>
      </div>
    </NavLink>
  );
};

export default Card;
