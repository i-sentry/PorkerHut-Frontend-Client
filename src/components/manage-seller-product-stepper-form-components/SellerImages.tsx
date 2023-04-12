import React, { useState } from "react";
import SellerImage from "./SellerImage";

const SellerImages = () => {


  return (
    <>
  
      <div className="flex flex-col gap-2 bg-[#F4F4F4] px-4 py-6">
        <div className="mb-2">
          <h1>Images</h1>
          <span className="text-xs text-[#797979]">
            Images need to be at least 800 x 800 pixel with a maximum of 3000 x
            3000 pixel.{" "}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 px-4">
          <SellerImage />
          <SellerImage />
          <SellerImage />
          <SellerImage />
          <SellerImage />
          <SellerImage />
          <SellerImage />
          <SellerImage />
        </div>
      </div>
    </>
  );
};

export default SellerImages;