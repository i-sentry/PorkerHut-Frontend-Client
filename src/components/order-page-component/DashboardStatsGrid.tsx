import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";

const DashboardStatsGrid = () => {
  return (
    <>
      <h1 className="text-2xl font-medium mb-2">Orders</h1>
      <div className="grid grid-cols-5 h-16 items-center justify-center">
        <div className="bg-[#F4F4F4] h-16 flex items-center justify-center flex-1 border-[#D9D9D9] border-r-2 gap-2 rounded-l-lg">
          <h1 className="font-normal">Today</h1>
          <RiArrowDownSLine />
        </div>
        <div className="bg-[#F4F4F4] h-16 flex flex-col items-center justify-center flex-1 border-[#D9D9D9] border-r-2">
          <h1 className="font-medium text-l">Pending Order</h1>
          <span className="font-medium text-l">(400)</span>
        </div>
        <div className="bg-[#F4F4F4] h-16 flex flex-col items-center justify-center flex-1 border-[#D9D9D9] border-r-2 text-[#F29339]">
          <h1 className="font-medium text-l">Ready to Go</h1>
          <span className="font-medium text-l">(400)</span>
        </div>
        <div className="bg-[#F4F4F4] h-16 flex flex-col items-center justify-center flex-1 border-[#D9D9D9] border-r-2 text-[#22C55E]">
          <h1 className="font-medium text-l">Fufilled Order</h1>
          <span className="font-medium text-l">(400)</span>
        </div>
        <div className="bg-[#F4F4F4] h-16 flex flex-col items-center justify-center flex-1 border-[#D9D9D9] text-[#F91919] rounded-r-lg">
          <h1 className="font-medium text-l">Failed Order</h1>
          <span className="font-medium text-l">(400)</span>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="my-4 text-xl">Overview</h1>
        <div className="flex gap-8 items-center">
          <h1 className="underline text-sm">All</h1>
          <button className="border-2 border-[#197B30] rounded-lg py-2 px-4 text-sm">
            Pending
          </button>
          <span className="underline text-sm">Ready to GO</span>
          <span className="underline text-sm">Completed</span>
          <span className="underline text-sm">Failed</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-between gap-4 ">
          <input type="radio" className="w-5 h-5" />
          <input
            type="search"
            className="h-9 w-[300px] bg-[#F4F4F4] focus:outline-none active:outline-none rounded-lg"
          />
          <button className="h-9  bg-[#197B30] w-16 rounded-lg text-white">Go</button>
        </div>
        <div>
          <div className="relative flex items-center justify-center px-5">
            <div className="text-[#1F1F1F] absolute top-1/2 -translate-y-1/2 left-[350px] h-9 bg-[#F4F4F4] w-10 flex items-center justify-center rounded-r-lg">
              <HiOutlineSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Order  number, item name or other criteria"
              className="text-sm focus:outline-none active:outline-none h-9 w-[350px] bg-[#F4F4F4] rounded-l-lg pl-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStatsGrid;
