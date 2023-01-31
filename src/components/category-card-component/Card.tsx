import { ListItem } from "@material-ui/core";
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
      <div className="md:h-80 md:w-80 border-2 md:overflow-hidden rounded-md mt-10 relative xxs:w-[250px]">
        <img
          src={src}
          alt=""
          className="md:w-full md:h-80 xxs:h-[250px] object-cover xxs:w-[250px] transition duration-150 ease-in scale-100 hover:scale-125"
        />
        <div className="absolute md:top-40 md:right-28 xxs:top-28 xxs:right-16">
          <span className="text-white font-semibold">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
