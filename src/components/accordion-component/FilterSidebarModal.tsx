import React from "react";
import Filtercomp from "../custom-filter/FilterComp";
import { BsX } from "react-icons/bs";

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
      <div className="fixed left-0 z-50 h-full w-[80%] overflow-hidden bg-white py-20 px-4 pb-[120px] xxs:block lg:hidden">
        <div className=" flex items-center justify-between">
          <span className=" text-[16px] font-medium ">Filters</span>
          <span
            className=" flex cursor-pointer items-center gap-1 text-base font-medium text-[#197b30]"
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
            className="rounded border border-red-500 py-3 px-6 text-red-500 shadow-md"
          >
            Clear filter
          </button>
          <button
            onClick={handleApplyClick}
            className="rounded bg-[#197B30] py-3 px-6 text-white shadow-md"
          >
            Show result
          </button>
        </div>
      </div>
      <div
        onClick={onClose}
        className="absolute top-0  right-0 z-50 min-h-screen w-1/5 bg-gray-800 bg-opacity-50 xxs:fixed lg:hidden"
      ></div>
    </>
  );
};

export default FilterSidebar;
