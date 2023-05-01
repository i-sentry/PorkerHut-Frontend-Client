import React from "react";
import { Link, NavLink } from "react-router-dom";

export interface CategoryProps {
  id: number;
  title?: string;
  src: string;
  path: string,
}



const Card = ({ id, title, src, path }: CategoryProps) => {
console.log(title,"title")
  return (
    <NavLink
      to={`/category/${title}`}
      className="w-full md:w-auto md:h-full relative h-full overflow-scroll"
      style={{ maxWidth: "100vw" }}
    >
      <img
        src={src}
        alt=""
        className="object-cover rounded transition duration-1000 ease-in hover:transform hover:scale-125 w-full h-full"
      />
      <div className="absolute md:top-[44%] md:right-[40%] xxs:top-[44%] xxs:right-[32%]">
        <span className="text-white font-medium text-xl">{title}</span>
      </div>
    </NavLink>
  );
};

export default Card;
