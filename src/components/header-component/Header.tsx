import React from 'react'
import FeaturedProduct from '../featured-product-component/best-selling-product/FeaturedProduct';
import { BiChevronRight } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="p-3 my-10">
      <div className="flex justify-center items-center">
        <h1 className="font-normal tracking-tight md:text-3xl xxs:text-lg">
          Featured Products
        </h1>
      </div>
      <div className="flex items-center justify-center md:mb-10 xxs:mb-6">
        <div className=" block h-1 w-20 bg-[#197B30]"></div>
      </div>
      <FeaturedProduct />
      
      <Link
        to="/product"
        className="my-10 flex items-center justify-center hover:text-[#197b30]"
      >
        <span className="text-sm mr-2 underline font-medium ">VIEW ALL</span>
        <AiOutlineRight />
      </Link>
    </div>
  );
}

export default Header