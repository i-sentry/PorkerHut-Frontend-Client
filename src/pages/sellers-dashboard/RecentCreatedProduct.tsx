import React from "react";
import { HiChevronRight } from "react-icons/hi";

const RecentCreatedProduct = () => {
  return (
    <div className="bg-[#F4F4F4] w-full  font-normal  rounded-xl">
      <div className="">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="text-[16px] leading-[19px] font-medium">
              Pork{" "}
            </span>
            <HiChevronRight size={24} />
            <span className="text-[16px] leading-[19px] font-normal">
              Bacon
            </span>
          </div>
          <span className="text-[16px] leading-[19px] font-normal text-[#A2A2A2]">
            25 December 2022
          </span>
        </div>
        <hr />
      </div>
      <div className="">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="text-[16px] leading-[19px] font-medium">
              Pork{" "}
            </span>
            <HiChevronRight size={24} />
            <span className="text-[16px] leading-[19px] font-normal">
              Bacon
            </span>
          </div>
          <span className="text-[16px] leading-[19px] font-normal text-[#A2A2A2]">
            25 December 2022
          </span>
        </div>
        <hr />
      </div>
      <div className="">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="text-[16px] leading-[19px] font-medium">
              Pork{" "}
            </span>
            <HiChevronRight size={24} />
            <span className="text-[16px] leading-[19px] font-normal">
              Bacon
            </span>
          </div>
          <span className="text-[16px] leading-[19px] font-normal text-[#A2A2A2]">
            25 December 2022
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default RecentCreatedProduct;
