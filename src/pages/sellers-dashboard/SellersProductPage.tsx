import React from "react";
import StepperComponent from "../../components/step/StepperComponent";
import { HiOutlineSearch } from "react-icons/hi";
import Table from "../../components/Table/Table";
import ManageProductTable from "../../components/sellers-order-page-component/MangeProductTable";

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


      <div className="mt-10">
        <ManageProductTable />
      </div>
    </div>
  );
};

export default SellersProductPage;
