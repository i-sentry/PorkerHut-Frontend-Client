import React from "react";
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
      <div className="md:hidden xxs:block bg-white w-[80%] z-50 py-20 pb-[120px]   fixed overflow-hidden px-4 h-full">
        <div className=" flex items-center justify-between">
          <span className=" font-medium text-[16px] ">Filters</span>
          <span
            className="  font-medium text-base text-[#197b30]"
            onClick={onClose}
          >
            Cancel
          </span>
        </div>
        <div className="h-full">
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
        className="md:hidden xxs:fixed  bg-gray-800 bg-opacity-50 w-1/5 min-h-screen z-50 top-0 right-0 absolute"
      ></div>
    </>
  );
};

export default FilterSidebar;
