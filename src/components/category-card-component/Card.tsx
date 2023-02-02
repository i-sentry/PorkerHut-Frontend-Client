
import React from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  id: number;
  title: string;
  src: string;
}

const Card = ({ id, title, src }: CategoryProps) => {
  return (
    <Link to={""}>
      <div className="md:w-full md:h-full relative xxs:w-[260px]">
        <img src={src} alt="" className="object-cover rounded transition duration-150 ease-in scale-100 hover:scale-105" />
        <div className="absolute md:top-[44%] md:right-[36%] xxs:top-[44%] xxs:right-[32%]">
          <span className="text-white font-medium text-xl">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
