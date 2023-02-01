import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedProductCard from "../featurd-product-card-component/FeaturedProductCard";
import { BsArrowRightShort } from "react-icons/bs";

interface FeaturedProps {
  type : string
}

const FeaturedProduct = ({type}: FeaturedProps) => {
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

  const productData = [
    {
      id: 1,
      imageUrl: "",
      name: "",
      weight: 1200,
      price: 2000,
      desc: "",
    },
  ];

  return (
    <div className="md:h-[400px]  mx-auto md:my-10 ">
      <div className=" xxs:px-2 xxs:py-2 md:px-8 md:w-[28%] flex justify-between items-center">
        <h1 className="text-2xl font-medium">{type}</h1>
        <div className="bg-[#197B30] px-2 flex items-center md:py-1.5 text-white rounded-md hover:cursor-pointer">
          See all{" "}
          <button className="hover:cursor-pointer">
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <Carousel responsive={responsive}>
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
      </Carousel>
    </div>
  );
};

export default FeaturedProduct;
