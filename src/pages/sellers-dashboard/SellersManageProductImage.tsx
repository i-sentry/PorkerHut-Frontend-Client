import React from "react";
import ManageProductImageTable from "../../components/vendors-component/ManageProductImageTable";

const SellersManageProductImage = () => {
  return (
    <div className="mb-10 ">
      <div className="">
        <h1 className="md:text-[36px] md:leading-[42px] md:font-medium  xxs:font-normal  mb-3 xxs:text-[20px] xxs:leading-[23px] text-[#1F1F1F]">
          Manage Products Images
        </h1>
        <div className="mb-4 ">
          <span className="text-[14px] leading-[16px] font-normal text-[#A2A2A2] ">
            Here you can manage your product images
          </span>
        </div>
      </div>

      <div className="mt-10">
        <ManageProductImageTable />
      </div>
    </div>
  );
};

export default SellersManageProductImage;
