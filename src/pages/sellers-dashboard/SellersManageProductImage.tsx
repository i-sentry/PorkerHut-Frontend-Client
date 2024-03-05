// import ManageProductImageTable from "../../components/vendors-component/ManageProductImageTable";

import { BsSearch } from "react-icons/bs";
import SellerProductImageTable from "./SellerProductImageTable";

const SellersManageProductImage = () => {
  return (
    <div className="mb-10 px-4 pt-6 ">
      <div className="">
        <h1 className="md:text-[36px] md:leading-[42px] md:font-medium  xxs:font-normal  mb-3 xxs:text-[20px] xxs:leading-[23px] text-[#1F1F1F]">
          Manage Products Images
        </h1>
        <div className="mb-4 ">
          <span className="text-[14px] leading-[16px] font-normal text-[#A2A2A2] ">
            Here you can manage your product images
          </span>
        </div>
        <div className="flex md:justify-end">
          <label htmlFor="search" className="relative inline-block w-[350px]">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search name or product ID...."
              className="px-4 form-input rounded-md w-full bg-neutral-200 focus:border-green-500 focus:ring-green-500"
            />
            <BsSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
          </label>
        </div>
      </div>

      <div className="mt-10">
        {/* <ManageProductImageTable /> */}

        <SellerProductImageTable />
      </div>
    </div>
  );
};

export default SellersManageProductImage;
