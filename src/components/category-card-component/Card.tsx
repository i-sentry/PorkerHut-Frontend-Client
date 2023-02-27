import React from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  id: number;
  title: string;
  src: string;
}

const Card = ({ id, title, src }: CategoryProps) => {
  return (

      <Link to={""} className="md:w-full md:h-full relative xxs:w-[560px] xxs:h-56 overflow-hidden ">
        <img
          src={src}
          alt=""
          className="object-cover rounded transition duration-1000 ease-in  hover:transform hover:scale-125"
        />
        <div className="absolute md:top-[44%] md:right-[36%] xxs:top-[44%] xxs:right-[32%]">
          <span className="text-white font-medium text-xl">{title}</span>
        </div>
      </Link>

  );
};

export default Card;
