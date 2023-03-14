import React from "react";
import StepperComponent from "../../components/step/StepperComponent";
import { HiOutlineSearch } from "react-icons/hi";
import Table from "../../components/Table/Table";

const SellersProductPage = () => {
  return (
    <div className="mx-6">
      <div className="mt-4">
        <h1 className="my-2 text-xl">Manage Products</h1>
        <div className="mb-8 ">
          <span>The product overview where all products are managed.</span>
        </div>
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
          <input type="radio" className="w-4 h-4" />
          <input
            type="search"
            className="h-9 w-[300px] bg-[#F4F4F4] focus:outline-none active:outline-none rounded-lg"
          />
          <button className="h-9  bg-[#197B30] w-16 rounded-lg text-white">
            Go
          </button>
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

      <div className="mt-10">
        <Table />
      </div>
    </div>
  );
};

export default SellersProductPage;
