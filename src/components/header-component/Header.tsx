import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-2xl">Featured Products</h1>
      </div>
      <div className="flex items-center justify-center md:mb-10 xxs:mb-6">
        <div className=" block h-1 w-20 bg-[#197B30]"></div>
      </div>
    </div>
  );
}

export default Header