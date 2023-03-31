import React from "react";
import AdminOverviewRating from "./AdminOverviewRating";
import AdminOverviewTopProduct from "./AdminOverviewTopProduct";
import { AreaChart } from "./AreaChart";
import TopStoresRating from "./TopStoresRating";


const Overview = () => {
  return (
    <div className="ml-10 mr-4 mt-4 mb-8">
      <div className="mb-2">
        <h1 className="text-xl font-medium ">Overview</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          This is an overview of Porker Hut.
        </span>
      </div>
      <div className="md:grid md:grid-cols-5 h-20 items-center justify-center ">
        <div className="bg-[#F4F4F4] h-full flex flex-col flex-1 border-[#D9D9D9] border-r-[1px] gap-2 rounded-l-sm items-start justify-center px-6">
          <h1 className="text-[#A2A2A2] font-normal">Total Sales</h1>
          <span className="text-lg font-medium">N400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex items-start justify-center flex-col flex-1 border-[#D9D9D9] border-r-[1px] px-6">
          <h1 className="text-[#A2A2A2] font-normal ">Daily Revenues</h1>
          <span className="text-lg font-medium">N400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col justify-center items-start flex-1 border-[#D9D9D9] border-r-[1px] px-6">
          <h1 className="text-[#A2A2A2] font-normal ">Items Sold</h1>
          <span className="text-lg font-medium">400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col items-start justify-center flex-1 border-[#D9D9D9] border-r-[1px] px-6">
          <h1 className="text-[#A2A2A2] font-normal">Average Order Value</h1>
          <span className="text-lg font-medium">N400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col items-start justify-center flex-1 border-[#D9D9D9] rounded-r-sm px-6">
          <h1 className="font-normal text-l">Total Orders</h1>
          <span className="font-medium text-l">N400</span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-5 h-20 items-center justify-center mt-3 ">
        <div className="bg-[#F4F4F4] h-full flex flex-col flex-1 border-[#D9D9D9] border-r-[1px] gap-2 rounded-l-sm items-start justify-center px-6">
          <h1 className="text-[#A2A2A2] font-normal">Average Daily Order</h1>
          <span className="text-lg font-medium">N400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex items-start justify-center flex-col flex-1 border-[#D9D9D9] border-r-[1px] px-6 text-[#F29339]">
          <h1 className="text-[#F29339] font-normal ">Pending Orders</h1>
          <span className="text-lg font-medium">400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col justify-center items-start flex-1 border-[#D9D9D9] border-r-[1px] px-6">
          <h1 className="font-normal text-[#22C55E]">Fulfilled Orders</h1>
          <span className="text-lg font-medium text-[#22C55E]">400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col items-start justify-center flex-1 border-[#D9D9D9] border-r-[1px] px-6">
          <h1 className=" font-normal text-[#F91919]">Failed Orders</h1>
          <span className="text-lg font-medium text-[#F91919]">400</span>
        </div>
        <div className="bg-[#F4F4F4] h-full flex flex-col items-start justify-center flex-1 border-[#D9D9D9] rounded-r-sm px-6">
          <h1 className="font-normal text-l">Returned Order</h1>
          <span className="font-medium text-l">400</span>
        </div>
      </div>

      <div className="bg-[#F4F4F4] mt-4 py-4">
        <form className="flex items-center justify-between">
          <div>
            <span className=" font-medium px-3">Sales Overview</span>
          </div>
          <div className="flex gap-4 items-center px-4">
            <label className="" htmlFor="week"></label>
            <input type="week" className="focus:outline-none border h-10 w-42 px-2 rounded " />
          </div>
        </form>
        <AreaChart />
      </div>


      <div className="grid grid-cols-3 items-center mt-8 gap-4">
        <TopStoresRating />
        <AdminOverviewTopProduct />
        <AdminOverviewRating />
      </div>
    </div>
  );
};

export default Overview;
