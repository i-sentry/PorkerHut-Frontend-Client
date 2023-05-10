import React from 'react'
import FeaturedProduct from '../featured-product-component/best-selling-product/FeaturedProduct';
import { BiChevronRight } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Header = () => {

  return (
    <div className="p-3 my-10">
      <div className="flex justify-center items-center mb-2">
        <h1 className="font-medium md:leading-[47px] md:text-[40px] xxs:text-[20px] xxs:leading-[23px] text-[#333333]">
          Featured Products
        </h1>
      </div>
      <div className="flex items-center justify-center md:mb-16 xxs:mb-6">
        <div className=" block h-1.5 w-20 bg-[#197B30]"></div>
      </div>
      <FeaturedProduct />

      <Link
        to="/products"
        className="my-10 flex items-center justify-center hover:text-[#197b30]"
      >
        <span className="text-[#333333] whitespace-normal text-[16px] leading-[19px] font-medium mr-2 underline  hover:text-[#197b30]">
          SEE ALL
        </span>
        <AiOutlineRight />
      </Link>
    </div>
  );
}

export default Header