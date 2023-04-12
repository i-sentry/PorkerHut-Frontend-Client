import React from "react";

interface SellerPricingProps {
  orderId?: string;
}



export default function SellerAccount(props: SellerPricingProps) {

  const { orderId } = props;
  console.log(orderId);
  
  
  

  return (
    <form className="flex flex-col gap-2 bg-[#F4F4F4] px-4 py-6">
      <div className="mb-2">
        <h1>Product information{}</h1>
        <span className="text-xs text-[#797979]">
          Please fill in the necessary information.{" "}
        </span>
      </div>
      <div className="mx-2 flex-1">
        <div className="mt-3 h-4 text-xs">Product Name*</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1">
          <input
            name="name"
            placeholder="Enter product name"
            className="w-full appearance-none p-1 px-2 outline-none text-sm"
          />
        </div>
        <span className="text-xs text-[#797979]">
          Name of the product . For better listing, the name should match actual
          product.
        </span>
      </div>
      <div className="mx-2 flex-1">
        <div className="mt-3 h-4 text-xs ">Product breed</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1">
          <input
            name="breed"
            placeholder="Enter product breed"
            type="text"
            className="w-full appearance-none p-1 px-2 text-sm outline-none"
          />
        </div>
      </div>
      <div className="mx-2 flex-1 mt-2">
        <div className="mt-3 h-4 text-xs ">Type of Pork</div>
        <div className=" flex rounded border border-gray-200 bg-white p-1">
          <input
            name="pork"
            placeholder="Enter type of pork"
            type="text"
            className="w-full appearance-none p-1 px-2 text-sm outline-none"
          />
        </div>
        <span className="text-xs text-[#797979]">
          Please the type of pork. Example:Thighs, Breast and tenderloin, Ham,
          Pork Belly, Pork Rib Roast
        </span>
      </div>
    </form>
  );
}
