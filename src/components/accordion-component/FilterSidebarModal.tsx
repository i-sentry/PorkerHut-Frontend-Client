import React from "react";
import MultiRangeSlider from "./MultiSlider";
import Filter from "./Accordion";

interface FilterSidebarProps {
  open: boolean;
  onClose: () => void;
  setData?: any;
  menuItem?: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterSidebar = ({
  open,
  onClose,
  menuItem,
  setData,
  handleClick,
}: FilterSidebarProps) => {
  if (!open) return null;
  return (
    <>
      <div className="md:hidden xxs:block bg-white w-[80%] min-h-screen z-50  fixed overflow-hidden px-4 h-full">
        <div className="mt-10 flex items-center justify-between">
          <span className=" font-light text-base ">Filters</span>
          <span
            className="  font-light text-base text-[#197b30]"
            onClick={onClose}
          >
            Cancel
          </span>
        </div>
        <div className="h-[500px]">
          <Filter
            setData={setData}
            menuItem={menuItem}
            handleClick={handleClick}
          />
        </div>

        <div className="flex items-center justify-center ">
          <button onClick={handleClick} className="bg-[#197B30] text-white py-3 px-6 rounded shadow-md">
            Show result
          </button>
        </div>
      </div>
      <div
        onClick={onClose}
        className="md:hidden xxs:fixed bg-gray-800 bg-opacity-50 w-1/5 min-h-screen z-50 top-0 right-0 absolute"
      ></div>
    </>
  );
};

export default FilterSidebar;
