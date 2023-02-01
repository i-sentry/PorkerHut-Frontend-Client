import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center md:mx-10 xxs:mt-4">
        <h1 className="font-semibold text-2xl">Featured Products</h1>
      </div>
      <div className="flex items-center justify-center mb-10">
        <div className=" block h-1 w-20 bg-[#197B30]"></div>
      </div>
    </div>
  );
}

export default Header