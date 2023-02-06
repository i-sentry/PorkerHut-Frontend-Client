import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ProductCards from "./ProductCards";
import { bestSelling, productData } from "../../../utils/productData";
import ProductCard from "../ProductCard";

const Product = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="">
      <div className=" xxs:px-2 xxs:py-2 md:px-8 flex justify-between items-center bg-[#197B30]">
        <h1 className="text-2xl font-medium text-white">Best Selling</h1>
        <div className=" px-2 flex items-center md:py-1.5 text-white rounded-md hover:cursor-pointer">
          See all{" "}
          <button className="hover:cursor-pointer">
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <Carousel responsive={responsive} className="p-4">
        {bestSelling.map((item: any) => {
          return (
            <div className="">
              <ProductCard key={item.id} item={item} />

            </div>
            );
        })}
      </Carousel>
    </div>
  );
};

export default Product;
