import React from "react";
import { TbRefresh, TbRefreshOff } from "react-icons/tb";

const CustomerReview: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="w-[60%] bg-[#F4F4F4] h-[255px] px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className=" font-medium whitespace-nowrap">Customer Reviews</h1>
        <TbRefresh size={24} className="text-[#197B30] hover:cursor-pointeryar"/>
      </div>

      <div className="flex items-center gap-3 mt-5 justify-center">
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-5xl block">5.0</span>
          <span className="text-[#797979] text-sm  whitespace-nowrap">
            Based on 5600 reviews
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-sm font-medium text-[#333333]">
            <h1 className="whitespace-nowrap">Excellent</h1>
          </div>
          <div className="text-sm font-medium text-[#333333]">
            <h1 className="whitespace-nowrap">Good</h1>
          </div>
          <div className="text-sm font-medium text-[#333333]">
            <h1 className="whitespace-nowrap">Average</h1>
          </div>
          <div className="text-sm font-medium text-[#333333]">
            <h1 className="whitespace-nowrap">Below Average</h1>
          </div>

          <div className="text-sm font-medium text-[#333333] ">
            <h1 className="whitespace-nowrap">Poor</h1>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3  bg-green-200 w-full">
              <div className="h-3 bg-[#17C06B] rounded w-[90%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">4000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3  rounded bg-green-100 w-full">
              <div className="h-3 bg-[#42D98E] rounded w-[80%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">3500</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-yellow-200 rounded w-full">
              <div className="h-3 bg-[#FFC631] rounded w-[60%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">2400</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-yellow-300 rounded w-full">
              <div className="h-3 bg-[#E7A53D] rounded w-[40%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">1000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 bg-red-300 rounded w-full">
              <div className="h-3 bg-[#F03333] rounded w-[20%]"></div>
            </div>
            <span className="text-sm font-medium text-[#797979]">1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
