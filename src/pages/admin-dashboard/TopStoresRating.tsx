import React from "react";
import Img from "../../assets/images/Pig.png";

const TopStoresRating = () => {
  return (
    <div className="bg-[#D9D9D9] rounded py-3 px-3 h-64 overflow-hidden overflow-y-scroll hide-scroll-bar">
      <div className="flex justify-between items-center ">
        <h4 className="font-bold text-slate-700 text-sm ">Top Stores</h4>
        <form>
          <div className="flex gap-4 items-center">
            <label className="" htmlFor="week"></label>
            <input
              type="week"
              className="focus:outline-none border h-10 w-36 px-2 rounded "
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col w-full pt-2 gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex items-center gap-2">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt=""
              className="h-10 w-10 border  rounded-full bg-white inline"
            />

            <div className="inline">
              <span className="text-sm whitespace-nowrap">Porker Hut</span>
              <span className="text-sm block text-[#A2A2A2]">Abuja</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium">₦120,000</span>
            <span className="block text-[#A2A2A2] text-sm">200 Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStoresRating;
