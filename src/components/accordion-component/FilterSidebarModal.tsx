import React from "react";
import Filtercomp from "../custom-filter/FilterComp";
import { BsX } from "react-icons/bs";
import { cn } from "../../helper/cn";

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
  return (
    <>
      <div
        className={cn(
          "fixed z-[60] h-full w-[90%] max-w-md overflow-hidden bg-white py-20 px-4 pt-14 pb-[120px] duration-300 xxs:block lg:hidden",
          open ? "left-0" : "-left-full",
        )}
      >
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
        <div className="flex h-full flex-col justify-between">
          <div className="hide-scroll-bar max-h-[500px] overflow-y-auto">
            <div className="h-max">
              <Filtercomp
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                data={data}
                handleApplyClick={handleApplyClick}
                handleClear={handleClear}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                handleClear();
                onClose();
              }}
              className="rounded border border-red-500 py-3 px-6 text-sm text-red-500 shadow-md"
            >
              Clear filter
            </button>
            <button
              onClick={handleApplyClick}
              className="rounded bg-[#197B30] py-3 px-6 text-sm text-white shadow-md"
            >
              Show result
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={onClose}
        className={cn(
          "absolute top-0 left-0 z-50 min-h-screen w-full bg-gray-800 bg-opacity-50 duration-300 xxs:fixed lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      ></div>
    </>
  );
};

export default FilterSidebar;
