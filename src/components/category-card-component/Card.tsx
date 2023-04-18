import React from "react";
import { Link, NavLink } from "react-router-dom";

interface CategoryProps {
  id: number;
  title?: string;
  src: string;
  path: string,
}

const Card = ({ id, title, src, path }: CategoryProps) => {
console.log(title,"title")
  return (

    <NavLink to={`/category/${title}`} className="md:w-full md:h-full relative xxs:w-[560px] xxs:h-56 overflow-hidden ">
        <img
          src={src}
          alt=""
          className="object-cover rounded transition duration-1000 ease-in  hover:transform hover:scale-125"
        />
        <div className="absolute md:top-[44%] md:right-[40%] xxs:top-[44%] xxs:right-[32%]">
          <span className="text-white font-medium text-xl">{title}</span>
        </div>
      </NavLink>

  );
};

export default Card;
