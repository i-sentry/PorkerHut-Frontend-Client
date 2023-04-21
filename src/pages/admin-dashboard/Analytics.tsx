import React from "react";

import { HiOutlineTrendingDown, HiOutlineTrendingUp } from "react-icons/hi";
import CustomerReview from "./CustomerReview";
import DoughnutChart from "./DoughnutChart";
import { AreaChart } from "./AreaChart";

const Analytics = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="ml-10 mr-4 mt-4 mb-8">
      <div className="mb-2">
        <h1 className="text-xl font-medium ">Analytics</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          Monitor every activity here
        </span>
      </div>

      <div className="md:grid md:grid-cols-4 gap-4 h-28 items-center justify-center ">
        <div className="bg-[#F4F4F4] h-full flex flex-col flex-1  gap-2 rounded  justify-center px-6">
          <h1 className="text-[#A2A2A2] font-normal">Revenue</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">N400</span>
            <span className="flex gap-2 items-center">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col flex-1  gap-2 rounded  justify-center px-6">
          <h1 className="text-[#A2A2A2] font-normal">Orders</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">912</span>
            <span className="flex gap-2 items-center">
              <HiOutlineTrendingDown size={20} className="text-[#F91919]" />
              <span className="text-[#F91919]">-5%</span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col flex-1  gap-2 rounded  justify-center px-6">
          <h1 className="text-[#A2A2A2] font-normal">Visitors</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">12.5K</span>
            <span className="flex gap-2 items-center">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col flex-1  gap-2 rounded  justify-center px-6">
          <h1 className="text-[#A2A2A2] font-normal">Conversion</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">52%</span>
            <span className="flex gap-2 items-center">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <DoughnutChart />
        <CustomerReview rating={0} />
      </div>


      <div className="mt-4 bg-[#F4F4F4]">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="font-medium">Sales Revenue</h1>
          <form className="flex items-center justify-between">
          
          <div className="flex gap-4 items-center">
            <label className="" htmlFor="week"></label>
            <input type="week" className="focus:outline-none border h-10 w-42 px-2 rounded " />
          </div>
        </form>
        </div>

        <AreaChart />

      </div>
    </div>
  );
};

export default Analytics;
