import React from 'react'
import FeaturedProduct from '../featured-product-component/best-selling-product/FeaturedProduct';

const Header = () => {
  return (
    <div className="p-3">
      <div className="flex justify-center items-center">
        <h1 className="font-normal tracking-tight text-3xl">Featured Products</h1>
      </div>
      <div className="flex items-center justify-center md:mb-10 xxs:mb-6">
        <div className=" block h-1 w-20 bg-[#197B30]"></div>
      </div>
      <FeaturedProduct />
    </div>
  );
}

export default Header