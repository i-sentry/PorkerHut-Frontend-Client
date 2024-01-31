import React from "react";
import Filter from "./Accordion";
import Filtercomp from "../custom-filter/FilterComp";
import { BsX, BsXCircle } from "react-icons/bs";

interface FilterSidebarProps {
  open: boolean;
  onClose: () => void;
  setData?: any;
  menuItem?: any;
  selectedItems?: any;
  setSelectedItems: any;
  handleApplyClick: () => void;
  handleClear: () => void;
  data: any;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterSidebar = ({
  open,
  onClose,
  // menuItem,
  selectedItems,
  setSelectedItems,
  data,
  handleApplyClick,
  handleClear,
  setData,
  handleClick,
}: FilterSidebarProps) => {
  if (!open) return null;
  return (
    <>
      <div className="md:hidden xxs:block bg-white w-[80%] z-50 py-20 pb-[120px]   fixed overflow-hidden px-4 h-full">
        <div className=" flex items-center justify-between">
          <span className=" font-medium text-[16px] ">Filters</span>
          <span
            className=" flex gap-1 items-center font-medium text-base cursor-pointer text-[#197b30]"
            onClick={onClose}
          >
            <BsX size={20} />
            close
          </span>
        </div>
        <div className="h-full">
          {/* <Filter
            setData={setData}
            // menuItem={menuItem}
            handleClick={handleClick}
            // 

            
          /> */}

          <Filtercomp
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            data={data}
            handleApplyClick={handleApplyClick}
            handleClear={handleClear}
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleClear}
            className="border-red-500 border text-red-500 py-3 px-6 rounded shadow-md"
          >
            Clear filter
          </button>
          <button
            onClick={handleApplyClick}
            className="bg-[#197B30] text-white py-3 px-6 rounded shadow-md"
          >
            Show result
          </button>
        </div>
      </div>
      <div
        onClick={onClose}
        className="md:hidden xxs:fixed  bg-gray-800 bg-opacity-50 w-1/5 min-h-screen z-50 top-0 right-0 absolute"
      ></div>
    </>
  );
};

export default FilterSidebar;
